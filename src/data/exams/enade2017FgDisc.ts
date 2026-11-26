import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';

export const ENADE_2017_FG: ObjectiveQuestion[] = [
  {
    id: 'enade-2017-q01',
    source: 'enade-2017',
    year: 2017,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Interpretação de Gráficos, Porcentagens e Economia Internacional (Brexit)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'medio',
    context: `Após o referendo em que os britânicos decidiram deixar a União Europeia (UE), os mercados financeiros reagiram com incerteza quanto aos desdobramentos econômicos dessa saída.

Os dois gráficos abaixo mostram, respectivamente:
1. As contribuições dos países integrantes para o orçamento da UE em 2014 (em bilhões de euros), cuja soma total foi de **€ 144,9 bilhões**;
2. A comparação entre o valor contribuído pelo Reino Unido (€ 11,3 bilhões) e o retorno em gastos da UE no Reino Unido (€ 6,9 bilhões).`,
    images: [
      {
        src: '/images/enade-2017/q01-graficos.png',
        alt: 'Gráficos de contribuições dos países para a União Europeia e contrapartida ao Reino Unido em 2014',
        caption: 'Contribuições para a UE e balanço financeiro do Reino Unido em 2014 (ENADE 2017 Q01).',
      },
    ],
    command: 'Considerando o texto e as informações apresentadas nos gráficos acima, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'A contribuição dos quatro maiores países do bloco somou 41,13%.' },
      { letter: 'B', text: 'O grupo "Outros países" contribuiu para esse bloco econômico com 42,1%.' },
      { letter: 'C', text: 'A diferença da contribuição do Reino Unido em relação ao recebido do bloco econômico foi 38,94%.' },
      { letter: 'D', text: 'A soma das participações dos três países com maior contribuição para o bloco econômico supera 50%.' },
      { letter: 'E', text: 'O percentual de participação do Reino Unido com o bloco econômico em 2014 foi de 17,8%, o que o colocou entre os quatro maiores participantes.' },
    ],
    correctOption: 'C',
    explanation: `Vamos conferir matematicamente cada alternativa usando o total da UE = **€ 144,9 bilhões**:

- **A) Falsa:** Os 4 maiores contribuintes individuais são Alemanha ($25{,}8$), França ($19{,}5$), Itália ($14{,}3$) e Reino Unido ($11{,}3$). Soma $= 25{,}8 + 19{,}5 + 14{,}3 + 11{,}3 = 70{,}9$ bilhões. Percentual: $\\frac{70{,}9}{144{,}9} \\approx 48{,}93\\% \\ne 41{,}13\\%$.
- **B) Falsa (pegadinha clássica!):** O valor $42{,}1$ está em **€ bilhões**, não em porcentagem! O percentual real é $\\frac{42{,}1}{144{,}9} \\approx 29{,}05\\%$.
- **C) VERDADEIRA:** O Reino Unido contribuiu com $11{,}3$ bilhões e recebeu $6{,}9$ bilhões. A diferença é $11{,}3 - 6{,}9 = 4{,}4$ bilhões. Em relação à sua contribuição ($11{,}3$):
  $$\\frac{11{,}3 - 6{,}9}{11{,}3} = \\frac{4{,}4}{11{,}3} \\approx 0{,}38938 = \\mathbf{38{,}94\\%}.$$
- **D) Falsa:** Os 3 maiores (Alemanha + França + Itália) somam $25{,}8 + 19{,}5 + 14{,}3 = 59{,}6$ bilhões, que representa $\\frac{59{,}6}{144{,}9} \\approx 41{,}13\\%$ (não supera $50\\%$; note que $41{,}13\\%$ foi usado como distrator na letra A!).
- **E) Falsa:** A participação do Reino Unido foi $\\frac{11{,}3}{144{,}9} \\approx 7{,}80\\%$ (e não $17{,}8\\%$).

Logo, alternativa correta: **C**.`,
    optionAnalysis: {
      A: 'Incorreta. 41,13% corresponde à soma dos TRÊS maiores contribuintes (59,6 / 144,9), não dos quatro maiores (48,93%).',
      B: 'Incorreta. Confunde a unidade do eixo (€ 42,1 bilhões) com porcentagem; o percentual correto é 29,05%.',
      C: 'Correta. (11,3 − 6,9) / 11,3 = 4,4 / 11,3 ≈ 38,94%.',
      D: 'Incorreta. Os três maiores somam 59,6 bilhões, o que equivale a 41,13% (< 50%).',
      E: 'Incorreta. 11,3 / 144,9 ≈ 7,80%, e não 17,8%.',
    },
    keyConcept:
      'Leitura rigorosa de unidades em gráficos (€ bilhões vs %) e cálculo de diferença relativa usando o denominador correto.',
  },
  {
    id: 'enade-2017-q02',
    source: 'enade-2017',
    year: 2017,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Agricultura Familiar, Segurança Alimentar e Sustentabilidade',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `De acordo com dados da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO, 2014), a agricultura familiar responde por cerca de **80% dos alimentos produzidos mundialmente** e protege aproximadamente **75% dos recursos agrícolas do planeta**, exercendo papel estratégico para a sustentabilidade ecológica.

Considerando esse contexto, avalie as afirmações a seguir:

I. Os principais desafios da agricultura familiar estão relacionados à segurança alimentar, à sustentabilidade ambiental e à capacidade produtiva.

II. As políticas públicas voltadas ao fortalecimento da agricultura familiar devem estimular a inovação, respeitando a escala das propriedades, as tecnologias empregadas, o acesso a mercados e as particularidades ecológicas.

III. Embora a maioria das propriedades rurais no mundo tenha caráter familiar, o trabalho nelas desempenhado provém majoritariamente de mão de obra assalariada contratada.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'I, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'II e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'C',
    explanation: `Analisando cada afirmação sobre a agricultura familiar:

- **I — VERDADEIRA:** Por produzir ~80% dos alimentos globais e gerir ~75% dos recursos agrícolas, seus desafios centrais envolvem conciliar segurança alimentar, sustentabilidade ambiental e produtividade.
- **II — VERDADEIRA:** Políticas públicas eficazes promovem inovação adequada às condições locais (tamanho do estabelecimento, ecossistema, tecnologia apropriada e inserção nos mercados).
- **III — FALSA:** Por definição conceitual e legal (inclusive pela FAO e pela Lei nº 11.326/2006 no Brasil), a agricultura familiar caracteriza-se pela **predominância de mão de obra da própria família**, e não pela contratação majoritária de mão de obra assalariada.

Apenas **I e II** estão corretas — alternativa **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Exclui a afirmação verdadeira II.',
      B: 'Incorreta. A afirmação III contradiz a definição básica de agricultura familiar.',
      C: 'Correta. I e II estão alinhadas às diretrizes da FAO sobre segurança alimentar, sustentabilidade e políticas públicas.',
      D: 'Incorreta. Inclui a afirmação falsa III.',
      E: 'Incorreta. Inclui a afirmação falsa III.',
    },
    keyConcept:
      'Agricultura familiar caracteriza-se pelo uso predominante de mão de obra familiar e tem papel central na segurança alimentar e preservação ecológica.',
  },
  {
    id: 'enade-2017-q03',
    source: 'enade-2017',
    year: 2017,
    number: 3,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Consumo de Energia Elétrica, Bandeiras Tarifárias e Matemática Aplicada',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `No sistema brasileiro de bandeiras tarifárias de energia elétrica:
- **Bandeira verde:** sem acréscimo;
- **Bandeira amarela:** acréscimo de **R$ 0,020** por kWh consumido;
- **Bandeira vermelha:** acréscimo de **R$ 0,035** por kWh consumido.

A tabela a seguir indica a potência, o tempo de uso diário e o consumo diário em kWh de aparelhos residenciais comuns:

| Aparelho | Potência (kW) | Tempo de uso diário (h) | kWh (diário) |
| :--- | :---: | :---: | :---: |
| Carregador de celular | 0,010 | 24 | 0,240 |
| Chuveiro 3 500 W | 3,500 | 0,5 | 1,750 |
| Chuveiro 5 500 W | 5,500 | 0,5 | 2,250 |
| Lâmpada de LED | 0,008 | 5 | 0,040 |
| Lâmpada fluorescente | 0,015 | 5 | 0,075 |
| Lâmpada incandescente | 0,060 | 5 | 0,300 |
| *Modem* de internet em *stand-by* | 0,005 | 24 | 0,120 |
| *Modem* de internet em uso | 0,012 | 8 | 0,096 |

Adotando uma tarifa-base de **R$ 0,50 por kWh** na bandeira verde e um mês de **30 dias**, avalie as afirmações abaixo:

I. Em bandeira amarela, o valor mensal da tarifa de energia elétrica para um chuveiro de 3 500 W seria de R$ 1,05, e de R$ 1,65 para um chuveiro de 5 500 W.

II. Manter um carregador de celular e um *modem* em *stand-by* ligados 24 horas por dia gera custo mensal de R$ 5,40 em bandeira verde e de R$ 5,78 em bandeira amarela.

III. Em bandeira verde, cada lâmpada incandescente utilizada no lugar de uma lâmpada LED gera um gasto mensal adicional de R$ 3,90.`,
    command: 'É correto o que se afirma em',
    options: [
      { letter: 'A', text: 'II, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'I e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'B',
    explanation: `Tarifa verde = R$ 0,50/kWh. Tarifa amarela = $0{,}50 + 0{,}020 =$ **R$ 0,52/kWh**. Mês = 30 dias.

- **Afirmação I — FALSA:**
  - Chuveiro 3500 W: $1{,}750\\text{ kWh/dia} \\times 30 = 52{,}5\\text{ kWh/mês}$.
    - Custo mensal total em bandeira amarela: $52{,}5 \\times 0{,}52 =$ **R$ 27,30**! (Note que R$ 1,05 = $52{,}5 \\times 0{,}02$ é apenas o *acréscimo* da bandeira, não o valor mensal da tarifa; além disso, para o chuveiro de 5500 W, $2{,}25 \\times 30 = 67{,}5\\text{ kWh}$ → acréscimo de $67{,}5 \\times 0{,}02 =$ R$ 1,35, nem R$ 1,65!)
- **Afirmação II — FALSA:**
  - Consumo diário somado (carregador + modem *stand-by*): $0{,}240 + 0{,}120 = 0{,}360\\text{ kWh/dia}$.
  - Consumo mensal: $0{,}360 \\times 30 = 10{,}8\\text{ kWh/mês}$.
  - Em bandeira verde: $10{,}8 \\times 0{,}50 =$ **R$ 5,40** ✓.
  - Em bandeira amarela: $10{,}8 \\times 0{,}52 =$ **R$ 5,616 ≈ R$ 5,62** $\\ne$ R$ 5,78! (R$ 5,78 seria o valor aproximado em bandeira *vermelha*: $10{,}8 \\times 0{,}535 = 5{,}778$!)
- **Afirmação III — VERDADEIRA:**
  - Diferença diária (incandescente − LED): $0{,}300 - 0{,}040 = 0{,}260\\text{ kWh/dia}$.
  - Diferença mensal: $0{,}260 \\times 30 = 7{,}8\\text{ kWh/mês}$.
  - Custo adicional em bandeira verde: $7{,}8 \\times 0{,}50 =$ **R$ 3,90** ✓!

Apenas **III** é verdadeira — alternativa **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Na afirmação II, o custo em bandeira amarela é R$ 5,62 (R$ 5,78 seria bandeira vermelha).',
      B: 'Correta. (0,300 − 0,040) × 30 × 0,50 = 7,8 × 0,50 = R$ 3,90.',
      C: 'Incorreta. Tanto I quanto II apresentam erros de cálculo/tarifa.',
      D: 'Incorreta. A afirmação I está incorreta.',
      E: 'Incorreta. Apenas III está correta.',
    },
    keyConcept:
      'Cálculo de energia elétrica: E_mês = kWh_dia × 30 e Custo = E_mês × (Tarifa_base + Acréscimo_bandeira). Atenção às pegadinhas trocando bandeira amarela por vermelha.',
  },
  {
    id: 'enade-2017-q04',
    source: 'enade-2017',
    year: 2017,
    number: 4,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Cultura de Massa, Mídia Televisiva e Fragmentação da Informação',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Analise a tirinha de Calvin e Haroldo (Texto 1) em diálogo com a reflexão sociológica sobre a televisão (Texto 2):

**Texto 1:**`,
    images: [
      {
        src: '/images/enade-2017/q04-tirinha-calvin.png',
        alt: 'Tirinha do Calvin comentando o período curto de atenção da televisão enquanto assiste há três horas',
        caption: 'Tirinha sobre a velocidade e superficialidade da recepção televisiva (ENADE 2017 Q04).',
      },
    ],
    command: `**Texto 2:** Estudos sobre mídia e sociedade destacam que a televisão opera como um fluxo contínuo e acelerado de imagens no qual telejornais, comerciais, novelas e esportes se misturam quase sem fronteiras, transformando a própria sequência vertiginosa de estímulos em espetáculo.

Com base nos textos 1 e 2, é correto afirmar que o tempo de recepção típico da televisão como veículo de comunicação estimula a`,
    options: [
      {
        letter: 'A',
        text: 'contemplação das imagens animadas como meio de reflexão acerca do estado de coisas no mundo contemporâneo, traduzido em forma de espetáculo.',
      },
      {
        letter: 'B',
        text: 'fragmentação e o excesso de informação, que evidenciam a opacidade do mundo contemporâneo, cada vez mais impregnado de imagens e informações superficiais.',
      },
      {
        letter: 'C',
        text: 'especialização do conhecimento, com vistas a promover uma difusão de valores e princípios amplos, com espaço garantido para a diferença cultural como capital simbólico valorizado.',
      },
      {
        letter: 'D',
        text: 'atenção concentrada do telespectador em determinado assunto, uma vez que os recursos expressivos próprios do meio garantem a motivação necessária para o foco em determinado assunto.',
      },
      {
        letter: 'E',
        text: 'reflexão crítica do telespectador, uma vez que permite o acesso a uma sequência de assuntos de interesse público que são apresentados de forma justaposta, o que permite o estabelecimento de comparações.',
      },
    ],
    correctOption: 'B',
    explanation: `Tanto a ironia da tirinha (Calvin elogia explicações de "dez segundos" e fica três horas em frente à TV "a seis pensamentos por minuto") quanto o Texto 2 (fluxo vertiginoso em que gêneros distintos se misturam sem distinção) criticam a **superficialidade, a fragmentação e o excesso acelerado de imagens e informações**, que dificultam o aprofundamento e a reflexão crítica — exatamente o que afirma a **alternativa B**.`,
    optionAnalysis: {
      A: 'Incorreta. O fluxo acelerado impede a contemplação reflexiva.',
      B: 'Correta. Sintetiza com precisão a crítica comum à tirinha e ao texto teórico: fragmentação, excesso e superficialidade.',
      C: 'Incorreta. A televisão massificada tende à homogeneização superficial, não à especialização do conhecimento.',
      D: 'Incorreta. Contradiz diretamente a tirinha ("período curto de atenção").',
      E: 'Incorreta. A justaposição vertiginosa dispersa o foco em vez de aprofundar a reflexão crítica.',
    },
    keyConcept:
      'Crítica à indústria cultural e ao ritmo televisivo: excesso e fragmentação de estímulos reduzem o tempo de atenção e favorecem a superficialidade.',
  },
  {
    id: 'enade-2017-q05',
    source: 'enade-2017',
    year: 2017,
    number: 5,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Leitura de Infográfico, Tecnologia Agrícola e Sustentabilidade (Hidrogéis)',
    questionStyle: 'interpretacao-grafico-circuito',
    difficulty: 'facil',
    context: `Hidrogéis (polímeros hidrorretentores) são materiais em pó ou grãos usados na agricultura desde a década de 1950. Podem ser produzidos a partir de polímeros sintéticos (como poliacrilatos comerciais) ou de polímeros naturais — estes últimos já comprovados como ecologicamente viáveis, embora ainda não viáveis em escala comercial.

Analise o infográfico abaixo, que detalha o funcionamento e as aplicações dos hidrogéis no solo:`,
    images: [
      {
        src: '/images/enade-2017/q05-infografico-hidrogel.png',
        alt: 'Infográfico Por dentro dos hidrogéis mostrando hidratação, uso no plantio de eucalipto e café, e vantagens',
        caption: 'Infográfico sobre hidrogéis na agricultura (ENADE 2017 Q05).',
      },
    ],
    command: 'A partir das informações apresentadas, assinale a opção correta.',
    options: [
      { letter: 'A', text: 'O uso do hidrogel, em caso de estiagem, propicia a mortalidade dos pés de café.' },
      { letter: 'B', text: 'O hidrogel criado a partir de polímeros naturais deve ter seu uso restrito a solos áridos.' },
      { letter: 'C', text: 'Os hidrogéis são usados em culturas agrícolas e florestais e em diferentes tipos de solos.' },
      { letter: 'D', text: 'O uso de hidrogéis naturais é economicamente viável em lavouras tradicionais de larga escala.' },
      { letter: 'E', text: 'O uso dos hidrogéis permite que as plantas sobrevivam sem a água da irrigação ou das chuvas.' },
    ],
    correctOption: 'C',
    explanation: `Conferindo cada alternativa diretamente contra o texto e o infográfico:

- **A) Falsa:** O quadro de vantagens afirma o oposto — o hidrogel **diminui** a chance de mudas morrerem em função da estiagem.
- **B) Falsa:** Ele *permite* o cultivo em regiões áridas, mas também reduz a frequência de irrigação em lavouras irrigadas e florestas de eucalipto/cafeicultura; não é restrito a solos áridos.
- **C) VERDADEIRA:** O passo 3 cita uso em **florestas de eucalipto** (cultura florestal) e **cafeicultura** (cultura agrícola), e o quadro de vantagens menciona tanto regiões áridas quanto lavouras irrigadas (diferentes tipos de solos).
- **D) Falsa:** O texto afirma explicitamente que os polímeros naturais são viáveis ecologicamente, mas **ainda não comercialmente**.
- **E) Falsa:** O hidrogel **absorve e libera gradualmente** a água proveniente da chuva ou da irrigação (passo 4); ele não dispensa totalmente a água.

