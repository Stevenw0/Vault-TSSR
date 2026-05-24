# 🔁 Bash — Structures itératives : boucle `for`

> [!info]
> Les structures itératives permettent de **répéter un bloc d’instructions**  
> tant qu’une condition est satisfaite ou pour chaque élément d’un ensemble.

---

## 🔂 Les structures itératives en Bash

Bash propose principalement :
- `for`
- `while`
- `until`

Cette note se concentre sur la **boucle `for`**, qui existe sous **deux formes**.

---

## 🔹 Boucle `for` — première forme : *style liste*

### Principe
La boucle parcourt **une liste de valeurs** et affecte chaque valeur à une variable.

```bash
#!/bin/bash

for i in arg1 arg2 arg3 arg4
do
    echo "$i"
done
```

> [!note]
> Ici, la liste des valeurs est **figée** et connue à l’avance.

---

## 🔄 Listes dynamiques

La liste parcourue peut être **dynamique**, provenant de différentes sources :

### Depuis une variable
```bash
liste="un deux trois"
for i in $liste
do
    echo "$i"
done
```

### Depuis une commande
```bash
for i in $(ls)
do
    echo "$i"
done
```

> [!warning]
> Attention aux espaces dans les noms de fichiers avec `$(ls)`.

### Depuis les arguments du script
```bash
for i in "$@"
do
    echo "$i"
done
```

> [!tip]
> `"$@"` est la **bonne pratique** pour parcourir les arguments.

---

## 🔹 Boucle `for` — seconde forme : *style C*

### Principe
Inspirée du langage C, cette forme repose sur :
- une **initialisation**
- une **condition**
- une **incrémentation**

```bash
#!/bin/bash

for ((i=0; i<10; i++))
do
    > "$i.png"
done
```

> [!important]
> Cette forme est idéale pour les **compteurs numériques**.

---

## 🔁 Boucle `for` avec plusieurs variables

```bash
#!/bin/bash

for ((i=0, j=10; i<10; i++, j--))
do
    echo "i = $i, j = $j"
done
```

> [!tip]
> Le style C permet de gérer **plusieurs compteurs** simultanément.

---

## 🔄 Équivalent en style liste

### Variante 1 — calcul direct

```bash
#!/bin/bash

for i in {0..9}
do
    j=$((10 - i))
    echo "i = $i, j = $j"
done
```

---

### Variante 2 — variable décrémentée

```bash
#!/bin/bash

j=10
for i in {0..9}
do
    echo "i = $i, j = $j"
    ((j--))
done
```

> [!note]
> Ici, l’arithmétique est réalisée via `(( ))`.

---

## ⚖️ Comparaison des deux styles de boucle `for`

### 🟦 Style liste
> [!tip]
> ✔ Très lisible  
> ✔ Flexible (variables, commandes, arguments)  
> ✔ Couramment utilisé en Bash  
> ❌ Moins précis pour les index complexes  

---

### 🟩 Style C
> [!note]
> ✔ Contrôle précis de l’index  
> ✔ Parfait pour les boucles numériques  
> ✔ Gestion facile de plusieurs variables  
> ❌ Moins intuitif pour les débutants  

---

## ⚠️ Bonnes pratiques

> [!important]
> - Toujours **mettre les variables entre guillemets**
> - Préférer `"$@"` à `$*`
> - Utiliser le **style C** pour les compteurs
> - Utiliser le **style liste** pour les données textuelles

---

## 🧾 Summary

> [!summary]
> - Les structures itératives permettent de **répéter des instructions**
> - La boucle `for` existe en **style liste** et **style C**
> - Le style liste est simple et flexible
> - Le style C offre un contrôle précis sur les index
> - Les deux formes sont équivalentes mais adaptées à des usages différents
> - Un bon choix de structure améliore la lisibilité et la fiabilité des scripts
