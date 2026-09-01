import { test, expect } from "./fixtures/auth.fixture";

test.describe.skip("Jornada Crítica: Pagamento & Upgrade de Assinatura PRO - [DESATIVADO VISUALMENTE PARA USO DIRETO]", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // Começa autenticado com usuário comum (não-PRO)
    await expect(authenticatedPage.getByTestId("btn-upgrade-pro")).toBeVisible();
    await expect(authenticatedPage.getByTestId("badge-pro-status")).not.toBeVisible();
  });

  test("Fluxo Feliz: Deve processar o pagamento com cartão válido e ativar o status PRO", async ({ authenticatedPage }) => {
    // 1. Abrir modal de assinatura PRO
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    // 2. Alternar entre opções de planos
    await authenticatedPage.getByTestId("btn-plan-monthly").click();
    await authenticatedPage.getByTestId("btn-plan-annual").click();

    // 3. Preencher dados de cartão válidos
    await authenticatedPage.getByTestId("input-card-number").fill("4532 0156 8920 4455");
    await authenticatedPage.getByTestId("input-card-holder").fill("COACH MONTANHA");
    await authenticatedPage.getByTestId("input-card-expiry").fill("12/29");
    await authenticatedPage.getByTestId("input-card-cvv").fill("987");

    // 4. Submeter pagamento
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    // 5. Verificar feedback de aprovação
    const successBadge = authenticatedPage.getByTestId("payment-success-badge");
    await expect(successBadge).toBeVisible();
    await expect(successBadge).toContainText("Pagamento aprovado");

    // 6. Verificar fechamento do modal e atualização do cabeçalho com badge PRO
    await expect(authenticatedPage.getByTestId("payment-modal")).not.toBeVisible({ timeout: 5000 });
    const proBadge = authenticatedPage.getByTestId("badge-pro-status");
    await expect(proBadge).toBeVisible();
    await expect(proBadge).toContainText("PRO");

    // 7. O botão de upgrade não deve mais aparecer
    await expect(authenticatedPage.getByTestId("btn-upgrade-pro")).not.toBeVisible();
  });

  test("Estado de Falha: Rejeitar cartão com menos de 16 dígitos", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    await authenticatedPage.getByTestId("input-card-number").fill("1234 5678");
    await authenticatedPage.getByTestId("input-card-holder").fill("COACH SILVA");
    await authenticatedPage.getByTestId("input-card-expiry").fill("08/27");
    await authenticatedPage.getByTestId("input-card-cvv").fill("123");
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    const errorMsg = authenticatedPage.getByTestId("payment-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Número de cartão de crédito inválido");
  });

  test("Estado de Falha: Rejeitar nome do titular em branco", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    await authenticatedPage.getByTestId("input-card-number").fill("4532 0156 8920 4455");
    await authenticatedPage.getByTestId("input-card-holder").fill("");
    await authenticatedPage.getByTestId("input-card-expiry").fill("08/27");
    await authenticatedPage.getByTestId("input-card-cvv").fill("123");
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    const errorMsg = authenticatedPage.getByTestId("payment-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Informe o nome impresso no cartão");
  });

  test("Estado de Falha: Rejeitar validade de cartão expirada ou em formato incorreto", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    await authenticatedPage.getByTestId("input-card-number").fill("4532 0156 8920 4455");
    await authenticatedPage.getByTestId("input-card-holder").fill("COACH SILVA");
    await authenticatedPage.getByTestId("input-card-expiry").fill("999");
    await authenticatedPage.getByTestId("input-card-cvv").fill("123");
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    const errorMsg = authenticatedPage.getByTestId("payment-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Data de validade inválida");
  });

  test("Estado de Falha: Rejeitar CVV incompleto", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    await authenticatedPage.getByTestId("input-card-number").fill("4532 0156 8920 4455");
    await authenticatedPage.getByTestId("input-card-holder").fill("COACH SILVA");
    await authenticatedPage.getByTestId("input-card-expiry").fill("12/28");
    await authenticatedPage.getByTestId("input-card-cvv").fill("1");
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    const errorMsg = authenticatedPage.getByTestId("payment-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Código de segurança (CVV) inválido");
  });

  test("Estado de Falha: Simulação de cartão recusado pela operadora", async ({ authenticatedPage }) => {
    await authenticatedPage.getByTestId("btn-upgrade-pro").click();
    await expect(authenticatedPage.getByTestId("payment-modal")).toBeVisible();

    // Cartão com terminação 0000 aciona a recusa da operadora
    await authenticatedPage.getByTestId("input-card-number").fill("4532 0156 8920 0000");
    await authenticatedPage.getByTestId("input-card-holder").fill("COACH SILVA");
    await authenticatedPage.getByTestId("input-card-expiry").fill("12/28");
    await authenticatedPage.getByTestId("input-card-cvv").fill("123");
    await authenticatedPage.getByTestId("btn-submit-payment").click();

    const errorMsg = authenticatedPage.getByTestId("payment-error-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Pagamento recusado pela operadora");
  });
});