Gabarito oficial: **C**.`,
    optionAnalysis: {
      A: 'Incorreta. O hidrogel reduz (não propicia) a mortalidade das mudas em períodos de estiagem.',
      B: 'Incorreta. Não há restrição exclusiva a solos áridos; também é usado em lavouras irrigadas.',
      C: 'Correta. Confirmado pelo texto e infográfico (eucalipto, cafeicultura, regiões áridas e lavouras irrigadas).',
      D: 'Incorreta. O enunciado informa que hidrogéis naturais ainda não são viáveis comercialmente.',
      E: 'Incorreta. O polímero retém água da chuva ou irrigação; sem fonte hídrica, não há água para reter.',
    },
    keyConcept:
      'Interpretação literal e cuidadosa de infográficos: desconfie de termos restritivos absolutos ("restrito a", "sem água") e de inversões diretas do texto.',
  },
  {
    id: 'enade-2017-q06',
    source: 'enade-2017',
    year: 2017,
    number: 6,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Migrações Contemporâneas, Direitos Humanos e Xenofobia no Brasil',
    questionStyle: 'multipla-simples',
    difficulty: 'facil',
    context: `Após o grave terremoto de 2010 no Haiti, o fluxo migratório haitiano para o Brasil intensificou-se, impulsionado também pela aproximação gerada pela liderança brasileira na missão humanitária da ONU no país caribenho. Apesar da expectativa de acolhimento solidário, pesquisas acadêmicas registram o crescimento de episódios de hostilidade, discursos de ódio e marchas anti-imigração em cidades brasileiras, constatando que os alvos prioritários dessa violência xenofóbica são, em geral, imigrantes negros e oriundos de países mais pobres.`,
    command: 'A partir das informações do texto, conclui-se que',
    options: [
      {
        letter: 'A',
        text: 'o processo de acolhimento dos imigrantes haitianos tem sido pautado por características fortemente associadas ao povo brasileiro: a solidariedade e o respeito às diferenças.',
      },
      {
        letter: 'B',
        text: 'as reações xenófobas estão relacionadas ao fato de que os imigrantes são concorrentes diretos para os postos de trabalho de maior prestígio na sociedade, aumentando a disputa por boas vagas de emprego.',
      },
      {
        letter: 'C',
        text: 'o acolhimento promovido pelos brasileiros aos imigrantes oriundos de países do leste europeu tende a ser semelhante ao oferecido aos imigrantes haitianos, pois no Brasil vigora a ideia de democracia racial e do respeito às etnias.',
      },
      {
        letter: 'D',
        text: 'o nacionalismo exacerbado de classes sociais mais favorecidas, no Brasil, motiva a rejeição aos imigrantes haitianos e a perseguição contra os brasileiros que pretendem morar fora do seu país em busca de melhores condições de vida.',
      },
      {
        letter: 'E',
        text: 'a crescente onda de xenofobia que vem se destacando no Brasil evidencia que o preconceito e a rejeição por parte dos brasileiros em relação aos imigrantes haitianos é pautada pela discriminação social e pelo racismo.',
      },
    ],
    correctOption: 'E',
    explanation: `O parágrafo final do texto-base aponta o perfil específico das vítimas de xenofobia no Brasil: **imigrantes negros** (evidenciando **racismo**) e **provenientes de países mais pobres** (evidenciando **discriminação socioeconômica**). Isso conduz diretamente à **alternativa E**.`,
    optionAnalysis: {
      A: 'Incorreta. Contradiz os relatos de ataques xenofóbicos e discursos de ódio descritos no texto.',
      B: 'Incorreta. O texto não atribui a xenofobia à disputa por cargos de alto prestígio.',
      C: 'Incorreta. O texto desconstrói justamente o mito de acolhimento indistinto ao destacar o recorte racial e socioeconômico da rejeição.',
      D: 'Incorreta. Extrapola o texto ao falar em perseguição a emigrantes brasileiros.',
      E: 'Correta. Conecta exatamente os dois marcadores apontados pelo texto: origem em países pobres (discriminação social) e identidade negra (racismo).',
    },
    keyConcept:
      'Xenofobia seletiva no Brasil: estudos sociológicos evidenciam a interseção entre racismo estrutural e preconceito socioeconômico contra imigrantes de países periféricos.',
  },
  {
    id: 'enade-2017-q07',
    source: 'enade-2017',
    year: 2017,
    number: 7,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Patrimônio Cultural Imaterial, Comunidades Tradicionais e Mercado',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `A confecção artesanal das panelas de barro de Goiabeiras (Vitória-ES) preserva saberes indígenas há mais de 400 anos. As artesãs extraem a argila do Vale do Mulembá e obtêm a tintura impermeabilizante da casca do mangue vermelho (*Rhizophora mangle*) dos manguezais locais, servindo nessas peças pratos típicos como a moqueca capixaba.

