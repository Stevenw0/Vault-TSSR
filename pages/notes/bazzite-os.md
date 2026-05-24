# 🧩 Base du système

- **Distribution de base** : Fedora (Atomic / immuable)
- Variante : basée sur **Fedora Silverblue / Kinoite**
- **Noyau** : Linux kernel (souvent optimisé gaming)
- **Init** : systemd

---

# 📦 Gestion des paquets

## 🔧 Système (immuable)

- **rpm-ostree**
    - système en lecture seule
    - mises à jour atomiques
    - rollback possible

---

## 📦 Paquets classiques

- Format : **RPM**
- backend : RPM

---

## 🧠 Apps utilisateur

- **Flatpak** (principal)
- Store : GNOME Software / KDE Discover

👉 Bazzite privilégie fortement Flatpak (comme Steam, Discord…)

---

## ⚠️ Important

- `dnf` existe mais **pas recommandé** (car système immuable)
- on utilise plutôt :

```
rpm-ostree install
```

---

# 🖥️ Interface graphique

Bazzite existe en plusieurs versions 👇

## 🧠 Desktop Environment

- **KDE Plasma** (très courant)
- ou **GNOME**

---

# 🪟 Gestion des fenêtres

## KDE

- ➤ **KWin**

## GNOME

- ➤ **Mutter**

👉 comme Zorin, mais choix KDE très fréquent sur Bazzite

---

# 🎨 Affichage / Graphique

- **Protocole principal** : Wayland
- fallback : X.Org Server

---

# 🎮 Spécificités gaming

Bazzite est optimisé pour le jeu 👇

- **Steam** préinstallé
- **Proton**
- **Gamescope**
- **Mesa** (GPU AMD/Intel)
- support NVIDIA amélioré

---

# 🧰 Toolkit graphique

- KDE → Qt
- GNOME → GTK

---

# 🔊 Audio

- **PipeWire**

---

# 🌐 Réseau

- **NetworkManager**

---

# 📁 Système de fichiers

- souvent :
    - **Btrfs**
- snapshots possibles

---

# 🔐 Sécurité

- **SELinux** (Fedora)
- firewall : firewalld

---

# ⚙️ Boot

- **GRUB**

---

# 🧪 Résumé global

👉 Bazzite utilise :

- Base : Fedora (Atomic)
- Paquets : **rpm-ostree + Flatpak**
- DE : KDE ou GNOME
- WM/Compositor :
    - KDE → KWin
    - GNOME → Mutter
- Graphique : Wayland
- Audio : PipeWire
- Sécurité : SELinux

---

# 🧠 Comparaison rapide

|Élément|Zorin OS|Bazzite|
|---|---|---|
|Base|Ubuntu|Fedora Atomic|
|Paquets|APT / dpkg|rpm-ostree + Flatpak|
|Système|classique|immuable|
|Gaming|moyen|🔥 optimisé|
|DE principal|GNOME custom|KDE (souvent)|