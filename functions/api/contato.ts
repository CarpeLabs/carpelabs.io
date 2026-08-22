/**
 * Recebe o formulário de contato: grava no D1 e avisa.
 *
 * 🔴 A ordem é deliberada: GRAVA primeiro, notifica depois. O contato é o dado; o aviso é
 * conveniência. Se o e-mail falhar, a mensagem já está salva e o que falta é o aviso — não o
 * cliente. O motivo da falha fica em `erro_email`, então o silêncio é consultável.
 *
 * Isto existe porque o contrário aconteceu em 22/08/2026: o formulário anterior mandava para um
 * Apps Script, sem guardar nada, e o endpoint recusava com 403 enquanto a tela dizia "enviada
 * com sucesso". Ninguém soube quantas mensagens sumiram — não há como saber, porque nada foi
 * gravado em lugar nenhum.
 *
 * Roda como Pages Function, na MESMA origem do site. Isso não é detalhe de arrumação: é o que
 * elimina o `mode: 'no-cors'` do lado do navegador, que era o que tornava a falha invisível.
 */

interface Env {
  DB: D1Database;
  /** Para onde avisar. Sem ele, o e-mail não é tentado. */
  CONTATO_EMAIL_DESTINO?: string;
  /**
   * Resend, e não o Email Sending da Cloudflare: com o mesmo token e a mesma conta, a API de
   * Email Sending responde `Unauthorized [code: 2036]` enquanto a de Email Routing funciona —
   * o produto é beta e não está habilitado. O Resend já tem `carpelabs.io` verificado, então
   * envia hoje. Trocar depois é mudar esta função e nada mais.
   */
  RESEND_API_KEY?: string;
  /** Remetente. Precisa ser de um domínio verificado no Resend. */
  RESEND_FROM_EMAIL?: string;
  /** Turnstile. Sem ele o endpoint recusa tudo — fail closed, ver `verificarTurnstile`. */
  TURNSTILE_SECRET?: string;
  /**
   * Hostnames que o siteverify pode devolver, separados por vírgula.
   * ⚠️ Em produção NÃO inclui `localhost` nem `127.0.0.1`: o widget aceita os três para
   * desenvolvimento, e sem essa separação qualquer um forjaria a origem de um token local.
   */
  TURNSTILE_HOSTNAMES?: string;
}

const ACAO = "contato";

const LIMITES = { nome: 120, email: 200, mensagem: 5000 } as const;

function limpar(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

/** Validação mínima: só recusa o que impede responder à pessoa. */
function validar(c: { nome: string; email: string; mensagem: string }): string | null {
  if (!c.nome) return "Informe seu nome";
  if (!c.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) return "Informe um email válido";
  if (!c.mensagem) return "Descreva seu projeto";
  return null;
}

/**
 * Verifica o token do Turnstile. Devolve `true` só quando tudo confere.
 *
 * 🔴 FAIL CLOSED em todo caminho de dúvida: sem secret, sem hostnames declarados, rede fora,
 * resposta não-2xx ou corpo não-JSON, tudo recusa. Um verificador que libera quando não
 * consegue verificar não protege de nada — e é o modo de falha que passa despercebido, porque
 * o formulário continua funcionando.
 *
 * Três checagens, não uma. `success` sozinho não basta:
 *  - `action` impede que um token obtido noutra superfície do site valha aqui;
 *  - `hostname` impede que um token gerado em `localhost` (o widget aceita os três domínios)
 *    seja gasto contra produção.
 */
async function verificarTurnstile(env: Env, token: unknown, ip: string | null): Promise<boolean> {
  const permitidos = new Set(
    (env.TURNSTILE_HOSTNAMES ?? "").split(",").map((h) => h.trim()).filter(Boolean),
  );
  if (!env.TURNSTILE_SECRET || permitidos.size === 0) return false;
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) return false;

  let r: Response;
  try {
    r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    });
    if (!r.ok) return false;
  } catch {
    return false;
  }

  let dados: { success?: boolean; action?: string; hostname?: string };
  try {
    dados = await r.json();
  } catch {
    return false;
  }
  return dados.success === true && dados.action === ACAO && permitidos.has(dados.hostname ?? "");
}

