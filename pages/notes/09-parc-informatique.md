# 09 — Le parc informatique

> [!NOTE] Objectif de cette section
> Référencer les équipements du Fournil Doré dans GLPI, utiliser les gabarits pour accélérer la saisie, et comprendre le cycle de vie d'un élément de parc.

---

## Les objets du parc

`Parc` → choisir le type d'objet

| Objet | Exemples |
|-------|---------|
| **Ordinateurs** | Postes de travail, serveurs, laptops |
| **Moniteurs** | Écrans |
| **Logiciels** | Applications installées, licences |
| **Matériels réseau** | Switchs, routeurs, bornes Wi-Fi |
| **Imprimantes** | Imprimantes réseau, copieurs |
| **Téléphones** | Téléphones IP, mobiles |

---

## Créer un ordinateur

`Parc` → `Ordinateurs` → bouton **+**

### Champs principaux (onglet Principal)

| Champ | Description |
|-------|-------------|
| **Nom** | Nom de la machine (ex: `PC-BOUTIQUE-01`) |
| **Statut** | En inventaire, En réparation... |
| **Entité** | Entité de rattachement |
| **Lieu** | Emplacement physique |
| **Type** | Ordinateur de bureau, Portable, Serveur |
| **Fabricant / Modèle** | Marque et référence |
| **N° de série** | Identifiant unique constructeur |
| **N° d'inventaire** | Numéro interne au parc |
| **Système d'exploitation** | Windows, Linux... |
| **Utilisateur** | Utilisateur principal de la machine |

---

## Les gabarits de parc

Un **gabarit** pré-remplit les champs communs pour éviter de ressaisir les mêmes informations à chaque nouvel équipement.

> [!TIP] Exemple d'usage
> Gabarit "Poste de travail - Fournil Doré" : Type = Ordinateur de bureau, Fabricant = Dell, OS = Windows 11.
> Pour chaque nouveau poste, il ne reste qu'à renseigner le nom, l'entité, le lieu et le numéro de série.

`Parc` → `Ordinateurs` → icône **Gabarits** (en haut de liste) → **+**

---

## Le cycle de vie d'un équipement

Le **statut** d'un élément reflète son état dans son cycle de vie :

```
Commande ──► En inventaire ──► En réparation ──► Mis au rebut
                  │
                  └──► Prêté / En stock
```

`Configuration` → `Intitulés` → **Parc** → **Statuts des éléments** pour personnaliser la liste.

---

## Lier un équipement à un ticket

Sur la fiche d'un ticket → onglet **Éléments** → **Ajouter un élément** → choisir le type et la machine.

> [!TIP] Navigation bidirectionnelle
> Depuis la fiche d'un ordinateur, l'onglet **Tickets** liste tous les tickets qui lui sont liés.
> Depuis un ticket, on peut accéder directement à la fiche de l'équipement concerné.

---

## Atelier — Saisir le parc du Fournil Doré

### Étape 1 — Créer un gabarit pour les postes

`Parc` → `Ordinateurs` → icône **Gabarits** → **+**

| Champ | Valeur |
|-------|--------|
| Nom | `PC-` |
| Nom du gabarit | `Poste de travail - Fournil Doré` |
| Type | `Ordinateur de bureau` |
| Fabricant | `Dell` |
| Système d'exploitation | `Windows 11` |

### Étape 2 — Saisir les postes de Rennes

*À partir du gabarit* → `Parc` → `Ordinateurs` → **+** → sélectionner le gabarit

| Nom | Entité | Lieu | Utilisateur | N° de série |
|-----|--------|------|-------------|-------------|
| `PC-REN-01` | Boutique | Rennes > Open space | marie.dupont | `SN-PC-R01` |
| `PC-REN-02` | Boutique | Rennes > Open space | *(aucun)* | `SN-PC-R02` |

### Étape 3 — Saisir les postes de Nantes

| Nom | Entité | Lieu | Utilisateur | N° de série |
|-----|--------|------|-------------|-------------|
| `PC-NAN-01` | Laboratoire | Nantes > Open space | ahmed.benali | `SN-PC-N01` |
| `PC-NAN-02` | Laboratoire | Nantes > Open space | *(aucun)* | `SN-PC-N02` |

> [!NOTE] Entité ≠ Lieu en pratique
> `PC-REN-01` appartient à l'entité **Boutique** mais est physiquement situé à **Rennes**. Si demain la boutique déménage à Nantes, on change juste le lieu — l'entité reste la même. Ce sont bien deux informations indépendantes.

### Étape 4 — Saisir le serveur

`Parc` → `Ordinateurs` → **+** *(sans gabarit)*

| Champ | Valeur |
|-------|--------|
| Nom | `SRV-FOURNIL-01` |
| Type | `Serveur` |
| Entité | `Le Fournil Doré` |
| Lieu | `Rennes > Salle serveur` |
| Système d'exploitation | `Windows Server 2022` |
| N° de série | `SN-SRV-01` |

### Étape 5 — Saisir l'imprimante

`Parc` → `Imprimantes` → **+**

| Champ | Valeur |
|-------|--------|
| Nom | `IMP-REN-01` |
| Entité | `Boutique` |
| Lieu | `Rennes > Open space` |

### Vérification

1. `Parc` → `Ordinateurs` : vérifier que les 5 machines apparaissent
2. Basculer sur l'entité "Boutique" — vérifier que seuls les postes de la Boutique sont visibles
3. Ouvrir la fiche de `PC-REN-01` — vérifier que Marie est bien assignée et que le lieu affiche "Rennes > Open space"

---

## Liens utiles
- [Parc | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assets)

---