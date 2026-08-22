-- Mensagens do formulário de contato do carpelabs.io.
--
-- O armazenamento é a fonte; a notificação é aviso. Essa ordem importa: o endpoint grava
-- ANTES de tentar notificar, então uma falha do Discord ou do e-mail não perde a mensagem —
-- ela fica aqui e o aviso é o que falta, não o contato.
--
-- Foi exatamente o contrário disso que causou o problema de 22/08/2026: o formulário anterior
-- só enviava para um Apps Script, sem guardar nada, e o endpoint recusava com 403 enquanto a
-- tela dizia "enviada com sucesso".

CREATE TABLE IF NOT EXISTS mensagens (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  recebida_em   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  nome          TEXT    NOT NULL,
  email         TEXT    NOT NULL,
  mensagem      TEXT    NOT NULL,

  -- De onde a pessoa veio. `/de/<ferramenta>` é a rota de origem que as telas da Nipo linkam;
  -- guardar aqui responde "esse contato veio de qual ferramenta?" sem depender do analytics.
  origem        TEXT,
  referrer      TEXT,
  pais          TEXT,

  -- Estado da notificação, por canal. NULL = não tentado; texto = o erro.
  -- Guardar o erro é o que permite reprocessar em vez de descobrir o silêncio depois.
  notificado_em TEXT,
  erro_email    TEXT,
  erro_discord  TEXT
);

CREATE INDEX IF NOT EXISTS idx_mensagens_recebida ON mensagens (recebida_em DESC);

-- Fila de reenvio: mensagem gravada cuja notificação falhou nos dois canais.
CREATE INDEX IF NOT EXISTS idx_mensagens_pendentes
  ON mensagens (recebida_em DESC)
  WHERE notificado_em IS NULL;
