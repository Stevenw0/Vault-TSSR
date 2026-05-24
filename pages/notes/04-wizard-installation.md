# 04 — Assistant d'installation (Wizard)

> [!NOTE] Objectif de cette section
> Parcourir l'assistant web de GLPI pour finaliser l'installation. Les conteneurs Docker doivent être démarrés (`docker compose up -d`).

Depuis la machine hôte, ouvrir un navigateur avec l'IP de la VM (interface `enp0s8`) :

```
http://[IP_DE_LA_VM]
```

---

## Langue

Sélectionner **Français** puis cliquer sur **OK**.

---

## Licence

Lire la licence GNU GPL v3 puis cliquer sur **Continuer**.

> GLPI est un logiciel libre sous licence GPL v3 — gratuit à utiliser, modifier et redistribuer.

---

## Type d'installation

Cliquer sur **Installer** (et non "Mettre à jour").

---

## Étape 0 — Vérification de compatibilité

GLPI vérifie que tous les prérequis sont présents. **Tout doit être vert.**

> [!NOTE] Installation Docker
> Avec Docker, tous les prérequis PHP et système sont déjà inclus dans l'image. Cette étape doit être entièrement verte sans action supplémentaire.

---

## Étape 1 — Connexion à la base de données

Saisir les informations de connexion définies dans le `docker-compose.yml`.

| Champ | Valeur |
|-------|--------|
| Serveur SQL | `db` |
| Utilisateur SQL | `glpi` |
| Mot de passe SQL | `glpi_pass` |

> [!TIP] Pourquoi `db` comme nom de serveur ?
> Docker Compose crée un réseau interne entre les conteneurs. Le conteneur GLPI peut joindre le conteneur MariaDB par son **nom de service** (`db`) — pas besoin d'IP.

---

## Étape 2 — Sélection de la base de données

La connexion est testée automatiquement. Si elle réussit, `glpi_db` apparaît dans la liste.

Sélectionner **glpi_db** puis cliquer sur **Continuer**.

> [!TIP] "Créer une nouvelle base de données"
> Ce champ permet de créer une BDD à la volée. On ne l'utilise pas ici — on a déjà créé `glpi_db` manuellement.

---

## Étape 3 — Initialisation de la base de données

GLPI crée les tables, importe les données par défaut et génère les clés de sécurité. Patienter jusqu'à 100 %.


Une fois terminé, la liste suivante doit apparaître :


---

## Étape 4 — Télémétrie

> [!WARNING] Décocher pour le lab
> Décocher **"Envoyer les statistiques d'usage"** — inutile dans un environnement de formation.

---

## Étape 5 — GLPI Network

Page d'information sur le support commercial GLPI-Network. Cliquer sur **Continuer** sans rien faire.

---

## Étape 6 — Installation terminée


GLPI affiche les **comptes créés par défaut** :

| Login | Mot de passe | Rôle |
|-------|-------------|------|
| `glpi` | `glpi` | Super-administrateur |
| `tech` | `tech` | Technicien |
| `normal` | `normal` | Utilisateur standard |
| `post-only` | `postonly` | Accès limité |

> [!WARNING] À faire immédiatement après connexion
> 1. Se connecter avec `glpi` / `glpi`
> 2. Créer un compte super-admin personnel
> 3. **Supprimer les 4 comptes par défaut**

Cliquer sur **Utiliser GLPI**.

---

## Supprimer le répertoire d'installation

> [!NOTE] Installation Docker
> Avec Docker, le dossier d'installation est automatiquement supprimé par l'image après le wizard. Aucune action manuelle requise.

## Liens utiles
- [Assistant d’installation — Documentation GLPI](https://glpi-install.readthedocs.io/fr/latest/install/wizard.html)

---