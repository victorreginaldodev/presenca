import type { LandingPage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

interface LpFinalCtaProps {
  content: LandingPage["finalCta"];
  ctaHref: string;
}

/** Chamada final da LP: faixa dourada, título e botão de WhatsApp centralizados. */
export function LpFinalCta({ content, ctaHref }: LpFinalCtaProps) {
  return (
    <Section tone="dark" labelledBy="cta-final-titulo">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span aria-hidden="true" className="mb-7 h-0.5 w-12 bg-gold" />
        <h2 id="cta-final-titulo" className="heading-2">
          {content.title}
        </h2>
        <p className="lead mt-4 max-w-[38rem] text-mist-light sm:mt-5">{content.lead}</p>
        <ButtonLink
          href={ctaHref}
          external
          variant="whatsapp"
          size="lg"
          iconStart="whatsapp"
          className="mt-8 w-full sm:w-fit"
          ariaLabel={`${content.ctaLabel} pelo WhatsApp (abre em nova aba)`}
        >
          {content.ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
