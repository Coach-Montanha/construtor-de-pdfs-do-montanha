import { LayoutTemplate, RepositoryDocument, Article } from "../types/magazine";
import { countWords } from "./magazine-utils";

export type PdfDocClassification =
  | "single-article"       // Artigo Único ou Ensaio Narrativo (1 a 4 páginas)
  | "multi-article"        // Revista Completa ou Compilação de Vários Artigos
  | "presentation-slides"  // Apresentação / Lâminas de Slides (pouco texto por página)
  | "workout-protocol"     // Ficha de Treino / Protocolo de Exercícios
  | "table-heavy"          // Relatório Técnico / Dados Tabulares
  | "general-notes";       // Documento Misto / Notas Gerais

export type ConversionRoute =
  | "smart-articles"       // Rota 1: Separação Editorial Inteligente (Recomendado para revistas)
  | "continuous-lead"      // Rota 2: Artigo Único / Documento Contínuo
  | "page-by-page"         // Rota 3: Uma Matéria por Página/Lâmina
  | "clean-markdown";      // Rota 4: Texto Limpo e Estruturado em Markdown

export interface TextItemInfo {
  text: string;
  fontSize: number;
  fontName: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ExtractedPageItem {
  pageNumber: number;
  text: string;
  markdown: string;
  headings: string[];
  items: TextItemInfo[];
  pageHeight: number;
  pageWidth: number;
}

export interface DetectedArticleDraft {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  content: string;
  suggestedTemplate: LayoutTemplate;
  pageRange: [number, number]; // [página inicial, página final]
  wordCount: number;
  estimatedReadTime: number;
  selected: boolean;
}

export interface PdfAnalysisReport {
  fileName: string;
  fileSizeBytes: number;
  totalPages: number;
  totalWords: number;
  classification: PdfDocClassification;
  classificationLabel: string;
  recommendedRoute: ConversionRoute;
  detectedHeadingsCount: number;
  samplePreview: string;
}

/**
 * Carrega dinamicamente o PDF.js de forma 100% segura para SSR e navegadores
 */
async function getPdfJs() {
  const pdfjs = await import("pdfjs-dist");
  if (typeof window !== "undefined") {
    // Configura o worker estático local garantindo funcionamento offline e em qualquer host
    if (!pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";
    }
  }
  return pdfjs;
}

/**
 * Extrai texto, posições geométricas e fontes do arquivo PDF
 */
export async function extractPdfContent(data: ArrayBuffer): Promise<ExtractedPageItem[]> {
  const pdfjs = await getPdfJs();
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(data),
    useWorkerFetch: false,
    isEvalSupported: false,
  });

  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;
  const pages: ExtractedPageItem[] = [];

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const textContent = await page.getTextContent();

    const items: TextItemInfo[] = [];
    for (const item of textContent.items as any[]) {
      if (!item.str || item.str.trim() === "") continue;
      const tx = item.transform;
      const fontSize = Math.abs(tx[3] || tx[0] || 12);
      const x = tx[4] || 0;
      const y = tx[5] || 0;

      items.push({
        text: item.str,
        fontSize,
        fontName: item.fontName || "",
        x,
        y,
        width: item.width || 0,
        height: item.height || fontSize,
      });
    }

    // Ordenar itens por posição vertical (topo para base) e depois horizontal
    items.sort((a, b) => {
      // PDF coordinates have (0,0) at bottom-left, so higher Y means higher on page
      if (Math.abs(a.y - b.y) > 3) {
        return b.y - a.y;
      }
      return a.x - b.x;
    });

    // Calcular tamanho de fonte mediano para detectar títulos
    const fontSizes = items.map((i) => i.fontSize).sort((a, b) => a - b);
    const medianFontSize = fontSizes.length > 0 ? fontSizes[Math.floor(fontSizes.length / 2)] : 12;

    // Filtro de cabeçalhos e rodapés repetitivos de página (margem superior e inferior)
    const filteredItems = items.filter((item) => {
      const isTopMargin = item.y > viewport.height - 38;
      const isBottomMargin = item.y < 38;

      if (isTopMargin || isBottomMargin) {
        // Se parece número de página simples ou cabeçalho redundante, descartar
        const isPageNumber = /^\s*(página|pág\.?|page)?\s*\d+\s*(de\s*\d+|\/\s*\d+)?\s*$/i.test(item.text);
        if (isPageNumber) return false;
      }
      return true;
    });

    // Agrupar em linhas de texto
    const lines: Array<{ text: string; fontSize: number; isHeading: boolean; y: number }> = [];
    let currentLineText = "";
    let currentLineY = -999;
    let currentLineFontSize = medianFontSize;

    for (const item of filteredItems) {
      if (Math.abs(item.y - currentLineY) > 3.5) {
        // Nova linha
        if (currentLineText.trim()) {
          const isHeading = currentLineFontSize >= medianFontSize * 1.28 || (currentLineFontSize >= medianFontSize * 1.15 && currentLineText.length < 70 && currentLineText === currentLineText.toUpperCase());
          lines.push({
            text: currentLineText.trim(),
            fontSize: currentLineFontSize,
            isHeading,
            y: currentLineY,
          });
        }
        currentLineText = item.text;
        currentLineY = item.y;
        currentLineFontSize = item.fontSize;
      } else {
        // Mesma linha - adicionar espaço se necessário
        currentLineText += (currentLineText.endsWith(" ") || item.text.startsWith(" ") ? "" : " ") + item.text;
        if (item.fontSize > currentLineFontSize) {
          currentLineFontSize = item.fontSize;
        }
      }
    }

    if (currentLineText.trim()) {
      const isHeading = currentLineFontSize >= medianFontSize * 1.28;
      lines.push({
        text: currentLineText.trim(),
        fontSize: currentLineFontSize,
        isHeading,
        y: currentLineY,
      });
    }

    // Reconstruir Markdown limpo
    const markdownParagraphs: string[] = [];
    const headings: string[] = [];
    let currentParagraph = "";

    for (const line of lines) {
      if (line.isHeading) {
        if (currentParagraph.trim()) {
          markdownParagraphs.push(currentParagraph.trim());
          currentParagraph = "";
        }
        headings.push(line.text);
        if (line.fontSize >= medianFontSize * 1.6) {
          markdownParagraphs.push(`## ${line.text}`);
        } else {
          markdownParagraphs.push(`### ${line.text}`);
        }
      } else {
        // Linhas de lista / bullet
        const isBullet = /^([•\-\*]|\d+[\.\)])\s+/.test(line.text);
        if (isBullet) {
          if (currentParagraph.trim()) {
            markdownParagraphs.push(currentParagraph.trim());
            currentParagraph = "";
          }
          markdownParagraphs.push(line.text);
        } else {
          // Corrigir quebra de palavra por hifenização ("treina-\n mento" -> "treinamento")
          if (currentParagraph.endsWith("-")) {
            currentParagraph = currentParagraph.slice(0, -1) + line.text;
          } else {
            currentParagraph += (currentParagraph ? " " : "") + line.text;
          }
        }
      }
    }

    if (currentParagraph.trim()) {
      markdownParagraphs.push(currentParagraph.trim());
    }

    const pageMarkdown = markdownParagraphs.join("\n\n");
    const rawPageText = lines.map((l) => l.text).join("\n");

    pages.push({
      pageNumber: pageNum,
      text: rawPageText,
      markdown: pageMarkdown,
      headings,
      items,
      pageHeight: viewport.height,
      pageWidth: viewport.width,
    });
  }

  return pages;
}

