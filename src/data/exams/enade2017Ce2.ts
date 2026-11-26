import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2017_CE_2: ObjectiveQuestion[] = [
  {
    id: 'enade-2017-q23',
    source: 'enade-2017',
    year: 2017,
    number: 23,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Sinais e Sistemas Discretos: Filtros Digitais, Polos no Plano Z e Estabilidade',
    questionStyle: 'assercao-razao',
    difficulty: 'dificil',
    context: `Os filtros digitais são de grande importância em tratamento de sinais. Com códigos relativamente pequenos, é possível implementar filtros de ordem bastante elevada, o que em circuitos analógicos demandaria uma quantidade considerável de amplificadores operacionais. A seguir, reproduz-se um fragmento de código que implementa um filtro digital estruturado.

\`\`\`text
inicio
    defina u, y, numérico;         //Entrada e saída respectivas do sistema
    defina x1, x2, xt, numérico;   // Variáveis auxiliares
    x1 == 0;
    x2 == 0;
    repita
        leia u;
        y == 2 * x1 + x2;
        xt == x1;
        x1 == - x2;
        x2 == 0.5 * xt - x2 + u;
        escreva y;
    fim-repita
fim
\`\`\`

Considerando as informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.

I. O algoritmo forma um sistema assintoticamente estável, linear, invariante e discreto no tempo.

**PORQUE**

II. Os polos do sistema formado pelo algoritmo estão no semiplano complexo esquerdo, excluindo-se o eixo imaginário.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letter: 'B', text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letter: 'C', text: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letter: 'D', text: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letter: 'E', text: 'As asserções I e II são proposições falsas.' },
    ],
    correctOption: 'B',
    explanation: `Vamos modelar o algoritmo em **espaço de estados no tempo discreto** (no pseudocódigo, \`==\` representa atribuição) e calcular os polos no **plano $Z$**:

1. **Equações de estado e saída no instante discreto $k$:**
   - Saída:
     $$y[k] = 2x_1[k] + x_2[k]$$
   - Atualização de estados (usando \`xt\` para preservar $x_1[k]$ antes da sobrescrita):
     $$x_1[k+1] = -x_2[k]$$
     $$x_2[k+1] = 0{,}5\\,x_1[k] - x_2[k] + u[k]$$

   Na forma matricial $\\mathbf{x}[k+1] = A\\mathbf{x}[k] + B u[k]$ e $y[k] = C\\mathbf{x}[k]$:
   $$A = \\begin{bmatrix} 0 & -1 \\\\ 0{,}5 & -1 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}, \\quad C = \\begin{bmatrix} 2 & 1 \\end{bmatrix}$$

   Como todas as equações são combinações lineares com coeficientes constantes e executadas amostra a amostra, o sistema é **linear, invariante no tempo (LTI) e discreto no tempo**.

2. **Cálculo dos polos (autovalores de $A$, raízes de $\\det(zI - A) = 0$):**
   $$\\det\\begin{bmatrix} z & 1 \\\\ -0{,}5 & z + 1 \\end{bmatrix} = z(z+1) + 0{,}5 = z^2 + z + 0{,}5 = 0$$

   Pela fórmula de Bhaskara:
   $$z = \\frac{-1 \\pm \\sqrt{1 - 4(1)(0{,}5)}}{2} = \\frac{-1 \\pm \\sqrt{-1}}{2} = -0{,}5 \\pm 0{,}5j$$

3. **Análise das duas asserções:**
   - **Asserção I — VERDADEIRA:** Para um sistema LTI **discreto no tempo**, a estabilidade assintótica exige que todos os polos estejam **estritamente no interior do círculo unitário** ($|z| < 1$). Calculando o módulo dos polos:
     $$|z| = \\sqrt{(-0{,}5)^2 + (\\pm 0{,}5)^2} = \\sqrt{0{,}25 + 0{,}25} = \\sqrt{0{,}5} = \\frac{\\sqrt{2}}{2} \\approx 0{,}7071 < 1$$
     Portanto, o sistema é de fato assintoticamente estável!
   - **Asserção II — VERDADEIRA:** Como $\\operatorname{Re}(z) = -0{,}5 < 0$, os polos realmente pertencem ao semiplano complexo esquerdo aberto (excluindo-se o eixo imaginário).
   - **Relação (PORQUE) — FALSA:** Estar no semiplano complexo esquerdo ($\\operatorname{Re}(s) < 0$) é o critério de estabilidade para sistemas **contínuos no tempo** (plano $s$ de Laplace), **não** para sistemas discretos no plano $z$! Em tempo discreto, um polo em $z = -2$ está no semiplano esquerdo mas é **instável** ($|-2| = 2 > 1$), enquanto um polo em $z = +0{,}5$ está no semiplano direito e é **estável** ($|0{,}5| < 1$). O que justifica a estabilidade discreta é $|z| < 1$, e não $\\operatorname{Re}(z) < 0$.

Portanto, **I e II são verdadeiras, mas II não justifica I** (alternativa **B**).`,
    optionAnalysis: {
      A: 'Incorreta. A asserção II confunde o critério de estabilidade contínua (Re(s) < 0 no plano s) com o critério de estabilidade discreta (|z| < 1 no plano z), logo II não justifica I.',
      B: 'Correta. Os polos z = -0,5 ± 0,5j têm |z| = √0,5 < 1 (I é verdadeira) e Re(z) = -0,5 < 0 (II é verdadeira), mas a estabilidade discreta decorre de |z| < 1 e não de estar no semiplano esquerdo.',
      C: 'Incorreta. A asserção II também é verdadeira, pois Re(-0,5 ± 0,5j) = -0,5 < 0.',
      D: 'Incorreta. A asserção I é verdadeira, pois o sistema é LTI discreto e tem módulo dos polos igual a √0,5 < 1.',
      E: 'Incorreta. Ambas as proposições isoladamente são verdadeiras.',
    },
    keyConcept:
      'Estabilidade de sistemas LTI discretos (plano Z) exige |z| < 1 (interior do círculo unitário), enquanto sistemas contínuos (plano s) exigem Re(s) < 0 (semiplano esquerdo aberto).',
  },
  {
    id: 'enade-2017-q24',
    source: 'enade-2017',
    year: 2017,
    number: 24,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Inteligência Artificial: Busca Heurística A*, Admissibilidade e Dominância',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Heurísticas são regras voltadas à escolha das alternativas com maior probabilidade de conduzir a uma solução aceitável para determinado problema. O grau de informação de uma heurística permite avaliar em que sentido uma heurística é melhor do que outra.

*LUGER, G. F. Inteligência Artificial. São Paulo: Pearson, 2013 (adaptado).*

Para configurar os movimentos de um robô em uma linha de montagem, foram construídas duas heurísticas, $h_1$ e $h_2$. Ambas são **admissíveis**, têm como objetivo encontrar a sequência de montagem de menor custo a ser realizada pelo robô e baseiam-se em parâmetros como quantidade e complexidade de movimentos e custo de mudança de direção.`,
    command: 'A partir das informações apresentadas, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Se o erro de estimativa de $h_1$ for menor que o erro de $h_2$ para qualquer estado do processo de montagem, o custo do caminho resultante da busca baseada em $h_1$ será menor que o da busca baseada em $h_2$.',
      },
      {
        letter: 'B',
        text: 'Se for construída uma heurística $h_3 = \\max(h_1, h_2)$, a heurística $h_3$ terá um grau de informação maior ou igual a $h_1$ e $h_2$, para qualquer estado do processo de montagem.',
      },
      {
        letter: 'C',
        text: 'Se o grau de informação de $h_2$ for superior ao grau de informação de $h_1$, o número de estados expandidos durante o processo de busca, utilizando-se $h_2$, será inferior ao número de estados expandidos utilizando-se $h_1$.',
      },
      {
        letter: 'D',
        text: 'Se as heurísticas $h_1$ e $h_2$ forem consistentes, a heurística $h_3 = h_1 + h_2$ será uma heurística admissível e consistente para qualquer estado do processo de montagem.',
      },
      {
        letter: 'E',
        text: 'Se a heurística $h_1$ possuir um grau de informação igual a zero, o algoritmo de busca $A^*$ irá se comportar como um algoritmo de busca guloso (*greedy search*), do tipo melhor primeiro (*best first*).',
      },
    ],
    correctOption: 'B',
    explanation: `Uma heurística $h(n)$ é **admissível** se nunca superestima o custo real mínimo $h^*(n)$ até o objetivo:
$$0 \\le h(n) \\le h^*(n) \\quad \\forall n$$

O **grau de informação** (dominância) mede o quão próxima $h(n)$ está do custo real $h^*(n)$: diz-se que $h_a$ domina $h_b$ (é pelo menos tão informada quanto $h_b$) se $h_a(n) \\ge h_b(n)$ para todo estado $n$.

Analisando a combinação $h_3(n) = \\max(h_1(n), h_2(n))$:
- Como $h_1(n) \\le h^*(n)$ e $h_2(n) \\le h^*(n)$, o máximo entre elas continua satisfazendo $h_3(n) \\le h^*(n)$ (preserva a **admissibilidade**!).
- Por definição de máximo, para todo estado $n$:
  $$h_3(n) \\ge h_1(n) \\quad \\text{e} \\quad h_3(n) \\ge h_2(n)$$
  Portanto, $h_3$ possui grau de informação **maior ou igual** tanto ao de $h_1$ quanto ao de $h_2$ em todos os estados!

Logo, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Como tanto h1 quanto h2 são admissíveis, a busca A* com qualquer uma delas garante encontrar o mesmo custo mínimo ótimo C*; menor erro de estimativa melhora a eficiência (menos expansões), não o custo ótimo da solução.',
      B: 'Correta. O máximo ponto a ponto de heurísticas admissíveis h3 = max(h1, h2) permanece admissível e domina (tem grau de informação maior ou igual a) ambas em todo estado.',
      C: 'Incorreta. Uma heurística mais informada garante um número de estados expandidos menor OU IGUAL (≤), não estritamente inferior (<), pois em casos de empate em f(n) = C* ou caminhos já mínimos o número de expansões pode coincidir.',
      D: 'Incorreta. A soma h3 = h1 + h2 pode ultrapassar h*(n) (por exemplo, se h1 = h2 = 0,8·h*, então h3 = 1,6·h* > h*), perdendo tanto a admissibilidade quanto a consistência.',
      E: 'Incorreta. Quando h1(n) = 0, a função de avaliação do A* torna-se f(n) = g(n) + 0 = g(n), correspondendo à busca de custo uniforme (Dijkstra), e não à busca gulosa (que usa f(n) = h(n)).',
    },
    keyConcept:
      'Busca A* e dominância de heurísticas: se h1 e h2 são admissíveis, h3 = max(h1, h2) continua admissível e é pelo menos tão informada quanto ambas; se h = 0, A* reduz-se à busca de custo uniforme.',
    reference: 'LUGER, G. F. Inteligência Artificial. São Paulo: Pearson, 2013.',
  },
  {
    id: 'enade-2017-q25',
    source: 'enade-2017',
    year: 2017,
    number: 25,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Segurança de Redes: Firewall, IPS, IDS e Gateways Antivírus',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um provedor de serviços de segurança de redes e sistemas distribuídos enumerou três componentes de rede essenciais para a garantia da segurança dos dados corporativos: *firewall* de rede; sistemas de prevenção e detecção de intrusão; e *gateways* antivírus.`,
    command: 'Acerca desses componentes de rede, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Os *gateways* antivírus trabalham no nível da camada de rede e verificam o fluxo de dados em busca de assinaturas de vírus conhecidas.',
      },
      {
        letter: 'B',
        text: 'O *firewall* de rede deve ser configurado para detectar transferência de informação através de um canal camuflado (*covert channel*) baseado em túneis.',
      },
      {
        letter: 'C',
        text: 'Um *firewall* de camada de rede (*network layer firewall*) permite uma filtragem mais detalhada dos dados que um *firewall* de camada de aplicação (*application layer firewall*) ao custo de um pior desempenho.',
      },
      {
        letter: 'D',
        text: 'Os sistemas de prevenção de intrusão são vistos como uma extensão do *firewall* e são capazes de detectar anomalias de tráfego ou conteúdo malicioso antes que eles alcancem a rede.',
      },
      {
        letter: 'E',
        text: 'O sistema de detecção de intrusão é capaz de identificar ataques iniciados dentro da rede protegida e agir proativamente para neutralizar a ameaça.',
      },
    ],
    correctOption: 'D',
    explanation: `Analisando o papel e a camada de atuação de cada mecanismo de segurança de perímetro:

- **Firewall de camada de rede (filtro de pacotes):** opera nas camadas 3 e 4 (IP, TCP/UDP), analisando cabeçalhos (endereços IP, portas, flags). É muito rápido, mas menos granular que um *firewall* de camada de aplicação (proxy/WAF), que inspeciona o conteúdo da camada 7 ao custo de maior latência.
- **IDS (*Intrusion Detection System* — Sistema de Detecção de Intrusão):** atua de forma **passiva** (fora de linha / cópia do tráfego), monitorando pacotes e logs para identificar assinaturas ou anomalias e emitir alertas, **sem** bloquear o tráfego proativamente.
- **IPS (*Intrusion Prevention System* — Sistema de Prevenção de Intrusão):** atua **em linha (*inline*)**, funcionando como uma extensão inteligente do *firewall*. Inspeciona o tráfego em tempo real e consegue detectar e bloquear anomalias ou payloads maliciosos **antes** que alcancem os hosts internos da rede protegida.
- **Gateway antivírus:** opera na **camada de aplicação** (remontando e escaneando arquivos trafegados em protocolos como HTTP, SMTP, FTP) em busca de assinaturas ou comportamentos de malware.

Portanto, a única afirmação correta é a alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Gateways antivírus operam na camada de aplicação (inspecionando arquivos e payloads), e não apenas na camada de rede.',
      B: 'Incorreta. Firewalls tradicionais de rede não conseguem inspecionar ou detectar facilmente canais camuflados (covert channels) encapsulados dentro de túneis permitidos/criptografados.',
      C: 'Incorreta. Inverte os papéis: quem realiza filtragem mais detalhada ao custo de menor desempenho é o firewall de camada de aplicação, não o de camada de rede.',
      D: 'Correta. O IPS funciona em linha como extensão do firewall, detectando e bloqueando anomalias e conteúdo malicioso antes de atingirem a rede interna.',
      E: 'Incorreta. Descreve ação proativa de bloqueio/neutralização, que é característica do IPS (prevenção), enquanto o IDS (detecção) atua de forma passiva apenas alertando.',
    },
    keyConcept:
      'Diferença essencial em segurança de redes: IDS detecta passivamente e alerta; IPS atua inline (extensão do firewall) detectando e bloqueando ameaças antes que cheguem à rede.',
  },
  {
    id: 'enade-2017-q26',
    source: 'enade-2017',
    year: 2017,
    number: 26,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Estruturas de Dados: Fila (FIFO) Implementada em Vetor na Linguagem C',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `Estruturas de dados, tais como filas e pilhas, são utilizadas em diversas aplicações para automação industrial por meio de linguagens de programação textuais. O texto estruturado (ST) é uma das opções de linguagem de programação definidas pela norma IEC 61131-3. O trecho de código a seguir foi implementado nesse contexto.

