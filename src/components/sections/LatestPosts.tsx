import Link from "next/link";

import type { BlogPost, HomePage } from "@/content/types";
import { PostCard } from "@/components/blog/PostCard";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";

interface LatestPostsProps {
  content: HomePage["blog"];
  posts: BlogPost[];
}

/** Últimos artigos do blog. Só é renderizada quando há artigos publicados. */
export function LatestPosts({ content, posts }: LatestPostsProps) {
  if (posts.length === 0) return null;

  return (
    <Section id="blog" tone="muted" labelledBy="blog-titulo">
      <SectionHeader id="blog-titulo" eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

      <ul className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center sm:mt-14">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center gap-2 text-base font-bold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
        >
          {content.linkLabel}
          <Icon name="arrow-right" size={18} />
        </Link>
      </p>
    </Section>
  );
}
