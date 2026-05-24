# 🖥️ FOG Project — Solution Open Source de clonage & déploiement réseau

> [!info]
> **FOG Project (Free and Open-source Ghost)** est une solution *open source* permettant de **cloner, déployer et gérer des systèmes d’exploitation** sur un parc informatique via le réseau. :contentReference[oaicite:0]{index=0}

---

## 🧠 Qu’est-ce que FOG ?

FOG est un logiciel de **clonage et de gestion à distance de machines**, conçu pour simplifier le **déploiement d’images système** (Windows, Linux, macOS) à l’échelle d’un réseau. Il repose sur un serveur Linux et utilise des technologies réseau standard (DHCP/PXE/TFTP) pour amorcer les machines clientes. :contentReference[oaicite:1]{index=1}

---

## 📦 Fonctionnalités principales

- 🧬 **Capture et déploiement d’images disque** (partition, disque complet) :contentReference[oaicite:2]{index=2}  
- 📡 **Boot PXE** : les clients démarrent via le réseau sans média physique :contentReference[oaicite:3]{index=3}  
- 🖥️ **Gestion à distance des clients** (inventaire, tâches, scripts) :contentReference[oaicite:4]{index=4}  
- 🎯 **Multi-site et déploiement massif** :contentReference[oaicite:5]{index=5}  
- 🧑‍💻 **Interface web** pour administration centralisée :contentReference[oaicite:6]{index=6}  
- 🔁 **Multicast** : déployer une image sur plusieurs machines simultanément :contentReference[oaicite:7]{index=7}  
- 📊 **Tâches avancées** : tests de mémoire, effacement de disques, récupération de fichiers :contentReference[oaicite:8]{index=8}  
- 🧪 **Snapins** : exécuter des scripts ou installer des logiciels après déploiement :contentReference[oaicite:9]{index=9}

---

## 🧩 Architecture globale

FOG se compose de plusieurs éléments :

### 📍 Serveur FOG
Installé typiquement sur une machine Linux (Debian, Ubuntu, etc.), il héberge :
- une interface web PHP
- une base de données
- des services TFTP pour l’amorçage réseau
- des images système à déployer :contentReference[oaicite:10]{index=10}

### 📍 Clients PXE
Les machines clientes démarrent par PXE, récupèrent un petit noyau Linux,
puis interagissent avec le serveur FOG pour :
- capturer une image
- déployer l’image appropriée :contentReference[oaicite:11]{index=11}

### 📍 Réseau
FOG nécessite une infrastructure réseau configurée avec :
- un DHCP donnant les paramètres de boot PXE
- un réseau câblé pour fiabilité et vitesse :contentReference[oaicite:12]{index=12}

---

## 🔁 Workflow classique

### 1️⃣ Capture d’une image
1. Préparer une machine modèle (SO + applications)  
2. Démarrer par PXE et enregistrer la machine dans FOG  
3. Capturer son image dans le dépôt FOG :contentReference[oaicite:13]{index=13}

### 2️⃣ Déploiement d’une image
1. Enregistrer les machines cibles dans FOG  
2. Sélectionner l’image à déployer  
3. Redémarrer les clients en boot PXE  
4. L’image est transférée puis restaurée :contentReference[oaicite:14]{index=14}

---

## ⚙️ Paramètres réseau essentiels

> Pour que PXE fonctionne, il faut une bonne configuration réseau :
- DHCP doit fournir l’adresse du serveur PXE  
- FOG peut faire DHCP lui-même ou être auxiliaire à un serveur existant  
- L’option 66/67 du DHCP doit pointer vers le serveur PXE et le bon fichier de boot :contentReference[oaicite:15]{index=15}

---

## 🧠 Bonnes pratiques

- Installer FOG sur un serveur **dévolu** ou une VM dédiée :contentReference[oaicite:16]{index=16}  
- Utiliser une **carte réseau gigabit** pour performance :contentReference[oaicite:17]{index=17}  
- Prévoir suffisamment d’espace pour les images (souvent plusieurs Go) :contentReference[oaicite:18]{index=18}  
- Regrouper les clients par groupe pour des déploiements cohérents :contentReference[oaicite:19]{index=19}

---

## 🛠️ Limitations à connaître

> ❗ FOG est très puissant mais pas parfait :  
> - Il peut être sensible à la configuration PXE et aux serveurs DHCP externes :contentReference[oaicite:20]{index=20}  
> - Certains environnements UEFI / Secure Boot peuvent poser problème sans adaptation :contentReference[oaicite:21]{index=21}  
> - La prise en charge du boot sécurisé n’est pas automatique dans toutes les versions :contentReference[oaicite:22]{index=22}

---

## 📊 Avantages & comparaisons

| Critère | FOG Project |
|---------|-------------|
| Open Source | Oui (GPLv3) :contentReference[oaicite:23]{index=23} |
| Gratuit | Oui :contentReference[oaicite:24]{index=24} |
| Administration centralisée | ✔️ :contentReference[oaicite:25]{index=25} |
| Déploiement massif | ✔️ :contentReference[oaicite:26]{index=26} |
| PXE boot sans média | ✔️ :contentReference[oaicite:27]{index=27} |

💡 Par rapport à une solution comme Clonezilla en standalone, FOG ajoute une **interface web, gestion de parc et automatisation réseau**, ce qui en fait une solution plus adaptée pour les grandes infrastructures. :contentReference[oaicite:28]{index=28}

---

## 🧾 Résumé

> FOG Project est une **solution complète de clonage et déploiement réseau** basée sur PXE, offrant une interface web facile à utiliser pour administrer, déployer et gérer des images système à grande échelle. Sa nature open source et sa communauté active en font un choix populaire pour les écoles, entreprises et services IT responsables d’un parc machines important. :contentReference[oaicite:29]{index=29}
