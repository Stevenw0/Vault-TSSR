# 06 — Les SLA et les niveaux de service

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est un SLA, distinguer TTO et TTR, connaître la différence entre SLA et OLA, et configurer des niveaux de service dans GLPI pour le Fournil Doré.

---

## Qu'est-ce qu'un SLA ?

**Définition ITIL 4 :**
> *"Un accord de niveau de service (SLA — Service Level Agreement) est un accord documenté entre un fournisseur de services et un client qui identifie les services requis ainsi que le niveau de service attendu."*

En clair : le SLA, c'est le **contrat de performance** entre l'IT et ses utilisateurs. Il répond à la question : *"En combien de temps allez-vous traiter mon incident ?"*

Sans SLA, chaque technicien gère les tickets à sa façon. Avec un SLA, l'équipe IT s'engage sur des délais mesurables — et GLPI les surveille automatiquement.

| Sans SLA | Avec SLA |
|----------|---------|
| Pas d'engagement de délai | Délais définis et visibles |
| Priorité subjective | Priorité calculée et tracée |
| Aucune alerte en cas de dépassement | Alertes automatiques avant l'échéance |
| Impossible de mesurer la performance | Statistiques objectives |

---

## TTO et TTR : les deux indicateurs clés

### TTO — Time To Own (délai de prise en charge)

Délai maximum entre la **création du ticket** et sa **prise en charge** par un technicien (passage en statut "En cours").

> Exemple : "Tout incident doit être pris en charge en moins d'1 heure."

### TTR — Time To Resolve (délai de résolution)

Délai maximum entre la **création du ticket** et sa **résolution** complète.

> Exemple : "Tout incident de priorité haute doit être résolu en moins de 4 heures."

| | TTO | TTR |
|--|-----|-----|
| **Mesure** | Réactivité du technicien | Efficacité de la résolution |
| **Déclenché par** | Création du ticket | Création du ticket |
| **Terminé quand** | Ticket pris en charge | Ticket résolu |

> [!TIP] On peut avoir les deux
> Un ticket peut avoir un SLA TTO **et** un SLA TTR simultanément. Le TTO surveille la réactivité, le TTR surveille la résolution globale.

---

## SLA vs OLA

Le **SLA** (Service Level Agreement) est l'engagement **externe** — vers les utilisateurs.

L'**OLA** (Operational Level Agreement) est l'engagement **interne** — entre équipes IT. Il sert quand plusieurs équipes interviennent sur un même ticket.

| | SLA | OLA |
|--|-----|-----|
| **Parties** | IT ↔ Utilisateurs | Équipe IT ↔ Équipe IT |
| **Exemple** | "Les incidents sont résolus sous 4h" | "L'équipe réseau traite les escalades sous 2h" |
| **Dans GLPI** | Champs TTO / TTR | Champs TTO interne / TTR interne |

> Au Fournil Doré, Thomas travaille seul — les OLA ne sont pas pertinents dans ce contexte. On se concentre sur les SLA.

---

## La structure SLA dans GLPI

GLPI organise les niveaux de service en deux niveaux :

```
Configuration → Niveaux de services
        │
        └── SLM (Niveau de services)
               │   Nom + Calendrier
               │
               ├── SLAs  ← délais de résolution/prise en charge externes
               │     │
               │     └── Niveaux d'escalade ← alertes avant dépassement
               │
               └── OLAs  ← délais internes (si plusieurs équipes)
```

**SLM** (Service Level Management) : le conteneur qui regroupe les SLA et OLA d'un même périmètre. Un seul SLM suffit généralement pour une petite structure.

**SLA** : l'engagement lui-même, avec son type (TTO ou TTR) et sa durée maximale.

**Niveau d'escalade** : une alerte déclenchée **avant** l'échéance pour prévenir le dépassement.

---

## Les niveaux d'escalade

Un niveau d'escalade, c'est une action automatique déclenchée avant que le SLA ne soit dépassé.

Dans GLPI, le champ **Exécution** définit le moment du déclenchement :
- `-1 heure` = l'alerte se déclenche 1 heure avant l'échéance
- `-30 minutes` = 30 minutes avant
- `+0` = au moment exact de l'échéance

> [!WARNING] Une alerte qui arrive trop tard ne sert à rien
> L'escalade doit laisser suffisamment de temps pour agir. Si le TTR est de 4h, une alerte à -1h permet encore d'intervenir. Une alerte à -5 minutes, non.

---