/**
 * Classifica a estrutura do documento PDF e indica a rota ótima de conversão
 */
export function classifyPdfDocument(
  pages: ExtractedPageItem[],
  fileName: string,
  fileSizeBytes: number
): PdfAnalysisReport {
  const totalPages = pages.length;
  const allText = pages.map((p) => p.text).join(" ");
  const totalWords = countWords(allText);
  const avgWordsPerPage = totalPages > 0 ? totalWords / totalPages : 0;
  const allHeadings = pages.flatMap((p) => p.headings);

  // Heurística de classificação de documento (conforme metodologia do pdf-conversion-router)
  let classification: PdfDocClassification = "general-notes";
  let classificationLabel = "Documento Geral / Artigo Editorial";
  let recommendedRoute: ConversionRoute = "smart-articles";

  const lowerText = allText.toLowerCase();
  const isWorkout =
    lowerText.includes("série") ||
    lowerText.includes("reps") ||
    lowerText.includes("aquecimento") ||
    lowerText.includes("treino") ||
    lowerText.includes("exercício") ||
    lowerText.includes("workout");

  if (isWorkout) {
    classification = "workout-protocol";
    classificationLabel = "Ficha de Treino / Protocolo Físico";
    recommendedRoute = "smart-articles";
  } else if (avgWordsPerPage < 110 && totalPages >= 3) {
    classification = "presentation-slides";
    classificationLabel = "Apresentação / Lâminas de Slides";
    recommendedRoute = "page-by-page";
  } else if (totalPages <= 3 && allHeadings.length <= 3) {
    classification = "single-article";
    classificationLabel = "Artigo Único / Matéria Especial";
    recommendedRoute = "continuous-lead";
  } else if (totalPages >= 3 && allHeadings.length >= 2) {
    classification = "multi-article";
    classificationLabel = "Revista Completa / Compilação de Matérias";
    recommendedRoute = "smart-articles";
  } else {
    classification = "general-notes";
    classificationLabel = "Documento Editorial Texto";
    recommendedRoute = "smart-articles";
  }

  // Amostra do preview
  const samplePreview = allText.slice(0, 380).trim() + (allText.length > 380 ? "..." : "");

  return {
    fileName,
    fileSizeBytes,
    totalPages,
    totalWords,
    classification,
    classificationLabel,
    recommendedRoute,
    detectedHeadingsCount: allHeadings.length,
    samplePreview,
  };
}

