import type { LandingPage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

interface LpJurisprudenceProps {
  content: LandingPage["jurisprudence"];
  ctaHref: string;
}

/** Entendimento dos tribunais: card claro com texto e destaques numéricos. */
export function LpJurisprudence({ content, ctaHref }: LpJurisprudenceProps) {
  return (
    <Section id={content.id} tone="muted" labelledBy={`${content.id}-titulo`}>
      <div className="grid gap-9 border border-line bg-white p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
            {content.title}
          </h2>
          <p className="lead mt-4 text-muted sm:mt-5">{content.lead}</p>
          <ButtonLink
            href={ctaHref}
            external
            variant="whatsapp"
            size="lg"
            iconStart="whatsapp"
            className="mt-7 w-full sm:mt-8 sm:w-fit"
            ariaLabel={`${content.ctaLabel} pelo WhatsApp (abre em nova aba)`}
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-7" aria-label="Temas citados">
          {content.items.map((item) => (
            <div key={item.value} className="border-t-2 border-gold-strong pt-4">
              <p className="text-xs font-extrabold tracking-[0.14em] text-gold-dark uppercase">{item.label}</p>
              <p className="mt-0.5 text-6xl leading-none font-black tracking-[-0.03em] text-navy lg:text-7xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
