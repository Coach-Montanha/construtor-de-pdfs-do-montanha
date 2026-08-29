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
  const isPeakPerformance = coverConfig.coverStyleVariant === "peak-performance";
  const isTactical = coverConfig.coverStyleVariant === "tactical-stencil";

  /* -------------------------------------------------------------
   * VARIANT: PEAK PERFORMANCE / PRO EDITION (High-Key Studio & Angular Blue)
   * ------------------------------------------------------------- */
  if (isPeakPerformance) {
    return (
      <div
        className={`magazine-page relative w-full h-full bg-white text-[#111111] overflow-hidden select-none ${
          isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
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

        {/* Imagem do Atleta (Opcional - recortada / integrada ao estúdio) */}
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
            className="text-[4rem] sm:text-[5rem] md:text-[5.8rem] font-black italic tracking-[-3px] text-[#0b0f14] lowercase leading-[0.85]"
            style={{
              textShadow: "0 2px 10px rgba(255,255,255,0.8)",
            }}
          >
            {coverConfig.mastheadText ? coverConfig.mastheadText.toLowerCase() : "montanha"}
          </h1>
          <div className="pt-1">
            <span
              className="bg-[#111111] text-white px-2 py-1.5 text-[8pt] font-black uppercase tracking-widest inline-block shadow-md"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {coverConfig.issueBadge || "PRO EDITION"}
            </span>
          </div>
        </div>

        {/* Chamadas da Esquerda */}
        <div className="absolute top-[17%] left-[5%] w-[38%] z-10 space-y-1">
          <div className="leading-none">
            <span className="text-[11pt] sm:text-[13pt] font-black text-[#111] block">THE</span>
            <span className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] font-black text-[#e51d24] leading-[0.85] tracking-[-1.5px] uppercase block">
              PEAK
            </span>
            <span className="text-[12pt] sm:text-[15pt] font-black text-[#111] leading-[0.95] uppercase block">
              PERFORMANCE ISSUE
            </span>
          </div>

          <div className="mt-2 border-l-[3.5px] border-[#e51d24] pl-2 space-y-0.5">
            <div className="text-[8pt] sm:text-[9.5pt] font-extrabold uppercase text-[#1a1a1a] leading-tight">
              ■ RECOVER FASTER
            </div>
            <div className="text-[8pt] sm:text-[9.5pt] font-extrabold uppercase text-[#1a1a1a] leading-tight">
              ■ STAY AT YOUR PEAK
            </div>
            <div className="text-[8pt] sm:text-[9.5pt] font-extrabold uppercase text-[#1a1a1a] leading-tight">
              ■ SQUAT BETTER
            </div>
          </div>
        </div>

        {/* Bloco Meio-Esquerda: Research Box */}
        <div className="absolute top-[40%] left-[5%] z-10">
          <span className="bg-[#111] text-white text-[8pt] font-black px-2 py-1 uppercase inline-block">
            RESEARCH
          </span>
          <span className="bg-[#0088cc] text-white text-[7.5pt] font-bold px-2 py-1 block mt-[1px]">
            The truth about Taurine
          </span>
        </div>

        {/* Selo Promocional Circular */}
        <div className="absolute top-[56%] left-[4%] w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] rounded-full bg-[#e51d24] border-[8px] sm:border-[10px] border-[#111111] z-10 flex flex-col items-center justify-center text-center text-white shadow-xl">
          <span className="text-[7pt] sm:text-[8pt] font-black uppercase leading-none">
            {coverConfig.circleBadge?.topText || "SAVE"}
          </span>
          <span className="text-[12pt] sm:text-[14pt] font-black leading-none my-0.5">
            {coverConfig.circleBadge?.valueText || "R$100"}
          </span>
          <span className="text-[4.5pt] sm:text-[5.5pt] font-extrabold uppercase leading-tight">
            {coverConfig.circleBadge?.subText || "SUPPLEMENT\nDISCOUNT\nVOUCHERS"}
          </span>
        </div>

        {/* Chamadas da Direita: Top */}
        <div className="absolute top-[17%] right-[5%] w-[38%] text-right z-10">
          <h3 className="text-[11pt] sm:text-[13pt] font-black text-[#111] uppercase leading-tight m-0">
            BUGGING OUT
          </h3>
          <p className="text-[7pt] sm:text-[8pt] font-bold text-[#222] uppercase leading-tight mt-0.5">
            IS INSECT PROTEIN THE<br />NEXT BIG TREND?
          </p>
        </div>

        {/* Chamadas da Direita: Food Prep Box */}
        <div className="absolute top-[26%] right-[5%] z-10 text-right">
          <span className="bg-[#111] text-white text-[8pt] font-black px-2 py-1 uppercase inline-block">
            FOOD PREP
          </span>
          <span className="bg-[#0088cc] text-white text-[7.5pt] font-bold px-2 py-1 block mt-[1px]">
            Sear tuna like a top chef
          </span>
        </div>

        {/* Chamadas da Direita: Number Hook */}
        <div className="absolute top-[40%] right-[5%] w-[42%] text-right z-10 flex items-center justify-end gap-2">
          <div className="text-right">
            <span className="text-[9pt] sm:text-[11pt] font-black text-[#e51d24] uppercase block leading-tight">
              WAYS TO BOOST YOUR INCOME
            </span>
            <span className="text-[6.5pt] sm:text-[7.5pt] font-extrabold text-[#111] uppercase block mt-0.5">
              EARN MORE AS A PERSONAL TRAINER
            </span>
          </div>
          <span className="text-[3.2rem] sm:text-[3.8rem] font-black text-[#e51d24] leading-[0.75]">
            5
          </span>
        </div>

        {/* Destaque Principal Inferior (Sobre os Grafismos Azul/Preto) */}
        <div className="absolute bottom-[5%] inset-x-0 text-center z-20">
          <div className="bg-[#111] text-white text-[8.5pt] sm:text-[10pt] font-black px-4 py-1 uppercase inline-block shadow-md">
            {coverConfig.categoryTag || "SHARPEN UP"}
          </div>
          <h2 className="text-[2.6rem] sm:text-[3.2rem] md:text-[3.6rem] font-black text-white uppercase tracking-[-1px] leading-[0.85] m-0 drop-shadow-md">
            {coverConfig.mainHeadline || "SHOULDER WORKOUT"}
          </h2>
          <div className="mt-1">
            <span className="bg-[#111] text-white text-[7.5pt] sm:text-[9.5pt] font-extrabold px-6 py-1 uppercase inline-block shadow-md">
              {coverConfig.subHeadline || "BACK TO BASICS FOR SERIOUS DELT DEMOLITION"}
            </span>
          </div>
        </div>

        {/* Código de Barras & Metadados */}
        <div className="absolute bottom-[1.5%] left-[4%] bg-white px-2 py-1 border border-[#111] z-20 text-center shadow-sm">
          <div className="h-[14px] w-[90px] bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,#fff_1.5px,#fff_3px,#000_3px,#000_4px,#fff_4px,#fff_6px,#000_6px,#000_8px)]" />
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
