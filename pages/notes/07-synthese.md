# Chapitre 7 — Le voyage complet + Sécurité

Tu connais maintenant chaque couche. Il est temps de les assembler et de suivre **un seul paquet** depuis ta frappe clavier jusqu'à l'affichage de la page Google — et de comprendre comment la **sécurité** s'intègre à chaque niveau.

---

## 7.1 Le voyage complet — google.com de A à Z

### La scène

Tu ouvres Chrome, tu tapes `https://www.google.com`, tu appuies sur Entrée.

---

### Étape 1 — Ton PC obtient une adresse IP (DHCP)

Avant tout, ton PC doit avoir une adresse IP. Au démarrage (ou à la connexion réseau), il a envoyé une requête **DHCP DISCOVER** en broadcast. Ta box a répondu avec une offre : `192.168.1.42`, masque `/24`, passerelle `192.168.1.1`, DNS `192.168.1.1`.

**Couche concernée : Application (L7) — protocole DHCP sur UDP**

---

### Étape 2 — Résolution DNS

Chrome doit connaître l'IP de `www.google.com`. Il interroge le serveur DNS (`192.168.1.1`) :

```
Requête  → "Quelle est l'IP de www.google.com ?"
Réponse  ← "142.250.74.46"
```

Le serveur DNS de ta box a peut-être transmis la question à un serveur DNS de Google (`8.8.8.8`) ou de ton FAI si la réponse n'était pas en cache.

**Couche concernée : Application (L7) — protocole DNS sur UDP port 53**

---

### Étape 3 — Établissement de la connexion TCP

Chrome sait l'IP. Il établit une connexion TCP avec `142.250.74.46:443` (HTTPS) :

```
Ton PC   →  SYN           →  Serveur Google
Ton PC   ←  SYN-ACK       ←  Serveur Google
Ton PC   →  ACK           →  Serveur Google
```

**Couche concernée : Transport (L4) — TCP**

---

### Étape 4 — Négociation TLS

Avant d'envoyer la requête HTTP, les deux parties négocient un chiffrement :

```
Chrome   →  "ClientHello" (liste des algos supportés)   →  Google
Chrome   ←  "ServerHello" + certificat SSL               ←  Google
Chrome   →  Clé de session chiffrée                      →  Google
[Tunnel TLS établi — tout ce qui suit est chiffré]
```

**Couche concernée : Présentation (L6) — TLS**

---

### Étape 5 — Requête HTTP

Dans le tunnel TLS, Chrome envoie :

```
GET / HTTP/1.1
Host: www.google.com
User-Agent: Chrome/...
Accept: text/html
```

**Couche concernée : Application (L7) — HTTP**

---

### Étape 6 — Encapsulation couche par couche

Chrome passe la requête à la couche Transport, qui la passe à la couche Réseau, etc. À chaque étape, une en-tête est ajoutée :

```
[HTTP Request]
→ TCP encapsule : [TCP Header | HTTP Request]
→ IP encapsule  : [IP Header | TCP Header | HTTP Request]
→ Ethernet enc. : [ETH Header | IP Header | TCP Header | HTTP Request | FCS]
→ Signal physique sur le câble ou les ondes
```

---

### Étape 7 — Traversée du réseau local

La trame Ethernet part de ta carte réseau. Le switch lit l'adresse MAC destination (`MAC de ta box`) et l'envoie sur le bon port.

**Couche concernée : Liaison (L2) — Ethernet / Switch**

---

### Étape 8 — Passage par le routeur / NAT

Ta box reçoit la trame, extrait le paquet IP. Elle voit que la destination (`142.250.74.46`) n'est pas sur ton réseau local → elle l'envoie vers Internet.

Au passage, elle applique le **NAT/PAT** :
```
192.168.1.42:51230  →  [BOX NAT]  →  80.12.45.20:61001
```

**Couche concernée : Réseau (L3) — IP + NAT**

---

### Étape 9 — Traversée d'Internet

Le paquet passe par une série de **routeurs** opérateurs. Chacun consulte sa table de routage et transmet au saut suivant. Le **TTL** diminue à chaque routeur. Des protocoles comme **BGP** et **OSPF** maintiennent les tables à jour.

**Couche concernée : Réseau (L3) — IP + routage dynamique**

---

### Étape 10 — Arrivée et réponse

Le serveur Google reçoit le paquet, remonte les couches (désencapsule), traite la requête HTTP et renvoie la réponse HTML — en suivant le même chemin en sens inverse.

Ton navigateur reçoit les données, assemble les segments TCP dans l'ordre et affiche la page.

---

### Le voyage en résumé



