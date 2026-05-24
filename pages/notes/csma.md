# 📡 Technique CSMA

CSMA

> [!info]  
> **CSMA (Carrier Sense Multiple Access)** est une méthode d’accès au média réseau.  
> Elle consiste à **écouter le canal avant d’émettre** pour réduire les collisions.

---

## 🎧 Principe général du CSMA

- La station écoute le canal
    
- Si le canal est libre → émission
    
- Si occupé → attente
    
- En cas de collision → retransmission
    

> Utilisé surtout dans les **réseaux partagés** (ex : hub).

---

## 💥 CSMA/CD — Collision Detection

  


> [!warning]  
> Utilisé dans **Ethernet filaire (IEEE 802.3)**.

### 🔄 Fonctionnement

1. Écoute du canal
    
2. Canal libre → transmission
    
3. Canal occupé → attente
    
4. Collision détectée :
    
    - Arrêt immédiat
        
    - Envoi d’un signal **JAM**
        
    - Attente aléatoire (_backoff_)
        
    - Nouvelle tentative
        

**But :** Détecter et gérer les collisions.

---

## 📶 CSMA/CA — Collision Avoidance

  


> [!tip]  
> Utilisé dans les **réseaux Wi-Fi (IEEE 802.11)**.

### 🎯 Objectif

Éviter les collisions **avant** qu’elles ne se produisent.

### 🔄 Fonctionnement simplifié

1. La station écoute le canal
    
2. Si libre pendant un temps DIFS → elle peut émettre
    
3. Envoi d’un message **RTS** (Ready To Send)
    
4. Réponse **CTS** (Clear To Send)
    
5. Transmission des données
    
6. Réception confirmée par un **ACK**
    

Si aucun accusé de réception → collision supposée.

---

## ⚖️ CSMA/CD vs CSMA/CA

|Technique|Réseau|Principe|
|---|---|---|
|**CSMA/CD**|Ethernet filaire|Détecte les collisions|
|**CSMA/CA**|Wi-Fi|Évite les collisions|

---

## 🧠 À retenir

|Élément|Rôle|
|---|---|
|CSMA|Écoute du canal avant émission|
|CD|Collision Detection|
|CA|Collision Avoidance|
|Backoff|Attente aléatoire avant retransmission|