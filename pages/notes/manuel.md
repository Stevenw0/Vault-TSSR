# 📘 Utilisation de `man`

## 📌 Présentation générale

Le **manuel en ligne** sous Linux est accessible grâce à la commande `man`.  
Il permet de consulter la documentation complète des commandes, fichiers et concepts du système.

`man` est souvent la **première source officielle** pour comprendre une commande.

---

## 🗂️ Organisation du manuel

Le manuel est divisé en **sections numérotées**, chacune correspondant à un type de contenu précis.

### 📚 Sections du manuel

1. Commandes utilisateur  
2. Appels système  
3. Bibliothèques de programmation (C)  
4. Fichiers spéciaux, périphériques et pilotes  
5. Formats de fichiers  
6. Jeux  
7. Divers  
8. Commandes d’administration  
9. Noyau (kernel)  

---

## ⚙️ Syntaxe de la commande `man`

```bash
man [options] [section] commande
```

Par défaut, `man` parcourt les sections **dans l’ordre numérique**.

Il est possible de préciser une section pour éviter les conflits de noms.

### 📌 Exemples

```bash
man mkdir
```

```bash
man 2 mkdir
```

---

## 🧭 Se déplacer dans le manuel

Lorsque le manuel est ouvert, plusieurs raccourcis clavier sont disponibles :

- Flèches ↑ ↓ : déplacement ligne par ligne  
- Page Up / Page Down ou Espace : déplacement page par page  
- Home : revenir au début  
- End : aller à la fin  
- `/` : rechercher un mot  
- `/` + Entrée : aller au résultat suivant  
- `Q` : quitter le manuel  

Le manuel utilise le pager `less`.

---

## 📖 Principales sections d’une page `man`

Chaque page de manuel est découpée en sections clairement identifiées.

### 🔹 Description des sections

**NAME**  
Nom de la commande et courte description.

**SYNOPSIS**  
Liste des différentes façons d’utiliser la commande.  
Section **essentielle à comprendre**.

**DESCRIPTION**  
Description détaillée du fonctionnement et des options disponibles.

**AUTHOR**  
Auteur(s) du programme.

**REPORTING BUGS**  
Informations pour signaler un bug.

**COPYRIGHT**  
Licence d’utilisation du programme (souvent GPL).

**SEE ALSO**  
Commandes similaires ou complémentaires.

---

## 🧠 Comprendre la section SYNOPSIS

### 📌 Exemple avec `mkdir`

```bash
man mkdir
```

Extrait du manuel :

```
SYNOPSIS
mkdir [OPTION]… DIRECTORY…
```

### 🔍 Lecture du SYNOPSIS

- `[OPTION]`  
  → élément **facultatif** (entre crochets)

- `DIRECTORY`  
  → argument **obligatoire** (pas entre crochets)

- `…`  
  → l’argument peut être **répété plusieurs fois**

Les mots en **gras** sont à taper tels quels.  
Les mots **soulignés** doivent être remplacés par une valeur adaptée.

---

## 🧪 Obtenir des exemples concrets

### 📦 Le paquet `tldr`

`tldr` fournit des **exemples simples et pratiques** pour les commandes.

```bash
sudo apt install tldr
tldr -u
tldr tar
```

Parfait pour un usage rapide sans lire tout le manuel.

---

### 🐍 Le paquet `eg` (basé sur Python)

Alternative fournissant également des exemples :

```bash
sudo apt install pipx
pipx ensurepath
pipx install eg
eg tar
```

---

## 🧠 À retenir

- `man` est la référence officielle  
- Le SYNOPSIS est crucial  
- `/` permet de rechercher dans le manuel  
- `tldr` et `eg` complètent efficacement `man`  