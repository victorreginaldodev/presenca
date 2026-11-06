import type { PracticeArea } from "../types";

// Seis áreas, na ordem em que aparecem no carrossel da seção Atuação.
// As fotos usam `public/images/atuacao` e aparecem suaves, ao fundo dos cards.
// "Acidente de trabalho" virou um tipo de ação dentro de "Ações trabalhistas".
// Textos aguardam validação do Fernando (docs/PENDENCIAS.md).
export const practiceAreas: PracticeArea[] = [
  {
    id: "acoes-trabalhistas",
    slug: "acoes-trabalhistas",
    field: "trabalhista",
    icon: "work",
    title: "Ações trabalhistas",
    summary: "",
    cardItems: [
      "Rescisão indireta",
      "Reconhecimento de vínculo",
      "Acidente de trabalho",
      "Insalubridade e periculosidade",
      "Horas extras e verbas rescisórias",
      "Reversão de justa causa",
    ],
    situations: ["Acordo extrajudicial", "Reclamação trabalhista", "Rescisão indireta"],
    image: {
      url: "/images/atuacao/acoes-trabalhistas.jpg",
      alt: "Silhueta de um trabalhador da construção ao pôr do sol",
      width: 1200,
      height: 630,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso trabalhista.",
    order: 1,
  },
  {
    id: "beneficio-por-incapacidade",
    slug: "auxilio-doenca-e-aposentadoria-por-invalidez",
    field: "previdenciario",
    icon: "health",
    title: "Benefícios por incapacidade",
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
    id: "aposentadoria",
    slug: "aposentadoria",
    field: "previdenciario",
    icon: "retirement",
    title: "Aposentadorias",
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
    order: 4,
  },
  {
    id: "pensao-por-morte",
    slug: "pensao-por-morte",
    field: "previdenciario",
    icon: "family",
    title: "Pensão por morte",
    summary:
      "Perdeu alguém do qual você dependia? Se você era cônjuge, companheiro(a), filho(a) ou, em alguns casos, pai, mãe ou irmão, pode ter direito a uma renda do INSS, seja da cidade ou do campo.",
    situations: [
      "Comprovar o parentesco ou a união estável",
      "Pedido negado ou parado no INSS",
      "Entender até quando a pensão é paga",
    ],
    note: "Cônjuge e filhos são a primeira classe de dependentes; pais e irmãos só recebem quando não há ninguém da classe anterior. Uma análise cuidadosa evita perder o direito por falta de documento.",
    // Foto do Pexels (licença livre, uso comercial sem crédito): pexels.com/photo/5790827
    image: {
      url: "/images/atuacao/pensao-morte.jpg",
      alt: "Casal de idosos se abraçando em casa",
      width: 1200,
      height: 800,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre pensão por morte.",
    order: 5,
  },
  {
    id: "salario-maternidade",
    slug: "salario-maternidade",
    field: "previdenciario",
    icon: "baby",
    title: "Salário-maternidade",
    summary:
      "Vai ter um bebê ou está adotando? Você pode receber até 120 dias de benefício do INSS. E se é autônoma, não precisa mais de carência. Mas cuidado, fazer o requerimento sozinha sem a documentação correta pode te fazer perder o benefício.",
    situations: [
      "Garantir o benefício antes ou depois do parto",
      "Pedido negado por falta de carência ou de vínculo",
      "Entender o valor que a mãe vai receber",
    ],
    note: "Desde a decisão do STF de 2024, não é mais exigido número mínimo de contribuições para o salário-maternidade. Quem teve pedido negado por carência nos últimos anos pode ter direito.",
    // Foto do Pexels (licença livre, uso comercial sem crédito): pexels.com/photo/4642261
    image: {
      url: "/images/atuacao/salario-maternidade.jpg",
      alt: "Mãe abraçando o bebê no colo",
      width: 1200,
      height: 800,
    },
    whatsappMessage: "Olá, Fernando! Quero entender meu caso sobre salário-maternidade.",
    order: 6,
  },
];
