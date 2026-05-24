# 01 — Introduction à ITIL

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est ITIL, pourquoi il existe et comment il s'applique concrètement dans une entreprise. Savoir distinguer un service IT d'un produit IT.

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/riCJU_ZMRYo?si=SobkFVz_wg5Lk9SP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Qu'est-ce qu'ITIL ?

**ITIL** signifie **Information Technology Infrastructure Library** — littéralement "bibliothèque d'infrastructure des technologies de l'information".

C'est un **référentiel de bonnes pratiques** pour gérer les services informatiques. Il ne dit pas comment faire techniquement (ce n'est pas un outil, ni un logiciel, ni une norme ISO), mais **comment organiser le travail** autour de l'IT pour que les services rendus aient de la valeur pour l'entreprise.

> [!TIP] Une analogie simple
> ITIL c'est comme le **Code de la Route** pour l'informatique. Le Code de la Route ne vous dit pas comment conduire une voiture (c'est la technique), il définit les règles communes pour que tout le monde circule dans le bon ordre. ITIL définit les règles communes pour que les services IT fonctionnent correctement.

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

> [!NOTE] ITIL 4 et ITIL 5 coexistent
> **ITIL 5** (Foundation) est sorti le 12 février 2026 — c'est la toute dernière version. Elle est publiée par **PeopleCert** (qui a racheté Axelos en 2021). ITIL 4 reste valide et largement utilisé en entreprise : les deux versions coexistent, aucune date de retrait d'ITIL 4 n'est annoncée. Dans ce cours, nous travaillons sur les concepts fondamentaux communs aux deux versions.

> [!TIP] Les grandes nouveautés d'ITIL 5
> - **IA native** : l'intelligence artificielle est intégrée comme pilier opérationnel, avec un modèle 6C (Creation, Curation, Clarification, Cognition, Communication, Coordination)
> - **ESM** (Enterprise Service Management) : le référentiel s'étend aux RH, finances, logistique — pas uniquement à l'IT
> - **Cycle de vie numérique** : nouveau modèle unifié pour la création, la livraison et l'amélioration des services numériques

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

## Valeur et cocréation

ITIL 4 insiste sur un point essentiel : **la valeur ne vient pas que du prestataire IT**.

```
Prestataire IT                         Client / Utilisateur
(Thomas, le technicien)         +      (Marie, la boulangère)
         │                                      │
  Fournit le service Wi-Fi              Sait comment s'en servir
  Configure le réseau                   Fait confiance au service
  Assure la disponibilité               Signale les problèmes
         │                                      │
         └──────────────────────────────────────┘
                         │
                    VALEUR CRÉÉE
              (Marie peut prendre des commandes
               en ligne depuis sa tablette)
```

C'est ce qu'ITIL appelle la **cocréation de valeur** : le service n'a de valeur que si l'utilisateur s'en sert correctement et si le prestataire le maintient en état. Les deux parties contribuent.

---

## Qui utilise ITIL ?

ITIL est utilisé dans quasiment toutes les grandes entreprises et administrations françaises :

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

## Atelier — Les services IT du Fournil Doré

> **Contexte** : Thomas vient d'être recruté comme technicien informatique au Fournil Doré. Son responsable lui demande de cartographier les services IT utilisés dans l'entreprise avant de mettre en place GLPI.

### Partie 1 — Identifier les services

En vous basant sur ce que vous savez d'une boulangerie artisanale, listez les services IT que le Fournil Doré utilise probablement au quotidien.

Pour chaque service, précisez :
- Qui l'utilise ?
- Quel besoin métier il satisfait ?
- Qu'est-ce qui se passe si ce service tombe en panne ?

Exemple de tableau à compléter :

| Service IT | Utilisateurs | Besoin métier satisfait | Impact si panne |
|------------|-------------|------------------------|-----------------|
| Wi-Fi | Tout le personnel | Accès Internet, caisse en ligne | Impossible de prendre les commandes |
| *(à compléter)* | | | |
| *(à compléter)* | | | |
| *(à compléter)* | | | |

### Partie 2 — Classer par criticité

Parmi les services identifiés, classez-les en 3 catégories :

- 🔴 **Critique** — La boulangerie ne peut pas fonctionner sans lui
- 🟠 **Important** — La panne gêne fortement mais on peut faire sans temporairement
- 🟡 **Utile** — Confort, perte mineure si panne

### Partie 3 — Discussion

- Quelle est la différence entre "le PC de la caisse" (produit) et "la caisse enregistreuse en ligne" (service) ?
- Qui crée la valeur du service Wi-Fi : Thomas qui le configure, ou Marie qui s'en sert pour prendre des commandes ?
- Pourquoi est-il important de connaître l'impact métier d'une panne avant de la classer ?

### Corrigé indicatif

| Service IT | Utilisateurs | Besoin métier | Impact si panne |
|------------|-------------|---------------|-----------------|
| 🔴 Wi-Fi / réseau | Tout le personnel | Caisse, commandes en ligne | Arrêt des ventes |
| 🔴 Messagerie | Direction, commerciaux | Commandes fournisseurs | Ruptures de stock |
| 🔴 Logiciel de caisse | Vendeurs | Encaissement | Arrêt des ventes |
| 🟠 Imprimantes | Boulangerie, bureau | Bons de production, factures | Travail manuel |
| 🟠 Serveur de fichiers | Direction, comptabilité | Accès aux docs partagés | Perte de productivité |
| 🟡 Téléphonie IP | Accueil, direction | Appels internes | Utilisation mobile |
| 🟡 Vidéosurveillance | Direction | Sécurité | Pas d'impact immédiat |

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

