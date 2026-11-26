import type { StudyModule } from '../types/enade';

export const STUDY_MODULES_PART_1: StudyModule[] = [
  // =========================================================================
  // MÓDULO 1: ALGORITMOS, PROGRAMAÇÃO EM C E ESTRUTURAS DE DADOS
  // =========================================================================
  {
    id: 'algoritmos-ed',
    title: 'Algoritmos, Programação em C e Estruturas de Dados',
    subtitle: 'Linguagem C, ponteiros, complexidade assintótica, estruturas lineares, árvores AVL, ordenação e grafos',
    estimatedMinutes: 95,
    overview:
      'Este módulo é o núcleo absoluto da formação do Engenheiro da Computação e concentra o maior volume de questões técnicas e discursivas do Componente Específico (CE) do ENADE. Dominar linguagem C no nível de memória (ponteiros, tipos e alocação dinâmica), analisar rigorosamente o custo assintótico de algoritmos e escolher a estrutura de dados ótima para cada problema garante pontos decisivos tanto nas questões objetivas quanto nas discursivas de código e rastreamento.',
    enadeWeightNote:
      'O INEP cobra recorrentemente: (1) discursivas pedindo funções em C com atenção a tipos numéricos e ponteiros (ex.: divisão inteira `1/i` no ENADE 2019 D4); (2) rastreamento passo a passo de inserções e rotações em Árvores AVL (ENADE 2019 D3); (3) contagem exata de comparações e complexidade Big-O em algoritmos de busca, ordenação e eliminação de duplicatas (ENADE 2023 D2); e (4) interpretação de mapas de memória envolvendo ponteiros, vetores e estruturas lineares (pilha/fila).',
    sections: [
      {
        id: 'alg-c-ponteiros',
        title: '1. Linguagem C Essencial, Tipos, Ponteiros e Mapa de Memória',
        content: `A linguagem C oferece controle direto sobre tipos primitivos e endereços de memória, razão pela qual o ENADE a utiliza como linguagem padrão de algoritmos e programação de baixo nível.

### Tipos Primitivos, Promoção Numérica e Divisão Inteira
Em C, o tipo dos operandos define qual operação a CPU executará. Se **ambos os operandos** de \`/\` forem inteiros (\`int\`, \`long\`, \`short\`), o compilador gera uma **divisão inteira** que descarta a parte fracionária (truncamento em direção a zero). Para obter divisão real, ao menos um operando deve ser \`float\` ou \`double\` (ex.: \`1.0 / i\` ou \`(double) a / b\`).

| Tipo em C | Tamanho Típico (32/64 bits) | Faixa / Precisão Aproximada | Especificador \`printf\` / \`scanf\` |
| :--- | :--- | :--- | :--- |
| \`char\` (signed) | 1 byte (8 bits) | $-128$ a $+127$ | \`%c\` ou \`%hhd\` |
| \`unsigned char\` | 1 byte (8 bits) | $0$ a $255$ | \`%hhu\` |
| \`int\` | 4 bytes (32 bits) | $-2^{31}$ a $2^{31}-1$ ($\\approx \\pm 2{,}14 \\times 10^9$) | \`%d\` |
| \`unsigned int\` | 4 bytes (32 bits) | $0$ a $2^{32}-1$ ($\\approx 4{,}29 \\times 10^9$) | \`%u\` |
| \`float\` | 4 bytes (IEEE 754) | $\\approx 6$ a $7$ dígitos significativos | \`%f\` |
| \`double\` | 8 bytes (IEEE 754) | $\\approx 15$ a $17$ dígitos significativos | \`%lf\` (no \`scanf\`) / \`%f\` (no \`printf\`) |
| Ponteiro (\`T *\`) | 4 bytes (32 bits) / 8 bytes (64 bits) | Endereço linear de memória | \`%p\` |

### Ponteiros, Endereços e Aritmética de Ponteiros
Um **ponteiro** é uma variável cujo conteúdo armazenado na memória é o **endereço** de outra variável:
- Operador \`&\` (*address-of*): obtém o endereço de memória de uma variável.
- Operador \`*\` (*dereference*): acessa o conteúdo armazenado no endereço apontado pelo ponteiro.
- **Aritmética de ponteiros**: somar $k$ a um ponteiro \`T *p\` não soma $k$ bytes, mas sim $k \\times \\text{sizeof}(T)$ bytes! Em um vetor \`int v[10]\`, \`v[i]\` é sintaticamente equivalente a \`*(v + i)\`.

### Organização da Memória de um Processo C
- **Segmento de Código (Text):** instruções compiladas (somente leitura).
- **Segmento de Dados / BSS:** variáveis globais e \`static\` (inicializadas em Data, zeradas em BSS).
- **Pilha (Stack):** variáveis locais, parâmetros e endereços de retorno; alocação e liberação automáticas (LIFO), tamanho limitado.
- **Heap:** alocação dinâmica via \`malloc\` (lixo de memória), \`calloc\` (inicializa com zero) e \`realloc\` (redimensiona). Exige \`free(ptr)\` explícito para evitar **vazamento de memória** (*memory leak*), seguido de \`ptr = NULL\` para evitar **ponteiro pendente** (*dangling pointer*).

### Exemplo Resolvido Passo a Passo (Mapa de Memória)
Considere uma arquitetura de 32 bits (\`int\` e ponteiros ocupam 4 bytes) onde \`int salario1 = 6750;\` é alocada no endereço \`0x0070\`, e executamos:
\`int *ptr = &salario1;\` (alocada em \`0x0074\`).
1. Convertemos $6750_{10}$ para hexadecimal: $6750 = 1 \\times 4096 + 10 \\times 256 + 5 \\times 16 + 14 = \\text{0x00001A5E}$.
2. Nos endereços \`0x0070\` a \`0x0073\` ficam armazenados os 4 bytes de \`0x00001A5E\` (em Little-Endian: \`5E 1A 00 00\`).
3. O conteúdo da variável \`ptr\` (endereços \`0x0074\` a \`0x0077\`) **não é 6750**, mas sim o endereço \`0x00000070\` (em Little-Endian: \`70 00 00 00\`).
4. A expressão \`*ptr\` acessa o endereço \`0x0070\` e retorna \`6750\`; já \`ptr + 1\` resulta no endereço \`0x0074\` (pois \`sizeof(int) = 4\`).`,
        keyFormulas: [
          {
            label: 'Endereço de elemento em vetor 1D',
            latex: '\\text{Addr}(A[i]) = \\text{Base}(A) + i \\cdot \\text{sizeof}(T)',
            note: 'Em C, índices iniciam em 0 e a aritmética de ponteiros multiplica automaticamente por sizeof(T).',
          },
          {
            label: 'Endereço em matriz 2D (Row-Major em C)',
            latex: '\\text{Addr}(M[i][j]) = \\text{Base}(M) + (i \\cdot N_{\\text{col}} + j) \\cdot \\text{sizeof}(T)',
            note: 'C armazena matrizes linha por linha; percorrer por linhas maximiza acertos na cache.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Divisão real, passagem por referência e alocação dinâmica segura em C',
          code: `#include <stdio.h>
#include <stdlib.h>

// Calcula a soma harmônica H(n) = 1 + 1/2 + ... + 1/n evitando truncamento inteiro
double serie_harmonica(int n) {
    double soma = 0.0;
    for (int i = 1; i <= n; i++) {
        // ERRO CLÁSSICO: (1 / i) gera 0 para todo i > 1!
        soma += 1.0 / i; // 1.0 (double) promove 'i' para double
    }
    return soma;
}

// Passagem por referência via ponteiros para trocar dois inteiros
void trocar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int n = 5;
    int *v = (int *) calloc((size_t)n, sizeof(int));
    if (v == NULL) return 1; // Sempre validar retorno de malloc/calloc

    for (int i = 0; i < n; i++) {
        *(v + i) = (i + 1) * 10; // Equivalente a v[i] = (i + 1) * 10
    }
    trocar(&v[0], &v[n - 1]);
    printf("H(%d) = %.4f | v[0]=%d, v[4]=%d\\n", n, serie_harmonica(n), v[0], v[4]);

    free(v);
    v = NULL; // Evita dangling pointer
    return 0;
}`,
        },
      },
      {
        id: 'alg-complexidade-recursao',
        title: '2. Análise de Complexidade Assintótica, Recorrências e Recursão',
        content: `A análise assintótica mede como o tempo de execução $T(n)$ ou o espaço em memória $S(n)$ cresce em função do tamanho da entrada $n$, abstraindo constantes de máquina e detalhes de compilador.

### Notações Assintóticas Fundamentais
- **Big-O — $O(g(n))$ (limite superior assintótico):** $f(n) \\in O(g(n))$ se existem constantes $c > 0$ e $n_0 \\ge 0$ tais que $0 \\le f(n) \\le c \\cdot g(n)$ para todo $n \\ge n_0$. Representa o teto de crescimento (muito usado para expressar o **pior caso**, embora também possa descrever caso médio ou melhor caso).
- **Big-Omega — $\\Omega(g(n))$ (limite inferior assintótico):** $f(n) \\ge c \\cdot g(n)$ para todo $n \\ge n_0$.
- **Big-Theta — $\\Theta(g(n))$ (limite assintótico justo):** ocorre se e somente se $f(n) \\in O(g(n))$ e $f(n) \\in \\Omega(g(n))$ simultaneamente.

| Classe Assintótica | Nome | Exemplo Clássico | Operações ($n=100$) | Operações ($n=10^6$) |
| :--- | :--- | :--- | :--- | :--- |
| $O(1)$ | Constante | Acesso em vetor, push/pop em pilha | $1$ | $1$ |
| $O(\\log n)$ | Logarítmica | Busca binária, busca em AVL | $\\approx 7$ | $\\approx 20$ |
| $O(n)$ | Linear | Busca sequencial, soma de vetor | $100$ | $10^6$ |
| $O(n \\log n)$ | Linearítmica | Mergesort, Heapsort, Quicksort médio | $\\approx 664$ | $\\approx 2 \\times 10^7$ |
| $O(n^2)$ | Quadrática | Insertion/Selection/Bubble Sort, laço duplo | $10^4$ | $10^{12}$ |
| $O(2^n)$ | Exponencial | Subconjuntos, Fibonacci recursivo ingênuo | $\\approx 1{,}26 \\times 10^{30}$ | Inviável |
| $O(n!)$ | Fatorial | Permutações, Caixeiro Viajante força bruta | $\\approx 9{,}3 \\times 10^{157}$ | Inviável |

### Contagem Exata em Laços Aninhados (Padrão ENADE 2023 D2)
Um problema clássico do ENADE consiste em eliminar duplicatas de uma lista $X$ com $N$ elementos, inserindo em uma tabela $Y$ cada elemento apenas se ele ainda não estiver em $Y$ (usando busca linear em $Y$).
- **Pior caso:** todos os $N$ elementos de $X$ são distintos! O 1º elemento faz $0$ comparações; o 2º faz $1$; o 3º faz $2$; ...; o $N$-ésimo faz $N-1$ comparações.
- **Total de comparações:**
$$C(N) = \\sum_{k=0}^{N-1} k = 0 + 1 + 2 + \\dots + (N-1) = \\frac{N(N-1)}{2} = \\frac{N^2 - N}{2} = \\Theta(N^2)$$
- **Como otimizar?** Ordenar $X$ previamente com Mergesort/Heapsort em $O(N \\log N)$ e fazer uma única varredura linear $O(N)$ comparando elementos adjacentes (custo total $O(N \\log N)$), ou usar Tabela Hash para custo médio $O(N)$.

### Teorema Mestre para Recorrências de Divisão e Conquista
Para recorrências da forma $T(n) = a\\,T(n/b) + f(n)$ com $a \\ge 1$ e $b > 1$, definimos o expoente crítico $c_{\\text{crit}} = \\log_b a$:
1. **Caso 1 (folhas dominam):** se $f(n) = O(n^{c_{\\text{crit}} - \\epsilon})$ para algum $\\epsilon > 0$, então $T(n) = \\Theta(n^{\\log_b a})$.
2. **Caso 2 (equilíbrio por nível):** se $f(n) = \\Theta(n^{c_{\\text{crit}}} \\log^k n)$ com $k \\ge 0$, então $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.
3. **Caso 3 (raiz domina):** se $f(n) = \\Omega(n^{c_{\\text{crit}} + \\epsilon})$ e vale a condição de regularidade $a f(n/b) \\le c f(n)$ ($c < 1$), então $T(n) = \\Theta(f(n))$.

**Exemplos resolvidos com o Teorema Mestre:**
- **Busca Binária:** $T(n) = T(n/2) + O(1) \\Rightarrow a=1, b=2, c_{\\text{crit}} = \\log_2 1 = 0$. Como $f(n) = \\Theta(n^0)$, aplica-se o Caso 2 ($k=0$): $T(n) = \\Theta(\\log n)$.
- **Mergesort:** $T(n) = 2T(n/2) + \\Theta(n) \\Rightarrow a=2, b=2, c_{\\text{crit}} = \\log_2 2 = 1$. Como $f(n) = \\Theta(n^1)$, aplica-se o Caso 2 ($k=0$): $T(n) = \\Theta(n \\log n)$.
- **Algoritmo de Strassen (multiplicação de matrizes):** $T(n) = 7T(n/2) + \\Theta(n^2) \\Rightarrow c_{\\text{crit}} = \\log_2 7 \\approx 2{,}81 > 2$. Caso 1: $T(n) = \\Theta(n^{\\log_2 7})$.

### Recursão e Pilha de Chamadas
Toda função recursiva exige: (1) **caso base** (condição de parada que impede *stack overflow*) e (2) **chamada recursiva** que reduza o problema rumo ao caso base. Cada chamada empilha um *stack frame* (parâmetros, variáveis locais, endereço de retorno), consumindo memória proporcional à profundidade máxima da recursão: $O(n)$ no fatorial recursivo e $O(\\log n)$ na busca binária recursiva.`,
        keyFormulas: [
          {
            label: 'Soma de P.A. em laços triangulares',
            latex: '\\sum_{k=0}^{N-1} k = \\frac{N(N-1)}{2} = \\Theta(N^2)',
            note: 'Base para análise de Bubble/Selection/Insertion Sort e busca linear acumulada.',
          },
          {
            label: 'Teorema Mestre',
            latex: 'T(n) = a\\,T\\!\\left(\\frac{n}{b}\\right) + f(n), \\qquad c_{\\text{crit}} = \\log_b a',
            note: 'Compara f(n) com n^(log_b a) para resolver recorrências de divisão e conquista.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Eliminação de duplicatas: comparação entre O(N^2) e abordagem recursiva O(log N)',
          code: `#include <stdio.h>

// Versão O(N^2) no pior caso: até N*(N-1)/2 comparações
int remover_duplicatas_linear(const int X[], int N, int Y[]) {
    int tamY = 0;
    for (int i = 0; i < N; i++) {
        int encontrado = 0;
        for (int j = 0; j < tamY; j++) {
            if (X[i] == Y[j]) {
                encontrado = 1;
                break;
            }
        }
        if (!encontrado) {
            Y[tamY++] = X[i];
        }
    }
    return tamY;
}

// Busca Binária recursiva: T(n) = T(n/2) + O(1) => O(log n) tempo e espaço
int busca_binaria_rec(const int v[], int ini, int fim, int chave) {
    if (ini > fim) return -1;               // Caso base: não encontrado
    int meio = ini + (fim - ini) / 2;       // Evita overflow de (ini + fim)
    if (v[meio] == chave) return meio;      // Caso base: encontrado
    if (chave < v[meio])
        return busca_binaria_rec(v, ini, meio - 1, chave);
    return busca_binaria_rec(v, meio + 1, fim, chave);
}`,
        },
      },
      {
        id: 'alg-lineares-hash',
        title: '3. Estruturas Lineares (Listas, Pilhas, Filas, Heaps) e Tabelas Hash',
        content: `A escolha entre estruturas contíguas e encadeadas determina diretamente o desempenho de acesso, inserção, remoção e uso da memória cache.

### Vetores vs. Listas Encadeadas
| Operação | Vetor Estático / Dinâmico | Lista Simplesmente Encadeada | Lista Duplamente Encadeada |
| :--- | :--- | :--- | :--- |
| Acesso por índice \`A[i]\` | $O(1)$ | $O(n)$ | $O(n)$ |
| Inserção / remoção no início | $O(n)$ (deslocamento) | $O(1)$ | $O(1)$ |
| Inserção no final (com ponteiro \`fim\`) | $O(1)$ amortizado | $O(1)$ | $O(1)$ |
| Remoção no final (com ponteiro \`fim\`) | $O(1)$ | $O(n)$ (precisa do anterior) | $O(1)$ (tem \`ant\`) |
| Busca por valor (não ordenado) | $O(n)$ | $O(n)$ | $O(n)$ |
| Localidade espacial (cache) | Excelente (contíguo) | Baixa (nós dispersos no heap) | Baixa + overhead de 2 ponteiros |

### Pilhas (Stacks — LIFO) e Filas (Queues — FIFO)
- **Pilha (LIFO — *Last In, First Out*):** inserções (\`push\`) e remoções (\`pop\`) ocorrem apenas no **topo**, ambas em $O(1)$. Aplicações clássicas: pilha de execução de chamadas recursivas, avaliação de expressões posfixas (Notação Polonesa Reversa), verificação de balanceamento de parênteses, algoritmo DFS e botão *Desfazer (Undo)*.
- **Fila (FIFO — *First In, First Out*):** inserções (\`enqueue\`) ocorrem no **fim** e remoções (\`dequeue\`) no **início**, ambas em $O(1)$. Quando implementada sobre vetor de capacidade $M$, usa-se **fila circular** com aritmética modular: \`fim = (fim + 1) % M\` e \`inicio = (inicio + 1) % M\`, evitando deslocamento $O(n)$ dos elementos. Aplicações: BFS, escalonamento Round-Robin, filas de impressão e buffers de rede.

### Heaps Binários (Filas de Prioridade)
Um **Heap Binário** é uma árvore binária **completa** armazenada de forma compacta em um vetor (sem ponteiros!).
- Em um **Max-Heap**, todo nó pai é maior ou igual aos seus filhos (raiz = maior elemento). Em um **Min-Heap**, todo pai é menor ou igual aos filhos (raiz = menor elemento).
- **Relações de índices (vetor começando em 0):** pai de $i$ é $\\lfloor (i-1)/2 \\rfloor$; filho esquerdo é $2i + 1$; filho direito é $2i + 2$.
- **Complexidades:** consulta ao máximo/mínimo $O(1)$; inserção (*sift-up*) $O(\\log n)$; extração da raiz (*sift-down / heapify*) $O(\\log n)$; construção de heap a partir de vetor desordenado (\`build-heap\` bottom-up) é **$O(n)$** (pegadinha clássica: não é $O(n \\log n)$!).

### Tabelas Hash (Dispersão)
Mapeiam chaves $k$ para posições de uma tabela de tamanho $m$ por meio de uma função hash $h(k)$ (ex.: método da divisão $h(k) = k \\bmod m$, preferencialmente com $m$ primo). O **fator de carga** é $\\alpha = n / m$.
Quando $k_1 \\neq k_2$ produzem $h(k_1) = h(k_2)$, ocorre uma **colisão**, tratada por dois grandes métodos:
1. **Encadeamento Separado (*Separate Chaining*):** cada posição da tabela aponta para uma lista encadeada de chaves colidentes. Permite $\\alpha > 1$. Busca média $O(1 + \\alpha)$, pior caso $O(n)$.
2. **Endereçamento Aberto (*Open Addressing*):** todas as chaves ficam dentro da própria tabela ($\\alpha \\le 1$). Ao colidir, busca-se outro slot livre por:
   - **Sondagem Linear:** $h(k, i) = (h(k) + i) \\bmod m$ — simples, mas sofre de **agrupamento primário** (*primary clustering*).
   - **Sondagem Quadrática:** $h(k, i) = (h(k) + c_1 i + c_2 i^2) \\bmod m$ — reduz agrupamento primário, sujeita a agrupamento secundário.
   - **Hash Duplo:** $h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$ — melhor distribuição, exige $h_2(k) \\neq 0$ e coprimo com $m$.

### Exemplo Resolvido Passo a Passo (Tabela Hash com Sondagem Linear)
Insira as chaves \`22, 15, 29, 8\` em uma tabela de tamanho $m = 7$ com $h(k) = k \\bmod 7$ e sondagem linear:
1. \`22\`: $22 \\bmod 7 = 1$ → livre → armazena no índice **1**.
2. \`15\`: $15 \\bmod 7 = 1$ → colisão em 1! Tenta $(1+1) \\bmod 7 = 2$ → livre → armazena no índice **2**.
3. \`29\`: $29 \\bmod 7 = 1$ → colisão em 1 e 2! Tenta índice **3** → livre → armazena no índice **3**.
4. \`8\`: $8 \\bmod 7 = 1$ → colisões em 1, 2, 3 → armazena no índice **4**.
Note o agrupamento primário formando um bloco contíguo nos índices 1–4. Na remoção em endereçamento aberto, nunca se marca o slot apenas como "vazio", mas sim como **tombstone (removido)** para não interromper buscas futuras de chaves deslocadas!`,
        keyFormulas: [
          {
            label: 'Navegação em Heap Binário (base 0)',
            latex: '\\text{pai}(i) = \\left\\lfloor \\frac{i - 1}{2} \\right\\rfloor, \\quad \\text{esq}(i) = 2i + 1, \\quad \\text{dir}(i) = 2i + 2',
            note: 'Permite representar uma árvore completa diretamente em vetor sem overhead de ponteiros.',
          },
          {
            label: 'Fator de Carga da Tabela Hash',
            latex: '\\alpha = \\frac{n}{m}',
            note: 'n = elementos armazenados; m = tamanho da tabela. Rehash é disparado quando α ultrapassa o limiar (ex.: 0,7).',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Fila Circular em vetor (FIFO) com operações O(1)',
          code: `#include <stdio.h>
#define CAP 8

typedef struct {
    int dados[CAP];
    int inicio;
    int fim;
    int qtd;
} FilaCircular;

void init_fila(FilaCircular *f) {
    f->inicio = 0;
    f->fim = 0;
    f->qtd = 0;
}

int enqueue(FilaCircular *f, int valor) {
    if (f->qtd == CAP) return 0; // Fila cheia (overflow)
    f->dados[f->fim] = valor;
    f->fim = (f->fim + 1) % CAP; // Avanço circular O(1)
    f->qtd++;
    return 1;
}

int dequeue(FilaCircular *f, int *saida) {
    if (f->qtd == 0) return 0;   // Fila vazia (underflow)
    *saida = f->dados[f->inicio];
    f->inicio = (f->inicio + 1) % CAP;
    f->qtd--;
    return 1;
}`,
        },
      },
      {
        id: 'alg-arvores-avl',
        title: '4. Árvores Binárias, ABB, Árvores AVL e Árvores B',
        content: `Árvores são estruturas hierárquicas acíclicas conexas. Em provas do ENADE, percursos, remoções em Árvore Binária de Busca (ABB) e rotações em Árvores AVL aparecem com altíssima frequência — inclusive em questões discursivas completas (como ENADE 2019 D3).

### Propriedades e Percursos em Árvores Binárias
- **Altura de um nó:** maior número de arestas do nó até uma folha. Por convenção padrão: **folha tem altura $0$** e **subárvore vazia (\`NULL\`) tem altura $-1$** (alguns livros adotam folha $= 1$ e vazia $= 0$; em ambos os casos, a diferença $h_{esq} - h_{dir}$ resulta no **mesmo fator de balanceamento**!).
- Uma árvore binária com $n$ nós tem altura mínima $\\lfloor \\log_2 n \\rfloor$ (completa/cheia) e altura máxima $n - 1$ (degenerada em lista).
- **Os 4 Percursos Clássicos:**
  - **Pré-Ordem (Raiz → Esq → Dir):** útil para clonar/serializar a árvore e gerar notação prefixa.
  - **Em-Ordem (Esq → Raiz → Dir):** em uma **ABB**, visita todas as chaves em **ordem crescente**!
  - **Pós-Ordem (Esq → Dir → Raiz):** visita filhos antes do pai; ideal para liberar memória (\`free\`) e avaliar árvores de expressão (notação posfixa).
  - **Em Largura (Nível a Nível):** utiliza uma **Fila (FIFO)** para percorrer cada profundidade da esquerda para a direita.

### Árvore Binária de Busca (ABB / BST)
Invariante fundamental: para todo nó $v$, todas as chaves da subárvore esquerda são **menores** que $v$, e todas as da subárvore direita são **maiores** que $v$.
- **Busca e inserção:** $O(h)$, onde $h = O(\\log n)$ se balanceada e $O(n)$ no pior caso (inserir chaves já ordenadas degenera a ABB em uma lista!).
- **Remoção em ABB (3 casos):**
  1. **Nó folha:** remove diretamente.
  2. **Nó com 1 filho:** substitui o nó pelo seu único filho.
  3. **Nó com 2 filhos:** substitui a chave do nó pelo seu **sucessor em-ordem** (menor elemento da subárvore direita) ou pelo **predecessor em-ordem** (maior elemento da subárvore esquerda) e remove o nó substituto (que garantidamente tem no máximo 1 filho).

### Árvores AVL (Adelson-Velsky e Landis)
É uma ABB **autobalanceada** na qual, para todo nó $v$, o **Fator de Balanceamento (FB)** obedece a:
$$FB(v) = h(v_{esq}) - h(v_{dir}) \\in \\{-1, 0, +1\\}$$
Sempre que uma inserção ou remoção viola essa invariante ($FB = +2$ ou $FB = -2$), aplica-se uma rotação no **nó desbalanceado mais próximo da folha** (menor ancestral com $\\lvert FB \\rvert = 2$):

| Caso de Desbalanceamento | Condição nos Fatores de Balanceamento | Rotação Aplicada |
| :--- | :--- | :--- |
| **LL (Esquerda-Esquerda)** | $FB(v) = +2$ e $FB(v_{esq}) \\ge 0$ | **Rotação Simples à Direita** em $v$ |
| **RR (Direita-Direita)** | $FB(v) = -2$ e $FB(v_{dir}) \\le 0$ | **Rotação Simples à Esquerda** em $v$ |
| **LR (Esquerda-Direita)** | $FB(v) = +2$ e $FB(v_{esq}) < 0$ | **Rotação Dupla à Direita:** esquerda em $v_{esq}$, depois direita em $v$ |
| **RL (Direita-Esquerda)** | $FB(v) = -2$ e $FB(v_{dir}) > 0$ | **Rotação Dupla à Esquerda:** direita em $v_{dir}$, depois esquerda em $v$ |

### Exemplo Resolvido Passo a Passo (Inserção e Rotações em AVL)
Vamos inserir a sequência \`9, 27, 50, 15, 2, 21\` em uma árvore AVL inicialmente vazia:
1. **Insere \`9\`:** raiz \`9\` ($FB=0$).
2. **Insere \`27\`:** filho direito de \`9\`. $FB(9) = (-1) - 0 = -1$ (balanceada).
3. **Insere \`50\`:** filho direito de \`27\`. Agora $FB(27) = -1$ e $FB(9) = (-1) - 1 = -2$! Caso **RR** ($FB(9) = -2, FB(27) = -1$) → **Rotação Simples à Esquerda em \`9\`**: \`27\` sobe para raiz, \`9\` vira filho esquerdo de \`27\`, \`50\` permanece filho direito de \`27\`. Todos ficam com $FB = 0$.
4. **Insere \`15\`:** vai à esquerda de \`27\` e à direita de \`9\`. $FB(9) = -1$, $FB(27) = +1$ (balanceada).
5. **Insere \`2\`:** filho esquerdo de \`9\`. Agora \`9\` tem filhos \`2\` e \`15\` ($FB(9) = 0$, $FB(27) = +1$, balanceada).
6. **Insere \`21\`:** filho direito de \`15\`. Recalculando alturas de baixo para cima: $h(21)=0$, $h(15)=1$ ($FB=-1$), $h(9)=2$ ($FB=0 - 1 = -1$), $h(27)=3$ com $h_{esq}(27)=2$ e $h_{dir}(27)=0 \\Rightarrow FB(27) = +2$! Como $FB(27) = +2$ e seu filho esquerdo \`9\` tem $FB(9) = -1 < 0$, temos o caso **LR (Esquerda-Direita)**!
   - **1º passo (Rotação à Esquerda em \`9\`):** \`15\` sobe ocupando o lugar de \`9\`, \`9\` (com filho \`2\`) vira filho esquerdo de \`15\`, \`21\` continua à direita de \`15\`.
   - **2º passo (Rotação à Direita em \`27\`):** \`15\` sobe para a raiz geral! \`9\` (com filho \`2\`) fica à esquerda de \`15\`; \`27\` fica à direita de \`15\`, e a subárvore direita de \`15\` (\`21\`) torna-se o **filho esquerdo de \`27\`**!
   - Resultado final: raiz \`15\`, esquerda \`9\` (esq \`2\`), direita \`27\` (esq \`21\`, dir \`50\`). Todos os nós respeitam $\\lvert FB \\rvert \\le 1$ e o percurso Em-Ordem continua sendo \`2, 9, 15, 21, 27, 50\`!

### Árvores Rubro-Negras e Árvores B / B+
- **Árvores Rubro-Negras:** balanceamento menos rígido que AVL (altura $\\le 2\\log_2(n+1)$), porém exige no máximo 2 rotações na inserção e 3 na remoção — muito usada em bibliotecas padrão (\`std::map\`, \`TreeMap\` e escalonador CFS do Linux).
- **Árvores B e B+:** árvores multi-caminho balanceadas projetadas para **disco/SGBD**, minimizando leituras de blocos (I/O). Na **Árvore B+**, todos os ponteiros de dados ficam nas folhas, que são encadeadas sequencialmente para acelerar consultas por intervalo (\`BETWEEN\`).`,
        keyFormulas: [
          {
            label: 'Fator de Balanceamento AVL',
            latex: 'FB(v) = h(v_{esq}) - h(v_{dir}) \\in \\{-1, 0, +1\\}',
            note: 'Convenção de altura: folha = 0, subárvore nula = -1. Se |FB| = 2, rotacionar imediatamente.',
          },
          {
            label: 'Limite Superior da Altura em AVL',
            latex: 'h < 1{,}44 \\log_2(n + 2) - 0{,}328 = O(\\log n)',
            note: 'Garante busca, inserção e remoção sempre em O(log n) no pior caso.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Estrutura e rotações simples/duplas de Árvore AVL em C',
          code: `typedef struct No {
    int chave;
    int altura;
    struct No *esq, *dir;
} No;

int altura(No *n) { return n ? n->altura : -1; }
int max_int(int a, int b) { return (a > b) ? a : b; }
int fator_bal(No *n) { return n ? altura(n->esq) - altura(n->dir) : 0; }

void atualizar_altura(No *n) {
    n->altura = 1 + max_int(altura(n->esq), altura(n->dir));
}

// Rotação Simples à Direita (resolve caso LL)
No *rotacao_direita(No *y) {
    No *x = y->esq;
    No *T2 = x->dir;
    x->dir = y;
    y->esq = T2;
    atualizar_altura(y);
    atualizar_altura(x);
    return x; // Nova raiz da subárvore
}

// Rotação Simples à Esquerda (resolve caso RR)
No *rotacao_esquerda(No *x) {
    No *y = x->dir;
    No *T2 = y->esq;
    y->esq = x;
    x->dir = T2;
    atualizar_altura(x);
    atualizar_altura(y);
    return y; // Nova raiz da subárvore
}

No *balancear(No *v) {
    atualizar_altura(v);
    int fb = fator_bal(v);
    if (fb > 1) { // Pesada à esquerda
        if (fator_bal(v->esq) < 0) v->esq = rotacao_esquerda(v->esq); // Caso LR
        return rotacao_direita(v);                                     // Caso LL / LR
    }
    if (fb < -1) { // Pesada à direita
        if (fator_bal(v->dir) > 0) v->dir = rotacao_direita(v->dir);   // Caso RL
        return rotacao_esquerda(v);                                    // Caso RR / RL
    }
    return v;
}`,
        },
      },
      {
        id: 'alg-ordenacao',
        title: '5. Algoritmos de Ordenação e Busca',
        content: `Ordenação é um dos temas mais versáteis do ENADE: a banca testa tanto a comparação entre propriedades (estabilidade, uso de memória e pior caso) quanto o rastreamento de partições do Quicksort ou passos do Insertion/Selection Sort.

### Conceitos Essenciais
- **Estabilidade:** um algoritmo é **estável** quando preserva a ordem relativa original de elementos com chaves iguais (fundamental ao ordenar registros por múltiplos critérios, ex.: ordenar por nome e depois por departamento).
- **In-place:** utiliza memória auxiliar constante $O(1)$ (ou apenas $O(\\log n)$ na pilha recursiva, caso do Quicksort).
- **Limite Inferior de Ordenação por Comparação:** como existem $n!$ permutações possíveis e cada comparação binária divide o espaço de busca ao meio, a árvore de decisão tem altura mínima $\\log_2(n!) = \\Omega(n \\log n)$. Apenas algoritmos que **não** ordenam por comparação (Counting Sort, Radix Sort, Bucket Sort) conseguem tempo linear $O(n + k)$ explorando propriedades das chaves.

### Tabela Comparativa Definitiva dos Algoritmos de Ordenação
| Algoritmo | Melhor Caso | Caso Médio | Pior Caso | Espaço Auxiliar | Estável? | Observação Chave |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bubble Sort** (c/ flag) | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Sim | Muitas trocas; didático |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Não | Faz no máx. $n-1$ trocas; nunca adaptativo |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Sim | Excelente p/ vetores pequenos ou quase ordenados |
| **Mergesort** | $O(n \\log n)$ | $O(n \\log n)$ | $O(n \\log n)$ | $O(n)$ | Sim | Pior caso garantido e estável; ótimo p/ listas/disco |
| **Quicksort** | $O(n \\log n)$ | $O(n \\log n)$ | $O(n^2)$ | $O(\\log n)$ médio | Não | Mais rápido na prática (cache); pior caso = pivô ruim |
| **Heapsort** | $O(n \\log n)$ | $O(n \\log n)$ | $O(n \\log n)$ | $O(1)$ | Não | $O(n \\log n)$ garantido e estritamente *in-place* |
| **Counting Sort** | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | Sim | Inteiros em faixa limitada $0 \\dots k$ |
| **Radix Sort** | $O(d(n+b))$ | $O(d(n+b))$ | $O(d(n+b))$ | $O(n + b)$ | Sim | Ordena dígito a dígito (LSD) usando Counting Sort |

### Análise Profunda do Quicksort
O **Quicksort** aplica Divisão e Conquista: escolhe um **pivô**, particiona o vetor de modo que elementos menores fiquem à esquerda e maiores à direita, e ordena recursivamente as duas metades.
- **Caso médio/melhor:** partições razoavelmente equilibradas $\\Rightarrow T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\log n)$.
- **Pior caso ($O(n^2)$):** ocorre quando o pivô é sempre o menor ou o maior elemento da partição (por exemplo, vetor já ordenado ou inversamente ordenado usando o primeiro ou o último elemento como pivô!). A recorrência vira $T(n) = T(n-1) + \\Theta(n) = \\Theta(n^2)$ e a pilha recursiva cresce para $O(n)$.
- **Como evitar o pior caso:** escolher pivô **aleatório** ou usar a **mediana de três** (mediana entre \`v[ini]\`, \`v[meio]\` e \`v[fim]\`).

### Exemplo Resolvido Passo a Passo (Particionamento de Lomuto no Quicksort)
Vetor inicial: \`[8, 3, 7, 1, 5]\`, pivô = último elemento (\`5\`), índice \`i = -1\`:
1. \`j=0\` (\`8 <= 5\`? Não). Vetor: \`[8, 3, 7, 1, 5]\`.
2. \`j=1\` (\`3 <= 5\`? Sim!): \`i=0\`, troca \`v[0]\` e \`v[1]\` → \`[3, 8, 7, 1, 5]\`.
3. \`j=2\` (\`7 <= 5\`? Não).
4. \`j=3\` (\`1 <= 5\`? Sim!): \`i=1\`, troca \`v[1]\` e \`v[3]\` → \`[3, 1, 7, 8, 5]\`.
5. Fim do laço: coloca pivô em \`i+1 = 2\` (troca \`v[2]\` e \`v[4]\`) → \`[3, 1, 5, 8, 7]\`.
O pivô \`5\` já está em sua posição definitiva (índice 2); agora ordenam-se recursivamente \`[3, 1]\` e \`[8, 7]\`.`,
        keyFormulas: [
          {
            label: 'Limite Inferior de Ordenação por Comparação',
            latex: '\\log_2(n!) = \\Omega(n \\log n)',
            note: 'Nenhum algoritmo baseado apenas em comparações entre pares pode bater Ω(n log n) no pior caso.',
          },
          {
            label: 'Recorrência do Quicksort (Pior Caso vs. Balanceado)',
            latex: 'T_{\\text{pior}}(n) = T(n-1) + \\Theta(n) = \\Theta(n^2), \\qquad T_{\\text{bal}}(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\log n)',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Quicksort completo em C (Particionamento de Lomuto)',
          code: `void swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

int particiona(int v[], int ini, int fim) {
    int pivo = v[fim];
    int i = ini - 1;
    for (int j = ini; j < fim; j++) {
        if (v[j] <= pivo) {
            i++;
            swap(&v[i], &v[j]);
        }
    }
    swap(&v[i + 1], &v[fim]);
    return i + 1; // Posição final definitiva do pivô
}

void quicksort(int v[], int ini, int fim) {
    if (ini < fim) {
        int p = particiona(v, ini, fim);
        quicksort(v, ini, p - 1);
        quicksort(v, p + 1, fim);
    }
}`,
        },
      },
      {
        id: 'alg-grafos-pd',
        title: '6. Grafos, Caminhos Mínimos, MST e Paradigmas Algorítmicos',
        content: `Grafos $G = (V, E)$ modelam redes de computadores, dependências de tarefas, circuitos e mapas. Os algoritmos de grafos conectam diretamente esta disciplina a Redes (OSPF/Dijkstra) e Inteligência Artificial (A*).

### Representação de Grafos
| Critério | Matriz de Adjacência ($V \\times V$) | Lista de Adjacência |
| :--- | :--- | :--- |
| Espaço em memória | $\\Theta(V^2)$ | $\\Theta(V + E)$ |
| Verificar se existe aresta $(u, v)$ | $O(1)$ | $O(\\text{grau}(u))$ |
| Iterar sobre todos os vizinhos de $u$ | $\\Theta(V)$ | $\\Theta(\\text{grau}(u))$ |
| Quando preferir? | Grafos **densos** ($E \\approx V^2$) | Grafos **esparsos** ($E \\ll V^2$, maioria prática) |

### Buscas em Grafos: BFS e DFS
- **Busca em Largura (BFS — *Breadth-First Search*):** utiliza **Fila (FIFO)**, complexidade $O(V + E)$ com lista de adjacência. Explora vértices por camadas de distância a partir da origem $s$, encontrando garantidamente o **menor caminho em número de arestas** em grafos não ponderados.
- **Busca em Profundidade (DFS — *Depth-First Search*):** utiliza **Pilha** ou recursão, complexidade $O(V + E)$. Aplica-se a **detecção de ciclos**, **ordenação topológica** em grafos acíclicos dirigidos (DAGs), componentes conexas e fortemente conexas (Kosaraju/Tarjan).

### Caminhos Mínimos e Árvore Geradora Mínima (MST)
| Problema / Algoritmo | Restrição de Pesos | Paradigma | Complexidade (Lista + Heap) |
| :--- | :--- | :--- | :--- |
| **Dijkstra** (origem única) | Somente **não negativos** ($w \\ge 0$) | Guloso | $O((V + E) \\log V)$ |
| **Bellman-Ford** (origem única) | Aceita negativos; detecta ciclo negativo | Prog. Dinâmica | $O(V \\cdot E)$ |
| **Floyd-Warshall** (todos os pares) | Aceita negativos (sem ciclo negativo) | Prog. Dinâmica | $O(V^3)$ |
| **Kruskal** (MST — aresta mínima) | Qualquer peso real (grafo não dirigido) | Guloso + Union-Find | $O(E \\log E)$ |
| **Prim** (MST — expande vértice) | Qualquer peso real (grafo não dirigido) | Guloso | $O((V + E) \\log V)$ |

### Exemplo Resolvido Rápido (Árvore Geradora Mínima — Kruskal)
Considere um grafo conexo com 4 vértices ($A, B, C, D$) e 5 arestas ponderadas: $(A,B)=1$, $(C,D)=2$, $(A,C)=3$, $(B,C)=4$, $(B,D)=5$.
1. Ordenamos as arestas por peso crescente: $(A,B):1, (C,D):2, (A,C):3, (B,C):4, (B,D):5$.
2. Adicionamos $(A,B):1$ (sem ciclo) e $(C,D):2$ (sem ciclo).
3. Adicionamos $(A,C):3$ (conecta os componentes $\\{A,B\\}$ e $\\{C,D\\}$ sem ciclo!).
4. Já temos $V - 1 = 3$ arestas conectando todos os 4 vértices! As arestas $(B,C):4$ e $(B,D):5$ formariam ciclos e são descartadas. Custo total da MST $= 1 + 2 + 3 = 6$.

### Paradigmas de Projeto de Algoritmos
- **Divisão e Conquista:** divide em subproblemas independentes, resolve recursivamente e combina (Mergesort, Quicksort, FFT).
- **Algoritmos Gulosos (*Greedy*):** toma a decisão localmente ótima a cada passo sem voltar atrás. Só garante ótimo global quando há **propriedade de escolha gulosa** e subestrutura ótima (ex.: Códigos de Huffman, Kruskal, Prim, Dijkstra, Mochila Fracionária).
- **Programação Dinâmica (PD):** usada quando há **subestrutura ótima** e **subproblemas sobrepostos**; armazena resultados intermediários via *memoization* (top-down) ou tabela (bottom-up). Exemplo clássico: **Mochila 0/1** ($O(nW)$ em PD; guloso falha!).
- **Backtracking:** busca sistemática em árvore de estados com poda de ramos inválidos (ex.: N-Rainhas, Sudoku).`,
        keyFormulas: [
          {
            label: 'Complexidade dos Algoritmos Clássicos de Grafos',
            latex: '\\text{BFS/DFS: } O(V+E), \\quad \\text{Dijkstra/Prim: } O((V+E)\\log V), \\quad \\text{Bellman-Ford: } O(VE)',
          },
          {
            label: 'Propriedade de Árvore Geradora (MST)',
            latex: '\\lvert E_{\\text{MST}} \\rvert = \\lvert V \\rvert - 1',
            note: 'Toda árvore geradora de um grafo conexo de V vértices possui exatamente V - 1 arestas e nenhum ciclo.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Busca em Largura (BFS) em C sobre matriz de adjacência',
          code: `#include <stdio.h>
#define MAXV 20

void bfs(int adj[MAXV][MAXV], int n, int origem) {
    int visitado[MAXV] = {0};
    int dist[MAXV];
    int fila[MAXV], ini = 0, fim = 0;

    for (int i = 0; i < n; i++) dist[i] = -1;

    visitado[origem] = 1;
    dist[origem] = 0;
    fila[fim++] = origem;

    while (ini < fim) {
        int u = fila[ini++];
        for (int v = 0; v < n; v++) {
            if (adj[u][v] && !visitado[v]) {
                visitado[v] = 1;
                dist[v] = dist[u] + 1; // Menor nº de arestas desde origem
                fila[fim++] = v;
            }
        }
    }
    for (int i = 0; i < n; i++)
        printf("Vertice %d -> dist = %d\\n", i, dist[i]);
}`,
        },
      },
    ],
    inepTraps: [
      'Divisão inteira silenciosa em C: escrever `1 / i` ou `a / b` com ambos `int` trunca o resultado para inteiro (`1 / 2 == 0`). Sempre converta ao menos um operando para ponto flutuante (`1.0 / i` ou `(double)a / b`).',
      'Confundir o valor armazenado em um ponteiro com o valor da variável apontada: se `int x = 6750` está no endereço `0x0070` e `int *p = &x`, o conteúdo na memória de `p` é `0x00000070` (endereço), e não `6750`.',
      'Achar que o Quicksort é sempre `O(n log n)` ou que é estável: no pior caso (pivô extremo em vetor já ordenado) ele degrada para `O(n^2)` e NÃO é estável; já o Mergesort é estável e sempre `O(n log n)`, porém exige `O(n)` de memória extra.',
      'Esquecer qual rotação aplicar nos casos duplos de Árvore AVL (LR e RL): quando os sinais do FB do pai e do filho são opostos (`+2` com filho `-1` ou `-2` com filho `+1`), uma rotação simples NÃO rebalanceia a árvore — é obrigatória a rotação dupla!',
      'Aplicar o algoritmo de Dijkstra em grafos com arestas de peso negativo: Dijkstra fecha definitivamente um vértice ao extraí-lo da fila de prioridade e pode retornar caminho subótimo com pesos negativos; nesse cenário deve-se usar Bellman-Ford.',
    ],
    quickChecklist: [
      'Revisar conversão de tipos em C, precedência de operadores e aritmética de ponteiros (`ptr + 1` avança `sizeof(*ptr)` bytes).',
      'Saber deduzir a soma da P.A. `N(N-1)/2` em laços aninhados e aplicar os 3 casos do Teorema Mestre.',
      'Memorizar a diferença operacional e de aplicações entre Pilha (LIFO) e Fila Circular (FIFO).',
      'Dominar os 3 percursos de árvore (Pré, Em e Pós-Ordem) e lembrar que Em-Ordem numa ABB produz ordem crescente.',
      'Praticar no papel os 4 casos de rotação AVL (LL, RR, LR, RL) recalculando `FB = h(esq) - h(dir)` após cada inserção.',
      'Guardar a tabela de ordenação: Quicksort (`O(n^2)` pior, instável), Mergesort (`O(n log n)` sempre, estável, `O(n)` espaço), Heapsort (`O(n log n)` sempre, `O(1)` espaço, instável).',
      'Distinguir Encadeamento Separado vs Endereçamento Aberto (sondagem linear/quadrática/hash duplo) em Tabelas Hash.',
      'Diferenciar BFS (Fila, menor caminho sem pesos), DFS (Pilha, ciclos/topológica), Dijkstra (`w >= 0`), Bellman-Ford (`w < 0`), Kruskal e Prim (MST).',
    ],
  },

  // =========================================================================
  // MÓDULO 2: ARQUITETURA DE COMPUTADORES E SISTEMAS EMBARCADOS
  // =========================================================================
  {
    id: 'arquitetura-embarcados',
    title: 'Arquitetura de Computadores e Sistemas Embarcados',
    subtitle: 'Organização de CPUs, pipeline, cache, registradores bit a bit, ADC, barramentos seriais e RTOS/IoT',
    estimatedMinutes: 95,
    overview:
      'A Engenharia da Computação diferencia-se fortemente de cursos puramente voltados a software justamente na interface hardware-software. Este módulo integra a arquitetura interna dos processadores (ISA, desempenho, pipeline e hierarquia de cache) com o projeto prático de sistemas embarcados (microcontroladores, manipulação de registradores em C, aquisição analógico-digital, dimensionamento de memória e protocolos seriais industriais).',
    enadeWeightNote:
      'Questões clássicas do INEP nesta área incluem: (1) discursivas integrando circuito de condicionamento de sensor + ADC de 12 bits + cálculo de capacidade mínima de memória EEPROM em Kbits (ENADE 2017 D4); (2) manipulação bit a bit de registradores de microcontroladores sem corromper bits vizinhos (ENADE 2017 Q21); (3) mapeamento de bytes Little-Endian vs Big-Endian; (4) decomposição de endereços na cache, AMAT, hazards de pipeline e comparação entre UART, I2C e SPI.',
    sections: [
      {
        id: 'arq-organizacao-isa',
        title: '1. Organização de CPUs, Arquitetura RISC vs. CISC, Endianness e IEEE 754',
        content: `A arquitetura de conjunto de instruções (**ISA — *Instruction Set Architecture***) define o contrato entre software e hardware: registradores visíveis, tipos de dados, formatos de instrução e modos de endereçamento.

### Von Neumann vs. Harvard
- **Arquitetura de Von Neumann:** instruções e dados compartilham a **mesma memória** e o mesmo barramento. É flexível, mas sofre do **Gargalo de Von Neumann** (a CPU não pode buscar uma instrução e ler/escrever dados no mesmo ciclo pelo único barramento).
- **Arquitetura de Harvard:** memórias e barramentos fisicamente **separados** para instruções e dados, permitindo busca simultânea de instrução e dado em um único ciclo. Amplamente usada em microcontroladores (AVR, PIC, DSPs) e adotada na forma de **Harvard Modificada** em CPUs modernas (caches L1i e L1d separadas, convergindo para L2/RAM unificadas).

### RISC vs. CISC
| Característica | RISC (ARM, RISC-V, MIPS) | CISC (x86 / x86-64) |
| :--- | :--- | :--- |
| Formato das instruções | Tamanho **fixo** (ex.: 32 bits) | Tamanho **variável** (1 a 15 bytes no x86) |
| Acesso à memória | Arquitetura **Load/Store** (só \`LW\`/\`SW\` acessam RAM) | Instruções aritméticas podem operar direto na RAM |
| Banco de registradores | Grande (ex.: 32 registradores de uso geral) | Menor (originalmente; expandido no x86-64) |
| Unidade de controle | Cabeada (*hardwired*), decodificação simples | Frequentemente microprogramada (ou decodifica em $\\mu$-ops) |
| Pipeline e CPI | Altamente favorável a pipeline; CPI próximo a 1 | Pipeline complexo; exige tradução interna em micro-operações |

### Ordenação de Bytes: Little-Endian vs. Big-Endian
Define como uma palavra multi-byte é gravada em endereços crescentes de memória:
- **Little-Endian** (x86, x86-64, ARM modo padrão): o byte **menos significativo (LSB)** é armazenado no **menor endereço** de memória.
- **Big-Endian** (*Network Byte Order* nos protocolos TCP/IP, PowerPC clássico): o byte **mais significativo (MSB)** é armazenado no **menor endereço** de memória.

**Exemplo Resolvido:** armazenar o inteiro de 32 bits \`0x00001A5E\` nos endereços \`0x0070\` a \`0x0073\`:

| Endereço | Little-Endian (LSB primeiro) | Big-Endian (MSB primeiro) |
| :--- | :--- | :--- |
| \`0x0070\` | \`0x5E\` | \`0x00\` |
| \`0x0071\` | \`0x1A\` | \`0x00\` |
| \`0x0072\` | \`0x00\` | \`0x1A\` |
| \`0x0073\` | \`0x00\` | \`0x5E\` |

### Ponto Flutuante Padrão IEEE 754 (Precisão Simples — 32 bits)
Divide os 32 bits em: **1 bit de sinal ($s$)**, **8 bits de expoente enviesado ($E = e + 127$)** e **23 bits de mantissa/fração ($M$)**, assumindo um bit \`1\` implícito à esquerda da vírgula binária (números normalizados):
$$V = (-1)^s \\times (1 + M) \\times 2^{E - 127}$$
**Exemplo Resolvido:** representar $-13{,}25_{10}$ em IEEE 754 de 32 bits:
1. Sinal negativo $\\Rightarrow s = 1$.
2. Parte inteira $13_{10} = 1101_2$; parte fracionária $0{,}25_{10} = 0{,}01_2 \\Rightarrow 13{,}25_{10} = 1101{,}01_2$.
3. Normalizando para a forma $1{,}\\text{xxx} \\times 2^e$: $1101{,}01_2 = 1{,}10101_2 \\times 2^3 \\Rightarrow e = 3$ e fração $M = 10101000\\dots0_2$.
4. Expoente com viés: $E = 3 + 127 = 130_{10} = 10000010_2$.
5. Resultado final (32 bits): \`1 10000010 10101000000000000000000\` = \`0xC1540000\`.`,
        keyFormulas: [
          {
            label: 'Valor em Ponto Flutuante IEEE 754 (32 bits)',
            latex: 'V = (-1)^s \\times (1 + M) \\times 2^{E - 127}',
            note: 'Em precisão dupla (64 bits): 1 bit de sinal, 11 bits de expoente (viés 1023) e 52 bits de mantissa.',
          },
          {
            label: 'Espaço de Endereçamento de Memória',
            latex: '\\text{Capacidade Máxima} = 2^{N_{\\text{barramento end.}}} \\times \\text{Largura da Célula}',
            note: 'Ex.: barramento de 32 bits endereçável a byte endereça até 2^32 bytes = 4 GiB.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Verificação prática de Endianness em C usando ponteiro para byte',
          code: `#include <stdio.h>
#include <stdint.h>

int main(void) {
    uint32_t valor = 0x00001A5E;
    uint8_t *bytes = (uint8_t *) &valor;

    printf("Menor endereco -> bytes[0] = 0x%02X, bytes[1] = 0x%02X\\n", bytes[0], bytes[1]);
    if (bytes[0] == 0x5E) {
        printf("Arquitetura Little-Endian (LSB no menor endereco)\\n");
    } else {
        printf("Arquitetura Big-Endian (MSB no menor endereco)\\n");
    }
    return 0;
}`,
        },
      },
      {
        id: 'arq-desempenho-pipeline',
        title: '2. Desempenho de CPU, Lei de Amdahl e Pipeline (Hazards)',
        content: `Avaliar o desempenho real de um processador exige analisar o **tempo de execução**, e nunca isoladamente a frequência de clock (MHz/GHz) ou a taxa MIPS!

### Equação Fundamental do Tempo de CPU
$$T_{\\text{CPU}} = IC \\times CPI \\times T_{\\text{clock}} = \\frac{IC \\times CPI}{f_{\\text{clock}}}$$
Onde $IC$ é a contagem de instruções executadas (*Instruction Count*), $CPI$ é o número médio de ciclos por instrução e $f_{\\text{clock}}$ é a frequência do relógio. Quando há classes de instruções com CPIs distintos, calcula-se o CPI médio ponderado: $CPI = \\sum_{i} \\frac{IC_i}{IC} \\cdot CPI_i$.

**Exemplo Resolvido:** Um programa possui 50% de instruções ALU ($CPI = 1$), 30% de Load/Store ($CPI = 3$) e 20% de desvio ($CPI = 2$), totalizando $10^9$ instruções em uma CPU de $2\\text{ GHz}$:
1. $CPI_{\\text{médio}} = 0{,}5(1) + 0{,}3(3) + 0{,}2(2) = 0{,}5 + 0{,}9 + 0{,}4 = 1{,}8\\text{ ciclos/instrução}$.
2. $T_{\\text{CPU}} = \\frac{10^9 \\times 1{,}8}{2 \\times 10^9\\text{ Hz}} = 0{,}9\\text{ s}$.

### Lei de Amdahl
Estabelece o **speedup máximo** ao acelerar uma fração $p$ do tempo de execução por um fator $s$:
$$S = \\frac{1}{(1 - p) + \\frac{p}{s}}, \\qquad \\lim_{s \\to \\infty} S = \\frac{1}{1 - p}$$
**Consequência crítica:** se $20\\%$ de um código é estritamente sequencial ($1 - p = 0{,}20$, logo $p = 0{,}80$), mesmo com infinitos núcleos o speedup nunca ultrapassará $\\frac{1}{0{,}20} = 5\\times$! Para $s = 4$ núcleos: $S = \\frac{1}{0{,}2 + 0{,}8/4} = \\frac{1}{0{,}4} = 2{,}5\\times$.

### Pipeline de Instruções e Hazards
No pipeline clássico RISC de 5 estágios (**IF** *Fetch* → **ID** *Decode* → **EX** *Execute* → **MEM** *Memory* → **WB** *Write-Back*), múltiplas instruções sobrepõem sua execução.
- O pipeline **não diminui a latência** de uma instrução isolada (na verdade aumenta levemente devido aos registradores de pipeline), mas multiplica a **vazão (throughput)** até um limite ideal de $k$ vezes (para $k$ estágios), tendendo a $CPI \\approx 1$.
- Para executar $N$ instruções sem conflitos em um pipeline de $k$ estágios, gastam-se $k + N - 1$ ciclos.

| Tipo de Hazard | Causa Raiz | Soluções Clássicas em Hardware/Compilador |
| :--- | :--- | :--- |
| **Estrutural** | Duas instruções disputam o mesmo recurso físico no mesmo ciclo (ex.: memória única para IF e MEM) | Caches L1 separadas (L1i/L1d — Harvard), duplicação de unidades funcionais, banco de registradores com escrita na 1ª metade e leitura na 2ª |
| **Dados (RAW, WAR, WAW)** | Instrução depende de resultado ainda não gravado por instrução anterior (principal: **RAW** — *Read After Write*) | **Forwarding / Bypassing** (encaminha saída da ULA direto para entrada da próxima instrução); *stall* (bolha de 1 ciclo no *load-use hazard*); reordenamento pelo compilador |
| **Controle (Desvios)** | Desvio condicional (\`BEQ\`, \`BNE\`) altera o PC, mas próximas instruções já foram buscadas em IF | **Predição de desvio** (estática ou dinâmica via BHT/BTB), execução especulativa, *flush* em caso de erro de predição |

### Paralelismo e Taxonomia de Flynn
- **SISD:** arquitetura sequencial tradicional.
- **SIMD:** mesma instrução aplicada simultaneamente a múltiplos dados (extensões vetoriais AVX/NEON e GPUs).
- **MISD:** raro (usado em sistemas redundantes tolerantes a falhas espaciais).
- **MIMD:** processadores multicore e clusters (fluxos independentes de instruções e dados).`,
        keyFormulas: [
          {
            label: 'Equação de Desempenho da CPU',
            latex: 'T_{\\text{CPU}} = \\frac{IC \\times CPI}{f_{\\text{clock}}}',
          },
          {
            label: 'Lei de Amdahl',
            latex: 'S = \\frac{1}{(1 - p) + \\frac{p}{s}}',
            note: 'p = fração aprimorada/paralelizável; s = fator de aceleração dessa fração.',
          },
        ],
        codeExample: {
          language: 'asm',
          title: 'Hazard de dados RAW (resolvido por Forwarding vs. Load-Use Stall) em RISC/MIPS',
          code: `# Exemplo 1: Dependencia RAW entre ALU -> ALU (ZERO stalls com Forwarding EX->EX)
ADD  $t0, $s1, $s2    # Produz $t0 ao final do estagio EX
SUB  $t1, $t0, $s3    # Recebe $t0 diretamente da saida da ULA via Forwarding!

# Exemplo 2: Load-Use Hazard (EXIGE 1 ciclo de bolha/stall mesmo com Forwarding)
LW   $t2, 0($s0)      # Dado de $t2 so fica pronto ao final do estagio MEM
ADD  $t3, $t2, $s4    # Precisa de $t2 no inicio do EX -> 1 stall + Forwarding MEM->EX
# Dica de compilador: mover uma instrucao independente entre LW e ADD elimina a bolha!`,
        },
      },
      {
        id: 'arq-hierarquia-cache',
        title: '3. Hierarquia de Memória, Mapeamento de Cache e AMAT',
        content: `A hierarquia de memória explora dois princípios empíricos dos programas para combinar a velocidade da SRAM com a capacidade e o baixo custo da DRAM e do armazenamento secundário:
- **Localidade Temporal:** um dado recém-acessado tende a ser acessado novamente em breve (ex.: variáveis de controle em laços).
- **Localidade Espacial:** endereços fisicamente próximos a um dado acessado tendem a ser acessados logo em seguida (ex.: percorrer um vetor sequencialmente). Por isso, a cache transfere **blocos (linhas)** inteiros, não bytes isolados.

### Estratégias de Mapeamento de Memória Cache
Considere uma cache de capacidade $C$ bytes, tamanho de bloco $B$ bytes e associatividade $K$ vias (número de blocos por conjunto). O número de conjuntos é $S = \\frac{C}{B \\cdot K}$.

| Mapeamento | Valor de $K$ | Onde o bloco pode ficar? | Vantagens e Desvantagens |
| :--- | :--- | :--- | :--- |
| **Direto** | $K = 1$ | Em exatamente **1 linha** fixa ($\\text{Índice} = \\text{Bloco} \\bmod S$) | Hardware mais simples e rápido (1 comparador), mas sofre muitos **misses de conflito** |
| **Associativo por Conjunto** | $2, 4, 8, \\dots$ | Em qualquer uma das $K$ vias do seu conjunto | Melhor compromisso prático entre taxa de acerto, latência e consumo de energia |
| **Totalmente Associativo** | $K = C/B$ ($S=1$) | Em **qualquer linha** da cache (não há bits de Índice!) | Elimina misses de conflito, mas exige comparadores em paralelo para todas as linhas (caro/lento) |

### Exemplo Resolvido Passo a Passo (Decomposição Tag / Índice / Offset)
Um processador gera endereços físicos de **32 bits** (endereçável a byte) e possui cache de **64 KiB**, blocos de **64 bytes** e associatividade de **4 vias**:
1. **Bits de Offset (deslocamento dentro do bloco):** $B = 64 = 2^6 \\Rightarrow \\mathbf{6\\text{ bits}}$.
2. **Número de conjuntos:** $C = 64 \\times 1024 = 2^{16}\\text{ B}$. Logo, $S = \\frac{2^{16}}{2^6 \\cdot 2^2} = 2^8 = 256$ conjuntos.
3. **Bits de Índice (seleciona o conjunto):** $\\log_2(256) = \\mathbf{8\\text{ bits}}$.
4. **Bits de Tag (identifica o bloco na via):** $32 - 8 - 6 = \\mathbf{18\\text{ bits}}$.
Resumo do endereço de 32 bits: \`[ Tag: 18 bits | Índice: 8 bits | Offset: 6 bits ]\`.

### Políticas de Escrita, Substituição, 3 Cs e AMAT
- **Write-Through:** toda escrita atualiza simultaneamente a cache e a memória principal (simples e coerente, mas gera tráfego intenso no barramento; normalmente usa *write buffer*).
- **Write-Back:** a escrita altera apenas a cache e liga o **dirty bit (bit sujo)**; o bloco só é gravado na RAM quando for substituído. Reduz drasticamente o tráfego de escrita!
- **Políticas de Substituição (para $K > 1$):** LRU (substitui o bloco menos recentemente usado), FIFO ou Aleatória.
- **Os 3 Cs dos Cache Misses:** **Compulsório** (primeiro acesso ao bloco — *cold miss*), **Capacidade** (cache pequena demais para o conjunto de trabalho) e **Conflito** (vários blocos disputando o mesmo conjunto em mapeamento direto/associativo por conjunto).
- **Tempo Médio de Acesso à Memória (AMAT):**
$$AMAT = T_{\\text{hit}} + \\text{Taxa}_{\\text{miss}} \\times \\text{Penalidade}_{\\text{miss}}$$
**Exemplo:** Se L1 tem $T_{\\text{hit}} = 1\\text{ ns}$, taxa de miss de $5\\%$ e penalidade de L2/RAM $= 40\\text{ ns}$, então $AMAT = 1 + 0{,}05 \\times 40 = 3\\text{ ns}$. Em cache de 2 níveis: $AMAT = T_{\\text{hit,L1}} + m_{\\text{L1}} \\cdot (T_{\\text{hit,L2}} + m_{\\text{L2}} \\cdot \\text{Penalidade}_{\\text{RAM}})$.
- **Coerência de Cache em Multicore:** o protocolo **MESI** marca cada linha como *Modified*, *Exclusive*, *Shared* ou *Invalid*, garantindo que dois núcleos nunca leiam versões inconsistentes do mesmo endereço.`,
        keyFormulas: [
          {
            label: 'Decomposição de Endereço na Cache',
            latex: '\\text{Offset} = \\log_2(B), \\quad \\text{Índice} = \\log_2\\!\\left(\\frac{C}{B \\cdot K}\\right), \\quad \\text{Tag} = N_{\\text{addr}} - \\text{Índice} - \\text{Offset}',
            note: 'C = capacidade da cache (B); B = tamanho do bloco (B); K = associatividade.',
          },
          {
            label: 'Tempo Médio de Acesso à Memória (AMAT)',
            latex: 'AMAT = T_{\\text{hit}} + \\text{Taxa}_{\\text{miss}} \\times \\text{Penalidade}_{\\text{miss}}',
          },
        ],
      },
      {
        id: 'arq-microcontroladores-bits',
        title: '4. Microcontroladores, Interrupções e Manipulação Bit a Bit de Registradores',
        content: `Um **microcontrolador (MCU)** integra em um único chip (SoC) núcleo de CPU, memória não volátil de programa (Flash), SRAM e periféricos mapeados em memória (GPIO, Timers/PWM, ADC, UART, I2C, SPI, Watchdog Timer).

### Interrupções (IRQ) vs. Polling vs. DMA
| Mecanismo | Funcionamento | Uso de CPU / Energia | Aplicação Ideal |
| :--- | :--- | :--- | :--- |
| **Polling (Espera Ocupada)** | CPU testa continuamente uma flag em laço | Altíssimo (desperdiça ciclos e impede modo *sleep*) | Eventos ultrarrápidos onde o overhead de ISR não compensa |
| **Interrupção (IRQ / ISR)** | Periférico sinaliza via hardware; CPU salva contexto e executa a ISR | Baixo (CPU dorme ou executa outras tarefas) | Botões, timers, recepção serial esporádica, alarmes |
| **DMA (*Direct Memory Access*)** | Controlador dedicado transfere blocos Periférico $\\leftrightarrow$ RAM sem passar pela CPU | Mínimo (CPU só é interrompida ao final do bloco) | Amostragem contínua de ADC, áudio, vídeo, redes em alta taxa |

> **Atenção em C Embarcado:** todo ponteiro para registrador de hardware ou variável compartilhada entre \`main()\` e uma ISR **deve ser declarado como \`volatile\`**, impedindo que o compilador elimine leituras "aparentemente redundantes" por otimização em registradores da CPU.

### Manipulação Bit a Bit de Registradores em C (Padrão ENADE 2017 Q21!)
Em sistemas embarcados, cada grupo de bits de um registrador controla uma configuração independente (ex.: direção de pino, prescaler de timer, canal do ADC). **Nunca se deve sobrescrever o registrador inteiro** com uma atribuição direta (\`REG = 0x18;\`), pois isso zera todos os outros bits de configuração!

| Operação Desejada | Expressão Canônica em C | Efeito nos Outros Bits |
| :--- | :--- | :--- |
| **Setar (colocar em 1)** o bit $n$ | \`REG = REG OR (1U << n)\` (usando operador \`OR\` bit a bit) | Preservados intactos |
| **Limpar (zerar)** o bit $n$ | \`REG &= ~(1U << n)\` | Preservados intactos |
| **Inverter (toggle)** o bit $n$ | \`REG ^= (1U << n)\` | Preservados intactos |
| **Testar** se o bit $n$ vale 1 | \`if (REG & (1U << n))\` | Somente leitura |
| **Escrever campo multi-bit** | \`REG = (REG & ~MASK) OR VAL\` | Limpa só o campo e grava o novo valor |

### Exemplo Resolvido Passo a Passo (Estilo ENADE 2017 Q21)
Suponha um registrador de 16 bits \`REG_CTRL\` (bits numerados de 15 a 0) no qual queremos configurar **os bits 5, 4 e 3 para \`011\` em binário**, sem alterar os demais 13 bits:
1. **Construir a máscara do campo (1s nos bits 5, 4 e 3):**
   - Em binário: \`0000 0000 0011 1000\`
   - Valor decimal: $2^5 + 2^4 + 2^3 = 32 + 16 + 8 = 56$
   - Em hexadecimal: \`0x0038\` (nibble alto \`0x3\` = \`0011\`, nibble baixo \`0x8\` = \`1000\`).
2. **Construir o valor deslocado (\`011\` nos bits 5, 4 e 3):**
   - Bit 5 = \`0\`, Bit 4 = \`1\`, Bit 3 = \`1\` → binário \`0000 0000 0001 1000\`
   - Valor decimal: $0 \\cdot 32 + 1 \\cdot 16 + 1 \\cdot 8 = 24$
   - Em hexadecimal: \`0x0018\` (ou \`(0x3U << 3)\`).
3. **Aplicar a operação atômica de leitura-modificação-escrita:**
   - Primeiro zeramos os 3 bits com \`REG_CTRL & ~0x0038\` (garantindo que o bit 5 vire \`0\` mesmo que antes valesse \`1\`!).
   - Depois aplicamos OR bit a bit com \`0x0018\`:
   - Instrução final: \`REG_CTRL = (REG_CTRL & ~0x0038) | 0x0018;\`
   - *Por que apenas \`REG_CTRL |= 0x0018\` está ERRADO?* Porque se o bit 5 já estivesse em \`1\`, o OR deixaria os bits 5,4,3 como \`111\` em vez de \`011\`!`,
        keyFormulas: [
          {
            label: 'Atualização Segura de Campo de Registrador',
            latex: 'R \\leftarrow (R \\;\\&\\; \\sim M_{\\text{campo}}) \\;\\vert\\; V_{\\text{campo}}',
            note: 'Sempre limpar o campo com AND da máscara invertida antes de aplicar OR com o valor.',
          },
          {
            label: 'Razão Cíclica (Duty Cycle) de PWM',
            latex: 'D = \\frac{T_{\\text{on}}}{T_{\\text{período}}} \\times 100\\%, \\qquad V_{\\text{média}} = D \\cdot V_{CC}',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Configuração segura de registradores mapeados em memória (C Embarcado)',
          code: `#include <stdint.h>

// Registrador de controle mapeado no endereço físico 0x40020000
#define REG_CTRL (*(volatile uint32_t *)0x40020000U)

// Bits 5, 4 e 3 definem o prescaler do periférico
#define PRESCALER_SHIFT  3U
#define PRESCALER_MASK   (0x7U << PRESCALER_SHIFT) // 0b111 << 3 = 0x0038

void configurar_prescaler(uint32_t modo_3bits) {
    // Garante que apenas os 3 bits menos significativos entrem no campo
    uint32_t valor_deslocado = (modo_3bits & 0x7U) << PRESCALER_SHIFT;

    // 1) Zera os bits 5..3 sem afetar demais bits; 2) Grava novo valor
    REG_CTRL = (REG_CTRL & ~PRESCALER_MASK) | valor_deslocado;
}

void ligar_bit_enable(void) {
    REG_CTRL |= (1U << 0);  // Seta bit 0 (ENABLE)
}

void desligar_bit_enable(void) {
    REG_CTRL &= ~(1U << 0); // Limpa bit 0 (ENABLE)
}`,
        },
      },
      {
        id: 'arq-adc-sensores-dimensionamento',
        title: '5. Conversão Analógico-Digital (ADC), Sensores e Dimensionamento de Memória',
        content: `Sistemas embarcados de monitoramento ambiental, biomédico e industrial convertem grandezas físicas contínuas em dados digitais por meio de uma cadeia clássica: **Sensor → Condicionamento Analógico → Filtro Anti-Aliasing → Amostrador (Sample & Hold) → ADC → MCU → Memória Não Volátil**.

### Conversor Analógico-Digital (ADC) Linear de $n$ Bits
Um ADC de $n$ bits com tensão de referência $V_{\\text{ref}}$ (faixa $0$ a $V_{\\text{ref}}$) possui $2^n$ níveis discretos numerados de $0$ até $2^n - 1$:
- **Relação linear entre tensão de entrada $V_o$ e código digital $x$:**
$$x = \\frac{V_o}{V_{\\text{ref}}} \\cdot (2^n - 1), \\qquad \\Delta V = \\frac{V_{\\text{ref}}}{2^n - 1}$$
- **Erro máximo de quantização:** $\\pm \\frac{\\Delta V}{2}$.
- **Critério de Nyquist-Shannon:** para reconstruir o sinal sem *aliasing* (sobreposição espectral), a frequência de amostragem deve satisfazer $f_s \\ge 2 \\cdot f_{\\max}$.

| Arquitetura de ADC | Velocidade | Resolução Típica | Princípio e Aplicação |
| :--- | :--- | :--- | :--- |
| **Flash (Paralelo)** | Altíssima (GHz) | 4 a 8 bits | $2^n - 1$ comparadores em paralelo; custo exponencial; vídeo/osciloscópios |
| **SAR (Aproximações Sucessivas)** | Média-Alta (ksps–Msps) | 10 a 16 bits | Busca binária em $n$ ciclos com DAC interno; padrão na maioria dos MCUs |
| **Sigma-Delta ($\\Sigma\\Delta$)** | Baixa-Média | 16 a 24 bits | Sobreamostragem + modelagem de ruído; balanças, áudio e sensores lentos |

### Exemplo Resolvido Completo (Padrão Discursiva ENADE 2017 D4!)
Um data logger embarcado monitora **4 variáveis** (temperatura, umidade, pressão e luminosidade) coletando **2 amostras por hora** de cada variável, durante **31 dias**, usando um **ADC de 12 bits** ($V_{\\text{ref}} = 5{,}0\\text{ V}$), armazenando cada amostra em **16 bits (2 bytes)** numa memória EEPROM I2C.
1. **Sensor resistivo + ADC:** suponha que o sensor forma um divisor de tensão com resistor fixo $R_f = 10\\text{ k}\\Omega$ e sensor $R_s = 10\\text{ k}\\Omega$ alimentado por $5{,}0\\text{ V}$. A tensão de saída é:
   $$V_o = 5{,}0 \\cdot \\frac{10\\text{ k}\\Omega}{10\\text{ k}\\Omega + 10\\text{ k}\\Omega} = 2{,}5\\text{ V}$$
   No ADC de 12 bits ($2^{12} - 1 = 4095$):
   $$x = \\frac{2{,}5}{5{,}0} \\cdot 4095 = 2047{,}5 \\approx 2048\\text{ (código digital)}$$
   E a resolução do ADC é $\\Delta V = \\frac{5{,}0}{4095} \\approx 1{,}221\\text{ mV/nível}$.
2. **Dimensionamento mínimo da EEPROM (atenção à base binária!):**
   - Número total de leituras por variável: $2\\text{ amostras/h} \\times 24\\text{ h/dia} \\times 31\\text{ dias} = 1.488\\text{ amostras}$.
   - Total para 4 variáveis: $4 \\times 1.488 = 5.952\\text{ amostras}$.
   - Total de bits (16 bits/amostra): $5.952 \\times 16 = 95.232\\text{ bits}$.
   - Convertendo para **Kbits binários** ($1\\text{ Kbit} = 1024\\text{ bits}$):
     $$\\frac{95.232}{1024} = 93\\text{ Kbits}$$
   - Como memórias EEPROM comerciais (série 24LCxxx) vêm em potências de 2 (32, 64, 128, 256, 512 Kbits), a menor EEPROM adequada é de **128 Kbits** (16 KiB)!

### Autonomia Energética e Watchdog Timer (WDT)
- **Autonomia de bateria:** $t_{\\text{horas}} = \\frac{C_{\\text{bateria (mAh)}}}{I_{\\text{médio (mA)}}}$, onde $I_{\\text{médio}} = \\frac{I_{\\text{ativo}} t_{\\text{ativo}} + I_{\\text{sleep}} t_{\\text{sleep}}}{T_{\\text{ciclo}}}$.
- **Watchdog Timer (WDT):** temporizador de segurança que reinicia automaticamente o MCU caso o firmware trave em loop infinito e deixe de "alimentar" (*kick/feed*) o contador antes do estouro.`,
        keyFormulas: [
          {
            label: 'Conversão ADC Linear de n bits',
            latex: 'x = \\frac{V_o}{V_{\\text{ref}}}(2^n - 1), \\qquad \\Delta V = \\frac{V_{\\text{ref}}}{2^n - 1}',
            note: 'Para 12 bits: 2^12 - 1 = 4095. Para 10 bits: 2^10 - 1 = 1023.',
          },
          {
            label: 'Capacidade de Armazenamento de Data Logger (Kbits)',
            latex: 'C_{\\text{Kbits}} = \\frac{N_{\\text{vars}} \\times f_{\\text{amostra}} \\times T \\times B_{\\text{amostra}}}{1024}',
            note: 'Selecione sempre a capacidade comercial (potência de 2) imediatamente superior ao valor calculado.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Conversão de leitura ADC 12 bits para tensão e temperatura linear (LM35)',
          code: `#include <stdint.h>

#define ADC_MAX_12B  4095.0f
#define VREF_VOLTS   3.3f

// Converte valor bruto do ADC (0..4095) para tensão em Volts
float adc_para_tensao(uint16_t codigo_adc) {
    return ((float)codigo_adc * VREF_VOLTS) / ADC_MAX_12B;
}

// Exemplo com sensor LM35 (sensibilidade linear de 10 mV / °C = 0.01 V / °C)
float ler_temperatura_celsius(uint16_t codigo_adc) {
    float v_out = adc_para_tensao(codigo_adc);
    return v_out / 0.01f; // Ex.: 0.25 V -> 25.0 °C
}`,
        },
      },
      {
        id: 'arq-barramentos-iot',
        title: '6. Barramentos Seriais Embarcados (UART, I2C, SPI, CAN), RTOS e IoT',
        content: `A interconexão entre microcontroladores, sensores, memórias externas e módulos de rádio baseia-se em protocolos seriais que equilibram número de pinos, velocidade, alcance e imunidade a ruído.

### Tabela Comparativa Definitiva de Protocolos Seriais Embarcados
| Protocolo | Sincronismo | Fios Principais | Duplex | Topologia / Endereçamento | Características-Chave |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UART / RS-232** | **Assíncrono** (sem fio de clock) | 2 (TX, RX + GND) | Full-duplex | Ponto-a-ponto | Exige mesmo *baud rate*; quadro com Start, Dados (8b), Paridade opcional e Stop |
| **I2C (TWI)** | **Síncrono** | 2 (SDA, SCL) com resistores *pull-up* (*open-drain*) | Half-duplex | Multi-mestre / multi-escravo (endereço 7 ou 10 bits) | Possui bit **ACK/NACK** a cada byte; ótimo para vários sensores/EEPROMs na mesma placa |
| **SPI** | **Síncrono** | 4 (MOSI, MISO, SCLK, CS/SS) | Full-duplex | 1 Mestre, N Escravos (1 pino CS por escravo) | **Mais rápido** que I2C/UART (dezenas de MHz); sem protocolo de ACK nativo |
| **CAN Bus** | Assíncrono (sinal diferencial) | 2 (CAN_H, CAN_L) | Half-duplex | Barramento multi-mestre (orientado a mensagem/ID) | Padrão automotivo/industrial; **arbitragem não destrutiva** por prioridade de ID; alta robustez EMI |

**Cálculo de Taxa Útil em UART:** no formato padrão \`9600 8N1\` (9600 bps, 1 start bit + 8 data bits + 0 paridade + 1 stop bit = **10 bits por byte**), a taxa efetiva de payload é $\\frac{9600}{10} = 960\\text{ bytes/s}$ (e não $9600/8 = 1200\\text{ bytes/s}$!).

### Sistemas de Tempo Real (RTOS)
Um sistema de tempo real não significa apenas "ser rápido", mas sim ser **determinístico**: produzir o resultado correto **dentro de um prazo limite (deadline)**.
- **Hard Real-Time:** perder um único deadline causa falha catastrófica (freio ABS, airbag, marca-passo, controle de voo).
- **Soft Real-Time:** atrasos ocasionais degradam a qualidade, mas não invalidam o sistema (streaming de vídeo/áudio).
- **Escalonamento de Tarefas Periódicas** (tempo de execução $C_i$ e período $T_i$, fator de utilização $U = \\sum_{i=1}^{n} \\frac{C_i}{T_i}$):
  - **RMS (*Rate Monotonic Scheduling*):** prioridade fixa atribuída ao **menor período** (maior frequência). É ótimo entre algoritmos de prioridade fixa. Condição suficiente de escalonabilidade de **Liu & Layland**:
    $$U = \\sum_{i=1}^{n} \\frac{C_i}{T_i} \\le n\\left(2^{1/n} - 1\\right)$$
    Para $n \\to \\infty$, o limite converge para $\\ln 2 \\approx 0{,}693$ ($69{,}3\\%$).
  - **EDF (*Earliest Deadline First*):** prioridade dinâmica (executa a tarefa com deadline absoluto mais próximo). É ótimo em processador único e escalonável se e somente se $U \\le 1$ ($100\\%$).
- **Inversão de Prioridade:** ocorre quando uma tarefa de alta prioridade fica bloqueada aguardando um mutex retido por uma tarefa de baixa prioridade, que por sua vez é preemptada por uma tarefa de prioridade média. Solução: **Herança de Prioridade** (*Priority Inheritance*) ou **Teto de Prioridade** (*Priority Ceiling*).

### Conectividade e Protocolos de IoT
- **Camada Física / Enlace:** **BLE** (curto alcance, ultrabaixo consumo), **ZigBee / Thread** (malha/mesh 802.15.4), **LoRaWAN** (longo alcance em km, taxa muito baixa, anos em bateria), **Wi-Fi** (alto consumo e alta banda).
- **Camada de Aplicação:** **MQTT** (modelo *Publish/Subscribe* leve com broker central sobre TCP — ideal para telemetria IoT) e **CoAP** (estilo REST leve sobre UDP com suporte a multicast).`,
        keyFormulas: [
          {
            label: 'Condição Suficiente de Escalonabilidade RMS (Liu & Layland)',
            latex: 'U = \\sum_{i=1}^{n} \\frac{C_i}{T_i} \\le n\\!\\left(2^{1/n} - 1\\right) \\xrightarrow{n\\to\\infty} \\ln 2 \\approx 0{,}693',
            note: 'No EDF (prioridade dinâmica), a condição necessária e suficiente é simplesmente U ≤ 1.',
          },
          {
            label: 'Taxa Útil de Bytes em UART',
            latex: 'R_{\\text{bytes/s}} = \\frac{\\text{Baud Rate}}{1 + N_{\\text{dados}} + N_{\\text{paridade}} + N_{\\text{stop}}}',
            note: 'Em 8N1 são sempre 10 bits transmitidos por byte útil.',
          },
        ],
      },
    ],
    inepTraps: [
      'Usar apenas OR bit a bit (`REG |= 0x0018`) para gravar um campo multi-bit num registrador: isso NÃO zera bits que já estavam em `1`! A forma correta exige limpar a máscara antes: `REG = (REG & ~0x0038) | 0x0018`.',
      'Inverter Little-Endian e Big-Endian em questões de mapa de memória: lembre-se do mnemônico **Little = LSB no menor endereço** (x86/ARM padrão) e **Big = MSB no menor endereço** (TCP/IP).',
      'Dividir por `1000` em vez de `1024` ao dimensionar memórias EEPROM/Flash em Kbits/KiB, ou esquecer de arredondar para a potência de 2 comercial imediatamente superior (ex.: 93 Kbits requer EEPROM de 128 Kbits!).',
      'Achar que maior frequência de clock sempre garante menor tempo de execução: se uma CPU tiver CPI muito alto ou executar mais instruções (IC), pode ser mais lenta que outra com clock menor (`T = IC * CPI / f`).',
      'Confundir I2C com SPI: I2C usa apenas **2 fios** (SDA/SCL com pull-up), é half-duplex e tem endereçamento + ACK; SPI usa **4 fios** (MOSI/MISO/SCLK/CS), é full-duplex e mais rápido, mas exige um pino CS dedicado por escravo.',
    ],
    quickChecklist: [
      'Saber diferenciar Arquitetura de Von Neumann vs. Harvard e RISC (load/store, instrução fixa) vs. CISC.',
      'Praticar a escrita byte a byte em Little-Endian e Big-Endian e a conversão IEEE 754 (viés 127).',
      'Dominar as fórmulas de `T_CPU`, Lei de Amdahl e os 3 tipos de hazards de pipeline (Estrutural, Dados/Forwarding, Controle/Predição).',
      'Treinar decomposição de endereço de cache em Tag, Índice e Offset, além de Write-Through vs. Write-Back e cálculo de AMAT.',
      'Decorar o padrão de máscara em C: `REG = (REG & ~MASK) | VAL`, e o papel da palavra-chave `volatile` em ISRs.',
      'Lembrar a equação do ADC linear de `n` bits (`x = (Vo/Vref)*(2^n - 1)`) e o cálculo de memória para data loggers em Kbits.',
      'Ter na ponta da língua a tabela comparativa UART vs. I2C vs. SPI vs. CAN e o cálculo de taxa efetiva em 8N1 (10 bits/byte).',
      'Revisar RTOS: Hard vs. Soft Real-Time, RMS (`U <= 69,3%`) vs. EDF (`U <= 100%`) e inversão de prioridade.',
    ],
  },

  // =========================================================================
  // MÓDULO 3: SISTEMAS DIGITAIS E ELETRÔNICA DIGITAL
  // =========================================================================
  {
    id: 'sistemas-digitais',
    title: 'Sistemas Digitais e Eletrônica Digital',
    subtitle: 'Sistemas numéricos, álgebra booleana, mapas de Karnaugh, circuitos combinacionais, flip-flops e FSMs',
    estimatedMinutes: 90,
    overview:
      'Sistemas Digitais constituem a base lógica de todo computador moderno, desde portas elementares CMOS até ULAs, controladores síncronos e FPGAs. No ENADE, esta disciplina é frequentemente testada por meio de questões visuais de circuitos lógicos, simplificação booleana/Karnaugh, análise de formas de onda temporais de Flip-Flops e interpretação/síntese de Máquinas de Estados Finitos (Mealy e Moore).',
    enadeWeightNote:
      'O INEP costuma exigir: (1) leitura direta de circuitos combinacionais para deduzir a expressão booleana simplificada ou a tabela-verdade equivalente; (2) minimização usando Mapas de Karnaugh (inclusive com condições don\'t-care); (3) implementação de funções lógicas com portas universais (NAND/NOR) ou Multiplexadores; (4) distinção rigorosa entre Máquinas de Moore e Mealy, equações características de Flip-Flops (D, T, JK) e cálculo de frequência máxima de clock.',
    sections: [
      {
        id: 'dig-sistemas-numeracao',
        title: '1. Sistemas de Numeração, Complemento de 2 e Códigos Digitais',
        content: `Todo processamento digital opera sobre bits ($\\{0, 1\\}$). Dominar conversões rápidas entre bases e aritmética binária com sinal evita erros bobos em provas de sistemas digitais, arquitetura e redes.

### Conversões entre Bases (Binário, Octal, Decimal, Hexadecimal)
- **Decimal $\\to$ Binário:** para a parte inteira, divisões sucessivas por $2$ lendo os restos de baixo para cima. Para a parte fracionária, multiplicações sucessivas por $2$ lendo as partes inteiras de cima para baixo (ex.: $0{,}625 \\times 2 = \\mathbf{1}{,}25 \\to 0{,}25 \\times 2 = \\mathbf{0}{,}5 \\to 0{,}5 \\times 2 = \\mathbf{1}{,}0 \\Rightarrow 0{,}101_2$).
- **Binário $\\leftrightarrow$ Hexadecimal / Octal:** agrupe os bits de **4 em 4** a partir da vírgula para Hexadecimal ($2^4 = 16$) e de **3 em 3** para Octal ($2^3 = 8$). Exemplo: \`1011 0110_2\` = \`B6_16\`.

### Representação de Inteiros com Sinal: Complemento de 2
É o padrão universal nos processadores atuais porque possui **zero único** e permite executar subtração com o **mesmo somador binário** ($A - B = A + (-B)$):
- **Bit mais significativo (MSB):** indica o sinal (\`0\` = positivo/zero; \`1\` = negativo) com peso negativo $-2^{n-1}$.
- **Faixa representável em $n$ bits:** $\\left[-2^{n-1},\\; 2^{n-1} - 1\\right]$. Para 8 bits: $-128$ até $+127$ (note a assimetria: $-128$ existe, mas $+128$ não!).
- **Regra de negação:** $-X = \\overline{X} + 1$ (inverte todos os bits — Complemento de 1 — e soma 1). *Atalho mental rápido:* copie os bits da direita para a esquerda até o primeiro \`1\` (inclusive) e inverta todos os bits à esquerda dele!
- **Extensão de sinal:** ao passar de 8 para 16 bits, repete-se o MSB nos novos bits à esquerda (ex.: $-5$ em 4 bits = \`1011\` $\\to$ em 8 bits = \`1111 1011\`).

### Carry Out vs. Overflow (Pegadinha Clássica!)
- Em **aritmética sem sinal (*unsigned*)**, o estouro é indicado pelo **Carry Out ($C_n = 1$)** do MSB.
- Em **Complemento de 2 (*signed*)**, o Carry Out é **ignorado**! O **Overflow ($V$)** ocorre se e somente se somarmos dois números de **mesmo sinal** e obtivermos um resultado de **sinal oposto**. Em circuito digital, isso equivale exatamente a:
$$V = C_{n-1} \\oplus C_n$$
(vai-um de entrada no MSB diferente do vai-um de saída do MSB).

### Exemplo Resolvido (Aritmética em Complemento de 2 — 8 bits)
Calcule $+75 + (+60)$ em 8 bits com sinal:
- $+75 = \\text{0100 1011}_2$ e $+60 = \\text{0011 1100}_2$.
- Soma binária: \`0100 1011 + 0011 1100 = 1000 0111\` ($C_7 = 1$, $C_8 = 0$).
- Verificação: somamos dois positivos e o MSB deu \`1\` (interpretado como $-121$)! De fato, $V = C_7 \\oplus C_8 = 1 \\oplus 0 = 1$ (**Overflow detectado**, pois $+135 > +127$).

### Códigos Digitais Essenciais
| Código | Definição | Propriedade / Uso Principal |
| :--- | :--- | :--- |
| **BCD (8421)** | Cada dígito decimal (0–9) codificado em 4 bits (\`0000\` a \`1001\`) | Displays 7 segmentos, relógios digitais; códigos \`1010\`–\`1111\` são inválidos (*don't-care*) |
| **Código Gray** | Valores adjacentes diferem em **exatamente 1 bit** ($G_i = B_i \\oplus B_{i+1}$) | Evita leituras falsas em sensores ópticos (*encoders*) e ordena eixos do **Mapa de Karnaugh** (\`00, 01, 11, 10\`) |
| **Paridade / Hamming** | Adiciona bits redundantes para proteção de dados | Paridade detecta 1 erro; **Código de Hamming** ($2^r \\ge m + r + 1$) detecta 2 e **corrige 1 erro** de bit |`,
        keyFormulas: [
          {
            label: 'Complemento de 2 (n bits)',
            latex: '\\text{Faixa: } \\left[-2^{n-1},\\; 2^{n-1} - 1\\right], \\qquad -X = \\overline{X} + 1',
          },
          {
            label: 'Detecção de Overflow em Complemento de 2',
            latex: 'V = C_{\\text{in(MSB)}} \\oplus C_{\\text{out(MSB)}}',
            note: 'Overflow ocorre apenas ao somar operandos de sinais iguais gerando resultado de sinal oposto.',
          },
        ],
      },
      {
        id: 'dig-algebra-booleana',
        title: '2. Álgebra Booleana, Portas Lógicas, Formas Canônicas e Portas Universais',
        content: `A Álgebra Booleana fornece a base matemática formal para analisar, provar equivalências e simplificar circuitos digitais.

### Portas Lógicas Fundamentais e Derivadas
| Porta | Expressão | Comportamento Resumido |
| :--- | :--- | :--- |
| **AND** | $A \\cdot B$ | Saída \`1\` somente se **todas** as entradas forem \`1\` |
| **OR** | $A + B$ | Saída \`1\` se **pelo menos uma** entrada for \`1\` |
| **NOT** | $\\overline{A}$ | Inverte o nível lógico |
| **NAND** | $\\overline{A \\cdot B}$ | Saída \`0\` somente se todas forem \`1\` (**Porta Universal**) |
| **NOR** | $\\overline{A + B}$ | Saída \`1\` somente se todas forem \`0\` (**Porta Universal**) |
| **XOR** | $A \\oplus B = \\overline{A}B + A\\overline{B}$ | Saída \`1\` quando as entradas são **diferentes** (detector de ímpar) |
| **XNOR** | $\\overline{A \\oplus B} = AB + \\overline{A}\\,\\overline{B}$ | Saída \`1\` quando as entradas são **iguais** (comparador de igualdade) |

### Teoremas e Identidades de Simplificação Obrigatórios
- **Identidade e Elemento Nulo:** $A + 0 = A$, $A \\cdot 1 = A$, $A + 1 = 1$, $A \\cdot 0 = 0$.
- **Idempotência e Complemento:** $A + A = A$, $A \\cdot A = A$, $A + \\overline{A} = 1$, $A \\cdot \\overline{A} = 0$, $\\overline{\\overline{A}} = A$.
- **Distributiva (atenção à segunda forma!):** $A(B+C) = AB + AC$ e **$A + BC = (A+B)(A+C)$**.
- **Absorção (muito cobrada!):** $A + AB = A$ e **$A + \\overline{A}B = A + B$**.
- **Teorema do Consenso:** $AB + \\overline{A}C + BC = AB + \\overline{A}C$ (o termo redundante $BC$ pode ser eliminado — ou mantido intencionalmente para eliminar *hazards*!).
- **Leis de De Morgan:**
$$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\qquad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$
(*"Quebra a barra, troca o sinal!"*)

### Formas Canônicas: Mintermos (SOP) e Maxtermos (POS)
- **Soma de Produtos (SOP — $\\sum m$):** OR de todos os **mintermos** (produtos de todas as variáveis) onde a saída vale \`1\`. No mintermo, variável \`1\` aparece normal e \`0\` aparece barrada (ex.: linha \`101\` $\\Rightarrow m_5 = A\\overline{B}C$).
- **Produto de Somas (POS — $\\prod M$):** AND de todos os **maxtermos** (somas de todas as variáveis) onde a saída vale \`0\`. **Cuidado com a inversão:** no maxtermo, variável \`0\` aparece normal e \`1\` aparece barrada (ex.: linha \`101\` $\\Rightarrow M_5 = \\overline{A} + B + \\overline{C}$).

### Portas Universais (NAND e NOR)
Qualquer circuito lógico pode ser implementado usando **somente portas NAND** (ou **somente portas NOR**):
- **NOT com NAND:** $\\overline{A} = \\overline{A \\cdot A}$ (curto-circuitar as duas entradas da NAND).
- **AND com NAND:** $A \\cdot B = \\overline{\\overline{A \\cdot B}}$ (NAND seguida de inversor NAND).
- **OR com NAND (via De Morgan):** $A + B = \\overline{\\overline{A} \\cdot \\overline{B}}$ (inverter $A$ e $B$ com NANDs e entrar numa 3ª NAND).
- **Truque rápido para converter qualquer circuito SOP (AND-OR) para NAND-NAND:** substitua **todas** as portas AND da 1ª camada e a porta OR da 2ª camada diretamente por portas NAND (pois duas bolhas de inversão em série se cancelam!).

### Exemplo Resolvido (Simplificação Algébrica)
Simplifique $F = \\overline{A}\\,\\overline{B}C + \\overline{A}BC + A\\overline{B}C + ABC$:
1. Coloque $C$ em evidência: $F = C(\\overline{A}\\,\\overline{B} + \\overline{A}B + A\\overline{B} + AB)$.
2. Agrupe os pares: $F = C[\\overline{A}(\\overline{B} + B) + A(\\overline{B} + B)] = C[\\overline{A}(1) + A(1)] = C(\\overline{A} + A) = C$.`,
        keyFormulas: [
          {
            label: 'Leis de De Morgan',
            latex: '\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\qquad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}',
          },
          {
            label: 'Identidades de Absorção e XOR',
            latex: 'A + AB = A, \\qquad A + \\overline{A}B = A + B, \\qquad A \\oplus B = \\overline{A}B + A\\overline{B}',
          },
        ],
      },
      {
        id: 'dig-karnaugh',
        title: '3. Minimização com Mapas de Karnaugh e Condições Don\'t-Care',
        content: `O **Mapa de Karnaugh (Mapa-K)** é o método gráfico sistemático para encontrar a expressão booleana mínima (SOP ou POS) de funções de até 4 ou 5 variáveis sem depender de intuição algébrica.

### Regras de Ouro do Mapa de Karnaugh
1. **Ordenação em Código Gray:** as linhas e colunas seguem obrigatoriamente a sequência **\`00, 01, 11, 10\`** (nunca \`10\` antes de \`11\`!), garantindo que células vizinhas difiram em apenas **1 bit**.
2. **Adjacência Toroidal (Wrap-Around):** a borda superior é adjacente à inferior, a borda esquerda é adjacente à direita e os **4 cantos** formam um grupo válido de 4 células!
3. **Tamanhos de Grupos:** todo agrupamento deve ser retangular/quadrado contendo uma **potência de 2** células ($1, 2, 4, 8, 16$). Um grupo de $2^k$ células **elimina exatamente $k$ variáveis** (aquelas que mudam de \`0\` para \`1\` dentro do grupo).
4. **Minimização:** forme os **maiores grupos possíveis** (implicantes primos), identifique os **implicantes primos essenciais** (grupos que cobrem pelo menos um \`1\` que nenhum outro implicante primo cobre) e cubra os \`1\`s restantes com o menor número de grupos. Sobreposição de \`1\`s é permitida se aumentar o tamanho de um grupo!
5. **Condições *Don't-Care* (\`X\` ou \`d\`):** correspondem a combinações de entrada que nunca ocorrem na prática (ex.: dígitos 10–15 em BCD). Trate cada \`X\` como \`1\` **somente se ajudar a formar um grupo maior**; caso contrário, ignore-o (trate como \`0\`). Nunca forme um grupo contendo apenas \`X\`s!

### Exemplo Resolvido Passo a Passo (Mapa de Karnaugh de 4 Variáveis)
Minimize a função $F(A,B,C,D) = \\sum m(0, 1, 2, 5, 8, 9, 10) + d(7, 15)$ (onde $AB$ define as linhas e $CD$ as colunas):

| $AB \\setminus CD$ | \`00\` | \`01\` | \`11\` | \`10\` |
| :--- | :--- | :--- | :--- | :--- |
| **\`00\`** | **1** ($m_0$) | **1** ($m_1$) | 0 ($m_3$) | **1** ($m_2$) |
| **\`01\`** | 0 ($m_4$) | **1** ($m_5$) | **X** ($d_7$) | 0 ($m_6$) |
| **\`11\`** | 0 ($m_{12}$) | 0 ($m_{13}$) | **X** ($d_{15}$) | 0 ($m_{14}$) |
| **\`10\`** | **1** ($m_8$) | **1** ($m_9$) | 0 ($m_{11}$) | **1** ($m_{10}$) |

**Agrupamento passo a passo:**
1. **Grupo 1 (4 células — borda superior + inferior nas colunas \`00\` e \`01\`):** cobre $m_0, m_1, m_8, m_9$. Como $A$ varia (\`0\` e \`1\`), $B=0$ fixo, $C=0$ fixo e $D$ varia $\\Rightarrow$ termo **$\\overline{B}\\,\\overline{C}$**.
2. **Grupo 2 (4 células — os 4 cantos!):** cobre $m_0, m_2, m_8, m_{10}$. Como $A$ varia, $B=0$ fixo, $C$ varia e $D=0$ fixo $\\Rightarrow$ termo **$\\overline{B}\\,\\overline{D}$**.
3. **Grupo 3 (2 células — $m_1$ e $m_5$):** para cobrir $m_5$ (\`0101\`), agrupamos com $m_1$ (\`0001\`) (note que $m_5$ também poderia se unir ao \`X\` em $d_7$, gerando $\\overline{A}BD$, mas tanto $\\overline{A}\\,\\overline{C}D$ quanto $\\overline{A}BD$ têm 3 literais; o \`X\` em $d_{15}$ não precisa ser usado!). Escolhendo $m_1 + m_5$: $A=0$, $B$ varia, $C=0$, $D=1 \\Rightarrow$ termo **$\\overline{A}\\,\\overline{C}D$**.
4. **Expressão SOP mínima final:**
$$F(A,B,C,D) = \\overline{B}\\,\\overline{C} + \\overline{B}\\,\\overline{D} + \\overline{A}\\,\\overline{C}D$$

> **Como obter POS mínima no Mapa-K?** Agrupe os **zeros (\`0\`)** para encontrar a expressão mínima de $\\overline{F}$ e depois aplique De Morgan em toda a expressão (invertendo cada soma/produto e cada literal).`,
        keyFormulas: [
          {
            label: 'Eliminação de Variáveis em Mapa de Karnaugh',
            latex: '\\text{Grupo de } 2^k \\text{ células adjacentes} \\implies \\text{elimina } k \\text{ variáveis (restam } n - k \\text{ literais)}',
            note: 'Em um mapa de 4 variáveis: grupo de 8 gera 1 literal; grupo de 4 gera 2 literais; grupo de 2 gera 3 literais.',
          },
        ],
      },
      {
        id: 'dig-combinacionais',
        title: '4. Circuitos Combinacionais: Somadores, MUX, Decodificadores e Hazards',
        content: `Em um **circuito combinacional**, as saídas dependem **exclusivamente** da combinação atual das entradas (não existe memória nem realimentação).

### Blocos Aritméticos: Somadores e Subtratores
- **Meio-Somador (*Half Adder*):** soma 2 bits $A$ e $B$ (sem vai-um de entrada):
  $$S = A \\oplus B, \\qquad C_{\\text{out}} = A \\cdot B$$
- **Somador Completo (*Full Adder*):** soma $A$, $B$ e $C_{\\text{in}}$ (pode ser montado com 2 meios-somadores + 1 porta OR):
  $$S = A \\oplus B \\oplus C_{\\text{in}}, \\qquad C_{\\text{out}} = A B + C_{\\text{in}}(A \\oplus B)$$
- **Somador-Subtrator de $n$ bits:** adiciona uma porta XOR controlada pelo sinal \`SUB\` em cada entrada $B_i$ ($B_i' = B_i \\oplus \\text{SUB}$) e liga $C_0 = \\text{SUB}$. Se \`SUB=0\`, calcula $A + B$; se \`SUB=1\`, inverte $B$ e soma $1$, calculando $A + (\\overline{B} + 1) = A - B$!
- **Ripple-Carry vs. Carry Look-Ahead (CLA):** no Ripple-Carry, o vai-um propaga em série por $n$ estágios ($O(n)$ atraso). O **CLA** calcula os vai-uns em paralelo definindo *Generate* $G_i = A_i B_i$ e *Propagate* $P_i = A_i \\oplus B_i$, onde $C_{i+1} = G_i + P_i C_i$, reduzindo drasticamente o caminho crítico.

### Multiplexadores (MUX), Decodificadores e Codificadores
| Bloco | Entradas / Saídas | Função e Uso Clássico em Provas |
| :--- | :--- | :--- |
| **Multiplexador (MUX $2^n : 1$)** | $2^n$ dados, $n$ seletores $\\to$ 1 saída | Seleciona 1 entrada de dados; **implementa qualquer função booleana de $n$ variáveis** (ligando 0/1 nos dados) ou até **$n+1$ variáveis** (usando a $(n+1)$-ésima variável $D$ e $\\overline{D}$ nos dados!) |
| **Demultiplexador (DEMUX $1 : 2^n$)** | 1 dado, $n$ seletores $\\to$ $2^n$ saídas | Roteia a entrada única para uma das $2^n$ saídas |
| **Decodificador ($n \\to 2^n$)** | $n$ entradas $\\to$ $2^n$ saídas (só 1 ativa) | Gera todos os mintermos; decodificação de endereços de memória e display BCD-7 segmentos |
| **Codificador de Prioridade** | $2^n$ entradas $\\to$ $n$ bits (+ bit Valid) | Retorna o índice binário da entrada ativa de maior prioridade (ex.: controlador de interrupções) |

**Exemplo Resolvido (Síntese de função de 3 variáveis usando MUX 4:1):**
Implemente $F(A,B,C) = \\sum m(1, 2, 6, 7)$ com um MUX 4:1 tendo $A, B$ nas linhas de seleção $(S_1, S_0)$:
- Quando $AB = 00$ ($I_0$): $m_0=0, m_1=1 \\Rightarrow F = C$, logo **$I_0 = C$**.
- Quando $AB = 01$ ($I_1$): $m_2=1, m_3=0 \\Rightarrow F = \\overline{C}$, logo **$I_1 = \\overline{C}$**.
- Quando $AB = 10$ ($I_2$): $m_4=0, m_5=0 \\Rightarrow F = 0$, logo **$I_2 = 0$**.
- Quando $AB = 11$ ($I_3$): $m_6=1, m_7=1 \\Rightarrow F = 1$, logo **$I_3 = 1$**.

### Hazards Combinacionais (Glitches)
Atrasos diferentes em caminhos internos podem produzir pulsos espúrios temporários (*glitches*):
- **Hazard Estático-1:** saída deveria permanecer em \`1\`, mas cai brevemente a \`0\` ao transitar entre dois grupos adjacentes não cobertos por um mesmo termo no Mapa-K. **Solução:** adicionar o termo de consenso redundante ligando os dois grupos adjacentes!`,
        keyFormulas: [
          {
            label: 'Equações do Somador Completo (Full Adder)',
            latex: 'S = A \\oplus B \\oplus C_{\\text{in}}, \\qquad C_{\\text{out}} = AB + C_{\\text{in}}(A \\oplus B)',
          },
          {
            label: 'Equação Característica de um MUX 4:1',
            latex: 'Y = \\overline{S_1}\\,\\overline{S_0}I_0 + \\overline{S_1}S_0 I_1 + S_1\\overline{S_0}I_2 + S_1 S_0 I_3',
          },
        ],
        codeExample: {
          language: 'vhdl',
          title: 'Somador Completo e Multiplexador 4:1 em VHDL (estilo ENADE)',
          code: `library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity FullAdder is
    Port (
        A, B, Cin : in  STD_LOGIC;
        S, Cout   : out STD_LOGIC
    );
end FullAdder;

architecture FluxoDados of FullAdder is
begin
    S    <= A xor B xor Cin;
    Cout <= (A and B) or (Cin and (A xor B));
end FluxoDados;

-- Exemplo de MUX 4:1 concorrente em VHDL com seletor S(1 downto 0):
-- Y <= I0 when S = "00" else
--      I1 when S = "01" else
--      I2 when S = "10" else
--      I3;`,
        },
      },
      {
        id: 'dig-sequenciais-ff',
        title: '5. Circuitos Sequenciais: Latches, Flip-Flops, Temporização e Contadores',
        content: `Circuitos **sequenciais** possuem elementos de memória: suas saídas dependem das entradas atuais **e do estado anterior** armazenado.

### Latch vs. Flip-Flop
- **Latch:** sensível ao **nível** do sinal de habilitação (*Enable*). Enquanto \`EN = 1\`, o Latch D é transparente (saída $Q$ acompanha imediatamente $D$).
- **Flip-Flop (FF):** sensível à **borda** (*edge-triggered* — subida $\\uparrow$ ou descida $\\downarrow$) do sinal de *clock*. Só atualiza $Q$ no instante exato da transição ativa do clock, garantindo sincronismo rigoroso em circuitos complexos.

### Tabela Completa dos Flip-Flops (Equação Característica e Tabela de Excitação)
| Flip-Flop | Equação Característica ($Q^+$) | Comportamento | Tabela de Excitação ($Q \\to Q^+$) |
| :--- | :--- | :--- | :--- |
| **Tipo D** | $Q^+ = D$ | Copia $D$ na borda ativa do clock (armazenamento / atraso) | $D = Q^+$ (direto!) |
| **Tipo T** | $Q^+ = T \\oplus Q$ | $T=0$: mantém $Q$; $T=1$: inverte ($\\overline{Q}$) | $T = Q \\oplus Q^+$ (0 se igual, 1 se mudou) |
| **Tipo JK** | $Q^+ = J\\overline{Q} + \\overline{K}Q$ | \`00\` mantém, \`01\` Reset (0), \`10\` Set (1), \`11\` Toggle ($\\overline{Q}$) | $0\\to 0$: \`0X\`; $0\\to 1$: \`1X\`; $1\\to 0$: \`X1\`; $1\\to 1$: \`X0\` |
| **Tipo SR** | $Q^+ = S + \\overline{R}Q$ ($S\\cdot R=0$) | \`00\` mantém, \`01\` Reset, \`10\` Set, \`11\` **proibido/inválido** | $0\\to 0$: \`0X\`; $0\\to 1$: \`10\`; $1\\to 0$: \`01\`; $1\\to 1$: \`X0\` |

### Temporização Síncrona e Frequência Máxima de Clock ($f_{\\max}$)
Entre dois Flip-Flops consecutivos separados por uma lógica combinacional de atraso $t_{\\text{comb}}$:
- **Tempo de Setup ($t_{su}$):** tempo mínimo em que a entrada $D$ deve ficar estável **antes** da borda do clock.
- **Tempo de Hold ($t_h$):** tempo mínimo em que $D$ deve permanecer estável **depois** da borda do clock.
- **Atraso Clock-to-Q ($t_{c\\to q}$):** tempo entre a borda do clock e a estabilização da saída $Q$.
- **Condição de Setup (determina a frequência máxima!):**
$$T_{\\text{clk},\\min} = t_{c\\to q} + t_{\\text{comb},\\max} + t_{su} - t_{\\text{skew}}, \\qquad f_{\\max} = \\frac{1}{T_{\\text{clk},\\min}}$$
- **Condição de Hold (não depende da frequência do clock!):** $t_{c\\to q,\\min} + t_{\\text{comb},\\min} \\ge t_h + t_{\\text{skew}}$.

**Exemplo Resolvido:** Um circuito síncrono sem *skew* ($t_{\\text{skew}} = 0$) possui FFs com $t_{c\\to q} = 2\\text{ ns}$, $t_{su} = 1{,}5\\text{ ns}$ e caminho combinacional crítico $t_{\\text{comb},\\max} = 6{,}5\\text{ ns}$. Qual é $f_{\\max}$?
$$T_{\\text{clk},\\min} = 2 + 6{,}5 + 1{,}5 = 10\\text{ ns} = 10 \\times 10^{-9}\\text{ s} \\implies f_{\\max} = \\frac{1}{10 \\times 10^{-9}} = 100\\text{ MHz}$$

### Registradores de Deslocamento e Contadores
- **Registradores de Deslocamento (*Shift Registers*):** SISO, SIPO (conversão serial $\\to$ paralelo), PISO (paralelo $\\to$ serial) e PIPO. Um deslocamento à esquerda equivale a multiplicar por 2; à direita, dividir por 2.
- **Contadores Assíncronos (Ripple):** a saída $Q$ de um FF alimenta o clock do próximo. Simples, mas o atraso acumula ($n \\cdot t_{c\\to q}$). Cada estágio divide a frequência por 2 ($f_{\\text{out}} = f_{\\text{clk}} / 2^n$).
- **Contadores Síncronos:** todos os FFs recebem o **mesmo clock** simultaneamente; lógica combinacional decide quando cada bit alterna (em contador módulo-$M$, usam-se $\\lceil \\log_2 M \\rceil$ Flip-Flops).`,
        keyFormulas: [
          {
            label: 'Equações Características dos Flip-Flops (D, T, JK)',
            latex: 'Q^+_D = D, \\qquad Q^+_T = T \\oplus Q, \\qquad Q^+_{JK} = J\\overline{Q} + \\overline{K}Q',
          },
          {
            label: 'Período Mínimo e Frequência Máxima de Clock',
            latex: 'T_{\\text{clk},\\min} = t_{c\\to q} + t_{\\text{comb},\\max} + t_{su}, \\qquad f_{\\max} = \\frac{1}{T_{\\text{clk},\\min}}',
            note: 'Violar setup corrige-se reduzindo a frequência (ou usando pipeline); violar hold exige atrasar o caminho de dados.',
          },
        ],
      },
      {
        id: 'dig-fsm-fpga',
        title: '6. Máquinas de Estados Finitos (Mealy vs. Moore), FPGA e Família CMOS',
        content: `Máquinas de Estados Finitos (**FSMs**) implementam toda unidade de controle digital: controladores de semáforo, protocolos de comunicação, detectores de sequência e o controle interno de processadores.

### Máquina de Moore vs. Máquina de Mealy
| Critério | Máquina de Moore | Máquina de Mealy |
| :--- | :--- | :--- |
| **Dependência das saídas** | Depende **APENAS do estado atual** | Depende do **estado atual E das entradas atuais** |
| **Notação no diagrama** | Saída escrita **dentro do círculo** do estado (\`Estado / Saída\`) | Saída escrita **na seta de transição** (\`Entrada / Saída\`) |
| **Número de estados** | Geralmente **maior** (ou igual) para a mesma função | Geralmente **menor** (mais compacta) |
| **Tempo de resposta** | Muda saída somente **após a borda do clock** (1 ciclo de atraso) | Reage **imediatamente** à mudança na entrada (mesmo ciclo) |
| **Estabilidade / Glitches** | Saídas totalmente síncronas (imunes a ruído assíncrono na entrada) | Sujeita a *glitches* se a entrada oscilar entre bordas de clock |

### Exemplo Resolvido Completo (Síntese de FSM — Detector de Sequência \`101\` com Sobreposição)
Vamos projetar uma **Máquina de Mealy** que aciona saída $Z = 1$ no instante em que detecta a sequência serial \`101\` na entrada $X$ (permitindo sobreposição: em \`10101\`, detecta duas vezes!):
1. **Estados:**
   - $S_0$ (\`00\`): inicial (nenhum prefixo casado).
   - $S_1$ (\`01\`): último bit recebido foi \`1\`.
   - $S_2$ (\`10\`): últimos dois bits recebidos foram \`10\`.
2. **Tabela de Transições (Estado Atual $Q_1 Q_0$ e Entrada $X \\to$ Próximo Estado $Q_1^+ Q_0^+$ e Saída $Z$):**

| Estado Atual ($Q_1 Q_0$) | Se $X = 0$: Próx. Estado / $Z$ | Se $X = 1$: Próx. Estado / $Z$ |
| :--- | :--- | :--- |
| $S_0$ (\`00\`) | $S_0$ (\`00\`) / $Z = 0$ | $S_1$ (\`01\`) / $Z = 0$ |
| $S_1$ (\`01\`) | $S_2$ (\`10\`) / $Z = 0$ | $S_1$ (\`01\`) / $Z = 0$ |
| $S_2$ (\`10\`) | $S_0$ (\`00\`) / $Z = 0$ | $S_1$ (\`01\`) / **$Z = 1$** (sobrepõe o \`1\` final!) |

3. **Equações para Flip-Flops tipo D** ($D_1 = Q_1^+$, $D_0 = Q_0^+$, tratando o estado não usado \`11\` como *don't-care*):
   - $Q_1^+ = 1$ apenas em $(Q_1 Q_0 = 01, X = 0) \\implies D_1 = Q_0 \\cdot \\overline{X}$.
   - $Q_0^+ = 1$ sempre que $X = 1$ em todos os estados válidos $\\implies D_0 = X$.
   - Saída Mealy: $Z = Q_1 \\cdot X$ (note que $Z$ depende explicitamente da entrada $X$!).
   - *Observação:* em uma **Máquina de Moore** equivalente, seria necessário um **4º estado $S_3$** exclusivo para sinalizar \`101\` com $Z = 1$.

### Codificação de Estados, FPGAs e Eletrônica Digital CMOS
- **Codificação Binária Mínima** usa $\\lceil \\log_2 N \\rceil$ Flip-Flops para $N$ estados; **Codificação One-Hot** usa $N$ Flip-Flops (exatamente 1 bit em \`1\` por estado) — preferida em **FPGAs**, que possuem abundância de Flip-Flops e simplifica drasticamente a lógica combinacional de decodificação.
- **Dispositivos Lógicos Programáveis:** **PLA** (matrizes AND e OR programáveis), **PAL** (AND programável, OR fixa), **CPLD** (blocos tipo PAL não voláteis) e **FPGA** (matriz de **LUTs** — *Look-Up Tables* SRAM — + Flip-Flops + roteamento programável + blocos BRAM/DSP; configurada em VHDL/Verilog; reconfigurável, menor custo NRE que ASIC).
- **Família Lógica CMOS:** usa pares complementares de transistores PMOS (pull-up) e NMOS (pull-down). Possui **consumo estático quase nulo** (exceto correntes de fuga) e potência dinâmica proporcional ao quadrado da tensão de alimentação:
$$P_{\\text{din}} = \\alpha \\cdot C_L \\cdot V_{DD}^2 \\cdot f$$
Por isso, reduzir $V_{DD}$ gera ganho quadrático em economia de energia (base do *DVFS — Dynamic Voltage and Frequency Scaling*).`,
        keyFormulas: [
          {
            label: 'Número Mínimo de Flip-Flops para FSM de N Estados',
            latex: 'n_{\\text{FF}} = \\lceil \\log_2 N \\rceil \\quad (\\text{Binária}) \\qquad \\text{vs.} \\qquad n_{\\text{FF}} = N \\quad (\\text{One-Hot})',
          },
          {
            label: 'Potência Dinâmica em Circuitos CMOS',
            latex: 'P_{\\text{din}} = \\alpha \\cdot C_L \\cdot V_{DD}^2 \\cdot f',
            note: 'α = fator de atividade de chaveamento; C_L = capacitância de carga; V_DD = tensão; f = frequência.',
          },
        ],
        codeExample: {
          language: 'verilog',
          title: 'FSM Mealy detectora de sequência "101" (com sobreposição) em Verilog',
          code: `module detector_101_mealy (
    input  wire clk,
    input  wire rst,
    input  wire x,
    output reg  z
);
    localparam S0 = 2'b00, S1 = 2'b01, S2 = 2'b10;
    reg [1:0] estado_atual, prox_estado;

    // 1) Bloco sequencial: registrador de estado (borda de subida do clock)
    always @(posedge clk or posedge rst) begin
        if (rst) estado_atual <= S0;
        else     estado_atual <= prox_estado;
    end

    // 2) Bloco combinacional: proximo estado e saida Mealy (depende de estado e x)
    always @(*) begin
        prox_estado = S0;
        z = 1'b0;
        case (estado_atual)
            S0: prox_estado = x ? S1 : S0;
            S1: prox_estado = x ? S1 : S2;
            S2: begin
                if (x) begin
                    prox_estado = S1; // Sobreposicao do '1' final
                    z = 1'b1;         // Sequencia "101" detectada!
                end else
                    prox_estado = S0;
            end
            default: prox_estado = S0;
        endcase
    end
endmodule`,
        },
      },
    ],
    inepTraps: [
      'Confundir Carry Out com Overflow em Complemento de 2: somar `-1` (`1111`) com `+1` (`0001`) em 4 bits gera `0000` com `Carry Out = 1`, mas o resultado é exato (`0`) e **NÃO há overflow**! Overflow só ocorre quando `C_in(MSB) XOR C_out(MSB) = 1`.',
      'Ordenar as colunas/linhas do Mapa de Karnaugh em binário natural (`00, 01, 10, 11`) em vez de **Código Gray (`00, 01, 11, 10`)**, invalidando todas as adjacências e o resultado da minimização.',
      'Criar um agrupamento contendo **somente células Don\'t-Care (`X`)** no Mapa de Karnaugh: isso adiciona termos inúteis ao circuito; `X` só deve ser incluído para expandir um grupo que contenha ao menos um `1`.',
      'Inverter a definição de Moore e Mealy: lembre-se que **Moore = só estado** (duas letras `o` = depende só do estad**o**), enquanto **Mealy = estado + entrada** (saída na transição, responde mais rápido, porém suscetível a glitches).',
      'Tratar Latch e Flip-Flop como sinônimos: Latch é sensível ao **nível** do sinal de controle (transparente), enquanto Flip-Flop é sensível apenas à **borda** de subida ou descida do clock.',
    ],
    quickChecklist: [
      'Dominar Complemento de 2 (faixa `[-2^(n-1), 2^(n-1)-1]`, `-X = ~X + 1`) e a diferença entre Carry Out e Overflow.',
      'Aplicar sem hesitar as Leis de De Morgan, Absorção (`A + ~A*B = A + B`) e conversão de SOP para portas somente-NAND.',
      'Montar Mapas de Karnaugh em Código Gray (`00, 01, 11, 10`), lembrar dos 4 cantos adjacentes e usar `X` (don\'t-care) corretamente.',
      'Saber as equações do Full Adder (`S = A XOR B XOR Cin`) e implementar funções de `n+1` variáveis com MUX `2^n:1`.',
      'Memorizar as equações características e tabelas de excitação dos Flip-Flops D, T e JK (`JK = 11` faz Toggle!).',
      'Calcular frequência máxima de clock `f_max = 1 / (t_cq + t_comb + t_su)` e distinguir violação de setup vs. hold.',
      'Diferenciar Máquinas de Moore e Mealy quanto a dependências, diagrama, latência e número de estados.',
      'Conhecer a arquitetura básica de FPGAs (LUTs + FFs + roteamento, codificação One-Hot) e a fórmula de potência CMOS (`α C V^2 f`).',
    ],
  },

  // =========================================================================
  // MÓDULO 4: SISTEMAS OPERACIONAIS
  // =========================================================================
  {
    id: 'sistemas-operacionais',
    title: 'Sistemas Operacionais',
    subtitle: 'Processos, threads, escalonamento de CPU, sincronização, deadlocks, gerência de memória, paginação e virtualização',
    estimatedMinutes: 95,
    overview:
      'Sistemas Operacionais fazem a ponte entre o hardware físico e as aplicações concorrentes. Esta disciplina tem peso altíssimo no ENADE porque envolve análise quantitativa (escalonamento, tradução de endereços, faltas de página e algoritmos de alocação de memória) aliada a raciocínio crítico sobre concorrência, impasses (deadlocks), desempenho e virtualização moderna.',
    enadeWeightNote:
      'Clássicos cobrados pelo INEP incluem: (1) discursivas comparando estratégias de alocação particionada dinâmica First-Fit, Best-Fit e Worst-Fit e os micro-fragmentos gerados pelo Best-Fit (ENADE 2017 D5); (2) cálculo de tempo médio de espera/turnaround em FCFS, SJF/SRTF e Round-Robin; (3) paginação, TLB, EAT, Anomalia de Belady (FIFO vs LRU) e Thrashing; (4) condições de Coffman para deadlock, semáforos/mutex, diferenças entre processos e threads e hypervisors Tipo 1 vs Tipo 2.',
    sections: [
      {
        id: 'so-arquitetura-processos',
        title: '1. Arquitetura do Núcleo, Processos, Estados e Threads',
        content: `O Sistema Operacional desempenha dois papéis centrais: **abstração** (fornecer uma máquina virtual limpa aos programas) e **gerência de recursos** (multiplexar CPU, RAM e E/S no tempo e no espaço com proteção e justiça).

### Modo Usuário vs. Modo Núcleo (Kernel) e Arquiteturas de SO
O hardware implementa no mínimo dois níveis de privilégio: **Modo Usuário** (instruções privilegiadas de E/S e alteração de tabelas de páginas são bloqueadas) e **Modo Kernel** (acesso irrestrito ao hardware). Um programa de usuário solicita serviços do SO por meio de uma **Chamada de Sistema (*Syscall*)**, que dispara uma instrução *trap* (interrupção de software) comutando com segurança para o modo kernel.
- **Kernel Monolítico (Linux):** escalonador, memória, sistema de arquivos e drivers rodam no mesmo espaço de endereço do kernel (altíssimo desempenho; falha em driver pode derrubar o sistema).
- **Microkernel (Minix, QNX):** núcleo mínimo (IPC, escalonamento básico, memória mínima); drivers e sistemas de arquivos rodam como processos de usuário (maior confiabilidade/isolamento, mas maior overhead de trocas de mensagem IPC).
- **Híbrido (Windows NT, macOS/XNU):** combina modularidade estrutural com execução de serviços críticos em modo kernel para desempenho.

### Processos, PCB e Diagrama de 5 Estados
Um **processo** é um programa em execução, composto por imagem de memória (**Text, Data/BSS, Heap e Stack**) e representado no núcleo pelo **PCB (*Process Control Block*)** (PID, estado, registradores, contador de programa PC, ponteiros de memória/tabela de páginas, arquivos abertos).

**Ciclo de Vida de 5 Estados:**
1. **Novo (New):** processo sendo criado.
2. **Pronto (Ready):** na memória, aguardando o escalonador alocar um núcleo de CPU.
3. **Executando (Running):** instruções em execução na CPU.
4. **Bloqueado / Espera (Waiting/Blocked):** suspenso aguardando evento externo (leitura de disco, rede, semáforo).
5. **Finalizado (Terminated):** encerrou execução; recursos sendo liberados.

> **Regra de ouro das transições:** um processo **Bloqueado NUNCA vai diretamente para Executando**! Quando a operação de E/S conclui (via interrupção), ele volta primeiro para a fila de **Pronto**, e só depois o escalonador o promove para **Executando**.

### Processos vs. Threads
| Aspecto | Processos Distintos | Threads do Mesmo Processo |
| :--- | :--- | :--- |
| **Espaço de endereçamento** | Isolado (protegido pela MMU) | **Compartilhado** (Código, Dados Globais, Heap e Arquivos abertos) |
| **Estado privado** | Tudo é privado (PCB independente) | **Contador de Programa (PC), Registradores e Pilha (Stack)** |
| **Troca de contexto** | Pesada (troca tabela de páginas + invalidação TLB) | **Leve** (mantém mesmo espaço virtual) |
| **Comunicação (IPC)** | Exige pipes, sockets, memória compartilhada (via SO) | Direta via variáveis globais/heap (exige sincronização!) |

**Modelos de Mapeamento de Threads:**
- **Muitos-para-Um (ULT — Nível de Usuário):** criação e troca ultrarrápidas sem envolver o kernel, mas **uma única syscall bloqueante trava todas as threads do processo** e não há paralelismo real em multicore.
- **Um-para-Um (KLT — Nível de Kernel, padrão Linux/Windows):** verdadeiro paralelismo em múltiplos núcleos; bloqueio de uma thread não afeta as demais.
- **Muitos-para-Muitos (M:N):** combina $M$ threads de usuário multiplexadas em $N$ threads de kernel.`,
        keyFormulas: [
          {
            label: 'Total de Processos Criados por k Chamadas fork() Consecutivas',
            latex: 'N_{\\text{total}} = 2^k, \\qquad N_{\\text{novos filhos}} = 2^k - 1',
            note: 'Cada fork() bem-sucedido duplica todos os processos vivos até aquele ponto; retorna 0 no filho e PID>0 no pai.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Criação de processo filho com fork()/wait() em C (POSIX)',
          code: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    int x = 10;
    pid_t pid = fork(); // Duplica o processo (espaço de memória independente / CoW)

    if (pid == 0) {
        // Executa apenas no processo FILHO
        x += 5;
        printf("[Filho PID=%d] x = %d\\n", getpid(), x); // Imprime 15
    } else if (pid > 0) {
        // Executa apenas no processo PAI
        wait(NULL); // Bloqueia o pai até o filho finalizar (evita processo zumbi)
        printf("[Pai PID=%d] x = %d\\n", getpid(), x);   // Imprime 10 (isolado!)
    }
    return 0;
}`,
        },
      },
      {
        id: 'so-escalonamento',
        title: '2. Escalonamento de CPU e Análise Comparativa de Algoritmos',
        content: `O **escalonador de curto prazo** seleciona qual processo da fila de Prontos ocupará a CPU. O escalonamento pode ser **não-preemptivo** (o processo só larga a CPU ao terminar ou bloquear em E/S) ou **preemptivo** (o SO pode interromper o processo em execução por estouro de *quantum* ou chegada de processo mais prioritário).

### Métricas Fundamentais de Escalonamento
- **Tempo de Retorno (*Turnaround Time*):** tempo total desde a chegada do processo até sua conclusão: $T_{\\text{turnaround}} = T_{\\text{término}} - T_{\\text{chegada}}$.
- **Tempo de Espera (*Waiting Time*):** soma dos intervalos em que o processo ficou parado na fila de Prontos: $T_{\\text{espera}} = T_{\\text{turnaround}} - T_{\\text{burst}}$.
- **Tempo de Resposta (*Response Time*):** tempo desde a chegada até a **primeira** vez em que o processo recebe CPU (métrica crucial em sistemas interativos).

### Comparativo dos Algoritmos Clássicos
| Algoritmo | Preemptivo? | Ponto Forte | Ponto Fraco / Fenômeno Clássico |
| :--- | :--- | :--- | :--- |
| **FCFS (FIFO)** | Não | Simples, sem *starvation* | **Efeito Comboio** (processos curtos presos atrás de um processo longo *CPU-bound*) |
| **SJF (*Shortest Job First*)** | Não | **Ótimo** (minimiza tempo médio de espera entre não-preemptivos) | Exige prever o próximo *burst* (média exponencial); risco de **starvation** de processos longos |
| **SRTF (*Shortest Remaining Time First*)** | **Sim** | Versão preemptiva do SJF; menor tempo médio de espera possível | Alto overhead de preempções e risco de *starvation* |
| **Prioridades** | Sim ou Não | Atende requisitos de criticidade | **Starvation** em baixas prioridades → solucionado com **Aging** (envelhecimento) |
| **Round-Robin (RR)** | **Sim** (quantum $q$) | Excelente tempo de resposta e justiça (*time-sharing*) | $q$ muito grande $\\to$ degenera em FCFS; $q$ muito pequeno $\\to$ overhead excessivo de troca de contexto |
| **MLFQ (Filas Multinível c/ Realimentação)** | **Sim** | Promove processos *I/O-bound* e rebaixa *CPU-bound* dinamicamente | Mais complexo de calibrar (número de filas, quantums e regras de promoção/aging) |

### Exemplo Resolvido Passo a Passo (FCFS vs. SRTF vs. Round-Robin)
Considere os 3 processos abaixo:
- **$P_1$:** Chegada $= 0$, Burst $= 7$
- **$P_2$:** Chegada $= 2$, Burst $= 4$
- **$P_3$:** Chegada $= 4$, Burst $= 1$

1. **FCFS (ordem de chegada $P_1 \\to P_2 \\to P_3$):**
   - Gantt: \`[0..7: P1] [7..11: P2] [11..12: P3]\`.
   - Turnaround: $P_1 = 7-0 = 7$; $P_2 = 11-2 = 9$; $P_3 = 12-4 = 8$.
   - Espera ($T_{\\text{turn}} - T_{\\text{burst}}$): $P_1 = 0$; $P_2 = 9-4 = 5$; $P_3 = 8-1 = 7$. **Espera média** $= (0 + 5 + 7)/3 = \\mathbf{4{,}0}$.
2. **SRTF (menor tempo restante, preemptivo):**
   - Em $t=0$: roda $P_1$ (restante 7).
   - Em $t=2$: $P_1$ tem 5 restantes; chega $P_2$ com 4 $\\Rightarrow$ **$P_2$ preempta $P_1$**!
   - Em $t=4$: $P_2$ tem 2 restantes; chega $P_3$ com 1 $\\Rightarrow$ **$P_3$ preempta $P_2$**!
   - Em $t=5$: $P_3$ termina; retoma $P_2$ (2 restantes) até $t=7$; depois retoma $P_1$ (5 restantes) até $t=12$.
   - Gantt: \`[0..2: P1] [2..4: P2] [4..5: P3] [5..7: P2] [7..12: P1]\`.
   - Turnaround: $P_1 = 12-0 = 12$; $P_2 = 7-2 = 5$; $P_3 = 5-4 = 1$.
   - Espera: $P_1 = 12-7 = 5$; $P_2 = 5-4 = 1$; $P_3 = 1-1 = 0$. **Espera média** $= (5 + 1 + 0)/3 = \\mathbf{2{,}0}$ (metade do FCFS!).`,
        keyFormulas: [
          {
            label: 'Métricas de Turnaround e Espera',
            latex: 'T_{\\text{turnaround}} = T_{\\text{término}} - T_{\\text{chegada}}, \\qquad T_{\\text{espera}} = T_{\\text{turnaround}} - T_{\\text{burst}}',
          },
          {
            label: 'Estimativa de Burst no SJF (Média Exponencial)',
            latex: '\\tau_{n+1} = \\alpha\\, t_n + (1 - \\alpha)\\,\\tau_n, \\qquad 0 \\le \\alpha \\le 1',
            note: 't_n = duração real do último burst; τ_n = estimativa anterior; α controla o peso do histórico recente.',
          },
        ],
      },
      {
        id: 'so-sincronizacao-deadlock',
        title: '3. Concorrência, Sincronização (Mutex/Semáforos) e Deadlocks',
        content: `Quando múltiplas threads ou processos acessam dados compartilhados concorrentemente sem coordenação, o resultado depende da ordem imprevisível de escalonamento — isso é uma **Condição de Corrida (*Race Condition*)**. O trecho de código que manipula recursos compartilhados chama-se **Seção Crítica**.

### Os 3 Requisitos de uma Solução Correta para a Seção Crítica
1. **Exclusão Mútua:** no máximo um processo/thread executa sua seção crítica por vez.
2. **Progresso:** se ninguém está na seção crítica e há interessados, a decisão de quem entra não pode ser adiada indefinidamente por quem está fora dela.
3. **Espera Limitada (*Bounded Waiting*):** existe um limite finito de vezes que outros processos podem entrar na seção crítica após um processo solicitar entrada (impede *starvation*).

### Primitivas de Sincronização
- **Instruções Atômicas de Hardware:** \`Test-and-Set\` e \`Compare-and-Swap (CAS)\` — permitem construir *spinlocks* (espera ocupada, útil apenas em bloqueios curtíssimos em multicore).
- **Mutex (*Mutual Exclusion Lock*):** trava binária com **conceito de posse (*ownership*)**: somente a thread que adquiriu o mutex pode liberá-lo.
- **Semáforo (Dijkstra):** variável inteira protegida com duas operações atômicas:
  - \`wait(S)\` ou \`P(S)\` (*down*): decrementa \`S\`; se \`S < 0\`, bloqueia a thread na fila do semáforo (sem espera ocupada!).
  - \`signal(S)\` ou \`V(S)\` (*up*): incrementa \`S\`; se houver threads bloqueadas, acorda uma delas.
  - Diferente do mutex, o **semáforo contador** gerencia $N$ instâncias de um recurso e permite **sinalização entre threads distintas** (uma thread faz \`wait\`, outra faz \`signal\` — base do Produtor-Consumidor).
- **Monitores:** abstração de alto nível (ex.: \`synchronized\` em Java) onde a exclusão mútua é garantida automaticamente pelo compilador/runtime, combinada com **Variáveis de Condição** (\`wait\` / \`signal\`).

### Deadlocks (Impasses) e as 4 Condições de Coffman
Um **deadlock** ocorre quando um conjunto de processos fica bloqueado indefinidamente, cada um aguardando um recurso retido por outro membro do mesmo conjunto. Ele ocorre **se e somente se as 4 condições de Coffman existirem simultaneamente**:
1. **Exclusão Mútua:** pelo menos um recurso não é compartilhável.
2. **Posse e Espera (*Hold and Wait*):** processo retém ao menos um recurso enquanto espera por outros.
3. **Não Preempção:** recursos não podem ser tomados à força; só são liberados voluntariamente.
4. **Espera Circular:** existe um ciclo fechado $P_1 \\to P_2 \\to \\dots \\to P_k \\to P_1$ de dependências.

**Estratégias de Tratamento de Deadlocks:**
- **Prevenção:** projeta o sistema para impedir que pelo menos 1 das 4 condições ocorra (a mais prática é quebrar a **Espera Circular** impondo uma **ordem numérica global** obrigatória na aquisição de recursos!).
- **Evitação (Algoritmo do Banqueiro — Dijkstra):** antes de conceder um pedido, o SO simula a alocação e verifica se o sistema permanece em um **Estado Seguro** (existe uma sequência de execução onde todos os processos conseguem concluir com os recursos disponíveis + os liberados pelos anteriores, isto é, $\\text{Necessidade}_i \\le \\text{Disponível}$).
- **Detecção e Recuperação:** permite deadlocks ocorrerem, detecta ciclos (atenção: em **Grafo de Alocação de Recursos**, um ciclo é condição **necessária e suficiente** apenas quando cada tipo de recurso tem **1 instância**; se houver múltiplas instâncias, um ciclo é necessário mas **não suficiente**!) e recupera abortando processos ou preemptando recursos.
- **Ignorar (Algoritmo do Avestruz):** adotado por Linux/Windows para deadlocks de aplicações de usuário (custo de prevenção global supera a frequência rara do problema).`,
        keyFormulas: [
          {
            label: 'As 4 Condições Necessárias de Coffman',
            latex: '\\text{Deadlock} \\iff \\text{Exclusão Mútua} \\land \\text{Posse e Espera} \\land \\text{Não Preempção} \\land \\text{Espera Circular}',
          },
          {
            label: 'Critério de Estado Seguro (Algoritmo do Banqueiro)',
            latex: '\\text{Need}_i = \\text{Max}_i - \\text{Alloc}_i \\le \\text{Work} \\implies \\text{Work} \\leftarrow \\text{Work} + \\text{Alloc}_i',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Problema Produtor-Consumidor com Semáforos (atenção à ordem anti-deadlock!)',
          code: `#include <semaphore.h>
#include <pthread.h>

#define N 10
int buffer[N], in = 0, out = 0;

sem_t vazios;          // Inicializado com N (posições livres)
sem_t cheios;          // Inicializado com 0 (itens disponíveis)
pthread_mutex_t mutex; // Exclusão mútua sobre o buffer

void produzir(int item) {
    sem_wait(&vazios);           // 1º: garante espaço livre (NUNCA inverter com mutex!)
    pthread_mutex_lock(&mutex);  // 2º: entra na seção crítica
    buffer[in] = item;
    in = (in + 1) % N;
    pthread_mutex_unlock(&mutex);
    sem_post(&cheios);           // Sinaliza ao consumidor que há novo item
}

int consumir(void) {
    sem_wait(&cheios);           // 1º: garante item disponível
    pthread_mutex_lock(&mutex);  // 2º: entra na seção crítica
    int item = buffer[out];
    out = (out + 1) % N;
    pthread_mutex_unlock(&mutex);
    sem_post(&vazios);           // Sinaliza ao produtor que abriu vaga
    return item;
}
// SE inverter sem_wait(&vazios) e lock(&mutex): com buffer cheio, o produtor trava
// segurando o mutex e o consumidor nunca consegue entrar para consumir -> DEADLOCK!`,
        },
      },
      {
        id: 'so-memoria-contigua',
        title: '4. Gerência de Memória Contígua, Partições e Fragmentação (ENADE 2017 D5)',
        content: `A gerência de memória garante **proteção** entre processos e **relocação dinâmica**: a CPU gera **endereços lógicos (virtuais)** e a **MMU (*Memory Management Unit*)** os traduz em tempo de execução para **endereços físicos** na RAM. Na alocação contígua simples, a MMU utiliza dois registradores:
- **Registrador Limite:** verifica se $0 \\le \\text{Addr}_{\\text{lógico}} < \\text{Limite}$ (caso contrário, dispara exceção *Segmentation Fault / Trap*).
- **Registrador Base (Relocação):** calcula $\\text{Addr}_{\\text{físico}} = \\text{Base} + \\text{Addr}_{\\text{lógico}}$.

### Fragmentação Interna vs. Fragmentação Externa
- **Fragmentação Interna:** memória desperdiçada **dentro** de uma partição ou página já alocada ao processo (ex.: processo de 18 KB colocado em partição fixa de 32 KB desperdiça 14 KB internamente). Ocorre em **partições fixas** e na última página da **paginação**.
- **Fragmentação Externa:** existe memória livre total suficiente para atender um processo, mas ela está espalhada em **buracos não contíguos** menores que o pedido! Ocorre em **alocação contígua de partições dinâmicas** e em **segmentação**. Pode ser reduzida por **compactação** (caro em I/O/CPU) ou eliminada definitivamente pela **paginação**.

### Estratégias de Alocação em Partições Dinâmicas (COBRADÍSSIMO NO ENADE 2017 D5!)
| Estratégia | Regra de Escolha da Lacuna Livre | Vantagens | Desvantagens Clássicas |
| :--- | :--- | :--- | :--- |
| **First-Fit** | Aloca na **primeira** lacuna livre com tamanho $\\ge$ pedido | **Mais rápida** (para busca assim que acha); bom desempenho médio | Tende a acumular pequenos buracos no início da lista |
| **Next-Fit** | Igual ao First-Fit, mas inicia a busca **onde a última alocação parou** | Distribui os buracos de forma mais uniforme na RAM | Quebra grandes blocos livres no final da memória mais cedo |
| **Best-Fit** | Percorre toda a lista e aloca na **menor** lacuna livre $\\ge$ pedido | Preserva blocos grandes para pedidos futuros pesados | **Mais lenta** e produz enorme quantidade de **micro-fragmentos inutilizáveis** (sobras minúsculas)! |
| **Worst-Fit** | Percorre toda a lista e aloca na **maior** lacuna livre disponível | A sobra resultante tende a ser ainda grande e reaproveitável | Mais lenta e fragmenta rapidamente as maiores áreas contínuas |

### Exemplo Resolvido Completo (Simulação First-Fit vs. Best-Fit vs. Worst-Fit)
Considere 5 partições livres iniciais de **\`100 KB, 500 KB, 200 KB, 300 KB, 600 KB\`** (nessa ordem) e a chegada sequencial de 4 processos: **$P_1 = 212\\text{ KB}$, $P_2 = 417\\text{ KB}$, $P_3 = 112\\text{ KB}$, $P_4 = 426\\text{ KB}$**.

1. **First-Fit:**
   - $P_1 (212)$ vai na lacuna \`500\` $\\to$ sobra \`288 KB\`.
   - $P_2 (417)$ vai na lacuna \`600\` $\\to$ sobra \`183 KB\`.
   - $P_3 (112)$ vai na lacuna \`288\` (sobra de 500) $\\to$ sobra \`176 KB\`.
   - $P_4 (426)$ **NÃO COUBE!** (maiores lacunas livres: \`100, 176, 200, 300, 183\` — há 959 KB livres no total, exemplo puro de **fragmentação externa**!).
2. **Best-Fit:**
   - $P_1 (212)$ vai na menor suficiente: \`300\` $\\to$ sobra \`88 KB\`.
   - $P_2 (417)$ vai na menor suficiente: \`500\` $\\to$ sobra \`83 KB\`.
   - $P_3 (112)$ vai na menor suficiente: \`200\` $\\to$ sobra \`88 KB\`.
   - $P_4 (426)$ vai em \`600\` $\\to$ sobra \`174 KB\`. **Todos os 4 processos foram alocados!** (Note, porém, que a longo prazo o Best-Fit deixa sobras muito estreitas — \`88, 83, 88\` — que rapidamente viram micro-fragmentos inutilizáveis!).
3. **Worst-Fit:**
   - $P_1 (212)$ vai na maior: \`600\` $\\to$ sobra \`388 KB\`.
   - $P_2 (417)$ vai na maior: \`500\` $\\to$ sobra \`83 KB\`.
   - $P_3 (112)$ vai na maior: \`388\` $\\to$ sobra \`276 KB\`.
   - $P_4 (426)$ **NÃO COUBE!** (maior lacuna restante é \`300 KB\`).

### Segmentação
Divide o espaço lógico segundo a visão do programador (segmento de código, pilha, heap, bibliotecas), com tamanhos variáveis. Cada endereço lógico é um par \`(segmento s, deslocamento d)\`, traduzido pela **Tabela de Segmentos** (contendo \`Base\` e \`Limite\`). Facilita proteção e compartilhamento de código, mas ainda sofre de **fragmentação externa**.`,
        keyFormulas: [
          {
            label: 'Tradução e Proteção na Alocação Contígua (MMU)',
            latex: '\\text{Se } 0 \\le \\text{Addr}_{\\text{log}} < \\text{Limite}:\\quad \\text{Addr}_{\\text{fis}} = \\text{Base} + \\text{Addr}_{\\text{log}}',
            note: 'Caso Addr_log ≥ Limite, o hardware gera uma exceção (trap) de violação de acesso à memória.',
          },
        ],
      },
      {
        id: 'so-memoria-virtual',
        title: '5. Memória Virtual, Paginação, TLB, Substituição de Páginas e Thrashing',
        content: `A **paginação** divide a memória física em blocos fixos chamados **molduras (*frames*)** e a memória lógica em blocos de mesmo tamanho $P = 2^k$ chamados **páginas (*pages*)**. Isso **elimina completamente a fragmentação externa** (qualquer moldura livre serve para qualquer página!), restando apenas uma pequena fragmentação interna média de $P/2$ na última página de cada processo.

### Tradução de Endereços e TLB
Um endereço virtual de $N$ bits é partido em: **número da página $p$** ($N - k$ bits mais significativos) e **deslocamento/offset $d$** ($k = \\log_2 P$ bits menos significativos). A **Tabela de Páginas** mapeia $p \\to f$ (número da moldura física), mantendo $d$ inalterado:
$$p = \\left\\lfloor \\frac{\\text{Addr}}{P} \\right\\rfloor, \\qquad d = \\text{Addr} \\bmod P, \\qquad \\text{Addr}_{\\text{fís}} = f \\cdot P + d$$
Como consultar a Tabela de Páginas na RAM dobraria o tempo de cada acesso à memória, os processadores incluem uma cache associativa ultrarrápida na MMU chamada **TLB (*Translation Lookaside Buffer*)**:
$$EAT_{\\text{TLB}} = \\alpha (t_{\\text{TLB}} + t_m) + (1 - \\alpha)(t_{\\text{TLB}} + 2 t_m)$$

**Exemplo Resolvido (Paginação + TLB):**
1. Sistema com páginas de **4 KiB** ($4096 = 2^{12}$ bytes $\\Rightarrow 12$ bits de offset = 3 dígitos hex!). Considere o endereço virtual \`0x3A2F\`:
   - Offset $d = \\text{0xA2F}$; Número da página $p = \\text{0x3}$.
   - Se a entrada 3 da Tabela de Páginas aponta para a moldura $f = \\text{0x9}$, o endereço físico é **\`0x9A2F\`**!
2. Se $t_{\\text{TLB}} = 10\\text{ ns}$, acesso à RAM $t_m = 100\\text{ ns}$ e taxa de acerto da TLB $\\alpha = 90\\% = 0{,}9$:
   $$EAT = 0{,}9(10 + 100) + 0{,}1(10 + 200) = 99 + 21 = 120\\text{ ns}$$

### Tabelas de Páginas para Endereços Grandes
- **Paginação Multinível** (2 níveis em 32 bits; 4 níveis em x86-64): só aloca tabelas filhas para regiões efetivamente usadas do espaço virtual.
- **Tabela de Páginas Invertida:** existe uma única tabela global com 1 entrada por **moldura física** da RAM (economiza muita memória em 64 bits; usa hash para busca).

### Paginação por Demanda e Algoritmos de Substituição de Páginas
Na **Memória Virtual**, apenas as páginas ativas ficam na RAM (marcadas com bit de validade/presença = \`1\`). Acessar uma página ausente gera uma **Falta de Página (*Page Fault*)**: o SO bloqueia o processo, carrega a página do disco (swap) para uma moldura livre e reinicia a instrução. Se a RAM estiver cheia, escolhe-se uma **página vítima**:

| Algoritmo | Critério de Escolha da Vítima | Propriedade Crucial / Pegadinha |
| :--- | :--- | :--- |
| **Ótimo (Belady)** | Página que demorará **mais tempo no futuro** para ser usada | Menor número possível de *page faults*; inviável na prática (benchmark teórico) |
| **FIFO** | Página que está há **mais tempo na RAM** | Simples, mas sofre da **Anomalia de Belady** (aumentar molduras pode **aumentar** faltas de página!) |
| **LRU (*Least Recently Used*)** | Página **menos recentemente acessada** no passado | Ótima aproximação do Ótimo; é algoritmo de pilha (**NUNCA sofre Anomalia de Belady**) |
| **Segunda Chance / Relógio (*Clock*)** | Lista circular com bit de referência $R $: se $R=1$, zera $R $ e avança; se $R=0$, substitui | Implementação prática e barata que aproxima o LRU em SOs reais |

### Exemplo Resolvido (Simulação de Faltas de Página — 3 Molduras)
Cadeia de referências: **\`7, 0, 1, 2, 0, 3, 0, 4\`** com **3 molduras** inicialmente vazias:
- **FIFO:**
  \`7\`(F:[7]) → \`0\`(F:[7,0]) → \`1\`(F:[7,0,1]) → \`2\`(F: sai 7, [2,0,1]) → \`0\`(Hit) → \`3\`(F: sai 0, [2,3,1]) → \`0\`(F: sai 1, [2,3,0]) → \`4\`(F: sai 2, [4,3,0]). **Total = 7 faltas de página.**
- **LRU:**
  \`7\`(F:[7]) → \`0\`(F:[7,0]) → \`1\`(F:[7,0,1]) → \`2\`(F: sai 7, [2,0,1]) → \`0\`(Hit — atualiza recência de 0!) → \`3\`(F: LRU agora é 1, sai 1, [2,0,3]) → \`0\`(Hit!) → \`4\`(F: LRU agora é 2, sai 2, [4,0,3]). **Total = 6 faltas de página.**

### Thrashing (Hiperpaginação)
Ocorre quando o grau de multiprogramação cresce demais e a soma dos **Conjuntos de Trabalho (*Working Sets*)** dos processos excede a RAM física disponível: os processos passam a gerar faltas de página em cascata, a utilização da CPU **despenca bruscamente** e o disco entra em saturação constante. Solução: suspender processos (*swapping*) e monitorar o *Working Set* ou a taxa de *Page Fault Frequency (PFF)*.`,
        keyFormulas: [
          {
            label: 'Tradução de Endereço na Paginação',
            latex: 'p = \\left\\lfloor \\frac{\\text{Addr}}{P} \\right\\rfloor, \\quad d = \\text{Addr} \\bmod P, \\quad \\text{Addr}_{\\text{fís}} = f \\cdot P + d',
          },
          {
            label: 'Tempo Efetivo de Acesso com TLB e com Falta de Página',
            latex: 'EAT_{\\text{TLB}} = \\alpha(t_{\\text{TLB}}+t_m) + (1-\\alpha)(t_{\\text{TLB}}+2t_m), \\qquad EAT_{\\text{PF}} = (1-p_f)t_m + p_f t_{\\text{pf}}',
            note: 'Como t_pf (ms em disco) é ~100.000× maior que t_m (ns na RAM), p_f precisa ser minúscula (< 10^-6)!',
          },
        ],
      },
      {
        id: 'so-arquivos-es-virtualizacao',
        title: '6. Sistemas de Arquivos, Escalonamento de Disco, RAID e Virtualização',
        content: `O subsistema de armazenamento organiza dados persistentes em arquivos e diretórios, enquanto a virtualização permite consolidar múltiplos sistemas operacionais isolados sobre um único servidor físico.

### Métodos de Alocação de Blocos em Sistemas de Arquivos
| Método | Como Funciona | Acesso Aleatório | Fragmentação / Crescimento |
| :--- | :--- | :--- | :--- |
| **Contígua** | Blocos consecutivos no disco (guarda início + tamanho) | Excelente $O(1)$ | Sofre **fragmentação externa**; arquivo não cresce facilmente |
| **Encadeada** | Cada bloco tem ponteiro para o próximo bloco | Péssimo $O(n)$ (percorre lista no disco) | Sem frag. externa; frágil se 1 ponteiro corromper |
| **FAT (*File Allocation Table*)** | Todos os ponteiros de encadeamento ficam numa tabela em RAM | Bom (caminha pela tabela em RAM) | Simples (pendrives), mas tabela cresce proporcionalmente ao volume |
| **Indexada / I-Nodes (UNIX/EXT4)** | Cada arquivo tem um **i-node** com metadados + ponteiros diretos e indiretos (simples, duplo, triplo) | Excelente (rápido p/ pequenos e grandes) | Sem frag. externa; escala para terabytes com baixo overhead |

**Exemplo Resolvido (Capacidade de I-Node):** Um sistema tem blocos de **4 KiB** e ponteiros de bloco de **4 bytes** ($4096 / 4 = 1024$ ponteiros por bloco de índice). Se o i-node tem **12 ponteiros diretos** e **1 indireto simples**, o tamanho máximo do arquivo usando até o indireto simples é:
$$(12 + 1024) \\times 4\\text{ KiB} = 1036 \\times 4\\text{ KiB} = 4144\\text{ KiB} \\approx 4{,}05\\text{ MiB}$$
Com 1 indireto duplo, somam-se mais $1024^2 \\times 4\\text{ KiB} = 4\\text{ GiB}$!

- **Hard Link vs. Symbolic (Soft) Link:** um *hard link* cria outra entrada de diretório apontando para o **mesmo número de i-node** (o arquivo só é apagado quando o contador de links chega a 0; não cruza partições). Um *soft link* tem seu próprio i-node contendo o caminho textual do alvo (pode apontar para diretórios e outras partições, mas quebra se o alvo for movido).
- **Journaling (EXT4, NTFS):** registra as alterações de metadados em um *log* sequencial antes de aplicá-las no disco, permitindo recuperação rápida e consistente após quedas de energia.

### Escalonamento de Braço de Disco e Níveis de RAID
- **Escalonamento de Disco:** **FCFS** (justo, muito movimento), **SSTF** (*Shortest Seek Time First* — menor distância, risco de *starvation*), **SCAN (Algoritmo do Elevador)** (varre de uma ponta a outra atendendo pedidos e inverte), **C-SCAN** (varre num único sentido e retorna rápido — espera mais uniforme), **LOOK / C-LOOK** (inverte no último pedido pendente, sem ir até o cilindro extremo vazio).

| Nível RAID | Mín. Discos | Técnica | Capacidade Útil ($N$ discos de tam. $C$) | Tolerância a Falhas |
| :--- | :--- | :--- | :--- | :--- |
| **RAID 0** | 2 | *Striping* (divisão em faixas) | $N \\cdot C$ ($100\\%$) | **Nenhuma** (falha em 1 disco perde tudo!) |
| **RAID 1** | 2 | *Mirroring* (espelhamento) | $C$ ($50\\%$ para 2 discos) | Até 1 disco (por par espelhado) |
| **RAID 5** | 3 | *Striping* + **paridade distribuída (XOR)** | $(N - 1) \\cdot C$ | **1 disco** simultâneo |
| **RAID 6** | 4 | *Striping* + **dupla paridade distribuída** | $(N - 2) \\cdot C$ | **2 discos** simultâneos |
| **RAID 10 (1+0)** | 4 | *Striping* de pares espelhados | $(N / 2) \\cdot C$ | 1 disco em cada par espelhado |

### Virtualização (Hypervisors) vs. Contêineres
- **Hypervisor Tipo 1 (*Bare-Metal*):** executa **diretamente sobre o hardware físico** (VMware ESXi, Xen, Microsoft Hyper-V, Linux KVM). Menor overhead, altíssimo isolamento e desempenho — padrão em data centers e computação em nuvem.
- **Hypervisor Tipo 2 (*Hosted*):** executa como uma aplicação **sobre um SO hospedeiro** (VirtualBox, VMware Workstation). Ideal para desenvolvimento/laboratório, porém com maior overhead de E/S.
- **Assistência de Hardware (Intel VT-x / AMD-V):** cria modos especiais de privilégio para o hypervisor interceptar instruções sensíveis sem necessidade de tradução binária pesada nem modificação do SO convidado (diferente da paravirtualização).
- **Contêineres (Docker / Kubernetes):** virtualização em **nível de Sistema Operacional** usando mecanismos do kernel Linux (**namespaces** para isolamento de PID/rede/arquivos e **cgroups** para limitar CPU/RAM). Todos os contêineres compartilham o **mesmo kernel do host**, garantindo inicialização em milissegundos e consumo mínimo de RAM, ao custo de isolamento ligeiramente menor que uma VM completa.`,
        keyFormulas: [
          {
            label: 'Capacidade Útil em Arranjos RAID 5 e RAID 6',
            latex: 'C_{\\text{RAID 5}} = (N - 1) \\cdot C_{\\text{disco}}, \\qquad C_{\\text{RAID 6}} = (N - 2) \\cdot C_{\\text{disco}}',
            note: 'Assume N discos idênticos de capacidade C_disco; RAID 5 exige N ≥ 3 e RAID 6 exige N ≥ 4.',
          },
        ],
      },
    ],
    inepTraps: [
      'Achar que **Best-Fit** é sempre superior ao First-Fit em alocação de memória: embora pareça "economizar espaço", o Best-Fit percorre toda a lista e gera **inúmeros micro-fragmentos inutilizáveis** (sobras minúsculas), como cobrado na discursiva ENADE 2017 D5!',
      'Dizer que um processo **Bloqueado** passa diretamente para **Executando** quando a E/S termina: ERRADO! Ele sempre retorna para o estado **Pronto** e aguarda ser escolhido pelo escalonador.',
      'Confundir o algoritmo que sofre a **Anomalia de Belady**: ela ocorre no **FIFO** (onde mais molduras podem gerar mais *page faults*), e **NÃO** ocorre no LRU nem no Ótimo (que possuem a propriedade de inclusão/pilha).',
      'Trocar a ordem dos semáforos no Produtor-Consumidor: chamar `lock(mutex)` ANTES de `wait(vazios)` ou `wait(cheios)` causa **deadlock imediato** quando o buffer fica cheio ou vazio!',
      'Assumir que um ciclo no Grafo de Alocação de Recursos sempre indica deadlock: isso só é verdade quando cada recurso tem **instância única**; com múltiplas instâncias, o ciclo é condição necessária, mas não suficiente.',
    ],
    quickChecklist: [
      'Saber o diagrama de 5 estados de processos e distinguir exatamente o que threads compartilham vs. o que mantêm privado (PC, registradores, stack).',
      'Calcular tempo médio de turnaround e espera em FCFS, SJF/SRTF (preemptivo) e Round-Robin (impacto do tamanho do quantum).',
      'Memorizar as 4 condições de Coffman para deadlock, a diferença entre Mutex (posse) e Semáforo contador, e o Algoritmo do Banqueiro.',
      'Simular First-Fit, Best-Fit e Worst-Fit e distinguir fragmentação interna (partição fixa/última página) vs. externa (partição dinâmica/segmentação).',
      'Converter endereços virtuais em físicos na paginação, calcular `EAT` com TLB e simular substituição FIFO, LRU, Ótimo e Relógio.',
      'Entender Thrashing (hiperpaginação), Working Set e Copy-on-Write (`fork`).',
      'Dominar i-nodes (ponteiros diretos/indiretos), Hard vs. Soft links, escalonamento de disco (SCAN/LOOK) e tabela de níveis RAID (0, 1, 5, 6, 10).',
      'Diferenciar Hypervisor Tipo 1 (Bare-Metal) vs. Tipo 2 (Hosted) vs. Contêineres (namespaces + cgroups compartilhando o kernel).',
    ],
  },

  // =========================================================================
  // MÓDULO 5: REDES DE COMPUTADORES E SEGURANÇA
  // =========================================================================
  {
    id: 'redes-seguranca',
    title: 'Redes de Computadores e Segurança',
    subtitle: 'OSI/TCP-IP, camada física, Ethernet/Wi-Fi, IPv4/CIDR, roteamento Dijkstra/OSPF, TCP/UDP, aplicação e cibersegurança',
    estimatedMinutes: 95,
    overview:
      'Redes de Computadores e Segurança da Informação formam um dos pilares mais presentes no Componente Específico do ENADE, abrangendo desde física de transmissão e endereçamento CIDR até protocolos da Internet (TCP, HTTP, DNS), algoritmos de roteamento (Dijkstra/OSPF, Bellman-Ford/RIP, BGP) e defesa cibernética (criptografia simétrica/assimétrica, assinatura digital, TLS, firewalls e IDS/IPS).',
    enadeWeightNote:
      'O INEP cobra frequentemente: (1) rastreamento e engenharia reversa do algoritmo de Dijkstra (OSPF / Estado de Enlace) em grafos de roteadores (ENADE 2017 Q35); (2) distinção precisa entre IDS (detecção passiva), IPS (prevenção ativa em linha) e Firewalls de camada de rede vs. aplicação (ENADE 2017 Q25); (3) sub-redes IPv4/CIDR e Longest Prefix Match; (4) funcionamento do TCP (3-way handshake, controle de congestionamento) vs. UDP; e (5) criptografia assimétrica/assinatura digital.',
    sections: [
      {
        id: 'red-osi-fisica-desempenho',
        title: '1. Modelos OSI e TCP/IP, Camada Física (Nyquist/Shannon) e Atrasos',
        content: `A arquitetura em camadas desacopla funções complexas em interfaces bem definidas. Ao enviar dados, cada camada adiciona seu próprio cabeçalho (**encapsulamento**); no destino, cada camada remove e interpreta seu cabeçalho (**desencapsulamento**).

### Modelo OSI (7 Camadas) vs. Arquitetura TCP/IP (4/5 Camadas)
| Camada OSI | Equiv. TCP/IP | Unidade de Dados (PDU) | Principais Protocolos | Equipamento Típico |
| :--- | :--- | :--- | :--- | :--- |
| **7. Aplicação** | Aplicação | Mensagem / Dados | HTTP/3, DNS, SMTP, SSH, DHCP, MQTT | Proxy, WAF, Gateway L7 |
| **6. Apresentação** | Aplicação | Dados | TLS/SSL (criptografia), JPEG, UTF-8, gzip | — |
| **5. Sessão** | Aplicação | Dados | RPC, NetBIOS, controle de diálogos | — |
| **4. Transporte** | Transporte | **Segmento** (TCP) / **Datagrama** (UDP) | TCP, UDP, QUIC | Firewall Stateful (L4) |
| **3. Rede** | Internet (Rede) | **Pacote** (Datagrama IP) | IPv4, IPv6, ICMP, OSPF, RIP, BGP | **Roteador** (L3) |
| **2. Enlace** | Acesso à Rede | **Quadro (Frame)** | Ethernet (802.3), Wi-Fi (802.11), PPP, ARP | **Switch** / Bridge (L2) |
| **1. Física** | Acesso à Rede | **Bits** (sinais elétricos/ópticos/RF) | UTP, Fibra Óptica, Codif. Manchester | Hub / Repetidor (L1) |

### Capacidade de Canal: Teoremas de Nyquist e Shannon
- **Teorema de Nyquist (canal SEM ruído):** para largura de banda $B$ (em Hz) e $M$ níveis discretos de sinalização, a taxa máxima é:
$$C_{\\text{Nyquist}} = 2 B \\log_2(M) \\quad [\\text{bps}]$$
- **Teorema de Shannon (canal COM ruído gaussiano):** define o limite físico intransponível de transmissão livre de erros dada a relação sinal-ruído linear $S/N$:
$$C_{\\text{Shannon}} = B \\log_2\\!\\left(1 + \\frac{S}{N}\\right), \\qquad \\text{SNR}_{\\text{dB}} = 10 \\log_{10}\\!\\left(\\frac{S}{N}\\right) \\iff \\frac{S}{N} = 10^{\\text{SNR}_{\\text{dB}}/10}$$

**Exemplo Resolvido (Shannon):** Um canal telefônico possui banda $B = 3\\text{ kHz}$ e $\\text{SNR} = 30\\text{ dB}$. Qual a capacidade máxima?
1. Converter dB para linear: $S/N = 10^{30/10} = 10^3 = 1000$.
2. Aplicar Shannon: $C = 3000 \\times \\log_2(1 + 1000) \\approx 3000 \\times 9{,}967 \\approx \\mathbf{29{,}9\\text{ kbps}}$.
*(Atenção: NUNCA substitua o valor em dB diretamente no lugar de $S/N$!)*

### Os 4 Componentes de Atraso Nodal e Produto Banda-Atraso (BDP)
Em redes de comutação de pacotes, o atraso total por salto é $d_{\\text{nodal}} = d_{\\text{proc}} + d_{\\text{fila}} + d_{\\text{trans}} + d_{\\text{prop}}$:
- **Atraso de Processamento ($d_{\\text{proc}}$):** inspeção de cabeçalho e decisão de encaminhamento (microssegundos).
- **Atraso de Fila ($d_{\\text{fila}}$):** tempo esperando no buffer de saída do roteador; cresce explosivamente quando a intensidade de tráfego $La/R \\to 1$ (causa perda de pacotes quando o buffer estoura!).
- **Atraso de Transmissão ($d_{\\text{trans}} = L / R $):** tempo para "empurrar" todos os $L$ bits do pacote para o enlace de taxa $R $ (bps). Depende do tamanho do pacote e da banda, **não da distância**!
- **Atraso de Propagação ($d_{\\text{prop}} = d / s$):** tempo para o sinal eletromagnético percorrer a distância física $d$ na velocidade do meio $s$ ($\\approx 2 \\times 10^8\\text{ m/s}$ em fibra/cobre; $3 \\times 10^8\\text{ m/s}$ no vácuo). Depende da distância, **não do tamanho do pacote nem da taxa $R $**!
- **Produto Banda-Atraso ($BDP = R \\times RTT$):** quantidade máxima de bits "em trânsito" (*in flight*) que preenchem completamente o enlace — define o tamanho mínimo da janela TCP para atingir $100\\%$ de utilização do link!

**Exemplo Resolvido (Atrasos):** Enviar um pacote de $L = 1500\\text{ bytes} = 12.000\\text{ bits}$ em um link de $R = 10\\text{ Mbps}$ com distância $d = 2000\\text{ km}$ ($s = 2 \\times 10^8\\text{ m/s}$):
- $d_{\\text{trans}} = \\frac{12.000}{10 \\times 10^6} = 1{,}2\\text{ ms}$; $d_{\\text{prop}} = \\frac{2 \\times 10^6}{2 \\times 10^8} = 10\\text{ ms}$. Latência unidirecional $= 11{,}2\\text{ ms}$.`,
        keyFormulas: [
          {
            label: 'Capacidade de Canal (Nyquist e Shannon)',
            latex: 'C_{\\text{Nyquist}} = 2B\\log_2(M), \\qquad C_{\\text{Shannon}} = B\\log_2\\!\\left(1 + \\frac{S}{N}\\right)',
            note: 'Sempre converta SNR de dB para linear via S/N = 10^(SNR_dB / 10) antes de usar Shannon.',
          },
          {
            label: 'Atraso de Transmissão, Propagação e BDP',
            latex: 'd_{\\text{trans}} = \\frac{L}{R}, \\qquad d_{\\text{prop}} = \\frac{d}{s}, \\qquad BDP = R \\times RTT',
          },
        ],
      },
      {
        id: 'red-enlace-acesso',
        title: '2. Camada de Enlace: CRC, Acesso ao Meio (CSMA/CD vs. CA) e Switches',
        content: `A camada de enlace garante a transferência de **quadros (frames)** entre nós fisicamente adjacentes em um mesmo enlace ou rede local (LAN).

### Enquadramento e Detecção de Erros (Paridade, Checksum e CRC)
- **Bit de Paridade:** detecta apenas quantidade ímpar de bits invertidos (1 bit).
- **Checksum (Soma de Verificação):** soma em complemento de 1 usada em IP/TCP/UDP; rápido em software, porém mais fraco que CRC.
- **CRC (*Cyclic Redundancy Check*):** padrão em Ethernet e Wi-Fi. Trata os bits da mensagem $D$ e um polinômio gerador $G$ de grau $r$ como polinômios em aritmética **módulo 2 (onde soma e subtração equivalem a XOR, sem vai-um!)**. Anexam-se $r$ zeros à direita de $D$, divide-se por $G$ via XOR e o **resto $R $ de $r$ bits** é anexado ao quadro transmitido ($T = D \\cdot 2^r \\oplus R $). No receptor, divide-se $T$ por $G$: resto zero indica ausência de erro; resto não nulo indica quadro corrompido!

**Exemplo Resolvido (Cálculo de CRC):** Dados $D = 10110$ e gerador $G = 1011$ (grau $r = 3$):
1. Anexar $r = 3$ zeros: \`10110000\`.
2. Divisão XOR passo a passo por \`1011\`:
   - \`1011\` XOR \`1011\` = \`0000\`; abaixam-se os zeros restantes \`0000\` $\\Rightarrow$ resto $R = 000$!
   - Quadro transmitido: \`10110000\`. (Se um bit mudar no meio, a divisão por \`1011\` no receptor produzirá resto $\\neq 000$!).

### Protocolos de Acesso Múltiplo (MAC): Ethernet vs. Wi-Fi
| Aspecto | Ethernet Clássico (IEEE 802.3 — **CSMA/CD**) | Wi-Fi (IEEE 802.11 — **CSMA/CA**) |
| :--- | :--- | :--- |
| **Estratégia** | *Collision Detection* (detecta colisão durante transmissão) | *Collision Avoidance* (tenta evitar colisões antes de transmitir) |
| **Por que não detecta colisão?** | Detecta comparando sinal enviado e recebido no cabo | Em rádio, a potência de transmissão ofusca a recepção + **Problema do Terminal Oculto** |
| **Mecanismo de proteção** | Sinal de *Jam* + **Backoff Exponencial Binário** ($[0, 2^k - 1]$ slots) | Temporizadores DIFS/SIFS + Backoff + **ACK explícito obrigatório** + opcional **RTS/CTS** |
| **Restrição física** | Exige quadro mínimo $L_{\\min} \\ge 2 \\cdot d_{\\text{prop}} \\cdot R $ (**64 bytes** em 10/100 Mbps) | Quadros RTS/CTS reservam o canal (NAV) resolvendo terminais ocultos |

### Endereçamento MAC, ARP, Switches e VLANs
- **Endereço MAC (48 bits):** 6 bytes em hexadecimal (ex.: \`00:1A:2B:3C:4D:5E\`), plano (não hierárquico), gravado na placa de rede; broadcast L2 é \`FF:FF:FF:FF:FF:FF\`.
- **Protocolo ARP (*Address Resolution Protocol*):** traduz um endereço **IP (L3) para MAC (L2)** dentro da mesma LAN enviando uma requisição ARP em **broadcast**; o dono do IP responde em unicast com seu MAC (armazenado na tabela ARP com TTL).
- **Switches Ethernet (Camada 2):** constroem automaticamente a **tabela de encaminhamento MAC** observando o **MAC de origem** de cada quadro recebido (*self-learning*). Se o MAC destino é conhecido, encaminha só para aquela porta; se desconhecido (ou broadcast), faz *flooding* para todas as outras portas.
  - **Domínios de Colisão vs. Broadcast:** um **Hub (L1)** mantém 1 único domínio de colisão e 1 de broadcast. Um **Switch (L2)** cria **1 domínio de colisão separado por porta** (com enlaces *full-duplex*, colisões são eliminadas!), mas todas as portas padrão ainda pertencem ao **mesmo domínio de broadcast** — para segmentar domínios de broadcast, utilizam-se **VLANs (IEEE 802.1Q)** ou **Roteadores (L3)**!
  - **Spanning Tree Protocol (STP — IEEE 802.1D):** bloqueia enlaces redundantes logicamente para criar uma árvore sem ciclos, impedindo **tempestades de broadcast** em topologias com múltiplos switches.`,
        keyFormulas: [
          {
            label: 'Tamanho Mínimo de Quadro no Ethernet CSMA/CD',
            latex: 'L_{\\min} \\ge 2 \\cdot d_{\\text{prop}} \\cdot R = 2 \\cdot \\frac{d}{s} \\cdot R',
            note: 'Garante que o transmissor ainda esteja enviando quando o sinal de colisão retornar do extremo mais distante.',
          },
        ],
      },
      {
        id: 'red-ip-cidr-roteamento',
        title: '3. Camada de Rede: IPv4/CIDR, IPv6, NAT e Roteamento (Dijkstra/OSPF, RIP, BGP)',
        content: `A camada de rede realiza o encaminhamento (*forwarding*) local em cada roteador e o roteamento (*routing*) global fim a fim entre redes distintas.

### Endereçamento IPv4, Sub-redes CIDR e Longest Prefix Match
No **CIDR (*Classless Inter-Domain Routing*)**, um bloco de rede é escrito como \`IP/p\`, onde $p$ é o número de bits \`1\` à esquerda na máscara (prefixo de rede) e $32 - p$ são os bits de host:
- **Endereço de Rede:** \`IP AND Máscara\` (todos os bits de host em \`0\`).
- **Endereço de Broadcast:** todos os bits de host em \`1\`.
- **Quantidade de Hosts Válidos:** $N_{\\text{hosts}} = 2^{32 - p} - 2$ (descontando rede e broadcast; exceção técnica \`/31\` ponto-a-ponto RFC 3021).
- **Encaminhamento no Roteador (*Longest Prefix Match*):** se um IP destino casa com mais de uma rota na tabela de roteamento (ex.: \`192.168.10.0/24\` e \`192.168.10.128/26\`), o roteador **SEMPRE escolhe a rota com o prefixo mais longo (mais específico, maior \`/p\`)**!

**Exemplo Resolvido Passo a Passo (Sub-rede CIDR \`/26\`):**
Analise o host \`192.168.10.145/26\`:
1. **Máscara:** 26 bits \`1\` = \`255.255.255.192\` (no último octeto: \`11000000_2\` = $128 + 64 = 192$).
2. **Tamanho do bloco (salto):** $2^{32 - 26} = 2^6 = 64$ endereços por sub-rede ($64 - 2 = \\mathbf{62\\text{ hosts válidos}}$).
3. As sub-redes \`/26\` no último octeto começam nos múltiplos de 64: \`0\`, \`64\`, \`128\`, \`192\`.
4. Como \`145\` está entre \`128\` e \`191\`:
   - **Endereço de Rede:** \`192.168.10.128\`
   - **Broadcast:** \`192.168.10.191\`
   - **Faixa de Hosts Válidos:** \`192.168.10.129\` até \`192.168.10.190\`.

### NAT, DHCP, ICMP e IPv6
- **IPs Privados (RFC 1918 — não roteáveis na Internet pública):** \`10.0.0.0/8\`, \`172.16.0.0/12\` (\`172.16\`–\`172.31\`) e \`192.168.0.0/16\`.
- **NAT / PAT:** traduz múltiplos IPs privados para um único IP público remapeando também os números de porta TCP/UDP.
- **DHCP:** atribuição automática de IP, máscara, gateway e DNS via sequência **DORA** (*Discover $\\to$ Offer $\\to$ Request $\\to$ Ack*) sobre UDP portas 67/68.
- **ICMP:** mensagens de controle/erro (\`ping\` usa *Echo Request/Reply*; \`traceroute\` explora expiração do campo **TTL** gerando *Time Exceeded*).
- **IPv6:** endereços de **128 bits** em 8 grupos hexadecimais (abreviando zeros à esquerda e 1 sequência contígua de zeros por \`::\`); cabeçalho fixo simplificado de **40 bytes** (sem checksum L3 e sem fragmentação em roteadores intermediários); **não possui broadcast** (substituído por multicast/anycast).

### Protocolos de Roteamento: OSPF (Dijkstra), RIP (Bellman-Ford) e BGP
| Protocolo | Escopo | Algoritmo / Paradigma | Métrica | Características Críticas |
| :--- | :--- | :--- | :--- | :--- |
| **OSPF** | Intra-AS (IGP) | **Estado de Enlace** (**Dijkstra**) | Custo (inverso da banda) | Difunde (flooding) LSAs; **todos os roteadores têm o mapa completo**; convergência rápida e sem loops |
| **RIP** | Intra-AS (IGP) | **Vetor de Distância** (**Bellman-Ford**) | Número de saltos (máx. **15**; 16 = $\\infty$) | Troca tabelas apenas com vizinhos diretos; sofre **contagem ao infinito** (mitigada por *Split Horizon / Poison Reverse*) |
| **BGP** | **Inter-AS** (EGP) | **Vetor de Caminhos (*Path Vector*)** | **Políticas** (AS-PATH, acordos comerciais) | Liga Sistemas Autônomos (Internet global); roda sobre **TCP porta 179**; evita loops checando o AS-PATH |

### Exemplo Resolvido (Algoritmo de Dijkstra — Estilo ENADE 2017 Q35!)
Considere um grafo não-dirigido com roteadores $A, B, C, D, E$ e enlaces: $(A,B)=2, (A,C)=5, (B,C)=1, (B,D)=4, (C,D)=2, (C,E)=7, (D,E)=3$. Calculando menores caminhos a partir de **$A$** pela regra $D(v) = \\min(D(v), D(w) + c(w,v))$:

| Passo | Visitados ($N'$) | $D(B)$, pai | $D(C)$, pai | $D(D)$, pai | $D(E)$, pai |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | $\\{A\\}$ | **2, A** | 5, A | $\\infty$ | $\\infty$ |
| 1 | $\\{A, B\\}$ | *fechado (2)* | **3, B** ($2+1<5$) | 6, B ($2+4$) | $\\infty$ |
| 2 | $\\{A, B, C\\}$ | *fechado (2)* | *fechado (3)* | **5, C** ($3+2<6$) | 10, C ($3+7$) |
| 3 | $\\{A, B, C, D\\}$ | *fechado (2)* | *fechado (3)* | *fechado (5)* | **8, D** ($5+3<10$) |
| 4 | $\\{A, B, C, D, E\\}$ | *fechado (2)* | *fechado (3)* | *fechado (5)* | *fechado (8)* |

Menor caminho de $A$ até $E$: **$A \\to B \\to C \\to D \\to E$** com custo total **$8$**!`,
        keyFormulas: [
          {
            label: 'Cálculo de Sub-redes e Hosts IPv4 (CIDR)',
            latex: 'N_{\\text{hosts}} = 2^{32 - p} - 2, \\qquad N_{\\text{sub-redes}} = 2^{\\Delta p}',
            note: 'Para um prefixo /p, há 32 - p bits de host; subtrai-se 2 para excluir endereço de rede e broadcast.',
          },
          {
            label: 'Equação de Relaxamento de Dijkstra (OSPF)',
            latex: 'D(v) = \\min\\bigl(D(v),\\; D(w) + c(w, v)\\bigr)',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Cálculo de endereço de rede, broadcast e validação de sub-rede IPv4 em C',
          code: `#include <stdio.h>
#include <stdint.h>

// Converte 4 octetos em inteiro 32 bits (host order)
uint32_t ip_u32(uint8_t a, uint8_t b, uint8_t c, uint8_t d) {
    return ((uint32_t)a << 24) | ((uint32_t)b << 16) | ((uint32_t)c << 8) | d;
}

void imprimir_ip(const char *rotulo, uint32_t ip) {
    printf("%-10s: %u.%u.%u.%u\\n", rotulo,
           (ip >> 24) & 0xFF, (ip >> 16) & 0xFF, (ip >> 8) & 0xFF, ip & 0xFF);
}

int main(void) {
    uint32_t ip   = ip_u32(192, 168, 10, 145);
    int prefixo   = 26;
    uint32_t mask = (prefixo == 0) ? 0 : (~0U << (32 - prefixo));

    uint32_t rede      = ip & mask;          // Bits de host zerados
    uint32_t broadcast = rede | (~mask);     // Bits de host em 1

    imprimir_ip("Mascara", mask);            // 255.255.255.192
    imprimir_ip("Rede", rede);               // 192.168.10.128
    imprimir_ip("Broadcast", broadcast);     // 192.168.10.191
    printf("Hosts validos: %u\\n", (1U << (32 - prefixo)) - 2U); // 62
    return 0;
}`,
        },
      },
      {
        id: 'red-transporte',
        title: '4. Camada de Transporte: UDP, TCP, Janela Deslizante e Congestionamento',
        content: `A camada de transporte oferece comunicação lógica diretamente entre **processos** rodando em hosts diferentes, identificados por **números de porta** (16 bits: 0–1023 bem conhecidas, 1024–49151 registradas, 49152–65535 efêmeras).
- **Demultiplexação UDP:** baseada apenas na **2-tupla** \`(IP destino, Porta destino)\`.
- **Demultiplexação TCP:** baseada na **4-tupla** \`(IP origem, Porta origem, IP destino, Porta destino)\`, permitindo que um servidor Web na porta 443 mantenha milhares de conexões simultâneas em sockets independentes!

### Comparativo Completo: TCP vs. UDP
| Característica | TCP (*Transmission Control Protocol*) | UDP (*User Datagram Protocol*) |
| :--- | :--- | :--- |
| **Conexão** | Orientado à conexão (**3-Way Handshake**) | Sem conexão (*connectionless*, sem handshake) |
| **Confiabilidade e Ordem** | Entrega garantida, sem duplicatas e **em ordem** (fluxo de bytes) | Melhor esforço (pode perder, duplicar ou reordenar) |
| **Cabeçalho mínimo** | **20 bytes** (até 60 bytes com opções) | **8 bytes** fixos (overhead mínimo) |
| **Controle de Fluxo / Congestionamento** | Sim: \`rwnd\` (fluxo) e \`cwnd\` (congestionamento) | Não (aplicação envia na taxa que desejar) |
| **Aplicações típicas** | HTTP/1.1–2, HTTPS, SSH, SMTP, FTP, BGP | DNS, DHCP, VoIP, streaming ao vivo, jogos online, QUIC (HTTP/3) |

### Transferência Confiável: Stop-and-Wait, Go-Back-N e Selective Repeat
- **Stop-and-Wait:** envia 1 pacote e espera o ACK antes de enviar o próximo. Em links longos/rápidos, sua eficiência $U = \\frac{d_{\\text{trans}}}{d_{\\text{trans}} + RTT}$ é péssima!
- **Go-Back-N (GBN — Pipelining):** envia até $N$ pacotes sem esperar ACK; usa **ACK cumulativo** (ACK $k$ confirma todos até $k$). Se um pacote se perde, o emissor retransmite **o pacote perdido e todos os subsequentes** na janela.
- **Selective Repeat (SR):** receptor possui buffer para guardar pacotes fora de ordem e envia **ACKs individuais**; o emissor retransmite **apenas os pacotes perdidos**.

### Mecanismos Internos do TCP
1. **Estabelecimento (3-Way Handshake):**
   - Cliente $\\to$ Servidor: \`SYN (seq = x)\`
   - Servidor $\\to$ Cliente: \`SYN-ACK (seq = y, ack = x + 1)\`
   - Cliente $\\to$ Servidor: \`ACK (seq = x + 1, ack = y + 1)\` (já pode carregar payload!)
   - Encerramento em 4 vias (\`FIN\` / \`ACK\` em cada sentido); o lado que fecha primeiro aguarda o estado \`TIME_WAIT\` ($2 \\times MSL$) para garantir que pacotes atrasados não contaminem novas conexões.
2. **Controle de Fluxo (evita transbordar o RECEPTOR):** o receptor informa no cabeçalho TCP o espaço livre em seu buffer (**\`rwnd\`** — *receive window*).
3. **Controle de Congestionamento (evita colapso da REDE):** o emissor mantém a janela de congestionamento (**\`cwnd\`**) e limita os bytes em trânsito a $\\min(cwnd, rwnd)$:
   - **Slow Start (Partida Lenta):** inicia com \`cwnd = 1 MSS\` (ou 10 MSS em sistemas modernos) e **dobra a cada RTT** (crescimento **exponencial**: $+1\\text{ MSS}$ a cada ACK recebido) até atingir o limiar **\`ssthresh\`**.
   - **Congestion Avoidance (AIMD):** acima de \`ssthresh\`, cresce **linearmente** ($+1\\text{ MSS}$ por RTT — *Additive Increase*).
   - **Reação a Perdas (TCP Reno):**
     - **3 ACKs duplicados** (*Fast Retransmit / Fast Recovery* — perda leve, a rede ainda entrega pacotes): define \`ssthresh = cwnd / 2\`, reduz \`cwnd\` pela metade (*Multiplicative Decrease*) e continua em crescimento linear!
     - **Timeout** (perda severa, congestionamento grave): define \`ssthresh = cwnd / 2\` e **derruba \`cwnd = 1 MSS\`**, reiniciando a fase de **Slow Start**!`,
        keyFormulas: [
          {
            label: 'Limite de Dados em Trânsito no TCP',
            latex: '\\text{LastByteSent} - \\text{LastByteAcked} \\le \\min(\\text{cwnd},\\; \\text{rwnd})',
            note: 'cwnd protege os roteadores da rede contra congestionamento; rwnd protege o buffer do receptor.',
          },
          {
            label: 'Eficiência de Canal no Stop-and-Wait',
            latex: 'U_{\\text{SW}} = \\frac{L / R}{L / R + RTT}',
          },
        ],
      },
      {
        id: 'red-aplicacao',
        title: '5. Camada de Aplicação: DNS, HTTP/1.1–3, E-mail e Portas Clássicas',
        content: `A camada de aplicação define a semântica das mensagens trocadas entre processos distribuídos, organizados principalmente nos paradigmas **Cliente-Servidor** (servidor sempre ativo com IP conhecido) e **P2P (*Peer-to-Peer*)** (pares atuam simultaneamente como cliente e servidor, alta autoescalabilidade).

### DNS (*Domain Name System*)
Banco de dados hierárquico e distribuído que traduz nomes de domínio (\`www.inep.gov.br\`) em endereços IP (e outros registros):
- **Hierarquia:** Servidores **Raiz (Root)** $\\to$ Servidores **TLD** (\`.com\`, \`.br\`, \`.org\`) $\\to$ Servidores **Autoritativos** do domínio. O **Resolvedor Local** (ISP/empresa) normalmente recebe uma **consulta recursiva** do cliente e executa **consultas iterativas** na árvore DNS, armazenando respostas em **cache** pelo tempo definido no campo **TTL**.
- **Principais Registros de Recursos (RR):**
  - **\`A\`:** mapeia hostname para **IPv4**; **\`AAAA\`:** mapeia hostname para **IPv6**.
  - **\`CNAME\`:** apelido (*alias*) de um nome canônico.
  - **\`MX\`:** aponta para o servidor de **e-mail** do domínio (com prioridade).
  - **\`NS\`:** indica o servidor DNS autoritativo da zona; **\`TXT\`:** textos arbitrários (SPF/DKIM/DMARC).

### Evolução do Protocolo HTTP (1.1, 2 e 3)
Protocolo cliente-servidor da Web, intrinsecamente **stateless** (o servidor não guarda estado entre requisições; sessões são mantidas com **Cookies** ou tokens JWT).
- **Métodos principais:** \`GET\` (leitura segura/idempotente), \`POST\` (criação/submissão não idempotente), \`PUT\` (substituição completa idempotente), \`PATCH\` (atualização parcial), \`DELETE\` (remoção idempotente) e \`HEAD\` (só cabeçalhos).
- **Classes de Status:** \`2xx\` Sucesso (\`200 OK\`, \`201 Created\`), \`3xx\` Redirecionamento (\`301 Moved\`, \`304 Not Modified\` em cache), \`4xx\` Erro do Cliente (\`400 Bad Request\`, \`401 Unauthorized\`, \`403 Forbidden\`, \`404 Not Found\`), \`5xx\` Erro do Servidor (\`500 Internal Error\`, \`502 Bad Gateway\`, \`503 Service Unavailable\`).
- **HTTP/1.1 vs. HTTP/2 vs. HTTP/3:**
  - **HTTP/1.1:** textual, conexões persistentes (*keep-alive*), mas sofre de **Head-of-Line (HoL) Blocking** na camada de aplicação.
  - **HTTP/2:** enquadramento **binário**, compressão de cabeçalhos (HPACK) e **multiplexação de múltiplos streams** sobre uma única conexão TCP (porém um pacote TCP perdido ainda bloqueia todos os streams — HoL Blocking no TCP!).
  - **HTTP/3:** abandona o TCP e roda sobre **QUIC (sobre UDP)**, integrando **TLS 1.3** nativamente (handshake em 1-RTT ou 0-RTT) e **eliminando o HoL Blocking entre streams independentes**!

### Tabela de Referência Rápida: Portas Bem Conhecidas
| Protocolo | Porta Padrão | Transporte | Função Principal |
| :--- | :--- | :--- | :--- |
| **FTP** | 21 (controle) / 20 (dados) | TCP | Transferência de arquivos (em texto claro — inseguro) |
| **SSH / SFTP** | 22 | TCP | Acesso remoto seguro criptografado e transferência segura |
| **SMTP** | 25 / 587 (submissão TLS) | TCP | **Envio** de e-mail entre cliente $\\to$ servidor e servidor $\\to$ servidor |
| **DNS** | 53 | UDP (e TCP) | Resolução de nomes (TCP p/ transferência de zona ou respostas grandes) |
| **DHCP** | 67 (serv.) / 68 (cli.) | UDP | Configuração dinâmica de IP, máscara, gateway e DNS |
| **HTTP / HTTPS** | 80 / 443 | TCP (e UDP/QUIC no HTTP/3) | Navegação Web e APIs REST |
| **POP3 / IMAP** | 110 (995 TLS) / 143 (993 TLS) | TCP | **Recebimento** de e-mail (POP3 baixa/apaga; IMAP sincroniza pastas no servidor) |
| **SNMP** | 161 / 162 (traps) | UDP | Gerenciamento e monitoramento de dispositivos de rede |`,
      },
      {
        id: 'red-seguranca-cripto',
        title: '6. Segurança de Redes: Criptografia, Assinatura Digital, Firewalls e IDS/IPS',
        content: `A Segurança da Informação fundamenta-se na **Tríade CIA** (**Confidencialidade**: só autorizados leem; **Integridade**: dados não foram alterados indevidamente; **Disponibilidade**: serviços acessíveis quando necessários), complementada por **Autenticidade** e **Não-Repúdio** (irretratabilidade).

### Criptografia Simétrica, Assimétrica e Hash Criptográfico
| Primitiva | Chaves Utilizadas | Desempenho | Serviços Garantidos e Exemplos |
| :--- | :--- | :--- | :--- |
| **Simétrica** | Mesma **chave secreta compartilhada** ($K$) | Muito rápida (hardware AES-NI) | **Confidencialidade** de grandes volumes de dados (AES-128/256, ChaCha20) |
| **Assimétrica (Chave Pública)** | Par matemático: **Chave Pública** ($K^+$) e **Chave Privada** ($K^-$) | Lenta ($100\\times$ a $1000\\times$ mais lenta) | Troca segura de chaves, confidencialidade inicial e **Assinatura Digital** (**RSA**, ECC, Diffie-Hellman) |
| **Hash Criptográfico** | **Sem chave** (função unidirecional) | Ultrarrápida | **Integridade** (efeito avalanche, resistente a colisões: SHA-256, SHA-3). Com chave secreta = **HMAC** (integridade + autenticidade) |

### Regra de Ouro das Chaves Assimétricas (NUNCA CONFUNDIR!)
- **Para garantir CONFIDENCIALIDADE (A envia segredo para B):** A cifra a mensagem com a **chave PÚBLICA de B**; somente B consegue decifrar usando sua **chave PRIVADA**.
- **Para garantir ASSINATURA DIGITAL (A assina documento para B):** A calcula o **hash** da mensagem e cifra esse hash com a **chave PRIVADA de A**; qualquer pessoa (B) verifica usando a **chave PÚBLICA de A**. A assinatura digital garante **Integridade, Autenticidade e Não-Repúdio** (mas **NÃO** garante confidencialidade se o documento em si estiver em texto claro!).
- **Certificados Digitais (X.509 / ICP) e TLS/HTTPS:** uma **Autoridade Certificadora (CA)** assina um certificado vinculando o domínio à sua chave pública, prevenindo ataques *Man-in-the-Middle*. No **TLS (HTTPS)**, usa-se **criptografia híbrida**: criptografia assimétrica no *handshake* para autenticar o servidor e acordar uma chave de sessão efêmera (ex.: via ECDHE), e **criptografia simétrica (AES-GCM)** para cifrar todo o tráfego de dados com alta velocidade!

### Exemplo Resolvido Numérico de RSA
Escolha os primos $p = 3$ e $q = 11$:
1. Módulo $n = p \\cdot q = 3 \\times 11 = 33$; função totiente $\\phi(n) = (p-1)(q-1) = 2 \\times 10 = 20$.
2. Escolha $e = 3$ (coprimo com 20). Ache o inverso modular $d$ tal que $e \\cdot d \\equiv 1 \\pmod{20}$: como $3 \\times 7 = 21 \\equiv 1 \\pmod{20}$, temos **$d = 7$**.
3. Chave pública: $(e=3, n=33)$; Chave privada: $(d=7, n=33)$.
4. **Cifrar** mensagem $m = 4$: $c = m^e \\bmod n = 4^3 \\bmod 33 = 64 \\bmod 33 = \\mathbf{31}$.
5. **Decifrar** $c = 31$: $m = c^d \\bmod n = 31^7 \\bmod 33 = (-2)^7 \\bmod 33 = -128 \\bmod 33 = \\mathbf{4}$ (pois $-128 + 4 \\times 33 = 4$)!

### Defesa de Perímetro: Firewalls, IDS e IPS (CLÁSSICO ENADE 2017 Q25!)
| Mecanismo | Posição na Rede | Atuação | Camada / Profundidade de Análise |
| :--- | :--- | :--- | :--- |
| **Firewall Filtro de Pacotes (Stateless)** | Em linha (*inline*) | Bloqueia/permite pacote isolado por ACL | **L3/L4** (IP orig/dst, portas, protocolo); altíssimo desempenho, sem noção de sessão |
| **Firewall Stateful Inspection** | Em linha (*inline*) | Rastreia tabela de conexões TCP/UDP ativas | **L3/L4** com estado; bloqueia pacotes soltos que não pertencem a sessão válida |
| **Firewall de Aplicação (Proxy / WAF)** | Em linha (*inline*) | Intermedia e inspeciona conteúdo da aplicação | **L7** (inspeciona SQLi/XSS em HTTP, comandos SMTP/DNS); mais detalhado, menor vazão |
| **IDS (*Intrusion Detection System*)** | **Fora de linha** (cópia via SPAN/TAP) | **PASSIVO:** apenas analisa, gera logs e dispara alertas | Inspeciona pacotes/fluxos sem bloquear tráfego (não adiciona latência nem ponto único de falha) |
| **IPS (*Intrusion Prevention System*)** | **Em linha (*inline*)** (extensão do firewall) | **ATIVO / PROATIVO:** detecta e **descarta/bloqueia automaticamente** o ataque em tempo real | Combina inspeção profunda de pacotes (DPI) com bloqueio imediato antes que o ataque atinja os servidores |

- **Detecção por Assinaturas vs. Anomalias (IDS/IPS):** a detecção baseada em **assinaturas** compara o tráfego com padrões conhecidos (altíssima precisão e poucos falsos positivos, mas **não detecta ataques *zero-day***); a detecção baseada em **anomalias** compara contra um perfil de comportamento normal (capaz de detectar ataques inéditos, porém gera **mais falsos positivos**).
- **Principais Ataques e Contramedidas:** **DDoS / SYN Flood** (esgota tabela de conexões semi-abertas $\\to$ mitigado com *SYN Cookies* e filtragem de borda), **Man-in-the-Middle / ARP Spoofing** (mitigado por TLS/HTTPS e DAI em switches), **VPN (IPsec)** (modo *Transporte* cifra só o payload; modo *Túnel* encapsula e cifra todo o pacote IP original entre gateways).`,
        keyFormulas: [
          {
            label: 'Equações do Algoritmo Assimétrico RSA',
            latex: 'n = p \\cdot q, \\quad \\phi(n) = (p-1)(q-1), \\quad e \\cdot d \\equiv 1 \\pmod{\\phi(n)}, \\quad c = m^e \\bmod n, \\quad m = c^d \\bmod n',
          },
          {
            label: 'Troca de Chaves Diffie-Hellman',
            latex: 'A = g^a \\bmod p, \\quad B = g^b \\bmod p, \\quad K_{\\text{segredo}} = B^a \\bmod p = A^b \\bmod p = g^{ab} \\bmod p',
            note: 'Permite que duas partes criem uma chave simétrica compartilhada sobre um canal público inseguro.',
          },
        ],
        codeExample: {
          language: 'bash',
          title: 'Política de Firewall Stateful (iptables) com DMZ e bloqueio padrão (Default Deny)',
          code: `# 1) Politica padrao restritiva (Default Deny): tudo que nao for permitido e descartado
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# 2) Inspecao Stateful: permite trafego de retorno de conexoes ja estabelecidas
iptables -A INPUT   -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# 3) Permite acesso externo somente a HTTPS (443) no servidor Web da DMZ (10.0.10.20)
iptables -A FORWARD -p tcp -d 10.0.10.20 --dport 443 -m conntrack --ctstate NEW -j ACCEPT

# 4) Bloqueia acesso direto da DMZ para a rede interna corporativa (192.168.1.0/24)
# Atencao: regras de firewall sao avaliadas em ordem sequencial (first-match)!
iptables -A FORWARD -s 10.0.10.0/24 -d 192.168.1.0/24 -j DROP`,
        },
      },
    ],
    inepTraps: [
      'Confundir **IDS** com **IPS** (ENADE 2017 Q25!): o **IDS** é passivo (apenas monitora uma cópia do tráfego e emite alertas), enquanto o **IPS** opera em linha (*inline*) e **bloqueia proativamente** pacotes maliciosos antes que atinjam a rede.',
      'Substituir o valor de **SNR em decibéis (dB)** diretamente na fórmula de Shannon (`B log2(1 + S/N)`): antes de calcular, é obrigatório converter para a razão linear via `S/N = 10^(SNR_dB / 10)` (ex.: 30 dB = 1000, e não 30!).',
      'Inverter as chaves na **Assinatura Digital**: para assinar, usa-se a **chave PRIVADA do remetente** (sobre o hash da mensagem) e verifica-se com a **chave PÚBLICA do remetente** — nunca o contrário! E lembre: assinar garante integridade/autenticidade/não-repúdio, mas NÃO confidencialidade.',
      'Esquecer de subtrair `2` no cálculo de hosts válidos em sub-redes CIDR (`2^(32-p) - 2`) ou achar que um Switch L2 separa domínios de broadcast: Switch separa **domínios de colisão** por porta, mas só **Roteadores (L3)** ou **VLANs** separam domínios de broadcast!',
      'Confundir a reação do TCP Reno a **3 ACKs duplicados** vs. **Timeout**: com 3 ACKs duplicados (Fast Retransmit), `cwnd` cai pela **metade** (`ssthresh = cwnd/2`); apenas no **Timeout** severo `cwnd` despenca para `1 MSS` e volta ao Slow Start!',
    ],
    quickChecklist: [
      'Dominar as 7 camadas do modelo OSI, suas PDUs (Dados, Segmento, Pacote, Quadro, Bits) e equipamentos (Hub L1, Switch L2, Roteador L3).',
      'Aplicar Nyquist (`2B log2 M`), Shannon (`B log2(1 + S/N)` com conversão de dB), atrasos (`L/R` e `d/s`) e Produto Banda-Atraso (`R * RTT`).',
      'Comparar CSMA/CD (Ethernet com detecção/backoff/64B mín.) vs. CSMA/CA (Wi-Fi com ACK e RTS/CTS contra terminal oculto) e saber o princípio do CRC (XOR).',
      'Calcular rapidamente endereço de rede, broadcast, máscara e hosts válidos em CIDR (`/24` a `/30`) e aplicar Longest Prefix Match.',
      'Saber rodar a tabela de Dijkstra passo a passo (OSPF) e diferenciá-lo de RIP (Bellman-Ford, contagem ao infinito, máx. 15 saltos) e BGP (Inter-AS, políticas, TCP/179).',
      'Memorizar TCP (3-way handshake, `rwnd`, Slow Start exponencial, AIMD linear, 3 ACKs dup vs. Timeout) vs. UDP e portas bem conhecidas (22, 25, 53, 80, 443).',
      'Entender a evolução HTTP/1.1 → HTTP/2 (multiplexação binária em 1 TCP) → HTTP/3 (QUIC sobre UDP sem HoL blocking) e registros DNS (`A, AAAA, CNAME, MX, NS`).',
      'Dominar criptografia simétrica vs. assimétrica (RSA), assinatura digital, TLS híbrido, Firewalls (Stateless, Stateful, WAF L7) e IDS passivo vs. IPS ativo.',
    ],
  },
];


