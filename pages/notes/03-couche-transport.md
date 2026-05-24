# Chapitre 3 — Comment les données arrivent sans erreur

DNS a résolu `google.com` en une adresse IP. HTTP a formulé la requête. Maintenant : comment s'assurer que les données arrivent **complètes, dans l'ordre**, et qu'elles atteignent la **bonne application** sur le serveur ?

C'est le rôle de la **couche Transport** (couche 4 du modèle OSI).

---

## 3.1 Le problème des ports — plusieurs services sur une seule machine

Un serveur Google ne fait pas que du web. Sur la même machine tourne simultanément :
- Un serveur web (répond aux requêtes HTTP)
- Un serveur DNS (répond aux requêtes de résolution)
- Des dizaines d'autres services

Comment le système d'exploitation sait-il à quelle application remettre un paquet qui arrive ?

Grâce aux **numéros de port**.

```
Paquet entrant → [IP: 142.250.74.46] + [Port: 443] → Application HTTPS
Paquet entrant → [IP: 142.250.74.46] + [Port: 53]  → Application DNS
```

Une **socket** = IP + Port. C'est l'adresse complète d'une application sur une machine.
Exemple : `142.250.74.46:443` = le service HTTPS de Google.

### Plages de ports

|Plage|Nom|Usage|
|---|---|---|
|0 – 1023|Ports bien connus|Services standards — HTTP, SSH, DNS…|
|1024 – 49151|Ports enregistrés|Applications éditeurs|
|49152 – 65535|Ports dynamiques|Ports temporaires côté client|

### Ports à retenir

|Service|Protocole|Port|
|---|---|---|
|HTTP|TCP|80|
|HTTPS|TCP|443|
|SSH|TCP|22|
|DNS|UDP / TCP|53|
|DHCP|UDP|67 / 68|
|SMTP|TCP|25|
|FTP|TCP|21|
|RDP|TCP|3389|

:::info
Quand ton navigateur contacte `google.com:443`, **ton PC** utilise un port temporaire (ex. `51324`) pour recevoir la réponse. La session est identifiée par le quadruplet : **IP src + Port src + IP dst + Port dst**.
:::

---

## 3.2 UDP — envoyer vite, sans garantie

**UDP** (User Datagram Protocol) envoie des paquets sans établir de connexion préalable et sans vérifier qu'ils arrivent.

### Structure d'un datagramme UDP

```
┌─────────────┬──────────────────┬───────────┬──────────┐
│ Port source │ Port destination │ Longueur  │ Checksum │
└─────────────┴──────────────────┴───────────┴──────────┘
│                     Données                            │
└────────────────────────────────────────────────────────┘
```

C'est tout. Léger, rapide.

### Quand utiliser UDP ?

|Application|Pourquoi UDP ?|
|---|---|
|DNS|Requête courte — si elle est perdue, on renvoie|
|Streaming vidéo / audio|Une image perdue ? On continue — la latence prime|
|Jeux en ligne|La fluidité compte plus que la perfection|
|VoIP (téléphonie IP)|La latence doit rester faible|

---

## 3.3 TCP — envoyer de façon fiable

**TCP** (Transmission Control Protocol) garantit que les données arrivent **dans l'ordre**, **sans perte** et **sans erreur**. En échange, il est plus lent qu'UDP.

### Étape 1 — Établir la connexion (3-way handshake)

Avant d'envoyer une seule donnée, TCP établit une connexion :



### Étape 2 — Transmettre les données

TCP découpe les données en **segments** numérotés. Le destinataire confirme chaque segment reçu avec un **ACK** (acquittement). Si un segment n'est pas confirmé, il est **retransmis**.

```
Client →  [Segment 1]  →  Serveur
Client ←  [ACK 1]      ←  Serveur
Client →  [Segment 2]  →  Serveur
Client →  [Segment 3]  →  Serveur    ← envoi en avance (fenêtre glissante)
Client ←  [ACK 2]      ←  Serveur
Client ←  [ACK 3]      ←  Serveur
```

La **fenêtre glissante** permet d'envoyer plusieurs segments sans attendre chaque ACK — ça accélère la transmission tout en maintenant la fiabilité.

