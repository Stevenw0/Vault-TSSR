# Chapitre 4 — Comment un paquet trouve son chemin

TCP assure que les données arrivent sans erreur. Mais comment un paquet sait-il **quelle route prendre** pour traverser Internet depuis ton PC jusqu'aux serveurs de Google ?

C'est le rôle de la **couche Réseau** (couche 3) et du protocole **IP**.

---

## 4.1 L'adresse IP — l'identité d'une machine sur un réseau

Comme une adresse postale, une **adresse IP** permet de localiser une machine sur un réseau.

**IPv4** : 4 octets séparés par des points → `192.168.1.42`



Chaque adresse contient deux informations :
- La **partie réseau** : identifie le réseau (comme la ville)
- La **partie hôte** : identifie la machine (comme le numéro de rue)

Le **masque de sous-réseau** précise où s'arrête l'une et où commence l'autre.

```
Adresse : 192.168.1.42
Masque  : 255.255.255.0   (ou /24 en notation CIDR)
         ─────────────       ──────────
         Réseau              Hôte
         192.168.1           .42
```

### Adresses privées (non routables sur Internet)

Ces plages sont réservées aux réseaux internes — ton routeur les traduit avant d'envoyer sur Internet (NAT).

|Plage|CIDR|Usage typique|
|---|---|---|
|10.0.0.0 → 10.255.255.255|10.0.0.0/8|Grandes entreprises|
|172.16.0.0 → 172.31.255.255|172.16.0.0/12|Réseaux internes|
|192.168.0.0 → 192.168.255.255|192.168.0.0/16|Box, PME, usage courant|

:::info
`127.0.0.1` = **loopback** (localhost) — la machine se contacte elle-même. Utile pour tester des services en local.
:::

---

## 4.2 CIDR et sous-réseaux — découper l'espace d'adressage

La **notation CIDR** (Classless Inter-Domain Routing) indique combien de bits servent au réseau.

```
192.168.1.0/24  →  24 bits réseau, 8 bits hôte  →  256 adresses (254 utilisables)
192.168.1.0/26  →  26 bits réseau, 6 bits hôte  →  64 adresses (62 utilisables)
```

:::info
2 adresses sont toujours réservées : l'adresse réseau (première) et l'adresse broadcast (dernière). Un `/24` donne 256 − 2 = **254 hôtes utilisables**.
:::

### Exemple guidé : découper 192.168.1.0/24 en 4 sous-réseaux

On emprunte 2 bits au champ hôte → on passe en **/26** (2² = 4 sous-réseaux, 62 hôtes chacun).

|Sous-réseau|Adresse réseau|1ère IP utilisable|Dernière IP|Broadcast|
|---|---|---|---|---|
|S1|192.168.1.0/26|192.168.1.1|192.168.1.62|192.168.1.63|
|S2|192.168.1.64/26|192.168.1.65|192.168.1.126|192.168.1.127|
|S3|192.168.1.128/26|192.168.1.129|192.168.1.190|192.168.1.191|
|S4|192.168.1.192/26|192.168.1.193|192.168.1.254|192.168.1.255|

### VLSM — des sous-réseaux de tailles différentes

**VLSM** (Variable Length Subnet Masking) permet d'adapter la taille de chaque sous-réseau à son besoin réel, sans gaspiller d'adresses.

| Besoin | Masque | Hôtes disponibles |
|---|---|---|
| Lien point à point (2 routeurs) | /30 | 2 |
| Petit bureau | /26 | 62 |
| Réseau standard | /24 | 254 |

---

## 4.3 Unicast, Broadcast, Multicast

|Mode|Cible|Exemple|
|---|---|---|
|**Unicast**|1 seul destinataire|Ta requête vers google.com|
|**Broadcast**|Tous les appareils du réseau|DHCP DISCOVER, ARP|
|**Multicast**|Un groupe d'appareils abonnés|Streaming IPTV, OSPF|

Ces trois modes existent à **deux niveaux** :
- En L3 (IP) : broadcast `192.168.1.255`, multicast `224.x.x.x`
- En L2 (MAC) : broadcast `FF:FF:FF:FF:FF:FF`, multicast `01:00:5E:xx:xx:xx`

---

## 4.4 ARP — faire le lien entre IP et MAC

Ton PC connaît l'adresse IP de destination. Mais pour envoyer les données sur le câble, il a besoin de l'**adresse MAC** correspondante. C'est le rôle d'**ARP** (Address Resolution Protocol).

### Fonctionnement

1. Ton PC veut contacter `192.168.1.10`.
2. Il envoie un **broadcast** sur le réseau local : *"Qui a l'IP 192.168.1.10 ?"*
3. La machine concernée répond en **unicast** avec sa propre adresse MAC.
4. Ton PC stocke la correspondance dans sa **table ARP** (cache temporaire).

```
Qui a 192.168.1.10 ? → [broadcast sur tout le LAN]
C'est moi, ma MAC est C8:5A:CF:06:8C:67 ← [unicast de la cible]
```

