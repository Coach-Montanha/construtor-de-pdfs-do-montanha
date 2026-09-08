import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  extractPdfContent,
  classifyPdfDocument,
  routePdfConversion,
  convertDraftsToRepositoryDocuments,
  convertDraftsToMagazineArticles,
  ExtractedPageItem,
  PdfAnalysisReport,
  DetectedArticleDraft,
  ConversionRoute,
} from "../../lib/pdf-conversion-router";
import { MagazineProject, RepositoryDocument, Article } from "../../types/magazine";
import {
  FileText,
  Sparkles,
  Upload,
  Layers,
  Split,
  BookOpen,
  FileCheck,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  Loader2,
  AlertCircle,
  Clock,
  Layout,
  Plus,
  ArrowRight,
} from "lucide-react";

interface PdfImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  onUpdateProject: (updated: MagazineProject) => void;
  onOpenArticleEditor?: (article: Article) => void;
  onNavigateToViewer?: () => void;
  onSuccessMessage?: (msg: string) => void;
}

export const PdfImportModal: React.FC<PdfImportModalProps> = ({
  isOpen,
  onClose,
  project,
  onUpdateProject,
  onOpenArticleEditor,
  onNavigateToViewer,
  onSuccessMessage,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Análise e Roteamento
  const [extractedPages, setExtractedPages] = useState<ExtractedPageItem[]>([]);
  const [analysisReport, setAnalysisReport] = useState<PdfAnalysisReport | null>(null);
  const [activeRoute, setActiveRoute] = useState<ConversionRoute>("smart-articles");
  const [drafts, setDrafts] = useState<DetectedArticleDraft[]>([]);
  const [expandedDraftId, setExpandedDraftId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleReset = () => {
    setFile(null);
    setIsLoading(false);
    setLoadingStep("");
    setErrorMessage(null);
    setExtractedPages([]);
    setAnalysisReport(null);
    setActiveRoute("smart-articles");
    setDrafts([]);
    setExpandedDraftId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const processPdfFile = async (pdfFile: File) => {
    if (!pdfFile.name.toLowerCase().endsWith(".pdf")) {
      setErrorMessage("Por favor, selecione um arquivo válido no formato .pdf");
      return;
    }

    setFile(pdfFile);
    setIsLoading(true);
    setErrorMessage(null);

    try {
      setLoadingStep("1/3 Lendo geometria e páginas do PDF...");
      const buffer = await pdfFile.arrayBuffer();

      setLoadingStep("2/3 Classificando estrutura e eliminando ruídos...");
      const pages = await extractPdfContent(buffer);

      if (pages.length === 0 || pages.every((p) => p.text.trim().length === 0)) {
        throw new Error(
          "Não foi possível extrair texto legível deste PDF. Ele pode ser uma digitalização apenas de imagens sem camada OCR de texto."
        );
      }

      setExtractedPages(pages);

      const report = classifyPdfDocument(pages, pdfFile.name, pdfFile.size);
      setAnalysisReport(report);
      setActiveRoute(report.recommendedRoute);

      setLoadingStep("3/3 Roteando seções e diagramando matérias...");
      const generatedDrafts = routePdfConversion(pages, report.recommendedRoute, pdfFile.name);
      setDrafts(generatedDrafts);
    } catch (err: any) {
      console.error("Erro na importação do PDF:", err);
      setErrorMessage(err?.message || "Ocorreu um erro ao processar o arquivo PDF.");
    } finally {
      setIsLoading(false);
      setLoadingStep("");
    }
  };

  const handleRouteSwitch = (route: ConversionRoute) => {
    if (!analysisReport || extractedPages.length === 0) return;
    setActiveRoute(route);
    const newDrafts = routePdfConversion(extractedPages, route, analysisReport.fileName);
    setDrafts(newDrafts);
  };

  const handleToggleSelectAll = (select: boolean) => {
    setDrafts((prev) => prev.map((d) => ({ ...d, selected: select })));
  };

  const handleToggleDraft = (id: string) => {
    setDrafts((prev) =>
      prev.map((d) => (d.id === id ? { ...d, selected: !d.selected } : d))
    );
  };

  const handleTitleChange = (id: string, newTitle: string) => {
    setDrafts((prev) =>
      prev.map((d) => (d.id === id ? { ...d, title: newTitle } : d))
    );
  };

  const selectedCount = drafts.filter((d) => d.selected).length;

  // Destino 1: Salvar como Rascunhos Inéditos no Acervo
  const handleSaveToRepository = () => {
    if (selectedCount === 0) {
      alert("Selecione ao menos uma matéria para importar.");
      return;
    }

    const newDocs = convertDraftsToRepositoryDocuments(
      drafts,
      analysisReport?.fileName || "documento.pdf"
    );

    const updatedRepo = [...newDocs, ...(project.contentRepository || [])];
    const updatedProject: MagazineProject = {
      ...project,
      contentRepository: updatedRepo,
      updatedAt: new Date().toISOString(),
    };

    onUpdateProject(updatedProject);
    const msg = `✓ ${newDocs.length} matéria(s) importada(s) com sucesso como Rascunhos Inéditos no Acervo!`;
    if (onSuccessMessage) onSuccessMessage(msg);
    handleReset();
    onClose();
  };

  // Destino 2: Diagramar Diretamente na Revista Ativa
  const handlePublishDirectlyToMagazine = () => {
    if (selectedCount === 0) {
      alert("Selecione ao menos uma matéria para diagramar na revista.");
      return;
    }

    const newArticles = convertDraftsToMagazineArticles(drafts, "Coach Montanha");
    const updatedArticles = [...project.articles, ...newArticles];

    const updatedProject: MagazineProject = {
      ...project,
      articles: updatedArticles,
      updatedAt: new Date().toISOString(),
    };

    onUpdateProject(updatedProject);
    const msg = `✓ ${newArticles.length} matéria(s) diagramada(s) diretamente na Edição Atual #${project.editionNumber}!`;
    if (onSuccessMessage) onSuccessMessage(msg);

    handleReset();
    onClose();

    if (onNavigateToViewer) {
      onNavigateToViewer();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && (handleReset(), onClose())}>
      <DialogContent className="max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 border border-zinc-800 text-zinc-100 p-0 overflow-hidden shadow-2xl">
        {/* Header com Branding Editorial */}
        <DialogHeader className="px-6 pt-5 pb-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DialogTitle className="text-lg font-black tracking-wider uppercase text-zinc-100 font-sans">
                    Importação Inteligente de PDFs
                  </DialogTitle>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> pdf-conversion-router
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Classificação de documento, extração tipográfica sem ruído e separação em matérias diagramáveis.
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Corpo com Scroll */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Estado Inicial: Dropzone de Upload */}
          {!file && !isLoading && (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  processPdfFile(e.dataTransfer.files[0]);
                }
              }}
              className="border-2 border-dashed border-zinc-700 hover:border-amber-400/60 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-xl p-10 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-4 group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                data-testid="pdf-file-input"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    processPdfFile(e.target.files[0]);
                  }
                }}
              />
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 group-hover:bg-amber-400/10 border border-zinc-700 group-hover:border-amber-400/40 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 transition-colors">
                <Upload className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
                  Arraste seu PDF aqui ou clique para selecionar
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Suporta revistas antigas, apostilas de treino, livros, relatórios técnicos ou lâminas de slides. O roteador identificará títulos, seções e descartará números de páginas repetidos automaticamente.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">PDF Nativo</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">Multi-página</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">Filtro de Ruído</span>
              </div>
            </div>
          )}

          {/* Estado de Carregamento & Extração */}
          {isLoading && (
            <div className="py-16 text-center space-y-4">
              <Loader2 className="w-10 h-10 text-amber-400 animate-spin mx-auto" />
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
                  Processando Documento PDF
                </h4>
                <p className="text-xs text-amber-400/90 font-mono animate-pulse">
                  {loadingStep}
                </p>
              </div>
            </div>
          )}

          {/* Estado de Resultado: Análise e Roteador de Conversão */}
          {analysisReport && !isLoading && (
            <div className="space-y-5">
              {/* Banner de Classificação */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-zinc-100">{analysisReport.fileName}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40">
                        {analysisReport.classificationLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-400 font-mono">
                      <span>{analysisReport.totalPages} página(s)</span>
                      <span>•</span>
                      <span>~{analysisReport.totalWords} palavras</span>
                      <span>•</span>
                      <span>{analysisReport.detectedHeadingsCount} título(s) identificados</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="text-xs border-zinc-700 hover:bg-zinc-800 text-zinc-300 self-start md:self-auto"
                >
                  Trocar PDF
                </Button>
              </div>

              {/* Roteador de Conversão (Seletor de Rotas) */}
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Split className="w-3.5 h-3.5 text-amber-400" />
                  Escolha a Rota de Conversão:
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {/* Rota 1 */}
                  <button
                    type="button"
                    onClick={() => handleRouteSwitch("smart-articles")}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activeRoute === "smart-articles"
                        ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200">
                        <Split className="w-3 h-3 text-amber-400" />
                        Separação Editorial
                      </span>
                      {analysisReport.recommendedRoute === "smart-articles" && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Detecta títulos e divide em matérias independentes.
                    </p>
                  </button>

                  {/* Rota 2 */}
                  <button
                    type="button"
                    onClick={() => handleRouteSwitch("continuous-lead")}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activeRoute === "continuous-lead"
                        ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200">
                        <BookOpen className="w-3 h-3 text-amber-400" />
                        Artigo Contínuo
                      </span>
                      {analysisReport.recommendedRoute === "continuous-lead" && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Unifica em uma única matéria editorial completa de destaque.
                    </p>
                  </button>

                  {/* Rota 3 */}
                  <button
                    type="button"
                    onClick={() => handleRouteSwitch("page-by-page")}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activeRoute === "page-by-page"
                        ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200">
                        <Layers className="w-3 h-3 text-amber-400" />
                        Página por Página
                      </span>
                      {analysisReport.recommendedRoute === "page-by-page" && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Cria uma matéria para cada página do PDF (slides / infográficos).
                    </p>
                  </button>

                  {/* Rota 4 */}
                  <button
                    type="button"
                    onClick={() => handleRouteSwitch("clean-markdown")}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activeRoute === "clean-markdown"
                        ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm"
                        : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200">
                        <FileText className="w-3 h-3 text-amber-400" />
                        Markdown Limpo
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Extrai o texto integral limpo e normalizado em rascunho.
                    </p>
                  </button>
                </div>
              </div>

              {/* Lista de Matérias Detectadas */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Matérias Extraídas ({drafts.length})
                    </span>
                    <span className="text-xs text-amber-400 font-mono">
                      ({selectedCount} selecionada{selectedCount !== 1 ? "s" : ""})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleSelectAll(selectedCount < drafts.length)}
                      className="text-xs text-zinc-400 hover:text-amber-400 flex items-center gap-1"
                    >
                      {selectedCount === drafts.length ? (
                        <>
                          <Square className="w-3.5 h-3.5" /> Desmarcar Todas
                        </>
                      ) : (
                        <>
                          <CheckSquare className="w-3.5 h-3.5" /> Selecionar Todas
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {drafts.map((draft, idx) => {
                    const isExpanded = expandedDraftId === draft.id;
                    return (
                      <div
                        key={draft.id}
                        className={`rounded-lg border transition-all ${
                          draft.selected
                            ? "bg-zinc-900/80 border-zinc-700"
                            : "bg-zinc-950/40 border-zinc-850 opacity-60"
                        }`}
                      >
                        <div className="p-3.5 flex items-start gap-3">
                          <button
                            type="button"
                            onClick={() => handleToggleDraft(draft.id)}
                            className="mt-1 text-amber-400 hover:text-amber-300"
                          >
                            {draft.selected ? (
                              <CheckSquare className="w-4 h-4 text-amber-400" />
                            ) : (
                              <Square className="w-4 h-4 text-zinc-600" />
                            )}
                          </button>

                          <div className="flex-1 min-w-0 space-y-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                                Matéria #{idx + 1}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                                {draft.category}
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400">
                                Pág. {draft.pageRange[0]}
                                {draft.pageRange[0] !== draft.pageRange[1] ? ` a ${draft.pageRange[1]}` : ""}
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400">
                                ~{draft.wordCount} palavras
                              </span>
                              <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-0.5">
                                <Clock className="w-3 h-3 text-zinc-500" /> {draft.estimatedReadTime} min
                              </span>
                            </div>

                            <Input
                              value={draft.title}
                              onChange={(e) => handleTitleChange(draft.id, e.target.value)}
                              placeholder="Título da matéria..."
                              className="bg-zinc-950 border-zinc-700 font-bold text-sm text-zinc-100 h-8"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() => setExpandedDraftId(isExpanded ? null : draft.id)}
                            className="text-zinc-400 hover:text-zinc-200 p-1 rounded hover:bg-zinc-800"
                            title={isExpanded ? "Ocultar prévia" : "Ver prévia do texto"}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Prévia do Conteúdo Extraído */}
                        {isExpanded && (
                          <div className="px-4 pb-4 pt-1 border-t border-zinc-800/80 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-zinc-400">
                              <span className="font-mono">Template sugerido: {draft.suggestedTemplate}</span>
                              <span className="text-zinc-500">Prévia do texto extraído:</span>
                            </div>
                            <div className="p-3 rounded bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300 font-mono max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                              {draft.content}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé com Botões de Ação */}
        <DialogFooter className="px-6 py-4 border-t border-zinc-800/80 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            {analysisReport && (
              <span>
                {selectedCount} de {drafts.length} matéria(s) pronta(s) para importação
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handleReset();
                onClose();
              }}
              className="text-xs border-zinc-700 hover:bg-zinc-800 text-zinc-300"
            >
              Cancelar
            </Button>

            {analysisReport && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleSaveToRepository}
                  disabled={selectedCount === 0}
                  className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 gap-1.5"
                  data-testid="btn-save-pdf-to-repo"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  Salvar no Acervo (Rascunhos)
                </Button>

                <Button
                  size="sm"
                  onClick={handlePublishDirectlyToMagazine}
                  disabled={selectedCount === 0}
                  className="text-xs bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold gap-1.5 shadow-lg shadow-amber-400/10"
                  data-testid="btn-publish-pdf-to-magazine"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Diagramar na Revista Ativa
                </Button>
              </>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
