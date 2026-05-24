# 04 — La gestion des problèmes

> [!NOTE] Objectif de cette section
> Comprendre la différence entre un incident et un problème, identifier les causes racines et éviter que le même incident ne se reproduise. Savoir créer et lier des problèmes dans GLPI.

---

## Incident vs Problème : la distinction clé

On l'a vu au chapitre 3 : un incident, on le règle vite. Mais si le même incident revient régulièrement, il y a forcément une cause sous-jacente — c'est ce qu'ITIL appelle un **problème**.

**Définition ITIL 4 :**
> *"Un problème est la cause, ou la cause potentielle, d'un ou plusieurs incidents."*

| | Incident | Problème |
|--|----------|---------|
| **Déclencheur** | Quelque chose casse maintenant | On observe une récurrence ou on anticipe |
| **Objectif** | Rétablir le service le plus vite possible | Trouver et éliminer la cause racine |
| **Urgence** | Immédiate | Traitement en arrière-plan |
| **Exemple** | L'imprimante ne répond plus | Pourquoi l'imprimante tombe en panne tous les lundis ? |

> **Important** : gérer un problème ne signifie pas résoudre l'incident en cours. Les deux sont traités en parallèle, par des personnes différentes ou à des moments différents.

---

## Les deux modes de la gestion des problèmes

### Mode réactif

Déclenché **après** les incidents. On observe qu'un incident s'est répété ou qu'un incident grave vient de se produire, et on ouvre un problème pour en chercher la cause.

> Exemple : le réseau Wi-Fi a chuté 3 fois en 2 semaines → Thomas ouvre un problème pour investiguer.

### Mode proactif

On cherche les problèmes **avant** qu'ils ne causent des incidents. On analyse les tendances, les logs, les alertes.

> Exemple : Thomas remarque dans GLPI que 60% des tickets concernent les PC du comptoir. Il ouvre un problème préventif avant la prochaine panne.

---

## Les concepts clés

### Erreur connue (Known Error)

Quand on a identifié la cause d'un problème mais qu'on ne peut pas encore la corriger définitivement, on crée une **erreur connue**. Elle documente :
- La cause identifiée
- La solution de contournement disponible

> Exemple : l'imprimante plante à cause d'un pilote défaillant. Le correctif du fabricant est attendu. En attendant, on documente : "redémarrer le service d'impression règle le problème temporairement."

### Solution de contournement (Workaround)

Solution **temporaire** pour réduire l'impact pendant que la cause racine est traitée. Ce n'est pas une solution définitive, mais elle permet de rétablir un service dégradé.

| | Solution de contournement | Solution définitive |
|--|--------------------------|---------------------|
| **Délai** | Immédiat | Variable |
| **Fiabilité** | Partielle | Totale |
| **Exemple** | Redémarrer l'imprimante manuellement | Remplacer le pilote défaillant |

---

## Le cycle de vie d'un problème

```
  Identification ── Récurrence d'incidents ou analyse proactive
        │
        ▼
  Enregistrement ── Créer le problème dans GLPI, lier les incidents
        │
        ▼
  Catégorisation ── Même logique que les incidents
        │
        ▼
  Investigation ─── Analyse de la cause racine (logs, tests, historique)
        │
        ▼
  Erreur connue ─── Documenter cause + workaround si trouvés
        │
        ▼
  Résolution ────── Appliquer le correctif définitif
        │
        ▼
  Clôture ────────── Vérifier, mettre à jour la documentation
```

> [!TIP] La gestion des problèmes alimente la base de connaissance
> Chaque problème résolu devient une fiche de connaissance. La prochaine fois qu'un technicien voit le même symptôme, il trouve immédiatement la solution. C'est l'un des bénéfices les plus concrets de cette pratique.

---

## La gestion des problèmes dans GLPI

GLPI distingue bien les incidents des problèmes. Un problème peut regrouper plusieurs incidents liés.

### Créer un problème

`Assistance → Problèmes → + Créer`

Les champs sont similaires aux incidents : titre, description, catégorie, impact, urgence, priorité, assignation.

### Lier des incidents à un problème

Dans la fiche du problème, onglet **Éléments liés** → section **Tickets** → ajouter les incidents concernés.

Cela permet de :
- Voir d'un coup d'œil tous les incidents liés à une même cause
- Fermer automatiquement les incidents quand le problème est résolu (selon configuration)
- Produire des statistiques sur les causes récurrentes

### Documenter une erreur connue

Dans la fiche du problème, une fois la cause identifiée, renseigner le champ **Solution** avec le workaround disponible. Le statut passe à **Erreur connue**.

---

## Atelier — Identifier et gérer un problème au Fournil Doré

