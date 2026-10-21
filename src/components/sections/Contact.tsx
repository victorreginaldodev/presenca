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
      icon: "phone",
      label: "Ligação",
      value: contact.whatsappDisplay,
      action: "Ligar agora",
      href: `tel:${contact.phone}`,
      external: false,
    },
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
    <Section id="contato" tone="muted" labelledBy="contato-titulo">
      <SectionHeader id="contato-titulo" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Canal principal: WhatsApp */}
        <div className="tone-dark relative flex flex-col overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10 lg:row-span-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(215,197,123,0.18),transparent_70%)]"
          />
          <span className="flex size-14 items-center justify-center rounded-2xl bg-whatsapp text-white">
            <Icon name="whatsapp" size={30} />
          </span>
          <p className="eyebrow mt-8">WhatsApp</p>
          <h3 className="mt-3 text-[1.75rem] leading-tight font-bold sm:text-3xl">{content.whatsappTitle}</h3>
          <p className="mt-4 text-lg text-mist-light">{content.whatsappText}</p>
          <p className="mt-8 text-[1.75rem] font-bold tracking-tight sm:text-[2rem]">{contact.whatsappDisplay}</p>
          <div className="mt-auto flex flex-col gap-4 pt-10">
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
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`${channel.action}: ${channel.value.replace(ZERO_WIDTH_SPACE, "")}${channel.external ? " (abre em nova aba)" : ""}`}
                className="group flex h-full items-center gap-5 rounded-2xl border border-line bg-white p-6 text-ink no-underline transition-colors hover:border-navy/40 hover:text-ink motion-reduce:transition-none sm:flex-col sm:items-start lg:flex-row lg:items-center"
              >
                <span className="flex size-12 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
                  <Icon name={channel.icon} size={24} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm font-bold tracking-wide text-muted uppercase">{channel.label}</span>
                  <span className="text-lg font-bold wrap-break-word text-navy">{channel.value}</span>
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
        <address className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 not-italic sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
          <span className="flex items-start gap-5">
            <span className="flex size-12 flex-none items-center justify-center rounded-xl bg-gold-soft text-gold-dark">
              <Icon name="pin" size={24} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-muted uppercase">Escritório</span>
              <span className="text-lg font-bold text-navy">{address.street}</span>
              <span className="text-muted">
                {address.neighborhood}, {address.city}-{address.state}
              </span>
            </span>
          </span>
          <span className="flex flex-wrap gap-2.5">
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
