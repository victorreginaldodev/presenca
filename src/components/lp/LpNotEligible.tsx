import type { LpNotEligibleContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

interface LpNotEligibleProps {
  content: LpNotEligibleContent;
  ctaHref: string;
}

/** Situações que em regra não dão direito, numeradas, com CTA de dúvida abaixo da grade. */
export function LpNotEligible({ content, ctaHref }: LpNotEligibleProps) {
  return (
    <Section id={content.id} tone="muted" labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[46rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
      </div>

      <ol className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-2.5 border border-line bg-white p-6">
            <span aria-hidden="true" className="text-sm font-extrabold tracking-[0.06em] text-gold-dark">
              /{String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg leading-snug font-extrabold text-ink">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-5 text-center sm:mt-11 sm:gap-6">
        <p className="text-xl leading-snug font-extrabold text-navy sm:text-2xl">
          {content.doubtCard.text} <span className="text-gold-dark">{content.doubtCard.emphasis}</span>
        </p>
        <ButtonLink
          href={ctaHref}
          external
          size="lg"
          iconStart="whatsapp"
          className="w-full sm:w-fit"
          ariaLabel={`${content.doubtCard.ctaLabel} pelo WhatsApp (abre em nova aba)`}
        >
          {content.doubtCard.ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
