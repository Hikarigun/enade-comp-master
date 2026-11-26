import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';

export const ENADE_2019_FG: ObjectiveQuestion[] = [
  {
    id: 'enade-2019-q01',
    source: 'enade-2019',
    year: 2019,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Governança Ambiental Global e Convenção Quadro da ONU sobre Mudanças Climáticas',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    annulled: true,
    annulledNote:
      'Questão oficialmente ANULADA pelo INEP no gabarito definitivo do ENADE 2019. A anulação decorreu de imprecisões conceituais nas alternativas frente aos objetivos formais da Convenção Quadro das Nações Unidas sobre Mudanças Climáticas (UNFCCC, 1992), cujo propósito central (Artigo 2º) é estabilizar as concentrações de gases de efeito estufa na atmosfera em um nível que impeça uma interferência antrópica perigosa no sistema climático, vinculando primariamente os Estados signatários — enquanto mecanismos como o comércio de emissões (alternativa C) foram instituídos posteriormente pelo Protocolo de Quioto (1997).',
    context: `O regime internacional de mudanças climáticas, organizado no âmbito do Sistema das Nações Unidas há 24 anos, constitui, em essência, um arranjo institucional dinâmico e de construção permanente. Criado para facilitar o entendimento e promover a cooperação entre as 195 partes signatárias, é dotado de estrutura jurídica e organizacional próprias. A Convenção Quadro das Nações Unidas sobre mudanças climáticas prevê mecanismos para a solução dos conflitos e para promoção da cooperação entre os Estados nacionais.

*Disponível em: <http://dx.doi.org/10.18623/rvd.v14i29.996>. Acesso em: 22 jul. 2019 (adaptado).*`,
    command:
      'A partir do contexto apresentado, é correto afirmar que a Convenção Quadro das Nações Unidas sobre mudanças climáticas objetiva',
    options: [
      {
        letter: 'A',
        text: 'estimular atores estatais e não estatais a planejar e a executar conjuntamente programas dedicados a garantir a redução da interferência humana no meio ambiente.',
      },
      {
        letter: 'B',
        text: 'evitar a propagação do efeito estufa por meio da criação de projetos que visem à redução das emissões a partir de medidas compensatórias, como plantação de árvores e melhor utilização de recursos naturais.',
      },
      {
        letter: 'C',
        text: 'estabelecer mecanismos flexíveis destinados a permitir que países que não utilizam toda a sua quota prevista de emissões vendam o seu excedente a outros que necessitam de limites maiores.',
      },
      {
        letter: 'D',
        text: 'promover o princípio da responsabilidade comum e demandas diferenciadas para permitir que os países desenvolvidos alterem a média global de aumento da temperatura acordada.',
      },
      {
        letter: 'E',
        text: 'assegurar a continuidade dos compromissos para que as metas de redução de emissão mantenham-se regulares e estáveis ao longo dos próximos vinte anos.',
      },
    ],
    correctOption: null,
    explanation: `**Questão ANULADA oficialmente pelo INEP no gabarito definitivo.**

O objetivo fundamental da Convenção Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC, adotada na Rio-92) está expresso em seu Artigo 2º: **alcançar a estabilização das concentrações de gases de efeito estufa (GEE) na atmosfera em um nível que impeça uma interferência antrópica perigosa no sistema climático**, dentro de um prazo suficiente para permitir que os ecossistemas se adaptem naturalmente.

Ao examinar as cinco alternativas propostas pela banca, constata-se que nenhuma traduz com rigor jurídico-científico o texto e o escopo da Convenção Quadro de 1992 (o que fundamentou os recursos e a anulação definitiva):
- A alternativa **A** amplia indevidamente o escopo formal da Convenção (que vincula Estados nacionais signatários e foca especificamente na estabilização climática / GEE, não na "redução da interferência humana no meio ambiente" de forma genérica).
- A alternativa **B** comete erro conceitual grave ao falar em "evitar a propagação do efeito estufa", pois o efeito estufa é um fenômeno natural indispensável à manutenção da vida na Terra; o que se combate é a sua *intensificação antrópica*.
- A alternativa **C** descreve o comércio internacional de emissões (um dos Mecanismos de Flexibilização criados pelo **Protocolo de Quioto** em 1997), e não o objetivo central da Convenção Quadro em si.
- A alternativa **D** distorce o princípio das "responsabilidades comuns, porém diferenciadas" ao afirmar que ele permitiria a países desenvolvidos alterar a meta global de temperatura.
- A alternativa **E** contraria o caráter dinâmico e progressivo do regime climático (no Acordo de Paris, por exemplo, as contribuições nacionalmente determinadas são revisadas com ambição crescente a cada 5 anos, e não mantidas estáticas por 20 anos).`,
    optionAnalysis: {
      A: 'Problemática (motivo da anulação): a UNFCCC foca na cooperação entre Estados nacionais para estabilizar concentrações de gases de efeito estufa no sistema climático, e não genericamente em garantir com atores não estatais a redução de toda interferência humana no meio ambiente.',
      B: 'Incorreta: o efeito estufa é um fenômeno natural essencial para manter a temperatura habitável do planeta; o objetivo climático é combater a intensificação antrópica do efeito estufa, e não "evitar a propagação do efeito estufa".',
      C: 'Problemática/Imprecisa: descreve especificamente o Comércio de Emissões (mecanismo de flexibilização do Protocolo de Quioto, de 1997), não correspondendo à definição geral do objetivo da Convenção Quadro de 1992.',
      D: 'Incorreta: o princípio correto é o das "responsabilidades comuns, porém diferenciadas", que atribui maior liderança na mitigação aos países desenvolvidos — jamais autorizando que alterem a meta global de temperatura.',
      E: 'Incorreta: o regime climático é dinâmico e progressivo (com revisões periódicas cada vez mais ambiciosas das metas), não visando congelar metas estáveis por vinte anos.',
    },
    keyConcept:
      'UNFCCC (Rio-92), estabilidade das concentrações de GEE, princípio das responsabilidades comuns porém diferenciadas e distinção em relação ao Protocolo de Quioto.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 01 (Anulada).',
  },
  {
    id: 'enade-2019-q02',
    source: 'enade-2019',
    year: 2019,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Poesia Concreta, Linguagem Verbo-Vocovisual e Arte Brasileira',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Augusto de Campos é um artista concretista brasileiro cuja poética estabelece a relação de diálogo entre o aspecto visual, sonoro e tátil do texto verbal.

*CAMPOS, A. Despoesia. São Paulo: Perspectiva, 1994 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/q02-fig.png',
        alt: 'Poema concreto de Augusto de Campos com as letras das palavras poema e bomba irradiando do centro para fora em tamanhos crescentes',
        caption: 'CAMPOS, A. Despoesia. São Paulo: Perspectiva, 1994 (adaptado).',
      },
    ],
    command: `Com base no poema apresentado, avalie as afirmações a seguir.

I. O aspecto sensorial é construído por meio da exploração da dimensão visual das palavras, sendo a imagem um elemento essencial do texto.
II. O artista utiliza técnicas de diagramação, harmonizando os componentes gráficos e espaciais, que se transformam em elementos de construção de sentidos diversos.
III. A impressão de movimento caótico cria o efeito de uma espécie de *big-bang* que atua sobre ambas as palavras: poema e bomba.
IV. A utilização do espaço é secundária para a construção de sentidos da obra, já que a palavra escrita, nesse caso, é suficiente para a leitura do poema.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II e IV, apenas.' },
      { letter: 'C', text: 'III e IV, apenas.' },
      { letter: 'D', text: 'I, II e III, apenas.' },
      { letter: 'E', text: 'I, II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `O poema visual de Augusto de Campos (*Poema/Bomba*, da obra *Despoesia*, 1994) é um exemplo emblemático do **Concretismo brasileiro**, movimento que integra os planos **verbal, visual e sonoro** (verbivocovisualidade):

