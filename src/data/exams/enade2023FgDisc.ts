import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';

export const ENADE_2023_FG: ObjectiveQuestion[] = [
  {
    id: 'enade-2023-q01',
    source: 'enade-2023',
    year: 2023,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Fome, Insegurança Alimentar e Desigualdade Global',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `A fome e a insegurança alimentar, antigos problemas da sociedade, são agravados em regiões com elevados índices de desigualdade social. Propor soluções para esse quadro requer uma abordagem multidimensional, que possibilite a interação entre as dimensões sociais, culturais, políticas, econômicas e ambientais envolvidas na produção e na distribuição de alimentos.

Considerando o texto e as imagens apresentados, avalie as asserções a seguir e a relação proposta entre elas.

**I.** A fome no mundo é um fenômeno biológico e sociológico inevitável.

**PORQUE**

**II.** A disponibilidade desigual de alimentos, o acirramento de conflitos geopolíticos, a formação de cadeias agrícolas globais e o aumento das catástrofes climáticas são fatores que impactam a segurança alimentar de um grande número de populações.`,
    images: [
      {
        src: '/images/enade-2023/q01-fig.png',
        alt: 'Três fotografias sobre fome e insegurança alimentar: impacto de conflitos sobre crianças vulneráveis (Unicef/Sayed Bidel), colheita de trigo perto da vila de Krasne na Ucrânia (FAO/Anatolii Stepanov) e secas em Madagascar colocando o país entre os de maior fome (Unicef/Safidy Andriananten).',
        caption: 'Fotos: Unicef/Sayed Bidel; FAO/Anatolii Stepanov; Unicef/Safidy Andriananten. Disponível em: https://news.un.org/pt/story/2022/05/1788102.',
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
    explanation: `Para resolver questões de asserção-razão, avaliamos primeiro o valor lógico de cada proposição de maneira independente:

1. **Análise da Asserção I (FALSA):** Afirmar que a fome é um fenômeno *biológico e sociológico inevitável* contraria frontalmente o texto-base e o consenso científico-social (como nos estudos clássicos de Josué de Castro e da FAO/ONU). O próprio texto afirma que é possível *propor soluções para esse quadro* mediante abordagem multidimensional. A fome não decorre da incapacidade biológica de produzir alimentos no planeta, mas sim de fatores estruturais, políticos, distributivos e socioeconômicos — portanto, é **evitável**.

2. **Análise da Asserção II (VERDADEIRA):** O enunciado e as três fotografias da ONU/Unicef/FAO ilustram exatamente esses fatores agravantes:
   - **Conflitos geopolíticos** (impacto sobre populações vulneráveis e guerra na Ucrânia, grande produtora de trigo);
   - **Cadeias agrícolas globais** (dependência mundial de commodities concentradas em poucos polos exportadores);
   - **Catástrofes climáticas** (secas severas em Madagascar);
   - **Disponibilidade desigual de alimentos** ligada à desigualdade social e econômica.

Logo, a asserção I é **falsa** e a asserção II é **verdadeira**, o que corresponde à alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A asserção I é falsa, pois a fome é um problema político, econômico e distributivo passível de solução, não um fenômeno inevitável.',
      B: 'Incorreta. Classifica erroneamente a asserção I como verdadeira.',
      C: 'Incorreta. Inverte completamente os valores lógicos: I é falsa e II é verdadeira.',
      D: 'Correta. I é falsa (a fome é evitável por meio de políticas e abordagem multidimensional) e II é verdadeira (reflete exatamente os fatores expostos no texto e nas fotografias).',
      E: 'Incorreta. A asserção II é verdadeira e encontra respaldo direto nas três imagens (conflitos, cadeia global de trigo na Ucrânia e secas em Madagascar).',
    },
    keyConcept: 'Segurança alimentar como questão multidimensional (social, política, econômica e climática) e não determinismo biológico.',
    reference: 'ONU News. Disponível em: https://news.un.org/pt/story/2022/05/1788102. Acesso em: 10 jun. 2023.',
  },
  {
    id: 'enade-2023-q02',
    source: 'enade-2023',
    year: 2023,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saneamento Básico, Urbanização e Saúde Pública no Brasil',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `O crescimento das cidades promove o aumento da demanda por serviços de água tratada, esgotamento sanitário, manejo das águas pluviais, limpeza urbana e coleta de resíduos sólidos. No Brasil, o processo de urbanização ocorreu de forma rápida e desigual, o que resultou no agravamento de injustiças sociais e econômicas. Os serviços de saneamento básico considerados direitos humanos fundamentais não são acessíveis a uma parcela significativa da população, principalmente àquela em que se concentram os segmentos populacionais em situação de vulnerabilidade.

O atendimento integral e universalizado junto às populações periféricas e em situação de vulnerabilidade constitui um grande desafio, por demandar políticas públicas e investimentos subsidiados e permanentes.

Acerca do saneamento básico no Brasil, avalie as afirmações a seguir.

**I.** A grave desigualdade social, evidenciada pela segregação nos espaços urbanos, é uma das barreiras para a universalização do acesso aos serviços de saneamento básico.

**II.** O serviço de abastecimento de água no Brasil situa-se no mesmo patamar de fornecimento e de infraestrutura que o sistema de coleta e tratamento do esgoto.

**III.** A universalização do acesso aos serviços de saneamento básico requer investimentos em políticas públicas e em tecnologias sociais que priorizem a democratização e o atendimento às populações em situação de vulnerabilidade.

**IV.** O aumento da incidência de doenças transmitidas pela água resulta não somente da inadequação dos serviços de saneamento, mas também da precariedade das condições de moradia da população em situação de vulnerabilidade.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada afirmação sobre o saneamento básico no Brasil:

- **Afirmação I (VERDADEIRA):** A urbanização acelerada e desigual gerou segregação socioespacial nas periferias e assentamentos precários, dificultando a chegada de redes de água, esgoto e drenagem a populações de baixa renda.
- **Afirmação II (FALSA):** Historicamente, existe um grande descompasso entre os serviços no Brasil. Segundo dados oficiais do SNIS (Sistema Nacional de Informações sobre Saneamento) e do IBGE, o atendimento de **abastecimento de água tratada** ultrapassa 84% da população brasileira, enquanto a **coleta de esgoto** gira em torno de 55% e o **tratamento do esgoto** coletado/gerado fica ainda mais baixo (em torno de 50%). Portanto, **não** estão no mesmo patamar.
- **Afirmação III (VERDADEIRA):** Conforme reforça o segundo parágrafo do texto, a universalização em áreas periféricas e vulneráveis exige políticas públicas permanentes, investimentos subsidiados e tecnologias sociais adaptadas às realidades locais.
- **Afirmação IV (VERDADEIRA):** Doenças de veiculação hídrica (diarreias infecciosas, hepatite A, leptospirose, esquistossomose, arboviroses associadas a acúmulo de água) decorrem da combinação entre falta de saneamento adequado e moradias precárias (sem instalações hidrossanitárias adequadas, em áreas alagadiças etc.).

Portanto, estão corretas apenas **I, III e IV** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. Inclui a afirmação II, que é falsa (cobertura de água é bem superior à de coleta e tratamento de esgoto), e omite III e IV.',
      B: 'Incorreta. Omite a afirmação III, que é verdadeira e dialoga diretamente com o texto-base.',
      C: 'Incorreta. Inclui a afirmação II (falsa) e omite I e IV.',
      D: 'Correta. Reúne exatamente as três afirmações verdadeiras (I, III e IV) e descarta II.',
      E: 'Incorreta. Inclui a afirmação II (falsa) e omite I.',
    },
    keyConcept: 'Desigualdade no acesso ao saneamento básico no Brasil (déficit maior em esgotamento sanitário do que em abastecimento de água) e seus impactos na saúde coletiva.',
    reference: 'Revista Verde Grande (Unimontes). Disponível em: https://www.periodicos.unimontes.br/index.php/verdegrande/article/view/6018. Acesso em: 22 jun. 2023 (adaptado).',
  },
  {
    id: 'enade-2023-q03',
    source: 'enade-2023',
    year: 2023,
    number: 3,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saúde Pública, Cobertura Vacinal e Interpretação de Gráficos',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Estudos realizados em 2021 pelo Fundo das Nações Unidas para a Infância (Unicef), em parceria com a Organização Mundial da Saúde (OMS), mostraram que, no Brasil, houve uma queda brusca da taxa de vacinação infantil nos últimos anos: entre 2017 e 2021, a taxa caiu de 93,1% para 71,49%, considerando-se crianças com menos de um ano de idade.

Essa redução da cobertura vacinal deixa a população infantil muito vulnerável e exposta a doenças que já estavam praticamente erradicadas, tal como o sarampo, que em 2018 voltou a ser uma preocupação para os brasileiros. Além do sarampo, corre-se o risco de outras doenças voltarem a acometer as crianças, como a poliomielite, a meningite, a rubéola e a difteria.

O gráfico a seguir mostra as taxas de vacinação infantil, em crianças menores de um ano de idade, no período de 2017 a 2021.`,
    images: [
      {
        src: '/images/enade-2023/q03-fig.png',
        alt: 'Gráfico de barras agrupadas apresentando o percentual de vacinação em crianças menores de 1 ano entre 2017 e 2021 para 7 imunizantes (BCG, Tríplice Viral D1, Tríplice Viral D2, Tetraviral, Poliomielite, Febre Amarela e Hepatite A) junto às respectivas metas de vacinação (90% para BCG e 95% para as demais).',
        caption: 'Percentual de vacinação em crianças menores de 1 ano (2017–2021). Fonte: Fiocruz (adaptado).',
      },
    ],
    command: 'Considerando as informações apresentadas no texto e no gráfico, assinale a opção correta.',
    options: [
      {
        letter: 'A',
        text: 'O percentual de vacinação com o imunizante da poliomielite se manteve constante na maior parte do período de 2017 a 2021.',
      },
      {
        letter: 'B',
        text: 'A baixa cobertura vacinal de crianças menores de um ano de idade é um dos indicadores de baixo desempenho das políticas públicas de atenção primária em saúde.',
      },
      {
        letter: 'C',
        text: 'A cobertura vacinal de crianças menores de um ano de idade foi muito variável, com alto índice vacinal da BCG e média cobertura da vacina tetraviral, no período de 2017 a 2021.',
      },
      {
        letter: 'D',
        text: 'O aumento da taxa de vacinação infantil contra a febre amarela em 2021, em comparação com o índice registrado em 2017, revela que as campanhas de conscientização da população foram bem-sucedidas quanto ao alcance da meta de vacinação contra essa enfermidade.',
      },
      {
        letter: 'E',
        text: 'A pandemia de Covid-19, ao ampliar a conscientização da população sobre a necessidade de manter alto índice vacinal para evitar o reaparecimento de doenças infectocontagiosas, contribuiu para o aumento da cobertura vacinal contra outras doenças, conforme indicado no gráfico.',
      },
    ],
    correctOption: 'B',
    explanation: `Confrontando cada alternativa diretamente com os valores numéricos do gráfico (2017 a 2021) e o texto:

- **Poliomielite (barra amarela, meta 95%):** 84,24% (2017) → 89,54% (2018) → 84,19% (2019) → 76,05% (2020) → 67,13% (2021). Houve forte variação e queda acentuada a partir de 2019 — não se manteve constante.
- **BCG (barra azul, meta 90%):** 97,98% (2017) → 99,72% (2018) → 86,67% (2019) → 74,03% (2020) → 65,93% (2021). Deixou de atingir a meta a partir de 2019 e caiu drasticamente.
- **Tetraviral (barra roxa, meta 95%):** 35,44% (2017) → 33,26% (2018) → 34,24% (2019) → 20,71% (2020) → 5,70% (2021). Cobertura extremamente baixa, longe de ser "média".
- **Febre Amarela (barra laranja, meta 95%):** 47,37% (2017) → 59,50% (2018) → 62,41% (2019) → 57,20% (2020) → 55,56% (2021). Apesar de 2021 (55,56%) estar acima de 2017 (47,37%), ficou **muito distante da meta de 95%** (além de cair em relação a 2019 e 2020).
- **Período pandêmico (2020–2021):** Todos os sete imunizantes apresentaram quedas expressivas em 2020 e 2021 em comparação a 2018–2019.

Na saúde pública (e no âmbito do SUS/Programa Nacional de Imunizações), a imunização infantil integra o núcleo da **atenção primária em saúde**; quedas persistentes na cobertura abaixo das metas oficiais (90%–95%) são um indicador direto de baixo desempenho das políticas públicas nessa esfera. Logo, a resposta correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. A poliomielite subiu de 84,24% para 89,54% e depois despencou sucessivamente para 84,19%, 76,05% e 67,13%, não permanecendo constante.',
      B: 'Correta. A vacinação infantil de rotina é eixo central da atenção primária à saúde, sendo a queda brusca de cobertura um indicador clássico de fragilidade nas políticas públicas de atenção básica.',
      C: 'Incorreta. A cobertura da tetraviral foi baixíssima (entre 35,44% e apenas 5,70% em 2021), não "média", e a própria BCG caiu para 65,93% em 2021.',
      D: 'Incorreta. A meta da febre amarela é de 95%, enquanto o índice de 2021 foi de apenas 55,56%, muito aquém do alcance da meta.',
      E: 'Incorreta. O gráfico demonstra exatamente o oposto: durante a pandemia (2020 e 2021), todas as vacinas sofreram queda expressiva de cobertura.',
    },
    keyConcept: 'Leitura crítica de séries históricas em gráficos e papel da cobertura vacinal como indicador de atenção primária em saúde.',
    reference: 'Portal Fiocruz. Disponível em: https://portal.fiocruz.br/noticia/vacinacao-infantil-sofre-queda-brusca-no-brasil. Acesso em: 23 jun. 2023 (adaptado).',
  },
  {
    id: 'enade-2023-q04',
    source: 'enade-2023',
    year: 2023,
    number: 4,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Inteligência Artificial Generativa, Ética e Impactos Socioeconômicos',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `**TEXTO 1**

A Inteligência Artificial (IA) generativa é capaz de criar novos dados, únicos, que possibilitam aprender por conta própria, indo além do que a tecnologia tradicional proporciona, visto que esta precisa de intervenção humana. Um exemplo da IA generativa é o ChatGPT, que pode gerar imagens, músicas e textos completamente novos. Entre outras coisas, por meio da IA generativa, é possível elaborar modelos de previsão de testes clínicos, realizar a identificação de padrões em exames médicos e, ainda, auxiliar no diagnóstico de doenças.

*Disponível em: https://olhardigital.com.br/2023/07/12/internet-e-redes-sociais/inteligencia-artificial-generativa-o-que-e-como-funciona-e-onde-usar/. Acesso em: 2 ago. 2023 (adaptado).*

**TEXTO 2**

Acredita-se que a tecnologia de IA generativa será disruptiva e, portanto, capaz de alterar drasticamente a maneira como o ser humano se relaciona com as máquinas. O uso da IA generativa pode causar importante revolução no segmento de produção de conteúdo. Muitas dessas consequências poderão ser maléficas para diversos setores da sociedade. Além do mau uso dessa tecnologia e das questões éticas, avalia-se que ela pode agravar a desigualdade econômico-social, tanto entre nações quanto entre indivíduos da mesma nação.

*Disponível em: https://canaltech.com.br/inteligencia-artificial/o-que-e-ia-generativa/. Acesso em: 2 ago. 2023 (adaptado).*`,
    command: 'Considerando os textos apresentados, é correto afirmar que a IA generativa',
    options: [
      {
        letter: 'A',
        text: 'proporciona novos recursos de linguagem que geram tecnologias capazes de realizar interações próprias dos seres humanos.',
      },
      {
        letter: 'B',
        text: 'restringe o aprendizado ao que é legalmente estabelecido e útil ao ser humano, o que facilita seu modo de agir no mundo do conhecimento e do trabalho.',
      },
      {
        letter: 'C',
        text: 'promove a igualdade econômico-social ao substituir o ser humano no exercício de profissões cujas atividades sejam repetitivas e exijam pouco conhecimento.',
      },
      {
        letter: 'D',
        text: 'gera pouco impacto socioeconômico em países com elevado desenvolvimento tecnológico, pois, neles, os processos de criação e inovação já estão bem consolidados.',
      },
      {
        letter: 'E',
        text: 'estimula o desenvolvimento intelectual dos seres humanos, uma vez que ela assume parte do conhecimento, resolvendo problemas antes delegados apenas a especialistas.',
      },
    ],
    correctOption: 'A',
    explanation: `Cruzando os dois textos sobre IA generativa:

- O **Texto 1** destaca a capacidade criativa e autônoma da IA generativa (exemplificada pelo ChatGPT) de produzir textos, imagens e músicas originais e apoiar tarefas complexas como diagnósticos médicos.
- O **Texto 2** ressalta o caráter disruptivo da tecnologia na relação humano-máquina e na produção de conteúdo, alertando para riscos éticos, mau uso e agravamento das desigualdades econômico-sociais (tanto entre países quanto dentro de um mesmo país).

Assim, apenas a alternativa **A** sintetiza corretamente o conteúdo dos textos: ferramentas como modelos generativos de linguagem (ex. ChatGPT) criam novos recursos linguísticos/comunicativos capazes de reproduzir interações tipicamente humanas, transformando a relação entre pessoas e máquinas.`,
    optionAnalysis: {
      A: 'Correta. Reflete diretamente a descrição do ChatGPT (Texto 1) e a alteração drástica da interação humano-máquina e produção de conteúdo (Texto 2).',
      B: 'Incorreta. Contradiz o Texto 2, que alerta expressamente para o mau uso da tecnologia, questões éticas e consequências potencialmente maléficas.',
      C: 'Incorreta. O Texto 2 afirma exatamente o contrário: a IA generativa pode agravar a desigualdade econômico-social (e não promove igualdade, nem se limita a atividades de pouco conhecimento).',
      D: 'Incorreta. O Texto 2 afirma que a desigualdade pode se agravar também "entre indivíduos da mesma nação", afetando inclusive países tecnologicamente desenvolvidos.',
      E: 'Incorreta. Os textos não afirmam que delegar problemas à IA estimule automaticamente o desenvolvimento intelectual humano — trata-se de extrapolação sem respaldo textual.',
    },
    keyConcept: 'Compreensão textual interdisciplinar sobre capacidades, disrupção e dilemas ético-sociais da IA generativa.',
    reference: 'Olhar Digital e Canaltech (2023).',
  },
  {
    id: 'enade-2023-q05',
    source: 'enade-2023',
    year: 2023,
    number: 5,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Direito à Cidade, Mobilidade Urbana e Segurança de Gênero',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Os seguintes ícones foram utilizados em um estudo realizado por um grupo de trabalho de monitoramento da relação das mulheres com a mobilidade urbana na cidade de São Paulo. Na pesquisa, perguntou-se às mulheres como elas se sentiam nas situações representadas por tais imagens.

As respostas relativas a cada tipo de mobilidade urbana são apresentadas a seguir.

Considerando o estudo apresentado e relacionando o trabalho de monitoramento social das necessidades de mulheres no contexto urbano aos pressupostos do direito à cidade, avalie as afirmações a seguir.

**I.** A predominância de comentários negativos indica o medo generalizado que as mulheres sentem ao se deslocarem ativamente pela cidade, inclusive quanto à percepção de seu corpo no espaço urbano.

**II.** Os comentários negativos sobre os modos coletivos de transporte estão relacionados à lotação nesses meios e a situações de assédio, tendo sido o metrô avaliado como um espaço um pouco mais seguro para as mulheres, em comparação com outras formas de mobilidade.

**III.** Os comentários negativos refletem a percepção das mulheres quanto ao perigo a que se expõem e sugerem que o medo relacionado à vulnerabilidade de gênero aponta para uma geografia particular nas cidades, em que os meios de transporte afetam os movimentos rotineiros das mulheres no espaço urbano.`,
    images: [
      {
        src: '/images/enade-2023/q05-fig.png',
        alt: 'Quadro com seis situações de mobilidade urbana e as palavras relatadas por mulheres: Ando a pé (Atenta, Cansada, Insegura, Ansiosa), Pego o ônibus (Desconfortável, Insegura, Péssima), Ando de bicicleta (Não ando, Livre), Ando de Metrô (Atenta aos assédios, Observada, Desconfiada, Um pouco mais segura), Ando de trem (Em pânico, Apertada) e Frequento o espaço público (Nem fico, tenho medo, Passo correndo, Em alerta).',
        caption: 'Coletivo Fórum Regional das Mulheres da Zona Norte, Rede MÁS, Sampapé! (2018). Projeto Mulheres Caminhantes! Terminal Santana, São Paulo, SP (adaptado).',
      },
    ],
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'E',
    explanation: `Analisando cada afirmação à luz do quadro de respostas das participantes:

- **Afirmação I (VERDADEIRA):** Em praticamente todos os modais e espaços predominam relatos negativos (*"Insegura"*, *"Ansiosa"*, *"Em pânico"*, *"Desconfiada"*, *"Nem fico, tenho medo"*, *"Passo correndo"*, *"Em alerta"*, *"Observada"*). Isso evidencia medo difuso e hipervigilância sobre o próprio corpo durante o deslocamento urbano.
- **Afirmação II (VERDADEIRA):** Nos modais coletivos aparecem explicitamente a lotação (*"Apertada"* no trem, *"Desconfortável"* no ônibus) e o assédio (*"Atenta aos assédios"*, *"Observada"* no metrô). Ainda assim, o metrô é o único modo coletivo em que consta a expressão *"Um pouco mais segura"*.
- **Afirmação III (VERDADEIRA):** O medo e a vulnerabilidade de gênero condicionam escolhas concretas de circulação (*"Não ando"* de bicicleta, *"Nem fico, tenho medo"*, *"Passo correndo"* no espaço público), configurando uma geografia desigual no exercício do direito à cidade e restringindo trajetos cotidianos.

Todas as três afirmações são corretas — alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Omite as afirmações II e III, que também são verdadeiras.',
      B: 'Incorreta. Omite as afirmações I e II, que também são verdadeiras.',
      C: 'Incorreta. Omite a afirmação III, que traduz com precisão a relação entre vulnerabilidade de gênero e direito à cidade.',
      D: 'Incorreta. Omite a afirmação I, diretamente evidenciada pela predominância de relatos negativos no quadro.',
      E: 'Correta. Todas as afirmações (I, II e III) têm pleno respaldo nos dados do quadro e no conceito de direito à cidade.',
    },
    keyConcept: 'Direito à cidade, mobilidade urbana sob perspectiva de gênero e análise de dados qualitativos.',
    reference: 'Coletivo Fórum Regional das Mulheres da Zona Norte, Rede MÁS, Sampapé! (2018). Projeto Mulheres Caminhantes!',
  },
  {
    id: 'enade-2023-q06',
    source: 'enade-2023',
    year: 2023,
    number: 6,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Memória, Identidade Cultural e Representação da População Negra no Brasil',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `**TEXTO 1**

Maria Bárbara tinha o verdadeiro tipo das velhas maranhenses criadas na fazenda. Tratava muito dos avós, quase todos portugueses. Quando falava dos pretos, dizia “os sujos” e, quando se referia a um mulato dizia “o cabra”. Maria Bárbara tinha grande admiração pelos portugueses, dedicava-lhes um entusiasmo sem limites, preferia-os em tudo aos brasileiros. Quando a filha foi pedida por Manuel Pedroso, então principiante no comércio da capital, ela dissera: “Bem! Ao menos tenho a certeza de que é branco!”

*AZEVEDO, A. **O mulato**. São Luís: Typografia o Paiz, 1881 (adaptado).*

**TEXTO 2**

A morte brinca com balas nos dedos gatilhos dos meninos. Dorvi se lembrou do combinado, o juramento feito em voz uníssona, gritado sob o pipocar dos tiros:

— A gente combinamos de não morrer!

Balas enfeitam o coração da noite. Não gosto de filmes da tevê. Morre e mata de mentira. Aqui, não. Às vezes a morte é leve como a poeira. E a vida se confunde com um pó branco qualquer. Às vezes é uma fumaça adocicada enchendo o pulmão da gente.

*EVARISTO, C. **Olhos d'água**. Rio de Janeiro: Pallas. Fundação Biblioteca Nacional, 2016 (adaptado).*

**TEXTO 3**

*O Cria* é uma releitura da pintura “O Mestiço” de Cândido Portinari. Em sua obra, Del Nunes personifica a identidade do jovem brasileiro das periferias do Brasil. Oriundo de São Cristóvão, bairro periférico de Salvador, o artista transmite em suas produções a essência da cultura preta, cria e recria momentos do povo negro apagados pela história, divulgando-as nas redes sociais.

A partir das informações apresentadas e tendo em vista a possibilidade das várias manifestações culturais estabelecerem relação com a construção da memória e a definição da identidade cultural de um povo, avalie as afirmações a seguir.

**I.** Os trechos das obras apresentadas nos textos 1 e 2 e a ressignificação artística proposta no texto 3 resgatam uma reflexão acerca da condição histórica da maioria da população brasileira.

**II.** Ao longo do processo histórico de constituição da identidade do povo brasileiro, o convívio cooperativo e cordial entre as diferentes culturas contribuiu para a integração e o respeito às diferenças étnicas e religiosas.

**III.** A produção de conteúdo artístico que proponha a reflexão sobre a condição social da população negra provoca a quebra do silenciamento imposto pelo processo de segregação historicamente promovido pelo processo de colonização.

**IV.** A arte expressa no texto 3, ao imitar uma obra clássica de Portinari, apresenta limitação na promoção do empoderamento da população afrodescendente, provocando um acirramento cultural.`,
    images: [
      {
        src: '/images/enade-2023/q06-fig.png',
        alt: 'Obra digital "O Cria", de Del Nunes: jovem negro de braços cruzados com óculos escuros e fone, segurando o livro "Olhos d\'água" (de Conceição Evaristo) e um CD dos Racionais, com um sagui no ombro e uma favela ao pôr do sol ao fundo, em releitura contemporânea da pintura "O Mestiço" de Cândido Portinari.',
        caption: 'DEL NUNES. O Cria. Disponível em: https://www.instagram.com/p/CgCSOKegX4J/. Acesso em: 13 jun. 2023.',
      },
    ],
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'II.' },
      { letter: 'B', text: 'IV.' },
      { letter: 'C', text: 'I e III.' },
      { letter: 'D', text: 'I e IV.' },
      { letter: 'E', text: 'II e III.' },
    ],
    correctOption: 'C',
    explanation: `Analisando as quatro afirmações em diálogo com os três textos (Aluísio Azevedo, Conceição Evaristo e Del Nunes):

- **Afirmação I (VERDADEIRA):** A população negra (pretos e pardos) constitui a maioria da população brasileira (mais de 55% segundo o Censo IBGE). O Texto 1 denuncia o racismo estrutural no século XIX; o Texto 2 retrata a violência cotidiana nas periferias contemporâneas; o Texto 3 ressignifica visualmente essa identidade (inclusive citando diretamente *Olhos d'água* e os Racionais nas mãos do jovem). Os três promovem reflexão sobre essa condição histórica.
- **Afirmação II (FALSA):** Reproduz o *mito da democracia racial* ("convívio cooperativo e cordial"), que é diretamente desmentido pelo preconceito explícito do Texto 1, pela violência letal do Texto 2 e pelo apagamento histórico mencionado no Texto 3.
- **Afirmação III (VERDADEIRA):** Como o próprio Texto 3 destaca, a arte de Del Nunes (assim como a literatura de Conceição Evaristo) "cria e recria momentos do povo negro apagados pela história", rompendo o silenciamento herdado da colonização e da escravidão.
- **Afirmação IV (FALSA):** *O Cria* não é uma imitação passiva nem limitadora; trata-se de uma **releitura criativa e ressignificação** que valoriza símbolos da cultura negra e periférica, promovendo representatividade e empoderamento.

Logo, apenas **I e III** estão corretas (alternativa **C**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação II é falsa por reproduzir uma visão idealizada e harmoniosa contradita pelos três textos.',
      B: 'Incorreta. A afirmação IV desqualifica erroneamente a releitura artística de Del Nunes.',
      C: 'Correta. I e III captam fielmente o papel crítico e emancipatório da literatura e das artes visuais na construção da memória e identidade negra.',
      D: 'Incorreta. Inclui a afirmação IV (falsa) e exclui III (verdadeira).',
      E: 'Incorreta. Inclui a afirmação II (falsa) e exclui I (verdadeira).',
    },
    keyConcept: 'Relações étnico-raciais, memória histórica, crítica ao mito da democracia racial e ressignificação artística.',
    reference: 'Aluísio Azevedo (1881); Conceição Evaristo (2016); Del Nunes (2023).',
  },
  {
    id: 'enade-2023-q07',
    source: 'enade-2023',
    year: 2023,
    number: 7,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Envelhecimento Populacional, Mercado de Trabalho e Etarismo',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `No Brasil, os idosos têm sido cada vez mais obrigados a permanecer no trabalho formal ou informal, mesmo após a aposentadoria, visto que os recursos provenientes desta, na maioria dos casos, são insuficientes para a manutenção dos indivíduos. Um fator que pode ter agravado essa situação foi a aprovação da reforma previdenciária de 2019, que modificou as regras de idade e contribuição para o acesso ao direito ao benefício da aposentadoria. Tal mudança pode ter resultado em um número ainda maior de idosos que disputam com as populações jovens e com sistemas de automação, no mercado atual, o trabalho precarizado. Essa situação contribui para o acirramento do preconceito contra essa faixa etária, denominado etarismo.

Considerando o texto apresentado, avalie as afirmações a seguir.

**I.** O conceito de etarismo fundamenta-se no fato de os idosos terem capacidade de trabalho reduzida e imporem custo elevado à previdência social, o que compromete a sua sustentabilidade econômica.

**II.** As ações legislativas que visem ao prolongamento do tempo de atuação da população idosa no mercado de trabalho devem ser acompanhadas por uma política de promoção da saúde e da qualidade de vida.

**III.** As ações intergeracionais no mercado de trabalho têm como premissa o desenvolvimento de tecnologias que dotem o idoso de capacidade de trabalho equivalente à de seus colegas jovens.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'II, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'I e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'A',
    explanation: `Avaliando cuidadosamente cada proposição:

- **Afirmação I (FALSA):** Etarismo (ou idadismo) é definido como o **preconceito, estereótipo ou discriminação** contra pessoas em razão da sua idade — não se fundamenta num suposto "fato" objetivo de incapacidade produtiva ou de culpa pela sustentabilidade da previdência. Tratar esse estereótipo como fato naturaliza justamente o preconceito criticado.
- **Afirmação II (VERDADEIRA):** Estender a vida laboral da população idosa (como ocorreu com o aumento da idade mínima na reforma previdenciária) exige políticas públicas integradas de saúde, prevenção, ergonomia e qualidade de vida, garantindo envelhecimento ativo e condições dignas de trabalho.
- **Afirmação III (FALSA):** Ações intergeracionais no trabalho baseiam-se na **cooperação, troca de saberes, respeito à diversidade etária e complementaridade** entre gerações — e não na ideia capacitista/produtivista de "equipar tecnologicamente" o idoso para que ele performe igualmente a um trabalhador jovem.

Portanto, apenas a afirmação **II** está correta (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Apenas II é verdadeira e coerente com políticas públicas de proteção à pessoa idosa.',
      B: 'Incorreta. A afirmação III distorce o conceito de ações intergeracionais, reduzindo-as a uma visão tecnicista e produtivista.',
      C: 'Incorreta. A afirmação I é falsa porque valida o estereótipo etarista como se fosse um fato objetivo.',
      D: 'Incorreta. Tanto I quanto III são falsas.',
      E: 'Incorreta. Inclui as afirmações falsas I e III.',
    },
    keyConcept: 'Etarismo (preconceito etário), envelhecimento populacional, previdência social e políticas de saúde do trabalhador idoso.',
  },
  {
    id: 'enade-2023-q08',
    source: 'enade-2023',
    year: 2023,
    number: 8,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Encarceramento Feminino, Divisão Sexual do Trabalho e Sistema Penal',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `Recentemente, a população carcerária feminina do Brasil tornou-se a terceira maior do mundo. A situação do encarceramento feminino por tráfico de drogas e outras situações que circundam o assunto foi tema de discussão da Secretaria de Políticas sobre Drogas do Ministério da Justiça e Segurança Pública (Senad/MJSP), em seminário realizado em abril de 2023. O evento contou com a participação de 23 países. Segundo os dados apresentados pela Senad, a incidência penal sobre drogas no Brasil é uma das principais causas de prisão de mulheres, chegando a 54% dos casos de encarceramento, contra 28% dos homens, índice que impacta em aspectos como maternidade e primeira infância.

Acerca do tema apresentado, avalie as asserções a seguir e a relação proposta entre elas.

**I.** A maioria das mulheres envolvidas em atividades do tráfico encontra-se em posições hierarquicamente inferiores, sendo classificadas como “mulas e aviões”, o que revela a reprodução, no mercado ilegal, da divisão sexual do trabalho observada no mercado formal.

**PORQUE**

**II.** O sistema penal agrava a situação de vulnerabilidade das mulheres encarceradas, seja pela invisibilização com que as trata, seja por meio da violência institucional que reproduz a violência estrutural das relações sociais patriarcais.`,
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
    explanation: `Analisando as duas proposições e o nexo causal proposto entre elas:

1. **Asserção I (VERDADEIRA):** Pesquisas criminológicas e relatórios oficiais (como Infopen Mulheres e Senad/MJSP) confirmam que a maioria das mulheres presas por tráfico ocupa funções subalternas, de baixo retorno e alta exposição policial (transporte/varejo como "mulas" e "aviões"), reproduzindo no mercado ilícito a mesma divisão sexual e hierárquica do trabalho existente no mercado formal.

2. **Asserção II (VERDADEIRA):** O sistema prisional brasileiro — concebido historicamente sob parâmetros masculinos — agrava a vulnerabilidade das mulheres encarceradas, invisibilizando demandas específicas (saúde ginecológica, gestação, maternidade, cuidados com a primeira infância) e reproduzindo violências institucionais e patriarcais.

3. **Relação de causalidade (NÃO É JUSTIFICATIVA):** A asserção II descreve o que acontece **dentro do sistema penal após o aprisionamento**, enquanto a asserção I trata da **posição hierárquica das mulheres dentro da estrutura do tráfico antes da prisão**. O tratamento recebido no sistema penal não é a *causa* de as mulheres ocuparem cargos subalternos no tráfico.

Portanto, ambas são verdadeiras, mas II não justifica I — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Embora I e II sejam verdadeiras, não há relação de causa e efeito direta em que o tratamento no sistema penal (II) explique a hierarquia feminina no tráfico (I).',
      B: 'Correta. Ambas as proposições são verdadeiras e complementares no debate sobre encarceramento feminino, mas independentes quanto ao nexo causal.',
      C: 'Incorreta. A asserção II é verdadeira, refletindo a realidade documentada de vulnerabilidade e violência institucional contra mulheres presas.',
      D: 'Incorreta. A asserção I é verdadeira e respaldada por levantamentos sobre o perfil do encarceramento feminino por tráfico.',
      E: 'Incorreta. Ambas as asserções são proposições verdadeiras.',
    },
    keyConcept: 'Distinção entre validade isolada e nexo causal em questões de asserção-razão sobre desigualdade de gênero e sistema penal.',
    reference: 'Ministério da Justiça e Segurança Pública (Senad/MJSP). Disponível em: https://www.gov.br/mj/pt-br/assuntos/noticias/senad-discute-situacao-de-mulheres-encarceradas-no-contexto-de-drogas-no-brasil. Acesso em: 15 jun. 2023 (adaptado).',
  },
  {
    id: 'enade-2023-q09',
    source: 'enade-2023',
    year: 2023,
    number: 9,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Sociedade do Desempenho, Hiperconectividade e Saúde Mental',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `A sociedade do século XXI não é mais uma sociedade disciplinar, mas, sim, uma sociedade do desempenho. Os seus habitantes também não se chamam mais sujeitos de obediência, mas, sim, sujeitos de desempenho e produção. São empresários de si mesmos.

*BYUNG-CHUL HAN. **Sociedade do Cansaço**. Petrópolis: Vozes, 2015 (adaptado).*

Considerando o texto apresentado, avalie as afirmações a seguir.

**I.** Os recursos tecnológicos, como notificações de mensagens em tempo real e controle da velocidade de áudio em redes de mensagens, são fatores que podem contribuir para a precarização das relações de trabalho na sociedade contemporânea.

**II.** As medidas pessoais de proteção à saúde mental e de promoção da qualidade de vida incluem a desativação de aplicativos e mecanismos de notificações instantâneas, bem como a fixação de horários para uso profissional e uso recreativo das tecnologias digitais.

**III.** As medidas públicas de prevenção das doenças e dos danos sociais associados ao uso excessivo dos recursos tecnológicos de comunicação envolvem estímulos ao letramento digital, à alfabetização midiática e à regulamentação do uso de plataformas digitais no ambiente de trabalho.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'E',
    explanation: `Em *Sociedade do Cansaço*, o filósofo sul-coreano Byung-Chul Han analisa a transição da sociedade disciplinar (Foucault) para a sociedade do desempenho, marcada pela autoexploração, hiperatividade e esgotamento (*burnout*). Avaliando as afirmações:

- **Afirmação I (VERDADEIRA):** Notificações instantâneas e aceleração de áudios (1,5x/2x) intensificam a urgência permanente e diluem fronteiras entre jornada laboral e descanso, favorecendo disponibilidade ininterrupta e precarização das relações de trabalho.
- **Afirmação II (VERDADEIRA):** No âmbito individual (higiene digital), desativar notificações invasivas e estabelecer horários claros separando uso profissional e lazer são medidas efetivas para preservar a saúde mental e o direito à desconexão.
- **Afirmação III (VERDADEIRA):** No âmbito coletivo/estatal, políticas públicas de prevenção incluem educação crítica (letramento digital e alfabetização midiática) e marcos regulatórios sobre o uso de plataformas digitais e direito à desconexão no trabalho.

Todas as três afirmações são corretas — alternativa **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Omite as medidas individuais (II) e públicas (III), ambas igualmente válidas.',
      B: 'Incorreta. Omite as afirmações I e II.',
      C: 'Incorreta. Omite a afirmação III, que traz medidas públicas pertinentes (letramento digital e regulamentação).',
      D: 'Incorreta. Omite a afirmação I, que relaciona corretamente aceleração digital e precarização laboral.',
      E: 'Correta. I, II e III articulam o diagnóstico do problema e as estratégias de enfrentamento nas esferas individual e pública.',
    },
    keyConcept: 'Sociedade do desempenho (Byung-Chul Han), direito à desconexão, saúde mental e letramento digital.',
    reference: 'HAN, Byung-Chul. Sociedade do Cansaço. Petrópolis: Vozes, 2015 (adaptado).',
  },
];

export const ENADE_2023_DISCURSIVE: DiscursiveQuestion[] = [
  {
    id: 'enade-2023-d01',
    source: 'enade-2023',
    year: 2023,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Desigualdade Socioespacial, Pobreza e Riscos Socioambientais Urbanos',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: false,
    context: `Na publicação *Síntese de Indicadores Sociais*, divulgada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) em 2022, é sistematizado um conjunto de informações sobre a realidade social brasileira. Os indicadores ilustram a heterogeneidade da sociedade sob a perspectiva das desigualdades sociais e, de modo geral, demonstram que todas as Grandes Regiões do Brasil registraram aumento da extrema pobreza em 2021. Pelos critérios do Banco Mundial, cerca de 29,4% da população do Brasil estavam em situação de pobreza e 8,4%, de extrema pobreza, sendo esses os maiores percentuais de ambos os grupos desde o início da série, em 2012. O índice de Gini, indicador que permite analisar o nível de igualdade ou desigualdade de uma região ou de um país, teve seu valor elevado e atingiu o segundo maior patamar da série. Com esses resultados, o Brasil permanece entre os países mais desiguais do mundo. Além disso, a urbanização desigual e acelerada resultou na expansão e no agravamento de diversos problemas socioambientais. São evidentes as desigualdades territoriais no acesso a áreas com infraestrutura adequada nas cidades brasileiras. É na periferia, marcada pela estratificação e segregação socioespacial, que se consolida a exclusão da população vulnerabilizada socioeconomicamente.

