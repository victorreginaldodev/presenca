import type { LpRequirementsContent } from "@/content/types";
import { Section } from "@/components/ui/Section";

interface LpRequirementsProps {
  content: LpRequirementsContent;
}

/** Requisitos para ter direito, em cards numerados. */
export function LpRequirements({ content }: LpRequirementsProps) {
  return (
    <Section id={content.id} labelledBy={`${content.id}-titulo`}>
      <div className="max-w-[46rem]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
          {content.title}
        </h2>
        <p className="lead mt-4 text-muted sm:mt-5">{content.lead}</p>
      </div>

      <ol className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 border border-line bg-surface p-6"
          >
            <span
              aria-hidden="true"
              className="text-[2.75rem] leading-none font-black tracking-[-0.03em] text-gold-dark"
            >
              {index + 1}
            </span>
            <h3 className="text-lg leading-snug font-extrabold text-ink">
              {item.title}
              {item.subtitle && (
                <span className="block text-[15px] font-bold text-muted">{item.subtitle}</span>
              )}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
