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
    <span className="flex items-center gap-3.5">
      {/* O nome ao lado já identifica a marca, então o logo é decorativo aqui. */}
      <Image src={logo.url} alt="" width={logo.width} height={logo.height} className="h-11 w-auto" />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold whitespace-nowrap text-white">{title}</span>
        <span className="text-sm font-semibold whitespace-nowrap text-mist">{subtitle}</span>
      </span>
    </span>
  );
}
