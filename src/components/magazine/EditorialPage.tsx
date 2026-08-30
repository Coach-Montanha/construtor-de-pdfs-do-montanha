import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { ArrowRight, Zap, Users, Building, Feather, Award } from "lucide-react";

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

  // Filter articles with images for the Visual Feature Column (right)
  const visualArticles = articles.filter((a) => a.heroImage).slice(0, 3);

  // Compute starting page for articles based on active previous pages
  let articleStartPage = 1;
  if (pageVisibility?.showCover !== false) articleStartPage++;
  if (pageVisibility?.showEditorLetter !== false) articleStartPage++;
  if (pageVisibility?.showContributors) articleStartPage++;
  if (pageVisibility?.showTableOfContents !== false) articleStartPage++;

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
              {project.title}
            </span>
          </div>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none ${headlineFontClass}`}
            style={{ color: textColor }}
          >
            CONTENTS <span className="font-mono text-2xl sm:text-3xl" style={{ color: primaryColor }}>// SUMÁRIO</span>
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
              {articles.map((art, idx) => {
                const articlePage = articleStartPage + idx;
                const paddedPage = articlePage < 10 ? `0${articlePage}` : `${articlePage}`;

                return (
                  <div
                    key={art.id}
                    className="group flex items-start gap-3 p-1.5 rounded transition-all border-l-2"
                    style={{ borderColor: `${primaryColor}40`, backgroundColor: `${cardBg}50` }}
                  >
                    {/* 1. Page Number */}
                    <div className="shrink-0">
                      <span
                        className="font-mono font-black text-sm px-2 py-0.5 rounded border block"
                        style={{ backgroundColor: cardBg, color: primaryColor, borderColor: `${primaryColor}60` }}
                      >
                        {paddedPage}
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
                          {art.estimatedReadTime} MIN READ
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
                <span className="font-bold" style={{ color: primaryColor }}>PÁG. {pageNumber < 10 ? `0${pageNumber}` : pageNumber}</span>
                <span className="truncate">Sumário Completo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Features (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3">
          <div
            className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest uppercase pb-1 border-b"
            style={{ color: primaryColor, borderColor: `${primaryColor}30` }}
          >
            <Feather className="w-3 h-3" />
            <span>VISUAL SPOTLIGHTS</span>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
            {visualArticles.map((art, idx) => (
              <div
                key={art.id}
                className="relative rounded-lg overflow-hidden border flex-1 min-h-[75px] group shadow-sm"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <img
                  src={art.heroImage}
                  alt={art.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-2">
                  <span className="text-[7.5px] font-mono font-bold uppercase" style={{ color: primaryColor }}>
                    // {art.category}
                  </span>
                  <h4 className={`text-[11px] font-black uppercase text-white leading-tight line-clamp-1 ${headlineFontClass}`}>
                    {art.title}
                  </h4>
                </div>
              </div>
            ))}
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
          PÁGINA {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
        </span>
      </div>
    </div>
  );
};
