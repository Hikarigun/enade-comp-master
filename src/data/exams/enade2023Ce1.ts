import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2023_CE_1: ObjectiveQuestion[] = [
  {
    id: 'enade-2023-q10',
    source: 'enade-2023',
    year: 2023,
    number: 10,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Resistividade, Segunda Lei de Ohm e Associação de Resistores',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Os resistores são dispositivos utilizados com finalidade de limitar a corrente elétrica em um circuito elétrico. Eles conseguem desempenhar essa função por apresentarem a propriedade da resistência elétrica, que é a capacidade de um corpo se opor à passagem de corrente elétrica. Diversos materiais podem ser utilizados como resistores, tais como níquel-cromo, carbono e grafite.

Diante disso, considere uma situação hipotética em que seja preciso construir resistores cilíndricos na forma da figura a seguir, a fim de serem utilizados em um circuito de corrente contínua que possui tensão igual a $12\\text{ V}$. Na figura, $L$ representa o comprimento do material e $A$ representa a área de seção transversal.

Observe, também, a tabela a seguir, a qual especifica características de três tipos de materiais utilizados para fabricação dos resistores hipotéticos, como a resistividade $\\rho$, o comprimento $L$ e a área $A$.

| Material | $\\rho$ ($\\Omega \\cdot \\text{mm}^2/\\text{m}$) | $L$ ($\\text{m}$) | $A$ ($\\text{mm}^2$) |
| :--- | :---: | :---: | :---: |
| Carbono | 40,00 | 1,00 | 2,50 |
| Grafite | 13,00 | 1,50 | 1,50 |
| Níquel-cromo | 1,10 | 5,00 | 0,50 |`,
    images: [
      {
        src: '/images/enade-2023/q10-fig.png',
        alt: 'Diagrama de um resistor cilíndrico homogêneo indicando o comprimento L e a área da seção transversal circular A.',
        caption: 'Geometria cilíndrica dos resistores hipotéticos.',
      },
    ],
    command:
      'Com base nessas informações, é correto afirmar que, a fim de se obter a configuração de resistores viável para se ter uma corrente menor do que 300 mA, é preciso utilizar apenas',
    options: [
      { letter: 'A', text: '2 resistores de grafite em série.' },
      { letter: 'B', text: '3 resistores de carbono em série.' },
      { letter: 'C', text: '2 resistores de grafite em paralelo.' },
      { letter: 'D', text: '2 resistores de carbono em paralelo.' },
      { letter: 'E', text: '3 resistores de níquel-cromo em série.' },
    ],
    correctOption: 'B',
    explanation: `**Passo 1 — Calcular a resistência individual de cada resistor pela Segunda Lei de Ohm:**

$$R = \\rho \\cdot \\frac{L}{A}$$

Como $\\rho$ está em $\\Omega \\cdot \\text{mm}^2/\\text{m}$, $L$ em $\\text{m}$ e $A$ em $\\text{mm}^2$, as unidades se cancelam diretamente resultando em ohms ($\\Omega$):

- **Carbono:**
  $$R_{\\text{C}} = 40{,}00 \\cdot \\frac{1{,}00}{2{,}50} = 16\\,\\Omega$$

- **Grafite:**
  $$R_{\\text{G}} = 13{,}00 \\cdot \\frac{1{,}50}{1{,}50} = 13\\,\\Omega$$

- **Níquel-cromo:**
  $$R_{\\text{NC}} = 1{,}10 \\cdot \\frac{5{,}00}{0{,}50} = 11\\,\\Omega$$

**Passo 2 — Determinar a resistência equivalente mínima necessária (Primeira Lei de Ohm):**

Para $V = 12\\text{ V}$ e corrente $I < 300\\text{ mA} = 0{,}3\\text{ A}$:

$$I = \\frac{V}{R_{\\text{eq}}} < 0{,}3 \\implies R_{\\text{eq}} > \\frac{12}{0{,}3} = 40\\,\\Omega$$

**Passo 3 — Testar a resistência equivalente e a corrente em cada opção:**
- **A)** 2 grafite em série: $R_{\\text{eq}} = 2 \\times 13 = 26\\,\\Omega \\implies I = \\frac{12}{26} \\approx 461{,}5\\text{ mA}$ (maior que 300 mA).
- **B)** 3 carbono em série: $R_{\\text{eq}} = 3 \\times 16 = 48\\,\\Omega > 40\\,\\Omega \\implies I = \\frac{12}{48} = 0{,}25\\text{ A} = 250\\text{ mA} < 300\\text{ mA}$. **Viável!**
- **C)** 2 grafite em paralelo: $R_{\\text{eq}} = \\frac{13}{2} = 6{,}5\\,\\Omega \\implies I = \\frac{12}{6{,}5} \\approx 1846\\text{ mA}$.
- **D)** 2 carbono em paralelo: $R_{\\text{eq}} = \\frac{16}{2} = 8\\,\\Omega \\implies I = \\frac{12}{8} = 1500\\text{ mA}$.
- **E)** 3 níquel-cromo em série: $R_{\\text{eq}} = 3 \\times 11 = 33\\,\\Omega \\implies I = \\frac{12}{33} \\approx 363{,}6\\text{ mA}$ (maior que 300 mA).

