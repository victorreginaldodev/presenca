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
}

/**
 * Transparente sobre o hero no topo da página — logo e hambúrguer flutuam
 * direto sobre a foto; ganha fundo navy ao rolar. A navegação é sempre pelo
 * menu hambúrguer, em qualquer largura.
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
        scrolled ? "border-white/8 bg-navy" : "border-transparent bg-transparent"
      }`}
    >
      {/* Mesma largura e respiro lateral das seções, para a marca alinhar com o conteúdo. */}
      <div className="mx-auto flex min-h-14 w-full max-w-site items-center justify-between gap-6 pr-[max(1.25rem,env(safe-area-inset-right))] pl-[max(1.25rem,env(safe-area-inset-left))] sm:min-h-16 sm:pr-[max(2rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))]">
        <Link href={homeHref} className="min-w-0 no-underline" aria-label={`${name} Advocacia, ir para o início`}>
          <BrandMark logo={logo} title={name} subtitle={`Advocacia · ${oab}`} />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {whatsappCtaLabel && (
            <>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-11 touch-manipulation items-center gap-2 bg-gold px-4 text-[15px] font-bold text-navy no-underline hover:bg-gold-hover hover:text-navy sm:inline-flex"
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
                className="flex size-12 touch-manipulation items-center justify-center bg-gold text-navy hover:bg-gold-hover hover:text-navy sm:hidden"
              >
                <Icon name="whatsapp" size={24} />
              </a>
            </>
          )}
          <MenuDrawer links={links} socials={socials} />
        </div>
      </div>
    </header>
  );
}
