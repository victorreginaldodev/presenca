import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { formatPostDate, postPath } from "@/lib/blog";

import { FieldChip, TagChip } from "./TagChip";

interface FeaturedPostProps {
  post: BlogPost;
  label: string;
}

/** Artigo em destaque no topo de /blog: card horizontal com mais respiro e título maior. */
export function FeaturedPost({ post, label }: FeaturedPostProps) {
  return (
    <article className="relative grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2">
      {post.cover && (
        <Image
          src={post.cover.url}
          alt={post.cover.alt}
          width={post.cover.width}
          height={post.cover.height}
          sizes="(min-width: 1024px) 560px, calc(100vw - 2.5rem)"
          priority
          className="aspect-[16/9] h-full w-full object-cover lg:aspect-auto"
        />
      )}
      <div className="flex flex-col gap-4 p-6 sm:gap-5 sm:p-10 lg:justify-center lg:p-12">
        <p className="eyebrow">{label}</p>
        <ul className="flex flex-wrap items-center gap-2" aria-label="Área e temas">
          <li>
            <FieldChip field={post.field} />
          </li>
          {post.tags.slice(0, 3).map((tag) => (
            <li key={tag}>
              <TagChip>{tag}</TagChip>
            </li>
          ))}
        </ul>
        <h2 className="text-[1.75rem] leading-[1.15] font-extrabold tracking-[-0.01em] text-navy text-balance sm:text-4xl">
          <Link href={postPath(post)} className="no-underline after:absolute after:inset-0 hover:text-gold-dark">
            {post.title}
          </Link>
        </h2>
        <p className="text-muted sm:text-lg">{post.excerpt}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-[15px]">
          <time dateTime={post.publishedAt} className="text-muted">
            {formatPostDate(post.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-2 font-bold text-navy" aria-hidden="true">
            Ler artigo
            <Icon name="arrow-right" size={20} />
          </span>
        </div>
      </div>
    </article>
  );
}
