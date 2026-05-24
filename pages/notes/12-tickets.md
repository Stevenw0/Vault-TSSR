# 12 — Premier pas avec les tickets

> [!NOTE] Objectif de cette section
> Comprendre le cycle de vie d'un ticket dans GLPI, créer des tickets depuis l'interface self-service et les traiter depuis l'interface technicien.

---

## Deux interfaces, deux rôles

| Interface | Qui ? | Ce qu'il peut faire |
|-----------|-------|---------------------|
| **Simplifiée** | Marie, Ahmed, Claire (Self-Service) | Créer un ticket, suivre ses tickets, consulter la FAQ |
| **Standard** | Thomas (Technician) | Voir et traiter tous les tickets, gérer le parc |

---

## Le cycle de vie d'un ticket

```
Nouveau → En cours (Attribué) → En cours (Planifié) → En attente → Résolu → Clos
```

| Statut | Signification |
|--------|--------------|
| **Nouveau** | Ticket créé, personne ne l'a pris en charge |
| **En cours (Attribué)** | Un technicien est assigné, traitement en cours |
| **En cours (Planifié)** | Une tâche planifiée est associée |
| **En attente** | Mis en pause (attente fournisseur, retour utilisateur...) |
| **Résolu** | Le technicien a fourni une solution |
| **Clos** | L'utilisateur a validé ou le délai de clôture automatique est dépassé |

> [!TIP] Résolu ≠ Clos
> Un ticket **Résolu** attend la validation de l'utilisateur. S'il ne répond pas, GLPI le clôture automatiquement après un délai configurable. Seul l'utilisateur (ou un admin) peut clore manuellement.

---

## Créer un ticket — interface simplifiée

L'utilisateur se connecte et arrive sur le **Catalogue de services**. Il doit d'abord choisir le type de sa demande en cliquant sur l'une des deux tuiles :

| Tuile | Type créé | Quand l'utiliser |
|-------|-----------|-----------------|
| **Signaler un incident** | Incident | Quelque chose ne fonctionne plus |
| **Demander un service** | Demande | Je voudrais quelque chose de nouveau |

> [!NOTE] Le type est choisi avant le formulaire
> Contrairement à l'interface technicien, l'utilisateur self-service ne voit pas de champ "Type" dans le formulaire — il a déjà fait ce choix en cliquant sur la tuile. C'est plus simple et évite les erreurs de classification.

Une fois la tuile choisie, le formulaire s'affiche :

| Champ | Description |
|-------|-------------|
| **Urgence** | Niveau d'urgence ressenti par l'utilisateur |
| **Catégorie** | Classification de la demande (liste des catégories ITIL) |
| **Matériels de l'utilisateur** | Équipement concerné |
| **Lieu** | Emplacement de l'incident |
| **Titre** | Description courte |
| **Description** | Détail du problème ou de la demande |

---

## Traiter un ticket — interface technicien

`Assistance` → `Tickets`

### Prendre en charge

Ouvrir le ticket → section **Acteurs** → champ **Technicien** → s'assigner.
Le statut passe automatiquement à **En cours (Attribué)**.

### Ajouter un suivi

Un **suivi** est une communication visible par le demandeur.

`Onglet Suivi & tâches` → **Ajouter un suivi**

> Exemple : *"Diagnostic en cours, je reviens vers vous d'ici 1h."*

### Ajouter une tâche

Une **tâche** est une action interne du technicien — non visible par défaut par l'utilisateur.

`Onglet Suivi & tâches` → **Ajouter une tâche**

| Champ | Description |
|-------|-------------|
| Catégorie de tâche | Type d'action (Diagnostic, Intervention...) |
| Description | Ce qui a été fait |
| Durée | Temps passé |
| Statut | À faire / En cours / Terminée |

### Lier un équipement

`Onglet Éléments` → **Ajouter un élément** → choisir le type et la machine concernée.

### Résoudre

`Onglet Solution` → renseigner le type de solution et la description → **Sauvegarder**.
Le ticket passe en statut **Résolu**.

---

## Atelier — Une journée de support au Fournil Doré

> **Contexte** : Lundi matin, Thomas prend son poste. Trois demandes arrivent.

### Ticket 1 — Marie : imprimante hors service

**En tant que Marie** (`marie.dupont`) :

Sur le Catalogue de services → cliquer sur **Signaler un incident**

- Catégorie : `Matériel` → `Imprimante`
- Matériels : `IMP-REN-01`
- Lieu : `Rennes > Open space`
- Titre : `L'imprimante de la boutique ne répond plus`
- Description : `Depuis ce matin, IMP-REN-01 affiche une erreur et n'imprime plus les tickets de caisse.`

**En tant que Thomas** (`thomas.martin`) :

1. Ouvrir le ticket → s'assigner
2. Vérifier que `IMP-REN-01` est bien lié (onglet **Éléments**)
3. Ajouter un **suivi** : `Diagnostic en cours, je reviens vers vous dans 30 minutes.`
4. Ajouter une **tâche** : `Vérification du câble USB — câble défectueux remplacé` (durée : 15 min)
5. Résoudre : `Câble USB remplacé, imprimante fonctionnelle.`

---

### Ticket 2 — Ahmed : installation logiciel

**En tant que Ahmed** (`ahmed.benali`) :

Sur le Catalogue de services → cliquer sur **Demander un service**

- Catégorie : `Logiciel` → `Installation`
- Matériels : `PC-NAN-01`
- Lieu : `Nantes > Open space`
- Titre : `Installation de l'application de gestion de production`
- Description : `J'ai besoin du logiciel BoulangeriePro sur mon poste PC-NAN-01.`

**En tant que Thomas** : traiter jusqu'à résolution, vérifier que `PC-NAN-01` est bien lié.

---

### Ticket 3 — Claire : pas d'accès Internet

**En tant que Claire** (`claire.rousseau`) :

Sur le Catalogue de services → cliquer sur **Signaler un incident**

- Catégorie : `Réseau` → `Internet`
- Lieu : `Rennes > Open space`
- Titre : `Impossible d'accéder à Internet depuis mon bureau`

**En tant que Thomas** : mettre en **attente** avec le suivi `En attente du technicien réseau du FAI — intervention prévue demain matin.`

---

### Bilan

Depuis le compte Thomas :
- `Assistance` → `Tickets` : combien de tickets sont Résolus ? En attente ?
- Dans quel onglet trouve-t-on le temps total passé sur un ticket ?

---

## Liens utiles
- [Gérer les tickets | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assistance/tickets/ticketmanagement)
- [Documentation GLPI — Helpdesk](https://glpi-user-documentation.readthedocs.io/fr/latest/modules/assistance/)

---