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

  test("Deve permitir selecionar entre Edição Impressa A4 e Mobile no Modal de Exportação", async ({ authenticatedPage }) => {
    // 1. Abrir a central de exportação
    await authenticatedPage.getByTestId("btn-export-pdf").click();
    await expect(authenticatedPage.getByTestId("export-modal")).toBeVisible();

    // 2. Verificar a existência das opções de formato
    const optPrint = authenticatedPage.getByTestId("opt-export-print");
    const optMobile = authenticatedPage.getByTestId("opt-export-mobile");
    const btnConfirm = authenticatedPage.getByTestId("btn-confirm-export-pdf");

    await expect(optPrint).toBeVisible();
    await expect(optMobile).toBeVisible();
    await expect(btnConfirm).toBeVisible();

    // 3. Selecionar formato Mobile
    await optMobile.click();
    await expect(btnConfirm).toContainText("Gerar PDF Mobile");

    // 4. Selecionar formato Print A4
    await optPrint.click();
    await expect(btnConfirm).toContainText("Gerar & Salvar PDF A4");
  });
});
