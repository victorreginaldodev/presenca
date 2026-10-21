import type { ReactNode } from "react";

import type { IconName } from "@/content/types";

import { Icon } from "./Icon";

type Variant = "gold" | "navy" | "outline" | "outline-light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-hover hover:text-navy",
  navy: "bg-navy text-white hover:bg-navy-soft hover:text-white",
  outline: "border-2 border-navy/80 text-navy hover:bg-navy hover:text-white",
  "outline-light": "border-2 border-white/50 text-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "min-h-13 gap-2.5 rounded-xl px-6 py-3 text-[17px]",
  lg: "min-h-15 gap-3 rounded-xl px-8 py-4 text-lg sm:text-[19px]",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconStart?: IconName;
  iconEnd?: IconName;
  /** Abre em nova aba (os rótulos acessíveis informam isso). */
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  size = "md",
  iconStart,
  iconEnd,
  external = false,
  ariaLabel,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex max-w-full items-center justify-center text-center leading-tight font-bold no-underline transition-colors motion-reduce:transition-none ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {iconStart && <Icon name={iconStart} size={22} className="shrink-0" />}
      <span className="text-balance">{children}</span>
      {iconEnd && <Icon name={iconEnd} size={20} className="shrink-0" />}
    </a>
  );
}
