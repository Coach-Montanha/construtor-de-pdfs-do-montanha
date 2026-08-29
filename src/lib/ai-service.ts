/**
 * AI Service for Magazine Production (Google Gemini API + Smart Editorial Heuristics)
 */

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

async function callGeminiApi(prompt: string, apiKey?: string, systemInstruction?: string): Promise<string> {
  const key = apiKey || (typeof window !== "undefined" ? localStorage.getItem("gemini_api_key") : null);

  if (!key) {
    throw new Error("Chave de API Gemini não informada. Configure nas opções da revista.");
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

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
    const msg = errData?.error?.message || `Erro na chamada da API Gemini (${response.status})`;
    throw new Error(msg);
  }

  const data = (await response.json()) as GeminiResponse;
  const outputText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!outputText) {
    throw new Error("A IA não retornou conteúdo. Tente novamente.");
  }

  return outputText.trim();
}

/**
 * Reescrever e aprimorar texto de artigo com tom editorial de revista
 */
export async function polishEditorialText(
  text: string,
  tone: "motivational" | "journalistic" | "scientific" | "lifestyle" | "executive" = "journalistic",
  apiKey?: string
): Promise<string> {
  const system = `Você é um renomado editor-chefe de grandes revistas como Vogue, Men's Health, Forbes, Harvard Business Review e Time.
Sua missão é transformar rascunhos de artigos em textos editoriais impecáveis para publicação impressa.
Mantenha a essência do autor, mas torne os parágrafos fluidos, ricos, dinâmicos e divididos em seções claras com subtítulos elegantes.
Responda em Português do Brasil diretamente com o texto formatado.`;

  const toneMap = {
    motivational: "enérgico, inspirador, focado em alta performance e superação",
    journalistic: "preciso, cativante, elegante, com ritmo narrativo dinâmico e tom de autoridade",
    scientific: "embasado, claro, com rigor técnico traduzido para linguagem acessível",
    lifestyle: "descontraído, sofisticado, moderno e com apelo sensorial",
    executive: "estratégico, conciso, focado em liderança e visão de futuro",
  };

  const prompt = `Reescreva o seguinte artigo aplicando um tom ${toneMap[tone]}.
Divida em 3 a 5 parágrafos coesos e insira de 1 a 2 subtítulos chamativos se for relevante.

Texto original:
"""
${text}
"""`;

  try {
    return await callGeminiApi(prompt, apiKey, system);
  } catch (error) {
    // Fallback inteligente offline
    console.warn("AI fallback ativado para polimento:", error);
    return polishTextOfflineFallback(text, tone);
  }
}

/**
 * Gerar Títulos e Chapéus de Capa
 */
export async function generateEditorialHeadlines(
  currentTitle: string,
  contentSnippet: string,
  apiKey?: string
): Promise<{ title: string; subtitle: string; category: string }[]> {
  const system = `Você é diretor de arte e redação editorial de revistas de prestígio.
Crie 3 opções de manchetes monumentais para matéria de revista, com subtítulo explicativo de alto impacto e categoria recomendada.
Retorne rigorosamente no formato JSON puro:
[
  { "title": "TÍTULO EM CAIXA ALTA", "subtitle": "Subtítulo atraente de 1 a 2 linhas", "category": "CATEGORIA" }
]`;

  const prompt = `Artigo de referência:
Título atual: "${currentTitle}"
Resumo/Trecho:
"${contentSnippet.slice(0, 800)}"

Gere 3 propostas de títulos e subtítulos de capa.`;

  try {
    const raw = await callGeminiApi(prompt, apiKey, system);
    const cleanJson = raw.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.warn("AI fallback para manchetes:", error);
    return [
      {
        title: currentTitle.toUpperCase() || "A NOVA ERA DA ALTA PERFORMANCE",
        subtitle: "Como os protocolos modernos estão redefinindo os limites do corpo e da longevidade.",
        category: "ESPECIAL",
      },
      {
        title: `O GUIA DEFINITIVO: ${currentTitle.toUpperCase() || "TRANSFORMAÇÃO TOTAL"}`,
        subtitle: "Ciência, disciplina e estratégias práticas para atingir o topo do seu potencial.",
        category: "CAPA",
      },
      {
        title: "ALÉM DOS LIMITES CONVENCIONAIS",
        subtitle: "O segredo dos maiores atletas e estrategistas do mundo revelado passo a passo.",
        category: "EXCLUSIVO",
      },
    ];
  }
}

/**
 * Extrair Pull Quotes (Citações de Destaque) do artigo
 */
export async function extractPullQuotes(content: string, apiKey?: string): Promise<string[]> {
  const system = `Você é um diagramador editorial de revistas. Extraia as 3 frases mais impactantes, poéticas ou inspiradoras do texto para serem usadas como Pull Quotes (citações em destaque tipográfico gigante no meio das colunas).
Retorne no formato JSON: ["Frase 1", "Frase 2", "Frase 3"]`;

  const prompt = `Extraia 3 citações de impacto deste texto:
"""
${content.slice(0, 3000)}
"""`;

  try {
    const raw = await callGeminiApi(prompt, apiKey, system);
    const cleanJson = raw.replace(/```json/g, "").replace(/```/g, "").trim();
    const result = JSON.parse(cleanJson);
    if (Array.isArray(result) && result.length > 0) return result;
    throw new Error("Formato inválido");
  } catch (error) {
    console.warn("AI fallback para pull quotes:", error);
    const sentences = content
      .split(/[.!?]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 35 && s.length < 140);

    if (sentences.length >= 2) {
      return sentences.slice(0, 3);
    }
    return [
      "A consistência diária nos detalhes invisíveis constrói os resultados mais visíveis e duradouros.",
      "Quando aliamos ciência aplicada com execução implacável, qualquer barreira se torna degrau.",
      "O domínio do próprio corpo é a fundação para qualquer grande conquista na vida.",
    ];
  }
}

