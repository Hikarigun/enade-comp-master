import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2019_CE_2: ObjectiveQuestion[] = [
  {
    id: 'enade-2019-q23',
    source: 'enade-2019',
    year: 2019,
    number: 23,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Linguagens Formais e Autômatos — Autômato Finito Determinístico (AFD) e Linguagens Regulares',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context:
      'Considere o autômato de estados finitos determinístico representado na figura a seguir.',
    images: [
      {
        src: '/images/enade-2019/q23-fig.png',
        alt: 'Diagrama de estados de um AFD com três estados: P (estado inicial, círculo simples), I1 (estado de aceitação, círculo duplo) e I0 (círculo simples). Transições: de P para I1 com 1; de P para I0 com 0; de I1 para P com 1,0; de I0 para P com 1,0',
        caption: 'Autômato finito determinístico (AFD) sobre o alfabeto {0, 1}.',
      },
    ],
    command: 'O autômato representado reconhece a seguinte linguagem regular',
    options: [
      { letter: 'A', text: '$\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é } 4\\}$.' },
      {
        letter: 'B',
        text: '$\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é ímpar e termina com } 1\\}$.',
      },
      {
        letter: 'C',
        text: '$\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é par e termina com } 01\\}$.',
      },
      {
        letter: 'D',
        text: '$\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é ímpar e termina com } 0\\}$.',
      },
      {
        letter: 'E',
        text: '$\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é par e termina com } 11\\}$.',
      },
    ],
    correctOption: 'B',
    explanation: `Vamos analisar a função de transição $\\delta$ do AFD apresentado (onde $P$ é o estado inicial e $I1$ é o único estado de aceitação, identificado pelo círculo duplo):

| Estado atual | Lendo \`0\` | Lendo \`1\` | Significado do estado |
| :---: | :---: | :---: | :--- |
| $\\to P$ | $I0$ | $I1$ | Cadeia lida até o momento tem **comprimento par** ($0, 2, 4, \\ldots$) |
| $*I1$ | $P$ | $P$ | Cadeia lida até o momento tem **comprimento ímpar e último símbolo = 1** |
| $I0$ | $P$ | $P$ | Cadeia lida até o momento tem **comprimento ímpar e último símbolo = 0** |

Observando o padrão de alternância de estados a cada símbolo lido:
1. **Paridade do comprimento $|w|$:**
   - Após $0$ símbolos (cadeia vazia $\\varepsilon$), estamos em $P$ (par).
   - Toda transição saindo de $P$ leva para $\\{I0, I1\\}$ (comprimento **ímpar**).
   - Toda transição saindo de $I0$ ou $I1$ (tanto com \`0\` quanto com \`1\`) retorna imediatamente para $P$ (comprimento **par**).
   - Como o único estado final é $I1$, toda palavra aceita possui necessariamente **comprimento ímpar** ($|w| = 1, 3, 5, \\ldots$).
2. **Último símbolo da cadeia:**
   - A única transição que entra em $I1$ parte de $P$ lendo o símbolo **\`1\`**.
   - Portanto, o último símbolo lido para terminar em $I1$ é obrigatoriamente **\`1\`**.
   - Exemplos aceitos: \`1\`, \`001\`, \`011\`, \`101\`, \`111\`, etc. Expressão regular equivalente: $((0 + 1)(0 + 1))^* 1$.

Logo, a linguagem reconhecida é $\\{w \\in \\{0,1\\}^* \\mid |w| \\text{ é ímpar e termina com } 1\\}$ (**alternativa B**).`,
    optionAnalysis: {
      A: 'Incorreta: cadeias de comprimento 4 (par) sempre terminam no estado P, que não é de aceitação; além disso, a linguagem reconhecida é infinita.',
      B: 'Correta: o autômato alterna estritamente entre P (comprimento par) e {I0, I1} (comprimento ímpar), aceitando apenas em I1, que só é alcançado quando o símbolo final é 1.',
      C: 'Incorreta: toda cadeia de comprimento par (como `01`) retorna ao estado P (rejeição).',
      D: 'Incorreta: cadeias de comprimento ímpar terminadas em `0` chegam ao estado I0, que não é estado de aceitação.',
      E: 'Incorreta: cadeias de comprimento par (como `11`) terminam em P e são rejeitadas.',
    },
    keyConcept:
      'Interpretação de AFDs: identifique invariantes de estado (neste caso, paridade do comprimento e último símbolo lido) e teste palavras curtas (`ε`, `0`, `1`, `01`, `11`, `001`) para eliminar alternativas instantaneamente.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 23.',
  },
  {
    id: 'enade-2019-q24',
    source: 'enade-2019',
    year: 2019,
    number: 24,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Redes de Computadores — Roteamento de Estado de Enlace, Difusão e Árvore Geradora Mínima (MST)',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Protocolos de roteamento de estado de enlace utilizam difusão para propagar informações de estado de enlace que são usadas para calcular rotas individuais. Entretanto, algumas técnicas provocam a transmissão de pacotes redundantes na rede. Idealmente, cada nó deveria receber apenas uma cópia do pacote de difusão.

Uma técnica utilizada para resolver o problema da redundância de pacotes, é a difusão por *spanning tree*. Uma *spanning tree* de um grafo $G = (N, E)$ é um grafo $G' = (N, E')$ tal que $E'$ é um subconjunto de $E$, $G'$ é conexo, não possui ciclos e contém todos os nós originais em $G$. Se cada enlace tiver um custo associado e o custo de uma árvore for a soma dos custos dos enlaces, então uma árvore cujo custo seja o mínimo entre todas as *spanning trees* do grafo é denominada uma *spanning tree* mínima.

*KUROSE, J. F.; ROSS, K. W. Redes de computadores e a Internet: uma abordagem top-down. 6. ed. São Paulo: Pearson Education do Brasil, 2013 (adaptado).*

Considere uma rede composta por 6 roteadores, designados pelas letras A, B, C, D, E e F, conectados conforme a seguinte tabela de custos de seus enlaces:

| **Conexão** | **Custo do enlace** |
| :---: | :---: |
| A - B | 2 |
| A - C | 2 |
| B - C | 2 |
| B - D | 3 |
| C - D | 3 |
| C - E | 1 |
| C - F | 1 |
| D - F | 2 |
| E - F | 1 |`,
    command: 'Neste cenário, o custo da *spanning tree* mínima correspondente é, exatamente:',
    options: [
      { letter: 'A', text: '5.' },
      { letter: 'B', text: '7.' },
      { letter: 'C', text: '8.' },
      { letter: 'D', text: '9.' },
      { letter: 'E', text: '11.' },
    ],
    correctOption: 'C',
    explanation: `Como o grafo possui $|N| = 6$ roteadores ($A, B, C, D, E, F$), qualquer *spanning tree* (árvore geradora) terá exatamente $|N| - 1 = 5$ enlaces sem formar ciclos.

Aplicando o **Algoritmo de Kruskal** (ordenando as arestas em ordem crescente de custo e selecionando sempre a de menor custo que não forme ciclo):

1. **\`C - E\` (custo 1):** selecionada! (Componentes: $\\{C, E\\}, \\{A\\}, \\{B\\}, \\{D\\}, \\{F\\}$) — 1 aresta.
2. **\`C - F\` (custo 1):** selecionada! (Componentes: $\\{C, E, F\\}, \\{A\\}, \\{B\\}, \\{D\\}$) — 2 arestas.
3. **\`E - F\` (custo 1):** **descartada**, pois $E$ e $F$ já estão conectados via $C$ (formaria o ciclo $C - E - F - C$).
4. **\`A - B\` (custo 2):** selecionada! (Componentes: $\\{A, B\\}, \\{C, E, F\\}, \\{D\\}$) — 3 arestas.
5. **\`A - C\` (custo 2):** selecionada! (Componentes: $\\{A, B, C, E, F\\}, \\{D\\}$) — 4 arestas.
6. **\`B - C\` (custo 2):** **descartada**, pois $B$ e $C$ já estão conectados via $A$ (formaria o ciclo $A - B - C - A$).
7. **\`D - F\` (custo 2):** selecionada! (Componente único: $\\{A, B, C, D, E, F\\}$) — **5 arestas — árvore completa!**
8. **\`B - D\` (custo 3)** e **\`C - D\` (custo 3):** desnecessárias (já temos os 6 nós conectados sem ciclos).

Somando os custos dos 5 enlaces escolhidos:
$$\\text{Custo}_{\\text{MST}} = 1\\;(\\text{C-E}) + 1\\;(\\text{C-F}) + 2\\;(\\text{A-B}) + 2\\;(\\text{A-C}) + 2\\;(\\text{D-F}) = 8$$

*(Nota: há outras árvores geradoras mínimas equivalentes trocando \`C-F\` por \`E-F\` ou \`A-C\` por \`B-C\`, mas todas possuem exatamente o mesmo custo mínimo igual a $8$.)*

Portanto, a resposta correta é **8** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: 5 seria o custo apenas se todas as 5 arestas tivessem custo 1, mas há somente três arestas de custo 1 no grafo (que ainda formam um triângulo C-E-F, permitindo usar no máximo 2 delas).',
      B: 'Incorreta: erro comum ao incluir as três arestas de custo 1 (formando o ciclo C-E-F) e somar apenas duas arestas de custo 2, o que não constitui uma árvore válida conectando os 6 nós.',
      C: 'Correta: selecionando 2 arestas de custo 1 (sem fechar o ciclo C-E-F) e 3 arestas de custo 2 (conectando A, B e D sem ciclos), obtém-se custo total 1 + 1 + 2 + 2 + 2 = 8.',
      D: 'Incorreta: ocorre se o candidato escolher uma aresta de custo 3 (como B-D ou C-D) para ligar o nó D em vez da aresta mais barata D-F de custo 2.',
      E: 'Incorreta: custo subótimo resultante da escolha de múltiplas arestas de custo 3 ou inclusão de arestas redundantes.',
    },
    keyConcept:
      'Árvore Geradora Mínima (MST — Kruskal / Prim): para $n$ nós, escolha exatamente $n - 1$ arestas de menor peso acumulado sem jamais formar ciclos.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 24.',
  },
  {
    id: 'enade-2019-q25',
    source: 'enade-2019',
    year: 2019,
    number: 25,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Busca Binária, Recursão em Cauda (Tail Recursion) e Eliminação de Recursão em Python',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `A linguagem Python não permite alguns tipos de otimização como, por exemplo, a recursão em cauda e, devido à sua natureza dinâmica, é impossível realizar esse tipo de otimização em tempo de compilação tal como em linguagens funcionais como Haskell ou ML.

*Disponível em: <http://www.python-history.blogspot.com/2009/04/origins-of-pythons-functional-features.html>. Acesso: em 15 jun. 2019 (adaptado).*

O trecho de código a seguir, escrito em Python, realiza a busca binária de um elemento \`x\` em uma lista \`lst\` e a função \`binary_search\` tem código recursivo em cauda.

\`\`\`python
1  def binary_search(x, lst, low=None, high=None):
2      if low == None : low = 0
3      if high == None : high = len(lst)-1
4      mid = low + (high - low) // 2
5      if low > high :
6          return None
7      elif lst[mid] == x :
8          return mid
9      elif lst[mid] > x :
10         return binary_search(x, lst, low, mid-1)
11     else :
12         return binary_search(x, lst, mid+1, high)
\`\`\`

*Disponível em: <https://www.kylem.net/programming/tailcall.html>. Acesso em: 15 jun. 2019 (adaptado).*`,
    command: `Considerando esse trecho de código, avalie as afirmações a seguir.

I. Substituindo-se o conteúdo da linha 10 por \`high = mid - 1\` e substituindo-se o conteúdo da linha 12 por \`low = mid + 1\`, não se altera o resultado de uma busca.
II. Envolvendo-se o código das linhas 4 a 12 em um laço \`while True\`, substituindo-se o conteúdo da linha 10 por \`high = mid - 1\` e substituindo-se o conteúdo da linha 12 por \`low = mid + 1\` remove-se a recursão de cauda e o resultado da busca não é alterado.
III. Substituindo-se o código da linha 10 por:
\`\`\`python
newhigh = mid-1
return binary_search(x, lst, low, newhigh)
\`\`\`
e substituindo-se o código da linha 12 por:
\`\`\`python
newlow = mid+1
return binary_search(x, lst, newlow, high)
\`\`\`
remove-se a recursão de cauda.
IV. Substituindo-se o conteúdo das linhas 9 a 12 por
\`\`\`python
if lst[mid] > x :
    newlow = low
    newhigh = mid-1
else:
    newlow = mid+1
    newhigh = high
return binary_search(x, lst, newlow, newhigh)
\`\`\`
mantém-se o resultado da busca.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II e III, apenas.' },
      { letter: 'C', text: 'II e IV, apenas.' },
      { letter: 'D', text: 'I, III e IV, apenas.' },
      { letter: 'E', text: 'I, II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Uma função possui **recursão em cauda (*tail recursion*)** quando a chamada recursiva é a **última operação executada** antes do retorno (sem nenhuma operação pendente sobre o resultado retornado). A conversão clássica de recursão em cauda para iteração consiste em envolver o corpo em um laço (\`while True:\`) e substituir as chamadas recursivas por reatribuições dos parâmetros.

Avaliando cada afirmação:

- **Afirmação I — Incorreta:** Se apenas substituirmos as linhas 10 e 12 por \`high = mid - 1\` e \`low = mid + 1\` **sem introduzir um laço de repetição**, a função executará apenas uma única comparação do elemento do meio (\`mid\`), atualizará a variável local e chegará ao final da função retornando implicitamente \`None\`! Qualquer elemento fora da posição central inicial deixará de ser encontrado.
- **Afirmação II — Correta:** Envolver as linhas 4 a 12 em um laço \`while True:\` e atualizar \`high = mid - 1\` (linha 10) ou \`low = mid + 1\` (linha 12) **elimina completamente a recursão** (pois não há mais chamadas a \`binary_search\`) e mantém exatamente a mesma lógica da busca binária: em cada iteração recalcula-se \`mid\`, retorna-se \`None\` quando \`low > high\` e retorna-se \`mid\` quando \`lst[mid] == x\`.
- **Afirmação III — Incorreta:** Armazenar \`mid-1\` em \`newhigh\` ou \`mid+1\` em \`newlow\` antes de executar \`return binary_search(...)\` **não remove a recursão de cauda**! A última instrução de ambos os ramos continua sendo diretamente \`return binary_search(...)\`, ou seja, o código permanece 100% recursivo em cauda.
- **Afirmação IV — Correta:** Como os casos \`low > high\` (linha 5) e \`lst[mid] == x\` (linha 7) terminam com \`return\`, a execução só alcança a linha 9 quando \`low <= high\` e \`lst[mid] != x\`. Nesse ponto, trocar \`elif lst[mid] > x\` / \`else\` por um \`if/else\` que prepara \`(newlow, newhigh)\` e executa uma única chamada \`return binary_search(x, lst, newlow, newhigh)\` ao final é **semanticamente equivalente** ao código original e mantém exatamente o mesmo resultado da busca.

Portanto, estão corretas apenas **II e IV** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: a afirmação I quebra a busca binária porque remove as chamadas recursivas sem adicionar um laço de repetição.',
      B: 'Incorreta: inclui a afirmação III, que é falsa pois o código continua fazendo `return binary_search(...)` em cauda.',
      C: 'Correta: II realiza a transformação padrão de recursão em cauda para laço `while True`, e IV refatora os dois ramos recursivos em uma única chamada equivalente sem alterar o resultado.',
      D: 'Incorreta: inclui as afirmações falsas I e III e exclui a verdadeira II.',
      E: 'Incorreta: inclui as afirmações falsas I e III.',
    },
    keyConcept:
      'Eliminação de recursão em cauda (*tail-call elimination*): toda função recursiva em cauda converte-se mecanicamente em um laço iterativo (`while True`) reatribuindo os parâmetros em vez de realizar a chamada recursiva.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 25.',
  },
  {
    id: 'enade-2019-q26',
    source: 'enade-2019',
    year: 2019,
    number: 26,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Sistemas de Controle — Controlador PID (Proporcional-Integral-Derivativo) Discreto',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `Proporcional-Integral-Derivativo (PID) é o algoritmo de controle que mais tem sido utilizado na indústria e no mundo para sistemas de controle industrial. A popularidade de controladores PID pode ser parcialmente atribuída ao seu desempenho robusto em uma ampla gama de condições de funcionamento e parcialmente à sua simplicidade funcional, que permite aos engenheiros operá-los de forma simples e direta.

*Disponível em: <https://www.ni.com/pt-br/innovations/white-papers/06/pid-theory-explained.html>. Acesso em 20 jun. 2019 (adaptado).*

A figura a seguir apresenta um esquema de controle PID para um processo de temperatura de um forno industrial.

Considere o trecho incompleto do código-fonte a seguir em que \`kp\` é o ganho proporcional (P), \`ki\` o ganho integral (I) e \`kd\` o ganho derivativo (D).

\`\`\`c
1  double ITerm = 0, lastErro = 0;
2  int lastTime = 0;
3  double Compute(int sampleTime, double kp, double ki, double kd, double SP, double PV)
4  {
5      unsigned long now = millis();
6      int timeChange = (now - lastTime);
7      if (timeChange >= sampleTime)
8      {
9          double Erro = SP - PV;
10         ITerm += Erro * sampleTime;
11         double dErro = (Erro - lastErro);
12         double output = _______________
13         lastErro = Erro;
14         lastTime = now;
15     }
16     return output;
17 }
\`\`\``,
    images: [
      {
        src: '/images/enade-2019/q26-fig.png',
        alt: 'Diagrama de blocos de controle PID em malha fechada: SP menos PV produz Erro, que alimenta em paralelo os blocos P, I e D; as três saídas são somadas e enviadas à Função de Transferência do Processo (Temperatura do Forno), realimentada pelo Sensor de Temperatura',
        caption: 'Esquema em blocos do controlador PID em paralelo para um forno industrial.',
      },
    ],
    command:
      'Considerando a necessidade de implementar o esquema de controle PID, assinale a opção que completa corretamente a linha 12 desse código.',
    options: [
      { letter: 'A', text: '`kp * Erro + ki * ITerm;`' },
      { letter: 'B', text: '`ki/kp * ITerm + kd/kp * dErro;`' },
      { letter: 'C', text: '`kp * Erro + kd * dErro * dErro;`' },
      { letter: 'D', text: '`kp * Erro + ki * ITerm + kd * dErro;`' },
      { letter: 'E', text: '`kp * Erro + ki * ITerm + kd * dErro * dErro;`' },
    ],
    correctOption: 'D',
    explanation: `Na forma paralela (ilustrada exatamente no diagrama de blocos da questão: *"Adiciona os 3 termos"*), a lei de controle de um controlador **PID** contínuo é:
$$u(t) = K_p\\,e(t) + K_i \\int_0^t e(\\tau)\\,d\\tau + K_d \\frac{de(t)}{dt}$$

Na implementação discreta com período de amostragem constante $\\Delta t = \\text{sampleTime}$ mostrada no código:
- **Erro atual (linha 9):** \`Erro = SP - PV\` $\\longleftrightarrow e[k]$
- **Parcela integral acumulada (linha 10):** \`ITerm += Erro * sampleTime\` $\\longleftrightarrow \\sum e[j]\\,\\Delta t$
- **Variação do erro / derivada discreta (linha 11):** \`dErro = (Erro - lastErro)\` $\\longleftrightarrow \\Delta e[k]$ (com $1/\\Delta t$ absorvido no ganho discreto \`kd\`).

Portanto, a saída do controlador PID na linha 12 deve ser a **soma linear** dos três termos — Proporcional + Integral + Derivativo:
\`\`\`c
double output = kp * Erro + ki * ITerm + kd * dErro;
\`\`\`

Logo, a alternativa correta é a **letra D**.`,
    optionAnalysis: {
      A: 'Incorreta: implementa apenas um controlador PI (omite o termo derivativo `kd * dErro`).',
      B: 'Incorreta: omite o termo proporcional `kp * Erro` e ainda divide indevidamente os ganhos por `kp`.',
      C: 'Incorreta: omite o termo integral `ki * ITerm` e eleva incorretamente `dErro` ao quadrado (`dErro * dErro`).',
      D: 'Correta: soma exatamente os três componentes do PID — proporcional (`kp * Erro`), integral (`ki * ITerm`) e derivativo (`kd * dErro`).',
      E: 'Incorreta: introduz uma não linearidade indevida multiplicando `dErro * dErro` (elevando a derivada do erro ao quadrado, o que inclusive perde o sinal da taxa de variação!).',
    },
    keyConcept:
      'Controlador PID em paralelo: $u(t) = K_p e(t) + K_i \\int e(t)\\,dt + K_d \\frac{de(t)}{dt}$, discretizado por somatório acumulado (integral) e diferença finita (derivada).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 26.',
  },
  {
    id: 'enade-2019-q27',
    source: 'enade-2019',
    year: 2019,
    number: 27,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Padrões de Projeto Orientados a Objetos (GoF) — Padrão Strategy e Diagramas UML',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Padrões de projeto são soluções gerais para problemas frequentes de projetos de software. O diagrama de classes UML abaixo ilustra a estrutura do padrão *Strategy*:

*GAMMA, E. et al. Padrões de projeto: Soluções reutilizáveis de software orientado a objetos. 2. ed. Porto Alegre: Bookman, 2000 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/q27-fig.png',
        alt: 'Diagrama de classes UML do padrão Strategy: classe Context com método +ContextInterface() agregando (-strategy) a classe abstrata Strategy com método +AlgorithmInterface(), especializada por ConcreteStrategyA, ConcreteStrategyB e ConcreteStrategyC',
        caption: 'Estrutura UML do padrão comportamental Strategy (Gang of Four).',
      },
    ],
    command: `A partir do modelo UML apresentado e acerca dos padrões de projeto, avalie as afirmações a seguir.

I. A Classe *Strategy* pode ser implementada como uma classe abstrata ou uma interface, pois corresponde unicamente a uma abstração dos diversos tipos de estratégias definidas.
II. O padrão *Strategy* pode ser utilizado na implementação de classes para, por exemplo, permitir que métodos de ordenação de coleções possam ser usados com diferentes critérios de comparação.
III. O baixo acoplamento permite que estratégias sejam incluídas ou retiradas da aplicação sem alterar a estrutura das demais classes do sistema.
IV. O uso do padrão *Singleton* para criação das instâncias, permitiria centralizar em um método de criação a lógica de seleção da estratégia a ser utilizada.

É correto apenas o que se afirma em`,
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'III e IV.' },
      { letter: 'D', text: 'I, II e III.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `O padrão comportamental **Strategy** (GoF) define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis em tempo de execução por meio de composição e polimorfismo. Avaliando cada afirmação:

- **Afirmação I — Correta:** No diagrama UML, \`Strategy\` aparece em itálico (classe abstrata) declarando o contrato \`+AlgorithmInterface()\`. Em linguagens orientadas a objetos (Java, C#, C++), ela pode ser implementada tanto como **interface** quanto como **classe abstrata**, servindo como abstração comum para todas as estratégias concretas.
- **Afirmação II — Correta:** Um dos exemplos mais famosos do padrão *Strategy* na biblioteca padrão de linguagens (como \`Comparator<T>\` em Java ou funções de comparação em \`std::sort\` / Python) é justamente injetar diferentes estratégias/critérios de comparação em algoritmos de ordenação de coleções.
- **Afirmação III — Correta:** Como \`Context\` depende apenas da abstração \`Strategy\` (baixo acoplamento e aderência ao Princípio Aberto-Fechado — OCP), novas classes \`ConcreteStrategyD\` podem ser adicionadas ou antigas removidas sem modificar \`Context\` nem as demais estratégias.
- **Afirmação IV — Incorreta:** A função de **centralizar a lógica de criação e seleção** de qual classe concreta instanciar pertence a padrões criacionais de fábrica — como **Factory Method**, **Simple Factory** ou **Abstract Factory** —, e **NÃO** ao padrão **Singleton**! O propósito exclusivo do *Singleton* é garantir que uma classe tenha **apenas uma única instância** e fornecer um ponto global de acesso a ela.

Logo, estão corretas apenas **I, II e III** (**alternativa D**).`,
    optionAnalysis: {
      A: 'Incorreta: omite a afirmação III, que descreve corretamente o benefício do baixo acoplamento no padrão Strategy.',
      B: 'Incorreta: inclui a afirmação IV (falsa, pois confunde Singleton com Factory) e omite II e III.',
      C: 'Incorreta: inclui a afirmação IV (falsa) e omite I e II.',
      D: 'Correta: I, II e III caracterizam precisamente o padrão Strategy, enquanto IV confunde os papéis de Singleton e Factory.',
      E: 'Incorreta: inclui a afirmação IV (erro clássico de confundir Singleton com padrões de fábrica).',
    },
    keyConcept:
      'Padrão Strategy (comportamental — encapsula algoritmos intercambiáveis via composição/interface) vs. Factory (centraliza lógica de instanciação/seleção) vs. Singleton (garante instância única global).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 27.',
  },
  {
    id: 'enade-2019-q28',
    source: 'enade-2019',
    year: 2019,
    number: 28,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Álgebra Booleana — Simplificação de Circuitos Combinacionais e Atraso de Propagação',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Um sistema de tempo real satisfaz explicitamente restrições de tempo de resposta, podendo ter consequências como riscos ou falhas caso não cumpra essas restrições. O circuito lógico a seguir faz parte de um sistema de tempo real que realiza o acionamento de um alarme.

Nesse circuito existem vários atrasos de propagação do sinal, que por sua vez geram atrasos no acionamento do alarme. Na forma como a lógica está implementada, o circuito não atende o requisito de tempo real especificado pelo sistema. Para cada porta lógica utilizada, os atrasos típicos, em unidades de tempo (u.t.), são:

| **Porta** | **Atraso (u.t.)** |
| :---: | :---: |
| AND | 3 |
| OR | 4 |
| NOT | 1 |`,
    images: [
      {
        src: '/images/enade-2019/q28-fig.png',
        alt: 'Circuito lógico combinacional com entradas A, B entrando em uma porta AND superior (saída X = AB) e C, D entrando em uma porta AND inferior (saída W = CD). Na camada intermediária, uma porta OR superior recebe X e W; uma porta NOT inverte W e alimenta uma porta OR inferior junto com X. Por fim, uma porta AND final combina as saídas das duas portas OR gerando a saída Y',
        caption: 'Circuito lógico combinacional original de acionamento do alarme.',
      },
    ],
    command: 'Após a simplificação do circuito, o menor tempo possível para o acionamento do alarme é de',
    options: [
      { letter: 'A', text: '9 u.t.' },
      { letter: 'B', text: '10 u.t.' },
      { letter: 'C', text: '3 u.t.' },
      { letter: 'D', text: '4 u.t.' },
      { letter: 'E', text: '6 u.t.' },
    ],
    correctOption: 'C',
    explanation: `Primeiro, extraímos a expressão booleana exata da saída $Y$ diretamente do diagrama lógico, definindo as saídas das duas portas AND de entrada como $X = A \\cdot B$ e $W = C \\cdot D$:

1. **Saída da porta OR superior:** $X + W = (A\\cdot B) + (C\\cdot D)$
2. **Saída do inversor (NOT):** $\\overline{W} = \\overline{C\\cdot D}$
3. **Saída da porta OR inferior:** $X + \\overline{W} = (A\\cdot B) + \\overline{C\\cdot D}$
4. **Saída da porta AND final ($Y$):**
$$Y = (X + W) \\cdot (X + \\overline{W})$$

### Simplificação por Álgebra Booleana
Aplicando a **propriedade distributiva** da Álgebra Booleana $(P + Q)(P + R) = P + Q\\cdot R$ (ou expandindo termo a termo):
$$Y = (X + W)(X + \\overline{W}) = X + (W \\cdot \\overline{W})$$

Como o complemento multiplicado por si mesmo é sempre zero ($W \\cdot \\overline{W} = 0$):
$$Y = X + 0 = X = A \\cdot B$$

*(Verificação expandida: $X\\cdot X + X\\overline{W} + XW + W\\overline{W} = X + X(\\overline{W} + W) + 0 = X + X(1) = X = A \\cdot B$! As entradas $C$ e $D$ são completamente redundantes e cancelam-se na expressão final!)*

### Cálculo do atraso mínimo de propagação
Todo o circuito original de 6 portas (cujo caminho crítico tinha atraso $\\text{AND}(3) + \\text{NOT}(1) + \\text{OR}(4) + \\text{AND}(3) = 11\\text{ u.t.}$) reduz-se a **uma única porta lógica AND** de duas entradas ($Y = A \\cdot B$)!

Consultando a tabela de atrasos:
$$\\text{Atraso}_{\\min} = \\text{Atraso}(\\text{AND}) = 3\\text{ u.t.}$$

Portanto, a resposta correta é **3 u.t.** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: corresponde a uma simplificação incompleta (ou soma arbitrária de 3 portas AND).',
      B: 'Incorreta: 10 u.t. seria o caminho superior do circuito original (AND 3 + OR 4 + AND 3 = 10 u.t.), sem realizar simplificação algébrica.',
      C: 'Correta: a expressão Y = (AB + CD)(AB + (CD)̄) simplifica-se exatamente para Y = AB, exigindo apenas uma única porta AND cujo atraso é 3 u.t.',
      D: 'Incorreta: 4 u.t. é o atraso de uma porta OR, mas a função simplificada Y = A · B requer uma porta AND (3 u.t.).',
      E: 'Incorreta: 6 u.t. corresponderia a duas portas AND em cascata, mas Y = A · B utiliza apenas uma porta AND de 2 entradas.',
    },
    keyConcept:
      'Propriedade distributiva booleana $(X + W)(X + \\overline{W}) = X + W\\overline{W} = X$: sempre nomeie subexpressões intermediárias ($X = AB$, $W = CD$) para enxergar cancelamentos instantâneos.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 28.',
  },
  {
    id: 'enade-2019-q29',
    source: 'enade-2019',
    year: 2019,
    number: 29,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Internet das Coisas (IoT) — Sistemas Distribuídos, Concorrência e Heterogeneidade',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `A Internet das Coisas (*Internet of Things* (IoT)) pode ser definida como um ambiente de objetos físicos interconectados com a internet por meio de sensores/atuadores embutidos, criando um ecossistema de computação onipresente (ubíqua) e introduzindo soluções funcionais nos processos do dia-a-dia, sejam domésticos ou profissionais. É um conjunto de tecnologias e protocolos associados que permitem que objetos se conectem a uma rede de comunicações e sejam identificados e controlados por essa conexão. A IoT usa conceitos, tecnologias e soluções que envolvem sistemas distribuídos e redes de comunicação.

*MAGRANI, E. A internet das coisas. Rio de Janeiro: FGV Editora, 2018 (adaptado).*`,
    command: `Nesse contexto, avalie as asserções a seguir e a relação proposta entre elas.

I. Em soluções e aplicações para IoT, é preciso garantir que essas funcionarão de forma consistente em um ambiente concorrente, onde ocorrem várias requisições ao mesmo recurso compartilhado.

**PORQUE**

II. Em soluções atuais de IoT existe heterogeneidade, ou seja, dentro do mesmo ecossistema, uma variedade de sistemas operacionais, *hardware*, linguagens de programação e padrões de redes de comunicação são utilizados.

A respeito dessas asserções, assinale a alternativa correta.`,
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta de I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta de I.',
      },
      {
        letter: 'C',
        text: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.',
      },
      {
        letter: 'D',
        text: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.',
      },
      {
        letter: 'E',
        text: 'As asserções I e II são proposições falsas.',
      },
    ],
    correctOption: 'A',
    explanation: `Analisando as duas proposições sob a ótica de **Sistemas Distribuídos e IoT** (referência clássica de Coulouris et al., *Sistemas Distribuídos*, onde **concorrência** e **heterogeneidade** figuram entre os desafios fundamentais):

- **Asserção I — Verdadeira:** Como uma solução de IoT conecta dezenas, milhares ou milhões de sensores, atuadores, *gateways* e serviços em nuvem operando de maneira assíncrona sobre recursos compartilhados (bancos de dados, *brokers* MQTT, atuadores físicos, APIs), é indispensável assegurar **consistência e controle de concorrência** perante múltiplas requisições simultâneas.
- **Asserção II — Verdadeira:** O ecossistema de IoT é marcadamente **heterogêneo**: microcontroladores de 8/32 bits, Linux embarcado, RTOS (FreeRTOS, Zephyr), diferentes arquiteturas de *hardware*, linguagens (C/C++, Python, JavaScript) e múltiplas pilhas de comunicação (Wi-Fi, BLE, ZigBee, LoRaWAN, NB-IoT, MQTT, CoAP) coexistem na mesma arquitetura.
- **Relação proposta ("PORQUE") — Aceita como verdadeira pelo gabarito definitivo do INEP (alternativa A):** Na concepção da banca, a existência de um ecossistema amplamente heterogêneo e descentralizado de dispositivos, protocolos e plataformas (II) exige mecanismos robustos de coordenação, interoperabilidade e controle de concorrência para garantir que as múltiplas requisições originadas desses diferentes componentes acessem os recursos compartilhados de maneira consistente (I).

*(Nota pedagógica: embora na teoria estrita de sistemas distribuídos concorrência e heterogeneidade sejam desafios ortogonais — isto é, mesmo sistemas homogêneos têm concorrência —, o gabarito definitivo oficial do INEP fixou a **alternativa A** ao vincular a complexidade do acesso concorrente consistente à natureza heterogênea dos múltiplos agentes conectados em IoT.)*`,
    optionAnalysis: {
      A: 'Correta (gabarito definitivo INEP): ambas as asserções descrevem desafios reais de sistemas distribuídos/IoT (consistência em ambiente concorrente e heterogeneidade tecnológica), e a banca considerou II como justificativa contextual de I.',
      B: 'Incorreta segundo o gabarito oficial do INEP: embora ambas sejam verdadeiras e concorrência também exista em ambientes homogêneos, o INEP validou a relação de justificativa (letra A).',
      C: 'Incorreta: a asserção II é claramente verdadeira, pois a heterogeneidade de hardware, SOs e redes é uma marca central da IoT.',
      D: 'Incorreta: a asserção I é verdadeira, visto que aplicações IoT lidam continuamente com acessos concorrentes a recursos compartilhados.',
      E: 'Incorreta: ambas as asserções são proposições verdadeiras.',
    },
    keyConcept:
      'Desafios de IoT e Sistemas Distribuídos: concorrência (acesso consistente a recursos compartilhados por múltiplos dispositivos) e heterogeneidade (convivência de múltiplos hardwares, SOs, linguagens e protocolos de rede).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 29.',
  },
  {
    id: 'enade-2019-q30',
    source: 'enade-2019',
    year: 2019,
    number: 30,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Concorrência, Threads, Condição de Corrida e Exclusão Mútua (Java Servlets)',
    questionStyle: 'afirmativas',
    difficulty: 'dificil',
    context: `É comum a expressão "servidor web" ser utilizada para denominar processos cuja finalidade é disponibilizar recursos estáticos, que são os que se encontram completos antes de uma requisição ser realizada, e recursos dinâmicos, que são produzidos no momento em que um cliente o requisita e seu conteúdo é definido em tempo de requisição. Um *Container* de *Servlets* é um servidor web capaz de gerenciar diferentes aplicações que disponibilizam conteúdo dinâmico, e um *Servlet* é uma classe Java capaz de gerar conteúdo desse tipo, mediante a requisição de um cliente. Cada requisição atendida por um *Servlet* pode ser executada por uma *thread* e múltiplas requisições podem estar em execução simultaneamente.

Considere o *Servlet* a seguir que mantém uma variável cuja finalidade é controlar quantas requisições são atendidas ao longo do tempo.

\`\`\`java
1 @WebServlet ("/")
2 public class ContaRequisicoes extends HttpServlet {
3     private int contador;
4     protected void doGet (HttpServletRequest req, HttpServletResponse resp) throws Exception {
5         contador = contador + 1;
6     }
7 }
\`\`\`

*Disponível em: <https://www.javaee.github.io/servlet-spec/downloads/servlet-4.0/servlet-4_0_FINAL.pdf>. Acesso em: 24 jun. 2019 (adaptado).*`,
    command: `A respeito do *Servlet* apresentado, avalie as afirmações a seguir.

I. O código apresenta uma condição de corrida.
II. Substituir a linha 5 pela construção \`synchronized (this) {contador = contador + 1;}\` garante o correto funcionamento do método.
III. Obter a trava do objeto referenciado por \`request\` antes de executar o incremento e liberá-la logo a seguir, garante o correto funcionamento do método.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'D',
    explanation: `**Gabarito definitivo oficial do INEP: alternativa D (\`II e III, apenas.\`).**

> **⚠️ Nota Técnica Crítica (Divergência Histórica de Gabarito — ENADE 2019):**
> Esta é uma das questões mais debatidas da prova do ENADE 2019 de Engenharia de Computação. Para que você **não aprenda conceitos errados de Concorrência e Java**, apresentamos abaixo a análise técnica rigorosa segundo a especificação oficial *Java Servlet 4.0* e, em seguida, o motivo pelo qual o gabarito definitivo do INEP ficou na letra **D**:

### Análise Técnica Rigorosa (Sistemas Operacionais / Java Servlet 4.0)
1. **Afirmativa I — Tecnicamente VERDADEIRA:**
   Em um *Container* de *Servlets* padrão, cria-se **uma única instância** da classe \`ContaRequisicoes\` compartilhada por múltiplas *threads* concorrentes (uma por requisição). O atributo de instância \`private int contador\` é, portanto, **estado mutável compartilhado**, e a operação \`contador = contador + 1\` não é atômica (envolve três etapas: leitura da memória, soma na ALU e escrita de volta). Duas *threads* podem ler o mesmo valor $k$ simultaneamente e ambas escreverem $k + 1$, perdendo um incremento — definição clássica de **condição de corrida (*race condition*)**!
2. **Afirmativa II — VERDADEIRA:**
   Como todas as *threads* executam sobre a mesma instância do *Servlet* (\`this\`), envolver a seção crítica em \`synchronized (this) { contador = contador + 1; }\` adquire o monitor (*lock* intrínseco) do próprio objeto *Servlet*, assegurando **exclusão mútua** e visibilidade de memória (*happens-before*) no incremento de \`contador\`. *(Na prática moderna, também se utiliza \`AtomicInteger\`.)*
3. **Afirmativa III — Tecnicamente FALSA:**
   Cada requisição HTTP recebida pelo container instancia um **objeto \`HttpServletRequest\` (\`req\`) diferente e exclusivo** para aquela requisição! Logo, duas *threads* simultâneas obtêm travas em **objetos distintos** (\`req1 != req2\`), não havendo qualquer exclusão mútua entre elas e mantendo a condição de corrida intacta!

### Por que o gabarito definitivo oficial do INEP foi a letra D?
Observe que **a combinação tecnicamente correta (\`I e II, apenas.\`) sequer foi incluída entre as cinco opções A–E** pela banca elaboradora (provavelmente por erro de diagramação/digitação ao trocar \`I e II\` por \`II e III\` na alternativa D), e a questão acabou não sendo anulada pelo INEP no gabarito definitivo, permanecendo oficialmente como **D**.`,
    optionAnalysis: {
      A: 'Incorreta: afirma apenas I, ignorando que II (`synchronized(this)`) corrige efetivamente a exclusão mútua na instância compartilhada do Servlet.',
      B: 'Incorreta: embora II seja verdadeira, não corresponde ao gabarito definitivo divulgado pelo INEP (D) e omite I.',
      C: 'Incorreta: inclui III (que trava objetos `req` distintos por requisição) e omite II.',
      D: 'Gabarito oficial definitivo do INEP (`II e III, apenas`). Atenção crítica: tecnicamente em Java/SO, as afirmativas corretas seriam I e II (ausente nas opções), pois há condição de corrida em `contador = contador + 1` (I) e travar o objeto `req` individual de cada requisição (III) NÃO promove exclusão mútua entre threads.',
      E: 'Incorreta: inclui III, que é tecnicamente falsa porque cada requisição possui sua própria instância de `HttpServletRequest`.',
    },
    keyConcept:
      'Condição de corrida em seções críticas: incrementos (`x = x + 1`) não são atômicos; a exclusão mútua (`synchronized`) só funciona quando todas as threads disputam a trava de um **mesmo** objeto compartilhado (`this`), nunca de objetos locais distintos por requisição (`req`).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 30.',
  },
  {
    id: 'enade-2019-q31',
    source: 'enade-2019',
    year: 2019,
    number: 31,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Gerência de Processos — Ciclo de Vida, Estados (Execução, Pronto, Espera) e Sistemas Multitarefa',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Em um sistema computacional, os processos submetidos à execução podem estar em um dos estágios do seu ciclo de vida que são classificados como em execução, em espera ou pronto. Quando o processo tem a posse do processador, está em execução. Se o processo não puder ser executado, por estar aguardando algum dado por exemplo, é considerado um processo em espera. Se não houver impedimentos para sua execução, o processo deve aguardar sua vez para ser executado na fila dos processos prontos. O diagrama a seguir representa os estados dos processos de alguns tipos de sistemas operacionais.`,
    images: [
      {
        src: '/images/enade-2019/q31-fig.png',
        alt: 'Diagrama de três estados de processos: Execução no topo, Espera à esquerda e Pronto à direita. Transições: A de Pronto para Execução; B de Execução para Pronto; C de Execução para Espera; D de Espera para Pronto',
        caption: 'Diagrama de transição de estados de processos (Execução, Espera e Pronto).',
      },
    ],
    command: `Com base no texto e no diagrama de estados, avalie as afirmações a seguir.

I. Um novo processo criado é inicializado no estado "espera".
II. Pode haver mais de um processo em estado "pronto".
III. A transição B indica que o diagrama refere-se a um sistema operacional multitarefa.
IV. O diagrama é inadequado para representar um sistema monotarefa.

É correto apenas o que se afirma em`,
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e III.' },
      { letter: 'C', text: 'III e IV.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'E',
    explanation: `Identificando primeiro cada transição do diagrama clássico de 3 estados (Tanenbaum / Silberschatz):
- **A (\`Pronto → Execução\`):** escalonamento (*dispatch*) — o escalonador seleciona um processo da fila de prontos para ocupar a CPU.
- **B (\`Execução → Pronto\`):** **preempção** (ex.: esgotamento do *quantum* de tempo ou chegada de processo mais prioritário).
- **C (\`Execução → Espera\`):** bloqueio voluntário/por evento (ex.: operação de E/S ou espera por semáforo/dado).
- **D (\`Espera → Pronto\`):** conclusão do evento/E/S aguardado — o processo torna-se novamente apto a competir pela CPU.

Avaliando as quatro afirmações:
- **Afirmação I — Incorreta:** Quando um novo processo é criado e admitido na memória, ele ainda não aguarda nenhuma operação de E/S; estando apto a executar, ele ingressa na fila do estado **"pronto"** (e não em "espera"/bloqueado!).
- **Afirmação II — Correta:** Em sistemas multiprogramados/multitarefa, há uma **fila de processos prontos** contendo potencialmente vários processos simultaneamente aptos a receber a CPU.
- **Afirmação III — Correta:** A transição **B** (\`Execução → Pronto\`) existe especificamente para interromper temporariamente um processo e ceder o processador a outro processo pronto — característica definidora de um **sistema operacional multitarefa** (preemptivo / tempo compartilhado).
- **Afirmação IV — Correta:** Em um sistema **monotarefa** (monoprogramável), executa-se apenas um único programa de usuário por vez do início ao fim; não existe compartilhamento de CPU entre múltiplos processos, nem fila de prontos, nem transição de preempção B. Logo, esse diagrama é inadequado para sistemas monotarefa.

Portanto, estão corretas apenas **II, III e IV** (**alternativa E**).`,
    optionAnalysis: {
      A: 'Incorreta: inclui a afirmação I (falsa — processo novo vai para "pronto", não "espera") e omite III e IV.',
      B: 'Incorreta: inclui I (falsa) e omite II e IV.',
      C: 'Incorreta: omite a afirmação II, que é verdadeira (o próprio texto fala em "fila dos processos prontos").',
      D: 'Incorreta: inclui I (falsa) e omite III (verdadeira).',
      E: 'Correta: II (múltiplos processos na fila de prontos), III (transição B de preempção caracteriza SO multitarefa) e IV (inadequado para SO monotarefa) são verdadeiras, enquanto I é falsa.',
    },
    keyConcept:
      'Modelo de 3 estados de processos: novo processo entra em **Pronto**; a transição **Execução → Pronto** representa **preempção**, exclusiva de sistemas multitarefa preemptivos.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 31.',
  },
  {
    id: 'enade-2019-q32',
    source: 'enade-2019',
    year: 2019,
    number: 32,
    component: 'CE',
    discipline: 'probabilidade-estatistica',
    subtopic: 'Estatística Descritiva — Desvio Padrão Populacional vs. Amostral e Análise de Algoritmos',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Uma estação de monitoramento de temperatura utiliza um termógrafo para registrar continuamente em um gráfico os valores detectados por seus sensores. Um determinado ambiente foi monitorado ao longo de três períodos distintos de um dia. O ambiente é considerado apropriado para um experimento científico se, para qualquer período $P_i$ de monitoramento $\\sigma(P_i) \\le 2$, em que $\\sigma(P_i)$ denota o desvio padrão populacional do período $P_i$ em que o ambiente foi monitorado.

As medidas de temperatura em $^\\circ\\text{C}$, obtidas após um processo de quantização do sinal, são apresentadas na tabela a seguir.

| **Período ($P_i$)** | **Medida 1** | **Medida 2** | **Medida 3** | **Medida 4** |
| :---: | :---: | :---: | :---: | :---: |
| $P_1$ | 33,5 | 33,5 | 33,0 | 33,5 |
| $P_2$ | 27,5 | 27 | 27,5 | 27,5 |
| $P_3$ | 2,0 | 2,5 | 2,0 | 2,0 |

A fim de automatizar o processamento dos sinais, o algoritmo a seguir foi desenvolvido, tendo como entrada um período e como resultado um valor booleano que indica se o período é apropriado ou não.

\`\`\`text
Algoritmo: viavel(P)
entrada: P: um período
saída  : um valor booleano que indica se P é apropriado para o experimento
total <- 0
para p ∈ P faça
    total <- total + (p - AVG(P)) × (p - AVG(P))  // AVG denota a média de P
fim
retorna sqrt(total / |P|) <= 2
\`\`\``,
    command: `Com base no caso apresentado, avalie as afirmações a seguir.

I. Conforme o funcionamento do algoritmo, os períodos $P_1$, $P_2$ e $P_3$ são apropriados.
II. O algoritmo calcula o desvio padrão amostral e, portanto, não é adequado para o estudo.
III. Caso executado sobre o período $P = \\{P_1, P_2 \\text{ e } P_3\\}$, o algoritmo indica que ele é inapropriado para o experimento.

É correto apenas o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'D',
    explanation: `**Gabarito definitivo oficial do INEP: alternativa D (\`II e III, apenas.\`).**

> **⚠️ Nota Matemática Crítica (Divergência de Gabarito Oficial — ENADE 2019):**
> Assim como ocorreu na Questão 30, a Questão 32 teve ampla repercussão por uma divergência entre a definição matemática padrão de desvio padrão populacional/amostral e o gabarito definitivo mantido pelo INEP (**D**). Confira abaixo as contas exatas para dominar o conteúdo sem nenhum equívoco:

### 1. Cálculos exatos do algoritmo \`viavel(P)\`
O algoritmo retorna a condição booleana:
$$\\sqrt{\\frac{\\sum_{p \\in P} (p - \\bar{p})^2}{|P|}} \\le 2$$

- **Para $P_1 = \\{33{,}5;\\; 33{,}5;\\; 33{,}0;\\; 33{,}5\\}$ ($|P_1| = 4$):**
  - Média: $\\bar{p}_1 = \\dfrac{33{,}5 + 33{,}5 + 33{,}0 + 33{,}5}{4} = \\dfrac{133{,}5}{4} = 33{,}375$.
  - Soma dos desvios quadráticos:
    $$\\text{total} = 3 \\cdot (33{,}5 - 33{,}375)^2 + (33{,}0 - 33{,}375)^2 = 3 \\cdot (0{,}125)^2 + (-0{,}375)^2 = 0{,}046875 + 0{,}140625 = 0{,}1875$$
  - Resultado da raiz:
    $$\\sigma(P_1) = \\sqrt{\\frac{0{,}1875}{4}} = \\sqrt{0{,}046875} \\approx 0{,}2165 \\le 2 \\implies \\text{\`verdadeiro\` (apropriado!)}$$

- **Para $P_2 = \\{27{,}5;\\; 27{,}0;\\; 27{,}5;\\; 27{,}5\\}$ e $P_3 = \\{2{,}0;\\; 2{,}5;\\; 2{,}0;\\; 2{,}0\\}$:**
  Por simetria da dispersão (três valores iguais e um valor defasado de $0{,}5$), ambos têm exatamente o mesmo desvio padrão:
  $$\\sigma(P_2) = \\sigma(P_3) = \\sqrt{\\frac{0{,}1875}{4}} \\approx 0{,}2165 \\le 2 \\implies \\text{\`verdadeiro\` (apropriados!)}$$

- **Para o período combinado $P = P_1 \\cup P_2 \\cup P_3$ ($|P| = 12$ medidas):**
  - Média global: $\\bar{p} = \\dfrac{133{,}5 + 109{,}5 + 8{,}5}{12} = \\dfrac{251{,}5}{12} \\approx 20{,}96\\,^\\circ\\text{C}$.
  - Como os valores de $P_1$ ($\\approx 33{,}4$) e $P_3$ ($\\approx 2{,}1$) distanciam-se mais de $12\\,^\\circ\\text{C}$ e $18\\,^\\circ\\text{C}$ da média, obtemos $\\sigma(P) \\approx 13{,}6\\,^\\circ\\text{C} > 2 \\implies$ \`falso\` (**inapropriado!**).

### 2. Análise das afirmações vs. Gabarito Oficial
- **Fórmula populacional vs. amostral:** Em Estatística, dividir por $|P| = N$ corresponde ao **desvio padrão populacional** $\\sigma = \\sqrt{\\frac{1}{N}\\sum(x_i - \\mu)^2}$ (exatamente o solicitado no enunciado!), enquanto o **desvio padrão amostral** divide por $|P| - 1 = N - 1$ ($s = \\sqrt{\\frac{1}{N-1}\\sum(x_i - \\bar{x})^2}$).
- **Conclusão estritamente matemática:** **I é verdadeira** ($0{,}2165 \\le 2$ para os três períodos), **II é falsa** (o algoritmo calcula o desvio populacional, e não o amostral), e **III é verdadeira** ($13{,}6 > 2$), o que apontaria para a **alternativa C (\`I e III, apenas\`)**.
- **Posição do gabarito definitivo do INEP (alternativa D — \`II e III, apenas\`):** A banca interpretou que, por se tratar de apenas 4 leituras quantizadas de um termógrafo contínuo, o algoritmo estaria aplicando a fórmula sobre uma *amostra* sem usar o denominador adequado — e, sob essa interpretação da banca, manteve **D** no gabarito definitivo.`,
    optionAnalysis: {
      A: 'Incorreta: omite a afirmação III, que é claramente verdadeira (o desvio padrão do conjunto unido é ≈ 13,6 > 2).',
      B: 'Incorreta: omite a afirmação III.',
      C: 'Matematicamente seria a combinação mais rigorosa (`I e III, apenas`), pois o algoritmo divide por |P| (fórmula populacional) e retorna verdadeiro (~0,2165 ≤ 2) para P1, P2 e P3 e falso (~13,6 > 2) para a união; contudo, NÃO foi o gabarito mantido pelo INEP.',
      D: 'Gabarito oficial definitivo do INEP (`II e III, apenas`). Tenha sempre em mente para outras provas: na Estatística formal, denominador N calcula desvio padrão populacional (σ) e denominador N - 1 calcula desvio padrão amostral (s).',
      E: 'Incorreta: I e II seriam mutuamente incompatíveis sob a lógica da banca, e II é matematicamente falsa quanto à fórmula de σ vs. s.',
    },
    keyConcept:
      'Desvio padrão populacional $\\sigma = \\sqrt{\\frac{1}{N}\\sum (x_i - \\mu)^2}$ vs. desvio padrão amostral $s = \\sqrt{\\frac{1}{N-1}\\sum (x_i - \\bar{x})^2}$ (correção de Bessel).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 32.',
  },
  {
    id: 'enade-2019-q33',
    source: 'enade-2019',
    year: 2019,
    number: 33,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Integridade de Sinais em PCBs — Linhas de Transmissão (Stripline) e Comprimento Crítico',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Uma trilha de um PCB (*printed circuit board*) é uma conexão entre dois pontos com impedância controlada, que depende de alguns parâmetros, tais como: frequência de operação, comprimento da trilha, tipo de dielétrico e tipo de sinal. Considerando que ela está sendo projetada com o tipo chamado *stripline*, o plano de referência é o GND (*ground*) e o dielétrico é o material FR4, cuja constante dielétrica $k$ é aproximadamente igual a $4$, o que implica na velocidade de propagação $V_p$ de um sinal elétrico em uma *stripline* ser a metade da velocidade no ar, portanto, aproximadamente $15\\text{ cm}$ por nanosegundo.

Em uma linha de transmissão utilizada para sinais digitais, deve-se considerar o tempo entre uma subida e uma descida $t_h$ do sinal, que é a metade do período $T$ da frequência máxima do sinal. O comprimento crítico $L_c$ de uma trilha é o limite máximo para o qual a trilha ainda pode ser entendida como uma simples conexão entre 2 pontos, sem necessidade de controlar sua impedância, e é dado por $L_c = V_p \\dfrac{t_h}{2}$.

Para uma trilha operar como uma conexão simples entre 2 pontos, seu comprimento $L$ deve ser, no máximo, igual a $\\dfrac{L_c}{1{,}5}$.`,
    command:
      'No caso da interface *PCI Express*, cuja frequência máxima de operação especificada é de $1{,}25\\text{ GHz}$, o comprimento $L$ máximo da trilha para que a mesma se comporte como uma simples conexão entre 2 pontos é de',
    options: [
      { letter: 'A', text: '2 cm.' },
      { letter: 'B', text: '3 cm.' },
      { letter: 'C', text: '4 cm.' },
      { letter: 'D', text: '6 cm.' },
      { letter: 'E', text: '8 cm.' },
    ],
    correctOption: 'A',
    explanation: `Organizamos os dados fornecidos no enunciado e aplicamos passo a passo cada relação mantendo total consistência de unidades (cm e nanosegundos):

### Dados
- Velocidade de propagação na *stripline* em FR4 ($k \\approx 4$):
  $$V_p = \\frac{c}{\\sqrt{k}} = \\frac{30\\text{ cm/ns}}{\\sqrt{4}} = 15\\text{ cm/ns}$$
- Frequência máxima de operação da interface PCI Express:
  $$f_{\\max} = 1{,}25\\text{ GHz} = 1{,}25 \\times 10^9\\text{ Hz}$$

### Passo 1 — Período $T$ do sinal
$$T = \\frac{1}{f_{\\max}} = \\frac{1}{1{,}25 \\times 10^9\\text{ Hz}} = 0{,}8 \\times 10^{-9}\\text{ s} = 0{,}8\\text{ ns}$$

### Passo 2 — Tempo entre uma subida e uma descida ($t_h$)
Conforme o enunciado, $t_h$ é a metade do período $T$:
$$t_h = \\frac{T}{2} = \\frac{0{,}8\\text{ ns}}{2} = 0{,}4\\text{ ns}$$

### Passo 3 — Comprimento crítico $L_c$
$$L_c = V_p \\cdot \\frac{t_h}{2} = 15\\text{ cm/ns} \\cdot \\frac{0{,}4\\text{ ns}}{2} = 15 \\cdot 0{,}2 = 3\\text{ cm}$$

### Passo 4 — Comprimento máximo $L$ da trilha como conexão simples
$$L_{\\max} = \\frac{L_c}{1{,}5} = \\frac{3\\text{ cm}}{1{,}5} = 2\\text{ cm}$$

Portanto, o comprimento máximo da trilha é **$2\\text{ cm}$** (**alternativa A**).`,
    optionAnalysis: {
      A: 'Correta: T = 1/(1,25 GHz) = 0,8 ns → t_h = 0,4 ns → L_c = 15 × (0,4/2) = 3 cm → L = 3 / 1,5 = 2 cm.',
      B: 'Incorreta: 3 cm é o comprimento crítico L_c, esquecendo a etapa final de dividir por 1,5 para obter o limite L.',
      C: 'Incorreta: 4 cm ocorre se o candidato usar t_h = T = 0,8 ns (esquecendo de dividir T por 2) antes de dividir por 1,5: (15 × 0,4) / 1,5 = 4 cm.',
      D: 'Incorreta: 6 cm ocorre ao esquecer tanto a divisão de T por 2 quanto a divisão final por 1,5 (15 × 0,4 = 6 cm).',
      E: 'Incorreta: 8 cm decorre de erro no fator 1/2 da fórmula de L_c aliado ao uso de T inteiro (15 × 0,8 / 1,5 = 8 cm).',
    },
    keyConcept:
      'Linhas de transmissão em PCBs de alta frequência: $T = 1/f$, $V_p = c/\\sqrt{\\varepsilon_r}$ ($\\approx 15\\text{ cm/ns}$ em FR4) e conversão direta $\\text{GHz} \\leftrightarrow \\text{ns}$ ($1\\text{ GHz} = 1\\text{ ciclo/ns}$).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 33.',
  },
  {
    id: 'enade-2019-q34',
    source: 'enade-2019',
    year: 2019,
    number: 34,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Escalonamento de Processos — Algoritmo Round Robin, Quantum e Sobrecarga de Troca de Contexto',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um dos algoritmos de escalonamento mais clássicos é o de alternância circular (*Round Robin*) que atribui um intervalo de tempo para cada processo (*quantum*), dentro do qual ele pode ser executado. Ao final desse intervalo, o processo sofre uma preempção, caso não termine de executar, e outro processo não finalizado entra para ser executado. Essa ação de alternância de um processo para outro, também conhecida como troca de contexto, requer uma certa quantidade de tempo.

*TANENBAUM, A. S. Sistemas operacionais modernos. 4. ed. São Paulo: Pearson Education do Brasil, 2015 (adaptado).*`,
    command:
      'Um sistema operacional que utiliza o algoritmo *Round Robin* precisa executar dois processos, ambos com tempos de tarefa de $20\\text{ ms}$. Objetivando-se minimizar o tempo de resposta do sistema, o *Quantum* e o tempo de troca de contexto, respectivamente, devem ser',
    options: [
      { letter: 'A', text: '5 ms e 1 ms.' },
      { letter: 'B', text: '4 ms e 2 ms.' },
      { letter: 'C', text: '5 ms e 3 ms.' },
      { letter: 'D', text: '2 ms e 1 ms.' },
      { letter: 'E', text: '2 ms e 2 ms.' },
    ],
    correctOption: 'A',
    explanation: `No escalonamento **Round Robin** com dois processos $P_1$ e $P_2$, cada um com tempo de CPU $B = 20\\text{ ms}$ (trabalho útil total $= 40\\text{ ms}$), dado um *quantum* $q$ e um tempo de troca de contexto $c$:
- Cada processo precisa de $\\dfrac{20}{q}$ fatias (*slices*) de execução, totalizando $N = \\dfrac{40}{q}$ fatias alternadas ($P_1, P_2, P_1, P_2, \\ldots$).
- Entre as $N$ fatias consecutivas ocorrem $N - 1 = \\dfrac{40}{q} - 1$ trocas de contexto.
- Assim, o tempo total de execução até concluir ambos os processos (*makespan*) e o tempo médio de retorno (*turnaround*) são:
$$T_{\\text{total}} = 40 + \\left(\\frac{40}{q} - 1\\right) c, \\qquad T_{P_1} = T_{\\text{total}} - q - c, \\qquad \\overline{T} = \\frac{T_{P_1} + T_{\\text{total}}}{2}$$
- Além disso, a fração de tempo desperdiçada com sobrecarga (*overhead*) de troca de contexto a cada ciclo é $\\dfrac{c}{q + c}$.

Comparando quantitativamente todas as 5 alternativas:

| Opção | $q$ | $c$ | Fatias ($40/q$) | Trocas ($N-1$) | Overhead | $T_{P_1}$ | $T_{P_2}$ ($T_{\\text{total}}$) | Média $\\overline{T}$ | Fração $c/(q+c)$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | **5 ms** | **1 ms** | **8** | **7** | **7 ms** | **41 ms** | **47 ms** | **44,0 ms** | **16,7%** |
| B | 4 ms | 2 ms | 10 | 9 | 18 ms | 52 ms | 58 ms | 55,0 ms | 33,3% |
| C | 5 ms | 3 ms | 8 | 7 | 21 ms | 53 ms | 61 ms | 57,0 ms | 37,5% |
| D | 2 ms | 1 ms | 20 | 19 | 19 ms | 56 ms | 59 ms | 57,5 ms | 33,3% |
| E | 2 ms | 2 ms | 20 | 19 | 38 ms | 74 ms | 78 ms | 76,0 ms | 50,0% |

Como ensina Tanenbaum, para reduzir o desperdício de CPU e minimizar o tempo total de resposta/retorno das tarefas, deve-se escolher o **maior *quantum* compatível ($5\\text{ ms}$)** aliado ao **menor tempo de troca de contexto ($1\\text{ ms}$)** — combinação que vence em todos os indicadores de desempenho (**alternativa A**).`,
    optionAnalysis: {
      A: 'Correta: q = 5 ms e c = 1 ms minimizam o número de preempções (7 trocas) e a sobrecarga (7 ms), resultando no menor tempo total (47 ms), menor tempo médio de conclusão (44 ms) e menor taxa de overhead (16,7%).',
      B: 'Incorreta: quantum menor (4 ms) com troca de contexto dobrada (2 ms) eleva o overhead para 18 ms e o tempo total para 58 ms.',
      C: 'Incorreta: mesmo com q = 5 ms, a troca de contexto de 3 ms triplica o overhead (21 ms), levando o tempo total a 61 ms.',
      D: 'Incorreta: quantum muito pequeno (2 ms) provoca 19 trocas de contexto (19 ms de overhead, desperdiçando 33,3% da CPU) e eleva o tempo total para 59 ms.',
      E: 'Incorreta: pior cenário — gasta tanto tempo trocando contexto (2 ms) quanto executando processo útil (2 ms), desperdiçando 50% da CPU (tempo total de 78 ms).',
    },
    keyConcept:
      'Escalonamento Round Robin (Tanenbaum): *quantum* muito pequeno causa excesso de trocas de contexto (*thrashing* de escalonamento), degradando o rendimento; maximizar a razão $q / c$ reduz a sobrecarga do sistema.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 34.',
  },
  {
    id: 'enade-2019-q35',
    source: 'enade-2019',
    year: 2019,
    number: 35,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Qualidade de Software (NBR ISO/IEC 9126 / 25010) — Usabilidade e Inteligibilidade',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context:
      'Usabilidade é o fator que assegura ao usuário a facilidade de uso e é definida em aspectos como a inteligibilidade, que pode ser definida como atributos do software que evidenciam',
    command: 'Assinale a alternativa que completa corretamente a definição de inteligibilidade.',
    options: [
      {
        letter: 'A',
        text: 'a satisfação subjetiva do usuário durante o uso de funções específicas.',
      },
      {
        letter: 'B',
        text: 'o esforço do usuário para sua operação e controle de sua operação.',
      },
      {
        letter: 'C',
        text: 'o esforço do usuário para reconhecer o conceito lógico e sua aplicabilidade.',
      },
      {
        letter: 'D',
        text: 'que o software esteja de acordo com as normas previstas em leis relacionadas à aplicação.',
      },
      {
        letter: 'E',
        text: 'o esforço do usuário para aprender funcionalidades e controles de fatores de entrada e saída.',
      },
    ],
    correctOption: 'C',
    explanation: `Na norma clássica de Qualidade de Produto de Software **NBR ISO/IEC 9126-1** (evoluída na ISO/IEC 25010), a característica **Usabilidade** desdobra-se em subcaracterísticas com definições literais bem estabelecidas:

1. **Inteligibilidade (*Understandability*) — Alternativa C (CORRETA):**
   Atributos do software que evidenciam **o esforço do usuário para reconhecer o conceito lógico e sua aplicabilidade** (isto é, entender *o que* o software faz e *se* ele é adequado às suas necessidades).
2. **Apreensibilidade (*Learnability*) — Alternativa E:**
   Atributos que evidenciam o esforço do usuário para **aprender** sua aplicação, funcionalidades e controles de entrada e saída.
3. **Operacionalidade (*Operability*) — Alternativa B:**
   Atributos que evidenciam o esforço do usuário para **operar e controlar sua operação**.
4. **Atratividade (*Attractiveness*) — relacionada à Alternativa A:**
   Capacidade do produto de software de ser atraente ao usuário (estética e satisfação subjetiva).
5. **Conformidade (*Compliance*) — Alternativa D:**
   Capacidade do software de estar de acordo com normas, convenções, guias de estilo ou regulamentações/leis aplicáveis.

Portanto, a definição exata de **inteligibilidade** está na **alternativa C**.`,
    optionAnalysis: {
      A: 'Incorreta: descreve satisfação subjetiva / atratividade (ou qualidade em uso — satisfação), e não inteligibilidade.',
      B: 'Incorreta: essa é a definição literal de **Operacionalidade** na norma ISO/IEC 9126.',
      C: 'Correta: reproduz fielmente a definição da NBR ISO/IEC 9126 para **Inteligibilidade** — o esforço do usuário para reconhecer o conceito lógico do software e sua aplicabilidade.',
      D: 'Incorreta: essa é a definição de **Conformidade** (aderência a normas e leis).',
      E: 'Incorreta: essa é a definição literal de **Apreensibilidade** (*Learnability*) na ISO/IEC 9126.',
    },
    keyConcept:
      'Subcaracterísticas de Usabilidade (ISO/IEC 9126): **Inteligibilidade** = reconhecer o conceito lógico e sua aplicabilidade; **Apreensibilidade** = esforço para aprender; **Operacionalidade** = esforço para operar e controlar.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão 35.',
  },
];
