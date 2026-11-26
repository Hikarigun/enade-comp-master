import type { ObjectiveQuestion } from '../../types/enade';

export const SIMULADO_INEDITO_2_PART_2: ObjectiveQuestion[] = [
  // =========================================================================
  // COMPONENTE ESPECÍFICO — PARTE 2 (Q20 a Q38)
  // =========================================================================
  {
    id: 'inedita-2-q20',
    source: 'inedita-2',
    year: 2026,
    number: 20,
    component: 'CE',
    discipline: 'sistemas-operacionais',
    subtopic: 'Virtualização (Hipervisores), Contêineres Linux e Modelos de Threads',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Na modernização da infraestrutura em nuvem de uma instituição financeira, arquitetos comparam três mecanismos de isolamento e concorrência: **máquinas virtuais (VMs)** gerenciadas por hipervisores, **contêineres** executados sobre Linux e **multithreading** em nível de usuário versus nível de núcleo (*kernel*).

Considerando os fundamentos de sistemas operacionais modernos, avalie as afirmações a seguir.

**I.** Enquanto um hipervisor Tipo 1 (*bare-metal*) executa diretamente sobre o hardware e cada máquina virtual convidada executa seu próprio *kernel* completo, contêineres Linux compartilham o *kernel* do sistema hospedeiro, combinando *namespaces* (para isolamento de visão de processos, rede e sistema de arquivos) e *cgroups* (para controle e limitação de CPU, memória e E/S).

**II.** No modelo de mapeamento de threads $N:1$ (*many-to-one*, em espaço de usuário), a alternância entre threads do mesmo processo é rápida por dispensar chamadas de sistema (*syscalls*), porém uma chamada bloqueante de E/S pode bloquear todas as demais threads do processo e não há execução paralela simultânea em múltiplos núcleos (*multicore*).

**III.** No modelo de mapeamento de threads $1:1$ (adotado por bibliotecas como POSIX \`pthreads\` no Linux), cada thread de usuário corresponde a uma thread escalonável pelo *kernel*, viabilizando paralelismo real em arquiteturas *multicore* e evitando que o bloqueio de uma thread paralise as demais do mesmo processo.

**IV.** Por utilizarem *namespaces* para virtualizar diretamente o conjunto de instruções da CPU, contêineres Linux permitem executar nativamente, sem qualquer camada de hipervisor ou virtualização de hardware, um sistema operacional convidado dotado de *kernel* Windows completo.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I, II e III.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'A',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** Hipervisores Tipo 1 (ex.: KVM/ESXi/Xen) operam sobre o hardware hospedando VMs com *kernels* independentes (maior isolamento, maior *overhead* de RAM e tempo de boot). Já contêineres (como Docker/containerd sobre Linux) são processos isolados que compartilham o mesmo *kernel* do host por meio de **namespaces** (isolamento de PID, NET, MNT, UTS, IPC, USER) e **cgroups** (limitação e contabilização de CPU, RAM e I/O).
- **Afirmação II (VERDADEIRA):** No modelo $N:1$ (*user-level threads*), o *kernel* enxerga apenas uma entidade escalonável por processo; por isso, trocas de contexto entre threads são muito leves (sem modo núcleo), mas qualquer chamada de sistema bloqueante trava todo o processo e apenas um núcleo de CPU pode ser usado por vez.
- **Afirmação III (VERDADEIRA):** No modelo $1:1$, o *kernel* escalona cada thread individualmente, permitindo paralelismo real em múltiplos núcleos e continuidade das demais threads quando uma bloqueia em E/S (ao custo de maior *overhead* de criação e troca de contexto via *kernel*).
- **Afirmação IV (FALSA):** *Namespaces* não virtualizam CPU nem permitem rodar um *kernel* de sistema operacional diferente. Como contêineres compartilham o *kernel* do hospedeiro, executar um *kernel* Windows em um host Linux exige uma máquina virtual (hipervisor com virtualização de hardware).

Logo, apenas **I, II e III** estão corretas (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Valida precisamente a arquitetura de VMs vs. contêineres (namespaces/cgroups) e os trade-offs dos modelos de threads N:1 e 1:1.',
      B: 'Incorreta. Inclui a afirmação IV (falsa) e omite II e III.',
      C: 'Incorreta. Inclui a afirmação IV (falsa) e omite I e III.',
      D: 'Incorreta. Inclui a afirmação IV (falsa) e omite II.',
      E: 'Incorreta. Inclui a afirmação IV (falsa) e omite I.',
    },
    keyConcept: 'Virtualização via hipervisor Tipo 1 vs. contêineres Linux (namespaces e cgroups) e modelos de threads 1:1 vs. N:1.',
  },
  {
    id: 'inedita-2-q21',
    source: 'inedita-2',
    year: 2026,
    number: 21,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Pilha TCP/IP: Resolução DNS, ARP, Tradução NAT/PAT e HTTP/3 (QUIC)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Considere uma estação de trabalho corporativa com endereço IPv4 privado \`192.168.10.25/24\` e gateway padrão \`192.168.10.1\`, situada atrás de um roteador de borda configurado com **NAT/PAT (NAPT)** no endereço público \`200.150.40.12\`. Com seus caches locais de DNS e ARP inicialmente vazios, o navegador do usuário solicita um recurso em \`https://api.exemplo.edu.br\`, cujo servidor autoritativo responde com o endereço IPv4 público \`198.51.100.80\` e suporta **HTTP/3 sobre QUIC**.`,
    command: 'A respeito da atuação coordenada dos protocolos DNS, ARP, NAT/PAT e HTTP/3 nesse acesso, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'Antes de encaminhar o primeiro pacote IP ao servidor remoto, a estação transmite uma requisição ARP em *broadcast* na rede local perguntando qual é o endereço MAC associado ao IP `198.51.100.80`.',
      },
      {
        letter: 'B',
        text: 'Ao atravessar o roteador de borda com NAT/PAT no sentido de saída, o campo de endereço IP de destino `198.51.100.80` é substituído pelo IP público `200.150.40.12` para viabilizar o roteamento na Internet.',
      },
      {
        letter: 'C',
        text: 'Após obter `198.51.100.80` via DNS, a estação usa ARP para descobrir o MAC do gateway `192.168.10.1`; o roteador NAT/PAT reescreve o IP e a porta de origem para `200.150.40.12` e uma porta mapeada; e o HTTP/3 sobre QUIC (UDP) multiplexa fluxos independentes sem bloqueio de cabeça de fila (*head-of-line blocking*) na camada de transporte.',
      },
      {
        letter: 'D',
        text: 'Como o HTTP/3 opera sobre UDP, ele abre mão de criptografia TLS e de controle de congestionamento, transferindo integralmente a recuperação de pacotes perdidos à camada de enlace Ethernet.',
      },
      {
        letter: 'E',
        text: 'O protocolo DNS atua na camada de enlace (Camada 2 do modelo OSI) para mapear nomes de domínio diretamente em endereços físicos MAC, dispensando o uso do protocolo ARP.',
      },
    ],
    correctOption: 'C',
    explanation: `Vamos rastrear cada camada da comunicação no modelo TCP/IP:

1. **DNS (Camada de Aplicação):** Resolve o nome \`api.exemplo.edu.br\` para o IPv4 \`198.51.100.80\`.
2. **ARP (entre Enlace e Rede):** Como \`198.51.100.80\` não pertence à sub-rede local \`192.168.10.0/24\`, o pacote deve ser entregue ao **próximo salto** (gateway padrão \`192.168.10.1\`). Assim, o quadro Ethernet leva o **MAC de destino do gateway \`192.168.10.1\`** (descoberto via ARP), enquanto o cabeçalho IP mantém o IP de destino \`198.51.100.80\`.
3. **NAT/PAT (NAPT na borda):** Ao sair para a Internet, o roteador substitui o **IP de origem privado** (\`192.168.10.25\`) e a **porta de origem efêmera** pelo IP público \`200.150.40.12\` e uma porta pública única registrada na tabela NAT, preservando o IP de destino \`198.51.100.80\`. No retorno, realiza a tradução reversa.
4. **HTTP/3 sobre QUIC:** O QUIC executa sobre **UDP**, incorporando nativamente criptografia **TLS 1.3**, confiabilidade e controle de congestionamento, e gerenciando múltiplos fluxos (*streams*) independentes na mesma conexão — de modo que a perda de um datagrama de um fluxo não bloqueia a entrega dos demais fluxos (eliminando o *head-of-line blocking* de transporte que existia no HTTP/2 sobre TCP).

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. ARP opera apenas dentro do domínio de broadcast da sub-rede local; para destinos remotos, a estação consulta via ARP o MAC do gateway padrão (192.168.10.1), nunca o do servidor remoto.',
      B: 'Incorreta. NAT/PAT de saída traduz o endereço IP e a porta de ORIGEM (não o IP de destino).',
      C: 'Correta. Descreve com rigor técnico o papel de DNS, ARP para o gateway, NAT/PAT de origem e a vantagem arquitetural do HTTP/3 sobre QUIC.',
      D: 'Incorreta. O protocolo QUIC integra obrigatoriamente TLS 1.3, retransmissão confiável por fluxo e controle de congestionamento sobre UDP.',
      E: 'Incorreta. DNS opera na camada de aplicação e mapeia nomes de domínio em endereços IP (e outros registros), não em endereços MAC.',
    },
    keyConcept: 'Fluxo integrado TCP/IP: DNS (aplicação), ARP para o próximo salto (gateway), tradução de origem em NAT/PAT e eliminação de HoL blocking de transporte no HTTP/3/QUIC.',
  },
  {
    id: 'inedita-2-q22',
    source: 'inedita-2',
    year: 2026,
    number: 22,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Atraso de Propagação, Atraso de Transmissão, RTT e Produto Banda-Atraso (BDP)',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Dois centros de processamento de dados são interligados por um enlace dedicado de fibra óptica ponto a ponto com as seguintes características físicas e de enlace:

- **Comprimento da fibra:** $D = 3\\,000\\text{ km}$;
- **Velocidade de propagação do sinal óptico na fibra:** $v = 2 \\times 10^8\\text{ m/s}$;
- **Taxa de transmissão do enlace:** $R = 100\\text{ Mbps}$ ($100 \\times 10^6\\text{ bits/s}$);
- **Tamanho de cada pacote de dados:** $L = 1\\,500\\text{ bytes}$.

Desprezando os atrasos de processamento nos nós, filas e o tempo de transmissão dos pacotes de confirmação (ACK), um engenheiro precisa dimensionar o buffer da janela de transmissão TCP para atingir $100\\%$ de utilização do canal.`,
    command: 'Quais são, respectivamente, o atraso de propagação unidirecional ($d_{\\text{prop}}$), o atraso de transmissão de um pacote ($d_{\\text{trans}}$) e o tamanho mínimo da janela de dados em voo ($\\text{BDP} = R \\times \\text{RTT}$) necessário para saturar completamente esse enlace?',
    options: [
      { letter: 'A', text: '$d_{\\text{prop}} = 15\\text{ ms}$; $d_{\\text{trans}} = 1,2\\text{ ms}$; janela mínima $= 187\\,500\\text{ bytes}$.' },
      { letter: 'B', text: '$d_{\\text{prop}} = 30\\text{ ms}$; $d_{\\text{trans}} = 0,12\\text{ ms}$; janela mínima $= 375\\,000\\text{ bytes}$.' },
      { letter: 'C', text: '$d_{\\text{prop}} = 15\\text{ ms}$; $d_{\\text{trans}} = 0,015\\text{ ms}$; janela mínima $= 3\\,000\\,000\\text{ bytes}$.' },
      { letter: 'D', text: '$d_{\\text{prop}} = 10\\text{ ms}$; $d_{\\text{trans}} = 0,12\\text{ ms}$; janela mínima $= 250\\,000\\text{ bytes}$.' },
      { letter: 'E', text: '$d_{\\text{prop}} = 15\\text{ ms}$; $d_{\\text{trans}} = 0,12\\text{ ms}$; janela mínima $= 375\\,000\\text{ bytes}$.' },
    ],
    correctOption: 'E',
    explanation: `Vamos efetuar cada cálculo com rigor nas unidades (bits vs. bytes, metros vs. quilômetros):

### 1. Atraso de Propagação Unidirecional ($d_{\\text{prop}}$)
$$d_{\\text{prop}} = \\frac{D}{v} = \\frac{3\\,000 \\times 10^3\\text{ m}}{2 \\times 10^8\\text{ m/s}} = \\frac{3 \\times 10^6}{2 \\times 10^8} = 0,015\\text{ s} = \\mathbf{15\\text{ ms}}$$

Logo, o tempo de ida e volta de propagação é:
$$\\text{RTT} = 2 \\cdot d_{\\text{prop}} = 2 \\times 15\\text{ ms} = \\mathbf{30\\text{ ms}} = 0,030\\text{ s}$$

### 2. Atraso de Transmissão de um Pacote ($d_{\\text{trans}}$)
Convertendo $L = 1\\,500\\text{ bytes}$ para bits:
$$L = 1\\,500 \\times 8 = 12\\,000\\text{ bits}$$
$$d_{\\text{trans}} = \\frac{L}{R} = \\frac{12\\,000\\text{ bits}}{100 \\times 10^6\\text{ bits/s}} = 1,2 \\times 10^{-4}\\text{ s} = \\mathbf{0,12\\text{ ms}} \\; (120\\ \\mu\\text{s})$$

### 3. Produto Banda-Atraso ($\\text{BDP} = R \\times \\text{RTT}$)
Para manter o transmissor enviando continuamente sem esperar pela chegada dos ACKs, a quantidade de dados em voo deve preencher todo o intervalo de um RTT:
$$\\text{BDP}_{\\text{bits}} = R \\times \\text{RTT} = (100 \\times 10^6\\text{ bits/s}) \\times 0,030\\text{ s} = 3\\,000\\,000\\text{ bits}$$
Convertendo para bytes (dividindo por $8$):
$$\\text{BDP}_{\\text{bytes}} = \\frac{3\\,000\\,000}{8} = \\mathbf{375\\,000\\text{ bytes}} \\quad (\\text{equivalente a } 250\\text{ pacotes de } 1\\,500\\text{ B})$$

*(Nota prática: como $375\\,000\\text{ B} > 65\\,535\\text{ B}$, seria obrigatório habilitar a opção TCP Window Scale da RFC 7323 para atingir vazão plena nesse enlace!)*

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Erra o atraso de transmissão por um fator de 10 (1,2 ms em vez de 0,12 ms) e calcula o BDP usando apenas d_prop em vez de RTT = 2·d_prop.',
      B: 'Incorreta. Confunde d_prop unidirecional (15 ms) com o RTT completo (30 ms).',
      C: 'Incorreta. Confunde bits com bytes no BDP (3 000 000 são bits, não bytes) e erra d_trans.',
      D: 'Incorreta. Utiliza a velocidade da luz no vácuo (3 × 10^8 m/s) em vez da velocidade fornecida na fibra (2 × 10^8 m/s).',
      E: 'Correta. Todos os três valores (15 ms, 0,12 ms e 375 000 bytes) estão rigorosamente exatos.',
    },
    keyConcept: 'Cálculo de atraso de propagação (D/v), atraso de transmissão (L/R), RTT e Produto Banda-Atraso (BDP = R × RTT) para dimensionamento de janela TCP.',
  },
  {
    id: 'inedita-2-q23',
    source: 'inedita-2',
    year: 2026,
    number: 23,
    component: 'CE',
    discipline: 'redes-seguranca',
    subtopic: 'Segurança de Redes: TLS 1.3, Assinatura Digital, Certificados X.509 e Forward Secrecy',
    questionStyle: 'afirmativas',
    difficulty: 'medio',
    context: `Na implantação de uma API bancária exposta na Internet, o arquiteto de segurança adota **TLS 1.3**, certificados digitais no padrão **X.509** emitidos por uma Autoridade Certificadora (AC) confiável e **assinatura digital** sobre os comprovantes eletrônicos das transações.

Acerca dos mecanismos criptográficos e das garantias de segurança envolvidos, avalie as afirmações a seguir.

**I.** Na geração de uma assinatura digital, o emissor aplica uma função *hash* criptográfica (como SHA-256) à mensagem e assina o resumo obtido com sua **chave privada**; a verificação pelo destinatário, com a **chave pública** do emissor certificada por uma AC, provê integridade, autenticidade e não repúdio.

**II.** No TLS 1.3, emprega-se criptografia assimétrica durante o *handshake* para autenticação e acordo de chaves de sessão, migrando em seguida para cifras simétricas autenticadas (AEAD, como AES-GCM ou ChaCha20-Poly1305) para proteger o volume de dados com maior eficiência computacional.

**III.** Assinar digitalmente um documento em texto claro é suficiente para assegurar a confidencialidade (sigilo) de seu conteúdo contra interceptadores passivos na rede, dispensando a cifragem dos dados.

**IV.** O uso obrigatório de troca de chaves efêmera (como ECDHE) no TLS 1.3 assegura *Perfect Forward Secrecy* (Sigilo Perfeito de Encaminhamento): mesmo que a chave privada de longo prazo do certificado do servidor venha a ser comprometida no futuro, sessões cifradas gravadas anteriormente permanecem protegidas.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e III.' },
      { letter: 'B', text: 'I, II e IV.' },
      { letter: 'C', text: 'II e III.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'B',
    explanation: `Analisando rigorosamente cada afirmação:

- **Afirmação I (VERDADEIRA):** A assinatura digital combina função *hash* resistente a colisões + assinatura com a **chave privada** do signatário. Como apenas o detentor da chave privada pode gerar uma assinatura válida verificável pela sua chave pública (atestada pelo certificado X.509), garantem-se **autenticidade**, **integridade** e **não repúdio** (irretratabilidade).
- **Afirmação II (VERDADEIRA):** O TLS 1.3 emprega esquema híbrido: criptografia assimétrica no *handshake* (autenticação via certificado + acordo de chaves ECDHE em 1-RTT) e cifras simétricas **AEAD** (*Authenticated Encryption with Associated Data*, como AES-GCM e ChaCha20-Poly1305) no plano de dados, conciliando segurança forte e baixa latência/CPU.
- **Afirmação III (FALSA):** Assinatura digital **não garante confidencialidade**! A mensagem trafega legível (a menos que também seja cifrada), pois qualquer pessoa munida da chave pública do emissor pode conferir a assinatura. Confidencialidade exige cifragem com chave simétrica compartilhada ou com a chave pública do *destinatário*.
- **Afirmação IV (VERDADEIRA):** O TLS 1.3 removeu a troca estática de chaves RSA justamente para impor **Forward Secrecy** via ECDHE/DHE efêmero: cada sessão deriva chaves temporárias descartadas ao fim da conexão, impedindo a decifragem retroativa mesmo em caso de vazamento futuro da chave privada do certificado do servidor.

Portanto, estão corretas apenas **I, II e IV** (alternativa **B**).`,
    optionAnalysis: {
      A: 'Incorreta. A afirmação III é falsa (assinatura digital não garante confidencialidade) e omite II e IV.',
      B: 'Correta. Reúne exatamente as três afirmações verdadeiras (I, II e IV) e descarta a III.',
      C: 'Incorreta. Inclui III (falsa) e omite I e IV.',
      D: 'Incorreta. Inclui III (falsa) e omite II.',
      E: 'Incorreta. Inclui III (falsa) e omite I.',
    },
    keyConcept: 'Propriedades criptográficas: assinatura digital (integridade, autenticidade e não repúdio — não confidencialidade) e TLS 1.3 (AEAD + ECDHE com Forward Secrecy).',
  },
  {
    id: 'inedita-2-q24',
    source: 'inedita-2',
    year: 2026,
    number: 24,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Circuitos RC em Regime Transitório (Carga de Capacitor)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Um circuito de atraso de inicialização (*Power-On Reset*) para um microcontrolador industrial é formado por uma fonte de tensão contínua ideal $V_s = 12\\text{ V}$, um resistor $R = 20\\text{ k}\\Omega$ e um capacitor $C = 50\\ \\mu\\text{F}$ inicialmente descarregado ($v_C(0^-) = 0\\text{ V}$), conectados em série por meio de uma chave que se fecha no instante $t = 0$.

Considere a aproximação $e^{-1} \\approx 0,37$.`,
    command: 'Para esse circuito RC série, quais são, respectivamente, a constante de tempo $\\tau$, a tensão no capacitor $v_C(t)$ no instante $t = 1,0\\text{ s}$ e a corrente elétrica $i(t)$ no resistor nesse mesmo instante $t = 1,0\\text{ s}$?',
    options: [
      { letter: 'A', text: '$\\tau = 0,1\\text{ s}$; $v_C(1,0\\text{ s}) \\approx 12,00\\text{ V}$; $i(1,0\\text{ s}) \\approx 0,00\\text{ mA}$.' },
      { letter: 'B', text: '$\\tau = 1,0\\text{ s}$; $v_C(1,0\\text{ s}) \\approx 4,44\\text{ V}$; $i(1,0\\text{ s}) \\approx 0,378\\text{ mA}$.' },
      { letter: 'C', text: '$\\tau = 1,0\\text{ s}$; $v_C(1,0\\text{ s}) \\approx 7,56\\text{ V}$; $i(1,0\\text{ s}) \\approx 0,600\\text{ mA}$.' },
      { letter: 'D', text: '$\\tau = 1,0\\text{ s}$; $v_C(1,0\\text{ s}) \\approx 7,56\\text{ V}$; $i(1,0\\text{ s}) \\approx 0,222\\text{ mA}$.' },
      { letter: 'E', text: '$\\tau = 10,0\\text{ s}$; $v_C(1,0\\text{ s}) \\approx 7,56\\text{ V}$; $i(1,0\\text{ s}) \\approx 0,222\\text{ mA}$.' },
    ],
    correctOption: 'D',
    explanation: `Vamos aplicar as equações do regime transitório de um circuito RC série inicialmente descarregado:

### 1. Constante de Tempo ($\\tau$)
$$\\tau = R \\cdot C = (20 \\times 10^3\\ \\Omega) \\cdot (50 \\times 10^{-6}\\text{ F}) = 1\\,000 \\times 10^{-3}\\text{ s} = \\mathbf{1,0\\text{ s}}$$

### 2. Tensão no Capacitor em $t = 1,0\\text{ s} = \\tau$
$$v_C(t) = V_s\\left(1 - e^{-t/\\tau}\\right)$$
$$v_C(1,0) = 12\\left(1 - e^{-1}\\right) \\approx 12 \\times (1 - 0,37) = 12 \\times 0,63 = \\mathbf{7,56\\text{ V}}$$

### 3. Corrente Elétrica no Circuito em $t = 1,0\\text{ s} = \\tau$
A corrente inicial em $t = 0^+$ (capacitor comporta-se inicialmente como curto-circuito) é:
$$i(0^+) = \\frac{V_s}{R} = \\frac{12\\text{ V}}{20\\text{ k}\\Omega} = 0,600\\text{ mA}$$
Em $t = 1,0\\text{ s} = \\tau$:
$$i(t) = \\frac{V_s}{R}\\,e^{-t/\\tau} \\implies i(1,0) = 0,600\\text{ mA} \\times e^{-1} \\approx 0,600 \\times 0,37 = \\mathbf{0,222\\text{ mA}}$$

*Verificação pela Lei de Kirchhoff das Tensões (LKT):*
$$v_R(1,0) = V_s - v_C(1,0) = 12 - 7,56 = 4,44\\text{ V} \\implies i(1,0) = \\frac{4,44\\text{ V}}{20\\text{ k}\\Omega} = \\mathbf{0,222\\text{ mA}}$$

Portanto, a alternativa correta é **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Erro de potência de 10 no produto R·C (10³ × 10⁻⁶ = 10⁻³, e 20 × 50 = 1 000, resultando em 1,0 s e não 0,1 s).',
      B: 'Incorreta. Inverte a expressão de carga com a de descarga, atribuindo 12 × 0,37 = 4,44 V ao capacitor (que na verdade é a tensão no resistor!).',
      C: 'Incorreta. Informa a corrente inicial i(0+) = 0,600 mA em vez da corrente decaída em t = 1,0 s.',
      D: 'Correta. Constante de tempo 1,0 s, tensão no capacitor 7,56 V (63% de 12 V) e corrente 0,222 mA (37% de 0,6 mA).',
      E: 'Incorreta. Erro de ordem de grandeza em τ (10,0 s em vez de 1,0 s).',
    },
    keyConcept: 'Transitório de circuito RC série: constante de tempo τ = RC, curva exponencial de carga v_C(t) = V_s(1 - e^(-t/τ)) e decaimento da corrente i(t) = (V_s/R)e^(-t/τ).',
  },
  {
    id: 'inedita-2-q25',
    source: 'inedita-2',
    year: 2026,
    number: 25,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Potência em Corrente Alternada (CA), Triângulo de Potências e Correção do Fator de Potência',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um conjunto de equipamentos de climatização e fontes de alimentação de uma sala de servidores opera em uma rede elétrica monofásica senoidal de tensão eficaz $V_{\\text{rms}} = 200\\text{ V}$, absorvendo potência ativa constante $P = 24\\text{ kW}$ com **fator de potência indutivo (atrasado)** $\\text{FP}_1 = \\cos\\phi_1 = 0,6$.

Para evitar multas da concessionária por baixo fator de potência e aliviar a corrente nos cabos alimentadores, o engenheiro elétrico-computacional instala um banco de capacitores em paralelo com a carga, elevando o fator de potência do conjunto para $\\text{FP}_2 = \\cos\\phi_2 = 0,8$ (ainda indutivo), mantendo $V_{\\text{rms}} = 200\\text{ V}$ e $P = 24\\text{ kW}$ inalterados.`,
    command: 'Quais são, respectivamente, a corrente eficaz inicial $I_{\\text{rms},1}$ antes da correção, a potência reativa capacitiva $Q_C$ que o banco de capacitores deve fornecer e a nova corrente eficaz $I_{\\text{rms},2}$ após a correção?',
    options: [
      { letter: 'A', text: '$I_{\\text{rms},1} = 200\\text{ A}$; $Q_C = 14\\text{ kvar}$; $I_{\\text{rms},2} = 150\\text{ A}$.' },
      { letter: 'B', text: '$I_{\\text{rms},1} = 120\\text{ A}$; $Q_C = 14\\text{ kvar}$; $I_{\\text{rms},2} = 150\\text{ A}$.' },
      { letter: 'C', text: '$I_{\\text{rms},1} = 200\\text{ A}$; $Q_C = 18\\text{ kvar}$; $I_{\\text{rms},2} = 150\\text{ A}$.' },
      { letter: 'D', text: '$I_{\\text{rms},1} = 200\\text{ A}$; $Q_C = 32\\text{ kvar}$; $I_{\\text{rms},2} = 120\\text{ A}$.' },
      { letter: 'E', text: '$I_{\\text{rms},1} = 160\\text{ A}$; $Q_C = 10\\text{ kvar}$; $I_{\\text{rms},2} = 120\\text{ A}$.' },
    ],
    correctOption: 'A',
    explanation: `Utilizando o **Triângulo de Potências** ($S^2 = P^2 + Q^2$, $P = S\\cos\\phi$, $Q = P\\tan\\phi$):

### 1. Condição Inicial ($\\cos\\phi_1 = 0,6$ indutivo)
- **Potência aparente inicial:**
  $$S_1 = \\frac{P}{\\cos\\phi_1} = \\frac{24\\text{ kW}}{0,6} = 40\\text{ kVA}$$
- **Corrente eficaz inicial:**
  $$I_{\\text{rms},1} = \\frac{S_1}{V_{\\text{rms}}} = \\frac{40\\,000\\text{ VA}}{200\\text{ V}} = \\mathbf{200\\text{ A}}$$
- **Potência reativa indutiva inicial:** como $\\cos\\phi_1 = 0,6 \\Rightarrow \\sin\\phi_1 = 0,8$ e $\\tan\\phi_1 = \\frac{0,8}{0,6} = \\frac{4}{3}$:
  $$Q_1 = \\sqrt{S_1^2 - P^2} = \\sqrt{40^2 - 24^2} = \\sqrt{1\\,024} = 32\\text{ kvar}$$

### 2. Condição Corrigida ($\\cos\\phi_2 = 0,8$ indutivo, $P = 24\\text{ kW}$)
- **Nova potência aparente:**
  $$S_2 = \\frac{P}{\\cos\\phi_2} = \\frac{24\\text{ kW}}{0,8} = 30\\text{ kVA}$$
- **Nova corrente eficaz na linha:**
  $$I_{\\text{rms},2} = \\frac{S_2}{V_{\\text{rms}}} = \\frac{30\\,000\\text{ VA}}{200\\text{ V}} = \\mathbf{150\\text{ A}}$$
  *(Note a redução de $25\\%$ na corrente, diminuindo perdas Ôhmicas $R I^2$ nos cabos em quase $44\\%$!)*
- **Nova potência reativa líquida:** como $\\cos\\phi_2 = 0,8 \\Rightarrow \\sin\\phi_2 = 0,6$ e $\\tan\\phi_2 = \\frac{0,6}{0,8} = 0,75$:
  $$Q_2 = P \\cdot \\tan\\phi_2 = 24 \\times 0,75 = 18\\text{ kvar}$$

### 3. Potência Reativa Capacitiva Necessária ($Q_C$)
O capacitor compensa a diferença entre $Q_1$ e $Q_2$:
$$Q_C = Q_1 - Q_2 = 32 - 18 = \\mathbf{14\\text{ kvar}}$$

Portanto, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Todos os três valores (200 A, 14 kvar e 150 A) decorrem exatamente do triângulo de potências 3-4-5.',
      B: 'Incorreta. Calcula I_rms,1 usando P/V = 24 000/200 = 120 A, esquecendo de dividir pelo fator de potência 0,6.',
      C: 'Incorreta. Confunde a potência reativa final Q2 (18 kvar) com a potência reativa capacitiva compensada Q_C = Q1 - Q2 (14 kvar).',
      D: 'Incorreta. Calcula Q_C = 32 kvar e I_rms,2 = 120 A, que corresponderiam à correção para fator de potência unitário (FP = 1,0), e não 0,8.',
      E: 'Incorreta. Erra todas as relações trigonométricas do triângulo de potências.',
    },
    keyConcept: 'Triângulo de potências em CA (S = V·I, P = S·cos φ, Q = P·tan φ) e correção do fator de potência com capacitores (Q_C = Q_1 - Q_2).',
  },
  {
    id: 'inedita-2-q26',
    source: 'inedita-2',
    year: 2026,
    number: 26,
    component: 'CE',
    discipline: 'circuitos-eletronica',
    subtopic: 'Eletrônica Analógica: Regulador de Tensão com Diodo Zener',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Para alimentar um módulo sensor analógico a partir de um barramento CC de $V_{\\text{in}} = 12,0\\text{ V}$, um projetista montou um circuito regulador de tensão composto por:

- Um resistor limitador em série $R_s = 100\\ \\Omega$ conectado entre $V_{\\text{in}}$ e o nó de saída $V_{\\text{out}}$;
- Um **diodo Zener ideal** (resistência dinâmica $r_z = 0\\ \\Omega$, tensão de ruptura $V_Z = 5,0\\text{ V}$ e potência máxima admissível $P_{Z,\\max} = 0,50\\text{ W}$) polarizado reversamente entre $V_{\\text{out}}$ e o terra;
- Um resistor de carga $R_L = 250\\ \\Omega$ conectado em paralelo com o diodo Zener (entre $V_{\\text{out}}$ e o terra).`,
    command: 'Para esse circuito em operação nominal com $R_L = 250\\ \\Omega$, quais são, respectivamente, a corrente $I_Z$ que circula pelo diodo Zener, a potência $P_Z$ dissipada no diodo Zener e o que ocorre caso a carga $R_L$ seja desconectada (circuito aberto)?',
    options: [
      {
        letter: 'A',
        text: '$I_Z = 70\\text{ mA}$; $P_Z = 0,35\\text{ W}$; com $R_L$ aberta, o Zener queima pois dissiparia $0,60\\text{ W}$.',
      },
      {
        letter: 'B',
        text: '$I_Z = 0\\text{ mA}$ (Zener cortado); $P_Z = 0\\text{ W}$; a tensão de saída cai para $3,43\\text{ V}$.',
      },
      {
        letter: 'C',
        text: '$I_Z = 50\\text{ mA}$; $P_Z = 0,25\\text{ W}$; com $R_L$ aberta, a corrente no Zener sobe para $70\\text{ mA}$ e sua dissipação vai a $0,35\\text{ W}$, permanecendo dentro do limite seguro de $0,50\\text{ W}$.',
      },
      {
        letter: 'D',
        text: '$I_Z = 20\\text{ mA}$; $P_Z = 0,10\\text{ W}$; com $R_L$ aberta, a corrente no Zener reduz-se a zero.',
      },
      {
        letter: 'E',
        text: '$I_Z = 50\\text{ mA}$; $P_Z = 0,60\\text{ W}$; o diodo já opera acima da potência máxima mesmo com a carga conectada.',
      },
    ],
    correctOption: 'C',
    explanation: `Vamos analisar o circuito regulador Zener em quatro passos:

### 1. Verificação do Estado do Diodo Zener (Corte vs. Regulação)
Removendo mentalmente o diodo Zener, a tensão de circuito aberto (Thévenin) sobre a carga $R_L$ seria:
$$V_{\\text{Th}} = V_{\\text{in}} \\cdot \\frac{R_L}{R_s + R_L} = 12,0 \\cdot \\frac{250}{100 + 250} = \\frac{60}{7} \\approx 8,57\\text{ V}$$
Como $V_{\\text{Th}} \\approx 8,57\\text{ V} > V_Z = 5,0\\text{ V}$, o diodo Zener **está polarizado na região de ruptura (regulação)** e fixa a saída em $V_{\\text{out}} = V_Z = 5,0\\text{ V}$.

### 2. Correntes no Circuito ($R_L = 250\\ \\Omega$)
- **Corrente no resistor série $R_s$:**
  $$I_s = \\frac{V_{\\text{in}} - V_Z}{R_s} = \\frac{12,0 - 5,0}{100} = 0,070\\text{ A} = 70\\text{ mA}$$
- **Corrente na carga $R_L$:**
  $$I_L = \\frac{V_Z}{R_L} = \\frac{5,0}{250} = 0,020\\text{ A} = 20\\text{ mA}$$
- **Corrente no diodo Zener (LKC no nó $V_{\\text{out}}$):**
  $$I_Z = I_s - I_L = 70\\text{ mA} - 20\\text{ mA} = \\mathbf{50\\text{ mA}}$$

### 3. Potência Dissipada no Zener em Operação Nominal
$$P_Z = V_Z \\cdot I_Z = 5,0\\text{ V} \\times 0,050\\text{ A} = \\mathbf{0,25\\text{ W}}$$

### 4. Pior Caso Térmico: Carga Desconectada ($R_L \\to \\infty$, $I_L = 0$)
Sem carga, toda a corrente $I_s = 70\\text{ mA}$ passa integralmente pelo diodo Zener:
$$P_{Z,\\text{vazio}} = V_Z \\cdot I_s = 5,0\\text{ V} \\times 0,070\\text{ A} = \\mathbf{0,35\\text{ W}} < P_{Z,\\max} = 0,50\\text{ W}$$
Portanto, o regulador opera com folga térmica mesmo sem carga conectada.

Logo, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Esquece de subtrair a corrente da carga I_L = 20 mA em operação nominal e erra a dissipação sem carga (0,35 W, não 0,60 W).',
      B: 'Incorreta. Erra o divisor de tensão de Thévenin (usou R_s/(R_s+R_L) em vez de R_L/(R_s+R_L)), concluindo falsamente que o Zener estaria cortado.',
      C: 'Correta. Todos os cálculos (I_Z = 50 mA, P_Z = 0,25 W e condição a vazio 70 mA / 0,35 W < 0,50 W) são exatos.',
      D: 'Incorreta. Troca I_Z (50 mA) por I_L (20 mA) e inverte o comportamento sem carga (a corrente no Zener aumenta, não zera).',
      E: 'Incorreta. Multiplica I_Z por V_in (12 V) em vez de V_Z (5 V) ao calcular a potência no diodo.',
    },
    keyConcept: 'Análise de circuito regulador Zener: teste de Thévenin para ruptura, LKC (I_Z = I_s - I_L) e verificação de dissipação máxima a vazio.',
  },
  {
    id: 'inedita-2-q27',
    source: 'inedita-2',
    year: 2026,
    number: 27,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Processamento Digital de Sinais: Filtros FIR vs. IIR, Transformada Z e Estabilidade BIBO',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Em um firmware de condicionamento de sinais biomédicos, dois filtros digitais causais lineares e invariantes no tempo (SLIT), com condições iniciais nulas, são definidos pelas seguintes equações a diferenças:

- **Filtro 1:** $\\quad y_1[n] = 0,5\\,x[n] + 0,5\\,x[n-1]$
- **Filtro 2:** $\\quad y_2[n] = x[n] + 0,8\\,y_2[n-1]$

A equipe precisa avaliar as funções de transferência no domínio $Z$, a natureza da resposta ao impulso (FIR vs. IIR), a estabilidade BIBO (*Bounded-Input, Bounded-Output*) e o comportamento em frequência de ambos os sistemas.`,
    command: 'Com base na análise no domínio $Z$ dos Filtros 1 e 2, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'O Filtro 1 é do tipo IIR com polo em $z = -1$, enquanto o Filtro 2 é do tipo FIR com resposta ao impulso de duração de 2 amostras.',
      },
      {
        letter: 'B',
        text: 'O Filtro 2 possui função de transferência $H_2(z) = \\dfrac{z}{z + 0,8}$ e é instável no sentido BIBO porque seu polo está localizado no semiplano esquerdo.',
      },
      {
        letter: 'C',
        text: 'O Filtro 1 tem função de transferência $H_1(z) = \\dfrac{0,5(z + 1)}{z}$ e atua como filtro passa-altas, anulando completamente sinais constantes (frequência $\\omega = 0$).',
      },
      {
        letter: 'D',
        text: 'Ambos os filtros são instáveis no sentido BIBO, pois possuem polos não nulos dentro do círculo unitário $|z| < 1$.',
      },
      {
        letter: 'E',
        text: 'O Filtro 1 é FIR passa-baixas de fase linear com $H_1(z) = 0,5(1 + z^{-1})$ e zero em $z = -1$, enquanto o Filtro 2 é IIR causal BIBO-estável com $H_2(z) = \\dfrac{1}{1 - 0,8\\,z^{-1}}$ e polo real em $z = 0,8$ (no interior do círculo unitário).',
      },
    ],
    correctOption: 'E',
    explanation: `Aplicando a Transformada Z unilateral (com condições iniciais nulas, lembrando que $\\mathcal{Z}\\{u[n-1]\\} = z^{-1}U(z)$):

### 1. Análise do Filtro 1: $y_1[n] = 0,5\\,x[n] + 0,5\\,x[n-1]$
- **Função de Transferência:**
  $$H_1(z) = \\frac{Y_1(z)}{X(z)} = 0,5 + 0,5\\,z^{-1} = 0,5(1 + z^{-1}) = \\frac{0,5(z + 1)}{z}$$
- **Classificação:** Não possui realimentação de saídas anteriores $\\Rightarrow$ resposta ao impulso finita $h_1[n] = 0,5\\,\\delta[n] + 0,5\\,\\delta[n-1]$ (**Filtro FIR**). Por ser causal e FIR, é **sempre BIBO-estável** (polo apenas na origem $z = 0$).
- **Fase linear:** Como os coeficientes são simétricos ($h_1[0] = h_1[1] = 0,5$), possui **fase linear exata**.
- **Resposta em frequência ($z = e^{j\\omega}$):**
  - Em DC ($\\omega = 0 \\Rightarrow z = 1$): $|H_1(e^{j0})| = 0,5(1 + 1) = 1$.
  - Em Nyquist ($\\omega = \\pi \\Rightarrow z = -1$): $|H_1(e^{j\\pi})| = 0,5(1 - 1) = 0$ (zero em $z = -1$).
  - Portanto, é um **filtro passa-baixas** (média móvel de 2 pontos).

### 2. Análise do Filtro 2: $y_2[n] = x[n] + 0,8\\,y_2[n-1]$
- **Função de Transferência:**
  $$Y_2(z)(1 - 0,8\\,z^{-1}) = X(z) \\implies H_2(z) = \\frac{1}{1 - 0,8\\,z^{-1}} = \\frac{z}{z - 0,8}$$
- **Classificação:** Possui realimentação recursiva $\\Rightarrow$ resposta ao impulso infinita $h_2[n] = (0,8)^n u[n]$ (**Filtro IIR**).
- **Estabilidade BIBO (sistema causal no plano Z):** Um SLIT discreto causal é BIBO-estável se, e somente se, **todos os polos estiverem estritamente dentro do círculo unitário** ($|p_i| < 1$). Aqui, o único polo é $p = 0,8$, com $|0,8| < 1 \\Rightarrow$ **BIBO-estável**.

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Inverte completamente as definições de FIR e IIR e troca zero por polo no Filtro 1.',
      B: 'Incorreta. Erra o sinal do polo (é z = +0,8, não -0,8) e confunde o critério de estabilidade do plano S (semiplano esquerdo) com o plano Z (círculo unitário |z| < 1).',
      C: 'Incorreta. O zero em z = -1 anula a frequência mais alta (ω = π, passa-baixas), e não DC (ω = 0).',
      D: 'Incorreta. Polos dentro do círculo unitário (|z| < 1) garantem estabilidade em sistemas causais discretos, e não instabilidade.',
      E: 'Correta. Caracteriza com precisão matemática H1(z), H2(z), FIR vs. IIR, fase linear, zero em z = -1 e estabilidade BIBO pelo polo em z = 0,8.',
    },
    keyConcept: 'Filtros digitais FIR (fase linear, sempre estável) vs. IIR (recursivo, estável se todos os polos satisfazem |p| < 1 no plano Z).',
  },
  {
    id: 'inedita-2-q28',
    source: 'inedita-2',
    year: 2026,
    number: 28,
    component: 'CE',
    discipline: 'sinais-controle-cg',
    subtopic: 'Computação Gráfica: Coordenadas Homogêneas 2D e Sombreamento (Gouraud vs. Phong)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `No pipeline de renderização de um simulador CAD/3D, as transformações geométricas afins são compostas por multiplicação de matrizes em **coordenadas homogêneas** (utilizando convenção de vetores-coluna). Sobre um vértice 2D inicialmente localizado em $P = (2,\\; 1)$, aplica-se a seguinte sequência ordenada de operações:

1. **Primeiro**, uma rotação anti-horária de $90^\\circ$ em torno da origem;
2. **Em seguida**, uma translação pelo vetor $(t_x,\\; t_y) = (3,\\; -2)$.

Na etapa subsequente de rasterização e iluminação de malhas poligonais 3D, a equipe decide entre utilizar **sombreamento de Gouraud** ou **sombreamento de Phong** para renderizar peças metálicas com reflexos especulares concentrados.`,
    command: 'Qual é a posição final $P\'$ do vértice após a composição das transformações 2D e qual é a diferença técnica fundamental entre o sombreamento de Gouraud e o sombreamento de Phong?',
    options: [
      {
        letter: 'A',
        text: '$P\' = (1,\\; 5)$; enquanto Gouraud interpola vetores normais por pixel, Phong calcula a iluminação apenas nos vértices e interpola cores.',
      },
      {
        letter: 'B',
        text: '$P\' = (2,\\; 0)$; enquanto Gouraud calcula a cor nos vértices e a interpola linearmente pelo interior do polígono, Phong interpola os vetores normais por fragmento e avalia o modelo de iluminação em cada pixel, preservando melhor reflexos especulares no interior das faces.',
      },
      {
        letter: 'C',
        text: '$P\' = (4,\\; -4)$; Gouraud e Phong produzem imagens idênticas em qualquer malha, diferenciando-se apenas pelo uso de coordenadas homogêneas $4 \\times 4$.',
      },
      {
        letter: 'D',
        text: '$P\' = (2,\\; 0)$; Gouraud exige maior custo computacional por fragmento do que Phong porque recalcula a reflexão especular em cada pixel do triângulo.',
      },
      {
        letter: 'E',
        text: '$P\' = (1,\\; 5)$; como matrizes de rotação e translação são comutativas ($T \\cdot R = R \\cdot T$), a ordem das transformações não altera o ponto final.',
      },
    ],
    correctOption: 'B',
    explanation: `### 1. Transformações em Coordenadas Homogêneas 2D (Vetores-Coluna)
Como a rotação $R(90^\\circ)$ é aplicada **primeiro** e a translação $T(3, -2)$ **em seguida**, a matriz composta é $M = T(3, -2) \\cdot R(90^\\circ)$ (da direita para a esquerda):

$$R(90^\\circ) = \\begin{bmatrix} \\cos 90^\\circ & -\\sin 90^\\circ & 0 \\\\ \\sin 90^\\circ & \\cos 90^\\circ & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\qquad T(3, -2) = \\begin{bmatrix} 1 & 0 & 3 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

Aplicando passo a passo sobre $P = \\begin{bmatrix} 2 & 1 & 1 \\end{bmatrix}^T$:
1. **Após rotação de $90^\\circ$:**
   $$P_1 = R(90^\\circ) \\cdot P = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix}$$
