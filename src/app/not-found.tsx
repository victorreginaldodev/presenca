import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
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
  );
}
