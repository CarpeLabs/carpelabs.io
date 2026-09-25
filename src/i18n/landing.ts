/* Texto da landing, por idioma.
 *
 * A estrutura (quais sistemas, quais telas, onde cada marcador fica na imagem) mora em
 * `Landing.astro`, uma vez só. Aqui fica só o que se lê. `en` é declarado com o tipo de `pt`, então
 * uma chave que exista num idioma e falte no outro não compila — e as notas de cada tela são
 * conferidas contra as posições no build (ver `Landing.astro`).
 *
 * As regras de conteúdo valem nos dois idiomas: nada de estrutura interna da Nipo (PARI, "Loja",
 * contagens), nada de preço, contratação ou prazo, e "qualquer ERP / qualquer IA" como oferta.
 */

const pt = {
  lang: 'pt-BR',
  ogLocale: 'pt_BR',
  titulo: 'carpe labs · sistemas sobre o ERP que sua empresa já tem',
  descricao: 'Portais, integrações e IA aplicada à operação, construídos em cima do ERP que a empresa já usa, qualquer que seja ele. O caso Nipo Center, com as telas em uso.',
  og: { imagem: '/og.png', alt: 'Sistemas sobre o ERP que sua empresa já tem, com a tela de produtividade do painel de Logística da Nipo Center.' },
  inicio: 'carpe labs, início',
  outroIdioma: { href: '/en/', lang: 'en', texto: 'English', rotulo: 'Read this page in English' },

  abertura: {
    emUso: 'Em uso na Nipo Center',
    erp: 'ERP Sankhya, somente leitura',
    titulo: 'Sistemas sobre o ERP que sua empresa já tem.',
    apoio: 'Portais, integrações e IA aplicada à operação, construídos em cima dos seus dados. Sem trocar o ERP, qualquer que seja ele, e sem arriscar a produção.',
    acao: 'Iniciar um projeto',
    verCaso: 'Ver o caso Nipo Center',
    palcoAlt: 'Tela Quem produziu ontem, do painel de Logística da Nipo: pessoas do checkout com pedidos, carrinhos, linhas e unidades do dia; nomes tarjados.',
    palcoLegenda: 'Painel de Logística da Nipo Center, em uso. Nomes de pessoas e clientes tarjados.',
  },
  faixaLema: 'sobre o ERP que já existe',

  caso: {
    titulo: 'O caso Nipo Center',
    intro: 'A Nipo Center é uma importadora de São Paulo que roda sobre o ERP Sankhya. Em vez de trocar o sistema, ela ganhou portais que leem o ERP em modo somente leitura e entregam a cada área a tela que faltava. Em cima desses dados, a IA passa a consultar a operação.',
    camadas: {
      rotulo: 'As duas camadas construídas sobre o ERP',
      ia: { nome: 'IA aplicada à operação', desc: 'Funciona com qualquer assistente de IA, com limite e registro de cada consulta.', outras: 'qualquer outra IA' },
      consulta: 'consulta',
      portais: { nome: 'Portais e integrações', desc: 'A tela que faltava para cada área.', itens: ['Logística', 'Compras', 'Fotos', 'Rastreio'] },
      le: 'lê, sem escrever',
      erp: { nome: 'Seu ERP', desc: 'Qualquer que seja ele, continua sendo o sistema da empresa. Nada é trocado.', caso: 'No caso Nipo, o Sankhya.' },
    },
    outros: 'Também entregues',
    origemMarca: 'Você veio daqui',
  },

  situacao: { producao: 'Em produção', homologacao: 'Em homologação' },

  sistemas: {
    logistica: {
      nome: 'Painel de Logística',
      texto: 'Matriz e filial acompanham cada pedido do faturamento à expedição. O mesmo painel mostra a ocupação de cada endereço do galpão e roda nas TVs da operação.',
      telas: {
        fluxo: {
          alt: 'Tabela de pedidos do painel de Logística, com situação, etapa e número de cada pedido; nomes de cliente e vendedor tarjados.',
          legenda: 'Fluxo de pedidos. Cliente e vendedor tarjados.',
          notas: [
            'Situação pelo tempo logístico, contado só dentro do expediente.',
            'O que a operação precisa priorizar agora, pedido a pedido.',
          ],
        },
        armazenagem: {
          alt: 'Vista em três dimensões da armazenagem, com os andares e os endereços coloridos pela ocupação.',
          legenda: 'Armazenagem em 3D, com a ocupação de cada endereço por cor. Parceiro tarjado.',
          notas: [
            'Endereço acima do limite aparece em vermelho, antes de virar problema.',
            'Cada andar e cada endereço do galpão, no lugar onde está.',
          ],
        },
      },
    },
    compras: {
      nome: 'Portal de Compras',
      texto: 'O time de compras decide a reposição sobre um espelho analítico do ERP, por grupo e por fornecedor.',
      telas: {
        compras: {
          alt: 'Visão da carteira no portal de Compras, com produtos para decidir por grupo e ranking de fornecedores; nomes de fornecedor e valores em reais tarjados.',
          legenda: 'Visão da carteira. Fornecedores e valores tarjados.',
          notas: [
            'Ruptura em destaque: o que já falta na prateleira.',
            'Quantas decisões cada grupo e subgrupo tem pela frente.',
            'Fornecedores ordenados pela exposição: lead time × itens em ruptura.',
          ],
        },
      },
    },
  },

  semTela: {
    fotos: { nome: 'Fotos de produto', texto: 'Upload, análise e decisão humana sobre a foto de cada item do catálogo.' },
    rastreio: { nome: 'Rastreio de pedido', texto: 'O cliente final acompanha o próprio pedido por link, sem login.' },
    dados: { nome: 'Nipo Dados', texto: 'Claude, ChatGPT ou qualquer outro assistente de IA consulta os dados da operação, com limite e registro.' },
    vendas: { nome: 'Painel do vendedor', texto: 'Estoque, preço e pedido na mão de quem vende.' },
    atendimento: { nome: 'Atendimento no WhatsApp', texto: 'Autoatendimento para o cliente e console para o atendente.' },
  },

  metodo: {
    titulo: 'Como o trabalho é feito',
    itens: [
      { titulo: 'O ERP continua sendo o ERP.', texto: 'Os sistemas leem o Sankhya em modo somente leitura, e cada consulta nova é medida antes de ir para produção. Nada escreve no banco do cliente sem autorização.' },
      { titulo: 'Tudo passa por homologação.', texto: 'Cada versão roda antes num ambiente de teste com uma cópia dos dados reais. Só depois do aceite ela chega a quem usa, com nota do que mudou.' },
      { titulo: 'IA depois dos dados, não antes.', texto: 'Primeiro os dados ficam organizados e confiáveis nos portais. Depois a IA passa a consultá-los, com limite e registro de cada consulta.' },
    ],
  },

  /* Perguntas que o comprador faz. Só entra o que é verdade hoje: preço, contratação e prazo
   * continuam fora até serem decididos (PRODUCT.md). O mesmo texto vai para a página e para o
   * FAQPage do JSON-LD, então não há como um divergir do outro. */
  perguntas: {
    titulo: 'Perguntas frequentes',
    lista: [
      { p: 'Preciso trocar o meu ERP?', r: 'Não. Os sistemas são construídos em cima do ERP que a empresa já usa, e ele continua sendo o sistema principal. Nada é migrado nem substituído.' },
      { p: 'Funciona com qualquer ERP?', r: 'Sim. O caso publicado é sobre o Sankhya, mas o trabalho parte dos dados que o seu ERP já guarda, qualquer que seja ele. A primeira conversa define como esses dados vão ser lidos com segurança.' },
      { p: 'Os sistemas mexem nos dados do ERP?', r: 'Na Nipo Center, os portais leem o ERP em modo somente leitura, e cada consulta nova é medida antes de ir para produção. Escrever no ERP só acontece com autorização explícita.' },
      { p: 'Onde entra a IA?', r: 'Depois dos dados. Primeiro os portais deixam os dados organizados e confiáveis; depois a IA passa a consultá-los, com limite e registro de cada consulta.' },
      { p: 'Funciona com qual IA?', r: 'Com qualquer uma. Claude e ChatGPT já consultam os dados no caso publicado, e outros assistentes de IA entram pelo mesmo caminho, com os mesmos limites e o mesmo registro.' },
      { p: 'Como uma versão nova chega a quem usa?', r: 'Cada versão roda antes num ambiente de homologação com uma cópia dos dados reais. Só depois do aceite ela vai para produção, com uma nota do que mudou.' },
      { p: 'Vocês atendem fora de São Paulo?', r: 'Sim. A carpe labs fica em São Paulo (SP) e atende remotamente empresas de qualquer cidade ou estado do Brasil.' },
      { p: 'Como começa um projeto?', r: 'Pelo formulário desta página ou pelo e-mail contact@carpelabs.io. Conte o que a sua operação precisa e qual ERP ela usa; a resposta vem pelo e-mail informado.' },
    ],
  },

  contato: {
    titulo: 'Iniciar um projeto',
    intro: 'Conte o que a sua operação precisa e qual ERP ela usa. A resposta vem pelo e-mail informado.',
    alt: 'Prefere e-mail?',
    nome: 'Nome',
    email: 'E-mail',
    mensagem: 'O que você precisa',
    erroNome: 'Informe seu nome.',
    erroEmail: 'Informe um e-mail válido.',
    erroMensagem: 'Descreva o que você precisa.',
    enviar: 'Enviar',
    enviando: 'Enviando…',
    sucesso: 'Mensagem recebida. A resposta vai para o seu e-mail.',
    falha: 'Não foi possível enviar agora. Tente de novo em instantes ou escreva para contact@carpelabs.io.',
    turnstile: 'pt-br',
  },

  rodape: {
    entidade: 'A carpe labs constrói portais, integrações e IA aplicada à operação sobre o ERP que a empresa já usa, qualquer que seja ele. Fica em São Paulo (SP) e atende remotamente todo o Brasil. O caso publicado é a Nipo Center, importadora de São Paulo que roda sobre o Sankhya.',
    rotulo: 'Links do rodapé',
    privacidade: 'Privacidade',
    termos: 'Termos',
  },

  jsonLd: {
    orgDescricao: 'Constrói portais, integrações e IA aplicada à operação sobre o ERP que a empresa já usa.',
    servicoNome: 'Sistemas sobre o ERP existente',
    servicoTipo: 'Desenvolvimento de portais, integrações e IA aplicada à operação sobre ERP',
    pais: 'Brasil',
  },
};

