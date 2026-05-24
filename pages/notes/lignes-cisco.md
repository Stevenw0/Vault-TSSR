# 🖧 Lignes de configuration Cisco et accès aux équipements

## 📌 Introduction

Les équipements Cisco (routeurs, switches) peuvent être configurés via plusieurs **types de lignes d'accès**.

Ces lignes permettent :

- l'accès local à l’équipement
- l'administration à distance
- la maintenance et le dépannage

On retrouve principalement :

- **Console**
- **AUX**
- **VTY**

Ces lignes font partie du **système d’accès au CLI (Command Line Interface)** de Cisco.

---

# 🧩 Slots et modules Cisco

Sur certains routeurs Cisco, il est possible d’ajouter des **modules matériels** afin d’étendre les interfaces réseau.

## SLOT NM — Network Module

Permet d'ajouter des interfaces **LAN**.

Exemples :

- FastEthernet
- GigabitEthernet
- interfaces supplémentaires pour les LAN

Utilisation :

- extension du nombre de ports réseau
- connexion à plusieurs réseaux.

---

## SLOT WIC — WAN Interface Card

Permet d'ajouter des interfaces **WAN**.

Exemples :

- interfaces **Serial**
- interfaces pour connexions opérateurs

Utilisation :

- connexions WAN
- liens entre routeurs
- connexions série.

---

# 🖥️ Les lignes d'accès Cisco

Les **lignes** permettent d'accéder au CLI de l’équipement Cisco.

Elles sont utilisées pour :

- configuration
- administration
- maintenance
- accès distant.

---

# 1️⃣ Ligne Console

## Principe

La **ligne console** permet d'accéder directement à l’équipement.

Elle est utilisée pour :

- configuration initiale
- dépannage
- récupération après panne réseau.

---

## Connexion physique

Connexion via un **câble console** :

```
RJ45 (équipement Cisco)
↓
RS232 ou USB (ordinateur)
```

Types de câbles :

- RJ45 → RS232
- RJ45 → USB.

---

## Configuration de la ligne console

```bash
line console 0
password cisco
login
```

---

## Exemple configuration complète

```bash
enable
configure terminal

line console 0
password cisco
login
logging synchronous
exit
```

---

# 2️⃣ Ligne AUX

## Principe

La **ligne auxiliaire (AUX)** permet l’accès distant via une **connexion téléphonique**.

Elle utilise :

- un modem
- une ligne téléphonique.

Connexion :

```
Port AUX
↓
Cable RJ11
↓
Modem
```

---

## Utilisation

Principalement pour :

- accès distant de secours
- maintenance lorsque le réseau IP est indisponible.

---

## Configuration

```bash
line aux 0
password cisco
login
```

---

# 3️⃣ Lignes VTY (Virtual Terminal)

## Principe

Les **lignes VTY** permettent l’accès distant via le réseau.

Elles utilisent :

- **Telnet**
- **SSH**

Connexion via :

```
Ethernet (RJ45)
```

---

## Nombre de lignes VTY

Par défaut :

```
line vty 0 4
```

soit **5 sessions simultanées**.

Certains équipements supportent :

```
line vty 0 15
```

soit **16 connexions simultanées**.

---

## Configuration Telnet

```bash
line vty 0 4
password cisco
login
```

---

## Configuration SSH (recommandé)

```bash
hostname R1
ip domain-name lab.local

crypto key generate rsa

username admin secret Cisco123

line vty 0 4
login local
transport input ssh
```

---

# 🔐 Sécurisation des accès

Bonnes pratiques :

- utiliser **SSH plutôt que Telnet**
- définir des mots de passe
- limiter l’accès aux VTY.

---

## Exemple sécurisation

```bash
line vty 0 4
transport input ssh
login local
exec-timeout 5 0
```

---

# 📊 Résumé des lignes Cisco

| Ligne | Type d'accès | Utilisation |
|---|---|---|
Console | accès local | configuration initiale |
AUX | accès téléphonique | maintenance |
VTY | accès réseau | administration distante |

---

# 🔎 Commandes utiles

Afficher les lignes configurées :

```bash
show running-config
```

Voir les connexions actives :

```bash
show users
```

Afficher les sessions SSH :

```bash
show ssh
```

---

# ⚠️ Points d'attention

> [!warning]

- toujours sécuriser les lignes VTY
- éviter Telnet (non chiffré)
- utiliser des mots de passe forts
- limiter les accès administrateur.

---

# 🧾 Résumé

Les équipements Cisco possèdent plusieurs **lignes d'accès CLI** :

| Ligne | Accès |
|---|---|
Console | accès local direct |
AUX | accès téléphonique |
VTY | accès réseau |

Ces lignes permettent :

- la configuration
- l'administration
- le dépannage

La **ligne VTY avec SSH** est aujourd’hui la méthode la plus utilisée pour administrer les équipements Cisco.