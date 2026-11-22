---
name: carpe labs
description: A marca em primeiro plano num mundo monocromático claro (off-white e preto), com o peixe do logo grande e vivo; a única cor da página vem das telas reais da Nipo.
colors:
  fundo: "#f4f4f1"
  fundo-2: "#e9e9e4"
  texto: "#0b0c0e"
  texto-2: "#50545c"
  texto-3: "#686d75"
  regua: "rgba(11, 12, 14, 0.1)"
  regua-forte: "rgba(11, 12, 14, 0.24)"
  botao-hover: "#2a2d33"
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
  micro:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  foco: "2px"
  mensagem: "8px"
  tela: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  secao: "clamp(5rem, 11vw, 10rem)"
  faixa: "clamp(3rem, 6vw, 5rem)"
  largura: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.texto}"
    textColor: "{colors.fundo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.botao-hover}"
  button-primary-disabled:
    backgroundColor: "{colors.texto-3}"
  tela:
    backgroundColor: "{colors.fundo-2}"
    rounded: "{rounded.tela}"
  camada-item:
    textColor: "{colors.texto-2}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  marcador:
    backgroundColor: "{colors.texto}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pill}"
    size: "1.75rem"
  origem-marca:
    backgroundColor: "{colors.texto}"
    textColor: "{colors.fundo}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.7em"
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

A marca vem primeiro. O site é moderno e minimalista: um mundo monocromático **claro**, off-white e preto, o **peixe do logo** (a carpa, de "carpe") desenhado grande e vivo, tipografia fina que ecoa o wordmark e muito espaço entre réguas de 1px. **Não há cor de acento.** A única cor da página vem das telas reais da Nipo, que provam o trabalho. **Não há barra de topo**: o peixe já é a marca. Recusa o pátio de contêineres (rejeitado em 22/11/2026), o papel com verde-petróleo da versão anterior e o escuro de software house com neon.

Contrato de direção: `.impeccable/surfaces/src-pages-index-astro.md`. Contexto de público e prova: `PRODUCT.md`.

O símbolo é um **peixe**, nunca um gato. Está redesenhado como SVG inline (`src/layouts/Landing.astro`), em traço preto, para poder se animar.

## Colors

Escala monocromática; todo o contraste sai da luminância, não do matiz.

- **Fundo `#f4f4f1`** é a página inteira: off-white, nunca branco puro. **Fundo 2 `#e9e9e4`** aparece atrás das telas (enquanto a imagem carrega) e na linha da marca de origem.
- **Texto `#0b0c0e`** em títulos, ações e o que importa. **Texto 2 `#50545c`** no corpo secundário. **Texto 3 `#686d75`** em legenda, rodapé e estado desabilitado.
- **Réguas:** preto a 10% (`rgba(11,12,14,.1)`) separa linhas e seções, e também é o halo de 3px do ponto de produção; preto a 24% (`.24`) marca o início de listas, bordas de campo e chips.
- **Hover do botão `#2a2d33`**, um passo acima do preto.
- **Barra de rolagem `#c4c7cc`**, o único cinza fora da escala, para o `scrollbar-color`.
- **Erro `#b3261e`** só em validação e falha de envio; a borda da mensagem de erro é o mesmo tom a 35%.
- **Cor real:** as capturas da Nipo são o único lugar com cor. Nada na interface compete com elas.

## Typography

Uma família só: **Hanken Grotesk Variable** (auto-hospedada), com `font-feature-settings: 'ss01'`. Hierarquia por tamanho, não por peso: **títulos em 300** com tracking negativo de **-0,035 a -0,04em** (o mais apertado no h1 e no título do contato), `line-height` de 1 a 1,02, `text-wrap: balance`. Corpo em 400, 1,0625rem / 1,6, `text-wrap: pretty`. Texto corrido limitado a 30–44rem.

