# 💾 SAN — Storage Area Network

## 📌 Introduction

Un **SAN (Storage Area Network)** est un réseau spécialisé à **haute performance** dédié au stockage de données.  

Il permet de connecter des **serveurs** à des **systèmes de stockage centralisés** via une infrastructure réseau rapide et fiable.

Contrairement au stockage local, un SAN permet :

- la **centralisation du stockage**
- une **faible latence**
- un **débit élevé**
- une **haute disponibilité**

👉 Définition SAN  
https://fr.wikipedia.org/wiki/R%C3%A9seau_de_stockage_SAN

Les SAN sont principalement utilisés pour **les applications critiques** nécessitant de fortes performances et une disponibilité élevée.

---

# 🧠 Principe de fonctionnement d’un SAN

Dans une architecture SAN, les données sont stockées sous forme de **blocs de stockage**.

Ces blocs sont regroupés dans des unités logiques appelées :

```
LUN (Logical Unit Number)
```

👉 Documentation LUN  
https://docs.netapp.com/fr-fr/ontap/concepts/volumes-qtrees-files-luns-concept.html

Pour les serveurs connectés au SAN :

- les LUN apparaissent comme **des disques locaux**
- les serveurs peuvent **partitionner et formater ces disques**
- les données sont ensuite stockées comme sur un disque classique.

---

# 🧱 Architecture d’un SAN

Une infrastructure SAN se compose généralement de **trois éléments principaux**.

## 🖥️ Serveurs

Les serveurs utilisent le stockage SAN pour :

- héberger des applications
- exécuter des bases de données
- gérer des machines virtuelles.

---

## 💽 Systèmes de stockage

Ces dispositifs contiennent les supports physiques :

- disques durs
- SSD
- stockage hybride.

Ils fournissent les **LUN** aux serveurs connectés.

---

## 🌐 Réseau SAN

Le réseau SAN relie les serveurs aux systèmes de stockage.

Il est conçu pour offrir :

- une **latence minimale**
- un **débit très élevé**
- une **fiabilité maximale**.

---

# ⚙️ Protocoles utilisés dans un SAN

Plusieurs protocoles permettent de connecter les serveurs au stockage SAN.

## Fibre Channel (FCP)

Le **Fibre Channel Protocol** est le protocole SAN le plus utilisé.

Il offre :

- des performances très élevées
- une latence très faible
- une fiabilité importante.

---

## iSCSI

👉 https://fr.wikipedia.org/wiki/ISCSI

**iSCSI (Internet Small Computer System Interface)** encapsule les commandes SCSI dans des paquets IP.

Avantages :

- fonctionne sur **Ethernet**
- plus économique que Fibre Channel
- facile à intégrer dans un réseau existant.

---

## Fibre Channel over Ethernet (FCoE)

FCoE encapsule les trames Fibre Channel dans des paquets Ethernet.

Cela permet d’utiliser :

- une infrastructure réseau IP existante
- tout en conservant les performances du Fibre Channel.

---

## FC-NVMe

Le **Non-Volatile Memory Express over Fibre Channel (FC-NVMe)** est une évolution du SAN permettant :

- d’exploiter les performances des **stockages NVMe**
- d’améliorer les performances des systèmes flash.

---

# 🏢 Cas d’utilisation du SAN

Le SAN est particulièrement adapté aux applications critiques.

Exemples d’utilisation :

### Bases de données

- Oracle  
https://www.netapp.com/fr/oracle/what-is-oracle-database

- Microsoft SQL Server  
https://www.netapp.com/fr/data-infrastructure-modernization/sql-solutions

Ces applications nécessitent :

- une disponibilité constante
- des performances élevées.

---

### Virtualisation

Les environnements de virtualisation utilisent souvent le SAN :

- VMware
- KVM
- Microsoft Hyper-V

👉 https://www.netapp.com/fr/hybrid-cloud/it-automation

