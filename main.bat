@echo off
title MyCryptoBank Simple - Lancement Direct
color 0B

echo 🏦 MyCryptoBank Simple - Lancement automatique...

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js requis - Ouverture de https://nodejs.org/
    start https://nodejs.org/
    exit /b 1
)

echo 📦 Installation des dépendances...
call npm cache clean --force >nul 2>&1
call npm install >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔄 Tentative avec --legacy-peer-deps...
    call npm install --legacy-peer-deps >nul 2>&1
)

echo 🚀 Lancement sur http://localhost:5173
timeout /t 2 /nobreak >nul
start http://localhost:5173
call npm run dev

