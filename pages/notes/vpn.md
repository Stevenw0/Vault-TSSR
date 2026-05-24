# 🔐 VPN — Virtual Private Network

---

## 📌 Définition

**VPN (Virtual Private Network)**, aussi appelé **tunneling**, est une technologie qui permet le **chiffrement de la connexion** :

- entre **un hôte et un autre hôte**
    
- entre **un hôte et un réseau**
    
- entre **deux sites distants**
    

Le VPN est utilisé sur des **réseaux publics** (comme Internet) afin d’**éviter l’interception des données** et d’assurer la **protection et la sécurisation de la connexion**.

---

## 🌍 Types de VPN

- **Hôte à hôte**  
    → Microsoft Direct Access
    
- **Hôte vers réseau (Client-to-Site)**  
    → OpenVPN, VPN Cisco
    
- **Inter-sites (Site-to-Site / Réseau à réseau)**  
    → OpenVPN, VPN Cisco, Tinc
    



---

## 🧠 Contexte d’utilisation

Le VPN est une technique permettant à **un ou plusieurs postes distants** de communiquer de manière **sécurisée**, tout en utilisant des **infrastructures publiques**.

Ce type de liaison est apparu pour répondre à un **besoin croissant des entreprises** :

- relier plusieurs sites
    
- de manière **simple**
    
- et **économique**
    



---

## ⚙️ Principe de fonctionnement d’un VPN

Un VPN repose sur un **protocole de tunneling**.

Ce protocole permet :

- de faire circuler les informations de l’entreprise **de façon chiffrée**
    
- d’un bout à l’autre du tunnel
    

Ainsi, les utilisateurs ont l’impression de se connecter **directement au réseau de leur entreprise**.

Le VPN :

- identifie l’émetteur et le destinataire
    
- construit un **chemin virtuel**
    
- chiffre les données
    
- transporte les données via Internet
    

👉 Les VPN simulent un **réseau privé**, alors qu’ils utilisent en réalité une **infrastructure partagée** comme Internet.

---

## 🕳️ Principe de tunneling

Le **tunneling** consiste à :

- construire un **chemin virtuel**
    
- identifier l’émetteur et le destinataire
    
- chiffrer les données à la source
    
- transmettre les données jusqu’au point de sortie du tunnel
    

### 🔑 Caractéristique principale

> Les données qui **entrent** dans le tunnel au point A  
> **ressortent obligatoirement** au point B.



---

## 🔁 Phases d’établissement d’un VPN

L’établissement d’une connexion VPN se fait en **deux phases** :

### 🔹 Phase 1 — Négociation

- Les deux extrémités du tunnel (appelées **pairs**) :
    
    - négocient les paramètres de sécurité
        
    - établissent une connexion sécurisée
        
    - échangent les clés de chiffrement
        

### 🔹 Phase 2 — Échange de données

- Les clés échangées sont utilisées pour :
    
    - chiffrer
        
    - déchiffrer
        
- Les données transitent à travers le tunnel VPN
    

---

## 🔐 Protocoles de négociation

### 🔹 IKEv2 / IPsec

(_Internet Key Exchange v2 / Internet Protocol Security_)

- Utilise IPsec pour la sécurité
    
- Rapide et stable
    
- Très adapté aux connexions mobiles
    
- Résistant aux interruptions de réseau
    

---

### 🔹 OpenVPN

- Protocole **open-source**
    
- Très flexible
    
- Peut utiliser **UDP ou TCP**
    
- Capable de contourner les pare-feux
    
- Adapté aux connexions :
    
    - client-à-site
        
    - site-à-site
        

---

### 🔹 L2TP / IPsec

(_Layer 2 Tunneling Protocol / IPsec_)

- L2TP ne chiffre pas les données seul
    
- IPsec assure :
    
    - la confidentialité
        
    - l’intégrité des données
        

---

### 🔹 ISAKMP

(_Internet Security Association and Key Management Protocol_)

- Définit les procédures et formats pour :
    
    - établir
        
    - négocier
        
    - modifier
        
    - supprimer des **associations de sécurité (SA)**
        
- Indépendant des algorithmes cryptographiques
    
- Compatible avec différents mécanismes de gestion de clés
    

---

## 🔄 Protocoles pour l’échange et la protection des données

### 🔹 AES — Advanced Encryption Standard

- Algorithme de chiffrement **symétrique**
    
- Tailles de clé :
    
    - 128 bits
        
    - 192 bits
        
    - 256 bits
        
- Très sécurisé et performant
    

---

### 🔹 HMAC — Hash-Based Message Authentication Code

- Fournit :
    
    - l’authentification des messages
        
    - l’intégrité des données
        
- Utilise des fonctions de hachage comme **SHA-256**
    

---

### 🔹 SHA — Secure Hash Algorithm

- Famille de fonctions de hachage
    
- Inclut :
    
    - SHA-1
        
    - SHA-2 (SHA-256, SHA-384, SHA-512)
        
- Utilisé pour garantir l’intégrité des données
    

---

## 🧠 À retenir

- VPN = **connexion sécurisée sur réseau public**
    
- Tunneling = **chemin virtuel chiffré**
    
- Deux phases : négociation + échange
    
- IPsec et OpenVPN = références majeures
    
- Sécurité = chiffrement + authentification + intégrité