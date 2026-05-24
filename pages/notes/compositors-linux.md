# 🖥️ Compositeurs Linux — Wayland & Gestion graphique

---

# 📌 Définition

Un **compositeur (compositor)** est un composant graphique qui :

- gère l’affichage des fenêtres
- compose les images à l’écran
- traite les entrées (clavier / souris)

👉 sous Wayland, il remplace :

- le serveur X
- le window manager

---

# 🧠 Principe

```
Applications → Compositor → Écran
```

👉 le compositor centralise tout

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| affichage | rendu graphique |
| gestion fenêtres | position |
| performance | fluidité |
| sécurité | isolation |

---

# 🧱 Rôle du compositeur

| Fonction | Description |
|---|---|
| rendu | affichage |
| fenêtres | organisation |
| input | clavier / souris |
| effets | animations |
| gestion écran | multi-monitor |

---

# 📊 Types de compositeurs

| Type | Description |
|---|---|
| stacking | fenêtres libres |
| tiling | organisation auto |
| dynamique | mix |

---

# 🧩 Compositeurs Wayland principaux

---

## 🟦 Mutter

| Élément | Description |
|---|---|
| environnement | GNOME |
| type | stacking |
| stabilité | élevée |

---

## 🟥 KWin

| Élément | Description |
|---|---|
| environnement | KDE |
| type | dynamique |
| personnalisation | élevée |

---

## 🟩 Sway

| Élément | Description |
|---|---|
| type | tiling |
| base | i3 |
| protocole | Wayland |

---

## ⚡ Hyprland

| Élément | Description |
|---|---|
| type | tiling dynamique |
| design | moderne |
| animations | avancées |

---

## 🧩 Niri

| Élément | Description |
|---|---|
| type | tiling scroll |
| navigation | fluide |
| simplicité | élevée |

---

## 🧪 River

| Élément | Description |
|---|---|
| type | tiling |
| minimalisme | élevé |
| scriptable | oui |

---

## 🎨 Wayfire

| Élément | Description |
|---|---|
| type | stacking |
| effets | visuels |
| plugins | nombreux |

---

## 🧱 Weston

| Élément | Description |
|---|---|
| type | référence Wayland |
| usage | test |
| simplicité | élevée |

---

# 🔄 Compositeur vs Window Manager

| Élément | Compositor | WM (X11) |
|---|---|---|
| protocole | Wayland |
| rôle | complet |
| gestion | affichage + fenêtres |

---

| Élément | WM |
|---|---|
| protocole | X11 |
| rôle | fenêtres |
| affichage | séparé |

---

# ⚙️ Fonctionnement

## Étapes

1. application dessine une fenêtre
2. envoie au compositor
3. organisation
4. rendu écran

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| isolation apps | forte |
| accès écran | contrôlé |
| keylogger | limité |

---

👉 plus sécurisé que X11

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| compatibilité | apps X11 |
| config | complexe |
| GPU | drivers |

---

# 🔄 XWayland

## Définition

Permet de lancer apps X11 sous Wayland

---

## Schéma

```
App X11 → XWayland → Compositor
```

---

# 🌐 Cas d’utilisation

| Usage | Compositor |
|---|---|
| desktop | Mutter |
| custom | Hyprland |
| productivité | Sway |
| expérimental | Niri |

---

# 🛡️ Bonnes pratiques

> [!warning]

- choisir selon usage
- privilégier Wayland
- maintenir drivers GPU
- tester compatibilité

---

# 📊 Résumé

| Élément | Description |
|---|---|
| compositor | affichage |
| Wayland | protocole |
| Mutter | GNOME |
| Hyprland | moderne |
| Sway | stable |

---

# 🎯 Conclusion

Les compositeurs sont au cœur de Wayland :

- ils remplacent X11
- gèrent tout l’affichage
- améliorent sécurité et performance

👉 aujourd’hui :

🔥 Mutter / KWin → desktop  
🔥 Sway / Hyprland → avancé  
🔥 Niri → innovation