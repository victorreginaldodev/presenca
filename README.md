# Fernando Araujo Advocacia — site institucional

Primeira entrega do site público. A página inicial tem, nesta ordem: início, atuação, quem é Fernando Araujo, avaliações (aparece quando houver avaliações reais), onde atendemos e rodapé. O contato é feito pelo WhatsApp.

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Ícones: [Lucide](https://lucide.dev) para a interface e [Simple Icons](https://simpleicons.org) para as marcas (WhatsApp, Instagram, Google)
- Página gerada estaticamente; o único componente de cliente é o menu do celular (e o carrossel de avaliações, quando houver avaliações).
- Nenhum script de terceiros, analytics ou cookie. A fonte Nunito Sans é servida pelo próprio site.

> **Antes de publicar**, leia [docs/PENDENCIAS.md](docs/PENDENCIAS.md). Lá estão os textos que o Fernando precisa aprovar e os dados que faltam.

## Como rodar

Requer Node.js 20.9 ou superior.

```bash
npm install
```

```bash
npm run dev
```

O site abre em http://localhost:3000.

Verificações (tipos, lint e build de produção):

```bash
npm run check
```

## Estrutura

```
src/
  app/
    (site)/            Site público (layout raiz, página inicial, ícones, imagem de compartilhamento, 404)
    fonts/             Nunito Sans (OFL 1.1), subconjunto latino
    robots.ts          robots.txt
    sitemap.ts         sitemap.xml
  components/
    layout/            Cabeçalho, menu do celular, rodapé, botão flutuante do WhatsApp
    sections/          Seções da página inicial (recebem conteúdo por props)
      map/             Mapa do Brasil em SVG (gerado da malha de UFs do IBGE)
    seo/               Dados estruturados (schema.org)
    ui/                Botões, ícones, contêineres
  content/
    types.ts           Modelos de conteúdo (formato compatível com o Payload)
    data/              Conteúdo local: configurações, perfil, serviços, avaliações, textos da home
  lib/
    content.ts         Camada de acesso ao conteúdo (único ponto que sabe de onde vêm os dados)
    links.ts           Links de WhatsApp, Google Maps e Waze
    site-url.ts        URL pública (canonical, sitemap, Open Graph)
public/images/
  fernando/            Fotos do Fernando, otimizadas para a web
  atuacao/             Imagens das áreas de atuação
  marca/               Logo com fundo transparente
assets/                Arquivos recebidos do cliente (fonte das imagens; não é publicado)
  originais/           Fotos em alta resolução (cerca de 70 MB), fora do Git
reference/             HTML de referência original (não é publicado)
```

### Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| WhatsApp, telefone, e-mail, Instagram, endereço, horário, logo, CNPJ | `src/content/data/site-settings.ts` |
| Biografia, valores, formação, fotos | `src/content/data/profile.ts` |
| Áreas de atuação, situações, imagens e mensagens do WhatsApp | `src/content/data/practice-areas.ts` |
| Avaliações do Google | `src/content/data/reviews.ts` |
| Títulos e textos das seções, menu | `src/content/data/home.ts` |

Seções sem dados não aparecem: a seção de avaliações (e o item "Avaliações" do menu) só surge quando houver avaliações cadastradas; o bloco "Formação e experiência" só surge quando houver `credentials`; CNPJ e política de privacidade só entram no rodapé quando preenchidos em `legal`.

Para trocar uma foto, coloque o arquivo em `public/images/` (até cerca de 1600 px de largura) e atualize `url`, `alt`, `width` e `height`. O `next/image` gera versões otimizadas (AVIF/WebP).

## Publicação

Qualquer hospedagem compatível com Next.js serve. A recomendação é a **Vercel**, que também atende as próximas etapas (Payload + Postgres).

1. Criar o repositório Git e enviar o código.
2. Importar o projeto na Vercel (framework detectado automaticamente; build `npm run build`).
3. Definir a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio definitivo, sem barra no final (ex.: `https://www.fernandoaraujoadv.com.br`). Veja `.env.example`.
4. Apontar o domínio para a Vercel no painel do registro (registro.br ou outro).
5. Depois do deploy, conferir: página inicial, `/robots.txt`, `/sitemap.xml`, links de WhatsApp e a prévia de compartilhamento (por exemplo, colando o link no WhatsApp).

Sem `NEXT_PUBLIC_SITE_URL`, o site usa a URL de produção da Vercel e, fora dela, `http://localhost:3000` — por isso a variável é obrigatória antes de divulgar o domínio.

Em servidor próprio: `npm run build` e `npm run start` (porta 3000 por padrão), atrás de um proxy com HTTPS.

Não há segredos neste projeto. Quando houver (etapa 2 em diante), ficam só nas variáveis de ambiente do servidor — nunca com prefixo `NEXT_PUBLIC_` e nunca no repositório.

## Próximas etapas

A organização já considera a evolução do produto:

- **Etapa 2 — Payload CMS + PostgreSQL (Supabase).** O Payload 3 roda dentro do próprio Next.js. Ele vai adicionar o grupo de rotas `src/app/(payload)/` (painel e API) ao lado de `src/app/(site)/` — por isso o site já usa um layout raiz dentro de `(site)` em vez de `src/app/layout.tsx`. Os tipos em `src/content/types.ts` viram as collections/globals (`site-settings`, `lawyer-profile`, `home` como globals; `services`, `reviews` e `media` como collections). A troca acontece **apenas em `src/lib/content.ts`**: cada função passa a chamar a Local API do Payload (`payload.findGlobal`, `payload.find`) e os componentes continuam iguais. Next.js 16.4 é compatível com o `@payloadcms/next` 3.x atual.
- **Etapa 3 — Blog.** Rotas públicas em `src/app/(site)/blog/` (lista) e `src/app/(site)/blog/[slug]/` (artigo), com rascunho e prévia pelo Payload. A seção com os últimos artigos entra na home entre "Quem é Fernando" e "Avaliações" (há um comentário marcando o lugar em `page.tsx`). Incluir o item "Blog" no menu (`home.ts`) e as URLs em `src/app/sitemap.ts` só quando houver artigos publicados.
- **Etapa 4 — IA para artigos.** Fica no painel/servidor (rotas de API ou hooks do Payload); nada roda no navegador do visitante.
- **Etapa 5 — Assistente de primeiro atendimento.** Componente de cliente isolado que encaminha para o WhatsApp; a chamada ao modelo fica em rota de servidor. Exige política de privacidade publicada antes de entrar no ar.

Dados privados (clientes, atendimentos, conversas) não devem entrar em `src/content/`, que é só conteúdo público.
