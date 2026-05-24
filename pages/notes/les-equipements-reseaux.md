# 🖧 Les équipements réseaux — Le matériel

Les équipements réseaux



> [!info]  
> Les équipements réseaux permettent de **connecter**, **diriger**, **protéger** et **optimiser** la communication entre les machines.

---

## ⚙️ Actifs vs Passifs



|Type|Description|
|---|---|
|**Actifs**|Traitement des données + alimentation électrique|
|**Passifs**|Support physique (câbles, prises, panneaux…)|

---

## 🧩 Équipements individuels

---

### 🔀 **Commutateur (Switch)**



> **Couche OSI : 2 — Liaison de données**
> Modèle OSI


**Rôle :**

- Connecte plusieurs appareils dans un LAN
    
- Analyse les adresses **MAC**
    
- Envoie les données uniquement au bon destinataire
    

#### ⚙️ Fonctionnement



- Crée une **table MAC**
    
- Réduit les collisions
    
- Améliore les performances du réseau
    

---

### 🌍 **Routeur (Router)**

#### 🏢 Routeur d’entreprise



#### 🏠 Routeur domestique



> **Couche OSI : 3 — Réseau**
> Modèle OSI

**Rôle :**

- Interconnecte plusieurs réseaux
    
- Gère le routage des paquets
    
- Utilise les adresses IP
    
- Choisit le meilleur chemin
    

---

### 🔌 **Concentrateur (Hub)**




> **Couche OSI : 1 — Physique**
> Modèle OSI

**Rôle :**

- Relie plusieurs machines en étoile
    
- Diffuse les données vers **tous** les ports
    
- Ne filtre pas le trafic
    
- Génère des collisions
    

**Différence avec un Switch :**  
Le hub envoie tout à tout le monde, le switch envoie seulement au destinataire.

---

### 📡 **Répéteur (Repeater)**



> **Couche OSI : 1 — Physique**
> Modèle OSI

**Rôle :**

- Régénère un signal affaibli
    
- Étend la distance du réseau
    

---

#### 📶 Répéteur **Wi-Fi**



- Étend la couverture Wi-Fi
    
- Portée typique : **20 à 50 m**
    
- Sensible aux murs et interférences

> **Couche OSI : 1 — Physique**
> Modèle OSI

---

### 🌉 **Passerelle (Gateway)**

  


> **Couche OSI : 3 (souvent) mais peut agir sur plusieurs couches**
> Modèle OSI

**Rôle :**

- Relie deux réseaux différents
    
- Traduit les protocoles
    
- Peut être matériel + logiciel
    

---

## 🧠 Résumé rapide

|Équipement|Couche OSI|Rôle principal|
|---|---|---|
|**Switch**|2|Transmission intelligente par MAC|
|**Routeur**|3|Routage entre réseaux|
|**Hub**|1|Diffusion simple du signal|
|**Répéteur**|1|Régénération du signal|
|**Passerelle**|3+|Traduction entre réseaux|
