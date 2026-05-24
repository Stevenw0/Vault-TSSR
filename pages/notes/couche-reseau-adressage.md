# 🌐 La couche Réseau (Layer 3)

Couche réseau + Adressage

> [!info]  
> La couche réseau du modèle OSI permet l’**interconnexion des réseaux** grâce au protocole **IP (Internet Protocol)**.

---

## 🎯 Rôles de la couche réseau

La couche réseau assure deux fonctions principales :

- **Adressage IP** → chaque équipement possède une adresse IP
    
- **Routage** → choix du meilleur chemin entre source et destination
    

---

## 📦 Détail d’un paquet IPv4



---

# 🧮 Adressage IP

Il existe **deux versions d’adresses IP** :

|Version|Taille|Format|
|---|---|---|
|**IPv4**|32 bits|4 nombres (0–255) séparés par des points|
|**IPv6**|128 bits|Groupes hexadécimaux séparés par “:”|

  


---

## ⚙️ Attribution d’une adresse IP

|Méthode|Description|
|---|---|
|**Statique**|Adresse configurée manuellement|
|**Dynamique**|Adresse attribuée automatiquement (DHCP / BOOTP)|

---

## 🧩 Adressage IPv4

  


- 32 bits (4 octets)
    
- Représentation décimale
    
- Identifie une **interface réseau**
    

---

### 🧠 Structure d’une adresse IPv4



|Partie|Rôle|
|---|---|
|NetID|Identifie le réseau|
|HostID|Identifie la machine|

---

### 🏷️ Classes d’adresses IPv4



---

### 🚨 Adresses IPv4 spéciales



|Adresse|Rôle|
|---|---|
|Adresse réseau|Identifie le réseau|
|Broadcast|Diffusion à tous|
|127.0.0.1|Loopback|
|0.0.0.0|Adresse par défaut|

---

### 🌍 Adresses IP publiques & privées

**IP publiques**

- Attribuées par les FAI
    
- Routables sur Internet
    

**IP privées**

- Utilisées en réseau local
    
- Non routables sur Internet
    



---

## 🧠 Résumé rapide

|Élément|Rôle|
|---|---|
|IP|Protocole de couche réseau|
|IPv4|Adresse sur 32 bits|
|IPv6|Adresse sur 128 bits|
|DHCP|Attribution automatique|
|Routage|Choix du chemin|