Em 2002, o ofício foi registrado pelo Iphan como patrimônio cultural imaterial do Brasil e conquistou a primeira indicação geográfica brasileira na área do artesanato. Entretanto, estudos recentes indicam que a profissionalização em um galpão associativo com maior visibilidade publicitária gerou tensões comerciais, levando paneleiras de fundo de quintal a relatarem perda de espaço no mercado.`,
    command: 'Com base nas informações apresentadas, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'A produção das panelas de barro abrange interrelações com a natureza local, de onde se extrai a matéria-prima indispensável à confecção das peças ceramistas.',
      },
      {
        letter: 'B',
        text: 'A relação entre as tradições das panelas de barro e o prato típico da culinária indígena permanece inalterada, o que viabiliza a manutenção da identidade cultural capixaba.',
      },
      {
        letter: 'C',
        text: 'A demanda por bens culturais produzidos por comunidades tradicionais insere o ofício das paneleiras no mercado comercial, com retornos positivos para toda a comunidade.',
      },
      {
        letter: 'D',
        text: 'A inserção das panelas de barro no mercado turístico reduz a dimensão histórica, cultural e estética do ofício das paneleiras à dimensão econômica da comercialização de produtos artesanais.',
      },
      {
        letter: 'E',
        text: 'O ofício das paneleiras representa uma forma de resistência sociocultural da comunidade tradicional na medida em que o estado do Espírito Santo mantém-se alheio aos modos de produção, divulgação e comercialização dos produtos.',
      },
    ],
    correctOption: 'A',
    explanation: `Analisando cada alternativa à luz das três fontes apresentadas:

