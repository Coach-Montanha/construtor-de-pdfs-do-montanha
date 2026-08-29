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
  AlertCircle,
} from "lucide-react";

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  theme: MagazineTheme;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  project,
  theme,
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Total pages: Cover (1) + EditorLetter (1) + Contributors (1) + TOC (1) + Articles (N) + BackCover (1)
  const totalPages = 4 + project.articles.length;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-2xl p-6 custom-scrollbar font-sans border-2 shadow-2xl">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Button
              onClick={handlePrintPdf}
              disabled={isExporting}
              className="h-12 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md border-2 border-black flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>{isExporting ? "Preparando..." : "Gerar & Salvar PDF A4"}</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleDownloadBackupJson}
              className="h-12 border-2 border-current theme-app-card font-bold text-xs flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-amber-500" />
              <span>Baixar Backup (.JSON)</span>
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
