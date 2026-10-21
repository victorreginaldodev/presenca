import type { Review, ReviewSummary } from "../types";

// Avaliações públicas do perfil do escritório no Google Maps, copiadas em
// 21/10/2026. Os textos estão como os autores escreveram (só foi retirado o
// "…" de corte do Google). Nomes reduzidos ao primeiro nome + inicial do
// sobrenome. As datas são aproximadas: o Google mostra só "há X meses".
// Sem login, o Google exibe apenas 5 das 35 avaliações.
export const reviews: Review[] = [
  {
    id: "google-emelliny",
    authorName: "Emelliny G.",
    date: "2025-10-01",
    rating: 5,
    text: "Melhor equipe! Agilidade, ótimo atendimento, prestatividade, excelência profissional, são claros e objetivos no que precisamos! Super recomendo! 5 🌟 é pouco, teria que ser 10!",
    source: "google",
  },
  {
    id: "google-tania",
    authorName: "Tânia C.",
    date: "2026-06-01",
    rating: 5,
    text: "Eu agradeço a Deus e ao doutor Fernando por tudo que fez por nós obrigado mesmo de coração. Fernando você e um excelente advogado",
    source: "google",
  },
  {
    id: "google-silvania",
    authorName: "Silvania S.",
    date: "2026-03-01",
    rating: 5,
    text: "O Dr Fernando Araujo e um excelente advogado agradeço a ele por estar mim ajudando além de ser prestativo e educado com a gente Deus abençoe sempre",
    source: "google",
  },
  {
    id: "google-marco-aurelio",
    authorName: "Marco Aurélio A.",
    date: "2026-03-01",
    rating: 5,
    text: "Trabalho onesto e competente, sempre serei grato pela atenção e dedicação q recebi quando mas precisei, muito obrigado 🫂",
    source: "google",
  },
  {
    id: "google-evandro",
    authorName: "Evandro S.",
    date: "2026-08-01",
    rating: 5,
    text: "Muito satisfeito com os serviços prestados. Excelente profissional 👏👏",
    source: "google",
  },
];

export const reviewSummary: ReviewSummary = {
  averageRating: 5,
  totalReviews: 35,
  profileUrl: "https://www.google.com/maps?cid=10236819031622485583",
};
