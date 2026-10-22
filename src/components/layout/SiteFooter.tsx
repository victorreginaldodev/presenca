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
  return <h2 className="text-[13px] font-bold tracking-[0.14em] text-gold uppercase sm:text-sm">{children}</h2>;
}

// Altura mínima de 40px para o toque no celular.
const linkClass = "inline-flex min-h-10 items-center text-mist-light no-underline hover:text-gold sm:min-h-0";

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
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 pt-14 pb-12 sm:gap-14 sm:pt-20 sm:pb-16 lg:grid-cols-[1.25fr_1.35fr_1fr_1.1fr] lg:gap-12 lg:pt-24">
        <div className="col-span-2 flex flex-col gap-5 sm:gap-6 lg:col-span-1">
          <BrandMark logo={settings.logo} title={name} subtitle={`Advocacia · ${settings.oab}`} />
          <p className="max-w-sm text-[15px] text-mist sm:text-base">{settings.tagline}</p>
        </div>

        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1 sm:gap-5">
          <FooterHeading>Contato</FooterHeading>
          <ul className="flex flex-col gap-1 text-base sm:gap-4">
            {contacts.map((item) => (
              <li key={item.icon}>
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`gap-3 ${linkClass}`}
                >
                  <Icon name={item.icon} size={18} className="flex-none text-gold" />
                  <span className="min-w-0 wrap-break-word">{item.label}</span>
                </a>
              </li>
            ))}
            <li className="flex min-h-10 items-center gap-3 text-mist-light sm:min-h-0">
              <Icon name="clock" size={18} className="flex-none text-gold" />
              {settings.openingHours.label}
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1 sm:gap-5">
          <FooterHeading>Escritório</FooterHeading>
          <address className="flex flex-col gap-0.5 text-base text-mist-light not-italic sm:gap-1">
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
            className={`w-fit gap-2 text-base font-bold ${linkClass}`}
          >
            <Icon name="navigation" size={18} className="text-gold" />
            Como chegar
          </a>
          <p className="text-[15px] text-mist sm:text-base">Atendimento em todo o Brasil, sem sair de casa.</p>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-6 sm:col-span-1 sm:flex sm:flex-col sm:gap-10">
          <nav aria-label="Áreas de atuação" className="flex flex-col gap-3 sm:gap-5">
            <FooterHeading>Atuação</FooterHeading>
            <ul className="flex flex-col gap-1.5 text-[15px] leading-snug sm:gap-3 sm:text-base sm:leading-[1.7]">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link href="/#atuacao" className={linkClass}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Rodapé" className="flex flex-col gap-3 sm:gap-5">
            <FooterHeading>Navegação</FooterHeading>
            <ul className="flex flex-col gap-1.5 text-[15px] leading-snug sm:gap-3 sm:text-base sm:leading-[1.7]">
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
        <Container className="flex flex-col gap-4 pt-8 pb-[calc(6rem+env(safe-area-inset-bottom))] text-sm text-mist sm:pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
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
