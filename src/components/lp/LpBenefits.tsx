import type { LandingPage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpBenefitsProps {
  content: LandingPage["benefits"];
  ctaHref: string;
}

/** Verbas que o trabalhador pode receber: texto e CTA à esquerda, lista à direita. */
export function LpBenefits({ content, ctaHref }: LpBenefitsProps) {
  return (
    <Section id={content.id} tone="dark" labelledBy={`${content.id}-titulo`}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-18">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
            {content.title}
          </h2>
          <p className="lead mt-4 text-mist sm:mt-5">{content.lead}</p>
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

        <ul className="border-t border-navy-line">
          {content.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3.5 border-b border-navy-line py-4.5 text-[17px] font-bold sm:text-lg"
            >
              <Icon name="check" size={20} strokeWidth={2.25} className="flex-none text-gold" />
              <span>
                {item.label}
                {item.note && <span className="font-semibold text-mist"> ({item.note})</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
