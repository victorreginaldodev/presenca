import type { LpSituationsContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpSituationsProps {
  content: LpSituationsContent;
}

/** "O que é" + grade de situações que podem dar direito. */
export function LpSituations({ content }: LpSituationsProps) {
  return (
    <Section id={content.id} labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[46rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
        <p className="lead mt-4 text-muted sm:mt-5">{content.lead}</p>
      </div>

      <h3 className="mt-9 text-lg font-extrabold text-ink sm:mt-11 sm:text-xl">{content.listTitle}</h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4">
        {content.situations.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3.5 border border-line bg-surface p-5"
          >
            <span
              aria-hidden="true"
              className="flex size-10 flex-none items-center justify-center bg-gold-soft text-gold-dark"
            >
              <Icon name={item.icon} size={20} strokeWidth={1.75} />
            </span>
            <span className="pt-1.5 text-[15px] leading-snug font-bold text-ink sm:text-base">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
