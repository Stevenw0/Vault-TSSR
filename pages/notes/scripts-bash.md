# 🧩 Scripts Bash — Bases, rôles et bonnes pratiques

---

## 🎯 Rôles d’un script

Un **script** est un fichier contenant une suite de commandes permettant de :

- automatiser des tâches répétitives
- garantir une exécution cohérente
- documenter des procédures
- réduire les erreurs humaines

> [!summary]  
> Un script s’écrit **une fois** et s’exécute **plusieurs fois**.

---

## 🧱 Composition d’un script

Un script peut contenir :

- des commandes
- des variables
- des fonctions
- des structures de contrôle
- des commentaires

À la base, un script est **un simple fichier texte**.  
👉 **N’importe quel éditeur convient**.

---

## ▶️ Exécution d’un script

Méthodes courantes :

```bash
bash script.sh
```

ou après autorisation :

```bash
chmod +x script.sh
./script.sh
```

---

## 🧪 Atelier : premier script

Exemple minimal :

```bash
#!/bin/bash
echo "Bonjour Linux"
```

---

## 🔤 Encodage et fins de ligne

### 📌 Problème classique

Un script créé sous Windows peut contenir des fins de ligne **CRLF**, ce qui provoque des erreurs sous Linux.

> [!warning]  
> Toujours sauvegarder les scripts au format **Unix/Linux (LF)**.

---

## 📏 Conventions de fin de ligne

| Système | Format | Notation |
|------|------|------|
| Windows | CRLF | `\r\n` |
| Unix/Linux | LF | `\n` |
| Mac ancien | CR | `\r` |

---

### 🔍 Affichage des caractères invisibles

```bash
cat -v fichier_windows.txt
```

Affiche :

```
Ligne 1^M
```

`^M` représente le caractère **CR**.

---

### 🔄 Conversion de formats

```bash
dos2unix fichier_windows.txt
unix2dos fichier_unix.txt
```

---

## 🕰️ Origines historiques

- **CR** : retour du chariot
- **LF** : saut de ligne
- Machines à écrire → CR + LF
- Unix → simplification (LF)
- Windows → compatibilité (CRLF)
- Mac moderne → LF

---

## 🔢 ASCII et caractères de contrôle

CR et LF font partie des **caractères de contrôle ASCII (0–31)**.

| Caractère | Nom | Déc | Hex | Oct | C |
|---------|-----|----|----|----|---|
| LF | Line Feed | 10 | 0x0A | 012 | `\n` |
| CR | Carriage Return | 13 | 0x0D | 015 | `\r` |

---

### 🧪 Vérification pratique

```bash
printf "CR : %d (0x%X)\n" "'$'\r'" "'$'\r'"
printf "LF : %d (0x%X)\n" "'$'\n'" "'$'\n'"
```

---

## 🧪 Création de fichiers tests

```bash
echo -e "Ligne1\rLigne2" > test_cr.txt
echo -e "Ligne1\nLigne2" > test_lf.txt
echo -e "Ligne1\r\nLigne2" > test_crlf.txt
```

---

### 🔍 Analyse avec hexdump

```bash
hexdump -C test_crlf.txt
```

---

### 🔍 Analyse avec od

```bash
od -c test_crlf.txt
od -x test_crlf.txt
```

---

## 🔎 Détection automatique

```bash
file fichier.txt
```

```bash
sed -n l fichier.txt
```

```bash
hexdump -C fichier.txt | grep -E '0d 0a|0a|0d'
```

---

## 🔧 Conversion manuelle

```bash
sed 's/\r$//' fichier_windows.txt > fichier_unix.txt
tr -d '\r' < fichier_windows.txt > fichier_unix.txt
```

---

## ⚠️ Problème courant dans les scripts

```bash
#!/bin/bash
echo "Test"
```

Erreur possible :

```
bash: $'\r': command not found
```

---

## ✅ Solutions automatiques

```bash
if file "$fichier" | grep -q "CRLF"; then
    dos2unix "$fichier"
fi
```

---

## 🌍 Encodage des caractères

- Linux : **UTF-8**
- Windows : variable

Conversion :

```bash
iconv -t UTF-8 f2 > f3
```

Toutes les infos sont visibles avec :

```bash
file fichier
```

---

## 🧠 Contenu d’un script Bash

### 🔹 Shebang

Première ligne obligatoire :

```bash
#!/bin/bash
```

ou portable :

```bash
#!/usr/bin/env bash
```

Indique **quel interpréteur utiliser**.

---

## 💬 Commentaires en Bash

### Commentaires simples

```bash
# Ceci est un commentaire
echo "Hello" # commentaire en fin de ligne
```

---

### Commentaires multi-lignes (techniques)

#### Avec `:` (no-op)

```bash
: '
Commentaire
sur plusieurs lignes
'
```

#### Avec heredoc

```bash
<<COM
Bloc de commentaire
sur plusieurs lignes
COM
```

---

## 🪪 Bonne pratique : le cartouche

```bash
#!/bin/bash
# Maintainer : hbigo@dawan.fr
# Date : 06/05/2024
# Description : Mise à jour du système
```

---

## 🧱 Autres éléments d’un script

1. Commentaires  
2. Lignes vides (lisibilité)  
3. Commandes  
4. Variables  
5. Structures de contrôle  
6. Fonctions  
7. Code retour  

---

## 🔁 Code retour d’un script

- Valeur comprise entre **0 et 127**
- `0` → succès
- ≠ `0` → erreur ou état particulier

Afficher le code retour :

```bash
echo $?
```

Définir un code retour explicite :

```bash
exit 0
exit 1
```

> [!warning]  
> Un script **doit documenter ses codes de retour**.

---

## 🧠 À retenir

> [!summary]
> 
> - Un script est un fichier texte
> - Toujours utiliser LF sous Linux
> - Le shebang est essentiel
> - Les commentaires sont indispensables
> - Le code retour est crucial
> - Base incontournable pour l’administration Linux