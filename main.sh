#!/bin/bash

echo "🏦 MyCryptoBank Simple - Lancement automatique..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js requis - Ouverture de https://nodejs.org/"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open https://nodejs.org/
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open https://nodejs.org/ 2>/dev/null
    fi
    exit 1
fi

echo "📦 Installation des dépendances..."
npm cache clean --force &>/dev/null
npm install &>/dev/null
if [ $? -ne 0 ]; then
    echo "🔄 Tentative avec --legacy-peer-deps..."
    npm install --legacy-peer-deps &>/dev/null
fi

echo "🚀 Lancement sur http://localhost:5173"

# Ouvrir le navigateur après 2 secondes
(sleep 2 && {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:5173
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open http://localhost:5173 2>/dev/null
    fi
}) &

npm run dev

