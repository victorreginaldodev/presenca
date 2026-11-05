import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

// Novas rotas públicas devem ser adicionadas aqui.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const posts = await getPosts();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: new URL("/", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

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