```bash
arp -a         # Afficher la table ARP (Windows et Linux)
ip neigh show  # Linux (version moderne)
```

:::warning
**ARP Spoofing** : un attaquant peut envoyer de fausses réponses ARP pour se faire passer pour une autre machine et intercepter le trafic. Protection : Dynamic ARP Inspection sur les switches managés + HTTPS pour chiffrer les données.
:::

---

## 4.5 Le paquet IP — la structure des données en transit

Chaque donnée voyageant sur Internet est encapsulée dans un **paquet IP**.

|Champ|Rôle|
|---|---|
|**IP source**|Adresse de l'expéditeur|
|**IP destination**|Adresse du destinataire|
|**TTL** (Time To Live)|Compteur décrémenté à chaque routeur — évite les boucles infinies|
|**Protocole**|TCP (6), UDP (17), ICMP (1)|
|**Données**|Le contenu utile (segment TCP/UDP)|

:::info
IP est un protocole **non fiable et sans connexion** — il ne garantit ni l'arrivée ni l'ordre des paquets. C'est TCP (couche 4) qui s'en charge.
:::

---

## 4.6 ICMP — ping et traceroute

**ICMP** (Internet Control Message Protocol) sert à envoyer des **messages de contrôle**. Il ne transporte pas de données utilisateur, mais est indispensable pour diagnostiquer le réseau.

### Ping — tester la joignabilité

```bash
ping 8.8.8.8        # Teste si la cible est joignable
ping google.com     # Résout le nom + teste la joignabilité
```

Résultat : temps de réponse en millisecondes (latence) et taux de perte.

### Traceroute — suivre le chemin d'un paquet

```bash
traceroute google.com   # Linux / macOS
tracert google.com      # Windows
```

Affiche chaque **routeur traversé** jusqu'à la destination. Utilise des TTL croissants : chaque routeur qui reçoit un paquet avec TTL=0 renvoie un message ICMP "Time Exceeded" — ce qui permet de cartographier le chemin.

---

## 4.7 Le routage — choisir le bon chemin

Un **routeur** relie plusieurs réseaux. Quand un paquet arrive, il consulte sa **table de routage** pour décider où l'envoyer.

### Fonctionnement

1. Le routeur lit l'**IP de destination**.
2. Il cherche la correspondance dans sa table de routage.
3. Il transmet au **prochain saut** (next hop).

### Table de routage

|Destination|Passerelle (next hop)|Interface|
|---|---|---|
|192.168.1.0/24|—|eth0 (réseau directement connecté)|
|10.0.0.0/8|192.168.1.1|eth0|
|0.0.0.0/0|192.168.1.1|eth0 → route par défaut (Internet)|

La route `0.0.0.0/0` est la **route par défaut** : tout ce qui ne correspond à aucune autre entrée est envoyé là.

```bash
route print      # Afficher la table de routage (Windows)
ip route show    # Linux
```

### Routage dynamique

En entreprise ou chez les FAI, les routeurs **s'échangent automatiquement** leurs tables de routage.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XBPK-6zrLZ8?si=IUIKZOL6uKEk8uGL" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

|Protocole|Usage|
|---|---|
|**OSPF**|Réseau d'entreprise — convergence rapide|
|**BGP**|Internet — échanges entre FAI et opérateurs|
|**RIP**|Simple, limité à 15 sauts (usage rare aujourd'hui)|

---

## 4.8 IPv6 — l'avenir de l'adressage

IPv4 = 32 bits = ~4,3 milliards d'adresses. Épuisé depuis 2011.

**IPv6** = 128 bits = 3,4 × 10³⁸ adresses. Assez pour adresser chaque grain de sable de la planète.

|Caractéristique|IPv4|IPv6|
|---|---|---|
|Taille|32 bits|128 bits|
|Format|`192.168.1.1`|`2001:db8:abcd:12::1`|
|NAT nécessaire|Oui|Non|
|Configuration automatique|DHCP|SLAAC ou DHCPv6|

### Simplification d'écriture IPv6

- Zéros initiaux dans un groupe peuvent être omis : `0db8` → `db8`
- Une seule suite de groupes nuls peut être remplacée par `::` : `2001:0db8:0000:0000::1` → `2001:db8::1`

---

:::success
**Ce que tu retiens de ce chapitre**
- **IP** identifie chaque appareil avec une adresse ; **CIDR** découpe l'espace d'adressage de façon flexible.
- **ARP** résout les adresses MAC à partir des IP sur le réseau local.
- Les **routeurs** acheminent les paquets de réseau en réseau grâce à leurs tables de routage.
- **ICMP** (ping, traceroute) est l'outil de diagnostic de base.
- **IPv6** remplace progressivement IPv4 pour répondre à l'épuisement des adresses.

**La question suivante** : le paquet IP est créé — mais comment voyage-t-il physiquement d'un équipement à l'autre sur le réseau local ? → Chapitre 5 : la couche Liaison.
:::
