import type { StudyModule } from '../types/enade';

export const STUDY_MODULES_PART_3: StudyModule[] = [
  // =========================================================================
  // MÓDULO 11: INTELIGÊNCIA ARTIFICIAL E CIÊNCIA DE DADOS
  // =========================================================================
  {
    id: 'ia-dados',
    title: 'Inteligência Artificial e Ciência de Dados',
    subtitle: 'Buscas Cegas e Heurísticas (A*), Jogos, Lógica, Machine Learning, Redes Neurais e Métricas',
    estimatedMinutes: 75,
    overview:
      'Este módulo consolida os dois grandes pilares da Inteligência Artificial cobrados em Engenharia da Computação: a **IA Simbólica/Clássica** (busca em espaços de estados, heurísticas admissíveis e consistentes no algoritmo $A^*$, jogos competitivos com Minimax/Alfa-Beta e representação lógica) e a **IA Estatística / Ciência de Dados** (paradigmas de Aprendizado de Máquina, redes neurais com backpropagation, viés-variância, regularização e avaliação rigorosa de modelos via matriz de confusão).',
    enadeWeightNote:
      'No ENADE de Engenharia da Computação, IA aparece em **1 a 3 questões objetivas** por edição (e eventualmente em discursivas interdisciplinares), com altíssimo nível de rigor conceitual. O INEP não cobra memorização de bibliotecas Python, mas sim **propriedades matemáticas** — o clássico absoluto é o comportamento do algoritmo $A^*$ diante de combinações de heurísticas como $h_3 = \\max(h_1, h_2)$ vs $h_1 + h_2$ (ENADE 2017 Q24), além de overfitting/regularização e interpretação de precisão/revocação em bases desbalanceadas.',
    sections: [
      {
        id: 'ia-buscas-cegas',
        title: '1. Agentes Inteligentes e Buscas Cegas (Não-Informadas)',
        content: `### Formulação de Problemas como Busca em Espaço de Estados
Um agente solucionador de problemas modela o ambiente por meio de **cinco componentes formais**:
1. **Estado inicial ($s_0$)**: ponto de partida do agente.
2. **Ações ($A(s)$)**: conjunto de operadores aplicáveis ao estado $s$.
3. **Modelo de transição ($T(s, a) \\to s'$)**: estado resultante ao executar a ação $a$ em $s$.
4. **Teste de objetivo**: verifica se o estado atual é uma meta.
5. **Função de custo de caminho ($g(n)$)**: soma dos custos de passo $c(s, a, s') \\ge 0$ da origem até o nó $n$.

O desempenho de qualquer algoritmo de busca é avaliado segundo quatro critérios clássicos:
- **Completude**: garante encontrar uma solução se existir alguma?
- **Otimalidade**: garante encontrar a solução de *menor custo*?
- **Complexidade de Tempo**: número de nós gerados/expandidos (em função do fator de ramificação $b$, profundidade da solução mais rasa $d$ e profundidade máxima $m$).
- **Complexidade de Espaço**: número máximo de nós mantidos simultaneamente na memória.

### Comparativo das Buscas Cegas (Sem Heurística)
Buscas cegas utilizam apenas a estrutura do grafo/árvore e os custos das arestas — **não possuem nenhuma estimativa** de quão próximo um estado está do objetivo.

| Algoritmo | Estrutura da Fronteira | Completo? | Ótimo? | Tempo | Espaço |
| --- | --- | --- | --- | --- | --- |
| **BFS (Largura)** | Fila (FIFO) | Sim (se $b$ finito) | Sim, apenas se custos de passo forem **iguais** | $O(b^d)$ | $O(b^d)$ |
| **DFS (Profundidade)** | Pilha (LIFO) | Não (loops ou ramos infinitos) | **Não** | $O(b^m)$ | $O(b \\cdot m)$ |
| **DLS (Prof. Limitada $l$)** | Pilha com limite $l$ | Não (se $d > l$) | **Não** | $O(b^l)$ | $O(b \\cdot l)$ |
| **IDS / IDDFS (Aprof. Iterativo)** | DFS repetida com $l=0,1,2,\\dots$ | Sim (se $b$ finito) | Sim, se custos de passo forem **iguais** | $O(b^d)$ | $O(b \\cdot d)$ |
| **UCS (Custo Uniforme)** | Fila de Prioridade por $g(n)$ | Sim (se $c(s,a,s') \\ge \\varepsilon > 0$) | **Sim (sempre)** | $O(b^{1+\\lfloor C^* / \\varepsilon \\rfloor})$ | $O(b^{1+\\lfloor C^* / \\varepsilon \\rfloor})$ |

> **Por que o Aprofundamento Iterativo (IDS) é o método cego preferido quando os custos são unitários e o espaço é grande?** Ele combina o melhor dos dois mundos: tem a **completude e otimalidade da BFS** com o **consumo linear de memória $O(bd)$ da DFS**! Embora reexpanda os níveis rasos várias vezes, a grande maioria dos nós está no nível mais profundo $d$, de modo que o custo assintótico permanece $O(b^d)$.

### Exemplo Resolvido: Por que BFS falha e UCS acerta com pesos distintos?
Considere um grafo direcionado com origem $S$, meta $G$ e arestas ponderadas:
- $S \\to G$ (custo $10$)
- $S \\to A$ (custo $2$), $A \\to B$ (custo $2$), $B \\to G$ (custo $3$)

1. **Execução da BFS**: no nível 1, expande os vizinhos diretos de $S$: encontra $G$ em apenas 1 aresta e encerra retornando $S \\to G$ com **custo 10** (subótimo!).
2. **Execução da Busca de Custo Uniforme (UCS)**:
   - Fronteira inicial: $\\{(S, g=0)\\}$. Expande $S \\Rightarrow$ insere $(A, 2)$ e $(G, 10)$.
   - Menor $g(n)$ é $A$ ($g=2$). Expande $A \\Rightarrow$ insere $(B, 4)$. Fronteira: $\\{(B, 4), (G, 10)\\}$.
   - Menor $g(n)$ é $B$ ($g=4$). Expande $B \\Rightarrow$ insere $(G, 7)$. Fronteira: $\\{(G, 7), (G, 10)\\}$.
   - Menor $g(n)$ é $(G, 7)$. **Só agora $G$ é removido da fila para expansão** e passa no teste de objetivo!
   - **Resultado ótimo**: $S \\to A \\to B \\to G$ com **custo 7**.

Note o detalhe crucial na UCS (e no $A^*$): o teste de objetivo deve ser feito quando o nó é **selecionado para expansão** (retirado da fila de prioridade), e **nunca** no momento em que é gerado!`,
        keyFormulas: [
          {
            label: 'Complexidade BFS vs IDS (Custos Unitários)',
            latex: 'T_{\\text{BFS}} = O(b^d),\\; S_{\\text{BFS}} = O(b^d) \\quad \\text{vs} \\quad T_{\\text{IDS}} = O(b^d),\\; S_{\\text{IDS}} = O(bd)',
            note: 'IDS preserva otimalidade (pesos iguais) reduzindo memória de exponencial para linear.',
          },
          {
            label: 'Critério da Busca de Custo Uniforme (UCS)',
            latex: 'f(n) = g(n), \\qquad c(s, a, s\') \\ge \\varepsilon > 0',
            note: 'Equivalente ao algoritmo de Dijkstra em grafos com custos estritamente positivos.',
          },
        ],
      },
      {
        id: 'ia-busca-heuristica',
        title: '2. Buscas Informadas (Gulosa e A*), Admissibilidade e Consistência',
        content: `### Função de Avaliação $f(n)$ e Família de Buscas Best-First
Buscas informadas empregam uma **função heurística $h(n)$**, que estima o custo do caminho mais barato do estado $n$ até o objetivo (com $h(\\text{meta}) = 0$). A função de prioridade $f(n)$ define o comportamento do algoritmo:

| Algoritmo | Função $f(n)$ | Completo? | Ótimo? | Característica Central |
| --- | --- | --- | --- | --- |
| **Busca de Custo Uniforme (UCS)** | $f(n) = g(n)$ ($h=0$) | Sim | Sim | Ignora direção da meta; expande em "ondas" circulares |
| **Busca Gulosa (Greedy Best-First)** | $f(n) = h(n)$ | Não (em árvore) | **Não** | Vai "cegamente" ao nó que parece mais perto; pode cair em becos |
| **Algoritmo $A^*$** | $f(n) = g(n) + h(n)$ | Sim | **Sim** (sob condições de $h$) | Equilibra custo já gasto $g(n)$ + estimativa restante $h(n)$ |

### Admissibilidade e Consistência (Monotonicidade)
Seja $h^*(n)$ o **custo real ótimo** do nó $n$ até a meta mais próxima:

1. **Heurística Admissível**: nunca superestima o custo real até o objetivo (é *otimista*):
$$0 \\le h(n) \\le h^*(n) \\quad \\forall n$$
   - **Garantia**: se $h$ é admissível, o algoritmo $A^*$ em **busca em árvore** é garantidamente **ótimo**.
   - **Exemplo**: distância em linha reta (euclidiana) entre cidades em um mapa rodoviário é sempre admissível, pois nenhuma estrada pode ser mais curta que uma reta.

2. **Heurística Consistente (Monotônica)**: satisfaz a **desigualdade triangular** para toda transição $n \\xrightarrow{a} n'$ com custo $c(n, a, n')$:
$$h(n) \\le c(n, a, n') + h(n') \\quad \\text{e} \\quad h(\\text{meta}) = 0$$
   - **Consequência direta**: os valores de $f(n)$ são **não-decrescentes** ao longo de qualquer caminho: $f(n') = g(n') + h(n') = g(n) + c(n,a,n') + h(n') \\ge g(n) + h(n) = f(n)$.
   - **Garantia**: toda heurística consistente é automaticamente **admissível** (mas existem heurísticas admissíveis que não são consistentes!). Com $h$ consistente, o $A^*$ em **busca em grafo** (com conjunto fechado de nós explorados) é **ótimo** sem nunca precisar reexpandir um nó já fechado.

### Combinação e Dominância de Heurísticas (ALVO DIRETO DO ENADE 2017 Q24!)
Dizemos que uma heurística admissível $h_2$ **domina** $h_1$ se $h_2(n) \\ge h_1(n)$ para todo $n$ (com desigualdade estrita em algum estado). Quanto **maior** for uma heurística *sem perder a admissibilidade*, mais informada ela é e **menos nós** o $A^*$ precisará expandir!

Suponha que $h_1(n)$ e $h_2(n)$ sejam ambas heurísticas **admissíveis** ($h_1(n) \\le h^*(n)$ e $h_2(n) \\le h^*(n)$). O que ocorre ao combiná-las?

- **$h_3(n) = \\max(h_1(n), h_2(n))$**: é **SEMPRE admissível** (pois se ambos são $\\le h^*(n)$, o máximo entre eles também é $\\le h^*(n)$) e **domina** tanto $h_1$ quanto $h_2$! Se ambas forem consistentes, $\\max(h_1, h_2)$ também é consistente. É a **melhor combinação possível**.
- **$h_4(n) = h_1(n) + h_2(n)$**: **NÃO garante admissibilidade!** Pode facilmente superar $h^*(n)$, fazendo o $A^*$ perder a garantia de otimalidade!
  - *Contraexemplo no Quebra-Cabeça de 8 peças*: seja $h_1$ = peças fora do lugar e $h_2$ = soma das distâncias de Manhattan. Se falta apenas **1 movimento** para resolver ($h^*(n) = 1$), então $h_1(n) = 1$ e $h_2(n) = 1$, logo $h_1 + h_2 = 2 > 1 = h^*(n)$ (**inadmissível!**).
- **$h_5(n) = \\alpha h_1(n) + (1-\\alpha)h_2(n)$ com $0 \\le \\alpha \\le 1$ (média ponderada)**: permanece admissível, porém é **menos informada** (dominada) do que $\\max(h_1, h_2)$.

### Exemplo Resolvido Passo a Passo do Algoritmo $A^*$
Encontre o menor caminho de $S$ até $G$ no grafo:
- Arestas: $S\\to A(1)$, $S\\to B(4)$, $A\\to B(2)$, $A\\to C(5)$, $A\\to G(12)$, $B\\to C(2)$, $C\\to G(3)$.
- Heurísticas: $h(S)=7$, $h(A)=6$, $h(B)=4$, $h(C)=2$, $h(G)=0$ (verifique: é admissível e consistente!).

| Iteração | Nó Expandido | $g(n)$ | $h(n)$ | $f(n)=g+h$ | Fronteira Atualizada (ordenada por $f$) |
| --- | --- | --- | --- | --- | --- |
| 1 | $S$ | 0 | 7 | 7 | $(A, f=1+6=7),\\; (B, f=4+4=8)$ |
| 2 | $A$ | 1 | 6 | 7 | $(B\\text{ via }A, f=3+4=7),\\; (C\\text{ via }A, f=6+2=8),\\; (G\\text{ via }A, f=13+0=13)$ |
| 3 | $B$ (via $A$) | 3 | 4 | 7 | $(C\\text{ via }B, f=5+2=7),\\; (C\\text{ via }A, f=8),\\; (G\\text{ via }A, f=13)$ |
| 4 | $C$ (via $B$) | 5 | 2 | 7 | $(G\\text{ via }C, f=8+0=8),\\; (G\\text{ via }A, f=13)$ |
| 5 | **$G$ (via $C$)** | **8** | **0** | **8** | **META ALCANÇADA!** Caminho ótimo: $S \\to A \\to B \\to C \\to G$ (custo 8) |

Observe como na iteração 2 o caminho $S \\to A \\to G$ ($f=13$) já estava na fronteira, mas o $A^*$ **não parou** nele porque havia nós com $f(n) = 7 < 13$, descobrindo o caminho ótimo de custo 8!`,
        keyFormulas: [
          {
            label: 'Função de Avaliação A*',
            latex: 'f(n) = g(n) + h(n)',
            note: 'Se h(n)=0 vira UCS; se g(n)=0 vira Busca Gulosa.',
          },
          {
            label: 'Admissibilidade vs Consistência',
            latex: '0 \\le h(n) \\le h^*(n) \\quad (\\text{Admissível}), \\qquad h(n) \\le c(n,a,n\') + h(n\') \\quad (\\text{Consistente})',
            note: 'Consistente implica Admissível, mas nem toda Admissível é Consistente.',
          },
          {
            label: 'Combinação Ótima de Heurísticas Admissíveis',
            latex: 'h_3(n) = \\max\\bigl(h_1(n), h_2(n)\\bigr) \\le h^*(n)',
            note: 'Domina h₁ e h₂ preservando a admissibilidade (ENADE 2017 Q24!).',
          },
        ],
        codeExample: {
          language: 'python',
          title: 'Algoritmo A* em Grafo com Fila de Prioridade (heapq)',
          code: `import heapq

def a_star(grafo, inicio, meta, h):
    # Fila de prioridade armazena tuplas (f, g, no, caminho)
    fronteira = [(h[inicio], 0, inicio, [inicio])]
    melhor_g = {inicio: 0}
    fechados = set()

    while fronteira:
        f, g, atual, caminho = heapq.heappop(fronteira)
        if atual in fechados:
            continue
        # Teste de objetivo ocorre SOMENTE na expansao!
        if atual == meta:
            return caminho, g

        fechados.add(atual)
        for vizinho, custo_aresta in grafo[atual]:
            novo_g = g + custo_aresta
            if vizinho not in fechados and novo_g < melhor_g.get(vizinho, float('inf')):
                melhor_g[vizinho] = novo_g
                novo_f = novo_g + h[vizinho]
                heapq.heappush(fronteira, (novo_f, novo_g, vizinho, caminho + [vizinho]))

    return None, float('inf')`,
        },
      },
      {
        id: 'ia-jogos-logica',
        title: '3. Busca Competitiva (Minimax / Poda Alfa-Beta) e Lógica para IA',
        content: `### Jogos Determinísticos de Soma Zero: Minimax
Em jogos adversariais com informação perfeita (xadrez, jogo da velha, damas), dois agentes competem com objetivos opostos:
- **MAX** tenta **maximizar** o valor da função de utilidade.
- **MIN** tenta **minimizar** esse mesmo valor (assumindo que o oponente joga de forma ótima!).

O algoritmo **Minimax** realiza uma busca em profundidade até os estados terminais (ou profundidade limite com função de avaliação heurística) e propaga os valores de baixo para cima: nós MAX escolhem o maior filho e nós MIN escolhem o menor filho. Sua complexidade é $O(b^m)$ em tempo e $O(bm)$ em espaço.

### Poda Alfa-Beta ($\\alpha$-$\\beta$)
A Poda Alfa-Beta retorna **exatamente a mesma jogada ótima** do Minimax, porém descarta ramos que comprovadamente não podem influenciar a decisão final, mantendo dois limites ao longo do caminho até a raiz:
- **$\\alpha$**: o maior valor (melhor alternativa) já garantido para **MAX** até o momento (inicia em $-\\infty$). Atualizado apenas em nós MAX.
- **$\\beta$**: o menor valor (melhor alternativa) já garantido para **MIN** até o momento (inicia em $+\\infty$). Atualizado apenas em nós MIN.
- **Regra de Poda (Corte)**: sempre que $\\alpha \\ge \\beta$ (equivalente a $\\beta \\le \\alpha$), interrompe-se a exploração dos filhos restantes daquele nó!

Com a **melhor ordenação de jogadas**, a complexidade de tempo cai de $O(b^m)$ para **$O(b^{m/2})$**, permitindo explorar o **dobro da profundidade** no mesmo tempo!

#### Exemplo Numérico Resolvido de Poda Alfa-Beta
Considere a raiz **MAX** com três filhos **MIN** ($B$, $C$, $D$), cujas folhas são:
- $B$: $[3, 12, 8]$
- $C$: $[2, 4, 6]$
- $D$: $[14, 5, 2]$

1. **Nó $B$ (MIN)**: recebe $\\alpha=-\\infty, \\beta=+\\infty$. Avalia $3 \\to \\beta=3$; avalia $12$ (mantém $3$); avalia $8$ (mantém $3$). Retorna **$3$** para a raiz MAX.
2. **Raiz MAX**: atualiza $\\alpha = \\max(-\\infty, 3) = 3$.
3. **Nó $C$ (MIN)**: recebe $\\alpha=3, \\beta=+\\infty$. Avalia o primeiro filho **$2$** $\\Rightarrow \\beta = \\min(+\\infty, 2) = 2$. Agora **$\\alpha = 3 \\ge \\beta = 2$**! **PODA ALFA!** Os nós $4$ e $6$ **não são visitados**, pois MIN garantirá no máximo $2$ neste ramo e MAX já tem $3$ garantido em $B$. Retorna $2$.
4. **Nó $D$ (MIN)**: recebe $\\alpha=3, \\beta=+\\infty$. Avalia $14 \\to \\beta=14$ ($3 < 14$, segue); avalia $5 \\to \\beta=5$ ($3 < 5$, segue); avalia $2 \\to \\beta=2$. Retorna $2$.
5. **Decisão final de MAX**: escolhe o ramo $B$ com utilidade **$3$** (poupando a avaliação das folhas $4$ e $6$!).

### Representação do Conhecimento: Lógica Proposicional e de Primeira Ordem
| Conceito | Lógica Proposicional | Lógica de Primeira Ordem (LPO) |
| --- | --- | --- |
| **Átomos** | Proposições indivisíveis ($P, Q$) | Predicados sobre objetos: $\\text{Pai}(x, y)$, $\\text{Primo}(7)$ |
| **Conectivos** | $\\neg, \\land, \\lor, \\to, \\leftrightarrow$ | Os mesmos + quantificadores $\\forall$ (para todo) e $\\exists$ (existe) |
| **Poder Expressivo** | Limitado (não generaliza sobre conjuntos) | Alto (expressa relações, funções e propriedades gerais) |
| **Decidibilidade** | Decidível (tabelas-verdade, SAT) | Semidecidível (inferência via Unificação + Resolução) |

**Equivalências e Regras de Ouro para Provas**:
- Eliminação da implicação: $P \\to Q \\equiv \\neg P \\lor Q$.
- Contrapositiva (equivalente!): $P \\to Q \\equiv \\neg Q \\to \\neg P$. (Atenção: a recíproca $Q \\to P$ e a inversa $\\neg P \\to \\neg Q$ **NÃO** são equivalentes a $P \\to Q$!)
- Leis de De Morgan: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$ e $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$.
- **Modus Ponens**: de $P$ e $P \\to Q$, infere-se $Q$. **Modus Tollens**: de $\\neg Q$ e $P \\to Q$, infere-se $\\neg P$.
- **Regra da Resolução**: de $(A \\lor B)$ e $(\\neg B \\lor C)$, infere-se $(A \\lor C)$. Para provar que $KB \\models \\alpha$ por refutação, converte-se $KB \\land \\neg\\alpha$ para Forma Normal Conjuntiva (FNC) e deriva-se a cláusula vazia ($\\square$).
- **Quantificadores em LPO**:
  - $\\forall x\\, (\\text{Engenheiro}(x) \\to \\text{EstudaCalculo}(x))$ — o quantificador universal $\\forall$ quase sempre usa **implicação ($\\to$)**! Usar $\\land$ diria que *tudo no universo* é engenheiro!
  - $\\exists x\\, (\\text{Aluno}(x) \\land \\text{NotaDez}(x))$ — o quantificador existencial $\\exists$ quase sempre usa **conjunção ($\\land$)**!
  - Negação: $\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$ e $\\neg(\\exists x\\, P(x)) \\equiv \\forall x\\, \\neg P(x)$.`,
        keyFormulas: [
          {
            label: 'Complexidade Minimax vs Alfa-Beta Ótima',
            latex: 'T_{\\text{Minimax}} = O(b^m) \\quad \\longrightarrow \\quad T_{\\alpha\\text{-}\\beta,\\,\\text{ótimo}} = O\\bigl(b^{m/2}\\bigr)',
            note: 'A poda Alfa-Beta nunca altera a jogada ótima, apenas elimina subárvores irrelevantes.',
          },
          {
            label: 'Equivalências Lógicas e Quantificadores',
            latex: '(P \\to Q) \\equiv (\\neg P \\lor Q) \\equiv (\\neg Q \\to \\neg P), \\qquad \\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)',
            note: 'Base para conversão em Forma Normal Conjuntiva (FNC) e inferência por Resolução.',
          },
        ],
      },
      {
        id: 'ia-paradigmas-ml',
        title: '4. Aprendizado de Máquina: Supervisionado, Não Supervisionado e por Reforço',
        content: `### Os Três Grandes Paradigmas de Aprendizado de Máquina
| Paradigma | Dados de Entrada | Objetivo | Algoritmos Clássicos | Aplicações Típicas |
| --- | --- | --- | --- | --- |
| **Supervisionado** | Pares rotulados $(\\mathbf{x}_i, y_i)$ | Aprender mapeamento $f: X \\to Y$ | Regressão Linear/Logística, Árvores de Decisão, Random Forest, k-NN, Naive Bayes, SVM, Redes Neurais | Detecção de spam/fraude (Classificação), previsão de preço/demanda (Regressão) |
| **Não Supervisionado** | Apenas entradas $\\mathbf{x}_i$ (sem rótulos $y$) | Descobrir estrutura latente, grupos ou compressão | $k$-Means, DBSCAN, Agrupamento Hierárquico, PCA, Apriori (regras de associação) | Segmentação de clientes, detecção de anomalias, redução de dimensionalidade |
| **Por Reforço (RL)** | Interação sequencial (Estados, Ações, Recompensas) | Aprender política $\\pi^*(s)$ que maximiza recompensa acumulada | Q-Learning, SARSA, Deep Q-Network (DQN), Policy Gradients | Robótica autônoma, controle ótimo, jogos (AlphaGo), roteamento adaptativo |

### Algoritmos Supervisionados Essenciais
1. **Árvores de Decisão (ID3, C4.5, CART)**: particionam o espaço recursivamente escolhendo o atributo que maximiza a pureza dos nós filhos, medida por **Ganho de Informação** (baseado na Entropia de Shannon) ou **Índice de Gini**:
$$H(S) = -\\sum_{c=1}^{C} p_c \\log_2(p_c), \\qquad \\text{Gini}(S) = 1 - \\sum_{c=1}^{C} p_c^2$$
   - *Exemplo numérico*: um nó com 5 exemplos Positivos e 5 Negativos ($p_+=0{,}5, p_-=0{,}5$) tem impureza máxima: $H(S) = -(0{,}5\\log_2 0{,}5 + 0{,}5\\log_2 0{,}5) = 1{,}0\\text{ bit}$ e $\\text{Gini}(S) = 1 - (0{,}25 + 0{,}25) = 0{,}5$. Se um atributo separa perfeitamente em dois filhos puros (5 Pos / 0 Neg e 0 Pos / 5 Neg), a entropia condicional cai para $0$ e o **Ganho de Informação** é $1{,}0 - 0 = 1{,}0\\text{ bit}$!
2. **Ensembles (Comitês)**:
   - **Bagging (ex.: Random Forest)**: treina árvores independentes em amostras *bootstrap* com subconjuntos aleatórios de atributos e agrega por votação/média $\\to$ **reduz variância** (combate overfitting!).
   - **Boosting (ex.: AdaBoost, Gradient Boosting, XGBoost)**: treina modelos fracos **sequencialmente**, cada modelo focando nos erros do anterior $\\to$ **reduz viés**!
3. **$k$-NN ($k$-Vizinhos Mais Próximos)**: aprendizado preguiçoso (*lazy learning* — não há treino explícito, custo fica na predição). Classifica um novo ponto pela maioria dos $k$ vizinhos mais próximos (distância Euclidiana ou Manhattan). **Regra vital**: sempre **normalize/padronize os atributos** antes do $k$-NN, caso contrário atributos em escalas maiores (ex.: salário em milhares vs idade) dominam a distância!
4. **Naive Bayes**: aplica o Teorema de Bayes assumindo **independência condicional** entre os atributos dada a classe (daí o termo *"ingênuo"*). Rápido e surpreendentemente eficaz em classificação de texto/spam.
5. **SVM (Máquinas de Vetores de Suporte)**: encontra o hiperplano separador que **maximiza a margem** entre as classes; apenas os pontos na fronteira (*vetores de suporte*) definem o hiperplano. Para dados não linearmente separáveis, usa o **Truque de Kernel** (RBF, polinomial) para projetar implicitamente em dimensões superiores.

### Não Supervisionado e Aprendizado por Reforço
- **$k$-Means**: fixa previamente o número $k$ de clusters, inicializa $k$ centróides e alterna entre (a) atribuir cada ponto ao centróide mais próximo e (b) recalcular cada centróide como a média dos pontos do cluster. *Limitações*: exige informar $k$ (escolhido via método do cotovelo ou silhueta), assume clusters esféricos e é sensível a outliers e à inicialização.
- **DBSCAN**: agrupa por **densidade** ($\\varepsilon$ e $\\text{MinPts}$); não exige informar $k$, encontra clusters de formato arbitrário e identifica ruído/outliers automaticamente.
- **PCA (Análise de Componentes Principais)**: projeção linear ortogonal que encontra novas direções (autovetores da matriz de covariância associados aos maiores autovalores) que **maximizam a variância retida** nos dados.
- **Q-Learning (Reforço)**: modela o ambiente como um Processo de Decisão de Markov (MDP) e atualiza a tabela de qualidade ação-estado $Q(s, a)$ via diferença temporal, equilibrando **Exploração** (testar novas ações, ex.: $\\varepsilon$-greedy) e **Explotação** (escolher a melhor ação conhecida):
$$Q(s, a) \\leftarrow Q(s, a) + \\alpha \\Bigl[ r + \\gamma \\max_{a'} Q(s', a') - Q(s, a) \\Bigr]$$
onde $\\alpha \\in (0,1]$ é a taxa de aprendizado e $\\gamma \\in [0,1)$ é o fator de desconto para recompensas futuras.`,
        keyFormulas: [
          {
            label: 'Entropia de Shannon e Ganho de Informação',
            latex: 'H(S) = -\\sum_{c} p_c \\log_2 p_c, \\qquad IG(S, A) = H(S) - \\sum_{v \\in \\text{Val}(A)} \\frac{\\lvert S_v \\rvert}{\\lvert S \\rvert} H(S_v)',
            note: 'Quanto menor a entropia dos filhos, maior a pureza e o ganho de informação.',
          },
          {
            label: 'Atualização Q-Learning (Aprendizado por Reforço)',
            latex: 'Q(s,a) \\leftarrow Q(s,a) + \\alpha\\bigl[r + \\gamma \\max_{a\'} Q(s\',a\') - Q(s,a)\\bigr]',
            note: 'Algoritmo off-policy livre de modelo; γ próximo de 1 valoriza recompensas de longo prazo.',
          },
        ],
      },
      {
        id: 'ia-redes-neurais',
        title: '5. Redes Neurais Artificiais, Backpropagation e Deep Learning',
        content: `### Do Perceptron Simples ao MLP (Perceptron Multicamadas)
Um neurônio artificial calcula uma combinação linear das entradas somada a um viés (*bias*) e aplica uma **função de ativação não-linear $\\varphi$**:
$$z = \\sum_{i=1}^{d} w_i x_i + b = \\mathbf{w}^T \\mathbf{x} + b, \\qquad \\hat{y} = \\varphi(z)$$

- **Limitação histórica do Perceptron de camada única**: só consegue classificar problemas **linearmente separáveis** (como portas lógicas AND e OR). Ele **NÃO consegue aprender a função XOR**, pois não existe uma única reta capaz de separar $\\{(0,0), (1,1)\\}$ de $\\{(0,1), (1,0)\\}$.
- **Solução — MLP (Multi-Layer Perceptron)**: adicionar pelo menos **uma camada oculta com ativação não-linear** permite compor múltiplos hiperplanos (Teorema da Aproximação Universal). Sem ativação não-linear, empilhar 10 camadas lineares colapsa matematicamente em uma única transformação linear!

### Funções de Ativação Clássicas
| Função | Expressão $\\varphi(z)$ | Faixa de Saída | Uso Principal e Cuidados |
| --- | --- | --- | --- |
| **Sigmoide (Logística)** | $\\frac{1}{1 + e^{-z}}$ | $(0, 1)$ | Saída de classificação binária. Sofre com **gradiente desvanecente** (*vanishing gradient*) nas camadas ocultas ($\\varphi'(z) \\le 0{,}25$). |
| **Tanh** | $\\frac{e^z - e^{-z}}{e^z + e^{-z}}$ | $(-1, 1)$ | Centrada em zero (melhor que sigmoide), mas também satura em $\\lvert z \\rvert$ grande. |
| **ReLU** | $\\max(0, z)$ | $[0, +\\infty)$ | Padrão em camadas ocultas profundas: derivada $1$ para $z>0$ evita desaparecimento do gradiente. Risco de *dying ReLU* ($z<0 \\Rightarrow$ gradiente $0$). |
| **Softmax** | $\\frac{e^{z_k}}{\\sum_j e^{z_j}}$ | $(0,1)$, soma $= 1$ | Camada de saída em **classificação multiclasse** (gera distribuição de probabilidades). |

### Treinamento: Função de Custo, Backpropagation e Gradiente Descendente
O treinamento ajusta os pesos $\\mathbf{w}$ para minimizar uma **função de perda (loss)** $L(\\mathbf{w})$ — tipicamente **MSE** (Erro Quadrático Médio) em regressão e **Entropia Cruzada** (*Cross-Entropy*) em classificação:
1. **Forward Pass (Propagação Direta)**: entradas atravessam a rede gerando a predição $\\hat{y}$ e o erro $L$.
2. **Backward Pass (Backpropagation)**: aplica sistematicamente a **Regra da Cadeia** do cálculo multivariável da saída para a entrada para calcular $\\frac{\\partial L}{\\partial w_{ij}}$ de cada peso.
3. **Atualização de Pesos (Gradiente Descendente)**: dá um passo na direção oposta ao gradiente com taxa de aprendizado $\\eta > 0$:
$$w_{\\text{novo}} = w_{\\text{atual}} - \\eta \\frac{\\partial L}{\\partial w}$$
   - **Variantes**: *Batch GD* (dataset inteiro por passo — estável, lento), *SGD* (1 exemplo por passo — ruidoso, rápido), *Mini-Batch SGD* (compromisso padrão), *Momentum* e *Adam* (taxa adaptativa por parâmetro).
   - Se $\\eta$ for **pequeno demais**, a convergência é lentíssima; se $\\eta$ for **grande demais**, o algoritmo oscila ou **diverge**!

#### Exemplo Numérico Passo a Passo de 1 Atualização de Peso
Considere um neurônio linear $\\hat{y} = w \\cdot x$ com peso inicial $w = 0{,}5$, taxa $\\eta = 0{,}1$, função de perda $L = \\frac{1}{2}(\\hat{y} - y)^2$ e exemplo de treino $(x = 2,\\; y = 3)$:
1. **Forward**: $\\hat{y} = 0{,}5 \\times 2 = 1{,}0$. Erro $L = \\frac{1}{2}(1{,}0 - 3)^2 = 2{,}0$.
2. **Backpropagation (Regra da Cadeia)**:
$$\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial w} = (\\hat{y} - y) \\cdot x = (1{,}0 - 3) \\cdot 2 = -4{,}0$$
3. **Atualização**: $w_{\\text{novo}} = 0{,}5 - 0{,}1 \\times (-4{,}0) = 0{,}5 + 0{,}4 = 0{,}9$.
4. **Verificação**: nova saída $\\hat{y}_{\\text{novo}} = 0{,}9 \\times 2 = 1{,}8$ (muito mais próxima de $3$, com perda reduzida de $2{,}0$ para $0{,}72$!).

### Panorama de Arquiteturas de Deep Learning
- **CNNs (Redes Convolucionais)**: filtros convolucionais com compartilhamento de pesos + pooling $\\to$ invariância espacial, padrão em **visão computacional e imagens**.
- **RNNs / LSTMs**: conexões recorrentes com estado oculto $\\to$ **sequências e séries temporais** (LSTM resolve o desvanecimento temporal com portas de esquecimento/entrada/saída).
- **Transformers**: eliminam recorrência usando **Self-Attention (Autoatenção)** paralelizada $\\to$ estado da arte em **Processamento de Linguagem Natural (LLMs)** e multimodalidade.`,
        keyFormulas: [
          {
            label: 'Neurônio Artificial e ReLU',
            latex: 'z = \\mathbf{w}^T\\mathbf{x} + b, \\qquad \\text{ReLU}(z) = \\max(0, z), \\qquad \\sigma(z) = \\frac{1}{1+e^{-z}}',
          },
          {
            label: 'Gradiente Descendente e Regra da Cadeia (Backprop)',
            latex: 'w_{t+1} = w_t - \\eta \\frac{\\partial L}{\\partial w_t}, \\qquad \\frac{\\partial L}{\\partial w_{ij}} = \\frac{\\partial L}{\\partial a_j} \\cdot \\frac{\\partial a_j}{\\partial z_j} \\cdot \\frac{\\partial z_j}{\\partial w_{ij}}',
            note: 'η (learning rate) controla o tamanho do passo de descida na superfície de erro.',
          },
        ],
      },
      {
        id: 'ia-avaliacao-generalizacao',
        title: '6. Overfitting, Regularização, Validação Cruzada e Matriz de Confusão',
        content: `### Trade-off Viés-Variância: Underfitting vs Overfitting
O objetivo real do Aprendizado de Máquina não é zerar o erro no treino, mas sim **generalizar** bem para dados nunca vistos!

| Diagnóstico | Erro no Treino | Erro na Validação/Teste | Causa Principal | Como Resolver |
| --- | --- | --- | --- | --- |
| **Underfitting (Subajuste)** | **Alto** | **Alto** | **Alto Viés** (modelo simples demais para capturar o padrão) | Aumentar complexidade do modelo, criar melhores atributos, treinar por mais épocas, reduzir regularização |
| **Overfitting (Sobreajuste)** | **Muito Baixo** | **Alto** | **Alta Variância** (modelo "decorou" ruído específico do treino) | Mais dados de treino, **Regularização ($L_1$/$L_2$)**, **Dropout**, **Early Stopping**, **Poda** de árvore, reduzir atributos |

### Regularização e Validação Cruzada
- **Regularização $L_2$ (Ridge / Weight Decay)**: soma $\\lambda \\sum w_j^2$ à função de custo. Penaliza pesos grandes de forma suave, mantendo-os pequenos e reduzindo variância.
- **Regularização $L_1$ (Lasso)**: soma $\\lambda \\sum \\lvert w_j \\rvert$ à função de custo. Induz **esparsidade** (zera exatamente vários pesos), realizando **seleção automática de atributos**!
- **Dropout**: durante cada passo de treino em redes neurais, desliga aleatoriamente uma fração $p$ dos neurônios, impedindo coadaptação excessiva.
- **Divisão Treino / Validação / Teste**:
  - *Treino*: ajusta parâmetros ($\\mathbf{w}$).
  - *Validação*: seleciona hiperparâmetros ($k$, $\\lambda$, taxa $\\eta$, arquitetura).
  - *Teste*: avalia o desempenho final **uma única vez** em dados intocados (usar teste para ajustar hiperparâmetros causa **Data Leakage**!).
- **Validação Cruzada $k$-Fold**: divide o conjunto de desenvolvimento em $k$ partições (comumente $k=5$ ou $10$); em cada rodada, treina em $k-1$ folds e valida no fold restante, reportando a média e o desvio-padrão das $k$ rodadas. Em bases desbalanceadas, usa-se **Stratified $k$-Fold** para manter a proporção das classes em cada partição.

### Matriz de Confusão e Métricas de Classificação
|  | Predito Positivo ($\\hat{y}=1$) | Predito Negativo ($\\hat{y}=0$) |
| --- | --- | --- |
| **Real Positivo ($y=1$)** | **VP** (Verdadeiro Positivo) | **FN** (Falso Negativo — Erro Tipo II) |
| **Real Negativo ($y=0$)** | **FP** (Falso Positivo — Erro Tipo I) | **VN** (Verdadeiro Negativo) |

- **Acurácia**: $\\frac{VP + VN}{VP + VN + FP + FN}$ — fração total de acertos (**perigosa em bases desbalanceadas!**).
- **Precisão (*Precision*)**: $\\frac{VP}{VP + FP}$ — dos que o modelo marcou como positivos, quantos realmente eram? Crítica quando **Falso Positivo custa caro** (ex.: filtro de spam apagando e-mail importante).
- **Revocação (*Recall* / Sensibilidade)**: $\\frac{VP}{VP + FN}$ — dos positivos reais, quantos o modelo conseguiu detectar? Crítica quando **Falso Negativo é fatal** (ex.: diagnóstico de câncer ou detecção de fraude/intrusão).
- **Especificidade**: $\\frac{VN}{VN + FP}$ — taxa de verdadeiros negativos.
- **$F_1$-Score**: média **harmônica** entre Precisão e Revocação ($F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}$). Exige que **ambas** sejam altas (se $P=1$ e $R=0$, a média aritmética seria $0{,}5$, mas $F_1 = 0$!).
- **Curva ROC e AUC**: plota Taxa de Verdadeiros Positivos (Recall) vs Taxa de Falsos Positivos ($1 - \\text{Especificidade}$) para todos os limiares de decisão. $\\text{AUC} = 0{,}5$ equivale a chute aleatório; $\\text{AUC} = 1{,}0$ é o classificador perfeito.

### Exemplo Numérico Resolvido: A Armadilha da Acurácia em Fraudes
Um sistema analisa **1.000 transações**, das quais apenas **10 são fraudes** (Positivas) e **990 são legítimas** (Negativas).
- **Modelo A ("Bobo", prevê sempre Legítima)**: $VP=0, FN=10, FP=0, VN=990$.
  - $\\text{Acurácia} = \\frac{990}{1000} = 99\\%$, porém $\\text{Recall} = \\frac{0}{10} = 0\\%$ e $F_1 = 0$ (inútil!).
- **Modelo B (Classificador real)**: $VP=8, FN=2, FP=12, VN=978$.
  - $\\text{Acurácia} = \\frac{8 + 978}{1000} = 98{,}6\\%$ (menor que o Modelo A!!).
  - $\\text{Precisão} = \\frac{8}{8 + 12} = \\frac{8}{20} = 40\\%$.
  - $\\text{Recall} = \\frac{8}{8 + 2} = \\frac{8}{10} = 80\\%$ (detectou 80% das fraudes!).
  - $F_1 = \\frac{2 \\times 0{,}40 \\times 0{,}80}{0{,}40 + 0{,}80} = \\frac{0{,}64}{1{,}20} \\approx 0{,}533$ ($53{,}3\\%$).`,
        keyFormulas: [
          {
            label: 'Precisão, Revocação (Recall) e F1-Score',
            latex: 'P = \\frac{VP}{VP + FP}, \\qquad R = \\frac{VP}{VP + FN}, \\qquad F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}',
            note: 'Em bases desbalanceadas, priorize Precisão, Recall, F1 e AUC em vez de Acurácia pura.',
          },
          {
            label: 'Funções de Custo Regularizadas (L2 Ridge e L1 Lasso)',
            latex: 'J_{L2}(\\mathbf{w}) = L(\\mathbf{w}) + \\lambda \\sum_{j} w_j^2, \\qquad J_{L1}(\\mathbf{w}) = L(\\mathbf{w}) + \\lambda \\sum_{j} \\lvert w_j \\rvert',
            note: 'L1 gera pesos exatamente nulos (seleção de features); L2 reduz a norma de todos os pesos.',
          },
        ],
        codeExample: {
          language: 'python',
          title: 'Cálculo de Matriz de Confusão e Métricas de Classificação Binária',
          code: `def avaliar_classificador(y_real, y_pred):
    vp = sum(1 for r, p in zip(y_real, y_pred) if r == 1 and p == 1)
    vn = sum(1 for r, p in zip(y_real, y_pred) if r == 0 and p == 0)
    fp = sum(1 for r, p in zip(y_real, y_pred) if r == 0 and p == 1)
    fn = sum(1 for r, p in zip(y_real, y_pred) if r == 1 and p == 0)

    acuracia  = (vp + vn) / len(y_real)
    precisao  = vp / (vp + fp) if (vp + fp) > 0 else 0.0
    revocacao = vp / (vp + fn) if (vp + fn) > 0 else 0.0
    f1        = (2 * precisao * revocacao / (precisao + revocacao)
                 if (precisao + revocacao) > 0 else 0.0)
    return {"VP": vp, "VN": vn, "FP": fp, "FN": fn,
            "Acuracia": round(acuracia, 4), "Precisao": round(precisao, 4),
            "Recall": round(revocacao, 4), "F1": round(f1, 4)}`,
        },
      },
    ],
    inepTraps: [
      'Achar que a soma de duas heurísticas admissíveis ($h_1 + h_2$) continua admissível: FALSO! Ela pode superestimar $h^*(n)$ e quebrar a otimalidade do $A^*$. A combinação que preserva admissibilidade e domina ambas é $h_3 = \\max(h_1, h_2)$ (ENADE 2017 Q24).',
      'Confundir o caso degenerado do $A^*$ quando $h(n) = 0$: com $f(n) = g(n) + 0 = g(n)$, o $A^*$ vira **Busca de Custo Uniforme** (Dijkstra), e NÃO Busca Gulosa (esta usa $f(n) = h(n)$, ignorando $g(n)$).',
      'Acreditar que a Poda Alfa-Beta retorna uma solução aproximada: FALSO! Ela retorna **exatamente o mesmo resultado ótimo** do Minimax puro, apenas evitando expandir ramos irrelevantes.',
      'Julgar um classificador apenas pela **Acurácia** em bases desbalanceadas (ex.: 99% de negativos) ou confundir **Precisão** (denominador $VP+FP$) com **Revocação/Recall** (denominador $VP+FN$).',
      'Aplicar normalização/padronização ou seleção de atributos usando média/desvio de **todo o dataset** antes de separar Treino e Teste — isso causa **Data Leakage** (vazamento de dados) e infla artificialmente as métricas.',
    ],
    quickChecklist: [
      'Sei montar a tabela de completude, otimalidade, tempo e espaço de BFS, DFS, IDS e UCS?',
      'Sei diferenciar admissibilidade ($h(n) \\le h^*(n)$) de consistência ($h(n) \\le c(n,a,n\') + h(n\')$) e provar por que $\\max(h_1, h_2)$ domina $h_1$ e $h_2$?',
      'Consigo executar passo a passo o algoritmo $A^*$ e a Poda Alfa-Beta ($\\alpha \\ge \\beta$) em um grafo/árvore pequena?',
      'Sei negar quantificadores lógicos ($\\neg\\forall x P(x) \\equiv \\exists x \\neg P(x)$) e usar $\\to$ com $\\forall$ e $\\land$ com $\\exists$?',
      'Sei distinguir Supervisionado, Não Supervisionado ($k$-Means, DBSCAN, PCA) e Reforço (Q-Learning)?',
      'Entendo por que um Perceptron simples não resolve XOR e qual o papel da ReLU e do Backpropagation em MLPs?',
      'Sei diagnosticar Overfitting vs Underfitting pelas curvas de treino/validação e diferenciar regularização $L_1$ vs $L_2$?',
      'Sei calcular de cabeça Acurácia, Precisão, Recall e $F_1$-Score a partir de uma Matriz de Confusão?',
    ],
  },

  // =========================================================================
  // MÓDULO 12: CÁLCULO, ÁLGEBRA LINEAR, EDOS E OTIMIZAÇÃO
  // =========================================================================
  {
    id: 'matematica-otimizacao',
    title: 'Cálculo, Álgebra Linear, EDOs e Otimização',
    subtitle: 'Derivadas, Integrais, EDOs (Lei de Newton), Lagrange, Programação Linear, Autovalores e Cálculo Numérico',
    estimatedMinutes: 85,
    overview:
      'A matemática aplicada é a espinha dorsal da modelagem em Engenharia da Computação. Este módulo reúne, de forma integrada e orientada à resolução de problemas reais, Cálculo Diferencial e Integral, Equações Diferenciais Ordinárias, Cálculo Multivariável com Multiplicadores de Lagrange, Pesquisa Operacional (Programação Linear e Problema do Transporte), Álgebra Linear (sistemas, determinantes e autovalores) e Métodos Numéricos computacionais.',
    enadeWeightNote:
      'Disciplina de **PRIORIDADE ALTA** no Componente Específico! O INEP costuma cobrar **3 a 4 questões diretas** por prova contextualizadas em problemas de engenharia — destaques históricos reais incluem a **Lei de Resfriamento de Newton** (ENADE 2017 Q12), **Multiplicadores de Lagrange para minimizar custo de tanque cilíndrico** (ENADE 2017 Q17), **Programação Linear / Problema do Transporte** (ENADE 2017 Q28), além de autovalores, integrais e Newton-Raphson.',
    sections: [
      {
        id: 'mat-calculo-otimizacao-1d',
        title: '1. Limites, Derivadas, Otimização em 1D e Integrais Aplicadas',
        content: `### Limites e Regra de L'Hôpital
Sempre que um limite produzir uma indeterminação do tipo $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$ (com $f, g$ deriváveis na vizinhança de $a$), aplica-se a **Regra de L'Hôpital**:
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$
*(Atenção: deriva-se numerador e denominador **separadamente** — NÃO é a regra do quociente! Para indeterminações $0 \\cdot \\infty$, reescreva como fração; para $1^\\infty$ ou $0^0$, aplique $\\ln$!)*

Limites fundamentais para saber de cor: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$ e $\\lim_{x\\to\\infty}\\left(1 + \\frac{1}{x}\\right)^x = e$.

### Regras de Derivação e Otimização Univariada
| Função $f(x)$ | Derivada $f'(x)$ | Regra Operatória | Fórmula |
| --- | --- | --- | --- |
| $x^n$ | $n x^{n-1}$ | **Produto** | $(u\\cdot v)' = u'v + uv'$ |
| $e^{kx}$ | $k e^{kx}$ | **Quociente** | $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ |
| $\\ln(x)$ | $\\frac{1}{x}$ | **Cadeia** | $\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$ |
| $\\sin(x) \\;/\\; \\cos(x)$ | $\\cos(x) \\;/\\; -\\sin(x)$ | **Inversa** | $(f^{-1})'(y) = \\frac{1}{f'(x)}$ |

**Roteiro Infalível de Otimização 1D**:
1. Encontre os **pontos críticos** resolvendo $f'(x) = 0$ (e verifique onde $f'$ não existe).
2. Aplique o **Teste da 2ª Derivada**:
   - $f''(x_0) > 0 \\implies$ concavidade para cima $\\implies$ **mínimo local**.
   - $f''(x_0) < 0 \\implies$ concavidade para baixo $\\implies$ **máximo local**.
   - $f''(x_0) = 0 \\implies$ teste inconclusivo (analise a troca de sinal de $f'(x)$).
3. Se o domínio for um intervalo fechado $[a, b]$, compare também os valores nos extremos $f(a)$ e $f(b)$!

### Integrais Definidas, Técnicas e Aplicações na Engenharia
Pelo **Teorema Fundamental do Cálculo**, se $F'(x) = f(x)$, então $\\int_a^b f(x)\\,dx = F(b) - F(a)$.
- **Substituição ($u$-sub)**: inversa da regra da cadeia; escolha $u = g(x)$ de modo que $du = g'(x)\\,dx$ apareça no integrando.
- **Integração por Partes**: inversa da regra do produto: $\\int u\\,dv = u\\cdot v - \\int v\\,du$ (dica mnemônica **LIATE** para escolher $u$: Logarítmica, Inversa trig., Algébrica, Trigonométrica, Exponencial).
- **Aplicações diretas**:
  - **Área entre curvas** $f(x) \\ge g(x)$: $A = \\int_a^b [f(x) - g(x)]\\,dx$.
  - **Valor Médio** de um sinal em $[a, b]$: $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.
  - **Valor Eficaz (RMS)** de um sinal periódico $v(t)$: $V_{\\text{RMS}} = \\sqrt{\\frac{1}{T}\\int_0^T [v(t)]^2\\,dt}$.

#### Exemplo Numérico Resolvido (Otimização + Integral)
Deseja-se cercar uma área retangular junto a um muro reto (apenas 3 lados recebem cerca) usando $L = 120\\text{ m}$ de tela. Qual a área máxima?
1. Restrição: $2x + y = 120 \\Rightarrow y = 120 - 2x$.
2. Função objetivo: $A(x) = x \\cdot y = 120x - 2x^2$.
3. Ponto crítico: $A'(x) = 120 - 4x = 0 \\Rightarrow x = 30\\text{ m}$ e $y = 60\\text{ m}$.
4. Verificação: $A''(30) = -4 < 0$ (**máximo global!**). Área máxima $= 30 \\times 60 = 1.800\\text{ m}^2$.`,
        keyFormulas: [
          {
            label: 'Integração por Partes e Valor Médio',
            latex: '\\int u\\,dv = uv - \\int v\\,du, \\qquad \\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx',
            note: 'A regra de partes é indispensável para integrais como ∫ x·e^x dx e Transformada de Laplace.',
          },
          {
            label: 'Critério de Otimização 1D',
            latex: 'f\'(x_0) = 0 \\;\\land\\; f\'\'(x_0) > 0 \\implies \\text{Mínimo Local}; \\qquad f\'\'(x_0) < 0 \\implies \\text{Máximo Local}',
          },
        ],
      },
      {
        id: 'mat-edos',
        title: '2. Equações Diferenciais Ordinárias (1ª e 2ª Ordem) e Lei de Resfriamento de Newton',
        content: `### EDOs de 1ª Ordem: Separáveis e Lineares
1. **Variáveis Separáveis**: $\\frac{dy}{dx} = g(x)h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x)\\,dx + C$.
2. **EDO Linear de 1ª Ordem**: $\\frac{dy}{dx} + P(x)y = Q(x)$. Resolve-se multiplicando toda a equação pelo **Fator Integrante** $\\mu(x) = e^{\\int P(x)\\,dx}$, o que transforma o lado esquerdo em $\\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x)$:
$$y(x) = \\frac{1}{\\mu(x)}\\left(\\int \\mu(x)Q(x)\\,dx + C\\right)$$

### FOCO ENADE (2017 Q12!): Lei de Resfriamento de Newton
A taxa de variação da temperatura $T(t)$ de um corpo é proporcional à diferença entre sua temperatura e a temperatura constante do ambiente $A$:
$$\\frac{dT}{dt} = -k(T - A), \\qquad k > 0$$

> **Por que o sinal NEGATIVO é obrigatório para $k > 0$?** Se o corpo está mais quente que o ambiente ($T > A$), ele precisa **esfriar** ($\\frac{dT}{dt} < 0$). Se está mais frio ($T < A$), ele precisa **aquecer** ($\\frac{dT}{dt} > 0$). Um sinal $+k(T-A)$ com $k > 0$ faria a temperatura explodir para $+\\infty$!

**Derivação completa por separação de variáveis**:
$$\\frac{dT}{T - A} = -k\\,dt \\implies \\ln\\lvert T - A \\rvert = -kt + C_1 \\implies T(t) - A = C e^{-kt}$$
Aplicando a condição inicial $T(0) = T_0$, obtemos $C = T_0 - A$, chegando à solução geral:
$$T(t) = (T_0 - A)e^{-kt} + A$$
Note que $\\lim_{t\\to\\infty} T(t) = A$ (equilíbrio térmico assintótico com o ambiente).

#### Exemplo Numérico Resolvido (Lei de Resfriamento de Newton)
Um processador atinge $T_0 = 90^\\circ\\text{C}$ e é desligado em uma sala climatizada a $A = 20^\\circ\\text{C}$. Após $t = 10\\text{ min}$, sua temperatura cai para $55^\\circ\\text{C}$. Qual será sua temperatura após $20\\text{ min}$?
1. Fórmula: $T(t) = (90 - 20)e^{-kt} + 20 = 70e^{-kt} + 20$.
2. Substituindo $T(10) = 55$:
$$55 = 70e^{-10k} + 20 \\implies 35 = 70e^{-10k} \\implies e^{-10k} = \\frac{1}{2}$$
3. Para $t = 20\\text{ min}$, observe o atalho elegante (sem precisar de calculadora para $\\ln 2$!):
$$e^{-20k} = \\bigl(e^{-10k}\\bigr)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$
4. Logo: $T(20) = 70 \\cdot \\frac{1}{4} + 20 = 17{,}5 + 20 = \\mathbf{37{,}5^\\circ\\text{C}}$! *(A diferença para o ambiente cai pela metade a cada 10 minutos!)*

### EDOs Lineares Homogêneas de 2ª Ordem com Coeficientes Constantes
Para $a y'' + b y' + c y = 0$ ($a \\ne 0$), montamos a **equação característica** $a r^2 + b r + c = 0$, com $\\Delta = b^2 - 4ac$:

| Caso de $\\Delta$ | Raízes $r_1, r_2$ | Solução Geral $y(t)$ | Comportamento Físico (RLC / Controle) |
| --- | --- | --- | --- |
| **$\\Delta > 0$** | Reais distintas $r_1 \\ne r_2$ | $C_1 e^{r_1 t} + C_2 e^{r_2 t}$ | Superamortecido (sem oscilação) |
| **$\\Delta = 0$** | Real dupla $r_1 = r_2 = r$ | $(C_1 + C_2 t) e^{rt}$ | Criticamente amortecido (retorno mais rápido sem oscilar) |
| **$\\Delta < 0$** | Complexas conjugadas $\\alpha \\pm \\beta j$ | $e^{\\alpha t}\\bigl(C_1 \\cos(\\beta t) + C_2 \\sin(\\beta t)\\bigr)$ | Subamortecido (oscilatório; estável se $\\alpha < 0$) |`,
        keyFormulas: [
          {
            label: 'Lei de Resfriamento de Newton (ENADE 2017 Q12)',
            latex: '\\frac{dT}{dt} = -k(T - A) \\implies T(t) = (T_0 - A)e^{-kt} + A',
            note: 'Sinal negativo obrigatório para k > 0; quando t → ∞, T(t) → A.',
          },
          {
            label: 'Fator Integrante para EDO Linear de 1ª Ordem',
            latex: 'y\' + P(x)y = Q(x) \\implies \\mu(x) = e^{\\int P(x)\\,dx}',
          },
          {
            label: 'Equação Característica de EDO de 2ª Ordem',
            latex: 'ay\'\' + by\' + cy = 0 \\implies ar^2 + br + c = 0',
            note: 'Raízes repetidas exigem multiplicar a segunda exponencial por t.',
          },
        ],
      },
      {
        id: 'mat-multivariavel-lagrange',
        title: '3. Cálculo Multivariável, Gradiente e Multiplicadores de Lagrange',
        content: `### Derivadas Parciais, Vetor Gradiente e Hessiana
Para uma função diferenciável $f(x, y)$:
- **Vetor Gradiente**: $\\nabla f(x, y) = \\left(\\frac{\\partial f}{\\partial x},\\; \\frac{\\partial f}{\\partial y}\\right)$.
  - **Propriedades geométricas fundamentais**:
    1. $\\nabla f$ aponta na direção de **maior taxa de crescimento** de $f$ (e $-\\nabla f$ na de maior decrescimento — base do Gradiente Descendente em IA!).
    2. $\\nabla f(x_0, y_0)$ é sempre **ortogonal (perpendicular)** à curva de nível de $f$ que passa por $(x_0, y_0)$.
    3. A **Derivada Direcional** na direção de um vetor **unitário** $\\mathbf{u}$ ($\\lVert \\mathbf{u} \\rVert = 1$) é $D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u}$.
- **Otimização Irrestrita (Teste da 2ª Derivada / Hessiana)**:
  - Encontre pontos críticos resolvendo $\\nabla f(x_0, y_0) = (0, 0)$.
  - Calcule o determinante da Matriz Hessiana: $D = f_{xx} f_{yy} - (f_{xy})^2$.
    - $D > 0$ e $f_{xx} > 0 \\implies$ **Mínimo local**.
    - $D > 0$ e $f_{xx} < 0 \\implies$ **Máximo local**.
    - $D < 0 \\implies$ **Ponto de Sela** (nem máximo nem mínimo).
    - $D = 0 \\implies$ inconclusivo.

### FOCO ENADE (2017 Q17!): Otimização com Restrição — Multiplicadores de Lagrange
Quando desejamos minimizar ou maximizar $f(x, y)$ **sujeito a um vínculo (restrição de igualdade)** $g(x, y) = 0$, no ponto ótimo as curvas de nível de $f$ e a curva da restrição $g = 0$ são **tangentes** — portanto, seus vetores gradientes são **paralelos**:
$$\\nabla f(x, y) = \\lambda \\nabla g(x, y) \\qquad \\text{e} \\qquad g(x, y) = 0$$
Isso equivale a buscar pontos estacionários da função **Lagrangiana** $\\mathcal{L}(x, y, \\lambda) = f(x, y) - \\lambda g(x, y)$, igualando todas as derivadas parciais a zero: $\\frac{\\partial \\mathcal{L}}{\\partial x} = 0$, $\\frac{\\partial \\mathcal{L}}{\\partial y} = 0$ e $\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = 0$.

#### Exemplo Completo Estilo ENADE 2017 Q17: Custo Mínimo de Reservatório Cilíndrico
Um engenheiro projeta um reservatório cilíndrico fechado (com base e tampa) de volume fixo $V_0 = 16\\pi\\text{ m}^3$. O material da base e da tampa custa **$c_1 =$ R$ $20/\\text{m}^2$** e o material da parede lateral custa **$c_2 =$ R$ $10/\\text{m}^2$**. Encontre o raio $r$ e a altura $h$ que minimizam o custo total!

1. **Função objetivo (CUSTO, atenção — não é área pura!)**:
   - Área das 2 tampas $= 2\\pi r^2$; área lateral $= 2\\pi r h$.
   - $C(r, h) = c_1 (2\\pi r^2) + c_2 (2\\pi r h) = 40\\pi r^2 + 20\\pi r h$.
2. **Restrição de volume**:
   - $g(r, h) = \\pi r^2 h - 16\\pi = 0 \\iff r^2 h = 16$.
3. **Sistema de Multiplicadores de Lagrange ($\\nabla C = \\lambda \\nabla g$)**:
   - $\\frac{\\partial C}{\\partial r} = \\lambda \\frac{\\partial g}{\\partial r} \\implies 80\\pi r + 20\\pi h = \\lambda (2\\pi r h)$  **(Eq. 1)**
   - $\\frac{\\partial C}{\\partial h} = \\lambda \\frac{\\partial g}{\\partial h} \\implies 20\\pi r = \\lambda (\\pi r^2) \\implies \\lambda = \\frac{20}{r}$  **(Eq. 2)**
4. **Substituindo $\\lambda = \\frac{20}{r}$ na Eq. 1**:
$$80\\pi r + 20\\pi h = \\frac{20}{r} (2\\pi r h) = 40\\pi h \\implies 80\\pi r = 20\\pi h \\implies h = 4r$$
   *(Regra geral belíssima: $h/r = 2 c_1 / c_2$! Como as tampas custam o dobro da lateral, o cilindro ótimo fica mais "alto e fino" para economizar área de tampas!)*
5. **Substituindo $h = 4r$ na restrição $r^2 h = 16$**:
$$r^2 (4r) = 16 \\implies 4r^3 = 16 \\implies r^3 = 4 \\implies r = \\sqrt[3]{4}\\text{ m}, \\quad h = 4\\sqrt[3]{4}\\text{ m}$$`,
        keyFormulas: [
          {
            label: 'Gradiente e Derivada Direcional',
            latex: '\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right), \\qquad D_{\\mathbf{u}} f = \\nabla f \\cdot \\mathbf{u} \\quad (\\lVert \\mathbf{u} \\rVert = 1)',
          },
          {
            label: 'Sistema de Multiplicadores de Lagrange',
            latex: '\\nabla f(x,y) = \\lambda \\nabla g(x,y), \\qquad g(x,y) = 0',
            note: 'Em problemas de custo com materiais diferentes (ENADE 2017 Q17), monte f = função de CUSTO, não apenas área!',
          },
        ],
      },
      {
        id: 'mat-pesquisa-operacional',
        title: '4. Pesquisa Operacional, Programação Linear, Simplex e Problema do Transporte',
        content: `### Estrutura de um Problema de Programação Linear (PPL)
Um PPL busca otimizar (maximizar ou minimizar) uma **função objetivo linear** sujeita a **restrições lineares** e condições de **não-negatividade**:
- **Variáveis de decisão**: $x_1, x_2, \\dots, x_n \\ge 0$ (quantidades a determinar).
- **Função objetivo**: $\\max \\text{ ou } \\min\\; Z = c_1 x_1 + c_2 x_2 + \\dots + c_n x_n$.
- **Restrições**: $\\sum_{j=1}^n a_{ij} x_j \\;(\\le, =, \\ge)\\; b_i$.

### Teorema Fundamental da Programação Linear e Método Gráfico
O conjunto de pontos que satisfaz todas as restrições forma uma **região factível convexa** (politopo).
> **Teorema Fundamental**: Se um PPL possui solução ótima finita, então **pelo menos um vértice (ponto extremo)** da região factível é solução ótima!

- **Múltiplas soluções ótimas**: ocorre quando a função objetivo é paralela a uma aresta ótima (todo o segmento entre dois vértices ótimos produz o mesmo $Z^*$).
- **Solução ilimitada**: região aberta na direção de melhoria de $Z$ ($Z \\to +\\infty$ na maximização).
- **Problema inviável**: não existe nenhum ponto que satisfaça todas as restrições simultaneamente (região vazia).

#### Exemplo Numérico Resolvido (Método Gráfico)
Uma fábrica de embarcados produz placas $A$ (lucro R$ 40) e $B$ (lucro R$ 30). Cada placa $A$ usa $2\\text{ h}$ de montagem e $1\\text{ h}$ de teste; cada placa $B$ usa $1\\text{ h}$ de montagem e $1\\text{ h}$ de teste. Há no máximo $100\\text{ h}$ de montagem e $80\\text{ h}$ de teste por semana.
- **Modelo**: $\\max Z = 40x_1 + 30x_2$ sujeito a:
  1. $2x_1 + x_2 \\le 100$ (montagem)
  2. $x_1 + x_2 \\le 80$ (teste)
  3. $x_1, x_2 \\ge 0$
- **Vértices da região factível**:
  - $V_1 = (0, 0) \\implies Z = 0$
  - $V_2 = (50, 0)$ (intercepto da reta 1 com $x_2=0$) $\\implies Z = 40(50) =$ R$ $2.000$
  - $V_3 = (0, 80)$ (intercepto da reta 2 com $x_1=0$) $\\implies Z = 30(80) =$ R$ $2.400$
  - $V_4$: interseção de $2x_1 + x_2 = 100$ com $x_1 + x_2 = 80 \\implies x_1 = 20, x_2 = 60 \\implies Z = 40(20) + 30(60) = 800 + 1800 =$ **R$ 2.600**!
- **Solução ótima**: produzir **20 placas A e 60 placas B** (lucro máximo de R$ 2.600).

### Algoritmo Simplex (Visão Conceitual)
Para $n > 2$ variáveis, o **Simplex** resolve o PPL algebricamente percorrendo vértices adjacentes com melhoria monotônica de $Z$:
1. Converte o problema para a **Forma Padrão** (apenas equações $=$ e variáveis $\\ge 0$):
   - Restrição $\\le b_i$: adiciona **variável de folga** $+ s_i \\ge 0$.
   - Restrição $\\ge b_i$: subtrai **variável de excesso** $- e_i \\ge 0$ (e soma artificial $+a_i$ para achar base inicial via Método Big-M ou Duas Fases).
2. Parte de uma Solução Básica Factível (vértice inicial) e executa **operações de pivoteamento** (troca uma variável não-básica que melhora $Z$ por uma variável básica determinada pelo **teste da razão mínima** $\\min \\{b_i / a_{ik} \\mid a_{ik} > 0\\}$).
3. Para quando não há mais nenhuma variável capaz de melhorar $Z$ (critério de otimalidade atingido).

### FOCO ENADE (2017 Q28!): Modelagem do Problema do Transporte
Temos $K$ origens (portos/fábricas) cada qual com estoque/oferta $S_i$, e $J$ destinos (mercados/centros) cada qual com demanda mínima $r_j$. O custo unitário de enviar da origem $i$ para o destino $j$ é $b_{ij}$, e a variável de decisão $y_{ij} \\ge 0$ é a quantidade transportada:
$$\\min Z = \\sum_{i=1}^{K} \\sum_{j=1}^{J} b_{ij} y_{ij}$$
sujeito a:
- **Restrições de Oferta** (para cada origem $i = 1, \\dots, K$): $\\displaystyle \\sum_{j=1}^{J} y_{ij} \\le S_i$ *(tudo que sai da origem $i$ não pode exceder seu estoque!)*.
- **Restrições de Demanda** (para cada destino $j = 1, \\dots, J$): $\\displaystyle \\sum_{i=1}^{K} y_{ij} \\ge r_j$ *(tudo que chega ao destino $j$ deve atender **pelo menos** sua demanda!)*.
- **Não-negatividade**: $y_{ij} \\ge 0$.`,
        keyFormulas: [
          {
            label: 'Problema Clássico do Transporte (ENADE 2017 Q28)',
            latex: '\\min \\sum_{i=1}^{K}\\sum_{j=1}^{J} b_{ij} y_{ij} \\quad \\text{s.a.} \\quad \\sum_{j=1}^{J} y_{ij} \\le S_i, \\quad \\sum_{i=1}^{K} y_{ij} \\ge r_j, \\quad y_{ij} \\ge 0',
            note: 'Sinal ≤ para oferta (estoque disponível); sinal ≥ para demanda mínima ("pelo menos r_j").',
          },
          {
            label: 'Conversão para Forma Padrão (Simplex)',
            latex: '\\mathbf{a}^T\\mathbf{x} \\le b \\iff \\mathbf{a}^T\\mathbf{x} + s = b\\;(s\\ge 0); \\qquad \\mathbf{a}^T\\mathbf{x} \\ge b \\iff \\mathbf{a}^T\\mathbf{x} - e = b\\;(e\\ge 0)',
          },
        ],
      },
      {
        id: 'mat-algebra-linear',
        title: '5. Álgebra Linear: Sistemas Lineares, Determinantes, Autovalores e Autovetores',
        content: `### Sistemas Lineares $A\\mathbf{x} = \\mathbf{b}$ e Posto (Rank)
Escalonando a matriz aumentada $[A \\mid \\mathbf{b}]$ via **Eliminação de Gauss**, classificamos o sistema pelo **Teorema de Rouché-Capelli** (sendo $p_A = \\text{posto}(A)$, $p_{Ab} = \\text{posto}([A \\mid \\mathbf{b}])$ e $n$ o número de incógnitas):
- **$p_A = p_{Ab} = n$**: Sistema Possível e Determinado (**SPD** — solução única). Para $A$ quadrada, equivale a $\\det(A) \\ne 0$ ($A$ invertível!).
- **$p_A = p_{Ab} < n$**: Sistema Possível e Indeterminado (**SPI** — infinitas soluções com $n - p_A$ variáveis livres).
- **$p_A < p_{Ab}$**: Sistema Impossível (**SI** — sem solução; aparece linha do tipo $[0\\;0\\;\\dots\\;0 \\mid c]$ com $c \\ne 0$).

### Propriedades Essenciais de Determinantes (Atalhos de Prova)
Para matrizes quadradas $A, B$ de ordem $n \\times n$:
- $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$ e $\\det(A^T) = \\det(A)$.
- **Pegadinha clássica**: $\\det(k \\cdot A) = k^n \\cdot \\det(A)$ (o escalar $k$ sai elevado à ordem $n$, **NÃO** $k \\cdot \\det(A)$!).
- $\\det(A^{-1}) = \\frac{1}{\\det(A)}$.
- Trocar duas linhas/colunas **inverte o sinal** do determinante; linhas linearmente dependentes implicam $\\det(A) = 0$.
- Matriz triangular (superior, inferior ou diagonal): $\\det(A)$ é simplesmente o **produto dos elementos da diagonal principal**!

### Autovalores ($\\lambda$) e Autovetores ($\\mathbf{v}$)
Um escalar $\\lambda$ é **autovalor** e um vetor **não-nulo** $\\mathbf{v} \\ne \\mathbf{0}$ é **autovetor** de $A_{n\\times n}$ se a transformação $A$ apenas estica/encolhe ou inverte $\\mathbf{v}$ sem mudar sua direção:
$$A\\mathbf{v} = \\lambda \\mathbf{v} \\iff (A - \\lambda I)\\mathbf{v} = \\mathbf{0}$$
Para existir solução não-trivial $\\mathbf{v} \\ne \\mathbf{0}$, a matriz $(A - \\lambda I)$ deve ser singular:
$$\\det(A - \\lambda I) = 0 \\quad (\\text{Equação Característica})$$

**Atalhos de Ouro para conferir contas em 3 segundos**:
1. A **soma** dos autovalores é igual ao **traço** da matriz: $\\sum_{i=1}^n \\lambda_i = \\text{tr}(A) = \\sum a_{ii}$.
2. O **produto** dos autovalores é igual ao **determinante**: $\\prod_{i=1}^n \\lambda_i = \\det(A)$.
3. Para qualquer matriz $2 \\times 2$, o polinômio característico é diretamente: $\\lambda^2 - \\text{tr}(A)\\,\\lambda + \\det(A) = 0$!
4. Se $A$ é **simétrica real** ($A = A^T$), todos os seus autovalores são **reais** e autovetores de autovalores distintos são **ortogonais** (base matemática do PCA em Ciência de Dados!).
5. **Diagonalização**: se $A$ tem $n$ autovetores linearmente independentes (colunas de $P$), então $A = P D P^{-1}$ e potências ficam triviais: $A^k = P D^k P^{-1}$.

#### Exemplo Numérico Resolvido (Autovalores e Autovetores)
Encontre os autovalores e autovetores de $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$:
1. **Atalho $2\\times 2$**: $\\text{tr}(A) = 4 + 3 = 7$ e $\\det(A) = 4(3) - 1(2) = 10$.
2. Equação característica: $\\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda - 5)(\\lambda - 2) = 0 \\implies \\mathbf{\\lambda_1 = 5,\\; \\lambda_2 = 2}$.
   *(Conferência: $5 + 2 = 7 = \\text{tr}(A)$ e $5 \\times 2 = 10 = \\det(A)$!)*
3. **Autovetor para $\\lambda_1 = 5$**: $(A - 5I)\\mathbf{v} = \\begin{bmatrix} -1 & 1 \\\\ 2 & -2 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -x + y = 0 \\implies y = x \\implies \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$.
4. **Autovetor para $\\lambda_2 = 2$**: $(A - 2I)\\mathbf{v} = \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies 2x + y = 0 \\implies y = -2x \\implies \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}$.`,
        keyFormulas: [
          {
            label: 'Equação Característica e Propriedades de Autovalores',
            latex: '\\det(A - \\lambda I) = 0, \\qquad \\sum_{i=1}^n \\lambda_i = \\text{tr}(A), \\qquad \\prod_{i=1}^n \\lambda_i = \\det(A)',
            note: 'Em matrizes 2×2: λ² − tr(A)·λ + det(A) = 0 economiza tempo precioso na prova!',
          },
          {
            label: 'Determinante com Escalar e Diagonalização',
            latex: '\\det(kA_{n\\times n}) = k^n \\det(A), \\qquad A = P D P^{-1} \\implies A^k = P D^k P^{-1}',
          },
        ],
      },
      {
        id: 'mat-calculo-numerico',
        title: '6. Cálculo Numérico: Erros, Zeros de Funções e Integração Numérica',
        content: `### Tipos de Erro em Computação Científica
- **Erro de Truncamento**: decorre de aproximar um processo matemático infinito por um finito (ex.: cortar uma Série de Taylor ou usar passo $h$ finito na integração).
- **Erro de Arredondamento**: decorre da representação finita em ponto flutuante (IEEE 754) na memória do computador.
- **Erro Absoluto e Relativo**: $E_a = \\lvert x - \\tilde{x} \\rvert$ e $E_r = \\frac{\\lvert x - \\tilde{x} \\rvert}{\\lvert x \\rvert}$ ($x \\ne 0$).

### Zeros de Funções ($f(x) = 0$): Bolzano, Bisseção e Newton-Raphson
Pelo **Teorema de Bolzano**, se $f$ é contínua em $[a, b]$ e **$f(a) \\cdot f(b) < 0$** (sinais opostos), existe pelo menos uma raiz real em $(a, b)$.

| Método | Fórmula de Iteração | Exige derivada? | Convergência | Pontos Fortes e Fracos |
| --- | --- | --- | --- | --- |
| **Bisseção** | $x_m = \\frac{a+b}{2}$ (mantém subintervalo com troca de sinal) | Não | **Linear** (lenta) | **Sempre converge** se Bolzano vale; nº de passos exato: $k \\ge \\left\\lceil \\log_2\\frac{b-a}{\\varepsilon} \\right\\rceil$ |
| **Newton-Raphson** | $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$ | **Sim** ($f'$) | **Quadrática** (velocíssima!) | Dobra dígitos corretos por iteração; pode **divergir** se $f'(x_k) \\approx 0$ ou chute inicial ruim |
| **Secante** | $x_{k+1} = x_k - f(x_k)\\frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})}$ | Não | Superlinear ($\\approx 1{,}618$) | Aproxima $f'$ por diferença finita; exige 2 chutes iniciais |

#### Exemplo Numérico Resolvido: $\\sqrt{2}$ por Newton-Raphson
Encontre a raiz positiva de $f(x) = x^2 - 2$ (logo $f'(x) = 2x$) partindo de $x_0 = 1{,}5$:
- Fórmula simplificada: $x_{k+1} = x_k - \\frac{x_k^2 - 2}{2x_k} = \\frac{1}{2}\\left(x_k + \\frac{2}{x_k}\\right)$.
- **Iteração 1**: $x_1 = \\frac{1}{2}\\left(1{,}5 + \\frac{2}{1{,}5}\\right) = \\frac{1}{2}(1{,}5 + 1{,}33333) = \\mathbf{1{,}41667}$ (erro $= 2{,}4\\times 10^{-3}$).
- **Iteração 2**: $x_2 = \\frac{1}{2}\\left(1{,}41667 + \\frac{2}{1{,}41667}\\right) = \\mathbf{1{,}414216}$ (erro $= 2{,}1\\times 10^{-6}$ — 5 casas exatas em apenas 2 passos!).
- *Comparação*: para atingir erro $< 10^{-6}$ em $[1, 2]$, a Bisseção precisaria de $k \\ge \\lceil \\log_2(10^6) \\rceil = \\mathbf{20\\text{ iterações}}$!

### Integração Numérica (Quadratura)
Dividindo $[a, b]$ em $n$ subintervalos iguais de largura $h = \\frac{b - a}{n}$ nos nós $x_i = a + i h$:
1. **Regra dos Trapézios Composta** (aproxima $f$ por retas; erro $O(h^2)$; exata para polinômios até grau 1):
$$I_T = \\frac{h}{2}\\left[f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right]$$
2. **Regra 1/3 de Simpson Composta** (aproxima $f$ por parábolas; exige **$n$ PAR**; erro $O(h^4)$; exata para polinômios até grau 3!):
$$I_S = \\frac{h}{3}\\Bigl[f(x_0) + 4\\bigl(f(x_1) + f(x_3) + \\dots + f(x_{n-1})\\bigr) + 2\\bigl(f(x_2) + f(x_4) + \\dots + f(x_{n-2})\\bigr) + f(x_n)\\Bigr]$$
   - *Pesos fáceis de lembrar*: Trapézios $= [1, 2, 2, \\dots, 2, 1]$; Simpson 1/3 $= [1, 4, 2, 4, \\dots, 2, 4, 1]$.`,
        keyFormulas: [
          {
            label: 'Newton-Raphson e Passos da Bisseção',
            latex: 'x_{k+1} = x_k - \\frac{f(x_k)}{f\'(x_k)}, \\qquad k_{\\text{biss}} \\ge \\left\\lceil \\log_2\\!\\left(\\frac{b - a}{\\varepsilon}\\right) \\right\\rceil',
            note: 'Newton-Raphson tem convergência quadrática, mas exige f′(x_k) ≠ 0.',
          },
          {
            label: 'Regra dos Trapézios e Regra 1/3 de Simpson (Compostas)',
            latex: 'I_T = \\frac{h}{2}\\Bigl[f_0 + 2\\sum_{i=1}^{n-1}f_i + f_n\\Bigr], \\qquad I_S = \\frac{h}{3}\\Bigl[f_0 + 4\\sum_{\\text{ímpar}} f_i + 2\\sum_{\\text{par}} f_i + f_n\\Bigr]',
            note: 'Simpson 1/3 exige obrigatoriamente número PAR de subintervalos n (número ímpar de pontos).',
          },
        ],
        codeExample: {
          language: 'python',
          title: 'Newton-Raphson e Regra dos Trapézios Composta em Python',
          code: `def newton_raphson(f, df, x0, tol=1e-7, max_iter=50):
    x = x0
    for k in range(1, max_iter + 1):
        deriv = df(x)
        if abs(deriv) < 1e-12:
            raise ZeroDivisionError("Derivada nula: Newton-Raphson falhou.")
        x_novo = x - f(x) / deriv
        if abs(x_novo - x) / max(1.0, abs(x_novo)) < tol:
            return x_novo, k
        x = x_novo
    return x, max_iter

def trapezios(f, a, b, n):
    h = (b - a) / n
    soma = 0.5 * (f(a) + f(b))
    for i in range(1, n):
        soma += f(a + i * h)
    return h * soma

# Exemplo: raiz de x^2 - 2 = 0 e integral de x^2 em [0, 1]
raiz, iters = newton_raphson(lambda x: x**2 - 2, lambda x: 2*x, x0=1.5)
area = trapezios(lambda x: x**2, 0.0, 1.0, n=100)  # valor exato = 1/3`,
        },
      },
    ],
    inepTraps: [
      'Errar o sinal na Lei de Resfriamento de Newton (ENADE 2017 Q12): escrever $\\frac{dT}{dt} = +k(T-A)$ com $k > 0$ gera crescimento explosivo, não resfriamento! O correto é $-k(T-A)$.',
      'Nos Multiplicadores de Lagrange com custos diferenciados (ENADE 2017 Q17), minimizar a **área total** em vez da **função de custo** — cada superfície deve ser multiplicada pelo seu respectivo preço por $\\text{m}^2$.',
      'Inverter os sinais de desigualdade no Problema do Transporte (ENADE 2017 Q28): oferta é sempre $\\le S_i$ (não pode enviar além do estoque) e demanda mínima é sempre $\\ge r_j$ (deve receber *pelo menos* $r_j$).',
      'Achar que $\\det(kA) = k \\det(A)$: em uma matriz $n\\times n$, cada uma das $n$ linhas é multiplicada por $k$, logo $\\det(kA) = k^n \\det(A)$!',
      'Aplicar a Regra 1/3 de Simpson com $n$ ímpar de subintervalos ou aplicar L\'Hôpital sem verificar antes se há indeterminação ($0/0$ ou $\\infty/\\infty$) — usar L\'Hôpital quando o limite não é indeterminado dá resposta errada!',
    ],
    quickChecklist: [
      'Sei aplicar L\'Hôpital, otimização 1D (1ª e 2ª derivadas) e integração por substituição e por partes?',
      'Sei resolver a Lei de Resfriamento de Newton passo a passo e identificar os 3 casos da EDO linear de 2ª ordem?',
      'Sei montar e resolver $\\nabla f = \\lambda \\nabla g$ com $g = 0$ nos Multiplicadores de Lagrange?',
      'Sei modelar restrições de oferta ($\\le$) e demanda ($\\ge$) no Problema do Transporte e resolver PPL 2D graficamente pelos vértices?',
      'Sei classificar sistemas lineares por posto (Rouché-Capelli) e lembrar $\\det(kA) = k^n\\det(A)$?',
      'Sei calcular autovalores e autovetores rapidamente usando $\\text{tr}(A)=\\sum\\lambda_i$ e $\\det(A)=\\prod\\lambda_i$?',
      'Sei comparar Bisseção vs Newton-Raphson (convergência linear vs quadrática e condições de falha)?',
      'Sei aplicar a Regra dos Trapézios e a Regra 1/3 de Simpson Composta com os pesos corretos?',
    ],
  },

  // =========================================================================
  // MÓDULO 13: PROBABILIDADE E ESTATÍSTICA
  // =========================================================================
  {
    id: 'probabilidade-estatistica',
    title: 'Probabilidade e Estatística',
    subtitle: 'Estatística Descritiva, Transformações Lineares, Bayes, Distribuições, TCL, Testes de Hipótese e Regressão',
    estimatedMinutes: 70,
    overview:
      'Fundamental para análise de desempenho de sistemas, confiabilidade de hardware/redes, controle de qualidade e Ciência de Dados. Este módulo cobre desde medidas descritivas e o efeito algébrico de transformações lineares (uma das pegadinhas favoritas do INEP!) até probabilidade condicional, Teorema de Bayes, distribuições discretas e contínuas, Teorema Central do Limite, intervalos de confiança, testes de hipótese e regressão linear por mínimos quadrados.',
    enadeWeightNote:
      'No ENADE, Probabilidade e Estatística gera **1 a 3 questões** de alto índice de erro entre candidatos que apenas decoram fórmulas sem entender o significado. Destaque absoluto para **dispersão relativa (CV) sob transformações lineares $Y = aX + b$** (ENADE 2017 Q15!), aplicação do Teorema de Bayes a falsos positivos, leitura da curva Normal sem calculadora (regra 68-95-99,7%) e interpretação rigorosa de p-valor e correlação.',
    sections: [
      {
        id: 'est-descritiva-dispersao',
        title: '1. Estatística Descritiva, Dispersão Relativa e Transformações Lineares (Y = aX + b)',
        content: `### Medidas de Tendência Central e Posição
- **Média Aritmética ($\\bar{x}$ ou $\\mu$)**: centro de massa dos dados ($\\bar{x} = \\frac{1}{n}\\sum x_i$). **Muito sensível a valores extremos (outliers)!**
- **Mediana ($Md$ ou $Q_2$)**: valor central dos dados **ordenados** (se $n$ é par, média dos dois centrais). **Robusta a outliers** — preferida para salários, tempos de latência com cauda longa e preços de imóveis.
- **Moda ($Mo$)**: valor mais frequente (pode ser amodal, unimodal ou multimodal).
- **Assimetria**: em distribuições simétricas, $Mo = Md = \\bar{x}$. Na **assimétrica à direita (positiva)**, a cauda longa puxa a média para cima: $Mo < Md < \\bar{x}$.
- **Quartis e Boxplot**: $Q_1$ (25%), $Q_2$ (50% = mediana), $Q_3$ (75%). A **Amplitude Interquartil** é $IQR = Q_3 - Q_1$; observações fora de $[Q_1 - 1{,}5\\cdot IQR,\\; Q_3 + 1{,}5\\cdot IQR]$ são sinalizadas como potenciais **outliers**.

### Variância, Desvio-Padrão e Coeficiente de Variação (CV)
- **Variância Populacional**: $\\sigma^2 = \\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2$.
- **Variância Amostral**: $s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2$ *(usa $n-1$ — Correção de Bessel — para ser um estimador não-viesado de $\\sigma^2$!)*.
- **Desvio-Padrão ($\\sigma$ ou $s$)**: raiz quadrada da variância; possui a **mesma unidade** dos dados originais.
- **Coeficiente de Variação ($CV$) — Dispersão Relativa**:
$$CV = \\frac{\\sigma}{\\mu} \\quad (\\text{ou em percentual: } \\frac{\\sigma}{\\mu} \\times 100\\%)$$
  Por ser adimensional, o $CV$ permite comparar a homogeneidade de conjuntos em escalas ou unidades completamente diferentes (ex.: variação de preços em dólar vs real, ou peso de elefantes vs formigas).

### FOCO ENADE (2017 Q15!): Efeito de Transformações Lineares $Y = aX + b$
| Grandeza Estatística | Original ($X$) | Após Translação ($Y = X + b$) | Após Escala ($Y = aX,\\; a > 0$) | Caso Geral ($Y = aX + b$) |
| --- | --- | --- | --- | --- |
| **Média** | $\\mu_X$ | $\\mu_X + b$ | $a \\cdot \\mu_X$ | $a \\mu_X + b$ |
| **Mediana** | $Md_X$ | $Md_X + b$ | $a \\cdot Md_X$ | $a \\cdot Md_X + b$ |
| **Variância** | $\\sigma_X^2$ | **Inalterada** ($\\sigma_X^2$) | $a^2 \\cdot \\sigma_X^2$ | $a^2 \\cdot \\sigma_X^2$ |
| **Desvio-Padrão** | $\\sigma_X$ | **Inalterado** ($\\sigma_X$) | $a \\cdot \\sigma_X$ | $\\lvert a \\rvert \\cdot \\sigma_X$ |
| **Dispersão Relativa ($CV$)** | $\\frac{\\sigma_X}{\\mu_X}$ | **Muda!** ($\\frac{\\sigma_X}{\\mu_X + b}$) | **INALTERADA!** ($\\frac{a\\sigma_X}{a\\mu_X} = \\frac{\\sigma_X}{\\mu_X}$) | $\\frac{\\lvert a \\rvert \\sigma_X}{a \\mu_X + b}$ |

#### Exemplo Numérico Resolvido (Padrão ENADE 2017 Q15!)
Os tempos de resposta de 4 servidores são $X = \\{100, 120, 140, 160\\}\\text{ ms}$ ($\\mu_X = 130\\text{ ms}$, $\\sigma_X = \\sqrt{500} \\approx 22{,}36\\text{ ms}$, $CV_X = \\frac{22{,}36}{130} = 17{,}2\\%$). Uma otimização de código **reduz em 30%** o tempo de resposta de **todos** os servidores ($Y = 0{,}7\\,X$):
- Novos tempos: $Y = \\{70, 84, 98, 112\\}\\text{ ms}$.
- Nova média: $\\mu_Y = 0{,}7 \\times 130 = \\mathbf{91\\text{ ms}}$ (caiu 30%).
- Novo desvio-padrão: $\\sigma_Y = 0{,}7 \\times 22{,}36 = \\mathbf{15{,}65\\text{ ms}}$ (caiu 30%).
- Nova variância: $\\sigma_Y^2 = 0{,}7^2 \\times 500 = 0{,}49 \\times 500 = \\mathbf{245\\text{ ms}^2}$ (caiu 51%!).
- **Nova dispersão relativa**: $CV_Y = \\frac{15{,}65}{91} = \\frac{0{,}7 \\sigma_X}{0{,}7 \\mu_X} = \\mathbf{17{,}2\\%}$ (**EXATAMENTE IGUAL!**).`,
        keyFormulas: [
          {
            label: 'Variância Amostral e Coeficiente de Variação',
            latex: 's^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2, \\qquad CV = \\frac{s}{\\bar{x}}',
          },
          {
            label: 'Transformação Linear Y = aX + b (ENADE 2017 Q15)',
            latex: '\\mu_{aX+b} = a\\mu_X + b, \\qquad \\sigma^2_{aX+b} = a^2\\sigma^2_X, \\qquad \\sigma_{aX+b} = \\lvert a \\rvert \\sigma_X',
            note: 'Escala pura (b=0, a>0) reduz/aumenta μ e σ na mesma proporção, deixando o CV INALTERADO!',
          },
        ],
      },
      {
        id: 'est-probabilidade-bayes',
        title: '2. Axiomas da Probabilidade, Condicional e Teorema de Bayes',
        content: `### Regras Fundamentais e a Distinção Vital entre Exclusivos e Independentes
Para quaisquer eventos $A$ e $B$ de um espaço amostral $\\Omega$:
- **Regra da Adição**: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
- **Evento Complementar**: $P(\\bar{A}) = 1 - P(A)$ *(atalho poderoso para expressões como "pelo menos um" $= 1 - P(\\text{nenhum})$!)*.
- **Probabilidade Condicional**: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ (com $P(B) > 0$). Disso segue a **Regra do Produto**: $P(A \\cap B) = P(A \\mid B) \\cdot P(B)$.

| Conceito | Definição Matemática | Significado Intuitivo | Podem ocorrer juntos? |
| --- | --- | --- | --- |
| **Mutuamente Exclusivos (Disjuntos)** | $P(A \\cap B) = 0$ | Se $A$ acontece, $B$ é **impossível** | **NUNCA!** (Se $P(A),P(B)>0$, são fortemente dependentes!) |
| **Eventos Independentes** | $P(A \\cap B) = P(A)\\cdot P(B)$ | Saber que $B$ ocorreu não altera a chance de $A$: $P(A \\mid B) = P(A)$ | Sim! (Ex.: dois lançamentos distintos de moeda) |

### Teorema da Probabilidade Total e Teorema de Bayes
Se os eventos $A_1, A_2, \\dots, A_k$ formam uma partição do espaço amostral (mutuamente exclusivos e cuja união é $\\Omega$), então para qualquer evento $B$:
$$P(B) = \\sum_{i=1}^{k} P(B \\mid A_i)\\, P(A_i) \\qquad (\\text{Probabilidade Total})$$
Invertendo o condicionamento (passando da causa $\\to$ sintoma para sintoma $\\to$ causa), obtemos o **Teorema de Bayes**:
$$P(A_j \\mid B) = \\frac{P(B \\mid A_j)\\, P(A_j)}{\\sum_{i=1}^{k} P(B \\mid A_i)\\, P(A_i)}$$
- $P(A_j)$: probabilidade **a priori** (taxa-base antes da evidência).
- $P(B \\mid A_j)$: **verossimilhança** da evidência dada a hipótese.
- $P(A_j \\mid B)$: probabilidade **a posteriori** (crença atualizada após observar $B$).

### Exemplo Numérico Resolvido: O Paradoxo do Falso Positivo em um IDS
Um Sistema de Detecção de Intrusão (IDS) monitora conexões de rede. Sabe-se que:
- Apenas **$1\\%$** das conexões são ataques reais: $P(A) = 0{,}01$ e $P(\\bar{A}) = 0{,}99$.
- Se há ataque, o IDS dispara alerta com **$99\\%$** de acerto: $P(\\text{Alerta} \\mid A) = 0{,}99$.
- Se a conexão é legítima, o IDS gera falso alarme em **$5\\%$** dos casos: $P(\\text{Alerta} \\mid \\bar{A}) = 0{,}05$.

**Pergunta**: O alarme disparou! Qual a probabilidade de ser realmente um ataque ($P(A \\mid \\text{Alerta})$)?
1. Probabilidade total de alerta:
$$P(\\text{Alerta}) = (0{,}99)(0{,}01) + (0{,}05)(0{,}99) = 0{,}0099 + 0{,}0495 = 0{,}0594$$
2. Aplicando Bayes:
$$P(A \\mid \\text{Alerta}) = \\frac{0{,}0099}{0{,}0594} = \\frac{99}{594} = \\frac{1}{6} \\approx \\mathbf{16{,}67\\%}$$
**Lição crucial**: mesmo com um detector 99% sensível, quando o evento é raro ($1\\%$), mais de 83% dos alertas são falsos positivos! (Em provas, pensar em 10.000 conexões — 100 ataques gerando 99 alertas vs 9.900 normais gerando 495 alertas falsos — resolve Bayes mentalmente sem erro!)`,
        keyFormulas: [
          {
            label: 'Teorema de Bayes (Forma Binária)',
            latex: 'P(A \\mid B) = \\frac{P(B \\mid A)\\,P(A)}{P(B \\mid A)\\,P(A) + P(B \\mid \\bar{A})\\,P(\\bar{A})}',
            note: 'Fundamental em diagnósticos, detecção de spam/intrusão e classificação Naive Bayes.',
          },
          {
            label: 'Independência vs Exclusividade Mútua',
            latex: '\\text{Indep.: } P(A \\cap B) = P(A)P(B) \\qquad \\text{vs} \\qquad \\text{Excl.: } P(A \\cap B) = 0',
          },
        ],
      },
      {
        id: 'est-discretas',
        title: '3. Variáveis Aleatórias Discretas: Esperança, Binomial e Poisson',
        content: `### Esperança Matemática e Variância de Variáveis Aleatórias
Para uma variável aleatória discreta $X$ com função massa de probabilidade $p(x_i) = P(X = x_i)$:
$$E[X] = \\mu = \\sum_i x_i\\, p(x_i), \\qquad \\text{Var}(X) = E\\bigl[(X - \\mu)^2\\bigr] = E[X^2] - (E[X])^2$$
- **Linearidade da Esperança**: $E[aX + bY] = aE[X] + bE[Y]$ vale **SEMPRE** (mesmo se $X$ e $Y$ forem dependentes!).
- **Soma de Variâncias**: $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)$ quando $X$ e $Y$ são **independentes** (note o sinal **$+$** mesmo na subtração $X - Y$, pois $\\text{Var}(-Y) = (-1)^2 \\text{Var}(Y) = +\\text{Var}(Y)$!).

### Distribuições Discretas Mais Cobradas em Engenharia
| Distribuição | Parâmetros | Função Massa $P(X=k)$ | Esperança $E[X]$ | Variância $\\text{Var}(X)$ | Quando Usar |
| --- | --- | --- | --- | --- | --- |
| **Bernoulli** | $p \\in [0,1]$ | $p^k(1-p)^{1-k}$, $k\\in\\{0,1\\}$ | $p$ | $p(1-p)$ | Único teste binário (sucesso/falha) |
| **Binomial** | $n, p$ | $\\binom{n}{k} p^k (1-p)^{n-k}$ | $np$ | $np(1-p)$ | Número de sucessos em **$n$ ensaios independentes** com mesma prob. $p$ |
| **Geométrica** | $p$ | $(1-p)^{k-1} p$, $k\\ge 1$ | $\\frac{1}{p}$ | $\\frac{1-p}{p^2}$ | Número de tentativas até o **1º sucesso** (retransmissões de pacotes) |
| **Poisson** | $\\lambda > 0$ | $\\frac{e^{-\\lambda} \\lambda^k}{k!}$, $k=0,1,2,\\dots$ | $\\lambda$ | $\\lambda$ | Contagem de eventos raros em intervalo fixo de tempo/espaço (chegadas em servidor, defeitos por placa) |

> **Aproximação de Poisson para a Binomial**: quando $n$ é muito grande ($n \\ge 50$) e $p$ é muito pequeno ($p \\le 0{,}05$), $\\text{Bin}(n, p) \\approx \\text{Pois}(\\lambda = np)$. Além disso, na Poisson, a **média é sempre igual à variância** ($E[X] = \\text{Var}(X) = \\lambda$)!

### Exemplos Numéricos Resolvidos Passo a Passo
**Exemplo 1 (Binomial — Transmissão de Pacotes)**: Um canal ruidoso corrompe cada pacote independentemente com probabilidade $p = 0{,}1$. Em um bloco de $n = 4$ pacotes, qual a probabilidade de **no máximo 1** pacote chegar corrompido?
- $X \\sim \\text{Bin}(4; 0{,}1)$: queremos $P(X \\le 1) = P(X=0) + P(X=1)$.
- $P(X=0) = \\binom{4}{0}(0{,}1)^0(0{,}9)^4 = 1 \\times 1 \\times 0{,}6561 = 0{,}6561$.
- $P(X=1) = \\binom{4}{1}(0{,}1)^1(0{,}9)^3 = 4 \\times 0{,}1 \\times 0{,}729 = 0{,}2916$.
- Logo, $P(X \\le 1) = 0{,}6561 + 0{,}2916 = \\mathbf{0{,}9477}$ ($94{,}77\\%$).

**Exemplo 2 (Poisson — Servidor Web)**: Um servidor recebe em média $\\lambda = 3$ requisições por segundo segundo um processo de Poisson. Qual a probabilidade de chegarem **pelo menos 2** requisições em 1 segundo? (Use $e^{-3} \\approx 0{,}05$.)
- Pelo complementar: $P(X \\ge 2) = 1 - [P(X=0) + P(X=1)]$.
- $P(X=0) = \\frac{e^{-3} 3^0}{0!} = e^{-3} \\approx 0{,}05$.
- $P(X=1) = \\frac{e^{-3} 3^1}{1!} = 3 e^{-3} \\approx 0{,}15$.
- Logo, $P(X \\ge 2) = 1 - (0{,}05 + 0{,}15) = \\mathbf{0{,}80}$ ($80\\%$).`,
        keyFormulas: [
          {
            label: 'Distribuição Binomial',
            latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\qquad E[X] = np, \\qquad \\text{Var}(X) = np(1-p)',
          },
          {
            label: 'Distribuição de Poisson',
            latex: 'P(X=k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}, \\qquad E[X] = \\text{Var}(X) = \\lambda',
            note: 'A taxa λ escala proporcionalmente ao tamanho do intervalo (ex.: 3 req/s → 6 req em 2 s).',
          },
        ],
      },
      {
        id: 'est-continuas-tcl',
        title: '4. Distribuições Contínuas (Uniforme, Exponencial, Normal) e Teorema Central do Limite',
        content: `### Variáveis Aleatórias Contínuas
Uma variável contínua $X$ é descrita por sua **Função Densidade de Probabilidade (FDP)** $f(x) \\ge 0$, com área total $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$. A probabilidade em um intervalo é a integral $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$.
- **Detalhe conceitual**: para qualquer variável contínua, a probabilidade de um ponto exato é zero ($P(X = c) = 0$), logo $P(a \\le X \\le b) = P(a < X < b)$!

### Principais Distribuições Contínuas
| Distribuição | Densidade $f(x)$ | Média $\\mu$ | Variância $\\sigma^2$ | Propriedade Marcante |
| --- | --- | --- | --- | --- |
| **Uniforme $U(a, b)$** | $\\frac{1}{b-a}$ em $[a, b]$ | $\\frac{a+b}{2}$ | $\\frac{(b-a)^2}{12}$ | Probabilidade proporcional ao comprimento do subintervalo (erro de quantização ADC!) |
| **Exponencial $\\text{Exp}(\\lambda)$** | $\\lambda e^{-\\lambda x}$ ($x \\ge 0$) | $\\frac{1}{\\lambda}$ | $\\frac{1}{\\lambda^2}$ | **Tempo entre chegadas Poisson**; possui **falta de memória**: $P(X > s+t \\mid X > s) = P(X > t)$ |
| **Normal $N(\\mu, \\sigma^2)$** | $\\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mu$ | $\\sigma^2$ | Simétrica em $\\mu$; padronizada por $Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)$ |

### Regra Empírica da Normal (Para Provas Sem Tabela!)
Para qualquer distribuição Normal $N(\\mu, \\sigma^2)$:
- **$68{,}3\\%$** dos valores estão em $[\\mu - 1\\sigma,\\; \\mu + 1\\sigma]$ (logo $15{,}85\\%$ em cada cauda).
- **$95{,}4\\%$** dos valores estão em $[\\mu - 2\\sigma,\\; \\mu + 2\\sigma]$ (exatamente $95\\%$ em $\\mu \\pm 1{,}96\\sigma$, ou $\\approx 2{,}5\\%$ em cada cauda!).
- **$99{,}7\\%$** dos valores estão em $[\\mu - 3\\sigma,\\; \\mu + 3\\sigma]$.

### Teorema Central do Limite (TCL)
Um dos teoremas mais importantes de toda a ciência:
> Sejam $X_1, X_2, \\dots, X_n$ variáveis aleatórias independentes e identicamente distribuídas (i.i.d.) provenientes de **QUALQUER distribuição** (mesmo assimétrica ou discreta!) com média $\\mu$ e variância finita $\\sigma^2$. Para $n$ suficientemente grande (regra prática: $n \\ge 30$), a **média amostral** $\\bar{X} = \\frac{1}{n}\\sum X_i$ tem distribuição aproximadamente Normal:
$$\\bar{X} \\sim N\\!\\left(\\mu,\\; \\frac{\\sigma^2}{n}\\right), \\qquad \\text{Erro Padrão da Média: } EP = \\frac{\\sigma}{\\sqrt{n}}$$

#### Exemplo Numérico Resolvido (Normal + TCL)
O tempo de processamento de uma requisição segue $X \\sim N(120\\text{ ms};\\; 15^2)$.
1. **Qual a probabilidade de UMA requisição demorar mais que $150\\text{ ms}$?**
   - Escore $Z$: $Z = \\frac{150 - 120}{15} = +2{,}0$.
   - Pela regra empírica, $95\\%$ ficam entre $-2$ e $+2$, sobrando $5\\%$ divididos nas duas caudas $\\implies P(Z > 2) \\approx \\mathbf{2{,}5\\%}$ (valor exato: $2{,}28\\%$).
2. **Qual o desvio-padrão (Erro Padrão) da média de um lote com $n = 25$ requisições?**
   - $EP = \\frac{\\sigma}{\\sqrt{n}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = \\mathbf{3\\text{ ms}}$. Assim, a média de 25 requisições dificilmente passa de $126\\text{ ms}$ ($\\mu + 2\\cdot EP$)!`,
        keyFormulas: [
          {
            label: 'Distribuição Exponencial (FDP e Acumulada)',
            latex: 'f(x) = \\lambda e^{-\\lambda x}, \\qquad P(X > t) = e^{-\\lambda t}, \\qquad E[X] = \\frac{1}{\\lambda}',
            note: 'Em confiabilidade de sistemas, MTBF = 1/λ (tempo médio entre falhas).',
          },
          {
            label: 'Padronização Z e Teorema Central do Limite (TCL)',
            latex: 'Z = \\frac{X - \\mu}{\\sigma}, \\qquad Z_{\\bar{X}} = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1)',
            note: 'O erro padrão cai com √n: quadruplicar a amostra reduz o erro pela metade!',
          },
        ],
      },
      {
        id: 'est-inferencia-hipoteses',
        title: '5. Intervalos de Confiança e Testes de Hipótese',
        content: `### Intervalo de Confiança (IC) para a Média Populacional
Um estimador pontual ($\\bar{x}$) não informa sua incerteza. O **Intervalo de Confiança** de nível $(1 - \\alpha)$ (ex.: $95\\% \\Rightarrow \\alpha = 0{,}05$) constrói uma faixa em torno de $\\bar{x}$:
- **Com $\\sigma$ conhecido (ou $n \\ge 30$ pelo TCL)**:
$$IC_{(1-\\alpha)} = \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$$
  Valores críticos mais usados: $90\\% \\to z = 1{,}645$; **$95\\% \\to z = 1{,}96$**; $99\\% \\to z = 2{,}576$.
- **Com $\\sigma$ desconhecido e $n < 30$ (população normal)**: substitui-se $z_{\\alpha/2}$ pelo valor crítico $t_{\\alpha/2,\\; n-1}$ da **distribuição $t$-Student** (caudas mais pesadas que a Normal) com $gl = n - 1$ graus de liberdade e $\\sigma$ pelo desvio amostral $s$.
- **Tamanho de amostra e Margem de Erro ($E$)**: como $E = z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$, temos $n = \\left(\\frac{z_{\\alpha/2}\\sigma}{E}\\right)^2$. **Para cortar a margem de erro pela metade, é preciso multiplicar o tamanho da amostra $n$ por $4$!**

> **Interpretação correta de "IC de 95%"**: significa que se repetíssemos o procedimento de amostragem muitas vezes, aproximadamente 95% dos intervalos construídos conteriam o verdadeiro parâmetro fixo $\\mu$.

### Testes de Hipótese, Erros Tipo I / II e p-Valor
1. **Formulação**:
   - **$H_0$ (Hipótese Nula)**: afirmação de igualdade / status quo / ausência de efeito (ex.: $\\mu = 50\\text{ ms}$).
   - **$H_1$ (Hipótese Alternativa)**: afirmação que queremos comprovar (bilateral $\\mu \\ne 50$, ou unilateral $\\mu < 50$ / $\\mu > 50$).
2. **Tabela de Decisão e Erros Estatísticos**:

| Decisão do Teste | $H_0$ é Verdadeira (Realidade) | $H_0$ é Falsa (Realidade) |
| --- | --- | --- |
| **Rejeitar $H_0$** | **Erro Tipo I** (Falso Positivo — prob. $= \\alpha$) | Decisão Correta (**Poder do Teste** $= 1 - \\beta$) |
| **Não Rejeitar $H_0$** | Decisão Correta (Confiança $= 1 - \\alpha$) | **Erro Tipo II** (Falso Negativo — prob. $= \\beta$) |

3. **O que é o p-valor?** É a probabilidade de observar uma estatística de teste **tão ou mais extrema** quanto a obtida na amostra, **SUPONDO QUE $H_0$ SEJA VERDADEIRA**.
   - **Regra de decisão**: se **$p\\text{-valor} < \\alpha$**, rejeita-se $H_0$ (resultado *estatisticamente significativo* ao nível $\\alpha$). Se $p\\text{-valor} \\ge \\alpha$, **não rejeitamos $H_0$** (nunca dizemos "provamos que $H_0$ é verdadeira", apenas que não há evidência suficiente para rejeitá-la!).

#### Exemplo Numérico Resolvido (IC 95% + Teste de Hipótese)
O SLA de uma API exige latência média $\\mu = 50\\text{ ms}$. Em uma amostra de $n = 100$ chamadas, obteve-se $\\bar{x} = 47{,}5\\text{ ms}$ com desvio conhecido $\\sigma = 10\\text{ ms}$.
1. **Intervalo de Confiança de 95%**:
   - Erro padrão: $EP = \\frac{10}{\\sqrt{100}} = 1{,}0\\text{ ms}$.
   - Margem de erro: $E = 1{,}96 \\times 1{,}0 = 1{,}96\\text{ ms}$.
   - $IC_{95\\%} = [47{,}5 - 1{,}96;\\; 47{,}5 + 1{,}96] = \\mathbf{[45{,}54;\\; 49{,}46]\\text{ ms}}$.
2. **Teste Bilateral ($H_0: \\mu = 50$ vs $H_1: \\mu \\ne 50$, com $\\alpha = 5\\%$)**:
   - Estatística $Z$: $Z_{\\text{calc}} = \\frac{47{,}5 - 50}{1{,}0} = -2{,}50$.
   - Como $\\lvert Z_{\\text{calc}} \\rvert = 2{,}50 > 1{,}96$ (e o valor $50$ ficou **fora** do $IC_{95\\%}$!), temos $p\\text{-valor} \\approx 0{,}0124 < 0{,}05 \\implies$ **Rejeitamos $H_0$**: há evidência estatística de que a latência média real difere de $50\\text{ ms}$ (está melhor que o SLA!).`,
        keyFormulas: [
          {
            label: 'Intervalo de Confiança e Tamanho Mínimo de Amostra',
            latex: 'IC = \\bar{x} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}, \\qquad n \\ge \\left(\\frac{z_{\\alpha/2}\\,\\sigma}{E}\\right)^2',
            note: 'Para 95% de confiança use z = 1,96; para n < 30 e σ desconhecido use t-Student.',
          },
          {
            label: 'Regra de Decisão via p-Valor',
            latex: 'p\\text{-valor} < \\alpha \\implies \\text{Rejeita } H_0 \\quad (\\text{estatisticamente significativo})',
            note: 'p-valor NÃO é a probabilidade de H₀ ser verdadeira!',
          },
        ],
      },
      {
        id: 'est-correlacao-regressao',
        title: '6. Correlação Linear de Pearson e Regressão Linear Simples (Mínimos Quadrados)',
        content: `### Coeficiente de Correlação Linear de Pearson ($r$)
Mede a **força e direção da associação linear** entre duas variáveis quantitativas $X$ e $Y$, assumindo valores em $[-1, +1]$:
$$r = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^n (x_i - \\bar{x})^2 \\cdot \\sum_{i=1}^n (y_i - \\bar{y})^2}}$$
- $r = +1$: correlação linear positiva perfeita; $r = -1$: negativa perfeita.
- $r = 0$: ausência de relação **linear** — **CUIDADO!** Duas variáveis podem ter relação determinística forte e não-linear (ex.: $y = x^2$ simétrico em torno de zero) e apresentar $r = 0$!
- **Regra de ouro científica**: **Correlação NÃO implica causalidade!** (Consumo de sorvete e afogamentos têm altíssimo $r > 0$, mas ambos são causados por uma terceira variável confundidora: o verão!).

### Regressão Linear Simples (Método dos Mínimos Quadrados — MQO)
Ajusta uma reta $\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x$ minimizando a soma dos quadrados dos resíduos $SQR = \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$:
$$\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = r \\cdot \\frac{s_y}{s_x}, \\qquad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$
- **Propriedade geométrica**: a reta de mínimos quadrados passa obrigatoriamente pelo centroide $(\\bar{x}, \\bar{y})$, e a soma dos resíduos $\\sum (y_i - \\hat{y}_i)$ é sempre **zero**.
- **Coeficiente de Determinação ($R^2$)**: indica a fração da variância total de $Y$ explicada pelo modelo linear ($0 \\le R^2 \\le 1$). Na regressão linear simples, **$R^2 = r^2$**! (Ex.: $r = -0{,}9 \\implies R^2 = 0{,}81$, ou seja, $81\\%$ da variação de $Y$ é explicada linearmente por $X$.)

#### Exemplo Numérico Resolvido Passo a Passo (MQO)
Um benchmark mediu o tempo de execução $y$ (ms) para tamanhos de entrada $x$: $(1, 3)$, $(2, 5)$, $(3, 6)$, $(4, 10)$.
1. Médias: $\\bar{x} = \\frac{1+2+3+4}{4} = 2{,}5$; $\\bar{y} = \\frac{3+5+6+10}{4} = 6{,}0$.
2. Desvios $(x_i - \\bar{x})$: $-1{,}5,\\; -0{,}5,\\; +0{,}5,\\; +1{,}5 \\implies \\sum (x_i - \\bar{x})^2 = 2{,}25 + 0{,}25 + 0{,}25 + 2{,}25 = 5{,}0$.
3. Desvios $(y_i - \\bar{y})$: $-3,\\; -1,\\; 0,\\; +4 \\implies \\sum (y_i - \\bar{y})^2 = 9 + 1 + 0 + 16 = 26{,}0$.
4. Produto cruzado: $\\sum (x_i - \\bar{x})(y_i - \\bar{y}) = (-1{,}5)(-3) + (-0{,}5)(-1) + (0{,}5)(0) + (1{,}5)(4) = 4{,}5 + 0{,}5 + 0 + 6{,}0 = 11{,}0$.
5. Coeficientes da reta:
   - $\\hat{\\beta}_1 = \\frac{11{,}0}{5{,}0} = \\mathbf{2{,}2\\text{ ms/unidade}}$.
   - $\\hat{\\beta}_0 = 6{,}0 - 2{,}2(2{,}5) = 6{,}0 - 5{,}5 = \\mathbf{0{,}5\\text{ ms}}$.
   - **Equação ajustada**: $\\hat{y} = 0{,}5 + 2{,}2x$. Para $x = 5$: $\\hat{y}(5) = 11{,}5\\text{ ms}$.
6. Qualidade do ajuste: $r = \\frac{11}{\\sqrt{5 \\times 26}} = \\frac{11}{\\sqrt{130}} \\approx 0{,}965 \\implies R^2 = r^2 = \\frac{121}{130} \\approx \\mathbf{93{,}1\\%}$!`,
        keyFormulas: [
          {
            label: 'Estimadores de Mínimos Quadrados (Regressão Linear Simples)',
            latex: '\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2} = r\\frac{s_y}{s_x}, \\qquad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1\\bar{x}',
          },
          {
            label: 'Coeficiente de Determinação R²',
            latex: 'R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2} = r^2 \\quad (\\text{na regressão simples})',
          },
        ],
        codeExample: {
          language: 'python',
          title: 'Estatísticas Descritivas, CV e Regressão Linear MQO em Python Puro',
          code: `import math

def estatisticas_e_regressao(xs, ys):
    n = len(xs)
    mx = sum(xs) / n
    my = sum(ys) / n
    sxx = sum((x - mx) ** 2 for x in xs)
    syy = sum((y - my) ** 2 for y in ys)
    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys))

    sx = math.sqrt(sxx / (n - 1))     # Desvio-padrao amostral (n - 1)
    cv_x = sx / mx                    # Coeficiente de variacao (dispersao relativa)
    beta1 = sxy / sxx                 # Inclinacao MQO
    beta0 = my - beta1 * mx           # Intercepto MQO
    r = sxy / math.sqrt(sxx * syy)    # Correlacao de Pearson
    r2 = r ** 2                       # Coeficiente de determinacao
    return {"media_x": mx, "dp_x": sx, "CV_x": cv_x,
            "beta0": beta0, "beta1": beta1, "r": r, "R2": r2}`,
        },
      },
    ],
    inepTraps: [
      'Achar que multiplicar todos os dados por um fator constante (ex.: reduzir todos os preços em 30% $\\Rightarrow Y = 0{,}7X$) altera a dispersão relativa ($CV$): **FALSO!** Tanto a média quanto o desvio-padrão são multiplicados por $0{,}7$, portanto $CV = \\sigma/\\mu$ permanece **exatamente inalterado** (ENADE 2017 Q15!).',
      'Confundir eventos **mutuamente exclusivos** ($P(A\\cap B)=0$) com eventos **independentes** ($P(A\\cap B)=P(A)P(B)$): dois eventos com probabilidade positiva NÃO podem ser simultaneamente exclusivos e independentes!',
      'Interpretar o **p-valor** como "a probabilidade de $H_0$ ser verdadeira": **ERRADO!** O p-valor é a probabilidade dos *dados* (ou mais extremos) assumindo $H_0$ verdadeira — é $P(\\text{dados} \\mid H_0)$, jamais $P(H_0 \\mid \\text{dados})$!',
      'Achar que dobrar o tamanho da amostra $n$ reduz a margem de erro pela metade: como $E \\propto 1/\\sqrt{n}$, é necessário **quadruplicar** $n$ para dividir a margem de erro por 2.',
      'Concluir que $r = 0$ implica independência entre $X$ e $Y$ (só indica ausência de associação *linear*!) ou que $r \\approx 0{,}98$ prova relação de causa e efeito.',
    ],
    quickChecklist: [
      'Sei prever imediatamente o efeito de $Y = aX + b$ sobre média, mediana, variância, desvio-padrão e $CV$?',
      'Sei quando usar Mediana (dados assimétricos/outliers) vs Média e por que variância amostral divide por $n-1$?',
      'Sei aplicar o Teorema de Bayes para problemas de falso positivo (IDS, testes diagnósticos, spam)?',
      'Sei diferenciar Binomial ($n$ ensaios fixos, $E=np$) de Poisson (taxa $\\lambda$ em intervalo contínuo, $E=\\text{Var}=\\lambda$)?',
      'Sei usar a regra empírica da Normal (68% – 95% – 99,7%) e a falta de memória da Exponencial?',
      'Entendo o Teorema Central do Limite e a fórmula do erro padrão $\\sigma/\\sqrt{n}$?',
      'Sei distinguir Erro Tipo I ($\\alpha$) de Erro Tipo II ($\\beta$) e decidir um teste usando o p-valor?',
      'Sei calcular $\\hat{\\beta}_1$, $\\hat{\\beta}_0$, $r$ e $R^2$ em uma regressão linear simples?',
    ],
  },

  // =========================================================================
  // MÓDULO 14: FÍSICA, CIÊNCIA DOS MATERIAIS, GESTÃO E LEGISLAÇÃO
  // =========================================================================
  {
    id: 'fisica-materiais-gestao',
    title: 'Física, Ciência dos Materiais, Gestão e Legislação',
    subtitle: 'Mecânica, Hidrostática, Termodinâmica, Materiais, Ensaios Mecânicos, Toyotismo, Green IT, Marco Civil e LGPD',
    estimatedMinutes: 75,
    overview:
      'Este módulo cobre o bloco interdisciplinar de formação básica e profissionalizante exigido pelas Diretrizes Curriculares de Engenharia da Computação: Física aplicada (Mecânica, Hidrostática, Termodinâmica, Eletromagnetismo/Efeito Joule), Ciência dos Materiais e Ensaios Mecânicos, Gestão da Produção (Fordismo vs Toyotismo/JIT/Kanban/Kaizen), Computação Verde e Virtualização, Ética Profissional e o marco legal brasileiro de tecnologia (Marco Civil da Internet e LGPD).',
    enadeWeightNote:
      'Embora rotulada como "complementar" individualmente, a soma destes tópicos rende **5 a 7 questões** em uma prova típica do ENADE! E mais importante: são questões de **altíssimo retorno por minuto estudado**, como demonstram a Lei de Stevin (ENADE 2017 Q14), Cerâmicos em escudos térmicos (Q13), Diagrama $\\sigma\\times\\varepsilon$ (Q09), Flexão a 3 pontos (Q18), Efeito Joule (Q16), Gestão Toyota e Marco Civil Art. 21 (Q30).',
    sections: [
      {
        id: 'fis-mecanica-hidrostatica',
        title: '1. Mecânica, Conservação de Energia e Hidrostática (Lei de Stevin)',
        content: `### Mecânica Clássica e Conservação de Energia
- **Leis de Newton**: 1ª Lei (Inércia), 2ª Lei ($\\mathbf{F}_{\\text{res}} = m\\mathbf{a}$), 3ª Lei (Ação e Reação — atuam em **corpos distintos**!).
- **Trabalho e Potência**: $W = F \\cdot d \\cdot \\cos\\theta$ (em Joules, $\\text{J} = \\text{N}\\cdot\\text{m}$) e Potência $P = \\frac{W}{\\Delta t} = F \\cdot v$ (em Watts, $\\text{W} = \\text{J/s}$).
- **Teorema Trabalho–Energia Cinética**: $W_{\\text{res}} = \\Delta E_c = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_0^2$.
- **Conservação da Energia Mecânica** (ausência de forças dissipativas como atrito/arrasto):
$$E_{\\text{mec}} = E_c + E_{p,\\text{grav}} + E_{p,\\text{elást}} = \\frac{1}{2}mv^2 + mgh + \\frac{1}{2}kx^2 = \\text{constante}$$

### Hidrostática: Stevin, Pascal e Arquimedes
- **Massa específica (densidade)**: $\\rho = \\frac{m}{V}$ ($\\text{kg/m}^3$; água doce $\\approx 1000\\text{ kg/m}^3$, água do mar $\\approx 1025\\text{ kg/m}^3$).
- **Pressão**: $P = \\frac{F}{A}$ ($1\\text{ Pa} = 1\\text{ N/m}^2$; $1\\text{ kPa} = 10^3\\text{ Pa}$; $1\\text{ atm} \\approx 101{,}3\\text{ kPa}$).
- **FOCO ENADE (2017 Q14!) — Lei de Stevin (Pressão Hidrostática)**:
$$P_{\\text{abs}}(z) = P_{\\text{atm}} + \\rho g z, \\qquad P_{\\text{hid}}(z) = \\rho g z$$
  - **Interpretação Gráfica Vital**:
    - A pressão hidrostática pura $P_{\\text{hid}}$ é **diretamente proporcional** à profundidade $z$ $\\implies$ o gráfico $P_{\\text{hid}} \\times z$ (ou $z \\times P_{\\text{hid}}$) é uma **reta passando pela origem $(0, 0)$**!
    - Já a pressão *absoluta* $P_{\\text{abs}}$ é uma reta que corta o eixo em $P_{\\text{atm}} \\approx 101\\text{ kPa}$ quando $z = 0$!
    - A pressão depende **apenas** de $\\rho$, $g$ e da profundidade vertical $z$ — **NÃO** depende do formato do recipiente (Paradoxo Hidrostático!).
- **Princípio de Pascal**: um acréscimo de pressão em um fluido incompressível transmite-se integralmente a todos os pontos $\\implies$ Prensa Hidráulica: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ (multiplica força, mas conserva trabalho: $F_1 d_1 = F_2 d_2$).
- **Princípio de Arquimedes (Empuxo)**: $E = \\rho_{\\text{fluido}} \\cdot V_{\\text{submerso}} \\cdot g$ (força vertical para cima igual ao peso do fluido deslocado).

#### Exemplo Numérico Resolvido (Padrão ENADE 2017 Q14!)
Um sensor submarino opera no oceano ($\\rho = 1025\\text{ kg/m}^3$, $g = 9{,}8\\text{ m/s}^2$). Qual a pressão hidrostática (manométrica) a $z = 1000\\text{ m}$ de profundidade?
1. $P_{\\text{hid}} = \\rho g z = 1025 \\times 9{,}8 \\times 1000 = 10.045.000\\text{ Pa}$.
2. Convertendo para quilopascal: $P_{\\text{hid}} = \\mathbf{10.045\\text{ kPa}} \\approx 10{,}05\\text{ MPa}$ (cerca de 100 atmosferas!).
3. Observe a taxa linear: a cada $10\\text{ m}$ de profundidade em água, a pressão cresce aproximadamente **$1\\text{ atm} \\approx 100\\text{ kPa}$** (atalho mental excelente para conferir gráficos na prova!).`,
        keyFormulas: [
          {
            label: 'Lei de Stevin (Pressão Absoluta e Hidrostática)',
            latex: 'P_{\\text{abs}}(z) = P_{\\text{atm}} + \\rho g z, \\qquad P_{\\text{hid}}(z) = \\rho g z',
            note: 'Sem P_atm, o gráfico z × P passa pela origem (0,0) com relação linear (ENADE 2017 Q14!).',
          },
          {
            label: 'Pascal, Arquimedes e Conservação de Energia',
            latex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2}, \\qquad E = \\rho_f V_{\\text{sub}} g, \\qquad \\frac{1}{2}mv^2 + mgh = \\text{const.}',
          },
        ],
      },
      {
        id: 'fis-termo-eletromag',
        title: '2. Termodinâmica, Transferência de Calor, Eletromagnetismo e Efeito Joule',
        content: `### Termodinâmica e Transferência de Calor (Dissipação Térmica de Hardware!)
- **1ª Lei da Termodinâmica** (Conservação de Energia): $\\Delta U = Q - W$, onde $\\Delta U$ é a variação de energia interna, $Q$ o calor recebido e $W$ o trabalho realizado pelo gás.
- **2ª Lei da Termodinâmica**: o calor flui espontaneamente do corpo mais quente para o mais frio; a entropia total de um sistema isolado nunca diminui; nenhuma máquina térmica operando em ciclo atinge 100% de rendimento. O rendimento máximo teórico é o de **Carnot** (temperaturas **obrigatoriamente em Kelvin**, $T_K = T_C + 273{,}15$):
$$\\eta_{\\text{Carnot}} = 1 - \\frac{T_{\\text{fria}}}{T_{\\text{quente}}}$$
- **Os 3 Mecanismos de Transferência de Calor**:
  1. **Condução** (Lei de Fourier): transferência por agitação molecular em sólidos/contato (ex.: CPU $\\to$ pasta térmica $\\to$ base de cobre do dissipador). Fluxo térmico: $\\Phi = \\frac{k A \\Delta T}{L}$, onde $k$ é a condutividade térmica.
  2. **Convecção** (Lei de Newton): transporte de calor pelo movimento de fluidos — *natural* (diferença de densidade) ou *forçada* (ventoinhas/coolers e *water cooling*). $\\Phi = h A (T_s - T_\\infty)$.
  3. **Radiação** (Lei de Stefan-Boltzmann): emissão de ondas eletromagnéticas (infravermelho); é o **único mecanismo que ocorre no vácuo**! $\\Phi = \\varepsilon \\sigma A T^4$.

### Eletromagnetismo Essencial e Efeito Joule (ENADE 2017 Q03 e Q16!)
- **Força de Lorentz**: uma carga $q$ com velocidade $\\mathbf{v}$ em campos $\\mathbf{E}$ e $\\mathbf{B}$ sofre $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$. A força magnética é sempre perpendicular a $\\mathbf{v}$, portanto **não realiza trabalho** (altera apenas a direção da velocidade, não o módulo!).
- **Lei de Indução de Faraday-Lenz**: a variação do fluxo magnético $\\Phi_B$ através de uma espira induz uma força eletromotriz $\\varepsilon = -\\frac{d\\Phi_B}{dt}$, cujo sinal negativo (Lenz) indica oposição à causa da variação. É o princípio de geradores, transformadores, carregamento indutivo e interferência eletromagnética (EMI) em cabos paralelos!
- **Efeito Joule**: conversão de energia elétrica em **energia térmica** devido às colisões dos elétrons com a rede cristalina de um condutor com resistência $R\\,$:
$$P = V \\cdot I = R \\cdot I^2 = \\frac{V^2}{R}, \\qquad E_{\\text{kWh}} = P_{\\text{kW}} \\times \\Delta t_{\\text{h}}$$
  - *Tema recorrente no ENADE (2017 Q16!)*: dispositivos puramente resistivos de aquecimento (chuveiro elétrico no inverno, ferro de passar, aquecedor, lâmpada incandescente — que desperdiça ~90% em calor!) são os grandes vilões da conta de luz. Já cabos subdimensionados (fios finos) têm maior resistência $R = \\rho L / A$ e superaquecem por Efeito Joule!

#### Exemplo Numérico Resolvido (Eficiência Energética — ENADE 2017 Q03!)
Substituir 10 lâmpadas incandescentes de $60\\text{ W}$ por 10 lâmpadas LED de $9\\text{ W}$ ligadas $5\\text{ h/dia}$ durante $30\\text{ dias}$, com tarifa de R$ 0,80/kWh:
1. Potência economizada: $\\Delta P = 10 \\times (60 - 9) = 510\\text{ W} = 0{,}51\\text{ kW}$.
2. Horas mensais: $\\Delta t = 5 \\times 30 = 150\\text{ h}$.
3. Energia economizada: $\\Delta E = 0{,}51 \\times 150 = \\mathbf{76{,}5\\text{ kWh/mês}}$.
4. Economia financeira: $76{,}5 \\times 0{,}80 =$ **R$ 61,20/mês** (redução de $85\\%$ no consumo de iluminação!).`,
        keyFormulas: [
          {
            label: 'Rendimento de Carnot e Condução Térmica (Fourier)',
            latex: '\\eta_{\\text{Carnot}} = 1 - \\frac{T_F}{T_Q} \\;(\\text{em K}), \\qquad \\Phi = \\frac{k A \\Delta T}{L}',
          },
          {
            label: 'Efeito Joule, Consumo em kWh e Lei de Faraday-Lenz',
            latex: 'P = R I^2 = \\frac{V^2}{R}, \\qquad E_{\\text{kWh}} = P_{\\text{kW}} \\cdot \\Delta t_{\\text{h}}, \\qquad \\varepsilon = -\\frac{d\\Phi_B}{dt}',
          },
        ],
      },
      {
        id: 'fis-ciencia-materiais',
        title: '3. Ciência dos Materiais, Diagrama Tensão-Deformação e Flexão a 3 Pontos',
        content: `### Classificação Geral dos Materiais de Engenharia
| Classe | Ligações Atômicas | Propriedades Mecânicas | Propriedades Térmicas e Elétricas | Aplicações em Engenharia da Computação |
| --- | --- | --- | --- | --- |
| **Metais** (Cu, Al, Au, Fe) | Ligação metálica ("mar de elétrons") | **Dúcteis**, alta tenacidade, rígidos | **Altíssima** condutividade elétrica e térmica | Trilhas de cobre em PCB, dissipadores de alumínio, conectores banhados a ouro |
| **Polímeros** (PVC, ABS, Epóxi) | Covalentes na cadeia + secundárias fracas | Baixa densidade, flexíveis, baixa rigidez | **Isolantes** térmicos e elétricos | Isolação de cabos, gabinetes, resinas de encapsulamento (*termoplásticos* refundem; *termorrígidos* não!) |
| **Cerâmicos** (Alumina, Sílica, Porcelana) | Iônicas e/ou covalentes fortes | Altíssima dureza, **frágeis** à tração, alta resistência à compressão | **Isolantes** térmicos e elétricos, **baixíssima dilatação térmica**, altíssimo ponto de fusão | **Escudos térmicos espaciais (ENADE 2017 Q13!)**, substratos eletrônicos, capacitores cerâmicos, fibras ópticas |
| **Compósitos** (FR-4, Fibra de Carbono) | Matriz + fase de reforço | Alta razão resistência/peso | Sob medida conforme componentes | Placas de circuito impresso (epóxi + fibra de vidro FR-4), estruturas aeroespaciais |
| **Semicondutores** (Si, Ge, GaAs) | Covalentes (banda proibida estreita) | Frágeis (cristais puros) | Condutividade controlável por **dopagem** (tipo P/N) e temperatura | Microprocessadores, memórias, sensores, LEDs e células fotovoltaicas |

> **Por que cerâmicos porosos protegem veículos espaciais na reentrada (ENADE 2017 Q13)?** Dois motivos técnicos combinados: (1) **baixa condutividade térmica** (isola o calor extremo externo) e (2) **baixo coeficiente de dilatação térmica** (resiste a choques térmicos brutais sem trincar por expansão diferencial)!

### FOCO ENADE (2017 Q09!): Diagrama Tensão ($\\sigma$) × Deformação ($\\varepsilon$)
No ensaio de tração uniaxial, definem-se a tensão nominal $\\sigma = \\frac{F}{A_0}$ (em MPa) e a deformação específica adimensional $\\varepsilon = \\frac{\\Delta L}{L_0}$:
1. **Região Elástica (Linear)**: deformação **reversível** (retorna ao tamanho original ao retirar a carga). Vale a **Lei de Hooke**: $\\sigma = E \\cdot \\varepsilon$.
   - **Módulo de Elasticidade (Young, $E$)**: é a **inclinação (coeficiente angular)** da reta elástica inicial! Quanto mais íngreme/vertical a reta inicial, maior $E$ e mais **rígido** é o material.
2. **Limite de Escoamento ($\\sigma_e$)**: transição entre comportamento elástico e plástico.
3. **Região Plástica**: deformação **permanente** até atingir o **Limite de Resistência à Tração (LRT)** (pico da curva) e finalmente a **Ruptura**.
4. **Ductilidade vs Fragilidade**: materiais **dúcteis** (ex.: aço carbono, cobre) percorrem longa extensão horizontal no eixo $\\varepsilon$ antes de romper; materiais **frágeis** (ex.: vidro, cerâmicas, ferro fundido) rompem logo após a região elástica com mínima deformação plástica!
5. **Tenacidade**: energia total absorvida até a fratura $=$ **área total sob a curva** $\\sigma \\times \\varepsilon$ (diferente de *resiliência*, que é apenas a área da região elástica).

### FOCO ENADE (2017 Q18!): Ensaio de Flexão a 3 Pontos
Para um corpo de prova de seção retangular (largura $w$, espessura/altura $h$) apoiado sobre um vão $d$ sob carga central $F$, a tensão máxima de tração na face inferior é:
$$\\sigma_{\\text{flex}} = \\frac{3 F d}{2 w h^2}$$
Isolando a força de ruptura $F_{\\text{rup}}$ para um mesmo material ($\\sigma_{\\text{rup}}$ constante) e mesmo vão $d$:
$$F_{\\text{rup}} = \\frac{2 \\sigma_{\\text{rup}}}{3 d} \\cdot (w \\cdot h^2) \\implies F_{\\text{rup}} \\propto w \\cdot h^2$$
**Atenção ao expoente quadrático em $h^2$!** Dobrar a espessura $h$ **quadruplica** a carga suportada, enquanto dobrar a largura $w$ apenas a dobra!

#### Exemplo Numérico Resolvido (Exatamente no estilo ENADE 2017 Q18!)
Duas barras $A$ e $B$ do mesmo material são testadas no mesmo vão $d$. A barra $A$ tem largura **$w_A = 3 w_B$** e espessura **$h_A = \\frac{1}{2} h_B$**. Qual a razão $F_A / F_B$ das forças de ruptura?
$$\\frac{F_A}{F_B} = \\frac{w_A \\cdot h_A^2}{w_B \\cdot h_B^2} = \\left(\\frac{3 w_B}{w_B}\\right) \\cdot \\left(\\frac{0{,}5 h_B}{h_B}\\right)^2 = 3 \\times 0{,}25 = \\mathbf{0{,}75 \\; (75\\%)}$$
Ou seja, mesmo sendo 3 vezes mais larga, a barra $A$ suporta apenas **75%** da carga de $B$ porque sua espessura caiu pela metade!`,
        keyFormulas: [
          {
            label: 'Lei de Hooke e Módulo de Elasticidade (Young)',
            latex: '\\sigma = \\frac{F}{A_0}, \\qquad \\varepsilon = \\frac{\\Delta L}{L_0}, \\qquad E = \\frac{\\sigma}{\\varepsilon}',
            note: 'E é a inclinação inicial da curva σ × ε (ENADE 2017 Q09!).',
          },
          {
            label: 'Tensão de Flexão a 3 Pontos (ENADE 2017 Q18)',
            latex: '\\sigma_{\\text{flex}} = \\frac{3 F d}{2 w h^2} \\implies \\frac{F_A}{F_B} = \\frac{w_A}{w_B}\\left(\\frac{h_A}{h_B}\\right)^2',
            note: 'A espessura h entra ao QUADRADO no denominador!',
          },
        ],
      },
      {
        id: 'fis-gestao-producao',
        title: '4. Gestão da Produção: Fordismo vs Toyotismo, JIT, Kanban e Kaizen',
        content: `### Fordismo vs Toyotismo (Lean Manufacturing)
| Dimensão | Fordismo / Taylorismo (Produção em Massa) | Toyotismo / Sistema Toyota de Produção (Enxuta) |
| --- | --- | --- |
| **Lógica de Fluxo** | Produção **empurrada** (baseada em previsão) | Produção **puxada** pela demanda real do cliente |
| **Estoques** | **Elevados** ("just in case") | **Mínimos / Zero** (*Just in Time*) |
| **Variedade** | Alta padronização, baixa flexibilidade | Alta flexibilidade, lotes pequenos e customizados |
| **Mão de obra** | Especialização rígida em tarefa única repetitiva | Trabalhador **multifuncional**, trabalho em equipe, autonomia |
| **Qualidade** | Inspeção corretiva apenas no final da linha | **Qualidade na fonte** (*Jidoka* — parar ao detectar erro) |
| **Foco** | Economia de escala | **Eliminação sistemática de desperdícios** (*Muda*) |

### Pilares e Ferramentas do Sistema Toyota (Lean)
1. **Just in Time (JIT)**: produzir e entregar o item certo, na quantidade exata, no momento exato — reduz custos de armazenagem, capital imobilizado e obsolescência, combatendo os **7 desperdícios clássicos** (superprodução, espera, transporte, superprocessamento, estoque, movimentação desnecessária e defeitos).
2. **Kanban**: sistema visual de sinalização (cartões físicos ou quadros digitais) que autoriza produção ou reposição somente quando a etapa seguinte consome o item. Na Engenharia de Software, inspirou o fluxo contínuo com **limite de trabalho em progresso (WIP)**.
3. **Kaizen**: filosofia de **melhoria contínua** incremental, de baixo custo e participativa, envolvendo operadores, engenheiros e gestores diariamente.
4. **Jidoka e Poka-Yoke**: *Jidoka* (autonomação) dota máquinas/processos de capacidade de detectar anomalias e parar automaticamente; *Poka-Yoke* são mecanismos à prova de erro humano (ex.: conector USB-C simétrico ou testes automatizados no pipeline CI/CD bloqueando deploy com falha).
5. **Ferramentas Clássicas de Qualidade**:
   - **Ciclo PDCA**: *Plan* (planejar metas/métodos) $\\to$ *Do* (executar) $\\to$ *Check* (verificar resultados com indicadores) $\\to$ *Act* (agir corretivamente e padronizar).
   - **Diagrama de Ishikawa (Espinha de Peixe)**: analisa causa-efeito agrupada nos **6M** (Método, Máquina, Mão de obra, Material, Medição, Meio ambiente).
   - **Gráfico de Pareto (Regra 80/20)**: identifica os ~20% de causas vitais responsáveis por ~80% dos defeitos/custos.`,
      },
      {
        id: 'fis-computacao-verde',
        title: '5. Computação Verde (Green IT), Virtualização e Sustentabilidade em TI',
        content: `### Impacto Ambiental da Tecnologia e Eficiência em Data Centers
A Computação Verde (*Green IT*) busca projetar, operar e descartar sistemas computacionais com o mínimo impacto ambiental ao longo de todo o seu ciclo de vida:
- **PUE (*Power Usage Effectiveness*)**: principal métrica de eficiência energética de Data Centers:
$$\\text{PUE} = \\frac{\\text{Energia Total Consumida pelo Data Center}}{\\text{Energia Consumida pelos Equipamentos de TI}}$$
  - Valor teórico ideal: $\\text{PUE} = 1{,}0$ (100% da energia iria para servidores/switches, zero desperdício em refrigeração e perdas elétricas). Data centers modernos eficientes operam entre $1{,}1$ e $1{,}3$; instalações antigas chegam a $> 2{,}0$.
- **Virtualização e Consolidação de Servidores (ALVO CLÁSSICO DO ENADE!)**:
  - Servidores físicos dedicados a uma única aplicação costumam operar com apenas **10% a 15% de utilização média de CPU**, mas consomem 50% a 70% de sua potência de pico mesmo ociosos!
  - Ao consolidar múltiplas Máquinas Virtuais (VMs) ou **Containers** em poucos servidores físicos (via hipervisor como KVM/VMware/Hyper-V), eleva-se a utilização para 65%–80%, **reduzindo drasticamente**: (a) consumo direto de energia elétrica, (b) carga térmica e gasto com ar-condicionado, (c) espaço físico e (d) produção futura de lixo eletrônico!
- **Outras Práticas de Green Computing**:
  - **Hardware**: escalonamento dinâmico de tensão e frequência (**DVFS**), modos de suspensão (*sleep/idle states*), substituição de HDDs por SSDs, arquiteturas ARM de baixa potência em Edge/IoT e refrigeração por corredores quentes/frios ou *free cooling*.
  - **Lixo Eletrônico (REEE) e Logística Reversa**: placas e baterias contêm metais pesados tóxicos (chumbo, mercúrio, cádmio, lítio). No Brasil, a **Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010)** institui a responsabilidade compartilhada e a **logística reversa** obrigatória para eletroeletrônicos (além da diretiva europeia **RoHS**, que restringe substâncias perigosas como solda com chumbo).

#### Exemplo Numérico Resolvido (Impacto da Virtualização + PUE)
Uma empresa consolida **20 servidores físicos** ($300\\text{ W}$ cada) em **4 servidores virtualizados** ($450\\text{ W}$ cada), operando 24h/dia em um data center com $\\text{PUE} = 1{,}5$. Qual a economia anual de energia (365 dias $\\approx 8.760\\text{ h}$)?
1. Potência de TI antes: $20 \\times 300\\text{ W} = 6.000\\text{ W} = 6{,}0\\text{ kW}$. Com PUE $1{,}5$: $P_{\\text{total,antes}} = 6{,}0 \\times 1{,}5 = 9{,}0\\text{ kW}$.
2. Potência de TI depois: $4 \\times 450\\text{ W} = 1.800\\text{ W} = 1{,}8\\text{ kW}$. Com PUE $1{,}5$: $P_{\\text{total,depois}} = 1{,}8 \\times 1{,}5 = 2{,}7\\text{ kW}$.
3. Redução de potência: $\\Delta P = 9{,}0 - 2{,}7 = \\mathbf{6{,}3\\text{ kW}}$ ($70\\%$ de economia!).
4. Economia anual: $\\Delta E = 6{,}3 \\times 8.760 = \\mathbf{55.188\\text{ kWh/ano}}$!`,
        keyFormulas: [
          {
            label: 'Power Usage Effectiveness (PUE)',
            latex: '\\text{PUE} = \\frac{E_{\\text{Total Data Center}}}{E_{\\text{Equipamentos de TI}}} \\ge 1{,}0',
            note: 'Quanto mais próximo de 1,0, menor o desperdício com refrigeração, iluminação e perdas de UPS.',
          },
        ],
      },
      {
        id: 'fis-etica-legislacao',
        title: '6. Ética Profissional, Marco Civil da Internet (12.965/2014) e LGPD (13.709/2018)',
        content: `### Ética na Engenharia da Computação
Pelo Código de Ética Profissional (CONFEA/CREA e diretrizes internacionais ACM/IEEE), o engenheiro deve:
- Colocar a **segurança, a saúde, o meio ambiente e o bem-estar público** acima de interesses comerciais imediatos;
- Assumir responsabilidade técnica apenas por atividades para as quais possua competência (emissão de **ART** — Anotação de Responsabilidade Técnica);
- Respeitar propriedade intelectual (Lei de Software nº 9.609/1998 — proteção equiparada ao direito autoral por 50 anos; licenças Open Source como MIT, Apache e GPL) e evitar **vieses discriminatórios** e opacidade em sistemas algorítmicos.

### FOCO ENADE (2017 Q30!): Marco Civil da Internet — Lei nº 12.965/2014
Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil com base em três grandes pilares: **Neutralidade da Rede**, **Privacidade** e **Liberdade de Expressão**.
- **Neutralidade da Rede (Art. 9º)**: o responsável pela transmissão/roteamento deve tratar de forma **isonômica quaisquer pacotes de dados**, sem distinção por conteúdo, origem, destino, serviço ou aplicação (exceções estritas: requisitos técnicos indispensáveis e priorização de serviços de emergência).
- **Guarda de Registros (Logs)**:
  - **Provedor de Conexão** (ISP): guarda registros de conexão (IP, data/hora início/fim) por **1 ano** (Art. 13).
  - **Provedor de Aplicações** (sites, redes sociais): guarda registros de acesso a aplicações por **6 meses** (Art. 15).
- **Responsabilidade Civil por Conteúdo Gerado por Terceiros (PEGADINHA MÁXIMA!)**:
  - **Art. 18**: O provedor de **conexão** à internet **NÃO** será responsabilizado civilmente por danos decorrentes de conteúdo gerado por terceiros.
  - **Art. 19 (Regra Geral)**: O provedor de **aplicações** só responde civilmente se, **após ordem judicial específica**, não tomar providências para tornar indisponível o conteúdo infringente (para evitar censura privada prévia!).
  - **Art. 21 (EXCEÇÃO — COBRADA NO ENADE 2017 Q30!)**: Em caso de violação da intimidade decorrente da divulgação **sem autorização de cenas de nudez ou de atos sexuais de caráter privado**, **NÃO exige ordem judicial!** Basta a **NOTIFICAÇÃO EXTRAJUDICIAL** do participante (ou representante legal) indicando os elementos que identifiquem o material. Se o provedor deixar de indisponibilizar o conteúdo de forma diligente (no âmbito e nos limites técnicos do serviço), responde **subsidiariamente**!

### LGPD — Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)
Regula o tratamento de dados pessoais (em meio físico ou digital) para proteger os direitos fundamentais de liberdade e privacidade:

| Conceito LGPD | Definição e Papel Prático |
| --- | --- |
| **Dado Pessoal** | Informação relacionada a pessoa natural identificada ou identificável (nome, CPF, e-mail, IP, geolocalização). |
| **Dado Pessoal Sensível** | Origem racial/étnica, convicção religiosa, opinião política, filiação sindical, saúde, vida sexual, dado genético ou **biométrico** (exige proteção reforçada!). |
| **Dado Anonimizado** | Perde a possibilidade de associação ao indivíduo por meios técnicos razoáveis — **não é considerado dado pessoal** (salvo se o processo puder ser revertido). |
| **Titular** | A pessoa natural a quem se referem os dados pessoais. |
| **Controlador** | Quem toma as **decisões** referentes ao tratamento (define finalidade e meios). |
| **Operador** | Quem realiza o tratamento **em nome do controlador** (ex.: empresa de nuvem/folha terceirizada). |
| **Encarregado (DPO)** | Canal de comunicação entre controlador, titulares e a **ANPD** (Autoridade Nacional de Proteção de Dados). |

- **Princípios-chave (Art. 6º)**: Finalidade, Adequação, **Necessidade** (coletar o mínimo indispensável!), Livre Acesso, Qualidade dos Dados, Transparência, Segurança, Prevenção, Não Discriminação e Responsabilização.
- **Bases Legais (Art. 7º)**: existem **10 hipóteses legais** — o **consentimento NÃO é a única base!** Também autorizam tratamento: cumprimento de obrigação legal/regulatória, execução de políticas públicas, execução de contrato, proteção da vida, tutela da saúde, legítimo interesse e proteção ao crédito.
- **Direitos do Titular (Art. 18)**: confirmação de tratamento, acesso, correção de dados incompletos/incorretos, anonimização/eliminação de dados excessivos, **portabilidade** e revogação do consentimento.`,
      },
    ],
    inepTraps: [
      'No gráfico da Lei de Stevin (ENADE 2017 Q14), confundir **pressão hidrostática pura** ($P = \\rho g z$, passa pela origem $(0,0)$) com **pressão absoluta** ($P = P_{\\text{atm}} + \\rho g z$, corta o eixo em $101{,}3\\text{ kPa}$).',
      'No ensaio de flexão a 3 pontos (ENADE 2017 Q18), esquecer que a espessura $h$ está **ao quadrado** em $\\sigma = \\frac{3Fd}{2wh^2}$ — reduzir $h$ pela metade derruba a carga suportada para **25%** (um quarto!), não 50%!',
      'Achar que materiais **cerâmicos** são dúcteis ou bons condutores térmicos: eles são **frágeis**, **isolantes** térmicos/elétricos e possuem baixíssima dilatação térmica (ENADE 2017 Q13).',
      'Responder que o provedor de aplicações só precisa remover fotos íntimas vazadas após **ordem judicial**: **FALSO!** Pelo **Art. 21 do Marco Civil da Internet** (ENADE 2017 Q30), basta **notificação extrajudicial** da vítima!',
      'Acreditar que, sob a **LGPD**, nenhuma empresa pode tratar dados pessoais sem o consentimento expresso do titular: o consentimento é apenas **1 das 10 bases legais** (Art. 7º — execução de contrato e obrigação legal dispensam consentimento!).',
    ],
    quickChecklist: [
      'Sei aplicar Lei de Stevin ($P = P_{atm} + \\rho g z$), Pascal e conservação de energia mecânica?',
      'Sei usar temperaturas em Kelvin no rendimento de Carnot e diferenciar condução, convecção e radiação?',
      'Sei calcular consumo elétrico em kWh ($P_{kW} \\times \\Delta t_h$) e reconhecer aplicações do Efeito Joule ($P = RI^2$)?',
      'Sei comparar Metais, Polímeros, Cerâmicos, Compósitos e Semicondutores quanto a rigidez, ductilidade e condutividade?',
      'Sei ler o Módulo de Elasticidade ($E$) e a ductilidade no gráfico $\\sigma \\times \\varepsilon$ e aplicar $\\sigma_{\\text{flex}} = \\frac{3Fd}{2wh^2}$?',
      'Sei contrastar Fordismo (empurrado) vs Toyotismo (puxado, JIT, Kanban, Kaizen, Jidoka)?',
      'Sei calcular PUE e explicar por que a virtualização reduz consumo energético e lixo eletrônico?',
      'Sei a diferença entre Art. 19 (regra geral: ordem judicial) e Art. 21 (nudez não autorizada: notificação extrajudicial) do Marco Civil, e os papéis Controlador/Operador/DPO na LGPD?',
    ],
  },

  // =========================================================================
  // MÓDULO 15: FORMAÇÃO GERAL E GUIA NOTA 10 NAS DISCURSIVAS
  // =========================================================================
  {
    id: 'formacao-geral',
    title: 'Formação Geral e Guia Nota 10 nas Questões Discursivas',
    subtitle: 'Matemática da Nota, Gráficos e Porcentagens, Eixos Temáticos do INEP, Asserção-Razão e Roteiro das 15 Linhas',
    estimatedMinutes: 70,
    overview:
      'Muitos estudantes de Engenharia da Computação focam 100% no Componente Específico e negligenciam a Formação Geral — um erro estratégico caro! Este módulo desvenda a matemática oficial da nota do ENADE, blinda você contra armadilhas de leitura de gráficos e porcentagens, sintetiza todos os grandes eixos temáticos recorrentes do INEP (Agenda 2030/ODS, Gini, desastres socioambientais, SUS, direitos humanos e Tríplice Hélice), entrega algoritmos infalíveis para questões Asserção-Razão e Afirmativas I–IV, e apresenta o **Roteiro Definitivo para redigir Discursivas Nota 10 dentro do teto rígido de 15 linhas**.',
    enadeWeightNote:
      'A Formação Geral responde por **25% da nota final do ENADE**! Pior (ou melhor, para quem se prepara): a **única questão discursiva de FG** vale **40% da nota da FG**, o que equivale a **10% da sua prova inteira em no máximo 15 linhas** — mais do que **4 questões objetivas do Componente Específico somadas**! Dominar este módulo é o caminho mais rápido para garantir Conceito 5.',
    sections: [
      {
        id: 'fg-arquitetura-nota',
        title: '1. Como Funciona a Formação Geral e a Matemática Oficial da Nota no ENADE',
        content: `### Estrutura da Prova e Pesos Oficiais do INEP
O ENADE possui **40 questões** a serem resolvidas em **4 horas** (média de 6 minutos por questão, incluindo leitura, cálculos, rascunho e transcrição das discursivas). No formato atual consolidado pelo INEP (ENADE 2023+):

| Componente | Questões Objetivas | Questões Discursivas | Peso Interno (Obj / Disc) | Peso na Nota Final |
| --- | --- | --- | --- | --- |
| **Formação Geral (FG)** | 9 questões | 1 questão (até 15 linhas) | 60% Obj / **40% Disc** | **25%** |
| **Componente Específico (CE)** | 29 questões | 1 questão (até 15 linhas) | 85% Obj / 15% Disc | **75%** |

*(Nas edições anteriores até 2021 eram 8 obj + 2 disc em FG e 27 obj + 3 disc em CE, mantendo exatamente os mesmos pesos de 25% FG / 75% CE e 60%/40% na FG e 85%/15% no CE!)*

### Quanto Vale Cada Acerto na Sua Nota Final (0 a 100)?
Fazendo a conta exata no modelo 2023+:
- **1 questão objetiva de FG**: $0{,}25 \\times 0{,}60 / 9 = \\mathbf{1{,}67\\text{ pontos}}$.
- **1 questão objetiva de CE**: $0{,}75 \\times 0{,}85 / 29 = \\mathbf{2{,}20\\text{ pontos}}$.
- **1 questão discursiva de FG**: $0{,}25 \\times 0{,}40 = \\mathbf{10{,}00\\text{ pontos}}$ *(vale quase 5 objetivas de CE!)*
- **1 questão discursiva de CE**: $0{,}75 \\times 0{,}15 = \\mathbf{11{,}25\\text{ pontos}}$ *(vale mais de 5 objetivas de CE!)*

> **Conclusão Estratégica**: **JAMAIS deixe uma discursiva em branco ou mal feita por falta de tempo!** Juntas, as duas discursivas somam **21,25% da nota final**.

### Gestão Inteligente das 4 Horas de Prova
1. **Minutos 0–15**: Leia primeiro os **comandos das questões discursivas** (sem escrevê-las ainda!) para que seu cérebro já comece a ativar repertório em segundo plano.
2. **Minutos 15–55 (40 min)**: Resolva as objetivas de Formação Geral (textos longos exigem mente fresca!).
3. **Minutos 55–175 (120 min)**: Resolva as objetivas do Componente Específico em **duas passadas** (1ª passada: garanta todas as fáceis/médias; 2ª passada: ataque os cálculos longos).
4. **Minutos 175–220 (45 min)**: Planeje, redija em rascunho e passe a limpo as duas questões discursivas (~22 min cada).
5. **Minutos 220–240 (20 min)**: Transfira todas as objetivas com calma para o Cartão-Resposta conferindo numeração 1 a 1!`,
        keyFormulas: [
          {
            label: 'Fórmula Oficial da Nota Final do ENADE',
            latex: 'N_{\\text{final}} = 0{,}25\\,N_{\\text{FG}} + 0{,}75\\,N_{\\text{CE}}',
            note: 'Sendo N_FG = 0,60·Obj_FG + 0,40·Disc_FG e N_CE = 0,85·Obj_CE + 0,15·Disc_CE.',
          },
        ],
      },
      {
        id: 'fg-graficos-porcentagens',
        title: '2. Leitura Crítica de Gráficos, Tabelas e Variações Percentuais',
        content: `### Checklist de Leitura Antipegadinha para Gráficos e Infográficos
Antes de olhar as barras ou curvas de qualquer gráfico da Formação Geral, faça uma varredura de **10 segundos** em 4 elementos:
1. **Título e Subtítulo**: o que exatamente está sendo medido? Em que período e local?
2. **Unidade dos Eixos**: está em valores absolutos, **milhares**, **milhões**, **percentual (%)** ou **taxa por 100 mil habitantes**?
3. **Origem e Escala do Eixo Vertical**: o eixo Y começa no **zero** ou está **truncado** (ex.: começa em 80%, exagerando visualmente uma diferença pequena)? A escala é linear ou logarítmica?
4. **Legenda e Fonte**: há dupla escala (eixo esquerdo vs eixo direito)? Gráficos de setores (pizza) mostram apenas **proporções**, nunca o total absoluto sem o valor de referência!

### A Diferença Mortal: Pontos Percentuais (p.p.) vs Variação Percentual (%)
Suponha que a taxa de desemprego ou inadimplência suba de **$10\\%$ para $15\\%$**:
- **Diferença absoluta**: aumentou **$5\\text{ pontos percentuais (p.p.)}$** ($15 - 10$).
- **Variação percentual (relativa)**: aumentou **$\\% = \\frac{15 - 10}{10} \\times 100\\% = +50\\%$**!
O INEP frequentemente troca "5 pontos percentuais" por "5%" em uma alternativa falsa — fique em alerta máximo!

### FOCO ENADE (2017 Q01!): Atenção Absoluta à BASE de Comparação
$$\\Delta\\% = \\frac{V_{\\text{final}} - V_{\\text{inicial}}}{V_{\\text{inicial}}} \\times 100\\%, \\qquad \\text{"Quanto } B \\text{ é menor que } A\\text{?"} = \\frac{A - B}{A} \\times 100\\%$$
- **Regra gramatical da base**: o valor que vem **depois de "em relação a...", "comparado a...", "menor que..." ou "maior que..."** vai obrigatoriamente no **DENOMINADOR**!

#### Exemplo Numérico Resolvido (Baseado no ENADE 2017 Q01!)
Em uma tabela de indicadores sociais, a taxa do grupo $A$ é **$11{,}3\\%$** e a taxa do grupo $B$ é **$6{,}9\\%$**. Qual a redução percentual do grupo $B$ **em relação ao grupo $A$**?
1. Identifique a base ("em relação ao grupo $A$"): denominador $= 11{,}3$.
2. Diferença absoluta: $11{,}3 - 6{,}9 = 4{,}4\\text{ pontos percentuais}$.
3. Variação relativa:
$$\\frac{11{,}3 - 6{,}9}{11{,}3} \\times 100\\% = \\frac{4{,}4}{11{,}3} \\times 100\\% \\approx \\mathbf{38{,}94\\%}$$
- **Armadilha clássica (distrator de prova)**: quem divide erroneamente por $6{,}9$ acha $\\frac{4{,}4}{6{,}9} = 63{,}77\\%$ (isso seria quanto $A$ é *maior* que $B$, não quanto $B$ é *menor* que $A$!).

### Taxas Per Capita vs Números Absolutos
Comparar apenas números absolutos entre países ou estados de populações muito diferentes (ex.: São Paulo vs Roraima) induz a erro grave. Para comparações justas de violência, saúde ou renda, usa-se sempre a **taxa padronizada**:
$$\\text{Taxa por 100 mil hab.} = \\frac{\\text{Nº de ocorrências}}{\\text{População total}} \\times 100.000$$`,
        keyFormulas: [
          {
            label: 'Variação Percentual e Diferença Relativa à Base A',
            latex: '\\Delta\\% = \\frac{V_f - V_i}{V_i}\\times 100\\%, \\qquad \\text{Redução de } B \\text{ em relação a } A = \\frac{A - B}{A}\\times 100\\%',
            note: 'O termo após "em relação a / menor que / maior que" vai sempre no denominador (ENADE 2017 Q01!).',
          },
          {
            label: 'Taxa Padronizada por 100 Mil Habitantes',
            latex: 'T_{100\\text{k}} = \\frac{N_{\\text{casos}}}{\\text{População}} \\times 100.000',
          },
        ],
      },
      {
        id: 'fg-eixos-sustentabilidade-desigualdade',
        title: '3. Eixos Temáticos do INEP (Parte 1): ODS/Agenda 2030, Sustentabilidade e Desigualdade',
        content: `### Agenda 2030 da ONU e os 17 ODS (Modelo do "Bolo de Casamento")
A Agenda 2030 define **17 Objetivos de Desenvolvimento Sustentável (ODS)** indivisíveis. O INEP cobra frequentemente a visão sistêmica do modelo hierárquico (*Wedding Cake*):
1. **Base — Biosfera** (condição física de existência): ODS 6 (Água potável e saneamento), ODS 13 (Ação contra mudança climática), ODS 14 (Vida na água) e ODS 15 (Vida terrestre).
2. **Meio — Sociedade**: ODS 1 (Erradicação da pobreza), ODS 2 (Fome zero), ODS 3 (Saúde e bem-estar), ODS 4 (Educação de qualidade), ODS 5 (Igualdade de gênero), ODS 7 (Energia limpa), ODS 11 (Cidades e comunidades sustentáveis) e ODS 16 (Paz, justiça e instituições eficazes).
3. **Topo — Economia** (deve servir à sociedade dentro dos limites ecológicos!): ODS 8 (Trabalho decente e crescimento econômico), ODS 9 (Indústria, inovação e infraestrutura), ODS 10 (Redução das desigualdades) e ODS 12 (Consumo e produção responsáveis).
4. **Eixo Transversal**: **ODS 17 (Parcerias e meios de implementação)** conectando governos, setor privado e sociedade civil.

### Desastres Socioambientais e Sustentabilidade
- Por que a literatura e o INEP preferem **"desastre socioambiental"** em vez de "desastre natural"? Porque fenômenos climáticos (chuvas intensas, secas) tornam-se tragédias em decorrência de **decisões humanas e vulnerabilidades estruturais**: desmatamento, impermeabilização do solo urbano, ocupação irregular de encostas/várzeas por falta de política habitacional, negligência em barragens de mineração e **racismo/injustiça ambiental** (populações de baixa renda suportam desproporcionalmente os impactos ambientais).
- **Economia Circular** vs Economia Linear (extrair–produzir–descartar): projeta produtos para durabilidade, reparo, reuso, remanufatura e reciclagem, fechando o ciclo de materiais.

### Desigualdade Socioespacial e Indicadores Sociais (ENADE 2023 D1!)
| Indicador | O que Mede | Escala e Interpretação |
| --- | --- | --- |
| **Índice de Gini** | Grau de **desigualdade na distribuição de renda** (derivado da Curva de Lorenz) | **$0$** = igualdade perfeita; **$1$** = desigualdade máxima (uma pessoa detém toda a renda). Brasil historicamente $\\approx 0{,}51$–$0{,}54$ (alta desigualdade). |
| **IDH** | Desenvolvimento humano em 3 pilares: **saúde** (expectativa de vida), **educação** e **renda per capita** | $0$ a $1$ (quanto mais próximo de $1$, melhor). Prova que **crescimento do PIB sozinho não garante bem-estar social**! |
| **Segregação Socioespacial** | Separação física de grupos sociais no espaço urbano | Periferização da população pobre (longos deslocamentos, déficit de saneamento/transporte/internet) vs centros equipados; **gentrificação** (encarecimento que expulsa moradores antigos). |

- **Fosso Digital (Exclusão Digital)**: na era da computação, desigualdade não é apenas ter um smartphone — envolve conectividade banda larga de qualidade, dispositivo adequado (computador), acessibilidade e **letramento digital** para exercer cidadania, estudar e trabalhar.`,
      },
      {
        id: 'fg-eixos-cidadania-cti',
        title: '4. Eixos Temáticos do INEP (Parte 2): Saúde Pública, Direitos Humanos e CT&I (Tríplice Hélice)',
        content: `### Saúde Pública e Políticas Públicas
- **Os 3 Princípios Doutrinários do SUS** (Constituição Federal de 1988, Art. 196 — "A saúde é direito de todos e dever do Estado"):
  1. **Universalidade**: acesso garantido a todas as pessoas, sem discriminação ou exigência de contribuição prévia.
  2. **Integralidade**: atendimento completo (prevenção, atenção primária, média e alta complexidade, reabilitação).
  3. **Equidade**: **NÃO confundir com igualdade uniforme!** Equidade significa oferecer *mais atenção a quem tem maior vulnerabilidade* para reduzir desigualdades injustas!
- **Determinantes Sociais da Saúde**: saneamento básico, água tratada, habitação digna, alimentação saudável e renda impactam a saúde tanto quanto hospitais (prevenção primária reduz drasticamente custos hospitalares!).
- **Cobertura Vacinal e Desinformação**: a queda vacinal por *fake news* e hesitação vacinal ameaça a imunidade coletiva e propicia o retorno de doenças evitáveis — tema que cruza saúde pública, comunicação científica e responsabilidade de plataformas digitais.

### Direitos Humanos, Diversidade e Cidadania
- **Acessibilidade e Desenho Universal**: pela Lei Brasileira de Inclusão (Lei nº 13.146/2015), a deficiência não está apenas no corpo do indivíduo, mas na **barreira imposta pelo ambiente**! Na Engenharia da Computação, isso se materializa em acessibilidade digital (diretrizes **WCAG** — leitores de tela, contraste, legendas, navegação por teclado) e **tecnologias assistivas**.
- **Equidade de Gênero, Raça e Ações Afirmativas**: políticas de inclusão e cotas corrigem desigualdades históricas estruturais; no setor de tecnologia, times diversos reduzem **vieses algorítmicos** (ex.: reconhecimento facial com taxas de erro muito maiores em rostos negros e femininos por bases de treino desbalanceadas!).
- **Combate à Desinformação e Cultura Democrática**: alfabetização midiática, checagem de fatos, transparência de algoritmos de recomendação e respeito aos direitos fundamentais no ambiente digital.

### Ciência, Tecnologia, Inovação (CT&I) e Modelo da Tríplice Hélice (ENADE 2019 D2!)
O modelo da **Tríplice Hélice** (Etzkowitz & Leydesdorff) descreve como ecossistemas de inovação prosperam pela interação sinérgica de **três hélices institucionais**:

| Agente da Tríplice Hélice | Papel Principal | Ganhos Científicos & Tecnológicos | Ganhos Econômicos & Sociais |
| --- | --- | --- | --- |
| **1. Instituições de Ensino e Pesquisa (IES)** | Geração de conhecimento científico, formação de engenheiros/pesquisadores, laboratórios | Fomento a pesquisas aplicadas, bolsas, publicações, patentes e transferência tecnológica | Criação de *spin-offs*, incubadoras, parques tecnológicos e maior empregabilidade |
| **2. Empresas / Setor Produtivo** | Demanda real de mercado, escala produtiva, comercialização e investimento em P&D | Acesso a soluções inovadoras de ponta e laboratórios especializados | Novos produtos de alto valor agregado, competitividade, startups e geração de empregos qualificados |
| **3. Setor Público / Governo** | Financiamento (CNPq, FINEP, FAPs), infraestrutura, marcos legais e incentivos fiscais | Soberania científica e tecnológica, alinhamento da pesquisa a desafios nacionais | Desenvolvimento regional sustentável, aumento de arrecadação e serviços públicos mais eficientes |`,
      },
      {
        id: 'fg-tecnicas-objetivas',
        title: '5. Técnicas Infalíveis para Questões Asserção-Razão e Afirmativas I–IV',
        content: `### Algoritmo Blindado de 3 Passos para Asserção-Razão ("I ... PORQUE II ...")
As questões de Asserção-Razão seguem sempre a mesma matriz fixa de alternativas no ENADE:
- **(A)** As asserções I e II são proposições verdadeiras, **e a II é uma justificativa correta da I**.
- **(B)** As asserções I e II são proposições verdadeiras, **mas a II NÃO é uma justificativa correta da I**.
- **(C)** A asserção I é uma proposição verdadeira, **e a II é uma proposição falsa**.
- **(D)** A asserção I é uma proposição falsa, **e a II é uma proposição verdadeira**.
- **(E)** As asserções I e II são proposições falsas.

**Nunca leia I + PORQUE + II de uma vez só!** Nosso cérebro é enganado pela fluidez retórica e marca (A) por impulso. Execute rigorosamente este algoritmo:
1. **Passo 1 — Isolamento de I**: cubra a palavra *PORQUE* e tudo abaixo. Avalie a afirmação **I** sozinha: é Verdadeira (V) ou Falsa (F)?
2. **Passo 2 — Isolamento de II**: agora cubra **I** e *PORQUE*. Avalie a afirmação **II** sozinha: é V ou F?
   - *Atalho imediato*: se deu **(V, F) $\\to$ C**; se deu **(F, V) $\\to$ D**; se deu **(F, F) $\\to$ E**. Fim de jogo!
3. **Passo 3 — Teste da Causalidade Direta (SOMENTE se ambas forem V)**: faça a pergunta de controle:
   - *"A afirmação I acontece **por causa** da afirmação II?"* ou *"II explica o mecanismo que causa I?"*
   - **Cuidado com a Causalidade Invertida**: às vezes II é *consequência* de I (ou apenas um fato paralelo do mesmo tema) — nesses casos, o gabarito é **(B)**, e **NÃO (A)**!

#### Exemplo Demonstrativo (Gabarito B vs Gabarito A)
- *I. A virtualização de servidores reduz o consumo de energia elétrica em data centers.* (**V**)
- *PORQUE*
- *II. A Política Nacional de Resíduos Sólidos exige a logística reversa de equipamentos eletroeletrônicos descartados.* (**V**)
- **Análise**: I é verdadeira e II é verdadeira, **mas** a virtualização reduz energia elétrica porque consolida máquinas ociosas em menos hardware físico — e **não** por causa da lei de logística reversa! Logo, gabarito **B**! (Se II dissesse *"permite consolidar múltiplas máquinas virtuais em menos servidores físicos, reduzindo ociosidade e refrigeração"*, o gabarito seria **A**!)

### Método de Eliminação Cirúrgica para Questões de Afirmativas (I, II, III, IV)
1. **Caça aos Absolutismos**: desconfie fortemente de palavras extremas como *"sempre"*, *"nunca"*, *"unicamente"*, *"exclusivamente"*, *"apenas"*, *"totalmente"*, *"todos"* (só são verdadeiras em definições matemáticas/legais rigorosas; na FG e engenharia aplicada, quase sempre indicam item **FALSO**!).
2. **A Pegadinha da "Meia-Verdade"**: o INEP adora iniciar uma afirmativa com 2 linhas perfeitas tiradas do texto-base e inserir um erro sutil nas últimas 5 palavras. **Leia até o ponto final!** Se qualquer trecho é falso, a afirmativa inteira é **FALSA**.
3. **Eliminação Progressiva nas Alternativas**: não julgue todas as 4 afirmativas antes de olhar as opções! Comece pela afirmativa sobre a qual você tem **100% de certeza** e risque imediatamente as alternativas incompatíveis — frequentemente julgar 2 itens já revela a resposta única (e protege contra dúvidas no item mais difícil!).
4. **Fidelidade ao Texto-Base na FG**: na Formação Geral, uma afirmação que parece bonita fora de contexto pode contrariar o texto/gráfico apresentado. Verifique sempre o que diz o comando (*"Com base nos textos apresentados..."* vs *"Considerando o contexto..."*).`,
      },
      {
        id: 'fg-roteiro-discursiva',
        title: '6. Roteiro Passo a Passo para Discursivas Nota 10 em até 15 Linhas',
        content: `### Como a Banca do INEP Corrige sua Discursiva
Na Formação Geral, a nota da questão discursiva combina duas dimensões (no Componente Específico, o peso é 100% técnico-conteudista):
1. **Adequação ao Padrão de Resposta / Conteúdo (~80%)**: cumprimento integral de **todos os comandos** solicitados (causas, argumentos, impactos, ações), profundidade técnica/crítica e ausência de contradições.
2. **Domínio da Norma Culta e Coerência/Coesão (~20%)**: clareza, progressão lógica, conectivos adequados, ortografia, pontuação e concordância.

### As 5 Regras de Ouro do Teto de 15 Linhas
1. **Respeito absoluto ao limite**: tudo o que ultrapassar a **linha 15** é **desconsiderado** pelo avaliador! Escreva entre **12 e 15 linhas** — respostas de 4–5 linhas raramente desenvolvem o detalhamento exigido pela rubrica.
2. **Zero introdução genérica (corte a "enrolação")**: 15 linhas não comportam redação estilo ENEM de 30 linhas! Nunca desperdice 3 linhas com *"Desde a Revolução Industrial, a sociedade enfrenta desafios..."*. **Na linha 1, já comece respondendo diretamente ao item (a)!**
3. **Espelhamento explícito dos comandos (Mapa de Parágrafos)**:
   - Se a questão pede dois comandos **(a)** e **(b)**, divida sua resposta em **2 parágrafos claros** (ex.: 6–7 linhas para o comando **a** + 7–8 linhas para o comando **b**) ou enumere explicitamente **a)** e **b)** (no CE, numerar **a)** e **b)** é excelente e facilita o corretor dar 100% na rubrica!).
   - Se o comando pedir *"cite **dois** impactos e proponha **duas** ações"*, apresente **exatamente dois** impactos distintos e **duas** ações concretas (apresentar apenas 1 já corta metade da nota daquele critério!).
4. **Fórmula A.A.F. para Propostas de Intervenção**: toda medida/solução sugerida na FG deve responder a 3 perguntas em uma frase enxuta:
   - **Agente** (QUEM executa? Ex.: *poder público municipal, universidades, empresas de telecomunicação*);
   - **Ação + Meio** (O QUÊ e COMO? Ex.: *ampliar pontos gratuitos de banda larga e oficinas de letramento digital em escolas periféricas*);
   - **Finalidade** (PARA QUÊ? Ex.: *a fim de reduzir a exclusão digital e democratizar o acesso à educação e ao mercado de trabalho*).
   - *Evite chavões vazios* como "o governo deve investir mais" ou "conscientizar a população" sem dizer como e para quê!
5. **Revisão Relâmpago (60 segundos antes de passar a limpo)**:
   - Respondi a **todos** os subitens e na **quantidade** pedida?
   - Usei termos precisos do enunciado/área (sem copiar trechos literais do texto motivador!)?
   - Conectei causa $\\to$ consequência com articuladores claros (*portanto, ademais, desse modo, em contrapartida, a fim de*)?
   - Coube dentro das 15 linhas com letra legível?

> Veja abaixo um **modelo real comentado em exatamente 14 linhas** atendendo integralmente uma proposta típica de Formação Geral (desigualdade socioespacial, inclusão digital e políticas públicas)!`,
        codeExample: {
          language: 'text',
          title: 'Modelo de Resposta Discursiva Nota 10 (14 linhas — Enunciado com 2 Comandos)',
          code: `COMANDO SIMULADO:
(a) Explique duas consequências da exclusão digital para o agravamento da
    desigualdade socioeconômica no Brasil.
(b) Proponha duas ações concretas para promover a inclusão digital sustentável.

--- RESPOSTA MODELO (14 LINHAS NA FOLHA OFICIAL) ---
[L01]   A exclusão digital agrava a desigualdade socioeconômica em duas frentes
[L02] centrais. Em primeiro lugar, restringe o acesso à educação de qualidade e
[L03] à qualificação profissional, uma vez que estudantes de baixa renda sem
[L04] banda larga ou computadores ficam à margem de plataformas de ensino,
[L05] ampliando o déficit de aprendizagem. Em segundo lugar, limita a inserção
[L06] produtiva e o exercício da cidadania, pois serviços públicos, vagas de
[L07] emprego e ferramentas financeiras migraram para o meio digital.
[L08]   Para reverter esse quadro, duas ações são prioritárias. Primeiramente,
[L09] o poder público, em parceria com operadoras de telecomunicação, deve
[L10] expandir a infraestrutura de internet de alta velocidade em regiões
[L11] periféricas e rurais mediante subsídios tarifários, a fim de universalizar
[L12] a conectividade. Ademais, universidades e redes municipais de ensino devem
[L13] ofertar oficinas de letramento digital e centros de recondicionamento de
[L14] computadores, promovendo capacitação tecnológica e economia circular.

--- POR QUE ESTA RESPOSTA TIRA NOTA 10? ---
* Vai direto ao ponto na L01 (zero enrolação introdutória).
* Parágrafo 1 (L01-L07): responde o item (a) com EXATAMENTE 2 consequências
  distintas e nexo causal explícito ("uma vez que", "pois").
* Parágrafo 2 (L08-L14): responde o item (b) com 2 ações no formato A.A.F.
  (Agente + Ação/Meio + Finalidade), integrando ainda economia circular (ODS)!`,
        },
      },
    ],
    inepTraps: [
      'Confundir **pontos percentuais (p.p.)** com **variação percentual (%)** ou inverter o denominador da base de comparação ("$B$ é quantos % menor que $A$" divide sempre por $A$, não por $B$ — ENADE 2017 Q01!).',
      'Ler questões de **Asserção-Razão** na íntegra de uma vez só e cair na armadilha de marcar **(A)** quando ambas as frases são verdadeiras mas **não existe nexo causal** de II para I (gabarito correto seria **B**!).',
      'Copiar frases inteiras dos textos motivadores na resposta discursiva — a banca **zera ou penaliza severamente** cópia literal! Parafraseie com suas palavras e acrescente análise própria.',
      'Estourar o limite de **15 linhas** (tudo da linha 16 em diante é descartado!) ou gastar 4 linhas com introdução genérica estilo ENEM deixando o item `(b)` espremido e incompleto.',
      'Apresentar propostas de intervenção vagas na discursiva (ex.: *"falta conscientização"* ou *"o governo deveria resolver"*) sem detalhar **Agente + Ação concreta + Finalidade**.',
    ],
    quickChecklist: [
      'Sei que a Formação Geral vale 25% da nota final e que a discursiva de FG sozinha vale 10% da prova inteira?',
      'Sempre verifico título, unidade, origem do eixo Y e base de comparação antes de calcular porcentagens em gráficos?',
      'Sei diferenciar pontos percentuais (p.p.) de variação relativa (%) sem inverter o denominador?',
      'Domino os eixos Agenda 2030/ODS (Biosfera–Sociedade–Economia), Índice de Gini ($0$ igualdade / $1$ desigualdade) e desastres socioambientais?',
      'Sei explicar os 3 princípios do SUS (Universalidade, Integralidade, Equidade), acessibilidade/desenho universal e o modelo da Tríplice Hélice (IES + Empresas + Governo)?',
      'Aplico rigorosamente o método dos 3 passos (I isolada $\\to$ II isolada $\\to$ nexo causal) nas questões de Asserção-Razão?',
      'Sei usar eliminação progressiva e detectar absolutismos e "meias-verdades" em questões de Afirmativas I–IV?',
      'Estruturo minhas discursivas em 12–15 linhas, direto ao ponto, respondendo cada subitem na quantidade pedida e usando Agente + Ação + Finalidade?',
    ],
  },
];
