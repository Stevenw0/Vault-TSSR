# 🔐 Gestion des permissions et propriétaires : `chmod` & `chown`

## 📌 Pourquoi gérer les droits sous Linux ?

Sous Linux, chaque fichier et dossier possède :
- des **permissions** (lecture, écriture, exécution)
- un **propriétaire**
- un **groupe**

Les commandes `chmod` et `chown` permettent de **contrôler l’accès aux fichiers**, ce qui est essentiel pour :
- la sécurité
- l’administration système
- les serveurs multi-utilisateurs

---

## 📂 Rappel : afficher les droits

```bash
ls -l
```

Exemple de sortie :

```
-rwxr-x--- 1 alice dev 4096 fichier.sh
```

Découpage :

```
- | rwx | r-x | ---
  |     |     |
type  user  group others
```

---

## 🧱 Les permissions Linux

| Lettre | Signification |
|------|---------------|
| r | read (lecture) |
| w | write (écriture) |
| x | execute (exécution) |

| Valeur | Permission |
|------|------------|
| 4 | r |
| 2 | w |
| 1 | x |

---

# 🔧 La commande `chmod`

## 📌 Rôle de `chmod`

`chmod` (**change mode**) permet de **modifier les permissions** d’un fichier ou dossier.

---

## ✍️ Méthode symbolique

### 📄 Syntaxe

```bash
chmod [qui][+|-|=][droits] fichier
```

### 👤 Qui ?

- `u` → user (propriétaire)
- `g` → group
- `o` → others
- `a` → all (u+g+o)

### 📌 Exemples

Donner l’exécution au propriétaire :

```bash
chmod u+x script.sh
```

Retirer l’écriture aux autres :

```bash
chmod o-w fichier.txt
```

Donner lecture à tout le monde :

```bash
chmod a+r fichier.txt
```

---

## 🔢 Méthode numérique (octale)

### 📌 Principe

Addition des valeurs :
- r = 4
- w = 2
- x = 1

### 📄 Exemples courants

| Valeur | Droits |
|------|-------|
| 755 | rwxr-xr-x |
| 644 | rw-r--r-- |
| 700 | rwx------ |
| 600 | rw------- |

Appliquer les droits :

```bash
chmod 755 script.sh
chmod 644 fichier.txt
```

---

## 📁 Permissions sur les dossiers

Sur un **dossier** :
- `r` → lister le contenu
- `w` → créer / supprimer des fichiers
- `x` → entrer dans le dossier

---

## 🔁 Appliquer récursivement

```bash
chmod -R 755 dossier/
```

⚠️ À utiliser avec prudence.

---

# 👤 La commande `chown`

## 📌 Rôle de `chown`

`chown` (**change owner**) permet de **modifier le propriétaire et/ou le groupe** d’un fichier ou dossier.

---

## ✍️ Syntaxe

```bash
chown utilisateur fichier
chown utilisateur:groupe fichier
```

---

## 📄 Exemples

Changer le propriétaire :

```bash
chown alice fichier.txt
```

Changer propriétaire et groupe :

```bash
chown alice:dev fichier.txt
```

Changer uniquement le groupe :

```bash
chown :dev fichier.txt
```

---

## 🔁 Changement récursif

```bash
chown -R alice:dev dossier/
```

Très utilisé après une copie ou une restauration.

---

## ⚠️ Points importants

- `chown` nécessite **les droits root**
- Une mauvaise permission peut bloquer un service
- Trop de droits = **faille de sécurité**

---

## 🧠 Bonnes pratiques

- Utiliser le **principe du moindre privilège**
- Éviter les `777`
- Tester les droits avant mise en production
- Bien différencier fichiers et dossiers

---

## 🧠 À retenir

- `chmod` → permissions
- `chown` → propriétaire / groupe
- Droits = user / group / others
- Méthode symbolique ou numérique
- Commandes essentielles en **administration Linux**