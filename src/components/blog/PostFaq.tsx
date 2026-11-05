import type { FaqItem } from "@/content/types";

interface PostFaqProps {
  title: string;
  items: FaqItem[];
}

/** Perguntas frequentes do artigo, com `details` nativo (acessível por teclado, sem JavaScript). */
export function PostFaq({ title, items }: PostFaqProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="faq-titulo" className="mt-12 sm:mt-16">
      <h2 id="faq-titulo" className="text-2xl leading-tight font-extrabold text-navy sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item, index) => (
          <details key={item.question} open={index === 0} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-bold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="flex size-8 flex-none items-center justify-center rounded-full bg-gold-soft text-gold-dark transition-transform group-open:rotate-45 motion-reduce:transition-none"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 text-[17px] leading-[1.7] text-ink sm:text-lg">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
