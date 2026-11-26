import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2023_CE_2: ObjectiveQuestion[] = [
  {
    id: 'enade-2023-q25',
    source: 'enade-2023',
    year: 2023,
    number: 25,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Contadores Assíncronos com Flip-Flops JK e Linguagens HDL (Verilog/VHDL)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Os sistemas digitais são componentes essenciais em uma ampla variedade de aplicações, desde dispositivos eletrônicos portáteis até sistemas de controle industrial. Um dos principais aspectos do projeto desse tipo de sistema é a descrição do circuito em uma *Hardware Description Language* (HDL), como Verilog ou VHDL. Essas linguagens permitem descrever o comportamento e a estrutura do circuito de forma abstrata, viabilizando a síntese e a simulação do sistema.

Um exemplo de circuito sequencial é o contador de 4 *bits* assíncrono, mostrado na figura a seguir, o qual foi implementado utilizando *flip-flops* JK.

Nesse contexto, considere que um engenheiro proponha as duas traduções desse circuito em Verilog e VHDL, equivalentes entre si, conforme observado a seguir.

**Verilog:**
\`\`\`verilog
//-----------------------------------------------
module contador_4bits (
    input wire clk,
    input wire reset,
    output reg [1:0] count
);
    always @(posedge clk or posedge reset) begin
        if (reset)
            count <= 0;
        else
            count <= count + 1;
    end
endmodule
//-----------------------------------------------
\`\`\`

**VHDL:**
\`\`\`vhdl
//-----------------------------------------------
library ieee;
use ieee.std_logic_1164.all;

entity contador_4bits is
    port (
        clk   : in std_logic;
        reset : in std_logic;
        count : out integer range 0 to 3
    );
end entity contador_4bits;

architecture behavioral of contador_4bits is
begin
    process(clk, reset)
    variable q : integer range 0 to 3;
    begin
        if reset = '1' then
            q := 0;
        elsif rising_edge(clk) then
            q := q + 1;
        end if;
        count <= q;
    end process;
end architecture behavioral;
//-----------------------------------------------
\`\`\`

Considerando as informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.

**I.** Qualquer um dos códigos corresponde ao circuito contador de 4 *bits* mostrado na figura.

**PORQUE**

**II.** Ao atingir o valor máximo da contagem, o valor da saída será zerado no próximo ciclo de *clock* e o processo será reiniciado.`,
    images: [
      {
        src: '/images/enade-2023/q25-fig.png',
        alt: 'Circuito de contador assíncrono de 4 bits formado por quatro flip-flops JK (saídas count 3, count 2, count 1 e count 0) com todas as entradas J e K ligadas ao nível lógico 1, entradas CLR ligadas ao sinal reset, clock externo entrando no flip-flop de count 0 e a saída Q de cada estágio alimentando a entrada Clk do estágio seguinte.',
        caption: 'Contador de 4 bits assíncrono implementado com flip-flops JK.',
      },
    ],
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.',
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
    correctOption: 'D',
    explanation: `Analisando as duas proposições em detalhes:

1. **Asserção I (FALSA):** Apesar de os módulos se chamarem \`contador_4bits\`, **nenhum dos dois códigos implementa um contador de 4 bits (que contaria de 0 a 15, isto é, $2^4 = 16$ estados)**!
   - No código **Verilog**, a saída foi declarada como \`output reg [1:0] count\`, que possui apenas **2 bits** (índices 1 e 0, contando de 0 a 3 — para 4 bits deveria ser \`output reg [3:0] count\`).
   - No código **VHDL**, a porta e a variável foram declaradas como \`integer range 0 to 3\`, que também corresponde a apenas **2 bits** (4 estados: 0, 1, 2, 3 — para 4 bits deveria ser \`range 0 to 15\` ou \`unsigned(3 downto 0)\`).
   - Além disso, o circuito da figura é um contador **assíncrono** (*ripple counter*) com 4 flip-flops em cascata, enquanto ambos os códigos descrevem um contador **síncrono** de 2 bits. (Em VHDL ainda há \`//\` em vez de \`--\` para comentários e falta de tratamento de estouro na simulação de \`integer range 0 to 3\`.)

2. **Asserção II (VERDADEIRA):** Em um contador binário em módulo $2^N$ (como o contador de 4 bits em hardware que vai de \`0000\` a \`1111\`, ou o registrador sintetizado de 2 bits que vai de \`00\` a \`11\`), ao atingir o valor máximo de contagem todos os bits estão em \`1\`; no próximo pulso de *clock*, o incremento causa *overflow* (*wrap-around*), zerando todos os bits de saída e reiniciando o ciclo de contagem.

Portanto, a asserção I é **falsa** e a asserção II é **verdadeira** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A asserção I é falsa porque ambos os códigos definem contadores de apenas 2 bits (`[1:0]` em Verilog e `range 0 to 3` em VHDL), e não de 4 bits.',
      B: 'Incorreta. Classifica erroneamente a asserção I como verdadeira.',
      C: 'Incorreta. Inverte ambos os valores lógicos: I é falsa e II é verdadeira.',
      D: 'Correta. I é falsa (os códigos implementam contadores de 2 bits, não de 4 bits) e II é verdadeira (comportamento cíclico de wrap-around de contadores binários).',
      E: 'Incorreta. A asserção II descreve corretamente o reinício automático da contagem após o valor máximo.',
    },
    keyConcept: 'Largura de barramento em HDL (`[3:0]` vs `[1:0]` em Verilog; `range 0 to 15` vs `range 0 to 3` em VHDL) e comportamento cíclico de contadores binários.',
  },
  {
    id: 'enade-2023-q26',
    source: 'enade-2023',
    year: 2023,
    number: 26,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Multiprocessamento Simétrico, Threads e Memória Compartilhada (IPC)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Considere um cenário em que um computador seja organizado com múltiplos processadores, os quais compartilham a mesma memória RAM. Cada processador possui múltiplos núcleos.

Nesse arranjo, o sistema operacional permite múltiplas *threads*, as quais podem ser dinamicamente alocadas para execução em diferentes núcleos e processadores.`,
    command: 'A partir das informações apresentadas nessa situação, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Sistemas com múltiplos processadores devem alocar a mesma quantidade de memória RAM para cada processador do arranjo.',
      },
      {
        letter: 'B',
        text: 'Como há múltiplos processadores, são desnecessários os semáforos, uma vez que não há acessos concorrentes a recursos compartilhados.',
      },
      {
        letter: 'C',
        text: 'Como a exclusão mútua não é possível em arquitetura de múltiplos processadores, apenas uma aplicação pode ser executada de cada vez, mas com múltiplas *threads*.',
      },
      {
        letter: 'D',
        text: 'Os processos que possuem múltiplas *threads* em execução são mantidos por meio de funções da biblioteca no código da aplicação e dispensam serviços do sistema operacional.',
      },
      {
        letter: 'E',
        text: 'Dados trocados durante a comunicação entre processos podem ser armazenados nas áreas de memória compartilhada, mas o acesso a essas áreas é intermediado pelo sistema operacional.',
      },
    ],
    correctOption: 'E',
    explanation: `O cenário descreve uma arquitetura **SMP** (*Symmetric Multiprocessing*) com memória RAM compartilhada e suporte do SO a *threads* em nível de núcleo escalonáveis entre múltiplos núcleos e processadores.

Na comunicação entre processos (**IPC** — *Inter-Process Communication*) via **memória compartilhada**:
- Por padrão, cada processo possui espaço de endereçamento virtual isolado protegido pela MMU/SO.
- Para que dois ou mais processos troquem dados por meio de uma região de memória compartilhada (ex.: \`shmget\`/\`shmat\` ou \`shm_open\`/\`mmap\` em POSIX), o **sistema operacional intermedia** a criação, o controle de permissões e o mapeamento da mesma área física nas tabelas de páginas dos processos participantes (além de oferecer primitivas de sincronização como semáforos e mutexes para coordenar o acesso concorrente).

Logo, a única alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Em arquiteturas de memória compartilhada (SMP), a RAM é gerenciada globalmente pelo SO e alocada dinamicamente aos processos conforme a demanda, não dividida em fatias iguais por processador.',
      B: 'Incorreta. Exatamente o oposto: com múltiplos processadores/núcleos acessando a mesma RAM em paralelo real, primitivas de sincronização (semáforos, mutexes, spinlocks) são indispensáveis para evitar condições de corrida.',
      C: 'Incorreta. Exclusão mútua é plenamente suportada em multiprocessadores (por instruções atômicas de hardware como Compare-And-Swap/Test-and-Set e coerência de cache), permitindo executar diversas aplicações simultaneamente.',
      D: 'Incorreta. *Threads* puramente em espaço de usuário (biblioteca sem suporte do SO) não conseguem ser escalonadas dinamicamente em diferentes núcleos/processadores; o paralelismo real exige *threads* gerenciadas pelo núcleo do SO (modelo 1:1 ou M:N).',
      E: 'Correta. A memória compartilhada é mecanismo clássico de IPC em que o SO intermedia a criação, permissões e mapeamento da região compartilhada entre os espaços de endereçamento dos processos.',
    },
    keyConcept: 'Arquitetura SMP, threads em nível de núcleo, sincronização concorrente e comunicação entre processos (IPC) por memória compartilhada.',
  },
  {
    id: 'enade-2023-q27',
    source: 'enade-2023',
    year: 2023,
    number: 27,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Virtualização de Hardware e Alocação de Recursos',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `A técnica de virtualização de *hardware* consiste em emular um computador no qual a camada de *software* é executada sem que detalhes do computador físico e de seus componentes sejam expostos. Em um ambiente de computação distribuída, a técnica pode ser útil para que o sistema operacional e os *softwares* do usuário sejam executados em uma máquina virtual com características permanentes, em conformidade com o que foi projetado, verificado e validado, mesmo que um computador físico diferente seja empregado.`,
    command: 'Com base nesse contexto, é correto afirmar que',
    options: [
      {
        letter: 'A',
        text: 'adquirir licenças de *software* do usuário no volume de uma licença para cada computador físico, o que favorece a economia de licenças, pois *softwares* em máquinas virtuais não correspondem a cópias extras.',
      },
      {
        letter: 'B',
        text: 'utilizar um computador com capacidade extra de comunicação de dados para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais consome mais recursos de rede do que o mesmo sistema distribuído sendo executado em um computador físico.',
      },
      {
        letter: 'C',
        text: 'utilizar um computador com capacidade extra de memória principal para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais requer mais espaço de memória física do que o mesmo sistema distribuído sendo executado em um computador físico.',
      },
      {
        letter: 'D',
        text: 'adquirir computadores físicos com processadores similares para favorecer a compatibilidade, pois sistemas distribuídos fortemente acoplados compartilham recursos intensamente, funcionando de forma mais eficiente em máquinas virtuais quando os computadores físicos são compatíveis.',
      },
      {
        letter: 'E',
        text: 'adquirir dispositivos de armazenamento físico com, pelo menos, o dobro da capacidade do dispositivo virtual a ser usado a fim de favorecer a disponibilidade, pois os sistemas operacionais da máquina virtual e da máquina física devem ter espaço equivalente de dados para que exista o mapeamento direto entre o dispositivo virtual e o dispositivo físico.',
      },
    ],
    correctOption: 'C',
    explanation: `Na virtualização de hardware (seja com hipervisor Tipo 1 *bare-metal* ou Tipo 2 hospedado), o computador físico precisa manter em **memória principal (RAM)** não apenas os aplicativos do usuário, mas também:
