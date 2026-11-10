import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthorBox } from "@/components/blog/AuthorBox";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { PostFaq } from "@/components/blog/PostFaq";
import { PostSources } from "@/components/blog/PostSources";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { FieldChip, TagChip } from "@/components/blog/TagChip";
import { BlogPostingJsonLd } from "@/components/seo/BlogPostingJsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { formatPostDate, postPath, postUrl } from "@/lib/blog";
import {
  getBlogPage,
  getLawyerProfile,
  getPostBySlug,
  getPosts,
  getRelatedPosts,
  getSiteSettings,
} from "@/lib/content";
import { fieldLabels } from "@/lib/fields";
import { contactWhatsappUrl } from "@/lib/links";

// Só existem páginas para os artigos publicados no build.
export const dynamicParams = false;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const [post, profile] = await Promise.all([getPostBySlug(slug), getLawyerProfile()]);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: profile.name, url: "/#sobre" }],
    alternates: { canonical: postPath(post) },
    openGraph: {
      type: "article",
      url: postPath(post),
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [profile.name],
      section: fieldLabels[post.field],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [settings, profile, blog, related] = await Promise.all([
    getSiteSettings(),
    getLawyerProfile(),
    getBlogPage(),
    getRelatedPosts(post),
  ]);
  const whatsappHref = contactWhatsappUrl(settings, post.whatsappMessage);
  const authorPhoto = profile.photos.about ?? profile.photos.hero;

  return (
    <>
      <BlogPostingJsonLd post={post} settings={settings} profile={profile} />

      <article className="bg-white py-10 sm:py-14 lg:py-20">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <nav aria-label="Você está aqui" className="text-[15px] text-muted">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/blog" className="font-semibold no-underline hover:text-gold-dark">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href={`/blog?area=${post.field}`} className="font-semibold no-underline hover:text-gold-dark">
                    {fieldLabels[post.field]}
                  </Link>
                </li>
                <li aria-hidden="true" className="hidden sm:block">
                  ›
                </li>
                <li aria-current="page" className="hidden min-w-0 truncate sm:block sm:max-w-[24ch]">
                  {post.title}
                </li>
              </ol>
            </nav>

            <header className="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-6">
              <ul className="flex flex-wrap items-center gap-2" aria-label="Área e temas">
                <li>
                  <FieldChip field={post.field} link />
                </li>
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <TagChip>{tag}</TagChip>
                  </li>
                ))}
              </ul>
              <h1 className="heading-2">{post.title}</h1>
              <p className="lead text-muted">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-line py-4 text-[15px] text-muted">
                <div className="flex items-center gap-3">
                  {authorPhoto && (
                    <Image
                      src={authorPhoto.url}
                      alt=""
                      width={authorPhoto.width}
                      height={authorPhoto.height}
                      sizes="40px"
                      className="size-10 flex-none object-cover object-top"
                    />
                  )}
                  <span>
                    Por <span className="font-bold text-navy">{profile.name}</span> · {profile.oab}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="calendar" size={16} className="text-gold-dark" />
                    Publicado em <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  </span>
                  {post.updatedAt && (
                    <span>
                      Atualizado em <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time>
                    </span>
                  )}
                </div>
              </div>
            </header>

            <div className="mt-8 sm:mt-10">
              <PostBody blocks={post.body} settings={settings} />
            </div>

            <PostFaq title={blog.faqTitle} items={post.faq} />
            <PostSources title={blog.sourcesTitle} sources={post.sources} />

            <p className="mt-10 flex items-start gap-3 text-sm text-muted sm:mt-12">
              <Icon name="info" size={18} className="mt-0.5 flex-none text-gold-dark" />
              {blog.disclaimer}
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <ShareButtons title={post.title} url={postUrl(post)} />
            </div>

            <AuthorBox title={blog.authorBoxTitle} profile={profile} />

            <section
              aria-labelledby="cta-titulo"
              className="tone-dark mt-8 flex flex-col gap-5 bg-navy p-7 text-white sm:mt-10 sm:p-10"
            >
              <h2 id="cta-titulo" className="text-2xl leading-tight font-extrabold text-balance sm:text-3xl">
                {blog.cta.title}
              </h2>
              <p className="text-mist-light">{blog.cta.text}</p>
              <ButtonLink
                href={whatsappHref}
                external
                size="lg"
                iconStart="whatsapp"
                className="w-full sm:w-fit"
                ariaLabel={`${blog.cta.label} (abre em nova aba)`}
              >
                {blog.cta.label}
              </ButtonLink>
            </section>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="relacionados-titulo" className="border-t border-line bg-surface py-14 sm:py-20">
          <Container>
            <h2 id="relacionados-titulo" className="text-2xl leading-tight font-extrabold text-navy sm:text-3xl">
              {blog.relatedTitle}
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <PostCard post={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
