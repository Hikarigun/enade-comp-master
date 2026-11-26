import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2019_CE_1: ObjectiveQuestion[] = [
  {
    id: 'enade-2019-q09',
    source: 'enade-2019',
    year: 2019,
    number: 9,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Algoritmos de Ordenação — MergeSort e Divisão e Conquista',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `O *MergeSort* é um método de ordenação que combina dois vetores ordenados e cria um terceiro vetor maior também ordenado. O algoritmo abaixo apresenta essa ideia e combina os vetores \`a[lo..mid]\` e \`a[mid+1..hi]\` no vetor \`a[lo..hi]\`.

\`\`\`java
public class MergeSort {
    private static Comparable[] aux;

    public static void merge(Comparable[] a, int lo, int mid, int hi) {
        int i = lo, j = mid+1;
        for (int k = lo; k <= hi; k++)
            aux[k] = a[k];
        for (int k = lo; k <= hi; k++) {
            if (i > mid)
                a[k] = aux[j++];
            else if (j > hi)
                a[k] = aux[i++];
            else if (aux[j].compareTo(aux[i]))
                a[k] = aux[j++];
            else
                a[k] = aux[i++];
        }
    }

    public static void sort(Comparable[] a) {
        aux = new Comparable[a.length];
        sort(a, 0, a.length - 1);
    }

    private static void sort(Comparable[] a, int lo, int hi) {
        //implementação
    }
}
\`\`\`

*SEDGEWICK, R.; WAYNE, K. Algorithms. 4. ed. Boston: Addison-Wesley, 2011 (adaptado).*`,
    command:
      'Considerando o código apresentado, a implementação do protótipo do método `sort` da classe `MergeSort` é',
    options: [
      {
        letter: 'A',
        text: `\`\`\`java
if (hi == lo)
    return;
int mid = lo + (hi - lo)/2;
sort(a, lo, mid);
sort(a, mid, hi);
merge(a, lo, mid, hi);
\`\`\``,
      },
      {
        letter: 'B',
        text: `\`\`\`java
if (hi > lo)
    return;
int mid = lo + (hi - lo)/2;
sort(a, lo, mid);
sort(a, mid, hi);
merge(a, lo, mid, hi);
\`\`\``,
      },
      {
        letter: 'C',
        text: `\`\`\`java
if (hi <= lo)
    return;
int mid = lo + (hi - lo)/2;
sort(a, lo, mid);
sort(a, mid, hi);
merge(a, lo, mid, hi);
\`\`\``,
      },
      {
        letter: 'D',
        text: `\`\`\`java
if (hi > lo)
    return;
int mid = lo + (hi - lo)/2;
sort(a, lo, mid);
sort(a, mid+1, hi);
merge(a, lo, mid, hi);
\`\`\``,
      },
      {
        letter: 'E',
        text: `\`\`\`java
if (hi <= lo)
    return;
int mid = lo + (hi - lo)/2;
sort(a, lo, mid);
sort(a, mid+1, hi);
merge(a, lo, mid, hi);
\`\`\``,
      },
    ],
    correctOption: 'E',
    explanation: `O algoritmo **MergeSort** (*top-down*, paradigma de Divisão e Conquista, complexidade $\\Theta(n \\log n)$ no pior caso) precisa cumprir exatamente duas regras estruturais na função recursiva \`sort(a, lo, hi)\`:

1. **Caso base (condição de parada):**
   Quando o subvetor possui **1 elemento** (\`hi == lo\`) ou **0 elementos** (\`hi < lo\`, por exemplo se \`a.length == 0\` e a chamada inicial for \`sort(a, 0, -1)\`), ele já está ordenado. Portanto, a condição correta de retorno imediato é:
   \`\`\`java
   if (hi <= lo)
       return;
   \`\`\`
   *(Note que \`if (hi > lo) return;\` está invertida e impede a ordenação sempre que houver 2 ou mais elementos!)*

2. **Particionamento disjunto dos subvetores:**
   O enunciado informa explicitamente que \`merge\` combina os subvetores \`a[lo..mid]\` e \`a[mid+1..hi]\`.
   Calculando o ponto médio sem risco de *overflow* inteiro como \`int mid = lo + (hi - lo)/2;\`:
   - Metade esquerda: \`sort(a, lo, mid);\`
   - Metade direita: \`sort(a, mid+1, hi);\`
   - Intercalação: \`merge(a, lo, mid, hi);\`

   Se chamássemos \`sort(a, mid, hi)\` em vez de \`sort(a, mid+1, hi)\`, para um subvetor de 2 elementos (\`lo = 0, hi = 1\`), teríamos \`mid = 0\`, resultando em \`sort(a, 0, 1)\` novamente — **recursão infinita** (*StackOverflowError*)!

*(Observação didática: no trecho original impresso pela banca, o método \`merge\` omitiu \`< 0\` na expressão \`aux[j].compareTo(aux[i]) < 0\`, uma simplificação tipográfica da prova que não interfere na escolha do método \`sort\`.)*

Portanto, a implementação correta é a da **alternativa E**.`,
    optionAnalysis: {
      A: 'Incorreta: falha em dois pontos — usa `hi == lo` (não trata vetor vazio `lo=0, hi=-1`) e chama `sort(a, mid, hi)`, causando recursão infinita quando `hi == lo + 1`.',
      B: 'Incorreta: além de errar a partição (`mid` em vez de `mid+1`), inverte a condição de parada (`if (hi > lo) return;` interrompe justamente quando há elementos a ordenar).',
      C: 'Incorreta: acerta o caso base `hi <= lo`, mas chama `sort(a, mid, hi)` em vez de `sort(a, mid+1, hi)`, gerando sobreposição e recursão infinita.',
      D: 'Incorreta: acerta as chamadas recursivas com `mid+1`, mas inverte o caso base para `if (hi > lo) return;`, encerrando o método sem ordenar o vetor.',
      E: 'Correta: define o caso base robusto `if (hi <= lo) return;`, divide o intervalo em duas metades disjuntas `[lo..mid]` e `[mid+1..hi]` e intercala com `merge(a, lo, mid, hi)`.',
    },
    keyConcept:
      'MergeSort recursivo (Divisão e Conquista): caso base `hi <= lo`, divisão disjunta `[lo..mid]` e `[mid+1..hi]` para garantir redução estrita do subproblema e convergência em $\\Theta(n \\log n)$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 09.',
  },
  {
    id: 'enade-2019-q10',
    source: 'enade-2019',
    year: 2019,
    number: 10,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Reconhecimento de Padrões, Seleção de Características e Classificação em IA',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Um estudo recente de pesquisadores mostrou que os algoritmos de inteligência artificial também podem ser usados para prever, pelo olhar de um indivíduo, se ele tem chances de sofrer um ataque cardíaco. Os pesquisadores treinaram um sistema de Inteligência Artificial (IA) com exames de retina de 284 335 pacientes em busca de padrões nos cruzamentos de vasos sanguíneos para que a máquina aprenda a identificar os sinais indicadores de doenças cardiovasculares.

*Disponível em: <https://www.g1.globo.com/ciencia-e-saude/noticia/2019/03/15/como-a-ia-detecta-sinais-de-doencas-que-humanos-nao-podem-enxergar.ghtml>. Acesso em 01 Jun. de 2019 (adaptado).*`,
    command: `Acerca do caso apresentado, avalie as afirmações a seguir.

I. O conjunto de dados utilizado para a realização da técnica de reconhecimento de padrões corresponde aos exames de retina de 284 335 pacientes.
II. A seleção de características que serão utilizadas como base para o reconhecimento de padrões equivale ao cruzamento de vasos sanguíneos.
III. A classificação dos resultados corresponde a identificar os sinais indicadores de doenças cardiovasculares.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'E',
    explanation: `O *pipeline* clássico de **Reconhecimento de Padrões / Aprendizado de Máquina Supervisionado** envolve três elementos mapeados diretamente no enunciado:

1. **Conjunto de dados (*Dataset*) — Afirmação I (Correta):** As instâncias utilizadas para treinar o algoritmo são exatamente os **exames de retina de 284 335 pacientes**.
2. **Extração / Seleção de Características (*Features*) — Afirmação II (Correta):** Os atributos relevantes extraídos das imagens para alimentar o reconhecimento de padrões correspondem aos **padrões nos cruzamentos de vasos sanguíneos** da retina.
3. **Classificação / Predição de Saída — Afirmação III (Correta):** A tarefa-alvo (saída do classificador) consiste em **identificar os sinais indicadores de doenças cardiovasculares** (risco de ataque cardíaco).

Todas as três afirmações (**I, II e III**) correspondem fielmente às etapas do sistema de IA descrito (**alternativa E**).`,
    optionAnalysis: {
      A: 'Incorreta: omite as afirmações II e III, que também mapeiam corretamente as etapas do pipeline de IA.',
      B: 'Incorreta: omite as afirmações I e III, ambas verdadeiras.',
      C: 'Incorreta: omite a afirmação II (extração/seleção de características nos cruzamentos dos vasos sanguíneos).',
      D: 'Incorreta: omite a afirmação I (conjunto de treinamento formado pelos 284 335 exames de retina).',
      E: 'Correta: I (dataset), II (seleção de características) e III (classificação dos resultados) correspondem exatamente ao fluxo clássico de reconhecimento de padrões.',
    },
    keyConcept:
      'Pipeline de Reconhecimento de Padrões e Machine Learning: Conjunto de Dados (Dataset) → Extração/Seleção de Características (Features) → Classificação/Predição.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 10.',
  },
  {
    id: 'enade-2019-q11',
    source: 'enade-2019',
    year: 2019,
    number: 11,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Teoria dos Grafos — Coloração de Vértices e Número Cromático',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `O gestor de um hotel precisa satisfazer a demanda de vários grupos de eventos pelo uso exclusivo de auditórios por uma semana utilizando o menor número possível de auditórios. A tabela apresenta os conflitos de demandas dos grupos de eventos para todos os dias na semana, em que o valor 1 em uma célula indica que um determinado grupo precisará usar um auditório no mesmo horário que outro grupo e o valor 0 indica que não há conflito entre os dois grupos.

| | **G1** | **G2** | **G3** | **G4** | **G5** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **G1** | - | 1 | 1 | 1 | 1 |
| **G2** | 1 | - | 1 | 1 | 0 |
| **G3** | 1 | 1 | - | 0 | 1 |
| **G4** | 1 | 1 | 0 | - | 0 |
| **G5** | 1 | 0 | 1 | 0 | - |`,
    command: 'Nessa situação, o número mínimo de auditórios que satisfaz todas as demandas é de',
    options: [
      { letter: 'A', text: 'um.' },
      { letter: 'B', text: 'dois.' },
      { letter: 'C', text: 'três.' },
      { letter: 'D', text: 'quatro.' },
      { letter: 'E', text: 'cinco.' },
    ],
    correctOption: 'C',
    explanation: `Este problema clássico de alocação de recursos sem conflito modela-se diretamente como o **Problema de Coloração de Vértices em Grafos** (cujo ótimo é o **número cromático** $\\chi(G)$):
- **Vértices ($V$):** os 5 grupos de eventos $\\{G1, G2, G3, G4, G5\\}$.
- **Arestas ($E$):** pares de grupos com conflito de horário (valor \`1\` na matriz de adjacência).
- **Cores:** os auditórios distintos — vértices adjacentes (conflitantes) **não podem** receber a mesma cor (mesmo auditório).

### Passo 1 — Limite inferior (clique máxima)
Verificando as adjacências:
- $G1$ tem conflito com todos os demais ($G2, G3, G4, G5$).
- $G2$ tem conflito com $G3$ (além de $G1$ e $G4$).
- Logo, o subconjunto $\\{G1, G2, G3\\}$ forma um triângulo (clique $K_3$): todos conflitam dois a dois!
- Isso impõe o limite inferior obrigatório:
$$\\chi(G) \\ge \\omega(G) = 3$$

### Passo 2 — Construção de uma 3-coloração válida
Podemos alocar todos os 5 grupos usando apenas **3 auditórios**:
- **Auditório 1 (Cor 1):** \`G1\` (conflita com todos, logo fica sozinho no Auditório 1).
- **Auditório 2 (Cor 2):** \`G2\` e \`G5\` → conferindo na matriz: conflito$(G2, G5) = 0$ (válido!).
- **Auditório 3 (Cor 3):** \`G3\` e \`G4\` → conferindo na matriz: conflito$(G3, G4) = 0$ (válido!).

*(Observação: \`G4\` e \`G5\` também não conflitam entre si, mas como \`G2\` conflita com \`G4\` e \`G3\` conflita com \`G5\`, a partição \`{G1}\`, \`{G2, G5}\`, \`{G3, G4}\` é ótima e sem nenhum conflito.)*

Como $\\chi(G) \\ge 3$ e existe uma alocação válida com $3$ auditórios, conclui-se que o número mínimo é **três** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: 1 auditório só seria suficiente se não houvesse nenhum conflito (matriz toda nula).',
      B: 'Incorreta: o subgrafo {G1, G2, G3} forma um triângulo (K₃), exigindo no mínimo 3 auditórios distintos.',
      C: 'Correta: o número cromático do grafo de conflitos é exatamente 3, com a alocação válida Auditório 1 = {G1}, Auditório 2 = {G2, G5} e Auditório 3 = {G3, G4}.',
      D: 'Incorreta: embora 4 auditórios satisfaçam a demanda, não é o número mínimo, pois G2/G5 e G3/G4 podem compartilhar auditórios sem conflito.',
      E: 'Incorreta: 5 auditórios corresponderia a um grafo completo (K₅), mas há zeros na matriz (ex.: G2-G5, G3-G4, G4-G5).',
    },
    keyConcept:
      'Coloração de grafos e número cromático $\\chi(G)$: o tamanho da maior clique fornece um limite inferior ($\\chi(G) \\ge \\omega(G)$), e o pareamento de vértices não adjacentes (conjuntos independentes) permite alcançar o mínimo.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 11.',
  },
  {
    id: 'enade-2019-q12',
    source: 'enade-2019',
    year: 2019,
    number: 12,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Programação Linear — Método Gráfico e Teorema Fundamental nos Vértices',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Em um sistema computacional avalia-se o desempenho no uso de dois tipos de memória secundária por meio de programação linear. No gráfico apresentado cada eixo representa a quantidade de posições de memória de cada tipo e a região colorida representa, de forma contínua, o conjunto de soluções viáveis (região viável).`,
    images: [
      {
        src: '/images/enade-2019/q12-fig.png',
        alt: 'Gráfico cartesiano com eixos x (0 a 12) e y (0 a 8) mostrando um polígono convexo sombreado com vértices F(0,0), A(0,4), B(2,7), C(5,6), D(8,4) e E(9,0)',
        caption: 'Região viável do problema de programação linear e seus vértices extremos.',
      },
    ],
    command:
      'As arestas da região viável foram definidas pelas diversas restrições observadas para os dois tipos de memória. Com base no gráfico, o máximo desempenho do sistema, representado pela variável $Z = 30x + 10y$, é de',
    options: [
      { letter: 'A', text: '350.' },
      { letter: 'B', text: '280.' },
      { letter: 'C', text: '270.' },
      { letter: 'D', text: '180.' },
      { letter: 'E', text: '130.' },
    ],
    correctOption: 'B',
    explanation: `Pelo **Teorema Fundamental da Programação Linear**, o valor ótimo (máximo ou mínimo) de uma função objetivo linear sobre um politopo convexo compacto (região viável limitada) ocorre necessariamente em pelo menos um dos **vértices (pontos extremos)** da região viável.

Lendo as coordenadas $(x, y)$ de cada vértice diretamente na grade do gráfico e substituindo na função objetivo $Z = 30x + 10y$:

| Vértice | Coordenadas $(x, y)$ | Cálculo $Z = 30x + 10y$ | Valor de $Z$ |
| :---: | :---: | :---: | :---: |
| $F$ | $(0, 0)$ | $30(0) + 10(0)$ | $0$ |
| $A$ | $(0, 4)$ | $30(0) + 10(4)$ | $40$ |
| $B$ | $(2, 7)$ | $30(2) + 10(7) = 60 + 70$ | $130$ |
| $C$ | $(5, 6)$ | $30(5) + 10(6) = 150 + 60$ | $210$ |
| **$D$** | **$(8, 4)$** | **$30(8) + 10(4) = 240 + 40$** | **$280$ (Máximo!)** |
| $E$ | $(9, 0)$ | $30(9) + 10(0)$ | $270$ |

Portanto, o desempenho máximo ocorre no vértice $D(8, 4)$ com $Z_{\\max} = 280$ (**alternativa B**).`,
    optionAnalysis: {
      A: 'Incorreta: nenhum ponto da região viável atinge Z = 350 (pois o máximo de x é 9 com y = 0, dando 270, e em x = 8 o maior y viável é 4, dando 280).',
      B: 'Correta: no vértice D(8, 4), Z = 30(8) + 10(4) = 240 + 40 = 280, que é o maior valor entre todos os vértices da região viável.',
      C: 'Incorreta: 270 é o valor de Z no vértice E(9, 0), inferior ao obtido em D(8, 4).',
      D: 'Incorreta: não corresponde ao valor ótimo (sequer coincide com um vértice máximo).',
      E: 'Incorreta: 130 é o valor de Z no vértice B(2, 7), que maximiza y, mas não maximiza Z = 30x + 10y (pois o peso de x é três vezes maior que o de y).',
    },
    keyConcept:
      'Teorema Fundamental da Programação Linear: em regiões viáveis poligonais convexas e limitadas, basta avaliar a função objetivo $Z = c_1 x + c_2 y$ nos vértices extremos.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 12.',
  },
  {
    id: 'enade-2019-q13',
    source: 'enade-2019',
    year: 2019,
    number: 13,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Sistemas de Controle Lineares — Sistemas de 1ª Ordem, Malha Fechada e Resposta ao Degrau',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `Considere a modelagem matemática de um processo e a resposta à excitação do tipo degrau unitário apresentados a seguir.

Nesse processo, o tempo de estabilização é de $1$ segundo para o critério de $4$ constantes de tempo, a função de transferência de malha fechada é $T(s) = \\dfrac{Y(s)}{R(s)}$ e a função de transferência no ramo direto é $G(s)$.`,
    images: [
      {
        src: '/images/enade-2019/q13-fig.png',
        alt: 'Acima, diagrama de blocos de um sistema de controle com entrada R(s), somador com realimentação negativa unitária, bloco G(s) e saída Y(s). Abaixo, gráfico da resposta ao degrau unitário Y(t) subindo exponencialmente de 0 até estabilizar em 0,8 por volta de t = 1 segundo',
        caption: 'Diagrama de blocos em malha fechada e resposta ao degrau unitário do sistema.',
      },
    ],
    command: `Com base nas informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.

I. A função de transferência do ramo direto é $G(s) = \\dfrac{3{,}2}{s + 0{,}8}$.

**PORQUE**

II. A função de transferência de malha fechada é $T(s) = \\dfrac{3{,}2}{s + 4}$.

A respeito dessas asserções, assinale a opção correta.`,
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.',
      },
      {
        letter: 'C',
        text: 'A asserção I é uma proposição verdadeira, mas a II é uma proposição falsa.',
      },
      {
        letter: 'D',
        text: 'A asserção I é uma proposição falsa, mas a II é uma proposição verdadeira.',
      },
      {
        letter: 'E',
        text: 'As asserções I e II são proposições falsas.',
      },
    ],
    correctOption: 'A',
    explanation: `A curva da resposta ao degrau unitário exibe o comportamento exponencial monotônico característico de um **sistema de 1ª ordem**, cuja função de transferência de malha fechada padrão é:
$$T(s) = \\frac{K_{\\text{DC}}}{\\tau s + 1} = \\frac{K_{\\text{DC}} / \\tau}{s + 1/\\tau}$$

### 1. Verificando a Asserção II — $T(s)$ a partir do gráfico
- **Constante de tempo $\\tau$:** O enunciado informa que o tempo de estabilização para o critério de 4 constantes de tempo (critério de 2%) é $t_s = 1\\text{ s}$:
$$t_s = 4\\tau = 1\\text{ s} \\implies \\tau = 0{,}25\\text{ s} \\implies \\frac{1}{\\tau} = 4\\text{ rad/s}$$
- **Ganho em regime permanente ($K_{\\text{DC}}$):** Para entrada degrau unitário $R(s) = \\frac{1}{s}$, pelo Teorema do Valor Final e leitura do gráfico, $y(\\infty) = 0{,}8$:
$$y(\\infty) = \\lim_{s \\to 0} s \\cdot T(s) \\cdot \\frac{1}{s} = T(0) = K_{\\text{DC}} = 0{,}8$$
- Substituindo $K_{\\text{DC}} = 0{,}8$ e $\\frac{1}{\\tau} = 4$ em $T(s)$:
$$T(s) = \\frac{0{,}8 / 0{,}25}{s + 4} = \\frac{3{,}2}{s + 4}$$
  *(Checagem visual em $t = \\tau = 0{,}25\\text{ s}$: $Y(0{,}25) = 0{,}8(1 - e^{-1}) \\approx 0{,}506$, conferindo exatamente com a curva do gráfico!)*
- Portanto, a **Asserção II é VERDADEIRA**.

### 2. Verificando a Asserção I e o nexo causal (PORQUE)
No diagrama de blocos, o sistema tem **realimentação negativa unitária** ($H(s) = 1$), logo:
$$T(s) = \\frac{G(s)}{1 + G(s)} \\implies T(s) + T(s)G(s) = G(s) \\implies G(s) = \\frac{T(s)}{1 - T(s)}$$

Substituindo $T(s) = \\dfrac{3{,}2}{s + 4}$ (exatamente a expressão da Asserção II!):
$$G(s) = \\frac{\\dfrac{3{,}2}{s + 4}}{1 - \\dfrac{3{,}2}{s + 4}} = \\frac{\\dfrac{3{,}2}{s + 4}}{\\dfrac{s + 4 - 3{,}2}{s + 4}} = \\frac{3{,}2}{s + 0{,}8}$$

Portanto, a **Asserção I é VERDADEIRA**, e a **Asserção II é a justificativa direta (derivação matemática) da Asserção I** (**alternativa A**).`,
    optionAnalysis: {
      A: 'Correta: tanto I quanto II são verdadeiras, e G(s) = 3,2/(s + 0,8) decorre diretamente de T(s) = 3,2/(s + 4) pela relação de malha fechada com realimentação unitária G(s) = T(s)/(1 - T(s)).',
      B: 'Incorreta: há relação direta de implicação lógica e matemática entre II e I.',
      C: 'Incorreta: a asserção II é verdadeira, obtida diretamente de τ = t_s/4 = 0,25 s e y(∞) = 0,8.',
      D: 'Incorreta: a asserção I também é verdadeira.',
      E: 'Incorreta: ambas as proposições são matematicamente verdadeiras.',
    },
    keyConcept:
      'Sistema de 1ª ordem em malha fechada: $T(s) = \\frac{K/\\tau}{s + 1/\\tau}$ com $t_s(2\\%) = 4\\tau$, e inversão da realimentação negativa unitária via $G(s) = \\frac{T(s)}{1 - T(s)}$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 13.',
  },
  {
    id: 'enade-2019-q14',
    source: 'enade-2019',
    year: 2019,
    number: 14,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Processamento Digital de Sinais — Normalização de Frequência e Filtros Digitais Ideais',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Filtros normalizados são resultantes da compressão da faixa de frequência infinitamente longa $-\\infty < \\omega < \\infty$ de um filtro analógico (tempo contínuo) para a faixa de frequência finita $-\\pi < \\Omega < \\pi$ de um filtro digital (tempo discreto), com período $2\\pi$.

*HAYKIN, S; VEEN, B.V. Sinais e sistemas. Porto Alegre: Bookman, 2001 (adaptado).*

A mudança da escala de frequências também pode ser pensada como uma normalização do eixo das frequências em que a frequência de amostragem $\\omega_s$ corresponde a $\\pm\\pi$ e qualquer outra frequência em Hz, $\\omega$, corresponde à frequência discreta $\\pm\\Omega$.

*OPPENHEIM, A. V; SCHAFER, R. W. Discrete-time signal processing. 3. ed. NJ: Prentice Hall, 1998 (adaptado).*`,
    command:
      'Considerando um sistema de transmissão de dados com a máxima frequência do sinal de informação de 4 000 Hz, e frequência de amostragem de 20 000 amostras por segundo com um filtro digital de resposta ideal que rejeite os sinais de frequências superiores a 6 000 Hz, a resposta em frequência do filtro que atenda essas especificações é',
    options: [
      {
        letter: 'A',
        text: 'Gráfico A — banda passante em $[-0{,}3\\pi, 0{,}3\\pi]$ com banda de rejeição elevada acima de $0$.',
        image: '/images/enade-2019/q14-opt-a.png',
      },
      {
        letter: 'B',
        text: 'Gráfico B — filtro passa-baixas ideal com banda passante unitária em $[-0{,}3\\pi, 0{,}3\\pi]$, ganho nulo fora dela e período $2\\pi$.',
        image: '/images/enade-2019/q14-opt-b.png',
      },
      {
        letter: 'C',
        text: 'Gráfico C — filtro passa-altas ideal com banda de rejeição em $[-0{,}3\\pi, 0{,}3\\pi]$ e banda passante até $\\pm 1{,}7\\pi$.',
        image: '/images/enade-2019/q14-opt-c.png',
      },
      {
        letter: 'D',
        text: 'Gráfico D — filtro passa-faixa ideal com banda passante entre $0{,}3\\pi$ e $0{,}6\\pi$ (e simétrico negativo).',
        image: '/images/enade-2019/q14-opt-d.png',
      },
      {
        letter: 'E',
        text: 'Gráfico E — filtro periódico com pulsos centrados em $0, \\pm\\pi, \\pm 2\\pi$ (período $\\pi$).',
        image: '/images/enade-2019/q14-opt-e.png',
      },
    ],
    correctOption: 'B',
    explanation: `Vamos analisar os três requisitos especificados no enunciado:

1. **Tipo de filtro:**
   O sinal útil tem frequências de $0$ até $f_{\\max} = 4\\,000\\text{ Hz}$, e o filtro deve **rejeitar frequências superiores a $6\\,000\\text{ Hz}$** com resposta **ideal**. Portanto, trata-se de um **filtro passa-baixas ideal**, com:
   - Ganho $H(e^{j\\Omega}) = 1$ na banda passante ($|\\Omega| \\le \\Omega_c$);
   - Ganho **exatamente nulo** ($H(e^{j\\Omega}) = 0$, encostado sobre o eixo $\\Omega$) na banda de rejeição ($\\Omega_c < |\\Omega| \\le \\pi$).

2. **Frequência de corte normalizada $\\Omega_c$:**
   Seguindo a regra de normalização definida explicitamente no enunciado (*"em que a frequência de amostragem $\\omega_s$ corresponde a $\\pm\\pi$"*):
   $$\\frac{\\Omega_c}{\\pi} = \\frac{f_c}{f_s} = \\frac{6\\,000\\text{ Hz}}{20\\,000\\text{ Hz}} = 0{,}3 \\implies \\Omega_c = \\pm 0{,}3\\pi$$
   *(Obs.: o sinal útil até $4\\,000\\text{ Hz}$ corresponde a $|\\Omega| \\le 0{,}2\\pi$, ficando integralmente preservado dentro da faixa passante $[-0{,}3\\pi, +0{,}3\\pi]$.)*

3. **Periodicidade em tempo discreto:**
   Como destacado no primeiro parágrafo, a resposta em frequência $H(e^{j\\Omega})$ de qualquer filtro digital é periódica com **período $2\\pi$**, repetindo o pulso passa-baixas em torno de $0$, $-2\\pi$ e $+2\\pi$ (e **não** em $\\pm\\pi$).

Comparando visualmente os cinco gráficos:
- O gráfico **A** tem a banda de rejeição **acima do zero** (não rejeita totalmente as frequências superiores a $0{,}3\\pi$, não sendo um filtro ideal).
- O gráfico **B** é o único que exibe ganho $1$ em $[-0{,}3\\pi, 0{,}3\\pi]$, ganho **exatamente $0$** na banda de rejeição e periodicidade exata de **$2\\pi$**.

Portanto, a resposta correta é a **alternativa B**.`,
    optionAnalysis: {
      A: 'Incorreta: embora tenha pulsos centrados em 0 e ±2π com largura ±0,3π, a curva na banda de rejeição não cai até zero (permanece com um patamar positivo acima do eixo Ω), violando a definição de filtro ideal que rejeita altas frequências.',
      B: 'Correta: representa exatamente o filtro passa-baixas digital ideal com corte em ±0,3π, ganho 1 na banda passante, ganho 0 na banda de rejeição e período 2π.',
      C: 'Incorreta: representa um filtro passa-altas (rejeita as baixas frequências entre -0,3π e +0,3π, bloqueando o sinal de 4 000 Hz e deixando passar as frequências superiores a 6 000 Hz).',
      D: 'Incorreta: representa um filtro passa-faixa entre 0,3π e 0,6π, rejeitando o sinal útil de baixas frequências (abaixo de 0,3π).',
      E: 'Incorreta: apresenta réplicas espectrais também centradas em -π e +π, correspondendo erroneamente a um período π em vez de 2π.',
    },
    keyConcept:
      'Filtros digitais em tempo discreto: $H(e^{j\\Omega})$ tem período $2\\pi$, um passa-baixas ideal possui ganho unitário em $[-\\Omega_c, \\Omega_c]$ e ganho estritamente zero em $\\Omega_c < |\\Omega| \\le \\pi$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 14.',
  },
  {
    id: 'enade-2019-q15',
    source: 'enade-2019',
    year: 2019,
    number: 15,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Álgebra Linear Numérica — Regressão Linear por Mínimos Quadrados (Equações Normais)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `O método de regressão linear pelos mínimos quadrados é um dos mais difundidos para encontrar aproximações para modelos lineares em diferentes áreas, como por exemplo, processamento gráfico, aprendizagem de máquina e visão computacional.

Em um sistema superdeterminado do tipo $AX = B$, que não possua solução (devido a erros nos dados), a solução mais próxima, segundo o critério dos mínimos quadrados, é dada pelo sistema: $A^T \\cdot A X = A^T \\cdot B$, em que $A^T$ é a transposta de $A$. Considere o problema de encontrar a reta que melhor se ajusta a quatro pontos no plano, segundo o critério dos mínimos quadrados, cujas coordenadas são:

| | **P1** | **P2** | **P3** | **P4** |
| :---: | :---: | :---: | :---: | :---: |
| **$x$** | 1 | 2 | 3 | 4 |
| **$y$** | 1 | 3 | 2 | 5 |`,
    command:
      'Suponha que uma reta seja dada na forma funcional $y = mx + c$. Ao se substituírem as coordenadas de cada ponto nesta equação, forma-se um sistema de equações $AX = B$, em que $X$ é o vetor de incógnitas $\\begin{pmatrix} m \\\\ c \\end{pmatrix}$. A equação da reta que é solução dos mínimos quadrados é',
    options: [
      { letter: 'A', text: '$y = 0{,}5x + 1$.' },
      { letter: 'B', text: '$y = x + 0{,}1$.' },
      { letter: 'C', text: '$y = \\dfrac{4}{3}(x + 1)$.' },
      { letter: 'D', text: '$y = 1{,}5x$.' },
      { letter: 'E', text: '$y = 1{,}1x$.' },
    ],
    correctOption: 'E',
    explanation: `Substituindo os quatro pontos $(1,1)$, $(2,3)$, $(3,2)$ e $(4,5)$ no modelo $mx + c = y$, montamos o sistema superdeterminado $AX = B$:
$$A = \\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\\\ 4 & 1 \\end{pmatrix}, \\quad X = \\begin{pmatrix} m \\\\ c \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\\\ 5 \\end{pmatrix}$$

### Passo 1 — Calcular $A^T A$
$$A^T A = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\\\ 4 & 1 \\end{pmatrix} = \\begin{pmatrix} 1^2 + 2^2 + 3^2 + 4^2 & 1 + 2 + 3 + 4 \\\\ 1 + 2 + 3 + 4 & 1 + 1 + 1 + 1 \\end{pmatrix} = \\begin{pmatrix} 30 & 10 \\\\ 10 & 4 \\end{pmatrix}$$

### Passo 2 — Calcular $A^T B$
$$A^T B = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & 1 & 1 & 1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 1\\cdot 1 + 2\\cdot 3 + 3\\cdot 2 + 4\\cdot 5 \\\\ 1 + 3 + 2 + 5 \\end{pmatrix} = \\begin{pmatrix} 1 + 6 + 6 + 20 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} 33 \\\\ 11 \\end{pmatrix}$$

### Passo 3 — Resolver o sistema normal $A^T A X = A^T B$
$$\\begin{cases} 30m + 10c = 33 \\\\ 10m + 4c = 11 \\end{cases}$$

Multiplicando a segunda equação por $3$:
$$30m + 12c = 33$$

Subtraindo a primeira equação ($30m + 10c = 33$):
$$(30m + 12c) - (30m + 10c) = 33 - 33 \\implies 2c = 0 \\implies c = 0$$

Substituindo $c = 0$ na segunda equação:
$$10m = 11 \\implies m = 1{,}1$$

Logo, a equação da reta de mínimos quadrados é **$y = 1{,}1x$** (**alternativa E**).

*(Verificação rápida pelo centroide $(\\bar{x}, \\bar{y})$: $\\bar{x} = \\frac{10}{4} = 2{,}5$ e $\\bar{y} = \\frac{11}{4} = 2{,}75$. Como toda reta de regressão linear passa pelo centroide, testando $y = 1{,}1 \\times 2{,}5 = 2{,}75$ — confere perfeitamente!)*`,
    optionAnalysis: {
      A: 'Incorreta: para x̄ = 2,5, dá y = 2,25 ≠ 2,75 (nem passa pelo centroide dos dados).',
      B: 'Incorreta: para x̄ = 2,5, dá y = 2,6 ≠ 2,75; não satisfaz as equações normais.',
      C: 'Incorreta: y = (4/3)x + 4/3 dá y = 4,67 em x̄ = 2,5, muito distante dos pontos dados.',
      D: 'Incorreta: y = 1,5x dá y = 3,75 em x̄ = 2,5, superestimando os dados.',
      E: 'Correta: resolve exatamente as equações normais (30m + 10c = 33 e 10m + 4c = 11), resultando em m = 1,1 e c = 0, logo y = 1,1x.',
    },
    keyConcept:
      'Mínimos Quadrados (Equações Normais $A^T A X = A^T B$): propriedade útil de conferência rápida em prova — a reta de regressão linear sempre passa pelo ponto médio $(\\bar{x}, \\bar{y})$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 15.',
  },
  {
    id: 'enade-2019-q16',
    source: 'enade-2019',
    year: 2019,
    number: 16,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Circuitos Combinacionais — Demultiplexador (DEMUX), CIs 7404/7411 e Análise de Falhas',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Considere a construção de um Demultiplexador digital (DEMUX) de 4 canais, usando CIs 7404 e 7411, para que um mesmo controle (liga/desliga) seja compartilhado por quatro *leds*. A figura a seguir apresenta o diagrama esquemático do circuito.

Após a montagem, constatou-se que o circuito não funciona corretamente. Para certificação de que o circuito do diagrama esquemático estava correto, comparou-se os estados esperados com os estados observados do circuito para identificar o defeito. A tabela a seguir sintetiza os dados dessa comparação.

| **ENTRADA** | **S1S0** | **Estado esperado dos *Leds*** | **Estado observado dos *Leds*** |
| :---: | :---: | :---: | :---: |
| 0 | 0 | Todos os *leds* apagados | Todos os *leds* apagados |
| 0 | 1 | Todos os *leds* apagados | Todos os *leds* apagados |
| 0 | 2 | Todos os *leds* apagados | **LED2 aceso** |
| 0 | 3 | Todos os *leds* apagados | Todos os *leds* apagados |
| 1 | 0 | LED4 aceso | LED4 aceso |
| 1 | 1 | LED3 aceso | LED3 aceso |
| 1 | 2 | LED2 aceso | LED2 aceso |
| 1 | 3 | LED1 aceso | LED1 aceso |`,
    images: [
      {
        src: '/images/enade-2019/q16-fig.png',
        alt: 'Diagrama esquemático de um DEMUX de 4 canais com entradas S1, S0 e ENTRADA, dois inversores 74AC04N (IC3B e IC3A), quatro portas AND de 3 entradas 74AC11N (IC1A, IC1B, IC1C, IC2A) e quatro LEDs (LED4 a LED1) ligados ao GND via resistores R4 a R1',
        caption: 'Diagrama esquemático do demultiplexador digital de 4 canais com CIs 74AC04N e 74AC11N.',
      },
    ],
    command:
      'Com base nos dados apresentados na tabela, o defeito que condiz com os resultados das observações é que',
    options: [
      { letter: 'A', text: 'o pino 11 da porta IC1C não foi conectado.' },
      {
        letter: 'B',
        text: 'o pino 9 da porta IC1C está conectado com S0, ao invés de estar conectado com S1.',
      },
      {
        letter: 'C',
        text: 'o pino 10 da porta IC1C está conectado com S0, ao invés de estar conectado com S0 negado.',
      },
      {
        letter: 'D',
        text: 'o pino 11 da porta IC1C está conectado com S0, ao invés de estar conectado com a ENTRADA.',
      },
      {
        letter: 'E',
        text: 'o pino 11 da porta IC1C está conectado com S1, ao invés de estar conectado com a ENTRADA.',
      },
    ],
    correctOption: 'E',
    explanation: `Primeiro, rastreamos no esquemático qual porta lógica AND de 3 entradas (\`74AC11N\`) aciona cada LED (sabendo que \`IC3B\` inverte \`S1\` em $\\overline{S_1}$ e \`IC3A\` inverte \`S0\` em $\\overline{S_0}$):

- **IC1A** (saída pino 12 → R4 → **LED4**): pino 1 = $\\overline{S_1}$, pino 2 = $\\overline{S_0}$, pino 13 = \`ENTRADA\` $\\implies \\text{LED4} = \\overline{S_1} \\cdot \\overline{S_0} \\cdot E$ (seleciona $S_1 S_0 = 00_2 = 0$).
- **IC1B** (saída pino 6 → R3 → **LED3**): pino 3 = $\\overline{S_1}$, pino 4 = $S_0$, pino 5 = \`ENTRADA\` $\\implies \\text{LED3} = \\overline{S_1} \\cdot S_0 \\cdot E$ (seleciona $S_1 S_0 = 01_2 = 1$).
- **IC1C** (saída pino 8 → R2 → **LED2**): pino 9 = $S_1$, pino 10 = $\\overline{S_0}$, pino 11 = \`ENTRADA\` $\\implies \\text{LED2} = S_1 \\cdot \\overline{S_0} \\cdot E$ (seleciona $S_1 S_0 = 10_2 = 2$).
- **IC2A** (saída pino 12 → R1 → **LED1**): pino 1 = $S_1$, pino 2 = $S_0$, pino 13 = \`ENTRADA\` $\\implies \\text{LED1} = S_1 \\cdot S_0 \\cdot E$ (seleciona $S_1 S_0 = 11_2 = 3$).

### Diagnóstico da falha na tabela
A única discrepância ocorre na linha **ENTRADA = 0, S1S0 = 2** ($S_1 = 1, S_0 = 0$): **LED2 acende mesmo com ENTRADA = 0**, enquanto em **ENTRADA = 1, S1S0 = 2** ele também acende e nos demais casos permanece apagado!

Isso significa que a função lógica real implementada pela porta **IC1C** (que controla o LED2) tornou-se independente de \`ENTRADA\`, valendo:
$$\\text{LED2}_{\\text{obs}} = S_1 \\cdot \\overline{S_0}$$

Testando a hipótese da **alternativa E** — pino 11 conectado em $S_1$ em vez de \`ENTRADA\`:
$$\\text{LED2} = \\underbrace{S_1}_{\\text{pino 9}} \\cdot \\underbrace{\\overline{S_0}}_{\\text{pino 10}} \\cdot \\underbrace{S_1}_{\\text{pino 11}} = S_1 \\cdot \\overline{S_0}$$
- Para $S_1 S_0 = 10_2$ (decimal 2): $1 \\cdot \\overline{0} = 1$ (LED2 acende tanto para ENTRADA = 0 quanto para ENTRADA = 1!).
- Para $S_1 S_0 \\in \\{00, 01, 11\\}$: $S_1 \\cdot \\overline{S_0} = 0$ (LED2 permanece apagado).

Todas as 8 linhas da tabela observada são reproduzidas de forma determinística e exata (**alternativa E**).`,
    optionAnalysis: {
      A: 'Incorreta: os CIs utilizados são da família CMOS (74AC11N — Advanced CMOS), na qual um pino de entrada desconectado (flutuante) tem estado lógico indeterminado/instável sujeito a ruído, não garantindo comportamento determinístico igual a 1.',
      B: 'Incorreta: se o pino 9 fosse ligado a S0, teríamos LED2 = S0 · S0̄ · E = 0 sempre; o LED2 nunca acenderia (contradizendo as linhas S1S0 = 2).',
      C: 'Incorreta: se o pino 10 fosse ligado a S0, teríamos LED2 = S1 · S0 · E; o LED2 acenderia em (E=1, S1S0=3) junto com LED1 e não acenderia em S1S0=2.',
      D: 'Incorreta: se o pino 11 fosse ligado a S0, teríamos LED2 = S1 · S0̄ · S0 = 0 sempre; o LED2 permaneceria sempre apagado.',
      E: 'Correta: ligando o pino 11 a S1 em vez da ENTRADA, a saída de IC1C torna-se S1 · S0̄ · S1 = S1 · S0̄, acendendo o LED2 sempre que S1S0 = 2 (10₂), independentemente do valor da ENTRADA.',
    },
    keyConcept:
      'Análise lógica de falhas em circuitos digitais (DEMUX com portas AND): a propriedade da idempotência ($S_1 \\cdot S_1 = S_1$) faz uma ligação trocada entre `ENTRADA` e `S1` eliminar o controle de habilitação apenas no canal em que $S_1 = 1$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 16.',
  },
  {
    id: 'enade-2019-q17',
    source: 'enade-2019',
    year: 2019,
    number: 17,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Eletrônica Analógica — Amplificadores Operacionais, Ponte Resistiva e Sensor NTC',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Os amplificadores operacionais são utilizados em circuitos de controle e supervisão de processos industriais, em que sinais de entrada são provenientes de sensores ou transdutores colocados nas malhas de controle do sistema. O diagrama a seguir ilustra um exemplo de circuito utilizado para medição da temperatura com um sensor do tipo NTC (*Negative Temperature Coefficient*):`,
    images: [
      {
        src: '/images/enade-2019/q17-fig.png',
        alt: 'Circuito eletrônico composto por uma ponte alimentada por 10 V (ramo esquerdo com NTC e 2 kΩ; ramo direito com 10 kΩ e 10 kΩ), dois amplificadores operacionais não inversores com resistores de 100 Ω e 100 Ω, um terceiro amplificador operacional diferencial com quatro resistores de 1 kΩ e um voltímetro ligado entre a saída e o terra',
        caption: 'Circuito condicionador de sinal com ponte NTC e amplificador diferencial (3 Amp-Ops).',
      },
    ],
    command:
      'De acordo com o manual do fabricante do sensor NTC, para uma temperatura de $30\\,^\\circ\\text{C}$ é observada uma resistência de $8\\text{ k}\\Omega$, portanto, o valor da tensão exibida na tela (*display*) do voltímetro ligado na saída do circuito eletrônico apresentado é de',
    options: [
      { letter: 'A', text: '-6 volts.' },
      { letter: 'B', text: '6 volts.' },
      { letter: 'C', text: '3 volts.' },
      { letter: 'D', text: '-3 volts.' },
      { letter: 'E', text: '1 volt.' },
    ],
    correctOption: 'A',
    explanation: `Analisamos o circuito em **três estágios sequenciais**, assumindo amplificadores operacionais ideais (corrente de entrada nula e curto-circuito virtual entre as entradas $+$ e $-$):

### Estágio 1 — Divisores de tensão na ponte (alimentada por $10\\text{ V}$)
Como as entradas não inversoras ($+$) dos dois primeiros Amp-Ops têm impedância infinita, não drenam corrente da ponte:
- **Ramo direito (referência):** dois resistores de $10\\text{ k}\\Omega$ em série → conectado à entrada $+$ do **Amp-Op superior**:
$$V_{\\text{dir}} = 10\\text{ V} \\cdot \\frac{10\\text{ k}\\Omega}{10\\text{ k}\\Omega + 10\\text{ k}\\Omega} = 5\\text{ V}$$
- **Ramo esquerdo (sensor NTC):** $R_{\\text{NTC}} = 8\\text{ k}\\Omega$ (a $30\\,^\\circ\\text{C}$) em série com $2\\text{ k}\\Omega$ → conectado à entrada $+$ do **Amp-Op inferior**:
$$V_{\\text{esq}} = 10\\text{ V} \\cdot \\frac{2\\text{ k}\\Omega}{8\\text{ k}\\Omega + 2\\text{ k}\\Omega} = 10\\text{ V} \\cdot \\frac{2}{10} = 2\\text{ V}$$

### Estágio 2 — Dois amplificadores não inversores idênticos
Ambos os Amp-Ops intermediários estão na topologia **não inversora** com $R_1 = 100\\;\\Omega$ (para o terra) e $R_f = 100\\;\\Omega$ (realimentação):
$$A_v = 1 + \\frac{R_f}{R_1} = 1 + \\frac{100}{100} = 2$$
Portanto, suas tensões de saída são:
- **Amp-Op superior:** $V_{o1} = 2 \\cdot V_{\\text{dir}} = 2 \\cdot 5\\text{ V} = 10\\text{ V}$
- **Amp-Op inferior:** $V_{o2} = 2 \\cdot V_{\\text{esq}} = 2 \\cdot 2\\text{ V} = 4\\text{ V}$

### Estágio 3 — Amplificador subtrator (diferencial) de saída
O terceiro Amp-Op é um **amplificador diferencial** com todos os quatro resistores iguais a $1\\text{ k}\\Omega$ (ganho diferencial unitário $G = \\frac{1\\text{ k}\\Omega}{1\\text{ k}\\Omega} = 1$).
**Atenção máxima à polaridade das conexões:**
- $V_{o1} = 10\\text{ V}$ entra no ramo da entrada **inversora ($-$)**;
- $V_{o2} = 4\\text{ V}$ entra no ramo da entrada **não inversora ($+$)**.

Logo, a tensão de saída lida pelo voltímetro (terminal $+$ na saída e terminal $-$ no GND) é:
$$V_{\\text{out}} = \\frac{1\\text{ k}\\Omega}{1\\text{ k}\\Omega}(V_{o2} - V_{o1}) = 4\\text{ V} - 10\\text{ V} = -6\\text{ V}$$

Assim, o display do voltímetro exibe **$-6\\text{ volts}$** (**alternativa A**).`,
    optionAnalysis: {
      A: 'Correta: V_dir = 5 V → V_o1 = 10 V (ramo inversor) e V_esq = 2 V → V_o2 = 4 V (ramo não inversor), resultando em V_out = V_o2 - V_o1 = 4 - 10 = -6 V.',
      B: 'Incorreta: erro de sinal ao subtrair V_o1 - V_o2 em vez de V_o2 - V_o1 (o ramo superior de 10 V está ligado à entrada inversora do Amp-Op final).',
      C: 'Incorreta: esquece o ganho 2 dos amplificadores não inversores (1 + 100/100 = 2) e ainda inverte o sinal (5 - 2 = +3 V).',
      D: 'Incorreta: calcula corretamente a diferença de polaridade na ponte (2 - 5 = -3 V), mas esquece de multiplicar pelo ganho 2 do estágio intermediário (confundindo os não inversores com buffers de ganho 1).',
      E: 'Incorreta: valor incompatível com o divisor de tensão e os ganhos do circuito.',
    },
    keyConcept:
      'Circuito com 3 Amp-Ops: ganho não inversor $A_v = 1 + R_f/R_1$ (com resistores iguais vale 2, não 1!) seguido de subtrator diferencial $V_{\\text{out}} = \\frac{R_2}{R_1}(V_+ - V_-)$ — atenção redobrada à polaridade de cada entrada.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 17.',
  },
  {
    id: 'enade-2019-q18',
    source: 'enade-2019',
    year: 2019,
    number: 18,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Criptografia Simétrica — DES, Triple DES (3DES) e Compatibilidade Reversa (EDE/DED)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `O algoritmo de criptografia *Data Encryption Standard* (DES) cifra blocos de 64 bits utilizando chaves simétricas de 56 bits. Atualmente o DES não é mais considerado uma cifra segura devido ao pequeno número de bits utilizado para a chave. Para resolver o tamanho da chave, foi proposto o DES Triplo (3DES), que utiliza três execuções do DES e chaves de até 168 bits. A chave $k$ para o 3DES é dividida em três partes $(k_a, k_b, k_c)$ e cada uma destas partes é utilizada na execução de uma instância do DES.

*STALLINGS, W. Criptografia e Segurança de Redes: Princípios e práticas. 4ª ed. São Paulo: Pearson Prentice Hall, 2008 (adaptado).*`,
    command:
      'O algoritmo DES define uma função $C(m, k_1)$ que cifra uma mensagem $m$ com uma chave $k_1$ e uma função $D(c, k_1)$ que decifra uma mensagem $c$ cifrada com a chave $k_1$. Para que o 3DES seja capaz de decifrar mensagens cifradas com o DES, sua implementação deve ser',
    options: [
      {
        letter: 'A',
        text: '$D(C(D(m, k_a), k_b), k_c)$, sendo $k_a \\neq k_b \\neq k_c$ partes da chave usada no 3DES e $k_a$ a chave usada no DES.',
      },
      {
        letter: 'B',
        text: '$D(D(D(m, k_a), k_b), k_c)$, sendo $k_a \\neq k_b \\neq k_c$, partes da chave do 3DES e $k_a$ a chave usada no DES.',
      },
      {
        letter: 'C',
        text: '$D(D(D(m, k_a), k_b), k_c)$, sendo $k_a = k_b = k_c$, partes da chave do 3DES e $k_a$ a chave usada no DES.',
      },
      {
        letter: 'D',
        text: '$D(C(D(m, k_a), k_b), k_c)$, sendo $k_a = k_b = k_c$ partes da chave usada no 3DES e $k_a$ a chave usada no DES.',
      },
      {
        letter: 'E',
        text: '$D(D(C(m, k_a), k_b), k_c)$, sendo $k_a = k_b = k_c$ partes da chave usada no 3DES e $k_a$ a chave usada no DES.',
      },
    ],
    correctOption: 'D',
    explanation: `O padrão **3DES (Triple DES)** adota o modo **EDE** (*Encrypt–Decrypt–Encrypt*) na cifragem justamente para garantir **compatibilidade reversa** com implementações legadas do DES simples:
- **Cifragem 3DES (EDE):** $c = C(D(C(m_0, k_a), k_b), k_c)$
- **Decifragem 3DES (DED — operação inversa):** $m_0 = D(C(D(c, k_c), k_b), k_a)$

Agora suponha que recebemos um texto cifrado $m = C(m_0, k_a)$ produzido pelo **DES simples** com chave $k_a$. Se configurarmos o 3DES com as três subchaves iguais **$k_a = k_b = k_c$** e aplicarmos a decifragem **DED** $D(C(D(m, k_a), k_b), k_c)$:

1. **Etapa interna ($D$):** $D(m, k_a) = D(C(m_0, k_a), k_a) = m_0$ (recupera a mensagem original).
2. **Etapa intermediária ($C$):** $C(m_0, k_b) = C(m_0, k_a) = m$ (reaplica a cifra — **cancela** o efeito da primeira operação!).
3. **Etapa externa ($D$):** $D(m, k_c) = D(C(m_0, k_a), k_a) = m_0$ (decifra definitivamente!).

Assim, o par interno $C(D(\\cdot, k_a), k_a)$ se anula identicamente, reduzindo o 3DES exatamente à operação de decifragem DES simples $D(m, k_a)$!

Portanto, a implementação correta é **$D(C(D(m, k_a), k_b), k_c)$ com $k_a = k_b = k_c$** (**alternativa D**).`,
    optionAnalysis: {
      A: 'Incorreta: se k_a ≠ k_b ≠ k_c, as operações C e D com chaves distintas não se cancelam, e o 3DES não consegue decifrar um bloco cifrado pelo DES simples com k_a.',
      B: 'Incorreta: o encadeamento DDD com chaves distintas aplicaria três decifragens sucessivas sem cancelamento.',
      C: 'Incorreta: mesmo com k_a = k_b = k_c, aplicar DDD decifraria a mensagem três vezes (D(D(m_0, k_a), k_a)), produzindo texto ininteligível em vez de m_0.',
      D: 'Correta: a sequência DED — D(C(D(m, k_a), k_b), k_c) — com k_a = k_b = k_c faz as duas operações iniciais D e C se anularem, equivalendo exatamente a D(m, k_a).',
      E: 'Incorreta: embora o resultado algébrico D(D(C(m, k), k), k) também reduzisse a D(m, k) para k_a = k_b = k_c, a operação DDC não corresponde à arquitetura padronizada do 3DES (que é EDE na cifragem e DED na decifragem).',
    },
    keyConcept:
      '3DES no modo EDE (cifragem) e DED (decifragem): definir $k_a = k_b = k_c$ anula duas etapas consecutivas e garante compatibilidade reversa total com o DES simples.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 18.',
  },
  {
    id: 'enade-2019-q19',
    source: 'enade-2019',
    year: 2019,
    number: 19,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Segurança em Hardware — Hardware Trojans, Inspeção Física e Camuflagem de Layout',
    questionStyle: 'afirmativas',
    difficulty: 'dificil',
    context: `Pesquisadores vêm trabalhando na possibilidade de microprocessadores comerciais *off-the-shelf* terem sido adquiridos com um *backdoor* utilizado para desativá-los no momento oportuno, ou seja, ataques a sistemas cibernéticos poderiam ser intencionalmente ativados por meio de um gatilho (*trigger*), em momento definido pelo atacante.

*Disponível: <http://www.abin.gov.br>. Acesso em: 29 jun. 2019 (adaptado).*

São inúmeras as possibilidades de ação por meio do uso de *hardware trojan*, que permite uma infiltração silenciosa e cuja detecção é extremamente complexa.`,
    command: `Com base no texto e no contexto de detecção e prevenção de ameaças, avalie as afirmações a seguir.

I. Detecção de falhas de manufatura, como falhas de atraso (*delay*), garante a detecção dos *trojans*.
II. Detecção por meio de inspeção física ou engenharia reversa destrutiva não garante que os microprocessadores comerciais estejam livres do *hardware trojan*.
III. O preenchimento total de células no circuito previne a inserção de *hardware trojan*, não deixando espaços vagos no *design*.
IV. Prevenção por meio de camuflagem é um tipo de estratégia de ofuscação no nível do *layout* físico, que consiste na adição de contatos e conexões falsas.

É correto apenas o que se afirma em`,
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e III.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação segundo a literatura de **Segurança em Hardware (*Hardware Security / Hardware Trojans*)**:

- **Afirmação I — Incorreta:** Testes tradicionais de manufatura (incluindo testes de falhas de atraso / *delay testing*) **não garantem** a detecção de *hardware trojans*. *Trojans* sofisticados são projetados especificamente para ficar dormentes até o disparo de um gatilho raro (*trigger*) e para introduzir impacto mínimo ou desprezível nos caminhos críticos de atraso, além de poderem mascarar-se dentro das variações normais de processo (*process variations*).
- **Afirmação II — Correta:** A inspeção física ou engenharia reversa destrutiva (*delayering* químico/mecânico + microscopia eletrônica SEM) **destrói o chip analisado** e possui custo e tempo altíssimos. Como só pode ser aplicada por amostragem em alguns circuitos do lote, não há garantia de que os demais microprocessadores comerciais efetivamente implantados estejam livres de *trojans* (que podem ter sido inseridos seletivamente em apenas parte do lote).
- **Afirmação III — Incorreta:** Preencher espaços vagos do *layout* com células funcionais ou de autoverificação (*filler cells / BISA*) **dificulta**, mas **não previne totalmente** a inserção de *hardware trojans*. Uma fundição maliciosa ainda pode redimensionar transistores, alterar parâmetros de dopagem (*dopant-level trojans* sem adicionar nenhuma porta nova!), modificar células existentes ou remover/substituir células de preenchimento.
- **Afirmação IV — Correta:** A **camuflagem de circuito (*IC camouflaging*)** é justamente uma técnica de ofuscação em nível de *layout* físico que adiciona contatos falsos (*dummy contacts*) e conexões simuladas de modo que portas lógicas diferentes (ex.: NAND, NOR e XOR) pareçam fisicamente idênticas sob microscopia óptica ou eletrônica, dificultando a engenharia reversa e a inserção direcionada de *trojans*.

Portanto, estão corretas apenas **II e IV** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: a afirmação I é falsa, pois testes de atraso de manufatura não garantem detecção de trojans furtivos ou fora do caminho crítico.',
      B: 'Incorreta: tanto I quanto III fazem promessas absolutas ("garante", "previne") que são falsas na segurança de hardware.',
      C: 'Correta: II (limitação da engenharia reversa destrutiva em lotes comerciais) e IV (definição precisa de camuflagem no nível de layout físico) são verdadeiras.',
      D: 'Incorreta: inclui as afirmações falsas I e III e exclui a verdadeira II.',
      E: 'Incorreta: inclui a afirmação III, que ignora trojans paramétricos/de dopagem ou remoção de células de preenchimento pela fundição.',
    },
    keyConcept:
      'Hardware Trojans: detecção por engenharia reversa destrutiva não escala para todos os chips implantados, e a camuflagem (*IC camouflaging*) ofusca o *layout* físico com contatos e conexões falsas.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 19.',
  },
  {
    id: 'enade-2019-q20',
    source: 'enade-2019',
    year: 2019,
    number: 20,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Arquitetura e Projeto de Software — Rigidez, Acoplamento e Princípio Aberto-Fechado (OCP)',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Rigidez é a tendência de um software ser difícil de modificar. Cada mudança causa uma cascata de mudanças subsequentes em módulos dependentes. O trecho de código a seguir faz parte de um sistema com suporte à comunicação entre diferentes dispositivos de comunicação via rádio (modems):

\`\`\`cpp
1  struct Modem { enum Type {hayes, courrier, ernie} type; };
2  struct Hayes {
3      Modem::Type type;
4      // Detalhes do modem tipo Hayes
5  };
6  struct Courrier {
7      Modem::Type type;
8      // Detalhes do modem tipo Courrier
9  };
10 struct Ernie {
11     Modem::Type type;
12     // Detalhes do modem tipo Ernie
13 };
14 void LogOn(Modem& m, string& frq, string& user, string& pw) {
15     if (m.type == Modem::hayes)
16         OpenHayesChannel((Hayes&)m, frq);
17     else OpenCourrierChannel((Courrier&)m, frq);
18     // depois de conectado, enviar user, pw, etc.
19     // (continua)
\`\`\`

*Disponível em: <http://www.staff.cs.utu.fi/staff/jouni.smed/doos_06/material/DesignPrinciplesAndPatterns.pdf>. Acesso em: 15 jun. 2019 (adaptado).*

Nesse trecho, cada tipo de modem tem suas particularidades e foram criadas estruturas específicas para cada tipo (linhas 2 a 13). Um *"enumeration"* (linha 1) é utilizado para identificar o tipo de modem. O procedimento \`LogOn\` (linhas 14 a 19) é responsável por realizar a conexão a um modem. Dados o tipo do modem (\`m\`), a frequência (\`frq\`), o nome de usuário (\`user\`) e a senha (\`pw\`), inicialmente, é feita a abertura do canal de comunicação, que corresponde a uma chamada específica para cada tipo de modem (linhas 15 a 17). Como os modems do tipo \`Courrier\` e \`Ernie\` são similares em termos de abertura de canal, o programador decidiu otimizar o código, utilizando a função do modem \`Courrier\` para ambos (\`OpenCourrierChannel\` - linha 17). Uma vez conectado, o código continua o processo de \`LogOn\` na linha 18 em diante.`,
    command: 'Nesse projeto do código um sintoma de rigidez é que',
    options: [
      {
        letter: 'A',
        text: 'se o suporte ao modem do tipo `Ernie` for removido do sistema, será necessário remover a estrutura `Ernie` do código.',
      },
      {
        letter: 'B',
        text: 'se um novo tipo de modem for adicionado, será necessário alterar o número de parâmetros definidos no procedimento `LogOn`.',
      },
      {
        letter: 'C',
        text: 'se um novo tipo de modem for adicionado, é necessário copiar e colar todo o código de uma das outras estruturas de modems para incluir novos detalhes.',
      },
      {
        letter: 'D',
        text: 'se a política de comunicação do modem do tipo `Hayes` sofrer alteração, pode ser necessário alterar o procedimento `OpenHayesChannel` e a estrutura `Hayes`.',
      },
      {
        letter: 'E',
        text: 'se a política de comunicação do modem do tipo `Courrier` sofrer alteração, pode ser necessário alterar `OpenCourrierChannel` e `LogOn` e criar um novo procedimento `OpenErnieChannel`.',
      },
    ],
    correctOption: 'E',
    explanation: `O enunciado traz a definição clássica de **rigidez** (Robert C. Martin, *Design Principles and Design Patterns*): *"cada mudança causa uma cascata de mudanças subsequentes em módulos dependentes"*.

Observe o acoplamento indevido criado pelo programador na linha 17:
\`\`\`cpp
if (m.type == Modem::hayes)
    OpenHayesChannel((Hayes&)m, frq);
else OpenCourrierChannel((Courrier&)m, frq);
\`\`\`

Por não usar polimorfismo (violando o **Princípio Aberto-Fechado — OCP**) e ainda acoplar o modem \`Ernie\` diretamente ao ramo \`else\` que invoca \`OpenCourrierChannel\`:
- Se a política de comunicação do modem \`Courrier\` mudar (enquanto \`Ernie\` mantém a política antiga), não basta editar \`OpenCourrierChannel\`! Fazer isso quebraria o modem \`Ernie\`.
- Consequentemente, uma mudança aparentemente localizada em \`Courrier\` dispara uma **cascata de modificações**:
  1. Alterar \`OpenCourrierChannel\` para a nova política do \`Courrier\`;
  2. Criar um novo procedimento \`OpenErnieChannel\` para preservar o comportamento do \`Ernie\`;
  3. Alterar a lógica condicional de \`LogOn\` para distinguir \`Modem::courrier\` de \`Modem::ernie\`.

Esse efeito cascata sobre múltiplos módulos dependentes ilustra exatamente o sintoma de **rigidez** descrito na **alternativa E**.`,
    optionAnalysis: {
      A: 'Incorreta: remover a estrutura de um dispositivo descontinuado é uma manutenção local esperada, não uma cascata de alterações em módulos dependentes.',
      B: 'Incorreta: `LogOn` recebe `Modem& m` genericamente; adicionar um novo tipo de modem exige alterar o `enum` e os `if/else` internos, mas não o número de parâmetros de `LogOn`.',
      C: 'Incorreta: não é necessário copiar e colar todo o código de outras structs para declarar uma nova struct de modem.',
      D: 'Incorreta: alterar `Hayes` e `OpenHayesChannel` quando o próprio modem `Hayes` muda é uma alteração coesa e restrita ao próprio domínio do `Hayes`, não uma cascata afetando outros modems ou `LogOn`.',
      E: 'Correta: demonstra exatamente o efeito cascata da rigidez — alterar apenas `Courrier` obriga a modificar `OpenCourrierChannel`, alterar `LogOn` e criar `OpenErnieChannel` devido ao acoplamento artificial no `else`.',
    },
    keyConcept:
      'Rigidez de software (smell arquitetural) e violação do Princípio Aberto-Fechado (OCP): condicionais baseados em `enum` e reaproveitamento acoplado propagam mudanças em cascata; a solução orientada a objetos é usar polimorfismo com uma interface `Modem`.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 20.',
  },
  {
    id: 'enade-2019-q21',
    source: 'enade-2019',
    year: 2019,
    number: 21,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Linguagem SQL — Comandos SELECT, DELETE, DDL (ALTER TABLE) e DML (UPDATE/INSERT)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Uma empresa de análise de mercado de entregas de encomendas foi contratada para selecionar aquela que prestaria serviço para seu cliente e fez um levantamento de dados do setor nos últimos 10 anos, produzindo um relatório com a tabela a seguir, que apresenta 5 principais fornecedores em potencial para o serviço de entrega de encomendas.

| **CÓDIGO** | **CD1** | **CD2** | **CD3** | **CD4** | **CD5** | **CD6** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Fornecedor 1 | 300 | 40 | 32 | 50 | 2.9 | Nacional |
| Fornecedor 2 | 160 | 28 | 27 | 30 | 0.2 | Nacional |
| Fornecedor 3 | 140 | 24 | 24 | 25 | 0.01 | Regional |
| Fornecedor 4 | 220 | 30 | 27 | 30 | 0.5 | Nacional |
| Fornecedor 5 | 240 | 34 | 30 | 40 | 1.05 | Nacional |`,
    command: `Com base nessa situação e considerando que a tabela faz parte do banco de dados da empresa com o nome de \`TABELA1\`, avalie as afirmações a seguir.

I. O código em SQL que exclui da \`TABELA1\` as informações do Fornecedor 1, Fornecedor 4 e Fornecedor 5 é: \`DELETE FROM TABELA1 WHERE CD6 = 'Regional' OR CD1 > 160 OR CD5 > 1;\`.
II. A inclusão de uma nova coluna com dados de taxa de eficiência de entrega para os fornecedores constantes na \`TABELA1\` é feita pelo código: \`INSERT INTO TABELA1 (CD7) SET CD7 = 'CD3/CD2';\`.
III. O código que reflete a escolha do cliente, o Fornecedor 3, é: \`SELECT Fornecedor FROM TABELA1 WHERE CD1 > 100 AND (CD3/CD2) > 0.99 AND CD5 < 0.5 ORDER BY CD3;\`.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'B',
    explanation: `Analisando cada comando SQL em relação à \`TABELA1\`:

- **Afirmação I — Incorreta:**
  Avaliando a cláusula \`WHERE CD6 = 'Regional' OR CD1 > 160 OR CD5 > 1\` em cada linha:
  - **Fornecedor 1:** \`CD1 = 300 > 160\` (V) e \`CD5 = 2.9 > 1\` (V) → **excluído**.
  - **Fornecedor 2:** \`CD6 = 'Nacional'\` (F), \`CD1 = 160\` (F), \`CD5 = 0.2\` (F) → mantido.
  - **Fornecedor 3:** \`CD6 = 'Regional'\` (**V!**) → **também é excluído!**
  - **Fornecedor 4:** \`CD1 = 220 > 160\` (V) → **excluído**.
  - **Fornecedor 5:** \`CD1 = 240 > 160\` (V) e \`CD5 = 1.05 > 1\` (V) → **excluído**.
  Logo, o comando exclui os Fornecedores 1, **3**, 4 e 5 — e não apenas 1, 4 e 5!

- **Afirmação II — Incorreta:**
  Contém múltiplos erros fundamentais de sintaxe e semântica SQL:
  1. \`INSERT INTO\` insere **novas linhas (tuplas)**, nunca uma nova coluna! Para criar uma coluna na estrutura da tabela usa-se o comando DDL \`ALTER TABLE TABELA1 ADD CD7 FLOAT;\`.
  2. Para preencher os valores da nova coluna nas linhas já existentes, usa-se DML \`UPDATE TABELA1 SET CD7 = CD3 / CD2;\`.
  3. Colocar \`'CD3/CD2'\` entre aspas simples trata a expressão como uma *string* literal, e não como uma divisão numérica.

- **Afirmação III — Correta (conforme gabarito oficial):**
  Testando o filtro \`WHERE CD1 > 100 AND (CD3/CD2) > 0.99 AND CD5 < 0.5\` em cada fornecedor:
  - **Fornecedor 1:** \`CD3/CD2 = 32/40 = 0.80\` (F), \`CD5 = 2.9\` (F) → descartado.
  - **Fornecedor 2:** \`CD3/CD2 = 27/28 ≈ 0.964\` (F) → descartado.
  - **Fornecedor 3:** \`CD1 = 140 > 100\` (**V**), \`CD3/CD2 = 24/24 = 1.00 > 0.99\` (**V**), \`CD5 = 0.01 < 0.5\` (**V**) → **único selecionado!**
  - **Fornecedor 4:** \`CD3/CD2 = 27/30 = 0.90\` (F), \`CD5 = 0.5\` (F, não é estritamente menor que 0.5) → descartado.
  - **Fornecedor 5:** \`CD3/CD2 = 30/34 ≈ 0.882\` (F), \`CD5 = 1.05\` (F) → descartado.
  *(Nota prática: embora no cabeçalho impresso a primeira coluna esteja rotulada como \`CÓDIGO\`, a banca tratou \`Fornecedor\` como identificador da coluna na projeção, e o predicado \`WHERE\` isola unicamente o Fornecedor 3.)*

Portanto, apenas a afirmação **III** está correta (**alternativa B**).`,
    optionAnalysis: {
      A: 'Incorreta: a afirmação I é falsa porque a condição `CD6 = \'Regional\'` também exclui o Fornecedor 3.',
      B: 'Correta: I falha ao excluir também o Fornecedor 3, II mistura incorretamente INSERT com ALTER TABLE/UPDATE e string literal, restando apenas III como correta.',
      C: 'Incorreta: tanto I quanto II são falsas.',
      D: 'Incorreta: inclui a afirmação II, que usa sintaxe SQL inválida (`INSERT INTO ... SET ...`) para tentar adicionar uma coluna.',
      E: 'Incorreta: inclui as afirmações falsas I e II.',
    },
    keyConcept:
      'SQL DDL vs. DML: `ALTER TABLE ... ADD` cria colunas, `UPDATE ... SET` atualiza registros existentes, `INSERT INTO` insere novas tuplas, e atenção rigorosa ao operador lógico `OR` em cláusulas `DELETE ... WHERE`.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 21.',
  },
  {
    id: 'enade-2019-q22',
    source: 'enade-2019',
    year: 2019,
    number: 22,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Inteligência Artificial — Redes Bayesianas e Modelagem Causal (DAG)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Considere um software de monitoramento de estufas que possui um alarme que detecta quando um medidor de temperatura excede um dado limiar. Para esse projeto, utilizou-se uma rede bayesiana para inferir eventos que podem acontecer no sistema com as seguintes variáveis booleanas:

- **$A$:** o alarme soa;
- **$AD$:** o alarme está defeituoso, o alarme é acionado sem necessidade ou é um alarme falso;
- **$MD$:** o medidor de temperatura está defeituoso e pode gerar valores incorretos, levando a leituras erradas do medidor;
- **$LM$:** os valores de leitura do medidor;
- **$T$:** a temperatura real da estufa.`,
    command:
      'Quando a temperatura da estufa fica muito alta, o medidor de temperatura pode falhar. Assim, a rede bayesiana para esse domínio é',
    options: [
      {
        letter: 'A',
        text: 'Rede A: $T \\to LM \\to A$, $MD \\to LM$, $MD \\to AD$, $AD \\to A$.',
        image: '/images/enade-2019/q22-opt-a.png',
      },
      {
        letter: 'B',
        text: 'Rede B: $T \\to MD$, $T \\to LM$, $MD \\to LM$, $LM \\to A$, $AD \\to A$.',
        image: '/images/enade-2019/q22-opt-b.png',
      },
      {
        letter: 'C',
        text: 'Rede C: $T \\to MD$, $T \\to LM$, $LM \\to A$, $AD \\to A$.',
        image: '/images/enade-2019/q22-opt-c.png',
      },
      {
        letter: 'D',
        text: 'Rede D: $T \\to LM \\to A$, $MD \\to AD \\to A$.',
        image: '/images/enade-2019/q22-opt-d.png',
      },
      {
        letter: 'E',
        text: 'Rede E: $T \\to LM \\to A$, $MD \\to LM$, $AD \\to A$.',
        image: '/images/enade-2019/q22-opt-e.png',
      },
    ],
    correctOption: 'B',
    explanation: `Em uma **Rede Bayesiana** (grafo acíclico dirigido — DAG), cada arco orientado $X \\to Y$ representa uma dependência probabilística direta (relação de causa para efeito). Mapeando cada frase do enunciado diretamente para arcos do grafo:

1. *"Quando a temperatura da estufa fica muito alta, o medidor de temperatura pode falhar"* $\\implies$ **$T \\to MD$**.
2. A leitura do medidor ($LM$) depende diretamente da temperatura real da estufa ($T$) **e** do fato de o medidor estar defeituoso ou não (*"$MD$: ... levando a leituras erradas do medidor"*) $\\implies$ **$T \\to LM$** e **$MD \\to LM$**.
3. O acionamento do alarme ($A$) depende diretamente dos valores lidos pelo medidor (*"alarme que detecta quando um medidor de temperatura excede um dado limiar"*) **e** do fato de o próprio alarme estar defeituoso ($AD$) $\\implies$ **$LM \\to A$** e **$AD \\to A$**.
4. **Independência causal:** Um defeito no medidor de temperatura ($MD$) **não** causa defeito físico no alarme ($AD$); portanto **não** deve existir arco $MD \\to AD$.

Reunindo exatamente os 5 arcos:
$$T \\to MD, \\quad T \\to LM, \\quad MD \\to LM, \\quad LM \\to A, \\quad AD \\to A$$

A distribuição conjunta fatorada corresponde a:
$$P(T, MD, LM, AD, A) = P(T)\\,P(MD \\mid T)\\,P(LM \\mid T, MD)\\,P(AD)\\,P(A \\mid LM, AD)$$

O único diagrama que apresenta exatamente essa estrutura causal é o da **alternativa B**.`,
    optionAnalysis: {
      A: 'Incorreta: omite o arco T → MD (falha do medidor por alta temperatura) e adiciona um arco inexistente MD → AD (defeito no medidor não causa defeito no alarme).',
      B: 'Correta: contém exatamente as 5 dependências causais descritas no enunciado (T → MD, T → LM, MD → LM, LM → A e AD → A), sem arcos espúrios.',
      C: 'Incorreta: omite o arco MD → LM, o que tornaria a leitura do medidor independente de o medidor estar defeituoso.',
      D: 'Incorreta: omite T → MD e MD → LM, e ainda liga erroneamente MD → AD.',
      E: 'Incorreta: omite o arco T → MD, ignorando a informação explícita de que a temperatura alta da estufa pode causar falha no medidor.',
    },
    keyConcept:
      'Redes Bayesianas (DAGs causais): cada arco $X \\to Y$ codifica dependência condicional direta ($Y$ dado seus pais); ausência de arco codifica independência condicional.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 22.',
  },
];
