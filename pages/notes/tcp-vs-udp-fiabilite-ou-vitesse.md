# TCP vs UDP — Fiabilité ou vitesse ?

## 📌 Introduction

Comprenez les différences entre TCP et UDP, quand utiliser chaque protocole et comment tester une connexion TCP avec netcat.

---

# 🧠 Contenu principal

**Votre API ne répond pas et vous ne savez pas comment tester si le port est accessible?** Ce module vous explique les **deux protocoles de transport** d’Internet: **TCP** (fiable) et **UDP** (rapide). Vous apprendrez à **tester une connexion TCP** avec `netcat` et à **interpréter les erreurs** — des compétences essentielles pour diagnostiquer les problèmes de connectivité en production.

## TL;DR — L’essentiel en 30 secondes

- **TCP** = fiable (HTTP, SSH, bases de données) — **UDP** = rapide ([DNS](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/dns/), streaming, jeux)
- **Tester un port TCP**: `nc -zv hôte port`
- **Connection refused** = port fermé (service absent)
- **Timeout** = paquet filtré (pare-feu) ou machine inaccessible

### Je sais que c’est bon si…

- `nc -zv google.com 443` affiche “succeeded”
- Je sais distinguer “refused” (port fermé) de “timeout” (filtré)
- `ss -tlnp` me montre les ports en écoute sur ma machine

### Commandes minimales à retenir

```bash
# 1. Tester un port TCP
nc -zv github.com 443

# 2. Voir les ports ouverts localement
ss -tlnp

# 3. Tester avec timeout court
nc -zv -w 3 192.168.1.1 22
```

## Prérequis

