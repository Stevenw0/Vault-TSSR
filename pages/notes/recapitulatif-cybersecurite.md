# 🛡️ Récapitulatif Cybersécurité

---

# 📌 Introduction

Cette note regroupe les principaux concepts vus autour :

- des attaques réseau
- de l’analyse des risques
- de la sécurité Linux et Windows
- des sauvegardes
- du chiffrement
- des audits de sécurité

---

# 🌐 1️⃣ Attaque MITM — Man In The Middle

---

# 📌 Définition

Une attaque MITM consiste à :

- intercepter la communication
- entre un utilisateur et un système

---

# 🧠 Fonctionnement

```text
Victime
   ↓
Attaquant
   ↓
Serveur
```

---

# 🔧 ARP Spoofing

## 📌 Définition

Technique de falsification de la table ARP.

---

# 📡 ARP — Address Resolution Protocol

Permet la correspondance entre :

- adresse IP
- adresse MAC

---

# ⚠️ Faiblesse ARP

ARP accepte :

- requêtes
- réponses

sans vérifier l’origine.

---

# 🧪 Outil utilisé

```text
Ettercap
```

---

# 🧱 2️⃣ Analyse des risques

---

# 📌 Définition

Étape essentielle de la cybersécurité permettant :

- d’identifier les risques
- d’évaluer les impacts
- de définir des contre-mesures

---

# 👤 RSSI

```text
Responsable de la Sécurité du Système d’Information
```

---

# 📚 Terminologies

| Terme | Description |
|---|---|
| Asset | actif |
| Vulnerability | vulnérabilité |
| Threat | menace |
| Attack | exploitation |

---

# 🧩 Types d’actifs

| Type | Exemple |
|---|---|
| actifs primordiaux | données |
| actifs supports | matériel |

---

# ⚙️ Étapes d’analyse des risques

---

## 🔹 1. Identifier les vulnérabilités

### Phase de reconnaissance :

- IP
- OS
- applications
- versions

---

## 🧪 Outils

- Nmap
- Nessus
- OpenVAS
- Qualys
- Netdiscover

---

## 🔹 2. Définir des contre-mesures

Objectif :

- corriger les vulnérabilités

---

## 🔹 3. Surveillance continue

Mettre à jour :

- le plan de risque
- les mesures de sécurité

---

# 💥 Test d’intrusion

## 🧪 Outils

- Kali Linux
- Metasploit

---

# 🏢 3️⃣ Solutions de cybersécurité

---

# 📊 Niveaux de sécurité

| Domaine | Description |
|---|---|
| organisationnelle | politiques |
| systèmes | OS |
| réseau | VLAN / firewall |
| applications | protection logicielle |

---

# 💾 4️⃣ Sauvegarde & restauration

---

# 📌 Importance

Permet :

- récupération données
- continuité activité
- protection ransomware

---

# 📚 Règles de sauvegarde

| Règle | Description |
|---|---|
| 3-2-1 | 3 copies / 2 supports / 1 hors site |
| 3-2-1-1-0 | + immuable + 0 erreur |
| 4-3-2 | 4 copies / 3 supports / 2 hors site |

---

# 🔐 5️⃣ Chiffrement des données

---

# 📌 Objectif

Rendre les données illisibles sans clé.

---

# 📦 Types de chiffrement

| Type | Description |
|---|---|
| disque intégral | stockage |
| fichiers | protection locale |
| emails | échanges sécurisés |

---

# 🔑 Chiffrement symétrique

---

# 📌 Définition

Même clé :

- chiffrement
- déchiffrement

---

# 🧪 Algorithmes

- DES
- 3DES
- AES

---

# 🔐 Chiffrement asymétrique

---

# 📌 Définition

Deux clés :

- publique
- privée

---

# 🧪 Algorithmes

- RSA
- ECC

---

# 🧩 Confidentialité

Le chiffrement garantit :

```text
Confidentialité des données
```

---

# 🧱 6️⃣ Hachage

---

# 📌 Définition

Permet de vérifier l’intégrité des données.

---

# ⚙️ Fonctionnement

Transformation :

```text
Données → empreinte fixe
```

---

# 🧪 Algorithmes

- MD5
- SHA1
- SHA2
- SHA3

---

# 🧱 7️⃣ Sécurité Linux

---

# 👥 Gestion utilisateurs

- permissions
- groupes
- utilisateurs

---

# 🔐 Politique mot de passe

## 📂 Fichier

```bash
/etc/security/pwquality.conf
```

---

# 📋 Règles possibles

- longueur minimale
- majuscule
- minuscule
- chiffre
- caractère spécial

---

# 🔄 Bonnes pratiques

- renouvellement tous les 3 mois
- verrouillage comptes inactifs

---

# 🔐 MFA — Multi-Factor Authentication

Ajout d’une couche de sécurité :

- SMS
- empreinte
- reconnaissance faciale

---

# 🔥 Pare-feux Linux

| Solution | Description |
|---|---|
| iptables | Netfilter |
| UFW | simplifié |
| Firewalld | dynamique |

---

# 📜 Journalisation Linux

## 🧪 Outil

```bash
journalctl
```

---

# 🛡️ Fail2ban

Permet :

- bannir une IP
- après plusieurs échecs connexion

---

# 🪟 8️⃣ Sécurité Windows

---

# ⚙️ Mesures principales

| Mesure | Description |
|---|---|
| antivirus | protection |
| firewall Defender | filtrage |
| politique mot de passe | sécurité |
| verrouillage comptes | protection |
| événements système | logs |

---

# 🔎 9️⃣ Audit SI

---

# 📌 Définition

Objectif :

- identifier vulnérabilités
- proposer corrections

---

# 📚 Types d’audits

| Type | Description |
|---|---|
| audit social | ingénierie sociale |
| audit mots de passe | sécurité |
| audit organisationnel | gouvernance |
| audit configuration | systèmes |
| audit code source | développement |

---

# 🧪 Scanners de vulnérabilités

- OpenVAS
- Nessus
- Qualys

---

# 🛡️ Bonnes pratiques

> [!warning]

- appliquer MFA
- surveiller logs
- effectuer sauvegardes régulières
- maintenir systèmes à jour
- segmenter le réseau
- tester PRA/PCA

---

# 📊 Résumé global

| Domaine | Exemple |
|---|---|
| attaque réseau | MITM |
| analyse risques | RSSI |
| chiffrement | AES/RSA |
| hachage | SHA |
| Linux | UFW |
| Windows | Defender |
| audit | Nessus |

---

# 🎯 Conclusion

La cybersécurité moderne repose sur :

🔥 prévention  
🔥 détection  
🔥 protection des données  
🔥 supervision  
🔥 audit  

👉 tous ces éléments doivent fonctionner ensemble pour sécuriser efficacement une infrastructure.
