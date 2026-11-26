import type { ObjectiveQuestion } from '../../types/enade';

export const ENADE_2017_CE_1: ObjectiveQuestion[] = [
  {
    id: 'enade-2017-q09',
    source: 'enade-2017',
    year: 2017,
    number: 9,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Ciência dos Materiais: Diagrama Tensão × Deformação de Polímeros',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `A figura a seguir representa o diagrama de tensão $\\sigma$ *versus* deformação $\\varepsilon$ para diferentes materiais poliméricos.`,
    images: [
      {
        src: '/images/enade-2017/q09-tensao-deformacao.png',
        alt: 'Diagrama de tensão (sigma) versus deformação (epsilon) com cinco curvas de materiais poliméricos numeradas de I a V',
        caption: 'GARCIA, A. et al. Ensaios dos materiais. 2. ed. Rio de Janeiro: LTC, 2012 (adaptado).',
      },
    ],
    command:
      'Assinale a opção que apresenta, respectivamente, o módulo de elasticidade e o nível de deformação de uma das curvas do diagrama apresentado.',
    options: [
      { letter: 'A', text: 'Curva I - alto e grande.' },
      { letter: 'B', text: 'Curva II - baixo e grande.' },
      { letter: 'C', text: 'Curva III - baixo e pequeno.' },
      { letter: 'D', text: 'Curva IV - alto e grande.' },
      { letter: 'E', text: 'Curva V - baixo e pequeno.' },
    ],
    correctOption: 'E',
    explanation: `No diagrama tensão ($\\sigma$) × deformação ($\\varepsilon$), duas propriedades mecânicas fundamentais são lidas diretamente da geometria de cada curva:

1. **Módulo de elasticidade (Módulo de Young, $E$):** corresponde à **inclinação da reta tangente inicial** (região elástica linear), dada pela Lei de Hooke:
   $$E = \\frac{\\Delta \\sigma}{\\Delta \\varepsilon}$$
   Quanto mais íngreme (próxima do eixo vertical $\\sigma$) for a tangente tracejada na origem, **maior** é o módulo de elasticidade (material mais rígido).

2. **Nível de deformação na ruptura ($\\varepsilon_{\\text{ruptura}}$):** corresponde à **abscissa (alcance horizontal)** do ponto final da curva (ponto preto de ruptura). Quanto mais à direita a curva termina, **maior** é a deformação suportada pelo polímero.

Analisando as cinco curvas no diagrama:
- **Curva I:** tangente inicial muito íngreme (**módulo alto**) e ruptura logo no início do eixo horizontal (**deformação pequena**) — polímero rígido e frágil.
- **Curva II:** tangente inicial relativamente íngreme (**módulo médio-alto**) e ruptura em **deformação pequena a moderada**.
- **Curva III:** tangente inicial inclinada (**módulo médio-alto**) e grande alongamento até a ruptura (**deformação grande**) — polímero tenaz/dúctil.
- **Curva IV:** tangente inicial pouco inclinada (**módulo baixo**) e grande alcance horizontal (**deformação grande**) — polímero flexível/elastomérico.
- **Curva V:** tangente inicial quase horizontal (**módulo baixo**) e ruptura muito cedo (**deformação pequena**) — material mole e pouco resistente.

Portanto, a única correspondência correta é a **Curva V — módulo de elasticidade baixo e nível de deformação pequeno** (alternativa **E**).`,
    optionAnalysis: {
      A: 'Incorreta. A Curva I tem módulo de elasticidade alto (inclinação inicial muito acentuada), porém apresenta nível de deformação pequeno, rompendo precocemente.',
      B: 'Incorreta. A Curva II possui módulo de elasticidade elevado/intermediário (não baixo) e deformação pequena/moderada (não grande).',
      C: 'Incorreta. A Curva III exibe grande deformação até a ruptura (vai até o extremo direito do eixo horizontal) e módulo de elasticidade intermediário/alto.',
      D: 'Incorreta. A Curva IV apresenta nível de deformação grande, porém sua inclinação inicial é bem suave, indicando módulo de elasticidade baixo.',
      E: 'Correta. A Curva V tem reta tangente inicial de baixíssima inclinação (módulo de elasticidade baixo) e termina muito próxima da origem horizontal (nível de deformação pequeno).',
    },
    keyConcept:
      'Módulo de elasticidade E = dσ/dε é a inclinação inicial da curva tensão-deformação; o nível de deformação é o alcance horizontal até o ponto de ruptura.',
    reference:
      'GARCIA, A. et al. Ensaios dos materiais. 2. ed. Rio de Janeiro: Livros Técnicos e Científicos Editora Ltda, 2012 (adaptado).',
  },
  {
    id: 'enade-2017-q10',
    source: 'enade-2017',
    year: 2017,
    number: 10,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Gestão Ambiental, Recursos Naturais e Desenvolvimento Sustentável',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `A forte inserção brasileira no comércio internacional e a crescente preocupação mundial com os problemas ambientais desafiam o Brasil para construir uma política de integração entre o setor produtivo e o meio ambiente.

*Disponível em: <http://www.mma.gov.br>. Acesso em: 17 jul. 2017 (adaptado).*

O meio ambiente é fornecedor de matéria-prima e, ao mesmo tempo, receptor de resíduos oriundos das atividades produtivas, o que deve ser necessariamente considerado para o estabelecimento de políticas ambientais e econômicas mais eficientes na gestão e uso dos recursos naturais.

*MOURA, A. M.; ROMA, J. C.; SACCARO, N. Problemas econômicos, soluções ambientais. Boletim regional, urbano e ambiental. Brasília: Ipea, n. 15, jul./dez. 2015 (adaptado).*

A partir desses textos, avalie as afirmações a seguir.

I. Os benefícios da biodiversidade e dos serviços ecossistêmicos são de difícil valoração econômica.

II. As mudanças climáticas resultantes da emissão de gases de efeito estufa têm gerado oportunidades para o desenvolvimento e a utilização de fontes renováveis de energia, como alternativas ao uso de combustíveis fósseis.

III. A degradação ambiental pode ocasionar limitações ao crescimento econômico sustentável.

IV. A geração de riqueza e desenvolvimento sem a elevação do padrão de consumo dos recursos naturais constitui impedimento para o crescimento de países em desenvolvimento.

V. Os tratados internacionais ambientais exigem entrelaçamento entre lucros obtidos, desenvolvimento social de comunidades tradicionais e conservação dos ecossistemas.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e IV.' },
      { letter: 'B', text: 'I e V.' },
      { letter: 'C', text: 'II, III e IV.' },
      { letter: 'D', text: 'I, II, III e V.' },
      { letter: 'E', text: 'II, III, IV e V.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada afirmação sobre economia ambiental e gestão sustentável dos recursos naturais:

- **I — Verdadeira:** Serviços ecossistêmicos (regulação climática, polinização, purificação da água, biodiversidade genética) não possuem preços diretos de mercado, tornando sua valoração econômica um desafio clássico da Economia Ambiental.
- **II — Verdadeira:** A necessidade de mitigar emissões de gases de efeito estufa (GEE) impulsionou investimentos em inovação tecnológica e adoção de energias renováveis (solar, eólica, biomassa) como alternativas aos combustíveis fósseis.
- **III — Verdadeira:** Como o meio ambiente fornece matérias-primas e absorve resíduos, sua degradação (escassez hídrica, perda de solo fértil, eventos climáticos extremos) impõe limites concretos ao crescimento econômico sustentável.
- **IV — Falsa:** O paradigma do desenvolvimento sustentável defende justamente o **desacoplamento** (*decoupling*) entre crescimento econômico e aumento predatório no consumo de recursos naturais, via eficiência energética, inovação e economia circular. Portanto, gerar riqueza sem elevar o padrão predatório de consumo **não** impede o crescimento de países em desenvolvimento; ao contrário, viabiliza um crescimento duradouro.
- **V — Verdadeira:** Acordos ambientais internacionais (como a Convenção sobre Diversidade Biológica e o Protocolo de Nagoya) estabelecem a repartição justa de benefícios/lucros associados à biodiversidade, integrando retorno econômico, inclusão social de comunidades tradicionais e conservação ambiental.

Assim, estão corretas apenas as afirmações **I, II, III e V** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação IV é falsa (desacoplamento não impede desenvolvimento) e faltam as verdadeiras II, III e V.',
      B: 'Incorreta. Embora I e V sejam verdadeiras, II e III também são verdadeiras.',
      C: 'Incorreta. Inclui a afirmação falsa IV e omite as verdadeiras I e V.',
      D: 'Correta. Apenas I, II, III e V são verdadeiras, enquanto IV contraria o conceito de desenvolvimento sustentável.',
      E: 'Incorreta. Inclui a afirmação falsa IV e exclui a verdadeira I.',
    },
    keyConcept:
      'Economia ambiental e desenvolvimento sustentável: serviços ecossistêmicos são difíceis de precificar e a sustentabilidade busca dissociar geração de riqueza do aumento predatório do uso de recursos.',
    reference:
      'MOURA, A. M.; ROMA, J. C.; SACCARO, N. Boletim regional, urbano e ambiental. Brasília: Ipea, n. 15, 2015.',
  },
  {
    id: 'enade-2017-q11',
    source: 'enade-2017',
    year: 2017,
    number: 11,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Gestão da Produção: Sistema Toyota e Filosofia Just in Time (JIT)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `O sistema Toyota de produção apresenta-se como uma alternativa mais eficiente ao modelo fordista de produção, que explora as vantagens de produção em série. O modelo toyotista consiste em cadeia de suprimentos enxuta, flexível e altamente terceirizada, que prevê a eliminação quase total dos estoques e a busca constante pela agilização do processo produtivo.

*SOBRAL, F.; PECI, A. Administração: teoria e prática no contexto brasileiro. São Paulo: Pearson, 2013 (adaptado).*

O sistema logístico e produtivo conhecido como *just in time* é uma filosofia de administração da produção baseada no modelo Toyota de produção. Esse novo enfoque na administração da manufatura surgiu de uma visão estratégica e inovadora das pessoas envolvidas na gestão empresarial, buscando vantagem competitiva por intermédio de uma melhor utilização do processo produtivo.

Com base nas informações apresentadas, avalie as afirmações a seguir, a respeito do sistema produtivo *just in time*.

I. Estimula o desenvolvimento de melhorias constantes, não apenas dos procedimentos e processos, mas também do homem dentro da empresa, o que permite desenvolver o potencial humano dentro das organizações e ampliar a base de confiança obtida pela transparência e honestidade das ações.

II. A implementação dos princípios da organização começa pela fábrica e suas repercussões estendem-se por toda a empresa, o que caracteriza o princípio da visibilidade, fundamentado no objetivo de tornar visíveis os problemas onde quer que possam existir.

III. Tem como objetivo administrar a manufatura de forma bem simples e eficiente, otimizando o uso dos recursos de capital, equipamento e mão de obra, o que resulta em um sistema capaz de atender às exigências do cliente, em termos de qualidade e prazo de entrega, ao menor custo.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'C',
    explanation: `Avaliando cada afirmação à luz da filosofia *Just in Time* (JIT) e do Sistema Toyota de Produção (STP):

- **I — Verdadeira:** Um dos pilares do STP/JIT é o *Kaizen* (melhoria contínua) aliado ao respeito pelas pessoas: o trabalhador deixa de ser um mero executor repetitivo (como no fordismo) e passa a atuar com autonomia, polivalência e participação na resolução de problemas, desenvolvendo o potencial humano e a confiança organizacional.
- **II — Falsa:** Há uma inversão conceitual na afirmação. Primeiro, a adoção estratégica do JIT requer comprometimento prévio da alta gestão e mudança cultural integrada da organização (não apenas "começar pela fábrica" isoladamente). Segundo, o **princípio da visibilidade** no JIT refere-se especificamente à **gestão visual no chão de fábrica** (sinais *Andon*, cartões *Kanban*, quadros de acompanhamento, eliminação de estoques que "escondem" defeitos) para expor gargalos e falhas instantaneamente — e não ao simples fato de repercussões da fábrica se estenderem pela empresa.
- **III — Verdadeira:** O objetivo central do JIT é eliminar desperdícios (*muda*) e gerir a manufatura de forma enxuta, simples e eficiente, otimizando capital (reduzindo estoques), equipamentos e mão de obra para entregar exatamente o que o cliente precisa, na quantidade certa, com alta qualidade, no prazo e ao menor custo.

Logo, estão corretas apenas as afirmações **I e III** (alternativa **C**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação III também descreve corretamente o objetivo operacional do JIT.',
      B: 'Incorreta. A afirmação II define de modo impreciso a implantação do JIT e o princípio da visibilidade.',
      C: 'Correta. As afirmações I (melhoria contínua e valorização humana) e III (manufatura enxuta, qualidade, prazo e menor custo) estão de acordo com a filosofia JIT.',
      D: 'Incorreta. Inclui a afirmação falsa II e exclui a verdadeira I.',
      E: 'Incorreta. A afirmação II é incorreta.',
    },
    keyConcept:
      'Just in Time (JIT) baseia-se em produção puxada, eliminação de estoques/desperdícios, melhoria contínua (Kaizen), valorização humana e atendimento com qualidade e prazo ao menor custo.',
    reference:
      'SOBRAL, F.; PECI, A. Administração: teoria e prática no contexto brasileiro. São Paulo: Pearson, 2013.',
  },
  {
    id: 'enade-2017-q12',
    source: 'enade-2017',
    year: 2017,
    number: 12,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Equações Diferenciais Ordinárias: Lei de Resfriamento de Newton',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `De acordo com a Lei de Resfriamento de Corpos, a taxa de variação da temperatura de um corpo em relação ao tempo é proporcional à diferença entre a temperatura do corpo e a temperatura ambiente.

Considere que $T(t)$ é a temperatura do corpo em função do tempo, $A$ é a temperatura do ambiente, $t$ é o tempo e $k$ é a constante de proporcionalidade.`,
    command:
      'Nesse contexto, o modelo matemático correspondente à Lei de Resfriamento de Corpos e à função resultante de sua resolução são dados, respectivamente, por',
    options: [
      {
        letter: 'A',
        text: '$\\dfrac{dT}{dt} = -k(T - A);\\quad T(t) = (T(0) - A)e^{-kt} + A$',
      },
      {
        letter: 'B',
        text: '$\\dfrac{dT}{dt} = k(T - A);\\quad T(t) = (T(0) - A)e^{kt} + A$',
      },
      {
        letter: 'C',
        text: '$\\dfrac{dT}{dt} = -k(T - A);\\quad T(t) = e^{-kt} + A$',
      },
      {
        letter: 'D',
        text: '$\\dfrac{dT}{dt} = k(T - A);\\quad T(t) = e^{-kt} + A$',
      },
      {
        letter: 'E',
        text: '$\\dfrac{dT}{dt} = k(T - A);\\quad T(t) = e^{kt} + A$',
      },
    ],
    correctOption: 'A',
    explanation: `Pela **Lei de Resfriamento de Newton**, assumindo a constante de proporcionalidade $k > 0$, se a temperatura do corpo $T(t)$ for maior que a temperatura ambiente $A$ ($T - A > 0$), o corpo perde calor e sua temperatura **diminui** ($\\frac{dT}{dt} < 0$). Logo, a EDO é:

$$\\frac{dT}{dt} = -k(T - A)$$

Resolvendo por **separação de variáveis**:

1. Separe $T$ e $t$:
   $$\\frac{dT}{T - A} = -k\\,dt$$

2. Integre ambos os lados:
   $$\\int \\frac{dT}{T - A} = \\int -k\\,dt \\implies \\ln|T - A| = -kt + C_0$$

3. Exponencie ambos os lados (com $C = \\pm e^{C_0}$):
   $$T(t) - A = C e^{-kt} \\implies T(t) = C e^{-kt} + A$$

4. Aplique a condição inicial em $t = 0$:
   $$T(0) = C e^{0} + A \\implies C = T(0) - A$$

5. Substitua $C$ na solução geral:
   $$T(t) = (T(0) - A)e^{-kt} + A$$

Verificação física: quando $t \\to \\infty$, como $k > 0$, $e^{-kt} \\to 0$ e $T(t) \\to A$ (o corpo atinge equilíbrio térmico com o ambiente). A alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Apresenta o sinal negativo no decaimento térmico dT/dt = -k(T - A) e a constante de integração correta C = T(0) - A obtida pela condição inicial em t = 0.',
      B: 'Incorreta. Com sinal positivo (+k), e^(kt) diverge para infinito quando t → ∞, violando o equilíbrio térmico.',
      C: 'Incorreta. A EDO está correta, mas omitiu a constante multiplicativa (T(0) - A) oriunda da integração, o que forçaria T(0) = 1 + A.',
      D: 'Incorreta. Além de usar +k na EDO (incompatível com a solução e^(-kt)), omite a constante (T(0) - A).',
      E: 'Incorreta. Usa sinal positivo (+k), levando a divergência exponencial, e ainda omite a constante (T(0) - A).',
    },
    keyConcept:
      'EDO separável de 1ª ordem da Lei de Resfriamento de Newton: dT/dt = -k(T - A) possui solução T(t) = (T(0) - A)e^(-kt) + A, convergindo para T = A quando t → ∞.',
  },
  {
    id: 'enade-2017-q13',
    source: 'enade-2017',
    year: 2017,
    number: 13,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Ciência dos Materiais: Propriedades Térmicas de Cerâmicas Porosas',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Os veículos espaciais apresentam estrutura externa constituída por um conjunto de blocos que formam um escudo térmico, cuja função é proteger motores e demais componentes de possíveis danos causados pelo calor, além de reduzir a temperatura interna do veículo.`,
    command: 'Esses escudos térmicos são construídos com material',
    options: [
      { letter: 'A', text: 'metálico, dada sua leveza e elevada resistência ao calor.' },
      { letter: 'B', text: 'polimérico, dada sua baixa resistência ao calor e à corrosão.' },
      { letter: 'C', text: 'cerâmico poroso, dada sua elevada resistência mecânica à tração.' },
      { letter: 'D', text: 'polimérico, em razão de sua alta massa específica e de sua resistência ao calor.' },
      {
        letter: 'E',
        text: 'cerâmico poroso, em razão de seu baixo coeficiente de dilatação térmica e de sua baixa condutividade térmica.',
      },
    ],
    correctOption: 'E',
    explanation: `Durante a reentrada atmosférica, o atrito e a compressão do ar elevam a temperatura na superfície de veículos espaciais (como os ônibus espaciais) para mais de $1\\,500\\,^{\\circ}\\text{C}$. O escudo térmico precisa cumprir dois requisitos térmicos essenciais:

1. **Baixa condutividade térmica:** impedir que o calor intenso da superfície externa seja conduzido para a fuselagem interna e os equipamentos. Os materiais **cerâmicos porosos** (como blocos de fibras de sílica com ~90% de porosidade) são excelentes isolantes térmicos, pois tanto as ligações iônicas/covalentes da cerâmica quanto o ar/gás aprisionado nos poros dificultam a condução térmica (além de tornarem o bloco extremamente leve).
2. **Baixo coeficiente de dilatação térmica:** evitar grandes variações dimensionais sob gradientes extremos de temperatura, o que confere alta **resistência ao choque térmico** (evitando trincas e fraturas).

Portanto, a resposta correta é a alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Metais possuem alta condutividade térmica (transfeririam calor para o interior) e, em geral, densidade elevada em comparação a cerâmicas porosas.',
      B: 'Incorreta. Polímeros de fato possuem baixa resistência a altas temperaturas, mas justamente por isso não servem como blocos cerâmicos reutilizáveis de escudo térmico (degradam-se/fundem rapidamente).',
      C: 'Incorreta. Materiais cerâmicos são caracteristicamente frágeis e possuem baixa resistência à tração (são resistentes à compressão, não à tração).',
      D: 'Incorreta. Polímeros possuem baixa massa específica (não alta) e baixa resistência ao calor extremo.',
      E: 'Correta. Cerâmicas porosas combinam baixíssima condutividade térmica (isolamento), baixo coeficiente de dilatação térmica (resistência ao choque térmico) e baixa densidade.',
    },
    keyConcept:
      'Isolamento térmico extremo em engenharia aeroespacial: cerâmicas porosas oferecem baixíssima condutividade térmica e baixo coeficiente de dilatação térmica (alta resistência ao choque térmico).',
  },
  {
    id: 'enade-2017-q14',
    source: 'enade-2017',
    year: 2017,
    number: 14,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Física: Hidrostática e Lei de Stevin',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `A medida de profundidade em ambientes aquáticos está relacionada à pressão hidrostática, através da relação aproximadamente linear $P = f(z)$, em que $z$ é a profundidade e $P$ é a pressão. Assuma que a densidade da água do mar $\\rho = 1{,}025 \\times 10^{3}\\text{ kg}\\cdot\\text{m}^{-3}$, que não há variação dessa densidade com a profundidade e que o valor da aceleração da gravidade $g = 9{,}8\\text{ m}\\cdot\\text{s}^{-2}$.`,
    command:
      'Nesse contexto, assinale a opção cujo gráfico relaciona adequadamente a profundidade com a pressão hidrostática.',
    options: [
      { letter: 'A', text: 'Gráfico A (reta linear partindo da origem)', image: '/images/enade-2017/q14-opt-a.png' },
      { letter: 'B', text: 'Gráfico B (curva côncava para baixo)', image: '/images/enade-2017/q14-opt-b.png' },
      {
        letter: 'C',
        text: 'Gráfico C (reta linear iniciando em P = 10 055 kPa e z = 500 m)',
        image: '/images/enade-2017/q14-opt-c.png',
      },
      {
        letter: 'D',
        text: 'Gráfico D (reta linear iniciando em P = 10 055 kPa e z = 0 m)',
        image: '/images/enade-2017/q14-opt-d.png',
      },
      {
        letter: 'E',
        text: 'Gráfico E (curva não linear iniciando em P = 10 055 kPa e z = 0 m)',
        image: '/images/enade-2017/q14-opt-e.png',
      },
    ],
    correctOption: 'A',
    explanation: `Pela **Lei de Stevin**, para um fluido incompressível (densidade $\\rho$ constante) sob gravidade $g$ constante, a **pressão hidrostática** (manométrica) em função da profundidade $z$ é estritamente proporcional a $z$:

$$P(z) = \\rho \\cdot g \\cdot z$$

Calculando o fator de proporcionalidade $\\rho \\cdot g$:

$$\\rho \\cdot g = (1{,}025 \\times 10^{3}\\text{ kg/m}^{3}) \\times (9{,}8\\text{ m/s}^{2}) = 10\\,045\\text{ Pa/m} \\approx 10{,}045\\text{ kPa/m}$$

*(Nota: o autor do gráfico utilizou $g = 9{,}81\\text{ m/s}^{2}$, obtendo $\\rho g = 10{,}05525\\text{ kPa/m}$, razão pela qual as marcas do eixo horizontal correspondem exatamente aos múltiplos de $1\\,000\\text{ m}$:)*

- Para $z = 0\\text{ m} \\implies P = 0\\text{ kPa}$ (ou $P_{\\text{abs}} \\approx 101{,}3\\text{ kPa}$, visualmente indistinguível da origem na escala de $40\\,000\\text{ kPa}$);
- Para $z = 1\\,000\\text{ m} \\implies P \\approx 10\\,055\\text{ kPa}$;
- Para $z = 2\\,000\\text{ m} \\implies P \\approx 20\\,111\\text{ kPa}$;
- Para $z = 3\\,000\\text{ m} \\implies P \\approx 30\\,166\\text{ kPa}$;
- Para $z = 4\\,000\\text{ m} \\implies P \\approx 40\\,221\\text{ kPa}$.

Como a relação $z = \\frac{1}{\\rho g} P$ é **linear** e passa pela **origem $(0, 0)$** ligando exatamente os pares acima até $(40\\,221\\text{ kPa},\\ 4\\,000\\text{ m})$, o único gráfico correto é o da alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Reta crescente que parte da origem (0, 0) e relaciona linearmente cada incremento de ~10 055 kPa a 1 000 m de profundidade, chegando a 4 000 m em 40 221 kPa.',
      B: 'Incorreta. Apresenta comportamento curvilíneo (não linear), contradizendo a densidade constante e a relação linear P = ρgz.',
      C: 'Incorreta. Embora linear, desloca a reta para começar em (10 055 kPa, 500 m) e atingir apenas 3 500 m em 40 221 kPa.',
      D: 'Incorreta. Desloca o ponto inicial para (10 055 kPa, 0 m), implicando erroneamente pressão hidrostática de 10 055 kPa na superfície e coeficiente angular incorreto.',
      E: 'Incorreta. Além de ser fortemente não linear, parte erroneamente de 10 055 kPa na profundidade zero.',
    },
    keyConcept:
      'Lei de Stevin: com densidade ρ e gravidade g constantes, a pressão hidrostática cresce linearmente com a profundidade (P = ρgz), gerando uma reta pela origem.',
  },
  {
    id: 'enade-2017-q15',
    source: 'enade-2017',
    year: 2017,
    number: 15,
    component: 'CE',
    discipline: 'probabilidade-estatistica',
    subtopic: 'Estatística Descritiva: Média, Desvio-Padrão e Dispersão Relativa (CV)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Suponha que determinado programa de computador seja executado por meio de 13 etapas, com tempo médio de 50 segundos ao todo e dispersão relativa de 10% em torno da média.

Considere que uma equipe de engenharia propõe um novo algoritmo que reduz em 30% o tempo de execução de todas as 13 etapas desse programa.

Nesse contexto, avalie as afirmações a seguir, a respeito do tempo de execução do novo algoritmo.

I. O tempo médio por etapa será de 32,5 segundos.

II. O desvio-padrão permanecerá inalterado.

III. A dispersão relativa em torno da média permanecerá inalterada.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'B',
    explanation: `Se o tempo de execução de **cada uma** das 13 etapas é reduzido em $30\\%$, o novo tempo de execução total $Y$ corresponde a multiplicar a variável aleatória original $X$ pelo fator constante $c = 1 - 0{,}30 = 0{,}70$:

$$Y = 0{,}70 \\cdot X$$

Usando as propriedades lineares de esperança (média) e desvio-padrão:

- **Nova média total:**
  $$\\mu_Y = 0{,}70 \\cdot \\mu_X = 0{,}70 \\times 50 = 35\\text{ segundos}$$
  E o tempo médio **por etapa** será $\\frac{35}{13} \\approx 2{,}69\\text{ segundos}$.
  Logo, a afirmação **I** ("32,5 segundos por etapa") é **FALSA** (nem o total é 32,5 s, muito menos o tempo por etapa!).

- **Novo desvio-padrão:**
  Originalmente, como a dispersão relativa (coeficiente de variação) era $CV_X = \\frac{\\sigma_X}{\\mu_X} = 10\\%$, tínhamos $\\sigma_X = 0{,}10 \\times 50 = 5\\text{ s}$.
  Ao multiplicar $X$ por $c = 0{,}70$, o desvio-padrão escala por $|c|$:
  $$\\sigma_Y = |0{,}70| \\cdot \\sigma_X = 0{,}70 \\times 5 = 3{,}5\\text{ segundos}$$
  Como $3{,}5 \\neq 5$, o desvio-padrão **diminui** em $30\\%$ e **não** permanece inalterado. Logo, a afirmação **II** é **FALSA**.

- **Nova dispersão relativa (Coeficiente de Variação, $CV$):**
  $$CV_Y = \\frac{\\sigma_Y}{\\mu_Y} = \\frac{0{,}70 \\cdot \\sigma_X}{0{,}70 \\cdot \\mu_X} = \\frac{\\sigma_X}{\\mu_X} = CV_X = 10\\%$$
  Como o fator multiplicativo positivo $0{,}70$ cancela entre numerador e denominador, a dispersão relativa em torno da média **permanece inalterada**. Logo, a afirmação **III** é **VERDADEIRA**.

Portanto, apenas a afirmação **III** está correta (alternativa **B**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação I é falsa: o novo tempo médio total é 0,70 × 50 = 35 s (e por etapa é 35/13 ≈ 2,69 s), jamais 32,5 s.',
      B: 'Correta. Ao multiplicar todos os valores por 0,70, média e desvio-padrão caem na mesma proporção (30%), mantendo o coeficiente de variação (σ/μ) idêntico (10%).',
      C: 'Incorreta. Ambas as afirmações I e II são falsas.',
      D: 'Incorreta. A afirmação II é falsa porque o desvio-padrão também é reduzido em 30% (σ\' = |c|σ).',
      E: 'Incorreta. As afirmações I e II são falsas.',
    },
    keyConcept:
      'Propriedades de escala: para Y = cX (c > 0), temos μ_Y = c·μ_X, σ_Y = c·σ_X e o coeficiente de variação CV = σ/μ é invariante à mudança de escala.',
  },
  {
    id: 'enade-2017-q16',
    source: 'enade-2017',
    year: 2017,
    number: 16,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Eletricidade: Efeito Joule e Eficiência Energética Residencial',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Em uma campanha publicitária que visa à redução do consumo de energia elétrica em residências, identificam-se as recomendações a seguir:

- substitua lâmpadas incandescentes por fluorescentes compactas ou lâmpadas de LED;
- evite usar o chuveiro elétrico com a chave na posição "inverno" ou "quente";
- acumule grande quantidade de roupa para ser passada a ferro elétrico de uma só vez;
- evite o uso de tomadas múltiplas para ligar vários aparelhos simultaneamente;
- utilize, na instalação elétrica, fios de diâmetros recomendados às suas finalidades.`,
    command:
      'A característica comum a essas recomendações é a proposta de economizar energia por intermédio da redução',
    options: [
      { letter: 'A', text: 'da potência de aparelhos e dispositivos elétricos.' },
      { letter: 'B', text: 'do tempo de utilização de aparelhos e dispositivos elétricos.' },
      { letter: 'C', text: 'do consumo de energia elétrica convertida em energia térmica.' },
      { letter: 'D', text: 'do consumo de energia elétrica por correntes de fuga.' },
      { letter: 'E', text: 'do consumo de energia térmica convertida em energia elétrica.' },
    ],
    correctOption: 'C',
    explanation: `Todas as cinco recomendações atacam o desperdício ou o elevado consumo de energia elétrica transformada em **calor (energia térmica)** pelo **Efeito Joule** ($P = R \\cdot I^{2} = \\frac{V^{2}}{R}$):

1. **Incandescente → LED/fluorescente:** lâmpadas incandescentes convertem cerca de 90%–95% da energia elétrica em calor no filamento; LEDs e fluorescentes convertem muito menos energia em calor para o mesmo fluxo luminoso.
2. **Chuveiro fora da posição "inverno":** reduz a corrente e a potência dissipada em calor na resistência elétrica ($P = V^{2}/R$).
3. **Passar roupas de uma só vez:** evita múltiplos ciclos de aquecimento térmico do ferro elétrico a partir da temperatura ambiente.
4. **Evitar tomadas múltiplas (benjamins/Ts):** a ligação simultânea de cargas eleva a corrente total nos contatos/condutores, causando superaquecimento ($P = R I^{2}$) — além de risco de incêndio.
5. **Fios de bitola (diâmetro) adequada:** pela 2ª Lei de Ohm ($R = \\rho L / A$), fios mais finos que o recomendado têm menor área transversal $A$, maior resistência $R$ e, consequentemente, maiores perdas térmicas por efeito Joule ao longo da fiação.

Portanto, o elo comum a todas é a redução **do consumo de energia elétrica convertida em energia térmica** (alternativa **C**).`,
    optionAnalysis: {
      A: 'Incorreta. Acumular roupas para passar de uma só vez ou dimensionar fios/tomadas não altera a potência nominal dos aparelhos.',
      B: 'Incorreta. Trocar lâmpadas incandescentes por LED ou escolher fios de diâmetro adequado não reduz o tempo de uso.',
      C: 'Correta. Todas as cinco medidas diminuem a energia elétrica dissipada ou consumida sob forma de energia térmica (Efeito Joule).',
      D: 'Incorreta. Correntes de fuga ocorrem por falhas de isolamento para a terra (protegidas pelo DR), não explicando lâmpadas incandescentes, chuveiro ou ferro elétrico.',
      E: 'Incorreta. Inverte a direção da conversão energética: os dispositivos residenciais convertem energia elétrica em térmica, e não térmica em elétrica.',
    },
    keyConcept:
      'Efeito Joule (P = R·I² = V²/R) e 2ª Lei de Ohm (R = ρL/A): aquecimento resistivo domina o consumo residencial e as perdas em condutores subdimensionados.',
  },
  {
    id: 'enade-2017-q17',
    source: 'enade-2017',
    year: 2017,
    number: 17,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Cálculo Multivariável: Otimização com Multiplicadores de Lagrange',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `A importância da otimização no processo produtivo é inegável. Do ponto de vista matemático, para otimizar determinada grandeza, é necessário modelá-la de acordo com uma função e, a partir daí, conforme a situação, procurar um máximo ou um mínimo. Uma das formas usadas para minimizar funções é o método dos multiplicadores de Lagrange.

Um fabricante de latinhas de refrigerante deve propor uma lata cilíndrica de volume $V_0$. Essa lata será fabricada usando-se duas ligas metálicas distintas, sendo uma para a parte lateral e outra para a base e a tampa. Ele deseja calcular o raio ($r$) e a altura ($h$) da lata para que o custo de sua produção seja o menor possível. Sabe-se que a área total da lata é dada por $A(r,h)$ e que o custo total de produção da lata, que depende apenas do material utilizado na sua produção, é $C(r,h)$. Para a solução desse problema, será utilizado o método dos multiplicadores de Lagrange.

Com base nessa situação, avalie as afirmações a seguir, acerca da solução desse problema.

I. O custo de produção da lata pode ser expresso por $C(r,h) = 2\\pi(K_1 rh + K_2 r^2)$, em que $K_1$ e $K_2$ são constantes que dependem do custo de cada uma das ligas metálicas por unidade de área.

II. A função a ser minimizada da área total da lata é $A(r,h) = 2\\pi rh + 2\\pi r^2$.

III. O vínculo na minimização, relacionado ao volume da lata, é dado por $g(r,h) = \\pi r^2 h - V_0$.

IV. O sistema de equações a ser montado é $\\nabla C(r,h) = \\lambda \\nabla g(r,h)$, no qual $\\lambda$ é denominado multiplicador de Lagrange.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Para modelar o problema de otimização condicionada de uma lata cilíndrica de raio $r$ e altura $h$:

1. **Áreas das superfícies da lata:**
   - Área lateral: $A_{\\text{lat}} = 2\\pi r h$ (custo unitário $K_1$).
   - Área da base e da tampa (dois círculos): $A_{\\text{bt}} = 2\\pi r^2$ (custo unitário $K_2$).

2. **Função objetivo (custo total $C(r,h)$):**
   $$C(r,h) = K_1 (2\\pi r h) + K_2 (2\\pi r^2) = 2\\pi(K_1 rh + K_2 r^2)$$
   Portanto, a afirmação **I** é **VERDADEIRA**.

3. **Avaliação da afirmação II:**
   Embora a expressão geométrica da área total seja $A(r,h) = 2\\pi r h + 2\\pi r^2$, o objetivo declarado pelo fabricante é minimizar o **custo total** $C(r,h)$, e **não** a área total $A(r,h)$! Como as duas ligas possuem custos unitários distintos ($K_1 \\neq K_2$), o par $(r, h)$ que minimiza a área em geral **não** coincide com o par que minimiza o custo. Logo, a afirmação **II** é **FALSA**.

4. **Restrição (vínculo de volume):**
   O volume fixo do cilindro exige $\\pi r^2 h = V_0$, reescrito na forma implícita $g(r,h) = 0$:
   $$g(r,h) = \\pi r^2 h - V_0$$
   Logo, a afirmação **III** é **VERDADEIRA**.

5. **Condição necessária dos Multiplicadores de Lagrange:**
   No ponto de mínimo condicionado, o gradiente da função objetivo é paralelo ao gradiente do vínculo:
   $$\\nabla C(r,h) = \\lambda \\nabla g(r,h)$$
   junto à equação do vínculo $g(r,h) = 0$. Logo, a afirmação **IV** é **VERDADEIRA**.

Assim, apenas **I, III e IV** estão corretas (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação II é falsa (minimiza-se o custo C, não a área A) e faltam as verdadeiras III e IV.',
      B: 'Incorreta. Embora I e IV sejam verdadeiras, a afirmação III (equação do vínculo de volume) também é verdadeira.',
      C: 'Incorreta. Inclui a falsa II e exclui as verdadeiras I e IV.',
      D: 'Correta. I formula corretamente o custo, III define corretamente o vínculo de volume e IV expressa corretamente o sistema de Lagrange.',
      E: 'Incorreta. Inclui a falsa II e omite a verdadeira I.',
    },
    keyConcept:
      'Multiplicadores de Lagrange: para minimizar f(x) sujeito a g(x) = 0, resolve-se ∇f = λ∇g com g = 0; atenção para otimizar a função custo (e não a área) quando os custos por área diferem.',
  },
  {
    id: 'enade-2017-q18',
    source: 'enade-2017',
    year: 2017,
    number: 18,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Resistência dos Materiais: Ensaio de Flexão em 3 Pontos',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `O ensaio de flexão é utilizado em materiais frágeis ou de alta dureza, tais como cerâmicas estruturais ou aços-ferramenta. Em uma de suas modalidades mais comuns, o ensaio de flexão a 3 pontos, é provocada uma flexão ao se aplicar o carregamento em 3 pontos, o que causa uma tensão de tração surgida no ponto central e inferior da amostra, onde a fratura do material terá início.

Assumindo-se um comportamento de tensão-deformação linear, a tensão de flexão $\\sigma$ do material pode ser obtida por meio da fórmula:

$$\\sigma = \\frac{3Fd}{2wh^2}$$

em que $F$ é a carga, $d$ é a distância entre os pontos de apoio, $w$ é a largura do corpo de prova e $h$ é a espessura do corpo de prova.

Considere dois corpos de prova A e B do mesmo compósito reforçado com fibras de vidro, cuja resistência à flexão é de $290\\text{ MPa}$. O corpo de prova A tem o triplo da largura e a metade da espessura do corpo de prova B e ambos são submetidos ao mesmo ensaio de flexão.`,
    command:
      'Nessa situação, qual porcentagem da força necessária para o rompimento do corpo de prova B deverá ser aplicada ao corpo de prova A para que este também se rompa?',
    options: [
      { letter: 'A', text: '50%' },
      { letter: 'B', text: '75%' },
      { letter: 'C', text: '100%' },
      { letter: 'D', text: '125%' },
      { letter: 'E', text: '200%' },
    ],
    correctOption: 'B',
    explanation: `Como ambos os corpos de prova A e B são feitos do **mesmo material** (mesma tensão de ruptura $\\sigma_A = \\sigma_B = 290\\text{ MPa}$) e submetidos ao **mesmo ensaio** (mesma distância entre apoios $d_A = d_B = d$), isolamos a força de ruptura $F$ na fórmula da tensão de flexão:

$$\\sigma = \\frac{3Fd}{2wh^2} \\implies F = \\frac{2\\,\\sigma\\,w\\,h^2}{3d}$$

Dados geométricos fornecidos:
- $w_A = 3\\,w_B$ (A tem o triplo da largura de B)
- $h_A = \\dfrac{h_B}{2}$ (A tem a metade da espessura de B)

Calculando a razão $\\dfrac{F_A}{F_B}$:

$$\\frac{F_A}{F_B} = \\frac{\\dfrac{2\\,\\sigma\\,w_A\\,h_A^2}{3d}}{\\dfrac{2\\,\\sigma\\,w_B\\,h_B^2}{3d}} = \\frac{w_A \\cdot h_A^2}{w_B \\cdot h_B^2} = \\frac{(3\\,w_B) \\cdot \\left(\\dfrac{h_B}{2}\\right)^2}{w_B \\cdot h_B^2} = 3 \\cdot \\frac{1}{4} = \\frac{3}{4} = 0{,}75$$

Logo:

$$F_A = 0{,}75 \\cdot F_B = 75\\% \\text{ de } F_B$$

Note que, como a espessura $h$ aparece ao **quadrado** no momento de inércia da seção retangular, reduzir a espessura pela metade reduz a força suportada a $\\frac{1}{4}$, efeito que não chega a ser compensado por triplicar a largura ($3 \\times \\frac{1}{4} = 75\\%$). Alternativa correta: **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Resultaria de desconsiderar o fator 3 da largura ou errar a potência de h.',
      B: 'Correta. F é proporcional a w·h², logo F_A / F_B = 3 × (1/2)² = 3/4 = 75%.',
      C: 'Incorreta. Ocorreria apenas se w_A · h_A² = w_B · h_B², o que exigiria w_A = 4·w_B para h_A = h_B/2.',
      D: 'Incorreta. Superestima a carga necessária para romper o corpo de prova A.',
      E: 'Incorreta. Resultaria de inverter a razão ou calcular incorretamente a dependência quadrática em h.',
    },
    keyConcept:
      'No ensaio de flexão a 3 pontos (σ = 3Fd / (2wh²)), a carga de ruptura F é proporcional a w·h² — a espessura tem influência quadrática.',
  },
  {
    id: 'enade-2017-q19',
    source: 'enade-2017',
    year: 2017,
    number: 19,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Sistemas Digitais: Projeto de Circuitos Combinatórios com Prioridade',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'dificil',
    context: `Considere que o gestor do restaurante de uma universidade pretenda implantar um sistema de catracas eletrônicas utilizando circuitos combinatórios para o acesso dos clientes à sala de alimentação. O funcionamento básico desse sistema é descrito a seguir.

- Deve haver quatro filas de espera: A, B, C e D;
- deve haver sensores que indiquem a presença de clientes nas filas, sendo atribuído o valor 1 quando houver cliente na fila, e 0 quando a fila estiver vazia;
- quando determinada fila estiver vazia, sua catraca deverá ficar travada, e as filas devem estar na ordem de prioridade a seguir: A > B > C > D;
- no máximo, duas catracas poderão estar abertas em um mesmo instante, respeitando-se a ordem de prioridade;
- as catracas das filas A, B, C e D devem ser representadas pelas variáveis C1, C2, C3 e C4, respectivamente;
- o valor de saída 1 deverá indicar que a catraca está aberta, e o valor 0, que a catraca está fechada.`,
    command:
      'Nesse contexto, qual circuito combinatório deverá resolver o problema de acesso dos clientes à sala de alimentação do restaurante da universidade?',
    options: [
      { letter: 'A', text: 'Circuito combinatório A', image: '/images/enade-2017/q19-opt-a.png' },
      { letter: 'B', text: 'Circuito combinatório B', image: '/images/enade-2017/q19-opt-b.png' },
      { letter: 'C', text: 'Circuito combinatório C', image: '/images/enade-2017/q19-opt-c.png' },
      { letter: 'D', text: 'Circuito combinatório D', image: '/images/enade-2017/q19-opt-d.png' },
      { letter: 'E', text: 'Circuito combinatório E', image: '/images/enade-2017/q19-opt-e.png' },
    ],
    correctOption: 'C',
    explanation: `Vamos derivar a expressão booleana exata de cada saída ($C_1, C_2, C_3, C_4$) a partir das regras de prioridade ($A > B > C > D$) e do limite de **no máximo duas catracas abertas simultaneamente**:

1. **Catraca $C_1$ (fila $A$, 1ª prioridade):**
   Sempre que houver cliente em $A$ ($A = 1$), $C_1$ abre (pois é a fila de maior prioridade). Se $A = 0$, fica fechada:
   $$C_1 = A$$

2. **Catraca $C_2$ (fila $B$, 2ª prioridade):**
   Como existe apenas **uma** fila acima de $B$ (a fila $A$) e até **duas** catracas podem ficar abertas simultaneamente, sempre que $B = 1$, $C_2$ abre tanto se $A = 0$ quanto se $A = 1$:
   $$C_2 = \\bar{A}B + AB = B$$
   *(Na alternativa C, o circuito implementa exatamente a forma expandida $\\bar{A}B + AB$, logicamente equivalente a $B$.)*

3. **Catraca $C_3$ (fila $C$, 3ª prioridade):**
   Abre quando $C = 1$ **e** as duas filas superiores ($A$ e $B$) **não** estão ambas ocupadas (ou seja, pelo menos uma entre $A$ e $B$ está vazia):
   $$C_3 = C \\cdot \\overline{(A \\cdot B)} = C(\\bar{A} + \\bar{B}) = \\bar{A}C + \\bar{B}C$$

4. **Catraca $C_4$ (fila $D$, 4ª prioridade):**
   Abre quando $D = 1$ **e** há **no máximo uma** fila ocupada entre $A, B, C$ (equivalentemente, **pelo menos duas** das filas $A, B, C$ estão vazias):
   - $A = 0$ e $B = 0 \\implies \\bar{A}\\bar{B}D$
   - $A = 0$ e $C = 0 \\implies \\bar{A}\\bar{C}D$
   - $B = 0$ e $C = 0 \\implies \\bar{B}\\bar{C}D$

   Logo, em Soma de Produtos (SOP):
   $$C_4 = \\bar{A}\\bar{B}D + \\bar{A}\\bar{C}D + \\bar{B}\\bar{C}D$$

Conferindo os esquemas:
- **Circuito C** implementa exatamente:
  - $C_1 = A$ (conexão direta);
  - $C_2 = \\bar{A}B + AB = B$ (duas portas AND alimentando uma OR);
  - $C_3 = \\bar{A}C + \\bar{B}C$ (duas portas AND alimentando uma OR);
  - $C_4 = \\bar{A}\\bar{B}D + \\bar{A}\\bar{C}D + \\bar{B}\\bar{C}D$ (três portas AND de 3 entradas alimentando uma **OR** de 3 entradas).
- **Atenção à pegadinha da alternativa D!** Na alternativa D, $C_1, C_2, C_3$ estão corretos, mas a porta final de $C_4$ possui uma **bolinha de inversão** (é uma porta **NOR** em vez de **OR**!), fazendo $C_4 = 1$ mesmo quando $D = 0$!

Portanto, o único circuito correto é o da alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Implementa C1 com lógica complexa dependente de outras entradas e utiliza portas inversoras (NOR/NAND) incompatíveis com a prioridade A > B > C > D.',
      B: 'Incorreta. C1 aparece condicionada a portas AND/OR com outras variáveis, violando C1 = A.',
      C: 'Correta. Implementa fielmente C1 = A, C2 = A\'B + AB = B, C3 = A\'C + B\'C e C4 = A\'B\'D + A\'C\'D + B\'C\'D com porta OR na saída de C4.',
      D: 'Incorreta (pegadinha clássica). Apesar de C1 = A, C2 = B e C3 = A\'C + B\'C estarem corretos, a saída de C4 usa uma porta NOR (com bolinha inversora), o que abriria a catraca D quando a fila D estivesse vazia.',
      E: 'Incorreta. Usa porta XOR/OR incorreta em C3 e porta NOR (com inversão na saída) em C4.',
    },
    keyConcept:
      'Projeto combinatório com prioridade (até 2 saídas ativas): C1 = A, C2 = B, C3 = A\'C + B\'C e C4 = A\'B\'D + A\'C\'D + B\'C\'D; atenção redobrada às bolinhas de inversão (OR vs. NOR) nos esquemáticos.',
  },
  {
    id: 'enade-2017-q20',
    source: 'enade-2017',
    year: 2017,
    number: 20,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Linguagens Formais e Compiladores: Expressões Regulares',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Um compilador transforma uma linguagem, em geral textual, em outra linguagem. Um dos tipos de linguagens que um compilador pode transformar são as linguagens regulares, que podem ser descritas utilizando-se expressões regulares compostas por símbolos isolados agrupados com operadores $*$ e $\\cup$ e organizadas com auxílio de parênteses.

Nesse contexto, avalie as afirmações a seguir.

I. A palavra \`10010100\` pertence à linguagem representada por $(100^*)^*$.

II. A palavra \`10010\` pertence à linguagem representada por $(1(10)^*0)^*$.

III. Existe somente uma expressão regular para representar uma linguagem regular.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II, apenas.' },
      { letter: 'C', text: 'I e III, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'A',
    explanation: `Vamos testar cada afirmação usando a semântica formal do fecho de Kleene ($*$):

- **I — Verdadeira:**
  A subexpressão $100^*$ gera o símbolo \`1\`, seguido de um \`0\` obrigatório, seguido de **zero ou mais** \`0\`s: $\\{\\text{10},\\ \\text{100},\\ \\text{1000},\\ \\dots\\}$.
  O fecho externo $(100^*)^*$ concatena zero ou mais palavras desse conjunto.
  Decompondo \`10010100\`:
  $$\\text{10010100} = (\\text{100})\\cdot(\\text{10})\\cdot(\\text{100})$$
  - \`100\` $\\in L(100^*)$ (um \`0\` no fecho $0^*$)
  - \`10\` $\\in L(100^*)$ (zero \`0\`s no fecho $0^*$)
  - \`100\` $\\in L(100^*)$ (um \`0\` no fecho $0^*$)
  Logo, \`10010100\` pertence à linguagem!

- **II — Falsa:**
  A subexpressão $1(10)^*0$ gera palavras da forma \`1\` seguido de $k \\ge 0$ blocos \`10\` e terminadas por \`0\`:
  - $k = 0$: \`10\` (1 uns, 1 zeros)
  - $k = 1$: \`1100\` (2 uns, 2 zeros)
  - $k = 2$: \`110100\` (3 uns, 3 zeros)
  Observe duas invariantes de qualquer palavra em $L((1(10)^*0)^*)$:
  1. Toda subpalavra gerada por $1(10)^*0$ tem exatamente o **mesmo número** de \`1\`s e \`0\`s ($k+1$ de cada), logo toda concatenação também tem quantidade igual de \`1\`s e \`0\`s. Porém, \`10010\` possui **dois** \`1\`s e **três** \`0\`s!
  2. Além disso, após casar o prefixo \`10\`, o restante \`010\` começa com \`0\`, o que é impossível pois cada repetição de $1(10)^*0$ começa obrigatoriamente por \`1\`.
  Logo, \`10010\` **não** pertence à linguagem.

- **III — Falsa:**
  Uma mesma linguagem regular admite **infinitas** expressões regulares equivalentes. Por exemplo, $(a^*)^*$, $a^*$, $(a \\cup \\varepsilon)a^*$ e $a^* \\cup a^*$ denotam exatamente a mesma linguagem.

Portanto, apenas a afirmação **I** é verdadeira (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Apenas I é verdadeira, pois 10010100 = (100)(10)(100) ∈ L((100*)*).',
      B: 'Incorreta. A afirmação II é falsa (10010 não tem número igual de 0s e 1s nem pode ser fatorada em blocos de 1(10)*0) e I é verdadeira.',
      C: 'Incorreta. A afirmação III é falsa porque expressões regulares equivalentes não são únicas.',
      D: 'Incorreta. Tanto II quanto III são falsas.',
      E: 'Incorreta. As afirmações II e III são falsas.',
    },
    keyConcept:
      'Expressões regulares: o operador * repete zero ou mais vezes; uma mesma linguagem regular pode ser descrita por infinitas expressões regulares equivalentes.',
  },
  {
    id: 'enade-2017-q21',
    source: 'enade-2017',
    year: 2017,
    number: 21,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Sistemas Embarcados: Manipulação Bit a Bit de Registradores em C',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Um microcontrolador controla o dispositivo em que ele se encontra embutido através da sua interface de programação de aplicativos (API). Essencialmente, essa interface consiste em um conjunto de registradores de dados, de controle e de estado.

Em um microcontrolador hipotético, os *bits* 5, 4 e 3 do registrador de controle \`MODOEVENTO\` de 16 *bits* controlam a configuração do tipo de evento que gera um gatilho em um pino específico, conforme a seguinte codificação binária:

- \`000\` = desabilitado;
- \`001\` = sensível a borda de subida;
- \`010\` = sensível a borda de descida;
- \`011\` = sensível a ambas as bordas;
- \`100\` = sensível a nível alto;
- \`101\` = sensível a nível baixo.

O *bit* 0, à extrema direita, é o menos significativo, e o *bit* 15, o mais significativo.`,
    command:
      'Considerando-se essa situação e sabendo-se que, em linguagem C, os símbolos |, & e ~ correspondem aos operadores lógicos bit a bit OR, AND e NOT, respectivamente, qual instrução em C deve ser utilizada para configurar o pino, de forma que ele fique sensível a ambas as bordas?',
    options: [
      { letter: 'A', text: '`MODOEVENTO = 0x0018`' },
      { letter: 'B', text: '`MODOEVENTO |= 0x0018`' },
      { letter: 'C', text: '`MODOEVENTO &= ~0x0018`' },
      { letter: 'D', text: '`MODOEVENTO = (MODOEVENTO | 0x0018) & ~0x0038`' },
      { letter: 'E', text: '`MODOEVENTO = (MODOEVENTO & ~0x0038) | 0x0018`' },
    ],
    correctOption: 'E',
    explanation: `Em programação de registradores de controle de microcontroladores em C, devemos alterar **apenas** os bits do campo desejado (bits 5, 4 e 3), **preservando intactos** todos os outros 13 bits de \`MODOEVENTO\`, pelo padrão clássico *read-modify-write* (**limpar a máscara com AND + NOT e depois gravar o valor com OR**):

1. **Posição e pesos dos bits 5, 4 e 3 (16 bits, bit 0 = LSB):**
   - bit 5: $2^5 = 32 = \\text{0x0020}$
   - bit 4: $2^4 = 16 = \\text{0x0010}$
   - bit 3: $2^3 = 8 = \\text{0x0008}$

2. **Máscara do campo completo (bits 5, 4 e 3 em \`1\`):**
   $$\\text{0000 0000 0011 1000}_2 = 32 + 16 + 8 = 56_{10} = \\text{0x0038}$$
   Aplicando \`MODOEVENTO & ~0x0038\`, zeramos **apenas** os bits 5, 4 e 3 (independentemente da configuração anterior, por exemplo \`100\` ou \`101\`), mantendo os demais 13 bits inalterados.

3. **Valor desejado para "sensível a ambas as bordas" (\`011\` nos bits 5, 4, 3):**
   - bit 5 = \`0\`, bit 4 = \`1\`, bit 3 = \`1\`:
   $$\\text{0000 0000 0001 1000}_2 = 16 + 8 = 24_{10} = \\text{0x0018}$$

4. **Combinação correta (limpar primeiro, setar depois):**
   \`\`\`c
   MODOEVENTO = (MODOEVENTO & ~0x0038) | 0x0018;
   \`\`\`

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. A atribuição direta zera todos os outros 13 bits do registrador MODOEVENTO, destruindo configurações de outros pinos/periféricos.',
      B: 'Incorreta. O OR direto ativa os bits 4 e 3, mas não limpa o bit 5: se o campo estivesse em 100 (nível alto) ou 101 (nível baixo), viraria 111 (código inválido) em vez de 011.',
      C: 'Incorreta. Faz AND com ~0x0018, zerando os bits 4 e 3 em vez de configurá-los em 1.',
      D: 'Incorreta. Inverte a ordem das operações: primeiro liga os bits 4 e 3 com | 0x0018 e logo em seguida zera os bits 5, 4 e 3 com & ~0x0038, resultando em 000 (desabilitado).',
      E: 'Correta. Primeiro limpa o campo de 3 bits (5..3) com & ~0x0038 preservando os demais bits, e depois grava 011 com | 0x0018.',
    },
    keyConcept:
      'Manipulação segura de campos de bits em registradores (read-modify-write): REG = (REG & ~MASK) | VALUE — sempre limpar a máscara completa antes de aplicar o OR.',
  },
  {
    id: 'enade-2017-q22',
    source: 'enade-2017',
    year: 2017,
    number: 22,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Linguagem C: Ponteiros e Mapa de Memória 32 bits (Little-Endian)',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'dificil',
    context: `Considere o código em C, a seguir, compilado em um sistema computacional de 32 *bits*, que exemplifica o uso do tipo de dados ponteiro.

\`\`\`c
#include <stdio.h>

void main(void) {
    int salario1, salario2;
    int *ptr;
    salario1 = 6750;
    ptr = &salario1;
    salario2 = *ptr + 1000;
}
\`\`\``,
    command:
      'A partir das informações apresentadas, assinale a opção que apresenta a memória principal e seu conteúdo, após o programa ser executado.',
    options: [
      {
        letter: 'A',
        text: 'Mapa de memória A (little-endian: salario1 = 0x00001A5E, salario2 = 0x00001E46, ptr = 0x00000070)',
        image: '/images/enade-2017/q22-opt-a.png',
      },
      {
        letter: 'B',
        text: 'Mapa de memória B (salario2 = 0x00000458, ptr = 0x00001A5E)',
        image: '/images/enade-2017/q22-opt-b.png',
      },
      {
        letter: 'C',
        text: 'Mapa de memória C (ordem de bytes invertida / big-endian)',
        image: '/images/enade-2017/q22-opt-c.png',
      },
      {
        letter: 'D',
        text: 'Mapa de memória D (big-endian com salario2 = 0x00000AE8 e ptr = 0x00001A5E)',
        image: '/images/enade-2017/q22-opt-d.png',
      },
      {
        letter: 'E',
        text: 'Mapa de memória E (salario2 = 0x00000460, ptr = 0x00001A5E)',
        image: '/images/enade-2017/q22-opt-e.png',
      },
    ],
    correctOption: 'A',
    explanation: `Em um sistema computacional padrão de **32 bits** (arquitetura x86, organização **little-endian**), tanto \`int\` quanto \`int *\` ocupam **4 bytes** (32 bits) na memória principal, com o **byte menos significativo (LSB) armazenado no menor endereço**.

Vamos rastrear cada variável e converter seus valores para hexadecimal (4 bytes):

1. **\`salario1\` (endereços \`0x0070\` a \`0x0073\`):**
   - Valor atribuído: $6750_{10}$.
   - Conversão para hexadecimal:
     $$6750 = 1 \\times 16^3 + 10 \\times 16^2 + 5 \\times 16^1 + 14 \\times 16^0 = 4096 + 2560 + 80 + 14 = \\text{0x00001A5E}$$
   - Disposição *little-endian* (LSB em \`0x0070\` até MSB em \`0x0073\`):
     - \`0x0070\`: \`5E\`
     - \`0x0071\`: \`1A\`
     - \`0x0072\`: \`00\`
     - \`0x0073\`: \`00\`

2. **\`ptr\` (endereços \`0x0078\` a \`0x007B\`):**
   - A instrução \`ptr = &salario1;\` armazena em \`ptr\` o **endereço base** de \`salario1\`, que é \`0x00000070\` (e **não** o conteúdo \`6750\`!).
   - Disposição *little-endian*:
     - \`0x0078\`: \`70\`
     - \`0x0079\`: \`00\`
     - \`0x007A\`: \`00\`
     - \`0x007B\`: \`00\`

3. **\`salario2\` (endereços \`0x0074\` a \`0x0077\`):**
   - O operador de desreferência \`*ptr\` acessa o conteúdo apontado por \`ptr\` (\`salario1 = 6750\`), logo:
     $$\\text{salario2} = 6750 + 1000 = 7750_{10}$$
   - Conversão para hexadecimal:
     $$7750 = 1 \\times 16^3 + 14 \\times 16^2 + 4 \\times 16^1 + 6 \\times 16^0 = 4096 + 3584 + 64 + 6 = \\text{0x00001E46}$$
   - Disposição *little-endian*:
     - \`0x0074\`: \`46\`
     - \`0x0075\`: \`1E\`
     - \`0x0076\`: \`00\`
     - \`0x0077\`: \`00\`

Conferindo os mapas, a alternativa **A** apresenta exatamente os valores corretos de \`salario1\` (\`0x00001A5E\`), \`salario2\` (\`0x00001E46\`) e \`ptr\` (\`0x00000070\`) na convenção *little-endian* (lendo de cima para baixo, do maior ao menor endereço de cada palavra: \`00 00 00 70\`, \`00 00 1E 46\`, \`00 00 1A 5E\`).`,
    optionAnalysis: {
      A: 'Correta. Apresenta salario1 = 0x00001A5E, salario2 = 0x00001E46 e ptr = 0x00000070 em 32 bits little-endian (LSB no menor endereço).',
      B: 'Incorreta. Armazena o valor 0x1A5E (6750) em ptr em vez do endereço 0x0070, e coloca 0x0458 (1112 = 0x70 + 1000) em salario2.',
      C: 'Incorreta segundo o gabarito oficial: inverte a ordem dos bytes (disposição big-endian, com o MSB no menor endereço e LSB no maior endereço), contrariando o padrão little-endian de arquiteturas 32 bits x86.',
      D: 'Incorreta. Além de usar big-endian, armazena o valor 0x1A5E em ptr (em vez do endereço) e apresenta valor errado em salario2 (0x00000AE8).',
      E: 'Incorreta. Armazena o valor 0x1A5E em ptr e 0x0460 (1120) em salario2.',
    },
    keyConcept:
      'Ponteiros em C e representação em memória 32 bits little-endian: &var obtém o endereço inicial, *ptr acessa o valor apontado, e o byte menos significativo ocupa o menor endereço.',
  },
];
