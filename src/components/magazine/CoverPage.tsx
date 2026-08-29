import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Sparkles, QrCode, Shield, Zap, Crosshair } from "lucide-react";

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
          className="absolute bottom-0 left-0 w-full h-[25%] z-2"
          style={{
            background: "linear-gradient(135deg, #0088cc 0%, #005588 100%)",
            clipPath: "polygon(0 40%, 100% 15%, 100% 100%, 0 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[14%] z-3"
          style={{
            background: "#111111",
            clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Cabeçalho / Masthead */}
        <div className="absolute top-[3%] left-[5%] right-[5%] z-10 flex items-start justify-between">
          <h1
            className="font-black italic tracking-[-3px] text-[#0b0f14] lowercase leading-[0.85]"
            style={{
              fontSize: `clamp(2.8rem, ${11 * scale}cqw, 5.5rem)`,
              textShadow: "0 2px 10px rgba(255,255,255,0.8)",
            }}
          >
            {coverConfig.mastheadText ? coverConfig.mastheadText.toLowerCase() : "montanha"}
          </h1>
          <div className="pt-1">
            <span
              className="bg-[#111111] text-white px-2 py-1.5 font-black uppercase tracking-widest inline-block shadow-md"
              style={{
                fontSize: `${8 * scale}pt`,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {coverConfig.issueBadge || "PRO EDITION"}
            </span>
          </div>
        </div>

        {/* Chamadas da Esquerda */}
        <div className="absolute top-[17%] left-[5%] w-[42%] z-10 space-y-1">
          <div className="leading-none">
            <span
              className="font-black text-[#111] block"
              style={{ fontSize: `${11 * scale}pt` }}
            >
              THE
            </span>
            <span
              className="font-black text-[#e51d24] leading-[0.85] tracking-[-1.5px] uppercase block"
              style={{ fontSize: `clamp(1.8rem, ${6 * scale}cqw, 3.2rem)` }}
            >
              PEAK
            </span>
            <span
              className="font-black text-[#111] leading-[0.95] uppercase block"
              style={{ fontSize: `${12 * scale}pt` }}
            >
              PERFORMANCE ISSUE
            </span>
          </div>

          <div className="mt-2 border-l-[4px] border-[#e51d24] pl-2.5 space-y-1">
            {coverConfig.highlights && coverConfig.highlights.length > 0 ? (
              coverConfig.highlights.slice(0, 3).map((hl) => (
                <div
                  key={hl.id}
                  className="font-black uppercase text-[#1a1a1a] leading-tight flex items-center gap-1.5"
                  style={{ fontSize: `${9 * scale}pt` }}
                >
                  <span className="text-[#e51d24]">■</span>
                  <span>{hl.title}</span>
                </div>
              ))
            ) : (
              <>
                <div className="font-extrabold uppercase text-[#1a1a1a] leading-tight" style={{ fontSize: `${9 * scale}pt` }}>
                  ■ RECOVER FASTER
                </div>
                <div className="font-extrabold uppercase text-[#1a1a1a] leading-tight" style={{ fontSize: `${9 * scale}pt` }}>
                  ■ STAY AT YOUR PEAK
                </div>
                <div className="font-extrabold uppercase text-[#1a1a1a] leading-tight" style={{ fontSize: `${9 * scale}pt` }}>
                  ■ SQUAT BETTER
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bloco Meio-Esquerda: Research Box */}
        <div className="absolute top-[40%] left-[5%] z-10">
          <span
            className="bg-[#111] text-white font-black px-2 py-1 uppercase inline-block shadow-sm"
            style={{ fontSize: `${8.5 * scale}pt` }}
          >
            RESEARCH
          </span>
          <span
            className="bg-[#0088cc] text-white font-bold px-2 py-1 block mt-[1px] shadow-sm"
            style={{ fontSize: `${8 * scale}pt` }}
          >
            The truth about Taurine
          </span>
        </div>

        {/* Selo Promocional Circular */}
        <div className="absolute top-[56%] left-[4%] w-[88px] h-[88px] sm:w-[98px] sm:h-[98px] rounded-full bg-[#e51d24] border-[8px] border-[#111111] z-10 flex flex-col items-center justify-center text-center text-white shadow-xl">
          <span className="font-black uppercase leading-none" style={{ fontSize: `${8 * scale}pt` }}>
            {coverConfig.circleBadge?.topText || "SAVE"}
          </span>
          <span className="font-black leading-none my-0.5" style={{ fontSize: `${13.5 * scale}pt` }}>
            {coverConfig.circleBadge?.valueText || "R$100"}
          </span>
          <span className="font-extrabold uppercase leading-tight" style={{ fontSize: `${5.5 * scale}pt` }}>
            {coverConfig.circleBadge?.subText || "SUPPLEMENT\nDISCOUNT\nVOUCHERS"}
          </span>
        </div>

        {/* Chamadas da Direita: Top */}
        <div className="absolute top-[17%] right-[5%] w-[40%] text-right z-10">
          <h3
            className="font-black text-[#111] uppercase leading-tight m-0"
            style={{ fontSize: `${12.5 * scale}pt` }}
          >
            BUGGING OUT
          </h3>
          <p
            className="font-bold text-[#222] uppercase leading-tight mt-0.5"
            style={{ fontSize: `${8 * scale}pt` }}
          >
            IS INSECT PROTEIN THE<br />NEXT BIG TREND?
          </p>
        </div>

        {/* Chamadas da Direita: Food Prep Box */}
        <div className="absolute top-[26%] right-[5%] z-10 text-right">
          <span
            className="bg-[#111] text-white font-black px-2 py-1 uppercase inline-block shadow-sm"
            style={{ fontSize: `${8.5 * scale}pt` }}
          >
            FOOD PREP
          </span>
          <span
            className="bg-[#0088cc] text-white font-bold px-2 py-1 block mt-[1px] shadow-sm"
            style={{ fontSize: `${8 * scale}pt` }}
          >
            Sear tuna like a top chef
          </span>
        </div>

        {/* Chamadas da Direita: Number Hook */}
        <div className="absolute top-[40%] right-[5%] w-[44%] text-right z-10 flex items-center justify-end gap-2">
          <div className="text-right">
            <span
              className="font-black text-[#e51d24] uppercase block leading-tight"
              style={{ fontSize: `${10.5 * scale}pt` }}
            >
              WAYS TO BOOST YOUR INCOME
            </span>
            <span
              className="font-extrabold text-[#111] uppercase block mt-0.5"
              style={{ fontSize: `${7.5 * scale}pt` }}
            >
              EARN MORE AS A PERSONAL TRAINER
            </span>
          </div>
          <span
            className="font-black text-[#e51d24] leading-[0.75]"
            style={{ fontSize: `${3.4 * scale}rem` }}
          >
            5
          </span>
        </div>

        {/* Destaque Principal Inferior */}
        <div className="absolute bottom-[5%] inset-x-0 text-center z-20">
          <div
            className="bg-[#111] text-white font-black px-4 py-1 uppercase inline-block shadow-md"
            style={{ fontSize: `${9.5 * scale}pt` }}
          >
            {coverConfig.categoryTag || "SHARPEN UP"}
          </div>
          <h2
            className="font-black text-white uppercase tracking-[-1px] leading-[0.88] m-0 drop-shadow-md"
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
      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center">
        {/* Top Metadata Strip */}
        <div className="w-full flex items-center justify-between border-b-2 border-white/20 pb-1.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-slate-200">
          <div className="flex items-center gap-2">
            {/* Hexagon / Tactical Badge */}
            <div className="bg-amber-400 text-black px-2 py-0.5 font-black text-[9px] tracking-tight uppercase rounded-sm flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 fill-black text-black" />
              <span>{coverConfig.hexBadgeText || "VOL. 01 // ISSUE 01"}</span>
            </div>
            <span className="hidden sm:inline text-amber-400/90 font-bold">
              {coverConfig.issueBadge}
            </span>
          </div>
          <span className="text-white font-mono">{coverConfig.issueDate}</span>
          <span className="bg-slate-900/90 border border-slate-700 text-amber-400 px-2 py-0.5 rounded text-[8.5px] font-mono font-bold">
            {coverConfig.priceBadge}
          </span>
        </div>

        {/* Masthead Logo: "MONTANHA" */}
        <div className="w-full text-center mt-2.5 mb-1">
          <div className="relative inline-block w-full">
            <h1
              className="font-black tracking-tighter uppercase leading-[0.88] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-center"
              style={{
                fontSize: `clamp(2.4rem, ${10 * scale}cqw, 4.8rem)`,
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
          <div className="mt-1 w-full flex items-center justify-center">
            <div className="w-full bg-black/90 border-y border-amber-400/60 py-1 px-3 flex items-center justify-between font-mono font-black tracking-[0.2em] text-amber-300 uppercase shadow-md"
              style={{ fontSize: `${9.5 * scale}px` }}
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
              className="bg-black/85 backdrop-blur-md border-l-[4px] p-2.5 rounded-r transition-all border-amber-400 shadow-xl"
              style={{ borderColor: theme.primaryColor }}
            >
              <div className="flex items-center justify-between font-mono font-black tracking-wider uppercase text-amber-400 mb-0.5"
                style={{ fontSize: `${9 * scale}px` }}
              >
                <span>{hl.tag}</span>
                {hl.pageTarget && (
                  <span className="text-white font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 font-bold"
                    style={{ fontSize: `${8 * scale}px` }}
                  >
                    PÁG {hl.pageTarget}
                  </span>
                )}
              </div>
              <h3
                className="font-black text-white leading-snug drop-shadow tracking-tight uppercase"
                style={{ fontSize: `clamp(0.85rem, ${2.2 * scale}cqw, 1.25rem)` }}
              >
                {hl.title}
              </h3>
              {hl.authorCallout && (
                <p
                  className="text-amber-200/90 font-mono font-bold uppercase mt-0.5"
                  style={{ fontSize: `${9 * scale}px` }}
                >
                  ► {hl.authorCallout}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Extra-Bold Main Story Headline */}
        <div className="border-t-2 pt-2.5 border-amber-400 bg-black/80 backdrop-blur-sm p-3 rounded-t-sm shadow-xl">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="bg-amber-400 text-black font-black tracking-widest uppercase px-2 py-0.5 rounded-xs"
              style={{ fontSize: `${9.5 * scale}px` }}
            >
              {coverConfig.categoryTag || "COVER STORY"}
            </span>
            {coverConfig.authorCallout && (
              <span
                className="font-mono font-bold text-slate-300 uppercase"
                style={{ fontSize: `${9.5 * scale}px` }}
              >
                {coverConfig.authorCallout}
              </span>
            )}
          </div>
          <h2
            className="font-black tracking-tighter uppercase leading-[0.92] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]"
            style={{
              fontSize: `clamp(1.4rem, ${5.5 * scale}cqw, 2.6rem)`,
              textShadow: "0 2px 10px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)",
            }}
          >
            {coverConfig.mainHeadline}
          </h2>
          <p
            className="text-slate-200 font-semibold leading-snug mt-1 max-w-lg drop-shadow"
            style={{ fontSize: `${12 * scale}px` }}
          >
            {coverConfig.subHeadline}
          </p>
        </div>
      </div>

      {/* Bottom Hazard Stripe & Footer Bar */}
      <div className="relative z-10 flex flex-col">
        {coverConfig.showHazardStripe && (
          <div className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_10px,#000_10px,#000_20px)] shadow-md" />
        )}

        {/* Footer Bar & Barcode */}
        <div className="bg-black/90 backdrop-blur-md border-t border-white/20 px-4 sm:px-6 py-2 flex items-center justify-between">
          {/* Footer Ticker Tags */}
          <div className="flex flex-wrap gap-2 font-mono font-bold text-slate-300 uppercase tracking-wider"
            style={{ fontSize: `${9 * scale}px` }}
          >
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
          <div className="hidden sm:flex items-center gap-2 bg-white text-black px-2 py-0.5 rounded-sm text-right shadow-md">
            <div className="flex flex-col text-[6.5px] font-mono leading-none tracking-tighter">
              <span className="font-black">{coverConfig.barcodeText}</span>
              <div className="h-3 w-20 bg-[repeating-linear-gradient(90deg,#000,#000_1px,#fff_1px,#fff_2px,#000_2px,#000_4px,#fff_4px,#fff_5px)] mt-0.5" />
            </div>
            <QrCode className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
