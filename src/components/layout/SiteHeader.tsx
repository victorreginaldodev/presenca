"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Media, NavItem, SiteSettings } from "@/content/types";
import { BrandMark } from "@/components/ui/BrandMark";

import { MenuDrawer } from "./MenuDrawer";

interface SiteHeaderProps {
  name: string;
  oab: string;
  logo: Media;
  navigation: NavItem[];
  whatsappHref: string;
  contact: SiteSettings["contact"];
}

/**
 * Transparente sobre o hero no topo da página; ganha fundo navy ao rolar.
 * No desktop mostra os links; no celular e no tablet, só o hambúrguer.
 */
export function SiteHeader({ name, oab, logo, navigation, whatsappHref, contact }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const links = navigation.map((item) => ({ label: item.label, href: item.href }));
  const socials = [
    {
      icon: "whatsapp" as const,
      href: whatsappHref,
      ariaLabel: `WhatsApp ${contact.whatsappDisplay} (abre em nova aba)`,
      external: true,
    },
    {
      icon: "instagram" as const,
      href: contact.instagramUrl,
      ariaLabel: `Instagram ${contact.instagramHandle} (abre em nova aba)`,
      external: true,
    },
    {
      icon: "mail" as const,
      href: `mailto:${contact.email}`,
      ariaLabel: `Enviar e-mail para ${contact.email}`,
      external: false,
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`tone-dark fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 motion-reduce:transition-none ${
        scrolled ? "border-white/8 bg-navy" : "border-transparent bg-navy/70"
      }`}
    >
      {/* A linha do cabeçalho é mais larga que o conteúdo das seções (80rem vs 72rem)
          para o menu completo caber com folga ao lado da marca. */}
      <div className="mx-auto flex min-h-14 w-full max-w-[80rem] items-center justify-between gap-6 pr-[max(1.25rem,env(safe-area-inset-right))] pl-[max(1.25rem,env(safe-area-inset-left))] sm:min-h-16 sm:pr-[max(2rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))]">
        <Link href="/#inicio" className="no-underline" aria-label={`${name} Advocacia, ir para o início`}>
          <BrandMark logo={logo} title={name} subtitle={`Advocacia · ${oab}`} />
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex gap-6 text-base font-semibold xl:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="whitespace-nowrap text-white/90 no-underline hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden">
          <MenuDrawer links={links} socials={socials} />
        </div>
      </div>
    </header>
  );
}
