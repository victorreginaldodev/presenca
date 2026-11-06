import type { HomePage, NavItem } from "../types";

export const homePage: HomePage = {
  hero: {
    title: "Advogado especialista em Direito Trabalhista e Previdenciário",
    lead: "Com um especialista ao seu lado, você não precisa ter medo de recusar uma rescisão errada, enfrentar o assédio no trabalho ou recorrer quando o INSS nega seu benefício.",
    cta: { label: "Falar com especialista" },
    ctaNote: "Atendimento em todo o Brasil",
  },
  practice: {
    eyebrow: "Atuação",
    title: "Como posso te ajudar",
    subtitle: "Você não precisa enfrentar o INSS ou a empresa sozinho. Veja se alguma dessas situações é parecida com a sua.",
    closingCta: { label: "Falar com especialista" },
  },
  process: {
    title: "Como funciona o contato com o advogado?",
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
  },
  about: {
    eyebrow: "Quem é Fernando Araujo",
    title: "Prazer, Fernando.",
    titleWithExperience: "Com {anos} anos de experiência. Prazer, Fernando.",
    cta: { label: "Falar no WhatsApp" },
  },
  reviews: {
    eyebrow: "Avaliações",
    title: "Quem já confiou no Fernando recomenda",
  },
  blog: {
    eyebrow: "Blog",
    title: "Entenda seus direitos em linguagem simples",
    linkLabel: "Ver todos os artigos",
  },
  locations: {
    eyebrow: "Onde atendemos",
    title: "Seu advogado de confiança, onde você estiver",
    legendReach: "Atendimento em todos os estados",
    legendOffice: "Escritório em Santa Juliana-MG",
  },
  contact: {
    whatsappTitle: "O caminho mais rápido",
    cta: { label: "Falar com especialista" },
  },
};

/**
 * Itens do menu, na ordem das seções e páginas. Âncoras apontam para a home
 * ("/#secao"); "Blog" aponta para a lista de artigos. Itens sem conteúdo
 * são removidos em `getNavigation`.
 */
export const navigation: NavItem[] = [
  { label: "Atuação", href: "/#atuacao" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Quem é Fernando", href: "/#sobre" },
  { label: "Onde atendemos", href: "/#onde-atendemos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato" },
];
