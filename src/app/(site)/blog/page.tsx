import type { Metadata } from "next";
import Link from "next/link";

import { AreaFilter } from "@/components/blog/AreaFilter";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { Section } from "@/components/ui/Section";
import { isLegalField } from "@/lib/blog";
import { getBlogPage, getFeaturedPost, getPosts, getPostsByField } from "@/lib/content";
import { fieldLabels } from "@/lib/fields";

interface BlogIndexPageProps {
  searchParams: Promise<{ area?: string | string[] }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const blog = await getBlogPage();

  return {
    title: blog.eyebrow,
    description: blog.subtitle,
    // As variações com ?area= apontam para /blog, evitando conteúdo duplicado.
    alternates: { canonical: "/blog" },
    openGraph: { type: "website", url: "/blog", title: blog.title, description: blog.subtitle },
  };
}

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const { area } = await searchParams;
  const field = isLegalField(area) ? area : null;

  const [blog, posts, featured] = await Promise.all([
    getBlogPage(),
    field ? getPostsByField(field) : getPosts(),
    field ? Promise.resolve(null) : getFeaturedPost(),
  ]);
  const rest = featured ? posts.filter((post) => post.id !== featured.id) : posts;
  const hasAnyPost = field ? (await getPosts()).length > 0 : posts.length > 0;

  return (
    <Section tone="muted" labelledBy="blog-titulo" className="min-h-[60vh]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-5">
        <p className="eyebrow">{blog.eyebrow}</p>
        <h1 id="blog-titulo" className="heading-2">
          {blog.title}
        </h1>
        <p className="lead text-muted">{blog.subtitle}</p>
      </div>

      {hasAnyPost && <AreaFilter active={field} allLabel={blog.allLabel} />}

      {!hasAnyPost && (
        <p className="mx-auto mt-10 max-w-2xl text-center text-muted sm:mt-14">{blog.emptyMessage}</p>
      )}

      {hasAnyPost && field && (
        <p className="mt-8 text-center text-base text-muted" aria-live="polite">
          {posts.length === 0
            ? blog.noResultsMessage
            : `${posts.length} ${posts.length === 1 ? "artigo" : "artigos"} sobre ${fieldLabels[field]}`}
          {posts.length === 0 && (
            <>
              {" "}
              <Link href="/blog" className="font-bold">
                Ver todos os artigos
              </Link>
            </>
          )}
        </p>
      )}

      {featured && (
        <div className="mt-10 sm:mt-14">
          <FeaturedPost post={featured} label={blog.featuredLabel} />
        </div>
      )}

      {rest.length > 0 && (
        <ul className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
