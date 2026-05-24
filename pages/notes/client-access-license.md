# 💳 Client Access License (CAL) & licences Windows Server

> [!info]
> Les **Client Access License (CAL)** sont des licences obligatoires permettant aux **utilisateurs ou appareils** d’accéder légalement aux services fournis par un **serveur Windows Server**.

Elles sont **indispensables** dans la majorité des environnements Active Directory et infrastructures Microsoft.

---

## 🧠 Qu’est-ce qu’une CAL ?

Une **CAL** n’est **pas** une licence logicielle classique :
- elle **ne s’installe pas**
- elle **ne s’active pas**
- elle représente un **droit d’accès**

> [!important]
> **Installer Windows Server sans CAL = non conforme**, même si techniquement tout fonctionne.

---

## 🏗️ Ce qui est licencié dans Windows Server

Windows Server repose sur **2 couches de licences** :

1. **Licence Windows Server (OS)**  
2. **CAL Windows Server** (accès clients)

Ces deux éléments sont **obligatoires et complémentaires**.

---

## 🪟 Licence Windows Server (le serveur lui-même)

### 📦 Éditions principales

| Édition | Usage |
|-------|------|
| Standard | PME / serveurs applicatifs |
| Datacenter | Virtualisation intensive / cloud privé |

### ⚙️ Mode de licence
- Basé sur le **nombre de cœurs physiques**
- Minimum **16 cœurs par serveur**
- Licences vendues par packs de 2 cœurs

> [!note]
> Même un petit serveur nécessite **au minimum 16 cœurs licenciés**.

---

## 💰 Coût indicatif Windows Server (ordre de grandeur)

> [!warning]
> Les prix varient selon les contrats (OEM, CSP, EA, Open License)

### Prix publics approximatifs (HT)

| Produit | Prix |
|------|------|
| Windows Server Standard (16 cœurs) | ~900 – 1 100 € |
| Windows Server Datacenter (16 cœurs) | ~6 000 – 6 500 € |

---

## 👥 Types de CAL Windows Server

Il existe **deux types principaux** de CAL :

### 👤 User CAL
- Attribuée à **un utilisateur**
- Accès depuis plusieurs appareils
- Idéal pour :
  - mobilité
  - télétravail
  - plusieurs terminaux

### 💻 Device CAL
- Attribuée à **un appareil**
- Utilisée par plusieurs utilisateurs
- Idéal pour :
  - postes partagés
  - ateliers
  - salles de formation

> [!tip]
> **Choisis le type de CAL selon ton usage**, pas au hasard.

---

## 🔁 CAL User vs CAL Device (comparaison)

| Critère | User CAL | Device CAL |
|------|---------|------------|
| Liée à | Utilisateur | Machine |
| Multi-appareils | Oui | Non |
| Multi-utilisateurs | Non | Oui |
| Télétravail | Excellent | Mauvais |
| Postes partagés | Mauvais | Excellent |

---

## 💰 Coût indicatif des CAL Windows Server

| Type | Prix unitaire (HT) |
|---|---|
| CAL User | ~35 – 45 € |
| CAL Device | ~35 – 45 € |

---

## 🔐 CAL spécifiques (supplémentaires)

Certaines fonctionnalités nécessitent des **CAL additionnelles** :

### 🖥️ RDS CAL (Remote Desktop Services)
- Obligatoire pour le **Bureau à distance**
- En plus des CAL Windows Server
- User ou Device

Prix indicatif :
- ~90 – 120 € par CAL

---

### 📁 Autres services nécessitant des CAL
- Services de fichiers avancés
- Impression (selon usage)
- SQL Server (licence différente)

> [!important]
> Une CAL Windows Server **ne couvre pas** RDS, SQL, Exchange, etc.

---

## 🧮 Exemple concret de calcul de licences

### Cas : PME de 25 utilisateurs
- 1 serveur Windows Server Standard
- Active Directory + fichiers
- Accès depuis PC + portable

#### Licences nécessaires
- 1 × Windows Server Standard (16 cœurs)
- 25 × User CAL Windows Server

> [!summary]
> ✔️ Pas besoin de CAL Device  
> ✔️ Pas besoin de RDS si pas de RDP utilisateur

---

### Cas : Atelier avec 10 PC partagés / 30 utilisateurs
- 1 serveur Windows Server
- Accès uniquement depuis postes fixes

#### Licences nécessaires
- 1 × Windows Server Standard
- 10 × Device CAL

---

## ⚠️ Cas où les CAL ne sont PAS requises

> [!note]
> Les CAL ne sont pas nécessaires si :
- Serveur accessible **uniquement en interne** par lui-même
- Accès **anonyme** (site web public)
- Serveur **Hyper-V isolé** sans services utilisateurs

Mais attention :
> Si **un utilisateur s’authentifie**, une CAL est requise.

---

## 🧠 Bonnes pratiques de licensing

> [!tip]
> - Documenter les CAL attribuées
> - Mélanger User / Device si nécessaire
> - Anticiper la croissance
> - Vérifier les audits Microsoft
> - Centraliser les preuves d’achat

---

## ❌ Erreurs fréquentes

> [!warning]
> - Penser que les CAL sont techniques
> - Oublier les CAL RDS
> - Sous-licencier volontairement
> - Croire que Microsoft ne vérifie pas

---

## 🔍 Audit et conformité

Microsoft peut :
- demander un **audit de conformité**
- exiger une **régularisation**
- appliquer des pénalités financières

> [!important]
> La conformité est une **obligation légale**, pas optionnelle.

---

## 🧾 Summary

> [!summary]
> - Windows Server nécessite une licence serveur + des CAL
> - Les CAL autorisent l’accès utilisateur ou appareil
> - User CAL = utilisateurs nomades
> - Device CAL = postes partagés
> - Certaines fonctionnalités exigent des CAL supplémentaires
> - Bien dimensionner évite les surcoûts et les audits

---
