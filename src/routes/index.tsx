import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { MagazineProject, Article } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT, MAGAZINE_THEMES } from "../lib/sample-data";
import { MagazineViewer } from "../components/magazine/MagazineViewer";
import { CoverCustomizer } from "../components/editor/CoverCustomizer";
import { ArticleEditorModal } from "../components/editor/ArticleEditorModal";
import { MagazineSettings } from "../components/editor/MagazineSettings";
import { AiStudioDialog } from "../components/editor/AiStudioDialog";
import { PdfExportModal } from "../components/export/PdfExportModal";
import { CoverPage } from "../components/magazine/CoverPage";
import { EditorialPage } from "../components/magazine/EditorialPage";
import { ArticleSpread } from "../components/magazine/ArticleSpread";
import { BackCoverPage } from "../components/magazine/BackCoverPage";
import {
  Sparkles,
  BookOpen,
  FileText,
  Palette,
  Feather,
  Printer,
  Plus,
  Wand2,
  RotateCcw,
  Edit,
  Trash2,
  MoveUp,
  MoveDown,
  Clock,
  Layers,
  Save,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [project, setProject] = useState<MagazineProject>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("montanha_magazine_project");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Erro ao carregar projeto do localStorage:", e);
        }
      }
    }
    return INITIAL_MAGAZINE_PROJECT;
  });

  const [activeTab, setActiveTab] = useState<"viewer" | "articles" | "cover" | "editorial" | "settings">("viewer");
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState<boolean>(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>("Salvo");

  // Save to localStorage whenever project changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("montanha_magazine_project", JSON.stringify(project));
      setSaveStatus("Salvo");
    }
  }, [project]);

  // Current active theme
  const currentTheme =
    MAGAZINE_THEMES.find((t) => t.id === project.themeId) || MAGAZINE_THEMES[0];

  const handleResetToSample = () => {
    if (window.confirm("Deseja restaurar a revista de exemplo padrão? Suas alterações atuais serão substituídas.")) {
      setProject(INITIAL_MAGAZINE_PROJECT);
    }
  };

  const handleSaveArticle = (updatedArticle: Article) => {
    const exists = project.articles.some((a) => a.id === updatedArticle.id);
    let updatedArticles: Article[];
    if (exists) {
      updatedArticles = project.articles.map((a) =>
        a.id === updatedArticle.id ? updatedArticle : a
      );
    } else {
      updatedArticles = [...project.articles, updatedArticle];
    }

    setProject({
      ...project,
      articles: updatedArticles,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleDeleteArticle = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta matéria?")) {
      setProject({
        ...project,
        articles: project.articles.filter((a) => a.id !== id),
        updatedAt: new Date().toISOString(),
      });
    }
  };

  const handleMoveArticle = (idx: number, direction: "up" | "down") => {
    const newArticles = [...project.articles];
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= newArticles.length) return;

    const temp = newArticles[idx];
    newArticles[idx] = newArticles[targetIdx];
    newArticles[targetIdx] = temp;

    setProject({
      ...project,
      articles: newArticles,
    });
  };

  const handleOpenNewArticle = () => {
    setEditingArticle(null);
    setIsArticleModalOpen(true);
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setIsArticleModalOpen(true);
  };

  const totalPages = 2 + project.articles.length + 1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Application Header / Studio Navbar */}
      <header className="no-print bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Issue Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
            <BookOpen className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-sm sm:text-base tracking-tight text-white uppercase">
                MONTANHA MAGAZINE STUDIO
              </h1>
              <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30 hidden sm:inline">
                {project.editionNumber ? `EDIÇÃO #${project.editionNumber}` : "VIRTUAL"}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              Construtor de Revistas & Diagramador Editorial de PDFs com IA
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            size="sm"
            onClick={() => setIsAiStudioOpen(true)}
            className="h-8 sm:h-9 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="hidden md:inline">Escrever com IA</span>
          </Button>

          <Button
            size="sm"
            onClick={handleOpenNewArticle}
            className="h-8 sm:h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Novo Artigo</span>
          </Button>

          <Button
            size="sm"
            onClick={() => setIsExportModalOpen(true)}
            className="h-8 sm:h-9 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-500/10 flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF</span>
          </Button>
        </div>
      </header>

      {/* Subheader Navigation Tabs */}
      <div className="no-print bg-slate-900 border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1 sm:gap-2 py-1">
          <button
            onClick={() => setActiveTab("viewer")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "viewer"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Leitor & Preview Visual</span>
          </button>

          <button
            onClick={() => setActiveTab("articles")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "articles"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Matérias & Artigos ({project.articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("cover")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "cover"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Capa da Revista</span>
          </button>

          <button
            onClick={() => setActiveTab("editorial")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "editorial"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Editorial & Expediente</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === "settings"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Temas & Configurações IA</span>
          </button>
        </div>

        {/* Right utility items */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Auto-salvo
          </span>
          <button
            onClick={handleResetToSample}
            className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
            title="Recarregar revista modelo"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restaurar Modelo</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <main className="no-print flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto">
        {/* Tab 1: Interactive Magazine Viewer */}
        {activeTab === "viewer" && (
          <div className="h-[calc(100vh-140px)] min-h-[580px]">
            <MagazineViewer
              project={project}
              theme={currentTheme}
              onOpenExportModal={() => setIsExportModalOpen(true)}
              onOpenArticleEditor={(id) => {
                const art = project.articles.find((a) => a.id === id);
                if (art) handleEditArticle(art);
              }}
            />
          </div>
        )}

        {/* Tab 2: Articles Management */}
        {activeTab === "articles" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90 p-5 rounded-xl border border-slate-800">
              <div>
                <h2 className="text-lg font-black text-white uppercase tracking-tight">
                  Matérias & Artigos da Edição
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Organize a sequência das páginas, adicione novos textos ou use a IA para redigir matérias completas.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsAiStudioOpen(true)}
                  className="h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Gerar Matéria com IA</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleOpenNewArticle}
                  className="h-9 border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-400" />
                  <span>Adicionar Manualmente</span>
                </Button>
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-3">
              {project.articles.map((art, idx) => {
                const pageNum = idx + 3;
                return (
                  <div
                    key={art.id}
                    className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    {/* Thumbnail & Info */}
                    <div className="flex items-center gap-4 flex-1">
                      {art.heroImage ? (
                        <img
                          src={art.heroImage}
                          alt={art.title}
                          className="w-16 h-16 rounded-lg object-cover border border-slate-700 shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                          <FileText className="w-6 h-6 text-slate-500" />
                        </div>
                      )}

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-500/20 text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                            {art.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            PÁGINA {pageNum}
                          </span>
                          <span className="text-[10px] text-slate-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {art.estimatedReadTime} min
                          </span>
                        </div>
                        <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                          {art.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {art.subtitle || art.content.slice(0, 100)}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
                      {/* Move up / down */}
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "up")}
                        disabled={idx === 0}
                        className="p-1.5 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded"
                        title="Mover para cima"
                      >
                        <MoveUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "down")}
                        disabled={idx === project.articles.length - 1}
                        className="p-1.5 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded"
                        title="Mover para baixo"
                      >
                        <MoveDown className="w-4 h-4" />
                      </button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditArticle(art)}
                        className="h-8 px-3 border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5 text-amber-400" />
                        <span>Editar</span>
                      </Button>

                      <button
                        type="button"
                        onClick={() => handleDeleteArticle(art.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
                        title="Excluir Matéria"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Cover Customizer */}
        {activeTab === "cover" && (
          <div className="max-w-4xl mx-auto">
            <CoverCustomizer
              coverConfig={project.coverConfig}
              onChange={(updatedCover) =>
                setProject({ ...project, coverConfig: updatedCover })
              }
            />
          </div>
        )}

        {/* Tab 4: Editorial & Credits */}
        {activeTab === "editorial" && (
          <div className="max-w-4xl mx-auto">
            <MagazineSettings
              project={project}
              onChange={(updatedProject) => setProject(updatedProject)}
            />
          </div>
        )}

        {/* Tab 5: Settings & AI Key */}
        {activeTab === "settings" && (
          <div className="max-w-4xl mx-auto">
            <MagazineSettings
              project={project}
              onChange={(updatedProject) => setProject(updatedProject)}
            />
          </div>
        )}
      </main>

      {/* Modals & Dialogs */}
      <ArticleEditorModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
        article={editingArticle}
        onSave={handleSaveArticle}
        apiKey={project.geminiApiKey}
      />

      <AiStudioDialog
        isOpen={isAiStudioOpen}
        onClose={() => setIsAiStudioOpen(false)}
        onAddArticle={handleSaveArticle}
        apiKey={project.geminiApiKey}
      />

      <PdfExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={project}
        theme={currentTheme}
      />

      {/* Print-Only Container (Rendered seamlessly during window.print() / PDF export) */}
      <div className="print-only-container">
        {/* Page 1: Cover */}
        <div className="magazine-print-page">
          <CoverPage project={project} theme={currentTheme} isPrintMode={true} />
        </div>

        {/* Page 2: Editorial & Index */}
        <div className="magazine-print-page">
          <EditorialPage
            project={project}
            theme={currentTheme}
            pageNumber={2}
            isPrintMode={true}
          />
        </div>

        {/* Pages 3 to N: Articles */}
        {project.articles.map((art, idx) => (
          <div key={art.id} className="magazine-print-page">
            <ArticleSpread
              article={art}
              project={project}
              theme={currentTheme}
              pageNumber={idx + 3}
              isPrintMode={true}
            />
          </div>
        ))}

        {/* Last Page: Back Cover */}
        <div className="magazine-print-page">
          <BackCoverPage
            project={project}
            theme={currentTheme}
            pageNumber={totalPages}
            isPrintMode={true}
          />
        </div>
      </div>
    </div>
  );
}
