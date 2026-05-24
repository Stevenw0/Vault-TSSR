# 10 — Les imprimantes dans GLPI

> [!NOTE] Objectif de cette section
> Référencer une imprimante dans GLPI, gérer les cartouches, alimenter le stock et les installer sur l'imprimante.

---

## Les imprimantes dans le parc

`Parc` → `Imprimantes`

GLPI dispose d'une section dédiée aux imprimantes, distincte des autres équipements. Elle propose des champs spécifiques : compteurs de pages, gestion des cartouches.

Dans le menu `Parc`, on trouve aussi deux sous-sections liées :
- **Cartouches** : gestion des modèles de cartouches et du stock
- **Consommables** : autres consommables (papier, courroies de transfert…)

---

## Créer une imprimante

`Parc` → `Imprimantes` → **+ Ajouter**

### Champs principaux

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Nom** | Identifiant de l'imprimante dans GLPI | `IMP-NAN-OPENSPACE-01` |
| **Statut** | État de l'équipement | En inventaire |
| **Lieu** | Emplacement physique | Nantes > Open space |
| **Type** | Nature de l'imprimante | Laser multifonction |
| **Fabricant** | Marque | Brother |
| **Modèle** | Référence exacte | MFC-L8900CDW |
| **Numéro de série** | Sur l'étiquette de l'appareil | BRO-2024-001 |
| **Numéro d'inventaire** | Numéro interne | IMP-001 |
| **Technicien responsable** | Technicien en charge | thomas.martin |
| **Compteur de page initial** | Valeur au moment de l'ajout dans GLPI | 0 |

> [!TIP] Convention de nommage
> Adopter une convention cohérente dès le départ : `TYPE-SITE-EMPLACEMENT-NUMÉRO`.
> Exemple : `IMP-NAN-OPENSPACE-01`, `IMP-NAN-LABO-01`. Cela facilite la recherche et les statistiques.

---

## Gérer les cartouches

La gestion des cartouches dans GLPI suit un processus en 4 étapes :

```
1. Créer le modèle    →   2. Lier le modèle      →   3. Alimenter le stock   →   4. Installer sur
   de cartouche           d'imprimante compatible      (onglet Cartouches)          l'imprimante
 (Parc → Cartouches → +)  (onglet Modèles                                          (fiche imprimante
                           d'imprimantes)                                           → onglet Cartouches
                                                                                    → Installer)
```

### Étape 1 — Créer un modèle de cartouche

`Parc` → `Cartouches` → **+ Ajouter**

> [!NOTE] Modèle ≠ Cartouche
> Le **modèle** est la référence (ex : "Brother TN-247BK"). Les **cartouches** sont les unités physiques en stock. On crée le modèle une seule fois par référence, puis on ajoute autant d'unités que nécessaire.

| Champ | Description | Exemple |
|-------|-------------|---------|
| **Nom** | Référence commerciale | `Brother TN-247BK (Noir)` |
| **Type** | Type de cartouche | Toner |
| **Référence** | Référence fabricant | `TN-247BK` |
| **Fabricant** | Marque | Brother |
| **Seuil d'alerte** | Stock minimum avant alerte GLPI | `2` |
| **Objectif de stock** | Quantité cible à maintenir | `4` |

Cliquer sur **+ Ajouter** pour créer le modèle.

### Étape 2 — Lier le modèle d'imprimante compatible

Depuis la fiche du modèle → onglet **Modèles d'imprimantes** → sélectionner le modèle dans la liste → **Ajouter**

Cela permet à GLPI de savoir quelles cartouches sont compatibles avec quels modèles d'imprimantes — utile quand le parc contient plusieurs modèles différents.

### Étape 3 — Alimenter le stock

Depuis la fiche du modèle → onglet **Cartouches**

On voit deux sections :
- **Cartouches en cours d'utilisation** : cartouches installées sur une imprimante
- **Cartouches usagées** : cartouches épuisées et retirées

Pour ajouter du stock : saisir la quantité dans le champ en haut → cliquer **Ajouter des cartouches**.

### Étape 4 — Installer les cartouches sur l'imprimante

Depuis la fiche de l'imprimante → onglet **Cartouches**

Un menu déroulant liste tous les modèles disponibles en stock. Sélectionner le modèle, indiquer le nombre à installer dans le champ **Compte**, puis cliquer **Installer**.

Les cartouches installées apparaissent dans la section **Cartouches en cours d'utilisation**.