Degraus em uso: `clamp(2.75rem, 5.8vw, 5.75rem)` (h1 e título do contato), `clamp(2.5rem, 5vw, 4.5rem)` (h2), `clamp(2rem, 3.4vw, 3rem)` (h3 de sistema), 1,375rem (nome de camada, de item e de método), 1,1875rem (apoio e resumo de pergunta), 1,0625rem (corpo), 1rem (botão, peso 600), 0,9875rem (notas), 0,9375rem (rótulo, legenda, link de idioma), 0,875rem (situação e chips, peso 500), 0,8125rem (marca de origem, ligação entre camadas, com tracking 0,04em). Botão e marcadores em 600; nome da camada do ERP em 500.

## Layout

- Largura máxima 90rem; `--dentro` = `max(gutter, (100vw - 90rem) / 2)`. Gutter `clamp(1.25rem, 4vw, 3.5rem)`. **Sem cabeçalho fixo.**
- **Abertura** ocupa `100svh`, com respiro superior `clamp(4.5rem, 8vw, 6rem)`. A partir de 64rem, duas colunas (1,05fr texto / 0,95fr peixe), peixe à direita em até 40rem. Abaixo disso, o peixe vai para cima (62% da largura, máx. 20rem) e o texto empilha. O **link de idioma** é pequeno e absoluto no canto superior direito da abertura; há outro no rodapé.
- **Vitrine:** a primeira tela real, logo abaixo da abertura, em largura total.
- **Caso:** introdução em duas colunas a partir de 64rem; camadas (IA, portais, ERP) como linhas separadas por régua, em três colunas (nome, descrição, itens) a partir de 64rem.
- **Sistemas:** a partir de 64rem, texto em coluna de 22rem, fixo (`sticky`) enquanto as telas rolam ao lado; telas em coluna única.
- **Também entregues:** linhas de régua; a partir de 56rem, três colunas (nome, uso, situação).
- **Método:** três colunas a partir de 56rem. **Perguntas:** título fixo à esquerda a partir de 64rem. **Contato:** duas colunas a partir de 64rem; formulário em duas colunas a partir de 40rem.
- Ritmo vertical `clamp(5rem, 11vw, 10rem)` entre seções; seções internas de sistema em `clamp(3rem, 6vw, 5rem)`.
- Sem cartões: réguas finas e espaço fazem a separação.

## Elevation & Depth

**Sem sombras difusas, em lugar nenhum.** A profundidade vem de três coisas: o contorno de 1px (`outline` de 10%, com `outline-offset: -1px`) que desenha a borda de cada tela, o passo de `#f4f4f1` para `#e9e9e4`, e a régua. O marcador numerado leva um anel sólido de 3px na cor do fundo só para se separar da captura, e o ponto de produção um anel sólido de 3px a 10%: recortes, não sombra.

## Shapes

- **Telas:** raio de **10px**, `overflow: hidden`, contorno de 1px na régua.
- **Botões, chips, marcadores e marca de origem:** pílula de **999px**. Pontos de situação são círculos de 0,5rem.
- **Mensagem de formulário:** 8px. **Foco visível:** anel sólido de 2px, offset 4px, raio 2px.
- **Campos** não têm caixa: só uma linha inferior de 1px (24% de preto).
- Situação: ponto **cheio = em produção**, ponto **vazado = em homologação**.

## Components

