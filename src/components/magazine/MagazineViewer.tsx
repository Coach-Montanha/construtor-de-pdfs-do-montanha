import React, { useState, useEffect } from "react";
import { MagazineProject, MagazineTheme, PageViewMode } from "../../types/magazine";
import { CoverPage } from "./CoverPage";
import { EditorLetterPage } from "./EditorLetterPage";
import { ContributorsPage } from "./ContributorsPage";
import { EditorialPage } from "./EditorialPage";
import { ArticleSpread } from "./ArticleSpread";
import { BackCoverPage } from "./BackCoverPage";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  LayoutGrid,
  BookOpen,
  FileText,
  Printer,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";

interface MagazineViewerProps {
  project: MagazineProject;
  theme: MagazineTheme;
  onOpenExportModal: () => void;
  onOpenArticleEditor?: (articleId: string) => void;
}

export const MagazineViewer: React.FC<MagazineViewerProps> = ({
  project,
  theme,
  onOpenExportModal,
  onOpenArticleEditor,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<PageViewMode>("spread");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Total pages: Cover (1) + EditorLetter (1) + Contributors (1) + TOC (1) + Articles (N) + BackCover (1)
  const totalPages = 4 + project.articles.length;

  // Build the array of pages
  const renderPageByIndex = (index: number, isPrint = false) => {
    if (index === 0) {
      return <CoverPage project={project} theme={theme} isPrintMode={isPrint} />;
    }
    if (index === 1) {
      return (
        <EditorLetterPage
          project={project}
          theme={theme}
          pageNumber={2}
          isPrintMode={isPrint}
        />
      );
    }
    if (index === 2) {
      return (
        <ContributorsPage
          project={project}
          theme={theme}
          pageNumber={3}
          isPrintMode={isPrint}
        />
      );
    }
    if (index === 3) {
      return (
        <EditorialPage
          project={project}
          theme={theme}
          pageNumber={4}
          isPrintMode={isPrint}
        />
      );
    }
    if (index >= 4 && index < totalPages - 1) {
      const articleIdx = index - 4;
      const article = project.articles[articleIdx];
      return (
        <ArticleSpread
          key={article?.id || index}
          article={article}
          project={project}
          theme={theme}
          pageNumber={index + 1}
          isPrintMode={isPrint}
        />
      );
    }
    // Back Cover
    return (
      <BackCoverPage
        project={project}
        theme={theme}
        pageNumber={totalPages}
        isPrintMode={isPrint}
      />
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPageIndex, viewMode, totalPages]);

  const nextPage = () => {
    if (viewMode === "spread") {
      if (currentPageIndex === 0) {
        setCurrentPageIndex(1);
      } else {
        setCurrentPageIndex((prev) => Math.min(prev + 2, totalPages - 1));
      }
    } else {
      setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
    }
  };

  const prevPage = () => {
    if (viewMode === "spread") {
      if (currentPageIndex <= 1) {
        setCurrentPageIndex(0);
      } else {
        setCurrentPageIndex((prev) => Math.max(prev - 2, 0));
      }
    } else {
      setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Controls Toolbar */}
      <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Magazine info & View Mode Selector */}
        <div className="flex items-center gap-2">
          <span className="font-black text-xs text-amber-400 uppercase tracking-widest hidden sm:inline">
            {project.title}
          </span>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />

          {/* Mode Switchers */}
          <div className="flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setViewMode("spread")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                viewMode === "spread"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Modo Revista Aberta (Spread 2 Páginas)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Revista Aberta</span>
            </button>
            <button
              onClick={() => setViewMode("single")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                viewMode === "single"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Modo Página Individual"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Página Única</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                viewMode === "grid"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Ver Todas as Páginas"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Grade</span>
            </button>
          </div>
        </div>

        {/* Center: Pagination & Nav */}
        {viewMode !== "grid" && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPageIndex === 0}
              className="h-8 px-2 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs font-mono font-bold text-amber-400 px-2 bg-slate-900 border border-slate-800 rounded py-1">
              {viewMode === "spread" && currentPageIndex > 0 && currentPageIndex < totalPages - 1
                ? `Pág ${currentPageIndex + 1} - ${Math.min(currentPageIndex + 2, totalPages)} de ${totalPages}`
                : `Pág ${currentPageIndex + 1} de ${totalPages}`}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPageIndex >= totalPages - 1}
              className="h-8 px-2 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Right: Zoom & Export Button */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700 text-xs">
            <button
              onClick={() => setZoomLevel((z) => Math.max(60, z - 10))}
              className="p-1 text-slate-400 hover:text-white"
              title="Reduzir Zoom"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] text-slate-300 w-9 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              className="p-1 text-slate-400 hover:text-white"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <Button
            size="sm"
            onClick={onOpenExportModal}
            className="h-8 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/10 flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF</span>
          </Button>
        </div>
      </div>

      {/* Main Canvas Viewport */}
      <div className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center bg-slate-950/60 custom-scrollbar">
        {viewMode === "grid" ? (
          /* Grid Mode: Thumbnails of all pages */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentPageIndex(idx);
                  setViewMode("single");
                }}
                className={`group cursor-pointer rounded-lg overflow-hidden border-2 transition-all transform hover:scale-105 ${
                  currentPageIndex === idx
                    ? "border-amber-400 shadow-xl shadow-amber-500/20"
                    : "border-slate-800 hover:border-slate-600"
                }`}
              >
                <div className="relative aspect-[210/297] bg-slate-900 pointer-events-none transform scale-100 origin-top">
                  {renderPageByIndex(idx)}
                </div>
                <div className="bg-slate-900 p-2 text-center text-xs font-bold text-slate-300 group-hover:text-amber-400">
                  {idx === 0
                    ? "1. Capa Principal"
                    : idx === 1
                    ? "2. Carta do Editor"
                    : idx === 2
                    ? "3. Colaboradores"
                    : idx === 3
                    ? "4. Sumário / Índice"
                    : idx === totalPages - 1
                    ? `${totalPages}. Contracapa`
                    : `${idx + 1}. Artigo ${idx - 3}`}
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === "spread" ? (
          /* Spread Mode: 2 Pages side-by-side like a real magazine */
          <div
            className="flex items-center justify-center gap-2 max-w-full transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center center" }}
          >
            {currentPageIndex === 0 ? (
              /* Cover is displayed alone */
              <div className="w-[380px] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0 shadow-2xl">
                {renderPageByIndex(0)}
              </div>
            ) : currentPageIndex === totalPages - 1 ? (
              /* Back Cover is displayed alone */
              <div className="w-[380px] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0 shadow-2xl">
                {renderPageByIndex(totalPages - 1)}
              </div>
            ) : (
              /* 2 Pages Spread */
              <div className="flex flex-col md:flex-row items-center gap-1 shadow-2xl">
                <div className="w-[320px] sm:w-[400px] md:w-[460px] lg:w-[520px] shrink-0 border-r border-slate-300">
                  {renderPageByIndex(currentPageIndex)}
                </div>
                {currentPageIndex + 1 < totalPages && (
                  <div className="w-[320px] sm:w-[400px] md:w-[460px] lg:w-[520px] shrink-0 border-l border-slate-300">
                    {renderPageByIndex(currentPageIndex + 1)}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Single Page Mode */
          <div
            className="w-[380px] sm:w-[480px] md:w-[560px] lg:w-[640px] shrink-0 transition-transform duration-200 shadow-2xl"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center center" }}
          >
            {renderPageByIndex(currentPageIndex)}
          </div>
        )}
      </div>

      {/* Bottom Floating Quick Tips */}
      <div className="bg-slate-950 px-4 py-2 text-[11px] text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Use as setas do teclado (← / →) para folhear a revista.</span>
        </div>
        <span className="font-mono text-[10px] text-slate-500">
          Proporção Exata A4 (210mm x 297mm)
        </span>
      </div>
    </div>
  );
};
