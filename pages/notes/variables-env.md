# 🌍 Variables d’environnement sous Linux (ENV)

## 📌 Qu’est-ce qu’une variable d’environnement ?

Une **variable d’environnement** est une **variable globale** utilisée par le système et les applications pour :

- définir un comportement
- stocker des informations système
- transmettre des paramètres aux programmes

Les variables d’environnement sont accessibles par le **shell** et par tous les **processus enfants** lancés depuis celui-ci.

---

## 🧠 À quoi servent les variables d’environnement ?

Les variables d’environnement permettent notamment :

- d’indiquer le **répertoire personnel** d’un utilisateur
- de définir la **langue et la localisation**
- de configurer le **PATH**
- de personnaliser le comportement des applications

Elles rendent le système **flexible**, **portable** et **configurable** sans modifier le code.

---

## 📋 Variables d’environnement courantes

### 🔑 Variables essentielles

| Variable | Rôle |
|--------|------|
| `HOME` | Répertoire personnel de l’utilisateur |
| `USER` | Nom de l’utilisateur |
| `SHELL` | Shell utilisé |
| `PWD` | Répertoire courant |
| `PATH` | Chemins des exécutables |
| `LANG` | Langue et localisation |
| `EDITOR` | Éditeur de texte par défaut |
| `TERM` | Type de terminal |

---

## 👀 Afficher les variables d’environnement

### 🔹 Afficher toutes les variables

```bash
env
```

ou

```bash
printenv
```

---

### 🔹 Afficher une variable précise

```bash
echo $HOME
```

Le symbole `$` permet d’accéder à la valeur d’une variable.

---

## ✏️ Créer et modifier une variable d’environnement

### 🔹 Variable temporaire (session courante)

```bash
export TEST=valeur
```

- valable uniquement dans la session actuelle
- disparaît à la fermeture du terminal

---

### 🔹 Variable persistante (utilisateur)

Ajouter la variable dans l’un des fichiers suivants :

- `~/.bashrc`
- `~/.profile`
- `~/.zshrc` (si zsh)

Ces fichiers sont chargés **au démarrage du shell**.

---

## 🔁 Variables locales vs variables d’environnement

| Type | Portée |
|-----|--------|
| Variable locale | Shell courant uniquement |
| Variable d’environnement | Shell + processus enfants |

`export` permet de transformer une variable locale en variable d’environnement.

---

## 🧩 La variable PATH (fondamentale)

La variable `PATH` contient la liste des dossiers où le système cherche les commandes exécutables.

```bash
echo $PATH
```

- Les chemins sont séparés par `:`
- Le shell cherche **de gauche à droite**
- Le premier exécutable trouvé est utilisé

⚠️ Une mauvaise modification du `PATH` peut provoquer des erreurs ou des failles de sécurité.

---

## 🐧 Variables système globales

Certaines variables sont définies **pour tout le système** :

- `/etc/environment`
- `/etc/profile`
- `/etc/profile.d/`

Les modifications globales nécessitent les **droits root**.

---

## 🔐 Sécurité et bonnes pratiques

Bonnes pratiques :

- ne jamais stocker de mots de passe en clair
- conserver le contenu existant de `PATH`
- utiliser des noms explicites pour les variables

À éviter :

- écraser complètement `PATH`
- utiliser des variables trop génériques
- exposer des secrets dans des scripts

---

## 🎓 Variables d’environnement et scripts

Les scripts utilisent souvent les variables d’environnement pour :

- adapter leur comportement
- éviter les valeurs codées en dur
- améliorer la portabilité

Très utilisé en **administration système**, **DevOps** et **CI/CD**.

---

## 🧠 À retenir

- Les variables d’environnement configurent le système
- Elles sont accessibles via `$VARIABLE`
- `export` rend une variable globale
- `PATH` est essentielle
- Indispensable pour les scripts et les serveurs Linux