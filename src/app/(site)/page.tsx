import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Locations } from "@/components/sections/Locations";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { LegalServiceJsonLd } from "@/components/seo/LegalServiceJsonLd";
import {
  getHomePage,
  getLawyerProfile,
  getPracticeAreas,
  getReviews,
  getSiteSettings,
} from "@/lib/content";
import { contactWhatsappUrl } from "@/lib/links";

export default async function HomePage() {
  const [settings, profile, home, practiceAreas, reviews] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getHomePage(),
    getPracticeAreas(),
    getReviews(),
  ]);

  const whatsapp = (message?: string) => contactWhatsappUrl(settings, message);

  return (
    <>
      <LegalServiceJsonLd settings={settings} profile={profile} practiceAreas={practiceAreas} />
      <Hero content={home.hero} ctaHref={whatsapp(home.hero.cta.whatsappMessage)} photo={profile.photos.hero} />
      <PracticeAreas
        content={home.practice}
        areas={practiceAreas.map((area) => ({ ...area, href: whatsapp(area.whatsappMessage) }))}
        closingHref={whatsapp(home.practice.closingCta.whatsappMessage)}
      />
      <Process content={home.process} ctaHref={whatsapp(home.process.cta.whatsappMessage)} />
      <About content={home.about} profile={profile} ctaHref={whatsapp(home.about.cta.whatsappMessage)} />
      {/* Blog (etapa 3): a seção com os últimos artigos entra aqui. */}
      <Reviews content={home.reviews} reviews={reviews.items} summary={reviews.summary} />
      <Locations content={home.locations} settings={settings} />
      <Contact content={home.contact} settings={settings} whatsappHref={whatsapp(home.contact.cta.whatsappMessage)} />
    </>
  );
}
