import type { ObjectiveQuestion } from '../../types/enade';

export const SIMULADO_INEDITO_1_PART_2: ObjectiveQuestion[] = [
  // =========================================================================
  // COMPONENTE ESPECÍFICO — PARTE 2 (Q20 a Q38)
  // =========================================================================
  {
    id: 'inedita-1-q20',
    source: 'inedita-1',
    year: 2026,
    number: 20,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Hierarquia de Memória: Tempo Médio de Acesso (AMAT) em Cache Multinível',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um processador moderno emprega uma hierarquia de memória composta por dois níveis de memória cache (L1 e L2) antes da memória principal (RAM). Em uma carga de trabalho de referência, os parâmetros de acesso de leitura (expressos em ciclos de *clock*) são os seguintes:

| Nível de Memória | Tempo de Acerto (*Hit Time*) | Taxa de Falta Local (*Local Miss Rate*) |
| :--- | :---: | :---: |
| Cache L1 | $2$ ciclos | $10\\%$ ($0{,}10$) |
| Cache L2 | $12$ ciclos | $25\\%$ ($0{,}25$) |
| Memória Principal (RAM) | Penalidade de $100$ ciclos após falta na L2 | — |

Lembre-se de que a **taxa de falta local da L2** representa a fração dos acessos que falharam na L1 e também falham na L2 (exigindo acesso à RAM), e que o acesso à L2 ocorre somente após uma falta na L1.`,
    command:
      'Qual é o Tempo Médio de Acesso à Memória (AMAT — *Average Memory Access Time*) desse sistema, em ciclos de *clock*?',
    options: [
      { letter: 'A', text: '$5{,}70$ ciclos.' },
      { letter: 'B', text: '$3{,}70$ ciclos.' },
      { letter: 'C', text: '$13{,}20$ ciclos.' },
      { letter: 'D', text: '$28{,}20$ ciclos.' },
      { letter: 'E', text: '$39{,}00$ ciclos.' },
    ],
    correctOption: 'A',
    explanation: `O Tempo Médio de Acesso à Memória (AMAT) em uma hierarquia de dois níveis de cache é dado recursivamente por:

$$\\text{AMAT} = T_{\\text{hit},L1} + \\text{MR}_{L1} \\times \\Big(T_{\\text{hit},L2} + \\text{MR}_{L2,\\text{local}} \\times \\text{Penalidade}_{\\text{RAM}}\\Big)$$

**Passo 1 — Penalidade média de uma falta na L1 (AMAT vista a partir da L2):**

$$\\text{Penalidade}_{L1} = 12 + 0{,}25 \\times 100 = 12 + 25 = 37\\text{ ciclos}$$

**Passo 2 — Cálculo do AMAT total:**

$$\\text{AMAT} = 2 + 0{,}10 \\times 37 = 2 + 3{,}70 = 5{,}70\\text{ ciclos}$$

**Conferência por decomposição probabilística dos três cenários mutuamente exclusivos:**
- Acerto na L1 ($90\\%$): $0{,}90 \\times 2 = 1{,}80$ ciclos;
- Falta na L1 e acerto na L2 ($0{,}10 \\times 0{,}75 = 7{,}5\\%$): $0{,}075 \\times (2 + 12) = 1{,}05$ ciclos;
- Falta na L1 e falta na L2 ($0{,}10 \\times 0{,}25 = 2{,}5\\%$, taxa de falta **global**): $0{,}025 \\times (2 + 12 + 100) = 2{,}85$ ciclos;
- Soma: $1{,}80 + 1{,}05 + 2{,}85 = 5{,}70$ ciclos.

Portanto, a resposta correta é a alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Aplica rigorosamente a fórmula multinível com taxa de falta local na L2 ($2 + 0{,}10 \\times (12 + 0{,}25 \\times 100) = 5{,}70$ ciclos).',
      B: 'Incorreta. Esquece de somar o tempo de acerto da cache L1 ($T_{\\text{hit},L1} = 2$ ciclos), computando apenas a parcela de penalidade ($3{,}70$ ciclos).',
      C: 'Incorreta. Ignora a taxa de falta da L2, multiplicando toda a soma $(12 + 100)$ por $0{,}10$: $2 + 0{,}10 \\times 112 = 13{,}20$ ciclos.',
      D: 'Incorreta. Pegadinha clássica de Hennessy & Patterson: trata a taxa de falta **local** da L2 ($0{,}25$) como se fosse **global**, calculando $2 + 0{,}10 \\times 12 + 0{,}25 \\times 100 = 28{,}20$ ciclos.',
      E: 'Incorreta. Desconsidera completamente a taxa de falta da L1 ($0{,}10$), somando $2 + 12 + 0{,}25 \\times 100 = 39{,}00$ ciclos.',
    },
    keyConcept: 'Hierarquia de memória multinível: fórmula do AMAT e distinção entre taxa de falta local ($\\text{MR}_{L2,\\text{local}}$) e global ($\\text{MR}_{L1} \\times \\text{MR}_{L2,\\text{local}}$).',
  },
  {
    id: 'inedita-1-q21',
    source: 'inedita-1',
    year: 2026,
    number: 21,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Árvores Binárias de Busca Balanceadas (AVL) e Rotações Duplas',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Em uma **árvore AVL**, todo nó mantém o invariante de balanceamento $FB = h_{\\text{esq}} - h_{\\text{dir}} \\in \\{-1, 0, +1\\}$, em que $h_{\\text{esq}}$ e $h_{\\text{dir}}$ denotam as alturas de suas subárvores esquerda e direita (considerando altura $0$ para uma subárvore vazia e altura $1$ para uma folha).

Partindo de uma árvore AVL inicialmente vazia, inserem-se sequencialmente as seis chaves inteiras a seguir, na ordem exata apresentada:

\`40, 20, 60, 10, 30, 25\``,
    command:
      'Imediatamente após a inserção da chave `25` e a execução do rebalanceamento necessário, qual rotação foi aplicada, qual chave torna-se a raiz da árvore e qual é a sequência de chaves no percurso em **pré-ordem** (raiz, esquerda, direita)?',
    options: [
      {
        letter: 'A',
        text: 'Rotação simples à direita no nó `40`; raiz `20`; pré-ordem `20, 10, 40, 30, 25, 60`.',
      },
      {
        letter: 'B',
        text: 'Rotação simples à esquerda no nó `20`; raiz `40`; pré-ordem `40, 30, 20, 10, 25, 60`.',
      },
      {
        letter: 'C',
        text: 'Rotação dupla à esquerda (RL) no nó `40`; raiz `25`; pré-ordem `25, 20, 10, 30, 40, 60`.',
      },
      {
        letter: 'D',
        text: 'Nenhuma rotação é necessária, pois `25` é inserida como folha; raiz `40`; pré-ordem `40, 20, 10, 30, 25, 60`.',
      },
      {
        letter: 'E',
        text: 'Rotação dupla à direita (Esquerda-Direita / LR) no nó `40`; raiz `30`; pré-ordem `30, 20, 10, 25, 40, 60`.',
      },
    ],
    correctOption: 'E',
    explanation: `**Passo 1 — Inserções de \`40, 20, 60, 10, 30\` (todas balanceadas):**
Após inserir as 5 primeiras chaves, temos raiz \`40\` ($h=3, FB=+1$), filho esquerdo \`20\` ($h=2, FB=0$, com filhos \`10\` e \`30\`) e filho direito \`60\` ($h=1, FB=0$).

**Passo 2 — Inserção da chave \`25\` (filho esquerdo de \`30\`):**
\`\`\`text
        40  (h=4, FB = 3 - 1 = +2 -> DESBALANCEADO!)
       /  \\
     20    60 (h=1, FB=0)
    /  \\   (20: h=3, FB = 1 - 2 = -1)
  10    30 (h=2, FB = 1 - 0 = +1)
       /
     25    (h=1, FB=0)
\`\`\`
O primeiro ancestral desbalanceado subindo de \`25\` é o nó **\`40\`** ($FB = +2$, pesado à esquerda), cujo filho esquerdo **\`20\`** tem $FB = -1$ (pesado à direita — sinais opostos!). Isso caracteriza o caso **Esquerda-Direita (LR)**, que exige uma **rotação dupla à direita**:

1. **Rotação simples à esquerda em \`20\`:** \`30\` sobe para o lugar de \`20\`; \`20\` torna-se filho esquerdo de \`30\`; o antigo filho esquerdo de \`30\` (\`25\`) passa a ser **filho direito de \`20\`**.
2. **Rotação simples à direita em \`40\`:** \`30\` sobe para ser a **nova raiz**; \`40\` torna-se filho direito de \`30\` (levando \`60\` como seu filho direito).

**Passo 3 — Árvore AVL rebalanceada final:**
\`\`\`text
          30  (h=3, FB=0)
         /  \\
       20    40 (h=2, FB=-1)
      /  \\     \\
    10    25    60
\`\`\`
- Conferência em-ordem (propriedade ABB): \`10, 20, 25, 30, 40, 60\` (estritamente crescente!).
- Conferência de **pré-ordem** (Raiz $\\to$ Esquerda $\\to$ Direita): **\`30, 20, 10, 25, 40, 60\`**.

Logo, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Aplica rotação simples à direita (caso LL), ignorando que `FB(20) = -1` tem sinal oposto ao de `FB(40) = +2`, o que violaria o balanceamento ou a propriedade de ABB.',
      B: 'Incorreta. Executa apenas a primeira metade da rotação dupla (rotação à esquerda em `20`), deixando o nó `40` ainda com $FB = +2$.',
      C: 'Incorreta. Confunde a orientação LR com RL e promove indevidamente o nó folha `25` até a raiz.',
      D: 'Incorreta. Ignora a atualização das alturas dos ancestrais após inserir `25`, que faz a altura da subárvore esquerda de `40` subir para $3$ contra $1$ na direita ($FB = +2$).',
      E: 'Correta. Identifica exatamente o caso LR (rotação dupla à direita no nó `40`), a nova raiz `30` e o percurso pré-ordem `30, 20, 10, 25, 40, 60`.',
    },
    keyConcept: 'Árvore AVL: detecção de desbalanceamento ($|FB| = 2$), critério de sinais opostos para rotação dupla (caso LR = esquerda no filho + direita no pivô) e percurso em pré-ordem.',
  },
  {
    id: 'inedita-1-q22',
    source: 'inedita-1',
    year: 2026,
    number: 22,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Circuitos em Corrente Alternada (CA): Impedância RLC Série, RMS e Potência Ativa',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um circuito **RLC série** em regime permanente senoidal é alimentado por uma fonte de tensão alternada com valor eficaz $V_{\\text{rms}} = 100\\text{ V}$ e frequência angular $\\omega = 1\\,000\\text{ rad/s}$. Os parâmetros nominais dos três elementos são:

- Resistor: $R = 60\\,\\Omega$;
- Indutor: $L = 120\\text{ mH}$;
- Capacitor: $C = 25\\,\\mu\\text{F}$.`,
    command:
      'Para esse circuito em regime permanente senoidal, quais são, respectivamente, o módulo da impedância equivalente $|\\mathbf{Z}|$, a corrente eficaz $I_{\\text{rms}}$, a potência ativa média dissipada $P$ e o fator de potência (com seu caráter)?',
    options: [
      {
        letter: 'A',
        text: '$|\\mathbf{Z}| = 220\\,\\Omega$, $I_{\\text{rms}} \\approx 0{,}45\\text{ A}$, $P \\approx 12{,}4\\text{ W}$ e fator de potência $0{,}27$ atrasado (indutivo).',
      },
      {
        letter: 'B',
        text: '$|\\mathbf{Z}| = 100\\,\\Omega$, $I_{\\text{rms}} = 1{,}0\\text{ A}$, $P = 60\\text{ W}$ e fator de potência $0{,}60$ atrasado (indutivo).',
      },
      {
        letter: 'C',
        text: '$|\\mathbf{Z}| = 100\\,\\Omega$, $I_{\\text{rms}} = 1{,}0\\text{ A}$, $P = 100\\text{ W}$ e fator de potência $0{,}60$ adiantado (capacitivo).',
      },
      {
        letter: 'D',
        text: '$|\\mathbf{Z}| = 140\\,\\Omega$, $I_{\\text{rms}} \\approx 0{,}71\\text{ A}$, $P \\approx 30{,}6\\text{ W}$ e fator de potência $0{,}43$ atrasado (indutivo).',
      },
      {
        letter: 'E',
        text: '$|\\mathbf{Z}| = 100\\,\\Omega$, $I_{\\text{rms}} = 1{,}0\\text{ A}$, $P = 80\\text{ W}$ e fator de potência $0{,}80$ atrasado (indutivo).',
      },
    ],
    correctOption: 'B',
    explanation: `**Passo 1 — Cálculo das reatâncias indutiva ($X_L$) e capacitiva ($X_C$):**

$$X_L = \\omega L = 1\\,000 \\times 120 \\times 10^{-3} = 120\\,\\Omega$$

$$X_C = \\frac{1}{\\omega C} = \\frac{1}{1\\,000 \\times 25 \\times 10^{-6}} = \\frac{1}{25 \\times 10^{-3}} = 40\\,\\Omega$$

**Passo 2 — Impedância complexa $\\mathbf{Z}$ e seu módulo:**

$$\\mathbf{Z} = R + j(X_L - X_C) = 60 + j(120 - 40) = 60 + j80\\,\\Omega$$

$$|\\mathbf{Z}| = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{60^2 + 80^2} = \\sqrt{3\\,600 + 6\\,400} = \\sqrt{10\\,000} = 100\\,\\Omega$$

**Passo 3 — Corrente eficaz ($I_{\\text{rms}}$):**

$$I_{\\text{rms}} = \\frac{V_{\\text{rms}}}{|\\mathbf{Z}|} = \\frac{100}{100} = 1{,}0\\text{ A}$$

**Passo 4 — Fator de potência e potência ativa ($P$):**
Como $X_L > X_C$ ($120\\,\\Omega > 40\\,\\Omega$), a parte imaginária de $\\mathbf{Z}$ é positiva ($\\varphi > 0$), logo a corrente **atrasa** em relação à tensão — caráter **indutivo (atrasado)**:

$$\\text{FP} = \\cos\\varphi = \\frac{R}{|\\mathbf{Z}|} = \\frac{60}{100} = 0{,}60\\text{ atrasado}$$

$$P = V_{\\text{rms}} \\cdot I_{\\text{rms}} \\cdot \\cos\\varphi = R \\cdot I_{\\text{rms}}^2 = 60 \\times (1{,}0)^2 = 60\\text{ W}$$

*(Nota: $100\\text{ VA}$ é a potência aparente $S$, e $80\\text{ var}$ é a potência reativa $Q$.)*

Logo, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Soma algebricamente $R + X_L + X_C = 60 + 120 + 40 = 220\\,\\Omega$, ignorando a natureza fasorial ortogonal das reatâncias e a oposição de fase entre $X_L$ e $X_C$.',
      B: 'Correta. Todos os valores fasoriais e energéticos ($|\\mathbf{Z}| = 100\\,\\Omega$, $I_{\\text{rms}} = 1{,}0\\text{ A}$, $P = 60\\text{ W}$, $\\text{FP} = 0{,}60$ atrasado) estão exatos.',
      C: 'Incorreta. Confunde potência ativa ($60\\text{ W}$) com potência aparente ($S = V_{\\text{rms}} I_{\\text{rms}} = 100\\text{ VA}$) e inverte o caráter do circuito (como $X_L > X_C$, é indutivo/atrasado, não capacitivo/adiantado).',
      D: 'Incorreta. Calcula $|\\mathbf{Z}| = R + (X_L - X_C) = 60 + 80 = 140\\,\\Omega$ em vez de aplicar a norma euclidiana $\\sqrt{R^2 + X^2}$.',
      E: 'Incorreta. Troca $R$ por $X$ no triângulo de impedâncias, reportando a potência reativa ($Q = 80\\text{ var}$) e $\\sin\\varphi = 0{,}80$ no lugar de $P$ e $\\cos\\varphi$.',
    },
    keyConcept: 'Análise fasorial de circuito RLC série: $\\mathbf{Z} = R + j(\\omega L - 1/(\\omega C))$, $I_{\\text{rms}} = V_{\\text{rms}}/|\\mathbf{Z}|$, $\\cos\\varphi = R/|\\mathbf{Z}|$ e $P = R I_{\\text{rms}}^2$.',
  },
  {
    id: 'inedita-1-q23',
    source: 'inedita-1',
    year: 2026,
    number: 23,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Máquinas de Estados Finitos (FSM): Mealy vs. Moore e Detector de Sequência',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `Um engenheiro de *hardware* projeta um circuito sequencial síncrono detector da sequência binária \`101\` sobre uma entrada serial $x$ (um bit por borda ativa de *clock*), permitindo **sobreposição** de padrões (por exemplo, na entrada \`10101\`, o circuito deve sinalizar detecção duas vezes).

A tabela de transição e saída abaixo especifica a máquina de estados implementada, com estado inicial de *reset* igual a \`S0\`:

| Estado Atual | Próx. Estado ($x=0$) | Saída $z$ ($x=0$) | Próx. Estado ($x=1$) | Saída $z$ ($x=1$) |
| :---: | :---: | :---: | :---: | :---: |
| \`S0\` (inicial) | \`S0\` | \`0\` | \`S1\` | \`0\` |
| \`S1\` (viu \`1\`) | \`S2\` | \`0\` | \`S1\` | \`0\` |
| \`S2\` (viu \`10\`) | \`S0\` | \`0\` | \`S1\` | \`1\` |

Acerca do funcionamento e da síntese dessa máquina de estados finitos (FSM), avalie as afirmações a seguir.

**I.** Aplicando-se a sequência de entrada $x = \\texttt{1101010}$ (da esquerda para a direita) a partir de \`S0\`, a sequência de saídas produzida é $z = \\texttt{0001010}$ e a máquina termina no estado \`S2\`.

**II.** Caso o mesmo detector de \`101\` com sobreposição fosse projetado como uma máquina de **Moore**, seriam necessários no mínimo **4 estados** distintos (em vez de 3), pois um estado dedicado deveria produzir $z = 1$ após a borda de *clock*.

**III.** A tabela apresentada descreve uma máquina de **Moore**, uma vez que a saída $z$ depende exclusivamente do estado atual \`S2\`, sendo independente do valor instantâneo da entrada $x$.

**IV.** Utilizando codificação binária mínima para os 3 estados da tabela apresentada, a síntese do registrador de estado requer no mínimo **2 flip-flops** (restando $1$ combinação binária não utilizada).`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'I, II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação com rigor de projeto lógico sequencial:

- **Afirmação I (VERDADEIRA):** Rastreando bit a bit a entrada \`x = 1 1 0 1 0 1 0\` a partir de \`S0\`:
  1. \`S0\` com $x=1 \\implies z=0$, vai para \`S1\`
  2. \`S1\` com $x=1 \\implies z=0$, permanece em \`S1\`
  3. \`S1\` com $x=0 \\implies z=0$, vai para \`S2\`
  4. \`S2\` com $x=1 \\implies$ **$z=1$** (detectou \`101\` nos bits 2–4), vai para \`S1\` (reaproveita o \`1\` final!)
  5. \`S1\` com $x=0 \\implies z=0$, vai para \`S2\`
  6. \`S2\` com $x=1 \\implies$ **$z=1$** (detectou \`101\` sobreposto nos bits 4–6), vai para \`S1\`
  7. \`S1\` com $x=0 \\implies z=0$, vai para **\`S2\`**
  Logo, $z = \\texttt{0001010}$ e o estado final é \`S2\`.

- **Afirmação II (VERDADEIRA):** Em uma máquina de Moore, a saída depende *exclusivamente* do estado atual. Assim, não é possível reaproveitar o estado \`S1\` ($z=0$) para representar o reconhecimento completo \`101\` ($z=1$); são necessários no mínimo 4 estados: \`M0\` (reset, $z=0$), \`M1\` (viu \`1\`, $z=0$), \`M2\` (viu \`10\`, $z=0$) e \`M3\` (viu \`101\`, $z=1$).

- **Afirmação III (FALSA):** No estado \`S2\`, a saída vale $z = 0$ quando $x = 0$ e $z = 1$ quando $x = 1$. Como a saída depende do **estado atual e da entrada atual**, trata-se de uma máquina de **Mealy**, não de Moore.

- **Afirmação IV (VERDADEIRA):** Para codificar $N = 3$ estados em binário compacto, o número mínimo de flip-flops é $\\lceil \\log_2 3 \\rceil = 2$ flip-flops, capazes de representar $2^2 = 4$ estados (deixando $4 - 3 = 1$ estado não utilizado).

Portanto, estão corretas apenas **I, II e IV** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Classifica a FSM erroneamente como Moore (III é falsa) e omite II e IV.',
      B: 'Incorreta. Inclui III (falsa) e omite I e IV.',
      C: 'Correta. Valida o rastreamento da sequência em I, o custo mínimo de 4 estados em Moore em II e o cálculo $\\lceil \\log_2 3 \\rceil = 2$ flip-flops em IV, rejeitando III.',
      D: 'Incorreta. Inclui a afirmação falsa III e omite II.',
      E: 'Incorreta. Inclui a afirmação falsa III e omite I.',
    },
    keyConcept: 'FSM Mealy (saída depende de estado + entrada; menos estados) vs. Moore (saída depende só do estado; requer estado dedicado para $z=1$) e dimensionamento de flip-flops ($\\lceil \\log_2 N \\rceil$).',
  },
  {
    id: 'inedita-1-q24',
    source: 'inedita-1',
    year: 2026,
    number: 24,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Memória Virtual: Políticas de Substituição de Páginas (FIFO, LRU, OPT) e Anomalia de Belady',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Em um sistema operacional com paginação sob demanda, um processo dispõe de **3 molduras** (*frames*) de memória física inicialmente vazias e gera a seguinte sequência de 10 referências a páginas virtuais:

\`1, 2, 3, 1, 4, 1, 2, 5, 1, 2\``,
    command:
      'Aplicando as políticas de substituição **FIFO**, **LRU** (*Least Recently Used*) e **Ótima (OPT)** à sequência acima, quais são, respectivamente, os números totais de faltas de página (*page faults*) obtidos e qual dessas políticas está sujeita à anomalia de Belady?',
    options: [
      {
        letter: 'A',
        text: '$6$, $7$ e $5$ faltas; apenas LRU está sujeita à anomalia de Belady.',
      },
      {
        letter: 'B',
        text: '$7$, $6$ e $6$ faltas; tanto FIFO quanto LRU estão sujeitas à anomalia de Belady.',
      },
      {
        letter: 'C',
        text: '$8$, $6$ e $5$ faltas; apenas FIFO está sujeita à anomalia de Belady.',
      },
      {
        letter: 'D',
        text: '$7$, $6$ e $5$ faltas; entre as três políticas, apenas FIFO está sujeita à anomalia de Belady.',
      },
      {
        letter: 'E',
        text: '$7$, $7$ e $5$ faltas; nenhuma das três políticas sofre anomalia de Belady por serem algoritmos de pilha.',
      },
    ],
    correctOption: 'D',
    explanation: `Vamos rastrear cada algoritmo passo a passo sobre a sequência \`1, 2, 3, 1, 4, 1, 2, 5, 1, 2\` com $3$ molduras:

**1. Política FIFO (substitui a página que entrou há mais tempo, ignorando reuso recente):**
1. \`1\` $\\to$ \`[1]\` (**Falta 1**)
2. \`2\` $\\to$ \`[1, 2]\` (**Falta 2**)
3. \`3\` $\\to$ \`[1, 2, 3]\` (**Falta 3**)
4. \`1\` $\\to$ \`[1, 2, 3]\` (Acerto — ordem da fila continua \`1, 2, 3\`)
5. \`4\` $\\to$ remove \`1\` (mais antiga) $\\to$ \`[2, 3, 4]\` (**Falta 4**)
6. \`1\` $\\to$ remove \`2\` $\\to$ \`[3, 4, 1]\` (**Falta 5**)
7. \`2\` $\\to$ remove \`3\` $\\to$ \`[4, 1, 2]\` (**Falta 6**)
8. \`5\` $\\to$ remove \`4\` $\\to$ \`[1, 2, 5]\` (**Falta 7**)
9. \`1\` $\\to$ \`[1, 2, 5]\` (Acerto)
10. \`2\` $\\to$ \`[1, 2, 5]\` (Acerto)
**Total FIFO = $7$ faltas.**

**2. Política LRU (substitui a menos recentemente usada; lista ordenada do LRU ao MRU):**
1. \`1\` $\\to$ \`[1]\` (**Falta 1**)
2. \`2\` $\\to$ \`[1, 2]\` (**Falta 2**)
3. \`3\` $\\to$ \`[1, 2, 3]\` (**Falta 3**)
4. \`1\` $\\to$ Acerto! Atualiza recência: \`[2, 3, 1]\`
5. \`4\` $\\to$ remove \`2\` (LRU) $\\to$ \`[3, 1, 4]\` (**Falta 4**)
6. \`1\` $\\to$ Acerto! Atualiza recência: \`[3, 4, 1]\` *(diferença crucial em relação ao FIFO!)*
7. \`2\` $\\to$ remove \`3\` (LRU) $\\to$ \`[4, 1, 2]\` (**Falta 5**)
8. \`5\` $\\to$ remove \`4\` (LRU) $\\to$ \`[1, 2, 5]\` (**Falta 6**)
9. \`1\` $\\to$ Acerto! \`[2, 5, 1]\`
10. \`2\` $\\to$ Acerto! \`[5, 1, 2]\`
**Total LRU = $6$ faltas.**

**3. Política Ótima — OPT (substitui a página cujo próximo uso futuro é o mais distante):**
1–3. \`1, 2, 3\` $\\to$ \`{1, 2, 3}\` (**3 faltas**)
4. \`1\` $\\to$ Acerto
5. \`4\` $\\to$ olhando adiante (\`1, 2, 5, 1, 2\`), a página \`3\` não volta a ser usada $\\to$ remove \`3\` $\\to$ \`{1, 2, 4}\` (**Falta 4**)
6–7. \`1, 2\` $\\to$ Acertos!
8. \`5\` $\\to$ olhando adiante (\`1, 2\`), \`4\` não volta a ser usada $\\to$ remove \`4\` $\\to$ \`{1, 2, 5}\` (**Falta 5**)
9–10. \`1, 2\` $\\to$ Acertos!
**Total OPT = $5$ faltas.**

**4. Anomalia de Belady:**
Consiste no paradoxo em que aumentar o número de molduras eleva o número de faltas de página. **LRU** e **OPT** possuem a **propriedade de inclusão (algoritmos de pilha)**, logo **nunca** sofrem anomalia de Belady. **FIFO** não é algoritmo de pilha e **está sujeita** à anomalia.

Portanto, a resposta correta é a alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Inverte os resultados de FIFO ($7$) e LRU ($6$) e atribui erroneamente a anomalia de Belady ao LRU.',
      B: 'Incorreta. Erra o total do algoritmo Ótimo ($5$, não $6$) e afirma incorretamente que LRU sofre anomalia de Belady.',
      C: 'Incorreta. Conta $8$ faltas para FIFO em vez de $7$ (provavelmente esquecendo um dos acertos nas posições 4, 9 ou 10).',
      D: 'Correta. Obtém exatamente $7$ (FIFO), $6$ (LRU) e $5$ (OPT) faltas e identifica corretamente que apenas FIFO não satisfaz a propriedade de inclusão de pilha, estando sujeita à anomalia de Belady.',
      E: 'Incorreta. Erra o total do LRU ($6$, pois o acerto no passo 4 protege a página `1` no passo 5) e afirma falsamente que FIFO é algoritmo de pilha.',
    },
    keyConcept: 'Substituição de páginas (FIFO vs. LRU vs. Ótimo) e propriedade de inclusão de pilha (imunidade de LRU e OPT à anomalia de Belady).',
  },
  {
    id: 'inedita-1-q25',
    source: 'inedita-1',
    year: 2026,
    number: 25,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Protocolo TCP Reno: Controle de Congestionamento (Slow Start, AIMD e Fast Recovery)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Considere uma conexão utilizando o modelo clássico do **TCP Reno** (conforme apresentado por Kurose e Ross), com tamanho máximo de segmento $\\text{MSS} = 1\\text{ KB}$, janela inicial de congestionamento $\\text{cwnd} = 1\\text{ MSS}$ na **Rodada 1** e limiar inicial de partida lenta $\\text{ssthresh} = 16\\text{ MSS}$. Assuma que a janela do receptor (*rwnd*) não limita o transmissor e que:
- Em *Slow Start* ($\\text{cwnd} < \\text{ssthresh}$), $\\text{cwnd}$ dobra a cada rodada (RTT) sem perdas;
- Em *Congestion Avoidance* ($\\text{cwnd} \\ge \\text{ssthresh}$), $\\text{cwnd}$ cresce linearmente em $+1\\text{ MSS}$ por rodada sem perdas;
- Ao detectar **3 ACKs duplicados**, o TCP Reno ajusta $\\text{ssthresh} \\leftarrow \\lfloor \\text{cwnd}/2 \\rfloor$ e $\\text{cwnd} \\leftarrow \\text{ssthresh}$, prosseguindo em *Congestion Avoidance*;
- Ao detectar **estouro de temporizador** (*timeout*), o TCP Reno ajusta $\\text{ssthresh} \\leftarrow \\lfloor \\text{cwnd}/2 \\rfloor$ e reinicia $\\text{cwnd} \\leftarrow 1\\text{ MSS}$, retornando a *Slow Start*.

Sabe-se que as transmissões ocorrem sem perdas até a **Rodada 6**, que há uma perda detectada por **3 ACKs duplicados** durante a **Rodada 7**, que a **Rodada 8** é confirmada sem perdas e que ocorre um ***timeout*** durante a **Rodada 9**.`,
    command:
      'Quais são os pares $(\\text{cwnd},\\; \\text{ssthresh})$, em MSS, respectivamente no início da **Rodada 8** (após os 3 ACKs duplicados) e no início da **Rodada 10** (após o *timeout*)?',
    options: [
      { letter: 'A', text: '$(1,\\; 9)$ na Rodada 8 e $(1,\\; 5)$ na Rodada 10.' },
      { letter: 'B', text: '$(9,\\; 9)$ na Rodada 8 e $(1,\\; 5)$ na Rodada 10.' },
      { letter: 'C', text: '$(16,\\; 16)$ na Rodada 8 e $(1,\\; 8)$ na Rodada 10.' },
      { letter: 'D', text: '$(9,\\; 9)$ na Rodada 8 e $(5,\\; 5)$ na Rodada 10.' },
      { letter: 'E', text: '$(9,\\; 16)$ na Rodada 8 e $(1,\\; 16)$ na Rodada 10.' },
    ],
    correctOption: 'B',
    explanation: `Rastreando a evolução de $(\\text{cwnd},\\; \\text{ssthresh})$ rodada a rodada:

| Rodada | $\\text{cwnd}$ (MSS) | $\\text{ssthresh}$ (MSS) | Fase | Evento ocorrido na rodada |
| :---: | :---: | :---: | :---: | :--- |
| 1 | $1$ | $16$ | *Slow Start* | ACKs normais (dobra) |
| 2 | $2$ | $16$ | *Slow Start* | ACKs normais (dobra) |
| 3 | $4$ | $16$ | *Slow Start* | ACKs normais (dobra) |
| 4 | $8$ | $16$ | *Slow Start* | ACKs normais (dobra) |
| 5 | $16$ | $16$ | *Congestion Avoidance* | Atingiu $\\text{ssthresh}$ $\\to$ cresce $+1$ |
| 6 | $17$ | $16$ | *Congestion Avoidance* | ACKs normais $\\to$ cresce $+1$ |
| 7 | $18$ | $16$ | *Congestion Avoidance* | **3 ACKs duplicados!** $\\text{ssthresh} \\leftarrow 18/2 = 9$; $\\text{cwnd} \\leftarrow 9$ |
| **8** | **$9$** | **$9$** | *Congestion Avoidance* | ACKs normais $\\to$ cresce $+1$ |
| 9 | $10$ | $9$ | *Congestion Avoidance* | **Timeout!** $\\text{ssthresh} \\leftarrow 10/2 = 5$; $\\text{cwnd} \\leftarrow 1$ |
| **10** | **$1$** | **$5$** | *Slow Start* | Retomada a partir de $1\\text{ MSS}$ |

Portanto, os pares são **$(9,\\; 9)$** no início da Rodada 8 e **$(1,\\; 5)$** no início da Rodada 10 — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Descreve o comportamento do **TCP Tahoe**, que reinicia $\\text{cwnd} = 1$ também diante de 3 ACKs duplicados, em vez do TCP Reno.',
      B: 'Correta. Aplica fielmente a transição para crescimento linear ao atingir $\\text{ssthresh}=16$ na Rodada 5, o corte à metade do Reno nos 3 ACKs duplicados (Rodada 7 $\\to$ 8) e o reinício em $1\\text{ MSS}$ no *timeout* (Rodada 9 $\\to$ 10).',
      C: 'Incorreta. Esquece de trocar de *Slow Start* para *Congestion Avoidance* quando $\\text{cwnd}$ atinge $16$, continuando a dobrar para $32$ e errando os cortes subsequentes.',
      D: 'Incorreta. Trata o *timeout* da Rodada 9 como se fosse um evento de 3 ACKs duplicados, mantendo $\\text{cwnd} = 5$ em vez de reiniciar em $1\\text{ MSS}$.',
      E: 'Incorreta. Deixa $\\text{ssthresh}$ congelado no valor inicial $16$ sem atualizá-lo para $\\lfloor \\text{cwnd}/2 \\rfloor$ nos eventos de perda.',
    },
    keyConcept: 'Controle de congestionamento TCP Reno: crescimento exponencial (*Slow Start*) até $\\text{ssthresh}$, linear (AIMD) após $\\text{ssthresh}$, corte pela metade em 3 ACKs duplicados e queda a $1\\text{ MSS}$ em *timeout*.',
  },
  {
    id: 'inedita-1-q26',
    source: 'inedita-1',
    year: 2026,
    number: 26,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Linguagens Regulares: Autômatos Finitos Determinísticos (AFD) e Expressões Regulares',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Na fase de análise léxica de um compilador, padrões de *tokens* são formalmente especificados por expressões regulares e reconhecidos em tempo linear por Autômatos Finitos Determinísticos (AFDs).

Considere o AFD $M = (\\{q_0, q_1, q_2\\}, \\{0, 1\\}, \\delta, q_0, \\{q_2\\})$ sobre o alfabeto $\\Sigma = \\{0, 1\\}$, com estado inicial $q_0$, único estado de aceitação $q_2$ e função de transição $\\delta$ definida na tabela abaixo:

| Estado | Entrada \`0\` | Entrada \`1\` |
| :--- | :---: | :---: |
| $q_0$ (inicial) | $q_1$ | $q_0$ |
| $q_1$ | $q_1$ | $q_2$ |
| $q_2$ (aceitação) | $q_1$ | $q_0$ |`,
    command:
      'Assinale a opção que apresenta corretamente a expressão regular equivalente à linguagem $L(M)$ reconhecida por esse autômato e sua descrição exata.',
    options: [
      {
        letter: 'A',
        text: '$(0 + 1)^* 01$ — reconhece exatamente o conjunto de todas as cadeias sobre $\\{0, 1\\}$ que **terminam** na subcadeia `01`.',
      },
      {
        letter: 'B',
        text: '$(0 + 1)^* 01 (0 + 1)^*$ — reconhece todas as cadeias sobre $\\{0, 1\\}$ que **contêm** `01` em qualquer posição.',
      },
      {
        letter: 'C',
        text: '$1^* 0^+ 1$ — reconhece apenas cadeias com zero ou mais `1`s, seguidos por um ou mais `0`s e encerrados por um único `1`.',
      },
      {
        letter: 'D',
        text: '$(01)^+$ — reconhece exclusivamente uma ou mais repetições consecutivas da subcadeia `01`.',
      },
      {
        letter: 'E',
        text: '$0^* 1^* 01$ — reconhece apenas cadeias formadas por zeros antes de uns e finalizadas por `01`.',
      },
    ],
    correctOption: 'A',
    explanation: `Analisamos o invariante (significado) de cada estado do AFD $M$:

- **Estado $q_1$:** Observe que, a partir de **qualquer** estado ($q_0, q_1$ ou $q_2$), a leitura do símbolo \`0\` leva sempre para $q_1$. Portanto, o autômato está em $q_1$ se, e somente se, **o último símbolo lido foi \`0\`**.
- **Estado $q_2$ (aceitação):** A única transição que chega a $q_2$ parte de $q_1$ lendo \`1\`. Como estar em $q_1$ significa que o símbolo imediatamente anterior era \`0\`, o autômato está em $q_2$ se, e somente se, **os dois últimos símbolos lidos foram \`01\`**.
- **Estado $q_0$:** A partir de $q_0$ ou $q_2$, ler \`1\` leva a $q_0$ (a cadeia é vazia ou termina em \`1\` sem ser precedido por \`0\`, isto é, termina em \`11\` ou é apenas \`1\`).
- **Verificação:**
  - Cadeia vazia $\\varepsilon$: permanece em $q_0$ (rejeitada).
  - Qualquer cadeia $w \\cdot \\texttt{01}$: após processar $w$ (em qualquer estado), o \`0\` leva a $q_1$ e o \`1\` final leva a $q_2$ (**aceita**).
  - Se surgir qualquer símbolo adicional após \`01\`: lendo \`0\` volta a $q_1$ (rejeita); lendo \`1\` volta a $q_0$ (rejeita). Logo, \`01\` **precisa estar no final** da cadeia!

Assim, $L(M) = \\{w \\in \\{0, 1\\}^* \\mid w \\text{ termina com } 01\\}$, cuja expressão regular exata é **$(0 + 1)^* 01$** — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Caracteriza exatamente o invariante do AFD: qualquer prefixo em $(0+1)^*$ obrigatoriamente seguido do sufixo final `01`.',
      B: 'Incorreta. Para aceitar qualquer cadeia que *contenha* `01`, o estado $q_2$ deveria possuir auto-laços para `0` e `1`, o que não ocorre (de $q_2$, `0` vai a $q_1$ e `1` vai a $q_0$; por exemplo, `010` é rejeitada).',
      C: 'Incorreta. Rejeitaria cadeias aceitas por $M$ como `0101` ($q_0 \\xrightarrow{0} q_1 \\xrightarrow{1} q_2 \\xrightarrow{0} q_1 \\xrightarrow{1} q_2$).',
      D: 'Incorreta. Rejeitaria cadeias válidas como `1001` ($q_0 \\xrightarrow{1} q_0 \\xrightarrow{0} q_1 \\xrightarrow{0} q_1 \\xrightarrow{1} q_2$).',
      E: 'Incorreta. Rejeitaria cadeias válidas como `1001` (cujo prefixo `10` possui `1` antes de `0`, não pertencendo a $0^* 1^*$).',
    },
    keyConcept: 'Equivalência entre Autômatos Finitos Determinísticos e Expressões Regulares (Linguagens Regulares — Tipo 3 na Hierarquia de Chomsky) por invariantes de estado.',
  },
  {
    id: 'inedita-1-q27',
    source: 'inedita-1',
    year: 2026,
    number: 27,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Aprendizado de Máquina: Matriz de Confusão, Precisão, Revocação, F1-Score e Dados Desbalanceados',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Um modelo de classificação binária foi treinado para identificar transações financeiras fraudulentas (classe positiva **\`+\`** = Fraude; classe negativa **\`-\`** = Legítima) em um conjunto de teste desbalanceado contendo $1\\,000$ transações. A matriz de confusão obtida está apresentada a seguir:

| Classe Real / Predita | Predito: Fraude (\`+\`) | Predito: Legítima (\`-\`) |
| :--- | :---: | :---: |
| **Real: Fraude (\`+\`)** | $VP = 60$ | $FN = 40$ |
| **Real: Legítima (\`-\`)** | $FP = 140$ | $VN = 760$ |`,
    command:
      'Calculando a **Precisão**, a **Revocação** (*Recall*), o **F1-Score** e a **Acurácia** desse modelo, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Precisão $= 0{,}60$, Revocação $= 0{,}30$ e $F_1 = 0{,}45$; o modelo supera amplamente qualquer classificador trivial.',
      },
      {
        letter: 'B',
        text: 'Precisão $= 0{,}30$, Revocação $= 0{,}60$ e $F_1 = 0{,}45$; a acurácia de $82\\%$ garante por si só bom desempenho na classe minoritária.',
      },
      {
        letter: 'C',
        text: 'Precisão $= 0{,}60$, Revocação $= 0{,}30$ e $F_1 = 0{,}40$; o valor $FN = 40$ indica transações legítimas bloqueadas indevidamente.',
      },
      {
        letter: 'D',
        text: 'Precisão $= 0{,}82$, Revocação $= 0{,}60$ e $F_1 \\approx 0{,}69$; a especificidade do modelo é inferior a $50\\%$.',
      },
      {
        letter: 'E',
        text: 'Precisão $= 0{,}30$, Revocação $= 0{,}60$ e $F_1 = 0{,}40$; ademais, um classificador trivial que rotulasse todas as transações como legítimas atingiria acurácia de $90\\%$, superior aos $82\\%$ do modelo avaliado.',
      },
    ],
    correctOption: 'E',
    explanation: `A partir dos valores da matriz de confusão ($VP = 60$, $FN = 40$, $FP = 140$, $VN = 760$, total $N = 1\\,000$):

1. **Precisão ($P$ — entre as preditas como fraude, quantas realmente são fraude):**
   $$P = \\frac{VP}{VP + FP} = \\frac{60}{60 + 140} = \\frac{60}{200} = 0{,}30\\; (30\\%)$$

2. **Revocação / Sensibilidade ($R$ — entre as fraudes reais, quantas o modelo detectou):**
   $$R = \\frac{VP}{VP + FN} = \\frac{60}{60 + 40} = \\frac{60}{100} = 0{,}60\\; (60\\%)$$

3. **F1-Score (média harmônica — não aritmética! — entre Precisão e Revocação):**
   $$F_1 = \\frac{2 \\cdot P \\cdot R}{P + R} = \\frac{2 \\times 0{,}30 \\times 0{,}60}{0{,}30 + 0{,}60} = \\frac{0{,}36}{0{,}90} = 0{,}40\\; (40\\%)$$

4. **Acurácia vs. Paradoxo da Acurácia em dados desbalanceados:**
   - Acurácia do modelo: $\\frac{VP + VN}{N} = \\frac{60 + 760}{1\\,000} = 0{,}82\\; (82\\%)$.
   - Note que existem $FP + VN = 140 + 760 = 900$ transações legítimas e apenas $100$ fraudes ($10\\%$). Um classificador trivial que sempre prediz "Legítima" acertaria $900 / 1\\,000 = 90\\%$ de acurácia (com Revocação e $F_1$ iguais a $0$!), ilustrando por que a acurácia isolada é enganosa em bases desbalanceadas.

Logo, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Inverte Precisão com Revocação e calcula erroneamente $F_1$ como média aritmética $(0{,}60 + 0{,}30)/2 = 0{,}45$.',
      B: 'Incorreta. Usa média aritmética ($0{,}45$) em vez da média harmônica ($0{,}40$) para o $F_1$ e cai no paradoxo da acurácia em conjuntos desbalanceados.',
      C: 'Incorreta. Troca Precisão por Revocação e confunde Falso Negativo ($FN = 40$, fraudes reais que passaram despercebidas) com Falso Positivo ($FP = 140$, transações legítimas bloqueadas).',
      D: 'Incorreta. Confunde Precisão com Acurácia ($0{,}82$) e erra a especificidade ($VN/(VN+FP) = 760/900 \\approx 84{,}4\\%$, bem acima de $50\\%$).',
      E: 'Correta. Todos os quatro indicadores ($P = 0{,}30$, $R = 0{,}60$, $F_1 = 0{,}40$, Acurácia $= 82\\%$) e a comparação crítica com o classificador majoritário ($90\\%$) estão exatos.',
    },
    keyConcept: 'Métricas de classificação: Precisão $= VP/(VP+FP)$, Revocação $= VP/(VP+FN)$, $F_1 = 2PR/(P+R)$ (média harmônica) e paradoxo da acurácia em bases desbalanceadas.',
  },
  {
    id: 'inedita-1-q28',
    source: 'inedita-1',
    year: 2026,
    number: 28,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Grafos Ponderados: Árvore Geradora Mínima (Algoritmos de Kruskal e Prim)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Uma concessionária de energia deseja interligar $6$ subestações de telemetria (\`A\`, \`B\`, \`C\`, \`D\`, \`E\` e \`F\`) por fibra óptica de modo que todas fiquem conectadas entre si com a **menor extensão total de cabo possível** (Árvore Geradora Mínima — AGM).

A topologia dos trechos viáveis (grafo conexo não direcionado) e suas extensões em quilômetros são dadas pela tabela de arestas a seguir:

| Trecho (Aresta) | Extensão (km) | Trecho (Aresta) | Extensão (km) | Trecho (Aresta) | Extensão (km) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| \`(A, B)\` | $4$ | \`(B, D)\` | $10$ | \`(D, E)\` | $6$ |
| \`(A, C)\` | $2$ | \`(C, D)\` | $3$ | \`(D, F)\` | $7$ |
| \`(B, C)\` | $5$ | \`(C, E)\` | $8$ | \`(E, F)\` | $1$ |`,
    command:
      'Aplicando o algoritmo de Kruskal (ou o algoritmo de Prim) sobre esse grafo, assinale a opção correta sobre a Árvore Geradora Mínima resultante.',
    options: [
      {
        letter: 'A',
        text: 'O custo mínimo total é $15\\text{ km}$, selecionando as arestas `(E, F)`, `(A, C)`, `(C, D)`, `(A, B)` e `(B, C)`.',
      },
      {
        letter: 'B',
        text: 'O custo mínimo total é $17\\text{ km}$, pois o algoritmo de Kruskal rejeita `(D, E)` e seleciona `(D, F)` para conectar o vértice `F`.',
      },
      {
        letter: 'C',
        text: 'O custo mínimo total é $16\\text{ km}$, composta exatamente pelas $5$ arestas `(E, F)`, `(A, C)`, `(C, D)`, `(A, B)` e `(D, E)`, sendo descartada a aresta `(B, C)` por formar ciclo.',
      },
      {
        letter: 'D',
        text: 'O custo mínimo total é $18\\text{ km}$, sendo obrigatória a seleção de $6$ arestas para interligar todos os $6$ vértices sem ciclos.',
      },
      {
        letter: 'E',
        text: 'Os algoritmos de Kruskal e Prim produzem árvores geradoras mínimas de custos distintos nesse grafo, pois o custo final de Prim varia conforme o vértice raiz escolhido.',
      },
    ],
    correctOption: 'C',
    explanation: `Uma árvore geradora sobre um grafo conexo com $|V| = 6$ vértices possui exatamente $|V| - 1 = 5$ arestas e nenhum ciclo. Como todos os pesos das arestas são distintos ($1, 2, 3, 4, 5, 6, 7, 8, 10$), a Árvore Geradora Mínima é **estritamente única**!

**Execução passo a passo do algoritmo de Kruskal (ordenando arestas por peso crescente):**
1. **\`(E, F)\` — peso $1$:** **Aceita.** Componentes: \`{E, F}\`, \`{A}\`, \`{B}\`, \`{C}\`, \`{D}\`. (1 aresta, soma $= 1$)
2. **\`(A, C)\` — peso $2$:** **Aceita.** Componentes: \`{E, F}\`, \`{A, C}\`, \`{B}\`, \`{D}\`. (2 arestas, soma $= 3$)
3. **\`(C, D)\` — peso $3$:** **Aceita.** Componentes: \`{E, F}\`, \`{A, C, D}\`, \`{B}\`. (3 arestas, soma $= 6$)
4. **\`(A, B)\` — peso $4$:** **Aceita.** Componentes: \`{E, F}\`, \`{A, B, C, D}\`. (4 arestas, soma $= 10$)
5. **\`(B, C)\` — peso $5$:** **Descartada!** Tanto \`B\` quanto \`C\` já pertencem ao mesmo componente \`{A, B, C, D}\` (fecharia o ciclo \`A-B-C-A\`).
6. **\`(D, E)\` — peso $6$:** **Aceita!** Une \`{A, B, C, D}\` e \`{E, F}\` em um único componente conexo \`{A, B, C, D, E, F}\`. (5 arestas = $|V|-1$, **algoritmo encerra!**)

**Custo total da AGM:**
$$1 + 2 + 3 + 4 + 6 = 16\\text{ km}$$

*(Conferência com Prim a partir de \`A\`: seleciona na ordem \`(A,C)=2\`, \`(C,D)=3\`, \`(A,B)=4\`, \`(D,E)=6\` e \`(E,F)=1\` — exatamente o mesmo conjunto de 5 arestas e custo $16\\text{ km}$!)*

Logo, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a aresta `(B, C)`, que forma o ciclo `A-B-C-A`, e deixa o subgrafo desconexo (o componente `{E, F}` fica isolado de `{A, B, C, D}`).',
      B: 'Incorreta. Como `(D, E)` pesa $6\\text{ km}$ e `(D, F)` pesa $7\\text{ km}$, Kruskal avalia e seleciona `(D, E)` antes de `(D, F)`.',
      C: 'Correta. Identifica as $5$ arestas exatas da AGM única, o descarte correto de `(B, C)` via *Union-Find* e o custo mínimo de $16\\text{ km}$.',
      D: 'Incorreta. Qualquer árvore com $6$ vértices tem obrigatoriamente $6 - 1 = 5$ arestas; adicionar uma 6ª aresta necessariamente cria um ciclo.',
      E: 'Incorreta. Tanto Kruskal quanto Prim (a partir de qualquer vértice inicial) garantem sempre o mesmo custo mínimo global; e, com pesos todos distintos, produzem inclusive exatamente a mesma árvore.',
    },
    keyConcept: 'Árvore Geradora Mínima (AGM): propriedade $|E_{\\text{AGM}}| = |V| - 1$, algoritmo guloso de Kruskal com detecção de ciclos (*Union-Find*) e unicidade quando os pesos são distintos.',
  },
  {
    id: 'inedita-1-q29',
    source: 'inedita-1',
    year: 2026,
    number: 29,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Sistemas Embarcados: Conversor Analógico-Digital (ADC), Resolução LSB e Sensor Linear',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um módulo de telemetria industrial utiliza um microcontrolador equipado com um conversor Analógico-Digital (ADC) linear de **10 bits** ($N = 10$), operando na faixa unipolar de $0\\text{ V}$ a uma tensão de referência externa de precisão $V_{\\text{ref}} = 4{,}096\\text{ V}$.

Um sensor analógico de temperatura conectado diretamente à entrada do ADC apresenta resposta linear dada por:

$$V_{\\text{out}}(T) = 0{,}50 + 0{,}01 \\cdot T$$

em que $V_{\\text{out}}$ é a tensão de saída em Volts ($\\text{V}$) e $T$ é a temperatura medida em graus Celsius ($^{\\circ}\\text{C}$). Adote a convenção padrão de quantização uniforme em que a tensão de passo (1 LSB) é $\\Delta V = V_{\\text{ref}} / 2^N$ e o código digital convertido é $D = \\lfloor V_{\\text{out}} / \\Delta V \\rfloor$.`,
    command:
      'Quais são, respectivamente, a tensão de passo $\\Delta V$ do ADC, a menor variação de temperatura discernível (resolução térmica $\\Delta T$ correspondente a 1 LSB) e o código digital inteiro $D$ obtido quando a temperatura medida é $T = 70\\,^{\\circ}\\text{C}$?',
    options: [
      {
        letter: 'A',
        text: '$\\Delta V = 4{,}0\\text{ mV}$, $\\Delta T = 0{,}4\\,^{\\circ}\\text{C}$ e $D = 175$.',
      },
      {
        letter: 'B',
        text: '$\\Delta V = 16{,}0\\text{ mV}$, $\\Delta T = 1{,}6\\,^{\\circ}\\text{C}$ e $D = 75$.',
      },
      {
        letter: 'C',
        text: '$\\Delta V = 1{,}0\\text{ mV}$, $\\Delta T = 0{,}1\\,^{\\circ}\\text{C}$ e $D = 1\\,200$.',
      },
      {
        letter: 'D',
        text: '$\\Delta V = 4{,}0\\text{ mV}$, $\\Delta T = 0{,}4\\,^{\\circ}\\text{C}$ e $D = 300$.',
      },
      {
        letter: 'E',
        text: '$\\Delta V = 4{,}0\\text{ mV}$, $\\Delta T = 4{,}0\\,^{\\circ}\\text{C}$ e $D = 300$.',
      },
    ],
    correctOption: 'D',
    explanation: `**Passo 1 — Tensão de passo (1 LSB) do ADC de 10 bits:**
Com $N = 10$ bits, existem $2^{10} = 1\\,024$ níveis de quantização (códigos de $0$ a $1\\,023$):

$$\\Delta V = \\frac{V_{\\text{ref}}}{2^{10}} = \\frac{4{,}096\\text{ V}}{1\\,024} = 0{,}004\\text{ V} = 4{,}0\\text{ mV/LSB}$$

**Passo 2 — Resolução térmica ($\\Delta T$ por LSB):**
A sensibilidade do sensor é $S = \\frac{dV_{\\text{out}}}{dT} = 0{,}01\\text{ V}/^{\\circ}\\text{C} = 10\\text{ mV}/^{\\circ}\\text{C}$. Logo, a variação de temperatura necessária para provocar uma variação de $1\\text{ LSB}$ ($4{,}0\\text{ mV}$) é:

$$\\Delta T = \\frac{\\Delta V}{S} = \\frac{4{,}0\\text{ mV}}{10\\text{ mV}/^{\\circ}\\text{C}} = 0{,}4\\,^{\\circ}\\text{C}$$

**Passo 3 — Tensão do sensor e código digital para $T = 70\\,^{\\circ}\\text{C}$:**
- Tensão analógica na entrada do ADC (não esquecer o *offset* de $0{,}50\\text{ V}$!):
  $$V_{\\text{out}}(70) = 0{,}50 + 0{,}01 \\times 70 = 0{,}50 + 0{,}70 = 1{,}20\\text{ V} = 1\\,200\\text{ mV}$$
- Código digital inteiro:
  $$D = \\left\\lfloor \\frac{1\\,200\\text{ mV}}{4{,}0\\text{ mV}} \\right\\rfloor = 300 \\quad (\\text{ou } \\texttt{0x12C} \\text{ em hexadecimal})$$

Logo, a alternativa correta é **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Acerta $\\Delta V$ e $\\Delta T$, mas esquece o *offset* de $0{,}50\\text{ V}$ do sensor, dividindo apenas $0{,}70\\text{ V} / 0{,}004\\text{ V} = 175$.',
      B: 'Incorreta. Calcula como se o ADC fosse de $8$ bits ($2^8 = 256 \\implies \\Delta V = 16\\text{ mV}$) em vez de $10$ bits.',
      C: 'Incorreta. Calcula como se o ADC fosse de $12$ bits ($2^{12} = 4\\,096$); note inclusive que $D = 1\\,200$ sequer cabe em um ADC de $10$ bits (máximo $1\\,023$).',
      D: 'Correta. Todos os três valores ($\\Delta V = 4{,}0\\text{ mV}$, $\\Delta T = 0{,}4\\,^{\\circ}\\text{C}$ e $D = 300$) estão rigorosamente corretos.',
      E: 'Incorreta. Erra a conversão de unidades da sensibilidade ($0{,}01\\text{ V}/^{\\circ}\\text{C} = 10\\text{ mV}/^{\\circ}\\text{C}$, e não $1\\text{ mV}/^{\\circ}\\text{C}$), inflando $\\Delta T$ em $10\\times$.',
    },
    keyConcept: 'Quantização em ADC: passo $\\Delta V = V_{\\text{ref}} / 2^N$, resolução física $\\Delta T = \\Delta V / S$ e consideração do *offset* de sensores lineares na conversão $D = \\lfloor V_{\\text{in}} / \\Delta V \\rfloor$.',
  },
  {
    id: 'inedita-1-q30',
    source: 'inedita-1',
    year: 2026,
    number: 30,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Eletrônica Analógica: Amplificador Operacional Ideal (Somador Inversor)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `O circuito abaixo emprega um amplificador operacional (Amp-Op) ideal, alimentado simetricamente com fontes de $\\pm 15\\text{ V}$, na configuração de **amplificador somador inversor** com duas entradas contínuas $V_1 = +2{,}0\\text{ V}$ e $V_2 = -1{,}0\\text{ V}$, resistores de entrada $R_1 = 10\\text{ k}\\Omega$ e $R_2 = 20\\text{ k}\\Omega$, e resistor de realimentação negativa $R_f = 40\\text{ k}\\Omega$.

