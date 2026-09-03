import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { MagazineProject, Article } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT, MAGAZINE_THEMES } from "../lib/sample-data";
import { APP_UI_THEMES, AppUiThemeMode } from "../lib/ui-theme";
import { loadLatestProject, syncProjectToCloud } from "../lib/cloud-sync";
import { MagazineViewer } from "../components/magazine/MagazineViewer";
import { CoverCustomizer } from "../components/editor/CoverCustomizer";
import { ArticleEditorModal } from "../components/editor/ArticleEditorModal";
import { EditorialSettings } from "../components/editor/EditorialSettings";
import { MagazineSettings } from "../components/editor/MagazineSettings";
import { AiStudioDialog } from "../components/editor/AiStudioDialog";
import { PdfExportModal } from "../components/export/PdfExportModal";
import { CloudSyncDialog } from "../components/sync/CloudSyncDialog";
import { CoverPage } from "../components/magazine/CoverPage";
import { EditorLetterPage } from "../components/magazine/EditorLetterPage";
import { ContributorsPage } from "../components/magazine/ContributorsPage";
import { EditorialPage } from "../components/magazine/EditorialPage";
import { ArticleSpread } from "../components/magazine/ArticleSpread";
import { BackCoverPage } from "../components/magazine/BackCoverPage";
import { PwaInstallPrompt } from "../components/pwa/PwaInstallPrompt";
import { ContentRepositoryView } from "../components/repository/ContentRepositoryView";
import { ImportFromRepositoryModal } from "../components/repository/ImportFromRepositoryModal";
import { AiApprovalModal } from "../components/repository/AiApprovalModal";
import { AuthModal } from "../components/auth/AuthModal";
import { SubscriptionModal } from "../components/subscription/SubscriptionModal";
import { EditionsArchiveView } from "../components/archive/EditionsArchiveView";
import { getArchivedEditions } from "../lib/editions-archive";
import { getCurrentUser, logoutUser, UserProfile } from "../lib/auth-state";
import { analyzeAndDiagramEditorialText, EditorialAnalysisResult } from "../lib/ai-service";
import { formatPageNumber, countWords, getEffectiveArticlePageSpan, calculateRequiredArticlePages } from "../lib/magazine-utils";
import { RepositoryDocument } from "../types/magazine";
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
  Cloud,
  FolderOpen,
  FolderArchive,
  Copy,
  Layers,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [project, setProject] = useState<MagazineProject>(INITIAL_MAGAZINE_PROJECT);
  const [isInitialLoaded, setIsInitialLoaded] = useState<boolean>(false);

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

  const [activeTab, setActiveTab] = useState<"viewer" | "articles" | "repository" | "cover" | "editorial" | "archive" | "settings">("viewer");
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState<boolean>(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isCloudSyncOpen, setIsCloudSyncOpen] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>("Sincronizado");
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);

  // Editions Archive Count State
  const [archivedEditionsCount, setArchivedEditionsCount] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    return getArchivedEditions().length;
  });

  useEffect(() => {
    const handleArchiveSync = () => {
      setArchivedEditionsCount(getArchivedEditions().length);
    };
    window.addEventListener("montanha-archive-changed", handleArchiveSync);
    return () => window.removeEventListener("montanha-archive-changed", handleArchiveSync);
  }, []);

  // User Auth & PRO Subscription State
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getCurrentUser());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleAuthSync = () => {
      setCurrentUser(getCurrentUser());
    };
    window.addEventListener("montanha-auth-changed", handleAuthSync);
    return () => window.removeEventListener("montanha-auth-changed", handleAuthSync);
  }, []);

  // Repository Import State
  const [isImportFromRepoOpen, setIsImportFromRepoOpen] = useState<boolean>(false);
  const [repoAnalysisResult, setRepoAnalysisResult] = useState<EditorialAnalysisResult | null>(null);
  const [selectedRepoDoc, setSelectedRepoDoc] = useState<RepositoryDocument | null>(null);
  const [isRepoApprovalOpen, setIsRepoApprovalOpen] = useState<boolean>(false);
  const [isRepoAnalyzing, setIsRepoAnalyzing] = useState<boolean>(false);

  // Initial Load from Cloud API / URL / Local Storage
  useEffect(() => {
    loadLatestProject().then((loaded) => {
      if (loaded) {
        setProject(loaded);
      }
      setIsInitialLoaded(true);
    });
  }, []);

  // Sync project to Cloud + LocalStorage on every modification
  useEffect(() => {
    if (!isInitialLoaded) return;

    setSaveStatus("Salvando...");
    const timer = setTimeout(() => {
      syncProjectToCloud(project).then((cloudSuccess) => {
        setSaveStatus(cloudSuccess ? "Nuvem Sincronizada" : "Salvo Localmente");
      });
    }, 600);

    return () => clearTimeout(timer);
  }, [project, isInitialLoaded]);

  // Listen to window focus to re-sync if changed on mobile
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleFocus = () => {
      loadLatestProject().then((latest) => {
        if (latest && latest.updatedAt && latest.updatedAt !== project.updatedAt) {
          setProject(latest);
        }
      });
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [project.updatedAt]);

  // Active App Theme Config
  const activeUiTheme =
    APP_UI_THEMES.find((t) => t.id === uiThemeMode) || APP_UI_THEMES[0]!;

  // Sync theme class to document body so portals and dialogs inherit theme variables
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.className = activeUiTheme.className;
    }
  }, [uiThemeMode, activeUiTheme]);

  // Save UI Theme to localStorage
  const handleSelectUiTheme = (mode: AppUiThemeMode) => {
    setUiThemeMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("montanha_ui_theme", mode);
    }
  };

  // Active Publication Theme
  const currentPublicationTheme =
    MAGAZINE_THEMES.find((t) => t.id === project.themeId) || MAGAZINE_THEMES[0]!;

  const handleResetToSample = () => {
    if (window.confirm("Deseja restaurar a revista de exemplo padrão? Suas alterações atuais serão substituídas.")) {
      const reset = {
        ...INITIAL_MAGAZINE_PROJECT,
        updatedAt: new Date().toISOString(),
      };
      setProject(reset);
      syncProjectToCloud(reset);
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
    const art = project.articles.find((a) => a.id === id);
    if (art) {
      setArticleToDelete(art);
    }
  };

  const handleConfirmDeleteArticle = () => {
    if (!articleToDelete) return;
    const targetId = articleToDelete.id;
    const updatedArticles = project.articles.filter((a) => a.id !== targetId);
    const updatedProj: MagazineProject = {
      ...project,
      articles: updatedArticles,
      updatedAt: new Date().toISOString(),
    };
    setProject(updatedProj);
    syncProjectToCloud(updatedProj);
    setArticleToDelete(null);
  };

  const handleDuplicateArticle = (sourceArticle: Article) => {
    const cloned: Article = {
      ...JSON.parse(JSON.stringify(sourceArticle)),
      id: "art-" + Date.now(),
      title: `${sourceArticle.title} (CÓPIA)`,
    };
    const idx = project.articles.findIndex((a) => a.id === sourceArticle.id);
    const updatedArticles = [...project.articles];
    if (idx >= 0) {
      updatedArticles.splice(idx + 1, 0, cloned);
    } else {
      updatedArticles.push(cloned);
    }
    setProject({
      ...project,
      articles: updatedArticles,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleToggleArticleEnabled = (id: string) => {
    setProject({
      ...project,
      articles: project.articles.map((a) =>
        a.id === id ? { ...a, enabled: a.enabled === false ? true : false } : a
      ),
      updatedAt: new Date().toISOString(),
    });
  };

  const handleMoveArticle = (idx: number, direction: "up" | "down") => {
    const newArticles = [...project.articles];
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= newArticles.length) return;

    const temp = newArticles[idx]!;
    newArticles[idx] = newArticles[targetIdx]!;
    newArticles[targetIdx] = temp;

    setProject({
      ...project,
      articles: newArticles,
      updatedAt: new Date().toISOString(),
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

  // Repository Import Handlers
  const handleImportWithAiFromRepo = async (doc: RepositoryDocument) => {
    setIsRepoAnalyzing(true);
    setSelectedRepoDoc(doc);
    try {
      const result = await analyzeAndDiagramEditorialText(doc.rawContent, {
        originalTitle: doc.title,
        ...(doc.category ? { originalCategory: doc.category } : {}),
      });
      setRepoAnalysisResult(result);
      setIsRepoApprovalOpen(true);
    } catch (err: any) {
      alert("Erro na análise por IA: " + err.message);
    } finally {
      setIsRepoAnalyzing(false);
    }
  };

  const handleImportDirectFromRepo = (doc: RepositoryDocument) => {
    const newArt: Article = {
      id: "art-" + Date.now(),
      title: doc.title,
      subtitle: `Artigo importado do acervo editorial // ${doc.category || "Alta Performance"}.`,
      category: doc.category || "MONTANHA METHOD",
      author: "Coach Montanha",
      authorBio: "Master Coach & Fundador",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      heroImageCaption: "Foto editorial // Montanha Media",
      content: doc.rawContent,
      pullQuotes: [],
      keyTakeaways: [],
      layoutTemplate: doc.wordCount > 650 ? "editorial-lead" : "two-column-quote",
      pageSpan: calculateRequiredArticlePages({
        content: doc.rawContent,
        heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      } as any),
      quotePlacement: "end",
      textDensity: "normal",
      tags: [doc.category || "Geral", "Alta Performance"],
      estimatedReadTime: Math.max(1, Math.round(doc.wordCount / 130)),
      featuredOnCover: false,
      enabled: true,
    };

    const updatedArticles = [...project.articles, newArt];
    const updatedDocs = project.contentRepository
      ? project.contentRepository.map((d) => (d.id === doc.id ? { ...d, status: "published" as const } : d))
      : [];

    const updatedProj: MagazineProject = {
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs,
      updatedAt: new Date().toISOString(),
    };

    setProject(updatedProj);
    syncProjectToCloud(updatedProj);
    setActiveTab("articles");
  };

  const handleApproveRepoArticle = (approvedArt: Article, sourceDocId?: string) => {
    const updatedArticles = [...project.articles, approvedArt];
    const updatedDocs = sourceDocId && project.contentRepository
      ? project.contentRepository.map((d) => (d.id === sourceDocId ? { ...d, status: "published" as const } : d))
      : project.contentRepository;

    const updatedProj: MagazineProject = {
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs ?? [],
      updatedAt: new Date().toISOString(),
    };

    setProject(updatedProj);
    syncProjectToCloud(updatedProj);
    setActiveTab("articles");
  };

  // Dynamic active page visibility calculation
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
      render: (_, isPrint) => <CoverPage project={project} theme={currentPublicationTheme} isPrintMode={isPrint ?? false} />,
    });
  }

  if (visibility.showEditorLetter) {
    activePages.push({
      id: "editor-letter",
      title: "Carta do Editor",
      render: (pNum, isPrint) => (
        <EditorLetterPage project={project} theme={currentPublicationTheme} pageNumber={pNum} isPrintMode={isPrint ?? false} />
      ),
    });
  }

  if (visibility.showContributors) {
    activePages.push({
      id: "contributors",
      title: "Colaboradores",
      render: (pNum, isPrint) => (
        <ContributorsPage project={project} theme={currentPublicationTheme} pageNumber={pNum} isPrintMode={isPrint ?? false} />
      ),
    });
  }

  if (visibility.showTableOfContents) {
    activePages.push({
      id: "toc",
      title: "Sumário / Índice",
      render: (pNum, isPrint) => (
        <EditorialPage project={project} theme={currentPublicationTheme} pageNumber={pNum} isPrintMode={isPrint ?? false} />
      ),
    });
  }

  project.articles
    .filter((art) => art.enabled !== false)
    .forEach((art) => {
      const span = getEffectiveArticlePageSpan(art);
      for (let part = 1; part <= span; part++) {
        activePages.push({
          id: span > 1 ? `${art.id}-part${part}` : art.id,
          title: span > 1 ? `${art.title} (Parte ${part}/${span})` : art.title,
          render: (pNum, isPrint) => (
            <ArticleSpread
              key={`${art.id}-part${part}`}
              article={art}
              project={project}
              theme={currentPublicationTheme}
              pageNumber={pNum}
              isPrintMode={isPrint ?? false}
              pagePart={part}
              totalPagesForArticle={span}
            />
          ),
        });
      }
    });

  if (visibility.showBackCover) {
    activePages.push({
      id: "back-cover",
      title: "Contracapa",
      render: (pNum, isPrint) => (
        <BackCoverPage project={project} theme={currentPublicationTheme} pageNumber={pNum} isPrintMode={isPrint ?? false} />
      ),
    });
  }

  const totalPages = Math.max(1, activePages.length);

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

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cloud Sync Status (Only cloud icon) */}
          <Button
            size="sm"
            onClick={() => setIsCloudSyncOpen(true)}
            className="h-8 sm:h-9 px-2.5 theme-app-card hover:opacity-90 border-2 border-current font-bold text-xs flex items-center justify-center shadow-xs cursor-pointer"
            title={saveStatus ? `Sincronização em Nuvem: ${saveStatus}` : "Sincronização em Nuvem & Compartilhamento"}
            aria-label="Sincronização em Nuvem"
          >
            <Cloud className="w-4 h-4 text-amber-500" />
          </Button>

          <Button
            size="sm"
            data-testid="btn-export-pdf"
            onClick={() => setIsExportModalOpen(true)}
            className="h-8 sm:h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md border-2 border-black flex items-center gap-1.5 cursor-pointer"
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
            data-testid="tab-viewer"
            onClick={() => setActiveTab("viewer")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "viewer"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Leitor & Preview Visual</span>
          </button>

          <button
            data-testid="tab-articles"
            onClick={() => setActiveTab("articles")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "articles"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Matérias & Artigos ({project.articles.length})</span>
          </button>

          <button
            data-testid="tab-repository"
            onClick={() => setActiveTab("repository")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "repository"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Acervo & Textos ({project.contentRepository?.length || 0})</span>
          </button>

          <button
            data-testid="tab-cover"
            onClick={() => setActiveTab("cover")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "cover"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Capa & Contracapa da Revista</span>
          </button>

          <button
            data-testid="tab-editorial"
            onClick={() => setActiveTab("editorial")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "editorial"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Editorial & Páginas</span>
          </button>

          <button
            data-testid="tab-archive"
            onClick={() => setActiveTab("archive")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
              activeTab === "archive"
                ? "bg-amber-400 text-slate-950 border-black shadow-sm"
                : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"
            }`}
          >
            <FolderArchive className="w-3.5 h-3.5 text-amber-500" />
            <span>Arquivo de Edições ({archivedEditionsCount})</span>
          </button>

          <button
            data-testid="tab-settings"
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${
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
          <button
            onClick={() => setIsCloudSyncOpen(true)}
            className="flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
            title="Abrir Central de Sincronização em Nuvem"
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>{saveStatus} ({totalPages} págs)</span>
          </button>
          <button
            onClick={handleResetToSample}
            className="flex items-center gap-1 font-bold hover:text-amber-600 transition-colors cursor-pointer"
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
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setIsImportFromRepoOpen(true)}
                  className="h-9 bg-black hover:bg-slate-900 text-white font-black text-xs flex items-center gap-1.5 border-2 border-black cursor-pointer shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Importar do Acervo ({project.contentRepository?.length || 0})</span>
                </Button>
                <Button
                  onClick={() => setIsAiStudioOpen(true)}
                  className="h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 border-2 border-black cursor-pointer shadow-xs"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Gerar Matéria com IA</span>
                </Button>
                <Button
                  variant="outline"
                  data-testid="btn-new-article"
                  onClick={handleOpenNewArticle}
                  className="h-9 font-bold text-xs flex items-center gap-1.5 border-2 border-current cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-500" />
                  <span>Adicionar Manualmente</span>
                </Button>
              </div>
            </div>

            {/* Editorial Overview Statistics Bar */}
            {(() => {
              const activeArts = project.articles.filter((a) => a.enabled !== false);
              const totalWordsCount = activeArts.reduce(
                (acc, a) => acc + countWords(a.content),
                0
              );
              const totalReadTime = activeArts.reduce(
                (acc, a) => acc + (a.estimatedReadTime || 4),
                0
              );
              const totalMultiPages = activeArts.filter((a) => getEffectiveArticlePageSpan(a) > 1).length;
              const totalSinglePages = activeArts.filter((a) => getEffectiveArticlePageSpan(a) === 1).length;

              return (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">
                      Total de Páginas Ativas
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600">
                      <Layers className="w-4 h-4" />
                      <span>{totalPages} Páginas A4</span>
                    </div>
                    <span className="text-[9px] opacity-60 block">
                      {totalSinglePages} simples + {totalMultiPages} estendidas
                    </span>
                  </div>

                  <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">
                      Volume Editorial
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600">
                      <FileText className="w-4 h-4" />
                      <span>{totalWordsCount.toLocaleString("pt-BR")} palavras</span>
                    </div>
                    <span className="text-[9px] opacity-60 block">
                      Em {activeArts.length} matérias ativas
                    </span>
                  </div>

                  <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">
                      Tempo de Leitura
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600">
                      <Clock className="w-4 h-4" />
                      <span>~{totalReadTime} min</span>
                    </div>
                    <span className="text-[9px] opacity-60 block">
                      Edição completa compilada
                    </span>
                  </div>

                  <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">
                      Acervo de Rascunhos
                    </span>
                    <div className="flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600">
                      <FolderOpen className="w-4 h-4" />
                      <span>{project.contentRepository?.length || 0} textos</span>
                    </div>
                    <span className="text-[9px] opacity-60 block">
                      Prontos para auto-diagramação
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* Articles List */}
            <div className="space-y-3">
              {project.articles.map((art, idx) => {
                const calculatedPageNum = activePages.findIndex((p) => p.id === art.id || p.id === `${art.id}-part1`) + 1;
                const pageNum = calculatedPageNum > 0 ? calculatedPageNum : idx + 4;
                const span = getEffectiveArticlePageSpan(art);
                const isMulti = span > 1;
                const isEnabled = art.enabled !== false;

                return (
                  <div
                    key={art.id}
                    data-testid="article-card"
                    className={`theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm ${
                      !isEnabled ? "opacity-50 bg-slate-100 border-slate-300" : ""
                    }`}
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
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase">
                            {art.category}
                          </span>
                          <span className="text-[10px] font-mono font-black text-amber-600">
                            {isMulti
                              ? `PÁG. ${formatPageNumber(pageNum)}-${formatPageNumber(pageNum + span - 1)}`
                              : `PÁG. ${formatPageNumber(pageNum)}`}
                          </span>
                          {isMulti && (
                            <span className="bg-black text-amber-400 font-mono text-[8px] font-black px-1.5 py-0.2 rounded border border-black uppercase">
                              {span === 2 ? "PÁGINA DUPLA" : `${span} PÁGINAS`}
                            </span>
                          )}
                          <span className="text-[10px] opacity-75 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {art.estimatedReadTime} min
                          </span>
                        </div>
                        <h3 data-testid="article-card-title" className="font-black text-sm sm:text-base leading-tight">
                          {art.title}
                        </h3>
                        <p className="text-xs opacity-75 line-clamp-1 font-medium">
                          {art.subtitle || art.content.slice(0, 100)}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-300">
                      {/* Move up / down */}
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "up")}
                        disabled={idx === 0}
                        className="p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded cursor-pointer"
                        title="Mover para cima"
                      >
                        <MoveUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveArticle(idx, "down")}
                        disabled={idx === project.articles.length - 1}
                        className="p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded cursor-pointer"
                        title="Mover para baixo"
                      >
                        <MoveDown className="w-4 h-4" />
                      </button>

                      {/* Duplicate Button */}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDuplicateArticle(art)}
                        className="h-8 px-2.5 font-bold text-xs flex items-center gap-1 border-2 border-current cursor-pointer"
                        title="Duplicar Matéria / Clonar Template"
                      >
                        <Copy className="w-3.5 h-3.5 text-amber-500" />
                        <span className="hidden lg:inline">Duplicar</span>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        data-testid="btn-edit-article"
                        onClick={() => handleEditArticle(art)}
                        className="h-8 px-3 font-bold text-xs flex items-center gap-1 border-2 border-current cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5 text-amber-500" />
                        <span>Editar</span>
                      </Button>

                      <button
                        type="button"
                        data-testid="btn-delete-article"
                        onClick={() => handleDeleteArticle(art.id)}
                        className="p-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer"
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

        {/* Tab: Content Repository & AI Ingestion */}
        {activeTab === "repository" && (
          <div className="max-w-6xl mx-auto">
            <ContentRepositoryView
              project={project}
              onUpdateProject={(updated) => {
                setProject(updated);
                syncProjectToCloud(updated);
              }}
              onOpenArticleEditor={(art) => {
                handleEditArticle(art);
                setActiveTab("articles");
              }}
              onNavigateToViewer={() => setActiveTab("viewer")}
              onNavigateToArticles={() => setActiveTab("articles")}
            />
          </div>
        )}

        {/* Tab 3: Cover & Back Cover Customizer */}
        {activeTab === "cover" && (
          <div className="max-w-4xl mx-auto">
            <CoverCustomizer
              coverConfig={project.coverConfig}
              backCoverConfig={project.backCoverConfig}
              articles={project.articles}
              pageVisibility={project.pageVisibility ?? {}}
              onChange={(updatedCover) =>
                setProject({ ...project, coverConfig: updatedCover, updatedAt: new Date().toISOString() })
              }
              onBackCoverChange={(updatedBackCover) =>
                setProject({ ...project, backCoverConfig: updatedBackCover, updatedAt: new Date().toISOString() })
              }
            />
          </div>
        )}

        {/* Tab 4: Editorial & Contributors */}
        {activeTab === "editorial" && (
          <div className="max-w-4xl mx-auto">
            <EditorialSettings
              project={project}
              onChange={(updatedProject) =>
                setProject({ ...updatedProject, updatedAt: new Date().toISOString() })
              }
            />
          </div>
        )}

        {/* Tab 5: Editions Archive */}
        {activeTab === "archive" && (
          <div className="max-w-5xl mx-auto">
            <EditionsArchiveView
              currentProject={project}
              onLoadEditionIntoStudio={(loadedProject) => {
                setProject({
                  ...loadedProject,
                  updatedAt: new Date().toISOString(),
                });
                setActiveTab("viewer");
              }}
            />
          </div>
        )}

        {/* Tab 6: Settings */}
        {activeTab === "settings" && (
          <div className="max-w-4xl mx-auto">
            <MagazineSettings
              project={project}
              onChange={(updatedProject) =>
                setProject({ ...updatedProject, updatedAt: new Date().toISOString() })
              }
              currentUiTheme={uiThemeMode}
              onSelectUiTheme={handleSelectUiTheme}
            />
          </div>
        )}
      </main>

      {/* Modals & Dialogs */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(u) => setCurrentUser(u)}
      />

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        onSuccess={() => setCurrentUser(getCurrentUser())}
      />

      <ArticleEditorModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
        article={editingArticle}
        onSave={handleSaveArticle}
        project={project}
      />

      <AiStudioDialog
        isOpen={isAiStudioOpen}
        onClose={() => setIsAiStudioOpen(false)}
        onAddArticle={handleSaveArticle}
      />

      <PdfExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={project}
        theme={currentPublicationTheme}
        totalPages={totalPages}
      />

      <CloudSyncDialog
        isOpen={isCloudSyncOpen}
        onClose={() => setIsCloudSyncOpen(false)}
        project={project}
        onUpdateProject={(up) => setProject(up)}
      />

      <ImportFromRepositoryModal
        isOpen={isImportFromRepoOpen}
        onClose={() => setIsImportFromRepoOpen(false)}
        project={project}
        onImportWithAi={handleImportWithAiFromRepo}
        onImportDirect={handleImportDirectFromRepo}
        onNavigateToAcervo={() => setActiveTab("repository")}
      />

      <AiApprovalModal
        isOpen={isRepoApprovalOpen}
        onClose={() => setIsRepoApprovalOpen(false)}
        analysis={repoAnalysisResult}
        sourceDoc={selectedRepoDoc}
        onApprove={handleApproveRepoArticle}
        onOpenAdvancedEditor={(draftArt) => {
          handleApproveRepoArticle(draftArt, selectedRepoDoc?.id);
          setEditingArticle(draftArt);
          setIsArticleModalOpen(true);
        }}
      />

      {/* Dialog de Confirmação de Exclusão de Matéria */}
      <Dialog open={Boolean(articleToDelete)} onOpenChange={() => setArticleToDelete(null)}>
        <DialogContent className="theme-app-card max-w-md p-5 font-sans border-2 border-black shadow-2xl">
          <DialogHeader className="border-b-2 pb-2.5">
            <DialogTitle className="text-base font-black flex items-center gap-2 text-red-600 uppercase">
              <Trash2 className="w-5 h-5" />
              <span>Excluir Matéria da Edição</span>
            </DialogTitle>
          </DialogHeader>

          <div className="py-3 text-xs space-y-2">
            <p className="opacity-90 leading-relaxed">
              Tem certeza que deseja excluir a matéria <strong>"{articleToDelete?.title}"</strong> da revista?
            </p>
            <div className="p-2.5 rounded bg-red-500/10 border border-red-500/20 text-[11px] text-red-700 dark:text-red-300 font-medium">
              Esta ação removerá a matéria e suas páginas diagramadas da edição atual. O texto original no acervo (se houver) permanecerá preservado.
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 border-t pt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setArticleToDelete(null)}
              className="h-8 font-bold text-xs cursor-pointer"
            >
              Cancelar
            </Button>
            <Button
              size="sm"
              onClick={handleConfirmDeleteArticle}
              className="h-8 bg-red-600 hover:bg-red-700 text-white font-black text-xs cursor-pointer shadow-xs"
            >
              Sim, Excluir Matéria
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Print-Only Container (Render ONLY active pages without blank sheets) */}
      <div className="print-only-container">
        {activePages.map((page, idx) => (
          <div key={page.id} className="magazine-print-page">
            {page.render(idx + 1, true)}
          </div>
        ))}
      </div>
    </div>
  );
}
