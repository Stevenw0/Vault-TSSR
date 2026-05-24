# 🖥️ HIDS — Host-Based Intrusion Detection System

## 🧩 Présentation générale

Un **HIDS (Host-Based Intrusion Detection System)** est un **système de détection d’intrusion installé directement sur une machine** (serveur, poste de travail ou endpoint).  
Il surveille **l’activité interne du système** afin de détecter des comportements anormaux ou malveillants.

Contrairement aux solutions réseau, le HIDS se concentre sur :
- le système d’exploitation
- les fichiers
- la mémoire
- les processus
- les journaux (logs)

> [!info]
> Le HIDS agit comme un **agent de sécurité local**, capable de détecter des attaques **internes ou furtives**.

---

## 🎯 Objectifs d’un HIDS

Un HIDS permet de :

- Détecter les intrusions locales
- Identifier les modifications non autorisées
- Surveiller les comportements suspects
- Repérer les malwares persistants
- Renforcer la sécurité des serveurs critiques

Il est particulièrement utile pour :
- les serveurs exposés
- les machines sensibles
- les environnements à haute exigence de sécurité

---

## 🧠 Principe de fonctionnement

Le HIDS repose sur le principe suivant :

> **Toute intrusion laisse une trace.**

Il surveille en permanence l’état du système afin de détecter :
- des fichiers modifiés
- des permissions altérées
- des processus inhabituels
- des accès non autorisés
- des changements mémoire anormaux

---

## 🔍 Éléments surveillés

### 📁 Système de fichiers
- Intégrité des fichiers critiques
- Changements de permissions
- Suppression ou ajout suspect

### ⚙️ Processus
- Lancement de processus inconnus
- Escalade de privilèges
- Accès anormal aux ressources système

### 🧠 Mémoire
- Tables système
- Structures critiques
- Comportements indiquant un rootkit

### 🧾 Journaux (logs)
- Effacement suspect de logs
- Réduction anormale de taille
- Événements de sécurité inhabituels

---

## 🧮 Méthodes de détection

### 🔐 Vérification d’intégrité (checksums)

Le HIDS crée une **empreinte cryptographique** des fichiers surveillés :
- taille
- date
- permissions
- hash (ex. MD5, SHA)

Toute modification ultérieure est détectée.

> [!note]
> Cette méthode est très efficace pour détecter :
> - backdoors
> - chevaux de Troie
> - modifications post-intrusion

---

### 📊 Analyse comportementale

Le HIDS analyse :
- les actions des programmes
- l’accès aux ressources
- les comportements inhabituels

Exemple :
- un traitement de texte accédant aux fichiers système
- un service réseau modifiant la base des comptes

---

## ⚙️ Phase d’initialisation

Lors de l’installation :

1. Le HIDS scanne les objets à surveiller
2. Il crée une base de référence sécurisée
3. Les empreintes sont stockées dans une base protégée

> [!warning]
> Cette phase doit être réalisée sur un **système sain**, sinon l’état compromis devient la référence.

---

## 🛡️ Protection du HIDS

Un HIDS est conçu pour :
- protéger ses bases de données
- empêcher la falsification des logs
- éviter la désactivation par un malware

Certaines solutions :
- stockent les bases hors système
- envoient les logs vers un serveur central
- utilisent des supports en lecture seule

---

## 🔄 HIDS vs NIDS

| Critère | HIDS | NIDS |
|------|------|------|
| Emplacement | Sur l’hôte | Sur le réseau |
| Vision | Locale | Globale |
| Attaques internes | Oui | Non |
| Performance | Impact local | Impact réseau |
| Déploiement | Par machine | Centralisé |

> [!important]
> HIDS et NIDS sont **complémentaires**, pas concurrents.

---

## ⚠️ Avantages et limites

### ✅ Avantages
- Détection fine et précise
- Identification des attaques internes
- Analyse détaillée du système
- Vision complète de l’hôte

### ❌ Limites
- Installation sur chaque machine
- Impact possible sur les performances
- Gestion plus complexe à grande échelle
- Volume important de données à analyser

---

## 🚨 Menaces détectables par un HIDS

- Rootkits
- Backdoors
- Keyloggers
- Botnets
- Modifications système non autorisées
- Escalades de privilèges
- Effacement de traces

---

## 🧠 Bonnes pratiques

> [!tip]
> - Installer le HIDS sur les serveurs critiques
> - Centraliser les logs
> - Protéger l’accès aux bases HIDS
> - Mettre à jour régulièrement les règles
> - Coupler avec d’autres mécanismes de sécurité

---

## 🧾 Cas d’usage typiques

- Serveurs exposés à Internet
- Environnements réglementés
- Systèmes critiques
- Détection post-intrusion
- Analyse forensique

---

## 🧾 Summary

> [!summary]
> - Le HIDS surveille l’activité interne d’une machine
> - Il détecte les intrusions locales et internes
> - Il repose sur l’intégrité et le comportement
> - Il complète les solutions de sécurité réseau
> - Il est essentiel pour les systèmes sensibles

---
