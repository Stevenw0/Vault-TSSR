# 📜 Syslog — Journalisation des messages systèmes

## 📌 Introduction

**Syslog** est un protocole standard utilisé pour **collecter et centraliser les messages système** des équipements réseau et des systèmes informatiques.

Il permet de :

- surveiller l’état des équipements
- détecter les erreurs
- analyser les incidents
- assurer la traçabilité des événements
- faciliter le dépannage réseau

Les équipements pouvant envoyer des logs Syslog :

- routeurs
- switches
- serveurs
- firewalls
- systèmes Linux / Windows
- équipements réseau (Cisco, Juniper, etc.)

---

# 🧠 Principe de fonctionnement

Lorsqu’un événement se produit sur un équipement :

1. l’équipement génère un **message système**
2. ce message est enregistré **localement**
3. il peut être envoyé vers un **serveur Syslog central**

Architecture classique :

```
Equipement réseau
       ↓
   Message Syslog
       ↓
 Serveur Syslog
       ↓
Analyse / supervision
```

---

# 📊 Niveaux de sévérité Syslog

Chaque message Syslog possède un **niveau de gravité**.

| Niveau | Nom | Description |
|---|---|---|
0 | Emergency | système inutilisable |
1 | Alert | action immédiate requise |
2 | Critical | erreur critique |
3 | Error | erreur |
4 | Warning | avertissement |
5 | Notice | événement normal important |
6 | Informational | information |
7 | Debug | information de débogage |

Exemple :

```
%LINK-3-UPDOWN: Interface GigabitEthernet0/1 changed state
```

---

# 🖧 Format d’un message Syslog

Un message Syslog contient généralement :

- **timestamp**
- **équipement source**
- **processus**
- **niveau de gravité**
- **message**

Exemple :

```
Mar 10 14:32:10 Router1 %SYS-5-CONFIG_I: Configured from console
```

---

# 📡 Port Syslog

| Protocole | Port |
|---|---|
UDP | 514 |
TCP | 514 (optionnel) |

La plupart des équipements utilisent **UDP 514**.

---

# ⚙️ Configuration Syslog sur Cisco

## Activation de la journalisation

```bash
logging on
```

---

## Définir un serveur Syslog

```bash
logging host 192.168.1.10
```

---

## Définir le niveau de logs

```bash
logging trap informational
```

---

## Horodatage des logs

```bash
service timestamps log datetime msec
```

---

## Exemple configuration complète

```bash
configure terminal

service timestamps log datetime msec
logging host 192.168.1.10
logging trap informational
logging on
```

---

# 🔎 Commandes de vérification

Afficher les logs :

```bash
show logging
```

Afficher la configuration :

```bash
show running-config
```

---

# 🖥️ Serveurs Syslog courants

| Outil | Type |
|---|---|
Syslog-ng | Linux |
RSyslog | Linux |
Graylog | SIEM |
Splunk | SIEM |
Kiwi Syslog | Windows |
ELK Stack | Analyse logs |

---

# 🛡️ Avantages de la centralisation Syslog

| Avantage | Description |
|---|---|
Centralisation | logs de plusieurs équipements |
Audit | suivi des événements |
Sécurité | détection des attaques |
Dépannage | analyse rapide des erreurs |

---

# ⚠️ Points d’attention

> [!warning]

- UDP ne garantit pas la livraison des messages
- un serveur Syslog central est recommandé
- les logs doivent être surveillés régulièrement
- éviter les niveaux `debug` en production (trop verbeux)

---

# ✅ Bonnes pratiques

> [!tip]

- centraliser les logs
- synchroniser l’heure avec **NTP**
- utiliser des outils d’analyse
- conserver les logs pour l’audit
- surveiller les événements critiques

---

# 🧾 Résumé

| Élément | Description |
|---|---|
Syslog | protocole de journalisation |
Port | UDP 514 |
Utilisation | surveillance et audit |
Messages | classés par niveau de gravité |
Serveur Syslog | centralisation des logs |

Syslog est un outil essentiel pour **la supervision et la sécurité des infrastructures réseau**.