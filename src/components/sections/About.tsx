import Image from "next/image";

import type { HomePage, LawyerProfile } from "@/content/types";
import { Section } from "@/components/ui/Section";

import { AboutCard } from "./AboutCard";

interface AboutProps {
  content: HomePage["about"];
  profile: LawyerProfile;
  ctaHref: string;
}

export function About({ content, profile, ctaHref }: AboutProps) {
  const photo = profile.photos.about;
  // Com o tempo de experiência informado, o título passa a citá-lo.
  const title =
    profile.yearsOfExperience !== null
      ? content.titleWithExperience.replace("{anos}", String(profile.yearsOfExperience))
      : content.title;

  return (
    <Section id="sobre" tone="dark" labelledBy="sobre-titulo" className="relative overflow-hidden">
      {/* Colunas de fórum desfocadas e puxadas para a direita, com o
          lado esquerdo só escurecido — textura de fundo da seção. */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/assets/fundo.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/55 to-navy/35" />
      </div>

      <div className="relative mx-auto flex max-w-[30rem] flex-col items-center gap-8 sm:gap-10">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="sobre-titulo" className="sr-only">
          {title}
        </h2>

        {photo && (
          <div className="relative w-full">
            {/* Moldura dourada deslocada, dando profundidade ao card. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/50"
            />
            <AboutCard
              photo={photo}
              name={profile.name}
              items={profile.cardItems}
              ctaLabel={content.cta.label}
              ctaHref={ctaHref}
            />
          </div>
        )}
      </div>
    </Section>
  );
}
