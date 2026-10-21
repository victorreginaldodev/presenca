import type { HomePage, Review, ReviewSummary } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";

import { ReviewsCarousel, type ReviewSlide } from "./ReviewsCarousel";

interface ReviewsProps {
  content: HomePage["reviews"];
  reviews: Review[];
  summary: ReviewSummary;
}

const dateFormat = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" });

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** Só é renderizada quando há avaliações cadastradas. */
export function Reviews({ content, reviews, summary }: ReviewsProps) {
  if (reviews.length === 0) return null;

  const slides: ReviewSlide[] = reviews.map((review) => ({
    id: review.id,
    authorName: review.authorName,
    initials: initials(review.authorName),
    rating: review.rating,
    text: review.text,
    dateTime: review.date,
    dateLabel: dateFormat.format(new Date(review.date)),
  }));
  const hasSummary = summary.averageRating !== null && summary.totalReviews !== null;

  return (
    <Section id="avaliacoes" tone="muted" labelledBy="avaliacoes-titulo">
      <SectionHeader id="avaliacoes-titulo" eyebrow={content.eyebrow} title={content.title} />

      {hasSummary && (
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-base text-muted sm:mt-6 sm:text-lg">
          <span className="flex items-center gap-1 text-star" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <Icon key={index} name="star" size={16} />
            ))}
          </span>
          <span>
            <strong className="font-bold text-navy">
              {summary.averageRating!.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
            </strong>{" "}
            de nota média em {summary.totalReviews} avaliações no Google
          </span>
        </p>
      )}

      <ReviewsCarousel slides={slides} />

      {summary.profileUrl && (
        <p className="mt-8 text-center sm:mt-10">
          <a
            href={summary.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todas as avaliações no Google (abre em nova aba)"
            className="inline-flex min-h-11 items-center gap-2 text-base font-bold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold-dark"
          >
            Ver todas as avaliações no Google
            <Icon name="arrow-right" size={18} />
          </a>
        </p>
      )}
    </Section>
  );
}
