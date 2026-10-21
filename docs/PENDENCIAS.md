# Pendências — primeira entrega

Atualizado em 21/10/2026 (segunda rodada: novas seções, fotos, logo e mapa). Itens marcados com **[bloqueia]** precisam ser resolvidos antes de divulgar o site.

## 1. Publicação

- **[bloqueia]** Domínio definitivo. Configurar `NEXT_PUBLIC_SITE_URL` na hospedagem (canonical, sitemap e prévia de compartilhamento dependem disso).
- **[bloqueia]** Conta de hospedagem e autorização para publicar. O site **não foi publicado**; está pronto para deploy (ver README).
- Criar repositório Git (o projeto ainda não está versionado).
- Avaliações: o site mostra 5 avaliações reais do perfil público do Google (consultado em 21/10/2026), com nome reduzido (primeiro nome + inicial) e texto original. Sem login, o Google só exibe 5 das 35; se o Fernando quiser escolher outras, basta editar `src/content/data/reviews.ts`. As datas são aproximadas (o Google mostra só "há X meses"). Recomendado: Fernando confirmar que está de acordo em exibir essas avaliações no site.
- Domínio provável: o perfil do Google do escritório informa `fernandoaraujoadvocacia.com.br`. Confirmar com o Fernando antes de usar em `NEXT_PUBLIC_SITE_URL`.

## 2. Aprovação de textos pelo Fernando — **[bloqueia]**

Os textos do layout foram mantidos sempre que possível. As mudanças abaixo removem promessas de resultado e afirmações sem comprovação. Peça ao Fernando que aprove ou ajuste cada uma.

| Onde | Texto do layout | Texto no site | Motivo |
| --- | --- | --- | --- |
| Título principal | Advogado **especialista** em Direito Previdenciário e Trabalhista | Advogado **com atuação** em Direito Previdenciário e Trabalhista | Não há título de especialização informado. Pelas regras de publicidade da OAB, "especialista" pressupõe especialização comprovada. Se o Fernando tiver pós-graduação na área, o termo pode voltar. |
| Início | ...para que você **receba tudo** o que é seu por direito... | ...para **buscar** o que é seu por direito... | Evita prometer resultado. |
| Início | Atendo você em qualquer lugar do Brasil. | Atendimento online em todo o Brasil e presencial em Santa Juliana-MG. | Deixa claras as duas modalidades. |
| Aposentadoria | A aposentadoria certa **garante** sua renda pra você descansar... | Eu analiso seu histórico de trabalho e de contribuições para ver qual aposentadoria combina com o seu caso. | "Garante" promete resultado. |
| Auxílio-doença | O benefício do INSS **te dá tranquilidade**... | Se a doença ou a lesão impede você de trabalhar, pode haver direito a um benefício do INSS. Eu confiro seus documentos e explico o caminho do pedido ou do recurso. | Condiciona ao caso. |
| Acidente de trabalho | Você pode ter direito a indenização pelo que sofreu. | Dependendo do que aconteceu, você pode ter direito a indenização. | Pequeno ajuste. |
| Ações trabalhistas (reúne rescisão, demissão injusta e emprego que adoece) | ...**pode até usar o valor ou o FGTS pra dar entrada na sua casa** / **A lei permite** sair sem abrir mão dos seus direitos / ...**devolver a sua dignidade** | Saiu do emprego e não recebeu o que devia, ou o trabalho está tirando sua saúde? Eu explico quais direitos podem ser cobrados no seu caso. | Remove promessas; as três situações viraram itens da lista do card. |
| Fechamento de "Atuação" (antes, faixa "Você não precisa...") | Depois que o juiz decide, **quase nunca** dá pra voltar atrás. Com orientação desde o começo, **você evita esse risco**. | Muita gente perde o direito por causa de um documento que faltou **ou de um prazo que passou**. Com orientação desde o começo, **fica mais fácil evitar** esses erros. | Tom informativo, sem garantia. |
| Sobre — título | Com **[X] anos** de experiência, eu cuido de cada caso como se fosse único | Eu cuido de cada caso com atenção, como se fosse único | Tempo de experiência não informado. |
| Sobre | Meu trabalho é lutar, **até o fim**, para que você **receba** o que é seu... | Meu trabalho é lutar pelo que é seu por direito, para que você não se sinta enganado, trapaceado ou humilhado. | Evita compromisso de resultado. |

