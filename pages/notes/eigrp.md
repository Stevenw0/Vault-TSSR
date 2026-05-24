  # 🌐 EIGRP — Enhanced Interior Gateway Routing Protocol

## 📌 Introduction

**EIGRP (Enhanced Interior Gateway Routing Protocol)** est un protocole de routage dynamique développé par **Cisco**.

Il s'agit d’un protocole **propriétaire Cisco** appartenant à la catégorie :

```
IGP — Interior Gateway Protocol
```

EIGRP a été conçu dans les **années 1980** pour remplacer **RIP**, qui présentait plusieurs limitations sur les réseaux de grande taille.

Caractéristiques principales :

- protocole propriétaire Cisco
- convergence très rapide
- support IPv4 et IPv6
- optimisation avancée du routage
- support des réseaux de grande taille

---

# 🧠 Principe de fonctionnement

EIGRP est souvent décrit comme un protocole **hybride**, combinant :

- des caractéristiques **vecteur de distance**
- et certaines propriétés **link-state**

Il utilise l’algorithme :

```
DUAL — Diffusing Update Algorithm
```

Cet algorithme permet :

- de calculer les meilleurs chemins
- d’éviter les boucles
- d’anticiper des routes alternatives

Cela permet une **convergence très rapide du réseau**.

---

# ⚙️ Métrique EIGRP

La métrique EIGRP est calculée à partir de plusieurs paramètres :

| Critère        | Description         |
| -------------- | ------------------- |
| Bande passante | Capacité du lien    |
| Délai          | Temps de traversée  |
| Fiabilité      | Taux d’erreur       |
| Charge         | Utilisation du lien |


Les métriques EIGRP sont codées sur :

```
24 bits
```

Valeur possible :

```
0 → 16 777 215
```

---

## 🖼 Calcul de la métrique



---

## 🖼 Formule de calcul



---

# 🚀 Fonctionnalités principales

EIGRP possède plusieurs fonctionnalités avancées.

### Établissement de voisinage

Les routeurs établissent des relations de **voisinage** avec les routeurs voisins.

---

### Mises à jour incrémentales

Contrairement à RIP :

- seules les modifications sont envoyées
- les mises à jour sont **partielles et incrémentales**

Cela permet :

- une économie de bande passante
- un réseau plus efficace

---

### Communication réseau

EIGRP utilise :

```
Unicast
Multicast
```

Adresse multicast utilisée :

```
224.0.0.10
```

---

### Multi-protocole

EIGRP peut fonctionner avec :

```
IPv4
IPv6
```

---

### Load balancing

EIGRP peut répartir le trafic :

```
sur plusieurs chemins
même si leurs coûts sont différents
```

---

# 🧱 Tables EIGRP

EIGRP maintient **trois tables principales**.

---

## 1️⃣ Neighbor Table

Contient la liste des **routeurs voisins**.

Elle permet :

- de maintenir les relations de voisinage
- d’assurer la livraison fiable des messages.

Commande :

```bash
show ip eigrp neighbors
```

---

## 2️⃣ Topology Table

Contient :

- toutes les routes connues
- les chemins alternatifs
- les informations de métriques

Commande :

```bash
show ip eigrp topology
```

---

## 3️⃣ Routing Table

Contient uniquement :

```
les meilleures routes
```

Commande :

```bash
show ip route
```

---

# ⚙️ Configuration EIGRP IPv4

La configuration d’EIGRP se fait en **deux étapes principales**.

---

# 1️⃣ Activer EIGRP

Commande :

```bash
router eigrp AS
```

Exemple :

```bash
router eigrp 10
```

Le **AS (Autonomous System)** est l’identifiant du domaine EIGRP.

Valeur possible :

```
1 → 65535
```

Tous les routeurs EIGRP doivent partager **le même numéro AS**.

---

# 2️⃣ Déclarer les réseaux

Commande :

```bash
network adresse_reseau
```

Exemple :

```bash
network 10.0.0.0
network 192.168.1.0
```

Ces commandes indiquent quelles interfaces participent au protocole EIGRP.

---

## 🖼 Exemple de configuration EIGRP



---

# 🔎 Commandes de diagnostic

Les commandes suivantes permettent d’analyser le fonctionnement d’EIGRP.

Afficher les voisins :

```bash
show ip eigrp neighbors
```

Afficher la topologie :

```bash
show ip eigrp topology
```

Afficher les routes EIGRP :

```bash
show ip route eigrp
```

Afficher la configuration :

```bash
show running-config
```

---

## 🖼 Commandes de diagnostic



---

# 📊 Comparaison rapide RIP / OSPF / EIGRP

| Protocole | Type                | Convergence | Support  |
| --------- | ------------------- | ----------- | -------- |
| RIP       | Vecteur de distance | Lente       | Standard |
| OSPF      | État de lien        | Rapide      | Standard |
| EIGRP     | Hybride             | Très rapide | Cisco    |


---

# 🧾 Résumé

**EIGRP** est un protocole de routage dynamique performant conçu pour les infrastructures Cisco.

Caractéristiques :

```
Protocole propriétaire Cisco
Algorithme DUAL
Convergence rapide
Support IPv4 / IPv6
Load balancing avancé
```

Éléments clés :

- Neighbor Table
- Topology Table
- Routing Table

Grâce à ses performances et sa rapidité de convergence, EIGRP reste **un protocole très utilisé dans les infrastructures Cisco d’entreprise**.