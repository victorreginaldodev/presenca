import type { BlogPage, BlogPost } from "../types";

export const blogPage: BlogPage = {
  eyebrow: "Blog",
  title: "Seus direitos explicados em linguagem simples",
  subtitle:
    "Respostas diretas para as dúvidas mais comuns sobre INSS, aposentadoria e direitos do trabalhador — do jeito que eu explico no escritório.",
  emptyMessage: "Ainda não há artigos publicados. Em breve você encontra aqui explicações simples sobre os seus direitos.",
  noResultsMessage: "Ainda não há artigos sobre este tema.",
  featuredLabel: "Em destaque",
  allLabel: "Todos os temas",
  authorBoxTitle: "Quem escreve",
  faqTitle: "Perguntas frequentes",
  sourcesTitle: "Fontes e legislação",
  relatedTitle: "Leia também",
  disclaimer:
    "Este conteúdo é informativo e não substitui a análise do seu caso por um advogado. Cada situação tem particularidades que só uma avaliação individual consegue identificar.",
  cta: {
    title: "Ficou com dúvida sobre o seu caso?",
    text: "Me conte o que aconteceu pelo WhatsApp. Eu leio com atenção e explico, com calma, quais são os caminhos possíveis.",
    label: "Conversar no WhatsApp",
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "Artigos", href: "/blog" },
    { label: "Previdenciário", href: "/blog?area=previdenciario" },
    { label: "Trabalhista", href: "/blog?area=trabalhista" },
  ],
};

/**
 * Como escrever um artigo que ajuda o leitor a entrar em contato:
 * - título no formato da busca do Google (uma pergunta ou situação concreta);
 * - primeiro bloco `answer` com a resposta direta, em 2 ou 3 frases;
 * - um `heading` a cada 2 ou 3 parágrafos; listas para passos e documentos;
 * - um bloco `cta` no meio do texto, com mensagem própria para o WhatsApp;
 * - `faq` com as perguntas que o leitor faria em seguida;
 * - `sources` com links oficiais (gov.br, leis, INSS);
 * - `whatsappMessage` citando o artigo, para saber de onde veio o contato;
 * - ao revisar o texto, preencher `updatedAt`.
 *
 * `status: "draft"` guarda o artigo sem publicar. Tudo em tom informativo,
 * sem promessa de resultado (publicidade da OAB).
 */
