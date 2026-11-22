# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Comprador principal:** dono ou diretor de empresa média com operação física real (atacado,
importação, distribuição) que roda sobre um ERP ou sistema de gestão que já usa. Chega ao site avaliando se pode confiar
dados e processos de produção a um fornecedor. Decide por confiança e por prova de entrega, não
por stack técnica.

**Visitante já qualificado:** quem clica em "construído por carpe labs" no rodapé de um portal da
Nipo em uso. Já conhece o trabalho por dentro; chega pelas rotas `/de/<ferramenta>`.

## Product Purpose

O carpelabs.io existe para fazer esse comprador entrar em contato. Sucesso é uma mensagem pelo
formulário (ou pelo e-mail) de alguém com operação e ERP parecidos com os da Nipo.

## Positioning

A carpe labs **implanta IA na operação**: dimensiona e configura ferramentas agênticas, assistentes
de IA que consultam os dados da empresa e cuidam de tarefas da rotina, em cima do ERP ou sistema de
gestão que ela já usa, **qualquer que seja ele**. Nada é migrado, e nada é gravado no sistema sem
autorização; cada agente tem limite de acesso e registro de cada ação. Os dados organizados por área
(logística, rastreio) são a **base** que faz a IA funcionar, não uma segunda oferta. A oferta é uma
só: implantar IA. O que sustenta a afirmação é um cliente com IA já trabalhando na rotina, a Nipo
Center. A IA pode ser Claude, ChatGPT ou outra; a escolha faz parte do dimensionamento.

## Operating Context

- O comprador compara fornecedores em poucos minutos, muitas vezes indicado por alguém.
- O visitante que vem de um portal chega com contexto: acabou de usar uma ferramenta feita pela
  CarpeLabs.

## Capabilities and Constraints

- Astro 5, publicado no Cloudflare Pages (projeto `carpelabs-io`, config em `wrangler.toml`).
- Formulário de contato em `functions/api/contato.ts`: grava no D1 `carpelabs-contato` antes de
  avisar por Resend, com Turnstile verificado no servidor. Não regredir esse fluxo.
- Rotas `/de/<ferramenta>` servem a landing num caminho que o Cloudflare Web Analytics conta; a
  lista espelha o `origemAssinatura` de `nipo-ui/consumers.json` do repositório `nipo_projects`.
- Páginas legais (`/privacidade`, `/termos`, `/exclusao-de-dados`) existem para o app da Meta e
  precisam continuar publicadas.
- **Idiomas: pt-BR (`/`) e inglês (`/en/`)**, o mesmo layout com o texto em `src/i18n/landing.ts`.
  As rotas `/de/<ferramenta>` e as páginas legais ficam só em português.
- **Em aberto:** preço, modelo de contratação e prazo típico — nada disso pode aparecer até ser
  decidido.

## Brand Commitments

- Nome escrito como wordmark "carpe labs", em minúsculas; o símbolo é um **peixe** (carpa, de "carpe") em `public/logo.png`.
- A empresa aparece como marca institucional, **sem pessoas**: sem nomes, fotos ou biografia de
  equipe.
- Contato público: `contact@carpelabs.io`; organização no GitHub `CarpeLabs`.

## Evidence on Hand

**Cliente âncora, citável com nome: Nipo Center** (importadora em São Paulo; o grupo inclui a
PARI). Contexto interno: tudo lê o ERP Sankhya em modo somente leitura, e os sistemas vêm do
monorepo `nipo_projects`. **A página pública não cita o Sankhya nem a estrutura interna da Nipo**
(PARI, "Loja", contagens, matriz e filial); para o visitante é "sistema", e "ERP" só aparece no
JSON-LD.

**Usos de IA que a página cita** (cada um aponta para algo que existe na Nipo):

- **Assistente de IA** para a gestão: pergunta em português sobre os dados do dia e recebe a
  resposta na hora, com limite e registro de cada pergunta (o gateway Nipo Dados, que deixa Claude e
  ChatGPT consultarem os dados; homologação aceita).
- **Atendimento no WhatsApp:** a IA resolve o que é simples e passa para uma pessoa o que precisa de
  atenção.
- **Revisão de fotos de produto:** a IA aponta a foto com problema e prepara a correção; uma pessoa
  aprova antes de publicar.
- **Compras:** a IA recomenda o que comprar e o que deixar de comprar, valida cada oportunidade
  antes do pedido e apoia as importações, do fornecedor à chegada.
- **Vendedor:** a IA mostra a melhor oferta personalizada para cada cliente, com produto, preço e
  estoque escolhidos pelo histórico de quem compra.

**A base por trás** (dados por área, sem selo de IA): painel de Logística (cada pedido, do
faturamento à saída, com a prioridade à vista) e Rastreio de pedido para o cliente final, por link,
sem login.

Estado interno (não vai à página como situação): Compras, Logística, Fotos e Rastreio em produção;
Nipo Dados, painel do vendedor e autoatendimento no WhatsApp (com o broker) em homologação. A página
não declara essa situação.

A página também descreve o método (o sistema continua o mesmo; cada agente tem limite; testado com
uma cópia dos dados reais antes de entrar na rotina) e quatro perguntas frequentes. Ver
`src/i18n/landing.ts`.

**Não existe e não pode ser inventado:** depoimento, métrica de resultado, logos de outros
clientes, prêmios, imprensa, **preço, prazo e modelo de contratação**. Só a Nipo é caso publicável
por enquanto. Capturas de tela não são mais usadas na página; se voltarem, com dados de clientes,
parceiros e pessoas mascarados.

## Product Principles

1. Prova antes de promessa: cada afirmação aponta para algo que está no ar na Nipo.
2. Falar a língua da operação (pedido, expedição, estoque, compra), não a de agência de IA.
3. Um caso profundo vale mais que uma vitrine rasa; uma oferta só, implantar IA.
4. Quem chega de um portal já é qualificado; a página não o trata como visitante frio.
