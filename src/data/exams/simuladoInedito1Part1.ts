import type { ObjectiveQuestion } from '../../types/enade';

export const SIMULADO_INEDITO_1_PART_1: ObjectiveQuestion[] = [
  // =========================================================================
  // FORMAÇÃO GERAL (Q01 a Q09)
  // =========================================================================
  {
    id: 'inedita-1-q01',
    source: 'inedita-1',
    year: 2026,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Transição Energética, Matriz Elétrica e Análise Quantitativa',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `A transição energética para matrizes de baixo carbono constitui um dos pilares do Objetivo de Desenvolvimento Sustentável 7 (Energia Limpa e Acessível) da Agenda 2030 da ONU. Ao analisar a evolução de uma matriz elétrica, especialistas distinguem o crescimento em **valores absolutos** (terawatts-hora gerados) da variação **percentual relativa** e da **participação de cada fonte** na geração total.

A tabela a seguir apresenta a geração anual de energia elétrica (em $\\text{TWh}$) por fonte em um país em processo de descarbonização, nos anos de 2019 e 2024.

| Fonte de Geração | 2019 ($\\text{TWh}$) | 2024 ($\\text{TWh}$) |
| :--- | :---: | :---: |
| Hidrelétrica | 400 | 420 |
| Eólica | 50 | 110 |
| Solar Fotovoltaica | 10 | 70 |
| Termelétrica Fóssil | 140 | 100 |
| **Total Geral** | **600** | **700** |`,
    command: 'Com base exclusivamente nos dados da tabela, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'A geração hidrelétrica ampliou sua participação relativa na matriz elétrica total, passando de $60{,}0\\%$ em 2019 para $66{,}7\\%$ em 2024.',
      },
      {
        letter: 'B',
        text: 'A fonte eólica registrou a maior taxa de crescimento percentual entre todas as fontes analisadas, superando a solar fotovoltaica.',
      },
      {
        letter: 'C',
        text: 'Embora a geração hidrelétrica tenha crescido $5{,}0\\%$ em termos absolutos, sua participação relativa na matriz total diminuiu, enquanto as fontes eólica e solar somadas triplicaram sua geração absoluta.',
      },
      {
        letter: 'D',
        text: 'A redução na geração termelétrica fóssil superou $40\\%$ entre 2019 e 2024, demonstrando a substituição quase integral desse tipo de usina.',
      },
      {
        letter: 'E',
        text: 'A geração elétrica total cresceu $100\\%$ no período observado, impulsionada sobretudo pelo desempenho da fonte hidrelétrica.',
      },
    ],
    correctOption: 'C',
    explanation: `Para resolver questões quantitativas do ENADE sem cair em pegadinhas de confusão entre variação absoluta, variação percentual e participação relativa, calculamos cada indicador a partir da tabela:

1. **Hidrelétrica:**
   - Variação absoluta: $420 - 400 = +20\\text{ TWh}$.
   - Variação percentual: $\\frac{20}{400} \\times 100\\% = +5{,}0\\%$.
   - Participação relativa em 2019: $\\frac{400}{600} \\approx 66{,}67\\%$.
   - Participação relativa em 2024: $\\frac{420}{700} = 60{,}0\\%$.
   - Logo, cresceu $5{,}0\\%$ em volume absoluto, mas **perdeu participação relativa** na matriz (de $66{,}7\\%$ para $60{,}0\\%$).

2. **Eólica vs. Solar Fotovoltaica:**
   - Eólica: $+60\\text{ TWh}$, variação percentual de $\\frac{60}{50} \\times 100\\% = +120{,}0\\%$.
   - Solar: $+60\\text{ TWh}$, variação percentual de $\\frac{60}{10} \\times 100\\% = +600{,}0\\%$.
   - Embora ambas tenham acrescido os mesmos $+60\\text{ TWh}$, a **solar** teve crescimento percentual cinco vezes maior.
   - Somadas (eólica + solar): passaram de $50 + 10 = 60\\text{ TWh}$ em 2019 para $110 + 70 = 180\\text{ TWh}$ em 2024 — ou seja, $\\frac{180}{60} = 3$ (**triplicaram** sua geração absoluta).

3. **Termelétrica Fóssil:**
   - Variação absoluta: $100 - 140 = -40\\text{ TWh}$.
   - Variação percentual: $\\frac{-40}{140} \\times 100\\% \\approx -28{,}57\\%$ (inferior a $40\\%$).

4. **Total Geral:**
   - Variação absoluta: $700 - 600 = +100\\text{ TWh}$.
   - Variação percentual: $\\frac{100}{600} \\times 100\\% \\approx +16{,}67\\%$.

Portanto, a única afirmação rigorosamente correta é a alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Inverte a evolução da participação relativa: a hidrelétrica caiu de $66{,}7\\%$ ($400/600$) para $60{,}0\\%$ ($420/700$).',
      B: 'Incorreta. A eólica cresceu $120\\%$ ($60/50$), enquanto a solar cresceu $600\\%$ ($60/10$), apesar de ambas terem o mesmo ganho absoluto de $+60\\text{ TWh}$.',
      C: 'Correta. A hidrelétrica cresceu $5{,}0\\%$ ($20/400$), reduziu sua fatia de $66{,}7\\%$ para $60{,}0\\%$, e eólica + solar saltaram de $60\\text{ TWh}$ para $180\\text{ TWh}$ (triplicaram).',
      D: 'Incorreta. Confunde a queda absoluta de $40\\text{ TWh}$ com queda percentual; o recuo real foi de $40/140 \\approx 28{,}6\\%$.',
      E: 'Incorreta. Confunde o acréscimo absoluto de $100\\text{ TWh}$ com $100\\%$; o crescimento percentual total foi de $100/600 \\approx 16{,}7\\%$.',
    },
    keyConcept: 'Distinção entre variação absoluta ($\\Delta x$), taxa de variação percentual ($\\Delta x / x_0$) e participação relativa ($x_i / \\sum x_j$) na leitura de tabelas estatísticas.',
  },
  {
    id: 'inedita-1-q02',
    source: 'inedita-1',
    year: 2026,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Inteligência Artificial, Ética Algorítmica e Sustentabilidade de Infraestrutura',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `A rápida difusão de sistemas de inteligência artificial (IA) — tanto modelos preditivos quanto modelos generativos de grande porte — vem remodelando setores como finanças, saúde, recrutamento profissional e desenvolvimento de *software*. Por um lado, estudos de organismos internacionais destacam que algoritmos treinados sobre bases históricas enviesadas podem reproduzir ou amplificar discriminações socioeconômicas, raciais e de gênero quando empregados sem transparência ou supervisão humana qualificada. Por outro lado, relatórios recentes sobre infraestrutura digital alertam para a pegada ambiental crescente dos *data centers* dedicados ao treinamento e à inferência desses modelos, que demandam volumes expressivos de eletricidade e água para arrefecimento.

Com base no texto apresentado, avalie as asserções a seguir e a relação proposta entre elas.

**I.** A utilização de sistemas de inteligência artificial em processos decisórios sensíveis — como triagem de candidatos a emprego e análise de concessão de crédito — requer auditoria de dados, transparência algorítmica e supervisão humana para mitigar a reprodução de desigualdades históricas.

**PORQUE**

**II.** O treinamento de modelos de linguagem de grande porte demanda infraestrutura computacional de alto desempenho em *data centers*, cujo elevado consumo de energia elétrica e de água para resfriamento impõe desafios relevantes à sustentabilidade ambiental.`,
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
    correctOption: 'B',
    explanation: `Em questões do formato asserção-razão, avaliamos primeiro a veracidade isolada de cada proposição e, apenas se ambas forem verdadeiras, verificamos o nexo causal expresso pelo conectivo **PORQUE**:

1. **Asserção I (VERDADEIRA):** Modelos de aprendizado de máquina aprendem padrões estatísticos presentes nos dados históricos. Se esses dados refletem desigualdades estruturais (por exemplo, menor contratação histórica de determinados grupos), o algoritmo pode perpetuar decisões discriminatórias em crédito ou recrutamento. Por isso, governança ética, auditoria e supervisão humana (*human-in-the-loop*) são indispensáveis.
2. **Asserção II (VERDADEIRA):** O treinamento e a operação em larga escala de modelos fundacionais exigem *clusters* de GPUs/TPUs em *data centers*, com significativo impacto sobre o consumo elétrico e hídrico (torres de resfriamento), configurando um desafio real à sustentabilidade ambiental.
3. **Relação de causalidade (INCORRETA):** O elevado consumo de energia e água pelos *data centers* (dimensão ambiental da infraestrutura) **não** é a razão pela qual decisões algorítmicas de crédito e recrutamento exigem auditoria contra vieses discriminatórios (dimensão ética e estatística dos dados). Trata-se de dois problemas reais e contemporâneos da IA, mas independentes quanto à relação de causa e efeito proposta.

Logo, ambas as asserções são verdadeiras, mas a II não justifica a I — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Apesar de I e II serem verdadeiras, o impacto energético/hídrico dos *data centers* não explica nem justifica a necessidade de auditoria contra vieses discriminatórios.',
      B: 'Correta. Ambas as proposições são verdadeiras e respaldadas pelo texto, porém abordam dimensões distintas (ética/equidade algorítmica vs. pegada ambiental da infraestrutura), sem vínculo causal entre si.',
      C: 'Incorreta. A asserção II também é verdadeira e está alinhada ao texto e aos relatórios ambientais sobre infraestrutura de IA.',
      D: 'Incorreta. A asserção I é verdadeira, visto que sistemas automatizados de alto impacto demandam auditoria e supervisão humana.',
      E: 'Incorreta. Nenhuma das duas asserções é falsa.',
    },
    keyConcept: 'Governança ética da IA (mitigação de vieses e supervisão humana) versus sustentabilidade ambiental da infraestrutura computacional — análise de nexo causal em asserção-razão.',
  },
  {
    id: 'inedita-1-q03',
    source: 'inedita-1',
    year: 2026,
    number: 3,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Resíduos Eletroeletrônicos (REEE), Economia Circular e ODS 12',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `O crescimento acelerado do consumo de equipamentos digitais, associado à redução do ciclo de vida útil dos aparelhos e às barreiras técnicas ao reparo, transformou os Resíduos de Equipamentos Eletroeletrônicos (REEE) no fluxo de resíduos sólidos que cresce mais rapidamente no planeta. Segundo relatórios globais da ONU, menos de um quarto desse volume recebe reciclagem formal ambientalmente adequada, resultando simultaneamente na contaminação de ecossistemas por substâncias tóxicas (como chumbo, mercúrio e cádmio) e no desperdício de bilhões de dólares em minerais críticos recuperáveis, como cobre, ouro, cobalto e terras raras. No Brasil, a Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) estabelece a logística reversa e a responsabilidade compartilhada como instrumentos alinhados ao ODS 12 (Consumo e Produção Responsáveis).

Considerando o texto e os princípios da sustentabilidade tecnológica, avalie as afirmações a seguir.

**I.** A logística reversa de equipamentos eletroeletrônicos concretiza o princípio da responsabilidade compartilhada pelo ciclo de vida dos produtos, articulando fabricantes, importadores, distribuidores, comerciantes e consumidores.

**II.** O descarte irregular de placas eletrônicas e baterias em lixões representa apenas uma questão estética e de ocupação de espaço, não oferecendo risco químico relevante ao solo nem aos lençóis freáticos.

**III.** Práticas de economia circular na indústria de tecnologia — como o *ecodesign* modular, o direito ao reparo e o recondicionamento de *hardware* — contribuem para reduzir a pressão extrativa sobre minerais estratégicos.

**IV.** A chamada mineração urbana, voltada à recuperação formal de metais preciosos e terras raras a partir de resíduos eletrônicos reciclados, converge com as metas de produção e consumo sustentáveis da Agenda 2030.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'I, II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada afirmação à luz da PNRS (Lei nº 12.305/2010) e do conceito de economia circular:

- **Afirmação I (VERDADEIRA):** A responsabilidade compartilhada pelo ciclo de vida dos produtos envolve toda a cadeia — fabricantes, importadores, distribuidores, comerciantes, poder público e consumidores — sendo a logística reversa obrigatória para produtos eletroeletrônicos e seus componentes.
- **Afirmação II (FALSA):** Equipamentos eletrônicos e baterias contêm metais pesados e compostos perigosos (chumbo, cádmio, mercúrio, retardantes de chama bromados) que, ao serem lixiviados em lixões ou queimados informalmente, contaminam severamente o solo, o ar e os lençóis freáticos, ameaçando a saúde pública.
- **Afirmação III (VERDADEIRA):** Ao projetar equipamentos modulares fáceis de consertar, atualizar e recondicionar (*ecodesign* e direito ao reparo), prolonga-se a vida útil dos componentes e reduz-se a demanda por mineração primária de recursos finitos.
- **Afirmação IV (VERDADEIRA):** A mineração urbana recupera matérias-primas secundárias de alto valor econômico (ouro, cobre, paládio, terras raras) de REEE em cadeias formais, reduzindo tanto impactos ambientais quanto a geração líquida de rejeitos (ODS 12).

Portanto, estão corretas apenas **I, III e IV** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a afirmação II, que é falsa devido à alta toxicidade dos metais pesados presentes em REEE, e omite III e IV.',
      B: 'Incorreta. Inclui a afirmação II (falsa) e omite I e IV.',
      C: 'Incorreta. Inclui a afirmação II (falsa) e omite III.',
      D: 'Correta. Reúne exatamente as três afirmações corretas (I, III e IV) e descarta II.',
      E: 'Incorreta. Inclui a afirmação II (falsa) e omite I.',
    },
    keyConcept: 'Política Nacional de Resíduos Sólidos (logística reversa e responsabilidade compartilhada), toxicidade de REEE e economia circular / mineração urbana (ODS 12).',
  },
  {
    id: 'inedita-1-q04',
    source: 'inedita-1',
    year: 2026,
    number: 4,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Inclusão Digital, Conectividade Significativa e Acessibilidade Web',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Levantamentos nacionais sobre o uso das tecnologias de informação e comunicação nos domicílios brasileiros indicam que, embora a proporção de pessoas conectadas à internet tenha crescido expressivamente, persiste uma profunda desigualdade na **qualidade do acesso**. Parcela majoritária das famílias de baixa renda acessa a rede exclusivamente por meio do telefone celular, frequentemente sob planos pré-pagos com franquia de dados restrita e modelos de patrocínio de tráfego (*zero-rating*) limitados a poucos aplicativos de mensagens e redes sociais. Tal condição dificulta atividades complexas de estudo, teletrabalho, criação de conteúdo e acesso a serviços públicos digitais. Paralelamente, a Lei Brasileira de Inclusão (Lei nº 13.146/2015) e diretrizes internacionais como as WCAG (*Web Content Accessibility Guidelines*) estabelecem que plataformas digitais devem ser acessíveis a pessoas com deficiência, assegurando compatibilidade com leitores de tela, legendas, contraste adequado e navegação por teclado.`,
    command:
      'Considerando o texto apresentado, assinale a opção que expressa corretamente uma estratégia alinhada à promoção da inclusão digital plena e da acessibilidade.',
    options: [
      {
        letter: 'A',
        text: 'Ampliar a oferta de banda larga fixa de qualidade a preços acessíveis, fomentar o letramento digital crítico e incorporar padrões de acessibilidade (como WCAG) no desenvolvimento de serviços digitais públicos e privados.',
      },
      {
        letter: 'B',
        text: 'Concentrar as políticas de conectividade em planos móveis com acesso gratuito restrito a aplicativos de mensagens (*zero-rating*), pois estes substituem plenamente a banda larga em atividades educacionais e produtivas.',
      },
      {
        letter: 'C',
        text: 'Restringir requisitos de acessibilidade, como textos alternativos e navegação por teclado, exclusivamente a portais governamentais voltados a pessoas com deficiência, dispensando-os em ambientes de ensino e comércio eletrônico.',
      },
      {
        letter: 'D',
        text: 'Avaliar a inclusão digital de um país exclusivamente pela densidade de chips de telefonia móvel ativos por habitante, independentemente da velocidade da conexão, do dispositivo utilizado ou das habilidades digitais da população.',
      },
      {
        letter: 'E',
        text: 'Substituir integralmente o ensino presencial na educação básica por plataformas remotas assíncronas como medida suficiente para eliminar as desigualdades socioeconômicas de aprendizagem.',
      },
    ],
    correctOption: 'A',
    explanation: `O conceito contemporâneo de **conectividade significativa** (adotado por organismos como a UIT/ONU e o CETIC.br) vai muito além de possuir um sinal intermitente de internet: exige conexão rápida e estável, dispositivos adequados às tarefas (não apenas telas pequenas de celular), franquia suficiente e habilidades de letramento digital.

Somado a isso, a acessibilidade digital — prevista no art. 63 da Lei Brasileira de Inclusão (LBI) — é obrigatória em sítios eletrônicos de órgãos públicos e de empresas com sede ou representação no Brasil, abrangendo educação, trabalho, comércio e cidadania, com base nas diretrizes WCAG (perceptível, operável, compreensível e robusto).

A alternativa **A** sintetiza corretamente esses três eixos estruturantes: infraestrutura acessível de qualidade, letramento digital crítico e acessibilidade universal no projeto de sistemas digitais.`,
    optionAnalysis: {
      A: 'Correta. Articula infraestrutura de qualidade (conectividade significativa), letramento digital e adoção universal de padrões de acessibilidade como as WCAG.',
      B: 'Incorreta. O texto aponta justamente que o acesso restrito via celular pré-pago com *zero-rating* limita estudos, produtividade e cidadania plena.',
      C: 'Incorreta. A acessibilidade digital é um direito transversal previsto na LBI para plataformas públicas e privadas, não devendo segregar usuários em portais isolados.',
      D: 'Incorreta. O número bruto de linhas móveis mascara desigualdades de velocidade, franquia, tipo de terminal e competências digitais.',
      E: 'Incorreta. A simples virtualização do ensino em contextos de conectividade desigual tende a aprofundar, e não a eliminar, disparidades educacionais.',
    },
    keyConcept: 'Conectividade significativa (infraestrutura, dispositivo, franquia e letramento digital) e acessibilidade digital universal (LBI e WCAG).',
  },
  {
    id: 'inedita-1-q05',
    source: 'inedita-1',
    year: 2026,
    number: 5,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saúde Pública, Vigilância Epidemiológica e Indicadores Proporcionais',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Na vigilância epidemiológica, a alocação equitativa de recursos hospitalares e de campanhas de controle vetorial entre municípios de portes populacionais distintos não deve se basear apenas no total absoluto de notificações. Dois indicadores fundamentais são a **taxa de incidência** — razão entre o número de casos novos confirmados e a população residente, expressa por $100\\,000$ habitantes — e a **taxa de letalidade** — razão percentual entre o número de óbitos pela doença e o total de casos confirmados.

A tabela a seguir reúne os dados trimestrais fictícios de um surto de arbovirose em cinco municípios de uma mesma região de saúde.

| Município | População Residente | Casos Confirmados | Óbitos |
| :--- | :---: | :---: | :---: |
| Alfa | 500.000 | 2.000 | 4 |
| Beta | 100.000 | 1.200 | 6 |
| Gama | 50.000 | 900 | 9 |
| Delta | 250.000 | 1.500 | 3 |
| Épsilon | 200.000 | 800 | 2 |`,
    command:
      'A partir dos cálculos de incidência e letalidade obtidos com base na tabela, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'O município Alfa apresenta a maior taxa de incidência proporcional à população, por registrar o maior número absoluto de casos confirmados.',
      },
      {
        letter: 'B',
        text: 'Os municípios Alfa e Delta exibem exatamente a mesma taxa de incidência por 100 mil habitantes, diferindo apenas na taxa de letalidade.',
      },
      {
        letter: 'C',
        text: 'O município Beta apresenta taxa de letalidade superior à do município Gama, em virtude de possuir população duas vezes maior.',
      },
      {
        letter: 'D',
        text: 'O município Épsilon registra a menor taxa de letalidade entre todos os cinco municípios analisados.',
      },
      {
        letter: 'E',
        text: 'O município Gama apresenta simultaneamente a maior taxa de incidência ($1\\,800$ casos por $100\\,000$ habitantes) e a maior taxa de letalidade ($1{,}0\\%$) da região, configurando cenário prioritário de intervenção.',
      },
    ],
    correctOption: 'E',
    explanation: `Calculamos ambos os indicadores epidemiológicos para os cinco municípios:

$$\\text{Taxa de Incidência} = \\frac{\\text{Casos Confirmados}}{\\text{População}} \\times 100\\,000 \\qquad \\text{e} \\qquad \\text{Letalidade} = \\frac{\\text{Óbitos}}{\\text{Casos Confirmados}} \\times 100\\%$$

| Município | Incidência (por 100 mil hab.) | Letalidade (%) |
| :--- | :---: | :---: |
| **Alfa** | $\\frac{2000}{500000} \\times 100000 = 400$ | $\\frac{4}{2000} = 0{,}20\\%$ |
| **Beta** | $\\frac{1200}{100000} \\times 100000 = 1200$ | $\\frac{6}{1200} = 0{,}50\\%$ |
| **Gama** | $\\frac{900}{50000} \\times 100000 = 1800$ | $\\frac{9}{900} = 1{,}00\\%$ |
| **Delta** | $\\frac{1500}{250000} \\times 100000 = 600$ | $\\frac{3}{1500} = 0{,}20\\%$ |
| **Épsilon** | $\\frac{800}{200000} \\times 100000 = 400$ | $\\frac{2}{800} = 0{,}25\\%$ |

Observa-se que, embora Alfa tenha o maior número absoluto de casos ($2\\,000$), sua taxa de incidência ($400$ por $100\\,000$ hab.) é a **menor** (empatada com Épsilon). Já o município **Gama** lidera tanto em incidência ($1\\,800$ por $100\\,000$ hab.) quanto em letalidade ($1{,}0\\%$), confirmando a alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Cai na armadilha dos números absolutos: Alfa tem o maior total de casos ($2\\,000$), mas sua incidência ($400/100\\text{ mil}$) é a mais baixa junto com Épsilon.',
      B: 'Incorreta. Alfa tem incidência de $400/100\\text{ mil}$ e Delta tem $600/100\\text{ mil}$ (quem empata com Alfa em incidência é Épsilon); além disso, Alfa e Delta possuem a mesma letalidade ($0{,}20\\%$).',
      C: 'Incorreta. A letalidade de Beta é $6/1200 = 0{,}50\\%$, metade da letalidade de Gama ($9/900 = 1{,}00\\%$).',
      D: 'Incorreta. A letalidade de Épsilon é $2/800 = 0{,}25\\%$, superior à de Alfa e Delta (ambos com $0{,}20\\%$).',
      E: 'Correta. Gama lidera ambos os indicadores proporcionais: incidência de $1\\,800$ casos/100 mil hab. e letalidade de $1{,}0\\%$.',
    },
    keyConcept: 'Diferença entre contagem absoluta, taxa de incidência (normalizada por população) e taxa de letalidade (óbitos sobre casos confirmados) em saúde pública.',
  },
  {
    id: 'inedita-1-q06',
    source: 'inedita-1',
    year: 2026,
    number: 6,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Mobilidade Urbana Sustentável, Direito à Cidade e Segregação Socioespacial',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `Nas regiões metropolitanas brasileiras, o padrão histórico de expansão urbana combinou especulação imobiliária nas áreas centrais, adensamento periférico com baixa oferta de serviços e prioridade de investimentos viários voltados ao automóvel individual. Como consequência, trabalhadores de menor renda enfrentam longos deslocamentos pendulares diários em sistemas de transporte coletivo frequentemente sobrecarregados, enquanto os congestionamentos elevam o consumo de combustíveis fósseis, a poluição atmosférica e as emissões de gases de efeito estufa.

À luz do texto e da Política Nacional de Mobilidade Urbana (Lei nº 12.587/2012), avalie as asserções a seguir e a relação proposta entre elas.

**I.** A priorização de redes integradas de transporte público coletivo, de faixas exclusivas e de infraestrutura segura para a mobilidade ativa (caminhada e bicicleta) promove simultaneamente justiça socioespacial e mitigação climática nas grandes cidades.

**PORQUE**

**II.** Esse modelo amplia o acesso de populações periféricas a empregos, educação e equipamentos públicos com menor consumo energético e menor emissão de gases de efeito estufa por passageiro transportado, reduzindo a dependência estrutural do transporte motorizado individual.`,
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
    explanation: `Analisando ambas as proposições e o nexo lógico entre elas:

1. **Asserção I (VERDADEIRA):** A Política Nacional de Mobilidade Urbana (Lei nº 12.587/2012) estabelece expressamente a prioridade dos modos não motorizados sobre os motorizados e dos serviços de transporte público coletivo sobre o transporte individual motorizado, alinhando o direito à cidade à agenda climática (ODS 11 — Cidades e Comunidades Sustentáveis).
2. **Asserção II (VERDADEIRA):** Um ônibus articulado, VLT ou metrô ocupa fração muito menor do espaço viário e emite substancialmente menos $\\text{CO}_2$ por passageiro-quilômetro do que automóveis individuais, enquanto a integração tarifária e modal encurta o tempo de viagem das periferias aos centros de trabalho e estudo.
3. **Relação causal (CORRETA):** A asserção II explica diretamente *por que* o modelo descrito em I gera os dois benefícios simultâneos mencionados: democratização do acesso urbano (justiça socioespacial) e redução de emissões por passageiro transportado (mitigação climática).

Logo, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Ambas as asserções são verdadeiras e a segunda explica precisamente os mecanismos sociais e ambientais que justificam a primeira.',
      B: 'Incorreta. Há nexo causal direto e explícito entre a eficiência energética/acessibilidade descrita em II e os ganhos socioespaciais e climáticos afirmados em I.',
      C: 'Incorreta. A asserção II é verdadeira, pois o transporte coletivo e ativo apresenta eficiência espacial e ambiental superior por passageiro.',
      D: 'Incorreta. A asserção I é verdadeira e reflete diretamente a diretriz central da Lei nº 12.587/2012 e do ODS 11.',
      E: 'Incorreta. Ambas as proposições são verdadeiras.',
    },
    keyConcept: 'Mobilidade urbana sustentável (ODS 11 e Lei nº 12.587/2012): integração entre justiça socioespacial, transporte coletivo e redução de emissões per capita.',
  },
  {
    id: 'inedita-1-q07',
    source: 'inedita-1',
    year: 2026,
    number: 7,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Desinformação, Sistemas de Recomendação e Cidadania Digital',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Nas plataformas digitais contemporâneas, o fluxo informacional que chega a cada cidadão é mediado por sistemas algorítmicos de recomendação frequentemente otimizados para maximizar tempo de permanência, cliques e reações emocionais. Pesquisas em ciência de dados sociais demonstram que conteúdos falsos, conspiratórios ou fortemente polarizadores costumam gerar engajamento mais intenso e propagação mais veloz do que conteúdos jornalísticos verificados, favorecendo a formação de câmaras de eco que dificultam o diálogo democrático e impactam desde campanhas de vacinação até processos eleitorais.

Sobre o fenômeno da desinformação em redes digitais e a construção da cidadania, avalie as afirmações a seguir.

**I.** A otimização algorítmica centrada exclusivamente em métricas de engajamento pode amplificar conteúdos desinformativos e emocionalmente polarizadores, mesmo quando carecem de respaldo factual.

**II.** O aumento exponencial do volume de dados disponíveis na internet assegura, por si só, a eliminação progressiva da desinformação e o fortalecimento automático do consenso científico.

**III.** Estratégias efetivas de enfrentamento à desinformação combinam transparência e auditabilidade dos sistemas de recomendação, checagem independente de fatos e políticas contínuas de educação midiática e informacional.

**IV.** A responsabilização civil e regulatória de plataformas digitais frente à disseminação coordenada de conteúdos ilícitos é incompatível com a proteção da liberdade de expressão em regimes democráticos.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e IV.' },
      { letter: 'C', text: 'I e III.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** Sistemas de recomendação treinados para maximizar cliques e tempo de tela tendem a impulsionar conteúdos que provocam indignação moral ou medo, características frequentes de peças de desinformação.
- **Afirmação II (FALSA):** Maior volume de informação (infodemia) sem curadoria, verificação e letramento crítico **não** elimina a desinformação; ao contrário, pode dificultar a distinção entre evidências científicas e boatos.
- **Afirmação III (VERDADEIRA):** O consenso internacional (UNESCO, pesquisadores de integridade informacional) aponta para uma resposta multifacetada: transparência algorítmica, acesso a dados para pesquisa independente, *fact-checking* e educação midiática (EMI).
- **Afirmação IV (FALSA):** Em democracias constitucionais, a liberdade de expressão não é absoluta e não ampara ilícitos (como fraudes, discurso de ódio, ataques a crianças ou redes coordenadas de desinformação); marcos regulatórios com devido processo legal e transparência conciliam liberdade de expressão e dever de cuidado das plataformas.

Logo, estão corretas apenas **I e III** — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação II é falsa (excesso de dados não gera consenso científico automático) e III foi omitida.',
      B: 'Incorreta. Tanto II quanto IV são falsas.',
      C: 'Correta. Reúne exatamente as duas afirmações verdadeiras (I e III) e descarta os extremos falsos em II e IV.',
      D: 'Incorreta. Inclui IV, que estabelece uma falsa incompatibilidade entre regulação democrática de plataformas e liberdade de expressão.',
      E: 'Incorreta. Inclui as afirmações falsas II e IV e omite I.',
    },
    keyConcept: 'Arquitetura de recomendação baseada em engajamento, infodemia, educação midiática e equilíbrio democrático entre liberdade de expressão e responsabilização de plataformas.',
  },
  {
    id: 'inedita-1-q08',
    source: 'inedita-1',
    year: 2026,
    number: 8,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Ciência, Tecnologia e Inovação (CT&I), Tríplice Hélice e Soberania Tecnológica',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Economias que sustentam elevados níveis de renda e autonomia estratégica costumam investir de forma estável em Ciência, Tecnologia e Inovação (CT&I), integrando pesquisa científica de longo prazo, formação de recursos humanos altamente qualificados e políticas industriais. No modelo conhecido como **Tríplice Hélice**, a interação cooperativa entre universidades e institutos de pesquisa, setor produtivo e Estado cria ecossistemas de inovação capazes de transformar conhecimento científico em produtos e serviços de alto valor agregado. No Brasil, frentes como bioeconomia sustentável, semicondutores, saúde digital e energias renováveis evidenciam o potencial de associar soberania tecnológica à conservação ambiental e à inclusão social.`,
    command:
      'Com base no texto, assinale a opção correta acerca do papel da Ciência, Tecnologia e Inovação no desenvolvimento nacional.',
    options: [
      {
        letter: 'A',
        text: 'A pesquisa básica realizada em universidades públicas deve ser substituída por projetos estritamente comerciais de curto prazo, visto que não produz impactos tecnológicos relevantes para a indústria.',
      },
      {
        letter: 'B',
        text: 'A articulação contínua entre universidades, setor produtivo e políticas públicas de fomento favorece a transferência de tecnologia, a diversificação produtiva de alto valor agregado e soluções alinhadas à sustentabilidade.',
      },
      {
        letter: 'C',
        text: 'A importação sistemática de pacotes tecnológicos fechados é suficiente para garantir autonomia produtiva e protagonismo nas cadeias globais de semicondutores e *software*.',
      },
      {
        letter: 'D',
        text: 'O aumento dos investimentos em pesquisa e desenvolvimento (P&D) tende a reduzir a competitividade industrial, razão pela qual países tecnologicamente avançados diminuem a parcela do PIB dedicada à ciência.',
      },
      {
        letter: 'E',
        text: 'Projetos inovadores em bioeconomia e transição energética são estruturalmente incompatíveis com a geração de empregos qualificados e com a inserção internacional competitiva.',
      },
    ],
    correctOption: 'B',
    explanation: `O desenvolvimento científico e tecnológico sustentado depende de um ecossistema cooperativo (Tríplice Hélice: Academia–Indústria–Estado) no qual a **pesquisa básica** (geralmente financiada pelo setor público devido ao horizonte de retorno incerto e de longo prazo) cria a base de conhecimento que alimenta a pesquisa aplicada e a inovação empresarial.

- A alternativa **B** traduz fielmente essa articulação estratégica entre formação de capital humano, fomento contínuo, transferência tecnológica e desenvolvimento sustentável.
- As demais alternativas incorrem em falácias clássicas sobre política científica: desvalorização da pesquisa básica (**A**), dependência passiva de tecnologia importada (**C**), inversão da relação positiva entre P&D e produtividade (**D**) e falsa dicotomia entre sustentabilidade e competitividade econômica (**E**).`,
    optionAnalysis: {
      A: 'Incorreta. A pesquisa básica é o alicerce de rupturas tecnológicas de longo prazo (como a própria internet, transistores, algoritmos de IA e vacinas de mRNA).',
      B: 'Correta. Expressa exatamente o modelo da Tríplice Hélice e a convergência entre inovação de alto valor agregado e sustentabilidade socioambiental.',
      C: 'Incorreta. A importação de pacotes fechados perpetua dependência tecnológica externa e impede o domínio de etapas críticas de projeto e propriedade intelectual.',
      D: 'Incorreta. Países líderes em inovação (como Coreia do Sul, Alemanha, EUA e Japão) mantêm altos percentuais do PIB em P&D justamente para elevar produtividade e competitividade.',
      E: 'Incorreta. Bioeconomia de base tecnológica e energias limpas estão entre os setores globais de maior crescimento em empregos qualificados e patentes verdes.',
    },
    keyConcept: 'Ecossistema de CT&I (Tríplice Hélice), complementaridade entre pesquisa básica e aplicada, soberania tecnológica e inovação sustentável.',
  },
  {
    id: 'inedita-1-q09',
    source: 'inedita-1',
    year: 2026,
    number: 9,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Diversidade, Equidade de Gênero e Raça em STEM e Direitos Humanos',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Dados do Censo da Educação Superior (INEP) e relatórios da UNESCO evidenciam que mulheres e pessoas negras permanecem significativamente sub-representadas nas graduações de Engenharia e Computação, bem como em cargos técnicos seniores e de liderança na indústria de tecnologia. Além de constituir uma questão central de equidade e direitos humanos (ODS 5 e ODS 10), pesquisas sobre concepção de sistemas digitais demonstram que a falta de diversidade nas equipes de desenvolvimento amplia pontos cegos de engenharia — exemplificados por taxas de erro desproporcionalmente maiores de algoritmos de reconhecimento facial em rostos de mulheres negras ou por interfaces projetadas sem considerar a pluralidade de usuários.

A respeito da diversidade nas áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM), avalie as afirmações a seguir.

