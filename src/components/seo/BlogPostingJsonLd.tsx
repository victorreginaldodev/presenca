import type { BlogPost, LawyerProfile, SiteSettings } from "@/content/types";
import { postUrl } from "@/lib/blog";
import { fieldLabels } from "@/lib/fields";
import { getSiteUrl } from "@/lib/site-url";

interface BlogPostingJsonLdProps {
  post: BlogPost;
  settings: SiteSettings;
  profile: LawyerProfile;
}

/** Dados estruturados do artigo: BlogPosting, trilha de navegação e perguntas frequentes. */
export function BlogPostingJsonLd({ post, settings, profile }: BlogPostingJsonLdProps) {
  const siteUrl = getSiteUrl();
  const url = postUrl(post);
  const absolute = (path: string) => new URL(path, siteUrl).toString();

  const author = {
    "@type": "Person",
    name: profile.name,
    jobTitle: "Advogado",
    description: profile.shortBio,
    url: absolute("/#sobre"),
  };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#artigo`,
      headline: post.title,
      description: post.excerpt,
      keywords: post.tags.join(", "),
      articleSection: fieldLabels[post.field],
      inLanguage: "pt-BR",
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      mainEntityOfPage: url,
      image: profile.photos.hero ? absolute(profile.photos.hero.url) : undefined,
      author,
      publisher: {
        "@type": "LegalService",
        name: settings.siteName,
        url: siteUrl.toString(),
        logo: { "@type": "ImageObject", url: absolute(settings.logo.url) },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: absolute("/blog") },
        { "@type": "ListItem", position: 2, name: fieldLabels[post.field], item: absolute(`/blog?area=${post.field}`) },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON gerado no servidor a partir de dados locais; "<" é escapado.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
