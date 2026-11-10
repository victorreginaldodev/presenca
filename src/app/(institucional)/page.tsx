import { Hero } from "@/components/institucional/Hero";
import { LatestPosts } from "@/components/institucional/LatestPosts";
import { Locations } from "@/components/institucional/Locations";
import { PracticeAreas } from "@/components/institucional/PracticeAreas";
import { About } from "@/components/shared/About";
import { Contact } from "@/components/shared/Contact";
import { Process } from "@/components/shared/Process";
import { Reviews } from "@/components/shared/Reviews";
import { LegalServiceJsonLd } from "@/components/seo/LegalServiceJsonLd";
import {
  getHomePage,
  getLatestPosts,
  getLawyerProfile,
  getPracticeAreas,
  getReviews,
  getSiteSettings,
} from "@/lib/content";
import { contactWhatsappUrl } from "@/lib/links";

export default async function HomePage() {
  const [settings, profile, home, practiceAreas, reviews, posts] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getHomePage(),
    getPracticeAreas(),
    getReviews(),
    getLatestPosts(3),
  ]);

  const whatsapp = (message?: string) => contactWhatsappUrl(settings, message);

  return (
    <>
      <LegalServiceJsonLd settings={settings} profile={profile} practiceAreas={practiceAreas} />
      <Hero content={home.hero} ctaHref={whatsapp(home.hero.cta.whatsappMessage)} />
      <PracticeAreas
        content={home.practice}
        areas={practiceAreas}
        closingHref={whatsapp(home.practice.closingCta.whatsappMessage)}
      />
      <Process content={home.process} />
      <Reviews content={home.reviews} reviews={reviews.items} summary={reviews.summary} />
      <About content={home.about} profile={profile} ctaHref={whatsapp(home.about.cta.whatsappMessage)} />
      <Locations content={home.locations} settings={settings} />
      <LatestPosts content={home.blog} posts={posts} />
      <Contact content={home.contact} settings={settings} whatsappHref={whatsapp(home.contact.cta.whatsappMessage)} />
    </>
  );
}
