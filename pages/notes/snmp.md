# 📡 SNMP — Simple Network Management Protocol

## 📌 Introduction

**SNMP (Simple Network Management Protocol)** est un protocole utilisé pour **surveiller, gérer et administrer les équipements réseau**.

Il permet de collecter des informations et de contrôler à distance des équipements comme :

- routeurs
- switches
- serveurs
- imprimantes
- pare-feu
- équipements IoT.

SNMP est largement utilisé dans les outils de **supervision réseau**.

Exemples d’outils :

- Zabbix
- Nagios
- Centreon
- PRTG
- SolarWinds

---

# 🧠 Principe de fonctionnement

SNMP repose sur une architecture **manager / agent**.

Architecture :

```
Manager (outil de supervision)
        ↓
     requêtes SNMP
        ↓
Agent SNMP
        ↓
Équipement réseau
```

- Le **manager SNMP** interroge les équipements.
- L’**agent SNMP** répond avec les informations demandées.

---

# 🧱 Composants principaux de SNMP

## 🖥️ SNMP Manager

Le **manager** est l’outil de supervision.

Il permet :

- d’envoyer des requêtes
- de collecter des données
- de générer des alertes.

Exemples :

- serveur de supervision
- logiciel de monitoring.

---

## ⚙️ SNMP Agent

L’**agent SNMP** est un service installé sur l’équipement.

Son rôle :

- collecter les informations système
- répondre aux requêtes SNMP.

L’agent peut fonctionner sur :

- routeurs
- switches
- serveurs
- imprimantes.

---

## 🗂️ MIB — Management Information Base

La **MIB** est une base de données contenant toutes les informations accessibles via SNMP.

Elle est organisée sous forme d’arborescence.

Chaque élément possède un identifiant appelé :

```
OID (Object Identifier)
```

Exemple :

```
1.3.6.1.2.1.1.5
```

Correspond au **nom de l’équipement**.

---

# 🌳 Structure des OID

Les OID sont organisés en **arborescence hiérarchique**.

Exemple simplifié :

```
iso
 └─ org
     └─ dod
         └─ internet
             └─ mgmt
                 └─ mib-2
```

Les informations accessibles peuvent être :

- CPU
- mémoire
- trafic réseau
- état des interfaces
- température.

---

# 📊 Types de messages SNMP

SNMP utilise plusieurs types de messages.

## GET

Permet de **lire une valeur**.

Exemple :

```
GET CPU usage
```

---

## GET-NEXT

Permet de récupérer **la valeur suivante dans la MIB**.

Utilisé pour parcourir une table.

---

## GET-BULK

Permet de récupérer **plusieurs informations en une seule requête**.

Utilisé dans SNMPv2 et SNMPv3.

---

## SET

Permet de **modifier une valeur sur un équipement**.

Exemple :

- activer une interface
- modifier une configuration.

---

## TRAP

Message envoyé **automatiquement par un équipement** pour signaler un événement.

Exemples :

- interface réseau down
- surcharge CPU
- panne matérielle.

---

## INFORM

Similaire à TRAP mais avec **confirmation de réception**.

---

# 🌐 Ports utilisés

SNMP utilise le protocole **UDP**.

Ports standards :

| Port | Utilisation |
|---|---|
161 | requêtes SNMP |
162 | traps SNMP |

---

# 🔐 Versions de SNMP

## SNMPv1

Première version du protocole.

Caractéristiques :

- simple
- peu sécurisé.

Authentification via :

```
Community string
```

Exemple :

```
public
private
```

---

## SNMPv2

Amélioration de SNMPv1.

Ajouts :

- meilleures performances
- commandes GET-BULK
- gestion améliorée des erreurs.

Toujours basé sur les **community strings**.

---

## SNMPv3

Version moderne et sécurisée.

Fonctionnalités :

- authentification
- chiffrement
- contrôle d’accès.

Méthodes de sécurité :

- MD5
- SHA
- AES
- DES.

SNMPv3 est aujourd’hui **la version recommandée**.

---

# ⚙️ Exemples d’informations récupérées

SNMP peut collecter de nombreuses informations.

Exemples :

| Information | Exemple |
|---|---|
CPU | charge processeur |
RAM | mémoire utilisée |
Interfaces | trafic réseau |
Disques | espace libre |
Température | capteurs matériels |
Uptime | durée de fonctionnement |

---

# 🧰 Outils SNMP

Plusieurs outils permettent d’interroger SNMP.

## snmpwalk

Permet de parcourir une MIB.

Exemple :

```
snmpwalk -v2c -c public 192.168.1.1
```

---

## snmpget

Permet de récupérer une valeur précise.

Exemple :

```
snmpget -v2c -c public 192.168.1.1 sysName.0
```

---

## snmptrap

Permet d’envoyer des traps.

---

# 🏢 Cas d’utilisation

SNMP est utilisé dans :

- supervision réseau
- monitoring d’infrastructure
- gestion de datacenter
- surveillance des équipements.

Exemples :

```
Monitoring des switches
Supervision des serveurs
Surveillance du trafic réseau
Gestion des imprimantes réseau
```

---

# ⚠️ Limites de SNMP

Certaines versions présentent des limites.

### SNMPv1 / SNMPv2

Problèmes :

- authentification faible
- données non chiffrées.

### SNMPv3

Corrige ces problèmes mais :

- configuration plus complexe.

---

# 🧠 Bonnes pratiques

✔️ utiliser **SNMPv3**  
✔️ limiter l’accès aux IP autorisées  
✔️ éviter les community strings par défaut  
✔️ surveiller les traps  
✔️ segmenter le réseau de supervision.

---

# 📊 Exemple de supervision

Infrastructure :

```
Switch → SNMP agent
        ↓
Serveur de supervision
        ↓
Alertes et tableaux de bord
```

Le serveur récupère :

- trafic des interfaces
- CPU
- état des ports.

---

# 🧾 Résumé

**SNMP (Simple Network Management Protocol)** est un protocole essentiel pour la supervision réseau.

Il permet :

- collecter des informations système
- surveiller les équipements
- recevoir des alertes.

Composants principaux :

```
Manager
Agent
MIB
OID
```

Versions :

```
SNMPv1
SNMPv2
SNMPv3
```

Aujourd’hui, **SNMPv3 est recommandé pour la sécurité et la gestion des infrastructures modernes**.