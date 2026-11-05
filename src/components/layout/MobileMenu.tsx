"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

type Tone = "dark" | "light";

const tones: Record<Tone, { button: string; panel: string; item: string; link: string }> = {
  dark: {
    button: "border-white/35 text-white",
    panel: "bg-navy sm:border-white/10",
    item: "border-white/10",
    link: "text-white",
  },
  light: {
    button: "border-navy/30 text-navy",
    panel: "bg-white sm:border-line",
    item: "border-line",
    link: "text-navy",
  },
};

interface MobileMenuProps {
  links: { label: string; href: string }[];
  whatsappHref: string;
  /** `dark` no cabeçalho navy do site; `light` no cabeçalho claro do blog. */
  tone?: Tone;
}

export function MobileMenu({ links, whatsappHref, tone = "dark" }: MobileMenuProps) {
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
    // Fecha se a tela crescer para o layout de desktop com o menu aberto:
    // o botão some quando o CSS esconde o menu (xl no site, lg no blog).
    function onResize() {
      if (buttonRef.current?.offsetParent === null) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
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
        className={`-mr-1 flex size-12 touch-manipulation items-center justify-center rounded-xl border-2 ${tones[tone].button}`}
      >
        <Icon name={open ? "close" : "menu"} size={24} strokeWidth={2.4} />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain sm:h-auto sm:max-h-[calc(100dvh-5rem)] sm:border-b sm:shadow-xl ${tones[tone].panel}`}
      >
        <nav aria-label="Menu principal" className="mx-auto max-w-site px-5 pt-2 pb-[max(5.5rem,env(safe-area-inset-bottom))] sm:px-8">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className={`border-b ${tones[tone].item}`}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-14 items-center text-lg font-semibold no-underline sm:min-h-15 sm:text-xl ${tones[tone].link}`}
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