\`\`\`c
#define MAX 1000

struct eventos {
    char ocorrencia[200];
    char dataHora[50];
};

struct eventos eve[MAX];
int inicio = 0;
int fim = 0;

int processaEvento (struct eventos *recuperado) {
    if (inicio == fim) {
        return -1;
    }
    else {
        inicio++;
        copiaEvento (recuperado, eve[inicio - 1]);
        return 0;
    }
}

int insereEvento (struct eventos *novo) {
    if (fim == MAX) {
        return -1;
    }
    else {
        copiaEvento (eve[fim], novo);
        fim++;
        return 0;
    }
}
\`\`\``,
    command: 'É correto afirmar que a estrutura de dados e a funcionalidade desse código tratam-se de',
    options: [
      { letter: 'A', text: 'uma fila que processa primeiro os eventos mais antigos.' },
      { letter: 'B', text: 'uma pilha que processa primeiro os eventos mais antigos.' },
      { letter: 'C', text: 'uma pilha que processa primeiro os eventos mais recentes.' },
      { letter: 'D', text: 'uma pilha que processa os eventos na ordem escolhida pelo operador.' },
      { letter: 'E', text: 'uma fila que processa os eventos de acordo com seu respectivo grau de prioridade.' },
    ],
    correctOption: 'A',
    explanation: `Analisando os dois índices (\`inicio\` e \`fim\`) e as duas operações implementadas sobre o vetor \`eve[MAX]\`:

1. **Inserção (\`insereEvento\`):**
   - Verifica se o vetor atingiu o limite (\`fim == MAX\`).
   - Copia o novo evento na posição \`eve[fim]\` e incrementa \`fim++\`.
   - Ou seja, os novos eventos são enfileirados em sequência: índices \`0, 1, 2, ...\`.

2. **Remoção/Processamento (\`processaEvento\`):**
   - Verifica se a estrutura está vazia (\`inicio == fim\`).
   - Incrementa \`inicio++\` e recupera o elemento de \`eve[inicio - 1]\` (isto é, o elemento que estava na posição anterior de \`inicio\`: primeiro o índice \`0\`, depois \`1\`, depois \`2\`, ...).

Como as inserções acontecem em uma extremidade (\`fim\`) e as remoções na extremidade oposta (\`inicio\`), obedece-se estritamente à política **FIFO (*First-In, First-Out*)**: o primeiro evento a entrar (o mais antigo) é o primeiro a ser processado.

Isso define uma **fila simples** que processa primeiro os eventos mais antigos (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Inserção por fim e remoção por inicio caracterizam uma fila (FIFO), processando primeiro os eventos mais antigos.',
      B: 'Incorreta. Uma pilha segue a política LIFO (último a entrar, primeiro a sair), não FIFO.',
      C: 'Incorreta. Não há remoção pelo mesmo extremo fim (não é uma pilha LIFO).',
      D: 'Incorreta. Não há índice arbitrário escolhido pelo operador nem comportamento de pilha.',
      E: 'Incorreta. A struct eventos não possui campo de prioridade nem há ordenação/heap nas funções de inserção ou remoção.',
    },
    keyConcept:
      'Fila (FIFO — First-In, First-Out): elementos são inseridos no final (fim++) e removidos do início (inicio++), atendendo sempre na ordem de chegada (mais antigo primeiro).',
  },
  {
    id: 'enade-2017-q27',
    source: 'enade-2017',
    year: 2017,
    number: 27,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Arquitetura de Sistemas Embarcados, IoT e Computação em Nuvem',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Um sistema monitora o deslocamento de um carro registrando em banco de dados, a cada segundo, as leituras de dois acelerômetros (um na direção longitudinal e outro na direção transversal).

O projeto é estruturado em três subprojetos:
- **MÓDULO_1** (*hardware* e *software*): embarcado no veículo, dotado de comunicação com a internet via GPRS;
- **MÓDULO_2** (*software* aplicativo): executado em plataforma Android (*tablet*, *smartphone* ou celular) para exibir relatórios aos usuários;
- **MÓDULO_3** (*hardware* e *software*): instalado em um servidor em nuvem com conexão dedicada e permanente à internet.

Especificações do projeto:
- o **MÓDULO_1** comunica-se com o **MÓDULO_3** para enviar as leituras obtidas; como o carro nem sempre está em área de cobertura celular, uma comunicação pode precisar enviar leituras acumuladas de até um dia inteiro;
- o **MÓDULO_2** comunica-se com o **MÓDULO_3** para obter os dados exibidos no relatório;
- os relatórios exibem os valores máximos de velocidade e aceleração e as respectivas posições do carro quando foram atingidos.

A partir dessas informações, avalie as afirmações a seguir.

I. O **MÓDULO_1** deve ter capacidade de armazenamento de dados suficiente para um dia de leituras, a serem enviadas para o **MÓDULO_3**.

II. Todos os subprojetos têm interface de comunicação pela internet e a interface com o usuário é feita no **MÓDULO_2**.

III. O melhor local para se executar o processamento dos dados para o relatório é o **MÓDULO_1**, que está sempre conectado e tem maior capacidade de processamento.

IV. O melhor local para se instalar o banco de dados para as leituras é o **MÓDULO_3**, que dispõe de maior capacidade de armazenamento e conexão permanente com a internet.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'I, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Analisando a arquitetura distribuída de 3 camadas (dispositivo embarcado + servidor em nuvem + aplicativo móvel):

- **I — Verdadeira:** Como o veículo pode transitar por regiões sem cobertura celular GPRS por até um dia inteiro, o **MÓDULO_1** precisa manter um *buffer* local não volátil com capacidade mínima para armazenar 24 horas de leituras (a 1 amostra/s, são $86\\,400$ pares de medições por dia) até restabelecer a conexão com o **MÓDULO_3**.
- **II — Verdadeira:** Os três subprojetos comunicam-se via internet (**MÓDULO_1** por GPRS, **MÓDULO_2** por rede móvel/Wi-Fi no Android e **MÓDULO_3** por link dedicado em nuvem), cabendo exclusivamente ao **MÓDULO_2** apresentar a interface gráfica de relatórios ao usuário final.
- **III — Falsa:** Duas contradições diretas com o enunciado e com a engenharia de sistemas embarcados: o **MÓDULO_1** **não** está sempre conectado (perde sinal celular ao longo do trajeto) e, por ser um sistema embarcado no carro, possui recursos de processamento restritos em comparação ao servidor em nuvem (**MÓDULO_3**), que é o local adequado para consolidar e processar os relatórios.
- **IV — Verdadeira:** O **MÓDULO_3** (servidor em nuvem) combina alta capacidade de armazenamento escalável, confiabilidade e conexão permanente à internet, sendo o ponto central ideal para hospedar o banco de dados consultado pelo **MÓDULO_2** e alimentado pelo **MÓDULO_1**.

Portanto, estão corretas apenas **I, II e IV** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação III é falsa (MÓDULO_1 não fica sempre conectado nem tem maior poder computacional) e faltam II e IV.',
      B: 'Incorreta. Inclui a afirmação falsa III e omite I e IV.',
      C: 'Incorreta. Omite a afirmação verdadeira I (necessidade de armazenamento local de 1 dia no MÓDULO_1).',
      D: 'Correta. Apenas I, II e IV descrevem adequadamente os requisitos arquiteturais dos três módulos.',
      E: 'Incorreta. Inclui a afirmação falsa III e exclui a verdadeira II.',
    },
    keyConcept:
      'Arquitetura IoT/embarcados em 3 camadas: nó embarcado coleta e armazena localmente em desconexões (buffer offline), nuvem centraliza banco de dados e processamento pesado, e app móvel provê a interface ao usuário.',
  },
  {
    id: 'enade-2017-q28',
    source: 'enade-2017',
    year: 2017,
    number: 28,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Pesquisa Operacional: Programação Linear e Problema do Transporte',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Em pesquisa operacional, problemas de Programação Linear (PL) são aqueles para os quais a função objetivo e as restrições são todas lineares. Um importante problema prático modelado com PL é o **problema do transporte**.

Suponha uma situação com $K$ portos, $P_1, P_2, \\dots, P_K$, que suprirão $J$ mercados, $M_1, M_2, \\dots, M_J$, com determinado produto:
- cada porto $P_i$ dispõe de uma quantidade $s_i$ do produto ($i = 1, 2, \\dots, K$);
- cada mercado $M_j$ deve receber **pelo menos** uma quantidade $r_j$ do produto ($j = 1, 2, \\dots, J$);
- $b_{ij}$ é o custo unitário de transporte do porto $P_i$ para o mercado $M_j$;
- $y_{ij}$ é a quantidade de produto despachada do porto $P_i$ para o mercado $M_j$.

O objetivo é suprir as necessidades dos mercados com o menor custo total de transporte.

Com base nessa modelagem, avalie as afirmações a seguir.

I. A expressão a ser minimizada é $\\displaystyle \\sum_{i=1}^{K} \\sum_{j=1}^{J} y_{ij}\\, b_{ij}$.

II. São restrições do problema: $\\displaystyle \\sum_{j=1}^{J} y_{ij} \\le s_i$ para $i = 1, 2, \\dots, K$.

III. São restrições do problema: $\\displaystyle \\sum_{i=1}^{K} y_{ij} \\le r_j$ para $j = 1, 2, \\dots, J$.

IV. A quantidade total despachada para o mercado $M_j$ é $K \\cdot y_{ij}$.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e IV.' },
      { letter: 'C', text: 'III e IV.' },
      { letter: 'D', text: 'I, II e III.' },
      { letter: 'E', text: 'I, III e IV.' },
    ],
    correctOption: 'A',
    explanation: `Analisando a formulação clássica de Programação Linear para o **Problema do Transporte**:

