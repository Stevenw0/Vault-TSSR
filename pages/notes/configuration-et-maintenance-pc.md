# Configuration et maintenance PC (28-30 Janvier 2026)
- Samuel GUILLARD <sguillard@jehann.fr>] 
- 27 Janvier 2026

# Logiciels

## 1) Winget (Windows Package Manager)

### Définition

**Winget** est le gestionnaire de paquets officiel de Microsoft pour Windows.
Il permet d’installer, mettre à jour et supprimer des logiciels en ligne de commande.

### Fonctionnalités principales

* Installation automatisée de logiciels
* Mise à jour globale des applications
* Déploiement via scripts (PowerShell, GPO, Intune, etc.)
* Gestion des sources (Microsoft Store, dépôt Winget)

### Exemple de commande

```powershell
winget install Obsidian.Obsidian
```

### Lien officiel

* Documentation Microsoft :
  [https://learn.microsoft.com/fr-fr/windows/package-manager/winget/](https://learn.microsoft.com/fr-fr/windows/package-manager/winget/)

![](https://hedgedoc.dawan.fr/uploads/47e11222-1cfc-47f0-a121-e783fd762f54.png)

---

## 2) Obsidian

### Définition

**Obsidian** est un logiciel de prise de notes basé sur des fichiers Markdown.
Il permet de créer une base de connaissances personnelle (PKM – Personal Knowledge Management).

### Caractéristiques

* Notes en Markdown (.md)
* Liens bidirectionnels entre notes
* Graph de connaissances
* Extensions (plugins)
* Fonctionnement local (sans cloud obligatoire)

### Cas d’usage

* Documentation technique
* Prise de notes IT
* Organisation de projets
* Base de connaissances (wiki personnel)

### Lien officiel

* Site officiel :
  [https://obsidian.md/](https://obsidian.md/)

---

## 3) KeePassXC

### Définition

**KeePassXC** est un gestionnaire de mots de passe open-source, compatible avec le format KeePass (.kdbx).

### Caractéristiques

* Stockage sécurisé des mots de passe (chiffrement AES-256)
* Fonctionnement hors ligne
* Multi-plateforme (Windows, Linux, macOS)
* Compatible avec KeePass et KeePass2
* Génération de mots de passe forts

### Cas d’usage

* Gestion sécurisée des identifiants
* Coffre-fort de mots de passe IT
* Partage contrôlé de secrets (avec fichier .kdbx)

### Lien officiel

* Site officiel :
  [https://keepassxc.org/](https://keepassxc.org/)

# 1. Débuter en maintenance

## 1.1 Le rôle du technicien support et l’environnement PC

---

### Le rôle du technicien support

Le technicien support est le **premier contact** entre l’utilisateur et le service informatique.
Son rôle est de **prendre en charge une demande**, de **comprendre un problème** et de **proposer une solution adaptée**.

Il ne s’agit pas seulement de réparer, mais de **raisonner**, **communiquer** et **documenter**.

---

### Tâches courantes

Un technicien support peut être amené à :

* Aider les utilisateurs à distance ou sur site
* Diagnostiquer des pannes simples
* Installer ou configurer des logiciels
* Gérer des périphériques (imprimantes, son, écran, etc.)
* Suivre les demandes via un outil de ticketing

---

### Problème matériel ou logiciel

On distingue généralement :

* **Problème logiciel**

  * message d’erreur
  * problème après mise à jour
  * dépend de l’utilisateur

* **Problème matériel**

  * composant non détecté
  * bruit anormal
  * panne brutale

Le diagnostic commence toujours par les vérifications **les plus simples**.

---

### Méthodologie de diagnostic

Une démarche classique :

1. Comprendre la demande utilisateur
2. Observer les symptômes
3. Formuler des hypothèses
4. Tester
5. Proposer une solution
6. Documenter

Cette méthode sera utilisée tout au long de la formation.

---

### Constructeurs et assembleurs

* **Constructeurs** : matériel standardisé, garantie et support intégrés
* **Assembleurs / PC montés** : composants choisis selon les besoins, plus de flexibilité

Le choix dépend du **contexte** (entreprise, budget, usage).

---

### Sources de documentation

Un technicien ne retient pas tout, il sait **où chercher** :

* Documentation officielle
* Bases de connaissances
* Forums techniques
* Sites spécialisés

Chercher de l’information fait partie du métier.

---

### A retenir

* Le technicien support analyse avant d’agir
* Le diagnostic est plus important que la solution immédiate
* La méthode est essentielle
* La documentation est un outil de travail
* Le support informatique est un métier logique et structuré

---

## 1.2 TP1 – Prise en main du support et du ticketing

---
GLPI
URL : https://glpi.kaya.ovh

Comptes :

user1: Jean-Marie
user2: Steven
user3: Thierry
user4: Moriba
user5: Adrien
user6: Sabri

MDP
```
s%~6Mf1E5oV9=V,"Lg5k:g
```

Chaque compte dispose de :
- 1 profil Self-Service
- 1 profil Technicien


### Objectifs du TP

* Découvrir le fonctionnement d’un outil de ticketing
* Comprendre le rôle **utilisateur / technicien**
* Appliquer une méthodologie simple de diagnostic
* Produire une **procédure technique documentée**
* Alimenter une **base de connaissances**

---

### Contexte

Vous travaillez dans une équipe de support informatique.
Les utilisateurs déclarent leurs incidents via un outil de ticketing (GLPI).
Les techniciens analysent, diagnostiquent et documentent les solutions.

Vous travaillez **en binôme**.

Chaque binôme dispose :

* d’un **compte utilisateur (Self-Service)**
* d’un **compte technicien**

---

### Organisation du travail

* Travail en **binôme**
* Les rôles sont **échangés en cours de TP**
* Chaque binôme doit traiter **deux incidents**
* Chaque incident donne lieu à **une procédure écrite**

---

### Partie 1 – Rôle utilisateur (Self-Service)

#### Consignes

1. Connectez-vous à GLPI avec votre **profil Self-Service**
2. Imaginez une **panne réaliste** sur un poste de travail
3. Créez un ticket en respectant les règles suivantes :

   * Choisissez une **catégorie adaptée**
   * Rédigez un **titre clair**
   * Décrivez uniquement les **symptômes**
   * N’indiquez **pas de solution**
   * N’utilisez **pas de jargon technique**

La panne doit concerner :

* un poste de travail
* un logiciel
* un périphérique
* ou le réseau

---

### Partie 2 – Rôle technicien

#### Consignes

1. Basculez sur votre **profil technicien**
2. Prenez en charge le ticket de votre binôme
3. Appliquez une démarche logique :

   * lecture attentive du ticket
   * reformulation du problème
   * questions complémentaires si nécessaire
   * hypothèses de diagnostic
4. Proposez une **solution argumentée**

Vous **ne réalisez pas réellement la manipulation** :
vous expliquez **comment vous feriez**.

---

### Partie 3 – Rédaction de la procédure

Pour chaque incident traité, rédigez une **procédure en Markdown**
(au choix : HedgeDoc ou Obsidian).

#### Structure minimale attendue

```md
# Problème
Description du problème tel que signalé par l’utilisateur

# Symptômes
- …
- …

# Hypothèses
- …
- …

# Diagnostic
Explication du raisonnement suivi

# Solution
Étapes proposées pour résoudre le problème

# Vérification
Comment s’assurer que le problème est résolu
```

---

### Partie 4 – Base de connaissances

1. Créez un **article de base de connaissances** dans GLPI
2. Donnez-lui un **titre explicite**
3. Intégrez la procédure rédigée
4. Associez l’article au ticket si possible

---


# 2. Les composants d’un PC
## 2.1 Comprendre l’architecture d’un poste de travail

### Objectif du chapitre

Comprendre les **principaux composants d’un PC**, leur rôle et leurs interactions afin de :

* mieux diagnostiquer les pannes
* faire des choix matériels cohérents
* comprendre les limites et performances d’un poste

---

### Les composants principaux d’un PC

Un poste de travail est composé de plusieurs éléments essentiels :

* **Boîtier** : protège et organise les composants
* **Carte mère** : relie et fait communiquer tous les composants
* **Processeur (CPU)** : effectue les calculs
* **Mémoire vive (RAM)** : stocke temporairement les données en cours d’utilisation
* **Stockage** : conserve les données (SSD, HDD)
* **Carte graphique (GPU)** : gère l’affichage
* **Alimentation** : fournit l’énergie électrique

Chaque composant a un rôle précis. Une panne ou une limite de performance vient souvent de l’un d’eux.

---

### Carte mère
![](https://1drv.ms/i/c/89597635b984319c/IQDlNF_CjptZSbKqe2FBAR_cAb27fxSDxu8JzwQL19L4oy4?e=dfrQq3)

La carte mère détermine :

* le type de processeur utilisable (socket)
* le type et la quantité de RAM
* les possibilités d’évolution (slots PCIe, ports SATA, M.2)

Elle centralise toutes les connexions internes.


---


>[Diagramme de la carte mère](https://northernmicro.com/spirit-manuals/spirit-q370-as-sff-guide-dutilisateur/Diagramme_de_la_carte_m%C3%A8re.htm)

|Composant|Rôle|Explication pédagogique|Lien pour approfondir|
|---|---|---|---|
|**Socket CPU**|Accueil du processeur|Interface physique entre le CPU et la carte mère. Le socket détermine la compatibilité du processeur.|[Socket (processeur) — Wikipédia](https://fr.wikipedia.org/wiki/Socket_\(processeur\))|
|**Alimentation CPU (8+4 ou 2×8 pins)**|Alimentation du processeur|Fournit l’énergie nécessaire au CPU, surtout en charge. Une alimentation insuffisante provoque des instabilités.|[Brancher un CPU : 4 ou 8 broches - Neoconfig](https://www.neoconfig.com/composant-pc/processeur/brancher-cpu-4-ou-8-broches/#:~:text=Le%20premier%20port%20est%20celui,broches%20pour%20alimenter%20votre%20CPU.)|
|**Étages d’alimentation (VRM)**|Régulation électrique|Convertissent et stabilisent la tension envoyée au CPU. Essentiels pour la stabilité et la durée de vie.|[Module régulateur de tension — Wikipédia](https://fr.wikipedia.org/wiki/Module_r%C3%A9gulateur_de_tension)|
|**Slots RAM**|Mémoire vive|Accueillent les barrettes de RAM utilisées par le système et les applications en cours d’exécution.|[Slot (informatique) — Wikipédia](https://fr.wikipedia.org/wiki/Slot_\(informatique\))|
|**Alimentation 24 pins**|Alimentation principale|Fournit l’énergie à l’ensemble de la carte mère. Indispensable au démarrage du PC.|[Comment choisir un bloc d'alimentation PC](https://www.intel.fr/content/www/fr/fr/gaming/resources/power-supply.html)|
|**Chipset**|Gestion des périphériques|Gère les communications entre le processeur, la mémoire, le stockage et les périphériques.|[Chipset — Wikipédia](https://fr.wikipedia.org/wiki/Chipset)[Intel – Rôle du chipset](https://www.intel.fr/content/www/fr/fr/support/articles/000056878/intel-nuc/intel-nuc-laptop-kits.html#:~:text=Le%20chipset%20d'un%20ordinateur,m%C3%A8re%20peut%20prendre%20en%20charge.)[Northbridge / Southbridge – LeCrabeInfo](https://lecrabeinfo.net/tutoriels/chipset-northbridge-southbridge-mch-ich-plate-forme-centrale-carte-mere/)|
|**Slot PCIe x16**|Carte graphique|Accueille généralement la carte graphique et détermine la bande passante disponible.|[PCI Express — Wikipédia](https://fr.wikipedia.org/wiki/PCI_Express)[Comprendre le PCIe – Infomax Paris](https://infomaxparis.com/fr/blog/comprendre-le-pcie-le-pont-entre-composants-informatiques-et-performances-n149)|
|**SSD NVMe (slot M.2)**|Stockage rapide|Stockage très haute vitesse utilisant le bus PCIe pour des performances élevées.|[NVM Express — Wikipédia](https://fr.wikipedia.org/wiki/NVM_Express)[Qu’est-ce qu’un SSD NVMe – Kingston](https://www.kingston.com/fr/ssd/what-is-nvme-ssd-technology)|
|**Connecteurs SATA**|Stockage classique|Connexion des disques durs et SSD SATA, plus lents que le NVMe.|[Serial ATA — Wikipédia](https://fr.wikipedia.org/wiki/Serial_ATA)|
|**Headers USB (3.0 / 3.1 / 3.2)**|USB façade|Permettent de relier les ports USB du boîtier à la carte mère.|[Connecteur USB — Wikipédia](https://fr.wikipedia.org/wiki/Connecteur_USB)|
|**Backplate Entrées / Sorties**|Connexions externes|Zone regroupant USB, réseau, audio, vidéo pour les périphériques externes.||
|**Contrôleur E/S & monitoring**|Surveillance matérielle|Gère les capteurs de température, la vitesse des ventilateurs et les tensions.||
|**Connectiques de façade**|Boutons et LEDs|Connexion du bouton power, reset, LEDs, USB et audio du boîtier.||

---

### Processeur (CPU)

Le processeur se caractérise notamment par :

* le nombre de cœurs / threads
* la fréquence
* la consommation (TDP)
* la présence ou non d’un GPU intégré

Le CPU influence fortement les performances globales du PC.

---

### Mémoire vive (RAM)

La RAM :

* est utilisée par le système et les applications
* est volatile (perdue à l’arrêt du PC)
* existe en différentes générations (DDR)

Une quantité insuffisante de RAM peut rendre un PC lent, même avec un bon processeur.

---

### Stockage

On distingue principalement :

* **HDD** : grande capacité, lent
* **SSD SATA** : rapide, bon compromis
* **SSD NVMe** : très rapide, plus coûteux

Le stockage impacte fortement :

* le démarrage du système
* le lancement des applications

---

### Carte graphique (GPU)

La carte graphique peut être :

* intégrée au processeur
* dédiée (carte graphique séparée)

Elle est indispensable pour :

* l’affichage
* les applications graphiques
* le jeu ou la vidéo

---

### Alimentation

L’alimentation doit :

* fournir une puissance suffisante
* être adaptée aux composants
* être fiable

Une alimentation inadaptée peut provoquer :

* instabilités
* redémarrages
* pannes matérielles

---

### Ports, bus et connectiques

Les composants communiquent via :

* des **bus** (PCIe, SATA, USB)
* des **ports** (USB, HDMI, DisplayPort, etc.)

Comprendre ces liaisons aide à :

* identifier les incompatibilités
* comprendre certaines pannes matérielles

---

### A retenir

* Un PC est un ensemble de composants interdépendants
* La carte mère est l’élément central
* Le CPU, la RAM et le stockage influencent directement les performances
* Le choix du matériel dépend toujours de l’usage
* Comprendre l’architecture facilite le diagnostic des pannes

---
## 2.2 Le processeur (CPU)

---


### Rôle du processeur

Le **processeur (CPU)** est le composant central du PC.
Il exécute les instructions des programmes, effectue les calculs et coordonne le fonctionnement des autres composants.

Sans CPU fonctionnel, le PC ne démarre pas.

> [Processeur — Wikipédia](https://fr.wikipedia.org/wiki/Processeur)

---

### Choisir un CPU, c’est fixer

Lors du choix d’un processeur, plusieurs paramètres sont déterminants :

* **Le socket**
  Il définit la compatibilité avec la carte mère.
  Un CPU ne peut fonctionner que sur une carte mère disposant du même socket.

* **Le nombre de cœurs et de threads**

  * Les cœurs exécutent les tâches
  * Les threads permettent de traiter plusieurs instructions par cœur
    Plus il y en a, plus le CPU est à l’aise en multitâche.

* **La fréquence (GHz)**
  Elle représente la vitesse de traitement d’un cœur.
  Une fréquence élevée améliore les performances sur les tâches simples et ponctuelles.

* **Le GPU intégré (ou non)**

  * Présent : affichage sans carte graphique dédiée
  * Absent : carte graphique obligatoire
    Critère important pour la bureautique ou les PC à petit budget.

* **Le nombre de lignes PCIe**
  Détermine la capacité du CPU à communiquer avec :

  * carte graphique
  * SSD NVMe
  * cartes d’extension

* **La consommation (TDP)**
  Indique la dissipation thermique maximale.
  Impacte :

  * le refroidissement
  * la consommation électrique
  * le bruit

* **La mémoire supportée**
  Type de RAM (DDR4 / DDR5), fréquence maximale, quantité supportée.

---

### CPU Intel – principes de gamme

Les processeurs Intel sont organisés par familles :

* **Core i3 / i5 / i7 / i9**
  Gamme desktop et mobile, de l’entrée au haut de gamme.

* **Core Ultra (Ultra 5 / 7 / 9)**
  Nouvelle génération avec :

  * architecture modulaire
  * NPU pour les tâches liées à l’IA

>[Processeurs Intel® Core™ : découvrez la dernière génération de...](https://www.intel.fr/content/www/fr/fr/products/details/processors/core.html)

#### Suffixes courants

* **K** : processeur déverrouillé (overclocking)
* **T** : basse consommation (TDP réduit)
* **F** : pas de GPU intégré
* **U / P / H / HX** : versions mobiles

  * U : très basse consommation
  * P : performance équilibrée
  * H / HX : haute performance

---

### CPU AMD – principes de gamme

Les processeurs AMD sont organisés par familles :

* **Ryzen 3 / 5 / 7 / 9**
  Gamme desktop et mobile, de l’entrée au haut de gamme.

* **Ryzen AI**
  Génération récente intégrant :

  * architecture Zen moderne
  * NPU pour l’IA

> [Spécifications des processeurs](https://www.amd.com/fr/products/specifications/processors.html)

#### Suffixes courants

* **X** : performances élevées (fréquences plus hautes)
* **3D** : cache L3 massif (optimisé jeu)
* **G** : GPU intégré (APU)
* **U / HS / HX** : versions mobiles

  * U : basse consommation
  * HS : performance optimisée
  * HX : performances maximales

---

### Lien CPU ↔ usages

* **Bureautique**
  Peu de cœurs, GPU intégré suffisant

* **Multitâche / développement**
  Plus de cœurs et de threads

* **Gaming**
  Bon compromis fréquence + cache
  GPU dédié prioritaire

* **Stations de travail**
  Nombreux cœurs, forte consommation, refroidissement adapté

---

### Symptômes courants liés au CPU

* PC lent malgré un SSD → CPU saturé
* Ventilateurs bruyants → TDP élevé ou refroidissement inadapté
* Redémarrages en charge → problème thermique ou d’alimentation CPU
* Écran noir au démarrage → CPU incompatible ou absent de GPU

---

### A retenir

* Le CPU est le cœur logique du PC
* Le socket conditionne toute la plateforme
* Cœurs, fréquence et cache définissent les performances
* Le TDP impacte directement refroidissement et stabilité
* Le choix du CPU dépend toujours de l’usage, jamais uniquement du prix

---

## 2.3 La mémoire vive (RAM)

---

### Rôle de la mémoire vive

La **mémoire vive (RAM)** est l’espace de travail du processeur.
Elle stocke temporairement :

* les programmes en cours d’exécution
* les données utilisées immédiatement par le CPU

La RAM est **volatile** : son contenu est perdu à l’arrêt du PC.

Sans RAM suffisante, même un bon processeur devient inefficace.

> [La mémoire RAM : qu'est-ce que c'est et à quoi cela sert ? - malekal.com](https://www.malekal.com/memoire-ram-ordinateur-qu-est-ce-que-c-est/)
> [Comprendre la Mémoire Vive : Qu’est-ce que la RAM et Pourquoi est-elle Essentielle ?](https://salon-iot-mtom.com/comprendre-la-memoire-vive-quest-ce-que-la-ram-et-pourquoi-est-elle-essentielle/)

---

### Principe de fonctionnement (DDR)

La RAM moderne utilise le principe **DDR – Double Data Rate** :

* deux transferts de données par cycle d’horloge
* un transfert sur le front montant
* un transfert sur le front descendant

Conséquence :

* une fréquence annoncée élevée
* mais une fréquence réelle divisée par deux

Exemple :

* DDR5-6000 → fréquence réelle 3000 MHz

---

### Évolution des générations DDR

Les générations de RAM se distinguent par :

* **Le débit** (MT/s)
* **La tension**
* **Les performances globales**

De DRAM à DDR5 :

* le débit augmente fortement
* la tension diminue
* l’efficacité énergétique progresse

Chaque génération est **incompatible physiquement** avec les autres
(encoche différente).

---

### RAM et communication avec le CPU

Le processeur communique avec la RAM via des **bus mémoire**.

* **Single Channel**
  * un bus 64 bits
  * performances de base

* **Dual Channel**
  * deux bus 64 bits
  * bande passante doublée

Conséquence pratique :

* 2 barrettes identiques → meilleures performances
* 1 seule barrette → performances réduites

---

### Capacité de la RAM

La capacité correspond à la quantité de données stockables simultanément.

Repères courants :

* 8 Go : usage léger
* 16 Go : usage standard (recommandé)
* 32 Go et + : usages avancés

Manque de RAM :

* utilisation du disque (swap)
* ralentissements visibles
* bruit disque accru

---

### Fréquence de la RAM

La fréquence influe sur :

* la vitesse d’échange CPU ↔ RAM
* certaines applications sensibles (jeux, calcul)

Attention :

* la fréquence maximale dépend :

  * du CPU
  * de la carte mère

Une RAM trop rapide peut être **bridée** si la plateforme ne la supporte pas.

---

### La latence (CAS Latency – CL)

La **latence** représente le temps d’attente avant que la donnée soit accessible.

Formule de calcul :

```
Latence (ns) = CL / fréquence réelle (MHz) × 1000
```

À retenir :

* fréquence élevée ≠ latence faible
* un bon compromis fréquence / CL est préférable

Exemple :

* DDR5-6000 CL36

  * plus rapide qu’une DDR5-4800 CL40
  * mais pas forcément deux fois plus performante

---

### Symptômes liés à la RAM

* PC lent avec disque très actif → manque de RAM
* Applications qui se ferment → saturation mémoire
* Écran bleu aléatoire → barrette défectueuse
* PC ne démarre pas → RAM incompatible ou mal installée

---

### Bonnes pratiques

* Toujours privilégier le **dual channel**
* Vérifier la compatibilité CPU / carte mère / RAM
* Adapter la capacité à l’usage réel
* Ne pas se focaliser uniquement sur les chiffres marketing

---

### A retenir

* La RAM est l’espace de travail du processeur
* Plus de RAM ≠ toujours plus de performance
* Dual channel améliore fortement les performances
* Fréquence et latence doivent être équilibrées
* Une RAM inadaptée provoque lenteurs et instabilités

---
## 2.4 L’alimentation (PSU)

---

### Rôle de l’alimentation

L’**alimentation (PSU)** fournit l’énergie électrique à l’ensemble des composants du PC.
Elle convertit le courant secteur en tensions utilisables et **stables**.

Une alimentation de mauvaise qualité peut provoquer :

* instabilités
* redémarrages
* pannes matérielles

---

### Puissance (W)

La puissance indique la **quantité d’énergie disponible**.

À retenir :

* elle doit être suffisante pour tous les composants
* une marge est nécessaire pour la stabilité

Une alimentation trop faible entraîne :

* coupures en charge
* redémarrages inopinés

---

### Rendement – norme 80 PLUS

La certification **80 PLUS** indique le rendement énergétique :

* Bronze
* Silver
* Gold
* Platinum
* Titanium

Plus le rendement est élevé :

* moins il y a de pertes
* moins l’alimentation chauffe
* plus elle est stable et silencieuse

---

### Types d’alimentation

* **Non modulaire** : tous les câbles sont fixes
* **Semi-modulaire** : câbles principaux fixes
* **Modulaire** : tous les câbles sont amovibles

La modularité facilite :

* le montage
* le refroidissement
* la maintenance

---

### Connecteurs principaux

* **24 pins** : alimentation de la carte mère
* **CPU 4/8 pins** : alimentation du processeur
* **PCIe** : carte graphique
* **SATA** : stockage

Une mauvaise connexion peut empêcher le démarrage du PC.

---

### Symptômes liés à l’alimentation

* PC qui ne démarre pas
* Redémarrages aléatoires
* Ventilateurs qui s’arrêtent brutalement
* Instabilité lors de fortes charges

---

### A retenir

* L’alimentation est un composant critique
* La puissance doit être adaptée à la configuration
* La certification 80 PLUS est un bon indicateur de qualité
* Une alimentation fiable protège les autres composants

---

## 2.5 Les lignes PCI Express (PCIe)
---

### Rôle du PCI Express

Le **PCI Express (PCIe)** est le bus utilisé pour connecter les composants rapides au processeur, notamment :

* carte graphique
* SSD NVMe
* cartes d’extension (USB, réseau, RAID…)

Il assure la **communication haut débit** entre le CPU et les périphériques.

>[PCI Express — Wikipédia](https://fr.wikipedia.org/wiki/PCI_Express)

---

### Principe des lignes PCIe

Le PCIe fonctionne par **lignes** (lanes).

* Une ligne PCIe = un canal de communication
* Plus il y a de lignes, plus le débit est élevé

On note les emplacements :

* **x1**
* **x4**
* **x8**
* **x16**

Un slot x16 possède 16 lignes PCIe.

![](https://hedgedoc.dawan.fr/uploads/1035b7b5-6132-4a73-bf96-056004395593.png)


---

### Versions PCIe

Chaque génération augmente le débit par ligne :

|Version|Année de lancement|x1|x2|x4|x8|x16|
|---|---|---|---|---|---|---|
|**PCIe 1.0 / 1.1**|2003|250 Mo/s|500 Mo/s|1 Go/s|2 Go/s|4 Go/s|
|**PCIe 2.0**|2007|500 Mo/s|1 Go/s|2 Go/s|4 Go/s|8 Go/s|
|**PCIe 3.0**|2010|985 Mo/s|1,969 Go/s|3,938 Go/s|7,877 Go/s|15,754 Go/s|
|**PCIe 4.0**|2017|1,969 Go/s|3,938 Go/s|7,877 Go/s|15,754 Go/s|31,508 Go/s|
|**PCIe 5.0**|2019|3,938 Go/s|7,877 Go/s|15,754 Go/s|31,508 Go/s|63,015 Go/s|
|**PCIe 6.0**|2022|7,563 Go/s|15,125 Go/s|30,25 Go/s|60,5 Go/s|121 Go/s|
|**PCIe 7.0**|2025|15,125 Go/s|30,25 Go/s|60,5 Go/s|121 Go/s|242 Go/s|

À retenir :

* une nouvelle version double environ le débit
* la rétrocompatibilité est assurée
  (une carte PCIe 3.0 fonctionne dans un slot PCIe 4.0)

---

### Lignes PCIe et CPU

Les lignes PCIe proviennent de :

* **le processeur** (lignes rapides, prioritaires)
* **le chipset** (lignes partagées)

Conséquence :

* la carte graphique utilise généralement des lignes CPU
* les autres périphériques passent souvent par le chipset

---

### Partage des lignes PCIe

Sur certaines cartes mères :

* un slot x16 peut fonctionner en x8
* les lignes sont partagées entre plusieurs slots ou SSD NVMe

Exemple :

* carte graphique x8
* SSD NVMe utilisant des lignes CPU

Ce partage peut **réduire les performances** selon l’usage.

---

### Compatibilité mécanique et électrique

* Une carte PCIe x1 peut être installée dans un slot x4, x8 ou x16
* Une carte x16 peut fonctionner dans un slot x16 câblé en x4

La **taille du slot** ne garantit pas toujours le **nombre réel de lignes actives**.

---

### Usages courants

* **x16** : carte graphique
* **x4** : SSD NVMe, carte RAID
* **x1** : carte réseau, USB, son

---

### Symptômes liés aux lignes PCIe

* performances GPU inférieures aux attentes
* SSD NVMe moins rapide que prévu
* carte non détectée ou bridée
* conflits lors de l’ajout de nouveaux périphériques

---

### A retenir

* Le PCIe est un bus de communication haut débit
* Plus de lignes = plus de bande passante
* Les lignes peuvent être partagées
* Le CPU fournit les lignes les plus rapides
* Le format du slot ne reflète pas toujours le câblage réel

## 2.6 La carte graphique

### Qu’est-ce qu’une carte graphique ?

Une **carte graphique (GPU)** est un composant chargé de produire l’affichage à l’écran.

Elle s’occupe de :

* l’affichage du bureau,
* l’accélération graphique des applications,
* le calcul des images en 2D et 3D,
* certaines tâches de calcul intensif (vidéo, IA, rendu).

---

### Carte graphique intégrée vs dédiée

* **GPU intégré** :

  * intégré au processeur,
  * performances limitées,
  * suffisant pour la bureautique.

* **GPU dédié** :

  * carte indépendante,
  * mémoire vidéo dédiée (VRAM),
  * nécessaire pour le jeu, la 3D, le montage, le calcul.

---

### NVIDIA – nomenclature

|Élément|Position|Signification|Exemples|
|---|---|---|---|
|**Préfixe**|début du nom|Série et technologies prises en charge|**RTX** (ray tracing, DLSS) / **GTX** (ancienne gamme)|
|**Génération**|premiers chiffres|Architecture et génération|**50** = série 50xx|
|**Gamme de performance**|deux chiffres suivants|Niveau de performance dans la génération|**90** = ultra-haut de gamme / **60** = milieu de gamme|
|**Suffixe**|fin du nom|Variante du modèle|**Ti** (plus performant), **SUPER** (intermédiaire)|

> [Cartes graphiques GeForce | NVIDIA](https://www.nvidia.com/fr-fr/geforce/graphics-cards/)

---

### AMD – nomenclature

|Élément|Position|Signification|Exemples|
|---|---|---|---|
|**Préfixe**|début du nom|Série grand public influencée par l’architecture RDNA|**RX**|
|**Génération**|premier chiffre|Architecture et génération|**9** = série 9000 (RDNA 4)|
|**Gamme de performance**|trois derniers chiffres|Niveau de performance dans la génération|**900** = très haut de gamme / **600** = milieu de gamme|
|**Suffixe**|fin du nom|Variante du modèle|**XT** (version améliorée), **XTX** (plus puissante)|

> [Radeon — Wikipédia](https://fr.wikipedia.org/wiki/Radeon)
---

### Intel – nomenclature 

|Élément|Position|Signification|Exemples|
|---|---|---|---|
|**Préfixe** géneration |début du nom|Série de GPU dédiée|**B** (Battlemage)|
|**Gamme**|chiffre suivant|Orientation performance|**3** = entrée / **7** = performance|
|**SKU**|chiffres suivants|Indice interne|**B580**|
|**VRAM**|taille mémoire|Quantité de mémoire vidéo|**16 Go**|

> [Intel Arc — Wikipédia](https://fr.wikipedia.org/wiki/Intel_Arc)

### GPUs chinois – contexte rapide

Les fabricants chinois de GPU gagnent en maturité, mais restent encore derrière les leaders historiques : ils progressent notamment dans l’IA et le calcul embarqué, et plusieurs marques commencent à apparaître à l’international. 

> [Cette carte graphique chinoise marque une étape cruciale pour rattrapper Nvidia — Frandroid](https://www.frandroid.com/produits-android/hardware/cartes-graphiques/2632827_cette-carte-graphique-chinoise-marque-une-etape-cruciale-pour-ratrapper-nvidia)

---


### À retenir

- La **structure des noms** permet d’identifier rapidement génération et performance.
- Chaque constructeur a sa propre logique de nomenclature.
- Les GPU chinois progressent mais ne dominent pas encore le marché.
- La carte graphique gère l’affichage et le calcul graphique.
- GPU intégré = usage simple.
- GPU dédié = performances élevées.

---

# 3. BIOS / UEFI et démarrage du PC

## 3.1 Comprendre le démarrage d’un ordinateur

### Objectif du chapitre

Comprendre **ce qui se passe avant Windows**, savoir **où un démarrage peut échouer** et **comment raisonner** face à un problème de boot.

---

### Le rôle du BIOS / UEFI

Le **BIOS** ou **UEFI** est le premier programme exécuté lorsque le PC démarre.

Il permet de :

* initialiser le matériel (CPU, RAM, carte graphique, stockage)
* vérifier que les composants sont fonctionnels
* lancer le système d’exploitation

Sans BIOS/UEFI fonctionnel, le PC **ne peut pas démarrer**.

---

### BIOS et UEFI (différence simple)

* **BIOS** : ancien système, très basique
![](https://www.szapphone.com/wp-content/uploads/2024/05/BIOS-mode-1024x636.webp)


* **UEFI** : système moderne, plus rapide et plus sécurisé

![](https://www.easeus.fr/images/en/screenshot/partition-manager/uefi-setup-screen.jpg)

Aujourd’hui, les PC utilisent presque exclusivement l’**UEFI**.

---

### La séquence de démarrage (boot)

Au démarrage, le PC suit toujours le même chemin logique :

1. Mise sous tension
2. Initialisation du matériel
3. Test de base (POST)
4. Détection des disques
5. Recherche d’un système bootable
6. Lancement du système d’exploitation

---

### Le POST (Power-On Self Test)

Le **POST** est un test rapide effectué au démarrage pour vérifier :

* la présence du processeur
* la mémoire vive
* la carte graphique

Si le POST échoue :

* le PC peut émettre des bips / leds
* l’écran peut rester noir
* le démarrage s’arrête immédiatement

> [Power-on self-test (informatique) — Wikipédia](https://fr.wikipedia.org/wiki/Power-on_self-test_\(informatique\))

---

### Ordre de démarrage (Boot Order)

Le BIOS/UEFI contient une **liste de périphériques de démarrage** :

* disque interne
* clé USB
* lecteur réseau

Le PC teste ces périphériques **dans l’ordre défini**.

Un mauvais ordre de démarrage peut empêcher :

* l’installation d’un OS
* le démarrage du système



---

### Accès au BIOS / UEFI

L’accès se fait au démarrage via une touche spécifique :

* Echap
* Suppr
* F2
* F10
* F12
* etc

La touche dépend du constructeur.

---

### Paramètres essentiels à connaître

Sans tout modifier, un technicien doit savoir :

* vérifier si le disque est détecté
* consulter l’ordre de démarrage
* identifier le mode de démarrage (UEFI / Legacy)
* activer ou désactiver le Secure Boot si nécessaire

---

### Problèmes de démarrage courants

Quelques symptômes typiques :

* **Écran noir au démarrage**
* **Message “No boot device found”**
* **Retour systématique dans le BIOS**
* **Installation de l’OS impossible**

* POST
* détection disque
* bootloader

---

### Méthode de diagnostic à appliquer

Face à un problème de démarrage :

1. Observer le symptôme
2. Identifier l’étape du démarrage concernée
3. Vérifier les paramètres simples
4. Proposer une solution logique

On **n’essaye pas au hasard**.

---

### A retenir

* Le BIOS / UEFI est indispensable au démarrage
* Le démarrage suit toujours une séquence logique
* Un symptôme correspond à une étape précise
* On vérifie avant de modifier
* La méthode est plus importante que le menu exact


## 3.2 TP3 — BIOS, UEFI et démarrage des systèmes

### Objectif

Découvrir par l’expérimentation les différences entre **BIOS** et **UEFI**, et comprendre les contraintes modernes de démarrage, notamment pour **Windows 11**.

---


### 1. Mise en situation

Vous disposez d’un hyperviseur et de deux ISO :

* Windows 11
* Une distribution Linux de votre choix

Votre objectif est d’installer :

* une machine virtuelle **Windows**
* une machine virtuelle **Linux**

Les paramètres de démarrage ne sont **pas identiques** pour les deux systèmes.

---

### 2. Expérimentation

Réaliser les installations nécessaires jusqu’à obtenir un système fonctionnel.

Vous êtes encouragés à :

* tester différents réglages
* observer les messages affichés
* noter les échecs autant que les réussites

---

### 3. Analyse

À partir de vos tests, identifier :

* le mode de démarrage utilisé pour chaque système
* les contraintes imposées par l’un et pas par l’autre
* les différences visibles lors de l’installation et du démarrage

---

### Questions

Répondre dans une **note Markdown** :

1. Quels réglages de démarrage ont été nécessaires pour installer Windows 11 ?
2. Les mêmes réglages fonctionnent-ils pour Linux ?
3. Quels éléments vous semblent imposés par le système d’exploitation ?
4. Quel mode de démarrage vous paraît le plus adapté aujourd’hui ?
5. Que se passerait-il si ces réglages étaient appliqués à un PC inadapté ?

---

### Rendu attendu

* Une note Markdown structurée
* Des phrases complètes
* Des observations personnelles issues de vos tests
* Ajouter à la fin la note dans la base de connaissance GLPI

---

# 4. Stockage et systèmes

## 4.1 Différencier technologie, format et bus

### Notion essentielle

Un disque de stockage se décrit **toujours** avec **trois éléments distincts** :

* **Technologie**
* **Format**
* **Bus (interface)**

Ces notions sont **indépendantes** les unes des autres.

---

### Technologie : comment les données sont stockées

La technologie décrit la manière dont les données sont enregistrées.

#### HDD (disque dur mécanique)

  * plateaux en rotation
  * plus lent
  * sensible aux chocs

> [Disque dur — Wikipédia](https://fr.wikipedia.org/wiki/Disque_dur)

#### **SSD (mémoire flash)**

  * aucune pièce mécanique
  * plus rapide
  * silencieux et plus fiable

> [SSD — Wikipédia](https://fr.wikipedia.org/wiki/SSD)
---

### Format : forme physique du disque

- Le format correspond à la **taille et la forme** du support.
- Le format **n’indique pas la vitesse** du disque.
### 3,5 pouces

  * surtout HDD
  * PC fixes, serveurs


### 2,5 pouces

  * HDD ou SSD
  * PC portables et fixes

#### M.2

  * SSD uniquement
  * directement branché sur la carte mère

---

### Bus / interface : moyen de communication

Le bus correspond à la façon dont le disque communique avec le système.

* **SATA**

  * bus standard
  * débit limité
  * utilisé par HDD et SSD SATA

* **PCIe / NVMe**

  * bus très rapide
  * faible latence
  * utilisé par les SSD NVMe

Le bus a un **impact direct sur les performances**.

---

### Exemples de combinaisons courantes

* HDD **3,5" + SATA**
* SSD **2,5" + SATA**
* SSD **M.2 + SATA**
* SSD **M.2 + PCIe/NVMe**

Attention :
**M.2 ne signifie pas forcément NVMe**

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/k3SeOaNjWCg?si=2UDg7mfLTXrldIhi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### À retenir

* Technologie = manière de stocker les données.
* Format = taille et forme du disque.
* Bus = vitesse de communication.
* Les performances dépendent surtout du **bus**.
* Toujours analyser un disque avec ces **3 critères séparés**.


## 4.2 Le stockage en milieu professionnel

### Contexte professionnel

En milieu professionnel, le stockage doit répondre à des besoins spécifiques :

* **centralisation des données**
* **partage entre plusieurs utilisateurs**
* **fiabilité et continuité de service**
* **sécurité et performances**

On utilise donc des solutions dédiées, différentes du simple disque local.

<iframe width="560" height="315" src="https://www.youtube.com/embed/37Qhsz6qojs?si=wUoyYqDa7gkpNjhR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### NAS (Network Attached Storage)

Un **NAS** est un serveur de stockage connecté au réseau.

* accessible via le réseau local,
* partage de fichiers entre utilisateurs,
* administration simplifiée,
* très utilisé en PME.

👉 Solution orientée **partage de fichiers**.

---

### SAN (Storage Area Network)

<iframe width="560" height="315" src="https://www.youtube.com/embed/m-_RPOcU19c?si=kC0KZ9kaRZRCeP_Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Un **SAN** est un réseau dédié au stockage.

* accès au stockage en mode bloc,
* performances élevées,
* utilisé avec des serveurs et des hyperviseurs,
* infrastructure plus complexe et coûteuse.

👉 Solution orientée **hautes performances et virtualisation**.

> [DAS, SAN et NAS pour les débutants - Stockage informatique](https://www.it-connect.fr/les-das-san-nas-et-le-stockage-cloud-pour-les-debutants/)

---

### SCSI
![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/SCSI_25-50.jpg/250px-SCSI_25-50.jpg)
**SCSI** est une technologie de communication pour les périphériques de stockage.

* historiquement utilisée en environnement serveur,
* aujourd’hui remplacée ou encapsulée par des variantes modernes,
* réputée pour sa stabilité et sa gestion des charges élevées.

👉 Technologie historiquement liée au **stockage professionnel**.

---

### RAID

<iframe width="560" height="315" src="https://www.youtube.com/embed/WqGeTOt6A0Q?si=ik18LnoDE_PIGrfS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Le **RAID** combine plusieurs disques pour former un seul ensemble logique.

Objectifs possibles :

* augmenter les performances,
* améliorer la tolérance aux pannes,
* sécuriser les données.

Le RAID est très utilisé :

* dans les NAS,
* dans les serveurs,
* dans les environnements professionnels.

> [RAID (informatique) — Wikipédia](https://fr.wikipedia.org/wiki/RAID_\(informatique\))

---

### À retenir

* Le stockage professionnel privilégie fiabilité et disponibilité.
* NAS = partage de fichiers sur le réseau.
* SAN = stockage haute performance pour serveurs.
* SCSI est une technologie historique du monde serveur.
* Le RAID améliore performances et/ou tolérance aux pannes.

## 4.3 TP 4 – Stockage partitionnement et analyse

### Objectif du TP

Comprendre concrètement comment un disque devient utilisable par un système.

À la fin du TP, vous devez savoir :

* identifier un disque,
* le partitionner,
* le formater,
* le rendre accessible,
* expliquer ce que vous avez fait.

---

### Contexte du TP

Vous travaillez sur une **machine virtuelle Windows 11**.
Un **disque virtuel supplémentaire** a été ajouté dans VirtualBox.

Ce disque est :

* neuf,
* vide,
* non utilisable au départ.

---

### Travail demandé

### Étape 1 – Identifier le disque

Depuis Windows :

* ouvrir l’outil de gestion des disques,
* repérer le **nouveau disque** ajouté,
* vérifier qu’il n’est pas initialisé.

---

### Étape 2 – Initialiser et partitionner le disque

Sur le disque ajouté :

* initialiser le disque,
* choisir le type de table de partition,
* créer **une partition unique**.


---

### Étape 3 – Formater la partition

Formater la partition créée :

* choisir un système de fichiers adapté,
* donner un nom au volume.

---

### Étape 4 – Rendre le disque accessible

Rendre la partition accessible :

* vérifier qu’une lettre de lecteur est attribuée,
* accéder au volume depuis l’explorateur.

---

### Étape 5 – Analyse et compréhension

Répondre dans votre note aux questions suivantes :

* Pourquoi le disque n’était pas utilisable au départ ?
* À quoi servent le partitionnement et le formatage ?
* Que se passerait-il si le disque n’était pas formaté ?

---

### Rendu attendu

Rendre une **note en Markdown** dans la base de connaissance avec :

* un titre clair,
* les étapes réalisées,
* des captures d’écran si nécessaire,
* un court paragraphe d’analyse.

### Pour aller plus loin (fin de TP)

Pour les élèves ayant terminé en avance :

- installer **Debian 13** dans une nouvelle machine virtuelle,
- ajouter un **second disque virtuel**,
- reproduire exactement la même logique :
    - identification du disque,
    - partitionnement,
    - formatage,
	- rendu accessible au système.

# 5. Périphériques, réseau et impression

## 5.1 Installation des périphériques (vue générale)

### Principe général

Un **périphérique** est un matériel connecté à un ordinateur pour étendre ses fonctionnalités
(clavier, souris, écran, imprimante, carte réseau, etc.).

Le principe d’installation est généralement le même :

1. détection du matériel,
2. chargement d’un **pilote**,
3. périphérique utilisable.

---

### Types de périphériques courants

* **USB** : clavier, souris, stockage, imprimantes.
* **Cartes internes** : carte réseau, carte graphique.
* **Périphériques réseau** : imprimantes, NAS.

---

### Rôle des pilotes

Un **pilote** permet au système d’exploitation de communiquer avec le matériel.

* pilote générique : souvent suffisant,
* pilote constructeur : nécessaire pour les fonctions avancées.

Sans pilote :

* le périphérique peut être non reconnu,
* ou fonctionner de manière incomplète.

---

### Problèmes simples rencontrés en support

* périphérique non détecté,
* périphérique détecté mais non fonctionnel,
* périphérique qui se déconnecte.

Causes fréquentes :

* câble ou port défectueux,
* pilote absent ou incorrect,
* matériel défaillant.

---

### Logique de diagnostic

Toujours appliquer une méthode simple :

* tester sur un autre port ou un autre poste,
* vérifier les pilotes,
* isoler la cause matérielle ou logicielle.

---

### À retenir

* Tous les périphériques suivent une logique d’installation similaire.
* Les pilotes sont indispensables.
* La majorité des pannes sont simples et matérielles.
* Une méthode de diagnostic claire évite les erreurs.

## 5.2 Écrans et affichage

### Rôle de l’écran

L’**écran** est un **périphérique de sortie** essentiel. Il permet :

* d’afficher les interfaces utilisateurs,
* de visualiser les vidéos, graphiques, documents,
* de travailler ou jouer confortablement selon le matériel utilisé.

>[Écran d'ordinateur — Wikipédia](https://fr.wikipedia.org/wiki/%C3%89cran_d%27ordinateur)

---

### Critères de choix

#### Résolution

* HD (720p), FHD (1080p), QHD (1440p), 4K
* Plus la résolution est élevée, plus l’affichage est net.

#### Taille (diagonale en pouces)

* 22″ à 24″ : usage classique
* 27″ à 32″ : confort, multitâche, graphisme
* > 32″ : spécifique (gaming ou présentation)

#### Technologie de dalle

* **TN** : rapide, faible coût
* **IPS** : bon rendu couleurs, large angle de vue
* **VA** : bon contraste
* **OLED** : contraste très élevé, haut de gamme

> [Les différentes technologies d'affichage d'un écran PC | Guide d'achat Materiel.net](https://www.materiel.net/guide-achat/g10-les-ecrans-pc/5297/)

#### Fréquence de rafraîchissement

* 60 Hz : bureautique
* 120 Hz et + : jeux et animation fluide

#### Temps de réponse

* 1 à 5 ms recommandé pour jeux ou vidéo rapide

---

### Connectiques vidéo

| Connectique     | Signal           | Résolution supportée          |
| --------------- | ---------------- | ----------------------------- |
| **VGA**         | Analogique       | 720p/1080p (ancien)           |
| **DVI**         | Numérique        | 1080p voire QHD               |
| **HDMI**        | Numérique        | 1080p à 4K (selon version)    |
| **DisplayPort** | Numérique        | QHD à 8K, multi-écrans        |
| **USB-C**       | Numérique + alim | 1080p à 4K (selon équipement) |

> ⚠️ Vérifie la version du câble (HDMI 1.4 / 2.0 / 2.1…) pour assurer les performances.
>[High-Definition Multimedia Interface — Wikipédia](https://fr.wikipedia.org/wiki/High-Definition_Multimedia_Interface)
> [DisplayPort — Wikipédia](https://fr.wikipedia.org/wiki/DisplayPort)

<iframe width="560" height="315" src="https://www.youtube.com/embed/LLZLlgfGGrE?si=IZG68nj3VsPBh5mT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---


### Problèmes fréquents

* Résolution incorrecte → vérifier pilotes graphiques
* Aucun signal → vérifier source d’entrée et câble
* Rafraîchissement flou → régler fréquence dans les paramètres d’affichage
* Connecteur endommagé → changement câble ou port

---

### À retenir

* L’écran est un périphérique de sortie critique pour l’expérience utilisateur.
* Son choix dépend de la taille, de la résolution, de la dalle et des usages.
* Les connectiques doivent être adaptées à la carte graphique ou carte mère.
* HDMI et DisplayPort sont les standards actuels les plus polyvalents.

---

## 5.3 Imprimantes

---

### Types d’imprimantes

| Type              | Caractéristiques                        | Usage typique            |
| ----------------- | --------------------------------------- | ------------------------ |
| **Jet d’encre**   | Bon marché, cartouches, qualité couleur | Bureautique domestique   |
| **Laser**         | Rapide, toner, coût par page réduit     | Entreprise, volume élevé |
| **Multifonction** | Intègre scanner/copieur                 | Usage polyvalent         |
| **Thermique**     | Spécifique, étiquettes, tickets         | Logistique, commerce     |

---

### Modes de connexion

* **USB** : direct, simple à installer
* **Réseau (Ethernet/Wi-Fi)** : accessible à plusieurs postes
* **Bluetooth / Cloud** : usage mobile (moins courant en entreprise)

---

### Problèmes fréquents

| Symptôme                         | Cause possible                | Solution rapide                  |
| -------------------------------- | ----------------------------- | -------------------------------- |
| Imprimante non détectée          | Mauvais câble / pilote absent | Vérifier câble et pilotes        |
| Documents bloqués                | File d’attente saturée        | Vider la file via le panneau     |
| « Hors connexion »               | Mauvaise IP / Wi-Fi instable  | Redémarrer l’imprimante          |
| Imprimante connectée mais muette | Mauvais pilote ou port        | Réinstaller avec pilote officiel |

---

### À retenir

* Il existe plusieurs types d’imprimantes selon l’usage.
* Windows détecte souvent les imprimantes automatiquement.
* En entreprise, les imprimantes sont souvent **réseau**.
* Les pilotes sont essentiels pour éviter les pannes.
* Une imprimante peut être simulée via un pilote générique.

---

## 5.4 L’USB – Normes, connectiques et débits

---

### Rôle de l’USB

L’**USB (Universal Serial Bus)** est le **standard principal** pour connecter des périphériques** à un ordinateur :
clavier, souris, imprimante, webcam, stockage, smartphone, etc.

Il permet :

* l’**alimentation** de périphériques,
* le **transfert de données** (fichiers, vidéo, etc.),
* un fonctionnement **Plug & Play**.

---

### Évolution des normes USB et Thunderbolt

| Nom complet         | Débit max | Connecteurs courants      | Compatibilité                                    | Année |
| ------------------- | --------- | ------------------------- | ------------------------------------------------ | ----- |
| **USB 1.1**         | 12 Mbps   | USB-A, USB-B              | Obsolète                                         | 1998  |
| **USB 2.0**         | 480 Mbps  | USB-A, USB-B, Mini, Micro | Très répandu encore aujourd’hui                  | 2000  |
| **USB 3.0**         | 5 Gbps    | USB-A (bleu), USB-B 3.0   | Rétrocompatible USB 2.0                          | 2008  |
| **USB 3.1 Gen 1**   | 5 Gbps    | USB-A, USB-C              | Renommage de l’USB 3.0                           | 2013  |
| **USB 3.1 Gen 2**   | 10 Gbps   | USB-A, USB-C              | Plus rapide que Gen 1                            | 2015  |
| **USB 3.2 Gen 2x2** | 20 Gbps   | USB-C uniquement          | Haut débit                                       | 2017  |
| **USB4**            | 40 Gbps   | USB-C                     | Compatible Thunderbolt 3                         | 2019  |
| **USB4 v2.0**       | 80 Gbps   | USB-C                     | Ultra-haut débit (rare)                          | 2022  |
| **Thunderbolt 3**   | 40 Gbps   | USB-C                     | Compatible USB4, PCIe, DP                        | 2015  |
| **Thunderbolt 4**   | 40 Gbps   | USB-C                     | Superset USB4, sécurité DMA, double affichage 4K | 2020  |

> **Attention :** USB-C n’implique pas automatiquement un haut débit. Le **connecteur** ne détermine pas la **norme**.

> [USB : Les différentes normes et les différentes formes de la connectique | Config Gamer](https://www.config-gamer.fr/guide-achat/usb-les-differentes-normes-et-les-differentes-formes-de-la-connectique-10000693.html)
---

### Les connecteurs physiques

| Connecteur              | Forme / usage                         | Compatibilité           |
| ----------------------- | ------------------------------------- | ----------------------- |
| **USB-A**               | Standard rectangulaire (clés USB…)    | USB 1 à 3.2             |
| **USB-B**               | Carré, utilisé pour imprimantes       | USB 1 à 3.0             |
| **Mini-USB**            | Ancien appareils photo, GPS           | USB 2.0                 |
| **Micro-USB**           | Smartphones anciens, disques externes | USB 2.0 / 3.0 (Micro-B) |
| **USB-C**               | Réversible, compact, universel        | USB 2 à USB4 / TB3–4    |
| **Thunderbolt (USB-C)** | Idem USB-C mais logo éclair           | Thunderbolt 3, 4        |

> **Thunderbolt utilise USB-C**, mais pas l’inverse.

---

### Comparatif des débits (en conditions idéales)

| Technologie        | Débit max | Type de connecteur | Remarques clés                                          |
| ------------------ | --------- | ------------------ | ------------------------------------------------------- |
| USB 2.0            | 480 Mbps  | USB-A              | Limité pour stockage ou vidéo                           |
| USB 3.0 / 3.1 Gen1 | 5 Gbps    | USB-A / USB-C      | Suffisant pour SSD basiques                             |
| USB 3.1 Gen2       | 10 Gbps   | USB-C              | Meilleur pour SSD ou docks rapides                      |
| USB 3.2 Gen2x2     | 20 Gbps   | USB-C              | Rare mais très rapide                                   |
| USB4 / TB3         | 40 Gbps   | USB-C              | Haut débit + DisplayPort, PCIe                          |
| Thunderbolt 4      | 40 Gbps   | USB-C              | Norme premium, double affichage 4K, sécurité, 100% USB4 |

---

### Puissance électrique fournie (alimentation)

| Norme                     | Puissance max            |
| ------------------------- | ------------------------ |
| USB 2.0                   | 2,5 W (5V / 0,5 A)       |
| USB 3.x                   | 4,5 W (5V / 0,9 A)       |
| USB-C standard            | 15 W (5V / 3 A)          |
| USB-C PD (Power Delivery) | Jusqu’à 240 W (48V / 5A) |

> 🔌 Les ports USB-C sur PC portables modernes peuvent **alimenter un écran, un disque, voire recharger le PC** lui-même.

---

### Bonnes pratiques support

* **Toujours tester plusieurs ports** : USB 3 arrière = plus fiable
* **Identifier les codes couleurs** (USB 3.0 = bleu, parfois rouge pour charge)
* Vérifier **les pilotes** si périphérique non reconnu
* Pour **Thunderbolt**, chercher le **logo éclair** sur le port
* Utiliser des **câbles certifiés** (notamment en Thunderbolt 4)

---

### À retenir

* L’USB est un standard universel avec plusieurs générations très différentes.
* La **forme du port (USB-C)** ne suffit pas à garantir la **vitesse ou les fonctions**.
* **Thunderbolt 4** est le standard le plus complet à ce jour (vidéo, data, alimentation, PCIe).
* Toujours vérifier les **spécifications réelles** (fiche technique, logo, câble) pour éviter les confusions.
* Les ports USB peuvent également fournir **de l'alimentation** — attention à la **puissance supportée** par le port et le câble.

## 5.5 Les cartes réseau – Ethernet, Wi-Fi et débits

---

### Rôle de la carte réseau

Une **carte réseau** permet la connexion d’un poste à un réseau (LAN) ou à Internet, en filaire (**Ethernet**) ou en sans-fil (**Wi-Fi**). Elle peut être :

* **intégrée** à la carte mère,
* **interne** (PCIe),
* **externe** (USB),
* ou **spécialisée** (NAS, fibre, 10G, SFP…).

---

### Normes réseau principales

#### Ethernet (filaire)

| Norme                  | Débit max    | Connecteur  | Année | Remarques                                   |
| ---------------------- | ------------ | ----------- | ----- | ------------------------------------------- |
| **Fast Ethernet**      | 100 Mbps     | RJ45        | ~1995 | Ancien, suffisant pour imprimante ou switch |
| **Gigabit Ethernet**   | 1 Gbps       | RJ45        | ~1999 | Standard actuel (box, PC, NAS)              |
| **2.5G / 5G Ethernet** | 2.5 / 5 Gbps | RJ45        | ~2017 | Multi-gig, pour NAS ou SSD réseau           |
| **10G Ethernet**       | 10 Gbps      | RJ45 / SFP+ | ~2022 | Réseaux pro, fibre ou cuivre                |

#### Wi-Fi (sans fil)

| Norme Wi-Fi            | Débit max théorique | Fréquences      | Année | Usage typique                        |
| ---------------------- | ------------------- | --------------- | ----- | ------------------------------------ |
| **Wi-Fi 4 (802.11n)**  | ~300 Mbps           | 2.4 GHz / 5 GHz | 2009  | Ancien standard                      |
| **Wi-Fi 5 (802.11ac)** | ~1.3 Gbps           | 5 GHz           | 2014  | Très répandu, stable                 |
| **Wi-Fi 6 (802.11ax)** | ~9.6 Gbps (multi)   | 2.4 / 5 GHz     | 2019  | Latence faible, dense environnements |
| **Wi-Fi 6E**           | ~9.6 Gbps           | + 6 GHz         | 2021  | Moins saturé, équipement récent      |
| **Wi-Fi 7 (802.11be)** | >30 Gbps            | 2.4 / 5 / 6 GHz | 2024  | Haut débit à très faible latence     |

---

### Types de cartes réseau

| Type               | Interface        | Usage                              |
| ------------------ | ---------------- | ---------------------------------- |
| **Intégrée**       | Port RJ45 sur CM | Standard, bureau ou portable       |
| **PCIe (interne)** | Slot x1 ou x4    | Ajout 1G / 2.5G / 10G              |
| **USB**            | USB-A / USB-C    | Portable ou dépannage rapide       |
| **SFP+**           | Fibre / DAC      | Data center, NAS haut de gamme     |
| **Wi-Fi M.2**      | Carte portable   | Module intégré (antennes internes) |
| **Wi-Fi USB**      | Dongle           | Ajout rapide sur portable          |

---

### Paramètres et notions utiles

* **MAC address** : identifiant matériel unique de la carte
* **Duplex** : full ou half duplex
* **MTU** : taille maximale de paquet (1500 par défaut)
* **Wake-on-LAN** : réveil d’un PC à distance
* **QoS / VLAN** : fonctions avancées pro

---

### Problèmes courants et diagnostics

| Symptôme                     | Cause fréquente            | Action support                     |
| ---------------------------- | -------------------------- | ---------------------------------- |
| Pas de connexion             | câble / port défectueux    | Tester autre câble / port          |
| Pas d’IP (triangle jaune)    | DHCP ou pilote manquant    | Forcer une IP / vérifier pilote    |
| Wi-Fi non détecté            | carte désactivée / absente | Réactiver ou réinstaller module    |
| Débit lent Ethernet          | câble ou port en 100 Mbps  | Vérifier négociation / câble Cat 6 |
| Connecté mais pas d’Internet | DNS / proxy / passerelle   | Test ping IP / DNS                 |

---

### À retenir

* La carte réseau connecte le PC au **réseau local** et à **Internet**.
* Les normes vont de **100 Mbps à 10 Gbps+** selon le besoin.
* **Wi-Fi 5/6** est le standard grand public actuel, **Ethernet 1G/2.5G** pour le filaire.
* Les débits réels dépendent des **câbles, pilotes, équipements et environnement Wi-Fi**.
* Il est facile d’ajouter une carte réseau via **PCIe ou USB** selon la situation.

---