2. **Após translação por $(3, -2)$:**
   $$P' = T(3, -2) \\cdot P_1 = \\begin{bmatrix} 1 & 0 & 3 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 + 3 \\\\ 2 - 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix} \\implies P' = \\mathbf{(2,\\; 0)}$$

*(Atenção: multiplicação de matrizes afins **não é comutativa**! Se fosse feita a translação antes da rotação, obter-se-ia $(5, -1) \\xrightarrow{R(90^\\circ)} (1, 5)$.)*

### 2. Sombreamento de Gouraud vs. Sombreamento de Phong
- **Gouraud:** avalia o modelo de iluminação (ambiente + difusa + especular) apenas nos **vértices** do polígono e interpola bilinearmente as **cores** resultantes pelo interior da face. É mais leve computacionalmente, mas tende a perder ou distorcer brilhos especulares quando o pico especular cai no interior de um triângulo grande.
- **Phong:** interpola e renormaliza o **vetor normal** ao longo de cada fragmento (pixel) da face e calcula a equação de iluminação **por pixel**, reproduzindo com fidelidade reflexos especulares nítidos, porém com maior custo computacional no *fragment shader*.

Portanto, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Inverte a ordem das transformações (calculou R·T·P = (1, 5) em vez de T·R·P = (2, 0)) e também troca as definições de Gouraud e Phong.',
      B: 'Correta. Ponto final (2, 0) e distinção exata entre interpolação de cores nos vértices (Gouraud) e interpolação de normais por pixel (Phong).',
      C: 'Incorreta. Erra o cálculo das coordenadas (aplicou rotação horária de -90° e somou errado) e nega a diferença visual significativa em reflexos especulares.',
      D: 'Incorreta. Acerta o ponto (2, 0), mas inverte o custo computacional (Phong é mais custoso por pixel, não Gouraud).',
      E: 'Incorreta. Transformações de rotação e translação NÃO são comutativas (T·R ≠ R·T).',
    },
    keyConcept: 'Composição não comutativa de matrizes homogêneas 2D (T·R·P) e diferença entre sombreamento de Gouraud (interpolação de cores) e de Phong (interpolação de normais).',
  },
  {
    id: 'inedita-2-q29',
    source: 'inedita-2',
    year: 2026,
    number: 29,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Arquitetura de Software e Padrões de Projeto GoF (Strategy, Observer e Adapter)',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Durante o projeto orientado a objetos de uma plataforma de telemetria industrial em nuvem, o arquiteto de software precisa satisfazer três requisitos não funcionais de manutenibilidade e extensibilidade:

1. **Requisito R1:** O módulo transmissor (\`TelemetrySender\`) deve alternar dinamicamente, **em tempo de execução**, entre diferentes algoritmos intercambiáveis de compressão de dados (LZ4, Zstandard ou envio sem compressão) conforme a qualidade do enlace, encapsulando cada algoritmo em uma classe separada e evitando condicionais extensos (\`if/else\` ou \`switch\`) acoplados ao transmissor.
2. **Requisito R2:** Sempre que um sensor detectar temperatura acima do limite crítico, múltiplos subsistemas independentes (painel web em tempo real, serviço de alertas SMS e registrador de auditoria) devem ser notificados automaticamente, mantendo baixo acoplamento para permitir cadastrar ou remover ouvintes em tempo de execução.
3. **Requisito R3:** A plataforma precisa consumir dados de uma biblioteca fechada de um fabricante legado cujo método \`readRawFrame()\` possui assinatura incompatível com a interface padronizada \`ISensor.getSample()\` esperada pelo restante da aplicação, sem alterar o código-fonte legado.`,
    command: 'Quais padrões de projeto do catálogo *Gang of Four* (GoF) atendem, respectivamente, aos requisitos **R1**, **R2** e **R3**?',
    options: [
      { letter: 'A', text: 'Singleton, Factory Method e Proxy.' },
      { letter: 'B', text: 'Template Method, Mediator e Composite.' },
      { letter: 'C', text: 'Decorator, Command e Facade.' },
      { letter: 'D', text: 'Strategy, Observer e Adapter.' },
      { letter: 'E', text: 'State, Observer e Bridge.' },
    ],
    correctOption: 'D',
    explanation: `Analisando a intenção clássica de cada padrão GoF frente aos três requisitos:

1. **R1 $\\rightarrow$ Strategy (Comportamental):** Define uma família de algoritmos (compressão LZ4, Zstd, nula), encapsula cada um sob uma interface comum (\`CompressionStrategy\`) e os torna intercambiáveis em tempo de execução via composição no contexto (\`TelemetrySender\`), eliminando grandes blocos condicionais e respeitando o Princípio Aberto-Fechado (OCP).
2. **R2 $\\rightarrow$ Observer (Comportamental):** Estabelece uma dependência um-para-muitos entre um sujeito observado (o monitor de temperatura do sensor) e múltiplos observadores (painel, SMS, auditoria), de modo que, ao mudar de estado, todos os dependentes registrados sejam notificados automaticamente com baixo acoplamento.
3. **R3 $\\rightarrow$ Adapter (Estrutural):** Converte a interface de uma classe existente/legada (\`readRawFrame()\`) em outra interface esperada pelos clientes (\`ISensor.getSample()\`), permitindo que classes com interfaces incompatíveis colaborem sem modificar o código legado.

Portanto, a sequência correta é **Strategy, Observer e Adapter** — alternativa **D**.`,
    optionAnalysis: {
      A: 'Incorreta. Singleton restringe instância única, Factory Method delega criação de objetos e Proxy controla acesso a um objeto mantendo a mesma interface.',
      B: 'Incorreta. Template Method varia passos via herança (não troca algoritmos inteiros em tempo de execução por composição), Mediator centraliza comunicação muitos-para-muitos e Composite representa hierarquias parte-todo.',
      C: 'Incorreta. Decorator adiciona responsabilidades em camadas, Command encapsula requisições como objetos e Facade cria interface simplificada para um subsistema complexo (em vez de adaptar uma interface legada específica a outra esperada).',
      D: 'Correta. Mapeamento exato entre R1 (Strategy), R2 (Observer) e R3 (Adapter).',
      E: 'Incorreta. Embora Observer acerte R2, State modela transições internas de estado do objeto (não troca externa de algoritmo de compressão) e Bridge separa abstração de implementação desde o projeto inicial.',
    },
    keyConcept: 'Padrões de Projeto GoF: Strategy (família de algoritmos intercambiáveis em runtime), Observer (notificação um-para-muitos desacoplada) e Adapter (compatibilização de interfaces legadas).',
  },
  {
    id: 'inedita-2-q30',
    source: 'inedita-2',
    year: 2026,
    number: 30,
    component: 'CE',
    discipline: 'engenharia-software',
    subtopic: 'Métodos Ágeis (Scrum / Timeboxing) e IHC (Affordance e Acessibilidade WCAG)',
    questionStyle: 'afirmativas',
    difficulty: 'facil',
    context: `Uma equipe multidisciplinar utiliza o framework ágil **Scrum** para desenvolver um aplicativo governamental de agendamento de exames médicos, incorporando critérios de **Interação Humano-Computador (IHC)** e as diretrizes de acessibilidade **WCAG 2.1** desde as primeiras iterações.

Considerando as práticas do Scrum e os princípios de IHC e acessibilidade digital, avalie as afirmações a seguir.

**I.** O princípio de *timeboxing* no Scrum estabelece limites máximos fixos de duração para a Sprint e para seus eventos (*Sprint Planning*, *Daily Scrum*, *Sprint Review* e *Sprint Retrospective*), garantindo ritmo sustentável, previsibilidade de inspeção e foco na entrega de incrementos prontos.

**II.** Em IHC, a aplicação adequada de *affordances* e significantes visuais claros — como botões com aparência clicável, rótulos inequívocos e hierarquia visual coerente — reduz a carga cognitiva do usuário e previne erros de operação.

**III.** Em conformidade com as diretrizes WCAG (princípios Perceptível, Operável, Compreensível e Robusto), a indicação de erros em formulários não deve depender exclusivamente da cor vermelha, devendo combinar mensagens textuais claras, ícones, contraste adequado e compatibilidade com navegação por teclado e leitores de tela.

**IV.** No Scrum, o *Product Owner* (PO) atua como gerente hierárquico que distribui tarefas técnicas diárias individuais aos desenvolvedores e congela o *Product Backlog* após o início da primeira Sprint, proibindo inclusões ou repriorizações.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I, II e III.' },
      { letter: 'B', text: 'I e IV.' },
      { letter: 'C', text: 'II e IV.' },
      { letter: 'D', text: 'I, III e IV.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'A',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** Todos os eventos do Scrum são *timeboxed* (duração máxima fixa): a Sprint dura até 1 mês e não é estendida se algum item ficar incompleto; *Daily Scrum* tem limite de 15 minutos, e os demais eventos têm limites proporcionais à duração da Sprint.
- **Afirmação II (VERDADEIRA):** *Affordance* (conceito popularizado em design de interação por Don Norman) e significantes visuais comunicam diretamente as ações possíveis na interface, reduzindo esforço mental e prevenindo deslizes do usuário.
- **Afirmação III (VERDADEIRA):** Os quatro princípios do WCAG (**POUR**: *Perceivable, Operable, Understandable, Robust*) determinam explicitamente que a cor não seja o único meio visual de transmitir informação (essencial para pessoas com daltonismo), além de exigir contraste mínimo, rótulos semânticos para leitores de tela e plena operabilidade por teclado.
- **Afirmação IV (FALSA):** No Scrum, os desenvolvedores são **autogerenciáveis** (decidem internamente quem faz o quê e como), o PO é responsável por maximizar o valor do produto e ordenar o *Product Backlog* — e o *Product Backlog* é um artefato **dinâmico e emergente**, continuamente refinado e repriorizado conforme novos aprendizados surgem.

Portanto, estão corretas apenas **I, II e III** (alternativa **A**).`,
    optionAnalysis: {
      A: 'Correta. Valida timeboxing no Scrum, affordance em IHC e os requisitos de acessibilidade WCAG, descartando corretamente a visão distorcida do PO na afirmação IV.',
      B: 'Incorreta. Inclui a afirmação IV (falsa) e omite II e III.',
      C: 'Incorreta. Inclui a afirmação IV (falsa) e omite I e III.',
      D: 'Incorreta. Inclui a afirmação IV (falsa) e omite II.',
      E: 'Incorreta. Inclui a afirmação IV (falsa) e omite I.',
    },
    keyConcept: 'Scrum (timeboxing, autogerenciamento e Product Backlog dinâmico) aliado a IHC (affordance) e acessibilidade digital (WCAG / POUR).',
  },
  {
    id: 'inedita-2-q31',
    source: 'inedita-2',
    year: 2026,
    number: 31,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Álgebra Relacional, Otimização de Consultas e Índices Árvore B+',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Considere o seguinte esquema relacional de um sistema de gestão clínica (chaves primárias em **negrito** e \`crm\` em \`CONSULTA\` sendo chave estrangeira para \`MEDICO\`):

- \`MEDICO\`(**\`crm\`**, \`nome\`, \`especialidade\`)
- \`CONSULTA\`(**\`id_cons\`**, \`crm\`, \`id_pac\`, \`data_cons\`, \`valor\`)

Um analista de banco de dados escreveu a seguinte expressão em **Álgebra Relacional**:

$$\\pi_{\\text{nome}}\\Bigl(\\sigma_{\\text{especialidade} = \\text{'Cardiologia'} \\land \\text{valor} > 300}\\bigl(\\text{MEDICO} \\bowtie \\text{CONSULTA}\\bigr)\\Bigr)$$

Para acelerar consultas frequentes com predicados de intervalo sobre o atributo \`valor\` na tabela \`CONSULTA\` (com dezenas de milhões de tuplas), o administrador criou um índice baseado em **Árvore B+**.`,
    command: 'Sobre o significado/otimização dessa expressão algébrica e as propriedades estruturais do índice Árvore B+, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'A expressão retorna apenas o CRM dos médicos que nunca realizaram consultas acima de 300; na Árvore B+, os ponteiros para dados ficam espalhados igualmente entre nós raiz, internos e folhas.',
      },
      {
        letter: 'B',
        text: 'Para otimizar o plano de execução, o SGBD deve sempre materializar primeiro o produto cartesiano completo entre `MEDICO` e `CONSULTA` e só então aplicar as seleções no topo da árvore de consulta.',
      },
      {
        letter: 'C',
        text: 'A expressão retorna o conjunto de nomes dos médicos da especialidade Cardiologia que realizaram ao menos uma consulta com valor superior a 300 (podendo ser otimizada empurrando cada seleção para antes da junção); além disso, a Árvore B+ mantém todas as referências de dados nos nós folha encadeados sequencialmente, oferecendo alto fator de ramificação e excelente desempenho em consultas por faixa como `valor > 300`.',
      },
      {
        letter: 'D',
        text: 'Índices baseados em tabela *hash* estática são sempre superiores à Árvore B+ para consultas por faixa como `valor > 300`, pois funções *hash* preservam naturalmente a ordenação crescente das chaves.',
      },
      {
        letter: 'E',
        text: 'A Árvore B+ torna-se desbalanceada após inserções ordenadas de datas ou valores crescentes, degradando o custo de busca no pior caso para $O(n)$ acessos a blocos de disco.',
      },
    ],
    correctOption: 'C',
    explanation: `Analisando a expressão algébrica e a estrutura de indexação em Árvore B+:

### 1. Semântica e Otimização da Expressão em Álgebra Relacional
- $\\text{MEDICO} \\bowtie \\text{CONSULTA}$: junção natural pelo atributo comum \`crm\`.
- $\\sigma_{\\text{especialidade} = \\text{'Cardiologia'} \\land \\text{valor} > 300}(\\dots)$: filtra as tuplas resultantes de cardiologistas em consultas com \`valor > 300\`.
- $\\pi_{\\text{nome}}(\\dots)$: projeta os nomes (sem repetições, na álgebra relacional clássica de conjuntos).
- **Heurística de otimização (push-down de seleções):** É algebricamente equivalente e muito mais eficiente aplicar as seleções *antes* da junção:
  $$\\pi_{\\text{nome}}\\Bigl(\\bigl(\\sigma_{\\text{especialidade} = \\text{'Cardiologia'}}(\\text{MEDICO})\\bigr) \\bowtie \\bigl(\\sigma_{\\text{valor} > 300}(\\text{CONSULTA})\\bigr)\\Bigr)$$

### 2. Propriedades da Árvore B+
- É uma árvore **sempre balanceada** (todas as folhas ficam no mesmo nível, garantindo busca em $O(\\log_B n)$ acessos a disco).
- **Nós internos** armazenam apenas chaves de roteamento e ponteiros para filhos — sem ponteiros para registros de dados —, o que eleva o fator de ramificação (*fan-out*) e diminui a altura da árvore.
- **Nós folha** contêm todas as entradas de índice (ponteiros para os registros) e são **interligados por ponteiros sequenciais** (lista encadeada), permitindo descer uma única vez até o limite \`300\` e percorrer linearmente as folhas para atender \`valor > 300\` (ao contrário de índices *hash*, que só atendem igualdade \`=\` com eficiência!).

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. A projeção é sobre nome (não CRM) para consultas acima de 300; além disso, armazenar ponteiros de dados em nós internos caracteriza a Árvore B, e não a Árvore B+.',
      B: 'Incorreta. Materializar o produto cartesiano antes das seleções é justamente o pior plano possível; o otimizador empurra seleções para baixo (predicate push-down).',
      C: 'Correta. Interpreta perfeitamente a consulta, cita a otimização de push-down de seleções e descreve com rigor as vantagens estruturais da Árvore B+ para range queries.',
      D: 'Incorreta. Índices hash NÃO preservam ordenação e são inadequados para consultas por faixa (>, <, BETWEEN).',
      E: 'Incorreta. Árvores B+ são autobalanceadas por construção (divisão/fusão de nós), mantendo altura logarítmica O(log_B n) mesmo sob inserções estritamente crescentes.',
    },
    keyConcept: 'Álgebra relacional (push-down de seleções) e Árvore B+ (folhas encadeadas para range queries, alto fan-out e balanceamento garantido).',
  },
  {
    id: 'inedita-2-q32',
    source: 'inedita-2',
    year: 2026,
    number: 32,
    component: 'CE',
    discipline: 'banco-dados',
    subtopic: 'Transações ACID, Anomalias de Concorrência e Níveis de Isolamento SQL',
    questionStyle: 'interpretacao-codigo',
    difficulty: 'dificil',
    context: `Em um sistema bancário usando banco de dados relacional compatível com o padrão **ANSI SQL-92**, analise os dois escalonamentos concorrentes a seguir (considere que inicialmente a tabela \`CONTA\` tem o registro \`(id = 1, saldo = 1000)\`):

**Escalonamento 1:**
\`\`\`sql
-- t1 (Transação T1):
BEGIN;
UPDATE CONTA SET saldo = saldo - 300 WHERE id = 1; -- saldo = 700 (não confirmado)

-- t2 (Transação T2):
BEGIN;
SELECT saldo FROM CONTA WHERE id = 1;              -- retorna 700

-- t3 (Transação T1):
ROLLBACK;                                          -- desfaz alteração; saldo volta a 1000
\`\`\`

**Escalonamento 2:**
\`\`\`sql
-- t1 (Transação T3):
BEGIN;
SELECT COUNT(*) FROM PEDIDO WHERE status = 'ABERTO'; -- retorna 10

-- t2 (Transação T4):
BEGIN;
INSERT INTO PEDIDO (id, status) VALUES (999, 'ABERTO');
COMMIT;

-- t3 (Transação T3):
SELECT COUNT(*) FROM PEDIDO WHERE status = 'ABERTO'; -- retorna 11
COMMIT;
\`\`\``,
    command: 'De acordo com o padrão ANSI SQL-92 e as propriedades ACID, quais anomalias de concorrência ocorreram respectivamente nos Escalonamentos 1 e 2, qual propriedade ACID foi comprometida no Escalonamento 1 e quais níveis mínimos de isolamento ANSI SQL previnem cada uma delas?',
    options: [
      {
        letter: 'A',
        text: 'Leitura não repetível e *deadlock*; violação de Durabilidade; evitadas respectivamente por `READ UNCOMMITTED` e `READ COMMITTED`.',
      },
      {
        letter: 'B',
        text: 'Leitura suja (*dirty read*) e leitura não repetível; violação de Atomicidade; evitadas ambas já no nível `READ COMMITTED`.',
      },
      {
        letter: 'C',
        text: 'Leitura fantasma (*phantom read*) e leitura suja (*dirty read*); violação de Consistência; evitadas respectivamente por `REPEATABLE READ` e `READ UNCOMMITTED`.',
      },
      {
        letter: 'D',
        text: 'Atualização perdida (*lost update*) e leitura fantasma (*phantom read*); violação de Durabilidade; evitadas ambas no nível `REPEATABLE READ`.',
      },
      {
        letter: 'E',
        text: 'Leitura suja (*dirty read*) no Escalonamento 1 e leitura fantasma (*phantom read*) no Escalonamento 2; o Escalonamento 1 viola o **Isolamento**; segundo o padrão ANSI SQL-92, a leitura suja é evitada a partir de `READ COMMITTED` e a leitura fantasma é garantidamente evitada em `SERIALIZABLE`.',
      },
    ],
    correctOption: 'E',
    explanation: `Vamos classificar rigorosamente cada escalonamento conforme a tabela oficial de níveis de isolamento do padrão **ANSI SQL-92**:

| Nível de Isolamento (ANSI SQL-92) | Leitura Suja (*Dirty Read*) | Leitura Não Repetível (*Non-Repeatable Read*) | Leitura Fantasma (*Phantom Read*) |
| --- | :---: | :---: | :---: |
| \`READ UNCOMMITTED\` | Possível | Possível | Possível |
| \`READ COMMITTED\` | **Evitada** | Possível | Possível |
| \`REPEATABLE READ\` | **Evitada** | **Evitada** | Possível |
| \`SERIALIZABLE\` | **Evitada** | **Evitada** | **Evitada** |

1. **Escalonamento 1 — Leitura Suja (*Dirty Read*):** $T_2$ leu o valor \`700\` escrito por $T_1$ **antes** do \`COMMIT\`. Quando $T_1$ executou \`ROLLBACK\`, $T_2$ ficou operando com um dado inexistente/cancelado.
   - **Propriedade ACID comprometida:** **Isolamento** (pois efeitos parciais não confirmados de $T_1$ vazaram para $T_2$; já o \`ROLLBACK\` em si preservou a *Atomicidade* de $T_1$).
   - **Nível mínimo ANSI SQL para evitar:** \`READ COMMITTED\`.

2. **Escalonamento 2 — Leitura Fantasma (*Phantom Read*):** $T_3$ executou a mesma consulta com predicado \`WHERE status = 'ABERTO'\` duas vezes e, entre elas, $T_4$ **inseriu** uma nova linha que satisfaz o predicado e confirmou (\`COMMIT\`), alterando o conjunto de linhas enxergado por $T_3$.
   - **Nível mínimo ANSI SQL-92 que garante a prevenção:** \`SERIALIZABLE\`.

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Erra ambas as anomalias, a propriedade ACID e afirma que READ UNCOMMITTED evitaria leitura suja (ele é justamente o nível que a permite).',
      B: 'Incorreta. O Escalonamento 2 envolve inserção de nova linha satisfazendo um predicado (leitura fantasma, não mera atualização de linha já lida), e READ COMMITTED não impede leituras fantasmas.',
      C: 'Incorreta. Inverte a ordem das anomalias e os níveis de isolamento correspondentes.',
      D: 'Incorreta. No Escalonamento 1 não houve duas escritas concorrentes sobrescrevendo-se (lost update), mas sim uma leitura de dado não commitado (dirty read); além disso, no padrão ANSI SQL-92, REPEATABLE READ ainda permite leituras fantasmas.',
      E: 'Correta. Identifica exatamente Dirty Read, Phantom Read, violação de Isolamento e os níveis mínimos ANSI SQL-92 (READ COMMITTED e SERIALIZABLE).',
    },
    keyConcept: 'Anomalias de concorrência (Dirty Read vs. Non-Repeatable Read vs. Phantom Read), propriedade de Isolamento (ACID) e níveis de isolamento ANSI SQL-92.',
  },
  {
    id: 'inedita-2-q33',
    source: 'inedita-2',
    year: 2026,
    number: 33,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Hierarquia de Chomsky: Linguagens Regulares, Livres de Contexto e Sensíveis ao Contexto',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Na especificação do analisador léxico e do analisador sintático de uma nova linguagem de domínio específico (DSL), um engenheiro de compiladores classifica três linguagens formais sobre o alfabeto $\\Sigma = \\{a, b, c\\}$:

- $L_1 = \\{\\, w \\in \\{a, b\\}^* \\mid w \\text{ contém número par de símbolos } a \\text{ e termina com } b \\,\\}$
- $L_2 = \\{\\, a^n b^n \\mid n \\ge 1 \\,\\}$
- $L_3 = \\{\\, a^n b^n c^n \\mid n \\ge 1 \\,\\}$`,
    command: 'De acordo com a Hierarquia de Chomsky e os modelos formais de reconhecimento mínimos exigidos para cada linguagem, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: '$L_1$ e $L_2$ são linguagens regulares reconhecíveis por Autômatos Finitos Determinísticos (AFDs), enquanto $L_3$ é uma linguagem livre de contexto.',
      },
      {
        letter: 'B',
        text: '$L_1$ é regular (reconhecível por AFD e descritível por expressão regular); $L_2$ é livre de contexto, porém não regular (exige Autômato com Pilha / GLC); e $L_3$ é sensível ao contexto, porém não livre de contexto (exige modelo superior ao Autômato com Pilha, como Autômato Linearmente Limitado / Máquina de Turing).',
      },
      {
        letter: 'C',
        text: 'Nenhuma das três linguagens é regular, pois contar paridade em $L_1$ exige memória ilimitada em pilha.',
      },
      {
        letter: 'D',
        text: '$L_1$ é regular, enquanto $L_2$ e $L_3$ são ambas linguagens livres de contexto geráveis pela gramática $S \\to aSb \\mid ab$ e suas variações com uma única pilha.',
      },
      {
        letter: 'E',
        text: '$L_3$ é indecidível (não recursiva), não existindo nenhuma Máquina de Turing capaz de decidir se uma cadeia $w$ pertence a $L_3$.',
      },
    ],
    correctOption: 'B',
    explanation: `Analisando cada linguagem na **Hierarquia de Chomsky**:

1. **$L_1$ — Linguagem Regular (Tipo 3):**
   Para decidir se $w \\in \\{a, b\\}^*$ tem número par de $a$'s e termina com $b$, basta manter um número **finito** de estados representando duas informações binárias: (paridade de $a \\in \\{\\text{par}, \\text{ímpar}\\}$) $\\times$ (último símbolo é $b \\in \\{\\text{sim}, \\text{não}\\}$) $\\Rightarrow$ um **AFD com apenas 4 estados**! Logo, $L_1$ é regular (aceita expressão regular e pode ser processada pelo analisador léxico).

2. **$L_2 = \\{a^n b^n \\mid n \\ge 1\\}$ — Livre de Contexto (Tipo 2), NÃO Regular:**
   Um AFD não consegue contar um valor arbitrariamente grande $n$ (provado pelo Lema do Bombeamento para linguagens regulares). Contudo, $L_2$ é facilmente gerada pela GLC $S \\to aSb \\mid ab$ e reconhecida por um **Autômato com Pilha (AP)** (empilha cada $a$, desempilha ao ler cada $b$).

3. **$L_3 = \\{a^n b^n c^n \\mid n \\ge 1\\}$ — Sensível ao Contexto (Tipo 1), NÃO Livre de Contexto:**
   Uma única pilha (LIFO) consegue conferir $n_a = n_b$, mas esvazia-se nesse processo, perdendo a contagem para conferir simultaneamente com $n_c$ (provado pelo Lema do Bombeamento para GLCs). Entretanto, $L_3$ é perfeitamente **decidível** em tempo polinomial por uma **Máquina de Turing** (e reconhecida por um Autômato Linearmente Limitado — LBA).

Portanto, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. L2 não é regular (viola o Lema do Bombeamento para regulares) e L3 não é livre de contexto.',
      B: 'Correta. Classificação rigorosa de L1 (regular / AFD), L2 (GLC não regular / AP) e L3 (sensível ao contexto não GLC / LBA ou MT).',
      C: 'Incorreta. Paridade (módulo 2) requer apenas 2 estados finitos, não memória ilimitada.',
      D: 'Incorreta. L3 não é livre de contexto e não pode ser reconhecida por um Autômato com uma única pilha.',
      E: 'Incorreta. L3 é decidível (inclusive em tempo linear/quadrático em Máquina de Turing determinística); ser não livre de contexto não implica indecidibilidade.',
    },
    keyConcept: 'Hierarquia de Chomsky: limites de memória finita (AFD), pilha única (AP/GLC) e fita limitada/MT (LBA/CSL).',
  },
  {
    id: 'inedita-2-q34',
    source: 'inedita-2',
    year: 2026,
    number: 34,
    component: 'CE',
    discipline: 'teoria-compiladores',
    subtopic: 'Análise Sintática (LL vs. LR) e Teoria da Complexidade (P, NP, NP-Completo e Indecidibilidade)',
    questionStyle: 'afirmativas',
    difficulty: 'dificil',
    context: `Um engenheiro de software sênior precisa escolher técnicas de análise sintática para um compilador e avaliar a tratabilidade computacional de problemas de otimização de código (como alocação ótima de registradores por coloração de grafos).

