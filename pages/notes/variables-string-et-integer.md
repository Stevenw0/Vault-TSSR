# 🧮 Bash — Différence entre variables *string* et *integer*

> [!info]
> En Bash, **toutes les variables sont des chaînes de caractères par défaut**.  
> La distinction *string / integer* dépend du **contexte d’utilisation**  
> et des **mécanismes d’évaluation**.

---

## 🧠 Principe fondamental

> [!important]
> Bash est un langage **faiblement typé**.

Cela signifie que :
- une variable **n’a pas de type strict**
- le type dépend de **la manière dont elle est utilisée**
- Bash interprète la valeur **au moment de l’évaluation**

---

## 🔤 Variables de type *string*

### Définition
Une variable *string* contient du **texte**, ou toute valeur traitée comme telle.

### Déclaration
```bash
nom="Alice"
ville="Paris"
age="18"
```

> [!note]
> Même `"18"` est une **chaîne**, tant qu’elle n’est pas utilisée dans un contexte numérique.

---

### Utilisation typique
```bash
echo "$nom habite à $ville"
```

```bash
if [ "$nom" = "Alice" ]; then
    echo "Bonjour Alice"
fi
```

---

### Comparaisons string
```bash
if [ "$a" = "$b" ]; then echo "égales"; fi
if [ "$a" != "$b" ]; then echo "différentes"; fi
```

```bash
if "$a" < "$b"; then echo "ordre lexicographique"; fi
```

> [!warning]
> Les comparaisons `<` et `>` sont **lexicographiques**, pas numériques.

---

## 🔢 Variables de type *integer*

### Définition
Une variable *integer* est une variable **interprétée comme un nombre**  
dans un **contexte arithmétique**.

### Déclaration simple
```bash
count=10
```

> [!note]
> Cette variable est toujours une **chaîne**, mais Bash peut l’évaluer comme un nombre.

---

### Déclaration typée avec `declare`
```bash
declare -i total=5
```

> [!tip]
> `declare -i` force l’évaluation arithmétique automatique.

```bash
total=total+2
echo "$total"
# → 7
```

---

## ➕ Contextes arithmétiques

Bash traite une variable comme un **entier** uniquement dans certains contextes.

### Arithmétique avec `(( ))`
```bash
a=5
b=3

if (( a > b )); then
    echo "a est plus grand"
fi
```

### Expansion arithmétique `$(( ))`
```bash
result=$(( a + b ))
echo "$result"
```

> [!important]
> À l’intérieur de `(( ))`, **pas besoin de `$`** devant les variables.

---

## 🔀 Comparaison string vs integer

### ❌ Erreur courante
```bash
a="10"
b="2"

if "$a" < "$b"; then
    echo "a < b"
fi
```

➡ Résultat incorrect :  
`"10"` est lexicographiquement **inférieur** à `"2"`

---

### ✅ Comparaison numérique correcte
```bash
if (( a < b )); then
    echo "a < b"
fi
```

ou

```bash
if [ "$a" -lt "$b" ]; then
    echo "a < b"
fi
```

---

## 🧪 Opérateurs selon le type

### Opérateurs *string*
| Opérateur | Signification |
|---------|--------------|
| `=` | égalité |
| `!=` | différence |
| `<` | inférieur (lexico) |
| `>` | supérieur (lexico) |
| `-z` | chaîne vide |
| `-n` | chaîne non vide |

---

### Opérateurs *integer*
| Opérateur | Signification |
|---------|--------------|
| `-eq` | égal |
| `-ne` | différent |
| `-lt` | inférieur |
| `-le` | inférieur ou égal |
| `-gt` | supérieur |
| `-ge` | supérieur ou égal |

---

## ⚠️ Pièges fréquents

> [!warning]
> ❌ Comparer des nombres avec des opérateurs string  
> ❌ Oublier les guillemets avec `[ ]`  
> ❌ Mélanger chaînes et arithmétique sans contexte clair

```bash
if [ $var = 10 ]; then
```
❌ Peut produire des erreurs si `var` est vide

```bash
if [ "$var" = "10" ]; then
```
✅ Correct pour une chaîne

---

## 🧾 Bonnes pratiques

> [!tip]
> - Toujours **utiliser `[[]]`** pour les strings
> - Toujours **utiliser `(( ))`** pour les nombres
> - Utiliser `declare -i` pour éviter les erreurs
> - Ne jamais supposer le type : **le contexte fait le type**

---

## 🧾 Summary

> [!summary]
> - Bash est **faiblement typé**
> - Les variables sont des **chaînes par défaut**
> - Le type dépend du **contexte d’évaluation**
> - `[[]]` → strings  
> - `(( ))` → integers  
> - Une mauvaise comparaison peut produire des résultats faux
> - Des contextes clairs = scripts fiables