- **Símbolo (peixe):** SVG inline de traço preto (`stroke="currentColor"`, `viewBox="480 470 930 680"`), três traços, um corpo cheio e um olho. **Desenha-se uma vez na chegada** (`stroke-dashoffset`, 1400ms, traços escalonados 250ms; o corpo cheio aparece em 1100ms, o olho em 1300ms) e depois **acompanha de leve o cursor**: o conjunto desloca até 22px × 16px e o olho 14px × 10px a mais, via `--mx` e `--my`. Sem ponteiro fino ou com movimento reduzido, fica parado.
- **Idioma:** link de texto 0,9375rem em `Texto 2`, posição absoluta no canto superior direito da abertura; sublinha no hover. Repetido na navegação do rodapé.
- **Botão primário:** pílula preta (`#0b0c0e`) com texto off-white, 3,25rem de altura, peso 600. Hover vai a `#2a2d33` e a seta anda 4px; no clique comprime a 0,97; desabilitado vai a `#686d75` com `cursor: progress`.
- **Link:** `Texto 2`, sublinhado em 24%, que escurece no hover.
- **Tela (figure):** imagem real, raio 10px, contorno de 1px, legenda abaixo em `Texto 3` dizendo o que é e o que foi tarjado. Toda captura é real, mascarada e conferida antes de publicar.
- **Marcador e notas:** círculo preto de 1,75rem com número off-white, posicionado em % sobre a captura, no canto do elemento anotado (nunca em cima do dado). Entra em sequência depois da tela.
- **Camadas:** três linhas separadas por régua (IA, portais, ERP) com chips em pílula de 24%; os de "outras" em contorno tracejado. O verbo da relação ("↓ consulta") fica na linha de ligação, em 0,8125rem. A IA leva um pequeno círculo vazado no nome (homologação).
- **Situação:** texto 0,875rem peso 500, com ponto à esquerda (cheio com halo = produção; vazado = homologação).
- **Perguntas:** `details`/`summary` nativos entre réguas, "+" desenhado com dois gradientes que gira 135° ao abrir, altura animada por `::details-content` onde há suporte. O texto é o mesmo do `FAQPage` do JSON-LD.
- **Formulário:** campos só com linha inferior (hover em `Texto 2`, foco em preto com 2px), erro por campo em `#b3261e` abaixo do input, mensagem geral em 8px com borda de 24% (sucesso) ou de erro a 35%. Turnstile em tema claro.
- **Marca de origem:** pílula preta com texto off-white, inserida por script quando a visita vem de `/de/<ferramenta>`; na lista, a linha ganha o `Fundo 2`.
- **Rodapé:** régua superior, parágrafo de entidade em `Texto 3` ao lado da navegação (com o link de idioma) e, por fim, **o logo completo em tamanho de cartaz** (até 64rem de largura), exibido como é, sem filtro, fechando a página.
- **Movimento:** tudo condicionado a `.anima`, posta pelo script inline do `<head>` quando há `IntersectionObserver`; sem JS nada some. Chegada: h1, apoio e ações sobem 1,25rem em 900ms com atrasos de 150/300/420ms. Ao rolar: títulos (`titulo`) sobem 1,25rem, telas (`tela`) sobem 3rem com escala de 0,97, listas (`lista`) entram com 70ms entre itens. Curva `cubic-bezier(0.22, 1, 0.36, 1)`. **Movimento reduzido: só opacidade em 300ms**, sem desenho do peixe, deslocamento nem rastreio do cursor.

## Do's and Don'ts

- **Faça** o peixe grande e vivo: é a marca. Chame-o de peixe (carpa), nunca de gato.
- **Faça** a cor vir só das telas reais; a interface fica em escala de cinza.
- **Faça** títulos finos (300) e apertados; quem dá peso é o tamanho.
- **Faça** cada afirmação apontar para uma tela ou sistema no ar na Nipo, e a legenda declarar o que foi tarjado.
- **Não** crie cor de acento, gradiente nem brilho. Não use branco puro de fundo: é off-white.
- **Não** volte com a barra de topo fixa.
- **Não** use sombra. Profundidade é contorno de 1px e troca de tom.
- **Não** use cartões; use régua e espaço.
- **Não** arredonde a tela além de 10px, nem quadre o botão: pílula é botão, 10px é tela.
- **Não** publique captura sem máscara conferida (clientes, vendedores, pessoas, fornecedores, valores em R$, parceiros).
- **Não** ponha marcador em cima do dado que ele anota.
- **Não** ponha rótulo acima de título (eyebrow) nem numere seções.
- **Não** invente métrica, depoimento ou logo de cliente.
- **Não** anime fora de `.anima`; com movimento reduzido, só opacidade.
