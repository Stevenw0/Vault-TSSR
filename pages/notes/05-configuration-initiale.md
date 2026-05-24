# 05 — Configuration initiale et prise en main

> [!NOTE] Objectif de cette section
> Sécuriser GLPI après installation, effectuer la configuration générale, paramétrer les intitulés et naviguer dans l'interface.

> **Modules Dawan :** 1 (suite) + 2

---

## Première connexion

Ouvrir un navigateur depuis la machine hôte :

```
http://glpi.dawan.lab
```

Se connecter avec le compte administrateur par défaut :

| Champ | Valeur |
|-------|--------|
| Identifiant | `glpi` |
| Mot de passe | `glpi` |

---

## Créer un compte administrateur personnel

Avant de supprimer les comptes par défaut, créer son propre compte super-admin.

`Administration` → `Utilisateurs` → `+ Ajouter`

| Champ | Valeur |
|-------|--------|
| Identifiant | *(ton choix)* |
| Mot de passe | *(robuste)* |
| Profil | `Super-Admin` |
| Entité | `Entité racine` |

Se déconnecter et **se reconnecter avec le nouveau compte** avant de continuer.

---

## Supprimer les comptes par défaut

`Administration` → `Utilisateurs`

Supprimer les 4 comptes suivants :

| Compte | Raison |
|--------|--------|
| `glpi` | Identifiants publics — vecteur d'attaque trivial |
| `tech` | Idem |
| `normal` | Idem |
| `post-only` | Idem |

> [!WARNING]
> Ne pas supprimer ces comptes = n'importe qui peut se connecter à ton GLPI avec `glpi`/`glpi`.

> [!IMPORTANT]
> Ne **jamais** supprimer le compte `glpi-system`. C'est le compte système interne utilisé par GLPI pour exécuter les actions automatiques. Sa suppression causerait des dysfonctionnements.

---

## Configuration générale

`Configuration` → `Générale`

La page s'ouvre directement sur la **Configuration générale**. Les paramètres sont répartis dans les onglets du panneau latéral gauche : Configuration générale, Valeurs par défaut, Parc, Assistance, Gestion, Système, Sécurité, Performance, API...

| Paramètre | Emplacement | Valeur recommandée lab |
|-----------|-------------|----------------------|
| Texte sur la page de connexion | Page principale | `GLPI Dawan Lab` |
| URL de l'application | Page principale | `http://glpi.dawan.lab` |
| Langue par défaut | Onglet **Valeurs par défaut** | `Français` |

> [!TIP] Pourquoi renseigner l'URL ?
> Elle est utilisée dans les liens des notifications e-mail et les tokens d'API. Sans elle, les liens générés seront incorrects.

---

## Intitulés

Les intitulés sont les **listes de référence** de GLPI : types de matériels, systèmes d'exploitation, catégories de tickets...

`Configuration` → `Intitulés`

La page affiche une grille de catégories (Général, Assistance, Types, Modèles, Systèmes d'exploitation, Réseau...). Cliquer sur une catégorie pour la développer et ajouter ou modifier ses valeurs.

### Exemples d'intitulés à personnaliser

| Catégorie | Exemples de valeurs |
|-----------|-------------------|
| `Lieux` | Salle serveur, Bureau direction, Open space |
| `Catégories de tickets` | Incident réseau, Demande logiciel, Panne matériel |
| `Statuts des éléments` | En production, En stock, En maintenance, Mis au rebut |
| `Systèmes d'exploitation` | Debian 13, Windows 11, Windows Server 2022 |

> [!NOTE] Les intitulés sont globaux ou par entité
> Un intitulé créé sur l'entité racine est disponible dans toutes les sous-entités. Un intitulé créé sur une entité fille est visible uniquement dans cette entité.

---

## Navigation dans l'interface

### Les menus principaux

```
┌─────────────────────────────────────────────────────────────────┐
│  Parc  │  Assistance  │  Gestion  │  Outils  │  Administration  │
└─────────────────────────────────────────────────────────────────┘
```

| Menu | Contenu |
|------|---------|
| **Parc** | Ordinateurs, écrans, imprimantes, réseau, téléphones... |
| **Assistance** | Tickets, problèmes, changements |
| **Gestion** | Contacts, fournisseurs, budgets, contrats |
| **Outils** | Notes, FAQ, base de connaissances, réservations |
| **Administration** | Utilisateurs, entités, profils, règles, plugins |
| **Configuration** | Paramètres généraux, notifications, intitulés |

### Interface simplifiée vs interface standard

GLPI propose deux interfaces selon le profil de l'utilisateur :

| Interface | Public | Accès |
|-----------|--------|-------|
| **Standard** | Techniciens, admins | Tous les menus |
| **Simplifiée** | Utilisateurs finaux | Uniquement "Mes tickets" |


---

## Liens utiles

[Comprendre l'interface | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/readme-1-1/discovery)

---