---
name: carpe labs
description: A marca em primeiro plano num mundo claro (off-white e preto), com o peixe do logo grande e vivo; o verde de marca aparece só onde está a IA e nas ações.
colors:
  fundo: "#f4f4f1"
  fundo-2: "#e9e9e4"
  texto: "#0b0c0e"
  texto-2: "#50545c"
  texto-3: "#686d75"
  regua: "rgba(11, 12, 14, 0.1)"
  regua-forte: "rgba(11, 12, 14, 0.24)"
  verde: "#2e6b55"
  verde-escuro: "#24563f"
  verde-claro: "#7fc4a6"
  barra-rolagem: "#c4c7cc"
  erro: "#b3261e"
  erro-borda: "rgba(179, 38, 30, 0.35)"
typography:
  hero:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.8vw, 5.75rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  resultado-destaque:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  card-title:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
  selo:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  foco: "2px"
  mensagem: "8px"
  cartao: "clamp(1rem, 1.8vw, 1.5rem)"
  bloco: "clamp(1.25rem, 2.5vw, 2.25rem)"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  secao: "clamp(5rem, 11vw, 10rem)"
  faixa: "clamp(3rem, 6vw, 5rem)"
  largura: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.verde}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.verde-escuro}"
  button-primary-disabled:
    backgroundColor: "{colors.texto-3}"
  bloco:
    backgroundColor: "{colors.fundo-2}"
    rounded: "{rounded.bloco}"
  cartao:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.texto}"
    rounded: "{rounded.cartao}"
  cartao-destaque:
    backgroundColor: "{colors.texto}"
    textColor: "{colors.fundo}"
    typography: "{typography.resultado-destaque}"
    rounded: "{rounded.cartao}"
  cartao-base:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    rounded: "{rounded.cartao}"
  selo-ia:
    backgroundColor: "{colors.verde}"
    textColor: "#ffffff"
    typography: "{typography.selo}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.65rem"
  selo-ia-destaque:
    backgroundColor: "{colors.verde-claro}"
    textColor: "{colors.texto}"
    typography: "{typography.selo}"
    rounded: "{rounded.pill}"
  campo:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    padding: "0.6rem 0"
  form-message-error:
    textColor: "{colors.erro}"
    rounded: "{rounded.mensagem}"
    padding: "0.9rem 1rem"
---

# Design System: carpe labs

## Overview

A marca vem primeiro, e a oferta é uma só: **implantar IA na operação**. O site é moderno e minimalista: um mundo **claro**, off-white e preto, o **peixe do logo** (a carpa, de "carpe") desenhado grande e vivo, tipografia fina que ecoa o wordmark e muito espaço. Cada seção depois da abertura é um **bloco arredondado** sobre o fundo. Há **uma só cor de destaque, o verde de marca**, reservada ao que é IA e às ações: o resto é escala de cinza. As telas reais da Nipo não aparecem mais; a prova é o texto do caso. Recusa o pátio de contêineres (rejeitado em 22/11/2026), o papel com verde-petróleo da versão anterior e o escuro de software house com neon.

Contrato de direção: `.impeccable/surfaces/src-pages-index-astro.md`. Contexto de público e prova: `PRODUCT.md`.

O símbolo é um **peixe**, nunca um gato. Está redesenhado como SVG inline (`src/layouts/Landing.astro`), em traço, para poder se animar e "voar" até o header.

## Colors

Escala neutra para estrutura e texto; o verde é o único matiz.

- **Fundo `#f4f4f1`** é a página: off-white, nunca branco puro, e também a superfície dos cartões. **Fundo 2 `#e9e9e4`** é a superfície de cada bloco de seção.
- **Texto `#0b0c0e`** em títulos e no que importa; é também a superfície do cartão de destaque do Assistente de IA. **Texto 2 `#50545c`** no corpo secundário. **Texto 3 `#686d75`** em legenda, rodapé e botão desabilitado.
- **Verde `#2e6b55`** é o verde de marca, com contraste de **5,8:1** sobre o fundo. **Verde escuro `#24563f`** é o hover do botão. **Verde claro `#7fc4a6`** vale sobre superfície escura (selo "IA" do cartão de destaque). Onde o verde aparece: botões (`.botao`, `.topo-link`), símbolo (peixe), nome "carpe labs" no header e no rodapé, selo "IA", a palavra "IA" do h1 (`.forte`) e o núcleo e as partículas do fluxo. Em nenhum outro lugar.
- **Única exceção:** os seis blocos de ícone das fontes do fluxo (`#fluxo`) levam uma cor cada (verde, azul, laranja, roxo, ciano e vermelho, definidas em `Landing.astro`) só para distinguir Excel, Word, PowerPoint, sistema, e-mail e PDF, com símbolo genérico e sem logotipo de terceiros. Não viram cor da interface.
- **Réguas:** preto a 10% (`rgba(11,12,14,.1)`) separa linhas; preto a 24% (`.24`) marca o início de listas, bordas de campo e de cartão da base, e as linhas do fluxo.
- **Barra de rolagem `#c4c7cc`**, o único cinza fora da escala, para o `scrollbar-color`.
- **Erro `#b3261e`** só em validação e falha de envio; a borda da mensagem de erro é o mesmo tom a 35%.
- **Selo e botão** levam texto branco sobre o verde; sobre o preto do destaque, o selo usa o verde claro com texto preto.

