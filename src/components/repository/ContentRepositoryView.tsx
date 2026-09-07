import React, { useState, useRef } from "react";
import {
  MagazineProject,
  RepositoryDocument,
  Article,
} from "../../types/magazine";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import {
  analyzeAndDiagramEditorialText,
  EditorialAnalysisResult,
} from "../../lib/ai-service";
import { AiApprovalModal } from "./AiApprovalModal";
import { countWords, calculateRequiredArticlePages } from "../../lib/magazine-utils";
import {
  FolderOpen,
  Upload,
  FileText,
  Plus,
  Trash2,
  Edit3,
  Wand2,
  Search,
  CheckCircle2,
  Check,
  Eye,
  Clock,
  Loader2,
  Undo2,
  BookOpen,
  FileEdit,
} from "lucide-react";

interface ContentRepositoryViewProps {
  project: MagazineProject;
  onUpdateProject: (updated: MagazineProject) => void;
  onOpenArticleEditor: (article: Article) => void;
  onNavigateToViewer: () => void;
  onNavigateToArticles?: () => void;
}

export const ContentRepositoryView: React.FC<ContentRepositoryViewProps> = ({
  project,
  onUpdateProject,
  onOpenArticleEditor,
  onNavigateToViewer,
  onNavigateToArticles,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<"all" | "draft" | "published">("all");

  // New/Editing Draft State
  const [isDraftEditorOpen, setIsDraftEditorOpen] = useState<boolean>(false);
  const [editingDraftId, setEditingDraftId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState<string>("");
  const [draftContent, setDraftContent] = useState<string>("");
  const [draftCategory, setDraftCategory] = useState<string>("MONTANHA METHOD");

  // AI Analysis & Approval State
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analyzingDocId, setAnalyzingDocId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<EditorialAnalysisResult | null>(null);
  const [selectedSourceDoc, setSelectedSourceDoc] = useState<RepositoryDocument | null>(null);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState<boolean>(false);
  const [previewDoc, setPreviewDoc] = useState<RepositoryDocument | null>(null);
  const [docToDelete, setDocToDelete] = useState<RepositoryDocument | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const documents = project.contentRepository || [];

  // Helper de sincronização em tempo real: verifica se o documento do acervo está atualmente na revista
  const getDocMagazineLink = (doc: RepositoryDocument) => {
    const article = project.articles.find(
      (a) =>
        (a.sourceDocId && a.sourceDocId === doc.id) ||
        a.title.toLowerCase().trim() === doc.title.toLowerCase().trim()
    );
    return {
      isInMagazine: !!article,
      article,
    };
  };

  const publishedCount = documents.filter((d) => getDocMagazineLink(d).isInMagazine).length;
  const draftsCount = documents.filter((d) => !getDocMagazineLink(d).isInMagazine).length;

  // Filtered Documents
  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()));

    const { isInMagazine } = getDocMagazineLink(doc);
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "published" && isInMagazine) ||
      (filterStatus === "draft" && !isInMagazine);

    return matchesSearch && matchesStatus;
  });

  // Handle File Upload (.txt, .md, .doc, .docx, .json)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const textContent = (event.target?.result as string) || "";
        if (!textContent.trim()) return;

        const wordCount = countWords(textContent);
        const autoTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").toUpperCase();

        const newDoc: RepositoryDocument = {
          id: "doc-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
          title: autoTitle || "NOVO DOCUMENTO IMPORTADO",
          rawContent: textContent,
          category: "GERAL",
          sourceFileName: file.name,
          wordCount,
          status: "draft",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        onUpdateProject({
          ...project,
          contentRepository: [newDoc, ...(project.contentRepository || [])],
          updatedAt: new Date().toISOString(),
        });
      };
      reader.readAsText(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Open Draft Editor
  const handleOpenNewDraft = () => {
    setEditingDraftId(null);
    setDraftTitle("");
    setDraftContent("");
    setDraftCategory("MONTANHA METHOD");
    setIsDraftEditorOpen(true);
  };

  const handleEditDraft = (doc: RepositoryDocument) => {
    setEditingDraftId(doc.id);
    setDraftTitle(doc.title);
    setDraftContent(doc.rawContent);
    setDraftCategory(doc.category || "MONTANHA METHOD");
    setIsDraftEditorOpen(true);
  };

  // Save Draft
  const handleSaveDraft = () => {
    if (!draftTitle.trim() || !draftContent.trim()) {
      alert("Por favor, preencha o título e o conteúdo do rascunho.");
      return;
    }

    const wordCount = countWords(draftContent);
    const now = new Date().toISOString();

    let updatedList: RepositoryDocument[];
    if (editingDraftId) {
      updatedList = documents.map((d) =>
        d.id === editingDraftId
          ? {
              ...d,
              title: draftTitle,
              category: draftCategory,
              rawContent: draftContent,
              wordCount,
              updatedAt: now,
            }
          : d
      );
    } else {
      const newDoc: RepositoryDocument = {
        id: "doc-" + Date.now(),
        title: draftTitle,
        category: draftCategory,
        rawContent: draftContent,
        wordCount,
        status: "draft",
        createdAt: now,
        updatedAt: now,
      };
      updatedList = [newDoc, ...documents];
    }

    onUpdateProject({
      ...project,
      contentRepository: updatedList,
      updatedAt: now,
    });

    setIsDraftEditorOpen(false);
  };

  // Delete Document Confirmation & Execution
  const handleConfirmDeleteDoc = () => {
    if (!docToDelete) return;
    const targetId = docToDelete.id;
    const now = new Date().toISOString();
    onUpdateProject({
      ...project,
      contentRepository: documents.filter((d) => d.id !== targetId),
      updatedAt: now,
    });
    setDocToDelete(null);
  };

  // Trigger AI Analysis and Open Approval Modal
  const handleTriggerAiAnalysis = async (doc: RepositoryDocument) => {
    setIsAnalyzing(true);
    setAnalyzingDocId(doc.id);
    setSelectedSourceDoc(doc);

    try {
      const result = await analyzeAndDiagramEditorialText(doc.rawContent, {
        originalTitle: doc.title,
        ...(doc.category ? { originalCategory: doc.category } : {}),
      });
      setAnalysisResult(result);
      setIsApprovalModalOpen(true);
    } catch (err: any) {
      alert("Erro na análise por IA: " + err.message);
    } finally {
      setIsAnalyzing(false);
      setAnalyzingDocId(null);
    }
  };

  // Remover matéria da revista e retornar documento para status Rascunho
  const handleRemoveFromMagazine = (doc: RepositoryDocument) => {
    const { article } = getDocMagazineLink(doc);
    const updatedArticles = article
      ? project.articles.filter((a) => a.id !== article.id)
      : project.articles;

    const updatedDocs = documents.map((d) =>
      d.id === doc.id
        ? { ...d, status: "draft" as const, updatedAt: new Date().toISOString() }
        : d
    );

    onUpdateProject({
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs,
      updatedAt: new Date().toISOString(),
    });
  };

  // Inserir documento diretamente na revista atual como matéria
  const handleDirectAddToMagazine = (doc: RepositoryDocument) => {
    const { isInMagazine } = getDocMagazineLink(doc);
    if (isInMagazine) {
      alert("Este artigo já está inserido na revista.");
      return;
    }

    const newArt: Article = {
      id: "art-" + Date.now(),
      sourceDocId: doc.id,
      title: doc.title,
      subtitle: `Artigo do acervo editorial // ${doc.category || "Alta Performance"}.`,
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
    const updatedDocs = documents.map((d) =>
      d.id === doc.id
        ? { ...d, status: "published" as const, updatedAt: new Date().toISOString() }
        : d
    );

    onUpdateProject({
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs,
      updatedAt: new Date().toISOString(),
    });
  };

  // On AI Approval
  const handleApproveArticle = (newArticle: Article, sourceDocId?: string) => {
    const finalDocId = sourceDocId || selectedSourceDoc?.id;
    const artWithSource: Article = {
      ...newArticle,
      sourceDocId: finalDocId,
    };
    const updatedArticles = [...project.articles, artWithSource];
    const updatedDocs = finalDocId
      ? documents.map((d) => (d.id === finalDocId ? { ...d, status: "published" as const, updatedAt: new Date().toISOString() } : d))
      : documents;

    onUpdateProject({
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs,
      updatedAt: new Date().toISOString(),
    });

    if (onNavigateToArticles) {
      onNavigateToArticles();
    } else if (onNavigateToViewer) {
      onNavigateToViewer();
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Header Bar */}
      <div className="theme-app-card p-5 rounded-xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              ACERVO & REPOSITÓRIO
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase">
              HUB DE TEXTOS, RASCUNHOS & AUTO-DIAGRAMAÇÃO
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Repositório de Arquivos & Gerador de Artigos por IA
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Faça upload de textos ou escreva seus rascunhos. A IA analisa o volume de palavras, enquadra nas páginas e cria os artigos da revista para sua aprovação.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".txt,.md,.json,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
          />

          <Button
            onClick={() => fileInputRef.current?.click()}
            className="h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Upload className="w-4 h-4 text-black" />
            <span>Upload de Arquivos (.txt / .md)</span>
          </Button>

          <Button
            onClick={handleOpenNewDraft}
            className="h-9 bg-black hover:bg-slate-900 text-white font-bold text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Novo Rascunho</span>
          </Button>
        </div>
      </div>

      {/* Draft Editor Modal / Drawer */}
      {isDraftEditorOpen && (
        <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-md bg-amber-400/5">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-sm font-black uppercase tracking-tight flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-amber-500" />
              <span>{editingDraftId ? "Editar Rascunho no Acervo" : "Escrever Novo Rascunho no Acervo"}</span>
            </h3>
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
              REPOSITÓRIO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <Label className="text-xs font-bold">TÍTULO DO DOCUMENTO / RASCUNHO</Label>
              <Input
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                placeholder="Ex: Análise do Treino Nórdico de Remo e Bioenergética"
                className="theme-app-input font-bold text-xs mt-1 border-2"
              />
            </div>

            <div>
              <Label className="text-xs font-bold">CATEGORIA SUGERIDA</Label>
              <Input
                value={draftCategory}
                onChange={(e) => setDraftCategory(e.target.value.toUpperCase())}
                placeholder="Ex: MONTANHA METHOD"
                className="theme-app-input font-mono text-xs mt-1 border-2 font-bold text-amber-600"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs font-bold">TEXTO COMPLETO DO RASCUNHO</Label>
            <Textarea
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              placeholder="Cole ou escreva o texto bruto aqui. Não se preocupe com formatação; a IA avaliará o volume e diagramará automaticamente..."
              className="theme-app-input text-xs h-44 mt-1 border-2 leading-relaxed font-sans"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-[11px] font-mono font-bold opacity-75">
              Volume: {countWords(draftContent)} palavras
            </span>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsDraftEditorOpen(false)}
                className="h-8 font-bold text-xs border-2"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSaveDraft}
                className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs px-4 border-2 border-black shadow-xs cursor-pointer flex items-center gap-1"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Salvar no Acervo</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-50" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar nos textos do repositório..."
            className="theme-app-input pl-9 text-xs h-9 border-2 w-full"
          />
        </div>

        <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
          <span className="text-[10px] font-bold opacity-75 uppercase mr-1">Status:</span>
          <button
            type="button"
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
              filterStatus === "all" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            Todos ({documents.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus("draft")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
              filterStatus === "draft" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            <FileEdit className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span>Rascunhos Disponíveis ({draftsCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus("published")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
              filterStatus === "published" ? "bg-emerald-600 text-white font-black border-emerald-800 shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Na Revista ({publishedCount})</span>
          </button>
        </div>
      </div>

      {/* Documents Grid / List */}
      {filteredDocs.length === 0 ? (
        <div className="theme-app-card p-10 rounded-xl border-2 text-center space-y-3">
          <FolderOpen className="w-12 h-12 text-amber-500 mx-auto opacity-50" />
          <h3 className="text-base font-black uppercase">Nenhum documento encontrado no acervo</h3>
          <p className="text-xs opacity-75 max-w-md mx-auto">
            Faça upload de arquivos <code>.txt</code> / <code>.md</code> do seu computador ou crie seu primeiro rascunho de artigo para a IA analisar e diagramar.
          </p>
          <div className="pt-2 flex justify-center gap-2">
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 mr-1" />
              Upload de Arquivo
            </Button>
            <Button
              onClick={handleOpenNewDraft}
              variant="outline"
              className="font-bold text-xs border-2 border-current cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Escrever Rascunho
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc) => {
            const isDocAnalyzing = isAnalyzing && analyzingDocId === doc.id;
            const { isInMagazine, article: linkedArt } = getDocMagazineLink(doc);

            // Page number if in magazine
            let pageBadgeText = "";
            if (linkedArt) {
              const idx = project.articles.findIndex((a) => a.id === linkedArt.id);
              const approxPage = (idx >= 0 ? idx : 0) + 4;
              pageBadgeText = `PÁG. ${approxPage.toString().padStart(2, "0")}`;
            }

            return (
              <div
                key={doc.id}
                className={`theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-3 shadow-sm ${
                  isInMagazine ? "border-emerald-500/50 bg-emerald-500/5 ring-1 ring-emerald-500/20" : "border-slate-300 dark:border-slate-700 hover:border-black dark:hover:border-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                        {doc.category || "GERAL"}
                      </span>
                      {doc.sourceFileName && (
                        <span className="text-[9px] font-mono opacity-60 flex items-center gap-1 truncate max-w-[130px]">
                          <FileText className="w-3 h-3 shrink-0" />
                          <span className="truncate">{doc.sourceFileName}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isInMagazine ? (
                        <div className="flex items-center gap-1">
                          <span className="bg-emerald-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>PUBLICADO NA REVISTA</span>
                          </span>
                          {pageBadgeText && (
                            <span className="font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                              {pageBadgeText}
                            </span>
                          )}
                          {linkedArt?.enabled === false && (
                            <span className="bg-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded uppercase border border-amber-500/40">
                              PAUSADO
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[8.5px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 border border-slate-300 dark:border-slate-700">
                          <FileEdit className="w-3 h-3 text-amber-500" />
                          <span>RASCUNHO DISPONÍVEL</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-black text-sm uppercase tracking-tight leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs opacity-75 line-clamp-3 mt-1.5 leading-relaxed">
                    {doc.rawContent}
                  </p>
                </div>

                <div className="pt-2 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3 font-mono text-[10px] font-bold text-amber-600">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {doc.wordCount} palavras
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{Math.max(1, Math.round(doc.wordCount / 130))} min
                    </span>
                    <span>•</span>
                    <span className="opacity-60">
                      {doc.wordCount > 550 ? "2 Págs Sugeridas" : "1 Pág Sugerida"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {isInMagazine ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleRemoveFromMagazine(doc)}
                          className="h-7 px-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800 rounded font-bold text-[10px] flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-xs"
                          title="Remover esta matéria da revista e retornar para status de Rascunho no Acervo"
                        >
                          <Undo2 className="w-3 h-3" />
                          <span>Remover da Revista</span>
                        </button>

                        {linkedArt && (
                          <button
                            type="button"
                            onClick={() => onOpenArticleEditor(linkedArt)}
                            className="h-7 px-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded font-bold text-[10px] flex items-center gap-1 cursor-pointer transition-all shadow-xs"
                            title="Abrir o editor da matéria diagramada na revista"
                          >
                            <BookOpen className="w-3 h-3 text-amber-500" />
                            <span>Ver Matéria</span>
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          onClick={() => handleDirectAddToMagazine(doc)}
                          className="h-7 px-2.5 bg-amber-400 hover:bg-amber-500 text-black font-black text-[10px] border border-black shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
                          title="Inserir diretamente como matéria na revista atual"
                        >
                          <Plus className="w-3 h-3 text-black" />
                          <span>Colocar na Revista</span>
                        </Button>

                        <Button
                          size="sm"
                          onClick={() => handleTriggerAiAnalysis(doc)}
                          disabled={isDocAnalyzing}
                          className="h-7 px-2.5 bg-black hover:bg-slate-900 text-white font-bold text-[10px] border border-black shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
                          title={isDocAnalyzing ? "Analisando com IA..." : "Diagramar com IA"}
                        >
                          {isDocAnalyzing ? (
                            <Loader2 className="w-3 h-3 animate-spin text-amber-400" />
                          ) : (
                            <Wand2 className="w-3 h-3 text-amber-400" />
                          )}
                          <span>{isDocAnalyzing ? "Analisando..." : "Diagramar IA"}</span>
                        </Button>
                      </>
                    )}

                    <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5 hidden sm:block" />

                    <button
                      type="button"
                      onClick={() => setPreviewDoc(doc)}
                      className="p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer"
                      title="Pré-visualizar / Ler Texto"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-600" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEditDraft(doc)}
                      className="p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer"
                      title="Editar Rascunho no Acervo"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setDocToDelete(doc)}
                      className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded cursor-pointer"
                      title="Excluir Documento do Acervo"
                      aria-label="Excluir Documento"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Reading Modal */}
      {previewDoc && (
        <Dialog open={Boolean(previewDoc)} onOpenChange={() => setPreviewDoc(null)}>
          <DialogContent className="theme-app-card max-w-2xl max-h-[85vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl">
            <DialogHeader className="border-b-2 border-current pb-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                  {previewDoc.category || "GERAL"}
                </span>
                <span className="text-[10px] font-mono opacity-75 font-bold">
                  {previewDoc.wordCount} PALAVRAS • ~{Math.max(1, Math.round(previewDoc.wordCount / 130))} MIN DE LEITURA
                </span>
              </div>
              <DialogTitle className="text-base sm:text-lg font-black uppercase tracking-tight mt-1">
                {previewDoc.title}
              </DialogTitle>
            </DialogHeader>

            <div className="my-4 theme-app-card-subtle p-4 rounded-xl border-2 max-h-[50vh] overflow-y-auto custom-scrollbar font-sans text-xs leading-relaxed whitespace-pre-wrap">
              {previewDoc.rawContent}
            </div>

            <DialogFooter className="border-t pt-3 flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const doc = previewDoc;
                  setPreviewDoc(null);
                  handleEditDraft(doc);
                }}
                className="h-8 text-xs font-bold border-2 flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editar Rascunho</span>
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewDoc(null)}
                  className="h-8 text-xs font-bold border-2"
                >
                  Fechar
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    const doc = previewDoc;
                    setPreviewDoc(null);
                    handleTriggerAiAnalysis(doc);
                  }}
                  className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border border-black shadow-xs cursor-pointer flex items-center gap-1"
                >
                  <Wand2 className="w-3.5 h-3.5 text-black" />
                  <span>⚡ Diagramar com IA</span>
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* AI Approval Modal */}
      <AiApprovalModal
        isOpen={isApprovalModalOpen}
        onClose={() => setIsApprovalModalOpen(false)}
        analysis={analysisResult}
        sourceDoc={selectedSourceDoc}
        onApprove={handleApproveArticle}
        onOpenAdvancedEditor={(draftArticle) => {
          handleApproveArticle(draftArticle, selectedSourceDoc?.id);
          onOpenArticleEditor(draftArticle);
        }}
      />

      {/* Dialog de Confirmação de Exclusão do Acervo */}
      <Dialog open={Boolean(docToDelete)} onOpenChange={() => setDocToDelete(null)}>
        <DialogContent className="theme-app-card max-w-md p-5 font-sans border-2 border-black shadow-2xl">
          <DialogHeader className="border-b-2 pb-2.5">
            <DialogTitle className="text-base font-black flex items-center gap-2 text-red-600 uppercase">
              <Trash2 className="w-5 h-5" />
              <span>Excluir Documento do Acervo</span>
            </DialogTitle>
          </DialogHeader>

          <div className="py-3 text-xs space-y-2">
            <p className="opacity-90 leading-relaxed">
              Tem certeza que deseja remover o documento <strong>"{docToDelete?.title}"</strong> do acervo editorial?
            </p>
            <div className="p-2.5 rounded bg-red-500/10 border border-red-500/20 text-[11px] text-red-700 dark:text-red-300 font-medium">
              Esta ação removerá o texto do repositório. Artigos que já foram diagramados e publicados na revista permanecerão salvos normalmente.
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 border-t pt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDocToDelete(null)}
              className="h-8 font-bold text-xs"
            >
              Cancelar
            </Button>
            <Button
              size="sm"
              onClick={handleConfirmDeleteDoc}
              className="h-8 bg-red-600 hover:bg-red-700 text-white font-black text-xs cursor-pointer shadow-xs"
            >
              Sim, Excluir Documento
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
