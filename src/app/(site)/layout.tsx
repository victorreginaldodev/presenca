import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getLawyerProfile, getNavigation, getPracticeAreas, getSiteSettings } from "@/lib/content";
import { contactWhatsappUrl } from "@/lib/links";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

// Nunito Sans (SIL Open Font License 1.1), subconjunto latino, fonte variável.
// Servida pelo próprio site, sem chamadas ao Google Fonts.
const nunitoSans = localFont({
  src: "../fonts/nunito-sans-latin.woff2",
  weight: "400 900",
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `${settings.siteName} | Previdenciário e Trabalhista`;

  return {
    metadataBase: getSiteUrl(),
    title: { default: title, template: `%s | ${settings.siteName}` },
    description: settings.description,
    applicationName: settings.siteName,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: "/",
      siteName: settings.siteName,
      title,
      description: settings.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: settings.description,
    },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c1726",
  width: "device-width",
  initialScale: 1,
  // Ocupa a tela toda nos celulares com entalhe; as margens seguras ficam no CSS.
  viewportFit: "cover",
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [settings, profile, navigation, practiceAreas] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getNavigation(),
    getPracticeAreas(),
  ]);
  const whatsappHref = contactWhatsappUrl(settings);

  return (
    <html lang="pt-BR" className={nunitoSans.variable}>
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SiteHeader
          name={profile.name}
          oab={settings.oab}
          logo={settings.logo}
          navigation={navigation}
          whatsappHref={whatsappHref}
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
      </body>
    </html>
  );
}
