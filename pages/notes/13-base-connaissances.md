# 13 — Base de connaissances

> [!NOTE] Objectif de cette section
> Documenter les solutions récurrentes dans la base de connaissances GLPI et les rendre accessibles aux utilisateurs via la FAQ.


---

## La base de connaissances

C'est une bibliothèque d'articles : procédures, solutions connues, tutoriels.

`Outils` → `Base de connaissances`

Elle a deux usages distincts :

| Usage | Audience | Accès |
|-------|----------|-------|
| **Documentation interne** | Techniciens | Articles visibles uniquement dans l'interface standard |
| **FAQ publique** | Utilisateurs self-service | Articles marqués "FAQ" → visibles dans l'interface simplifiée |

---

## Créer un article

`Outils` → `Base de connaissances` → bouton **+**

| Champ | Description |
|-------|-------------|
| **Nom** | Titre de l'article |
| **Sujet** | Catégorie de l'article (ex: Réseau, Matériel) |
| **Contenu** | Corps de l'article — éditeur riche (texte, images, listes, tableaux) |
| **FAQ** | Cocher pour rendre l'article visible depuis l'interface simplifiée |

### Visibilité par entité

Sur l'onglet **Cibles** de l'article, on définit qui peut le voir :
- Entité seule ou entité + sous-entités
- Groupe, profil, ou utilisateur spécifique

> [!TIP] Rendre un article accessible à tous les utilisateurs du Fournil Doré
> Cible : entité "Le Fournil Doré" + **sous-entités** + **FAQ = Oui**.
> Ainsi Marie (Boutique) et Ahmed (Laboratoire) y accèdent tous les deux.

---

## Créer un article depuis un ticket résolu

C'est la méthode la plus rapide — la solution déjà rédigée devient directement un article.

1. Ouvrir le ticket résolu
2. Survoler la carte **solution** (en bleu) → cliquer sur **⋮** (trois points) → **Éditer**
3. Dans le formulaire d'édition, activer le **toggle** en bas à droite : **"Enregistrer et ajouter à la base de connaissances"**
4. Cliquer sur **Sauvegarder**

GLPI crée automatiquement un nouvel article pré-rempli avec le contenu de la solution. Il s'ouvrira pour édition finale.

> [!NOTE] Autres icônes dans le formulaire solution
> - 🔍 **Loupe** → Rechercher un article existant à lier au ticket (onglet Base de connaissances)
> - Deux listes déroulantes → Type de solution + Catégorie
> - **Toggle** → Enregistrer et ajouter à la base de connaissances

> [!TIP] Bonne pratique
> Après chaque incident récurrent, transformer la solution en article. Avec le temps, les utilisateurs peuvent se débrouiller seuls pour les problèmes simples.

---

## Atelier — Documenter les solutions du Fournil Doré

### Article 1 — FAQ publique : imprimante hors service

`Outils` → `Base de connaissances` → **+**

| Champ | Valeur |
|-------|--------|
| Nom | `Imprimante hors service — que faire ?` |
| Sujet | `Matériel` |
| FAQ | ✅ Oui |

Contenu de l'article :
```
Si l'imprimante ne répond plus :

1. Vérifier que le câble USB est bien branché des deux côtés
2. Éteindre l'imprimante, attendre 10 secondes, rallumer
3. Si le problème persiste → créer un ticket : Matériel > Imprimante
```

Cible : entité "Le Fournil Doré" + sous-entités.

### Article 2 — Interne technicien : procédure câble

| Champ | Valeur |
|-------|--------|
| Sujet | `Remplacement câble USB imprimante — procédure` |
| Catégories | `Matériel` |
| FAQ | Non (techniciens uniquement) |

Contenu : procédure détaillée, références des câbles compatibles.

### Vérification

1. Se connecter en tant que **Marie Dupont**
2. Depuis l'interface simplifiée → chercher "imprimante" dans la FAQ
3. Vérifier que l'article public apparaît mais pas l'article interne
4. Se reconnecter en tant que Thomas → vérifier que les deux articles sont visibles

---

## Liens utiles

- [Base de connaissances | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/tools/knowledgebase)
- [Documentation GLPI — Base de connaissances](https://glpi-user-documentation.readthedocs.io/fr/latest/modules/tools/knowledgebase.html)

---