# 🖥️ Wayland & Compositor — Affichage Linux moderne

---

# 📌 Définition

## Wayland

**Wayland** est un protocole graphique permettant de :

- gérer l’affichage sous Linux
- remplacer X11 (ancien système)

---

## Compositor

Un **compositor Wayland** est :

- le programme qui gère l’affichage
- les fenêtres
- les entrées clavier/souris

👉 Wayland = protocole  
👉 Compositor = implémentation

---

# 🧠 Principe

```
Application → Wayland → Compositor → Écran
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| modernisation | remplacer X11 |
| performance | meilleure |
| sécurité | isolation |
| simplicité | architecture |

---

# 🏗️ Architecture

## X11 (ancien)

```
App → X Server → Window Manager → Écran
```

---

## Wayland (moderne)

```
App → Compositor → Écran
```

👉 architecture simplifiée

---

# 📊 Rôle du compositor

| Fonction | Description |
|---|---|
| affichage | rendu |
| gestion fenêtres | position |
| input | clavier/souris |
| effets | animations |

---

# 📦 Exemples de compositors

| Compositor | Environnement |
|---|---|
| Mutter | GNOME |
| KWin | KDE |
| Sway | tiling |
| Weston | référence |
| Hyprland | moderne |

---

# ⚙️ Fonctionnement

## Étapes

1. application dessine
2. envoie au compositor
3. compositor affiche
4. gestion des interactions

---

# 🔐 Sécurité

| Élément | Wayland |
|---|---|
| isolation apps | forte |
| keylogger | difficile |
| accès écran | limité |

---

👉 plus sécurisé que X11

---

# ⚡ Avantages

| Avantage | Description |
|---|---|
| performance | meilleure |
| latence | faible |
| sécurité | élevée |
| simplicité | architecture |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| compatibilité | logiciels |
| outils anciens | X11 |
| debug | complexe |

---

# 🔄 Wayland vs X11

| Critère | Wayland | X11 |
|---|---|---|
| architecture | simple |
| sécurité | élevée |
| performance | meilleure |

---

| Critère | X11 |
|---|---|
| architecture | complexe |
| sécurité | faible |
| performance | ancienne |

---

# 🧠 XWayland

## Définition

Permet de :

- lancer applications X11
- sur Wayland

---

## Schéma

```
App X11 → XWayland → Compositor Wayland
```

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| desktop | GNOME |
| dev | Linux |
| gaming | Wayland |
| tiling | Sway |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser Wayland par défaut
- tester compatibilité apps
- utiliser XWayland si besoin
- mettre à jour drivers GPU

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Wayland | protocole |
| compositor | gestion affichage |
| avantage | sécurité |
| usage | Linux |
| remplace | X11 |

---

# 🎯 Conclusion

Wayland et les compositors permettent :

- un affichage moderne
- une meilleure sécurité
- une performance accrue

👉 standard actuel des environnements Linux

🔥 futur de l’affichage sous Linux