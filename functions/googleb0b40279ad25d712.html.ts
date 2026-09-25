/* Verificação da propriedade https://carpelabs.io/ no Google Search Console.
 *
 * Function, e não arquivo em `public/`: o Pages serve `/x.html` com 308 para `/x`, e a
 * verificação por arquivo precisa responder 200 no caminho exato. Não remover — o Search Console
 * volta a conferir periodicamente e a propriedade perde a validação.
 */
export const onRequestGet: PagesFunction = () =>
  new Response('google-site-verification: googleb0b40279ad25d712.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
