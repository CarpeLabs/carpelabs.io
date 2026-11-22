---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/de/[origem].astro","src/layouts/Landing.astro"]
---

# Landing (carpelabs.io `/`, `/en/` e `/de/<origem>`)

Modo: Persuade. Público e prova: ver PRODUCT.md. Ação: "Iniciar um projeto" (formulário na própria página).

## Direction contract

THESIS: A marca carpe labs em primeiro plano, num site moderno e minimalista: o símbolo do peixe grande e vivo, a tipografia fina que ecoa o wordmark, e as telas reais da Nipo como única cor da página. Recusa o pátio de contêineres (rejeitado pelo José em 22/11/2026: "ficou estranho"), o papel claro com verde da versão anterior e o escuro de software house com neon.

OWN-WORLD: Monocromático claro: fundo off-white #f4f4f1 (nunca branco puro), texto #0b0c0e, secundário #50545c, réguas pretas a 10% e 24%. Nenhuma cor de acento: a cor vem só das capturas. Hanken Grotesk variável, display em peso 300 com tracking negativo; corpo 400. Botão primário preto com texto off-white. Situação: ponto cheio (produção) e vazado (homologação). Sem cartões, sem sombras, sem barra de topo; réguas finas e muito espaço.

STORY: O diretor reconhece a marca na hora, entende em segundos que a carpe labs constrói portais e IA sobre o ERP que ele já tem, vê as telas que a Nipo usa e escreve pelo formulário.

FIRST VIEWPORT: Sem barra de topo: só um link pequeno de idioma no canto superior direito. À esquerda, a oferta em duas a três linhas finas e grandes, apoio curto e botão preto. À direita, o símbolo do peixe em traço preto ocupando quase a altura da tela, desenhando-se na chegada (gesto único) e acompanhando de leve o cursor. Logo abaixo, a tela real da Nipo sobe ao rolar. Rodapé fecha com o logo completo em tamanho de cartaz.

FORM: pedido direto do usuário (marca, moderno, minimalista), sobrepõe o sorteio 21137dda; caminho code-led.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Em aberto
- 22/11/2026: 1ª tentativa (pátio de contêineres) rejeitada; o José pediu ênfase na marca, moderno e minimalista. O símbolo é um peixe.
- 22/11/2026: redesign completo pedido pelo José para abrir o site aos clientes; direção anterior (papel + verde-petróleo) descartada como referência.
- Páginas legais (`/privacidade`, `/termos`, `/exclusao-de-dados`) seguem no visual escuro antigo; fora deste escopo.

## Idiomas

`/` em português e `/en/` em inglês servem o mesmo layout (`src/layouts/Landing.astro`); o texto fica em `src/i18n/landing.ts`, com `en` tipado pelo `pt`. As rotas `/de/<ferramenta>` e as páginas legais continuam só em português. As capturas das telas continuam em português, e a legenda em inglês diz isso.
