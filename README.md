# Fernando Araujo Advocacia — site institucional

Site público com página inicial (início, atuação, como funciona, avaliações, quem é Fernando Araujo, blog e onde atendemos) e o blog em `/blog`, com cabeçalho e rodapé próprios. A seção de avaliações só aparece quando houver avaliações reais e a do blog só quando houver artigos publicados. O contato é feito pelo WhatsApp.

O blog existe para um funil simples: a pessoa busca uma dúvida no Google, encontra o artigo, confia em quem escreve e chama no WhatsApp. Por isso a página do artigo concentra o investimento (resposta direta, autoria, perguntas frequentes, fontes oficiais e chamadas para o WhatsApp com mensagem que identifica o artigo).

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Ícones: [Lucide](https://lucide.dev) para a interface e [Simple Icons](https://simpleicons.org) para as marcas (WhatsApp, Instagram, Google)
- Páginas geradas estaticamente; componentes de cliente: menu do celular, carrossel de avaliações (quando houver avaliações) e botões de compartilhar do artigo.
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
    (site)/            Layout raiz (html, body, fonte, metadados), ícones, imagem de compartilhamento
      (home)/          Página inicial, com o cabeçalho e o rodapé do site (SiteChrome)
      blog/            Blog, com cabeçalho e rodapé próprios: lista (/blog) e artigo (/blog/[slug])
    not-found.tsx      Página 404. Precisa ficar na raiz de app/ para atender URLs inexistentes;
                       como o layout raiz está em (site)/, importa o CSS e a fonte por conta própria
    fonts/             Nunito Sans (OFL 1.1), subconjunto latino
    robots.ts          robots.txt
    sitemap.ts         sitemap.xml (inclui o blog quando há artigos publicados)
  components/
    blog/              Cabeçalho e rodapé do blog, destaque, filtro por área, cards, corpo, FAQ, fontes, autor, compartilhar
    layout/            Cabeçalho, menu do celular, rodapé e botão do WhatsApp do site (SiteChrome reúne os três)
    sections/          Seções da página inicial (recebem conteúdo por props)
      map/             Mapa do Brasil em SVG (gerado da malha de UFs do IBGE)
    seo/               Dados estruturados (schema.org)
    ui/                Botões, ícones, contêineres
  content/
    types.ts           Modelos de conteúdo (formato compatível com o Payload)
    data/              Conteúdo local: configurações, perfil, serviços, avaliações, artigos, textos da home
  lib/
    content.ts         Camada de acesso ao conteúdo (único ponto que sabe de onde vêm os dados)
    blog.ts            URLs, âncoras, datas e compartilhamento do blog
    fields.ts          Rótulos das áreas do direito (atuação e blog)
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
| Biografia, mini-bio do autor (blog), valores, formação, fotos | `src/content/data/profile.ts` |
| Áreas de atuação, situações, imagens e mensagens do WhatsApp | `src/content/data/practice-areas.ts` |
| Avaliações do Google | `src/content/data/reviews.ts` |
| Artigos do blog, textos de /blog, menu do blog, aviso e chamada final | `src/content/data/blog.ts` |
| Títulos e textos das seções, menu | `src/content/data/home.ts` |

Seções sem dados não aparecem: a seção de avaliações (e o item "Avaliações" do menu) só surge quando houver avaliações cadastradas; o blog (seção da home, item do menu, `/blog` no sitemap) só surge quando houver artigos com `status: "published"`; o bloco "Formação e experiência" só surge quando houver `credentials`; CNPJ e política de privacidade só entram no rodapé quando preenchidos em `legal`.

### Como escrever um artigo que gera contato

Adicione um item em `posts` em `src/content/data/blog.ts` com `status: "published"` (rascunhos ficam como `"draft"`, guardados sem aparecer). O que faz diferença:

1. **Título no formato da busca** — uma pergunta ou situação concreta, como a pessoa digitaria no Google ("O INSS negou meu pedido. O que eu posso fazer?").
2. **Bloco `answer` logo no início** — a resposta direta em 2 ou 3 frases. Quem chega com pressa já entende; o Google usa esse trecho como resposta em destaque.
3. **Um `heading` a cada 2 ou 3 parágrafos**, listas (`list`) para passos e documentos. Os títulos ganham âncora automaticamente.
4. **Um bloco `cta` no meio do texto** com `whatsappMessage` próprio ("Me envie a carta de indeferimento...") — é o convite no momento em que a dúvida está viva.
5. **`faq`** com 3 ou 4 perguntas que o leitor faria em seguida. Viram dados estruturados `FAQPage`.
6. **`sources`** com links oficiais (gov.br, leis no Planalto, INSS). Confiança para o leitor e para o Google.
7. **`whatsappMessage`** do artigo citando o título: a mensagem chega pronta no WhatsApp e o Fernando sabe de qual artigo veio o contato (o site não usa analytics nem cookies).
8. **`tags`** (2 ou 3 temas) e, ao revisar o texto, **`updatedAt`** — aparece como "Atualizado em" e entra no sitemap.
9. Um artigo por vez pode ter `featured: true` para ocupar o destaque de `/blog`; sem marcação, o mais recente é destacado.

Tom: informativo e condicional ("pode haver direito", "depende do caso"), sem promessa de resultado nem valores — regras de publicidade da OAB (Provimento 205/2021). O blog só traz resultado com constância: 2 a 4 artigos por mês, com pautas vindas das dúvidas reais que chegam pelo WhatsApp.

#### Fluxo com IA

O Fernando pode produzir o texto com o próprio agente de IA, usando o prompt em [docs/PROMPT-ARTIGO.md](docs/PROMPT-ARTIGO.md): ele cola o prompt numa conversa nova junto com o tema e as fontes oficiais (texto colado, não só links), revisa com o checklist do arquivo e envia o resultado. O formato de saída (Markdown com seções fixas e blocos `[PARÁGRAFO]`, `[TÍTULO]`, `[LISTA]`, `[CITAÇÃO]`, `[CTA]`) corresponde 1:1 aos campos de `BlogPost` — a transcrição para `blog.ts` é mecânica: resposta direta vira o primeiro bloco `answer`, as demais marcas viram os blocos do `body`, e as seções finais viram `faq`, `sources`, `whatsappMessage` e a sugestão de `alt` da capa. O exemplo está em [docs/exemplos/artigo-exemplo.md](docs/exemplos/artigo-exemplo.md). Itens marcados com `[VERIFICAR]` indicam afirmações sem fonte — o Fernando confere ou remove antes de enviar. O artigo entra como `"draft"` e só publica após a aprovação dele.

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

- **Etapa 2 — Payload CMS + PostgreSQL (Supabase).** O Payload 3 roda dentro do próprio Next.js. Ele vai adicionar o grupo de rotas `src/app/(payload)/` (painel e API) ao lado de `src/app/(site)/` — por isso o site já usa um layout raiz dentro de `(site)` em vez de `src/app/layout.tsx`. Os tipos em `src/content/types.ts` viram as collections/globals (`site-settings`, `lawyer-profile`, `home` e `blog` como globals; `services`, `reviews`, `posts` e `media` como collections). A troca acontece **apenas em `src/lib/content.ts`**: cada função passa a chamar a Local API do Payload (`payload.findGlobal`, `payload.find`) e os componentes continuam iguais. Next.js 16.4 é compatível com o `@payloadcms/next` 3.x atual.
- **Etapa 3 — Blog.** Feito: rotas `/blog` (lista) e `/blog/[slug]` (artigo) com metadados e dados estruturados, seção de últimos artigos na home e item de menu — tudo visível só quando há artigos publicados. Com o Payload entram a edição no painel e a prévia de rascunhos; hoje os rascunhos ficam com `status: "draft"` em `blog.ts`.
- **Etapa 4 — IA para artigos.** Fica no painel/servidor (rotas de API ou hooks do Payload); nada roda no navegador do visitante.
- **Etapa 5 — Assistente de primeiro atendimento.** Componente de cliente isolado que encaminha para o WhatsApp; a chamada ao modelo fica em rota de servidor. Exige política de privacidade publicada antes de entrar no ar.

Dados privados (clientes, atendimentos, conversas) não devem entrar em `src/content/`, que é só conteúdo público.
