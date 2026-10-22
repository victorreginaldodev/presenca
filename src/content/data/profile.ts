import type { LawyerProfile } from "../types";

// Formação e tempo de experiência ficam vazios até o Fernando enviar as
// informações confirmadas. O bloco correspondente só aparece quando houver dados.
export const lawyerProfile: LawyerProfile = {
  name: "Fernando Araujo",
  oab: "OAB/MG 235.682",
  yearsOfExperience: null,
  credentials: [],
  values: [
    { icon: "book", label: "Excelência técnica" },
    { icon: "target", label: "Foco na solução" },
    { icon: "refresh", label: "Retorno frequente" },
  ],
  bio: [
    "Nascido em Santa Juliana, no interior de Minas Gerais, passei meus primeiros oito anos de vida na zona rural, onde dei os primeiros passos da minha história. Aos dez anos, já na cidade, comecei a trabalhar em um empreendimento familiar, experiência que contribuiu para a construção da minha trajetória pessoal e profissional.",
    "Em 2019 ingressei na graduação em Direito na Universidade de Uberaba. Durante a formação acadêmica, conquistei a aprovação no Exame da Ordem dos Advogados do Brasil (OAB) antes mesmo de concluir a graduação.",
    "Trabalhei por mais de dois anos em um escritório de advocacia com sede em Uberlândia, especializado em Direito do Trabalho e Direito Previdenciário, onde adquiri experiência e aprofundei meus conhecimentos jurídicos e empresariais.",
    "Movido pela busca constante por aperfeiçoamento, concluí pós-graduação em Direito Previdenciário pela Escola da Magistratura Federal do Paraná (ESMAFE) e em Direito do Trabalho pela Faculdade Focus. Também possuo formações em Controladoria Jurídica, Controladoria Empresarial e Administração de Empresas.",
    "Em 1º de abril de 2025, fundei a Fernando Araujo Advocacia. Desde sua fundação, a Fernando Araujo Advocacia segue transformando vidas em todo o Brasil, por meio de uma atuação pautada pela excelência técnica, ética, transparência e humanização. Afinal, por trás de cada processo, existe uma história que merece ser ouvida e respeitada.",
  ],
  photos: {
    hero: {
      url: "/images/fernando/fernando-terno-azul.jpg",
      alt: "Fernando Araujo, de terno azul e braços cruzados, sorrindo",
      width: 832,
      height: 1248,
    },
    about: {
      url: "/images/fernando/fernando-sorrindo.jpg",
      alt: "Fernando Araujo sorrindo, de terno escuro, em frente a uma estante de livros",
      width: 1200,
      height: 1798,
    },
  },
};