1. O próprio **hipervisor / monitor de máquinas virtuais (VMM)** (e o sistema operacional hospedeiro, no caso Tipo 2);
2. Uma **instância completa de sistema operacional convidado (*guest OS*)** — kernel, buffers, caches, serviços — para cada máquina virtual em execução;
3. Estruturas de virtualização de memória (como tabelas de páginas sombreadas ou *Extended Page Tables* — EPT).

Por essa sobrecarga (*overhead*) de memória, rodar um sistema distribuído em máquinas virtuais exige **mais memória RAM física** do que executar o mesmo conjunto de serviços diretamente sobre o hardware físico (*bare-metal*). Portanto, dimensionar o host com capacidade extra de memória principal favorece diretamente o desempenho (evitando *swapping* / *ballooning* excessivo).

Alternativa correta: **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Softwares instalados em máquinas virtuais normalmente contam como instâncias/cópias licenciáveis (por VM, por vCPU ou por núcleo físico), não sendo isentos de licenciamento.',
      B: 'Incorreta. A comunicação lógica do sistema distribuído trafega o mesmo volume de dados úteis; o principal gargalo estrutural de múltiplas VMs frente ao bare-metal é memória RAM e CPU (hipervisor + SOs convidados), não multiplicação de tráfego externo de rede.',
      C: 'Correta. Cada máquina virtual carrega seu próprio SO convidado além do hipervisor/SO hospedeiro, exigindo mais memória principal física para manter bom desempenho.',
      D: 'Incorreta. Sistemas distribuídos são por definição *fracamente acoplados* (memória não compartilhada, comunicação por troca de mensagens), e um dos objetivos da virtualização descritos no enunciado é justamente abstrair diferenças entre computadores físicos.',
      E: 'Incorreta. Não existe exigência técnica de o disco físico ter "pelo menos o dobro" do disco virtual nem de mapeamento 1:1 com espaços equivalentes entre SO físico e virtual (inclusive existem discos virtuais dinâmicos / *thin provisioning*).',
    },
    keyConcept: 'Sobrecarga de memória (hipervisor + SOs convidados) na virtualização de hardware.',
  },
  {
    id: 'enade-2023-q28',
    source: 'enade-2023',
    year: 2023,
    number: 28,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Gerência de Memória: Paginação, MMU e TLB',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `Alguns sistemas com memória virtual utilizam uma técnica chamada de paginação. Nesses sistemas, existe um conjunto de endereços de memória, denominados endereços virtuais, que são gerados durante a execução dos programas, com o uso de indexação, de registradores-base, de registradores-segmento ou de outras técnicas. Um endereço virtual é dividido em número de página virtual e deslocamento. O número de página virtual é usado como índice dentro da tabela de páginas para encontrar o quadro correspondente. O endereço físico de memória é a concatenação entre o endereço do quadro com o deslocamento do endereço virtual.

Um mecanismo denominado TLB (do inglês, *translation lookaside buffer*), tipicamente implementado em *hardware*, fornece auxílio durante a atividade de mapeamento de endereços virtuais para endereços físicos sem passar pela tabela de página. A função do TLB é agilizar o processo de tradução de endereços lógicos para físicos.

*TANENBAUM, A. S. **Sistemas Operacionais Modernos**. 3. ed. São Paulo: Pearson Prentice Hall, 2009 (adaptado).*

Com relação à memória paginada, avalie as asserções a seguir e a relação proposta entre elas.

**I.** Quando um processo é escalonado para execução, tanto a MMU (*Memory Management Unit*) quanto o TLB são reconfigurados para o novo processo.

**PORQUE**

**II.** Para livrar-se de resíduos do processo executado anteriormente, a tabela de páginas do novo processo deve tornar-se a tabela atual, o que, em geral, é feito por meio da cópia da tabela ou de um ponteiro para ela em registradores em *hardware*.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.',
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
    explanation: `Esta questão baseia-se diretamente na discussão de Tanenbaum sobre troca de contexto em memória virtual paginada:

1. **Asserção I (VERDADEIRA):** Em toda troca de contexto entre processos distintos, cada processo possui seu próprio espaço de endereçamento virtual isolado. Assim, quando um novo processo é escalonado na CPU, tanto a **MMU** (que precisa apontar para a tabela de páginas do novo processo) quanto o **TLB** (cache associativa de traduções recentes, que precisa ser invalidado/*flushed* ou reconfigurado com o identificador de espaço de endereçamento do novo processo) devem ser reconfigurados.

2. **Asserção II (VERDADEIRA):** Para garantir o isolamento de memória e eliminar mapeamentos residuais do processo anterior, o sistema operacional torna ativa a tabela de páginas do novo processo — carregando um ponteiro para ela no registrador de hardware apropriado (como o registrador \`CR3\` em x86 ou \`TTBR\` em ARM) ou copiando a tabela para registradores de hardware da MMU.

3. **Relação de justificativa (CORRETA):** É justamente a necessidade de eliminar resíduos de tradução do processo anterior e ativar a nova tabela de páginas (Asserção II) que explica **por que** a MMU e o TLB precisam ser reconfigurados durante o escalonamento de um novo processo (Asserção I).

Portanto, ambas são verdadeiras e a II justifica corretamente a I — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Ambas as asserções são verdadeiras e II apresenta exatamente a causa técnica pela qual MMU e TLB precisam ser reconfigurados na troca de processo.',
      B: 'Incorreta. Há nexo causal direto entre II (evitar resíduos do processo anterior e ativar a tabela de páginas do novo processo) e I (reconfigurar MMU e TLB).',
      C: 'Incorreta. A asserção II é verdadeira e descreve o mecanismo real de atualização do registrador base da tabela de páginas na MMU.',
      D: 'Incorreta. A asserção I é verdadeira: MMU e TLB precisam refletir o mapeamento do novo processo escalonado.',
      E: 'Incorreta. Ambas as asserções são verdadeiras.',
    },
    keyConcept: 'Troca de contexto em memória virtual paginada: atualização do registrador da tabela de páginas na MMU e invalidação/reconfiguração do TLB.',
    reference: 'TANENBAUM, A. S. Sistemas Operacionais Modernos. 3. ed. São Paulo: Pearson Prentice Hall, 2009.',
  },
  {
    id: 'enade-2023-q29',
    source: 'enade-2023',
    year: 2023,
    number: 29,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Aprendizado de Máquina: Classificação Linear com SVM',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `Considere que uma equipe de engenheiros projete um sistema robótico para reciclagem de resíduos sólidos, o qual utiliza visão computacional para separar objetos de plástico e de vidro. Com o objetivo de automatizar o processo de classificação, opta-se pela técnica *support vector machine* (SVM).

No método SVM, $i$ é o índice do vetor suporte ($1 \\le i \\le 5$), $w$ é o coeficiente angular (peso) e $b$ é o coeficiente linear (polarização) da reta de separação. O par ordenado $(x, y)$ é a saída do sistema de Visão Computacional que representa os vetores de características dos supostos materiais, plástico ou vidro, com classificação normalizada em $f(i) \\in \\{-1, +1\\}$. A separação linear do material é resultado da diferença entre os pontos $P_1 = w \\cdot x + b$ e $P_2 = y$, conforme a equação a seguir.

$$f(i) = \\begin{cases} +1, & \\text{se } w x_i + b - y_i \\ge 0 \\\\ -1, & \\text{se } w x_i + b - y_i < 0 \\end{cases}$$

O pseudocódigo apresentado a seguir foi projetado para solucionar o problema de classificação com valores de $w$ e $b$ obtidos a partir de um conjunto de dados de treinamento.

\`\`\`text
Início
    w <- 0.4
    b <- 2.7
    para i de 1 até 5 faça
        yr <- w * x[i] + b
        se yr - y[i] > 0 então
            f[i] <- 1
        senão
            f[i] <- -1
        fimse
    fimpara
    para i de 1 até 5 faça
        se f[i] = -1 então
            escreva("Plástico")
        senão
            escreva("Vidro")
        fimse
    fimpara
Fim
\`\`\`

Observe a seguinte tabela com dados de teste.

| $i$ | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | 3 | 6 | 4 | 5 | 1 |
| $y$ | 7 | 6 | 4 | 3 | 2 |`,
    command:
      'Considerando essas informações, assinale a opção que apresenta a classificação correta da sequência dos materiais na saída do algoritmo.',
    options: [
      { letter: 'A', text: 'Plástico, Vidro, Vidro, Plástico, Vidro.' },
      { letter: 'B', text: 'Plástico, Plástico, Vidro, Vidro, Vidro.' },
      { letter: 'C', text: 'Plástico, Vidro, Plástico, Vidro, Vidro.' },
      { letter: 'D', text: 'Plástico, Plástico, Plástico, Vidro, Vidro.' },
      { letter: 'E', text: 'Plástico, Vidro, Vidro, Plástico, Plástico.' },
    ],
    correctOption: 'B',
    explanation: `Substituindo $w = 0{,}4$ e $b = 2{,}7$ em $y_r = 0{,}4 \\cdot x[i] + 2{,}7$ e avaliando $y_r - y[i]$ para cada $i = 1, \\dots, 5$:

- **$i = 1$** ($x = 3, y = 7$):
  $$y_r = 0{,}4 \\times 3 + 2{,}7 = 1{,}2 + 2{,}7 = 3{,}9$$
  $$y_r - y[1] = 3{,}9 - 7 = -3{,}1 \\le 0 \\implies f[1] = -1 \\implies \\textbf{Plástico}$$

- **$i = 2$** ($x = 6, y = 6$):
  $$y_r = 0{,}4 \\times 6 + 2{,}7 = 2{,}4 + 2{,}7 = 5{,}1$$
  $$y_r - y[2] = 5{,}1 - 6 = -0{,}9 \\le 0 \\implies f[2] = -1 \\implies \\textbf{Plástico}$$

- **$i = 3$** ($x = 4, y = 4$):
  $$y_r = 0{,}4 \\times 4 + 2{,}7 = 1{,}6 + 2{,}7 = 4{,}3$$
  $$y_r - y[3] = 4{,}3 - 4 = +0{,}3 > 0 \\implies f[3] = +1 \\implies \\textbf{Vidro}$$

- **$i = 4$** ($x = 5, y = 3$):
  $$y_r = 0{,}4 \\times 5 + 2{,}7 = 2{,}0 + 2{,}7 = 4{,}7$$
  $$y_r - y[4] = 4{,}7 - 3 = +1{,}7 > 0 \\implies f[4] = +1 \\implies \\textbf{Vidro}$$

- **$i = 5$** ($x = 1, y = 2$):
  $$y_r = 0{,}4 \\times 1 + 2{,}7 = 0{,}4 + 2{,}7 = 3{,}1$$
  $$y_r - y[5] = 3{,}1 - 2 = +1{,}1 > 0 \\implies f[5] = +1 \\implies \\textbf{Vidro}$$

Sequência impressa pelo segundo laço: **Plástico, Plástico, Vidro, Vidro, Vidro.** — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Erra as classificações para $i = 2$ ($-0{,}9 \\implies$ Plástico) e $i = 4$ ($+1{,}7 \\implies$ Vidro).',
      B: 'Correta. Todos os cinco pontos foram avaliados exatamente contra o hiperplano linear $y = 0{,}4x + 2{,}7$: negativos para $i=1,2$ (Plástico) e positivos para $i=3,4,5$ (Vidro).',
      C: 'Incorreta. Inverte os resultados de $i = 2$ (Plástico) e $i = 3$ (Vidro).',
      D: 'Incorreta. Erra $i = 3$: $y_r = 4{,}3 > 4$, portanto $y_r - y[3] = +0{,}3 > 0$ (Vidro, não Plástico).',
      E: 'Incorreta. Erra $i = 2$, $i = 4$ e $i = 5$.',
    },
    keyConcept: 'Classificador linear (SVM): avaliação de pontos de teste em relação à fronteira de decisão $wx + b - y = 0$.',
  },
  {
    id: 'enade-2023-q30',
    source: 'enade-2023',
    year: 2023,
    number: 30,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Paralelismo, Dependência de Dados e Condição de Corrida (WAW)',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'facil',
    context: `Considere que, para melhorar o desempenho de sistemas computacionais, projetistas de *hardware* decidam aumentar o número de processadores em vez de aumentar a frequência de *clock*. Dessa forma, surge a necessidade de utilizar *softwares* que explorem o paralelismo. Um problema típico encontrado no desenvolvimento desse tipo de *software* é a dependência de dados. Nesse contexto, considere que dois processadores precisem realizar, simultaneamente, o acesso a uma mesma matriz \`A\`.`,
    command:
      'Com base nas informações apresentadas, com relação aos trechos de código em linguagem C apresentados a seguir, assinale a opção que apresenta uma situação de conflito de dados.',
    options: [
      {
        letter: 'A',
        text: `Processador 1:
\`\`\`c
int a = &A[0][0];
\`\`\`
Processador 2:
\`\`\`c
int b = &A[0][0];
\`\`\``,
      },
      {
        letter: 'B',
        text: `Processador 1:
\`\`\`c
*A[0][0] = 10;
\`\`\`
Processador 2:
\`\`\`c
*A[0][1] = 20;
\`\`\``,
      },
      {
        letter: 'C',
        text: `Processador 1:
\`\`\`c
*A[0][0] = 10;
\`\`\`
Processador 2:
\`\`\`c
int b = &A[0][0];
\`\`\``,
      },
      {
        letter: 'D',
        text: `Processador 1:
\`\`\`c
int a = &A[0][0];
\`\`\`
Processador 2:
\`\`\`c
*A[0][0] = 20;
\`\`\``,
      },
      {
        letter: 'E',
        text: `Processador 1:
\`\`\`c
*A[0][0] = 10;
\`\`\`
Processador 2:
\`\`\`c
*A[0][0] = 20;
\`\`\``,
      },
    ],
    correctOption: 'E',
    explanation: `Em computação paralela, existe **conflito de dados** (condição de corrida / dependência de dados: RAW, WAR ou WAW) quando dois processadores acessam **a mesma posição de memória** simultaneamente e **pelo menos um deles realiza escrita** no conteúdo dessa posição.

A chave desta questão está no operador \`&\` (*address-of*) da linguagem C:
- Em **\`int a = &A[0][0];\`** (ou \`int b = &A[0][0];\`), o operador \`&\` apenas calcula o **endereço de memória** da célula \`A[0][0]\` (valor fixo determinado pela localização da matriz), **sem ler o conteúdo armazenado** em \`*A[0][0]\`!
- Já em **\`*A[0][0] = 10;\`** e **\`*A[0][0] = 20;\`**, ambos os processadores **escrevem simultaneamente valores distintos no mesmo endereço de memória** apontado por \`A[0][0]\`!

Isso caracteriza um conflito de dados clássico do tipo **WAW (*Write-After-Write* / dependência de saída)**: o valor final na memória (10 ou 20) dependerá de forma não determinística de qual processador completar sua escrita por último.

Portanto, a única alternativa que apresenta conflito de dados real é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Ambos os processadores apenas obtêm o endereço `&A[0][0]` (sem escrita e nem leitura do conteúdo apontado) — nenhuma dependência/conflito.',
      B: 'Incorreta. Embora ambos escrevam, acessam posições distintas da matriz (`A[0][0]` e `A[0][1]`), permitindo execução paralela sem conflito de dados.',
      C: 'Incorreta. Atenção ao operador `&` em C: o Processador 2 obtém o endereço `&A[0][0]`, não lê o valor escrito em `*A[0][0]`. Como o endereço não muda com a escrita de `10`, não há conflito de dados.',
      D: 'Incorreta. Pelo mesmo motivo da alternativa C: `&A[0][0]` apenas captura o endereço da célula da matriz, sem ler o dado escrito pelo Processador 2.',
      E: 'Correta. Ambos os processadores executam escritas concorrentes (`10` e `20`) na mesma posição de memória (`*A[0][0]`), gerando conflito de escrita-escrita (WAW / condição de corrida).',
    },
    keyConcept: 'Dependências de dados em programação paralela (WAW — Write-After-Write) e diferença entre operador de endereço (`&`) e desreferenciação (`*`) em C.',
  },
  {
    id: 'enade-2023-q31',
    source: 'enade-2023',
    year: 2023,
    number: 31,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Teorema da Amostragem (Nyquist-Shannon) e Espectro de Sinais Amostrados',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `Um sinal em tempo contínuo pode ser processado, a partir de suas amostras, por um sistema que opere em tempo discreto. Para isso, é importante manter a taxa de amostragem do sinal suficientemente alta para permitir a reconstrução do sinal original sem erro ou com um erro dentro de uma dada tolerância.

*LATHI, B. P. **Sinais e Sistemas Lineares**, 2. ed., Porto Alegre: Bookman, 2007 (adaptado).*

Nesse contexto, considerando o teorema da amostragem, avalie as asserções a seguir e a relação proposta entre elas.

**I.** Para que um sinal contínuo seja reconstruído a partir de suas amostras é necessário que ele possua um espectro em frequência limitado e que a frequência de amostragem seja maior do que duas vezes a largura de faixa do sinal.

**PORQUE**

**II.** Na situação proposta, o espectro do sinal amostrado, será limitado em frequência, o que permitirá a reconstrução do sinal original antes da amostragem.`,
    command: 'A respeito dessas asserções, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.',
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
    correctOption: 'C',
    explanation: `Analisando rigorosamente pelo **Teorema da Amostragem de Nyquist-Shannon** (Lathi):

1. **Asserção I (VERDADEIRA):** Um sinal contínuo $g(t)$ limitado em faixa com largura de banda $B$ (isto é, $G(f) = 0$ para $|f| > B$) é unicamente determinado e perfeitamente reconstruível a partir de suas amostras uniformes se a taxa de amostragem satisfizer o critério de Nyquist:
   $$f_s > 2B$$

2. **Asserção II (FALSA):** A amostragem ideal corresponde a multiplicar $g(t)$ por um trem de impulsos $\\delta_{T_s}(t)$ no domínio do tempo. Pela propriedade da convolução na Transformada de Fourier, o espectro do sinal **amostrado** $G_s(f)$ consiste em **infinitas réplicas periódicas** do espectro original $G(f)$ centradas nos múltiplos inteiros de $f_s$:
   $$G_s(f) = f_s \\sum_{k=-\\infty}^{+\\infty} G(f - k f_s)$$
   Portanto, o espectro do **sinal amostrado** é **periódico e ILIMITADO em frequência** (estende-se de $-\\infty$ a $+\\infty$), e **NÃO** limitado em frequência! O que permite recuperar $G(f)$ com um filtro passa-baixa ideal de corte $B < f_c < f_s - B$ é que, com $f_s > 2B$, **não ocorre sobreposição (*aliasing*) entre essas réplicas periódicas**.

Logo, a asserção I é **verdadeira** e a asserção II é **falsa** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. A asserção II é falsa: quem é limitado em frequência é o sinal contínuo *original*, não o sinal *amostrado* (cujo espectro é uma repetição periódica infinita).',
      B: 'Incorreta. Classifica erroneamente a asserção II como verdadeira.',
      C: 'Correta. I enuncia exatamente o teorema da amostragem de Nyquist-Shannon ($f_s > 2B$ para sinal limitado em faixa) e II erra ao dizer que o espectro do sinal amostrado é limitado em frequência.',
      D: 'Incorreta. Inverte os valores lógicos das duas proposições.',
      E: 'Incorreta. A asserção I é a formulação clássica e verdadeira do teorema da amostragem.',
    },
    keyConcept: 'Teorema da Amostragem de Nyquist-Shannon ($f_s > 2B$): sinal original limitado em faixa vs. espectro periódico infinito do sinal amostrado sem aliasing.',
    reference: 'LATHI, B. P. Sinais e Sistemas Lineares. 2. ed. Porto Alegre: Bookman, 2007.',
  },
  {
    id: 'enade-2023-q32',
    source: 'enade-2023',
    year: 2023,
    number: 32,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Busca Heurística Gulosa (Greedy Best-First Search)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Suponha que uma empresa de transportes deseje calcular uma rota de Manaus para São Paulo utilizando a estratégia da busca gulosa, técnica de busca local que seleciona a melhor alternativa disponível a cada passo. Observe, a seguir, um grafo de conexão de cidades até o destino final e o quadro com estimativas de distância de São Paulo até as demais cidades do grafo.`,
    images: [
      {
        src: '/images/enade-2023/q32-fig.png',
        alt: 'À esquerda, grafo não direcionado com as cidades e conexões: Manaus liga-se a Macapá e Porto Velho; Macapá liga-se a Manaus, Belém e diretamente a São Paulo; Belém liga-se a Macapá e Palmas; Porto Velho liga-se a Manaus, Palmas e Cuiabá; Palmas liga-se a Belém, Porto Velho e Goiânia; Cuiabá liga-se a Porto Velho e Goiânia; Goiânia liga-se a Palmas, Cuiabá e São Paulo. À direita, tabela de distâncias heurísticas até São Paulo: Manaus 2 693 Km, Porto Velho 2 464 Km, Macapá 2 665 Km, Belém 2 463 Km, Palmas 1 489 Km, Cuiabá 1 326 Km, Goiânia 809 Km e São Paulo 0 Km.',
        caption: 'Grafo de conexões entre cidades e tabela de distâncias estimadas h(n) até São Paulo.',
      },
    ],
    command: 'Com base nessas informações, é correto afirmar que a solução encontrada a partir da utilização do algoritmo será',
    options: [
      { letter: 'A', text: 'Manaus → Macapá → São Paulo' },
      { letter: 'B', text: 'Manaus → Porto Velho → Cuiabá → Goiânia → São Paulo' },
      { letter: 'C', text: 'Manaus → Porto Velho → Palmas → Goiânia → São Paulo' },
      { letter: 'D', text: 'Manaus → Macapá → Belém → Palmas → Goiânia → São Paulo' },
      { letter: 'E', text: 'Manaus → Macapá → Belém → Palmas → Porto Velho → Cuiabá → Goiânia → São Paulo' },
    ],
    correctOption: 'B',
    explanation: `Na **busca gulosa** (*Greedy Best-First Search*), a cada passo o algoritmo expande o vértice vizinho que minimiza exclusivamente a função heurística $h(n)$ (distância estimada até o objetivo **São Paulo**), sem olhar para passos futuros:

1. **Partida: Manaus** ($h = 2693\\text{ km}$)
   - Vizinhos adjacentes no grafo:
     - **Macapá:** $h = 2665\\text{ km}$
     - **Porto Velho:** $h = 2464\\text{ km}$
   - Escolha gulosa (menor $h$): **Porto Velho** ($2464 < 2665$). *(Note que a busca gulosa **não** antevê que Macapá tem uma aresta direta para São Paulo!)*

2. **Em Porto Velho** ($h = 2464\\text{ km}$)
   - Vizinhos ainda não visitados:
     - **Palmas:** $h = 1489\\text{ km}$
     - **Cuiabá:** $h = 1326\\text{ km}$
   - Escolha gulosa (menor $h$): **Cuiabá** ($1326 < 1489$).

3. **Em Cuiabá** ($h = 1326\\text{ km}$)
   - Único vizinho ainda não visitado: **Goiânia** ($h = 809\\text{ km}$).
   - Escolha: **Goiânia**.

4. **Em Goiânia** ($h = 809\\text{ km}$)
   - Vizinhos ainda não visitados:
     - **Palmas:** $h = 1489\\text{ km}$
     - **São Paulo:** $h = 0\\text{ km}$
   - Escolha gulosa: **São Paulo** ($0 < 1489$) — **objetivo atingido!**

Portanto, a rota encontrada pela busca gulosa é:
**Manaus → Porto Velho → Cuiabá → Goiânia → São Paulo** — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Embora exista a aresta Macapá → São Paulo no grafo (caminho de menos saltos), a busca gulosa em Manaus compara apenas os vizinhos imediatos e escolhe Porto Velho (2 464 km) em vez de Macapá (2 665 km).',
      B: 'Correta. Segue rigorosamente a menor estimativa heurística local em cada vértice: Manaus → Porto Velho (2 464) → Cuiabá (1 326) → Goiânia (809) → São Paulo (0).',
      C: 'Incorreta. A partir de Porto Velho, a busca gulosa escolhe Cuiabá (1 326 km), que tem heurística menor que Palmas (1 489 km).',
      D: 'Incorreta. Parte erroneamente para Macapá (2 665 > 2 464) e, mesmo se fosse a Macapá, de lá iria direto para São Paulo (0 km) e não para Belém (2 463 km).',
      E: 'Incorreta. Viola repetidamente a regra gulosa (escolhe Macapá em vez de Porto Velho e Belém em vez de São Paulo).',
    },
    keyConcept: 'Busca heurística gulosa (Greedy Best-First Search): escolha míope baseada apenas em $f(n) = h(n)$, que não garante solução ótima.',
  },
  {
    id: 'enade-2023-q33',
    source: 'enade-2023',
    year: 2023,
    number: 33,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Controlador PID Discreto e Estruturas de Dados',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Considere que uma empresa planeje desenvolver um sistema de controle automático para manter, em um ambiente industrial, a temperatura constante por meio de um controlador proporcional-integral-derivativo (PID). O controlador PID pode ser implementado em qualquer linguagem que possua estruturas de dados adequadas para a manutenção do histórico e da taxa de mudança do sinal de erro.

Considerando essa situação, avalie as afirmações a seguir.

**I.** A implementação do componente Integral requer a soma de todos os erros acumulados desde o início da operação do sistema, o que torna necessário o uso de uma estrutura de dados do tipo fila.

**II.** A parte Proporcional do controlador PID é implementada ao ajustar, proporcionalmente, a variável de controle à diferença entre a temperatura desejada e a temperatura atual.

**III.** Uma pilha é adequada para o componente Derivativo, pois a taxa de mudança do erro é calculada apenas com a amostra mais recente e a anterior do sinal de erro.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'D',
    explanation: `Na forma discreta (com período de amostragem $\\Delta t$), a lei de controle PID é dada por:

$$u[k] = K_p \\cdot e[k] + K_i \\cdot \\sum_{j=0}^{k} e[j]\\,\\Delta t + K_d \\cdot \\frac{e[k] - e[k-1]}{\\Delta t}$$

onde $e[k] = T_{\\text{ref}} - T_{\\text{atual}}[k]$ é o erro no instante $k$.

Analisando cada afirmação:
- **Afirmação I (FALSA):** Para computar o somatório acumulado do termo Integral ($S[k] = S[k-1] + e[k]\\,\\Delta t$), **não é necessário** armazenar todo o histórico individual dos erros em uma fila (o que inclusive consumiria memória crescente ilimitada em operação contínua). Basta manter uma **única variável escalar acumuladora** (soma cumulativa)!
- **Afirmação II (VERDADEIRA):** A ação Proporcional é exatamente $P[k] = K_p \\cdot (T_{\\text{desejada}} - T_{\\text{atual}})$, ajustando o sinal de controle de forma diretamente proporcional ao erro instantâneo.
- **Afirmação III (VERDADEIRA):** A ação Derivativa estima a taxa de variação do erro a partir dos **dois valores mais recentes** ($e[k]$ e $e[k-1]$). Uma estrutura de pilha (*LIFO — Last-In, First-Out*) disponibiliza imediatamente no topo os elementos inseridos mais recentemente, sendo compatível com esse padrão de acesso (ainda que em sistemas embarcados também se possa otimizar mantendo apenas a variável \`erro_anterior\`).

Portanto, estão corretas apenas **II e III** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação I é falsa: o somatório integral exige apenas uma variável acumuladora atualizada iterativamente, tornando desnecessária uma fila com todo o histórico.',
      B: 'Incorreta. Omite a afirmação III, considerada correta pelo gabarito oficial por refletir o acesso LIFO às amostras mais recentes no termo derivativo.',
      C: 'Incorreta. Inclui a afirmação falsa I e exclui a afirmação verdadeira II.',
      D: 'Correta. Reúne exatamente II (definição exata da ação proporcional) e III (adequação do acesso LIFO às amostras mais recente e anterior na derivada numérica).',
      E: 'Incorreta. Inclui a afirmação falsa I (uma fila com todos os erros desde o início não é necessária e causaria estouro de memória em operação contínua).',
    },
    keyConcept: 'Controlador PID discreto (termos proporcional, integral acumulado e derivativo por diferenças finitas) e escolha de estruturas de dados.',
  },
  {
    id: 'enade-2023-q34',
    source: 'enade-2023',
    year: 2023,
    number: 34,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Gerenciamento de Filas e Controle de Congestionamento (FIFO, WFQ, PQ, RED)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Cada roteador em redes de computadores precisa implementar alguma estratégia de enfileiramento para controlar como os pacotes são armazenados em *buffer* enquanto esperam para serem transmitidos, independentemente do mecanismo de alocação de recursos. O algoritmo de enfileiramento aloca tanto largura de banda, ao transmitir pacotes, quanto espaço de *buffer*, ao decidir quais pacotes são descartados.

*PETERSON, L. L.; DAVIE, B. S. **Redes de Computadores**: uma abordagem de sistemas. Rio de Janeiro: Elsevier, 2013 (adaptado).*

Considerando as informações apresentadas, avalie as afirmações a seguir.

**I.** O algoritmo FIFO (*First-In, First-Out*) é adequado para situações em que o tráfego de dados com rajadas de longa duração provoca descarte de pacotes.

**II.** O algoritmo de enfileiramento justo ponderado (WFQ, do inglês *Weighted Fair Queuing*) permite definir um peso para cada fila, definindo quantos *bits* são transmitidos sempre que o roteador atender a uma determinada fila.

**III.** O algoritmo de enfileiramento por prioridade (PQ, do inglês *Priority Queuing*) evita que uma fila de menor prioridade fique indefinidamente sem ser atendida (*starvation*), utilizando o algoritmo *Round-Robin* para servir a todas as filas.

**IV.** Os roteadores que implementam o algoritmo de detecção antecipada aleatória (RED, do inglês *Random Early Detection*) mantêm a média acumulada do tamanho de suas filas e, quando esse tamanho ultrapassa, em algum enlace, um determinado limiar, uma fração dos pacotes é descartada aleatoriamente.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, II e III.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada política de enfileiramento e gerenciamento ativo de filas (AQM) segundo Peterson & Davie:

- **Afirmação I (FALSA):** O enfileiramento **FIFO** (tipicamente combinado com *tail-drop*) **não** é adequado para tráfego com rajadas longas: fluxos agressivos monopolizam o *buffer* e provocam descartes em rajada (afetando fluxos bem-comportados e interativos) e sincronização global do TCP.
- **Afirmação II (VERDADEIRA):** O **WFQ (*Weighted Fair Queuing*)** generaliza o *Fair Queuing* atribuindo um peso $w_i$ a cada fila/fluxo, controlando proporcionalmente quantos *bits* (fração de largura de banda) são transmitidos quando o roteador atende aquela fila.
- **Afirmação III (FALSA):** No **PQ (*Priority Queuing*)** estrito, o roteador sempre transmite primeiro todos os pacotes da fila de maior prioridade não vazia. Exatamente por **não** usar *Round-Robin* entre prioridades distintas, o PQ está sujeito a causar ***starvation* (inanição)** nas filas de menor prioridade quando há tráfego contínuo nas filas prioritárias!
- **Afirmação IV (VERDADEIRA):** O **RED (*Random Early Detection*)** calcula uma média móvel exponencial do comprimento da fila (\`AvgLen\`); quando \`AvgLen\` supera um limiar mínimo (\`MinTh\`), o roteador descarta (ou marca) pacotes aleatoriamente com probabilidade proporcional à ocupação, sinalizando antecipadamente o congestionamento às fontes antes que o *buffer* transborde.

Portanto, estão corretas apenas **II e IV** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Tanto I (FIFO sofre com rajadas longas) quanto III (PQ não usa Round-Robin e pode causar starvation) são falsas.',
      B: 'Incorreta. A afirmação I é falsa: FIFO/tail-drop não protege fluxos nem evita descartes severos em rajadas longas.',
      C: 'Correta. Descreve fielmente o funcionamento do WFQ (pesos por fila definindo taxa/bits transmitidos) e do RED (média do tamanho da fila + descarte aleatório antecipado acima do limiar).',
      D: 'Incorreta. Inclui as afirmações falsas I e III e exclui a verdadeira IV.',
      E: 'Incorreta. Inclui a afirmação falsa III (que confunde PQ estrito com WRR/Fair Queuing).',
    },
    keyConcept: 'Disciplinas de escalonamento de pacotes (FIFO, PQ, WFQ) e gerenciamento ativo de filas (RED) em roteadores.',
    reference: 'PETERSON, L. L.; DAVIE, B. S. Redes de Computadores: uma abordagem de sistemas. Rio de Janeiro: Elsevier, 2013.',
  },
  {
    id: 'enade-2023-q35',
    source: 'enade-2023',
    year: 2023,
    number: 35,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Camada de Transporte: TCP, UDP e Sockets em Sistemas Distribuídos',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `O TCP (*Transmission Control Protocol*) e o UDP (*User Datagram Protocol*) são opções frequentemente usadas em sistemas distribuídos para realizar transferência de dados entre máquinas, ainda que não sejam os únicos protocolos que funcionam com base no protocolo IP (*Internet Protocol*).

Com relação a esses protocolos, avalie as afirmações a seguir.

**I.** O protocolo TCP é usado para implementar o mecanismo de *sockets* utilizado em sistemas distribuídos, como mecanismo de troca de mensagens confiável.

**II.** O protocolo UDP é mais eficiente do que o protocolo TCP quanto ao tempo de envio de dados entre os nós de um sistema distribuído, pois gera menor *overhead*.

**III.** O protocolo UDP é uma escolha adequada para fluxos de dados em tempo real, especialmente daqueles dados que admitem perda ou corrupção de parte de seu conteúdo, tais como vídeos ou voz.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'II, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'I e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'E',
    explanation: `Comparando os dois principais protocolos da camada de transporte sobre IP:

- **Afirmação I (VERDADEIRA):** O TCP oferece serviço orientado à conexão com garantia de entrega, ordenação, controle de fluxo e retransmissão de segmentos perdidos; por isso, *sockets* TCP (\`SOCK_STREAM\`) constituem o mecanismo padrão de troca confiável de mensagens em sistemas distribuídos.
- **Afirmação II (VERDADEIRA):** O UDP não realiza *handshake* de abertura/fechamento de conexão, não mantém estado de retransmissão nem controle de congestionamento, e tem cabeçalho fixo de apenas 8 bytes (contra 20 a 60 bytes no TCP). Esse menor *overhead* resulta em menor latência de envio entre nós.
- **Afirmação III (VERDADEIRA):** Aplicações multimídia em tempo real (VoIP, videoconferência, *streaming* ao vivo) são muito sensíveis a atraso e *jitter*, mas toleram perdas pontuais de quadros/pacotes — um pacote retransmitido tardiamente pelo TCP já chegaria obsoleto. Logo, o UDP é amplamente adequado a esse perfil de tráfego.

Todas as três afirmações são corretas — alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Omite as afirmações I e III, que também são verdadeiras.',
      B: 'Incorreta. Omite as afirmações I e II, que também são verdadeiras.',
      C: 'Incorreta. Omite a afirmação III, que descreve o caso de uso clássico do UDP (voz e vídeo em tempo real).',
      D: 'Incorreta. Omite a afirmação II, que aponta corretamente o menor overhead e maior agilidade de envio do UDP.',
      E: 'Correta. I, II e III caracterizam com precisão os papéis e trade-offs de TCP e UDP na camada de transporte.',
    },
    keyConcept: 'Trade-offs da camada de transporte: confiabilidade e ordenação no TCP vs. baixo overhead e baixa latência no UDP para tempo real.',
  },
  {
    id: 'enade-2023-q36',
    source: 'enade-2023',
    year: 2023,
    number: 36,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Análise de Desempenho, Paralelismo e Lei de Amdahl',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `A análise de desempenho de sistemas computacionais é uma atividade crítica para identificar gargalos, otimizar recursos e garantir a eficiência do *hardware* e do *software* utilizados.`,
    command:
      'Nesse contexto, a respeito do impacto de desempenho gerado pelo número de *threads* e de núcleos de processamento em *hardware* e em *software*, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'O desempenho do sistema aumenta de maneira linear em relação ao aumento do número de *threads* e de núcleos de processamento.',
      },
      {
        letter: 'B',
        text: 'O número de *threads* tem um impacto direto no desempenho do sistema, enquanto a influência do número de núcleos de processamento é insignificante.',
      },
      {
        letter: 'C',
        text: 'O desempenho do sistema é afetado positivamente pelo aumento do número de *threads* e de núcleos de processamento até um certo limite dependente da aplicação.',
      },
      {
        letter: 'D',
        text: 'O número de núcleos de processamento tem um impacto direto no desempenho do sistema, independentemente do número de *threads* utilizado.',
      },
      {
        letter: 'E',
        text: 'O número de *threads* e de núcleos de processamento não possui relação direta com o desempenho do sistema, pois esse resultado é determinado, exclusivamente, por técnicas e por algoritmos utilizados no *software*.',
      },
    ],
    correctOption: 'C',
    explanation: `A escalabilidade de sistemas paralelos é regida pela **Lei de Amdahl**: se uma fração $p$ do tempo de execução de uma aplicação é paralelizável e $(1 - p)$ é inerentemente sequencial, o ganho máximo de desempenho (*speedup*) com $N$ núcleos é limitado superiormente por:

$$S(N) = \\frac{1}{(1 - p) + \\frac{p}{N}} \\xrightarrow{N \\to \\infty} \\frac{1}{1 - p}$$

Além da fração serial $(1 - p)$ intrínseca a cada aplicação, o aumento excessivo de *threads* e núcleos passa a sofrer retornos decrescentes (e até degradação) devido a:
- **Contenção por recursos compartilhados** (locks/mutexes, largura de banda de memória, coerência de cache);
- **Sobrecarga (*overhead*) de escalonamento e troca de contexto** quando há muitas *threads* competindo pelos núcleos físicos disponíveis;
- **Gargalos de E/S** em aplicações *I/O-bound*.

Portanto, aumentar o número de *threads* e núcleos melhora o desempenho **apenas até um certo limite dependente das características da aplicação** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. O ganho raramente é linear indefinidamente devido à Lei de Amdahl (fração sequencial), custos de sincronização e contenção de memória/cache.',
      B: 'Incorreta. Sem múltiplos núcleos físicos, múltiplas threads *CPU-bound* apenas se revezam no mesmo núcleo (concorrência sem paralelismo real), podendo até piorar o desempenho pelo overhead de troca de contexto.',
      C: 'Correta. Reflete exatamente a Lei de Amdahl e os custos práticos de sincronização/contenção dependentes do grau de paralelismo da aplicação.',
      D: 'Incorreta. Se a aplicação possuir apenas 1 *thread* (código estritamente sequencial), adicionar mais núcleos não acelera sua execução.',
      E: 'Incorreta. O desempenho real resulta da interação direta entre a arquitetura de hardware (núcleos, cache, memória) e o software (algoritmos e exploração de paralelismo via threads).',
    },
    keyConcept: 'Lei de Amdahl, speedup limitado pela fração sequencial e overhead de sincronização/troca de contexto em arquiteturas multicore.',
  },
  {
    id: 'enade-2023-q37',
    source: 'enade-2023',
    year: 2023,
    number: 37,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Segurança da Informação: Criptografia, Auditoria, Controle de Acesso e IDS/IPS',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `A segurança de sistemas de computação é uma preocupação crescente devido à constante evolução das ameaças e das vulnerabilidades presentes no ambiente digital. Garantir a integridade, a confidencialidade e a disponibilidade de dados e de recursos é essencial para proteger os sistemas e as informações sensíveis. A segurança abrange, também, aspectos como autenticação, controle de acesso, criptografia, detecção e prevenção de intrusões, entre outros mecanismos de proteção.

A respeito da segurança de sistemas de computação, avalie as afirmações a seguir.

**I.** A criptografia é um mecanismo que permite detectar a vulnerabilidade dos dados, tornando-os ilegíveis para usuários não autorizados.

**II.** A auditoria de segurança é o processo de verificação de identidade de um usuário ou de um sistema, garantindo que apenas entidades confiáveis tenham acesso aos recursos.

**III.** O controle de acesso consiste em definir e em gerenciar as permissões de usuários e de sistemas para acessar recursos e para realizar operações específicas.

**IV.** A detecção e a prevenção de intrusão são técnicas utilizadas para identificar atividades maliciosas em um sistema e para tomar medidas a fim de evitar a ocorrência dessas atividades.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'III e IV.' },
      { letter: 'D', text: 'I, II e III.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando rigorosamente a definição de cada mecanismo de segurança da informação:

- **Afirmação I (FALSA):** A criptografia protege a **confidencialidade** (cifrando dados para torná-los ilegíveis a não autorizados) e pode apoiar integridade/autenticidade (assinaturas digitais, HMAC), mas **não é um mecanismo para "detectar a vulnerabilidade dos dados"** (detecção de vulnerabilidades é feita por scanners, testes de intrusão/pentest e análise de código/configuração).
- **Afirmação II (FALSA):** Verificar a identidade de um usuário ou sistema é a definição de **autenticação** (e não de *auditoria de segurança*). A auditoria de segurança consiste no registro, monitoramento e revisão periódica de eventos (*logs*), políticas e controles para garantir rastreabilidade, responsabilização (*accountability*) e conformidade.
- **Afirmação III (VERDADEIRA):** Define com precisão o **controle de acesso** (autorização — ex.: DAC, MAC, RBAC, ABAC): definir e gerenciar quais sujeitos têm permissão para realizar quais operações sobre determinados objetos/recursos.
- **Afirmação IV (VERDADEIRA):** Define exatamente os sistemas **IDS** (*Intrusion Detection System* — identificar atividades maliciosas ou anômalas) e **IPS** (*Intrusion Prevention System* — agir proativamente para bloquear/mitigar essas atividades).

Logo, estão corretas apenas **III e IV** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Tanto I (atribui detecção de vulnerabilidades à criptografia) quanto II (confunde auditoria com autenticação) são falsas.',
      B: 'Incorreta. Inclui a afirmação falsa I e exclui a verdadeira III.',
      C: 'Correta. III define controle de acesso e IV define detecção e prevenção de intrusões (IDS/IPS) com exatidão.',
      D: 'Incorreta. Inclui as afirmações falsas I e II e exclui a verdadeira IV.',
      E: 'Incorreta. Inclui a afirmação falsa II (que descreve autenticação, não auditoria).',
    },
    keyConcept: 'Distinção entre mecanismos de segurança da informação: criptografia, autenticação vs. auditoria, controle de acesso e IDS/IPS.',
  },
  {
    id: 'enade-2023-q38',
    source: 'enade-2023',
    year: 2023,
    number: 38,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Arquitetura de Software: Microsserviços em Sistemas Distribuídos',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Os sistemas distribuídos consistem em múltiplos componentes de *software* que se comunicam e que cooperam entre si para realizar tarefas complexas. Um padrão arquitetural comumente utilizado em sistemas distribuídos é o de microsserviços, o qual divide o sistema em componentes independentes e escaláveis, cada um executando sua própria funcionalidade específica. Essa abordagem facilita a manutenção, o teste e a escalabilidade do sistema como um todo.`,
    command:
      'Em relação a esse tema, qual dos seguintes benefícios é associado à arquitetura de microsserviços em sistemas distribuídos?',
    options: [
      { letter: 'A', text: 'Capacidade de escalabilidade.' },
      { letter: 'B', text: 'Garantia de consistência de dados.' },
      { letter: 'C', text: 'Melhor desempenho de processamento.' },
      { letter: 'D', text: 'Menor consumo de recursos de *hardware*.' },
      { letter: 'E', text: 'Redução da complexidade de comunicação entre os componentes.' },
    ],
    correctOption: 'A',
    explanation: `Na arquitetura de **microsserviços**, uma aplicação é decomposta em pequenos serviços fracamente acoplados, implantáveis de forma independente e responsáveis por domínios bem delimitados (*bounded contexts*).

Seu principal benefício — destacado inclusive no enunciado — é a **capacidade de escalabilidade independente e granular**: se apenas o serviço de pagamentos ou busca sofrer pico de demanda, é possível replicar exclusivamente esse microsserviço (escalabilidade horizontal seletiva), sem precisar escalar a aplicação inteira como ocorre em arquiteturas monolíticas.

Por outro lado, as demais alternativas listam justamente os **desafios/*trade-offs* conhecidos** dos microsserviços (consistência distribuída mais complexa, latência de chamadas remotas, maior consumo base de infraestrutura e maior complexidade de comunicação em rede).

Logo, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Microsserviços permitem escalar cada serviço de forma independente e elástica de acordo com a demanda específica de cada funcionalidade.',
      B: 'Incorreta. Como cada microsserviço normalmente mantém seu próprio banco de dados (*database per service*), garantir consistência forte torna-se mais difícil, recorrendo-se frequentemente à consistência eventual e padrões como Saga.',
      C: 'Incorreta. Chamadas entre serviços ocorrem via rede (HTTP/REST, gRPC, filas) com serialização/desserialização, adicionando latência em comparação a chamadas locais em memória de um monólito.',
      D: 'Incorreta. Manter múltiplos processos, contêineres, bancos de dados independentes, gateways e observabilidade tende a aumentar o consumo base de CPU e RAM.',
      E: 'Incorreta. A comunicação interprocessos distribuída eleva significativamente a complexidade (descoberta de serviços, tolerância a falhas parciais, circuit breakers, rastreamento distribuído).',
    },
    keyConcept: 'Arquitetura de microsserviços: escalabilidade independente e implantação autônoma vs. trade-offs de comunicação distribuída e consistência eventual.',
  },
];
