"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { Icon } from "@/components/ui/Icon";

export interface ReviewSlide {
  id: string;
  authorName: string;
  initials: string;
  rating: number;
  text: string;
  dateTime: string;
  dateLabel: string;
}

const SWIPE_THRESHOLD = 48;

/**
 * Um depoimento por vez, trocado com um esmaecimento suave.
 * Sem rolagem e sem troca automática: o visitante avança pelas setas, pelos
 * pontos, pelas setas do teclado ou deslizando o dedo no celular.
 */
export function ReviewsCarousel({ slides }: { slides: ReviewSlide[] }) {
  const [current, setCurrent] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const total = slides.length;

  function go(index: number) {
    setCurrent((index + total) % total);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") go(current + 1);
    if (event.key === "ArrowLeft") go(current - 1);
  }

  function onPointerDown(event: PointerEvent) {
    if (event.pointerType !== "mouse") pointerStart.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent) {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) go(current + (delta < 0 ? 1 : -1));
  }

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Avaliações de clientes"
      onKeyDown={onKeyDown}
      className="mx-auto mt-14 max-w-3xl lg:mt-16"
    >
      <div
        aria-live="polite"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
        className="grid touch-pan-y"
      >
        {slides.map((slide, index) => {
          const active = index === current;
          return (
            <figure
              key={slide.id}
              role="group"
              aria-roledescription="avaliação"
              aria-label={`${index + 1} de ${total}`}
              aria-hidden={!active}
              inert={!active}
              className={`col-start-1 row-start-1 flex flex-col items-center text-center transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Icon name="quote" size={40} strokeWidth={1.5} className="text-gold" />
              <span role="img" aria-label={`Nota ${slide.rating} de 5`} className="mt-6 flex gap-1 text-star">
                {Array.from({ length: 5 }, (_, star) => (
                  <Icon key={star} name="star" size={18} className={star < slide.rating ? "" : "opacity-25"} />
                ))}
              </span>
              <blockquote className="mt-6 text-xl leading-relaxed text-pretty text-ink sm:text-2xl sm:leading-relaxed">
                {slide.text}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex size-11 flex-none items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                >
                  {slide.initials}
                </span>
                <span className="flex flex-col text-left leading-snug">
                  <span className="font-bold text-navy">{slide.authorName}</span>
                  <span className="flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="google" size={13} />
                    Google · <time dateTime={slide.dateTime}>{slide.dateLabel}</time>
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {total > 1 && (
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Avaliação anterior"
            onClick={() => go(current - 1)}
            className="flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-white motion-reduce:transition-none"
          >
            <Icon name="arrow-left" size={20} />
          </button>
          <div className="flex items-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ver avaliação ${index + 1} de ${total}`}
                aria-current={index === current}
                onClick={() => go(index)}
                className="group flex size-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    index === current ? "w-6 bg-navy" : "w-1.5 bg-navy/25 group-hover:bg-navy/50"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Próxima avaliação"
            onClick={() => go(current + 1)}
            className="flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-white motion-reduce:transition-none"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
