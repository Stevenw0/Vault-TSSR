# Fondamentaux Réseaux  (01-05/11/2025)
> [name=Samuel GUILLARD <sguillard@jehann.fr>]
> [time=01 Decembre 2025]

## Table des matières

[TOC]

## Administratif

[https://moncompte.dawan.fr](https://moncompte.dawan.fr)

* Besoin/Attentes
* Niveau d'entrée
* Émargement bi-quotidien
* Évaluation
* Niveau de sortie

Horaires de la formation :
* Lundi : 9h30-12h30, 13h30-17h30
* Mardi à vendredi : 9h00-12h30, 13h30-17h00
* 1 pause de 15 min le matin et 1 pause de 15 min l'après-midi



# Liens TP et autres
https://hedgedoc.dawan.fr/lE9lxpOqSpmbH004xgG1Tg

[Liens canvas et notes markdown](https://dawaneducation-my.sharepoint.com/:f:/g/personal/sguillard_cfa_dawan_education/EqGC0xCuFCBJsOGP8T4D9XYBlIJfwSndIo1mYdeso5KR0w?e=bs1p9Q)

# 1 - Introduction aux réseaux

## 1.1 Présentation générale des réseaux

---

### Définition

Un **réseau informatique** est un **ensemble d’équipements reliés entre eux** afin d’échanger des informations et de partager des ressources.  
Ces équipements communiquent à l’aide de **protocoles**, c’est-à-dire des règles qui définissent la manière dont les données sont transmises et interprétées.

Un réseau permet par exemple :

- De partager des fichiers, des imprimantes ou une connexion Internet.
    
- D’accéder à des services centralisés (serveur de fichiers, messagerie, web).
    
- De communiquer entre utilisateurs (visioconférence, messagerie instantanée).
    
- De connecter des systèmes distants via Internet ou un VPN.
    

---

### Objectifs d’un réseau

Les principaux objectifs d’un réseau sont :

1. **La communication** entre les différents équipements.
    
2. **Le partage de ressources** matérielles ou logicielles.
    
3. **La sécurité** et la **maîtrise des accès** aux données.
    
4. **La centralisation** des services pour simplifier l’administration.
    
5. **L’interconnexion** entre sites ou utilisateurs éloignés.
    

:::info
Dans une entreprise, le réseau permet à tous les collaborateurs d’accéder aux données internes tout en contrôlant les connexions extérieures.
:::

---

### Historique et évolution

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ee6W1ODvFU?si=5raNg_0tJszQocIz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Les réseaux informatiques modernes résultent de plusieurs décennies d’évolutions technologiques et scientifiques.  
Voici les **grandes étapes qui ont marqué la naissance d’Internet** :

|Année|Événement marquant|Contexte / Impact|
|---|---|---|
|**1940**|Première expérience de calcul à distance (George Stibitz, Bell Labs).|Première démonstration de télétraitement sur ligne téléphonique.|
|**1958**|Invention du **modem** (Bell Labs).|Transmission de données binaires sur une ligne téléphonique.|
|**1962**|Idée d’un **réseau mondial d’ordinateurs** (J.C.R. Licklider, DARPA).|Naissance du concept de réseau global.|
|**1969**|Création d’**ARPANET**.|Premier réseau reliant 4 universités américaines.|
|**1971**|**Premier e-mail** envoyé par Ray Tomlinson.|23 ordinateurs connectés sur ARPANET.|
|**1973**|**Définition du protocole TCP/IP.**|Base de la communication sur Internet.|
|**1983**|**Adoption officielle de TCP/IP** et du terme **Internet**.|Disparition d’ARPANET militaire, naissance du DNS.|
|**1989**|**Invention du World Wide Web** (Tim Berners-Lee, CERN).|Début du Web moderne.|
|**1993**|**Navigateur Mosaic.**|Internet devient accessible au grand public.|
|**1995**|**Commercialisation d’Internet** et transition vers IPv6.|Explosion du nombre d’utilisateurs et de sites.|
|**1997**|**Apparition du Wi-Fi.**|Début des réseaux sans fil domestiques.|
|**2000**|**Bulle Internet.**|Première crise du numérique mais consolidation du réseau mondial.|
|**2008**|**Internet des objets (IoT).**|Les objets connectés rejoignent le réseau.|
|**2012**|**Déploiement de la 4G.**|Internet haut débit mobile généralisé.|
|**2014**|**1 milliard de sites web.**|Le Web devient omniprésent.|
|**2021**|**4,6 milliards d’utilisateurs connectés.**|Plus de la moitié de la population mondiale.|
|**2022**|**Apparition publique de l’IA générative (ChatGPT).**|Internet devient la plateforme d’émergence de l’intelligence artificielle.|


![](https://hedgedoc.dawan.fr/uploads/cb803248-e519-46b3-a1f1-16fd38d43a9c.png)

[Frise interactive](https://view.genially.com/5ce93e682763660f3077fbc2/horizontal-infographic-timeline-snthistoireinternet)

:::info
Internet n’est pas un système unique ou centralisé.  
C’est un **ensemble de réseaux indépendants** qui utilisent un **langage commun : le protocole IP**.
:::

---

### Flux et nature des échanges

Les réseaux transportent différents types de flux :

- **Données** : fichiers, requêtes web, bases de données.
    
- **Voix** : téléphonie sur IP (VoIP).
    
- **Images et vidéo** : visioconférence, streaming.
    
- **Signaux de commande** : capteurs, IoT, automatisation industrielle.
    

Cette diversité impose des technologies capables d’assurer :

- des **débits élevés**,
    
- une **faible latence**,
    
- et une **qualité de service (QoS)** adaptée au type de trafic.
    

---

 **Pourquoi comprendre les réseaux ?**

Comprendre les réseaux, c’est :

- Savoir **comment les machines communiquent réellement**.
    
- Être capable de **détecter et résoudre une panne de connectivité**.
    
- Pouvoir **concevoir une architecture adaptée** à un besoin.
    
- Et plus largement, maîtriser la base de tous les systèmes modernes : **Internet**.
    

:::info
Que vous soyez administrateur système, technicien support ou développeur, connaître les réseaux permet de comprendre les interactions entre les systèmes, d’anticiper les problèmes et de concevoir des infrastructures fiables.
:::

---
### À retenir
:::success

- Un **réseau informatique** relie plusieurs équipements pour **échanger des données** et **partager des ressources**.
    
- Les communications reposent sur des **protocoles** (TCP/IP, HTTP, etc.) qui définissent les règles d’échange.
    
- Les réseaux sont passés d’**ARPANET** à **Internet**, connectant aujourd’hui des milliards d’appareils.
    
- Les équipements du réseau (ordinateurs, serveurs, switchs, routeurs, bornes Wi-Fi) utilisent des **supports filaires ou sans fil**.
    
- Comprendre les réseaux, c’est comprendre le **socle de toutes les communications numériques modernes**.

:::

---

## 1.2 Les utilisateurs et leurs besoins

---

### Pourquoi un réseau ?

Un réseau n’existe pas “pour faire joli” : il sert avant tout à **rendre service à ses utilisateurs**.  
Avant de parler câbles ou protocoles, il faut comprendre **qui l’utilise et pourquoi**.

Les utilisateurs peuvent être :

- des **personnes** (employés, clients, étudiants, techniciens),
    
- ou des **machines** (serveurs, imprimantes, capteurs, caméras IP).
    

Tous partagent le même réseau, mais **leurs attentes ne sont pas les mêmes** :

- L’utilisateur veut que “ça marche vite et partout”.
    
- L’administrateur veut que “ce soit stable et sécurisé”.
    


### Les besoins essentiels

On distingue deux grandes familles de besoins :

|Type|Exemples|
|---|---|
|**Fonctionnels** (ce qu’on veut faire)|Communiquer, partager des fichiers, accéder à Internet, imprimer, travailler à distance.|
|**Non fonctionnels** (comment on veut le faire)|Rapidité, fiabilité, sécurité, disponibilité, simplicité d’accès.|

:::info
Un bon réseau n’est pas forcément le plus rapide : c’est celui qui **répond bien aux besoins réels des utilisateurs**.
:::


---

### Exemple concret

Dans une petite entreprise :

- Les **employés** ont besoin d’accéder aux fichiers et d’imprimer.
    
- Le **patron** veut consulter ses mails depuis l’extérieur via VPN.
    
- Les **visiteurs** ont besoin d’un Wi-Fi séparé.
    
- Le **technicien** veut surveiller le trafic et détecter les pannes.
    

→ Un seul réseau “plat” poserait vite des problèmes.  
D’où la nécessité de **concevoir un réseau adapté à chaque usage** (ex. VLAN ou filtrage plus tard).



### En résumé
:::success
- Un réseau doit **servir les besoins des utilisateurs**, pas l’inverse. 
- Identifier ces besoins est **la première étape** avant toute conception technique.
- La **qualité d’un réseau** se mesure à son **adéquation aux usages réels**.
:::

---

## 1.3 Étendues des réseaux

---

### Introduction

Tous les réseaux n’ont pas la même taille ni le même rôle.  
Certains couvrent **quelques mètres**, d’autres **des milliers de kilomètres**.  
On parle alors **d’étendue** ou de **portée** du réseau.

:::info  
L’étendue d’un réseau dépend de sa **zone géographique**, du **nombre d’équipements** interconnectés et du **type de technologie** utilisée.
:::

![](https://hedgedoc.dawan.fr/uploads/90409fb0-45ed-46d7-bf71-cd5454fafdc0.png)


<iframe width="560" height="315" src="https://www.youtube.com/embed/c0Xj09s5hYA?si=9SB7DfBIeXyB4iml" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### PAN — Personal Area Network

Un **PAN** est un **réseau personnel**, très limité géographiquement (quelques mètres).  
Il relie des équipements autour d’un seul utilisateur.

**Exemples :**

- Connexion Bluetooth entre un smartphone et des écouteurs.
    
- Partage de fichiers entre un PC et un téléphone.
    
- Montre connectée synchronisée à un mobile.
    

**Caractéristiques :**

- Très courte portée.
    
- Faible débit.
    
- Généralement sans fil.


---

### LAN — Local Area Network

Le **LAN** est le **réseau local**, le plus courant.  
Il relie des ordinateurs et équipements au sein d’un même bâtiment ou site.

**Exemples :**

- Réseau d’entreprise, salle informatique, lycée, maison connectée. 
- Switchs, routeurs et points d’accès Wi-Fi.
    

**Caractéristiques :**

- Débit élevé. 
- Administration locale.
- Technologies : Ethernet, Wi-Fi.
    

:::info

Un LAN constitue souvent **la base de toute architecture réseau** : c’est à ce niveau qu’on met en place la sécurité, les VLANs et les services essentiels (DHCP, DNS…).

:::

### MAN — Metropolitan Area Network

Le **MAN** (réseau métropolitain) relie plusieurs **LAN** situés dans une même **zone urbaine ou régionale**.

**Exemples :**

- Interconnexion de plusieurs bâtiments municipaux.    
- Réseau fibre reliant les écoles d’une même ville.   
- Réseau interne d’un campus universitaire.
    

**Caractéristiques :**

- Étendue : quelques kilomètres à plusieurs dizaines.   
- Débits élevés via fibre optique.   
- Administration par un opérateur ou un service public.
    

---

### WAN — Wide Area Network

Le **WAN** (réseau étendu) relie des réseaux **distants à très grande échelle** : pays, continents, voire monde entier.  
C’est la catégorie à laquelle **appartient Internet**.

**Exemples :**

- Réseau reliant les filiales d’une entreprise internationale.   
- Liaisons VPN entre plusieurs sites.   
- Fournisseurs d’accès Internet (FAI).
    

**Caractéristiques :**

- Très large couverture géographique.  
- Débits variables selon les liens.   
- Administration partagée entre plusieurs opérateurs.
    

:::info
Internet est un **ensemble de milliers de WAN interconnectés** entre eux grâce au protocole IP.
:::

---

### Résumé comparatif

|Type de réseau|Étendue géographique|Exemple typique|Support principal|
|---|---|---|---|
|**PAN**|Quelques mètres|Bluetooth, montre connectée|Sans fil|
|**LAN**|Bâtiment ou site|Réseau d’entreprise, Wi-Fi local|Ethernet / Wi-Fi|
|**MAN**|Ville, campus|Réseau fibre inter-sites|Fibre optique|
|**WAN**|Pays / Monde|Internet, VPN d’entreprise|Fibre, satellite, 4G/5G|

---

### À retenir
:::success
- L’étendue d’un réseau influence sa **technologie**, son **débit** et son **mode de gestion**.
    
- Un **LAN** est souvent la base : les **MAN** et **WAN** ne sont qu’une **interconnexion de plusieurs LAN**.
    
- Le **protocole IP** permet à tous ces réseaux de communiquer entre eux, quelle que soit leur taille. 
:::

---
## 1.4 Architectures et topologies

---

### Introduction

Après avoir vu les différentes **étendues** (PAN, LAN, MAN, WAN), il est important de comprendre **comment les équipements sont reliés entre eux**.  
Deux notions entrent en jeu :

- **L’architecture** : la manière dont les rôles sont répartis entre les machines.  
- **La topologie** : la forme physique ou logique que prend le réseau.
    

### Les architectures de réseau

#### Architecture client / serveur

Dans ce modèle, les **serveurs** centralisent les ressources et les **clients** y accèdent.  
C’est l’architecture la plus utilisée dans les entreprises.

**Exemples :**

- Un serveur de fichiers accessible par tous les postes.    
- Un serveur web hébergeant le site de l’entreprise.   
- Un serveur d’authentification (Active Directory).
    

**Avantages :**

- Gestion centralisée des droits et des données.    
- Sécurité et sauvegardes plus faciles à mettre en place.   
- Maintenance simplifiée.
    

**Inconvénients :**

- Dépendance au serveur (si panne, tout s’arrête).    
- Nécessite une infrastructure plus coûteuse.
    

![](https://hedgedoc.dawan.fr/uploads/fef11fd1-7d21-4686-9447-1548aff23eb1.png)


---

#### Architecture pair à pair (Peer-to-Peer, ou P2P)

Ici, chaque machine agit à la fois comme **client et serveur**.  
Les postes échangent directement entre eux sans serveur central.

**Exemples :**

- Partage de fichiers entre deux ordinateurs à la maison.
    
- Réseaux P2P comme BitTorrent.
    

**Avantages :**

- Simplicité de mise en place.
    
- Pas besoin d’un serveur dédié.
    
- Résilience : pas de point unique de panne.
    

**Inconvénients :**

- Sécurité plus faible.
    
- Difficulté à contrôler les accès et les versions.
    


:::info
En pratique, les réseaux modernes combinent souvent **les deux modèles** :  
- des services centralisés (serveur) 
- des échanges ponctuels entre utilisateurs (P2P).
:::

![](https://hedgedoc.dawan.fr/uploads/79714eae-5da0-40d6-8a0c-631aafc53b7c.png)


---

### Les topologies de réseau

La **topologie** décrit **la forme** que prend un réseau, c’est-à-dire **la manière dont les équipements sont interconnectés**.

####  Topologie en bus

Tous les équipements sont reliés sur un même câble (appelé _bus_).  
Les signaux circulent dans les deux sens.

**Avantages :**

- Économie de câblage.  
- Facile à étendre sur de courtes distances.
    

**Inconvénients :**

- Collisions fréquentes.  
- Une rupture de câble peut interrompre tout le réseau.
    
![](https://hedgedoc.dawan.fr/uploads/8997f5fa-f0c2-4ef7-b428-d58db79db54e.png)


---

#### Topologie en étoile

Tous les équipements sont reliés à un **point central** (généralement un **switch** ou un **hub**).

**Avantages :**

- Fiabilité : une panne de câble n’affecte qu’un poste.
    
- Maintenance et évolution plus simples.
    
- Base de la plupart des réseaux Ethernet modernes.
    

**Inconvénients :**

- Dépendance au commutateur central.
    

![](https://hedgedoc.dawan.fr/uploads/8bb507d3-8bea-4716-ab72-3374c27da803.png)

---

#### Topologie en anneau

Chaque équipement est connecté à deux autres, formant une **boucle fermée**.  
Les données circulent dans un seul sens.

**Avantages :**

- Répartition équilibrée du trafic.   
- Utilisée historiquement avec _Token Ring_.
    

**Inconvénients :**

- Une panne peut rompre l’anneau.   
- Peu utilisée aujourd’hui, remplacée par Ethernet.
    
![](https://hedgedoc.dawan.fr/uploads/882674c1-ae35-4160-b3f2-6db407272484.png)

---

#### Topologie maillée

Chaque équipement est relié à plusieurs autres.  
Elle peut être **totale** (tous connectés entre eux) ou **partielle** (certains liens).

**Avantages :**

- Très forte tolérance aux pannes.
    
- Excellente disponibilité (utilisée dans les réseaux opérateurs et sans fil).
    

**Inconvénients :**

- Coût et complexité de câblage élevés.
    

![](https://hedgedoc.dawan.fr/uploads/a2968a65-5804-4859-8a9c-fe20764d695a.png)


#### Topologie hybride

C’est une **combinaison** de plusieurs topologies (par exemple : étoile + bus, ou étoile + maillage).  
C’est le modèle le plus courant dans les grandes infrastructures.

:::info
Les réseaux d’entreprise modernes utilisent **une topologie en étoile étendue**, où plusieurs commutateurs (étoiles locales) sont reliés entre eux en **maillage partiel**.
:::

![](https://hedgedoc.dawan.fr/uploads/e889e00e-73cd-490a-b035-7e75b6e3762b.png)


---

### Comparatif rapide

|Topologie|Description|Avantage principal|Inconvénient principal|
|---|---|---|---|
|**Bus**|Un câble partagé unique|Économique|Collisions, fragilité|
|**Étoile**|Tous reliés à un point central|Fiabilité|Dépendance au centre|
|**Anneau**|Circuit fermé|Répartition du trafic|Panne = coupure totale|
|**Maillée**|Connexions multiples|Tolérance aux pannes|Coût élevé|
|**Hybride**|Combinaison de formes|Souplesse|Complexité|

---

### À retenir

:::success

- L’**architecture** définit la **logique de fonctionnement** (client/serveur ou P2P).
    
- La **topologie** définit la **structure physique ou logique** du réseau.
    
- Aujourd’hui, la majorité des LAN utilisent une **architecture client/serveur** et une **topologie en étoile étendue**.
   
:::

---

## 1.5 Modèle OSI - aperçu et encapsulation
---

### Pourquoi un modèle ?

Avant les années 1980, chaque constructeur (IBM, DEC, Xerox…) développait **ses propres protocoles** réseau.  
Résultat : les machines **ne pouvaient pas communiquer entre elles**.

Pour résoudre ce problème, l’**ISO (Organisation Internationale de Normalisation)** a créé un modèle standard de référence :  
➡️ **le modèle OSI (Open Systems Interconnection)**.

:::info
Le modèle OSI est une **modélisation logique** de la communication réseau, pas un protocole concret.  
Il décrit **comment les données circulent d’une application à une autre** à travers un réseau.
:::

![](https://hedgedoc.dawan.fr/uploads/c3205b5e-6be9-4567-b394-3d40a9c99a11.png)


### Les objectifs du modèle OSI

- **Standardiser** la communication entre systèmes informatiques.
- **Faciliter l’interopérabilité** entre équipements et constructeurs différents.
- **Structurer les fonctions réseau** en plusieurs niveaux indépendants.
- **Aider au diagnostic** en séparant les problèmes par couche.
    

:::info
> Chaque couche du modèle OSI a un **rôle bien défini** et **communique uniquement** avec la couche juste au-dessus et celle juste en dessous.
:::
---

### Principe d’encapsulation

Lorsqu’une donnée traverse le réseau :

1. Chaque couche ajoute ses **informations de contrôle** (en-têtes ou “headers”).
    
2. Ces en-têtes permettent à la couche correspondante du destinataire de **décoder le message**.
    

C’est ce qu’on appelle **l’encapsulation**.

Exemple :

- L’application envoie un message.
    
- Le système ajoute successivement des en-têtes TCP, IP, Ethernet…
    
- À la réception, ces couches sont **désencapsulées** dans l’ordre inverse.
    


### Les 7 couches du modèle OSI

|N°|Couche|Rôle principal|Exemple de protocole ou équipement|
|---|---|---|---|
|7|**Application**|Interface entre l’utilisateur et le réseau|HTTP, SMTP, FTP, DNS|
|6|**Présentation**|Formatage, chiffrement, compression|SSL/TLS, ASCII, JPEG|
|5|**Session**|Ouverture, gestion et fermeture des sessions|RPC, NetBIOS|
|4|**Transport**|Transmission fiable ou non des données|TCP, UDP|
|3|**Réseau**|Adressage et routage des paquets|IP, ICMP|
|2|**Liaison de données**|Communication entre deux machines sur un même lien|Ethernet, Wi-Fi|
|1|**Physique**|Transmission du signal brut|Câble, fibre, radio, hub|

:::info


Le modèle OSI sépare la communication en **7 fonctions complémentaires**, de la **couche physique (1)** à la **couche applicative (7)**.
:::
---

### Règle mnémotechnique

Pour retenir les 7 couches de bas en haut :

> **“Physiquement Les Réseaux Transmettent Souvent Par Application”**  
> ou la version anglaise classique :  
> **“Please Do Not Throw Sausage Pizza Away”**

---

### Relation avec le modèle TCP/IP

Le modèle **TCP/IP**, plus simple, ne comporte que **4 couches**, mais il s’inspire directement d’OSI.

![](https://hedgedoc.dawan.fr/uploads/6ac7e8b0-2977-4f7e-a928-cfbe901e6980.png)


|OSI|TCP/IP|Exemple|
|---|---|---|
|7, 6, 5|**Application**|HTTP, FTP, DNS|
|4|**Transport**|TCP, UDP|
|3|**Internet**|IP, ICMP|
|2, 1|**Accès réseau**|Ethernet, Wi-Fi|

:::info
OSI est un **modèle théorique** ;  
TCP/IP est **le modèle réellement utilisé sur Internet**.
:::

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/26jazyc7VNk?si=PMMvw7zPM986JnwO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### À retenir

:::success
- Le **modèle OSI** décrit **comment les données circulent** dans un réseau.
    
- Il comprend **7 couches**, chacune avec un rôle spécifique.
    
- Il permet de **standardiser** et de **diagnostiquer** les communications réseau.
    
- Le modèle **TCP/IP** simplifie OSI et est utilisé dans la pratique.
::: 

---

# 2 - Couche 1 - Physique
## 2.1 Supports filaires

---

### Introduction

Les supports de communication sont les **médias physiques** qui permettent de **transporter les signaux** d’un appareil à un autre.  
Dans un réseau, la qualité du support détermine directement le **débit**, la **distance maximale**, la **fiabilité** et le **coût** de l’installation.

Les supports filaires, aussi appelés **supports limités**, utilisent un **câble physique** pour véhiculer le signal électrique ou lumineux.

---

### Les paires torsadées (Twisted Pair)

Les câbles à **paires torsadées** sont les plus courants dans les réseaux locaux (LAN).  
Ils sont constitués de **quatre paires de fils de cuivre**, torsadées deux à deux pour **réduire les interférences électromagnétiques**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oOwnV9LkYBY?si=arav6-Eh4IiXm7QS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Catégories principales :**

|Catégorie|Débit max|Fréquence|Usage typique|
|---|---|---|---|
|**Cat 5e**|1 Gbit/s|100 MHz|Réseaux bureautiques standards|
|**Cat 6**|1 à 10 Gbit/s (jusqu’à 55 m)|250 MHz|Réseaux professionnels|
|**Cat 6a**|10 Gbit/s|500 MHz|Réseaux d’entreprise|
|**Cat 7/7a**|10 Gbit/s et +|600–1000 MHz|Centres de données|
|**Cat 8**|Jusqu’à 40 Gbit/s|2000 MHz|Datacenters haute performance|

**Types de blindage :**

|Type|Nom complet|Description du blindage|Protection contre les interférences|
|---|---|---|---|
|**UTP**|_Unshielded Twisted Pair_|Aucune protection : seulement les paires torsadées.|Faible — sensible aux perturbations électromagnétiques.|
|**FTP**|_Foiled Twisted Pair_|Blindage global en feuille d’aluminium autour de toutes les paires.|Moyenne — protège contre les interférences externes.|
|**STP**|_Shielded Twisted Pair_|Chaque paire est blindée individuellement (souvent en aluminium).|Élevée — bonne isolation entre les paires et contre les interférences.|
|**S/FTP**|_Shielded + Foiled Twisted Pair_|Blindage général + blindage individuel pour chaque paire.|Très élevée — excellente protection, utilisé dans les environnements industriels.|

:::info
Le connecteur standard des câbles à paires torsadées est le **RJ45**.  
Il est utilisé aussi bien pour les réseaux Ethernet que pour la téléphonie.
:::

![](https://hedgedoc.dawan.fr/uploads/1694da7a-a89e-4e10-b7d0-32a6d140d0d2.png)


### La fibre optique

La **fibre optique** transporte des signaux **lumineux**, et non électriques.  
Elle permet des **débits très élevés** et des **distances importantes**, sans interférences électromagnétiques.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UwEuUsaiBAk?si=eO_cpM8PXqnvY2by" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Principe de fonctionnement

- Le signal est transmis sous forme d’**impulsions lumineuses**.
    
- La fibre est constituée :
    
    - d’un **cœur** (verre ou plastique) où circule la lumière,
        
    - d’une **gaine optique** qui la confine,
        
    - d’une **protection externe**.
        

#### Types de fibres

|Type|Diamètre du cœur|Portée|Utilisation|
|---|---|---|---|
|**Monomode (SMF)**|9 µm|Jusqu’à 40 km|Réseaux opérateurs, liaisons inter-sites|
|**Multimode (MMF)**|50 ou 62,5 µm|Jusqu’à 2 km|Réseaux locaux, campus|

#### Connecteurs courants

- **SC** (Square Connector)
    
- **LC** (Lucent Connector)
    
- **ST** (Straight Tip)
    

:::info

La fibre est privilégiée pour les **liaisons backbone** (entre bâtiments ou baies réseau) et les **fournisseurs d’accès Internet (FTTH/FTTO)**.

:::

### Le câble coaxial

Le câble **coaxial** transporte un signal électrique **centré et protégé** par plusieurs couches.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MdRFUh14bFw?si=7-Sf07KGQIrC3v1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Structure :**

- Âme en cuivre (signal)
    
- Isolant
    
- Tresse métallique (blindage)
    
- Gaine protectrice externe
    

**Utilisations principales :**

- Télévision et Internet par câble (normes DOCSIS)
    
- Anciennes installations Ethernet (10Base2, 10Base5)
    

**Avantages :**

- Bonne résistance aux perturbations électromagnétiques
    
- Longues distances sans affaiblissement
    

**Inconvénients :**

- Plus rigide et plus coûteux que la paire torsadée
    
- Peu utilisé dans les nouveaux réseaux Ethernet
    

---

### Comparatif synthétique

|Support|Débit max|Portée|Sensibilité aux interférences|Coût|Usage typique|
|---|---|---|---|---|---|
|**Paire torsadée**|1–10 Gbit/s|< 100 m|Moyenne|Faible|Réseaux locaux (LAN)|
|**Fibre optique**|> 100 Gbit/s|Jusqu’à plusieurs km|Faible|Élevé|Backbones, opérateurs|
|**Coaxial**|< 1 Gbit/s|Quelques centaines de m|Faible|Moyen|Réseaux TV, anciens LAN|

---

### À retenir

:::success


- Les supports **filaires** sont fiables, stables et performants.
    
- Le **RJ45** reste le connecteur standard pour les réseaux Ethernet.
    
- La **fibre optique** domine aujourd’hui pour les interconnexions à longue distance.
    
- Le **coaxial** a quasiment disparu des réseaux locaux modernes.
   
:::

---

## 2.2 Supports sans fil

---

### Introduction

Les **supports sans fil** permettent de transmettre des données **sans câble physique**, en utilisant des **ondes électromagnétiques**.  
Contrairement aux supports filaires, la portée et la stabilité dépendent de nombreux facteurs :

- fréquence utilisée,
    
- puissance d’émission,
    
- obstacles physiques,
    
- interférences radio.
    

Ces supports sont dits **non limités**, car les ondes peuvent se propager dans l’air, voire dans le vide.

:::info
Dans la norme OSI, les supports sans fil concernent principalement la **couche physique (1)** et la **couche liaison (2)**.
:::

---

### Le Wi-Fi (IEEE 802.11)

Le **Wi-Fi** est le standard le plus répandu pour les réseaux locaux sans fil (WLAN).  
Il repose sur les normes **IEEE 802.11**, qui ont évolué pour offrir plus de **débit**, de **portée** et de **sécurité**.

|Norme|Année d’adoption|Bande(s) de fréquence|Débit théorique max|Remarques|
|---|---|---|---|---|
|**802.11b**|1999|2,4 GHz|11 Mbit/s|Première norme grand public|
|**802.11g**|2003|2,4 GHz|54 Mbit/s|Compatible avec 11b|
|**802.11n (Wi-Fi 4)**|2009|2,4 / 5 GHz|600 Mbit/s|Introduction du MIMO (multi-antennes)|
|**802.11ac (Wi-Fi 5)**|2013|5 GHz|1,3 Gbit/s|Plus rapide, meilleure gestion multi-utilisateur|
|**802.11ax (Wi-Fi 6)**|2019|2,4 / 5 GHz|9,6 Gbit/s|Plus efficace dans les environnements denses|
|**802.11ax (Wi-Fi 6E)**|2021|**2,4 / 5 / 6 GHz**|9,6 Gbit/s|Ajoute la bande **6 GHz** → moins d’interférences|
|**802.11be (Wi-Fi 7)**|2024|2,4 / 5 / 6 GHz|> 30 Gbit/s|Multi-Link Operation (MLO), très haut débit|
|**802.11bn (Wi-Fi 8)**|~2026 (à venir)|2,4 / 5 / 6 GHz|≈ 48 Gbit/s|Vise la **fiabilité et la faible latence**|

:::info
Les réseaux Wi-Fi sont identifiés par un **SSID** (_Service Set Identifier_).  
La sécurité repose sur des protocoles comme **WPA2**, **WPA3** et bientôt **WPA4**.
:::

:::info


Article détaillé sur les versions Wi-Fi 6E → 8 : [IEEE 802.11 Roadmap](https://www.ieee802.org/11/)  
Comparatif grand public : [Wi-Fi 6E et Wi-Fi 7 expliqués – TechTarget](https://www.techtarget.com/searchnetworking/definition/80211ax)

:::

### Le Bluetooth

Le **Bluetooth** est conçu pour les communications à courte portée entre appareils personnels (**PAN – Personal Area Network**).

**Caractéristiques principales :**

- Bande de fréquence : **2,4 GHz (ISM)**
    
- Portée : environ **10 à 250 m** selon la classe
    
- Débit : de quelques centaines de kbit/s à plusieurs Mbit/s
    
- Utilisation : périphériques (clavier, souris, casque, smartphone, IoT)
    

|Version|Année|Débit max|Portée max|Évolution notable|
|---|---|---|---|---|
|**1.0**|1999|0,7 Mbit/s|10 m|Première version|
|**2.0 + EDR**|2004|3 Mbit/s|10 m|_Enhanced Data Rate_|
|**3.0 + HS**|2009|24 Mbit/s (avec Wi-Fi)|10 m|Utilise Wi-Fi pour les transferts rapides|
|**4.0 (BLE)**|2010|1 Mbit/s|50 m|_Bluetooth Low Energy_|
|**5.0**|2016|2 Mbit/s|200 m|Meilleure portée et débit|
|**5.3**|2021|2 Mbit/s|250 m|Optimisation énergie et coexistence|
|**5.4**|2023|2 Mbit/s|250 m|Ajout du **PAwR** (Public Advertising w/ Responses)|
|**6.0 (prévu)**|2024–2025|2 Mbit/s|250 m|Nouvelles fonctions de **localisation et cryptage**|

:::info
Le **Bluetooth Low Energy (BLE)** est la version privilégiée pour les **capteurs IoT** et les **balises connectées**.
:::

:::info


- [Minew – Comparing Bluetooth Versions](https://www.minew.com/fr/comparing-bluetooth-versions/)
- [Site Web de la technologie Bluetooth](https://www.bluetooth.com/learn-about-bluetooth/tech-overview/)

:::

---
### Réseaux mobiles (2G à 5G)

Les **réseaux mobiles** utilisent des fréquences radio pour transmettre voix et données via des antennes relais.  
Chaque génération améliore le **débit**, la **latence**, et la **capacité simultanée** des utilisateurs.

|Génération|Année de lancement|Technologie|Débit théorique max|Usage principal|
|---|---|---|---|---|
|**2G (GSM)**|1991|Circuit commuté|~100 kbit/s|Appels / SMS|
|**3G (UMTS, HSPA+)**|2001|Paquets IP|~42 Mbit/s|Internet mobile basique|
|**4G (LTE, LTE-A)**|2010|Tout IP|~1 Gbit/s|Streaming HD, data intensive|
|**5G (NR)**|2020|Réseau virtualisé, MIMO massif|> 10 Gbit/s|IoT, véhicules connectés, faible latence|
|**6G (prévu)**|~2030|IA intégrée, ondes THz|Objectif > 1 Tbit/s|Réalité étendue, communications holo.|

:::info
- [Des 2G aux 5G : l’évolution des réseaux mobiles](https://www.youtube.com/watch?v=qQw9q5e2ByQ)  

- [Réseau mobile (3G, 4G, 5G) : concepts fondamentaux et évolution](https://www.youtube.com/watch?v=P6n-sB7OH9M)
:::

---

### L’infrarouge (IrDA)

L’infrarouge utilise la **lumière non visible** pour transmettre des données à courte distance.

**Caractéristiques :**

- Communication **unidirectionnelle ou bidirectionnelle**
    
- Portée : **1 à 5 mètres**
    
- Nécessite un **alignement direct**
    
- Aujourd’hui remplacé par Wi-Fi / Bluetooth
    
:::warning
Technologie **obsolète** pour les réseaux informatiques modernes, mais encore utilisée dans les **télécommandes**.
:::

---

### À retenir
:::success


- Le **Wi-Fi** reste la référence pour les **réseaux locaux sans fil**.
    
- **Wi-Fi 6E** ajoute la **bande 6 GHz**, tandis que **Wi-Fi 7 et 8** visent le très haut débit et la fiabilité.
    
- **Bluetooth** couvre les **réseaux personnels (PAN)** et s’oriente vers les objets connectés.
    
- Les **réseaux mobiles 4G et 5G** assurent les communications longue distance.
    
- L’**infrarouge** appartient désormais à l’histoire des communications courtes portées.
:::

---

## 2.3 Fréquence, Atténuation, EMI

---

### Introduction

La **couche physique** du modèle OSI définit comment les données sont transformées en **signaux électriques, lumineux ou radio**.  
Avant d’aborder la couche liaison, il est essentiel de comprendre trois phénomènes physiques qui influencent la qualité du signal :

- la **fréquence**,
    
- l’**atténuation**,
    
- et les **interférences électromagnétiques (EMI)**.
    

Ces paramètres conditionnent le **débit**, la **portée** et la **stabilité** d’un réseau.

---

### Fréquence

La **fréquence** correspond au **nombre d’oscillations d’un signal par seconde**, exprimé en **hertz (Hz)**.

|Bande|Exemple|Usage typique|
|---|---|---|
|50–60 Hz|Courant alternatif|Alimentation électrique|
|100 kHz – 30 MHz|Câble cuivre|Transmission filaire|
|2,4 / 5 / 6 GHz|Ondes radio|Wi-Fi, Bluetooth|
|193 THz et +|Lumière visible|Fibre optique|

:::info
Plus la fréquence est élevée, plus le débit peut être important, mais la portée diminue et les pertes augmentent.
:::

#### Exemple

- **Wi-Fi 2,4 GHz** : portée longue, mais vitesse moindre.
    
- **Wi-Fi 6 GHz (Wi-Fi 6E/7)** : très rapide, mais portée plus courte.
    

---

### Atténuation

L’**atténuation** est la **perte de puissance du signal** au fil de sa propagation, mesurée en **décibels (dB)**.

#### Causes principales

- Longueur excessive du câble
    
- Qualité du conducteur ou des connecteurs
    
- Obstacles physiques (murs, meubles)
    
- Interférences radio ou champs électriques
    

#### Effets

- Signal affaibli ou déformé
    
- Erreurs de trame (CRC)
    
- Débit réduit ou coupures
    

#### Exemples

- Câble cuivre : longueur maximale ≈ 100 m
    
- Fibre optique : portée de plusieurs kilomètres avec **répéteurs optiques** si nécessaire
    

---

### Interférences électromagnétiques (EMI)

Les **EMI (ElectroMagnetic Interferences)** sont des perturbations externes générées par des champs électriques ou magnétiques.

#### Sources typiques

- Câbles électriques, moteurs, néons
    
- Appareils Wi-Fi, micro-ondes
    
- Onduleurs, transformateurs
    
- Mauvaise mise à la terre ou blindage défaillant
    

#### Effets

- Erreurs de transmission (CRC)
    
- Pertes de paquets
    
- Déconnexions aléatoires
    

---

### Protection contre les EMI

Pour limiter ces perturbations, on utilise différents types de **blindage** :

|Type de câble|Description|Niveau de protection|
|---|---|---|
|UTP (_Unshielded Twisted Pair_)|Paires torsadées sans blindage|Faible|
|FTP / F-UTP (_Foiled Twisted Pair_)|Feuille d’aluminium globale|Moyenne|
|STP / S-FTP|Blindage individuel + général|Élevée|
|Fibre optique|Transmission lumineuse|Insensible aux EMI|

:::info
Le **torsadage** réduit déjà les interférences : les champs opposés s’annulent partiellement.
:::

---

### La diaphonie (crosstalk)

La **diaphonie** est une perturbation **interne** : le signal d’une paire de fils interfère avec une autre paire du même câble.

|Type|Description|
|---|---|
|**NEXT** (_Near-End Crosstalk_)|Interférence mesurée du côté émetteur|
|**FEXT** (_Far-End Crosstalk_)|Interférence mesurée du côté récepteur|

#### Effet

Plus la fréquence et la longueur augmentent, plus la diaphonie devient problématique.

#### Correction

- Torsadage serré des paires
    
- Câbles de meilleure catégorie (Cat 6A, 7, 8)
    
- Séparation physique des câbles réseau et électriques
    
:::info

Les câbles **FTP** réduisent surtout les **perturbations externes (EMI)**, tandis que la **diaphonie interne** est atténuée par le **torsadage** et les **blindages individuels** (STP / S-FTP).
:::

---

### À retenir
:::success
- La **fréquence** détermine la quantité d’informations transmises, mais une fréquence élevée réduit la portée.
     
- L’**atténuation** augmente avec la **distance** et la **qualité du support**.
    
- Les **EMI** proviennent de perturbations électriques externes, atténuées par le **blindage** et une bonne **mise à la terre**.
    
- La **diaphonie** est une interférence **interne** entre paires, réduite par le **torsadage** et les **câbles de catégorie supérieure**.  
:::
---

## 2.4 Équipements L1 — répéteurs et hubs

---

### Introduction

Les **équipements de couche 1 (physique)** assurent la **transmission du signal brut**, sans interpréter les données qu’il transporte.  
Ils travaillent uniquement sur les **bits**, sans se soucier d’adresses MAC ni de protocoles.

Les deux principaux dispositifs historiques de cette couche sont :

- le **répéteur**,
    
- le **hub (ou concentrateur)**.
    

Ces équipements ont joué un rôle clé avant l’apparition des commutateurs (couche 2).

---

### Le répéteur

Un **répéteur** sert à **amplifier ou régénérer un signal affaibli** pour lui permettre de parcourir de plus longues distances.

#### Principe

Lorsqu’un signal électrique ou optique s’atténue, le répéteur le **reçoit**, le **renforce** et le **réémet**.  
Il ne comprend pas les données : il agit uniquement sur la forme du signal.

#### Caractéristiques

- Fonctionne au niveau **1 du modèle OSI** (couche physique).
    
- N’a **aucune intelligence réseau** (ni adresse MAC, ni filtrage).
    
- Permet d’**étendre la portée** d’un lien Ethernet ou d’une liaison optique.
    
- Peut être intégré à d’autres dispositifs (ex. répéteur Wi-Fi).
    

#### Exemples d’usage

- **Répéteur Ethernet** : relie deux segments de câble RJ45 trop longs.
    
- **Répéteur optique** : régénère un faisceau lumineux sur des kilomètres.
    
- **Répéteur Wi-Fi** : prolonge la couverture d’un réseau sans fil existant.
    

:::info

Un répéteur **ne réduit pas les collisions**, il se contente de **répliquer le signal**.
:::

---

### Le hub (ou concentrateur)

Le **hub** est un **répéteur multiport**.  
Il reçoit un signal sur un port et le **renvoie sur tous les autres ports** du réseau local.

#### Principe

Lorsqu’un ordinateur envoie une trame, le hub la diffuse **vers toutes les machines connectées**.  
Chaque poste reçoit le signal, mais seul le destinataire légitime traite les données.

#### Caractéristiques

- Fonctionne en **couche 1 (physique)**.
    
- Ne comprend ni **adresses MAC**, ni **protocoles réseau**.
    
- Crée un **domaine de collision unique** :  
    si deux machines émettent en même temps → **collision**.
    
- La **bande passante** est partagée entre tous les ports.
    

|Type de hub|Description|
|---|---|
|**Passif**|Se contente de distribuer le signal sans le modifier.|
|**Actif**|Réamplifie le signal avant de le redistribuer.|

#### Limites

- Collisions fréquentes → baisse des performances.
    
- Pas de filtrage ni de gestion de trafic.
    
- Obsolète dans les réseaux modernes, remplacé par les **switchs** (couche 2).
    

:::warning
Les hubs sont désormais **déconseillés** : ils saturent vite le réseau et ne garantissent pas la confidentialité des échanges.
:::

---

### Notion de domaine de collision

Un **domaine de collision** correspond à une zone du réseau où plusieurs appareils partagent le même support de communication.  
Dans cette zone, une seule trame peut être transmise à la fois.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nv3U7q1P1ao?si=lGk5Swtfpjyr5LtZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Règles de base

|Équipement|Couche OSI|Domaine de collision|Domaine de diffusion|
|---|---|---|---|
|Répéteur|1|Unique|Unique|
|Hub|1|Unique|Unique|
|Switch|2|1 par port|Unique|
|Routeur|3|Isolé|Isolé|

:::info


Les collisions sont gérées par le protocole **CSMA/CD** (Carrier Sense Multiple Access / Collision Detection).  
Celui-ci écoute le support avant d’émettre, et réémet après un délai aléatoire en cas de collision.

**En savoir plus :** https://fr.wikipedia.org/wiki/Carrier_Sense_Multiple_Access_with_Collision_Detection
:::
---

### Transition vers la couche 2

Les **hubs** et **répéteurs** ont permis les premiers réseaux Ethernet,  
mais ils ont été remplacés par les **commutateurs (switchs)**,  
capables de :

- **identifier** les machines grâce à leur **adresse MAC**,
    
- **éviter les collisions**,
    
- et **filtrer intelligemment** le trafic.
    

C’est la prochaine étape : la **couche 2 (liaison)**.


---

### À retenir
:::success

 - Le **répéteur** régénère un signal affaibli sans l’interpréter.
     
 - Le **hub** diffuse le signal à **tous les ports**, ce qui crée un **domaine de collision unique**.
     
 - Ces équipements travaillent exclusivement en **couche 1 du modèle OSI**.
    
 - Les **switchs (couche 2)** ont remplacé les hubs, car ils isolent chaque port et suppriment les collisions.
:::

---

# 3 - Couche 2 - Liaison
## 3.1 Trame Ethernet et adresses MAC

---

### Introduction

La **couche 2 – liaison de données** est chargée de **transporter les données entre deux équipements directement connectés** sur un même réseau local (LAN).  
Elle encapsule les paquets IP reçus de la couche 3 dans des **trames Ethernet**, et utilise des **adresses physiques (MAC)** pour identifier les émetteurs et les destinataires.

Ethernet est aujourd’hui la technologie **standard** des réseaux locaux, qu’ils soient filaires ou sans fil (Wi-Fi utilise aussi une couche MAC comparable).

---

### Le rôle de la couche liaison

La couche liaison sert de **pont entre le monde logique (IP)** et le **support physique**.  
Elle assure la **préparation, la transmission et le contrôle** des trames sur le média.

Ses fonctions principales :

- **Encapsulation** des données (ajout d’une en-tête et d’une bande de contrôle)
    
- **Adressage MAC** pour identifier les machines sur le même réseau
    
- **Contrôle d’erreur** via le champ **FCS/CRC**
    
- **gestion des collisions**, (CSMA/CD)
    

:::info
Une trame Ethernet est l’**unité de base** de la communication sur un réseau local.
:::

---

### Structure d’une trame Ethernet (Ethernet II)
<iframe width="560" height="315" src="https://www.youtube.com/embed/NNtotn5AG2U?si=ZOU-1rWPDrrmUiEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
La trame Ethernet encapsule les données à transmettre sur le réseau local.  
Elle contient plusieurs champs bien définis :

|Champ|Taille|Description|
|---|---|---|
|**Préambule + SFD**|8 octets|Synchronisation du signal avant la trame|
|**Adresse MAC destination**|6 octets|Identifie le destinataire sur le LAN|
|**Adresse MAC source**|6 octets|Identifie l’émetteur|
|**Type (EtherType)**|2 octets|Indique le protocole encapsulé (ex. IPv4, IPv6, ARP)|
|**Données**|46 à 1500 octets|Contient les données de la couche supérieure|
|**FCS / CRC**|4 octets|Contrôle d’erreur (Frame Check Sequence)|

:::info
Une trame Ethernet a une taille **minimale de 64 octets** et **maximale de 1518 octets** (hors VLAN).  
:::

![](https://hedgedoc.dawan.fr/uploads/e0f300dc-da60-41e2-b447-12b544627e58.png)


---

### Les adresses MAC

Chaque interface réseau (carte Ethernet, Wi-Fi, etc.) possède une **adresse MAC unique** (Media Access Control address), attribuée par le constructeur.  
Elle permet d’**identifier de manière physique** un périphérique sur un réseau local.
<iframe width="560" height="315" src="https://www.youtube.com/embed/7ln7oYIS-n0?si=aaYBsivQlPeIUiti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
#### Format

- Taille : **48 bits** (6 octets)
    
- Représentation : **hexadécimale**, séparée par des tirets ou deux-points  
    → exemple : `C8-5A-CF-06-8C-67` ou `C8:5A:CF:06:8C:67`
    

#### Structure interne

|Partie|Taille|Signification|
|---|---|---|
|**OUI (Organizationally Unique Identifier)**|3 octets|Identifie le constructeur (attribué par l’IEEE)|
|**NIC (Network Interface Controller)**|3 octets|Numéro unique de la carte|

:::info
L’adresse MAC est souvent imprimée sur la carte réseau, mais peut être **modifiée par logiciel**.
:::

---

#### Types d’adresses MAC

|Type|Description|Exemple|
|---|---|---|
|**Unicast**|Communication de **1 vers 1** : une machine spécifique|`C8:5A:CF:06:8C:67`|
|**Broadcast**|Communication de **1 vers tous** les équipements du LAN|`FF:FF:FF:FF:FF:FF`|
|**Multicast**|Communication de **1 vers un groupe** de machines|`01:00:5E:xx:xx:xx`|

---

#### Connaitre son adresse mac
Linux
```
ip a show
```
Windows (powershell)
```
getmac
Get-NetAdapter
ipconfig /all
```


### Correspondance IP ↔ MAC : le protocole ARP

Lorsqu’un ordinateur doit envoyer un paquet IP sur un réseau local, il doit connaître **l’adresse MAC du destinataire**.  
S’il ne la connaît pas, il utilise le protocole **ARP (Address Resolution Protocol)**.

#### Exemple :

1. Le PC 192.168.1.10 veut contacter 192.168.1.20.
    
2. Il envoie une requête ARP en **broadcast** :  
    “Qui a 192.168.1.20 ? Donne-moi ton adresse MAC.”
    
3. Le PC 192.168.1.20 répond en **unicast** avec sa MAC.
    
4. L’émetteur stocke l’association IP ↔ MAC dans sa **table ARP**.
    

:::info

ARP est souvent considéré comme un protocole **entre les couches 2 et 3** :  
il relie la logique IP à l’adressage physique Ethernet.
:::

---

### Comparaison avec le niveau physique

|Niveau|PDU (Unité de donnée)|Fonction principale|Exemple d’équipement|
|---|---|---|---|
|**Couche 1 – Physique**|Bit|Transmission du signal brut|Répéteur, hub|
|**Couche 2 – Liaison**|Trame|Acheminement local via MAC|Switch, carte réseau|

---

### À retenir
:::success

- La **trame Ethernet** est l’unité de base de la communication sur un LAN.
     
- Chaque **interface réseau** possède une **adresse MAC unique** de 48 bits.
     
- Les trames contiennent **MAC source, MAC destination, protocole (EtherType)** et **CRC**.
     
- Trois types d’adressage existent : **unicast, multicast et broadcast**.
     
- Le **protocole ARP** établit la correspondance entre **adresse IP et adresse MAC**.
:::     

---

## 3.2 Commutateurs (switch)
---

### Introduction

Le **commutateur** (ou **switch**) est un **équipement de couche 2** du modèle OSI.  
Il relie plusieurs machines dans un même **réseau local (LAN)** et permet de faire transiter les trames **uniquement vers leur destinataire**.  
Contrairement au **hub**, le switch **analyse** et **filtre** les trames grâce aux **adresses MAC**.

:::info
Le switch travaille **trame par trame**, sans se soucier des adresses IP : il agit uniquement sur les adresses **physiques (MAC)**.
:::

---

### Fonctionnement général

Quand une trame arrive sur un port du switch :

1. Le switch **lit l’adresse MAC source** de la trame.
    
2. Il **enregistre l’association** entre cette adresse MAC et le port où elle a été reçue.
    
3. Si le switch connaît déjà le port correspondant à la **MAC de destination**, il **envoie la trame uniquement sur ce port**.
    
4. Sinon, il **diffuse** la trame sur tous les ports (**flooding**), comme un hub.
    

Ce mécanisme est appelé **apprentissage MAC (MAC learning)**.

:::info


Chaque switch possède une **table CAM** (_Content Addressable Memory_), souvent appelée **table MAC**, qui mémorise les couples :
 
```
Adresse MAC ↔ Port physique
```
:::

---

### Exemple d’apprentissage MAC

Prenons un petit réseau :

|Équipement|Adresse MAC|Port du switch|
|---|---|---|
|PC1|00:11:22:33:44:55|Port 1|
|PC2|66:77:88:99:AA:BB|Port 2|
|PC3|CC:DD:EE:FF:00:11|Port 3|

#### Étapes :

1. **PC1** envoie une trame vers **PC2**.  
    → Le switch apprend que `00:11:22:33:44:55` est sur **Port 1**.
    
2. Ne connaissant pas encore la MAC de **PC2**, il **diffuse la trame sur tous les ports**.
    
3. **PC2** répond à **PC1** → le switch apprend que `66:77:88:99:AA:BB` est sur **Port 2**.
    
4. À partir de là, les trames entre **PC1** et **PC2** passent **directement** d’un port à l’autre.
    

---

### Table MAC (CAM)

Une **table MAC** contient les correspondances entre les adresses MAC connues et les ports du switch.  
Elle est **dynamique** et se vide automatiquement au bout d’un certain temps d’inactivité (typiquement 300 secondes).

|Adresse MAC|Port|Âge (sec)|
|---|---|---|
|00:11:22:33:44:55|1|12|
|66:77:88:99:AA:BB|2|4|
|CC:DD:EE:FF:00:11|3|50|

:::info
Certains switchs permettent aussi de configurer des **entrées statiques**, non supprimées automatiquement.
:::

---

### Domaine de collision et domaine de diffusion

Un switch **supprime les collisions**, mais pas les diffusions.

|Type de domaine|Description|Exemple|
|---|---|---|
|**Domaine de collision**|Ensemble d’équipements partageant le même support physique → collisions possibles|Chaque **port** du switch est un **domaine distinct**|
|**Domaine de diffusion**|Ensemble d’équipements recevant les trames **broadcast**|Tous les ports du switch sont dans **le même domaine de diffusion**|

:::warning
Un switch **ne bloque pas** les diffusions (comme les trames ARP ou DHCP).  
Seul un **routeur (couche 3)** peut isoler les domaines de diffusion.
:::

---

### Comparatif : Hub vs Switch

|Fonction|**Hub**|**Switch**|
|---|---|---|
|Couche OSI|1 (Physique)|2 (Liaison)|
|Traitement|Répète le signal sur tous les ports|Envoie uniquement sur le port du destinataire|
|Table d’adresses|Aucune|Table MAC dynamique|
|Domaine de collision|Unique|1 par port|
|Domaine de diffusion|Unique|Unique|
|Débit partagé|Oui|Non (bande passante par port)|

:::info
Le passage du **hub** au **switch** a permis aux réseaux Ethernet de devenir **plus rapides, plus fiables et sans collisions**.
:::

---

### À retenir
:::success


- Le **switch** est un équipement de **couche 2** (liaison).
     
- Il apprend les **adresses MAC** de chaque machine connectée.
     
- Il enregistre les correspondances **MAC ↔ Port** dans une **table CAM**.
     
- Il **élimine les collisions**, mais pas les diffusions.
     
- Il remplace totalement le **hub** dans les réseaux modernes.
     
:::

---

## 3.3 Spanning Tree

---

### Introduction

Dans un réseau **avec plusieurs switchs**, on crée parfois des **boucles** (chemins redondants).  
Ces boucles peuvent provoquer :

- des **tempêtes de diffusion**,
    
- un **saturage du réseau**,
    
- et parfois une **panne complète** du LAN.
    

Le protocole **Spanning Tree Protocol (STP)** a été inventé pour **détecter et bloquer automatiquement les boucles**.

---

### Principe du STP

Le **STP** analyse la topologie du réseau et **désactive temporairement certains liens** pour qu’il n’existe **qu’un seul chemin actif** entre deux switchs.

- Si un lien actif tombe en panne → un lien bloqué est **réactivé automatiquement**.
    
- Résultat : le réseau reste **fiable** et **sans boucle**.
    


:::info
STP = **tolérance de panne** sans boucle réseau.
:::

---

### RSTP : version rapide

Le protocole **RSTP (Rapid Spanning Tree Protocol)** est une **évolution du STP classique**.  
Il effectue la même tâche, mais beaucoup plus rapidement :

- STP : plusieurs secondes pour recalculer la topologie.
    
- RSTP : **moins d’une seconde** en général.
    

:::info
Aujourd’hui, **RSTP (IEEE 802.1w)** est utilisé par défaut sur la majorité des switchs modernes.
:::

---

### À retenir
:::success
|Protocole|Rôle|Temps de convergence|Utilisation actuelle|
|---|---|---|---|
|**STP**|Empêche les boucles réseau|Lent (jusqu’à 30 s)|Ancien|
|**RSTP**|Empêche les boucles + réagit vite|Rapide (< 1 s)|Standard actuel|

Le **Spanning Tree** n’améliore pas la vitesse du réseau, il **assure sa stabilité** en cas de lien redondant.
:::

---

## Normes & Protocoles de la couche 2
- Le **groupe IEEE 802** définit **toutes les normes réseau locales** (LAN, WLAN, WPAN, WMAN).
    
- Chaque sous-groupe (802.1, 802.3, 802.11, etc.) gère **un domaine précis**.
    
- La couche **liaison (2)** concentre la majorité des **normes 802**, car c’est là que se gèrent :
    
    - le **format des trames**,
        
    - la **segmentation VLAN**,
        
    - la **sécurité et la découverte**,
        
    - et les **protocoles sans-fil**.

[IEEE 802 — Wikipédia](https://fr.wikipedia.org/wiki/IEEE_802)
 
 ---
 
|**Norme IEEE**|**Protocole / Nom**|**Catégorie**|**Rôle / Description**|
|:--|:--|:--|:--|
|**802.3**|Ethernet|🔵 Filaire|Définit le format des trames Ethernet et la transmission sur câble cuivre ou fibre.|
|**802.3**|CSMA/CD|🔵 Filaire|Ancienne méthode d’accès pour éviter les collisions (remplacée par le full-duplex).|
|**802.3ad**|LACP|🔵 Filaire|Agrège plusieurs liens physiques en un seul lien logique (port-channel).|
|**802.1Q**|VLAN|🔵 Filaire|Segmente logiquement un réseau local en plusieurs sous-réseaux isolés.|
|**802.1D / 802.1w**|STP / RSTP|🟡 Gestion|Empêche les boucles dans les réseaux à commutation redondante.|
|**802.1AB**|LLDP|🟡 Gestion|Découvre automatiquement les équipements voisins (standard multi-constructeur).|
|—|CDP|🟡 Gestion|Découverte propriétaire Cisco (similaire à LLDP).|
|**802.11**|Wi-Fi (WLAN)|🟢 Sans-fil|Communication radio locale (couches 1 et 2).|
|**802.11i**|WPA / WPA2 / WPA3|🔴 Sécurité|Chiffre et authentifie les connexions Wi-Fi.|
|**802.1X**|EAP / RADIUS|🔴 Sécurité|Authentification réseau (via serveur RADIUS).|

---

###  Famille IEEE 802

|**Famille**|**Nom**|**Exemples clés**|**Domaine principal**|
|:--|:--|:--|:--|
|**802.1**|Bridging, VLAN, Security|VLAN, STP, LLDP, 802.1X|🟡 Gestion & sécurité|
|**802.3**|Ethernet|Ethernet, LACP|🔵 Réseaux filaires|
|**802.11**|WLAN|Wi-Fi (a/b/g/n/ac/ax), WPA3|🟢 Réseaux sans-fil|
|**802.15**|WPAN|Bluetooth, Zigbee|🟢 Courte portée / IoT|

---

---

# 4. Couche 3 — Réseau

## 4.1 Adressage IPv4 et classes d’adresses

---

### Introduction

La couche **réseau** (couche 3 du modèle OSI) permet le **transfert des données entre plusieurs réseaux** à travers des équipements appelés **routeurs**.  
Elle repose principalement sur le **protocole IP (Internet Protocol)**, qui définit :

- comment les machines sont **adressées** (IP source/destination),
    
- comment les paquets sont **acheminés** (routage),
    
- et comment les erreurs sont **signalées** (ICMP).
    

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/Oc7Ts8tVjyE?si=2ihFNyLOqyz5AVa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

### Structure d’une adresse IPv4

Une **adresse IPv4** est composée de **32 bits**, généralement notée en **décimal pointé** :

```
192.168.10.25
```

Chaque partie (appelée _octet_) représente 8 bits :

```
11000000.10101000.00001010.00011001
```

Soit :

- 4 octets de 0 à 255
    
- Une **partie réseau** (Network ID)
    
- Une **partie hôte** (Host ID)
    

---

### Notion de masque de sous-réseau

Le **masque de sous-réseau** permet de séparer la partie **réseau** et la partie **hôte**.

Exemple :

```
Adresse IP : 192.168.1.10  
Masque : 255.255.255.0
```

→ Les 24 premiers bits servent à identifier le réseau,  
→ Les 8 derniers à identifier les machines du réseau.

:::info
En notation **CIDR**, le même masque s’écrit `/24`  
 → 192.168.1.10/24
:::

---

### Les classes d’adresses IPv4 (historiques)

À l’origine, les adresses étaient réparties en **classes** selon la taille des réseaux.

|Classe|Plage d’adresses|Octets réseau|Utilisation typique|
|---|---|---|---|
|**A**|1.0.0.0 – 126.255.255.255|1|Très grands réseaux|
|**B**|128.0.0.0 – 191.255.255.255|2|Réseaux moyens|
|**C**|192.0.0.0 – 223.255.255.255|3|Petits réseaux|
|**D**|224.0.0.0 – 239.255.255.255|—|Multicast|
|**E**|240.0.0.0 – 255.255.255.255|—|Réservé (recherche)|

:::info
Les classes sont aujourd’hui remplacées par le **CIDR (Classless Inter-Domain Routing)**, mais la logique reste utile pour comprendre la structure des adresses.
:::

---

### Adresses spéciales

|Type|Exemple|Description|
|---|---|---|
|**Adresse réseau**|192.168.1.0|Identifie le réseau lui-même|
|**Adresse broadcast**|192.168.1.255|Permet d’envoyer à tous les hôtes du réseau|
|**Adresse de boucle locale**|127.0.0.1|“localhost” (tests internes)|
|**Adresse privée**|10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16|Utilisées dans les réseaux internes|
|**Adresse publique**|attribuée par un FAI|Routable sur Internet|
|**Adresse APIPA**|169.254.1.0 - 169.254.254.255|Attribuée si aucun serveur DHCP|

---

### Exemples concrets

|Hôte|Adresse IP|Masque|Réseau|Broadcast|Hôtes possibles|
|---|---|---|---|---|---|
|PC1|192.168.10.5|255.255.255.0|192.168.10.0|192.168.10.255|254|
|PC2|172.16.4.2|255.255.0.0|172.16.0.0|172.16.255.255|65 534|

---

### À retenir
:::success
- IPv4 = **32 bits**, séparés en **réseau / hôte**. 
- Le **masque** indique combien de bits appartiennent au réseau.
- Les **classes A/B/C** sont historiques, remplacées par le **CIDR**. 
- Certaines plages sont **privées** (non routées sur Internet).  
- Les adresses **réseau** et **broadcast** ne sont pas attribuables aux hôtes. 
:::

---

## 4.2 CIDR et sous-réseaux (VLSM)

---

### Introduction

Le **CIDR (Classless Inter-Domain Routing)** a remplacé l’ancien système par classes (A, B, C).  
Il permet une **utilisation plus souple des adresses IP** en découpant les réseaux selon les besoins réels.

Au lieu de travailler par classes fixes, on choisit directement **le nombre de bits pour la partie réseau**.  
Exemple :

```
192.168.10.0/26 → 26 bits pour le réseau, 6 bits pour les hôtes.
```

---

### 1. Le principe du CIDR

Le CIDR exprime la taille du réseau avec un **suffixe /n**, où _n_ est le nombre de bits du masque réseau.

|Notation CIDR|Masque décimal|Nombre d’hôtes possibles|
|---|---|---|
|/24|255.255.255.0|254|
|/25|255.255.255.128|126|
|/26|255.255.255.192|62|
|/27|255.255.255.224|30|
|/28|255.255.255.240|14|
|/29|255.255.255.248|6|
|/30|255.255.255.252|2|

:::info
Le nombre d’hôtes = **2ⁿ - 2**, car on exclut l’adresse réseau et l’adresse broadcast.
:::

---

### 2. Exemple de découpage de réseau

Prenons le réseau **192.168.10.0/24**, soit 256 adresses au total.

On veut créer **4 sous-réseaux** de taille égale.

#### Étapes :

1. /24 = 8 bits pour les hôtes  
    On doit emprunter 2 bits pour créer 4 sous-réseaux :  
    2² = 4 → nouveau masque = /26
    
2. Calcul des sous-réseaux :
    
    ```
    Incrément = 256 - 192 = 64
    ```
    

|Sous-réseau|Plage d’adresses|Broadcast|Hôtes possibles|
|---|---|---|---|
|192.168.10.0/26|.1 – .62|.63|62|
|192.168.10.64/26|.65 – .126|.127|62|
|192.168.10.128/26|.129 – .190|.191|62|
|192.168.10.192/26|.193 – .254|.255|62|

---

### 3. VLSM — Variable Length Subnet Masking

Le **VLSM** (sous-réseautage à longueur variable) permet de **créer des sous-réseaux de tailles différentes** selon les besoins.  
Il s’agit du même principe que le CIDR, appliqué **à l’intérieur d’un réseau**.

Exemple :  
Tu disposes de **192.168.10.0/24**, et tu veux :

- 1 réseau pour 100 hôtes
    
- 1 réseau pour 50 hôtes
    
- 1 réseau pour 25 hôtes
    
- 1 réseau pour 10 hôtes
    

#### Étapes :

1. Trier les besoins du plus grand au plus petit
    
2. Allouer les plages progressivement
    

|Réseau|Besoin|Masque CIDR|Hôtes réels|Plage attribuée|
|---|---|---|---|---|
|1|100|/25|126|192.168.10.0 – .127|
|2|50|/26|62|192.168.10.128 – .191|
|3|25|/27|30|192.168.10.192 – .223|
|4|10|/28|14|192.168.10.224 – .239|

---

### 4. Avantages du CIDR et du VLSM

- Utilisation **optimale** des adresses IP
    
- Permet d’éviter le gaspillage
    

:::danger
En pratique, dans les entreprises, on privilégie souvent des réseaux en /24 (ou parfois /16) car ils sont plus simples à gérer et à maintenir.
:::    

---

### À retenir
:::success


- Le **CIDR** exprime la taille du réseau via la notation /n.
    
- Le **VLSM** permet d’adapter la taille des sous-réseaux aux besoins réels.
    
- Le calcul repose sur le nombre de bits empruntés à la partie hôte.
    
- Le **sous-réseautage** est essentiel pour séparer les VLANs, les services ou les sites distants.
:::

---

## 4.3 Adresses Unicast, Broadcast et Multicast

---

### Introduction

Une adresse IP n’a de sens que si l’on sait **à qui** elle s’adresse.  
Selon le contexte, un paquet IP peut être envoyé à **un seul hôte**, **tous les hôtes d’un réseau**, ou **un groupe spécifique d’hôtes**.  
Ces trois modes d’adressage sont : **unicast**, **broadcast** et **multicast**.

---

### L’adressage Unicast

L’**unicast** correspond à une **communication directe** entre **deux machines**.

Exemple :

```
192.168.1.10  →  192.168.1.20
```

- Chaque machine possède une **adresse IP unique** sur le réseau.
    
- Le routeur ou le switch choisit **un seul chemin** vers la destination.
    
- C’est le mode d’adressage le plus courant (HTTP, SSH, DNS, etc.).
    

:::info
Tous les protocoles orientés **client/serveur** (web, mail, etc.) reposent sur l’unicast.
:::
---

### L’adressage Broadcast

Le **broadcast** envoie le paquet à **tous les hôtes** d’un réseau local.  
Il est utilisé pour la **découverte**, la **configuration automatique** ou les **annonces de service**.

#### Types de broadcast :

|Type|Adresse|Description|
|---|---|---|
|**Local (limité)**|255.255.255.255|Non routable, reste dans le réseau local.|
|**Direct (réseau)**|ex. 192.168.1.255|Spécifique à un sous-réseau donné (/24 ici).|

#### Exemples d’usage :

- **ARP Request** (Qui possède 192.168.1.10 ?)
    
- **DHCP Discover** (Je cherche un serveur DHCP)
    
- **NetBIOS / SMB** (découverte de partages Windows)
    

:::info
Les **routeurs bloquent** les paquets broadcast pour éviter les tempêtes de diffusion.
:::

---

### L’adressage Multicast

Le **multicast** permet d’envoyer un paquet à **un groupe spécifique d’hôtes** inscrits à une même adresse.  
C’est une solution intermédiaire entre l’unicast et le broadcast.

#### Caractéristiques :

- Un seul flux est envoyé par la source.
    
- Les routeurs répliquent le trafic uniquement vers les segments où se trouvent des membres du groupe.
    
- Permet de réduire la bande passante (vidéoconférence, streaming, etc.).
    

|Protocole|Utilisation|
|---|---|
|**IGMP (IPv4)**|Gestion des abonnements multicast|
|**MLD (IPv6)**|Équivalent pour IPv6|
|**PIM / DVMRP**|Routage multicast sur les routeurs|

#### Plage d’adresses IPv4 multicast :

```
224.0.0.0 → 239.255.255.255
```

- 224.0.0.0/24 : adresses **réservées aux protocoles locaux**
    
- 239.0.0.0/8 : adresses **multicast administratives (privées)**
    

:::info
Le multicast est très utilisé pour la **diffusion de flux audio/vidéo**, la **visioconférence** ou les **mises à jour simultanées**.
:::

---

### Comparatif des modes d’adressage

|Type|Cible|Routable|Exemple d’usage|
|---|---|---|---|
|**Unicast**|Un seul hôte|✅ Oui|Connexion client/serveur|
|**Broadcast**|Tous les hôtes d’un réseau local|❌ Non|ARP, DHCP|
|**Multicast**|Groupe d’hôtes abonnés|✅ Oui|Streaming, visioconférence|

---
:::info
**Liens externe**
- https://www.it-connect.fr/broadcast-unicast-multicast-et-anycast-pour-les-debutants/
:::

---

### À retenir
:::success
- **Unicast** : communication directe entre deux hôtes (le plus fréquent).
    
- **Broadcast** : envoi vers **tous** les hôtes du réseau local.
    
- **Multicast** : envoi vers un **groupe spécifique**, optimisant la bande passante.
    
- Les **routeurs bloquent les broadcasts**, mais peuvent relayer le multicast si configurés.
::: 

## 4.4 Protocole ARP

---

### Introduction

Le **protocole ARP (Address Resolution Protocol)** permet d’associer une **adresse IP** (couche 3) à une **adresse MAC** (couche 2).  
Il est essentiel pour que deux machines d’un même **réseau local** puissent communiquer.

:::info
ARP fait le lien entre la **couche Liaison (2)** et la **couche Réseau (3)** du modèle OSI.
:::


---

### Fonctionnement

1. Lorsqu’un poste veut contacter une autre machine, il consulte son **cache ARP**.
    
2. Si l’adresse MAC n’est pas connue, il envoie une **requête ARP en broadcast** :  
    « Qui possède 192.168.1.20 ? Répondez à 192.168.1.10 ».
    
3. Le destinataire répond en **unicast** avec son adresse MAC.
    
4. Le poste enregistre la correspondance IP ↔ MAC dans son **cache local**.
    

---

### 2. Structure simplifiée d’une trame ARP

|Champ|Rôle|
|---|---|
|Type matériel|Identifie le support (Ethernet = 1)|
|Type protocole|Généralement IPv4 (0x0800)|
|Code opération|1 = Requête / 2 = Réponse|
|Adresse source|IP + MAC de l’émetteur|
|Adresse cible|IP + MAC du destinataire|


---

### 3. Cache ARP

Chaque machine conserve un **cache ARP**, contenant les associations IP/MAC découvertes récemment.  
Ces entrées expirent automatiquement au bout de quelques minutes.

:::info
Le cache ARP évite d’envoyer une requête à chaque communication.
:::

---
#### Affiche le cache ARP
Windows et Linux
```
arp -a
```


### 4. Sécurité et limites

Le protocole ARP ne vérifie **aucune identité** : toute réponse reçue est acceptée.  
Cela rend possibles certaines attaques :

|Attaque|Effet|
|---|---|
|**ARP Spoofing**|Détourne le trafic vers une machine malveillante|
|**Man-in-the-Middle (MITM)**|Permet d’intercepter ou modifier les échanges|

:::info
Pour limiter les risques : définir des **entrées ARP statiques** ou utiliser des **outils de détection**.
:::

---

### À retenir
:::success
- ARP traduit les **adresses IP en adresses MAC**.
- Utilise un **broadcast** pour la requête et un **unicast** pour la réponse.
- Les associations sont stockées dans un **cache temporaire**.
- Protocole simple mais **non sécurisé**, sujet au **spoofing**.
::: 

---

## 4.5 Structure d’un paquet IP

---

### Introduction

Le **paquet IP** est l’unité fondamentale de transport à la **couche Réseau (3)** du modèle OSI.  
Il contient les **informations nécessaires à l’acheminement** des données entre deux hôtes sur un réseau, indépendamment du support physique ou du protocole de transport utilisé.

:::info
IP ne garantit **ni la livraison**, **ni l’ordre**, **ni la fiabilité** : ces rôles sont assurés par la couche **Transport** (TCP/UDP).
:::

---

### Composition générale

Un paquet IP se compose de deux parties principales :

|Partie|Description|
|---|---|
|**En-tête (Header)**|Contient les informations de routage et de contrôle|
|**Données (Payload)**|Contient les données du protocole supérieur (TCP, UDP, ICMP…)|

---

### Champs principaux de l’en-tête IPv4
![](https://hedgedoc.dawan.fr/uploads/5fc41847-9f5b-472b-ab92-62b667a0a3b6.png)


|Champ|Rôle|
|---|---|
|**Version**|Indique IPv4 ou IPv6|
|**IHL** (Header Length)|Taille de l’en-tête|
|**Type of Service (ToS)**|Priorité / Qualité de service|
|**Total Length**|Taille totale du paquet|
|**Identification / Flags / Fragment Offset**|Gestion de la fragmentation|
|**TTL (Time To Live)**|Nombre de sauts maximum avant suppression|
|**Protocole**|Indique le protocole de couche supérieure (TCP=6, UDP=17, ICMP=1)|
|**Checksum**|Vérifie l’intégrité de l’en-tête|
|**Adresse IP Source**|Adresse d’origine|
|**Adresse IP Destination**|Adresse de destination|

:::info
La **fragmentation IP** permet de découper un paquet trop grand pour la MTU du lien.

- https://www.malekal.com/quelle-est-la-structure-paquet-tcp-ip

:::

---

### 3. Taille et fragmentation

- La taille maximale d’un paquet IP est de **65 535 octets**.
    
- Si un lien ne peut pas transporter un paquet entier, il est **fragmenté**.
    
- Chaque fragment conserve l’adresse source et destination, et est réassemblé à l’arrivée.
    

:::info
Les routeurs modernes évitent la fragmentation grâce au [**Path MTU Discovery**](https://fr.wikipedia.org/wiki/Path_MTU_discovery).
:::

---

### 4. Identification du protocole supérieur

Le champ **“Protocol”** de l’en-tête IP indique le contenu transporté :

|Valeur|Protocole|Exemple|
|---|---|---|
|1|ICMP|Ping, Traceroute|
|6|TCP|HTTP, SSH|
|17|UDP|DNS, DHCP|

---

### À retenir
:::success


- Un **paquet IP** contient un **en-tête** (informations de routage) et des **données**.
    
- Le champ **TTL** évite les boucles de routage.
    
- Le champ **Protocole** indique le contenu (TCP, UDP, ICMP…).
    
- **IP n’assure pas la fiabilité** : il transporte uniquement les paquets.
:::

## 4.6 ICMP - Ping et Traceroute

---

### Introduction

Le protocole **ICMP (Internet Control Message Protocol)** est utilisé pour **transmettre des messages de contrôle et d’erreur** au sein du réseau IP.  
Il ne transporte pas de données applicatives, mais sert à **diagnostiquer** et **signaler** des problèmes de communication.

:::info
ICMP fonctionne **au-dessus d’IP**, mais est considéré comme faisant partie de la **couche Réseau (3)**.
:::

---

### Rôle d’ICMP

ICMP permet de :

- Signaler des erreurs de transmission (destination injoignable, TTL expiré, etc.)   
- Vérifier la connectivité entre deux hôtes (commande `ping`)  
- Tester le chemin parcouru par un paquet (commande `traceroute`)
    
---

### Types de messages ICMP (IPv4)

|Type|Nom du message|Utilisation|
|---|---|---|
|0|Echo Reply|Réponse à une requête Ping|
|3|Destination Unreachable|Hôte, port ou réseau inaccessible|
|5|Redirect|Indique un meilleur routeur|
|8|Echo Request|Requête Ping|
|11|Time Exceeded|TTL expiré (utilisé par Traceroute)|

:::info
Chaque message ICMP comprend un **Type**, un **Code** (détail de l’erreur) et un **Checksum**.
:::

---

### Outils de diagnostic

#### `ping`

- Envoie des **requêtes ICMP Echo** à une destination.  
- Permet de vérifier la **disponibilité** d’un hôte et la **latence** du réseau.
    

Exemples :

```bash
ping 8.8.8.8        # Linux
```

```powershell
ping 8.8.8.8        
Test-Connection -ComputerName 8.8.8.8 -Count 4
```

#### `traceroute` / `tracert`

- Envoie des paquets avec un **TTL croissant** pour identifier chaque routeur intermédiaire.
    
- Permet de visualiser le **chemin emprunté** jusqu’à la destination.
    

Exemples :

```bash
traceroute google.com
```

```powershell
tracert google.com
Test-NetConnection -ComputerName google.com -TraceRoute
```

---

### ICMP et sécurité

Certains administrateurs bloquent ICMP pour des raisons de sécurité (ex. éviter la découverte réseau).  
Cependant, un blocage complet empêche aussi le diagnostic des pannes.

:::warning
Le **ping bloqué** ne signifie pas forcément que la machine est éteinte — seulement que **ICMP est filtré**.
:::

---

### À retenir
:::success
- ICMP sert à **signaler des erreurs** et à **tester la connectivité**.
    
- `ping` utilise **Echo Request / Reply**.
    
- `traceroute` exploite **TTL et Time Exceeded**.
    
- ICMP fait partie intégrante du **diagnostic réseau**.
    
- Trop le filtrer empêche de **détecter les problèmes de routage**.
:::

## 4.7 Routage IP - Principe et table de routage

---

### Introduction

Le **routage IP** permet à un paquet de passer d’un **réseau à un autre**.  
Chaque routeur décide du **prochain saut** à effectuer pour atteindre la destination.

:::info
Le routage fonctionne à la **couche 3 (Réseau)** du modèle OSI.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/88JeRflty4s?si=DmNbXg7tfJD3AfsB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Principe général

Lorsqu’un hôte veut joindre une machine sur un autre réseau :

1. Il envoie le paquet à sa **passerelle par défaut**.
    
2. Le **routeur** consulte sa **table de routage**.
    
3. Il choisit le **meilleur chemin** vers la destination.
    
4. Le paquet passe de **routeur en routeur** jusqu’à l’hôte final.
    

---

### Table de routage

Une **table de routage** contient la liste des réseaux connus et comment les atteindre.

|Élément|Rôle|
|---|---|
|Destination|Réseau ou hôte à atteindre|
|Passerelle|Routeur suivant|
|Interface|Sortie réseau utilisée|
|Métrique|Priorité ou coût du chemin|

:::info
La **route par défaut (0.0.0.0/0)** est utilisée lorsque aucune autre route ne correspond.
:::

---

### Types de routes

|Type|Description|
|---|---|
|**Directe**|Réseau connecté à la machine|
|**Statique**|Définie manuellement par l’administrateur|
|**Dynamique**|Apprise via un protocole de routage (RIP, OSPF, etc.)|

---

### À retenir
:::success
- Le **routage IP** permet de relier plusieurs réseaux.
- Les décisions sont basées sur la **table de routage locale**.
- La **passerelle par défaut** sert de sortie du réseau local.
- Les routes peuvent être **directes**, **statiques** ou **dynamiques**.
:::

---

## 4.8 Routage dynamique

---

### Introduction

Le **routage** permet de déterminer le **chemin** que suivent les paquets IP pour atteindre leur destination.  
On distingue deux grandes approches : **statique** et **dynamique**.

:::info
Ces méthodes coexistent souvent dans les réseaux professionnels.
:::

---

### Routage statique

Le routage statique repose sur des **routes configurées manuellement** par l’administrateur.

**Avantages :**

- Simple à comprendre et à maîtriser
    
- Aucun échange de données entre routeurs
    

**Inconvénients :**

- Nécessite une mise à jour manuelle
    
- Peu adapté aux grands réseaux ou aux liens variables
    

:::info
Idéal pour les **petits réseaux** ou les **routes fixes** (ex. vers une DMZ ou un VPN).
:::

---

### Routage dynamique

Le routage dynamique permet aux routeurs d’**échanger automatiquement** leurs informations de routage grâce à des **protocoles dédiés**.

**Avantages :**

- Mise à jour automatique des routes
    
- Capacité d’adaptation aux changements du réseau
    

**Inconvénients :**

- Plus complexe à mettre en œuvre
    
- Consomme un peu de bande passante pour les échanges d’informations
    

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/XBPK-6zrLZ8?si=IUIKZOL6uKEk8uGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Principaux protocoles de routage dynamique

|Protocole|Type|Caractéristiques principales|
|---|---|---|
|**RIP** (Routing Information Protocol)|Distance vector|Simple, adapté aux petits réseaux, limité à 15 sauts|
|**OSPF** (Open Shortest Path First)|Link-state|Très utilisé, calcule le chemin le plus court avec Dijkstra|
|**EIGRP** (Cisco)|Hybride|Combine distance et état de lien, propriétaire Cisco|
|**BGP** (Border Gateway Protocol)|Inter-domaine|Utilisé entre fournisseurs d’accès à Internet|
|**IS-IS**|Link-state|Alternative à OSPF, surtout en réseaux opérateurs|

:::info
Les protocoles de **type “link-state”** (comme OSPF) sont plus rapides et plus précis que les protocoles **“distance vector”** (comme RIP).
:::

---

### À retenir
:::success
- **Statique** : manuel, simple, fiable mais rigide.
    
- **Dynamique** : automatique, adaptable mais plus complexe.
    
- Les protocoles dynamiques échangent régulièrement les **tables de routage**.
    
- OSPF et BGP sont les plus courants dans les réseaux professionnels.
:::

---
## 4.9 IPv6 – Introduction et principes

### Pourquoi IPv6 ?

Le protocole **IPv4** ne permet d’adresser qu’environ **4,3 milliards d’appareils**, un nombre désormais insuffisant.  
Pour répondre à la croissance d’Internet et des objets connectés, un nouveau protocole a été créé : **IPv6**.

### Caractéristiques principales

|Élément|IPv4|IPv6|
|---|---|---|
|Taille de l’adresse|32 bits|128 bits|
|Format|4 nombres décimaux séparés par des points|8 groupes hexadécimaux séparés par des deux-points|
|Exemple|192.168.1.1|2001:0db8:0000:0000:0000:ff00:0042:8329|
|Nombre d’adresses possibles|4,3 milliards|3,4 × 10³⁸ (quasi illimité)|

### Structure d’une adresse IPv6

Une adresse IPv6 est divisée en deux parties :

- **Préfixe de réseau** : identifie le réseau (souvent /64)
    
- **Identifiant d’interface** : identifie l’appareil sur ce réseau
    

Exemple :  
`2001:0db8:abcd:0012::1/64`

### Simplification d’écriture

- Les **zéros initiaux** peuvent être omis :  
    `2001:db8:abcd:12::1`
    
- Une **suite de zéros** peut être remplacée une seule fois par `::`.
    

### Avantages d’IPv6

- **Espace d’adressage énorme**, pas besoin de NAT,
    
- **Configuration automatique** (autoconfiguration SLAAC),
    
- **Meilleure sécurité native** (intégration d’IPSec),
    
- **Routage plus efficace** grâce à une table simplifiée.
    

### À retenir

- **IPv6** remplace progressivement IPv4 pour résoudre le manque d’adresses.
    
- Les adresses sont plus longues (128 bits) et permettent une configuration automatique.
    
- Il apporte plus de **sécurité**, de **souplesse** et de **pérennité** pour l’Internet du futur.

---

# 5 - Couche 4 - Transport
## 5.1 Rôle de la couche Transport

---

### Introduction

La **couche Transport** est la **quatrième couche du modèle OSI**.  
Son rôle est d’assurer une **communication fiable (ou non) entre les applications** qui s’exécutent sur des ordinateurs différents.

Alors que la **couche Réseau (3)** s’occupe du **chemin des paquets entre machines**,  
la couche Transport gère **le dialogue entre les programmes** eux-mêmes : navigateur, serveur web, messagerie, jeu en ligne…

:::info
Elle agit comme un **chef d’orchestre des échanges applicatifs**, en découpant, envoyant et réassemblant les données selon le protocole utilisé.
:::

---

### Les principales fonctions

1. **Segmentation et réassemblage**  
    Les données envoyées par une application sont trop grandes pour être transmises en une seule fois.  
    La couche Transport les découpe en **segments** (TCP) ou **datagrammes** (UDP).  
    À l’arrivée, ces morceaux sont remis dans le bon ordre.
    
2. **Multiplexage et démultiplexage**  
    Plusieurs applications peuvent utiliser la même carte réseau : chaque flux est identifié par un **numéro de port**.  
    Ainsi, le port 80 correspond à un serveur web, le 22 à SSH, etc.
    
3. **Fiabilité et contrôle de flux**  
    Avec certains protocoles (comme TCP), la couche Transport s’assure que les données arrivent bien, dans le bon ordre, sans perte ni doublon.  
    Elle peut aussi ralentir ou accélérer l’envoi selon la vitesse du destinataire.
    
4. **Détection d’erreurs**  
    Un **contrôle de somme (checksum)** permet de vérifier l’intégrité des segments reçus.
    

:::info
Sans la couche Transport, une application ne saurait pas **à qui** appartiennent les données reçues, ni **si elles sont complètes**.
:::

---

### Les deux grands types de transport

#### TCP — Transmission Control Protocol

- **Orienté connexion** : une “poignée de main” (3-way handshake) établit la session.
    
- **Fiable** : chaque segment reçu est confirmé (ACK).
    
- **Ordonné** : les paquets sont réassemblés dans l’ordre d’envoi.
    
- **Contrôle de flux** : évite la saturation du récepteur.
    

Exemples d’usage : **HTTP/HTTPS, SSH, SMTP, FTP…**

#### UDP — User Datagram Protocol

- **Sans connexion** : chaque message part sans attendre d’accusé de réception.
    
- **Aucune garantie** de livraison ni d’ordre.
    
- **Très léger et rapide**, idéal pour les applications temps réel.
    

Exemples d’usage : **DNS, DHCP, VoIP, jeux en ligne, streaming.**

:::info
UDP n’est pas “pire” que TCP : il est simplement **adapté à d’autres besoins** (latence minimale plutôt que fiabilité absolue).
:::

---

### Les numéros de ports

Chaque processus réseau communique via un **port**, c’est-à-dire un identifiant logique associé à un protocole et une application.

|Type de port|Plage|Exemples|
|---|---|---|
|**Well-Known**|0 – 1023|80 (HTTP), 443 (HTTPS), 22 (SSH), 25 (SMTP)|
|**Registered**|1024 – 49151|3306 (MySQL), 3389 (RDP)|
|**Dynamiques (éphémères)**|49152 – 65535|Ports choisis temporairement par le client|

Quand un client se connecte à un serveur :

- Le **serveur** écoute sur un port fixe (ex. 80).
    
- Le **client** ouvre un port dynamique (ex. 49821).
    
- Les deux ports forment une **connexion unique** identifiée par :  
    `IP_source:port_source → IP_destination:port_destination`.
    

---

### Observer la couche Transport

#### Sous Linux

```bash
ss -tuln
```

Affiche les **sockets** en écoute (t = TCP, u = UDP, l = listening, n = numéros plutôt que noms).  
C’est la commande moderne qui remplace `netstat`.

```bash
sudo netstat -antp
```

Ancienne commande toujours utile pour voir **les connexions actives** avec le PID du processus.

#### Sous PowerShell

```powershell
Get-NetTCPConnection
Get-NetUDPEndpoint
```

Ces cmdlets listent respectivement les connexions TCP et UDP ouvertes sur la machine.

:::info
En observant ces listes, on distingue facilement les **services serveurs** (en écoute sur un port fixe) et les **clients** (ports dynamiques).
:::

---

### Exemple concret

Quand tu ouvres ton navigateur :

1. Le navigateur demande à la couche Transport d’établir une **connexion TCP** vers le serveur web distant sur le **port 80** (ou 443).
    
2. Le serveur répond : la session est ouverte.
    
3. Les pages web sont découpées en segments, transmis, confirmés, puis réassemblés.
    
4. Une fois terminé, la connexion est fermée proprement.
    

---

### À retenir
:::success
- La **couche Transport** fournit une communication **de processus à processus**.
    
- Elle segmente les données, gère la **fiabilité** et les **ports**.
    
- **TCP** : fiable, ordonné, mais plus lent.
    
- **UDP** : rapide, léger, sans garantie de réception.
    
- Les **numéros de ports** permettent le **multiplexage** des communications simultanées.
    
- Les outils `ss`, `netstat`, `Get-NetTCPConnection` permettent d’observer cette activité.
:::   

---

## 5.2 Le protocole UDP

---

### Introduction

Le protocole **UDP (User Datagram Protocol)** est l’un des deux principaux protocoles de la couche Transport, avec TCP.  
Il a été conçu pour les communications qui doivent être **rapides**, même si cela implique **une perte possible de paquets**.

:::info
UDP ne cherche pas à garantir la livraison, il **envoie les données “tel quel”** : pas d’accusé de réception, pas de retransmission, pas de contrôle de flux.

C’est un protocole **léger, sans connexion**, souvent utilisé dans les services où **la vitesse prime sur la fiabilité absolue** (voix, vidéo, DNS...).
:::

---

### Fonctionnement général

UDP envoie des **datagrammes indépendants**.  
Chaque message contient toutes les informations nécessaires pour être livré, mais le protocole **ne vérifie pas s’il arrive bien à destination**.

1. L’application prépare un datagramme.
    
2. UDP y ajoute un petit en-tête (avec le port source et destination).
    
3. Le datagramme est transmis à la couche Réseau (IP).
    
4. Si un paquet est perdu, UDP ne le renvoie pas.
    

:::info
- UDP ne garde **aucun état de connexion** : chaque message est traité séparément.  

- Cela le rend extrêmement efficace pour les communications **courtes ou répétitives**.
:::

---

### Structure d’un datagramme UDP

Un datagramme UDP comporte seulement **4 champs dans son en-tête**, soit **8 octets** au total.

|Champ|Taille|Description|
|---|---|---|
|**Port source**|16 bits|Identifie le processus émetteur|
|**Port destination**|16 bits|Identifie le processus destinataire|
|**Longueur**|16 bits|Taille totale du datagramme (en-tête + données)|
|**Checksum**|16 bits|Contrôle d’intégrité (optionnel en IPv4, obligatoire en IPv6)|

:::info
Cette simplicité rend UDP plus rapide, car le routeur ou l’hôte n’a presque **aucun calcul à effectuer**.
:::

---

### UDP vs TCP — comparaison rapide

|Caractéristique|UDP|TCP|
|---|---|---|
|Connexion préalable|❌ Aucune|✅ Oui (3-way handshake)|
|Fiabilité|❌ Non garantie|✅ Garantie|
|Contrôle d’erreur / retransmission|❌ Non|✅ Oui|
|Ordre des paquets|❌ Non garanti|✅ Garanti|
|Charge réseau|Très faible|Plus élevée|
|Vitesse / latence|Très rapide|Plus lente|
|Usage typique|DNS, DHCP, VoIP, streaming|Web, mail, SSH, FTP|

:::info
- Un appel vocal ou une vidéo en direct **supporte la perte de quelques paquets** : mieux vaut une coupure d’un dixième de seconde que de bloquer toute la transmission.
     
- À l’inverse, pour un transfert de fichier, **chaque octet doit être reçu** → on choisit TCP.     
:::

---

### Cas d’usage typiques

UDP est privilégié dans les situations suivantes :

- **DNS (port 53)** : très petites requêtes et réponses rapides.
    
- **DHCP (ports 67/68)** : échanges brefs au démarrage d’une machine.
    
- **VoIP / visioconférence (port 5060 pour SIP)** : faible latence.
    
- **Streaming multimédia (ex : RTP)** : continuité du flux prioritaire sur la perfection.
    
- **Jeux en ligne** : échanges fréquents et tolérants à la perte.
    

:::info
Les applications critiques peuvent **reconstruire leur propre fiabilité** au-dessus d’UDP (exemple : le protocole QUIC de Google utilisé par HTTP/3).
:::

---

### Observer le trafic UDP

#### Sous Linux

Lister les sockets UDP à l’écoute :

```bash
ss -uln
```

ou bien :

```bash
sudo netstat -anu
```

Ces commandes affichent les **services UDP** actifs et leurs ports (par exemple : `:53` pour DNS).

#### Sous PowerShell

```powershell
Get-NetUDPEndpoint
```

Cette commande montre toutes les applications **en écoute sur UDP**.

#### Exemple pratique

```bash
nc -u 192.168.1.20 5000
```

Avec `-u`, **netcat** utilise UDP.  
C’est une manière simple de **tester un service UDP** ou d’envoyer des paquets entre deux machines.

:::info
Un **ping classique ne teste pas UDP**, car il utilise ICMP.  
Pour vérifier un service UDP, il faut utiliser `nc`, `nmap`, ou un outil applicatif.
:::

---

### Avantages et limites

**Avantages :**

- Très léger, sans négociation préalable.
    
- Idéal pour les flux continus (voix, vidéo, capteurs).
    
- Faible surcharge réseau et CPU.
    

**Limites :**

- Aucune garantie de livraison.
    
- Pas de contrôle d’ordre ni de congestion.
    
- Certaines applications doivent gérer les erreurs elles-mêmes.
    

---

### À retenir
:::success


- **UDP** = simplicité, rapidité, mais pas de garantie de réception.
    
- Utilisé dans les **communications temps réel** (voix, vidéo, jeux, DNS).
    
- En-tête minimal : 8 octets seulement.
    
- **Pas de connexion ni d’accusé de réception.**
    
- Pour observer ou tester UDP : `ss -uln`, `Get-NetUDPEndpoint`, `nc -u`.
:::

---

## 5.3 Le protocole TCP

---

### Introduction

Le **protocole TCP (Transmission Control Protocol)** est le pilier des communications fiables sur Internet.  
Contrairement à UDP, il garantit que **toutes les données arrivent à bon port**, dans le **bon ordre**, et **sans perte**.

:::info
TCP est **orienté connexion** : avant tout échange, les deux machines doivent établir un **canal logique** qui assure la fiabilité du transfert.
:::

C’est le protocole utilisé par la majorité des services réseau : **HTTP(S)**, **SSH**, **FTP**, **SMTP**, etc.

---

### Fonctionnement général

TCP fournit un **canal de communication fiable** entre deux hôtes grâce à plusieurs mécanismes internes :

1. **Établissement de la connexion** (handshake 3 étapes).
    
2. **Numérotation et accusés de réception (ACK)** pour chaque segment.
    
3. **Contrôle de flux** pour éviter de surcharger le destinataire.
    
4. **Contrôle de congestion** pour s’adapter à la charge du réseau.
    
5. **Fermeture propre** de la session à la fin de la communication.
    

:::info
On peut voir TCP comme un “**courrier suivi**” : chaque segment est numéroté, confirmé et livré dans l’ordre.
:::

---

### Établissement de la connexion — le “3-Way Handshake”

Avant de transmettre des données, TCP établit une **session bidirectionnelle** :

1. **SYN** → le client demande une connexion.
    
2. **SYN-ACK** → le serveur accepte et confirme la demande.
    
3. **ACK** → le client confirme à son tour.
    

```text
Client  →  Serveur :  SYN
Serveur →  Client   :  SYN + ACK
Client  →  Serveur :  ACK
```

Une fois cette étape terminée, la connexion est **ouverte** : les deux peuvent échanger des données de manière fiable.

:::info
Lorsqu’un navigateur ouvre une page web en HTTP, il envoie d’abord un **SYN** vers le port **80** du serveur avant d’échanger le contenu.
:::

---

### Structure d’un segment TCP

Un **segment TCP** comprend un en-tête détaillé contenant les informations nécessaires à la fiabilité :

|Champ|Taille|Description|
|---|---|---|
|**Port source / destination**|16 bits chacun|Identifient les applications émettrice et réceptrice|
|**Numéro de séquence**|32 bits|Indique la position du premier octet du segment|
|**Numéro d’acquittement (ACK)**|32 bits|Confirme la réception des données précédentes|
|**Offset / Flags / Fenêtre**|Variable|Gèrent la taille de fenêtre, les contrôles SYN, ACK, FIN, etc.|
|**Checksum**|16 bits|Vérifie l’intégrité du segment|
|**Options (MSS, Window Scale, etc.)**|Variable|Ajustent la performance et la taille de fenêtre|

:::info
TCP utilise des **numéros de séquence** pour assurer le **réassemblage dans le bon ordre** et détecter les pertes éventuelles.
:::

---

### Contrôle de flux et de congestion

#### Contrôle de flux (Flow Control)

Chaque machine annonce la taille de sa **fenêtre de réception**.  
Le destinataire peut dire : “je peux encore recevoir 10 000 octets”, ce qui évite de le saturer.

#### Contrôle de congestion

TCP adapte son rythme d’envoi selon l’état du réseau.  
En cas de perte ou de retard, il **ralentit automatiquement** pour éviter d’aggraver la congestion.

:::info
Ces deux mécanismes rendent TCP **autorégulé**, capable de s’adapter aux conditions du réseau en temps réel.
:::

---

### Fermeture de la connexion

Quand l’échange est terminé, chaque côté ferme la session avec un **échange en 4 étapes** :

1. **FIN** → demande de fermeture.
    
2. **ACK** → l’autre confirme.
    
3. L’autre côté envoie à son tour **FIN**, puis **ACK** final.
    

Cette séquence garantit que **toutes les données ont été reçues avant la déconnexion**.

---

### Observer TCP en action

#### Sous Linux

```bash
ss -tn
```

Affiche les connexions TCP actives (`t` = TCP, `n` = ports numériques).  
Les états possibles incluent :

- `LISTEN` : service en attente d’une connexion.
    
- `ESTABLISHED` : connexion active.
    
- `CLOSE_WAIT`, `TIME_WAIT` : fermeture en cours.
    

#### Sous PowerShell

```powershell
Get-NetTCPConnection
```

Permet de visualiser toutes les connexions TCP ouvertes et leur état (`Established`, `Listen`, etc.).

#### Exemple concret

```bash
curl -v http://example.com
```

L’option `-v` (verbose) affiche les **étapes TCP** de la connexion avant le transfert HTTP :  
`SYN`, `SYN-ACK`, `ACK` → connexion établie → envoi de la requête.

---

### Avantages et limites

**Avantages :**

- Fiabilité (ACK, retransmissions).
    
- Ordre garanti des données.
    
- Contrôle de flux et congestion intégrés.
    
- Parfait pour les échanges nécessitant intégrité et complétude.
    

**Limites :**

- Plus lent (handshake et surcharges).
    
- Moins adapté aux flux continus en temps réel.
    
- Nécessite davantage de ressources côté serveur.
    

---

### À retenir
:::success


- **TCP** établit une **connexion fiable** avant tout échange.
    
- Chaque segment est **numéroté, confirmé et réassemblé** dans l’ordre.
    
- Les mécanismes de **flux** et de **congestion** assurent la stabilité du réseau.
    
- Les états (`SYN`, `ACK`, `FIN`, etc.) décrivent la **vie d’une session TCP**.
    
- Les outils `ss -tn`, `Get-NetTCPConnection` ou `curl -v` permettent de l’observer facilement.
:::

---

## 5.4 Numéros de ports

---

### Introduction

Lorsqu’une machine échange des données sur le réseau, elle peut avoir **plusieurs applications** qui communiquent en même temps : navigateur web, client mail, mise à jour système, jeu en ligne, etc.  
Pour que le système sache **à quel programme** appartiennent les données reçues, la couche Transport utilise les **numéros de ports**.

:::info
Le **port** agit comme une **porte d’entrée logique** à l’intérieur d’une machine.  
C’est grâce à lui que les flux TCP et UDP peuvent cohabiter sans interférer.
:::

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/YSl6bordSh8?si=Js736dSG9DHgt6Me" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
### Le rôle des ports
---
Chaque communication réseau est identifiée par un couple :

```
Adresse IP + Numéro de port
```

- L’**adresse IP** identifie la **machine**.
    
- Le **port** identifie **l’application** au sein de cette machine.
    

Ainsi, deux programmes différents peuvent utiliser la même adresse IP, mais **des ports différents**.

Exemple :

```
192.168.1.10:22   → SSH
192.168.1.10:80   → Serveur web
192.168.1.10:3389 → Bureau à distance (RDP)
```

---

### Les plages de ports

Les ports sont des **nombres sur 16 bits**, donc compris entre **0 et 65535**.

|Plage|Nom|Utilisation|
|---|---|---|
|**0–1023**|Ports bien connus (well-known)|Services standards (HTTP, SSH, DNS...)|
|**1024–49151**|Ports enregistrés (registered)|Applications tierces (MySQL, RDP...)|
|**49152–65535**|Ports éphémères (dynamiques)|Choisis automatiquement par les clients|

:::info
Seuls les **processus privilégiés** (root/Administrateur) peuvent ouvrir des ports <1024.
:::

---

### Le multiplexage : plusieurs flux en parallèle

Le **multiplexage** permet à plusieurs communications d’exister en même temps sur la même carte réseau.

Chaque connexion TCP (ou flux UDP) est identifiée de manière unique par une **quadruplet** :

```
IP_source : Port_source → IP_destination : Port_destination
```

Exemple :

```
192.168.1.20:50312 → 172.217.20.14:443
192.168.1.20:50313 → 172.217.20.14:443
```

Ici, deux onglets du navigateur de la même machine contactent le **même serveur web** sur le **même port 443**,  
mais chacun a son propre **port source** (50312 et 50313).  
C’est ainsi que le système peut distinguer les flux.

:::info
Le **système d’exploitation** attribue automatiquement un **port éphémère** à chaque nouvelle connexion sortante.
:::

---

### Observer les ports ouverts et les connexions

#### Sous Linux

Afficher les ports TCP/UDP en écoute :

```bash
ss -tuln
```

- `t` = TCP
    
- `u` = UDP
    
- `l` = listening (en écoute)
    
- `n` = affichage numérique (pas de noms de services)
    

Exemple de résultat :

```
Netid State   Local Address:Port    Process
tcp   LISTEN  0.0.0.0:22            sshd
udp   UNCONN  0.0.0.0:68            dhclient
```

#### Sous PowerShell

Lister les connexions et ports actifs :

```powershell
Get-NetTCPConnection
Get-NetUDPEndpoint
```

Ces cmdlets montrent les connexions **établies** et les **services en écoute**.

---

### Exemple concret : connexion web

Prenons une machine qui visite `https://example.com`.

1. Le navigateur ouvre un **port client dynamique** (ex. 49752).
    
2. Il envoie une requête vers le **port 443** (HTTPS) du serveur.
    
3. Le serveur répond sur la même paire de ports.
    
4. Lorsque la connexion se termine, le port éphémère est libéré.
    

```text
192.168.1.10:49752 → 93.184.216.34:443
```

Ce schéma se répète pour chaque nouvel onglet, téléchargement ou session réseau.

---

### Identifier les services par leurs ports

Quelques exemples courants :

|Service|Protocole|Port|
|---|---|---|
|HTTP|TCP|80|
|HTTPS|TCP|443|
|SSH|TCP|22|
|DNS|UDP|53|
|DHCP|UDP|67 / 68|
|FTP|TCP|21|
|RDP|TCP|3389|

:::info
Page wikipedia : https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels
:::


La commande suivante permet de retrouver les correspondances :

```bash
cat /etc/services | grep 80
```

---

### Tester un port à distance

#### Sous Linux

```bash
nc -zv example.com 22
```

- `-z` : test sans envoyer de données
    
- `-v` : mode verbeux (affiche le résultat)
    

#### Sous PowerShell

```powershell
Test-NetConnection example.com -Port 22
```

Permet de vérifier si un **port TCP est ouvert** ou bloqué par un pare-feu.

---

### À retenir
:::success
- Les **ports** identifient les applications qui communiquent sur un hôte.
    
- Chaque flux est défini par une **quadruplet** : IP/Port source + IP/Port destination.
    
- Le **multiplexage** permet à plusieurs connexions de coexister sans conflit.
    
- Les **ports éphémères** sont attribués automatiquement aux clients.
    
- Les outils `ss`, `netstat`, `Get-NetTCPConnection`, `Test-NetConnection` permettent d’inspecter les ports et les connexions actives.
:::

---

## 5.5 NAT et PAT — Translation d’adresses
<iframe width="560" height="315" src="https://www.youtube.com/embed/jq3SLuhIyPI?si=jbuvOmnPwDorrb1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

#### NAT (Network Address Translation)

Le **NAT** traduit une **adresse IP interne privée** (ex. 192.168.1.10) en **adresse publique** (ex. 80.12.45.3).  
Il agit généralement sur les routeurs ou pare-feux à la frontière entre le réseau local et Internet.

:::info
Le NAT fonctionne au niveau **couche 3 (Réseau)**, en modifiant les adresses IP dans les paquets sortants et entrants.
:::

Exemple :

```
192.168.1.10 → 80.12.45.3
```

#### PAT (Port Address Translation)

Le **PAT**, ou “NAT dynamique”, ajoute aussi la notion de **port source**.  
Cela permet à plusieurs machines internes de partager **une seule adresse publique**.

|Interne|Adresse publique (traduite)|
|---|---|
|192.168.1.10:50000|80.12.45.3:40001|
|192.168.1.11:50000|80.12.45.3:40002|

:::info
Le PAT est la forme la plus utilisée aujourd’hui (présente dans tous les box et routeurs domestiques).
:::

---

# 6 - Couches 5-7 - Session - Présentation - Application
## 6.1 Positionnement et rôle des couches 5 à 7

---

### Introduction

Les **couches 5 à 7 du modèle OSI** regroupent tout ce qui concerne la **communication entre applications**.  
Elles ne gèrent plus le transport ou le routage des données (couches 3 et 4),  
mais **l’organisation, la présentation et l’exploitation de ces données** par les programmes.

:::info
Ces couches sont souvent **regroupées sous le nom de “couche Application”**, car dans la pratique, la majorité des protocoles modernes combinent leurs fonctions.
:::

---

### Rappels sur le modèle OSI

Le modèle OSI définit 7 couches, de la plus proche du matériel à la plus proche de l’utilisateur :

|Couche|Nom|Rôle principal|
|---|---|---|
|7|**Application**|Interface entre l’utilisateur et le réseau|
|6|**Présentation**|Formatage et chiffrement des données|
|5|**Session**|Gestion du dialogue entre applications|
|4|**Transport**|Transmission fiable des segments (TCP/UDP)|
|3|**Réseau**|Routage des paquets (IP)|
|2|**Liaison**|Transmission des trames locales (Ethernet)|
|1|**Physique**|Transmission électrique / optique des bits|

Les couches **5 à 7** travaillent donc au-dessus de TCP et UDP, et permettent aux applications de **communiquer, sécuriser et interpréter** les données échangées.

---

### Couche 5 — La couche Session

La **couche Session** établit, gère et ferme les **sessions de communication** entre deux hôtes.

Elle permet notamment de :

- Synchroniser les échanges (points de reprise, reprises de session),
    
- Maintenir plusieurs sessions simultanées entre deux systèmes,
    
- Déterminer qui parle et à quel moment (dialogue half/full duplex).
    
:::info
Un client FTP qui interrompt un transfert peut reprendre à partir d’un **point de synchronisation**, grâce aux mécanismes de la couche Session.
:::

---

### Couche 6 — La couche Présentation

La **couche Présentation** s’occupe de la **mise en forme des données** pour que les deux applications puissent les comprendre.  
C’est ici qu’interviennent les notions de **format, encodage et chiffrement**.

Ses fonctions principales :

- **Traduction** des formats (ASCII, JPEG, MPEG, etc.),
    
- **Compression** ou décompression des données,
    
- **Chiffrement / déchiffrement** des communications.
    

:::info
C’est à cette couche qu’intervient le **protocole TLS/SSL**, qui chiffre les échanges au-dessus de TCP, garantissant **confidentialité et intégrité**.
:::

---

### Couche 7 — La couche Application

La **couche Application** fournit aux programmes utilisateurs les **services réseau** nécessaires : web, mail, DNS, fichiers, etc.  
C’est la couche visible pour l’utilisateur final.

Exemples de protocoles :

- **HTTP / HTTPS** → navigation web
    
- **SMTP / IMAP / POP3** → messagerie
    
- **DNS** → résolution de noms
    
- **DHCP** → attribution automatique d’adresses
    
- **FTP / SFTP** → transfert de fichiers
    
- **NTP** → synchronisation horaire
    

:::info
Chaque protocole applicatif s’appuie sur les couches inférieures (souvent **TCP ou UDP**) pour transporter ses données de manière fiable ou rapide.
:::

---

### Exemple : HTTPS, un cas complet des couches 4 à 7

Prenons l’exemple d’une page web sécurisée en HTTPS :

1. **Couche 4 (Transport)** → ouverture d’une connexion **TCP** vers le port **443**.
    
2. **Couche 6 (Présentation)** → établissement d’une session **TLS/SSL** pour chiffrer les données.
    
3. **Couche 7 (Application)** → échange des requêtes et réponses **HTTP**.
    
4. Les couches inférieures assurent le transport et le routage.
    

```text
HTTP → TLS → TCP → IP → Ethernet
```

:::info
C’est cette superposition (ou “stack”) qui rend Internet fiable et sécurisé.
:::

---

### TLS / SSL : un exemple de la couche Présentation

**TLS (Transport Layer Security)** et son ancêtre **SSL** sont les protocoles responsables du **chiffrement des données** entre deux applications.  
Ils assurent trois garanties essentielles :

|Fonction|Description|
|---|---|
|**Confidentialité**|Les données sont chiffrées : un tiers ne peut pas les lire.|
|**Intégrité**|Les données ne peuvent pas être modifiées en transit.|
|**Authentification**|Le serveur (et parfois le client) prouve son identité via un certificat.|

Les protocoles applicatifs qui utilisent TLS :

- **HTTPS** (HTTP sécurisé)
    
- **SMTPS / IMAPS / POPS**
    
- **FTPS**
    
- **LDAPs**
    

---

#### Évolution des versions SSL / TLS

|Version|Année|Statut actuel|Nouveautés / caractéristiques principales|
|---|---|---|---|
|**SSL 1.0**|~1994|Jamais publié|Première ébauche interne à Netscape, jugée trop vulnérable|
|**SSL 2.0**|1995|**Obsolète**|Première version publique ; vulnérable (pas d’intégrité correcte, handshake faible)|
|**SSL 3.0**|1996|**Obsolète (depuis 2015)**|Refonte complète, base de TLS 1.0, mais vulnérable à **POODLE**|
|**TLS 1.0**|1999|**Obsolète (RFC 8996 – 2021)**|Successeur officiel de SSL 3.0 ; amélioration du handshake et de la dérivation de clés|
|**TLS 1.1**|2006|**Obsolète (RFC 8996 – 2021)**|Meilleure gestion du chiffrement par blocs et du padding|
|**TLS 1.2**|2008|**Actif (recommandé)**|Support du **SHA-256**, algorithmes AES-GCM, authentification plus forte|
|**TLS 1.3**|2018|**Standard actuel**|Suppression du handshake obsolète, réduction de la latence, uniquement des suites de chiffrement modernes (AES-GCM, ChaCha20-Poly1305)|

:::info
- Aujourd’hui, seuls **TLS 1.2** et **TLS 1.3** sont considérés comme **sécurisés**.  

- Toutes les versions SSL et TLS < 1.2 doivent être **désactivées** sur les serveurs modernes.

- https://fr.wikipedia.org/wiki/Transport_Layer_Security
:::

---

#### Exemple d’observation :

```bash
curl -v https://example.com
```

Affiche les détails du **handshake TLS** : version, certificat, algorithme de chiffrement, etc.

:::info
Ne pas confondre **TLS (couche Présentation)** avec **VPN (couche 3 ou 4)** :  le premier chiffre une **application**, le second chiffre **tout un canal réseau**.
:::

---


### À retenir

:::success

- Les **couches 5 à 7** gèrent la **communication entre applications**.
    
- **Session** : contrôle du dialogue (établissement et fermeture).
    
- **Présentation** : format, encodage, chiffrement (**TLS/SSL**).
    
- **Application** : services réseau visibles (DNS, DHCP, HTTP, etc.).
    
- **TLS** garantit **confidentialité, intégrité et authentification** au-dessus de TCP.
    
- Ces couches reposent sur les couches basses pour le transport et le routage.
    
:::

---

## 6.2 DHCP

---

### Introduction

Le protocole **DHCP (Dynamic Host Configuration Protocol)** permet d’attribuer automatiquement les **paramètres réseau** à un poste : adresse IP, masque de sous-réseau, passerelle, DNS, etc.  
Sans DHCP, chaque machine devrait être configurée manuellement, ce qui serait rapidement ingérable dans un réseau de plusieurs dizaines ou centaines d’appareils.

:::info
DHCP fonctionne selon un **modèle client/serveur** et repose sur **UDP** (ports 67 et 68).
:::

---

### Rôle et principe

Lorsqu’un poste (le **client**) se connecte au réseau :

1. Il ne connaît pas encore son adresse IP.
    
2. Il envoie une requête en **broadcast** pour demander une configuration.
    
3. Un serveur DHCP répond avec une **proposition d’adresse et de paramètres**.
    
4. Le client accepte cette proposition et peut commencer à communiquer sur le réseau.
    

Ce mécanisme permet d’éviter les conflits d’adresses et d’assurer une configuration homogène sur tout le réseau local.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yH9UvkeAz-I?si=RToBx2HcZQl-35zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

### Le processus DORA

Le fonctionnement de DHCP repose sur quatre étapes principales, résumées par l’acronyme **DORA** :

![](https://hedgedoc.dawan.fr/uploads/5e4fdaee-03ef-4c01-8f8d-b752bc33f63c.png)


|Étape|Nom du message|Sens|Description|
|---|---|---|---|
|**D**|**Discover**|Client → Broadcast|Le client cherche un serveur DHCP disponible.|
|**O**|**Offer**|Serveur → Client|Le serveur propose une adresse IP et un bail.|
|**R**|**Request**|Client → Serveur|Le client demande explicitement l’adresse proposée.|
|**A**|**Acknowledge**|Serveur → Client|Le serveur confirme la réservation et envoie les paramètres finaux.|

:::info
Ces échanges se font en **broadcast** au départ (car le client n’a pas encore d’adresse IP) puis en **unicast** une fois l’adresse attribuée.
:::

---

### Les paramètres transmis par DHCP

Le serveur DHCP peut fournir bien plus qu’une simple adresse IP :

|Paramètre|Exemple|Description|
|---|---|---|
|**Adresse IP**|192.168.1.25|Identifiant unique du poste|
|**Masque de sous-réseau**|255.255.255.0|Délimite le réseau local|
|**Passerelle par défaut**|192.168.1.1|Routeur utilisé pour sortir du réseau|
|**Serveurs DNS**|192.168.1.10 / 8.8.8.8|Résolution des noms de domaine|
|**Durée du bail (lease)**|24h, 7j, etc.|Durée pendant laquelle l’adresse reste réservée|
|**Nom de domaine**|entreprise.local|Domaine DNS du poste client|

:::info
Le bail est **temporaire** : le poste doit le **renouveler** avant expiration.
:::

---

### Communication et ports utilisés

- **Client → Serveur : UDP 68 → 67**
    
- **Serveur → Client : UDP 67 → 68**
    

Les paquets sont souvent envoyés en **broadcast (255.255.255.255)**,  
car le client ne connaît pas encore la passerelle ou le routeur du réseau.

:::info
Dans les réseaux d’entreprise, un **relai DHCP** peut transférer les requêtes vers un serveur situé sur un autre sous-réseau.
:::

---

### Observer et diagnostiquer DHCP

#### Sous Linux

Afficher l’adresse IP attribuée :

```bash
ip a
```

Voir les journaux du client DHCP :

```bash
journalctl -u dhclient
```

Renouveler ou relâcher le bail :

```bash
sudo dhclient -r
sudo dhclient
```

#### Sous Windows / PowerShell

Afficher les paramètres réseau :

```powershell
ipconfig /all
```

Renouveler ou libérer le bail :

```powershell
ipconfig /release
ipconfig /renew
```

:::info
En cas de panne DHCP, l’hôte s’attribue une adresse **APIPA** (169.254.x.x) → signe que le serveur n’a pas répondu.
:::

---


### À retenir
:::success
- **DHCP** attribue automatiquement les **paramètres IP** aux hôtes.
    
- Le cycle **DORA** régit l’attribution et le renouvellement des adresses.
    
- Les échanges se font via **UDP 67/68**, souvent en **broadcast**.
    
- En cas d’absence de réponse, le poste utilise une **adresse APIPA (169.254.x.x)**.
    
- Outils : `ip a`, `ipconfig /all`, `dhclient`, `journalctl -u dhclient`.
    
- DHCP agit sur plusieurs couches (2 → 7) mais reste classé dans la **couche Application** pour sa logique de protocole.
::: 

---

## 6.3 DNS

---

### Introduction

Le **DNS (Domain Name System)** est un service essentiel d’Internet et des réseaux d’entreprise.  
Il permet de **traduire les noms de domaine** (faciles à retenir) en **adresses IP** (utilisées par les machines).

:::info
Sans DNS, il faudrait se souvenir d’adresses IP pour chaque site ou serveur — `172.217.20.14` au lieu de `www.google.com`.
:::

Le DNS fonctionne selon un **modèle client/serveur hiérarchique**,  
et repose sur **UDP** (port 53) pour la majorité des requêtes.

---

### Rôle du DNS

Lorsqu’un utilisateur saisit une adresse web :

1. Le poste interroge son **résolveur local** (souvent le serveur DNS configuré via DHCP).
    
2. Si la réponse n’est pas en cache, le résolveur interroge les serveurs supérieurs de la hiérarchie (root → TLD → domaine).
    
3. Le serveur répond avec l’**adresse IP correspondante**.
    
4. Le client peut alors établir une connexion TCP/IP vers cette adresse.
    

:::info
Le DNS est au réseau ce que le **carnet d’adresses** est au téléphone : il convertit les noms en numéros.
:::

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/qzWdzAvfBoo?si=DHf9vBPBi0BpvlW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2. Structure hiérarchique du DNS

Le DNS est organisé comme un **arbre hiérarchique mondial**,  
dont la racine est représentée par un simple **point (.)**.

Exemple de hiérarchie :

```
. (racine)
 ├── com
 │   ├── google
 │   │   └── www.google.com
 └── fr
     ├── gouv
     │   └── www.gouv.fr
```

|Niveau|Exemple|Rôle|
|---|---|---|
|**Racine**|`.`|Point de départ de toute recherche DNS|
|**TLD (Top Level Domain)**|`.com`, `.fr`, `.org`|Domaine de premier niveau|
|**Domaine**|`google.com`|Domaine enregistré par une entité|
|**Sous-domaine**|`mail.google.com`|Service ou serveur spécifique|
|**Hôte**|`www`|Machine ou application précise|


Chaque serveur DNS connaît **ses propres zones** et peut déléguer la résolution des sous-domaines à d’autres serveurs.

---

### Les types d’enregistrements DNS

Chaque nom de domaine est associé à un ou plusieurs **enregistrements** décrivant ses propriétés.

|Type|Signification|Exemple|Description|
|---|---|---|---|
|**A**|Address record|`www → 192.168.1.10`|Associe un nom à une adresse IPv4|
|**AAAA**|IPv6 Address record|`www → 2001:db8::10`|Associe un nom à une adresse IPv6|
|**CNAME**|Canonical Name|`ftp → www`|Alias pointant vers un autre nom|
|**MX**|Mail Exchange|`@ → mail.domaine.fr`|Indique le serveur de messagerie|
|**PTR**|Pointer record|`192.168.1.10 → www.domaine.fr`|Résolution **inverse** (IP → nom)|
|**NS**|Name Server|`domaine.fr → ns1.domaine.fr`|Serveur responsable de la zone|
|**TXT**|Text record|`spf=...`|Informations diverses (SPF, vérification, clés DKIM)|

:::info
Un enregistrement **A** permet la navigation web, tandis qu’un enregistrement **MX** oriente le courrier électronique.
:::

---

### Les types de requêtes DNS

Le client (résolveur) peut effectuer plusieurs types de requêtes :

|Type de requête|Description|
|---|---|
|**Récursive**|Le serveur DNS s’occupe de trouver la réponse complète (c’est le cas des serveurs FAI ou locaux).|
|**Itérative**|Le serveur renvoie l’adresse du serveur suivant dans la hiérarchie (comportement des serveurs faisant autorité).|
|**Inverse (PTR)**|Permet de retrouver le nom associé à une adresse IP.|

:::info

Les serveurs DNS “récursifs” maintiennent un **cache local** pour accélérer les résolutions suivantes.
:::

---

### Protocoles et ports utilisés

- **UDP 53** : utilisé pour la majorité des requêtes (rapide, sans connexion).
    
- **TCP 53** : utilisé lorsque la réponse dépasse 512 octets ou pour le **transfert de zones** (entre serveurs DNS).
    
- **DNS over TLS (DoT)** : chiffrement sur port 853.
    
- **DNS over HTTPS (DoH)** : transport via HTTPS (port 443).
    

:::info
DoT et DoH assurent la **confidentialité** des requêtes DNS — utiles face à la surveillance réseau ou au détournement DNS.
:::

---

### Outils de test et de diagnostic

#### Sous Linux

```bash
dig www.example.com
```

Affiche le détail de la requête DNS (serveur interrogé, TTL, adresse IP, etc.).

```bash
nslookup www.example.com
host www.example.com
```

Autres commandes pour tester la résolution simple ou inverse.

#### Sous PowerShell

```powershell
Resolve-DnsName www.example.com
```

Equivalent moderne à `nslookup`, plus complet et plus lisible.


Pour tester une **résolution inverse**, ajoute `-Type PTR` :

```powershell
Resolve-DnsName 192.168.1.10 -Type PTR
```

---

### Caching DNS et durée de vie (TTL)

Chaque enregistrement DNS contient un **TTL (Time To Live)**, exprimé en secondes.  
Il indique combien de temps un client ou un serveur peut **garder la réponse en cache**.

Exemple :

```
TTL = 3600  →  la réponse reste valable 1 heure.
```

Une fois ce délai écoulé, la requête devra être résolue à nouveau.  
Cela permet d’équilibrer entre **rapidité** et **souplesse de mise à jour**.

---

### Résumé de la résolution DNS

```text
1. Le client interroge son DNS local (souvent celui du routeur).
2. Si aucune réponse en cache :
   → Requête récursive vers les serveurs racine.
   → Puis TLD (.fr, .com…)
   → Puis serveur faisant autorité pour le domaine.
3. La réponse (A, AAAA, etc.) est retournée et mise en cache.
```

---

### À retenir
:::success
- **DNS** traduit les **noms de domaine en adresses IP**.
    
- Fonctionne sur **UDP/TCP 53**, modèle client/serveur hiérarchique.
    
- Types d’enregistrements : **A**, **AAAA**, **MX**, **CNAME**, **PTR**, **TXT**, etc.
    
- Deux modes de requêtes : **récursif** (par défaut) et **itératif**.
    
- Les serveurs DNS utilisent un **cache** et un **TTL** pour limiter les requêtes.
    
- Versions sécurisées : **DNS over TLS (853)** et **DNS over HTTPS (443)**.
:::

---

## 6.4 VPN

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/z0406rZQWfU?si=SHW7INdignDo9O3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

### Introduction

Un **VPN (Virtual Private Network)** permet de **relier plusieurs réseaux distants** ou **d’accéder à distance à un réseau privé**, en passant par un réseau public (souvent Internet).  
L’objectif : garantir la **confidentialité, l’intégrité et l’authenticité** des échanges.

:::info
Sans VPN, le trafic circule en clair sur Internet.  
Avec un VPN, les données sont **chiffrées** et **encapsulées** avant d’être envoyées.
:::

---

### Objectifs principaux d’un VPN

|Objectif|Description|
|---|---|
|**Confidentialité**|Le contenu est chiffré : personne ne peut le lire en transit.|
|**Intégrité**|Le message ne peut pas être modifié sans détection.|
|**Authentification**|Chaque partie prouve son identité (certificats, clés).|
|**Accès distant sécurisé**|Permet de se connecter à un réseau interne depuis l’extérieur.|

:::info
Les VPN reposent sur deux mécanismes essentiels :

- **le chiffrement**, pour protéger les données,
    
- **l’encapsulation**, pour transporter les paquets dans un tunnel sécurisé.
     
:::

---

### Principe du tunnel VPN

Un **tunnel VPN** encapsule les paquets IP d’un réseau dans d’autres paquets.  
Ainsi, même si le trafic passe par Internet, il reste **protégé** et **invisible** pour les routeurs intermédiaires.

```
[Paquet IP d'origine]
      ↓ encapsulé dans
[En-tête VPN + chiffrement]
      ↓ envoyé à travers Internet
[Déchiffré à l’arrivée]
```

L’encapsulation crée un **lien virtuel** entre deux points (client/serveur ou site à site),  
comme s’ils étaient dans le même réseau local.

---

### Types de VPN selon la couche OSI

|Type|Couche OSI|Exemple(s)|Caractéristiques principales|
|---|---|---|---|
|**VPN de niveau 2**|Liaison de données|L2TP, PPTP|Transporte des trames Ethernet (MAC) ; utilisé pour interconnecter des réseaux locaux.|
|**VPN de niveau 3**|Réseau|**IPsec**, GRE|Transporte des paquets IP ; souvent utilisé entre routeurs (site à site).|
|**VPN de niveau 4/5**|Transport / Session|**OpenVPN**, **WireGuard**, SSL VPN|Transporte du trafic IP via UDP ou TCP ; plus simple à configurer côté client.|
|**VPN applicatif**|Application|SSH tunnel, proxy chiffré|Ne protège qu’un flux spécifique (ex. une appli ou un port).|

:::info
Dans la pratique, les plus utilisés en entreprise aujourd’hui sont **IPsec**, **OpenVPN**
:::

---

### IPsec — le VPN de couche 3

**IPsec (Internet Protocol Security)** est un standard de la couche Réseau (3).  
Il chiffre et authentifie directement les **paquets IP**.

#### Modes de fonctionnement :

- **Transport** → seul le contenu IP est chiffré, l’en-tête IP reste visible.
    
- **Tunnel** → tout le paquet IP est encapsulé dans un nouveau paquet chiffré.  
    (C’est le mode le plus courant dans les VPN “site à site”.)
    

#### Protocoles utilisés :

|Protocole|Rôle|
|---|---|
|**AH (Authentication Header)**|Authentifie l’origine et garantit l’intégrité des données (pas de chiffrement).|
|**ESP (Encapsulating Security Payload)**|Chiffre les données et garantit l’intégrité (utilisé seul dans la plupart des cas).|
|**IKE / IKEv2**|Gère la négociation de clés et l’établissement du tunnel.|

#### Ports :

- UDP **500** (phase de négociation IKE)
    
- UDP **4500** (NAT-Traversal, si les deux extrémités sont derrière un NAT)
    

---

### OpenVPN — le VPN orienté transport

**OpenVPN** fonctionne sur la **couche 4 (Transport)**,  
en utilisant **UDP ou TCP** pour transporter les paquets chiffrés.

#### Caractéristiques :

- Utilise la **bibliothèque OpenSSL** → chiffrement **TLS**.
    
- Très souple : fonctionne sur n’importe quel port (souvent 1194/UDP).
    
- Compatible avec la majorité des pare-feu et NAT (peut se déguiser en HTTPS).
    
- Permet à la fois les connexions **site à site** et **client à site**.
    

#### Exemple de fonctionnement :

```
TCP/UDP → OpenVPN (TLS) → IP → Ethernet
```

:::info
OpenVPN crée une **interface virtuelle tun0/tap0** pour le tunnel : les paquets sortants passent dedans, sont chiffrés, puis envoyés sur Internet.
:::

---

### WireGuard — le VPN moderne

**WireGuard** est un VPN léger et performant introduit en 2019.  
Il repose sur un modèle minimaliste et utilise des algorithmes modernes.

#### Points clés :

- Fonctionne uniquement sur **UDP** (port 51820 par défaut).
    
- Très simple à configurer : une clé publique et une clé privée par pair.
    
- Aucun mécanisme d’échange de clé complexe (pas d’IKE).
    
- Intégré au noyau Linux depuis la version 5.6.
    
- Très rapide, souvent **2 à 3× plus performant** qu’OpenVPN.
    

#### Exemple de configuration :

```bash
[Interface]
PrivateKey = XXXXXXXXXXXXXXXXXXX
Address = 10.0.0.1/24

[Peer]
PublicKey = YYYYYYYYYYYYYYYYYYY
Endpoint = 192.168.1.2:51820
AllowedIPs = 10.0.0.0/24
```

:::info
WireGuard chiffre tout le trafic via **ChaCha20** et authentifie avec **Poly1305**, offrant un excellent compromis entre **sécurité et vitesse**.
:::

---

### SSL VPN — le VPN basé sur TLS

Certains VPN (comme **OpenVPN** ou les **VPN d’entreprise Cisco/Juniper**) utilisent **TLS/SSL** pour sécuriser la communication.  
Ils fonctionnent généralement sur **le port 443 (HTTPS)** afin de passer à travers la plupart des pare-feu.

#### Avantages :

- Faciles à déployer côté utilisateur (aucune configuration réseau avancée).
    
- Utilisent le même mécanisme de chiffrement que HTTPS.
    
- Très utilisés dans les environnements professionnels pour l’accès distant sécurisé.
    

---

### Comparatif rapide des solutions VPN

|Protocole|Couche OSI|Ports|Authentification|Chiffrement|Usage typique|
|---|---|---|---|---|---|
|**IPsec**|Réseau (3)|UDP 500 / 4500|Certificats, PSK|AES / 3DES|VPN site à site|
|**OpenVPN**|Transport (4)|UDP/TCP 1194|Certificats TLS|AES / TLS|VPN distant, multi-OS|
|**WireGuard**|Transport (4)|UDP 51820|Clés publiques|ChaCha20|VPN rapide et moderne|
|**SSL VPN**|Présentation (6)|TCP 443|Certificat serveur|TLS 1.2 / 1.3|Accès distant via navigateur|

:::info
**IPsec** est souvent utilisé entre routeurs (infrastructure), tandis que **OpenVPN** et **WireGuard** sont privilégiés pour les **postes clients**.
:::

---

### Routage et table de routes dans un VPN

Lorsqu’un VPN s’établit :

1. Une **interface virtuelle** est créée (`tun0`, `wg0`, etc.).
    
2. Le système ajoute une **nouvelle route** vers le réseau distant via cette interface.
    
3. Tout le trafic destiné à ce réseau passe par le tunnel chiffré.
    

Exemple :

```
10.10.0.0/24 via 10.8.0.1 dev tun0
```

:::info
Selon la configuration :
- un **split tunneling** laisse passer uniquement le trafic du réseau distant,    
- un **full tunnel** fait passer **tout le trafic Internet** dans le VPN.
:::    


---
:::info
- Les VPN pour les débutants de IT-Connect : https://www.youtube.com/watch?v=z0406rZQWfU
:::

### À retenir
:::success


- Un **VPN** chiffre et encapsule le trafic pour relier deux réseaux distants ou un client à un réseau privé.
    
- Les couches concernées dépendent du type de VPN :
    
    - **IPsec → couche 3**,
        
    - **OpenVPN/WireGuard → couche 4**,
        
    - **SSL VPN → couche 5/6**,
        
    - **SSH tunnel → couche 7**.
        
- Les trois garanties : **confidentialité**, **intégrité**, **authentification**.
    
- Les plus répandus : **IPsec**, **OpenVPN**, **WireGuard**.
    
- Chaque VPN crée une **interface virtuelle** et ajoute une **route** pour le trafic chiffré.
    
- Le **split tunneling** détermine si seul le réseau distant ou tout Internet passe par le tunnel.
:::  

---
## 6.5 Sécurité et services d’accès

---

### Introduction

Assurer la **sécurité d’un réseau** ne consiste pas seulement à chiffrer les données.  
Il faut aussi **contrôler les accès**, **filtrer les communications**, et **protéger les services exposés** (web, mail, VPN…).

Les principaux mécanismes de sécurité réseau sont :

- les **pare-feux**,
  
- la **traduction d’adresses (NAT/PAT)**,
    
- les **proxies**,
    
- la **DMZ**,
    
- et les outils de **supervision** (SNMP, IDS/IPS, logs).
    

:::info
La sécurité repose toujours sur **3 piliers fondamentaux** : **Confidentialité**, **Intégrité**, **Disponibilité** — le fameux **triangle CIA**.
:::

---

### Le pare-feu (Firewall)

Le **pare-feu** est le premier rempart de protection d’un réseau.  
Il filtre les paquets selon des **règles définies** (adresses IP, ports, protocole, direction…).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Swt51w3EjY?si=50Hhqq4t2pxfzkBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Types de pare-feux :

|Type|Description|Exemple|
|---|---|---|
|**Statique / filtrage simple**|Analyse les en-têtes IP/TCP (couche 3–4)|`iptables`, `pf`, Windows Defender Firewall|
|**Stateful (à états)**|Suit les connexions et autorise les paquets associés|Pare-feux modernes (pfSense, OPNsense, Stormshield...)|
|**Applicatif (Layer 7)**|Filtre selon le contenu ou le protocole applicatif|Proxy HTTP, WAF (Web Application Firewall)|

:::info
Les pare-feux “à états” sont les plus courants : ils distinguent un **nouveau paquet** d’un **paquet appartenant à une connexion existante**.
:::

#### Exemple de règle simple :

- Autoriser le trafic sortant HTTP (TCP 80).
    
- Bloquer le trafic entrant sauf SSH (TCP 22) depuis un réseau interne.
    

---

### NAT et PAT — Translation d’adresses
<iframe width="560" height="315" src="https://www.youtube.com/embed/jq3SLuhIyPI?si=jbuvOmnPwDorrb1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

#### NAT (Network Address Translation)

Le **NAT** traduit une **adresse IP interne privée** (ex. 192.168.1.10) en **adresse publique** (ex. 80.12.45.3).  
Il agit généralement sur les routeurs ou pare-feux à la frontière entre le réseau local et Internet.

:::info
Le NAT fonctionne au niveau **couche 3 (Réseau)**, en modifiant les adresses IP dans les paquets sortants et entrants.
:::

Exemple :

```
192.168.1.10 → 80.12.45.3
```

#### PAT (Port Address Translation)

Le **PAT**, ou “NAT dynamique”, ajoute aussi la notion de **port source**.  
Cela permet à plusieurs machines internes de partager **une seule adresse publique**.

|Interne|Adresse publique (traduite)|
|---|---|
|192.168.1.10:50000|80.12.45.3:40001|
|192.168.1.11:50000|80.12.45.3:40002|

:::info
Le PAT est la forme la plus utilisée aujourd’hui (présente dans tous les box et routeurs domestiques).
:::

---

### Proxy et passerelles applicatives

Un **proxy** agit comme un **intermédiaire entre le client et le serveur**.  
Il peut :

- filtrer les requêtes HTTP/HTTPS,
- mettre en cache les réponses,
- appliquer des politiques de sécurité (blocage de sites, authentification).
    

#### Types de proxy :

|Type|Rôle|
|---|---|
|**Proxy direct (transparent)**|Intercepte le trafic sans configuration côté client|
|**Proxy explicite**|Nécessite une configuration dans le navigateur|
|**Reverse proxy**|Reçoit les requêtes externes et les redirige vers un serveur interne (Nginx, Traefik…)|

<iframe width="560" height="315" src="https://www.youtube.com/embed/MpP02aZPSNQ?si=maEgH3UBc8gr3nLq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::info
- En sortie : **Squid** peut filtrer et mettre en cache les accès web.
    
- En entrée : **Traefik** ou **Nginx** jouent le rôle de **reverse proxy**, protégeant les serveurs web internes. 

https://blog.stephane-robert.info/docs/services/reseau/traefik/
:::

---

### DMZ — Zone démilitarisée

Une **DMZ (Demilitarized Zone)** est une **zone réseau intermédiaire** placée entre le réseau interne et Internet.  
On y place les serveurs **accessibles depuis l’extérieur**, comme :

- serveur web public,   
- serveur mail,  
- portail VPN.
    
<iframe width="560" height="315" src="https://www.youtube.com/embed/mY-TvNXFHl0?si=WlwaVF_UsjlMw4u5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


:::info


La DMZ isole les services publics du réseau interne.  
Si un serveur de la DMZ est compromis, les attaquants ne peuvent pas accéder directement au LAN interne.
:::

---

### Supervision et journalisation

Surveiller un réseau est **indispensable** pour détecter les anomalies ou les attaques.

#### Outils courants :

|Type|Exemple|Fonction|
|---|---|---|
|**SNMP**|Centreon, Zabbix|Supervision des équipements réseau|
|**Logs**|Syslog, journalctl, Event Viewer|Enregistrement des événements système|
|**IDS / IPS**|Suricata, Snort|Détection et prévention d’intrusions|
|**SIEM**|Wazuh, Splunk|Corrélation et analyse centralisée des logs|

---


### Exemple de scénario complet

- Un utilisateur externe se connecte via un **VPN SSL (443)**.
    
- Le pare-feu autorise uniquement ce flux vers le **serveur VPN** en **DMZ**.
    
- Une fois connecté, son trafic interne est filtré par un **pare-feu interne**.
    
- Les serveurs internes sont **masqués par NAT** et **surveillés par SNMP / logs**.
    
- Les flux web sortants passent par un **proxy** filtrant.
    
:::info
Ce type d’architecture est typique des **réseaux d’entreprise sécurisés**.
:::

---

### À retenir
:::success
- **Pare-feu** : filtre les connexions selon des règles.
    
- **NAT / PAT** : masquent les adresses internes et partagent l’accès Internet.
    
- **Proxy** : intermédiaire applicatif (filtrage, cache, authentification).
    
- **DMZ** : zone intermédiaire isolant les serveurs publics.
    
- **Supervision (SNMP, logs, IDS/IPS)** : détecte les incidents et les attaques.
    
- La **sécurité efficace** repose sur la **superposition de protections** (defense in depth).   
:::

---

# Mise en pratique ( 2 jours )
documentation réseaux virtualbox:
https://docs.oracle.com/en/virtualization/virtualbox/7.1/user/networkingdetails.html#networkingmodes

Présentation 20 à 30 minutes chacun, à partir de 15h, vendredi 05/12/2025.
- Si possible, prenez des notes sur hedgedoc ( tableau d'adressage , schéma, procédure, captures d'ecran.)

Bon courage, amusez vous 😊


## 1) Mise en place d’un VPN : OpenVPN _ou_ WireGuard sur Debian

- Rayane


exemple
- Installer une VM Debian dans VirtualBox
- Mettre en place OpenVPN **ou** WireGuard
- Générer les clés / certificats
- Tester la connexion depuis une autre VM
- Vérifier la communication à travers le tunnel


## 2) Découverte de Traefik (reverse proxy)

- Jean-Noel



## 3) Bonnes pratiques de conception réseau pour une DMZ
- Philippe