> [!TIP] Cartouches usagées
> Quand une cartouche est épuisée, on la retire depuis ce même onglet — elle bascule dans "Cartouches usagées". GLPI garde ainsi l'historique complet des consommables de l'imprimante.

---

## Consommables vs Cartouches

| | Cartouches | Consommables |
|--|-----------|-------------|
| **Usage** | Spécifiques aux imprimantes | Tout type d'équipement |
| **Exemples** | Toners, cartouches d'encre | Papier, courroie de transfert, câbles |
| **Menu** | `Parc → Cartouches` | `Parc → Consommables` |
| **Installation** | Onglet dédié dans la fiche imprimante | Non lié directement |

---

## Atelier — Référencer l'imprimante du Fournil Doré

> **Contexte** : Thomas Martin doit référencer l'imprimante réseau de la boutique dans GLPI et mettre en place le suivi des cartouches.

---

### Étape 1 — Créer l'imprimante

Connectez-vous avec **thomas.martin** et créez l'imprimante :

`Parc` → `Imprimantes` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `IMP-NAN-OPENSPACE-01` |
| Statut | En inventaire |
| Lieu | `Nantes > Open space` |
| Type | Laser multifonction |
| Fabricant | Brother |
| Modèle | MFC-L8900CDW |
| Numéro de série | `BRO-2024-001` |
| Numéro d'inventaire | `IMP-001` |
| Technicien responsable | thomas.martin |

Cliquer sur **+ Ajouter**.

---

### Étape 2 — Créer les modèles de cartouches

La Brother MFC-L8900CDW utilise des toners TN-247 (4 couleurs). Créez les 2 modèles suivants :

`Parc` → `Cartouches` → **+ Ajouter**

**Cartouche 1 :**

| Champ | Valeur |
|-------|--------|
| Nom | `Brother TN-247BK (Noir)` |
| Référence | `TN-247BK` |
| Fabricant | Brother |
| Seuil d'alerte | `2` |
| Objectif de stock | `4` |

**Cartouche 2 :**

| Champ | Valeur |
|-------|--------|
| Nom | `Brother TN-247C (Cyan)` |
| Référence | `TN-247C` |
| Fabricant | Brother |
| Seuil d'alerte | `1` |
| Objectif de stock | `2` |

> Pour aller plus loin : créer également `TN-247M` (Magenta) et `TN-247Y` (Yellow) avec les mêmes paramètres que le Cyan.

---

### Étape 3 — Lier le modèle d'imprimante

Pour chaque modèle de cartouche créé → onglet **Modèles d'imprimantes** → sélectionner `MFC-L8900CDW` → **Ajouter**.

---

### Étape 4 — Alimenter le stock

Pour chaque modèle → onglet **Cartouches** → saisir la quantité → **Ajouter des cartouches** :

| Modèle | Quantité |
|--------|---------|
| Brother TN-247BK (Noir) | 3 |
| Brother TN-247C (Cyan) | 2 |

---

### Étape 5 — Installer les cartouches sur l'imprimante

Depuis `Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` → onglet **Cartouches**

| Modèle | Compte | Action |
|--------|--------|--------|
| Brother TN-247BK (Noir) | 1 | Cliquer **Installer** |
| Brother TN-247C (Cyan) | 1 | Cliquer **Installer** |

Vérifier que les 2 cartouches apparaissent bien dans la section **Cartouches en cours d'utilisation**.

---

### Étape 6 — Vérifier

Depuis `Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` :
- ✅ Les informations sont complètes (lieu, N° de série, N° d'inventaire)
- ✅ L'onglet **Cartouches** affiche 2 cartouches en cours d'utilisation

Depuis `Parc` → `Cartouches` :
- ✅ Les 2 modèles apparaissent dans la liste
- ✅ Le stock de chaque modèle a diminué d'une unité (installée sur l'imprimante)

---

## Résumé du chapitre

| Concept | À retenir |
|---------|-----------|
| Convention de nommage | `TYPE-SITE-EMPLACEMENT-NUMÉRO` — ex : `IMP-NAN-OPENSPACE-01` |
| Modèle de cartouche | Référence créée dans `Parc → Cartouches` — une seule fois par référence |
| Modèles d'imprimantes | Onglet du modèle de cartouche — lier les imprimantes compatibles |
| Stock | Ajouté depuis l'onglet Cartouches du modèle |
| Seuil d'alerte | GLPI alerte quand le stock passe en dessous de cette valeur |
| Installation | Depuis la fiche imprimante → onglet Cartouches → sélectionner → Installer |

---

## Liens intéressent
- [Imprimantes | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assets/printers)

---