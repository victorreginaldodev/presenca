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

      <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
        {areas.map((area) => (
          <li key={area.id}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white">
              <div className="relative">
                <Image
                  src={area.image.url}
                  alt={area.image.alt}
                  width={area.image.width}
                  height={area.image.height}
                  sizes="(min-width: 1152px) 556px, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[2/1] h-auto w-full object-cover"
                />
                <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-bold text-navy">
                  {fieldLabels[area.field]}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                    <Icon name={area.icon} size={24} />
                  </span>
                  <h3 className="text-2xl leading-tight font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-muted">{area.summary}</p>
                <ul className="flex flex-col gap-2.5">
                  {area.situations.map((situation) => (
                    <li key={situation} className="flex items-start gap-3 text-[17px] text-ink">
                      <Icon name="check" size={20} strokeWidth={2.5} className="mt-1 flex-none text-gold-dark" />
                      {situation}
                    </li>
                  ))}
                </ul>
                <a
                  href={area.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${content.linkLabel}: ${area.title} (abre o WhatsApp em nova aba)`}
                  className="group mt-auto inline-flex min-h-12 w-fit items-center gap-2 pt-2 font-bold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
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

      <div className="mx-auto mt-20 flex max-w-3xl flex-col items-center gap-7 text-center">
        <p className="text-xl text-muted">{content.closingText}</p>
        <ButtonLink
          href={closingHref}
          external
          size="lg"
          variant="navy"
          iconStart="whatsapp"
          ariaLabel={`${content.closingCta.label} pelo WhatsApp (abre em nova aba)`}
        >
          {content.closingCta.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
