import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { Users, Instagram, Building, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

interface ContributorsPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const ContributorsPage: React.FC<ContributorsPageProps> = ({
  project,
  theme,
  pageNumber = 3,
  isPrintMode = false,
}) => {
  const { editorialInfo, coverConfig } = project;
  const contributors = editorialInfo.contributors || [];

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
  const isLight = Boolean(theme.isLight);

  const primaryColor = theme.primaryColor;
  const accentColor = theme.accentColor;
  const textColor = theme.textColor;
  const bgColor = isLight ? theme.bgLight : theme.bgDark;
  const textMutedColor = isLight ? "#475569" : "#94A3B8";
  const cardBg = theme.cardBg;

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
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header Block: Minimalist Bold Header */}
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
              EDITORIAL DOSSIER
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase" style={{ color: textMutedColor }}>
              {project.volume} // {coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"}
            </span>
          </div>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none ${headlineFontClass}`}
            style={{ color: textColor }}
          >
            CONTRIBUTORS <span className="font-mono text-2xl sm:text-3xl" style={{ color: primaryColor }}>// COLABORADORES</span>
          </h1>
        </div>

        <div className="text-right hidden sm:block font-mono text-[10px]" style={{ color: textMutedColor }}>
          <p className="font-bold" style={{ color: primaryColor }}>ESPECIALISTAS & AUTORES</p>
          <p className="tracking-widest">UNCONVENTIONAL KNOWLEDGE</p>
        </div>
      </div>

      {/* Main Grid: Asymmetric Card System with Graphic Accents */}
      <div className="relative z-10 my-4 flex-1 overflow-hidden flex flex-col justify-between">
        <div className="space-y-3.5">
          {contributors.map((c, idx) => (
            <div
              key={c.id}
              className="p-3.5 rounded-lg border-2 flex items-start gap-4 transition-all shadow-md"
              style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
            >
              {/* Contributor Photo */}
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 shrink-0 shadow-md"
                style={{ borderColor: primaryColor }}
              >
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>

              {/* Contributor Info */}
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-black text-sm sm:text-base uppercase tracking-tight truncate ${headlineFontClass}`} style={{ color: textColor }}>
                      {c.name}
                    </h3>
                    <span
                      className="font-mono font-black text-[8px] px-1.5 py-0.2 rounded uppercase border"
                      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: `${primaryColor}60` }}
                    >
                      COLABORADOR #{idx + 1}
                    </span>
                  </div>

                  {c.handle && (
                    <span className="text-[9px] font-mono flex items-center gap-1 font-bold" style={{ color: primaryColor }}>
                      <Instagram className="w-3 h-3" />
                      {c.handle}
                    </span>
                  )}
                </div>

                <p className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: primaryColor }}>
                  {c.title}
                </p>

                <p className={`text-[11px] leading-relaxed line-clamp-2 ${bodyFontClass}`} style={{ color: isLight ? "#334155" : "#CBD5E1" }}>
                  {c.bio}
                </p>

                {c.facility && (
                  <div className="flex items-center gap-1 text-[8.5px] font-mono pt-1" style={{ color: textMutedColor }}>
                    <Building className="w-3 h-3" style={{ color: primaryColor }} />
                    <span className="uppercase">{c.facility}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="p-2.5 rounded-lg border flex items-center justify-between text-[10px] font-mono"
          style={{ backgroundColor: cardBg, borderColor: `${primaryColor}30`, color: textMutedColor }}
        >
          <span>QUER COLABORAR NA PRÓXIMA EDIÇÃO?</span>
          <span className="font-bold" style={{ color: primaryColor }}>EDITORIAL@COACHMONTANHA.COM.BR</span>
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
