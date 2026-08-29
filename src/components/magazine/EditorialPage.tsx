import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Bookmark, Award, Feather, ArrowRight } from "lucide-react";

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

  return (
    <div
      className={`magazine-page relative w-full h-full bg-slate-50 text-slate-900 overflow-hidden flex flex-col justify-between p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Top Header Bar */}
      <div className="border-b-2 pb-2 flex items-center justify-between" style={{ borderColor: theme.primaryColor }}>
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-widest text-xs uppercase" style={{ color: theme.primaryColor }}>
            {coverConfig.mastheadText}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
            EDITORIAL & SUMÁRIO
          </span>
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase">
          {project.date} • {project.editionNumber}
        </div>
      </div>

      {/* Main Grid: Left Column (Editor's Letter) & Right Column (Table of Contents & Credits) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-4 flex-1 overflow-hidden">
        {/* Left Column: Letter from Editor (5 cols) */}
        <div className="md:col-span-6 flex flex-col justify-between border-r border-slate-200 pr-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              <Feather className="w-3.5 h-3.5" />
              <span>CARTA DO EDITOR</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              {editorialInfo.editorLetterTitle}
            </h2>

            <div className="flex items-center gap-3 mb-3 p-2 bg-slate-100 rounded-lg border border-slate-200">
              <img
                src={editorialInfo.editorPhoto}
                alt={editorialInfo.editorName}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 shadow-sm"
              />
              <div>
                <h4 className="font-bold text-sm text-slate-900">{editorialInfo.editorName}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{editorialInfo.editorRole}</p>
              </div>
            </div>

            <div className="text-xs text-slate-700 leading-relaxed space-y-2.5 text-justify">
              {editorialInfo.editorLetter.split("\n\n").map((para, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-3xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-2" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Editor Note Bottom */}
          <div className="pt-3 border-t border-slate-200 mt-2">
            <p className="text-[10px] text-slate-400 italic">
              "{editorialInfo.editorialNote}"
            </p>
          </div>
        </div>

        {/* Right Column: Table of Contents & Masthead Credits (6 cols) */}
        <div className="md:col-span-6 flex flex-col justify-between pl-2">
          {/* Table of Contents (Sumário) */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 border-b border-amber-500/30 pb-1">
              <Bookmark className="w-3.5 h-3.5" />
              <span>SUMÁRIO DESTA EDIÇÃO</span>
            </div>

            <div className="space-y-3">
              {articles.map((art, idx) => {
                const articlePage = idx + 3; // Pages start at 3
                return (
                  <div
                    key={art.id}
                    className="group p-2 rounded-md hover:bg-slate-100 transition-colors border-b border-dashed border-slate-200 pb-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider">
                          {art.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                          {art.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                          {art.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-slate-900 text-white font-mono text-xs font-bold px-2 py-0.5 rounded">
                          PÁG {articlePage}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expediente / Ficha Técnica */}
          <div className="bg-slate-900 text-slate-200 p-3.5 rounded-lg border border-slate-800 mt-4">
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Award className="w-3 h-3" />
              <span>EXPEDIENTE & CRÉDITOS</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {editorialInfo.credits.map((c) => (
                <div key={c.id}>
                  <p className="text-slate-400 text-[9px] uppercase font-semibold">{c.role}</p>
                  <p className="text-white font-medium">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer & Page Number */}
      <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase">
        <span>{project.title} • {project.volume}</span>
        <span className="text-slate-900 font-bold bg-slate-200 px-2 py-0.5 rounded">PÁGINA {pageNumber}</span>
      </div>
    </div>
  );
};
