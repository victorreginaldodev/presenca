import type { HomePage, PracticeArea } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section, SectionHeader } from "@/components/ui/Section";

import { PracticeAreasCarousel } from "./PracticeAreasCarousel";

interface PracticeAreasProps {
  content: HomePage["practice"];
  areas: PracticeArea[];
  closingHref: string;
}

export function PracticeAreas({ content, areas, closingHref }: PracticeAreasProps) {
  return (
    <Section id="atuacao" labelledBy="atuacao-titulo">
      <SectionHeader id="atuacao-titulo" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <PracticeAreasCarousel areas={areas} />

      <div className="mt-12 flex flex-col items-center text-center sm:mt-16">
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
