import Link from "next/link";

import type { LegalField, SiteSettings } from "@/content/types";
import { BrandMark } from "@/components/ui/BrandMark";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { blogAreaPath, LEGAL_FIELDS } from "@/lib/blog";
import { fieldLabels } from "@/lib/fields";

interface BlogFooterProps {
  settings: SiteSettings;
  name: string;
  disclaimer: string;
  whatsappHref: string;
}

const siteLinks = [
  { label: "Início", href: "/" },
  { label: "Áreas de atuação", href: "/#atuacao" },
  { label: "Quem é Fernando", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[13px] font-bold tracking-[0.14em] text-gold-dark uppercase sm:text-sm">{children}</h2>;
}

const linkClass = "inline-flex min-h-10 items-center text-ink no-underline hover:text-gold-dark sm:min-h-0";

/** Rodapé compacto do blog: marca, temas, links do site, contato e aviso informativo. */
export function BlogFooter({ settings, name, disclaimer, whatsappHref }: BlogFooterProps) {
  const { contact } = settings;

  return (
    <footer className="border-t border-line bg-surface text-ink">
      <Container className="grid gap-10 pt-12 pb-10 sm:grid-cols-2 sm:gap-12 sm:pt-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <BrandMark logo={settings.logo} title={name} subtitle={`Advocacia · ${settings.oab}`} tone="light" />
          <p className="max-w-sm text-[15px] text-muted sm:text-base">{settings.tagline}</p>
        </div>

        <nav aria-label="Temas do blog" className="flex flex-col gap-3 sm:gap-4">
          <FooterHeading>Temas</FooterHeading>
          <ul className="flex flex-col gap-1 text-base sm:gap-2.5">
            <li>
              <Link href="/blog" className={linkClass}>
                Todos os artigos
              </Link>
            </li>
            {LEGAL_FIELDS.map((field: LegalField) => (
              <li key={field}>
                <Link href={blogAreaPath(field)} className={linkClass}>
                  {fieldLabels[field]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site" className="flex flex-col gap-3 sm:gap-4">
          <FooterHeading>Site</FooterHeading>
          <ul className="flex flex-col gap-1 text-base sm:gap-2.5">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 sm:gap-4">
          <FooterHeading>Contato</FooterHeading>
          <ul className="flex flex-col gap-1 text-base sm:gap-2.5">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${contact.whatsappDisplay} (abre em nova aba)`}
                className={`gap-3 ${linkClass}`}
              >
                <Icon name="whatsapp" size={18} className="flex-none text-gold-dark" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${contact.instagramHandle} (abre em nova aba)`}
                className={`gap-3 ${linkClass}`}
              >
                <Icon name="instagram" size={18} className="flex-none text-gold-dark" />
                {contact.instagramHandle}
              </a>
            </li>
            <li className="flex min-h-10 items-center gap-3 text-muted sm:min-h-0">
              <Icon name="clock" size={18} className="flex-none text-gold-dark" />
              {settings.openingHours.label}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 pt-6 pb-[calc(6rem+env(safe-area-inset-bottom))] text-sm text-muted sm:pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <p className="max-w-2xl">{disclaimer}</p>
          <p className="lg:text-right">
            © {new Date().getFullYear()} {settings.siteName} · {settings.oab}
          </p>
        </Container>
      </div>
    </footer>
  );
}
