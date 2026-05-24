# 🔐 Security Account Manager (SAM)

## 🧩 Présentation générale

Le **Security Account Manager (SAM)** est un **composant fondamental de Windows** chargé de **gérer les comptes locaux** d’une machine.  
Il s’agit d’une **base de données locale**, stockée dans le Registre Windows, qui contient :

- les comptes utilisateurs locaux
- les comptes ordinateurs locaux
- les groupes locaux
- les informations d’authentification associées

> [!info]
> Le SAM est utilisé **uniquement pour les comptes locaux**.  
> Les comptes de domaine sont gérés par **Active Directory**.

---

## 🎯 Rôle du SAM

Le SAM permet à Windows de :

- Authentifier les utilisateurs locaux
- Vérifier les mots de passe
- Appliquer les droits et appartenances aux groupes
- Gérer les identités locales en mode normal ou hors ligne

Sans le SAM :
- aucune authentification locale n’est possible
- le système devient inutilisable

---

## 🧠 Fonctionnement interne

### 🔑 Authentification

Lorsqu’un utilisateur local se connecte :
1. Le mot de passe saisi est transformé en **hachage**
2. Le système compare ce hachage avec celui stocké dans le SAM
3. Si les valeurs correspondent → accès autorisé

> [!note]
> Les mots de passe **ne sont jamais stockés en clair** dans le SAM.

---

### ⚙️ Processus impliqués

Le SAM fonctionne en lien étroit avec :

- **LSASS (Local Security Authority Subsystem Service)**  
  → responsable de la sécurité et de l’authentification
- **RPC (Remote Procedure Call)**  
  → nécessaire au bon fonctionnement du service SAM

> [!important]
> Si le service SAM s’arrête, **Windows redémarre automatiquement** pour des raisons de sécurité.

---

## 🗂️ Emplacement du SAM

### 📁 Emplacement physique

```text
%SystemRoot%\System32\Config\SAM
```

Ce fichier est :
- une **ruche du Registre**
- chargé sous :
```text
HKEY_LOCAL_MACHINE\SAM
```

> [!warning]
> Ce fichier est **verrouillé lorsque Windows est en fonctionnement**.

---

### 🧱 Protection du fichier SAM

- Accès interdit aux utilisateurs standards
- Lecture impossible sans privilèges élevés
- Protégé par le noyau Windows

Toute tentative d’accès direct est bloquée.

---

## 🧾 Contenu du SAM

Le SAM stocke :

### 👤 Comptes
- Comptes utilisateurs locaux
- Comptes systèmes
- Comptes administrateurs locaux

### 👥 Groupes
- Administrateurs
- Utilisateurs
- Invités
- Groupes personnalisés

### 🔐 Données de sécurité
- Identifiants uniques (RID)
- Hachages de mots de passe
- Appartenances aux groupes

---

## 🔑 Types de comptes gérés

Il existe **trois types principaux** :

1. **Utilisateur**
2. **Groupe**
3. **Ordinateur**

Chaque compte est identifié par :
- un nom
- un identifiant unique (RID)
- des attributs de sécurité

---

## 🔒 Sécurité et chiffrement

### 🔐 Hachage des mots de passe

- Les mots de passe sont stockés sous forme de **hachages cryptographiques**
- Les algorithmes ont évolué avec les versions de Windows
- Les protections sont renforcées contre :
  - attaques hors ligne
  - extraction directe du SAM

> [!important]
> Le chiffrement empêche l’exploitation simple du fichier SAM même s’il est copié.

---

### 🧯 Syskey (historique)

- Outil introduit pour renforcer la protection du SAM
- Ajoutait une couche de chiffrement supplémentaire
- Principalement utile contre les attaques physiques

---

## 🚨 Restrictions de sécurité

### 🚫 Énumération anonyme

Par défaut, Windows empêche :
- l’énumération des comptes
- l’énumération des groupes
- l’accès anonyme au SAM

Ces protections évitent :
- la reconnaissance système
- les attaques par force brute ciblée

---

## 🖥️ SAM et Active Directory

| Élément | SAM | Active Directory |
|------|-----|------------------|
| Portée | Locale | Domaine |
| Stockage | Registre local | Base AD |
| Utilisateurs | Locaux | Domaine |
| Authentification | Machine | Réseau |

> [!note]
> En **mode restauration Active Directory**, l’authentification se fait via un **compte local stocké dans le SAM**.

---

## ⚠️ Attaques connues liées au SAM

### Exemples de menaces :
- Accès physique à la machine
- Démarrage sur un OS externe
- Extraction hors ligne du fichier SAM
- Attaques par dictionnaire sur les hachages

### Contre-mesures :
- Chiffrement du disque (BitLocker)
- Mots de passe forts
- Désactivation des comptes inutiles
- Sécurisation de l’accès physique

---

## 🧠 Bonnes pratiques de sécurité

> [!tip]
> - Limiter le nombre de comptes locaux
> - Renommer ou désactiver le compte Administrateur local
> - Utiliser des mots de passe complexes
> - Activer le chiffrement du disque
> - Auditer régulièrement les comptes locaux

---

## 🧾 Summary

> [!summary]
> - Le SAM est la base des comptes locaux Windows
> - Il stocke identités, groupes et hachages de mots de passe
> - Il est protégé par le noyau et le chiffrement
> - Il est distinct d’Active Directory
> - Sa compromission permet un contrôle local total
> - La sécurité du SAM est essentielle à la sécurité globale de Windows

---
