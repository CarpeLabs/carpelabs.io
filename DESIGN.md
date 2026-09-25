---
name: carpe labs
description: O caso Nipo Center em primeiro plano — sistemas sobre o ERP que a empresa já tem, provados pelas telas em uso.
colors:
  papel: "#fafaf9"
  tinta: "#111418"
  tinta-2: "#4a5058"
  tinta-3: "#5d646c"
  acento: "#0f5c4a"
  acento-escuro: "#0a4739"
  acento-fundo: "#e2eee9"
  superficie: "#e7ece9"
  regua: "#d6dbd8"
  borda-campo: "#8a938f"
  erro: "#a3261c"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  md: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  secao: "clamp(4rem, 8vw, 7rem)"
  faixa: "clamp(3rem, 6vw, 5.5rem)"
  largura: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.papel}"
    rounded: "{rounded.md}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.acento-escuro}"
  button-primary-disabled:
    backgroundColor: "{colors.tinta-3}"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "0.75rem 0.875rem"
  origem-marca:
    backgroundColor: "{colors.acento-fundo}"
    textColor: "{colors.acento}"
    rounded: "{rounded.pill}"
    padding: "0.125rem 0.5rem"
---

# Design System: carpe labs

## Overview

A página conta como a Nipo Center passou a operar com sistemas construídos sobre o próprio ERP, e **as telas reais fazem a venda**. Tudo o que não é tela recua: papel quase branco, tinta grafite, um único verde-petróleo e régua fina. Recusa a landing escura de software house, o mockup inventado e a moldura de navegador decorativa.

Contrato de direção: `.impeccable/surfaces/src-pages-index-astro.md`. A direção anterior (romaneio em formulário contínuo) foi rejeitada inteira em 25/09/2026.

## Colors

- **Papel `#fafaf9`** é o fundo de tudo; **Superfície `#e7ece9`** só aparece como faixa inteira ("Como o trabalho é feito") e como fundo de imagem enquanto carrega.
- **Tinta `#111418`** para títulos e texto forte. **Tinta 2 `#4a5058`** (7,8:1) para texto corrido. **Tinta 3 `#5d646c`** (5,7:1) só em legenda.
- **Acento `#0f5c4a`** tem três usos e só esses: ação (botão, link do topo), situação "Em produção" e a marca de origem. Papel sobre acento dá 8,1:1.
- **Homologação** fica na Tinta 2 com ponto vazado; nunca ganha o acento.
- **Erro `#a3261c`** só em validação e falha de envio.

## Typography

Uma família só, Schibsted Grotesk (variável, auto-hospedada via `@fontsource-variable`). Hierarquia por tamanho e peso 650 nos títulos, tracking negativo leve (-0,02 a -0,035em), `text-wrap: balance`. Corpo em 1,0625rem / 1,6. Texto corrido limitado a ~34–44rem.

## Layout

- Largura máxima 90rem, gutter `clamp(1rem, 4vw, 3.5rem)`.
- **Abertura:** a partir de 64rem, grade 0,8fr / 1,2fr. Texto à esquerda, tela à direita **sangrando até a borda da janela** (margem negativa calculada), sem borda direita. Abaixo disso, empilha.
- **Faixas de sistema:** a partir de 64rem, texto em coluna de 18rem, fixo (`sticky`) enquanto as telas rolam ao lado; telas sempre em coluna única, grandes o bastante para ler.
- **Também entregues:** lista de linhas separadas por régua; a partir de 48rem, três colunas (nome, uso, situação).
- Seções separadas por régua de 1px ou pela troca para a faixa de Superfície; sem cartões.

## Elevation & Depth

Nenhuma sombra. Profundidade só pela borda de 1px na Régua em volta das telas e pela troca de superfície.

## Shapes

Raio de 6px em telas, botões, campos e mensagens. Pílula só na marca "Você veio daqui". Ponto de 0,5rem na situação (cheio = produção, vazado = homologação).

## Components

- **Tela (figure):** imagem real em WebP 960/1600 com `srcset`, borda 1px Régua, raio 6px, legenda abaixo dizendo o que é e o que foi tarjado. Toda tela nova é captura real, mascarada e conferida pelo José antes de publicar.
- **Botão primário:** acento, 3rem de altura; hover escurece; desabilitado vai para Tinta 3 com `cursor: progress`.
- **Situação:** texto 0,875rem peso 550 com ponto à esquerda.
- **Marca de origem:** pílula Acento Fundo / Acento, inserida por script quando a visita vem de `/de/<ferramenta>`; na lista, a linha inteira ganha o Acento Fundo.
- **Formulário:** campos brancos com borda `#8a938f`, foco em anel de 2px no acento, erro por campo abaixo do input; Turnstile no tema claro.
- **Superfícies do navegador:** seleção em acento, `caret-color` acento, foco visível em anel sólido de 2px, `scrollbar-color` da paleta, sublinhado com offset 0,22em.

## Do's and Don'ts

- **Faça** cada afirmação apontar para uma tela ou sistema que está no ar na Nipo.
- **Faça** a legenda de cada tela declarar o que foi tarjado.
- **Não** publique captura sem máscara conferida (clientes, vendedores, pessoas, fornecedores, valores em R$, parceiros).
- **Não** use moldura de navegador, mockup, sombra, gradiente ou fundo escuro.
- **Não** use o acento para decorar; ele é ação, produção e origem.
- **Não** ponha rótulo acima de título (eyebrow) nem numere seções.
- **Não** invente métrica, depoimento ou logo de cliente.