/**
 * Executa a rota selecionada transformando as páginas extraídas em rascunhos de matérias estruturadas
 */
export function routePdfConversion(
  pages: ExtractedPageItem[],
  route: ConversionRoute,
  baseFileName: string
): DetectedArticleDraft[] {
  const drafts: DetectedArticleDraft[] = [];
  const cleanBaseName = baseFileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .trim()
    .toUpperCase();

  switch (route) {
    case "smart-articles": {
      // Rota 1: Divide o documento em artigos individuais nos títulos principais
      let currentTitle = "";
      let currentContentBlocks: string[] = [];
      let startPage = 1;
      let articleIndex = 1;

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const pageNum = page.pageNumber;
        const paragraphs = page.markdown.split(/\n\n+/);

        for (const p of paragraphs) {
          const isMajorHeading = p.startsWith("## ");
          if (isMajorHeading) {
            // Se já tínhamos conteúdo acumulado, salvar o artigo anterior
            if (currentContentBlocks.length > 0 && currentTitle) {
              const fullContent = currentContentBlocks.join("\n\n");
              const wordCount = countWords(fullContent);
              if (wordCount >= 25) {
                drafts.push({
                  id: `pdf-art-${Date.now()}-${articleIndex++}`,
                  title: currentTitle,
                  category: inferCategory(currentTitle + " " + fullContent),
                  content: fullContent,
                  suggestedTemplate: inferLayoutTemplate(wordCount, fullContent),
                  pageRange: [startPage, pageNum],
                  wordCount,
                  estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
                  selected: true,
                });
              }
              currentContentBlocks = [];
            }

            currentTitle = p.replace(/^##\s+/, "").trim();
            startPage = pageNum;
          } else {
            if (!currentTitle) {
              // Primeiro bloco sem título explícito
              currentTitle = page.headings[0] || `${cleanBaseName} - PARTE ${articleIndex}`;
              startPage = pageNum;
            }
            currentContentBlocks.push(p);
          }
        }
      }

      // Salvar o último artigo restante
      if (currentContentBlocks.length > 0) {
        const fullContent = currentContentBlocks.join("\n\n");
        const wordCount = countWords(fullContent);
        if (wordCount >= 20 || drafts.length === 0) {
          drafts.push({
            id: `pdf-art-${Date.now()}-${articleIndex}`,
            title: currentTitle || `${cleanBaseName}`,
            category: inferCategory(currentTitle + " " + fullContent),
            content: fullContent,
            suggestedTemplate: inferLayoutTemplate(wordCount, fullContent),
            pageRange: [startPage, pages.length],
            wordCount,
            estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
            selected: true,
          });
        }
      }

      // Se por acaso nenhum artigo foi gerado, fazer fallback para Rota 2
      if (drafts.length === 0) {
        return routePdfConversion(pages, "continuous-lead", baseFileName);
      }
      break;
    }

    case "continuous-lead": {
      // Rota 2: Junta todo o documento em uma matéria contínua de capa ou destaque editorial
      const fullMarkdown = pages.map((p) => p.markdown).join("\n\n");
      const firstHeading = pages[0]?.headings[0];
      const title = firstHeading || cleanBaseName;
      const wordCount = countWords(fullMarkdown);

      drafts.push({
        id: `pdf-lead-${Date.now()}`,
        title,
        subtitle: `Artigo Completo Extraído de "${baseFileName}"`,
        category: inferCategory(title + " " + fullMarkdown),
        content: fullMarkdown,
        suggestedTemplate: wordCount > 600 ? "editorial-lead" : "three-column-dense",
        pageRange: [1, pages.length],
        wordCount,
        estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
        selected: true,
      });
      break;
    }

    case "page-by-page": {
      // Rota 3: Uma matéria por página/lâmina
      pages.forEach((page) => {
        const pageHeading = page.headings[0];
        const title = pageHeading || `${cleanBaseName} - PÁGINA ${page.pageNumber}`;
        const wordCount = countWords(page.markdown);

        drafts.push({
          id: `pdf-page-${Date.now()}-${page.pageNumber}`,
          title,
          category: inferCategory(title + " " + page.markdown),
          content: page.markdown,
          suggestedTemplate: "infographic-tips",
          pageRange: [page.pageNumber, page.pageNumber],
          wordCount,
          estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
          selected: true,
        });
      });
      break;
    }

    case "clean-markdown": {
      // Rota 4: Texto limpo direto
      const fullMarkdown = pages.map((p) => p.markdown).join("\n\n");
      const title = cleanBaseName;
      const wordCount = countWords(fullMarkdown);

      drafts.push({
        id: `pdf-raw-${Date.now()}`,
        title,
        category: "TEXTO BRUTO",
        content: fullMarkdown,
        suggestedTemplate: "two-column-quote",
        pageRange: [1, pages.length],
        wordCount,
        estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
        selected: true,
      });
      break;
    }
  }

  return drafts;
}

