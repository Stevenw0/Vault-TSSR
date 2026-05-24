# 🔗 Tubes (PIPE) en Bash

## 📌 Qu’est-ce qu’un tube (pipe) ?

Un **tube** (*pipe* en anglais) permet de **connecter la sortie standard d’un programme à l’entrée standard d’un autre programme**.  
Il est représenté par l’opérateur `|`.

Les données circulent **toujours de gauche à droite**.

---

## 🔧 Syntaxe générale

```bash
programme1 | programme2
```

- `programme1` produit une sortie (STDOUT)
- `programme2` reçoit cette sortie en entrée (STDIN)

Le pipe permet de **chaîner des commandes** sans utiliser de fichiers temporaires.

---

## 🔄 Principe de fonctionnement

La sortie standard du premier processus devient l’entrée standard du second.

Schéma de fonctionnement :

```
PROCESSUS1 (stdout) ---- | ---- (stdin) PROCESSUS2
```

Seule la **sortie standard (STDOUT)** est transmise par défaut dans un pipe.

---

## 🧪 Exemple simple

### 📌 Recherche d’un processus

```bash
ps aux | grep login
```

### 🔍 Explication

- `ps aux` affiche tous les processus
- `grep login` filtre les lignes contenant le mot `login`
- le pipe transmet la sortie de `ps` à `grep`

---

## 🧠 Équivalence avec `pgrep`

L’utilitaire `pgrep` permet d’obtenir un résultat équivalent plus directement.

```bash
pgrep login
```

---

## 🎯 Cas d’usage fréquents des pipes

- Filtrer une sortie (`grep`)
- Trier des résultats (`sort`)
- Compter des lignes (`wc`)
- Analyser des logs
- Chaîner plusieurs traitements

Les pipes sont **au cœur de la philosophie UNIX** :  
*faire une chose, et la faire bien*.

---

## ⚠️ Points importants à retenir

- Le pipe ne transmet **pas STDERR** par défaut
- Chaque commande du pipe s’exécute dans un **processus distinct**
- Les pipes peuvent être chaînés à l’infini

---

## 🧠 À retenir

- `|` relie deux commandes
- STDOUT → STDIN
- Les données vont de gauche à droite
- Évite les fichiers intermédiaires
- Indispensable en Bash et en administration système