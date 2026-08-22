-- O Discord saiu: o e-mail por Resend cobre o aviso, e um canal que ninguém configurou só
-- enchia toda linha com "webhook não configurado".
--
-- A coluna some junto com o código. Deixá-la aqui como resquício faria a próxima pessoa
-- procurar quem a escreve, e não achar — coluna que existe e ninguém preenche é o mesmo tipo
-- de pista falsa que `TGFPIM`/`TGFIMG` são no Sankhya.
ALTER TABLE mensagens DROP COLUMN erro_discord;
