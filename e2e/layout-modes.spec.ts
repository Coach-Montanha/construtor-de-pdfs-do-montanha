import { test, expect } from "./fixtures/auth.fixture";

test.describe("Arquitetura de Layout Duplo: Print A4 vs Mobile Digital Reader", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // Garante que o visualizador está acessível
    await expect(authenticatedPage.getByTestId("tab-viewer")).toBeVisible();
    await authenticatedPage.getByTestId("tab-viewer").click();
  });

  test("Deve alternar entre os modos Print A4 e Mobile no Magazine Viewer", async ({ authenticatedPage }) => {
    // 1. Verificar se os botões de modo de layout estão visíveis
    const btnPrint = authenticatedPage.getByTestId("btn-layout-print");
    const btnMobile = authenticatedPage.getByTestId("btn-layout-mobile");

    await expect(btnPrint).toBeVisible();
    await expect(btnMobile).toBeVisible();

    // 2. No início, o modo padrão deve ser Print A4
    await expect(btnPrint).toHaveClass(/bg-amber-400/);

    // 3. Alternar para modo Mobile
    await btnMobile.click();
    await expect(btnMobile).toHaveClass(/bg-amber-400/);
    await expect(btnPrint).not.toHaveClass(/bg-amber-400/);

    // 4. Verificar se a dica de rodapé indica proporção Mobile
    await expect(authenticatedPage.getByText(/Leitor Digital Smartphone/)).toBeVisible();

    // 5. Retornar para o modo Print A4
    await btnPrint.click();
    await expect(btnPrint).toHaveClass(/bg-amber-400/);
    await expect(authenticatedPage.getByText(/Proporção Exata A4/)).toBeVisible();
  });

  test("Deve permitir selecionar entre Edição Impressa A4 e Mobile no Modal de Exportação com Pré-Visualização e Download Direto", async ({ authenticatedPage }) => {
    // 1. Abrir a central de exportação
    await authenticatedPage.getByTestId("btn-export-pdf").click();
    await expect(authenticatedPage.getByTestId("export-modal")).toBeVisible();

    // 2. Verificar a existência das opções de formato e botão de download direto
    const optPrint = authenticatedPage.getByTestId("opt-export-print");
    const optMobile = authenticatedPage.getByTestId("opt-export-mobile");
    const btnDirectDownload = authenticatedPage.getByTestId("btn-direct-download-pdf");

    await expect(optPrint).toBeVisible();
    await expect(optMobile).toBeVisible();
    await expect(btnDirectDownload).toBeVisible();

    // 3. Verificar pré-visualização ao vivo presente
    await expect(authenticatedPage.getByText(/Pré-Visualização Ao Vivo/i)).toBeVisible();

    // 4. Selecionar formato Mobile
    await optMobile.click();
    await expect(btnDirectDownload).toContainText("Mobile 9:16");
    await expect(authenticatedPage.getByText(/9:16 Vertical/i)).toBeVisible();

    // 5. Selecionar formato Print A4
    await optPrint.click();
    await expect(btnDirectDownload).toContainText("A4");
    await expect(authenticatedPage.getByText(/210x297mm A4/i)).toBeVisible();

    // 6. Testar navegação da pré-visualização (Próxima página)
    const nextBtn = authenticatedPage.getByRole("button", { name: /Próxima/i });
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await expect(authenticatedPage.getByText(/2 \//i)).toBeVisible();
    }
  });
});
