import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { MagazineProject, Article } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT, MAGAZINE_THEMES } from "../lib/sample-data";
import { APP_UI_THEMES, AppUiThemeMode } from "../lib/ui-theme";
import { MagazineViewer } from "../components/magazine/MagazineViewer";
import { CoverCustomizer } from "../components/editor/CoverCustomizer";
import { ArticleEditorModal } from "../components/editor/ArticleEditorModal";
import { EditorialSettings } from "../components/editor/EditorialSettings";
import { MagazineSettings } from "../components/editor/MagazineSettings";
import { AiStudioDialog } from "../components/editor/AiStudioDialog";
import { PdfExportModal } from "../components/export/PdfExportModal";
import { CoverPage } from "../components/magazine/CoverPage";
import { EditorLetterPage } from "../components/magazine/EditorLetterPage";
import { ContributorsPage } from "../components/magazine/ContributorsPage";
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
  Settings,
  CheckCircle2,
  Sun,
  Moon,
  Book,
  Zap,
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

  // UI Theme state (Defaulting to contrast-white for crisp black on white readability)
  const [uiThemeMode, setUiThemeMode] = useState<AppUiThemeMode>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("montanha_ui_theme") as AppUiThemeMode;
      if (savedTheme && APP_UI_THEMES.some((t) => t.id === savedTheme)) {
        return savedTheme;
      }
    }
    return "contrast-white";
  });

  const [activeTab, setActiveTab] = useState<"viewer" | "articles" | "cover" | "editorial" | "settings">("viewer");
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState<boolean>(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>("Salvo");

  // Save project to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("montanha_magazine_project", JSON.stringify(project));
      setSaveStatus("Salvo");
    }
  }, [project]);

  // Save UI Theme to localStorage
  const handleSelectUiTheme = (mode: AppUiThemeMode) => {
    setUiThemeMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("montanha_ui_theme", mode);
    }
  };

  // Active App Theme Config
  const activeUiTheme =
    APP_UI_THEMES.find((t) => t.id === uiThemeMode) || APP_UI_THEMES[0];

  // Active Publication Theme
  const currentPublicationTheme =
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

  // Total pages: Cover (1) + EditorLetter (1) + Contributors (1) + TOC (1) + Articles (N) + BackCover (1)
  const totalPages = 4 + project.articles.length;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 theme-app-shell ${activeUiTheme.className}`}>
      {/* Top Application Header / Studio Navbar */}
      <header className="no-print sticky top-0 z-50 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 transition-colors theme-app-header border-b-2 shadow-sm">
        {/* Brand & Issue Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md border-2 border-black">
            <BookOpen className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-sm sm:text-base tracking-tight uppercase">
                MONTANHA MAGAZINE STUDIO
              </h1>
              <span className="bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase hidden sm:inline">
                {project.editionNumber ? `ED. #${project.editionNumber}` : "VIRTUAL"}
              </span>
            </div>
            <p className="text-[11px] opacity-75 font-semibold">
              Construtor de Revistas & Diagramador Editorial de PDFs com IA
            </p>
          </div>
        </div>

        {/* Action Buttons & Quick Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick UI Theme Switcher Selector */}
          <div className="flex items-center p-0.5 rounded-lg border-2 border-current theme-app-card-subtle" title="Trocar Esquema de Cores do App">
            {APP_UI_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelectUiTheme(theme.id)}
                className={`p-1.5 rounded-md text-xs transition-all flex items-center gap-1 ${
                  uiThemeMode === theme.id
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm border border-black"
                    : "opacity-60 hover:opacity-100"
                }`}
                title={theme.name}
              >
                {theme.icon === "contrast" && <Sparkles className="w-3.5 h-3.5 text-black" />}
                {theme.icon === "sun" && <Sun className="w-3.5 h-3.5" />}
                {theme.icon === "moon" && <Moon className="w-3.5 h-3.5" />}
                {theme.icon === "book" && <Book className="w-3.5 h-3.5" />}
                {theme.icon === "zap" && <Zap className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            onClick={() => setIsAiStudioOpen(true)}
            className="h-8 sm:h-9 bg-amber-400 hover:bg-amber-500 text-black border-2 border-black font-black text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
            <span className="hidden md:inline">Escrever com IA</span>
          </Button>

          <Button
            size="sm"
            onClick={handleOpenNewArticle}
            className="h-8 sm:h-9 theme-app-card hover:opacity-90 border-2 border-current font-bold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Novo Artigo</span>
          </Button>

          <Button
            size="sm"
            onClick={() => setIsExportModalOpen(true)}
            className="h-8 sm:h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md border-2 border-black flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF</span>
          </Button>
        </div>
      </header>

      {/* Subheader Navigation Tabs */}
      <div className="no-print px-4 sm:px-6 flex items-center justify-between overflow-x-auto custom-scrollbar transition-colors theme-app-subnav border-b-2 shadow-xs">
        <div className="flex items-center gap-1 sm:gap-2 py-1.5">
          <button
            onClick={() => setActiveTab("viewer")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 ${
              activeTab === "viewer"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Leitor & Preview Visual</span>
          </button>

          <button
            onClick={() => setActiveTab("articles")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 ${
              activeTab === "articles"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Matérias & Artigos ({project.articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("cover")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 ${
              activeTab === "cover"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Capa da Revista</span>
          </button>

          <button
            onClick={() => setActiveTab("editorial")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 ${
              activeTab === "editorial"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Editorial & Colaboradores</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 ${
              activeTab === "settings"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Configurações</span>
          </button>
        </div>

        {/* Right utility items */}
        <div className="hidden lg:flex items-center gap-3 text-xs opacity-80">
          <span className="flex items-center gap-1 font-bold text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Auto-salvo
          </span>
          <button
            onClick={handleResetToSample}
            className="flex items-center gap-1 font-bold hover:text-amber-600 transition-colors"
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
              theme={currentPublicationTheme}
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
            <div className="theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-lg font-black uppercase tracking-tight">
                  Matérias & Artigos da Edição
                </h2>
                <p className="text-xs opacity-75 mt-0.5">
                  Organize a sequência das páginas, adicione novos textos ou use a IA para redigir matérias completas.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsAiStudioOpen(true)}
                  className="h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 border-2 border-black"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Gerar Matéria com IA</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleOpenNewArticle}
                  className="h-9 font-bold text-xs flex items-center gap-1.5 border-2 border-current"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-500" />
                  <span>Adicionar Manualmente</span>
                </Button>
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-3">
              {project.articles.map((art, idx) => {
                const pageNum = idx + 5;
                return (
                  <div
                    key={art.id}
                    className="theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm"
                  >
                    {/* Thumbnail & Info */}
                    <div className="flex items-center gap-4 flex-1">
                      {art.heroImage ? (
                        <img
                          src={art.heroImage}
                          alt={art.title}
                          className="w-16 h-16 rounded-lg object-cover border-2 border-black shrink-0 filter contrast-125 shadow-xs"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg theme-app-card-subtle flex items-center justify-center shrink-0 border-2 border-black">
                          <FileText className="w-6 h-6 opacity-60" />
                        </div>
                      )}

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase">
                            {art.category}
                          </span>
                          <span className="text-[10px] font-mono font-black text-amber-600">
                            PÁGINA {pageNum < 10 ? `0${pageNum}` : pageNum}
                          </span>
                          <span className="text-[10px] opacity-75 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {art.estimatedReadTime} min
                          </span>
                        </div>
                        <h3 className="font-black text-sm sm:text-base leading-tight">
                          {art.title}
                        </h3>
                        <p className="text-xs opacity-75 line-clamp-1 font-medium">
                          {art.subtitle || art.content.slice(0, 100)}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-300">
                      {/* Move up / down */}
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "up")}
                        disabled={idx === 0}
                        className="p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded"
                        title="Mover para cima"
                      >
                        <MoveUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "down")}
                        disabled={idx === project.articles.length - 1}
                        className="p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded"
                        title="Mover para baixo"
                      >
                        <MoveDown className="w-4 h-4" />
                      </button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditArticle(art)}
                        className="h-8 px-3 font-bold text-xs flex items-center gap-1 border-2 border-current"
                      >
                        <Edit className="w-3.5 h-3.5 text-amber-500" />
                        <span>Editar</span>
                      </Button>

                      <button
                        type="button"
                        onClick={() => handleDeleteArticle(art.id)}
                        className="p-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
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

        {/* Tab 4: Editorial & Contributors */}
        {activeTab === "editorial" && (
          <div className="max-w-4xl mx-auto">
            <EditorialSettings
              project={project}
              onChange={(updatedProject) => setProject(updatedProject)}
            />
          </div>
        )}

        {/* Tab 5: Settings */}
        {activeTab === "settings" && (
          <div className="max-w-4xl mx-auto">
            <MagazineSettings
              project={project}
              onChange={(updatedProject) => setProject(updatedProject)}
              currentUiTheme={uiThemeMode}
              onSelectUiTheme={handleSelectUiTheme}
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
        theme={currentPublicationTheme}
      />

      {/* Print-Only Container */}
      <div className="print-only-container">
        {/* Page 1: Cover */}
        <div className="magazine-print-page">
          <CoverPage project={project} theme={currentPublicationTheme} isPrintMode={true} />
        </div>

        {/* Page 2: Letter from the Editor */}
        <div className="magazine-print-page">
          <EditorLetterPage
            project={project}
            theme={currentPublicationTheme}
            pageNumber={2}
            isPrintMode={true}
          />
        </div>

        {/* Page 3: Contributors Grid */}
        <div className="magazine-print-page">
          <ContributorsPage
            project={project}
            theme={currentPublicationTheme}
            pageNumber={3}
            isPrintMode={true}
          />
        </div>

        {/* Page 4: Table of Contents */}
        <div className="magazine-print-page">
          <EditorialPage
            project={project}
            theme={currentPublicationTheme}
            pageNumber={4}
            isPrintMode={true}
          />
        </div>

        {/* Pages 5 to N: Articles */}
        {project.articles.map((art, idx) => (
          <div key={art.id} className="magazine-print-page">
            <ArticleSpread
              article={art}
              project={project}
              theme={currentPublicationTheme}
              pageNumber={idx + 5}
              isPrintMode={true}
            />
          </div>
        ))}

        {/* Last Page: Back Cover */}
        <div className="magazine-print-page">
          <BackCoverPage
            project={project}
            theme={currentPublicationTheme}
            pageNumber={totalPages}
            isPrintMode={true}
          />
        </div>
      </div>
    </div>
  );
}