export const posts: BlogPost[] = [
  {
    id: "post-demissao-sem-justa-causa",
    slug: "fui-demitido-sem-justa-causa-quais-sao-os-meus-direitos",
    title: "Fui demitido sem justa causa: quais são os meus direitos?",
    excerpt:
      "Foi demitido sem justa causa? Saiba quais valores você pode receber, como funcionam o FGTS, a multa de 40% e o prazo para pagamento da rescisão.",
    field: "trabalhista",
    tags: ["Demissão sem justa causa", "Direitos trabalhistas", "Rescisão trabalhista"],
    publishedAt: "2026-11-04",
    featured: true,
    status: "published",
    body: [
      {
        type: "answer",
        text: "Quem é demitido sem justa causa tem direito, em geral, ao saldo de salário, aviso prévio, 13º proporcional, férias acrescidas de 1/3 e multa de 40% do FGTS. Também pode ter direito ao saque do FGTS e ao seguro-desemprego, conforme as regras aplicáveis.",
      },
      {
        type: "paragraph",
        text: "Foi demitido sem justa causa e está preocupado com os valores que a empresa precisa pagar? Essa é uma dúvida muito comum, principalmente quando o trabalhador recebe os documentos da rescisão e não consegue entender os cálculos. Eu vou explicar quais são os principais direitos de quem perde o emprego sem justa causa, o prazo para receber e os cuidados que considero importantes antes de conferir o acerto.",
      },
      { type: "heading", text: "O que significa ser demitido sem justa causa?" },
      {
        type: "paragraph",
        text: "A demissão sem justa causa acontece quando a empresa decide encerrar o contrato de trabalho sem que o empregado tenha cometido uma falta grave que justifique a dispensa. Nessa situação, a legislação trabalhista prevê o pagamento de diferentes verbas rescisórias, que são os valores devidos pelo encerramento do contrato.",
      },
      {
        type: "paragraph",
        text: "É importante entender que o valor da rescisão não é igual para todos os trabalhadores. O cálculo depende de fatores como salário, tempo de serviço, férias pendentes e forma de cumprimento do aviso prévio. Por isso, eu recomendo conferir cada parcela separadamente, em vez de olhar apenas o valor total apresentado pela empresa.",
      },
      { type: "heading", text: "Quais são os direitos de quem é demitido sem justa causa?" },
      {
        type: "paragraph",
        text: "Na demissão sem justa causa, o trabalhador pode ter direito a diferentes pagamentos e benefícios. Alguns valores são calculados proporcionalmente ao período trabalhado, enquanto outros dependem da existência de férias pendentes ou do cumprimento de requisitos específicos.",
      },
      {
        type: "list",
        items: [
          "Saldo de salário: pagamento pelos dias efetivamente trabalhados no mês da demissão.",
          "Aviso prévio: pode ser trabalhado ou indenizado. A regra prevê 30 dias, com acréscimo de 3 dias por ano de serviço, conforme a Lei nº 12.506/2011.",
          "13º salário proporcional: valor correspondente aos meses trabalhados no ano da rescisão.",
          "Férias vencidas + 1/3: pagamento das férias adquiridas e ainda não usufruídas, quando existentes, acrescidas do adicional constitucional.",
          "Férias proporcionais + 1/3: pagamento proporcional ao período de férias em aquisição, também acrescido do adicional constitucional.",
          "Multa de 40% do FGTS: valor calculado sobre a base legal dos depósitos do FGTS relacionados ao contrato de trabalho.",
          "Saque do FGTS: possibilidade de movimentar os valores da conta vinculada, observadas as regras aplicáveis.",
          "Seguro-desemprego: benefício que pode ser recebido pelo trabalhador dispensado, desde que cumpra os requisitos legais.",
        ],
      },
      {
        type: "paragraph",
        text: "Esses são os principais direitos previstos para a demissão sem justa causa. Entretanto, o cálculo precisa considerar as particularidades de cada contrato. Um trabalhador que possui férias pendentes, por exemplo, pode ter um acerto diferente daquele que já usufruiu regularmente de suas férias, devendo recebê-las em dobro.",
      },
      {
        type: "paragraph",
        text: "A regra é simples: a empresa tem até 12 meses, após o empregado completar um ano de trabalho, para conceder suas férias. Caso ultrapasse esse prazo, deverá pagar as férias em dobro, acrescidas do terço constitucional, conforme o artigo 137 da CLT. Para entender melhor, veja como funciona:",
      },
      {
        type: "list",
        items: [
          "Período aquisitivo: são os primeiros 12 meses de trabalho, durante os quais o empregado adquire o direito às férias.",
          "Período concessivo: são os 12 meses seguintes, prazo que a empresa possui para conceder as férias ao trabalhador.",
          "Férias em dobro: se a empresa conceder as férias após o fim do período concessivo, deverá pagar a remuneração correspondente em dobro, incluindo o adicional de 1/3.",
        ],
      },
      {
        type: "paragraph",
        text: "Exemplo prático: imagine que você começou a trabalhar em 01/01/2024.",
      },
      {
        type: "list",
        items: [
          "2024: você completa os 12 meses necessários para adquirir o direito às férias.",
          "2025: a empresa deve conceder suas férias até 31/12/2025.",
          "2026: se a empresa deixar para conceder essas férias somente em 2026, deverá pagá-las em dobro, com o adicional de 1/3.",
        ],
      },
      {
        type: "paragraph",
        text: "Portanto, se a empresa ultrapassar o prazo legal para conceder suas férias, você terá direito ao pagamento em dobro, mesmo que consiga tirar os dias de descanso posteriormente.",
      },
      { type: "heading", text: "Como funciona o aviso prévio na demissão sem justa causa?" },
      {
        type: "paragraph",
        text: "O aviso prévio é uma das parcelas que merecem atenção na rescisão. Ele pode ser trabalhado, quando o empregado permanece prestando serviços durante esse período, ou indenizado, quando o empregador paga o valor correspondente sem exigir o trabalho.",
      },
      {
        type: "paragraph",
        text: "A duração considera o tempo de serviço. Pela Lei nº 12.506/2011, são previstos 30 dias, acrescidos de 3 dias por ano de serviço, respeitado o limite legal de 90 dias. Assim, antes de aceitar o cálculo apresentado, é importante verificar a data de admissão, a data de desligamento e a modalidade do aviso prévio.",
      },
      { type: "heading", text: "Quem é demitido sem justa causa pode sacar o FGTS?" },
      {
        type: "paragraph",
        text: "A demissão sem justa causa é uma das situações que permitem a movimentação do FGTS, conforme o artigo 20, inciso I, da Lei nº 8.036/1990. Além disso, o empregador deve pagar a multa rescisória de 40%, prevista no artigo 18, § 1º, da mesma lei.",
      },
      {
        type: "paragraph",
        text: "Eu considero importante conferir o extrato do FGTS, principalmente para verificar se os depósitos do contrato foram realizados corretamente. Também é necessário observar a modalidade de saque escolhida pelo trabalhador, pois ela pode influenciar a disponibilidade dos valores. Essa análise ajuda a identificar possíveis diferenças que mereçam esclarecimento.",
      },
      { type: "heading", text: "Qual é o prazo para a empresa pagar a rescisão?" },
      {
        type: "paragraph",
        text: "De acordo com o artigo 477, § 6º, da CLT, a empresa tem até 10 dias corridos, contados do término do contrato de trabalho, para pagar as verbas rescisórias e entregar os documentos pertinentes ao encerramento do vínculo. Esse prazo merece atenção porque o atraso pode gerar consequências para o empregador.",
      },
      {
        type: "paragraph",
        text: "O artigo 477, § 8º, da CLT prevê uma multa equivalente ao salário do empregado pelo descumprimento do prazo, ressalvada a situação em que o próprio trabalhador tenha dado causa à demora. Portanto, se a empresa não pagou dentro do prazo, pode haver direito à multa, dependendo das circunstâncias. Eu recomendo guardar os comprovantes de pagamento e os documentos entregues no desligamento.",
      },
      {
        type: "cta",
        title: "Foi demitido sem justa causa e está em dúvida sobre os valores da rescisão?",
        text: "Se você recebeu o Termo de Rescisão do Contrato de Trabalho (TRCT), pode enviar uma foto pelo WhatsApp para conversar sobre os valores apresentados e esclarecer dúvidas sobre seus direitos.",
        label: "Enviar minha rescisão pelo WhatsApp",
        whatsappMessage:
          "Olá, Fernando! Li o artigo sobre os direitos de quem foi demitido sem justa causa e gostaria de receber orientação sobre os valores apresentados pela empresa.",
      },
      { type: "heading", text: "O que fazer se a empresa pagar a rescisão errada?" },
      {
        type: "paragraph",
        text: "Se você acredita que recebeu menos do que deveria, o primeiro passo é identificar qual parcela apresenta diferença. Pode ser um problema no saldo de salário, no aviso prévio, nas férias, no 13º proporcional ou no FGTS. Nem toda diferença significa necessariamente uma irregularidade, por isso os valores devem ser analisados com cuidado.",
      },
      {
        type: "paragraph",
        text: "Eu recomendo reunir o Termo de Rescisão do Contrato de Trabalho, os comprovantes de pagamento, o extrato do FGTS e os documentos que indiquem o salário e o período trabalhado. Com essas informações, fica mais fácil conferir os cálculos e compreender se existe alguma obrigação que não foi cumprida.",
      },
      { type: "heading", text: "Vale a pena conferir os direitos antes de encerrar o assunto?" },
      {
        type: "paragraph",
        text: "A perda do emprego costuma trazer preocupações financeiras, e é natural querer resolver tudo rapidamente. Entretanto, conferir os documentos e entender cada parcela pode evitar que uma diferença passe despercebida. Na minha atuação como advogado trabalhista, considero essencial analisar a situação individualmente, com atenção ao histórico do contrato e aos valores efetivamente pagos.",
      },
      {
        type: "paragraph",
        text: "Se você foi demitido sem justa causa e tem dúvidas sobre o acerto, uma orientação jurídica individualizada pode ajudar a esclarecer quais direitos se aplicam ao seu caso. O importante é não se limitar ao valor final da rescisão, mas compreender como ele foi calculado.",
      },
      {
        type: "quote",
        text: "Na demissão sem justa causa, conhecer seus direitos é o primeiro passo para conferir se a rescisão foi calculada corretamente.",
      },
    ],
    faq: [
      {
        question: "Fui demitido sem justa causa. Tenho direito à multa de 40% do FGTS?",
        answer:
          "Sim. Na demissão sem justa causa, a legislação prevê a multa de 40% sobre a base legal dos depósitos do FGTS relacionados ao contrato de trabalho. Eu recomendo conferir o extrato do FGTS e os documentos da rescisão para verificar se o recolhimento foi realizado corretamente.",
      },
      {
        question: "Quantos dias a empresa tem para pagar minha rescisão?",
        answer:
          "A empresa tem até 10 dias corridos, contados do término do contrato de trabalho, conforme o artigo 477, § 6º, da CLT. Se não cumprir esse prazo, poderá ser aplicada a multa prevista no § 8º do mesmo artigo, ressalvadas as situações legalmente previstas.",
      },
      {
        question: "Quem é demitido sem justa causa tem direito ao seguro-desemprego?",
        answer:
          "A demissão sem justa causa é uma das condições para o acesso ao seguro-desemprego. Entretanto, o trabalhador também precisa cumprir os requisitos previstos na Lei nº 7.998/1990, incluindo as exigências relacionadas ao histórico de trabalho. Por isso, o direito ao benefício depende da análise de cada situação.",
      },
      {
        question: "O que acontece se a empresa calcular minha rescisão com valores errados?",
        answer:
          "Se houver diferenças nas verbas rescisórias, pode existir a obrigação de pagar os valores que ficaram pendentes. Para identificar o problema, é importante conferir o Termo de Rescisão do Contrato de Trabalho, os comprovantes de pagamento e o extrato do FGTS. Uma análise individualizada pode esclarecer se os cálculos estão corretos.",
      },
    ],
    sources: [
      {
        label: "CLT — Consolidação das Leis do Trabalho",
        url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm",
      },
      {
        label: "Constituição Federal de 1988",
        url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      },
      {
        label: "Lei nº 8.036/1990 — FGTS",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l8036compilada.htm",
      },
      {
        label: "Lei nº 7.998/1990 — Seguro-desemprego",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l7998compilado.htm",
      },
    ],
    whatsappMessage:
      "Olá, Fernando! Li o artigo “Fui demitido sem justa causa: quais são os meus direitos?” e gostaria de conversar sobre o meu caso.",
  },
  {
    id: "post-rescisao-indireta",
    slug: "rescisao-indireta-o-que-e-como-funciona",
    title: "Rescisão indireta: o que é, como funciona e quais seus direitos?",
    excerpt:
      "Entenda quando pedir rescisão indireta, quais faltas graves da empresa permitem essa medida e quais direitos o trabalhador pode receber.",
    field: "trabalhista",
    tags: ["Rescisão indireta", "Direitos trabalhistas", "Justa causa do empregador"],
    publishedAt: "2026-11-04",
    status: "published",
    body: [
      {
        type: "answer",
        text: "A rescisão indireta acontece quando a empresa comete uma falta grave que permite ao trabalhador pedir o fim do contrato de trabalho. É como uma justa causa aplicada ao empregador. Se reconhecida pela Justiça, o empregado pode ter direito às mesmas verbas de uma demissão sem justa causa.",
      },
      {
        type: "paragraph",
        text: "Você trabalha em uma empresa que atrasa salários, não deposita seu FGTS ou trata os funcionários com humilhações constantes? Saiba que, dependendo da gravidade da situação, você pode ter direito a pedir a rescisão indireta do contrato de trabalho.",
      },
      {
        type: "paragraph",
        text: "Eu vou explicar quando essa medida pode ser aplicada, quais situações permitem o pedido e o que acontece com os seus direitos. Também vou mostrar se é possível parar de trabalhar antes do julgamento.",
      },
      { type: "heading", text: "O que é a rescisão indireta do contrato de trabalho?" },
      {
        type: "paragraph",
        text: "A rescisão indireta acontece quando o empregador comete uma falta grave que justifica o encerramento do contrato por iniciativa do trabalhador. Na prática, funciona como uma justa causa aplicada à empresa.",
      },
      {
        type: "paragraph",
        text: "O artigo 483 da Consolidação das Leis do Trabalho (CLT) estabelece as situações que podem justificar esse pedido. Mas atenção: não é qualquer desentendimento ou problema no trabalho que permite a rescisão indireta. É necessário avaliar a gravidade da conduta e as circunstâncias do caso.",
      },
      {
        type: "paragraph",
        text: "Quando a Justiça reconhece a rescisão indireta, o trabalhador pode receber as verbas rescisórias correspondentes à dispensa sem justa causa. Isso significa que ele não precisa necessariamente pedir demissão e abrir mão de direitos por causa de uma falta grave cometida pela empresa.",
      },
      { type: "heading", text: "Quais situações podem justificar a rescisão indireta?" },
      {
        type: "paragraph",
        text: "O artigo 483 da CLT apresenta diferentes situações em que o trabalhador pode pedir o encerramento do contrato. Vou explicar as principais de forma simples, com exemplos hipotéticos que ajudam a identificar possíveis irregularidades.",
      },
      {
        type: "paragraph",
        text: "a) forem exigidos serviços superiores às suas forças, defesos por lei, contrários aos bons costumes, ou alheios ao contrato:",
      },
      {
        type: "list",
        items: [
          "Serviço superior às forças: um auxiliar de limpeza contratado para varrer escritórios que é obrigado a carregar sozinho sacos de entulho de 50 kg em uma obra, sofrendo lesões.",
          "Serviço defeso (proibido) por lei: um recepcionista orientado pelo gerente a mentir sistematicamente para órgãos de fiscalização sobre o funcionamento da empresa.",
          "Contrário aos bons costumes: uma funcionária de vendas contratada para atendimento ao público que é coagida pelo chefe a sair para jantares íntimos com clientes com fins de sedução.",
          "Alheio ao contrato: um programador de computadores que passa a ser escalado diariamente para limpar o depósito ou fazer entregas de carro na rua.",
        ],
      },
      {
        type: "list",
        items: [
          "b) for tratado pelo empregador ou por seus superiores hierárquicos com rigor excessivo. Exemplo prático: um gerente que submete o funcionário a gritos constantes na frente de colegas, impõe metas inatingíveis sob ameaças diárias de humilhação e perseguição excessiva.",
          "c) correr perigo manifesto de mal considerável. Exemplo prático: um trabalhador da construção civil que é obrigado a operar andaimes altos e perigosos sem nenhum equipamento de proteção individual (EPI) obrigatório ou cinto de segurança.",
          "d) não cumprir o empregador as obrigações do contrato. Exemplo prático: a empresa que deixa de depositar o FGTS do funcionário por vários meses ou atrasa o pagamento do salário de forma reiterada (constante).",
          "e) praticar o empregador ou seus prepostos, contra ele ou pessoas de sua família, ato lesivo da honra e boa fama. Exemplo prático: um empregador que acusa publicamente (ou em grupos de trabalho da empresa) o funcionário de roubo ou furto sem qualquer prova ou investigações formais.",
          "f) o empregador ou seus prepostos ofenderem-no fisicamente, salvo em caso de legítima defesa, própria ou de outrem. Exemplo prático: um supervisor que, em uma discussão no ambiente de trabalho, agride o empregado com tapas ou socos (sem que o empregado tenha partido para agressão física em legítima defesa).",
          "g) o empregador reduzir o seu trabalho, sendo este por peça ou tarefa, de forma a afetar sensivelmente a importância dos salários. Exemplo prático: uma costureira ou montador que é remunerado por peça produzida e o empregador, de forma unilateral, reduz drasticamente a quantidade de matéria-prima ou de tarefas enviadas a ele, fazendo o salário cair pela metade.",
        ],
      },
      {
        type: "paragraph",
        text: "Essas situações não significam que todo pedido será aceito automaticamente. Eu sempre recomendo analisar o que aconteceu, a frequência das irregularidades e os documentos disponíveis para demonstrá-las.",
      },
      { type: "heading", text: "Posso parar de trabalhar depois de pedir a rescisão indireta?" },
      {
        type: "paragraph",
        text: "Essa é uma das dúvidas mais importantes. O artigo 483, § 3º, da CLT permite que, nas hipóteses das alíneas “d” e “g”, o trabalhador peça a rescisão indireta e permaneça ou não trabalhando até a decisão do processo.",
      },
      {
        type: "paragraph",
        text: "Isso se aplica ao descumprimento das obrigações contratuais e à redução prejudicial do trabalho remunerado por peça ou tarefa. Nessas situações, o empregado pode optar por continuar exercendo suas funções ou se afastar enquanto aguarda o julgamento.",
      },
      {
        type: "paragraph",
        text: "Entretanto, sair da empresa exige cuidado. Se a Justiça não reconhecer a rescisão indireta, o afastamento poderá gerar consequências trabalhistas, inclusive discussões sobre faltas injustificadas ou pedido de demissão. Por isso, recomendo avaliar os riscos antes de interromper o trabalho.",
      },
      {
        type: "cta",
        title: "Sua empresa está descumprindo obrigações trabalhistas?",
        text: "Se você tem dúvidas sobre a possibilidade de pedir rescisão indireta, pode enviar pelo WhatsApp uma foto do seu extrato do FGTS para uma orientação sobre o seu caso.",
        label: "Enviar extrato do FGTS pelo WhatsApp",
        whatsappMessage:
          "Olá, Fernando! Li o artigo sobre rescisão indireta e gostaria de enviar meu extrato do FGTS para receber orientação sobre a minha situação trabalhista.",
      },
      { type: "heading", text: "Quais direitos o trabalhador recebe na rescisão indireta?" },
      {
        type: "paragraph",
        text: "Quando a rescisão indireta é reconhecida, o trabalhador pode ter direito às verbas de uma dispensa sem justa causa. Os valores dependem das informações do contrato, do período trabalhado e das parcelas efetivamente devidas.",
      },
      {
        type: "list",
        items: [
          "Saldo de salário: pagamento dos dias trabalhados no mês da rescisão.",
          "Aviso-prévio: conforme a regra informada na Lei nº 12.506/2011, são 30 dias, com acréscimo de 3 dias por ano de serviço.",
          "13º salário proporcional: correspondente aos meses trabalhados no ano.",
          "Férias vencidas mais 1/3: quando existirem períodos adquiridos e não usufruídos.",
          "Férias proporcionais mais 1/3: referentes ao período de férias em aquisição.",
          "Multa de 40% sobre o FGTS: calculada sobre a base legal dos depósitos relacionados ao contrato.",
          "Saque do FGTS: possibilidade de movimentar a conta, observadas as regras aplicáveis.",
          "Seguro-desemprego: desde que o trabalhador cumpra os requisitos legais.",
        ],
      },
      { type: "heading", text: "Como pedir a rescisão indireta com segurança?" },
      {
        type: "paragraph",
        text: "O primeiro cuidado é identificar qual falta grave a empresa está cometendo. Depois, é importante reunir documentos que ajudem a demonstrar o problema, como extratos do FGTS, comprovantes de pagamento e mensagens relacionadas às irregularidades.",
      },
      {
        type: "paragraph",
        text: "Eu também recomendo não confundir rescisão indireta com pedido de demissão. São situações diferentes, e uma decisão precipitada pode afetar os direitos discutidos posteriormente.",
      },
      {
        type: "paragraph",
        text: "A rescisão indireta pode ser uma alternativa para quem enfrenta descumprimentos graves por parte do empregador. Porém, cada situação precisa de uma análise individualizada, especialmente quando o trabalhador pretende deixar de comparecer à empresa.",
      },
      {
        type: "quote",
        text: "Você não precisa tratar uma falta grave da empresa como se fosse uma obrigação sua suportá-la. Antes de tomar qualquer decisão, vale a pena conhecer seus direitos.",
      },
    ],
    faq: [
      {
        question: "Posso pedir rescisão indireta porque a empresa não deposita meu FGTS?",
        answer:
          "Sim, a falta de depósitos do FGTS pode justificar a rescisão indireta por descumprimento das obrigações do contrato, conforme o artigo 483, alínea “d”, da CLT. Porém, é necessário avaliar a situação concreta e os elementos que comprovam a irregularidade.",
      },
      {
        question: "Preciso continuar trabalhando durante o processo de rescisão indireta?",
        answer:
          "Nem sempre. Nas hipóteses das alíneas “d” e “g” do artigo 483 da CLT, o § 3º permite ao trabalhador permanecer ou não no serviço até a decisão do processo. Entretanto, o afastamento deve ser avaliado com cuidado, pois a rejeição do pedido pode trazer consequências.",
      },
      {
        question: "Se eu ganhar a ação de rescisão indireta, recebo o FGTS e o seguro-desemprego?",
        answer:
          "O reconhecimento da rescisão indireta pode permitir o saque do FGTS e o recebimento da multa rescisória de 40%. Também pode haver direito ao seguro-desemprego, desde que os requisitos legais sejam cumpridos.",
      },
      {
        question: "Posso pedir rescisão indireta por humilhações no trabalho?",
        answer:
          "Sim, dependendo da gravidade dos acontecimentos. O artigo 483 da CLT prevê situações relacionadas ao rigor excessivo e às ofensas à honra do trabalhador. Gritos constantes, perseguições e humilhações podem justificar o pedido, desde que as circunstâncias sejam devidamente avaliadas.",
      },
    ],
    sources: [
      {
        label: "CLT — Consolidação das Leis do Trabalho",
        url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
      },
    ],
    whatsappMessage:
      "Olá, Fernando! Li o artigo “Rescisão indireta: o que é, como funciona e quais seus direitos?” e gostaria de conversar sobre o meu caso.",
  },
  {
    id: "post-aposentadoria-por-idade",
    slug: "aposentadoria-por-idade-inss-2026-requisitos-valores",
    title: "Aposentadoria por idade INSS 2026: requisitos e valores",
    excerpt:
      "Entenda quem pode se aposentar por idade em 2026, os requisitos para homens e mulheres, o cálculo do benefício e como fazer o pedido ao INSS.",
    field: "previdenciario",
    tags: ["Aposentadoria por idade", "Regras do INSS 2026", "Cálculo da aposentadoria"],
    publishedAt: "2026-11-04",
    status: "published",
    body: [
      {
        type: "answer",
        text: "Em 2026, a aposentadoria por idade urbana exige 62 anos para mulheres e 65 para homens. São necessários 15 anos de contribuição para mulheres e 15 ou 20 para homens, conforme a data de filiação ao INSS. Trabalhadores rurais e pessoas com deficiência possuem requisitos específicos.",
      },
      {
        type: "paragraph",
        text: "Muitas pessoas completam a idade para se aposentar, mas descobrem que ainda precisam comprovar contribuições ao INSS. Outras já poderiam solicitar o benefício, mas desconhecem regras que podem favorecer seu caso. Vou explicar as principais exigências de 2026, as diferenças entre modalidades e os cuidados necessários antes de apresentar o pedido.",
      },
      { type: "heading", text: "Qual é a idade mínima para aposentadoria em 2026?" },
      {
        type: "paragraph",
        text: "A aposentadoria por idade está prevista na Constituição Federal, na Lei nº 8.213/1991 e na Reforma da Previdência de 2019. Na modalidade urbana, a mulher precisa completar 62 anos e o homem, 65 anos. Também devem ser cumpridos os requisitos de contribuição.",
      },
      {
        type: "list",
        items: [
          "Mulher urbana: 62 anos e 15 anos de contribuição.",
          "Homem filiado até 13/11/2019: 65 anos e 15 anos de contribuição.",
          "Homem filiado depois de 13/11/2019: 65 anos e 20 anos de contribuição.",
          "Mulher rural: 55 anos e 15 anos de atividade rural.",
          "Homem rural: 60 anos e 15 anos de atividade rural.",
          "Pessoa com deficiência: 55 anos para mulheres e 60 para homens, com 15 anos de contribuição nessa condição.",
        ],
      },
      {
        type: "paragraph",
        text: "A data da primeira filiação ao INSS é especialmente importante para os homens. Quem já estava vinculado à Previdência antes da Reforma pode precisar de menos tempo de contribuição. Por isso, recomendo verificar o histórico previdenciário antes de concluir que a aposentadoria ainda está distante.",
      },
      { type: "heading", text: "Quais regras da Reforma da Previdência podem ser utilizadas?" },
      {
        type: "paragraph",
        text: "Existem três situações principais: direito adquirido, regra de transição e regra permanente. O direito adquirido protege quem completou os requisitos antigos até 13/11/2019, quando eram exigidos 60 anos para mulheres, 65 para homens e 180 contribuições mensais. A regra de transição atende quem já era filiado nessa data, enquanto a permanente alcança os novos segurados.",
      },
      {
        type: "paragraph",
        text: "Na transição, a idade mínima feminina aumentou progressivamente: 60 anos e seis meses em 2020, 61 anos em 2021, 61 anos e seis meses em 2022 e 62 anos desde 2023. Quem cumpriu as condições anteriormente pode ter direito à regra correspondente àquela época.",
      },
      { type: "heading", text: "Como funciona o cálculo da aposentadoria por idade?" },
      {
        type: "paragraph",
        text: "Nas regras posteriores à Reforma, o cálculo parte da média dos salários de contribuição desde julho de 1994, ou desde a primeira contribuição, quando posterior. Sobre essa média, aplica-se inicialmente 60%, acrescentando 2 pontos percentuais por ano que ultrapassar 15 anos de contribuição para mulheres ou 20 anos para homens.",
      },
      {
        type: "list",
        items: [
          "Mulher com 20 anos de contribuição: 70% da média.",
          "Mulher com 30 anos: 90% da média.",
          "Mulher com 40 anos: 110% da média, respeitado o teto.",
          "Homem com 20 anos: 60% da média.",
          "Homem com 30 anos: 80% da média.",
          "Homem com 40 anos: 100% da média.",
        ],
      },
      {
        type: "paragraph",
        text: "Em 2026, o piso informado é de R$ 1.621,00 e o teto de R$ 8.475,55. Os benefícios acima do mínimo tiveram reajuste de 3,90%, observada a proporcionalidade aplicável. O cálculo ainda pode envolver exclusão de contribuições desfavoráveis e divisor mínimo de 108 meses, conforme a situação previdenciária.",
      },
      { type: "heading", text: "Aposentadoria rural, híbrida e da pessoa com deficiência" },
      {
        type: "paragraph",
        text: "O segurado especial rural pode receber aposentadoria de um salário mínimo mediante comprovação da atividade rural exigida, mesmo sem recolhimentos mensais individuais. Contratos rurais, notas de produtor, documentos do Incra e registros profissionais podem contribuir para essa comprovação. Depoimentos, isoladamente, não substituem a documentação necessária.",
      },
      {
        type: "paragraph",
        text: "Quem trabalhou no campo e na cidade pode avaliar a aposentadoria híbrida, somando períodos rurais e urbanos. Já a aposentadoria por idade da pessoa com deficiência exige comprovação da deficiência durante 15 anos de contribuição e avaliação específica. Seu cálculo segue critérios próprios da Lei Complementar nº 142/2013.",
      },
      { type: "heading", text: "Quais outras regras podem ser mais vantajosas?" },
      {
        type: "paragraph",
        text: "Quem contribuía antes da Reforma também pode verificar as transições por pontos, idade mínima progressiva e pedágios. Em 2026, a regra de pontos exige 93 pontos para mulheres e 103 para homens, além do tempo mínimo correspondente. O pedágio de 100% possui cálculo próprio, baseado na média integral.",
      },
      {
        type: "paragraph",
        text: "Também é importante conferir serviço militar, trabalho rural antigo, períodos especiais e afastamentos por incapacidade intercalados com atividade. Contribuições abaixo do mínimo podem exigir ajustes. Pagamentos em atraso dependem da categoria do segurado e nem sempre são considerados para carência, que é o número mínimo de contribuições exigidas.",
      },
      {
        type: "cta",
        title: "Tem dúvidas sobre o tempo de contribuição registrado no INSS?",
        text: "Envie seu extrato do CNIS pelo WhatsApp para conversar sobre os períodos de trabalho e esclarecer quais regras podem ser aplicáveis ao seu caso.",
        label: "Enviar meu CNIS pelo WhatsApp",
        whatsappMessage:
          "Olá, Fernando! Li o artigo sobre aposentadoria por idade em 2026 e gostaria de enviar meu extrato do CNIS para esclarecer algumas dúvidas sobre meu direito à aposentadoria.",
      },
      { type: "heading", text: "Como solicitar a aposentadoria pelo Meu INSS?" },
      {
        type: "paragraph",
        text: "O pedido pode ser apresentado pelo Meu INSS ou pela Central 135. No aplicativo, procure por “Novo Pedido”, selecione a aposentadoria correspondente, atualize seus dados e anexe os documentos necessários. Recomendo separar a identificação pessoal, carteira de trabalho, comprovantes de contribuição e eventuais documentos rurais ou de atividade especial.",
      },
      {
        type: "paragraph",
        text: "O prazo de análise indicado para aposentadorias é de 90 dias, conforme acordo homologado pelo STF. O início do pagamento depende da categoria e da data do requerimento. Não é obrigatório deixar o emprego para pedir aposentadoria por idade; quem continua trabalhando permanece sujeito às contribuições previdenciárias.",
      },
      { type: "heading", text: "O que fazer antes de apresentar o pedido?" },
      {
        type: "paragraph",
        text: "Minha orientação é conferir o CNIS, verificar eventuais períodos ausentes e comparar as regras disponíveis. Uma aposentadoria pode ser concedida por determinado critério quando outro seria mais interessante. Como a concessão produz consequências duradouras, o planejamento prévio merece atenção.",
      },
      {
        type: "quote",
        text: "A idade é apenas uma parte da aposentadoria: conhecer seu histórico de contribuições ajuda a entender qual regra pode ser aplicada.",
      },
    ],
    faq: [
      {
        question: "Quem nunca contribuiu pode receber algum benefício do INSS?",
        answer:
          "Em regra, a aposentadoria urbana exige contribuições. O segurado especial rural possui regras próprias de comprovação da atividade. Pessoas idosas de baixa renda também podem avaliar o BPC/LOAS, benefício assistencial que não exige contribuições e possui critérios específicos de idade, renda e Cadastro Único.",
      },
      {
        question: "Posso me aposentar se parei de contribuir há vários anos?",
        answer:
          "Sim, dependendo do histórico. A perda da qualidade de segurado não impede automaticamente a aposentadoria por idade quando os requisitos legais estão preenchidos. É necessário conferir especialmente a carência e o tempo de contribuição.",
      },
      {
        question: "Posso pagar contribuições antigas para completar o tempo necessário?",
        answer:
          "Depende da categoria e do período. O contribuinte individual pode precisar comprovar que efetivamente trabalhou. Para o segurado facultativo, existem limitações maiores. Antes de recolher valores atrasados, é importante verificar se eles serão aproveitados para o benefício pretendido.",
      },
      {
        question: "E se o INSS negar minha aposentadoria?",
        answer:
          "O indeferimento (negativa do pedido) deve ser analisado para identificar o motivo. Dependendo das circunstâncias, pode caber recurso administrativo ou ação judicial. Também é importante conferir os dados da carta de concessão quando o benefício for aprovado.",
      },
    ],
    sources: [
      {
        label: "Constituição Federal de 1988",
        url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      },
      {
        label: "Emenda Constitucional nº 103/2019 — Reforma da Previdência",
        url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm",
      },
      {
        label: "Lei nº 8.213/1991 — Planos de Benefícios da Previdência Social",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
      },
      {
        label: "Lei nº 8.212/1991 — Organização da Seguridade Social",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm",
      },
    ],
    whatsappMessage:
      "Olá, Fernando! Li o artigo “Aposentadoria por idade INSS 2026: requisitos e valores” e gostaria de conversar sobre o meu caso.",
  },
];
