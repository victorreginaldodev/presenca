import type { LandingPage } from "../types";

/**
 * Copy da landing page "Benefícios por Incapacidade" (/lp/beneficios-por-incapacidade).
 *
 * TODO(cliente): dois trechos ainda dependem de confirmação do Fernando e estão
 * marcados com [CONFIRMAR ...] abaixo — a resposta sobre o preço da consulta e
 * a resposta sobre atendimento online/cidades atendidas. Substituir pelos
 * textos confirmados (os mesmos da LP 01).
 */
export const beneficiosPorIncapacidade = {
  slug: "beneficios-por-incapacidade",
  seo: {
    title: "Benefícios por Incapacidade (INSS)",
    description:
      "Está doente e não consegue trabalhar? Saiba como proteger sua renda com os benefícios por incapacidade do INSS, inclusive se o pedido foi negado ou o benefício foi cortado.",
  },
  navigation: [
    { label: "Quem tem direito", href: "/lp/beneficios-por-incapacidade#quem-tem-direito" },
    { label: "Tipos de benefício", href: "/lp/beneficios-por-incapacidade#tipos-de-beneficio" },
    { label: "Benefício negado", href: "/lp/beneficios-por-incapacidade#beneficio-negado" },
    { label: "Documentos", href: "/lp/beneficios-por-incapacidade#documentos" },
    { label: "Como funciona", href: "/lp/beneficios-por-incapacidade#como-funciona" },
    { label: "Quem é Fernando", href: "/lp/beneficios-por-incapacidade#sobre" },
    { label: "Avaliações", href: "/lp/beneficios-por-incapacidade#avaliacoes" },
    { label: "Dúvidas", href: "/lp/beneficios-por-incapacidade#duvidas" },
    { label: "Contato", href: "/lp/beneficios-por-incapacidade#contato" },
  ],
  headerCtaLabel: "Falar no WhatsApp",
  whatsappMessage: "Olá, vim pela página de benefícios do INSS e quero analisar meu caso.",
  hero: {
    eyebrow: "Benefícios por incapacidade · INSS",
    title: "Está doente e",
    titleEmphasis: "não consegue trabalhar?",
    lead: "Saiba como proteger sua renda e o sustento da sua família com os benefícios por incapacidade do INSS, inclusive se o seu pedido foi negado ou o benefício foi cortado.",
    ctaLabel: "Quero analisar meu caso",
    note: "Atendimento sigiloso. Um advogado avalia o seu caso e explica quais são os seus direitos.",
  },
  requirements: {
    id: "quem-tem-direito",
    eyebrow: "Entenda seu direito",
    title: "Quem pode receber um benefício por incapacidade?",
    lead: "Uma doença ou lesão pode impedir você de trabalhar e comprometer a renda de toda a família. Nessas situações, o INSS paga benefícios a quem cumpre três requisitos:",
    items: [
      {
        title: "Estar vinculado ao INSS",
        subtitle: "(qualidade de segurado)",
        text: "Estar contribuindo, ou ter parado há pouco tempo. Mesmo sem contribuir, você continua protegido por um período (em regra, de 12 a 36 meses, conforme o seu histórico).",
      },
      {
        title: "Ter a carência mínima",
        text: "Em regra, 12 contribuições. Não é exigida em caso de acidente de qualquer natureza, doença do trabalho ou doenças graves previstas em lei, como câncer, cardiopatia grave, Parkinson, esclerose múltipla, AVC e HIV.",
      },
      {
        title: "Estar incapaz para o trabalho",
        text: "A doença ou lesão precisa impedir você de exercer a sua atividade, o que é comprovado por laudos médicos e pela perícia.",
      },
    ],
  },
  benefitTypes: {
    id: "tipos-de-beneficio",
    eyebrow: "Tipos de benefício",
    title: "Auxílio-doença e aposentadoria por invalidez: qual a diferença?",
    lead: "Você talvez conheça esses benefícios pelos nomes antigos, auxílio-doença e aposentadoria por invalidez. Desde a Reforma da Previdência, eles passaram a se chamar:",
    cards: [
      {
        title: "Auxílio por Incapacidade Temporária",
        subtitle: "(antigo auxílio-doença)",
        code: "Cód. 31 (previdenciário) ou 91 (acidentário)",
        items: [
          "Para quem está temporariamente sem condições de trabalhar",
          "Para empregados, é pago a partir do 16º dia de afastamento (os 15 primeiros dias são pagos pela empresa)",
          "Valor: 91% da média salarial",
          "Dura até a recuperação, e pode ser prorrogado",
        ],
      },
      {
        title: "Aposentadoria por Incapacidade Permanente",
        subtitle: "(antiga aposentadoria por invalidez)",
        code: "Cód. 32 (previdenciária) ou 92 (acidentária)",
        items: [
          "Para quem não tem condições de voltar a trabalhar nem de ser reabilitado para outra função",
          "Adicional de 25% para quem precisa da ajuda permanente de outra pessoa no dia a dia",
        ],
      },
      {
        title: "Auxílio-Acidente",
        code: "Cód. 94 (acidentário) ou 36 (previdenciário)",
        items: [
          "Para quem ficou com sequela que reduz a capacidade de trabalho",
          "É uma indenização: você pode receber e continuar trabalhando",
          "Valor: 50% da média salarial; não exige carência",
          "Para empregados (inclusive domésticos), trabalhadores avulsos e segurados especiais",
        ],
      },
    ],
    note: {
      icon: "repeat",
      title: "Um pode se transformar no outro",
      text: "Se você recebe auxílio-doença e a perícia concluir que não há chance de recuperação ou reabilitação, o benefício pode ser convertido em aposentadoria por invalidez, com possibilidade de revisão retroativa da data e dos valores, inclusive na Justiça.",
    },
  },
  comparison: {
    id: "acidentario-previdenciario",
    eyebrow: "Faça a diferença",
    title: "Benefício acidentário ou previdenciário: isso muda tudo",
    columns: [
      {
        title: "Benefícios acidentários",
        code: "(cód. 91, 92 e 94)",
        lead: "Têm origem em acidente de trabalho ou doença ocupacional (causada ou agravada pelo trabalho) e garantem vantagens importantes:",
        marker: "check",
        highlighted: true,
        items: [
          "Estabilidade de 12 meses no emprego depois que o auxílio termina",
          "Depósito do FGTS durante o afastamento",
          "Não exigem carência",
          "Aposentadoria por invalidez com valor integral (100% da média salarial)",
        ],
      },
      {
        title: "Benefícios previdenciários",
        code: "(cód. 31, 32 e 36)",
        marker: "dot",
        items: [
          "Decorrem de doenças comuns, sem relação com o trabalho",
          "Em regra, exigem 12 contribuições de carência",
          "A aposentadoria por invalidez previdenciária tem redutor: começa em 60% da média, com acréscimo de 2% por ano de contribuição acima de 20 anos (homens) ou 15 anos (mulheres)",
        ],
      },
    ],
    band: {
      text: "Muita gente com doença causada pelo trabalho recebe o benefício como previdenciário e perde estabilidade, FGTS e valor.",
      emphasis: "Se esse é o seu caso, é possível pedir a conversão para acidentário.",
      ctaLabel: "Quero saber se meu benefício está certo",
    },
  },
  denied: {
    id: "beneficio-negado",
    eyebrow: "O INSS disse não?",
    title: "O INSS negou ou cortou o seu benefício?",
    lead: "Uma negativa do INSS não é a palavra final. Estas são as situações mais comuns que levamos à Justiça:",
    items: [
      { icon: "file-x", label: "Perícia negou o benefício mesmo com laudos médicos" },
      { icon: "calendar-x", label: "Alta programada sem você ter condições de voltar ao trabalho" },
      { icon: "search", label: "Benefício cortado em revisão do INSS (o “pente-fino”)" },
      { icon: "swap", label: "Benefício concedido como previdenciário quando a doença foi causada pelo trabalho" },
      { icon: "repeat", label: "Auxílio-doença que deveria ter virado aposentadoria por invalidez" },
      { icon: "hourglass", label: "Pedido de prorrogação negado" },
    ],
    closingText:
      "Nesses casos, é possível recorrer no próprio INSS ou entrar com uma ação na Justiça Federal (ou na Justiça Estadual, em casos de acidente de trabalho), onde a perícia é feita por um médico nomeado pelo juiz. Se o direito for reconhecido, você pode receber também os valores atrasados.",
    ctaLabel: "Meu benefício foi negado",
  },
  documents: {
    id: "documentos",
    eyebrow: "Prepare-se",
    title: "Documentos que fazem diferença no seu caso",
    note: "Não tem tudo? Sem problema: o advogado orienta o que buscar.",
    items: [
      {
        icon: "file-text",
        label: "Laudos e atestados médicos atualizados, com CID, descrição das limitações e data e assinatura do médico, de preferência especialista",
      },
      { icon: "activity", label: "Exames (imagem, laboratoriais) e receitas" },
      { icon: "clipboard", label: "Prontuários e relatórios de internação ou cirurgia" },
      { icon: "chart", label: "CNIS (extrato de contribuições, disponível no Meu INSS)" },
      { icon: "mail", label: "Carta de indeferimento ou de cessação do INSS, se houver" },
      { icon: "alert", label: "CAT (Comunicação de Acidente de Trabalho), em casos de acidente ou doença do trabalho" },
    ],
  },
  notEligible: {
    id: "nao-da-direito",
    eyebrow: "Seja realista",
    title: "Situações que, em regra, não dão direito ao benefício",
    items: [
      {
        title: "Perda da qualidade de segurado",
        text: "A incapacidade começou depois de vencido o período em que você ainda estava protegido pelo INSS, mesmo sem contribuir.",
      },
      {
        title: "Doença anterior à filiação ao INSS",
        text: "Você começou a contribuir já doente e incapaz. A exceção é quando a doença se agravou depois da filiação.",
      },
      {
        title: "Falta de carência em doença comum",
        text: "Menos de 12 contribuições, fora dos casos de acidente, doença do trabalho ou doença grave prevista em lei.",
      },
      {
        title: "Diagnóstico sem incapacidade",
        text: "Ter uma doença não basta: ela precisa impedir você de exercer a sua atividade.",
      },
      {
        title: "Afastamento de até 15 dias",
        text: "Para empregados, os 15 primeiros dias de afastamento são pagos pela empresa, não pelo INSS.",
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
        question: "Parei de contribuir. Ainda tenho direito?",
        answer:
          "Talvez sim. Depois da última contribuição, você continua protegido pelo INSS por um período que, em regra, vai de 12 a 36 meses, conforme o tempo de contribuição e se ficou desempregado. Se a incapacidade começou dentro desse prazo, você pode ter direito.",
      },
      {
        question: "Sou autônomo ou MEI. Tenho direito?",
        answer:
          "Sim, ao auxílio-doença e à aposentadoria por invalidez, desde que esteja contribuindo e cumpra os requisitos. O auxílio-acidente não vale para autônomos e MEIs.",
      },
      {
        question: "O INSS negou meu pedido. Ainda dá pra fazer alguma coisa?",
        answer:
          "Sim. Dá para recorrer no próprio INSS ou entrar com uma ação na Justiça, onde a perícia é feita por um médico nomeado pelo juiz.",
      },
      {
        question: "Posso trabalhar enquanto recebo o benefício?",
        answer:
          "No auxílio-doença e na aposentadoria por invalidez, não: voltar a trabalhar pode levar ao corte do benefício. No auxílio-acidente, sim: ele é uma indenização e pode ser recebido junto com o salário.",
      },
      {
        question: "Meu auxílio vai acabar e eu ainda não melhorei. O que faço?",
        answer:
          "Peça a prorrogação no Meu INSS nos 15 dias antes da data de término. Se for negada, fale com um advogado.",
      },
      {
        question: "Se eu ganhar na Justiça, recebo os valores atrasados?",
        answer:
          "Se o direito for reconhecido, você pode receber os valores desde a data do pedido ou do corte do benefício.",
      },
      {
        question: "Quanto custa a consulta?",
        answer: "[CONFIRMAR COM O FERNANDO: usar a mesma resposta da LP 01]",
      },
      {
        question: "Vocês atendem online?",
        answer: "[CONFIRMAR COM O FERNANDO: usar a mesma resposta da LP 01]",
      },
    ],
  },
  finalCta: {
    title: "Você não precisa enfrentar isso sozinho.",
    lead: "Conte o que está acontecendo com a sua saúde e com o seu benefício. Um advogado analisa o seu caso e explica o melhor caminho.",
    ctaLabel: "Quero analisar meu caso",
  },
} satisfies LandingPage;
