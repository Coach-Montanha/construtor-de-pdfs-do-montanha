# Plano: Página em branco com ponto preto centralizado

## Objetivo
Substituir o placeholder da página inicial (`/`) por uma página completamente em branco com um único ponto preto no centro da tela.

## Alterações propostas

1. **Modificar `src/routes/index.tsx`**
   - Remover o placeholder `data-lovable-blank-page-placeholder` e a imagem atual.
   - Renderizar um container de tela cheia (`min-h-screen`) com fundo branco.
   - Adicionar um elemento circular preto (`bg-black`, dimensões pequenas, ex: 16x16 px ou 24x24 px) centralizado com `flex items-center justify-center`.
   - Aplicar borda arredondada completa (`rounded-full`) para formar um círculo perfeito.

## Critérios de aceitação
- A página `/` exibe apenas um fundo branco e um círculo preto no centro.
- Não há outros elementos visíveis (texto, imagens, navegação).
- O ponto permanece centralizado em diferentes tamanhos de tela.
