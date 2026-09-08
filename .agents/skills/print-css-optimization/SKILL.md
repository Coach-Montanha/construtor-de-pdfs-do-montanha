---
name: print-css-optimization
description: Otimização de CSS para renderização de impressão e exportação em PDF de alta fidelidade (300 DPI, proporções A4/Letter, sem cortes de texto).
---

# Skill: Print CSS & PDF Layout Optimization

Esta skill contém os padrões rigorosos de CSS Paged Media e renderização gráfica para garantir que os PDFs gerados pelo Construtor de PDFs do Montanha tenham qualidade equivalente a revistas impressas em offset.

## Regras de Engenharia CSS

### 1. Quebras de Página e Proteção de Colunas
* Sempre aplicar `break-inside: avoid` (ou `-webkit-column-break-inside: avoid`) em cards de treino (`.workout-card`), box de destaques (`.callout-box`) e imagens de matérias para evitar que sejam fatiados no meio de uma quebra de página.
* Configurar `orphans: 3` e `widows: 3` em parágrafos das colunas de texto para prevenir linhas órfãs isoladas no topo ou rodapé de páginas.

### 2. Proporção e Escala de Impressão
* Definir explicitamente o tamanho da página via CSS `@page`:
  ```css
  @page {
    size: A4 portrait;
    margin: 0;
  }
  ```
* Usar unidades vetoriais e `transform-origin` precisas para que o preview na tela e o arquivo gerado via Chromium headless sejam 100% idênticos em dimensões.

### 3. Renderização de Cores e Imagens
* Forçar `-webkit-print-color-adjust: exact; print-color-adjust: exact;` em todos os elementos da revista para preservar fundos escuros (`#0B0F19`), detalhes amarelos (`#FACC15`) e gradientes sem clareamento pelo navegador.
