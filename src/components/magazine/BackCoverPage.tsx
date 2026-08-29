import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
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
  isPrintMode = false,
}) => {
  const { backCoverConfig } = project;

  return (
    <div
      className={`magazine-page relative w-full h-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Graphic & Mood */}
      <div className="absolute inset-0 z-0">
        <img
          src={backCoverConfig.backgroundImage}
          alt="Contracapa"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/85" />
      </div>

      {/* Top Header */}
      <div className="relative z-10 border-b border-white/20 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-black tracking-widest text-sm uppercase text-amber-400">
            {project.coverConfig.mastheadText}
          </span>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
          CONTRACAPA OFICIAL
        </span>
      </div>

      {/* Center Hero Message */}
      <div className="relative z-10 max-w-lg mx-auto text-center my-auto">
        <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          MANUAL DO ALUNO & LEITOR
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-3 drop-shadow-md">
          {backCoverConfig.headline}
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/90 font-semibold mb-4 leading-relaxed">
          {backCoverConfig.subheadline}
        </p>
        <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto italic mb-6">
          "{backCoverConfig.message}"
        </p>

        {/* CTA Button Mockup */}
        <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-md shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all">
          <span>{backCoverConfig.ctaText}</span>
          <Globe className="w-4 h-4" />
        </div>
      </div>

      {/* Footer Info, Social Media & QR Code */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border border-white/15 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social Handles */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
          {backCoverConfig.socialHandles.instagram && (
            <div className="flex items-center gap-1.5 text-amber-400">
              <Instagram className="w-4 h-4" />
              <span>{backCoverConfig.socialHandles.instagram}</span>
            </div>
          )}
          {backCoverConfig.socialHandles.youtube && (
            <div className="flex items-center gap-1.5 text-red-400">
              <Youtube className="w-4 h-4" />
              <span>{backCoverConfig.socialHandles.youtube}</span>
            </div>
          )}
          {backCoverConfig.socialHandles.email && (
            <div className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-4 h-4" />
              <span>{backCoverConfig.socialHandles.email}</span>
            </div>
          )}
        </div>

        {/* Barcode & Copyright */}
        <div className="flex items-center gap-3">
          <div className="text-right text-[9px] text-slate-400">
            <p className="font-bold text-white uppercase">{project.title}</p>
            <p>© 2026 Todos os direitos reservados.</p>
          </div>
          <div className="p-1 bg-white rounded">
            <QrCode className="w-7 h-7 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
