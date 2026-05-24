# 🔐 ACL Cisco — Access Control Lists (Standard / Étendues)

## 📌 Définition

Une **ACL (Access Control List)** est un mécanisme de sécurité utilisé sur les routeurs et switches Cisco pour :

- filtrer le trafic réseau
- contrôler l’accès entre réseaux
- autoriser ou bloquer certains paquets IP
- renforcer la sécurité du réseau

Les ACL fonctionnent comme **une liste de règles analysées de haut en bas**.

Chaque paquet est comparé aux règles jusqu'à ce qu'une correspondance soit trouvée.

```
Si la condition correspond → action appliquée
Sinon → règle suivante
```

⚠️ À la fin de chaque ACL existe une règle implicite :

```
deny any
```

Tout trafic non explicitement autorisé est donc **bloqué**.

---

# 🧠 Fonctionnement d’une ACL

Lorsqu’un paquet arrive sur une interface :

1. le routeur analyse l’ACL
2. les règles sont examinées **de haut en bas**
3. dès qu’une règle correspond → l’action est appliquée
4. le traitement s’arrête

Schéma simplifié :

```
Paquet entrant
      ↓
Analyse ACL
      ↓
Match règle ?
      ↓
permit → autorisé
deny → bloqué
```

---

# 🧱 Types d’ACL Cisco

Il existe deux types principaux :

| Type | Numéro | Filtrage |
|---|---|---|
| ACL standard | 1–99 et 1300–1999 | adresse IP source |
| ACL étendue | 100–199 et 2000–2699 | source + destination + protocole + port |

---

# 1️⃣ ACL Standard

## Principe

Une **ACL standard** filtre uniquement selon :

```
adresse IP source
```

Elle ne prend **pas en compte** :

- l’adresse destination
- le protocole
- les ports.

---

## Syntaxe

```bash
access-list numéro permit | deny source wildcard
```

Exemple :

```bash
access-list 10 permit 192.168.1.0 0.0.0.255
```

Autorise le réseau :

```
192.168.1.0/24
```

---

## Wildcard mask

Le **wildcard mask** est l’inverse du masque de sous-réseau.

| Masque réseau | Wildcard |
|---|---|
| 255.255.255.0 | 0.0.0.255 |
| 255.255.0.0 | 0.0.255.255 |
| 255.0.0.0 | 0.255.255.255 |

---

## Cas particuliers

### Autoriser tout le monde

```bash
access-list 10 permit any
```

Equivalent :

```
0.0.0.0 255.255.255.255
```

---

### Autoriser une seule machine

```bash
access-list 10 permit host 192.168.1.10
```

ou

```bash
access-list 10 permit 192.168.1.10 0.0.0.0
```

---

## Exemple ACL Standard

Autoriser uniquement le réseau **192.168.1.0/24**

```bash
access-list 10 permit 192.168.1.0 0.0.0.255
access-list 10 deny any
```

---

# Application sur une interface

Une ACL doit être appliquée sur une interface pour être active.

```bash
interface GigabitEthernet0/0
ip access-group 10 in
```

---

## Direction du filtrage

| Direction | Signification |
|---|---|
| in | trafic entrant |
| out | trafic sortant |

---

# 2️⃣ ACL Étendue

## Principe

Une **ACL étendue** permet un filtrage beaucoup plus précis.

Elle peut filtrer selon :

- adresse source
- adresse destination
- protocole
- port

---

## Syntaxe

```bash
access-list numéro permit | deny protocole source wildcard destination wildcard
```

Exemple :

```bash
access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
```

Autorise :

```
HTTP depuis 192.168.1.0/24
```

---

## Protocoles utilisables

| Protocole | Description |
|---|---|
| ip | tous les protocoles |
| tcp | trafic TCP |
| udp | trafic UDP |
| icmp | ping |
| gre | tunnels GRE |

---

## Filtrage par port

Autoriser HTTP :

```bash
access-list 100 permit tcp any any eq 80
```

Autoriser HTTPS :

```bash
access-list 100 permit tcp any any eq 443
```

Autoriser DNS :

```bash
access-list 100 permit udp any any eq 53
```

---

# Application sur une interface

```bash
interface GigabitEthernet0/1
ip access-group 100 in
```

---

# 📍 Placement des ACL

| Type ACL | Position recommandée |
|---|---|
| Standard | proche de la destination |
| Étendue | proche de la source |

Pourquoi ?

- les ACL étendues filtrent plus précisément
- cela évite de bloquer inutilement du trafic.

---

# 🔎 Commandes de vérification

Afficher les ACL :

```bash
show access-lists
```

Afficher les ACL appliquées :

```bash
show ip interface
```

Afficher la configuration :

```bash
show running-config
```

---

# 🧪 Exemple complet ACL étendue

Autoriser :

- HTTP
- HTTPS

Bloquer :

- Telnet

```bash
access-list 101 permit tcp any any eq 80
access-list 101 permit tcp any any eq 443
access-list 101 deny tcp any any eq 23
access-list 101 permit ip any any
```

---

# 🚀 ACL nommées (alternative)

Cisco permet aussi les **ACL nommées**.

```bash
ip access-list extended WEB_FILTER
permit tcp any any eq 80
permit tcp any any eq 443
deny tcp any any eq 23
permit ip any any
```

Avantages :

- configuration plus lisible
- modification plus simple
- meilleure documentation.

---

# ⚠️ Pièges courants

## Deny implicite

Chaque ACL se termine par :

```
deny any
```

Si aucune règle ne correspond :

➡️ le trafic est bloqué.

---

## Ordre des règles

Les ACL sont **lues de haut en bas**.

Mauvais exemple :

```bash
access-list 10 deny any
access-list 10 permit 192.168.1.0 0.0.0.255
```

Résultat :

```
tout est bloqué
```

---

# ✅ Bonnes pratiques

- placer les ACL étendues près de la source
- documenter les règles
- éviter les ACL trop longues
- tester avec `show access-lists`
- vérifier le sens **in / out**

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| ACL | mécanisme de filtrage réseau |
| Standard | filtre uniquement l’adresse source |
| Étendue | filtre source, destination, protocole et port |
| Direction | in ou out |
| Règle implicite | deny any |

Les ACL sont un élément essentiel pour **la sécurité et le contrôle du trafic dans les réseaux Cisco**.