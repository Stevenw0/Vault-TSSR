
# 🪟 Windows — Bypass des vérifications matérielles (TPM, Secure Boot, etc.)

> [!warning] Cadre d’utilisation
> Les méthodes ci-dessous sont destinées à un **usage pédagogique, en laboratoire, en VM ou sur matériel ancien**.  
> Contourner des restrictions système peut entraîner :
> - absence de support officiel
> - problèmes de mises à jour
> - risques de sécurité  
> 👉 À utiliser **en connaissance de cause**.

---

## 🧠 Pourquoi ces bypass existent ?

Windows 11 impose plusieurs prérequis matériels :
- TPM 2.0
- Secure Boot
- Quantité minimale de RAM
- CPU compatible
- Stockage suffisant

> [!info]
> Ces restrictions peuvent bloquer :
> - des machines encore fonctionnelles
> - des VM de test
> - des environnements de formation

Les bypass permettent **d’installer Windows malgré ces contrôles**.

---

## 🔓 Bypass WPE (Windows Preinstallation Environment)

> [!note]
> Le bypass WPE consiste à modifier le comportement de l’installateur **pendant la phase WinPE** (avant l’installation complète).

Utilisé notamment via :
- registre
- scripts `.cmd`
- console WinPE (`Shift + F10`)

---

## 🧩 Bypass via le registre — clé `LabConfig`

### 📍 Emplacement
```text
HKEY_LOCAL_MACHINE\SYSTEM\Setup\LabConfig
```

> [!important]
> Si la clé `LabConfig` n’existe pas, elle doit être **crée manuellement**.

---

## 🧪 Valeurs de bypass disponibles

Ajouter les valeurs suivantes (type **DWORD (32 bits)**) :

```reg
"BypassTPMCheck"=dword:00000001
"BypassSecureBootCheck"=dword:00000001
"BypassRAMCheck"=dword:00000001
"BypassStorageCheck"=dword:00000001
"BypassCPUCheck"=dword:00000001
```

### 🧾 Signification des clés

| Clé | Effet |
|----|------|
| `BypassTPMCheck` | Ignore l’absence de TPM |
| `BypassSecureBootCheck` | Ignore Secure Boot |
| `BypassRAMCheck` | Ignore la RAM minimale |
| `BypassStorageCheck` | Ignore la taille disque |
| `BypassCPUCheck` | Ignore la compatibilité CPU |

> [!tip]
> Ces clés sont lues **par l’installateur Windows**, pas par le système déjà installé.

---

## ⌨️ Méthode manuelle (pendant l’installation)

1. Démarrer l’installation Windows
2. À l’écran d’erreur → `Shift + F10`
3. Lancer l’éditeur de registre :
```cmd
regedit
```
4. Créer la clé :
```text
HKLM\SYSTEM\Setup\LabConfig
```
5. Ajouter les DWORD listés ci-dessus
6. Fermer → revenir à l’installation

---

## 🧰 Bypass via script — `BypassNRO.cmd`

> [!info]
> `BypassNRO.cmd` permet de **contourner l’obligation de compte Microsoft**  
> (NRO = *Network Requirement OOBE*).

### Effet principal
- Permet l’installation **hors ligne**
- Autorise un **compte local**
- Supprime la dépendance réseau lors de l’OOBE

---

### 🧪 Utilisation typique

Pendant l’OOBE (écran “Connexion à un réseau”) :

1. `Shift + F10`
2. Lancer :
```cmd
BypassNRO.cmd
ou 
OOBE\BYPASSNRO
```

3. Le système redémarre
4. Option **“Je n’ai pas Internet”** disponible

> [!important]
> Cette commande est **intégrée à l’environnement d’installation**  
> (pas besoin de script externe sur les ISO récents).

---

## ⚠️ Limitations et risques

> [!warning]
> - Windows Update peut refuser certaines mises à jour
> - Sécurité affaiblie sans TPM / Secure Boot
> - Support Microsoft inexistant
> - Comportement variable selon versions

---

## 🧠 Bonnes pratiques

> [!tip]
> - Réserver ces bypass aux **VM, labs, tests**
> - Ne pas utiliser en environnement critique
> - Documenter clairement les modifications
> - Sauvegarder avant installation
> - Tester après chaque mise à jour majeure

---

## 🧾 Summary

> [!summary]
> - Windows 11 impose des prérequis matériels stricts
> - Les clés `LabConfig` permettent de bypasser ces contrôles
> - `BypassTPMCheck`, `SecureBoot`, `RAM`, `CPU`, `Storage` sont indépendants
> - `BypassNRO.cmd` permet une installation **sans compte Microsoft**
> - Usage recommandé : **formation, VM, machines anciennes**
> - Toujours garder en tête les implications sécurité

---
