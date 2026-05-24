# 🧭 Bash — Instructions de contrôle et flux d’exécution

> [!info]
> Les instructions de contrôle permettent d’organiser l’exécution d’un script  
> en modifiant le **flux d’exécution** normal (ligne après ligne).

---

## 🔀 Contrôle du flux d’exécution

Le **flux d’exécution** correspond au *chemin suivi par l’interpréteur* dans un programme.  
Par défaut, les instructions sont exécutées **séquentiellement**, ligne après ligne.

Les **instructions de contrôle** permettent de :
- bifurquer selon une condition
- répéter des instructions
- structurer logiquement un algorithme

> [!note]
> Toute construction qui modifie l’ordre normal d’exécution agit sur le flux.

---

## 🧠 Algorithmes et structures de base

### Définition d’un algorithme
Un **algorithme** est une suite **finie et ordonnée d’actions** permettant de résoudre un problème.

### Les 3 structures fondamentales
Il existe **trois structures de contrôle** en programmation moderne :

1. **La séquence**  
   Les instructions s’exécutent les unes après les autres.

2. **La sélection (conditionnelle)**  
   Bifurcation selon un test (`if`).

3. **La répétition (itération)**  
   Répétition d’un bloc (`while`, `for … in …`).

> [!important]
> Tout programme peut être exprimé uniquement avec ces trois structures.

---

## ⚠️ Notion de régression

> [!warning]
> On parle de **régression** lorsqu’une modification du code  
> provoque un **comportement moins bon qu’avant**.

---

## 🧾 Pseudo-code (exemple)

```text
liste = [1,2,3,4,5,6,7,8,9,10]
total = 0

pour chaque nombre de la liste :
    si le nombre est pair :
        ajouter ce nombre au total

afficher total
```

> [!note]
> Le pseudo-code permet de raisonner sur la logique  
> **sans dépendre du langage**.

---

## 🧩 Notion d’expression

### Définition
Une **expression** est une portion de code que l’interpréteur peut **évaluer** pour produire une valeur.

Elle peut contenir :
- des **littéraux** (`10`, `"texte"`)
- des **variables**
- des **opérateurs**

> [!tip]
> En Bash, les conditions reposent sur l’évaluation du **code de retour**.

---

## 📜 Séquences d’instructions

Les instructions s’exécutent **dans l’ordre d’écriture** dans le script  
(sauf si une instruction de contrôle modifie ce comportement).

> [!warning]
> Beaucoup d’erreurs logiques viennent d’un **mauvais ordonnancement** des instructions.

---

## 🔀 Structures conditionnelles — `if`

### Principe
L’instruction `if` permet de **bifurquer le flux d’exécution** :

- si la condition est vraie → exécution du bloc `then`
- sinon → bloc `else` (optionnel)

### Code de retour
- `0` → **vrai**
- `≠ 0` → **faux**

> [!important]
> En Bash, **toute commande est une condition**.

---

## 🧱 Syntaxe générale

```bash
if test
then
    commande_1
    commande_2
elif test
then
    commande_3
else
    commande_4
fi
```

- `elif` et `else` sont **facultatifs**
- `fi` ferme obligatoirement le bloc

---

## 🧪 Exemple simple avec test numérique

```bash
#!/bin/bash

count=10
read -p "Combien ? (10 = vrai) : " count

if [ "$count" -eq 10 ]
then
    echo "Vrai"
else
    echo "Faux"
fi

exit 0
```

> [!tip]
> Toujours **mettre les variables entre guillemets** avec `[ ]`.

---

## 🧪 Formes de conditions en Bash

---

### 1️⃣ Avec `test` ou `[ ]`

```bash
#!/usr/bin/env bash

age=20

if [ "$age" -ge 18 ]
then
    echo "Accès autorisé"
else
    echo "Accès refusé"
fi
```

> [!note]
> `[ ]` est un alias syntaxique de `test`  
> → les **espaces sont obligatoires**.

---

### 2️⃣ Avec les doubles crochets `[[]]`

```bash
#!/usr/bin/env bash

fichier="rapport.conf"

if "$fichier" == *.conf
then
    echo "$fichier est un fichier de configuration"
fi
```

> [!tip]
> `[[]]` permet :
> - les motifs (`*`)
> - les regex (`=~`)
> - pas besoin d’échapper `<` et `>`

---

### 3️⃣ Avec une commande directement

```bash
#!/usr/bin/env bash

if grep -q "^root:" /etc/passwd
then
    echo "L'utilisateur root existe"
fi
```

> [!info]
> `if` teste **le code de retour** de la commande.

---

### 4️⃣ Avec l’arithmétique `(( ))`

```bash
#!/usr/bin/env bash

if (( $# == 1 ))
then
    echo "Un seul argument reçu : $1"
else
    echo "Usage : $0 <argument>" >&2
    exit 1
fi
```

> [!tip]
> `(( ))` est plus lisible pour les **tests numériques**.

---

## ⚡ Formes condensées

### Condition simple
```bash
[ "$1" ] && echo "Argument présent"
```

### Équivalent if / else
```bash
[ -f "$1" ] && echo "Fichier trouvé" || echo "Fichier absent"
```

> [!warning]
> ⚠️ Attention au piège :
> si la commande après `&&` échoue, celle après `||` est exécutée  
> → ce n’est **pas toujours équivalent** à un vrai `if/else`.

---

## 🧾 Summary

> [!summary]
> - Le **flux d’exécution** est modifié par les instructions de contrôle  
> - Trois structures fondamentales : **séquence, condition, itération**
> - `if` se base sur le **code de retour**
> - Toute commande peut servir de condition
> - `[[]]` est plus puissant et plus sûr que `[ ]`
> - Les formes condensées sont pratiques mais parfois piégeuses
> - Une bonne structure évite les **erreurs logiques** et les **régressions**

