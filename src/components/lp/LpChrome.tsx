import type { NavItem } from "@/content/types";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { getLawyerProfile, getPracticeAreas, getSiteSettings } from "@/lib/content";

interface LpChromeProps {
  /** Âncoras da própria LP, exibidas só dentro do menu hambúrguer. */
  navigation: NavItem[];
  /** Destino do logo (a própria LP). */
  homeHref: string;
  whatsappHref: string;
  /** Rótulo do botão de WhatsApp fixo no cabeçalho. */
  whatsappCtaLabel: string;
  children: React.ReactNode;
}

/**
 * Chrome enxuto das landing pages: mesmo cabeçalho e rodapé do site, mas com os
 * links sempre dentro do hambúrguer e o botão de WhatsApp sempre visível.
 */
export async function LpChrome({ navigation, homeHref, whatsappHref, whatsappCtaLabel, children }: LpChromeProps) {
  const [settings, profile, practiceAreas] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getPracticeAreas(),
  ]);

  return (
    <>
      <SiteHeader
        name={profile.name}
        oab={settings.oab}
        logo={settings.logo}
        navigation={navigation}
        whatsappHref={whatsappHref}
        contact={settings.contact}
        homeHref={homeHref}
        whatsappCtaLabel={whatsappCtaLabel}
      />
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter
        settings={settings}
        name={profile.name}
        navigation={navigation}
        practiceAreas={practiceAreas}
        whatsappHref={whatsappHref}
      />
      <FloatingWhatsApp href={whatsappHref} />
    </>
  );
}
