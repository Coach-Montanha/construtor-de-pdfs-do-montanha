import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass, isColorLight } from "../../lib/theme-utils";
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
  const isMidnightFintech =
    coverConfig.coverStyleVariant === "midnight-fintech" || theme.id === "midnight-fintech";

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);

  // Dynamic Text Scale Multiplier (Default: 1.0)
  const scale = (coverConfig.textScale || 100) / 100;

  // Dedicated cover color resolution:
  // On dark photographic covers, ensure masthead and highlighted fonts are light and distinct!
  const coverPrimary =
    theme.coverPrimaryColor ||
    (theme.isLight && !isPeakPerformance ? "#FFFFFF" : theme.primaryColor);

  const coverBadgeBg = theme.coverBadgeBg || coverPrimary;
  const coverBadgeTextColor =
    theme.coverBadgeTextColor ||
    (isColorLight(coverBadgeBg) ? "#000000" : "#FFFFFF");

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
   * VARIANT: MIDNIGHT FINTECH & VIOLET GLOW (DESIGN LANGUAGE)
   * ------------------------------------------------------------- */
  if (isMidnightFintech) {
    return (
      <div
        className={`magazine-page relative w-full h-full bg-[#050a14] text-[#eaeaea] overflow-hidden flex flex-col justify-between select-none ${
          isPrintMode ? "print-page" : "shadow-2xl"
        }`}
        style={{
          aspectRatio: "210 / 297",
          fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
        }}
      >
        {/* Layered Atmospheric Radial Glows (Violet + Cool Blue + Bottom Magenta) */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 65% 55% at 75% 20%, rgba(83, 73, 126, 0.48), transparent 65%),
              radial-gradient(ellipse 55% 45% at 25% 15%, rgba(56, 152, 236, 0.18), transparent 55%),
              radial-gradient(ellipse 75% 35% at 50% 100%, rgba(115, 23, 213, 0.28), transparent 65%)
            `,
          }}
        />

        {/* Background Athlete Image with Dark Void Integration */}
        {coverConfig.backgroundImage && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={
                coverConfig.backgroundImage?.includes("unsplash.com")
                  ? coverConfig.backgroundImage.replace(/w=\d+/, "w=2560").replace(/q=\d+/, "q=95")
                  : coverConfig.backgroundImage
              }
              alt="Capa Atleta Midnight Fintech"
              className="w-full h-full object-cover object-center filter contrast-110 brightness-90"
              loading="eager"
            />
            {/* Dark Ink-Navy overlay gradient for high text legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #050a14 12%, rgba(5, 10, 20, 0.65) 50%, rgba(5, 10, 20, 0.85) 100%)",
                opacity: Math.max(0.65, overlayOpacity),
              }}
            />
          </div>
        )}

        {/* Top Header Bar / Masthead Section */}
        <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center">
          {/* Top Metadata Strip */}
          <div className="w-full flex items-center justify-between border-b border-[#171e2c] pb-2 text-[9px] sm:text-[10px] font-medium text-[#9ea6b6]">
            <div className="flex items-center gap-2">
              {/* Pill Badge with Purple-to-Magenta Gradient + Inset Highlight */}
              <div
                className="px-3 py-1 font-bold text-[8.5px] uppercase text-white flex items-center gap-1.5 shadow-md"
                style={{
                  background: "linear-gradient(90deg, #6958e2 20%, #7317d5)",
                  borderRadius: "999px",
                  boxShadow: "inset 0 -3px 6px rgba(255, 255, 255, 0.35)",
                }}
              >
                <Zap className="w-3 h-3 text-white fill-white" />
                <span>{coverConfig.hexBadgeText || coverConfig.issueBadge || "Edição Oficial"}</span>
              </div>
              <span className="hidden sm:inline text-xs text-[#eaeaea] font-semibold">
                {coverConfig.issueBadge}
              </span>
            </div>
            <span className="text-[#9ea6b6]">{coverConfig.issueDate}</span>
            <span
              className="px-2.5 py-0.5 rounded-full text-[8.5px] font-medium border border-[#171e2c]"
              style={{
                backgroundColor: "rgba(234, 234, 234, 0.04)",
                color: "#eaeaea",
                boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.15)",
              }}
            >
              {coverConfig.priceBadge || "Edição Digital"}
            </span>
          </div>

          {/* Masthead Logo */}
          <div className="w-full text-center mt-3 mb-1">
            <h1
              className="font-bold tracking-tight leading-[0.92] text-center font-headline-creato"
              style={{
                fontSize: `clamp(2.4rem, ${10 * scale}cqw, 4.6rem)`,
                color: "#eaeaea",
                letterSpacing: "-0.025em",
                textShadow: "0 4px 24px rgba(0, 0, 0, 0.9), 0 0 40px rgba(105, 88, 226, 0.3)",
              }}
            >
              {coverConfig.mastheadText || "MONTANHA MAGAZINE"}
            </h1>

            {/* Slogan Bar */}
            <div className="mt-1.5 w-full flex items-center justify-center">
              <div
                className="w-full max-w-xl py-1 px-3 rounded-full flex items-center justify-center gap-2 text-center text-[10px] font-medium text-[#9ea6b6] border border-[#171e2c]"
                style={{
                  backgroundColor: "rgba(234, 234, 234, 0.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-[#6958e2] font-mono text-[9px]">//</span>
                <span>{coverConfig.sloganText || "Infraestrutura de performance atlética e conhecimento sem limites"}</span>
                <span className="text-[#6958e2] font-mono text-[9px]">//</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Glass-Dark Story Cards (Left) & Stat Counter (Right) */}
        <div className="relative z-10 px-4 sm:p-5 md:p-6 flex-1 flex items-center justify-between gap-4">
          {/* Left-Aligned Story Cards with 4% White Wash Surface */}
          <div className="flex flex-col gap-2.5 max-w-[58%] w-full">
            {coverConfig.highlights.slice(0, 3).map((hl) => (
              <div
                key={hl.id}
                className="p-3 border border-[#171e2c] transition-all"
                style={{
                  backgroundColor: "rgba(234, 234, 234, 0.04)",
                  borderRadius: "18px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -2px 5px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className="font-bold text-[8.5px] uppercase tracking-wider"
                    style={{ color: "#6958e2" }}
                  >
                    {hl.tag}
                  </span>
                </div>
                <h3
                  className="font-bold text-[#eaeaea] leading-snug tracking-tight font-headline-creato"
                  style={{
                    fontSize: `${11.5 * scale}pt`,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {hl.title}
                </h3>
                {hl.teaser && (
                  <p
                    className="text-[#9ea6b6] text-[8.5pt] mt-1 leading-relaxed line-clamp-2"
                  >
                    {hl.teaser}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Cinematic Stat Counter with Gradient Text */}
          <div className="hidden sm:flex flex-col items-end text-right pr-2">
            <div
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline-creato"
              style={{
                background: "linear-gradient(90deg, rgb(105, 88, 226) 20%, rgb(255, 255, 255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
              }}
            >
              {coverConfig.numFeature?.number || "#01"}
            </div>
            <div className="text-[9px] font-medium text-[#9ea6b6] uppercase tracking-wider mt-0.5 max-w-[130px]">
              {coverConfig.numFeature?.sub || "Edição de Lançamento"}
            </div>

            {/* Pill Indicator */}
            <div
              className="mt-3 px-3 py-1 rounded-full text-[8px] font-bold text-[#eaeaea] border border-[#171e2c]"
              style={{
                backgroundColor: "rgba(234, 234, 234, 0.04)",
                boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.2)",
              }}
            >
              Tecnologia & Força
            </div>
          </div>
        </div>

        {/* Bottom Section: Hero Main Headline & Footer Metadata */}
        <div className="relative z-10 px-4 sm:p-5 md:p-6 pb-4">
          <div
            className="p-4 border border-[#171e2c] mb-3"
            style={{
              backgroundColor: "rgba(234, 234, 234, 0.04)",
              borderRadius: "18px",
              backdropFilter: "blur(14px)",
              boxShadow: "inset 0 -3px 6px rgba(255, 255, 255, 0.12), 0 12px 32px rgba(0, 0, 0, 0.6)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="px-2.5 py-0.5 rounded-full text-[8.5px] font-bold text-white shadow-xs"
                style={{
                  background: "linear-gradient(90deg, #6958e2 20%, #7317d5)",
                  boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.3)",
                }}
              >
                {coverConfig.categoryTag || "Matéria de Capa"}
              </span>
              <span className="text-[9px] text-[#9ea6b6] font-medium">
                Destaque Editorial Exclusivo
              </span>
            </div>

            <h2
              className="font-bold text-[#eaeaea] leading-[0.94] tracking-tight font-headline-creato"
              style={{
                fontSize: `clamp(1.6rem, ${6.5 * scale}cqw, 3.2rem)`,
                letterSpacing: "-0.025em",
              }}
            >
              {coverConfig.mainHeadline || "O Código da Alta Performance"}
            </h2>

            <p
              className="text-[#9ea6b6] text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl"
            >
              {coverConfig.subHeadline || "Fundamentos de força, biomecânica e desenvolvimento humano para atletas de elite."}
            </p>
          </div>

          {/* Bottom Bar: Barcode and Minimalist Info */}
          <div className="flex items-center justify-between pt-2 border-t border-[#171e2c] text-[8.5px] text-[#9ea6b6]">
            <div className="flex items-center gap-2.5">
              {/* Crisp Barcode */}
              <div className="bg-white px-2 py-0.5 rounded border border-white/20 flex flex-col items-center">
                <div className="h-[10px] w-[64px] bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,#fff_1.5px,#fff_3px,#000_3px,#000_4px,#fff_4px,#fff_6px,#000_6px,#000_8px)]" />
                <span className="font-mono text-[5pt] font-bold text-black leading-none mt-0.5">
                  {coverConfig.barcodeText || "9 772226 502002"}
                </span>
              </div>
              <span className="font-medium text-[#eaeaea]">
                Montanha Magazine • {coverConfig.issueBadge}
              </span>
            </div>

            <div className="font-medium">
              www.montanhamagazine.com.br
            </div>
          </div>
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
      {/* Background Athletic Movement Photo (Ultra High Resolution & Dynamic Contrast) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={
            coverConfig.backgroundImage?.includes("unsplash.com")
              ? coverConfig.backgroundImage.replace(/w=\d+/, "w=2560").replace(/q=\d+/, "q=95")
              : coverConfig.backgroundImage
          }
          alt="Capa da Revista Montanha"
          className="w-full h-full object-cover object-center filter contrast-120 brightness-100"
          style={{ imageRendering: "auto" }}
          loading="eager"
        />
        {/* Atmospheric Gradients com foco no contraste nítido do atleta */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
        <div
          className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/85 pointer-events-none"
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
              style={{ backgroundColor: coverBadgeBg, color: coverBadgeTextColor }}
            >
              <Zap className="w-3 h-3 fill-current" style={{ color: coverBadgeTextColor }} />
              <span>{coverConfig.hexBadgeText || "VOL. 01 // ISSUE 01"}</span>
            </div>
            <span className="hidden sm:inline font-bold" style={{ color: coverPrimary }}>
              {coverConfig.issueBadge}
            </span>
          </div>
          <span className="text-white font-mono">{coverConfig.issueDate}</span>
          <span
            className="border px-2 py-0.5 rounded text-[8.5px] font-mono font-bold"
            style={{ backgroundColor: "rgba(15,23,42,0.9)", borderColor: coverPrimary, color: coverPrimary }}
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
                color: coverPrimary,
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
                borderColor: `${coverPrimary}80`,
                color: coverPrimary,
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
              style={{ borderLeftColor: coverPrimary }}
            >
              <span
                className="font-mono font-black tracking-wider uppercase block"
                style={{
                  fontSize: `${8.5 * scale}pt`,
                  color: coverPrimary,
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
          style={{ borderLeftColor: coverPrimary }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-mono font-black text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-xs"
              style={{ backgroundColor: coverBadgeBg, color: coverBadgeTextColor }}
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