**I.** A baixa representatividade de mulheres e pessoas negras em cursos de Engenharia e Computação relaciona-se a barreiras históricas, estereótipos de gênero e raça e desigualdades socioeducacionais, e não a diferenças biológicas inatas de aptidão cognitiva.

**II.** Equipes homogêneas tendem a identificar com maior precisão as necessidades e os potenciais vieses que afetam grupos sub-representados durante o projeto de algoritmos e produtos digitais.

**III.** Programas de mentoria, ações afirmativas de acesso e permanência estudantil e ambientes organizacionais inclusivos constituem estratégias relevantes para ampliar a equidade nas carreiras tecnológicas.

**IV.** A pluralidade de perspectivas nas equipes de engenharia contribui tanto para a efetivação dos direitos humanos quanto para a qualidade técnica, a robustez e a capacidade inovadora das soluções tecnológicas.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'I, II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada afirmação sobre diversidade e equidade em STEM:

- **Afirmação I (VERDADEIRA):** O consenso científico nas ciências cognitivas, educacionais e sociais demonstra que não existem diferenças biológicas inatas de capacidade para matemática, lógica ou engenharia entre gêneros ou grupos raciais; a sub-representação decorre de fatores socioculturais, estereótipos desde a infância e desigualdades estruturais de acesso à educação de qualidade.
- **Afirmação II (FALSA):** Ocorre exatamente o oposto — equipes homogêneas estão mais suscetíveis a pontos cegos (*blind spots*), como demonstrado em auditorias de reconhecimento facial (ex.: estudo *Gender Shades*, de Buolamwini e Gebru) e testes de usabilidade excludentes.
- **Afirmação III (VERDADEIRA):** Políticas de acesso combinadas a bolsas de permanência, mentoria, visibilidade de referências e combate ao assédio em ambientes acadêmicos e corporativos são medidas reconhecidas para reduzir a evasão e o efeito "cano furado" (*leaky pipeline*).
- **Afirmação IV (VERDADEIRA):** Diversidade é simultaneamente um imperativo ético/de direitos humanos e um fator empírico de melhoria na qualidade, validação de requisitos e inovação de engenharia.