*Disponível em: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/35687-em-2021-pobreza-tem-aumento-recorde-e-atinge-62-5-milhoes-de-pessoas-maior-nivel-desde-2012. Acesso em: 9 jun. 2023 (adaptado).*

A partir das ideias apresentadas no texto, faça o que se pede nos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Explique a relação entre o perfil da população brasileira atingida pelas desigualdades sociais nas cidades e os fenômenos de risco socioambiental.',
        points: 5.0,
      },
      {
        label: 'b)',
        text: 'Apresente duas propostas que possam ser desenvolvidas em bairros periféricos com condições habitacionais precárias, de forma a serem minimizados os riscos socioambientais, e que envolvam ação governamental e participação da comunidade.',
        points: 5.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (INEP)

**a) Relação entre desigualdade social e riscos socioambientais (5,0 pontos):**

O estudante deve percorrer o seguinte trajeto teórico-argumentativo:
1. **Descrever os riscos socioambientais** que afetam a população com perfil pobre ou extremamente pobre, tais como inundações, deslizamentos de terra, contaminação ambiental, maior vulnerabilidade em relação a doenças, discriminação social e criminalidade, entre outros.
2. **Descrever o meio (geográfico ou social)**, como morros, áreas próximas a rios, mangues, encostas sem infraestrutura e espaços marcados pela violência urbana, nas cidades brasileiras, como fator de criação ou potencialização das condições de vulnerabilidade e risco aos pobres ou extremamente pobres.
3. **Estabelecer nexo causal** entre pobreza ou extrema pobreza, o meio (geográfico ou social) urbano e a situação de risco socioambiental, relacionando ao perfil socioeconômico da população (a exclusão do mercado formal de solo urbano empurra a população vulnerabilizada para áreas de risco e periferias desprovidas de infraestrutura).