## Typography

Uma família só: **Hanken Grotesk Variable** (auto-hospedada), com `font-feature-settings: 'ss01'`. Hierarquia por tamanho e por **escala de peso**: **300** só nos títulos grandes (h1, h2, título do contato), que ecoam o wordmark, com tracking de **-0,035 a -0,04em**, `line-height` de 1 a 1,02 e `text-wrap: balance`; quanto menor o título, mais peso ganha, para não sumir: **400** no título do destaque e no subtítulo do grupo, **500** nos títulos de cartão, de etapa, de método e de pergunta. A palavra "IA" do h1 (`.forte`) vai em **500** e em verde. Corpo em 400, 1,0625rem / 1,6, `text-wrap: pretty`; botão e selo em 600. Texto corrido limitado a 26–44rem.

Degraus em uso: `clamp(2.75rem, 5.8vw, 5.75rem)` (h1 e título do contato), `clamp(2.5rem, 5vw, 4.5rem)` (h2), `clamp(2rem, 4.6vw, 3.75rem)` (título do destaque), `clamp(1.75rem, 3.2vw, 2.5rem)` (subtítulo do grupo), `clamp(1.5rem, 2.3vw, 1.875rem)` (título de cartão), 1,625rem (etapa), 1,375rem (método), 1,1875rem (apoio e pergunta), 1,0625rem (corpo), 1rem (botão), 0,9375rem (rótulo, idioma, texto da base), 0,875rem (meta), 0,75rem (selo e área, com tracking 0,08em).

## Layout

- Largura máxima 90rem; `--dentro` = `max(gutter, (100vw - 90rem) / 2)`. Gutter `clamp(1.25rem, 4vw, 3.5rem)`.
- **Header fixo e discreto:** transparente no início; quando o peixe pousa nele, ganha fundo off-white translúcido com desfoque e régua inferior. Mostra o peixe, o nome "carpe labs" em verde, o link de idioma e o botão verde (que some enquanto o botão da abertura está à vista).
- **Abertura** com respiro superior `clamp(6rem, 12vh, 9rem)`. A partir de 64rem, duas colunas (1,05fr texto / 0,95fr peixe, até 40rem). Abaixo disso o peixe vai para cima (48% da largura, máx. 15rem) e tudo centraliza. Fecha com as três etapas (mapear, dimensionar, configurar) em linhas de régua, três colunas a partir de 56rem.
- **Blocos:** depois da abertura, cada seção (`#fluxo`, `#resultados`, método, perguntas, contato) é um painel `Fundo 2` com raio `clamp(1.25rem, 2.5vw, 2.25rem)`, margem lateral que o abre um pouco além da coluna e o mesmo respiro interno.
- **`#fluxo`:** texto à esquerda e diagrama à direita (0,85fr / 1,15fr) a partir de 64rem.
- **`#resultados`:** cabeça em duas colunas; cartão de destaque em largura total, cartões de IA em duas colunas a partir de 40rem, subtítulo do grupo e a "base por trás" em duas colunas.
- **Método:** três colunas a partir de 56rem. **Perguntas:** título fixo (`sticky`) à esquerda a partir de 64rem. **Contato:** duas colunas a partir de 64rem; nome, e-mail e mensagem, com o formulário em duas colunas a partir de 40rem.
- Ritmo vertical `clamp(5rem, 11vw, 10rem)` dentro das seções.

## Elevation & Depth

**Sem sombras difusas.** A profundidade vem da troca de superfície (`#f4f4f1` para `#e9e9e4` para `#0b0c0e`), dos cantos arredondados e da régua. O único `box-shadow` é um anel sólido de 2px em verde na linha de origem (`.resultado.origem`): recorte, não sombra.

## Shapes

- **Blocos de seção:** raio `clamp(1.25rem, 2.5vw, 2.25rem)`. **Cartões:** `clamp(1rem, 1.8vw, 1.5rem)`.
- **Botões, selos e marca de origem:** pílula de **999px**.
- **Mensagem de formulário:** 8px. **Foco visível:** anel sólido de 2px em preto, offset 4px, raio 2px.
- **Campos** não têm caixa: só uma linha inferior de 1px (24% de preto).

## Components

