# 💾 NFS vs iSCSI — Différence entre les protocoles de partage de données

## 📌 Introduction

Le **Network File System (NFS)** et **iSCSI (Internet Small Computer System Interface)** sont deux protocoles utilisés pour partager des données sur un réseau.

Le partage efficace des données est essentiel pour :

- les entreprises
- les infrastructures cloud
- les centres de données
- les environnements virtualisés

Bien qu’ils remplissent une fonction similaire, **NFS et iSCSI fonctionnent de manière très différente**.

- **NFS** permet le partage **au niveau des fichiers**
- **iSCSI** permet le partage **au niveau des blocs**

---

# 🧠 Qu’est-ce que NFS ?

Le **Network File System (NFS)** est un protocole de partage de fichiers réseau développé dans les années 1980 pour les systèmes **Unix**.

Aujourd’hui il est toujours largement utilisé, notamment dans :

- Linux
- Unix
- environnements cloud
- infrastructures NAS.

La version actuelle la plus répandue est **NFSv4**.

---

## ⚙️ Fonctionnement de NFS

Le fonctionnement de NFS repose sur un modèle **client-serveur**.

Processus :

1️⃣ Le client demande l’accès à un partage NFS sur un serveur  
2️⃣ Le serveur **monte le système de fichiers distant**  
3️⃣ Le stockage distant apparaît comme un **répertoire local**  
4️⃣ Les données sont mises en cache pour améliorer les performances.

Les communications NFS utilisent généralement :

- **RPC (Remote Procedure Call)**
- **TCP ou UDP**

---

## 📂 Avantages de NFS

✔️ Partage simple de fichiers  
✔️ Gestion native du verrouillage des fichiers  
✔️ Idéal pour les environnements Linux  
✔️ Installation simple dans la plupart des distributions

---

# 🧠 Qu’est-ce que iSCSI ?

**iSCSI (Internet Small Computer System Interface)** est un protocole qui permet d’utiliser le protocole **SCSI** sur un réseau TCP/IP.

Contrairement à NFS, iSCSI fonctionne **au niveau du bloc**, ce qui signifie que le stockage distant apparaît comme un **disque local** pour la machine cliente.

iSCSI est souvent utilisé dans les **réseaux de stockage (SAN)**.

---

## ⚙️ Fonctionnement de iSCSI

L’architecture iSCSI repose également sur un modèle **client-serveur**.

Terminologie :

- **Initiateur** → client iSCSI
- **Cible iSCSI** → serveur de stockage
- **LUN (Logical Unit Number)** → unité logique de stockage.

Processus :

1️⃣ L’initiateur se connecte à une **cible iSCSI**  
2️⃣ L’authentification peut être réalisée via **CHAP**  
3️⃣ Le stockage distant apparaît comme un **disque local**.

---

## 💽 Avantages de iSCSI

✔️ Accès direct au stockage bloc  
✔️ Performances élevées  
✔️ Idéal pour la virtualisation  
✔️ Compatible avec de nombreux systèmes d’exploitation

---

# ⚙️ Comparaison du fonctionnement

NFS et iSCSI utilisent tous deux une architecture **client-serveur**, mais leur approche est différente.

- **NFS** → partage des fichiers
- **iSCSI** → partage des blocs de stockage

---

# 🚀 Performances

En général :

- **iSCSI offre de meilleures performances**

Pourquoi ?

Parce qu’il manipule directement les **blocs disque**, alors que NFS ajoute une couche de système de fichiers.

---

# 🔒 Gestion des conflits

### NFS

Le protocole NFS possède un mécanisme intégré pour :

- gérer les conflits
- verrouiller les fichiers.

Cela permet à plusieurs clients d’accéder au même fichier.

---

### iSCSI

iSCSI ne gère pas les conflits au niveau du système de fichiers.

Il est donc nécessaire d’utiliser :

- un logiciel de gestion
- un système de fichiers clusterisé.

---

# ⚙️ Facilité de configuration

### NFS

- Disponible par défaut sur Linux
- Installation rapide
- Configuration simple

---

### iSCSI

- nécessite un **initiateur iSCSI**
- configuration plus complexe
- dépend souvent de l’infrastructure de stockage.

---

# 🏢 Quand utiliser NFS ?

NFS est souvent utilisé dans :

- environnements Linux
- infrastructures NAS
- réseaux locaux (LAN)
- environnements collaboratifs.

Par exemple :

- entreprises
- universités
- organismes publics.

Pour plus d’informations :

➡️ https://aws.amazon.com/fr/what-is/nas/

---

# 🏢 Quand utiliser iSCSI ?

iSCSI est couramment utilisé dans :

- réseaux SAN
- infrastructures de virtualisation
- centres de données
- stockage d’entreprise.

Il est souvent utilisé lorsque plusieurs serveurs doivent accéder à :

- des baies de stockage
- des disques distants.

---

# ☁️ NFS et iSCSI dans le cloud

De nombreuses architectures cloud utilisent :

- NFS
- iSCSI

Cependant, ces protocoles sont souvent **masqués derrière des services gérés**.

---

# ☁️ AWS et le stockage réseau

AWS propose plusieurs services permettant d’utiliser ces technologies.

Exemple :

### Amazon FSx

➡️ https://aws.amazon.com/fr/fsx/

Ce service permet :

- d’exécuter des systèmes de fichiers performants
- de migrer des infrastructures de stockage vers le cloud
- de gérer automatiquement l’infrastructure.

---

## Avantages

Amazon FSx permet notamment :

- la gestion automatique du matériel
- l’application des correctifs
- les sauvegardes
- la mise à l’échelle.

Il supporte plusieurs systèmes de fichiers :

- NetApp ONTAP
- OpenZFS
- Windows File Server
- Lustre.

---

### Amazon FSx pour NetApp ONTAP

➡️ https://aws.amazon.com/fr/fsx/netapp-ontap/

Ce service permet d’accéder aux données via plusieurs protocoles :

- NFS
- SMB
- iSCSI.

---

# 🚀 Démarrer avec AWS

Créer un compte AWS :

➡️ https://portal.aws.amazon.com/billing/signup

---

## Utiliser NFS sur AWS

➡️ https://aws.amazon.com/efs/

---

## Utiliser iSCSI sur AWS

➡️ https://aws.amazon.com/fsx/

---

# 📊 Tableau comparatif

| | **NFS** | **iSCSI** |
|---|---|---|
| Type | Network File System | Internet Small Computer System Interface |
| Niveau | Accès fichier | Accès bloc |
| Usage principal | Partage de fichiers | Stockage réseau |
| Performances | Moyennes à élevées | Très élevées |
| Verrouillage | Intégré | Non intégré |
| Communication | RPC sur TCP/UDP | SCSI sur TCP/IP |
| Installation | Simple | Plus complexe |

---

# 🧾 Résumé

**NFS et iSCSI sont deux protocoles essentiels pour le partage de données en réseau.**

✔️ **NFS**  
- partage de fichiers  
- simple à configurer  
- très utilisé sous Linux  

✔️ **iSCSI**  
- accès au stockage bloc  
- performances élevées  
- utilisé dans les SAN et infrastructures virtualisées.

---

💡 Le choix entre **NFS et iSCSI dépend principalement du type d’accès au stockage nécessaire : fichier ou bloc.**