Com base na teoria de compiladores e na teoria da complexidade computacional, avalie as afirmações a seguir.

**I.** Gramáticas livres de contexto contendo recursão à esquerda (como $E \\to E + T \\mid T$) não podem ser processadas diretamente por analisadores sintáticos descendentes preditivos **LL(1)** (pois levariam à recursão infinita), exigindo reescrita prévia da gramática; em contrapartida, analisadores ascendentes da família **LR** lidam naturalmente com recursão à esquerda.

**II.** Toda linguagem (problema de decisão) pertencente à classe **P** pertence também à classe **NP**, pois qualquer problema decidível em tempo polinomial determinístico pode ser verificado em tempo polinomial.

**III.** Pela definição de redutibilidade polinomial, caso seja descoberto um algoritmo determinístico de tempo polinomial para resolver um único problema **NP-Completo** (como o 3-SAT ou a versão de decisão da coloração de grafos com $k$ cores), demonstrar-se-á que $\\text{P} = \\text{NP}$.

**IV.** O **Problema da Parada** (*Halting Problem*) pertence à classe **NP-Completa**, podendo ser decidido deterministicamente em tempo exponencial $O(2^n)$ por força bruta.`,
    command: 'É correto apenas o que se afirma em',
    options: [
      { letter: 'A', text: 'I e II.' },
      { letter: 'B', text: 'II e IV.' },
      { letter: 'C', text: 'I, III e IV.' },
      { letter: 'D', text: 'I, II e III.' },
      { letter: 'E', text: 'II, III e IV.' },
    ],
    correctOption: 'D',
    explanation: `Analisando cada afirmação:

- **Afirmação I (VERDADEIRA):** Em análise descendente preditiva (**LL(1)**), a produção $E \\to E + T$ expande $E$ novamente sem consumir nenhum token de entrada, entrando em laço infinito; por isso é obrigatório eliminar recursão à esquerda (e fatorar prefixos comuns). Já analisadores ascendentes **LR** empilham tokens (*shift*) e reduzem apenas quando o corpo completo da regra está no topo da pilha (*reduce*), manipulando recursão à esquerda sem dificuldade.
- **Afirmação II (VERDADEIRA):** Vale a inclusão $\\text{P} \\subseteq \\text{NP}$: todo algoritmo determinístico de tempo polinomial é caso particular de algoritmo não determinístico de tempo polinomial (ou, equivalentemente, seu verificador ignora o certificado e apenas decide em tempo polinomial).
- **Afirmação III (VERDADEIRA):** Um problema $X$ é **NP-Completo** se $X \\in \\text{NP}$ e todo problema $Y \\in \\text{NP}$ é redutível em tempo polinomial a $X$ ($Y \\le_p X$). Logo, se $X \\in \\text{P}$, a composição da redução polinomial com o algoritmo polinomial de $X$ coloca todo $Y \\in \\text{NP}$ em $\\text{P}$, provando $\\text{P} = \\text{NP}$.
- **Afirmação IV (FALSA):** O Problema da Parada é **indecidível** (demonstrado por Alan Turing por diagonalização): **não existe nenhum algoritmo** — nem exponencial, nem em qualquer tempo finito — que o decida para todas as entradas. Ele é **NP-Difícil** (*NP-Hard*), mas **não** é NP-Completo porque não pertence a NP!

