# 🐚 Introduction : Le Shell

## 📌 Qu’est-ce que le Shell ?

Le **Shell** est un **programme informatique** qui agit comme :

- un **interpréteur de commandes**
- une **interface entre l’utilisateur et le noyau (kernel)** du système d’exploitation

Il permet à l’utilisateur de :
- lancer des programmes
- manipuler des fichiers
- automatiser des tâches via des scripts

Le Shell traduit les commandes utilisateur en appels compréhensibles par le **kernel**.

---

## 🧠 Le Shell et le kernel

Schéma logique :

```
Utilisateur → Shell → Kernel → Matériel
```

- Le **kernel** gère le matériel et les ressources
- Le **shell** sert d’intermédiaire humain / système

---

## 🕰️ Historique des Shell Unix

### 🟡 Thompson Shell (1971)
- Créé par **Dennis Thompson**
- Premier shell pour Unix
- Fonctionnalités très basiques

---

### 🟠 Bourne Shell – `sh` (1980)
- Développé par **Stephen Bourne** (AT&T Bell Labs)
- Shell original d’Unix
- Simple et robuste
- Peu de fonctionnalités avancées (pas d’historique, pas d’alias)

---

### 🔵 C Shell – `csh`
- Développé par **Bill Joy** (BSD Unix)
- Introduit :
  - historique des commandes
  - alias
  - syntaxe proche du langage C
- Très populaire dans les environnements BSD

---

### 🟢 Korn Shell – `ksh`
- Développé par **David Korn** (AT&T Bell Labs)
- Amélioration du Bourne Shell
- Ajoute :
  - tableaux
  - expressions régulières
  - langage de script avancé

---

### 🔴 Bourne-Again Shell – `bash` (1989)
- Développé par **Brian Fox** pour le projet GNU
- Compatible avec `sh`
- Ajoute :
  - complétion automatique
  - historique avancé
  - gestion des signaux
  - scripting puissant

👉 **Shell par défaut de la majorité des distributions Linux**

Caractéristiques :
- très proche du **Korn Shell**
- emprunts au **C Shell**

---

### 🟣 Z Shell – `zsh`
- Extension avancée du Bourne Shell
- Fonctionnalités :
  - complétion automatique très évoluée
  - thèmes
  - plugins
- Très populaire chez les développeurs et utilisateurs avancés

---

### ⚪ Autres shells

- `ash`
- `dash` (rapide, utilisé pour les scripts système)
- `fish` (orienté utilisateur, non POSIX)

---

## 🧪 Atelier : installation de Zsh

(atelier pratique – hors scope de cette page)

Comparaison Bash vs Zsh :  
https://hedgedoc.dawan.fr/F_qHstSGT0Kp1Gu-mQqftQ

---

## 🌍 L’environnement Bash

Le comportement de Bash dépend :
- du **type de shell**
- des **fichiers de configuration chargés**

---

## 🧭 Séquence de chargement des fichiers Bash

### 🔐 Shell de connexion interactif

| Ordre | Fichier | Rôle | Distribution |
|-----|--------|------|-------------|
| 1 | `/etc/profile` | Environnement système global | Toutes |
| 2 | `/etc/bash.bashrc` | Configuration bash système | Toutes |
| 3 | `~/.bash_profile` | Configuration utilisateur principale | RedHat / CentOS |
| 4 | `~/.bash_login` | Alternative à bash_profile | Toutes |
| 5 | `~/.profile` | Configuration shell générique | Debian / Ubuntu |
| 6 | `~/.bashrc` | Configuration bash interactive | Toutes |
| 7 | `~/.bash_logout` | Actions à la déconnexion | Toutes |

⚠️ **Note** : pour les fichiers 3, 4 et 5, **seul le premier trouvé est exécuté**.

---

### 💬 Shell interactif simple (non login)

| Ordre | Fichier | Rôle |
|-----|--------|------|
| 1 | `/etc/bash.bashrc` | Configuration bash système |
| 2 | `~/.bashrc` | Configuration utilisateur |

---

### 🤖 Shell non-interactif (scripts)

| Ordre | Élément | Rôle |
|-----|--------|------|
| 1 | `BASH_ENV` | Fichier optionnel de configuration |

Particularité :
- les scripts **ne lisent aucun fichier par défaut**
- sauf si la variable `BASH_ENV` est définie

---

## 📂 Contenu des fichiers principaux

### `/etc/profile`
- Variables système : `PATH`, `LANG`, `TERM`
- Définition du `umask`
- Alias globaux
- Actions automatiques à la connexion
- Appel des scripts dans `/etc/profile.d/`

---

### `/etc/bash.bashrc`
- Configuration Bash pour tous les utilisateurs
- Vérification du mode interactif
- Ajustement de la taille du terminal (`LINES`, `COLUMNS`)
- Historique global des commandes

---

### `~/.bashrc`
- Alias personnels
- Fonctions utilisateur
- Variables d’environnement personnelles
- Personnalisation du prompt (`PS1`)
- Appel de `~/.bash_aliases` si présent

---

### `~/.profile`
- Configuration portable (compatible avec d’autres shells)
- Appel de `~/.bashrc` si Bash est détecté
- Ajout de `~/bin` au `PATH`
- Variables d’environnement utilisateur

---

## 🧠 À retenir

- Le shell est l’interface entre l’utilisateur et le kernel
- Bash est le shell le plus répandu
- Zsh est une alternative moderne et puissante
- Le comportement du shell dépend des fichiers de configuration
- Comprendre l’ordre de chargement est **essentiel en administration**