---

**b) Duas propostas envolvendo ação governamental e participação da comunidade (5,0 pontos):**

O estudante deverá apresentar duas propostas pertinentes, factíveis e bem desenvolvidas que articulem **ação governamental** (federal, estadual/distrital ou municipal) e **participação comunitária** para minimizar riscos socioambientais, tais como:
- **Obras de infraestrutura urbana e saneamento básico:** contenção de morros e encostas, abastecimento regular de água, coleta e tratamento de esgotos, coleta e manejo de resíduos sólidos e drenagem de águas pluviais, com fiscalização, mapeamento participativo e ações de educação ambiental junto aos moradores.
- **Políticas sociais e habitação digna:** provisão de moradia adequada com custo acessível e regularização fundiária; educação de qualidade, segurança pública e atendimento psicossocial com atenção especial a grupos vulneráveis, construídos em diálogo com associações de bairro e conselhos locais.
- **Equipamentos públicos e áreas verdes:** garantia de acesso das comunidades periféricas a equipamentos sociais e culturais, espaços públicos inclusivos e áreas verdes (parques lineares e zonas permeáveis que também reduzem enchentes), com gestão compartilhada.
- **Planos estratégicos participativos:** elaboração de planos diretores, planos de redução de riscos e planos ambientais participativos (incluindo núcleos comunitários de defesa civil) desenvolvidos diretamente nas comunidades vulneráveis.`,
    rubricCriteria: [
      {
        id: 'd01-c1',
        label: 'Item a) Identificação dos riscos socioambientais',
        description: 'Descreve riscos concretos que atingem a população pobre e extremamente pobre (deslizamentos, inundações, contaminação, doenças, violência urbana etc.).',
        maxPoints: 1.5,
      },
      {
        id: 'd01-c2',
        label: 'Item a) Caracterização do meio geográfico ou social',
        description: 'Caracteriza os territórios urbanos vulneráveis (morros, encostas, margens de rios, mangues, periferias sem infraestrutura ou marcadas por segregação).',
        maxPoints: 1.5,
      },
      {
        id: 'd01-c3',
        label: 'Item a) Nexo causal entre perfil socioeconômico e risco',
        description: 'Articula explicitamente como a pobreza/extrema pobreza e a segregação socioespacial condicionam a ocupação dessas áreas e potencializam os riscos socioambientais.',
        maxPoints: 2.0,
      },
      {
        id: 'd01-c4',
        label: 'Item b) Proposta 1 (governo + comunidade)',
        description: 'Apresenta primeira proposta factível e bem desenvolvida para bairros periféricos, articulando claramente ação governamental e participação comunitária.',
        maxPoints: 2.5,
      },
      {
        id: 'd01-c5',
        label: 'Item b) Proposta 2 (governo + comunidade)',
        description: 'Apresenta segunda proposta distinta, factível e bem desenvolvida, também articulando ação governamental e participação da comunidade na redução de riscos.',
        maxPoints: 2.5,
      },
    ],
    studyTips: `1. **Respeite o limite de 15 linhas:** Organize a resposta em dois parágrafos bem demarcados — um para o item **a)** (~7 linhas) e outro para o item **b)** (~8 linhas).