Portanto, estão corretas apenas **I, II e III** (alternativa **D**).`,
    optionAnalysis: {
      A: 'Incorreta. Omite a afirmação III, que expressa a propriedade definidora central da classe NP-Completa.',
      B: 'Incorreta. Inclui a afirmação IV (falsa: o Problema da Parada é indecidível) e omite I e III.',
      C: 'Incorreta. Inclui a afirmação IV (falsa) e omite II.',
      D: 'Correta. Valida precisamente LL(1) vs. LR com recursão à esquerda, P ⊆ NP e a consequência de resolver um problema NP-Completo em tempo polinomial.',
      E: 'Incorreta. Inclui a afirmação IV (falsa) e omite I.',
    },
    keyConcept: 'Recursão à esquerda em analisadores LL(1) vs. LR; relação entre P, NP, NP-Completo e distinção entre NP-Difícil indecidível (Problema da Parada) e NP-Completo.',
  },
  {
    id: 'inedita-2-q35',
    source: 'inedita-2',
    year: 2026,
    number: 35,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Aprendizado de Máquina: Overfitting, Underfitting, Regularização L1/L2 e Validação Cruzada',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Para prever falhas prematuras em motores industriais a partir de 120 atributos extraídos de sensores, uma equipe de ciência de dados avaliou quatro configurações de modelo utilizando **validação cruzada *5-fold***. A tabela a seguir apresenta as taxas médias de erro de classificação:

| Modelo | Configuração / Regularização | Erro de Treino (%) | Erro de Validação Cruzada (%) | Observação sobre Pesos |
| :---: | --- | :---: | :---: | --- |
| **M1** | Classificador linear simples (alta regularização) | 26,4 | 27,1 | Pesos muito pequenos |
| **M2** | Expansão polinomial complexa, sem regularização ($\\lambda = 0$) | 0,8 | 21,5 | Pesos de alta magnitude |
| **M3** | Expansão polinomial com regularização **L2 (Ridge)** ($\\lambda = 1,0$) | 4,5 | 6,2 | Todos os 120 pesos não nulos, porém reduzidos |
| **M4** | Expansão polinomial com regularização **L1 (Lasso)** ($\\lambda = 1,5$) | 5,1 | 6,4 | 84 dos 120 pesos exatamente zerados |`,
    command: 'Analisando os resultados da tabela e as boas práticas metodológicas de aprendizado de máquina, assinale a alternativa correta.',
    options: [
      {
        letter: 'A',
        text: 'O modelo **M2** deve ser escolhido para produção por apresentar o menor erro de treino ($0,8\\%$), o que garante a maior capacidade de generalização em dados inéditos.',
      },
      {
        letter: 'B',
        text: 'O modelo **M1** apresenta claro quadro de *overfitting* (alta variância), devendo ser corrigido reduzindo ainda mais a quantidade de atributos e aumentando o fator de regularização $\\lambda$.',
      },
      {
        letter: 'C',
        text: '**M1** evidencia *underfitting* (alto viés) e **M2** evidencia *overfitting* (alta variância); a regularização **L1 (M4)** promove esparsidade e seleção automática de atributos ao zerar pesos irrelevantes, enquanto na validação cruzada *k-fold* etapas como normalização/padronização devem ser ajustadas separadamente dentro de cada dobra de treino para evitar *data leakage*.',
      },
      {
        letter: 'D',
        text: 'Para garantir consistência estatística na validação cruzada *5-fold*, a padronização ($z$-score) deve ser calculada uma única vez usando a média e o desvio-padrão de todo o conjunto de dados antes de dividir as dobras.',
      },
      {
        letter: 'E',
        text: 'A regularização **L2 (M3)** adiciona penalidade proporcional à soma dos valores absolutos $\\lambda \\sum |w_j|$, sendo a única forma de regularização capaz de zerar exatamente os coeficientes de variáveis irrelevantes.',
      },
    ],
    correctOption: 'C',
    explanation: `Analisando o diagnóstico de viés–variância, regularização e metodologia experimental:

1. **Diagnóstico dos modelos:**
   - **M1:** Erro alto tanto no treino ($26,4\\%$) quanto na validação ($27,1\\%$) $\\Rightarrow$ ***underfitting* (alto viés)**: o modelo é simples demais para capturar o padrão dos dados.
   - **M2:** Erro quase nulo no treino ($0,8\\%$), mas enorme lacuna para o erro de validação ($21,5\\%$) $\\Rightarrow$ ***overfitting* severo (alta variância)**: memorizou ruído do treino e falhou em generalizar.
   - **M3 (L2 / Ridge):** Penaliza $\\lambda \\sum_j w_j^2$, encolhendo pesos de maneira suave (sem necessariamente zerá-los) e atingindo o melhor equilíbrio viés–variância ($6,2\\%$ na validação).
   - **M4 (L1 / Lasso):** Penaliza $\\lambda \\sum_j |w_j|$; geometricamente, a bola da norma $\\ell_1$ possui vértices sobre os eixos coordenados, o que induz **esparsidade** (zerando 84 pesos irrelevantes) e atua como seleção embutida de atributos.

2. **Prevenção de *Data Leakage* na Validação Cruzada ($k$-fold):**
   Qualquer pré-processamento que dependa de estatísticas dos dados (média/desvio-padrão no *z-score*, imputação, PCA, seleção de atributos) deve ter seus parâmetros ajustados (\`fit\`) **exclusivamente sobre as $k-1$ dobras de treinamento** de cada iteração e apenas aplicados (\`transform\`) à dobra de validação. Calcular média e desvio sobre o dataset inteiro antes do *split* vaza informação da validação para o treino (*data leakage*) e gera estimativas artificialmente otimistas!

Portanto, a alternativa correta é **C**.`,
    optionAnalysis: {
      A: 'Incorreta. Escolher pelo menor erro de treino (0,8%) ignorando o péssimo erro de validação (21,5%) é a armadilha clássica do overfitting.',
      B: 'Incorreta. M1 sofre de underfitting (alto viés), não overfitting; aumentar λ pioraria ainda mais o viés.',
      C: 'Correta. Diagnostica corretamente M1 (underfitting) e M2 (overfitting), explica o efeito de esparsidade da norma L1 (M4) e alerta corretamente contra data leakage no pré-processamento do k-fold.',
      D: 'Incorreta. Calcular estatísticas globais antes de separar as dobras introduz vazamento de dados (data leakage).',
      E: 'Incorreta. Inverte as fórmulas de L1 e L2: L2 usa soma dos quadrados (λ ∑ w_j²) e não promove esparsidade exata como L1 (λ ∑ |w_j|).',
    },
    keyConcept: 'Trade-off viés-variância (underfitting vs. overfitting), regularização L1 (Lasso/esparsidade) vs. L2 (Ridge) e prevenção de data leakage em validação cruzada k-fold.',
  },
  {
    id: 'inedita-2-q36',
    source: 'inedita-2',
    year: 2026,
    number: 36,
    component: 'CE',
    discipline: 'ia-dados',
    subtopic: 'Redes Neurais (Neurônio com ReLU), Redução de Dimensionalidade (PCA) e Agrupamento (k-means)',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um sistema inteligente de monitoramento industrial integra técnicas de aprendizado supervisionado e não supervisionado:

1. Na camada oculta de uma rede neural *feedforward*, um neurônio artificial com função de ativação **ReLU** ($\\operatorname{ReLU}(z) = \\max(0, z)$) recebe o vetor de entrada $\\mathbf{x} = (2,\\; -1,\\; 3)$, multiplicado pelo vetor de pesos sinápticos $\\mathbf{w} = (0,5;\\; -2,0;\\; 1,0)$ e somado ao viés (*bias*) $b = -1,5$.
2. Antes da classificação, os engenheiros aplicam **PCA** (*Principal Component Analysis*) para reduzir a dimensionalidade de 50 sensores correlacionados e utilizam o algoritmo **$k$-means** para descobrir regimes operacionais não rotulados nos dados históricos.`,
    command: 'Qual é o valor de saída $\\hat{y}$ produzido por esse neurônio artificial e qual alternativa descreve corretamente os princípios matemáticos do PCA e do $k$-means?',
    options: [
      {
        letter: 'A',
        text: '$\\hat{y} = 4,5$; o PCA projeta os dados sobre os autovetores associados aos maiores autovalores da matriz de covariância para maximizar a variância preservada, enquanto o $k$-means particiona os dados buscando minimizar a soma das distâncias euclidianas quadráticas intragrupo (entre cada ponto e o centróide de seu cluster).',
      },
      {
        letter: 'B',
        text: '$\\hat{y} = 0,5$; o PCA maximiza a separação entre rótulos de classe conhecidos (aprendizado supervisionado), enquanto o $k$-means garante sempre convergência ao ótimo global independentemente da inicialização dos centróides.',
      },
      {
        letter: 'C',
        text: '$\\hat{y} = 6,0$; o PCA descarta os autovetores de maior autovalor para eliminar variância, enquanto o $k$-means determina automaticamente o número ótimo $k$ de clusters sem necessidade de defini-lo como hiperparâmetro.',
      },
      {
        letter: 'D',
        text: '$\\hat{y} = 0,0$; a função ReLU satura qualquer entrada positiva em $1,0$, agravando o problema do desaparecimento do gradiente (*vanishing gradient*) em relação à função sigmoide.',
      },
      {
        letter: 'E',
        text: '$\\hat{y} = 4,5$; tanto o PCA quanto o $k$-means são invariantes à escala das variáveis originais, dispensando qualquer padronização mesmo quando um sensor é medido em milivolts e outro em quilopascals.',
      },
    ],
    correctOption: 'A',
    explanation: `### 1. Cálculo da Saída do Neurônio com ReLU
Primeiro, calculamos a combinação linear (potencial de ativação $z$):
$$z = \\mathbf{w}^T \\mathbf{x} + b = (0,5)(2) + (-2,0)(-1) + (1,0)(3) + (-1,5)$$
$$z = 1,0 + 2,0 + 3,0 - 1,5 = 4,5$$

Aplicando a função de ativação **ReLU**:
$$\\hat{y} = \\operatorname{ReLU}(4,5) = \\max(0,\\; 4,5) = \\mathbf{4,5}$$

*(Atenção ao sinal no segundo termo: $(-2,0) \\times (-1) = +2,0$, erro comum que levaria a $1 - 2 + 3 - 1,5 = 0,5$.)*

### 2. Fundamentos Matemáticos de PCA e $k$-means
- **PCA (Análise de Componentes Principais):** É uma técnica **não supervisionada** (não usa rótulos de classe; quem maximiza separação de classes supervisionada é o LDA). Após centralizar (e padronizar, quando escalas diferem) os dados, encontra direções ortogonais correspondentes aos **autovetores da matriz de covariância com maiores autovalores**, preservando o máximo de variância total em menos dimensões.
- **$k$-means:** Algoritmo **não supervisionado** particional em que $k$ é um hiperparâmetro pré-definido; alterna atribuição ao centróide mais próximo e recálculo dos centróides para minimizar a soma das distâncias quadráticas intragrupo (inércia / *WCSS*):
  $$J = \\sum_{i=1}^{k} \\sum_{\\mathbf{x} \\in C_i} \\lVert \\mathbf{x} - \\boldsymbol{\\mu}_i \\rVert^2$$
  Por ser um problema não convexo, converge a mínimos locais e é sensível à inicialização e à escala das variáveis.

Portanto, a alternativa correta é **A**.`,
    optionAnalysis: {
      A: 'Correta. Saída exata 4,5 e definições matemáticas rigorosas de PCA (autovetores de maior autovalor da covariância) e k-means (minimização de WCSS).',
      B: 'Incorreta. Erra o sinal do produto (-2,0)(-1) obtendo 0,5, confunde PCA com LDA (supervisionado) e afirma falsamente convergência garantida ao ótimo global no k-means.',
      C: 'Incorreta. Esquece de somar o bias b = -1,5 (obtendo 6,0), inverte a escolha de autovalores no PCA e afirma incorretamente que k-means dispensa a escolha de k.',
      D: 'Incorreta. Erra o cálculo da saída e descreve o contrário da ReLU (a ReLU não satura em z > 0 e justamente atenua o vanishing gradient comparado à sigmoide).',
      E: 'Incorreta. Acerta o valor 4,5, mas erra ao afirmar que PCA e k-means são invariantes à escala (ambos dependem fortemente de variância/distância euclidiana, exigindo padronização quando unidades diferem).',
    },
    keyConcept: 'Propagação direta em neurônio ReLU (z = wᵀx + b), PCA via autovalores/autovetores da matriz de covariância e função objetivo do k-means.',
  },
  {
    id: 'inedita-2-q37',
    source: 'inedita-2',
    year: 2026,
    number: 37,
    component: 'CE',
    discipline: 'matematica-otimizacao',
    subtopic: 'Otimização com Restrição: Método dos Multiplicadores de Lagrange',
    questionStyle: 'multipla-simples',
    difficulty: 'dificil',
    context: `Um balanceador de carga distribui um fluxo total fixo de $6$ unidades normalizadas de requisições por segundo entre dois *clusters* de servidores heterogêneos, atribuindo carga $x \\ge 0$ ao Cluster 1 e carga $y \\ge 0$ ao Cluster 2, de modo que seja sempre atendida a restrição de demanda:

$$g(x, y) = x + y = 6$$

Devido às diferenças na arquitetura térmica dos dois *clusters*, a potência elétrica total dissipada em calor (em $\\text{kW}$) é modelada pela função estritamente convexa:

$$f(x, y) = x^2 + 2y^2$$`,
    command: 'Aplicando o método dos Multiplicadores de Lagrange, qual alocação ótima $(x^*, y^*)$ minimiza a potência dissipada, qual é o valor mínimo $f(x^*, y^*)$ e qual é o valor do multiplicador de Lagrange $\\lambda^*$ no ponto ótimo?',
    options: [
      { letter: 'A', text: '$(x^*, y^*) = (3,\\; 3)$; mínimo $f = 27\\text{ kW}$; $\\lambda^* = 6$.' },
      { letter: 'B', text: '$(x^*, y^*) = (2,\\; 4)$; mínimo $f = 36\\text{ kW}$; $\\lambda^* = 8$.' },
      { letter: 'C', text: '$(x^*, y^*) = (4,\\; 2)$; mínimo $f = 24\\text{ kW}$; $\\lambda^* = 4$.' },
      { letter: 'D', text: '$(x^*, y^*) = (6,\\; 0)$; mínimo $f = 36\\text{ kW}$; $\\lambda^* = 12$.' },
      { letter: 'E', text: '$(x^*, y^*) = (4,\\; 2)$; mínimo $f = 24\\text{ kW}$; $\\lambda^* = 8$.' },
    ],
    correctOption: 'E',
    explanation: `Montamos a função Lagrangiana para minimizar $f(x, y) = x^2 + 2y^2$ sujeita a $x + y - 6 = 0$:

$$\\mathcal{L}(x, y, \\lambda) = x^2 + 2y^2 - \\lambda(x + y - 6)$$

### 1. Condições de Estacionariedade ($\\nabla \\mathcal{L} = \\mathbf{0}$)
$$\\begin{cases}
\\dfrac{\\partial \\mathcal{L}}{\\partial x} = 2x - \\lambda = 0 \\implies \\lambda = 2x \\\\[8pt]
\\dfrac{\\partial \\mathcal{L}}{\\partial y} = 4y - \\lambda = 0 \\implies \\lambda = 4y \\\\[8pt]
x + y = 6
\\end{cases}$$

### 2. Resolução do Sistema
Igualando as expressões para $\\lambda$:
$$2x = 4y \\implies x = 2y$$

Substituindo na restrição $x + y = 6$:
$$2y + y = 6 \\implies 3y = 6 \\implies \\mathbf{y^* = 2} \\qquad \\text{e} \\qquad \\mathbf{x^* = 4}$$

### 3. Multiplicador de Lagrange e Valor Ótimo
- **Multiplicador de Lagrange:**
  $$\\lambda^* = 2x^* = 2(4) = \\mathbf{8} \\quad (\\text{conferência: } 4y^* = 4(2) = 8)$$
  *(Interpretação de sensibilidade: um aumento infinitesimal na demanda total $6 \\to 6 + \\Delta c$ eleva a dissipação ótima à taxa de $8\\text{ kW}$ por unidade de carga.)*
- **Potência mínima dissipada:**
  $$f(4, 2) = 4^2 + 2(2^2) = 16 + 8 = \\mathbf{24\\text{ kW}}$$

### 4. Confirmação de Mínimo Global
A matriz Hessiana de $f(x, y)$ é $\\begin{bmatrix} 2 & 0 \\\\ 0 & 4 \\end{bmatrix}$, definida positiva em todo $\\mathbb{R}^2$, garantindo que $(4, 2)$ é o **mínimo global** único (muito menor que dividir igualmente $(3, 3)$, que dissiparia $27\\text{ kW}$).

Portanto, a alternativa correta é **E**.`,
    optionAnalysis: {
      A: 'Incorreta. Divide a carga igualmente (3, 3) ignorando que o Cluster 2 dissipa o dobro de potência quadrática do Cluster 1, resultando em 27 kW > 24 kW.',
      B: 'Incorreta. Inverte a relação ótima (coloca mais carga no cluster de maior coeficiente térmico), elevando a dissipação para 36 kW.',
      C: 'Incorreta. Encontra (4, 2) e 24 kW corretamente, mas erra o multiplicador λ* = 2x* = 8 (calculou λ* = x* = 4).',
      D: 'Incorreta. Aloca toda a carga no Cluster 1, dissipando 36 kW em vez de explorar a convexidade dos dois clusters.',
      E: 'Correta. Ponto ótimo (4, 2), dissipação mínima 24 kW e multiplicador de Lagrange λ* = 8.',
    },
    keyConcept: 'Otimização restrita via Multiplicadores de Lagrange (∇f = λ∇g) e interpretação de sensibilidade do multiplicador λ.',
  },
  {
    id: 'inedita-2-q38',
    source: 'inedita-2',
    year: 2026,
    number: 38,
    component: 'CE',
    discipline: 'fisica-materiais-gestao',
    subtopic: 'Ciência dos Materiais: Ensaio de Tração, Lei de Hooke, Rigidez e Ductilidade',
    questionStyle: 'multipla-simples',
    difficulty: 'medio',
    context: `Para projetar o braço estrutural de um veículo aéreo não tripulado (drone) de inspeção agrícola, uma equipe avalia três materiais candidatos submetidos a ensaio de tração uniaxial padronizado. A tabela apresenta propriedades mecânicas típicas medidas:

| Material | Módulo de Elasticidade $E$ (GPa) | Tensão de Escoamento $\\sigma_e$ (MPa) | Limite de Resistência $\\sigma_r$ (MPa) | Alongamento na Ruptura (%) |
| --- | :---: | :---: | :---: | :---: |
| **Liga de Alumínio 6061-T6** | 70 | 275 | 310 | 12,0 |
| **Aço Carbono 1020** | 210 | 350 | 420 | 25,0 |
| **Compósito Epóxi-Carbono (UD)** | 140 | — (fratura frágil) | 1 200 | 0,9 |

Considere uma haste cilíndrica fabricada em **Liga de Alumínio 6061-T6**, com comprimento inicial $L_0 = 200\\text{ mm}$ e área de seção transversal $A_0 = 20\\text{ mm}^2$, submetida a uma carga axial de tração estática $F = 2\\,800\\text{ N}$.`,
    command: 'Com base na Mecânica dos Materiais e nos dados da tabela, quais são a tensão normal $\\sigma$ e o alongamento $\\Delta L$ dessa haste de alumínio, e qual avaliação comparativa entre os três materiais está correta?',
    options: [
      {
        letter: 'A',
        text: '$\\sigma = 140\\text{ MPa}$ e $\\Delta L = 4,00\\text{ mm}$; a liga de alumínio entra em deformação plástica permanente sob essa carga.',
      },
      {
        letter: 'B',
        text: '$\\sigma = 140\\text{ MPa}$ e $\\Delta L = 0,40\\text{ mm}$ em regime elástico linear (pois $\\sigma < \\sigma_e$); entre os três candidatos, o Aço 1020 apresenta a maior rigidez ($E$) e a maior ductilidade, enquanto o Compósito Epóxi-Carbono combina altíssima resistência à tração com comportamento frágil.',
      },
      {
        letter: 'C',
        text: '$\\sigma = 280\\text{ MPa}$ e $\\Delta L = 0,80\\text{ mm}$; como $\\sigma > \\sigma_e$, a haste sofre escoamento plástico imediato e não retorna ao comprimento original após o descarregamento.',
      },
      {
        letter: 'D',
        text: '$\\sigma = 140\\text{ MPa}$ e $\\Delta L = 0,40\\text{ mm}$; o Compósito Epóxi-Carbono é o material mais dúctil e mais rígido da tabela por possuir o maior limite de resistência à tração ($1\\,200\\text{ MPa}$).',
      },
      {
        letter: 'E',
        text: '$\\sigma = 56\\text{ MPa}$ e $\\Delta L = 0,16\\text{ mm}$; a rigidez de um material é determinada exclusivamente pelo seu alongamento percentual na ruptura.',
      },
    ],
    correctOption: 'B',
    explanation: `Vamos resolver passo a passo o dimensionamento da haste de Alumínio 6061-T6 e comparar os materiais:

### 1. Tensão Normal Atuante ($\\sigma$)
Lembrando a equivalência prática $1\\text{ N/mm}^2 = 1\\text{ MPa}$ (pois $1\\text{ mm}^2 = 10^{-6}\\text{ m}^2$):
$$\\sigma = \\frac{F}{A_0} = \\frac{2\\,800\\text{ N}}{20\\text{ mm}^2} = \\mathbf{140\\text{ MPa}}$$

### 2. Verificação do Regime Elástico
Como $\\sigma = 140\\text{ MPa} < \\sigma_e = 275\\text{ MPa}$ (fator de segurança ao escoamento $\\approx 1,96$), a haste trabalha integralmente no **regime elástico linear**, obedecendo à Lei de Hooke ($\\sigma = E \\cdot \\varepsilon$) e retornando integralmente a $L_0$ quando a carga é removida.

### 3. Deformação Específica ($\\varepsilon$) e Alongamento Absoluto ($\\Delta L$)
Com $E = 70\\text{ GPa} = 70\\,000\\text{ MPa}$:
$$\\varepsilon = \\frac{\\sigma}{E} = \\frac{140\\text{ MPa}}{70\\,000\\text{ MPa}} = 0,002 \\quad (0,2\\%)$$
$$\\Delta L = \\varepsilon \\cdot L_0 = 0,002 \\times 200\\text{ mm} = \\mathbf{0,40\\text{ mm}}$$

### 4. Interpretação Comparativa das Propriedades Mecânicas
- **Rigidez** (resistência à deformação elástica, dada pelo Módulo de Young $E$): Aço 1020 ($210\\text{ GPa}$) $>$ Compósito ($140\\text{ GPa}$) $>$ Alumínio ($70\\text{ GPa}$).
- **Ductilidade** (capacidade de deformação plástica antes da fratura, dada pelo alongamento na ruptura): Aço 1020 ($25,0\\%$) $>$ Alumínio ($12,0\\%$) $>$ Compósito ($0,9\\%$, **frágil**).
- **Resistência máxima à tração ($\\sigma_r$):** Compósito ($1\\,200\\text{ MPa}$) destaca-se amplamente, porém rompe de forma frágil sem patamar de escoamento.

Portanto, a alternativa correta é **B**.`,
    optionAnalysis: {
      A: 'Incorreta. Erro de fator 10 em ΔL (4,00 mm em vez de 0,40 mm) e erro conceitual ao afirmar deformação plástica quando σ = 140 MPa < σ_e = 275 MPa.',
      B: 'Correta. Tensão 140 MPa, alongamento 0,40 mm em regime elástico e interpretação rigorosa de rigidez (E), ductilidade e fragilidade.',
      C: 'Incorreta. Erra o cálculo da tensão normal (dividiu por 10 mm² em vez de 20 mm²).',
      D: 'Incorreta. Confunde resistência à tração (σ_r) com ductilidade e rigidez — o compósito tem apenas 0,9% de alongamento (frágil) e E = 140 GPa < 210 GPa do aço.',
      E: 'Incorreta. Erra o cálculo da tensão e confunde a definição de rigidez (módulo de elasticidade E) com ductilidade.',
    },
    keyConcept: 'Ensaio de tração uniaxial: tensão normal σ = F/A, Lei de Hooke ΔL = (F·L0)/(E·A), regime elástico vs. escoamento e distinção entre rigidez, resistência e ductilidade.',
  },
];
