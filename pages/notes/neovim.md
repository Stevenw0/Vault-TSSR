# ✏️ Neovim (NeoVIM)

## 📌 Qu’est-ce que Neovim ?

**Neovim (nvim)** est un **éditeur de texte en ligne de commande**, moderne et puissant, dérivé de **Vim**.  
Il est très utilisé par les développeurs et les administrateurs système pour :

- éditer rapidement des fichiers
- modifier des fichiers de configuration
- travailler directement sur des serveurs

Neovim est compatible avec la majorité des commandes Vim, tout en apportant des améliorations modernes.

---

## 🧠 Pourquoi utiliser Neovim ?

Neovim permet :

- une édition **rapide et efficace** au clavier
- une faible consommation de ressources
- une utilisation sur des **serveurs sans interface graphique**
- une forte personnalisation (plugins, thèmes, raccourcis)

Il est idéal pour le **support**, l’**administration système** et le **développement**.

---

## 📦 Installation de Neovim

### 🐧 Sous Debian / Ubuntu

```bash
sudo apt update
sudo apt install neovim
```

### 🟥 Sous RHEL / Rocky / Alma

```bash
sudo dnf install neovim
```

### 🟦 Vérifier l’installation

```bash
nvim --version
```

---

## ⚠️ Attention : Neovim et X11 sur serveur

Sur un **serveur**, il est déconseillé d’installer ou d’utiliser des composants **X11**.

Raisons :
- surface d’attaque plus large
- services graphiques inutiles
- risques de sécurité accrus

Neovim fonctionne **parfaitement en mode terminal**, sans interface graphique.

---

## 🚀 Lancer Neovim

```bash
nvim fichier.txt
```

- Si le fichier existe → il est ouvert
- Sinon → il est créé

---

## 🧭 Modes de Neovim

Neovim fonctionne avec plusieurs **modes** :

| Mode | Rôle |
|----|----|
| Normal | Navigation et commandes |
| Insertion | Écriture de texte |
| Commande | Commandes spéciales |
| Visuel | Sélection de texte |

Le mode **Normal** est le mode par défaut.

---

## ⌨️ Navigation dans Neovim

### 🔹 Déplacements de base

| Touche | Action |
|-----|-----|
| h | gauche |
| l | droite |
| j | bas |
| k | haut |

### 🔹 Navigation rapide

| Touche | Action |
|-----|-----|
| gg | début du fichier |
| G | fin du fichier |
| 0 | début de la ligne |
| $ | fin de la ligne |
| w | mot suivant |
| b | mot précédent |

---

## ✍️ Édition de texte

### 🔹 Passer en mode insertion

| Touche | Action |
|-----|-----|
| i | insérer avant le curseur |
| a | insérer après le curseur |
| o | nouvelle ligne en dessous |
| O | nouvelle ligne au-dessus |

### 🔹 Revenir en mode normal

```bash
ESC
```

---

## 💾 Sauvegarder et quitter

| Commande | Action |
|------|------|
| :w | sauvegarder |
| :q | quitter |
| :wq | sauvegarder et quitter |
| :q! | quitter sans sauvegarder |

---

## 🔍 Recherche dans un fichier

```bash
/texte
```

- `n` → résultat suivant
- `N` → résultat précédent

---

## 🔁 Remplacement de texte (`:%s/`)

### 📌 Syntaxe générale

```bash
:%s/ancien/nouveau/
```

### 🔹 Explication

- `%` → tout le fichier
- `s` → substitute (remplacer)
- `ancien` → texte à remplacer
- `nouveau` → nouveau texte

### 🔹 Exemple

```bash
:%s/http/https/
```

Pour remplacer **toutes les occurrences** sur chaque ligne :

```bash
:%s/http/https/g
```

---

## 🧠 Commandes utiles supplémentaires

| Commande | Action |
|------|------|
| dd | supprimer une ligne |
| yy | copier une ligne |
| p | coller |
| u | annuler |
| Ctrl + r | refaire |

---

## 🧠 À retenir

- Neovim est un éditeur puissant en terminal
- Basé sur Vim mais modernisé
- Fonctionne sans interface graphique
- Très utilisé sur serveurs
- `:%s/` permet de remplacer du texte efficacement