## Appliquer un SLA à un ticket dans GLPI

Un SLA peut être appliqué à un ticket de deux façons :

**Manuellement** — dans la section **Niveaux de services** du formulaire ticket. Les champs TTO et TTR permettent de sélectionner un SLA existant.

**Automatiquement via le moteur de règles** — GLPI peut appliquer automatiquement un SLA selon la catégorie, la priorité ou l'entité du ticket. C'est la méthode recommandée en production.

> [!TIP] Dans cet atelier
> On commence par l'affectation manuelle pour comprendre le mécanisme. L'automatisation via règles est abordée dans l'initiation GLPI (moteur de règles).

---

## Atelier — Configurer les SLA du Fournil Doré

> **Contexte** : Thomas Martin veut formaliser ses engagements de service. Après discussion avec le directeur, ils s'accordent sur les délais suivants :
> - Tout incident doit être pris en charge en moins d'**1 heure** (TTO)
> - Les incidents de haute priorité doivent être résolus en **4 heures** (TTR)
> - Les incidents de priorité normale sont résolus en **24 heures** (TTR)

---

### Partie 1 — Créer le SLM

`Configuration` → `Niveaux de services` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `SLM Fournil Doré` |
| Calendrier | 24 heures sur 24, 7 jours sur 7 |

Cliquer **+ Ajouter**.

> Le SLM vient d'être créé. On voit apparaître deux onglets : **SLAs** et **OLA**. On va travailler dans l'onglet SLAs.

---

### Partie 2 — Créer les SLA

#### SLA 1 — Prise en charge (TTO)

Depuis la fiche du SLM → onglet **SLAs** → **Ajouter un nouvel élément**

| Champ | Valeur |
|-------|--------|
| Nom | `TTO - Prise en charge incidents` |
| Type | TTO |
| Durée maximale | `1` Heure |

Cliquer **+ Ajouter**.

#### SLA 2 — Résolution haute priorité (TTR)

Toujours depuis le SLM → onglet **SLAs** → **Ajouter un nouvel élément**

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents haute priorité` |
| Type | TTR |
| Durée maximale | `4` Heures |

Cliquer **+ Ajouter**.

#### SLA 3 — Résolution priorité normale (TTR)

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents priorité normale` |
| Type | TTR |
| Durée maximale | `24` Heures |

Cliquer **+ Ajouter**.

---

### Partie 3 — Ajouter un niveau d'escalade

Ouvrir le SLA `TTR - Incidents haute priorité` → onglet **Niveaux d'escalade** → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Alerte -1h avant dépassement` |
| Activé | Oui |
| Exécution | `-1` Heure |

Cliquer **+ Ajouter**.

> Ce niveau d'escalade déclenchera une alerte 1 heure avant que le SLA ne soit dépassé. En production, on peut y associer une notification par mail (via le moteur de règles ou les actions automatiques).

---

### Partie 4 — Appliquer le SLA à un ticket

Ouvrons un des tickets incidents créés lors du chapitre 03 (par exemple, "IMP-NAN-OPENSPACE-01 ne répond plus").

Dans la fiche du ticket, section **Niveaux de services** (en bas du panneau droit) :

| Champ | Valeur |
|-------|--------|
| TTO | `TTO - Prise en charge incidents` |
| TTR | `TTR - Incidents haute priorité` |

Sauvegarder le ticket.

> Après enregistrement, GLPI calcule automatiquement les échéances à partir de la date de création du ticket. Si le ticket est déjà résolu, les échéances sont affichées à titre indicatif.

---

### Discussion

- Quel est l'intérêt d'avoir un calendrier "heures ouverture" plutôt que "24h/7j" pour un Fournil Doré ouvert de 6h à 20h ?
- Pourquoi créer un SLA TTO séparé du SLA TTR plutôt qu'un seul délai global ?
- Comment Thomas peut-il vérifier si ses SLA sont respectés sur le mois écoulé ? *(Indice : Assistance → Statistiques)*

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| SLA | Engagement de délai entre l'IT et les utilisateurs |
| TTO | Délai de prise en charge (Time To Own) |
| TTR | Délai de résolution (Time To Resolve) |
| OLA | Accord interne entre équipes IT (TTO/TTR interne dans GLPI) |
| SLM | Conteneur GLPI qui regroupe les SLA et OLA |
| Niveau d'escalade | Alerte déclenchée avant le dépassement du SLA |
| Calendrier | Définit les heures ouvrées prises en compte dans le calcul des délais |

---