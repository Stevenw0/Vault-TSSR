# 🎭 Wildcard Mask — Masque générique

## 📌 Introduction

La **wildcard mask** est un masque utilisé dans les équipements réseau, notamment chez **Cisco**, pour définir **quelles adresses IP doivent être prises en compte** dans une règle ou une configuration.

On la retrouve surtout dans :

- les **ACL**
- **OSPF**
- certaines configurations de routage ou de filtrage.

Elle est parfois appelée :

```text
Masque générique
Masque inverse
```

---

# 🧠 Principe

La wildcard mask fonctionne à l’inverse du masque de sous-réseau classique.

Règle simple :

- `0` → le bit doit **correspondre exactement**
- `1` → le bit peut **varier**

Autrement dit :

```text
0 = on compare
1 = on ignore
```

---

# 🔁 Différence entre masque de sous-réseau et wildcard mask

| Élément | Rôle |
|---|---|
| Masque de sous-réseau | Détermine la partie réseau et la partie hôte |
| Wildcard mask | Détermine quels bits doivent être vérifiés ou ignorés |

La wildcard mask est souvent :

```text
L’inverse du masque de sous-réseau
```

---

# 🧮 Calcul d’une wildcard mask

Pour obtenir une wildcard mask, on inverse le masque de sous-réseau.

Exemple :

| Masque de sous-réseau | Wildcard mask |
|---|---|
| 255.255.255.0 | 0.0.0.255 |
| 255.255.0.0 | 0.0.255.255 |
| 255.0.0.0 | 0.255.255.255 |
| 255.255.255.252 | 0.0.0.3 |

Méthode de calcul :

```text
255 - valeur du masque = valeur wildcard
```

Exemple :

```text
255.255.255.0
↓
0.0.0.255
```

---

# 📊 Exemples courants

| Réseau | Masque | Wildcard |
|---|---|---|
| 192.168.1.0/24 | 255.255.255.0 | 0.0.0.255 |
| 10.0.0.0/8 | 255.0.0.0 | 0.255.255.255 |
| 172.16.0.0/16 | 255.255.0.0 | 0.0.255.255 |
| 192.168.1.4/30 | 255.255.255.252 | 0.0.0.3 |

---

# 🔐 Utilisation dans les ACL

Les wildcard masks sont très utilisées dans les **ACL Cisco**.

Exemple :

```bash
access-list 10 permit 192.168.1.0 0.0.0.255
```

Cela signifie :

- on autorise tout le réseau
- `192.168.1.0/24`

Pourquoi ?

- les trois premiers octets doivent correspondre exactement
- le dernier peut varier.

---

## Cas d’une seule adresse IP

Pour faire correspondre **une seule IP**, on utilise :

```text
0.0.0.0
```

Exemple :

```bash
access-list 10 permit 192.168.1.10 0.0.0.0
```

Cela signifie :

```text
Autoriser uniquement 192.168.1.10
```

---

## Mot-clé `any`

En Cisco, `any` équivaut à :

```text
0.0.0.0 255.255.255.255
```

Exemple :

```bash
access-list 10 permit any
```

---

# 🌐 Utilisation dans OSPF

OSPF utilise aussi les wildcard masks pour annoncer les réseaux.

Exemple :

```bash
router ospf 1
 network 192.168.1.0 0.0.0.255 area 0
```

Cela signifie :

- inclure le réseau `192.168.1.0/24`
- dans l’**area 0**

---

# 🧩 Logique binaire

Exemple avec :

```text
IP :       192.168.1.10
Wildcard : 0.0.0.255
```

Interprétation :

- `192.168.1` doit être identique
- le dernier octet peut être n’importe quelle valeur.

Donc cela couvre :

```text
192.168.1.0 à 192.168.1.255
```

---

# ⚠️ Attention à la confusion

La wildcard mask n’est **pas** un masque de sous-réseau.

Exemple :

```text
255.255.255.0 = masque réseau
0.0.0.255     = wildcard
```

Ils sont liés, mais n’ont **pas le même rôle**.

---

# 🧰 Astuce rapide

Pour convertir rapidement :

```text
Wildcard = 255.255.255.255 - masque
```

Exemple :

```text
Masque   : 255.255.255.248
Wildcard : 0.0.0.7
```

---

# 📍 Valeurs spéciales utiles

| Wildcard | Signification |
|---|---|
| 0.0.0.0 | une seule adresse IP |
| 0.0.0.255 | un /24 |
| 0.0.255.255 | un /16 |
| 0.255.255.255 | un /8 |
| 255.255.255.255 | n’importe quelle adresse |

---

# 🚀 Exemples pratiques

## Autoriser un réseau /24 dans une ACL

```bash
access-list 10 permit 192.168.10.0 0.0.0.255
```

---

## Autoriser une seule machine

```bash
access-list 10 permit 192.168.10.15 0.0.0.0
```

---

## Déclarer un réseau dans OSPF

```bash
router ospf 1
 network 10.1.0.0 0.0.255.255 area 0
```

---

# 🧾 Résumé

La **wildcard mask** est un masque inverse utilisé surtout dans les équipements Cisco.

Règle essentielle :

```text
0 = doit correspondre
1 = peut varier
```

Elle est utilisée dans :

- les ACL
- OSPF
- certaines règles de filtrage et de routage.

Pour la calculer :

```text
255 - masque = wildcard
```

C’est une notion indispensable pour bien comprendre :

- les ACL Cisco
- la configuration OSPF
- les correspondances d’adresses IP.