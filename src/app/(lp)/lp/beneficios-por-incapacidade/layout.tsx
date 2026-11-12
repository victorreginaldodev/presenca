import { LpChrome } from "@/components/lp/LpChrome";
import { beneficiosPorIncapacidade } from "@/content/lp/beneficios-por-incapacidade";
import { getSiteSettings } from "@/lib/content";
import { whatsappUrl } from "@/lib/links";

// Cada LP tem um layout fininho assim: escolhe o arquivo de conteúdo e entrega
// navegação e mensagem de WhatsApp ao LpChrome compartilhado.
export default async function BeneficiosPorIncapacidadeLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  const lp = beneficiosPorIncapacidade;

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
