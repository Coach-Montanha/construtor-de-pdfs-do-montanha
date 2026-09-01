import { test, expect } from "./fixtures/auth.fixture";

test.describe.skip("Jornadas de Autenticação (Cadastro, Login, Logout) - [DESATIVADO VISUALMENTE PARA USO DIRETO]", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage without pre-seeded user
    await page.goto("/");
  });

  test.describe("1. Cadastro de Usuário (Sign Up)", () => {
    test("Fluxo Feliz: Deve cadastrar um novo usuário com sucesso e atualizar o cabeçalho", async ({ page }) => {
      // 1. Abrir o modal de autenticação
      await page.getByTestId("btn-auth-trigger").click();
      await expect(page.getByTestId("auth-modal")).toBeVisible();

      // 2. Mudar para a aba de Cadastro
      await page.getByTestId("tab-register").click();

      // 3. Preencher formulário com dados válidos
      const uniqueEmail = `atleta_${Date.now()}@montanha.com`;
      await page.getByTestId("input-register-name").fill("Atleta Montanha");
      await page.getByTestId("input-register-email").fill(uniqueEmail);
      await page.getByTestId("input-register-password").fill("senhaForte123");

      // 4. Submeter cadastro
      await page.getByTestId("btn-submit-register").click();

      // 5. Verificar feedback de sucesso e fechamento do modal
      await expect(page.getByTestId("auth-success-msg")).toBeVisible();
      await expect(page.getByTestId("auth-modal")).not.toBeVisible({ timeout: 5000 });

      // 6. Verificar que o usuário logado aparece no cabeçalho
      const userBadge = page.getByTestId("user-profile-badge");
      await expect(userBadge).toBeVisible();
      await expect(userBadge).toContainText("Atleta Montanha");

      // 7. Verificar que o botão de Sair está disponível
      await expect(page.getByTestId("btn-logout")).toBeVisible();
    });

    test("Estado de Falha: Deve rejeitar cadastro com campos em branco", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-register").click();

      // Submeter formulário vazio
      await page.getByTestId("btn-submit-register").click();

      // Verificar mensagem de erro
      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("O nome completo é obrigatório.");
    });

    test("Estado de Falha: Deve rejeitar cadastro com e-mail inválido", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-register").click();

      await page.getByTestId("input-register-name").fill("Coach Silva");
      await page.getByTestId("input-register-email").fill("email-invalido-sem-arroba");
      await page.getByTestId("input-register-password").fill("senha123");
      await page.getByTestId("btn-submit-register").click();

      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("Informe um e-mail válido.");
    });

    test("Estado de Falha: Deve rejeitar senha menor que 6 caracteres", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-register").click();

      await page.getByTestId("input-register-name").fill("Coach Silva");
      await page.getByTestId("input-register-email").fill("coach.silva@montanha.com");
      await page.getByTestId("input-register-password").fill("123");
      await page.getByTestId("btn-submit-register").click();

      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("mínimo 6 caracteres");
    });

    test("Estado de Falha: Deve rejeitar e-mail duplicado já registrado", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-register").click();

      // Usar o e-mail padrão já semeado no sistema
      await page.getByTestId("input-register-name").fill("Tentativa Duplicada");
      await page.getByTestId("input-register-email").fill("demo@montanha.com");
      await page.getByTestId("input-register-password").fill("senha123");
      await page.getByTestId("btn-submit-register").click();

      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("já está cadastrado");
    });
  });

  test.describe("2. Login de Usuário", () => {
    test("Fluxo Feliz: Deve autenticar com credenciais corretas e exibir perfil", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await expect(page.getByTestId("auth-modal")).toBeVisible();

      // Certificar que está na aba de Login
      await page.getByTestId("tab-login").click();

      // Preencher credenciais da conta de demonstração
      await page.getByTestId("input-login-email").fill("demo@montanha.com");
      await page.getByTestId("input-login-password").fill("senha123");
      await page.getByTestId("btn-submit-login").click();

      // Feedback de sucesso e fechamento
      await expect(page.getByTestId("auth-success-msg")).toBeVisible();
      await expect(page.getByTestId("auth-modal")).not.toBeVisible({ timeout: 5000 });

      // Verificar que usuário logado é exibido
      const userBadge = page.getByTestId("user-profile-badge");
      await expect(userBadge).toBeVisible();
      await expect(userBadge).toContainText("Coach Montanha Demo");
    });

    test("Estado de Falha: Deve exibir erro ao tentar logar com senha errada", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-login").click();

      await page.getByTestId("input-login-email").fill("demo@montanha.com");
      await page.getByTestId("input-login-password").fill("senhaErrada999");
      await page.getByTestId("btn-submit-login").click();

      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("Senha incorreta");
    });

    test("Estado de Falha: Deve exibir erro quando o e-mail não existe", async ({ page }) => {
      await page.getByTestId("btn-auth-trigger").click();
      await page.getByTestId("tab-login").click();

      await page.getByTestId("input-login-email").fill("inexistente@montanha.com");
      await page.getByTestId("input-login-password").fill("senha123");
      await page.getByTestId("btn-submit-login").click();

      const errorMsg = page.getByTestId("auth-error-msg");
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText("Nenhuma conta cadastrada");
    });
  });

  test.describe("3. Logout (Desconexão)", () => {
    test("Fluxo Feliz: Deve desconectar a sessão e restaurar o botão de autenticação", async ({ authenticatedPage }) => {
      // Começa com a fixture authenticatedPage
      await expect(authenticatedPage.getByTestId("user-profile-badge")).toBeVisible();
      await expect(authenticatedPage.getByTestId("btn-logout")).toBeVisible();

      // Clicar em Sair
      await authenticatedPage.getByTestId("btn-logout").click();

      // Verificar que o perfil sumiu e o botão de login reapareceu
      await expect(authenticatedPage.getByTestId("user-profile-badge")).not.toBeVisible();
      await expect(authenticatedPage.getByTestId("btn-auth-trigger")).toBeVisible();
    });
  });
});
