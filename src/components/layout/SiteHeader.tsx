import Link from "next/link";

import type { Media, NavItem } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Section";

import { MobileMenu } from "./MobileMenu";

interface SiteHeaderProps {
  name: string;
  oab: string;
  logo: Media;
  navigation: NavItem[];
  whatsappHref: string;
}

export function SiteHeader({ name, oab, logo, navigation, whatsappHref }: SiteHeaderProps) {
  const links = navigation.map((item) => ({ label: item.label, href: `/#${item.sectionId}` }));

  return (
    <header className="tone-dark sticky top-0 z-40 border-b border-white/8 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/90">
      <Container className="flex min-h-20 items-center justify-between gap-6 lg:min-h-22">
        <Link href="/#inicio" className="no-underline" aria-label={`${name} Advocacia, ir para o início`}>
          <BrandMark logo={logo} title={name} subtitle={`Advocacia · ${oab}`} />
        </Link>

        <nav aria-label="Menu principal" className="hidden xl:block">
          <ul className="flex gap-7 text-base font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="whitespace-nowrap text-white/90 no-underline hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <ButtonLink
            href={whatsappHref}
            external
            iconStart="whatsapp"
            className="whitespace-nowrap"
            ariaLabel="Falar no WhatsApp (abre em nova aba)"
          >
            Falar no WhatsApp
          </ButtonLink>
        </div>

        <MobileMenu links={links} whatsappHref={whatsappHref} />
      </Container>
    </header>
  );
}
