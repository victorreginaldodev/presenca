import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

// Novas rotas públicas (ex.: /blog na etapa 3) devem ser adicionadas aqui.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", getSiteUrl()).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