- **Afirmação I — Correta:** No poema concreto, a forma gráfica (tipografia, escala crescente e dispersão radial das letras) não é mero enfeite, mas parte indissociável do significado e da experiência sensorial da obra.
- **Afirmação II — Correta:** A diagramação e a distribuição das letras pelo espaço em branco da página — com letras que, rotacionadas, assumem dupla leitura (\`p\`/\`b\`, \`e\`/\`a\`, \`m\`/\`w\`) — constroem múltiplos sentidos de modo harmonioso.
- **Afirmação III — Correta:** As letras irradiam do centro para as bordas em tamanho progressivamente maior, produzindo visualmente a sensação de explosão (*big-bang*) que funde e fragmenta simultaneamente as palavras **"poema"** e **"bomba"**.
- **Afirmação IV — Incorreta:** Na poesia concreta, o espaço gráfico em branco **jamais é secundário**; ao contrário, é estruturante e indispensável para a leitura, pois sem a disposição espacial explosiva as palavras "poema" e "bomba" perderiam a própria síntese visual que constitui o poema.

Portanto, estão corretas apenas as afirmações **I, II e III** (**alternativa D**).`,
    optionAnalysis: {
      A: 'Incorreta: deixa de incluir as afirmações II e III, que também são verdadeiras.',
      B: 'Incorreta: inclui a afirmação IV (falsa, pois o espaço é elemento central na poesia concreta) e omite I e III.',
      C: 'Incorreta: inclui a afirmação IV (falsa) e omite I e II.',
      D: 'Correta: I, II e III descrevem fielmente os recursos visuais, espaciais e semânticos da poesia concreta de Augusto de Campos, enquanto IV é falsa.',
      E: 'Incorreta: inclui a afirmação IV, que contradiz o fundamento principal do Concretismo.',
    },
    keyConcept:
      'Poesia concreta (verbivocovisualidade): o espaço gráfico e a diagramação são elementos estruturantes e indissociáveis da construção de sentido.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 02.',
  },
  {
    id: 'enade-2019-q03',
    source: 'enade-2019',
    year: 2019,
    number: 3,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Segurança Alimentar e Nutricional (FAO) e Desigualdade no Acesso a Alimentos',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Na história das civilizações humanas, a agricultura esteve relacionada à origem de um fenômeno que se tornaria o marco da economia alimentar: o aumento demográfico. Entretanto, apesar de toda a força civilizatória da agricultura, muitos povos tornaram-se vulneráveis por falta de alimentos.

Mesmo com o aumento do volume de alimentos, o número de indivíduos subnutridos é grande, como demonstrado pelos dados estatísticos da Organização das Nações Unidas para a Agricultura e Alimentação (FAO). A análise dos dados revela que, até 2014, a quantidade de pessoas desnutridas no mundo estava diminuindo, porém, entre 2015 e 2017, esse número aumenta.

*LIMA, J. S. G. Segurança alimentar e nutricional: sistemas agroecológicos são a mudança que a intensificação ecológica não alcança. Ciência e Cultura, v. 69, n. 2, 2017 (adaptado).*`,
    command: `Considerando a segurança alimentar e a nutrição no mundo, avalie as afirmações a seguir.

I. O conceito de segurança alimentar e nutricional admite que a fome e a desnutrição são problemas de oferta adequada e garantia de alimentos saudáveis, respeitando-se a diversidade cultural e a sustentabilidade socioeconômica e ambiental.
II. A segurança alimentar e nutricional compreende a produção e a disponibilidade de alimentos, bem como o acesso à alimentação adequada e saudável.
III. A escassez da oferta de alimentos nas últimas décadas decorre da falta de processos de produção e disseminação tecnológica que garantam a produção no campo frente às mudanças climáticas.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação à luz do texto de apoio e da definição consolidada pela FAO e pela Lei Orgânica de Segurança Alimentar e Nutricional (LOSAN — Lei nº 11.346/2006):

- **Afirmação I — Correta:** A Segurança Alimentar e Nutricional (SAN) engloba a realização do direito de todos ao acesso regular e permanente a alimentos de qualidade, em quantidade suficiente, tendo como base práticas promotoras de saúde que respeitem a diversidade cultural e sejam ambiental, cultural, econômica e socialmente sustentáveis.
- **Afirmação II — Correta:** A SAN articula tanto a dimensão alimentar (produção, disponibilidade e estabilidade da oferta) quanto a dimensão nutricional e socioeconômica (acesso efetivo, qualidade sanitária e adequação nutricional).
- **Afirmação III — Incorreta:** O próprio texto contradiz essa tese ao afirmar explicitamente: *"Mesmo com o aumento do volume de alimentos, o número de indivíduos subnutridos é grande"*. A persistência da fome no mundo atual não resulta de falta de capacidade produtiva global ou ausência de tecnologia agrícola, mas principalmente de **desigualdade de renda, má distribuição, conflitos armados, crises econômicas, desperdício e barreiras de acesso**.

Logo, apenas **I e II** estão corretas (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: omite a afirmação II, que também integra o conceito de segurança alimentar e nutricional.',
      B: 'Incorreta: considera correta apenas a afirmação III, que é falsa e contraria o próprio texto.',
      C: 'Correta: I e II sintetizam adequadamente os pilares da segurança alimentar e nutricional (disponibilidade, acesso, qualidade, diversidade cultural e sustentabilidade), enquanto III é falsa.',
      D: 'Incorreta: inclui a afirmação III (falsa) e exclui I (verdadeira).',
      E: 'Incorreta: inclui a afirmação III, que atribui erroneamente a fome global à incapacidade tecnológica de produção.',
    },
    keyConcept:
      'Segurança Alimentar e Nutricional (SAN): envolve disponibilidade, acesso, qualidade nutricional, diversidade cultural e sustentabilidade — a fome atual é um problema de acesso e distribuição, não apenas de volume produzido.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 03.',
  },
  {
    id: 'enade-2019-q04',
    source: 'enade-2019',
    year: 2019,
    number: 4,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saneamento Básico, Desigualdades Regionais e Políticas Públicas no Brasil',
    questionStyle: 'assercao-razao',
    difficulty: 'medio',
    context: `Segundo resultados da última Pesquisa Nacional de Saneamento Básico (PNSB) de 2008, a quase totalidade dos municípios brasileiros tinha serviço de abastecimento de água em pelo menos um distrito (99,4%). Além da existência da rede, uma das formas de se avaliar a eficiência do serviço de abastecimento de água à população é examinar o volume diário *per capita* da água distribuída por rede geral. No ano de 2008, foram distribuídos diariamente, no conjunto do país, 320 litros *per capita*, média que variou bastante entre as regiões. Na Região Sudeste, o volume distribuído alcançou 450 litros *per capita*, enquanto na Região Nordeste ele não chegou à metade desta marca, apresentando uma média de 210 litros *per capita*. Embora o volume total tenha aumentado em todas as regiões do país, comparando-se com os números apresentados pela PNSB de 2000, as diferenças regionais permaneceram praticamente inalteradas.

*Disponível em: <https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?view=detalhes&id=280933> Acesso em: 01 out. 2019 (adaptado).*`,
    command: `Com base nas informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.

I. Em algumas regiões do Brasil, os índices referidos estão abaixo da média nacional, indicando diferenças de acesso de qualidade a abastecimento de água que podem impactar a saúde pública.

**PORQUE**

II. O aumento da eficiência da política pública de abastecimento de água no Brasil contribui para o desenvolvimento nacional, para a redução dos desequilíbrios regionais e para a promoção da inclusão social.

A respeito dessas asserções, assinale a opção correta.`,
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são verdadeiras, e a II é uma justificativa correta da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.',
      },
      {
        letter: 'C',
        text: 'A asserção I é uma proposição verdadeira e a II é uma proposição falsa.',
      },
      {
        letter: 'D',
        text: 'A asserção I é uma proposição falsa e a II é uma proposição verdadeira.',
      },
      {
        letter: 'E',
        text: 'As asserções I e II são falsas.',
      },
    ],
    correctOption: 'B',
    explanation: `Trata-se de uma questão clássica de **asserção-razão**, em que devemos avaliar isoladamente a veracidade de I e II e, em seguida, verificar o nexo causal ("PORQUE") entre elas:

- **Asserção I — Verdadeira:** Os dados do texto mostram claramente que a Região Nordeste distribuía em média $210\\text{ L/hab/dia}$, valor muito inferior à média nacional ($320\\text{ L/hab/dia}$) e inferior à metade da média do Sudeste ($450\\text{ L/hab/dia}$). Essa desigualdade na disponibilidade e na qualidade do abastecimento de água está diretamente ligada a riscos de doenças de veiculação hídrica e impactos sobre a saúde pública.
- **Asserção II — Verdadeira:** Políticas públicas mais eficientes de saneamento e abastecimento de água efetivamente promovem desenvolvimento socioeconômico, reduzem assimetrias regionais e ampliam a inclusão social.
- **Relação de causalidade ("PORQUE") — Incorreta:** A asserção II **não explica a causa** da asserção I. Dizer que melhorar políticas públicas traz desenvolvimento e inclusão social (um *efeito positivo desejado* de uma política futura) não é o motivo pelo qual algumas regiões estão hoje abaixo da média nacional de abastecimento! As causas reais da desigualdade apontada em I seriam fatores históricos, estruturais, climáticos e de déficit de investimentos em infraestrutura.

Logo, ambas são verdadeiras, mas II não justifica I (**alternativa B**).`,
    optionAnalysis: {
      A: 'Incorreta: II apresenta os benefícios do aumento da eficiência das políticas públicas, o que não constitui a causa (justificativa) da disparidade regional descrita em I.',
      B: 'Correta: tanto I quanto II são proposições verdadeiras, mas não existe relação de causa e consequência no sentido I ← II.',
      C: 'Incorreta: a asserção II é verdadeira, pois saneamento eficiente comprovadamente impulsiona desenvolvimento e inclusão social.',
      D: 'Incorreta: a asserção I é verdadeira e diretamente amparada nos dados numéricos da PNSB/IBGE (210 L no Nordeste contra 320 L na média nacional).',
      E: 'Incorreta: ambas as asserções são proposições verdadeiras.',
    },
    keyConcept:
      'Questões de asserção-razão no ENADE: verifique sempre se a proposição II responde à pergunta "por que I ocorre?" (causa) e não apenas se trata de um tema correlato ou de uma solução desejável.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 04.',
  },
  {
    id: 'enade-2019-q05',
    source: 'enade-2019',
    year: 2019,
    number: 5,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Direitos dos Povos Indígenas, Tradicionalidade da Ocupação e Diversidade Cultural',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `O Supremo Tribunal Federal definiu, em 2009, os critérios para o reconhecimento de determinada terra como território indígena, sendo eles: o marco da tradicionalidade da ocupação; o marco temporal da ocupação; o marco da concreta abrangência e finalidade prática da ocupação tradicional; e, por fim, o marco da proporcionalidade, que consiste na aplicação do princípio da proporcionalidade em matéria indígena. De acordo com o marco da tradicionalidade da ocupação, para que uma terra indígena possa ser considerada tradicional, as comunidades indígenas devem demonstrar o caráter de perdurabilidade de sua relação com a terra, caráter este demonstrado em sentido de continuidade etnográfica.

*Disponível em: <https://doi.org/10.12957/publicum.2018.37271>. Acesso em: 27 set. 2019 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/q05-fig.png',
        alt: 'Duas fotografias aéreas lado a lado: à esquerda, a Aldeia Watoriki na Terra Indígena Yanomami (Amazonas/Roraima) em formato circular cercada por floresta; à direita, a Aldeia Gavião Parkatejê na Terra Indígena Mãe Maria (Pará) com casas de alvenaria dispostas em arruamento',
        caption: 'Comparação entre diferentes modos de ocupação territorial indígena no Brasil (FUNAI e Vídeo nas Aldeias).',
      },
    ],
    command: `Com base nas imagens e informações acerca dos referidos marcos para o reconhecimento de determinada terra como indígena, avalie as afirmações a seguir.

I. A tradicionalidade é um elemento fundamental para a perpetuação dos vínculos territoriais das populações indígenas, já que remete ao caráter estático de seus modos de vida.
II. Os marcos de reconhecimento da ocupação viabilizam o alcance do direito de utilização das terras em diferentes tipos de atividades produtivas por parte das comunidades indígenas.
III. O critério de ocupação tradicional considera que a terra indígena proporciona elementos materiais e simbólicos essenciais à transmissão dos legados culturais entre gerações.
IV. O reconhecimento de terras ancestrais integra-se à lógica da homogeneidade cultural, já que esta medida valoriza a cultura e a participação dos povos indígenas como elementos do amálgama cultural brasileiro.

É correto apenas o que se afirma em`,
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, II e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'C',
    explanation: `As duas imagens apresentadas na questão ilustram justamente o caráter **dinâmico e plural** das culturas indígenas: enquanto a Aldeia Watoriki (Yanomami) mantém a arquitetura coletiva circular tradicional (*shabono*) em meio à floresta, a Aldeia Gavião Parkatejê incorpora edificações de alvenaria e organização espacial contemporânea — ambas sendo igualmente terras indígenas tradicionais!

Avaliando cada afirmação:
- **Afirmação I — Incorreta:** A tradicionalidade **não** significa caráter "estático" ou congelado no passado. Como mostram as duas fotos e o conceito de "continuidade etnográfica", as culturas indígenas são dinâmicas e transformam suas formas de habitação e produção sem perder sua identidade étnica nem o vínculo ancestral com a terra.
- **Afirmação II — Correta:** O reconhecimento jurídico das terras indígenas assegura o usufruto exclusivo das riquezas do solo, rios e lagos (CF/88, Art. 231), viabilizando diversas atividades produtivas necessárias ao bem-estar físico e cultural das comunidades.
- **Afirmação III — Correta:** A ocupação tradicional compreende a terra não apenas como recurso econômico, mas como base material e simbólica indispensável à reprodução física, social e cultural entre gerações.
- **Afirmação IV — Incorreta:** O reconhecimento de terras indígenas não segue a lógica da **"homogeneidade cultural"** (que remete à assimilação/padronização de culturas em um único molde), mas sim a da **diversidade e pluralidade cultural** (multiculturalismo), preservando a autonomia e as especificidades de cada povo.

Portanto, estão corretas apenas **II e III** (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: a afirmação I erra ao atribuir caráter estático aos modos de vida indígenas.',
      B: 'Incorreta: tanto I ("caráter estático") quanto IV ("homogeneidade cultural") contêm erros conceituais graves.',
      C: 'Correta: II e III refletem adequadamente os direitos produtivos, materiais e simbólicos vinculados ao reconhecimento de terras tradicionalmente ocupadas.',
      D: 'Incorreta: inclui as afirmações falsas I e IV e omite a verdadeira III.',
      E: 'Incorreta: inclui a afirmação IV, que confunde pluralidade/diversidade cultural com homogeneidade cultural.',
    },
    keyConcept:
      'Dinamismo cultural e pluralidade étnica: tradicionalidade indígena não implica imobilismo/estaticidade, e o direito territorial protege a diversidade cultural (não a homogeneização).',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 05.',
  },
  {
    id: 'enade-2019-q06',
    source: 'enade-2019',
    year: 2019,
    number: 6,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Interpretação de Séries Históricas, Violência de Gênero e Desigualdade Racial',
    questionStyle: 'assercao-razao',
    difficulty: 'facil',
    context: `Conforme dados do Atlas da Violência 2019, apresentados no gráfico a seguir, verifica-se o crescimento no número de homicídios de mulheres no país durante o período de 2007 a 2017. Nesse período, a taxa de homicídios entre as mulheres negras cresceu mais do que a taxa de homicídios entre as mulheres não negras. A classificação de raça/cor do IBGE agrega negras como a soma de pretas e pardas e não negras como a soma de brancas, amarelas e indígenas.

