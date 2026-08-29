import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Feather, Award, ShieldAlert, Sparkles, BookOpen, Scale, FileText, CheckCircle2 } from "lucide-react";

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
      className={`magazine-page relative w-full h-full bg-[#090D16] text-white overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      {/* ---------------- 1. TOP HEADER & METADATA BAR ---------------- */}
      <div className="relative z-10 border-b-2 border-amber-400 pb-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-xs uppercase text-amber-400">
            {project.title}
          </span>
          <span className="text-slate-600 font-mono">/</span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
            DOCUMENTAÇÃO LEGAL & MANIFESTO EDITORIAL
          </span>
        </div>
        <div className="flex items-center gap-2 text-[9px] font-mono font-semibold uppercase text-slate-300">
          <span className="bg-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded border border-amber-400/40">
            {coverConfig.editionNumber ? `EDIÇÃO #${coverConfig.editionNumber}` : "ED. #01"}
          </span>
          <span>{project.date}</span>
        </div>
      </div>

      {/* ---------------- 2. SECTION A: INFORMAÇÕES LEGAIS, ISBN, EXPEDIENTE & FICHA CIP ---------------- */}
      <div className="relative z-10 my-2.5 shrink-0 bg-slate-950/80 border border-slate-800 rounded-lg p-3 space-y-2.5 shadow-sm">
        {/* Row 1: Legal Badges (ISBN, ISSN, Registro) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2 text-[9px] font-mono">
          <div className="flex items-center gap-2">
            <span className="font-black text-amber-400 flex items-center gap-1 uppercase tracking-wider">
              <Scale className="w-3 h-3 text-amber-400" />
              REGISTRO EDITORIAL OFICIAL:
            </span>
            <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-slate-200 font-bold">
              ISBN {editorialInfo.isbn || "978-65-00-98765-4"}
            </span>
            <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-slate-200 font-bold">
              ISSN {editorialInfo.issn || "2675-9829"}
            </span>
          </div>

          <div className="text-[8px] text-slate-400 uppercase tracking-tight">
            {editorialInfo.publisherInfo || "MONTANHA EDITORIAL LTDA. // SÃO PAULO - BRASIL"}
          </div>
        </div>

        {/* Row 2: Grid with Expediente (Staff) and Cataloging CIP / Legal Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Left Sub-column (5 cols): Staff Editorial */}
          <div className="md:col-span-5 border-r md:border-slate-800/80 pr-2 space-y-1">
            <div className="flex items-center gap-1 text-[8px] font-mono font-black text-amber-400 uppercase tracking-widest mb-1">
              <Award className="w-2.5 h-2.5" />
              <span>EXPEDIENTE & CORPO EDITORIAL</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] font-mono">
              {editorialInfo.credits.slice(0, 4).map((c) => (
                <div key={c.id} className="leading-tight">
                  <span className="text-slate-500 block uppercase text-[7px] font-semibold">{c.role}</span>
                  <span className="text-slate-200 font-bold truncate block">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sub-column (7 cols): Ficha Catalográfica (CIP) & Disclaimers Legais */}
          <div className="md:col-span-7 space-y-1">
            <div className="flex items-center gap-1 text-[8px] font-mono font-black text-amber-400 uppercase tracking-widest mb-0.5">
              <FileText className="w-2.5 h-2.5" />
              <span>FICHA CATALOGRÁFICA (CIP) & TERMOS LEGAIS</span>
            </div>
            <p className="text-[7.5px] font-mono text-slate-400 leading-tight text-justify">
              {editorialInfo.catalogingData ||
                "Dados Internacionais de Catalogação na Publicação (CIP): Revista Montanha / Editor-Chefe: Coach Montanha. São Paulo: Montanha Editorial, 2026. Publicação Mensal. CDD 613.71. Todos os direitos reservados."}
            </p>
            <p className="text-[7px] font-mono text-slate-500 leading-tight text-justify">
              {editorialInfo.disclaimerText ||
                "AVISO LEGAL & MÉDICO: O conteúdo destina-se a fins informativos e educacionais. A prática de exercícios de alta intensidade exige avaliação médica prévia e acompanhamento profissional habilitado. © 2026 Montanha Media."}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- 3. SECTION B: CARTA DO EDITOR & MANIFESTO DE ABERTURA ---------------- */}
      <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden pt-1">
        {/* Header of the Letter */}
        <div className="space-y-1.5 shrink-0">
          <div className="flex items-center gap-1.5 text-[9px] font-mono font-black tracking-widest text-amber-400 uppercase">
            <Feather className="w-3 h-3" />
            <span>CARTA DO EDITOR // MANIFESTO DE ABERTURA</span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
            {editorialInfo.editorLetterTitle || "A BUSCA INCESSANTE PELA EXCELÊNCIA"}
          </h2>
        </div>

        {/* Middle: Integrated Compact Editor Header + Flowing Multi-Column Text */}
        <div className="flex-1 my-2 overflow-hidden flex flex-col justify-start">
          {/* Compact Editor Profile Banner */}
          <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg mb-2.5 shrink-0">
            {editorialInfo.editorPhoto && (
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 shadow-md">
                <img
                  src={editorialInfo.editorPhoto}
                  alt={editorialInfo.editorName}
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-black text-xs sm:text-sm text-white uppercase tracking-tight truncate">
                  {editorialInfo.editorName}
                </h4>
                <span className="bg-amber-400 text-slate-950 font-black font-mono text-[8px] px-1.5 py-0.2 rounded uppercase shrink-0">
                  {editorialInfo.editorRole || "EDITOR-CHEFE"}
                </span>
              </div>
              <p className="text-[9px] text-slate-400 leading-tight truncate mt-0.5">
                Fundador da metodologia e mentor de alta performance.
              </p>
            </div>

            {editorialInfo.editorialNote && (
              <div className="hidden sm:block text-right max-w-xs pl-2 border-l border-slate-800">
                <p className="text-[8.5px] font-mono text-amber-300 font-bold italic leading-tight">
                  "{editorialInfo.editorialNote}"
                </p>
              </div>
            )}
          </div>

          {/* Letter Body (2 Colunas Elegantes no Desktop/Print para leitura fluida) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[11.5px] text-slate-300 leading-relaxed text-justify font-sans flex-1 overflow-hidden">
            {editorialInfo.editorLetter.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:text-3xl first-letter:font-black first-letter:text-amber-400 first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:font-mono"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Signature & Sign-off */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
              — {editorialInfo.editorName}
            </span>
            <span className="text-slate-600 font-mono text-[9px]">•</span>
            <span className="text-[9px] text-slate-400 font-mono uppercase">
              {editorialInfo.editorRole}
            </span>
          </div>

          <div className="bg-amber-400/10 border border-amber-400/40 px-2.5 py-0.5 rounded text-amber-400 font-mono font-black text-[9px] uppercase tracking-wider">
            FORÇA & HONRA
          </div>
        </div>
      </div>

      {/* ---------------- 4. BOTTOM FOOTER & PAGE NUMBERING ---------------- */}
      <div className="relative z-10 border-t border-slate-800 pt-1.5 flex items-center justify-between text-[9px] font-mono text-slate-400 font-bold uppercase shrink-0">
        <span>{project.title} • {coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"}</span>
        <span className="bg-slate-900 text-amber-400 border border-slate-700 px-2 py-0.5 rounded">
          PÁGINA {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
        </span>
      </div>
    </div>
  );
};
