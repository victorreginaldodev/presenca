import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteChrome } from "@/components/layout/SiteChrome";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

import "./(site)/globals.css";

// Só o not-found.tsx na raiz de app/ atende URLs que não existem. Como o layout
// raiz fica em (site)/, o Next.js envolve esta página em um documento próprio,
// sem o CSS e a fonte do layout — por isso ambos são importados aqui também.
const nunitoSans = localFont({
  src: "./fonts/nunito-sans-latin.woff2",
  weight: "400 900",
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <div className={`${nunitoSans.variable} font-sans`}>
      <SiteChrome>
        <Section tone="dark" labelledBy="nao-encontrada-titulo">
          <div className="mx-auto flex max-w-180 flex-col items-center gap-6 text-center">
            <h1 id="nao-encontrada-titulo" className="heading-2">
              Página não encontrada
            </h1>
            <p className="text-xl text-mist">O endereço que você abriu não existe ou mudou de lugar.</p>
            <ButtonLink href="/" size="lg">
              Voltar para o início
            </ButtonLink>
          </div>
        </Section>
      </SiteChrome>
    </div>
  );
}