*Instituto de Pesquisa Econômica Aplicada (IPEA); Fórum Brasileiro de Segurança Pública (Orgs.). Atlas da violência 2019. Brasília: Ipea, 2019 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/q06-fig.png',
        alt: 'Gráfico de linhas mostrando a taxa de homicídios por 100 mil habitantes de 2007 a 2017: mulheres negras sobem de 4,3 para 5,6; mulheres não negras oscilam entre 3,0 e 3,3, fechando em 3,2',
        caption: 'Taxa de homicídios de mulheres negras e não negras por 100 mil habitantes (2007–2017) — Atlas da Violência 2019.',
      },
    ],
    command: `Considerando as informações apresentadas, avalie as asserções a seguir e a relação proposta entre elas.

I. O maior crescimento dos casos de homicídios de mulheres negras em comparação com os casos de mulheres não negras indica a relevância dos estudos a respeito das múltiplas variáveis relacionadas a este fenômeno social.

**PORQUE**

II. A análise do gráfico permite concluir que, no início da série histórica, havia um contexto favorável à superação da situação social de maior vulnerabilidade da mulher negra, em razão da menor diferença entre as taxas de homicídios.

A respeito dessas asserções, assinale a opção correta.`,
    options: [
      {
        letter: 'A',
        text: 'As asserções I e II são verdadeiras, e a II é uma justificativa correta da I.',
      },
      {
        letter: 'B',
        text: 'As asserções I e II são verdadeiras, mas a II não é uma justificativa correta da I.',
      },
      {
        letter: 'C',
        text: 'A asserção I é uma proposição verdadeira e a II é uma proposição falsa.',
      },
      {
        letter: 'D',
        text: 'A asserção I é uma proposição falsa e a II é uma proposição verdadeira.',
      },
      {
        letter: 'E',
        text: 'As asserções I e II são falsas.',
      },
    ],
    correctOption: 'C',
    explanation: `Observando os dados quantitativos do gráfico (taxa por 100 mil habitantes entre 2007 e 2017):
- **Mulheres negras:** sobem de $4{,}3$ (2007) para $5{,}6$ (2017), um aumento relativo de aproximadamente $\\frac{5{,}6 - 4{,}3}{4{,}3} \\approx +30{,}2\\%$.
- **Mulheres não negras:** passam de $3{,}0$ (2007) para $3{,}2$ (2017), um aumento relativo de $\\frac{3{,}2 - 3{,}0}{3{,}0} \\approx +6{,}7\\%$.
- **Diferença entre as taxas:** em 2007 já era de $4{,}3 - 3{,}0 = 1{,}3$ (mulheres negras já tinham taxa $43{,}3\\%$ superior à das não negras), e em 2017 ampliou-se para $5{,}6 - 3{,}2 = 2{,}4$ (taxa $75\\%$ superior).

Avaliando as asserções:
- **Asserção I — Verdadeira:** A disparidade acentuada e o crescimento desproporcional evidenciam a interseccionalidade de gênero, raça e fatores socioeconômicos, justificando estudos multidisciplinares sobre as múltiplas variáveis envolvidas nesse fenômeno social.
- **Asserção II — Falsa:** O gráfico **não** permite concluir que em 2007 houvesse um "contexto favorável à superação da vulnerabilidade". Primeiro, já no início da série histórica (2007) a taxa entre mulheres negras ($4{,}3$) era significativamente maior que a de não negras ($3{,}0$); segundo, a tendência imediata a partir de 2007 foi de **alta contínua** (4,3 → 4,6 → 4,9 → 5,2 → 5,3 → 5,5 → 5,6), alargando ainda mais o fosso de vulnerabilidade.

Portanto, a asserção I é verdadeira e a II é falsa (**alternativa C**).`,
    optionAnalysis: {
      A: 'Incorreta: a asserção II é falsa, pois os dados de 2007 já revelavam grande desigualdade seguida de piora contínua.',
      B: 'Incorreta: classifica erroneamente a asserção II como verdadeira.',
      C: 'Correta: I é verdadeira (necessidade de estudar as múltiplas variáveis sociais do fenômeno) e II é falsa (o gráfico não indica contexto favorável de superação no início da série).',
      D: 'Incorreta: inverte os valores lógicos de I e II.',
      E: 'Incorreta: a asserção I é claramente verdadeira.',
    },
    keyConcept:
      'Leitura crítica de gráficos e séries temporais: uma diferença inicialmente menor do que a observada no final da série não significa igualdade nem tendência favorável quando a taxa já parte elevada e cresce continuamente.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 06.',
  },
  {
    id: 'enade-2019-q07',
    source: 'enade-2019',
    year: 2019,
    number: 7,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Acessibilidade Urbana, Desenho Universal e Autonomia da Pessoa com Deficiência',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `O princípio da acessibilidade dispõe que na construção de espaços, na formatação de produtos e no planejamento de serviços deve-se considerar que as pessoas com deficiência (PCD) são usuárias legítimas, dignas e independentes. Nenhum serviço pode ser concedido, permitido, autorizado ou delegado sem acessibilidade plena, para não obstaculizar o exercício pleno dos direitos pelas pessoas com deficiência. A acessibilidade é um direito de todos os cidadãos e, por isso, não se limita a propiciar a inclusão de pessoas com deficiência, mas também de pessoas com mobilidade reduzida, idosos, gestantes e em situação vulnerável.

*OLIVEIRA, S. M. de. Cidade e acessibilidade: inclusão social das pessoas com deficiências. In: VIII Simpósio Iberoamericano em comércio internacional, desenvolvimento e integração regional, 2017 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/q07-fig.png',
        alt: 'Ilustração de uma calçada urbana acessível onde circulam pessoas com deficiência visual usando bengala e cão-guia, usuário de cadeira de rodas, gestante com criança e idoso',
        caption: 'Disponível em: <https://publications.iadb.org/en/publication/16231/guia-operacional-de-acessibilidade-para-projetos-em-desenvolvimento-urbano-com>. Acesso em: 11 set. 2019 (adaptado).',
      },
    ],
    command: `Considerando a imagem e as informações apresentadas, avalie as afirmações a seguir.

I. Projetar e adaptar as vias públicas facilita a circulação das pessoas com dificuldade de locomoção e usuários de cadeiras de rodas, sendo uma medida adequada de acessibilidade.
II. Padronizar as calçadas com implantação universal de rampas, faixas de circulação livres de barreiras, guias e pisos antiderrapantes atende ao princípio da acessibilidade.
III. Garantir a ajuda de terceiros a pessoas com deficiências, nos edifícios públicos e em espaços abertos públicos, é uma previsão legal convergente ao princípio da acessibilidade.
IV. Implantar sinalização sonora nos semáforos e informações em braille nas sinalizações dos espaços urbanos para pessoas com deficiência visual são providências de acessibilidade adequadas.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'III, apenas.' },
      { letter: 'B', text: 'I e IV, apenas.' },
      { letter: 'C', text: 'II e III, apenas.' },
      { letter: 'D', text: 'I, II e IV, apenas.' },
      { letter: 'E', text: 'I, II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `O texto deixa explícito o núcleo do princípio da acessibilidade (presente também na Lei Brasileira de Inclusão — Lei nº 13.146/2015 e na NBR 9050): as pessoas com deficiência são **"usuárias legítimas, dignas e independentes"**, ou seja, a acessibilidade visa eliminar barreiras para assegurar **autonomia** e segurança, sem depender da ajuda de terceiros.

