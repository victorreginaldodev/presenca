import type { LpDocumentsContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface LpDocumentsProps {
  content: LpDocumentsContent;
}

/** Checklist de documentos: título e aviso à esquerda, lista com ícones à direita. */
export function LpDocuments({ content }: LpDocumentsProps) {
  return (
    <Section id={content.id} labelledBy={`${content.id}-titulo`}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-18">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
            {content.title}
          </h2>
          <p className="mt-6 inline-flex items-center gap-2.5 bg-gold-soft px-4 py-3 text-[15px] font-bold text-ink sm:text-base">
            <Icon name="info" size={18} className="flex-none text-gold-dark" />
            {content.note}
          </p>
        </div>

        <ul className="border-t border-line">
          {content.items.map((item) => (
            <li key={item.label} className="flex items-start gap-3.5 border-b border-line py-4">
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
      </div>
    </Section>
  );
}