- **I — Verdadeira (Função Objetivo):**
  O custo de enviar $y_{ij}$ unidades do porto $P_i$ ao mercado $M_j$ é $y_{ij} \\cdot b_{ij}$. Somando sobre todos os portos $i = 1, \\dots, K$ e todos os mercados $j = 1, \\dots, J$, obtemos o custo total a minimizar:
  $$\\min Z = \\sum_{i=1}^{K} \\sum_{j=1}^{J} y_{ij}\\, b_{ij}$$

- **II — Verdadeira (Restrições de Oferta nos Portos):**
  A soma de tudo que sai do porto $P_i$ para todos os $J$ mercados não pode ultrapassar o estoque disponível $s_i$ naquele porto:
  $$\\sum_{j=1}^{J} y_{ij} \\le s_i, \\quad \\forall i = 1, 2, \\dots, K$$

- **III — Falsa (Sinal Invertido nas Restrições de Demanda):**
  O enunciado especifica que cada mercado $M_j$ deve receber **pelo menos** a quantidade $r_j$. Logo, a desigualdade correta é **maior ou igual** ($\\ge$), e **não** menor ou igual ($\\le$):
  $$\\sum_{i=1}^{K} y_{ij} \\ge r_j, \\quad \\forall j = 1, 2, \\dots, J$$
  *(Com o sinal $\\le$, a solução ótima trivial seria $y_{ij} = 0$, deixando os mercados desabastecidos!)*

