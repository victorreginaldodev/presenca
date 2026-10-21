import type { Address, SiteSettings } from "@/content/types";

export const ZERO_WIDTH_SPACE = String.fromCharCode(0x200b);

/** E-mail com ponto de quebra após o "@", para não cortar no meio do nome. */
export function breakableEmail(email: string): string {
  return email.replace("@", `@${ZERO_WIDTH_SPACE}`);
}

export function whatsappUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link de WhatsApp com a mensagem informada ou a mensagem padrão do site. */
export function contactWhatsappUrl(settings: SiteSettings, message?: string): string {
  return whatsappUrl(
    settings.contact.whatsappNumber,
    message ?? settings.contact.whatsappDefaultMessage,
  );
}

export function formatAddress(address: Address): string {
  return `${address.street}, ${address.neighborhood}, ${address.city}-${address.state}, ${address.postalCode}`;
}

function addressQuery(address: Address): string {
  return encodeURIComponent(`${address.street}, ${address.city} - ${address.state}, ${address.postalCode}`);
}

export function googleMapsUrl(address: Address): string {
  return `https://www.google.com/maps/search/?api=1&query=${addressQuery(address)}`;
}

export function wazeUrl(address: Address): string {
  return `https://waze.com/ul?q=${addressQuery(address)}&navigate=yes`;
}
