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
      <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
        <BrazilMap
          legendReach={content.legendReach}
          legendOffice={content.legendOffice}
          className="order-last mx-auto w-full max-w-[34rem] lg:order-first"
        />

        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="onde-atendemos-titulo" className="heading-2 text-navy">
            {content.title}
          </h2>
          <p className="lead text-muted">{content.text}</p>

          <ul className="mt-2 flex flex-col gap-5 sm:mt-4 sm:gap-6">
            {settings.serviceModes.map((mode) => (
              <li key={mode.title} className="flex items-start gap-4">
                <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark sm:size-12">
                  <Icon name={mode.icon} size={22} />
                </span>
                <span className="flex flex-col pt-0.5">
                  <span className="text-[17px] font-bold text-navy sm:text-lg">{mode.title}</span>
                  {mode.description && <span className="text-base text-muted sm:text-[17px]">{mode.description}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
