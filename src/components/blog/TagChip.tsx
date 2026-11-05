import Link from "next/link";

import type { LegalField } from "@/content/types";
import { blogAreaPath } from "@/lib/blog";
import { fieldLabels } from "@/lib/fields";

const base = "inline-flex items-center rounded-full px-3 py-1 text-[13px] font-bold leading-none sm:text-sm";

/** Etiqueta da área do direito; com `link`, leva à lista filtrada em /blog. */
export function FieldChip({ field, link = false, onImage = false }: { field: LegalField; link?: boolean; onImage?: boolean }) {
  const className = `${base} ${onImage ? "bg-white/95 text-navy" : "bg-navy text-white"}`;
  return link ? (
    <Link href={blogAreaPath(field)} className={`${className} no-underline hover:bg-navy-soft hover:text-white`}>
      {fieldLabels[field]}
    </Link>
  ) : (
    <span className={className}>{fieldLabels[field]}</span>
  );
}

/** Etiqueta de tema do artigo (só exibição). */
export function TagChip({ children }: { children: string }) {
  return <span className={`${base} bg-gold-soft text-gold-dark`}>{children}</span>;
}
