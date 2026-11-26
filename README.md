# ENADE Comp Master — Plataforma de Estudos para Engenharia da Computação

Aplicação web completa e 100% client-side para preparação intensiva para o **ENADE de Engenharia da Computação**, baseada nas provas oficiais de **2017, 2019 e 2023** + **2 simulados inéditos completos** no formato atual (2023+).

## O que está incluído

- **184 questões objetivas comentadas passo a passo** (com análise individual das alternativas A–E e conceito-chave):
  - 35 questões oficiais do ENADE 2017
  - 35 questões oficiais do ENADE 2019 (com tratamento oficial da Q01 anulada pelo INEP)
  - 38 questões oficiais do ENADE 2023 (novo formato: 9 FG + 29 CE)
  - 76 questões inéditas (Simulado Inédito #1 e Simulado Inédito #2 no padrão INEP)
- **18 questões discursivas** (12 oficiais com Padrão de Resposta INEP + 6 inéditas) com simulador de folha de **15 linhas**, modo código C e rubrica interativa de autoavaliação (0 a 10).
- **64 figuras originais** recortadas dos cadernos de prova (circuitos, gráficos, mapas de memória, árvores AVL, diagramas relacionais e grafos) com zoom em tela cheia.
- **15 módulos teóricos profundos** (90 seções) cobrindo toda a matriz de Engenharia da Computação + Formação Geral.
- **121 Flashcards SM-2** (revisão espaçada) e **52 fórmulas/cheat sheets** em KaTeX.
- **Sessões de Estudo com Timer Global:** 5 sessões pré-definidas (Pomodoro 25/5, Bloco Profundo 50/10, Sprint 15/3, Treino Discursivo 45/10 e Maratona 90/15) + modo personalizado, pílula flutuante persistente que acompanha toda a navegação do site, alerta sonoro opcional e histórico integrado à meta diária.
- **Raio-X histórico**, **Caderno de Erros automático**, **Plano de Estudos adaptativo**, **Modo Escuro** e **Backup/Restauração do progresso em JSON** (`localStorage`).

## Como rodar localmente

```bash
npm install
npm run dev
```

No Windows PowerShell (caso a execução de scripts `.ps1` esteja bloqueada):

```powershell
npm.cmd install
npm.cmd run dev
```

## Deploy automático no GitHub Pages (acesse de qualquer lugar)

Este repositório já inclui o workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) e configuração de caminhos relativos (`base: './'`) para funcionar diretamente no GitHub Pages:

1. No repositório do GitHub, acesse **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. A cada push na branch `main`, o site é compilado e publicado automaticamente em `https://<seu-usuario>.github.io/<nome-do-repo>/`.
