import { createAPIFileRoute } from "@tanstack/react-start/api";

// In-memory persistent project store across server requests
let currentMagazineProject: any = null;

export const APIRoute = createAPIFileRoute("/api/project")({
  GET: async () => {
    return new Response(JSON.stringify(currentMagazineProject || {}), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  },
  POST: async ({ request }) => {
    try {
      const data = await request.json();
      currentMagazineProject = {
        ...data,
        syncedAt: new Date().toISOString(),
      };
      return new Response(
        JSON.stringify({
          success: true,
          syncedAt: currentMagazineProject.syncedAt,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
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
});
