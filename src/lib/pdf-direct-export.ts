import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { MagazineLayoutMode, MagazineProject } from "../types/magazine";

export interface PdfExportProgress {
  current: number;
  total: number;
  percent: number;
  statusText: string;
}

export interface ExportDirectPdfOptions {
  pageElements: HTMLElement[];
  project: MagazineProject;
  layoutMode: MagazineLayoutMode;
  onProgress?: (progress: PdfExportProgress) => void;
}

/**
 * Gera um arquivo PDF real (.pdf) diretamente no navegador renderizando cada página
 * com html2canvas e compilando via jsPDF em alta resolução, disparando o download direto.
 */
export async function exportMagazineToDirectPdf({
  pageElements,
  project,
  layoutMode,
  onProgress,
}: ExportDirectPdfOptions): Promise<void> {
  const total = pageElements.length;
  if (total === 0) {
    throw new Error("Nenhuma página disponível para exportação em PDF.");
  }

  // Dimensões exatas em milímetros
  const isMobile = layoutMode === "mobile";
  const pageWidthMm = isMobile ? 108 : 210;
  const pageHeightMm = isMobile ? 192 : 297;
  const pdfFormat: [number, number] | "a4" = isMobile ? [108, 192] : "a4";

  onProgress?.({
    current: 0,
    total,
    percent: 0,
    statusText: "Inicializando motor de compilação de PDF de alta fidelidade...",
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: pdfFormat,
    compress: true,
  });

  for (let i = 0; i < total; i++) {
    const el = pageElements[i];
    if (!el) continue;

    onProgress?.({
      current: i + 1,
      total,
      percent: Math.round(((i + 0.3) / total) * 100),
      statusText: `Capturando e renderizando página ${i + 1} de ${total} em alta resolução...`,
    });

    // Permitir que o navegador processe o frame antes da renderização de alta escala
    await new Promise((resolve) => setTimeout(resolve, 80));

    // Renderização com escala 2x para nitidez cristalina
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
      backgroundColor: "#0B0F19",
      windowWidth: isMobile ? 540 : 1080,
      imageTimeout: 15000,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.92);

    if (i > 0) {
      pdf.addPage(pdfFormat, "portrait");
    }

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      pageWidthMm,
      pageHeightMm,
      undefined,
      "FAST"
    );

    onProgress?.({
      current: i + 1,
      total,
      percent: Math.round(((i + 1) / total) * 100),
      statusText: `Página ${i + 1} de ${total} compilada no PDF.`,
    });

    await new Promise((resolve) => setTimeout(resolve, 40));
  }

  onProgress?.({
    current: total,
    total,
    percent: 100,
    statusText: "Finalizando arquivo e iniciando download...",
  });

  const sanitizedTitle = project.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  const modeSlug = isMobile ? "mobile_9x16" : "a4";
  const fileName = `${sanitizedTitle || "montanha_magazine"}_edicao_${project.editionNumber || "01"}_${modeSlug}.pdf`;

  pdf.save(fileName);
}
