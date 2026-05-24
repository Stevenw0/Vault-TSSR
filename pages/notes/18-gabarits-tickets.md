# 18 — Gabarits de tickets

> [!NOTE] Objectif de cette section
> Créer et utiliser des gabarits de tickets pour standardiser la saisie : champs pré-remplis, champs obligatoires, champs masqués. Associer un gabarit à une catégorie ITIL pour qu'il se charge automatiquement.

---

## Pourquoi utiliser des gabarits ?

Sans gabarit, chaque utilisateur remplit le ticket à sa façon : certains oublient d'indiquer le lieu, d'autres ne précisent pas l'urgence. Le helpdesk perd du temps à rappeler les demandeurs.

Avec un gabarit, GLPI peut :
- **Pré-remplir** automatiquement des champs (catégorie, urgence, technicien...)
- **Rendre obligatoires** des champs indispensables (lieu, description...)
- **Masquer** les champs non pertinents pour simplifier le formulaire
- **Verrouiller** des champs en lecture seule pour empêcher toute modification

Un gabarit peut être associé à une **catégorie ITIL** : dès que l'utilisateur choisit la catégorie "Réseau", le gabarit "Panne réseau" se charge automatiquement.

---

## Accéder aux gabarits de tickets

`Assistance` → `Tickets` → **Gabarits de tickets**

La liste affiche tous les gabarits existants. GLPI crée un gabarit **Default** par défaut.

→ Cliquer sur **+ Ajouter** pour créer un nouveau gabarit.

---

## Structure d'un gabarit — les 7 onglets

Après avoir créé un gabarit (ou en ouvrant un existant), 7 onglets apparaissent :

