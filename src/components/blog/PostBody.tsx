import Link from "next/link";

import type { PostBlock, SiteSettings } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { headingId } from "@/lib/blog";
import { contactWhatsappUrl } from "@/lib/links";

interface PostBodyProps {
  blocks: PostBlock[];
  settings: SiteSettings;
}

/** Corpo do artigo: converte os blocos do conteúdo em HTML semântico. */
export function PostBody({ blocks, settings }: PostBodyProps) {
  return (
    <div className="flex flex-col gap-6 text-[17px] leading-[1.75] sm:gap-7 sm:text-lg">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "answer":
            return (
              <p
                key={index}
                className="border-l-4 border-gold bg-gold-soft px-5 py-4 text-lg font-semibold text-navy sm:px-6 sm:py-5 sm:text-xl"
              >
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2
                key={index}
                id={headingId(block.text)}
                className="mt-4 scroll-mt-24 text-2xl leading-tight font-extrabold text-navy sm:mt-6 sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={index} className="flex flex-col gap-2.5 sm:gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check" size={20} strokeWidth={2.5} className="mt-1.5 flex-none text-gold-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-navy/20 pl-5 text-lg font-semibold text-navy italic sm:pl-6 sm:text-xl"
              >
                {block.text}
              </blockquote>
            );
          case "cta":
            return (
              <aside
                key={index}
                aria-label={block.title}
                className="my-2 flex flex-col gap-4 border border-line bg-surface p-6 sm:my-4 sm:p-8"
              >
                <p className="text-xl leading-tight font-bold text-navy">{block.title}</p>
                <p className="text-base text-muted sm:text-[17px]">{block.text}</p>
                <ButtonLink
                  href={contactWhatsappUrl(settings, block.whatsappMessage)}
                  external
                  iconStart="whatsapp"
                  className="w-full sm:w-fit"
                  ariaLabel={`${block.label} (abre em nova aba)`}
                >
                  {block.label}
                </ButtonLink>
              </aside>
            );
          case "related":
            return (
              <p key={index} className="border border-line bg-gold-soft/60 px-5 py-4 sm:px-6 sm:py-5">
                {block.text}{" "}
                <Link
                  href={block.href}
                  className="inline-flex items-center gap-1.5 font-bold whitespace-nowrap text-gold-dark no-underline hover:text-navy"
                >
                  {block.label}
                  <Icon name="arrow-right" size={18} />
                </Link>
              </p>
            );
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
