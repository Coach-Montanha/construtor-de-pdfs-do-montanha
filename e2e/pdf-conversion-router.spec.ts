import { test, expect } from "./fixtures/auth.fixture";
import { jsPDF } from "jspdf";

test.describe("PDF Conversion Router: Importação Inteligente de PDFs", () => {
  test("Deve abrir o modal pelo botão do Header e verificar elementos de análise e classificação", async ({
    authenticatedPage,
  }) => {
    // 1. Verificar se o botão no Header do estúdio está visível e clicar
    const btnHeaderImport = authenticatedPage.getByTestId("btn-header-pdf-import");
    await expect(btnHeaderImport).toBeVisible();
    await btnHeaderImport.click();

    // 2. O modal do PDF Conversion Router deve abrir
    await expect(
      authenticatedPage.getByText(/Importação Inteligente de PDFs/i)
    ).toBeVisible();
    await expect(
      authenticatedPage.getByText(/pdf-conversion-router/i)
    ).toBeVisible();

    // 3. Deve exibir a dropzone de arquivos
    await expect(
      authenticatedPage.getByText(/Arraste seu PDF aqui ou clique para selecionar/i)
    ).toBeVisible();

    // 4. Fechar o modal
    await authenticatedPage.getByRole("button", { name: /Cancelar/i }).click();
    await expect(
      authenticatedPage.getByText(/Importação Inteligente de PDFs/i)
    ).not.toBeVisible();
  });

  test("Deve abrir o modal pelo Acervo e processar um arquivo PDF com classificação e roteamento de matérias", async ({
    authenticatedPage,
  }) => {
    // 1. Navegar até a aba do Acervo
    const tabRepo = authenticatedPage.getByRole("button", { name: /Acervo/i });
    await expect(tabRepo).toBeVisible();
    await tabRepo.click();

    // 2. Clicar no botão Importar PDF (Router)
    const btnOpenRouter = authenticatedPage.getByTestId("btn-open-pdf-router");
    await expect(btnOpenRouter).toBeVisible();
    await btnOpenRouter.click();

    await expect(
      authenticatedPage.getByText(/Importação Inteligente de PDFs/i)
    ).toBeVisible();

    // 3. Gerar um PDF de teste sintético em memória com seções editoriais
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("TREINAMENTO DE POTENCIA E FORCA", 14, 25);
    doc.setFontSize(12);
    doc.text(
      "O treinamento de forca explosiva e fundamental para o atleta moderno. A progressao continua garante resultados superiores.",
      14,
      40
    );
    doc.setFontSize(18);
    doc.text("METODOLOGIA E PROTOCOLOS", 14, 70);
    doc.setFontSize(12);
    doc.text(
      "A aplicacao de series bem dosadas e o monitoramento da velocidade sao os diferenciais comprovados em alta performance.",
      14,
      85
    );

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

    // 4. Enviar o PDF para o input de arquivo do modal
    const fileInput = authenticatedPage.getByTestId("pdf-file-input");
    await fileInput.setInputFiles({
      name: "guia-treinamento-montanha.pdf",
      mimeType: "application/pdf",
      buffer: pdfBuffer,
    });

    // 5. Verificar o banner de classificação do documento
    await expect(
      authenticatedPage.getByText(/guia-treinamento-montanha\.pdf/i)
    ).toBeVisible({ timeout: 15000 });

    // 6. Verificar a existência das 4 rotas de conversão
    await expect(authenticatedPage.getByText(/Separação Editorial/i)).toBeVisible();
    await expect(authenticatedPage.getByText(/Artigo Contínuo/i)).toBeVisible();
    await expect(authenticatedPage.getByText(/Página por Página/i)).toBeVisible();
    await expect(authenticatedPage.getByText(/Markdown Limpo/i)).toBeVisible();

    // 7. Verificar matérias extraídas
    await expect(
      authenticatedPage.getByText(/Matérias Extraídas/i)
    ).toBeVisible();

    // 8. Salvar no Acervo como Rascunhos
    const btnSaveRepo = authenticatedPage.getByTestId("btn-save-pdf-to-repo");
    await expect(btnSaveRepo).toBeVisible();
    await btnSaveRepo.click();

    // 9. Verificar que o modal fechou e o documento foi adicionado ao acervo
    await expect(
      authenticatedPage.getByText(/Importação Inteligente de PDFs/i)
    ).not.toBeVisible();

    // O novo documento deve aparecer na lista do acervo
    await expect(
      authenticatedPage.getByRole("heading", { name: /TREINAMENTO DE POTENCIA/i })
    ).toBeVisible({ timeout: 5000 });
  });
});
