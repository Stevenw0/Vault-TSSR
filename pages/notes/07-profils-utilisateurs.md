# 07 — Profils & utilisateurs

> [!NOTE] Objectif de cette section
> Comprendre le système de profils GLPI, créer des profils adaptés au Fournil Doré et affecter les utilisateurs avec les bons droits.

> **Module Dawan :** 5

---

## Qu'est-ce qu'un profil ?

Un **profil** définit ce qu'un utilisateur peut **voir et faire** dans GLPI. C'est l'équivalent d'un rôle.

Un utilisateur peut avoir **plusieurs profils** sur **plusieurs entités** différentes.

---

## Les profils par défaut

GLPI 11 est livré avec 8 profils prêts à l'emploi :

| Profil | Interface | Usage typique |
|--------|-----------|--------------|
| **Super-Admin** | Standard | Accès total, toutes entités |
| **Admin** | Standard | Administration complète sauf configuration système |
| **Supervisor** | Standard | Supervision des techniciens et des tickets |
| **Technician** | Standard | Gestion du parc et des tickets |
| **Hotliner** | Standard | Création et suivi de tickets pour d'autres utilisateurs |
| **Observer** | Standard | Lecture partielle — managers, auditeurs |
| **Read-Only** | Standard | Lecture seule stricte, aucune modification |
| **Self-Service** | Simplifiée | Utilisateurs finaux — mes tickets uniquement |

> [!NOTE] GLPI 11
> **Supervisor** et **Read-Only** sont deux profils ajoutés dans GLPI 11, absents des versions antérieures.

> [!WARNING] Profils par défaut en production
> Les profils par défaut sont là pour démarrer. En production, il vaut mieux créer ses **propres profils** adaptés à l'organisation pour maîtriser précisément les droits accordés.

---

## Interface simplifiée vs interface standard

| | Interface simplifiée | Interface standard |
|-|---------------------|--------------------|
| **Public cible** | Utilisateurs finaux | Techniciens, admins |
| **Menus visibles** | Mes tickets, FAQ | Tous les menus GLPI |
| **Création ticket** | Formulaire simple | Formulaire complet |
| **Visibilité parc** | Non | Oui |

---

## Créer un profil personnalisé

`Administration` → `Profils` → **+ Ajouter**

Lors de la création, choisir un **profil existant comme base** — GLPI copie tous ses droits, il ne reste plus qu'à les ajuster.

### Onglets d'un profil

| Onglet | Droits configurables |
|--------|---------------------|
| **Parc** | Ordinateurs, imprimantes, réseau, logiciels… |
| **Assistance** | Tickets, problèmes, changements |
| **Gestion** | Contacts, fournisseurs, budgets |
| **Outils** | Notes, FAQ, base de connaissances |
| **Administration** | Utilisateurs, entités, règles |
| **Configuration** | Accès aux paramètres globaux |
| **Cycle de vie** | Statuts autorisés pour les tickets |

### Granularité des droits

Pour chaque élément, on peut accorder indépendamment :

```
□ Lecture    □ Écriture    □ Création    □ Suppression    □ Purge
```

> [!TIP] Différence Suppression / Purge
> - **Suppression** : l'élément va à la corbeille, récupérable
> - **Purge** : suppression définitive, irrécupérable

---

## Assigner un profil à un utilisateur (habilitation)

Après création d'un utilisateur, aller dans l'onglet **Habilitations** de sa fiche :

`Fiche utilisateur` → onglet **Habilitations** → **Ajouter une habilitation**

| Champ | Description |
|-------|-------------|
| **Profil** | Profil à attribuer |
| **Entité** | Entité de rattachement |
| **Récursif** | Si coché : l'utilisateur voit aussi toutes les sous-entités |

> [!TIP] L'option Récursif
> - Thomas sur "Le Fournil Doré" avec **Récursif coché** → il voit Boutique ET Laboratoire
> - Marie sur "Boutique" sans récursif → elle ne voit que la Boutique

> [!NOTE] Habilitations multiples
> Un même utilisateur peut avoir des profils différents dans des entités différentes. Exemple : Technicien sur "Le Fournil Doré" ET Observer sur "Laboratoire" uniquement.

---

## Atelier — Profils et utilisateurs du Fournil Doré

### Partie 1 — Créer deux profils personnalisés

Créer les profils suivants **à partir des profils existants** :

| Profil à créer | Basé sur | Ajustements |
|----------------|----------|-------------|
| `Technicien Fournil` | Technician | Retirer l'accès à `Administration → Entités` et `Administration → Règles` |
| `Utilisateur Fournil` | Self-Service | Aucun ajustement — interface simplifiée par défaut |

`Administration` → `Profils` → **+ Ajouter**

Renseigner le nom, choisir le profil de base dans la liste déroulante, puis affiner les droits dans les onglets.

---

### Partie 2 — Créer les utilisateurs

`Administration` → `Utilisateurs` → **+**

| Login | Prénom | Nom | Email | Mot de passe |
|-------|--------|-----|-------|--------------|
| `thomas.martin` | Thomas | Martin | thomas@fournil-dore.fr | `Fournil2024!` |
| `lucas.petit` | Lucas | Petit | lucas@fournil-dore.fr | `Fournil2024!` |
| `marie.dupont` | Marie | Dupont | marie@fournil-dore.fr | `Fournil2024!` |
| `ahmed.benali` | Ahmed | Benali | ahmed@fournil-dore.fr | `Fournil2024!` |
| `claire.rousseau` | Claire | Rousseau | claire@fournil-dore.fr | `Fournil2024!` |

Pour chaque utilisateur : renseigner login, nom, prénom, email, mot de passe → **Sauvegarder**.

---

### Partie 3 — Affecter les habilitations

Rouvrir chaque fiche → onglet **Habilitations** → **Ajouter une habilitation** :

| Utilisateur | Profil | Entité | Récursif |
|-------------|--------|--------|---------|
| `thomas.martin` | Technicien Fournil | Le Fournil Doré | ✅ Oui |
| `lucas.petit` | Technicien Fournil | Boutique | Non |
| `marie.dupont` | Utilisateur Fournil | Boutique | Non |
| `ahmed.benali` | Utilisateur Fournil | Laboratoire | Non |
| `claire.rousseau` | Utilisateur Fournil | Le Fournil Doré | Non |

---

### Partie 4 — Vérification

1. Se déconnecter du compte glpi
2. Se connecter avec `marie.dupont` → vérifier l'**interface simplifiée** (uniquement "Mes tickets" et FAQ)
3. Se déconnecter, se connecter avec `thomas.martin` → vérifier l'**interface standard** avec tous les menus
4. Depuis le compte Thomas, utiliser le sélecteur d'entité → vérifier qu'il voit **Boutique ET Laboratoire** (récursif actif)
5. Se déconnecter, se connecter avec `lucas.petit` → vérifier qu'il voit **uniquement la Boutique** dans le sélecteur d'entité (pas de Laboratoire, pas de récursif)

> [!TIP] Intérêt du test Thomas vs Lucas
> C'est la même démonstration concrète de l'option **Récursif** : Thomas est technicien de toute l'entreprise, Lucas n'intervient que sur la Boutique. Même profil, droits différents selon l'entité et le récursif.

---

## Liens utiles

- [Profils utilisateur | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/administration/profiles/profiles)

---