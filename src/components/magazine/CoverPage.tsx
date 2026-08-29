import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Sparkles, QrCode, Shield, Zap, Crosshair, ChevronRight } from "lucide-react";

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
  const isMadMethods = coverConfig.coverStyleVariant === "mad-methods" || !coverConfig.coverStyleVariant;
  const isTactical = coverConfig.coverStyleVariant === "tactical-stencil";

  return (
    <div
      className={`magazine-page relative w-full h-full bg-black text-white overflow-hidden flex flex-col justify-between select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Athletic Movement Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={coverConfig.backgroundImage}
          alt="Capa da Revista Montanha"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-95"
        />
        {/* Gritty Vignette & Atmospheric Gradients */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"
          style={{ opacity: overlayOpacity }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"
          style={{ opacity: overlayOpacity * 0.8 }}
        />
        {/* Subtle Industrial Grid Texture Overlay */}
        {coverConfig.showTechHud && (
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
        )}
      </div>

      {/* Technical HUD Corner Crosshairs */}
      {coverConfig.showTechHud && (
        <>
          <div className="absolute top-3 left-3 z-20 text-[8px] font-mono text-amber-400/70 flex items-center gap-1 tracking-tighter">
            <Crosshair className="w-3 h-3 text-amber-400" />
            <span>[SYS.SPEC // {project.editionNumber || "01"}]</span>
          </div>
          <div className="absolute top-3 right-3 z-20 text-[8px] font-mono text-amber-400/70 tracking-widest">
            + + + RAW IRON + + +
          </div>
        </>
      )}

      {/* Top Header Bar / Masthead Section */}
      <div className="relative z-10 p-5 sm:p-7 md:p-8 flex flex-col items-center">
        {/* Top Metadata Strip */}
        <div className="w-full flex items-center justify-between border-b-2 border-white/20 pb-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-slate-200">
          <div className="flex items-center gap-2">
            {/* Hexagon / Tactical Badge */}
            <div className="bg-amber-400 text-black px-2 py-0.5 font-black text-[9px] sm:text-[10px] tracking-tight uppercase rounded-sm flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 fill-black text-black" />
              <span>{coverConfig.hexBadgeText || "VOL. 01 // ISSUE 01"}</span>
            </div>
            <span className="hidden sm:inline text-amber-400/90 font-bold">
              {coverConfig.issueBadge}
            </span>
          </div>
          <span className="text-white font-mono">{coverConfig.issueDate}</span>
          <span className="bg-slate-900/90 border border-slate-700 text-amber-400 px-2 py-0.5 rounded text-[9px] font-mono font-bold">
            {coverConfig.priceBadge}
          </span>
        </div>

        {/* Masthead Logo: "MONTANHA MAGAZINE" */}
        <div className="w-full text-center mt-3 mb-1">
          <div className="relative inline-block w-full">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
              style={{
                color: theme.primaryColor,
                letterSpacing: "-0.04em",
                fontFamily: isTactical
                  ? "Impact, 'Arial Black', sans-serif"
                  : "system-ui, -apple-system, sans-serif",
                textShadow: "0 0 25px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.9)",
              }}
            >
              {coverConfig.mastheadText || "MONTANHA MAGAZINE"}
            </h1>
          </div>

          {/* Subtitle / Slogan Bar */}
          <div className="mt-1.5 w-full flex items-center justify-center">
            <div className="w-full bg-black/90 border-y border-amber-400/60 py-1 px-3 flex items-center justify-between text-[9px] sm:text-[11px] font-mono font-black tracking-[0.25em] text-amber-300 uppercase shadow-md">
              <span className="text-white/40 hidden sm:inline">///</span>
              <span>{coverConfig.sloganText || "UNCONVENTIONAL STRENGTH & PERFORMANCE"}</span>
              <span className="text-white/40 hidden sm:inline">///</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Left-aligned Story Callouts & Main Headline */}
      <div className="relative z-10 px-5 sm:px-7 md:px-8 flex-1 flex flex-col justify-end pb-3">
        {/* Left-Aligned Sub-bullets & Story Callouts (Mad Methods Style) */}
        <div className="grid grid-cols-1 gap-2 max-w-md mb-3">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-black/75 backdrop-blur-md border-l-4 p-2.5 rounded-r transition-all border-amber-400 hover:bg-black/90 shadow-lg"
              style={{ borderColor: theme.primaryColor }}
            >
              <div className="flex items-center justify-between text-[9px] font-mono font-black tracking-wider uppercase text-amber-400 mb-0.5">
                <span>{hl.tag}</span>
                {hl.pageTarget && (
                  <span className="text-white/80 font-mono text-[8px] bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700">
                    PÁG {hl.pageTarget}
                  </span>
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight drop-shadow tracking-tight">
                {hl.title}
              </h3>
              {hl.authorCallout && (
                <p className="text-[9px] text-amber-200/80 font-mono font-semibold uppercase mt-0.5">
                  ► {hl.authorCallout}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Extra-Bold Main Story Headline (Stacked tightly in ALL CAPS) */}
        <div className="border-t-2 pt-2.5 border-amber-400 bg-black/60 backdrop-blur-sm p-3 rounded-t-sm shadow-xl">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] sm:text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-xs">
              {coverConfig.categoryTag || "COVER STORY"}
            </span>
            {coverConfig.authorCallout && (
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 uppercase">
                {coverConfig.authorCallout}
              </span>
            )}
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tighter uppercase leading-[0.95] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)",
            }}
          >
            {coverConfig.mainHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-snug mt-1.5 max-w-xl drop-shadow">
            {coverConfig.subHeadline}
          </p>
        </div>
      </div>

      {/* Bottom Hazard Stripe (Optional) & Footer Bar */}
      <div className="relative z-10 flex flex-col">
        {coverConfig.showHazardStripe && (
          <div className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_10px,#000_10px,#000_20px)] shadow-md" />
        )}

        {/* Footer Bar & Barcode */}
        <div className="bg-black/90 backdrop-blur-md border-t border-white/20 px-5 sm:px-7 py-2.5 flex items-center justify-between">
          {/* Footer Ticker Tags */}
          <div className="flex flex-wrap gap-2 text-[8px] sm:text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider">
            {coverConfig.footerHighlights.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-amber-400 transition-colors">{item}</span>
                {idx < coverConfig.footerHighlights.length - 1 && (
                  <span className="text-amber-400 font-black">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Barcode & Tech Specs Block */}
          <div className="hidden sm:flex items-center gap-2 bg-white text-black px-2.5 py-1 rounded-sm text-right shadow-md">
            <div className="flex flex-col text-[7px] font-mono leading-none tracking-tighter">
              <span className="font-black">{coverConfig.barcodeText}</span>
              <div className="h-3.5 w-24 bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_2px,#000_2px,#000_4px,#fff_4px,#fff_5px)] mt-0.5" />
            </div>
            <QrCode className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
