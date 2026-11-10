import { LpChrome } from "@/components/lp/LpChrome";
import { rescisaoIndireta } from "@/content/lp/rescisao-indireta";
import { getSiteSettings } from "@/lib/content";
import { whatsappUrl } from "@/lib/links";

// Cada LP tem um layout fininho assim: escolhe o arquivo de conteúdo e entrega
// navegação e mensagem de WhatsApp ao LpChrome compartilhado.
export default async function RescisaoIndiretaLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  const lp = rescisaoIndireta;

  return (
    <LpChrome
      navigation={lp.navigation}
      homeHref={`/lp/${lp.slug}`}
      whatsappHref={whatsappUrl(settings.contact.whatsappNumber, lp.whatsappMessage)}
      whatsappCtaLabel={lp.headerCtaLabel}
    >
      {children}
    </LpChrome>
  );
}
