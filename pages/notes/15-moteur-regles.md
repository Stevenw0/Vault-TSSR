# 15 — Le moteur de règles

> [!NOTE] Objectif de cette section
> Comprendre et configurer le moteur de règles de GLPI pour automatiser l'affectation des tickets. Maîtriser la logique ET/OU qui est souvent source de confusion.

> **Module Dawan :** A5 (adapté initiation)

---

## Qu'est-ce que le moteur de règles ?

Le moteur de règles permet d'**automatiser des actions** selon des conditions. Exemples :
- Affecter automatiquement un ticket à Thomas si la catégorie est "Réseau"
- Placer un ordinateur dans l'entité "Boutique" si son nom commence par "PC-BOUTIQUE"
- Changer la priorité d'un ticket si l'utilisateur est la directrice

`Administration` → `Règles`

---

## Vue d'ensemble de la page Règles

La page Règles est divisée en deux colonnes.

**Règles d'inventaire** (colonne gauche) — pipeline exécuté à chaque remontée d'inventaire :

```
L'agent envoie un fichier d'inventaire
         ↓
Règles pour définir un type aux actifs inventoriés
  (forcer le type vers un actif personnalisé, ex. : Serveurs)
         ↓
Règles d'affectation d'un élément à une entité
  (définir une entité selon certains critères, ex. : le tag)
         ↓
Règles de localisation
  (appliquer un lieu en vérifiant les critères communs)
         ↓
Règles d'import et de liaison des actifs
  (associer à un actif existant, créer un nouvel actif ou refuser l'import)
         ↓
Dictionnaires
  (normaliser les sous-données : logiciels, OS, modèles)
         ↓
Règles métier pour les actifs
  (modifier les champs de l'actif en fonction de ses données)
         ↓
L'actif est créé ou mis à jour dans GLPI ✓
```

**Autres règles** (colonne droite) :

| Règle | Usage |
|-------|-------|
| Règles d'affectation d'habilitations à un utilisateur | Assigner automatiquement un profil à un utilisateur selon ses attributs |
| Règles d'affectation d'une catégorie aux logiciels | Classer les logiciels automatiquement |
| **Règles métier pour les tickets** | Modifier automatiquement les champs d'un ticket à sa création/modification |
| Règles métier pour les changements | Idem pour les changements |
| Règles métier pour les problèmes | Idem pour les problèmes |
| Transférer | Déplacer automatiquement des éléments entre entités |
| Listes noires | Ignorer certaines valeurs lors des imports |

> [!NOTE] Dans ce cours
> Pour l'administration courante d'un parc comme Le Fournil Doré, nous nous concentrons sur les **Règles métier pour les tickets**. Les règles d'inventaire sont utiles si tu as de nombreuses machines à classer automatiquement.

---

## Structure d'une règle

Chaque règle est composée de trois parties :

```
┌─────────────────────────────────────────────────────────┐
│ 1. CRITÈRES   → Quand appliquer cette règle ?           │
│ 2. ACTIONS    → Que faire quand elle s'applique ?       │
│ 3. OPÉRATEUR  → Logique ET ou OU entre les critères ?   │
└─────────────────────────────────────────────────────────┘
```

---

## La logique ET / OU — le point crucial

C'est ici que la plupart des erreurs se produisent.

### Opérateur ET (AND) — toutes les conditions doivent être vraies

```
Critère 1 : Catégorie = Réseau
ET
Critère 2 : Entité = Boutique

→ La règle s'applique UNIQUEMENT si c'est un ticket Réseau ET dans la Boutique
```

### Opérateur OU (OR) — au moins une condition doit être vraie

```
Critère 1 : Catégorie = Réseau
OU
Critère 2 : Catégorie = Wi-Fi

→ La règle s'applique si c'est Réseau OU Wi-Fi (ou les deux)
```

> [!WARNING] Erreur classique avec OU
> **Cas piège** : tu veux que Thomas prenne en charge TOUS les tickets réseau ET tous les tickets Wi-Fi.
>
> ❌ **Mauvaise approche** : une seule règle avec ET
> ```
> Catégorie = Réseau ET Catégorie = Wi-Fi
> ```
> → Ne s'applique JAMAIS (un ticket ne peut pas être Réseau ET Wi-Fi en même temps)
>
> ✅ **Bonne approche** : une seule règle avec OU
> ```
> Catégorie = Réseau OU Catégorie = Wi-Fi
> ```
> → S'applique si la catégorie est l'une OU l'autre

> [!TIP] Règle pratique pour choisir ET ou OU
> - **ET** : pour combiner des critères sur des **champs différents** (entité ET catégorie)
> - **OU** : pour combiner plusieurs **valeurs possibles du même champ** (catégorie A OU catégorie B)

---

## Comportement du moteur

Sur la page de liste des règles métier tickets, trois comportements sont disponibles :

| Comportement | Effet |
|-------------|-------|
| Le moteur traite toutes les règles | Chaque règle est évaluée, même si une précédente a déjà correspondu |
| Le moteur transmet le résultat de chaque règle à la prochaine règle qui s'applique | Les résultats s'enchaînent (comportement par défaut) |
| Les règles sont conditionnelles en fonction d'un type d'action | Mode avancé : selon l'action déclenchée |

> [!TIP] Passer outre les règles restantes
> Pour stopper le traitement après une règle, ajoute une **action** de type **"Passer outre les règles restantes"** dans l'onglet Actions de la règle. Ce n'est pas une option de la règle elle-même, c'est une action comme les autres.

