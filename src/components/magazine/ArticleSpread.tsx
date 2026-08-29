import React from "react";
import { Article, MagazineProject, MagazineTheme } from "../../types/magazine";
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

  // Render markdown / formatted paragraphs with drop-cap and H2 styling
  const renderParagraphs = (text: string, enableDropCap = true) => {
    return text.split("\n\n").map((chunk, idx) => {
      // Standalone H2 / Subheaders
      if (chunk.startsWith("### ") || chunk.startsWith("## ")) {
        const cleanTitle = chunk.replace(/^#+\s*/, "");
        return (
          <div key={idx} className="mt-3 mb-1.5 pb-0.5 border-b border-amber-400/40">
            <h4 className="text-xs sm:text-sm font-mono font-black text-amber-400 uppercase tracking-tight flex items-center gap-1.5">
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
            <h4 className="text-xs font-mono font-black text-amber-400 uppercase mb-0.5">
              // {title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed text-justify">
              {body}
            </p>
          </div>
        );
      }

      const isFirst = idx === 0 && enableDropCap;
      return (
        <p
          key={idx}
          className={`text-xs text-slate-300 leading-relaxed text-justify mb-3 ${
            isFirst
              ? "first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-mono first-letter:font-black first-letter:text-amber-400 first-letter:float-left first-letter:mr-2.5 first-letter:leading-none"
              : ""
          }`}
        >
          {chunk.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
  };

  return (
    <div
      className={`magazine-page relative w-full h-full bg-[#0B0F19] text-white overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Block */}
      <div className="relative z-10 border-b-2 border-amber-400 pb-2 flex items-center justify-between text-[10px] font-mono">
        <div className="flex items-center gap-2">
          <span className="font-black text-amber-400 uppercase tracking-widest">
            {project.title}
          </span>
          <span className="text-slate-600">/</span>
          <span className="bg-amber-400 text-black font-black text-[9px] px-2 py-0.5 rounded-xs uppercase">
            {article.category || "MONTANHA DOSSIER"}
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 font-bold uppercase">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
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
            <div className="text-center pt-1 border-b border-slate-800 pb-2">
              <span className="text-[9px] font-mono font-black tracking-[0.3em] text-amber-400 uppercase block mb-1">
                OFFICIAL GEAR PROMOTION // MONTANHA LAB
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-md">
                {promo?.slogan || "FORGED IN IRON // BUILT FOR WAR"}
              </h2>
            </div>

            {/* Central High-Impact Product Imagery with Badge Overlays */}
            <div className="relative flex-1 min-h-[160px] sm:min-h-[190px] rounded-lg overflow-hidden border-2 border-slate-800 shadow-xl group">
              <img
                src={promo?.productImage || article.heroImage}
                alt={promo?.productName || article.title}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Promotional Badge (Top Right) */}
              <div className="absolute top-3 right-3 bg-amber-400 text-black px-3 py-1.5 rounded-sm shadow-lg font-mono font-black text-[10px] sm:text-xs uppercase tracking-tight flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 fill-black" />
                <span>{promo?.promoBadgeText || "SPECIAL OFFER // 15% OFF"}</span>
              </div>

              {/* Product Name on Bottom of Image */}
              <div className="absolute bottom-3 inset-x-4">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg">
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
                  className="bg-slate-900/90 border border-slate-800 p-2 rounded text-center"
                >
                  <span className="text-[9px] font-mono font-black text-amber-400 block uppercase">
                    {spec.title}
                  </span>
                  <span className="text-[8px] font-mono text-slate-400 leading-none">
                    {spec.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversion & CTA Module (Coupon + QR Code + URL) */}
            <div className="bg-black/90 border-2 border-amber-400/80 p-3 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[8.5px] font-mono text-slate-400 uppercase block">
                  CUPOM EXCLUSIVO PARA LEITORES DA REVISTA:
                </span>
                <div className="inline-block bg-slate-900 border border-amber-400 px-3 py-1 rounded text-amber-400 font-mono font-black text-sm tracking-widest uppercase">
                  CODE: {promo?.couponCode || "MONTANHA15"}
                </div>
                <p className="text-[9px] font-mono text-slate-300 mt-0.5">
                  ACESSE: <span className="text-white font-bold">{promo?.ctaUrl || "WWW.MONTANHAIRON.COM.BR"}</span>
                </p>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900 p-2 rounded border border-slate-800">
                <div className="bg-white p-1 rounded">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
                <div className="text-[8px] font-mono text-left">
                  <span className="font-black text-amber-400 block uppercase leading-none">
                    SCAN TO SHOP
                  </span>
                  <span className="text-slate-400 text-[7px] leading-tight">
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
                  className="relative rounded-md overflow-hidden border border-slate-800 group"
                >
                  <img
                    src={photoUrl}
                    alt={`Facility View ${idx + 1}`}
                    className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 bg-black/80 px-1 py-0.5 rounded text-[7px] font-mono font-bold text-amber-400 uppercase">
                    SPOTLIGHT #{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Split Grid: Left Sidebar / Tech Sheet (1/3) + Main Narrative (2/3) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden">
              {/* Left Sidebar / Tech Sheet (4 cols) */}
              <div className="md:col-span-4 bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex flex-col justify-between space-y-2.5 text-[10px] font-mono">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 font-black uppercase text-[10px] border-b border-slate-800 pb-1 mb-2">
                    <Building className="w-3.5 h-3.5" />
                    <span>FACILITY TECH SHEET</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block font-bold">
                        FACILITY NAME:
                      </span>
                      <span className="text-white font-black text-xs block">
                        {facility?.facilityName || "MONTANHA PERFORMANCE LAB"}
                      </span>
                    </div>

                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block font-bold">
                        HEAD COACH / DIRECTOR:
                      </span>
                      <span className="text-amber-400 font-bold">
                        {facility?.headCoach || "COACH MONTANHA"}
                      </span>
                    </div>

                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block font-bold">
                        LOCATION:
                      </span>
                      <span className="text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        {facility?.location || "SÃO PAULO // SP"}
                      </span>
                    </div>

                    <div>
                      <span className="text-[8px] text-slate-500 uppercase block font-bold">
                        METHODS USED:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(facility?.methodsUsed || [
                          "KETTLEBELLS",
                          "STEEL MACES",
                          "CLUBBELLS",
                          "CALISTHENICS",
                          "MOBILITY",
                        ]).map((m, i) => (
                          <span
                            key={i}
                            className="bg-black text-amber-300 text-[8px] px-1.5 py-0.5 rounded border border-slate-700 uppercase"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[8.5px] text-slate-400">
                  WEB: <span className="text-white font-bold">{facility?.website || "WWW.MONTANHALAB.COM.BR"}</span>
                </div>
              </div>

              {/* Main Narrative Area (8 cols): Overview, Mission, Coaching Philosophy & Pull Quote */}
              <div className="md:col-span-8 flex flex-col justify-between space-y-2.5 pl-0 md:pl-1">
                <div className="space-y-2 text-justify text-xs leading-relaxed font-sans text-slate-300">
                  <div>
                    <h4 className="text-xs font-mono font-black text-amber-400 uppercase mb-0.5">
                      // OVERVIEW & ESTRUTURA
                    </h4>
                    <p>
                      {facility?.overviewText ||
                        "Projetado como um santuário para o treinamento de força pura, o Montanha Lab elimina o supérfluo para focar no que realmente constrói atletas resilientes: ferro maciço, alavancas assimétricas e protocolos de intensidade implacável."}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-black text-amber-400 uppercase mb-0.5">
                      // MISSÃO & FILOSOFIA DE COACHING
                    </h4>
                    <p>
                      {facility?.missionText ||
                        "Nossa missão é transformar cada praticante em uma máquina de adaptação motora. Não ensinamos apenas movimentos; cultivamos a mentalidade espartana de execução sem desculpas em cada repetição."}
                    </p>
                  </div>
                </div>

                {/* Large Anchored Motivational Statement */}
                <div className="bg-slate-900 border-l-4 border-amber-400 p-2.5 rounded-r shadow-md">
                  <p className="text-xs sm:text-sm font-black text-white italic uppercase tracking-tight">
                    "{facility?.anchoredQuote || "O ambiente certo não apenas inspira o esforço; ele torna a mediocridade insuportável."}"
                  </p>
                  <span className="text-[8px] font-mono text-amber-400 mt-0.5 block uppercase">
                    — MANIFESTO MONTANHA LAB
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : isWorkout && protocol ? (
          /* ----------------- 3. TEMPLATE: WORKOUT PROTOCOL ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-2.5">
            {/* Primary Workout Title Card */}
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="bg-amber-400 text-black font-black text-[8px] font-mono px-1.5 py-0.5 rounded uppercase">
                    WORKOUT PROTOCOL
                  </span>
                  <span className="text-[9px] font-mono font-bold text-amber-400 uppercase">
                    HIGH INTENSITY // DENSITY TRAINING
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                  {protocol.workoutTitle || article.title}
                </h2>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {article.subtitle}
                </p>
              </div>

              {/* Author & Coach Badge */}
              <div className="shrink-0 flex items-center gap-2 bg-black/60 p-2 rounded border border-slate-800">
                {article.authorPhoto && (
                  <img
                    src={article.authorPhoto}
                    alt={article.author}
                    className="w-8 h-8 rounded object-cover border border-amber-400"
                  />
                )}
                <div className="text-[9px] font-mono">
                  <span className="text-white font-bold block uppercase">{article.author}</span>
                  <span className="text-amber-400 font-semibold">{article.authorBio || "MASTER COACH"}</span>
                </div>
              </div>
            </div>

            {/* Warm-Up / Mobility Prep Box */}
            {protocol.warmupPrep && (
              <div className="bg-amber-400/10 border-l-4 border-amber-400 p-2.5 rounded-r text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-mono font-black text-[10px] uppercase mb-0.5">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>FASE 0: PREPARAÇÃO ARTICULAR & AQUECIMENTO</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-tight font-sans">
                  {protocol.warmupPrep}
                </p>
              </div>
            )}

            {/* Exercise Clusters (A1, A2, B1, B2, Finisher) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
              {protocol.exercises.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 p-2.5 rounded-lg flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Alphanumeric Notation Header */}
                    <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-800">
                      <span className="inline-block bg-amber-400 text-black font-mono font-black text-[9px] px-1.5 py-0.5 rounded shadow-sm">
                        CLUSTER {ex.code}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-amber-300">
                        {ex.tempoRest}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-white uppercase tracking-tight">
                      {ex.name}
                    </h4>
                    <p className="text-[10px] font-mono font-bold text-amber-400 uppercase mt-0.5">
                      ► {ex.setsReps}
                    </p>
                  </div>

                  <p className="text-[10px] text-slate-300 leading-tight mt-1.5 pt-1 border-t border-slate-800/80 font-sans italic">
                    "{ex.keyPoints}"
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: Finisher Box & Video QR Code Container */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
              {/* Finisher / Coaching Note (9 cols) */}
              <div className="sm:col-span-9 bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-mono font-black uppercase mb-0.5">
                    <Zap className="w-3.5 h-3.5 fill-amber-400" />
                    <span>DIRETRIZES DE INTENSIDADE & FINISHER</span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    {protocol.finisher || "Mantenha o foco absoluto na cadência excêntrica de 2 segundos. Em caso de perda da postura torácica, descanse 10 segundos antes de finalizar a série."}
                  </p>
                </div>
                <div className="text-[8.5px] font-mono text-slate-400 mt-1 pt-1 border-t border-slate-800">
                  METODOLOGIA MONTANHA UNCONVENTIONAL TRAINING // PROTOCOLO APROVADO
                </div>
              </div>

              {/* Integrated QR Code / Video Badge (3 cols) */}
              <div className="sm:col-span-3 bg-black border-2 border-amber-400/80 p-2 rounded-lg flex flex-col items-center justify-center text-center shadow-lg">
                <div className="bg-white p-1 rounded mb-1">
                  <QrCode className="w-9 h-9 text-black" />
                </div>
                <span className="text-[7.5px] font-mono font-black text-amber-400 uppercase leading-none">
                  SCAN FOR 4K DEMO
                </span>
                <span className="text-[6.5px] font-mono text-slate-400 mt-0.5">
                  VIDEO TUTORIAL
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ----------------- 4. TEMPLATE: STANDARD FEATURE / TECHNICAL ARTICLE ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-3">
            {/* Header Block: H1 + Deck */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-mono font-black text-amber-400 uppercase tracking-widest">
                  // {article.category || "MONTANHA STRENGTH"}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">
                  BY {article.author.toUpperCase()}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white uppercase tracking-tight leading-[0.95] mb-1.5">
                {article.title}
              </h2>

              {/* Sub-headline (Deck): 1-2 sentences summarizing the core takeaway */}
              <p className="text-xs sm:text-[13px] text-amber-200/90 font-medium leading-snug border-l-2 border-amber-400 pl-2.5 my-1.5">
                {article.subtitle}
              </p>
            </div>

            {/* Photographic Hero Banner */}
            {article.heroImage && (
              <div className="relative w-full h-36 sm:h-44 md:h-48 rounded-md overflow-hidden border border-slate-800 shadow-md group">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
                />
                {article.heroImageCaption && (
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-sm text-slate-200 text-[8.5px] font-mono px-3 py-1 flex items-center justify-between border-t border-slate-800">
                    <span>{article.heroImageCaption}</span>
                    <span className="text-amber-400 font-bold uppercase">MONTANHA MEDIA LAB</span>
                  </div>
                )}
              </div>
            )}

            {/* 3-Column / Multi-Column Text Grid & Pull Quote Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden">
              {/* Text Column (8 cols): Justified body with Drop-Cap */}
              <div className="md:col-span-8 text-justify columns-1 sm:columns-2 gap-3 text-xs leading-relaxed font-sans">
                {renderParagraphs(article.content, true)}
              </div>

              {/* Sidebar / Pull Quote & Callout Block (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between border-l border-slate-800 pl-3 space-y-3">
                {/* Pull Quote Block: Oversized Display Typography with Quotes and Color Bar */}
                {article.pullQuotes && article.pullQuotes.length > 0 && (
                  <div className="bg-slate-900 border-l-4 border-amber-400 p-3 rounded-r-md shadow-md">
                    <Quote className="w-5 h-5 text-amber-400 mb-1" />
                    <p className="text-xs sm:text-sm font-black text-white italic leading-tight tracking-tight uppercase">
                      "{article.pullQuotes[0]}"
                    </p>
                    <span className="text-[8px] font-mono text-amber-400/80 mt-1 block uppercase">
                      — REGRA DO TREINADOR
                    </span>
                  </div>
                )}

                {/* Callout Box */}
                {article.calloutBox && (
                  <div className="bg-black/90 border border-slate-800 p-2.5 rounded-md">
                    <div className="flex items-center gap-1 text-[9px] font-mono font-black text-amber-400 uppercase mb-1">
                      <Lightbulb className="w-3 h-3 text-amber-400" />
                      <span>{article.calloutBox.title}</span>
                    </div>
                    <p className="text-[10px] text-slate-300 leading-snug font-sans">
                      {article.calloutBox.content}
                    </p>
                  </div>
                )}

                {/* Key Takeaways */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="border border-slate-800 p-2.5 rounded-md bg-slate-900/60">
                    <span className="text-[9px] font-mono font-black text-amber-400 uppercase block mb-1">
                      PONTOS INEGOCIÁVEIS:
                    </span>
                    <ul className="space-y-1 text-[9.5px] text-slate-300 font-sans">
                      {article.keyTakeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
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

      {/* Bottom Footer Block: Contributor Tag + Social Handle + Page Number */}
      <div className="relative z-10 border-t border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="text-white">BY {article.author.toUpperCase()}</span>
          <span>•</span>
          <span className="text-amber-400">{project.title}</span>
          <span className="hidden sm:inline text-slate-500">(@coachmontanha)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-slate-900 text-amber-400 border border-slate-700 px-2 py-0.5 rounded">
            PAGE {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
          </span>
        </div>
      </div>
    </div>
  );
};
