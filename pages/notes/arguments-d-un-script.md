# 🧩 Gestion des arguments d’un script

---

## 🎯 Notion d’arguments

Les **arguments d’un script** sont aussi appelés **paramètres positionnels**.  
Ce sont des valeurs passées au script **sur la ligne de commande**.

Exemple d’appel :

```bash
./arg.sh arg1 arg2 arg3 arg4 arg5 arg6 arg7 arg8 arg9 arg10
```

Les paramètres positionnels (`$1`, `$2`, `$3`, …) sont **automatiquement définis** lors de l’appel du script.

---

## 🧪 Exemple simple d’affichage des arguments

```bash
#!/bin/bash
# Commande :
# ./arg.sh arg1 arg2 arg3 arg4 arg5 arg6 arg7 arg8 arg9 arg10

echo "$# argument(s) reçu(s) par le script ${0##*/}"

echo "Argument 1: ${1}"
echo "Argument 2: ${2}"
echo "Argument 3: ${3}"
echo "Argument 4: ${4}"
echo "Argument 5: ${5}"
echo "Argument 6: ${6}"
echo "Argument 7: ${7}"
echo "Argument 8: ${8}"
echo "Argument 9: ${9}"
echo "Argument 10: ${10}"
```

NB : il est **préférable d’utiliser systématiquement `{}`** autour des variables.

---

## 🔧 Modification des arguments avec `set`

Les arguments positionnels ne peuvent **pas être redéfinis directement** :

```bash
1=truc
```

➡️ La commande se termine en **erreur**.

La solution consiste à utiliser la commande `set`.

### Principe

| cmd | arg1 | arg2 | arg3 |
|-----|------|------|------|
| set | truc | bidule | plouf |
|     | $1 | $2 | $3 |

---

### 🧪 Exemple complet

```bash
#!/bin/bash
# Commande : ./salut.sh bonjour toi

echo "Argument1" $1
echo "Argument2" $2
echo "Argument3" $3
echo "Nombre d’arguments: $#"
echo "$1 $2 $3"

set aurevoir vous autres

echo "Argument1" $1
echo "Argument2" $2
echo "Argument3" $3
echo "Nombre d’arguments: $#"
echo "$1 $2 $3"
```

---

## ⚠️ Risque sans `set --`

```bash
arg1="-debug"
arg2="--verbose"

set $arg1
```

❌ Erreur : `set` interprète `-debug` et `--verbose` comme des **options**.

La bonne pratique est :

```bash
set -- $arg1 $arg2
echo $1 $2
```

---

## 🧠 Pourquoi `set --` est important

La commande `set` possède ses **propres options** (`-e`, `-x`, `-u`, etc.).  
Sans `--`, tout ce qui commence par `-` est interprété comme une option.

| Commande | Interprétation par `set` | Résultat |
|--------|--------------------------|----------|
| `set -e fichier` | Active `errexit` | Option activée |
| `set -debug fichier` | Option invalide | ERREUR |
| `set -- -e fichier` | `-e` → `$1` | OK |
| `set -- -debug fichier` | `-debug` → `$1` | OK |

---

## 🧩 Variables spéciales liées aux arguments

| Variable | Description |
|--------|-------------|
| `$#` | Nombre de paramètres |
| `$0` | Nom du script |
| `$1`, `$2`, … | Paramètres positionnels |
| `$@` | Tous les paramètres (séparés) |
| `$*` | Tous les paramètres (concaténés) |
| `$$` | PID du shell |
| `$!` | PID du dernier processus en arrière-plan |
| `$?` | Code retour de la dernière commande |
| `$_` | Dernier argument de la dernière commande |
| `$-` | Options actives du shell |
| `$IFS` | Séparateur interne des champs |

---

## 🔍 Différence entre `$@` et `$*`

Ces deux variables représentent **l’ensemble des arguments**, mais leur comportement diffère **entre guillemets**.

### Comparaison

| Variable | Sans guillemets | Avec guillemets |
|--------|------------------|-----------------|
| `$@` | Identique à `$*` | `"$1"` `"$2"` `"$3"` |
| `$*` | Identique à `$@` | `"$1 $2 $3"` |

---

### `$@` (At sign)

- Chaque argument reste **distinct**
- Préserve les espaces
- Recommandé dans la majorité des cas

---

### `$*` (Asterisk)

- Concatène tous les arguments
- Séparés par le premier caractère de `IFS`
- Utile pour produire une chaîne unique

---

## 🧪 Exemple pratique `$@` vs `$*`

```bash
#!/bin/bash
# Appel : ./script.sh "premier arg" "deuxième arg"

for arg in "$@"; do
    echo "[$arg]"
done

for arg in "$*"; do
    echo "[$arg]"
done
```

Résultat :

```
[premier arg]
[deuxième arg]
[premier arg deuxième arg]
```

---

## 🔁 Énumération des arguments

### ❌ Erreur courante

```bash
for ((i=0; i<$#; i++)); do
    echo "[$@]"
done
```

➡️ Affiche toujours **tous les arguments**.

---

### ✅ Solutions correctes

1) **Expansion indirecte**

```bash
for ((i=1; i<=$#; i++)); do
    echo "[${!i}]"
done
```

2) **Conversion en tableau (recommandé)**

```bash
arguments=("$@")
for ((i=0; i<${#arguments[@]}; i++)); do
    echo "[${arguments[i]}]"
done
```

3) **Boucle directe**

```bash
compteur=1
for argument in "$@"; do
    echo "Argument $compteur: [$argument]"
    ((compteur++))
done
```

---

## 🧠 Nature de `$@` et tableaux

- `$@` **n’est pas un vrai tableau**
- Impossible : `${@[0]}`
- Accès indirect : `${!i}`
- Accès direct : conversion en tableau

```bash
mes_args=("$@")
echo "${mes_args[0]}"
echo "${mes_args[1]}"
```

---

## 🔀 Commande `shift`

La commande `shift` supprime `$1` et décale tous les arguments.

Effets :
- `$2` devient `$1`
- `$3` devient `$2`
- `$#` diminue de 1

Syntaxe :

```bash
shift
shift n
```

---

### 🧪 Exemple avec `shift`

```bash
#!/bin/bash
# Appel : ./traiter_fichiers.sh rapport.txt config.conf données.csv

echo "=== AVANT SHIFT ==="
echo "Nombre d'arguments : $#"
echo "Premier fichier : $1"
echo "Restants : $2 $3"

shift

echo "=== APRÈS SHIFT ==="
echo "Nombre d'arguments : $#"
echo "Premier fichier : $1"
echo "Restants : $2"
```

---

### Utilisation typique en boucle

```bash
#!/bin/bash
while [ $# -gt 0 ]; do
    echo "Traitement de : $1"
    shift
done
```

---

## 🧠 À retenir

> [!summary]
> 
> - Les arguments sont accessibles via `$1`, `$2`, …
> - Toujours utiliser `"${variable}"`
> - Préférer `"$@"` à `"$*"`
> - Utiliser `set --` pour éviter les erreurs
> - Convertir en tableau pour un accès par index
> - `shift` permet de parcourir les arguments proprement