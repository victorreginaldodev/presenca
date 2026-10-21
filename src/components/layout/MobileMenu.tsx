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
        className="flex size-13 items-center justify-center rounded-xl border-2 border-white/35 text-white"
      >
        <Icon name={open ? "close" : "menu"} size={26} strokeWidth={2.4} />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/10 bg-navy shadow-xl"
      >
        <nav aria-label="Menu principal" className="mx-auto max-w-site px-5 pt-2 pb-8 sm:px-8">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-15 items-center text-xl font-semibold text-white no-underline"
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
