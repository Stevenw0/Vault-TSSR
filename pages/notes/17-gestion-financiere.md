# 17 — Gestion financière

> [!NOTE] Objectif de cette section
> Utiliser GLPI pour suivre les informations financières du parc informatique : valeur des équipements, amortissement, TCO, budgets, fournisseurs et contrats de maintenance.

---

## Pourquoi gérer le financier dans GLPI ?

GLPI n'est pas un logiciel comptable, mais il permet de **centraliser les données financières du parc** pour répondre à des questions concrètes :

- Combien coûte ce PC en comptant toutes les interventions ? (**TCO**)
- Quand expire la garantie de l'imprimante de Nantes ?
- Quel budget reste-t-il pour les achats matériel de l'année ?
- Quel est le contrat de maintenance du serveur ?

---

## L'onglet Gestion sur un actif

Sur n'importe quel actif du parc (ordinateur, imprimante, serveur...) → onglet **Gestion** dans le panneau de gauche.

> [!WARNING] Activation requise
> L'onglet Gestion affiche d'abord un bouton **"Activer les informations financières et administratives"**. Il faut cliquer dessus pour afficher les champs. Ce bouton n'apparaît que si aucune info financière n'a encore été saisie.

L'onglet contient trois sections :

---

### Section 1 — Cycle de vie des actifs

Traçabilité complète du matériel de la commande à la réforme.

| Champ | Description |
|-------|-------------|
| **Date de commande** | Date à laquelle la commande a été passée |
| **Date d'achat** | Date de facturation / réception de la facture |
| **Date de livraison** | Date de réception physique du matériel |
| **Date de mise en service** | Date à laquelle le matériel est utilisé en prod |
| **Date de dernier inventaire physique** | Dernière vérification physique du matériel |
| **Date de réforme** | Date de mise au rebut / sortie du parc |

> [!TIP] Traçabilité DSI
> Renseigner au minimum la date d'achat et la date de mise en service. Cela permet de calculer l'âge exact des équipements et de planifier leur renouvellement.

---

### Section 2 — Informations financières et administratives

| Champ | Description |
|-------|-------------|
| **Fournisseur** | Qui a vendu le matériel (lié à `Gestion → Fournisseurs`) |
| **Budget** | Budget sur lequel l'achat a été imputé (lié à `Gestion → Budgets`) |
| **Numéro de commande** | Référence de la commande fournisseur |
| **Numéro d'immobilisation** | Référence comptable pour les actifs immobilisés |
| **Numéro de facture** | Numéro de la facture d'achat |
| **Bon de livraison** | Référence du bon de livraison |
| **Valeur** | Prix d'achat hors taxes |
| **Valeur de l'extension de garantie** | Coût d'un éventuel contrat de garantie étendue |
| **Valeur nette comptable** | Calculée automatiquement selon l'amortissement *(lecture seule)* |
| **Type d'amortissement** | Linéaire ou Dégressif |
| **Durée d'amortissement** | Durée en années (ex. : 3 ans pour un PC) |
| **Coefficient d'amortissement** | Coefficient pour l'amortissement dégressif |
| **TCO** | Valeur d'achat + coût total des interventions *(calculé automatiquement)* |
| **TCO mensuel** | TCO ramené au mois *(calculé automatiquement)* |
| **Criticité** | Niveau de criticité de l'équipement pour l'activité |
| **Commentaires** | Notes libres |

> [!NOTE] TCO — Total Cost of Ownership
> Le TCO est calculé automatiquement par GLPI : **Valeur d'achat + montant de toutes les interventions liées**. Plus un matériel génère de tickets coûteux, plus son TCO augmente. C'est un indicateur clé pour décider de remplacer ou de réparer.

> [!TIP] Amortissement linéaire
> Exemple : un PC acheté 1 200 € amorti sur 3 ans → valeur nette comptable = 1 200 / 3 = 400 € par an. Après 3 ans, valeur nette = 0 €.

---

### Section 3 — Informations sur la garantie

| Champ | Description |
|-------|-------------|
| **Date de début de garantie** | Date de départ de la garantie constructeur |
| **Durée de garantie** | Durée en mois (ex. : 12, 24, 36 mois) |
| **Informations sur la garantie** | Notes sur les conditions de garantie |
| **Alertes sur les informations financières et administratives** | Envoi d'alerte par mail avant expiration de garantie |

> [!TIP] Alertes d'expiration
> Configurer l'alerte pour recevoir un e-mail X jours avant la fin de garantie. Aller dans `Configuration → Notifications` pour activer les alertes financières.

---

## Gestion → Fournisseurs

`Gestion` → `Fournisseurs` → **+ Ajouter**

Un fournisseur représente une entreprise qui vend ou maintient du matériel.

| Champ | Description |
|-------|-------------|
| **Nom** | Raison sociale du fournisseur |
| **Type** | Catégorie (matériel, logiciel, maintenance...) |
| **Matricule** | Numéro SIRET ou identifiant interne |
| **Téléphone** | Téléphone principal |
| **Fax** | Fax (si nécessaire) |
| **Site Web** | URL du site |
| **E-mail** | E-mail de contact |
| **Adresse / Ville / Code postal / Pays** | Adresse complète |
| **Activé** | Oui / Non — désactiver un fournisseur sans le supprimer |

