import React, { useState, useRef, useEffect, useMemo } from "react";
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
import { analyzeAndDiagramEditorialText, EditorialAnalysisResult } from "../../lib/ai-service";
import { AiApprovalModal } from "./AiApprovalModal";
import { PdfImportModal } from "./PdfImportModal";
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
  Archive,
  Sparkles,
  History,
  Tag,
  Copy,
  FolderSync,
  RefreshCw,
  CloudDownload,
  ExternalLink,
  AlertCircle,
  LayoutGrid,
  Table as TableIcon,
  Columns as KanbanViewIcon,
} from "lucide-react";
import { DataGrid, DataGridColumn, DataGridAction } from "../ui/data-grid";
import { Kanban, KanbanColumnDef, KanbanItemDef } from "../ui/kanban";
import {
  getArchivedEditions,
  getDocumentUsageTracker,
  toggleDocPublishedEdition,
  ArchivedEdition,
  DocumentUsageTracker,
} from "../../lib/editions-archive";
import {
  getGoogleDriveStatus,
  connectGoogleDrive,
  syncProjectToGoogleDrive,
  uploadSingleDocumentToGoogleDrive,
  pullNewTextsFromGoogleDrive,
  getGoogleDriveFolderUrl,
  GoogleDriveStatus,
  DEDICATED_FOLDER_NAME,
} from "../../lib/google-drive-sync";

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
  const [filterStatus, setFilterStatus] = useState<
    "all" | "unused" | "current" | "previous" | "draft" | "published"
  >("all");
  const [repoViewMode, setRepoViewMode] = useState<"cards" | "table" | "kanban">("cards");
  const [selectedDocIds, setSelectedDocIds] = useState<string[]>([]);

  // Edições Arquivadas & Controle de Pauta
  const [archivedEditions, setArchivedEditions] = useState<ArchivedEdition[]>([]);
  const [docForHistory, setDocForHistory] = useState<RepositoryDocument | null>(null);
  const [manualEditionInput, setManualEditionInput] = useState<string>("");

  useEffect(() => {
    setArchivedEditions(getArchivedEditions());
    const onArchiveChange = () => setArchivedEditions(getArchivedEditions());
    window.addEventListener("montanha-archive-changed", onArchiveChange);
    return () => window.removeEventListener("montanha-archive-changed", onArchiveChange);
  }, []);

  // New/Editing Draft State
  const [isDraftEditorOpen, setIsDraftEditorOpen] = useState<boolean>(false);
  const [editingDraftId, setEditingDraftId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState<string>("");
  const [draftContent, setDraftContent] = useState<string>("");
  const [draftCategory, setDraftCategory] = useState<string>("MONTANHA METHOD");
  const [draftPublishedEditions, setDraftPublishedEditions] = useState<string[]>([]);
  const [newEdTagInput, setNewEdTagInput] = useState<string>("");

  // AI Analysis & Approval State
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analyzingDocId, setAnalyzingDocId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<EditorialAnalysisResult | null>(null);
  const [selectedSourceDoc, setSelectedSourceDoc] = useState<RepositoryDocument | null>(null);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [previewDoc, setPreviewDoc] = useState<RepositoryDocument | null>(null);
  const [docToDelete, setDocToDelete] = useState<RepositoryDocument | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Google Drive Sync State
  const [driveStatus, setDriveStatus] = useState<GoogleDriveStatus>(() => getGoogleDriveStatus());
  const [isSyncingDrive, setIsSyncingDrive] = useState<boolean>(false);
  const [isPullingDrive, setIsPullingDrive] = useState<boolean>(false);
  const [driveFeedback, setDriveFeedback] = useState<string | null>(null);

  useEffect(() => {
    const handleDriveChange = () => setDriveStatus(getGoogleDriveStatus());
    window.addEventListener("montanha-gdrive-status-changed", handleDriveChange);
    return () => window.removeEventListener("montanha-gdrive-status-changed", handleDriveChange);
  }, []);

  const handleConnectDrive = async () => {
    setIsSyncingDrive(true);
    setDriveFeedback(null);
    try {
      const res = await connectGoogleDrive();
      if (res.success) {
        setDriveFeedback(`✓ Conectado ao Google Drive (${res.email})! Sincronizando acervo...`);
        await syncProjectToGoogleDrive(project);
        setDriveFeedback(`✓ Conectado e acervo sincronizado com "${DEDICATED_FOLDER_NAME}"!`);
      } else {
        setDriveFeedback(`Aviso: ${res.error || "Não foi possível conectar."}`);
      }
    } catch (e: any) {
      setDriveFeedback(`Erro ao conectar: ${e?.message || e}`);
    } finally {
      setIsSyncingDrive(false);
      setDriveStatus(getGoogleDriveStatus());
    }
  };

  const handleSyncToDrive = async () => {
    setIsSyncingDrive(true);
    setDriveFeedback(null);
    try {
      const res = await syncProjectToGoogleDrive(project);
      if (res.success) {
        const time = new Date().toLocaleTimeString("pt-BR");
        setDriveFeedback(`✓ Acervo salvo no Google Drive às ${time}! (${project.contentRepository?.length || 0} textos)`);
      } else {
        setDriveFeedback(`Falha ao salvar no Drive: ${res.error}`);
      }
    } catch (e: any) {
      setDriveFeedback(`Erro: ${e?.message || e}`);
    } finally {
      setIsSyncingDrive(false);
    }
  };

  const handlePullFromDrive = async () => {
    setIsPullingDrive(true);
    setDriveFeedback(null);
    try {
      const result = await pullNewTextsFromGoogleDrive(project.contentRepository || []);
      let updatedRepo = [...(project.contentRepository || [])];

      if (result.updatedDocs.length > 0) {
        const updateMap = new Map(result.updatedDocs.map((d) => [d.id, d]));
        updatedRepo = updatedRepo.map((d) => updateMap.get(d.id) || d);
      }

      if (result.newDocs.length > 0) {
        updatedRepo = [...result.newDocs, ...updatedRepo];
      }

      if (result.newDocs.length > 0 || result.updatedDocs.length > 0) {
        const updatedProj = {
          ...project,
          contentRepository: updatedRepo,
          updatedAt: new Date().toISOString(),
        };
        onUpdateProject(updatedProj);
        setDriveFeedback(
          `✓ Puxado do Drive com sucesso: ${result.newDocs.length} novo(s) texto(s), ${result.updatedDocs.length} atualizado(s)!`
        );
      } else {
        setDriveFeedback("✓ Pasta do Google Drive em dia. Nenhum novo arquivo encontrado.");
      }
    } catch (e: any) {
      setDriveFeedback(`Erro ao puxar do Drive: ${e?.message || e}`);
    } finally {
      setIsPullingDrive(false);
    }
  };

  const documents = project.contentRepository || [];

  // Mapeamento dinâmico e rastreamento editorial tridimensional de cada documento
  const docsWithTracker = useMemo(() => {
    return documents.map((doc) => {
      const tracker = getDocumentUsageTracker(doc, project, archivedEditions);
      return { doc, tracker };
    });
  }, [documents, project, archivedEditions]);

  const unusedCount = docsWithTracker.filter((item) => item.tracker.isUnusedDraft).length;
  const currentCount = docsWithTracker.filter((item) => item.tracker.isInCurrentMagazine).length;
  const previousCount = docsWithTracker.filter((item) => item.tracker.previousEditions.length > 0).length;

  // Documentos filtrados por busca e status editorial
  const filteredDocsWithTracker = docsWithTracker.filter(({ doc, tracker }) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterStatus === "all") return true;
    if (filterStatus === "unused" || filterStatus === "draft") {
      return filterStatus === "unused" ? tracker.isUnusedDraft : !tracker.isInCurrentMagazine;
    }
    if (filterStatus === "current" || filterStatus === "published") {
      return tracker.isInCurrentMagazine;
    }
    if (filterStatus === "previous") {
      return tracker.previousEditions.length > 0;
    }
    return true;
  });

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

  // Handle File Upload (.txt, .md, .doc, .docx, .json)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const hasPdf = fileList.some((f) => f.name.toLowerCase().endsWith(".pdf"));
    if (hasPdf) {
      setIsPdfModalOpen(true);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    const newDocsToAdd: RepositoryDocument[] = [];
    let processedCount = 0;

    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const textContent = (event.target?.result as string) || "";
        if (textContent.trim()) {
          const wordCount = countWords(textContent);
          const autoTitle = file.name
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .trim()
            .toUpperCase();

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
          newDocsToAdd.push(newDoc);
        }

        processedCount++;
        if (processedCount === fileList.length && newDocsToAdd.length > 0) {
          const updatedRepo = [...newDocsToAdd, ...(project.contentRepository || [])];
          const updatedProj: MagazineProject = {
            ...project,
            contentRepository: updatedRepo,
            updatedAt: new Date().toISOString(),
          };
          onUpdateProject(updatedProj);

          // Se Google Drive estiver conectado, sincronizar imediatamente na nuvem!
          if (driveStatus.isConnected) {
            syncProjectToGoogleDrive(updatedProj).then((res) => {
              if (res.success) {
                setDriveFeedback(
                  `✓ ${newDocsToAdd.length} texto(s) importado(s) e sincronizado(s) no Google Drive!`
                );
              }
            });
          }
        }
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
    setDraftPublishedEditions([]);
    setNewEdTagInput("");
    setIsDraftEditorOpen(true);
  };

  const handleEditDraft = (doc: RepositoryDocument) => {
    setEditingDraftId(doc.id);
    setDraftTitle(doc.title);
    setDraftContent(doc.rawContent);
    setDraftCategory(doc.category || "MONTANHA METHOD");
    setDraftPublishedEditions((doc.publishedEditions || []).map((e) => e.editionNumber));
    setNewEdTagInput("");
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

    const publishedEditionsRecords = draftPublishedEditions.map((edNum) => ({
      editionNumber: edNum,
      editionTitle: `Edição #${edNum}`,
      isManual: true,
      publishedAt: now,
    }));

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
              publishedEditions: publishedEditionsRecords,
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
        publishedEditions: publishedEditionsRecords,
        createdAt: now,
        updatedAt: now,
      };
      updatedList = [newDoc, ...documents];
    }

    const updatedProj: MagazineProject = {
      ...project,
      contentRepository: updatedList,
      updatedAt: now,
    };

    onUpdateProject(updatedProj);

    // Se Google Drive estiver conectado, salvar o rascunho na nuvem!
    if (driveStatus.isConnected) {
      const savedDoc = updatedList.find((d) => (editingDraftId ? d.id === editingDraftId : d.title === draftTitle));
      if (savedDoc) {
        uploadSingleDocumentToGoogleDrive(savedDoc).then((ok) => {
          if (ok) {
            setDriveFeedback(`✓ Rascunho "${savedDoc.title}" sincronizado no Google Drive!`);
          }
        });
      }
    }

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

  // Bulk Add Selected Documents to Magazine
  const handleBulkAddToMagazine = (selectedItems: Array<{ doc: RepositoryDocument; tracker: DocumentUsageTracker }>) => {
    const toAdd = selectedItems.filter((item) => !item.tracker.isInCurrentMagazine);
    if (toAdd.length === 0) {
      alert("Todos os textos selecionados já estão na revista atual.");
      return;
    }

    const newArticles: Article[] = toAdd.map(({ doc }) => ({
      id: "art-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
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
    }));

    const updatedArticles = [...project.articles, ...newArticles];
    const addedDocIds = new Set(toAdd.map((item) => item.doc.id));
    const updatedDocs = documents.map((d) =>
      addedDocIds.has(d.id)
        ? { ...d, status: "published" as const, updatedAt: new Date().toISOString() }
        : d
    );

    onUpdateProject({
      ...project,
      articles: updatedArticles,
      contentRepository: updatedDocs,
      updatedAt: new Date().toISOString(),
    });
    setSelectedDocIds([]);
    alert(`✓ ${toAdd.length} artigo(s) adicionado(s) à revista atual!`);
  };

  // Bulk Delete Selected Documents
  const handleBulkDeleteDocs = (selectedItems: Array<{ doc: RepositoryDocument; tracker: DocumentUsageTracker }>) => {
    if (
      !window.confirm(
        `Tem certeza que deseja excluir ${selectedItems.length} documento(s) selecionado(s) do acervo?\nEsta ação não poderá ser desfeita.`
      )
    ) {
      return;
    }
    const idsToDelete = new Set(selectedItems.map((item) => item.doc.id));
    onUpdateProject({
      ...project,
      contentRepository: documents.filter((d) => !idsToDelete.has(d.id)),
      updatedAt: new Date().toISOString(),
    });
    setSelectedDocIds([]);
  };

  // Kanban Move Item Handler
  const handleKanbanMove = (docId: string, targetColId: string) => {
    const item = docsWithTracker.find((d) => d.doc.id === docId);
    if (!item) return;
    const { doc, tracker } = item;

    if (targetColId === "current") {
      if (!tracker.isInCurrentMagazine) {
        handleDirectAddToMagazine(doc);
      }
    } else if (targetColId === "unused") {
      if (tracker.isInCurrentMagazine) {
        handleRemoveFromMagazine(doc);
      }
    } else if (targetColId === "previous") {
      if (tracker.isInCurrentMagazine) {
        handleRemoveFromMagazine(doc);
      }
      const edNum = project.editionNumber || "01";
      if (!(doc.publishedEditions || []).some((e) => e.editionNumber === edNum)) {
        const updatedList = documents.map((d) =>
          d.id === doc.id
            ? {
                ...d,
                publishedEditions: [
                  ...(d.publishedEditions || []),
                  {
                    editionNumber: edNum,
                    editionTitle: `Edição #${edNum}`,
                    isManual: true,
                    publishedAt: new Date().toISOString(),
                  },
                ],
                updatedAt: new Date().toISOString(),
              }
            : d
        );
        onUpdateProject({
          ...project,
          contentRepository: updatedList,
          updatedAt: new Date().toISOString(),
        });
      }
    }
  };

  // DataGrid Columns Definition
  const dataGridColumns: DataGridColumn<{ doc: RepositoryDocument; tracker: DocumentUsageTracker }>[] = [
    {
      key: "title",
      header: "Artigo / Título",
      sortable: true,
      render: ({ doc }) => (
        <div className="space-y-0.5">
          <p
            className="font-bold text-xs uppercase tracking-tight text-zinc-100 hover:text-amber-400 transition-colors cursor-pointer"
            onClick={() => setPreviewDoc(doc)}
          >
            {doc.title}
          </p>
          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            {doc.sourceFileName && (
              <span className="flex items-center gap-1 font-mono truncate max-w-[140px]">
                <FileText className="w-3 h-3 text-amber-500" /> {doc.sourceFileName}
              </span>
            )}
            <span className="line-clamp-1 italic text-zinc-500 max-w-sm">
              {doc.rawContent.slice(0, 80)}...
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      header: "Categoria",
      width: "130px",
      sortable: true,
      render: ({ doc }) => (
        <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
          {doc.category || "GERAL"}
        </span>
      ),
    },
    {
      key: "wordCount",
      header: "Volume",
      width: "110px",
      sortable: true,
      render: ({ doc }) => (
        <div className="font-mono text-xs">
          <span className="font-bold text-amber-500">{doc.wordCount}</span>
          <span className="text-[10px] text-zinc-400 ml-1">palavras</span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status Editorial",
      width: "170px",
      render: ({ tracker }) => {
        if (tracker.isInCurrentMagazine) {
          return (
            <div className="flex items-center gap-1 flex-wrap">
              <span className="bg-emerald-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs">
                <Check className="w-3 h-3 stroke-[3]" />
                <span>NA REVISTA</span>
              </span>
              {tracker.currentPageNumber && (
                <span className="font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                  PÁG. {tracker.currentPageNumber.toString().padStart(2, "0")}
                </span>
              )}
            </div>
          );
        }
        if (tracker.previousEditions.length > 0) {
          return (
            <span className="bg-indigo-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs">
              <Archive className="w-3 h-3 text-white" />
              <span>ED. #{tracker.previousEditions.map((e) => e.editionNumber).join(", ")}</span>
            </span>
          );
        }
        return (
          <span className="bg-zinc-800 text-zinc-300 font-mono text-[8.5px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 border border-zinc-700">
            <FileEdit className="w-3 h-3 text-amber-500" />
            <span>RASCUNHO DISPONÍVEL</span>
          </span>
        );
      },
    },
    {
      key: "actions",
      header: "Ações",
      width: "210px",
      align: "right",
      render: ({ doc, tracker }) => {
        const isDocAnalyzing = isAnalyzing && analyzingDocId === doc.id;
        return (
          <div className="flex items-center justify-end gap-1.5">
            {tracker.isInCurrentMagazine ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleRemoveFromMagazine(doc)}
                className="h-7 px-2 text-[10px] font-bold border border-amber-500/50 text-amber-400 hover:bg-amber-400/10 cursor-pointer"
                title="Remover da revista"
              >
                <Undo2 className="w-3 h-3 mr-1" />
                <span>Remover</span>
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => handleDirectAddToMagazine(doc)}
                className="h-7 px-2 bg-amber-400 hover:bg-amber-500 text-black font-black text-[10px] border border-black cursor-pointer shadow-xs"
                title="Inserir na revista atual"
              >
                <Plus className="w-3 h-3 mr-0.5" />
                <span>Colocar</span>
              </Button>
            )}

            <Button
              size="sm"
              onClick={() => handleTriggerAiAnalysis(doc)}
              disabled={isDocAnalyzing}
              className="h-7 px-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-[10px] border border-zinc-700 cursor-pointer"
              title="Diagramar com IA"
            >
              {isDocAnalyzing ? <Loader2 className="w-3 h-3 animate-spin text-amber-400" /> : <Wand2 className="w-3 h-3 text-amber-400" />}
            </Button>

            <button
              type="button"
              onClick={() => handleEditDraft(doc)}
              className="p-1.5 opacity-70 hover:opacity-100 hover:bg-white/10 rounded cursor-pointer"
              title="Editar rascunho"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setDocToDelete(doc)}
              className="p-1.5 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded cursor-pointer"
              title="Excluir documento"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      },
    },
  ];

  // DataGrid Bulk Actions
  const dataGridBulkActions: DataGridAction<{ doc: RepositoryDocument; tracker: DocumentUsageTracker }>[] = [
    {
      label: "Adicionar Selecionados à Revista",
      icon: Plus,
      variant: "default",
      className: "bg-amber-400 hover:bg-amber-500 text-black border-black",
      onClick: (selectedRows) => handleBulkAddToMagazine(selectedRows),
    },
    {
      label: "Excluir Selecionados",
      icon: Trash2,
      variant: "destructive",
      onClick: (selectedRows) => handleBulkDeleteDocs(selectedRows),
    },
  ];

  // Kanban Columns Definition
  const kanbanColumns: KanbanColumnDef[] = [
    {
      id: "unused",
      title: "Rascunhos Inéditos",
      icon: Sparkles,
      badgeColor: "bg-amber-400 text-black border-black",
      description: "Textos livres no acervo, prontos para diagramar.",
    },
    {
      id: "current",
      title: "Na Revista Atual",
      icon: Check,
      badgeColor: "bg-emerald-600 text-white border-emerald-800",
      description: `Matérias diagramadas na Edição #${project.editionNumber || "01"}.`,
    },
    {
      id: "previous",
      title: "Edições Anteriores",
      icon: Archive,
      badgeColor: "bg-indigo-600 text-white border-indigo-800",
      description: "Artigos veiculados em edições passadas do acervo.",
    },
  ];

  const kanbanItems: KanbanItemDef[] = filteredDocsWithTracker.map(({ doc, tracker }) => {
    let colId = "unused";
    if (tracker.isInCurrentMagazine) {
      colId = "current";
    } else if (tracker.previousEditions.length > 0) {
      colId = "previous";
    }

    return {
      id: doc.id,
      columnId: colId,
      title: doc.title,
      category: doc.category || "GERAL",
      meta: `${doc.wordCount} pal.`,
      description: doc.rawContent.slice(0, 110) + "...",
      rawItem: doc,
    };
  });

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
            accept=".txt,.md,.json,.doc,.docx,.pdf"
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Google Drive Status & Controls */}
          {driveStatus.isConnected ? (
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-lg p-1">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                DRIVE CONECTADO
              </span>
              <Button
                size="sm"
                onClick={handleSyncToDrive}
                disabled={isSyncingDrive}
                className="h-7 px-2 bg-amber-400 hover:bg-amber-500 text-black font-black text-[11px] border border-black cursor-pointer flex items-center gap-1"
                title="Salvar acervo completo na pasta do Google Drive"
              >
                {isSyncingDrive ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                <span>Salvar no Drive</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handlePullFromDrive}
                disabled={isPullingDrive}
                className="h-7 px-2 font-bold text-[11px] border cursor-pointer flex items-center gap-1 hover:bg-amber-400/20"
                title="Importar novos textos colocados na pasta do Google Drive"
              >
                {isPullingDrive ? <Loader2 className="w-3 h-3 animate-spin text-amber-500" /> : <CloudDownload className="w-3 h-3 text-amber-500" />}
                <span>Puxar do Drive</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => window.open(getGoogleDriveFolderUrl(driveStatus.folderId), "_blank")}
                className="h-7 px-1.5 text-[11px] cursor-pointer"
                title="Abrir pasta no Google Drive"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleConnectDrive}
              disabled={isSyncingDrive}
              variant="outline"
              className="h-9 border-2 border-current font-bold text-xs cursor-pointer flex items-center gap-1.5 hover:bg-amber-400/20"
              title="Conectar ao Google Drive para sincronizar textos em nuvem entre aparelhos"
            >
              <FolderSync className="w-4 h-4 text-amber-500" />
              <span>Conectar Google Drive</span>
            </Button>
          )}

          {/* Importação Inteligente de PDFs via pdf-conversion-router */}
          <Button
            onClick={() => setIsPdfModalOpen(true)}
            className="h-9 bg-zinc-950 hover:bg-zinc-900 text-amber-400 hover:text-amber-300 font-black text-xs border-2 border-amber-400 shadow-sm cursor-pointer flex items-center gap-1.5"
            title="Importar PDF Inteligente com classificação e roteamento de matérias"
            data-testid="btn-open-pdf-router"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Importar PDF (Router)</span>
          </Button>

          <Button
            onClick={() => fileInputRef.current?.click()}
            className="h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Upload className="w-4 h-4 text-black" />
            <span>Upload (.txt / .md)</span>
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

      {/* Drive Feedback Alert Banner */}
      {driveFeedback && (
        <div
          className={`p-3 rounded-lg border-2 text-xs font-bold flex items-center justify-between gap-2 shadow-xs ${
            driveFeedback.startsWith("Aviso") || driveFeedback.startsWith("Erro")
              ? "bg-amber-500/15 border-amber-500/50 text-amber-900 dark:text-amber-200"
              : "bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {driveFeedback.startsWith("Aviso") || driveFeedback.startsWith("Erro") ? (
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
            <span>{driveFeedback}</span>
          </div>
          <button
            onClick={() => setDriveFeedback(null)}
            className="text-[11px] underline opacity-70 hover:opacity-100 cursor-pointer"
          >
            fechar
          </button>
        </div>
      )}

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

          {/* Histórico em Edições Anteriores (Opcional) */}
          <div className="p-3 rounded-lg border-2 theme-app-card-subtle space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-bold flex items-center gap-1.5">
                <Archive className="w-3.5 h-3.5 text-indigo-500" />
                <span>EDIÇÕES ANTERIORES EM QUE ESTE TEXTO JÁ FOI VEICULADO (OPCIONAL)</span>
              </Label>
              <span className="text-[10px] opacity-60 font-mono">
                Para controle de textos já publicados no acervo
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {draftPublishedEditions.map((edNum, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-600 text-white font-mono text-xs font-black px-2.5 py-1 rounded flex items-center gap-1.5 shadow-xs"
                >
                  <span>Edição #{edNum}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setDraftPublishedEditions(draftPublishedEditions.filter((_, i) => i !== idx))
                    }
                    className="hover:text-red-300 font-bold ml-1 cursor-pointer"
                    title="Remover edição"
                  >
                    ×
                  </button>
                </span>
              ))}

              <div className="flex items-center gap-1.5">
                <Input
                  value={newEdTagInput}
                  onChange={(e) => setNewEdTagInput(e.target.value)}
                  placeholder="Ex: 01, 02..."
                  className="theme-app-input h-7 w-28 text-xs font-mono font-bold"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (newEdTagInput.trim() && !draftPublishedEditions.includes(newEdTagInput.trim())) {
                        setDraftPublishedEditions([...draftPublishedEditions, newEdTagInput.trim()]);
                        setNewEdTagInput("");
                      }
                    }
                  }}
                />
                <Button
                  type="button"
                  size="sm"
                  onClick={() => {
                    if (newEdTagInput.trim() && !draftPublishedEditions.includes(newEdTagInput.trim())) {
                      setDraftPublishedEditions([...draftPublishedEditions, newEdTagInput.trim()]);
                      setNewEdTagInput("");
                    }
                  }}
                  className="h-7 px-2.5 text-[10px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                >
                  + Adicionar
                </Button>
              </div>
            </div>
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

      {/* Editorial Control & Inventory Dashboard (Avisos de Pauta) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Card 1: Rascunhos Inéditos */}
        <button
          type="button"
          data-testid="stat-card-unused"
          onClick={() => setFilterStatus(filterStatus === "unused" ? "all" : "unused")}
          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${
            filterStatus === "unused"
              ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/30"
              : "theme-app-card hover:border-amber-400"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              RASCUNHOS INÉDITOS
            </span>
            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black shadow-xs">
              {unusedCount}
            </span>
          </div>
          <div className="text-xl font-black tracking-tight">
            {unusedCount} {unusedCount === 1 ? "texto disponível" : "textos disponíveis"}
          </div>
          <p className="text-[11px] opacity-75 mt-1 leading-snug">
            Nunca utilizados em nenhuma edição. 100% livres para novas pautas.
          </p>
        </button>

        {/* Card 2: Na Edição Atual */}
        <button
          type="button"
          data-testid="stat-card-current"
          onClick={() => setFilterStatus(filterStatus === "current" ? "all" : "current")}
          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${
            filterStatus === "current"
              ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/30"
              : "theme-app-card hover:border-emerald-500"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-black uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              NA REVISTA ATUAL
            </span>
            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-emerald-600 text-white border border-emerald-800 shadow-xs">
              {currentCount}
            </span>
          </div>
          <div className="text-xl font-black tracking-tight">
            {currentCount} {currentCount === 1 ? "matéria diagramada" : "matérias diagramadas"}
          </div>
          <p className="text-[11px] opacity-75 mt-1 leading-snug">
            Atualmente na Edição #{project.editionNumber || "01"}. Prontas para publicação.
          </p>
        </button>

        {/* Card 3: Em Edições Anteriores */}
        <button
          type="button"
          data-testid="stat-card-previous"
          onClick={() => setFilterStatus(filterStatus === "previous" ? "all" : "previous")}
          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${
            filterStatus === "previous"
              ? "border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30"
              : "theme-app-card hover:border-indigo-500"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-black uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Archive className="w-3.5 h-3.5" />
              EDIÇÕES ANTERIORES
            </span>
            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-indigo-600 text-white border border-indigo-800 shadow-xs">
              {previousCount}
            </span>
          </div>
          <div className="text-xl font-black tracking-tight">
            {previousCount} {previousCount === 1 ? "artigo veiculado" : "artigos veiculados"}
          </div>
          <p className="text-[11px] opacity-75 mt-1 leading-snug">
            Publicados em edições passadas do acervo. Reutilizáveis a qualquer momento.
          </p>
        </button>
      </div>

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
            data-testid="filter-tab-all"
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${
              filterStatus === "all" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            Todos ({documents.length})
          </button>
          <button
            type="button"
            data-testid="filter-tab-draft"
            onClick={() => setFilterStatus("unused")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
              filterStatus === "unused" || filterStatus === "draft" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span>Rascunhos Disponíveis ({unusedCount})</span>
          </button>
          <button
            type="button"
            data-testid="filter-tab-current"
            onClick={() => setFilterStatus("current")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
              filterStatus === "current" || filterStatus === "published" ? "bg-emerald-600 text-white font-black border-emerald-800 shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Na Revista ({currentCount})</span>
          </button>
          <button
            type="button"
            data-testid="filter-tab-previous"
            onClick={() => setFilterStatus("previous")}
            className={`px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
              filterStatus === "previous" ? "bg-indigo-600 text-white font-black border-indigo-800 shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"
            }`}
          >
            <Archive className="w-3 h-3 text-white" />
            <span>Em Edições Anteriores ({previousCount})</span>
          </button>
        </div>
      </div>

      {/* View Switcher: Cards | Tabela | Kanban */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase text-zinc-400">
            {filteredDocsWithTracker.length} {filteredDocsWithTracker.length === 1 ? "texto listado" : "textos listados"}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold opacity-75 uppercase mr-1">Visualização:</span>
          <div className="inline-flex rounded-lg border-2 border-zinc-800 p-0.5 bg-zinc-900">
            <button
              type="button"
              data-testid="repo-view-cards"
              onClick={() => setRepoViewMode("cards")}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                repoViewMode === "cards"
                  ? "bg-amber-400 text-black font-black shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              data-testid="repo-view-table"
              onClick={() => setRepoViewMode("table")}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                repoViewMode === "table"
                  ? "bg-amber-400 text-black font-black shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Tabela</span>
            </button>
            <button
              type="button"
              data-testid="repo-view-kanban"
              onClick={() => setRepoViewMode("kanban")}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                repoViewMode === "kanban"
                  ? "bg-amber-400 text-black font-black shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <KanbanViewIcon className="w-3.5 h-3.5" />
              <span>Kanban</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documents Grid / Table / Kanban */}
      {filteredDocsWithTracker.length === 0 ? (
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
      ) : repoViewMode === "table" ? (
        <DataGrid
          data={filteredDocsWithTracker}
          columns={dataGridColumns}
          keyExtractor={(item) => item.doc.id}
          selectedIds={selectedDocIds}
          onSelectionChange={setSelectedDocIds}
          bulkActions={dataGridBulkActions}
        />
      ) : repoViewMode === "kanban" ? (
        <Kanban
          columns={kanbanColumns}
          items={kanbanItems}
          onMoveItem={handleKanbanMove}
          onItemClick={(item) => {
            const found = filteredDocsWithTracker.find((d) => d.doc.id === item.id);
            if (found) setPreviewDoc(found.doc);
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocsWithTracker.map(({ doc, tracker }) => {
            const isDocAnalyzing = isAnalyzing && analyzingDocId === doc.id;

            // Page number if in current magazine
            let pageBadgeText = "";
            if (tracker.currentArticle) {
              pageBadgeText = tracker.currentPageNumber
                ? `PÁG. ${tracker.currentPageNumber.toString().padStart(2, "0")}`
                : "PÁG. --";
            }

            const cardBorderClass = tracker.isInCurrentMagazine
              ? "border-emerald-500/70 bg-emerald-500/5 ring-1 ring-emerald-500/20"
              : tracker.previousEditions.length > 0
              ? "border-indigo-400/70 bg-indigo-500/5 ring-1 ring-indigo-400/20"
              : "border-slate-300 dark:border-slate-700 hover:border-black dark:hover:border-white";

            return (
              <div
                key={doc.id}
                className={`theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-3 shadow-sm ${cardBorderClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
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

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {tracker.isInCurrentMagazine ? (
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="bg-emerald-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>PUBLICADO NA REVISTA</span>
                          </span>
                          {pageBadgeText && (
                            <span className="font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                              {pageBadgeText}
                            </span>
                          )}
                          {tracker.previousEditions.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setDocForHistory(doc)}
                              className="bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded uppercase border border-indigo-300 dark:border-indigo-700 flex items-center gap-1 hover:bg-indigo-200 cursor-pointer"
                              title="Ver histórico em edições anteriores"
                            >
                              <Archive className="w-2.5 h-2.5 text-indigo-600" />
                              <span>Também na {tracker.previousEditions.map((e) => `Ed. #${e.editionNumber}`).join(", ")}</span>
                            </button>
                          )}
                          {tracker.currentArticle?.enabled === false && (
                            <span className="bg-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded uppercase border border-amber-500/40">
                              PAUSADO
                            </span>
                          )}
                        </div>
                      ) : tracker.previousEditions.length > 0 ? (
                        <div className="flex items-center gap-1 flex-wrap">
                          <button
                            type="button"
                            onClick={() => setDocForHistory(doc)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs cursor-pointer"
                            title="Clique para ver o histórico desta matéria nas edições anteriores"
                          >
                            <Archive className="w-3 h-3 text-white" />
                            <span>PUBLICADO NA {tracker.previousEditions.map((e) => `ED. #${e.editionNumber}`).join(", ")}</span>
                          </button>
                          {tracker.previousEditions[0]?.date && (
                            <span className="font-mono text-[8px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700">
                              {tracker.previousEditions[0].date}
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
                    {tracker.isInCurrentMagazine ? (
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

                        {tracker.currentArticle && (
                          <button
                            type="button"
                            onClick={() => onOpenArticleEditor(tracker.currentArticle!)}
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
                          className={`h-7 px-2.5 font-black text-[10px] border shadow-xs cursor-pointer flex items-center gap-1 shrink-0 ${
                            tracker.previousEditions.length > 0
                              ? "bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900"
                              : "bg-amber-400 hover:bg-amber-500 text-black border-black"
                          }`}
                          title={
                            tracker.previousEditions.length > 0
                              ? "Reutilizar artigo de edição anterior na revista atual"
                              : "Inserir diretamente como matéria na revista atual"
                          }
                        >
                          {tracker.previousEditions.length > 0 ? (
                            <Copy className="w-3 h-3 text-white" />
                          ) : (
                            <Plus className="w-3 h-3 text-black" />
                          )}
                          <span>{tracker.previousEditions.length > 0 ? "Reutilizar na Revista" : "Colocar na Revista"}</span>
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
                      onClick={() => setDocForHistory(doc)}
                      className="p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer"
                      title="Ver / Gerenciar Histórico de Publicações"
                    >
                      <Archive className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
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

            {/* Status Editorial Box */}
            {(() => {
              const tracker = getDocumentUsageTracker(previewDoc, project, archivedEditions);
              return (
                <div
                  className={`mt-3 p-3 rounded-lg border-2 flex items-center justify-between text-xs ${
                    tracker.isInCurrentMagazine
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                      : tracker.previousEditions.length > 0
                      ? "border-indigo-500 bg-indigo-500/10 text-indigo-800 dark:text-indigo-300"
                      : "border-amber-500 bg-amber-500/10 text-amber-800 dark:text-amber-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {tracker.isInCurrentMagazine ? (
                      <Check className="w-4 h-4 stroke-[3] text-emerald-600" />
                    ) : tracker.previousEditions.length > 0 ? (
                      <Archive className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-amber-600" />
                    )}
                    <span className="font-black uppercase tracking-wide">
                      Status Editorial: {tracker.statusLabel}
                    </span>
                  </div>
                  {tracker.currentPageNumber && (
                    <span className="font-mono font-bold text-[10px]">
                      Página {tracker.currentPageNumber}
                    </span>
                  )}
                </div>
              );
            })()}

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

      {/* Dialog de Histórico Editorial & Publicações */}
      {docForHistory && (
        <Dialog open={Boolean(docForHistory)} onOpenChange={() => setDocForHistory(null)}>
          <DialogContent className="theme-app-card max-w-lg p-5 font-sans border-2 border-black shadow-2xl">
            <DialogHeader className="border-b-2 pb-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                  CONTROLE DE PAUTA
                </span>
                <span className="text-[10px] font-mono opacity-70 font-bold">
                  {docForHistory.wordCount} PALAVRAS
                </span>
              </div>
              <DialogTitle className="text-base font-black uppercase tracking-tight mt-1 flex items-center gap-2">
                <Archive className="w-4 h-4 text-indigo-500" />
                <span>Histórico Editorial & Publicações</span>
              </DialogTitle>
              <p className="text-xs opacity-75 font-semibold line-clamp-1">
                "{docForHistory.title}"
              </p>
            </DialogHeader>

            <div className="py-3 space-y-4 text-xs">
              {/* Situação na Edição Atual */}
              <div className="p-3 rounded-lg border-2 theme-app-card-subtle space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wide opacity-75">
                  EDIÇÃO ATUAL (# {project.editionNumber || "01"})
                </span>
                {(() => {
                  const tracker = getDocumentUsageTracker(docForHistory, project, archivedEditions);
                  if (tracker.isInCurrentMagazine) {
                    return (
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <Check className="w-4 h-4 stroke-[3]" />
                          Atualmente na Revista ({tracker.currentPageNumber ? `Pág. ${tracker.currentPageNumber}` : "Diagramado"})
                        </span>
                        {tracker.currentArticle && (
                          <Button
                            size="sm"
                            onClick={() => {
                              const art = tracker.currentArticle;
                              setDocForHistory(null);
                              if (art) onOpenArticleEditor(art);
                            }}
                            className="h-7 text-[10px] font-bold"
                          >
                            Abrir no Editor
                          </Button>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center justify-between">
                      <span className="opacity-75 font-medium">
                        Não está diagramado na edição atual.
                      </span>
                      <Button
                        size="sm"
                        onClick={() => {
                          handleDirectAddToMagazine(docForHistory);
                          setDocForHistory(null);
                        }}
                        className="h-7 bg-amber-400 hover:bg-amber-500 text-black font-black text-[10px] border border-black shadow-xs cursor-pointer"
                      >
                        Colocar na Edição Atual
                      </Button>
                    </div>
                  );
                })()}
              </div>

              {/* Histórico em Edições Anteriores */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wide opacity-75 flex items-center gap-1">
                  <Archive className="w-3.5 h-3.5 text-indigo-500" />
                  PUBLICAÇÕES EM EDIÇÕES ANTERIORES
                </span>

                {(() => {
                  const tracker = getDocumentUsageTracker(docForHistory, project, archivedEditions);
                  if (tracker.previousEditions.length === 0) {
                    return (
                      <div className="p-3 rounded-lg border theme-app-card-subtle text-[11px] opacity-75">
                        Este artigo ainda não foi veiculado em nenhuma edição anterior. É um <strong>rascunho 100% inédito</strong>.
                      </div>
                    );
                  }
                  return (
                    <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar">
                      {tracker.previousEditions.map((ed, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg border-2 border-indigo-400/40 bg-indigo-500/5 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-black text-xs uppercase flex items-center gap-1.5">
                              <span className="bg-indigo-600 text-white font-mono text-[9px] px-1.5 py-0.2 rounded">
                                ED. #{ed.editionNumber}
                              </span>
                              <span>{ed.editionTitle}</span>
                            </div>
                            {ed.date && (
                              <div className="text-[10px] opacity-70 font-mono mt-0.5">
                                Publicado em: {ed.date}
                              </div>
                            )}
                          </div>
                          {ed.isManual && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const updatedProj = toggleDocPublishedEdition(docForHistory.id, project, {
                                  editionNumber: ed.editionNumber,
                                });
                                onUpdateProject(updatedProj);
                              }}
                              className="h-6 px-2 text-red-500 hover:text-red-700 text-[10px]"
                              title="Remover este registro manual"
                            >
                              Remover
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Adicionar Edição Manualmente */}
              <div className="p-3 rounded-lg border theme-app-card-subtle space-y-2">
                <Label className="text-[10px] font-black uppercase">
                  Registrar Edição Anterior Manualmente
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={manualEditionInput}
                    onChange={(e) => setManualEditionInput(e.target.value)}
                    placeholder="Ex: 01, 00, Especial 2025"
                    className="h-8 text-xs font-mono font-bold"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && manualEditionInput.trim()) {
                        e.preventDefault();
                        const updatedProj = toggleDocPublishedEdition(docForHistory.id, project, {
                          editionNumber: manualEditionInput.trim(),
                        });
                        onUpdateProject(updatedProj);
                        setManualEditionInput("");
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      if (!manualEditionInput.trim()) return;
                      const updatedProj = toggleDocPublishedEdition(docForHistory.id, project, {
                        editionNumber: manualEditionInput.trim(),
                      });
                      onUpdateProject(updatedProj);
                      setManualEditionInput("");
                    }}
                    className="h-8 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 cursor-pointer"
                  >
                    + Registrar
                  </Button>
                </div>
                <p className="text-[10px] opacity-60">
                  Ideal para textos que já foram publicados em edições impressas anteriores à criação desta ferramenta.
                </p>
              </div>
            </div>

            <DialogFooter className="border-t pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDocForHistory(null)}
                className="h-8 text-xs font-bold"
              >
                Fechar
              </Button>
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

      {/* PDF Conversion Router Modal */}
      <PdfImportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        project={project}
        onUpdateProject={onUpdateProject}
        onOpenArticleEditor={onOpenArticleEditor}
        onNavigateToViewer={onNavigateToViewer}
        onSuccessMessage={(msg) => setDriveFeedback(msg)}
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
