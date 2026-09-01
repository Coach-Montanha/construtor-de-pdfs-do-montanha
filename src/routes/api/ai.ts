import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const AiRequestSchema = z.object({
  prompt: z.string().min(1).max(50000),
  systemInstruction: z.string().max(10000).optional(),
});

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: {
        text?: string;
      }[];
    };
  }[];
  error?: {
    message: string;
    code: number;
  };
}

export const Route = createFileRoute("/api/ai")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const apiKey = process.env['GEMINI_API_KEY'];
        if (!apiKey) {
          return new Response(
            JSON.stringify({
              error:
                "Chave de API Gemini não configurada no servidor. Defina a variável de ambiente GEMINI_API_KEY.",
            }),
            {
              status: 503,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        try {
          const rawBody = await request.json();
          const parsed = AiRequestSchema.safeParse(rawBody);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({
                error: "Parâmetros de requisição inválidos.",
                details: parsed.error.issues,
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const { prompt, systemInstruction } = parsed.data;

          const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

          const requestBody: Record<string, unknown> = {
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          };

          if (systemInstruction) {
            requestBody["systemInstruction"] = {
              parts: [{ text: systemInstruction }],
            };
          }

          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });

          if (!response.ok) {
            const errData = (await response.json().catch(() => ({}))) as GeminiResponse;
            const message = errData?.error?.message || "Erro na resposta da API Gemini.";
            console.error("[Gemini API Server Error]:", message);
            return new Response(
              JSON.stringify({
                error: "Falha na comunicação com o serviço de IA.",
              }),
              {
                status: 502,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const data = (await response.json()) as GeminiResponse;
          const outputText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (!outputText) {
            return new Response(
              JSON.stringify({ error: "A IA não retornou conteúdo textual." }),
              {
                status: 502,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          return new Response(JSON.stringify({ text: outputText.trim() }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err: unknown) {
          console.error("[AI Route Error]:", err);
          return new Response(
            JSON.stringify({ error: "Erro interno no processamento da IA." }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
