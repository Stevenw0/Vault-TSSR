# 🧮 Gestion des variables en Bash

---

## 🎯 Rôle des variables

Les variables permettent de :
- stocker des valeurs
- paramétrer des scripts
- transmettre des informations entre commandes et processus
- rendre les scripts dynamiques et réutilisables

> [!summary]  
> En Bash, **toute valeur est une chaîne de caractères**.  
> Exemple : `321` est la chaîne `"3" "2" "1"`.

---

## 🧱 Types de variables

### 1️⃣ Variables utilisateur (locales)

- Créées et gérées par l’utilisateur
- Accessibles en lecture / écriture
- Portée : shell courant uniquement

**Règles de nommage :**
- caractères alphanumériques et `_`
- sensible à la casse
- ne commence jamais par un chiffre
- éviter les majuscules (réservées au shell)
- préférer le `snake_case`

---

### 2️⃣ Variables d’environnement

- Créées et gérées par le shell
- Héritées par les processus enfants
- Portée : session
- Toujours des chaînes de caractères

> [!info]  
> Elles servent à la **configuration système**, à la **communication inter-processus** et à la **personnalisation de l’environnement**.

---

## ✍️ Création de variables

### 📌 Forme non interactive

```bash
nom=valeur
```

La valeur peut être :

- **statique**
```bash
fic=resu
```

- **dynamique**
```bash
stage=$HOME
stage=$(date)
```

- **combinée**
```bash
fic=resu
newfic=${fic}_$(date +%Y%m%d)
echo "$newfic"
# resu_20240621
```

⚠️ Attention aux effets de bord :

```bash
newfic_sans=$fic_$(date +%Y%m%d)
echo "$newfic_sans"
# 20240621
```

👉 `$fic_` est interprété comme une variable inexistante.

✅ **Bonne pratique :**
```bash
${variable}
```

---

### 📌 Forme interactive

```bash
read variable
```

Avec message :

```bash
read -p "Votre réponse : " variable
```

---

## 🗑️ Suppression d’une variable

```bash
unset nom_de_variable
```

---

## 🔎 Accès au contenu d’une variable

```bash
echo "$variable"
```

Toujours **protéger avec des guillemets** :

```bash
cat "$dossier/$fichier"
```

---

## 🧰 Commande `set`

```bash
set
```

Affiche :
- variables locales
- variables d’environnement
- fonctions du shell

---

## 🔤 Manipulation des chaînes de caractères

### 📏 Longueur d’une chaîne

```bash
${#variable}
```

---

### 🔠 Gestion de la casse

```bash
${var^^}   # majuscules
${var,,}   # minuscules
```

---

### ✂️ Sous-chaînes

```bash
${var:position:longueur}
```

---

## ➕ Opérations arithmétiques

```bash
$(( expression ))
```

Exemple :

```bash
a=5
b=3
echo $((a + b))
```

---

## 🌍 Variables d’environnement — inspection

### 📋 Liste complète

```bash
set
```

### 📋 Variables exportées

```bash
env
export -p
```

### 📋 Variable spécifique

```bash
echo "$HOME"
echo "$PATH"
```

---

## 🧩 Variables système importantes

| Variable | Rôle |
|--------|------|
| HOME | Répertoire utilisateur |
| PATH | Chemins de recherche |
| SHELL | Shell par défaut |
| TERM | Type de terminal |
| LOGNAME | Nom de connexion |
| PWD | Répertoire courant |

---

## 🔧 Création et exportation

```bash
ma_variable="valeur"
export ma_variable
```

Ou directement :

```bash
export MA_VARIABLE="valeur"
```

---

## 🔐 Guillemets et protection

```bash
export MESSAGE='Bonjour tout le monde'
export CHEMIN_COMPLET="$HOME/scripts"
```

⚠️ Pas d’espace autour du `=`.

---

## 🧠 Focus sur PATH

```bash
echo "$PATH"
which date
```

Ajout :

```bash
export PATH="$PATH:/usr/local/bin"
export PATH="/opt/bin:$PATH"
```

⚠️ Ne jamais ajouter `.` en tête du PATH.

---

## 🎨 PS1 et PS2 — invites

### PS1

```bash
export PS1="\u@\h:\w$ "
```

Séquences utiles :

| Code | Signification |
|----|---------------|
| \u | utilisateur |
| \h | machine |
| \w | chemin complet |
| \W | dossier courant |
| \d | date |
| \t | heure |

---

### PS2

```bash
export PS2="> "
```

---

## 🖥️ TERM — type de terminal

```bash
echo "$TERM"
find /usr/share/terminfo -name "$TERM" 2>/dev/null
```

---

## ⏲️ Variables spécialisées

### TMOUT — expiration de session

```bash
export TMOUT=600
export TMOUT=0
```

---

### Éditeur par défaut

```bash
export EDITOR="nvim"
export VISUAL="nvim"
```

---

## 🔁 Exportation et héritage

### Local vs exporté

```bash
var_locale="x"
export var_exportee="y"
```

Test d’héritage :

```bash
bash -c 'echo "$var_locale"'
bash -c 'echo "$var_exportee"'
```

---

## 📋 Variables devant être exportées

| Variable | Doit être exportée |
|-------|-------------------|
| PATH | Oui |
| HOME | Oui |
| TERM | Oui |
| PWD | Oui |
| PS1 | Non |
| PS2 | Non |

---

## 🗑️ Suppression

```bash
unset ma_variable
```

---

## 🚀 Cas d’usage avancés

### Configuration applicative

```bash
export DB_HOST="localhost"
export DB_PORT="5432"
```

---

### Déploiement

```bash
export ENV_TYPE="production"
export APP_VERSION="2.1.3"
```

---

### Variables conditionnelles

```bash
if "$HOSTNAME" =~ ^prod; then
    export LOG_LEVEL="ERROR"
else
    export LOG_LEVEL="DEBUG"
fi
```

---

## 💾 Persistance

### Fichiers utilisés

- `/etc/profile`
- `~/.bash_profile`
- `~/.bashrc`
- `~/.profile`

Exemple :

```bash
export EDITOR="nvim"
export LANG="fr_FR.UTF-8"
export PATH="$HOME/bin:$PATH"
```

---

## 🧠 À retenir

> [!summary]
> 
> - Toutes les variables sont des chaînes
> - `${variable}` évite les erreurs
> - `export` contrôle l’héritage
> - PATH est critique pour la sécurité
> - Indispensable pour scripts et serveurs
