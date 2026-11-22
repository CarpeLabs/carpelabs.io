/* Texto da landing, por idioma.
 *
 * A estrutura (ordem das seções e dos resultados) mora em `Landing.astro`, uma vez só. Aqui fica só
 * o que se lê. `en` é declarado com o tipo de `pt`, então uma chave que exista num idioma e falte
 * no outro não compila.
 *
 * O escopo é implantar IA na operação: dimensionar e configurar ferramentas agênticas sobre o
 * sistema que a empresa já usa. Todo texto fala disso; o caso Nipo Center é a prova.
 *
 * As regras de conteúdo valem nos dois idiomas: nada de estrutura interna da Nipo (PARI, "Loja",
 * contagens), nada de preço, contratação ou prazo, e "qualquer sistema / qualquer IA" como oferta. Para o visitante é "sistema", não "ERP";
 * "ERP" só aparece no JSON-LD, onde ajuda a busca.
 */

const pt = {
  lang: 'pt-BR',
  ogLocale: 'pt_BR',
  titulo: 'Carpe Labs · IA para trabalhar na sua operação',
  descricao: 'A Carpe Labs implanta IA na operação da sua empresa: dimensiona e configura ferramentas agênticas que consultam os seus dados e cuidam de tarefas da rotina, em cima do sistema que você já usa. O caso Nipo Center.',
  og: { imagem: '/og-ia.png', alt: 'Carpe Labs: IA para trabalhar na sua operação.' },
  inicio: 'Carpe Labs, início',
  outroIdioma: { href: '/en/', lang: 'en', texto: 'English', rotulo: 'Read this page in English' },

  abertura: {
    titulo: 'Colocamos a IA para trabalhar na sua operação.',
    apoio: 'A Carpe Labs dimensiona e configura ferramentas agênticas, assistentes que consultam os dados da sua empresa e cuidam de tarefas da rotina. Tudo em cima do sistema que você já usa, com limite e registro de cada ação.',
    acao: 'Implantar IA',
    verCaso: 'Ver o caso Nipo Center',
  },

  caso: {
    origemMarca: 'Você veio daqui',
  },

  /* As etapas da implantação de IA, logo abaixo do título: é isso que a Carpe Labs faz. */
  ia: {
    passos: [
      { titulo: 'Mapear', texto: 'Onde a automação ganha tempo na sua operação, e onde ainda não vale a pena.' },
      { titulo: 'Dimensionar', texto: 'Quais ferramentas, para quem, com que acesso aos dados e com qual custo de uso.' },
      { titulo: 'Configurar', texto: 'Os agentes ligados ao seu sistema, com permissões, limites e registro de cada ação.' },
    ],
    acao: 'Quero implantar IA',
  },

  /* O bloco do fluxo: as fontes da empresa alimentando a IA, que devolve respostas e tarefas.
   * Os nomes de produto (Excel, Word, PowerPoint) entram só como texto; os ícones são genéricos. */
  fluxo: {
    titulo: 'Tudo o que a empresa já tem alimenta a IA',
    texto: 'Planilhas, documentos, apresentações, e-mails e o sistema de gestão deixam de ficar espalhados. Tudo é lido junto e volta como respostas e tarefas feitas.',
    rotulo: 'Excel, Word, PowerPoint, PDF, e-mail e o sistema de gestão alimentando a IA, que devolve respostas e tarefas.',
    fontes: ['Excel', 'Word', 'PowerPoint', 'Sistema de gestão', 'E-mail', 'PDF'],
    saida: 'Respostas e tarefas',
  },

  resultados: {
    titulo: 'O que a sua operação ganha',
    intro: 'Não é promessa: na Nipo Center, importadora de São Paulo, isso já roda todo dia, sem trocar de sistema.',
    base: { titulo: 'E a base que sustenta tudo', texto: 'Os dados de cada área em ordem, para quem decide e para os assistentes.' },
    itens: {
      dados: { sistema: 'Assistente de IA', titulo: 'Chega de esperar relatório. Pergunte e tenha a resposta na hora.', texto: 'A gestão pergunta em português e recebe os números do dia, prontos para decidir. Cada pergunta tem limite e fica registrada.' },
      atendimento: { sistema: 'Atendimento no WhatsApp', titulo: 'Atendimento no WhatsApp que não deixa cliente esperando.', texto: 'O simples se resolve na hora, sem ocupar ninguém. O que precisa de atenção chega direto a uma pessoa.' },
      fotos: { sistema: 'Fotos de produto', titulo: 'Catálogo impecável, sem revisar foto por foto.', texto: 'O assistente encontra a foto com problema e já prepara a correção. Sua equipe só aprova antes de publicar.' },
      logistica: { sistema: 'Painel de Logística', titulo: 'A expedição ataca primeiro o que é urgente.', texto: 'Cada pedido, do faturamento à saída, com a prioridade à vista. Nada fica esquecido no meio do caminho.' },
      compras: { sistema: 'Portal de Compras', titulo: 'Compre o que gira. Pare de comprar o que encalha.', texto: 'Cada oportunidade é validada antes do pedido, e as importações são acompanhadas do fornecedor à chegada.' },
      rastreio: { sistema: 'Rastreio de pedido', titulo: 'O cliente acompanha o pedido sozinho, sem ligar.', texto: 'Um link, sem login. Menos telefone tocando para a sua equipe.' },
      vendas: { sistema: 'Painel do vendedor', titulo: 'Cada vendedor chega com a oferta certa para cada cliente.', texto: 'Produto, preço e estoque sugeridos pelo histórico de quem está comprando. Menos tentativa, mais pedido fechado.' },
    },
  },

  metodo: {
    titulo: 'Com controle desde o primeiro dia',
    itens: [
      { titulo: 'O sistema continua o mesmo.', texto: 'Os assistentes trabalham em cima do sistema que você já usa. Nada é migrado, e nada é gravado nele sem autorização.' },
      { titulo: 'Cada agente tem limite.', texto: 'Cada ferramenta recebe só o acesso de que precisa, e cada ação fica registrada.' },
      { titulo: 'Testado antes de entrar na rotina.', texto: 'Cada agente roda antes com uma cópia dos dados reais. Só depois do aceite ele chega a quem usa.' },
    ],
  },

  /* Perguntas que o comprador faz. Só entra o que é verdade hoje: preço, contratação e prazo
   * continuam fora até serem decididos (PRODUCT.md). O mesmo texto vai para a página e para o
   * FAQPage do JSON-LD, então não há como um divergir do outro. */
  perguntas: {
    titulo: 'Perguntas frequentes',
    lista: [
      { p: 'Preciso trocar o sistema que uso?', r: 'Não. As ferramentas são configuradas em cima do sistema de gestão que a empresa já usa, qualquer que seja ele, e ele continua sendo o principal. Nada é migrado nem substituído.' },
      { p: 'Com qual IA funciona?', r: 'Com a que fizer mais sentido para a sua operação: Claude, ChatGPT ou outro assistente. A escolha faz parte do dimensionamento.' },
      { p: 'Os assistentes podem mexer nos dados da empresa?', r: 'Só no que for liberado. Cada ferramenta recebe permissões definidas, com limite e registro de cada ação. Gravar no sistema só acontece com autorização.' },
      { p: 'O que é uma ferramenta agêntica?', r: 'É um assistente que, além de responder, executa tarefas: consulta os dados da empresa, prepara um rascunho, aponta o que precisa de atenção. Cada uma tem limite e registro de cada ação.' },
      { p: 'Vocês atendem empresas fora de São Paulo?', r: 'Sim. A Carpe Labs fica em São Paulo e atende remotamente empresas de todo o Brasil.' },
      { p: 'Como começa?', r: 'Por uma conversa sobre a rotina da empresa, para mapear onde a automação ganha tempo e onde ainda não vale a pena. Use o formulário desta página ou escreva para contact@carpelabs.io.' },
    ],
  },

  contato: {
    titulo: 'Vamos conversar sobre a sua operação',
    intro: 'Conte o que mais toma tempo na sua operação. A resposta vem por e-mail.',
    nome: 'Nome',
    email: 'E-mail',
    mensagem: 'O que mais toma tempo hoje?',
    erroNome: 'Informe seu nome.',
    erroEmail: 'Informe um e-mail válido.',
    erroMensagem: 'Conte o que mais toma tempo hoje.',
    enviar: 'Enviar',
    enviando: 'Enviando…',
    sucesso: 'Mensagem recebida. A resposta vai para o seu e-mail.',
    falha: 'Não foi possível enviar agora. Tente de novo em instantes ou escreva para contact@carpelabs.io.',
    turnstile: 'pt-br',
  },

  rodape: {
    rotulo: 'Links do rodapé',
    privacidade: 'Privacidade',
    termos: 'Termos',
  },

  jsonLd: {
    orgDescricao: 'Implanta IA na operação das empresas: dimensiona e configura ferramentas agênticas sobre o sistema de gestão (ERP) que elas já usam.',
    servicoNome: 'Implantação de IA na operação sobre o sistema de gestão (ERP) existente',
    servicoTipo: 'Dimensionamento e configuração de ferramentas agênticas de IA sobre o sistema de gestão (ERP) da empresa',
    pais: 'Brasil',
    temas: ['Inteligência artificial aplicada à operação', 'Ferramentas agênticas', 'Assistentes de IA', 'Integração com sistemas de gestão (ERP)', 'Atendimento automatizado no WhatsApp'],
  },
};

