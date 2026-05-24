# 🌪️ Tempêtes de diffusion & collisions

Brodcast Storm

> [!info]  
> Dans un réseau, une mauvaise gestion du trafic peut provoquer des **collisions** ou une **tempête de diffusion (broadcast storm)**.

---

## 🔀 Réseaux partagés vs commutés



|Type de réseau|Caractéristiques|
|---|---|
|**Partagé**|Support commun → collisions possibles|
|**Commuté**|Utilise des switches → trafic dirigé intelligemment|

---

## 🖧 Réseaux commutés

Un **réseau commuté** fonctionne grâce aux Switch qui dirigent les données vers le bon destinataire.

**Caractéristiques :**

- Pas de collisions
    
- Fonctionne en **Full Duplex**
    
- Les trames sont mémorisées temporairement
    
- Utilise des **tables MAC**
    
- Plus performant mais plus coûteux
    

---

## 🌪️ Tempête de diffusion (Broadcast Storm)

> [!warning]  
> Une tempête de diffusion se produit lorsque des trames broadcast se propagent de façon incontrôlée dans le réseau.

**Définition :**  
Propagation excessive de trames de diffusion → surcharge réseau.

---

### 🚨 Symptômes

- Augmentation du trafic réseau
    
- Augmentation des collisions
    
- Taux d’utilisation très élevé
    
- Perte de connectivité
    
- Logs d’erreurs sur les équipements
    
- Comportement anormal des appareils
    

---

### 💥 Effets

- Saturation du réseau
    
- Boucles de trafic
    
- Réseau inutilisable
    

---

### ⚠️ Causes

- Boucles dans la topologie
    
- Mauvaise configuration
    
- Panne matérielle
    
- Mauvaise conception réseau
    
- Malware / attaques
    
- Problèmes de routage
    

---

## 🧠 À retenir

|Problème|Cause principale|Solution|
|---|---|---|
|Collision|Réseau partagé|Utiliser des switches|
|Broadcast Storm|Boucles réseau|Activer STP, bonne configuration|

