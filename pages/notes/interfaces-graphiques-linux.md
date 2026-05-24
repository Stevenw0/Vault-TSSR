# 🖥️ Interfaces graphiques Linux — Desktop Environments & Options

---

# 📌 Définition

Une **interface graphique (GUI)** sous Linux permet de :

- interagir avec le système visuellement
- utiliser fenêtres, icônes, menus
- remplacer le terminal (CLI)

---

# 🧠 Principe

```
Utilisateur → GUI → Compositor → Système
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| accessibilité | facile |
| productivité | rapide |
| ergonomie | visuelle |
| interaction | utilisateur |

---

# 🧱 Composants d’une GUI

| Élément | Description |
|---|---|
| Display Server | Wayland / X11 |
| Compositor | gestion affichage |
| Window Manager | fenêtres |
| Desktop Environment | interface complète |
| Toolkit | Qt / GTK |

---

# 📊 Types d’interfaces

| Type | Description |
|---|---|
| Desktop Environment | complet |
| Window Manager | léger |
| Tiling WM | organisation auto |
| Compositor-only | minimal |

---

# 🧩 Desktop Environments (DE)

👉 environnement complet

---

## 🟦 GNOME

| Élément | Description |
|---|---|
| design | moderne |
| simplicité | élevée |
| base | GTK |
| protocole | Wayland |

---

## 🟥 KDE Plasma

| Élément | Description |
|---|---|
| personnalisation | très élevée |
| base | Qt |
| performance | bonne |
| interface | complète |

---

## 🟩 XFCE

| Élément | Description |
|---|---|
| léger | oui |
| stable | très |
| ancien | design classique |

---

## 🟨 LXDE / LXQt

| Élément | Description |
|---|---|
| ultra léger | oui |
| usage | machines faibles |
| LXQt | version moderne |

---

## 🟪 Cinnamon

| Élément | Description |
|---|---|
| style | Windows-like |
| base | GNOME |
| usage | Linux Mint |

---

# 🧩 Window Managers (WM)

👉 gestion des fenêtres uniquement

---

## 🧱 Stacking WM

| WM | Description |
|---|---|
| Openbox | léger |
| Fluxbox | minimal |
| IceWM | rapide |

---

## 🧩 Tiling WM

| WM | Description |
|---|---|
| i3 | classique |
| Sway | Wayland |
| Hyprland | moderne |
| Niri | scroll |
| bspwm | scriptable |

---

# 🧩 Compositors Wayland

👉 remplacent WM + X11

---

| Compositor | Type |
|---|---|
| Mutter | GNOME |
| KWin | KDE |
| Sway | tiling |
| Hyprland | moderne |
| Niri | innovant |

---

# ⚙️ Toolkits graphiques

| Toolkit | Description |
|---|---|
| GTK | GNOME |
| Qt | KDE |
| EFL | Enlightenment |

---

# 🔄 Comparaison DE

| Critère | GNOME | KDE | XFCE |
|---|---|---|---|
| performance | moyenne | bonne | légère |
| personnalisation | faible | élevée | moyenne |
| simplicité | élevée | moyenne | élevée |

---

# ⚡ Comparaison WM

| Critère | i3 | Sway | Hyprland |
|---|---|---|---|
| protocole | X11 | Wayland | Wayland |
| complexité | moyenne | faible | élevée |
| esthétique | basique | basique | moderne |

---

# 🌐 Cas d’utilisation

| Usage | Interface |
|---|---|
| desktop simple | GNOME |
| custom avancé | KDE |
| machine faible | XFCE |
| productivité | i3 / Sway |
| esthétique | Hyprland |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| compatibilité | apps |
| consommation | RAM |
| config | complexe |
| GPU | dépendance |

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| Wayland | sécurisé |
| X11 | vulnérable |
| sandbox | Flatpak |

---

# 🛡️ Bonnes pratiques

> [!warning]

- choisir selon machine
- privilégier Wayland
- tester compatibilité
- optimiser démarrage

---

# 📊 Résumé

| Élément | Description |
|---|---|
| GUI | interface |
| DE | complet |
| WM | fenêtres |
| Wayland | moderne |
| choix | usage |

---

# 🎯 Conclusion

Les interfaces graphiques Linux offrent :

- une grande diversité
- une forte personnalisation
- des performances adaptées à tous les usages

👉 choix selon besoin :

🔥 GNOME → simple  
🔥 KDE → personnalisable  
🔥 XFCE → léger  
🔥 Hyprland/Niri → avancé