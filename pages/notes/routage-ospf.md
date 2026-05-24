# 🌐 OSPF — Open Shortest Path First

## 📌 Introduction

**OSPF (Open Shortest Path First)** est un protocole de routage dynamique développé par l’**IETF** pour fonctionner dans les réseaux TCP/IP.

C’est un **IGP (Interior Gateway Protocol)** utilisé pour l’échange de routes **au sein d’un système autonome (AS)**.

Caractéristiques principales :

- protocole **standard ouvert**
- protocole **à état de lien (Link-State)**
- calcul de routes basé sur **SPF (Shortest Path First)**
- conçu pour **les grands réseaux**

Historique :

- Développement initial : **1987**
- **OSPFv2** : RFC 2328 (IPv4)
- **OSPFv3** : RFC 5340 (IPv6)

Dans les infrastructures Cisco, son principal concurrent est :

```
EIGRP
```

---

# 🧠 Principe de fonctionnement

OSPF est un protocole **Link-State**.

Cela signifie que chaque routeur :

1️⃣ découvre ses voisins  
2️⃣ analyse l’état de ses liens  
3️⃣ diffuse ces informations à tous les autres routeurs  
4️⃣ calcule le meilleur chemin.

Les informations échangées concernent :

- l’état des interfaces
- la vitesse du lien
- les routeurs voisins
- les réseaux connectés

Ces informations forment la :

```
Link-State Database (LSDB)
```

Tous les routeurs d’une même zone possèdent **la même base de données de topologie**.

---

## 📊 Algorithme SPF

OSPF utilise l’algorithme :

```
Shortest Path First (SPF)
```

Aussi appelé :

```
Algorithme de Dijkstra
```

Le routeur calcule le **chemin le plus court** vers chaque réseau.

Le coût est généralement basé sur :

```
La bande passante du lien
```

---

## 🖼 Principe de fonctionnement OSPF


Dans cet exemple :

- les routeurs échangent leurs **états de liens**
- chaque lien possède une **vitesse**
- OSPF calcule le **meilleur chemin**.

---

# 🧱 Les zones OSPF (Areas)

Pour améliorer la scalabilité, OSPF utilise des **zones (Areas)**.

Une zone permet de :

- limiter la taille de la base de données
- réduire le calcul de routes
- limiter les mises à jour.

Chaque réseau OSPF possède une zone principale :

```
Area 0 (Backbone Area)
```

Toutes les autres zones doivent être connectées à **Area 0**.

---

# 🧭 Rôles des routeurs OSPF

Un routeur OSPF peut jouer plusieurs rôles selon sa position dans le réseau.

## 1️⃣ Internal Router (IR)

Un **Internal Router** appartient à **une seule zone**.

Fonctions :

- maintenir la **LSDB**
- échanger les informations avec les routeurs voisins.

---

## 2️⃣ Backbone Router (BR)

Un **Backbone Router** possède **au moins une interface dans Area 0**.

Rôle :

- assurer la communication avec la **zone backbone**.

---

## 3️⃣ Area Border Router (ABR)

Un **ABR** connecte **plusieurs zones OSPF**.

Fonctions :

- connecter différentes zones
- maintenir plusieurs LSDB
- effectuer de l’agrégation de routes.

---

## 4️⃣ Autonomous System Boundary Router (ASBR)

Un **ASBR** connecte l’AS OSPF avec **d’autres systèmes autonomes**.

Exemple :

- connexion vers Internet
- redistribution de routes.

---

## 🖼 Rôles des routeurs OSPF


Dans ce schéma :

- **IR** → routeur interne
- **ABR** → frontière entre zones
- **BR** → backbone
- **ASBR** → connexion vers Internet.

---

# ⚙️ Configuration OSPF IPv4 (Cisco)

La configuration OSPF se fait en **deux étapes principales**.

---

# 1️⃣ Activer OSPF

Commande :

```bash
router ospf process_id
```

Exemple :

```bash
router ospf 1
```

Le **process ID** :

- valeur locale
- peut être différente sur chaque routeur.

---

# 2️⃣ Déclarer les réseaux

Commande :

```bash
network adresse wildcard-mask area area-id
```

Exemple :

```bash
network 10.0.0.0 0.0.0.255 area 0
```

Signification :

| Paramètre | Description |
|---|---|
network | adresse réseau |
wildcard mask | masque inverse |
area | numéro de zone |

---

# 🖼 Exemple de configuration OSPF IPv4


Dans cet exemple :

- plusieurs routeurs sont connectés
- les réseaux sont annoncés dans **Area 0**
- OSPF échange automatiquement les routes.

---

# 🔎 Commandes utiles OSPF

Afficher les voisins :

```bash
show ip ospf neighbor
```

Afficher la base de données :

```bash
show ip ospf database
```

Afficher les routes OSPF :

```bash
show ip route ospf
```

Afficher la configuration :

```bash
show running-config
```

---

# 🚀 Avantages d’OSPF

✔️ convergence rapide  
✔️ protocole standard ouvert  
✔️ support des grands réseaux  
✔️ hiérarchie par zones  
✔️ optimisation du calcul des routes.

---

# 📊 Résumé

OSPF est un protocole de routage **à état de lien** utilisé dans les réseaux IP.

Caractéristiques principales :

```
IGP
Link-State
Algorithme SPF
Support des zones
```

Éléments clés :

- **LSDB (Link-State Database)**
- **Area 0 (Backbone)**
- **ABR / BR / IR / ASBR**

Il est aujourd’hui **l’un des protocoles de routage les plus utilisés dans les réseaux d’entreprise et les infrastructures ISP**.