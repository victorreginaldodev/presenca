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

/** Abre o perfil do escritório no Google Maps. Buscar pelo endereço mostrava outros lugares. */
export function googleMapsUrl(address: Address): string {
  return address.googleMapsUrl;
}

/** Rota no Waze até as coordenadas do escritório. */
export function wazeUrl(address: Address): string {
  return `https://waze.com/ul?ll=${address.latitude},${address.longitude}&navigate=yes`;
}
