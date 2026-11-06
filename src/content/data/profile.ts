import type { LawyerProfile } from "../types";

// Formação e tempo de experiência ficam vazios até o Fernando enviar as
// informações confirmadas. O bloco correspondente só aparece quando houver dados.
export const lawyerProfile: LawyerProfile = {
  name: "Fernando Araujo",
  oab: "OAB/MG 235.682",
  yearsOfExperience: null,
  cardItems: [
    "Fundador da Fernando Araujo Advocacia (2025)",
    "Advogado · OAB/MG 235.682",
    "Direito · Universidade de Uberaba",
    "Pós em Direito Previdenciário · ESMAFE",
    "Pós em Direito do Trabalho · Faculdade Focus",
    "Controladoria Jurídica, Controladoria Empresarial e Administração",
  ],
  shortBio:
    "Advogado inscrito na OAB/MG, pós-graduado em Direito Previdenciário pela ESMAFE e em Direito do Trabalho. Atende em todo o Brasil pelo WhatsApp e presencialmente em Santa Juliana-MG, explicando cada etapa do caso em linguagem simples.",
  photos: {
    hero: {
      url: "/images/fernando/fernando-terno-azul.jpg",
      alt: "Fernando Araujo, de terno azul e braços cruzados, sorrindo",
      width: 832,
      height: 1248,
    },
    about: {
      url: "/images/fernando/fernando-dobra-minha-historia-2.jpeg",
      alt: "Fernando Araujo, de terno escuro e gravata vermelha, de braços cruzados em frente a uma estante de livros",
      width: 1025,
      height: 1534,
    },
  },
};
