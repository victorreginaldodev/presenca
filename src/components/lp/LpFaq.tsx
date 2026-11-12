import type { LpFaqContent } from "@/content/types";
import { Section } from "@/components/ui/Section";

interface LpFaqProps {
  content: LpFaqContent;
}

function isPlaceholder(answer: string): boolean {
  return answer.startsWith("[CONFIRMAR");
}

/**
 * Perguntas frequentes da LP, com `details` nativo (acessível por teclado, sem
 * JavaScript). Respostas ainda não confirmadas com o cliente ficam destacadas.
 */
export function LpFaq({ content }: LpFaqProps) {
  return (
    <Section id={content.id} labelledBy={`${content.id}-titulo`}>
      <div className="grid gap-9 lg:grid-cols-2 lg:gap-18">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-titulo`} className="heading-2 mt-3 sm:mt-4">
            {content.title}
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {content.items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-bold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="flex size-8 flex-none items-center justify-center bg-gold-soft text-gold-dark transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </span>
              </summary>
              {isPlaceholder(item.answer) ? (
                <p className="pb-5">
                  <mark className="bg-gold-soft px-1 py-0.5 font-bold text-gold-dark">{item.answer}</mark>
                </p>
              ) : (
                <p className="pb-5 text-[17px] leading-[1.7] text-muted sm:text-lg">{item.answer}</p>
              )}
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
