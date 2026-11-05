import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { formatPostDate, postPath } from "@/lib/blog";

import { FieldChip, TagChip } from "./TagChip";

interface PostCardProps {
  post: BlogPost;
}

/** Card de artigo do blog, usado na home, na lista /blog e em "Leia também". */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white sm:rounded-3xl">
      {post.cover ? (
        <div className="relative">
          <Image
            src={post.cover.url}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, calc(100vw - 2.5rem)"
            className="aspect-[16/9] h-auto w-full object-cover"
          />
          <span className="absolute top-4 left-4">
            <FieldChip field={post.field} onImage />
          </span>
        </div>
      ) : (
        <span className="mx-5 mt-5 w-fit sm:mx-8 sm:mt-8">
          <FieldChip field={post.field} />
        </span>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-8">
        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2" aria-label="Temas">
            {post.tags.slice(0, 2).map((tag) => (
              <li key={tag}>
                <TagChip>{tag}</TagChip>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-xl leading-tight font-extrabold text-navy sm:text-[1.375rem]">
          <Link href={postPath(post)} className="no-underline after:absolute after:inset-0 hover:text-gold-dark">
            {post.title}
          </Link>
        </h3>
        <p className="text-[15px] leading-relaxed text-muted sm:text-base">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2 text-[15px] sm:pt-3">
          <time dateTime={post.publishedAt} className="text-muted">
            {formatPostDate(post.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-1.5 font-bold text-navy" aria-hidden="true">
            Ler artigo
            <Icon name="arrow-right" size={18} />
          </span>
        </div>
      </div>
    </article>
  );
}
