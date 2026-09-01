import React, { useState } from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
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
} from "lucide-react";

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  theme: MagazineTheme;
  totalPages?: number;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  project,
  theme,
  totalPages: customTotalPages,
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Dynamic total pages calculation
  const calculateTotalPages = (): number => {
    const vis = {
      showCover: true,
      showEditorLetter: true,
      showContributors: false,
      showTableOfContents: true,
      showBackCover: true,
      ...project.pageVisibility,
    };
    let count = 0;
    if (vis.showCover) count++;
    if (vis.showEditorLetter) count++;
    if (vis.showContributors) count++;
    if (vis.showTableOfContents) count++;
    project.articles
      .filter((a) => a.enabled !== false)
      .forEach((a) => {
        count += a.pageSpan === 2 ? 2 : 1;
      });
    if (vis.showBackCover) count++;
    return Math.max(1, count);
  };

  const totalPages = customTotalPages || calculateTotalPages();

  const handlePrintPdf = () => {
    setIsExporting(true);
    // Fechamos o modal antes de disparar a impressão para garantir que nenhum overlay permaneça no DOM
    onClose();

    setTimeout(() => {
      window.print();
      setIsExporting(false);
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-testid="export-modal" className="theme-app-card max-w-2xl p-6 custom-scrollbar font-sans border-2 shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <DialogTitle className="text-xl font-black flex items-center gap-2 uppercase">
            <Printer className="w-5 h-5 text-amber-500" />
            <span>Central de Exportação de PDF & Impressão Editorial</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 my-4">
          {/* Summary Box */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="opacity-75 uppercase">Revista:</span>
              <span className="font-black uppercase">{project.title}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="opacity-75 uppercase">Total de Páginas:</span>
              <span className="font-mono font-black text-amber-600">
                {totalPages} Páginas A4
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="opacity-75 uppercase">Formato Editorial:</span>
              <span className="font-bold">A4 Portrait (210mm x 297mm)</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="opacity-75 uppercase">Tema Ativo:</span>
              <span className="font-black text-amber-600">{theme.name}</span>
            </div>
          </div>

          {/* Print instructions banner */}
          <div className="bg-amber-400 text-black border-2 border-black p-4 rounded-xl space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-black uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>Dicas para Gerar o PDF Perfeito no Navegador:</span>
            </div>
            <ul className="text-xs space-y-1.5 list-disc pl-5 font-semibold">
              <li>
                No diálogo de impressão, selecione como Destino: <strong>"Salvar como PDF"</strong>.
              </li>
              <li>
                Em <strong>Layout</strong>, selecione <strong>"Retrato" (Portrait)</strong> e Tamanho <strong>A4</strong>.
              </li>
              <li>
                Em <strong>Mais Definições</strong>, configure <strong>Margens: "Nenhuma"</strong>.
              </li>
              <li>
                Certifique-se de marcar a opção <strong>"Gráficos de segundo plano"</strong> para que todas as fotos e cores saiam perfeitas.
              </li>
            </ul>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <Button
              onClick={handlePrintPdf}
              disabled={isExporting}
              className="h-11 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md border-2 border-black flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isExporting ? "Preparando..." : "Gerar & Salvar PDF A4"}</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleExportCompiledMarkdown}
              className="h-11 border-2 border-current theme-app-card font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              title="Exportar todo o texto da revista em um arquivo Markdown formatado"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Baixar Textos (.MD)</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleDownloadBackupJson}
              className="h-11 border-2 border-current theme-app-card font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-amber-500" />
              <span>Backup Geral (.JSON)</span>
            </Button>
          </div>
        </div>

        <DialogFooter className="border-t-2 border-current pt-3 flex items-center justify-end">
          <Button variant="ghost" onClick={onClose} className="font-bold">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
