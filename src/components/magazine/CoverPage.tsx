import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { Sparkles, Zap, Crosshair } from "lucide-react";

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
  const isPeakPerformance = coverConfig.coverStyleVariant === "peak-performance";
  const isTactical = coverConfig.coverStyleVariant === "tactical-stencil";

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);

  // Dynamic Text Scale Multiplier (Default: 1.0)
  const scale = (coverConfig.textScale || 100) / 100;

  /* -------------------------------------------------------------
   * VARIANT: PEAK PERFORMANCE / PRO EDITION (High-Key Studio & Angular Blue)
   * ------------------------------------------------------------- */
  if (isPeakPerformance) {
    return (
      <div
        className={`magazine-page relative w-full h-full bg-white text-[#111111] overflow-hidden select-none ${
          isPrintMode ? "print-page" : "shadow-2xl"
        }`}
        style={{
          aspectRatio: "210 / 297",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        {/* Fundo High-Key Studio Lighting */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 30%, #ffffff 0%, #f4f6f8 70%, #e2e8f0 100%)",
          }}
        />

        {/* Imagem do Atleta */}
        {coverConfig.backgroundImage && (
          <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none opacity-85">
            <img
              src={coverConfig.backgroundImage}
              alt="Capa Atleta"
              className="w-full h-full object-cover object-center filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
          </div>
        )}

        {/* Grafismos Angulares Inferiores */}
        <div
          className="absolute bottom-0 left-0 w-full h-[32%] z-2 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #0088cc 0%, #005588 100%)",
            clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[22%] z-3 pointer-events-none"
          style={{
            background: "#111111",
            clipPath: "polygon(0 45%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* Top Header Grid */}
        <div className="absolute top-[2.5%] inset-x-[4%] flex justify-between items-center z-20">
          <div
            className="bg-[#111] text-white font-extrabold px-3 py-1 uppercase shadow-md flex items-center gap-1.5"
            style={{ fontSize: `${9.5 * scale}pt` }}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{coverConfig.issueBadge || "PRO EDITION"}</span>
          </div>
          <div
            className="font-extrabold uppercase text-[#111] tracking-wider"
            style={{ fontSize: `${9.5 * scale}pt` }}
          >
            {coverConfig.issueDate || "SETEMBRO 2026"}
          </div>
        </div>

        {/* Masthead "MONTANHA" */}
        <div className="absolute top-[6%] inset-x-[4%] text-center z-20">
          <h1
            className={`font-black text-[#111111] tracking-[-3px] uppercase leading-[0.82] m-0 ${headlineFontClass}`}
            style={{
              fontSize: `clamp(3.5rem, ${14 * scale}cqw, 6.5rem)`,
              color: theme.primaryColor !== "#FACC15" ? theme.primaryColor : "#111111",
            }}
          >
            {coverConfig.mastheadText || "MONTANHA"}
          </h1>
          <div
            className="font-extrabold uppercase tracking-[4px] text-[#0088cc] mt-1"
            style={{ fontSize: `${11.5 * scale}pt` }}
          >
            {coverConfig.sloganText || "STRENGTH & PERFORMANCE MAGAZINE"}
          </div>
        </div>

        {/* Dynamic Story Highlights Left Cards */}
        <div className="absolute top-[26%] left-[4%] w-[56%] z-20 flex flex-col gap-2">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-black/90 text-white p-2.5 rounded-sm border-l-4 shadow-xl backdrop-blur-sm"
              style={{ borderLeftColor: theme.primaryColor }}
            >
              <span
                className="font-black font-mono tracking-widest uppercase block"
                style={{ fontSize: `${8.5 * scale}pt`, color: theme.primaryColor }}
              >
                {hl.tag}
              </span>
              <p
                className={`font-black uppercase leading-tight mt-0.5 ${headlineFontClass}`}
                style={{ fontSize: `${12 * scale}pt` }}
              >
                {hl.title}
              </p>
              {hl.teaser ? (
                <span
                  className="font-sans italic text-slate-200 block mt-1 leading-snug font-medium"
                  style={{ fontSize: `${8 * scale}pt` }}
                >
                  "{hl.teaser}"
                </span>
              ) : hl.authorCallout ? (
                <span className="text-[8pt] font-mono text-slate-300 block mt-1">
                  POR: {hl.authorCallout.toUpperCase()}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {/* Selo Circular Vermelho (Direita) */}
        <div className="absolute top-[26%] right-[5%] z-20 flex flex-col items-center">
          <div className="w-[88px] h-[88px] sm:w-[105px] sm:h-[105px] rounded-full bg-[#cc0000] text-white flex flex-col justify-center items-center text-center p-2 shadow-2xl border-2 border-white">
            <span className="font-extrabold uppercase tracking-tight text-[7pt] sm:text-[8pt] leading-tight">
              {coverConfig.circleBadge?.topText || "PEAK"}
            </span>
            <span className="font-black text-lg sm:text-2xl leading-none my-0.5">
              {coverConfig.circleBadge?.valueText || "100%"}
            </span>
            <span className="font-bold text-[6.5pt] sm:text-[7.5pt] uppercase leading-tight text-white/90">
              {coverConfig.circleBadge?.subText || "RAW POWER"}
            </span>
          </div>
        </div>

        {/* Feature Numérica Lateral (Direita) */}
        <div className="absolute top-[48%] right-[5%] z-20 text-right">
          <div className="font-black text-4xl sm:text-5xl leading-none text-[#0088cc] drop-shadow-md">
            {coverConfig.numFeature?.number || "12"}
          </div>
          <div
            className="font-black uppercase text-[#111111] leading-tight mt-0.5"
            style={{ fontSize: `${10.5 * scale}pt` }}
          >
            {coverConfig.numFeature?.hook || "REPS TO MAX"}
          </div>
          <div
            className="font-bold uppercase text-slate-600 text-[8pt]"
          >
            {coverConfig.numFeature?.sub || "HYPERTROPHY GUIDE"}
          </div>
        </div>

        {/* Manchete Principal Inferior (Sobre os Grafismos Angulares) */}
        <div className="absolute bottom-[8%] left-[4%] right-[4%] z-20">
          <div
            className="bg-[#cc0000] text-white font-extrabold px-3 py-0.5 uppercase inline-block shadow-md mb-1"
            style={{ fontSize: `${9.5 * scale}pt` }}
          >
            {coverConfig.categoryTag || "SHARPEN UP"}
          </div>
          <h2
            className={`font-black text-white uppercase tracking-[-1px] leading-[0.88] m-0 drop-shadow-md ${headlineFontClass}`}
            style={{ fontSize: `clamp(2rem, ${7.5 * scale}cqw, 3.8rem)` }}
          >
            {coverConfig.mainHeadline || "SHOULDER WORKOUT"}
          </h2>
          <div className="mt-1">
            <span
              className="bg-[#111] text-white font-extrabold px-6 py-1 uppercase inline-block shadow-md"
              style={{ fontSize: `${9 * scale}pt` }}
            >
              {coverConfig.subHeadline || "BACK TO BASICS FOR SERIOUS DELT DEMOLITION"}
            </span>
          </div>
        </div>

        {/* Código de Barras & Metadados */}
        <div className="absolute bottom-[1.5%] left-[4%] bg-white px-2 py-1 border border-[#111] z-20 text-center shadow-sm">
          <div className="h-[13px] w-[84px] bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,#fff_1.5px,#fff_3px,#000_3px,#000_4px,#fff_4px,#fff_6px,#000_6px,#000_8px)]" />
          <span className="font-mono text-[5.5pt] font-bold text-black block mt-0.5">
            {coverConfig.barcodeText || "9 772226 502002"}
          </span>
        </div>
        <div className="absolute bottom-[1.2%] left-[34%] text-[5.5pt] font-bold text-slate-300 z-20 uppercase leading-tight">
          WWW.MONTANHAMAGAZINE.COM.BR • {coverConfig.editionNumber || "ISSUE 01"} | R$ 35,00<br />
          {coverConfig.issueDate || "EDITION 2026"} / SPECIAL LAUNCH
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------
   * DEFAULT VARIANT: MY MAD METHODS / INDUSTRIAL GRIT
   * ------------------------------------------------------------- */
  return (
    <div
      className={`magazine-page relative w-full h-full bg-black text-white overflow-hidden flex flex-col justify-between select-none ${
        isPrintMode ? "print-page" : "shadow-2xl"
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
          className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none"
        />
      </div>

      {/* Decorative Tactical Crosshairs & Grid Lines */}
      {coverConfig.showTechHud && (
        <>
          <div className="absolute top-4 left-4 z-10 opacity-60 text-amber-400 font-mono text-[9px] flex items-center gap-1 pointer-events-none">
            <Crosshair className="w-3.5 h-3.5" />
            <span>SYS.TARGET // 45.22.89</span>
          </div>
          <div className="absolute top-4 right-4 z-10 opacity-60 text-amber-400 font-mono text-[9px] flex items-center gap-1 pointer-events-none">
            <span>GRID-A4 // RAW</span>
          </div>
          <div className="absolute bottom-16 right-4 z-10 opacity-40 text-amber-400 font-mono text-[8px] pointer-events-none">
            LAT: -23.5505 | LON: -46.6333
          </div>
        </>
      )}

      {/* Top Header Bar / Masthead Section */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center">
        {/* Top Metadata Strip */}
        <div className="w-full flex items-center justify-between border-b-2 border-white/20 pb-1.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-slate-200">
          <div className="flex items-center gap-2">
            {/* Hexagon / Tactical Badge */}
            <div
              className="px-2 py-0.5 font-black text-[9px] tracking-tight uppercase rounded-sm flex items-center gap-1 shadow-sm"
              style={{ backgroundColor: theme.primaryColor, color: "#000000" }}
            >
              <Zap className="w-3 h-3 fill-black text-black" />
              <span>{coverConfig.hexBadgeText || "VOL. 01 // ISSUE 01"}</span>
            </div>
            <span className="hidden sm:inline font-bold" style={{ color: theme.primaryColor }}>
              {coverConfig.issueBadge}
            </span>
          </div>
          <span className="text-white font-mono">{coverConfig.issueDate}</span>
          <span
            className="border px-2 py-0.5 rounded text-[8.5px] font-mono font-bold"
            style={{ backgroundColor: "rgba(15,23,42,0.9)", borderColor: theme.primaryColor, color: theme.primaryColor }}
          >
            {coverConfig.priceBadge}
          </span>
        </div>

        {/* Masthead Logo */}
        <div className="w-full text-center mt-2.5 mb-1">
          <div className="relative inline-block w-full">
            <h1
              className={`font-black tracking-tighter uppercase leading-[0.88] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-center ${headlineFontClass}`}
              style={{
                fontSize: `clamp(2.4rem, ${10 * scale}cqw, 4.8rem)`,
                color: theme.primaryColor,
                letterSpacing: "-0.04em",
                textShadow: "0 0 25px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.9)",
              }}
            >
              {coverConfig.mastheadText || "MONTANHA MAGAZINE"}
            </h1>
          </div>

          {/* Subtitle / Slogan Bar */}
          <div className="mt-1 w-full flex items-center justify-center">
            <div
              className="w-full bg-black/90 border-y py-1 px-3 flex items-center justify-between font-mono font-black tracking-[0.2em] uppercase shadow-md"
              style={{
                fontSize: `${9.5 * scale}px`,
                borderColor: `${theme.primaryColor}80`,
                color: theme.primaryColor,
              }}
            >
              <span className="text-white/40 hidden sm:inline">///</span>
              <span>{coverConfig.sloganText || "UNCONVENTIONAL STRENGTH & PERFORMANCE"}</span>
              <span className="text-white/40 hidden sm:inline">///</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Left-aligned Story Callouts & Main Headline */}
      <div className="relative z-10 px-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-end pb-2">
        {/* Left-Aligned Sub-bullets & Story Callouts (High Legibility Box Cards) */}
        <div className="grid grid-cols-1 gap-2 max-w-md mb-3">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-black/90 border-l-4 p-2.5 rounded-sm shadow-xl backdrop-blur-sm transition-all"
              style={{ borderLeftColor: theme.primaryColor }}
            >
              <span
                className="font-mono font-black tracking-wider uppercase block"
                style={{
                  fontSize: `${8.5 * scale}pt`,
                  color: theme.primaryColor,
                }}
              >
                {hl.tag}
              </span>
              <h3
                className={`font-black text-white uppercase leading-tight tracking-tight mt-0.5 drop-shadow ${headlineFontClass}`}
                style={{
                  fontSize: `${12.5 * scale}pt`,
                }}
              >
                {hl.title}
              </h3>
              {hl.teaser ? (
                <span
                  className="font-sans italic block text-slate-200 mt-1 leading-snug font-medium"
                  style={{
                    fontSize: `${8 * scale}pt`,
                  }}
                >
                  "{hl.teaser}"
                </span>
              ) : hl.authorCallout ? (
                <span
                  className="font-mono uppercase block text-slate-300 mt-1"
                  style={{
                    fontSize: `${7.5 * scale}pt`,
                  }}
                >
                  AUTOR: {hl.authorCallout.toUpperCase()} {hl.pageTarget ? `// PÁG. 0${hl.pageTarget}` : ""}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {/* Main Cover Story Headline */}
        <div className="bg-black/90 border-l-4 p-3.5 sm:p-4 rounded-sm shadow-2xl backdrop-blur-md"
          style={{ borderLeftColor: theme.primaryColor }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-mono font-black text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-xs"
              style={{ backgroundColor: theme.primaryColor, color: "#000000" }}
            >
              {coverConfig.categoryTag || "COVER STORY"}
            </span>
            <span className="text-white/80 font-mono text-[9px] tracking-wider uppercase">
              // DOSSIÊ EXCLUSIVO
            </span>
          </div>

          <h2
            className={`font-black text-white uppercase tracking-tight leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] ${headlineFontClass}`}
            style={{
              fontSize: `clamp(1.6rem, ${6.5 * scale}cqw, 3.4rem)`,
            }}
          >
            {coverConfig.mainHeadline}
          </h2>

          <p
            className={`text-slate-200 font-semibold leading-snug mt-1.5 drop-shadow max-w-xl ${bodyFontClass}`}
            style={{
              fontSize: `${10.5 * scale}pt`,
            }}
          >
            {coverConfig.subHeadline}
          </p>
        </div>
      </div>

      {/* Industrial Warning Hazard Stripe */}
      {coverConfig.showHazardStripe && (
        <div className="relative z-10 w-full h-2.5 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#FACC15_10px,#FACC15_20px)] border-y border-black" />
      )}

      {/* Bottom Footer Bar: Barcode, Footer Teasers & Specs */}
      <div className="relative z-10 bg-black/95 px-4 sm:px-6 py-2.5 flex items-center justify-between border-t border-white/20 text-xs">
        {/* Barcode Mockup */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-sm border border-slate-700 shadow-sm hidden sm:block">
            <div className="h-6 w-28 bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px,#000_4px,#000_5px,#fff_5px,#fff_8px)]" />
            <span className="font-mono text-[7px] font-bold text-black block text-center leading-none mt-0.5">
              {coverConfig.barcodeText}
            </span>
          </div>
          <div className="text-[9px] font-mono text-slate-300 leading-tight">
            <span className="text-white font-bold block">
              {coverConfig.footerPublisherText || `${project.title} EDITORIAL CORP.`}
            </span>
            <span>
              {coverConfig.footerSubText || "DIAGRAMAÇÃO A4 DIGITAL // PRINT-READY"}
            </span>
          </div>
        </div>

        {/* Footer Teaser Keywords */}
        <div className="flex items-center gap-2 sm:gap-3 text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
          {(coverConfig.footerHighlights && coverConfig.footerHighlights.length > 0
            ? coverConfig.footerHighlights
            : ["NUTRIÇÃO DE PRECISÃO", "SUPLEMENTAÇÃO ESTRATÉGICA", "LONGEVIDADE ATIVA"]
          ).slice(0, 4).map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="text-amber-400 font-black">/</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
