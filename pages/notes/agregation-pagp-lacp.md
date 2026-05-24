# 🔗 Agrégation de liens — EtherChannel, PAgP & LACP


> [!info]  
> L’**agrégation de liens** permet de regrouper plusieurs liaisons physiques en **un seul lien logique** pour augmenter la bande passante et la tolérance de panne.

---

## 🚀 Pourquoi agréger des liens ?

- Augmenter la bande passante (ex : 4 × 1 Gb/s = 4 Gb/s)
    
- Répartition de charge
    
- Tolérance aux pannes
    
- Vu comme **un seul lien** par STP
    

---

## 🧩 EtherChannel (Cisco)

**EtherChannel** regroupe plusieurs ports Ethernet en un lien logique appelé **PortChannel**.

### ⚙️ Caractéristiques

- Ports de même vitesse et duplex
    
- Maximum **8 ports** par EtherChannel
    
- Configuration identique des deux côtés
    
- Même VLAN natif et VLAN autorisés si trunk
    
- Les paramètres du PortChannel s’appliquent aux ports physiques
    

---

## 🔄 PAgP — _Port Aggregation Protocol_ (Cisco)

Protocole propriétaire Cisco.

|Mode|Fonction|
|---|---|
|**On**|Force l’agrégation sans négociation|
|**Desirable**|Initie la négociation|
|**Auto**|Répond à la négociation|

> Au moins une extrémité doit être en **Desirable**.

### 🧪 Exemple PAgP



---

## 🌐 LACP — _Link Aggregation Control Protocol_

Protocole standard IEEE (**802.1AX**, anciennement 802.3ad).

|Mode|Fonction|
|---|---|
|**On**|Force l’agrégation|
|**Active**|Initie la négociation|
|**Passive**|Répond à la négociation|

> Au moins une extrémité doit être en **Active**.

### 🧪 Exemple LACP



---

## 📊 Commandes de vérification EtherChannel



---

## 🧠 Résumé rapide

|Technologie|Type|Standard|
|---|---|---|
|EtherChannel|Agrégation Cisco|Propriétaire|
|PAgP|Négociation EtherChannel|Cisco|
|LACP|Agrégation multi-constructeurs|IEEE 802.1AX|