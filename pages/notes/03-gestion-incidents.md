# 03 — La gestion des incidents

> [!NOTE] Objectif de cette section
> Savoir identifier un incident, le distinguer d'une demande de service et d'un problème, le qualifier correctement et comprendre son cycle de vie. La gestion des incidents est la pratique ITIL la plus utilisée au quotidien par un technicien.

---

## Qu'est-ce qu'un incident ?

**Définition officielle ITIL 4 :**
> *"Un incident est une interruption non planifiée d'un service ou une réduction de la qualité d'un service."*

L'incident n'est pas forcément une panne totale. Une **dégradation** est aussi un incident.

| Situation | Incident ? |
|-----------|-----------|
| Le Wi-Fi est coupé | ✅ Oui — interruption totale |
| Le Wi-Fi est très lent depuis ce matin | ✅ Oui — dégradation de qualité |
| Marie veut un nouveau compte utilisateur | ❌ Non — c'est une demande de service |
| Le serveur tombe en panne toutes les nuits | ✅ Oui — mais aussi potentiellement un problème |

---

## Incident vs Demande de service vs Problème

C'est une distinction fondamentale, souvent mal comprise :

| | Incident | Demande de service | Problème |
|--|----------|-------------------|---------|
| **Définition** | Quelque chose a cassé | Quelque chose de planifié, normal | La cause racine d'un ou plusieurs incidents |
| **Exemple** | L'imprimante ne répond plus | Installer un nouveau logiciel | Pourquoi l'imprimante tombe en panne régulièrement ? |
| **Objectif** | Rétablir le service vite | Honorer la demande selon le SLA | Éliminer la cause pour éviter les récidives |
| **Urgence** | Souvent urgent | Rarement urgent | Traitement en arrière-plan |

> [!TIP] L'analogie médicale
> Un incident, c'est le **symptôme** (fièvre, douleur). Le problème, c'est la **maladie** (infection). L'urgence traite le symptôme pour que le patient aille mieux — les investigations cherchent ensuite la cause.

---

## Priorité = Impact × Urgence

Tous les incidents ne se traitent pas avec la même urgence. La **priorité** se calcule à partir de deux facteurs :

**Impact** — combien de personnes ou de services sont affectés ?
- Élevé : toute l'entreprise / service critique
- Moyen : une équipe / service important
- Faible : une seule personne / service secondaire

**Urgence** — à quelle vitesse faut-il résoudre ?
- Élevée : impossibilité de travailler, impact financier immédiat
- Moyenne : gêne significative mais contournement possible
- Faible : inconfort mineur

**Matrice de priorité :**

| | Urgence élevée | Urgence moyenne | Urgence faible |
|--|---------------|----------------|---------------|
| **Impact élevé** | 🔴 Critique | 🟠 Haute | 🟠 Haute |
| **Impact moyen** | 🟠 Haute | 🟡 Moyenne | 🟢 Basse |
| **Impact faible** | 🟡 Moyenne | 🟢 Basse | 🟢 Basse |

> **Au Fournil Doré** : La caisse enregistreuse ne fonctionne plus un samedi matin → Impact élevé (ventes bloquées) + Urgence élevée (impossible de travailler) = **Priorité critique**.

---

## Le cycle de vie d'un incident

```
  Détection
      │
      ▼
  Enregistrement ──── Créer le ticket avec toutes les infos
      │
      ▼
  Catégorisation ──── Quel type ? Quel service concerné ?
      │
      ▼
  Priorisation ────── Impact × Urgence = Priorité
      │
      ▼
  Diagnostic ─────── Identifier la cause apparente
      │
      ▼
  Résolution ─────── Appliquer la correction
      │
      ▼
  Clôture ────────── Vérifier avec l'utilisateur, fermer le ticket
```

### Étape par étape

**1. Détection**
L'incident peut être signalé par l'utilisateur (appel, ticket, email) ou détecté automatiquement par un outil de supervision. Plus tôt on détecte, moins l'impact est grand.

**2. Enregistrement**
Tout incident doit être enregistré dans l'outil ITSM (GLPI). Sans ticket, pas de traçabilité, pas de statistiques, pas d'amélioration possible.
Informations minimales : qui signale, quel service, description du symptôme, date et heure.

**3. Catégorisation**
Classer l'incident pour orienter vers le bon technicien et alimenter les statistiques. Exemple : Matériel / Réseau / Logiciel / Accès.

**4. Priorisation**
Appliquer la matrice Impact × Urgence pour définir le délai de traitement (SLA).

**5. Diagnostic**
Identifier la cause apparente. À ce stade, on cherche à **rétablir le service**, pas forcément à comprendre pourquoi ça s'est produit (c'est le rôle de la gestion des problèmes).

**6. Résolution**
Appliquer la solution. Si le technicien de niveau 1 ne peut pas résoudre, il **escalade** au niveau supérieur.

**7. Clôture**
Vérifier avec l'utilisateur que le service est bien rétabli. Documenter la solution appliquée. Fermer le ticket.

> [!WARNING] Ne jamais fermer un ticket sans confirmation utilisateur
> Un ticket fermé trop vite et rouvert le lendemain fait perdre du temps et nuit à la confiance. La règle : l'utilisateur confirme que tout va bien avant la clôture.

---

## L'escalade

Quand un technicien ne peut pas résoudre seul, il **escalade** :

| Type | Description |
|------|-------------|
| **Escalade fonctionnelle** | Transmission à un technicien plus expert (niveau 2, niveau 3) |
| **Escalade hiérarchique** | Remontée au management quand l'impact est fort ou que le SLA va être dépassé |

---

## Le major incident (incident majeur)

