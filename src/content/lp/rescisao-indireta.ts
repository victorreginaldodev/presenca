import type { LandingPage } from "../types";

/**
 * Copy da landing page "Rescisão Indireta" (/lp/rescisao-indireta).
 *
 * TODO(cliente): dois trechos ainda dependem de confirmação do Fernando e estão
 * marcados com [CONFIRMAR ...] abaixo — a resposta sobre o preço da consulta e
 * a resposta sobre atendimento online/cidades atendidas. Substituir pelos
 * textos confirmados.
 */
export const rescisaoIndireta = {
  slug: "rescisao-indireta",
  seo: {
    title: "Rescisão Indireta",
    description:
      "Salário atrasado, FGTS não depositado e assédio moral são faltas graves. Saia do emprego recebendo as verbas de uma demissão sem justa causa.",
  },
  navigation: [
    { label: "O que é", href: "/lp/rescisao-indireta#o-que-e" },
    { label: "Seus direitos", href: "/lp/rescisao-indireta#verbas" },
    { label: "Como funciona", href: "/lp/rescisao-indireta#como-funciona" },
    { label: "Quem é Fernando", href: "/lp/rescisao-indireta#sobre" },
    { label: "Avaliações", href: "/lp/rescisao-indireta#avaliacoes" },
    { label: "Dúvidas", href: "/lp/rescisao-indireta#duvidas" },
    { label: "Contato", href: "/lp/rescisao-indireta#contato" },
  ],
  headerCtaLabel: "Falar no WhatsApp",
  whatsappMessage: "Olá, vim pela página de rescisão indireta e quero analisar meu caso.",
  hero: {
    eyebrow: "Rescisão indireta · Advocacia trabalhista",
    title: "Cansado de sofrer no trabalho, mas com medo de pedir demissão e",
    titleEmphasis: "sair sem nada?",
    lead: "Com a rescisão indireta, você pode deixar o emprego recebendo as mesmas verbas de uma demissão sem justa causa. Salário atrasado, FGTS não depositado e assédio moral são faltas graves da empresa.",
    ctaLabel: "Quero analisar meu caso",
    note: "Atendimento sigiloso. Fale com um advogado antes de tomar qualquer decisão.",
  },
  explanation: {
    id: "o-que-e",
    eyebrow: "Entenda seu direito",
    title: "O que é a rescisão indireta?",
    lead: "A rescisão indireta está prevista no artigo 483 da CLT e funciona como uma “justa causa do empregador”. Quando a empresa comete uma falta grave, você pode encerrar o contrato e receber todas as verbas como se tivesse sido demitido sem justa causa.",
    listTitle: "Situações que podem dar direito:",
    situations: [
      { icon: "clock", label: "Atraso ou falta de pagamento de salários" },
      { icon: "banknote", label: "Atraso ou falta de depósito do FGTS" },
      { icon: "alert", label: "Agressões físicas ou verbais" },
      { icon: "message-warning", label: "Assédio moral ou sexual" },
      { icon: "accident", label: "Trabalho em condições perigosas sem EPI" },
      { icon: "hourglass", label: "Horas extras não pagas" },
      { icon: "coffee", label: "Intervalo de almoço suprimido ou reduzido" },
    ],
  },
  benefits: {
    id: "verbas",
    eyebrow: "Seus direitos",
    title: "O que você pode receber",
    lead: "Com a rescisão indireta reconhecida, você recebe as mesmas verbas de uma demissão sem justa causa:",
    ctaLabel: "Quero saber se tenho direito",
    items: [
      { label: "Saldo de salário" },
      { label: "Aviso prévio indenizado" },
      { label: "Férias vencidas e proporcionais + 1/3" },
      { label: "13º salário proporcional" },
      { label: "Saque do FGTS + multa de 40%" },
      { label: "Seguro-desemprego", note: "se cumprir os requisitos" },
    ],
  },
  jurisprudence: {
    id: "tst",
    eyebrow: "Entendimento dos tribunais",
    title: "O TST já pacificou o assunto",
    lead: "Nos Temas 70 e 85, o Tribunal Superior do Trabalho fixou o entendimento de que a ausência ou irregularidade no recolhimento do FGTS, o não pagamento de horas extras e a supressão do intervalo configuram falta grave do empregador e autorizam a rescisão indireta.",
    ctaLabel: "Conversar com um advogado",
    items: [
      { label: "Tema", value: "70", caption: "Tribunal Superior do Trabalho" },
      { label: "Tema", value: "85", caption: "Tribunal Superior do Trabalho" },
    ],
  },
  notEligible: {
    id: "nao-da-direito",
    eyebrow: "Seja realista",
    title: "Situações que, em regra, não dão direito à rescisão indireta",
    items: [
      {
        title: "Assédio sem provas",
        text: "Humilhações ou assédio sem nenhum registro: mensagens, áudios, e-mails ou testemunhas.",
      },
      {
        title: "Assédio isolado, sem repetição",
        text: "Para caracterizar assédio, a conduta precisa se repetir. O que conta é a repetição, não o tempo de empresa: 10 dias seguidos de assédio já podem configurar a reiteração. Um episódio isolado, em regra, não basta.",
      },
      {
        title: "Atraso pontual de FGTS já regularizado",
        text: "Um atraso isolado que a empresa já acertou é diferente de recolhimento irregular e pode não ser suficiente para caracterizar falta grave.",
      },
      {
        title: "Insatisfação pessoal com o trabalho",
        text: "Não gostar do emprego ou das tarefas, sem nenhum descumprimento da lei por parte do empregador.",
      },
      {
        title: "Desvio de função eventual",
        text: "Fazer de vez em quando uma tarefa diferente, sem habitualidade, pode não configurar falta grave.",
      },
    ],
    doubtCard: {
      text: "Ficou em dúvida se o seu caso se encaixa?",
      emphasis: "Um advogado avalia isso com você.",
      ctaLabel: "Tirar minha dúvida",
    },
  },
  faq: {
    id: "duvidas",
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Preciso sair do emprego antes de entrar com a ação?",
        answer:
          "Não. E não saia antes de falar com um advogado: se a falta grave não for reconhecida, a sua saída pode ser tratada como pedido de demissão, e você perde verbas como a multa do FGTS e o seguro-desemprego.",
      },
      {
        question: "Posso continuar trabalhando enquanto o processo corre?",
        answer:
          "Em alguns casos, como atraso de salário ou de FGTS, a lei permite continuar trabalhando até a decisão (art. 483, §3º, da CLT). O advogado avalia o que é mais seguro no seu caso.",
      },
      {
        question: "Que provas eu preciso reunir?",
        answer:
          "Extrato do FGTS (pelo app do FGTS), holerites, cartões de ponto, mensagens, áudios, e-mails e o contato de colegas que possam testemunhar. Se não tiver tudo, não tem problema: o advogado orienta o que buscar.",
      },
      {
        question: "A empresa vai ficar sabendo que procurei um advogado?",
        answer: "Não. O atendimento é sigiloso.",
      },
      {
        question: "Quanto tempo demora o processo?",
        answer:
          "Depende da vara, do caso e da possibilidade de acordo. No atendimento você recebe uma estimativa para a sua situação.",
      },
      {
        question: "Quanto custa a consulta?",
        answer: "[CONFIRMAR COM O FERNANDO]",
      },
      {
        question: "Vocês atendem online?",
        answer: "[CONFIRMAR COM O FERNANDO: cidades atendidas / atendimento online para todo o Brasil]",
      },
    ],
  },
  finalCta: {
    title: "Você não precisa continuar aguentando calado.",
    lead: "Conte o que está acontecendo no seu trabalho. Um advogado analisa o seu caso e explica quais são os seus direitos.",
    ctaLabel: "Quero analisar meu caso",
  },
} satisfies LandingPage;
