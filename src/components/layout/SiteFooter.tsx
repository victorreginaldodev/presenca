import Link from "next/link";

import type { IconName, NavItem, PracticeArea, SiteSettings } from "@/content/types";
import { BrandMark } from "@/components/ui/BrandMark";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { breakableEmail, googleMapsUrl } from "@/lib/links";

interface SiteFooterProps {
  settings: SiteSettings;
  name: string;
  navigation: NavItem[];
  practiceAreas: Pick<PracticeArea, "id" | "title">[];
  whatsappHref: string;
}

interface FooterContact {
  icon: IconName;
  label: string;
  href: string;
  external: boolean;
  ariaLabel: string;
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{children}</h2>;
}

const linkClass = "text-mist-light no-underline hover:text-gold";

export function SiteFooter({ settings, name, navigation, practiceAreas, whatsappHref }: SiteFooterProps) {
  const { contact, address, legal } = settings;

  const contacts: FooterContact[] = [
    {
      icon: "whatsapp",
      label: contact.whatsappDisplay,
      href: whatsappHref,
      external: true,
      ariaLabel: `WhatsApp ${contact.whatsappDisplay} (abre em nova aba)`,
    },
    {
      icon: "phone",
      label: "Ligar agora",
      href: `tel:${contact.phone}`,
      external: false,
      ariaLabel: `Ligar para ${contact.whatsappDisplay}`,
    },
    {
      icon: "mail",
      label: breakableEmail(contact.email),
      href: `mailto:${contact.email}`,
      external: false,
      ariaLabel: `Enviar e-mail para ${contact.email}`,
    },
    {
      icon: "instagram",
      label: contact.instagramHandle,
      href: contact.instagramUrl,
      external: true,
      ariaLabel: `Instagram ${contact.instagramHandle} (abre em nova aba)`,
    },
  ];

  return (
    <footer className="tone-dark bg-navy text-white">
      <Container className="grid gap-14 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.35fr_1fr_1.1fr] lg:gap-12 lg:pt-24">
        <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
          <BrandMark logo={settings.logo} title={name} subtitle={`Advocacia · ${settings.oab}`} />
          <p className="max-w-sm text-base text-mist">{settings.tagline}</p>
        </div>

        <div className="flex flex-col gap-5">
          <FooterHeading>Contato</FooterHeading>
          <ul className="flex flex-col gap-4 text-base">
            {contacts.map((item) => (
              <li key={item.icon}>
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex items-center gap-3 ${linkClass}`}
                >
                  <Icon name={item.icon} size={18} className="flex-none text-gold" />
                  <span className="min-w-0 wrap-break-word">{item.label}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 text-mist-light">
              <Icon name="clock" size={18} className="flex-none text-gold" />
              {settings.openingHours.label}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <FooterHeading>Escritório</FooterHeading>
          <address className="flex flex-col gap-1 text-base text-mist-light not-italic">
            <span>{address.street}</span>
            <span>{address.neighborhood}</span>
            <span>
              {address.city}-{address.state}
            </span>
            <span>CEP {address.postalCode}</span>
          </address>
          <a
            href={googleMapsUrl(address)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Como chegar ao escritório pelo Google Maps (abre em nova aba)"
            className={`inline-flex items-center gap-2 text-base font-bold ${linkClass}`}
          >
            <Icon name="navigation" size={18} className="text-gold" />
            Como chegar
          </a>
          <p className="text-base text-mist">Atendimento em todo o Brasil, sem sair de casa.</p>
        </div>

        <div className="flex flex-col gap-10">
          <nav aria-label="Áreas de atuação" className="flex flex-col gap-5">
            <FooterHeading>Atuação</FooterHeading>
            <ul className="flex flex-col gap-3 text-base">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link href="/#atuacao" className={linkClass}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Rodapé" className="flex flex-col gap-5">
            <FooterHeading>Navegação</FooterHeading>
            <ul className="flex flex-col gap-3 text-base">
              {navigation.map((item) => (
                <li key={item.sectionId}>
                  <Link href={`/#${item.sectionId}`} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      <div className="border-t border-navy-line">
        <Container className="flex flex-col gap-4 pt-8 pb-28 text-sm text-mist sm:pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <p className="max-w-2xl">{settings.disclaimer}</p>
          <div className="flex flex-col gap-1 lg:items-end lg:text-right">
            <p>
              © {new Date().getFullYear()} {settings.siteName} · {settings.oab}
            </p>
            {legal.cnpj && <p>CNPJ {legal.cnpj}</p>}
            {legal.privacyPolicyPath && (
              <Link href={legal.privacyPolicyPath} className={linkClass}>
                Política de privacidade
              </Link>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
