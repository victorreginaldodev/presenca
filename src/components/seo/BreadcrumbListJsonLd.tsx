import { getSiteUrl } from "@/lib/site-url";

interface BreadcrumbItem {
  name: string;
  /** Caminho relativo ("/lp/rescisao-indireta"); um URL absoluto também é aceito. */
  path: string;
}

interface BreadcrumbListJsonLdProps {
  items: BreadcrumbItem[];
}

/** Dados estruturados BreadcrumbList (schema.org) da trilha de navegação. */
export function BreadcrumbListJsonLd({ items }: BreadcrumbListJsonLdProps) {
  const siteUrl = getSiteUrl();
  const absolute = (path: string) => new URL(path, siteUrl).toString();

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON gerado no servidor a partir de dados locais; "<" é escapado.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
