---
name: carpe labs
description: A landing como romaneio de entregas — sistemas sobre o ERP que a Nipo Center já usa, conferidos e carimbados.
colors:
  papel: "#f3f4ee"
  zebra: "#e0e9d9"
  tinta: "#1d2126"
  tinta-2: "#4b525a"
  carbono: "#2c4a9e"
  carbono-fundo: "#e4e9f5"
  furo: "#c8cbc1"
  regua: "#b3b8ad"
  erro: "#a3261c"
typography:
  display:
    fontFamily: "Doto, ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 4.5vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Doto, ui-monospace, monospace"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: "2.1875rem"
    letterSpacing: "0.02em"
  title:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: "1.75rem"
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1.75rem"
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "6px"
spacing:
  linha: "1.75rem"
  meia-linha: "0.875rem"
  tracao: "2.75rem"
  tracao-compacta: "1.25rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.carbono}"
    rounded: "{rounded.md}"
    padding: "0 1.75rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.carbono}"
    textColor: "{colors.papel}"
    rounded: "{rounded.md}"
  input-text:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "0"
  input-text-focus:
    backgroundColor: "{colors.carbono-fundo}"
    textColor: "{colors.tinta}"
    rounded: "0"
  badge-status-producao:
    backgroundColor: "transparent"
    textColor: "{colors.carbono}"
  badge-status-homologacao:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-2}"
---

# Design System: carpe labs

## Overview

**Creative North Star: "O Romaneio em Formulário Contínuo"**

O site é um único documento: um romaneio de entregas impresso em papel contínuo, com furos de tração nas duas margens e uma cabeça de impressão matricial que datila os cabeçalhos e os números. Não é uma landing de software house com promessa de IA — é a prova, linha por linha, do que já foi entregue a um cliente nomeado (Nipo Center), com situação honesta ("em produção" ou "homologação"). A página se comporta como papel: zebrada para leitura de tabela longa, sem cartões, sem sombra, sem brilho. A única cor viva é o azul de carbono, reservada para o que importa conferir — o carimbo de ação, o status "em produção", o foco de formulário.

O movimento é o mesmo gesto do documento: as linhas do romaneio são impressas em sequência na chegada, como a cabeça de uma matricial passando da esquerda para a direita, uma vez só, depois param. `prefers-reduced-motion` desliga o efeito e entrega tudo já pronto. Rotação leve (-1.5° no carimbo, -3° na etiqueta de origem) imita o desalinhamento físico de um carimbo real e se resolve para 0° quando a peça é acionada — a única correção de "postura" que o sistema pratica.

**Key Characteristics:**
- Papel contínuo com furos de tração e picote como único divisor de seção.
- Dois alfabetos com papéis fixos: Doto (matricial) para dados de registro; Schibsted Grotesk para tudo que se lê em voz alta.
- Zero elevação: nenhuma `box-shadow`, nenhum blur, no arquivo inteiro.
- Uma única cor de ação (azul de carbono), usada com parcimônia.
- Uma única animação, disparada uma vez, desligável por preferência do sistema.

## Colors

Paleta de papel e tinta: fundo claro quase bege, tinta quase preta, e um único azul de carbono para o que precisa ser notado.

### Primary
- **Azul de Carbono** (`#2c4a9e`): a única cor de ação do sistema — o carimbo "Iniciar um projeto"/"Enviar solicitação", a borda dupla em volta dele, `::selection`, o anel de foco (`outline` tracejado), a cor do texto e da linha inferior quando um campo ganha foco, o status "Em produção" e a marca "Você veio daqui" na linha de origem.
- **Fundo de Carbono** (`#e4e9f5`): tinta pálida do azul, usada só como o fundo do campo de formulário quando ele está em foco — nunca como bloco de cor isolado.

### Secondary
- **Vermelho de Erro** (`#a3261c`): exclusivo de estado de validação — borda inferior de campo inválido, texto de erro do campo, mensagem de falha de envio. Não aparece fora de erro.