- **IV — Falsa:**
  A quantidade total recebida pelo mercado $M_j$ é a soma do que chega de cada porto $i$: $\\sum_{i=1}^{K} y_{ij}$. A expressão $K \\cdot y_{ij}$ só valeria se todos os $K$ portos enviassem quantidades idênticas ao mercado $M_j$, o que não é verdade em geral.

Logo, estão corretas apenas **I e II** (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Apenas a função objetivo (I) e as restrições de oferta dos portos (II) estão corretamente formuladas.',
      B: 'Incorreta. A afirmação IV é falsa (o total recebido por M_j é o somatório sobre i, não K·y_ij) e falta a verdadeira I.',
      C: 'Incorreta. Tanto III (sinal ≤ em vez de ≥) quanto IV (K·y_ij) são falsas.',
      D: 'Incorreta. Inclui a afirmação falsa III, que inverte o sinal da restrição de demanda mínima.',
      E: 'Incorreta. Inclui as afirmações falsas III e IV e exclui a verdadeira II.',
    },
    keyConcept:
      'Problema do Transporte em PL: minimizar ΣΣ b_ij·y_ij sujeito a oferta Σ_j y_ij ≤ s_i, demanda mínima Σ_i y_ij ≥ r_j e não negatividade y_ij ≥ 0.',
  },
  {
    id: 'enade-2017-q29',
    source: 'enade-2017',
    year: 2017,
    number: 29,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Sistemas Operacionais: Virtualização, Computação Verde e Gerência de Servidores',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `A computação verde (*Green IT*) refere-se ao uso ambientalmente responsável de computadores e recursos relacionados, abrangendo eficiência energética em CPUs, servidores e periféricos, redução no consumo de recursos e destinação adequada do lixo eletrônico.

*HARRIS, J. G. Computing and green IT best practices on regulations and industry initiatives, virtualization, power management, materials recycling and telecommuting. London: Emereo Pty Ltd, 2008 (adaptado).*

Nesse contexto, avalie as asserções a seguir e a relação proposta entre elas.

I. Embora a virtualização contribua para a computação verde, o projeto e a gerência de uma arquitetura virtualizada apresentam problemas.

**PORQUE**

II. Da virtualização podem decorrer problemas de segurança a partir de vulnerabilidades no hospedeiro, além de potencialmente haver maior desgaste das máquinas servidoras e, portanto, maior custo de manutenção.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letter: 'B', text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letter: 'C', text: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letter: 'D', text: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letter: 'E', text: 'As asserções I e II são proposições falsas.' },
    ],
    correctOption: 'A',
    explanation: `Analisando a relação entre **virtualização**, **computação verde** e **desafios operacionais**:

- **Asserção I — VERDADEIRA:** A virtualização consolida múltiplos servidores lógicos (máquinas virtuais) em menos servidores físicos, elevando o aproveitamento de hardware e reduzindo o consumo de energia elétrica, espaço físico e refrigeração — contribuindo diretamente para a computação verde. Contudo, projetar e gerenciar ambientes virtualizados introduz desafios específicos de arquitetura, isolamento, segurança e confiabilidade.
- **Asserção II — VERDADEIRA:** Como diversas VMs compartilham o mesmo servidor físico (*host*) e o mesmo hipervisor (*hypervisor*), uma vulnerabilidade no hospedeiro/hipervisor (ex.: *VM escape*) pode comprometer simultaneamente todas as máquinas virtuais hospedadas. Além disso, a consolidação mantém os servidores físicos operando em taxas de utilização de CPU, memória, disco e energia muito mais elevadas e constantes, acelerando o desgaste de componentes e podendo aumentar os custos de manutenção e substituição.
- **Relação (PORQUE) — VERDADEIRA:** A asserção II explica exatamente **quais** problemas justificam a afirmação feita na asserção I sobre as dificuldades de projeto e gerência da arquitetura virtualizada.

Portanto, **I e II são verdadeiras e II justifica I** (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Ambas as asserções são verdadeiras e II apresenta diretamente os problemas de segurança e manutenção/desgaste mencionados em I.',
      B: 'Incorreta. Há relação direta de causa e efeito entre II e I.',
      C: 'Incorreta. A asserção II é verdadeira ao apontar riscos de vulnerabilidade no hospedeiro e maior utilização/desgaste dos servidores físicos.',
      D: 'Incorreta. A asserção I é verdadeira.',
      E: 'Incorreta. Nenhuma das duas asserções é falsa.',
    },
    keyConcept:
      'Virtualização e Green IT: consolidação reduz consumo energético e número de servidores físicos, mas concentra riscos de segurança no hospedeiro/hipervisor e eleva a carga/desgaste do hardware físico.',
    reference: 'HARRIS, J. G. Computing and green IT best practices. London: Emereo Pty Ltd, 2008.',
  },
  {
    id: 'enade-2017-q30',
    source: 'enade-2017',
    year: 2017,
    number: 30,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Legislação em Computação: Marco Civil da Internet (Lei nº 12.965/2014)',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Considere que tenha ocorrido o vazamento de imagens íntimas por meio de aplicativo de comunicação instantânea de celular, disponibilizado por provedor de aplicações, sem autorização das pessoas que aparecem nas imagens.`,
    command:
      'Nesse contexto, de acordo com a Lei n. 12.965/2014, conhecida popularmente como Marco Civil da Internet, o provedor de aplicações de internet poderá',
    options: [
      {
        letter: 'A',
        text: 'ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos.',
      },
      {
        letter: 'B',
        text: 'ser declarado inocente, caso fique provado que as imagens foram disponibilizadas à pedido da vítima.',
      },
      {
        letter: 'C',
        text: 'mover uma ação contra a vítima, pelo uso indevido de seus serviços, por ela ter disponibilizado imagens íntimas na rede.',
      },
      {
        letter: 'D',
        text: 'tornar indisponíveis todas as imagens da vítima compartilhadas e disponíveis na internet.',
      },
      {
        letter: 'E',
        text: 'encerrar seu contrato com a vítima devido à falha de segurança ocorrida.',
      },
    ],
    correctOption: 'A',
    explanation: `O **Marco Civil da Internet (Lei nº 12.965/2014)** prevê em seu **art. 19** a regra geral de que provedores de aplicações de internet só são responsabilizados civilmente por conteúdo gerado por terceiros se descumprirem **ordem judicial** específica.

Contudo, o **art. 21** estabelece uma **exceção expressa** para a divulgação não autorizada de **imagens, vídeos ou materiais contendo cenas de nudez ou atos sexuais de caráter privado**:

> O provedor de aplicações de internet será responsabilizado **subsidiariamente** pela violação da intimidade se, **após o recebimento de notificação pelo participante ou seu representante legal** (independentemente de ordem judicial prévia), deixar de promover, de forma diligente, **no âmbito e nos limites técnicos do seu serviço**, a indisponibilização desse conteúdo.

Portanto, o provedor pode **ser responsabilizado se deixar de remover as imagens disponibilizadas, dentro dos seus limites técnicos** (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Reflete exatamente o art. 21 da Lei nº 12.965/2014: responsabilização subsidiária caso o provedor não promova a remoção diligente após notificação, dentro dos limites técnicos do serviço.',
      B: 'Incorreta. O enunciado afirma expressamente que o vazamento ocorreu sem autorização das pessoas que aparecem nas imagens.',
      C: 'Incorreta. A vítima não é ré nem violadora por ter sido exposta sem autorização; o Marco Civil protege a intimidade da vítima.',
      D: 'Incorreta. Um provedor só tem controle sobre o conteúdo hospedado ou gerenciado dentro do âmbito e limites técnicos do seu próprio serviço, não sobre "toda a internet".',
      E: 'Incorreta. O Marco Civil não prevê rescisão contratual punitiva contra a vítima como solução para divulgação não autorizada de imagens íntimas.',
    },
    keyConcept:
      'Marco Civil da Internet (Lei nº 12.965/2014, art. 21): na divulgação não autorizada de imagens íntimas, basta notificação da vítima (sem exigir ordem judicial) — o provedor responde subsidiariamente se não remover o conteúdo dentro de seus limites técnicos.',
  },
  {
    id: 'enade-2017-q31',
    source: 'enade-2017',
    year: 2017,
    number: 31,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Métodos Ágeis e Técnica de Timeboxing',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `No gerenciamento de projetos de software, atrasos de cronograma, estouro de orçamento e falhas de qualidade motivaram a adoção crescente de métodos ágeis (baseados em adaptação e comunicação) em contraposição aos modelos prescritivos tradicionais.

