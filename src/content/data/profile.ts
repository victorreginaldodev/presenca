import type { LawyerProfile } from "../types";

// Formação e tempo de experiência ficam vazios até o Fernando enviar as
// informações confirmadas. O bloco correspondente só aparece quando houver dados.
export const lawyerProfile: LawyerProfile = {
  name: "Fernando Araujo",
  oab: "OAB/MG 235.682",
  yearsOfExperience: null,
  credentials: [],
  values: [
    { icon: "shield", label: "Honestidade" },
    { icon: "eye", label: "Transparência" },
    { icon: "refresh", label: "Retorno frequente" },
    { icon: "book", label: "Competência técnica" },
    { icon: "target", label: "Foco na solução" },
    { icon: "chat", label: "Eu ouço você" },
  ],
  bio: [
    "Sou Fernando Araujo, advogado inscrito na OAB/MG sob o nº 235.682.",
    "Meu trabalho é lutar pelo que é seu por direito, para que você não se sinta enganado, trapaceado ou humilhado.",
    "Eu não esqueço nenhuma pessoa que me confiou a sua história. Por isso, dou retorno frequente sobre o andamento do seu caso.",
    "Me reúno com você quantas vezes forem necessárias, por chamada de vídeo ou no escritório, e respondo suas dúvidas por mensagem, áudio ou ligação.",
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
