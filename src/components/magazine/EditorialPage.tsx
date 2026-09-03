import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { formatPageNumber, getEffectiveArticlePageSpan } from "../../lib/magazine-utils";
import { Zap, Feather, Award } from "lucide-react";

interface EditorialPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const EditorialPage: React.FC<EditorialPageProps> = ({
  project,
  theme,
  pageNumber = 3,
  isPrintMode = false,
}) => {
  const { editorialInfo, articles, coverConfig, pageVisibility } = project;

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
  const isLight = Boolean(theme.isLight);

  const bgColor = isLight ? theme.bgLight : theme.bgDark;
  const textColor = theme.textColor;
  const textMutedColor = isLight ? "#475569" : "#94A3B8";
  const cardBg = theme.cardBg;
  const primaryColor = theme.primaryColor;
  const accentColor = theme.accentColor;
  const borderColor = theme.borderColor;


  // Compute exact starting page for each article dynamically accumulating page spans
  let currentOffset = 1;
  if (pageVisibility?.showCover !== false) currentOffset += 1;
  if (pageVisibility?.showEditorLetter !== false) currentOffset += 1;
  if (pageVisibility?.showContributors) currentOffset += 1;
  if (pageVisibility?.showTableOfContents !== false) currentOffset += 1;

  const activeArticlesWithPages = articles
    .filter((art) => art.enabled !== false)
    .map((art) => {
      const startPage = currentOffset;
      const span = getEffectiveArticlePageSpan(art);
      currentOffset += span;
      return {
        article: art,
        startPage,
        endPage: startPage + span - 1,
        isMultiPage: span > 1,
        span,
      };
    });

  return (
    <div
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Subtle Industrial Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Block: CONTENTS + ISSUE METADATA */}
      <div
        className="relative z-10 border-b-2 pb-3 flex items-end justify-between"
        style={{ borderColor: primaryColor }}
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="font-black text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
              style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
            >
              {project.volume} // {coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"}
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase" style={{ color: textMutedColor }}>
              {project.editorialInfo?.headerBrandTitle || project.title}
            </span>
          </div>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none ${headlineFontClass}`}
            style={{ color: textColor }}
          >
            {project.editorialInfo?.tocHeadline || "SUMÁRIO"}
          </h1>
        </div>

        <div className="text-right hidden sm:block font-mono text-[10px]" style={{ color: textMutedColor }}>
          <p className="font-bold" style={{ color: primaryColor }}>{coverConfig.issueDate}</p>
          <p className="tracking-widest">UNCONVENTIONAL DOSSIER</p>
        </div>
      </div>

      {/* Main Two-Column Split Architecture: Content List (Left) + Visual Feature Column (Right) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 my-4 flex-1 overflow-hidden">
        {/* Left Column: Structured Content List (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between pr-0 md:pr-2 border-b md:border-b-0 md:border-r pb-3 md:pb-0" style={{ borderColor: `${primaryColor}30` }}>
          {/* Main Articles List */}
          <div className="space-y-3.5">
            <div
              className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest uppercase pb-1 border-b"
              style={{ color: primaryColor, borderColor: `${primaryColor}30` }}
            >
              <Zap className="w-3 h-3" />
              <span>MATÉRIAS & PROTOCOLOS EM DESTAQUE</span>
            </div>

            <div className="space-y-3">
              {activeArticlesWithPages.map(({ article: art, startPage }) => {
                const pageLabel = formatPageNumber(startPage);

                return (
                  <div
                    key={art.id}
                    className="group flex items-start gap-3 p-1.5 rounded transition-all border-l-2"
                    style={{ borderColor: `${primaryColor}40`, backgroundColor: `${cardBg}50` }}
                  >
                    {/* 1. Initial Page Number */}
                    <div className="shrink-0 flex flex-col items-center">
                      <span
                        className="font-mono font-black text-xs sm:text-sm px-2 py-0.5 rounded border block"
                        style={{ backgroundColor: cardBg, color: primaryColor, borderColor: `${primaryColor}60` }}
                      >
                        {pageLabel}
                      </span>
                    </div>

                    {/* 2. Article Title, Category Tag, Author */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="text-[8px] font-mono font-bold uppercase tracking-wider"
                          style={{ color: primaryColor }}
                        >
                          // {art.category}
                        </span>
                        <span className="text-[8px] font-mono" style={{ color: textMutedColor }}>
                          {art.estimatedReadTime} MIN DE LEITURA
                        </span>
                      </div>

                      <h3
                        className={`font-black text-xs sm:text-sm uppercase tracking-tight leading-snug line-clamp-1 ${headlineFontClass}`}
                        style={{ color: textColor }}
                      >
                        {art.title}
                      </h3>

                      <p
                        className={`text-[10px] line-clamp-1 leading-snug mt-0.5 ${bodyFontClass}`}
                        style={{ color: textMutedColor }}
                      >
                        {art.subtitle || "Protocolo aprofundado de força e longevidade."}
                      </p>
                    </div>

                    {/* 3. Author Name */}
                    <div className="text-right shrink-0 hidden sm:block">
                      <span className="text-[8px] font-mono uppercase block" style={{ color: textMutedColor }}>
                        POR: {art.author.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Editorial Structure Sections */}
          <div
            className="p-3 rounded-lg border space-y-1.5"
            style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
          >
            <div className="flex items-center gap-1.5 text-[9px] font-mono font-black uppercase" style={{ color: primaryColor }}>
              <Award className="w-3.5 h-3.5" />
              <span>COLUNAS REGULARES DA EDIÇÃO:</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono" style={{ color: textMutedColor }}>
              <div className="flex items-center gap-1.5">
                <span className="font-bold" style={{ color: primaryColor }}>PÁG. 02</span>
                <span className="truncate">Manifesto do Editor & Termos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold" style={{ color: primaryColor }}>PÁG. {formatPageNumber(pageNumber)}</span>
                <span className="truncate">Sumário Completo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Features (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          <div
            className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest uppercase pb-1 border-b shrink-0"
            style={{ color: primaryColor, borderColor: `${primaryColor}30` }}
          >
            <Feather className="w-3 h-3" />
            <span>VISUAL SPOTLIGHT</span>
          </div>

          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {(() => {
              const firstArticleHero = project.articles?.[0]?.heroImage;
              const configuredSpotlight = project.editorialInfo?.tocSpotlightImage;
              // Ensure we never repeat the first article's hero image
              const exclusiveDefaultImg = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80";
              const spotlightSrc = (configuredSpotlight && configuredSpotlight !== firstArticleHero)
                ? configuredSpotlight
                : exclusiveDefaultImg;

              return (
                <div
                  className="relative rounded-lg overflow-hidden border flex-1 w-full min-h-[180px] group shadow-md"
                  style={{ borderColor: `${primaryColor}50` }}
                >
                  <img
                    src={spotlightSrc}
                    alt={project.editorialInfo?.tocSpotlightTitle || "Visual Spotlight"}
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="bg-black/90 backdrop-blur-md p-2.5 rounded border border-white/15 shadow-xl space-y-1">
                      <span className="text-[8px] font-mono font-black uppercase tracking-wider block" style={{ color: primaryColor }}>
                        // {project.editorialInfo?.tocSpotlightCategory || "FOTOGRAFIA EDITORIAL"}
                      </span>
                      <h4 className={`text-xs sm:text-sm font-black uppercase text-white leading-tight ${headlineFontClass}`}>
                        {project.editorialInfo?.tocSpotlightTitle || "TREINAMENTO NÃO-CONVENCIONAL & ALAVANCAS DE FORÇA"}
                      </h4>
                      <p className="text-[8.5px] font-mono text-slate-300">
                        REGISTRO EXCLUSIVO DA EDIÇÃO • MONTANHA LAB
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div
        className="relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0"
        style={{ borderColor: `${primaryColor}40`, color: textMutedColor }}
      >
        <span>{project.title} • {coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"}</span>
        <span
          className="px-2 py-0.5 rounded border"
          style={{ backgroundColor: cardBg, color: primaryColor, borderColor: `${primaryColor}60` }}
        >
          PÁGINA {formatPageNumber(pageNumber)}
        </span>
      </div>
    </div>
  );
};
