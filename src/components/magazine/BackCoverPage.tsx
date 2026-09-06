import React from "react";
import { MagazineLayoutMode, MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass, isColorLight } from "../../lib/theme-utils";
import { formatPageNumber } from "../../lib/magazine-utils";
import { Globe, Instagram, Youtube, Mail, QrCode, Sparkles } from "lucide-react";

interface BackCoverPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber: number;
  isPrintMode?: boolean;
  layoutMode?: MagazineLayoutMode;
}

export const BackCoverPage: React.FC<BackCoverPageProps> = ({
  project,
  theme,
  pageNumber,
  isPrintMode = false,
  layoutMode = "print",
}) => {
  const { backCoverConfig } = project;
  const effectiveLayoutMode = layoutMode || project.layoutMode || "print";
  const isMobile = effectiveLayoutMode === "mobile";

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
  const isLight = Boolean(theme.isLight);

  const primaryColor = theme.primaryColor;
  const accentColor = theme.accentColor;
  const textColor = theme.textColor;
  const bgColor = isLight ? theme.bgLight : theme.bgDark;
  const textMutedColor = isLight ? "#475569" : "#94A3B8";

  return (
    <div
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none break-inside-avoid ${
        isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: isMobile ? "9 / 16" : "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
        breakInside: "avoid",
        pageBreakInside: "avoid",
      }}
    >
      {/* Background Graphic & Mood */}
      {backCoverConfig.backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={backCoverConfig.backgroundImage}
            alt="Contracapa"
            className="w-full h-full object-cover object-center filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/85" />
        </div>
      ) : theme.id === "midnight-fintech" ? (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 65% 55% at 50% 30%, rgba(83, 73, 126, 0.35), transparent 60%),
              radial-gradient(ellipse 70% 35% at 50% 100%, rgba(115, 23, 213, 0.22), transparent 65%)
            `,
          }}
        />
      ) : null}

      {/* Top Header */}
      <div
        className="relative z-10 border-b pb-2.5 flex items-center justify-between shrink-0"
        style={{ borderColor: `${primaryColor}40` }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
          <span className={`font-black tracking-widest text-sm uppercase ${headlineFontClass}`} style={{ color: primaryColor }}>
            {project.coverConfig.mastheadText}
          </span>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase font-mono" style={{ color: textMutedColor }}>
          CONTRACAPA OFICIAL
        </span>
      </div>

      {/* Center Hero Message */}
      <div className={`relative z-10 ${isMobile ? "w-full" : "max-w-lg"} mx-auto text-center my-auto py-2`}>
        <div
          className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2.5 border"
          style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: `${primaryColor}50` }}
        >
          MANUAL DO ALUNO & LEITOR
        </div>
        <h2
          className={`${isMobile ? "text-2xl sm:text-3xl" : "text-2xl sm:text-3xl md:text-4xl"} font-black uppercase tracking-tight leading-tight mb-2.5 drop-shadow-md ${headlineFontClass}`}
          style={{ color: backCoverConfig.backgroundImage ? "#FFFFFF" : textColor }}
        >
          {backCoverConfig.headline}
        </h2>
        <p
          className={`${isMobile ? "text-xs sm:text-sm" : "text-xs sm:text-sm"} font-semibold mb-3 leading-relaxed ${bodyFontClass}`}
          style={{ color: primaryColor }}
        >
          {backCoverConfig.subheadline}
        </p>
        <p className={`text-xs leading-relaxed ${isMobile ? "w-full" : "max-w-md"} mx-auto italic mb-4 ${bodyFontClass}`} style={{ color: backCoverConfig.backgroundImage ? "#CBD5E1" : textMutedColor }}>
          "{backCoverConfig.message}"
        </p>

        {/* CTA Button (Largura Total no Modo Mobile) */}
        <div
          className={`${isMobile ? "w-full" : "inline-flex"} flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-xl border cursor-pointer transition-transform hover:scale-[1.02]`}
          style={{ backgroundColor: primaryColor, color: isLight ? (isColorLight(primaryColor) ? "#000000" : "#FFFFFF") : "#000000", borderColor: "#000000" }}
        >
          <span>{backCoverConfig.ctaText}</span>
          <Globe className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Footer & Social Bar */}
      {isMobile ? (
        <div
          className="relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0"
          style={{ borderColor: `${primaryColor}30`, color: textMutedColor }}
        >
          <span>{project.title}</span>
          <span>pág {formatPageNumber(pageNumber)}</span>
        </div>
      ) : (
        <div
          className="relative z-10 border-t pt-2.5 flex flex-row items-center justify-between gap-3 text-xs shrink-0"
          style={{ borderColor: `${primaryColor}40` }}
        >
          <div className="flex items-center gap-4 text-xs font-mono">
            {backCoverConfig.socialHandles?.instagram && (
              <span className="flex items-center gap-1 font-bold text-[11px]" style={{ color: primaryColor }}>
                <Instagram className="w-3.5 h-3.5" />
                {backCoverConfig.socialHandles.instagram}
              </span>
            )}
            {backCoverConfig.socialHandles?.youtube && (
              <span className="flex items-center gap-1 font-bold text-[11px]" style={{ color: primaryColor }}>
                <Youtube className="w-3.5 h-3.5" />
                {backCoverConfig.socialHandles.youtube}
              </span>
            )}
            {backCoverConfig.socialHandles?.email && (
              <span className="flex items-center gap-1 font-bold text-[11px] hidden md:inline-flex" style={{ color: primaryColor }}>
                <Mail className="w-3.5 h-3.5" />
                {backCoverConfig.socialHandles.email}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right text-[9px] font-mono leading-tight" style={{ color: textMutedColor }}>
              <p className="font-bold uppercase" style={{ color: primaryColor }}>{project.title} PUBLISHING</p>
              <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
            </div>
            <div className="bg-white p-1 rounded-sm border border-black shadow-sm">
              <QrCode className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