### Neutral
- **Papel** (`#f3f4ee`): fundo da folha e do `body`.
- **Zebra** (`#e0e9d9`): verde-sálvia pálido, faixa alternada das linhas ímpares do romaneio — a única variação de fundo fora do papel e do azul.
- **Tinta** (`#1d2126`): cor do texto corrido e das réguas estruturais (bordas de 2px do cabeçalho, do rodapé e do rodapé da tabela); também a cor-fonte de `public/logo-papel.png` (ver Componentes → Cabeçalho).
- **Tinta Suave** (`#4b525a`): texto secundário — rótulos de campo, cabeçalhos de coluna, status "Homologação", links do rodapé em repouso.
- **Furo** (`#c8cbc1`): cor de fundo do `<html>` por trás da folha e cor dos furos de tração; é o que a margem "recorta" contra o papel.
- **Régua** (`#b3b8ad`): linhas tracejadas — a borda entre furo e papel, o picote entre seções, as pautas do `textarea`.

### Named Rules
**The One Blue Rule.** O azul de carbono só aparece onde algo precisa ser conferido ou acionado: uma ação, um status positivo, um foco, uma seleção. Fora disso a página é papel e tinta.

## Typography

**Display/Matricial Font:** Doto (com fallback `ui-monospace, monospace`)
**Body Font:** Schibsted Grotesk Variable (com fallback `system-ui, sans-serif`)

**Character:** Doto é a cabeça de impressão matricial — só peso 800, sempre maiúsculo, `tabular-nums`, reservada a dados de registro. Schibsted Grotesk é a voz humana da página: todo texto corrido, todo rótulo e, deliberadamente, todo botão e badge de status — mesmo quando o HTML os marca com a classe `.matricial`, a regra específica do componente sobrescreve a família de volta para Schibsted (ver Named Rule abaixo).

### Hierarchy
- **Display** (800, `clamp(2.25rem, 4.5vw, 4.25rem)`, altura de linha 1.02): o título da oferta (`h1`), em Doto maiúsculo.
- **Headline** (800, 1.75rem, altura de linha 2.1875rem): os títulos de seção ("O que já está entregue…", "Como o trabalho é feito", "Solicitação de projeto"), em Doto maiúsculo.
- **Title** (700, 1.125rem, altura de linha 1.75rem): o nome do sistema na tabela (`<th>` do romaneio) e o título de cada item em "Como o trabalho é feito" — ambos em Schibsted Grotesk, nunca Doto.
- **Body** (400, 1.0625rem, altura de linha 1.75rem): parágrafos correntes. O texto de oferta sobe para 1.25rem mas mantém peso e família. Larguras de linha contidas por `ch` (44ch na oferta, 52ch na coluna "Para quê", 60ch na solicitação, 38ch nas observações).
- **Label** (600, 0.75rem, maiúsculo, `letter-spacing: 0.08em`): rótulos de campo do cabeçalho do documento, cabeçalhos de coluna da tabela, `<label>` de formulário, links do rodapé.

### Named Rules
**The Two Voices Rule.** Doto fala pelo sistema (números de item, cabeçalhos, valores de campo do documento); Schibsted Grotesk fala pelas pessoas (parágrafos, nomes de sistema, rótulos, botões, status). Um componente que parece "de registro" mas precisa ser lido em voz alta — como o carimbo de ação ou o badge de situação — usa Schibsted Grotesk em peso 800 maiúsculo, não Doto: do Doto só se importa o peso 800.

## Layout

A folha (`.folha`, `max-width: 76rem`, centralizada) descansa sobre um fundo mais escuro (`--furo`) que a moldura em furos de tração. Toda a página é regida por uma única unidade de ritmo, `--linha: 1.75rem` — a "linha de impressão": alturas de linha, paddings de seção e o espaçamento de grade quase sempre são múltiplos dela (1.5×, 2×, 3×, 4×).