Le SAN permet de gérer :

- des milliers de machines virtuelles
- des charges de travail variables.

---

### VDI (Virtual Desktop Infrastructure)

Le SAN est utilisé pour :

- les infrastructures de postes virtuels
- la gestion centralisée des données utilisateurs.

---

### Applications ERP / SAP

Les architectures SAN sont adaptées aux systèmes :

- ERP
- CRM
- SAP

👉 https://www.netapp.com/fr/sap-solutions

---

# 🧠 SAN vs NAS

Le **SAN** et le **NAS** sont deux architectures de stockage réseau.

👉 Comparaison SAN / NAS  
https://www.netapp.com/fr/blog/difference-between-nas-and-san

---

## SAN

Caractéristiques :

- stockage **au niveau bloc**
- très haute performance
- faible latence
- idéal pour :

  - bases de données
  - virtualisation
  - applications critiques.

---

## NAS

👉 https://fr.wikipedia.org/wiki/Serveur_de_stockage_en_r%C3%A9seau

Caractéristiques :

- stockage **au niveau fichier**
- plus simple à gérer
- plus économique
- adapté au :

  - partage de fichiers
  - stockage général
  - sauvegardes.

---

# 💰 Coût d’un SAN

Le coût d’une infrastructure SAN dépend de plusieurs facteurs :

- performance requise
- capacité de stockage
- technologie utilisée
- niveau de redondance.

Les SAN **all-flash** offrent :

- des performances très élevées
- une latence minimale

mais sont **plus coûteux**.

Les solutions hybrides (SSD + HDD) permettent :

- un bon compromis entre **coût et performance**.

---

# ⚙️ Mise en place d’un SAN

Le déploiement d’un SAN implique plusieurs étapes.

### 1️⃣ Choix du protocole

- Fibre Channel
- iSCSI
- FCoE.

---

### 2️⃣ Création des LUN

Les unités de stockage sont créées sur les baies.

---

### 3️⃣ Connexion des serveurs

Les serveurs sont reliés au SAN via :

- Fibre Channel
- Ethernet.

---

### 4️⃣ Redondance

Un SAN doit inclure :

- plusieurs chemins réseau
- plusieurs contrôleurs
- plusieurs commutateurs.

Cela garantit :

- haute disponibilité
- tolérance aux pannes.

---

# 🧠 SAN vs DAS

Le **DAS (Direct Attached Storage)** est un stockage directement connecté à un serveur.

Contrairement au SAN :

- le stockage n’est **pas partagé**
- il n’y a **pas de réseau dédié**.

Le SAN permet donc :

- une meilleure évolutivité
- une gestion centralisée.

---

# 🏢 Solutions SAN NetApp

NetApp propose des solutions SAN utilisées dans de nombreuses entreprises.

Avantages :

✔️ très hautes performances  
✔️ connectivité cloud hybride  
✔️ disponibilité jusqu’à **99,9999 %**  
✔️ optimisation du coût total de possession.

👉 Coût du cycle de vie (TCO)  
https://fr.wikipedia.org/wiki/Co%C3%BBt_du_cycle_de_vie

---

## SAN et NVMe

NetApp propose également des solutions SAN basées sur **NVMe**.

👉 https://www.netapp.com/fr/data-storage/nvme/

Ces technologies permettent :

- des performances extrêmement élevées
- une latence minimale.

---

# 📊 Résumé

Le **SAN (Storage Area Network)** est une architecture de stockage réseau haute performance.

Caractéristiques principales :

✔️ stockage au niveau bloc  
✔️ faible latence  
✔️ haut débit  
✔️ haute disponibilité  
✔️ centralisation du stockage.

Il est principalement utilisé pour :

- bases de données
- virtualisation
- infrastructures critiques
- systèmes ERP.

Le choix entre **SAN et NAS** dépend des besoins en :

- performance
- coût
- facilité de gestion
- évolutivité.