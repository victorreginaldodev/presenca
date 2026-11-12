import type { LpBenefitTypesContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpBenefitTypesProps {
  content: LpBenefitTypesContent;
}

/** Cartões comparando tipos de benefício, + nota de fechamento com ícone. */
export function LpBenefitTypes({ content }: LpBenefitTypesProps) {
  return (
    <Section id={content.id} tone="dark" labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[48rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
        <p className="lead mt-4 text-mist sm:mt-5">{content.lead}</p>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-3">
        {content.cards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col gap-4 border border-navy-line bg-navy-soft p-6"
          >
            <div>
              <h3 className="text-xl leading-snug font-extrabold text-white">{card.title}</h3>
              {card.subtitle && (
                <p className="mt-1 text-[15px] font-bold text-gold">{card.subtitle}</p>
              )}
              <p className="mt-3 inline-block border border-navy-line px-2.5 py-1 text-[13px] font-bold text-mist">
                {card.code}
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t border-navy-line pt-4 text-[15px] leading-relaxed text-mist">
              {card.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 flex-none text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <aside className="mt-6 flex items-start gap-4 border border-navy-line bg-navy-soft p-6 sm:p-7">
        <span
          aria-hidden="true"
          className="flex size-10 flex-none items-center justify-center border border-navy-line text-gold"
        >
          <Icon name={content.note.icon} size={20} strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="text-lg leading-snug font-extrabold text-gold">{content.note.title}</h3>
          <p className="mt-2 leading-relaxed text-mist-light">{content.note.text}</p>
        </div>
      </aside>
    </Section>
  );
}
