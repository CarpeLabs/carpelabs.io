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
  fechamento: "#0a3f33"
  fechamento-2: "#c9ddd5"
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
  palco: "14px"
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
- **Erro `#a3261c`** só em validação e falha de envio no fundo claro; no fechamento, o erro é `#ffb8ad`.
- **Fechamento `#0a3f33`**: a seção de contato, fim da página. Texto em papel, secundário em `#c9ddd5` (9,6:1), botão invertido (papel com texto no fechamento), foco em `#9fd3bf`.
- **Camadas:** a IA em contorno tracejado de acento (homologação), os portais em acento cheio, o ERP em Tinta.

## Typography

Uma família só, Schibsted Grotesk (variável, auto-hospedada via `@fontsource-variable`). Hierarquia por tamanho e peso 650 nos títulos, tracking negativo leve (-0,02 a -0,035em), `text-wrap: balance`. Corpo em 1,0625rem / 1,6. Texto corrido limitado a ~34–44rem.

## Layout

- Largura máxima 90rem, gutter `clamp(1rem, 4vw, 3.5rem)`.
- **Abertura:** a partir de 64rem, grade 0,8fr / 1,2fr. Texto à esquerda, tela à direita **sangrando até a borda da janela** (margem negativa calculada), sem borda direita. Abaixo disso, empilha.
- **Faixas de sistema:** a partir de 64rem, texto em coluna de 18rem, fixo (`sticky`) enquanto as telas rolam ao lado; telas sempre em coluna única, grandes o bastante para ler.
- **Também entregues:** lista de linhas separadas por régua; a partir de 48rem, três colunas (nome, uso, situação).
- Seções separadas por régua de 1px ou pela troca para a faixa de Superfície; sem cartões.

## Elevation & Depth

Uma sombra só, e só nas telas: `0 1px 2px rgba(17,20,24,.06), 0 18px 40px -16px rgba(17,20,24,.28)`. Ela põe a captura "sobre a mesa" do palco de Superfície. Nada mais tem sombra; o marcador leva um anel de papel de 3px para se destacar da tela.

## Shapes

Raio de 6px em telas, botões, campos e mensagens. Pílula só na marca "Você veio daqui". Ponto de 0,5rem na situação (cheio = produção, vazado = homologação).

## Components

- **Palco:** painel de Superfície com raio 14px; na abertura sangra para a direita e sobrepõe duas telas reais (a de trás a 55% de opacidade e dessaturada).
- **Marcador e notas:** círculo de acento com número, posicionado em % sobre a tela, no canto do elemento que anota (nunca em cima do dado). A legenda ao lado repete o número; passar o mouse na legenda acende o marcador. Os marcadores entram em sequência (140ms entre eles) depois da cortina da tela.
- **Faixa cinética:** entre a abertura e o caso, os nomes dos sistemas em 650 (até 5,5rem) e o lema "sobre o ERP que já existe" em acento, em sentidos opostos; `aria-hidden`.
- **Camadas:** três blocos empilhados (IA, portais, ERP) ligados por linha vertical com o verbo da relação ("consulta", "lê, sem escrever").
- **Tela (figure):** imagem real em WebP 960/1600 com `srcset`, borda 1px Régua, raio 6px, legenda abaixo dizendo o que é e o que foi tarjado. Toda tela nova é captura real, mascarada e conferida pelo José antes de publicar.
- **Botão primário:** acento, 3rem de altura; hover escurece; desabilitado vai para Tinta 3 com `cursor: progress`.
- **Situação:** texto 0,875rem peso 550 com ponto à esquerda.
- **Marca de origem:** pílula Acento Fundo / Acento, inserida por script quando a visita vem de `/de/<ferramenta>`; na lista, a linha inteira ganha o Acento Fundo.
- **Formulário:** campos brancos com borda `#8a938f`, foco em anel de 2px no acento, erro por campo abaixo do input; Turnstile no tema claro.
- **Movimento** (`global.css`, seção Movimento; tudo condicionado a `.anima`, posta pelo script inline do `<head>`, então sem JS nada some):
  - Chegada: `em-uso` esmaece; h1, apoio e ações sobem 1,25rem em 800ms com 60/160/240ms de atraso; o palco abre por `clip-path` da direita (900ms); a tela da frente sai de `blur(8px)` e sobe (360ms de atraso); a de trás desliza por último.
  - Ao rolar (IntersectionObserver, limiar 0,2): títulos sobem com desfoque; camadas de baixo para cima (ERP 0ms, linha 380ms, portais 620ms, linha 1000ms, IA 1240ms); telas em cortina esquerda→direita (1s) e depois os marcadores com onda única; listas com 70ms entre itens; a régua do método se desenha.
  - Ligado à rolagem: o script do `<head>` escreve `--p` (0→1, com ease-out cúbico) em cada `[data-rolagem]` a cada quadro de rolagem. Tipos: `sai` (abertura: texto sobe 5rem e esmaece, palco recua 7%), `sobe` (5rem + opacidade), `cresce` (telas: 7rem e escala 0,9→1), `secao` (método e contato: `clip-path` de cartão com 6vw de margem e raio 3rem até a largura toda), `faixa` (faixa cinética: sistemas deslizam 38% para a esquerda, lema no sentido oposto). O valor-padrão de cada `var(--p, …)` é o estado final. `--rolado` alimenta a barra de leitura de 2px no topo.
  - Nunca usar `clip-path` zerado no elemento observado (o observador não o vê) nem transicionar recorte para `none` (salta).
  - Microinterações: seta do botão anda 4px no hover, botão comprime a 0,97 no clique, topo fixo ganha régua e encolhe a marca ao rolar.
  - Movimento reduzido: só opacidade em 300ms, sem deslocamento, recorte ou desfoque.
- **Superfícies do navegador:** seleção em acento, `caret-color` acento, foco visível em anel sólido de 2px, `scrollbar-color` da paleta, sublinhado com offset 0,22em.

## Do's and Don'ts

- **Faça** cada afirmação apontar para uma tela ou sistema que está no ar na Nipo.
- **Faça** a legenda de cada tela declarar o que foi tarjado.
- **Não** publique captura sem máscara conferida (clientes, vendedores, pessoas, fornecedores, valores em R$, parceiros).
- **Não** use moldura de navegador, mockup, gradiente, nem sombra fora das telas. O único fundo escuro é o fechamento.
- **Não** ponha marcador em cima do dado que ele anota.
- **Não** use o acento para decorar; ele é ação, produção e origem.
- **Não** ponha rótulo acima de título (eyebrow) nem numere seções.
- **Não** invente métrica, depoimento ou logo de cliente.
