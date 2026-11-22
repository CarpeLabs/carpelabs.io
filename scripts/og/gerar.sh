#!/usr/bin/env bash
# Gera as imagens de compartilhamento a partir de `scripts/og/og.html` (precisa do Chrome e do
# `bun install`, pela fonte). Uso: bash scripts/og/gerar.sh <nome-pt.png> <nome-en.png>
set -euo pipefail
raiz="$(cd "$(dirname "$0")/../.." && pwd)"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
pagina="file://$raiz/scripts/og/og.html"
for par in "$1|" "$2|?en"; do
  saida="${par%%|*}"; busca="${par#*|}"
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=3000 \
    --screenshot="$raiz/public/$saida" "$pagina$busca" >/dev/null 2>&1
  echo "public/$saida"
done