As margens de tração (`--tracao: 2.75rem` no desktop, `1.25rem` a partir de 720px) trazem furos circulares repetidos a cada `--linha` (`radial-gradient` de `--furo`) com um traço pontilhado (`--regua`) separando a margem do papel. O único divisor de seção é o **picote**: uma régua tracejada de 2px que atravessa a largura total da tela (inclusive por baixo da margem de tração) antes de "Como o trabalho é feito" e de "Solicitação de projeto". A tabela do romaneio e a oferta não têm divisor — correm como um só bloco de abertura.

**Breakpoints observados:**
- `960px`: o cabeçalho empilha em uma coluna; a grade de três observações vira uma coluna.
- `720px`: a tração encolhe para `1.25rem` e os furos ficam menores/mais próximos; a tabela do romaneio vira uma ficha por item (cabeçalho de coluna oculto visualmente, mas acessível); o formulário vira uma coluna.

### Named Rules
**The Line Rule.** Todo espaçamento vertical de seção é um múltiplo de `--linha` (1.75rem). Um valor de espaçamento fora dessa escala quebra o ritmo do papel contínuo.

## Elevation & Depth

Sistema inteiramente plano: nenhuma `box-shadow`, `filter` ou `blur` existe em `global.css`. Profundidade é sugerida por três recursos, todos de tinta e não de luz: réguas sólidas de 2px (limite do cabeçalho, do rodapé e do pé da tabela), o traço duplo de 3px do carimbo e do contorno "carimbado" da linha de origem, e a alternância zebrada do papel. Foco de campo é comunicado por mudança de cor (linha inferior + fundo tingido de carbono), nunca por sombra.

### Named Rules
**The Flat Paper Rule.** Nenhum elemento projeta sombra. Onde outro sistema usaria elevação, este usa régua, traço duplo ou contraste de tinta.

## Shapes

A folha é predominantemente retilínea — cantos retos na tabela, nos campos de formulário e nas margens. Duas exceções deliberadas quebram essa regra: o carimbo de ação (`border-radius: 6px`, `{rounded.md}`) e a etiqueta "Você veio daqui" (`border-radius: 4px`, `{rounded.sm}`). Campos de texto e `textarea` são explicitamente sem caixa e sem raio (`border-radius: 0`): só uma linha inferior de 2px faz as vezes de contorno — a "régua" do formulário, não um retângulo.

Rotação leve é o outro recurso de forma do sistema: o carimbo repousa girado -1.5° e a etiqueta de origem, -3°, imitando o desalinhamento de um carimbo de borracha real. O carimbo se endireita (0°) no hover e no active; a etiqueta de origem não se move.

## Components

