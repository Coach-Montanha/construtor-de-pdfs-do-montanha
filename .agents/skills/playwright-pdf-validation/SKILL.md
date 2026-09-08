---
name: playwright-pdf-validation
description: Validação automatizada E2E via Playwright para layouts da revista, quebras de página, renderização tipográfica e integridade de exportação de PDF.
---

# Skill: Playwright PDF Validation & Layout Testing

Esta skill guia o agente na execução e escrita de testes automatizados para o Construtor de PDFs do Montanha, assegurando que nenhuma alteração de código ou estilo cause sobreposição de texto ou quebra indevida de páginas.

## Procedimentos de Validação

### 1. Testes de Renderização de Templates
* Testar os layouts principais (`editorial-lead`, `workout-protocol`, `three-column-dense`, `infographic-tips`).
* Verificar se o elemento `.page-spread` ou `.magazine-page` respeita a proporção de página e que os nós de texto não ultrapassam os limites de corte (*print bleed*).

### 2. Comandos de Execução
* Rodar os testes de layout:
  ```bash
  bun x playwright test e2e/layout-modes.spec.ts
  ```
* Teste completo do fluxo editorial:
  ```bash
  bun x playwright test e2e/main-action.spec.ts
  ```
