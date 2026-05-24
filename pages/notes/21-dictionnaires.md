# 21 — Dictionnaires

## Objectifs

- Comprendre le rôle des dictionnaires dans GLPI
- Créer des règles de normalisation à partir de cas réels
- Tester et rejouer le moteur de règles

---

## Qu'est-ce qu'un dictionnaire ?

Quand un agent d'inventaire remonte des données, il envoie exactement ce que le système d'exploitation lui retourne. Résultat : le même éditeur peut apparaître sous plusieurs formes selon les versions de drivers installées.

Voici ce que contient réellement le GLPI du Fournil Doré après le premier inventaire :

| Logiciel | Éditeur remonté |
|---|---|
| BCD and Boot | `Microsoft` |
| Clipchamp | `Microsoft Corp.` |
| Microsoft Edge | `Microsoft Corporation` |
| ENE_External_Device_HAL | `ENE Tech` |
| ENE Video Capture Box HAL | `Ene Tech.` |
| ENE_MousePad_HAL | `ENE TECHNOLOGY INC.` |
| `1527c705-839a-4832-9118-54d4bd6a0c89` | Microsoft Corporation |

Trois problèmes distincts : un éditeur en plusieurs orthographes, un autre avec des majuscules inconsistantes, et un logiciel dont le nom est un GUID Windows — un composant système qui n'a aucune valeur métier dans le parc.

Les **dictionnaires** permettent de définir des règles de normalisation que GLPI applique automatiquement à chaque import et, sur demande, aux données déjà en base.

---

## Accès

`Administration → Dictionnaires`

La page affiche quatre catégories :

| Catégorie | Contenu |
|---|---|
| **Dictionnaire général** | Logiciels · Fabricants · Imprimantes |
| **Modèles** | Modèles de matériels |
| **Types** | Types de matériels |
| **Systèmes d'exploitation** | Noms et versions d'OS |

---

## Le moteur de règles

GLPI parcourt les règles dans l'ordre et **s'arrête à la première règle vérifiée**. L'ordre des règles compte : mettre les cas les plus spécifiques en premier.

En haut de la liste des règles, deux boutons essentiels :

- **Tester le moteur de règles** — simule l'évaluation sans toucher à la base. À utiliser systématiquement avant de rejouer.
- **Rejouer les règles du dictionnaire** — applique toutes les règles aux données déjà en base. Les doublons sont fusionnés automatiquement.

---

## Structure d'une règle

Chaque règle se compose de trois onglets.

### Règle

| Champ | Description |
|---|---|
| **Nom** | Nom descriptif |
| **Opérateur logique** | ET (tous les critères) / OU (au moins un) |
| **Activé** | Permet de désactiver une règle sans la supprimer |

### Critères — quand déclencher la règle

Champs disponibles pour le dictionnaire Logiciels : **Logiciel**, **Éditeur**, **Entité**, **Catégories de l'outil d'inventaire**.

Opérateurs disponibles : `est` · `n'est pas` · `contient` · `ne contient pas` · `commence par` · `finit par` · `expression rationnelle vérifie` · `expression rationnelle ne vérifie pas` · `existe` · `n'existe pas`

### Actions — que modifier

Champs modifiables : **Logiciel** · **Éditeur** · **Version** · **Catégorie** · **Entité** · **Associable à un ticket** · **Ignorer l'import**

Types d'action : **Assigner** (valeur fixe) · **Assigner valeur depuis l'expression régulière** (capture de groupe, `#0` = premier groupe)

> [!TIP]
> **Ignorer l'import** exclut définitivement un logiciel du parc sans le supprimer manuellement. Idéal pour les composants systèmes, GUIDs, outils de diagnostic internes.

---

## Atelier — Le Fournil Doré

L'inventaire a remonté 336 logiciels. On va créer trois règles pour nettoyer les données les plus visibles.

---

### Règle 1 — Normaliser l'éditeur Microsoft

Tous les logiciels avec l'éditeur `Microsoft` ou `Microsoft Corp.` doivent afficher `Microsoft Corporation`.

`Administration → Dictionnaires → Logiciels → + Ajouter`

**Onglet Règle :**

| Champ | Valeur |
|---|---|
| Nom | `Normaliser éditeur - Microsoft` |
| Opérateur logique | ET |
| Activé | Oui |

Sauvegarder, puis ouvrir l'onglet **Critères**.

**Critère → Ajouter un nouveau critère :**

| Champ | Valeur |
|---|---|
| Critère | Éditeur |
| Opérateur | `contient` |
| Valeur | `microsoft` |

Cliquer **+ Ajouter**.

> En utilisant `contient` avec la valeur en minuscules, la règle capture les trois variantes (`Microsoft`, `Microsoft Corp.`, `Microsoft Corporation`) en une seule fois, quelle que soit la casse.

**Actions → Ajouter une nouvelle action :**

| Champ | Valeur |
|---|---|
| Action | Éditeur |
| Type | Assigner |
| Valeur | `Microsoft Corporation` |

Cliquer **+ Ajouter**.

---

### Règle 3 — Ignorer les GUIDs Windows

Le logiciel `1527c705-839a-4832-9118-54d4bd6a0c89` est un composant système Windows identifié uniquement par son GUID. Il n'a aucune valeur dans le parc.

`Administration → Dictionnaires → Logiciels → + Ajouter`

**Onglet Règle :**

| Champ | Valeur |
|---|---|
| Nom | `Ignorer - GUID système Windows` |
| Opérateur logique | ET |
| Activé | Oui |

**Critères :**

| Champ | Valeur |
|---|---|
| Critère | Logiciel |
| Opérateur | `expression rationnelle vérifie` |
| Valeur | `^[0-9a-f]{8}-` |

> L'expression `^[0-9a-f]{8}-` détecte tout logiciel dont le nom commence par 8 caractères hexadécimaux suivis d'un tiret — le format d'un GUID Windows. Cette règle protègera aussi les futurs inventaires.

**Actions :**

| Champ | Valeur |
|---|---|
| Action | Ignorer l'import |
| Type | Assigner |
| Valeur | Oui |

---

### Tester avant d'appliquer

Retourner dans la liste : `Administration → Dictionnaires → Logiciels`

Cliquer **Tester le moteur de règles** et saisir les valeurs suivantes pour vérifier chaque règle.

---

### Appliquer aux données existantes

Une fois les tests validés, cliquer **Rejouer les règles du dictionnaire**.

GLPI applique les règles à tous les logiciels déjà en base. Les entrées normalisées sont fusionnées : `Microsoft`, `Microsoft Corp.` et `Microsoft Corporation` n'auront plus qu'une seule fiche.

---

## Points clés à retenir

- Les dictionnaires corrigent les données **à l'import** (automatique) et **à la demande** (rejouer).
- Le moteur s'arrête à la **première règle vérifiée** → mettre les cas spécifiques en premier.
- **Toujours tester** avant de rejouer pour éviter les mauvaises normalisations.
- `contient` avec une valeur en minuscules capture plusieurs variantes en une seule règle.
- **Ignorer l'import** + expression régulière = bouclier contre les noms de logiciels parasites futurs.

## Liens intéressent

- [Logiciels | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assets/softwares)
- [Dictionnaires | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/administration/dictionnaries)