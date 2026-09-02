import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { formatPageNumber } from "../../lib/magazine-utils";
import { Feather, Award, Scale, FileText } from "lucide-react";

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

  return (
    <div
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Subtle Tech Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

      {/* ---------------- 1. TOP HEADER & METADATA BAR ---------------- */}
      <div
        className="relative z-10 border-b-2 pb-2 flex items-center justify-between shrink-0"
        style={{ borderColor: primaryColor }}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-xs uppercase" style={{ color: primaryColor }}>
            {editorialInfo.headerBrandTitle || project.title}
          </span>
          <span className="opacity-40 font-mono">/</span>
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase" style={{ color: textMutedColor }}>
            {editorialInfo.headerDocTitle || "DOCUMENTAÇÃO LEGAL & MANIFESTO EDITORIAL"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[9px] font-mono font-semibold uppercase" style={{ color: textMutedColor }}>
          <span
            className="px-1.5 py-0.5 rounded border font-bold"
            style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: `${primaryColor}50` }}
          >
            {editorialInfo.headerBadgeText || (coverConfig.editionNumber ? `EDIÇÃO #${coverConfig.editionNumber}` : "ED. #01")}
          </span>
          <span>{editorialInfo.headerDateText || project.date}</span>
        </div>
      </div>

      {/* ---------------- 2. SECTION A: INFORMAÇÕES LEGAIS, ISBN, EXPEDIENTE & FICHA CIP ---------------- */}
      <div
        className="relative z-10 my-2.5 shrink-0 rounded-lg p-3 space-y-2.5 shadow-sm border"
        style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
      >
        {/* Row 1: Legal Badges (ISBN, ISSN, Registro) */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 border-b pb-2 text-[9px] font-mono"
          style={{ borderColor: `${primaryColor}30` }}
        >
          <div className="flex items-center gap-2">
            <span className="font-black flex items-center gap-1 uppercase tracking-wider" style={{ color: primaryColor }}>
              <Scale className="w-3 h-3" />
              REGISTRO EDITORIAL OFICIAL:
            </span>
            <span
              className="px-2 py-0.5 rounded border font-bold"
              style={{ backgroundColor: bgColor, borderColor: `${primaryColor}40`, color: textColor }}
            >
              ISBN {editorialInfo.isbn || "978-65-00-98765-4"}
            </span>
            <span
              className="px-2 py-0.5 rounded border font-bold"
              style={{ backgroundColor: bgColor, borderColor: `${primaryColor}40`, color: textColor }}
            >
              ISSN {editorialInfo.issn || "2675-9829"}
            </span>
          </div>

          <div className="text-[8px] uppercase tracking-tight" style={{ color: textMutedColor }}>
            {editorialInfo.publisherInfo || "MONTANHA EDITORIAL LTDA. // SÃO PAULO - BRASIL"}
          </div>
        </div>

        {/* Row 2: Grid with Expediente (Staff) and Cataloging CIP / Legal Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Left Sub-column (5 cols): Staff Editorial */}
          <div className="md:col-span-5 border-r pr-2 space-y-1" style={{ borderColor: `${primaryColor}30` }}>
            <div className="flex items-center gap-1 text-[8px] font-mono font-black uppercase tracking-widest mb-1" style={{ color: primaryColor }}>
              <Award className="w-2.5 h-2.5" />
              <span>EXPEDIENTE & CORPO EDITORIAL</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] font-mono">
              {editorialInfo.credits.slice(0, 4).map((c) => (
                <div key={c.id} className="leading-tight">
                  <span className="block uppercase text-[7px] font-semibold" style={{ color: textMutedColor }}>{c.role}</span>
                  <span className="font-bold truncate block" style={{ color: textColor }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sub-column (7 cols): Ficha Catalográfica (CIP) & Disclaimers Legais */}
          <div className="md:col-span-7 space-y-1">
            <div className="flex items-center gap-1 text-[8px] font-mono font-black uppercase tracking-widest mb-0.5" style={{ color: primaryColor }}>
              <FileText className="w-2.5 h-2.5" />
              <span>FICHA CATALOGRÁFICA (CIP) & TERMOS LEGAIS</span>
            </div>
            <p className="text-[7.5px] font-mono leading-tight text-left" style={{ color: textMutedColor }}>
              {editorialInfo.catalogingData ||
                "Dados Internacionais de Catalogação na Publicação (CIP): Revista Montanha / Editor-Chefe: Coach Montanha. São Paulo: Montanha Editorial, 2026. Publicação Mensal. CDD 613.71. Todos os direitos reservados."}
            </p>
            <p className="text-[7px] font-mono leading-tight text-left" style={{ color: isLight ? "#64748B" : "#64748B" }}>
              {editorialInfo.disclaimerText ||
                "AVISO LEGAL & MÉDICO: O conteúdo destina-se a fins informativos e educacionais. A prática de exercícios de alta intensidade exige avaliação médica prévia e acompanhamento profissional habilitado. © 2026 Montanha Media."}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- 3. SECTION B: CARTA DO EDITOR & MANIFESTO DE ABERTURA ---------------- */}
      <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden pt-1">
        {/* Header of the Letter */}
        <div className="space-y-1 shrink-0">
          <div className="flex items-center gap-1.5 text-[9px] font-mono font-black tracking-widest uppercase" style={{ color: primaryColor }}>
            <Feather className="w-3 h-3" />
            <span>CARTA DO EDITOR // MANIFESTO DE ABERTURA</span>
          </div>

          <h2
            className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-tight ${headlineFontClass}`}
            style={{ color: textColor }}
          >
            {editorialInfo.editorLetterTitle || "A BUSCA INCESSANTE PELA EXCELÊNCIA"}
          </h2>
        </div>

        {/* Middle: Integrated Compact Editor Header + Flowing Multi-Column Text */}
        <div className="flex-1 my-2 overflow-hidden flex flex-col justify-start">
          {/* Compact Editor Profile Banner */}
          <div
            className="flex items-center gap-3 p-2.5 rounded-lg mb-2.5 shrink-0 border"
            style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
          >
            {editorialInfo.editorPhoto && (
              <div
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 shrink-0 shadow-md"
                style={{ borderColor: primaryColor }}
              >
                <img
                  src={editorialInfo.editorPhoto}
                  alt={editorialInfo.editorName}
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className={`font-black text-xs sm:text-sm uppercase tracking-tight truncate ${headlineFontClass}`} style={{ color: textColor }}>
                  {editorialInfo.editorName}
                </h4>
                <span
                  className="font-black font-mono text-[8px] px-1.5 py-0.2 rounded uppercase shrink-0"
                  style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                >
                  {editorialInfo.editorRole || "EDITOR-CHEFE"}
                </span>
              </div>
              <p className="text-[9px] leading-tight truncate mt-0.5" style={{ color: textMutedColor }}>
                Fundador da metodologia e mentor de alta performance.
              </p>
            </div>

            {editorialInfo.editorialNote && (
              <div className="hidden sm:block text-right max-w-xs pl-2 border-l" style={{ borderColor: `${primaryColor}30` }}>
                <p className="text-[8.5px] font-mono font-bold italic leading-tight" style={{ color: primaryColor }}>
                  "{editorialInfo.editorialNote}"
                </p>
              </div>
            )}
          </div>

          {/* Letter Body */}
          {(() => {
            const paragraphs = (editorialInfo.editorLetter || "")
              .split("\n\n")
              .map((p) => p.trim())
              .filter(Boolean);
            const isLong = paragraphs.length >= 4;

            return (
              <div
                className={`columns-1 sm:columns-2 gap-6 text-xs sm:text-[12.5px] leading-relaxed text-left shrink-0 mb-3 ${bodyFontClass}`}
                style={{ color: isLight ? "#1E293B" : "#CBD5E1", columnFill: "balance" }}
              >
                {paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed mb-3 break-inside-avoid">
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          })()}

          {/* Editor Letter Visual Spotlight Banner (ALWAYS fills the remaining space with power and elegance) */}
          {(() => {
            const spotlightImg =
              editorialInfo.editorLetterSpotlightImage ||
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80";
            const spotlightCaption =
              editorialInfo.editorLetterSpotlightCaption ||
              "A consistência nos detalhes invisíveis constrói o corpo e a mente indestrutíveis.";

            return (
              <div
                className="relative w-full rounded-lg overflow-hidden border flex-1 min-h-[160px] sm:min-h-[190px] mb-2 shadow-md group"
                style={{
                  borderColor: `${primaryColor}50`,
                }}
              >
                <img
                  src={spotlightImg}
                  alt="Destaque Carta do Editor"
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex items-end justify-between p-3.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[8px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                    >
                      // MANIFESTO VISUAL
                    </span>
                    <span className="text-[8.5px] font-mono uppercase text-slate-300 hidden sm:inline">
                      {project.title} • EDIÇÃO #{coverConfig.editionNumber || "01"}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono italic text-amber-200/90 hidden sm:inline max-w-md truncate">
                    "{spotlightCaption}"
                  </span>
                </div>
              </div>
            );
          })()}

        {/* Bottom Signature & Sign-off */}
        <div className="pt-2 border-t flex items-center justify-between shrink-0" style={{ borderColor: `${primaryColor}40` }}>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase" style={{ color: primaryColor }}>
              — {editorialInfo.editorName}
            </span>
            <span className="opacity-40 font-mono text-[9px]">•</span>
            <span className="text-[9px] font-mono uppercase" style={{ color: textMutedColor }}>
              {editorialInfo.editorRole}
            </span>
          </div>

          <div
            className="px-2.5 py-0.5 rounded font-mono font-black text-[9px] uppercase tracking-wider border"
            style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: `${primaryColor}50` }}
          >
            FORÇA & HONRA
          </div>
        </div>
      </div>
      </div>

      {/* ---------------- 4. BOTTOM FOOTER & PAGE NUMBERING ---------------- */}
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