export type Textos = typeof pt;

const en: Textos = {
  lang: 'en',
  ogLocale: 'en_US',
  titulo: 'Carpe Labs · AI at work in your operation',
  descricao: 'Carpe Labs brings AI into your company’s operation: it sizes and sets up agentic tools that query your data and take care of routine tasks, on top of the system you already use. The Nipo Center case.',
  og: { imagem: '/og-ia-en.png', alt: 'Carpe Labs: AI at work in your operation.' },
  inicio: 'Carpe Labs, home',
  outroIdioma: { href: '/', lang: 'pt-BR', texto: 'Português', rotulo: 'Ler esta página em português' },

  abertura: {
    titulo: 'We put AI to work in your operation.',
    apoio: 'Carpe Labs sizes and sets up agentic tools: assistants that query your company’s data and take care of routine tasks. All on top of the system you already use, with limits and a log of every action.',
    acao: 'Bring in AI',
    verCaso: 'See the Nipo Center case',
  },

  caso: {
    origemMarca: 'You came from here',
  },

  ia: {
    passos: [
      { titulo: 'Map', texto: 'Where automation saves time in your operation, and where it isn’t worth it yet.' },
      { titulo: 'Size', texto: 'Which tools, for whom, with what access to the data and at what usage cost.' },
      { titulo: 'Set up', texto: 'Agents connected to your system, with permissions, limits and a log of every action.' },
    ],
    acao: 'I want to bring in AI',
  },

  fluxo: {
    titulo: 'Everything the company already has feeds the AI',
    texto: 'Spreadsheets, documents, presentations, emails and the management system stop being scattered. It is all read together and comes back as answers and finished tasks.',
    rotulo: 'Excel, Word, PowerPoint, PDF, email and the management system feeding the AI, which returns answers and tasks.',
    fontes: ['Excel', 'Word', 'PowerPoint', 'Management system', 'Email', 'PDF'],
    saida: 'Answers and tasks',
  },

  resultados: {
    titulo: 'What your operation gains',
    intro: 'Not a promise: at Nipo Center, an importer in São Paulo, this already runs every day, without changing systems.',
    base: { titulo: 'And the groundwork that holds it all up', texto: 'Each department’s data in order, for the people who decide and for the assistants.' },
    itens: {
      dados: { sistema: 'AI assistant', titulo: 'No more waiting for reports. Ask and get the answer right away.', texto: 'Management asks in plain language and gets today’s numbers, ready to act on. Every question has limits and is logged.' },
      atendimento: { sistema: 'WhatsApp support', titulo: 'WhatsApp support that never leaves a customer waiting.', texto: 'Simple requests are solved right away, without tying anyone up. What needs attention goes straight to a person.' },
      fotos: { sistema: 'Product photos', titulo: 'A flawless catalog, without checking photo by photo.', texto: 'The assistant finds the photo with a problem and prepares the fix. Your team just approves before it goes live.' },
      logistica: { sistema: 'Logistics dashboard', titulo: 'Shipping tackles what is urgent first.', texto: 'Every order, from invoicing to dispatch, with its priority in plain sight. Nothing gets lost along the way.' },
      compras: { sistema: 'Purchasing portal', titulo: 'Buy what sells. Stop buying what sits on the shelf.', texto: 'Each opportunity is validated before the order, and imports are followed from supplier to arrival.' },
      rastreio: { sistema: 'Order tracking', titulo: 'Customers track their orders on their own, no calls needed.', texto: 'One link, no login. Fewer phone calls for your team.' },
      vendas: { sistema: 'Sales rep dashboard', titulo: 'Every sales rep shows up with the right offer for each customer.', texto: 'Product, price and stock suggested from the history of who is buying. Less guessing, more closed orders.' },
    },
  },

  metodo: {
    titulo: 'Under control from day one',
    itens: [
      { titulo: 'Your system stays the same.', texto: 'The assistants work on top of the system you already use. Nothing is migrated, and nothing is written to it without authorization.' },
      { titulo: 'Every agent has limits.', texto: 'Each tool gets only the access it needs, and every action is logged.' },
      { titulo: 'Tested before it joins the routine.', texto: 'Every agent first runs on a copy of the real data. Only after sign-off does it reach the people who use it.' },
    ],
  },

  perguntas: {
    titulo: 'Frequently asked questions',
    lista: [
      { p: 'Do I need to replace the system I use?', r: 'No. The tools are set up on top of the management system the company already uses, whichever it is, and it remains the main one. Nothing is migrated or replaced.' },
      { p: 'Which AI does it work with?', r: 'Whichever fits your operation best: Claude, ChatGPT or another assistant. Choosing it is part of the sizing.' },
      { p: 'Can the assistants change company data?', r: 'Only what is allowed. Each tool gets defined permissions, with limits and a log of every action. Writing to the system only happens with authorization.' },
      { p: 'What is an agentic tool?', r: 'An assistant that, besides answering, carries out tasks: it queries the company’s data, prepares a draft, points out what needs attention. Each one has limits and a log of every action.' },
      { p: 'Do you work with companies outside São Paulo?', r: 'Yes. Carpe Labs is based in São Paulo and works remotely with companies across Brazil.' },
      { p: 'How does it start?', r: 'With a conversation about the company’s routine, to map where automation saves time and where it is not worth it yet. Use the form on this page or write to contact@carpelabs.io.' },
    ],
  },

  contato: {
    titulo: "Let's talk about your operation",
    intro: 'Tell us what takes up the most time in your operation. We reply by email.',
    nome: 'Name',
    email: 'Email',
    mensagem: 'What takes the most time today?',
    erroNome: 'Enter your name.',
    erroEmail: 'Enter a valid email.',
    erroMensagem: 'Tell us what takes the most time today.',
    enviar: 'Send',
    enviando: 'Sending…',
    sucesso: 'Message received. The reply will go to your email.',
    falha: 'Couldn’t send right now. Try again in a moment or write to contact@carpelabs.io.',
    turnstile: 'en',
  },

  rodape: {
    rotulo: 'Footer links',
    privacidade: 'Privacy (pt-BR)',
    termos: 'Terms (pt-BR)',
  },

  jsonLd: {
    orgDescricao: 'Brings AI into companies’ operations: sizes and sets up agentic tools on top of the management system (ERP) they already use.',
    servicoNome: 'Bringing AI into operations on top of the existing management system (ERP)',
    servicoTipo: 'Sizing and setting up agentic AI tools on top of the company’s management system (ERP)',
    pais: 'Brazil',
    temas: ['AI applied to operations', 'Agentic tools', 'AI assistants', 'Management system (ERP) integration', 'Automated WhatsApp customer service'],
  },
};

export const textos = { pt, en };
export type Idioma = keyof typeof textos;