```
[Ton navigateur]
     │  DHCP : obtient IP, passerelle, DNS
     │  DNS  : résout google.com → 142.250.74.46
     ↓
[Couche Transport — TCP]
     │  3-way handshake + TLS + requête HTTP
     ↓
[Couche Réseau — IP]
     │  Paquet IP src:192.168.1.42 dst:142.250.74.46
     │  NAT : remplace 192.168.1.42 par l'IP publique
     ↓
[Couche Liaison — Ethernet]
     │  Trame MAC src:ton_PC dst:box
     ↓
[Couche Physique]
     │  Bits sur câble RJ45 / Wi-Fi
     ↓
[Routeurs Internet]
     │  BGP, OSPF — table de routage à chaque saut
     ↓
[Serveur Google]
     └  Réponse HTML → même chemin en sens inverse
```

---

## 7.2 La sécurité à chaque couche

La sécurité réseau ne se limite pas à un seul outil — elle s'applique à **chaque couche** du modèle OSI.

### Pare-feu (Firewall)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6Swt51w3EjY?si=50Hhqq4t2pxfzkBG" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Filtre le trafic selon des règles basées sur :
- IP source / destination (L3)
- Port et protocole (L4)
- Sens du trafic (entrant / sortant)

Deux formes : **matériel** (boîtier dédié, routeur) ou **logiciel** (`iptables` Linux, Windows Firewall).

**Couche : Réseau (L3) et Transport (L4)**

---

### Menaces par couche

|Couche|Attaque typique|Protection|
|---|---|---|
|**L7 — Application**|Phishing, injection SQL, XSS|WAF, HTTPS, validation des entrées|
|**L4 — Transport**|Scan de ports, DoS SYN flood|Pare-feu, limitation de connexions|
|**L3 — Réseau**|IP spoofing, routage malveillant|Filtres anti-spoofing, BGPsec|
|**L2 — Liaison**|ARP spoofing, VLAN hopping|Dynamic ARP Inspection, VLAN natif sécurisé|
|**L1 — Physique**|Écoute passive (sniffing), accès physique non autorisé|Chiffrement (TLS/IPSec), sécurité physique des locaux|

---

### DMZ — isoler les serveurs publics

<iframe width="560" height="315" src="https://www.youtube.com/embed/mY-TvNXFHl0?si=WlwaVF_UsjlMw4u5" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Les serveurs accessibles depuis Internet (web, mail) sont placés dans une **zone démilitarisée (DMZ)** — isolée du réseau interne par un pare-feu.

```
Internet ─── [Pare-feu ext.] ─── [DMZ : serveurs web/mail] ─── [Pare-feu int.] ─── Réseau interne
```

Si un serveur de la DMZ est compromis, le réseau interne reste protégé.

---

### Proxy — contrôler l'accès sortant

<iframe width="560" height="315" src="https://www.youtube.com/embed/MpP02aZPSNQ?si=maEgH3UBc8gr3nLq" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Un **proxy** est un intermédiaire entre les utilisateurs internes et Internet :
- **Filtrage** : bloque certains sites ou catégories
- **Cache** : stocke les contenus fréquents pour accélérer la navigation
- **Journalisation** : trace qui a accédé à quoi et quand

---

### Authentification et chiffrement

|Mécanisme|Rôle|
|---|---|
|**HTTPS / TLS**|Chiffrement des communications web|
|**SSH**|Accès distant chiffré au terminal|
|**VPN (IPSec, WireGuard)**|Tunnel chiffré entre sites ou utilisateurs distants|
|**WPA2/WPA3-Enterprise**|Authentification Wi-Fi individuelle|
|**RADIUS**|Serveur d'authentification centralisé pour les accès réseau|
|**Certificats numériques**|Preuve d'identité des serveurs (HTTPS) et des utilisateurs|

---

## 7.3 Récapitulatif des couches OSI

|Couche|Nom|Rôle|PDU|Protocoles clés|
|---|---|---|---|---|
|7|Application|Interface avec l'utilisateur|Message|HTTP, DNS, DHCP, SMTP, SSH|
|6|Présentation|Encodage, chiffrement|Message|TLS, gzip, UTF-8|
|5|Session|Gestion du dialogue|Message|Session SSH, cookie web|
|4|Transport|Fiabilité, ports, segmentation|Segment|TCP, UDP|
|3|Réseau|Routage, adressage IP|Paquet|IP, ICMP, ARP|
|2|Liaison|Adressage MAC, trames locales|Trame|Ethernet, 802.11, VLAN|
|1|Physique|Transmission des bits|Bit|RJ45, fibre, Wi-Fi|

---

:::success
**Ce que tu retiens de ce cours**

Un réseau, c'est un problème découpé en couches. Chaque couche résout un sous-problème précis et s'appuie sur la couche du dessous.

Quand tu tapes `google.com` :
1. **DHCP** te donne une IP (L7)
2. **DNS** traduit le nom en IP (L7)
3. **TCP** établit une connexion fiable (L4)
4. **TLS** chiffre les échanges (L6)
5. **HTTP** formule la requête (L7)
6. **IP** route le paquet à travers Internet (L3)
7. **Ethernet** transporte la trame sur le LAN (L2)
8. **Le câble ou les ondes** transportent les bits (L1)

La sécurité n'est pas une couche séparée — elle s'intègre à chaque niveau, du câble (physique) au contenu (applicatif).
:::