Une fois créé, le fournisseur apparaît dans le champ **Fournisseur** de l'onglet Gestion des actifs.

---

## Gestion → Budgets

`Gestion` → `Budgets` → **+ Ajouter**

Un budget permet de suivre une enveloppe financière et de voir combien a été consommé.

| Champ | Description |
|-------|-------------|
| **Nom** | Ex. : `Budget IT 2026`, `Renouvellement postes Rennes` |
| **Type** | Catégorie du budget (matériel, logiciel, service...) |
| **Valeur** | Montant total alloué (€) |
| **Date de début** | Début de la période budgétaire |
| **Date de fin** | Fin de la période budgétaire |
| **Lieu** | Site concerné (Rennes, Nantes...) |
| **Commentaires** | Notes libres |

> [!NOTE] Suivi de consommation
> Quand un actif est lié à un budget (via l'onglet Gestion), GLPI cumule automatiquement les valeurs et affiche le **montant consommé vs montant alloué** sur la fiche budget.

---

## Gestion → Contrats

`Gestion` → `Contrats` → **+ Ajouter**

Un contrat représente un engagement avec un fournisseur : maintenance, support, licence, location...

### Informations principales

| Champ | Description |
|-------|-------------|
| **Nom** | Ex. : `Maintenance imprimantes Rennes`, `Support HP 3 ans` |
| **Statut** | En cours / Suspendu / Annulé... |
| **Type** | Maintenance / Support / Location / Assurance... |
| **Numéro** | Référence du contrat |
| **Lieu** | Site concerné |
| **Date de début** | Date d'entrée en vigueur |
| **Durée initiale du contrat** | Durée en mois |
| **Préavis** | Délai de préavis avant renouvellement / résiliation |
| **Périodicité du contrat** | Fréquence de renouvellement |
| **Périodicité de facturation** | Mensuelle, trimestrielle, annuelle... |
| **Reconduction** | Jamais / Automatique / Manuelle |
| **Nombre max d'éléments** | Nombre maximum d'équipements couverts |
| **Numéro comptable** | Référence pour la comptabilité |
| **Alertes par mail** | Notification avant expiration |

### Heures d'intervention

Le contrat définit aussi les **plages horaires** durant lesquelles le support est disponible :

| Plage | Paramètres |
|-------|-----------|
| **En semaine** | Heure de début / heure de fin |
| **Le samedi** | Activé ou non / heures |
| **Dimanches et fêtes** | Activé ou non / heures |

> [!TIP] Lier un contrat à un actif
> Sur la fiche d'un actif → onglet **Contrats** → associer le contrat. GLPI affichera alors la date d'expiration directement sur l'équipement.

---

## Vue d'ensemble — relations entre les objets

```
Fournisseur ──────┐
                  ├──→ Actif (PC, imprimante, serveur...)
Budget ───────────┘       │
                          ├── Onglet Gestion : valeur, amortissement, TCO, garantie
                          └── Onglet Contrats : contrat de maintenance associé
```

---

## Atelier — Saisir les données financières du Fournil Doré

> **Contexte** : Thomas met à jour les informations financières des équipements achetés lors de l'ouverture du Fournil Doré.

### Partie 1 — Créer le fournisseur

`Gestion` → `Fournisseurs` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `DELL France` |
| Type | `Matériel` |
| Site Web | `https://www.dell.com/fr-fr` |
| Téléphone | `0805 200 182` |

### Partie 2 — Créer le budget

`Gestion` → `Budgets` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Budget IT 2026` |
| Type | `Matériel` |
| Valeur | `8 000` |
| Date de début | `01-01-2026` |
| Date de fin | `31-12-2026` |

### Partie 3 — Renseigner l'onglet Gestion de PC-REN-01

`Parc` → `Ordinateurs` → **PC-REN-01** → onglet **Gestion**

1. Cliquer sur **"Activer les informations financières et administratives"**
2. Renseigner :

| Champ | Valeur |
|-------|--------|
| Date de commande | `15-01-2026` |
| Date d'achat | `20-01-2026` |
| Date de mise en service | `25-01-2026` |
| Fournisseur | `DELL France` |
| Budget | `Budget IT 2026` |
| Valeur | `850` |
| Type d'amortissement | `Linéaire` |
| Durée d'amortissement | `3 ans` |
| Date de début de garantie | `20-01-2026` |
| Durée de garantie | `36 mois` |

3. **Sauvegarder** → observer la **Valeur nette comptable** et le **TCO** calculés automatiquement

### Partie 4 — Créer un contrat de maintenance

`Gestion` → `Contrats` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Support DELL ProSupport` |
| Type | `Maintenance` |
| Date de début | `20-01-2026` |
| Durée initiale du contrat | `36 mois` |
| Reconduction | `Manuelle` |
| Alertes par mail | `1 mois avant` |

Puis sur la fiche de **PC-REN-01** → onglet **Contrats** → associer `Support DELL ProSupport`.

### Questions de bilan

| Question | Réponse |
|----------|---------|
| Quelle est la valeur nette comptable de PC-REN-01 après 1 an ? | |
| Que signifie TCO mensuel = 12 € ? | |
| Quand expire la garantie de PC-REN-01 ? | |

---

## Liens utiles
- [Gestion | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/tabs/management)

---