/**
 * Converte rascunhos detectados em RepositoryDocument (Rascunhos Inéditos do Acervo)
 */
export function convertDraftsToRepositoryDocuments(
  drafts: DetectedArticleDraft[],
  sourceFileName: string
): RepositoryDocument[] {
  const now = new Date().toISOString();
  return drafts
    .filter((d) => d.selected)
    .map((draft, idx) => ({
      id: `doc-pdf-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 5)}`,
      title: draft.title,
      category: draft.category,
      rawContent: draft.content,
      sourceFileName: sourceFileName,
      wordCount: draft.wordCount,
      status: "draft",
      tags: ["Importado de PDF", draft.suggestedTemplate],
      createdAt: now,
      updatedAt: now,
    }));
}

/**
 * Converte rascunhos detectados em Articles completos para publicação direta na revista
 */
export function convertDraftsToMagazineArticles(
  drafts: DetectedArticleDraft[],
  authorName: string = "Coach Montanha"
): Article[] {
  return drafts
    .filter((d) => d.selected)
    .map((draft, idx) => {
      // Extrair frases de impacto para pullQuotes
      const quotes = extractPullQuotes(draft.content);
      const takeaways = extractKeyTakeaways(draft.content);

      return {
        id: `art-pdf-${Date.now()}-${idx}`,
        title: draft.title,
        subtitle: draft.subtitle || `Matéria baseada em ${draft.pageRange[0] === draft.pageRange[1] ? `página ${draft.pageRange[0]}` : `páginas ${draft.pageRange[0]}-${draft.pageRange[1]}`}`,
        author: authorName,
        authorRole: "Especialista Editorial",
        content: draft.content,
        category: draft.category,
        pullQuotes: quotes,
        keyTakeaways: takeaways,
        layoutTemplate: draft.suggestedTemplate,
        tags: ["PDF", draft.category],
        estimatedReadTime: draft.estimatedReadTime,
        featuredOnCover: idx === 0,
        enabled: true,
      };
    });
}

// Helpers de inferência editorial
function inferCategory(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("treino") || lower.includes("exercício") || lower.includes("musculação") || lower.includes("força")) {
    return "TREINAMENTO & FORÇA";
  }
  if (lower.includes("dieta") || lower.includes("proteína") || lower.includes("nutrição") || lower.includes("creatina")) {
    return "NUTRIÇÃO DE PRECISÃO";
  }
  if (lower.includes("sono") || lower.includes("longevidade") || lower.includes("recuperação") || lower.includes("biohacking")) {
    return "BIOHACKING & LONGEVIDADE";
  }
  if (lower.includes("mente") || lower.includes("foco") || lower.includes("disciplina") || lower.includes("mentalidade")) {
    return "MENTALIDADE DE COMBATE";
  }
  return "MONTANHA METHOD";
}

function inferLayoutTemplate(wordCount: number, content: string): LayoutTemplate {
  const lower = content.toLowerCase();
  if (lower.includes("série") && lower.includes("reps")) {
    return "workout-protocol";
  }
  if (wordCount > 700) {
    return "editorial-lead";
  }
  if (wordCount > 400) {
    return "three-column-dense";
  }
  if (lower.includes("passo 1") || lower.includes("dica") || lower.includes("1.") || lower.includes("•")) {
    return "infographic-tips";
  }
  return "two-column-quote";
}

function extractPullQuotes(content: string): string[] {
  const sentences = content
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 40 && s.length <= 130);

  if (sentences.length === 0) {
    return ["A consistência e o método superam qualquer motivação passageira."];
  }
  return sentences.slice(0, 2);
}

function extractKeyTakeaways(content: string): string[] {
  const bullets = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^([•\-\*]|\d+[\.\)])\s+/.test(l))
    .map((l) => l.replace(/^([•\-\*]|\d+[\.\)])\s+/, "").trim());

  if (bullets.length >= 2) {
    return bullets.slice(0, 4);
  }

  return [
    "Aplicação prática imediata com fundamentação técnica.",
    "Execução rigorosa com foco em progressão constante.",
    "Resultados mensuráveis integrados à rotina.",
  ];
}
