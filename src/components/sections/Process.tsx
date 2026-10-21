import type { HomePage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

interface ProcessProps {
  content: HomePage["process"];
  ctaHref: string;
}

/** Etapas do atendimento, em uma linha do tempo vertical. */
export function Process({ content, ctaHref }: ProcessProps) {
  return (
    <Section id="como-funciona" tone="dark" labelledBy="como-funciona-titulo">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="como-funciona-titulo" className="heading-2">
            {content.title}
          </h2>
          <p className="text-xl text-mist">{content.subtitle}</p>
          <ButtonLink
            href={ctaHref}
            external
            size="lg"
            iconStart="whatsapp"
            className="mt-4 w-full sm:w-fit"
            ariaLabel={`${content.cta.label} (abre em nova aba)`}
          >
            {content.cta.label}
          </ButtonLink>
        </div>

        <ol className="relative flex flex-col gap-12 border-l border-navy-line pl-8 sm:gap-14 sm:pl-12">
          {content.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {/* Marcador sobre a linha */}
              <span
                aria-hidden="true"
                className="absolute top-2.5 -left-[calc(2rem+4.5px)] size-2 rounded-full bg-gold ring-4 ring-navy sm:-left-[calc(3rem+4.5px)]"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                <span className="font-mono text-sm leading-8 tracking-widest text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl leading-snug font-bold">{step.title}</h3>
                  <p className="max-w-xl text-mist">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
