import Image from "next/image";

import type { HomePage, LegalField, PracticeArea } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";

interface PracticeAreasProps {
  content: HomePage["practice"];
  areas: (PracticeArea & { href: string })[];
  closingHref: string;
}

const fieldLabels: Record<LegalField, string> = {
  previdenciario: "Previdenciário",
  trabalhista: "Trabalhista",
};

export function PracticeAreas({ content, areas, closingHref }: PracticeAreasProps) {
  return (
    <Section id="atuacao" labelledBy="atuacao-titulo">
      <SectionHeader id="atuacao-titulo" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <ul className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-10">
        {areas.map((area) => (
          <li key={area.id}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white sm:rounded-3xl">
              {area.image ? (
                <div className="relative">
                  <Image
                    src={area.image.url}
                    alt={area.image.alt}
                    width={area.image.width}
                    height={area.image.height}
                    sizes="(min-width: 1152px) 556px, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
                    className="aspect-[16/9] h-auto w-full object-cover sm:aspect-[2/1]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[13px] font-bold text-navy sm:top-5 sm:left-5 sm:px-3.5 sm:py-1.5 sm:text-sm">
                    {fieldLabels[area.field]}
                  </span>
                </div>
              ) : (
                <span className="mx-5 mt-5 w-fit rounded-full bg-gold-soft px-3 py-1 text-[13px] font-bold text-navy sm:mx-9 sm:mt-9 sm:px-3.5 sm:py-1.5 sm:text-sm">
                  {fieldLabels[area.field]}
                </span>
              )}
              <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-9">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                    <Icon name={area.icon} size={24} />
                  </span>
                  <h3 className="text-[1.375rem] leading-tight font-bold text-navy sm:text-2xl">{area.title}</h3>
                </div>
                <p className="text-muted">{area.summary}</p>
                <ul className="flex flex-col gap-2">
                  {area.situations.map((situation) => (
                    <li key={situation} className="flex items-start gap-3 text-base leading-snug text-ink sm:text-[17px] sm:leading-normal">
                      <Icon name="check" size={20} strokeWidth={2.5} className="mt-0.5 flex-none text-gold-dark sm:mt-1" />
                      {situation}
                    </li>
                  ))}
                </ul>
                {area.note && <p className="text-base text-muted sm:text-[17px]">{area.note}</p>}
                <a
                  href={area.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${content.linkLabel}: ${area.title} (abre o WhatsApp em nova aba)`}
                  className="group mt-auto inline-flex min-h-12 w-fit touch-manipulation items-center gap-2 pt-1 font-bold sm:pt-2 text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
                >
                  {content.linkLabel}
                  <Icon
                    name="arrow-right"
                    size={20}
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 text-center sm:mt-20 sm:gap-7">
        <p className="lead text-muted">{content.closingText}</p>
        <ButtonLink
          href={closingHref}
          external
          size="lg"
          variant="navy"
          iconStart="whatsapp"
          className="w-full sm:w-fit"
          ariaLabel={`${content.closingCta.label} pelo WhatsApp (abre em nova aba)`}
        >
          {content.closingCta.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
