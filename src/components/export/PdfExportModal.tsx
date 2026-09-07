import React, { useState, useEffect, useRef } from "react";
import { MagazineLayoutMode, MagazineProject, MagazineTheme } from "../../types/magazine";
import { getActiveMagazinePages } from "../../lib/magazine-pages";
import { exportMagazineToDirectPdf, PdfExportProgress } from "../../lib/pdf-direct-export";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Printer,
  FileDown,
  FileText,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
  Eye,
} from "lucide-react";

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  theme: MagazineTheme;
  totalPages?: number;
  onOpenMockupStudio?: () => void;
  layoutMode?: MagazineLayoutMode;
  onSelectLayoutMode?: (mode: MagazineLayoutMode) => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  project,
  theme,
  onOpenMockupStudio,
  layoutMode = "print",
  onSelectLayoutMode,
}) => {
  const [selectedExportMode, setSelectedExportMode] = useState<MagazineLayoutMode>(
    layoutMode || "print"
  );
  const [previewPageIndex, setPreviewPageIndex] = useState<number>(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [isBrowserPrinting, setIsBrowserPrinting] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<PdfExportProgress | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [showPrintInstructions, setShowPrintInstructions] = useState<boolean>(false);

  const offscreenContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (layoutMode) {
      setSelectedExportMode(layoutMode);
    }
  }, [layoutMode]);

  const activePages = getActiveMagazinePages({
    project,
    theme,
    layoutMode: selectedExportMode,
  });

  const totalPages = Math.max(1, activePages.length);

  // Clamp preview page index when page list changes
  useEffect(() => {
    if (previewPageIndex >= totalPages) {
      setPreviewPageIndex(Math.max(0, totalPages - 1));
    }
  }, [totalPages, previewPageIndex]);

  const handleSelectMode = (mode: MagazineLayoutMode) => {
    setSelectedExportMode(mode);
    if (onSelectLayoutMode) {
      onSelectLayoutMode(mode);
    }
  };

  const handleNextPreviewPage = () => {
    setPreviewPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPreviewPage = () => {
    setPreviewPageIndex((prev) => Math.max(prev - 1, 0));
  };

  // Motor de download direto do arquivo .pdf sem necessidade de diálogo de impressão do navegador
  const handleDirectDownloadPdf = async () => {
    if (!offscreenContainerRef.current) return;
    setIsGeneratingPdf(true);
    setDownloadSuccess(false);

    try {
      const pageElements = Array.from(
        offscreenContainerRef.current.querySelectorAll<HTMLElement>("[data-pdf-export-page]")
      );

      if (pageElements.length === 0) {
        throw new Error("Páginas não encontradas no contêiner de renderização.");
      }

      await exportMagazineToDirectPdf({
        pageElements,
        project,
        layoutMode: selectedExportMode,
        onProgress: (progress) => {
          setPdfProgress(progress);
        },
      });

      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    } catch (err: any) {
      alert("Falha ao gerar o arquivo PDF direto: " + (err?.message || err));
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgress(null);
    }
  };

  // Impressão nativa do navegador (opção secundária para quem vai imprimir em papel físico)
  const handlePrintViaBrowser = (modeToPrint: MagazineLayoutMode = selectedExportMode) => {
    setIsBrowserPrinting(true);
    if (onSelectLayoutMode) {
      onSelectLayoutMode(modeToPrint);
    }
    if (modeToPrint === "mobile") {
      document.body.classList.add("print-layout-mobile");
      document.body.classList.remove("print-layout-print");
    } else {
      document.body.classList.add("print-layout-print");
      document.body.classList.remove("print-layout-mobile");
    }
    onClose();

    setTimeout(() => {
      window.print();
      setIsBrowserPrinting(false);
      document.body.classList.remove("print-layout-mobile");
      document.body.classList.remove("print-layout-print");
    }, 250);
  };

  const handleDownloadBackupJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `${project.title.toLowerCase().replace(/\s+/g, "_")}_edicao_${project.editionNumber || "01"}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportCompiledMarkdown = () => {
    let md = `# ${project.title.toUpperCase()}\n`;
    md += `**Edição:** ${project.editionNumber || "01"} | **Volume:** ${project.volume || "01"} | **Data:** ${project.date}\n`;
    md += `**Tema:** ${theme.name}\n\n`;
    md += `---\n\n`;

    if (project.editorialInfo) {
      md += `## CARTA DO EDITOR\n\n`;
      md += `**Editor:** ${project.editorialInfo.editorName} (${project.editorialInfo.editorRole})\n\n`;
      md += `### ${project.editorialInfo.editorLetterTitle || "Manifesto de Abertura"}\n\n`;
      md += `${project.editorialInfo.editorLetter}\n\n`;
      if (project.editorialInfo.editorialNote) {
        md += `> *"${project.editorialInfo.editorialNote}"* — ${project.editorialInfo.editorName}\n\n`;
      }
      md += `---\n\n`;
    }

    md += `## MATÉRIAS & ARTIGOS DA EDIÇÃO\n\n`;
    project.articles
      .filter((a) => a.enabled !== false)
      .forEach((art, idx) => {
        md += `### ${idx + 1}. ${art.title}\n\n`;
        if (art.subtitle) md += `*${art.subtitle}*\n\n`;
        md += `**Categoria:** ${art.category} | **Autor:** ${art.author} | **Tempo de Leitura:** ${art.estimatedReadTime} min\n\n`;
        md += `${art.content}\n\n`;
        if (art.pullQuotes && art.pullQuotes.length > 0) {
          md += `> **Citação:** "${art.pullQuotes[0]}"\n\n`;
        }
        if (art.keyTakeaways && art.keyTakeaways.length > 0) {
          md += `**Pontos-chave:**\n`;
          art.keyTakeaways.forEach((t) => {
            md += `- ${t}\n`;
          });
          md += `\n`;
        }
        md += `---\n\n`;
      });

    const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `${project.title.toLowerCase().replace(/\s+/g, "_")}_edicao_${project.editionNumber || "01"}_textos.md`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const currentPage = activePages[previewPageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-testid="export-modal" className="theme-app-card max-w-5xl p-5 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader className="border-b-2 border-current pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <DialogTitle className="text-lg sm:text-xl font-black flex items-center gap-2 uppercase">
              <Download className="w-5 h-5 text-amber-500" />
              <span>Pré-Visualização da Revista & Central de Exportação de PDF</span>
            </DialogTitle>
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase w-fit">
              {totalPages} PÁGINAS • {selectedExportMode === "mobile" ? "MODO MOBILE 9:16" : "MODO IMPRESSO A4"}
            </span>
          </div>
          <p className="text-xs opacity-75 mt-0.5">
            Pré-visualize cada página exatamente como foi produzida e faça o <strong>download direto do PDF</strong> pronto no seu computador, sem precisar passar pela janela de impressão do navegador.
          </p>
        </DialogHeader>

        {/* Format Selector: Print A4 vs Mobile Smartphone Reader */}
        <div className="space-y-2 mt-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-tight flex items-center gap-1.5">
              <span>1. Escolha o Formato da Revista:</span>
            </span>
            <span className="text-[10px] font-mono opacity-70">
              A pré-visualização abaixo se adapta instantaneamente
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              data-testid="opt-export-print"
              onClick={() => handleSelectMode("print")}
              className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                selectedExportMode === "print"
                  ? "border-amber-400 bg-amber-400/10 shadow-sm ring-2 ring-amber-400/40"
                  : "border-slate-700/60 hover:border-slate-400 theme-app-card-subtle opacity-75 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-black text-xs uppercase">
                  <Printer className="w-4 h-4 text-amber-500" />
                  <span>Edição Impressa A4</span>
                </div>
                {selectedExportMode === "print" && (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                )}
              </div>
              <p className="text-[11px] opacity-80 leading-snug">
                Layout clássico A4 (210x297mm), texto em duas colunas, rodapé editorial denso com código de barras.
              </p>
            </div>

            <div
              data-testid="opt-export-mobile"
              onClick={() => handleSelectMode("mobile")}
              className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                selectedExportMode === "mobile"
                  ? "border-amber-400 bg-amber-400/10 shadow-sm ring-2 ring-amber-400/40"
                  : "border-slate-700/60 hover:border-slate-400 theme-app-card-subtle opacity-75 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-black text-xs uppercase">
                  <Smartphone className="w-4 h-4 text-amber-500" />
                  <span>Leitor Digital Mobile (9:16)</span>
                </div>
                {selectedExportMode === "mobile" && (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                )}
              </div>
              <p className="text-[11px] opacity-80 leading-snug">
                Coluna única, tipografia ampliada, imagens em blocos separados e rodapé minimalista para celular.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Live Preview & Control Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-3 items-start">
          {/* Left / Center: Live Page Preview Window */}
          <div className="lg:col-span-7 theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-3">
            {/* Preview Toolbar */}
            <div className="flex items-center justify-between gap-2 border-b pb-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-black uppercase">Pré-Visualização Ao Vivo:</span>
              </div>

              {/* Page Navigator Controls */}
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePrevPreviewPage}
                  disabled={previewPageIndex === 0 || isGeneratingPdf}
                  className="h-7 px-2 text-xs font-bold border-2 cursor-pointer"
                  title="Página Anterior"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Anterior</span>
                </Button>

                <div className="bg-black text-amber-400 font-mono text-[10px] font-black px-2 py-1 rounded border border-amber-400/40 min-w-[80px] text-center">
                  {previewPageIndex + 1} / {totalPages}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleNextPreviewPage}
                  disabled={previewPageIndex >= totalPages - 1 || isGeneratingPdf}
                  className="h-7 px-2 text-xs font-bold border-2 cursor-pointer"
                  title="Próxima Página"
                >
                  <span className="hidden sm:inline">Próxima</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Current Page Title Badge */}
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="opacity-75 truncate max-w-[280px]">
                {currentPage?.title || `Página ${previewPageIndex + 1}`}
              </span>
              <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/20 text-amber-600">
                {selectedExportMode === "mobile" ? "9:16 Vertical" : "210x297mm A4"}
              </span>
            </div>

            {/* Live Magazine Canvas Frame */}
            <div className="w-full flex items-center justify-center p-2 rounded-xl bg-slate-950/80 border-2 border-black/40 overflow-hidden shadow-inner min-h-[380px] max-h-[460px]">
              <div
                className={`relative transition-all duration-300 transform scale-[0.88] sm:scale-95 origin-center overflow-hidden shadow-2xl ${
                  selectedExportMode === "mobile"
                    ? "aspect-[9/16] w-[220px] sm:w-[245px] rounded-2xl border-4 border-slate-700 bg-black"
                    : "aspect-[210/297] w-[270px] sm:w-[310px] rounded-xs border border-black/40 bg-black"
                }`}
              >
                {currentPage?.render(previewPageIndex + 1, false, selectedExportMode)}
              </div>
            </div>

            {/* Quick Page Jump Selector */}
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar py-1">
              {activePages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => setPreviewPageIndex(idx)}
                  className={`px-2 py-0.5 rounded text-[9.5px] font-mono font-bold shrink-0 transition-all cursor-pointer border ${
                    previewPageIndex === idx
                      ? "bg-amber-400 text-black border-black font-black shadow-xs scale-105"
                      : "theme-app-card opacity-60 hover:opacity-100 border-current"
                  }`}
                  title={page.title}
                >
                  Pág {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Download Actions & Details */}
          <div className="lg:col-span-5 space-y-3">
            {/* Direct Download Card */}
            <div className="theme-app-card p-4 rounded-xl border-2 border-amber-500/50 bg-amber-400/5 space-y-3 shadow-md">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                  DOWNLOAD DIRETO
                </span>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">
                  SEM IMPRIMIR EM PDF
                </span>
              </div>

              <div>
                <h3 className="font-black text-sm uppercase tracking-tight">
                  Baixar Arquivo PDF Completo
                </h3>
                <p className="text-[11px] opacity-75 mt-0.5 leading-relaxed">
                  Gera o arquivo <code>.pdf</code> compilado em alta resolução com todas as fotos, cores e diagramação, disparando o download direto para sua pasta de Downloads.
                </p>
              </div>

              {/* Progress Bar during generation */}
              {isGeneratingPdf && pdfProgress && (
                <div className="p-3 rounded-lg bg-black text-amber-400 border border-amber-400/50 space-y-1.5 animate-pulse">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{pdfProgress.statusText}</span>
                    </span>
                    <span>{pdfProgress.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-amber-400/30">
                    <div
                      className="bg-amber-400 h-full transition-all duration-200"
                      style={{ width: `${pdfProgress.percent}%` }}
                    />
                  </div>
                </div>
              )}

              {downloadSuccess && (
                <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Download concluído! Seu arquivo PDF foi salvo com sucesso.</span>
                </div>
              )}

              {/* Main Prominent Direct Download Button */}
              <Button
                data-testid="btn-direct-download-pdf"
                data-test-alias="btn-confirm-export-pdf"
                onClick={handleDirectDownloadPdf}
                disabled={isGeneratingPdf}
                className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-black font-black text-sm border-2 border-black shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Compilando Revista em PDF ({pdfProgress?.percent || 0}%)...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-black stroke-[2.5]" />
                    <span>Baixar Revista em PDF ({selectedExportMode === "mobile" ? "Mobile 9:16" : "A4"})</span>
                  </>
                )}
              </Button>
            </div>

            {/* Alternative: Browser Printing Accordion */}
            <div className="theme-app-card-subtle p-3 rounded-xl border-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase opacity-80 flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Vai imprimir em impressora física de papel?</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowPrintInstructions(!showPrintInstructions)}
                  className="text-[10px] font-bold text-amber-600 hover:underline cursor-pointer"
                >
                  {showPrintInstructions ? "Ocultar dicas" : "Ver instruções"}
                </button>
              </div>

              {showPrintInstructions && (
                <div className="bg-amber-400/10 border border-amber-400/40 p-2.5 rounded-lg space-y-1 text-[11px] leading-relaxed">
                  <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Configurações recomendadas de impressão física:</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 opacity-90">
                    <li>Em Layout, selecione Retrato (Portrait).</li>
                    <li>Em Mais Definições, marque "Gráficos de segundo plano".</li>
                    <li>Margens: Nenhuma.</li>
                  </ul>
                </div>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePrintViaBrowser(selectedExportMode)}
                disabled={isBrowserPrinting || isGeneratingPdf}
                className="w-full h-8 text-xs font-bold border-2 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Abrir Diálogo de Impressão do Navegador</span>
              </Button>
            </div>

            {/* Other Formats Export */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCompiledMarkdown}
                className="h-9 border-2 font-bold text-xs flex items-center justify-center gap-1"
                title="Exportar textos em Markdown formatado"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Textos (.MD)</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadBackupJson}
                className="h-9 border-2 font-bold text-xs flex items-center justify-center gap-1"
                title="Download do backup completo em JSON"
              >
                <FileDown className="w-3.5 h-3.5 text-amber-500" />
                <span>Backup (.JSON)</span>
              </Button>
            </div>

            {/* Mockups de Divulgação Social para Instagram Stories (9:16) */}
            <div className="theme-app-card-subtle p-3 rounded-xl border-2 border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Mockups Stories (9:16)</span>
                </span>
                <span className="text-[9px] font-mono font-bold bg-amber-400/20 text-amber-700 dark:text-amber-300 px-1.5 py-0.2 rounded">
                  Divulgação
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <a
                  href="/mockup-stories-1.jpg"
                  download="montanha_magazine_stories_mockup_1.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 p-1.5 rounded border border-black bg-slate-900 text-white hover:bg-slate-800 text-[10px] font-bold transition-all shadow-xs"
                >
                  <div className="w-4 h-7 rounded overflow-hidden shrink-0 border border-white/20">
                    <img src="/mockup-stories-1.jpg" alt="Mockup 1" className="w-full h-full object-cover" />
                  </div>
                  <span className="truncate">Mockup 1</span>
                </a>

                <a
                  href="/mockup-stories-2.jpg"
                  download="montanha_magazine_stories_mockup_2.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 p-1.5 rounded border border-black bg-slate-900 text-white hover:bg-slate-800 text-[10px] font-bold transition-all shadow-xs"
                >
                  <div className="w-4 h-7 rounded overflow-hidden shrink-0 border border-white/20">
                    <img src="/mockup-stories-2.jpg" alt="Mockup 2" className="w-full h-full object-cover" />
                  </div>
                  <span className="truncate">Mockup 2</span>
                </a>
              </div>

              {onOpenMockupStudio && (
                <button
                  type="button"
                  onClick={onOpenMockupStudio}
                  className="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer pt-0.5"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Estúdio de Mockups com IA →</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hidden Offscreen Container specifically for capturing full-fidelity pages with html2canvas */}
        <div
          ref={offscreenContainerRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            left: "-99999px",
            top: 0,
            pointerEvents: "none",
            zIndex: -9999,
          }}
        >
          {activePages.map((page, idx) => (
            <div
              key={`pdf-capture-${page.id}`}
              data-pdf-export-page
              style={{
                width: selectedExportMode === "mobile" ? "540px" : "794px",
                height: selectedExportMode === "mobile" ? "960px" : "1123px",
                overflow: "hidden",
                boxSizing: "border-box",
                backgroundColor: "#0B0F19",
              }}
            >
              {page.render(idx + 1, true, selectedExportMode)}
            </div>
          ))}
        </div>

        <DialogFooter className="border-t-2 border-current pt-3 flex items-center justify-end">
          <Button variant="ghost" onClick={onClose} className="font-bold text-xs h-8">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
