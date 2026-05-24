# 06 — Les entités

> [!NOTE] Objectif de cette section
> Comprendre le rôle des entités dans GLPI et configurer l'arborescence du Fournil Doré.

> **Module Dawan :** 4

---

## Qu'est-ce qu'une entité ?

Une **entité** est une unité organisationnelle qui permet de **cloisonner** les données dans GLPI : chaque entité a son propre parc informatique, ses propres tickets et ses propres utilisateurs.

> [!WARNING] Entité ≠ Lieu
> Une entité n'est **pas** un lieu géographique. Les lieux (bureau, salle serveur, boutique…) se configurent dans les **Intitulés** (chapitre suivant).
>
> Une entité représente une **unité de gestion autonome** : une filiale, un service cloisonné, un client (dans le cas d'un infogérant).

### Entité, Groupe ou Lieu — lequel choisir ?

| Besoin | Outil adapté |
|--------|-------------|
| Séparer complètement les données de deux départements | **Entité** |
| Affecter des tickets à une équipe | **Groupe** |
| Indiquer où se trouve un équipement | **Lieu** (intitulé) |

> [!TIP] Ne pas sur-utiliser les entités
> Plus il y a d'entités, plus la configuration devient complexe (règles, habilitations, navigation…). Si le cloisonnement strict n'est pas nécessaire, un **groupe** suffit souvent.

---

## La Root entity

La **Root entity** est l'entité racine de GLPI. Elle existe toujours, ne peut pas être supprimée, mais **peut être renommée**.

Pour une seule entreprise, la solution la plus simple est de **renommer la Root entity** au nom de l'organisation, puis de créer les sous-entités en dessous.

Arborescence cible pour le Fournil Doré :

```
Le Fournil Doré    ← Root entity renommée
├── Boutique        ← sous-entité
└── Laboratoire     ← sous-entité
```

> [!NOTE] Root entity et multi-clients
> Dans un contexte d'infogérance (plusieurs clients gérés dans le même GLPI), la bonne pratique est de laisser la Root entity vide et de créer une entité par client en dessous. Pour une seule entreprise comme le Fournil Doré, renommer la Root entity est parfaitement adapté.

---

## Naviguer entre les entités

Le **sélecteur d'entité** se trouve en haut à droite de l'interface (sous le nom de l'utilisateur connecté).

| Mode | Effet |
|------|-------|
| Entité seule | Affiche uniquement les données de cette entité |
| **Arborescence** | Affiche l'entité **et toutes ses sous-entités** |

> [!TIP] Vue globale
> En sélectionnant "Le Fournil Doré" en mode **Arborescence**, Thomas voit d'un coup les tickets et le parc de la Boutique **et** du Laboratoire.

---

## Visibilité des données entre entités

Par défaut, les données d'une entité ne sont **pas visibles** depuis une autre.

Un ticket créé dans "Boutique" n'est pas visible depuis "Laboratoire" — chaque site gère ses propres demandes. Thomas, le technicien, a accès à toutes les entités via son profil.

---

## Atelier — Configurer les entités du Fournil Doré

### Étape 1 — Renommer la Root entity

`Administration` → `Entités` → cliquer sur **Root entity**

| Champ | Valeur |
|-------|--------|
| Nom | `Le Fournil Doré` |

Sauvegarder.

### Étape 2 — Créer les deux sous-entités

`Administration` → `Entités` → **+**

Créer "Boutique" puis "Laboratoire" :

| Nom | Entité parente |
|-----|---------------|
| `Boutique` | Le Fournil Doré |
| `Laboratoire` | Le Fournil Doré |

> [!TIP] Ordre de création
> Toujours créer le parent avant les enfants. Ici : renommer la root d'abord, puis créer Boutique et Laboratoire.

### Étape 3 — Vérifier l'arborescence

`Administration` → `Entités` : l'arborescence doit ressembler à ceci :

```
Le Fournil Doré
├── Boutique
└── Laboratoire
```

Tester le sélecteur d'entité en haut à droite — basculer entre les entités et observer le changement de contexte.

---

## Liens utiles

- [Entités | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/administration/entities)
- [FAQ GLPI — Entités](https://help.glpi-project.org/faq/fr/glpi/entity)

---