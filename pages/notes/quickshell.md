# ⚡ Quickshell — Shell moderne pour Wayland

---

# 📌 Définition

**Quickshell** est un framework permettant de :

- créer un environnement graphique personnalisé
- sous Wayland
- en utilisant QML (Qt)

👉 utilisé pour construire :

- barres (status bar)
- menus
- widgets
- overlays

---

# 🧠 Principe

```
Wayland Compositor → Quickshell → Interface utilisateur (UI)
```

👉 Quickshell ne remplace pas le compositor  
👉 il ajoute une couche UI

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| personnalisation | interface |
| modularité | composants |
| performance | Qt/QML |
| flexibilité | UI |

---

# 🏗️ Architecture

```
Compositor (Hyprland, Sway...)
        ↓
   Quickshell
        ↓
   UI (bar, widgets, menus)
```

---

# 📊 Rôle de Quickshell

| Fonction | Description |
|---|---|
| status bar | barre système |
| widgets | infos |
| launcher | applications |
| notifications | système |
| overlay | affichage |

---

# ⚙️ Technologies utilisées

| Technologie | Description |
|---|---|
| Qt | framework graphique |
| QML | UI déclarative |
| Wayland | affichage |
| IPC | communication |

---

# 📦 Exemples d’utilisation

| Usage | Exemple |
|---|---|
| barre | CPU/RAM |
| menu | launcher |
| overlay | volume |
| dashboard | infos système |

---

# 🔎 Fonctionnement

## Étapes

1. compositor affiche session
2. quickshell démarre
3. charge UI QML
4. affiche widgets

---

# 🧩 Exemple QML

```qml
Text {
    text: "Hello World"
}
```

---

# ⚡ Avantages

| Avantage | Description |
|---|---|
| moderne | UI fluide |
| personnalisable | totale |
| modulaire | composants |
| performant | Qt |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| complexité | QML |
| dépendance | Qt |
| communauté | limitée |
| config | technique |

---

# 🔄 Comparaison

| Outil | Différence |
|---|---|
| Waybar | config simple |
| Polybar | X11 |
| Quickshell | QML avancé |

---

# 🌐 Compatibilité

| Compositor | Support |
|---|---|
| Hyprland | oui |
| Sway | oui |
| Wayland | oui |

---

# 🛡️ Bonnes pratiques

> [!warning]

- structurer les configs QML
- tester progressivement
- optimiser widgets
- surveiller ressources

---

# 📊 Cas d’utilisation

| Usage | Exemple |
|---|---|
| desktop custom | Hyprland |
| dev | UI |
| monitoring | widgets |
| homelab | dashboard |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Quickshell | shell UI |
| base | QML |
| usage | interface |
| avantage | flexible |
| limite | complexité |

---

# 🎯 Conclusion

Quickshell permet :

- de créer une interface Linux moderne
- d’ajouter une couche UI sur Wayland
- de personnaliser totalement son environnement

👉 idéal pour :

🔥 Hyprland / Wayland  
🔥 custom desktop  
🔥 utilisateurs avancés