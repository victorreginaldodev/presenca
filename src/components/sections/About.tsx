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
  // Com o tempo de experiência informado, o título passa a citá-lo.
  const title =
    profile.yearsOfExperience !== null
      ? content.titleWithExperience.replace("{anos}", String(profile.yearsOfExperience))
      : content.title;

  return (
    <Section id="sobre" tone="dark" labelledBy="sobre-titulo">
      <div
        className={
          photo
            ? "grid items-center gap-10 sm:gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24"
            : "mx-auto max-w-3xl"
        }
      >
        {photo && (
          <div className="mx-auto w-full max-w-[20rem] sm:max-w-[28rem]">
            <Image
              src={photo.url}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 640px) 448px, 320px"
              className="aspect-[4/5] h-auto w-full rounded-3xl object-cover object-top sm:rounded-[28px]"
            />
          </div>
        )}

        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="sobre-titulo" className="heading-2">
            {title}
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-mist-light">
                {paragraph}
              </p>
            ))}
          </div>

          {profile.credentials.length > 0 && (
            <div className="mt-4 rounded-2xl border border-navy-line bg-navy-soft p-5 sm:p-7">
              <h3 className="text-xl font-bold">{content.credentialsTitle}</h3>
              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                {profile.credentials.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-sm font-bold tracking-wide text-gold uppercase">{item.label}</dt>
                    <dd className="text-mist-light">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-4 border-t border-navy-line pt-8 sm:mt-6 sm:pt-10">
            <h3 className="text-xl font-bold">{content.valuesTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3.5 sm:mt-7 sm:gap-5">
              {profile.values.map((value) => (
                <li key={value.label} className="flex items-center gap-3.5 sm:gap-4">
                  <span className="flex size-10 flex-none items-center justify-center rounded-full bg-navy-soft text-gold ring-1 ring-navy-line sm:size-11">
                    <Icon name={value.icon} size={20} />
                  </span>
                  <span className="text-[17px] font-semibold sm:text-lg">{value.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink
            href={ctaHref}
            external
            size="lg"
            iconStart="whatsapp"
            className="mt-4 w-full sm:mt-6 sm:w-fit"
            ariaLabel={`${content.cta.label} pelo WhatsApp (abre em nova aba)`}
          >
            {content.cta.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
