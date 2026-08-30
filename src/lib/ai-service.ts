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

export interface EditorialAnalysisResult {
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorBio: string;
  recommendedPageSpan: 1 | 2;
  recommendedTemplate:
    | "editorial-lead"
    | "workout-protocol"
    | "product-ad"
    | "facility-spotlight"
    | "two-column-quote"
    | "infographic-tips";
  rationale: string;
  wordCount: number;
  estimatedReadTime: number;
  formattedContent: string;
  pullQuotes: string[];
  keyTakeaways: string[];
  heroImagePrompt: string;
  suggestedHeroImage: string;
  secondaryImagePrompt?: string;
  suggestedSecondaryImage?: string;
}

/**
 * Motor de Análise e Enquadramento Editorial por IA
 * Analisa volume de texto, sugere 1 ou 2 páginas, template ideal, extrai citações e aplica formatação rica
 */
export async function analyzeAndDiagramEditorialText(
  rawText: string,
  apiKey?: string
): Promise<EditorialAnalysisResult> {
  const words = rawText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const estimatedReadTime = Math.max(1, Math.round(wordCount / 130));

  const isWorkoutText =
    /série|reps|repetiç|descanso|exercício|kettlebell|mace|warmup|aquecimento|supino|agachamento|bloco/i.test(
      rawText
    );
  const isProductText = /preço|cupom|loja|compre|desconto|equipamento|frete|garantia/i.test(rawText);
  const isFacilityText = /estúdio|academia|box|centro de treinamento|unidade|matriz|instalações/i.test(
    rawText
  );

  const system = `Você é o Diretor Editorial e Diagramador-Chefe da Revista Montanha (publicação de alta performance, força e estilo).
Sua função é analisar o texto bruto fornecido, avaliar o volume de palavras e estruturar o artigo diagramado perfeito para publicação em PDF A4.

REGRAS DE ENQUADRAMENTO:
1. Se o volume tiver mais de 550 palavras, defina "recommendedPageSpan": 2 (Matéria Dupla de 2 Páginas).
2. Se tiver menos de 550 palavras, defina "recommendedPageSpan": 1 (Página Única).
3. Se o texto for predominantemente sobre exercícios e séries, sugira template "workout-protocol".
4. Se for sobre produto/equipamento, sugira "product-ad".
5. Se for artigo de reflexão ou técnico, sugira "editorial-lead" ou "two-column-quote".
6. Formate o texto aplicando:
   - ==marca-texto== nos conceitos mais importantes (2 a 3 no máximo).
   - **negrito** em termos-chave.
   - <u>sublinhado</u> em princípios fundamentais.
   - "aspas" em declarações.
   - ### Subtítulo nos intertítulos de seção.
7. Extraia 1 a 2 citações de impacto memoráveis (pullQuotes) que representem o clímax do artigo.
8. Extraia 2 a 3 pontos-chave (keyTakeaways).
9. Gere um prompt em inglês em alta resolução para a imagem de abertura da matéria.

Retorne RIGOROSAMENTE no formato JSON com esta estrutura:
{
  "title": "TÍTULO EM CAIXA ALTA MONUMENTAL",
  "subtitle": "Subtítulo envolvente e explicativo",
  "category": "CATEGORIA EM MAIÚSCULAS",
  "author": "Coach Montanha",
  "authorBio": "Master Coach & Fundador",
  "recommendedPageSpan": 1 ou 2,
  "recommendedTemplate": "editorial-lead" | "workout-protocol" | "product-ad" | "facility-spotlight" | "two-column-quote" | "infographic-tips",
  "rationale": "Explicação concisa do motivo pelo qual a IA escolheu esse enquadramento e número de páginas",
  "formattedContent": "Texto formatado com parágrafos bem divididos por quebras duplas, usando ==destaques==, **negrito** e ### Subtítulos",
  "pullQuotes": ["Citação marcante do artigo"],
  "keyTakeaways": ["Ponto chave 1", "Ponto chave 2"],
  "heroImagePrompt": "Cinematic photography of athletic warrior in gritty industrial studio...",
  "secondaryImagePrompt": "Close up details of iron equipment and chalk dust..."
}`;

  const prompt = `Analise e diagrame o seguinte texto bruto (Volume: ${wordCount} palavras):
"""
${rawText}
"""`;

  try {
    const rawResponse = await callGeminiApi(prompt, apiKey, system);
    const cleanJson = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(cleanJson);

    const recommendedPageSpan: 1 | 2 = parsed.recommendedPageSpan === 2 || wordCount > 550 ? 2 : 1;
    const heroImg = getEditorialCuratedImage(parsed.category || "fitness", 0);
    const secondaryImg = getEditorialCuratedImage(parsed.category || "fitness", 1);

    return {
      title: parsed.title || "MATÉRIA EDITORIAL DE ALTA PERFORMANCE",
      subtitle: parsed.subtitle || "Princípios fundamentais e estratégias aplicadas de transformação.",
      category: parsed.category || (isWorkoutText ? "PROTOCOLO DE FORÇA" : "MONTANHA METHOD"),
      author: parsed.author || "Coach Montanha",
      authorBio: parsed.authorBio || "Master Coach & Fundador",
      recommendedPageSpan,
      recommendedTemplate: parsed.recommendedTemplate || (isWorkoutText ? "workout-protocol" : "editorial-lead"),
      rationale:
        parsed.rationale ||
        (recommendedPageSpan === 2
          ? `Volume de ${wordCount} palavras detectado: Recomendada Matéria Dupla de 2 Páginas para manter leitura fluida com fotos de apoio sem cortes.`
          : `Volume de ${wordCount} palavras: Perfeito para 1 Página A4 de alto impacto visual com 2 colunas equilibradas.`),
      wordCount,
      estimatedReadTime,
      formattedContent: parsed.formattedContent || rawText,
      pullQuotes: parsed.pullQuotes || ["A disciplina consistente nos detalhes constrói o corpo e a mente indestrutíveis."],
      keyTakeaways: parsed.keyTakeaways || [
        "Aplique a metodologia com regularidade.",
        "Monitore o progresso semanal.",
      ],
      heroImagePrompt:
        parsed.heroImagePrompt ||
        "Aesthetic dynamic athletic photography in dramatic lighting, 8k resolution, editorial style",
      suggestedHeroImage: heroImg,
      secondaryImagePrompt: parsed.secondaryImagePrompt,
      suggestedSecondaryImage: secondaryImg,
    };
  } catch (error) {
    console.warn("AI fallback para análise e enquadramento:", error);

    const recommendedPageSpan: 1 | 2 = wordCount > 550 ? 2 : 1;
    const paragraphs = rawText
      .split(/\n+/)
      .map((p) => p.trim())
      .filter(Boolean);

    // Heuristics to format paragraphs
    const formattedParagraphs = paragraphs.map((para, idx) => {
      let p = para;
      if (idx === 0 && !p.startsWith("#")) {
        // Highlight important part of first sentence
        const firstDot = p.indexOf(".");
        if (firstDot > 20 && firstDot < 80) {
          p = `==${p.substring(0, firstDot)}==` + p.substring(firstDot);
        }
      }
      return p;
    });

    const firstSentence = paragraphs[0]?.split(".")[0] || "A consistência gera excelência";
    const pullQuotes = [
      firstSentence.length > 25 && firstSentence.length < 120
        ? firstSentence
        : "A excelência diária nos detalhes constrói resultados que ninguém pode ignorar.",
    ];

    const category = isWorkoutText
      ? "PROTOCOLO DE FORÇA"
      : isProductText
      ? "GEAR & PROMO"
      : isFacilityText
      ? "STUDIO SPOTLIGHT"
      : "MONTANHA METHOD";

    const titleCandidate = paragraphs[0]?.length < 70 ? paragraphs[0].toUpperCase() : "O CÓDIGO DA CONSISTÊNCIA & FORÇA";

    return {
      title: titleCandidate,
      subtitle: "Como transformar teoria em prática diária com método inegociável.",
      category,
      author: "Coach Montanha",
      authorBio: "Master Coach & Fundador",
      recommendedPageSpan,
      recommendedTemplate: isWorkoutText
        ? "workout-protocol"
        : isProductText
        ? "product-ad"
        : isFacilityText
        ? "facility-spotlight"
        : "editorial-lead",
      rationale:
        recommendedPageSpan === 2
          ? `Volume de ${wordCount} palavras identificado: Enquadrado em 2 Páginas (Página Dupla) para garantir leitura espaçosa e fotos em alta resolução sem cortes de texto.`
          : `Volume de ${wordCount} palavras: Enquadrado em 1 Página A4 otimizada com 2 colunas e citação ao final.`,
      wordCount,
      estimatedReadTime,
      formattedContent: formattedParagraphs.join("\n\n"),
      pullQuotes,
      keyTakeaways: [
        "Foque na execução consistente dos princípios fundamentais.",
        "Mantenha o controle da sobrecarga progressiva e recuperação.",
      ],
      heroImagePrompt: `Editorial photography of athletic training in dark studio, high contrast, 8k`,
      suggestedHeroImage: getEditorialCuratedImage("fitness", 0),
      suggestedSecondaryImage: getEditorialCuratedImage("fitness", 1),
    };
  }
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