- **A) VERDADEIRA:** O primeiro texto demonstra explicitamente a interdependência com o ecossistema local — retirada da argila do Vale do Mulembá e da casca do mangue vermelho (*Rhizophora mangle*) para impermeabilizar as panelas.
- **B) Falsa:** A técnica "pouco mudou", mas não permaneceu *inalterada* (houve modelagem adaptada e profissionalização empresarial no galpão).
- **C) Falsa:** O terceiro texto mostra que os retornos **não** foram igualmente positivos para *toda* a comunidade, pois as paneleiras de fundo de quintal queixam-se de ficarem ofuscadas comercialmente.
- **D) Falsa:** O reconhecimento pelo Iphan como patrimônio imaterial demonstra que a dimensão histórica e cultural permanece preservada e valorizada, não sendo reduzida apenas ao aspecto comercial.
- **E) Falsa:** O poder público não está alheio — houve tombamento/registro pelo Iphan, indicação geográfica e divulgação oficial pela prefeitura/estado.

Gabarito oficial: **A**.`,
    optionAnalysis: {
      A: 'Correta. Retrata fielmente a dependência direta da matéria-prima local (argila e casca de mangue vermelho).',
      B: 'Incorreta. A palavra absoluta "inalterada" contradiz as transformações e adaptações mencionadas.',
      C: 'Incorreta. "Para toda a comunidade" contradiz a queixa das paneleiras de fundo de quintal.',
      D: 'Incorreta. Reducionismo não sustentado pelos textos (o registro no Iphan valoriza justamente a dimensão cultural).',
      E: 'Incorreta. O poder público atuou no reconhecimento, na indicação geográfica e na divulgação.',
    },
    keyConcept:
      'Comunidades tradicionais articulam patrimônio cultural imaterial com sustentabilidade local; em questões da FG, desconfie de generalizações absolutas como "inalterada" ou "para toda a comunidade".',
  },
  {
    id: 'enade-2017-q08',
    source: 'enade-2017',
    year: 2017,
    number: 8,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Agenda 2030 e Objetivos de Desenvolvimento Sustentável (ODS)',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Os 17 Objetivos de Desenvolvimento Sustentável (ODS), estabelecidos pela ONU em setembro de 2015, estruturam-se de maneira integrada sobre três camadas interdependentes — **Biosfera**, **Sociedade** e **Economia** — articuladas por parcerias globais (ODS 17), conforme representado no diagrama abaixo:`,
    images: [
      {
        src: '/images/enade-2017/q08-diagrama-ods.png',
        alt: 'Modelo em camadas dos 17 ODS da ONU integrando Biosfera, Sociedade, Economia e Parcerias',
        caption: 'Integração dos 17 ODS entre Biosfera, Sociedade e Economia (ENADE 2017 Q08).',
      },
    ],
    command: `Considerando que os ODS devem ser implementados por meio de ações que integrem a economia, a sociedade e a biosfera, avalie as afirmações a seguir:

I. O capital humano deve ser capacitado para atender às demandas por pesquisa e inovação em áreas estratégicas para o desenvolvimento sustentável.

II. A padronização cultural dinamiza a difusão do conhecimento científico e tecnológico entre as nações para a promoção do desenvolvimento sustentável.

III. Os países devem incentivar políticas de desenvolvimento do empreendedorismo e de atividades produtivas com geração de empregos que garantam a dignidade da pessoa humana.

É correto o que se afirma em`,
    options: [
      { letter: 'A', text: 'II, apenas.' },
      { letter: 'B', text: 'III, apenas.' },
      { letter: 'C', text: 'I e II, apenas.' },
      { letter: 'D', text: 'I e III, apenas.' },
      { letter: 'E', text: 'I, II e III.' },
    ],
    correctOption: 'D',
    explanation: `Avaliando as afirmações frente à Agenda 2030 (ODS):

- **I — VERDADEIRA:** Articula diretamente o **ODS 4** (Educação de Qualidade) e o **ODS 9** (Indústria, Inovação e Infraestrutura) para capacitar pessoas e solucionar desafios socioambientais.
- **II — FALSA:** Os ODS valorizam a **diversidade cultural** e a adaptação às realidades locais, jamais a *padronização cultural* (homogeneização que apaga identidades locais).
- **III — VERDADEIRA:** Reflete diretamente o **ODS 8** (Trabalho Decente e Crescimento Econômico) e o **ODS 1** (Erradicação da Pobreza).

Apenas **I e III** estão corretas — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação II é falsa porque o desenvolvimento sustentável respeita a diversidade cultural, não impõe padronização.',
      B: 'Incorreta. Exclui a afirmação verdadeira I.',
      C: 'Incorreta. Inclui a afirmação falsa II.',
      D: 'Correta. I (ODS 4 e 9) e III (ODS 8) expressam metas centrais da Agenda 2030.',
      E: 'Incorreta. Inclui a afirmação falsa II.',
    },
    keyConcept:
      'Agenda 2030 (ODS): integra Biosfera, Sociedade e Economia promovendo educação, inovação, trabalho digno e respeito à diversidade cultural (nunca padronização cultural).',
  },
];

export const ENADE_2017_DISCURSIVE: DiscursiveQuestion[] = [
  {
    id: 'enade-2017-d01',
    source: 'enade-2017',
    year: 2017,
    number: 1,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Saúde Pública: Epidemia de Sífilis Congênita e Relações de Gênero',
    difficulty: 'medio',
    maxLines: 15,
    context: `Os textos de apoio da prova apresentam três dados centrais sobre a saúde pública no Brasil:
- **Texto 1 (Sífilis congênita):** Entre 2001 e 2015, a incidência de sífilis congênita cresceu para 5 casos por 10 mil nascidos vivos (aumento de 32% entre 2014 e 2015), distanciando-se da meta da OPAS/Unicef, apesar de existir tratamento simples com antibióticos.
- **Texto 2 (Fatores da epidemia e vulnerabilidade feminina):** O crescimento de registros (230 mil casos em 5 anos) relaciona-se à ampliação do teste rápido nas UBS, ao desabastecimento temporário de penicilina e à queda no uso de preservativo. A incidência passou a recair mais sobre mulheres devido à dificuldade de negociação do preservativo e à maior detecção no pré-natal, enquanto estima-se que apenas **12% dos parceiros sexuais** realizam o tratamento, favorecendo a reinfecção.
- **Texto 3 (Saúde masculina):** Embora os homens apresentem maiores taxas de morbimortalidade por doenças crônicas e severas, buscam muito menos os serviços de atenção primária à saúde do que as mulheres.`,
    prompts: [
      {
        label: 'Aspecto 1:',
        text: 'Redija um texto sobre **"Epidemia de sífilis congênita no Brasil e relações de gênero"** abordando a vulnerabilidade das mulheres às ISTs/DSTs e o papel social do homem em relação à prevenção dessas doenças.',
        points: 5.0,
      },
      {
        label: 'Aspecto 2:',
        text: 'Proponha **duas ações especificamente voltadas para o público masculino**, no âmbito das políticas públicas de saúde ou de educação, para reduzir o problema.',
        points: 5.0,
      },
    ],
    officialAnswer: `**Padrão de Resposta Oficial do INEP:**

**1. Vulnerabilidade feminina e papel social masculino:**
- A vulnerabilidade crescente das mulheres às ISTs/DSTs resulta de fatores sociais e culturais, incluindo padrões de comportamento, crenças morais e **hierarquias de poder** nas relações afetivas, que reduzem a autonomia feminina para negociar o uso de preservativo ou dialogar sobre prevenção.
- Culturalmente, a responsabilidade pelos cuidados com saúde sexual e reprodutiva recai sobre a mulher (como o teste no pré-natal), enquanto os homens raramente procuram a atenção primária por não se sentirem vulneráveis. Como os sintomas masculinos podem ser discretos ou silenciosos, muitos parceiros desconhecem a infecção e acabam infectando ou **reinfectando gestantes**, agravando a sífilis congênita.

**2. Duas ações voltadas especificamente ao público masculino (exemplos aceitos pelo INEP):**
1. Ações de atenção primária voltadas à prevenção que incentivem homens a realizarem exames periódicos para detecção precoce de ISTs;
2. Programas de incentivo e atendimento ao parceiro masculino durante o **pré-natal da gestante** (pré-natal do parceiro), contendo a reinfecção;
3. Programas especializados na atenção primária adequados às especificidades do público masculino (horários estendidos, busca ativa);
4. Campanhas educativas e projetos escolares problematizando masculinidade, responsabilidade compartilhada e diálogo saudável sobre saúde sexual;
5. Inserção em materiais didáticos de conteúdos sensibilizadores sobre o papel dos homens na prevenção das ISTs;
6. Campanhas formais e não formais para desmistificar tabus morais quanto à compra, ao porte e à negociação do preservativo.`,
    rubricCriteria: [
      {
        id: 'd01-c1',
        label: 'Vulnerabilidade feminina e relações de poder',
        description: 'Explicou como fatores culturais/hierarquias de gênero dificultam a negociação do preservativo e sobrecarregam a mulher com o cuidado reprodutivo.',
        maxPoints: 2.5,
      },
      {
        id: 'd01-c2',
        label: 'Papel social masculino e reinfecção',
        description: 'Apontou a baixa adesão masculina à atenção primária/tratamento (12%) e o risco de reinfecção de gestantes (sífilis congênita).',
        maxPoints: 2.5,
      },
      {
        id: 'd01-c3',
        label: 'Proposta 1 voltada ao público masculino',
        description: 'Apresentou primeira ação concreta de política pública (saúde ou educação) especificamente direcionada aos homens.',
        maxPoints: 2.5,
      },
      {
        id: 'd01-c4',
        label: 'Proposta 2 voltada ao público masculino',
        description: 'Apresentou segunda ação distinta e factível voltada ao público masculino, respeitando coerência e o limite de 15 linhas.',
        maxPoints: 2.5,
      },
    ],
    studyTips: `Escreva em **3 parágrafos curtos** (~4–5 linhas cada):
1. Contextualize o recrudescimento da sífilis congênita vinculando vulnerabilidade feminina (assimetria na negociação do preservativo) ao afastamento cultural dos homens da atenção primária e à reinfecção;
2. Apresente a **1ª proposta** focada em saúde (ex.: busca ativa e pré-natal do parceiro nas UBS com testagem rápida e tratamento concomitante);
3. Apresente a **2ª proposta** focada em educação (ex.: projetos escolares e campanhas públicas desconstruindo tabus masculinos sobre prevenção).`,
  },
  {
    id: 'enade-2017-d02',
    source: 'enade-2017',
    year: 2017,
    number: 2,
    component: 'FG',
    discipline: 'formacao-geral',
    subtopic: 'Direitos Humanos, Identidade de Gênero, Nome Social e Cidadania',
    difficulty: 'facil',
    maxLines: 15,
    context: `Os quatro depoimentos apresentados na prova retratam obstáculos enfrentados cotidianamente por pessoas transgêneras no Brasil em razão da recusa ao reconhecimento de seu nome escolhido:
