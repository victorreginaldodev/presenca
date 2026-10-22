import type { HomePage, NavItem } from "../types";

export const homePage: HomePage = {
  hero: {
    eyebrow: "Fernando Araujo · OAB/MG 235.682",
    title: "Advogado especialista em Direito Trabalhista e Previdenciário",
    lead: "Estou ao seu lado para buscar o que é seu por direito, entendendo suas dores e atuando com a máxima transparência.",
    cta: { label: "Quero conversar com o advogado" },
    ctaNote: "Atendimento em todo o Brasil",
  },
  practice: {
    eyebrow: "Atuação",
    title: "Como posso te ajudar",
    subtitle: "Você não precisa enfrentar o INSS ou a empresa sozinho. Veja se alguma dessas situações é parecida com a sua.",
    linkLabel: "Conversar sobre isso",
    closingText:
      "Muita gente perde o direito por causa de um documento que faltou ou de um prazo que passou. Com orientação desde o começo, fica mais fácil evitar esses erros.",
    closingCta: { label: "Me conta o que aconteceu" },
  },
  process: {
    eyebrow: "Como funciona",
    title: "Um caminho claro, do primeiro contato ao fim do caso",
    subtitle: "Você sabe o que está acontecendo em cada etapa. Sem letra miúda e sem juridiquês.",
    steps: [
      {
        title: "Você conta o que aconteceu",
        text: "Seja no WhatsApp ou presencialmente, o primeiro contato é gratuito: você conta sua situação e avaliamos a viabilidade jurídica do seu caso.",
      },
      {
        title: "Conversa e próximos passos",
        text: "Se fizer sentido seguir, agendamos uma reunião gratuita com o advogado, on-line ou presencialmente, para definir a estratégia e os valores do trabalho a ser realizado.",
      },
      {
        title: "Acompanhamento até o fim",
        text: "Depois que o pedido ou a ação começa, eu te dou retorno frequente sobre o andamento. Você não fica sem resposta.",
      },
    ],
    notice:
      "Se você quiser apenas tirar dúvidas com o advogado, sem contratar o acompanhamento do caso, as respostas são cobradas como consulta jurídica.",
    cta: { label: "Começar pelo WhatsApp" },
  },
  about: {
    eyebrow: "Quem é Fernando Araujo",
    title: "Eu cuido do seu caso com a máxima atenção, atento a todos os detalhes",
    titleWithExperience: "Com {anos} anos de experiência, eu cuido do seu caso com a máxima atenção, atento a todos os detalhes",
    credentialsTitle: "Formação e experiência",
    valuesTitle: "O que você pode esperar de mim",
    cta: { label: "Conversar com o Fernando" },
  },
  reviews: {
    eyebrow: "Avaliações",
    title: "Quem já confiou no Fernando recomenda",
  },
  locations: {
    eyebrow: "Onde atendemos",
    title: "Seu advogado de confiança, onde você estiver",
    text: "Não importa em que estado você mora: dá para cuidar do seu caso sem sair de casa, por WhatsApp ou chamada de vídeo. Se preferir conversar pessoalmente, o escritório fica em Santa Juliana-MG.",
    legendReach: "Atendimento em todos os estados",
    legendOffice: "Escritório em Santa Juliana-MG",
  },
  contact: {
    eyebrow: "Contato",
    title: "Estou aqui para ouvir você",
    subtitle: "Conte o que aconteceu do jeito mais fácil para você. Eu explico, com calma, como funciona o seu caso.",
    whatsappTitle: "O caminho mais rápido",
    whatsappText: "Mande uma mensagem ou um áudio contando o que aconteceu. Eu respondo em horário de atendimento.",
    cta: { label: "Conversar no WhatsApp" },
  },
};

/**
 * Itens do menu, na ordem das seções. Itens de seções sem conteúdo são
 * removidos em `getNavigation`. O blog (etapa 3) entra aqui quando existir.
 */
export const navigation: NavItem[] = [
  { label: "Atuação", sectionId: "atuacao" },
  { label: "Avaliações", sectionId: "avaliacoes" },
  { label: "Quem é Fernando", sectionId: "sobre" },
  { label: "Onde atendemos", sectionId: "onde-atendemos" },
  { label: "Contato", sectionId: "contato" },
];
