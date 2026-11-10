import type { Metadata } from "next";

import { SiteChrome } from "@/components/shared/SiteChrome";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

// O not-found.tsx na raiz de app/ atende tanto URLs que não existem quanto os
// notFound() lançados nas rotas. Ele renderiza dentro do layout raiz, que já
// carrega a fonte e o CSS global.
export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <SiteChrome>
      <Section tone="dark" labelledBy="nao-encontrada-titulo">
        <div className="mx-auto flex max-w-180 flex-col items-center gap-6 text-center">
          <h1 id="nao-encontrada-titulo" className="heading-2">
            Página não encontrada
          </h1>
          <p className="text-xl text-mist">O endereço que você abriu não existe ou mudou de lugar.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonLink href="/" size="lg">
              Voltar para o início
            </ButtonLink>
            <ButtonLink href="/blog" variant="outline-light" size="lg">
              Ler o blog
            </ButtonLink>
            <ButtonLink href="/#contato" variant="outline-light" size="lg">
              Falar com o escritório
            </ButtonLink>
          </div>
        </div>
      </Section>
    </SiteChrome>
  );
}