/**
 * Gerar um Artigo Completo a partir de um Tópico
 */
export async function generateFullArticleByTopic(
  topic: string,
  category: string,
  tone: string = "motivational",
  apiKey?: string
): Promise<{
  title: string;
  subtitle: string;
  content: string;
  pullQuotes: string[];
  keyTakeaways: string[];
  suggestedImagePrompt: string;
  estimatedReadTime: number;
}> {
  const system = `Você é o principal redator de uma revista mensal de renome mundial (como Revista Montanha / Forbes / Men's Health).
Escreva um artigo fascinante e profundo sobre o tema fornecido.
Retorne RIGOROSAMENTE um JSON válido com esta estrutura:
{
  "title": "Título Marcante da Matéria",
  "subtitle": "Subtítulo envolvente e provocativo",
  "content": "Texto com 4 a 6 parágrafos ricos separados por quebra de linha dupla, incluindo subtítulos de seção em negrito",
  "pullQuotes": ["Citação marcante 1", "Citação marcante 2"],
  "keyTakeaways": ["Ponto chave 1", "Ponto chave 2", "Ponto chave 3"],
  "suggestedImagePrompt": "Prompt fotográfico em inglês para IA gerar a capa da matéria (ex: cinematic photography of...)",
  "estimatedReadTime": 4
}`;

  const prompt = `Tema da Matéria: "${topic}"
Categoria: "${category}"
Tom Editorial: "${tone}"

Escreva o artigo completo pronto para diagramação na revista.`;

  try {
    const raw = await callGeminiApi(prompt, apiKey, system);
    const cleanJson = raw.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.warn("AI fallback para geração completa:", error);
    return {
      title: `${topic.toUpperCase()}: A REVOLUÇÃO DO MÉTODO`,
      subtitle: "Estratégias avançadas para maximizar resultados e construir um novo padrão de consistência.",
      content: `No cenário contemporâneo de alta performance, entender as engrenagens por trás do tema ${topic} tornou-se o diferencial entre a média e o extraordinário. Diversos estudos recentes comprovam que a metodologia correta é capaz de acelerar conquistas que antes levavam anos.\n\n**O Pilar da Consistência Estruturada**\nNão se trata apenas de esforço bruto, mas sim da inteligência com que alocamos nossa energia diária. Quando o protocolo é ajustado com precisão milimétrica, o corpo e a mente respondem em harmonia, estabelecendo novos platôs de desempenho.\n\n**Execução Sem Desculpas**\nA disciplina não depende de motivação passageira. Ela é um sistema construído sobre hábitos inegociáveis, medições constantes e refinamento contínuo. Quem domina esses princípios assume o controle absoluto da própria trajetória.`,
      pullQuotes: [
        "A excelência não é um ato isolado, mas o reflexo de cada decisão tomada nos bastidores.",
        "O protocolo perfeito é aquele executado com disciplina inflexível dia após dia.",
      ],
      keyTakeaways: [
        "Alinhe ciência e rotina para acelerar sua evolução.",
        "Monitore indicadores claros de progresso semanal.",
        "Elimine o ruído e foque apenas no que gera 80% do impacto.",
      ],
      suggestedImagePrompt: `Editorial magazine photography, aesthetic portrait of athlete and fitness master Coach Montanha in luxury dark gym, dramatic moody lighting, gold rim highlights, cinematic 8k`,
      estimatedReadTime: 4,
    };
  }
}

/**
 * Gerador de prompts de imagem e busca de imagens fotográficas em alta resolução
 */
export function getEditorialCuratedImage(category: string, index: number = 0): string {
  const categoryImages: Record<string, string[]> = {
    fitness: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=85",
    ],
    saude: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85",
    ],
    negocios: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85",
    ],
    tecnologia: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    ],
    lifestyle: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85",
    ],
    default: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
    ],
  };

  const key = category.toLowerCase().trim();
  const list = categoryImages[key] || categoryImages["default"] || [];
  return list[index % list.length] ?? "";
}

/**
 * Gerar URL de Imagem gerada por IA via Pollinations AI (Instantânea, sem custo)
 */
export function generateAiImageUrl(prompt: string, width = 1200, height = 800): string {
  const cleanPrompt = encodeURIComponent(
    `${prompt}, high quality editorial magazine photography, 8k resolution, photorealistic, cinematic lighting`
  );
  return `https://image.pollinations.ai/prompt/${cleanPrompt}?width=${width}&height=${height}&nologo=true&seed=${Math.floor(
    Math.random() * 100000
  )}`;
}

function polishTextOfflineFallback(text: string, tone: string): string {
  const paragraphs = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return text;

  const polished = paragraphs.map((para) => {
    let p = para.charAt(0).toUpperCase() + para.slice(1);
    if (!p.endsWith(".")) p += ".";
    return p;
  });

  return polished.join("\n\n");
}
