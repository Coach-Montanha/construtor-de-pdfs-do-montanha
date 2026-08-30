import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { Globe, Instagram, Youtube, Mail, QrCode, Sparkles } from "lucide-react";

interface BackCoverPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber: number;
  isPrintMode?: boolean;
}

export const BackCoverPage: React.FC<BackCoverPageProps> = ({
  project,
  theme,
  pageNumber,
  isPrintMode = false,
}) => {
  const { backCoverConfig } = project;

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
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Graphic & Mood */}
      {backCoverConfig.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backCoverConfig.backgroundImage}
            alt="Contracapa"
            className="w-full h-full object-cover object-center filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/85" />
        </div>
      )}

      {/* Top Header */}
      <div
        className="relative z-10 border-b pb-3 flex items-center justify-between"
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
      <div className="relative z-10 max-w-lg mx-auto text-center my-auto">
        <div
          className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 border"
          style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: `${primaryColor}50` }}
        >
          MANUAL DO ALUNO & LEITOR
        </div>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-3 drop-shadow-md ${headlineFontClass}`}
          style={{ color: "#FFFFFF" }}
        >
          {backCoverConfig.headline}
        </h2>
        <p
          className={`text-xs sm:text-sm font-semibold mb-4 leading-relaxed ${bodyFontClass}`}
          style={{ color: primaryColor }}
        >
          {backCoverConfig.subheadline}
        </p>
        <p className={`text-xs leading-relaxed max-w-md mx-auto italic mb-6 ${bodyFontClass}`} style={{ color: "#CBD5E1" }}>
          "{backCoverConfig.message}"
        </p>

        {/* CTA Button */}
        <div
          className="inline-flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-md shadow-lg border cursor-pointer"
          style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000", borderColor: "#000000" }}
        >
          <span>{backCoverConfig.ctaText}</span>
          <Globe className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Footer & Social Bar */}
      <div
        className="relative z-10 border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ borderColor: `${primaryColor}40` }}
      >
        <div className="flex items-center gap-4 text-xs font-mono">
          {backCoverConfig.socialHandles?.instagram && (
            <span className="flex items-center gap-1 font-bold" style={{ color: primaryColor }}>
              <Instagram className="w-3.5 h-3.5" />
              {backCoverConfig.socialHandles.instagram}
            </span>
          )}
          {backCoverConfig.socialHandles?.youtube && (
            <span className="flex items-center gap-1 font-bold" style={{ color: primaryColor }}>
              <Youtube className="w-3.5 h-3.5" />
              {backCoverConfig.socialHandles.youtube}
            </span>
          )}
          {backCoverConfig.socialHandles?.email && (
            <span className="flex items-center gap-1 font-bold hidden md:inline-flex" style={{ color: primaryColor }}>
              <Mail className="w-3.5 h-3.5" />
              {backCoverConfig.socialHandles.email}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right text-[10px] font-mono leading-tight" style={{ color: textMutedColor }}>
            <p className="font-bold uppercase" style={{ color: primaryColor }}>{project.title} PUBLISHING</p>
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          </div>
          <div className="bg-white p-1 rounded-sm border border-black shadow-sm">
            <QrCode className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
