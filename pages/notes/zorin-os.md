# 🧩 Base du système

- **Distribution de base** : Ubuntu (version LTS)
- **Noyau** : Linux kernel
- **Système d’init** : systemd

👉 Donc Zorin = Ubuntu + customisation UX

---

# 📦 Gestion des paquets

## 🔧 Principal

- **Gestionnaire bas niveau** :  
    ➤ dpkg
- **Gestionnaire haut niveau (CLI)** :  
    ➤ APT (`apt`, `apt-get`)

---

## 🧠 Interfaces utilisateur

- **GNOME Software** (modifié par Zorin)
- Support intégré pour :
    - **Flatpak**
    - Snap (souvent désactivé ou retiré selon versions)

---

## 📦 Formats supportés

- `.deb` (principal)
- Flatpak (fortement encouragé)
- Snap (optionnel)

---

# 🖥️ Interface graphique

## 🧠 Desktop Environment

- **GNOME** (customisé)

## 🎨 Interface Zorin

- **Zorin Appearance**
- Layouts :
    - Windows-like
    - macOS-like
    - GNOME classique

---

# 🪟 Gestion des fenêtres

- **Window Manager + Compositor** :  
    ➤ Mutter

👉 identique à GNOME

---

# 🎨 Affichage / Graphique

- **Protocole** :
    - Wayland (par défaut récent)
    - X11 (fallback)
- **Serveur graphique** :
    - Wayland
    - X.Org Server

---

# 🧰 Toolkit graphique

- **GTK**  
    👉 utilisé pour toutes les apps GNOME/Zorin

---

# 🔊 Audio

- **PipeWire** (récent)
- ou PulseAudio (anciennes versions)

---

# 🌐 Réseau

- **NetworkManager**

---

# 📁 Système de fichiers

- Par défaut :
    - **ext4**
- Support :
    - NTFS, FAT32, etc.

---

# 🔐 Sécurité

- **UFW** (frontend iptables)
- **AppArmor**

---

# ⚙️ Boot

- **GRUB**

---

# 🧪 Résumé global

👉 Zorin OS utilise :

- Base : Ubuntu
- Paquets : **APT + dpkg + Flatpak**
- DE : GNOME custom
- WM/Compositor : Mutter
- Graphique : Wayland / X11
- Audio : PipeWire
- Init : systemd

---

# 🧠 Comparaison rapide avec NixOS

|Élément|Zorin OS|NixOS|
|---|---|---|
|Paquets|APT / dpkg|nix|
|Config|impérative|déclarative|
|Reproductible|❌|✅|
|Flexibilité|moyenne|très élevée|

---

## 👍 Conclusion

👉 Zorin OS est une distro :

- simple
- stable (Ubuntu LTS)
- orientée UX

Mais techniquement, c’est :

> **GNOME + Mutter + APT + Flatpak sur Ubuntu**