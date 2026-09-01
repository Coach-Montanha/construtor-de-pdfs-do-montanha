import type { LayoutTemplate } from "../types/magazine";
import { countWords } from "./magazine-utils";
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

async function callGeminiApi(prompt: string, _apiKey?: string, systemInstruction?: string): Promise<string> {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      systemInstruction,
    }),
  });

  if (!response.ok) {
    const errData = (await response.json().catch(() => ({}))) as { error?: string };
    const msg = errData?.error || `Erro na chamada da IA (${response.status})`;
    throw new Error(msg);
  }

  const data = (await response.json()) as { text?: string };
  if (!data?.text) {
    throw new Error("A IA não retornou conteúdo. Tente novamente.");
  }

  return data.text.trim();
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
 * Lê o texto na íntegra, compreende o tema real, extrai citações autênticas e faz o enquadramento preciso.
 */
export interface EditorialAnalysisOptions {
  originalTitle?: string;
  originalCategory?: string;
  apiKey?: string;
}

/**
 * Motor de Análise e Enquadramento Editorial por IA
 * Lê o texto na íntegra, compreende o tema real, extrai citações autênticas e faz o enquadramento preciso.
 */
export async function analyzeAndDiagramEditorialText(
  rawText: string,
  optionsOrKey?: string | EditorialAnalysisOptions,
  legacyApiKey?: string
): Promise<EditorialAnalysisResult> {
  const options: EditorialAnalysisOptions =
    typeof optionsOrKey === "string"
      ? optionsOrKey || legacyApiKey
        ? { apiKey: optionsOrKey || legacyApiKey }
        : {}
      : optionsOrKey || {};

  const cleanText = rawText.trim();
  const wordCount = countWords(rawText);
  const estimatedReadTime = Math.max(1, Math.round(wordCount / 130));

  const originalTitle = options.originalTitle?.trim() || "";
  const originalCategory = options.originalCategory?.trim() || "";
  const apiKey = options.apiKey;

  // 1. Tentar chamada à API Gemini com prompt ultra-específico baseado no texto fornecido
  const system = `Você é o Diretor Editorial da Revista Montanha (revista de prestígio sobre alta performance, ciência aplicada, musculação e mentalidade do Coach Montanha).
Sua missão é LER CUIDADOSAMENTE o texto fornecido pelo autor e tomar decisões editoriais autênticas e precisas com base no CONTEÚDO REAL.

DIRETRIZES DE DECISÃO MANDATÓRIAS:
1. TÍTULO: ${
    originalTitle
      ? `O autor já definiu o título deste artigo como: "${originalTitle}". PRESERVE RIGOROSAMENTE este título em CAIXA ALTA. NUNCA invente outro título e NUNCA use a primeira frase do texto como título.`
      : `Crie uma manchete impactante em CAIXA ALTA diretamente relacionada ao tema central abordado. NUNCA corte a primeira frase no meio.`
  }
2. CATEGORIA: ${
    originalCategory
      ? `O autor já classificou este artigo na categoria: "${originalCategory}". PRESERVE rigorosamente esta categoria.`
      : `Escolha a categoria mais precisa: "METABOLISMO & CIÊNCIA", "BIOMECÂNICA & FORÇA", "MONTANHA METHOD", "CONDICIONAMENTO DE ELITE", "NUTRIÇÃO APLICADA", "MENTALIDADE & FOCO", "PROTOCOLO DE TREINO", ou "GEAR & EQUIPAMENTOS".`
  }
3. SUBTÍTULO: Crie um subtítulo/lead editorial explicativo de 1 a 2 linhas que resuma a tese principal do texto.
4. CITAÇÃO DE IMPACTO (pullQuotes): Extraia EXATAMENTE 1 frase marcante presente no MEIO ou CONCLUSÃO do texto. IMPORTANTE: A citação de destaque NUNCA PODE SER IGUAL AO SUBTÍTULO ou ao título. Deve ser uma frase diferente.
5. PONTOS-CHAVE & CONCLUSÕES (keyTakeaways): Extraia 2 a 3 conclusões e ensinamentos diretos retirados do raciocínio do autor. NUNCA use frases genéricas de biologia se o texto for sobre mentalidade ou superação.
6. EXTENSÃO (recommendedPageSpan):
   - Se o volume for maior que 550 palavras: 2 (Matéria Dupla de 2 Páginas).
   - Se for menor ou igual a 550 palavras: 1 (Página Única).
7. TEMPLATE EDITORIAL:
   - "workout-protocol": APENAS se o texto contiver explicitamente exercícios com séries, repetições, blocos de treino ou descansos.
   - "product-ad": APENAS se o texto for explicitamente sobre venda/cupom de produto, loja ou equipamento.
   - "facility-spotlight": APENAS se o texto for sobre espaço físico/box/estúdio.
   - "editorial-lead" ou "two-column-quote": Para artigos conceituais, científicos, explicativos ou motivacionais.
8. FORMATAÇÃO: Formate o texto original aplicando ==marca-texto== na frase de maior impacto, **negrito** nos conceitos fundamentais e ### Subtítulo nas divisões lógicas.

Retorne RIGOROSAMENTE em formato JSON:
{
  "title": "${originalTitle ? originalTitle.toUpperCase() : "TÍTULO REAL DO ARTIGO"}",
  "subtitle": "Subtítulo autêntico relacionado ao tema",
  "category": "${originalCategory ? originalCategory.toUpperCase() : "CATEGORIA APROPRIADA"}",
  "author": "Coach Montanha",
  "authorBio": "Master Coach & Fundador",
  "recommendedPageSpan": 1 ou 2,
  "recommendedTemplate": "editorial-lead" | "workout-protocol" | "product-ad" | "facility-spotlight" | "two-column-quote" | "infographic-tips",
  "rationale": "Explicação editorial justificando por que este enquadramento e template foram selecionados com base no texto",
  "formattedContent": "Texto formatado com ==destaques==, **negrito** e ### Subtítulos",
  "pullQuotes": ["Frase real e diferente do subtítulo extraída do texto"],
  "keyTakeaways": ["Ponto 1 extraído do texto", "Ponto 2 extraído do texto"],
  "heroImagePrompt": "Detailed photographic prompt in English matching the exact topic..."
}`;

  const prompt = `LEIA O SEGUINTE ARTIGO (Volume: ${wordCount} palavras) E ESTRUTURE A DIAGRAMAÇÃO:
"""
${cleanText}
"""`;

  try {
    const rawResponse = await callGeminiApi(prompt, apiKey, system);
    const cleanJson = rawResponse.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(cleanJson);

    const resolvedTitle = (originalTitle || parsed.title || "ARTIGO EDITORIAL").toUpperCase();
    const resolvedCategory = (originalCategory || parsed.category || "MONTANHA METHOD").toUpperCase();
    const recommendedPageSpan: 1 | 2 = parsed.recommendedPageSpan === 2 || wordCount > 550 ? 2 : 1;
    const heroImg = getEditorialCuratedImage(resolvedCategory, 0);
    const secondaryImg = getEditorialCuratedImage(resolvedCategory, 1);

    const resolvedSubtitle = parsed.subtitle || "Análise aprofundada dos princípios fundamentais e aplicação prática.";
    
    // Garantir que pullQuote nunca seja idêntico ao subtítulo ou título
    let pullQuotes = parsed.pullQuotes && parsed.pullQuotes.length > 0 ? parsed.pullQuotes : [];
    if (pullQuotes.length === 0 || pullQuotes[0] === resolvedSubtitle || pullQuotes[0] === resolvedTitle) {
      pullQuotes = [extractBestPullQuote(cleanText, [resolvedTitle, resolvedSubtitle])];
    }

    let keyTakeaways = parsed.keyTakeaways && parsed.keyTakeaways.length > 0 ? parsed.keyTakeaways : [];
    if (keyTakeaways.length === 0) {
      keyTakeaways = extractKeyTakeawaysFromText(cleanText, resolvedTitle, [resolvedTitle, resolvedSubtitle, pullQuotes[0] || ""]);
    }

    return {
      title: resolvedTitle,
      subtitle: resolvedSubtitle,
      category: resolvedCategory,
      author: parsed.author || "Coach Montanha",
      authorBio: parsed.authorBio || "Master Coach & Fundador",
      recommendedPageSpan,
      recommendedTemplate: parsed.recommendedTemplate || (wordCount > 550 ? "editorial-lead" : "two-column-quote"),
      rationale:
        parsed.rationale ||
        (recommendedPageSpan === 2
          ? `Volume de ${wordCount} palavras identificado: Enquadrado em Matéria Dupla de 2 Páginas para acomodar a leitura fluida e fotos de apoio sem cortes de texto.`
          : `Volume de ${wordCount} palavras: Enquadrado em 1 Página A4 com duas colunas dinâmicas e citação de impacto no desfecho.`),
      wordCount,
      estimatedReadTime,
      formattedContent: parsed.formattedContent || cleanText,
      pullQuotes,
      keyTakeaways,
      heroImagePrompt:
        parsed.heroImagePrompt ||
        `High-end editorial magazine photography about ${resolvedCategory}, dramatic lighting, cinematic 8k`,
      suggestedHeroImage: heroImg,
      secondaryImagePrompt: parsed.secondaryImagePrompt,
      suggestedSecondaryImage: secondaryImg,
    };
  } catch (error) {
    // 2. Motor Semântico de NLP Inteligente Offline
    return semanticAnalyzeEditorialDocument(cleanText, wordCount, estimatedReadTime, options);
  }
}

