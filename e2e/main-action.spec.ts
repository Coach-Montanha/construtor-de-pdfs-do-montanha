import { test, expect } from "./fixtures/auth.fixture";

test.describe("Jornada Crítica: Ação Principal (Criação, Edição de Matérias & Exportação de PDF)", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // Acessa o aplicativo diretamente sem barreiras de autenticação
    await expect(authenticatedPage.getByTestId("tab-viewer")).toBeVisible();
  });

  test("Fluxo Feliz: Deve criar uma nova matéria editorial e exibi-la na revista", async ({ authenticatedPage }) => {
    // 1. Abrir a aba de Matérias & Artigos
    await authenticatedPage.getByTestId("tab-articles").click();
    await expect(authenticatedPage.getByText("Matérias & Artigos da Edição")).toBeVisible();

    // 2. Clicar no botão para criar novo artigo
    await authenticatedPage.getByTestId("btn-new-article").click();
    await expect(authenticatedPage.getByTestId("article-modal")).toBeVisible();

    // 3. Preencher campos obrigatórios da matéria
    const articleTitle = "TREINO BALÍSTICO COM KETTLEBELLS";
    const articleSubtitle = "Como desenvolver potência pura e hipertrofia funcional com pesos livres.";
    const articleContent = "O treino balístico com kettlebells acelera o recrutamento de unidades motoras de contração rápida.\n\nExecute o swing com total extensão do quadril e contração máxima de glúteos.";

    await authenticatedPage.getByTestId("input-article-title").fill(articleTitle);
    await authenticatedPage.getByTestId("input-article-subtitle").fill(articleSubtitle);
    await authenticatedPage.getByTestId("textarea-article-content").fill(articleContent);

    // 4. Salvar o artigo
    await authenticatedPage.getByTestId("btn-save-article").click();

    // 5. Verificar que o modal foi fechado
    await expect(authenticatedPage.getByTestId("article-modal")).not.toBeVisible({ timeout: 5000 });

    // 6. Verificar que a nova matéria aparece listada
    const createdCard = authenticatedPage.getByTestId("article-card-title").filter({ hasText: articleTitle });
    await expect(createdCard).toBeVisible();
  });

  test("Estado de Falha: Não deve permitir salvar matéria com título em branco", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("tab-articles").click();
    await authenticatedPage.getByTestId("btn-new-article").click();
    await expect(authenticatedPage.getByTestId("article-modal")).toBeVisible();

    // Deixar título em branco e tentar salvar
    await authenticatedPage.getByTestId("input-article-title").fill("");
    await authenticatedPage.getByTestId("btn-save-article").click();

    // Validar exibição da mensagem de erro de validação
    const errorMsg = authenticatedPage.getByTestId("article-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("preencha o título da matéria");

    // Modal deve permanecer aberto para correção
    await expect(authenticatedPage.getByTestId("article-modal")).toBeVisible();

    // Cancelar para fechar
    await authenticatedPage.getByTestId("btn-cancel-article").click();
    await expect(authenticatedPage.getByTestId("article-modal")).not.toBeVisible();
  });

  test("Fluxo Feliz: Deve abrir e editar uma matéria existente", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("tab-articles").click();

    // Localizar e clicar no primeiro botão Editar da lista
    const firstEditBtn = authenticatedPage.getByTestId("btn-edit-article").first();
    await expect(firstEditBtn).toBeVisible();
    await firstEditBtn.click();

    // Modal deve abrir com os dados pré-carregados
    await expect(authenticatedPage.getByTestId("article-modal")).toBeVisible();

    // Atualizar título
    const updatedTitle = "MATÉRIA EDITADA // ATUALIZADA COM SUCESSO";
    await authenticatedPage.getByTestId("input-article-title").fill(updatedTitle);
    await authenticatedPage.getByTestId("btn-save-article").click();

    // Modal fecha e lista reflete a edição
    await expect(authenticatedPage.getByTestId("article-modal")).not.toBeVisible({ timeout: 5000 });
    const updatedItem = authenticatedPage.getByTestId("article-card-title").filter({ hasText: updatedTitle });
    await expect(updatedItem).toBeVisible();
  });

  test("Fluxo Feliz: Deve acionar e exibir a central de exportação de PDF", async ({ authenticatedPage }) => {
    // Clicar no botão Exportar PDF no cabeçalho
    await authenticatedPage.getByTestId("btn-export-pdf").click();

    // Modal de exportação deve abrir
    await expect(authenticatedPage.getByTestId("export-modal")).toBeVisible();
    await expect(authenticatedPage.getByText("Central de Exportação de PDF & Impressão Editorial")).toBeVisible();
  });
});
