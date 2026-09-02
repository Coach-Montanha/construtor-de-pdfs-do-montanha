import React from "react";
import { Article, MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { formatPageNumber } from "../../lib/magazine-utils";
import {
  Quote,
  Clock,
  Lightbulb,
  User,
  QrCode,
  Flame,
  Tag,
  Building,
} from "lucide-react";

interface ArticleSpreadProps {
  article: Article;
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber: number;
  isPrintMode?: boolean;
  pagePart?: 1 | 2; // For 2-page spreads (Part 1 or Part 2)
  totalPagesForArticle?: 1 | 2;
}

export const ArticleSpread: React.FC<ArticleSpreadProps> = ({
  article,
  project,
  theme,
  pageNumber,
  isPrintMode = false,
  pagePart = 1,
  totalPagesForArticle = article.pageSpan || 1,
}) => {
  const isWorkout = article.layoutTemplate === "workout-protocol";
  const isProductAd = article.layoutTemplate === "product-ad";
  const isFacilitySpotlight = article.layoutTemplate === "facility-spotlight";

  const protocol = article.workoutProtocol;
  const promo = article.productPromotion;
  const facility = article.facilitySpotlight;

  const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
  const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
  const isLight = Boolean(theme.isLight);

  // Dynamic Theme Colors
  const bgColor = isLight ? theme.bgLight : theme.bgDark;
  const textColor = theme.textColor;
  const textMutedColor = isLight ? "#475569" : "#94A3B8";
  const cardBg = theme.cardBg;
  const primaryColor = theme.primaryColor;
  const accentColor = theme.accentColor;
  const borderColor = theme.borderColor;
  const brandTitle = project.editorialInfo?.headerBrandTitle || project.title;

  const isTwoPage = totalPagesForArticle === 2;

  // Split content into clean paragraph chunks
  const allRawChunks = (article.content || "")
    .split("\n\n")
    .map((c) => c.trim())
    .filter(Boolean);

  // Character-balanced splitting for 2-page spreads to avoid overloading Part 1
  let pageChunks: string[] = [];
  if (isTwoPage) {
    if (allRawChunks.length <= 1) {
      pageChunks = pagePart === 1 ? allRawChunks : [];
    } else {
      const totalAllChars = allRawChunks.reduce((acc, c) => acc + c.length, 0);
      const targetHalf = totalAllChars / 2;
      let runningChars = 0;
      let splitIdx = 1;

      for (let i = 0; i < allRawChunks.length - 1; i++) {
        runningChars += allRawChunks[i].length;
        if (runningChars >= targetHalf) {
          const diffCurrent = Math.abs(runningChars - targetHalf);
          const diffPrev = Math.abs((runningChars - allRawChunks[i].length) - targetHalf);
          splitIdx = diffCurrent < diffPrev ? i + 1 : Math.max(1, i);
          break;
        }
        splitIdx = i + 1;
      }

      pageChunks = pagePart === 1 ? allRawChunks.slice(0, splitIdx) : allRawChunks.slice(splitIdx);
    }
  } else {
    pageChunks = allRawChunks;
  }

  const totalPageChars = pageChunks.reduce((sum, c) => sum + c.length, 0);
  const isDenseText = totalPageChars > 1150;
  const isMediumText = totalPageChars > 750;

  // Dynamic Text Density / Font Sizing based on explicit density AND real text volume
  const density = article.textDensity || "normal";
  const bodyTextSizeClass =
    density === "compact" || isDenseText
      ? "text-[9px] leading-tight sm:text-[9.5px] sm:leading-snug mb-1.5"
      : density === "spacious" && !isMediumText
      ? "text-[11.5px] leading-relaxed sm:text-[12px] sm:leading-relaxed mb-3"
      : isTwoPage && !isDenseText
      ? "text-[10px] leading-snug sm:text-[10.5px] sm:leading-snug mb-2"
      : "text-[10px] leading-snug sm:text-[10.5px] sm:leading-snug mb-2";

  // Helper to parse inline rich typography tokens (bold, italic, underline, mark, quotes)
  const renderInlineFormatted = (rawText: string) => {
    // Tokenize: ==highlight==, **bold**, <b>bold</b>, <u>underline</u>, __underline__, *italic*, <i>italic</i>, "quotes", “quotes”
    const tokenRegex = /(==[\s\S]+?==|<mark>[\s\S]+?<\/mark>|\*\*[\s\S]+?\*\*|<b>[\s\S]+?<\/b>|<u>[\s\S]+?<\/u>|__[\s\S]+?__|\*[\s\S]+?\*|<i>[\s\S]+?<\/i>|“[\s\S]+?”|"[^"]+?")/g;
    const parts = rawText.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // 1. Highlight / Marca-texto (==...== or <mark>...</mark>)
      if ((part.startsWith("==") && part.endsWith("==")) || (part.startsWith("<mark>") && part.endsWith("</mark>"))) {
        const inner = part.startsWith("==") ? part.slice(2, -2) : part.slice(6, -7);
        return (
          <mark
            key={index}
            className="px-1 py-0.5 rounded font-bold"
            style={{
              backgroundColor: `${primaryColor}40`,
              color: isLight ? "#0F172A" : "#FFFFFF",
              borderBottom: `2px solid ${primaryColor}`,
            }}
          >
            {inner}
          </mark>
        );
      }

      // 2. Bold (**...** or <b>...</b>)
      if ((part.startsWith("**") && part.endsWith("**")) || (part.startsWith("<b>") && part.endsWith("</b>"))) {
        const inner = part.startsWith("**") ? part.slice(2, -2) : part.slice(3, -4);
        return (
          <strong
            key={index}
            className="font-black"
            style={{ color: isLight ? "#000000" : "#FFFFFF" }}
          >
            {inner}
          </strong>
        );
      }

      // 3. Underline (<u>...</u> or __...__)
      if ((part.startsWith("<u>") && part.endsWith("</u>")) || (part.startsWith("__") && part.endsWith("__"))) {
        const inner = part.startsWith("<u>") ? part.slice(3, -4) : part.slice(2, -2);
        return (
          <span
            key={index}
            className="underline decoration-2 underline-offset-2 font-semibold"
            style={{ textDecorationColor: primaryColor }}
          >
            {inner}
          </span>
        );
      }

      // 4. Italic (*...* or <i>...</i>)
      if ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("<i>") && part.endsWith("</i>"))) {
        const inner = part.startsWith("*") ? part.slice(1, -1) : part.slice(3, -4);
        return (
          <em key={index} className="italic font-medium">
            {inner}
          </em>
        );
      }

      // 5. Quotes (“...” or "...")
      if ((part.startsWith("“") && part.endsWith("”")) || (part.startsWith('"') && part.endsWith('"'))) {
        const inner = part.slice(1, -1);
        return (
          <span key={index} className="italic font-bold" style={{ color: primaryColor }}>
            “{inner}”
          </span>
        );
      }

      return part;
    });
  };

  // Render individual paragraph chunks with markdown and rich formatting support
  const renderSingleChunk = (chunk: string, idx: number, isFirstOverall: boolean) => {
    // Standalone H2 / Subheaders (### or ##)
    if (chunk.startsWith("### ") || chunk.startsWith("## ")) {
      const cleanTitle = chunk.replace(/^#+\s*/, "");
      return (
        <div key={idx} className="mt-2 mb-1 pb-0.5 border-b break-inside-avoid break-inside-avoid-column" style={{ borderColor: `${primaryColor}50` }}>
          <h4
            className={`text-[10.5px] sm:text-[11px] font-black uppercase tracking-tight flex items-center gap-1 ${headlineFontClass}`}
            style={{ color: primaryColor }}
          >
            <span>//</span>
            <span>{cleanTitle}</span>
          </h4>
        </div>
      );
    }

    // Bullet points (- or •)
    if (chunk.startsWith("- ") || chunk.startsWith("• ")) {
      const items = chunk.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("• "));
      return (
        <ul key={idx} className={`my-1.5 space-y-1 ${bodyFontClass} break-inside-avoid break-inside-avoid-column`}>
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className={`flex items-start gap-1.5 leading-snug ${bodyTextSizeClass}`}>
              <span className="font-bold shrink-0" style={{ color: primaryColor }}>▸</span>
              <span style={{ color: isLight ? "#1E293B" : "#CBD5E1" }}>
                {renderInlineFormatted(item.replace(/^[-•]\s*/, ""))}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    // Bold title + paragraph block
    if (chunk.startsWith("**") && chunk.includes("**\n")) {
      const parts = chunk.split("**\n");
      const title = (parts[0] ?? "").replace(/\*\*/g, "");
      const body = parts.slice(1).join("\n");
      return (
        <div key={idx} className="my-1.5 break-inside-avoid break-inside-avoid-column">
          <h4
            className={`text-[10px] sm:text-[10.5px] font-black uppercase mb-0.5 ${headlineFontClass}`}
            style={{ color: primaryColor }}
          >
            // {title}
          </h4>
          <p
            className={`${bodyTextSizeClass} text-left leading-relaxed ${bodyFontClass}`}
            style={{ color: isLight ? "#1E293B" : "#CBD5E1" }}
          >
            {renderInlineFormatted(body)}
          </p>
        </div>
      );
    }

    const enableDropCap = isFirstOverall && pagePart === 1;
    return (
      <p
        key={idx}
        className={`${bodyTextSizeClass} text-left leading-relaxed ${bodyFontClass} break-inside-avoid break-inside-avoid-column ${
          enableDropCap
            ? "first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:leading-none"
            : ""
        }`}
        style={{ color: isLight ? "#1E293B" : "#CBD5E1" }}
      >
        {renderInlineFormatted(chunk)}
      </p>
    );
  };

  // Quote & Takeaways visibility
  const hasPullQuote = article.pullQuotes && article.pullQuotes.length > 0;
  const hasTakeaways = article.keyTakeaways && article.keyTakeaways.length > 0;
  const showQuoteOnThisPage = hasPullQuote && (!isTwoPage || pagePart === 2);
  const showTakeawaysOnThisPage = hasTakeaways && (!isTwoPage || pagePart === 2);

  // Hero Image layout styling
  const heroLayout = article.heroImageLayout || "banner";
  const showHeroImage = article.heroImage && heroLayout !== "hidden" && pagePart === 1;
  const showSecondaryImage = article.secondaryImage && isTwoPage && pagePart === 2;

  // Visual Spotlight for small articles (fills empty space dynamically)
  const isShortContent = pageChunks.length <= 5 && totalPageChars < 1150;
  const shouldShowArticleSpotlight =
    isShortContent &&
    (!showHeroImage || heroLayout === "compact" || heroLayout === "banner") &&
    (!isTwoPage || pagePart === 2 || !showHeroImage);

  const getContextualSpotlightImage = () => {
    if (article.bottomSpotlightImage) return article.bottomSpotlightImage;
    if (!isTwoPage && article.secondaryImage) return article.secondaryImage;

    const hero = article.heroImage || "";
    const textContent = (article.title + " " + (article.content || "")).toLowerCase();

    const pools = [
      {
        test: /\b(remo|rower|erg|cardio|aerób|nordic)\b/,
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      },
      {
        test: /\b(caloria|metab|gasto|massa|gordura|bioquím|nutri)\b/,
        url: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
      },
      {
        test: /\b(kettlebell|swing|mace|balístico|força)\b/,
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        test: /\b(mulher|femin|deadlift|levantar|terra)\b/,
        url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      },
      {
        test: /\b(mente|mindset|foco|disciplina|resiliência)\b/,
        url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      },
    ];

    for (const p of pools) {
      if (p.test.test(textContent) && p.url !== hero) {
        return p.url;
      }
    }

    const fallbacks = [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    ];
    return fallbacks.find((u) => u !== hero) || fallbacks[0];
  };

  const spotlightImageToUse = getContextualSpotlightImage();
  const spotlightCaptionToUse =
    article.bottomSpotlightCaption ||
    article.pullQuotes?.[0] ||
    article.subtitle ||
    "Protocolo de alto impacto • Laboratório de Performance Montanha.";

  return (
    <div
      className={`magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Subtle Industrial Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Top Header Block */}
      <div
        className="relative z-10 border-b-2 pb-1.5 flex items-center justify-between text-[10px] font-mono shrink-0"
        style={{ borderColor: primaryColor }}
      >
        <div className="flex items-center gap-2">
          <span className="font-black uppercase tracking-widest" style={{ color: primaryColor }}>
            {brandTitle}
          </span>
          <span className="opacity-40">/</span>
          <span
            className="text-[9px] font-mono font-black px-2 py-0.5 rounded uppercase"
            style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
          >
            {article.category || "MONTANHA DOSSIER"}
          </span>
          {isTwoPage && (
            <span className="font-mono text-[8.5px] font-bold opacity-75 hidden sm:inline">
              // PARTE {pagePart} DE 2
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 font-bold uppercase" style={{ color: textMutedColor }}>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" style={{ color: primaryColor }} />
            {article.estimatedReadTime} MIN DE LEITURA
          </span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
      </div>

      {/* Main Page Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-between my-2 overflow-hidden">
        {/* ----------------- 1. TEMPLATE: FULL-PAGE PRODUCT / GEAR AD ----------------- */}
        {isProductAd ? (
          <div className="flex-1 flex flex-col justify-between space-y-3">
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

            <div
              className="relative flex-1 min-h-[160px] sm:min-h-[190px] rounded-lg overflow-hidden border-2 shadow-xl group"
              style={{ borderColor: `${primaryColor}60` }}
            >
              <img
                src={promo?.productImage || article.heroImage}
                alt={promo?.productName || article.title}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div
                className="absolute top-3 right-3 px-3 py-1.5 rounded-sm shadow-lg font-mono font-black text-[10px] sm:text-xs uppercase tracking-tight flex items-center gap-1.5"
                style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>{promo?.promoBadgeText || "SPECIAL OFFER // 15% OFF"}</span>
              </div>

              <div className="absolute bottom-3 inset-x-4">
                <h3 className={`text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg ${headlineFontClass}`}>
                  {promo?.productName || article.title}
                </h3>
                <p className="text-xs text-amber-200/90 font-medium max-w-lg mt-0.5 leading-snug drop-shadow">
                  {promo?.productSubtitle || article.subtitle}
                </p>
              </div>
            </div>

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
                    className="w-full h-full object-cover filter contrast-125 brightness-90"
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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden">
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

                <div
                  className="p-2 rounded border"
                  style={{ backgroundColor: bgColor, borderColor: `${primaryColor}30` }}
                >
                  <p className="text-[8.5px] font-mono italic leading-tight" style={{ color: primaryColor }}>
                    "{facility?.anchoredQuote || "O ambiente certo torna a mediocridade insuportável."}"
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 flex flex-col justify-between space-y-2 overflow-hidden">
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-black uppercase tracking-tight leading-tight mb-2 ${headlineFontClass}`}
                    style={{ color: textColor }}
                  >
                    {article.title}
                  </h3>
                  <div className="space-y-1.5">
                    {pageChunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))}
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
                    className={`text-[9.5px] leading-tight mt-1.5 pt-1.5 border-t text-left ${bodyFontClass}`}
                    style={{ borderColor: `${primaryColor}20`, color: isLight ? "#334155" : "#94A3B8" }}
                  >
                    {ex.keyPoints}
                  </p>
                </div>
              ))}
            </div>

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
          /* ----------------- 4. TEMPLATE: EDITORIAL ARTICLE SPREAD ----------------- */
          <div className="flex-1 flex flex-col justify-between space-y-2.5 overflow-hidden">
            {/* Header Area (Part 1: Title, Subtitle, Author / Part 2: Continuing Header) */}
            {pagePart === 1 ? (
              <div className="shrink-0">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-[0.95] mb-1 ${headlineFontClass}`}
                  style={{ color: textColor }}
                >
                  {article.title}
                </h2>
                {article.subtitle && (
                  <p className={`text-[11px] sm:text-xs font-semibold leading-snug mb-1.5 ${bodyFontClass}`} style={{ color: primaryColor }}>
                    {article.subtitle}
                  </p>
                )}

                {/* Author Metadata Strip */}
                <div
                  className="flex items-center justify-between pt-1 border-t text-[8.5px] sm:text-[9px] font-mono"
                  style={{ borderColor: `${primaryColor}30`, color: textMutedColor }}
                >
                  <div className="flex items-center gap-2">
                    {article.authorPhoto ? (
                      <img
                        src={article.authorPhoto}
                        alt={article.author}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border"
                        style={{ borderColor: primaryColor }}
                      />
                    ) : (
                      <User className="w-3.5 h-3.5" style={{ color: primaryColor }} />
                    )}
                    <span className="font-bold uppercase" style={{ color: textColor }}>{article.author}</span>
                    {article.authorBio && <span>• {article.authorBio}</span>}
                  </div>
                  <span className="font-bold uppercase" style={{ color: primaryColor }}>{brandTitle} EDITORIAL</span>
                </div>
              </div>
            ) : (
              <div className="shrink-0 flex items-center justify-between border-b pb-1 text-xs font-mono font-black" style={{ borderColor: `${primaryColor}40` }}>
                <span className="uppercase text-amber-500">// {article.title} (PARTE 2 // CONCLUSÃO)</span>
                <span className="text-[9px] opacity-75 font-semibold uppercase">{article.author}</span>
              </div>
            )}

            {/* Hero Image (Part 1) */}
            {showHeroImage && (
              <div
                className={`relative w-full rounded-md overflow-hidden border shrink-0 shadow-xs ${
                  isTwoPage
                    ? isDenseText
                      ? "h-28 sm:h-32 md:h-36"
                      : "h-36 sm:h-44 md:h-48"
                    : heroLayout === "compact"
                    ? "h-20 sm:h-24"
                    : heroLayout === "contain"
                    ? "h-36 sm:h-44 bg-black/60"
                    : isShortContent
                    ? "h-32 sm:h-36 md:h-40"
                    : "h-24 sm:h-28"
                }`}
                style={{ borderColor: `${primaryColor}40` }}
              >
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className={`w-full h-full filter contrast-110 brightness-95 ${
                    heroLayout === "contain" ? "object-contain" : "object-cover"
                  }`}
                  style={{ objectPosition: article.heroImagePosition || "50% 50%" }}
                />
                {article.heroImageCaption && (
                  <div className="absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[7.5px] font-mono text-white">
                    {article.heroImageCaption}
                  </div>
                )}
              </div>
            )}

            {/* Secondary Image (Part 2 if available) */}
            {showSecondaryImage && (
              <div
                className="relative w-full h-36 sm:h-44 md:h-48 rounded-md overflow-hidden border shrink-0 shadow-xs"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <img
                  src={article.secondaryImage}
                  alt="Foto Secundária"
                  className="w-full h-full object-cover filter contrast-110 brightness-95"
                  style={{ objectPosition: article.secondaryImagePosition || "50% 50%" }}
                />
                {article.secondaryImageCaption && (
                  <div className="absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[7.5px] font-mono text-white">
                    {article.secondaryImageCaption}
                  </div>
                )}
              </div>
            )}

            {/* True Multi-Column Fluid Narrative Flow (Contínuo sem corte prematuro de coluna) */}
            <div
              className={`columns-1 sm:columns-2 gap-4 flex-1 text-justify overflow-hidden ${bodyFontClass}`}
              style={{
                columnFill: "auto",
              }}
            >
              {pageChunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))}
            </div>

            {/* Bottom Visual Spotlight (Acrescenta imagem exclusiva para artigos pequenos preenchendo o vazio escuro) */}
            {shouldShowArticleSpotlight && (
              <div
                className="relative w-full h-36 sm:h-44 md:h-48 rounded-lg overflow-hidden border shrink-0 mt-2 shadow-md group"
                style={{ borderColor: `${primaryColor}50` }}
              >
                <img
                  src={spotlightImageToUse}
                  alt={article.title}
                  className="w-full h-full object-cover filter contrast-115 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: article.bottomSpotlightPosition || "50% 50%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[7.5px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                    >
                      // VISUAL SPOTLIGHT
                    </span>
                    <span className="text-[8px] font-mono uppercase text-slate-300">
                      REGISTRO EDITORIAL • {project.title}
                    </span>
                  </div>
                  {spotlightCaptionToUse && (
                    <p className="text-[10px] sm:text-xs font-bold text-white mt-1 italic line-clamp-1">
                      "{spotlightCaptionToUse}"
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Inset: Pull Quote & Key Takeaways AT THE END OF THE ARTICLE */}
            {(showQuoteOnThisPage || showTakeawaysOnThisPage) && (
              <div className="shrink-0 space-y-2 pt-1 border-t" style={{ borderColor: `${primaryColor}30` }}>
                {/* Pull Quote placed cleanly at the end/conclusion of article */}
                {showQuoteOnThisPage && (
                  <div
                    className="p-2.5 rounded-lg border shadow-xs flex items-center gap-3"
                    style={{ backgroundColor: cardBg, borderColor: primaryColor }}
                  >
                    <Quote className="w-5 h-5 shrink-0" style={{ color: primaryColor }} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-[11px] sm:text-xs font-black italic leading-snug ${headlineFontClass}`} style={{ color: primaryColor }}>
                        "{article.pullQuotes![0]}"
                      </p>
                      <span className="text-[7.5px] font-mono uppercase block text-right mt-0.5" style={{ color: textMutedColor }}>
                        — {article.author}
                      </span>
                    </div>
                  </div>
                )}

                {/* Key Takeaways Box (if available) */}
                {showTakeawaysOnThisPage && (
                  <div
                    className="p-2 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    style={{ backgroundColor: cardBg, borderColor: `${primaryColor}40` }}
                  >
                    <div className="flex items-center gap-1 text-[8.5px] font-mono font-black uppercase shrink-0" style={{ color: primaryColor }}>
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>PONTOS-CHAVE:</span>
                    </div>
                    <ul className={`text-[9px] flex flex-wrap gap-x-3 gap-y-1 ${bodyFontClass}`} style={{ color: isLight ? "#334155" : "#CBD5E1" }}>
                      {article.keyTakeaways!.slice(0, 3).map((takeaway, idx) => (
                        <li key={idx} className="flex items-center gap-1 leading-tight">
                          <span style={{ color: primaryColor }}>▸</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Page Footer Bar */}
      <div
        className="relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0"
        style={{ borderColor: `${primaryColor}40`, color: textMutedColor }}
      >
        <div className="flex items-center gap-2">
          <span>{project.title} • {project.coverConfig?.editionNumber || project.editionNumber ? `ED. #${project.coverConfig?.editionNumber || project.editionNumber}` : "ED. #01"}</span>
          {isTwoPage && pagePart === 1 && (
            <span className="text-amber-500 font-black animate-pulse">
              (CONTINUA NA PÁGINA {formatPageNumber(pageNumber + 1)} ▸)
            </span>
          )}
        </div>
        <span
          className="px-2 py-0.5 rounded border font-bold"
          style={{ backgroundColor: cardBg, color: primaryColor, borderColor: `${primaryColor}60` }}
        >
          PÁGINA {formatPageNumber(pageNumber)}
        </span>
      </div>
    </div>
  );
};