/** Escapa o que veio de fora antes de virar HTML no e-mail — o corpo é texto de estranho. */
function escapar(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function avisarEmail(env: Env, m: { nome: string; email: string; mensagem: string; origem: string }) {
  if (!env.RESEND_API_KEY) return "RESEND_API_KEY não configurada";
  if (!env.CONTATO_EMAIL_DESTINO) return "destino não configurado";

  const de = env.RESEND_FROM_EMAIL || "noreply@carpelabs.io";
  const veio = m.origem || "site (direto)";
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Carpe Labs — site <${de}>`,
      to: [env.CONTATO_EMAIL_DESTINO],
      // O que torna o aviso útil: responder no cliente de e-mail fala com a PESSOA, não com o
      // remetente automático. Sem isto, todo contato exigiria copiar o endereço à mão.
      reply_to: m.email,
      subject: `Contato de ${m.nome}`,
      text: `${m.nome} <${m.email}>\nVeio de: ${veio}\n\n${m.mensagem}`,
      html: `<p><strong>${escapar(m.nome)}</strong> &lt;${escapar(m.email)}&gt;<br>Veio de: ${escapar(veio)}</p><p>${escapar(m.mensagem).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!r.ok) {
    // O corpo do erro do Resend diz o motivo (domínio não verificado, chave inválida, limite).
    // Guardar o motivo é o que separa "não avisou" de "não avisou por isto".
    const corpo = await r.text().catch(() => "");
    return `resend respondeu ${r.status}: ${corpo.slice(0, 200)}`;
  }
  return null;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const responder = (corpo: unknown, status: number) =>
    new Response(JSON.stringify(corpo), {
      status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });

  let bruto: Record<string, unknown>;
  try {
    bruto = await request.json();
  } catch {
    return responder({ erro: "Corpo inválido" }, 400);
  }

  const contato = {
    nome: limpar(bruto.name ?? bruto.nome, LIMITES.nome),
    email: limpar(bruto.email, LIMITES.email),
    mensagem: limpar(bruto.message ?? bruto.mensagem, LIMITES.mensagem),
    origem: limpar(bruto.origem, 80),
  };

  const invalido = validar(contato);
  if (invalido) return responder({ erro: invalido }, 400);

  // 0. PROVA que é gente, antes de qualquer coisa. Vem antes da gravação de propósito: validar
  //    depois encheria o banco de spam e só evitaria o e-mail, que é a metade barata do custo.
  const humano = await verificarTurnstile(
    env,
    bruto["cf-turnstile-response"],
    request.headers.get("cf-connecting-ip"),
  );
  if (!humano) {
    return responder({ erro: "Não foi possível confirmar que você não é um robô. Recarregue a página e tente de novo." }, 403);
  }

  // 1. GRAVA. A partir daqui a mensagem não se perde, aconteça o que acontecer com os avisos.
  let id: number;
  try {
    const r = await env.DB.prepare(
      `INSERT INTO mensagens (nome, email, mensagem, origem, referrer, pais)
       VALUES (?, ?, ?, ?, ?, ?) RETURNING id`,
    ).bind(
      contato.nome,
      contato.email,
      contato.mensagem,
      contato.origem || null,
      request.headers.get("referer"),
      request.headers.get("cf-ipcountry"),
    ).first<{ id: number }>();
    id = r!.id;
  } catch (e) {
    // Só aqui a pessoa recebe erro — porque só aqui a mensagem realmente se perdeu.
    return responder({ erro: "Não foi possível registrar sua mensagem. Tente novamente." }, 500);
  }

  // 2. Avisa. Falha aqui NÃO vira erro para quem escreveu: a mensagem está salva, e insistir
  //    com a pessoa por um problema nosso a faria enviar de novo sem necessidade.
  const erroEmail = await avisarEmail(env, contato).catch((e) => String(e));

  await env.DB.prepare(
    `UPDATE mensagens
        SET notificado_em = CASE WHEN ?1 IS NULL
                                 THEN strftime('%Y-%m-%dT%H:%M:%SZ','now') END,
            erro_email = ?1
      WHERE id = ?2`,
  ).bind(erroEmail, id).run();

  return responder({ ok: true, id }, 200);
};

/** GET no endpoint é engano de quem testa na barra do navegador — responde em vez de 405 mudo. */
export const onRequestGet: PagesFunction<Env> = async () =>
  new Response(JSON.stringify({ erro: "Use POST para enviar uma mensagem." }), {
    status: 405,
    headers: { "Content-Type": "application/json", Allow: "POST" },
  });
