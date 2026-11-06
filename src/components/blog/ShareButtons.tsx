"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { shareWhatsappUrl } from "@/lib/blog";

interface ShareButtonsProps {
  title: string;
  /** URL completa do artigo, montada no servidor. */
  url: string;
}

const buttonClass =
  "inline-flex min-h-11 touch-manipulation items-center gap-2 border border-line bg-white px-4 text-[15px] font-bold text-navy no-underline transition-colors hover:border-navy/40 hover:text-navy motion-reduce:transition-none";

/** Compartilhar o artigo: WhatsApp (o canal do público) e copiar o link. */
export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Sem permissão para a área de transferência: seleciona a URL para o usuário copiar.
      window.prompt("Copie o link do artigo:", url);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold tracking-wide text-muted uppercase">Compartilhar</span>
      <a
        href={shareWhatsappUrl(title, url)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar o artigo no WhatsApp (abre em nova aba)"
        className={buttonClass}
      >
        <Icon name="whatsapp" size={18} className="text-whatsapp" />
        WhatsApp
      </a>
      <button type="button" onClick={copyLink} className={buttonClass}>
        <Icon name={copied ? "check" : "link"} size={18} className={copied ? "text-whatsapp" : "text-gold-dark"} />
        {copied ? "Link copiado" : "Copiar link"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link do artigo copiado" : ""}
      </span>
    </div>
  );
}
