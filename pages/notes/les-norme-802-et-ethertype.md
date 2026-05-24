# 🌐 Norme Ethernet IEEE 802.3

IEEE 802 ethertype

> [!info]  
> La norme **IEEE 802.3** définit le fonctionnement des réseaux **Ethernet** filaires.  
> Elle est publiée par l’**IEEE** et intègre le protocole **CSMA/CD** (détection de collisions).

---

## 📜 Évolutions importantes de la norme

|Norme|Année|Fonction|
|---|---|---|
|**IEEE 802.3q**|1993|Agrégation de VLAN|
|**IEEE 802.3ac**|1998|VLAN Tag|
|**IEEE 802.3ab**|1999|1000BASE-T (Gigabit cuivre)|
|**IEEE 802.3af**|2003|Power over Ethernet (PoE)|
|**IEEE 802.3ae**|2002|10GBASE-F (fibre)|
|**IEEE 802.3an**|2006|10GBASE-T|

---

## 🔍 802.3 vs Ethernet II

> [!warning]  
> Il existe **deux types de trames Ethernet**.

### 📦 Trame **IEEE 802.3**



- Ancien format
    
- Utilisé surtout par du matériel legacy
    
- Champ **Longueur** (< 1500)
    

---

### 📦 Trame **Ethernet II (DIX)**



- Format moderne (le plus utilisé)
    
- Champ **EtherType** (> 1500)
    
- Utilisé par les PC, serveurs, équipements actuels
    

---

## 🧬 Champ **EtherType**



> [!tip]  
> Le champ **EtherType** (2 octets) indique **quel protocole** est encapsulé dans la trame.

| Valeur | Protocole     |
| ------ | ------------- |
| 0x0800 | IPv4          |
| 0x0806 | ARP           |
| 0x8035 | RARP          |
| 0x86DD | IPv6          |
| 0x8100 | VLAN (802.1Q) |
| 0x8137 | Novell IPX    |
| 0x809B | AppleTalk     |
| 0x0BAD | Banyan Vines  |

## La norme 802.1

|Norme IEEE|Année|Fonction|
|---|---|---|
|**802.1**|—|Couches de protocole au-dessus des couches MAC et LLC|
|**802.1D**|1998 2004|MAC Bridges — Spanning Tree Protocol|
|**802.1w**|1998 2004|Rapid Spanning Tree (intégré à 802.1D-2004)|
|**802.1s**|2003|Multiple Spanning Tree (intégré à 802.1Q-2003)|
|**802.1Q**|1998|VLAN (Virtual LANs)|
|**802.1X**|2001|Contrôle d’accès réseau basé sur port|
|**802.1ad**|2005|Provider Bridging (Q-in-Q)|
|**802.1aq**|2012|Shortest Path Bridging (remplace 802.1D)|