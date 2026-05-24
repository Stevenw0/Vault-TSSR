# 🌐 AS — Autonomous System (Système autonome)

## 📌 Définition

Un **système autonome (AS)** est un ensemble de réseaux IP gérés par **un administrateur commun** et partageant **une politique de routage commune**. :contentReference[oaicite:1]{index=1}

Les systèmes autonomes permettent de **diviser l’Internet global en réseaux plus petits et plus faciles à gérer**. :contentReference[oaicite:2]{index=2}

Un AS peut appartenir par exemple à :

- un fournisseur d’accès Internet (ISP)
- une grande entreprise
- une université
- une organisation publique.

---

## 🧠 Objectif des systèmes autonomes

Les systèmes autonomes permettent :

- de structurer l’Internet
- de simplifier la gestion du routage
- d’appliquer des politiques de routage différentes selon les organisations
- de faciliter l’échange de routes entre opérateurs.

Chaque AS fonctionne comme un **domaine de routage indépendant**.

---

## 🔢 Numéro de système autonome (ASN)

Chaque système autonome possède un **numéro unique appelé ASN (Autonomous System Number)**.

Ce numéro sert à :

- identifier un réseau sur Internet
- permettre les échanges de routes entre AS
- configurer certains protocoles de routage.

Ce numéro est attribué par :

- un fournisseur de services
- un organisme d’attribution comme **InterNIC**. :contentReference[oaicite:3]{index=3}

---

## 📊 Types d’ASN

Historiquement, les numéros AS étaient codés sur **16 bits**. :contentReference[oaicite:4]{index=4}

Aujourd’hui deux formats existent.

| Type | Taille | Plage |
|---|---|---|
| ASN 16 bits | ancien format | 1 – 65535 |
| ASN 32 bits | format étendu | 1 – 4294967295 |

Les ASN **32 bits** ont été introduits pour répondre à la croissance d’Internet.

---

## 🧱 Routage dans un système autonome

Les protocoles de routage sont classés en deux catégories.

### IGP — Interior Gateway Protocol

Les IGP sont utilisés **à l’intérieur d’un système autonome**.

Exemples :

- RIP
- OSPF
- EIGRP
- IS-IS

Ces protocoles permettent d’échanger les routes **entre les routeurs d’un même AS**.

---

### EGP — Exterior Gateway Protocol

Les EGP sont utilisés **entre plusieurs systèmes autonomes**.

Le protocole principal utilisé sur Internet est :

```
BGP — Border Gateway Protocol
```

BGP permet aux AS :

- d’échanger leurs routes
- de déterminer les meilleurs chemins
- d’appliquer des politiques de routage.

---

## 🌍 Rôle des AS dans Internet

Internet est constitué de **milliers de systèmes autonomes interconnectés**.

Chaque AS :

- gère ses propres réseaux
- applique ses propres politiques de routage
- échange des routes avec d’autres AS via **BGP**.

Exemples d’AS :

| Organisation | ASN |
|---|---|
| Google | AS15169 |
| Cloudflare | AS13335 |
| Orange | AS3215 |

---

## 🚀 Avantages des systèmes autonomes

Les systèmes autonomes apportent plusieurs avantages :

- meilleure organisation d’Internet
- gestion simplifiée des routes
- séparation des politiques de routage
- meilleure évolutivité des réseaux.

---

## 📊 Résumé

| Élément | Description |
|---|---|
| AS | Ensemble de réseaux sous une même administration |
| ASN | Numéro unique identifiant un système autonome |
| IGP | Routage interne à un AS |
| BGP | Routage entre systèmes autonomes |
| Internet | Ensemble d’AS interconnectés |