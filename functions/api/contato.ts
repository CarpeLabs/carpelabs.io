/**
 * Recebe o formulário de contato: grava no D1 e avisa.
 *
 * 🔴 A ordem é deliberada: GRAVA primeiro, notifica depois. O contato é o dado; o aviso é
 * conveniência. Se o Discord estiver fora ou o e-mail não estiver onboardado, a mensagem já
 * está salva e o que falta é o aviso — não o cliente.
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
  /** Opcional. Sem ele, a mensagem é gravada e só o aviso do Discord não sai. */
  DISCORD_WEBHOOK_URL?: string;
  /** Para onde avisar. Sem ele, o e-mail não é tentado. */
  CONTATO_EMAIL_DESTINO?: string;
  /** Binding do Email Sending. Só existe depois de o domínio ser onboardado. */
  EMAIL?: { send(m: unknown): Promise<unknown> };
}

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

async function avisarDiscord(env: Env, m: { nome: string; email: string; mensagem: string; origem: string }) {
  if (!env.DISCORD_WEBHOOK_URL) return "webhook não configurado";
  const r = await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "Contato novo no carpelabs.io",
        color: 0x00d4aa,
        fields: [
          { name: "Nome", value: m.nome.slice(0, 256) },
          { name: "E-mail", value: m.email.slice(0, 256) },
          { name: "Veio de", value: m.origem || "site (direto)" },
          { name: "Mensagem", value: m.mensagem.slice(0, 1024) },
        ],
      }],
    }),
  });
  return r.ok ? null : `discord respondeu ${r.status}`;
}

async function avisarEmail(env: Env, m: { nome: string; email: string; mensagem: string; origem: string }) {
  if (!env.EMAIL) return "Email Sending não configurado (domínio não onboardado)";
  if (!env.CONTATO_EMAIL_DESTINO) return "destino não configurado";
  const texto = `${m.nome} <${m.email}>\nVeio de: ${m.origem || "site (direto)"}\n\n${m.mensagem}`;
  await env.EMAIL.send({
    to: env.CONTATO_EMAIL_DESTINO,
    from: { email: "contato@carpelabs.io", name: "Carpe Labs — site" },
    // `replyTo` é o que torna o aviso útil: responder no cliente de e-mail fala com a pessoa,
    // não com o remetente automático.
    replyTo: { email: m.email, name: m.nome },
    subject: `Contato de ${m.nome}`,
    text: texto,
    html: `<p><strong>${m.nome}</strong> &lt;${m.email}&gt;<br>Veio de: ${m.origem || "site (direto)"}</p><p>${m.mensagem.replace(/\n/g, "<br>")}</p>`,
  });
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
  const [erroDiscord, erroEmail] = await Promise.all([
    avisarDiscord(env, contato).catch((e) => String(e)),
    avisarEmail(env, contato).catch((e) => String(e)),
  ]);

  await env.DB.prepare(
    `UPDATE mensagens
        SET notificado_em = CASE WHEN ?1 IS NULL OR ?2 IS NULL
                                 THEN strftime('%Y-%m-%dT%H:%M:%SZ','now') END,
            erro_discord = ?1,
            erro_email = ?2
      WHERE id = ?3`,
  ).bind(erroDiscord, erroEmail, id).run();

  return responder({ ok: true, id }, 200);
};

/** GET no endpoint é engano de quem testa na barra do navegador — responde em vez de 405 mudo. */
export const onRequestGet: PagesFunction<Env> = async () =>
  new Response(JSON.stringify({ erro: "Use POST para enviar uma mensagem." }), {
    status: 405,
    headers: { "Content-Type": "application/json", Allow: "POST" },
  });
