import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://carpelabs.io',
  // CSS no próprio HTML: tira uma ida à rede do caminho crítico (HTML → CSS → fonte), que no
  // celular adiava o LCP. São ~21 KB, menos que o custo de uma requisição a mais em 4G.
  build: { inlineStylesheets: 'always' },
});
