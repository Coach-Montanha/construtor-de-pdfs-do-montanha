---
name: cloudflare-deploy
description: Automação de compilação, validação e deploy contínuo em Cloudflare Pages / Nitro Worker para o Construtor de PDFs do Montanha.
---

# Skill: Cloudflare Pages & CI/CD Deployment

Esta skill padroniza os procedimentos de build e deploy autônomo do Construtor de PDFs do Montanha, respeitando as diretrizes de sincronização contínua estabelecidas no projeto.

## Fluxo de Compilação e Deploy

### 1. Validação Local de Tipagem e Build
Antes de qualquer envio para produção:
```bash
# Executar typecheck e compilação de assets/nitro worker
bun run build
```

### 2. Sincronização Obrigatória com GitHub (`origin/main`)
* Conforme o `AGENTS.md` do projeto, toda tarefa concluída deve ser commitada e enviada via push automaticamente:
```bash
git add .
git commit -m "feat(magazine): update editorial layout and print styles"
git push origin main
```
* O push no branch `main` dispara automaticamente o webhook da Cloudflare Pages e sincroniza com o editor do Lovable.
