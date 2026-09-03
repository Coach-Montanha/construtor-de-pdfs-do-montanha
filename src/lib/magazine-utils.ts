import { Article, MagazineArticle, MagazineProject } from "../types/magazine";

/**
 * Expressão regular que identifica quebras de página manuais inseridas pelo usuário
 */
export const MANUAL_PAGE_BREAK_REGEX = /\n?\s*(?:---|===)\s*(?:QUEBRA DE P[ÁA]GINA|PAGE\s*BREAK)\s*(?:---|===)\s*\n?/i;

/**
 * Calcula a quantidade mínima real de páginas necessárias para comportar 100%
 * do texto de um artigo sem que nenhum caractere seja cortado por overflow.
 *
 * Capacidades editoriais com diagramação equilibrada (2 colunas):
 * - Página 1 (com foto hero e cabeçalho monumental): ~1.350 a 1.450 caracteres.
 * - Página 1 (sem foto hero): ~2.200 caracteres.
 * - Páginas seguintes (2, 3, 4...): ~2.000 a 2.300 caracteres por página.
 */
export function calculateRequiredArticlePages(article: MagazineArticle): number {
  const content = article.content || "";
  if (!content.trim()) return 1;

  if (MANUAL_PAGE_BREAK_REGEX.test(content)) {
    const parts = content.split(MANUAL_PAGE_BREAK_REGEX);
    return Math.max(1, parts.length);
  }

  const cleanContent = content.replace(MANUAL_PAGE_BREAK_REGEX, "\n\n").trim();
  const totalChars = cleanContent.length;

  const hasHero = Boolean(article.heroImage && (article.heroImageLayout || "banner") !== "hidden");
  const singlePageLimit = hasHero ? 2200 : 3600;

  if (totalChars <= singlePageLimit) {
    return 1;
  }

  // Multi-page editorial thresholds:
  // 2 páginas: até 4.800 caracteres
  if (totalChars <= 4800) {
    return 2;
  }

  // 3 páginas: até 7.500 caracteres
  if (totalChars <= 7500) {
    return 3;
  }

  // 4 páginas: até 10.500 caracteres
  if (totalChars <= 10500) {
    return 4;
  }

  return Math.min(6, Math.ceil(totalChars / 2800));
}

/**
 * Retorna o pageSpan efetivo de um artigo. Se o usuário definiu um valor manual maior,
 * respeita esse valor (a menos que o artigo seja curto, onde múltiplas páginas
 * criariam páginas vazias com apenas 2 linhas).
 */
export function getEffectiveArticlePageSpan(article: MagazineArticle): number {
  const content = (article.content || "").replace(MANUAL_PAGE_BREAK_REGEX, "\n\n").trim();
  const totalChars = content.length;

  // Se o artigo tem quebra manual de página, respeita estritamente o número de partes
  if (MANUAL_PAGE_BREAK_REGEX.test(article.content || "")) {
    const parts = (article.content || "").split(MANUAL_PAGE_BREAK_REGEX);
    return Math.max(1, parts.length);
  }

  const required = calculateRequiredArticlePages(article);
  const configured = Math.max(1, article.pageSpan || 1);

  // Artigos muito curtos (< 1.100 caracteres) NUNCA devem ter mais de 1 página
  // para evitar páginas com apenas 1 ou 2 linhas de texto.
  if (totalChars < 1100) {
    return 1;
  }

  // Para artigos moderados (1.100 a 2.200 caracteres), permitir no máximo 2 páginas se configurado
  if (totalChars <= 2200) {
    return Math.min(2, Math.max(required, configured));
  }

  // Para artigos de 2.201 a 4.000 caracteres, permitir no máximo 2 páginas se configurado
  if (totalChars <= 4000) {
    return Math.min(2, Math.max(required, configured));
  }

  // Para artigos de 4.001 a 6.500 caracteres, permitir no máximo 3 páginas se configurado
  if (totalChars <= 6500) {
    return Math.min(3, Math.max(required, configured));
  }

  return Math.max(required, configured);
}

/**
 * Formata o número da página adicionando zero à esquerda quando menor que 10.
 * Ex: 1 -> "01", 9 -> "09", 10 -> "10"
 */
export function formatPageNumber(pageNum: number): string {
  if (isNaN(pageNum) || pageNum < 0) return "00";
  return pageNum < 10 ? `0${pageNum}` : `${pageNum}`;
}

/**
 * Calcula o volume total de páginas ativas de uma edição da revista.
 * Leva em consideração visibilidade de Capa, Expediente, Colaboradores,
 * Sumário, Matérias e Contracapa com suporte dinâmico a múltiplas páginas.
 */
export function calculateMagazineTotalPages(project: MagazineProject): number {
  const vis = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false,
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  let count = 0;
  if (vis.showCover) count++;
  if (vis.showEditorLetter) count++;
  if (vis.showContributors) count++;
  if (vis.showTableOfContents) count++;

  const activeArticles = (project.articles || []).filter((a) => a.enabled !== false);
  activeArticles.forEach((art) => {
    count += getEffectiveArticlePageSpan(art);
  });

  if (vis.showBackCover) count++;

  return Math.max(1, count);
}

/**
 * Conta com precisão o número de palavras em um texto excluindo espaços extras.
 */
export function countWords(text: string | undefined | null): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Estima o tempo de leitura em minutos com base no volume de palavras (padrão editorial de 200 ppm).
 */
export function estimateReadTime(text: string | undefined | null, wordsPerMinute: number = 200): number {
  const words = countWords(text);
  if (words === 0) return 1;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