Analisando cada afirmação:
- **Afirmação I — Correta:** Projetar e adaptar vias públicas com critérios de desenho universal viabiliza a locomoção autônoma de cadeirantes e pessoas com mobilidade reduzida.
- **Afirmação II — Correta:** Rampas padronizadas, faixas livres de obstáculos, guias rebaixadas e pisos táteis/antiderrapantes são requisitos clássicos de acessibilidade urbana.
- **Afirmação III — Incorreta:** Substituir a eliminação arquitetônica/comunicacional de barreiras por "ajuda de terceiros" **contraria** o princípio da acessibilidade e da autonomia plena! O objetivo legal é que a PCD utilize os espaços públicos de forma **independente**, e não tutelada por terceiros.
- **Afirmação IV — Correta:** Semáforos sonoros e sinalização tátil/em braille garantem orientação e travessia segura e autônoma para pessoas com deficiência visual.

Assim, estão corretas apenas **I, II e IV** (**alternativa D**).`,
    optionAnalysis: {
      A: 'Incorreta: marca apenas a afirmação III, que é exatamente a única falsa.',
      B: 'Incorreta: omite a afirmação II, que também está correta.',
      C: 'Incorreta: inclui a afirmação III (falsa) e omite I e IV.',
      D: 'Correta: I, II e IV descrevem medidas autênticas de desenho universal e acessibilidade autônoma, excluindo III.',
      E: 'Incorreta: inclui a afirmação III, que contraria o princípio de independência e autonomia da pessoa com deficiência.',
    },
    keyConcept:
      'Princípio da acessibilidade e Desenho Universal: foco na eliminação de barreiras físicas e comunicacionais para garantir autonomia e independência, nunca dependência de terceiros.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 07.',
  },
  {
    id: 'enade-2019-q08',
    source: 'enade-2019',
    year: 2019,
    number: 8,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saúde Mental no Trabalho, Síndrome de Burnout (CID-11/OMS) e Relações Laborais',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `O esgotamento profissional, conhecido como Síndrome de *Burnout*, foi incluído na Classificação Internacional de Doenças da Organização Mundial da Saúde (OMS). Essa síndrome, que foi incluída no capítulo de problemas associados ao emprego ou ao desemprego, foi descrita como uma síndrome resultante de um estresse crônico no trabalho não administrado com êxito e caracterizado por três elementos: sensação de esgotamento, cinismo ou sentimentos negativos relacionados a seu trabalho e eficácia profissional reduzida. A nova classificação, publicada em 2018 e aprovada durante a 72ª Assembleia Mundial da OMS, entrará em vigor no dia 1º de janeiro de 2022. A Classificação Internacional de Doenças da OMS estabelece uma linguagem comum que facilita o intercâmbio de informações entre os profissionais da área da saúde ao redor do planeta.

