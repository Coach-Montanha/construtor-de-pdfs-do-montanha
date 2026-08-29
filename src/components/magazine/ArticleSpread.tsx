import React from "react";
import { Article, MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import {
  Quote,
  Clock,
  CheckCircle2,
  Lightbulb,
  User,
  QrCode,
  Flame,
  ShieldCheck,
  Zap,
  Tag,
  ShoppingBag,
  ExternalLink,
  MapPin,
  Building,
  Target,
  Sparkles,
} from "lucide-react";

interface ArticleSpreadProps {
  article: Article;
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber: number;
  isPrintMode?: boolean;
}

export const ArticleSpread: React.FC<ArticleSpreadProps> = ({
  article,
  project,
  theme,
  pageNumber,
  isPrintMode = false,
}) => {
  const isWorkout = article.layoutTemplate === "workout-protocol";
  const isProductAd = article.layoutTemplate === "product-ad";
  const isFacilitySpotlight = article.layoutTemplate === "facility-spotlight";

  const protocol = article.workoutProtocol;
  const promo = article.productPromotion;
  const facility = article.facilitySpotlight;

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
  const isLight = theme.id === "vogue-haute";

  // Dynamic Theme Colors
  const bgColor = isLight ? theme.bgLight : theme.bgDark;
  const textColor = theme.textColor;
  const textMutedColor = isLight ? "#475569" : "#94A3B8";
  const cardBg = theme.cardBg;
  const primaryColor = theme.primaryColor;
  const accentColor = theme.accentColor;
  const borderColor = theme.borderColor;

  // Render markdown / formatted paragraphs with drop-cap and H2 styling
  const renderParagraphs = (text: string, enableDropCap = true) => {
    return text.split("\n\n").map((chunk, idx) => {
      // Standalone H2 / Subheaders
      if (chunk.startsWith("### ") || chunk.startsWith("## ")) {
        const cleanTitle = chunk.replace(/^#+\s*/, "");
        return (
          <div key={idx} className="mt-3 mb-1.5 pb-0.5 border-b" style={{ borderColor: `${primaryColor}60` }}>
            <h4
              className={`text-xs sm:text-sm font-black uppercase tracking-tight flex items-center gap-1.5 ${headlineFontClass}`}
              style={{ color: primaryColor }}
            >
              <span>//</span>
              <span>{cleanTitle}</span>
            </h4>
          </div>
        );
      }

      if (chunk.startsWith("**") && chunk.includes("**\n")) {
        const parts = chunk.split("**\n");
        const title = parts[0].replace(/\*\*/g, "");
        const body = parts.slice(1).join("\n");
        return (
          <div key={idx} className="my-2.5">
            <h4
              className={`text-xs font-black uppercase mb-0.5 ${headlineFontClass}`}
              style={{ color: primaryColor }}
            >
              // {title}
            </h4>
            <p
              className={`text-xs leading-relaxed text-justify ${bodyFontClass}`}
              style={{ color: textMutedColor }}
            >
              {body}
            </p>
          </div>
        );
      }

      const isFirst = idx === 0 && enableDropCap;
      return (
        <p
          key={idx}
          className={`text-xs leading-relaxed text-justify mb-3 ${bodyFontClass} ${
            isFirst
              ? "first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2.5 first-letter:leading-none"
              : ""
          }`}
          style={{ color: isLight ? "#1E293B" : "#CBD5E1" }}
        >
          {chunk.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
  };

  return (
    <div
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Block */}
      <div
        className="relative z-10 border-b-2 pb-2 flex items-center justify-between text-[10px] font-mono"
        style={{ borderColor: primaryColor }}
      >
        <div className="flex items-center gap-2">
          <span className="font-black uppercase tracking-widest" style={{ color: primaryColor }}>
            {project.title}
          </span>
          <span className="opacity-40">/</span>
          <span
            className="text-[9px] font-mono font-black px-2 py-0.5 rounded uppercase"
            style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
          >
            {article.category || "MONTANHA DOSSIER"}
          </span>
        </div>
        <div className="flex items-center gap-3 font-bold uppercase" style={{ color: textMutedColor }}>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" style={{ color: primaryColor }} />
            {article.estimatedReadTime} MIN READ
          </span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
      </div>

      {/* Main Page Content Area depending on template */}
      <div className="relative z-10 flex-1 flex flex-col justify-between my-3 overflow-hidden">
        {/* ----------------- 1. TEMPLATE: FULL-PAGE PRODUCT / GEAR AD ----------------- */}
        {isProductAd ? (
          <div className="flex-1 flex flex-col justify-between space-y-3">
            {/* Massive Display Slogan */}
            <div className="text-center pt-1 border-b pb-2" style={{ borderColor: `${primaryColor}40` }}>
              <span
                className="text-[9px] font-mono font-black tracking-[0.3em] uppercase block mb-1"
                style={{ color: primaryColor }}
              >
                OFFICIAL GEAR PROMOTION // {project.title} LAB
              </span>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none drop-shadow-md ${headlineFontClass}`}
                style={{ color: textColor }}
              >
                {promo?.slogan || "FORGED IN IRON // BUILT FOR WAR"}
              </h2>
            </div>

            {/* Central High-Impact Product Imagery with Badge Overlays */}
            <div
              className="relative flex-1 min-h-[160px] sm:min-h-[190px] rounded-lg overflow-hidden border-2 shadow-xl group"
              style={{ borderColor: `${primaryColor}60` }}
            >
              <img
                src={promo?.productImage || article.heroImage}
                alt={promo?.productName || article.title}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Promotional Badge (Top Right) */}
              <div
                className="absolute top-3 right-3 px-3 py-1.5 rounded-sm shadow-lg font-mono font-black text-[10px] sm:text-xs uppercase tracking-tight flex items-center gap-1.5"
                style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>{promo?.promoBadgeText || "SPECIAL OFFER // 15% OFF"}</span>
              </div>

              {/* Product Name on Bottom of Image */}
              <div className="absolute bottom-3 inset-x-4">
                <h3 className={`text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg ${headlineFontClass}`}>
                  {promo?.productName || article.title}
                </h3>
                <p className="text-xs text-amber-200/90 font-medium max-w-lg mt-0.5 leading-snug drop-shadow">
                  {promo?.productSubtitle || article.subtitle}
                </p>
              </div>
            </div>

            {/* Technical Spec Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(promo?.specBadges || [
                { title: "GRAVITY CAST", subtitle: "Single pour ductile iron" },
                { title: "POWDER COAT", subtitle: "Matte textured grip" },
                { title: "CALIBRATED", subtitle: "+/- 0.5% precision weight" },
                { title: "LIFETIME SPEC", subtitle: "Indestructible warranty" },
              ]).map((spec, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded text-center border"
                  style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
                >
                  <span className="text-[9px] font-mono font-black block uppercase" style={{ color: primaryColor }}>
                    {spec.title}
                  </span>
                  <span className="text-[8px] font-mono leading-none" style={{ color: textMutedColor }}>
                    {spec.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversion & CTA Module (Coupon + QR Code + URL) */}
            <div
              className="p-3 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border-2"
              style={{ backgroundColor: cardBg, borderColor: primaryColor }}
            >
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[8.5px] font-mono uppercase block" style={{ color: textMutedColor }}>
                  CUPOM EXCLUSIVO PARA LEITORES DA REVISTA:
                </span>
                <div
                  className="inline-block px-3 py-1 rounded font-mono font-black text-sm tracking-widest uppercase border"
                  style={{ backgroundColor: bgColor, color: primaryColor, borderColor: primaryColor }}
                >
                  CODE: {promo?.couponCode || "MONTANHA15"}
                </div>
                <p className="text-[9px] font-mono mt-0.5" style={{ color: textMutedColor }}>
                  ACESSE: <span className="font-bold" style={{ color: textColor }}>{promo?.ctaUrl || "WWW.MONTANHAIRON.COM.BR"}</span>
                </p>
              </div>

              <div
                className="flex items-center gap-2.5 p-2 rounded border"
                style={{ backgroundColor: bgColor, borderColor: `${primaryColor}40` }}
              >
                <div className="bg-white p-1 rounded">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
                <div className="text-[8px] font-mono text-left">
                  <span className="font-black block uppercase leading-none" style={{ color: primaryColor }}>
                    SCAN TO SHOP
                  </span>
                  <span className="text-[7px] leading-tight" style={{ color: textMutedColor }}>
                    ENTREGA DIRETA EM TODO O BRASIL
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : isFacilitySpotlight ? (
          /* ----------------- 2. TEMPLATE: STUDIO / FACILITY SPOTLIGHT ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-3">
            {/* Top Multi-Photo Collage (3 Photos) */}
            <div className="grid grid-cols-3 gap-2 h-28 sm:h-36">
              {(facility?.galleryPhotos && facility.galleryPhotos.length > 0
                ? facility.galleryPhotos
                : [
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
                  ]
              ).map((photoUrl, idx) => (
                <div
                  key={idx}
                  className="relative rounded-md overflow-hidden border group"
                  style={{ borderColor: `${primaryColor}40` }}
                >
                  <img
                    src={photoUrl}
                    alt={`Facility View ${idx + 1}`}
                    className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute top-1 left-1 px-1 py-0.5 rounded text-[7px] font-mono font-bold uppercase"
                    style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                  >
                    SPOTLIGHT #{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Split Grid: Left Sidebar / Tech Sheet (1/3) + Main Narrative (2/3) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden">
              {/* Left Sidebar / Tech Sheet (4 cols) */}
              <div
                className="md:col-span-4 p-3 rounded-lg border space-y-2 flex flex-col justify-between"
                style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
              >
                <div className="space-y-2">
                  <div
                    className="flex items-center gap-1.5 text-[9px] font-mono font-black uppercase tracking-widest pb-1 border-b"
                    style={{ color: primaryColor, borderColor: `${primaryColor}40` }}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>FACILITY SPEC SHEET</span>
                  </div>

                  <div>
                    <span className="text-[7.5px] font-mono uppercase block" style={{ color: textMutedColor }}>
                      CENTRO DE TREINAMENTO:
                    </span>
                    <h4 className={`text-xs font-black uppercase ${headlineFontClass}`} style={{ color: textColor }}>
                      {facility?.facilityName || "MONTANHA PERFORMANCE LAB"}
                    </h4>
                  </div>

                  <div>
                    <span className="text-[7.5px] font-mono uppercase block" style={{ color: textMutedColor }}>
                      HEAD COACH & DIRETOR:
                    </span>
                    <span className="text-[10px] font-mono font-bold block" style={{ color: primaryColor }}>
                      {facility?.headCoach || "COACH MONTANHA"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[7.5px] font-mono uppercase block" style={{ color: textMutedColor }}>
                      LOCALIZAÇÃO / BASE:
                    </span>
                    <span className="text-[9px] font-mono block" style={{ color: textColor }}>
                      {facility?.location || "SÃO PAULO // SP"}
                    </span>
                  </div>
                </div>

                {/* Anchored Quote */}
                <div
                  className="p-2 rounded border"
                  style={{ backgroundColor: bgColor, borderColor: `${primaryColor}30` }}
                >
                  <p className="text-[8.5px] font-mono italic leading-tight" style={{ color: primaryColor }}>
                    "{facility?.anchoredQuote || "O ambiente certo torna a mediocridade insuportável."}"
                  </p>
                </div>
              </div>

              {/* Right Column: Main Facility Story (8 cols) */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-2 overflow-hidden">
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-black uppercase tracking-tight leading-tight mb-2 ${headlineFontClass}`}
                    style={{ color: textColor }}
                  >
                    {article.title}
                  </h3>
                  <div className="text-xs space-y-2 text-justify overflow-hidden">
                    {renderParagraphs(article.content, true)}
                  </div>
                </div>

                <div
                  className="pt-2 border-t flex items-center justify-between text-[9px] font-mono"
                  style={{ borderColor: `${primaryColor}40`, color: textMutedColor }}
                >
                  <span>MÉTODOS: KETTLEBELLS • STEEL MACES • CLUBBELLS</span>
                  <span className="font-bold" style={{ color: primaryColor }}>LAB CODE // 01</span>
                </div>
              </div>
            </div>
          </div>
        ) : isWorkout ? (
          /* ----------------- 3. TEMPLATE: WORKOUT PROTOCOL ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-3">
            {/* Protocol Header & Warm-Up Strip */}
            <div className="space-y-2">
              <div
                className="flex items-center justify-between border-b pb-1.5"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4" style={{ color: primaryColor }} />
                  <h2 className={`text-base sm:text-lg font-black uppercase tracking-tight ${headlineFontClass}`} style={{ color: textColor }}>
                    {protocol?.workoutTitle || article.title}
                  </h2>
                </div>
                <div
                  className="px-2 py-0.5 rounded font-mono font-black text-[9px] uppercase border"
                  style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: primaryColor }}
                >
                  HIGH DENSITY PROTOCOL
                </div>
              </div>

              {/* Warm-Up Box */}
              <div
                className="p-2.5 rounded-lg border flex items-center gap-3 text-xs"
                style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
              >
                <div
                  className="px-2 py-1 rounded font-mono font-black text-[9px] uppercase shrink-0"
                  style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                >
                  FASE 0 // WARM-UP
                </div>
                <p className={`text-[10px] leading-snug ${bodyFontClass}`} style={{ color: textMutedColor }}>
                  {protocol?.warmupPrep || "MOBILIDADE & ATIVAÇÃO (5 MIN): T-spine bridges, halos com kettlebell leve e cócoras ativas."}
                </p>
              </div>
            </div>

            {/* Exercise Clusters Matrix (A1/A2/B1/B2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1 overflow-hidden">
              {(protocol?.exercises || [
                {
                  code: "A1",
                  name: "DOUBLE KETTLEBELL CLEAN & PRESS",
                  setsReps: "5 SÉRIES × 5 REPS",
                  tempoRest: "TEMPO: 20X1 // REST: 60s",
                  keyPoints: "Trave o abdômen, explosão de quadril no clean e trava completa no lockout.",
                },
                {
                  code: "A2",
                  name: "HEAVY STEEL MACE 360",
                  setsReps: "5 SÉRIES × 10 REPS / LADO",
                  tempoRest: "TEMPO: CONTÍNUO // REST: 60s",
                  keyPoints: "Cotovelos fechados, deixe o mace passar rente à nuca e puxe com dorsal.",
                },
                {
                  code: "B1",
                  name: "BULGARIAN BAG ROTATIONAL SPIN",
                  setsReps: "4 SÉRIES × 8 REPS / LADO",
                  tempoRest: "TEMPO: DINÂMICO // REST: 45s",
                  keyPoints: "Transfira o peso de uma perna para a outra sem perder a linha da coluna.",
                },
                {
                  code: "B2",
                  name: "FARMER CARRY COM KETTLEBELLS PESADOS",
                  setsReps: "4 SÉRIES × 40 METROS",
                  tempoRest: "TEMPO: PASSOS CONTROLADOS // REST: 90s",
                  keyPoints: "Postura ereta militar, escápulas encaixadas e pegada esmagando a alça.",
                },
              ]).map((ex, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border flex flex-col justify-between shadow-xs"
                  style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="font-mono font-black text-xs px-1.5 py-0.2 rounded border"
                        style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: primaryColor }}
                      >
                        {ex.code}
                      </span>
                      <span className="font-mono font-black text-[9px] uppercase" style={{ color: primaryColor }}>
                        {ex.setsReps}
                      </span>
                    </div>

                    <h4 className={`font-black text-xs uppercase leading-tight mt-1 ${headlineFontClass}`} style={{ color: textColor }}>
                      {ex.name}
                    </h4>

                    <span className="text-[8px] font-mono block mt-0.5" style={{ color: textMutedColor }}>
                      {ex.tempoRest}
                    </span>
                  </div>

                  <p
                    className={`text-[9.5px] leading-tight mt-1.5 pt-1.5 border-t text-justify ${bodyFontClass}`}
                    style={{ borderColor: `${primaryColor}20`, color: isLight ? "#334155" : "#94A3B8" }}
                  >
                    {ex.keyPoints}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Finisher + QR Code */}
            <div
              className="p-2.5 rounded-lg border flex items-center justify-between gap-3 shadow-sm"
              style={{ backgroundColor: cardBg, borderColor: primaryColor }}
            >
              <div className="flex-1 min-w-0">
                <span className="font-mono font-black text-[8px] uppercase block" style={{ color: primaryColor }}>
                  BLOCO FINALIZADOR // METABOLIC BURN
                </span>
                <p className={`text-[10px] truncate ${bodyFontClass}`} style={{ color: textColor }}>
                  {protocol?.finisher || "FINISHER: 100 Kettlebell Snatches for time (16kg/24kg). Máximo esforço sem pausas."}
                </p>
              </div>

              <div
                className="flex items-center gap-2 px-2 py-1 rounded border shrink-0"
                style={{ backgroundColor: bgColor, borderColor: `${primaryColor}40` }}
              >
                <div className="bg-white p-0.5 rounded">
                  <QrCode className="w-6 h-6 text-black" />
                </div>
                <div className="text-[7.5px] font-mono">
                  <span className="font-black block uppercase leading-none" style={{ color: primaryColor }}>
                    ASSISTIR VÍDEO
                  </span>
                  <span className="leading-tight" style={{ color: textMutedColor }}>
                    SCAN // DEMO 4K
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ----------------- 4. TEMPLATE: STANDARD EDITORIAL ARTICLE ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-3 overflow-hidden">
            {/* Title & Deck Header */}
            <div>
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-1.5 ${headlineFontClass}`}
                style={{ color: textColor }}
              >
                {article.title}
              </h2>
              {article.subtitle && (
                <p className={`text-xs sm:text-[13px] font-medium leading-snug mb-2 ${bodyFontClass}`} style={{ color: primaryColor }}>
                  {article.subtitle}
                </p>
              )}

              {/* Author Strip */}
              <div
                className="flex items-center justify-between pt-1 border-t text-[9px] font-mono"
                style={{ borderColor: `${primaryColor}30`, color: textMutedColor }}
              >
                <div className="flex items-center gap-2">
                  {article.authorPhoto ? (
                    <img
                      src={article.authorPhoto}
                      alt={article.author}
                      className="w-5 h-5 rounded-full object-cover border"
                      style={{ borderColor: primaryColor }}
                    />
                  ) : (
                    <User className="w-3.5 h-3.5" style={{ color: primaryColor }} />
                  )}
                  <span className="font-bold uppercase" style={{ color: textColor }}>{article.author}</span>
                  {article.authorBio && <span>• {article.authorBio}</span>}
                </div>
                <span className="font-bold uppercase" style={{ color: primaryColor }}>{project.title} EDITORIAL</span>
              </div>
            </div>

            {/* Hero Image Banner (if available) */}
            {article.heroImage && (
              <div
                className="relative h-28 sm:h-36 w-full rounded-md overflow-hidden border shrink-0 shadow-sm"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-95"
                />
                {article.heroImageCaption && (
                  <div className="absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-white">
                    {article.heroImageCaption}
                  </div>
                )}
              </div>
            )}

            {/* Multi-Column Article Body Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 overflow-hidden">
              {/* Left Column: Paragraphs */}
              <div className="text-xs space-y-2 text-justify overflow-hidden">
                {renderParagraphs(article.content, true)}
              </div>

              {/* Right Column: Pull Quote + Key Takeaways */}
              <div className="space-y-3 flex flex-col justify-between overflow-hidden">
                {/* Pull Quote Box */}
                {article.pullQuotes && article.pullQuotes.length > 0 && (
                  <div
                    className="p-3 rounded-lg border shadow-xs"
                    style={{ backgroundColor: cardBg, borderColor: primaryColor }}
                  >
                    <Quote className="w-4 h-4 mb-1" style={{ color: primaryColor }} />
                    <p className={`text-xs sm:text-sm font-black italic leading-snug ${headlineFontClass}`} style={{ color: primaryColor }}>
                      "{article.pullQuotes[0]}"
                    </p>
                    <span className="text-[8px] font-mono uppercase block mt-1.5 text-right" style={{ color: textMutedColor }}>
                      — {article.author}
                    </span>
                  </div>
                )}

                {/* Key Takeaways Box */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div
                    className="p-3 rounded-lg border space-y-1.5"
                    style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
                  >
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-black uppercase" style={{ color: primaryColor }}>
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>PONTOS-CHAVE & CONCLUSÕES:</span>
                    </div>
                    <ul className={`text-[10px] space-y-1 ${bodyFontClass}`} style={{ color: isLight ? "#334155" : "#CBD5E1" }}>
                      {article.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-tight">
                          <span style={{ color: primaryColor }}>▸</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Page Footer Bar */}
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
