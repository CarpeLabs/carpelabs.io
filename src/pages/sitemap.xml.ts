/* Sitemap à mão: são cinco páginas, e a integração do Astro seria uma dependência para isso.
 * As rotas `/de/<ferramenta>` ficam de fora de propósito: são endereço de medição, com noindex. */
const SITE = 'https://carpelabs.io';
// Com barra final: sem ela o Pages responde 308, e o sitemap listaria redirecionamentos.
const paginas = ['/', '/en/', '/privacidade/', '/termos/', '/exclusao-de-dados/'];

export function GET() {
  const urls = paginas.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
