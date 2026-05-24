
# 📶 Wi-Fi — IEEE 802.11

> [!info]  
> Le **Wi-Fi** est une technologie de réseau **sans fil** basée sur la norme **IEEE 802.11**.

---

## 🌍 Réseau sans fil

Un réseau sans fil permet de connecter des équipements **sans câbles**.

**Utilisations :**

- Accès Internet en mobilité
    
- Réseaux d’entreprise
    
- Réseaux domestiques
    

**Notions importantes :**

- **SSID** : nom du réseau (peut être masqué)
    
- **Chiffrement** :
    
    - WEP ❌ (abandonné)
        
    - WPA ❌ (abandonné)
        
    - WPA2 / WPA2-AES / CCMP ✔
        
    - 802.1X (authentification entreprise)
        

---

## 📡 Classification des réseaux sans fil



|Type|Signification|Portée|Technologie|
|---|---|---|---|
|**WPAN**|Personnel|Quelques mètres|Bluetooth|
|**WLAN**|Local|~100 m|Wi-Fi|
|**WMAN**|Métropolitain|Ville|WiMAX|
|**WWAN**|Étendu|Pays/monde|Réseaux cellulaires|

---

### 🔵 WPAN



- Bluetooth
    
- Norme **802.15.1**
    
- Faible énergie
    
- ~1 Mb/s pour 30 m
    

---

### 🟢 WLAN (Wi-Fi)



- Réseau local sans fil
    
- Norme **802.11**
    
- Portée : centaines de mètres
    

---

### 🟡 WMAN



- Boucle Locale Radio
    
- Norme **802.16 (WiMAX)**
    

---

### 🔴 WWAN



- Réseaux cellulaires mobiles
    

---

## 📜 Les normes Wi-Fi



---

## 🧩 Composants Wi-Fi



- Points d’accès (AP)
    
- Routeurs Wi-Fi
    
- Ponts Ethernet / Wi-Fi
    
- Cartes réseau sans fil (WNIC)
    
- Adaptateurs USB Wi-Fi
    

---

### Composants d’un WLAN



---

## 🏗️ Architectures Wi-Fi

### 🏢 Mode Infrastructure (BSS)



- Clients + Point d’accès
    
- **BSSID** = adresse MAC de l’AP
    

---

### 🏢 Mode Infrastructure ESS



- Plusieurs BSS interconnectés
    
- SSID commun
    
- Permet le **roaming**
    

---

### 👥 Mode Ad-Hoc (IBSS)



- Pas de point d’accès
    
- Communication directe entre stations
    

---

### 🧮 Exemple d’adressage (Infrastructure)

  


---

## 🧱 Trame Wi-Fi



|Champ|Rôle|
|---|---|
|FC|Contrôle de trame|
|Durée/ID|Temps d’occupation du canal|
|Adresses|Jusqu’à 3 adresses|
|Séquence|Gestion des fragments|
|CRC|Vérification d’erreur|

---

## 🧠 Résumé rapide

|Élément|Rôle|
|---|---|
|802.11|Norme Wi-Fi|
|SSID|Nom du réseau|
|AP|Point d’accès|
|BSS / ESS|Types de réseaux Wi-Fi|
|IBSS|Mode ad-hoc|