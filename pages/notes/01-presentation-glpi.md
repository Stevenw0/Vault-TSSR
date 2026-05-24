# 01 — Présentation de GLPI

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est GLPI, à quoi il sert, et dans quel contexte on l'utilise avant d'installer quoi que ce soit.

---

## Qu'est-ce que GLPI ?

**GLPI** signifie **Gestionnaire Libre de Parc Informatique**.

C'est une application web **open source** qui permet de :
- **Gérer un parc informatique** : ordinateurs, serveurs, imprimantes, logiciels, licences…
- **Gérer un helpdesk** : tickets d'incidents et de demandes
- **Suivre les contrats, budgets et fournisseurs** : gestion financière du SI
- **Automatiser l'inventaire** : avec l'agent GLPI Inventory

> [!TIP] Analogie pour les élèves
> GLPI, c'est le **carnet de santé + le cahier de doléances** de votre infrastructure informatique.
> Tout ce qui est dans votre parc est enregistré, et tout ce qui tombe en panne génère un ticket.

---

## Un peu d'histoire

| Année | Événement |
|-------|-----------|
| 2003 | Création de GLPI par l'association Indepnet |
| 2010 | Naissance de **FusionInventory** — fork de l'agent OCS Inventory + plugin Tracker de GLPI, pour pallier le manque d'évolution d'OCS |
| 2015 | GLPI repris par **Teclib** |
| 2021 | **GLPI 10** — inventaire intégré nativement dans le cœur (remplace FusionInventory pour l'inventaire de base). Naissance du plugin **GLPI Inventory** (fork de FusionInventory) pour les fonctions avancées |
| 2023 | Dernière release de FusionInventory (10.0.6+1.1) — février 2023 |
| 2024 | FusionInventory officiellement **archivé** (avril 2024) — GLPI Inventory devient la référence |
| 2025 | **GLPI 11** — nouvelle version majeure |
| 2026 | GLPI **11.0.6** — version stable actuelle (mars 2026) |

### FusionInventory → GLPI Inventory : comprendre la transition

```
OCS Inventory (stagnant)
        │ fork 2010
        ▼
  FusionInventory ──────── plugin GLPI (inventaire avancé)
        │
        │ GLPI 10 (2021) : inventaire intégré nativement
        ▼
  GLPI Inventory plugin ── fonctions avancées uniquement
  (réseau SNMP, déploiement, découverte réseau)
```

> [!WARNING] À retenir pour la formation
> - **OCS Inventory** : l'ancien outil, encore présent dans certains SI legacy
> - **FusionInventory** : archivé en 2024, ne plus l'installer
> - **GLPI Inventory** : la solution actuelle — agent + plugin pour les fonctions avancées

---

## Architecture technique

GLPI est une application **LAMP** :

```
┌─────────────────────────────────────────┐
│              Navigateur web             │
└───────────────────┬─────────────────────┘
                    │ HTTP/HTTPS
┌───────────────────▼─────────────────────┐
│         Serveur web (Apache/Nginx)      │
│         PHP 8.x                         │
│         GLPI (application PHP)          │
└───────────────────┬─────────────────────┘
                    │ SQL
┌───────────────────▼─────────────────────┐
│      Base de données (MariaDB/MySQL)    │
└─────────────────────────────────────────┘
```


---

## Environnement de lab (VirtualBox)

Pour cette formation, chaque participant travaille sur une VM locale.

| Élément | Valeur |
|---------|--------|
| Hyperviseur | VirtualBox |
| OS serveur | **Debian 13 (Trixie)** |
| RAM recommandée | 2 Go minimum |
| Disque | 20 Go |
| Réseau | NAT + Réseau hôte uniquement |

> [!WARNING] Pourquoi Debian 13 ?
> - C'est la dernière version stable de Debian (août 2025)
> - Légère, sécurisée, représentative d'un environnement serveur réel
> - Compatible avec les prérequis GLPI (PHP 8.x, MariaDB 10.x+)

---

## Les 3 grandes fonctions de GLPI

### 1. Gestion des assets (parc)
Inventorier tout le matériel et les logiciels du SI :
- Ordinateurs, serveurs, téléphones, imprimantes
- Logiciels et licences
- Réseaux, baies, câbles

### 2. Helpdesk (ITSM)
Gérer les incidents et demandes :
- Tickets créés par les utilisateurs (self-service) ou les techniciens
- Suivi, escalade, SLA
- Base de connaissances et FAQ

### 3. Gestion financière et administrative
- Contrats de maintenance
- Budgets
- Fournisseurs et contacts

---

## GLPI et ITIL

GLPI est aligné sur le référentiel **ITIL** (Information Technology Infrastructure Library) :

| Processus ITIL | Dans GLPI |
|----------------|-----------|
| Gestion des incidents | Tickets de type Incident |
| Gestion des demandes | Tickets de type Demande |
| Gestion des changements | Module Changements |
| Gestion des actifs (CMDB) | Inventaire du parc |
| Base de connaissances | Module KBase |

---

## Liens utiles
- [Documentation | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr)
- [GitHub GLPI](https://github.com/glpi-project/glpi)
- [Forum communautaire](https://forum.glpi-project.org/)

---