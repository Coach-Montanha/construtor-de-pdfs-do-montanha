import { MagazineProject } from "../types/magazine";

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
 * Sumário, Matérias (simples ou duplas) e Contracapa.
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
    count += art.pageSpan === 2 ? 2 : 1;
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
