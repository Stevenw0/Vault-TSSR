# 🌐 Ethernet : VLAN (Virtual LAN)

VLAN

> [!info]  
> **VLAN = Virtual Local Area Network**  
> Permet de créer plusieurs **réseaux logiques** sur une **même infrastructure physique**.

---

## 🧠 Principe



- Séparation **logique** au lieu de séparation physique
    
- Plusieurs réseaux virtuels sur un même switch
    
- Les machines de VLAN différents **ne communiquent pas directement**
    

  


---

## 🎯 Pourquoi utiliser les VLAN ?

|Problème|Solution VLAN|
|---|---|
|Réseau non sécurisé|Isolation des groupes d’utilisateurs|
|Trop de diffusion|Réduction du domaine de broadcast|
|Coût élevé des équipements|Plusieurs réseaux sur un seul switch|

---

## ✅ Avantages des VLAN

- Réduction du trafic de diffusion
    
- Séparation des flux utilisateurs
    
- Sécurité améliorée
    
- Réseaux virtuels sur un seul LAN physique
    

---

## 🧩 Types de VLAN

### 🔌 VLAN **Niveau 1** (par port)

  


- Affectation selon le **port du switch**
    
- Simple à configurer
    
- Utilise **802.1Q** entre switches
    

---

### 🆔 VLAN **Niveau 2** (par adresse MAC)

  


- Basé sur l’adresse **MAC**
    
- Configuration centralisée
    

---

### 🌍 VLAN **Niveau 3** (par adresse IP)



- Basé sur l’adresse **IP réseau**
    
- Appartenance automatique
    

---

## 🖧 Fonctionnement d’un VLAN

  


- Chaque VLAN agit comme un LAN distinct
    
- Plusieurs VLANs partagent la même infrastructure
    

---

## 🏷️ Norme **802.1Q**



## 🧱 Trame Ethernet 802.1Q



- Ajoute un **tag VLAN** dans la trame Ethernet
    
- Identifie le VLAN d’origine
    
- Permet le transport de plusieurs VLANs
    

---

## 🔗 Trunk (liaison d’agrégation)



> [!tip]  
> Un **trunk** transporte le trafic de plusieurs VLANs entre équipements.

- Contient l’identifiant VLAN
    
- Utilisé entre commutateurs ou vers routeur
    
- Nécessite le marquage **802.1Q**
    

---

## ⚙️ Modes opérationnels des ports (Cisco)

|Mode|Description|
|---|---|
|**Access**|Transporte un seul VLAN (PC, serveur)|
|**Trunk**|Transporte plusieurs VLANs (switch ↔ switch, switch ↔ routeur)|

Un port trunk ajoute des **étiquettes VLAN** aux trames.

---

## 🛠️ Mise en place d’un VLAN



Étapes générales :

1. Création du VLAN
    
2. Affectation des ports
    
3. Configuration trunk si nécessaire
    
4. Vérification
    

---

## 🧠 Résumé rapide

|Élément|Rôle|
|---|---|
|VLAN|Réseau logique|
|802.1Q|Marquage VLAN|
|Port Access|Un seul VLAN|
|Trunk|Plusieurs VLANs|