- **Símbolo (peixe):** SVG inline de traço (`stroke="currentColor"`, `viewBox="480 470 930 680"`), em verde, três traços, um corpo cheio e um olho. **Desenha-se uma vez na chegada** (`stroke-dashoffset`, 1400ms, traços escalonados 250ms; corpo cheio em 1100ms, olho em 1300ms) e depois **acompanha de leve o cursor** (até 22px × 16px; o olho 14px × 10px a mais). Conforme a página desce, o peixe **"voa" até o header** e pousa no encaixe do logo; sem JS, o header mostra o logo parado.
- **Header:** peixe (encaixe `.topo-slot`), nome "carpe labs" em verde peso 300, link de idioma e `.topo-link` verde em pílula.
- **Botão (`.botao`):** pílula verde (`#2e6b55`) com texto branco, 3,25rem de altura, peso 600. Hover vai a `#24563f` e a seta anda 4px; no clique comprime a 0,97; desabilitado vai a `#686d75`.
- **Link:** `Texto 2`, sublinhado em 24%, que escurece no hover.
- **Etapas da abertura:** três itens com número, título em 500 e texto curto, entre réguas.
- **Fluxo (`#fluxo`):** SVG com seis fontes (Excel, Word, PowerPoint, Sistema de gestão, E-mail, PDF) como cartões `Fundo` com ícone em bloco colorido genérico, ligadas por linhas à IA no centro (núcleo verde com "IA" em branco e órbitas tracejadas que giram) e, abaixo, a saída "Respostas e tarefas". **A montagem é ligada à rolagem:** `--p` (0 a 1) vem do script conforme o diagrama sobe; cada fonte tem o seu trecho, desliza de fora e acende a linha dela, a IA cresce no centro e por último saem as respostas e correm as partículas verdes. O núcleo pulsa; fora da tela as animações param.
- **Cartão de destaque (Assistente de IA):** superfície preta, texto off-white, título grande em 400 e selo "IA" em verde claro; ocupa a largura toda.
- **Cartão de resultado com selo "IA":** superfície `Fundo`, selo verde, título em 500, texto em `Texto 2` e meta em `Texto 3`.
- **Base por trás (Logística e Rastreio):** subtítulo de grupo e cartões transparentes com borda de 24%, rótulo de área em caixa alta pequena, texto curto. Sem selo: não é IA, é a base de dados.
- **Perguntas:** `details`/`summary` nativos entre réguas, "+" desenhado com dois gradientes que gira 135° ao abrir, altura animada por `::details-content` onde há suporte. O texto é o mesmo do `FAQPage` do JSON-LD.
- **Formulário:** nome, e-mail e mensagem, só com linha inferior (hover em `Texto 2`, foco em preto), erro por campo em `#b3261e` abaixo do input, mensagem geral em 8px com borda de 24% (sucesso) ou de erro a 35%. Turnstile em tema claro.
- **Marca de origem:** pílula verde com texto branco, inserida por script quando a visita vem de `/de/<ferramenta>`; o cartão da ferramenta ganha anel verde de 2px.
- **Rodapé:** régua superior, símbolo e nome "carpe labs" em verde, navegação (com o link de idioma) e linha de entidade em `Texto 3`.
- **Movimento:** tudo condicionado a `.anima`, posta pelo script inline do `<head>` quando há `IntersectionObserver`; sem JS nada some. **Cada bloco é um painel com `data-anima="secao"` e entra inteiro, uma única vez**, ao começar a aparecer: sobe 7rem, cresce de 0,92 a 1 e ganha opacidade (900/1200ms). **Depois, as listas (`data-anima="lista"`) entram em sequência**, com 90ms entre itens, sobem 2,5rem saindo do desfoque. Títulos (`data-anima="titulo"`) entram palavra por palavra. Na chegada, h1, apoio e ações sobem 1,25rem. Curva `cubic-bezier(0.22, 1, 0.36, 1)`. **Movimento reduzido: só opacidade em 300ms**, sem desenho do peixe, deslocamento, rastreio do cursor nem partículas.

## Do's and Don'ts

- **Faça** o peixe grande e vivo: é a marca. Chame-o de peixe (carpa), nunca de gato.
- **Faça** o verde `#2e6b55` ser a cor de destaque, **só ligado à IA e às ações** (botão, símbolo, nome da marca, selo "IA", palavra "IA", fluxo). O resto fica em escala de cinza (a única exceção são os blocos de ícone das seis fontes do fluxo).
- **Faça** títulos finos (300) nos grandes e mais pesos (400 a 500) conforme o título diminui.
- **Faça** cada seção um bloco arredondado, que entra inteiro uma vez.
- **Faça** cada afirmação apontar para algo que está no ar na Nipo, sem citar o Sankhya nem a estrutura interna.
- **Não** use verde em decoração, em texto corrido nem em algo que não seja IA ou ação. Sem segunda cor de destaque, gradiente nem brilho.
- **Não** use branco puro de fundo: é off-white.
- **Não** use sombra difusa. Profundidade é troca de superfície, canto arredondado e régua.
- **Não** crie cartões fora da seção de resultados; as demais seções usam régua e espaço dentro do bloco.
- **Não** quadre o botão: pílula é botão e selo.
- **Não** ponha rótulo acima de título (eyebrow) nem numere seções.
- **Não** invente métrica, depoimento ou logo de cliente.
- **Não** anime fora de `.anima`; com movimento reduzido, só opacidade.
