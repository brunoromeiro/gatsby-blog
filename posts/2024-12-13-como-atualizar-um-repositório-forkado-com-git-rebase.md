---
title: Como atualizar um repositório 'forkado' com git rebase
description: Sempre quando estamos contribuindo para um projeto precisamos
  atualizar nosso fork com as ultimas atualizações da branch mãe, e é isso que
  aprenderemos neste artigo.
date: 2024-09-02 06:00:00
thumbnail: assets/img/friendly-forks-.webp
category: misc
background: "#7AAB13"
---
Passo 1: adicione o remote (repositório original de onde você fez o fork) e chame-o de "upstream"
> `git remote add upstream https://github.com/repo-base/main.git`

Passo 2: busque todas as branchs do upstream remoto
> `git fetch upstream`

Passo 3: reescreva sua branch main com a branch main do upstream usando o git rebase

> `git rebase upstream/main`

Passo 4: dê o push das suas atualizações para sua branch. É necessário forçar o push com `--force` ou `-f`
> `git push -f`