Un **incident majeur** est un incident d'impact très élevé qui nécessite une réponse exceptionnelle :
- Mobilisation d'une cellule de crise
- Communication régulière vers les utilisateurs et la direction
- Post-mortem obligatoire après résolution (analyse de ce qui s'est passé)

> **Exemple** : Panne complète du système de caisse dans toutes les enseignes un jour de fêtes. Cela dépasse le fonctionnement normal — procédure d'incident majeur activée.

---

## La gestion des incidents dans GLPI

Dans GLPI, un incident est géré via un **ticket de type "Incident"** :

| Champ GLPI | Correspondance ITIL |
|-----------|---------------------|
| Type = Incident | Distingue incident / demande |
| Urgence + Impact → Priorité | Calculée automatiquement |
| Catégorie | Catégorisation |
| Statut | Cycle de vie (Nouveau → En cours → Résolu → Clos) |
| Observateurs / Assignation | Acteurs et escalade |
| Solution | Documentation de la résolution |

---

## Atelier — Créer et traiter des incidents dans GLPI

> **Contexte** : Thomas Martin est technicien au Fournil Doré. Ce matin, il reçoit plusieurs signalements de ses collègues. Vous allez jouer le rôle de Thomas et gérer ces incidents directement dans GLPI.

Les utilisateurs du Fournil Doré dans GLPI :

| Utilisateur | Rôle |
|-------------|------|
| ahmed.benali | Responsable production |
| marie.dupont | Secrétaire de direction |
| lucas.petit | Vendeur en boutique |
| claire.rousseau | Comptable |
| thomas.martin | Technicien IT *(c'est vous)* |

---

### Partie 1 — Analyser et prioriser (sans GLPI)

Avant de créer les tickets, lisez les 5 signalements et remplissez le tableau d'analyse.

**Les signalements :**

| # | Message reçu | De |
|---|-------------|-----|
| 1 | "Thomas, IMP-NAN-OPENSPACE-01 ne répond plus depuis ce matin, impossible d'imprimer les bons de commande" | lucas.petit |
| 2 | "Je n'arrive plus à me connecter à GLPI depuis ce matin" | marie.dupont |
| 3 | "Est-ce qu'on peut me commander un deuxième écran ?" | claire.rousseau |
| 4 | "La caisse refuse les paiements CB depuis 30 minutes, j'ai une file d'attente !" | lucas.petit |
| 5 | "Mon accès au dossier partagé Comptabilité ne fonctionne plus" | claire.rousseau |

**Tableau à compléter :**

| # | Incident ou demande ? | Impact | Urgence | Priorité | Ordre de traitement |
|---|----------------------|--------|---------|---------|---------------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

### Partie 2 — Créer les tickets dans GLPI

Connectez-vous à GLPI avec le compte **thomas.martin**.

Pour chaque **incident** identifié (pas les demandes), créez un ticket en respectant ces règles :
- **Type** : Incident
- **Demandeur** : l'utilisateur qui a signalé
- **Titre** : clair et concis
- **Description** : reprendre le message reçu
- **Impact et Urgence** : selon votre analyse — GLPI calculera la priorité automatiquement
- **Assigné à** : thomas.martin

> Vérifiez que la priorité calculée par GLPI correspond à votre analyse de la Partie 1.

---

### Partie 3 — Résoudre les tickets dans GLPI

Traitez les tickets dans l'ordre de priorité. Pour chaque ticket :

1. Passez le statut à **En cours (Assigné)**
2. Ajoutez un **suivi** décrivant les actions menées
3. Renseignez la **solution** appliquée
4. Passez le statut à **Résolu**

**Solutions à appliquer :**

| Ticket | Solution |
|--------|----------|
| CB refusées (lucas.petit) | Redémarrage du terminal de paiement — service rétabli |
| GLPI inaccessible (marie.dupont) | Vider le cache navigateur + reconfigurer l'URL — accès rétabli |
| Dossier partagé (claire.rousseau) | Droits d'accès expirés — réattribution du groupe Comptabilité |
| Imprimante hors ligne (lucas.petit) | Redémarrage du service d'impression — IMP-NAN-OPENSPACE-01 rétablie |

> ⚠️ Ne pas oublier de lier le ticket à l'équipement **IMP-NAN-OPENSPACE-01** via l'onglet **Éléments** du ticket.

> Pour la demande de deuxième écran (claire.rousseau) : créez un ticket de **type Demande**, sans urgence, avec la note "À planifier selon budget disponible".

---

### Corrigé — Partie 1

| # | Type | Impact | Urgence | Priorité | Ordre |
|---|------|--------|---------|---------|-------|
| 4 | Incident | Élevé — ventes bloquées | Élevée — file d'attente clients | 🔴 Critique | **1er** |
| 2 | Incident | Moyen — outil de gestion indispo | Élevée — bloquée toute la matinée | 🟠 Haute | **2e** |
| 5 | Incident | Moyen — accès données bloqué | Moyenne — travail en attente | 🟡 Moyenne | **3e** |
| 1 | Incident | Faible — impression bloquée, pas urgent | Faible — pas de client en attente | 🟢 Basse | **4e** |
| 3 | Demande de service | — | — | À planifier | — |

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Incident | Interruption ou dégradation non planifiée d'un service |
| Demande de service | Requête normale et planifiée (installation, accès…) |
| Problème | Cause racine d'un ou plusieurs incidents |
| Priorité | Résulte de l'Impact × l'Urgence |
| Cycle de vie | Détection → Enregistrement → Catégorisation → Priorisation → Diagnostic → Résolution → Clôture |
| Escalade | Transmission à un niveau supérieur (fonctionnelle ou hiérarchique) |
| Incident majeur | Impact critique, cellule de crise + post-mortem obligatoire |

---