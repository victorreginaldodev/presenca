import { getImageProps } from "next/image";

import type { HomePage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Section";

interface HeroProps {
  content: HomePage["hero"];
  ctaHref: string;
}

/** Primeira dobra: foto do escritório ao fundo, texto à esquerda (em baixo no celular). */
export function Hero({ content, ctaHref }: HeroProps) {
  const desktop = getImageProps({
    src: "/images/hero/hero-fernando-v7-desktop.webp",
    alt: "",
    fill: true,
    sizes: "100vw",
    quality: 100,
    unoptimized: true,
    fetchPriority: "high",
  });
  const mobile = getImageProps({
    src: "/assets/WhatsApp%20Image%202026-11-06%20at%2014.45.45%20(1).jpeg",
    alt: "",
    fill: true,
    sizes: "100vw",
    quality: 100,
    unoptimized: true,
  });

  const enter = "motion-safe:animate-[hero-enter_0.6s_ease-out_both]";

  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="tone-dark relative overflow-hidden bg-navy text-white">
      {/* Paisagem no desktop, retrato até 768px — baixa só a versão usada. */}
      <picture>
        <source media="(max-width: 768px)" srcSet={mobile.props.src} sizes="100vw" />
        <source media="(min-width: 769px)" srcSet={desktop.props.src} sizes="100vw" />
        <img
          {...desktop.props}
          alt=""
          srcSet={undefined}
          className="absolute inset-0 h-full w-full object-cover object-top md:object-[right_top]"
        />
      </picture>

      {/* Desktop: navy da esquerda dissolvendo até a foto limpa na direita. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-navy/90 via-navy/45 via-35% to-transparent to-60% md:block"
      />
      {/* Celular: navy subindo do rodapé até o meio, rosto limpo em cima. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 via-45% to-transparent to-55% md:hidden"
      />
      {/* Funde o fim do hero com a próxima seção. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/45 to-transparent" />

      <Container className="relative flex min-h-[min(100svh,56.25rem)] flex-col justify-end pt-20 pb-14 sm:pb-20 md:justify-center md:py-28">
        <div className="flex max-w-[32.5rem] flex-col gap-4 sm:gap-6">
          <h1 id="inicio-titulo" className={`heading-1 ${enter}`}>
            {content.title}
          </h1>
          <p
            className={`max-w-md text-base leading-relaxed text-mist-light sm:text-xl ${enter}`}
            style={{ animationDelay: "120ms" }}
          >
            {content.lead}
          </p>
          <div className={`mt-2 flex flex-col gap-3 sm:mt-3 sm:gap-4 ${enter}`} style={{ animationDelay: "240ms" }}>
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
      </Container>
    </section>
  );
}
