import type { HomePage } from "@/content/types";
import { Section } from "@/components/ui/Section";

interface ProcessProps {
  content: HomePage["process"];
}

/** Etapas do atendimento, em uma linha do tempo vertical. */
export function Process({ content }: ProcessProps) {
  return (
    <Section id="como-funciona" tone="dark" labelledBy="como-funciona-titulo">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 sm:gap-14">
        <h2 id="como-funciona-titulo" className="heading-2">
          {content.title}
        </h2>

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
