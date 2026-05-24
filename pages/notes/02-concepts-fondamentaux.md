# 02 — Concepts fondamentaux d'ITIL 4

> [!NOTE] Objectif de cette section
> Comprendre l'architecture globale d'ITIL 4 : les 4 dimensions qui encadrent tout service, le Service Value System (SVS) et la chaîne de valeur. Ces concepts sont le socle de tout le reste du cours.

---

## Les 4 dimensions de la gestion des services

ITIL 4 définit **4 dimensions** qui doivent toutes être prises en compte pour qu'un service fonctionne bien. Ignorer l'une d'elles, c'est prendre le risque d'un dysfonctionnement.

### Dimension 1 — Organisations et personnes

Un service repose sur des **êtres humains** : techniciens, responsables, utilisateurs. Pour qu'un service fonctionne, il faut que :
- Les rôles et responsabilités soient clairement définis (qui fait quoi ?)
- La culture d'entreprise soit favorable à la collaboration
- Les compétences soient au bon niveau

> **Au Fournil Doré** : Thomas est le seul technicien. Si personne ne sait qu'il est responsable des incidents réseau, les pannes ne seront jamais signalées correctement.

### Dimension 2 — Information et technologie

Il s'agit des **outils, logiciels, données et connaissances** nécessaires pour gérer les services :
- Logiciels de gestion (GLPI, par exemple)
- Bases de données
- Outils de surveillance et d'automatisation
- Documentation technique

> **Au Fournil Doré** : GLPI est l'outil qui centralise les tickets. Sans lui, Thomas gère les incidents par email ou à l'oral — et perd tout historique.

### Dimension 3 — Partenaires et fournisseurs

Aucune DSI ne fait tout en interne. Des **prestataires externes** interviennent :
- Fournisseur d'accès Internet
- Hébergeur cloud
- Prestataire de maintenance matérielle
- Éditeur logiciel

> **Au Fournil Doré** : OVH héberge le serveur GLPI. Si OVH a une panne, Thomas ne peut rien faire — il doit le savoir et avoir un contrat avec des engagements de disponibilité.

### Dimension 4 — Flux de valeur et processus

Ce sont les **enchaînements d'activités** qui transforment une demande en résultat :
- Comment un incident est pris en charge, du signalement à la résolution ?
- Comment une nouvelle application est déployée ?
- Comment une demande d'accès est traitée ?

> **Au Fournil Doré** : Marie signale un problème d'imprimante → Thomas crée un ticket → diagnostique → résout → ferme le ticket. Ce flux doit être défini, sinon chaque incident se gère différemment.

### Les facteurs PESTLE

Les 4 dimensions ne fonctionnent pas en vase clos. Elles sont influencées par des **facteurs externes** regroupés sous l'acronyme **PESTLE** :

| Lettre | Facteur | Exemple concret |
|--------|---------|-----------------|
| P | Politique | Obligation d'héberger les données en France |
| E | Économique | Budget informatique réduit |
| S | Social | Télétravail qui change les usages |
| T | Technologique | Arrivée de l'IA dans les outils |
| L | Légal | RGPD sur les données personnelles |
| E | Environnemental | Réduction de la consommation énergétique |

---

## Le Service Value System (SVS)

Le **SVS** (Système de Valeur des Services) est le modèle global d'ITIL 4. Il représente **comment une organisation transforme une demande en valeur**.

```
                    ┌─────────────────────────────────────────┐
  OPPORTUNITÉ  ───▶ │                                         │ ───▶  VALEUR
  DEMANDE      ───▶ │         SERVICE VALUE SYSTEM            │
                    │                                         │
                    │  ┌─────────────────────────────────┐    │
                    │  │     CHAÎNE DE VALEUR DES        │    │
                    │  │           SERVICES              │    │
                    │  └─────────────────────────────────┘    │
                    │                                         │
                    │  + Principes directeurs                 │
                    │  + Gouvernance                          │
                    │  + Pratiques (34)                       │
                    │  + Amélioration continue                │
                    └─────────────────────────────────────────┘
```

Le SVS est composé de 5 éléments :

| Élément | Rôle |
|---------|------|
| **Principes directeurs** | 7 règles de bon sens qui guident toutes les décisions |
| **Gouvernance** | La direction fixe les orientations et s'assure de leur respect |
| **Chaîne de valeur** | Les 6 activités qui transforment une demande en service |
| **Pratiques** | Les 34 "boîtes à outils" spécialisées (gestion des incidents, des changements…) |
| **Amélioration continue** | Mécanisme permanent pour s'améliorer à tous les niveaux |

---

## Les 7 principes directeurs

Les **7 principes directeurs** sont des recommandations universelles. Ils s'appliquent quelle que soit la taille de l'organisation, quelle que soit la situation.

| # | Principe | En pratique |
|---|----------|-------------|
| 1 | **Se concentrer sur la valeur** | Toujours se demander : est-ce que ça apporte quelque chose à l'utilisateur ? |
| 2 | **Commencer là où on en est** | Ne pas tout effacer pour repartir de zéro. Capitaliser sur l'existant. |
| 3 | **Progresser de façon itérative** | Avancer par petites étapes, avec des retours réguliers. |
| 4 | **Collaborer et promouvoir la visibilité** | Partager l'information, travailler ensemble, éviter les silos. |
| 5 | **Penser et travailler de façon holistique** | Voir le système dans son ensemble, pas juste sa propre brique. |
| 6 | **Garder les choses simples et pratiques** | Si une procédure est trop compliquée, personne ne la suivra. |
| 7 | **Optimiser et automatiser** | Réduire les tâches répétitives, utiliser l'automatisation intelligemment. |

