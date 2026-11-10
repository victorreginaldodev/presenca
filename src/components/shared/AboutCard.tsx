"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import type { Media } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

interface AboutCardProps {
  photo: Media;
  name: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

const PEEK_MS = 1500;

/**
 * Foto do Fernando que convida ao toque. Fechada, o nome fica na vertical
 * dentro do bloco dourado e uma faixa no rodapé indica que o conteúdo sobe.
 * Aberta (hover no desktop, toque no celular), o bloco gira para a horizontal
 * e sobe ao topo, revelando a qualificação. Ao entrar na tela pela primeira
 * vez, o card abre sozinho por um instante e volta a fechar.
 */
export function AboutCard({ photo, name, items, ctaLabel, ctaHref }: AboutCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const peekTimer = useRef<number | null>(null);
  const [open, setOpen] = useState(false);

  function cancelPeek() {
    if (peekTimer.current !== null) {
      clearTimeout(peekTimer.current);
      peekTimer.current = null;
    }
  }

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setOpen(true);
        peekTimer.current = window.setTimeout(() => {
          peekTimer.current = null;
          setOpen(false);
        }, PEEK_MS);
      },
      { threshold: 0.4 },
    );
    observer.observe(card);
    return () => {
      observer.disconnect();
      cancelPeek();
    };
  }, []);

  function onPointerEnter(event: PointerEvent) {
    if (event.pointerType === "mouse") {
      cancelPeek();
      setOpen(true);
    }
  }

  function onPointerLeave(event: PointerEvent) {
    if (event.pointerType === "mouse") setOpen(false);
  }

  function onPointerUp(event: PointerEvent) {
    if (event.pointerType !== "mouse") {
      cancelPeek();
      setOpen((value) => !value);
    }
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      cancelPeek();
      setOpen((value) => !value);
    }
  }

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label="Ver a qualificação profissional do Fernando"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      className="relative aspect-[2/3] w-full cursor-pointer overflow-hidden select-none [container-type:size]"
    >
      <Image
        src={photo.url}
        alt={photo.alt}
        fill
        sizes="(min-width: 640px) 480px, 100vw"
        className="object-cover object-top"
      />

      {/* Gradiente do rodapé, só no estado fechado. */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 z-10 h-[30%] bg-gradient-to-t from-navy/95 via-navy/60 to-transparent transition-opacity duration-500 motion-reduce:transition-none ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Véu escuro do estado aberto. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-10 bg-navy/80 transition-opacity duration-500 motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bloco dourado com o nome: no fechado, girado -90° no canto inferior;
          no aberto, sobe na horizontal para o canto superior esquerdo. */}
      <div
        className={`absolute bottom-0 left-14 z-30 flex h-14 w-[13.5rem] origin-bottom-left items-center justify-center bg-gold transition-all duration-500 ease-out motion-reduce:transition-none ${
          open ? "-translate-x-9 translate-y-[calc(4.75rem_-_100cqh)]" : "-rotate-90"
        }`}
      >
        <span className="text-xl leading-tight font-bold whitespace-nowrap text-navy">{name}</span>
      </div>

      {/* Convite no rodapé, à direita do bloco do nome; some quando abre. */}
      <span
        aria-hidden="true"
        className={`absolute right-5 bottom-5 z-20 flex items-center gap-2 text-sm font-bold text-white transition-opacity duration-500 motion-reduce:transition-none ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        Qualificação profissional
        <Icon
          name="arrow-up"
          size={18}
          className="text-gold animate-[hint-bounce_2s_ease-in-out_infinite] motion-reduce:animate-none"
        />
      </span>

      {/* Qualificação, item a item, abaixo do nome. */}
      <ul
        aria-hidden={!open}
        className={`absolute top-[6.5rem] right-6 left-6 z-30 flex flex-col gap-3 ${open ? "" : "pointer-events-none"}`}
      >
        {items.map((item, index) => (
          <li
            key={item}
            style={{ transitionDelay: open ? `${200 + index * 80}ms` : "0ms" }}
            className={`flex items-start gap-2.5 text-[15px] leading-snug text-white transition-all duration-500 motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span aria-hidden="true" className="mt-[0.45rem] size-1.5 flex-none rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA no rodapé do card aberto; o clique não alterna o card. */}
      <span
        onPointerUp={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        className={`absolute right-6 bottom-6 left-6 z-30 transition-all duration-500 motion-reduce:transition-none ${
          open ? "translate-y-0 opacity-100 delay-500" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ButtonLink
          href={ctaHref}
          external
          iconStart="whatsapp"
          className="w-full"
          ariaLabel={`${ctaLabel} (abre em nova aba)`}
        >
          {ctaLabel}
        </ButtonLink>
      </span>

      {/* Fecha o card aberto, só no celular (no desktop, sair com o mouse fecha). */}
      <span
        aria-hidden="true"
        className={`absolute top-5 right-5 z-40 flex size-9 items-center justify-center bg-white/15 text-white transition-opacity duration-500 motion-reduce:transition-none lg:hidden ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon name="close" size={18} />
      </span>
    </div>
  );
}
