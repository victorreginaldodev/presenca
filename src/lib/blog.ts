import type { BlogPost, LegalField } from "@/content/types";

import { getSiteUrl } from "./site-url";

export const LEGAL_FIELDS: LegalField[] = ["previdenciario", "trabalhista"];

export function isLegalField(value: unknown): value is LegalField {
  return typeof value === "string" && (LEGAL_FIELDS as string[]).includes(value);
}

export function postPath(post: Pick<BlogPost, "slug">): string {
  return `/blog/${post.slug}`;
}

export function postUrl(post: Pick<BlogPost, "slug">): string {
  return new URL(postPath(post), getSiteUrl()).toString();
}

export function blogAreaPath(field: LegalField): string {
  return `/blog?area=${field}`;
}

/** Id de âncora para os títulos do artigo (sem acentos, só letras, números e hífen). */
export function headingId(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Compartilhar o artigo no WhatsApp (sem destinatário: o leitor escolhe o contato). */
export function shareWhatsappUrl(title: string, url: string): string {
  return `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`;
}

export const postDateFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPostDate(iso: string): string {
  return postDateFormat.format(new Date(iso));
}
