import type { StudyModule } from '../types/enade';

export const STUDY_MODULES_PART_2: StudyModule[] = [
  // =========================================================================
  // MÓDULO 1: ELETRICIDADE, CIRCUITOS ELÉTRICOS E ELETRÔNICA ANALÓGICA
  // =========================================================================
  {
    id: 'circuitos-eletronica',
    title: 'Eletricidade, Circuitos Elétricos e Eletrônica Analógica',
    subtitle: 'Leis de Ohm e Kirchhoff, Thévenin, Sensores NTC, Transitórios RC/RL, CA/Fasores, Semicondutores e Amp-Ops',
    estimatedMinutes: 95,
    overview:
      'Domine toda a base de circuitos elétricos e eletrônica analógica exigida do Engenheiro de Computação no ENADE. Você vai sair do zero até resolver com segurança circuitos CC (análise nodal, malhas, Thévenin/Norton), divisores com sensores NTC ligados a ADCs, transitórios RC/RL, sinais senoidais em CA (RMS, fasores, impedância e fator de potência), diodos, transistores BJT/MOSFET e amplificadores operacionais.',
    enadeWeightNote:
      'Disciplina de **alta incidência** no Componente Específico do ENADE, frequentemente cobrada de forma contextualizada em questões objetivas e discursivas — como condicionamento de termistor NTC com ADC (ENADE 2017 D4), leitura de ondas senoidais em CA e valor RMS (ENADE 2019 D5) e eficiência energética/Efeito Joule (ENADE 2017 Q16).',
    sections: [
      {
        id: 'cir-leis-fundamentais',
        title: '1. Leis de Ohm, Kirchhoff (LKC/LKT), Potência e Análise de Circuitos CC',
        content: `### Grandezas Elétricas, Lei de Ohm e Convenção Passiva
A análise de qualquer circuito começa pelas relações fundamentais entre **tensão** ($V$, em volts), **corrente** ($I$, em ampères, fluxo de carga $i = dq/dt$) e **resistência** ($R $, em ohms, $\\Omega$). Na **convenção passiva de sinais**, quando a corrente $I$ entra pelo terminal positivo ($+$) de um elemento, a potência $P = V \\cdot I$ é **absorvida** (dissipada); se $P < 0$, o elemento **fornece** potência ao circuito (como uma fonte).

- **Lei de Ohm**: $V = R \\cdot I$ (válida para resistores ôhmicos/lineares).
- **Potência e Efeito Joule**: $P = V \\cdot I = R I^2 = \\frac{V^2}{R}$ (em watts, $\\text{W}$). Em condutores com resistência $R_{cabo}$, a perda térmica cresce com o **quadrado da corrente** ($P_{perda} = R_{cabo} I^2$) — razão pela qual linhas de transmissão elevam a tensão para reduzir a corrente e minimizar perdas por Efeito Joule.
- **Energia Elétrica**: $E = P \\cdot \\Delta t$ (em Joules quando $P$ está em $\\text{W}$ e $\\Delta t$ em $\\text{s}$, ou em $\\text{kWh}$ para consumo residencial/industrial).

### Associação de Resistores
- **Série** (mesma corrente $I$, tensões se somam): $R_{eq} = R_1 + R_2 + \\dots + R_n$.
- **Paralelo** (mesma tensão $V$, correntes se somam): $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$. Para dois resistores: $R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}$ (o equivalente é **sempre menor** que o menor resistor!). Para $n$ resistores iguais de valor $R $: $R_{eq} = R / n$.

### Leis de Kirchhoff e Métodos Sistemáticos de Análise
- **LKC (Lei de Kirchhoff das Correntes — conservação da carga)**: a soma algébrica das correntes em qualquer nó fechado é zero ($\\sum I_{entra} = \\sum I_{sai}$). É a base da **Análise Nodal** (escolhe-se um nó de referência/terra e escreve-se a LKC em função das tensões nodais).
- **LKT (Lei de Kirchhoff das Tensões — conservação da energia)**: a soma algébrica das diferenças de potencial ao longo de qualquer malha fechada é zero ($\\sum V_{subidas} = \\sum V_{quedas}$). É a base da **Análise de Malhas** (ideal para circuitos planares com fontes de tensão).
- **Princípio da Superposição**: em um circuito **linear** com múltiplas fontes independentes, a tensão ou corrente em qualquer elemento é a soma algébrica das contribuições de cada fonte atuando **isoladamente**, anulando-se as demais:
  - **Fonte de tensão independente anulada** $\\to$ substituída por **curto-circuito** ($V = 0$).
  - **Fonte de corrente independente anulada** $\\to$ substituída por **circuito aberto** ($I = 0$).
  - **Fontes dependentes** $\\to$ **NUNCA** são anuladas!

| Método de Análise | Lei Base | Incógnitas | Quando Preferir |
|---|---|---|---|
| Análise Nodal | LKC ($\\sum I = 0$) | Tensões nos nós ($V_1, V_2, \\dots$) | Circuitos com muitos ramos em paralelo ou fontes de corrente |
| Análise de Malhas | LKT ($\\sum V = 0$) | Correntes de malha ($I_1, I_2, \\dots$) | Circuitos planares com poucas malhas e fontes de tensão |
| Superposição | Linearidade | Tensão ou corrente parcial | Avaliar contribuição isolada de fontes (ex.: sinal CA + polarização CC) |

> **Exemplo Resolvido Passo a Passo (Análise Nodal e Potência):** Um nó central $A$ conecta três ramos: (1) fonte de $12\\text{ V}$ através de $R_1 = 4\\,\\Omega$; (2) resistor $R_2 = 6\\,\\Omega$ ao terra; (3) fonte de corrente de $1\\text{ A}$ entrando no nó $A$. Determine $V_A$, a corrente em $R_2$ e a potência dissipada em $R_2$.
> 1. Aplicando LKC no nó $A$ (soma das correntes que saem = soma das que entram): $\\frac{V_A - 12}{4} + \\frac{V_A}{6} = 1$.
> 2. Multiplicando toda a equação pelo MMC $(12)$: $3(V_A - 12) + 2V_A = 12 \\implies 5V_A - 36 = 12 \\implies 5V_A = 48 \\implies V_A = 9{,}6\\text{ V}$.
> 3. Corrente em $R_2$: $I_{R2} = \\frac{V_A}{R_2} = \\frac{9{,}6}{6} = 1{,}6\\text{ A}$.
> 4. Potência dissipada em $R_2$: $P_{R2} = \\frac{V_A^2}{R_2} = \\frac{9{,}6^2}{6} = \\frac{92{,}16}{6} = 15{,}36\\text{ W}$.`,
        keyFormulas: [
          {
            label: 'Lei de Ohm e Potência CC',
            latex: 'V = R\\cdot I, \\qquad P = V\\cdot I = R I^2 = \\frac{V^2}{R}',
            note: 'Efeito Joule: perdas térmicas crescem quadraticamente com I.',
          },
          {
            label: 'Leis de Kirchhoff (LKC e LKT)',
            latex: '\\sum_{k=1}^{n} I_k = 0 \\;(\\text{nó}), \\qquad \\sum_{k=1}^{m} V_k = 0 \\;(\\text{malha})',
            note: 'LKC expressa conservação de carga; LKT expressa conservação de energia.',
          },
        ],
      },
      {
        id: 'cir-thevenin-divisores-ntc',
        title: '2. Thévenin, Norton, Divisores e Sensores NTC com ADC',
        content: `### Teoremas de Thévenin, Norton e Máxima Transferência de Potência
Qualquer subcircuito linear de dois terminais ($A$ e $B$) pode ser reduzido a um equivalente minimalista sem alterar tensão ou corrente na carga $R_L$:

- **Equivalente de Thévenin**: uma fonte de tensão $V_{Th}$ em **série** com uma resistência $R_{Th}$.
  1. $V_{Th} = V_{AB}$ com a carga removida (**circuito aberto**).
  2. $R_{Th}$ é a resistência equivalente vista dos terminais $A$ e $B$ após anular todas as fontes independentes (tensão $\\to$ curto; corrente $\\to$ aberto). Se houver **fontes dependentes**, aplica-se uma fonte de teste $V_{teste}$ nos terminais e calcula-se $R_{Th} = V_{teste} / I_{teste}$ (ou usa-se $R_{Th} = V_{oc} / I_{sc}$).
- **Equivalente de Norton**: uma fonte de corrente $I_N$ em **paralelo** com $R_N = R_{Th}$, onde $I_N = I_{cc} = \\frac{V_{Th}}{R_{Th}}$ (corrente de curto-circuito entre $A$ e $B$).
- **Máxima Transferência de Potência**: a carga resistiva $R_L$ recebe potência máxima quando há casamento de resistências: $R_L = R_{Th}$. Nesse ponto, $P_{max} = \\frac{V_{Th}^2}{4 R_{Th}}$, e a eficiência energética é exatamente $\\eta = 50\\%$ (metade da potência se dissipa em $R_{Th}$).

### Divisores de Tensão e de Corrente
- **Divisor de Tensão** ($R_1$ e $R_2$ em série alimentados por $V_{in}$, saída sobre $R_2$):
$$V_o = V_{in} \\cdot \\frac{R_2}{R_1 + R_2}$$
  **Atenção ao efeito de carga**: se uma carga $R_L$ de valor comparável a $R_2$ for ligada à saída, substitui-se $R_2$ por $R_2 \\parallel R_L$ na fórmula!
- **Divisor de Corrente** ($R_1$ e $R_2$ em paralelo recebendo corrente total $I_T$):
$$I_1 = I_T \\cdot \\frac{R_2}{R_1 + R_2}, \\qquad I_2 = I_T \\cdot \\frac{R_1}{R_1 + R_2}$$
  Note que a corrente se divide na razão **inversa** das resistências (mais corrente passa pelo caminho de menor resistência).

### Condicionamento de Sensores NTC e Interface com ADC (Clássico ENADE!)
Um **termistor NTC** (*Negative Temperature Coefficient*) é um resistor semicondutor cuja resistência **diminui** de forma exponencial quando a temperatura **aumenta**:
$$R_{NTC}(T) = R_0 \\exp\\!\\left[\\beta\\left(\\frac{1}{T} - \\frac{1}{T_0}\\right)\\right]$$
onde $T$ e $T_0$ estão em **Kelvin** ($T_K = T_{\\text{°C}} + 273{,}15$). Em sistemas embarcados, liga-se o NTC em um **divisor de tensão** alimentado por $V_{ref}$ e lê-se $V_o$ com o conversor analógico-digital (ADC) de $n$ bits:
- **NTC no ramo inferior** (entre $V_o$ e GND, com $R_{fixo}$ ligado a $V_{ref}$): $V_o = V_{ref}\\frac{R_{NTC}}{R_{fixo}+R_{NTC}}$. Quando $T$ sobe, $R_{NTC}$ cai e **$V_o$ diminui**.
- **NTC no ramo superior** (entre $V_{ref}$ e $V_o$, com $R_{fixo}$ ligado ao GND): $V_o = V_{ref}\\frac{R_{fixo}}{R_{fixo}+R_{NTC}}$. Quando $T$ sobe, $R_{NTC}$ cai e **$V_o$ aumenta**.
- **Conversão ADC linear de $n$ bits**: $x = \\frac{V_o}{V_{ref}}(2^n - 1)$. Curiosamente, se o divisor e o ADC compartilham a mesma referência $V_{ref}$ (configuração **raciométrica**), $V_{ref}$ **se cancela** na fórmula: $x = \\frac{R_{inferior}}{R_{superior} + R_{inferior}}(2^n - 1)$, eliminando erros por oscilação na fonte!

> **Exemplo Resolvido Passo a Passo (NTC + ADC 12 bits — Estilo ENADE 2017 D4):** Um divisor alimentado por $V_{ref} = 5\\text{ V}$ tem $R_{fixo} = 10\\text{ k}\\Omega$ no ramo superior e um NTC no ramo inferior, conectado a um ADC de 12 bits ($2^{12}-1 = 4095$). A $25^\\circ\\text{C}$, $R_{NTC} = 10\\text{ k}\\Omega$; a $60^\\circ\\text{C}$, $R_{NTC} = 2{,}5\\text{ k}\\Omega$. Calcule $V_o$ e o código digital $x$ nas duas temperaturas.
> 1. **A $25^\\circ\\text{C}$**: $V_o = 5 \\cdot \\frac{10}{10 + 10} = 2{,}5\\text{ V}$. Código ADC: $x = \\frac{2{,}5}{5} \\cdot 4095 = 2047{,}5 \\approx 2048$.
> 2. **A $60^\\circ\\text{C}$**: $V_o = 5 \\cdot \\frac{2{,}5}{10 + 2{,}5} = 5 \\cdot \\frac{2{,}5}{12{,}5} = 1{,}0\\text{ V}$. Código ADC: $x = \\frac{1{,}0}{5} \\cdot 4095 = 819$.
> 3. **Conclusão**: como o NTC está no ramo inferior, o aumento da temperatura reduz $R_{NTC}$, reduzindo $V_o$ e o valor digital $x$.`,
        keyFormulas: [
          {
            label: 'Equivalência Thévenin-Norton e Máxima Potência',
            latex: 'I_N = \\frac{V_{Th}}{R_{Th}}, \\qquad R_L = R_{Th} \\implies P_{max} = \\frac{V_{Th}^2}{4 R_{Th}}',
            note: 'Na máxima transferência de potência, o rendimento energético é de 50%.',
          },
          {
            label: 'Divisor com Sensor NTC + ADC de n bits (Raciométrico)',
            latex: 'V_o = V_{ref}\\frac{R_{NTC}}{R_{fixo}+R_{NTC}}, \\qquad x = \\frac{V_o}{V_{ref}}(2^n - 1)',
            note: 'A tensão V_ref se cancela no cálculo de R_NTC a partir de x.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'Firmware C: Leitura de Termistor NTC (10 kΩ) via Divisor Resistivo e ADC de 12 bits',
          code: `#include <math.h>
#include <stdint.h>

// Circuito: Vref ---[ R_FIXO (10k) ]---+---[ NTC ]--- GND
//                                       |
//                                      ADC (12 bits: 0..4095)
float adc_para_celsius_ntc(uint16_t adc_raw) {
    const float ADC_MAX = 4095.0f;
    const float R_FIXO  = 10000.0f; // 10 kOhm
    const float R0      = 10000.0f; // R_NTC a 25 °C
    const float T0_K    = 298.15f;  // 25 °C em Kelvin
    const float BETA    = 3950.0f;  // Constante Beta do termistor (K)

    if (adc_raw == 0 || adc_raw >= 4095) return -273.15f; // Protecao contra curto/aberto

    // Relacao raciometrica: Vref se cancela!
    // x / ADC_MAX = R_ntc / (R_fixo + R_ntc) => R_ntc = R_fixo * x / (ADC_MAX - x)
    float r_ntc = R_FIXO * ((float)adc_raw / (ADC_MAX - (float)adc_raw));

    // Equacao Beta invertida: 1/T = 1/T0 + (1/BETA) * ln(R_ntc / R0)
    float inv_T = (1.0f / T0_K) + (1.0f / BETA) * logf(r_ntc / R0);
    return (1.0f / inv_T) - 273.15f;
}`,
        },
      },
      {
        id: 'cir-rc-rl-transitorios',
        title: '3. Circuitos Transitórios RC e RL (1ª Ordem) e Filtros Passivos',
        content: `### Elementos Armazenadores de Energia: Capacitores e Indutores
Diferentemente dos resistores (que dissipam energia), capacitores e indutores armazenam energia nos campos elétrico e magnético, introduzindo memória (equações diferenciais) no circuito:

| Propriedade | Capacitor ($C$, em Farads) | Indutor ($L$, em Henrys) |
|---|---|---|
| Relação $v \\times i$ | $i_C(t) = C\\frac{dv_C}{dt}$ | $v_L(t) = L\\frac{di_L}{dt}$ |
| Variável contínua (não salta!) | **Tensão** $v_C(0^+) = v_C(0^-)$ | **Corrente** $i_L(0^+) = i_L(0^-)$ |
| Energia armazenada | $E_C = \\frac{1}{2} C v_C^2$ | $E_L = \\frac{1}{2} L i_L^2$ |
| Regime Permanente CC ($\\omega = 0$) | **Circuito Aberto** ($i_C = 0$) | **Curto-Circuito** ($v_L = 0$) |
| Alta Frequência ($\\omega \\to \\infty$) | **Curto-Circuito** ($Z_C \\to 0$) | **Circuito Aberto** ($Z_L \\to \\infty$) |
| Constante de tempo $\\tau$ | $\\tau_{RC} = R_{Th} \\cdot C$ | $\\tau_{RL} = \\frac{L}{R_{Th}}$ |

### Equação Universal da Resposta Transitória de 1ª Ordem
Em qualquer circuito RC ou RL submetido a uma mudança brusca (chaveamento em $t = 0$) para uma fonte CC constante, a variável de estado $x(t)$ ($v_C$ no RC ou $i_L$ no RL) evolui exponencialmente segundo a **fórmula geral**:
$$x(t) = x(\\infty) + \\bigl[x(0^+) - x(\\infty)\\bigr] e^{-t/\\tau}, \\qquad t \\ge 0$$
- **$x(0^+)$**: valor imediatamente após o chaveamento (igual a $x(0^-)$ pela continuidade da variável de estado!).
- **$x(\\infty)$**: valor final em regime permanente CC (encontrado substituindo $C$ por aberto ou $L$ por curto).
- **$\\tau$**: constante de tempo vista dos terminais do elemento armazenador ($R_{Th}$ obtido com fontes independentes anuladas).
- **Marcos práticos de decaimento/carga**:
  - Em $t = 1\\tau$: a carga atinge $1 - e^{-1} \\approx \\mathbf{63{,}2\\%}$ do valor final (descarga cai para $36{,}8\\%$).
  - Em $t = 3\\tau$: atinge $\\approx 95{,}0\\%$.
  - Em $t = 5\\tau$: atinge $1 - e^{-5} \\approx \\mathbf{99{,}3\\%}$ — convenção de engenharia para **regime permanente atingido**.

### Filtros Passivos RC (Passa-Baixas e Passa-Altas)
- **Passa-Baixas RC** (saída sobre o capacitor): atenua altas frequências (ruído, anti-aliasing). Função de transferência $H(j\\omega) = \\frac{1}{1 + j\\omega RC}$.
- **Passa-Altas RC** (saída sobre o resistor): bloqueia componente CC e passa altas frequências. Função de transferência $H(j\\omega) = \\frac{j\\omega RC}{1 + j\\omega RC}$.
- **Frequência de Corte ($f_c$)**: ponto em que o ganho cai para $\\frac{1}{\\sqrt{2}} \\approx 0{,}707$ da amplitude máxima (potência cai à metade, ou **$-3\\text{ dB}$**), com defasagem de $\\pm 45^\\circ$:
$$f_c = \\frac{1}{2\\pi R C}$$
Acima de $f_c$ (no passa-baixas), o filtro de 1ª ordem atenua à taxa de **$-20\\text{ dB/década}$** (ou $-6\\text{ dB/oitava}$).

> **Exemplo Resolvido Passo a Passo (Carga de Capacitor RC):** Um capacitor descarregado de $C = 100\\,\\mu\\text{F}$ é ligado em $t = 0$ a uma fonte de $V_s = 5\\text{ V}$ através de $R = 10\\text{ k}\\Omega$. Calcule: (a) a constante de tempo $\\tau$; (b) a tensão $v_C$ em $t = 1\\text{ s}$; (c) o instante em que $v_C$ atinge $4\\text{ V}$; (d) a frequência de corte $f_c$ deste RC como passa-baixas.
> 1. **Constante de tempo**: $\\tau = R \\cdot C = (10 \\times 10^3)(100 \\times 10^{-6}) = 1{,}0\\text{ s}$.
> 2. **Tensão em $t = 1\\text{ s}$**: $v_C(0^+) = 0$, $v_C(\\infty) = 5\\text{ V}$, logo $v_C(t) = 5(1 - e^{-t/1})$. Em $t = 1\\text{ s} = 1\\tau$: $v_C(1) = 5(1 - e^{-1}) \\approx 5 \\cdot 0{,}632 = 3{,}16\\text{ V}$.
> 3. **Tempo para $4\\text{ V}$**: $4 = 5(1 - e^{-t}) \\implies 1 - e^{-t} = 0{,}8 \\implies e^{-t} = 0{,}2 \\implies t = -\\ln(0{,}2) = \\ln(5) \\approx 1{,}61\\text{ s}$.
> 4. **Frequência de corte**: $f_c = \\frac{1}{2\\pi R C} = \\frac{1}{2\\pi \\cdot 1{,}0} \\approx 0{,}159\\text{ Hz}$.`,
        keyFormulas: [
          {
            label: 'Resposta Transitória Geral de 1ª Ordem',
            latex: 'x(t) = x(\\infty) + \\bigl[x(0^+) - x(\\infty)\\bigr]e^{-t/\\tau}, \\qquad \\tau_{RC} = R_{Th}C, \\quad \\tau_{RL} = \\frac{L}{R_{Th}}',
            note: 'Em 5τ o sistema atinge ~99,3% do regime permanente.',
          },
          {
            label: 'Frequência de Corte (-3 dB) de Filtro RC',
            latex: 'f_c = \\frac{1}{2\\pi R C}, \\qquad \\lvert H(j\\omega_c) \\rvert = \\frac{1}{\\sqrt{2}} \\approx 0{,}707',
            note: 'Atenuação de -20 dB/década na banda de rejeição.',
          },
        ],
      },
      {
        id: 'cir-ca-fasores-potencia',
        title: '4. Corrente Alternada (CA), Fasores, Impedância, RMS e Potência',
        content: `### Sinais Senoidais e Valor Eficaz (RMS)
Um sinal senoidal de tensão é descrito por $v(t) = V_m \\sin(2\\pi f t + \\phi) = V_m \\sin(\\omega t + \\phi)$, onde $V_m$ é o **valor de pico** (amplitude), $T$ é o **período**, $f = 1/T$ é a **frequência** (Hz), $\\omega = 2\\pi f$ é a frequência angular (rad/s) e $\\phi$ é a fase inicial.

O **valor eficaz ou RMS** (*Root Mean Square*) representa o valor de tensão CC que dissiparia a **mesma potência média** em um resistor:
$$V_{RMS} = \\sqrt{\\frac{1}{T}\\int_0^T v^2(t)\\,dt} \\xrightarrow{\\text{senoide pura}} V_{RMS} = \\frac{V_m}{\\sqrt{2}} = \\frac{V_m\\sqrt{2}}{2} \\approx 0{,}707\\,V_m$$
- **Sinal CC + CA somados**: se $v(t) = V_{CC} + V_m\\sin(\\omega t)$, então $V_{RMS} = \\sqrt{V_{CC}^2 + (V_m/\\sqrt{2})^2}$.
- **Tensão pico a pico**: $V_{pp} = 2 V_m$, logo $V_{RMS} = \\frac{V_{pp}}{2\\sqrt{2}}$.

### Domínio Fasorial, Impedâncias Complexas e Leitura de Gráficos CA
Em regime permanente senoidal, substituímos derivadas/integrais por álgebra complexa usando **fasores** ($\\mathbf{V} = V_{RMS}\\angle\\theta_v$) e **impedâncias** ($Z = R + jX = \\lvert Z \\rvert \\angle\\varphi$):

| Elemento / Carga | Impedância $Z$ | Reatância $X$ | Relação de Fase ($v(t)$ vs $i(t)$) | Mnêmonico |
|---|---|---|---|---|
| Resistor ($R $) | $Z_R = R \\angle 0^\\circ$ | $X = 0$ | **Em fase** ($\\varphi = 0^\\circ$; cruzam o zero juntos) | $v$ e $i$ alinhados |
| Indutor ($L$) | $Z_L = j\\omega L = \\omega L \\angle +90^\\circ$ | $X_L = +\\omega L$ | **Tensão adianta corrente** em $90^\\circ$ ($i$ atrasada) | **ELI** ($E$ antes de $I$ em $L$) |
| Capacitor ($C$) | $Z_C = \\frac{1}{j\\omega C} = -\\frac{j}{\\omega C} = \\frac{1}{\\omega C}\\angle -90^\\circ$ | $X_C = -\\frac{1}{\\omega C}$ | **Corrente adianta tensão** em $90^\\circ$ ($i$ adiantada) | **ICE** ($I$ antes de $E$ em $C$) |

- **Ressonância RLC série**: ocorre quando $X_L = \\lvert X_C \\rvert$, cancelando a parte imaginária ($Z = R $, corrente máxima e $FP = 1$): $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$.

### Triângulo de Potências e Fator de Potência (FP)
Se $\\varphi = \\theta_v - \\theta_i$ é o ângulo de impedância (positivo para carga indutiva, negativo para capacitiva):
- **Potência Aparente ($S$)**: $S = V_{RMS} I_{RMS}$ (unidade: $\\text{VA}$ — dimensiona transformadores e cabos).
- **Potência Ativa ou Média ($P$)**: $P = V_{RMS} I_{RMS} \\cos\\varphi$ (unidade: $\\text{W}$ — realiza trabalho útil / calor).
- **Potência Reativa ($Q$)**: $Q = V_{RMS} I_{RMS} \\sin\\varphi$ (unidade: $\\text{var}$ — energia que oscila nos campos de $L$ e $C$ sem realizar trabalho líquido).
- **Fator de Potência**: $FP = \\cos\\varphi = \\frac{P}{S} \\in [0, 1]$, sendo **atrasado** (indutivo) ou **adiantado** (capacitivo). Motores industriais são cargas indutivas ($Q > 0$); para **corrigir o FP** (elevá-lo próximo a 1 e reduzir a corrente nos cabos), instala-se um **banco de capacitores em paralelo** que fornece potência reativa negativa ($Q_C < 0$).

> **Exemplo Resolvido Passo a Passo (Circuito RLC em CA + Leitura Gráfica ENADE 2019 D5):**
> **Parte A (Gráfico):** Em um osciloscópio, observa-se $v(t)$ com pico $V_m = 15\\text{ V}$, período $T = 0{,}02\\text{ s}$, e $i(t)$ com pico $I_m = 3\\text{ A}$ atingindo máximos e zeros **nos mesmos instantes** de $v(t)$.
> 1. Frequência: $f = 1/T = 1/0{,}02 = 50\\text{ Hz}$.
> 2. Valores eficazes: $V_{RMS} = \\frac{15}{\\sqrt{2}} = \\frac{15\\sqrt{2}}{2} \\approx 10{,}61\\text{ V}$; $I_{RMS} = \\frac{3}{\\sqrt{2}} \\approx 2{,}12\\text{ A}$.
> 3. Natureza da carga: como $v(t)$ e $i(t)$ estão perfeitamente em fase ($\\varphi = 0^\\circ$), a carga é **puramente resistiva** com $R = V_m/I_m = 15/3 = 5\\,\\Omega$ e $P = V_{RMS}I_{RMS} = 22{,}5\\text{ W}$.
>
> **Parte B (Impedância RL):** Uma carga $R = 30\\,\\Omega$ em série com $X_L = 40\\,\\Omega$ é alimentada por $V_{RMS} = 100\\text{ V}$.
> 1. Impedância: $Z = 30 + j40 \\implies \\lvert Z \\rvert = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$, $\\varphi = \\arctan(40/30) \\approx 53{,}13^\\circ$.
> 2. Corrente: $I_{RMS} = 100 / 50 = 2\\text{ A}$.
> 3. Potências: $S = 100 \\cdot 2 = 200\\text{ VA}$; $FP = \\cos\\varphi = R/\\lvert Z \\rvert = 30/50 = 0{,}6$ (indutivo/atrasado); $P = 200 \\cdot 0{,}6 = 120\\text{ W}$; $Q = 200 \\cdot 0{,}8 = 160\\text{ var}$.`,
        keyFormulas: [
          {
            label: 'Senoide e Valor Eficaz (RMS)',
            latex: 'v(t) = V_m\\sin(2\\pi f t + \\phi), \\qquad V_{RMS} = \\frac{V_m}{\\sqrt{2}} = \\frac{V_m\\sqrt{2}}{2}',
            note: 'Aplica-se a sinais senoidais puros; f = 1/T.',
          },
          {
            label: 'Impedâncias Complexas e Ressonância',
            latex: 'Z_R = R, \\quad Z_L = j\\omega L, \\quad Z_C = \\frac{1}{j\\omega C} = -\\frac{j}{\\omega C}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}',
            note: 'Em Z = R + j(X_L - X_C), ressonância ocorre quando X_L = |X_C|.',
          },
          {
            label: 'Triângulo de Potências e Fator de Potência',
            latex: 'S = V_{RMS}I_{RMS}, \\quad P = S\\cos\\varphi, \\quad Q = S\\sin\\varphi, \\quad S^2 = P^2 + Q^2',
            note: 'FP = cos(φ) = P/S; capacitores em paralelo corrigem FP indutivo.',
          },
        ],
      },
      {
        id: 'cir-diodos-transistores',
        title: '5. Semicondutores: Diodos, Retificadores e Transistores (BJT e MOSFET)',
        content: `### Diodos de Junção PN, Retificadores e Diodo Zener
Um diodo semicondutor conduz corrente facilmente em **polarização direta** (ânodo mais positivo que cátodo acima da barreira de potencial $V_\\gamma \\approx 0{,}7\\text{ V}$ para Silício ou $0{,}3\\text{ V}$ para Germânio) e bloqueia corrente em **polarização reversa** (chave aberta até a tensão de ruptura).

- **LED**: queda direta típica $V_{LED} \\approx 1{,}8\\text{ V}$ (vermelho) a $3{,}3\\text{ V}$ (azul/branco). Sempre exige resistor limitador em série: $R = \\frac{V_{CC} - V_{LED}}{I_{LED}}$.
- **Retificadores CA $\\to$ CC**:
  - **Meia-onda** (1 diodo): conduz apenas no semiciclo positivo; $V_{pico,out} = V_{pico,in} - 0{,}7\\text{ V}$; frequência de ondulação (*ripple*) $f_r = f_{rede}$.
  - **Onda completa em ponte de Graetz** (4 diodos): aproveita os dois semiciclos (dois diodos conduzem em série por semiciclo), logo $V_{pico,out} = V_{pico,in} - 1{,}4\\text{ V}$ e $f_r = 2 f_{rede}$ (exige metade da capacitância de filtro para o mesmo ripple: $V_{ripple} \\approx \\frac{I_{carga}}{f_r C}$).
- **Diodo Zener**: projetado para operar na **região de ruptura reversa** (cátodo positivo em relação ao ânodo), mantendo tensão praticamente constante $V_Z$ sobre a carga. Exige resistor série $R_S$ tal que $I_{RS} = I_Z + I_L$, garantindo $I_{Z,min} \\le I_Z \\le I_{Z,max}$.

### Transistor Bipolar de Junção (BJT — Controlado por Corrente)
O BJT (NPN ou PNP) possui três terminais (**Base**, **Coletor** e **Emissor**) e obedece sempre a $I_E = I_B + I_C$. Suas três regiões de operação (para NPN, com $V_{BE(on)} \\approx 0{,}7\\text{ V}$) são:

| Região do BJT (NPN) | Junção Base-Emissor | Junção Base-Coletor | Comportamento e Equações | Aplicação Típica |
|---|---|---|---|---|
| **Corte** | Reversa ($V_{BE} < 0{,}7\\text{ V}$) | Reversa | $I_B = 0$, $I_C \\approx 0$, $V_{CE} \\approx V_{CC}$ | **Chave aberta** (lógica digital) |
| **Ativa Direta** | Direta ($V_{BE} \\approx 0{,}7\\text{ V}$) | Reversa ($V_{CE} > 0{,}2\\text{ V}$) | $I_C = \\beta I_B$ (corrente proporcional à base) | **Amplificador analógico linear** |
| **Saturação** | Direta ($V_{BE} \\approx 0{,}7\\text{ V}$) | Direta ($V_{CE,sat} \\approx 0{,}2\\text{ V}$) | $I_C = I_{C,sat} < \\beta I_B$ (exige $I_B > I_{C,sat}/\\beta$) | **Chave fechada** (acionamento de cargas) |

### Transistor MOSFET (Controlado por Tensão)
O MOSFET (tipo enriquecimento, canal N ou P — base absoluta dos circuitos integrados **CMOS**!) possui terminais **Gate (Porta)**, **Drain (Dreno)** e **Source (Fonte)**. Como o Gate é isolado por uma fina camada de óxido ($\\text{SiO}_2$), **$I_G \\approx 0$** (impedância de entrada praticamente infinita e baixíssimo consumo estático).

| Região do MOSFET (nMOS) | Condição de Tensão | Equação de $I_D$ | Aplicação Típica |
|---|---|---|---|
| **Corte** | $V_{GS} < V_{th}$ | $I_D = 0$ | **Chave aberta** (CMOS) |
| **Triodo (Ôhmica/Linear)** | $V_{GS} \\ge V_{th}$ e $V_{DS} < V_{GS} - V_{th}$ | Comporta-se como resistor $R_{DS(on)}$ muito baixo | **Chave fechada** (chaveamento/PWM/CMOS) |
| **Saturação** | $V_{GS} \\ge V_{th}$ e $V_{DS} \\ge V_{GS} - V_{th}$ | $I_D = \\frac{1}{2} k_n' \\frac{W}{L} (V_{GS} - V_{th})^2$ (fonte de corrente) | **Amplificador analógico linear** |

> **ATENÇÃO À ARMADILHA TERMINOLÓGICA:** No **BJT**, a região de **Saturação** equivale à *chave fechada* e a região **Ativa** é a de *amplificação*. No **MOSFET**, a região **Ôhmica/Triodo** equivale à *chave fechada* e a região de **Saturação** é a de *amplificação*!

> **Exemplo Resolvido Passo a Passo (BJT NPN como Chave para Microcontrolador):** Um pino GPIO de $3{,}3\\text{ V}$ aciona um BJT NPN ($\\beta = 100$, $V_{BE} = 0{,}7\\text{ V}$, $V_{CE,sat} = 0{,}2\\text{ V}$) através de $R_B = 1\\text{ k}\\Omega$. No coletor há um resistor de carga $R_C = 100\\,\\Omega$ ligado a $V_{CC} = 5\\text{ V}$. O transistor está em região ativa ou em saturação?
> 1. Corrente de base: $I_B = \\frac{3{,}3 - 0{,}7}{1000} = 2{,}6\\text{ mA}$.
> 2. Corrente máxima de coletor (saturação): $I_{C,sat} = \\frac{V_{CC} - V_{CE,sat}}{R_C} = \\frac{5 - 0{,}2}{100} = 48\\text{ mA}$.
> 3. Teste de saturação: $\\beta I_B = 100 \\cdot 2{,}6\\text{ mA} = 260\\text{ mA}$. Como $\\beta I_B \\;(260\\text{ mA}) > I_{C,sat} \\;(48\\text{ mA})$, o BJT está **firmemente saturado** (operando como chave fechada com $I_C = 48\\text{ mA}$ e $V_{CE} = 0{,}2\\text{ V}$)!`,
        keyFormulas: [
          {
            label: 'Relações Fundamentais do BJT',
            latex: 'I_E = I_B + I_C, \\qquad I_C = \\beta I_B \\;(\\text{ativa}), \\qquad I_B > \\frac{I_{C,sat}}{\\beta} \\;(\\text{saturação})',
            note: 'Para silício em condução: V_BE ≈ 0,7 V e V_CE,sat ≈ 0,2 V.',
          },
          {
            label: 'Corrente de Dreno do MOSFET nMOS (Saturação)',
            latex: 'I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2, \\qquad I_G \\approx 0',
            note: 'Válida para V_GS ≥ V_th e V_DS ≥ V_GS - V_th (operação como amplificador).',
          },
        ],
      },
      {
        id: 'cir-ampop',
        title: '6. Amplificadores Operacionais (Amp-Ops): Modelo Ideal e Topologias',
        content: `### O Modelo Ideal e as Duas Regras de Ouro
O Amplificador Operacional (Amp-Op) amplifica a diferença entre a entrada não-inversora ($V^+$) e a inversora ($V^-$): $V_o = A_{OL}(V^+ - V^-)$. No modelo ideal, o ganho em malha aberta $A_{OL} \\to \\infty$, a impedância de entrada $R_{in} \\to \\infty$ e a impedância de saída $R_{out} \\to 0$.

Quando o Amp-Op opera com **realimentação negativa** (caminho resistivo/reativo conectando a saída $V_o$ à entrada inversora $V^-$) e **fora da saturação** ($-V_{CC} < V_o < +V_{CC}$), aplicam-se rigorosamente as **Duas Regras de Ouro**:
1. **Correntes de entrada nulas**: $I^+ = I^- = 0$ (pois $R_{in} \\to \\infty$).
2. **Curto-circuito virtual**: $V^- = V^+$ (pois $V^+ - V^- = V_o / A_{OL} \\to 0$).

> **Cuidado Crítico:** Sem realimentação negativa (malha aberta ou realimentação **positiva**), $V^- \\neq V^+$! O Amp-Op satura rapidamente nos trilhos ($+V_{sat}$ ou $-V_{sat}$), atuando como **Comparador** ou **Disparador de Schmitt** (com histerese para imunidade a ruído).

### Tabela Completa das Topologias Clássicas com Amp-Op Ideal
| Topologia | Equação de Saída ($V_o$) | Impedância de Entrada ($Z_{in}$) | Aplicação Principal |
|---|---|---|---|
| **Buffer (Seguidor)** | $V_o = V_{in}$ ($A_v = +1$) | $\\infty$ | Isolar estágios / eliminar efeito de carga em sensores |
| **Inversor** | $V_o = -\\frac{R_f}{R_{in}} V_{in}$ | $R_{in}$ (terra virtual em $V^-$) | Amplificação/atenuação com inversão de fase ($180^\\circ$) |
| **Não-Inversor** | $V_o = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in}$ | $\\infty$ | Amplificação sempre $\\ge 1$ sem inverter fase |
| **Somador Inversor** | $V_o = -R_f\\left(\\frac{V_1}{R_1} + \\frac{V_2}{R_2} + \\dots\\right)$ | $R_k$ por canal | Mixers de áudio e conversores DAC (pesos binários) |
| **Diferencial (Subtrator)** | $V_o = \\frac{R_2}{R_1}(V_2 - V_1)$ (pares casados) | Finita ($R_1 + R_2$) | Rejeitar ruído de modo comum (base do Amp. de Instrumentação) |
| **Integrador** | $V_o(t) = -\\frac{1}{RC}\\int V_{in}(t)\\,dt$ | $R $ | Filtros ativos passa-baixas, geradores de rampa, controle PID |
| **Derivador** | $V_o(t) = -RC\\frac{dV_{in}(t)}{dt}$ | $1/(j\\omega C)$ | Detecção de bordas rápidas (sensível a ruído de alta frequência) |

### Limitações do Amp-Op Real em Projetos
- **Saturação de saída**: $V_o$ nunca ultrapassa as tensões de alimentação ($\\pm V_{CC}$; em Amp-Ops *rail-to-rail*, chega muito perto delas).
- **Produto Ganho-Largura de Banda ($GBW$)**: $A_v \\cdot BW = \\text{constante}$ — aumentar o ganho fechado reduz proporcionalmente a largura de banda!
- **Slew Rate ($SR $)**: taxa máxima de variação da saída ($\\text{V}/\\mu\\text{s}$); distorce senoides rápidas se $2\\pi f V_m > SR $.

> **Exemplo Resolvido Passo a Passo (Somador Inversor + Teste de Saturação):** Um somador inversor alimentado por $\\pm 12\\text{ V}$ possui $R_f = 20\\text{ k}\\Omega$, $R_1 = 10\\text{ k}\\Omega$ ($V_1 = 2\\text{ V}$) e $R_2 = 5\\text{ k}\\Omega$ ($V_2 = 1{,}5\\text{ V}$). Determine $V_o$. O que ocorreria se $V_2$ subisse para $3\\text{ V}$?
> 1. **Aplicando LKC no nó de terra virtual ($V^- = V^+ = 0\\text{ V}$)**: $\\frac{V_1}{R_1} + \\frac{V_2}{R_2} + \\frac{V_o}{R_f} = 0$.
> 2. **Cálculo para $V_2 = 1{,}5\\text{ V}$**: $V_o = -20\\left(\\frac{2}{10} + \\frac{1{,}5}{5}\\right) = -20(0{,}2 + 0{,}3) = -10\\text{ V}$. Como $-12\\text{ V} < -10\\text{ V} < +12\\text{ V}$, opera na região linear: **$V_o = -10\\text{ V}$**.
> 3. **Cálculo para $V_2 = 3\\text{ V}$**: a fórmula ideal daria $V_o = -20(0{,}2 + 0{,}6) = -16\\text{ V}$, que ultrapassa a alimentação negativa! Logo o Amp-Op **satura em $V_o \\approx -12\\text{ V}$** (ceifamento).`,
        keyFormulas: [
          {
            label: 'Amplificador Inversor e Não-Inversor (Ideal)',
            latex: 'A_{inv} = -\\frac{R_f}{R_{in}}, \\qquad A_{n\\text{-}inv} = 1 + \\frac{R_f}{R_1}',
            note: 'Requer realimentação negativa e saída dentro dos trilhos ±V_sat.',
          },
          {
            label: 'Somador Inversor e Produto Ganho-Banda',
            latex: 'V_o = -R_f\\sum_{k=1}^{n}\\frac{V_k}{R_k}, \\qquad GBW = \\lvert A_v \\rvert \\cdot f_c = \\text{constante}',
            note: 'Ganho maior implica menor largura de banda no Amp-Op real.',
          },
        ],
        codeExample: {
          language: 'python',
          title: 'Python: Solucionador Nodal Matricial (G·V = I) e Dimensionamento de Amp-Op',
          code: `import numpy as np

# Exemplo: Analise Nodal do Circuito da Secao 1
# No A conectado a: V1=12V via R1=4 Ohm, R2=6 Ohm ao GND, e fonte I=1A entrando em A
# LKC: (1/4 + 1/6)*VA = 12/4 + 1
G = np.array([[1/4 + 1/6]])
I_vec = np.array([12/4 + 1.0])
V_nodal = np.linalg.solve(G, I_vec)
print(f"Tensao Nodal VA = {V_nodal[0]:.2f} V")  # 9.60 V

# Projeto rapido: Amplificador Nao-Inversor para escalar sensor 0..100 mV -> 0..3.3 V
v_sensor_max, v_adc_max = 0.100, 3.3
ganho_desejado = v_adc_max / v_sensor_max  # 33.0
R1 = 1000.0  # 1 kOhm
Rf = R1 * (ganho_desejado - 1.0)           # 32 kOhm
print(f"Ganho = {ganho_desejado:.1f}x => R1 = {R1/1e3:.1f} kOhm, Rf = {Rf/1e3:.1f} kOhm")`,
        },
      },
    ],
    inepTraps: [
      'Confundir tensão de pico ($V_m$) com valor eficaz ($V_{RMS} = V_m/\\sqrt{2}$) ao ler gráficos de osciloscópio em CA (ENADE 2019 D5!), ou esquecer que $v(t)$ e $i(t)$ em fase indicam carga puramente resistiva.',
      'Inverter o comportamento do termistor NTC: NTC (*Negative Temperature Coefficient*) **diminui** a resistência quando a temperatura aumenta. Se o NTC está no ramo inferior do divisor de tensão, $V_o$ **cai** com o aquecimento; se está no ramo superior, $V_o$ **sobe**.',
      'Aplicar o curto-circuito virtual ($V^+ = V^-$) em um Amp-Op **sem realimentação negativa** (como em comparadores ou Schmitt Triggers) ou ignorar que $V_o$ satura nos trilhos de alimentação $\\pm V_{CC}$.',
      'Trocar a terminologia das regiões entre BJT e MOSFET: no **BJT**, *Saturação* = chave fechada e *Ativa* = amplificador; no **MOSFET**, *Triodo/Ôhmica* = chave fechada e *Saturação* = amplificador!',
      'Aplicar o Princípio da Superposição diretamente à **potência** ($P \\neq P_1 + P_2$, pois $P = R I^2$ é quadrática/não-linear!) ou anular erroneamente fontes dependentes ao calcular $R_{Th}$.',
    ],
    quickChecklist: [
      'Sei aplicar LKC (análise nodal) e LKT (análise de malhas) e calcular potência $P = VI = RI^2 = V^2/R $?',
      'Lembro como anular fontes no Thévenin/Superposição (tensão $\\to$ curto; corrente $\\to$ aberto; dependentes ficam)?',
      'Sei relacionar um divisor resistivo com sensor NTC à equação linear do ADC de $n$ bits ($2^n - 1$)?',
      'Sei que em regime permanente CC o capacitor é circuito aberto e o indutor é curto-circuito, e que $\\tau_{RC}=RC$, $\\tau_{RL}=L/R $?',
      'Domino o cálculo de $V_{RMS} = V_m/\\sqrt{2}$, impedâncias $Z_L = j\\omega L$ e $Z_C = -j/(\\omega C)$, ELI/ICE e fator de potência $FP = \\cos\\varphi$?',
      'Sei dimensionar resistor limitador para LED/Zener e verificar se um BJT está em corte, região ativa ($I_C=\\beta I_B$) ou saturação?',
      'Sei distinguir as regiões de corte, triodo e saturação do MOSFET e lembrar que $I_G \\approx 0$?',
      'Sei deduzir de cabeça os ganhos do Amp-Op inversor ($-R_f/R_{in}$), não-inversor ($1+R_f/R_1$), buffer ($1$) e somador inversor?',
    ],
  },

  // =========================================================================
  // MÓDULO 2: SINAIS, SISTEMAS, CONTROLE E COMPUTAÇÃO GRÁFICA
  // =========================================================================
  {
    id: 'sinais-controle-cg',
    title: 'Sinais, Sistemas, Controle e Computação Gráfica',
    subtitle: 'Sistemas LTI, Laplace e Transformada Z, Estabilidade Discreta vs Contínua, FIR/IIR, Nyquist, PID, OpenGL 4.0 e Iluminação',
    estimatedMinutes: 95,
    overview:
      'Domine o eixo interdisciplinar de processamento de sinais, engenharia de controle e computação gráfica do ENADE. Estude com clareza matemática e intuição física sistemas LTI, convolução, Transformada de Laplace e Transformada Z, o critério de estabilidade no plano s versus círculo unitário no plano z, amostragem de Nyquist, filtros FIR/IIR, controladores PID, matrizes homogêneas 2D/3D, pipeline OpenGL 4.0 e sombreamento Phong versus Gouraud.',
    enadeWeightNote:
      'Disciplina estratégica de **alto poder diferenciador** no ENADE: questões como estabilidade de filtros digitais no plano $z$ ($\\lvert z \\rvert < 1$, ENADE 2017 Q23) e estágios do pipeline gráfico OpenGL 4.0 (ENADE 2017 Q32) derrubam grande parte dos candidatos por pegadinhas conceituais diretas.',
    sections: [
      {
        id: 'sin-lti-convolucao',
        title: '1. Sinais, Sistemas LTI (Contínuos e Discretos) e Convolução',
        content: `### Classificação de Sinais e Sinais Elementares
Sinais representam variações físicas no tempo contínuo $x(t)$ (com $t \\in \\mathbb{R}$) ou no tempo discreto $x[n]$ (com $n \\in \\mathbb{Z}$, obtido por amostragem $x[n] = x(nT_s)$):
- **Periodicidade**: em tempo contínuo, toda senoide $\\cos(\\omega_0 t)$ é periódica com $T = 2\\pi/\\omega_0$. **Atenção no tempo discreto**: $\\cos(\\omega_0 n)$ só é periódica se $\\frac{\\omega_0}{2\\pi} = \\frac{k}{N} \\in \\mathbb{Q}$ (razão racional), tendo período fundamental $N$ inteiro!
- **Impulso Unitário**: no contínuo, o delta de Dirac $\\delta(t)$ satisfaz $\\int_{-\\infty}^{\\infty} \\delta(t)\\,dt = 1$ e a **propriedade da amostragem** $\\int_{-\\infty}^{\\infty} x(t)\\delta(t - t_0)\\,dt = x(t_0)$. No discreto, $\\delta[n] = 1$ apenas para $n = 0$ e $0$ nos demais instantes.
- **Degrau Unitário**: $u(t) = 1$ para $t \\ge 0$ (e $0$ para $t < 0$); relação fundamental: $\\delta(t) = \\frac{du(t)}{dt}$ e $\\delta[n] = u[n] - u[n-1]$.

### Propriedades de Sistemas e Caracterização LTI
Um sistema transforma entrada $x$ em saída $y = \\mathcal{T}\\{x\\}$. As quatro propriedades mais cobradas são:
1. **Linearidade**: satisfaz **aditividade** e **homogeneidade** (superposição): $\\mathcal{T}\\{a x_1 + b x_2\\} = a\\mathcal{T}\\{x_1\\} + b\\mathcal{T}\\{x_2\\}$. (Atenção: $y(t) = 2x(t) + 3$ **NÃO** é linear por causa do termo constante $+3$, pois entrada zero não produz saída zero!).
2. **Invariância no Tempo (IT)**: deslocar a entrada em $t_0$ desloca a saída exatamente em $t_0$: $x(t - t_0) \\to y(t - t_0)$. (Ex.: $y(t) = t \\cdot x(t)$ é variante no tempo).
3. **Causalidade**: a saída em $t_0$ depende apenas de entradas presentes e passadas ($t \\le t_0$). Para sistemas LTI, equivale a **$h(t) = 0$ para $t < 0$** (ou $h[n] = 0$ para $n < 0$).
4. **Estabilidade BIBO** (*Bounded-Input, Bounded-Output*): toda entrada limitada gera saída limitada. Para sistemas LTI, a condição necessária e suficiente é que a resposta ao impulso seja absolutamente integrável/somável:
$$\\int_{-\\infty}^{\\infty} \\lvert h(t) \\rvert\\,dt < \\infty \\qquad \\text{ou} \\qquad \\sum_{n=-\\infty}^{\\infty} \\lvert h[n] \\rvert < \\infty$$

### Resposta ao Impulso e Convolução
Um sistema **LTI** (*Linear e Invariante no Tempo*) é **completamente caracterizado** por sua resposta ao impulso $h(t)$ (ou $h[n]$). Para qualquer entrada arbitrária, a saída é dada pela **convolução**:
$$y(t) = (x * h)(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\,h(t - \\tau)\\,d\\tau, \\qquad y[n] = (x * h)[n] = \\sum_{k=-\\infty}^{\\infty} x[k]\\,h[n - k]$$
A convolução é **comutativa** ($x * h = h * x$), **associativa** (sistemas em cascata têm $h_{eq} = h_1 * h_2$) e **distributiva** (sistemas em paralelo têm $h_{eq} = h_1 + h_2$). Mais importante: **convolução no tempo vira multiplicação simples nos domínios de Laplace, Fourier e Z**!

> **Exemplo Resolvido Passo a Passo (Convolução Discreta):** Um sistema LTI discreto causal possui resposta ao impulso $h[n] = \\{1, -1, 2\\}$ (para $n = 0, 1, 2$) e recebe a entrada $x[n] = \\{2, 3\\}$ (para $n = 0, 1$). Calcule a saída $y[n]$ para todos os instantes.
> 1. O comprimento da saída finita é $L_y = L_x + L_h - 1 = 2 + 3 - 1 = 4$ amostras ($n = 0, 1, 2, 3$).
> 2. Escrevendo $x[n] = 2\\delta[n] + 3\\delta[n-1]$ e usando linearidade + invariância no tempo: $y[n] = 2h[n] + 3h[n-1]$:
>    - $n = 0$: $y[0] = 2(1) + 3(0) = 2$
>    - $n = 1$: $y[1] = 2(-1) + 3(1) = 1$
>    - $n = 2$: $y[2] = 2(2) + 3(-1) = 1$
>    - $n = 3$: $y[3] = 2(0) + 3(2) = 6$
> 3. Resultado final: **$y[n] = \\{2, 1, 1, 6\\}$** (e $0$ fora de $0 \\le n \\le 3$).`,
        keyFormulas: [
          {
            label: 'Convolução Contínua e Discreta (Sistemas LTI)',
            latex: 'y(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)\\,d\\tau, \\qquad y[n] = \\sum_{k=-\\infty}^{\\infty} x[k]h[n-k]',
            note: 'Sistemas LTI em série convolvem h₁*h₂; em paralelo somam h₁+h₂.',
          },
          {
            label: 'Critério de Estabilidade BIBO no Tempo',
            latex: '\\int_{-\\infty}^{\\infty}\\lvert h(t)\\rvert\\,dt < \\infty \\;(\\text{contínuo}), \\qquad \\sum_{n=-\\infty}^{\\infty}\\lvert h[n]\\rvert < \\infty \\;(\\text{discreto})',
            note: 'Condição necessária e suficiente para estabilidade BIBO de sistemas LTI.',
          },
        ],
      },
      {
        id: 'sin-laplace-z-estabilidade',
        title: '2. Transformada de Laplace, Transformada Z e Estabilidade (Plano s vs Plano z)',
        content: `### Transformada de Laplace (Sistemas Contínuos)
A Transformada de Laplace unilateral converte equações diferenciais ordinárias (EDOs) em equações algébricas polinomiais na variável complexa $s = \\sigma + j\\omega$:
$$X(s) = \\mathcal{L}\\{x(t)\\} = \\int_{0^-}^{\\infty} x(t)\\,e^{-st}\\,dt$$
- **Propriedade da Derivada**: $\\mathcal{L}\\{\\dot{x}(t)\\} = sX(s) - x(0^-)$ e $\\mathcal{L}\\{\\ddot{x}(t)\\} = s^2 X(s) - sx(0^-) - \\dot{x}(0^-)$.
- **Pares Essenciais**: $\\delta(t) \\leftrightarrow 1$; $u(t) \\leftrightarrow \\frac{1}{s}$; $e^{-at}u(t) \\leftrightarrow \\frac{1}{s+a}$; $t e^{-at}u(t) \\leftrightarrow \\frac{1}{(s+a)^2}$; $\\sin(\\omega t)u(t) \\leftrightarrow \\frac{\\omega}{s^2+\\omega^2}$; $\\cos(\\omega t)u(t) \\leftrightarrow \\frac{s}{s^2+\\omega^2}$.
- **Função de Transferência**: com condições iniciais nulas, $H(s) = \\frac{Y(s)}{X(s)} = \\frac{N(s)}{D(s)}$. As raízes de $N(s) = 0$ são os **zeros** e as raízes de $D(s) = 0$ são os **polos** do sistema!
- **Teorema do Valor Final (TVF)**: $\\lim_{t\\to\\infty} x(t) = \\lim_{s\\to 0} sX(s)$ — **VÁLIDO SOMENTE** se todos os polos de $sX(s)$ tiverem parte real estritamente negativa ($\\text{Re}(s) < 0$)!

### Transformada Z (Sistemas Discretos)
No tempo discreto, a Transformada Z converte equações a diferenças em funções racionais da variável complexa $z = r e^{j\\Omega}$:
$$X(z) = \\mathcal{Z}\\{x[n]\\} = \\sum_{n=0}^{\\infty} x[n]\\,z^{-n}$$
- **Propriedade do Atraso**: um atraso de $k$ amostras ($x[n-k]$) corresponde a multiplicar por **$z^{-k}$**!
- **Par Fundamental**: $a^n u[n] \\leftrightarrow \\frac{1}{1 - a z^{-1}} = \\frac{z}{z - a}$, com Região de Convergência (RDC) $\\lvert z \\rvert > \\lvert a \\rvert$.

### Mapeamento $z = e^{sT_s}$ e Critérios de Estabilidade (PEGADINHA MÁXIMA DO ENADE!)
Ao discretizar um sistema contínuo com período de amostragem $T_s$, os planos $s$ e $z$ se relacionam por **$z = e^{s T_s} = e^{(\\sigma + j\\omega)T_s} = e^{\\sigma T_s}\\,e^{j\\omega T_s}$**. Observe a magnitude $\\lvert z \\rvert = e^{\\sigma T_s}$:
- Se $\\sigma = \\text{Re}(s) < 0$ (semiplano esquerdo do plano $s$), então $e^{\\sigma T_s} < 1 \\implies \\lvert z \\rvert < 1$ (**interior do círculo unitário**!).
- Se $\\sigma = 0$ (eixo imaginário $j\\omega$), então $\\lvert z \\rvert = 1$ (**sobre a circunferência unitária**!).
- Se $\\sigma > 0$ (semiplano direito), então $\\lvert z \\rvert > 1$ (**exterior do círculo unitário**!).

| Critério / Regime | Sistema Contínuo Causal (Plano $s$) | Sistema Discreto Causal (Plano $z$) |
|---|---|---|
| **Assintoticamente Estável (BIBO)** | Todos os polos no **semiplano esquerdo**: $\\text{Re}(p_i) < 0$ | Todos os polos **estritamente dentro do círculo unitário**: $\\lvert z_i \\rvert < 1$ |
| **Marginalmente Estável** | Polos simples sobre o eixo $j\\omega$ ($\\text{Re}(p_i) = 0$) e demais à esquerda | Polos simples sobre o círculo unitário ($\\lvert z_i \\rvert = 1$) e demais dentro |
| **Instável** | Algum polo com $\\text{Re}(p_i) > 0$ ou polo repetido sobre $j\\omega$ | Algum polo com $\\lvert z_i \\rvert > 1$ ou polo repetido sobre $\\lvert z \\rvert = 1$ |
| **Espaço de Estados ($A$)** | Autovalores de $A$ com $\\text{Re}(\\lambda_i) < 0$ | Autovalores de $A$ com $\\lvert \\lambda_i \\rvert < 1$ |
| **Teste Algébrico** | Critério de **Routh-Hurwitz** | Critério de **Jury** |

> **Exemplo Resolvido Passo a Passo (Estabilidade no Plano $z$ — Estilo ENADE 2017 Q23):** Analise a estabilidade dos dois sistemas discretos causais abaixo:
> **(a)** $y[n] - 0{,}5y[n-1] + 0{,}5y[n-2] = x[n]$; e **(b)** $H_2(z) = \\frac{z}{z + 1{,}5}$.
> 1. **Sistema (a)**: aplicando Transformada Z, $Y(z)(1 - 0{,}5z^{-1} + 0{,}5z^{-2}) = X(z) \\implies H_1(z) = \\frac{z^2}{z^2 - 0{,}5z + 0{,}5}$.
> 2. Encontrando os polos por Bhaskara: $z = \\frac{0{,}5 \\pm \\sqrt{0{,}25 - 2}}{2} = 0{,}25 \\pm j\\frac{\\sqrt{7}}{4}$.
> 3. Módulo dos polos: $\\lvert z \\rvert = \\sqrt{(0{,}25)^2 + \\frac{7}{16}} = \\sqrt{\\frac{1}{16} + \\frac{7}{16}} = \\sqrt{0{,}5} \\approx 0{,}707 < 1$. Como **ambos os polos estão dentro do círculo unitário**, o sistema (a) é **ASSINTOTICAMENTE ESTÁVEL** (note que $\\text{Re}(z) = +0{,}25 > 0$, mas no plano $z$ o sinal da parte real NÃO importa, e sim o módulo $\\lvert z \\rvert$!).
> 4. **Sistema (b)**: polo único em $z_1 = -1{,}5$. Embora esteja no semiplano esquerdo ($\\text{Re}(z) < 0$), seu módulo é $\\lvert z_1 \\rvert = 1{,}5 > 1$ (fora do círculo unitário!). Sua resposta ao impulso é $(-1{,}5)^n u[n]$, que diverge oscilando. Logo, o sistema (b) é **INSTÁVEL**!`,
        keyFormulas: [
          {
            label: 'Mapeamento Plano s ↔ Plano z e Estabilidade',
            latex: 'z = e^{s T_s}, \\qquad \\text{Contínuo: } \\text{Re}(p_i) < 0 \\;\\Longleftrightarrow\\; \\text{Discreto: } \\lvert z_i \\rvert < 1',
            note: 'No plano z, polos com Re(z) > 0 podem ser estáveis (se |z|<1) e polos com Re(z) < -1 são INSTÁVEIS!',
          },
          {
            label: 'Teorema do Valor Final (Laplace e Z)',
            latex: '\\lim_{t\\to\\infty} x(t) = \\lim_{s\\to 0} sX(s), \\qquad \\lim_{n\\to\\infty} x[n] = \\lim_{z\\to 1}(1 - z^{-1})X(z)',
            note: 'Somente aplicável se o limite existir (sistema estável!).',
          },
        ],
      },
      {
        id: 'sin-nyquist-filtros',
        title: '3. Amostragem de Nyquist-Shannon, Aliasing e Filtros Digitais (FIR vs IIR)',
        content: `### Transformada de Fourier e Teorema da Amostragem de Nyquist
A Transformada de Fourier $X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}dt$ decompõe um sinal em suas componentes espectrais (frequências). Em sistemas digitais, calcula-se a **DFT** em tempo $O(N \\log N)$ usando a **FFT** (*Fast Fourier Transform*), cuja resolução espectral entre *bins* consecutivos é $\\Delta f = \\frac{f_s}{N}$.

Ao amostrar um sinal contínuo de largura de banda limitada em $f_{max}$ à taxa $f_s = 1/T_s$, seu espectro se replica periodicamente a cada múltiplo inteiro de $f_s$. Para reconstruir o sinal original **sem perda de informação**, deve-se obedecer ao **Teorema de Nyquist-Shannon**:
$$f_s > 2\\,f_{max} \\qquad \\Longleftrightarrow \\qquad f_{max} < f_N = \\frac{f_s}{2}$$
- **Aliasing (Sobreposição Espectral)**: se $f_s \\le 2 f_{max}$, as réplicas espectrais se sobrepõem e frequências altas acima de $f_s/2$ se "disfarçam" como frequências baixas falsas ($f_{alias} = \\lvert f - k f_s \\rvert$ para o inteiro $k$ que traz o resultado a $[0, f_s/2]$). Uma vez ocorrido o aliasing na amostragem, **nenhum filtro digital consegue removê-lo**!
- **Filtro Anti-Aliasing**: por isso, coloca-se obrigatoriamente um **filtro passa-baixas ANALÓGICO** *antes* do conversor A/D para cortar frequências acima de $f_s/2$.
- **Quantização**: um ADC de $B$ bits introduz ruído de quantização cuja relação sinal-ruído máxima (para senoide em fundo de escala) é $\\text{SQNR}_{dB} \\approx 6{,}02\\,B + 1{,}76\\text{ dB}$ (~6 dB extras por bit).

### Filtros Digitais: FIR vs IIR
Um filtro digital linear invariante no tempo é implementado por uma **equação a diferenças**:
$$y[n] = \\sum_{k=0}^{M} b_k\\, x[n-k] - \\sum_{k=1}^{N} a_k\\, y[n-k] \\quad \\Longleftrightarrow \\quad H(z) = \\frac{\\sum_{k=0}^{M} b_k z^{-k}}{1 + \\sum_{k=1}^{N} a_k z^{-k}}$$

| Característica | Filtro FIR (*Finite Impulse Response*) | Filtro IIR (*Infinite Impulse Response*) |
|---|---|---|
| Estrutura | **Não-recursivo** ($a_k = 0$): usa apenas entradas $x[n-k]$ | **Recursivo** ($a_k \\neq 0$): realimenta saídas passadas $y[n-k]$ |
| Polos de $H(z)$ | Apenas na origem $z = 0$ (polos triviais) | Polos arbitrários no plano $z$ (podem sair do círculo!) |
| **Estabilidade** | **SEMPRE estável** (BIBO garantida) | **Pode ser instável** (exige todos os polos com $\\lvert z_i \\rvert < 1$) |
| **Resposta de Fase** | Pode ter **fase exatamente linear** (coeficientes simétricos $b_k = b_{M-k}$, sem distorção de forma de onda) | **Fase não-linear** (atraso de grupo varia com a frequência) |
| Ordem e Custo Computacional | Exige ordem **maior** (mais multiplicações e atraso) para corte abrupto | Atinge a mesma seletividade com ordem **muito menor** (ex.: Butterworth, Chebyshev) |
| Sensibilidade a Quantização | Baixa (robusto em ponto fixo) | Alta (arredondamento de coeficientes pode deslocar polos para fora de $\\lvert z \\rvert < 1$) |

> **Exemplo Resolvido Passo a Passo (Aliasing e Filtro Média Móvel FIR):**
> **(a) Aliasing**: uma senoide de $700\\text{ Hz}$ é amostrada a $f_s = 1000\\text{ Hz}$ (sem filtro anti-aliasing). Qual frequência aparente surge no sinal digital?
> Como $f_N = f_s/2 = 500\\text{ Hz}$ e $700 > 500$, há aliasing: $f_{alias} = \\lvert 700 - 1 \\cdot 1000 \\rvert = \\mathbf{300\\text{ Hz}}$.
>
> **(b) Filtro FIR**: analise $y[n] = 0{,}5x[n] + 0{,}5x[n-1]$.
> 1. Função de transferência: $H(z) = 0{,}5 + 0{,}5z^{-1}$. Como não há $y[n-k]$, é um filtro **FIR** de ordem 1 (sempre estável, polo único em $z=0$).
> 2. Em CC ($\\Omega = 0 \\implies z = e^{j0} = 1$): $H(1) = 0{,}5 + 0{,}5 = 1$ (ganho unitário).
> 3. Na frequência de Nyquist ($\\Omega = \\pi \\implies z = e^{j\\pi} = -1$): $H(-1) = 0{,}5 - 0{,}5 = 0$ (atenuação total!). Logo, é um filtro **passa-baixas**!`,
        keyFormulas: [
          {
            label: 'Teorema de Nyquist-Shannon e Resolução FFT',
            latex: 'f_s > 2\\,f_{max}, \\qquad f_{alias} = \\lvert f - k f_s \\rvert, \\qquad \\Delta f = \\frac{f_s}{N}',
            note: 'Sempre filtrar analogicamente abaixo de f_s/2 ANTES do ADC.',
          },
          {
            label: 'Equação a Diferenças Geral (FIR: a_k = 0; IIR: a_k ≠ 0)',
            latex: 'y[n] = \\sum_{k=0}^{M} b_k x[n-k] - \\sum_{k=1}^{N} a_k y[n-k]',
            note: 'Avaliar H(e^{jΩ}) em z=1 (CC) e z=-1 (Nyquist) revela rapidamente se é passa-baixas ou passa-altas.',
          },
        ],
        codeExample: {
          language: 'c',
          title: 'C Embarcado: Filtro FIR (Média Móvel) e Filtro IIR Passa-Baixas de 1ª Ordem',
          code: `#define FIR_TAPS 4

// Filtro FIR de 4 coeficientes simetricos (fase linear, sempre estavel)
float fir_filter(float x_novo) {
    static float buf[FIR_TAPS] = {0};
    static const float b[FIR_TAPS] = {0.15f, 0.35f, 0.35f, 0.15f};

    for (int i = FIR_TAPS - 1; i > 0; i--) {
        buf[i] = buf[i - 1]; // desloca amostras passadas
    }
    buf[0] = x_novo;

    float y = 0.0f;
    for (int i = 0; i < FIR_TAPS; i++) {
        y += b[i] * buf[i];
    }
    return y;
}

// Filtro IIR (recursivo): y[n] = alpha*x[n] + (1 - alpha)*y[n-1]
// Polo unico em z = (1 - alpha). Estavel se |1 - alpha| < 1 => 0 < alpha < 2.
float iir_lowpass(float x_novo, float alpha) {
    static float y_prev = 0.0f;
    float y = alpha * x_novo + (1.0f - alpha) * y_prev;
    y_prev = y;
    return y;
}`,
        },
      },
      {
        id: 'sin-controle-pid',
        title: '4. Sistemas de Controle em Malha Fechada, Routh-Hurwitz e Controlador PID',
        content: `### Malha Aberta vs Malha Fechada e Álgebra de Blocos
- **Controle em Malha Aberta**: atua sem medir a saída (ex.: torradeira com temporizador). É simples e sempre estável se a planta for estável, porém **não corrige perturbações externas** nem variações de parâmetros da planta.
- **Controle em Malha Fechada (Realimentação Negativa)**: um sensor $H(s)$ mede a saída $Y(s)$ e subtrai da referência $R(s)$, gerando o sinal de **erro** $E(s) = R(s) - H(s)Y(s)$ que alimenta o controlador + planta $G(s)$. Reduz erro em regime permanente, rejeita perturbações e melhora a velocidade de resposta — ao custo de maior complexidade e **risco de instabilidade**!
$$T(s) = \\frac{Y(s)}{R(s)} = \\frac{G(s)}{1 + G(s)H(s)} \\qquad (\\text{equação característica: } 1 + G(s)H(s) = 0)$$
*(Se a realimentação for positiva, o sinal no denominador muda para $1 - G(s)H(s)$.)*

### Sistemas de 2ª Ordem e Erro em Regime Permanente
A forma canônica de um sistema de 2ª ordem é $T(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta\\omega_n s + \\omega_n^2}$, onde $\\omega_n$ é a frequência natural não-amortecida e $\\zeta$ é o **fator de amortecimento**:
- $\\zeta = 0$: **não amortecido** (oscilação sustentada, polos sobre o eixo $j\\omega$).
- $0 < \\zeta < 1$: **subamortecido** (oscila e converge; sobressinal $M_p = e^{-\\pi\\zeta / \\sqrt{1-\\zeta^2}}$; tempo de acomodação a $2\\%$ $t_s \\approx \\frac{4}{\\zeta\\omega_n}$).
- $\\zeta = 1$: **criticamente amortecido** (convergência mais rápida possível sem oscilação/sobressinal).
- $\\zeta > 1$: **superamortecido** (lento, sem oscilação, dois polos reais distintos).

Para realimentação unitária ($H(s) = 1$), o **Tipo do Sistema** ($N$) é o número de polos na origem ($1/s$, integradores) em $G(s)$:
- **Tipo 0**: erro ao degrau finito $e_{ss} = \\frac{1}{1 + K_p}$ (onde $K_p = \\lim_{s\\to 0} G(s)$); erro à rampa $= \\infty$.
- **Tipo 1**: erro ao degrau $= \\mathbf{0}$; erro à rampa finito $e_{ss} = \\frac{1}{K_v}$ (onde $K_v = \\lim_{s\\to 0} sG(s)$).
- **Tipo 2**: erro ao degrau $= 0$ e erro à rampa $= 0$; erro à parábola finito.

### Controlador PID e Efeitos dos Ganhos
O controlador PID combina passado (Integral), presente (Proporcional) e tendência futura (Derivativa) do erro:
$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau)\\,d\\tau + K_d \\frac{de(t)}{dt} \\quad \\Longleftrightarrow \\quad C(s) = K_p + \\frac{K_i}{s} + K_d s$$

| Aumento do Ganho | Tempo de Subida | Sobressinal ($M_p$) | Tempo de Acomodação | Erro em Regime Permanente | Observação Crítica |
|---|---|---|---|---|---|
| **Proporcional ($K_p$)** | Diminui (mais rápido) | Aumenta | Pouca mudança | Diminui (mas não zera em Tipo 0) | Ganho excessivo pode instabilizar |
| **Integral ($K_i$)** | Diminui | Aumenta bastante | Aumenta | **ELIMINA ($e_{ss} = 0$ ao degrau)** | Adiciona polo na origem; sujeito a *integrator windup* |
| **Derivativo ($K_d$)** | Pouca mudança | **Diminui** (aumenta amortecimento) | **Diminui** | Sem efeito direto | Amplifica **ruído de alta frequência** do sensor! |

### Critério de Estabilidade de Routh-Hurwitz
Para um polinômio característico $a_n s^n + a_{n-1}s^{n-1} + \\dots + a_0 = 0$:
- **Condição necessária**: todos os coeficientes devem existir e ter o **mesmo sinal** (se faltar termo ou houver sinal trocado, já é instável!).
- **Condição necessária e suficiente**: construir a tabela de Routh; o sistema é estável se e somente se **todos os elementos da 1ª coluna tiverem o mesmo sinal** (o número de trocas de sinal na 1ª coluna é exatamente o número de polos no semiplano direito!). Para 3º grau $a_3 s^3 + a_2 s^2 + a_1 s + a_0 = 0$ (todos $>0$), basta verificar **$a_2 a_1 > a_3 a_0$**!

> **Exemplo Resolvido Passo a Passo (Routh-Hurwitz em Malha Fechada):** Uma planta $G(s) = \\frac{K}{s(s+1)(s+2)}$ é controlada em malha fechada com realimentação unitária ($H(s)=1$). Para quais valores de $K > 0$ o sistema é estável? Qual o erro ao degrau unitário quando estável?
> 1. Equação característica: $1 + G(s) = 0 \\implies s(s+1)(s+2) + K = 0 \\implies s^3 + 3s^2 + 2s + K = 0$.
> 2. Aplicando a regra de 3º grau de Routh-Hurwitz ($a_3=1, a_2=3, a_1=2, a_0=K$):
>    - Todos os coeficientes positivos: $K > 0$.
>    - Condição da 1ª coluna ($a_2 a_1 > a_3 a_0$): $3 \\cdot 2 > 1 \\cdot K \\implies 6 > K$.
> 3. Faixa de estabilidade: **$0 < K < 6$** (em $K = 6$, o sistema oscila marginalmente com $3s^2 + 6 = 0 \\implies \\omega = \\sqrt{2}\\text{ rad/s}$).
> 4. Como $G(s)$ possui um integrador ($1/s$), trata-se de um sistema **Tipo 1** $\\implies$ para qualquer $0 < K < 6$, o erro em regime permanente ao degrau unitário é **exatamente ZERO ($e_{ss} = 0$)**!`,
        keyFormulas: [
          {
            label: 'Malha Fechada Negativa e Controlador PID',
            latex: 'T(s) = \\frac{G(s)}{1 + G(s)H(s)}, \\qquad C_{PID}(s) = K_p + \\frac{K_i}{s} + K_d s',
            note: 'Ação Integral (K_i/s) eleva o Tipo do sistema em +1 e zera erro ao degrau.',
          },
          {
            label: 'Routh-Hurwitz (3ª Ordem) e 2ª Ordem Padrão',
            latex: 'a_3 s^3 + a_2 s^2 + a_1 s + a_0 = 0 \\text{ estável} \\iff a_i > 0 \\text{ e } a_2 a_1 > a_3 a_0',
            note: 'Para 2ª ordem, basta todos os coeficientes positivos (a₂, a₁, a₀ > 0).',
          },
        ],
      },
      {
        id: 'sin-cg-transformacoes',
        title: '5. Computação Gráfica: Transformações Homogêneas 2D/3D e Câmera (MVP)',
        content: `### Por Que Usar Coordenadas Homogêneas?
Em geometria euclidiana 2D $(x, y)$, escala e rotação podem ser escritas como multiplicações de matrizes $2 \\times 2$, mas a **translação** ($x' = x + t_x, y' = y + t_y$) é uma **soma**, não uma transformação linear! Para unificar todas as transformações afins em um único produto matricial, introduzimos as **coordenadas homogêneas**:
- **Ponto 2D**: $(x, y, 1)^T$ (e **Ponto 3D**: $(x, y, z, 1)^T$, com $w = 1$ — sofre translação).
- **Vetor direção**: $(x, y, 0)^T$ ou $(x, y, z, 0)^T$ (com $w = 0$ — **não** sofre translação!).
- **Normalização perspectiva**: qualquer ponto homogêneo $(x, y, z, w)^T$ com $w \\neq 0$ equivale ao ponto cartesiano $(x/w, y/w, z/w)^T$.

### Matrizes Fundamentais em 2D (3×3) e Composição Não-Comutativa
- **Translação $T(t_x, t_y)$**, **Escala $S(s_x, s_y)$** e **Rotação anti-horária $R(\\theta)$** em torno da origem:
$$T(t_x, t_y) = \\begin{bmatrix} 1 & 0 & t_x \\\\ 0 & 1 & t_y \\\\ 0 & 0 & 1 \\end{bmatrix}, \\quad S(s_x, s_y) = \\begin{bmatrix} s_x & 0 & 0 \\\\ 0 & s_y & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\quad R(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$
- **Ordem de Aplicação (CRUCIAL!)**: usando vetores-coluna $v' = M_n \\cdots M_2 M_1 v$, a transformação mais próxima do vetor ($M_1$) é aplicada **primeiro** (leitura da **direita para a esquerda**!). Como multiplicação matricial **NÃO é comutativa** ($T \\cdot R \\neq R \\cdot T$), inverter a ordem produz uma posição completamente diferente!
- **Transformação em torno de um pivô arbitrário $P = (p_x, p_y)$**:
  1. Translade o pivô para a origem: $T(-p_x, -p_y)$
  2. Aplique a rotação ou escala: $R(\\theta)$
  3. Translade de volta para $P$: $T(p_x, p_y)$
  $$M_{composta} = T(p_x, p_y) \\cdot R(\\theta) \\cdot T(-p_x, -p_y)$$

### Transformação de Câmera e Pipeline de Espaços 3D (Matriz MVP)
Em Computação Gráfica 3D (OpenGL/DirectX/Vulkan), cada vértice passa por três matrizes $4 \\times 4$:
1. **Model ($M$)**: leva do **Espaço Local do Objeto** para o **Espaço do Mundo** (posicionamento, rotação e escala da malha na cena).
2. **View ($V$)**: leva do **Espaço do Mundo** para o **Espaço da Câmera/Olho** (posicionando a câmera na origem olhando para $-Z$, via *LookAt*).
3. **Projection ($P$)**: leva ao **Espaço de Recorte (*Clip Space*)**:
   - **Projeção Ortográfica**: volume em paralelepípedo; raios paralelos preservam tamanhos relativos e paralelismo (ideal para CAD e engenharia).
   - **Projeção Perspectiva**: volume em tronco de pirâmide (*frustum*); coloca $w = -z_{cam}$ na componente homogênea, de modo que a **divisão perspectiva** ($x/w, y/w, z/w$) faz objetos mais distantes parecerem menores!
4. Após a divisão por $w$, obtêm-se **Coordenadas Normalizadas do Dispositivo (NDC)** no cubo $[-1, 1]^3$, mapeadas pela **Viewport Transform** para coordenadas de pixel na tela.

> **Exemplo Resolvido Passo a Passo (Rotação em Torno de Pivô Arbitrário):** Rotacione o ponto $A = (3, 1)$ em $+90^\\circ$ (anti-horário) em torno do ponto pivô $P = (1, 1)$.
> 1. Queremos $A' = T(1, 1) \\cdot R(90^\\circ) \\cdot T(-1, -1) \\cdot A$. Como $\\cos 90^\\circ = 0$ e $\\sin 90^\\circ = 1$:
> 2. Passo 1 — Translação para origem: $A_1 = T(-1, -1) \\cdot (3, 1, 1)^T = (3-1, 1-1, 1)^T = (2, 0, 1)^T$.
> 3. Passo 2 — Rotação $+90^\\circ$: $A_2 = R(90^\\circ) \\cdot (2, 0, 1)^T = (0\\cdot 2 - 1\\cdot 0,\\; 1\\cdot 2 + 0\\cdot 0,\\; 1)^T = (0, 2, 1)^T$.
> 4. Passo 3 — Retorno ao pivô: $A' = T(1, 1) \\cdot (0, 2, 1)^T = \\mathbf{(1, 3, 1)^T} \\implies (1, 3)$.
> 5. *Conferência intuitiva*: $A=(3,1)$ está 2 unidades à direita de $P=(1,1)$; girando $90^\\circ$ anti-horário, fica 2 unidades acima de $P$, isto é, $(1, 3)$!`,
        keyFormulas: [
          {
            label: 'Composição de Transformações e Pivô Arbitrário',
            latex: 'v\' = M_n \\cdots M_2 M_1 v, \\qquad M_{pivo} = T(p_x, p_y)\\,R(\\theta)\\,T(-p_x, -p_y)',
            note: 'Multiplicação matricial NÃO é comutativa; aplica-se da direita para a esquerda.',
          },
          {
            label: 'Transformação Completa MVP no Vertex Shader',
            latex: 'v_{clip} = P \\cdot V \\cdot M \\cdot v_{local}',
            note: 'Após Clipping, divide-se (x,y,z) por w (divisão perspectiva) para obter NDC.',
          },
        ],
      },
      {
        id: 'sin-cg-opengl-iluminacao',
        title: '6. Pipeline Gráfico OpenGL 4.0 e Iluminação (Flat, Gouraud vs Phong)',
        content: `### Arquitetura do Pipeline Gráfico OpenGL 4.0 (Ordem Exata dos Estágios!)
O OpenGL moderno (3.3 / 4.0+) substituiu o antigo pipeline fixo por um **pipeline programável** em GPU usando **GLSL**. A ordem rigorosa dos estágios é cobrada diretamente no ENADE (ex.: **ENADE 2017 Q32**):

1. **Especificação de Vértices (VAO/VBO)**: envio de atributos dos vértices (posições, normais, coordenadas UV de textura) da CPU para a GPU.
2. **Vertex Shader** *(Programável — Obrigatório)*: executa uma vez **por vértice**. Aplica a matriz MVP (\`gl_Position = P * V * M * vec4(pos, 1.0)\`) e repassa normais/UVs.
3. **Tessellation Shaders** *(Programável — Opcional)* e **Geometry Shader** *(Programável — Opcional)*: subdividem malhas dinamicamente na GPU ou criam/descartam primitivas inteiras.
4. **Pós-Processamento de Vértices / Montagem de Primitivas** *(Estágio Fixo — ANTES da Rasterização!)*:
   - **Primitive Assembly**: agrupa vértices em pontos, linhas ou triângulos.
   - **Clipping (Recorte)**: descarta ou recorta primitivas fora do volume de visualização (*frustum*).
   - **Divisão Perspectiva** ($\\div w$) e **Viewport Transform** (NDC $\\to$ coordenadas de tela).
   - **Face Culling**: descarta faces traseiras (*back-faces*) invisíveis usando a orientação dos vértices (horária/anti-horária).
5. **Rasterização** *(Estágio Fixo)*: discretiza cada triângulo visível em uma grade de **fragmentos** (candidatos a pixels), **interpolando** com correção perspectiva os atributos (normal, posição no mundo, UV, cor) definidos nos vértices.
6. **Fragment Shader** *(Programável — Obrigatório)*: executa uma vez **por fragmento**. Calcula a cor final do pixel — aqui acontecem a **iluminação Phong**, amostragem de texturas (\`texture()\`), *normal mapping* e sombras!
7. **Operações por Amostra (*Per-Sample Operations*)** *(Estágio Fixo)*: testes de Recorte (*Scissor*), Estêncil (*Stencil*), **Teste de Profundidade (Z-Buffer)** (mantém o fragmento mais próximo da câmera em $O(1)$ sem precisar ordenar polígonos opacos!) e **Blending** (mistura alpha para objetos transparentes).

### Modelo de Reflexão de Phong e Comparação Flat vs Gouraud vs Phong
O modelo empírico de iluminação local de **Phong** soma três parcelas:
$$I = \\underbrace{k_a I_a}_{\\text{Ambiente}} + \\underbrace{k_d I_d \\max(\\vec{N}\\cdot\\vec{L},\\, 0)}_{\\text{Difusa (Lambert)}} + \\underbrace{k_s I_s \\bigl(\\max(\\vec{R}\\cdot\\vec{V},\\, 0)\\bigr)^\\alpha}_{\\text{Especular}}$$
onde $\\vec{N}$ é a normal unitária da superfície, $\\vec{L}$ aponta para a luz, $\\vec{V}$ aponta para a câmera, $\\vec{R} = 2(\\vec{N}\\cdot\\vec{L})\\vec{N} - \\vec{L}$ é o vetor refletido e $\\alpha$ (*shininess*) controla a nitidez do brilho especular. Na otimização **Blinn-Phong**, substitui-se $\\vec{R}\\cdot\\vec{V}$ por $\\vec{N}\\cdot\\vec{H}$, usando o vetor meio-caminho $\\vec{H} = \\frac{\\vec{L}+\\vec{V}}{\\lVert \\vec{L}+\\vec{V} \\rVert}$.

| Modelo de Sombreamento | Estágio do Pipeline | O Que É Calculado e Interpolado | Qualidade Visual e Custo |
|---|---|---|---|
| **Flat (Constante)** | Por polígono (1 normal/face) | 1 cor única calculada para todo o triângulo; sem interpolação | Aspecto facetado; custo mínimo |
| **Gouraud** | **Vertex Shader** (por vértice) | Calcula a **cor/iluminação nos vértices** e o rasterizador **interpola as CORES** pelo interior do triângulo | Suaviza faces, mas **perde brilhos especulares** no meio de triângulos grandes! |
| **Phong** | **Fragment Shader** (por fragmento/pixel) | O rasterizador **interpola as NORMAIS** dos vértices e o Fragment Shader **calcula a iluminação em cada pixel** | Brilho especular nítido e preciso mesmo em malhas simples; custo computacional maior |`,
        keyFormulas: [
          {
            label: 'Equação de Iluminação Local de Phong',
            latex: 'I = k_a I_a + k_d I_d \\max(\\vec{N}\\cdot\\vec{L}, 0) + k_s I_s \\bigl(\\max(\\vec{R}\\cdot\\vec{V}, 0)\\bigr)^\\alpha',
            note: 'Difusa independe do observador V; Especular depende do ângulo de visão V.',
          },
        ],
        codeExample: {
          language: 'glsl',
          title: 'GLSL (OpenGL 4.0): Vertex Shader (MVP) + Fragment Shader com Iluminação Phong por Pixel',
          code: `// ==================== VERTEX SHADER ====================
#version 400 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;

uniform mat4 uModel, uView, uProj;

out vec3 vWorldPos;
out vec3 vNormal; // Sera interpolada pela Rasterizacao (Phong Shading!)

void main() {
    vec4 worldPos = uModel * vec4(aPos, 1.0);
    vWorldPos = worldPos.xyz;
    vNormal   = mat3(transpose(inverse(uModel))) * aNormal;
    gl_Position = uProj * uView * worldPos; // Saida em Clip Space -> Clipping -> Rasterizacao
}

// ==================== FRAGMENT SHADER (PHONG) ====================
#version 400 core
in vec3 vWorldPos;
in vec3 vNormal;

uniform vec3 uLightPos, uViewPos, uObjectColor;
out vec4 FragColor;

void main() {
    vec3 N = normalize(vNormal); // Normal interpolada renormalizada por fragmento
    vec3 L = normalize(uLightPos - vWorldPos);
    vec3 V = normalize(uViewPos  - vWorldPos);
    vec3 R = reflect(-L, N);

    vec3 ambient  = 0.15 * uObjectColor;
    vec3 diffuse  = max(dot(N, L), 0.0) * uObjectColor;
    vec3 specular = 0.5 * pow(max(dot(R, V), 0.0), 32.0) * vec3(1.0);

    FragColor = vec4(ambient + diffuse + specular, 1.0);
}`,
        },
      },
    ],
    inepTraps: [
      'PEGADINHA CLÁSSICA (ENADE 2017 Q23!): Aplicar o critério contínuo ($\\text{Re}(s) < 0$) a um **sistema discreto / filtro digital**! No plano $z$, a estabilidade exige polos estritamente **dentro do círculo unitário** ($\\lvert z \\rvert < 1$). Um polo em $z = -2$ está à esquerda do eixo imaginário mas é **INSTÁVEL**, enquanto $z = 0{,}5 + 0{,}5j$ está à direita e é **ESTÁVEL** ($\\lvert z \\rvert \\approx 0{,}707 < 1$)!',
      'PEGADINHA CLÁSSICA (ENADE 2017 Q32!): Trocar a ordem dos estágios do pipeline OpenGL 4.0 — **Montagem de Primitivas, Clipping e Face Culling** ocorrem **ANTES** da Rasterização (e não dentro do Fragment Shader), enquanto o teste de profundidade (**Z-Buffer**) ocorre **DEPOIS** do Fragment Shader!',
      'Confundir **Phong Shading** com **Gouraud Shading**: Gouraud calcula iluminação no **Vertex Shader** e interpola **cores** (perdendo realces especulares no interior de triângulos grandes); Phong interpola **normais** na rasterização e calcula iluminação no **Fragment Shader** (por pixel)!',
      'Inverter a ordem de composição de matrizes homogêneas: em vetores-coluna ($v\' = M_2 M_1 v$), a matriz mais à **direita** é aplicada primeiro, e $T \\cdot R \\neq R \\cdot T$. Rotação fora da origem exige $T(P) \\cdot R(\\theta) \\cdot T(-P)$.',
      'Achar que um filtro digital pode corrigir **aliasing** após a amostragem (o filtro anti-aliasing precisa ser **analógico**, antes do ADC!) ou aplicar o Teorema do Valor Final em um sistema instável/oscilatório (ex.: $\\sin(\\omega t)$) onde o limite não existe!',
    ],
    quickChecklist: [
      'Sei testar linearidade, invariância no tempo, causalidade e estabilidade BIBO e calcular convoluções discretas?',
      'Tenho tatuado na mente: Estabilidade Contínua (Laplace) = $\\text{Re}(p_i) < 0$; Estabilidade Discreta (Z) = $\\lvert z_i \\rvert < 1$?',
      'Sei diferenciar filtros **FIR** (não-recursivos, sempre estáveis, fase linear possível) de **IIR** (recursivos, ordem menor, podem instabilizar)?',
      'Sei aplicar o Teorema de Nyquist ($f_s > 2f_{max}$), calcular frequência de aliasing e explicar o papel do filtro anti-aliasing analógico?',
      'Sei montar a malha fechada $T(s)=G/(1+GH)$, aplicar Routh-Hurwitz de 3ª ordem ($a_2a_1 > a_3a_0$) e listar o efeito de $K_p, K_i, K_d$?',
      'Sei compor matrizes homogêneas 2D ($T, R, S$) da direita para a esquerda e rotacionar em torno de um pivô arbitrário?',
      'Sei a sequência exata do pipeline OpenGL 4.0 (Vertex $\\to$ Primitive Assembly/Clipping $\\to$ Rasterização $\\to$ Fragment $\\to$ Z-Buffer/Blending)?',
      'Sei contrastar iluminação ambiente/difusa/especular e explicar exatamente a diferença entre Flat, Gouraud e Phong Shading?',
    ],
  },

  // =========================================================================
  // MÓDULO 3: ENGENHARIA DE SOFTWARE E IHC
  // =========================================================================
  {
    id: 'engenharia-software',
    title: 'Engenharia de Software e IHC',
    subtitle: 'Processos Prescritivos vs Ágeis, Scrum/XP/Kanban/Timeboxing, Requisitos, UML, GoF, Testes, ISO/IEC 25010 e Usabilidade/Acessibilidade',
    estimatedMinutes: 95,
    overview:
      'Domine o ciclo completo de engenharia de software e design centrado no usuário exigido no ENADE: desde modelos de processo (Cascata, Espiral, Scrum, XP, Kanban e Timeboxing) e especificação de requisitos/UML até princípios SOLID, padrões de projeto GoF, engenharia de testes (caixa-preta, caixa-branca e complexidade ciclomática), qualidade ISO/IEC 25010, manutenção, heurísticas de Nielsen, affordance e acessibilidade WCAG.',
    enadeWeightNote:
      'Disciplina de **alta frequência** no Componente Específico do ENADE, com questões de análise situacional e asserção-razão sobre métodos ágeis e **timeboxing** (ENADE 2017 Q31), modelagem UML, testes de software, padrões de projeto e acessibilidade/IHC.',
    sections: [
      {
        id: 'es-processos-ageis',
        title: '1. Modelos Prescritivos vs Ágeis: Scrum, XP, Kanban e Timeboxing',
        content: `### Modelos Prescritivos (Tradicionais) vs Métodos Ágeis
- **Cascata (*Waterfall*)**: fases estritamente sequenciais (Requisitos $\\to$ Projeto $\\to$ Implementação $\\to$ Testes $\\to$ Manutenção). Só funciona bem quando requisitos são **estáveis e totalmente conhecidos no início**; mudanças tardias têm custo altíssimo.
- **Modelo V**: variação do Cascata que vincula explicitamente cada etapa de especificação a um nível correspondente de verificação/teste (Requisitos $\\leftrightarrow$ Aceitação; Arquitetura $\\leftrightarrow$ Integração; Projeto Detalhado $\\leftrightarrow$ Unitário).
- **Incremental e Prototipação**: o Incremental entrega o sistema em fatias funcionais sucessivas; a Prototipação constrói versões rápidas (descartáveis ou evolutivas) para validar requisitos obscuros junto ao cliente.
- **Espiral (Barry Boehm)**: combina prototipação com abordagem sistemática **dirigida à análise de RISCOS**. Cada volta da espiral percorre 4 quadrantes: (1) Definição de objetivos, (2) **Avaliação e redução de riscos**, (3) Desenvolvimento/validação e (4) Planejamento do próximo ciclo.
- **RUP (*Rational Unified Process*)**: iterativo e incremental, dirigido por **casos de uso** e centrado na **arquitetura**, dividido em 4 fases: *Iniciação, Elaboração, Construção e Transição*.

### Manifesto Ágil (2001) e Seus 4 Valores
Os métodos ágeis abraçam mudanças de requisitos com entregas curtas e frequentes. Os 4 valores dizem — *"valorizamos mais os itens à esquerda do que os da direita"* (**sem eliminar** os da direita!):
1. **Indivíduos e interações** mais que processos e ferramentas.
2. **Software em funcionamento** mais que documentação abrangente.
3. **Colaboração com o cliente** mais que negociação de contratos.
4. **Responder a mudanças** mais que seguir um plano.

### Scrum, Extreme Programming (XP), Kanban e Timeboxing
- **Scrum**: framework empírico sustentado por 3 pilares (**Transparência, Inspeção e Adaptação**):
  - **3 Papéis (Responsabilidades)**: **Product Owner** (maximiza valor, prioriza o Product Backlog), **Scrum Master** (facilita o Scrum, remove impedimentos — não é chefe!) e **Developers** (equipe multifuncional auto-organizável que constrói o incremento).
  - **3 Artefatos (+ Compromissos)**: **Product Backlog** (*Meta do Produto*), **Sprint Backlog** (*Meta da Sprint*) e **Incremento** (*Definição de Pronto / DoD*).
  - **5 Eventos (todos com *timebox*)**: **Sprint** (1 a 4 semanas, duração fixa), **Sprint Planning** (planejamento), **Daily Scrum** (15 min diários de alinhamento entre Developers), **Sprint Review** (inspeção do **produto** com stakeholders) e **Sprint Retrospective** (melhoria do **processo** da equipe).
- **Extreme Programming (XP)**: foco intenso em **excelência técnica de código** — Programação em Pares (*Pair Programming*), **TDD** (Desenvolvimento Orientado a Testes), **Integração Contínua**, Refatoração constante, Propriedade Coletiva do Código, Design Simples e Cliente Presente.
- **Kanban**: método de **fluxo contínuo puxado** (sem Sprints obrigatórias), baseado em visualizar o trabalho em colunas, **limitar o WIP** (*Work In Progress* — trabalho em progresso) para evitar gargalos/multitarefa e otimizar *Lead Time* e *Cycle Time* via **Lei de Little** ($WIP = \\text{Throughput} \\times \\text{Cycle Time}$).
- **Timeboxing (Clássico ENADE 2017 Q31!)**: técnica de gestão que estabelece **janelas de tempo rígidas e curtas** para iterações/atividades, **intrinsecamente vinculada ao desenvolvimento iterativo e incremental**. Quando o tempo do *timebox* termina, entrega-se o incremento pronto priorizado por valor — **corta-se escopo menos prioritário, mas NÃO se estende o prazo nem se sacrifica a qualidade!**

| Abordagem | Cadência / Iteração | Foco Principal | Controle de Mudanças |
|---|---|---|---|
| **Cascata** | Sequencial único | Documentação e previsibilidade inicial | Rígido (mudanças são caras) |
| **Espiral** | Ciclos evolutivos | **Análise contínua de riscos** | Flexível entre voltas |
| **Scrum** | Sprints fixas (*timeboxed*) | Gestão empírica de produto e entrega de valor | Mudanças entram no Backlog para a próxima Sprint |
| **XP** | Iterações curtas (1–2 sem.) | **Práticas de engenharia** (TDD, par, refatoração) | Altíssima adaptação com rede de testes |
| **Kanban** | Fluxo contínuo (sem Sprints) | **Limitação de WIP** e eficiência de fluxo | Puxa próximo item mais prioritário quando há vaga |`,
        keyFormulas: [
          {
            label: 'Lei de Little (Métricas de Fluxo Kanban)',
            latex: '\\text{WIP} = \\text{Throughput} \\times \\text{Cycle Time} \\implies \\text{Cycle Time} = \\frac{\\text{WIP}}{\\text{Throughput}}',
            note: 'Reduzir o limite de WIP (trabalho em andamento) diminui diretamente o tempo de ciclo!',
          },
        ],
      },
      {
        id: 'es-requisitos-uml',
        title: '2. Engenharia de Requisitos e Modelagem UML Completa',
        content: `### Engenharia de Requisitos
A Engenharia de Requisitos compreende **Elicitação** (entrevistas, workshops, prototipação, etnografia, análise documental), **Análise e Negociação**, **Especificação**, **Validação** (revisões e protótipos para confirmar se atende ao usuário) e **Gerência** (controle de versões e matriz de rastreabilidade).

- **Requisitos Funcionais (RF)**: descrevem *o que* o sistema deve fazer — serviços, funcionalidades e reações a entradas (ex.: *"O sistema deve emitir nota fiscal eletrônica após confirmação do pagamento"*).
- **Requisitos Não-Funcionais (RNF)**: definem *como* o sistema opera — restrições e atributos de qualidade: desempenho (tempo de resposta $< 200\\text{ ms}$), disponibilidade ($99{,}9\\%$), segurança (criptografia AES-256), usabilidade, portabilidade e conformidade legal (LGPD). Podem ser classificados (Sommerville) em requisitos de **Produto**, **Organizacionais** e **Externos**.

### UML 2.x: Diagramas Estruturais e Comportamentais
A UML (*Unified Modeling Language*) organiza seus diagramas em **Estruturais** (visão estática: Classes, Objetos, Componentes, Implantação, Pacotes) e **Comportamentais** (visão dinâmica: Casos de Uso, Sequência, Atividades, Máquina de Estados, Comunicação):

#### 1) Diagrama de Casos de Uso (Visão Funcional / Requisitos)
Mostra **Atores** (usuários ou sistemas externos), **Casos de Uso** (elipses dentro da fronteira do sistema) e seus relacionamentos:
- **\`<<include>>\` (Inclusão — OBRIGATÓRIO)**: o caso de uso base **sempre** executa o comportamento do caso incluído (fatoração de passos comuns, ex.: \`Realizar Saque\` $\\xrightarrow{\\text{«include»}}$ \`Autenticar Usuário\`). **A seta tracejada sai do caso BASE para o INCLUÍDO.**
- **\`<<extend>>\` (Extensão — OPCIONAL / CONDICIONAL)**: acrescenta comportamento opcional ao caso base em pontos de extensão sob certa condição (ex.: \`Aplicar Cupom\` $\\xrightarrow{\\text{«extend»}}$ \`Finalizar Compra\`). **A seta tracejada sai da EXTENSÃO PARA o caso BASE!**

#### 2) Diagrama de Classes (Visão Estática Orientada a Objetos)
Visibilidade dos membros: \`+\` (*public*), \`-\` (*private*), \`#\` (*protected*), \`~\` (*package*). Multiplicidades: \`1\`, \`0..1\`, \`0..*\` (ou \`*\`), \`1..*\`.

| Relacionamento UML (Classes) | Notação Gráfica | Acoplamento / Semântica | Exemplo Clássico |
|---|---|---|---|
| **Dependência** | Linha tracejada com seta aberta | Mais fraco ("usa temporariamente", ex.: parâmetro de método) | \`RelatorioService\` usa \`PDFExporter\` |
| **Associação** | Linha contínua (com ou sem seta) | Ligação estrutural entre instâncias ("conhece / tem") | \`Aluno\` \`*\` — \`*\` \`Turma\` |
| **Agregação** | Linha contínua + **losango VAZIO** no todo | Todo-parte **fraca**: a parte **sobrevive** se o todo for destruído | \`Departamento\` ◇── \`Professor\` |
| **Composição** | Linha contínua + **losango PREENCHIDO** no todo | Todo-parte **forte**: ciclo de vida acoplado — **destruiu o todo, destrói a parte!** | \`Pedido\` ◆── \`ItemPedido\` |
| **Generalização (Herança)** | Linha contínua + triângulo vazio na superclasse | Relação **"é um"**; subclasse herda atributos/métodos | \`Carro\` ──▷ \`Veiculo\` |
| **Realização** | Linha tracejada + triângulo vazio na interface | Classe implementa contrato definido por uma interface | \`PagamentoPix\` - -▷ \`<<interface>> Pagavel\` |

#### 3) Diagrama de Sequência e Diagrama de Máquina de Estados
- **Diagrama de Sequência**: enfatiza a **ordem temporal** das mensagens entre objetos (eixo vertical = tempo de cima para baixo). Elementos: linhas de vida (*lifelines*), barras de ativação, mensagem **síncrona** (seta preenchida: emissor aguarda retorno), **assíncrona** (seta aberta: não bloqueia), retorno (tracejada) e fragmentos combinados (\`alt\` = if/else, \`opt\` = if, \`loop\` = repetição, \`par\` = paralelo).
- **Diagrama de Máquina de Estados**: modela o ciclo de vida de um único objeto (ex.: \`Pedido\`: *Criado* $\\to$ *Pago* $\\to$ *Enviado* $\\to$ *Entregue* ou *Cancelado*). Transições seguem o formato \`evento [condição de guarda] / ação\`.

> **Exemplo Resolvido Passo a Passo (Modelagem UML de E-Commerce):** Em uma loja virtual: (1) Todo checkout exige calcular o frete; (2) Opcionalmente, o cliente pode aplicar um cupom promocional; (3) Um \`Pedido\` possui de 1 a muitos \`ItemPedido\` que deixam de existir se o pedido for excluído; (4) Cada \`ItemPedido\` referencia um \`Produto\` do catálogo, que continua existindo mesmo se o pedido for apagado.
> - **Casos de Uso**: \`Finalizar Compra\` $\\xrightarrow{\\text{«include»}}$ \`Calcular Frete\` (obrigatório, seta sai do base); \`Aplicar Cupom\` $\\xrightarrow{\\text{«extend»}}$ \`Finalizar Compra\` (opcional, seta aponta **para** o base!).
> - **Classes**: \`Pedido\` **◆──** (\`1\` para \`1..*\`) \`ItemPedido\` (**Composição**, losango preenchido em \`Pedido\`); \`ItemPedido\` **──>** (\`*\` para \`1\`) \`Produto\` (**Associação** simples — não é composição porque apagar o pedido não apaga o produto do catálogo!).`,
      },
      {
        id: 'es-arquitetura-gof',
        title: '3. Arquitetura de Software, Princípios SOLID e Padrões de Projeto GoF',
        content: `### Estilos Arquiteturais e Qualidade de Projeto
Um bom projeto de software busca **alta coesão** (cada módulo tem uma responsabilidade bem definida e focada) e **baixo acoplamento** (mínima dependência rígida entre módulos):
- **Arquitetura em Camadas (*Layered*)**: separa Apresentação, Regras de Negócio e Persistência; facilita manutenção e testes.
- **MVC (*Model-View-Controller*)**: *Model* (dados e regras de domínio), *View* (interface com usuário), *Controller* (recebe entradas e coordena atualizações).
- **Pipes and Filters**: cadeia de filtros independentes conectados por fluxos de dados (ex.: compiladores, pipelines UNIX).
- **Monolito Modular vs Microsserviços**: microsserviços permitem escalabilidade e deploy independentes por domínio, mas introduzem complexidade distribuída (latência de rede, consistência eventual, observabilidade).
- **Arquitetura Orientada a Eventos (EDA)**: produtores publicam eventos em um *broker* (Kafka/RabbitMQ) e consumidores reagem de forma assíncrona e desacoplada.

### Os 5 Princípios SOLID (Robert C. Martin)
1. **S — SRP (*Single Responsibility Principle*)**: uma classe deve ter **um único motivo para mudar** (alta coesão).
2. **O — OCP (*Open/Closed Principle*)**: entidades devem estar **abertas para extensão, mas fechadas para modificação** (adicionar novos comportamentos criando novas classes/polimorfismo em vez de lotar um \`switch/if\` antigo).
3. **L — LSP (*Liskov Substitution Principle*)**: objetos de uma subclasse devem poder substituir objetos da superclasse **sem quebrar o comportamento esperado** do programa (clássica violação: \`Quadrado\` herdando de \`Retangulo\` mutável).
4. **I — ISP (*Interface Segregation Principle*)**: preferir várias interfaces pequenas e específicas a uma única interface "gorda" que force clientes a implementar métodos inúteis.
5. **D — DIP (*Dependency Inversion Principle*)**: módulos de alto nível não devem depender de módulos de baixo nível; **ambos devem depender de abstrações (interfaces)** — base da Injeção de Dependência!

### Padrões de Projeto GoF (*Gang of Four*) — Tabela Definitiva
| Categoria GoF | Padrão | Intenção e Problema que Resolve | Exemplo Prático |
|---|---|---|---|
| **Criacional** | **Singleton** | Garante **uma única instância** global da classe com ponto de acesso único | Pool de conexões, gerenciador de configuração/log |
| **Criacional** | **Factory Method** | Delega às subclasses a decisão de **qual classe concreta instanciar** | Criar \`NotificacaoEmail\` ou \`NotificacaoSMS\` via fábrica |
| **Criacional** | **Abstract Factory** | Cria **famílias de objetos relacionados** sem especificar classes concretas | Kit de botões/janelas para temas Windows vs macOS |
| **Criacional** | **Builder** | Constrói objetos complexos **passo a passo**, separando construção de representação | Montagem de requisição HTTP ou consulta SQL fluente |
| **Estrutural** | **Adapter** | **Converte a interface** de uma classe existente em outra esperada pelo cliente | Adaptar API legada XML para interface moderna JSON |
| **Estrutural** | **Facade** | Fornece uma **interface unificada e simples** para um subsistema complexo | \`CheckoutFacade\` orquestrando estoque, pagamento e frete |
| **Estrutural** | **Decorator** | Adiciona responsabilidades a um objeto **dinamicamente em tempo de execução** (alternativa flexível à herança) | \`BufferedInputStream(FileInputStream)\` em Java I/O |
| **Estrutural** | **Proxy** | Fornece um substituto/representante que **controla o acesso** a outro objeto | Lazy loading, cache, autenticação, controle remoto |
| **Estrutural** | **Composite** | Compõe objetos em **árvores parte-todo**, tratando folhas e grupos uniformemente | Arquivos e pastas em sistema de arquivos; árvore DOM |
| **Comportamental** | **Strategy** | Encapsula uma **família de algoritmos intercambiáveis** em tempo de execução | Trocar estratégia de cálculo de frete (PAC, Sedex, Drone) |
| **Comportamental** | **Observer** | Define dependência **1-para-N**: quando o sujeito muda de estado, notifica todos os observadores | Listeners de UI, pub-sub de alertas de sensores IoT |
| **Comportamental** | **State** | Permite ao objeto **alterar seu comportamento quando seu estado interno muda** | Máquina de estados de pedido ou catraca eletrônica |
| **Comportamental** | **Template Method** | Define o **esqueleto de um algoritmo** na superclasse e deixa subclasses sobrescreverem etapas | Pipeline de exportação (\`ler -> formatar -> salvar\`) |
| **Comportamental** | **Command** | Encapsula uma requisição como objeto, viabilizando filas, log e **Undo/Redo** | Ações de editor de texto com histórico desfazer/refazer |`,
        codeExample: {
          language: 'typescript',
          title: 'TypeScript: Padrões GoF Strategy (OCP/DIP) + Observer em Ação',
          code: `// STRATEGY (Comportamental) — respeita OCP e DIP: novos fretes sem alterar Pedido!
interface EstrategiaFrete {
  calcular(pesoKg: number): number;
}

class FretePAC implements EstrategiaFrete {
  calcular(pesoKg: number) { return 15 + pesoKg * 2.5; }
}

class FreteExpresso implements EstrategiaFrete {
  calcular(pesoKg: number) { return 30 + pesoKg * 6.0; }
}

// OBSERVER (Comportamental) — notificacao desacoplada 1-para-N
interface ObservadorPedido {
  notificar(idPedido: string, status: string): void;
}

class Pedido {
  private observadores: ObservadorPedido[] = [];
  constructor(private id: string, private frete: EstrategiaFrete) {}

  setFrete(novaEstrategia: EstrategiaFrete) { this.frete = novaEstrategia; }
  adicionarObservador(obs: ObservadorPedido) { this.observadores.push(obs); }

  totalFrete(pesoKg: number): number { return this.frete.calcular(pesoKg); }

  atualizarStatus(status: string) {
    this.observadores.forEach((obs) => obs.notificar(this.id, status));
  }
}`,
        },
      },
      {
        id: 'es-testes-vv',
        title: '4. Verificação, Validação e Engenharia de Testes (Caixa-Preta, Branca e Pirâmide)',
        content: `### Verificação vs Validação e Taxonomia de Falhas
- **Verificação**: *"Estamos construindo o produto **corretamente**?"* — checa conformidade com a especificação técnica (revisões de código, inspeções estáticas, testes unitários e de integração).
- **Validação**: *"Estamos construindo o produto **certo**?"* — checa se o software resolve a necessidade real do usuário/negócio (testes de aceitação, validação com cliente, testes Alfa/Beta).
- **Cadeia de Falha (IEEE)**: **Engano/Erro** (ação humana do programador) $\\to$ **Defeito/Bug** (*fault* inserido no código) $\\to$ **Falha** (*failure* — desvio observável durante a execução).
- **Aforismo de Dijkstra**: *"Os testes podem mostrar a presença de defeitos, nunca provar sua ausência."*

### Pirâmide de Testes e Níveis de Teste
A **Pirâmide de Testes** (Mike Cohn) orienta o equilíbrio econômico da automação:
1. **Base larga — Testes Unitários**: testam funções/classes isoladas (usando *mocks/stubs*); são **rápidos, baratos e determinísticos** (maior quantidade!).
2. **Meio — Testes de Integração**: verificam a comunicação entre módulos/BD/APIs. Estratégias clássicas: *Top-Down* (usa **stubs** simulando módulos inferiores), *Bottom-Up* (usa **drivers** simulando chamadores superiores) e *Sanduíche*.
3. **Topo estreito — Testes de Sistema / Ponta a Ponta (E2E) e Aceitação**: simulam o usuário final no ambiente integrado; são mais lentos e frágeis, portanto em menor quantidade.
- **Teste de Regressão**: reexecução automatizada da suíte de testes após modificações/correções para garantir que nada que funcionava foi quebrado.
- **TDD (*Test-Driven Development*)**: ciclo curto **Red** (escreve teste que falha) $\\to$ **Green** (implementa código mínimo para passar) $\\to$ **Refactor** (melhora o design mantendo os testes verdes).

### Técnicas Caixa-Preta (Funcionais) vs Caixa-Branca (Estruturais)
| Dimensão | Teste Caixa-Preta (Funcional) | Teste Caixa-Branca (Estrutural) |
|---|---|---|
| Base de derivação | Especificação de requisitos (ignora código interno) | Estrutura interna do código-fonte (grafo de fluxo) |
| Técnicas principais | **Particionamento de Equivalência**, **Análise de Valor Limite (AVL)**, Tabela de Decisão, Transição de Estados | Cobertura de **Comandos**, **Ramos/Decisões**, **Condições (MC/DC)** e **Caminhos Básicos** |
| O que detecta bem | Requisitos omitidos, erros de interface, regras de negócio erradas, fronteiras (\`<\` vs \`<=\`) | Código morto/inalcançável, desvios lógicos incorretos, loops infinitos |

- **Hierarquia de Cobertura Estrutural**: $100\\%$ de **Cobertura de Caminhos** $\\implies$ $100\\%$ de **Cobertura de Ramos** $\\implies$ $100\\%$ de **Cobertura de Comandos** (a recíproca é **FALSA**: cobrir 100% dos comandos NÃO garante cobrir todos os ramos, ex.: um \`if\` sem \`else\`!).
- **Complexidade Ciclomática de McCabe ($V(G)$)**: mede a complexidade lógica do código e define o **número mínimo de casos de teste** necessários para atingir cobertura de caminhos linearmente independentes:
$$V(G) = E - N + 2P = D + 1 = R $$
onde $E$ = arestas, $N$ = nós, $P$ = componentes conexos (normalmente $P=1$), $D$ = número de **nós de decisão/predicados** (cada \`if\`, \`while\`, \`for\`, \`case\`, e cada operador lógico \`&&\`/\`||\` composto conta $+1$!) e $R $ = regiões do grafo planar.

> **Exemplo Resolvido Passo a Passo (Partição de Equivalência, Valor Limite e McCabe):**
> **Parte A (Caixa-Preta):** Um campo aceita \`idade\` inteira válida entre \`18\` e \`65\` anos (inclusive) para desconto.
> - **Particionamento de Equivalência**: 3 classes — Inválida inferior ($< 18$, ex.: \`10\`), Válida ($18 \\le x \\le 65$, ex.: \`35\`) e Inválida superior ($> 65$, ex.: \`80\`).
> - **Análise de Valor Limite (AVL)**: testa exatamente nas fronteiras onde ocorrem erros de \`<\` vs \`<=\` $\\to$ **\`17, 18, 19\`** e **\`64, 65, 66\`** (versão reduzida: \`17, 18, 65, 66\`).
>
> **Parte B (Caixa-Branca — McCabe):** Uma função tem um \`if (a > 0 && b > 0)\` (2 predicados simples!) seguido de um \`while (n > 0)\` (1 predicado).
> - Total de predicados $D = 2 + 1 = 3$.
> - Complexidade Ciclomática: $V(G) = D + 1 = 3 + 1 = \\mathbf{4}$ caminhos independentes (mínimo de 4 casos de teste para cobertura de caminhos básicos).`,
        keyFormulas: [
          {
            label: 'Complexidade Ciclomática de McCabe',
            latex: 'V(G) = E - N + 2P = D + 1 = \\text{Regiões}',
            note: 'V(G) indica o limite inferior de casos de teste para cobertura de caminhos básicos; valores > 10 sinalizam código complexo que deve ser refatorado.',
          },
        ],
        codeExample: {
          language: 'typescript',
          title: 'TypeScript: Função sob Teste, Cálculo de V(G) e Casos Caixa-Preta (Equivalência + Valor Limite)',
          code: `// Regra: desconto de 20% para idade entre 18 e 65 (inclusive) se valor >= 100.
// Predicados: (idade < 18) [+1], (idade > 65) [+1], (valor >= 100) [+1] => D = 3 => V(G) = 4
export function calcularDesconto(idade: number, valor: number): number {
  if (idade < 18 || idade > 65) {
    return 0; // Fora da faixa etaria
  }
  if (valor >= 100) {
    return valor * 0.20;
  }
  return 0;
}

// Casos de teste combinando Valor Limite (AVL) + Cobertura de Ramos (100%)
const casosDeTeste = [
  { desc: 'AVL limite inferior invalido', idade: 17, valor: 150, esperado: 0  },
  { desc: 'AVL limite inferior valido',   idade: 18, valor: 100, esperado: 20 },
  { desc: 'AVL limite superior valido',   idade: 65, valor: 99,  esperado: 0  },
  { desc: 'AVL limite superior invalido', idade: 66, valor: 200, esperado: 0  },
];`,
        },
      },
      {
        id: 'es-qualidade-iso25010',
        title: '5. Qualidade de Software (ISO/IEC 25010), Manutenção e DevOps/CI-CD',
        content: `### Modelo de Qualidade de Produto: ISO/IEC 25010 (SQuaRE)
A norma **ISO/IEC 25010** (sucessora da clássica ISO/IEC 9126) estrutura a qualidade de produto de software em **8 características principais** (cobradas diretamente em questões sobre Requisitos Não-Funcionais):

| Característica ISO/IEC 25010 | Definição Essencial | Subcaracterísticas-Chave |
|---|---|---|
| **1. Adequação Funcional** | Grau em que o software provê funções que atendem necessidades explícitas e implícitas | Completude, corretude e pertinência funcional |
| **2. Eficiência de Desempenho** | Desempenho relativo aos recursos utilizados sob condições especificadas | Comportamento temporal (latência/throughput), utilização de recursos (CPU/RAM), capacidade |
| **3. Compatibilidade** | Capacidade de coexistir e trocar informações com outros sistemas | Coexistência e **Interoperabilidade** |
| **4. Usabilidade** | Facilidade com que usuários específicos atingem metas com eficácia, eficiência e satisfação | Apreensibilidade, operabilidade, proteção contra erros, estética e **Acessibilidade** |
| **5. Confiabilidade** | Capacidade de desempenhar funções sob condições especificadas por um período | Maturidade, **Disponibilidade**, **Tolerância a Falhas** e Recuperabilidade |
| **6. Segurança** | Proteção de informações e dados conforme níveis de autorização | **Confidencialidade, Integridade**, Não-Repúdio, Autenticidade e Responsabilização |
| **7. Manutenibilidade** | Eficiência e eficácia com que o software pode ser modificado | **Modularidade**, Reusabilidade, Analisabilidade, Modificabilidade e **Testabilidade** |
| **8. Portabilidade** | Facilidade de transferir o sistema de um ambiente (HW/SO/nuvem) para outro | Adaptabilidade, Instalabilidade e Capacidade para Substituir |

*(Nota de atualização: a revisão ISO/IEC 25010:2023 renomeou Usabilidade para Capacidade de Interação e Portabilidade para Flexibilidade, adicionando Segurança Física/Safety como 9ª característica — mas o ENADE ainda referencia com frequência o quadro clássico das 8 características acima.)*

### Tipos de Manutenção de Software (Evolução)
A manutenção responde historicamente por **60% a 80% do custo total** do ciclo de vida de um software. Classifica-se em 4 tipos:
1. **Corretiva**: corrige **defeitos/bugs** descobertos após a entrega em produção.
2. **Adaptativa**: ajusta o software a **mudanças no ambiente externo** (novo SO, atualização de banco de dados, migração para nuvem, nova legislação tributária/LGPD).
3. **Perfectiva (ou Evolutiva)**: **adiciona novas funcionalidades** solicitadas pelos usuários ou melhora desempenho/usabilidade — representa a **maior fatia** dos esforços de manutenção!
4. **Preventiva**: modifica o código antecipadamente (**refatoração**, reengenharia, pagamento de **dívida técnica**) para facilitar manutenções futuras e prevenir falhas antes que ocorram.

### Gerência de Configuração, DevOps (CI/CD) e Maturidade de Processos
- **Versionamento Semântico (SemVer \`MAJOR.MINOR.PATCH\`)**: \`MAJOR\` = mudança incompatível na API (*breaking change*); \`MINOR\` = nova funcionalidade retrocompatível; \`PATCH\` = correção de bug retrocompatível.
- **CI/CD**:
  - **Integração Contínua (CI)**: desenvolvedores integram código ao repositório principal várias vezes ao dia, disparando *build* e testes automatizados imediatamente para detectar regressões cedo.
  - **Entrega Contínua (*Continuous Delivery*)**: artefato validado fica sempre pronto para ir à produção mediante **aprovação humana manual**.
  - **Implantação Contínua (*Continuous Deployment*)**: toda alteração aprovada nos testes automatizados é implantada em produção **automaticamente**, sem intervenção manual.
- **Maturidade de Processos**: **CMMI** (5 níveis: 1-Inicial, 2-Gerenciado, 3-Definido, 4-Gerenciado Quantitativamente, 5-Em Otimização) e o modelo brasileiro **MPS.BR** (7 níveis crescentes de **G** até **A** — sendo G o inicial gerenciado e A o mais alto em otimização!).`,
      },
      {
        id: 'es-ihc-usabilidade',
        title: '6. IHC, Heurísticas de Nielsen, Affordance e Acessibilidade Digital (WCAG)',
        content: `### Interação Humano-Computador (IHC), Golfos de Norman e Affordance
A Engenharia de IHC projeta sistemas interativos eficientes, seguros e inclusivos, alinhando o **modelo conceitual** projetado pelo engenheiro ao **modelo mental** do usuário. Segundo **Donald Norman**, toda interação atravessa dois golfos que o bom design precisa estreitar:
- **Golfo de Execução**: quão difícil é para o usuário descobrir *quais ações são possíveis* e *como executá-las* para atingir sua intenção.
- **Golfo de Avaliação**: quão difícil é para o usuário *perceber e interpretar o novo estado do sistema* após agir (depende diretamente de bom **feedback**!).

Conceitos essenciais de Norman (cobrados literalmente no ENADE!):
- **Affordance**: propriedade percebida (ou real) de um objeto/interface que **sugere intuitivamente como ele pode ser usado** sem precisar de manual — ex.: um botão com elevação/sombra sugere ser clicado; uma maçaneta sugere girar/empurrar; uma barra deslizante sugere arrastar. *(Atenção: affordance NÃO é mero enfeite estético!)*
- **Significantes (*Signifiers*)**: pistas visuais/textuais explícitas que comunicam *onde* e *como* a ação ocorre (ex.: placa "PUXE", ícone de lupa, texto sublinhado indicando link).
- **Mapeamento Natural**: correspondência espacial intuitiva entre controles e efeitos (ex.: botões de fogão alinhados com a posição real das bocas; seta $\\uparrow$ sobe o volume).
- **Restrições (*Constraints*)**: limitações físicas ou lógicas que **impedem erros antes que aconteçam** (ex.: desabilitar o botão "Enviar" até preencher campos obrigatórios; conector USB-C simétrico).

### As 10 Heurísticas de Usabilidade de Jakob Nielsen
| # | Heurística de Nielsen | Significado Prático | Exemplo de Boa Prática |
|---|---|---|---|
| **1** | **Visibilidade do status do sistema** | Manter o usuário sempre informado do que está acontecendo em tempo hábil | Barra de progresso, spinner de envio, indicador de passo "2 de 4" |
| **2** | **Correspondência com o mundo real** | Usar linguagem, metáforas e conceitos familiares ao usuário (não jargão técnico) | "Carrinho de compras", "Lixeira" em vez de "Buffer de exclusão SQL" |
| **3** | **Controle e liberdade do usuário** | Oferecer "saídas de emergência" claras para desfazer ações acidentais | Botões **Desfazer (Ctrl+Z)**, Refazer e Cancelar sem perder dados |
| **4** | **Consistência e padrões** | Mesmos termos, cores e ícones significam sempre a mesma coisa na interface | Botão primário sempre na mesma cor/lado; seguir padrões da plataforma |
| **5** | **Prevenção de erros** | Ainda melhor que boas mensagens de erro é um design que **evite o erro** | Diálogo de confirmação antes de excluir conta; seletor de data válido |
| **6** | **Reconhecimento em vez de memorização** | Deixar opções, rótulos e contexto visíveis para reduzir carga cognitiva | Autocompletar, menus visíveis, histórico recente em vez de códigos decorados |
| **7** | **Flexibilidade e eficiência de uso** | Aceleradores invisíveis para novatos que agilizam usuários experientes | Atalhos de teclado (\`Ctrl+K\`), macros, filtros salvos |
| **8** | **Design estético e minimalista** | Remover informações irrelevantes que competem pela atenção com o essencial | Formulários limpos, hierarquia visual clara, sem poluição informacional |
| **9** | **Ajudar a reconhecer, diagnosticar e recuperar erros** | Mensagens em linguagem simples, indicando exatamente o problema e a solução | *"Senha precisa de 1 número"* em vez de *"Erro 0x8004"* |
| **10** | **Ajuda e documentação** | Fácil de pesquisar, contextualizada na tarefa e com passos concretos | Tooltips contextuais, busca na central de ajuda |

### Avaliação de IHC e Acessibilidade Digital (WCAG 2.1/2.2 — Princípios POUR)
- **Avaliação por Inspeção** (sem usuários reais, feita por especialistas): **Avaliação Heurística** (Nielsen — rápida e barata, 3 a 5 avaliadores acham ~75% dos problemas) e **Percurso Cognitivo** (simula passo a passo um usuário novato realizando uma tarefa).
- **Avaliação Empírica / Observação** (com usuários reais): **Teste de Usabilidade** (com protocolo *Think-Aloud* — pensar em voz alta), métricas de taxa de sucesso, tempo de tarefa e questionário **SUS** (*System Usability Scale*).
- **Acessibilidade Digital (WCAG / W3C e eMAG)** — garante acesso a pessoas com deficiências visuais, auditivas, motoras ou cognitivas através dos **4 Princípios POUR**:
  1. **Perceptível**: texto alternativo (\`alt\`) em imagens, legendas/audiodescrição em vídeos, contraste mínimo de cores ($\\ge 4{,}5:1$ para texto normal), não depender **apenas de cor** para transmitir informação (ex.: daltonismo).
  2. **Operável**: toda funcionalidade acessível **100% via teclado** (\`Tab\`, \`Enter\`, \`Esc\`), foco visível, sem armadilhas de teclado e tempo suficiente para leitura.
  3. **Compreensível**: idioma declarado (\`lang="pt-BR"\`), navegação previsível, rótulos claros e assistência na correção de erros em formulários.
  4. **Robusto**: código **HTML semântico** válido (\`<button>\`, \`<nav>\`, \`<main>\`, \`<label>\`) e atributos **WAI-ARIA** compatíveis com tecnologias assistivas (leitores de tela como NVDA/VoiceOver).`,
      },
    ],
    inepTraps: [
      'PEGADINHA CLÁSSICA (ENADE 2017 Q31!): Afirmar que a técnica de **Timeboxing** independe do ciclo iterativo e incremental — **FALSO!** O Timeboxing é justamente a fixação de caixas de tempo curtas e rígidas que estruturam cada ciclo iterativo-incremental, priorizando escopo em vez de atrasar o prazo.',
      'Inverter a direção da seta entre `<<include>>` e `<<extend>>` em Casos de Uso UML: no `<<include>>` (obrigatório), a seta vai **do base PARA o incluído**; no `<<extend>>` (opcional), a seta vai **da extensão PARA o caso base**!',
      'Confundir **Agregação** e **Composição** no Diagrama de Classes: Agregação (losango **vazio**) permite que a parte exista sem o todo; Composição (losango **preenchido**) amarra o ciclo de vida da parte à destruição do todo.',
      'Interpretar o **Manifesto Ágil** como "proibição de documentação, planos ou contratos" — o Manifesto apenas valoriza *mais* software funcionando, colaboração e resposta a mudanças do que burocracia excessiva.',
      'Achar que 100% de cobertura de **comandos** garante 100% de cobertura de **ramos** (falso: um `if` sem `else` exige 2 casos para cobrir ramos, mas 1 só cobre comandos!), ou confundir **Affordance** (pista intuitiva de uso) com beleza estética pura.',
    ],
    quickChecklist: [
      'Sei diferenciar Cascata, Espiral (riscos), Scrum (papéis/artefatos/eventos), XP (práticas técnicas), Kanban (WIP/Lei de Little) e Timeboxing?',
      'Sei distinguir Requisitos Funcionais (o que faz) de Não-Funcionais (qualidade/restrições) e as 8 características da ISO/IEC 25010?',
      'Lembro a direção exata das setas de `<<include>>` vs `<<extend>>` e a diferença entre Agregação (◇) e Composição (◆) na UML?',
      'Sei classificar os principais padrões GoF em Criacionais (Singleton, Factory, Builder), Estruturais (Adapter, Facade, Decorator, Proxy) e Comportamentais (Strategy, Observer, State, Command)?',
      'Sei diferenciar Verificação vs Validação e aplicar Partição de Equivalência, Análise de Valor Limite e Complexidade Ciclomática $V(G) = D + 1$?',
      'Sei distinguir os 4 tipos de manutenção (Corretiva, Adaptativa, Perfectiva/Evolutiva e Preventiva) e Entrega Contínua vs Implantação Contínua?',
      'Domino os conceitos de Donald Norman (Affordance, Significantes, Mapeamento Natural, Golfos de Execução e Avaliação)?',
      'Consigo reconhecer as 10 Heurísticas de Nielsen e os 4 princípios de acessibilidade WCAG (**POUR**: Perceptível, Operável, Compreensível, Robusto)?',
    ],
  },

  // =========================================================================
  // MÓDULO 4: BANCO DE DADOS
  // =========================================================================
  {
    id: 'banco-dados',
    title: 'Banco de Dados',
    subtitle: 'Modelagem ER e Relacional, Normalização (1FN–BCNF), Álgebra Relacional, SQL Completo, DCL (GRANT/DENY/REVOKE), ACID e Índices B+/Hash',
    estimatedMinutes: 95,
    overview:
      'Domine integralmente o projeto, consulta, segurança e arquitetura interna de Sistemas Gerenciadores de Bancos de Dados (SGBDs) cobrados no ENADE. Este módulo cobre do modelo conceitual ER/EER ao esquema relacional, normalização passo a passo até BCNF, álgebra relacional e otimização de consultas, SQL completo (DDL/DML/DQL/JOINs/GROUP BY/HAVING), precedência de segurança DCL (GRANT/DENY/REVOKE/WITH GRANT OPTION), transações ACID, níveis de isolamento e índices Árvore B+ versus Hash.',
    enadeWeightNote:
      'Disciplina recorrente e de **alta pontuação garantida** no ENADE para quem domina regras exatas — com destaque histórico para controle de acesso SQL (**ENADE 2017 Q33**: precedência de `DENY` sobre `GRANT` e repasse via `WITH GRANT OPTION`), normalização, `GROUP BY`/`HAVING` e propriedades ACID.',
    sections: [
      {
        id: 'bd-modelagem-er-relacional',
        title: '1. Modelagem Conceitual (MER/EER), Modelo Relacional e Integridade Referencial',
        content: `### Arquitetura ANSI/SPARC em 3 Níveis e Independência de Dados
Para isolar aplicações do armazenamento físico, um SGBD organiza os metadados em 3 esquemas:
- **Nível Externo (Visões)**: recortes personalizados para cada grupo de usuários (segurança e simplificação).
- **Nível Conceitual (Lógico)**: descreve *o que* é armazenado — entidades, relacionamentos e restrições de todo o banco.
- **Nível Interno (Físico)**: descreve *como* é armazenado — arquivos, páginas de disco, índices Árvore B+ e hash.
- **Independência Física** (alterar índices/arquivos sem afetar o nível conceitual) e **Independência Lógica** (alterar o esquema conceitual sem quebrar visões/aplicações existentes).

### Modelo Entidade-Relacionamento (MER / EER)
- **Entidade Forte** (possui chave primária própria) vs **Entidade Fraca** (não possui chave completa própria; depende existencialmente de uma entidade proprietária, possui **chave parcial** e participação **total** em um relacionamento identificador, ex.: \`Dependente\` de \`Funcionario\`).
- **Tipos de Atributos**: *Simples* (\`cpf\`), *Composto* (\`endereco\` = rua + cidade + CEP), *Multivalorado* (\`telefones\` — múltiplos valores por instância), *Derivado* (\`idade\` calculada de \`data_nasc\`) e *Identificador/Chave*.
- **Cardinalidades e Participação**: cardinalidade máxima ($1:1$, $1:N$, $N:M$) indica quantas instâncias podem se associar; cardinalidade mínima define participação **Parcial/Opcional** ($0$) ou **Total/Obrigatória** ($1$).
- **EER (Especialização / Generalização)**: restrição de **Disjunção** (\`d\` disjunta: instância pertence a no máximo uma subclasse; \`o\` sobreposta: pode pertencer a várias) e de **Completude** (total — linha dupla: toda instância da superclasse pertence a alguma subclasse; parcial — linha simples).

### Mapeamento MER $\\to$ Modelo Relacional e Restrições de Integridade
| Elemento no MER | Regra de Mapeamento para o Esquema Relacional |
|---|---|
| **Entidade Forte** | Vira uma tabela (relação); atributos compostos são achatados em colunas simples |
| **Atributo Multivalorado** | Vira uma **nova tabela** com FK da entidade + o atributo (PK composta por ambos) |
| **Entidade Fraca** | Vira tabela com FK da entidade forte + chave parcial formando sua **PK composta** |
| **Relacionamento $1:N$** | A PK do lado **$1$** migra como **Chave Estrangeira (FK)** para a tabela do lado **$N$** |
| **Relacionamento $N:M$** | Vira **nova tabela associativa** com as PKs das duas entidades como FKs (PK composta) + atributos próprios |
| **Relacionamento $1:1$** | PK de um lado vai como FK (com \`UNIQUE\`) para o lado de **participação total** (ou fundem-se as tabelas) |

#### Hierarquia de Chaves e Restrições Fundamentais
- **Superchave**: qualquer conjunto de atributos que identifica unicamente cada tupla.
- **Chave Candidata**: superchave **minimal** (nenhum subconjunto próprio é superchave).
- **Chave Primária (PK)**: chave candidata escolhida para identificar a tabela; **Chaves Alternativas** recebem \`UNIQUE\`.
- **Integridade de Entidade**: **nenhum atributo componente da Chave Primária pode ser \`NULL\`**.
- **Integridade Referencial**: todo valor de **Chave Estrangeira (FK)** deve corresponder a uma PK existente na tabela referenciada ou ser \`NULL\` (quando opcional). Ações ao excluir/atualizar a tabela pai: \`RESTRICT\` / \`NO ACTION\` (bloqueia), \`CASCADE\` (propaga exclusão/atualização), \`SET NULL\` ou \`SET DEFAULT\`.

> **Exemplo Resolvido Passo a Passo (Mapeamento MER $\\to$ Relacional):** Em uma clínica: \`Medico(crm, nome)\` atende vários \`Paciente(cpf, nome, telefones*)\` em um relacionamento $N:M$ chamado \`Consulta\` com atributos \`data_hora\` e \`diagnostico\`. Cada \`Medico\` pertence a uma única \`Especialidade(id_esp, nome_esp)\` ($1:N$).
> 1. \`Especialidade(id_esp [PK], nome_esp)\`.
> 2. Relacionamento $1:N$ (\`Especialidade\` 1 — N \`Medico\`): PK do lado 1 migra para o lado N $\\implies$ \`Medico(crm [PK], nome, id_esp [FK -> Especialidade])\`.
> 3. Atributo multivalorado \`telefones*\` de \`Paciente\` vira nova tabela $\\implies$ \`Paciente(cpf [PK], nome)\` e \`Paciente_Telefone(cpf [PK, FK -> Paciente], telefone [PK])\`.
> 4. Relacionamento $N:M$ \`Consulta\` vira tabela associativa $\\implies$ \`Consulta(crm [PK, FK -> Medico], cpf [PK, FK -> Paciente], data_hora [PK], diagnostico)\`.`,
      },
      {
        id: 'bd-normalizacao',
        title: '2. Dependências Funcionais e Normalização Completa (1FN, 2FN, 3FN e BCNF)',
        content: `### Anomalias de Redundância e Dependência Funcional
Tabelas mal projetadas sofrem de redundância e das **3 Anomalias de Atualização**:
- **Anomalia de Inserção**: impossível cadastrar um novo produto sem que exista um pedido associado.
- **Anomalia de Atualização (Modificação)**: mudar o endereço de um cliente exige alterar dezenas de linhas repetidas, sob risco de inconsistência.
- **Anomalia de Exclusão**: apagar o último pedido de um cliente destrói acidentalmente o único registro dos dados cadastrais desse cliente.

Dizemos que **$Y$ é funcionalmente dependente de $X$** ($X \\to Y$) quando, em qualquer instância válida da tabela, duas tuplas com o mesmo valor de $X$ têm obrigatoriamente o mesmo valor de $Y$ ($X$ é chamado de **determinante**).
- **Axiomas de Armstrong** (sãos e completos): **Reflexividade** (se $Y \\subseteq X$, então $X \\to Y$ — dependência trivial), **Aumento** ($X \\to Y \\implies XZ \\to YZ$) e **Transitividade** ($X \\to Y$ e $Y \\to Z \\implies X \\to Z$).
- **Atributo Primo**: pertence a *alguma* chave candidata. **Atributo Não-Primo**: não pertence a nenhuma chave candidata.

### Tabela Comparativa das Formas Normais (1FN $\\subset$ 2FN $\\subset$ 3FN $\\subset$ BCNF)
| Forma Normal | O Que Proíbe / Exige | Regra Formal | Observação Vital de Prova |
|---|---|---|---|
| **1FN** | Proíbe atributos **multivalorados, compostos ou grupos repetitivos** | Todo atributo tem domínio **atômico** (indivisível) | Elimina listas dentro de uma única célula (ex.: \`"Tel1, Tel2"\`) |
| **2FN** | Está em 1FN e proíbe **dependência funcional PARCIAL** | Nenhum atributo não-primo depende apenas de **parte** de uma chave candidata composta | **Atenção:** se toda chave candidata tem 1 único atributo, 1FN já implica 2FN! |
| **3FN** | Está em 2FN e proíbe **dependência funcional TRANSITIVA** | Para toda DF não-trivial $X \\to Y$: **$X$ é superchave** OU **$Y$ é atributo primo** | Elimina \`Chave -> NãoChave1 -> NãoChave2\` (ex.: \`id_cli -> cep -> cidade\`) |
| **BCNF** (Boyce-Codd) | Versão mais estrita da 3FN | Para toda DF não-trivial $X \\to Y$: **$X$ DEVE ser superchave** | Elimina anomalias raras de chaves candidatas compostas sobrepostas |

- **Propriedades de Decomposição**: toda decomposição DEVE garantir **Junção sem Perdas (*Lossless Join*)** (reunir as tabelas via \`JOIN\` recria exatamente as tuplas originais, sem tuplas espúrias — garantido se $(R_1 \\cap R_2)$ for superchave de $R_1$ ou de $R_2$!). Até a **3FN**, sempre existe decomposição com junção sem perdas E **preservação de dependências**; já a **BCNF** sempre garante junção sem perdas, mas em casos raros pode **não preservar** alguma dependência funcional!

> **Exemplo Resolvido Passo a Passo (Normalização 1FN $\\to$ 2FN $\\to$ 3FN):** Normalize a tabela \`Venda(num_ped, data, id_cli, nome_cli, cod_prod, desc_prod, qtd)\` cuja chave primária é composta: \`(num_ped, cod_prod)\`. Dependências funcionais identificadas:
> - \`num_ped -> data, id_cli, nome_cli\` (depende só de **parte** da PK!)
> - \`id_cli -> nome_cli\` (dependência **transitiva**: \`num_ped -> id_cli -> nome_cli\`!)
> - \`cod_prod -> desc_prod\` (depende só de **parte** da PK!)
> - \`(num_ped, cod_prod) -> qtd\` (dependência **total** da PK!)
>
> 1. **1FN**: assumindo todos os campos atômicos (um produto por linha), já está em 1FN.
> 2. **Eliminando dependências parciais (2FN)**: extraem-se os atributos que dependem apenas de \`num_ped\` e os que dependem apenas de \`cod_prod\`:
>    - \`Pedido(num_ped [PK], data, id_cli, nome_cli)\`
>    - \`Produto(cod_prod [PK], desc_prod)\`
>    - \`ItemPedido(num_ped [PK, FK], cod_prod [PK, FK], qtd)\`
> 3. **Eliminando dependências transitivas (3FN)**: em \`Pedido\`, \`nome_cli\` depende transitivamente de \`num_ped\` via \`id_cli\` (não-chave). Decompõe-se \`Pedido\`:
>    - \`Cliente(id_cli [PK], nome_cli)\`
>    - \`Pedido(num_ped [PK], data, id_cli [FK -> Cliente])\`
>    - \`Produto(cod_prod [PK], desc_prod)\` e \`ItemPedido(num_ped [PK, FK], cod_prod [PK, FK], qtd)\`.
> 4. Agora todas as 4 tabelas estão em **3FN e BCNF**, com junção sem perdas e preservação de dependências!`,
        keyFormulas: [
          {
            label: 'Hierarquia das Formas Normais',
            latex: '\\text{1FN (atômicos)} \\supset \\text{2FN (sem parcial)} \\supset \\text{3FN (sem transitiva)} \\supset \\text{BCNF (todo det. é superchave)}',
            note: 'Cada nível inclui todas as restrições do nível anterior.',
          },
          {
            label: 'Condição de Junção sem Perdas (Decomposição Binária)',
            latex: '(R_1 \\cap R_2) \\to R_1 \\quad \\text{ou} \\quad (R_1 \\cap R_2) \\to R_2',
            note: 'A interseção dos atributos comuns deve ser superchave de pelo menos uma das tabelas resultantes.',
          },
        ],
      },
      {
        id: 'bd-algebra-relacional',
        title: '3. Álgebra Relacional, Equivalência SQL e Otimização de Consultas',
        content: `### Operadores Fundamentais e Derivados da Álgebra Relacional
A Álgebra Relacional é a linguagem procedural formal baseada na Teoria dos Conjuntos (não admite tuplas duplicadas!) sobre a qual o otimizador de consultas de todo SGBD relacional funciona:

| Operador | Símbolo | Ação sobre a Relação | Equivalente em SQL |
|---|---|---|---|
| **Seleção** | $\\sigma_{P}(R)$ | Filtra **LINHAS (tuplas)** que satisfazem o predicado $P$ (horizontal) | \`SELECT * FROM R WHERE P\` |
| **Projeção** | $\\pi_{A_1,\\dots,A_k}(R)$ | Seleciona **COLUNAS (atributos)** e elimina duplicatas (vertical) | \`SELECT DISTINCT A1, ..., Ak FROM R\` |
| **Renomeação** | $\\rho_{S(B_1,\\dots)}(R)$ | Renomeia relação ou atributos (útil para autojunções) | \`AS\` (aliases de tabela/coluna) |
| **União / Interseção / Diferença** | $R \\cup S$, $R \\cap S$, $R - S$ | Operações de conjuntos (exigem **compatibilidade de união**: mesmo nº de colunas e domínios compatíveis!) | \`UNION\`, \`INTERSECT\`, \`EXCEPT\` / \`MINUS\` |
| **Produto Cartesiano** | $R \\times S$ | Combina cada tupla de $R $ com cada tupla de $S$ ($\\lvert R \\rvert \\cdot \\lvert S \\rvert$ tuplas) | \`CROSS JOIN\` |
| **Junção Theta / Equijunção** | $R \\bowtie_{\\theta} S$ | Equivale a $\\sigma_{\\theta}(R \\times S)$ — combina tuplas que casam a condição $\\theta$ | \`INNER JOIN ... ON θ\` |
| **Junção Natural** | $R \\bowtie S$ | Equijunção automática em todos os atributos de **mesmo nome**, eliminando colunas repetidas | \`NATURAL JOIN\` |
| **Junção Externa** | Left / Right / Full Outer Join | Preserva tuplas sem correspondência preenchendo com \`NULL\` | \`LEFT / RIGHT / FULL OUTER JOIN\` |
| **Divisão** | $R \\div S$ | Retorna valores de $R $ associados a **TODOS** os valores de $S$ | Consulta com duplo \`NOT EXISTS\` |

### Otimização Heurística de Consultas (Árvore Algébrica)
Quando você submete um \`SELECT\`, o SGBD faz *parsing*, gera uma árvore de Álgebra Relacional e aplica **regras de equivalência** para minimizar I/O de disco e memória intermediária:
1. **Empurrar Seleções ($\\sigma$) para baixo (o mais cedo possível)**: filtrar linhas *antes* de fazer \`JOIN\` ou produto cartesiano reduz exponencialmente o volume de tuplas combinadas!
2. **Empurrar Projeções ($\\pi$) para baixo**: descartar colunas desnecessárias cedo reduz a largura das tuplas temporárias.
3. **Substituir $\\sigma_{\\theta}(R \\times S)$ por $R \\bowtie_{\\theta} S$**: nunca materializar o produto cartesiano inteiro!
4. **Executar primeiro as seleções/junções mais restritivas** (as que devolvem menos linhas).

> **Exemplo Resolvido Passo a Passo (Álgebra Relacional + Otimização):** Dadas \`Aluno(mat, nome, curso)\`, \`Matricula(mat, cod_disc, nota)\` e \`Disciplina(cod_disc, titulo)\`, escreva e otimize a expressão algébrica que retorna o \`nome\` dos alunos de \`'EngComp'\` aprovados (\`nota >= 7\`) na disciplina \`'Banco de Dados'\`.
> 1. **Expressão ingênua** (junta tudo antes de filtrar — péssima performance!):
>    $$\\pi_{\\text{nome}}\\Bigl(\\sigma_{\\text{curso='EngComp'} \\land \\text{nota}\\ge 7 \\land \\text{titulo='Banco de Dados'}}\\bigl(\\text{Aluno} \\bowtie \\text{Matricula} \\bowtie \\text{Disciplina}\\bigr)\\Bigr)$$
> 2. **Expressão otimizada** (empurrando $\\sigma$ e $\\pi$ para as folhas antes das junções!):
>    $$\\pi_{\\text{nome}}\\Bigl(\\pi_{\\text{mat,nome}}(\\sigma_{\\text{curso='EngComp'}}(\\text{Aluno})) \\bowtie \\pi_{\\text{mat,cod\\_disc}}(\\sigma_{\\text{nota}\\ge 7}(\\text{Matricula})) \\bowtie \\pi_{\\text{cod\\_disc}}(\\sigma_{\\text{titulo='Banco de Dados'}}(\\text{Disciplina}))\\Bigr)$$
> 3. Ambas produzem exatamente o mesmo resultado, mas a forma otimizada reduz em ordens de magnitude o custo de memória e I/O das junções!`,
        keyFormulas: [
          {
            label: 'Equivalência Fundamental Álgebra Relacional ↔ SQL',
            latex: '\\pi_{cols}\\bigl(\\sigma_{cond}(R \\bowtie S)\\bigr) \\iff \\texttt{SELECT DISTINCT cols FROM R JOIN S WHERE cond}',
            note: 'Em Álgebra Relacional não existem duplicatas; em SQL, duplicatas permanecem sem DISTINCT.',
          },
          {
            label: 'Definição da Divisão Relacional ("PARA TODOS")',
            latex: 'R(A,B) \\div S(B) = \\pi_A(R) - \\pi_A\\Bigl(\\bigl(\\pi_A(R) \\times S\\bigr) - R\\Bigr)',
            note: 'Identifique divisão em enunciados contendo "todos os projetos", "todas as disciplinas", etc.',
          },
        ],
      },
      {
        id: 'bd-sql-completo',
        title: '4. SQL Completo: DDL, DML, DQL, JOINs, GROUP BY/HAVING e Lógica NULL',
        content: `### Sublinguagens SQL
- **DDL (*Data Definition Language*)**: define estrutura — \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\` (remove todas as linhas rapidamente sem log linha a linha, reseta sequências). Restrições: \`PRIMARY KEY\`, \`FOREIGN KEY\`, \`UNIQUE\`, \`NOT NULL\`, \`CHECK\`, \`DEFAULT\`.
- **DML (*Data Manipulation Language*)**: manipula dados — \`INSERT\`, \`UPDATE\`, \`DELETE\` (sempre com \`WHERE\` para não alterar/apagar toda a tabela!).
- **DQL (*Data Query Language*)**: consulta dados — \`SELECT\`.
- **DCL (*Data Control Language*)**: permissões — \`GRANT\`, \`DENY\`, \`REVOKE\`.
- **TCL (*Transaction Control Language*)**: transações — \`BEGIN\`, \`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\`.

### Ordem Lógica de Execução de uma Consulta SQL (Regra de Ouro!)
Embora escrevamos \`SELECT ... FROM ... WHERE ...\`, o motor SQL avalia as cláusulas nesta **ordem exata**:
1. **\`FROM\` e \`JOIN\`**: monta o conjunto base de tabelas e junções.
2. **\`WHERE\`**: filtra **linhas individuais ANTES** do agrupamento (**NÃO aceita** \`COUNT\`, \`SUM\`, \`AVG\`, \`MAX\`, \`MIN\` nem aliases do \`SELECT\`!).
3. **\`GROUP BY\`**: agrupa as linhas restantes pelas colunas especificadas. *(Regra SQL padrão: toda coluna no \`SELECT\` fora de função de agregação deve estar no \`GROUP BY\`!)*
4. **\`HAVING\`**: filtra **GRUPOS DEPOIS** do \`GROUP BY\` (aqui **SIM** usam-se funções de agregação como \`HAVING COUNT(*) >= 3\`!).
5. **\`SELECT\`** (e \`DISTINCT\`): calcula expressões, aliases e projeta colunas.
6. **\`ORDER BY\`**: ordena o resultado final (\`ASC\` padrão ou \`DESC\`; aceita aliases do \`SELECT\`!).
7. **\`LIMIT\` / \`OFFSET\`** (ou \`FETCH FIRST\`): pagina a saída.

### Comparativo de JOINs e Armadilhas do \`NULL\` (Lógica Trivalorada)
| Tipo de JOIN | Quais Linhas Retorna |
|---|---|
| **\`INNER JOIN\`** | Apenas linhas que possuem correspondência em **AMBAS** as tabelas |
| **\`LEFT [OUTER] JOIN\`** | **Todas** as linhas da tabela à **esquerda** + correspondentes da direita (\`NULL\` à direita se não houver par) |
| **\`RIGHT [OUTER] JOIN\`** | **Todas** as linhas da tabela à **direita** + correspondentes da esquerda (\`NULL\` à esquerda se não houver par) |
| **\`FULL [OUTER] JOIN\`** | **Todas** as linhas de ambas as tabelas, combinando onde houver par e preenchendo \`NULL\` onde não houver |
| **\`CROSS JOIN\`** | Produto cartesiano completo ($m \\times n$ linhas) |

**Cuidados Críticos com \`NULL\` em SQL**:
- SQL usa **lógica trivalorada** (\`TRUE\`, \`FALSE\`, \`UNKNOWN\`). Qualquer comparação \`col = NULL\` ou \`col <> NULL\` retorna \`UNKNOWN\` (tratado como falso no \`WHERE\`!). Use sempre **\`IS NULL\`** ou **\`IS NOT NULL\`**.
- **\`COUNT(*)\`** conta todas as linhas do grupo (incluindo \`NULL\`); **\`COUNT(col)\`** ignora linhas onde \`col\` é \`NULL\`! (Essencial após \`LEFT JOIN\`: use \`COUNT(direita.id)\` para obter \`0\` em vez de \`1\` para linhas sem correspondência!).
- **\`NOT IN (subconsulta)\`**: se a subconsulta retornar sequer UM \`NULL\`, \`x NOT IN (1, 2, NULL)\` vira \`x <> 1 AND x <> 2 AND UNKNOWN\` = \`UNKNOWN\` $\\implies$ **retorna ZERO linhas!** Prefira \`NOT EXISTS\`!`,
        codeExample: {
          language: 'sql',
          title: 'SQL Completo: DDL com Integridade Referencial + DQL com LEFT JOIN, GROUP BY, HAVING e NOT EXISTS',
          code: `-- 1. DDL: Tabelas com PK, FK, CHECK e acao referencial
CREATE TABLE Departamento (
    id_dept INT PRIMARY KEY,
    nome    VARCHAR(60) NOT NULL UNIQUE
);

CREATE TABLE Funcionario (
    id_func INT PRIMARY KEY,
    nome    VARCHAR(80) NOT NULL,
    salario DECIMAL(10,2) NOT NULL CHECK (salario > 0),
    id_dept INT REFERENCES Departamento(id_dept) ON DELETE RESTRICT
);

-- 2. DQL: Departamentos cuja folha media de funcionarios ativos (salario > 3000)
--    ultrapassa 5000 e possui pelo menos 2 funcionarios
SELECT d.nome AS departamento,
       COUNT(f.id_func) AS qtd_func,     -- COUNT(col) ignora NULL de LEFT JOIN!
       ROUND(AVG(f.salario), 2) AS media_salarial
FROM Departamento d
LEFT JOIN Funcionario f ON f.id_dept = d.id_dept
WHERE f.salario > 3000                   -- Filtra LINHAS antes de agrupar
GROUP BY d.id_dept, d.nome
HAVING COUNT(f.id_func) >= 2             -- Filtra GRUPOS apos agregacao
   AND AVG(f.salario) > 5000
ORDER BY media_salarial DESC;

-- 3. Seguro contra NULL: departamentos SEM nenhum funcionario (evita armadilha do NOT IN!)
SELECT d.nome
FROM Departamento d
WHERE NOT EXISTS (
    SELECT 1 FROM Funcionario f WHERE f.id_dept = d.id_dept
);`,
        },
      },
      {
        id: 'bd-dcl-seguranca',
        title: '5. Controle de Acesso em SGBDs (DCL): GRANT, DENY, REVOKE e WITH GRANT OPTION',
        content: `### Modelos de Controle de Acesso e DCL (Tema Direto ENADE 2017 Q33!)
Os SGBDs implementam **Autenticação** (verificar *quem* é o usuário) e **Autorização** (verificar *o que* ele pode fazer sobre tabelas, views, colunas ou procedures). Nos bancos relacionais predominam o **DAC** (*Discretionary Access Control*, concessão direta de privilégios pelo proprietário) e o **RBAC** (*Role-Based Access Control*, concessão a **papéis/grupos** aos quais usuários são associados).

Os três comandos fundamentais da **DCL** e suas regras exatas de precedência são:
1. **\`GRANT\`**: concede um ou mais privilégios (\`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`REFERENCES\`, \`ALL PRIVILEGES\`) a um usuário ou papel/grupo.
   - **Cláusula \`WITH GRANT OPTION\`**: autoriza o destinatário a **repassar (transmitir)** esse mesmo privilégio (total ou parcial) para outros usuários! *(Sem \`WITH GRANT OPTION\`, o usuário pode usar o privilégio, mas não pode repassá-lo.)*
2. **\`DENY\`** *(presente no SQL Server e cobrado no ENADE 2017 Q33!)*: **nega explicitamente** o privilégio a um usuário ou grupo/role.
   - **REGRA ABSOLUTA DE PRECEDÊNCIA**: **\`DENY\` SEMPRE PREVALECE SOBRE \`GRANT\`!**
   - Se o usuário \`Joao\` recebe \`GRANT SELECT ON Folha TO Joao\` diretamente, mas pertence ao grupo \`Estagiarios\` que possui \`DENY SELECT ON Folha TO Estagiarios\`, o acesso de \`Joao\` é **BLOQUEADO**!
3. **\`REVOKE\`**: **remove** uma permissão concedida (\`GRANT\`) ou negada (\`DENY\`) previamente, devolvendo o alvo ao estado neutro (*nem concedido, nem negado*).
   - **\`REVOKE\` NÃO É IGUAL A \`DENY\`!** Se \`Joao\` tem \`GRANT\` individual E pertence ao grupo \`Analistas\` com \`GRANT\`, executar \`REVOKE SELECT ON Folha FROM Joao\` retira apenas o privilégio individual — ele **CONTINUA acessando** por herança do grupo \`Analistas\`! Para bloquear independentemente de grupos, só com \`DENY\` (ou revogando também do grupo).
   - **\`REVOKE ... CASCADE\` vs \`RESTRICT\`**: quando \`Alice\` repassou \`SELECT\` para \`Bob\` usando \`WITH GRANT OPTION\`, revogar \`SELECT\` de \`Alice\` com \`CASCADE\` revoga automaticamente o acesso de \`Bob\` (exceto se \`Bob\` tiver outra cadeia independente de concessão!); com \`RESTRICT\`, o SGBD recusa o \`REVOKE\` se existirem privilégios dependentes.

| Comando DCL | Efeito Direto | Combinação com \`GRANT\` herdado de Grupo | Combinação com \`DENY\` herdado de Grupo |
|---|---|---|---|
| **\`GRANT\`** | Concede acesso | **Permitido** | **NEGADO** (\`DENY\` prevalece!) |
| **\`REVOKE\`** | Remove concessão/negação prévia (estado neutro) | **Permitido** (herda do grupo!) | **NEGADO** (herda \`DENY\` do grupo) |
| **\`DENY\`** | Bloqueia explicitamente | **NEGADO** (\`DENY\` prevalece!) | **NEGADO** |

### Segurança Complementar: Views e Prevenção de SQL Injection
- **Views como barreira de segurança**: pode-se dar \`GRANT SELECT\` apenas sobre uma \`VIEW\` que oculta colunas sensíveis (como \`salario\` ou \`cpf\`) sem conceder acesso à tabela base!
- **SQL Injection**: ocorre ao concatenar entrada do usuário diretamente na string SQL (ex.: \`' OR '1'='1\`). Previne-se usando **Consultas Parametrizadas (*Prepared Statements*)**, que separam rigidamente o plano de código SQL dos dados de entrada, aliados ao princípio do menor privilégio.

> **Exemplo Resolvido Passo a Passo (Cenário DCL — Estilo ENADE 2017 Q33):** Considere a tabela \`Clientes\`, os usuários \`Ana\`, \`Bruno\` e \`Carlos\`, e o grupo \`Vendas\` (ao qual pertencem \`Ana\` e \`Bruno\`). Avalie a sequência abaixo:
> 1. \`GRANT SELECT, UPDATE ON Clientes TO Ana WITH GRANT OPTION;\` $\\to$ \`Ana\` pode ler, atualizar e **repassar** ambos os privilégios.
> 2. \`Ana\` executa: \`GRANT SELECT ON Clientes TO Carlos;\` $\\to$ **Válido!** \`Carlos\` passa a poder ler \`Clientes\` (mas não pode repassar a outros, pois não recebeu \`WITH GRANT OPTION\`).
> 3. DBA executa: \`DENY UPDATE ON Clientes TO Vendas;\` $\\to$ Como \`Ana\` pertence ao grupo \`Vendas\`, o \`DENY\` no grupo **prevalece** sobre o \`GRANT UPDATE\` individual de \`Ana\`! Logo, \`Ana\` **perde o direito de \`UPDATE\`**, mas mantém \`SELECT\`.
> 4. DBA executa: \`REVOKE SELECT ON Clientes FROM Ana CASCADE;\` $\\to$ Retira \`SELECT\` de \`Ana\` e, por causa de \`CASCADE\`, revoga também o \`SELECT\` que \`Ana\` havia concedido a \`Carlos\`!`,
        keyFormulas: [
          {
            label: 'Precedência DCL em SGBDs',
            latex: '\\text{DENY (usuário ou grupo)} \\succ \\text{GRANT (usuário ou grupo)}, \\qquad \\text{REVOKE} \\neq \\text{DENY}',
            note: 'WITH GRANT OPTION permite transmitir privilégios a terceiros; REVOKE CASCADE desfaz concessões derivadas.',
          },
        ],
        codeExample: {
          language: 'sql',
          title: 'SQL DCL: RBAC, WITH GRANT OPTION, Precedência de DENY e Proteção via View',
          code: `-- Criacao de papeis (RBAC) e associacao
CREATE ROLE GrupoAnalistas;
CREATE ROLE GrupoEstagiarios;

-- Concede SELECT com direito de repassar a outros usuarios
GRANT SELECT ON Pedidos TO Maria WITH GRANT OPTION;
GRANT SELECT ON Pedidos TO GrupoAnalistas;

-- Bloqueio explicito tem precedencia absoluta sobre qualquer GRANT
DENY SELECT ON FolhaPagamento TO GrupoEstagiarios;
-- Mesmo com GRANT individual, se Joao esta em GrupoEstagiarios, NAO acessa FolhaPagamento!
GRANT SELECT ON FolhaPagamento TO Joao;

-- Revoga privilegio e quaisquer repasses feitos por Maria (CASCADE)
REVOKE SELECT ON Pedidos FROM Maria CASCADE;

-- Seguranca por View: expoe apenas colunas publicas
CREATE VIEW vw_FuncionariosPublico AS
SELECT id_func, nome, id_dept FROM Funcionario; -- oculta salario!
GRANT SELECT ON vw_FuncionariosPublico TO GrupoEstagiarios;`,
        },
      },
      {
        id: 'bd-transacoes-indices',
        title: '6. Transações ACID, Níveis de Isolamento e Índices (Árvore B+ vs Hash)',
        content: `### Transações e Propriedades ACID
Uma **transação** é uma unidade lógica indivisível de trabalho (ex.: transferir R$ 500 da conta A para B). Todo SGBD transacional garante as 4 propriedades **ACID**:
- **A — Atomicidade (*Tudo ou Nada*)**: ou todas as operações da transação são efetivadas (\`COMMIT\`), ou nenhuma surte efeito (\`ROLLBACK\`), mesmo diante de quedas de energia. Garantida pelo **Gerenciador de Recuperação** via **WAL (*Write-Ahead Logging*)** (grava o log em disco *antes* das páginas de dados) aplicando **\`UNDO\`** em transações não confirmadas.
- **C — Consistência**: leva o banco de um estado válido a outro estado válido, preservando todas as chaves, \`CHECK\`, integridade referencial e regras de negócio.
- **I — Isolamento**: transações concorrentes executam como se estivessem isoladas (equivalência a algum escalonamento **serial** — *seriabilidade por conflito*), evitando interferências indesejadas. Garantido pelo **Controle de Concorrência** (ex.: **2PL — *Two-Phase Locking* Rigoroso** com bloqueios compartilhados \`S\` e exclusivos \`X\`, ou **MVCC** — controle multiversão no PostgreSQL/InnoDB).
- **D — Durabilidade**: uma vez confirmado o \`COMMIT\`, os efeitos sobrevivem permanentemente a falhas de hardware/energia (garantida via **\`REDO\`** no log WAL).

### Anomalias de Concorrência e Níveis de Isolamento SQL-92
1. **Leitura Suja (*Dirty Read*)**: $T_2$ lê um valor modificado por $T_1$ que ainda **não fez \`COMMIT\`** (e depois $T_1$ faz \`ROLLBACK\`!).
2. **Leitura Não-Repetível (*Non-Repeatable Read*)**: $T_1$ lê uma linha duas vezes e recebe valores diferentes porque $T_2$ **atualizou/deletou** e commitou a linha nesse intervalo.
3. **Leitura Fantasma (*Phantom Read*)**: $T_1$ executa duas vezes uma consulta com \`WHERE\` de intervalo e surgem **novas linhas** inseridas e commitadas por $T_2$.

| Nível de Isolamento SQL | Leitura Suja | Leitura Não-Repetível | Leitura Fantasma | Desempenho / Concorrência |
|---|---|---|---|---|
| **\`READ UNCOMMITTED\`** | **Possível** | **Possível** | **Possível** | Máxima concorrência (menor segurança) |
| **\`READ COMMITTED\`** *(padrão Postgres/Oracle)* | Evitada | **Possível** | **Possível** | Alta concorrência |
| **\`REPEATABLE READ\`** *(padrão MySQL InnoDB)* | Evitada | Evitada | **Possível** *(no padrão SQL-92)* | Média |
| **\`SERIALIZABLE\`** | Evitada | Evitada | Evitada | Máximo isolamento (menor concorrência) |

### Índices Físicos: Árvore B+ vs Índice Hash
Índices aceleram drasticamente consultas (\`WHERE\`, \`JOIN\`, \`ORDER BY\`) evitando varredura completa da tabela (*Full Table Scan*), ao custo de espaço extra e overhead de manutenção em \`INSERT\`/\`UPDATE\`/\`DELETE\`.

| Aspecto | Índice em Árvore B+ (*B+ Tree*) | Índice Hash |
|---|---|---|
| Estrutura interna | Árvore balanceada de alto grau (*fan-out* típico de centenas de chaves/página); **todos os ponteiros de dados ficam nas folhas**, que são **encadeadas em lista ligada** | Função hash $h(k) \\to \\text{bucket}$ com tratamento de colisões |
| Busca por igualdade (\`=\`) | $O(\\log_B N)$ — altura típica de apenas **3 a 4 níveis** para milhões de linhas! | **$O(1)$ médio** (extremamente rápido) |
| **Consultas por intervalo (\`BETWEEN\`, \`<\`, \`>\`, \`LIKE 'abc%'\`, \`ORDER BY\`)** | **EXCELENTE!** Acha o início na folha em $O(\\log_B N)$ e percorre sequencialmente as folhas encadeadas | **INADEQUADO / INÚTIL!** Hash destrói a ordenação das chaves |
| Uso padrão em SGBDs | Índice **padrão universal** (PK, FK, buscas de intervalo e ordenação) | Usos especializados para igualdade exata (\`=\`) em memória/SGBD |

- **Índice Clusterizado (Primário)**: define a **ordem física** de armazenamento das linhas da tabela no disco (no máximo **1 por tabela**). **Índice Não-Clusterizado (Secundário)**: estrutura separada contendo \`(chave, ponteiro/PK)\` — uma tabela pode ter vários!`,
        keyFormulas: [
          {
            label: 'Complexidade de Busca em Índices',
            latex: '\\text{Árvore B+: } O(\\log_B N) \\;(\\text{igualdade e intervalo}), \\qquad \\text{Hash: } O(1)\\text{ médio (apenas igualdade)}',
            note: 'Em uma Árvore B+ com fan-out B=100 e altura 4, cabem até 100⁴ = 100 milhões de chaves com apenas 4 leituras de página!',
          },
        ],
      },
    ],
    inepTraps: [
      'PEGADINHA CLÁSSICA (ENADE 2017 Q33!): Achar que um `GRANT` individual vence um `DENY` herdado de grupo — **FALSO!** A regra absoluta em SGBDs é **`DENY` sempre prevalece sobre `GRANT`**, seja o `DENY` atribuído diretamente ao usuário ou a qualquer grupo/role ao qual ele pertença.',
      'PEGADINHA CLÁSSICA (ENADE 2017 Q33!): Afirmar que em SQL um usuário que recebeu privilégio de acesso **nunca pode transmiti-lo** a outro usuário — **FALSO!** Se o privilégio foi concedido com **`WITH GRANT OPTION`**, o destinatário PODE repassá-lo a terceiros.',
      'Confundir `REVOKE` com `DENY`: `REVOKE` apenas **remove** uma concessão/negação anterior (voltando ao estado neutro); se o usuário ainda herdar `GRANT` de outro grupo, continuará com acesso!',
      'Usar funções de agregação (`COUNT`, `SUM`, `AVG`) na cláusula `WHERE` (erro de sintaxe: use `HAVING` após `GROUP BY`!) ou comparar com `= NULL` em vez de `IS NULL` (em SQL, `NULL = NULL` resulta em `UNKNOWN`, não `TRUE`!).',
      'Marcar que uma tabela com **chave primária simples** (1 coluna) viola a **2FN** (impossível violar 2FN sem chave composta — ela pode violar 1FN ou 3FN!), ou afirmar que um **Índice Hash** acelera consultas com `BETWEEN`, `<`, `>` ou `ORDER BY` (somente **Árvore B+** preserva ordem!).',
    ],
    quickChecklist: [
      'Sei mapear MER $\\to$ Relacional ($1:N$ migra PK do lado 1 para N; $N:M$ cria tabela associativa; multivalorado cria nova tabela)?',
      'Sei explicar 1FN (atômico), 2FN (sem dependência parcial), 3FN (sem dependência transitiva) e BCNF (todo determinante é superchave)?',
      'Sei traduzir entre Álgebra Relacional ($\\sigma, \\pi, \\bowtie, \\div$) e SQL, e sei por que empurrar $\\sigma$ antes de $\\bowtie$ otimiza consultas?',
      'Tenho clara a ordem lógica SQL (`FROM/JOIN` $\\to$ `WHERE` $\\to$ `GROUP BY` $\\to$ `HAVING` $\\to$ `SELECT` $\\to$ `ORDER BY`) e a diferença `COUNT(*)` vs `COUNT(col)`?',
      'Domino `GRANT`, `DENY`, `REVOKE`, `CASCADE` e `WITH GRANT OPTION`, lembrando que `DENY` sempre vence `GRANT`?',
      'Sei definir Atomicidade (WAL/UNDO), Consistência, Isolamento (2PL/MVCC) e Durabilidade (WAL/REDO)?',
      'Sei mapear as 3 anomalias (Dirty Read, Non-Repeatable Read, Phantom Read) nos 4 níveis de isolamento SQL?',
      'Sei quando escolher **Árvore B+** (padrão, excelente para igualdade e intervalos/ordenação) versus **Índice Hash** (somente igualdade $O(1)$)?',
    ],
  },

  // =========================================================================
  // MÓDULO 5: TEORIA DA COMPUTAÇÃO, LINGUAGENS FORMAIS E COMPILADORES
  // =========================================================================
  {
    id: 'teoria-compiladores',
    title: 'Teoria da Computação, Linguagens Formais e Compiladores',
    subtitle: 'Expressões Regulares, AFD/AFN e Minimização, GLC e Chomsky, Lema do Bombeamento, Fases do Compilador (LL/LR/Otimização) e P/NP',
    estimatedMinutes: 95,
    overview:
      'Construa uma base teórica sólida em Linguagens Formais, Autômatos, Compiladores e Complexidade Computacional para gabaritar o ENADE. Estude alfabetos, expressões regulares e suas equivalências algébricas, conversão AFN→AFD e minimização, gramáticas livres de contexto e ambiguidade, Hierarquia de Chomsky, Lema do Bombeamento, todas as fases de um compilador (léxica, sintática LL/LR, semântica, código intermediário, otimizações e geração de código) e as classes P, NP e NP-Completo.',
    enadeWeightNote:
      'Disciplina clássica do Componente Específico com questões conceituais cirúrgicas — destaque para **Expressões Regulares e suas múltiplas representações equivalentes** (**ENADE 2017 Q20**), classificação na Hierarquia de Chomsky, distinção de erros por fase do compilador e noções de P/NP/NP-Completo.',
    sections: [
      {
        id: 'teo-alfabetos-er',
        title: '1. Alfabetos, Linguagens Formais, Expressões Regulares e Equivalências',
        content: `### Alfabetos, Cadeias e Linguagens
- **Alfabeto ($\\Sigma$)**: conjunto **finito e não vazio** de símbolos (ex.: $\\Sigma = \\{0, 1\\}$).
- **Cadeia (ou Palavra, $w$)**: sequência finita de símbolos de $\\Sigma$; seu comprimento é $\\lvert w \\rvert$. A **cadeia vazia** é denotada por **$\\varepsilon$** (ou $\\lambda$) e tem comprimento $\\lvert \\varepsilon \\rvert = 0$.
- **Fecho de Kleene ($\\Sigma^*$)**: conjunto de **todas** as cadeias finitas sobre $\\Sigma$, **incluindo $\\varepsilon$**: $\\Sigma^* = \\bigcup_{k=0}^{\\infty} \\Sigma^k = \\{\\varepsilon\\} \\cup \\Sigma \\cup \\Sigma^2 \\cup \\dots$
- **Fecho Positivo ($\\Sigma^+$)**: todas as cadeias não vazias: $\\Sigma^+ = \\Sigma^* - \\{\\varepsilon\\} = \\Sigma \\cdot \\Sigma^*$.
- **Linguagem Formal ($L$)**: qualquer subconjunto de cadeias sobre um alfabeto ($L \\subseteq \\Sigma^*$).
- **Diferença Vital — $\\emptyset$ vs $\\{\\varepsilon\\}$**:
  - $\\emptyset = \\{\\}$ é a **linguagem vazia** (0 palavras): $\\emptyset \\cdot L = L \\cdot \\emptyset = \\emptyset$, mas **$\\emptyset^* = \\{\\varepsilon\\}$**!
  - $\\{\\varepsilon\\}$ é a linguagem com **1 palavra** (a cadeia vazia): $\\{\\varepsilon\\} \\cdot L = L \\cdot \\{\\varepsilon\\} = L$ (elemento neutro da concatenação!).

### Expressões Regulares (ER), Precedência e Equivalências (ENADE 2017 Q20!)
Uma **Expressão Regular** define recursivamente uma Linguagem Regular usando três operadores básicos, listados em **ordem decrescente de precedência**:
1. **Parênteses** \`(...)\` — maior precedência.
2. **Fecho de Kleene** \`*\` (0 ou mais repetições) e atalhos \`+\` (1 ou mais: $r^+ = rr^*$) e \`?\` (0 ou 1: $r? = r + \\varepsilon$).
3. **Concatenação** (\`.\` implícito, ex.: \`ab\`).
4. **União / Alternância** (\`+\` ou \`|\`, ex.: \`a + b\` ou \`a|b\`) — menor precedência! Assim, \`ab* + c\` significa \`(a(b*)) + c\`.

**TEOREMA CRUCIAL (Cobrado diretamente no ENADE 2017 Q20!):** **NÃO existe uma única Expressão Regular para cada linguagem regular!** Infinitas ERs sintaticamente diferentes podem descrever exatamente a **mesma linguagem**! Conheça as identidades algébricas mais usadas:
- **Idempotência do Fecho**: $(r^*)^* \\equiv r^*$ e $r^* r^* \\equiv r^*$ e $(r + \\varepsilon)^* \\equiv r^*$.
- **Absorção de União no Fecho**: $(r + s)^* \\equiv (r^* s^*)^* \\equiv (r^* + s^*)^* \\equiv (r^* s)^* r^*$.
- **Comutatividade/Distributividade**: $r + s \\equiv s + r$; $r(s + t) \\equiv rs + rt$; $(s + t)r \\equiv sr + tr$. *(Atenção: concatenação **NÃO** é comutativa: $rs \\neq sr$!)*
- **Identidade de Fecho Positivo**: $r^+ \\equiv r r^* \\equiv r^* r$ e $r^* \\equiv \\varepsilon + r^+$.

> **Exemplo Resolvido Passo a Passo (Análise de ERs e Equivalências — Estilo ENADE 2017 Q20):**
> **Parte A:** Verifique se as ERs $E_1 = (a^* b^*)^*$ e $E_2 = (a + b)^*$ geram exatamente a mesma linguagem sobre $\\Sigma = \\{a, b\\}$.
> 1. Como $a \\in L(a^* b^*)$ (escolhendo $a^1 b^0$) e $b \\in L(a^* b^*)$ (escolhendo $a^0 b^1$), temos $L(a+b) \\subseteq L(a^* b^*)$, logo $(a+b)^* \\subseteq (a^* b^*)^*$.
> 2. Reciprocamente, toda cadeia em $a^* b^*$ usa apenas símbolos de $\\{a, b\\}$, logo está em $(a+b)^*$; aplicando fecho de Kleene, $(a^* b^*)^* \\subseteq ((a+b)^*)^* = (a+b)^*$.
> 3. **Conclusão**: $L(E_1) = L(E_2) = \\{a, b\\}^*$ — duas ERs diferentes descrevendo exatamente a **mesma linguagem**!
>
> **Parte B:** Construa a ER para cadeias sobre $\\{0, 1\\}$ que **terminam em \`01\`** e verifique se \`1101\` e \`010\` pertencem à linguagem.
> - ER: $(0 + 1)^* 01$ (prefixo arbitrário seguido de \`01\`).
> - \`1101\` $\\in L$ (prefixo \`11\` + sufixo \`01\`). Já \`010\` $\\notin L$ (termina em \`10\`).`,
        keyFormulas: [
          {
            label: 'Fecho de Kleene, Fecho Positivo e Linguagem Vazia',
            latex: 'L^* = \\bigcup_{k=0}^{\\infty} L^k, \\qquad L^+ = L \\cdot L^*, \\qquad \\emptyset^* = \\{\\varepsilon\\}',
            note: 'Cuidado: ∅ não tem palavras (|∅|=0), mas {ε} tem 1 palavra (|{ε}|=1)!',
          },
          {
            label: 'Identidades Algébricas Clássicas de Expressões Regulares',
            latex: '(r^*)^* \\equiv r^*, \\qquad (r + \\varepsilon)^* \\equiv r^*, \\qquad (r + s)^* \\equiv (r^* s^*)^*',
            note: 'Infinitas ERs distintas podem gerar a mesma linguagem regular (ENADE 2017 Q20!).',
          },
        ],
      },
      {
        id: 'teo-automatos-finitos',
        title: '2. Autômatos Finitos (AFD, AFN, AFN-ε), Conversão e Minimização',
        content: `### Definições Formais: AFD vs AFN vs AFN-$\\varepsilon$
Um **Autômato Finito** reconhece linguagens usando memória **finita** (conjunto finito de estados — não possui pilha nem fita auxiliar!).
- **AFD (Autômato Finito Determinístico)**: 5-tupla $M = (Q, \\Sigma, \\delta, q_0, F)$, onde $Q$ é o conjunto finito de estados, $\\Sigma$ o alfabeto, $q_0 \\in Q$ o estado inicial, $F \\subseteq Q$ o conjunto de estados finais (aceitação) e $\\delta: Q \\times \\Sigma \\to Q$ é uma função total que define **exatamente 1 próximo estado** para cada par \`(estado, símbolo)\`.
- **AFN (Autômato Finito Não-Determinístico)**: igual ao AFD, porém $\\delta: Q \\times \\Sigma \\to 2^Q$ — a partir de um estado e símbolo podem existir **0, 1 ou vários** estados destino simultaneamente! A cadeia é aceita se **ao menos um** caminho possível termina em $F$.
- **AFN-$\\varepsilon$**: permite transições espontâneas sem consumir símbolo da entrada ($\\delta: Q \\times (\\Sigma \\cup \\{\\varepsilon\\}) \\to 2^Q$), analisadas via **$\\varepsilon$-fecho($q$)** (conjunto de estados alcançáveis a partir de $q$ usando apenas transições $\\varepsilon$).

### Teorema da Equivalência (Kleene / Rabin-Scott) e Algoritmos Clássicos
**RESULTADO FUNDAMENTAL:** **AFD, AFN, AFN-$\\varepsilon$, Expressões Regulares e Gramáticas Regulares têm EXATAMENTE O MESMO PODER COMPUTACIONAL** — todos caracterizam a classe das **Linguagens Regulares**!
- **ER $\\to$ AFN-$\\varepsilon$ (Construção de Thompson)**: compõe pequenos autômatos elementares para concatenação, união e fecho usando $\\varepsilon$-transições (base de motores de regex e Lex/Flex).
- **AFN $\\to$ AFD (Construção de Subconjuntos / *Powerset Construction*)**: cada estado do AFD representa um **subconjunto de estados** do AFN ($Q_{AFD} \\subseteq 2^{Q_{AFN}}$). Se o AFN tem $n$ estados, o AFD equivalente pode ter no pior caso até **$2^n$ estados**!
- **Minimização de AFD (Teorema de Myhill-Nerode)**:
  1. Remova todos os **estados inalcançáveis** a partir de $q_0$.
  2. Separe os estados em duas partições iniciais: **Finais ($F$)** e **Não-Finais ($Q - F$)**.
  3. Refine iterativamente: dois estados $p, q$ ficam na mesma classe de equivalência somente se, para todo símbolo $a \\in \\Sigma$, $\\delta(p, a)$ e $\\delta(q, a)$ caem na mesma classe; caso contrário, separe-os.
  4. Quando nenhuma partição se dividir mais, funda estados equivalentes. **O AFD mínimo de uma linguagem regular é ÚNICO** (a menos de renomeação de estados)!
- **Fechamento das Linguagens Regulares**: são fechadas sob **União, Interseção, Complemento** (no AFD completo, basta inverter $F$ com $Q - F$!), **Concatenação, Fecho de Kleene e Reverso**.

> **Exemplo Resolvido Passo a Passo (Conversão AFN $\\to$ AFD via Subconjuntos):** Converta para AFD o AFN sobre $\\Sigma = \\{0, 1\\}$ que aceita cadeias **terminadas em \`01\`**: estados $Q = \\{q_0, q_1, q_2\\}$, inicial $q_0$, final $F = \\{q_2\\}$, com transições $\\delta(q_0, 0) = \\{q_0, q_1\\}$, $\\delta(q_0, 1) = \\{q_0\\}$, $\\delta(q_1, 1) = \\{q_2\\}$ (demais vazias).
> 1. **Estado inicial do AFD**: $A = \\{q_0\\}$.
>    - Lendo \`0\`: $\\delta(q_0, 0) = \\{q_0, q_1\\} = B$ (novo estado!).
>    - Lendo \`1\`: $\\delta(q_0, 1) = \\{q_0\\} = A$.
> 2. **A partir de $B = \\{q_0, q_1\\}$**:
>    - Lendo \`0\`: $\\delta(q_0, 0) \\cup \\delta(q_1, 0) = \\{q_0, q_1\\} \\cup \\emptyset = \\{q_0, q_1\\} = B$.
>    - Lendo \`1\`: $\\delta(q_0, 1) \\cup \\delta(q_1, 1) = \\{q_0\\} \\cup \\{q_2\\} = \\{q_0, q_2\\} = C$ (novo estado — **FINAL**, pois contém $q_2$!).
> 3. **A partir de $C = \\{q_0, q_2\\}$**:
>    - Lendo \`0\`: $\\delta(q_0, 0) \\cup \\delta(q_2, 0) = \\{q_0, q_1\\} = B$.
>    - Lendo \`1\`: $\\delta(q_0, 1) \\cup \\delta(q_2, 1) = \\{q_0\\} = A$.
> 4. Resultado: AFD mínimo com 3 estados ($A, B, C$), inicial $A$, final $C$, determinístico em todas as entradas!`,
        keyFormulas: [
          {
            label: 'Equivalência das Representações Regulares e Limite da Conversão',
            latex: '\\text{AFD} \\equiv \\text{AFN} \\equiv \\text{AFN-}\\varepsilon \\equiv \\text{ER} \\equiv \\text{GR}, \\qquad \\lvert Q_{AFD} \\rvert \\le 2^{\\lvert Q_{AFN} \\rvert}',
            note: 'Todo AFN pode ser determinizado; o AFD mínimo resultante é único a menos de isomorfismo.',
          },
        ],
      },
      {
        id: 'teo-glc-chomsky-bombeamento',
        title: '3. Gramáticas Livres de Contexto (GLC), Chomsky e Lema do Bombeamento',
        content: `### Gramáticas Livres de Contexto (GLC), Árvores de Derivação e Ambiguidade
Autômatos finitos não conseguem contar arbitrariamente (ex.: verificar parênteses balanceados \`((()))\` ou $a^n b^n$). Para isso subimos à classe das **Linguagens Livres de Contexto (LLC)**, descritas por **GLCs** $G = (V, T, P, S)$ onde toda produção tem a forma **$A \\to \\alpha$** (um único não-terminal $A \\in V$ à esquerda e qualquer cadeia $\\alpha \\in (V \\cup T)^*$ à direita) e reconhecidas por **Autômatos de Pilha (AP / PDA)**.
- **Atenção**: diferentemente de AFD/AFN, **AP Determinístico é ESTRITAMENTE MENOS PODEROSO que AP Não-Determinístico** (ex.: palíndromos $w w^{R}$ sem marcador central exigem AP não-determinístico!).
- **Árvore de Derivação (*Parse Tree*) e Ambiguidade**: uma gramática $G$ é **ambígua** se existe ao menos uma cadeia $w \\in L(G)$ que admite **duas ou mais árvores de derivação distintas** (ou duas derivações mais à esquerda distintas).
  - *Clássico ambíguo*: \`E -> E + E\` ou \`E -> E * E\` ou \`E -> id\`. A expressão \`id + id * id\` gera 2 árvores com valores diferentes: \`(id + id) * id\` vs \`id + (id * id)\`!
  - *Solução (estratificação por precedência e associatividade à esquerda)*:
    - \`E -> E + T\` ou \`T\` (menor precedência no topo da árvore)
    - \`T -> T * F\` ou \`F\` (maior precedência mais embaixo!)
    - \`F -> (E)\` ou \`id\`

### Hierarquia de Chomsky Completa
| Tipo | Classe de Linguagem | Restrição nas Produções | Autômato Reconhecedor | Exemplo Canônico | Uso em Compiladores |
|---|---|---|---|---|---|
| **Tipo 3** | **Regular** | $A \\to aB$ ou $A \\to a$ (linear à direita/esquerda) | **AFD / AFN** (sem memória extra) | $(0+1)^* 01$, identificadores, números | **Análise Léxica** |
| **Tipo 2** | **Livre de Contexto (LLC)** | $A \\to \\alpha$ ($A \\in V$, único não-terminal à esquerda) | **Autômato de Pilha (AP)** (1 pilha) | $\\{a^n b^n \\mid n \\ge 0\\}$, parênteses balanceados | **Análise Sintática** |
| **Tipo 1** | **Sensível ao Contexto (LSC)** | $\\alpha A \\beta \\to \\alpha \\gamma \\beta$ (não-contrátil: $\\lvert \\text{esq} \\rvert \\le \\lvert \\text{dir} \\rvert$) | **Autômato Linearmente Limitado (LBA)** | $\\{a^n b^n c^n \\mid n \\ge 1\\}$, $\\{ww\\}$ | Regras de escopo/tipos (Análise Semântica) |
| **Tipo 0** | **Recursivamente Enumerável (RE)** | $\\alpha \\to \\beta$ (irrestrita, $\\alpha$ com ao menos 1 não-terminal) | **Máquina de Turing (MT)** | Problema da Parada (semidecidível) | Computabilidade geral |

### Lema do Bombeamento (Para Provar que $L$ NÃO É Regular!)
O Lema do Bombeamento expressa uma **condição necessária** (mas NÃO suficiente!) para toda linguagem regular (baseado no Princípio da Casa dos Pombos: se uma cadeia tem comprimento maior que o nº de estados $p$ do AFD, algum estado obrigatoriamente se repete formando um ciclo!).
- **Enunciado**: se $L$ é regular, existe uma constante $p \\ge 1$ tal que toda palavra $w \\in L$ com $\\lvert w \\rvert \\ge p$ pode ser decomposta em $w = xyz$ satisfazendo simultaneamente:
  1. $\\lvert xy \\rvert \\le p$
  2. $\\lvert y \\rvert \\ge 1$ ($y$ não vazia)
  3. **$x y^i z \\in L$ para TODO $i \\ge 0$** (incluindo $i = 0$ — remover $y$ — e $i = 2, 3, \\dots$ — bombear $y$!).
- **Uso exclusivo**: provar por **contradição** que uma linguagem **NÃO é regular**! (Existe versão análoga para LLC com $w = uvxyz$ para provar que $a^n b^n c^n$ não é livre de contexto.)

> **Exemplo Resolvido Passo a Passo (Prova pelo Lema do Bombeamento):** Prove que $L = \\{a^n b^n \\mid n \\ge 0\\}$ **não é regular**.
> 1. Suponha por contradição que $L$ seja regular, com constante de bombeamento $p \\ge 1$.
> 2. Escolha a palavra específica $w = a^p b^p \\in L$ (note que $\\lvert w \\rvert = 2p \\ge p$).
> 3. Para qualquer decomposição $w = xyz$ com $\\lvert xy \\rvert \\le p$ e $\\lvert y \\rvert \\ge 1$, como os primeiros $p$ símbolos de $w$ são **todos \`a\`**, necessariamente $y = a^k$ com $k \\ge 1$ (zero \`b\`s em $y$).
> 4. Bombeando com $i = 2$: $x y^2 z = a^{p+k} b^p$. Como $k \\ge 1$, temos $p + k \\neq p$, logo $x y^2 z \\notin L$!
> 5. **Contradição!** Portanto, $L = \\{a^n b^n\\}$ **NÃO é regular** (embora seja Livre de Contexto: \`S -> aSb\` ou \`ε\`).`,
        keyFormulas: [
          {
            label: 'Hierarquia Estrita de Chomsky',
            latex: '\\text{Regular (Tipo 3)} \\subsetneq \\text{LLC (Tipo 2)} \\subsetneq \\text{LSC (Tipo 1)} \\subsetneq \\text{RE (Tipo 0)}',
            note: 'Cada inclusão é estrita: aⁿbⁿ está em Tipo 2 mas não em Tipo 3; aⁿbⁿcⁿ está em Tipo 1 mas não em Tipo 2.',
          },
          {
            label: 'Lema do Bombeamento para Linguagens Regulares',
            latex: '\\forall w \\in L,\\; \\lvert w \\rvert \\ge p \\implies \\exists x,y,z:\\; w=xyz,\\; \\lvert xy \\rvert \\le p,\\; \\lvert y \\rvert \\ge 1,\\; \\forall i \\ge 0,\\; xy^iz \\in L',
            note: 'Condição NECESSÁRIA, nunca suficiente — serve apenas para provar não-regularidade por contradição.',
          },
        ],
      },
      {
        id: 'teo-compiladores-frontend',
        title: '4. Fases do Compilador (Front-End): Análise Léxica, Sintática (LL/LR) e Semântica',
        content: `### Estrutura de um Compilador: Front-End vs Back-End
Um compilador traduz um programa-fonte inteiro para código alvo antes da execução (ao contrário do **interpretador**, que executa instrução a instrução; linguagens como Java/C#/JS combinam ambos via *bytecode* + **compilação JIT**). Ele divide-se em:
- **Front-End (Análise — dependente da linguagem fonte)**: Análise Léxica $\\to$ Análise Sintática $\\to$ Análise Semântica $\\to$ Geração de Código Intermediário.
- **Back-End (Síntese — dependente da arquitetura alvo)**: Otimização de Código $\\to$ Geração de Código Alvo.
- **Componentes Transversais** (acessados em todas as fases): **Tabela de Símbolos** (armazena nomes, tipos, escopos e endereços de identificadores) e **Gerenciador de Erros**.

### As Três Fases de Análise e Classificação de Erros
1. **Análise Léxica (*Scanner / Lexer*)**:
   - Entrada: fluxo bruto de caracteres. Saída: fluxo de **Tokens** \`<tipo, lexema>\` (ex.: \`<ID, "soma">\`, \`<OP, "+">\`, \`<NUM, 42>\`).
   - Remove espaços em branco e comentários; atualiza contagem de linhas; base teórica: **Expressões Regulares + AFD** (ex.: ferramenta *Flex*). Aplica regra do **casamento mais longo (*longest match*)** (\`>=\` vira 1 token, não \`>\` e \`=\`) e prioridade de palavras reservadas (\`if\`, \`while\`) sobre identificadores.
2. **Análise Sintática (*Parser*)**:
   - Entrada: tokens. Saída: **Árvore Sintática Abstrata (AST)**. Base teórica: **Gramáticas Livres de Contexto (GLC) + Autômato de Pilha**.
   - **Top-Down (Descendente — LL)**: constrói a árvore da **raiz para as folhas** (derivação mais à esquerda). Ex.: **Descendente Recursivo** e **LL(1) Preditivo Tabular** (usa conjuntos \`FIRST\` e \`FOLLOW\`). **Limitação crítica**: **NÃO aceita recursão à esquerda** (\`E -> E + T\` entra em loop infinito!) — exige eliminar recursão à esquerda (\`E -> T E'\`, \`E' -> + T E' | ε\`) e aplicar **fatoração à esquerda**!
   - **Bottom-Up (Ascendente — LR / Shift-Reduce)**: constrói a árvore das **folhas para a raiz** (derivação mais à direita **invertida**), usando pilha com ações *Shift* (empilha token) e *Reduce* (substitui lado direito da produção pelo não-terminal). Hierarquia de poder: **SLR(1) $\\subset$ LALR(1)** *(Yacc/Bison)* **$\\subset$ LR(1)**. **Aceita recursão à esquerda naturalmente** e reconhece um conjunto estritamente maior de gramáticas que LL(1)! Conflitos possíveis: *Shift/Reduce* e *Reduce/Reduce*.
3. **Análise Semântica**:
   - Verifica regras **sensíveis ao contexto** que a GLC não consegue expressar: **verificação de tipos** (estática vs dinâmica), **declaração prévia e escopo de variáveis** (consultando a Tabela de Símbolos), quantidade/tipos de argumentos de funções, coerção implícita (\`int -> float\`) e comandos \`break\` fora de laço. Formalizada por **Tradução Dirigida por Sintaxe (SDD)** com atributos *sintetizados* (filhos $\\to$ pai) e *herdados* (pai/irmãos $\\to$ filho).

| Fase do Compilador | Modelo Teórico | Entrada $\\to$ Saída | Exemplo Clássico de Erro Detectado |
|---|---|---|---|
| **Léxica** | Expressão Regular / AFD | Caracteres $\\to$ Tokens | Caractere inválido (\`@\`, \`$\` fora de string), string/comentário não fechado, número malformado (\`12abc\`) |
| **Sintática** | GLC / AP (LL ou LR) | Tokens $\\to$ AST | Falta de \`;\`, parêntese sem fechar \`if (x > 0 {\`, operador sem operando \`a = + * b;\` |
| **Semântica** | SDD / Tabela de Símbolos | AST $\\to$ AST Anotada | **Variável não declarada**, incompatibilidade de tipos (\`int x = "oi";\`), nº errado de parâmetros em função |
| **Tempo de Execução** *(fora do compilador)* | Runtime / SO | Binário em execução | Divisão por zero, *NullPointerException*, estouro de índice de vetor, *stack overflow* |`,
        codeExample: {
          language: 'python',
          title: 'Python: Analisador Léxico + Parser Descendente Recursivo LL(1) (Sem Recursão à Esquerda)',
          code: `import re

# Gramatica LL(1) NAO-AMBIGUA e SEM recursao a esquerda (precedencia: * > +):
#   E  -> T E'        ;   E' -> '+' T E' | ε
#   T  -> F T'        ;   T' -> '*' F T' | ε
#   F  -> '(' E ')' | NUM

def lexer(src: str):
    return [(m.lastgroup, m.group()) for m in re.finditer(
        r'(?P<NUM>\\d+)|(?P<PLUS>\\+)|(?P<MUL>\\*)|(?P<LP>\\()|(?P<RP>\\))|\\s+', src
    ) if m.lastgroup]

class ParserLL1:
    def __init__(self, tokens):
        self.tokens, self.pos = tokens, 0

    def peek(self):
        return self.tokens[self.pos] if self.pos < len(self.tokens) else ('EOF', '')

    def eat(self, expected):
        tok = self.peek()
        if tok[0] != expected:
            raise SyntaxError(f"Esperado {expected}, encontrado {tok}")
        self.pos += 1
        return tok[1]

    def parse_E(self):  # E -> T ('+' T)*
        val = self.parse_T()
        while self.peek()[0] == 'PLUS':
            self.eat('PLUS')
            val += self.parse_T()
        return val

    def parse_T(self):  # T -> F ('*' F)*
        val = self.parse_F()
        while self.peek()[0] == 'MUL':
            self.eat('MUL')
            val *= self.parse_F()
        return val

    def parse_F(self):  # F -> '(' E ')' | NUM
        if self.peek()[0] == 'LP':
            self.eat('LP'); val = self.parse_E(); self.eat('RP'); return val
        return int(self.eat('NUM'))

# Teste: respeita precedencia => 2 + (3 * 4) = 14
print(ParserLL1(lexer("2 + 3 * 4")).parse_E())`,
        },
      },
      {
        id: 'teo-compiladores-backend',
        title: '5. Fases do Compilador (Back-End): Código Intermediário, Otimização e Geração de Código',
        content: `### Representação Intermediária (IR) e Arquitetura Desacoplada
Por que compiladores modernos (como **GCC** e **LLVM**) geram **Código Intermediário (IR)** em vez de pular direto da AST para Assembly?
- Para suportar $M$ linguagens fonte (C, Rust, Swift) em $N$ arquiteturas alvo (x86-64, ARM, RISC-V), sem IR seriam necessários **$M \\times N$ compiladores**; com uma IR comum, bastam **$M$ Front-Ends + $N$ Back-Ends** ($M + N$ componentes!), além de compartilhar todas as otimizações independentes de máquina!
- **Formas Clássicas de IR**:
  - **Código de Três Endereços (TAC — *Three-Address Code*)**: cada instrução realiza no máximo 1 operação com até 3 operandos (\`t1 = b * c\`, \`t2 = a + t1\`), armazenado como **Quádruplas** \`(op, arg1, arg2, res)\` ou **Triplas**.
  - **SSA (*Static Single Assignment*)**: forma padrão do LLVM/GCC moderno onde **toda variável temporária recebe atribuição em um único ponto** (\`x1 = ...\`, \`x2 = ...\`, com funções $\\phi$ na junção de desvios), simplificando drasticamente a análise de fluxo de dados!
- **Blocos Básicos e Grafo de Fluxo de Controle (CFG)**: um **Bloco Básico** é uma sequência maximal de instruções sem desvios no meio (entra-se apenas na 1ª instrução — *líder* — e sai-se apenas na última). Os blocos conectados por saltos formam o **CFG**.

### Otimizações Clássicas de Código (Preservando Semântica!)
| Técnica de Otimização | O Que Faz | Exemplo Antes $\\to$ Depois |
|---|---|---|
| **Dobramento de Constantes (*Constant Folding*)** | Avalia expressões constantes em **tempo de compilação** | \`x = 24 * 60 * 60;\` $\\to$ \`x = 86400;\` |
| **Propagação de Constantes** | Substitui variáveis de valor conhecido por suas constantes | \`k = 10; y = k + 5;\` $\\to$ \`y = 15;\` |
| **Eliminação de Subexpressões Comuns (CSE)** | Reutiliza resultado já calculado sem recomputar | \`a = (x+y)*2; b = (x+y)+1;\` $\\to$ \`t = x+y; a = t*2; b = t+1;\` |
| **Movimentação de Código Invariante de Laço** | Move cálculos cujo valor não muda dentro do laço para **fora** dele | \`for(...) { t = limit*4; ... }\` $\\to$ \`t = limit*4; for(...) { ... }\` |
| **Redução de Força (*Strength Reduction*)** | Troca operações custosas (\`*\`, \`/\`) por baratas (\`<<\`, \`+\`) | \`x = i * 8;\` $\\to$ \`x = i << 3;\` |
| **Eliminação de Código Morto (*Dead Code*)** | Remove instruções cujo resultado nunca é usado ou código inalcançável | \`if (false) { ... }\` ou variável sobrescrita sem leitura $\\to$ removido |
| **Inlining de Funções** | Substitui chamada de função pequena pelo próprio corpo (elimina overhead de pilha) | \`sq(a)\` $\\to$ \`a * a\` |

### Geração de Código Alvo e Alocação de Registradores
A última fase converte a IR otimizada em código de máquina/Assembly específico da CPU alvo, enfrentando três subproblemas clássicos:
1. **Seleção de Instruções**: escolher a sequência mais eficiente do conjunto de instruções (ISA) da arquitetura.
2. **Alocação de Registradores**: decidir quais variáveis ativas (*live variables*) permanecem nos poucos registradores ultrarrápidos da CPU (e quais sofrem *spilling* para a memória/pilha). É formalmente modelada como o problema da **$k$-Coloração do Grafo de Interferência** (vértices = variáveis; aresta = duas variáveis vivas simultaneamente; $k$ = nº de registradores disponíveis) — um problema **NP-Completo** resolvido por heurísticas (como o algoritmo de **Chaitin**)!
3. **Escalonamento de Instruções (*Instruction Scheduling*)**: reordenar instruções independentes para evitar bolhas (*hazards/stalls*) no pipeline do processador.`,
        codeExample: {
          language: 'text',
          title: 'TAC (Código de Três Endereços): Antes e Depois das Otimizações de Compilador',
          code: `// Codigo-fonte original em C:
// for (int i = 0; i < n; i++) {
//     int fator = 2 * 4;              // constante + invariante
//     v[i] = (base + offset) + i * fator;
// }

// === 1. TAC NAO OTIMIZADO (gerado direto da AST) ===
L0:  i = 0
L1:  if i >= n goto L2
     t1 = 2 * 4               // Constant Folding pendente
     fator = t1
     t2 = base + offset       // Loop-Invariant (recalculado N vezes!)
     t3 = i * fator           // Multiplicacao cara por potencia de 2
     t4 = t2 + t3
     v[i] = t4
     i = i + 1
     goto L1
L2:

// === 2. TAC OTIMIZADO (Constant Folding + Loop-Invariant + Strength Reduction) ===
     t2 = base + offset       // Movido para FORA do laco (executado 1 unica vez!)
     i = 0
L1:  if i >= n goto L2
     t3 = i << 3              // Strength Reduction: i * 8 vira deslocamento de 3 bits!
     t4 = t2 + t3
     v[i] = t4
     i = i + 1
     goto L1
L2:`,
        },
      },
      {
        id: 'teo-turing-p-np',
        title: '6. Máquinas de Turing, Decidibilidade e Classes P, NP, NP-Completo e NP-Difícil',
        content: `### Máquinas de Turing, Tese de Church-Turing e Indecidibilidade
Uma **Máquina de Turing (MT)** possui uma unidade de controle finita e uma **fita infinita** onde pode ler, escrever e mover o cabeçote para esquerda (\`L\`) ou direita (\`R\`). Pela **Tese de Church-Turing**, qualquer algoritmo computável por qualquer computador real ou linguagem Turing-completa equivale a uma Máquina de Turing.
- **Linguagem Decidível (Recursiva)**: existe uma MT que **SEMPRE PARA** para toda entrada $w$ (aceita se $w \\in L$, rejeita se $w \\notin L$).
- **Linguagem Semidecidível (Recursivamente Enumerável — RE)**: existe MT que para e aceita se $w \\in L$, mas pode entrar em **loop infinito** se $w \\notin L$.
- **Problema da Parada ($HALT_{TM}$)**: *"Dado um programa $M$ e uma entrada $w$, $M$ termina (para) ao executar sobre $w$?"* — provado **INDECIDÍVEL** por Alan Turing (argumento de diagonalização). $HALT_{TM}$ é **RE (semidecidível)**, mas seu complemento $\\overline{HALT_{TM}}$ **não é nem mesmo RE**!
- **Teorema de Rice**: **TODA propriedade semântica não-trivial** da linguagem reconhecida por uma MT/programa (ex.: *"este código sempre termina?"*, *"este código nunca acessa ponteiro nulo?"*, *"dois programas são equivalentes?"*) é **INDECIDÍVEL**!

### Teoria da Complexidade: Classes P, NP, NP-Completo e NP-Difícil
A Teoria da Complexidade analisa **problemas de decisão** (resposta SIM/NÃO) decidíveis quanto ao tempo necessário em função do tamanho da entrada $n$:

| Classe | Definição Formal | Relação entre Classes | Exemplos Clássicos |
|---|---|---|---|
| **P** (*Polinomial*) | Solucionáveis por MT **determinística** em tempo polinomial $O(n^k)$ ("tratáveis") | $P \\subseteq NP$ | Ordenação, Busca Binária, Dijkstra, Caminho Mínimo, Árvore Geradora Mínima (MST), Fluxo Máximo, **2-SAT**, Teste de Primalidade (AKS) |
| **NP** (*Não-Determinístico Polinomial*) | Soluções candidatas (**certificados**) são **VERIFICÁVEIS** em tempo polinomial por MT determinística (equivalente: decidíveis em tempo polinomial por MT não-determinística) | Contém **P** e **NP-Completo** | Todos os de P + Fatoração de Inteiros, Isomorfismo de Grafos, e todos os NP-Completos |
| **NP-Difícil** (*NP-Hard*) | **TODO** problema em NP pode ser reduzido em tempo polinomial a ele ($\\forall A \\in NP,\\; A \\le_p B$). **NÃO precisa estar em NP!** | Contém NP-Completo (e problemas ainda piores!) | Versões de **otimização** do Caixeiro Viajante (TSP) e Mochila; **Problema da Parada** (indecidível!) |
| **NP-Completo (NPC)** | Está em **NP** **E** é **NP-Difícil** ($NPC = NP \\cap \\text{NP-Hard}$) — os problemas "mais difíceis" dentro de NP! | Se **UM ÚNICO** NPC estiver em P, então **$P = NP$**! | **SAT** (1º provado — Cook-Levin), **3-SAT**, Clique, Cobertura de Vértices, Conjunto Independente, **Coloração de Grafos ($k \\ge 3$)**, **Ciclo Hamiltoniano**, TSP (decisão), Mochila 0-1 (decisão), Soma de Subconjuntos |

### Reduções Polinomiais e Como Lidar na Prática com NP-Completos
- **Redução Polinomial ($A \\le_p B$)**: transforma em tempo polinomial qualquer instância de $A$ em uma instância equivalente de $B$. Significa que **$B$ é pelo menos tão difícil quanto $A$**:
  - Se $B \\in P$, então $A \\in P$.
  - Para provar que um problema novo $X$ é **NP-Completo**, prova-se: (1) **$X \\in NP$** (existe verificador polinomial de certificado); e (2) reduz-se um problema **sabidamente NP-Completo** $Y$ para $X$ em tempo polinomial (**$Y \\le_p X$** — atenção à direção da seta: do conhecido difícil PARA o novo!).
- **Na prática da Engenharia**: como acredita-se que $P \\neq NP$ (não existe algoritmo polinomial exato conhecido para NPC), contornamos problemas NP-Completos usando **algoritmos de aproximação** (com garantia de fator ótimo), **heurísticas / meta-heurísticas** (Algoritmos Genéticos, Simulated Annealing, Busca Tabu), **Branch-and-Bound**, **SAT Solvers** ou **Programação Dinâmica pseudopolinomial** (como Mochila 0-1 em $O(nW)$).

> **Exemplo Resolvido Passo a Passo (Verificação de Pertinência a NP e Direção de Redução):**
> **(a) Por que o Problema do Ciclo Hamiltoniano está em NP?** Dado um grafo $G=(V, E)$ e um certificado candidato (uma permutação de vértices $v_1, v_2, \\dots, v_n$), conseguimos **verificar** em tempo polinomial $O(n)$ se todos os vértices aparecem exatamente uma vez e se cada aresta $(v_i, v_{i+1})$ e $(v_n, v_1)$ existe em $E$. Encontrar o ciclo pode levar tempo exponencial, mas **verificar** leva tempo polinomial $\\implies$ pertence a **NP**!
> **(b) Direção correta de redução:** Se você provou que $X \\le_p \\text{3-SAT}$, isso prova que $X$ é NP-Completo? **NÃO!** Reduzir $X$ para \`3-SAT\` apenas mostra que $X$ é *no máximo tão difícil quanto* \`3-SAT\` (até um problema trivial em P se reduz a \`3-SAT\`!). Para provar que $X$ é NP-Difícil, a redução precisa ir na direção **$\\text{3-SAT} \\le_p X$**!`,
        keyFormulas: [
          {
            label: 'Relações Fundamentais de Complexidade Computacional',
            latex: 'P \\subseteq NP, \\qquad \\text{NP-Completo} = NP \\cap \\text{NP-Difícil}, \\qquad A \\le_p B \\land B \\in P \\implies A \\in P',
            note: 'NP NÃO significa "Não Polinomial" — significa "Não-Determinístico Polinomial" (verificável em tempo polinomial)!',
          },
        ],
      },
    ],
    inepTraps: [
      'PEGADINHA CLÁSSICA (ENADE 2017 Q20!): Afirmar que existe **uma única** Expressão Regular para representar cada linguagem regular — **FALSO!** Existem infinitas ERs equivalentes para a mesma linguagem (ex.: $(a^*)^* \\equiv a^* \\equiv a^* + \\varepsilon$ e $(a^* b^*)^* \\equiv (a+b)^*$).',
      'Achar que um **AFN** reconhece mais linguagens que um **AFD** — **FALSO!** AFD, AFN, AFN-$\\varepsilon$ e ER têm exatamente o **mesmo poder** (Linguagens Regulares). Porém, cuidado: **Autômato de Pilha Não-Determinístico TEM sim mais poder que Autômato de Pilha Determinístico**!',
      'Errar a **fase do compilador** que detecta cada tipo de erro: variável não declarada e incompatibilidade de tipos (`int x = "abc";`) são erros **SEMÂNTICOS** (não sintáticos!); caractere fora do alfabeto (`@`) é erro **LÉXICO**; falta de `;` ou parêntese desbalanceado é erro **SINTÁTICO**!',
      'Interpretar **NP** como "Não Polinomial" — **ERRADO!** NP significa **Não-Determinístico Polinomial** (verificável em tempo polinomial), e **todo problema em P pertence a NP** ($P \\subseteq NP$). Além disso, um problema **NP-Difícil** não precisa estar em NP (ex.: o Problema da Parada é indecidível e NP-Difícil)!',
      'Tentar usar o **Lema do Bombeamento** para provar que uma linguagem **É regular** (ele só serve para provar por contradição que **NÃO** é regular!), ou confundir a direção da redução para provar NP-Completude (deve-se reduzir um problema **NPC conhecido $\\le_p$ problema novo**, nunca o contrário!).',
    ],
    quickChecklist: [
      'Sei diferenciar $\\emptyset$ de $\\{\\varepsilon\\}$, aplicar a precedência de ERs (`*` $>$ concatenação $>$ `+`) e reconhecer ERs equivalentes?',
      'Sei converter um AFN para AFD (Construção de Subconjuntos), explicar minimização de AFDs e lembrar que AFD $\\equiv$ AFN $\\equiv$ ER?',
      'Sei construir árvores de derivação em GLC, identificar ambiguidade e eliminá-la via precedência/associatividade?',
      'Conheço os 4 níveis da Hierarquia de Chomsky (Regular/AFD $\\subset$ LLC/AP $\\subset$ LSC/LBA $\\subset$ RE/MT) e sei aplicar o Lema do Bombeamento em $a^n b^n$?',
      'Sei exatamente o que entra, o que sai e quais erros são detectados em cada fase do Front-End (Léxica, Sintática LL/LR e Semântica)?',
      'Sei por que parsers LL(1) não aceitam recursão à esquerda, enquanto parsers LR(1)/LALR(1) aceitam e são mais poderosos?',
      'Conheço Código de Três Endereços (TAC), SSA, as principais otimizações (Constant Folding, CSE, Loop-Invariant, Strength Reduction) e Alocação de Registradores por Coloração de Grafos?',
      'Sei definir Decidível vs Indecidível (Problema da Parada / Teorema de Rice) e diferenciar P, NP, NP-Completo (SAT, 3-SAT, Clique, TSP decisão) e NP-Difícil?',
    ],
  },
];
