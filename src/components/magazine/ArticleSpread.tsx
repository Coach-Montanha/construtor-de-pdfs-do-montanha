import React from "react";
import { Article, MagazineProject, MagazineTheme } from "../../types/magazine";
import { Quote, Clock, CheckCircle2, Lightbulb, User } from "lucide-react";

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
  // Parse content into formatted paragraphs and headers
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((chunk, idx) => {
      // Check if it's a section header like **Title** or ### Title
      if (chunk.startsWith("### ") || chunk.startsWith("## ")) {
        const cleanTitle = chunk.replace(/^#+\s*/, "");
        return (
          <h4
            key={idx}
            className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight uppercase mt-4 mb-1.5 border-b border-amber-500/30 pb-0.5"
            style={{ color: theme.fontSerif ? "#1E293B" : theme.primaryColor }}
          >
            {cleanTitle}
          </h4>
        );
      }

      if (chunk.startsWith("**") && chunk.includes("**\n")) {
        const parts = chunk.split("**\n");
        const title = parts[0].replace(/\*\*/g, "");
        const body = parts.slice(1).join("\n");
        return (
          <div key={idx} className="my-2.5">
            <h4
              className="text-xs sm:text-sm font-bold text-slate-900 uppercase mb-1"
              style={{ color: theme.fontSerif ? "#0F172A" : theme.primaryColor }}
            >
              {title}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {body}
            </p>
          </div>
        );
      }

      const isFirst = idx === 0;
      return (
        <p
          key={idx}
          className={`text-xs text-slate-700 leading-relaxed text-justify mb-3 ${
            isFirst
              ? "first-letter:text-4xl first-letter:font-black first-letter:text-amber-500 first-letter:float-left first-letter:mr-2.5 first-letter:leading-none"
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
      className={`magazine-page relative w-full h-full bg-white text-slate-900 overflow-hidden flex flex-col justify-between p-7 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Top Editorial Header Bar */}
      <div className="border-b pb-2 flex items-center justify-between" style={{ borderColor: theme.primaryColor }}>
        <div className="flex items-center gap-2">
          <span className="font-black tracking-wider text-xs uppercase" style={{ color: theme.primaryColor }}>
            {project.coverConfig.mastheadText}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            {article.category}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold uppercase">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            {article.estimatedReadTime} min de leitura
          </span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
      </div>

      {/* Main Article Content depending on template */}
      <div className="flex-1 flex flex-col justify-between my-3 overflow-hidden">
        {/* Article Headline & Header */}
        <div className="mb-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight uppercase leading-none">
            {article.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug mt-1 border-l-2 border-amber-500 pl-2">
            {article.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100 text-[11px]">
            <div className="flex items-center gap-2">
              {article.authorPhoto ? (
                <img
                  src={article.authorPhoto}
                  alt={article.author}
                  className="w-6 h-6 rounded-full object-cover border border-amber-500"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-slate-600" />
                </div>
              )}
              <div>
                <span className="font-bold text-slate-900">Por {article.author}</span>
                {article.authorBio && (
                  <span className="text-slate-400 text-[10px] ml-1.5 hidden sm:inline">
                    • {article.authorBio}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Banner with Caption */}
        {article.heroImage && (
          <div className="relative w-full h-36 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 border border-slate-200 group">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
            {article.heroImageCaption && (
              <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm text-white text-[9px] px-3 py-1 flex items-center justify-between">
                <span>{article.heroImageCaption}</span>
                <span className="text-slate-400 text-[8px]">Foto: Montanha Editorial</span>
              </div>
            )}
          </div>
        )}

        {/* Content Body Grid according to Template */}
        {article.layoutTemplate === "editorial-lead" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
            <div className="md:col-span-8 text-justify columns-1 sm:columns-2 gap-3">
              {renderParagraphs(article.content)}
            </div>

            {/* Sidebar with Pull Quote & Callout */}
            <div className="md:col-span-4 flex flex-col justify-between border-l border-slate-200 pl-3">
              {article.pullQuotes.length > 0 && (
                <div className="bg-amber-500/10 border-l-4 border-amber-500 p-3 rounded-r-md my-1">
                  <Quote className="w-5 h-5 text-amber-500 mb-1" />
                  <p className="text-xs font-bold text-slate-900 italic leading-snug">
                    "{article.pullQuotes[0]}"
                  </p>
                </div>
              )}

              {article.calloutBox && (
                <div className="bg-slate-900 text-white p-3 rounded-md border border-slate-800 my-1">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 uppercase mb-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{article.calloutBox.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {article.calloutBox.content}
                  </p>
                </div>
              )}

              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="border border-slate-200 p-2.5 rounded-md bg-slate-50">
                  <span className="text-[9px] font-bold text-slate-800 uppercase block mb-1">
                    Pontos Fundamentais:
                  </span>
                  <ul className="space-y-1 text-[10px] text-slate-600">
                    {article.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {article.layoutTemplate === "two-column-quote" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            <div className="text-justify">
              {renderParagraphs(article.content.split("\n\n").slice(0, 3).join("\n\n"))}
              {article.pullQuotes.length > 0 && (
                <div className="my-3 border-y-2 border-amber-500 py-2.5 text-center px-4 bg-amber-50/50">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 italic">
                    "{article.pullQuotes[0]}"
                  </p>
                </div>
              )}
            </div>
            <div className="text-justify flex flex-col justify-between">
              <div>
                {renderParagraphs(article.content.split("\n\n").slice(3).join("\n\n"))}
              </div>
              {article.calloutBox && (
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-300">
                  <h5 className="font-bold text-xs text-slate-900 uppercase mb-1">
                    {article.calloutBox.title}
                  </h5>
                  <p className="text-[11px] text-slate-700 leading-snug">
                    {article.calloutBox.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {article.layoutTemplate === "infographic-tips" && (
          <div className="flex-1 flex flex-col justify-between">
            <div className="text-justify mb-2">
              {renderParagraphs(article.content)}
            </div>

            {/* Infographic Tip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-2">
              {(article.keyTakeaways || []).map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 text-white p-2.5 rounded-md border-t-2 flex flex-col justify-between"
                  style={{ borderColor: theme.primaryColor }}
                >
                  <div className="flex items-center justify-between text-amber-400 text-xs font-black mb-1">
                    <span>PASSO 0{idx + 1}</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[11px] text-slate-200 leading-snug">
                    {tip}
                  </p>
                </div>
              ))}
            </div>

            {article.pullQuotes.length > 0 && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-2 text-center">
                <p className="text-xs font-bold text-slate-900 italic">
                  "{article.pullQuotes[0]}"
                </p>
              </div>
            )}
          </div>
        )}

        {/* Fallback layout for other templates */}
        {article.layoutTemplate !== "editorial-lead" &&
          article.layoutTemplate !== "two-column-quote" &&
          article.layoutTemplate !== "infographic-tips" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 text-justify">
              <div>{renderParagraphs(article.content)}</div>
              <div className="flex flex-col justify-between">
                {article.pullQuotes.map((q, idx) => (
                  <div key={idx} className="bg-slate-100 p-3 rounded border-l-4 border-amber-500 my-1">
                    <p className="text-xs font-bold italic text-slate-900">"{q}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>

      {/* Bottom Footer & Page Number */}
      <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase">
        <span>{project.title} • {article.category}</span>
        <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
          PÁGINA {pageNumber}
        </span>
      </div>
    </div>
  );
};
