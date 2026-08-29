import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Bookmark, Award, Feather, ArrowRight, Zap, Users, Building, ShieldCheck } from "lucide-react";

interface EditorialPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const EditorialPage: React.FC<EditorialPageProps> = ({
  project,
  theme,
  pageNumber = 2,
  isPrintMode = false,
}) => {
  const { editorialInfo, articles, coverConfig } = project;

  // Filter articles with images for the Visual Feature Column (right)
  const visualArticles = articles.filter((a) => a.heroImage).slice(0, 3);

  return (
    <div
      className={`magazine-page relative w-full h-full bg-[#0B0F19] text-white overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Subtle Industrial Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Block: CONTENTS + ISSUE METADATA */}
      <div className="relative z-10 border-b-2 border-amber-400 pb-3 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs">
              {project.volume} // {coverConfig.editionNumber || "ISSUE #01"}
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {project.title}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white leading-none">
            CONTENTS <span className="text-amber-400 font-mono text-2xl sm:text-3xl">// SUMÁRIO</span>
          </h1>
        </div>

        <div className="text-right hidden sm:block font-mono text-[10px] text-slate-400">
          <p className="font-bold text-amber-400">{coverConfig.issueDate}</p>
          <p className="tracking-widest">UNCONVENTIONAL DOSSIER</p>
        </div>
      </div>

      {/* Main Two-Column Split Architecture: Content List (Left) + Visual Feature Column (Right) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 my-4 flex-1 overflow-hidden">
        {/* Left Column: Structured Content List & Recurring Segments (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between pr-0 md:pr-2 border-b md:border-b-0 md:border-r border-slate-800 pb-3 md:pb-0">
          {/* Main Articles List (Chronological by Page Number) */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest text-amber-400 uppercase pb-1 border-b border-slate-800">
              <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>FEATURED PROTOCOLS & ARTICLES</span>
            </div>

            <div className="space-y-3">
              {articles.map((art, idx) => {
                const articlePage = idx + 3; // Chronological page indexing starting at 3
                const paddedPage = articlePage < 10 ? `0${articlePage}` : `${articlePage}`;

                return (
                  <div
                    key={art.id}
                    className="group flex items-start gap-3 p-1.5 rounded transition-all hover:bg-slate-900/60 border-l-2 border-transparent hover:border-amber-400"
                  >
                    {/* 1. Page Number: Bold tabular numerals */}
                    <div className="shrink-0">
                      <span className="inline-flex items-center justify-center font-mono font-black text-sm sm:text-base text-amber-400 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded shadow-sm w-11 text-center">
                        {paddedPage}
                      </span>
                    </div>

                    {/* Content Details: Category Tag, Title, Author Credit */}
                    <div className="flex-1 space-y-0.5">
                      {/* 2. Category Tag / Prefix */}
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-black text-amber-400 uppercase tracking-wider">
                          // {art.category}
                        </span>
                        <span className="text-slate-600 text-[8px]">•</span>
                        <span className="text-slate-400 font-mono text-[8px]">
                          {art.estimatedReadTime} MIN READ
                        </span>
                      </div>

                      {/* 3. Article Title: Heavy sans-serif, ALL CAPS */}
                      <h3 className="text-xs sm:text-sm font-black text-white uppercase leading-tight tracking-tight group-hover:text-amber-300 transition-colors">
                        {art.title}
                      </h3>

                      {/* 4. Author Credit: Clean secondary sans-serif */}
                      <p className="text-[10px] text-slate-400 font-mono font-semibold uppercase tracking-tight">
                        BY <span className="text-slate-200">{art.author.toUpperCase()}</span>
                        {art.authorBio && (
                          <span className="text-slate-500 font-normal text-[9px] ml-1">
                            — {art.authorBio}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary Section / "Other Content" Sub-block (Recurring Segments) */}
          <div className="mt-3 pt-3 border-t-2 border-slate-800 space-y-2">
            <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">
              RECURRING SECTIONS & METADATA:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] font-mono">
              {/* Editorial Manifesto */}
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-0.5">
                  <Feather className="w-3 h-3" />
                  <span>PG. 02 • EDITORIAL LETTER</span>
                </div>
                <p className="text-slate-300 text-[9px] leading-tight line-clamp-2">
                  "{editorialInfo.editorLetterTitle}" por {editorialInfo.editorName}.
                </p>
              </div>

              {/* Contributors & Credits */}
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-0.5">
                  <Users className="w-3 h-3" />
                  <span>CONTRIBUTORS & LAB</span>
                </div>
                <p className="text-slate-400 text-[9px] leading-tight line-clamp-2">
                  {editorialInfo.credits.map((c) => c.name).join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Feature Panel (High-contrast photographic teaser thumbnails) (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800">
            <span className="text-[10px] font-mono font-black tracking-widest text-amber-400 uppercase">
              VISUAL DOSSIER // TEASERS
            </span>
            <span className="text-[9px] font-mono text-slate-500">HIGH-CONTRAST SPEC</span>
          </div>

          {/* Visual Thumbnails Grid */}
          <div className="space-y-2.5 flex-1 flex flex-col justify-between">
            {visualArticles.map((art, idx) => {
              const pageNumberTarget = idx + 3;
              const paddedNum = pageNumberTarget < 10 ? `0${pageNumberTarget}` : `${pageNumberTarget}`;

              return (
                <div
                  key={art.id}
                  className="relative group rounded-md overflow-hidden border border-slate-800 hover:border-amber-400 transition-all flex-1 min-h-[85px] sm:min-h-[95px]"
                >
                  {/* Photo */}
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Overlaid Large Stylized Page Number (Top-Left Badge) */}
                  <div className="absolute top-2 left-2 z-10 bg-black/85 backdrop-blur-md border border-amber-400/80 px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
                    <span className="text-[8px] font-mono font-bold text-amber-400 uppercase">PG</span>
                    <span className="font-mono font-black text-sm text-white leading-none">
                      {paddedNum}
                    </span>
                  </div>

                  {/* Bottom Image Headline Tag */}
                  <div className="absolute bottom-1.5 inset-x-2 z-10">
                    <span className="text-[8px] font-mono font-bold text-amber-300 uppercase tracking-wide block">
                      {art.category}
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-black text-white uppercase leading-tight line-clamp-1 drop-shadow-md">
                      {art.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Spec Footer Badge */}
          <div className="bg-slate-900 border border-slate-800 p-2 rounded flex items-center justify-between text-[8px] font-mono text-slate-400">
            <span className="text-amber-400 font-bold uppercase">MONTANHA MEDIA LAB</span>
            <span>SPEC: 300 DPI // CMYK READY</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar & Page Numbering */}
      <div className="relative z-10 border-t border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">{project.title}</span>
          <span>/</span>
          <span>{project.subtitle}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-slate-900 text-amber-400 border border-slate-700 px-2 py-0.5 rounded">
            PAGE {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
          </span>
        </div>
      </div>
    </div>
  );
};
