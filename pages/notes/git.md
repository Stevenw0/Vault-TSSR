# 🌿 Git — Gestion de version

## 📌 Définition

**Git** est un système de **gestion de version distribué** permettant de :

- suivre les modifications du code
- collaborer en équipe
- revenir à une version précédente
- gérer plusieurs versions (branches)

---

# 🧠 Principe de fonctionnement

Git fonctionne avec un système de **snapshots (instantanés)**.

Cycle :

```
Working Directory
 ↓
Staging Area
 ↓
Repository (commit)
```

---

# 📊 Concepts clés

| Élément | Description |
|---|---|
| Repository | projet Git |
| Commit | sauvegarde |
| Branch | version parallèle |
| Merge | fusion |
| Clone | copie du projet |

---

# ⚙️ Initialisation

## Créer un repo

```bash
git init
```

---

## Cloner un repo

```bash
git clone https://github.com/user/repo.git
```

---

# 📦 Gestion des fichiers

## Ajouter fichiers

```bash
git add fichier.txt
```

---

## Ajouter tout

```bash
git add .
```

---

## Voir statut

```bash
git status
```

---

# 💾 Commit

## Faire un commit

```bash
git commit -m "message"
```

---

## Voir historique

```bash
git log
```

---

# 🌿 Branches

## Voir branches

```bash
git branch
```

---

## Créer branche

```bash
git branch dev
```

---

## Changer branche

```bash
git checkout dev
```

---

## Créer + switch

```bash
git checkout -b dev
```

---

# 🔀 Fusion

## Merge

```bash
git merge dev
```

---

# 🌐 Remote (GitHub / GitLab)

## Ajouter remote

```bash
git remote add origin https://github.com/user/repo.git
```

---

## Envoyer code

```bash
git push origin main
```

---

## Récupérer code

```bash
git pull
```

---

## Télécharger sans merge

```bash
git fetch
```

---

# 📊 Commandes utiles

| Commande | Description |
|---|---|
| git status | état du repo |
| git log | historique |
| git diff | différences |
| git reset | annuler |
| git stash | sauvegarde temporaire |

---

# ⚙️ Annuler actions

## Annuler add

```bash
git reset fichier.txt
```

---

## Annuler commit

```bash
git reset --soft HEAD~1
```

---

# 📦 Stash

## Sauvegarder temporairement

```bash
git stash
```

---

## Restaurer

```bash
git stash pop
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- faire des commits réguliers
- écrire des messages clairs
- utiliser des branches
- éviter de travailler sur main

---

# 🧠 Workflow classique

```
git clone
git checkout -b dev
git add .
git commit -m "modif"
git push
git merge
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Git | versioning |
| commit | sauvegarde |
| branch | version |
| push | envoyer |
| pull | récupérer |

Git permet de **travailler efficacement en équipe et de gérer l’évolution d’un projet dans le temps**.