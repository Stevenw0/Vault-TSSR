# 🧠 WMI — Windows Management Instrumentation

## 📌 Introduction

**WMI (Windows Management Instrumentation)** est une infrastructure de gestion intégrée à Windows permettant **d’administrer, surveiller et automatiser les systèmes Windows**.

Elle fournit une interface standard permettant aux administrateurs et aux applications d’accéder à des informations système et d’exécuter des actions à distance.

WMI est basé sur les standards **WBEM (Web-Based Enterprise Management)** et utilise le langage **WQL (WMI Query Language)**.

Utilisations principales :

- administration système
- supervision
- automatisation
- inventaire matériel et logiciel
- gestion à distance.

---

# 🧠 Principe de fonctionnement

WMI agit comme **une couche d’abstraction entre le système Windows et les outils d’administration**.

Architecture simplifiée :

```
Applications / Scripts
        ↓
       WMI
        ↓
Providers
        ↓
   Composants Windows
```

Les applications interrogent **WMI**, qui récupère les informations via des **providers** spécialisés.

---

# 🧱 Composants principaux de WMI

## 🧰 WMI Service

Le service principal :

```
Windows Management Instrumentation
```

Nom du service :

```
winmgmt
```

Il gère :

- les requêtes WMI
- la communication avec les providers
- l’accès aux données système.

---

## 📦 WMI Providers

Les **providers** sont des modules permettant d’accéder à différentes ressources.

Exemples :

| Provider | Fonction |
|---|---|
Win32 Provider | informations système |
Registry Provider | accès au registre |
Event Provider | gestion des événements |
Performance Provider | données de performance |

---

## 🗄️ WMI Repository

Le **repository WMI** est une base de données contenant les **classes WMI**.

Emplacement :

```
C:\Windows\System32\wbem\Repository
```

Il contient :

- les classes
- les métadonnées
- les structures de gestion.

---

# 📊 Classes WMI

Les informations système sont organisées sous forme de **classes**.

Exemples :

| Classe | Description |
|---|---|
Win32_OperatingSystem | informations sur l’OS |
Win32_Process | processus actifs |
Win32_Service | services Windows |
Win32_LogicalDisk | disques |
Win32_NetworkAdapter | cartes réseau |

---

# 🔎 WQL — WMI Query Language

WMI utilise **WQL**, un langage similaire à SQL.

Exemple :

```
SELECT * FROM Win32_OperatingSystem
```

Cette requête retourne les informations sur le système d’exploitation.

Autre exemple :

```
SELECT Name, ProcessId FROM Win32_Process
```

Retourne :

- le nom des processus
- leur PID.

---

# 🖥️ Outils WMI sous Windows

## WMIC

Commande historique permettant d’interroger WMI.

Exemple :

```
wmic cpu get name
```

Afficher les informations CPU.

---

## PowerShell

PowerShell utilise WMI ou CIM.

Exemple :

```
Get-WmiObject Win32_OperatingSystem
```

ou

```
Get-CimInstance Win32_OperatingSystem
```

---

## WMI Explorer

Interface graphique permettant d’explorer les classes WMI.

---

## wbemtest

Outil intégré à Windows pour tester les requêtes WMI.

Commande :

```
wbemtest
```

---

# 🌐 WMI à distance

WMI permet l’administration **à distance des machines Windows**.

Protocoles utilisés :

- **DCOM**
- **RPC**
- **TCP/IP**

Ports utilisés :

```
135 (RPC)
ports dynamiques RPC
```

Cela permet par exemple :

- inventaire matériel
- gestion des services
- supervision des machines.

---

# ⚙️ Exemples d’utilisation

## Obtenir les informations système

```
Get-CimInstance Win32_ComputerSystem
```

---

## Lister les processus

```
Get-CimInstance Win32_Process
```

---

## Lister les services

```
Get-CimInstance Win32_Service
```

---

## Obtenir l’espace disque

```
Get-CimInstance Win32_LogicalDisk
```

---

# 🔐 Sécurité WMI

WMI peut être utilisé à distance, ce qui nécessite :

- des permissions administrateur
- des règles firewall adaptées
- une authentification sécurisée.

Les permissions WMI peuvent être configurées via :

```
wmimgmt.msc
```

---

# 🧰 Utilisations en administration système

WMI est largement utilisé pour :

- scripts PowerShell
- supervision (SCOM, Nagios, Zabbix)
- inventaire matériel
- gestion des machines
- automatisation.

---

# ⚠️ Utilisation par les malwares

Certains malwares utilisent WMI pour :

- persistance
- exécution de commandes
- mouvements latéraux.

Technique connue :

```
WMI Persistence
```

Cela permet d’exécuter un script automatiquement.

---

# 🚀 Avantages de WMI

✔️ administration centralisée  
✔️ accès à de nombreuses informations système  
✔️ automatisation via scripts  
✔️ gestion locale et distante  
✔️ intégration avec PowerShell.

---

# 🧾 Résumé

**WMI (Windows Management Instrumentation)** est une infrastructure essentielle de gestion Windows.

Elle permet :

- d’interroger le système
- d’automatiser l’administration
- de superviser les machines
- de gérer les ressources à distance.

Principaux éléments :

```
WMI Service
WMI Providers
WMI Repository
WQL
```

WMI est aujourd’hui **l’un des outils les plus importants pour l’administration Windows et l’automatisation des tâches système**.