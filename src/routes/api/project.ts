import { createFileRoute } from "@tanstack/react-router";

// In-memory persistent project store across server requests
let currentMagazineProject: any = null;

export const Route = createFileRoute("/api/project")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(JSON.stringify(currentMagazineProject || {}), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        });
      },
      POST: async ({ request }: { request: Request }) => {
        try {
          const data = await request.json();
          currentMagazineProject = {
            ...(data as Record<string, unknown>),
            syncedAt: new Date().toISOString(),
          };
          return new Response(
            JSON.stringify({
              success: true,
              syncedAt: currentMagazineProject.syncedAt,
            }),
            { headers: { "Content-Type": "application/json" } }
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, error: err.message }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