Novos textos que também precisam de "ok": as situações listadas em cada área de atuação (ex.: "Pedido negado ou parado no INSS", "Dúvidas sobre a perícia médica", "Rescisão e FGTS pagos errado"), o título "Atendimento em todo o Brasil" e a frase de apresentação do rodapé.

Também precisam de "ok":
- As 4 etapas da seção "Como funciona" (você conta o que aconteceu, análise do caso, conversa e próximos passos, acompanhamento com retorno frequente). Confirmar se é assim que o Fernando trabalha de fato.
- Os textos da seção "Contato" ("O caminho mais rápido", "Eu respondo em horário de atendimento").
- A expressão "sem sair de casa" no lugar de "atendimento online", em todo o site.

Mantidos como no layout, mas também precisam de "ok": textos de valores (Honestidade, Transparência, Retorno frequente, Competência técnica, Foco na solução, Eu ouço você), "Na conversa eu explico, com calma, como funciona o seu caso, os valores e cada etapa", chamada final e aviso do rodapé.

Opcional: o INSS hoje usa "benefício por incapacidade temporária/permanente" no lugar de "auxílio-doença/aposentadoria por invalidez". O site mantém os nomes populares, que o público reconhece; o Fernando decide.

## 3. Dados a confirmar com o Fernando — **[bloqueia]**

Vieram do layout e estão publicados no site. Confirmar se estão corretos e atuais:

- OAB/MG 235.682
- WhatsApp (34) 99902-9545 — e se o mesmo número aceita **ligações** (o site oferece "Ligar")
- E-mail fernandoaraujoadv1@gmail.com
- Instagram @fernandoaraujoo.adv (com dois "o")
- Endereço: Rua 26 de Outubro, 146, Bairro Palmeiras, Santa Juliana-MG, CEP 38175-000 (conferir se os links do Google Maps e do Waze levam ao local certo)
- Horário: segunda a sexta, das 8h às 17h
- Atendimento online para todo o Brasil e presencial com hora marcada
- Mensagens automáticas do WhatsApp de cada área (em `src/content/data/practice-areas.ts`)
- **Direito de uso das imagens das áreas de atuação** (`assets/aposentadoria.jpeg`, `beneficio-incapacidade.jpeg`, `acidente-trabalho.jpeg`, `acoes-trabalhistas.jpeg`): parecem ser de banco de imagens. Confirmar a licença para uso no site.
- Autorização de uso das fotos do Fernando junto ao fotógrafo, se necessário.

## 4. Conteúdo omitido até haver dados reais (não bloqueia)

O site funciona sem estes itens; cada um aparece sozinho quando for preenchido.

- **Formação e experiência**: graduação (instituição e ano), pós-graduação, cursos, áreas de atuação e tempo de experiência.
- **CNPJ** do escritório, se houver (o rodapé exibe quando preenchido).

## 5. Resolvido na segunda rodada

- Fotos do Fernando no início (terno azul) e em "Quem é Fernando Araujo" (sorrindo, com estante).
- Logo oficial no cabeçalho, rodapé, favicon e imagem de compartilhamento, extraído de `assets/logo.jpeg` com fundo transparente. Para nitidez perfeita em qualquer tamanho, vale pedir o arquivo vetorial (SVG, AI ou PDF) a quem criou o logo.
- Mapa do Brasil com Minas Gerais em destaque e pino em Santa Juliana-MG.

## 6. Itens do layout que dependem de etapas futuras (removidos)

- Link "Blog" no menu e no rodapé, e a seção de blog entre "Quem é Fernando" e "Avaliações" → etapa 3.
- Botão flutuante "Tire sua dúvida" (chat) → etapa 5. Mantido apenas o botão do WhatsApp.
- "Ver todas as avaliações no Google" → volta junto com as avaliações reais.

## 7. Política de privacidade e termos de uso

Não há textos aprovados, então os links do rodapé foram retirados (não havia destino).

Situação atual do site: sem formulários, sem cookies, sem analytics, sem scripts de terceiros. O contato acontece fora do site (WhatsApp, e-mail, telefone, Instagram). A hospedagem registra dados técnicos de acesso (IP, navegador) em logs.

- Recomendado antes de publicar: uma política de privacidade curta (LGPD), explicando que o site não coleta dados diretamente, que o contato pelo WhatsApp/e-mail é tratado para atendimento e como pedir exclusão dos dados.
- **Obrigatório** antes de: incluir analytics, pixel de anúncios, formulários, blog com comentários ou o assistente de primeiro atendimento (etapa 5).
- Termos de uso: opcionais nesta etapa.
- O texto deve ser redigido ou aprovado pelo Fernando.
