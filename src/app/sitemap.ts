import type { MetadataRoute } from "next";

import { getLandingPages, getPosts } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

// Novas rotas públicas devem ser adicionadas aqui.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const [posts, landingPages] = await Promise.all([getPosts(), getLandingPages()]);

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: new URL("/", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  for (const lp of landingPages) {
    sitemap.push({
      url: new URL(`/lp/${lp.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // O blog só entra no sitemap quando há artigos publicados.
  if (posts.length > 0) {
    sitemap.push({
      url: new URL("/blog", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
    for (const post of posts) {
      sitemap.push({
        url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
        lastModified: post.updatedAt ?? post.publishedAt,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return sitemap;
}
