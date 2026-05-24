## 🖧 DHCP — Dynamic Host Configuration Protocol

Le protocole **DHCP** est un protocole client/serveur qui attribue automatiquement :

- IPV4 **ou** IPV6
    
- Masque de sous réseau
    
- Passerelle
    
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