*Disponível em: <https://noticias.uol.com.br/ultimas-noticias/afp/2019/05/27/oms-inclui-a-sindrome-de-burnout-na-lista-de-doencas.htm>. Acesso em: 06 jul. 2019 (adaptado).*`,
    command: `Considerando as informações apresentadas, avalie as afirmações a seguir.

I. Os programas de formação de lideranças focados na obstinação e na resistência ao erro têm sido eficazes na redução da vulnerabilidade a esse tipo de síndrome.
II. A compreensão dos sintomas de forma isolada do contexto sociocultural dificulta o estabelecimento do chamado nexo causal entre trabalho e adoecimento.
III. As relações de trabalho onde predominam o sentido de realização profissional tendem a reforçar elos de coesão e reconhecimento social favoráveis à saúde psíquica.
IV. A prevalência do protocolo clínico pautado no tratamento medicamentoso é condição determinante para a superação desse problema de saúde pública.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'II e III, apenas.' },
      { letter: 'C', text: 'III e IV, apenas.' },
      { letter: 'D', text: 'I, II e IV, apenas.' },
      { letter: 'E', text: 'I, II, III e IV.' },
    ],
    correctOption: 'B',
    explanation: `A Síndrome de *Burnout* é um fenômeno essencialmente **ocupacional e psicossocial**, decorrente de estresse crônico mal gerenciado no ambiente de trabalho. Avaliando cada afirmação:

- **Afirmação I — Incorreta:** Lideranças orientadas pela "obstinação" e pela "resistência ao erro" (intolerância a falhas, cobrança implacável e hipercompetitividade) são justamente **fatores agravantes** do estresse crônico e do *Burnout*, e não medidas eficazes de prevenção.
- **Afirmação II — Correta:** Se os sintomas (exaustão, cinismo, queda de rendimento) forem analisados de maneira individualizada e descontextualizada da organização do trabalho e do contexto sociocultural, perde-se de vista a origem laboral do sofrimento, dificultando o reconhecimento do **nexo causal** entre trabalho e adoecimento.
- **Afirmação III — Correta:** Ambientes laborais saudáveis, baseados em realização profissional, apoio mútuo, coesão coletiva e reconhecimento social, funcionam como fatores protetivos essenciais para a saúde psíquica do trabalhador.
- **Afirmação IV — Incorreta:** A medicalização isolada trata apenas sintomas secundários, mas **não é condição determinante** para superar um problema de saúde pública cuja raiz está na gestão e nas condições de trabalho; a superação requer intervenção organizacional, psicossocial e preventiva.

Logo, estão corretas apenas **II e III** (**alternativa B**).`,
    optionAnalysis: {
      A: 'Incorreta: a afirmação I é falsa, pois cultura de intolerância ao erro agrava o esgotamento profissional.',
      B: 'Correta: II e III reconhecem adequadamente o caráter psicossocial/ocupacional do Burnout e o papel protetivo do reconhecimento no trabalho.',
      C: 'Incorreta: inclui a afirmação IV, que reduz equivocadamente o enfrentamento do Burnout ao tratamento medicamentoso.',
      D: 'Incorreta: inclui as duas afirmações falsas (I e IV) e exclui a verdadeira III.',
      E: 'Incorreta: inclui as afirmações falsas I e IV.',
    },
    keyConcept:
      'Síndrome de Burnout (CID-11): fenômeno ocupacional de natureza psicossocial cujo nexo causal depende do contexto de trabalho e cuja prevenção exige mudanças organizacionais, não mera medicalização.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão 08.',
  },
];

export const ENADE_2019_DISCURSIVE: DiscursiveQuestion[] = [
  {
    id: 'enade-2019-d01',
    source: 'enade-2019',
    year: 2019,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Sustentabilidade Socioambiental e Ações de Recuperação Pós-Desastres Naturais',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: false,
    context: `Conforme levantamento patrocinado pelo Ministério da Integração Nacional, o Brasil sofreu mais de 30 mil desastres naturais entre 1990 e 2012, o que confere a média de 1 363 eventos por ano. O Atlas Brasileiro de Desastres Naturais de 2013 mostra que, entre 1991 e 2012, foram registradas 31 909 catástrofes no país, sendo que 73% ocorreram na última década. O banco de dados do histórico dos desastres brasileiros associados a fenômenos naturais indica que estiagens, secas, inundações bruscas e alagamentos são as tipologias mais recorrentes do país.

*LICCO, E.; DOWELL, S. Alagamentos, enchentes, enxurradas e inundações: digressões sobre seus impactos sócio econômicos e governança. Revista de Iniciação Científica, Tecnológica e Artística. Edição Temática em Sustentabilidade, v. 5, n. 3, São Paulo: Centro Universitário Senac, 2015 (adaptado).*

De acordo com o relatório do Escritório das Nações Unidas para a Redução do Risco de Desastres de 2014, a necessidade de minimizar os riscos e os impactos de futuros desastres naturais é algo fundamental para as comunidades em todo o mundo. Reduzir os níveis existentes de riscos que favorecem os desastres, fortalecendo a resiliência social, ambiental e econômica é uma das soluções encontradas para que as cidades consigam conviver com esses fenômenos naturais.

*RIBEIRO, J.; VIEIRA, R.; TÔMIO, D. Análise da percepção do risco de desastres naturais por meio da expressão gráfica de estudantes do Projeto Defesa Civil na Escola. UFPR, Desenvolvimento e Meio Ambiente, v. 42, dezembro 2017 (adaptado).*`,
    prompts: [
      {
        label: 'Proposta 1',
        text: 'Apresente uma primeira proposta de intervenção no âmbito da sustentabilidade socioambiental contemplando ações de restauração ou recuperação após a ocorrência de desastres naturais.',
        points: 5.0,
      },
      {
        label: 'Proposta 2',
        text: 'Apresente uma segunda proposta de intervenção distinta, no âmbito da sustentabilidade socioambiental, contemplando ações de restauração ou recuperação após a ocorrência de desastres naturais.',
        points: 5.0,
      },
    ],
    officialAnswer: `De acordo com o **Padrão de Resposta oficial do INEP**, o estudante deve apresentar **duas propostas de intervenção** voltadas à **restauração ou recuperação após a ocorrência de desastres**, dentro do âmbito da sustentabilidade socioambiental. O INEP organiza as ações válidas em seis campos:

### 1. Campo Psicossocial
- Organização de mutirão de voluntários para distribuição de vestuários, remédios, alimentos e outros insumos aos atingidos; mobilização para recuperação parcial das casas dos desabrigados.
- Realocação da população afetada para locais seguros; resgate de vítimas de inundações ou deslizamentos para abrigos emergenciais temporários.
- Mobilização dos sistemas de saúde para atendimento emergencial de feridos, campanhas de vacinação, prevenção de surtos/epidemias e acompanhamento biopsicossocial das vítimas.
- Resgate, abrigo emergencial e acompanhamento médico-veterinário de animais domésticos atingidos.

### 2. Campo Econômico e Sociocultural
- Recomposição de áreas agropecuárias, implementação/recuperação de áreas agrícolas e agroflorestais e liberação de crédito rural aos produtores atingidos.
- Recuperação de patrimônios histórico, artístico, cultural ou natural (museus, igrejas, instituições culturais).
- Mobilização de recursos financeiros, liberação de aluguel social, fundo emergencial governamental ou campanhas para reconstrução de moradias, crédito para mobiliário e aplicação de multas na recuperação das áreas atingidas.

### 3. Campo Ambiental
- Recuperação do ecossistema da área atingida, reflorestamento de áreas degradadas e nascentes com vegetação nativa e resgate de animais silvestres.
- Recuperação e proteção de mananciais; monitoramento e controle da qualidade da água e do solo; verificação periódica dos padrões de potabilidade após desastres e descontaminação de solos com metais pesados.

### 4. Campo Infraestrutura
- Restauração de serviços públicos essenciais (água, energia elétrica, combustíveis e comunicações), pontes, rodovias e acessos; limpeza de bueiros e retirada de entulhos/lixo para escoamento das águas.
- Implementação de sistemas de alertas, avisos sonoros, gerenciamento de monitoramento remoto (drones para localização de vítimas, imagens de satélite para manchas de óleo).
- Desenvolvimento de tecnologias de recuperação (reconstrução viária com asfalto poroso de alta permeabilidade, descontaminação de manchas de óleo, reaproveitamento de rejeito/lama de barragem na construção civil).

### 5. Campo Sistêmico
- Remodelagem de procedimentos de segurança e processos industriais; ações de restauração da ordem pública e prevenção de saques em parceria entre esferas governamentais.
- Treinamento emergencial da população, equipes e voluntários para resgate, reflorestamento e limpeza segura (com orientação sobre riscos tóxicos).

