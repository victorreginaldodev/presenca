import type { HomePage } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface ProcessProps {
  content: HomePage["process"];
  ctaHref: string;
}

/** Etapas do atendimento, em uma linha do tempo vertical. */
export function Process({ content, ctaHref }: ProcessProps) {
  return (
    <Section id="como-funciona" tone="dark" labelledBy="como-funciona-titulo">
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
        <div className="flex flex-col gap-4 sm:gap-6 lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="como-funciona-titulo" className="heading-2">
            {content.title}
          </h2>
          <p className="lead text-mist">{content.subtitle}</p>
          <ButtonLink
            href={ctaHref}
            external
            size="lg"
            iconStart="whatsapp"
            className="mt-2 w-full sm:mt-4 sm:w-fit"
            ariaLabel={`${content.cta.label} (abre em nova aba)`}
          >
            {content.cta.label}
          </ButtonLink>
          <p className="mt-2 flex gap-3 rounded-2xl border border-gold/60 bg-navy-soft p-4 text-base leading-relaxed text-white sm:mt-4 sm:p-5 sm:text-[17px]">
            <Icon name="info" size={22} className="mt-0.5 flex-none text-gold" />
            <span>
              <strong className="font-bold text-gold">Importante:</strong> {content.notice}
            </span>
          </p>
        </div>

        <ol className="relative flex flex-col gap-9 border-l border-navy-line pl-6 sm:gap-14 sm:pl-12">
          {content.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {/* Marcador sobre a linha */}
              <span
                aria-hidden="true"
                className="absolute top-2.5 -left-[calc(1.5rem+4.5px)] size-2 rounded-full bg-gold ring-4 ring-navy sm:-left-[calc(3rem+4.5px)]"
              />
              <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-8">
                <span className="font-mono text-sm leading-6 tracking-widest text-gold sm:leading-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl leading-snug font-bold sm:text-2xl">{step.title}</h3>
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
