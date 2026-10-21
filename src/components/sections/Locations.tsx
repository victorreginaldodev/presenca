import type { HomePage, SiteSettings } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

import { BrazilMap } from "./map/BrazilMap";

interface LocationsProps {
  content: HomePage["locations"];
  settings: SiteSettings;
}

export function Locations({ content, settings }: LocationsProps) {
  return (
    <Section id="onde-atendemos" labelledBy="onde-atendemos-titulo">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <BrazilMap
          legendReach={content.legendReach}
          legendOffice={content.legendOffice}
          className="mx-auto w-full max-w-[34rem]"
        />

        <div className="flex flex-col gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="onde-atendemos-titulo" className="heading-2 text-navy">
            {content.title}
          </h2>
          <p className="text-xl text-muted">{content.text}</p>

          <ul className="mt-4 flex flex-col gap-6">
            {settings.serviceModes.map((mode) => (
              <li key={mode.title} className="flex items-start gap-4">
                <span className="flex size-12 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                  <Icon name={mode.icon} size={24} />
                </span>
                <span className="flex flex-col pt-0.5">
                  <span className="text-lg font-bold text-navy">{mode.title}</span>
                  {mode.description && <span className="text-muted">{mode.description}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
