# 🌐  IPv6 — Configuration, Routage et Exercices

## 📌 Introduction

IPv6 est la nouvelle version du protocole IP utilisée pour remplacer IPv4.

Caractéristiques :

- adresse codée sur **128 bits**
- écriture **hexadécimale**
- séparation par `:`

Format :

```
XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX/Prefix
```

Exemple :

```
2001:db8:1000:1::1/64
```

---

# 🧠 Types d’adresses IPv6

| Type | Préfixe | Description |
|---|---|---|
| Link Local | FE80::/10 | communication locale uniquement |
| Global Unicast | 2000::/3 | adresse publique routable |
| Unique Local | FD00::/8 | équivalent du privé IPv4 |
| Multicast | FF00::/8 | communication groupe |
| Loopback | ::1/128 | localhost |

---

# ✏️ Règles de simplification IPv6

### Suppression des zéros non significatifs

```
2001:0DB8:0000:0000:0001:0000:0000:0001
```

↓

```
2001:DB8:0:0:1:0:0:1
```

---

### Compression des suites de zéros

```
2001:DB8:0:0:0:0:0:1
```

↓

```
2001:DB8::1
```

⚠️ `::` ne peut être utilisé **qu'une seule fois par adresse**.

---

# 🖥️ Partie 1 — Configuration IPv6 des machines



Objectif :

- configurer IPv6 sur les machines
- tester la connectivité.

### Configuration dans Packet Tracer

```
Desktop
→ IP Configuration
→ IPv6 Address
```

Exemple :

| Machine | Adresse IPv6 |
|---|---|
PC1 | FD00:AC3:1::1/48 |
PC2 | FD00:AC3:1::2/48 |
Laptop0 | FD00:AC3:1::3/48 |
Laptop1 | FD00:AC3:1::4/48 |

---

### Test de connectivité

```
ping IPv6
```

Exemple :

```
ping FD00:AC3:1::2
```

---

# 🧭 Partie 2 — Configuration IPv6 d'un routeur



Objectif :

- configurer IPv6 sur les interfaces
- activer le routage IPv6.

---

## Configuration d’une interface

```bash
interface GigabitEthernet0/0
ipv6 enable
ipv6 address FD00:AC3:1::F/48
no shutdown
```

---

## Activation du routage IPv6

Par défaut le routage IPv6 est **désactivé**.

Commande :

```bash
ipv6 unicast-routing
```

---

## Configuration complète

```bash
enable
configure terminal

interface GigabitEthernet0/0
ipv6 enable
ipv6 address FD00:AC3:1::F/48
no shutdown
```

---

## Vérification

```bash
show ipv6 interface
show ipv6 route
```

---

# 🌐 Partie 3 — Routage statique IPv6



Objectif :

connecter **deux réseaux IPv6** via des routeurs.

---

## Configuration Router0

```bash
enable
conf t

interface Gig0/0
ipv6 enable
ipv6 address FD01:1:2::1/48
no shutdown

interface Se0/3/0
ipv6 enable
ipv6 address 2001:ABC:F2:1::1/64
no shutdown
```

---

## Configuration Router1

```bash
enable
conf t

interface Gig0/0
ipv6 enable
ipv6 address FD02:1:1::1/48
no shutdown

interface Se0/3/0
ipv6 enable
ipv6 address 2001:ABC:F2:1::2/64
no shutdown
```

---

## Routes statiques

### Router0

```bash
ipv6 route FD02:1:1::/48 2001:ABC:F2:1::2
```

### Router1

```bash
ipv6 route FD01:1:2::/48 2001:ABC:F2:1::1
```

---

## Vérification

```bash
show ipv6 route
```

---

# 🔁 Partie 4 — Routage dynamique RIPng

RIPng est la version IPv6 du protocole RIP.

---

## Activation

```bash
ipv6 unicast-routing
```

---

## Configuration Router0

```bash
interface Gig0/0
ipv6 rip ccna enable

interface Se0/3/0
ipv6 rip ccna enable
```

---

## Configuration Router1

```bash
interface Gig0/0
ipv6 rip ccna enable

interface Se0/3/0
ipv6 rip ccna enable
```

---

## Vérification

```bash
show ipv6 route
```

Les routes marquées :

```
R
```

sont apprises via **RIPng**.

---

# 🧪 Exercices IPv6

## Exercice 1 — Adresse valide

Identifier les adresses IPv6 valides :

```
2001:DB8:100::1
2001:DB8:1G5A::1
FF02::2
8965:679:80:3::A
2001:0DB8:100:1:2:3:4:5:1
```

---

## Exercice 2 — Simplification

Simplifier :

```
2001:0DB8:1000:2000:3000:0100:0020:0300
2001:0DB8:0000:0000:0001:0000:0000:0001
2001:0DB8:0000:0000:0000:0000:0000:0001
0000:0000:0000:0000:0000:0000:0000:0001
```

---

## Exercice 3 — Type d’adresse

Identifier le type :

```
2001:DB8:DE1F:20:30:1:20:300
FE80::123:4567:89AB:CDEF
FF02::1
```

---

# ⚠️ Points d’attention

> [!warning]

- ne pas oublier `ipv6 unicast-routing`
- vérifier la passerelle IPv6
- vérifier les masques `/64`, `/48`
- tester avec `ping`.

---

# ✅ Bonnes pratiques

> [!tip]

- utiliser `/64` pour les LAN
- séparer les réseaux IPv6
- documenter les préfixes
- vérifier les routes avec `show ipv6 route`.

---

# 🧾 Résumé

| Élément | Description |
|---|---|
IPv6 | protocole IP nouvelle génération |
Longueur | 128 bits |
Notation | hexadécimale |
Routage | statique ou dynamique |
Protocoles | RIPng, OSPFv3, BGP |

IPv6 permet de résoudre :

- l'épuisement IPv4
- l'amélioration du routage
- l'auto-configuration des réseaux.