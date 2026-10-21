import Image from "next/image";

import type { Media } from "@/content/types";

interface BrandMarkProps {
  logo: Media;
  title: string;
  subtitle: string;
}

/** Logo com nome e registro, usado no cabeçalho e no rodapé. */
export function BrandMark({ logo, title, subtitle }: BrandMarkProps) {
  return (
    <span className="flex min-w-0 items-center gap-3 sm:gap-3.5">
      {/* O nome ao lado já identifica a marca, então o logo é decorativo aqui. */}
      <Image src={logo.url} alt="" width={logo.width} height={logo.height} className="h-9 w-auto sm:h-11" />
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold whitespace-nowrap text-white sm:text-lg">{title}</span>
        <span className="text-[13px] font-semibold whitespace-nowrap text-mist sm:text-sm">{subtitle}</span>
      </span>
    </span>
  );
}