\`\`\`text
                         Rf = 40 kΩ
                   +-------/\\/\\/\\--------+
                   |                     |
   V1 = +2,0 V   R1 = 10 kΩ              |
   o----/\\/\\/\\-----+-----\\               |
                   |      \\              |
   V2 = -1,0 V   R2 = 20 kΩ \\ (-)        |
   o----/\\/\\/\\-----+         >-----------+----o Vo
                            / (+)
                   +-------/
                   |
                  GND
\`\`\``,
    command: 'Considerando o Amp-Op ideal em operação linear, qual é o valor da tensão de saída $V_o$?',
    options: [
      { letter: 'A', text: '$-6{,}0\\text{ V}$.' },
      { letter: 'B', text: '$+6{,}0\\text{ V}$.' },
      { letter: 'C', text: '$-10{,}0\\text{ V}$.' },
      { letter: 'D', text: '$-4{,}0\\text{ V}$.' },
      { letter: 'E', text: '$0{,}0\\text{ V}$.' },
    ],
    correctOption: 'A',
    explanation: `Aplicando as duas regras de ouro do Amp-Op ideal com realimentação negativa (em região linear):
1. **Curto-circuito virtual (terra virtual):** $v_- = v_+ = 0\\text{ V}$;
2. **Correntes de entrada nulas:** $i_- = i_+ = 0\\text{ A}$.

**Passo 1 — Correntes nos ramos de entrada convergindo para o nó inversor ($v_- = 0\\text{ V}$):**

$$I_1 = \\frac{V_1 - 0}{R_1} = \\frac{+2{,}0\\text{ V}}{10\\text{ k}\\Omega} = +0{,}20\\text{ mA}$$

$$I_2 = \\frac{V_2 - 0}{R_2} = \\frac{-1{,}0\\text{ V}}{20\\text{ k}\\Omega} = -0{,}05\\text{ mA}$$

**Passo 2 — Lei de Kirchhoff das Correntes (LKC) no nó inversor:**
Como $i_- = 0$, a corrente que atravessa $R_f$ da esquerda para a direita é:

$$I_f = I_1 + I_2 = +0{,}20 - 0{,}05 = +0{,}15\\text{ mA}$$

**Passo 3 — Tensão de saída $V_o$:**

$$V_o = v_- - R_f \\cdot I_f = 0 - (40\\text{ k}\\Omega)(0{,}15\\text{ mA}) = -6{,}0\\text{ V}$$

*(Conferência pela fórmula fechada do somador inversor:)*

$$V_o = -\\left(\\frac{R_f}{R_1} V_1 + \\frac{R_f}{R_2} V_2\\right) = -\\left(\\frac{40}{10}(2{,}0) + \\frac{40}{20}(-1{,}0)\\right) = -(8{,}0 - 2{,}0) = -6{,}0\\text{ V}$$

Como $|-6{,}0\\text{ V}| < 15\\text{ V}$, confirma-se que o Amp-Op não satura e opera em região linear. Alternativa correta: **A**.`,
    optionAnalysis: {
      A: 'Correta. Aplica corretamente o terra virtual, a LKC e os pesos distintos $-R_f/R_1 = -4$ e $-R_f/R_2 = -2$, obtendo $-4(2{,}0) - 2(-1{,}0) = -6{,}0\\text{ V}$.',
      B: 'Incorreta. Esquece a inversão de sinal da configuração inversora (sinal negativo na frente da soma ponderada).',
      C: 'Incorreta. Desconsidera o sinal negativo de $V_2 = -1{,}0\\text{ V}$, somando os módulos $-(8{,}0 + 2{,}0) = -10{,}0\\text{ V}$.',
      D: 'Incorreta. Aplica erroneamente o mesmo ganho $-R_f/R_1 = -4$ a ambas as entradas: $-4(2{,}0 - 1{,}0) = -4{,}0\\text{ V}$.',
      E: 'Incorreta. Troca os resistores $R_1$ e $R_2$ entre as entradas, obtendo $-(2 \\cdot 2{,}0 + 4 \\cdot (-1{,}0)) = 0{,}0\\text{ V}$.',
    },
    keyConcept: 'Amp-Op ideal com realimentação negativa: terra virtual ($v_- = v_+$), $i_- = i_+ = 0$ e equação do somador inversor $V_o = -(R_f/R_1\\,V_1 + R_f/R_2\\,V_2)$.',
  },
  {
    id: 'inedita-1-q31',
    source: 'inedita-1',
    year: 2026,
    number: 31,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Impasses (Deadlocks): Condições de Coffman, Grafos de Alocação e Algoritmo do Banqueiro',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Em sistemas operacionais concorrentes, quando múltiplos processos ou *threads* disputam recursos não compartilháveis sob controle de semáforos ou *mutexes*, podem surgir situações de *deadlock* (impasse permanente).

A respeito das condições teóricas e das estratégias de prevenção, evitação e detecção de *deadlocks*, avalie as afirmações a seguir.

**I.** A ocorrência de *deadlock* exige que as quatro condições de Coffman — exclusão mútua, posse e espera (*hold and wait*), não preempção e espera circular — sejam satisfeitas **simultaneamente** no sistema.

**II.** Estabelecer uma ordenação numérica global única sobre todos os tipos de recursos e obrigar que todo processo os requisite sempre em ordem estritamente crescente previne *deadlocks* ao impedir a condição de **espera circular**.

**III.** Em um grafo de alocação de recursos no qual existem **múltiplas instâncias** de cada tipo de recurso, a presença de um ciclo é condição **necessária e suficiente** para caracterizar a ocorrência de *deadlock*.

**IV.** O Algoritmo do Banqueiro implementa uma estratégia de **evitação** (*avoidance*) de *deadlock* que exige conhecer previamente a demanda máxima de recursos de cada processo, concedendo uma alocação apenas se o estado resultante continuar **seguro**.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I, II e III.' },
      { letter: 'C', text: 'II, III e IV.' },
      { letter: 'D', text: 'I, II, III e IV.' },
      { letter: 'E', text: 'I, II e IV.' },
    ],
    correctOption: 'E',
    explanation: `Analisando cada afirmação segundo a teoria clássica de sistemas operacionais (Silberschatz e Tanenbaum):

- **Afirmação I (VERDADEIRA):** As quatro condições de Coffman (1971) são individualmente necessárias e conjuntamente suficientes para o *deadlock*. Basta quebrar *uma* delas para garantir prevenção estrutural.
- **Afirmação II (VERDADEIRA):** A imposição de ordem total sobre os recursos (estratégia de Havender) torna matematicamente impossível formar um ciclo fechado $P_1 \\to R_1 \\to P_2 \\to \\dots \\to P_1$ onde cada processo aguarda um recurso de índice inferior ao que já retém — eliminando a **espera circular**.
- **Afirmação III (FALSA):** Pegadinha clássica do ENADE! Em grafos de alocação com **instância única** por tipo de recurso, um ciclo é condição necessária e suficiente para *deadlock*. Porém, quando há **múltiplas instâncias** por tipo de recurso, um ciclo é condição **necessária, mas NÃO suficiente** — um processo fora do ciclo pode liberar uma instância extra do recurso disputado e desfazer o bloqueio!
- **Afirmação IV (VERDADEIRA):** O Algoritmo do Banqueiro (Dijkstra) verifica dinamicamente, antes de aprovar cada pedido, se existe pelo menos uma **sequência segura** de término de todos os processos considerando suas demandas máximas declaradas.

Portanto, estão corretas apenas **I, II e IV** — alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Inclui III (falsa para múltiplas instâncias) e omite II e IV.',
      B: 'Incorreta. Inclui a afirmação falsa III e omite IV.',
      C: 'Incorreta. Inclui a afirmação falsa III e omite I.',
      D: 'Incorreta. Considera III verdadeira, ignorando a distinção fundamental entre instância única e múltiplas instâncias em grafos de alocação.',
      E: 'Correta. Seleciona exatamente I, II e IV e descarta a pegadinha clássica em III.',
    },
    keyConcept: 'Deadlock: 4 condições simultâneas de Coffman, prevenção via ordenação global (elimina espera circular), ciclo com múltiplas instâncias (necessário, não suficiente) e Algoritmo do Banqueiro (estado seguro).',
  },
  {
    id: 'inedita-1-q32',
    source: 'inedita-1',
    year: 2026,
    number: 32,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Linguagem SQL: LEFT JOIN, GROUP BY, HAVING e Comportamento de COUNT com NULL',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Considere um banco de dados relacional de uma plataforma de engenharia contendo as tabelas \`INSTRUTOR\` e \`CURSO\` populadas exatamente com as tuplas abaixo:

**Tabela \`INSTRUTOR\`**

| \`id_inst\` | \`nome\` |
| :---: | :--- |
| 1 | \`'Ana'\` |
| 2 | \`'Bruno'\` |
| 3 | \`'Carla'\` |
| 4 | \`'Diego'\` |

**Tabela \`CURSO\`**

| \`id_curso\` | \`titulo\` | \`id_inst\` |
| :---: | :--- | :---: |
| 10 | \`'Sistemas Digitais'\` | 1 |
| 11 | \`'Redes de Computadores'\` | 1 |
| 12 | \`'Compiladores'\` | 2 |
| 13 | \`'Cálculo Numérico'\` | 3 |
| 14 | \`'Banco de Dados'\` | 3 |

Considere a execução da consulta SQL padrão abaixo:

\`\`\`sql
SELECT i.nome, COUNT(c.id_curso) AS qtd_cursos
FROM INSTRUTOR i
LEFT JOIN CURSO c ON i.id_inst = c.id_inst
GROUP BY i.id_inst, i.nome
HAVING COUNT(c.id_curso) <= 1
ORDER BY qtd_cursos DESC, i.nome ASC;
\`\`\``,
    command: 'Qual será exatamente o resultado (linhas e ordem) retornado por essa consulta SQL?',
    options: [
      {
        letter: 'A',
        text: 'Apenas `(\'Bruno\', 1)`, pois `LEFT JOIN` descarta instrutores que não possuem correspondência na tabela `CURSO`.',
      },
      {
        letter: 'B',
        text: '`(\'Bruno\', 1)` seguida de `(\'Diego\', 0)`, pois `LEFT JOIN` preserva `Diego` com `c.id_curso = NULL` e `COUNT(c.id_curso)` ignora valores nulos.',
      },
      {
        letter: 'C',
        text: '`(\'Bruno\', 1)` seguida de `(\'Diego\', 1)`, pois `COUNT(c.id_curso)` contabiliza todas as tuplas do grupo, incluindo aquelas com `NULL`.',
      },
      {
        letter: 'D',
        text: '`(\'Diego\', 0)` seguida de `(\'Bruno\', 1)`, pois a ordenação alfabética ascendente por nome prevalece sobre a contagem.',
      },
      {
        letter: 'E',
        text: 'Erro de sintaxe SQL, pois funções de agregação como `COUNT` devem ser filtradas na cláusula `WHERE` e não em `HAVING`.',
      },
    ],
    correctOption: 'B',
    explanation: `Rastreando a ordem lógica de avaliação da consulta SQL (\`FROM/JOIN\` $\\to$ \`GROUP BY\` $\\to$ \`HAVING\` $\\to$ \`SELECT\` $\\to$ \`ORDER BY\`):

1. **\`INSTRUTOR i LEFT JOIN CURSO c ON i.id_inst = c.id_inst\`:**
   Preserva **todos** os registros da tabela à esquerda (\`INSTRUTOR\`), preenchendo com \`NULL\` as colunas de \`CURSO\` quando não há correspondência:
   - \`(1, 'Ana')\` combina com cursos \`10\` e \`11\` (2 linhas);
   - \`(2, 'Bruno')\` combina com curso \`12\` (1 linha);
   - \`(3, 'Carla')\` combina com cursos \`13\` e \`14\` (2 linhas);
   - \`(4, 'Diego')\` não possui cursos $\\implies$ gera 1 linha com \`c.id_curso = NULL\`.

2. **\`GROUP BY i.id_inst, i.nome\` e cálculo de \`COUNT(c.id_curso)\`:**
   - **Atenção à pegadinha SQL clássica:** \`COUNT(*)\` conta **linhas** (logo retornaria \`1\` para Diego!), enquanto \`COUNT(coluna)\` conta apenas **valores não nulos** daquela coluna!
   - \`Ana\`: \`COUNT(c.id_curso) = 2\`
   - \`Bruno\`: \`COUNT(c.id_curso) = 1\`
   - \`Carla\`: \`COUNT(c.id_curso) = 2\`
   - \`Diego\`: \`COUNT(NULL) = 0\`

3. **\`HAVING COUNT(c.id_curso) <= 1\`:**
   Filtra grupos após a agregação (papel exato do \`HAVING\`, pois \`WHERE\` atua antes do \`GROUP BY\` e não aceita agregações!):
   - Permanecem apenas \`('Bruno', 1)\` e \`('Diego', 0)\`.

4. **\`ORDER BY qtd_cursos DESC, i.nome ASC\`:**
   Ordenação primária decrescente por \`qtd_cursos\` ($1 > 0$):
   - 1ª linha: **\`('Bruno', 1)\`**
   - 2ª linha: **\`('Diego', 0)\`**

Portanto, a resposta correta é a alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Descreve o comportamento de `INNER JOIN`, e não de `LEFT JOIN` (que preserva linhas sem correspondência da tabela à esquerda).',
      B: 'Correta. Combina perfeitamente o comportamento de `LEFT JOIN`, o descarte de `NULL` em `COUNT(c.id_curso)`, o filtro `HAVING` e a ordenação `DESC`.',
      C: 'Incorreta. Confunde `COUNT(c.id_curso)` (que ignora `NULL`, dando $0$) com `COUNT(*)` (que conta linhas, dando $1$).',
      D: 'Incorreta. Inverte a prioridade da cláusula `ORDER BY`: `qtd_cursos DESC` é o critério primário ($1$ vem antes de $0$) e `i.nome ASC` é apenas desempate.',
      E: 'Incorreta. Inverte a regra do padrão SQL: `WHERE` filtra tuplas individuais antes do agrupamento (e proíbe funções agregadas), enquanto `HAVING` existe justamente para filtrar grupos com agregações.',
    },
    keyConcept: 'SQL relacional: preservação de tuplas em `LEFT JOIN`, diferença crítica entre `COUNT(coluna)` (ignora `NULL`) e `COUNT(*)`, e filtro pós-agrupamento via `HAVING`.',
  },
  {
    id: 'inedita-1-q33',
    source: 'inedita-1',
    year: 2026,
    number: 33,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Pesquisa Operacional: Programação Linear, Região Factível e Análise de Folgas',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Uma fábrica de sistemas embarcados produz dois modelos de placas controladoras industriais — **Modelo X** (quantidade diária $x$) e **Modelo Y** (quantidade diária $y$) — cujos lucros unitários são respectivamente R$ 40,00 e R$ 30,00. O planejamento diário de produção busca maximizar o lucro total:

$$\\text{Maximizar } Z = 40x + 30y$$

sujeito às seguintes restrições operacionais de linha de montagem SMD, bancada de testes e demanda máxima do Modelo X:

$$\\begin{cases} 2x + y \\le 100 & \\text{(horas-máquina de montagem SMD)} \\\\ x + y \\le 80 & \\text{(horas-bancada de testes)} \\\\ x \\le 40 & \\text{(limite diário do Modelo X)} \\\\ x \\ge 0,\\; y \\ge 0 & \\text{(não negatividade)} \\end{cases}$$`,
    command:
      'Resolvendo esse problema de Programação Linear pelo método gráfico (avaliação dos vértices da região factível), assinale a opção que apresenta corretamente o plano ótimo de produção $(x^*, y^*)$, o lucro máximo $Z_{\\max}$ e o comportamento das restrições.',
    options: [
      {
        letter: 'A',
        text: '$x^* = 40$ e $y^* = 40$, gerando lucro máximo de R$ 2.800,00 sem folgas nas restrições.',
      },
      {
        letter: 'B',
        text: '$x^* = 0$ e $y^* = 80$, gerando lucro máximo de R$ 2.400,00 ao dedicar toda a fábrica ao Modelo Y.',
      },
      {
        letter: 'C',
        text: '$x^* = 20$ e $y^* = 60$, gerando lucro máximo de R$ 2.600,00, com folga de $20$ unidades na restrição de limite do Modelo X.',
      },
      {
        letter: 'D',
        text: '$x^* = 40$ e $y^* = 20$, gerando lucro máximo de R$ 2.200,00 por priorizar a produção máxima do modelo de maior lucro unitário.',
      },
      {
        letter: 'E',
        text: '$x^* = 50$ e $y^* = 0$, gerando lucro máximo de R$ 2.000,00 com folga de $30$ horas na bancada de testes.',
      },
    ],
    correctOption: 'C',
    explanation: `Pelo Teorema Fundamental da Programação Linear, em uma região factível poliedral limitada e não vazia, o valor ótimo da função objetivo linear é atingido em pelo menos um **vértice (ponto extremo)** da região factível.

**Passo 1 — Identificação de todos os vértices da região factível:**
1. **Origem:** $V_0 = (0, 0) \\implies Z = 0$.
2. **Eixo $y$ ($x = 0$):** restrito por $\\min(100, 80) = 80 \\implies V_1 = (0, 80)$.
   - Checagem: $2(0)+80=80 \\le 100$, $0+80=80 \\le 80$, $0 \\le 40$ (factível).
   - Lucro: $Z(0, 80) = 40(0) + 30(80) =$ R$ 2.400,00.
3. **Interseção de $2x + y = 100$ com $x + y = 80$:**
   Subtraindo as equações: $(2x + y) - (x + y) = 100 - 80 \\implies x = 20$, logo $y = 80 - 20 = 60 \\implies V_2 = (20, 60)$.
   - Checagem: $2(20)+60=100 \\le 100$, $20+60=80 \\le 80$, $20 \\le 40$ (factível!).
   - Lucro: $Z(20, 60) = 40(20) + 30(60) = 800 + 1\\,800 =$ **R$ 2.600,00** (**MÁXIMO!**).
4. **Interseção de $2x + y = 100$ com $x = 40$:**
   $y = 100 - 80 = 20 \\implies V_3 = (40, 20)$.
   - Checagem: $2(40)+20=100 \\le 100$, $40+20=60 \\le 80$, $40 \\le 40$ (factível).
   - Lucro: $Z(40, 20) = 40(40) + 30(20) = 1\\,600 + 600 =$ R$ 2.200,00.
5. **Eixo $x$ ($y = 0$):** restrito por $x \\le \\min(50, 80, 40) = 40 \\implies V_4 = (40, 0)$.
   - Lucro: $Z(40, 0) = 40(40) + 0 =$ R$ 1.600,00.

**Passo 2 — Análise das folgas no ponto ótimo $(20, 60)$:**
- Montagem SMD: $2(20) + 60 = 100 \\implies$ folga $= 0$ (restrição ativa / gargalo);
- Bancada de testes: $20 + 60 = 80 \\implies$ folga $= 0$ (restrição ativa / gargalo);
- Limite do Modelo X: $20 \\le 40 \\implies$ **folga de $40 - 20 = 20$ unidades**.

*(Atenção à pegadinha da opção A: o ponto $(40, 40)$ é **infactível**, pois viola a montagem SMD: $2(40) + 40 = 120 > 100$!)*

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. O ponto $(40, 40)$ encontra-se fora da região factível, pois exige $2(40) + 40 = 120$ horas de montagem SMD, excedendo o limite de $100$.',
      B: 'Incorreta. $(0, 80)$ é um vértice factível, mas subótimo (R$ 2.400,00 < R$ 2.600,00).',
      C: 'Correta. $(20, 60)$ é o vértice ótimo único com $Z_{\\max} =$ R$ 2.600,00, restrições SMD e testes ativas e folga de $20$ unidades na restrição $x \\le 40$.',
      D: 'Incorreta. Ilustra a falácia gulosa em otimização: maximizar o item de maior margem unitária ($x=40$) consome rápido demais o recurso SMD, reduzindo o lucro total para R$ 2.200,00.',
      E: 'Incorreta. $(50, 0)$ viola a restrição $x \\le 40$ (infactível) além de produzir lucro inferior.',
    },
    keyConcept: 'Programação Linear: verificação de factibilidade de vértices, avaliação da função objetivo nos pontos extremos e cálculo de folgas (*slacks*) nas restrições.',
  },
  {
    id: 'inedita-1-q34',
    source: 'inedita-1',
    year: 2026,
    number: 34,
    component: 'CE',
    discipline: 'probabilidade-estatistica',
    subtopic: 'Probabilidade Condicional, Lei da Probabilidade Total e Teorema de Bayes',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Em uma linha automatizada de fabricação de placas de circuito impresso (PCIs), três máquinas de soldagem — **M1**, **M2** e **M3** — são responsáveis, respectivamente, por $50\\%$, $30\\%$ e $20\\%$ do volume diário total de produção. Registros históricos de controle estatístico de qualidade indicam as seguintes taxas de defeito de soldagem em cada máquina:

| Máquina | Participação na Produção | Taxa de Defeito |
| :---: | :---: | :---: |
| **M1** | $50\\%$ | $2\\%$ |
| **M2** | $30\\%$ | $4\\%$ |
| **M3** | $20\\%$ | $5\\%$ |

Uma placa é sorteada ao acaso de todo o lote produzido em um dia e, ao passar pela inspeção por raios X, constata-se que ela **apresenta defeito de soldagem**.`,
    command:
      'Dado que a placa selecionada é defeituosa, qual é a probabilidade de que ela tenha sido produzida pela máquina **M2**?',
    options: [
      { letter: 'A', text: '$1{,}2\\%$.' },
      { letter: 'B', text: '$4{,}0\\%$.' },
      { letter: 'C', text: '$30{,}0\\%$.' },
      { letter: 'D', text: '$36{,}4\\%$.' },
      { letter: 'E', text: '$37{,}5\\%$.' },
    ],
    correctOption: 'E',
    explanation: `Sejam $M_1, M_2, M_3$ os eventos "placa produzida pela máquina $i$" e $D$ o evento "placa apresenta defeito".

**Passo 1 — Probabilidades conjuntas $P(M_i \\cap D) = P(M_i)\\,P(D \\mid M_i)$:**
- $P(M_1 \\cap D) = 0{,}50 \\times 0{,}02 = 0{,}010$
- $P(M_2 \\cap D) = 0{,}30 \\times 0{,}04 = 0{,}012$
- $P(M_3 \\cap D) = 0{,}20 \\times 0{,}05 = 0{,}010$

**Passo 2 — Lei da Probabilidade Total para $P(D)$:**

$$P(D) = P(M_1 \\cap D) + P(M_2 \\cap D) + P(M_3 \\cap D) = 0{,}010 + 0{,}012 + 0{,}010 = 0{,}032\\; (3{,}2\\%)$$

**Passo 3 — Teorema de Bayes para $P(M_2 \\mid D)$:**

$$P(M_2 \\mid D) = \\frac{P(M_2)\\,P(D \\mid M_2)}{P(D)} = \\frac{0{,}012}{0{,}032} = \\frac{12}{32} = \\frac{3}{8} = 0{,}375 = 37{,}5\\%$$

*(Conferência: $P(M_1 \\mid D) = 10/32 = 31{,}25\\%$, $P(M_2 \\mid D) = 12/32 = 37{,}50\\%$ e $P(M_3 \\mid D) = 10/32 = 31{,}25\\%$; soma $= 100\\%$.)*

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Calcula apenas a probabilidade conjunta $P(M_2 \\cap D) = 0{,}30 \\times 0{,}04 = 1{,}2\\%$, esquecendo de dividir pela probabilidade total de defeito $P(D) = 3{,}2\\%$.',
      B: 'Incorreta. Confunde a probabilidade a posteriori $P(M_2 \\mid D)$ com a verossimilhança direta $P(D \\mid M_2) = 4{,}0\\%$ (falácia da inversão da condicional).',
      C: 'Incorreta. Repete a probabilidade a priori $P(M_2) = 30{,}0\\%$, ignorando completamente a evidência de que a placa é defeituosa.',
      D: 'Incorreta. Ignora as participações de produção (*base-rate neglect*), dividindo erroneamente $\\frac{4}{2 + 4 + 5} = \\frac{4}{11} \\approx 36{,}4\\%$.',
      E: 'Correta. Aplica rigorosamente a Lei da Probabilidade Total ($P(D) = 3{,}2\\%$) e o Teorema de Bayes ($0{,}012 / 0{,}032 = 3/8 = 37{,}5\\%$).',
    },
    keyConcept: 'Teorema de Bayes ($P(M_i \\mid D) = P(M_i)P(D \\mid M_i) / \\sum_j P(M_j)P(D \\mid M_j)$) e Lei da Probabilidade Total.',
  },
  {
    id: 'inedita-1-q35',
    source: 'inedita-1',
    year: 2026,
    number: 35,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Segurança de Redes: Criptografia Assimétrica (RSA), Assinatura Digital e IDS/IPS',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Em arquiteturas corporativas de segurança da informação, a proteção de comunicações e perímetros combina criptografia de chave pública (como o algoritmo RSA e Infraestrutura de Chaves Públicas — ICP) com controles de defesa em profundidade, incluindo *firewalls* e sistemas de detecção e prevenção de intrusões (IDS e IPS).

Acerca dos mecanismos de criptografia assimétrica e de defesa de redes, avalie as afirmações a seguir.

**I.** Na assinatura digital de um documento eletrônico para garantir **autenticidade, integridade e não repúdio**, o remetente gera o resumo criptográfico (*hash*) da mensagem e o cifra com sua própria **chave privada**, de modo que qualquer destinatário possa validar a assinatura utilizando a **chave pública** do remetente.

**II.** Para assegurar **confidencialidade** em uma comunicação assimétrica destinada exclusivamente a um receptor específico (Bob), o remetente (Alice) deve cifrar a mensagem — ou a chave simétrica de sessão — utilizando a **chave pública de Bob**, garantindo que apenas a **chave privada de Bob** consiga decifrá-la.

**III.** Operacionalmente, um sistema IDS (*Intrusion Detection System*) atua tipicamente de maneira passiva/fora de linha (*out-of-band*) monitorando cópias de tráfego e emitindo alertas, ao passo que um IPS (*Intrusion Prevention System*) atua em linha (*inline*) com capacidade ativa de bloquear ou descartar pacotes maliciosos em tempo real.

**IV.** A segurança criptográfica do algoritmo RSA baseia-se na facilidade computacional de fatorar o módulo público $n = p \\cdot q$ em seus fatores primos grandes $p$ e $q$, permitindo que destinatários reconstruam rapidamente a chave privada durante a verificação.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e IV.' },
      { letter: 'B', text: 'I, II e III.' },
      { letter: 'C', text: 'II, III e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'I, II, III e IV.' },
    ],
    correctOption: 'B',
    explanation: `Analisando cada afirmação sobre criptografia assimétrica e segurança de perímetro:

