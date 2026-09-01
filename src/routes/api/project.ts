import { createFileRoute } from "@tanstack/react-router";

// Storage is local-first on client; shared global in-memory state has been decommissioned
export const Route = createFileRoute("/api/project")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(
          JSON.stringify({
            message: "Armazenamento local-first ativo no cliente.",
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store, no-cache, must-revalidate",
            },
          }
        );
      },
      POST: async () => {
        return new Response(
          JSON.stringify({
            success: true,
            syncedAt: new Date().toISOString(),
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      },
    },
  },
});
