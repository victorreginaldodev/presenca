import type { LawyerProfile, PracticeArea, SiteSettings } from "@/content/types";
import { getSiteUrl } from "@/lib/site-url";

interface LegalServiceJsonLdProps {
  settings: SiteSettings;
  profile: LawyerProfile;
  practiceAreas: PracticeArea[];
}

/** Dados estruturados (schema.org) com informações públicas já confirmadas no site. */
export function LegalServiceJsonLd({ settings, profile, practiceAreas }: LegalServiceJsonLdProps) {
  const url = getSiteUrl().toString();
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: settings.siteName,
    description: settings.description,
    url,
    telephone: settings.contact.phone,
    email: settings.contact.email,
    sameAs: [settings.contact.instagramUrl],
    openingHours: settings.openingHours.schema,
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address.street,
      addressLocality: settings.address.city,
      addressRegion: settings.address.state,
      postalCode: settings.address.postalCode,
      addressCountry: "BR",
    },
    employee: { "@type": "Person", name: profile.name, jobTitle: "Advogado" },
    knowsAbout: practiceAreas.map((area) => area.title),
    logo: new URL(settings.logo.url, url).toString(),
    image: profile.photos.hero ? new URL(profile.photos.hero.url, url).toString() : undefined,
  };

  return (
    <script
      type="application/ld+json"
      // JSON gerado no servidor a partir de dados locais; "<" é escapado.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
