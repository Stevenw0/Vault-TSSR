# 📡 Protocoles réseaux
> [!info]  
> Un **protocole réseau** est un ensemble de règles qui permet aux équipements de communiquer correctement.

---

## 🌳 Protocole **STP (Spanning Tree Protocol)**



**Définition :**  
Le STP empêche la formation de boucles de couche 2 dans les réseaux Ethernet.

> [!warning]  
> Sans STP, une boucle peut provoquer une émission infinie de trames.

### 🎯 Objectifs du STP

- Éviter les boucles
    
- Empêcher les tempêtes de diffusion
    
- Maintenir un chemin de secours
    
- Assurer la stabilité
    



---

## 🌍 Protocoles applicatifs (Couche 7)

|Protocole|Rôle|
|---|---|
|HTTP / HTTPS|Web|
|FTP|Fichiers|
|SMTP / POP3 / IMAP|Emails|
|SSH / Telnet|Accès distant|

---

## 📶 ICMP

- Messages de contrôle réseau
    
- Diagnostic (ping)
    

---

## 🔄 ARP

- Association IP ↔ MAC
    

---

# 🚚 Transport : **TCP et UDP**

^83f312

Ces deux protocoles fonctionnent à la **couche Transport (couche 4 OSI)**.

---

## 🔵 TCP — Transmission Control Protocol

Protocole **orienté connexion**.

  


### Fonctionnement (Three-Way Handshake)

1. **SYN** : le client envoie un numéro de séquence
    
2. **SYN-ACK** : le serveur répond
    
3. **ACK** : le client confirme
    

✔ Connexion maintenue  
✔ Accusé de réception des paquets  
✔ Retransmission si perte

---

### Ports TCP connus

|Port|Service|
|---|---|
|80 / 443|HTTP / HTTPS|
|25, 110, 143, 587, 993, 995|SMTP, POP3, IMAP|
|21|FTP|
|23|Telnet|
|22|SSH|
|445|SMB|
|3389|RDP|

---

## 🟠 UDP — User Datagram Protocol

Protocole **non connecté**.



✔ Pas d’accusé de réception  
✔ Plus rapide  
✔ Moins fiable  
✔ Utilisé quand la vitesse est prioritaire

---

### Ports UDP connus

|Port|Service|
|---|---|
|53|DNS|
|67 / 68|DHCP|
|69|TFTP|
|123|NTP|
|161 / 162|SNMP|
|88|Kerberos|

---

## ⚖️ TCP vs UDP



|Caractéristique|TCP|UDP|
|---|---|---|
|Connexion|Oui|Non|
|Fiabilité|Haute|Faible|
|Vitesse|Moyenne|Rapide|
|Accusé réception|Oui|Non|
|Usage|Web, mails|Streaming, DNS|

---

## 🖧 DHCP — Dynamic Host Configuration Protocol

Le protocole **DHCP** est un protocole client/serveur qui attribue automatiquement :

- Adresse IP
    
- Masque de sous-réseau
    
- Passerelle par défaut
    
- Serveur DNS
    



---

### Principe de fonctionnement DHCP

DHCP fonctionne en mode **client-serveur**.  
Un serveur envoie une configuration IP à un client pour une durée donnée.

  


---

### Configuration du service DHCP sur le routeur

Le routeur peut jouer le rôle de **serveur DHCP**.



ip dhcp pool numéro_VLAN

network @réseau Masque

default-router @IP_passerelle

dns-server @IP_DNS

|Élément|Rôle|
|---|---|
|numéro_VLAN|Identifiant du VLAN|
|@réseau|Adresse réseau|
|Masque|Masque du réseau|
|@IP_passerelle|Passerelle par défaut|
|@IP_DNS|Serveur DNS|

### Exemple



---

# 🌍 DNS — Domain Name System

DNS permet de **traduire un nom de domaine en adresse IP** et inversement.

---

## 🔄 Requêtes DNS

|Type|Description|
|---|---|
|Itérative|Le serveur renvoie une référence|
|Récursive|Le serveur résout totalement la requête|

---

## 🗂️ Notions DNS

|Élément|Description|
|---|---|
|Zone|Domaine ou partie de domaine|
|Serveur primaire|Serveur autoritaire principal|
|Serveur secondaire|Copie de secours|

---

## 📄 Types d’enregistrements DNS

|Type|Rôle|
|---|---|
|SOA|Autorité de la zone|
|A|Nom → IPv4|
|AAAA|Nom → IPv6|
|PTR|IP → Nom|
|CNAME|Alias|
|MX|Serveur mail|
|NS|Serveur DNS|

---

## 🧠 À retenir

- TCP = fiable
    
- UDP = rapide
    
- DHCP = configuration IP automatique
    
- DNS = traduction nom ↔ IP