- Exigência burocrática de laudos médicos e via judicial em vez do reconhecimento da autodeclaração;
- Apagamento da identidade mesmo após a morte no noticiário;
- Desinformação e receio de acusação infundada de falsidade ideológica ao utilizar o nome social no currículo;
- Constrangimentos em estabelecimentos comerciais que recusam utilizar o nome social ou questionam a validade do documento oficial.`,
    prompts: [
      {
        label: 'Parte 1:',
        text: 'Com base nesses relatos, discorra sobre a **importância do nome para as pessoas transgêneras**.',
        points: 5.0,
      },
      {
        label: 'Parte 2:',
        text: 'Proponha **uma medida, no âmbito das políticas públicas**, com o objetivo de facilitar o acesso dessas pessoas à cidadania.',
        points: 5.0,
      },
    ],
    officialAnswer: `**Padrão de Resposta Oficial do INEP:**

- **Importância do nome e acesso à cidadania:** O nome registrado nos documentos oficiais de identificação, quando não condiz com a identidade de gênero, compromete a dignidade e cria barreiras concretas ao exercício pleno da cidadania — afetando o **acesso à saúde e à educação, o direito ao voto, a inserção no mercado de trabalho** e a convivência social livre de constrangimentos.
- **Política pública (o estudante deve apresentar ao menos uma medida consistente, como):**
  - Desburocratizar a retificação de nome e gênero nos documentos oficiais, reconhecendo a autonomia e a autodeclaração da pessoa trans;
  - Criar e efetivar legislação que garanta a alteração registral e assegure direitos civis às pessoas transgêneras;
  - Ampliar o atendimento especializado no SUS, incluindo núcleos de assistência psicológica para pessoas trans e familiares;
  - Tornar obrigatório o uso do nome social em órgãos públicos, instituições de ensino e estabelecimentos comerciais (para clientes e empregados);
  - Promover campanhas públicas de conscientização contra o preconceito e ações educativas em escolas;
  - Desenvolver ações afirmativas de inclusão educacional e laboral e aplicar sanções legais a quem violar o direito à autodeterminação de gênero.`,
    rubricCriteria: [
      {
        id: 'd02-c1',
        label: 'Relação entre nome, identidade e dignidade',
        description: 'Explicou por que o reconhecimento do nome escolhido/social é elemento central da identidade e da autodeterminação de pessoas trans.',
        maxPoints: 2.5,
      },
      {
        id: 'd02-c2',
        label: 'Impacto no acesso à cidadania',
        description: 'Relacionou a divergência documental a barreiras reais (saúde, educação, mercado de trabalho, serviços e espaços públicos).',
        maxPoints: 2.5,
      },
      {
        id: 'd02-c3',
        label: 'Proposta concreta de política pública',
        description: 'Propôs medida factível no âmbito estatal/legal (ex.: desburocratização cartorial por autodeclaração, obrigatoriedade do nome social, campanhas ou ações afirmativas).',
        maxPoints: 3.5,
      },
      {
        id: 'd02-c4',
        label: 'Clareza, coesão e limite de 15 linhas',
        description: 'Texto objetivo, sem fuga ao tema e dentro do espaço máximo regulamentar.',
        maxPoints: 1.5,
      },
    ],
    studyTips: `Conecte **Nome = Reconhecimento de Identidade = Acesso à Cidadania** (saúde, escola, emprego, serviços) e detalhe **quem** executa a política pública (Estado/Ministérios/Cartórios), **o quê** faz (ex.: retificação administrativa sem laudo médico + obrigatoriedade do nome social) e **para quê** (eliminar constrangimentos e assegurar dignidade).`,
  },
  {
    id: 'enade-2017-d03',
    source: 'enade-2017',
    year: 2017,
    number: 3,
    component: 'CE',
    discipline: 'algoritmos-ed',
    subtopic: 'Programação em C (ANSI): Autômatos Celulares — Jogo da Vida de Conway',
    difficulty: 'medio',
    maxLines: 15,
    isCodeQuestion: true,
    context: `Autômatos celulares são sistemas dinâmicos discretos no espaço e no tempo caracterizados por interações locais em uma grade de células. No clássico **Jogo da Vida**, o estado de cada célula na próxima geração segue as quatro regras abaixo:

- qualquer célula **viva** com menos de dois vizinhos vivos morre de solidão;
- qualquer célula **viva** com mais de três vizinhos vivos morre de superpopulação;
- qualquer célula **viva** com dois ou três vizinhos vivos permanece viva;
- qualquer célula **morta** com exatamente três vizinhos vivos torna-se viva.

