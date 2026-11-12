import type { LpDeniedContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpDeniedProps {
  content: LpDeniedContent;
  ctaHref: string;
}

/** Situações comuns de pedido negado ou benefício cortado, + fecho com CTA. */
export function LpDenied({ content, ctaHref }: LpDeniedProps) {
  return (
    <Section id={content.id} tone="dark" labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[46rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
        <p className="lead mt-4 text-mist sm:mt-5">{content.lead}</p>
      </div>

      <ul className="mt-9 grid grid-cols-1 gap-3 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3.5 border border-navy-line bg-navy-soft p-5"
          >
            <span
              aria-hidden="true"
              className="flex size-10 flex-none items-center justify-center border border-navy-line text-gold"
            >
              <Icon name={item.icon} size={20} strokeWidth={1.75} />
            </span>
            <span className="pt-1.5 text-[15px] leading-snug font-bold text-white sm:text-base">
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <p className="lead mt-8 max-w-[52rem] text-mist sm:mt-9">{content.closingText}</p>
      <ButtonLink
        href={ctaHref}
        external
        size="lg"
        iconStart="whatsapp"
        className="mt-7 w-full sm:w-fit"
        ariaLabel={`${content.ctaLabel} pelo WhatsApp (abre em nova aba)`}
      >
        {content.ctaLabel}
      </ButtonLink>
    </Section>
  );
}