- **Afirmação I (VERDADEIRA):** A assinatura digital usa o par de chaves do **remetente** na direção **privada (assinar) $\\to$ pública (verificar)**. Assina-se o *hash* (ex.: SHA-256) por eficiência e integridade; como somente o remetente detém sua chave privada, garante-se autenticidade e não repúdio.
- **Afirmação II (VERDADEIRA):** A confidencialidade usa o par de chaves do **destinatário** na direção **pública (cifrar) $\\to$ privada (decifrar)** (na prática, em protocolos como TLS, cifra-se uma chave simétrica de sessão — criptografia híbrida — para alto desempenho).
- **Afirmação III (VERDADEIRA):** Essa é exatamente a distinção clássica entre detecção (IDS: monitora espelhamento de porta / *TAP* e gera alertas sem interromper o fluxo) e prevenção (IPS: posicionado *inline* no caminho do tráfego, capaz de executar *drop*, *reset* ou bloqueio imediato).
- **Afirmação IV (FALSA):** A segurança do RSA apoia-se exatamente no oposto: na **intratabilidade computacional** (extrema dificuldade, em computadores clássicos) de fatorar o produto $n = p \\cdot q$ de dois primos muito grandes. Se fosse fácil fatorar $n$, qualquer atacante descobriria $\\varphi(n) = (p-1)(q-1)$ e quebraria a chave privada $d = e^{-1} \\bmod \\varphi(n)$!

