# 🖥️ Protocoles graphiques Linux — X11, Wayland & affichage

---

# 📌 Définition

Les **protocoles graphiques Linux** permettent de :

- afficher les interfaces graphiques (GUI)
- gérer les fenêtres
- traiter les entrées (clavier, souris)

---

# 🧠 Principe

```
Application → Serveur graphique → Écran
```

👉 communication entre programmes et affichage

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| affichage | GUI |
| interaction | utilisateur |
| gestion fenêtres | placement |
| performance | rendu |

---

# 📊 Protocoles principaux

| Protocole | Description |
|---|---|
| X11 (Xorg) | ancien standard |
| Wayland | moderne |
| Mir | Canonical |

---

# 🧱 1️⃣ X11 (Xorg)

## 📌 Définition

Système graphique historique Linux

---

## 🧠 Fonctionnement

```
App → X Server → Window Manager → Écran
```

---

## ⚙️ Composants

| Élément | Description |
|---|---|
| X Server | affichage |
| Window Manager | fenêtres |
| Desktop Environment | interface |

---

## ⚠️ Limites

| Limite | Description |
|---|---|
| sécurité | faible |
| latence | élevée |
| complexité | architecture |

---

# 🧱 2️⃣ Wayland

## 📌 Définition

Remplaçant moderne de X11

---

## 🧠 Fonctionnement

```
App → Compositor → Écran
```

---

## ⚙️ Compositor

👉 gère :

- affichage
- fenêtres
- entrées

---

## ✔️ Avantages

| Avantage | Description |
|---|---|
| sécurité | élevée |
| performance | meilleure |
| simplicité | architecture |

---

# 🧱 3️⃣ Mir

## 📌 Définition

Protocole développé par Canonical (Ubuntu)

---

## 📊 Usage

| Usage | Description |
|---|---|
| IoT | embarqué |
| Ubuntu | ancien |

---

👉 aujourd’hui peu utilisé

---

# 🔄 XWayland

## 📌 Définition

Compatibilité X11 sur Wayland

---

## Schéma

```
App X11 → XWayland → Wayland → Écran
```

---

# 📊 Comparaison

| Critère | X11 | Wayland |
|---|---|---|
| architecture | complexe |
| sécurité | faible |
| performance | moyenne |

---

| Critère | Wayland |
|---|---|
| architecture | simple |
| sécurité | élevée |
| performance | élevée |

---

# 🧠 Environnements de bureau

| Desktop | Protocole |
|---|---|
| GNOME | Wayland |
| KDE | Wayland/X11 |
| XFCE | X11 |
| Sway | Wayland |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| desktop Linux | GNOME |
| serveur graphique | X11 |
| gaming | Wayland |
| tiling | Sway |

---

# ⚠️ Limites Wayland

| Limite | Description |
|---|---|
| compatibilité | apps |
| outils anciens | X11 |
| drivers | GPU |

---

# 🛡️ Bonnes pratiques

> [!warning]

- privilégier Wayland
- utiliser XWayland si nécessaire
- maintenir drivers GPU à jour
- tester compatibilité logiciels

---

# 📊 Résumé

| Élément | Description |
|---|---|
| X11 | ancien |
| Wayland | moderne |
| Mir | secondaire |
| rôle | affichage |
| futur | Wayland |

---

# 🎯 Conclusion

Les protocoles graphiques Linux permettent :

- d’afficher les interfaces
- de gérer les interactions

👉 aujourd’hui :

🔥 Wayland remplace progressivement X11  
🔥 X11 reste utilisé pour compatibilité