- **Module 4 complété**: vous comprenez le routage et les passerelles
- **Connaissance des ports**: vous savez qu’un port identifie un service (cf. Module 2)
- **Une machine [Linux](https://blog.stephane-robert.info/docs/admin-serveurs/linux/)** connectée à Internet
- **Un terminal** ouvert

## Ce que vous allez apprendre

- **TCP vs UDP**: comprendre quand utiliser chaque protocole
- **Le handshake TCP**: comment une connexion s’établit
- **Les ports bien connus**: SSH, HTTP, HTTPS, DNS et autres
- **Tester avec netcat**: vérifier si un port est ouvert
- **Interpréter les erreurs**: refused vs timeout vs reset
- **Cas pratiques**: diagnostiquer un service qui ne répond pas

## Recommandation rapide: TCP ou UDP?

Avant d’entrer dans les détails, voici le tableau de décision:

| Situation | Protocole | Pourquoi |
| --- | --- | --- |
| Site web, API REST | **TCP** | Fiabilité requise |
| Base de données | **TCP** | Intégrité des données |
| SSH, transfert de fichiers | **TCP** | Pas de perte acceptable |
| Requête DNS simple | **UDP** | Rapidité, petite taille |
| Streaming vidéo/audio | **UDP** | Latence prime |
| Jeux en ligne | **UDP** | Réactivité critique |
| VoIP, visioconférence | **UDP** | Temps réel |
| HTTP/3, QUIC | **UDP** | Transport fiable implémenté au-dessus |

**Règle simple**: si vous ne pouvez pas vous permettre de perdre des données → **TCP**. Si la vitesse prime sur la fiabilité → **UDP**.

## TCP vs UDP: les deux protocoles de transport

Quand votre machine envoie des données sur le réseau, elle utilise l’un de ces deux protocoles. Ils ont des philosophies opposées.

<svg viewBox="0 0 670 420" width="670" height="420" alt="Comparaison TCP vs UDP : TCP est fiable comme un courrier recommandé, UDP est rapide comme une carte postale"><defs></defs><rect x="0" y="0" width="670" height="420" fill="#ffffff"></rect><g transform="translate(240 10) rotate(0 150 15)"><text x="150" y="21.144" font-family="Virgil, Segoe UI Emoji" font-size="24px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">TCP vs UDP — Comparaison</text></g> <g stroke-linecap="round" transform="translate(10 60) rotate(0 150 140)"><path d="M32 0 C88.63 0, 145.27 0, 268 0 C289.33 0, 300 10.67, 300 32 C300 86.15, 300 140.31, 300 248 C300 269.33, 289.33 280, 268 280 C204.08 280, 140.16 280, 32 280 C10.67 280, 0 269.33, 0 248 C0 186.12, 0 124.24, 0 32 C0 10.67, 10.67 0, 32 0" stroke="none" stroke-width="0" fill="#a5d8ff"></path><path d="M32 0 C79.2 0, 126.4 0, 268 0 M32 0 C113.18 0, 194.36 0, 268 0 M268 0 C289.33 0, 300 10.67, 300 32 M268 0 C289.33 0, 300 10.67, 300 32 M300 32 C300 82.76, 300 133.52, 300 248 M300 32 C300 113.87, 300 195.75, 300 248 M300 248 C300 269.33, 289.33 280, 268 280 M300 248 C300 269.33, 289.33 280, 268 280 M268 280 C213.4 280, 158.81 280, 32 280 M268 280 C213.33 280, 158.67 280, 32 280 M32 280 C10.67 280, 0 269.33, 0 248 M32 280 C10.67 280, 0 269.33, 0 248 M0 248 C0 167.3, 0 86.6, 0 32 M0 248 C0 171.79, 0 95.58, 0 32 M0 32 C0 10.67, 10.67 0, 32 0 M0 32 C0 10.67, 10.67 0, 32 0" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(110 75) rotate(0 50 15)"><text x="50" y="17.619999999999997" font-family="Virgil, Segoe UI Emoji" font-size="20px" fill="#1971c2" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">📦 TCP</text></g> <g transform="translate(60 105) rotate(0 100 10)"><text x="100" y="12.334" font-family="Virgil, Segoe UI Emoji" font-size="14px" fill="#495057" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic"></text></g></svg> Transmission Control Protocol 📬 Courrier recommandé avec accusé ✅ Connexion établie (handshake) ✅ Ordre des paquets garanti ✅ Retransmission si perte ✅ Contrôle de flux ✅ Détection d'erreurs HTTP/HTTPS • SSH • Email Bases de données • APIs 🚀 UDP User Datagram Protocol 📮 Carte postale simple ⚡ Pas de connexion préalable ⚡ Pas de garantie d'ordre ⚡ Pas de retransmission ⚡ Très faible latence ⚡ Overhead minimal DNS • Streaming vidéo • VoIP Jeux en ligne • DHCP 💡 Choisir TCP quand la fiabilité prime • Choisir UDP quand la vitesse prime

### TCP: le protocole fiable

**TCP** (Transmission Control Protocol) garantit que vos données arrivent **intégralement** et **dans l’ordre**. C’est le protocole utilisé par la majorité des services: HTTP, SSH, email, bases de données.

**Caractéristiques**:

- **Connexion établie** avant d’envoyer des données (handshake)
- **Accusé de réception** pour chaque paquet
- **Retransmission automatique** si un paquet est perdu
- **Ordre garanti**: les paquets arrivent dans l’ordre d’envoi
- **Contrôle de flux**: évite de saturer le destinataire

**Analogie**: TCP, c’est comme envoyer un **courrier recommandé avec accusé de réception**. C’est plus lent, mais vous êtes sûr que ça arrive et dans quel état.

### UDP: le protocole rapide

**UDP** (User Datagram Protocol) envoie les données **sans vérification**. Pas de connexion, pas d’accusé, pas de retransmission. C’est le protocole utilisé quand la **vitesse prime**: DNS, streaming, jeux.

**Caractéristiques**:

- **Pas de connexion**: on envoie directement
- **Pas de garantie**: les paquets peuvent être perdus
- **Pas d’ordre**: les paquets peuvent arriver dans le désordre
- **Overhead minimal**: en-tête très petit (8 octets vs 20 minimum pour TCP)
- **Latence très faible**: pas d’attente d’accusé

**Analogie**: UDP, c’est comme envoyer une **carte postale**. C’est rapide et léger, mais pas de garantie que ça arrive.

### Transport vs Application

Rappel important: TCP et UDP sont des protocoles de **transport** (couche 4). Ils transportent des données, mais ne définissent pas ce qu’elles contiennent.

- **TCP**: fournit un “flux d’octets” fiable et ordonné
- **UDP**: fournit des “datagrammes” indépendants, sans état

Le **port** identifie le service (application), pas le protocole applicatif. HTTP/2 sur TCP et HTTP/3 sur UDP utilisent tous deux le port 443.

## Le handshake TCP: comment une connexion s’établit

Avant d’échanger des données, TCP doit **établir une connexion**. Ce processus s’appelle le **three-way handshake** (poignée de main en trois temps).

<svg viewBox="0 0 540 360" width="540" height="360" alt="Le handshake TCP en 3 étapes : SYN, SYN-ACK, ACK"><defs></defs><rect x="0" y="0" width="540" height="360" fill="#ffffff"></rect><g stroke-linecap="round" transform="translate(10 10) rotate(0 60 30)"><path d="M15 0 C38.06 -0.39, 51.42 0.82, 105 0 C117.76 -2.71, 120.43 8.56, 120 15 C118.15 25, 116.76 37, 120 45 C117.73 58.31, 117.22 57.97, 105 60 C75.31 59.88, 47.08 58.68, 15 60 C2.02 57.22, 0.36 57.39, 0 45 C-2.03 35.29, 1.29 33.62, 0 15 C2.2 4.24, 4.27 -0.48, 15 0" stroke="none" stroke-width="0" fill="#a5d8ff"></path><path d="M15 0 C33.86 0.78, 50.68 0.98, 105 0 M15 0 C39.68 -0.43, 63.73 0.79, 105 0 M105 0 C113.7 0.53, 120.88 6.63, 120 15 M105 0 C115.2 0.56, 118.67 6.73, 120 15 M120 15 C121.4 19.78, 120.96 29.28, 120 45 M120 15 C119.32 26.37, 120.07 37.78, 120 45 M120 45 C120.6 53.4, 115.48 58.28, 105 60 M120 45 C118.31 55.06, 115.94 60.81, 105 60 M105 60 C86.64 60.68, 67.21 60.7, 15 60 M105 60 C85.37 61.59, 65.92 60.94, 15 60 M15 60 C3.11 59.71, -0.18 55.53, 0 45 M15 60 C6.83 59.98, 2.16 55.1, 0 45 M0 45 C-0.94 36.11, 1.04 26.26, 0 15 M0 45 C-0.63 37.35, 0.59 27.74, 0 15 M0 15 C0.44 7, 3.45 -1.31, 15 0 M0 15 C-0.62 2.93, 6.01 2.27, 15 0" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(45 30) rotate(0 25 12.5)"><text x="25" y="15.858" font-family="Virgil, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Client</text></g> <g stroke-linecap="round" transform="translate(410 10) rotate(0 60 30)"><path d="M15 0 C40.98 2.07, 59.46 -1.5, 105 0 C116.08 -0.94, 121.28 8.47, 120 15 C122.74 27, 118.56 37.8, 120 45 C120.4 57.73, 114.47 61.11, 105 60 C87.92 62.87, 68.04 59.27, 15 60 C3.25 58.86, 1.08 54.97, 0 45 C0.04 35.07, 2.78 27.65, 0 15 C-0.6 2.73, 2.82 -1.43, 15 0" stroke="none" stroke-width="0" fill="#b2f2bb"></path><path d="M15 0 C31.57 -1.66, 50.04 -1.06, 105 0 M15 0 C35.03 -1.09, 53.19 -1.43, 105 0 M105 0 C115.11 1.59, 118.64 5.88, 120 15 M105 0 C115.6 1.68, 120.6 5.59, 120 15 M120 15 C120.79 21.33, 119.48 29.84, 120 45 M120 15 C120.56 25.11, 120.81 37.34, 120 45 M120 45 C121.79 54.2, 116.45 58.84, 105 60 M120 45 C119.53 55.19, 113.21 57.83, 105 60 M105 60 C81.93 60.23, 59.63 60.29, 15 60 M105 60 C82.12 60.96, 59.75 61.02, 15 60 M15 60 C3.34 59.14, -0.53 56.58, 0 45 M15 60 C5.89 59.95, 1.88 55.29, 0 45 M0 45 C1.79 36.34, -0.27 28.79, 0 15 M0 45 C0.11 38.04, -0.24 31.23, 0 15 M0 15 C1.31 6.99, 4.35 0.08, 15 0 M0 15 C-1.86 3.39, 3.44 2.22, 15 0" stroke="#2f9e44" stroke-width="2" fill="none"></path></g><g transform="translate(440 30) rotate(0 30 12.5)"><text x="30" y="15.858" font-family="Virgil, Segoe UI Emoji" font-size="18px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Serveur</text></g> <g stroke-linecap="round"><g transform="translate(70 70) rotate(0 0 140)"><path d="M0 0 C-0.1 56.63, -1.55 113.4, 0 280" stroke="#868e96" stroke-width="2.5" fill="none" stroke-dasharray="8 10"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(470 70) rotate(0 0 140)"><path d="M0 0 C-0.61 55.84, 0.11 112.77, 0 280" stroke="#868e96" stroke-width="2.5" fill="none" stroke-dasharray="8 10"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(75 110) rotate(0 195 0)"><path d="M-0.7 -1.2 C64.38 -1.06, 324.12 0.85, 389.25 1.06 M1.14 0.79 C66.7 0.59, 326.86 -0.61, 391.57 -0.51" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(75 110) rotate(0 195 0)"><path d="M368.09 8.09 C370.77 5.25, 379.23 4.93, 391.57 -0.51 M368.09 8.09 C374.6 6.15, 382.77 2.06, 391.57 -0.51" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(75 110) rotate(0 195 0)"><path d="M368.06 -9.01 C370.78 -8.43, 379.24 -5.33, 391.57 -0.51 M368.06 -9.01 C374.57 -5.75, 382.75 -4.64, 391.57 -0.51" stroke="#1971c2" stroke-width="2" fill="none"></path></g></g><mask></mask><g transform="translate(210 85) rotate(0 60 10)"><text x="60" y="12.334" font-family="Virgil, Segoe UI Emoji" font-size="14px" fill="#1971c2" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">1. SYN (seq=100)</text></g> <g stroke-linecap="round"><g transform="translate(465 180) rotate(0 -195 0)"><path d="M-0.21 -0.17 C-64.94 -0.16, -324.48 0.75, -389.6 0.67 M-1.78 -1.31 C-66.53 -1.7, -325.88 -1.37, -390.33 -1.1" stroke="#2f9e44" stroke-width="2" fill="none"></path></g><g transform="translate(465 180) rotate(0 -195 0)"><path d="M-366.86 -9.7 C-371.79 -7.35, -375.08 -7.83, -390.33 -1.1 M-366.86 -9.7 C-372.89 -6.55, -378.53 -5.45, -390.33 -1.1" stroke="#2f9e44" stroke-width="2" fill="none"></path></g><g transform="translate(465 180) rotate(0 -195 0)"><path d="M-366.82 7.4 C-371.85 6.33, -375.15 2.43, -390.33 -1.1 M-366.82 7.4 C-372.9 6.31, -378.55 3.17, -390.33 -1.1" stroke="#2f9e44" stroke-width="2" fill="none"></path></g></g><mask></mask><g transform="translate(180 155) rotate(0 90 10)"><text x="90" y="12.334" font-family="Virgil, Segoe UI Emoji" font-size="14px" fill="#2f9e44" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">2. SYN-ACK (seq=300, ack=101)</text></g> <g stroke-linecap="round"><g transform="translate(75 250) rotate(0 195 0)"><path d="M0.28 0.86 C65.34 0.73, 324.13 0.25, 389.16 0.29 M-1.04 0.26 C64.5 0.28, 326.27 -1.53, 391.43 -1.68" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(75 250) rotate(0 195 0)"><path d="M367.98 6.98 C374.03 3.8, 377.77 4.26, 391.43 -1.68 M367.98 6.98 C377.29 3.02, 385.81 1.03, 391.43 -1.68" stroke="#1971c2" stroke-width="2" fill="none"></path></g><g transform="translate(75 250) rotate(0 195 0)"><path d="M367.9 -10.12 C374.11 -9.88, 377.87 -6, 391.43 -1.68 M367.9 -10.12 C377.32 -7.38, 385.88 -2.67, 391.43 -1.68" stroke="#1971c2" stroke-width="2" fill="none"></path></g></g><mask></mask><g transform="translate(210 225) rotate(0 60 10)"><text x="60" y="12.334" font-family="Virgil, Segoe UI Emoji" font-size="14px" fill="#1971c2" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">3. ACK (ack=301)</text></g> <g transform="translate(190 310) rotate(0 80 12.5)"><text x="80" y="14.096" font-family="Virgil, Segoe UI Emoji" font-size="16px" fill="#e8590c" text-anchor="middle" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">Connexion établie</text></g></svg>
1. **SYN** (Synchronize)
	Le client envoie un paquet SYN au serveur: “Je veux me connecter”.
2. **SYN-ACK** (Synchronize-Acknowledge)
	Le serveur répond avec SYN-ACK: “OK, je t’écoute, je suis prêt”.
3. **ACK** (Acknowledge)
	Le client confirme avec ACK: “Bien reçu, on peut commencer”.

Après ces trois échanges, la connexion est **établie** et les données peuvent circuler dans les deux sens.

### Ce que ça implique en diagnostic

Quand vous testez une connexion TCP avec `netcat`, vous testez en réalité ce handshake:

| Résultat | Signification |
| --- | --- |
| **Connection succeeded** | Handshake complet → service accessible |
| **Connection refused** | Le serveur a répondu RST → port fermé |
| **Timeout** | Pas de réponse → paquet perdu ou filtré |

## Les ports bien connus

Un **port** est un numéro (0–65535) qui identifie un service sur une machine. Certains ports sont **réservés par convention**:

| Port | Protocole | Service | Description |
| --- | --- | --- | --- |
| **22** | TCP | SSH | Connexion à distance sécurisée |
| **80** | TCP | HTTP | Sites web non chiffrés |
| **443** | TCP | HTTPS | Sites web chiffrés (TLS) |
| **53** | UDP/TCP | DNS | Résolution de noms |
| **25** | TCP | SMTP | Envoi d’emails |
| **3306** | TCP | [MySQL](https://blog.stephane-robert.info/docs/services/bdd/relationnelles/mysql/) | Base de données MySQL |
| **5432** | TCP | [PostgreSQL](https://blog.stephane-robert.info/docs/services/bdd/relationnelles/postgresql/) | Base de données PostgreSQL |
| **6379** | TCP | Redis | Cache /base Redis |
| **8080** | TCP | HTTP alt | Tests, proxys |
| **27017** | TCP | MongoDB | Base de données MongoDB |

## Tester une connexion TCP avec netcat

`netcat` (ou `nc`) est l’outil de référence pour tester si un port TCP est ouvert et accessible.

### Syntaxe de base

```bash
nc -zv <hôte> <port>
```

Options:

- `-z`: mode scan (ne pas envoyer de données)
- `-v`: mode verbeux (afficher le résultat)

### Exemples concrets

- [Port ouvert](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/tcp-udp/#tab-panel-485)
- [Port fermé](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/tcp-udp/#tab-panel-486)
- [Port filtré](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/tcp-udp/#tab-panel-487)
- [Plusieurs ports](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/tcp-udp/#tab-panel-488)

```bash
nc -zv github.com 443
```

Sortie:

```text
Connection to github.com 443 port [tcp/https] succeeded!
```

Le port 443 (HTTPS) de GitHub est **accessible**. Le handshake TCP a réussi.

### Interpréter les résultats

| Message | Signification | Cause probable |
| --- | --- | --- |
| `succeeded` | Connexion établie | Service accessible |
| `refused` | Port fermé | Aucun service n’écoute |
| `timed out` | Pas de réponse | Pare-feu (DROP), routage, ou rate-limit |
| `No route to host` | Routage impossible | Problème réseau |

## Voir les ports ouverts localement

Pour voir quels services écoutent sur votre machine:

```bash
ss -tuln
```

Options:

- `-t`: TCP
- `-u`: UDP
- `-l`: en écoute (listening)
- `-n`: numérique (pas de résolution DNS)

Sortie typique:

```text
Netid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port
tcp    LISTEN  0       128      0.0.0.0:22            0.0.0.0:*
tcp    LISTEN  0       511      127.0.0.1:3000        0.0.0.0:*
tcp    LISTEN  0       128      0.0.0.0:80            0.0.0.0:*
udp    UNCONN  0       0        127.0.0.53:53         0.0.0.0:*
```

**Lecture**:

| Local Address | Signification |
| --- | --- |
| `0.0.0.0:22` | SSH écoute sur **toutes les interfaces** |
| `127.0.0.1:3000` | App écoute **uniquement en local** |
| `127.0.0.53:53` | DNS local (systemd-resolved) |

## Cas pratique: diagnostiquer un service inaccessible

Scénario: votre API déployée sur `api.example.com` ne répond pas.

1. **Vérifier la résolution DNS**
	```bash
	dig +short api.example.com
	```
	Si pas de réponse → problème DNS. Sinon, notez l’IP.
2. **Tester la connectivité réseau**
	```bash
	ping -c 3 api.example.com
	```
	Si timeout → problème réseau **ou** ICMP bloqué. Ne concluez pas trop vite: continuez avec un test TCP.
3. **Tester le port TCP**
	```bash
	nc -zv api.example.com 443
	```
	- **succeeded** → le port est ouvert, problème applicatif
		- **refused** → le service n’écoute pas
		- **timeout** → pare-feu ou routage
4. **Vérifier côté serveur** (si vous avez accès)
	```bash
	sudo ss -tulnp | grep :443
	```
	Le service écoute-t-il? Sur quelle interface?
5. **Vérifier le pare-feu**
	```bash
	# iptables (legacy, encore courant)
	sudo iptables -L -n | grep 443
	# nftables (moderne, Debian 10+, Ubuntu 20.04+)
	sudo nft list ruleset | grep 443
	```
	Une règle bloque-t-elle le trafic entrant?

## Travaux pratiques

### TP 1: Exploration des ports de services locaux

1. **Testez un port fermé local**
	```bash
	nc -zv localhost 12345
	```
	Observez le message “Connection refused” — aucun service n’écoute.
2. **Testez un port ouvert local** (si SSH actif)
	```bash
	nc -zv localhost 22
	```
	Observez “succeeded” si sshd écoute.
3. **Listez les services de votre machine**
	```bash
	ss -tuln
	```
	Quels services écoutent? Sur quelle interface?
4. **Identifiez les processus** (avec sudo)
	```bash
	sudo ss -tulnp | grep LISTEN
	```
	Quel processus écoute sur chaque port?

### TP 2: Tester des services distants

1. **Testez les ports web de Google**
	```bash
	nc -zv -w 3 google.com 80
	nc -zv -w 3 google.com 443
	```
	Les deux devraient répondre “succeeded”.
2. **Simulez un timeout**
	```bash
	nc -zv -w 2 192.0.2.1 80
	```
	L’adresse 192.0.2.1 est réservée pour la documentation et ne répond jamais.
3. **Mesurez le temps de réponse**
	```bash
	time nc -zv -w 5 google.com 443
	```
	La connexion TCP prend combien de temps?
4. **Testez plusieurs ports d’un coup**
	```bash
	nc -zv -w 2 google.com 80 443
	```




## À retenir

- **TCP** = fiable, connexion établie, retransmission → HTTP, SSH, bases de données
- **UDP** = rapide, sans connexion, sans garantie → DNS, streaming, jeux
- **QUIC/HTTP/3** = UDP + fiabilité applicative (la fiabilité n’est pas réservée à TCP)
- **Handshake TCP**: SYN → SYN-ACK → ACK (3 échanges avant de communiquer)
- **`nc -zv <hôte> <port>`**: teste si un port TCP est accessible
- **refused** = port fermé (service absent), **timeout** = filtré (pare-feu DROP)
- **UDP non testable comme TCP**: “succeeded” ne garantit pas un service actif
- **`ss -tuln`**: voir les ports en écoute sur votre machine
- **Ports privilégiés**: < 1024, nécessitent root ou `CAP_NET_BIND_SERVICE`

## Prochaines étapes

[Module 7: DHCP](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/dhcp/) Comment votre machine obtient automatiquement son adresse IP

[Module 8: ICMP et ping](https://blog.stephane-robert.info/docs/reseaux/fondamentaux/icmp/) Comprendre les messages de contrôle réseau

