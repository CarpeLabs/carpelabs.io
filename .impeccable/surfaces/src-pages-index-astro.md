---
version: 2
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro","src/pages/de/[origem].astro","src/layouts/Landing.astro","src/styles/global.css","src/i18n/landing.ts"]
---

# Landing (carpelabs.io `/`, `/en/` e `/de/<origem>`)

Modo: Persuade. Público e prova: ver PRODUCT.md. Ação: "Implantar IA" (formulário na própria página, com nome, e-mail e mensagem).

## Direction contract

THESIS: A marca carpe labs em primeiro plano, num site moderno e minimalista com uma oferta só: implantar IA na operação. O símbolo do peixe grande e vivo, a tipografia fina que ecoa o wordmark e **uma só cor de destaque, o verde de marca**, ligada à IA e às ações. Recusa o pátio de contêineres (rejeitado pelo José em 22/11/2026: "ficou estranho"), o papel com verde-petróleo da versão anterior e o escuro de software house com neon.

OWN-WORLD: Fundo off-white #f4f4f1 (nunca branco puro), blocos de seção em #e9e9e4, texto #0b0c0e, secundário #50545c. Verde `#2e6b55` (5,8:1 sobre o fundo), `#24563f` no hover e `#7fc4a6` sobre superfície escura. O verde aparece só em botões, símbolo, nome "carpe labs" (header e rodapé), selo "IA", a palavra "IA" do h1 e o núcleo e as partículas do fluxo. Hanken Grotesk variável: títulos grandes em 300 com tracking negativo, mais peso (400 a 500) quanto menor o título; corpo 400. Cada seção depois da abertura é um bloco arredondado; cartões só em Resultados (destaque escuro do Assistente de IA, cartões com selo IA e a base). Sem sombras difusas.

STORY: O diretor reconhece a marca, entende em segundos que a carpe labs coloca IA para trabalhar na operação dele, em cima do sistema que já usa (qualquer que seja), vê o que a IA já faz na Nipo e escreve pelo formulário.

FIRST VIEWPORT: Header discreto (peixe, nome, idioma e botão verde que surge quando o peixe pousa). À esquerda, a oferta em duas a três linhas finas e grandes, com "IA" em verde, apoio curto e o botão "Implantar IA". À direita, o peixe verde ocupando quase a altura da tela, desenhando-se na chegada e acompanhando de leve o cursor; ao rolar, ele voa até o header. Fecham a abertura as três etapas: mapear, dimensionar, configurar.

SECTIONS: abertura; `#fluxo` (seis fontes alimentando a IA, montagem ligada à rolagem); `#resultados` (destaque escuro do Assistente de IA, cartões com selo IA: atendimento no WhatsApp, fotos, compras, vendedor; e "a base por trás": Logística e Rastreio); método; perguntas; contato; rodapé.

MOTION: cada bloco (`data-anima="secao"`) entra inteiro, uma vez, ao aparecer; depois as listas entram em sequência. O fluxo monta com a rolagem. Movimento reduzido: só opacidade.

FORM: pedido direto do usuário (marca, moderno, minimalista), sobrepõe o sorteio 21137dda; caminho code-led.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Em aberto
- 22/11/2026: 1ª tentativa (pátio de contêineres) rejeitada; o José pediu ênfase na marca, moderno e minimalista. O símbolo é um peixe.
- 22/11/2026: redesign completo para abrir o site aos clientes; depois, a landing foi reduzida a uma oferta só (implantar IA) e o verde virou a cor de destaque. As telas reais da Nipo saíram da página.
- Páginas legais (`/privacidade`, `/termos`, `/exclusao-de-dados`) seguem no visual escuro antigo; fora deste escopo.
- Preço, contratação e prazo seguem fora da página até serem decididos (PRODUCT.md). A página não cita o Sankhya nem a estrutura interna da Nipo.

## Idiomas

`/` em português e `/en/` em inglês servem o mesmo layout (`src/layouts/Landing.astro`); o texto fica em `src/i18n/landing.ts`, com `en` tipado pelo `pt`. As rotas `/de/<ferramenta>` e as páginas legais continuam só em português.
