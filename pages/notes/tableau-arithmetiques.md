# 🧮 Bash — Évaluations arithmétiques `(( expression ))`

> [!info]
> L’évaluation arithmétique `(( ))` permet d’effectuer des **calculs**,  
> des **comparaisons**, des **opérations logiques** et des **opérations bit à bit**  
> directement dans Bash.

---

## 🧠 Principe général

> [!important]
> À l’intérieur de `(( ))` :
> - les variables sont utilisées **sans `$`**
> - le résultat est évalué comme un **entier**
> - une expression vraie retourne **1**, fausse retourne **0**

---

## 📊 Tableau des évaluations arithmétiques

| Opération | Syntaxe | Description |
|---------|--------|-------------|
| Assignation | `(( a = b ))` | Attribue à `a` la valeur de `b` |
| Addition | `(( a = b + c ))` | Additionne `b` et `c` |
| Soustraction | `(( a = b - c ))` | Soustrait `c` de `b` |
| Multiplication | `(( a = b * c ))` | Multiplie `b` et `c` |
| Division | `(( a = b / c ))` | Division entière |
| Modulo | `(( a = b % c ))` | Reste de la division |

---

## 🔼 Incrémentation et décrémentation

| Opération | Syntaxe | Description |
|---------|--------|-------------|
| Incrémentation | `(( a++ ))` | Après utilisation |
| Décrémentation | `(( a-- ))` | Après utilisation |
| Incrémentation avant | `(( ++a ))` | Avant utilisation |
| Décrémentation avant | `(( --a ))` | Avant utilisation |
| Incrément pas 5 | `(( a += 5 ))` | Pas personnalisable |
| Décrément pas 5 | `(( a -= 5 ))` | Pas personnalisable |

> [!note]
> Les versions **préfixées** (`++a`) modifient la variable **avant** l’évaluation.

---

## 🔍 Comparaisons numériques

| Comparaison | Syntaxe | Description |
|-----------|--------|-------------|
| Égal | `(( a == b ))` | Égalité |
| Différent | `(( a != b ))` | Inégalité |
| Supérieur | `(( a > b ))` | Plus grand |
| Inférieur | `(( a < b ))` | Plus petit |
| ≥ | `(( a >= b ))` | Supérieur ou égal |
| ≤ | `(( a <= b ))` | Inférieur ou égal |

> [!important]
> Ces opérateurs sont **strictement numériques**  
> (contrairement aux comparaisons de chaînes).

---

## 🔗 Opérateurs logiques

| Opérateur | Syntaxe | Description |
|---------|--------|-------------|
| ET | `(( a && b ))` | Vrai si les deux sont vrais |
| OU | `(( a || b ))` | Vrai si au moins un est vrai |
| NON | `(( ! a ))` | Inverse la valeur |

---

## 🧠 Opérations bit à bit

| Opération | Syntaxe | Description |
|---------|--------|-------------|
| AND | `(( a & b ))` | AND bit à bit |
| OR | `(( a | b ))` | OR bit à bit |
| XOR | `(( a ^ b ))` | XOR bit à bit |
| Décalage gauche | `(( a <<= b ))` | Décale à gauche |
| Décalage droite | `(( a >>= b ))` | Décale à droite |

> [!note]
> Les opérations bit à bit travaillent directement sur la **représentation binaire**.

---

## ⬅️ Décalage à gauche `<<`

### Principe
- Tous les bits sont déplacés vers la **gauche**
- Les bits de droite sont remplis par des **zéros**
- Revient à **multiplier par une puissance de 2**

```bash
#!/bin/bash

a=3
(( a <<= 2 ))
echo "$a"
```

### Explication binaire
```text
00000011  (3)
<< 2
00001100  (12)
```

> [!tip]
> Décaler de `n` positions ⇢ multiplier par `2ⁿ`

---

## ➡️ Décalage à droite `>>`

### Principe
- Tous les bits sont déplacés vers la **droite**
- Les bits de gauche sont remplis par le **bit de signe** (entiers signés)
- Revient à **diviser par une puissance de 2**

```bash
#!/bin/bash

a=12
(( a >>= 2 ))
echo "$a"
```

### Explication binaire
```text
00001100  (12)
>> 2
00000011  (3)
```

> [!tip]
> Décaler de `n` positions ⇢ diviser par `2ⁿ` (division entière)

---

## 🧪 Exemples d’utilisation courante

### Dans une condition
```bash
if (( a > b )); then
    echo "a est plus grand"
fi
```

### Dans une boucle
```bash
for ((i=0; i<10; i++)); do
    echo "$i"
done
```

### Mise à jour de compteur
```bash
((count += 1))
```

---

## ⚠️ Bonnes pratiques

> [!warning]
> - `(( ))` ne gère **que des entiers**
> - Division = **division entière**
> - Pas besoin de `$` dans `(( ))`
> - Préférer `(( ))` aux opérateurs `-eq`, `-lt`, etc.

---

## 🧾 Summary

> [!summary]
> - `(( ))` est l’outil central pour l’arithmétique Bash
> - Il permet calculs, comparaisons, logique et bit à bit
> - Plus lisible et plus sûr que `test` pour les nombres
> - Les décalages binaires permettent des optimisations bas niveau
> - Indispensable pour boucles, compteurs et scripts performants