export type Textos = typeof pt;

const en: Textos = {
  lang: 'en',
  ogLocale: 'en_US',
  titulo: 'carpe labs · systems built on the ERP your company already runs',
  descricao: 'Portals, integrations and AI applied to operations, built on top of the ERP a company already uses, whichever it is. The Nipo Center case, with the screens in use.',
  og: { imagem: '/og-en.png', alt: 'Systems built on the ERP your company already runs, with the productivity screen from Nipo Center’s logistics dashboard.' },
  inicio: 'carpe labs, home',
  outroIdioma: { href: '/', lang: 'pt-BR', texto: 'Português', rotulo: 'Ler esta página em português' },

  abertura: {
    emUso: 'In use at Nipo Center',
    erp: 'Sankhya ERP, read-only',
    titulo: 'Systems built on the ERP your company already runs.',
    apoio: 'Portals, integrations and AI applied to operations, built on top of your data. Without replacing your ERP, whichever it is, and without putting production at risk.',
    acao: 'Start a project',
    verCaso: 'See the Nipo Center case',
    palcoAlt: 'The “Who produced yesterday” screen from Nipo’s logistics dashboard: checkout staff with the day’s orders, carts, lines and units; names redacted.',
    palcoLegenda: 'Nipo Center’s logistics dashboard, in use. Names of people and customers redacted. The screens are in Portuguese.',
  },
  faixaLema: 'on the ERP you already have',

  caso: {
    titulo: 'The Nipo Center case',
    intro: 'Nipo Center is an importer based in São Paulo that runs on the Sankhya ERP. Instead of replacing the system, it got portals that read the ERP in read-only mode and give each department the screen it was missing. On top of that data, AI now queries the operation.',
    camadas: {
      rotulo: 'The two layers built on top of the ERP',
      ia: { nome: 'AI applied to operations', desc: 'Works with any AI assistant, with limits and a log of every query.', outras: 'any other AI' },
      consulta: 'queries',
      portais: { nome: 'Portals and integrations', desc: 'The screen each department was missing.', itens: ['Logistics', 'Purchasing', 'Photos', 'Tracking'] },
      le: 'reads, never writes',
      erp: { nome: 'Your ERP', desc: 'Whichever it is, it remains the company’s system. Nothing gets replaced.', caso: 'In the Nipo case, Sankhya.' },
    },
    outros: 'Also delivered',
    origemMarca: 'You came from here',
  },

  situacao: { producao: 'In production', homologacao: 'In acceptance testing' },

  sistemas: {
    logistica: {
      nome: 'Logistics dashboard',
      texto: 'The main warehouse and the branch follow every order from invoicing to shipping. The same dashboard shows how full each warehouse location is and runs on the operation’s TVs.',
      telas: {
        fluxo: {
          alt: 'Order table from the logistics dashboard, with the status, stage and number of each order; customer and sales rep names redacted.',
          legenda: 'Order flow. Customer and sales rep redacted.',
          notas: [
            'Status by logistics time, counted only within business hours.',
            'What the operation needs to prioritize right now, order by order.',
          ],
        },
        armazenagem: {
          alt: 'Three-dimensional view of the warehouse storage, with levels and locations colored by occupancy.',
          legenda: 'Storage in 3D, with each location’s occupancy shown by color. Partner redacted.',
          notas: [
            'A location over its limit turns red before it becomes a problem.',
            'Every level and every location in the warehouse, right where it is.',
          ],
        },
      },
    },
    compras: {
      nome: 'Purchasing portal',
      texto: 'The purchasing team decides on restocking from an analytical mirror of the ERP, by product group and by supplier.',
      telas: {
        compras: {
          alt: 'Portfolio view in the purchasing portal, with products to decide on by group and a supplier ranking; supplier names and amounts in reais redacted.',
          legenda: 'Portfolio view. Suppliers and amounts redacted.',
          notas: [
            'Stockouts highlighted: what is already missing from the shelf.',
            'How many decisions each group and subgroup has ahead.',
            'Suppliers ranked by exposure: lead time × items out of stock.',
          ],
        },
      },
    },
  },

  semTela: {
    fotos: { nome: 'Product photos', texto: 'Upload, analysis and a human decision on the photo of every catalog item.' },
    rastreio: { nome: 'Order tracking', texto: 'End customers follow their own order through a link, no login needed.' },
    dados: { nome: 'Nipo Dados', texto: 'Claude, ChatGPT or any other AI assistant queries the operation’s data, with limits and a log.' },
    vendas: { nome: 'Sales rep dashboard', texto: 'Stock, prices and orders in the hands of the people who sell.' },
    atendimento: { nome: 'WhatsApp support', texto: 'Self-service for customers and a console for support agents.' },
  },

  metodo: {
    titulo: 'How the work is done',
    itens: [
      { titulo: 'The ERP stays the ERP.', texto: 'The systems read Sankhya in read-only mode, and every new query is measured before it goes to production. Nothing writes to the client’s database without authorization.' },
      { titulo: 'Everything goes through acceptance testing.', texto: 'Every version first runs in a test environment with a copy of the real data. Only after sign-off does it reach the people who use it, with a note on what changed.' },
      { titulo: 'AI after the data, not before.', texto: 'First the data becomes organized and reliable in the portals. Then AI starts querying it, with limits and a log of every query.' },
    ],
  },

  perguntas: {
    titulo: 'Frequently asked questions',
    lista: [
      { p: 'Do I need to replace my ERP?', r: 'No. The systems are built on top of the ERP the company already uses, and it remains the main system. Nothing is migrated or replaced.' },
      { p: 'Does it work with any ERP?', r: 'Yes. The published case is about Sankhya, but the work starts from the data your ERP already stores, whichever it is. The first conversation defines how that data will be read safely.' },
      { p: 'Do the systems change data in the ERP?', r: 'At Nipo Center, the portals read the ERP in read-only mode, and every new query is measured before it goes to production. Writing to the ERP only happens with explicit authorization.' },
      { p: 'Where does AI come in?', r: 'After the data. First the portals make the data organized and reliable; then AI starts querying it, with limits and a log of every query.' },
      { p: 'Which AI does it work with?', r: 'Any of them. Claude and ChatGPT already query the data in the published case, and other AI assistants come in the same way, with the same limits and the same log.' },
      { p: 'How does a new version reach users?', r: 'Every version first runs in an acceptance environment with a copy of the real data. Only after sign-off does it go to production, with a note on what changed.' },
      { p: 'Do you work outside São Paulo?', r: 'Yes. carpe labs is based in São Paulo, Brazil, and works remotely with companies in any city or state in the country.' },
      { p: 'How does a project start?', r: 'Through the form on this page or by email at contact@carpelabs.io. Tell us what your operation needs and which ERP it runs; the reply goes to the email you provide.' },
    ],
  },

  contato: {
    titulo: 'Start a project',
    intro: 'Tell us what your operation needs and which ERP it runs. The reply goes to the email you provide.',
    alt: 'Prefer email?',
    nome: 'Name',
    email: 'Email',
    mensagem: 'What you need',
    erroNome: 'Enter your name.',
    erroEmail: 'Enter a valid email.',
    erroMensagem: 'Describe what you need.',
    enviar: 'Send',
    enviando: 'Sending…',
    sucesso: 'Message received. The reply will go to your email.',
    falha: 'Couldn’t send right now. Try again in a moment or write to contact@carpelabs.io.',
    turnstile: 'en',
  },

  rodape: {
    entidade: 'carpe labs builds portals, integrations and AI applied to operations on top of the ERP a company already uses, whichever it is. It is based in São Paulo, Brazil, and works remotely across the country. The published case is Nipo Center, a São Paulo importer that runs on Sankhya.',
    rotulo: 'Footer links',
    privacidade: 'Privacy (pt-BR)',
    termos: 'Terms (pt-BR)',
  },

  jsonLd: {
    orgDescricao: 'Builds portals, integrations and AI applied to operations on top of the ERP a company already uses.',
    servicoNome: 'Systems built on the existing ERP',
    servicoTipo: 'Development of portals, integrations and AI applied to operations on top of an ERP',
    pais: 'Brazil',
  },
};

export const textos = { pt, en };
export type Idioma = keyof typeof textos;
