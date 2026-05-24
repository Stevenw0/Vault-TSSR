# 🖥️ RDP — Remote Desktop Protocol

## 📌 Introduction

**RDP (Remote Desktop Protocol)** est un protocole développé par Microsoft permettant d’accéder à distance à un ordinateur ou à un serveur.

Il est largement utilisé dans les environnements :

- Windows Server
- infrastructures d’entreprise
- administration système
- support informatique

RDP permet de **contrôler une machine distante comme si l’on était physiquement devant**.

---

# 🧠 Principe de fonctionnement

RDP repose sur la famille de protocoles **T-120** et constitue une extension du protocole **T.Share**.

Ce protocole utilise un système de **canaux virtuels multiples** permettant de transmettre plusieurs types de données simultanément.

Les canaux peuvent transporter :

- données d’affichage
- activité clavier
- activité souris
- communication avec des périphériques
- informations de licence
- données chiffrées

Ces canaux permettent de séparer les flux de données afin d’optimiser les performances et la sécurité.

---

# ⚙️ Architecture du protocole RDP

RDP repose sur une architecture **client-serveur**.

Le client :

- envoie les actions utilisateur
- reçoit l’affichage distant

Le serveur :

- exécute les applications
- renvoie l’affichage graphique au client.

Les interactions sont transmises en **temps réel**.

---

# 📡 Canaux de communication

RDP supporte jusqu’à **64 000 canaux virtuels**.

Ces canaux servent à transporter différents types de données :

- affichage graphique
- entrées utilisateur
- données périphériques
- données sécurisées.

Dans les premières implémentations de Terminal Server, un seul canal était utilisé pour :

- clavier
- souris
- affichage.

Grâce à la flexibilité de RDP, des fonctionnalités supplémentaires ont été ajoutées dans les versions suivantes.

---

# 🌐 Compatibilité réseau

RDP est conçu pour fonctionner sur plusieurs types de réseaux :

- réseaux LAN
- connexions distantes
- infrastructures WAN.

Il peut fonctionner avec différents protocoles réseau :

- TCP/IP
- IPX
- NetBIOS

Aujourd’hui, la version actuelle de RDP fonctionne **principalement sur TCP/IP**.

---

# 🧩 Fonctionnement dans la pile réseau

Le fonctionnement de RDP est similaire au **modèle OSI à 7 couches**.

Lorsqu’une application transmet des données :

1️⃣ Les données sont envoyées dans la pile protocolaire  
2️⃣ Elles sont segmentées  
3️⃣ Elles sont dirigées vers un canal virtuel  
4️⃣ Elles sont chiffrées  
5️⃣ Elles sont encapsulées  
6️⃣ Elles sont envoyées via le protocole réseau.

Au retour :

1️⃣ Les paquets sont reçus  
2️⃣ Ils sont désencapsulés  
3️⃣ Déchiffrés  
4️⃣ Reconstitués  
5️⃣ Transmis à l’application.

Les modifications principales dans la pile RDP interviennent entre les **couches 4 et 7 du modèle OSI**.

---

# 🔐 Sécurité du protocole

RDP peut chiffrer plusieurs types de données :

- entrées clavier
- mouvements de souris
- flux d’affichage
- communications de session.

Les données sont :

- chiffrées
- encapsulées
- prioritaires
- segmentées.

Cela garantit la confidentialité des interactions entre client et serveur.

---

# 🧱 Composants principaux de la pile RDP

Plusieurs composants essentiels composent la pile RDP.

## 📡 MCS — Multipoint Communication Service

Le service **MCSMUX** permet :

- la gestion des canaux virtuels
- la segmentation des données
- la priorisation des flux.

Il repose sur deux standards :

- **T.122** → services multipoints
- **T.125** → protocole de transmission des données.

---

## 🧠 GCC — Generic Conference Control

Le composant **GCC** gère :

- la création des sessions
- la suppression des sessions
- la gestion des ressources.

Il coordonne les communications multipoints.

---

## 🖥️ Wdtshare.sys

Ce pilote gère plusieurs fonctions essentielles :

- transfert de l’interface graphique
- compression
- chiffrement
- encapsulation des données.

---

## 🌐 Tdtcp.sys

Ce composant gère le transport réseau.

Son rôle est de :

- encapsuler les données RDP
- utiliser le protocole **TCP/IP** pour la transmission.

---

# ⚙️ Terminal Server et RDP

RDP a été intégré dans **Windows NT Terminal Server** pour fournir une solution native d’accès distant.

L’objectif était de :

- créer une base solide pour les futures fonctionnalités
- permettre des communications fiables
- offrir de bonnes performances réseau.

Chaque protocole Terminal Server possède sa propre pile de protocole.

Les protocoles supportés peuvent inclure :

- **RDP**
- **ICA (Citrix)**.

---

# 🚀 Avantages de RDP

Le protocole RDP présente plusieurs avantages :

✔️ accès distant sécurisé  
✔️ faible consommation de bande passante  
✔️ compatibilité avec les infrastructures Windows  
✔️ administration centralisée  
✔️ exécution des applications côté serveur.

---

# 🏢 Cas d’usage

RDP est utilisé dans de nombreux scénarios :

- administration de serveurs Windows
- accès distant aux postes de travail
- support technique
- virtualisation de postes
- environnements VDI.

---

# 📊 Résumé

**RDP est un protocole clé pour l’accès distant aux systèmes Windows.**

Il permet :

✔️ la gestion des sessions distantes  
✔️ la transmission en temps réel des interactions utilisateur  
✔️ la séparation des flux via des canaux virtuels  
✔️ la sécurisation des communications.

Grâce à son architecture flexible et évolutive, RDP constitue aujourd’hui **l’un des protocoles d’accès distant les plus utilisés dans les environnements Windows**.