Logo, a única alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Resulta em $R_{\\text{eq}} = 26\\,\\Omega$ e $I \\approx 461{,}5\\text{ mA}$, excedendo o limite de $300\\text{ mA}$.',
      B: 'Correta. Três resistores de carbono em série somam $R_{\\text{eq}} = 3 \\times 16 = 48\\,\\Omega$, limitando a corrente a $I = 12/48 = 250\\text{ mA} < 300\\text{ mA}$.',
      C: 'Incorreta. Associação em paralelo reduz a resistência para $6{,}5\\,\\Omega$, elevando a corrente para $\\approx 1{,}85\\text{ A}$.',
      D: 'Incorreta. Dois resistores de carbono em paralelo fornecem apenas $8\\,\\Omega$, gerando $I = 1{,}5\\text{ A}$.',
      E: 'Incorreta. Três resistores de níquel-cromo em série somam $33\\,\\Omega$, resultando em $I \\approx 363{,}6\\text{ mA} > 300\\text{ mA}$.',
    },
    keyConcept: 'Primeira e Segunda Leis de Ohm ($V = R \\cdot I$ e $R = \\rho L / A$) combinadas com associação em série e paralelo.',
  },
  {
    id: 'enade-2023-q11',
    source: 'enade-2023',
    year: 2023,
    number: 11,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Protocolo de Roteamento OSPF e Algoritmo de Dijkstra',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `O protocolo de roteamento interno OSPF (*open shortest path first*) representa um sistema autônomo (SA) como um grafo ponderado, em que roteadores são os vértices, conexões entre os roteadores são as arestas e atrasos nas conexões são os pesos. No OSPF, a identificação de cada conexão e seu respectivo atraso são passados de roteador em roteador até que todos os roteadores formem uma base de dados com o grafo que descreve o SA. O OSPF utiliza uma versão distribuída do algoritmo de caminhos mínimos de Dijkstra para computar as melhores rotas para todos os possíveis destinos e para produzir as tabelas de rotas para cada roteador. Cada rota computada é a que apresenta o menor valor para a soma dos atrasos nas conexões usadas na rota entre a rede de origem e a rede de destino.

*Disponível em: https://memoria.rnp.br/newsgen/9705/n1-1.html. Acesso em: 1 mar. 2023 (adaptado).*

Acerca do protocolo OSPF e com base nas informações apresentadas no texto, avalie as afirmações a seguir.

**I.** Quando há diferentes caminhos possíveis entre uma origem e um destino, a rota selecionada é a que apresenta o menor número de conexões.

**II.** Há uma instância da base de dados relativa a conexões e a atrasos, formando o grafo que descreve o SA em cada roteador que compõe o SA.

**III.** O algoritmo de Dijkstra é executado por um único roteador dentro do SA e a tabela de rotas resultante é passada para todos os roteadores no SA.

**IV.** Para todos os roteadores dentro de um SA, há a necessidade de tráfego de informações acerca de atrasos e de conexões entre roteadores.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'I, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `O OSPF é um protocolo de roteamento intradomínio baseado em **estado de enlace (*link-state*)**. Analisando cada item:

- **Afirmação I (FALSA):** O OSPF escolhe a rota com a **menor soma dos pesos/custos** (no enunciado, a soma dos atrasos das arestas), e **não** necessariamente o menor número de saltos/conexões (métrica típica do protocolo RIP). Um caminho com 3 enlaces de atraso 1 ms (total 3 ms) é preferido a uma conexão direta de 10 ms.
- **Afirmação II (VERDADEIRA):** Cada roteador no SA constrói e mantém sua própria cópia da base de dados de estado de enlace (**LSDB** — *Link-State Database*), que representa o grafo completo de topologia e pesos do SA.
- **Afirmação III (FALSA):** O algoritmo de Dijkstra é executado **localmente e de forma distribuída por cada roteador** (tomando a si mesmo como vértice raiz) para gerar sua própria tabela de encaminhamento; não existe um único roteador central que calcula e distribui tabelas de rotas prontas.
- **Afirmação IV (VERDADEIRA):** Para que todos os roteadores possuam visão topológica completa e sincronizada (LSDB idêntica), eles precisam trocar anúncios de estado de enlace (**LSA** — *Link-State Advertisements*) via inundação (*flooding*) informando suas conexões e respectivos custos/atrasos.

Portanto, estão corretas apenas **II e IV** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Tanto I (confunde custo ponderado com número de saltos) quanto III (centraliza erroneamente o cálculo de Dijkstra) são falsas.',
      B: 'Incorreta. A afirmação III é falsa: cada roteador executa Dijkstra localmente de forma distribuída.',
      C: 'Correta. Apenas II e IV descrevem fielmente o funcionamento do roteamento por estado de enlace (OSPF).',
      D: 'Incorreta. Inclui a afirmação I, que é falsa pois o grafo é ponderado pelos atrasos, não pelo número de saltos.',
      E: 'Incorreta. Inclui as afirmações falsas I e III.',
    },
    keyConcept: 'Roteamento por estado de enlace (OSPF): inundação de LSAs, manutenção distribuída da LSDB e execução local de Dijkstra sobre grafo ponderado.',
    reference: 'RNP NewsGeneration (1997). Disponível em: https://memoria.rnp.br/newsgen/9705/n1-1.html.',
  },
  {
    id: 'enade-2023-q12',
    source: 'enade-2023',
    year: 2023,
    number: 12,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Matemática Discreta: Relações de Equivalência e Partições',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Uma relação $\\mathbf{R}$ em um conjunto $\\mathbf{S}$ é uma relação de equivalência se ela satisfizer todas as propriedades a seguir:

1. Reflexividade. Para todo $a \\in \\mathbf{S}$, $a\\,\\mathbf{R}\\,a$;
2. Simetria. Para todos $a, b \\in \\mathbf{S}$, $a\\,\\mathbf{R}\\,b \\iff b\\,\\mathbf{R}\\,a$;
3. Transitividade. Para todos $a, b, c \\in \\mathbf{S}$, se $a\\,\\mathbf{R}\\,b$ e $b\\,\\mathbf{R}\\,c$, então, $a\\,\\mathbf{R}\\,c$.

Uma partição de um conjunto $\\mathbf{S}$ é uma coleção de subconjuntos disjuntos não vazios, cuja união é igual a $\\mathbf{S}$. Se $\\mathbf{R}$ é uma relação de equivalência em um conjunto $\\mathbf{S}$ e se $x \\in \\mathbf{S}$, denota-se por $[x]$ o conjunto de todos os elementos relacionados a $x$ em $\\mathbf{S}$ e chama-se esse conjunto de classe de equivalência de $x$.

*GERSTING, J. L. **Fundamentos matemáticos para a ciência da computação**: um tratamento moderno de matemática discreta. 5. ed. Rio de Janeiro: LTC, 2008 (adaptado).*

A partir dessas informações, considere que, em um *cluster* computacional, haja 10 computadores com configurações de *hardware* diferentes. Os administradores desse *cluster* pretendem desenvolver um algoritmo de escalonamento de tarefas que mantenha processos de uma mesma aplicação sendo executados em máquinas semelhantes, mesmo com estruturas arquiteturais distintas. Assim, os administradores fizeram uma tabela relacionando os computadores. Essa tabela foi montada considerando pares de computadores. Dessa forma, dois computadores do *cluster* fazem parte de uma linha na tabela se possuem alguma característica semelhante, ou seja, se apresentam algum tipo de relacionamento (por exemplo, quantidade de memória ou de núcleos de processamento semelhantes). Obviamente, apesar de não estar evidente na tabela, um computador também tem relação consigo mesmo.

Os computadores estão numerados de 1 até 10 e a tabela resultante pode ser vista a seguir.

| Computadores com características semelhantes | |
| :---: | :---: |
| 1 | 5 |
| 2 | 8 |
| 5 | 7 |
| 7 | 10 |
| 2 | 9 |
| 3 | 4 |
| 10 | 1 |
| 5 | 10 |
| 7 | 1 |
| 9 | 8 |`,
    command: 'Com base nesse cenário e no conceito de relações de equivalência, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'A relação descrita pela tabela é uma relação de equivalência.' },
      {
        letter: 'B',
        text: 'A relação descrita pela tabela apresenta a propriedade de simetria, mas não a de transitividade.',
      },
      {
        letter: 'C',
        text: 'A relação descrita pela tabela apresenta a propriedade de transitividade, mas não a de simetria.',
      },
      {
        letter: 'D',
        text: 'O subconjunto de computadores representados pelos números 1, 3, 5, 7 e 10 forma uma classe de equivalência.',
      },
      {
        letter: 'E',
        text: 'O subconjunto de computadores representados pelos números 2, 3, 4, 8 e 9 forma uma classe de equivalência.',
      },
    ],
    correctOption: 'A',
    explanation: `Vamos analisar o conjunto $\\mathbf{S} = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ e a relação $\\mathbf{R}$ descrita pelos pares não ordenados de "computadores com características semelhantes":

1. **Reflexividade:** Garantida explicitamente pelo enunciado (*"um computador também tem relação consigo mesmo"*), logo $a\\,\\mathbf{R}\\,a$ para todo $a \\in \\{1, \\dots, 10\\}$.

2. **Simetria:** Cada linha representa um par de computadores que compartilham característica semelhante — se o computador $a$ é semelhante a $b$, então $b$ é semelhante a $a$ ($a\\,\\mathbf{R}\\,b \\iff b\\,\\mathbf{R}\\,a$).

3. **Transitividade e identificação das componentes (classes):** Vamos agrupar os 10 pares da tabela e verificar se cada grupo contém **todos** os pares possíveis entre seus membros (ou seja, se forma um grafo completo / clique):
   - **Grupo 1: $\\{1, 5, 7, 10\\}$** — um conjunto de 4 elementos possui $\\binom{4}{2} = 6$ pares não ordenados possíveis. Conferindo na tabela:
     $\\{1,5\\}$ ✓, $\\{5,7\\}$ ✓, $\\{7,10\\}$ ✓, $\\{10,1\\}$ ✓, $\\{5,10\\}$ ✓, $\\{7,1\\}$ ✓. **Todos os 6 pares estão presentes!**
   - **Grupo 2: $\\{2, 8, 9\\}$** — um conjunto de 3 elementos possui $\\binom{3}{2} = 3$ pares possíveis. Conferindo na tabela:
     $\\{2,8\\}$ ✓, $\\{2,9\\}$ ✓, $\\{9,8\\}$ ✓. **Todos os 3 pares estão presentes!**
   - **Grupo 3: $\\{3, 4\\}$** — 1 par possível: $\\{3,4\\}$ ✓. **Presente!**
   - **Grupo 4: $\\{6\\}$** — o computador 6 não aparece em nenhuma linha, relacionando-se apenas consigo mesmo (classe unitária $[6] = \\{6\\}$).

Como não há nenhuma aresta cruzando entre grupos distintos e **todos** os pares internos de cada grupo constam na tabela, a transitividade é integralmente satisfeita!

Logo, $\\mathbf{R}$ satisfaz reflexividade, simetria e transitividade, constituindo uma **relação de equivalência** cuja partição de $\\mathbf{S}$ em classes de equivalência é:

$$\\{\\{1, 5, 7, 10\\},\\; \\{2, 8, 9\\},\\; \\{3, 4\\},\\; \\{6\\}\\}$$

Portanto, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. A relação é reflexiva, simétrica e transitiva (todos os pares internos de cada componente conexo estão listados na tabela), logo é uma relação de equivalência.',
      B: 'Incorreta. A transitividade é plenamente satisfeita em todas as componentes: $\\{1,5,7,10\\}$ tem os 6 pares, $\\{2,8,9\\}$ tem os 3 pares e $\\{3,4\\}$ tem 1 par.',
      C: 'Incorreta. A relação "ter característica semelhante" entre pares de máquinas listados na mesma linha é simétrica por definição.',
      D: 'Incorreta. O computador 3 pertence à classe $\\{3, 4\\}$, não mantendo relação com $\\{1, 5, 7, 10\\}$.',
      E: 'Incorreta. Os computadores 3 e 4 formam uma classe própria $\\{3, 4\\}$, disjunta da classe $\\{2, 8, 9\\}$.',
    },
    keyConcept: 'Relações de equivalência (reflexiva, simétrica e transitiva) e correspondência biunívoca com partições em cliques (classes de equivalência).',
    reference: 'GERSTING, J. L. Fundamentos matemáticos para a ciência da computação. 5. ed. Rio de Janeiro: LTC, 2008.',
  },
  {
    id: 'enade-2023-q13',
    source: 'enade-2023',
    year: 2023,
    number: 13,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Análise de Circuitos por Grafos e Lei de Kirchhoff das Correntes (Cortes)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `Uma forma sistemática de analisar circuitos elétricos de qualquer tamanho, visando à simulação em computadores, consiste em representá-los por meio de grafos. Essa representação implica a substituição dos elementos do ramo do circuito por uma conexão orientada (arco) e de nós do circuito por vértices, resultando em um grafo orientado. A orientação dos arcos coincide com a orientação dos sentidos de referência associados de tensão e corrente, adotados pela convenção passiva.

Grafos são ditos conexos se existir, ao menos, um caminho entre quaisquer dois nós. Corte refere-se a um conjunto de arcos que, se removido, divide o grafo (tornando-o desconexo). A lei de Kirchoff das correntes, usando a nomenclatura de grafos, pode ser enunciada como “para qualquer rede de parâmetros concentrados e para qualquer de seus cortes, a soma algébrica de todas as correntes através dos arcos do corte é zero.”

*Disponível em: http://www.peb.ufrj.br/. Acesso em: 16 jun. 2023 (adaptado).*

A figura a seguir representa um circuito elétrico e o seu grafo equivalente.`,
    images: [
      {
        src: '/images/enade-2023/q13-fig.png',
        alt: 'À esquerda, circuito elétrico com quatro nós (A, B, C, D), fonte V (ramo 6, corrente I6 de D para A), resistor R1 (ramo 1, corrente I1 de A para C), resistor R2 (ramo 2, corrente I2 de A para B), capacitor C1 (ramo 3, corrente I3 de B para D), indutor L1 (ramo 4, corrente I4 de B para C) e resistor R3 (ramo 5, corrente I5 de C para D). À direita, o grafo orientado equivalente com vértices A, B, C, D e arcos numerados de 1 a 6.',
        caption: 'Circuito elétrico e seu grafo orientado equivalente.',
      },
    ],
    command:
      'Após aplicar a lei de Kirchoff das correntes para os cortes $X = \\{1, 4, 5\\}$, $Y = \\{1, 2, 3, 5\\}$ e $Z = \\{1, 4, 3, 6\\}$, assinale a opção que apresenta equações válidas para a soma algébrica das correntes em dois desses cortes.',
    options: [
      { letter: 'A', text: '$I_1 + I_4 - I_5 = 0$ e $I_1 + I_2 + I_3 - I_5 = 0$' },
      { letter: 'B', text: '$I_1 + I_4 + I_5 = 0$ e $I_1 + I_2 + I_3 + I_5 = 0$' },
      { letter: 'C', text: '$I_1 + I_4 + I_5 = 0$ e $I_1 + I_3 + I_4 - I_6 = 0$' },
      { letter: 'D', text: '$I_1 + I_2 - I_3 - I_5 = 0$ e $I_1 + I_3 + I_4 - I_6 = 0$' },
      { letter: 'E', text: '$I_1 + I_2 - I_3 - I_5 = 0$ e $I_1 - I_3 + I_4 - I_6 = 0$' },
    ],
    correctOption: 'D',
    explanation: `Primeiro, identificamos rigorosamente a orientação de cada arco do grafo (conferindo diretamente as setas do circuito e do grafo equivalente):
- **Arco 1 ($I_1$, ramo $R_1$):** $A \\to C$
- **Arco 2 ($I_2$, ramo $R_2$):** $A \\to B$
- **Arco 3 ($I_3$, ramo $C_1$):** $B \\to D$
- **Arco 4 ($I_4$, ramo $L_1$):** $B \\to C$
- **Arco 5 ($I_5$, ramo $R_3$):** $C \\to D$
- **Arco 6 ($I_6$, ramo $V$):** $D \\to A$

Agora aplicamos a Lei de Kirchhoff das Correntes (LKC) generalizada para conjuntos de corte (definindo um sentido positivo de travessia de uma partição $V_1$ para a partição complementar $V_2$):

1. **Corte $X = \\{1, 4, 5\\}$** — separa $V_1 = \\{A, B, D\\}$ de $V_2 = \\{C\\}$:
   - Arco 1 ($A \\to C$): vai de $V_1$ para $V_2$ ($+I_1$)
   - Arco 4 ($B \\to C$): vai de $V_1$ para $V_2$ ($+I_4$)
   - Arco 5 ($C \\to D$): vai de $V_2$ para $V_1$ ($-I_5$)
   $$\\implies I_1 + I_4 - I_5 = 0$$

2. **Corte $Y = \\{1, 2, 3, 5\\}$** — separa $V_1 = \\{A, D\\}$ de $V_2 = \\{B, C\\}$:
   - Arco 1 ($A \\to C$): vai de $V_1$ para $V_2$ ($+I_1$)
   - Arco 2 ($A \\to B$): vai de $V_1$ para $V_2$ ($+I_2$)
   - Arco 3 ($B \\to D$): vai de $V_2$ para $V_1$ ($-I_3$)
   - Arco 5 ($C \\to D$): vai de $V_2$ para $V_1$ ($-I_5$)
   $$\\implies I_1 + I_2 - I_3 - I_5 = 0$$

3. **Corte $Z = \\{1, 4, 3, 6\\}$** — separa $V_1 = \\{A, B\\}$ de $V_2 = \\{C, D\\}$:
   - Arco 1 ($A \\to C$): vai de $V_1$ para $V_2$ ($+I_1$)
   - Arco 3 ($B \\to D$): vai de $V_1$ para $V_2$ ($+I_3$)
   - Arco 4 ($B \\to C$): vai de $V_1$ para $V_2$ ($+I_4$)
   - Arco 6 ($D \\to A$): vai de $V_2$ para $V_1$ ($-I_6$)
   $$\\implies I_1 + I_3 + I_4 - I_6 = 0$$

Comparando os três resultados ($X$, $Y$ e $Z$) com as opções, apenas a alternativa **D** traz duas equações integralmente válidas: a do corte $Y$ ($I_1 + I_2 - I_3 - I_5 = 0$) e a do corte $Z$ ($I_1 + I_3 + I_4 - I_6 = 0$).`,
    optionAnalysis: {
      A: 'Incorreta. A primeira equação ($X$) está certa, mas a segunda erra o sinal de $I_3$ no corte $Y$ (o arco 3 vai de $B$ para $D$, sentido oposto a $I_1$ e $I_2$, logo deveria ser $-I_3$).',
      B: 'Incorreta. Erra o sinal de $I_5$ em $X$ e os sinais de $I_3$ e $I_5$ em $Y$.',
      C: 'Incorreta. A segunda equação ($Z$) está certa, mas a primeira erra o sinal de $I_5$ em $X$ (entra $I_1$ e $I_4$ no nó $C$, sai $I_5$, logo $I_1 + I_4 - I_5 = 0$).',
      D: 'Correta. Apresenta exatamente as equações corretas do corte $Y$ ($I_1 + I_2 - I_3 - I_5 = 0$) e do corte $Z$ ($I_1 + I_3 + I_4 - I_6 = 0$).',
      E: 'Incorreta. A primeira equação ($Y$) está certa, mas a segunda inverte o sinal de $I_3$ em $Z$ (o arco 3 sai de $\\{A, B\\}$ para $\\{C, D\\}$ no mesmo sentido de $I_1$ e $I_4$).',
    },
    keyConcept: 'Teoria de grafos aplicada a circuitos: matriz de incidência/cortes fundamentais e Lei de Kirchhoff das Correntes generalizada (supernós).',
    reference: 'PEB/COPPE/UFRJ. Disponível em: http://www.peb.ufrj.br/. Acesso em: 16 jun. 2023 (adaptado).',
  },
  {
    id: 'enade-2023-q14',
    source: 'enade-2023',
    year: 2023,
    number: 14,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Programação Funcional (Haskell) e Recursão em Listas',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Uma lista pode ser dividida em duas partes: o primeiro elemento (a cabeça da lista) e os demais elementos (sua cauda). Por exemplo, em uma lista de inteiros \`[1, 2, 3, 4]\`, a cabeça dessa lista é o valor inteiro \`1\`, enquanto sua cauda é a lista de inteiros \`[2, 3, 4]\`. Uma lista vazia é representada por \`[]\`.

O código a seguir define duas funções descritas em uma linguagem de programação funcional que manipulam listas de inteiros. A função \`enade\` recebe uma lista de inteiros e produz uma nova lista de inteiros. A função \`auxiliar\` é chamada pela função \`enade\` e possui dois parâmetros: um número inteiro e uma lista de inteiros. Essa função produz uma lista de inteiros.

\`\`\`haskell
enade :: [Int] -> [Int]
enade [] = []
enade (cabeca:cauda) = auxiliar cabeca (enade cauda)

auxiliar :: Int -> [Int] -> [Int]
auxiliar x [] = [x]
auxiliar x (cabeca:cauda)
  | (x \`mod\` 2 == 0) = x:cabeca:cauda
  | otherwise = cabeca:auxiliar x cauda
\`\`\``,
    command:
      'Considerando o código apresentado, é correto afirmar que se a função `enade` for executada recebendo como parâmetro de entrada a lista `[1, 2, 3, 4, 5, 6, 7, 8]`, o resultado será',
    options: [
      { letter: 'A', text: '`[]`.' },
      { letter: 'B', text: '`[2, 4, 6, 8]`.' },
      { letter: 'C', text: '`[1, 2, 3, 4, 5, 6, 7, 8]`.' },
      { letter: 'D', text: '`[2, 4, 6, 8, 1, 3, 5, 7]`.' },
      { letter: 'E', text: '`[2, 4, 6, 8, 7, 5, 3, 1]`.' },
    ],
    correctOption: 'E',
    explanation: `Vamos analisar o comportamento das duas funções em Haskell:

1. **O que faz \`auxiliar x lista\`?**
   - Se \`lista\` é vazia (\`[]\`), retorna \`[x]\`.
   - Se \`x\` é **par** (\`x mod 2 == 0\`), coloca \`x\` imediatamente na **frente (cabeça)** da lista: \`x : lista\`.
   - Se \`x\` é **ímpar** (\`otherwise\`), mantém \`cabeca\` e chama recursivamente na \`cauda\`, inserindo \`x\` no **final** da lista!

2. **Como \`enade\` executa?**
   \`enade (cabeca:cauda) = auxiliar cabeca (enade cauda)\` resolve primeiro a recursão até a lista vazia \`[]\` (dobra à direita / *foldr*) e vai aplicando \`auxiliar\` **de trás para frente** (de \`8\` até \`1\`):

   - \`enade []\` $= []$
   - \`auxiliar 8 []\` $= [8]$
   - \`auxiliar 7 [8]\` (7 é ímpar → vai para o final) $= [8, 7]$
   - \`auxiliar 6 [8, 7]\` (6 é par → vai para o início) $= [6, 8, 7]$
   - \`auxiliar 5 [6, 8, 7]\` (5 é ímpar → vai para o final) $= [6, 8, 7, 5]$
   - \`auxiliar 4 [6, 8, 7, 5]\` (4 é par → vai para o início) $= [4, 6, 8, 7, 5]$
   - \`auxiliar 3 [4, 6, 8, 7, 5]\` (3 é ímpar → vai para o final) $= [4, 6, 8, 7, 5, 3]$
   - \`auxiliar 2 [4, 6, 8, 7, 5, 3]\` (2 é par → vai para o início) $= [2, 4, 6, 8, 7, 5, 3]$
   - \`auxiliar 1 [2, 4, 6, 8, 7, 5, 3]\` (1 é ímpar → vai para o final) $= [2, 4, 6, 8, 7, 5, 3, 1]$

Observe a armadilha genial: como os pares são inseridos no início de trás para frente (\`8\`, depois \`6\`, depois \`4\`, depois \`2\`), eles ficam em **ordem crescente** (\`2, 4, 6, 8\`); já os ímpares são inseridos no final de trás para frente (\`7\`, depois \`5\`, depois \`3\`, depois \`1\`), ficando em **ordem decrescente** (\`7, 5, 3, 1\`)!

Resultado final: \`[2, 4, 6, 8, 7, 5, 3, 1]\` — alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. A lista vazia só ocorre quando a entrada é vazia; nenhum elemento é descartado.',
      B: 'Incorreta. A função não filtra/descarta os números ímpares; ela os insere no final da lista.',
      C: 'Incorreta. A ordem original é alterada porque pares vão para o início e ímpares vão para o final.',
      D: 'Incorreta. Armadilha clássica: ocorreria apenas se os elementos fossem processados da esquerda para a direita. Como a recursão retorna da direita para a esquerda, os ímpares são anexados na ordem 7, 5, 3, 1.',
      E: 'Correta. Os pares inseridos no início de trás para frente ficam [2, 4, 6, 8] e os ímpares inseridos no final de trás para frente ficam [7, 5, 3, 1].',
    },
    keyConcept: 'Programação funcional em Haskell, casamento de padrões (cabeca:cauda), guardas e ordem de desempilhamento em recursão não-caudal (foldr).',
  },
  {
    id: 'enade-2023-q15',
    source: 'enade-2023',
    year: 2023,
    number: 15,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Alocação Dinâmica de Memória e Memory Leak em C',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `*Memory leak*, ou vazamento de memória, é um problema que ocorre em sistemas computacionais quando uma parte da memória, alocada para uma determinada operação, não é liberada quando se torna desnecessária. Na linguagem C, esse tipo de problema é quase sempre relacionado ao uso incorreto das funções \`malloc( )\` e \`free( )\`. Esse erro de programação pode levar a falhas no sistema se a memória for completamente consumida.`,
    command: 'A partir dessas informações, assinale a opção que apresenta um trecho com *memory leak*.',
    options: [
      {
        letter: 'A',
        text: `\`\`\`c
void f( ){
    void *s;
    s = malloc(50);
    free(s);
}
\`\`\``,
      },
      {
        letter: 'B',
        text: `\`\`\`c
int f( ){
    float *a;
    return 0;
}
\`\`\``,
      },
      {
        letter: 'C',
        text: `\`\`\`c
int f(char *data){
    void *s;
    s = malloc(50);
    int size = strlen(data);
    if (size > 50)
        return(-1);
    free(s);
    return 0;
}
\`\`\``,
      },
      {
        letter: 'D',
        text: `\`\`\`c
int *f(int n){
    int *num = malloc(sizeof(int)*n);
    return num;
}
int main(void){
    int *num;
    num = f(10);
    free(num);
    return 0;
}
\`\`\``,
      },
      {
        letter: 'E',
        text: `\`\`\`c
void f(int n){
    char *m = malloc(10);
    char *n = malloc(10);
    free(m);
    m = n;
    free(m);
    free(n);
}
\`\`\``,
      },
    ],
    correctOption: 'C',
    explanation: `O *memory leak* (vazamento de memória) ocorre quando um bloco alocado dinamicamente no *heap* (com \`malloc\`, \`calloc\` ou \`realloc\`) perde todas as referências que apontam para ele sem jamais ter sido liberado por \`free()\`.

Na alternativa **C**:
1. A função aloca 50 bytes no *heap* em \`s = malloc(50);\`.
2. Em seguida, calcula \`size = strlen(data);\`.
3. Se \`size > 50\`, a função executa um **retorno antecipado** (\`return(-1);\`), pulando a linha \`free(s);\`.
4. Ao encerrar o escopo da função \`f\`, a variável local \`s\` (na pilha) é destruída, mas os 50 bytes alocados no *heap* permanecem ocupados e inacessíveis — configurando um **vazamento de memória clássico** (*early return leak*)!

Para corrigir esse trecho, seria necessário chamar \`free(s)\` antes de \`return(-1)\` ou verificar \`strlen(data) > 50\` antes de chamar \`malloc(50)\`.`,
    optionAnalysis: {
      A: 'Incorreta. Os 50 bytes alocados em `s` são imediatamente e incondicionalmente liberados por `free(s);`.',
      B: 'Incorreta. Declara apenas um ponteiro local não inicializado na pilha; não há nenhuma alocação dinâmica (`malloc`), logo não existe vazamento de memória.',
      C: 'Correta. Quando `strlen(data) > 50`, o comando `return(-1);` encerra a função sem executar `free(s);`, vazando os 50 bytes alocados no heap.',
      D: 'Incorreta. A função `f` transfere a posse do ponteiro alocado para `main`, que libera corretamente a memória com `free(num);`.',
      E: 'Incorreta. Apesar de conter graves bugs (redeclaração do identificador `n` e *double free* ao liberar o mesmo bloco apontado por `m` e `n` duas vezes após `m = n`), ambos os blocos alocados têm `free()` chamado — o erro ali é *double free* (e erro de compilação por redeclaração), não *memory leak*.',
    },
    keyConcept: 'Gerenciamento manual de memória em C: vazamento por retorno antecipado (early return) versus double free.',
  },
  {
    id: 'enade-2023-q16',
    source: 'enade-2023',
    year: 2023,
    number: 16,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Operações Bitwise em C para Sistemas Embarcados',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Na programação de sistemas embarcados, algumas posições de memória servem para diferentes propósitos, não apenas para armazenar valores. Em algumas dessas memórias, cada um dos *bits* possui um significado diferente, sendo necessário manipulá-los individualmente ou em pequenos grupos. Por isso, o conhecimento da álgebra booliana, bem como dos operadores utilizados para realizar operações binárias nas linguagens de programação, é essencial para o desenvolvimento desse tipo de sistema.

*ALMEIDA, R. M.; MORAES, C. H. V.; SERAPHIM, T. F. P. **Programação de Sistemas Embarcados**: desenvolvendo software para microcontroladores em linguagem C. Rio de Janeiro: Elsevier, 2016 (adaptado).*

A partir dessas informações, observe o código apresentado a seguir, escrito na linguagem C, que faz uso de operações binárias sobre variáveis inteiras.

\`\`\`c
#include <stdio.h>
int main()
{
    int a, b;
    int x, y, z;
    scanf("%d %d", &a, &b);
    x = a; y = b; z = a + b;
    while (a) {
        x = x | b;
        y = y ^ a;
        z = z & (a+b);
        a = a >> 1;
        b = b << 1;
    }
    printf ("%d %d %d\\n", x, y, z);
    return 0;
}
\`\`\``,
    command:
      'Após a chamada desse programa, caso o usuário entre com os valores `10` e `1`, nessa ordem, qual será, exatamente, o valor da saída do programa?',
    options: [
      { letter: 'A', text: '`10  1  0`' },
      { letter: 'B', text: '`10  1  11`' },
      { letter: 'C', text: '`11  11  11`' },
      { letter: 'D', text: '`15  12  2`' },
      { letter: 'E', text: '`15  13  0`' },
    ],
    correctOption: 'E',
    explanation: `Vamos fazer o teste de mesa completo em binário (4 bits) com os operadores *bitwise* de C: \`|\` (OU), \`^\` (OU-Exclusivo / XOR), \`&\` (E), \`>>\` (deslocamento à direita / divisão inteira por 2) e \`<<\` (deslocamento à esquerda / multiplicação por 2).

**Estado inicial:**
- $a = 10 = (1010)_2$, $b = 1 = (0001)_2$
- $x = 10 = (1010)_2$
- $y = 1 = (0001)_2$
- $z = 10 + 1 = 11 = (1011)_2$

**Iteração 1** ($a = 10 \\neq 0$, $b = 1$):
- $x = (1010)_2 \\mid (0001)_2 = (1011)_2 = 11$
- $y = (0001)_2 \\oplus (1010)_2 = (1011)_2 = 11$
- $a + b = 11 = (1011)_2 \\implies z = (1011)_2 \\& (1011)_2 = (1011)_2 = 11$
- $a = 10 \\gg 1 = 5 = (0101)_2$
- $b = 1 \\ll 1 = 2 = (0010)_2$

**Iteração 2** ($a = 5 \\neq 0$, $b = 2$):
- $x = (1011)_2 \\mid (0010)_2 = (1011)_2 = 11$
- $y = (1011)_2 \\oplus (0101)_2 = (1110)_2 = 14$
- $a + b = 7 = (0111)_2 \\implies z = (1011)_2 \\& (0111)_2 = (0011)_2 = 3$
- $a = 5 \\gg 1 = 2 = (0010)_2$
- $b = 2 \\ll 1 = 4 = (0100)_2$

**Iteração 3** ($a = 2 \\neq 0$, $b = 4$):
- $x = (1011)_2 \\mid (0100)_2 = (1111)_2 = 15$
- $y = (1110)_2 \\oplus (0010)_2 = (1100)_2 = 12$
- $a + b = 6 = (0110)_2 \\implies z = (0011)_2 \\& (0110)_2 = (0010)_2 = 2$
- $a = 2 \\gg 1 = 1 = (0001)_2$
- $b = 4 \\ll 1 = 8 = (1000)_2$

**Iteração 4** ($a = 1 \\neq 0$, $b = 8$):
- $x = (1111)_2 \\mid (1000)_2 = (1111)_2 = 15$
- $y = (1100)_2 \\oplus (0001)_2 = (1101)_2 = 13$
- $a + b = 9 = (1001)_2 \\implies z = (0010)_2 \\& (1001)_2 = (0000)_2 = 0$
- $a = 1 \\gg 1 = 0$
- $b = 8 \\ll 1 = 16$

Como $a = 0$, o laço \`while (a)\` termina e o programa imprime: **\`15 13 0\`** (alternativa **E**).`,
    optionAnalysis: {
      A: 'Incorreta. Mantém os valores iniciais de x e y sem aplicar as operações bitwise do laço.',
      B: 'Incorreta. São exatamente os valores iniciais de x, y e z antes da primeira iteração do laço.',
      C: 'Incorreta. Corresponde ao estado após a 1ª iteração apenas (`x=11, y=11, z=11`).',
      D: 'Incorreta. Distrator perigoso! Corresponde ao estado após a 3ª iteração, para quem interrompe o laço quando `a == 1` esquecendo que `while(1)` ainda executa a 4ª iteração.',
      E: 'Correta. Valores exatos de x, y e z ao final da 4ª iteração, quando `a` finalmente se torna `0`.',
    },
    keyConcept: 'Manipulação de bits em C (operadores `&`, `|`, `^`, `<<`, `>>`) e condição de parada `while (a)` (verdadeira enquanto `a != 0`).',
    reference: 'ALMEIDA, R. M.; MORAES, C. H. V.; SERAPHIM, T. F. P. Programação de Sistemas Embarcados. Rio de Janeiro: Elsevier, 2016.',
  },
  {
    id: 'enade-2023-q17',
    source: 'enade-2023',
    year: 2023,
    number: 17,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Programação Dinâmica: Subsequência Comum Mais Longa (LCS)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Dada uma sequência de caracteres $S = s_1, s_2, \\dots, s_n$, uma subsequência de $S$ é dada pela remoção de zero ou mais caracteres de $S$. Formalmente, a sequência $X = x_1, x_2, \\dots, x_k$ é subsequência de $S$ se existe uma sequência crescente de índices $i_1, \\dots, i_k$ de $S$, tal que $x_j = S_{i_j}$ para todo $j = 1, 2, \\dots, k$. Define-se, também, um prefixo da sequência $S$ com comprimento $i$ para $i = 0, \\dots, n$, como $S_i = s_1, s_2, \\dots, s_i$.

O problema da Subsequência Comum Mais Longa (LCS) e suas variações, definido a seguir, pode ser utilizado em análise de textos e em bioinformática. O problema da LCS pressupõe duas sequências de caracteres $A = a_1, a_2, \\dots, a_n$ e $B = b_1, b_2, \\dots, b_m$, de comprimentos $n$ e $m$, respectivamente. Dadas essas duas sequências, é preciso encontrar uma sequência de maior comprimento possível que seja, simultaneamente, subsequência de $A$ e de $B$.

A partir dessas informações, considere que $Z = z_1, z_2, \\dots, z_k$ seja uma LCS das sequências $A$ e $B$. Em relação ao problema da LCS, avalie as afirmações a seguir.

**I.** Se $a_n = b_m$, então $z_k = a_n$, $z_k = b_m$ e $Z_{k-1}$ é uma LCS de $A_{n-1}$ e $B_{m-1}$.

**II.** Se $a_n \\neq b_m$ e $z_k \\neq a_n$, então $Z$ é uma LCS de $A_{n-1}$ e $B$.

**III.** Seja $\\text{lcs}(i, j)$ o comprimento da LCS entre $A_i$ e $B_j$. Para $i, j > 0$, se $a_i \\neq b_j$, então $\\text{lcs}(i, j) = \\min\\{\\text{lcs}(i, j-1),\\; \\text{lcs}(i-1, j)\\}$.

**IV.** Seja $\\text{lcs}(i, j)$ o comprimento da LCS entre $A_i$ e $B_j$. Para $i, j > 0$, se $a_i = b_j$, então $\\text{lcs}(i, j) = \\text{lcs}(i-1, j-1) + 1$.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `O problema da Subsequência Comum Mais Longa (*Longest Common Subsequence* — LCS) satisfaz a propriedade de **subestrutura ótima** (teorema clássico de Cormen *et al.* — CLRS), expressa pela recorrência:

$$\\text{lcs}(i, j) = \\begin{cases} 0, & \\text{se } i = 0 \\text{ ou } j = 0 \\\\ \\text{lcs}(i-1, j-1) + 1, & \\text{se } i, j > 0 \\text{ e } a_i = b_j \\\\ \\max\\{\\text{lcs}(i, j-1),\\; \\text{lcs}(i-1, j)\\}, & \\text{se } i, j > 0 \\text{ e } a_i \\neq b_j \\end{cases}$$

Avaliando cada afirmação:
- **I (VERDADEIRA):** Quando os últimos caracteres coincidem ($a_n = b_m$), toda LCS necessariamente termina com esse caractere comum ($z_k = a_n = b_m$), pois do contrário poderíamos anexá-lo à LCS e obter uma subsequência comum ainda maior (contradição). Removendo $z_k$, o prefixo $Z_{k-1}$ tem de ser uma LCS de $A_{n-1}$ e $B_{m-1}$.
- **II (VERDADEIRA):** Se $a_n \\neq b_m$ e $z_k \\neq a_n$, o caractere $a_n$ não é utilizado em $Z$; logo $Z$ é subsequência comum de $A_{n-1}$ e $B$. Se existisse subsequência comum maior de $A_{n-1}$ e $B$, ela também seria de $A$ e $B$, contradizendo a otimalidade de $Z$.
- **III (FALSA):** Como queremos a subsequência comum **mais longa**, no caso $a_i \\neq b_j$ devemos tomar o **máximo** ($\\max$), e **não** o mínimo ($\\min$)!
- **IV (VERDADEIRA):** Corresponde exatamente ao ramo $a_i = b_j$ da recorrência de programação dinâmica da LCS.

Logo, estão corretas apenas **I, II e IV** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a afirmação III, que usa incorretamente `min` em vez de `max`, e omite II e IV.',
      B: 'Incorreta. Omite a afirmação II, que é uma das partes formais do teorema da subestrutura ótima da LCS.',
      C: 'Incorreta. Inclui a afirmação falsa III e omite I e IV.',
      D: 'Correta. I, II e IV reproduzem com exatidão o teorema da subestrutura ótima e a equação de recorrência da LCS.',
      E: 'Incorreta. Inclui a afirmação falsa III e exclui a verdadeira I.',
    },
    keyConcept: 'Subestrutura ótima e relação de recorrência em Programação Dinâmica para o problema da Subsequência Comum Mais Longa (LCS).',
  },
  {
    id: 'enade-2023-q18',
    source: 'enade-2023',
    year: 2023,
    number: 18,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Análise Amortizada de Vetores Dinâmicos (Array Doubling)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Vetores de tamanho dinâmico são muito utilizados como estruturas de dados para armazenar listas e tabelas de dispersão (*tabelas hash*). Essa representação permite que o número máximo de elementos a ser inserido não precise ser pré-determinado. Uma técnica para implementar vetores de tamanho dinâmico é aquela que dobra o tamanho do vetor quando o número de itens a ser armazenado ultrapassa o tamanho atual do vetor. Essa operação requer uma alocação de memória para conter o vetor com o dobro do tamanho atual e a realização de cópia dos elementos para o novo vetor. Com base nessas informações, considere uma lista linear implementada com um vetor dinâmico. Assuma que todos os itens inseridos na lista tenham o mesmo tamanho e que o vetor tenha tamanho inicial para comportar apenas 1 item.`,
    command:
      'Considerando uma sequência de $n$ inserções no final dessa lista, o tempo médio por inserção e o tempo total gasto para executar todas as $n$ operações são, respectivamente, da ordem de',
    options: [
      { letter: 'A', text: '$\\Theta(\\log n)$ e $\\Theta(n \\log n)$.' },
      { letter: 'B', text: '$\\Theta(1)$ e $\\Theta(n)$.' },
      { letter: 'C', text: '$\\Theta(1)$ e $\\Theta(n^2)$.' },
      { letter: 'D', text: '$\\Theta(n)$ e $\\Theta(n^2)$.' },
      { letter: 'E', text: '$\\Theta(\\sqrt{n})$ e $\\Theta(n^{3/2})$.' },
    ],
    correctOption: 'B',
    explanation: `Trata-se do problema clássico de **análise amortizada (método agregado)** para tabelas/vetores dinâmicos com estratégia de dobrar a capacidade (*array doubling*):

Seja $c_i$ o custo da $i$-ésima inserção ($i = 1, 2, \\dots, n$):
- Quando o vetor **não** está cheio, inserimos em tempo constante: $c_i = 1$.
- Quando $i - 1$ é uma potência de $2$ (isto é, $i - 1 = 2^k$, nas inserções $2, 3, 5, 9, 17, \\dots$), dobramos a capacidade, copiando os $i - 1 = 2^k$ elementos existentes e inserindo o novo item: $c_i = 2^k + 1$.

**Custo total para $n$ inserções:**
$$T(n) = \\sum_{i=1}^{n} c_i = n + \\sum_{k=0}^{\\lfloor \\log_2(n-1) \\rfloor} 2^k$$

Pela soma da progressão geométrica de razão 2:
$$\\sum_{k=0}^{m} 2^k = 2^{m+1} - 1 < 2n$$

Logo:
$$n \\le T(n) < n + 2n = 3n \\implies T(n) = \\Theta(n)$$

**Tempo médio (amortizado) por inserção:**
$$\\frac{T(n)}{n} = \\frac{\\Theta(n)}{n} = \\Theta(1)$$

Portanto, o tempo médio por inserção é $\\Theta(1)$ e o tempo total para $n$ inserções é $\\Theta(n)$ — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Apesar de ocorrerem $O(\\log n)$ redimensionamentos, o custo não é constante por redimensionamento nem soma $\\Theta(n \\log n)$; a série geométrica das cópias converge para $< 2n$.',
      B: 'Correta. Pelo método agregado da análise amortizada, o total das cópias mais inserções é menor que $3n$, dando tempo total $\\Theta(n)$ e custo amortizado $\\Theta(1)$ por inserção.',
      C: 'Incorreta. Matematicamente inconsistente: $n$ operações com média $\\Theta(1)$ somam $\\Theta(n)$, não $\\Theta(n^2)$.',
      D: 'Incorreta. O custo quadrático $\\Theta(n^2)$ ocorreria apenas se o vetor aumentasse por uma constante aditiva fixa (ex.: $+1$ ou $+k$ posições por vez), não dobrando o tamanho.',
      E: 'Incorreta. Não corresponde ao crescimento geométrico da capacidade do vetor.',
    },
    keyConcept: 'Análise amortizada de vetores dinâmicos: estratégia multiplicativa (dobrar capacidade) garante custo amortizado $\\Theta(1)$ e total $\\Theta(n)$.',
  },
  {
    id: 'enade-2023-q19',
    source: 'enade-2023',
    year: 2023,
    number: 19,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Gramáticas Livres de Contexto, Análise Sintática e Semântica',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `É chamado de compilação o processo de conversão do código escrito pelo programador para um arquivo binário que o computador consegue executar. Esse processo é realizado por um programa chamado compilador. Entre as diversas tarefas de um compilador, destaca-se a de identificar os possíveis erros sintáticos e semânticos. Com base nessas informações, considere uma linguagem de programação em que a sintaxe de uma operação aritmética seja dada pela seguinte gramática livre de contexto:

\`\`\`text
S → var = E; | var = E; S
E → E + E | E - E | E * E | E/E | E(E) | var
\`\`\`

Inspirado nessa gramática, um profissional submete a seguinte sentença ao compilador dessa linguagem de programação:

\`\`\`text
a = a / (b - b);
\`\`\``,
    command:
      'Com base na gramática da linguagem de programação e acerca do processo de análise sintática e semântica da sentença proposta pelo profissional, é correto afirmar que',
    options: [
      {
        letter: 'A',
        text: 'a gramática gera a sentença apresentada e o erro presente na expressão está fora do escopo das análises sintática e semântica.',
      },
      {
        letter: 'B',
        text: 'a gramática gera a sentença apresentada, porém o analisador semântico transmitirá uma mensagem de erro.',
      },
      {
        letter: 'C',
        text: 'o analisador léxico transmitirá uma mensagem de erro, pois a gramática não gera a sentença apresentada.',
      },
      {
        letter: 'D',
        text: 'o analisador semântico transmitirá uma mensagem de erro, pois a gramática não gera a sentença apresentada.',
      },
      {
        letter: 'E',
        text: 'a gramática gera a sentença apresentada, porém o analisador léxico transmitirá uma mensagem de erro.',
      },
    ],
    correctOption: 'B',
    explanation: `Analisando as fases do *front-end* de um compilador sobre a sentença \`a = a / (b - b);\`:

1. **Análise Léxica:** Todos os tokens (\`a\`, \`=\`, \`/\`, \`(\`, \`b\`, \`-\`, \`)\`, \`;\`) pertencem ao alfabeto/vocabulário válido da linguagem — portanto, **não** há erro léxico.

2. **Análise Sintática (Gramática):** A estrutura da atribuição segue o formato \`var = E;\`, onde \`E\` deriva \`E / E\`, o operando esquerdo deriva \`var\` (\`a\`) e o direito deriva uma expressão entre parênteses contendo \`E - E\` (\`b - b\`). *(Nota didática: no enunciado original da prova, a produção \`E(E)\` apresenta um pequeno lapso tipográfico para \`(E)\`, o qual a banca claramente tratou como produção de agrupamento por parênteses que gera a sentença.)* Assim, a sentença é **sintaticamente válida** (gerada pela gramática).

3. **Análise Semântica:** Embora sintaticamente correta, a expressão \`a / (b - b)\` contém uma **divisão por zero estaticamente determinável** (pois para qualquer valor numérico de \`b\`, \`b - b = 0\`). No modelo clássico de compiladores adotado pela questão, a verificação de consistência de significado das operações (como tipos incompatíveis, variáveis não declaradas e operações matematicamente inválidas detectáveis estaticamente como divisão por zero) cabe ao **analisador semântico**, que emitirá uma mensagem de erro.

Logo, o gabarito oficial é a alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Apesar de muitos compiladores reais tratarem divisões por variáveis em tempo de execução, aqui `b - b` é identicamente zero e a banca enquadra essa verificação de significado/validade operacional no escopo da análise semântica.',
      B: 'Correta. A sentença respeita as regras lexicais e sintáticas da gramática, mas apresenta erro de significado (divisão por zero em `b - b`), detectável na fase semântica.',
      C: 'Incorreta. O analisador léxico não valida a derivação pela gramática livre de contexto (papel do analisador sintático), e todos os tokens são válidos.',
      D: 'Incorreta. Se a gramática não gerasse a sentença, o erro seria reportado pelo analisador sintático (parser), e não pelo semântico.',
      E: 'Incorreta. Não há caractere ou token inválido na sentença para acionar um erro léxico.',
    },
    keyConcept: 'Fases do front-end de compiladores: separação de responsabilidades entre análise léxica, análise sintática (GLC) e análise semântica.',
  },
  {
    id: 'enade-2023-q20',
    source: 'enade-2023',
    year: 2023,
    number: 20,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Computação em Nuvem: Nuvem Pública vs. Nuvem Privada',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Computação em nuvem representa um conceito relativo ao compartilhamento de recursos, tais como capacidade de processamento, armazenamento, comunicação de dados e pessoal qualificado para manter sistemas computacionais disponíveis na internet. Quando esse compartilhamento constitui um serviço disponível para qualquer pessoa, o serviço é conhecido como nuvem pública. Quando as mesmas tecnologias são empregadas para uma única empresa, não permitindo que terceiros utilizem parte dos recursos, temos uma nuvem privada.

Considerando as vantagens que o gerente de uma empresa espera obter na contratação de um serviço de nuvem pública, avalie as afirmações a seguir.

**I.** Um serviço de nuvem pública proporciona a redução de custos operacionais, pois é possível dimensionar a necessidade desses recursos com base na demanda, visto que há momentos em que a empresa precisa de mais recursos e há momentos em que ela precisa de menos recursos.

**II.** Um serviço de nuvem pública gera aumento da velocidade de execução do *software* e de acesso ao *software* a partir de qualquer localidade, pois a nuvem pública garante acesso rápido em qualquer parte do mundo, o que contrasta com um servidor localizado na cidade da empresa.

**III.** Um serviço de nuvem pública viabiliza a redução do investimento inicial com equipamentos, com infraestrutura e com pessoal para iniciar a operação, visto que torna possível adiar a instalação desses recursos na empresa até que a operação se demonstre economicamente viável.

**IV.** Um serviço de nuvem pública propicia aumento de segurança da informação, pois as rotinas de segurança são responsabilidade do administrador da nuvem pública, não do contratante, o que contrasta com um servidor localizado dentro da empresa.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e III.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'B',
    explanation: `Analisando cada afirmação à luz dos fundamentos de Computação em Nuvem (NIST):

- **Afirmação I (VERDADEIRA):** Descreve a **elasticidade rápida** e o **serviço medido** (*pay-as-you-go*): a empresa escala recursos dinamicamente conforme picos e vales de demanda, evitando capacidade ociosa e reduzindo custos operacionais.
- **Afirmação II (FALSA):** A nuvem pública **não** garante acesso mais rápido em qualquer parte do mundo nem supera necessariamente a latência de um servidor local (na rede interna/cidade da empresa). O acesso depende da conectividade à internet, rotas WAN e distância até a região do *datacenter* contratado.
- **Afirmação III (VERDADEIRA):** Permite substituir alto investimento inicial de capital (**CAPEX** — compra de servidores, climatização, energia, contratação imediata de equipe de infra) por despesa operacional sob demanda (**OPEX**), reduzindo barreiras de entrada.
- **Afirmação IV (FALSA):** Na nuvem pública vigora o **Modelo de Responsabilidade Compartilhada** (*Shared Responsibility Model*): o provedor cuida da segurança *da* nuvem (física, hardware, hipervisor), mas o **contratante continua responsável** pela segurança *na* nuvem (dados, controle de acesso/IAM, criptografia, patches do SO/aplicação e configurações).

Logo, apenas **I e III** estão corretas — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação II é falsa porque nuvem pública não garante latência menor em qualquer lugar do mundo em comparação a um servidor local.',
      B: 'Correta. Elasticidade sob demanda (I) e redução de investimento inicial/CAPEX (III) são duas das principais vantagens econômicas da nuvem pública.',
      C: 'Incorreta. Ambas II e IV contêm erros conceituais graves sobre desempenho de rede e responsabilidade de segurança.',
      D: 'Incorreta. A afirmação IV desconsidera o modelo de responsabilidade compartilhada — o contratante jamais fica isento das rotinas de segurança de seus dados e acessos.',
      E: 'Incorreta. Inclui as afirmações falsas II e IV e exclui a verdadeira I.',
    },
    keyConcept: 'Elasticidade, modelo CAPEX vs. OPEX e Modelo de Responsabilidade Compartilhada em Computação em Nuvem.',
  },
  {
    id: 'enade-2023-q21',
    source: 'enade-2023',
    year: 2023,
    number: 21,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'IHC e Princípios de Acessibilidade (Design Universal)',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `A fim de melhorar a qualidade de vida de seus cidadãos e de criar eficiência nos serviços e nas operações urbanas, um grupo de vereadores de uma pequena cidade decidiu fazer algumas propostas de lei que, se aprovadas e devidamente implementadas, tendem a aproximar a cidade do conceito de “cidade inteligente” por meio da implementação de novos sistemas de *software*. O grupo de vereadores, preocupado com acessibilidade, consultou especialistas da área de interação humano-computador (IHC) e levantou informações a respeito de fundamentos de acessibilidade em IHC. Entre eles, estão os seguintes:

**Fundamento 1.** Um produto ou serviço é **equitativo** quando é projetado de modo que possa atender a todos os usuários, independentemente de suas habilidades físicas, sensoriais ou cognitivas.

**Fundamento 2.** Um produto ou serviço deve ter **informações perceptíveis**, o que pode envolver o uso de recursos como, por exemplo, texto alternativo para imagens ou contrastes de cores suficientes para usuários com deficiências visuais ou com daltonismo.

Considerando esse contexto, avalie as afirmações a seguir.

**I.** Uma lei que prevê que semáforos devem exibir ícones universais associados a cada uma de suas cores está relacionada ao Fundamento 1.

**II.** Ainda que esteja relacionado à acessibilidade em IHC, o Fundamento 1 deixa de tratar da inclusão de pessoas cegas.

**III.** Dado que a cidade possui uma página na *web* para a obtenção de informações, uma lei que preveja a existência de telas digitais públicas que permitam o acesso às informações disponibilizadas é suficiente para caracterizar a aplicação do Fundamento 2.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'A',
    explanation: `Avaliando cada afirmação diretamente à luz dos dois fundamentos do Design Universal / Acessibilidade (WCAG/IHC) apresentados:

- **Afirmação I (VERDADEIRA):** Associar ícones universais (formas geométricas/símbolos distintos) a cada cor do semáforo evita que a sinalização dependa exclusivamente da percepção cromática, garantindo que o equipamento atenda equitativamente também pessoas com daltonismo (diferentes habilidades sensoriais), alinhando-se diretamente ao **Fundamento 1** (uso equitativo).
- **Afirmação II (FALSA):** O Fundamento 1 cita explicitamente atender a todos os usuários *"independentemente de suas habilidades físicas, **sensoriais** ou cognitivas"*. A visão é uma capacidade sensorial; logo, a inclusão de pessoas cegas está plenamente contemplada.
- **Afirmação III (FALSA):** Apenas instalar telas digitais públicas **não é suficiente** para garantir o **Fundamento 2** (informações perceptíveis). Se o conteúdo exibido nessas telas não oferecer contraste adequado, alternativas textuais/sonoras, leitores de tela ou suporte a pessoas com deficiência visual, o princípio de perceptibilidade continua violado.

Portanto, apenas a afirmação **I** está correta — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Apenas I aplica corretamente os princípios de acessibilidade e Design Universal descritos no enunciado.',
      B: 'Incorreta. A afirmação II contradiz o texto do Fundamento 1, que abrange explicitamente habilidades sensoriais (incluindo deficiência visual/cegueira).',
      C: 'Incorreta. A afirmação III erra ao dizer que a mera instalação de telas digitais é "suficiente" para tornar as informações perceptíveis a todos.',
      D: 'Incorreta. Tanto II quanto III são falsas.',
      E: 'Incorreta. Inclui as afirmações falsas II e III.',
    },
    keyConcept: 'Princípios de acessibilidade em IHC e Design Universal: uso equitativo e informações perceptíveis.',
  },
  {
    id: 'enade-2023-q22',
    source: 'enade-2023',
    year: 2023,
    number: 22,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Modelagem Relacional e Consultas SQL (JOINs e ORDER BY)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Considere um banco de dados relacional formado por três tabelas, conforme é apresentado na figura a seguir. As chaves primárias das tabelas \`cliente\` e \`funcionario\` são chaves estrangeiras da tabela \`pessoa\`.

A partir dessas informações, considere que se queira realizar uma consulta que liste o nome e o saldo devedor de um subconjunto dos clientes. Essa consulta tem por objetivo encontrar clientes que são funcionários e que possuem saldo devedor maior do que seu salário.`,
    images: [
      {
        src: '/images/enade-2023/q22-fig.png',
        alt: 'Diagrama relacional com três tabelas: cliente (id_cliente PK/FK, data_cadastro, limite_credito, saldo_compras, saldo_devedor), funcionario (id_funcionario PK/FK, data_cadastro, cntps, matricula, pis, salario) e pessoa (id_pessoa PK, nome, cpf, rg, data_cadastro), com relacionamentos 1 para 0..1 entre pessoa e cliente, e entre pessoa e funcionario.',
        caption: 'Esquema relacional das tabelas cliente, funcionario e pessoa.',
      },
    ],
    command:
      'Com base nessas informações, assinale a opção que apresenta corretamente a consulta SQL, em ordem crescente por saldo devedor.',
    options: [
      {
        letter: 'A',
        text: `\`\`\`sql
SELECT * FROM cliente as c INNER JOIN pessoa as p, funcionario as f
WHERE c.saldo_devedor > f.salario AND c.id_cliente=p.id_pessoa
AND f.id_funcionario=p.id_pessoa ORDER BY c.saldo_devedor ASC
\`\`\``,
      },
      {
        letter: 'B',
        text: `\`\`\`sql
SELECT p.nome, c.saldo_devedor FROM cliente as c, pessoa as p
WHERE c.saldo_devedor > f.salario AND c.id_cliente=p.id_pessoa
AND f.id_funcionario=p.id_pessoa ORDER BY c.saldo_devedor DESC
\`\`\``,
      },
      {
        letter: 'C',
        text: `\`\`\`sql
SELECT p.nome, c.saldo_devedor FROM cliente as c, pessoa as p, funcionario as f
WHERE c.saldo_devedor < f.salario AND c.id_cliente=p.id_pessoa
AND f.id_funcionario=p.id_pessoa ORDER BY c.saldo_devedor ASC
\`\`\``,
      },
      {
        letter: 'D',
        text: `\`\`\`sql
SELECT p.nome, c.saldo_devedor FROM cliente as c
LEFT OUTER JOIN pessoa as p on c.id_cliente=p.id_pessoa
LEFT OUTER JOIN funcionario as f on p.id_pessoa=f.id_funcionario
WHERE c.saldo_devedor > f.salario ORDER BY f.salario, c.saldo_devedor ASC
\`\`\``,
      },
      {
        letter: 'E',
        text: `\`\`\`sql
SELECT p.nome, c.saldo_devedor FROM cliente as c
RIGHT OUTER JOIN pessoa as p ON c.id_cliente=p.id_pessoa
RIGHT OUTER JOIN funcionario as f on p.id_pessoa=f.id_funcionario
WHERE c.saldo_devedor > f.salario ORDER BY c.saldo_devedor ASC
\`\`\``,
      },
    ],
    correctOption: 'E',
    explanation: `Vamos conferir todos os requisitos da consulta solicitada:
1. **Projeção:** apenas \`p.nome, c.saldo_devedor\`.
2. **Junção:** clientes que também são funcionários (mesmo \`id_pessoa\` em \`cliente\`, \`pessoa\` e \`funcionario\`).
3. **Filtro:** \`c.saldo_devedor > f.salario\`.
4. **Ordenação:** ordem crescente por saldo devedor (\`ORDER BY c.saldo_devedor ASC\`).

Agora veja por que a alternativa **E** funciona corretamente apesar do \`RIGHT OUTER JOIN\` (um detalhe clássico de SQL!):
- \`cliente c RIGHT OUTER JOIN pessoa p ON c.id_cliente = p.id_pessoa\` mantém todas as pessoas (preenchendo colunas de \`c\` com \`NULL\` quando a pessoa não é cliente).
- Em seguida, \`RIGHT OUTER JOIN funcionario f ON p.id_pessoa = f.id_funcionario\` mantém todos os funcionários (com sua respectiva linha de \`pessoa\` e, caso seja cliente, sua linha de \`cliente\`; senão, \`c.saldo_devedor\` fica \`NULL\`).
- **Efeito decisivo do \`WHERE\`:** Na cláusula \`WHERE c.saldo_devedor > f.salario\`, qualquer linha em que o funcionário não seja cliente terá \`c.saldo_devedor = NULL\`. Em SQL (lógica de três valores), \`NULL > f.salario\` avalia como \`UNKNOWN\` (não verdadeiro) e a linha é **descartada**! Portanto, o \`WHERE\` converte efetivamente os \`RIGHT OUTER JOIN\`s em junções internas (*inner joins*), mantendo exatamente os clientes que são funcionários com saldo devedor maior que o salário!
- Por fim, projeta apenas \`p.nome, c.saldo_devedor\` e ordena por \`c.saldo_devedor ASC\`.

Logo, a única alternativa totalmente correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Usa `SELECT *` (retornando todas as colunas de todas as tabelas, em vez de apenas nome e saldo devedor) e omite a cláusula `ON` no `INNER JOIN` (erro de sintaxe no SQL padrão).',
      B: 'Incorreta. Omite a tabela `funcionario as f` na cláusula `FROM` (referenciando um alias inexistente) e ordena de forma decrescente (`DESC`) em vez de crescente (`ASC`).',
      C: 'Incorreta. Inverte o operador relacional para `c.saldo_devedor < f.salario` (menor que o salário, quando o enunciado pede maior).',
      D: 'Incorreta. Ordena primariamente por `f.salario` (`ORDER BY f.salario, c.saldo_devedor ASC`) em vez de ordenar em ordem crescente por saldo devedor.',
      E: 'Correta. Projeta `p.nome, c.saldo_devedor`, garante pelo `WHERE c.saldo_devedor > f.salario` que apenas clientes que são funcionários (sem `NULL`) passem no filtro e ordena corretamente por `c.saldo_devedor ASC`.',
    },
    keyConcept: 'SQL: projeção, sintaxe de JOINs, efeito da lógica de três valores (NULL no WHERE) transformando OUTER JOIN em INNER JOIN e critérios de ORDER BY.',
  },
  {
    id: 'enade-2023-q23',
    source: 'enade-2023',
    year: 2023,
    number: 23,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Filtros Ativos com Amplificadores Operacionais e Impedância de Entrada',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `As figuras a seguir representam dois circuitos que possuem a finalidade de construção de filtros para sinais analógicos.

Considerando que os amplificadores operacionais apresentados são ideais, avalie as afirmações a seguir.

**I.** Existe uma faixa de frequências na qual a impedância de entrada do circuito da Figura 1 é inferior à do circuito da Figura 2.

**II.** Ambos os circuitos realizam a função de filtro passa-baixa de primeira ordem.

**III.** A frequência de corte de ambos os filtros é igual.`,
    images: [
      {
        src: '/images/enade-2023/q23-fig.png',
        alt: 'Figura 1: circuito RC passa-alta (capacitor de 180 pF em série com a entrada vin(t) e resistor de 10 kOhm ao terra) conectado à entrada não inversora (+) de um amplificador operacional em configuração buffer (seguidor de tensão). Figura 2: amplificador operacional inversor com resistor de entrada de 18 kOhm e malha de realimentação formada por resistor de 1,8 kOhm em paralelo com capacitor de 100 pF.',
        caption: 'Circuitos de filtros analógicos com Amp-Ops ideais (Figura 1 e Figura 2).',
      },
    ],
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'A',
    explanation: `Vamos analisar completamente os dois filtros com Amp-Ops ideais ($i_+ = i_- = 0$ e $v_+ = v_-$ em realimentação negativa):

### 1. Circuito da Figura 1 (RC + Seguidor de Tensão)
- Como a corrente na entrada não inversora ($+$) é nula, temos um divisor de tensão entre $C_1 = 180\\text{ pF}$ (em série) e $R_1 = 10\\text{ k}\\Omega$ (para o terra), seguido de um *buffer* de ganho unitário ($v_o = v_+$):
  $$H_1(j\\omega) = \\frac{V_o(j\\omega)}{V_{in}(j\\omega)} = \\frac{R_1}{R_1 + \\frac{1}{j\\omega C_1}} = \\frac{j\\omega R_1 C_1}{1 + j\\omega R_1 C_1}$$
- **Tipo de filtro:** Para $\\omega \\to 0$, $|H_1| \\to 0$; para $\\omega \\to \\infty$, $|H_1| \\to 1$. Portanto, é um **filtro PASSA-ALTA** de 1ª ordem!
- **Frequência de corte:**
  $$f_{c1} = \\frac{1}{2\\pi R_1 C_1} = \\frac{1}{2\\pi (10 \\times 10^3)(180 \\times 10^{-12})} = \\frac{1}{2\\pi \\cdot 1{,}8 \\times 10^{-6}} \\approx 88{,}42\\text{ kHz}$$
- **Impedância de entrada:**
  $$Z_{in,1}(j\\omega) = R_1 + \\frac{1}{j\\omega C_1} \\implies |Z_{in,1}(f)| = \\sqrt{R_1^2 + \\left(\\frac{1}{2\\pi f C_1}\\right)^2}$$
  À medida que $f$ cresce, a reatância capacitiva $X_{C1} = \\frac{1}{2\\pi f C_1} \\to 0$, de modo que $|Z_{in,1}| \\to R_1 = 10\\text{ k}\\Omega$.

### 2. Circuito da Figura 2 (Filtro Ativo Inversor)
- A entrada inversora ($-$) está em **terra virtual** ($v_- = v_+ = 0$). A impedância de realimentação é o paralelo $Z_f = R_f \\parallel C_2$, com $R_f = 1{,}8\\text{ k}\\Omega$ e $C_2 = 100\\text{ pF}$, e o resistor de entrada é $R_a = 18\\text{ k}\\Omega$:
  $$Z_f(j\\omega) = \\frac{R_f}{1 + j\\omega R_f C_2} \\implies H_2(j\\omega) = -\\frac{Z_f(j\\omega)}{R_a} = -\\frac{R_f / R_a}{1 + j\\omega R_f C_2} = -\\frac{0{,}1}{1 + j\\omega R_f C_2}$$
- **Tipo de filtro:** Para $\\omega \\to 0$, $|H_2| = 0{,}1$; para $\\omega \\to \\infty$, $|H_2| \\to 0$. É um **filtro PASSA-BAIXA** de 1ª ordem.
- **Frequência de corte:** Depende apenas do ramo de realimentação ($R_f$ e $C_2$):
  $$f_{c2} = \\frac{1}{2\\pi R_f C_2} = \\frac{1}{2\\pi (1{,}8 \\times 10^3)(100 \\times 10^{-12})} = \\frac{1}{2\\pi \\cdot 1{,}8 \\times 10^{-7}} \\approx 884{,}19\\text{ kHz}$$
  *(Atenção à pegadinha do INEP: $R_a C_2 = 18\\text{ k}\\Omega \\times 100\\text{ pF} = 1{,}8\\,\\mu\\text{s} = R_1 C_1$, mas a frequência de corte depende de $R_f$, não de $R_a$! Assim $f_{c2} = 10 \\cdot f_{c1}$.)*
- **Impedância de entrada:** Como $v_-$ é terra virtual, toda corrente de entrada flui por $R_a$:
  $$Z_{in,2} = R_a = 18\\text{ k}\\Omega \\quad (\\text{constante em todas as frequências})$$

### 3. Julgamento das Afirmações
- **I (VERDADEIRA):** Como $|Z_{in,1}|$ tende a $10\\text{ k}\\Omega$ em altas frequências e $Z_{in,2} = 18\\text{ k}\\Omega$ é constante, temos $|Z_{in,1}| < Z_{in,2}$ sempre que:
  $$\\sqrt{10^2 + X_{C1}^2} < 18 \\implies X_{C1} < \\sqrt{224} \\approx 14{,}97\\text{ k}\\Omega \\implies f > 59{,}1\\text{ kHz}$$
  Logo, existe sim uma faixa de frequências ($f > 59{,}1\\text{ kHz}$) na qual a impedância de entrada da Figura 1 é inferior à da Figura 2!
- **II (FALSA):** A Figura 1 é um filtro **passa-alta**, enquanto a Figura 2 é um filtro **passa-baixa**.
- **III (FALSA):** $f_{c1} \\approx 88{,}4\\text{ kHz} \\neq f_{c2} \\approx 884{,}2\\text{ kHz}$.

Portanto, apenas a afirmação **I** está correta — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Apenas a afirmação I é verdadeira: acima de ~59,1 kHz, $|Z_{in,1}|$ cai abaixo dos $18\\text{ k}\\Omega$ constantes da Figura 2 (tendendo a $10\\text{ k}\\Omega$).',
      B: 'Incorreta. A afirmação II é falsa porque a Figura 1 tem o capacitor em série na entrada e o resistor ao terra, caracterizando um filtro passa-alta.',
      C: 'Incorreta. A afirmação III é falsa: a frequência de corte da Figura 2 depende de $R_f = 1{,}8\\text{ k}\\Omega$ (e não de $R_a = 18\\text{ k}\\Omega$), resultando em $f_{c2} = 10 \\cdot f_{c1}$.',
      D: 'Incorreta. Tanto II quanto III são falsas.',
      E: 'Incorreta. Inclui as afirmações falsas II e III.',
    },
    keyConcept: 'Filtros ativos de 1ª ordem com Amp-Op: passa-alta vs. passa-baixa, impedância de entrada em terra virtual e cálculo da frequência de corte $f_c = 1/(2\\pi R C)$.',
  },
  {
    id: 'enade-2023-q24',
    source: 'enade-2023',
    year: 2023,
    number: 24,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Microcontroladores: Registradores de Porta GPIO (DIR, IN, OUT) e Pull-up/Pull-down',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Um determinado sistema embarcado possui uma porta paralela de 8 *bits*, na qual cada pino pode ser configurado individualmente como interface de entrada ou de saída. A direção de cada pino da porta é definida pelo *bit* correspondente do registrador de direção de 8 *bits* \`PORT_DIR\` da seguinte forma: valor \`0\` para configuração como entrada e valor \`1\` para configuração como saída.

Os *bits* de entrada da porta são armazenados no registrador \`PORT_IN\` e os *bits* de saída da porta são armazenados no registrador \`PORT_OUT\`, ambos de 8 *bits*. Os pinos que correspondem ao *nibble* (conjunto de 4 *bits*) menos significativo da porta de I/O são conectados aos seguintes dispositivos externos: alarme (\`SPK1\`), chave 2 (\`CH2\`), LED (\`LED1\`) e chave 1 (\`CH1\`), conforme a figura a seguir.

Considere que uma tensão $V_{DD}$ na porta corresponda ao valor lógico \`1\` e que uma tensão próxima a $0\\text{ V}$ corresponda ao valor lógico \`0\`.

Com base nas informações apresentadas e no esquema da figura, avalie as afirmações a seguir.

**I.** O *nibble* menos significativo do registrador \`PORT_DIR\` deverá ser carregado com o valor 9 (decimal) pelo *software* do sistema para configuração adequada da porta de I/O.

**II.** Quando ambas as chaves (1 e 2) estiverem fechadas simultaneamente, o registrador \`PORT_IN\` possuirá o valor binário \`X1X0\` no *nibble* menos significativo (\`X\` significa irrelevante).

**III.** Para acionar o alarme e o LED, simultaneamente, o registrador \`PORT_OUT\` deverá ser carregado com o valor binário \`1X0X\` no *nibble* menos significativo (\`X\` significa irrelevante).`,
    images: [
      {
        src: '/images/enade-2023/q24-fig.png',
        alt: 'Esquema de quatro pinos (P3, P2, P1, P0) da porta de I/O: P3 conectado ao alarme SPK1 (cujo outro terminal vai ao terra); P2 conectado via resistor à chave CH2 (ligada a VDD) com resistor pull-down ao terra; P1 conectado ao cátodo do LED1 (cujo ânodo liga-se via resistor a VDD); P0 conectado à chave CH1 (ligada ao terra) com resistor pull-up a VDD.',
        caption: 'Conexão dos dispositivos externos aos pinos P3, P2, P1 e P0 da porta paralela.',
      },
    ],
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada pino do *nibble* menos significativo na ordem $(P_3, P_2, P_1, P_0)$:

| Pino | Dispositivo | Direção (\`PORT_DIR\`) | Lógica elétrica |
| :---: | :--- | :---: | :--- |
| **$P_3$** | Alarme (\`SPK1\`, outro polo no GND) | Saída = \`1\` | Ativo em nível alto (\`1\` = $V_{DD}$ aciona) |
| **$P_2$** | Chave 2 (\`CH2\` em $V_{DD}$, *pull-down* no GND) | Entrada = \`0\` | Aberta $\\to$ \`0\`; Fechada $\\to$ \`1\` ($V_{DD}$) |
| **$P_1$** | LED (\`LED1\`, ânodo em $V_{DD}$, cátodo em $P_1$) | Saída = \`1\` | Ativo em nível baixo (\`0\` = $0\\text{ V}$ acende) |
| **$P_0$** | Chave 1 (\`CH1\` no GND, *pull-up* em $V_{DD}$) | Entrada = \`0\` | Aberta $\\to$ \`1\`; Fechada $\\to$ \`0\` ($0\\text{ V}$) |

Avaliando as três afirmações:

- **I (FALSA):** Para configurar $P_3$ e $P_1$ como saídas (\`1\`) e $P_2$ e $P_0$ como entradas (\`0\`), o *nibble* $(P_3 P_2 P_1 P_0)$ de \`PORT_DIR\` deve receber:
  $$(1010)_2 = 1 \\cdot 8 + 0 \\cdot 4 + 1 \\cdot 2 + 0 \\cdot 1 = 10_{10} \\; (\\text{e não } 9_{10} = (1001)_2)$$
- **II (VERDADEIRA):** Com ambas as chaves fechadas:
  - \`CH2\` fecha o circuito para $V_{DD} \\implies P_2 = 1$;
  - \`CH1\` aterra o nó diretamente ao GND $\\implies P_0 = 0$.
  Portanto, os bits de entrada no *nibble* $(P_3 P_2 P_1 P_0)$ de \`PORT_IN\` valem **\`X1X0\`**.
- **III (VERDADEIRA):** Para acionar ambos os atuadores simultaneamente:
  - \`SPK1\` tem um terminal aterrado, logo precisa de $V_{DD}$ em $P_3 \\implies P_3 = 1$;
  - \`LED1\` tem o ânodo em $V_{DD}$ (via resistor limitador) e o cátodo em $P_1$, logo precisa de $0\\text{ V}$ em $P_1$ para polarizar diretamente (*active-low*) $\\implies P_1 = 0$.
  Portanto, o *nibble* $(P_3 P_2 P_1 P_0)$ de \`PORT_OUT\` deve ser **\`1X0X\`**.

Logo, apenas **II e III** estão corretas — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação I é falsa: o nibble correto para `PORT_DIR` é `1010₂ = 10` em decimal (9 seria `1001₂`, configurando erroneamente P0 como saída e P1 como entrada).',
      B: 'Incorreta. Omite a afirmação III, que também é verdadeira.',
      C: 'Incorreta. Inclui a afirmação falsa I e omite a verdadeira II.',
      D: 'Correta. Tanto a leitura das chaves em `PORT_IN` (`X1X0`) quanto o acionamento simultâneo de SPK1 (ativo alto) e LED1 (ativo baixo) em `PORT_OUT` (`1X0X`) estão corretos.',
      E: 'Incorreta. Inclui a afirmação falsa I (`1010₂ = 10`, não 9).',
    },
    keyConcept: 'Interfaceamento de GPIO em sistemas embarcados: registradores DIR/IN/OUT, resistores de pull-up/pull-down e lógica active-high vs. active-low.',
  },
];
