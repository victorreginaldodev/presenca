import type { PracticeArea } from "../types";

// Quatro áreas, cada uma com uma imagem de `public/images/atuacao`.
// As situações reúnem os serviços do layout de referência (rescisão, demissão
// injusta e emprego que adoece ficaram em "Ações trabalhistas").
// Textos aguardam validação do Fernando (docs/PENDENCIAS.md).
export const practiceAreas: PracticeArea[] = [
  {
    id: "aposentadoria",
    slug: "aposentadoria",
    field: "previdenciario",
    icon: "retirement",
    title: "Aposentadoria",
    summary:
      "Trabalhou a vida toda e o corpo já não aguenta mais? Eu analiso seu histórico de trabalho e de contribuições para ver qual aposentadoria combina com o seu caso.",
    situations: [
      "Saber se já é possível se aposentar",
      "Entender qual regra vale para você",
      "Pedido negado ou parado no INSS",
    ],
    image: {
      url: "/images/atuacao/aposentadoria.jpg",
      alt: "Casal de aposentados sorrindo no sofá de casa",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre aposentadoria.",
    order: 1,
  },
  {
    id: "beneficio-por-incapacidade",
    slug: "auxilio-doenca-e-aposentadoria-por-invalidez",
    field: "previdenciario",
    icon: "health",
    title: "Auxílio-doença e aposentadoria por invalidez",
    summary:
      "Se a doença ou a lesão impede você de trabalhar, pode haver direito a um benefício do INSS. Eu confiro seus documentos e explico o caminho do pedido ou do recurso.",
    situations: [
      "Afastado por doença ou lesão e sem renda",
      "Benefício negado ou cortado pelo INSS",
      "Dúvidas sobre a perícia médica",
    ],
    image: {
      url: "/images/atuacao/beneficio-incapacidade.jpg",
      alt: "Mulher com a mão nas costas, sentindo dor na coluna",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre auxílio-doença.",
    order: 2,
  },
  {
    id: "acidente-de-trabalho",
    slug: "acidente-de-trabalho",
    field: "trabalhista",
    icon: "accident",
    title: "Acidente de trabalho e doença do trabalho",
    summary:
      "Se machucou ou adoeceu por causa do trabalho e a empresa não deu suporte? Dependendo do que aconteceu, você pode ter direito a indenização.",
    situations: [
      "Acidente durante o trabalho",
      "Doença causada ou agravada pelo trabalho",
      "Empresa que não deu nenhum suporte",
    ],
    image: {
      url: "/images/atuacao/acidente-trabalho.jpg",
      alt: "Trabalhador machucado no chão ao lado de um capacete de segurança",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre acidente de trabalho.",
    order: 3,
  },
  {
    id: "acoes-trabalhistas",
    slug: "acoes-trabalhistas",
    field: "trabalhista",
    icon: "work",
    title: "Ações trabalhistas",
    summary:
      "Saiu do emprego e não recebeu o que devia, ou o trabalho está tirando sua saúde? Eu explico quais direitos podem ser cobrados no seu caso.",
    situations: [
      "Rescisão e FGTS pagos errado",
      "Demissão injusta, até por justa causa sem motivo",
      "Sair de um emprego que está te adoecendo",
    ],
    image: {
      url: "/images/atuacao/acoes-trabalhistas.jpg",
      alt: "Silhueta de um trabalhador da construção ao pôr do sol",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso trabalhista.",
    order: 4,
  },
];