**Requisitos obrigatórios para a função em C (ANSI):**
- As células pertencem a uma matriz passada como parâmetro \`unsigned char **M\`, acompanhada das coordenadas inteiras \`int i, int j\` da célula alvo;
- Casos não cobertos pelas regras mantêm o estado atual;
- Valor \`1\` representa célula viva e \`0\` representa célula morta;
- Os vizinhos são as **8 células adjacentes** (4 ortogonais + 4 diagonais — vizinhança de Moore);
- **Não** é necessário testar os limites/bordas da matriz.`,
    prompts: [
      {
        label: 'Implementação em C (ANSI):',
        text: 'Escreva uma rotina em linguagem C (ANSI) que receba \`unsigned char **M, int i, int j\`, conte os vizinhos vivos e atualize o estado da célula \`M[i][j]\` conforme as regras do Jogo da Vida.',
        points: 10.0,
      },
    ],
    officialAnswer: `**Padrão de Resposta Oficial do INEP (com correção didática de bugs tipográficos presentes no gabarito impresso):**

A solução deve realizar duas etapas essenciais:
1. **Contagem dos 8 vizinhos vivos** em torno de \`(i, j)\`: posições \`(i-1,j-1)\`, \`(i-1,j)\`, \`(i-1,j+1)\`, \`(i,j-1)\`, \`(i,j+1)\`, \`(i+1,j-1)\`, \`(i+1,j)\` e \`(i+1,j+1)\`.
2. **Atualização do estado de \`M[i][j]\`** conforme a tabela-verdade:
   - Se \`qtd_viz_vivos < 2 || qtd_viz_vivos > 3\` → célula passa a \`0\` (morre ou continua morta);
   - Else if \`qtd_viz_vivos == 3\` → célula passa a \`1\` (nasce ou continua viva);
   - Caso contrário (\`qtd_viz_vivos == 2\`) → permanece inalterada!

**Solução 1 — Laço aninhado compacto (recomendada para caber com folga nas 15 linhas!):**
\`\`\`c
void jogo(unsigned char **M, int i, int j) {
    unsigned char qtd_viz_vivos = 0;
    int p, q;
    for (p = -1; p <= 1; p++)
        for (q = -1; q <= 1; q++)
            qtd_viz_vivos += M[i + p][j + q];
    qtd_viz_vivos -= M[i][j]; // subtrai a própria célula central

    if (qtd_viz_vivos < 2 || qtd_viz_vivos > 3)
        M[i][j] = 0;
    else if (qtd_viz_vivos == 3)
        M[i][j] = 1;
}
\`\`\`

**Solução 2 — Soma explícita das 8 posições vizinhas:**
\`\`\`c
void jogo(unsigned char **M, int i, int j) {
    unsigned char v = M[i-1][j-1] + M[i-1][j] + M[i-1][j+1]
                    + M[i][j-1]               + M[i][j+1]
                    + M[i+1][j-1] + M[i+1][j] + M[i+1][j+1];
    if (M[i][j] && (v < 2 || v > 3))
        M[i][j] = 0;
    else if (!M[i][j] && v == 3)
        M[i][j] = 1;
}
\`\`\`

> **Nota didática importante:** No PDF oficial de 2017, o primeiro exemplo impresso pela banca continha dois erros tipográficos (\`M[i][q]\` em vez de \`M[i][j]\` e falta de \`;\` em \`M[i][j]=1\`), e os exemplos 2 e 3 indexavam \`M[i][j]\` dentro do laço em vez de \`M[p][q]\`. Na sua prova, escreva sempre \`M[i+p][j+q]\` (com \`p, q\` de \`-1\` a \`1\`) ou \`M[p][q]\` (com \`p\` de \`i-1\` a \`i+1\`).`,
    officialAnswerImages: [
      {
        src: '/images/enade-2017/d03-tabela-atualizacao.png',
        alt: 'Tabela lógica oficial de transição de estados do Jogo da Vida',
        caption: 'Tabela de decisão apresentada no Padrão de Resposta Oficial do INEP (ENADE 2017 D03).',
      },
    ],
    rubricCriteria: [
      {
        id: 'd03-c1',
        label: 'Assinatura correta em C (ANSI)',
        description: 'Declarou corretamente os parâmetros (unsigned char **M, int i, int j) e inicializou a variável contadora.',
        maxPoints: 2.0,
      },
      {
        id: 'd03-c2',
        label: 'Contagem correta dos 8 vizinhos (excluindo a célula central)',
        description: 'Somou exatamente os 8 vizinhos ortogonais e diagonais sem contar indevidamente M[i][j].',
        maxPoints: 4.0,
      },
      {
        id: 'd03-c3',
        label: 'Regras de morte (solidão < 2 e superpopulação > 3)',
        description: 'Atualizou corretamente para 0 quando vizinhos < 2 ou > 3.',
        maxPoints: 2.0,
      },
      {
        id: 'd03-c4',
        label: 'Regras de nascimento (== 3) e permanência (== 2)',
        description: 'Atualizou para 1 com exatamente 3 vizinhos vivos e preservou o estado quando há 2 vizinhos.',
        maxPoints: 2.0,
      },
    ],
    studyTips: `Em questões de código C no ENADE, **menos linhas = menos chance de erro**! O truque da Solução 1 (somar o bloco $3 \\times 3$ de \`-1\` a \`+1\` e subtrair \`M[i][j]\`) ocupa apenas 11 linhas limpas e reduz drasticamente a lógica condicional: se \`v < 2 || v > 3\` vira \`0\`; se \`v == 3\` vira \`1\`; se \`v == 2\` nada muda!`,
  },
  {
    id: 'enade-2017-d04',
    source: 'enade-2017',
    year: 2017,
    number: 4,
    component: 'CE',
    discipline: 'arquitetura-embarcados',
    subtopic: 'Sistemas Embarcados: Microcontroladores, Sensor NTC, ADC de 12 bits e Memória I2C',
    difficulty: 'dificil',
    maxLines: 15,
    context: `Um coletor ambiental embarcado monitora **4 variáveis climáticas** (radiação solar, temperatura ambiente, pressão atmosférica e umidade) utilizando um microcontrolador de 32 bits dotado de RS-232, I2C, **ADC de 12 bits**, dois temporizadores, controlador de interrupção e RAM estática de 8 Kbytes. As 4 variáveis devem ser amostradas a cada **30 minutos** e cada dado armazenado com resolução de **16 bits** durante **um mês**.

Para medir a temperatura, empregou-se um termistor NTC (resistência variável $R$) ligado em um divisor de tensão com resistor fixo de $10\\text{ k}\\Omega$ alimentado por $V_{ref}$, gerando a tensão analógica $V_o \\in [0, V_{ref}]$ aplicada ao ADC:`,
    images: [
      {
        src: '/images/enade-2017/d04-termistor-circuito.png',
        alt: 'Termistores NTC, símbolos e circuito divisor de tensão de 10k com R ligado ao pino analógico Vo',
        caption: 'Circuito de interface entre o termistor NTC e o conversor A/D (ENADE 2017 D04).',
      },
    ],
    prompts: [
      {
        label: 'a)',
        text: 'Cite duas características que devem ser consideradas na escolha do microcontrolador.',
        points: 2.0,
      },
      {
        label: 'b)',
        text: 'Obtenha uma equação que relacione a resistência variável $R$ do termistor com o valor digital $x$ gerado pelo conversor analógico-digital.',
        points: 4.0,
      },
      {
        label: 'c)',
        text: 'Calcule o tamanho total dos dados a serem preservados, em **Kbits**, e indique o **tamanho mínimo comercial de memória I2C** necessário para armazená-los.',
        points: 4.0,
      },
    ],
    officialAnswer: `**Padrão de Resposta Oficial do INEP:**

**a) Características na escolha do microcontrolador (citar quaisquer duas):**
- **Desempenho da CPU:** velocidade (*clock*), arquitetura, tamanho da palavra (8/16/32 bits), repertório de instruções, nível de paralelismo;
- **Funcionalidades presentes:** unidades de memória (Flash/RAM/EEPROM), periféricos integrados (ADC, timers, RS-232, I2C), mecanismos de interrupção, interface com hardware;
- **Testabilidade:** suporte à depuração (*debug* JTAG/SWD);
- **Viabilidade:** custo/viabilidade econômico-financeira, operacional e de mercado;
- **Adequação ao ambiente:** tolerância à faixa de temperatura, umidade, radiação solar e pressão atmosférica (ou baixo consumo energético).

**b) Relação entre a resistência $R$ e o código digital $x$ do ADC (12 bits):**
1. Pelo divisor de tensão resistivo na entrada analógica:
   $$V_o = V_{ref}\\cdot \\frac{R}{R + 10\\text{ k}\\Omega}$$
2. Como o ADC de 12 bits mapeia linearmente $[0, V_{ref}]$ para $[0,\\; 2^{12}-1] = [0,\\; 4095]$:
   $$x = \\frac{V_o\\,(2^{12} - 1)}{V_{ref}} = \\frac{4095\\,V_o}{V_{ref}}$$
3. Substituindo $V_o$ (eliminando $V_{ref}$, característica ótima de medição raciométrica!):
   $$x = 4095\\,\\frac{R}{R + 10000} \\qquad \\text{ou isolando } R:\\quad R = \\frac{10000\\,x}{4095 - x}$$

**c) Dimensionamento em Kbits e memória I2C mínima:**
1. Em um mês máximo de **31 dias**, com **24 horas/dia**, **2 amostras/hora** (intervalos de 30 min), **4 variáveis** e **16 bits/dado**:
   $$\\text{Total} = 31 \\times 24 \\times 2 \\times 4 \\times 16 = 95\\,232\\text{ bits}$$
   Convertendo para Kbits binários ($1\\text{ Kbit} = 1024\\text{ bits}$):
   $$\\frac{95\\,232}{1024} = \\mathbf{93\\text{ Kbits}}$$
2. Como memórias EEPROM I2C comerciais seguem potências de 2 ($64, 128, 256\\dots$ Kbits) e devemos escolher capacidade $\\ge 93\\text{ Kbits}$, a memória mínima adequada é de **128 Kbits** (ex.: série 24LC128).`,
    rubricCriteria: [
      {
        id: 'd04-c1',
        label: 'Item (a): Duas características válidas de escolha do MCU',
        description: 'Citou corretamente dois critérios técnicos/econômicos/ambientais pertinentes (ex.: periféricos/ADC/I2C, clock, consumo, custo, faixa de temperatura).',
        maxPoints: 2.0,
      },
      {
        id: 'd04-c2',
        label: 'Item (b): Equação do divisor de tensão',
        description: 'Escreveu corretamente Vo = Vref · R / (R + 10k).',
        maxPoints: 2.0,
      },
      {
        id: 'd04-c3',
        label: 'Item (b): Conversão linear ADC 12 bits relacionando x e R',
        description: 'Aplicou (2^12 − 1) = 4095 e chegou a x = 4095 · R / (R + 10000) (ou R isolado em função de x).',
        maxPoints: 2.0,
      },
      {
        id: 'd04-c4',
        label: 'Item (c): Cálculo de 93 Kbits (95.232 bits / 1024)',
        description: 'Multiplicou corretamente 31 dias × 24 h × 2 amostras/h × 4 variáveis × 16 bits e dividiu por 1024.',
        maxPoints: 2.5,
      },
      {
        id: 'd04-c5',
        label: 'Item (c): Indicação da memória mínima de 128 Kbits',
        description: 'Selecionou a menor potência de 2 comercial ≥ 93 Kbits (128 Kbits).',
        maxPoints: 1.5,
      },
    ],
    studyTips: `Duas sacadas de ouro nesta questão: (1) use **31 dias** no pior caso de "um mês" (e note que $95232 / 1024 = 93$ exato — a banca escolheu os números de propósito para dar inteiro com 31 dias!); (2) sempre converta para a próxima potência de 2 comercial (**128 Kbits**) ao especificar memórias!`,
  },
  {
    id: 'enade-2017-d05',
    source: 'enade-2017',
    year: 2017,
    number: 5,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Gerência de Memória: Alocação Particionada Dinâmica (First-Fit, Best-Fit, Worst-Fit)',
    difficulty: 'facil',
    maxLines: 15,
    context: `Na gerência de memória por **alocação particionada dinâmica**, cada processo ocupa exatamente a quantidade de memória de que necessita dentro de uma área livre contígua.

Considere um sistema operacional cuja memória principal apresenta, na ordem abaixo, as seguintes 9 partições livres:
**10 KB, 4 KB, 20 KB, 19 KB, 27 KB, 9 KB, 12 KB, 13 KB e 15 KB**.

Um novo programa de **12 KB** precisa ser carregado na memória principal.`,
    prompts: [
      {
        label: 'a)',
        text: 'Indique em qual partição o programa de 12 KB será alocado usando as estratégias **first-fit**, **best-fit** e **worst-fit**, justificando cada escolha.',
        points: 6.0,
      },
      {
        label: 'b)',
        text: 'Indique qual dessas três estratégias produz **menor fragmentação** no cenário dado e descreva uma situação em que essa estratégia indicada **não** é a melhor opção para minimizar a fragmentação.',
        points: 4.0,
      },
    ],
    officialAnswer: `**Padrão de Resposta Oficial do INEP:**

**a) Alocação do programa de 12 KB (partições: 1ª=10K, 2ª=4K, 3ª=20K, 4ª=19K, 5ª=27K, 6ª=9K, 7ª=12K, 8ª=13K, 9ª=15K):**
- **First-fit → 3ª partição (20 KB):** Escolhe a **primeira** área livre em sequência que comporte o programa ($10 < 12$, $4 < 12$, $20 \\ge 12$), deixando sobra de 8 KB.
- **Best-fit → 7ª partição (12 KB):** Escolhe a partição livre suficiente que deixa a **menor sobra** (menor área residual após a alocação). Como há uma partição exata de 12 KB, a sobra é 0 KB!
- **Worst-fit → 5ª partição (27 KB):** Escolhe a **maior** área livre disponível para deixar a maior sobra possível (15 KB), na tentativa de que o espaço restante ainda seja útil para processos futuros.

**b) Menor fragmentação no cenário e ponto fraco do Best-Fit:**
- **Melhor estratégia neste cenário:** **Best-fit**, pois aloca o programa de 12 KB exatamente na 7ª partição (12 KB), resultando em **fragmentação zero** (nenhum espaço residual desperdiçado).
- **Quando o Best-fit NÃO é a melhor opção:** Quando a partição escolhida é apenas ligeiramente maior do que o programa (por exemplo, um programa de 12 KB alocado em uma partição de 13 KB, deixando apenas 1 KB livre). Ao longo de múltiplas alocações, o *best-fit* tende a acumular **inúmeros buracos minúsculos** espalhados pela memória, pequenos demais para atender processos futuros, agravando a **fragmentação externa** (além de exigir varredura completa da lista se não ordenada).`,
    rubricCriteria: [
      {
        id: 'd05-c1',
        label: 'Item (a): First-Fit = 3ª partição (20 KB) + justificativa',
        description: 'Identificou a primeira partição ≥ 12 KB (20 KB) explicando o critério.',
        maxPoints: 2.0,
      },
      {
        id: 'd05-c2',
        label: 'Item (a): Best-Fit = 7ª partição (12 KB) + justificativa',
        description: 'Identificou a partição que gera menor área livre restante (12 KB, sobra 0).',
        maxPoints: 2.0,
      },
      {
        id: 'd05-c3',
        label: 'Item (a): Worst-Fit = 5ª partição (27 KB) + justificativa',
        description: 'Identificou a maior partição livre (27 KB, sobra 15 KB) explicando o critério.',
        maxPoints: 2.0,
      },
      {
        id: 'd05-c4',
        label: 'Item (b): Indicação do Best-Fit como menor fragmentação',
        description: 'Indicou Best-Fit justificando o encaixe exato sem sobra no cenário apresentado.',
        maxPoints: 2.0,
      },
      {
        id: 'd05-c5',
        label: 'Item (b): Contraexemplo de falha do Best-Fit',
        description: 'Descreveu situação em que sobras minúsculas acumulam fragmentação externa inutilizável para alocações futuras.',
        maxPoints: 2.0,
      },
    ],
    studyTips: `Questão clássica e garantida de Sistemas Operacionais! Sempre informe **tanto a posição ordinal quanto o tamanho** ("3ª partição: 20 KB") para blindar sua resposta contra qualquer critério restritivo da banca.`,
  },
];
