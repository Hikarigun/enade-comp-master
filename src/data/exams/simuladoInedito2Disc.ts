import type { DiscursiveQuestion } from '../../types/enade';

export const INEDITA_DISCURSIVE: DiscursiveQuestion[] = [
  // =========================================================================
  // D01 — FORMAÇÃO GERAL (Impactos socioambientais de Data Centers e IA)
  // =========================================================================
  {
    id: 'inedita-d01',
    source: 'inedita',
    year: 2026,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Sustentabilidade Digital, Data Centers de IA, Consumo Hídrico e Governança Ambiental',
    difficulty: 'medio',
    maxLines: 15,
    context: `A rápida difusão de modelos de inteligência artificial generativa desencadeou uma onda sem precedentes de construção de *data centers* de hiperescala em todo o mundo. Segundo projeções da Agência Internacional de Energia (IEA), o consumo global de eletricidade associado a *data centers*, IA e criptoativos pode mais que dobrar em poucos anos, equiparando-se à demanda energética anual de países industrializados inteiros. Paralelamente, sistemas convencionais de resfriamento evaporativo utilizados para dissipar o calor de milhares de aceleradores gráficos (GPUs) consomem milhões de litros de água doce diariamente, gerando disputas pelo uso da água em regiões sob estresse hídrico.

Nesse cenário, o Brasil tem atraído grandes projetos internacionais devido à sua matriz elétrica majoritariamente renovável. Contudo, pesquisadores em planejamento energético e socioambiental alertam que a implantação acelerada dessas instalações, sem regulação transparente e critérios territoriais, pode sobrecarregar redes locais de transmissão, pressionar bacias hidrográficas vulneráveis e gerar poucos empregos permanentes após a fase de obras.

Com base nos textos e na perspectiva socioambiental e tecnológica, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Explique dois impactos socioambientais distintos decorrentes da expansão acelerada de data centers voltados à inteligência artificial generativa, articulando as dimensões energética, hídrica e territorial.',
        points: 5.0,
      },
      {
        label: 'b)',
        text: 'Proponha duas medidas concretas — uma de caráter técnico-engenharia (computação verde) e outra de governança pública ou regulatória — capazes de compatibilizar a expansão dessa infraestrutura digital com a sustentabilidade socioambiental.',
        points: 5.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Esperado (Modelo INEP)

**a) Dois impactos socioambientais distintos (5,0 pontos):**

1. **Pressão sobre a infraestrutura elétrica e pegada de carbono (2,5 pontos):** O treinamento e a inferência contínua de modelos de IA generativa demandam cargas elétricas altíssimas e ininterruptas (24/7). Essa demanda pode sobrecarregar redes regionais de transmissão, atrasar a descarbonização ao exigir acionamento de usinas termelétricas fósseis de respaldo (ampliando emissões de GEE) e gerar externalidades tarifárias para consumidores locais.
2. **Estresse hídrico e conflitos territoriais pelo uso da água (2,5 pontos):** Torres de resfriamento evaporativo consomem grandes volumes de água potável/tratada para dissipar o calor dos racks de GPUs. Quando instalados em regiões semiáridas ou bacias já pressionadas por mudanças climáticas, *data centers* intensificam a escassez hídrica e entram em conflito direto com o abastecimento urbano e a agricultura familiar das comunidades locais.

*(Também são aceitos impactos bem fundamentados sobre geração acelerada de lixo eletrônico/REEE pelo ciclo curto de substituição de GPUs e ilhas de calor / conflitos fundiários locais.)*

---

**b) Duas medidas concretas — técnica e regulatória (5,0 pontos):**

1. **Medida técnico-engenharia / Computação Verde (2,5 pontos):** Substituir resfriamento evaporativo com água potável por **resfriamento líquido em circuito fechado** (*direct-to-chip* ou imersão) e **reúso de água não potável/cinza**, reduzindo drasticamente os indicadores **PUE** (*Power Usage Effectiveness*) e **WUE** (*Water Usage Effectiveness*); complementarmente, otimizar eficiência algorítmica (modelos menores especializados, quantização e poda de redes neurais) e reaproveitar o calor residual gerado.
2. **Medida de governança pública e regulação (2,5 pontos):** Instituir **licenciamento socioambiental específico** com exigência de transparência pública periódica de consumo de energia, água e emissões (PUE/WUE), **zoneamento territorial** que restrinja grandes instalações em bacias sob estresse hídrico e exigência de **adicionalidade energética** (contratação de nova capacidade de geração renovável e contrapartidas locais de formação técnica).`,
    rubricCriteria: [
      {
        id: 'inedita-d01-c1',
        label: 'Item a) Impacto 1 (Energia / Carbono / Rede elétrica)',
        description: 'Explica com nexo causal o impacto do alto consumo elétrico contínuo da IA sobre sobrecarga da rede, emissões indiretas ou custos energéticos.',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d01-c2',
        label: 'Item a) Impacto 2 (Estresse hídrico / Conflito territorial)',
        description: 'Explica com nexo causal o consumo intensivo de água em resfriamento e suas consequências sobre bacias vulneráveis e comunidades locais.',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d01-c3',
        label: 'Item b) Proposta técnico-engenharia (Computação Verde)',
        description: 'Apresenta solução técnica viável e específica (ex.: resfriamento líquido em circuito fechado, água de reúso, melhoria de PUE/WUE ou eficiência algorítmica).',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d01-c4',
        label: 'Item b) Proposta de governança / regulação pública',
        description: 'Apresenta mecanismo regulatório concreto (ex.: relatórios obrigatórios de água/energia, zoneamento hídrico, licenciamento ou adicionalidade de renováveis).',
        maxPoints: 2.5,
      },
    ],
    studyTips: `1. **Divida as 15 linhas em dois parágrafos equilibrados:** reserve ~7 linhas para o item **a)** e ~8 linhas para o item **b)**, identificando explicitamente "a)" e "b)".
2. **Evite generalidades no item a):** não escreva apenas "gasta muita energia e água". Explicite o *mecanismo* (calor de GPUs -> resfriamento evaporativo -> disputa por água em bacias vulneráveis; carga 24/7 -> sobrecarga de transmissão e acionamento termelétrico).
3. **Mostre vocabulário técnico de engenheiro no item b):** citar **resfriamento líquido em circuito fechado**, **PUE/WUE**, **quantização/eficiência de modelos** e **zoneamento hídrico com transparência obrigatória** eleva imediatamente sua pontuação na banca.`,
    reference: 'IEA — Electricity 2024/2025 (Analysis and Forecast: Data Centres and AI); UNESCO — Ética e Sustentabilidade da IA.',
  },

  // =========================================================================
  // D02 — FORMAÇÃO GERAL (Exclusão digital, acessibilidade e cidadania)
  // =========================================================================
  {
    id: 'inedita-d02',
    source: 'inedita',
    year: 2026,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Exclusão Digital, Acessibilidade Tecnológica e Cidadania no Governo Digital',
    difficulty: 'medio',
    maxLines: 15,
    context: `Na última década, o Brasil avançou expressivamente na oferta de serviços públicos digitais integrados — abrangendo previdência social, carteira de trabalho, agendamentos do Sistema Único de Saúde (SUS), benefícios assistenciais e matrícula escolar. Embora a transformação digital reduza filas, custos operacionais e burocracia, levantamentos do Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação (Cetic.br — pesquisa TIC Domicílios) evidenciam que o acesso à internet no país permanece profundamente desigual.

Parcela expressiva da população das classes D e E e de áreas rurais acessa a rede exclusivamente por telefone celular, frequentemente com aparelhos de baixa capacidade e planos pré-pagos de franquia restrita (*conectividade não significativa*). Além disso, pessoas idosas com baixo letramento digital e pessoas com deficiência (PcD) relatam barreiras recorrentes diante de portais governamentais complexos, incompatíveis com leitores de tela, desprovidos de Libras ou que extinguem alternativas de atendimento presencial.

Considerando a situação descrita, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Analise como a digitalização exclusiva de serviços públicos, sem políticas compensatórias de inclusão, compromete o exercício pleno da cidadania no Brasil, discutindo ao menos dois fatores distintos de exclusão digital.',
        points: 5.0,
      },
      {
        label: 'b)',
        text: 'Apresente duas propostas articuladas — uma no campo das políticas públicas de inclusão e outra no campo da engenharia e do design de sistemas digitais — para assegurar o acesso universal e acessível aos serviços públicos.',
        points: 5.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Esperado (Modelo INEP)

**a) Comprometimento da cidadania por dois fatores de exclusão digital (5,0 pontos):**

Quando serviços essenciais (saúde, previdência, assistência social) passam a exigir tramitação exclusivamente online, barreiras tecnológicas convertem-se em barreiras de acesso a direitos constitucionais básicos, agravando desigualdades sociais:
1. **Déficit de conectividade significativa (2,5 pontos):** Famílias de baixa renda e moradores de áreas rurais dependem majoritariamente de smartphones simples com pacotes pré-pagos limitados; aplicativos pesados, exigência de envio de documentos digitalizados ou validação biométrica facial falham nesses dispositivos, impedindo o requerimento de benefícios e consultas.
2. **Barreiras de letramento digital e de acessibilidade (2,5 pontos):** Pessoas idosas ou com baixa escolaridade enfrentam dificuldades com interfaces complexas, senhas e fluxos burocráticos em múltiplos níveis (além de maior exposição a golpes); simultaneamente, portais que descumprem padrões de acessibilidade excluem pessoas com deficiência visual, auditiva ou motora (ausência de compatibilidade com leitores de tela, legendas/Libras e navegação por teclado).

---

**b) Duas propostas articuladas — políticas públicas e engenharia/design (5,0 pontos):**

1. **Política pública e atendimento híbrido (2,5 pontos):** Manter **canais presenciais assistidos** (em unidades como CRAS, postos de saúde e prefeituras) para quem não possui acesso ou autonomia digital, em paralelo à expansão de **conectividade comunitária gratuita** (banda larga pública/isenção de dados para portais governamentais) e **oficinas permanentes de letramento digital** focadas em idosos e comunidades vulneráveis.
2. **Engenharia e design inclusivo de sistemas públicos (2,5 pontos):** Tornar obrigatória e auditada a conformidade com padrões de acessibilidade (**eMAG** e **WCAG 2.1**) — suporte a leitores de tela, contraste, tradução em Libras e navegação por teclado —, adotando **linguagem simples**, aplicações leves (*mobile-first* e *offline-first*) compatíveis com celulares modestos e testes de usabilidade com usuários diversos desde a concepção.`,
    rubricCriteria: [
      {
        id: 'inedita-d02-c1',
        label: 'Item a) 1º fator de exclusão e nexo com cidadania',
        description: 'Demonstra como a ausência de conectividade significativa (acesso exclusivo por celular simples/franquia limitada) bloqueia o acesso a direitos e serviços públicos.',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d02-c2',
        label: 'Item a) 2º fator distinto (letramento digital ou acessibilidade)',
        description: 'Aborda um segundo fator distinto (baixo letramento digital de idosos/baixa escolaridade ou barreiras de acessibilidade para PcD) articulado à exclusão cidadã.',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d02-c3',
        label: 'Item b) Proposta de política pública / inclusão social',
        description: 'Propõe ação pública factível (ex.: manutenção de atendimento presencial/híbrido assistido, pontos públicos de internet ou programas de letramento digital).',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d02-c4',
        label: 'Item b) Proposta de engenharia / design acessível',
        description: 'Propõe requisito técnico concreto (ex.: auditoria WCAG/eMAG, suporte a tecnologias assistivas/Libras, linguagem simples ou apps leves para dispositivos básicos).',
        maxPoints: 2.5,
      },
    ],
    studyTips: `1. **Conecte tecnologia a direitos constitucionais:** o avaliador de Formação Geral busca ver que você entende que "exclusão digital" hoje significa exclusão da saúde, da previdência e do emprego.
2. **Use o conceito preciso de "conectividade significativa":** diferenciar *ter sinal de celular pré-pago* de *ter conectividade adequada para exercer direitos* mostra repertório atualizado da pesquisa TIC Domicílios.
3. **No item b), não esqueça o duplo escopo:** garanta uma proposta claramente voltada a **políticas públicas** (atendimento híbrido/letramento) e outra claramente voltada à **engenharia de software/IHC** (eMAG/WCAG, apps leves, testes com usuários), mantendo tudo dentro das 15 linhas.`,
    reference: 'Cetic.br / NIC.br — Pesquisa TIC Domicílios; Brasil — Lei nº 14.129/2021 (Lei do Governo Digital) e Modelo de Acessibilidade em Governo Eletrônico (eMAG).',
  },

  // =========================================================================
  // D03 — COMPONENTE ESPECÍFICO (Algoritmos e ED — C / Verificação AVL O(n))
  // =========================================================================
  {
    id: 'inedita-d03',
    source: 'inedita',
    year: 2026,
    number: 3,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Árvores Binárias, Critério de Balanceamento AVL em C e Análise de Complexidade',
    difficulty: 'dificil',
    maxLines: 15,
    isCodeQuestion: true,
    context: `Um motor de banco de dados em memória armazena índices em uma árvore binária cujos nós são definidos em linguagem C pela estrutura abaixo:

\`\`\`c
typedef struct No {
    int chave;
    struct No *esq;
    struct No *dir;
} No;
\`\`\`

Adota-se a convenção de que a altura de uma subárvore vazia (\`NULL\`) é \`0\` e a altura de um nó folha é \`1\`. Uma árvore binária satisfaz o **critério de balanceamento AVL** se, e somente se, para **todos** os seus nós \`r\`, o fator de balanceamento $FB(r) = h(r\\to\\text{esq}) - h(r\\to\\text{dir})$ satisfizer $|FB(r)| \\le 1$.

Para auditar integridade após operações em lote, um desenvolvedor propôs inicialmente uma **abordagem ingênua** que, em cada nó \`r\`, invoca uma função auxiliar \`altura(r->esq)\` e \`altura(r->dir)\` (cada uma percorrendo toda a subárvore correspondente) e depois chama recursivamente a verificação para \`r->esq\` e \`r->dir\`. Contudo, o líder técnico determinou que a verificação seja reescrita em **uma única travessia recursiva em pós-ordem** com complexidade de tempo linear $O(n)$, utilizando o retorno sentinela \`-1\` para sinalizar desbalanceamento.

Com base nessas especificações, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Explique por que a abordagem ingênua apresenta complexidade de tempo O(n²) no pior caso para uma árvore com n nós, caracterizando o formato da árvore em que esse pior caso ocorre.',
        points: 2.5,
      },
      {
        label: 'b)',
        text: 'Implemente em linguagem C a função recursiva otimizada int alturaSeAVL(No *r) — que retorna a altura da subárvore se ela for AVL ou -1 caso alguma subárvore esteja desbalanceada — e o invólucro int ehAVL(No *r) que retorna 1 se a árvore for AVL e 0 caso contrário.',
        points: 5.0,
      },
      {
        label: 'c)',
        text: 'Determine e justifique a complexidade assintótica de tempo e a complexidade de espaço auxiliar (pilha de recursão) da sua solução otimizada para os casos de árvore balanceada e de árvore degenerada.',
        points: 2.5,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (Modelo INEP)

**a) Pior caso $O(n^2)$ da abordagem ingênua (2,5 pontos):**

O pior caso ocorre quando a árvore é **degenerada** (em formato de lista encadeada, com altura $h = n$, onde cada nó possui apenas um filho — por exemplo, inserção ordenada sem rotações). Nesse cenário, ao chamar \`altura()\` separadamente para cada nó visitado de cima para baixo, a função percorre $n - 1$ nós a partir da raiz, depois $n - 2$ nós a partir do 2º nó, $n - 3$ no 3º, e assim sucessivamente (ou se a raiz só detectasse após checar ou se os nós superiores tivessem subárvores quase degeneradas/sem curto-circuito):

$$T(n) = (n - 1) + (n - 2) + \\dots + 1 + 0 = \\frac{n(n - 1)}{2} = \\Theta(n^2) = O(n^2)$$

O recálculo redundante das alturas das mesmas subárvores em cada nível é a causa direta do comportamento quadrático (mesmo em árvores perfeitamente balanceadas, a recorrência $T(n) = 2T(n/2) + \\Theta(n)$ ainda custaria $\\Theta(n \\log n)$).

---

**b) Implementação otimizada em linguagem C em pós-ordem (5,0 pontos):**

\`\`\`c
int alturaSeAVL(No *r) {
    if (r == NULL) return 0;

    int he = alturaSeAVL(r->esq);
    if (he == -1) return -1;

    int hd = alturaSeAVL(r->dir);
    if (hd == -1) return -1;

    int fb = he - hd;
    if (fb < -1 || fb > 1) return -1;

    return 1 + (he > hd ? he : hd);
}

int ehAVL(No *r) {
    return alturaSeAVL(r) != -1;
}
\`\`\`

**Por que funciona em passagem única:** A função calcula a altura *de baixo para cima* (pós-ordem). Assim que qualquer subárvore falha no critério $|h_{\\text{esq}} - h_{\\text{dir}}| \\le 1$, retorna imediatamente \`-1\`, e os testes \`if (he == -1)\` / \`if (hd == -1)\` propagam a falha até a raiz (com curto-circuito, evitando visitar o restante da árvore).

---

**c) Análise de complexidade de tempo e espaço auxiliar (2,5 pontos):**

- **Complexidade de tempo:** **$O(n)$** tanto para árvore balanceada quanto para árvore degenerada, pois cada um dos $n$ nós é visitado **no máximo uma vez**, executando um número constante $O(1)$ de operações aritméticas e comparações em cada nó (recorrência $T(n) = T(k) + T(n - 1 - k) + O(1) = O(n)$).
- **Complexidade de espaço auxiliar (pilha de recursão):** **$O(h)$**, proporcional à altura $h$ da árvore:
  - Em árvore **balanceada (AVL):** $h = O(\\log n) \\implies$ espaço auxiliar **$O(\\log n)$**;
  - Em árvore **degenerada (pior caso):** $h = n \\implies$ espaço auxiliar **$O(n)$**.`,
    rubricCriteria: [
      {
        id: 'inedita-d03-c1',
        label: 'Item a) Justificativa do O(n²) e árvore degenerada',
        description: 'Identifica árvore degenerada (altura n) e explica o recálculo redundante de altura levando ao somatório (n-1) + (n-2) + ... + 1 = O(n²).',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d03-c2',
        label: 'Item b) Caso base e recursão pós-ordem com propagação de -1',
        description: 'Trata r == NULL retornando 0, chama recursivamente r->esq e r->dir e propaga imediatamente o sentinela -1 quando detectado.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d03-c3',
        label: 'Item b) Critério |he - hd| <= 1 e cálculo correto da altura',
        description: 'Verifica corretamente o desbalanceamento (fb < -1 || fb > 1 ou abs(he - hd) > 1) retornando -1, e retorna 1 + max(he, hd) caso válido.',
        maxPoints: 2.0,
      },
      {
        id: 'inedita-d03-c4',
        label: 'Item b) Invólucro ehAVL e sintaxe C correta',
        description: 'Implementa ehAVL(No *r) retornando 1/0 conforme != -1 com sintaxe C válida e acesso seguro a ponteiros.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d03-c5',
        label: 'Item c) Complexidades de tempo O(n) e espaço O(h)',
        description: 'Justifica tempo O(n) (visita única por nó) e distingue espaço de pilha O(log n) em árvore balanceada e O(n) em árvore degenerada.',
        maxPoints: 2.5,
      },
    ],
    studyTips: `1. **Use duas colunas na folha de 15 linhas:** escreva os itens **a)** e **c)** na coluna da esquerda (3–4 linhas cada) e o código C limpo do item **b)** na coluna da direita (~11 linhas).
2. **Não esqueça o curto-circuito do \`-1\`:** um erro clássico é testar \`if (abs(he - hd) > 1)\` **sem** verificar antes se \`he == -1\` ou \`hd == -1\`. Se \`he == -1\` e \`hd == 0\`, \`abs(-1 - 0) == 1\` passaria falsamente como balanceado!
3. **Na complexidade de espaço, nunca responda só "O(1)":** funções recursivas consomem memória na **pilha de chamadas** proporcional à profundidade máxima da recursão $O(h)$ — sempre especifique $O(\\log n)$ (balanceada) e $O(n)$ (degenerada).`,
  },

  // =========================================================================
  // D04 — COMPONENTE ESPECÍFICO (Arquitetura e Embarcados — IoT / ADC / C / EEPROM)
  // =========================================================================
  {
    id: 'inedita-d04',
    source: 'inedita',
    year: 2026,
    number: 4,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Sistemas Embarcados IoT: Condicionamento Analógico (ADC 12 bits), Registradores Bit a Bit em C e EEPROM I2C',
    difficulty: 'dificil',
    maxLines: 15,
    isCodeQuestion: true,
    context: `Você foi encarregado de projetar uma estação **IoT agrícola** autônoma para monitoramento de umidade e temperatura do solo em uma área rural sem cobertura celular contínua. O hardware possui as seguintes especificações:

1. **Front-end analógico e ADC:** Um sensor capacitivo industrial fornece saída analógica linear $V_{\\text{sens}}$ na faixa de $0\\text{ V}$ a $10,24\\text{ V}$. Como o microcontrolador dispõe de um **ADC de 12 bits** com referência de precisão $V_{\\text{ref}} = 4,096\\text{ V}$, inseriu-se um divisor resistivo com $R_1 = 15\\text{ k}\\Omega$ (entre $V_{\\text{sens}}$ e o pino do ADC) e $R_2 = 10\\text{ k}\\Omega$ (entre o pino do ADC e o GND). Adote o degrau de quantização $Q = V_{\\text{ref}} / 2^{12}$ e a conversão $D = \\lfloor (V_{\\text{ADC}} / V_{\\text{ref}}) \\cdot 2^{12} \\rfloor$.
2. **Registrador de controle do ADC (\`ADC_CTRL\`, 8 bits, mapeado em memória via \`volatile uint8_t *ADC_CTRL\`):**

| Bit 7 | Bits 6..4 | Bits 3..2 | Bit 1 | Bit 0 |
| :---: | :---: | :---: | :---: | :---: |
| \`ADEN\` | \`CH[2:0]\` (canal 0–7) | \`PRESC[1:0]\` (\`00\`=/2, \`01\`=/4, \`10\`=/8, \`11\`=/16) | \`IE\` (interrupção) | \`START\` |

3. **Armazenamento offline em EEPROM externa I²C:** A estação grava **1 registro completo a cada 15 minutos**, ininterruptamente (24 horas/dia), devendo suportar **30 dias** de autonomia offline. Cada registro ocupa: \`4 bytes\` (*timestamp*), \`6 bytes\` (3 canais ADC de 12 bits armazenados como \`uint16_t\`) e \`2 bytes\` (CRC-16).

Com base nessas especificações, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Verifique se o divisor de tensão protege a entrada do ADC na tensão máxima do sensor (10,24 V), calcule a resolução (em mV/LSB) do ADC de 12 bits e determine o código digital D (em decimal e hexadecimal) gerado quando o sensor fornece V_sens = 6,40 V.',
        points: 3.0,
      },
      {
        label: 'b)',
        text: 'Escreva um trecho de código em linguagem C (manipulação bit a bit) que configure o registrador *ADC_CTRL para selecionar o canal 5, prescaler /8 e habilitar a interrupção de fim de conversão (IE = 1), preservando obrigatoriamente os valores atuais dos bits ADEN (bit 7) e START (bit 0).',
        points: 3.5,
      },
      {
        label: 'c)',
        text: 'Calcule o volume total de dados gerados em 30 dias (em bytes e em Kbits, adotando 1 Kbit = 1 024 bits) e selecione, justificando, a menor EEPROM I²C comercial (entre 64, 128, 256 e 512 Kbits) que atende integralmente ao requisito.',
        points: 3.5,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (Modelo INEP)

**a) Divisor de tensão, resolução do ADC e conversão para $6,40\\text{ V}$ (3,0 pontos):**

1. **Verificação de proteção na tensão máxima ($V_{\\text{sens},\\max} = 10,24\\text{ V}$):**
   $$V_{\\text{ADC}} = V_{\\text{sens}} \\cdot \\frac{R_2}{R_1 + R_2} = V_{\\text{sens}} \\cdot \\frac{10\\text{ k}\\Omega}{15\\text{ k}\\Omega + 10\\text{ k}\\Omega} = 0,4 \\cdot V_{\\text{sens}}$$
   Para $V_{\\text{sens},\\max} = 10,24\\text{ V}$:
   $$V_{\\text{ADC},\\max} = 0,4 \\times 10,24\\text{ V} = \\mathbf{4,096\\text{ V}} = V_{\\text{ref}}$$
   Logo, o divisor **protege a entrada** (não excede $V_{\\text{ref}}$) e aproveita $100\\%$ da faixa dinâmica do ADC.

2. **Resolução do ADC de 12 bits ($2^{12} = 4\\,096$ níveis):**
   $$Q = \\frac{V_{\\text{ref}}}{2^{12}} = \\frac{4\\,096\\text{ mV}}{4\\,096} = \\mathbf{1,0\\text{ mV/LSB}}$$

3. **Código digital $D$ para $V_{\\text{sens}} = 6,40\\text{ V}$:**
   $$V_{\\text{ADC}} = 0,4 \\times 6,40\\text{ V} = 2,560\\text{ V} = 2\\,560\\text{ mV}$$
   $$D = \\left\\lfloor \\frac{2,560}{4,096} \\times 4\\,096 \\right\\rfloor = \\mathbf{2\\,560_{10}} = \\mathbf{\\text{0xA00}_{16}}$$
   *(Nota: $2\\,560 = 10 \\times 256 = 10 \\times 16^2 = \\text{0xA00}$. Caso o candidato utilize $2^{12}-1 = 4\\,095$, aceita-se $D = 2\\,559 = \\text{0x9FF}$.)*

---

**b) Configuração bit a bit de \`*ADC_CTRL\` em linguagem C (3,5 pontos):**

Campos desejados (bits 6 a 1):
- \`CH[2:0] = 5\` $\\rightarrow$ \`101\` nos bits 6..4 $\\rightarrow$ \`(5u << 4)\` = \`0x50\`
- \`PRESC[1:0] = /8\` $\\rightarrow$ \`10\` nos bits 3..2 $\\rightarrow$ \`(2u << 2)\` = \`0x08\`
- \`IE = 1\` no bit 1 $\\rightarrow$ \`(1u << 1)\` = \`0x02\`
- Máscara dos bits a limpar (bits 6..1): \`0b01111110 = 0x7E\` (preserva bits 7 e 0, ou seja, \`& 0x81u\`).
- Valor combinado a gravar nos bits 6..1: \`0x50 | 0x08 | 0x02 = 0x5A\`.

\`\`\`c
uint8_t reg = *ADC_CTRL;
reg &= (uint8_t)~0x7Eu;                    // limpa bits 6..1, preservando ADEN (7) e START (0)
reg |= (5u << 4) | (2u << 2) | (1u << 1);  // CH=5, PRESC=/8, IE=1 (0x5A)
*ADC_CTRL = reg;
\`\`\`

*(A escrita via variável temporária \`reg\` evita estados intermediários indesejados no periférico entre o \`&=\` e o \`|=\`; também se aceita a forma direta \`*ADC_CTRL = (*ADC_CTRL & 0x81u) | 0x5Au;\`.)*

---

**c) Dimensionamento da memória EEPROM I²C (3,5 pontos):**

- **Tamanho de cada registro:** $4 + 6 + 2 = \\mathbf{12\\text{ bytes/registro}}$.
- **Quantidade de registros em 30 dias:**
  - Por hora: $60 / 15 = 4\\text{ registros/h}$;
  - Por dia: $4 \\times 24 = 96\\text{ registros/dia}$;
  - Em 30 dias: $96 \\times 30 = \\mathbf{2\\,880\\text{ registros}}$.
- **Volume total em bytes:**
  $$2\\,880 \\times 12\\text{ bytes} = \\mathbf{34\\,560\\text{ bytes}} \\quad (= 33,75\\text{ KiB})$$
- **Volume total em Kbits ($1\\text{ Kbit} = 1\\,024\\text{ bits}$):**
  $$34\\,560\\text{ bytes} \\times 8\\text{ bits/byte} = 276\\,480\\text{ bits}$$
  $$\\frac{276\\,480}{1\\,024} = \\mathbf{270\\text{ Kbits}}$$
- **Escolha comercial:** Como a EEPROM de $256\\text{ Kbits}$ armazena no máximo $256 \\times 1\\,024 / 8 = 32\\,768\\text{ bytes}$ ($< 34\\,560\\text{ bytes}$), a menor EEPROM I²C comercial capaz de atender o projeto é a de **512 Kbits** ($64\\text{ KiB} = 65\\,536\\text{ bytes}$, ex.: série 24LC512).`,
    rubricCriteria: [
      {
        id: 'inedita-d04-c1',
        label: 'Item a) Divisor de tensão e resolução do ADC',
        description: 'Calcula fator 0,4 do divisor, comprova V_ADC,max = 4,096 V = V_ref e obtém resolução Q = 1,0 mV/LSB.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d04-c2',
        label: 'Item a) Código digital em decimal e hexadecimal',
        description: 'Calcula V_ADC = 2,560 V e determina D = 2 560 (0xA00) [aceita 2 559 / 0x9FF se usou 2^12 - 1].',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d04-c3',
        label: 'Item b) Máscara de limpeza preservando bits 7 e 0',
        description: 'Usa operação AND com máscara correta (& ~0x7E ou & 0x81) para zerar apenas bits 6..1 sem alterar ADEN (bit 7) nem START (bit 0).',
        maxPoints: 2.0,
      },
      {
        id: 'inedita-d04-c4',
        label: 'Item b) Deslocamentos e OR para CH=5, PRESC=/8 e IE=1',
        description: 'Aplica (5u << 4) | (2u << 2) | (1u << 1) (ou constante equivalente 0x5A) em sintaxe C correta sobre *ADC_CTRL.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d04-c5',
        label: 'Item c) Cálculo de registros, bytes e Kbits',
        description: 'Determina 2 880 registros, 34 560 bytes e 270 Kbits (adotando 1 Kbit = 1 024 bits; aceita 276,48 kbits se explícito em base 10).',
        maxPoints: 2.5,
      },
      {
        id: 'inedita-d04-c6',
        label: 'Item c) Seleção justificada da EEPROM de 512 Kbits',
        description: 'Escolhe corretamente 512 Kbits justificando que 256 Kbits (32 KiB) é insuficiente para 270 Kbits (33,75 KiB).',
        maxPoints: 1.0,
      },
    ],
    studyTips: `1. **Atenção à armadilha clássica de registradores em C:** nunca faça apenas \`*ADC_CTRL |= 0x5A;\` sem limpar os bits anteriores! Se \`CH[2:0]\` estivesse antes em \`010\` (canal 2), um simples OR com \`101\` produziria \`111\` (canal 7, errado!). Sempre faça **ler $\\to$ limpar com \`& ~mascara\` $\\to$ setar com \`|\` $\\to$ gravar**.
2. **Atenção a Kbits vs. Kbytes em EEPROMs I²C:** chips como \`24LC256\` e \`24LC512\` têm capacidade especificada em **Kbits**, não Kbytes! Sempre multiplique bytes por 8 antes de comparar com o modelo do chip.
3. **Economize linhas na redação:** apresente as contas de **a)** e **c)** em fórmulas diretas na horizontal e o código de **b)** em 4 linhas limpas — tudo cabe confortavelmente em 13–15 linhas.`,
  },

  // =========================================================================
  // D05 — COMPONENTE ESPECÍFICO (Sistemas Operacionais — SJF vs RR + Paginação)
  // =========================================================================
  {
    id: 'inedita-d05',
    source: 'inedita',
    year: 2026,
    number: 5,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Escalonamento de Processos (SJF vs. Round-Robin) e Substituição de Páginas (FIFO vs. LRU)',
    difficulty: 'dificil',
    maxLines: 15,
    context: `Um engenheiro de sistemas operacionais avalia o desempenho do escalonador de CPU e do gerenciador de memória virtual de um servidor embarcado monoprocessado (*single-core*).

**Parte I — Escalonamento de CPU:** Considere quatro processos *CPU-bound* com os respectivos instantes de chegada e tempos de surto (*burst*) especificados na tabela abaixo (despreze o tempo de troca de contexto):

| Processo | Tempo de Chegada (ms) | Tempo de Surto / Burst (ms) |
| :---: | :---: | :---: |
| **P1** | 0 | 8 |
| **P2** | 1 | 4 |
| **P3** | 2 | 2 |
| **P4** | 3 | 6 |

**Parte II — Gerência de Memória Virtual:** Em outro teste, um processo dispõe de exatamente **3 molduras físicas** inicialmente vazias e gera a seguinte sequência de 10 referências a páginas virtuais:

$$7,\\; 0,\\; 1,\\; 2,\\; 0,\\; 3,\\; 0,\\; 4,\\; 2,\\; 3$$

Com base nesses dados, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Apresente a linha do tempo (diagrama de Gantt) e calcule o tempo médio de espera e o tempo médio de retorno (turnaround) para o escalonamento SJF não preemptivo.',
        points: 3.5,
      },
      {
        label: 'b)',
        text: 'Apresente a linha do tempo (diagrama de Gantt) e calcule o tempo médio de espera e o tempo médio de retorno (turnaround) para o escalonamento Round-Robin com quantum q = 4 ms, comparando brevemente SJF e Round-Robin quanto à justiça e ao tempo de resposta.',
        points: 3.5,
      },
      {
        label: 'c)',
        text: 'Para a sequência de 10 acessos a páginas com 3 molduras físicas, determine o número total de faltas de página sob as políticas FIFO e LRU, explicando a razão técnica pela qual o LRU superou o FIFO nessa sequência.',
        points: 3.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (Modelo INEP)

**a) Escalonamento SJF Não Preemptivo (3,5 pontos):**

- Em $t = 0$, apenas **P1** está pronto $\\Rightarrow$ executa integralmente de \`0\` a \`8\`.
- Em $t = 8$, P2 (4), P3 (2) e P4 (6) já chegaram $\\Rightarrow$ seleciona-se em ordem crescente de *burst*: **P3** (\`8–10\`), **P2** (\`10–14\`) e **P4** (\`14–20\`).

**Diagrama de Gantt (SJF Não Preemptivo):**
\`\`\`text
|   P1   | P3 |  P2  |   P4   |
0        8   10     14       20
\`\`\`

| Processo | Chegada | Surto | Término | Turnaround ($T_{\\text{término}} - T_{\\text{chegada}}$) | Espera ($\\text{Turnaround} - \\text{Surto}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| P1 | 0 | 8 | 8 | $8 - 0 = 8$ | $8 - 8 = 0$ |
| P2 | 1 | 4 | 14 | $14 - 1 = 13$ | $13 - 4 = 9$ |
| P3 | 2 | 2 | 10 | $10 - 2 = 8$ | $8 - 2 = 6$ |
| P4 | 3 | 6 | 20 | $20 - 3 = 17$ | $17 - 6 = 11$ |

- **Tempo médio de espera (SJF):** $\\dfrac{0 + 9 + 6 + 11}{4} = \\dfrac{26}{4} = \\mathbf{6,5\\text{ ms}}$
- **Tempo médio de *turnaround* (SJF):** $\\dfrac{8 + 13 + 8 + 17}{4} = \\dfrac{46}{4} = \\mathbf{11,5\\text{ ms}}$

---

**b) Escalonamento Round-Robin com $q = 4\\text{ ms}$ (3,5 pontos):**

- \`[0–4]\`: **P1** executa 4 ms (restam 4 ms); durante esse intervalo entram na fila \`P2 (t=1), P3 (t=2), P4 (t=3)\`; em $t = 4$, P1 vai ao fim da fila $\\rightarrow$ \`[P2, P3, P4, P1]\`.
- \`[4–8]\`: **P2** executa 4 ms e **conclui** ($t = 8$). Fila: \`[P3, P4, P1]\`.
- \`[8–10]\`: **P3** executa 2 ms e **conclui** ($t = 10$). Fila: \`[P4, P1]\`.
- \`[10–14]\`: **P4** executa 4 ms (restam 2 ms) e vai ao fim da fila $\\rightarrow$ \`[P1, P4]\`.
- \`[14–18]\`: **P1** executa os 4 ms finais e **conclui** ($t = 18$).
- \`[18–20]\`: **P4** executa os 2 ms finais e **conclui** ($t = 20$).

**Diagrama de Gantt (Round-Robin, $q = 4\\text{ ms}$):**
\`\`\`text
|  P1  |  P2  | P3 |  P4  |  P1  | P4 |
0      4      8   10     14     18   20
\`\`\`

| Processo | Chegada | Surto | Término | Turnaround | Espera |
| :---: | :---: | :---: | :---: | :---: | :---: |
| P1 | 0 | 8 | 18 | $18 - 0 = 18$ | $18 - 8 = 10$ |
| P2 | 1 | 4 | 8 | $8 - 1 = 7$ | $7 - 4 = 3$ |
| P3 | 2 | 2 | 10 | $10 - 2 = 8$ | $8 - 2 = 6$ |
| P4 | 3 | 6 | 20 | $20 - 3 = 17$ | $17 - 6 = 11$ |

- **Tempo médio de espera (RR):** $\\dfrac{10 + 3 + 6 + 11}{4} = \\dfrac{30}{4} = \\mathbf{7,5\\text{ ms}}$
- **Tempo médio de *turnaround* (RR):** $\\dfrac{18 + 7 + 8 + 17}{4} = \\dfrac{50}{4} = \\mathbf{12,5\\text{ ms}}$
- **Comparação (*trade-off*):** Embora o **SJF** minimize o tempo médio de espera ($6,5 < 7,5\\text{ ms}$), ele depende de conhecer/estimar previamente o *burst* e pode causar **inanição (*starvation*)** de processos longos se chegarem continuamente processos curtos. Já o **Round-Robin** promove **justiça** (evita *starvation*) e melhor **tempo de resposta interativo** (ex.: P2 inicia em $t = 4$ em vez de $t = 10$), ao custo de maior *turnaround* médio e sobrecarga de trocas de contexto.

---

**c) Substituição de Páginas — FIFO vs. LRU com 3 molduras (3,0 pontos):**

**FIFO (mais antiga à esquerda):**
- \`7\` [7] (**F1**), \`0\` [7,0] (**F2**), \`1\` [7,0,1] (**F3**), \`2\` [0,1,2] (**F4**), \`0\` [0,1,2] (Hit), \`3\` [1,2,3] (**F5** — remove \`0\`!), \`0\` [2,3,0] (**F6**), \`4\` [3,0,4] (**F7**), \`2\` [0,4,2] (**F8**), \`3\` [4,2,3] (**F9**).
- **Total FIFO = 9 faltas de página.**

**LRU (menos recentemente usada à esquerda):**
- \`7\` [7] (**F1**), \`0\` [7,0] (**F2**), \`1\` [7,0,1] (**F3**), \`2\` [0,1,2] (**F4**), \`0\` [1,2,0] (Hit), \`3\` [2,0,3] (**F5** — remove \`1\`, mantendo \`0\`!), \`0\` [2,3,0] (Hit!), \`4\` [3,0,4] (**F6**), \`2\` [0,4,2] (**F7**), \`3\` [4,2,3] (**F8**).
- **Total LRU = 8 faltas de página.**

**Justificativa técnica:** Na 6ª referência (página \`3\`), o **FIFO** descarta a página \`0\` apenas por ter sido carregada antes de \`1\` e \`2\`, ignorando que ela acabara de ser reutilizada na 5ª referência — causando uma falta imediata na 7ª referência. O **LRU** explora o princípio da **localidade temporal**, preservando a página \`0\` recém-acessada e removendo \`1\` (a menos recentemente utilizada), economizando 1 falta de página.`,
    rubricCriteria: [
      {
        id: 'inedita-d05-c1',
        label: 'Item a) Diagrama de Gantt do SJF não preemptivo',
        description: 'Apresenta a sequência exata P1 [0–8], P3 [8–10], P2 [10–14], P4 [14–20] respeitando os tempos de chegada.',
        maxPoints: 2.0,
      },
      {
        id: 'inedita-d05-c2',
        label: 'Item a) Médias de espera e turnaround no SJF',
        description: 'Calcula corretamente tempo médio de espera = 6,5 ms e turnaround médio = 11,5 ms.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d05-c3',
        label: 'Item b) Diagrama de Gantt do Round-Robin (q = 4 ms)',
        description: 'Apresenta a fila e sequência exata P1 [0–4], P2 [4–8], P3 [8–10], P4 [10–14], P1 [14–18], P4 [18–20].',
        maxPoints: 2.0,
      },
      {
        id: 'inedita-d05-c4',
        label: 'Item b) Médias no RR e análise comparativa',
        description: 'Calcula corretamente espera média = 7,5 ms, turnaround médio = 12,5 ms e contrapõe justiça/resposta do RR ao risco de starvation e menor espera do SJF.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d05-c5',
        label: 'Item c) Contagem FIFO (9) vs. LRU (8) e justificativa',
        description: 'Determina 9 faltas no FIFO e 8 no LRU com o traço das substituições e explica o ganho do LRU pela localidade temporal (preservação da página 0).',
        maxPoints: 3.0,
      },
    ],
    studyTips: `1. **Verifique sua conta com a identidade de ouro:** em qualquer escalonador sem ociosidade, sempre vale $\\text{Turnaround médio} = \\text{Espera média} + \\text{Burst médio}$. Aqui $\\text{Burst médio} = (8+4+2+6)/4 = 5,0\\text{ ms}$; logo $6,5 + 5,0 = 11,5$ (SJF) e $7,5 + 5,0 = 12,5$ (RR) — conferência instantânea em 5 segundos!
2. **Atenção aos tempos de chegada:** um erro muito comum no SJF não preemptivo é executar P3 em $t = 0$; lembre-se de que em $t = 0$ apenas P1 está no sistema!
3. **Economize espaço em 15 linhas:** escreva o diagrama de Gantt de forma compacta na linha (ex.: \`P1[0-8] | P3[8-10] | P2[10-14] | P4[14-20]\`) e liste os resultados de cada processo em uma linha resumida antes da média.`,
  },

  // =========================================================================
  // D06 — COMPONENTE ESPECÍFICO (Redes e Segurança — VLSM + Dijkstra + Firewall/IDS/IPS)
  // =========================================================================
  {
    id: 'inedita-d06',
    source: 'inedita',
    year: 2026,
    number: 6,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Projeto de Redes: Sub-redes VLSM/CIDR, Roteamento Dijkstra (OSPF) e Arquitetura Firewall/IDS/IPS',
    difficulty: 'dificil',
    maxLines: 15,
    context: `A equipe de engenharia de redes de uma universidade pública recebeu o bloco IPv4 \`172.20.16.0/22\` para reestruturar a rede de um novo campus contendo três segmentos distintos (incluindo seus respectivos gateways):

- **Setor 1 — Laboratórios de Graduação:** demanda de **400 hosts** válidos;
- **Setor 2 — Administração e Docentes:** demanda de **180 hosts** válidos;
- **Setor 3 — Servidores Web/DNS (DMZ):** demanda de **50 hosts** válidos.

No núcleo de roteamento interno (OSPF) do campus, seis roteadores (\`R1\` a \`R6\`) estão interligados por enlaces bidirecionais cujos custos de enlace são apresentados na tabela abaixo:

| Enlace | R1–R2 | R1–R3 | R2–R3 | R2–R4 | R3–R4 | R3–R5 | R4–R5 | R4–R6 | R5–R6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Custo** | 4 | 2 | 1 | 5 | 8 | 10 | 2 | 6 | 3 |

Além disso, a universidade precisa proteger tanto a **DMZ** (que publica serviços HTTPS/DNS para a Internet) quanto as redes internas (Laboratórios e Administração) contra acessos indevidos e explorações de vulnerabilidades em tempo real.

Com base no cenário apresentado, responda aos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Projete as três sub-redes por VLSM/CIDR a partir de 172.20.16.0/22 (alocando da maior para a menor demanda, sem sobreposição), especificando para cada setor: endereço de rede com prefixo CIDR, faixa de endereços válidos e endereço de broadcast.',
        points: 3.5,
      },
      {
        label: 'b)',
        text: 'Execute o algoritmo de Dijkstra tomando R1 como origem, indicando a ordem de fechamento dos 6 roteadores, o custo mínimo de R1 até cada destino e o caminho ótimo completo de R1 até R6.',
        points: 3.5,
      },
      {
        label: 'c)',
        text: 'Proponha a arquitetura de segurança de perímetro adequada para a DMZ e as redes internas, diferenciando tecnicamente Firewall stateful, IDS e IPS e justificando o posicionamento de cada componente.',
        points: 3.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (Modelo INEP)

**a) Sub-redeamento VLSM/CIDR a partir de \`172.20.16.0/22\` (3,5 pontos):**

O bloco \`172.20.16.0/22\` possui $2^{10} = 1\\,024$ endereços (\`172.20.16.0\` a \`172.20.19.255\`). Alocando em ordem decrescente de demanda (critério $2^h - 2 \\ge \\text{hosts}$):

| Setor | Demanda | Bits de host ($h$) | Rede / Prefixo CIDR | Faixa de IPs Válidos | Broadcast |
| --- | :---: | :---: | :---: | :---: | :---: |
| **1. Laboratórios** | 400 | $9$ ($510$ úteis) | \`172.20.16.0/23\` | \`172.20.16.1\` – \`172.20.17.254\` | \`172.20.17.255\` |
| **2. Administração** | 180 | $8$ ($254$ úteis) | \`172.20.18.0/24\` | \`172.20.18.1\` – \`172.20.18.254\` | \`172.20.18.255\` |
| **3. Servidores/DMZ** | 50 | $6$ ($62$ úteis) | \`172.20.19.0/26\` | \`172.20.19.1\` – \`172.20.19.62\` | \`172.20.19.63\` |

*(Observação: restam livres 192 endereços em \`172.20.19.64\`–\`172.20.19.255\` para crescimento futuro, sem nenhuma sobreposição.)*

---

**b) Algoritmo de Dijkstra a partir de \`R1\` (3,5 pontos):**

Evolução das distâncias mínimas \`d(v)\` e predecessores a cada iteração:
1. Fecha **\`R1\` (custo 0):** atualiza \`R2 = 4 (R1)\`, \`R3 = 2 (R1)\`.
2. Fecha **\`R3\` (custo 2):** melhora \`R2 = min(4, 2+1) = 3 (R3)\`; atualiza \`R4 = 10 (R3)\`, \`R5 = 12 (R3)\`.
3. Fecha **\`R2\` (custo 3):** melhora \`R4 = min(10, 3+5) = 8 (R2)\`.
4. Fecha **\`R4\` (custo 8):** melhora \`R5 = min(12, 8+2) = 10 (R4)\`; atualiza \`R6 = 14 (R4)\`.
5. Fecha **\`R5\` (custo 10):** melhora \`R6 = min(14, 10+3) = 13 (R5)\`.
6. Fecha **\`R6\` (custo 13):** concluído!

- **Ordem de fechamento:** \`R1 (0) -> R3 (2) -> R2 (3) -> R4 (8) -> R5 (10) -> R6 (13)\`.
- **Tabela de custos mínimos a partir de \`R1\`:** \`R1=0\`, \`R2=3\`, \`R3=2\`, \`R4=8\`, \`R5=10\`, \`R6=13\`.
- **Caminho ótimo completo de \`R1\` até \`R6\`:** **\`R1 -> R3 -> R2 -> R4 -> R5 -> R6\`** (custo total = $2 + 1 + 5 + 2 + 3 = \\mathbf{13}$).

---

**c) Arquitetura de Segurança de Perímetro — Firewall *Stateful*, IDS e IPS (3,0 pontos):**

- **Firewall *Stateful* (com 3 zonas — Internet, DMZ e LAN Interna):** Posicionado na borda do campus com política *default-deny*, rastreando o estado das conexões (camadas 3/4 ou NGFW camada 7). Permite conexões externas **somente** para portas estritamente necessárias da DMZ (ex.: TCP/443 HTTPS e UDP/53 DNS) e **bloqueia** conexões iniciadas da Internet ou da própria DMZ em direção às redes internas (contendo movimento lateral caso um servidor público seja invadido).
- **IPS (*Intrusion Prevention System* — em linha / *in-line*):** Posicionado em série no tráfego entre a borda/firewall e a DMZ (e/ou integrado ao NGFW) para realizar inspeção profunda de pacotes (DPI) e **bloquear ativamente em tempo real** tentativas de exploração de vulnerabilidades (ex.: *SQL injection*, *buffer overflow*, varreduras agressivas), exigindo ajuste fino para evitar falsos positivos que prejudiquem a disponibilidade.
- **IDS (*Intrusion Detection System* — fora de linha / *out-of-band*):** Conectado passivamente via espelhamento de portas (*SPAN/TAP*) nos switches do núcleo interno para **detectar e gerar alertas** (integrados a SIEM) sobre anomalias e tráfego suspeito dentro do campus, sem introduzir latência nem risco de bloquear tráfego legítimo por falsos positivos.`,
    rubricCriteria: [
      {
        id: 'inedita-d06-c1',
        label: 'Item a) Sub-rede Laboratórios (400 hosts)',
        description: 'Define corretamente 172.20.16.0/23, faixa útil 172.20.16.1–172.20.17.254 e broadcast 172.20.17.255.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d06-c2',
        label: 'Item a) Sub-rede Administração (180 hosts)',
        description: 'Define corretamente 172.20.18.0/24, faixa útil 172.20.18.1–172.20.18.254 e broadcast 172.20.18.255.',
        maxPoints: 1.0,
      },
      {
        id: 'inedita-d06-c3',
        label: 'Item a) Sub-rede Servidores/DMZ (50 hosts)',
        description: 'Define corretamente 172.20.19.0/26, faixa útil 172.20.19.1–172.20.19.62 e broadcast 172.20.19.63.',
        maxPoints: 1.0,
      },
      {
        id: 'inedita-d06-c4',
        label: 'Item b) Execução do Dijkstra (ordem e custos mínimos)',
        description: 'Indica corretamente a ordem de fechamento (R1, R3, R2, R4, R5, R6) e todos os custos mínimos (0, 2, 3, 8, 10, 13).',
        maxPoints: 2.0,
      },
      {
        id: 'inedita-d06-c5',
        label: 'Item b) Caminho ótimo completo R1 até R6',
        description: 'Apresenta o caminho ótimo completo R1 -> R3 -> R2 -> R4 -> R5 -> R6 com soma de custo igual a 13.',
        maxPoints: 1.5,
      },
      {
        id: 'inedita-d06-c6',
        label: 'Item c) Arquitetura Firewall stateful + DMZ + IDS vs. IPS',
        description: 'Diferencia Firewall stateful (controle de fluxo/isolamento da DMZ), IPS (in-line, bloqueio ativo) e IDS (out-of-band, monitoramento/alerta passivo), justificando o posicionamento de cada um.',
        maxPoints: 3.0,
      },
    ],
    studyTips: `1. **Regra de ouro do VLSM:** sempre ordene as sub-redes **da maior demanda para a menor** antes de fatiar o bloco — isso garante alinhamento natural nos limites binários sem desperdiçar endereços nem gerar sobreposição!
2. **Não confie no "olhômetro" no Dijkstra:** aqui o caminho direto \`R1-R2-R4-R6\` (custo 15) e o caminho \`R1-R3-R2-R4-R6\` (custo 14) parecem menores por terem menos saltos, mas passar por \`R5\` (\`R4-R5-R6\` = 2+3 = 5 < 6) derruba o custo final para **13**. Sempre faça o relaxamento de todos os vizinhos!
3. **Na folha de 15 linhas, seja cirúrgico:** apresente **a)** em 3 linhas tabuladas (1 por sub-rede), **b)** em 4 linhas (ordem, custos e caminho) e **c)** em 6–7 linhas contrastando claramente Firewall/DMZ, IPS (*in-line*) e IDS (*out-of-band*).`,
  },
];
