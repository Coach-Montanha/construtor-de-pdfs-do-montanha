import React from "react";
import { Article, MagazineProject, MagazineTheme } from "../../types/magazine";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { formatPageNumber, getEffectiveArticlePageSpan, MANUAL_PAGE_BREAK_REGEX } from "../../lib/magazine-utils";
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
  pagePart?: number; // For multi-page spreads
  totalPagesForArticle?: number;
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

  const effectiveTotalPages = Math.max(
    totalPagesForArticle || 1,
    getEffectiveArticlePageSpan(article)
  );

  const isMultiPage = effectiveTotalPages > 1;
  const isFirstPage = pagePart === 1;
  const isLastPage = pagePart === effectiveTotalPages;
  const isIntermediatePage = pagePart > 1 && pagePart < effectiveTotalPages;

  // Split content into clean paragraph chunks
  const hasManualSplit = MANUAL_PAGE_BREAK_REGEX.test(article.content || "");
  const cleanRawContent = (article.content || "").replace(MANUAL_PAGE_BREAK_REGEX, "\n\n");
  const allRawChunks = cleanRawContent
    .split("\n\n")
    .map((c) => c.trim())
    .filter(Boolean);

  // Hero Image layout styling (needed early to calculate available text capacity)
  const heroLayout = article.heroImageLayout || "banner";
  const heroSize = article.heroImageHeight || "large";
  const showHeroImage = Boolean(article.heroImage && heroLayout !== "hidden" && isFirstPage);
  const secondaryPlacement = article.secondaryImagePlacement || "bottom";
  const showSecondaryImageTop = Boolean(article.secondaryImage && isMultiPage && isLastPage && secondaryPlacement === "top");

  // Determine page chunks (Manual diagramming has 100% precedence, otherwise balanced proportional packing)
  let pageChunks: string[] = [];
  if (effectiveTotalPages > 1) {
    if (hasManualSplit) {
      const parts = (article.content || "").split(MANUAL_PAGE_BREAK_REGEX);
      const targetContent = parts[pagePart - 1] || "";
      pageChunks = targetContent
        .split("\n\n")
        .map((c) => c.trim())
        .filter(Boolean);
    } else if (allRawChunks.length <= 1) {
      pageChunks = isFirstPage ? allRawChunks : [];
    } else {
      const N = effectiveTotalPages;
      const totalAllChars = allRawChunks.reduce((acc, c) => acc + c.length, 0);

      // Balanced proportional distribution:
      // Page 1 with majestic hero banner has capacity 0.9 (~1.400 chars)
      // Intermediate pages (100% clean full-height text columns without bottom image) have capacity 1.8 (~2.800-3.200 chars)
      // Final page (with closing photo + takeaways) has capacity 1.0 (~1.600 chars)
      const pageWeights: number[] = [];
      for (let p = 0; p < N; p++) {
        if (p === 0) {
          pageWeights.push(showHeroImage ? 0.9 : 1.5);
        } else if (p === N - 1) {
          pageWeights.push(1.0);
        } else {
          pageWeights.push(1.8);
        }
      }
      const sumWeights = pageWeights.reduce((a, b) => a + b, 0);

      // Distribute chunks so each page gets its proportional target:
      const pageSlices: string[][] = Array.from({ length: N }, () => []);
      let currentSlice = 0;
      let currentSliceChars = 0;
      let targetCumulative = (pageWeights[0]! / sumWeights) * totalAllChars;

      for (let i = 0; i < allRawChunks.length; i++) {
        const chunk = allRawChunks[i]!;
        const remainingChunks = allRawChunks.length - i;
        const remainingPages = N - currentSlice;

        // Ensure each remaining page gets at least 1 chunk
        const mustAdvanceForPages = remainingChunks < remainingPages && currentSlice < N - 1;

        // Advance if current slice has reached its proportional target and we have pages left
        const hasReachedTarget =
          currentSlice < N - 1 &&
          pageSlices[currentSlice]!.length > 0 &&
          currentSliceChars + chunk.length > targetCumulative;

        if (mustAdvanceForPages || hasReachedTarget) {
          // Avoid leaving an orphaned heading (###, ##, or //) at the bottom of the page
          const lastAdded = pageSlices[currentSlice]![pageSlices[currentSlice]!.length - 1];
          if (
            lastAdded &&
            (lastAdded.match(/^#{1,4}\s/) || lastAdded.startsWith("//")) &&
            pageSlices[currentSlice]!.length > 1
          ) {
            pageSlices[currentSlice]!.pop();
            currentSlice++;
            pageSlices[currentSlice] = [lastAdded, chunk];
            currentSliceChars = lastAdded.length + chunk.length;
            targetCumulative += (pageWeights[currentSlice]! / sumWeights) * totalAllChars;
            continue;
          }

          currentSlice++;
          currentSliceChars = 0;
          targetCumulative += (pageWeights[currentSlice]! / sumWeights) * totalAllChars;
        }

        pageSlices[currentSlice]!.push(chunk);
        currentSliceChars += chunk.length;
      }

      pageChunks = pageSlices[(pagePart ?? 1) - 1] || [];
    }
  } else {
    pageChunks = allRawChunks;
  }

  const totalPageChars = pageChunks.reduce((sum, c) => sum + c.length, 0);
  const isExtremeDenseText = totalPageChars > 2500;
  const isVeryDenseText = totalPageChars > 1800;
  const isDenseText = totalPageChars > 1300;
  const isShortPageText = totalPageChars < 850;

  // Dynamic Text Density / Font Sizing based on explicit density AND real text volume
  const density = article.textDensity || "normal";
  const bodyTextSizeClass =
    density === "compact" || isExtremeDenseText
      ? "text-[8.5px] leading-[1.38] sm:text-[9px] sm:leading-[1.42] mb-1.5"
      : isVeryDenseText
      ? "text-[9.5px] leading-[1.5] sm:text-[10px] sm:leading-[1.5] mb-2"
      : density === "spacious" || isShortPageText
      ? "text-[12px] leading-[1.75] sm:text-[12.5px] sm:leading-[1.75] mb-3.5"
      : isDenseText
      ? "text-[10.5px] leading-[1.6] sm:text-[11px] sm:leading-[1.6] mb-2.5"
      : "text-[11px] leading-[1.65] sm:text-[11.5px] sm:leading-[1.65] mb-2.5";

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
    // Standalone Headings (###, ##, # with or without space, ex: "###Objetivo do treino.")
    const headingMatch = chunk.match(/^#{1,4}\s*(.*)/);
    if (headingMatch && headingMatch[1]?.trim()) {
      const cleanTitle = headingMatch[1].replace(/[*_#]/g, "").trim();
      return (
        <div key={idx} className="mt-3 mb-1.5 pb-1 border-b break-inside-avoid break-inside-avoid-column flex items-center gap-1.5" style={{ borderColor: `${primaryColor}40` }}>
          <span className="text-[9px] font-mono font-black" style={{ color: primaryColor }}>//</span>
          <h4
            className={`text-[11px] sm:text-[11.5px] font-black uppercase tracking-wide ${headlineFontClass}`}
            style={{ color: primaryColor }}
          >
            {cleanTitle}
          </h4>
        </div>
      );
    }

    // Section Tags or Uppercase Subheaders starting with "//" (ex: "// POR QUE O REMO FUNCIONA?" ou "// CONCLUSÃO.")
    if (chunk.startsWith("//")) {
      const cleanTitle = chunk.replace(/^\/+\s*/, "").replace(/[*_]/g, "").trim();
      return (
        <div key={idx} className="mt-3 mb-1.5 pb-0.5 border-b break-inside-avoid break-inside-avoid-column flex items-center gap-1.5" style={{ borderColor: `${primaryColor}40` }}>
          <span className="text-[7.5px] font-mono font-black uppercase px-1.5 py-0.5 rounded" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
            // SEÇÃO
          </span>
          <h4
            className={`text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider ${headlineFontClass}`}
            style={{ color: primaryColor }}
          >
            {cleanTitle}
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

  // Quote & Takeaways visibility (always at the very end of the article)
  const hasPullQuote = Boolean(article.pullQuotes && article.pullQuotes.length > 0 && article.pullQuotes[0]?.trim());
  const hasTakeaways = Boolean(article.keyTakeaways && article.keyTakeaways.length > 0 && article.keyTakeaways.some(t => t.trim()));
  const showQuoteOnThisPage = hasPullQuote && isLastPage;
  const showTakeawaysOnThisPage = hasTakeaways && isLastPage;

  // Permissão explícita para o usuário remover ou desativar a imagem final do artigo:
  const isClosingImageExplicitlyDisabled = article.showClosingImage === false;

  const heroImg = article.heroImage || "";
  const configuredClosingImage =
    (article.secondaryImage && article.secondaryImage !== heroImg ? article.secondaryImage : "") ||
    (article.bottomSpotlightImage && article.bottomSpotlightImage !== heroImg ? article.bottomSpotlightImage : "");

  const hasUserConfiguredClosingImage = Boolean(configuredClosingImage);

  // Apenas a ÚLTIMA página recebe a imagem de fechamento editorial se:
  // 1. O usuário NÃO desativou a imagem final (article.showClosingImage !== false)
  // 2. Não está com foto secundária no topo
  // 3. Em matérias de 1 página: apenas se o texto for curto (< 1.400 caracteres) E o usuário configurou imagem.
  //    Se o texto for denso (ex: 3.200 caracteres), NUNCA força imagem final para liberar 100% da altura para o texto!
  const showClosingImage =
    !isClosingImageExplicitlyDisabled &&
    !showSecondaryImageTop &&
    (isMultiPage
      ? isLastPage
      : (totalPageChars < 1400 && hasUserConfiguredClosingImage));

  const getContextualSpotlightImage = () => {
    const hero = article.heroImage || "";
    // Garantir que a imagem de fechamento nunca seja idêntica à imagem de abertura (evita repetição)
    if (article.secondaryImage && article.secondaryImage !== hero) return article.secondaryImage;
    if (article.bottomSpotlightImage && article.bottomSpotlightImage !== hero) return article.bottomSpotlightImage;

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

  const getClosingPhotoUrl = (): string => {
    if (configuredClosingImage) return configuredClosingImage;
    // Em artigos multi-página, usa fallback temático apenas se a imagem final estiver habilitada
    if (isMultiPage && !isClosingImageExplicitlyDisabled) {
      return getContextualSpotlightImage();
    }
    return "";
  };

  const finalClosingPhotoUrl = getClosingPhotoUrl();
  const hasBottomFeature = showClosingImage && Boolean(finalClosingPhotoUrl);
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
      {/* Background Subtle Industrial Texture or Clean Controlled-Opacity Image */}
      {article.backgroundImage ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={article.backgroundImage}
            alt=""
            className="w-full h-full object-cover filter contrast-125 grayscale"
            style={{ opacity: (article.backgroundOpacity ?? 5) / 100 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70 pointer-events-none" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      )}

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
          {isMultiPage && (
            <span className="font-mono text-[8.5px] font-bold opacity-75 hidden sm:inline">
              // PARTE {pagePart} DE {totalPagesForArticle}
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
          <div className="flex-1 flex flex-col justify-start space-y-2.5 overflow-hidden min-h-0">
            {/* Header Area (Part 1: Title, Subtitle, Author / Part 2+: Continuing Header) */}
            {isFirstPage ? (
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
                <span className="uppercase text-amber-500">
                  // {article.title} ({isLastPage ? `PARTE ${pagePart} // CONCLUSÃO` : `PARTE ${pagePart} // CONTINUAÇÃO`})
                </span>
                <span className="text-[9px] opacity-75 font-semibold uppercase">{article.author}</span>
              </div>
            )}

            {/* Hero Image (Part 1 or Single Page): Imagem inicial imponente e cinematográfica */}
            {showHeroImage && (
              <div
                className={`relative w-full rounded-md overflow-hidden border shrink-0 shadow-md ${
                  heroLayout === "contain"
                    ? "h-56 sm:h-64 md:h-72 bg-black/60"
                    : heroSize === "compact"
                    ? "h-36 sm:h-44 md:h-48"
                    : heroSize === "medium"
                    ? "h-52 sm:h-60 md:h-68"
                    : "h-64 sm:h-72 md:h-80 lg:h-96"
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

            {/* Secondary Image (at Top, only if explicitly chosen) */}
            {showSecondaryImageTop && (
              <div
                className="relative w-full h-40 sm:h-48 rounded-md overflow-hidden border shrink-0 shadow-xs"
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

            {/* Multi-Column Fluid Narrative Flow (Equilibrado e alinhado à esquerda sem distorção) */}
            <div
              className={`columns-1 sm:columns-2 gap-5 text-left min-h-0 overflow-hidden ${bodyFontClass} ${
                hasBottomFeature ? "shrink-0 max-h-[50%] sm:max-h-[54%]" : "flex-1"
              }`}
              style={{
                columnFill: "balance",
              }}
            >
              {pageChunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))}
            </div>

            {/* Imagem Editorial de Fechamento da Página Final (Opcional - pode ser removida pelo usuário para liberar espaço) */}
            {hasBottomFeature && finalClosingPhotoUrl && (
              <div
                className={`relative w-full rounded-md overflow-hidden border shrink-0 shadow-md group mt-2 flex-1 ${
                  isVeryDenseText
                    ? "min-h-[140px] sm:min-h-[160px]"
                    : isDenseText
                    ? "min-h-[160px] sm:min-h-[190px]"
                    : "min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"
                }`}
                style={{ borderColor: `${primaryColor}40` }}
              >
                <img
                  src={finalClosingPhotoUrl}
                  alt="Foto Editorial de Fechamento"
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: article.secondaryImagePosition || article.bottomSpotlightPosition || "50% 50%" }}
                />
                {/* Faixa protetora de contraste com fundo sólido translúcido ao fundo do texto */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                  <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className="text-[7.5px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm"
                        style={{ backgroundColor: primaryColor, color: isLight ? "#FFFFFF" : "#000000" }}
                      >
                        // REGISTRO DE PERFORMANCE
                      </span>
                      <span className="text-[8px] font-mono uppercase text-slate-300 hidden sm:inline">
                        • {article.category}
                      </span>
                    </div>
                    {(article.secondaryImageCaption || article.bottomSpotlightCaption || spotlightCaptionToUse) && (
                      <span className="text-[8.5px] font-mono italic text-slate-100 line-clamp-1 max-w-[65%] text-right font-medium">
                        "{article.secondaryImageCaption || article.bottomSpotlightCaption || spotlightCaptionToUse}"
                      </span>
                    )}
                  </div>
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
          {isMultiPage && !isLastPage && (
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
