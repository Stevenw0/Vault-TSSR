# 💽 NTFS — New Technology File System

## 📌 Introduction

Dans l’univers des systèmes de fichiers Windows, **NTFS** est la référence.  
Introduit avec Windows NT en 1993, il est aujourd’hui le système de fichiers par défaut sur toutes les versions modernes de Windows.

Il a été conçu pour offrir :

- 🔐 Sécurité avancée
- 📦 Gestion de gros volumes de données
- 🛡️ Fiabilité renforcée
- ⚙️ Performances adaptées aux environnements professionnels

---

# 🧠 NTFS : Définition

**NTFS (New Technology File System)** est un système de fichiers moderne développé par Microsoft pour remplacer FAT et FAT32.

Contrairement à FAT32 :

- Il supporte de très gros fichiers
- Il intègre des permissions avancées
- Il dispose d’un système de journalisation
- Il permet le chiffrement natif

---

# ⚙️ Fonctionnement interne

## 📂 Master File Table (MFT)

NTFS repose sur une structure centrale appelée :

> **MFT — Master File Table**

Chaque fichier et dossier possède une entrée dans la MFT contenant :

- Nom
- Attributs
- Permissions
- Emplacement sur le disque
- Métadonnées diverses

---

## 🔐 Système de permissions (ACL)

NTFS intègre un système avancé de **Listes de Contrôle d’Accès (ACL)**.

Chaque fichier ou dossier peut définir précisément :

- Qui peut lire
- Qui peut écrire
- Qui peut modifier
- Qui peut exécuter
- Qui peut supprimer

Cela permet un contrôle granulaire adapté aux environnements d’entreprise.

---

## 📓 Journaling (Journalisation)

NTFS utilise un système de journalisation :

- Les opérations sont enregistrées avant d’être exécutées
- En cas de coupure ou crash, le système peut restaurer la cohérence

Cela réduit fortement les risques de corruption comparé à FAT32.

---

## 🔒 Chiffrement natif — EFS

NTFS intègre **EFS (Encrypting File System)** :

- Chiffrement au niveau fichier/dossier
- Transparent pour l’utilisateur
- Basé sur des certificats

Permet de protéger les données sensibles sans logiciel tiers.

---

# 🚀 Pourquoi NTFS est si populaire ?

## ✅ 1. Sécurité avancée

- Permissions détaillées
- Support Active Directory
- Intégration Windows native

## ✅ 2. Support des fichiers volumineux

Contrairement à FAT32 (limité à 4 Go par fichier), NTFS supporte :

- Des fichiers de plusieurs téraoctets
- Des volumes très importants

Indispensable pour :

- Bases de données
- Machines virtuelles
- Fichiers vidéo haute définition

## ✅ 3. Fiabilité accrue

Grâce au journaling :

- Réduction des corruptions
- Meilleure récupération après incident
- Stabilité serveur renforcée

---

# ⚠️ Limites de NTFS

## ❌ Compatibilité limitée

NTFS fonctionne parfaitement sous Windows, mais :

- Lecture seule native sous macOS
- Support partiel sous Linux

👉 Pour les supports amovibles multi-OS, **exFAT** est souvent préférable.

---

## ❌ Sensible aux ransomwares

Étant le système le plus répandu sous Windows :

- Il est une cible privilégiée des malwares
- Un ransomware peut chiffrer rapidement les fichiers NTFS

La protection doit donc être assurée par :

- Sauvegardes régulières
- Solutions anti-ransomware
- Contrôle des privilèges

---

## ❌ Fragmentation

NTFS fragmente les fichiers dans le temps.

Windows intègre un défragmenteur automatique, mais sur :

- Très gros volumes
- Environnements serveurs intensifs

La fragmentation peut impacter les performances.

---

# 🔄 Alternatives à NTFS

| Système | Avantages | Inconvénients |
|----------|------------|---------------|
| FAT32 | Très compatible | Limite 4 Go |
| exFAT | Compatible Windows/Mac/Linux | Moins sécurisé |
| ReFS | Résilience accrue, adapté serveurs | Compatibilité limitée |
| EXT4 | Optimisé Linux | Non natif Windows |

---

# 🛡️ Bonnes pratiques avec NTFS

## 🔐 Activer le chiffrement (EFS)

Pour les données sensibles :

- Activer EFS
- Sauvegarder les certificats
- Restreindre les accès administrateurs

---

## 👀 Surveiller les accès

Mettre en place :

- Audit des accès NTFS
- Journaux de sécurité Windows
- Surveillance des élévations de privilèges

Approche recommandée : **Zero Trust**

---

## 💾 Sauvegarde proactive

Un système NTFS sans backup est une erreur.

Mettre en place :

- Sauvegarde automatique
- Versioning
- Test régulier de restauration

---

# 🧾 Résumé

NTFS est :

- Le système de fichiers standard de Windows
- Sécurisé et robuste
- Adapté aux environnements professionnels

Il offre :

✔️ Permissions avancées  
✔️ Support des gros fichiers  
✔️ Journalisation  
✔️ Chiffrement natif  

Mais nécessite :

⚠️ Surveillance  
⚠️ Sauvegarde  
⚠️ Protection contre les ransomwares  

---

# ❓ FAQ

### NTFS est-il toujours recommandé en 2024 ?

Oui pour Windows. Pour certains serveurs critiques, **ReFS** peut être plus adapté.

### NTFS est-il sécurisé ?

Oui, à condition d’activer les protections appropriées.

### Quel système choisir pour un disque externe ?

**exFAT** si compatibilité Windows/Mac requise.

---

💡 En environnement Windows professionnel, NTFS reste aujourd’hui le standard incontournable.