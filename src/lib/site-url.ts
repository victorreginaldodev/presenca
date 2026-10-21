/**
 * URL pública do site, usada em canonical, sitemap, robots e Open Graph.
 *
 * Ordem: NEXT_PUBLIC_SITE_URL (domínio definitivo) → URL de produção da Vercel
 * → localhost. Defina NEXT_PUBLIC_SITE_URL assim que o domínio for confirmado.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);

  return new URL("http://localhost:3000");
}