2. **Não esqueça o nexo causal no item a):** Apenas citar pobreza e enchentes sem explicar *por que* a desigualdade empurra os mais pobres para encostas, fundos de vale e periferias sem saneamento faz perder pontos.
3. **Explicite os DOIS agentes no item b):** O enunciado exige **ação governamental E participação da comunidade** em cada proposta. Nomeie o papel do poder público (ex.: prefeitura/governo financiando contenção de encostas, saneamento ou regularização fundiária) e o papel da comunidade (ex.: associações de moradores, núcleos comunitários de defesa civil, mapeamento participativo e mutirões educativos).`,
    reference: 'IBGE. Síntese de Indicadores Sociais (2022).',
  },
  {
    id: 'enade-2023-d02',
    source: 'enade-2023',
    year: 2023,
    number: 2,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Quicksort, Particionamento e Análise de Complexidade em C',
    difficulty: 'dificil',
    maxLines: 15,
    isCodeQuestion: true,
    context: `Considere que uma rede de varejo resolva consolidar a base de dados de suas $M$ lojas, o que resulta em uma tabela $X$ não ordenada com $N$ registros de clientes, possivelmente repetidos. Devido à necessidade de se criar uma tabela $Y$ contendo os clientes da tabela $X$ com as repetições eliminadas, cogita-se utilizar dois possíveis algoritmos, os quais são apresentados a seguir.

