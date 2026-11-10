"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Media, NavItem, SiteSettings } from "@/content/types";
import { BrandMark } from "@/components/ui/BrandMark";
import { Icon } from "@/components/ui/Icon";

import { MenuDrawer } from "./MenuDrawer";

interface SiteHeaderProps {
  name: string;
  oab: string;
  logo: Media;
  navigation: NavItem[];
  whatsappHref: string;
  contact: SiteSettings["contact"];
  /** Destino do logo. O padrão é o início da home. */
  homeHref?: string;
  /** Rótulo do botão de WhatsApp sempre visível (nas LPs). Sem ele, o botão não aparece. */
  whatsappCtaLabel?: string;
  /** Nas LPs, os links ficam dentro do menu hambúrguer até no desktop. */
  drawerOnly?: boolean;
}

/**
 * Transparente sobre o hero no topo da página; ganha fundo navy ao rolar.
 * No desktop mostra os links; no celular e no tablet, só o hambúrguer — salvo
 * quando `drawerOnly` força o hambúrguer em todas as larguras (LPs).
 */
export function SiteHeader({
  name,
  oab,
  logo,
  navigation,
  whatsappHref,
  contact,
  homeHref = "/#inicio",
  whatsappCtaLabel,
  drawerOnly = false,
}: SiteHeaderProps) {
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
        <Link href={homeHref} className="min-w-0 no-underline" aria-label={`${name} Advocacia, ir para o início`}>
          <BrandMark logo={logo} title={name} subtitle={`Advocacia · ${oab}`} />
        </Link>

        {!drawerOnly && (
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
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          {whatsappCtaLabel && (
            <>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-11 touch-manipulation items-center gap-2 bg-whatsapp px-4 text-[15px] font-bold text-white no-underline hover:bg-[#176b3a] hover:text-white sm:inline-flex"
                aria-label={`${whatsappCtaLabel} (abre em nova aba)`}
              >
                <Icon name="whatsapp" size={20} />
                {whatsappCtaLabel}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${whatsappCtaLabel} (abre em nova aba)`}
                className="flex size-12 touch-manipulation items-center justify-center bg-whatsapp text-white hover:bg-[#176b3a] hover:text-white sm:hidden"
              >
                <Icon name="whatsapp" size={24} />
              </a>
            </>
          )}
          <div className={drawerOnly ? "" : "lg:hidden"}>
            <MenuDrawer links={links} socials={socials} />
          </div>
        </div>
      </div>
    </header>
  );
}
