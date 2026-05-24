# 🆔 Adresse MAC (Media Access Control)

Adresse Mac

> [!info]  
> Une **adresse MAC** est un identifiant **unique** attribué à chaque interface réseau.  
> Elle fonctionne au **niveau de la couche 2 (Liaison de données)** du modèle OSI.

---

## 🔢 Structure d’une adresse MAC

- Longueur : **6 octets (48 bits)**
    
- Format : `XX:XX:XX:XX:XX:XX`
    
- Les **3 premiers octets** → identifient le constructeur (OUI)
    
- Les **3 derniers octets** → identifiant unique de l’appareil
    

> [!tip]  
> Exemple : `00:1A:2B:4C:5D:6E`

---

## 📡 Types d’adresses MAC

### 🎯 **MAC Unicast**

**Description :**

- Adresse attribuée à **une seule interface réseau**
    
- Communication point à point
    

**Utilisation :**

- Envoi de données vers un seul appareil
    

---

### 📢 **MAC Broadcast**

**Description :**

- Adresse spéciale pour envoyer à **tous les appareils du réseau**
    

**Adresse :**

`FF:FF:FF:FF:FF:FF`

**Utilisation :**

- Découverte de réseau (ex : ARP Request)
    

---

### 👥 **MAC Multicast**

**Description :**

- Envoi vers **un groupe spécifique** d’appareils
    

**Caractéristique :**

- Les adresses MAC multicast commencent par :
    

`01:XX:XX:XX:XX:XX`

**Utilisation :**

- Streaming
    
- Protocoles réseau de groupe
    

---

## 🧠 Résumé rapide

|Type|Destination|Exemple|
|---|---|---|
|**Unicast**|Un seul appareil|00:1A:2B:4C:5D:6E|
|**Broadcast**|Tous les appareils|FF:FF:FF:FF:FF:FF|
|**Multicast**|Groupe d’appareils|01:00:5E:xx:xx:xx|