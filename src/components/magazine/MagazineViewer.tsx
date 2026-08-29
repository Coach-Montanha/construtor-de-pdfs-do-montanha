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
  const [viewMode, setViewMode] = useState<PageViewMode>("single");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Dynamic active page visibility
  const visibility = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false, // Default false
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  interface PageItem {
    id: string;
    title: string;
    render: (pageNumber: number, isPrint?: boolean) => React.ReactNode;
  }

  const activePages: PageItem[] = [];

  if (visibility.showCover) {
    activePages.push({
      id: "cover",
      title: "Capa Principal",
      render: (_, isPrint) => <CoverPage project={project} theme={theme} isPrintMode={isPrint} />,
    });
  }

  if (visibility.showEditorLetter) {
    activePages.push({
      id: "editor-letter",
      title: "Carta do Editor",
      render: (pNum, isPrint) => (
        <EditorLetterPage project={project} theme={theme} pageNumber={pNum} isPrintMode={isPrint} />
      ),
    });
  }

  if (visibility.showContributors) {
    activePages.push({
      id: "contributors",
      title: "Colaboradores",
      render: (pNum, isPrint) => (
        <ContributorsPage project={project} theme={theme} pageNumber={pNum} isPrintMode={isPrint} />
      ),
    });
  }

  if (visibility.showTableOfContents) {
    activePages.push({
      id: "toc",
      title: "Sumário / Índice",
      render: (pNum, isPrint) => (
        <EditorialPage project={project} theme={theme} pageNumber={pNum} isPrintMode={isPrint} />
      ),
    });
  }

  project.articles
    .filter((art) => art.enabled !== false)
    .forEach((art) => {
      activePages.push({
        id: art.id,
        title: art.title,
        render: (pNum, isPrint) => (
          <ArticleSpread
            key={art.id}
            article={art}
            project={project}
            theme={theme}
            pageNumber={pNum}
            isPrintMode={isPrint}
          />
        ),
      });
    });

  if (visibility.showBackCover) {
    activePages.push({
      id: "back-cover",
      title: "Contracapa",
      render: (pNum, isPrint) => (
        <BackCoverPage project={project} theme={theme} pageNumber={pNum} isPrintMode={isPrint} />
      ),
    });
  }

  const totalPages = Math.max(1, activePages.length);

  // Safety clamp if page list shrunk
  useEffect(() => {
    if (currentPageIndex >= totalPages) {
      setCurrentPageIndex(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPageIndex]);

  const renderPageByIndex = (index: number, isPrint = false) => {
    if (!activePages[index]) return null;
    return activePages[index].render(index + 1, isPrint);
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
    <div className="theme-app-viewer flex flex-col h-full rounded-xl overflow-hidden border-2 shadow-2xl transition-colors font-sans">
      {/* Top Controls Toolbar */}
      <div className="theme-app-viewer-toolbar px-4 py-2.5 border-b-2 flex flex-wrap items-center justify-between gap-3 transition-colors">
        {/* Left: Magazine info & View Mode Selector */}
        <div className="flex items-center gap-2">
          <span className="font-black text-xs uppercase tracking-widest hidden sm:inline">
            {project.title}
          </span>
          <div className="h-4 w-px bg-current opacity-20 hidden sm:block" />

          {/* Mode Switchers */}
          <div className="flex items-center theme-app-card-subtle p-0.5 rounded-lg border">
            <button
              onClick={() => setViewMode("single")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-black rounded-md transition-all ${
                viewMode === "single"
                  ? "bg-amber-400 text-black border border-black shadow-sm"
                  : "opacity-70 hover:opacity-100"
              }`}
              title="Modo Página Individual (Visualização Exata A4)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Página Única (100% WYSIWYG)</span>
            </button>
            <button
              onClick={() => setViewMode("spread")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-black rounded-md transition-all ${
                viewMode === "spread"
                  ? "bg-amber-400 text-black border border-black shadow-sm"
                  : "opacity-70 hover:opacity-100"
              }`}
              title="Modo Revista Aberta (Spread 2 Páginas)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Revista Aberta</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-black rounded-md transition-all ${
                viewMode === "grid"
                  ? "bg-amber-400 text-black border border-black shadow-sm"
                  : "opacity-70 hover:opacity-100"
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
              className="h-8 px-2 border-2 border-current disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-xs font-mono font-black px-2.5 py-1 border-2 border-black rounded shadow-xs bg-amber-400 text-black">
              {viewMode === "spread" && currentPageIndex > 0 && currentPageIndex < totalPages - 1
                ? `PÁG ${currentPageIndex + 1} - ${Math.min(currentPageIndex + 2, totalPages)} DE ${totalPages}`
                : `PÁG ${currentPageIndex + 1} DE ${totalPages}`}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPageIndex >= totalPages - 1}
              className="h-8 px-2 border-2 border-current disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Right: Zoom & Export Button */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 theme-app-card-subtle px-2 py-0.5 rounded border text-xs">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
              className="p-1 opacity-70 hover:opacity-100"
              title="Reduzir Zoom"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] font-bold w-9 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(140, z + 10))}
              className="p-1 opacity-70 hover:opacity-100"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <Button
            size="sm"
            onClick={onOpenExportModal}
            className="h-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-md flex items-center gap-1.5 border-2 border-black"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF</span>
          </Button>
        </div>
      </div>

      {/* Main Canvas Viewport (Studio Desk Backdrop with Exact A4 Framing) */}
      <div className="theme-app-viewer-canvas flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center custom-scrollbar transition-colors">
        {viewMode === "grid" ? (
          /* Grid Mode: Thumbnails of all active pages */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto py-4">
            {activePages.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => {
                  setCurrentPageIndex(idx);
                  setViewMode("single");
                }}
                className={`group cursor-pointer rounded-lg overflow-hidden border-2 transition-all transform hover:scale-105 ${
                  currentPageIndex === idx
                    ? "border-amber-400 shadow-2xl ring-4 ring-amber-400"
                    : "border-slate-700 hover:border-white"
                }`}
              >
                <div className="relative aspect-[210/297] pointer-events-none transform scale-100 origin-top bg-white">
                  {renderPageByIndex(idx)}
                </div>
                <div className="bg-slate-900 text-white p-2 text-center text-xs font-bold border-t border-slate-700">
                  {`${idx + 1}. ${p.title}`}
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === "spread" ? (
          /* Spread Mode: 2 Pages side-by-side like a real magazine */
          <div
            className="flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center center" }}
          >
            {currentPageIndex === 0 ? (
              /* Cover is displayed alone */
              <div className="h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] aspect-[210/297] shrink-0 shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs overflow-hidden border border-black/40">
                {renderPageByIndex(0)}
              </div>
            ) : currentPageIndex === totalPages - 1 ? (
              /* Back Cover is displayed alone */
              <div className="h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] aspect-[210/297] shrink-0 shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs overflow-hidden border border-black/40">
                {renderPageByIndex(totalPages - 1)}
              </div>
            ) : (
              /* 2 Pages Spread */
              <div className="flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs overflow-hidden border border-black/40">
                <div className="h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] aspect-[210/297] shrink-0 border-r border-black/50">
                  {renderPageByIndex(currentPageIndex)}
                </div>
                {currentPageIndex + 1 < totalPages && (
                  <div className="h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] aspect-[210/297] shrink-0 border-l border-black/50">
                    {renderPageByIndex(currentPageIndex + 1)}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Single Page Mode (Exact WYSIWYG A4 Canvas Matching Print Preview) */
          <div
            className="flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "center center" }}
          >
            <div className="h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] aspect-[210/297] shrink-0 shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-xs overflow-hidden border border-black/40">
              {renderPageByIndex(currentPageIndex)}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Floating Quick Tips */}
      <div className="theme-app-viewer-toolbar px-4 py-2 text-[11px] border-t-2 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-bold">Total de Páginas Ativas na Edição: {totalPages} páginas</span>
        </div>
        <span className="font-mono text-[10px] font-bold">
          Proporção Exata A4 (210mm x 297mm)
        </span>
      </div>
    </div>
  );
};
