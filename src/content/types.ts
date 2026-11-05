/**
 * Modelos de conteúdo do site público.
 *
 * Os formatos espelham o que será criado no Payload CMS (etapa 2):
 * - SiteSettings, LawyerProfile, HomePage e BlogPage → globals
 * - PracticeArea, Review e BlogPost → collections
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
  | "star"
  | "injury"
  | "info"
  | "link"
  | "external"
  | "calendar";

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
  /** Link do perfil do escritório no Google Maps (abre o estabelecimento, não uma busca). */
  googleMapsUrl: string;
  /** Coordenadas do escritório, usadas no Waze. */
  latitude: number;
  longitude: number;
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
  /** Duas ou três linhas para a caixa do autor no blog e para os dados estruturados. */
  shortBio: string;
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
  /** Frase de fechamento abaixo da lista, opcional. */
  note?: string;
  /** Sem imagem, o card mostra só o texto. */
  image: Media | null;
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
    /** Aviso em destaque, fora da linha do tempo. */
    notice: string;
    cta: CallToAction;
  };
  about: {
    eyebrow: string;
    title: string;
    /** Usado quando o tempo de experiência estiver preenchido; `{anos}` vira o número. */
    titleWithExperience: string;
    credentialsTitle: string;
    valuesTitle: string;
    cta: CallToAction;
  };
  reviews: {
    eyebrow: string;
    title: string;
  };
  /** Textos da seção "Blog" da página inicial. */
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Rótulo do link para a lista completa em /blog. */
    linkLabel: string;
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

/** Bloco do corpo de um artigo (espelha os nós do rich text do Payload). */
export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  /** Resposta direta à pergunta do título, em 2 ou 3 frases, logo no começo. */
  | { type: "answer"; text: string }
  /** Chamada no meio do texto; a mensagem já vai preenchida no WhatsApp. */
  | { type: "cta"; title: string; text: string; label: string; whatsappMessage: string };

export interface FaqItem {
  question: string;
  answer: string;
}

/** Fonte oficial citada no artigo (lei, INSS, gov.br). */
export interface PostSource {
  label: string;
  url: string;
}

/** Artigo do blog (collection `posts` no Payload). */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  /** Resumo usado nos cards e na meta description. */
  excerpt: string;
  field: LegalField;
  /** Temas do artigo, exibidos como etiquetas e usados como palavras-chave. */
  tags: string[];
  /** Data ISO (AAAA-MM-DD) de publicação. */
  publishedAt: string;
  /** Data ISO da última revisão do conteúdo; aparece como "Atualizado em". */
  updatedAt?: string;
  /** Destaque editorial em /blog. Sem nenhum marcado, o mais recente é destacado. */
  featured?: boolean;
  /** Sem capa, o card e a página mostram só o texto. */
  cover: Media | null;
  body: PostBlock[];
  /** Perguntas frequentes sobre o tema; viram bloco na página e dados estruturados. */
  faq: FaqItem[];
  /** Fontes oficiais que embasam o texto. */
  sources: PostSource[];
  /** Mensagem do WhatsApp do botão final; identifica de qual artigo veio o contato. */
  whatsappMessage: string;
  /** Rascunhos não aparecem no site. */
  status: "draft" | "published";
}

/** Textos da página /blog e dos artigos (global `blog` no Payload). */
export interface BlogPage {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Exibido quando ainda não há artigos publicados. */
  emptyMessage: string;
  /** Exibido quando o filtro por área não encontra artigos. */
  noResultsMessage: string;
  featuredLabel: string;
  allLabel: string;
  authorBoxTitle: string;
  faqTitle: string;
  sourcesTitle: string;
  relatedTitle: string;
  /** Aviso de que o conteúdo é informativo (publicidade da OAB). */
  disclaimer: string;
  cta: {
    title: string;
    text: string;
    label: string;
  };
  /** Menu do cabeçalho do blog. */
  navigation: NavItem[];
}

export interface NavItem {
  label: string;
  /** Destino do link: âncora da home ("/#secao") ou rota ("/blog"). */
  href: string;
}
