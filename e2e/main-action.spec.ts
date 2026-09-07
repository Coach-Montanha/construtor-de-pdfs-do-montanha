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
    await expect(authenticatedPage.getByText(/Central de Exportação de PDF/i)).toBeVisible();
  });

  test("Fluxo Editorial: Sincronização de status entre Revista e Acervo (Publicado vs Rascunho)", async ({ authenticatedPage }) => {
    // 1. Abrir aba do Acervo & Repositório
    await authenticatedPage.getByTestId("tab-repository").click();
    await expect(authenticatedPage.getByText("Repositório de Arquivos & Gerador de Artigos por IA")).toBeVisible();

    // 2. Verificar presença dos filtros dinâmicos
    await expect(authenticatedPage.getByRole("button", { name: /^Rascunhos Disponíveis/i })).toBeVisible();
    await expect(authenticatedPage.getByRole("button", { name: /^Na Revista/i })).toBeVisible();

    // 3. Testar inserção direta na revista e posterior remoção
    const addBtn = authenticatedPage.getByRole("button", { name: /Colocar na Revista/i }).first();
    if (await addBtn.isVisible()) {
      await addBtn.click();
      // O botão vira "Remover da Revista" e o badge "PUBLICADO NA REVISTA" aparece
      const removeBtn = authenticatedPage.getByRole("button", { name: /Remover da Revista/i }).first();
      await expect(removeBtn).toBeVisible();
      await expect(authenticatedPage.getByText("PUBLICADO NA REVISTA").first()).toBeVisible();

      // 4. Ao clicar em remover, volta a ser rascunho
      await removeBtn.click();
      await expect(authenticatedPage.getByRole("button", { name: /Colocar na Revista/i }).first()).toBeVisible();
      await expect(authenticatedPage.getByText("RASCUNHO DISPONÍVEL").first()).toBeVisible();
    }
  });

  test("Fluxo em Nuvem: Sincronização multi-dispositivo (Upload e Download)", async ({ authenticatedPage }) => {
    // 1. Abrir diálogo de sincronização em nuvem
    await authenticatedPage.getByTestId("btn-open-cloud-sync").click();
    await expect(authenticatedPage.getByText(/Central de Sincronização em Nuvem/i)).toBeVisible();

    // 2. Verificar presença do QR Code e campo de código
    await expect(authenticatedPage.getByText(/Abrir Exatamente Esta Edição no Celular/i)).toBeVisible();
    await expect(authenticatedPage.getByText(/Código da Edição na Nuvem/i)).toBeVisible();

    // 3. Testar envio para a nuvem (Upload)
    const btnPush = authenticatedPage.getByTestId("btn-cloud-push");
    await expect(btnPush).toBeVisible();
    await btnPush.click();

    // Deve exibir mensagem de confirmação de envio
    await expect(authenticatedPage.getByText(/enviado para a nuvem sob o código/i)).toBeVisible();

    // 4. Testar puxar da nuvem (Download)
    const btnPull = authenticatedPage.getByTestId("btn-cloud-pull");
    await expect(btnPull).toBeVisible();
    await btnPull.click();

    // Deve exibir confirmação de download aplicado
    await expect(authenticatedPage.getByText(/baixada da nuvem e aplicada/i)).toBeVisible();
  });

  test("Fluxo Editorial Intelligence: Tema Swiss Editorial, Presets Tipográficos e Blocos Ricos", async ({ authenticatedPage }) => {
    // 1. Abrir Configurações do Projeto
    await authenticatedPage.getByTestId("tab-settings").click();
    await expect(authenticatedPage.getByText(/Estrutura de Páginas, Tipografia & Temas/i)).toBeVisible();

    // 2. Verificar e testar os Presets Rápidos de Tipografia (1 Clique)
    await expect(authenticatedPage.getByText(/Combinações Consagradas de 1 Clique/i)).toBeVisible();
    const btnPresetFitness = authenticatedPage.getByRole("button", { name: /Força & Atletismo Puro/i });
    await expect(btnPresetFitness).toBeVisible();
    await btnPresetFitness.click();
    await expect(btnPresetFitness).toHaveClass(/bg-amber-400/);

    // 3. Selecionar o Novo Tema Swiss Editorial & Amber Gold
    await authenticatedPage.getByRole("button", { name: /Claros & Editoriais/i }).click();
    const swissThemeCard = authenticatedPage.getByText(/Swiss Editorial & Amber Gold/i);
    await expect(swissThemeCard).toBeVisible();
    await swissThemeCard.click();
    await expect(authenticatedPage.getByText("ATIVO").first()).toBeVisible();

    // 4. Testar inserção de Blocos Editoriais no Artigo (Bento Stat)
    await authenticatedPage.getByTestId("tab-articles").click();
    const firstEditBtn = authenticatedPage.getByTestId("btn-edit-article").first();
    await expect(firstEditBtn).toBeVisible();
    await firstEditBtn.click();
    await expect(authenticatedPage.getByTestId("article-modal")).toBeVisible();

    // Clicar no botão "+ Bento Stat" na barra de ferramentas
    const btnBentoStat = authenticatedPage.getByRole("button", { name: /\+ Bento Stat/i });
    await expect(btnBentoStat).toBeVisible();
    await btnBentoStat.click();

    // Verificar se o texto [STAT: 85% | Hipertrofia Miofibrilar...] foi inserido no conteúdo
    const textarea = authenticatedPage.getByTestId("textarea-article-content");
    await expect(textarea).toHaveValue(/\[STAT:\s*85%/);

    // Fechar modal
    await authenticatedPage.getByTestId("btn-cancel-article").click();
  });
});
