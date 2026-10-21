import Image from "next/image";

import type { HomePage, LawyerProfile } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

interface AboutProps {
  content: HomePage["about"];
  profile: LawyerProfile;
  ctaHref: string;
}

export function About({ content, profile, ctaHref }: AboutProps) {
  const photo = profile.photos.about;

  return (
    <Section id="sobre" labelledBy="sobre-titulo">
      <div
        className={
          photo
            ? "grid items-center gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24"
            : "mx-auto max-w-3xl"
        }
      >
        {photo && (
          <div className="mx-auto w-full max-w-[28rem]">
            <Image
              src={photo.url}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 448px, 90vw"
              className="aspect-[4/5] h-auto w-full rounded-[28px] object-cover object-top"
            />
          </div>
        )}

        <div className="flex flex-col gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="sobre-titulo" className="heading-2 text-navy">
            {content.title}
          </h2>
          <div className="flex flex-col gap-5">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {profile.credentials.length > 0 && (
            <div className="mt-4 rounded-2xl border border-line p-7">
              <h3 className="text-xl font-bold text-navy">{content.credentialsTitle}</h3>
              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                {profile.credentials.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-sm font-bold tracking-wide text-gold-dark uppercase">{item.label}</dt>
                    <dd className="text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-6 border-t border-line pt-10">
            <h3 className="text-xl font-bold text-navy">{content.valuesTitle}</h3>
            <ul className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {profile.values.map((value) => (
                <li key={value.label} className="flex items-center gap-4">
                  <span className="flex size-11 flex-none items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <span className="text-lg font-semibold text-navy">{value.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink
            href={ctaHref}
            external
            size="lg"
            variant="navy"
            iconStart="whatsapp"
            className="mt-6 w-full sm:w-fit"
            ariaLabel={`${content.cta.label} pelo WhatsApp (abre em nova aba)`}
          >
            {content.cta.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
