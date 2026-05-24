# 🧩 Variables positionnelles & variables spéciales en Bash

---

## 🧷 Variables positionnelles — arguments d’un script

Les **variables positionnelles** représentent les arguments passés à un script sur la ligne de commande.

- Créées, gérées et détruites par le shell
- Accès en lecture/écriture (!!!)
- Nom = un **chiffre** correspondant à la position de l’argument

### 📌 Correspondance des positions

| Variable | Signification |
|---------|---------------|
| `$0` | nom du script |
| `$1` | argument n°1 |
| `$2` | argument n°2 |
| ... | ... |
| `$#` | nombre d’arguments |

---

## ⭐ Variables automatiques (ou spéciales)

Les **variables automatiques** (spéciales) sont :

- créées, gérées et détruites par le shell
- **en lecture seule**
- nommées par un caractère **non-alphanumérique**

### 📌 Variables spéciales principales

| Variable | Signification |
|---------|---------------|
| `$#` | nombre d’arguments d’un script |
| `$$` | PID du shell courant |
| `$?` | code retour de la dernière commande |
| `$@` | ensemble des arguments d’un script |
| `$*` | ensemble des arguments d’un script |
| `$!` | PID de la dernière commande lancée en arrière-plan |

---

## 📤 Exportation d’une variable

Par défaut, une variable définie dans un shell **n’est pas accessible** aux processus-fils.

Pour la rendre accessible :

```bash
export variable[=valeur]
```

Elle devient alors une **variable d’environnement**.

---

## 🧠 Syntaxe et opérations sur les variables

| Syntaxe | Explications |
|--------|--------------|
| `${#variable}` | Longueur du contenu de la variable |
| `${variable^}` | Initiale en majuscule |
| `${variable^^}` | Tout en majuscule |
| `${variable,}` | Initiale en minuscule |
| `${variable,,}` | Tout en minuscule |
| `${variable/str1/str2}` | Remplace la première occurrence de str1 par str2 |
| `${variable//str1/str2}` | Remplace toutes les occurrences de str1 par str2 |
| `${variable:début:long}` | Sous-chaîne de longueur long à partir de l’index début (0..) |
| `${variable#modèle}` | Supprime la plus petite chaîne correspondant au modèle depuis le début |
| `${variable##modèle}` | Supprime la plus grande chaîne correspondant au modèle depuis le début |
| `${variable%modèle}` | Supprime la plus petite chaîne correspondant au modèle depuis la fin |
| `${variable%%modèle}` | Supprime la plus grande chaîne correspondant au modèle depuis la fin |
| `${variable:-default}` | Retourne default si variable vide ou non définie |
| `${variable:=default}` | Assigne et retourne default si variable vide ou non définie |
| `${variable:+alt}` | Retourne alt si variable définie et non vide, sinon rien |
| `${variable:?message}` | Affiche message et quitte si variable vide ou non définie |
| `${!prefix*}` | Liste les noms de variables commençant par prefix |
| `${!prefix@}` | Comme `${!prefix*}` mais utile dans des guillemets |

---

## 🧪 Quelques exemples

### 1) Remplacement de la première occurrence

```bash
variable="chocolat chaud chocolat noir"
echo ${variable/chocolat/vanille}
```

Sortie :

```
vanille chaud chocolat noir
```

---

### 2) Remplacement de toutes les occurrences

```bash
variable="chocolat chaud chocolat noir"
echo ${variable//chocolat/vanille}
```

Sortie :

```
vanille chaud vanille noir
```

---

### 3) Extraction de sous-chaîne

```bash
variable="ordinateur portable"
echo ${variable:4:10}
```

Sortie :

```
ateur port
```

---

### 4) Supprimer la plus petite chaîne correspondant au modèle depuis le début

```bash
variable="src/main/java/Example.java"
echo ${variable#*/}
```

Sortie :

```
main/java/Example.java
```

---

### 5) Supprimer la plus grande chaîne correspondant au modèle depuis le début

```bash
variable="src/main/java/Example.java"
echo ${variable##*/}
```

Sortie :

```
Example.java
```

---

### 6) Supprimer la plus petite chaîne correspondant au modèle depuis la fin

```bash
variable="report.final.copy.txt"
echo "${variable%.*}"
```

Sortie attendue :

```
report.final.copy
```

---

### 7) Supprimer la plus grande chaîne correspondant au modèle depuis la fin

```bash
variable="report.final.copy.txt"
echo "${variable%%.*}"
```

Sortie attendue :

```
report
```

---

### 8) `${variable:-default}`

Retourne la valeur par défaut si la variable est vide ou non définie.

```bash
echo "${nondefinie:-'Valeur par défaut'}"
```

Sortie :

```
Valeur par défaut
```

---

### 9) `${variable:=default}`

Assigne et retourne la valeur par défaut si la variable est vide ou non définie.

```bash
echo "${nondefinie:='Valeur par défaut'}"
echo "Après initialisation : $nondefinie"
```

Sortie :

```
Valeur par défaut
Après initialisation : Valeur par défaut
```

---

### 10) `${variable:+alt}`

Retourne une valeur alternative si la variable est définie et non vide.

```bash
variable="quelque chose"
echo "${variable:+'Valeur alternative'}"
```

Sortie :

```
Valeur alternative
```

---

### 11) `${variable:?message}`

Affiche un message et quitte si la variable est vide ou non définie.

```bash
echo "${nondefinie:?'Erreur : variable non définie'}"
```

Sortie :

```
bash: nondefinie: Erreur : variable non définie
```

---

## 🧩 `${!prefix*}` et `${!prefix@}`

```bash
#!/bin/bash

prefix_un=123
prefix_deux=456
prefix_trois=789

echo "Concatenated Variables: ${!prefix*}"

echo "Listed Variables with '@':"
for var in "${!prefix@}"; do
  echo "$var"
done

echo "Listed Variables with '*':"
for var in "${!prefix*}"; do
  echo "$var"
done

exit 0
```

Sortie attendue :

```
Concatenated Variables: prefix_deux prefix_trois prefix_un
Listed Variables with '@':
prefix_deux
prefix_trois
prefix_un
Listed Variables with '*':
prefix_deux prefix_trois prefix_un
```

---

## 🔁 Expansion de variable indirecte — `${!variable}`

L’opérateur `${!variable}` permet une **expansion indirecte** :  
on accède à la valeur d’une variable dont le nom est contenu dans une autre variable.

```bash
#!/bin/bash

var1="Première variable"
var2="Deuxième variable"
var3="Troisième variable"

index=2
var_name="var$index"

echo "La valeur de la variable nommée $var_name est: ${!var_name}"
```

Dans cet exemple :
- `var_name` contient `"var2"`
- `${!var_name}` retourne donc le contenu de `$var2`

Résultat :

```
La valeur de la variable nommée var2 est: Deuxième variable
```

---

## 🧠 À retenir

> [!summary]
> 
> - Les arguments d’un script sont accessibles via `$1`, `$2`, ...
> - `$0` = nom du script, `$#` = nombre d’arguments
> - `$$` = PID du shell, `$?` = code retour, `$!` = PID dernier job en arrière-plan
> - `${variable}` est plus sûr que `$variable`
> - `${!variable}` permet l’expansion indirecte