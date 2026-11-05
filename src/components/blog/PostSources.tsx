import type { PostSource } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

interface PostSourcesProps {
  title: string;
  sources: PostSource[];
}

/** Fontes oficiais citadas no artigo. */
export function PostSources({ title, sources }: PostSourcesProps) {
  if (sources.length === 0) return null;

  return (
    <section aria-labelledby="fontes-titulo" className="mt-12 sm:mt-14">
      <h2 id="fontes-titulo" className="text-xl leading-tight font-bold text-navy sm:text-2xl">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${source.label} (abre em nova aba)`}
              className="inline-flex min-h-10 items-start gap-2.5 text-base font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark sm:text-[17px]"
            >
              <Icon name="external" size={18} className="mt-1 flex-none text-gold-dark" />
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
