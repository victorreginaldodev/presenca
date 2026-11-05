import Image from "next/image";

import type { Media } from "@/content/types";

type Tone = "dark" | "light";

const tones: Record<Tone, { title: string; subtitle: string }> = {
  dark: { title: "text-white", subtitle: "text-mist" },
  light: { title: "text-navy", subtitle: "text-muted" },
};

interface BrandMarkProps {
  logo: Media;
  title: string;
  subtitle: string;
  /** `dark` sobre o navy (site); `light` sobre fundo claro (blog). */
  tone?: Tone;
}

/** Logo com nome e registro, usado no cabeçalho e no rodapé. */
export function BrandMark({ logo, title, subtitle, tone = "dark" }: BrandMarkProps) {
  return (
    <span className="flex min-w-0 items-center gap-3 sm:gap-3.5">
      {/* O nome ao lado já identifica a marca, então o logo é decorativo aqui. */}
      <Image src={logo.url} alt="" width={logo.width} height={logo.height} className="h-9 w-auto sm:h-11" />
      <span className="flex flex-col leading-tight">
        <span className={`text-base font-bold whitespace-nowrap sm:text-lg ${tones[tone].title}`}>{title}</span>
        <span className={`text-[13px] font-semibold whitespace-nowrap sm:text-sm ${tones[tone].subtitle}`}>
          {subtitle}
        </span>
      </span>
    </span>
  );
}