**Algoritmo A**, que executa as seguintes ações:
1. Cria uma tabela $Y$ inicialmente vazia;
2. Percorre a tabela $X$, cliente por cliente, verificando se cada um deles já está na tabela $Y$. Caso não esteja, insere na tabela $Y$ o cliente que está faltando.

**Algoritmo B**, que executa as seguintes ações:
1. Cria uma tabela $Y$ inicialmente vazia;
2. Ordena a tabela $X$ usando o algoritmo *quicksort*;
3. Insere, na tabela $Y$, o cliente da primeira posição da tabela $X$;
4. Percorre a tabela $X$, cliente por cliente, a partir do segundo cliente, verificando se cada cliente é igual ao anterior. Caso não seja, insere o cliente na tabela $Y$.

Como resultado das ações tanto do algoritmo A quanto do algoritmo B, a tabela $Y$ gerada ao final conterá os clientes da tabela $X$ com as repetições eliminadas.

A partir dessas informações, observe o código em linguagem C apresentado a seguir.

\`\`\`c
void quicksort(int *v, int ini, int fim) {
    // v é o vetor a ser ordenado
    // ini é o índice do primeiro elemento a ser ordenado
    // fim é o índice do último elemento a ser ordenado
    if (ini < fim) {
        x = particiona(v, ini, fim, (ini + fim) / 2);
        // atribuir os valores para a, b, c e d
        quicksort(v, a, b);
        quicksort(v, c, d);
    }
}

int particiona(int *vetor, int ini, int fim, int pivot) {
    // implementar uma função que reorganiza o vetor e retorna a posição
    // final x do pivot. Ao final do processo, os elementos menores ou iguais a
    // vetor[pivot] devem ter índice menor do que x; os elementos maiores que
    // vetor[pivot] devem ter índice maior do que x.
}

void troca(int *vetor, int i, int j) {
    // função auxiliar que permuta os conteúdos das posições i e j do vetor
    aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;
}
\`\`\`

Com base nos dados apresentados, faça o que se pede nos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Determine o número máximo de comparações executadas no passo 2 do algoritmo A.',
        points: 2.0,
      },
      {
        label: 'b)',
        text: 'Determine o número máximo de comparações executadas no passo 4 do algoritmo B.',
        points: 2.0,
      },
      {
        label: 'c)',
        text: 'Na implementação recursiva do programa apresentado, quais são os valores dos parâmetros a, b, c e d?',
        points: 2.0,
      },
      {
        label: 'd)',
        text: 'Escreva o corpo da função particiona em linguagem C utilizando a função auxiliar troca, a qual foi definida anteriormente.',
        points: 4.0,
      },
    ],
    officialAnswer: `### Padrão de Resposta Oficial (INEP)