| Onglet | Rôle |
|--------|------|
| **Gabarit de ticket** | Informations générales du gabarit (nom, entité, statuts autorisés) |
| **Champs obligatoires** | Champs que l'utilisateur DOIT remplir pour valider le ticket |
| **Champs prédéfinis** | Champs pré-remplis automatiquement (modifiables par l'utilisateur) |
| **Champs masqués** | Champs invisibles dans le formulaire |
| **Champs en lecture seule** | Champs visibles mais non modifiables |
| **Prévisualisation** | Aperçu du formulaire tel que l'utilisateur le verra |
| **Catégories ITIL** | Lier ce gabarit à une ou plusieurs catégories de tickets |

---

## Onglet 1 — Gabarit de ticket

| Champ | Description |
|-------|-------------|
| **Nom** | Nom du gabarit (ex. : `Panne réseau`, `Demande de matériel`) |
| **Entité** | Entité où ce gabarit est disponible |
| **Sous-entités** | Si coché, le gabarit est disponible dans les sous-entités |
| **Statuts autorisés** | Restreint les statuts que l'utilisateur peut choisir à la création |
| **Commentaires** | Notes libres |

### Statuts autorisés

La liste complète des statuts disponibles :

| Statut | Usage typique |
|--------|--------------|
| Nouveau | Ticket créé, non encore pris en charge |
| Validation | En attente de validation avant traitement |
| En cours (Attribué) | Ticket assigné à un technicien |
| En cours (Planifié) | Intervention planifiée |
| En attente | Bloqué en attente d'une action externe |
| Résolu | Résolution proposée, en attente de clôture |
| Clos | Ticket terminé |

> [!TIP] Restreindre les statuts
> Pour un gabarit "Self-Service", ne cocher que **Nouveau** : l'utilisateur ne peut pas créer un ticket directement en statut "Résolu" ou "En cours".

---

## Onglet 2 — Champs obligatoires

Cliquer sur le **+** pour ajouter un champ à rendre obligatoire.

Le formulaire de ticket sera bloqué tant que ces champs ne sont pas remplis.

Champs disponibles pour l'obligation :

| Champ | Champ | Champ |
|-------|-------|-------|
| Titre | Statut | Urgence |
| Impact | Priorité | Date d'ouverture |
| Durée totale | TTR | Demandeur |
| Groupe demandeur | Technicien | Groupe de techniciens |
| Assigné à un fournisseur | Observateur | Groupe d'observateurs |
| Catégorie | Éléments associés | Demande de validation |
| Documents | Lieu | Source de la demande |
| SLAs TTO | SLAs TTR | OLA TTO interne |
| OLA TTR interne | TTO | TTR interne |
| TTO interne | Contrat | ID externe |

> [!TIP] Champs clés à rendre obligatoires
> Pour un helpdesk terrain : **Titre**, **Lieu** et **Description** (via Champs prédéfinis). Cela garantit que Thomas sait où aller et ce qui est cassé.

---

## Onglet 3 — Champs prédéfinis

Cliquer sur le **+** pour ajouter un champ avec une valeur pré-remplie.

Les mêmes champs sont disponibles, plus **Type**, **Description** et **Tâche**.

Exemples :

| Champ | Valeur prédéfinie | Effet |
|-------|-------------------|-------|
| Catégorie | `Réseau` | La catégorie est automatiquement sélectionnée |
| Urgence | `Haute` | L'urgence est pré-réglée à Haute |
| Technicien | `thomas.martin` | Thomas est assigné immédiatement |
| Type | `Incident` | Le type est fixé à Incident |
| Description | `Décrivez la panne réseau...` | Un texte d'aide s'affiche dans la description |
| Tâche | *(gabarit de tâche)* | Une tâche est automatiquement créée sur le ticket |

> [!NOTE] Modifiable par l'utilisateur
> Les champs prédéfinis sont **modifiables** : l'utilisateur voit la valeur pré-remplie mais peut la changer. Pour bloquer la valeur, utiliser **Champs en lecture seule** à la place.

> [!TIP] Gabarits de tâche intégrés
> Le champ **Tâche** dans les champs prédéfinis permet d'associer un gabarit de tâche. Les tâches prédéfinies sont ajoutées dans l'ordre de leur création. Voir la section sur les gabarits de tâche.

---

## Onglet 4 — Champs masqués

Cliquer sur le **+** pour masquer un champ.

Un champ masqué n'apparaît pas dans le formulaire — il est invisible pour l'utilisateur. Utile pour simplifier l'interface du self-service en cachant les champs avancés (SLA, OLA, ID externe...).

> [!WARNING] Compatibilité avec les champs obligatoires
> Ne pas masquer un champ qui est aussi dans les **Champs obligatoires** : l'utilisateur ne pourrait pas le remplir et le ticket serait impossible à soumettre.

---

## Onglet 5 — Champs en lecture seule

Cliquer sur le **+** pour verrouiller un champ.

Le champ est visible mais grisé — l'utilisateur peut le lire mais pas le modifier. Utile combiné avec les champs prédéfinis : on pré-remplit la catégorie ET on la verrouille pour que l'utilisateur ne puisse pas la changer.

---

## Onglet 6 — Prévisualisation

Affiche le formulaire de création de ticket **tel que l'utilisateur le verra** avec ce gabarit.

La prévisualisation est organisée en deux panneaux :

**Panneau gauche :**
- Titre (champ texte)
- Description (éditeur riche : gras, italique, listes, tableaux, images, fichiers joints)

**Panneau droit :**
- Entité, Date d'ouverture
- Type, Catégorie
- Statut, Source de la demande
- Urgence, Impact, Priorité
- Lieu, Durée totale, ID externe
- Acteurs (Demandeur, Observateur, Technicien...)
- Éléments associés (PC, imprimante...)

> [!TIP] Tester avant de déployer
> Toujours vérifier la prévisualisation avant d'associer le gabarit à une catégorie. C'est ici que l'on vérifie que les champs masqués ont bien disparu et que les valeurs prédéfinies sont correctes.

---

## Onglet 7 — Catégories ITIL

C'est ici que le gabarit devient vraiment puissant : **associer le gabarit à une ou plusieurs catégories**.

Cliquer sur le **+** → choisir une catégorie dans la liste.

**Effet** : quand un utilisateur crée un ticket et sélectionne la catégorie "Réseau", GLPI charge automatiquement le gabarit "Panne réseau" — les champs se pré-remplissent, les champs obligatoires s'activent, les champs masqués disparaissent.

| Catégorie liée | Gabarit chargé automatiquement |
|----------------|-------------------------------|
| Réseau | Panne réseau |
| Matériel | Panne matériel |
| Logiciel | Demande logiciel |
| *(pas de catégorie)* | Gabarit Default |

> [!NOTE] Gabarit Default
> Si aucun gabarit n'est associé à la catégorie choisie, GLPI utilise le gabarit **Default**. Il est recommandé de laisser le Default sans champs masqués ni champs obligatoires contraignants pour ne pas bloquer les tickets hors catégorie.

---

## Atelier — Gabarit "Panne réseau" pour le Fournil Doré

> **Contexte** : Thomas constate que les tickets réseau arrivent souvent sans lieu ni description précise. Il crée un gabarit dédié pour normaliser ces tickets.

### Partie 1 — Créer le gabarit

`Assistance` → `Tickets` → **Gabarits de tickets** → **+ Ajouter**

**Onglet Gabarit de ticket :**

| Champ | Valeur |
|-------|--------|
| Nom | `Panne réseau` |
| Entité | `Le Fournil Doré` |
| Sous-entités | ✅ Oui |
| Statuts autorisés | `Nouveau` uniquement |

Cliquer sur **Ajouter** → le gabarit est créé et les autres onglets apparaissent.

---

### Partie 2 — Rendre le lieu obligatoire

**Onglet Champs obligatoires** → **+**

| Champ à ajouter |
|-----------------|
| Lieu |

Sauvegarder → le champ **Lieu** sera désormais requis pour tout ticket créé avec ce gabarit.

---

### Partie 3 — Pré-remplir les champs

**Onglet Champs prédéfinis** → **+** (à répéter pour chaque champ)

| Champ | Valeur |
|-------|--------|
| Type | `Incident` |
| Catégorie | `Réseau` |
| Urgence | `Haute` |

Sauvegarder.

---

### Partie 4 — Masquer les champs avancés

**Onglet Champs masqués** → **+**

| Champ à masquer |
|-----------------|
| ID externe |
| Contrat |
| SLAs TTO |
| SLAs TTR |

Ces champs sont inutiles pour un utilisateur self-service.

---

### Partie 5 — Lier à la catégorie Réseau

**Onglet Catégories ITIL** → **+**

→ Sélectionner `Réseau` dans la liste.

Si d'autres catégories réseau existent (`Wi-Fi`, `Internet`), les ajouter aussi.

---

### Partie 6 — Tester le gabarit

1. Se connecter avec le compte **Marie Durand** (profil Self-Service)
2. `Assistance` → `Créer un ticket`
3. Sélectionner la catégorie **Réseau**
4. Observer :
   - Le type est automatiquement "Incident" ✅
   - L'urgence est "Haute" ✅
   - Les champs SLA/Contrat ont disparu ✅
5. Tenter de valider sans renseigner le **Lieu** → le formulaire bloque ✅
6. Renseigner le lieu → valider → le ticket est créé

---

### Questions de bilan

| Question | Réponse |
|----------|---------|
| Quelle est la différence entre un champ prédéfini et un champ en lecture seule ? | |
| Que se passe-t-il si on masque un champ obligatoire ? | |
| Comment faire en sorte qu'un gabarit se charge automatiquement ? | |
| Quel gabarit GLPI utilise-t-il si aucune catégorie n'est liée ? | |

---

## Vue d'ensemble — fonctionnement du gabarit

```
Utilisateur crée un ticket
         ↓
Choisit la catégorie "Réseau"
         ↓
GLPI charge le gabarit "Panne réseau"
         ↓
┌──────────────────────────────────────────┐
│ Champs prédéfinis → valeurs auto         │
│   Type = Incident                        │
│   Catégorie = Réseau                     │
│   Urgence = Haute                        │
│                                          │
│ Champs obligatoires → blocage            │
│   Lieu = ??? → requis avant validation   │
│                                          │
│ Champs masqués → invisibles              │
│   ID externe, Contrat, SLAs              │
└──────────────────────────────────────────┘
         ↓
Ticket créé avec les bonnes informations ✓
```

---

## Liens utiles

- [Gestion des gabarits dans GLPI | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/overview/templates)

---