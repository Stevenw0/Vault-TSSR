# 08 — Les intitulés

> [!NOTE] Objectif de cette section
> Comprendre les intitulés de GLPI et configurer les catégories ITIL, lieux et statuts adaptés au Fournil Doré.

---

## Qu'est-ce qu'un intitulé ?

Les intitulés sont les **listes déroulantes personnalisables** de GLPI : catégories de tickets, types de matériels, systèmes d'exploitation, lieux, statuts...

`Configuration` → `Intitulés`

La page affiche une grille de catégories. Les plus utiles en initiation :

| Section | Intitulés importants |
|---------|---------------------|
| **Assistance** | Catégories ITIL, catégories de tâches, types de solutions |
| **Général** | Lieux, types de documents |
| **Parc** | Statuts des éléments, types de matériels |

> [!NOTE] GLPI 11
> Les catégories de tickets s'appellent désormais **"Catégories ITIL"** dans GLPI 11 (anciennement "Catégories de tickets" dans les versions précédentes).

---

## Les catégories ITIL

C'est l'intitulé le plus important pour le helpdesk — il classifie chaque ticket.

`Configuration` → `Intitulés` → section **Assistance** → **Catégories ITIL**

### Arborescence hiérarchique

Les catégories peuvent être organisées en parent → enfant :

```
Matériel
├── Ordinateur
└── Imprimante

Réseau
├── Wi-Fi
└── Internet

Logiciel
├── Installation
└── Dysfonctionnement

Accès & Comptes
```

> [!TIP] Créer parent avant enfant
> GLPI ne permet de choisir une catégorie parente que si elle existe déjà. Toujours créer les catégories de haut niveau en premier.

### Créer une catégorie ITIL

`Configuration` → `Intitulés` → **Catégories ITIL** → **+**

| Champ | Description |
|-------|-------------|
| **Nom** | Intitulé affiché |
| **Catégorie parente** | Pour créer une sous-catégorie |
| **Visible dans l'interface simplifiée** | Cocher pour que les utilisateurs self-service la voient |
| **Entité** | Laisser "Root entity" pour une catégorie globale |

---

## Les lieux

Les lieux localisent les équipements et les interventions. C'est ici qu'on saisit les **emplacements physiques** — à ne pas confondre avec les entités qui, elles, découpent la gestion.

`Configuration` → `Intitulés` → section **Général** → **Lieux**

> [!NOTE] Entité ≠ Lieu
> - **Entité** → cloisonne la gestion (tickets, parc, utilisateurs séparés)
> - **Lieu** → indique où se trouve physiquement un équipement ou une personne
>
> Un équipement situé à Rennes peut très bien appartenir à l'entité Laboratoire. Ce sont deux informations indépendantes.

Les lieux peuvent être organisés en arborescence (bâtiment → étage → salle) :

```
Rennes — 3 Pl. du Général-Giraud, 35000 Rennes
├── Salle serveur
└── Open space

Nantes — 32 Bd Vincent Gâche, 44200 Nantes
├── Salle serveur
└── Open space
```

---

## Les statuts des éléments de parc

`Configuration` → `Intitulés` → section **Parc** → **Statuts des éléments**

Statuts par défaut : *En inventaire, En réparation, En attente, Mis au rebut, Volé, Perdu*

> [!TIP]
> On peut ajouter des statuts personnalisés selon les besoins : "En stock", "Prêté", "En déploiement"...

---

## Atelier — Configurer les intitulés du Fournil Doré

### Catégories ITIL

`Configuration` → `Intitulés` → section **Assistance** → **Catégories ITIL**

Créer dans cet ordre (parent avant enfant) : 

| Nom | Catégorie parente | Interface simplifiée |
|-----|------------------|---------------------|
| `Matériel` | *(aucune)* | ✅ Oui |
| `Ordinateur` | Matériel | ✅ Oui |
| `Imprimante` | Matériel | ✅ Oui |
| `Réseau` | *(aucune)* | ✅ Oui |
| `Wi-Fi` | Réseau | ✅ Oui |
| `Internet` | Réseau | ✅ Oui |
| `Logiciel` | *(aucune)* | ✅ Oui |
| `Installation` | Logiciel | ✅ Oui |
| `Accès & Comptes` | *(aucune)* | ✅ Oui |
| `Four & Production` | *(aucune)* | ✅ Oui |

> [!TIP] Catégorie métier
> "Four & Production" est spécifique au Fournil Doré — pour les incidents liés à l'équipement de production connecté.

### Lieux

`Configuration` → `Intitulés` → section **Général** → **Lieux**

Créer dans cet ordre (parent avant enfant) :

| Nom | Lieu parent | Adresse |
|-----|-------------|---------|
| `Rennes` | *(aucun)* | 3 Pl. du Général-Giraud, 35000 Rennes |
| `Salle serveur` | Rennes | |
| `Open space` | Rennes | |
| `Nantes` | *(aucun)* | 32 Bd Vincent Gâche, 44200 Nantes |
| `Salle serveur` | Nantes | |
| `Open space` | Nantes | |

### Base de connaissances — arborescence des catégories

`Configuration` → `Intitulés` → section **Outils** → **Catégories de la base de connaissances**

Créer l'arborescence suivante :

```
Matériel
├── Ordinateurs & périphériques
└── Imprimantes

Réseau
├── Wi-Fi
└── Accès Internet

Logiciels
├── Installation & licences
└── Dépannage

Procédures internes
├── Arrivée d'un collaborateur
└── Départ d'un collaborateur

Four & Production
```

| Nom | Catégorie parente |
|-----|------------------|
| `Matériel` | *(aucune)* |
| `Ordinateurs & périphériques` | Matériel |
| `Imprimantes` | Matériel |
| `Réseau` | *(aucune)* |
| `Wi-Fi` | Réseau |
| `Accès Internet` | Réseau |
| `Logiciels` | *(aucune)* |
| `Installation & licences` | Logiciels |
| `Dépannage` | Logiciels |
| `Procédures internes` | *(aucune)* |
| `Arrivée d'un collaborateur` | Procédures internes |
| `Départ d'un collaborateur` | Procédures internes |
| `Four & Production` | *(aucune)* |

> [!TIP] À quoi sert cette arborescence ?
> Elle structure les articles de la base de connaissances. Les techniciens s'y retrouvent facilement et les utilisateurs en self-service peuvent parcourir la FAQ par thème.

### Vérification

1. Se connecter avec `marie.dupont` → créer un ticket test → vérifier que les catégories apparaissent dans la liste
2. Vérifier que "Four & Production" est visible depuis l'interface simplifiée

---

## Liens utiles
- [Intitulés | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/configuration/dropdowns/index)

---