### 6. Seca / Estiagem
- Tecnologias de dessalinização da água do mar, aproveitamento de água da chuva com construção de cisternas, reflorestamento de mata ciliar, racionamento em níveis críticos, reúso da água (ex.: água de banho para lavagem de quintal e descargas) e monitoramento da qualidade da água de reúso.`,
    rubricCriteria: [
      {
        id: 'd01-c1',
        label: 'Proposta 1 — Ação pós-desastre coerente',
        description:
          'Apresenta claramente uma primeira proposta de intervenção focada em restauração ou recuperação após a ocorrência de desastres (e não apenas prevenção genérica).',
        maxPoints: 3.5,
      },
      {
        id: 'd01-c2',
        label: 'Proposta 1 — Vínculo socioambiental e detalhamento',
        description:
          'Articula a primeira proposta à sustentabilidade socioambiental (dimensão social, ambiental, econômica ou de infraestrutura) de forma exequível.',
        maxPoints: 1.5,
      },
      {
        id: 'd01-c3',
        label: 'Proposta 2 — Segunda ação distinta pós-desastre',
        description:
          'Apresenta uma segunda proposta distinta da primeira, igualmente focada em restauração ou recuperação após desastres naturais.',
        maxPoints: 3.5,
      },
      {
        id: 'd01-c4',
        label: 'Proposta 2 — Vínculo socioambiental e clareza textual',
        description:
          'Articula a segunda proposta à sustentabilidade socioambiental, respeitando o limite de 15 linhas com coesão e norma culta.',
        maxPoints: 1.5,
      },
    ],
    studyTips:
      'Atenção máxima ao recorte temporal do comando: o enunciado pediu ações de **restauração ou recuperação APÓS a ocorrência de desastres**! Candidatos que citam apenas medidas preventivas (antes do desastre) perdem pontos. Para garantir nota máxima em 15 linhas, escolha duas propostas de campos complementares (por exemplo, uma ambiental — como reflorestamento de nascentes/matas ciliares e monitoramento da potabilidade da água — e uma psicossocial/infraestrutura — como restauração de serviços essenciais com asfalto permeável e acompanhamento biopsicossocial/aluguel social às famílias atingidas).',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão Discursiva 01.',
  },
  {
    id: 'enade-2019-d02',
    source: 'enade-2019',
    year: 2019,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Modelo da Tríplice Hélice (Estado, Universidade e Empresa) e Inovação em CT&I',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: false,
    context: `O Brasil está longe de ser um país atrasado do ponto de vista científico e tecnológico. O país está em posição intermediária em praticamente todos os indicadores de produção e utilização de conhecimento e de novas tecnologias. Em alguns indicadores, a situação do país é melhor até do que em alguns países europeus como Portugal ou Espanha e, de modo geral, estamos à frente de todos os demais países latino-americanos. Talvez nosso pior desempenho esteja nos depósitos de patentes, seja no Brasil ou no exterior.

