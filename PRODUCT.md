# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Comprador principal:** dono ou diretor de empresa média com operação física real (atacado,
importação, distribuição) que roda sobre um ERP legado. Chega ao site avaliando se pode confiar
dados e processos de produção a um fornecedor. Decide por confiança e por prova de entrega, não
por stack técnica.

**Visitante já qualificado:** quem clica em "construído por carpe labs" no rodapé de um portal da
Nipo em uso. Já conhece o trabalho por dentro; chega pelas rotas `/de/<ferramenta>`.

## Product Purpose

O carpelabs.io existe para fazer esse comprador entrar em contato. Sucesso é uma mensagem pelo
formulário (ou pelo e-mail) de alguém com operação e ERP parecidos com os da Nipo.

## Positioning

A CarpeLabs constrói as duas camadas juntas: **portais e integrações sobre o ERP que a empresa já
tem** (sem trocá-lo e sem arriscar produção) e **IA aplicada à operação em cima desses dados**. A
base de dados e portais é o que torna a IA útil; uma sem a outra não é a oferta. O que sustenta a
afirmação é um cliente com vários sistemas em produção, entregues de forma contínua.

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
- **Idiomas: pt-BR e inglês.** Hoje só existe pt-BR; a estrutura da versão em inglês (rotas,
  seletor, o que é traduzido) está **em aberto**.
- **Em aberto:** preço, modelo de contratação e prazo típico — nada disso pode aparecer até ser
  decidido.

## Brand Commitments

- Nome escrito como wordmark "carpe labs", em minúsculas; símbolo do gato em `public/logo.png`.
- A empresa aparece como marca institucional, **sem pessoas**: sem nomes, fotos ou biografia de
  equipe.
- Contato público: `contact@carpelabs.io`; organização no GitHub `CarpeLabs`.

## Evidence on Hand

**Cliente âncora, citável com nome e telas: Nipo Center** (importadora em São Paulo; o grupo
inclui a PARI). Tudo lê o ERP Sankhya em modo somente leitura. Sistemas entregues (fonte: o
monorepo `nipo_projects`):

- Em produção: portal de Compras, painel de Logística (matriz e filial, com TVs operacionais),
  portal de Fotos de produto e Rastreio de pedido para o cliente final (público).
- Em homologação: o gateway Nipo Dados, que deixa Claude e ChatGPT consultarem os dados da Nipo e
  da PARI (homologação aceita); painel do vendedor; autoatendimento no WhatsApp com console do
  atendente; e o broker de WhatsApp.

Capturas de tela podem ir a público **com dados de clientes, parceiros e pessoas mascarados**.

**Não existe e não pode ser inventado:** depoimento, métrica de resultado, logos de outros
clientes, prêmios, imprensa. Só a Nipo é caso publicável por enquanto.

## Product Principles

1. Prova antes de promessa: cada afirmação aponta para algo que está no ar na Nipo.
2. Falar a língua da operação (pedido, expedição, estoque, ERP), não a de agência de IA.
3. Um caso profundo vale mais que uma vitrine rasa.
4. Quem chega de um portal já é qualificado; a página não o trata como visitante frio.
