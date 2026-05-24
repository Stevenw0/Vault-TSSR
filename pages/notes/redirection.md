# 🔀 Les redirections en Bash

## 📌 Principe des redirections

Sous Linux, chaque processus possède **trois descripteurs de fichiers standards**, appelés flux standards.  
Ils permettent de gérer les entrées et sorties d’un programme.

| Descripteur | Nom | Rôle | Par défaut |
|-----------|-----|------|------------|
| 0 | STDIN | Entrée standard | Clavier |
| 1 | STDOUT | Sortie standard | Écran |
| 2 | STDERR | Sortie erreur | Écran |

Les redirections permettent de **modifier la destination ou la source** de ces flux.

---

## 🧩 Schéma des flux standards

```
STDIN < ------ PROCESSUS ---- >
                   |     ---- >> STDOUT
                   |     ---- |
                   |
                   2>
                 STDERR
```

---

## 🔽 Redirection de l’entrée standard (STDIN)

### 📌 Syntaxe

```bash
programme < fichier
```

Les données vont **du fichier vers le programme**.

L’opérateur `<` ne s’utilise **que pour STDIN**.

---

### 📄 Exemple

Créer un fichier d’instructions :

```bash
cat > fdisk.txt
l
q
```

Terminer avec :

```bash
CTRL+D
```

Utiliser le fichier comme entrée :

```bash
su
fdisk /dev/?da < fdisk.txt
exit
```

`fdisk` lit ses commandes depuis le fichier au lieu du clavier.

---

### 🔍 Schéma

```
PROCESSUS ---- < ---- FICHIER / PÉRIPHÉRIQUE
         ---- 0< ----
```

---

## 🔼 Redirection de la sortie standard (STDOUT)

### 📌 Syntaxe

```bash
programme > fichier
```

La sortie du programme est envoyée vers un fichier **au lieu de l’écran**.

⚠️ L’opérateur `>` **écrase** le fichier s’il existe.

---

### 📄 Exemple

```bash
fdisk -l /dev/?da > partitions.txt
```

Le fichier est créé ou écrasé, la sortie n’est plus affichée à l’écran.

---

### ➕ Ajouter sans écraser

```bash
programme >> fichier
```

Ajoute la sortie standard **à la fin du fichier**.

---

### 🔍 Schéma

```
          ---- > ----
PROCESSUS ---- >> ---- FICHIER / PÉRIPHÉRIQUE
          ---- 1> ----
```

---

## 📄 Exemples de redirection de STDOUT

```bash
date > date.txt
cat date.txt
```

Résultat :

```
dim fév 21 04:52:01 CET 2016
```

Ajout :

```bash
date >> date.txt
cat date.txt
```

Résultat :

```
dim fév 21 04:52:01 CET 2016
dim fév 21 04:53:09 CET 2016
```

Écrasement :

```bash
date > date.txt
cat date.txt
```

---

## ❗ Redirection de la sortie erreur (STDERR)

### 📌 Syntaxe

```bash
programme 2> fichier_erreur
```

Permet de rediriger **uniquement les erreurs**.

---

### 📄 Exemples

Vers la corbeille :

```bash
ls /fake / 2> /dev/null
```

Vers un fichier :

```bash
ls /fake 2> err.txt
```

---

### 🔍 Schéma

```
PROCESSUS ---- 2> ---- FICHIER / PÉRIPHÉRIQUE
```

---

## 🧪 Travailler avec les redirections

### 📌 Commande générant sortie et erreur

```bash
find /etc/ -name "*.crt"
```

Résultat :

```
/etc/ssl/certs/ca-certificates.crt
find: /etc/ssl/private: Permission denied
```

---

### 🔇 Isoler la sortie erreur

```bash
find /etc/ -name "*.crt" > /dev/null
```

Résultat :

```
find: /etc/ssl/private: Permission denied
```

---

### 🔇 Isoler la sortie standard

```bash
find /etc/ -name "*.crt" 2> /dev/null
```

Résultat :

```
/etc/ssl/certs/ca-certificates.crt
```

---

### ✂️ Séparer les sorties

```bash
find /etc/ -name "*.crt" > crt.txt 2> crt.err
```

Sortie standard :

```bash
cat crt.txt
```

Sortie erreur :

```bash
cat crt.err
```

---

## 🔁 Rediriger une sortie vers une autre

### 📌 Rediriger STDERR vers STDOUT

```bash
find /etc/ -name "*.crt" 2>&1
```

⚠️ Sans le `&`, l’erreur serait envoyée dans un fichier nommé `1`.

---

## 🧠 Exemple récapitulatif complet

Avec le fichier `fdisk.txt` :

```bash
fdisk /dev/?da < fdisk.txt 2> /dev/null > resultat.txt
```

- `fdisk.txt` fournit l’entrée
- les erreurs sont ignorées
- le résultat est enregistré dans `resultat.txt`

---

## 🧠 À retenir

- `<` redirige l’entrée
- `>` écrase la sortie
- `>>` ajoute à la sortie
- `2>` redirige les erreurs
- `2>&1` fusionne erreur et sortie
- Les redirections sont fondamentales en Bash