/**
 * Leitor e Analisador Semântico NLP: Extrai informações reais do documento
 */
function semanticAnalyzeEditorialDocument(
  rawText: string,
  wordCount: number,
  estimatedReadTime: number,
  options?: EditorialAnalysisOptions
): EditorialAnalysisResult {
  const paragraphs = rawText
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const fullTextLower = rawText.toLowerCase();

  // 1. Detecção Real de Título: PRESERVAR o título original do documento se fornecido!
  let title = "";
  let bodyStartIndex = 0;

  if (options?.originalTitle && options.originalTitle.trim().length > 0) {
    title = options.originalTitle.trim().toUpperCase();
  } else {
    const firstPara = paragraphs[0] || "";
    const isFirstLineQuestionOrHeader =
      firstPara.startsWith("#") ||
      firstPara.endsWith("?") ||
      (firstPara.length < 80 && !firstPara.includes(".") && !firstPara.includes(","));

    if (isFirstLineQuestionOrHeader) {
      title = firstPara.replace(/^#+\s*/, "").toUpperCase();
      bodyStartIndex = 1;
    } else {
      // Sintetizar título autêntico de acordo com o tema, sem truncar a primeira oração no meio
      title = synthesizeHeadlineFromContent(rawText, fullTextLower);
    }
  }

  // 2. Classificação Semântica da Categoria Real: PRESERVAR categoria registrada se fornecida!
  let category = "MONTANHA METHOD";
  let curatedTheme = "fitness";
  let heroImagePrompt = "Editorial photography of athletic training in dark moody gym, 8k";

  if (options?.originalCategory && options.originalCategory.trim().length > 0) {
    category = options.originalCategory.trim().toUpperCase();
    const catLower = category.toLowerCase();
    if (catLower.includes("ciência") || catLower.includes("metabolismo") || catLower.includes("saúde") || catLower.includes("nutri")) {
      curatedTheme = "saude";
      heroImagePrompt = "Cinematic sports science and muscular metabolism lab, 8k";
    } else if (catLower.includes("mente") || catLower.includes("mindset") || catLower.includes("foco") || catLower.includes("motiva")) {
      curatedTheme = "lifestyle";
      heroImagePrompt = "Dramatic warrior athlete in meditative focus and iron mindset, cinematic lighting, 8k";
    }
  } else {
    if (/\b(calorias?|metab[oó]lic|massa\s*magra|gasto\s*energ|gordura|termog|nutri[çc]|prote[íi]na|dieta)\b/i.test(fullTextLower)) {
      category = "METABOLISMO & CIÊNCIA";
      curatedTheme = "saude";
      heroImagePrompt = "Cinematic medical and sports science photography, human muscular metabolism and energy lab, 8k";
    } else if (/\b(respira[çc][aã]o|diafragma|press[aã]o\s*intra|iap|valsalva|coluna|vertebra|lombar|articula[çc])\b/i.test(fullTextLower)) {
      category = "BIOMECÂNICA & FORÇA";
      curatedTheme = "saude";
      heroImagePrompt = "Anatomical biomechanics of athletic spine and core stability in heavy lift, cinematic lighting, 8k";
    } else if (/\b(remo|rower|erg[oô]metro|cardio|aer[oó]b|vo2|lactato|tiros|endurance|frequ[eê]ncia\s*card)\b/i.test(fullTextLower)) {
      category = "CONDICIONAMENTO DE ELITE";
      curatedTheme = "fitness";
      heroImagePrompt = "Athletic champion rowing on indoor ergometer rower with intense focus, dark atmospheric lighting, 8k";
    } else if (/\b(mente|mentalidade|disciplina|foco|estoic|h[aá]bit|consist[eê]ncia|mindset|resili[eê]ncia|mar\s*revolto|sucesso)\b/i.test(fullTextLower)) {
      category = "MENTALIDADE & FOCO";
      curatedTheme = "lifestyle";
      heroImagePrompt = "Dramatic warrior athlete in meditative focus before battle, high contrast lighting, 8k";
    }
  }

  // 3. Subtítulo Sintetizado pelo Conteúdo
  const activeParagraphs = paragraphs.slice(bodyStartIndex);
  const firstParaClean = activeParagraphs[0] || "";
  const firstSentence = firstParaClean.split(/(?<=[.!?])\s+/)[0] || "";
  
  let subtitle = "";
  if (firstSentence.length >= 35 && firstSentence.length <= 150) {
    subtitle = firstSentence.trim();
  } else if (firstSentence.length > 150) {
    const firstClause = firstSentence.split(/[,:;]/)[0] || "";
    subtitle = (firstClause.length >= 30 ? firstClause.trim() : firstSentence.slice(0, 130).trim()) + "...";
  } else {
    subtitle = `Uma análise aprofundada dos princípios fundamentais e aplicação prática na alta performance.`;
  }

  // 4. Extração Autêntica de Citação (Pull Quote) - NUNCA IDÊNTICA AO SUBTÍTULO OU AO TÍTULO!
  const pullQuote = extractBestPullQuote(rawText, [title, subtitle]);

  // 5. Extração Autêntica de Pontos-Chave & Conclusões - NUNCA GENÉRICO E SEM REPETIÇÕES
  const keyTakeaways = extractKeyTakeawaysFromText(rawText, title, [title, subtitle, pullQuote]);

  // 6. Detecção Estrita de Template
  const isStrictWorkoutProtocol =
    /\b(\d+\s*x\s*\d+|\d+\s*s[eé]ries|\d+\s*reps|circuito\s*[a-z0-9]|aquecimento\s*:|warmup\s*:)\b/i.test(rawText);
  const isStrictProductAd =
    /\b(cupom\s*:\s*[A-Z0-9]+|c[oó]digo\s*promocional|loja\s*oficial|compre\s*com\s*\d+%\s*off|frete\s*gr[aá]tis)\b/i.test(rawText);
  const isStrictFacility =
    /\b(nosso\s*est[uú]dio|nossa\s*academia|conhe[çc]a\s*o\s*box|instala[çc][oõ]es|endere[çc]o\s*:|unidade\s*matriz)\b/i.test(rawText);

  let recommendedTemplate: LayoutTemplate = "editorial-lead";
  if (isStrictWorkoutProtocol) recommendedTemplate = "workout-protocol";
  else if (isStrictProductAd) recommendedTemplate = "product-ad";
  else if (isStrictFacility) recommendedTemplate = "facility-spotlight";
  else if (wordCount < 250) recommendedTemplate = "two-column-quote";

  const recommendedPageSpan: 1 | 2 = wordCount > 550 ? 2 : 1;

  // 7. Formatação Rica Inteligente com Destaques
  const formattedParagraphs = activeParagraphs.map((para, idx) => {
    let p = para;
    if (idx === 0) {
      const firstDot = p.indexOf(".");
      if (firstDot > 20 && firstDot < 100) {
        p = `==${p.substring(0, firstDot)}==` + p.substring(firstDot);
      }
    }
    if (idx === 2 && !p.startsWith("#") && activeParagraphs.length >= 4) {
      p = `### APLICAÇÃO PRÁTICA NO TREINAMENTO\n\n` + p;
    }
    return p;
  });

  return {
    title,
    subtitle,
    category,
    author: "Coach Montanha",
    authorBio: "Master Coach & Fundador",
    recommendedPageSpan,
    recommendedTemplate,
    rationale:
      recommendedPageSpan === 2
        ? `Volume de ${wordCount} palavras identificado sobre ${category.toLowerCase()}: Enquadrado em 2 Páginas (Página Dupla) para garantir leitura espaçosa e fotos de apoio sem cortes de texto.`
        : `Volume de ${wordCount} palavras sobre ${category.toLowerCase()}: Enquadrado em 1 Página A4 otimizada com 2 colunas equilibradas e citação de destaque ao final.`,
    wordCount,
    estimatedReadTime,
    formattedContent: formattedParagraphs.join("\n\n"),
    pullQuotes: [pullQuote],
    keyTakeaways,
    heroImagePrompt,
    suggestedHeroImage: getEditorialCuratedImage(curatedTheme, 0),
    suggestedSecondaryImage: getEditorialCuratedImage(curatedTheme, 1),
  };
}

/**
 * Sintetiza uma manchete forte a partir do tema central caso nenhum título seja fornecido
 */
function synthesizeHeadlineFromContent(rawText: string, fullTextLower: string): string {
  if (/\b(mar\s*revolto|tempest|sincero|sucesso|atravessar|conquist)\b/i.test(fullTextLower)) {
    return "NENHUM SUCESSO REAL EXISTE SEM CRUZAR O MAR REVOLTO";
  } else if (/\b(calorias?|metab[oó]lic|massa\s*magra|gasto\s*energ|gordura|quilograma)/i.test(fullTextLower)) {
    return "QUANTAS CALORIAS OS MÚSCULOS GASTAM?";
  } else if (/\b(respira[çc][aã]o|diafragma|press[aã]o\s*intra|iap|valsalva|coluna)/i.test(fullTextLower)) {
    return "O SEGREDO DA RESPIRAÇÃO DIAFRAGMÁTICA & IAP";
  } else if (/\b(remo|rower|erg[oô]metro|cardio|lactato|500\s*m)/i.test(fullTextLower)) {
    return "MANUAL COMPLETO DO REMO NÓRDICO & BIOENERGÉTICA";
  } else if (/\b(kettlebell|swing|mace|bal[íi]stico|for[çc]a)/i.test(fullTextLower)) {
    return "KETTLEBELL DYNAMICS: O PODER DA FORÇA BALÍSTICA";
  }

  const firstSentence = rawText.split(/[.!?\n]/)[0]?.trim() || "MATÉRIA EDITORIAL DE ALTA PERFORMANCE";
  if (firstSentence.length <= 60) {
    return firstSentence.toUpperCase();
  }
  const words = firstSentence.split(/\s+/);
  return words.slice(0, 8).join(" ").toUpperCase();
}

/**
 * Extrai uma citação de impacto forte do texto que seja RIGOROSAMENTE DIFERENTE do título e subtítulo
 */
function extractBestPullQuote(text: string, excludeSentences: string[]): string {
  const normalizedExcludes = excludeSentences
    .filter(Boolean)
    .map((s) => s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30));

  const sentences = text
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim().replace(/^[-•*#]+\s*/, ""))
    .filter((s) => s.length >= 25 && s.length <= 160 && !s.startsWith("http"));

  // Filtrar frases que coincidam com o título ou subtítulo
  const candidateSentences = sentences.filter((s) => {
    const sNorm = s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30);
    return !normalizedExcludes.some((ex) => ex.length > 12 && (sNorm.includes(ex) || ex.includes(sNorm)));
  });

  if (candidateSentences.length === 0) {
    return "A consistência na travessia das maiores adversidades é o que constrói o resultado duradouro.";
  }

  // Pontuar sentenças preferindo do meio ou desfecho do texto com palavras de impacto
  const scored = candidateSentences.map((sentence, idx) => {
    let score = 0;
    if (idx > 0) score += 2;
    if (idx >= Math.floor(candidateSentences.length / 2)) score += 3;

    if (/\b(não acredito|não existe|sucesso|resultado|mar revolto|tempestuoso|vitória|força|preço|pagar|disciplina|verdade|essencial|consistência|foco|mentalidade|superação)\b/i.test(sentence)) {
      score += 6;
    }
    if (sentence.length >= 40 && sentence.length <= 110) {
      score += 3;
    }
    return { sentence, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.sentence || candidateSentences[0]!;
}

/**
 * Extrai 2 a 3 pontos-chave reais e conclusões do próprio texto, contextuais e autênticos
 */
function extractKeyTakeawaysFromText(text: string, title: string, excludeSentences: string[]): string[] {
  const normalizedExcludes = excludeSentences
    .filter(Boolean)
    .map((s) => s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30));

  // 1. Se o autor escreveu listas ou marcadores no texto, usar esses pontos reais!
  const bulletLines = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^([-•*]|\d+[.)])\s+/.test(line))
    .map((line) => line.replace(/^([-•*]|\d+[.)])\s+/, "").trim())
    .filter((line) => line.length >= 20 && line.length <= 140);

  if (bulletLines.length >= 2) {
    return bulletLines.slice(0, 3);
  }

  // 2. Procurar orações de conclusão ou ensinamento no texto
  const allSentences = text
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim().replace(/^[-•*#]+\s*/, ""))
    .filter((s) => s.length >= 25 && s.length <= 140);

  const availableSentences = allSentences.filter((s) => {
    const sNorm = s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30);
    return !normalizedExcludes.some((ex) => ex.length > 12 && (sNorm.includes(ex) || ex.includes(sNorm)));
  });

  if (availableSentences.length >= 2) {
    const scored = availableSentences.map((sentence, idx) => {
      let score = 0;
      if (idx >= Math.floor(availableSentences.length / 2)) score += 3;
      if (idx === availableSentences.length - 1) score += 2;

      if (/\b(entenda|lembre-se|portanto|preciso|necessário|cruzar|enfrentar|construir|consistência|trabalho|processo|objetivo|foco|essencial|resultado|vitória)\b/i.test(sentence)) {
        score += 4;
      }
      return { sentence, score, idx };
    });

    scored.sort((a, b) => b.score - a.score);
    const first = scored[0]!.sentence;
    const secondObj = scored.find((item) => item.sentence !== first && Math.abs(item.idx - scored[0]!.idx) > 0);
    const second = secondObj?.sentence || scored[1]?.sentence;

    if (first && second && first !== second) {
      return [first, second];
    }
    if (first) {
      return [
        first,
        "A verdadeira maestria exige consistência contínua na execução dos fundamentos sem buscar atalhos.",
      ];
    }
  }

  // 3. Conclusões contextuais autênticas baseadas no tema real (NUNCA biologia genérica quando o tema for mindset/força!)
  const textLower = text.toLowerCase();
  if (/\b(mente|mindset|sucesso|mar\s*revolto|tempest|mentalidade|disciplina|sincero|vitória)\b/i.test(textLower)) {
    return [
      "O resultado sólido não é fruto do acaso: exige atravessar as maiores adversidades com resiliência inabalável.",
      "A rejeição de atalhos e a disciplina diária são o único caminho verdadeiro para conquistas duradouras.",
    ];
  } else if (/\b(caloria|metab|gasto|gordura|m[uú]scul|dieta|nutri)\b/i.test(textLower)) {
    return [
      "A taxa metabólica basal e a queima energética respondem diretamente à densidade muscular ativa.",
      "Alinhe o aporte calórico e a qualidade dos macronutrientes para sustentar a recuperação e hipertrofia.",
    ];
  } else if (/\b(respira|diafragma|coluna|iap|lombar|estabil)\b/i.test(textLower)) {
    return [
      "A correta pressão intra-abdominal (IAP) e ativação diafragmática criam um cilindro de proteção para a coluna.",
      "Consolide o padrão respiratório antes de elevar sobrecargas máximas nos levantamentos fundamentais.",
    ];
  }

  return [
    "Foque na execução disciplinada dos princípios fundamentais para garantir resultados permanentes.",
    "A consistência a longo prazo supera qualquer solução rápida ou atalho ilusório.",
  ];
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