Portanto, estão corretas apenas **I, II e III** — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Inclui IV (falsa: RSA depende da *dificuldade* da fatoração de inteiros grandes) e omite II e III.',
      B: 'Correta. Valida perfeitamente a direção correta das chaves na assinatura digital (I) e na confidencialidade (II), a diferença *out-of-band* vs. *inline* entre IDS e IPS (III) e descarta IV.',
      C: 'Incorreta. Inclui a afirmação falsa IV e omite I.',
      D: 'Incorreta. Inclui a afirmação falsa IV e omite II.',
      E: 'Incorreta. Aceita IV, invertendo o fundamento matemático de segurança do RSA.',
    },
    keyConcept: 'Criptografia assimétrica (assinatura = privada do remetente; confidencialidade = pública do destinatário), fundamentação do RSA na dificuldade de fatoração e distinção IDS (passivo) vs. IPS (*inline*).',
  },
  {
    id: 'inedita-1-q36',
    source: 'inedita-1',
    year: 2026,
    number: 36,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Circuitos Combinacionais: Síntese de Funções Booleanas com Multiplexador (MUX 4:1)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Um multiplexador (MUX) pode ser utilizado como bloco lógico universal para sintetizar funções combinacionais sem a necessidade de portas lógicas discretas adicionais além de um inversor.

Considere a função booleana de $3$ variáveis definida pela soma de mintermos:

$$F(A, B, C) = \\sum m(1, 2, 5, 6, 7)$$

em que $A$ é o bit mais significativo e $C$ o menos significativo. Deseja-se implementar $F(A, B, C)$ usando um **MUX 4:1** cujas linhas de seleção recebem $S_1 = A$ e $S_0 = B$, conforme o diagrama abaixo (com as entradas de dados $I_0, I_1, I_2, I_3$ selecionadas respectivamente por $AB = 00, 01, 10, 11$):

\`\`\`text
          +---------+
  I0 ---->| 0       |
  I1 ---->| 1  MUX  |----> F(A, B, C)
  I2 ---->| 2  4:1  |
  I3 ---->| 3       |
          +---------+
             ^   ^
             |   |
            S1   S0
            (A)  (B)
\`\`\``,
    command:
      'Quais sinais devem ser conectados, respectivamente, às entradas de dados $(I_0,\\; I_1,\\; I_2,\\; I_3)$ do MUX 4:1 para implementar exatamente $F(A, B, C)$?',
    options: [
      { letter: 'A', text: '$I_0 = C$, $I_1 = \\bar{C}$, $I_2 = C$, $I_3 = 1$.' },
      { letter: 'B', text: '$I_0 = \\bar{C}$, $I_1 = C$, $I_2 = \\bar{C}$, $I_3 = 1$.' },
      { letter: 'C', text: '$I_0 = C$, $I_1 = \\bar{C}$, $I_2 = 0$, $I_3 = 1$.' },
      { letter: 'D', text: '$I_0 = 1$, $I_1 = \\bar{C}$, $I_2 = C$, $I_3 = C$.' },
      { letter: 'E', text: '$I_0 = C$, $I_1 = C$, $I_2 = \\bar{C}$, $I_3 = 0$.' },
    ],
    correctOption: 'A',
    explanation: `Agrupando a tabela-verdade de $F(A, B, C) = \\sum m(1, 2, 5, 6, 7)$ em pares de linhas correspondentes a cada combinação das variáveis de seleção $S_1 S_0 = AB$:

| Seleção $AB$ | Entrada MUX | Mintermos ($C=0$, $C=1$) | Valores de $F$ ($C=0$, $C=1$) | Expressão em função de $C$ |
| :---: | :---: | :---: | :---: | :---: |
| \`00\` | $I_0$ | $m_0\\,(000),\\; m_1\\,(001)$ | $0,\\; 1$ | **$I_0 = C$** |
| \`01\` | $I_1$ | $m_2\\,(010),\\; m_3\\,(011)$ | $1,\\; 0$ | **$I_1 = \\bar{C}$** |
| \`10\` | $I_2$ | $m_4\\,(100),\\; m_5\\,(101)$ | $0,\\; 1$ | **$I_2 = C$** |
| \`11\` | $I_3$ | $m_6\\,(110),\\; m_7\\,(111)$ | $1,\\; 1$ | **$I_3 = 1$** |

**Conferência algébrica (Teorema da Expansão de Shannon):**

$$F = \\bar{A}\\bar{B}\\cdot I_0 + \\bar{A}B\\cdot I_1 + A\\bar{B}\\cdot I_2 + AB\\cdot I_3 = \\bar{A}\\bar{B}C + \\bar{A}B\\bar{C} + A\\bar{B}C + AB(1)$$

Expandindo $AB(1) = AB\\bar{C} + ABC$, recuperamos exatamente os mintermos:
- $\\bar{A}\\bar{B}C \\to m_1$ (\`001\`)
- $\\bar{A}B\\bar{C} \\to m_2$ (\`010\`)
- $A\\bar{B}C \\to m_5$ (\`101\`)
- $AB\\bar{C} \\to m_6$ (\`110\`) e $ABC \\to m_7$ (\`111\`)

Logo, a configuração correta é **$I_0 = C,\\; I_1 = \\bar{C},\\; I_2 = C,\\; I_3 = 1$** — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Cada entrada do MUX reproduz exatamente o par de linhas da tabela-verdade para a respectiva seleção $AB$.',
      B: 'Incorreta. Inverte $C$ e $\\bar{C}$ em $I_0, I_1$ e $I_2$, implementando $\\sum m(0, 3, 4, 6, 7)$ em vez da função especificada.',
      C: 'Incorreta. Atribui $I_2 = 0$, omitindo o mintermo $m_5$ (`101`).',
      D: 'Incorreta. Troca a linha $AB = 00$ ($I_0$) pela linha $AB = 11$ ($I_3$), implementando $\\sum m(0, 1, 2, 5, 7)$.',
      E: 'Incorreta. Produz $\\sum m(1, 3, 4)$, incompatível com quase todos os mintermos da especificação.',
    },
    keyConcept: 'Síntese combinacional com multiplexadores via Expansão de Shannon: cada entrada de dados $I_k$ recebe $0, 1, C$ ou $\\bar{C}$ conforme os pares de linhas da tabela-verdade.',
  },
  {
    id: 'inedita-1-q37',
    source: 'inedita-1',
    year: 2026,
    number: 37,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Arquitetura de Software: Padrões de Projeto GoF (Observer e Strategy) e Princípio Aberto-Fechado',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Durante o projeto orientado a objetos de uma plataforma de telemetria industrial IoT, um módulo central (\`EstacaoSensores\`) recebe continuamente novas medições de temperatura e vibração. A equipe de arquitetura estabeleceu dois requisitos de extensibilidade e baixo acoplamento:

1. **Requisito 1:** Sempre que uma nova medição chegar à \`EstacaoSensores\`, múltiplos componentes independentes — como o painel gráfico em tempo real, o gravador de histórico em banco de dados e o despachante de alarmes — devem ser **notificados automaticamente**, permitindo inscrever ou cancelar a assinatura de novos consumidores em tempo de execução sem acoplar a \`EstacaoSensores\` às classes concretas desses consumidores.
2. **Requisito 2:** O despachante de alarmes deve poder **alternar dinamicamente, em tempo de execução**, a política de cálculo de severidade e roteamento de notificações (por exemplo, política de horário comercial, política de plantão noturno ou política de parada emergencial), encapsulando cada algoritmo em uma classe própria intercambiável de modo a evitar extensas estruturas \`if/else\` e respeitar o Princípio Aberto-Fechado (OCP — *Open-Closed Principle*).`,
    command:
      'Quais padrões de projeto comportamentais do catálogo *Gang of Four* (GoF) atendem mais adequadamente, respectivamente, aos **Requisitos 1 e 2**?',
    options: [
      { letter: 'A', text: '*Singleton* e *Adapter*.' },
      { letter: 'B', text: '*Factory Method* e *Composite*.' },
      { letter: 'C', text: '*Strategy* e *Observer*.' },
      { letter: 'D', text: '*Observer* e *Strategy*.' },
      { letter: 'E', text: '*Facade* e *Decorator*.' },
    ],
    correctOption: 'D',
    explanation: `Analisando a intenção canônica de cada padrão do catálogo *Gang of Four* (Gamma et al.):

1. **Requisito 1 $\\implies$ Observer (Padrão Comportamental):**
   Define uma dependência um-para-muitos ($1:N$) entre objetos (um *Subject* / publicador — \`EstacaoSensores\` — e múltiplos *Observers* / assinantes), de modo que, quando o estado do sujeito muda, todos os dependentes registrados são notificados e atualizados automaticamente via uma interface abstrata, mantendo baixo acoplamento e suportando inscrição/remoção dinâmica.

2. **Requisito 2 $\\implies$ Strategy (Padrão Comportamental):**
   Define uma família de algoritmos (as diferentes políticas de severidade/roteamento), encapsula cada um deles em classes separadas que implementam uma mesma interface e os torna intercambiáveis em tempo de execução por composição. Novas políticas podem ser adicionadas sem modificar o código do despachante (cumprindo o **OCP — Princípio Aberto-Fechado** do SOLID).

Portanto, os padrões são, respectivamente, **Observer** e **Strategy** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. *Singleton* (criacional) garante instância única global e *Adapter* (estrutural) converte interfaces incompatíveis; nenhum deles resolve notificação $1:N$ ou troca dinâmica de algoritmos.',
      B: 'Incorreta. *Factory Method* (criacional) delega instanciação a subclasses e *Composite* (estrutural) compõe árvores parte-todo.',
      C: 'Incorreta. Pegadinha de inversão de ordem: coloca *Strategy* para o Requisito 1 e *Observer* para o Requisito 2.',
      D: 'Correta. Mapeia exatamente *Observer* para notificação assíncrona/desacoplada $1:N$ (Requisito 1) e *Strategy* para família intercambiável de algoritmos conforme o OCP (Requisito 2).',
      E: 'Incorreta. *Facade* (estrutural) provê interface simplificada para um subsistema e *Decorator* (estrutural) empilha responsabilidades dinamicamente sobre um objeto.',
    },
    keyConcept: 'Padrões comportamentais GoF: *Observer* (notificação desacoplada $1:N$ por inscrição) e *Strategy* (encapsulamento intercambiável de algoritmos aderente ao princípio OCP/SOLID).',
  },
  {
    id: 'inedita-1-q38',
    source: 'inedita-1',
    year: 2026,
    number: 38,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Sistemas de Controle: Realimentação Unitária, Erro em Regime Permanente e Controlador PI',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Considere um sistema de controle de velocidade de um motor CC em malha fechada com **realimentação unitária negativa**, cuja planta de primeira ordem possui função de transferência no domínio de Laplace:

$$G(s) = \\frac{4}{s + 2}$$

Dois controladores são avaliados separadamente em série com a planta (caminho direto $L(s) = C(s)G(s)$), submetendo-se o sistema em malha fechada a uma entrada de referência do tipo **degrau unitário** $R(s) = \\frac{1}{s}$:

- **Caso 1 (Controlador Proporcional — P):** $C_1(s) = K_p = 2$;
- **Caso 2 (Controlador Proporcional-Integral — PI):** $C_2(s) = 2 + \\frac{1}{s}$.`,
    command:
      'Comparando os dois casos quanto à estabilidade em malha fechada e ao erro em regime permanente ($e_{ss}$) para a entrada degrau unitário, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'No Caso 1, o erro em regime permanente ao degrau unitário é $0{,}80$; no Caso 2, a ação integral torna a malha fechada instável ao inserir um polo na origem.',
      },
      {
        letter: 'B',
        text: 'No Caso 1, o erro em regime permanente ao degrau unitário é $0{,}25$; no Caso 2, o erro em regime permanente reduz-se pela metade, passando para $0{,}125$.',
      },
      {
        letter: 'C',
        text: 'No Caso 1, o polo de malha fechada localiza-se em $s = -10$ e o erro em regime permanente ao degrau unitário é $0{,}20$; no Caso 2, a malha fechada permanece estável e a ação integral anula o erro em regime permanente ($e_{ss} = 0$).',
      },
      {
        letter: 'D',
        text: 'No Caso 1, o erro em regime permanente já é nulo porque o ganho proporcional $K_p = 2$ eleva o tipo do sistema; no Caso 2, a ação integral altera apenas o tempo de acomodação.',
      },
      {
        letter: 'E',
        text: 'No Caso 1, o polo de malha fechada localiza-se em $s = -6$ e o erro em regime permanente é $0{,}50$; no Caso 2, o erro em regime permanente diverge para o infinito.',
      },
    ],
    correctOption: 'C',
    explanation: `**Análise do Caso 1 — Controlador P ($C_1(s) = 2$):**
- Função de malha aberta:
  $$L_1(s) = C_1(s) G(s) = \\frac{8}{s + 2}$$
  *(Sistema **Tipo 0**: não possui integrador/polo em $s = 0$.)*
- Função de transferência de malha fechada:
  $$T_1(s) = \\frac{L_1(s)}{1 + L_1(s)} = \\frac{8}{s + 2 + 8} = \\frac{8}{s + 10}$$
  - **Polo de malha fechada:** $s = -10 < 0$ (no semiplano esquerdo $\\implies$ **estável**!).
- **Erro em regime permanente para degrau unitário:**
  - Constante de erro de posição: $K_{\\text{pos}} = \\lim_{s \\to 0} L_1(s) = \\frac{8}{2} = 4$.
  - Logo:
    $$e_{ss,1} = \\frac{1}{1 + K_{\\text{pos}}} = \\frac{1}{1 + 4} = 0{,}20\\; (20\\%)$$
  *(Conferência pelo Teorema do Valor Final: $y_{ss,1} = T_1(0) = \\frac{8}{10} = 0{,}80 \\implies e_{ss,1} = 1 - 0{,}80 = 0{,}20$.)*

**Análise do Caso 2 — Controlador PI ($C_2(s) = 2 + \\frac{1}{s} = \\frac{2s + 1}{s}$):**
- Função de malha aberta:
  $$L_2(s) = C_2(s) G(s) = \\frac{4(2s + 1)}{s(s + 2)} = \\frac{8s + 4}{s^2 + 2s}$$
  *(O termo integrador $1/s$ eleva o sistema para **Tipo 1**!)*
- Função de transferência de malha fechada:
  $$T_2(s) = \\frac{8s + 4}{s^2 + 2s + 8s + 4} = \\frac{8s + 4}{s^2 + 10s + 4}$$
- **Estabilidade em malha fechada:** O polinômio característico $s^2 + 10s + 4 = 0$ (2ª ordem) tem todos os coeficientes estritamente positivos ($1, 10, 4 > 0$), logo pelo critério de Routh-Hurwitz ambas as raízes ($s = -5 \\pm \\sqrt{21} \\approx -0{,}42$ e $-9{,}58$) estão no semiplano esquerdo $\\implies$ **sistema estável!**
- **Erro em regime permanente para degrau unitário:**
  Como o sistema em malha fechada é estável e $L_2(s)$ é Tipo 1 ($K_{\\text{pos}} = \\lim_{s \\to 0} L_2(s) = \\infty$), pelo Teorema do Valor Final:
  $$y_{ss,2} = T_2(0) = \\frac{4}{4} = 1{,}00 \\implies e_{ss,2} = 1 - 1{,}00 = 0$$

Portanto, a resposta correta é a alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Confunde o valor final da saída ($y_{ss} = 0{,}80$) com o erro estacionário ($e_{ss} = 1 - 0{,}80 = 0{,}20$) e confunde polo de malha aberta na origem com instabilidade de malha fechada.',
      B: 'Incorreta. Calcula $e_{ss,1} = 1/K_{\\text{pos}} = 1/4 = 0{,}25$ esquecendo o termo $+1$ no denominador ($1/(1+K_{\\text{pos}})$) e ignora que a ação integral zera totalmente o erro ao degrau.',
      C: 'Correta. Calcula exatamente o polo $s = -10$, o erro $e_{ss,1} = 0{,}20$, confirma estabilidade pelo polinômio $s^2 + 10s + 4$ e demonstra $e_{ss,2} = 0$ pela elevação para Tipo 1.',
      D: 'Incorreta. Um ganho proporcional $K_p$ finito jamais anula o erro ao degrau em uma planta Tipo 0 (reduz, mas não zera); apenas a ação integral eleva o tipo do sistema.',
      E: 'Incorreta. Esquece de multiplicar a planta por $K_p = 2$ (obtendo $s + 2 + 4 = s + 6$) e erra a convergência do Caso 2.',
    },
    keyConcept: 'Malha fechada com realimentação unitária ($T(s) = L/(1+L)$), erro em regime permanente ao degrau ($e_{ss} = 1/(1+K_{\\text{pos}})$) e eliminação de erro estacionário pela ação integral (PI $\\to$ Tipo 1).',
  },
];
