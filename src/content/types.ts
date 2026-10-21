/**
 * Modelos de conteúdo do site público.
 *
 * Os formatos espelham o que será criado no Payload CMS (etapa 2):
 * - SiteSettings, LawyerProfile e HomePage → globals
 * - PracticeArea e Review → collections
 * - Media → collection de upload
 *
 * Mantenha estes tipos livres de detalhes de apresentação (classes CSS,
 * componentes). Somente dados públicos entram aqui.
 */

/** Ícones disponíveis no site. No Payload, vira um campo `select`. */
export type IconName =
  | "retirement"
  | "health"
  | "accident"
  | "work"
  | "shield"
  | "eye"
  | "refresh"
  | "book"
  | "target"
  | "chat"
  | "video"
  | "pin"
  | "clock"
  | "phone"
  | "whatsapp"
  | "mail"
  | "instagram"
  | "google"
  | "navigation"
  | "check"
  | "quote"
  | "arrow-right"
  | "arrow-left"
  | "menu"
  | "close"
  | "star";

/** Referência a uma imagem (equivale a um documento da collection `media`). */
export interface Media {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface ServiceMode {
  icon: IconName;
  title: string;
  description?: string;
}

export interface SiteSettings {
  siteName: string;
  /** Descrição curta usada em metadados e compartilhamento. */
  description: string;
  /** Frase de apresentação exibida no rodapé. */
  tagline: string;
  oab: string;
  logo: Media;
  contact: {
    /** Somente dígitos, com DDI e DDD. Ex.: 5534999029545 */
    whatsappNumber: string;
    /** Formato de exibição. Ex.: (34) 99902-9545 */
    whatsappDisplay: string;
    /** Mensagem padrão quando o contato não vem de uma área específica. */
    whatsappDefaultMessage: string;
    /** Número para ligação no formato E.164. Ex.: +5534999029545 */
    phone: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  address: Address;
  serviceModes: ServiceMode[];
  openingHours: {
    label: string;
    /** Formato schema.org. Ex.: Mo-Fr 08:00-17:00 */
    schema: string;
  };
  legal: {
    /** Preencher só com o CNPJ confirmado; vazio não aparece. */
    cnpj: string | null;
    /** Caminho da política de privacidade, quando existir e for aprovada. */
    privacyPolicyPath: string | null;
  };
  disclaimer: string;
}

export interface Credential {
  label: string;
  value: string;
}

export interface ProfileValue {
  icon: IconName;
  label: string;
}

export interface LawyerProfile {
  name: string;
  oab: string;
  /** Deixe vazio até o Fernando confirmar. Nunca preencha com estimativa. */
  yearsOfExperience: number | null;
  credentials: Credential[];
  values: ProfileValue[];
  bio: string[];
  photos: {
    hero: Media | null;
    about: Media | null;
  };
}

export type LegalField = "previdenciario" | "trabalhista";

/** Área de atuação exibida em "Atuação" (collection `practice-areas`). */
export interface PracticeArea {
  id: string;
  slug: string;
  field: LegalField;
  icon: IconName;
  title: string;
  summary: string;
  /** Situações que ajudam o visitante a se reconhecer. */
  situations: string[];
  image: Media;
  /** Mensagem já preenchida no WhatsApp ao clicar na área. */
  whatsappMessage: string;
  order: number;
}

export interface Review {
  id: string;
  authorName: string;
  /** Data ISO (AAAA-MM-DD) da avaliação original. */
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "google";
}

export interface ReviewSummary {
  /** Preencher apenas com números reais copiados do perfil do Google. */
  averageRating: number | null;
  totalReviews: number | null;
  profileUrl: string | null;
}

export interface CallToAction {
  label: string;
  /** Mensagem do WhatsApp. Se ausente, usa a mensagem padrão. */
  whatsappMessage?: string;
}

/** Textos da página inicial (global `home` no Payload). */
export interface HomePage {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: CallToAction;
    ctaNote: string;
  };
  practice: {
    eyebrow: string;
    title: string;
    subtitle: string;
    linkLabel: string;
    closingText: string;
    closingCta: CallToAction;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
    cta: CallToAction;
  };
  about: {
    eyebrow: string;
    title: string;
    credentialsTitle: string;
    valuesTitle: string;
    cta: CallToAction;
  };
  reviews: {
    eyebrow: string;
    title: string;
  };
  locations: {
    eyebrow: string;
    title: string;
    text: string;
    legendReach: string;
    legendOffice: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappText: string;
    cta: CallToAction;
  };
}

export interface NavItem {
  label: string;
  /** Âncora da seção na página inicial, sem `#`. */
  sectionId: string;
}
