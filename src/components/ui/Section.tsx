import type { ReactNode } from "react";

type Tone = "light" | "muted" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink",
  muted: "bg-surface text-ink",
  dark: "tone-dark bg-navy text-white",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** Faixa de página com fundo, respiro vertical e largura máxima padrão. */
export function Section({ id, tone = "light", labelledBy, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-20 py-24 sm:py-28 lg:py-36 ${tones[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

/** Rótulo, título e subtítulo de uma seção. */
export function SectionHeader({ id, eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto items-center text-center" : "items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignClass}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-2">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-muted [.tone-dark_&]:text-mist">{subtitle}</p>}
    </div>
  );
}
