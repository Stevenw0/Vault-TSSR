# 🔐 La commande `umask` — Gestion des permissions par défaut

## 📌 Qu’est-ce que `umask` ?

La commande **`umask`** permet de définir les **permissions par défaut** appliquées lors de la création :

- de **fichiers**
- de **répertoires**

> [!info]  
> `umask` ne modifie pas les fichiers existants,  
> elle agit uniquement sur les **nouveaux fichiers et dossiers**.

---

## 🧠 Principe de fonctionnement

Le système part de permissions maximales, puis **soustrait la valeur de l’umask**.

| Type | Permission de base |
|---|---|
| Répertoire | `777` (rwxrwxrwx) |
| Fichier | `666` (rw-rw-rw-) |

Formule :

- **Répertoires** → `777 - umask`
- **Fichiers** → `666 - umask`

---

## 📊 Valeurs d’umask courantes

| umask | Répertoires (777 - umask) | Fichiers (666 - umask) | Usage |
|---|---|---|---|
| `022` | `755` (rwxr-xr-x) | `644` (rw-r--r--) | Standard utilisateur |
| `002` | `775` (rwxrwxr-x) | `664` (rw-rw-r--) | Travail en groupe |
| `077` | `700` (rwx------) | `600` (rw-------) | Accès personnel seul |

> [!tip]  
> C’est **l’une des premières vérifications sécurité** sur un système Linux.

---

## 🔍 Afficher la valeur actuelle

### 📌 Valeur numérique

```bash
umask
```

Exemple :
```
0022
```

---

### 📌 Valeur symbolique

```bash
umask -S
```

Exemple :
```
u=rwx,g=rx,o=rx
```

---

## ✏️ Définir une nouvelle valeur umask

### 📌 Exemple : valeur standard utilisateur

```bash
umask 022
```

Effet :
- dossiers → `755`
- fichiers → `644`

---

### 📌 Exemple : environnement collaboratif

```bash
umask 002
```

Effet :
- groupe avec droits d’écriture

---

### 📌 Exemple : sécurité maximale

```bash
umask 077
```

Effet :
- seul l’utilisateur a accès aux fichiers

---

## ⚠️ Points importants à comprendre

> [!warning]
> 
> - `umask` **retire** des droits, elle n’en ajoute jamais  
> - Les fichiers **n’ont jamais le droit x par défaut**  
> - Une mauvaise umask peut poser des problèmes :
>   - sécurité
>   - accès aux services
>   - collaboration

---

## 📁 Où définir `umask` de façon persistante ?

### 👤 Pour un utilisateur

- `~/.bashrc`
- `~/.profile`
- `~/.bash_profile`

---

### 🌍 Pour tout le système

- `/etc/profile`
- `/etc/login.defs`
- `/etc/profile.d/*.sh`

> [!note]  
> Les modifications système nécessitent les droits **root**.

---

## 🎓 Cas d’usage concrets

- Sécurisation des répertoires utilisateurs
- Environnements multi-utilisateurs
- Serveurs web / FTP
- Scripts d’administration
- Audits de sécurité Linux

---

## 🧠 À retenir

> [!summary]
> 
> - `umask` définit les permissions par défaut
> - Répertoires → 777, fichiers → 666
> - La valeur est soustraite
> - `022` est la valeur la plus courante
> - Élément clé en **sécurité Linux**