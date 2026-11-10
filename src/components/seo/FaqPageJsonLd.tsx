import type { FaqItem } from "@/content/types";

interface FaqPageJsonLdProps {
  items: FaqItem[];
}

/** Dados estruturados FAQPage (schema.org) para uma lista de perguntas e respostas. */
export function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  if (items.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
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
