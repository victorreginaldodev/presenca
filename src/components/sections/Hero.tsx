import Image from "next/image";

import type { HomePage, Media } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Section";

interface HeroProps {
  content: HomePage["hero"];
  ctaHref: string;
  photo: Media | null;
}

export function Hero({ content, ctaHref, photo }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="tone-dark relative overflow-hidden bg-navy text-white"
    >
      {/* Brilho suave atrás da foto, só decorativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[420px] rounded-full sm:size-[640px] bg-[radial-gradient(circle,rgba(215,197,123,0.14),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-12 pt-10 pb-16 sm:gap-14 sm:pt-20 sm:pb-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 lg:pt-28 lg:pb-32">
        <div className="flex flex-col gap-5 sm:gap-7">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="inicio-titulo" className="heading-1">
            {content.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-mist-light sm:text-[22px]">{content.lead}</p>
          <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:gap-4">
            <ButtonLink
              href={ctaHref}
              external
              size="lg"
              iconStart="whatsapp"
              className="w-full sm:w-fit"
              ariaLabel={`${content.cta.label} pelo WhatsApp (abre em nova aba)`}
            >
              {content.cta.label}
            </ButtonLink>
            <p className="text-[15px] leading-normal text-mist sm:text-base">{content.ctaNote}</p>
          </div>
        </div>

        {photo && (
          <div className="relative mx-auto w-[calc(100%-1rem)] max-w-[20rem] sm:max-w-[26rem] lg:mr-0">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-gold/50 sm:translate-x-4 sm:translate-y-4 sm:rounded-[28px]" />
            <Image
              src={photo.url}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority
              sizes="(min-width: 640px) 416px, 320px"
              className="relative aspect-[4/5] h-auto w-full rounded-3xl object-cover object-top sm:rounded-[28px]"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
