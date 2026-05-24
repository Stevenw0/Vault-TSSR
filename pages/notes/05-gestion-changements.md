# 05 — La gestion des changements

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est un changement ITIL, distinguer les 3 types de changements et savoir créer et documenter un changement dans GLPI avec son plan de déploiement et son plan de repli.

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

> [!NOTE] ITIL 4 : "Change Enablement"
> Dans ITIL 4, cette pratique s'appelle officiellement **Change Enablement** (et non plus "Change Management" comme en v3). L'idée : les changements ne doivent pas freiner l'organisation, mais être **maîtrisés et documentés** pour minimiser les risques.

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

> [!WARNING] Sans plan de repli, on ne déploie pas
> Un changement sans procédure de rollback est un changement risqué. En production, si quelque chose tourne mal et qu'on ne peut pas revenir en arrière rapidement, l'impact est potentiellement catastrophique.

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

> [!TIP] La section Liaisons
> Elle permet de relier le changement au **problème** qui en est à l'origine. Dans notre fil rouge : le changement de pilote est lié au problème "Pannes récurrentes - IMP-NAN-OPENSPACE-01".

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