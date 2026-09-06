<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Diretriz de Sincronização Automática com GitHub e Lovable

> [!IMPORTANT]
> **Fluxo Contínuo & Automático de Commit e Push:**
> Todas as alterações de código, recursos ou documentação implementadas pelo agente devem ser **automaticamente enviadas (commit & push) para o GitHub (`origin/main`)** assim que a tarefa ou conjunto de modificações for concluído e validado (build/typecheck).
> - **Não solicitar aprovação prévia nem aguardar confirmação posterior** do usuário para realizar o commit e push: a sincronização com o repositório remoto é automática e mandatória a cada conclusão de tarefa.
> - Manter mensagens de commit claras e padronizadas seguindo *Conventional Commits* (ex: `feat(...)`, `fix(...)`).
> - Preservar rigorosamente o histórico do git (nunca usar force push `--force`, rebase ou squash em commits já publicados).

## Publicação Automática no Lovable e Produção

1. **Sincronização Imediata no Editor Lovable**:
   - Cada `git push origin main` atualiza automaticamente o código, a árvore de arquivos e o *Live Preview* dentro do Lovable via integração oficial do GitHub App.
2. **Publicação no Domínio Público Lovable (`.lovable.app`)**:
   - Por arquitetura de segurança da plataforma Lovable, o ambiente de produção publicado (`.lovable.app`) é atualizado através do botão **"Publish" → "Publish changes"** no canto superior direito do editor, ou enviando a mensagem `Publish my app` no chat do Lovable.
3. **Publicação Contínua 100% Automatizada a Cada Push (CI/CD)**:
   - Para obter deploy de produção com URL pública 100% autônomo e sem cliques a cada commit no GitHub, conectar o repositório (`origin/main`) a um provedor Git-based (Cloudflare Pages, Vercel ou Netlify). O projeto já compila o worker Nitro Cloudflare e os assets estáticos via `bun run build`.


