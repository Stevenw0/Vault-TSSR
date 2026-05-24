# 🐚 Bash — Commandes internes, tests et comparaisons

> [!info]
> Cette note regroupe les bases essentielles de Bash sur les commandes internes / externes  
> et les tests conditionnels (`test`, `[ ]`, `[[]]`).

---

## 📌 Commandes internes / externes

### 🔹 Commande externe
- S’exécute dans un **processus dédié**
- Exemple :
```bash
basename fichier.txt
```

### 🔹 Commande interne (builtin)
- S’exécute **dans le processus du shell**
- Exemples :
`cd`, `echo`, `history`, `export`, `pwd`, `set`, `alias`, `exit`

### 🔹 Commandes liées à `test`
```bash
type test
which test
```

- `test` est une **primitive du shell**
- `which test` retourne généralement :
```bash
/usr/bin/test
```

> [!note]
> Même si `/usr/bin/test` existe, la version **interne au shell est utilisée en priorité**.

### 🔹 Priorité
- Les **commandes internes sont prioritaires** sur les commandes externes

### 🔹 Forcer l’appel d’une commande externe
```bash
command nom_commande
```

---

## 📂 Exemples de commandes internes

### 🧭 Navigation et fichiers
```bash
cd /home/utilisateur
pwd
```

### 🌱 Variables et environnement
```bash
export VARIABLE=valeur
set -x
declare -i nombre=42
```

> [!tip]
> `declare -i` force une variable à être interprétée comme un entier.

### 🕘 Historique et sessions
```bash
history
logout
exit 0
```

### ⚙️ Contrôle des tâches
```bash
jobs
bg %1
fg %1
```

### 🔁 Alias et fonctions
```bash
alias ll='ls -la'
unalias ll
```

---

## 🧪 Instruction `test`

La commande `test` permet d’effectuer des **tests conditionnels**, souvent utilisés dans des structures `if`.

- Tests sur les **entiers**
- Tests sur les **chaînes**
- Tests sur les **fichiers**

👉 Si le test réussit, le **code retour est 0**

> [!important]
> En Bash, `0 = vrai` et `≠ 0 = faux` (contrairement à beaucoup de langages).

---

## 🔢 Tests sur les entiers

### Syntaxe
```bash
test nb1 opérateur nb2
```

### Opérateurs numériques
| Opérateur | Signification |
|---------|--------------|
| `-eq` | égal |
| `-ne` | différent |
| `-lt` | inférieur |
| `-le` | inférieur ou égal |
| `-gt` | supérieur |
| `-ge` | supérieur ou égal |

---

## 🔤 Tests sur les chaînes

### Opérateurs unaires
| Opérateur | Signification |
|---------|--------------|
| `-z` | chaîne vide |
| `-n` | chaîne non vide |
| `-f` | fichier existe |

> [!note]
> Les opérateurs unaires n’attendent **qu’un seul opérande**.

### Opérateurs binaires
- Comparaison **lexicographique** (ordre ASCII / Unicode)

### Comparaisons classiques
| Commande | Description |
|-------|------------|
| `[ str1 = str2 ]` | chaînes identiques |
| `[ str1 == str2 ]` | identique (Bash moderne) |
| `[ str1 != str2 ]` | différentes |
| `[ str1 \< str2 ]` | str1 < str2 |
| `[ str1 \> str2 ]` | str1 > str2 |

> [!warning]
> Avec `[ ]`, les opérateurs `<` et `>` doivent être **échappés**  
> sinon ils sont interprétés comme des redirections.

---

## 📖 Comparaison lexicographique

- Comparaison **caractère par caractère**
- Basée sur la table **ASCII / Unicode**
- Si une chaîne est un préfixe de l’autre, la **plus courte est inférieure**

### Exemple
```text
apple < banana
banana > apple
```

---

## ⚠️ Pas de `>=` et `<=` pour les chaînes

> [!info]
> Ces opérateurs existent pour les **nombres**, pas pour les **strings**.

### Simulation
```bash
if | "$str1" == "$str2"; then
    echo "str1 >= str2"
fi
```

```bash
if | "$str1" == "$str2"; then
    echo "str1 <= str2"
fi
```

---

## 🔲 Crochets simples `[ ]` vs doubles `[[]]`

### 1️⃣ Interprétation des opérateurs
- `[ ]` : conforme POSIX, nécessite des échappements
- `[[]]` : Bash avancé, plus lisible, pas d’échappement

### 2️⃣ Chaînes vides et espaces
```bash
var=""
if [ $var = "value" ]; then echo "True"; fi
```
❌ Erreur : opérateur unaire attendu

```bash
if $var == "value"; then echo "True"; else echo "False"; fi
```
✅ Fonctionne sans erreur

> [!tip]
> Toujours **mettre les variables entre guillemets**, surtout avec `[ ]`.

### 3️⃣ Expressions régulières (uniquement `[[]]`)
```bash
str="hello"
if $str == h*; then
    echo "match"
fi
```

```bash
string="Bash scripting"
if $string =~ ^Bash; then
    echo "It starts with Bash"
fi
```

### 4️⃣ Opérateurs logiques
```bash
if [ "$a" = "test" -a "$b" = "prod" ]; then
    echo "OK"
fi
```

```bash
if "$a" == "test" && "$b" == "prod"; then
    echo "OK"
fi
```

> [!note]
> `-a` et `-o` sont considérés comme **obsolètes**.

### 5️⃣ Portabilité
- `[ ]` : portable POSIX
- `[[]]` : spécifique Bash / Zsh

---

## 🔠 Comparaison de chaînes
```bash
a="abc"
b="abd"

if [ $a \< $b ]; then echo "a < b"; fi
if $a < $b; then echo "a < b"; fi
```

---

## 📁 Tests sur les fichiers

### Exemples
```bash
test -e /dev/pts/0 && echo "existe" || echo "absent"
```

```bash
[ -x fic_1.txt ] && echo "exécutable"
```

```bash
-s fic_1 && echo "non vide"
```

### Opérateurs fichiers
| Opérateur | Description |
|---------|------------|
| `-a` | existe (obsolète) |
| `-e` | existe |
| `-f` | fichier ordinaire |
| `-d` | répertoire |
| `-r` | lisible |
| `-w` | modifiable |
| `-x` | exécutable |
| `-s` | non vide |
| `-L` | lien symbolique |
| `-b` | périphérique bloc |
| `-c` | périphérique caractère |
| `-S` | socket |
| `-p` | pipe |
| `-nt` | plus récent |
| `-ot` | plus ancien |
| `-ef` | même inode |
| `-O` | appartient à l’utilisateur |
| `-G` | appartient au groupe |

---

## 🧾 Summary

> [!summary]
> - Les **commandes internes** sont prioritaires sur les externes  
> - `test`, `[ ]` et `[[]]` permettent des **tests conditionnels**
> - `[[]]` est **plus sûr et plus lisible** que `[ ]`
> - Les comparaisons de chaînes sont **lexicographiques**
> - Il n’existe pas de `>=` ou `<=` pour les strings
> - Les tests fichiers sont très riches et essentiels en scripting Bash

