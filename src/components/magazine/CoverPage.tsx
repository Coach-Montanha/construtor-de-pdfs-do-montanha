import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Sparkles, QrCode } from "lucide-react";

interface CoverPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  project,
  theme,
  isPrintMode = false,
}) => {
  const { coverConfig } = project;
  const overlayOpacity = coverConfig.backgroundOverlayOpacity / 100;

  return (
    <div
      className={`magazine-page relative w-full h-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Image & Editorial Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={coverConfig.backgroundImage}
          alt="Capa da Revista"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"
          style={{ opacity: overlayOpacity }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"
          style={{ opacity: overlayOpacity * 0.7 }}
        />
      </div>

      {/* Top Header Bar / Masthead Area */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col items-center">
        {/* Issue Top Badge & Date Line */}
        <div className="w-full flex items-center justify-between border-b border-white/30 pb-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-slate-200">
          <span className="flex items-center gap-1.5 text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {coverConfig.issueBadge}
          </span>
          <span className="text-white/80">{coverConfig.issueDate}</span>
          <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white border border-white/30">
            {coverConfig.priceBadge}
          </span>
        </div>

        {/* Masthead Logo / Main Magazine Name */}
        <div className="w-full text-center mt-3 mb-1">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{
              color: theme.primaryColor,
              letterSpacing: "-0.05em",
              textShadow: "0 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            {coverConfig.mastheadText}
          </h1>
          <p className="text-[10px] sm:text-xs tracking-[0.3em] font-medium text-white/90 uppercase mt-1 border-t border-b border-white/20 py-1">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Middle Magazine Teasers & Main Cover Story */}
      <div className="relative z-10 px-6 md:px-8 flex-1 flex flex-col justify-end pb-4">
        {/* Side Story Callouts */}
        <div className="grid grid-cols-1 gap-2.5 max-w-sm mb-4">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-black/60 backdrop-blur-md border-l-4 p-2.5 rounded-r-md transition-all hover:bg-black/80"
              style={{ borderColor: theme.primaryColor }}
            >
              <div className="flex items-center justify-between text-[9px] font-bold tracking-wider uppercase text-amber-400 mb-0.5">
                <span>{hl.tag}</span>
                {hl.pageTarget && (
                  <span className="text-white/60 text-[8px]">PÁG {hl.pageTarget}</span>
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white leading-tight drop-shadow">
                {hl.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Monumental Main Headline */}
        <div className="border-t-2 pt-3 border-amber-400/80">
          <div className="inline-block bg-amber-500 text-black font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm mb-1.5">
            {coverConfig.categoryTag}
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            style={{ color: "#FFFFFF" }}
          >
            {coverConfig.mainHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug mt-1.5 max-w-xl drop-shadow">
            {coverConfig.subHeadline}
          </p>
        </div>
      </div>

      {/* Bottom Footer Bar & Barcode */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md border-t border-white/20 px-6 py-3 flex items-center justify-between">
        {/* Footer Ticker Tags */}
        <div className="flex flex-wrap gap-2 text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-wider">
          {coverConfig.footerHighlights.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < coverConfig.footerHighlights.length - 1 && (
                <span className="text-amber-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Barcode Mockup */}
        <div className="hidden sm:flex items-center gap-2 bg-white text-black px-2 py-1 rounded text-right">
          <div className="flex flex-col text-[8px] font-mono leading-none tracking-tighter">
            <span className="font-bold">{coverConfig.barcodeText}</span>
            <div className="h-4 w-24 bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_2px,#000_2px,#000_4px,#fff_4px,#fff_5px)] mt-0.5" />
          </div>
          <QrCode className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
};
