import type { Metadata } from "next";

import { LpBenefits } from "@/components/lp/LpBenefits";
import { LpFaq } from "@/components/lp/LpFaq";
import { LpFinalCta } from "@/components/lp/LpFinalCta";
import { LpHero } from "@/components/lp/LpHero";
import { LpJurisprudence } from "@/components/lp/LpJurisprudence";
import { LpNotEligible } from "@/components/lp/LpNotEligible";
import { LpSituations } from "@/components/lp/LpSituations";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { LegalServiceJsonLd } from "@/components/seo/LegalServiceJsonLd";
import { About } from "@/components/shared/About";
import { Contact } from "@/components/shared/Contact";
import { Process } from "@/components/shared/Process";
import { Reviews } from "@/components/shared/Reviews";
import { rescisaoIndireta as lp } from "@/content/lp/rescisao-indireta";
import {
  getHomePage,
  getLawyerProfile,
  getPracticeAreas,
  getReviews,
  getSiteSettings,
} from "@/lib/content";
import { whatsappUrl } from "@/lib/links";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `${lp.seo.title} | ${settings.siteName}`;

  return {
    title: lp.seo.title,
    description: lp.seo.description,
    // Canonical limpo: o tráfego de anúncios chega com parâmetros de UTM/gclid.
    alternates: { canonical: `/lp/${lp.slug}` },
    openGraph: {
      type: "website",
      url: `/lp/${lp.slug}`,
      title,
      description: lp.seo.description,
    },
    twitter: { card: "summary_large_image", title, description: lp.seo.description },
  };
}

export default async function RescisaoIndiretaPage() {
  const [settings, profile, home, practiceAreas, reviews] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getHomePage(),
    getPracticeAreas(),
    getReviews(),
  ]);
  const whatsapp = whatsappUrl(settings.contact.whatsappNumber, lp.whatsappMessage);

  return (
    <>
      <LegalServiceJsonLd settings={settings} profile={profile} practiceAreas={practiceAreas} />
      <BreadcrumbListJsonLd
        items={[
          { name: "Início", path: "/" },
          { name: lp.seo.title, path: `/lp/${lp.slug}` },
        ]}
      />
      <FaqPageJsonLd items={lp.faq.items} />

      <LpHero content={lp.hero} photo={profile.photos.hero} ctaHref={whatsapp} />
      <LpSituations content={lp.explanation} />
      <LpBenefits content={lp.benefits} ctaHref={whatsapp} />
      <LpJurisprudence content={lp.jurisprudence} ctaHref={whatsapp} />
      <Process content={home.process} />
      <LpNotEligible content={lp.notEligible} ctaHref={whatsapp} />
      <About content={home.about} profile={profile} ctaHref={whatsapp} />
      <Reviews content={home.reviews} reviews={reviews.items} summary={reviews.summary} />
      <LpFaq content={lp.faq} />
      <LpFinalCta content={lp.finalCta} ctaHref={whatsapp} />
      <Contact content={home.contact} settings={settings} whatsappHref={whatsapp} />
    </>
  );
}