*Disponível em: <http://www.ipea.gov.br/portal/index.php?option=com_content&view=article&id=33511&Itemid=433> Acesso em: 01 out. 2019 (adaptado).*`,
    images: [
      {
        src: '/images/enade-2019/d02-fig.png',
        alt: 'Diagrama da Tríplice Hélice com três círculos interligados por setas bidirecionais: Setor Público no topo, Instituição de Ensino Superior à esquerda e Empresa à direita',
        caption: 'Articulação entre Setor Público, Instituição de Ensino Superior (IES) e Empresa (Modelo da Tríplice Hélice).',
      },
    ],
    prompts: [
      {
        label: 'a)',
        text: 'Cite dois ganhos possíveis para o campo científico do país, resultantes de uma boa articulação entre os entes representados na figura.',
        points: 5.0,
      },
      {
        label: 'b)',
        text: 'Cite dois ganhos possíveis para o campo econômico do país, resultantes de uma boa articulação entre os entes representados na figura.',
        points: 5.0,
      },
    ],
    officialAnswer: `De acordo com o **Padrão de Resposta oficial do INEP**, o estudante deve apontar dois ganhos possíveis para cada campo, resultantes de uma boa articulação entre pelo menos dois dos entes representados na figura (Setor Público, Instituição de Ensino Superior e Empresa):

### Item (a) — Campo Científico (5,0 pontos)
Exemplos aceitos pelo padrão oficial:
- Ampliação dos recursos para a produção de conhecimento científico voltado para a resolução de problemas reais.
- Transferência mútua de conhecimento e de tecnologia entre universidades, empresas e governo.
- Ampliação das fontes de financiamento para o desenvolvimento de pesquisa, tais como bolsas, montagem e manutenção de laboratórios, disponibilização de equipamentos e prestação de serviços especializados.

### Item (b) — Campo Econômico (5,0 pontos)
Exemplos aceitos pelo padrão oficial:
- Ampliação do investimento na criação de soluções tecnológicas mais acessíveis e mais adequadas às necessidades locais.
- Desenvolvimento de tecnologias que propiciem uso sustentável de recursos naturais e de insumos diversos.
- Desenvolvimento de novos produtos, processos e materiais ajustados às demandas e potencialidades do contexto local.
- Desenvolvimento de tecnologias e arranjos que propiciem a constituição de cadeias produtivas mais sustentáveis, com maiores aportes e insumos locais.
- Desenvolvimento de arranjos produtivos locais (APLs) com participação das IES.
- Ampliação de canais de inserção laboral dos estudantes e egressos.
- Diversificação de estruturas produtivas e empresariais do país (*startups*, incubadoras, empresa júnior, fundação de apoio, *joint venture*).
- Ampliação dos investimentos voltados para o alcance de novas patentes.`,
    rubricCriteria: [
      {
        id: 'd02-c1',
        label: 'Item (a) — 1º ganho para o campo científico',
        description:
          'Apresenta um primeiro ganho coerente para a produção científica nacional decorrente da articulação entre Setor Público, IES e Empresa.',
        maxPoints: 2.5,
      },
      {
        id: 'd02-c2',
        label: 'Item (a) — 2º ganho para o campo científico',
        description:
          'Apresenta um segundo ganho distinto e pertinente para o campo científico (ex.: financiamento de laboratórios/bolsas, transferência de tecnologia).',
        maxPoints: 2.5,
      },
      {
        id: 'd02-c3',
        label: 'Item (b) — 1º ganho para o campo econômico',
        description:
          'Apresenta um primeiro ganho coerente para o campo econômico nacional resultante da articulação da Tríplice Hélice.',
        maxPoints: 2.5,
      },
      {
        id: 'd02-c4',
        label: 'Item (b) — 2º ganho para o campo econômico',
        description:
          'Apresenta um segundo ganho distinto e pertinente para o campo econômico (ex.: patentes, startups/incubadoras, novos produtos e inserção laboral).',
        maxPoints: 2.5,
      },
    ],
    studyTips:
      'A figura representa o clássico modelo da **Tríplice Hélice** (Etzkowitz & Leydesdorff). Separe explicitamente sua resposta em itens **a)** e **b)** e não misture os campos: no campo **científico**, enfatize pesquisa aplicada, bolsas, infraestrutura laboratorial e transferência de conhecimento; no campo **econômico**, enfatize depósito de patentes (mencionado no texto!), criação de startups/incubadoras, agregação de valor a produtos/processos e inserção de egressos no mercado.',
    reference: 'ENADE 2019 — Engenharia de Computação, Formação Geral, Questão Discursiva 02.',
  },
  {
    id: 'enade-2019-d03',
    source: 'enade-2019',
    year: 2019,
    number: 3,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Árvores Binárias de Busca (ABB) e Árvores AVL (Balanceamento e Rotações)',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: false,
    context: `Uma árvore binária de busca é uma árvore ordenada que pode apresentar prejuízos no desempenho de determinados algoritmos em função do desbalanceamento causado pela ordem de inserção dos elementos na estrutura. Uma árvore AVL é uma árvore binária de busca balanceada em que a diferença em módulo entre a altura da subárvore esquerda e a altura da subárvore direita de cada nó é, no máximo, de uma unidade.

Nesse contexto, faça o que se pede nos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Apresente uma árvore binária de busca balanceada com os elementos 2, 9, 15, 21, 27, 36 e 50 em que o nó raiz principal contém o elemento 21 e o balanceamento de cada nó seja no máximo uma unidade.',
        points: 3.0,
      },
      {
        label: 'b)',
        text: 'Considerando as inserções dos elementos 9, 27 e 50, nesta ordem, em uma árvore AVL inicialmente vazia, apresente a árvore resultante.',
        points: 3.0,
      },
      {
        label: 'c)',
        text: 'Considerando as inserções dos elementos 9, 27, 50, 15, 2, 21 e 36, nesta ordem, em uma árvore AVL inicialmente vazia, apresente a árvore resultante.',
        points: 4.0,
      },
    ],
    officialAnswer: `Abaixo estão os desenhos oficiais do padrão de resposta do INEP acompanhados do passo a passo completo das inserções e rotações AVL (usando fator de balanceamento $FB(u) = h_{\\text{esq}}(u) - h_{\\text{dir}}(u)$):

### Item (a) — ABB balanceada com raiz 21 (3,0 pontos)
Como há $7$ elementos ordenados ($2 < 9 < 15 < 21 < 27 < 36 < 50$), colocando a mediana **$21$** na raiz obtemos uma árvore binária de busca perfeitamente balanceada ($FB = 0$ em todos os nós):
- **Raiz:** \`21\`
  - **Filho esquerdo:** \`9\` (filho esquerdo: \`2\`, filho direito: \`15\`)
  - **Filho direito:** \`36\` (filho esquerdo: \`27\`, filho direito: \`50\`)

### Item (b) — Inserções AVL: 9, 27, 50 (3,0 pontos)
1. Insere \`9\` (raiz).
2. Insere \`27\` à direita de \`9\`.
3. Insere \`50\` à direita de \`27\` → o nó \`9\` fica com $FB(9) = 0 - 2 = -2$ e seu filho direito \`27\` tem $FB(27) = -1$ (caso **Direita-Direita / RR**).
4. Aplica-se **rotação simples à esquerda** em \`9\`:
   - **Raiz:** \`27\`
     - **Filho esquerdo:** \`9\`
     - **Filho direito:** \`50\`

### Item (c) — Inserções AVL: 9, 27, 50, 15, 2, 21, 36 (4,0 pontos)
Partindo da árvore resultante do item (b) (\`27\` com filhos \`9\` e \`50\`):
1. **Insere \`15\`:** filho direito de \`9\`. Todos os nós permanecem com $|FB| \\le 1$.
2. **Insere \`2\`:** filho esquerdo de \`9\`. Todos os nós permanecem com $|FB| \\le 1$.
3. **Insere \`21\`:** filho direito de \`15\`.
   - Recalculando alturas: $h(21)=1$, $h(15)=2$ ($FB=-1$), $h(2)=1$, $h(9)=3$ ($FB = 1 - 2 = -1$), $h(50)=1$, $h(27)=4$ ($FB = 3 - 1 = +2$).
   - Desbalanceamento na raiz \`27\` ($FB = +2$) com filho esquerdo \`9\` tendo sinal oposto ($FB = -1$) → caso **Esquerda-Direita (LR)**!
   - Aplica-se **rotação dupla à direita** (rotação à esquerda em \`9\`, seguida de rotação à direita em \`27\`):
     - \`15\` sobe à **raiz**;
     - \`9\` torna-se filho esquerdo de \`15\` (mantendo \`2\` à sua esquerda);
     - \`27\` torna-se filho direito de \`15\` (herdando \`21\` como seu filho esquerdo e mantendo \`50\` à direita).
4. **Insere \`36\`:** \`36 > 15\`, \`36 > 27\`, \`36 < 50\` → entra como filho esquerdo de \`50\`.
   - Verificando fatores de balanceamento finais: $FB(2)=0$, $FB(9)=+1$, $FB(21)=0$, $FB(36)=0$, $FB(50)=+1$, $FB(27)=1-2=-1$, $FB(15)=2-3=-1$. Todos satisfazem $|FB| \\le 1$!

**Árvore final do item (c):**
- **Raiz:** \`15\`
  - **Esquerda:** \`9\` → esquerda: \`2\`
  - **Direita:** \`27\` → esquerda: \`21\`, direita: \`50\` → esquerda: \`36\``,
    officialAnswerImages: [
      {
        src: '/images/enade-2019/d03-ans-a.png',
        alt: 'Árvore binária de busca balanceada do gabarito oficial D3 item a: raiz 21, esquerda 9 (filhos 2 e 15), direita 36 (filhos 27 e 50)',
        caption: 'Padrão de resposta oficial INEP — Item (a).',
      },
      {
        src: '/images/enade-2019/d03-ans-b.png',
        alt: 'Árvore AVL do gabarito oficial D3 item b: raiz 27, filho esquerdo 9 e filho direito 50',
        caption: 'Padrão de resposta oficial INEP — Item (b).',
      },
      {
        src: '/images/enade-2019/d03-ans-c.png',
        alt: 'Árvore AVL do gabarito oficial D3 item c: raiz 15, esquerda 9 (esquerda 2), direita 27 (esquerda 21, direita 50 com esquerda 36)',
        caption: 'Padrão de resposta oficial INEP — Item (c).',
      },
    ],
    rubricCriteria: [
      {
        id: 'd03-c1',
        label: 'Item (a) — ABB balanceada com raiz 21',
        description:
          'Desenha corretamente a ABB balanceada com raiz 21, subárvore esquerda (9 → 2, 15) e subárvore direita (36 → 27, 50), respeitando ordenação e |FB| ≤ 1.',
        maxPoints: 3.0,
      },
      {
        id: 'd03-c2',
        label: 'Item (b) — Rotação simples à esquerda (RR)',
        description:
          'Identifica o desbalanceamento após inserir 9, 27, 50 e aplica a rotação simples à esquerda resultando em raiz 27 com filhos 9 (esq.) e 50 (dir.).',
        maxPoints: 3.0,
      },
      {
        id: 'd03-c3',
        label: 'Item (c) — Rotação dupla Esquerda-Direita (LR) na inserção do 21',
        description:
          'Detecta o caso LR no nó 27 após a inserção do 21 e realiza a rotação dupla promovendo 15 à raiz e movendo 21 para filho esquerdo de 27.',
        maxPoints: 2.5,
      },
      {
        id: 'd03-c4',
        label: 'Item (c) — Inserção final do 36 e árvore resultante íntegra',
        description:
          'Posiciona corretamente o 36 como filho esquerdo de 50 e apresenta a árvore AVL final válida sem desbalanceamentos.',
        maxPoints: 1.5,
      },
    ],
    studyTips:
      'Regra de ouro em árvores AVL no ENADE: **sempre** verifique o fator de balanceamento do nó inserido subindo até a raiz após *cada* inserção. Sinais iguais ($+2$ com $+1$, ou $-2$ com $-1$) exigem **rotação simples**; sinais opostos ($+2$ com $-1$, como ocorreu ao inserir o `21` no nó `27`!) exigem **rotação dupla**. Jamais esqueça de realocar a subárvore "órfã" (o `21` era filho direito de `15` e vira filho esquerdo de `27`).',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão Discursiva 03.',
  },
  {
    id: 'enade-2019-d04',
    source: 'enade-2019',
    year: 2019,
    number: 4,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Linguagem C — Funções Iterativas, Recursividade e Divisão em Ponto Flutuante',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: true,
    context: `Na matemática, um produtório é definido como:

$$\\prod_{i=m}^{n} x_i = x_m \\times x_{m+1} \\times x_{m+2} \\times \\ldots \\times x_{n-1} \\times x_n.$$

Com base nessa equação, e considerando que $x_i = i + \\dfrac{1}{i}$, com $i > 0$, faça o que se pede nos itens a seguir.`,
    prompts: [
      {
        label: 'a)',
        text: 'Escreva uma **função iterativa**, em linguagem C, que receba os parâmetros de limite inferior $m$ e de limite superior $n$, calcule e retorne o resultado do produtório.',
        points: 5.0,
      },
      {
        label: 'b)',
        text: 'Escreva uma **função recursiva**, em linguagem C, que receba os parâmetros de limite inferior $m$ e de limite superior $n$, calcule e retorne o resultado do produtório.',
        points: 5.0,
      },
    ],
    officialAnswer: `De acordo com o **Padrão de Resposta oficial do INEP** (observando que \`float\` pode ser intercambiado por \`double\`):

### Item (a) — Função Iterativa em C (5,0 pontos)

**Solução 1 (contador em ponto flutuante):**
\`\`\`c
float produtorio(int m, int n)
{
    float i = 1;   // contador como ponto flutuante
    float r = 1.0; // elemento neutro da multiplicação em ponto flutuante
    for (i = m; i <= n; i += 1) // incremento com soma
        r *= i + 1 / i;
    return r;
}
\`\`\`

**Solução 2 (contador inteiro com constante \`1.0\` para forçar divisão em ponto flutuante):**
\`\`\`c
float produtorio(int m, int n)
{
    int i = 1;     // contador como inteiro
    float r = 1.0; // necessário resultado como ponto flutuante
    for (i = m; i <= n; i++) // incremento (INC)
        r *= i + 1.0 / i; // divisão em ponto flutuante obrigatória!
    return r;
}
\`\`\`

### Item (b) — Função Recursiva em C (5,0 pontos)

**Solução 1 (recursão avançando \`m\` até \`n\`):**
\`\`\`c
float produtorio(int m, int n)
{
    if (m == n)
        return (n + 1.0 / n); // pode ser (m + 1.0 / m)
    else
        return (m + 1.0 / m) * produtorio(m + 1, n);
}
\`\`\`

**Solução 2 (recursão recuando \`n\` até \`m\`):**
\`\`\`c
float produtorio(int m, int n)
{
    if (m == n)
        return (n + 1.0 / n); // pode ser (m + 1.0 / m)
    else
        return (n + 1.0 / n) * produtorio(m, n - 1);
}
\`\`\`

> **Atenção ao erro clássico em C:** se \`i\`, \`m\` ou \`n\` forem \`int\`, escrever \`1 / i\` realiza **divisão inteira** (resultando em \`0\` para todo \`i > 1\`)! Por isso é obrigatório usar \`1.0 / i\` (ou cast \`(float)1 / i\`) e inicializar o acumulador multiplicativo em \`1.0\` (nunca em \`0\`).`,
    rubricCriteria: [
      {
        id: 'd04-c1',
        label: 'Item (a) — Assinatura, tipo de retorno e inicialização do acumulador',
        description:
          'Define a função iterativa recebendo m e n, retornando float/double e inicializando o acumulador do produtório em 1.0.',
        maxPoints: 2.0,
      },
      {
        id: 'd04-c2',
        label: 'Item (a) — Laço de repetição de m até n e divisão em ponto flutuante',
        description:
          'Percorre corretamente i de m até n (inclusive), multiplicando r por (i + 1.0/i) sem erro de divisão inteira.',
        maxPoints: 3.0,
      },
      {
        id: 'd04-c3',
        label: 'Item (b) — Caso base correto na função recursiva',
        description:
          'Define o caso base (m == n retornando m + 1.0/m, ou m > n retornando 1.0) garantindo a parada da recursão.',
        maxPoints: 2.5,
      },
      {
        id: 'd04-c4',
        label: 'Item (b) — Passo recursivo e divisão em ponto flutuante',
        description:
          'Realiza corretamente a chamada recursiva multiplicativa — (m + 1.0/m) * produtorio(m+1, n) ou equivalente decrescente — preservando aritmética de ponto flutuante.',
        maxPoints: 2.5,
      },
    ],
    studyTips:
      'Dois detalhes derrubam metade dos candidatos em questões de C no ENADE: (1) **divisão inteira** (`1 / i` em C dá `0` quando `i >= 2` — use SEMPRE `1.0 / i` ou `(double)1 / i`); (2) **elemento neutro**: para somatório inicialize o acumulador em `0`, mas para **produtório** inicialize em `1.0`! Teste mentalmente sua função para $m = 1, n = 2$: $x_1 = 1 + 1 = 2$, $x_2 = 2 + 0{,}5 = 2{,}5$, produto $= 5{,}0$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão Discursiva 04.',
  },
  {
    id: 'enade-2019-d05',
    source: 'enade-2019',
    year: 2019,
    number: 5,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Circuitos em Corrente Alternada (CA), Defasagem, Impedância e Valor Eficaz (RMS)',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: false,
    context: `Um circuito elétrico de corrente contínua é aquele em que todas as tensões são constantes no tempo. Circuitos de corrente alternada, por sua vez, possuem valores de tensão variantes no tempo. As variações de tensão senoidal são expressas pela equação $V(t) = V_m \\operatorname{sen}(2\\pi f t)$ em que $V_m$ representa o valor de pico, $f$ representa a frequência do sinal e $t$ o tempo. Os gráficos a seguir mostram a tensão e a corrente em uma carga.`,
    images: [
      {
        src: '/images/enade-2019/d05-fig.png',
        alt: 'Dois gráficos senoidais alinhados de t = 0 a t = 0,06 segundos: superior mostrando tensão v(t) com pico de 15 V e 3 ciclos completos; inferior mostrando corrente i(t) em fase com pico de 5 A e 3 ciclos completos',
        caption: 'Formas de onda da tensão senoidal v(t) e da corrente senoidal i(t) na carga.',
      },
    ],
    prompts: [
      {
        label: 'a)',
        text: 'Determine a natureza da carga (resistiva, capacitiva ou indutiva) e justifique.',
        points: 2.5,
      },
      {
        label: 'b)',
        text: 'Calcule o valor da impedância da carga.',
        points: 2.5,
      },
      {
        label: 'c)',
        text: 'Apresente a equação da forma de onda da corrente alternada.',
        points: 2.5,
      },
      {
        label: 'd)',
        text: 'Calcule a tensão eficaz (RMS) do circuito de corrente alternada.',
        points: 2.5,
      },
    ],
    officialAnswer: `De acordo com o **Padrão de Resposta oficial do INEP**:

### a) Natureza da carga (2,5 pontos)
A carga é **resistiva** (puramente resistiva), pois **não há defasagem** ($\\Delta\\phi = 0^\\circ$) entre a tensão $v(t)$ e a corrente $i(t)$ na carga — como pode ser observado nos gráficos, ambas as senoides partem de zero, atingem seus picos positivos/negativos e cruzam o eixo horizontal nos mesmos instantes de tempo.

### b) Valor da impedância da carga (2,5 pontos)
Como a carga é puramente resistiva ($Z = R \\angle 0^\\circ$), pela Lei de Ohm o valor da impedância (resistência) é dado pela razão entre os valores de pico (ou instantâneos em fase) de tensão e corrente:
$$Z = R = \\frac{V(t)}{i(t)} = \\frac{V_m}{I_m} = \\frac{15\\text{ V}}{5\\text{ A}} = 3\\;\\Omega$$

### c) Equação da forma de onda da corrente alternada (2,5 pontos)
1. **Frequência $f$:** observando o gráfico, ocorrem **3 ciclos completos** no intervalo de $0{,}06\\text{ s}$ (equivalentemente, o período de 1 ciclo é $T = 0{,}02\\text{ s}$):
$$f = \\frac{3}{0{,}06\\text{ s}} = 50\\text{ Hz} \\quad \\Longrightarrow \\quad \\omega = 2\\pi f = 2\\pi(50) = 100\\pi\\text{ rad/s}$$
2. **Amplitude (valor de pico) $I_m$:** por inspeção no eixo das ordenadas do gráfico da corrente, $I_m = 5\\text{ A}$.
3. **Equação de $i(t)$:** substituindo na forma $i(t) = I_m \\operatorname{sen}(2\\pi f t)$:
$$i(t) = 5 \\operatorname{sen}(100\\pi t)\\text{ A}$$

### d) Tensão eficaz (RMS) (2,5 pontos)
Para um sinal puramente senoidal com valor de pico $V_m = 15\\text{ V}$:
$$V_{\\text{RMS}} = \\frac{V_m}{\\sqrt{2}} = \\frac{15}{\\sqrt{2}} = \\frac{15\\sqrt{2}}{2} \\approx 10{,}61\\text{ V}$$`,
    rubricCriteria: [
      {
        id: 'd05-c1',
        label: 'Item (a) — Carga resistiva e justificativa por fase',
        description:
          'Identifica corretamente a carga como resistiva e justifica pela ausência de defasagem angular (tensão e corrente em fase nos gráficos).',
        maxPoints: 2.5,
      },
      {
        id: 'd05-c2',
        label: 'Item (b) — Cálculo da impedância Z = 3 Ω',
        description:
          'Aplica corretamente a Lei de Ohm (V_m / I_m = 15 / 5) encontrando Z = R = 3 Ω com unidade correta.',
        maxPoints: 2.5,
      },
      {
        id: 'd05-c3',
        label: 'Item (c) — Frequência (50 Hz) e equação i(t) = 5 sen(100πt)',
        description:
          'Extrai corretamente I_m = 5 A e f = 50 Hz (T = 0,02 s) dos gráficos e monta a equação i(t) = 5 sen(100πt).',
        maxPoints: 2.5,
      },
      {
        id: 'd05-c4',
        label: 'Item (d) — Cálculo da tensão eficaz V_RMS',
        description:
          'Aplica V_RMS = V_m / √2 = 15 / √2 = 15√2 / 2 ≈ 10,61 V com unidade correta.',
        maxPoints: 2.5,
      },
    ],
    studyTips:
      'Revisão relâmpago de circuitos CA para o ENADE: (1) Em carga **resistiva**, $v(t)$ e $i(t)$ estão **em fase**; em carga **indutiva**, a tensão está adiantada $90^\\circ$ da corrente ("ELI"); em carga **capacitiva**, a corrente está adiantada $90^\\circ$ da tensão ("ICE"). (2) Lembre sempre que $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ e $V_{\\text{RMS}} = \\frac{V_m}{\\sqrt{2}} \\approx 0{,}707\\,V_m$.',
    reference: 'ENADE 2019 — Engenharia de Computação, Componente Específico, Questão Discursiva 05.',
  },
];