### Buttons ("Carimbo")
- **Shape:** `border-radius: 6px` (`{rounded.md}`), borda dupla de 3px (`border: 3px double var(--carbono)`), girado -1.5° em repouso.
- **Primary (única variante existente):** fundo transparente, texto e borda em `--carbono`, texto em Schibsted Grotesk 800 maiúsculo (`letter-spacing: 0.08em`, 1rem), altura mínima 3.5rem, padding horizontal 1.75rem.
- **Hover / Focus:** fundo preenche com `--carbono`, texto vira `--papel`, rotação volta a 0° — transição de 0.35s (transform) e 0.2s (cor/fundo) em `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Active:** rotação 0°, `scale(0.98)`.
- **Disabled:** `cursor: progress`, `opacity: 0.6`.
- Não há variante secundária/ghost: o sistema tem uma única ação por tela.

### Status Badges (situação do romaneio)
- **Style:** Schibsted Grotesk 800, maiúsculo, `letter-spacing: 0.08em`, sem fundo, sem borda — só cor de texto distingue os dois estados.
- **State:** "Em produção" em `--carbono`; "Homologação" em `--tinta-2`. Não existe um terceiro estado hoje.

### Signature: Linha de Origem ("carimbada")
Quando a visita chega por `/de/<ferramenta>`, a linha daquele sistema no romaneio ganha um contorno duplo de 3px em `--carbono` (deslocado -3px para dentro, como um carimbo de conferência) e uma etiqueta "Você veio daqui" (Schibsted Grotesk 800, 0.75rem, borda de 2px em `--carbono`, `border-radius: 4px`, girada -3°) anexada ao nome do sistema. É o único elemento com dupla marca de estado (contorno + etiqueta) da página.

### Cards / Containers (tabela do romaneio)
- **Corner Style:** reto (sem `border-radius`).
- **Background:** papel nas linhas pares, `--zebra` nas ímpares; cada item ocupa três linhas de impressão (`height: calc(--linha * 3)`).
- **Shadow Strategy:** nenhuma — ver Elevation & Depth.
- **Border:** 1px sólida sob o `thead`, 2px sólida acima do `tfoot`.
- **Internal Padding:** `calc(--linha / 2) 1rem`.

### Inputs / Fields
- **Style:** sem caixa; só `border-bottom: 2px solid var(--tinta)`, fundo transparente, `border-radius: 0`, `caret-color: var(--carbono)`. O `textarea` imprime pautas próprias via `linear-gradient` repetida a cada `--linha`.
- **Focus:** a linha inferior muda para `--carbono` e o fundo ganha o tingimento `--carbono-fundo`; sem glow, sem sombra.
- **Error:** linha inferior em `--erro`; mensagem de erro (`.field-error`) em `--erro`, oculta até `.visible`.

### Navigation / Cabeçalho
- **Style:** grade de duas colunas (marca à esquerda, campos do documento à direita), separada do corpo por régua sólida de 2px em `--tinta`.
- **Marca:** `public/logo-papel.png` — recorte da caixa de tinta de `public/logo.png` (o símbolo do gato + wordmark, sem a margem transparente ao redor) e recolorização para `--tinta` (#1d2126) preservando o canal alfa, para que o logo funcione como tinta sobre o papel em vez do preto genérico do arquivo-fonte. Qualquer novo recorte do logo deve repetir esse pipeline (recortar a caixa de tinta, recolorir para `--tinta` com alfa) a partir de `logo.png`, não redesenhar do zero.
- **Campos do documento:** grade 2×2, rótulos em Label e valores em Doto 800 maiúsculo — o único lugar fora do romaneio onde a matricial aparece em corpo de texto normal.
- **Mobile:** cabeçalho empilha em uma coluna abaixo de 960px; a grade de campos permanece 2 colunas.

## Do's and Don'ts

### Do:
- **Do** reservar o azul de carbono (`#2c4a9e`) para ação, status positivo, foco e seleção — nunca como cor decorativa de fundo (The One Blue Rule).
- **Do** expressar espaçamento vertical de seção como múltiplo de `--linha` (1.75rem).
- **Do** usar Doto (800, maiúsculo, `tabular-nums`) só para dados de registro — números de item, cabeçalhos de seção, valores do cabeçalho do documento — e Schibsted Grotesk para tudo que é lido como frase, incluindo botões e badges de status (The Two Voices Rule).
- **Do** manter o picote (régua tracejada de 2px, full-bleed) como único divisor de seção — não introduzir cartão, sombra ou fundo alternado para separar blocos.
- **Do** repetir o pipeline de recorte-e-recolorização de `logo.png` → `logo-papel.png` para qualquer novo derivado do símbolo, em vez de gerar um novo arquivo a partir do zero.

### Don't:
- **Don't** adicionar `box-shadow`, `blur` ou qualquer glow — o sistema é inteiramente plano (The Flat Paper Rule).
- **Don't** arredondar campo de formulário ou dar-lhe caixa: o contorno é sempre uma única linha inferior.
- **Don't** introduzir uma segunda cor de ação. Erro (`#a3261c`) é reservado a estado de validação e não substitui nem complementa o azul de carbono como CTA.
- **Don't** girar elementos além do carimbo e da etiqueta de origem — a leve rotação de "carimbo real" é um recurso raro, não um hábito geral de botão ou chip.