> [!TIP] Retenir les 7 principes
> Ces principes ne sont pas propres à ITIL — ce sont des règles de bon sens que vous appliquez déjà inconsciemment. ITIL les formalise pour que toute une organisation les partage.

---

## La chaîne de valeur des services

La **chaîne de valeur** est le cœur opérationnel du SVS. Elle décrit les **6 activités** par lesquelles une organisation transforme une demande en un service utile.

```
                            CHAÎNE DE VALEUR

  ┌──────────┐   ┌──────────┐   ┌──────────────────┐
  │  Planifier│   │ Améliorer │   │    Impliquer      │
  └──────────┘   └──────────┘   └──────────────────┘

  ┌──────────────────────┐   ┌───────────────┐   ┌──────────────────┐
  │ Concevoir et         │   │ Obtenir /     │   │ Fournir et       │
  │ faire évoluer        │   │ Construire    │   │ supporter        │
  └──────────────────────┘   └───────────────┘   └──────────────────┘
```

| Activité | Ce qu'elle couvre |
|----------|------------------|
| **Planifier** | Définir la vision, la stratégie, les priorités |
| **Améliorer** | Identifier les axes d'amélioration à tous les niveaux |
| **Impliquer** | Comprendre les besoins des parties prenantes, gérer les relations |
| **Concevoir et faire évoluer** | Concevoir et faire évoluer les services et les pratiques |
| **Obtenir / Construire** | Acquérir ou développer les composants nécessaires |
| **Fournir et supporter** | Délivrer les services au quotidien et gérer les incidents |

> [!NOTE] Ce n'est pas un processus linéaire
> Contrairement à ITIL v3 (qui suivait un cycle de vie séquentiel Stratégie → Conception → Transition → Exploitation), la chaîne de valeur ITIL 4 est **flexible** : les activités s'enchaînent différemment selon le type de demande. Un incident ne suit pas le même chemin qu'un déploiement.

---

## Les 34 pratiques

ITIL 4 remplace le terme "processus" par **"pratique"** — une pratique est un ensemble de ressources (personnes, outils, procédures) organisées pour atteindre un objectif.

Il y en a **34**, réparties en 3 catégories :

| Catégorie | Nombre | Exemples |
|-----------|--------|---------|
| **Pratiques générales de management** | 14 | Gestion des risques, amélioration continue, gestion de projet |
| **Pratiques de gestion des services** | 17 | Gestion des incidents, des problèmes, des changements, des SLA |
| **Pratiques de gestion technique** | 3 | Gestion des déploiements, de l'infrastructure, du développement |

> Nous verrons les pratiques les plus importantes (incidents, problèmes, changements) dans les chapitres suivants.

---

## Atelier — Cartographier le SVS du Fournil Doré

> **Contexte** : Thomas veut structurer la gestion IT du Fournil Doré en s'appuyant sur le modèle ITIL 4.

### Partie 1 — Les 4 dimensions

Pour le Fournil Doré, identifiez un exemple concret pour chacune des 4 dimensions :

| Dimension | Exemple au Fournil Doré |
|-----------|------------------------|
| Organisations et personnes | *(à compléter)* |
| Information et technologie | *(à compléter)* |
| Partenaires et fournisseurs | *(à compléter)* |
| Flux de valeur et processus | *(à compléter)* |

### Partie 2 — Les principes directeurs en action

Thomas reçoit une mission : "Mettre en place une procédure pour gérer les pannes d'imprimante."

Pour chacun des principes ci-dessous, indiquez comment il s'applique à cette mission :

- **Se concentrer sur la valeur** : à quoi sert cette procédure pour les utilisateurs ?
- **Commencer là où on en est** : qu'est-ce qui existe déjà (même informellement) ?
- **Garder les choses simples** : combien d'étapes maximum pour une procédure qui sera suivie ?

### Corrigé indicatif

**Partie 1 :**

| Dimension | Exemple au Fournil Doré |
|-----------|------------------------|
| Organisations et personnes | Thomas = technicien unique, Marie = utilisatrice principale, direction = commanditaire |
| Information et technologie | GLPI pour les tickets, logiciel de caisse, serveur OVH |
| Partenaires et fournisseurs | OVH (hébergement), fournisseur Internet, prestataire maintenance caisse |
| Flux de valeur et processus | Signalement d'incident → ticket GLPI → diagnostic → résolution → clôture |

**Partie 2 :**

- **Se concentrer sur la valeur** : les vendeurs peuvent imprimer les bons de commande sans attendre Thomas
- **Commencer là où on en est** : Thomas gère déjà ces pannes, souvent verbalement — formaliser ce qui marche déjà
- **Garder les choses simples** : 4 étapes maximum (signaler → vérifier le câble/papier → redémarrer → appeler Thomas)

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| 4 dimensions | Organisations/personnes, Information/technologie, Partenaires/fournisseurs, Flux/processus |
| PESTLE | Facteurs externes qui influencent les 4 dimensions |
| SVS | Modèle global : principes + gouvernance + chaîne de valeur + pratiques + amélioration continue |
| 7 principes directeurs | Règles universelles qui guident toutes les décisions ITIL |
| Chaîne de valeur | 6 activités flexibles pour transformer une demande en valeur |
| 34 pratiques | Remplacent les "processus" — boîtes à outils spécialisées |

---