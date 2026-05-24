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

| #   | Incident ou demande ?                                                            | Impact       | Urgence  | Priorité    | Ordre de traitement |
| --- | -------------------------------------------------------------------------------- | ------------ | -------- | ----------- | ------------------- |
| 1   | "La caisse refuse les paiements CB depuis 30 minutes, j'ai une file d'attente !" | Impact élevé | Critique | Haute       | 1                   |
| 2   | “Je n’arrive plus à me connecter à GLPI depuis ce matin”                         | Moyenne      | Moyenne  | Moyenne     | 3                   |
| 3   | "Est-ce qu'on peut me commander un deuxième écran ?"                             | Basse        | basse    | rien a pété | 5                   |
| 4   | "Mon accès au dossier partagé Comptabilité ne fonctionne plus"                   | Moyenne      | Moyenne  | Moyenne     | 4                   |
| 5   | "Thomas, IMP-NAN-OPENSPACE-01 ne répond plus depuis ce matin                     | Haute        | Haute    | Haute       | 2                   |

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
