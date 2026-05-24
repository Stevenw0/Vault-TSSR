# 🛡️ Tiering d’administration de l’infrastructure

> [!info]
> Le **tiering d’administration** est un **modèle de sécurité** visant à **isoler les privilèges administratifs** selon des niveaux (tiers), afin de **réduire drastiquement la surface d’attaque** et les risques de compromission globale d’un SI.

Ce modèle est fortement recommandé par **Microsoft** et largement utilisé dans les environnements **Active Directory** sécurisés.


---

## 🎯 Objectifs du tiering

Le tiering permet de :

- Limiter les mouvements latéraux
- Protéger les comptes à privilèges élevés
- Contenir une compromission
- Appliquer le principe du **moindre privilège**
- Sécuriser Active Directory et l’infrastructure critique

> [!important]
> Un compte d’un **tier supérieur ne doit jamais être utilisé sur un tier inférieur**.

---

## 🧱 Principe fondamental

Le SI est découpé en **zones de confiance** appelées **tiers**.  
Chaque tier est **isolé logiquement et administrativement**.

- Comptes dédiés par tier
- Machines dédiées par tier
- GPO dédiées par tier
- Accès strictement contrôlés

---

## 🧩 Les différents tiers

### 🔴 Tier 0 — Cœur de l’infrastructure

> [!danger]
> **Tier le plus critique** : une compromission = compromission totale du domaine.

#### Ressources concernées
- Contrôleurs de domaine
- Active Directory
- Azure AD Connect
- PKI (AD CS)
- Serveurs ADFS
- Serveurs de gestion des identités

#### Comptes
- Admins du domaine
- Admins du schéma
- Admins de l’entreprise

#### Règles
- Accès uniquement depuis des **PAW Tier 0**
- Aucun accès Internet
- Aucun usage bureautique

---

### 🟠 Tier 1 — Serveurs et applications

> [!warning]
> Infrastructure critique mais **moins sensible que Tier 0**.

#### Ressources concernées
- Serveurs membres
- Serveurs applicatifs
- Serveurs de fichiers
- Serveurs SQL
- Hyperviseurs
- Outils d’administration

#### Comptes
- Admins serveurs
- Admins applicatifs

#### Règles
- Pas d’accès aux DC
- Pas de droits Tier 0
- Accès via **PAW Tier 1**

---

### 🟢 Tier 2 — Postes utilisateurs

> [!note]
> Zone la plus exposée : phishing, malware, navigation web.

#### Ressources concernées
- Postes utilisateurs
- Laptops
- VDI utilisateurs

#### Comptes
- Utilisateurs standards
- Support niveau 1 / 2 (limitée)

#### Règles
- Aucun compte admin Tier 0 ou 1
- Droits locaux très limités
- Fortes restrictions GPO

---

## 🧠 Règles d’or du tiering

> [!important]
> - ❌ Un compte Tier 0 **ne se connecte jamais** à un poste utilisateur
> - ❌ Un admin serveur ne gère pas Active Directory
> - ✅ Un compte = un rôle = un tier
> - ✅ Un poste = un tier

---

## 🖥️ PAW — Privileged Access Workstation

> [!info]
> Les **PAW** sont des postes dédiés à l’administration, **isolés et durcis**.

### Types de PAW
- PAW Tier 0
- PAW Tier 1
- (optionnel) PAW Tier 2

### Caractéristiques
- Pas de navigation Internet
- Pas de messagerie
- Chiffrement disque
- Accès réseau restreint
- MFA obligatoire

---

## 🏗️ Mise en œuvre dans Active Directory

### Organisation des OU
```text
OU=Tier0
OU=Tier1
OU=Tier2
```

### Séparation des comptes
```text
OU=Admins_Tier0
OU=Admins_Tier1
OU=Admins_Tier2
```

### Séparation des machines
```text
OU=PAW_Tier0
OU=Servers_Tier1
OU=Workstations_Tier2
```

---

## 🧩 GPO et tiering

Les GPO jouent un rôle clé :

- Blocage des connexions croisées
- Restriction des droits locaux
- Désactivation du cache des credentials
- Restriction RDP / WinRM
- AppLocker / WDAC
- LAPS / Windows LAPS

> [!tip]
> Une GPO par tier, avec des règles **strictement adaptées au niveau de risque**.

---

## 🔐 Gestion des comptes à privilèges

Bonnes pratiques :

- Comptes admin **distincts des comptes utilisateurs**
- Pas de messagerie sur comptes admin
- Pas de navigation web
- MFA systématique
- Mots de passe longs et uniques
- Rotation automatique (LAPS / PAM)

---

## 🔄 Tiering et sécurité avancée

Le tiering est souvent combiné avec :
- LAPS / Windows LAPS
- PAM / PIM
- Bastion d’administration
- Just-In-Time (JIT)
- Just-Enough-Administration (JEA)

---

## ⚠️ Erreurs fréquentes

> [!warning]
> - Utiliser le compte Admin du domaine pour tout
> - Laisser les admins se connecter aux postes utilisateurs
> - Mélanger support et admins infra
> - Absence de PAW
> - Manque de GPO restrictives

---

## ✅ Avantages du tiering

- Contention des attaques
- Réduction de l’impact d’un ransomware
- Protection d’Active Directory
- Meilleure traçabilité
- Conformité sécurité accrue

---

## 🧠 Limites et contraintes

- Complexité organisationnelle
- Changement d’habitudes
- Besoin de formation
- Investissement initial (PAW)

> [!note]
> Malgré cela, le **gain en sécurité est énorme**.

---

## 🧾 Summary

> [!summary]
> - Le tiering segmente l’administration par niveaux de confiance
> - Tier 0 protège le cœur AD
> - Tier 1 gère les serveurs
> - Tier 2 concerne les utilisateurs
> - Les PAW et les GPO sont essentielles
> - Le tiering est un pilier de la sécurité AD moderne

---
