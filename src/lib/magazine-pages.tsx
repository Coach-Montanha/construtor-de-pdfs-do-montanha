import React from "react";
import {
  MagazineLayoutMode,
  MagazineProject,
  MagazineTheme,
} from "../types/magazine";
import { CoverPage } from "../components/magazine/CoverPage";
import { EditorLetterPage } from "../components/magazine/EditorLetterPage";
import { ContributorsPage } from "../components/magazine/ContributorsPage";
import { EditorialPage } from "../components/magazine/EditorialPage";
import { ArticleSpread } from "../components/magazine/ArticleSpread";
import { BackCoverPage } from "../components/magazine/BackCoverPage";
import { getEffectiveArticlePageSpan } from "./magazine-utils";

export interface PageItem {
  id: string;
  title: string;
  render: (
    pageNumber: number,
    isPrint?: boolean,
    customLayoutMode?: MagazineLayoutMode
  ) => React.ReactNode;
}

export interface GetActiveMagazinePagesOptions {
  project: MagazineProject;
  theme: MagazineTheme;
  layoutMode?: MagazineLayoutMode;
}

/**
 * Retorna o array de páginas ativas da revista em ordem editorial,
 * permitindo renderização idêntica no Viewer, no Modal de Pré-visualização
 * e no motor de exportação direta para PDF.
 */
export function getActiveMagazinePages({
  project,
  theme,
  layoutMode = "print",
}: GetActiveMagazinePagesOptions): PageItem[] {
  const visibility = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false,
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  const activePages: PageItem[] = [];

  if (visibility.showCover) {
    activePages.push({
      id: "cover",
      title: "Capa Principal",
      render: (_, isPrint, customMode) => (
        <CoverPage
          project={project}
          theme={theme}
          isPrintMode={isPrint ?? false}
          layoutMode={customMode || layoutMode}
        />
      ),
    });
  }

  if (visibility.showEditorLetter) {
    activePages.push({
      id: "editor-letter",
      title: "Carta do Editor",
      render: (pNum, isPrint, customMode) => (
        <EditorLetterPage
          project={project}
          theme={theme}
          pageNumber={pNum}
          isPrintMode={isPrint ?? false}
          layoutMode={customMode || layoutMode}
        />
      ),
    });
  }

  if (visibility.showContributors) {
    activePages.push({
      id: "contributors",
      title: "Colaboradores",
      render: (pNum, isPrint, customMode) => (
        <ContributorsPage
          project={project}
          theme={theme}
          pageNumber={pNum}
          isPrintMode={isPrint ?? false}
          layoutMode={customMode || layoutMode}
        />
      ),
    });
  }

  if (visibility.showTableOfContents) {
    activePages.push({
      id: "toc",
      title: "Sumário / Índice",
      render: (pNum, isPrint, customMode) => (
        <EditorialPage
          project={project}
          theme={theme}
          pageNumber={pNum}
          isPrintMode={isPrint ?? false}
          layoutMode={customMode || layoutMode}
        />
      ),
    });
  }

  project.articles
    .filter((art) => art.enabled !== false)
    .forEach((art) => {
      const span = getEffectiveArticlePageSpan(art);
      for (let part = 1; part <= span; part++) {
        activePages.push({
          id: span > 1 ? `${art.id}-part${part}` : art.id,
          title: span > 1 ? `${art.title} (Parte ${part}/${span})` : art.title,
          render: (pNum, isPrint, customMode) => (
            <ArticleSpread
              key={`${art.id}-part${part}`}
              article={art}
              project={project}
              theme={theme}
              pageNumber={pNum}
              isPrintMode={isPrint ?? false}
              pagePart={part}
              totalPagesForArticle={span}
              layoutMode={customMode || layoutMode}
            />
          ),
        });
      }
    });

  if (visibility.showBackCover) {
    activePages.push({
      id: "back-cover",
      title: "Contracapa",
      render: (pNum, isPrint, customMode) => (
        <BackCoverPage
          project={project}
          theme={theme}
          pageNumber={pNum}
          isPrintMode={isPrint ?? false}
          layoutMode={customMode || layoutMode}
        />
      ),
    });
  }

  return activePages;
}
