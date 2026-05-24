# 📁 Création d’arborescences — l’expansion d’accolades

## 📌 Objectif de la commande

Cette commande permet de **créer une arborescence complète de dossiers en une seule ligne**, de manière rapide et efficace.

Commande utilisée :

```bash
mkdir -p Exochemin/DOS1/{SDOS1,SDOS2} Exochemin/DOS2/{SDOS3,SDOS4/SSDOS1}
```

---

## 🌳 Arborescence créée

Cette commande crée exactement la structure suivante :

```
Exochemin/
├── DOS1/
│   ├── SDOS1/
│   └── SDOS2/
└── DOS2/
    ├── SDOS3/
    └── SDOS4/
        └── SSDOS1/
```

Tous les dossiers sont créés **en une seule commande**, même si aucun n’existait auparavant.

---

## 🔍 Explication détaillée de la commande

### 1️⃣ `mkdir`

Signifie **make directory**.  
C’est la commande Linux utilisée pour **créer des dossiers**.

---

### 2️⃣ Option `-p` (parents)

L’option `-p` indique à `mkdir` de :

- créer automatiquement les **dossiers parents manquants**
- **ne pas afficher d’erreur** si un dossier existe déjà

Exemple logique :

```bash
mkdir -p A/B/C
```

Même si `A` ou `B` n’existent pas, tout est créé.

---

### 3️⃣ `Exochemin/DOS1/{SDOS1,SDOS2}` — Expansion d’accolades

Le shell applique une **expansion d’accolades (brace expansion)** avant d’exécuter la commande.

Il transforme automatiquement cette partie en :

- `Exochemin/DOS1/SDOS1`
- `Exochemin/DOS1/SDOS2`

Résultat :

- création du dossier `Exochemin`
- création de `DOS1`
- création de `SDOS1` et `SDOS2` à l’intérieur de `DOS1`

Cette expansion est faite par le **shell**, pas par `mkdir`.

---

### 4️⃣ `Exochemin/DOS2/{SDOS3,SDOS4/SSDOS1}` — Sous-dossiers imbriqués

Même principe, avec une structure plus profonde.

Le shell développe en :

- `Exochemin/DOS2/SDOS3`
- `Exochemin/DOS2/SDOS4/SSDOS1`

Résultat :

- création de `DOS2`
- création de `SDOS3`
- création de `SDOS4`
- création de `SSDOS1` à l’intérieur de `SDOS4`

---

## 🧠 Pourquoi une seule commande suffit ?

- Le shell développe les `{}` **avant l’exécution**
- `mkdir -p` gère toute la hiérarchie
- L’arborescence complète est créée en une fois

En pratique, c’est **équivalent** à exécuter plusieurs commandes `mkdir` successives.

---

## 🔎 Visualiser sans créer (astuce)

Pour voir ce que le shell va réellement exécuter **sans rien créer**, on peut utiliser `echo` :

```bash
echo Exochemin/DOS1/{SDOS1,SDOS2} Exochemin/DOS2/{SDOS3,SDOS4/SSDOS1}
```

Cela permet de comprendre l’expansion d’accolades avant l’exécution réelle.

---

## ✅ Exemples de commandes qui utilisent l’expansion d’accolades

### 📁 Gestion de fichiers et dossiers

- `mkdir`
- `touch`
- `cp`
- `mv`
- `rm`
- `ln`

---

### 📄 Lecture et affichage

- `ls`
- `cat`
- `less`
- `more`
- `tree`

---

### 🖨️ Test et debug

- `echo`
- `printf`

---

### 🔧 Autres commandes courantes

- `chmod`
- `chown`
- `stat`
- `du`
- `find` (dans certains cas)

---

## 🎯 Cas d’usage typiques

- Création rapide d’arbres de projets
- Organisation de dossiers de cours
- Scripts d’automatisation
- Administration système

---

## 🧠 À retenir

- `mkdir -p` crée toute une hiérarchie de dossiers
- `{}` permet de générer plusieurs chemins automatiquement
- Le shell fait l’expansion avant l’exécution
- Gain de temps énorme et commande très propre