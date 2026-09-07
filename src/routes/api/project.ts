import { createFileRoute } from "@tanstack/react-router";

interface SyncedRecord {
  code: string;
  project: any;
  syncedAt: string;
}

// Armazenamento em memória no servidor (Edge / Node)
const projectStore = new Map<string, SyncedRecord>();
let latestRecord: SyncedRecord | null = null;

// ID fixo na nuvem para garantir persistência global entre diferentes nós e bordas
const CLOUD_FALLBACK_ID = "ff808181a067127101a0798e229d2bfb";
const CLOUD_API_URL = `https://api.restful-api.dev/objects/${CLOUD_FALLBACK_ID}`;

export const Route = createFileRoute("/api/project")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        const url = new URL(request.url);
        const requestedCode = (url.searchParams.get("code") || "").trim().toUpperCase();

        let targetRecord: SyncedRecord | null = null;

        if (requestedCode && projectStore.has(requestedCode)) {
          targetRecord = projectStore.get(requestedCode)!;
        } else if (latestRecord) {
          targetRecord = latestRecord;
        }

        // Se não estiver na memória desta borda, buscar na nuvem persistente
        if (!targetRecord || (requestedCode && targetRecord.code !== requestedCode)) {
          try {
            const res = await fetch(CLOUD_API_URL, {
              headers: { Accept: "application/json" },
            });
            if (res.ok) {
              const cloudObj = (await res.json()) as any;
              if (cloudObj?.data?.project) {
                targetRecord = {
                  code: cloudObj.data.code || "MONTANHA",
                  project: cloudObj.data.project,
                  syncedAt: cloudObj.data.syncedAt || new Date().toISOString(),
                };
                // Atualizar cache em memória
                projectStore.set(targetRecord.code, targetRecord);
                latestRecord = targetRecord;
              }
            }
          } catch (err) {
            console.warn("[Cloud API Fetch Warning]:", err);
          }
        }

        if (!targetRecord) {
          return new Response(
            JSON.stringify({
              error: "Nenhum projeto encontrado na nuvem para este código.",
              code: requestedCode || null,
            }),
            {
              status: 404,
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store, no-cache, must-revalidate",
              },
            }
          );
        }

        return new Response(
          JSON.stringify({
            success: true,
            code: targetRecord.code,
            project: targetRecord.project,
            syncedAt: targetRecord.syncedAt,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store, no-cache, must-revalidate",
            },
          }
        );
      },

      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as any;
          const project = body?.project;
          const code = (body?.code || "MONTANHA").trim().toUpperCase();

          if (!project || typeof project !== "object" || !Array.isArray(project.articles)) {
            return new Response(
              JSON.stringify({ error: "Estrutura do projeto inválida para sincronização." }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const now = new Date().toISOString();
          const record: SyncedRecord = {
            code,
            project,
            syncedAt: now,
          };

          // Salvar em memória no servidor
          projectStore.set(code, record);
          latestRecord = record;

          // Sincronizar em segundo plano na nuvem persistente (para compartilhamento entre dispositivos)
          try {
            await fetch(CLOUD_API_URL, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: `Montanha Magazine [${code}]`,
                data: {
                  code,
                  syncedAt: now,
                  project,
                },
              }),
            });
          } catch (cloudErr) {
            console.warn("[Cloud API Put Warning]:", cloudErr);
          }

          return new Response(
            JSON.stringify({
              success: true,
              code,
              syncedAt: now,
            }),
            {
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store, no-cache, must-revalidate",
              },
            }
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({ error: "Erro interno no servidor ao sincronizar projeto: " + err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
