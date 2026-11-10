"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

import type { PracticeArea } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

/**
 * Cards das áreas lado a lado (1, 2 ou 3 por vez, conforme a tela), com
 * rolagem nativa e encaixe. Setas, pontos, teclado e o dedo movem a trilha.
 */
export function PracticeAreasCarousel({ areas }: { areas: PracticeArea[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);
  const [pages, setPages] = useState(areas.length);

  /** Largura de um card mais o espaço entre eles. */
  const step = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return { size: 0, gap: 0 };
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return { size: card.offsetWidth + gap, gap };
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const { size, gap } = step();
    if (!track || !size) return;
    const visible = Math.max(1, Math.round((track.clientWidth + gap) / size));
    const total = Math.max(1, areas.length - visible + 1);
    setPages(total);
    setCurrent(Math.min(total - 1, Math.round(track.scrollLeft / size)));
  }, [areas.length, step]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  function go(index: number) {
    const target = (index + pages) % pages;
    trackRef.current?.scrollTo({ left: target * step().size });
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") go(current + 1);
    if (event.key === "ArrowLeft") go(current - 1);
  }

  const arrowClass =
    "flex size-10 flex-none touch-manipulation items-center justify-center text-navy transition-colors hover:bg-surface motion-reduce:transition-none sm:size-11";

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Áreas de atuação"
      onKeyDown={onKeyDown}
      className="mt-10 sm:mt-14 lg:mt-16"
    >
      <div className="flex items-center gap-1 sm:gap-3">
        {pages > 1 && (
          <button type="button" aria-label="Área anterior" onClick={() => go(current - 1)} className={arrowClass}>
            <Icon name="arrow-left" size={22} strokeWidth={2.5} />
          </button>
        )}

        <ul
          ref={trackRef}
          onScroll={measure}
          className="flex min-w-0 flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {areas.map((area, index) => (
            <li
              key={area.id}
              role="group"
              aria-roledescription="área"
              aria-label={`${index + 1} de ${areas.length}`}
              className="flex-none basis-full snap-start md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <article className="relative isolate flex h-full min-h-72 flex-col gap-4 overflow-hidden bg-surface p-6 sm:min-h-80 sm:p-7">
                {area.image && (
                  <Image
                    src={area.image.url}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="-z-20 scale-110 object-cover opacity-30 blur-sm"
                  />
                )}
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/95 via-surface/85 to-surface/70" />
                <Icon name={area.icon} size={40} strokeWidth={1.5} className="text-gold-dark" />
                <h3 className="text-xl leading-tight font-bold text-navy">{area.title}</h3>
                {area.summary && <p className="text-[15px] leading-relaxed text-muted sm:text-base">{area.summary}</p>}
                {area.cardItems && (
                  <ul className="flex flex-col gap-1.5 text-[15px] leading-snug font-medium text-ink sm:text-base">
                    {area.cardItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 flex-none rounded-full bg-gold-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <button type="button" aria-label="Próxima área" onClick={() => go(current + 1)} className={arrowClass}>
            <Icon name="arrow-right" size={22} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {pages > 1 && (
        <div className="mt-6 flex items-center justify-center sm:mt-8">
          {Array.from({ length: pages }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ver área ${index + 1} de ${pages}`}
              aria-current={index === current}
              onClick={() => go(index)}
              className="group flex h-11 w-6 touch-manipulation items-center justify-center"
            >
              <span
                className={`block size-2 rounded-full transition-colors motion-reduce:transition-none ${
                  index === current ? "bg-gold" : "bg-navy/15 group-hover:bg-navy/35"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
