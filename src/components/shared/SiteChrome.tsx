import { getLawyerProfile, getNavigation, getPracticeAreas, getSiteSettings } from "@/lib/content";
import { contactWhatsappUrl } from "@/lib/links";

import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Cabeçalho, rodapé e botão do WhatsApp do site institucional. O blog tem os seus próprios. */
export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const [settings, profile, navigation, practiceAreas] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getNavigation(),
    getPracticeAreas(),
  ]);
  const whatsappHref = contactWhatsappUrl(settings);

  return (
    <>
      <SiteHeader
        name={profile.name}
        oab={settings.oab}
        logo={settings.logo}
        navigation={navigation}
        whatsappHref={whatsappHref}
        contact={settings.contact}
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