> **Contexte** : Thomas Martin consulte l'historique des tickets dans GLPI. Il remarque que **3 incidents** ont été signalés en 3 semaines pour le même équipement : **IMP-NAN-OPENSPACE-01** (référencée dans le parc au chapitre 09.1). Tous viennent de lucas.petit, le vendeur en boutique.

---

### Partie 1 — Créer les incidents manquants dans GLPI

L'incident de la semaine 3 a déjà été créé lors de l'atelier du chapitre 03 : ticket "IMP-NAN-OPENSPACE-01 ne répond plus", demandeur lucas.petit, statut Résolu. Il reste à créer les deux incidents antérieurs pour simuler la récurrence.

Connectez-vous avec **thomas.martin** et créez ces deux tickets :

**Ticket 1 — Semaine 1**
- Type : Incident
- Titre : `Impossible d'imprimer les bons de commande`
- Demandeur : lucas.petit
- Description : "Les bons de commande ne s'impriment plus depuis ce matin, la file d'attente est bloquée"
- Impact : Moyen / Urgence : Élevée → Priorité Haute
- Statut : **Résolu** (solution : redémarrage du service d'impression)
- Élément associé : `IMP-NAN-OPENSPACE-01`

**Ticket 2 — Semaine 2**
- Type : Incident
- Titre : `Imprimante boutique introuvable sur le réseau`
- Demandeur : lucas.petit
- Description : "L'imprimante n'apparaît plus dans la liste, impossible d'imprimer"
- Impact : Moyen / Urgence : Élevée → Priorité Haute
- Statut : **Résolu** (solution : redémarrage de l'imprimante)
- Élément associé : `IMP-NAN-OPENSPACE-01`

> Vérifiez depuis la fiche de `IMP-NAN-OPENSPACE-01` → onglet **Tickets** que les 3 incidents sont bien liés à cet équipement.

---

### Partie 2 — Identifier le problème

**Question de réflexion** : à quel moment Thomas aurait-il dû ouvrir un problème ? Après le 1er incident ? Le 2e ? Le 3e ?

> Il n'y a pas de règle absolue, mais **2 incidents identiques sur le même équipement en moins d'un mois** est un signal clair. Attendre le 3e coûte du temps perdu et de la frustration pour l'utilisateur.

---

### Partie 3 — Créer le problème dans GLPI

`Assistance` → `Problèmes` → **+**

Créez le problème suivant :

| Champ | Valeur |
|-------|--------|
| Titre | `Pannes récurrentes - IMP-NAN-OPENSPACE-01` |
| Catégorie | Matériel / Impression |
| Impact | Moyen |
| Urgence | Moyenne |
| Demandeur | thomas.martin |
| Description | 3 incidents sur l'IMP-NAN-OPENSPACE-01 en 3 semaines. Symptômes variés (file bloquée, imprimante absente du réseau, hors ligne). Cause racine inconnue. Investigation en cours. |

Puis liez les 3 incidents au problème :
`Onglet Éléments liés` → `Tickets` → ajouter les 3 incidents

Liez également l'équipement :
`Onglet Éléments liés` → `Imprimantes` → `IMP-NAN-OPENSPACE-01`

---

### Partie 4 — Documenter l'erreur connue

Après investigation, Thomas découvre que le pilote d'impression se corrompt à chaque mise à jour Windows automatique. Le fabricant Brother a confirmé le bug — un pilote stable sera disponible dans 2 semaines.

Dans la fiche du problème, renseignez :
- **Statut** : Erreur connue
- **Solution (workaround)** : Réinstaller manuellement le pilote Brother MFC-L8900CDW après chaque mise à jour Windows (durée : 15 min). Procédure documentée en base de connaissance.
- **Solution définitive** : Désactiver les mises à jour automatiques du pilote via GPO + déployer le pilote stable v3.2 dès disponibilité (J+14)

---

### Discussion

- Quelle est la différence entre fermer le dernier incident (semaine 3) et fermer le problème ?
- Si Thomas n'avait pas créé de problème, que se passerait-il dans 2 semaines ?
- Pourquoi lier l'équipement `IMP-NAN-OPENSPACE-01` au problème et pas seulement les tickets ?

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Problème | Cause (ou cause potentielle) d'un ou plusieurs incidents |
| Réactif | On ouvre un problème après une récurrence d'incidents |
| Proactif | On anticipe les problèmes avant qu'ils causent des incidents |
| Erreur connue | Problème dont la cause est identifiée, avec un workaround documenté |
| Workaround | Solution temporaire en attendant la correction définitive |
| Base de connaissance | Les problèmes résolus alimentent la documentation pour les équipes |

---