import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Feather, Award, ShieldAlert, Sparkles } from "lucide-react";

interface EditorLetterPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const EditorLetterPage: React.FC<EditorLetterPageProps> = ({
  project,
  theme,
  pageNumber = 2,
  isPrintMode = false,
}) => {
  const { editorialInfo, coverConfig } = project;

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
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 border-b-2 border-amber-400 pb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-xs uppercase text-amber-400">
            {project.title}
          </span>
          <span className="text-slate-600 font-mono">/</span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
            EDITORIAL MANIFESTO
          </span>
        </div>
        <div className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
          {project.date} • {coverConfig.editionNumber || "ED. #01"}
        </div>
      </div>

      {/* Main Two-Column Layout: Left (1/3 Width) + Right (2/3 Width) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 my-4 flex-1 overflow-hidden">
        {/* Left Column (1/3 Width ~ 4 Cols): Staff List, Editor Profile, Legal Disclaimers */}
        <div className="md:col-span-4 flex flex-col justify-between border-r border-slate-800 pr-4 space-y-4">
          {/* Editor Mini-Profile Card */}
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg shadow-md space-y-2.5">
            <div className="relative aspect-[4/3] rounded overflow-hidden border border-slate-700">
              <img
                src={editorialInfo.editorPhoto}
                alt={editorialInfo.editorName}
                className="w-full h-full object-cover filter contrast-125"
              />
              <div className="absolute top-1.5 left-1.5 bg-black/85 backdrop-blur-sm border border-amber-400/80 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold text-amber-400 uppercase">
                EDITOR-IN-CHIEF
              </div>
            </div>
            <div>
              <h4 className="font-black text-sm text-white uppercase tracking-tight">
                {editorialInfo.editorName}
              </h4>
              <p className="text-[10px] font-mono text-amber-400 font-bold uppercase">
                {editorialInfo.editorRole}
              </p>
              <p className="text-[9px] text-slate-400 leading-tight mt-1">
                Fundador do método não-convencional e mentor de força & alta performance.
              </p>
            </div>
          </div>

          {/* Staff List / Expediente */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-lg space-y-2">
            <div className="flex items-center gap-1 text-[9px] font-mono font-black text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              <Award className="w-3 h-3" />
              <span>EXPEDIENTE & STAFF</span>
            </div>
            <div className="space-y-1.5 text-[9px] font-mono">
              {editorialInfo.credits.map((credit) => (
                <div key={credit.id}>
                  <span className="text-slate-500 block uppercase text-[8px] font-semibold">
                    {credit.role}
                  </span>
                  <span className="text-slate-200 font-bold">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimers / Legal Notice (Micro-typography 6-8pt) */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1 text-[8px] font-mono font-bold text-slate-400 uppercase mb-1">
              <ShieldAlert className="w-2.5 h-2.5 text-amber-400" />
              <span>DISCLAIMER & AVISO LEGAL</span>
            </div>
            <p className="text-[7.5px] leading-tight text-slate-500 font-mono text-justify">
              {editorialInfo.disclaimerText ||
                "AVISO LEGAL: Os treinos e métodos de força não-convencional aqui apresentados exigem supervisão profissional. Consulte um médico antes de iniciar treinos intensos. © 2026 Montanha Media."}
            </p>
          </div>
        </div>

        {/* Right Column (2/3 Width ~ 8 Cols): Editorial Headline, Large Drop-Cap Body, Signature */}
        <div className="md:col-span-8 flex flex-col justify-between pl-0 md:pl-2 space-y-3">
          <div>
            {/* Header / Kicker */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest text-amber-400 uppercase mb-1">
              <Feather className="w-3.5 h-3.5" />
              <span>CARTA DO EDITOR // OPENING MANIFESTO</span>
            </div>

            {/* Editorial Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-3">
              {editorialInfo.editorLetterTitle}
            </h2>

            {/* Action Shot Inset (Optional full visual asset) */}
            {editorialInfo.editorActionPhoto && (
              <div className="relative h-28 sm:h-32 w-full rounded-md overflow-hidden border border-slate-800 mb-3 group">
                <img
                  src={editorialInfo.editorActionPhoto}
                  alt="Coach Montanha Action"
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
                />
                <div className="absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-amber-400 font-bold uppercase">
                  RAW STEEL // MONTANHA IRON LAB
                </div>
              </div>
            )}

            {/* Structured Editorial Body Text with Large Drop-Cap */}
            <div className="text-xs sm:text-[13px] text-slate-300 leading-relaxed space-y-3 text-justify font-sans">
              {editorialInfo.editorLetter.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:leading-none first-letter:font-mono"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Editor's Signature & Closing Sign-off */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono font-bold text-amber-400 uppercase">
                "{editorialInfo.editorialNote || "A consistência diária nos detalhes invisíveis forja a grandeza."}"
              </p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5 uppercase">
                — {editorialInfo.editorName}, {editorialInfo.editorRole}
              </p>
            </div>
            <div className="bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded text-amber-400 font-mono font-black text-[10px] uppercase">
              FORÇA & HONRA
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer & Page Numbering */}
      <div className="relative z-10 border-t border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
        <span>{project.title} • {coverConfig.editionNumber || "ED. #01"}</span>
        <span className="bg-slate-900 text-amber-400 border border-slate-700 px-2 py-0.5 rounded">
          PAGE {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
        </span>
      </div>
    </div>
  );
};
