# Decouverte ITIL
[toc]

# 01 — Introduction à ITIL

:::info
**Objectif de cette section**

Comprendre ce qu'est ITIL, pourquoi il existe et comment il s'applique concrètement dans une entreprise. Savoir distinguer un service IT d'un produit IT.
:::

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/riCJU_ZMRYo?si=SobkFVz_wg5Lk9SP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Qu'est-ce qu'ITIL ?

**ITIL** signifie **Information Technology Infrastructure Library** — littéralement "bibliothèque d'infrastructure des technologies de l'information".

C'est un **référentiel de bonnes pratiques** pour gérer les services informatiques. Il ne dit pas comment faire techniquement (ce n'est pas un outil, ni un logiciel, ni une norme ISO), mais **comment organiser le travail** autour de l'IT pour que les services rendus aient de la valeur pour l'entreprise.

:::info
**Une analogie simple**

ITIL c'est comme le **Code de la Route** pour l'informatique. Le Code de la Route ne vous dit pas comment conduire une voiture (c'est la technique), il définit les règles communes pour que tout le monde circule dans le bon ordre. ITIL définit les règles communes pour que les services IT fonctionnent correctement.
:::

---

## Pourquoi ITIL a-t-il été créé ?

Dans les années 1980, le gouvernement britannique constate que les projets informatiques dérapent systématiquement : délais non tenus, budgets explosés, systèmes qui ne répondent pas aux besoins des utilisateurs.

L'**OGC** (Office of Government Commerce) commande alors un recensement des meilleures pratiques observées dans les administrations et entreprises qui fonctionnent bien. Le résultat est publié sous forme de livres — d'où le nom "bibliothèque".

ITIL n'a pas été inventé dans un laboratoire. Il a été **observé et formalisé** à partir de ce qui marche dans la réalité.

---

## Les versions d'ITIL

| Version | Année | Caractéristiques |
|---------|-------|-----------------|
| **ITIL v1** | 1989 | 31 livres, très détaillé, difficile à utiliser |
| **ITIL v2** | 2000 | Condensé en 7 livres, centré sur les processus. Introduit les concepts d'Incident, Problème, Changement |
| **ITIL v3** | 2007 | 5 livres organisés autour du **cycle de vie du service** (Stratégie → Conception → Transition → Exploitation → Amélioration) |
| **ITIL v3 2011** | 2011 | Mise à jour et corrections |
| **ITIL 4** | 2019 | Refonte complète. Passage d'une logique de processus à une logique de **valeur**. Intègre les approches Agile, DevOps, Lean |
| **ITIL 5** | 2026 ⭐ | Dernière version (Foundation disponible depuis le 12 février 2026). Intègre nativement l'**IA** et étend le référentiel au-delà de l'IT vers l'**ESM** (Enterprise Service Management) |

:::info
**ITIL 4 et ITIL 5 coexistent**

**ITIL 5** (Foundation) est sorti le 12 février 2026 — c'est la toute dernière version. Elle est publiée par **PeopleCert** (qui a racheté Axelos en 2021). ITIL 4 reste valide et largement utilisé en entreprise : les deux versions coexistent, aucune date de retrait d'ITIL 4 n'est annoncée. Dans ce cours, nous travaillons sur les concepts fondamentaux communs aux deux versions.
:::

:::info
**Les grandes nouveautés d'ITIL 5**

- **IA native** : l'intelligence artificielle est intégrée comme pilier opérationnel, avec un modèle 6C (Creation, Curation, Clarification, Cognition, Communication, Coordination)
- **ESM** (Enterprise Service Management) : le référentiel s'étend aux RH, finances, logistique — pas uniquement à l'IT
- **Cycle de vie numérique** : nouveau modèle unifié pour la création, la livraison et l'amélioration des services numériques
:::

---

## La notion clé : le service

ITIL 4 est entièrement centré sur la notion de **service**. Tout part de là.

### Définition officielle

> *"Un service est un moyen de permettre la cocréation de valeur en facilitant les résultats que les clients veulent obtenir, sans qu'ils aient à gérer les coûts et les risques spécifiques."*

En clair : un service IT permet à quelqu'un d'obtenir quelque chose d'utile, sans avoir à comprendre comment ça fonctionne techniquement.

### Service vs Produit

| | Produit | Service |
|--|---------|---------|
| **Définition** | Un bien tangible livré | Une capacité disponible en permanence |
| **Exemple IT** | Un serveur livré et installé | L'accès au réseau Wi-Fi |
| **Consommation** | On le possède | On l'utilise quand on en a besoin |
| **Valeur** | Dans l'objet lui-même | Dans l'usage qu'on en fait |

### Les services IT au quotidien

Un service IT n'est pas forcément visible. Quand Marie au Fournil Doré envoie un email, elle utilise :
- Le service de messagerie
- Le service réseau
- Le service d'authentification (pour se connecter)
- Le service de stockage (pour les pièces jointes)

Elle ne voit qu'un seul bouton "Envoyer" — derrière, 4 services IT travaillent ensemble.

---


## Qui utilise ITIL ?

ITIL est utilisé dans :

- **Grandes entreprises** : Orange, BNP Paribas, SNCF, Airbus...
- **Administrations** : Ministères, collectivités territoriales
- **ESN** (Entreprises de Services du Numérique) : Capgemini, Sopra Steria, Atos...
- **DSI** (Directions des Systèmes d'Information) de taille moyenne

En tant que TSSR, vous travaillerez dans des environnements ITIL. Les termes **incident, problème, changement, SLA, catalogue de services** font partie du vocabulaire quotidien du métier.

---

## ITIL et les certifications

ITIL propose un parcours de certification. Deux versions coexistent actuellement :

**ITIL 4** (toujours valide et très répandu en entreprise)

| Niveau | Nom | Public |
|--------|-----|--------|
| Entrée | **ITIL 4 Foundation** | Tout professionnel IT |
| Intermédiaire | **ITIL 4 Specialist** | Experts par domaine |
| Avancé | **ITIL 4 Strategist / Leader** | Managers DSI |
| Expert | **ITIL Master** | Très expérimenté |

**ITIL 5** (disponible depuis février 2026)

| Niveau | Nom | Disponibilité |
|--------|-----|--------------|
| Entrée | **ITIL Foundation (v5)** | ✅ Depuis le 12 février 2026 |
| Spécialiste | **ITIL AI Governance** | 🔜 Mai 2026 |
| Avancé | Modules supplémentaires | 🔜 Courant 2026 |

La certification **ITIL Foundation** (v4 ou v5) reste la plus demandée dans les offres d'emploi TSSR/technicien helpdesk. Elle valide la connaissance des concepts de base communs aux deux versions.

---

## Résumé du chapitre

| Concept | Définition à retenir |
|---------|---------------------|
| ITIL | Référentiel de bonnes pratiques pour gérer les services IT |
| Service | Moyen de cocréer de la valeur sans que le client gère la complexité technique |
| Valeur | Créée conjointement par le prestataire ET l'utilisateur |
| ITIL 4 | Version 2019, centrée sur la valeur, intègre Agile et DevOps — encore largement utilisée en entreprise |
| ITIL 5 | Dernière version (février 2026), intègre l'IA native et étend le référentiel à l'ESM |
| Foundation | Certification d'entrée (v4 ou v5), reconnue dans toutes les offres d'emploi IT |

## Liens intéressent
- [Welcome to ITIL](https://www.itil.com/)


---


# 02 — Concepts fondamentaux d'ITIL 4

:::info
**Objectif de cette section**

Comprendre l'architecture globale d'ITIL 4 : les 4 dimensions qui encadrent tout service, le Service Value System (SVS) et la chaîne de valeur. Ces concepts sont le socle de tout le reste du cours.
:::

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

:::info
**Retenir les 7 principes**

Ces principes ne sont pas propres à ITIL — ce sont des règles de bon sens que vous appliquez déjà inconsciemment. ITIL les formalise pour que toute une organisation les partage.
:::

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

:::info
**Ce n'est pas un processus linéaire**

Contrairement à ITIL v3 (qui suivait un cycle de vie séquentiel Stratégie → Conception → Transition → Exploitation), la chaîne de valeur ITIL 4 est **flexible** : les activités s'enchaînent différemment selon le type de demande. Un incident ne suit pas le même chemin qu'un déploiement.
:::

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
# 03 — La gestion des incidents

:::info
**Objectif de cette section**

Savoir identifier un incident, le distinguer d'une demande de service et d'un problème, le qualifier correctement et comprendre son cycle de vie. La gestion des incidents est la pratique ITIL la plus utilisée au quotidien par un technicien.
:::

---

## Qu'est-ce qu'un incident ?

**Définition officielle ITIL 4 :**
> *"Un incident est une interruption non planifiée d'un service ou une réduction de la qualité d'un service."*

L'incident n'est pas forcément une panne totale. Une **dégradation** est aussi un incident.

| Situation | Incident ? |
|-----------|-----------|
| Le Wi-Fi est coupé | ✅ Oui — interruption totale |
| Le Wi-Fi est très lent depuis ce matin | ✅ Oui — dégradation de qualité |
| Marie veut un nouveau compte utilisateur | ❌ Non — c'est une demande de service |
| Le serveur tombe en panne toutes les nuits | ✅ Oui — mais aussi potentiellement un problème |

---

## Incident vs Demande de service vs Problème

C'est une distinction fondamentale, souvent mal comprise :

| | Incident | Demande de service | Problème |
|--|----------|-------------------|---------|
| **Définition** | Quelque chose a cassé | Quelque chose de planifié, normal | La cause racine d'un ou plusieurs incidents |
| **Exemple** | L'imprimante ne répond plus | Installer un nouveau logiciel | Pourquoi l'imprimante tombe en panne régulièrement ? |
| **Objectif** | Rétablir le service vite | Honorer la demande selon le SLA | Éliminer la cause pour éviter les récidives |
| **Urgence** | Souvent urgent | Rarement urgent | Traitement en arrière-plan |

:::info
**L'analogie médicale**

Un incident, c'est le **symptôme** (fièvre, douleur). Le problème, c'est la **maladie** (infection). L'urgence traite le symptôme pour que le patient aille mieux — les investigations cherchent ensuite la cause.
:::

---

## Priorité = Impact × Urgence

Tous les incidents ne se traitent pas avec la même urgence. La **priorité** se calcule à partir de deux facteurs :

**Impact** — combien de personnes ou de services sont affectés ?
- Élevé : toute l'entreprise / service critique
- Moyen : une équipe / service important
- Faible : une seule personne / service secondaire

**Urgence** — à quelle vitesse faut-il résoudre ?
- Élevée : impossibilité de travailler, impact financier immédiat
- Moyenne : gêne significative mais contournement possible
- Faible : inconfort mineur

**Matrice de priorité :**

| | Urgence élevée | Urgence moyenne | Urgence faible |
|--|---------------|----------------|---------------|
| **Impact élevé** | 🔴 Critique | 🟠 Haute | 🟠 Haute |
| **Impact moyen** | 🟠 Haute | 🟡 Moyenne | 🟢 Basse |
| **Impact faible** | 🟡 Moyenne | 🟢 Basse | 🟢 Basse |

> **Au Fournil Doré** : La caisse enregistreuse ne fonctionne plus un samedi matin → Impact élevé (ventes bloquées) + Urgence élevée (impossible de travailler) = **Priorité critique**.

---

## Le cycle de vie d'un incident

```
  Détection
      │
      ▼
  Enregistrement ──── Créer le ticket avec toutes les infos
      │
      ▼
  Catégorisation ──── Quel type ? Quel service concerné ?
      │
      ▼
  Priorisation ────── Impact × Urgence = Priorité
      │
      ▼
  Diagnostic ─────── Identifier la cause apparente
      │
      ▼
  Résolution ─────── Appliquer la correction
      │
      ▼
  Clôture ────────── Vérifier avec l'utilisateur, fermer le ticket
```

### Étape par étape

**1. Détection**
L'incident peut être signalé par l'utilisateur (appel, ticket, email) ou détecté automatiquement par un outil de supervision. Plus tôt on détecte, moins l'impact est grand.

**2. Enregistrement**
Tout incident doit être enregistré dans l'outil ITSM (GLPI). Sans ticket, pas de traçabilité, pas de statistiques, pas d'amélioration possible.
Informations minimales : qui signale, quel service, description du symptôme, date et heure.

**3. Catégorisation**
Classer l'incident pour orienter vers le bon technicien et alimenter les statistiques. Exemple : Matériel / Réseau / Logiciel / Accès.

**4. Priorisation**
Appliquer la matrice Impact × Urgence pour définir le délai de traitement (SLA).

**5. Diagnostic**
Identifier la cause apparente. À ce stade, on cherche à **rétablir le service**, pas forcément à comprendre pourquoi ça s'est produit (c'est le rôle de la gestion des problèmes).

**6. Résolution**
Appliquer la solution. Si le technicien de niveau 1 ne peut pas résoudre, il **escalade** au niveau supérieur.

**7. Clôture**
Vérifier avec l'utilisateur que le service est bien rétabli. Documenter la solution appliquée. Fermer le ticket.

:::warning
**Ne jamais fermer un ticket sans confirmation utilisateur**

Un ticket fermé trop vite et rouvert le lendemain fait perdre du temps et nuit à la confiance. La règle : l'utilisateur confirme que tout va bien avant la clôture.
:::

---

## L'escalade

Quand un technicien ne peut pas résoudre seul, il **escalade** :

| Type | Description |
|------|-------------|
| **Escalade fonctionnelle** | Transmission à un technicien plus expert (niveau 2, niveau 3) |
| **Escalade hiérarchique** | Remontée au management quand l'impact est fort ou que le SLA va être dépassé |

---

## Le major incident (incident majeur)

Un **incident majeur** est un incident d'impact très élevé qui nécessite une réponse exceptionnelle :
- Mobilisation d'une cellule de crise
- Communication régulière vers les utilisateurs et la direction
- Post-mortem obligatoire après résolution (analyse de ce qui s'est passé)

> **Exemple** : Panne complète du système de caisse dans toutes les enseignes un jour de fêtes. Cela dépasse le fonctionnement normal — procédure d'incident majeur activée.

---

## La gestion des incidents dans GLPI

Dans GLPI, un incident est géré via un **ticket de type "Incident"** :

| Champ GLPI | Correspondance ITIL |
|-----------|---------------------|
| Type = Incident | Distingue incident / demande |
| Urgence + Impact → Priorité | Calculée automatiquement |
| Catégorie | Catégorisation |
| Statut | Cycle de vie (Nouveau → En cours → Résolu → Clos) |
| Observateurs / Assignation | Acteurs et escalade |
| Solution | Documentation de la résolution |

---

## Atelier — Créer et traiter des incidents dans GLPI

> **Contexte** : Thomas Martin est technicien au Fournil Doré. Ce matin, il reçoit plusieurs signalements de ses collègues. Vous allez jouer le rôle de Thomas et gérer ces incidents directement dans GLPI.

Les utilisateurs du Fournil Doré dans GLPI :

| Utilisateur | Rôle |
|-------------|------|
| ahmed.benali | Responsable production |
| marie.dupont | Secrétaire de direction |
| lucas.petit | Vendeur en boutique |
| claire.rousseau | Comptable |
| thomas.martin | Technicien IT *(c'est vous)* |

---

### Partie 1 — Analyser et prioriser (sans GLPI)

Avant de créer les tickets, lisez les 5 signalements et remplissez le tableau d'analyse.

**Les signalements :**

| # | Message reçu | De |
|---|-------------|-----|
| 1 | "Thomas, IMP-NAN-OPENSPACE-01 ne répond plus depuis ce matin, impossible d'imprimer les bons de commande" | lucas.petit |
| 2 | "Je n'arrive plus à me connecter à GLPI depuis ce matin" | marie.dupont |
| 3 | "Est-ce qu'on peut me commander un deuxième écran ?" | claire.rousseau |
| 4 | "La caisse refuse les paiements CB depuis 30 minutes, j'ai une file d'attente !" | lucas.petit |
| 5 | "Mon accès au dossier partagé Comptabilité ne fonctionne plus" | claire.rousseau |

**Tableau à compléter :**

| # | Incident ou demande ? | Impact | Urgence | Priorité | Ordre de traitement |
|---|----------------------|--------|---------|---------|---------------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

### Partie 2 — Créer les tickets dans GLPI

Connectez-vous à GLPI avec le compte **thomas.martin**.

Pour chaque **incident** identifié (pas les demandes), créez un ticket en respectant ces règles :
- **Type** : Incident
- **Demandeur** : l'utilisateur qui a signalé
- **Titre** : clair et concis
- **Description** : reprendre le message reçu
- **Impact et Urgence** : selon votre analyse — GLPI calculera la priorité automatiquement
- **Assigné à** : thomas.martin

> Vérifiez que la priorité calculée par GLPI correspond à votre analyse de la Partie 1.

---

### Partie 3 — Résoudre les tickets dans GLPI

Traitez les tickets dans l'ordre de priorité. Pour chaque ticket :

1. Passez le statut à **En cours (Assigné)**
2. Ajoutez un **suivi** décrivant les actions menées
3. Renseignez la **solution** appliquée
4. Passez le statut à **Résolu**

**Solutions à appliquer :**

| Ticket | Solution |
|--------|----------|
| CB refusées (lucas.petit) | Redémarrage du terminal de paiement — service rétabli |
| GLPI inaccessible (marie.dupont) | Vider le cache navigateur + reconfigurer l'URL — accès rétabli |
| Dossier partagé (claire.rousseau) | Droits d'accès expirés — réattribution du groupe Comptabilité |
| Imprimante hors ligne (lucas.petit) | Redémarrage du service d'impression — IMP-NAN-OPENSPACE-01 rétablie |

> ⚠️ Ne pas oublier de lier le ticket à l'équipement **IMP-NAN-OPENSPACE-01** via l'onglet **Éléments** du ticket.

> Pour la demande de deuxième écran (claire.rousseau) : créez un ticket de **type Demande**, sans urgence, avec la note "À planifier selon budget disponible".

---


---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Incident | Interruption ou dégradation non planifiée d'un service |
| Demande de service | Requête normale et planifiée (installation, accès…) |
| Problème | Cause racine d'un ou plusieurs incidents |
| Priorité | Résulte de l'Impact × l'Urgence |
| Cycle de vie | Détection → Enregistrement → Catégorisation → Priorisation → Diagnostic → Résolution → Clôture |
| Escalade | Transmission à un niveau supérieur (fonctionnelle ou hiérarchique) |
| Incident majeur | Impact critique, cellule de crise + post-mortem obligatoire |

---
# 04 — La gestion des problèmes

:::info
**Objectif de cette section**

Comprendre la différence entre un incident et un problème, identifier les causes racines et éviter que le même incident ne se reproduise. Savoir créer et lier des problèmes dans GLPI.
:::

---

## Incident vs Problème : la distinction clé

On l'a vu au chapitre 3 : un incident, on le règle vite. Mais si le même incident revient régulièrement, il y a forcément une cause sous-jacente — c'est ce qu'ITIL appelle un **problème**.

**Définition ITIL 4 :**
> *"Un problème est la cause, ou la cause potentielle, d'un ou plusieurs incidents."*

| | Incident | Problème |
|--|----------|---------|
| **Déclencheur** | Quelque chose casse maintenant | On observe une récurrence ou on anticipe |
| **Objectif** | Rétablir le service le plus vite possible | Trouver et éliminer la cause racine |
| **Urgence** | Immédiate | Traitement en arrière-plan |
| **Exemple** | L'imprimante ne répond plus | Pourquoi l'imprimante tombe en panne tous les lundis ? |

> **Important** : gérer un problème ne signifie pas résoudre l'incident en cours. Les deux sont traités en parallèle, par des personnes différentes ou à des moments différents.

---

## Les deux modes de la gestion des problèmes

### Mode réactif

Déclenché **après** les incidents. On observe qu'un incident s'est répété ou qu'un incident grave vient de se produire, et on ouvre un problème pour en chercher la cause.

> Exemple : le réseau Wi-Fi a chuté 3 fois en 2 semaines → Thomas ouvre un problème pour investiguer.

### Mode proactif

On cherche les problèmes **avant** qu'ils ne causent des incidents. On analyse les tendances, les logs, les alertes.

> Exemple : Thomas remarque dans GLPI que 60% des tickets concernent les PC du comptoir. Il ouvre un problème préventif avant la prochaine panne.

---

## Les concepts clés

### Erreur connue (Known Error)

Quand on a identifié la cause d'un problème mais qu'on ne peut pas encore la corriger définitivement, on crée une **erreur connue**. Elle documente :
- La cause identifiée
- La solution de contournement disponible

> Exemple : l'imprimante plante à cause d'un pilote défaillant. Le correctif du fabricant est attendu. En attendant, on documente : "redémarrer le service d'impression règle le problème temporairement."

### Solution de contournement (Workaround)

Solution **temporaire** pour réduire l'impact pendant que la cause racine est traitée. Ce n'est pas une solution définitive, mais elle permet de rétablir un service dégradé.

| | Solution de contournement | Solution définitive |
|--|--------------------------|---------------------|
| **Délai** | Immédiat | Variable |
| **Fiabilité** | Partielle | Totale |
| **Exemple** | Redémarrer l'imprimante manuellement | Remplacer le pilote défaillant |

---

## Le cycle de vie d'un problème

```
  Identification ── Récurrence d'incidents ou analyse proactive
        │
        ▼
  Enregistrement ── Créer le problème dans GLPI, lier les incidents
        │
        ▼
  Catégorisation ── Même logique que les incidents
        │
        ▼
  Investigation ─── Analyse de la cause racine (logs, tests, historique)
        │
        ▼
  Erreur connue ─── Documenter cause + workaround si trouvés
        │
        ▼
  Résolution ────── Appliquer le correctif définitif
        │
        ▼
  Clôture ────────── Vérifier, mettre à jour la documentation
```

:::info
**La gestion des problèmes alimente la base de connaissance**

Chaque problème résolu devient une fiche de connaissance. La prochaine fois qu'un technicien voit le même symptôme, il trouve immédiatement la solution. C'est l'un des bénéfices les plus concrets de cette pratique.
:::

---

## La gestion des problèmes dans GLPI

GLPI distingue bien les incidents des problèmes. Un problème peut regrouper plusieurs incidents liés.

### Créer un problème

`Assistance → Problèmes → + Créer`

Les champs sont similaires aux incidents : titre, description, catégorie, impact, urgence, priorité, assignation.

### Lier des incidents à un problème

Dans la fiche du problème, onglet **Éléments liés** → section **Tickets** → ajouter les incidents concernés.

Cela permet de :
- Voir d'un coup d'œil tous les incidents liés à une même cause
- Fermer automatiquement les incidents quand le problème est résolu (selon configuration)
- Produire des statistiques sur les causes récurrentes

### Documenter une erreur connue

Dans la fiche du problème, une fois la cause identifiée, renseigner le champ **Solution** avec le workaround disponible. Le statut passe à **Erreur connue**.

---

## Atelier — Identifier et gérer un problème au Fournil Doré

> **Contexte** : Thomas Martin consulte l'historique des tickets dans GLPI. Il remarque que **3 incidents** ont été signalés en 3 semaines pour le même équipement : **IMP-NAN-OPENSPACE-01** (référencée dans le parc au chapitre 09.1). Tous viennent de lucas.petit, le vendeur en boutique.

---

### Partie 1 — Créer les incidents manquants dans GLPI

L'incident de la semaine 3 a déjà été créé lors de l'atelier du chapitre 03 : ticket "IMP-NAN-OPENSPACE-01 ne répond plus", demandeur lucas.petit, statut Résolu. Il reste à créer les deux incidents antérieurs pour simuler la récurrence.

Connectez-vous avec **thomas.martin** et créez ces deux tickets :

**Ticket 1 — Semaine 1**
- Type : Incident
- Titre : `Impossible d'imprimer les bons de commande`
- Demandeur : lucas.petit
- Description : "Les bons de commande ne s'impriment plus depuis ce matin, la file d'attente est bloquée"
- Impact : Moyen / Urgence : Élevée → Priorité Haute
- Statut : **Résolu** (solution : redémarrage du service d'impression)
- Élément associé : `IMP-NAN-OPENSPACE-01`

**Ticket 2 — Semaine 2**
- Type : Incident
- Titre : `Imprimante boutique introuvable sur le réseau`
- Demandeur : lucas.petit
- Description : "L'imprimante n'apparaît plus dans la liste, impossible d'imprimer"
- Impact : Moyen / Urgence : Élevée → Priorité Haute
- Statut : **Résolu** (solution : redémarrage de l'imprimante)
- Élément associé : `IMP-NAN-OPENSPACE-01`

> Vérifiez depuis la fiche de `IMP-NAN-OPENSPACE-01` → onglet **Tickets** que les 3 incidents sont bien liés à cet équipement.

---

### Partie 2 — Identifier le problème

**Question de réflexion** : à quel moment Thomas aurait-il dû ouvrir un problème ? Après le 1er incident ? Le 2e ? Le 3e ?

> Il n'y a pas de règle absolue, mais **2 incidents identiques sur le même équipement en moins d'un mois** est un signal clair. Attendre le 3e coûte du temps perdu et de la frustration pour l'utilisateur.

---

### Partie 3 — Créer le problème dans GLPI

`Assistance` → `Problèmes` → **+**

Créez le problème suivant :

| Champ | Valeur |
|-------|--------|
| Titre | `Pannes récurrentes - IMP-NAN-OPENSPACE-01` |
| Catégorie | Matériel / Impression |
| Impact | Moyen |
| Urgence | Moyenne |
| Demandeur | thomas.martin |
| Description | 3 incidents sur l'IMP-NAN-OPENSPACE-01 en 3 semaines. Symptômes variés (file bloquée, imprimante absente du réseau, hors ligne). Cause racine inconnue. Investigation en cours. |

Puis liez les 3 incidents au problème :
`Onglet Éléments liés` → `Tickets` → ajouter les 3 incidents

Liez également l'équipement :
`Onglet Éléments liés` → `Imprimantes` → `IMP-NAN-OPENSPACE-01`

---

### Partie 4 — Documenter l'erreur connue

Après investigation, Thomas découvre que le pilote d'impression se corrompt à chaque mise à jour Windows automatique. Le fabricant Brother a confirmé le bug — un pilote stable sera disponible dans 2 semaines.

Dans la fiche du problème, renseignez :
- **Statut** : Erreur connue
- **Solution (workaround)** : Réinstaller manuellement le pilote Brother MFC-L8900CDW après chaque mise à jour Windows (durée : 15 min). Procédure documentée en base de connaissance.
- **Solution définitive** : Désactiver les mises à jour automatiques du pilote via GPO + déployer le pilote stable v3.2 dès disponibilité (J+14)

---

### Discussion

- Quelle est la différence entre fermer le dernier incident (semaine 3) et fermer le problème ?
- Si Thomas n'avait pas créé de problème, que se passerait-il dans 2 semaines ?
- Pourquoi lier l'équipement `IMP-NAN-OPENSPACE-01` au problème et pas seulement les tickets ?

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Problème | Cause (ou cause potentielle) d'un ou plusieurs incidents |
| Réactif | On ouvre un problème après une récurrence d'incidents |
| Proactif | On anticipe les problèmes avant qu'ils causent des incidents |
| Erreur connue | Problème dont la cause est identifiée, avec un workaround documenté |
| Workaround | Solution temporaire en attendant la correction définitive |
| Base de connaissance | Les problèmes résolus alimentent la documentation pour les équipes |

---
# 05 — La gestion des changements

:::info
**Objectif de cette section**

Comprendre ce qu'est un changement ITIL, distinguer les 3 types de changements et savoir créer et documenter un changement dans GLPI avec son plan de déploiement et son plan de repli.
:::

---

## Qu'est-ce qu'un changement ?

**Définition ITIL 4 :**
> *"Un changement est l'ajout, la modification ou la suppression de tout élément susceptible d'avoir un effet direct ou indirect sur les services."*

Un changement, ce n'est pas une panne — c'est une **action planifiée et volontaire** sur l'infrastructure ou les services IT.

| Ce qui est un changement | Ce qui n'en est pas un |
|--------------------------|----------------------|
| Déployer un nouveau pilote sur tous les postes | Redémarrer un serveur qui a planté |
| Migrer un serveur vers le cloud | Réinitialiser le mot de passe d'un utilisateur |
| Modifier les règles du pare-feu | Remplacer un câble réseau défectueux |
| Mettre à jour GLPI en production | Ajouter un utilisateur dans GLPI |

:::info
**ITIL 4 : "Change Enablement"**

Dans ITIL 4, cette pratique s'appelle officiellement **Change Enablement** (et non plus "Change Management" comme en v3). L'idée : les changements ne doivent pas freiner l'organisation, mais être **maîtrisés et documentés** pour minimiser les risques.
:::

---

## Les 3 types de changements

### Changement standard

**Pré-autorisé**, à faible risque, procédure connue et répétée. Pas besoin d'approbation à chaque fois — la procédure a été validée une fois pour toutes.

- Ajout d'un compte utilisateur
- Installation d'une imprimante déjà référencée
- Renouvellement d'un certificat SSL selon procédure documentée

### Changement normal

**Doit passer par un processus d'approbation** avant d'être mis en œuvre. Évalué par le **CAB** (Change Advisory Board — comité de validation des changements).

- Déploiement d'un nouveau pilote sur tout le parc
- Migration d'un serveur
- Modification des règles réseau

### Changement d'urgence

Impact critique imminent, **temps insuffisant** pour suivre le processus normal. Approuvé par un comité restreint (ECAB — Emergency CAB) et documenté après coup.

- Correctif de sécurité critique à déployer sous 2h
- Restauration d'urgence d'une sauvegarde suite à une cyberattaque

| | Standard | Normal | Urgence |
|--|----------|--------|---------|
| **Approbation** | Pré-autorisée | CAB avant mise en œuvre | ECAB, après coup si nécessaire |
| **Risque** | Faible | Variable | Élevé (contexte de crise) |
| **Délai** | Immédiat | Planifié | Le plus vite possible |

---

## Pourquoi documenter un changement ?

Un changement mal préparé est la **première cause de nouvelle panne** en production. ITIL impose de documenter systématiquement :

**Le plan de déploiement** — comment on applique le changement, étape par étape.

**Le plan de repli** — comment on revient en arrière si ça tourne mal. C'est non négociable : sans plan de repli, pas de changement.

**La liste de vérifications** — comment on valide que le changement a bien fonctionné.

:::warning
**Sans plan de repli, on ne déploie pas**

Un changement sans procédure de rollback est un changement risqué. En production, si quelque chose tourne mal et qu'on ne peut pas revenir en arrière rapidement, l'impact est potentiellement catastrophique.
:::

---

## Le cycle de vie d'un changement dans GLPI

```
  Nouveau       ← RFC créée, en attente d'examen
      │
      ▼
  Évaluation    ← Analyse d'impact, estimation des risques
      │
      ▼
  Validation    ← Soumis au CAB (ou responsable) pour approbation
      │
      ▼
  Accepté       ← Approuvé, déploiement planifié          ──→  Refusée (si rejeté)
      │
      ▼
  En test       ← Déploiement effectué, tests en cours
      │
      ▼
  Appliqué      ← Changement déployé en production
      │
      ▼
  Revue         ← Vérification post-déploiement
      │
      ▼
  Clos          ← Dossier fermé, documentation finalisée
```

En cas de problème à n'importe quelle étape → **Plan de repli activé** → retour à l'état précédent → nouveau changement planifié.

---

## La gestion des changements dans GLPI

`Assistance` → `Changements` → **+ Ajouter**

### Structure du formulaire

| Zone | Champs |
|------|--------|
| **En-tête** | Titre, Description |
| **Informations** | Catégorie, Statut, Urgence, Impact, Priorité, Lieu |
| **Acteurs** | Demandeur, Observateur, Attribué à |
| **Éléments** | Équipements concernés par le changement |
| **Analyse** | Impacts (texte libre), Liste de contrôles |
| **Plans** | Plan de déploiement, Plan de repli, Liste de vérifications |
| **Liaisons** | Tickets et problèmes liés |

:::info
**La section Liaisons**

Elle permet de relier le changement au **problème** qui en est à l'origine. Dans notre fil rouge : le changement de pilote est lié au problème "Pannes récurrentes - IMP-NAN-OPENSPACE-01".
:::

---

## Atelier — Créer un changement au Fournil Doré

> **Contexte** : Suite à l'investigation du problème de l'imprimante (chapitre 04), Thomas Martin a identifié que le pilote d'impression se corrompt à chaque mise à jour Windows automatique. La solution définitive est de désactiver les mises à jour automatiques du pilote via une stratégie de groupe (GPO) sur tous les postes de la boutique. Ce changement touche plusieurs postes de travail — il doit être documenté et approuvé avant mise en œuvre.

---

### Partie 1 — Classer le changement

Avant de créer quoi que ce soit dans GLPI, répondez à ces questions :

- Ce changement est-il **standard, normal ou d'urgence** ? Pourquoi ?
- Qui doit l'approuver au Fournil Doré ? (rappel : l'entreprise n'a pas de CAB formel — Thomas dépend directement du directeur)
- Quel est le **risque** si le changement échoue ?
- Quel est le **plan de repli** possible ?

> **Corrigé** :
> - Type : **Normal** — touche plusieurs postes, risque modéré, pas d'urgence immédiate
> - Approbation : le directeur du Fournil Doré
> - Risque si échec : pilote absent, imprimante inaccessible sur les postes concernés
> - Plan de repli : réinstaller le pilote manuellement depuis le package Brother

---

### Partie 2 — Créer le changement dans GLPI

Connectez-vous avec **thomas.martin**.

`Assistance` → `Changements` → **+ Ajouter**

**En-tête :**

| Champ | Valeur |
|-------|--------|
| Titre | `Désactivation MAJ automatique pilote Brother MFC-L8900CDW` |
| Description | Déploiement d'une GPO pour désactiver les mises à jour automatiques du pilote d'impression Brother sur les postes de la boutique. Correctif suite aux pannes récurrentes de IMP-NAN-OPENSPACE-01. |

**Informations :**

| Champ | Valeur |
|-------|--------|
| Catégorie | Logiciel / Installation |
| Statut | Nouveau |
| Urgence | Faible |
| Impact | Moyen |
| Lieu | Nantes > Open space |

**Acteurs :**

| Champ | Valeur |
|-------|--------|
| Demandeur | thomas.martin |
| Attribué à | thomas.martin |

**Éléments :** ajouter `IMP-NAN-OPENSPACE-01`

---

### Partie 3 — Compléter l'analyse et les plans

Toujours dans le même formulaire, déroulez les sections **Analyse** et **Plans** :

**Analyse — Impacts :**
```
Postes concernés : tous les PC du boutique (Open space Nantes).
Service impacté : impression boutique.
Durée d'intervention estimée : 30 minutes.
Fenêtre de maintenance proposée : lundi matin avant ouverture (7h-8h30).
```

**Plans — Plan de déploiement :**
```
1. Se connecter à la console de gestion des stratégies de groupe
2. Créer une GPO "Pilote-Impression-Boutique"
3. Désactiver "Permettre la mise à jour automatique des pilotes"
4. Appliquer la GPO sur l'OU Boutique
5. Forcer l'application : gpupdate /force sur les postes concernés
6. Vérifier que l'imprimante reste accessible depuis chaque poste
```

**Plans — Plan de repli :**
```
Si la GPO provoque une inaccessibilité de l'imprimante :
1. Supprimer ou désactiver la GPO "Pilote-Impression-Boutique"
2. Forcer gpupdate /force
3. Réinstaller manuellement le pilote Brother MFC-L8900CDW (package v3.1)
4. Vérifier l'impression depuis chaque poste
Durée de repli estimée : 20 minutes
```

**Plans — Liste de vérifications :**
```
☐ Imprimante visible depuis le PC du comptoir
☐ Impression test réussie depuis chaque poste
☐ Aucune mise à jour automatique du pilote au prochain cycle Windows Update
```

Cliquer sur **+ Ajouter**.

---

### Partie 4 — Lier au problème

Une fois le changement créé, ouvrez-le et dans la section **Liaisons** → cliquer **+ Ajouter** → rechercher et sélectionner le problème `Pannes récurrentes - IMP-NAN-OPENSPACE-01` créé au chapitre 04.

---

### Partie 5 — Faire évoluer le statut

Simulez l'approbation et le déploiement en faisant évoluer le statut du changement :

| Statut | Signification dans notre contexte |
|--------|----------------------------------|
| **Nouveau** | Changement créé, en attente d'examen |
| **Évaluation** | Thomas analyse l'impact et prépare le dossier |
| **Validation** | Dossier soumis au directeur pour approbation |
| **Accepté** | Directeur a validé, créneau lundi 7h confirmé |
| **En test** | GPO déployée sur un poste pilote, vérification en cours |
| **Appliqué** | GPO appliquée sur tous les postes de la boutique |
| **Revue** | Thomas vérifie que tout fonctionne correctement |
| **Clos** | Changement validé, dossier fermé |

Faites passer le changement jusqu'au statut **Clos** en suivant le cycle complet.

---

### Discussion

- Pourquoi un simple redémarrage du pilote (workaround du chapitre 04) n'est-il pas un changement, mais que la GPO en est un ?
- Que se passe-t-il si Thomas déploie la GPO sans plan de repli et que l'impression tombe sur tous les postes un samedi matin ?
- Dans une grande entreprise, qui siège au CAB ? Quel est son rôle exact ?

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Changement | Ajout, modification ou suppression volontaire d'un élément IT |
| Standard | Pré-autorisé, procédure connue, faible risque |
| Normal | Passe par le CAB avant mise en œuvre |
| Urgence | ECAB, approuvé rapidement, documenté après coup |
| Plan de repli | Obligatoire — comment revenir en arrière si ça tourne mal |
| CAB | Comité qui évalue et approuve les changements normaux |
| Liaisons GLPI | Relier le changement au problème ou aux tickets d'origine |

---
# 06 — Les SLA et les niveaux de service

:::info
**Objectif de cette section**

Comprendre ce qu'est un SLA, distinguer TTO et TTR, connaître la différence entre SLA et OLA, et configurer des niveaux de service dans GLPI pour le Fournil Doré.
:::

---

## Qu'est-ce qu'un SLA ?

**Définition ITIL 4 :**
> *"Un accord de niveau de service (SLA — Service Level Agreement) est un accord documenté entre un fournisseur de services et un client qui identifie les services requis ainsi que le niveau de service attendu."*

En clair : le SLA, c'est le **contrat de performance** entre l'IT et ses utilisateurs. Il répond à la question : *"En combien de temps allez-vous traiter mon incident ?"*

Sans SLA, chaque technicien gère les tickets à sa façon. Avec un SLA, l'équipe IT s'engage sur des délais mesurables — et GLPI les surveille automatiquement.

| Sans SLA | Avec SLA |
|----------|---------|
| Pas d'engagement de délai | Délais définis et visibles |
| Priorité subjective | Priorité calculée et tracée |
| Aucune alerte en cas de dépassement | Alertes automatiques avant l'échéance |
| Impossible de mesurer la performance | Statistiques objectives |

---

## TTO et TTR : les deux indicateurs clés

### TTO — Time To Own (délai de prise en charge)

Délai maximum entre la **création du ticket** et sa **prise en charge** par un technicien (passage en statut "En cours").

> Exemple : "Tout incident doit être pris en charge en moins d'1 heure."

### TTR — Time To Resolve (délai de résolution)

Délai maximum entre la **création du ticket** et sa **résolution** complète.

> Exemple : "Tout incident de priorité haute doit être résolu en moins de 4 heures."

| | TTO | TTR |
|--|-----|-----|
| **Mesure** | Réactivité du technicien | Efficacité de la résolution |
| **Déclenché par** | Création du ticket | Création du ticket |
| **Terminé quand** | Ticket pris en charge | Ticket résolu |

:::info
**On peut avoir les deux**

Un ticket peut avoir un SLA TTO **et** un SLA TTR simultanément. Le TTO surveille la réactivité, le TTR surveille la résolution globale.
:::

---

## SLA vs OLA

Le **SLA** (Service Level Agreement) est l'engagement **externe** — vers les utilisateurs.

L'**OLA** (Operational Level Agreement) est l'engagement **interne** — entre équipes IT. Il sert quand plusieurs équipes interviennent sur un même ticket.

| | SLA | OLA |
|--|-----|-----|
| **Parties** | IT ↔ Utilisateurs | Équipe IT ↔ Équipe IT |
| **Exemple** | "Les incidents sont résolus sous 4h" | "L'équipe réseau traite les escalades sous 2h" |
| **Dans GLPI** | Champs TTO / TTR | Champs TTO interne / TTR interne |

> Au Fournil Doré, Thomas travaille seul — les OLA ne sont pas pertinents dans ce contexte. On se concentre sur les SLA.

---

## La structure SLA dans GLPI

GLPI organise les niveaux de service en deux niveaux :

```
Configuration → Niveaux de services
        │
        └── SLM (Niveau de services)
               │   Nom + Calendrier
               │
               ├── SLAs  ← délais de résolution/prise en charge externes
               │     │
               │     └── Niveaux d'escalade ← alertes avant dépassement
               │
               └── OLAs  ← délais internes (si plusieurs équipes)
```

**SLM** (Service Level Management) : le conteneur qui regroupe les SLA et OLA d'un même périmètre. Un seul SLM suffit généralement pour une petite structure.

**SLA** : l'engagement lui-même, avec son type (TTO ou TTR) et sa durée maximale.

**Niveau d'escalade** : une alerte déclenchée **avant** l'échéance pour prévenir le dépassement.

---

## Les niveaux d'escalade

Un niveau d'escalade, c'est une action automatique déclenchée avant que le SLA ne soit dépassé.

Dans GLPI, le champ **Exécution** définit le moment du déclenchement :
- `-1 heure` = l'alerte se déclenche 1 heure avant l'échéance
- `-30 minutes` = 30 minutes avant
- `+0` = au moment exact de l'échéance

:::warning
**Une alerte qui arrive trop tard ne sert à rien**

L'escalade doit laisser suffisamment de temps pour agir. Si le TTR est de 4h, une alerte à -1h permet encore d'intervenir. Une alerte à -5 minutes, non.
:::

---

## Appliquer un SLA à un ticket dans GLPI

Un SLA peut être appliqué à un ticket de deux façons :

**Manuellement** — dans la section **Niveaux de services** du formulaire ticket. Les champs TTO et TTR permettent de sélectionner un SLA existant.

**Automatiquement via le moteur de règles** — GLPI peut appliquer automatiquement un SLA selon la catégorie, la priorité ou l'entité du ticket. C'est la méthode recommandée en production.

:::info
**Dans cet atelier**

On commence par l'affectation manuelle pour comprendre le mécanisme. L'automatisation via règles est abordée dans l'initiation GLPI (moteur de règles).
:::

---

## Atelier — Configurer les SLA du Fournil Doré

> **Contexte** : Thomas Martin veut formaliser ses engagements de service. Après discussion avec le directeur, ils s'accordent sur les délais suivants :
> - Tout incident doit être pris en charge en moins d'**1 heure** (TTO)
> - Les incidents de haute priorité doivent être résolus en **4 heures** (TTR)
> - Les incidents de priorité normale sont résolus en **24 heures** (TTR)

---

### Partie 1 — Créer le SLM

`Configuration` → `Niveaux de services` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `SLM Fournil Doré` |
| Calendrier | 24 heures sur 24, 7 jours sur 7 |

Cliquer **+ Ajouter**.

> Le SLM vient d'être créé. On voit apparaître deux onglets : **SLAs** et **OLA**. On va travailler dans l'onglet SLAs.

---

### Partie 2 — Créer les SLA

#### SLA 1 — Prise en charge (TTO)

Depuis la fiche du SLM → onglet **SLAs** → **Ajouter un nouvel élément**

| Champ | Valeur |
|-------|--------|
| Nom | `TTO - Prise en charge incidents` |
| Type | TTO |
| Durée maximale | `1` Heure |

Cliquer **+ Ajouter**.

#### SLA 2 — Résolution haute priorité (TTR)

Toujours depuis le SLM → onglet **SLAs** → **Ajouter un nouvel élément**

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents haute priorité` |
| Type | TTR |
| Durée maximale | `4` Heures |

Cliquer **+ Ajouter**.

#### SLA 3 — Résolution priorité normale (TTR)

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents priorité normale` |
| Type | TTR |
| Durée maximale | `24` Heures |

Cliquer **+ Ajouter**.

---

### Partie 3 — Ajouter un niveau d'escalade

Ouvrir le SLA `TTR - Incidents haute priorité` → onglet **Niveaux d'escalade** → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Alerte -1h avant dépassement` |
| Activé | Oui |
| Exécution | `-1` Heure |

Cliquer **+ Ajouter**.

> Ce niveau d'escalade déclenchera une alerte 1 heure avant que le SLA ne soit dépassé. En production, on peut y associer une notification par mail (via le moteur de règles ou les actions automatiques).

---

### Partie 4 — Appliquer le SLA à un ticket

Ouvrons un des tickets incidents créés lors du chapitre 03 (par exemple, "IMP-NAN-OPENSPACE-01 ne répond plus").

Dans la fiche du ticket, section **Niveaux de services** (en bas du panneau droit) :

| Champ | Valeur |
|-------|--------|
| TTO | `TTO - Prise en charge incidents` |
| TTR | `TTR - Incidents haute priorité` |

Sauvegarder le ticket.

> Après enregistrement, GLPI calcule automatiquement les échéances à partir de la date de création du ticket. Si le ticket est déjà résolu, les échéances sont affichées à titre indicatif.

---

### Discussion

- Quel est l'intérêt d'avoir un calendrier "heures ouverture" plutôt que "24h/7j" pour un Fournil Doré ouvert de 6h à 20h ?
- Pourquoi créer un SLA TTO séparé du SLA TTR plutôt qu'un seul délai global ?
- Comment Thomas peut-il vérifier si ses SLA sont respectés sur le mois écoulé ? *(Indice : Assistance → Statistiques)*

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| SLA | Engagement de délai entre l'IT et les utilisateurs |
| TTO | Délai de prise en charge (Time To Own) |
| TTR | Délai de résolution (Time To Resolve) |
| OLA | Accord interne entre équipes IT (TTO/TTR interne dans GLPI) |
| SLM | Conteneur GLPI qui regroupe les SLA et OLA |
| Niveau d'escalade | Alerte déclenchée avant le dépassement du SLA |
| Calendrier | Définit les heures ouvrées prises en compte dans le calcul des délais |

---
# 07 — Catalogue de services & CMDB

:::info
**Objectif de cette section**

Comprendre à quoi sert un catalogue de services et une CMDB, et les mettre en pratique dans GLPI : explorer le catalogue existant et cartographier les dépendances entre équipements.
:::

---

## Le catalogue de services

### Définition ITIL 4

> *"Le catalogue de services est une vue des services du fournisseur de services, adaptée à un consommateur de service spécifique."*

En clair : c'est la **liste des services IT disponibles**, présentée de façon claire aux utilisateurs. Comme un menu au restaurant — on ne demande pas n'importe quoi, on choisit parmi ce qui est proposé.

### Pourquoi c'est utile

Sans catalogue de services, les utilisateurs ne savent pas ce que l'IT peut faire pour eux. Ils envoient des mails à n'importe qui, appellent directement les techniciens, ou ne demandent rien du tout et se débrouillent seuls.

Avec un catalogue :

| Utilisateur | Technicien |
|-------------|-----------|
| Sait ce qu'il peut demander | Reçoit des demandes standardisées |
| Ouvre un ticket via un formulaire guidé | Moins de re-travail, moins d'informations manquantes |
| Gagne en autonomie | Gagne du temps |

### Les deux types de catalogue

**Catalogue de services métier** — Ce que voient les utilisateurs. Langage simple, orienté usage : "Installer un logiciel", "Signaler une panne", "Créer un compte".

**Catalogue de services technique** — Ce que voit l'IT. Détaille les composants, les dépendances, les contrats. Moins visible, mais essentiel pour la gestion interne.

> Au Fournil Doré, Thomas commence par le catalogue métier — c'est ce que verront Marie, Ahmed et Claire au quotidien.

---

## La CMDB

### Définition ITIL 4

> *"La CMDB (Configuration Management Database) est une base de données qui stocke les enregistrements de configuration tout au long de leur cycle de vie."*

Un **CI** (Configuration Item — Élément de Configuration) est tout ce qui doit être géré pour fournir un service IT : un ordinateur, une imprimante, un logiciel, un serveur, un switch réseau, un contrat, voire un document et qui a un cout.

### Pourquoi la CMDB est cruciale

La CMDB répond à la question : **"Si cet élément tombe en panne, qu'est-ce qui est impacté ?"**

> Exemple : l'imprimante IMP-NAN-OPENSPACE-01 est connectée au switch réseau SW-NAN-01. Si le switch tombe, l'imprimante devient inaccessible. Si la CMDB documente ce lien, GLPI peut afficher automatiquement tous les équipements impactés lors d'un incident sur le switch.

La CMDB est aussi la mémoire du parc : versions logicielles, dates d'achat, garanties, relations entre équipements.

### CI vs Parc informatique

Dans GLPI, le parc informatique **est** la CMDB. Chaque ordinateur, imprimante, switch, logiciel enregistré est un CI. La différence avec un simple inventaire, c'est les **relations** entre CI — c'est ça qui fait la valeur d'une vraie CMDB.

| Simple inventaire | CMDB |
|-------------------|------|
| Liste d'équipements | Équipements + leurs relations |
| "On a 5 PC" | "PC-01 dépend du SW-01, qui dépend du serveur SRV-01" |
| Vue statique | Vue dynamique des dépendances |

---

## Dans GLPI

### Le catalogue de services

`Assistance → Catalogue de services`

Les utilisateurs voient des tuiles, chacune correspondant à un service. En cliquant dessus, ils accèdent à un formulaire guidé (créé avec le Form Creator) qui génère automatiquement un ticket avec les bonnes informations.

> L'ajout de nouvelles entrées au catalogue se fait via le **Form Creator** (`Administration → Formulaires`) en cochant "Afficher dans le catalogue de services" lors de la création d'un formulaire.

### La CMDB — Analyse d'impact

Sur la fiche de chaque équipement dans le Parc, l'onglet **Analyse d'impact** ouvre une vue graphique interactive. On y voit le CI au centre, et on peut y connecter d'autres CI avec des flèches de dépendance.

`Parc → Ordinateurs → [un ordinateur] → onglet Analyse d'impact`

Les icônes disponibles dans la vue graphique :
- **+** : ajouter un élément lié
- Flèche : définir le sens de la dépendance
- Corbeille : supprimer un lien

### Les liens entre équipements

L'onglet **Liens** (sur chaque équipement) permet également de lier des CI de façon plus simple, sans passer par la vue graphique.

---

## Atelier — Catalogue et cartographie au Fournil Doré

---

### Partie 1 — Explorer le catalogue de services existant

`Assistance → Catalogue de services`

Observer les tuiles déjà configurées :

| Tuile | Description |
|-------|-------------|
| Signaler un incident | Lié au formulaire de création d'incident |
| Demander un service | Lié au formulaire de demande de service |
| Demande de matériel | Lié au formulaire de demande d'équipement |

Cliquer sur **"Signaler un incident"** et observer le formulaire qui s'ouvre. Comparer avec la création de ticket manuelle (`Assistance → Créer un ticket`) : le formulaire du catalogue est plus guidé, avec moins de champs visibles.

> **Question** : Quelle tuile manque selon toi pour Le Fournil Doré ? Exemple possible : "Demander un accès logiciel", "Signaler un problème de réseau"...

---

### Partie 2 — Cartographier l'imprimante dans la CMDB

> **Contexte** : Thomas veut documenter que l'imprimante IMP-NAN-OPENSPACE-01 dépend du switch réseau de la salle serveur de Nantes. Si le switch tombe, l'imprimante devient inaccessible depuis les postes de travail.

#### Étape 1 — Ouvrir l'imprimante

`Parc → Imprimantes → IMP-NAN-OPENSPACE-01`

Aller dans l'onglet **Analyse d'impact**.

On voit l'icône de l'imprimante seule au centre du graphe.

#### Étape 2 — Ajouter un matériel réseau lié

Cliquer sur l'icône **+** dans la barre d'outils à droite du graphe.

Un sélecteur apparaît. Choisir :
- Type : **Matériel réseau** (ou **Équipements passifs** selon ce qui est disponible)
- Élément : le switch réseau de Nantes s'il existe, sinon créer un équipement factice `SW-NAN-SRVROOM-01`

> Si aucun switch n'existe encore dans le parc, créer d'abord un matériel réseau minimal :
> `Parc → Matériels réseau → + Ajouter`
> Nom : `SW-NAN-SRVROOM-01` / Type : Switch / Lieu : Nantes > Salle serveur

#### Étape 3 — Définir la relation

Dans le graphe, relier le switch à l'imprimante avec une flèche. Le sens indique la dépendance : **l'imprimante dépend du switch** (flèche du switch vers l'imprimante).

#### Étape 4 — Observer le résultat

La vue graphique montre maintenant deux CI reliés. Si un incident est créé sur le switch, GLPI peut alerter que l'imprimante en dépend — et ainsi anticiper l'impact sur les utilisateurs du open space.

---

### Discussion

- Quel est l'intérêt de documenter les dépendances **avant** qu'une panne survienne ?
- Que se passerait-il si le serveur de fichiers était ajouté à la CMDB comme dépendance des postes utilisateurs ? Quel bénéfice en cas d'incident ?
- Comment le catalogue de services peut-il réduire le nombre de tickets mal qualifiés ?

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Catalogue de services | Vue des services IT disponibles, présentée aux utilisateurs sous forme de tuiles ou formulaires |
| CI | Tout élément géré dans la CMDB (ordinateur, imprimante, logiciel, switch…) |
| CMDB | Base de données des CI et de leurs relations — c'est le Parc informatique GLPI enrichi de liens |
| Analyse d'impact | Vue graphique GLPI des dépendances entre CI |
| Dépendance | Lien entre deux CI indiquant qu'un en impacte un autre en cas de panne |

---
# 08 — L'amélioration continue

:::info
**Objectif de cette section**

Comprendre le modèle d'amélioration continue d'ITIL 4, savoir identifier des axes d'amélioration à partir des données GLPI, et formaliser une action corrective concrète pour Le Fournil Doré.
:::

---

## Qu'est-ce que l'amélioration continue ?

Dans ITIL 4, l'amélioration continue n'est pas une pratique ponctuelle — c'est une **philosophie permanente** inscrite dans tous les niveaux du SVS.

Elle repose sur une idée simple : les services IT ne sont jamais parfaits dès le départ. Ils doivent être mesurés, analysés, et améliorés régulièrement, en cycle.

> "Ce qui ne se mesure pas ne peut pas être amélioré."

La pratique s'appelait CSI (Continual Service Improvement) dans ITIL 3. Dans ITIL 4, elle est intégrée à l'ensemble du référentiel sous le terme **Amélioration continue** (Continual Improvement), et figure notamment dans la chaîne de valeur des services via l'activité **Améliorer**.

---

## Le modèle d'amélioration continue en 7 étapes

ITIL 4 propose un modèle structuré en 7 questions successives :

```
1. Quelle est la vision ?
        ↓
2. Où en sommes-nous ?
        ↓
3. Où voulons-nous aller ?
        ↓
4. Comment y arriver ?
        ↓
5. Agir
        ↓
6. Sommes-nous arrivés ?
        ↓
7. Comment maintenir l'élan ?
        ↓
   (retour à l'étape 1)
```

| Étape | Question | Exemple Fournil Doré |
|-------|----------|----------------------|
| 1 | Quelle est la vision ? | "Assurer la continuité IT pour permettre la production et la vente" |
| 2 | Où en sommes-nous ? | 12 incidents ce mois, 3 dépassements de SLA, 80% liés à l'imprimante |
| 3 | Où voulons-nous aller ? | 0 dépassement de SLA, incidents imprimante réduits de 50% |
| 4 | Comment y arriver ? | Mettre à jour le driver Brother, bloquer les mises à jour auto via GPO |
| 5 | Agir | Création et déploiement du changement (chapitres 04 & 05) |
| 6 | Sommes-nous arrivés ? | Vérifier les stats du mois suivant : incidents réduits ? SLA respectés ? |
| 7 | Comment maintenir l'élan ? | Documenter la solution, planifier une revue mensuelle des stats |

:::info
**Ce modèle s'applique à toutes les échelles**

Il peut s'appliquer à un problème précis (réduire les incidents imprimante) comme à une stratégie IT globale (améliorer la satisfaction utilisateurs). C'est sa force.
:::

---

## Les indicateurs clés (KPI)

Un KPI (Key Performance Indicator) est une **mesure chiffrée** qui permet d'évaluer si un objectif est atteint.

Quelques KPI courants en ITSM :

| KPI | Ce qu'il mesure | Exemple de cible |
|-----|-----------------|-----------------|
| Nombre de tickets ouverts | Volume d'activité | Suivre l'évolution mois/mois |
| Taux de résolution dans les délais SLA | Respect des engagements | > 95% |
| Délai moyen de résolution (MTTR) | Efficacité | < 4h pour les incidents haute priorité |
| Taux de réouverture de tickets | Qualité de la résolution | < 5% |
| Nombre d'incidents par catégorie | Identification des points chauds | Imprimante : 3/mois max |
| Satisfaction utilisateurs | Perception du service | Formulaire de clôture de ticket |

> Au Fournil Doré, Thomas n'a pas encore de tableau de bord formel. Les statistiques GLPI lui donnent un premier niveau de visibilité suffisant pour démarrer.

---

## Le registre d'amélioration

Le **registre d'amélioration** (Improvement Register) est un document — ou une liste dans GLPI — qui recense toutes les idées et actions d'amélioration identifiées, avec leur statut.

| Idée | Source | Priorité | Statut |
|------|--------|----------|--------|
| Bloquer MAJ auto driver Brother | Analyse problème | Haute | ✅ Réalisé (ch05) |
| Créer SLA formels | Réunion direction | Haute | ✅ Réalisé (ch06) |
| Ajouter un formulaire "Demande d'accès" au catalogue | Retour utilisateurs | Moyenne | 🔲 À planifier |
| Former les utilisateurs à créer leurs tickets via le catalogue | Constat tickets mal qualifiés | Basse | 🔲 À planifier |

> Dans GLPI, ce registre peut se tenir sous forme de tickets de type **Demande** dans une catégorie dédiée "Amélioration IT", ou via un simple document partagé.

---

## Dans GLPI — les Statistiques

`Assistance → Statistiques`

GLPI propose des vues statistiques pour les tickets, problèmes et changements :

| Vue | Ce qu'elle montre |
|-----|-------------------|
| **Global** | Nombre de tickets ouverts, fermés, en cours — par période |
| **Par ticket** | Délais de traitement, respect du SLA, durée de résolution |
| **Par caractéristiques matérielles** | Tickets par lieu, par technicien |
| **Par matériel** | Tickets liés à un équipement précis |

Ces vues permettent de répondre directement aux étapes 2 et 6 du modèle d'amélioration continue : *"Où en sommes-nous ?"* et *"Sommes-nous arrivés ?"*

---

## Atelier — Analyse et plan d'amélioration du Fournil Doré

---

### Partie 1 — Explorer les statistiques GLPI

`Assistance → Statistiques`

Dans le menu déroulant **"Sélectionnez les statistiques à visualiser"**, choisir successivement :

**Tickets → Global**

Observer :
- Combien de tickets ont été ouverts depuis le début de l'atelier ?
- Combien sont résolus ? En cours ?
- Quelle est la répartition par type (Incident / Demande) ?

**Tickets → Par caractéristiques matérielles**

Choisir la vue **Par catégorie** et observer quelles catégories concentrent le plus de tickets.

> Sur notre lab avec peu de données, les chiffres seront limités — mais la démarche est la même en production avec des mois de données.

---

### Partie 2 — Analyser et identifier un axe d'amélioration

À partir de ce qu'on a vu dans les chapitres précédents, remplir ensemble le tableau suivant :

| Étape | Réponse pour Le Fournil Doré |
|-------|------------------------------|
| **Vision** | Assurer la continuité IT pour la boutique et le laboratoire |
| **Où en sommes-nous ?** | 3 incidents imprimante en 3 semaines, SLA parfois dépassé |
| **Où voulons-nous aller ?** | 0 incident récurrent sur l'imprimante, SLA respecté à 100% |
| **Comment y arriver ?** | GPO déployée (ch05), SLA configuré (ch06), CMDB à compléter (ch07) |
| **Agir** | ✅ Changement déployé |
| **Sommes-nous arrivés ?** | À vérifier dans 30 jours — planifier une revue |
| **Maintenir l'élan ?** | Revue mensuelle des stats + mise à jour du registre d'amélioration |

---

### Partie 3 — Créer une action d'amélioration dans GLPI

Thomas veut tracer formellement une action d'amélioration dans GLPI.

`Assistance → Créer un ticket`

| Champ | Valeur |
|-------|--------|
| Type | Demande |
| Catégorie | *(créer "Amélioration IT" si elle n'existe pas)* |
| Titre | `Revue mensuelle des SLA et incidents — Fournil Doré` |
| Description | `Planifier une revue mensuelle des statistiques GLPI pour vérifier le respect des SLA et identifier les nouvelles actions d'amélioration.` |
| Priorité | Basse |
| Attribué à | thomas.martin |

Sauvegarder le ticket.

> Ce ticket représente l'entrée dans le registre d'amélioration. En production, Thomas le planifiera en récurrent (`Assistance → Tickets récurrents`).

---

### Discussion finale — Bilan de la formation

À travers les 8 chapitres de cette formation, on a suivi une progression cohérente au Fournil Doré :

| Chapitre | Ce qu'on a fait |
|----------|-----------------|
| 01 | Compris l'histoire et la valeur d'ITIL |
| 02 | Cartographié le SVS, les 4 dimensions et la chaîne de valeur |
| 03 | Géré les incidents de l'imprimante dans GLPI |
| 04 | Identifié un problème récurrent et documenté une erreur connue |
| 05 | Planifié et déployé un changement pour corriger la cause racine |
| 06 | Configuré des SLA pour formaliser les engagements de service |
| 07 | Cartographié les dépendances dans la CMDB |
| 08 | Mesuré les résultats et planifié l'amélioration continue |

**C'est exactement la boucle ITIL 4 en action.**

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Amélioration continue | Pratique ITIL 4 permanente — mesurer, analyser, agir, recommencer |
| Modèle en 7 étapes | Vision → Où on est → Où on veut aller → Comment → Agir → Vérifier → Maintenir |
| KPI | Indicateurs chiffrés pour mesurer l'atteinte des objectifs |
| MTTR | Mean Time To Resolve — délai moyen de résolution |
| Registre d'amélioration | Liste des actions d'amélioration identifiées, avec leur statut |
| Statistiques GLPI | `Assistance → Statistiques` — Global, Par ticket, Par matériel, Par lieu |

---

> ✅ **Fin de la formation ITIL — Le Fournil Doré**
>
> Les connaissances acquises ici s'appliquent directement à GLPI au quotidien. ITIL n'est pas un ensemble de règles rigides — c'est un cadre de réflexion pour fournir des services IT qui ont de la valeur pour les utilisateurs.
 
 ---