**a) Número máximo de comparações no passo 2 do Algoritmo A (2,0 pontos):**

O número máximo de comparações ocorre quando **todos os $N$ clientes são diferentes** (não há repetições em $X$). Nesse pior caso:
- 1º cliente: $0$ comparações (pois $Y$ está vazia) e é inserido;
- 2º cliente: $1$ comparação;
- 3º cliente: $2$ comparações;
- $\\dots$
- $N$-ésimo cliente: $N - 1$ comparações.

Total exato de comparações (soma de PA):
$$0 + 1 + 2 + \\dots + (N - 2) + (N - 1) = \\frac{N(N - 1)}{2}$$

*Resposta alternativa aceita pelo INEP:* São feitas $O(N^2)$ comparações.

---

**b) Número máximo de comparações no passo 4 do Algoritmo B (2,0 pontos):**

Como o 1º cliente já foi inserido no passo 3 e a tabela $X$ já está ordenada, o passo 4 percorre os demais $N - 1$ clientes (do 2º ao $N$-ésimo), comparando cada um exatamente uma vez com o elemento imediatamente anterior. Logo, são feitas exatamente **$N - 1$ comparações**.

*Resposta alternativa aceita pelo INEP:* São feitas $O(N)$ comparações.

---

**c) Valores dos parâmetros \`a\`, \`b\`, \`c\` e \`d\` na recursão (2,0 pontos):**

Padrão oficial INEP:
- \`a = ini\`
- \`b = x - 1\` (o INEP também aceitou \`b = x\`)
- \`c = x + 1\` (o INEP também aceitou \`c = x\`)
- \`d = fim\`

> **Nota técnica:** Na implementação correta do Quicksort em que \`particiona\` coloca o pivô definitivamente no índice \`x\`, deve-se sempre usar \`b = x - 1\` e \`c = x + 1\` (\`quicksort(v, ini, x - 1)\` e \`quicksort(v, x + 1, fim)\`), pois usar \`b = x\` ou \`c = x\` pode provocar recursão infinita quando \`x == fim\` ou \`x == ini\`.

---

**d) Corpo da função \`particiona\` em linguagem C (4,0 pontos):**

**Código literal do Padrão Oficial INEP:**
\`\`\`c
troca(v, ini, pivot);
pivot = ini;
ini = ini + 1;
while (ini <= fim)
    if (vetor[ini] <= vetor[pivot])
        ini = ini + 1;
    else {
        troca(v, ini, fim);
        fim = fim - 1;
    }
troca(v, pivot, fim);
return fim;
\`\`\`

> **Observação didática importante (\`vetor\` vs. \`v\`):** Note que no gabarito oficial publicado pelo INEP houve uma inconsistência tipográfica nos nomes dos parâmetros: a assinatura da função \`particiona\` no enunciado declara o ponteiro como \`int *vetor\`, mas o padrão oficial chamou \`troca(v, ...)\` usando \`v\` (nome vindo de \`quicksort\`), enquanto indexou \`vetor[ini]\` e \`vetor[pivot]\`. Em código C compilável, deve-se usar consistentemente **\`vetor\`** em todas as chamadas a \`troca\`:

\`\`\`c
int particiona(int *vetor, int ini, int fim, int pivot) {
    troca(vetor, ini, pivot);
    pivot = ini;
    ini = ini + 1;
    while (ini <= fim) {
        if (vetor[ini] <= vetor[pivot]) {
            ini = ini + 1;
        } else {
            troca(vetor, ini, fim);
            fim = fim - 1;
        }
    }
    troca(vetor, pivot, fim);
    return fim;
}
\`\`\`

**Como esse algoritmo funciona passo a passo:**
1. Move o pivô inicialmente escolhido para o começo do subvetor (\`ini\`) e guarda sua posição em \`pivot = ini\`.
2. Avança \`ini\` para o elemento seguinte (\`ini + 1\`) e mantém o invariante: todos os índices em \`[pivot+1 .. ini-1]\` têm valores $\\le \\text{vetor}[\\text{pivot}]$, e todos os índices em \`[fim+1 .. fim_original]\` têm valores $> \\text{vetor}[\\text{pivot}]$.
3. Enquanto \`ini <= fim\`, se \`vetor[ini] <= vetor[pivot]\`, avança \`ini\`; caso contrário, joga \`vetor[ini]\` para a extremidade direita trocando com \`fim\` e decrementa \`fim\` (sem incrementar \`ini\`, pois o elemento trazido de \`fim\` ainda precisa ser testado).
4. Ao término do laço (\`ini > fim\`), \`fim\` aponta para o último elemento $\\le$ pivô; troca-se o pivô (\`pivot\`) com \`fim\` e retorna-se \`fim\` (a posição final \`x\` do pivô).`,
    rubricCriteria: [
      {
        id: 'd02-c1',
        label: 'Item a) Pior caso do Algoritmo A',
        description: 'Identifica que o máximo de comparações ocorre sem repetições e calcula N(N-1)/2 (ou indica corretamente O(N²)).',
        maxPoints: 2.0,
      },
      {
        id: 'd02-c2',
        label: 'Item b) Máximo de comparações no passo 4 do Algoritmo B',
        description: 'Determina corretamente N - 1 comparações (ou indica O(N)).',
        maxPoints: 2.0,
      },
      {
        id: 'd02-c3',
        label: 'Item c) Parâmetros recursivos a, b, c e d',
        description: 'Define corretamente a = ini, b = x - 1 (ou x), c = x + 1 (ou x) e d = fim.',
        maxPoints: 2.0,
      },
      {
        id: 'd02-c4',
        label: 'Item d) Lógica de particionamento usando troca()',
        description: 'Reposiciona o pivô e particiona o subvetor [ini..fim] deixando elementos <= pivô à esquerda e > pivô à direita utilizando a função auxiliar troca().',
        maxPoints: 3.0,
      },
      {
        id: 'd02-c5',
        label: 'Item d) Retorno da posição final x do pivô e sintaxe C válida',
        description: 'Posiciona o pivô na posição final x, retorna esse índice e mantém coerência de parâmetros (int *vetor) e condições de parada sem laço infinito.',
        maxPoints: 1.0,
      },
    ],
    studyTips: `1. **Otimize o espaço das 15 linhas:** Lembre-se da observação oficial do INEP: você pode dividir a folha de resposta em colunas para caberem os itens a), b), c) e o código C do item d) de forma legível!
2. **Atenção ao invariante de laço no \`particiona\`:** Um erro clássico ao trocar \`vetor[ini]\` com \`vetor[fim]\` é incrementar \`ini\` no mesmo passo. Não faça isso — o valor vindo de \`fim\` ainda não foi comparado com o pivô!
3. **Teste de mesa rápido antes de passar a limpo:** Simule seu \`particiona\` em um vetor de 2 elementos (ex.: \`[5, 2]\`, \`[2, 5]\`) e em um vetor com elementos repetidos (ex.: \`[3, 3, 3]\`) para garantir que o pivô termina exatamente em \`x\` e que \`ini <= fim\` sempre termina.`,
  },
];
