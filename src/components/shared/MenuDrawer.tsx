"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import type { IconName } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

type Tone = "dark" | "light";

const buttonTones: Record<Tone, string> = {
  dark: "border-white/35 text-white",
  light: "border-navy/30 text-navy",
};

interface DrawerLink {
  label: string;
  href: string;
}

interface DrawerSocial {
  icon: IconName;
  href: string;
  ariaLabel: string;
  external: boolean;
}

interface MenuDrawerProps {
  links: DrawerLink[];
  socials: DrawerSocial[];
  /** `dark` no cabeçalho navy do site; `light` no cabeçalho claro do blog. */
  tone?: Tone;
}

/**
 * Menu em painel lateral direito: fundo escurecido, painel navy deslizando
 * da direita com os links e os canais de contato no rodapé.
 */
export function MenuDrawer({ links, socials, tone = "dark" }: MenuDrawerProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    // Trava a rolagem da página por baixo do painel aberto.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className={`-mr-1 flex size-12 touch-manipulation items-center justify-center border-2 ${buttonTones[tone]}`}
      >
        <Icon name="menu" size={24} strokeWidth={2.4} />
      </button>

      {/* Fundo escurecido; um toque fora do painel também fecha. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-navy/60 transition-opacity duration-500 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed top-0 right-0 z-50 flex h-dvh w-full flex-col bg-navy text-white shadow-2xl transition-transform duration-500 ease-out motion-reduce:transition-none sm:max-w-[28rem] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-5 py-5 sm:px-8 sm:py-6">
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
            className="flex size-12 touch-manipulation items-center justify-center text-white hover:text-gold"
          >
            <Icon name="close" size={26} />
          </button>
        </div>

        <nav aria-label="Menu principal" className="flex-1 overflow-y-auto overscroll-contain px-8 py-8 sm:px-12 sm:py-12">
          <ul className="flex flex-col gap-7 sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold tracking-[0.06em] text-white/90 uppercase no-underline hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-10 flex items-center gap-7 sm:mt-12">
            {socials.map((social) => (
              <li key={social.icon}>
                <a
                  href={social.href}
                  aria-label={social.ariaLabel}
                  {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex size-11 touch-manipulation items-center text-white/80 transition-colors hover:text-gold motion-reduce:transition-none"
                >
                  <Icon name={social.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
