#!/usr/bin/env python3
"""
🏦 MyCryptoBank Simple - Lancement Direct
Version simplifiée sans dépendances complexes
"""

import os
import sys
import subprocess
import webbrowser
import time
from pathlib import Path

def check_node():
    """Vérifie si Node.js est installé"""
    try:
        result = subprocess.run(["node", "--version"], capture_output=True, text=True)
        if result.returncode == 0:
            return True
    except FileNotFoundError:
        pass
    
    print("❌ Node.js requis - Ouverture de https://nodejs.org/")
    webbrowser.open("https://nodejs.org/")
    sys.exit(1)

def setup_and_launch():
    """Configure et lance automatiquement"""
    print("🏦 MyCryptoBank Simple - Lancement automatique...")
    
    # Vérifier Node.js
    check_node()
    
    # Se placer dans le bon dossier
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    print("📦 Installation des dépendances...")
    subprocess.run(["npm", "cache", "clean", "--force"], capture_output=True)
    result = subprocess.run(["npm", "install"], capture_output=True)
    
    if result.returncode != 0:
        print("🔄 Tentative avec --legacy-peer-deps...")
        subprocess.run(["npm", "install", "--legacy-peer-deps"], capture_output=True)
    
    print("🚀 Lancement sur http://localhost:5173")
    
    # Ouvrir le navigateur après 3 secondes
    def open_browser():
        time.sleep(3)
        webbrowser.open("http://localhost:5173")
    
    import threading
    threading.Thread(target=open_browser, daemon=True).start()
    
    # Lancer le serveur
    subprocess.run(["npm", "run", "dev"])

if __name__ == "__main__":
    try:
        setup_and_launch()
    except KeyboardInterrupt:
        print("\n🛑 Arrêté")
    except Exception as e:
        print(f"❌ Erreur: {e}")
        sys.exit(1)