### Étape 3 — Fermer la connexion (4 étapes)

```
Client        →  FIN          →  Serveur    "J'ai fini d'envoyer"
Client        ←  ACK          ←  Serveur    "Reçu"
Client        ←  FIN          ←  Serveur    "Moi aussi j'ai fini"
Client        →  ACK          →  Serveur    "OK, on ferme"
              [connexion fermée]
```

Après le dernier ACK, le client reste en état **TIME_WAIT** quelques secondes — pour s'assurer que le serveur a bien reçu la fermeture.

### Quand utiliser TCP ?

|Application|Pourquoi TCP ?|
|---|---|
|Web (HTTP/HTTPS)|La page doit être complète et dans l'ordre|
|Email (SMTP, IMAP)|Aucune perte tolérée|
|Transfert de fichiers|L'intégrité est essentielle|
|SSH|Une commande perdue = session cassée|

---

## 3.4 TCP vs UDP — choisir le bon outil

|Critère|TCP|UDP|
|---|---|---|
|Connexion préalable|Oui (3-way handshake)|Non|
|Garantie de livraison|Oui|Non|
|Ordre des paquets|Garanti|Non garanti|
|Retransmission|Oui|Non|
|Vitesse / Latence|Plus lent|Plus rapide|
|Usage|Web, email, SSH, FTP|DNS, vidéo, jeux, VoIP|

---

## 3.5 NAT/PAT — partager une adresse IP publique

<iframe width="560" height="315" src="https://www.youtube.com/embed/jq3SLuhIyPI?si=jbuvOmnPwDorrb1g" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Chez toi, tu as peut-être 5 appareils connectés, mais une seule **adresse IP publique** attribuée par ton FAI. Comment tous ces appareils accèdent-ils à Internet en même temps ?

Grâce au **NAT/PAT** (Network/Port Address Translation).

**PAT** = NAT surchargé : le routeur différencie les flux par le **numéro de port source**.

```
192.168.1.10:51230  →  [Routeur NAT]  →  80.12.45.20:443  →  Google
192.168.1.11:51231  →  [Routeur NAT]  →  80.12.45.20:443  →  Google
```

Le routeur maintient une **table de traduction** :

|IP privée|Port privé|IP publique|Port public|
|---|---|---|---|
|192.168.1.10|51230|80.12.45.20|61001|
|192.168.1.11|51231|80.12.45.20|61002|

Quand la réponse de Google revient sur le port 61001, le routeur sait qu'il doit la transmettre à `192.168.1.10:51230`.

---

## 3.6 Diagnostiquer la couche Transport

```bash
# Afficher les connexions actives et les ports ouverts
netstat -an          # Windows et Linux
netstat -tulnp       # Linux : ports en écoute avec processus

# Version moderne sur Linux
ss -tulnp

# Tester si un port est accessible
telnet 192.168.1.10 80    # Connexion TCP au port 80
nc -zv 192.168.1.10 443   # Test TCP rapide (netcat)
```

### États TCP à connaître

|État|Signification|
|---|---|
|`LISTEN`|Le service attend des connexions|
|`ESTABLISHED`|Connexion active en cours|
|`TIME_WAIT`|Fermeture en cours (attente)|
|`SYN_SENT`|Demande de connexion envoyée, pas encore confirmée|
|`CLOSE_WAIT`|Le serveur distant a fermé, en attente locale|

:::info
Un port en `LISTEN` inaccessible depuis l'extérieur = souvent un pare-feu qui bloque. Beaucoup de `TIME_WAIT` = charge serveur élevée ou connexions fermées rapidement.
:::

---

:::success
**Ce que tu retiens de ce chapitre**
- Les **ports** identifient les applications sur une machine — une socket = IP + port.
- **UDP** : rapide et léger, sans garantie — idéal pour DNS, vidéo, jeux.
- **TCP** : fiable et ordonné, avec handshake et acquittements — indispensable pour le web et les fichiers.
- **NAT/PAT** permet à plusieurs machines d'une même box de partager une IP publique.

**La question suivante** : comment un paquet sait-il quel chemin prendre pour traverser Internet jusqu'à Google ? → Chapitre 4 : la couche Réseau.
:::
