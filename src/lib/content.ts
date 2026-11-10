/**
 * Camada de acesso ao conteúdo.
 *
 * Hoje lê os arquivos locais em `src/content/data`. Na etapa 2, cada função
 * passa a consultar o Payload (Local API), por exemplo:
 *
 *   const payload = await getPayload({ config });
 *   return payload.findGlobal({ slug: "site-settings" });
 *
 * As funções já são assíncronas para que os componentes não precisem mudar
 * quando a fonte trocar. Só este arquivo deve conhecer a origem dos dados.
 */
import { cache } from "react";

import { blogPage, posts } from "@/content/data/blog";
import { homePage, navigation } from "@/content/data/home";
import { practiceAreas } from "@/content/data/practice-areas";
import { lawyerProfile } from "@/content/data/profile";
import { reviewSummary, reviews } from "@/content/data/reviews";
import { siteSettings } from "@/content/data/site-settings";
import { landingPages } from "@/content/lp";
import type {
  BlogPage,
  BlogPost,
  HomePage,
  LandingPage,
  LegalField,
  LawyerProfile,
  NavItem,
  PracticeArea,
  Review,
  ReviewSummary,
  SiteSettings,
} from "@/content/types";

export const getSiteSettings = cache(async (): Promise<SiteSettings> => siteSettings);

export const getLawyerProfile = cache(async (): Promise<LawyerProfile> => lawyerProfile);

export const getHomePage = cache(async (): Promise<HomePage> => homePage);

export const getPracticeAreas = cache(async (): Promise<PracticeArea[]> =>
  [...practiceAreas].sort((a, b) => a.order - b.order),
);

export const getReviews = cache(
  async (): Promise<{ items: Review[]; summary: ReviewSummary }> => ({
    items: reviews,
    summary: reviewSummary,
  }),
);

export const getBlogPage = cache(async (): Promise<BlogPage> => blogPage);

/** Artigos publicados, do mais recente ao mais antigo. Rascunhos nunca saem daqui. */
export const getPosts = cache(async (): Promise<BlogPost[]> =>
  posts
    .filter((post) => post.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
);

export const getPostsByField = cache(async (field: LegalField): Promise<BlogPost[]> =>
  (await getPosts()).filter((post) => post.field === field),
);

export const getLatestPosts = cache(async (limit = 3): Promise<BlogPost[]> =>
  (await getPosts()).slice(0, limit),
);

export const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> =>
    (await getPosts()).find((post) => post.slug === slug) ?? null,
);

/** Artigo em destaque em /blog: o marcado como `featured` ou, sem marcação, o mais recente. */
export const getFeaturedPost = cache(async (): Promise<BlogPost | null> => {
  const published = await getPosts();
  return published.find((post) => post.featured) ?? published[0] ?? null;
});

/** Artigos da mesma área, mais recentes primeiro, sem o atual. */
export const getRelatedPosts = cache(async (post: BlogPost, limit = 3): Promise<BlogPost[]> =>
  (await getPostsByField(post.field)).filter((item) => item.id !== post.id).slice(0, limit),
);

/** Menu principal, sem itens que apontem para páginas ou seções vazias. */
export const getNavigation = cache(async (): Promise<NavItem[]> => {
  const [{ items }, publishedPosts] = await Promise.all([getReviews(), getPosts()]);
  return navigation.filter(
    (item) =>
      (item.href !== "/#avaliacoes" || items.length > 0) &&
      (item.href !== "/blog" || publishedPosts.length > 0),
  );
});

/** Landing pages de campanha, usadas no sitemap. */
export const getLandingPages = cache(async (): Promise<LandingPage[]> => Object.values(landingPages));

export const getLandingPage = cache(
  async (slug: string): Promise<LandingPage | null> => landingPages[slug] ?? null,
);