---

## Créer une règle métier pour tickets

`Administration` → `Règles` → clic sur **Règles métier pour les tickets** → **+ Ajouter**

### Étape 1 — Onglet Règle

Remplis les champs principaux puis clique sur **+ Ajouter** pour créer la règle :

| Champ | Description |
|-------|-------------|
| **Nom** | Nom descriptif de la règle |
| **Description** | Explication de ce que fait la règle |
| **Opérateur logique** | **ET** (tous les critères vrais) ou **OU** (au moins un vrai) |
| **Activé** | Oui / Non — une règle inactive n'est jamais déclenchée |
| **Règle utilisée pour** | Ajouter / Mettre à jour / Ajouter & Mettre à jour |
| **Commentaires** | Notes libres |

> [!NOTE] Les onglets Critères et Actions n'apparaissent qu'après avoir sauvegardé la règle une première fois.

### Étape 2 — Onglet Critères

Clique sur **Ajouter un nouveau critère**, puis pour chaque critère : choisir le **critère**, l'**opérateur** et la **valeur**.

Critères principaux disponibles :

| Critère | Exemples d'opérateurs |
|---------|-----------------------|
| Catégorie | est / n'est pas / contient |
| Entité | est / est enfant de |
| Titre | contient / commence par / est |
| Demandeur | est / est dans le groupe |
| Demandeur dans groupe | est |
| Priorité | est / est supérieure à |
| Urgence | est |
| Impact | est |
| Statut | est |
| Lieu | est / n'existe pas |
| Technicien | est |
| Type | est |

### Étape 3 — Onglet Actions

Clique sur **Ajouter une nouvelle action**, puis pour chaque action : choisir le **champ à modifier** et la **nouvelle valeur**.

| Action possible | Exemple |
|----------------|---------|
| Technicien | → thomas.martin |
| Groupe de techniciens | → Équipe IT |
| Priorité | → Haute |
| Urgence | → Haute |
| Catégorie | → Réseau |
| Observateur | → claire.rousseau |
| Gabarit de solution | → Gabarit réseau |
| Gabarit de tâche | → Vérification réseau |
| **Passer outre les règles restantes** | Arrête le traitement après cette règle |

---

## L'ordre des règles

Les règles sont évaluées dans l'**ordre défini** dans la liste (colonne Position).

> [!TIP] Réordonner les règles
> Dans la liste des règles → glisser-déposer via l'icône **⠿** (6 points) à droite de chaque ligne.
> Mettre les règles les plus spécifiques en premier, les règles génériques en dernier.

> [!NOTE] Règles par défaut
> GLPI 11 crée deux règles par défaut sur les tickets : **"Ticket location from item"** et **"Ticket location from user"** — elles copient automatiquement le lieu depuis l'élément associé ou le demandeur. Ne les supprime pas.

---

## Tester le moteur de règles

Sur la liste des règles métier tickets, le bouton **"Tester le moteur de règles"** permet de simuler l'évaluation sur un ticket fictif sans créer de vrai ticket.

---

## Atelier — Règles d'affectation pour le Fournil Doré

> **Contexte** : Thomas crée des règles pour automatiser l'affectation des tickets selon leur catégorie.

### Règle 1 — Tickets réseau/Wi-Fi/Internet → Thomas

`Administration` → `Règles` → **Règles métier pour les tickets** → **+ Ajouter**

**Onglet Règle :**
- Nom : `Affectation réseau → Thomas`
- Opérateur logique : **OU** ← *(plusieurs catégories possibles)*
- Activé : **Oui**
- Règle utilisée pour : **Ajouter**

**Onglet Critères :**

| Critère | Opérateur | Valeur |
|---------|-----------|--------|
| Catégorie | est | `Réseau` |
| Catégorie | est | `Wi-Fi` |
| Catégorie | est | `Internet` |

**Onglet Actions :**

| Champ | Valeur |
|-------|--------|
| Technicien | `thomas.martin` |

---

### Règle 2 — Tickets urgents directrice → haute priorité

**Onglet Règle :**
- Nom : `Urgence direction → priorité haute`
- Opérateur logique : **ET**
- Activé : **Oui**
- Règle utilisée pour : **Ajouter**

**Onglet Critères :**

| Critère | Opérateur | Valeur |
|---------|-----------|--------|
| Demandeur | est | `claire.rousseau` |
| Titre | contient | `urgent` |

**Onglet Actions :**

| Champ | Valeur |
|-------|--------|
| Priorité | `Haute` |

---

### Tester les règles

1. Créer un ticket avec la catégorie "Wi-Fi" depuis le compte Marie → vérifier que Thomas est automatiquement assigné
2. Créer un ticket depuis Claire avec le mot "urgent" dans le titre → vérifier que la priorité est "Haute"
3. Utiliser le bouton **"Tester le moteur de règles"** pour simuler sans créer de vrai ticket

> [!WARNING] Débogage des règles
> Si une règle ne se déclenche pas :
> 1. Vérifier que la règle est **Active** (Activé = Oui)
> 2. Vérifier l'**opérateur** ET/OU — c'est la cause n°1 des règles qui ne fonctionnent pas
> 3. Vérifier l'**ordre** des règles — une règle précédente a peut-être déjà appliqué une valeur
> 4. Vérifier que les **critères correspondent exactement** aux valeurs du ticket
> 5. Vérifier le champ **"Règle utilisée pour"** (Ajouter vs Mettre à jour)

---

## Liens utiles
- [Règles | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/administration/rules)

---