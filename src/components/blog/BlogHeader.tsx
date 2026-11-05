import Link from "next/link";

import type { Media, NavItem } from "@/content/types";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

interface BlogHeaderProps {
  name: string;
  oab: string;
  logo: Media;
  navigation: NavItem[];
  whatsappHref: string;
}

/** Cabeçalho claro e enxuto do blog. O botão do WhatsApp fica visível em qualquer tamanho de tela. */
export function BlogHeader({ name, oab, logo, navigation, whatsappHref }: BlogHeaderProps) {
  const links = navigation.map((item) => ({ label: item.label, href: item.href }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex min-h-16 w-full max-w-[80rem] items-center justify-between gap-4 pr-[max(1.25rem,env(safe-area-inset-right))] pl-[max(1.25rem,env(safe-area-inset-left))] sm:min-h-20 sm:gap-6 sm:pr-[max(2rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))]">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link href="/" className="no-underline" aria-label={`${name} Advocacia, ir para o site`}>
            <BrandMark logo={logo} title={name} subtitle={`Advocacia · ${oab}`} tone="light" />
          </Link>
          <Link
            href="/blog"
            className="hidden items-center gap-3 text-base font-bold text-gold-dark no-underline before:h-6 before:w-px before:bg-line hover:text-navy sm:flex"
          >
            Blog
          </Link>
        </div>

        <nav aria-label="Menu do blog" className="hidden lg:block">
          <ul className="flex gap-6 text-base font-semibold xl:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="whitespace-nowrap text-ink no-underline hover:text-gold-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href={whatsappHref}
            external
            variant="navy"
            iconStart="whatsapp"
            className="hidden whitespace-nowrap sm:inline-flex"
            ariaLabel="Falar no WhatsApp (abre em nova aba)"
          >
            Falar no WhatsApp
          </ButtonLink>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp (abre em nova aba)"
            className="flex size-12 touch-manipulation items-center justify-center rounded-xl bg-navy text-white hover:bg-navy-soft hover:text-white sm:hidden"
          >
            <Icon name="whatsapp" size={24} />
          </a>
          <div className="lg:hidden">
            <MobileMenu links={links} whatsappHref={whatsappHref} tone="light" />
          </div>
        </div>
      </div>
    </header>
  );
}
