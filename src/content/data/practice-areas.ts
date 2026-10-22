import type { PracticeArea } from "../types";

// Cinco áreas; as que têm imagem usam `public/images/atuacao`.
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
      "Se uma doença ou lesão impede você de trabalhar, pode haver direito a um benefício do INSS, temporário ou permanente, conforme a incapacidade identificada.",
    situations: [
      "Comprovar a incapacidade para o trabalho",
      "Possuir qualidade de segurado do INSS",
      "Cumprir, em regra, 12 contribuições de carência, salvo exceções legais",
    ],
    note: "Cada situação merece uma análise cuidadosa. Uma orientação jurídica individualizada pode ajudar você a compreender seus direitos.",
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
    id: "auxilio-acidente",
    slug: "auxilio-acidente",
    field: "previdenciario",
    icon: "injury",
    title: "Auxílio-acidente",
    summary:
      "Se um acidente deixou sequelas permanentes que reduziram sua capacidade para o trabalho habitual, você pode ter direito a uma indenização mensal do INSS, mesmo continuando a trabalhar.",
    situations: [
      "Ter sofrido acidente de qualquer natureza",
      "Apresentar sequela permanente com redução da capacidade laboral",
      "Pertencer a uma categoria de segurados abrangida pelo benefício, sem exigência de carência",
    ],
    note: "Mesmo uma sequela aparentemente pequena pode gerar direitos. Uma avaliação jurídica personalizada pode esclarecer as possibilidades do seu caso.",
    // Foto do Pexels (licença livre, uso comercial sem crédito): pexels.com/photo/7579834
    image: {
      url: "/images/atuacao/auxilio-acidente.jpg",
      alt: "Médica mostrando um raio-X ao paciente durante a consulta",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre auxílio-acidente.",
    order: 3,
  },
  {
    id: "acidente-de-trabalho",
    slug: "acidente-de-trabalho",
    field: "trabalhista",
    icon: "accident",
    title: "Acidente de trabalho e doença do trabalho",
    summary:
      "Se machucou ou adoeceu por causa do trabalho e a empresa não deu suporte? Você pode ter direito a:",
    situations: [
      "Indenização por danos materiais, morais, estéticos e existenciais",
      "Pensão mensal até os 70 anos de idade ou mais",
      "Rescisão do contrato de trabalho",
      "Indenização aos herdeiros/dependentes em caso de óbito",
    ],
    image: {
      url: "/images/atuacao/acidente-trabalho.jpg",
      alt: "Trabalhador machucado no chão ao lado de um capacete de segurança",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre acidente de trabalho.",
    order: 4,
  },
  {
    id: "acoes-trabalhistas",
    slug: "acoes-trabalhistas",
    field: "trabalhista",
    icon: "work",
    title: "Ações trabalhistas",
    summary:
      "Foi demitido e não recebeu o que devia ou o patrão cometeu faltas graves e você não quer mais permanecer no emprego? Há alguns caminhos para a solução:",
    situations: ["Acordo extrajudicial", "Reclamação trabalhista", "Rescisão indireta"],
    image: {
      url: "/images/atuacao/acoes-trabalhistas.jpg",
      alt: "Silhueta de um trabalhador da construção ao pôr do sol",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso trabalhista.",
    order: 5,
  },
];
