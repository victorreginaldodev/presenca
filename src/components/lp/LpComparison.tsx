import type { LpComparisonContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpComparisonProps {
  content: LpComparisonContent;
  ctaHref: string;
}

/** Comparativo lado a lado (ex.: acidentário x previdenciário) + faixa com CTA. */
export function LpComparison({ content, ctaHref }: LpComparisonProps) {
  return (
    <Section id={content.id} tone="muted" labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[46rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-2">
        {content.columns.map((column) => (
          <article
            key={column.title}
            className={`flex flex-col gap-3.5 border border-line bg-white p-6 sm:p-8 ${
              column.highlighted ? "border-t-2 border-t-gold-strong" : "border-t-2 border-t-mist"
            }`}
          >
            <div>
              <h3 className="text-xl leading-snug font-extrabold text-ink">{column.title}</h3>
              {column.code && (
                <p
                  className={`mt-1 text-sm font-extrabold ${
                    column.highlighted ? "text-gold-dark" : "text-muted"
                  }`}
                >
                  {column.code}
                </p>
              )}
            </div>
            {column.lead && <p className="text-[15px] leading-relaxed text-muted">{column.lead}</p>}
            <ul className="flex flex-col gap-3 text-[15px] leading-relaxed">
              {column.items.map((item) => (
                <li
                  key={item}
                  className={`flex gap-2.5 ${column.marker === "check" ? "font-bold text-ink" : "text-muted"}`}
                >
                  {column.marker === "check" ? (
                    <Icon
                      name="check"
                      size={18}
                      strokeWidth={2.25}
                      className="mt-0.5 flex-none text-gold-dark"
                    />
                  ) : (
                    <span aria-hidden="true" className="mt-2.5 ml-1.5 size-1.5 flex-none rounded-full bg-muted" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="tone-dark mt-6 flex flex-col gap-6 bg-navy p-6 sm:p-8">
        <p className="text-[17px] leading-relaxed font-bold text-white sm:text-xl">
          {content.band.text} <span className="text-gold">{content.band.emphasis}</span>
        </p>
        <ButtonLink
          href={ctaHref}
          external
          size="lg"
          iconStart="whatsapp"
          className="w-full sm:w-fit"
          ariaLabel={`${content.band.ctaLabel} pelo WhatsApp (abre em nova aba)`}
        >
          {content.band.ctaLabel}
        </ButtonLink>
      </div>
    </Section>
  );
}
