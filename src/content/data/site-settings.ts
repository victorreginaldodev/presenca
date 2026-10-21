import type { SiteSettings } from "../types";

// Dados retirados do layout de referência. Validar com o Fernando (docs/PENDENCIAS.md).
export const siteSettings: SiteSettings = {
  siteName: "Fernando Araujo Advocacia",
  description:
    "Advogado com atuação em Direito Previdenciário e Trabalhista. Aposentadoria, auxílio-doença, acidente de trabalho e rescisão. Atendimento em todo o Brasil, sem sair de casa, e no escritório em Santa Juliana-MG.",
  tagline:
    "Advocacia previdenciária e trabalhista com atendimento próximo, linguagem simples e retorno frequente sobre o seu caso.",
  oab: "OAB/MG 235.682",
  logo: {
    url: "/images/marca/logo-fa-dourado.png",
    alt: "Fernando Araujo Advocacia",
    width: 249,
    height: 441,
  },
  contact: {
    whatsappNumber: "5534999029545",
    whatsappDisplay: "(34) 99902-9545",
    whatsappDefaultMessage: "Olá, Fernando! Quero conversar sobre o meu caso.",
    phone: "+5534999029545",
    email: "fernandoaraujoadv1@gmail.com",
    instagramHandle: "@fernandoaraujoo.adv",
    instagramUrl: "https://www.instagram.com/fernandoaraujoo.adv/",
  },
  address: {
    street: "Rua 26 de Outubro, 146",
    neighborhood: "Bairro Palmeiras",
    city: "Santa Juliana",
    state: "MG",
    postalCode: "38175-000",
  },
  serviceModes: [
    {
      icon: "video",
      title: "Sem sair de casa, em todo o Brasil",
      description: "Por WhatsApp, ligação ou chamada de vídeo, de onde você estiver.",
    },
    {
      icon: "pin",
      title: "Presencial em Santa Juliana-MG",
      description: "No escritório, com hora marcada.",
    },
    {
      icon: "clock",
      title: "Segunda a sexta, das 8h às 17h",
    },
  ],
  openingHours: {
    label: "Segunda a sexta, das 8h às 17h",
    schema: "Mo-Fr 08:00-17:00",
  },
  legal: {
    cnpj: null,
    privacyPolicyPath: null,
  },
  disclaimer:
    "Conteúdo informativo. Cada caso é analisado individualmente e não há garantia de resultado.",
};
