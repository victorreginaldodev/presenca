import Image from "next/image";

import type { LandingPage, Media } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";

interface LpHeroProps {
  content: LandingPage["hero"];
  /** Sem foto, o hero mostra só o texto. */
  photo: Media | null;
  ctaHref: string;
}

/**
 * Primeira dobra da LP: título com ênfase em dourado, CTA de WhatsApp e foto do
 * advogado encostada na base da seção. No celular o título e o CTA aparecem sem
 * rolagem; a foto fica logo abaixo.
 */
export function LpHero({ content, photo, ctaHref }: LpHeroProps) {
  const enter = "motion-safe:animate-[hero-enter_0.6s_ease-out_both]";

  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="tone-dark overflow-hidden bg-navy text-white"
    >
      <Container className="grid items-end gap-10 pt-[calc(4rem+2.5rem)] sm:gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 lg:pt-[calc(4rem+4.5rem)]">
        <div className="flex max-w-[40rem] flex-col gap-5 sm:gap-6 lg:pb-16">
          <p className={`eyebrow ${enter}`}>{content.eyebrow}</p>
          <h1 id="inicio-titulo" className={`heading-1 ${enter}`} style={{ animationDelay: "80ms" }}>
            {content.title} <span className="text-gold">{content.titleEmphasis}</span>
          </h1>
          <p className={`lead text-mist-light ${enter}`} style={{ animationDelay: "160ms" }}>
            {content.lead}
          </p>
          <div className={`mt-1 flex flex-col gap-3 sm:mt-2 sm:gap-4 ${enter}`} style={{ animationDelay: "240ms" }}>
            <ButtonLink
              href={ctaHref}
              external
              variant="whatsapp"
              size="lg"
              iconStart="whatsapp"
              className="w-full sm:w-fit"
              ariaLabel={`${content.ctaLabel} pelo WhatsApp (abre em nova aba)`}
            >
              {content.ctaLabel}
            </ButtonLink>
            <p className="flex items-start gap-2 text-[15px] leading-normal text-mist sm:text-base">
              <Icon name="lock" size={16} className="mt-1 flex-none text-gold" />
              {content.note}
            </p>
          </div>
        </div>

        {photo && (
          <div className={`self-end ${enter}`} style={{ animationDelay: "320ms" }}>
            {/* Foto alinhada à base da seção, como no design da LP. */}
            <Image
              src={photo.url}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              preload
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="aspect-[4/5] max-h-[27.5rem] w-full border-x border-t border-navy-line bg-navy-soft object-cover object-top lg:max-h-[36rem]"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
