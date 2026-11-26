import type { ObjectiveQuestion } from '../../types/enade';

export const SIMULADO_INEDITO_2_PART_1: ObjectiveQuestion[] = [
  // =========================================================================
  // FORMAÇÃO GERAL (Q01 a Q09)
  // =========================================================================
  {
    id: 'inedita-2-q01',
    source: 'inedita-2',
    year: 2026,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Transição Energética Justa, Matriz Elétrica e ODS 7/13',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `A aceleração das mudanças climáticas colocou a transição energética no centro da agenda internacional — em especial no âmbito dos Objetivos de Desenvolvimento Sustentável **ODS 7** (Energia Limpa e Acessível) e **ODS 13** (Ação contra a Mudança Global do Clima). A tabela a seguir compara a participação aproximada de fontes na **matriz elétrica** (geração de eletricidade) no Brasil e na média mundial.

| Fonte de Geração Elétrica | Matriz Elétrica Brasileira (%) | Matriz Elétrica Mundial (%) |
| --- | :---: | :---: |
| Hidráulica | 60,1 | 15,0 |
| Eólica e Solar Fotovoltaica | 21,4 | 13,4 |
| Biomassa e outras renováveis | 7,7 | 2,6 |
| Gás Natural, Carvão e Petróleo (fósseis) | 8,6 | 59,9 |
| Nuclear | 2,2 | 9,1 |

*Fontes: Balanço Energético Nacional (EPE) e International Energy Agency (IEA), síntese comparativa (dados adaptados).*

Apesar da posição vantajosa do Brasil na geração renovável, especialistas alertam que a expansão de parques eólicos, usinas solares e cadeias de hidrogênio verde requer planejamento socioambiental para evitar conflitos fundiários, impactos sobre comunidades tradicionais e novas formas de dependência tecnológica.

Considerando a tabela e o texto, avalie as afirmações a seguir.

**I.** A matriz elétrica brasileira apresenta participação de fontes renováveis superior a 85%, contrastando com o cenário mundial, ainda fortemente dependente de combustíveis fósseis.

**II.** A expressiva participação das fontes eólica e solar no Brasil dispensa investimentos em armazenamento de energia, modernização de linhas de transmissão e diversificação da matriz, visto que tais fontes oferecem geração constante ao longo das 24 horas do dia.

**III.** O conceito de transição energética justa implica conciliar a descarbonização da economia com a proteção de direitos territoriais, a geração de empregos qualificados e o desenvolvimento tecnológico local.

**IV.** Embora a matriz elétrica brasileira seja predominantemente renovável, a redução das emissões totais de gases de efeito estufa no país depende também de outros setores, como mudanças no uso da terra, agropecuária e transportes.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e III.' },
      { letter: 'C', text: 'I, III e IV.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação à luz dos dados da tabela e do debate contemporâneo sobre transição energética e ODS:

- **Afirmação I (VERDADEIRA):** Somando as fontes renováveis na matriz elétrica brasileira apresentadas na tabela: $60,1\\% + 21,4\\% + 7,7\\% = 89,2\\%$ (acima de 85%). Na média mundial, o total renovável soma $15,0\\% + 13,4\\% + 2,6\\% = 31,0\\%$, enquanto os combustíveis fósseis respondem por $59,9\\%$.
- **Afirmação II (FALSA):** Fontes solar fotovoltaica e eólica são **intermitentes/variáveis** (dependem de radiação solar e regime de ventos). Justamente por isso, sua expansão **exige** investimentos em redes inteligentes (*smart grids*), linhas de transmissão robustas, sistemas de armazenamento (baterias, usinas reversíveis) e complementaridade hídrica/biomassa para garantir segurança energética.
- **Afirmação III (VERDADEIRA):** A transição energética justa não se limita à troca tecnológica de fontes fósseis por renováveis; ela exige justiça socioambiental, mitigação de conflitos fundiários com comunidades locais, requalificação da força de trabalho e agregação de valor tecnológico no país.
- **Afirmação IV (VERDADEIRA):** A matriz *elétrica* é apenas parte da matriz *energética* e do inventário nacional de emissões. No Brasil, a maior parcela das emissões de gases de efeito estufa decorre do desmatamento/mudança do uso da terra, da agropecuária e da queima de combustíveis fósseis no transporte rodoviário.

Portanto, estão corretas apenas **I, III e IV** (alternativa **C**).`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a afirmação II, que erra ao classificar fontes solar e eólica como constantes nas 24 horas e dispensar infraestrutura de rede/armazenamento.',
      B: 'Incorreta. Inclui a afirmação II (falsa) e omite I e IV.',
      C: 'Correta. Reúne exatamente as afirmações I (comprovada pela tabela: 89,2% renovável no Brasil), III (transição justa) e IV (emissões além do setor elétrico).',
      D: 'Incorreta. Inclui a afirmação II (falsa) e omite III.',
      E: 'Incorreta. Inclui a afirmação II (falsa) e omite I.',
    },
    keyConcept: 'Transição energética justa (ODS 7 e ODS 13), intermitência de fontes renováveis variáveis e diferença entre matriz elétrica e emissões totais de GEE.',
    reference: 'EPE — Balanço Energético Nacional; IEA — World Energy Outlook (dados sintetizados para fins didáticos).',
  },
  {
    id: 'inedita-2-q02',
    source: 'inedita-2',
    year: 2026,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Economia Circular, Lixo Eletrônico (REEE) e Logística Reversa',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `De acordo com relatórios da Organização das Nações Unidas (Global E-waste Monitor), o volume mundial de resíduos de equipamentos eletroeletrônicos (REEE) ultrapassou 60 milhões de toneladas anuais, crescendo cinco vezes mais rápido do que a taxa documentada de reciclagem formal. O descarte inadequado de placas de circuito impresso, baterias e telas libera metais pesados — como chumbo, mercúrio e cádmio — no solo e nos lençóis freáticos, ao mesmo tempo em que desperdiça matérias-primas críticas, como ouro, cobre, cobalto e elementos de terras raras.

Nesse contexto, a transição do modelo linear ("extrair–produzir–descartar") para a **economia circular** e o cumprimento da Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) tornam-se imperativos técnicos, econômicos e socioambientais.

Com base no texto, avalie as asserções a seguir e a relação proposta entre elas.

**I.** A adoção de projetos orientados à modularidade, à reparabilidade e à logística reversa de equipamentos eletroeletrônicos contribui tanto para a mitigação de impactos ambientais quanto para a segurança no suprimento de minerais estratégicos.

**PORQUE**

**II.** Ao prolongar o ciclo de vida útil dos dispositivos e viabilizar a recuperação de metais valiosos por meio da mineração urbana, reduzem-se simultaneamente o descarte de substâncias tóxicas no ambiente e a pressão extrativa sobre jazidas naturais finitas.`,
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
    explanation: `Vamos analisar o valor lógico de cada proposição e o nexo causal (*PORQUE*):

1. **Asserção I (VERDADEIRA):** O *ecodesign* voltado à modularidade (facilidade de troca de bateria, memória ou módulos) e à reparabilidade (*right to repair*), combinado à logística reversa prevista na PNRS, ataca diretamente a obsolescência prematura e cria um fluxo organizado de retorno dos equipamentos, beneficiando o meio ambiente e a disponibilidade de metais estratégicos.
2. **Asserção II (VERDADEIRA):** A extensão da vida útil reduz a geração de REEE (e, consequentemente, a liberação de metais pesados como chumbo, mercúrio e cádmio), enquanto a **mineração urbana** recupera ouro, cobre, cobalto e terras raras das placas eletrônicas descartadas, aliviando a dependência da mineração primária.
3. **Relação de causalidade (CORRETA):** A asserção II explica *exatamente por que* as medidas da asserção I (modularidade, reparabilidade e logística reversa) produzem os dois benefícios citados em I (mitigação ambiental e segurança de minerais estratégicos).

Logo, ambas são verdadeiras e a II justifica corretamente a I — alternativa **A**.`,
    optionAnalysis: {
      A: 'Correta. Tanto I quanto II são verdadeiras e há nexo explicativo direto entre prolongar vida útil / fazer mineração urbana (II) e mitigar impactos ambientais + assegurar minerais estratégicos (I).',
      B: 'Incorreta. Nega indevidamente a relação causal clara entre as duas asserções.',
      C: 'Incorreta. A asserção II é verdadeira, refletindo os princípios centrais da economia circular aplicada ao REEE.',
      D: 'Incorreta. A asserção I é verdadeira e coerente com o texto e com a PNRS (Lei nº 12.305/2010).',
      E: 'Incorreta. Ambas as proposições são corretas.',
    },
    keyConcept: 'Economia circular aplicada a eletrônicos (REEE), ecodesign/reparabilidade, mineração urbana e logística reversa (PNRS).',
    reference: 'UNITAR/ITU — Global E-waste Monitor; Brasil — Lei nº 12.305/2010 (PNRS).',
  },
  {
    id: 'inedita-2-q03',
    source: 'inedita-2',
    year: 2026,
    number: 3,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Desigualdade de Renda, Índice de Gini e Interpretação de Indicadores Sociais',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `O **Índice de Gini** é uma medida estatística amplamente utilizada para mensurar o grau de concentração de renda em uma população, variando de $0$ (igualdade perfeita, em que todos recebem exatamente a mesma renda) a $1$ (desigualdade máxima, em que um único indivíduo concentra toda a renda). A tabela abaixo apresenta dados simulados inspirados na Síntese de Indicadores Sociais para quatro municípios brasileiros de porte populacional semelhante.

| Município | Renda domiciliar per capita média (em reais) | Renda dos 10% mais ricos / 40% mais pobres (razão) | Índice de Gini | Taxa de escolarização no Ensino Médio (%) |
| --- | :---: | :---: | :---: | :---: |
| Alfa | 2 400 | 18,5 | 0,58 | 74,0 |
| Beta | 2 150 | 7,2 | 0,39 | 91,5 |
| Gama | 1 600 | 14,8 | 0,52 | 79,2 |
| Delta | 1 950 | 10,1 | 0,44 | 86,0 |

Com base exclusivamente nos dados da tabela e nos fundamentos de análise socioeconômica, assinale a alternativa correta.`,
    command: 'A interpretação correta dos indicadores apresentados na tabela permite concluir que',
    options: [
      {
        letter: 'A',
        text: 'o município Alfa apresenta o melhor desempenho distributivo, pois possui a maior renda domiciliar per capita média entre os quatro avaliados.',
      },
      {
        letter: 'B',
        text: 'o município Gama exibe a maior concentração de renda da amostra, em razão de possuir a menor renda domiciliar per capita média.',
      },
      {
        letter: 'C',
        text: 'o Índice de Gini de Beta (0,39) indica que 39% da população desse município encontra-se abaixo da linha de pobreza extrema.',
      },
      {
        letter: 'D',
        text: 'embora Alfa tenha a maior renda média, Beta apresenta menor desigualdade de renda e maior taxa de escolarização no Ensino Médio, evidenciando que a renda média isolada pode mascarar disparidades internas.',
      },
      {
        letter: 'E',
        text: 'os dados demonstram correlação positiva perfeita entre renda média elevada e baixa concentração de renda, de modo que quanto maior a renda média, menor tende a ser o Índice de Gini.',
      },
    ],
    correctOption: 'D',
    explanation: `A leitura crítica de indicadores socioeconômicos requer distinguir **nível médio** de **distribuição**:

- **Média vs. Desigualdade:** O município **Alfa** tem a maior renda domiciliar *per capita* média (R$ 2 400), porém registra o **pior** Índice de Gini ($0,58$) e a maior razão entre os 10% mais ricos e os 40% mais pobres ($18,5$), além da menor escolarização no Ensino Médio ($74,0\\%$). Isso ilustra um fenômeno clássico: a média aritmética é fortemente puxada para cima por rendas muito elevadas no topo, podendo ocultar profunda desigualdade interna.
- **Desempenho de Beta:** Com renda média ligeiramente menor que Alfa (R$ 2 150), **Beta** apresenta o menor Índice de Gini ($0,39$), a menor razão $10\\%/40\\%$ ($7,2$) e a maior escolarização no Ensino Médio ($91,5\\%$).
- **Significado do Gini:** O Índice de Gini **não** é um percentual da população na pobreza; trata-se de um coeficiente adimensional entre $0$ e $1$ associado à área entre a curva de Lorenz e a linha de igualdade perfeita.

Portanto, a única interpretação correta é a alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Alfa tem a maior renda média, mas o PIOR desempenho distributivo (maior Gini = 0,58 e maior razão 10%/40% = 18,5).',
      B: 'Incorreta. Gama tem a menor renda média, mas a maior concentração de renda é de Alfa (Gini 0,58 > 0,52).',
      C: 'Incorreta. Erro conceitual clássico: o Índice de Gini mede concentração/desigualdade relativa (0 a 1), e não taxa de pobreza extrema.',
      D: 'Correta. Sintetiza com rigor os dados da tabela e o limite analítico da média aritmética na avaliação do desenvolvimento social.',
      E: 'Incorreta. A tabela mostra exatamente o contrário em Alfa: ele tem a maior renda média e também o maior Índice de Gini.',
    },
    keyConcept: 'Índice de Gini como medida de desigualdade distributiva e a insuficiência da renda média per capita isolada para avaliar bem-estar social.',
    reference: 'IBGE — Síntese de Indicadores Sociais (conceitos metodológicos do Índice de Gini e razão de renda).',
  },
  {
    id: 'inedita-2-q04',
    source: 'inedita-2',
    year: 2026,
    number: 4,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saúde Mental, Hiperconectividade e Economia da Atenção',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Na chamada **economia da atenção**, plataformas digitais estruturam seus modelos de negócio em torno da maximização do tempo de permanência e do engajamento dos usuários, valendo-se de mecanismos de design persuasivo — como rolagem infinita, notificações intermitentes e feeds personalizados por algoritmos de recomendação. Estudos interdisciplinares em saúde pública, psicologia e computação têm associado o uso compulsivo de telas, especialmente entre crianças e adolescentes, a distúrbios do sono, quadros de ansiedade, redução da capacidade de concentração sustentada e exposição a conteúdos nocivos.

Em resposta a esse cenário, diversos países passaram a discutir marcos regulatórios de proteção a menores no ambiente digital, restrições ao uso não pedagógico de celulares em escolas e diretrizes de *design ético* na engenharia de software.

Considerando o texto e os debates contemporâneos sobre tecnologia e saúde mental, avalie as afirmações a seguir.

**I.** Os mecanismos de recompensa variável presentes em feeds algorítmicos exploram vulnerabilidades cognitivas para ampliar o tempo de tela, convertendo a atenção do usuário em ativo econômico monetizável por publicidade e dados comportamentais.

**II.** O enfrentamento dos impactos psicossociais da hiperconectividade exige ações articuladas que envolvam educação midiática, mediação familiar, regulação transparente das plataformas e responsabilidade ética no projeto de interfaces digitais.

**III.** A proibição absoluta do acesso de jovens a qualquer recurso digital nas escolas constitui a única medida eficaz para o problema, pois tecnologias digitais são intrinsecamente incompatíveis com processos de aprendizagem e socialização.

**IV.** O engajamento algorítmico opera de maneira estritamente neutra do ponto de vista emocional, priorizando sempre conteúdos informativos equilibrados em detrimento de postagens que despertam indignação ou comparação social.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I e II.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'B',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** O modelo econômico baseado em publicidade direcionada e coleta de dados comportamentais incentiva técnicas de design persuasivo (como reforço intermitente e *infinite scroll*) para reter a atenção humana, tratada como recurso escasso e monetizável.
- **Afirmação II (VERDADEIRA):** Por se tratar de um fenômeno sociotécnico complexo, a resposta adequada é multidimensional: envolve letramento digital/midiático, participação das famílias e escolas, regulação com transparência algorítmica e adoção de boas práticas éticas pelos engenheiros que projetam as interfaces (*safety by design*).
- **Afirmação III (FALSA):** Tecnologias digitais, quando usadas com intencionalidade pedagógica e mediação adequada, são ferramentas valiosas para inclusão, pesquisa e aprendizagem. A restrição do uso recreativo/não pedagógico de celulares em sala de aula não se confunde com a proibição absoluta de recursos digitais educacionais.
- **Afirmação IV (FALSA):** Sistemas de recomendação otimizados para maximizar tempo de tela e interações frequentemente amplificam conteúdos de alta carga emocional (indignação, polarização, padrões estéticos irreais), demonstrando que algoritmos orientados a engajamento **não** são neutros.

Portanto, estão corretas apenas **I e II** (alternativa **B**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação III é falsa por adotar postura determinista e extremada contra qualquer uso pedagógico de tecnologias digitais.',
      B: 'Correta. Apenas I e II caracterizam adequadamente a economia da atenção e as abordagens integradas de proteção à saúde mental.',
      C: 'Incorreta. A afirmação IV é falsa, pois algoritmos voltados ao engajamento tendem a amplificar estímulos emocionalmente polarizadores.',
      D: 'Incorreta. Inclui a afirmação IV, que é falsa.',
      E: 'Incorreta. Inclui as afirmações III e IV, ambas falsas.',
    },
    keyConcept: 'Economia da atenção, design persuasivo, saúde mental na hiperconectividade e abordagem multidisciplinar (educação, regulação e ética em engenharia).',
    reference: 'UNESCO — Relatório de Monitoramento Global da Educação (Tecnologia na Educação); OMS — Diretrizes sobre saúde digital e bem-estar juvenil.',
  },
  {
    id: 'inedita-2-q05',
    source: 'inedita-2',
    year: 2026,
    number: 5,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Ética em Inteligência Artificial, Viés Algorítmico e LGPD',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um órgão público implementou um sistema automatizado baseado em aprendizado de máquina para triagem de pedidos de benefícios sociais e outro módulo de reconhecimento facial para controle de acesso a serviços presenciais. Após seis meses de operação, uma auditoria independente identificou dois problemas graves:

1. O modelo de triagem apresentava taxa significativamente maior de indeferimentos indevidos para moradores de regiões periféricas, em decorrência de dados históricos enviesados e registros incompletos usados no treinamento.
2. Cidadãos cujos pedidos foram negados automaticamente não recebiam qualquer explicação compreensível sobre os critérios adotados nem dispunham de canal para contestar ou solicitar reavaliação da decisão.

À luz da ética em tecnologia e da Lei Geral de Proteção de Dados Pessoais — **LGPD (Lei nº 13.709/2018)** —, assinale a alternativa que apresenta a análise correta da situação.`,
    command: 'Considerando os princípios de governança de dados e a LGPD, conclui-se que',
    options: [
      {
        letter: 'A',
        text: 'os resultados do sistema de triagem são isentos de responsabilidade institucional, pois modelos estatísticos operam por cálculos matemáticos objetivos e imunes a desigualdades sociais.',
      },
      {
        letter: 'B',
        text: 'a administração pública está integralmente dispensada de cumprir os princípios de transparência, necessidade e não discriminação da LGPD quando executa políticas públicas.',
      },
      {
        letter: 'C',
        text: 'os dados biométricos coletados para reconhecimento facial classificam-se como dados anônimos comuns, podendo ser livremente compartilhados com empresas privadas sem base legal específica.',
      },
      {
        letter: 'D',
        text: 'o único requisito legal para regularizar o sistema é obter o consentimento genérico do cidadão em um termo de adesão, dispensando auditorias de viés ou explicabilidade das decisões.',
      },
      {
        letter: 'E',
        text: 'o sistema viola princípios como transparência e não discriminação, além de desrespeitar o direito do titular de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais.',
      },
    ],
    correctOption: 'E',
    explanation: `A situação descrita reúne violações centrais da ética em IA e da **LGPD (Lei nº 13.709/2018)**:

1. **Princípio da não discriminação (Art. 6º, IX):** A LGPD veda expressamente o tratamento de dados pessoais para fins discriminatórios ilícitos ou abusivos. Dados históricos enviesados e incompletos perpetuam e automatizam desigualdades socioespaciais (*viés algorítmico*).
2. **Princípio da transparência e explicabilidade (Art. 6º, VI) e Direito à revisão de decisões automatizadas (Art. 20):** O titular tem direito de solicitar a revisão de decisões tomadas **unicamente** com base em tratamento automatizado de dados pessoais que afetem seus interesses, devendo o controlador fornecer informações claras e adequadas sobre os critérios e procedimentos utilizados.
3. **Dados biométricos são dados pessoais sensíveis (Art. 5º, II):** Reconhecimento facial envolve dado biométrico vinculado a pessoa natural, exigindo salvaguardas reforçadas e base legal estrita — jamais podendo ser tratado como dado anônimo comum.
4. **Setor público também se submete à LGPD (Arts. 23 a 30):** Órgãos públicos têm bases legais próprias (como execução de políticas públicas), mas continuam plenamente obrigados a observar finalidade, adequação, necessidade, transparência, segurança e não discriminação.

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Mito da neutralidade algorítmica: modelos treinados com dados históricos enviesados reproduzem e amplificam desigualdades, mantendo-se a responsabilidade jurídica e ética do controlador.',
      B: 'Incorreta. O poder público é expressamente abrangido pela LGPD (Capítulo IV) e deve cumprir seus princípios fundamentais.',
      C: 'Incorreta. Dados biométricos (como geometria facial) são classificados pela LGPD como dados pessoais sensíveis, com proteção reforçada.',
      D: 'Incorreta. Consentimento genérico é nulo na LGPD (Art. 8º, § 4º) e não substitui auditoria, segurança, não discriminação nem direito à revisão.',
      E: 'Correta. Identifica exatamente os princípios violados (transparência e não discriminação) e o direito previsto no Art. 20 da LGPD quanto a decisões automatizadas.',
    },
    keyConcept: 'Viés algorítmico, dados pessoais sensíveis (biometria) e direitos previstos na LGPD (não discriminação, transparência e revisão de decisões automatizadas — Art. 20).',
    reference: 'Brasil — Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).',
  },
  {
    id: 'inedita-2-q06',
    source: 'inedita-2',
    year: 2026,
    number: 6,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Patrimônio Cultural, Memória Coletiva e Tecnologias de Preservação Digital',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `Após incidentes graves em acervos históricos — como incêndios em museus e a degradação de edificações centenárias —, técnicas de escaneamento a laser 3D (*LiDAR*), fotogrametria de alta resolução e bancos de dados abertos passaram a ser amplamente empregados na documentação do patrimônio cultural brasileiro. Além de gerar réplicas digitais precisas de monumentos e objetos, essas tecnologias viabilizam visitas virtuais acessíveis a estudantes de regiões distantes e a pessoas com mobilidade reduzida.

Entretanto, pesquisadores do campo da memória social ressaltam que o patrimônio cultural — tanto material quanto imaterial, a exemplo de saberes tradicionais, festas populares e línguas indígenas — existe como prática viva em constante diálogo com as comunidades que lhe atribuem sentido.

A partir do texto, avalie as asserções a seguir e a relação proposta entre elas.

**I.** A digitalização tridimensional de monumentos e a criação de museus virtuais tornam dispensáveis as políticas públicas de conservação física dos bens materiais e de salvaguarda das práticas comunitárias do patrimônio imaterial.

**PORQUE**

**II.** Recursos digitais como fotogrametria, modelagem 3D e repositórios abertos funcionam como instrumentos complementares de registro, pesquisa e democratização do acesso à memória cultural, ampliando o alcance educativo do patrimônio.`,
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
    explanation: `Analisando independentemente cada asserção:

1. **Asserção I (FALSA):** A preservação digital **jamais substitui** a conservação física dos bens materiais (manutenção preventiva, sistemas contra incêndio, restauração) nem as políticas de salvaguarda do patrimônio imaterial, que depende da continuidade viva das comunidades detentoras dos saberes, ofícios e expressões culturais.
2. **Asserção II (VERDADEIRA):** O escaneamento 3D, a fotogrametria e os repositórios abertos atuam de modo **complementar**, oferecendo registro detalhado (útil inclusive em eventuais restauros), apoio à pesquisa científica e democratização do acesso para populações distantes ou com deficiência/mobilidade reduzida.

Logo, a asserção I é **falsa** e a asserção II é **verdadeira** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Classifica a asserção I como verdadeira; a tecnologia digital não dispensa a preservação física nem a salvaguarda comunitária.',
      B: 'Incorreta. Igualmente trata a asserção I como verdadeira.',
      C: 'Incorreta. Inverte exatamente os valores lógicos das duas proposições.',
      D: 'Correta. I é falsa (digitalização não substitui conservação física nem vivência cultural) e II é verdadeira (atua como ferramenta complementar de registro e democratização).',
      E: 'Incorreta. A asserção II está completamente de acordo com o texto e com a política contemporânea de patrimônio.',
    },
    keyConcept: 'Preservação digital como instrumento complementar — e não substituto — da conservação do patrimônio cultural material e imaterial.',
    reference: 'IPHAN — Patrimônio Material e Imaterial; UNESCO — Carta sobre a Preservação do Patrimônio Digital.',
  },
  {
    id: 'inedita-2-q07',
    source: 'inedita-2',
    year: 2026,
    number: 7,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Educação Científica, Desinformação e Letramento Midiático',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `A popularização de ferramentas de inteligência artificial generativa reduziu drasticamente o custo e a barreira técnica para a produção de textos persuasivos, áudios clonados e vídeos sintéticos hiper-realistas (*deepfakes*). Quando combinados a redes automatizadas de disparo e bolhas informacionais, esses conteúdos potencializam campanhas de desinformação capazes de comprometer coberturas vacinais, distorcer debates climáticos e fragilizar processos democráticos.

Para enfrentar esse fenômeno, especialistas em comunicação, computação e educação defendem uma estratégia que combine desenvolvimento de ferramentas de verificação e proveniência de mídia, transparência das plataformas e fortalecimento da **educação científica e do letramento midiático** desde a educação básica.

Com base no texto, avalie as afirmações a seguir.

**I.** A educação científica contribui para reduzir a vulnerabilidade à desinformação ao desenvolver a compreensão do método científico, da revisão por pares e da distinção entre evidência empírica e opinião sem lastro.

**II.** O letramento midiático capacita cidadãos a checar fontes, reconhecer indícios de manipulação sintética e avaliar criticamente o contexto e os interesses por trás de conteúdos compartilhados em redes digitais.

**III.** Soluções puramente técnicas de detecção automática de *deepfakes* são suficientes para erradicar a desinformação em definitivo, tornando secundários os investimentos em formação crítica dos usuários.

**IV.** O enfrentamento da desinformação relaciona-se diretamente à cidadania e à saúde pública, uma vez que boatos sobre vacinas, tratamentos sem comprovação e eventos extremos podem gerar danos concretos à população.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I, II e IV.' },
      { letter: 'B', text: 'I e III.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'A',
    explanation: `Avaliando cada afirmação:

- **Afirmação I (VERDADEIRA):** Compreender como o conhecimento científico é construído, testado, revisado por pares e atualizado diante de novas evidências fortalece a autonomia crítica frente ao negacionismo e a alegações pseudocientíficas.
- **Afirmação II (VERDADEIRA):** O letramento midiático e informacional (*Media and Information Literacy*) envolve habilidades práticas de verificação de fontes, leitura lateral, identificação de manipulações e análise dos incentivos de circulação da informação.
- **Afirmação III (FALSA):** Detectores automáticos enfrentam uma corrida armamentista contínua contra modelos generativos cada vez mais realistas (gerando falsos positivos e falsos negativos), além de não resolverem o aspecto social/cognitivo (viés de confirmação). Portanto, soluções exclusivamente técnicas **não** bastam.
- **Afirmação IV (VERDADEIRA):** A desinformação tem consequências materiais diretas, como queda em taxas de vacinação, adesão a terapias ineficazes e desconfiança frente a alertas climáticos e instituições democráticas.

Logo, estão corretas apenas **I, II e IV** (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Reúne as três afirmações verdadeiras (I, II e IV) e descarta III (solucionismo tecnológico ingênuo).',
      B: 'Incorreta. Inclui III (falsa) e omite II e IV.',
      C: 'Incorreta. Inclui III (falsa) e omite I e IV.',
      D: 'Incorreta. Inclui III (falsa) e omite II.',
      E: 'Incorreta. Inclui III (falsa) e omite I.',
    },
    keyConcept: 'Educação científica, letramento midiático e limites do solucionismo puramente técnico no combate à desinformação e a deepfakes.',
    reference: 'UNESCO — Alfabetização Midiática e Informacional; Fiocruz — Observatório sobre Desinformação em Saúde.',
  },
  {
    id: 'inedita-2-q08',
    source: 'inedita-2',
    year: 2026,
    number: 8,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Mobilidade Urbana, Cidades Inteligentes e Justiça Espacial',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Nas grandes regiões metropolitanas brasileiras, o tempo gasto diariamente no deslocamento casa–trabalho reflete diretamente a segregação socioespacial: populações de menor renda, frequentemente empurradas para franjas periféricas distantes dos polos de emprego, chegam a despender mais de duas horas diárias no transporte coletivo. Em paralelo, o debate sobre **cidades inteligentes** (*smart cities*) tem incorporado sensores de tráfego, bilhetagem eletrônica integrada, dados abertos de geolocalização de frotas e aplicativos de roteirização em tempo real.

Contudo, urbanistas destacam que a tecnologia urbana só promove efetiva **justiça espacial** quando subordinada a diretrizes de mobilidade sustentável — como priorização viária para o transporte público coletivo, integração tarifária e infraestrutura segura para a mobilidade ativa (caminhada e bicicleta) —, em conformidade com a Política Nacional de Mobilidade Urbana (Lei nº 12.587/2012).`,
    command: 'Com base no texto e nos princípios de mobilidade urbana sustentável, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'O conceito de cidade inteligente restringe-se à instalação de semáforos conectados e aplicativos de tráfego para ampliar a fluidez de automóveis individuais.',
      },
      {
        letter: 'B',
        text: 'A expansão contínua de vias expressas dedicadas ao transporte individual motorizado elimina estruturalmente os congestionamentos e reduz as desigualdades de acesso à cidade.',
      },
      {
        letter: 'C',
        text: 'A combinação entre tecnologias de monitoramento em tempo real e políticas de prioridade ao transporte coletivo e ativo contribui para reduzir tempos de deslocamento, emissões poluentes e desigualdades socioespaciais.',
      },
      {
        letter: 'D',
        text: 'O tempo elevado de deslocamento das populações periféricas decorre exclusivamente de escolhas individuais de moradia, não guardando relação com o custo do solo urbano nem com o planejamento de transportes.',
      },
      {
        letter: 'E',
        text: 'A Política Nacional de Mobilidade Urbana estabelece prioridade legal ao transporte individual motorizado sobre os modos não motorizados e o transporte público coletivo.',
      },
    ],
    correctOption: 'C',
    explanation: `Analisando a articulação entre cidades inteligentes, mobilidade sustentável e justiça espacial:

- A **Política Nacional de Mobilidade Urbana (Lei nº 12.587/2012, Art. 6º)** determina expressamente a **prioridade dos modos de transportes não motorizados sobre os motorizados** e dos **serviços de transporte público coletivo sobre o transporte individual motorizado**.
- O fenômeno da **demanda induzida** mostra que ampliar indefinidamente faixas para automóveis individuais tende a atrair mais carros e reproduzir congestionamentos, sem resolver a exclusão das periferias.
- Quando tecnologias de *smart cities* (dados abertos de frotas, prioridade semafórica para ônibus/BRT, bilhetagem integrada e análise de matriz origem-destino) são aplicadas para qualificar o transporte coletivo e a mobilidade ativa, reduzem-se tempos de viagem, emissões de gases de efeito estufa e desigualdades no direito à cidade.

Logo, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Reduz cidade inteligente a soluções focadas em carros individuais, ignorando sua dimensão social, ambiental e coletiva.',
      B: 'Incorreta. A ampliação viária voltada a carros gera demanda induzida, agrava emissões e não corrige a desigualdade de acesso.',
      C: 'Correta. Alinha o uso de dados e tecnologia urbana à prioridade do transporte coletivo e ativo, promovendo eficiência, sustentabilidade e justiça espacial.',
      D: 'Incorreta. Desconsidera a especulação imobiliária, o custo da terra urbana e a concentração de empregos nas áreas centrais.',
      E: 'Incorreta. Inverte exatamente a diretriz legal da Lei nº 12.587/2012, que prioriza modos ativos e transporte público coletivo.',
    },
    keyConcept: 'Cidades inteligentes centradas nas pessoas, justiça espacial e prioridade legal do transporte coletivo e ativo (Lei nº 12.587/2012).',
    reference: 'Brasil — Lei nº 12.587/2012 (Política Nacional de Mobilidade Urbana); IPEA — Mobilidade Urbana no Brasil.',
  },
  {
    id: 'inedita-2-q09',
    source: 'inedita-2',
    year: 2026,
    number: 9,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Trabalho Mediado por Plataformas Digitais, Gestão Algorítmica e Direitos Sociais',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Nos últimos anos, expandiu-se globalmente o trabalho mediado por plataformas digitais — tanto em serviços presenciais sob demanda (entregas e transporte de passageiros) quanto em microtarefas remotas, incluindo a rotulagem de dados que alimenta sistemas de inteligência artificial. Embora frequentemente apresentado sob o discurso da autonomia e da flexibilidade de horários, esse arranjo caracteriza-se pela chamada **gestão algorítmica do trabalho**: softwares definem dinamicamente tarifas, distribuem demandas, monitoram métricas de desempenho em tempo real e aplicam sanções automáticas, como redução de ofertas ou bloqueios de conta, muitas vezes sem transparência ou direito prévio de defesa.

Ao mesmo tempo, a ausência de proteção previdenciária regular, a transferência dos custos de equipamento e manutenção ao trabalhador e jornadas extensas para compensar a remuneração variável impulsionaram debates legislativos e judiciais sobre novas formas de regulação do trabalho digital.`,
    command: 'Considerando o fenômeno descrito no texto, assinale a alternativa que interpreta corretamente as tensões contemporâneas do trabalho plataformizado.',
    options: [
      {
        letter: 'A',
        text: 'A intermediação por aplicativos elimina qualquer forma de controle ou subordinação sobre o trabalhador, garantindo-lhe plena autonomia sobre preços, critérios de avaliação e continuidade na plataforma.',
      },
      {
        letter: 'B',
        text: 'A gestão algorítmica combina discurso de flexibilidade com mecanismos automatizados de controle e precificação opacos, exigindo debates regulatórios que assegurem transparência, remuneração justa e proteção social.',
      },
      {
        letter: 'C',
        text: 'O avanço da inteligência artificial prescinde inteiramente do trabalho humano de curadoria e rotulagem de dados, concentrando o trabalho plataformizado apenas em atividades de transporte urbano.',
      },
      {
        letter: 'D',
        text: 'Os riscos econômicos e operacionais da atividade plataformizada — como depreciação de veículos, combustível, conectividade e acidentes — são integralmente absorvidos pelas empresas controladoras dos aplicativos.',
      },
      {
        letter: 'E',
        text: 'A regulação do trabalho em plataformas digitais é incompatível com a inovação tecnológica, razão pela qual organismos internacionais recomendam a extinção de direitos previdenciários nesse setor.',
      },
    ],
    correctOption: 'B',
    explanation: `O texto evidencia o paradoxo central do trabalho mediado por plataformas digitais (frequentemente discutido pela OIT e pela sociologia do trabalho contemporânea):

- **Autonomia aparente vs. gestão algorítmica:** Embora o trabalhador escolha quando se conectar, o algoritmo controla a distribuição das tarefas, calcula preços dinâmicos de forma opaca, impõe metas indiretas por meio de pontuações e pode promover desligamentos automatizados (*desativação sem contraditório*).
- **Transferência de riscos e custos:** Equipamentos, internet, manutenção, combustível e riscos de afastamento por doença ou acidente costumam recair sobre o trabalhador.
- **Invisibilidade do trabalho de dados:** Mesmo cadeias avançadas de IA dependem fortemente de trabalho humano remoto de rotulagem, moderação e avaliação de saídas (*crowdwork* / *data labeling*).
- **Desafio regulatório:** Organismos como a OIT defendem marcos que conciliem inovação e flexibilidade com transparência algorítmica, direito de contestação, piso remuneratório e inclusão previdenciária.

Portanto, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Contraria diretamente o texto: tarifas, distribuição de tarefas e sanções são controladas unilateralmente pelos algoritmos da plataforma.',
      B: 'Correta. Sintetiza com precisão o mecanismo da gestão algorítmica, a tensão entre flexibilidade e controle opaco e a agenda regulatória de proteção social.',
      C: 'Incorreta. O texto menciona explicitamente microtarefas remotas e rotulagem de dados que alimentam sistemas de IA.',
      D: 'Incorreta. Na prática, tais custos e riscos são majoritariamente transferidos ao trabalhador.',
      E: 'Incorreta. Organismos internacionais como a OIT defendem o oposto: extensão de proteção social e trabalho decente ao setor digital.',
    },
    keyConcept: 'Gestão algorítmica do trabalho, assimetria de informação em plataformas digitais, trabalho invisível de dados para IA e regulação de direitos sociais.',
    reference: 'OIT — World Employment and Social Outlook: The role of digital labour platforms in transforming the world of work.',
  },

  // =========================================================================
  // COMPONENTE ESPECÍFICO — PARTE 1 (Q10 a Q19)
  // =========================================================================
  {
    id: 'inedita-2-q10',
    source: 'inedita-2',
    year: 2026,
    number: 10,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Árvore Binária de Busca (ABB), Poda Recursiva e Análise de Complexidade em C',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'medio',
    context: `Um sistema de indexação em memória mantém identificadores numéricos em uma **Árvore Binária de Busca (ABB)** construída pela inserção sequencial das chaves \`40, 20, 65, 10, 30, 50, 80, 25, 35\` em uma árvore inicialmente vazia, resultando na estrutura abaixo:

\`\`\`text
            40
          /    \\
        20      65
       /  \\    /  \\
     10   30  50   80
         /  \\
       25    35
\`\`\`

Para consultar a soma de todas as chaves pertencentes a um intervalo fechado $[\\text{min}, \\text{max}]$ evitando percorrer subárvores desnecessárias, um engenheiro escreveu a seguinte função recursiva em linguagem C:

\`\`\`c
typedef struct No {
    int chave;
    struct No *esq;
    struct No *dir;
} No;

int somaIntervalo(No *r, int min, int max, int *visitados) {
    if (r == NULL) return 0;
    (*visitados)++;
    int soma = 0;
    if (r->chave > min)
        soma += somaIntervalo(r->esq, min, max, visitados);
    if (r->chave >= min && r->chave <= max)
        soma += r->chave;
    if (r->chave < max)
        soma += somaIntervalo(r->dir, min, max, visitados);
    return soma;
}
\`\`\`

Considere que a variável \`int vis = 0;\` é inicializada antes da chamada \`int res = somaIntervalo(raiz, 25, 50, &vis);\`.`,
    command: 'Após a execução dessa chamada, quais serão os valores de `res`, `vis` e a complexidade assintótica de pior caso da função `somaIntervalo` para uma ABB arbitrária com $n$ nós?',
    options: [
      { letter: 'A', text: '`res = 105`, `vis = 5` e complexidade de pior caso $O(\\log n)$.' },
      { letter: 'B', text: '`res = 180`, `vis = 9` e complexidade de pior caso $O(n \\log n)$.' },
      { letter: 'C', text: '`res = 155`, `vis = 6` e complexidade de pior caso $O(n)$.' },
      { letter: 'D', text: '`res = 180`, `vis = 5` e complexidade de pior caso $O(\\log n)$.' },
      { letter: 'E', text: '`res = 180`, `vis = 7` e complexidade de pior caso $O(n)$.' },
    ],
    correctOption: 'E',
    explanation: `Vamos rastrear rigorosamente a execução recursiva de \`somaIntervalo(raiz, 25, 50, &vis)\`, lembrando que \`(*visitados)++\` só incrementa para ponteiros **não nulos**:

1. **Nó \`40\`** (\`vis = 1\`):
   - \`40 > 25\` (V) $\\rightarrow$ desce para \`esq\` (\`20\`).
   - \`40\` está em $[25, 50]$ $\\rightarrow$ soma \`+40\`.
   - \`40 < 50\` (V) $\\rightarrow$ desce para \`dir\` (\`65\`).
2. **Nó \`20\`** (\`vis = 2\`):
   - \`20 > 25\` (**F**) $\\rightarrow$ **poda** a subárvore esquerda (o nó \`10\` **não** é visitado).
   - \`20\` não está em $[25, 50]$.
   - \`20 < 50\` (V) $\\rightarrow$ desce para \`dir\` (\`30\`).
3. **Nó \`30\`** (\`vis = 3\`):
   - \`30 > 25\` (V) $\\rightarrow$ desce para \`esq\` (\`25\`).
   - \`30\` está em $[25, 50]$ $\\rightarrow$ soma \`+30\`.
   - \`30 < 50\` (V) $\\rightarrow$ desce para \`dir\` (\`35\`).
4. **Nó \`25\`** (\`vis = 4\`):
   - \`25 > 25\` (**F**) $\\rightarrow$ não chama \`esq\`.
   - \`25\` está em $[25, 50]$ $\\rightarrow$ soma \`+25\`.
   - \`25 < 50\` (V) $\\rightarrow$ chama \`dir\` (\`NULL\`, retorna 0 sem incrementar \`vis\`).
5. **Nó \`35\`** (\`vis = 5\`):
   - \`35 > 25\` (V) $\\rightarrow$ \`esq\` é \`NULL\`.
   - \`35\` está em $[25, 50]$ $\\rightarrow$ soma \`+35\`.
   - \`35 < 50\` (V) $\\rightarrow$ \`dir\` é \`NULL\`.
6. **Nó \`65\`** (\`vis = 6\`):
   - \`65 > 25\` (V) $\\rightarrow$ desce para \`esq\` (\`50\`).
   - \`65\` não está em $[25, 50]$.
   - \`65 < 50\` (**F**) $\\rightarrow$ **poda** a subárvore direita (o nó \`80\` **não** é visitado).
7. **Nó \`50\`** (\`vis = 7\`):
   - \`50 > 25\` (V) $\\rightarrow$ \`esq\` é \`NULL\`.
   - \`50\` está em $[25, 50]$ $\\rightarrow$ soma \`+50\`.
   - \`50 < 50\` (**F**) $\\rightarrow$ não chama \`dir\`.

**Resultados finais:**
- Chaves somadas: $25 + 30 + 35 + 40 + 50 = \\mathbf{180}$ (\`res = 180\`).
- Nós não nulos visitados: \`40, 20, 30, 25, 35, 65, 50\` $\\Rightarrow \\mathbf{vis = 7}$ (os nós \`10\` e \`80\` foram podados).
- **Complexidade de pior caso:** Em uma ABB arbitrária com $n$ nós (que pode degenerar em lista ligada, ou caso o intervalo $[\\text{min}, \\text{max}]$ englobe todas as chaves), cada nó é visitado no máximo uma vez com custo $O(1)$ por nó, totalizando **$O(n)$**.

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Exclui os extremos 25 e 50 da soma (180 - 75 = 105), ignora as visitas aos nós 20 e 65 e erra o pior caso da ABB.',
      B: 'Incorreta. Ignora a poda das subárvores dos nós 10 e 80 (contando todos os 9 nós) e superestima a complexidade como O(n log n).',
      C: 'Incorreta. Esquece de somar o extremo 25 (180 - 25 = 155) e erra a contagem de nós visitados.',
      D: 'Incorreta. Confunde o número de nós no intervalo (5) com o número de nós visitados (7, incluindo 20 e 65) e assume erroneamente pior caso O(log n).',
      E: 'Correta. Soma exata = 180, nós visitados = 7 (podando 10 e 80) e complexidade de pior caso = O(n).',
    },
    keyConcept: 'Busca por intervalo em Árvore Binária de Busca (ABB) com poda de subárvores e análise de pior caso O(n).',
  },
  {
    id: 'inedita-2-q11',
    source: 'inedita-2',
    year: 2026,
    number: 11,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Tabelas Hash, Endereçamento Aberto e Duplo Hashing',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um roteador de pacotes implementa uma tabela de sessões usando **tabela hash com endereçamento aberto e duplo hashing** (*double hashing*) de tamanho $m = 11$ (índices de $0$ a $10$), inicialmente vazia. A sequência de sondagem para a chave $k$ na tentativa $i = 0, 1, 2, \\dots$ é definida por:

$$h(k, i) = \\bigl(h_1(k) + i \\cdot h_2(k)\\bigr) \\bmod 11$$

em que:
- $h_1(k) = k \\bmod 11$
- $h_2(k) = 1 + (k \\bmod 7)$

Suponha que sejam inseridas, exatamente nesta ordem, as cinco chaves inteiras:

$$22,\\quad 33,\\quad 44,\\quad 15,\\quad 66$$`,
    command: 'Ao final dessas inserções, em qual índice será armazenada a chave `66`, quantas colisões ocorreram especificamente na inserção de `66` e qual é a principal vantagem técnica dessa escolha de $h_2(k)$ com $m = 11$ primo?',
    options: [
      {
        letter: 'A',
        text: 'Índice `4`, com `1` colisão; a escolha reduz o fator de carga para $O(1/m^2)$.',
      },
      {
        letter: 'B',
        text: 'Índice `8`, com `2` colisões; como $m = 11$ é primo e $1 \\le h_2(k) \\le 7$, tem-se $\\operatorname{mdc}(h_2(k), 11) = 1$, garantindo cobertura de toda a tabela e evitando agrupamento primário e secundário.',
      },
      {
        letter: 'C',
        text: 'Índice `1`, com `1` colisão; o duplo hashing elimina completamente a ocorrência de colisões enquanto o fator de carga for menor que $0,5$.',
      },
      {
        letter: 'D',
        text: 'Índice `8`, com `3` colisões; a função $h_2(k)$ permite que múltiplas chaves sejam encadeadas em uma mesma posição por listas ligadas.',
      },
      {
        letter: 'E',
        text: 'Índice `7`, com `2` colisões; o uso de $h_2(k)$ produz a mesma sequência de sondagem que a sondagem linear, apenas invertendo o sentido de varredura.',
      },
    ],
    correctOption: 'B',
    explanation: `Vamos simular passo a passo a inserção das chaves \`22, 33, 44, 15, 66\` na tabela de tamanho $m = 11$:

1. **Inserir $k = 22$:**
   - $h_1(22) = 22 \\bmod 11 = 0$.
   - Índice \`0\` livre $\\Rightarrow$ **\`22\` armazenado em \`0\`** (0 colisões).

2. **Inserir $k = 33$:**
   - $h_1(33) = 33 \\bmod 11 = 0$ (**colisão** com \`22\`).
   - $h_2(33) = 1 + (33 \\bmod 7) = 1 + 5 = 6$.
   - $i = 1$: $(0 + 1 \\cdot 6) \\bmod 11 = 6$.
   - Índice \`6\` livre $\\Rightarrow$ **\`33\` armazenado em \`6\`** (1 colisão).

3. **Inserir $k = 44$:**
   - $h_1(44) = 44 \\bmod 11 = 0$ (**colisão** com \`22\`).
   - $h_2(44) = 1 + (44 \\bmod 7) = 1 + 2 = 3$.
   - $i = 1$: $(0 + 1 \\cdot 3) \\bmod 11 = 3$.
   - Índice \`3\` livre $\\Rightarrow$ **\`44\` armazenado em \`3\`** (1 colisão).

4. **Inserir $k = 15$:**
   - $h_1(15) = 15 \\bmod 11 = 4$.
   - Índice \`4\` livre $\\Rightarrow$ **\`15\` armazenado em \`4\`** (0 colisões).

5. **Inserir $k = 66$:**
   - $h_1(66) = 66 \\bmod 11 = 0$ (**1ª colisão**, ocupado por \`22\`).
   - $h_2(66) = 1 + (66 \\bmod 7) = 1 + 3 = 4$ (pois $66 = 9 \\times 7 + 3$).
   - $i = 1$: $(0 + 1 \\cdot 4) \\bmod 11 = 4$ (**2ª colisão**, ocupado por \`15\`!).
   - $i = 2$: $(0 + 2 \\cdot 4) \\bmod 11 = 8$ (livre!).
   - **\`66\` armazenado em \`8\`**, após **2 colisões**!

| Índice | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chave** | 22 | — | — | 44 | 15 | — | 33 | — | **66** | — | — |

**Propriedade teórica:** Como $m = 11$ é primo e $h_2(k) \\in \\{1, 2, 3, 4, 5, 6, 7\\}$, o passo nunca é nulo e é sempre coprimo com $m$ ($\\operatorname{mdc}(h_2(k), 11) = 1$). Isso garante que a sequência de sondagem visite todas as 11 posições antes de se repetir e evita tanto o *primary clustering* (da sondagem linear) quanto o *secondary clustering* (da sondagem quadrática), pois chaves com mesmo $h_1(k)$ tendem a ter passos $h_2(k)$ distintos.

Logo, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. O índice 4 já está ocupado pela chave 15, obrigando uma segunda sondagem até o índice 8; além disso, o fator de carga continua sendo n/m = 5/11.',
      B: 'Correta. Índice final 8, exatamente 2 colisões (nos índices 0 e 4) e justificativa teórica rigorosa sobre primalidade de m e mitigação de clustering.',
      C: 'Incorreta. Duplo hashing não elimina colisões (trata-se de uma técnica de resolução de colisões) e o índice calculado está errado.',
      D: 'Incorreta. Houve 2 colisões (não 3) e endereçamento aberto não usa listas ligadas (isso seria encadeamento separado / separate chaining).',
      E: 'Incorreta. Erro no cálculo de h2(66) = 4 e afirmação falsa sobre equivalência com sondagem linear.',
    },
    keyConcept: 'Tabela hash com endereçamento aberto e duplo hashing: cálculo de sondagem, condição mdc(h2(k), m) = 1 e combate ao agrupamento primário e secundário.',
  },
  {
    id: 'inedita-2-q12',
    source: 'inedita-2',
    year: 2026,
    number: 12,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Programação Dinâmica vs. Algoritmo Guloso (Mochila 0-1)',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um nó de computação de borda (*Edge Server*) dispõe de exatamente $W = 10\\text{ GB}$ de memória RAM livre para alocar um subconjunto de quatro microsserviços independentes e **indivisíveis** (cada serviço ou é implantado integralmente ou não é implantado). A tabela abaixo apresenta o consumo de RAM $w_i$ e o benefício operacional $v_i$ (em pontos de redução de latência) de cada microsserviço:

| Microsserviço | Consumo de RAM $w_i$ (GB) | Benefício $v_i$ (pontos) | Razão $v_i / w_i$ (pts/GB) |
| :---: | :---: | :---: | :---: |
| $M_1$ | 6 | 30 | 5,0 |
| $M_2$ | 5 | 22 | 4,4 |
| $M_3$ | 5 | 22 | 4,4 |
| $M_4$ | 3 | 12 | 4,0 |

Dois engenheiros propõem abordagens distintas para maximizar o benefício total respeitando o limite de $10\\text{ GB}$:
- **Engenheiro 1 (Estratégia Gulosa):** ordena os microsserviços em ordem decrescente da razão benefício/consumo ($v_i / w_i$) e seleciona cada serviço que ainda couber na RAM restante.
- **Engenheiro 2 (Programação Dinâmica):** resolve a recorrência ótima da **Mochila 0-1** preenchendo a tabela $DP[i][c]$ para $i \\in \\{0, \\dots, n\\}$ e $c \\in \\{0, \\dots, W\\}$.`,
    command: 'Comparando os resultados das duas abordagens e a análise algorítmica da Mochila 0-1, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'A estratégia gulosa seleciona $\\{M_1, M_4\\}$ obtendo 42 pontos, enquanto a Programação Dinâmica encontra a solução ótima $\\{M_2, M_3\\}$ com 44 pontos, com complexidade de tempo $O(n \\cdot W)$ — pseudopolinomial em relação ao tamanho em bits de $W$.',
      },
      {
        letter: 'B',
        text: 'Ambas as estratégias produzem a solução ótima de 44 pontos, pois ordenar pela maior razão $v_i / w_i$ garante otimalidade global tanto na Mochila 0-1 quanto na Mochila Fracionária.',
      },
      {
        letter: 'C',
        text: 'A estratégia gulosa seleciona $\\{M_1, M_2\\}$ obtendo 52 pontos, superando a Programação Dinâmica por não sofrer sobrecarga de preenchimento de tabela.',
      },
      {
        letter: 'D',
        text: 'A Programação Dinâmica seleciona $\\{M_1, M_4\\}$ obtendo 42 pontos e executa em tempo estritamente polinomial $O(n \\log n)$ independente do valor de $W$.',
      },
      {
        letter: 'E',
        text: 'A solução ótima do problema indivisível atinge 47,6 pontos ao alocar $M_1$ integralmente e 80% de $M_2$, pois a subestrutura ótima permite particionamento dinâmico de serviços.',
      },
    ],
    correctOption: 'A',
    explanation: `Vamos resolver explicitamente as duas estratégias para a capacidade $W = 10\\text{ GB}$:

### 1. Estratégia Gulosa (Engenheiro 1 — maior $v_i / w_i$)
Ordem decrescente de $v_i / w_i$: $M_1 (5,0) \\rightarrow M_2 (4,4) \\rightarrow M_3 (4,4) \\rightarrow M_4 (4,0)$.
- Seleciona **$M_1$** ($w = 6$, $v = 30$). RAM restante: $10 - 6 = 4\\text{ GB}$.
- Testa $M_2$ ($w = 5 > 4$): não cabe.
- Testa $M_3$ ($w = 5 > 4$): não cabe.
- Seleciona **$M_4$** ($w = 3 \\le 4$, $v = 12$). RAM restante: $1\\text{ GB}$.
- **Resultado Guloso:** $\\{M_1, M_4\\}$, consumo $= 9\\text{ GB}$, benefício $= 30 + 12 = \\mathbf{42\\text{ pontos}}$.

### 2. Programação Dinâmica — Mochila 0-1 (Engenheiro 2)
Recorrência:
$$DP[i][c] = \\max\\bigl(DP[i-1][c],\\; v_i + DP[i-1][c - w_i]\\bigr) \\quad \\text{para } c \\ge w_i$$

Avaliando os subconjuntos viáveis ($\\sum w_i \\le 10$):
- $\\{M_1, M_4\\}$: $w = 9\\text{ GB}$, $v = 42$
- **$\\{M_2, M_3\\}$: $w = 5 + 5 = 10\\text{ GB}$, $v = 22 + 22 = \\mathbf{44\\text{ pontos}}$ (Ótimo global!)**
- $\\{M_2, M_4\\}$ ou $\\{M_3, M_4\\}$: $w = 8\\text{ GB}$, $v = 34$

### 3. Complexidade Computacional
A tabela $DP$ tem $(n + 1) \\times (W + 1)$ estados, cada um calculado em $O(1)$, resultando em tempo **$O(n \\cdot W)$**. Como o número de bits necessários para representar $W$ na entrada é $b = \\lceil \\log_2(W + 1) \\rceil$, temos $W = \\Theta(2^b)$, o que torna $O(n \\cdot W)$ **pseudopolinomial** (e o problema da Mochila 0-1 é NP-difícil / sua versão de decisão é NP-completa).

Portanto, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Apresenta os subconjuntos exatos (42 vs. 44 pontos) e classifica corretamente O(n·W) como algoritmo pseudopolinomial.',
      B: 'Incorreta. A estratégia gulosa por vi/wi é ótima apenas na Mochila Fracionária, falhando na Mochila 0-1 como demonstrado neste caso.',
      C: 'Incorreta. {M1, M2} exige 6 + 5 = 11 GB, violando a restrição de capacidade W = 10 GB.',
      D: 'Incorreta. Erra tanto o valor ótimo (44, não 42) quanto a complexidade da Programação Dinâmica para Mochila 0-1.',
      E: 'Incorreta. O valor 47,6 corresponde à Mochila Fracionária, mas o enunciado especifica claramente microsserviços indivisíveis (0-1).',
    },
    keyConcept: 'Mochila 0-1 via Programação Dinâmica O(n·W) pseudopolinomial vs. falha da heurística gulosa por razão valor/peso em itens indivisíveis.',
  },
  {
    id: 'inedita-2-q13',
    source: 'inedita-2',
    year: 2026,
    number: 13,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Hierarquia de Memória e Mapeamento de Cache Associativa por Conjunto',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um processador de 32 bits, com memória principal endereçável a byte, possui uma memória cache L1 de dados com as seguintes especificações técnicas:

- **Capacidade total de dados:** $64\\text{ KiB}$ ($64 \\times 2^{10}\\text{ bytes}$);
- **Tamanho de cada bloco (linha):** $64\\text{ bytes}$;
- **Política de mapeamento:** associativa por conjunto de 4 vias (*4-way set-associative*).

Durante a execução de uma rotina de processamento de sinais, a CPU emite uma leitura para o endereço físico de 32 bits \`0x004A3D94\`.`,
    command: 'Qual é a partição correta do endereço de 32 bits nos campos `(Tag, Índice do Conjunto, Offset do Byte)` e em qual número de conjunto (em decimal) o endereço `0x004A3D94` será pesquisado na cache?',
    options: [
      { letter: 'A', text: '`16 bits` de Tag, `10 bits` de Índice, `6 bits` de Offset; pesquisado no conjunto `246`.' },
      { letter: 'B', text: '`18 bits` de Tag, `8 bits` de Índice, `6 bits` de Offset; pesquisado no conjunto `20`.' },
      { letter: 'C', text: '`18 bits` de Tag, `8 bits` de Índice, `6 bits` de Offset; pesquisado no conjunto `246`.' },
      { letter: 'D', text: '`20 bits` de Tag, `6 bits` de Índice, `6 bits` de Offset; pesquisado no conjunto `54`.' },
      { letter: 'E', text: '`18 bits` de Tag, `6 bits` de Índice, `8 bits` de Offset; pesquisado no conjunto `61`.' },
    ],
    correctOption: 'C',
    explanation: `Vamos determinar cada campo do endereço de 32 bits passo a passo:

1. **Bits de Offset (deslocamento dentro do bloco):**
   Cada bloco tem $64 = 2^6\\text{ bytes}$, logo:
   $$b_{\\text{offset}} = \\log_2(64) = \\mathbf{6\\text{ bits}} \\quad (\\text{bits } 5 \\text{ a } 0)$$

2. **Número de blocos e número de conjuntos (*sets*):**
   $$N_{\\text{blocos}} = \\frac{64\\text{ KiB}}{64\\text{ bytes}} = \\frac{2^{16}}{2^6} = 2^{10} = 1\\,024\\text{ blocos}$$
   Como a cache é associativa por conjunto de **4 vias** (4 blocos por conjunto):
   $$N_{\\text{conjuntos}} = \\frac{1\\,024}{4} = 256 = 2^8\\text{ conjuntos}$$

3. **Bits de Índice do Conjunto:**
   $$b_{\\text{índice}} = \\log_2(256) = \\mathbf{8\\text{ bits}} \\quad (\\text{bits } 13 \\text{ a } 6)$$

4. **Bits de Tag (Rótulo):**
   $$b_{\\text{tag}} = 32 - 8 - 6 = \\mathbf{18\\text{ bits}} \\quad (\\text{bits } 31 \\text{ a } 14)$$

5. **Cálculo do conjunto para \`0x004A3D94\`:**
   Expandindo os 16 bits menos significativos (\`0x3D94\`) em binário:
   - \`3\` = \`0011\` (bits 15..12)
   - \`D\` = \`1101\` (bits 11..8)
   - \`9\` = \`1001\` (bits 7..4)
   - \`4\` = \`0100\` (bits 3..0)

   Separando os campos nos 16 bits inferiores (\`00 | 11110110 | 010100\`):
   - **Offset** (bits 5..0): \`010100\`$_2 = 20_{10}$.
   - **Índice** (bits 13..6): \`11110110\`$_2 = 128 + 64 + 32 + 16 + 4 + 2 = \\mathbf{246_{10}}$.

   *Conferência alternativa:* $\\text{0x3D94} = 15\\,764$; dividindo por $64$ (deslocamento de 6 bits): $\\lfloor 15\\,764 / 64 \\rfloor = 246$ (resto $20$); e $246 \\bmod 256 = \\mathbf{246}$.

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Calcula 10 bits de índice (como se fosse mapeamento direto com 1 024 conjuntos), esquecendo de dividir por 4 vias.',
      B: 'Incorreta. Acerta a divisão de bits (18, 8, 6), mas confunde o valor do Offset (20) com o Índice do conjunto (246).',
      C: 'Correta. 18 bits de Tag, 8 bits de Índice, 6 bits de Offset e conjunto decimal 246.',
      D: 'Incorreta. Erra o número de conjuntos ao assumir 6 bits de índice (64 conjuntos em vez de 256).',
      E: 'Incorreta. Inverte os tamanhos dos campos Índice (8 bits) e Offset (6 bits).',
    },
    keyConcept: 'Mapeamento de cache associativa por conjunto: Offset = log2(bloco), Índice = log2(capacidade / (bloco × vias)) e Tag = N - Índice - Offset.',
  },
  {
    id: 'inedita-2-q14',
    source: 'inedita-2',
    year: 2026,
    number: 14,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Pipeline RISC, Penalidades de Hazards e Lei de Amdahl',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um sistema embarcado de inspeção industrial executa um algoritmo de visão computacional em um processador RISC com pipeline de 5 estágios (IF, ID, EX, MEM, WB) cujo $CPI_{\\text{ideal}} = 1,0$. A análise de perfil (*profiling*) do núcleo RISC base revelou as seguintes estatísticas de execução:

- **20%** das instruções executadas são desvios condicionais (*branches*), dos quais **25%** sofrem erro de predição (*misprediction*), acarretando penalidade de **2 ciclos** de *stall* cada;
- **10%** das instruções executadas são instruções de carga (*load*) seguidas imediatamente por uma instrução dependente (*load-use hazard*), gerando **1 ciclo** de *stall* cada (mesmo com *forwarding*);
- Não há outras fontes de *stall* no pipeline.

Em uma segunda etapa de otimização, a equipe projeta um acelerador dedicado em FPGA capaz de tornar **6 vezes mais rápida** a rotina de filtragem convolucional, que originalmente consome **60%** do tempo total de execução da aplicação (os outros 40% não são acelerados).`,
    command: 'Com base nos dados apresentados, quais são, respectivamente, o $CPI_{\\text{efetivo}}$ do núcleo RISC base, o ganho de desempenho (*speedup*) global obtido com o acelerador pela Lei de Amdahl e o limite máximo assintótico de *speedup* caso a filtragem convolucional fosse acelerada infinitamente?',
    options: [
      { letter: 'A', text: '$CPI_{\\text{efetivo}} = 1,50$; *speedup* global $= 2,00$; *speedup* máximo assintótico $= 2,50$.' },
      { letter: 'B', text: '$CPI_{\\text{efetivo}} = 1,20$; *speedup* global $= 3,60$; *speedup* máximo assintótico $= 6,00$.' },
      { letter: 'C', text: '$CPI_{\\text{efetivo}} = 1,30$; *speedup* global $= 2,00$; *speedup* máximo assintótico $= 1,67$.' },
      { letter: 'D', text: '$CPI_{\\text{efetivo}} = 1,20$; *speedup* global $= 2,00$; *speedup* máximo assintótico $= 2,50$.' },
      { letter: 'E', text: '$CPI_{\\text{efetivo}} = 1,15$; *speedup* global $= 2,50$; *speedup* máximo assintótico $= 4,00$.' },
    ],
    correctOption: 'D',
    explanation: `Calculamos cada métrica de desempenho separadamente:

### 1. $CPI_{\\text{efetivo}}$ do Pipeline RISC Base
$$CPI_{\\text{efetivo}} = CPI_{\\text{ideal}} + \\text{Stalls}_{\\text{branch}} + \\text{Stalls}_{\\text{load-use}}$$

- **Penalidade por desvios previstos incorretamente:**
  $$\\text{Stalls}_{\\text{branch}} = 0,20 \\times 0,25 \\times 2 = 0,10\\text{ ciclo/instrução}$$
- **Penalidade por *load-use hazard*:**
  $$\\text{Stalls}_{\\text{load-use}} = 0,10 \\times 1 = 0,10\\text{ ciclo/instrução}$$
- **Total:**
  $$CPI_{\\text{efetivo}} = 1,00 + 0,10 + 0,10 = \\mathbf{1,20}$$

### 2. *Speedup* Global pela Lei de Amdahl
Com fração aprimorada $f = 0,60$ e fator de aceleração $s = 6$:
$$S_{\\text{global}} = \\frac{1}{(1 - f) + \\dfrac{f}{s}} = \\frac{1}{(1 - 0,60) + \\dfrac{0,60}{6}} = \\frac{1}{0,40 + 0,10} = \\frac{1}{0,50} = \\mathbf{2,00}$$

### 3. Limite Assintótico ($s \\to \\infty$)
Mesmo que o tempo da filtragem convolucional tendesse a zero, os 40% sequenciais/não acelerados permaneceriam inalterados:
$$S_{\\max} = \\lim_{s \\to \\infty} \\frac{1}{(1 - f) + \\dfrac{f}{s}} = \\frac{1}{1 - 0,60} = \\frac{1}{0,40} = \\mathbf{2,50}$$

Portanto, os valores corretos são $1,20$, $2,00$ e $2,50$ — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Calcula incorretamente os stalls de branch como 0,20 × 2 = 0,40 (esquecendo de multiplicar pela taxa de erro de predição de 25%), chegando a CPI = 1,50.',
      B: 'Incorreta. Aplica erroneamente média ponderada linear (0,60 × 6 = 3,60) em vez da Lei de Amdahl e confunde o limite máximo com s = 6.',
      C: 'Incorreta. Erra o cálculo do CPI (1,30) e inverte a fração no limite assintótico (1/0,60 = 1,67 em vez de 1/0,40 = 2,50).',
      D: 'Correta. Todos os três valores (CPI = 1,20, speedup = 2,00 e limite máximo = 2,50) estão matematicamente exatos.',
      E: 'Incorreta. Erra o CPI e troca os valores de speedup global e máximo.',
    },
    keyConcept: 'Desempenho de pipeline (CPI efetivo com hazards de controle e dados) e Lei de Amdahl com limite assintótico 1/(1 - f).',
  },
  {
    id: 'inedita-2-q15',
    source: 'inedita-2',
    year: 2026,
    number: 15,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'DMA, Interrupções de Hardware e Ordenação de Bytes (Little-Endian vs. Big-Endian)',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Um nó sensor industrial baseado em microcontrolador **ARM Cortex-M** configurado em modo **Little-Endian** realiza aquisição contínua de sinais analógicos por meio de um conversor ADC integrado, transferindo blocos de 256 amostras diretamente para a memória SRAM com auxílio de um controlador **DMA** (*Direct Memory Access*). Periodicamente, o firmware encapsula um inteiro sem sinal de 32 bits com valor \`0x12A47F09\`, residente a partir do endereço de SRAM \`0x20001000\`, convertendo-o para *Network Byte Order* (**Big-Endian**) antes de transmiti-lo pela interface Ethernet.

Considerando a arquitetura de sistemas embarcados descrita, avalie as afirmações a seguir.

**I.** Na memória SRAM em modo Little-Endian, os conteúdos armazenados nos endereços \`0x20001000\`, \`0x20001001\`, \`0x20001002\` e \`0x20001003\` correspondem, respectivamente, aos bytes \`0x09\`, \`0x7F\`, \`0xA4\` e \`0x12\`.

**II.** Após a conversão para *Network Byte Order* (Big-Endian), o primeiro byte colocado na sequência de transmissão do pacote de rede é \`0x12\` (o byte mais significativo).

**III.** O controlador DMA desonera a CPU de executar instruções de leitura/escrita para cada amostra adquirida pelo ADC, acionando uma interrupção apenas em eventos configurados (como metade ou término da transferência do bloco), embora possa competir com a CPU pelo barramento de memória (*cycle stealing*).

**IV.** Diferentemente da técnica de *polling* (espera ocupada), o mecanismo de interrupções de hardware elimina qualquer sobrecarga de salvamento de contexto (registradores e contador de programa na pilha) e reduz a latência de atendimento a exatamente zero ciclos de clock.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e IV.' },
      { letter: 'B', text: 'II e IV.' },
      { letter: 'C', text: 'I e III.' },
      { letter: 'D', text: 'II, III e IV.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'E',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** Em arquiteturas **Little-Endian**, o byte menos significativo (*LSB*, \`0x09\`) é armazenado no menor endereço de memória (\`0x20001000\`), seguido por \`0x7F\`, \`0xA4\` e, finalmente, pelo byte mais significativo (*MSB*, \`0x12\`) em \`0x20001003\`.
- **Afirmação II (VERDADEIRA):** O padrão de rede TCP/IP (*Network Byte Order*) adota **Big-Endian**, no qual o byte mais significativo (\`0x12\`) ocupa o menor endereço do buffer de rede e é transmitido primeiro.
- **Afirmação III (VERDADEIRA):** O DMA assume temporariamente o controle do barramento (por *burst* ou *cycle stealing*) para transferir blocos periférico $\\leftrightarrow$ memória sem envolver o núcleo da CPU a cada palavra, gerando interrupções de *half-transfer* / *transfer-complete* para o processamento em lote.
- **Afirmação IV (FALSA):** Interrupções evitam o desperdício contínuo de CPU típico do *polling*, mas **exigem** empilhamento/salvamento de contexto (no ARM Cortex-M, o próprio hardware empilha \`R0–R3, R12, LR, PC, xPSR\`) e possuem latência de entrada diferente de zero (tipicamente 12 ciclos no Cortex-M3/M4, sem considerar desvios/esperas).

Portanto, apenas **I, II e III** estão corretas (alternativa **E**).`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a afirmação IV (falsa) e omite II e III.',
      B: 'Incorreta. Inclui a afirmação IV (falsa) e omite I e III.',
      C: 'Incorreta. Omite a afirmação II, que descreve corretamente o padrão Big-Endian em Network Byte Order.',
      D: 'Incorreta. Inclui a afirmação IV (falsa) e omite I.',
      E: 'Correta. Valida precisamente a ordenação Little-Endian na SRAM, Big-Endian na rede e o funcionamento do DMA com cycle stealing.',
    },
    keyConcept: 'Endereçamento Little-Endian vs. Big-Endian (Network Byte Order), transferência por DMA (cycle stealing) e latência/salvamento de contexto em interrupções.',
  },
  {
    id: 'inedita-2-q16',
    source: 'inedita-2',
    year: 2026,
    number: 16,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Aritmética Binária em Complemento de 2 e Detecção de Overflow na ULA',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um controlador digital embarcado de 8 bits representa grandezas com sinal em **Complemento de 2** (faixa $[-128, +127]$). Em determinado ciclo de cálculo de controle, a Unidade Lógica e Aritmética (ULA) realiza a soma de dois registradores de 8 bits:

$$A = 0110\\,1011_2 \\qquad \\text{e} \\qquad B = 0011\\,0110_2$$

A ULA dispõe de duas bandeiras (*flags*) de status associadas à adição:
- **Carry ($C$):** igual ao vai-um de saída do bit mais significativo ($C_{\\text{out},7}$);
- **Overflow ($V$):** igual a $C_{\\text{in},7} \\oplus C_{\\text{out},7}$, em que $C_{\\text{in},7}$ é o vai-um que entra no bit de sinal (bit 7).`,
    command: 'Qual é o resultado binário de 8 bits produzido na saída da ULA, qual o seu valor decimal interpretado em Complemento de 2 e quais os valores das flags $C$ e $V$ após a operação $A + B$?',
    options: [
      { letter: 'A', text: 'Saída `1010 0001`, valor interpretado $-95$, com $C = 0$ e $V = 1$ (ocorreu *overflow*).' },
      { letter: 'B', text: 'Saída `1010 0001`, valor interpretado $+161$, com $C = 1$ e $V = 0$ (não ocorreu *overflow*).' },
      { letter: 'C', text: 'Saída `1010 0001`, valor interpretado $-33$, com $C = 0$ e $V = 1$ (ocorreu *overflow*).' },
      { letter: 'D', text: 'Saída `1001 0001`, valor interpretado $-111$, com $C = 1$ e $V = 1$ (ocorreu *overflow*).' },
      { letter: 'E', text: 'Saída `1010 0001`, valor interpretado $-95$, com $C = 1$ e $V = 0$ (não ocorreu *overflow*).' },
    ],
    correctOption: 'A',
    explanation: `Vamos converter os operandos e efetuar a soma binária bit a bit:

1. **Valores decimais dos operandos (ambos positivos, bit 7 = 0):**
   - $A = 0110\\,1011_2 = 64 + 32 + 8 + 2 + 1 = +107_{10}$
   - $B = 0011\\,0110_2 = 32 + 16 + 4 + 2 = +54_{10}$
   - Soma real: $+107 + 54 = +161_{10}$ (ultrapassa o máximo representável $+127$, logo **haverá *overflow***!).

2. **Adição binária de 8 bits:**
\`\`\`text
Carries:   0  1 1 1  1 1 1 0  (C_out,7 = 0; C_in,7 = 1)
   A:      0  1 1 0  1 0 1 1  (+107)
+  B:      0  0 1 1  0 1 1 0  (+54)
   -------------------------
   S:      1  0 1 0  0 0 0 1  (0xA1)
\`\`\`

3. **Flags da ULA:**
   - **Carry ($C = C_{\\text{out},7}$):** como $0 + 0 + C_{\\text{in},7}(1) = 1$ com vai-um $0$, temos **$C = 0$**.
   - **Overflow ($V = C_{\\text{in},7} \\oplus C_{\\text{out},7}$):** $V = 1 \\oplus 0 = \\mathbf{1}$. (Confirmação semântica: soma de dois positivos resultou em número negativo.)

4. **Interpretação de \`1010 0001\` em Complemento de 2:**
   Como o bit de sinal é \`1\`, o valor é negativo. Calculando seu módulo (invertendo bits e somando 1):
   - Complemento de 1: \`0101 1110\`
   - Soma 1: \`0101 1111\`$_2 = 64 + 16 + 8 + 4 + 2 + 1 = 95$
   - Portanto, \`1010 0001\` representa **$-95$** (ou diretamente: $-128 + 32 + 1 = -95$, e $161 - 256 = -95$).

Portanto, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Saída 1010 0001, valor em Complemento de 2 igual a -95, Carry C = 0 e Overflow V = 1.',
      B: 'Incorreta. Interpreta a saída como inteiro sem sinal (+161) e inverte as flags C e V.',
      C: 'Incorreta. Interpreta 1010 0001 em sinal-magnitude (-33) em vez de Complemento de 2 (-95).',
      D: 'Incorreta. Erra a propagação do carry no bit 5 (resultando em 1001 0001) e erra a flag C.',
      E: 'Incorreta. Acerta o valor -95, mas confunde as flags C e V (em aritmética com sinal, overflow pode ocorrer mesmo com Carry C = 0).',
    },
    keyConcept: 'Soma binária em Complemento de 2 de 8 bits e distinção rigorosa entre Carry (C = C_out) e Overflow (V = C_in ⊕ C_out).',
  },
  {
    id: 'inedita-2-q17',
    source: 'inedita-2',
    year: 2026,
    number: 17,
    component: 'CE',
    discipline: 'sistemas-digitais',
    subtopic: 'Contadores Síncronos, Flip-Flops e Descrição de Hardware em VHDL',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'dificil',
    context: `Um projetista descreveu em **VHDL** um bloco divisor de frequência / contador para sintetizar em uma FPGA alimentada por um sinal de clock \`clk\` de $50\\text{ MHz}$. Considere o trecho de arquitetura abaixo, em que \`cnt\` é um sinal do tipo \`unsigned(3 downto 0)\` e \`tick\` é \`std_logic\`:

\`\`\`vhdl
process(clk, rst)
begin
    if rst = '1' then
        cnt  <= "0000";
        tick <= '0';
    elsif rising_edge(clk) then
        if cnt = "1001" then
            cnt  <= "0000";
            tick <= '1';
        else
            cnt  <= cnt + 1;
            tick <= '0';
        end if;
    end if;
end process;
\`\`\`

Assuma que \`rst\` é mantido em \`'0'\` após a inicialização do circuito.`,
    command: 'Com base na síntese desse processo VHDL, qual alternativa descreve corretamente o circuito gerado, a frequência dos pulsos em `tick` e o respectivo ciclo de trabalho (*duty cycle*)?',
    options: [
      {
        letter: 'A',
        text: 'Contador assíncrono (*ripple*) módulo-9 com reset síncrono ativo em nível alto; `tick` opera a $5,56\\text{ MHz}$ com *duty cycle* de $50\\%$.',
      },
      {
        letter: 'B',
        text: 'Contador síncrono módulo-16 com reset assíncrono; `tick` opera a $3,125\\text{ MHz}$ com *duty cycle* de $6,25\\%$.',
      },
      {
        letter: 'C',
        text: 'Contador síncrono módulo-10 (BCD) utilizando 4 flip-flops para `cnt`, com reset assíncrono ativo em nível alto; `tick` gera pulsos a $5\\text{ MHz}$ com *duty cycle* de $10\\%$.',
      },
      {
        letter: 'D',
        text: 'Contador síncrono módulo-10 com reset síncrono ativo em nível baixo; `tick` gera pulsos a $5\\text{ MHz}$ com *duty cycle* de $50\\%$.',
      },
      {
        letter: 'E',
        text: 'Contador síncrono módulo-9 utilizando 4 flip-flops para `cnt`, com reset assíncrono ativo em nível alto; `tick` gera pulsos a $5\\text{ MHz}$ com *duty cycle* de $20\\%$.',
      },
    ],
    correctOption: 'C',
    explanation: `Analisando cada elemento estrutural do processo VHDL:

1. **Tipo de Reset:** A condição \`if rst = '1' then\` é avaliada **antes e fora** de \`rising_edge(clk)\`, e \`rst\` está presente na lista de sensibilidade \`process(clk, rst)\`. Isso sintetiza um **reset assíncrono ativo em nível alto** (atua imediatamente quando \`rst = '1'\`, independentemente do clock).
2. **Tipo de Contador e Módulo:** Todos os 4 flip-flops de \`cnt\` (\`3 downto 0\`) são disparados pela mesma borda de subida de \`clk\` $\\Rightarrow$ **contador síncrono**. Os estados percorridos são \`"0000"\` ($0$) até \`"1001"\` ($9$), retornando a \`"0000"\` na borda seguinte: são exatamente **10 estados distintos** ($0, 1, 2, 3, 4, 5, 6, 7, 8, 9$), caracterizando um **contador módulo-10 (BCD)**.
3. **Frequência do sinal \`tick\`:** O sinal \`tick\` vai para \`'1'\` exatamente 1 vez a cada ciclo completo de 10 bordas de subida de \`clk\`:
   $$f_{\\text{tick}} = \\frac{f_{\\text{clk}}}{10} = \\frac{50\\text{ MHz}}{10} = \\mathbf{5\\text{ MHz}}$$
4. **Ciclo de trabalho (*Duty Cycle*) de \`tick\`:** Como \`tick\` permanece em nível alto (\`'1'\`) durante exatamente **1 período de clock** (quando \`cnt\` transita de \`9\` para \`0\`) e em nível baixo (\`'0'\`) durante os outros **9 períodos de clock**:
   $$D = \\frac{T_{\\text{alto}}}{T_{\\text{total}}} = \\frac{1}{10} = \\mathbf{10\\%}$$

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. O contador é síncrono (não ripple), tem 10 estados (0 a 9, não 9), reset assíncrono (não síncrono) e duty cycle de 10%.',
      B: 'Incorreta. Ignora a condição if cnt = "1001", tratando o circuito como contador módulo-16 livre.',
      C: 'Correta. Identifica corretamente contador síncrono módulo-10 (BCD, 4 FFs), reset assíncrono ativo alto, f_tick = 5 MHz e duty cycle = 10%.',
      D: 'Incorreta. O reset é assíncrono ativo alto (rst = \'1\') e o sinal tick fica alto por apenas 1 de cada 10 ciclos (10%, não 50%).',
      E: 'Incorreta. Confunde o maior estado (9) com o módulo do contador (que é 10, pois inclui o estado 0) e erra o duty cycle.',
    },
    keyConcept: 'Síntese VHDL de contadores síncronos módulo-N, distinção entre reset síncrono e assíncrono, divisão de frequência e ciclo de trabalho.',
  },
  {
    id: 'inedita-2-q18',
    source: 'inedita-2',
    year: 2026,
    number: 18,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Gerência de Memória: Alocação First-Fit, Best-Fit e Worst-Fit',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Um sistema operacional embarcado utiliza gerenciamento de memória por partições fixas, em que cada partição livre pode receber **no máximo um processo** por vez. Em dado instante, existem cinco partições livres dispostas na memória exatamente na seguinte ordem:

| Partição | B1 | B2 | B3 | B4 | B5 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Tamanho (KB)** | 150 | 450 | 250 | 320 | 550 |

Quatro novos processos chegam para alocação, nesta exata ordem:
- **P1:** $260\\text{ KB}$
- **P2:** $400\\text{ KB}$
- **P3:** $140\\text{ KB}$
- **P4:** $430\\text{ KB}$

O gerente de memória avalia três algoritmos clássicos de escolha de partição: **First-Fit** (primeiro bloco suficiente), **Best-Fit** (menor bloco suficiente) e **Worst-Fit** (maior bloco suficiente).`,
    command: 'Considerando a alocação sequencial de P1, P2, P3 e P4, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'Apenas o algoritmo **First-Fit** consegue alocar todos os quatro processos, deixando livre a partição B3.',
      },
      {
        letter: 'B',
        text: 'Apenas o algoritmo **Best-Fit** consegue alocar todos os quatro processos (alocando P1 em B4, P2 em B2, P3 em B1 e P4 em B5), acumulando $240\\text{ KB}$ de espaço desperdiçado nas partições alocadas.',
      },
      {
        letter: 'C',
        text: 'Os algoritmos **Best-Fit** e **Worst-Fit** conseguem alocar todos os quatro processos, enquanto o **First-Fit** falha ao tentar alocar P4.',
      },
      {
        letter: 'D',
        text: 'Nenhum dos três algoritmos consegue alocar o processo P4, pois a soma dos tamanhos dos processos excede a memória total disponível.',
      },
      {
        letter: 'E',
        text: 'Todos os três algoritmos conseguem alocar os quatro processos, diferenciando-se apenas pelo tempo de busca na lista de partições.',
      },
    ],
    correctOption: 'B',
    explanation: `Vamos simular cada algoritmo sobre as partições livres \`[B1=150, B2=450, B3=250, B4=320, B5=550]\`:

### 1. First-Fit (primeiro bloco onde couber)
- **P1 (260 KB):** alocado em **B2 (450 KB)**. Livres: \`B1(150), B3(250), B4(320), B5(550)\`.
- **P2 (400 KB):** alocado em **B5 (550 KB)**. Livres: \`B1(150), B3(250), B4(320)\`.
- **P3 (140 KB):** alocado em **B1 (150 KB)**. Livres: \`B3(250), B4(320)\`.
- **P4 (430 KB):** **NÃO PODE SER ALOCADO!** (Nenhum bloco livre tem tamanho $\\ge 430\\text{ KB}$.)

### 2. Best-Fit (menor bloco onde couber)
- **P1 (260 KB):** menor bloco $\\ge 260$ é **B4 (320 KB)** (sobra: $60\\text{ KB}$).
- **P2 (400 KB):** menor bloco livre $\\ge 400$ é **B2 (450 KB)** (sobra: $50\\text{ KB}$).
- **P3 (140 KB):** menor bloco livre $\\ge 140$ é **B1 (150 KB)** (sobra: $10\\text{ KB}$).
- **P4 (430 KB):** menor bloco livre $\\ge 430$ é **B5 (550 KB)** (sobra: $120\\text{ KB}$).
- **Resultado:** **Todos os 4 processos são alocados!** Espaço interno desperdiçado nas 4 partições ocupadas:
  $$60 + 50 + 10 + 120 = \\mathbf{240\\text{ KB}}$$
  (e a partição B3 de $250\\text{ KB}$ permanece livre).

### 3. Worst-Fit (maior bloco disponível)
- **P1 (260 KB):** alocado no maior bloco, **B5 (550 KB)**. Livres: \`B1(150), B2(450), B3(250), B4(320)\`.
- **P2 (400 KB):** alocado no maior restante, **B2 (450 KB)**. Livres: \`B1(150), B3(250), B4(320)\`.
- **P3 (140 KB):** alocado no maior restante, **B4 (320 KB)**. Livres: \`B1(150), B3(250)\`.
- **P4 (430 KB):** **NÃO PODE SER ALOCADO!**

Portanto, apenas o **Best-Fit** aloca todos os processos — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. O First-Fit falha ao tentar alocar P4 (430 KB), pois já consumiu B2 e B5 com P1 e P2.',
      B: 'Correta. Mapeamento exato do Best-Fit (B4, B2, B1, B5) e cálculo correto do desperdício interno total (60 + 50 + 10 + 120 = 240 KB).',
      C: 'Incorreta. O Worst-Fit também falha em P4 porque desperdiça B5 (550 KB) com P1 e B2 (450 KB) com P2.',
      D: 'Incorreta. A soma dos processos é 1 230 KB, menor que a memória total disponível (1 720 KB), e o Best-Fit aloca todos.',
      E: 'Incorreta. Apenas o Best-Fit consegue atender os quatro processos.',
    },
    keyConcept: 'Políticas de alocação contígua de memória (First-Fit, Best-Fit e Worst-Fit) e fragmentação.',
  },
  {
    id: 'inedita-2-q19',
    source: 'inedita-2',
    year: 2026,
    number: 19,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Memória Virtual, Algoritmos de Substituição de Páginas e Anomalia de Belady',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um engenheiro de sistemas operacionais avalia o comportamento do subsistema de memória virtual por demanda sob a seguinte cadeia de 12 referências a páginas virtuais (com todas as molduras físicas inicialmente vazias):

$$0,\\; 1,\\; 2,\\; 3,\\; 0,\\; 1,\\; 4,\\; 0,\\; 1,\\; 2,\\; 3,\\; 4$$

Para mensurar o impacto de ampliar a memória física alocada ao processo de **3 molduras** para **4 molduras**, ele compara as políticas de substituição **FIFO** (*First-In, First-Out*) e **LRU** (*Least Recently Used*).`,
    command: 'Quantas faltas de página (*page faults*) ocorrem em FIFO com 3 molduras, em FIFO com 4 molduras e em LRU com 4 molduras, respectivamente, e qual fenômeno clássico de sistemas operacionais é evidenciado por essa simulação?',
    options: [
      {
        letter: 'A',
        text: '9, 8 e 8 faltas de página; evidencia a propriedade de inclusão presente no algoritmo FIFO.',
      },
      {
        letter: 'B',
        text: '10, 9 e 7 faltas de página; evidencia o fenômeno de *thrashing* causado por páginas sujas.',
      },
      {
        letter: 'C',
        text: '9, 10 e 10 faltas de página; evidencia que tanto FIFO quanto LRU estão sujeitos à Anomalia de Belady.',
      },
      {
        letter: 'D',
        text: '9, 10 e 8 faltas de página; evidencia a **Anomalia de Belady** no algoritmo FIFO, que não ocorre em algoritmos de pilha como o LRU.',
      },
      {
        letter: 'E',
        text: '8, 10 e 7 faltas de página; evidencia a superioridade universal do algoritmo FIFO frente ao LRU em cadeias com localidade temporal.',
      },
    ],
    correctOption: 'D',
    explanation: `Vamos simular rigorosamente as três execuções passo a passo (ordenando o estado da memória do elemento mais antigo/menos recente à esquerda para o mais recente à direita):

### 1. FIFO com 3 molduras
| Ref. | 0 | 1 | 2 | 3 | 0 | 1 | 4 | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Fila** | \`0\` | \`0,1\` | \`0,1,2\` | \`1,2,3\` | \`2,3,0\` | \`3,0,1\` | \`0,1,4\` | \`0,1,4\` | \`0,1,4\` | \`1,4,2\` | \`4,2,3\` | \`4,2,3\` |
| **Falta?** | **F1** | **F2** | **F3** | **F4** | **F5** | **F6** | **F7** | Hit | Hit | **F8** | **F9** | Hit |

Total **FIFO (3 molduras) = 9 faltas de página**.

### 2. FIFO com 4 molduras
| Ref. | 0 | 1 | 2 | 3 | 0 | 1 | 4 | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Fila** | \`0\` | \`0,1\` | \`0,1,2\` | \`0,1,2,3\` | \`0,1,2,3\` | \`0,1,2,3\` | \`1,2,3,4\` | \`2,3,4,0\` | \`3,4,0,1\` | \`4,0,1,2\` | \`0,1,2,3\` | \`1,2,3,4\` |
| **Falta?** | **F1** | **F2** | **F3** | **F4** | Hit | Hit | **F5** | **F6** | **F7** | **F8** | **F9** | **F10** |

Total **FIFO (4 molduras) = 10 faltas de página**! (Aumentar de 3 para 4 molduras *piorou* de 9 para 10 faltas — a clássica **Anomalia de Belady**.)

### 3. LRU com 4 molduras (mais recentemente usada à direita)
| Ref. | 0 | 1 | 2 | 3 | 0 | 1 | 4 | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Pilha** | \`0\` | \`0,1\` | \`0,1,2\` | \`0,1,2,3\` | \`1,2,3,0\` | \`2,3,0,1\` | \`3,0,1,4\` | \`3,1,4,0\` | \`3,4,0,1\` | \`4,0,1,2\` | \`0,1,2,3\` | \`1,2,3,4\` |
| **Falta?** | **F1** | **F2** | **F3** | **F4** | Hit | Hit | **F5** | Hit | Hit | **F6** | **F7** | **F8** |

Total **LRU (4 molduras) = 8 faltas de página** (em 3 molduras o LRU teria 10 faltas; ao passar para 4 molduras, reduz para 8).

Como o **LRU** (assim como o algoritmo Ótimo) satisfaz a **propriedade de inclusão** (*stack algorithm*: o conjunto de páginas na memória com $k$ molduras é sempre subconjunto do conjunto com $k+1$ molduras), ele **nunca** sofre a Anomalia de Belady.

Portanto, a alternativa correta é **D**.`,
    optionAnalysis: {
      A: 'Incorreta. FIFO NÃO satisfaz a propriedade de inclusão e resulta em 10 faltas (não 8) com 4 molduras.',
      B: 'Incorreta. Erra as três contagens e confunde Anomalia de Belady com thrashing.',
      C: 'Incorreta. Erra a contagem do LRU com 4 molduras (8, não 10) e afirma incorretamente que o LRU sofre Anomalia de Belady.',
      D: 'Correta. Contagens exatas (9, 10 e 8) e explicação correta da Anomalia de Belady no FIFO e sua ausência no LRU.',
      E: 'Incorreta. Erra as contagens e a conclusão teórica sobre FIFO e localidade temporal.',
    },
    keyConcept: 'Substituição de páginas (FIFO vs. LRU), Anomalia de Belady e propriedade de inclusão em algoritmos de pilha.',
  },
];
