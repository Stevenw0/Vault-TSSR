# 🧱 Le modèle OSI

> [!info]  
> Le **modèle OSI (Open Systems Interconnection)** est un modèle conceptuel qui décrit **comment les données circulent dans un réseau** à travers **7 couches**.


## ⚙️ Principe de fonctionnement du modèle OSI



### 🔄 Comparaison **OSI – TCP/IP**



> [!tip]  
> Le modèle **OSI** est théorique (référence pédagogique), tandis que **TCP/IP** est le modèle réellement utilisé sur Internet.

Ce modèle conserve les rôles des différents niveaux du modèle OSI tout en optimisant le nombre de niveaux, passant de 7 à 4.

- **Niveau 1 : Accès réseau**  
    Fusionne les rôles des couches Physique et Liaison de données.
    
- **Niveau 2 : Internet**  
    Correspond au rôle de la couche Réseau.
    
- **Niveau 3 : Transport**  
    Correspond au rôle de la couche Transport.
    
- **Niveau 4 : Application**  
    Fusionne les rôles des couches Session, Présentation et Application.


---

## 🧩 Les sept couches du modèle OSI



> [!example]  
> Chaque couche a un rôle précis et communique avec la couche équivalente sur la machine distante.

---

## 🔝 Les couches individuellement

### **7️ Couche Application**



**Rôle :**

- Interface directe avec les logiciels utilisateurs
    
- Fournit des services réseau aux applications
    
- Définit les protocoles applicatifs
    

**Exemples :** HTTP, FTP, SMTP

---

### **6️ Couche Présentation**



**Rôle :**

- Traduction du format des données
    
- Compression
    
- Chiffrement / Déchiffrement
    

---

### **5️ Couche Session**



**Rôle :**

- Établit et termine les sessions
    
- Gère le dialogue entre applications
    
- Authentification et autorisation
    



---

### **4️ Couche Transport**

  


**Rôle :**

- Transmission de bout en bout
    
- Contrôle d’erreurs
    
- Qualité de service (QoS)
    
- Segmentation des données
    

**Protocoles :** TCP / UDP
🔗 Voir : Protocole TCP/UDP


---

### **3️ Couche Réseau**



**Rôle :**

- Routage
    
- Adressage logique (IP)
    
- Choix du meilleur chemin
    

🔗 Voir :
- Couche réseau + Adressage
- Routage
- Masque de sous réseau
- IPV6
---

### **2️ Couche Liaison de données**



**Rôle :**

- Communication entre deux nœuds directement connectés
    
- Encapsulation en trames
    
- Détection d’erreurs

🔗 Voir :
- VLAN
- Adresse Mac
- Brodcast Storm
- CSMA

---

### **1️ Couche Physique**



**Rôle :**

- Transmission des bits
    
- Caractéristiques électriques et mécaniques
    
- Câbles, signaux, connecteurs
    
🔗 Voir :
- Les support de transmissions
- Les équipements réseaux
---

## 📦 PDU — _Protocol Data Unit_



|Couche|Nom des données|
|---|---|
|7 → 5|Données / Messages|
|4|Segments (TCP) / Datagrammes (UDP)|
|3|Paquets|
|2|Trames|
|1|Bits|

🔗 Voir aussi :
- Protocole
---

## 🔄 Encapsulation / Décapsulation



> [!warning]  
> **Encapsulation** : Chaque couche ajoute ses informations.  
> **Décapsulation** : Chaque couche retire ses informations à la réception.
