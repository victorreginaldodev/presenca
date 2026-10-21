"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  whatsappHref: string;
}

export function MobileMenu({ links, whatsappHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector("a")?.focus();
    // Trava a rolagem da página por baixo do menu aberto.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    // Fecha se a tela crescer para o layout de desktop com o menu aberto.
    const desktop = window.matchMedia("(min-width: 80rem)");
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-1 flex size-12 touch-manipulation items-center justify-center rounded-xl border-2 border-white/35 text-white"
      >
        <Icon name={open ? "close" : "menu"} size={24} strokeWidth={2.4} />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-navy sm:h-auto sm:max-h-[calc(100dvh-5rem)] sm:border-b sm:border-white/10 sm:shadow-xl"
      >
        <nav aria-label="Menu principal" className="mx-auto max-w-site px-5 pt-2 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center text-lg font-semibold text-white no-underline sm:min-h-15 sm:text-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={whatsappHref}
            external
            iconStart="whatsapp"
            size="lg"
            className="mt-6 w-full"
            ariaLabel="Falar no WhatsApp (abre em nova aba)"
          >
            Falar no WhatsApp
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
