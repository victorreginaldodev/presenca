import type { HomePage, IconName, SiteSettings } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { breakableEmail, googleMapsUrl, wazeUrl, ZERO_WIDTH_SPACE } from "@/lib/links";

interface ContactProps {
  content: HomePage["contact"];
  settings: SiteSettings;
  whatsappHref: string;
}

interface ContactChannel {
  icon: IconName;
  label: string;
  value: string;
  action: string;
  href: string;
  external: boolean;
}

export function Contact({ content, settings, whatsappHref }: ContactProps) {
  const { contact, address, openingHours } = settings;

  const channels: ContactChannel[] = [
    {
      icon: "mail",
      label: "E-mail",
      value: breakableEmail(contact.email),
      action: "Enviar e-mail",
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      icon: "instagram",
      label: "Instagram",
      value: contact.instagramHandle,
      action: "Ver perfil",
      href: contact.instagramUrl,
      external: true,
    },
  ];

  return (
    <Section id="contato" labelledBy="contato-titulo" className="border-t border-line">
      <SectionHeader id="contato-titulo" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 lg:mt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Canal principal: WhatsApp */}
        <div className="tone-dark relative flex flex-col overflow-hidden rounded-2xl bg-navy p-6 text-white sm:rounded-3xl sm:p-10 lg:row-span-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(215,197,123,0.18),transparent_70%)]"
          />
          <span className="flex size-12 items-center justify-center rounded-xl bg-whatsapp text-white sm:size-14 sm:rounded-2xl">
            <Icon name="whatsapp" size={26} />
          </span>
          <p className="eyebrow mt-6 sm:mt-8">WhatsApp</p>
          <h3 className="mt-2 text-2xl leading-tight font-bold sm:mt-3 sm:text-3xl">{content.whatsappTitle}</h3>
          <p className="mt-3 text-base text-mist-light sm:mt-4 sm:text-lg">{content.whatsappText}</p>
          <p className="mt-6 text-2xl font-bold tracking-tight sm:mt-8 sm:text-[2rem]">{contact.whatsappDisplay}</p>
          <div className="mt-auto flex flex-col gap-4 pt-6 sm:pt-10">
            <ButtonLink
              href={whatsappHref}
              external
              size="lg"
              iconStart="whatsapp"
              className="w-full sm:w-fit"
              ariaLabel={`${content.cta.label} (abre em nova aba)`}
            >
              {content.cta.label}
            </ButtonLink>
            <p className="flex items-center gap-2 text-base text-mist">
              <Icon name="clock" size={18} className="text-gold" />
              {openingHours.label}
            </p>
          </div>
        </div>

        {/* Outros canais */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`${channel.action}: ${channel.value.replace(ZERO_WIDTH_SPACE, "")}${channel.external ? " (abre em nova aba)" : ""}`}
                className="group flex h-full touch-manipulation items-center gap-4 rounded-2xl border border-line bg-white p-4 text-ink sm:gap-5 sm:p-6 no-underline transition-colors hover:border-navy/40 hover:text-ink motion-reduce:transition-none sm:flex-col sm:items-start lg:flex-row lg:items-center"
              >
                <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark sm:size-12">
                  <Icon name={channel.icon} size={22} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[13px] font-bold tracking-wide text-muted uppercase sm:text-sm">{channel.label}</span>
                  <span className="text-base font-bold wrap-break-word text-navy sm:text-lg">{channel.value}</span>
                </span>
                <span className="flex items-center gap-1.5 text-sm font-bold whitespace-nowrap text-gold-dark">
                  <span className="hidden sm:inline">{channel.action}</span>
                  <Icon
                    name="arrow-right"
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Escritório */}
        <address className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-4 not-italic sm:gap-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
          <span className="flex items-start gap-4 sm:gap-5">
            <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark sm:size-12">
              <Icon name="pin" size={22} />
            </span>
            <span className="flex flex-col">
              <span className="text-[13px] font-bold tracking-wide text-muted uppercase sm:text-sm">Escritório</span>
              <span className="text-base font-bold text-navy sm:text-lg">{address.street}</span>
              <span className="text-base text-muted sm:text-[17px]">
                {address.neighborhood}, {address.city}-{address.state}
              </span>
            </span>
          </span>
          <span className="grid gap-2.5 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap">
            <ButtonLink
              href={googleMapsUrl(address)}
              external
              variant="outline"
              iconStart="navigation"
              className="min-h-11! px-4! text-base!"
              ariaLabel="Abrir endereço no Google Maps (abre em nova aba)"
            >
              Google Maps
            </ButtonLink>
            <ButtonLink
              href={wazeUrl(address)}
              external
              variant="outline"
              iconStart="navigation"
              className="min-h-11! px-4! text-base!"
              ariaLabel="Abrir endereço no Waze (abre em nova aba)"
            >
              Waze
            </ButtonLink>
          </span>
        </address>
      </div>
    </Section>
  );
}