Nesse cenário, avalie as duas asserções abaixo e a relação entre elas:

I. A prática de *timeboxing* consiste na definição prévia, pela equipe, dos prazos de execução do projeto, independentemente do seu ciclo de desenvolvimento.

**PORQUE**

II. É preferível entregar os requisitos de maior prioridade dentro do prazo estipulado do que tentar implementar todos os requisitos e perder o controle do cronograma, deixando itens menos prioritários para iterações finais do ciclo.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letter: 'B', text: 'As asserções I e II são proposições verdadeiras, mas a II não é justificativa correta da I.' },
      { letter: 'C', text: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letter: 'D', text: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letter: 'E', text: 'As asserções I e II são proposições falsas.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada proposição separadamente:

- **Asserção I — FALSA:** A técnica de *timeboxing* (caixas de tempo fixas, como Sprints no Scrum ou iterações no DSDM/XP) **não** é independente do ciclo de desenvolvimento — ela é intrinsecamente ligada a **ciclos iterativos e incrementais**, definindo janelas curtas e fixas de tempo (por exemplo, 1 a 4 semanas) para cada iteração e ajustando o escopo (requisitos) em vez de estender o prazo. Além disso, o prazo não é arbitrariamente fixado desconsiderando o modelo de ciclo de vida adotado.
- **Asserção II — VERDADEIRA:** Resume exatamente o princípio de priorização ágil (como o método MoSCoW / backlog priorizado): garante-se a entrega de valor com os requisitos mais críticos dentro da janela temporal fixada, postergando requisitos secundários para etapas posteriores caso o tempo se esgote.

Logo, **I é falsa e II é verdadeira** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. A asserção I é falsa porque o timeboxing depende de um ciclo iterativo-incremental, e não independe do ciclo de desenvolvimento.',
      B: 'Incorreta. A asserção I é falsa.',
      C: 'Incorreta. Inverte os valores lógicos de I e II.',
      D: 'Correta. I é falsa (erro ao afirmar independência do ciclo de desenvolvimento) e II descreve corretamente a priorização de requisitos com prazo fixo.',
      E: 'Incorreta. A asserção II é verdadeira.',
    },
    keyConcept:
      'Timeboxing em métodos ágeis fixa janelas curtas dentro de um ciclo iterativo-incremental e flexibiliza o escopo priorizando requisitos críticos.',
  },
  {
    id: 'enade-2017-q32',
    source: 'enade-2017',
    year: 2017,
    number: 32,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Computação Gráfica: Pipeline de Renderização OpenGL 4.0',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `A arquitetura de uma GPU abstraída pela API OpenGL 4.0 organiza a síntese de imagens 3D como um pipeline de renderização que converte vértices de primitivas geométricas (pontos, segmentos e triângulos) em pixels de uma imagem final.

Observe abaixo o diagrama do fluxo de estágios do pipeline gráfico (especificação de vértices → *Vertex Shader* → *Tesselation Shader* → *Geometry Shader* → Pós-Processamento → Montagem de Primitivas Básicas → Rasterização → *Fragment Shader* → Operações por Pixel → Imagem):`,
    images: [
      {
        src: '/images/enade-2017/q32-pipeline-opengl.png',
        alt: 'Diagrama do pipeline gráfico OpenGL 4.0 (ENADE 2017 Q32)',
        caption: 'Fluxo de estágios de renderização no OpenGL 4.0 (ENADE 2017).',
      },
    ],
    command: 'Com base no diagrama e no processo de renderização de malhas triangulares, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Os vértices das facetas triangulares precisam ter suas coordenadas projetadas no plano da imagem pela aplicação antes do envio ao Vertex Shader.',
      },
      {
        letter: 'B',
        text: 'Antes da Rasterização ocorrem otimizações como descarte de facetas não visíveis (culling) e recorte (clipping) da cena segundo os parâmetros da câmera.',
      },
      {
        letter: 'C',
        text: 'As coordenadas de textura associadas aos vértices são usadas no Vertex Shader para realizar a amostragem dos dados de textura da malha.',
      },
      {
        letter: 'D',
        text: 'A tonalização de Phong, baseada na interpolação de vetores normais dos vértices, deve ser programada no Vertex Shader para calcular a cor final da superfície.',
      },
      {
        letter: 'E',
        text: 'Posições, cores, normais, coeficientes de material e coordenadas de textura dos vértices são suficientes, por si sós, para gerar uma imagem fotorrealística.',
      },
    ],
    correctOption: 'B',
    explanation: `Analisando cada etapa do pipeline gráfico **OpenGL 4.0**:

1. **Vertex Shader:** Recebe atributos dos vértices no espaço do objeto (3D) e aplica as matrizes de transformação *Model-View-Projection* (MVP) — portanto a projeção ocorre **na GPU**, e não previamente na aplicação.
2. **Pós-Processamento de Vértices e Montagem de Primitivas (antes da Rasterização):** Realiza o **recorte (*clipping*)** contra o *frustum* de visualização da câmera, a divisão de perspectiva e o **descarte de faces ocultas (*back-face culling*)**, otimizando o volume de triângulos que chegarão à Rasterização. Isso valida diretamente a **alternativa B**.
3. **Rasterização e Fragment Shader:** O rasterizador interpola atributos (coordenadas de textura $(u,v)$, vetores normais) para cada fragmento gerado. É no **Fragment Shader** — e não no Vertex Shader — que se faz a amostragem típica de texturas e o cálculo da iluminação por fragmento da **tonalização de Phong** (no Vertex Shader calcula-se Gouraud).
4. **Fotorrealismo:** Exige ainda parâmetros de **fontes de luz**, câmera, sombras, reflexões/refrações e iluminação global — apenas atributos dos vértices não bastam.

Portanto, gabarito oficial: **B**.`,
    optionAnalysis: {
      A: 'Incorreta. A transformação de projeção (matriz MVP) é feita dentro do próprio Vertex Shader na GPU.',
      B: 'Correta. Clipping (recorte pelo frustum da câmera) e culling (descarte de facetas voltadas para trás) ocorrem no pós-processamento/montagem antes da rasterização.',
      C: 'Incorreta. O Vertex Shader apenas repassa as coordenadas de textura para interpolação; a leitura/amostragem da textura ocorre tipicamente no Fragment Shader.',
      D: 'Incorreta. Phong shading avalia a iluminação por fragmento (no Fragment Shader) usando normais interpoladas; Gouraud é que calcula cor por vértice no Vertex Shader.',
      E: 'Incorreta. Faltam informações essenciais de cena como fontes de iluminação, câmera e efeitos ópticos globais.',
    },
    keyConcept:
      'Pipeline OpenGL: projeção MVP ocorre no Vertex Shader; clipping e culling ocorrem antes da Rasterização; texturização e sombreamento de Phong ocorrem no Fragment Shader.',
  },
  {
    id: 'enade-2017-q33',
    source: 'enade-2017',
    year: 2017,
    number: 33,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Segurança em Bancos de Dados: Controle de Acesso DCL (GRANT, DENY, REVOKE)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Em sistemas gerenciadores de bancos de dados relacionais, políticas de segurança e controle de acesso restrito definem quem pode consultar ou modificar objetos do esquema.

Avalie as afirmações a seguir sobre privilégios de acesso em SGBDs:

I. Os comandos \`GRANT\`, \`DENY\` e \`REVOKE\` são empregados para gerenciar permissões de acesso de usuários e grupos sobre objetos do esquema de um banco de dados.

II. Se \`UserA\` pertence ao grupo \`Group1\`, recebe \`GRANT SELECT\` na tabela \`tblDados\`, e \`Group1\` recebe \`DENY SELECT\` na mesma tabela, então \`UserA\` continuará conseguindo executar consultas em \`tblDados\`.

III. Um usuário que recebeu um conjunto de privilégios sobre uma tabela está sempre impedido de repassar essas permissões a outros usuários.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'A',
    explanation: `Analisando cada afirmação sobre controle de acesso SQL (DCL):

- **Afirmação I — VERDADEIRA:** \`GRANT\` concede privilégios, \`REVOKE\` retira privilégios concedidos (ou negações) e \`DENY\` (presente em SGBDs como SQL Server) nega explicitamente uma permissão.
- **Afirmação II — FALSA:** Na hierarquia de permissões, o **\`DENY\` tem precedência absoluta sobre o \`GRANT\`**. Como \`UserA\` integra \`Group1\` e esse grupo recebeu \`DENY SELECT\`, o acesso de leitura é **bloqueado**, mesmo existindo um \`GRANT SELECT\` individual.
- **Afirmação III — FALSA:** O padrão SQL permite explicitamente a delegação de privilégios quando a concessão inclui a cláusula **\`WITH GRANT OPTION\`** (ex.: \`GRANT SELECT ON tblDados TO UserA WITH GRANT OPTION;\`). Portanto, não é vedado de forma absoluta.

Apenas a afirmação **I** está correta — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Apenas I é verdadeira; II erra a precedência DENY > GRANT e III ignora a cláusula WITH GRANT OPTION.',
      B: 'Incorreta. II é falsa porque DENY prevalece sobre GRANT.',
      C: 'Incorreta. III é falsa devido à cláusula WITH GRANT OPTION.',
      D: 'Incorreta. Tanto II quanto III são falsas.',
      E: 'Incorreta. II e III são falsas.',
    },
    keyConcept:
      'Controle de acesso SQL (DCL): DENY prevalece sobre GRANT em conflitos usuário/grupo; privilégios podem ser propagados via WITH GRANT OPTION.',
  },
  {
    id: 'enade-2017-q34',
    source: 'enade-2017',
    year: 2017,
    number: 34,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'IHC: Acessibilidade para Idosos, Usabilidade e Affordance',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `O processo de envelhecimento envolve alterações físicas e sensoriais (redução da acuidade visual, sensibilidade tátil, coordenação motora fina e memória). Interfaces dominantes em *smartphones* modernos (telas sensíveis ao toque, ícones compactos em gavetas de aplicativos e feedbacks sonoros sutis) podem prejudicar a acessibilidade desse público.

Considerando esse contexto de Interação Humano-Computador (IHC), avalie as asserções a seguir:

I. O baixo nível de acessibilidade da população idosa aos *smartphones* revela a exclusão social na terceira idade.

**PORQUE**

II. Os tipos de possibilidades de interação, também conhecidos como *affordance*, providos pelos *smartphones*, têm um impacto negativo nos idosos em termos de usabilidade.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letter: 'B', text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letter: 'C', text: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letter: 'D', text: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letter: 'E', text: 'As asserções I e II são proposições falsas.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cuidadosamente a distinção conceitual cobrada pela banca INEP:

- **Asserção I — FALSA:** O baixo nível de acessibilidade de *smartphones* para idosos evidencia um problema de **exclusão digital / projeto de interface não inclusivo**, e **não** deve ser igualado diretamente a "exclusão social na terceira idade" em sentido amplo (ou, conforme o gabarito definitivo do INEP, o texto-base discute a barreira tecnológica/usabilidade da interface móvel, não atribuindo a ela a revelação geral de exclusão social).
- **Asserção II — VERDADEIRA:** O conceito de ***affordance*** (introduzido por Gibson e popularizado em IHC por Don Norman) designa as possibilidades de interação percebidas em um artefato. Em *smartphones* com telas *touch* planas, gestos invisíveis (*swipe*, *pinch*) e ícones abstratos, as *affordances* disponíveis frequentemente geram impacto negativo na usabilidade para usuários idosos com declínio motor, tátil ou visual.

Logo, **I é falsa e II é verdadeira** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A asserção I extrapola o problema de usabilidade/acessibilidade digital para "exclusão social" e foi considerada falsa pelo INEP.',
      B: 'Incorreta. A asserção I é falsa.',
      C: 'Incorreta. Inverte os valores lógicos das duas proposições.',
      D: 'Correta. Conforme gabarito definitivo do ENADE 2017: I é falsa e II é verdadeira.',
      E: 'Incorreta. A asserção II define corretamente affordance e seu impacto na usabilidade para idosos.',
    },
    keyConcept:
      'Em IHC, affordance representa as possibilidades de interação percebidas pelo usuário; gestos invisíveis e telas touch sem pistas táteis reduzem a usabilidade para idosos.',
  },
  {
    id: 'enade-2017-q35',
    source: 'enade-2017',
    year: 2017,
    number: 35,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Roteamento de Estado de Enlace e Algoritmo de Dijkstra',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `No roteamento por estado de enlace (*link-state*), cada roteador difunde os custos de seus enlaces adjacentes para toda a rede, permitindo que cada nó conheça a topologia global e execute o **algoritmo de Dijkstra** para calcular o vetor $D$, onde $D(v)$ é o custo do caminho mínimo da origem até o nó $v$.

O grafo abaixo representa uma rede de 7 roteadores com arestas conhecidas e seis custos desconhecidos rotulados por $A, B, C, D, E$ e $F$, seguido do vetor de distâncias mínimas $D$ calculado a partir do roteador $1$:`,
    images: [
      {
        src: '/images/enade-2017/q35-grafo-roteadores.png',
        alt: 'Grafo da rede de roteadores 1 a 7 com custos A a F (ENADE 2017 Q35)',
        caption: 'Topologia da rede de roteadores (ENADE 2017 Q35).',
      },
      {
        src: '/images/enade-2017/q35-vetor-d.png',
        alt: 'Vetor D retornado pelo algoritmo de Dijkstra a partir do nó 1',
        caption: 'Vetor D = [0, 3, 2, 4, 5, 7, 8] para os nós 1 a 7.',
      },
    ],
    command: 'Nesse cenário, quais são os custos das arestas $A$, $B$, $C$, $D$, $E$ e $F$, respectivamente?',
    options: [
      { letter: 'A', text: '1, 2, 3, 2, 4 e 1.' },
      { letter: 'B', text: '1, 2, 1, 2, 1 e 4.' },
      { letter: 'C', text: '2, 1, 1, 4, 2 e 1.' },
      { letter: 'D', text: '2, 1, 3, 1, 2 e 1.' },
      { letter: 'E', text: '1, 1, 3, 4, 1 e 1.' },
    ],
    correctOption: 'C',
    explanation: `Dados do vetor retornado por Dijkstra a partir da origem $1$:
$$D(1)=0,\\quad D(2)=3,\\quad D(3)=2,\\quad D(4)=4,\\quad D(5)=5,\\quad D(6)=7,\\quad D(7)=8.$$

As ligações do grafo são:
- $(1,2)=4$, $(1,3)=A$, $(2,3)=B$, $(2,4)=C$, $(3,4)=3$, $(3,5)=D$, $(4,5)=1$, $(4,6)=5$, $(5,6)=E$, $(5,7)=4$, $(6,7)=F$.

Vamos deduzir cada incógnita passo a passo usando a desigualdade triangular de Dijkstra ($D(v) \\le D(u) + c(u,v)$ e existência de ao menos um predecessor que atinge a igualdade):

1. **Encontrando $A$:** O único caminho que pode atingir $D(3)=2$ (já que $(1,2)=4 > 2$) é a aresta direta $(1,3)=A$. Logo, **$A = 2$**. (Eliminamos A, B e E; restam apenas C e D!)
2. **Encontrando $B$:** Como $(1,2)=4$, para termos $D(2)=3$ é preciso chegar ao nó $2$ passando por $3$: $D(3) + B = 2 + B = 3 \\implies$ **$B = 1$**.
3. **Encontrando $C$:** Os vizinhos de $4$ com distância menor que $4$ são $2$ ($D(2)=3$, aresta $C$) e $3$ ($D(3)=2$, aresta $3$, dando $2+3=5 > 4$). Logo, o caminho mínimo até $4$ obrigatoriamente vem do nó $2$:
   $$D(2) + C = 4 \\implies 3 + C = 4 \\implies \\mathbf{C = 1}.$$
   (Isso já define unicamente a alternativa **C**!)
4. **Conferindo $D, E$ e $F$ com a alternativa C ($A=2, B=1, C=1, D=4, E=2, F=1$):**
   - Nó $5$: via $4$ temos $D(4)+1 = 4+1 = 5$; via $3$ temos $D(3)+D = 2+4 = 6 \\ge 5 \\implies D(5) = 5$ ✓. (Note que na alternativa D teríamos $D=1$, o que geraria $D(5) = 2+1 = 3 \\ne 5$!)
   - Nó $6$: via $5$ temos $D(5)+E = 5+2 = 7$; via $4$ temos $4+5=9 \\implies D(6)=7$ ✓.
   - Nó $7$: via $6$ temos $D(6)+F = 7+1 = 8$; via $5$ temos $5+4=9 \\implies D(7)=8$ ✓.

Todos os 7 valores do vetor $D$ fecham com exatidão para **$2, 1, 1, 4, 2$ e $1$** (alternativa **C**).`,
    optionAnalysis: {
      A: 'Incorreta. A = 1 produziria D(3) = 1 ≠ 2.',
      B: 'Incorreta. A = 1 produziria D(3) = 1 ≠ 2.',
      C: 'Correta. Gera exatamente D = [0, 3, 2, 4, 5, 7, 8] em todos os nós.',
      D: 'Incorreta. C = 3 daria D(4) = 5 ≠ 4 e D = 1 daria D(5) = 3 ≠ 5.',
      E: 'Incorreta. A = 1 produziria D(3) = 1 ≠ 2.',
    },
    keyConcept:
      'Algoritmo de Dijkstra: para todo vértice v ≠ origem, D(v) = min_u (D(u) + c(u,v)), garantindo simultaneamente que nenhum caminho tem custo menor que D(v) e que existe ao menos um caminho de custo exato D(v).',
  },
];