Logo, estão corretas apenas **I, III e IV** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Inclui II, que contradiz frontalmente o texto-base, e omite III e IV.',
      B: 'Incorreta. Inclui II (falsa) e omite I e IV.',
      C: 'Incorreta. Inclui II (falsa) e omite III.',
      D: 'Correta. Seleciona exatamente as proposições verdadeiras (I, III e IV).',
      E: 'Incorreta. Inclui II (falsa) e omite I.',
    },
    keyConcept: 'Equidade de gênero e raça em STEM (ODS 5 e 10): causas socioculturais da sub-representação e impacto positivo da diversidade na redução de vieses de engenharia.',
  },

  // =========================================================================
  // COMPONENTE ESPECÍFICO — PARTE 1 (Q10 a Q19)
  // =========================================================================
  {
    id: 'inedita-1-q10',
    source: 'inedita-1',
    year: 2026,
    number: 10,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Linguagem C: Ponteiros, Aritmética de Ponteiros e Modificação In-Place',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Em programação de sistemas e *firmware* em linguagem C, a manipulação direta de subvetores por meio de aritmética de ponteiros evita cópias desnecessárias em memória, mas exige atenção precisa ao deslocamento de endereços e aos índices locais da função chamada.

Analise o programa em linguagem C apresentado a seguir.

\`\`\`c
#include <stdio.h>

void ajusta(int *p, int n) {
    for (int i = 0; i < n; i++) {
        if (*(p + i) % 2 == 0) {
            *(p + i) = *(p + i) / 2;
        } else {
            *(p + i) = *(p + i) + i;
        }
    }
}

int main(void) {
    int v[5] = {6, 3, 8, 5, 4};
    int *q = v + 1;
    ajusta(q, 3);

    int soma = 0;
    for (int i = 0; i < 5; i++) {
        soma += v[i];
    }

    printf("%d %d %d\\n", v[1], v[3], soma);
    return 0;
}
\`\`\``,
    command: 'Ao compilar e executar o programa acima, qual será a saída impressa na tela?',
    options: [
      { letter: 'A', text: '`4 8 26`' },
      { letter: 'B', text: '`4 5 20`' },
      { letter: 'C', text: '`4 8 21`' },
      { letter: 'D', text: '`3 5 26`' },
      { letter: 'E', text: '`3 7 24`' },
    ],
    correctOption: 'E',
    explanation: `Vamos rastrear a memória passo a passo:

1. **Estado inicial do vetor \`v\`:**
   \`v[0] = 6\`, \`v[1] = 3\`, \`v[2] = 8\`, \`v[3] = 5\`, \`v[4] = 4\`.

2. **Aritmética de ponteiros:**
   \`int *q = v + 1;\` faz \`q\` apontar para \`&v[1]\`.
   Na chamada \`ajusta(q, 3)\`, o ponteiro local \`p\` recebe o endereço de \`v[1]\`, e o laço percorre \`i = 0, 1, 2\` (ou seja, apenas os elementos \`v[1]\`, \`v[2]\` e \`v[3]\`, deixando \`v[0]\` e \`v[4]\` inalterados!).

3. **Execução do laço dentro de \`ajusta(p, 3)\`:**
   - \`i = 0\`: \`*(p + 0)\` acessa \`v[1] = 3\` (ímpar). Executa \`else\`: \`v[1] = 3 + 0 = 3\`. *(Atenção: soma-se o índice local \`i = 0\`, e não o índice global \`1\`!)*
   - \`i = 1\`: \`*(p + 1)\` acessa \`v[2] = 8\` (par). Executa \`if\`: \`v[2] = 8 / 2 = 4\`.
   - \`i = 2\`: \`*(p + 2)\` acessa \`v[3] = 5\` (ímpar). Executa \`else\`: \`v[3] = 5 + 2 = 7\`. *(Novamente, soma-se \`i = 2\`, não \`3\`!)*

4. **Estado final do vetor \`v\`:**
   \`v = {6, 3, 4, 7, 4}\`.

5. **Cálculo da soma e saída:**
   $$\\text{soma} = 6 + 3 + 4 + 7 + 4 = 24$$
   Valores impressos: \`v[1] = 3\`, \`v[3] = 7\`, \`soma = 24\` $\\implies$ **\`3 7 24\`** (alternativa **E**).`,
    optionAnalysis: {
      A: 'Incorreta. Resulta do erro clássico de somar o índice global do vetor `v` ($1$ e $3$) em vez do índice local `i` ($0$ e $2$) na função `ajusta`, gerando `v = {6, 4, 4, 8, 4}` e soma $26$.',
      B: 'Incorreta. Ocorre se ignorarmos o deslocamento `q = v + 1`, aplicando `ajusta` sobre `v[0..2]` (`{3, 4, 4, 5, 4}`, soma $20$).',
      C: 'Incorreta. Resulta de aplicar `ajusta` sobre todos os 5 elementos a partir de `v[0]` (`{3, 4, 4, 8, 2}`, soma $21$).',
      D: 'Incorreta. Supõe erroneamente que o vetor não foi modificado (como se houvesse passagem por valor), mantendo `v = {6, 3, 8, 5, 4}` e soma $26$.',
      E: 'Correta. Reflete exatamente o deslocamento `q = v + 1`, a modificação *in-place* via ponteiro e o uso do índice local `i = 0, 1, 2`, resultando em `v = {6, 3, 4, 7, 4}`.',
    },
    keyConcept: 'Aritmética de ponteiros em C (`*(p + i)` equivalente a `p[i]`), passagem de endereço para modificação *in-place* e distinção entre índice local e índice global.',
  },
  {
    id: 'inedita-1-q11',
    source: 'inedita-1',
    year: 2026,
    number: 11,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Circuitos CC: Teorema de Thévenin e Máxima Transferência de Potência',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `No projeto de um estágio de saída analógico em corrente contínua (CC), um circuito resistivo linear alimentado por uma fonte de tensão ideal $V_s = 24\\text{ V}$ aciona uma carga resistiva ajustável $R_L$ conectada entre os terminais **A** e **B**, conforme o diagrama esquemático abaixo, com $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$ e $R_3 = 4\\,\\Omega$.

\`\`\`text
           R1 = 6 Ω             R3 = 4 Ω
   +-------/\\/\\/\\-------+-------/\\/\\/\\-------o A
   |                    |
  (+)                   \\
 Vs = 24 V              / R2 = 12 Ω         [ R_L ]
  (-)                   \\
   |                    |
   +--------------------+--------------------o B
\`\`\``,
    command:
      'Para obter o equivalente de Thévenin visto pelos terminais A e B e dimensionar $R_L$ de modo a maximizar a potência transferida para a carga, quais são, respectivamente, a tensão de Thévenin $V_{\\text{th}}$, a resistência de Thévenin $R_{\\text{th}}$ e a potência máxima $P_{\\max}$ dissipada em $R_L$?',
    options: [
      {
        letter: 'A',
        text: '$V_{\\text{th}} = 16\\text{ V}$, $R_{\\text{th}} = 8\\,\\Omega$ e $P_{\\max} = 8{,}0\\text{ W}$.',
      },
      {
        letter: 'B',
        text: '$V_{\\text{th}} = 16\\text{ V}$, $R_{\\text{th}} = 8\\,\\Omega$ e $P_{\\max} = 32{,}0\\text{ W}$.',
      },
      {
        letter: 'C',
        text: '$V_{\\text{th}} = 8\\text{ V}$, $R_{\\text{th}} = 8\\,\\Omega$ e $P_{\\max} = 2{,}0\\text{ W}$.',
      },
      {
        letter: 'D',
        text: '$V_{\\text{th}} = 16\\text{ V}$, $R_{\\text{th}} = 4\\,\\Omega$ e $P_{\\max} = 16{,}0\\text{ W}$.',
      },
      {
        letter: 'E',
        text: '$V_{\\text{th}} = 12\\text{ V}$, $R_{\\text{th}} = 22\\,\\Omega$ e $P_{\\max} = 1{,}64\\text{ W}$.',
      },
    ],
    correctOption: 'A',
    explanation: `**Passo 1 — Tensão de Thévenin ($V_{\\text{th}}$ em circuito aberto entre A e B):**
Removendo $R_L$, a corrente em $R_3 = 4\\,\\Omega$ é nula ($I_{R_3} = 0\\text{ A}$), portanto não há queda de tensão em $R_3$. Assim, $V_{\\text{th}}$ coincide com a tensão sobre $R_2$, obtida por divisor de tensão entre $R_1$ e $R_2$:

$$V_{\\text{th}} = V_s \\cdot \\frac{R_2}{R_1 + R_2} = 24 \\cdot \\frac{12}{6 + 12} = 24 \\cdot \\frac{12}{18} = 16\\text{ V}$$

**Passo 2 — Resistência de Thévenin ($R_{\\text{th}}$):**
Desativando a fonte independente de tensão $V_s$ (substituindo-a por um **curto-circuito**), $R_1$ e $R_2$ ficam em paralelo, e essa associação fica em série com $R_3$:

$$R_1 \\parallel R_2 = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$$

$$R_{\\text{th}} = (R_1 \\parallel R_2) + R_3 = 4 + 4 = 8\\,\\Omega$$

**Passo 3 — Teorema da Máxima Transferência de Potência:**
A transferência máxima de potência para uma carga puramente resistiva ocorre quando $R_L = R_{\\text{th}} = 8\\,\\Omega$. Nessa condição, a corrente na malha equivalente é $I_L = \\frac{V_{\\text{th}}}{R_{\\text{th}} + R_L} = \\frac{16}{8 + 8} = 1{,}0\\text{ A}$, e a potência dissipada em $R_L$ é:

$$P_{\\max} = \\frac{V_{\\text{th}}^2}{4 R_{\\text{th}}} = \\frac{16^2}{4 \\times 8} = \\frac{256}{32} = 8{,}0\\text{ W}$$

(Conferência direta: $P_{\\max} = R_L I_L^2 = 8 \\times 1^2 = 8{,}0\\text{ W}$.)

Portanto, a resposta correta é a alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Todos os três valores ($V_{\\text{th}} = 16\\text{ V}$, $R_{\\text{th}} = 8\\,\\Omega$ e $P_{\\max} = 8{,}0\\text{ W}$) decorrem rigorosamente da análise de Thévenin e do casamento de carga $R_L = R_{\\text{th}}$.',
      B: 'Incorreta. Calcula $V_{\\text{th}}$ e $R_{\\text{th}}$ corretamente, mas esquece o fator $4$ no denominador de $P_{\\max} = V_{\\text{th}}^2 / (4 R_{\\text{th}})$, usando erroneamente $V_{\\text{th}}^2 / R_{\\text{th}} = 32\\text{ W}$.',
      C: 'Incorreta. Aplica o divisor de tensão sobre $R_1$ em vez de $R_2$, obtendo $V_{\\text{th}} = 24 \\times 6/18 = 8\\text{ V}$.',
      D: 'Incorreta. Esquece de somar $R_3 = 4\\,\\Omega$ em série ao paralelo $R_1 \\parallel R_2 = 4\\,\\Omega$ ao calcular $R_{\\text{th}}$.',
      E: 'Incorreta. Soma todos os resistores em série ($6 + 12 + 4 = 22\\,\\Omega$) em vez de curto-circuitar $V_s$ e colocar $R_1 \\parallel R_2$.',
    },
    keyConcept: 'Equivalente de Thévenin (tensão de circuito aberto e resistência com fontes independentes zeradas) e Máxima Transferência de Potência ($R_L = R_{\\text{th}}$ e $P_{\\max} = V_{\\text{th}}^2 / (4R_{\\text{th}})$).',
  },
  {
    id: 'inedita-1-q12',
    source: 'inedita-1',
    year: 2026,
    number: 12,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Simplificação Booleana via Mapa de Karnaugh com Condições Don\'t Care',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `No projeto de um bloco lógico combinacional de 4 entradas ($A, B, C, D$, sendo $A$ o bit mais significativo e $D$ o menos significativo), a especificação determina que a saída $F(A, B, C, D)$ deve assumir nível lógico \`1\` para os mintermos $\\sum m(0, 2, 5, 7, 8, 10)$ e possui condições irrelevantes (*don't care*) nos mintermos $\\sum d(13, 15)$, correspondentes a combinações de entrada que nunca ocorrem em operação normal.

O Mapa de Karnaugh correspondente (com linhas indexadas por $AB$ e colunas por $CD$ em código Gray) é apresentado a seguir:

| $AB \\setminus CD$ | \`00\` | \`01\` | \`11\` | \`10\` |
| :---: | :---: | :---: | :---: | :---: |
| **\`00\`** | **1** | 0 | 0 | **1** |
| **\`01\`** | 0 | **1** | **1** | 0 |
| **\`11\`** | 0 | **X** | **X** | 0 |
| **\`10\`** | **1** | 0 | 0 | **1** |`,
    command:
      'Utilizando as condições *don\'t care* de maneira ótima, qual é a expressão booleana mínima na forma Soma de Produtos (SOP) para $F(A, B, C, D)$?',
    options: [
      { letter: 'A', text: '$F = \\bar{B}\\bar{D} + \\bar{A}BD$' },
      { letter: 'B', text: '$F = \\bar{A}\\bar{B}\\bar{D} + BD$' },
      { letter: 'C', text: '$F = \\bar{B}D + B\\bar{D}$' },
      { letter: 'D', text: '$F = \\bar{B}\\bar{D} + BD$' },
      { letter: 'E', text: '$F = \\bar{B}\\bar{C}\\bar{D} + BCD$' },
    ],
    correctOption: 'D',
    explanation: `Para minimizar $F(A, B, C, D)$ na forma Soma de Produtos (SOP), buscamos os maiores agrupamentos de potências de 2 ($8, 4, 2, 1$) que cubram todos os \`1\`s, podendo incluir os \`X\` (*don't care*) sempre que aumentarem o tamanho de um agrupamento:

1. **Agrupamento dos 4 cantos (quadra $\\{m_0, m_2, m_8, m_{10}\\}$):**
   Devido à adjacência cíclica (topologia toroidal) do Mapa de Karnaugh, as células dos quatro cantos são mutuamente adjacentes:
   - $m_0 = 0000$, $m_2 = 0010$, $m_8 = 1000$, $m_{10} = 1010$.
   - Variáveis que mudam: $A$ ($0 \\to 1$) e $C$ ($0 \\to 1$) são eliminadas.
   - Variáveis constantes: $B = 0$ ($\\bar{B}$) e $D = 0$ ($\\bar{D}$).
   - Termo produto resultante: **$\\bar{B}\\bar{D}$**.

2. **Agrupamento central utilizando os don't cares (quadra $\\{m_5, m_7, d_{13}, d_{15}\\}$):**
   - $m_5 = 0101$, $m_7 = 0111$, $d_{13} = 1101$, $d_{15} = 1111$.
   - Ao incorporar $d_{13}$ e $d_{15}$ como \`1\`, o par $\\{m_5, m_7\\}$ (que daria $\\bar{A}BD$) expande-se para uma **quadra**, eliminando a variável $A$!
   - Variáveis constantes: $B = 1$ ($B$) e $D = 1$ ($D$).
   - Termo produto resultante: **$BD$**.

3. **Expressão mínima final:**
   $$F(A, B, C, D) = \\bar{B}\\bar{D} + BD$$
   *(Curiosidade de projeto: essa função equivale a uma única porta XNOR entre $B$ e $D$, independendo totalmente de $A$ e $C$!)*

Logo, a resposta correta é a alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Falha em aproveitar as condições *don\'t care* ($d_{13}$ e $d_{15}$), deixando o segundo termo não simplificado como $\\bar{A}BD$ em vez de $BD$.',
      B: 'Incorreta. Falha em reconhecer a adjacência cíclica entre a primeira e a última linha ($AB = 00$ e $AB = 10$), mantendo $\\bar{A}$ no primeiro termo.',
      C: 'Incorreta. Representa a função XOR ($B \\oplus D$), que gera `1` justamente onde o mapa vale `0` (complemento da função pedida).',
      D: 'Correta. Explora tanto a quadra dos quatro cantos ($\\bar{B}\\bar{D}$) quanto a quadra com *don\'t cares* ($BD$), resultando na SOP mínima com apenas 4 literais.',
      E: 'Incorreta. Agrupa apenas pares em vez de quadras, mantendo indevidamente os literais $\\bar{C}$ e $C$ e deixando mintermos sem cobertura.',
    },
    keyConcept: 'Mapa de Karnaugh de 4 variáveis: adjacência cíclica de bordas/cantos e uso ótimo de condições *don\'t care* para maximizar agrupamentos.',
  },
  {
    id: 'inedita-1-q13',
    source: 'inedita-1',
    year: 2026,
    number: 13,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Sistemas Embarcados: Manipulação de Registradores Bit a Bit em C',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Em microcontroladores de 8 bits, periféricos internos como temporizadores e módulos PWM são configurados por meio de registradores mapeados em memória. Considere o registrador \`CTRL_REG\` (tipo \`uint8_t\`), cujo mapeamento de bits (do bit 7 — MSB — ao bit 0 — LSB) está definido abaixo:

| Bit 7 | Bits 6..4 | Bit 3 | Bits 2..0 |
| :---: | :---: | :---: | :---: |
| \`EN\` (Habilita PWM) | \`PRESC[2:0]\` (Pré-escala) | \`POL\` (Polaridade) | \`MODE[2:0]\` (Modo) |

Suponha que, em um dado instante de execução, \`CTRL_REG\` contenha o valor hexadecimal \`0x5A\` (em binário: \`0101 1010\`). Um engenheiro de *firmware* deve aplicar **três operações seguras em linguagem C**, preservando intactos todos os demais bits do registrador:

1. **Ligar (setar em \`1\`)** o bit 7 (\`EN\`);
2. **Desligar (zerar em \`0\`)** o bit 3 (\`POL\`);
3. **Inverter (toggle)** o estado atual do bit 1 (sem alterar os bits 2 e 0).`,
    command:
      'Assinale a opção que apresenta a sequência correta de instruções bit a bit em C e o valor hexadecimal final armazenado em `CTRL_REG`.',
    options: [
      {
        letter: 'A',
        text: '`CTRL_REG |= (1 << 7); CTRL_REG &= (1 << 3); CTRL_REG ^= (1 << 1);` — valor final `0x02`.',
      },
      {
        letter: 'B',
        text: '`CTRL_REG |= (1 << 7); CTRL_REG &= ~(1 << 3); CTRL_REG ^= (1 << 1);` — valor final `0xD0`.',
      },
      {
        letter: 'C',
        text: '`CTRL_REG |= (1 << 7); CTRL_REG &= ~(1 << 3); CTRL_REG ^= (1 << 1);` — valor final `0xD2`.',
      },
      {
        letter: 'D',
        text: '`CTRL_REG &= (1 << 7); CTRL_REG |= ~(1 << 3); CTRL_REG ^= (1 << 1);` — valor final `0xD0`.',
      },
      {
        letter: 'E',
        text: '`CTRL_REG |= (1 << 7); CTRL_REG ^= (1 << 3); CTRL_REG |= (1 << 1);` — valor final `0xD2`.',
      },
    ],
    correctOption: 'B',
    explanation: `Em *firmware* embarcado em C, as três primitivas canônicas de manipulação segura de um bit de posição $k$ sem afetar os demais são:
- **Set (ligar bit $k$):** \`REG |= (1 << k);\`
- **Clear (zerar bit $k$):** \`REG &= ~(1 << k);\`
- **Toggle (inverter bit $k$):** \`REG ^= (1 << k);\`

Aplicando passo a passo sobre \`CTRL_REG = 0x5A = 0101 1010\` (bits 7..0):

1. **Set bit 7:** \`CTRL_REG |= (1 << 7);\` (máscara \`1000 0000 = 0x80\`)
   \`0101 1010 | 1000 0000 = 1101 1010\` (\`0xDA\`).
2. **Clear bit 3:** \`CTRL_REG &= ~(1 << 3);\` (máscara \`~0000 1000 = 1111 0111 = 0xF7\`)
   \`1101 1010 & 1111 0111 = 1101 0010\` (\`0xD2\`).
3. **Toggle bit 1:** \`CTRL_REG ^= (1 << 1);\` (máscara \`0000 0010 = 0x02\`)
   Como o bit 1 valia \`1\`, o XOR o inverte para \`0\`:
   \`1101 0010 ^ 0000 0010 = 1101 0000\`.

Convertendo \`1101 0000\` para hexadecimal:
- *Nibble* superior \`1101\` $= 8 + 4 + 0 + 1 = 13_{10} =$ **\`D\`**.
- *Nibble* inferior \`0000\` $= 0_{10} =$ **\`0\`**.
- Resultado final: **\`0xD0\`** (alternativa **B**).`,
    optionAnalysis: {
      A: 'Incorreta. Esquece o operador de negação bit a bit `~` no *clear* (`&= (1 << 3)`), o que zera todos os bits exceto o bit 3, destruindo a configuração do registrador.',
      B: 'Correta. Emprega exatamente as três máscaras seguras (`|=`, `&= ~` e `^=`) e calcula corretamente o resultado binário `1101 0000 = 0xD0`.',
      C: 'Incorreta. Apesar de o código C estar correto, erra a conta final ao esquecer que o bit 1 inicialmente era `1` e foi invertido para `0` (`0xD2` seria o valor antes do *toggle*).',
      D: 'Incorreta. Troca os operadores `|=` e `&=`, corrompendo todos os demais bits do registrador.',
      E: 'Incorreta. Usa `^=` no bit 3 (o que inverteria em vez de garantir `0`) e `|=` no bit 1 (o que força `1` em vez de inverter, gerando `0xD2`).',
    },
    keyConcept: 'Idiomas de manipulação de bits em C para registradores de microcontroladores: *set* (`|=`), *clear* (`&= ~`) e *toggle* (`^=`) com deslocamento `(1 << k)`.',
  },
  {
    id: 'inedita-1-q14',
    source: 'inedita-1',
    year: 2026,
    number: 14,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Escalonamento de CPU: Algoritmo SRTF Preemptivo, Espera e Turnaround',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Um sistema operacional monoprocessador adota a política de escalonamento **SRTF** (*Shortest Remaining Time First* — versão preemptiva do SJF), desprezando o tempo de troca de contexto. Em caso de empate no tempo restante de CPU, prioriza-se o processo que chegou mais cedo à fila de prontos.

A tabela a seguir especifica o instante de chegada e o tempo total de surto (*burst*) de CPU de quatro processos:

| Processo | Tempo de Chegada (ms) | Tempo de Surto de CPU (ms) |
| :---: | :---: | :---: |
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 2 |
| P4 | 4 | 1 |`,
    command:
      'Considerando a execução segundo o algoritmo SRTF, quais são, respectivamente, o **tempo médio de espera** e o **tempo médio de retorno** (*turnaround*) desse conjunto de processos?',
    options: [
      { letter: 'A', text: '$5{,}25\\text{ ms}$ e $9{,}00\\text{ ms}$.' },
      { letter: 'B', text: '$6{,}75\\text{ ms}$ e $10{,}50\\text{ ms}$.' },
      { letter: 'C', text: '$2{,}50\\text{ ms}$ e $6{,}25\\text{ ms}$.' },
      { letter: 'D', text: '$4{,}25\\text{ ms}$ e $8{,}00\\text{ ms}$.' },
      { letter: 'E', text: '$2{,}50\\text{ ms}$ e $3{,}75\\text{ ms}$.' },
    ],
    correctOption: 'C',
    explanation: `**Passo 1 — Construção do Diagrama de Gantt (SRTF preemptivo):**

- $t = 0$: apenas **P1** (restante $= 8$) está pronto $\\implies$ executa P1 de $0$ a $1$.
- $t = 1$: P1 (restante $= 7$), chega **P2** (restante $= 4$). Como $4 < 7$, P2 preempta P1 e executa de $1$ a $2$.
- $t = 2$: P1 ($7$), P2 ($3$), chega **P3** ($2$). Como $2 < 3$, P3 preempta P2 e executa de $2$ a $4$ (**P3 conclui em $t = 4$**).
- $t = 4$: P1 ($7$), P2 ($3$), chega **P4** ($1$). Como $1 < 3$, **P4** executa de $4$ a $5$ (**P4 conclui em $t = 5$**).
- $t = 5$: P1 ($7$), P2 ($3$). **P2** retoma e executa de $5$ a $8$ (**P2 conclui em $t = 8$**).
- $t = 8$: apenas **P1** ($7$) restante. Executa de $8$ a $15$ (**P1 conclui em $t = 15$**).

\`\`\`text
Tempo:  0   1   2       4   5           8                   15
       | P1| P2|  P3   | P4|    P2     |        P1         |
\`\`\`

**Passo 2 — Cálculo de Turnaround ($T_i = C_i - A_i$) e Espera ($W_i = T_i - B_i$):**

| Processo | Chegada ($A_i$) | Surto ($B_i$) | Término ($C_i$) | *Turnaround* ($T_i$) | Espera ($W_i$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| P1 | 0 | 8 | 15 | $15 - 0 = 15$ | $15 - 8 = 7$ |
| P2 | 1 | 4 | 8 | $8 - 1 = 7$ | $7 - 4 = 3$ |
| P3 | 2 | 2 | 4 | $4 - 2 = 2$ | $2 - 2 = 0$ |
| P4 | 4 | 1 | 5 | $5 - 4 = 1$ | $1 - 1 = 0$ |

**Passo 3 — Médias:**

$$\\overline{W} = \\frac{7 + 3 + 0 + 0}{4} = \\frac{10}{4} = 2{,}50\\text{ ms}$$

$$\\overline{T} = \\frac{15 + 7 + 2 + 1}{4} = \\frac{25}{4} = 6{,}25\\text{ ms}$$

*(Verificação rápida: $\\overline{T} - \\overline{W} = 6{,}25 - 2{,}50 = 3{,}75\\text{ ms}$, igual ao surto médio $(8+4+2+1)/4 = 3{,}75\\text{ ms}$.)*

Logo, a resposta correta é a alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Corresponde aos valores do **SJF não preemptivo** (em que P1 roda integralmente de 0 a 8 antes de liberar a CPU), pegadinha clássica quando se ignora a preempção do SRTF.',
      B: 'Incorreta. Corresponde aos valores do algoritmo **FCFS** (ordem de chegada P1, P2, P3, P4).',
      C: 'Correta. Tempo médio de espera $= 2{,}50\\text{ ms}$ e tempo médio de retorno $= 6{,}25\\text{ ms}$ sob SRTF preemptivo.',
      D: 'Incorreta. Esquece de subtrair o tempo de chegada $A_i$ no cálculo de *turnaround* (usando $C_i$ médio $= 32/4 = 8{,}00\\text{ ms}$ e $C_i - B_i$ médio $= 4{,}25\\text{ ms}$).',
      E: 'Incorreta. Confunde o tempo médio de *turnaround* ($6{,}25\\text{ ms}$) com o tempo médio de surto de CPU ($3{,}75\\text{ ms}$).',
    },
    keyConcept: 'Escalonamento SRTF (SJF preemptivo): preempção na chegada de processo com menor tempo restante, $T_i = C_i - A_i$ e $W_i = T_i - B_i$.',
  },
  {
    id: 'inedita-1-q15',
    source: 'inedita-1',
    year: 2026,
    number: 15,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Endereçamento IPv4, Notação CIDR e Sub-redes de Tamanho Variável (VLSM)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um engenheiro de redes recebeu o bloco de endereços IPv4 \`192.168.40.0/22\` para estruturar três sub-redes disjuntas (sem sobreposição) destinadas a laboratórios de um *campus* universitário. Adotando a técnica VLSM (*Variable Length Subnet Mask*), o projeto exige minimizar o desperdício de endereços e alocar as sub-redes de maneira contígua a partir do início do bloco, sempre da maior demanda para a menor:

- **Laboratório A:** necessidade de **200 hosts** válidos;
- **Laboratório B:** necessidade de **110 hosts** válidos;
- **Laboratório C:** necessidade de **50 hosts** válidos.`,
    command:
      'Assinale a opção que indica corretamente os prefixos CIDR alocados aos Laboratórios A, B e C, bem como o endereço de *broadcast* do Laboratório C.',
    options: [
      {
        letter: 'A',
        text: '`192.168.40.0/24`, `192.168.41.0/25`, `192.168.41.128/26` e *broadcast* `192.168.41.191`.',
      },
      {
        letter: 'B',
        text: '`192.168.40.0/24`, `192.168.41.0/25`, `192.168.41.128/26` e *broadcast* `192.168.41.192`.',
      },
      {
        letter: 'C',
        text: '`192.168.40.0/24`, `192.168.41.0/26`, `192.168.41.64/27` e *broadcast* `192.168.41.95`.',
      },
      {
        letter: 'D',
        text: '`192.168.40.0/25`, `192.168.40.128/25`, `192.168.41.0/26` e *broadcast* `192.168.41.63`.',
      },
      {
        letter: 'E',
        text: '`192.168.40.0/24`, `192.168.41.0/25`, `192.168.41.128/25` e *broadcast* `192.168.41.255`.',
      },
    ],
    correctOption: 'A',
    explanation: `O bloco original \`192.168.40.0/22\` abrange os endereços de \`192.168.40.0\` até \`192.168.43.255\` ($2^{10} = 1024$ endereços). Para cada sub-rede, devemos escolher o menor número de bits de *host* $h$ tal que $2^h - 2 \\ge \\text{demanda}$ (descontando o endereço de rede e o de *broadcast*):

1. **Laboratório A (200 hosts):**
   - $2^7 - 2 = 126 < 200$ (insuficiente); $2^8 - 2 = 254 \\ge 200 \\implies h = 8$, prefixo \`/24\` ($32 - 8 = 24$), bloco de $256$ IPs.
   - Sub-rede: **\`192.168.40.0/24\`** (faixa \`192.168.40.0\` a \`192.168.40.255\`).

2. **Laboratório B (110 hosts):**
   - $2^6 - 2 = 62 < 110$ (insuficiente); $2^7 - 2 = 126 \\ge 110 \\implies h = 7$, prefixo \`/25\`, bloco de $128$ IPs.
   - Iniciando imediatamente após \`.40.255\`: **\`192.168.41.0/25\`** (faixa \`192.168.41.0\` a \`192.168.41.127\`).

3. **Laboratório C (50 hosts):**
   - $2^5 - 2 = 30 < 50$ (insuficiente); $2^6 - 2 = 62 \\ge 50 \\implies h = 6$, prefixo \`/26\`, bloco de $64$ IPs.
   - Iniciando imediatamente após \`.41.127\`: **\`192.168.41.128/26\`**.
   - Faixa de endereços: de \`192.168.41.128\` (rede) até $128 + 64 - 1 = 191 \\implies$ *broadcast* em **\`192.168.41.191\`** (hosts válidos de \`.129\` a \`.190\`).

Logo, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Todos os prefixos atendem às demandas com desperdício mínimo, sem sobreposição, e o último endereço do bloco `128..191` é `192.168.41.191`.',
      B: 'Incorreta. Erro clássico de *off-by-one*: soma $128 + 64 = 192$, porém `192.168.41.192` já é o endereço da próxima sub-rede, não o *broadcast* do Laboratório C.',
      C: 'Incorreta. Um `/26` comporta apenas $62$ hosts (insuficiente para 110) e um `/27` comporta apenas $30$ hosts (insuficiente para 50).',
      D: 'Incorreta. Um `/25` comporta apenas $126$ hosts válidos, não atendendo aos 200 hosts do Laboratório A.',
      E: 'Incorreta. Aloca um `/25` ($126$ hosts) para o Laboratório C, violando a exigência de minimizar o desperdício quando um `/26` ($62$ hosts) já satisfaz os 50 hosts.',
    },
    keyConcept: 'Sub-redeamento VLSM/CIDR: regra dos hosts válidos $2^h - 2 \\ge H$, prefixo $/ (32 - h)$ e cálculo exato de endereço de rede e *broadcast* ($\\text{rede} + 2^h - 1$).',
  },
  {
    id: 'inedita-1-q16',
    source: 'inedita-1',
    year: 2026,
    number: 16,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Análise de Complexidade Assintótica, Recorrências e Teorema Mestre',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `No desenvolvimento de uma biblioteca de processamento numérico baseada em divisão e conquista, dois algoritmos recursivos (**Algoritmo X** e **Algoritmo Y**) para entradas de tamanho $n$ (com $T(1) = \\Theta(1)$) têm seus custos no pior caso descritos pelas seguintes relações de recorrência:

$$T_X(n) = 4\\,T_X\\!\\left(\\frac{n}{2}\\right) + n^2 \\log_2 n$$

$$T_Y(n) = 3\\,T_Y\\!\\left(\\frac{n}{2}\\right) + n$$`,
    command:
      'Aplicando o Teorema Mestre (ou o método da árvore de recursão), quais são as complexidades assintóticas justas de $T_X(n)$ e $T_Y(n)$, respectivamente?',
    options: [
      { letter: 'A', text: '$T_X(n) = \\Theta(n^2 \\log n)$ e $T_Y(n) = \\Theta(n \\log n)$.' },
      { letter: 'B', text: '$T_X(n) = \\Theta(n^2 \\log^2 n)$ e $T_Y(n) = \\Theta(n^{\\log_2 3})$.' },
      { letter: 'C', text: '$T_X(n) = \\Theta(n^2 \\log n)$ e $T_Y(n) = \\Theta(n^{\\log_2 3})$.' },
      { letter: 'D', text: '$T_X(n) = \\Theta(n^2)$ e $T_Y(n) = \\Theta(n^2)$.' },
      { letter: 'E', text: '$T_X(n) = \\Theta(n^2 \\log^2 n)$ e $T_Y(n) = \\Theta(n \\log_2 3)$.' },
    ],
    correctOption: 'B',
    explanation: `Analisamos cada recorrência na forma $T(n) = a\\,T(n/b) + f(n)$:

**1. Algoritmo X:** $T_X(n) = 4\\,T_X(n/2) + n^2 \\log_2 n$
- Temos $a = 4$, $b = 2 \\implies n^{\\log_b a} = n^{\\log_2 4} = n^2$.
- **Atenção à pegadinha clássica:** $f(n) = n^2 \\log_2 n$ **não** se enquadra no Caso 3 do Teorema Mestre, porque a razão $\\frac{f(n)}{n^2} = \\log_2 n$ cresce mais devagar do que qualquer potência $n^{\\varepsilon}$ (com $\\varepsilon > 0$) — logo, $f(n)$ não é *polinomialmente* maior do que $n^{\\log_b a}$.
- Ela recai na **extensão do Caso 2 do Teorema Mestre**: se $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ para $k \\ge 0$, então $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.
- Com $k = 1$, obtemos:
  $$T_X(n) = \\Theta(n^2 \\log^2 n)$$
- *Conferência por árvore de recursão (para $n = 2^m$):* no nível $i$ ($0 \\le i < m$), há $4^i$ subproblemas de tamanho $n/2^i$, somando custo $4^i \\cdot (n/2^i)^2 \\log_2(n/2^i) = n^2 (m - i)$. Somando todos os níveis:
  $$n^2 \\sum_{j=1}^{m} j = n^2 \\cdot \\frac{m(m+1)}{2} = \\Theta(n^2 m^2) = \\Theta(n^2 \\log^2 n)$$

**2. Algoritmo Y:** $T_Y(n) = 3\\,T_Y(n/2) + n$
- Temos $a = 3$, $b = 2 \\implies n^{\\log_b a} = n^{\\log_2 3} \\approx n^{1{,}585}$.
- Como $f(n) = n = O(n^{\\log_2 3 - \\varepsilon})$ (por exemplo, $\\varepsilon = 0{,}5$), aplica-se o **Caso 1 do Teorema Mestre** (custo dominado pelas folhas):
  $$T_Y(n) = \\Theta(n^{\\log_2 3})$$

Logo, a resposta correta é a alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Erra ambas: aplica indevidamente o Caso 3 em $T_X$ e trata $T_Y$ como se fosse $2T(n/2)+n$.',
      B: 'Correta. Aplica a extensão do Caso 2 ($k=1$) para $T_X(n) = \\Theta(n^2 \\log^2 n)$ e o Caso 1 para $T_Y(n) = \\Theta(n^{\\log_2 3})$.',
      C: 'Incorreta. Cai na pegadinha mais comum do Teorema Mestre ao supor que $n^2 \\log n = \\Omega(n^{2+\\varepsilon})$ para aplicar o Caso 3 em $T_X$.',
      D: 'Incorreta. Ignora o fator $\\log n$ em $T_X$ e arredonda erroneamente $\\log_2 3 \\approx 1{,}585$ para $2$ em $T_Y$.',
      E: 'Incorreta. Confunde $n^{\\log_2 3}$ com o produto $n \\cdot \\log_2 3 = \\Theta(n)$, que é uma função linear e assintoticamente incorreta para $T_Y$.',
    },
    keyConcept: 'Teorema Mestre (Casos 1, 2 estendido com $\\log^k n$ e diferença entre crescimento polinomial $n^\\varepsilon$ e logarítmico $\\log n$).',
  },
  {
    id: 'inedita-1-q17',
    source: 'inedita-1',
    year: 2026,
    number: 17,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Teste de Caixa-Branca, Grafo de Fluxo de Controle e Complexidade Ciclomática',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Para planejar o teste estrutural (caixa-branca) pelo critério de cobertura de caminhos básicos em um módulo de monitoramento industrial, um engenheiro de software analisa a função \`classificar_alerta\` abaixo, escrita em linguagem C, na qual cada estrutura condicional possui uma única condição simples (sem operadores lógicos compostos).

\`\`\`c
int classificar_alerta(int temp, int pressao, int ciclos) {
    int nivel = 0;                     // Bloco 1
    int res = 1;
    while (ciclos > 0) {               // Nó 2
        if (temp > 90) {               // Nó 3
            nivel += 2;                // Nó 4
        } else if (pressao > 150) {    // Nó 5
            nivel += 1;                // Nó 6
        }
        ciclos--;                      // Nó 7
    }
    if (nivel >= 4) {                  // Nó 8
        res = 2;                       // Nó 9
    }
    return res;                        // Nó 10
}
\`\`\``,
    command:
      'Calculando a complexidade ciclomática de McCabe $V(G)$ dessa função e interpretando seu significado no teste de caixa-branca, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'A complexidade ciclomática é $4$, indicando que exatamente $4$ casos de teste são suficientes para exercitar todas as combinações possíveis de iterações do laço `while`.',
      },
      {
        letter: 'B',
        text: 'A complexidade ciclomática é $5$, indicando que existem no máximo $5$ caminhos de execução distintos possíveis na função para quaisquer valores de entrada.',
      },
      {
        letter: 'C',
        text: 'A complexidade ciclomática é $4$, pois ramificações `else if` pertencem ao mesmo bloco condicional do `if` anterior e não geram nós predicados adicionais.',
      },
      {
        letter: 'D',
        text: 'A complexidade ciclomática é $5$, determinando um conjunto básico de $5$ caminhos linearmente independentes para orientar o projeto de casos de teste de caixa-branca.',
      },
      {
        letter: 'E',
        text: 'A complexidade ciclomática é $6$, pois cada parâmetro formal da função soma um nó de decisão adicional à contagem de McCabe.',
      },
    ],
    correctOption: 'D',
    explanation: `Podemos calcular a complexidade ciclomática de McCabe $V(G)$ de três formas equivalentes para o Grafo de Fluxo de Controle (GFC) da função:

1. **Pelo número de nós predicados ($P$):**
   Cada estrutura condicional simples gera um nó de decisão com grau de saída $2$:
   - Nó 2: \`while (ciclos > 0)\`
   - Nó 3: \`if (temp > 90)\`
   - Nó 5: \`else if (pressao > 150)\` *(equivalente a um \`if\` aninhado no ramo falso de 3!)*
   - Nó 8: \`if (nivel >= 4)\`
   Logo, $P = 4$ e:
   $$V(G) = P + 1 = 4 + 1 = 5$$

2. **Pela fórmula de Euler ($E - N + 2$):**
   - Nós ($N = 10$): blocos numerados de $1$ a $10$ (entrada única no nó 1 e saída única no nó 10).
   - Arestas ($E = 13$): \`1→2\`, \`2→3\`, \`2→8\`, \`3→4\`, \`3→5\`, \`4→7\`, \`5→6\`, \`5→7\`, \`6→7\`, \`7→2\`, \`8→9\`, \`8→10\`, \`9→10\`.
   $$V(G) = E - N + 2 = 13 - 10 + 2 = 5$$

3. **Significado no teste de caixa-branca:**
   $V(G) = 5$ indica a dimensão do espaço de caminhos **linearmente independentes** (conjunto básico), servindo como referência para o número de casos de teste necessários para atingir $100\\%$ de cobertura de instruções e desvios. Como há um laço \`while\`, o número *total* de caminhos de execução possíveis é potencialmente ilimitado (cresce com \`ciclos\`), não sendo limitado a 5.

Logo, a resposta correta é a alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Esquece de somar $+1$ em $P+1$ e atribui significado incorreto (nenhum número finito cobre todas as iterações de um laço não limitado).',
      B: 'Incorreta. Pegadinha conceitual frequente: $V(G) = 5$ representa caminhos *linearmente independentes*, e não o total de caminhos possíveis (que em funções com laços é arbitrariamente grande).',
      C: 'Incorreta. Todo `else if` introduz um teste booleano próprio (outro nó predicado no GFC), somando $+1$ à complexidade ciclomática.',
      D: 'Correta. Tanto $P+1 = 4+1 = 5$ quanto $E-N+2 = 13-10+2 = 5$ confirmam $V(G) = 5$ e sua correta interpretação como tamanho do conjunto básico de caminhos linearmente independentes.',
      E: 'Incorreta. Parâmetros da assinatura da função não entram na contagem de nós predicados de McCabe.',
    },
    keyConcept: 'Complexidade ciclomática de McCabe ($V(G) = E - N + 2 = P + 1$) e sua interpretação como número de caminhos linearmente independentes no teste estrutural.',
  },
  {
    id: 'inedita-1-q18',
    source: 'inedita-1',
    year: 2026,
    number: 18,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Normalização Relacional (1FN, 2FN e 3FN) e Dependências Funcionais',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Considere o esquema relacional abaixo, projetado inicialmente para registrar a alocação de engenheiros em projetos de pesquisa e desenvolvimento:

\`ALOCACAO(id_proj, id_eng, nome_proj, id_depto_eng, nome_depto_eng, horas_semanais)\`

Sabe-se que todos os domínios são atômicos (a tabela já atende à Primeira Forma Normal — 1FN), que a chave primária composta é \`{id_proj, id_eng}\` e que valem as seguintes dependências funcionais (DFs) não triviais:

- **DF1:** \`{id_proj, id_eng} -> horas_semanais\`
- **DF2:** \`id_proj -> nome_proj\`
- **DF3:** \`id_eng -> id_depto_eng\`
- **DF4:** \`id_depto_eng -> nome_depto_eng\` *(cada engenheiro pertence a um único departamento, e cada departamento tem um único nome)*`,
    command:
      'Acerca do nível de normalização da relação `ALOCACAO` e de sua decomposição até a Terceira Forma Normal (3FN) sem perda de informações nem de dependências, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'A relação original já se encontra na 2FN, violando apenas a 3FN em decorrência da dependência `id_depto_eng -> nome_depto_eng`.',
      },
      {
        letter: 'B',
        text: 'Para atingir a 3FN, é suficiente decompor o esquema em duas relações: `PROJETO(id_proj, nome_proj)` e `ENGENHEIRO_ALOC(id_proj, id_eng, id_depto_eng, nome_depto_eng, horas_semanais)`.',
      },
      {
        letter: 'C',
        text: 'A decomposição em três relações — `PROJETO(id_proj, nome_proj)`, `ENGENHEIRO(id_eng, id_depto_eng, nome_depto_eng)` e `ALOCACAO(id_proj, id_eng, horas_semanais)` — já satisfaz integralmente a 3FN.',
      },
      {
        letter: 'D',
        text: 'A relação original viola a 1FN porque emprega uma chave primária composta por dois atributos (`id_proj` e `id_eng`).',
      },
      {
        letter: 'E',
        text: 'A relação original viola a 2FN por apresentar dependências funcionais parciais e, para alcançar a 3FN eliminando também a dependência transitiva, deve ser decomposta em quatro relações: `PROJETO(id_proj, nome_proj)`, `DEPARTAMENTO(id_depto_eng, nome_depto_eng)`, `ENGENHEIRO(id_eng, id_depto_eng)` e `ALOCACAO(id_proj, id_eng, horas_semanais)`.',
      },
    ],
    correctOption: 'E',
    explanation: `Vamos verificar passo a passo as formas normais com base na chave candidata única \`{id_proj, id_eng}\`:

1. **Verificação da 1FN:** Satisfeita (atributos atômicos, sem atributos multivalorados ou compostos). Chaves primárias compostas são plenamente válidas na 1FN, 2FN e 3FN.

2. **Verificação da 2FN (ausência de dependências parciais de atributos não primos em relação a qualquer chave candidata):**
   - \`DF2\`: \`id_proj -> nome_proj\` é uma **dependência parcial** (\`id_proj\` é subconjunto próprio da chave).
   - \`DF3\`: \`id_eng -> id_depto_eng\` (e transitivamente \`id_eng -> nome_depto_eng\`) também é uma **dependência parcial**.
   - Logo, a relação **viola a 2FN**. Eliminando dependências parciais, obtemos 3 tabelas em 2FN:
     - \`PROJETO(id_proj, nome_proj)\` (PK: \`id_proj\`)
     - \`ALOCACAO(id_proj, id_eng, horas_semanais)\` (PK: \`{id_proj, id_eng}\`)
     - \`ENGENHEIRO(id_eng, id_depto_eng, nome_depto_eng)\` (PK: \`id_eng\`)

3. **Verificação da 3FN (ausência de dependências transitivas de atributos não primos):**
   - Na tabela \`ENGENHEIRO\`, temos \`id_eng -> id_depto_eng -> nome_depto_eng\`, onde \`id_depto_eng\` **não é superchave** e \`nome_depto_eng\` **não é atributo primo**. Isso **viola a 3FN** (gerando anomalias de atualização, inserção e exclusão de departamentos)!
   - Decompondo \`ENGENHEIRO\` pela DF4, obtemos o esquema final em **3FN** (e também em BCNF), com junção sem perdas e preservação de todas as 4 DFs:
     1. \`PROJETO(id_proj, nome_proj)\`
     2. \`DEPARTAMENTO(id_depto_eng, nome_depto_eng)\`
     3. \`ENGENHEIRO(id_eng, id_depto_eng)\` (FK \`id_depto_eng\`)
     4. \`ALOCACAO(id_proj, id_eng, horas_semanais)\` (FKs \`id_proj\`, \`id_eng\`)

Portanto, a resposta correta é a alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. A relação original viola já a 2FN, pois `nome_proj` depende só de `id_proj` e `id_depto_eng` depende só de `id_eng`.',
      B: 'Incorreta. A segunda tabela ainda mantém dependência parcial (`id_eng -> id_depto_eng`) e dependência transitiva (`id_depto_eng -> nome_depto_eng`).',
      C: 'Incorreta. Pegadinha clássica: essa decomposição em três tabelas alcança apenas a **2FN**, pois `ENGENHEIRO(id_eng, id_depto_eng, nome_depto_eng)` ainda viola a 3FN pela dependência transitiva DF4.',
      D: 'Incorreta. Chaves primárias compostas não violam nenhuma forma normal; a 1FN exige apenas atomicidade dos atributos.',
      E: 'Correta. Identifica corretamente a violação da 2FN e da 3FN e propõe a decomposição exata em quatro relações preservando dados e dependências.',
    },
    keyConcept: 'Normalização relacional: 2FN elimina dependências funcionais parciais sobre chaves compostas; 3FN elimina dependências transitivas entre atributos não chave.',
  },
  {
    id: 'inedita-1-q19',
    source: 'inedita-1',
    year: 2026,
    number: 19,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Teorema da Amostragem de Nyquist e Estabilidade de Filtros no Plano z',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Em um sistema embarcado de aquisição e processamento digital de sinais, um sinal analógico contínuo $x(t)$ é expresso pela superposição de três componentes senoidais:

$$x(t) = 3\\cos(200\\pi t) + 5\\sin(600\\pi t) + 2\\cos(1000\\pi t)$$

Após ser amostrado à taxa uniforme $f_s$ (em $\\text{Hz}$), o sinal discreto obtido alimenta um filtro digital linear e invariante no tempo (LTI) **causal** descrito pela seguinte função de transferência no domínio $z$:

$$H(z) = \\frac{z + 0{,}5}{(z - 0{,}8)(z + 0{,}4)}$$`,
    command:
      'Para evitar o fenômeno de *aliasing* na amostragem de $x(t)$ e classificar corretamente a estabilidade BIBO do filtro causal $H(z)$, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'Deve-se adotar $f_s > 2\\,000\\text{ Hz}$, e o filtro $H(z)$ é instável porque possui um polo real positivo em $z = +0{,}8$.',
      },
      {
        letter: 'B',
        text: 'Deve-se adotar $f_s > 1\\,000\\text{ Hz}$, e o filtro $H(z)$ é instável porque o polo $z = +0{,}8$ está localizado no semiplano direito.',
      },
      {
        letter: 'C',
        text: 'Deve-se adotar $f_s > 1\\,000\\text{ Hz}$, e o filtro $H(z)$ é BIBO-estável porque todos os seus polos ($z = 0{,}8$ e $z = -0{,}4$) possuem módulo estritamente menor que $1$.',
      },
      {
        letter: 'D',
        text: 'Deve-se adotar $f_s > 500\\text{ Hz}$, e o filtro $H(z)$ é BIBO-estável porque seu zero em $z = -0{,}5$ situa-se no semiplano esquerdo.',
      },
      {
        letter: 'E',
        text: 'Deve-se adotar $f_s > 2\\,000\\text{ Hz}$, e o filtro $H(z)$ é marginalmente estável porque a soma dos módulos de seus polos é igual a $1{,}2 > 1$.',
      },
    ],
    correctOption: 'C',
    explanation: `**Parte 1 — Frequência mínima de amostragem (Teorema de Nyquist–Shannon):**
Em sinais da forma $\\cos(\\omega t) = \\cos(2\\pi f t)$, a frequência em Hertz é $f = \\frac{\\omega}{2\\pi}$:
- $\\omega_1 = 200\\pi\\text{ rad/s} \\implies f_1 = \\frac{200\\pi}{2\\pi} = 100\\text{ Hz}$
- $\\omega_2 = 600\\pi\\text{ rad/s} \\implies f_2 = \\frac{600\\pi}{2\\pi} = 300\\text{ Hz}$
- $\\omega_3 = 1000\\pi\\text{ rad/s} \\implies f_3 = \\frac{1000\\pi}{2\\pi} = 500\\text{ Hz}$

Portanto, a frequência máxima do sinal é $f_{\\max} = 500\\text{ Hz}$. Para evitar *aliasing* (sobreposição espectral), exige-se:

$$f_s > 2 f_{\\max} = 2 \\times 500 = 1\\,000\\text{ Hz}$$

**Parte 2 — Estabilidade BIBO de um sistema LTI discreto causal no plano $z$:**
- **Atenção à pegadinha clássico plano $s$ vs. plano $z$:**
  - No **tempo contínuo (plano $s$)**, um sistema causal é estável se todos os polos estiverem no **semiplano esquerdo** ($\\operatorname{Re}(p_i) < 0$).
  - No **tempo discreto (plano $z$)**, o mapeamento $z = e^{sT}$ transforma o semiplano esquerdo no **interior do círculo unitário**! Logo, um sistema discreto causal é BIBO-estável se, e somente se, **todos os polos satisfizerem $|p_i| < 1$**.
- Os polos de $H(z)$ são as raízes do denominador $(z - 0{,}8)(z + 0{,}4) = 0$:
  - $p_1 = +0{,}8 \\implies |p_1| = 0{,}8 < 1$
  - $p_2 = -0{,}4 \\implies |p_2| = 0{,}4 < 1$
- Como ambos estão estritamente dentro do círculo unitário, o filtro é **BIBO-estável** (o zero em $z = -0{,}5$ não altera a estabilidade).

Logo, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Comete dupla pegadinha: confunde $\\omega = 1000\\pi$ com $f_{\\max} = 1000\\text{ Hz}$ (dobrando $f_s$) e aplica a regra do plano $s$ ($\\operatorname{Re} < 0$) em vez do círculo unitário $|z| < 1$.',
      B: 'Incorreta. Acerta a condição de Nyquist, mas aplica erroneamente o critério de estabilidade do plano $s$ ao polo real positivo $z = +0{,}8$.',
      C: 'Correta. Identifica $f_{\\max} = 500\\text{ Hz} \\implies f_s > 1\\,000\\text{ Hz}$ e verifica corretamente que $|0{,}8| < 1$ e $|-0{,}4| < 1$ garantem estabilidade BIBO no plano $z$.',
      D: 'Incorreta. Esquece o fator $2$ da taxa de Nyquist ($f_s > 2 f_{\\max}$) e atribui erroneamente a estabilidade à posição do *zero* em vez dos *polos*.',
      E: 'Incorreta. Erra a taxa de Nyquist e inventa um critério inexistente baseado na soma dos módulos dos polos (cada polo deve satisfazer individualmente $|p_i| < 1$).',
    },
    keyConcept: 'Teorema de Nyquist ($f_s > 2 f_{\\max}$ com $f = \\omega / 2\\pi$) e critério de estabilidade discreta no plano $z$ (polos estritamente no interior do círculo unitário: $|p_i| < 1$).',
  },
];
