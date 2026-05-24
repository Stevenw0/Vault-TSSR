


# 📝 Nano — Commandes essentielles Linux

---

# 📌 Définition

**Nano** est un éditeur de texte en ligne de commande :

- simple
- rapide
- accessible

👉 utilisé pour éditer des fichiers sous Linux

---

# 🧠 Principe

```
nano fichier → édition → sauvegarde
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| édition | fichiers |
| configuration | système |
| simplicité | CLI |
| rapidité | léger |

---

# ⚙️ Ouvrir un fichier

```bash
nano fichier.txt
```

---

# 🔑 Commandes principales

👉 `^` = touche **Ctrl**

| Commande | Action |
|---|---|
| Ctrl + O | sauvegarder |
| Ctrl + X | quitter |
| Ctrl + K | couper ligne |
| Ctrl + U | coller |
| Ctrl + W | rechercher |
| Ctrl + G | aide |
| Ctrl + C | position curseur |
| Ctrl + _ | aller à ligne |

---

# ✏️ Édition

| Action | Commande |
|---|---|
| écrire | clavier |
| supprimer | Backspace |
| nouvelle ligne | Entrée |

---

# 🔍 Recherche

```text
Ctrl + W
```

👉 taper mot → Enter

---

# 🔁 Remplacer

| Étape | Action |
|---|---|
| 1 | Ctrl + \ |
| 2 | mot à chercher |
| 3 | remplacement |

---

# 📂 Sauvegarde

## Sauvegarder

```text
Ctrl + O
```

👉 Enter pour confirmer

---

## Quitter

```text
Ctrl + X
```

---

# ⚠️ Quitter sans sauvegarder

```text
Ctrl + X → N
```

---

# 📄 Sélection texte

| Action | Commande |
|---|---|
| début sélection | Alt + A |
| copier | Alt + 6 |
| coller | Ctrl + U |

---

# 🔢 Aller à une ligne

```text
Ctrl + _
```

👉 entrer numéro

---

# 📊 Options utiles

| Option | Description |
|---|---|
| nano -l | numéros lignes |
| nano -B | backup |
| nano +10 fichier | ligne 10 |

---

# ⚠️ Erreurs courantes

| Erreur | Solution |
|---|---|
| quitter sans save | Ctrl+O |
| mauvaise commande | Ctrl+G |
| fichier root | sudo nano |

---

# 🛡️ Bonnes pratiques

> [!warning]

- sauvegarder régulièrement
- utiliser sudo si nécessaire
- vérifier contenu avant exit
- utiliser backup (-B)

---

# 📊 Nano vs autres éditeurs

| Éditeur | Niveau |
|---|---|
| nano | simple |
| vim | avancé |
| vi | minimal |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| nano | éditeur |
| usage | fichiers |
| avantage | simple |
| commandes | Ctrl |
| niveau | débutant |

---

# 🎯 Conclusion

Nano permet :

- d’éditer facilement des fichiers
- de configurer rapidement un système
- d’éviter la complexité de Vim

👉 indispensable pour :

🔥 admin Linux  
🔥 débutants  
🔥 dépannage rapide