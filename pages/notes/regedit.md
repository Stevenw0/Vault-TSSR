# 🧩 Windows — `regedit` et l’option `/userdat`

> [!info]
> **Regedit** est l’éditeur du **registre Windows**, base de données centrale  
> stockant la configuration du système, des utilisateurs et des applications.

---

## 🧠 Rappels sur le registre Windows

Le registre est organisé en **ruches (hives)** principales :

- `HKEY_LOCAL_MACHINE` (HKLM) → configuration machine
- `HKEY_CURRENT_USER` (HKCU) → configuration utilisateur actif
- `HKEY_USERS` (HKU) → profils utilisateurs chargés
- `HKEY_CLASSES_ROOT` (HKCR) → associations de fichiers

> [!warning]
> Une modification incorrecte du registre peut rendre le système instable  
> voire **inutilisable**.

---

## 🔧 `regedit.exe` — Éditeur du registre

### Lancer regedit
```text
Win + R → regedit
```

```cmd
regedit.exe
```

> [!important]
> Certaines clés nécessitent des **droits administrateur**.

---

## 🧩 Option spéciale : `/userdat`

> [!note]
> L’option correcte est **`/userdat`**  
> (souvent mal orthographiée `/userdt`).

### Syntaxe
```cmd
regedit /userdat
```

---

## 🎯 À quoi sert `/userdat` ?

`/userdat` permet d’ouvrir **le fichier de registre d’un utilisateur**  
**sans que l’utilisateur soit connecté**.

Concrètement, cela permet de :
- modifier un **profil hors ligne**
- préparer un **profil par défaut**
- intervenir en **WinPE**
- réparer un profil utilisateur corrompu

---

## 🗂️ Fichier concerné : `NTUSER.DAT`

Chaque utilisateur Windows possède un fichier :

```text
C:\Users\NomUtilisateur\NTUSER.DAT
```

Ce fichier correspond à :
```text
HKEY_CURRENT_USER
```

> [!important]
> Quand un utilisateur se connecte :
> - `NTUSER.DAT` est chargé dans `HKU`
> - `HKCU` pointe vers ce chargement

---

## 🧪 Exemple d’utilisation typique

### Cas 1 — Modifier un profil utilisateur hors ligne

1. Ouvrir l’invite de commandes en administrateur
2. Lancer :
```cmd
regedit /userdat
```
3. Sélectionner le fichier :
```text
C:\Users\Etudiant\NTUSER.DAT
```
4. Le profil apparaît sous :
```text
HKEY_USERS\NomTemporaire
```
5. Modifier les clés nécessaires
6. Fermer Regedit (déchargement automatique)

---

## 🧪 Exemple courant — WinPE / dépannage

> [!info]
> En **WinPE**, aucun utilisateur n’est connecté  
> → `/userdat` est souvent indispensable.

### Exemple :
- Activer une option utilisateur
- Supprimer une clé bloquante
- Préparer un profil avant premier login

---

## 🧰 Alternative en ligne de commande (`reg load`)

> [!tip]
> Pour les scripts et l’automatisation, on préfère `reg load`.

```cmd
reg load HKU\TempUser C:\Users\Etudiant\NTUSER.DAT
```

```cmd
reg unload HKU\TempUser
```

> [!important]
> Toujours **décharger** la ruche après modification.

---

## ⚠️ Erreurs fréquentes

> [!warning]
> - Modifier `NTUSER.DAT` pendant que l’utilisateur est connecté
> - Oublier de décharger la ruche
> - Modifier le mauvais profil
> - Confondre HKCU et HKLM

---

## 🧠 Bonnes pratiques

> [!tip]
> - Sauvegarder `NTUSER.DAT` avant modification
> - Utiliser `/userdat` uniquement hors session utilisateur
> - Préférer `reg load` pour les scripts
> - Documenter les clés modifiées
> - Tester sur une machine de labo

---

## 🧾 Cas d’usage concrets

- Préparer un **profil par défaut**
- Corriger un profil bloqué
- Modifier des paramètres utilisateurs en **déploiement**
- Appliquer des réglages avant premier login
- Dépannage en WinPE

---

## 🧾 Différence `/userdat` vs regedit classique

| Mode | Utilisation |
|---|---|
| `regedit` | Utilisateur connecté |
| `regedit /userdat` | Profil utilisateur hors ligne |
| `reg load` | Scripts / automatisation |

---

## 🧾 Summary

> [!summary]
> - `regedit` édite le registre Windows
> - `/userdat` permet d’ouvrir un profil utilisateur **hors ligne**
> - Le fichier ciblé est `NTUSER.DAT`
> - Très utilisé en WinPE, déploiement et dépannage
> - À manipuler avec prudence et méthode
> - Alternative scriptable : `reg load` / `reg unload`
