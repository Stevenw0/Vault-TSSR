# 03 — Installation de GLPI avec Docker

> [!NOTE] Objectif de cette section
> Déployer GLPI 11 en quelques minutes grâce à Docker Compose. Cette approche remplace l'installation manuelle de la stack LAMP et évite toute configuration Apache/PHP à la main.

---

## Pourquoi Docker ?

L'installation manuelle (Apache + PHP-FPM + MariaDB + configuration FHS) est longue et sujette aux erreurs. Docker encapsule tout dans des **conteneurs** prêts à l'emploi.

| Installation manuelle | Docker |
|----------------------|--------|
| ~1h de configuration | `docker compose up -d` |
| Gestion Apache, PHP, MariaDB séparément | Tout géré automatiquement |
| Risque d'erreur de configuration | Image testée et validée |
| Difficile à réinitialiser | `docker compose down -v` et c'est reparti |

> [!TIP] Objectif du lab
> L'objectif est d'**utiliser** GLPI, pas de devenir expert en déploiement. Docker nous permet d'arriver directement à l'essentiel.

---

## Prérequis — Installer Docker

Suivre la **méthode officielle par dépôt apt** (source : [docs.docker.com/engine/install/debian](https://docs.docker.com/engine/install/debian/)).

> [!WARNING] Ne pas utiliser le paquet `docker.io` des dépôts Debian
> Le paquet `docker.io` fourni par Debian est souvent obsolète. Toujours utiliser le dépôt officiel Docker.

### Étape 1 — Installer les dépendances et la clé GPG

```bash
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

| Commande | Rôle |
|----------|------|
| `apt install ca-certificates curl` | Installe les outils nécessaires pour télécharger des ressources HTTPS |
| `install -m 0755 -d /etc/apt/keyrings` | Crée le dossier qui contiendra les clés GPG des dépôts tiers |
| `curl -fsSL ... -o docker.asc` | Télécharge la clé GPG officielle Docker et la sauvegarde |
| `chmod a+r docker.asc` | Rend la clé lisible par tous les utilisateurs (requis par apt) |

### Étape 2 — Ajouter le dépôt Docker

```bash
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/debian
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

| Paramètre | Rôle |
|-----------|------|
| `Types: deb` | Format du dépôt (paquets binaires compilés) |
| `URIs` | URL du dépôt officiel Docker |
| `Suites` | Nom de code de la version Debian (`bookworm`, `trixie`…) — détecté automatiquement |
| `Components: stable` | Utilise uniquement les versions stables de Docker |
| `Architectures` | Architecture du CPU (`amd64`, `arm64`…) — détectée automatiquement |
| `Signed-By` | Chemin vers la clé GPG pour vérifier l'authenticité des paquets |

### Étape 3 — Installer Docker Engine et Docker Compose

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

| Paquet | Rôle |
|--------|------|
| `docker-ce` | Le moteur Docker (daemon) |
| `docker-ce-cli` | La commande `docker` en ligne de commande |
| `containerd.io` | Le runtime bas-niveau qui gère les conteneurs |
| `docker-buildx-plugin` | Plugin pour construire des images multi-architectures |
| `docker-compose-plugin` | Plugin qui ajoute la commande `docker compose` |

### Étape 4 — Permettre l'utilisation sans sudo

```bash
sudo usermod -aG docker $USER
reboot
```

| Commande | Rôle |
|----------|------|
| `usermod -aG docker $USER` | Ajoute l'utilisateur courant au groupe `docker` |
| `reboot` | Applique le nouveau groupe |

### Vérifier l'installation

```bash
docker --version
docker compose version
```

> [!NOTE] Images Docker utilisées
> - **GLPI** : [`glpi/glpi`](https://hub.docker.com/r/glpi/glpi) — image **officielle** maintenue par l'équipe GLPI
> - **MariaDB** : [`mariadb:11.4`](https://hub.docker.com/_/mariadb) — image officielle MariaDB (LTS)

---

## Préparer le dossier de travail

```bash
mkdir ~/glpi-lab && cd ~/glpi-lab
```

---

## Le fichier docker-compose.yml

```bash
nano docker-compose.yml
```

Contenu du fichier :

```yaml
services:
  glpi:
    image: glpi/glpi:11.0.6
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - glpi_data:/var/glpi
    environment:
      TZ: Europe/Paris
    depends_on:
      db:
        condition: service_healthy

  db:
    image: mariadb:11.4
    restart: unless-stopped
    volumes:
      - db_data:/var/lib/mysql
    environment:
      TZ: Europe/Paris
      MARIADB_RANDOM_ROOT_PASSWORD: "yes"
      MARIADB_DATABASE: glpi
      MARIADB_USER: glpi
      MARIADB_PASSWORD: glpi_pass
    healthcheck:
      test: mariadb-admin ping -h 127.0.0.1 -u glpi --password=glpi_pass
      start_period: 5s
      interval: 5s
      timeout: 5s
      retries: 10
    expose:
      - "3306"

volumes:
  glpi_data:
  db_data:
```

| Paramètre | Rôle |
|-----------|------|
| `glpi_data:/var/glpi` | Volume nommé : Docker gère les permissions automatiquement |
| `db_data:/var/lib/mysql` | Volume nommé pour les données MariaDB |
| `depends_on: condition: service_healthy` | GLPI attend que MariaDB soit **vraiment prêt** avant de démarrer |
| `MARIADB_RANDOM_ROOT_PASSWORD: "yes"` | Génère un mot de passe root aléatoire — plus sécurisé qu'un mot de passe fixe |
| `healthcheck` | Vérifie toutes les 5s que MariaDB répond, jusqu'à 10 tentatives |
| `expose: "3306"` | Rend le port MariaDB accessible aux autres conteneurs uniquement (pas à l'extérieur) |

> [!NOTE] Volumes nommés vs dossiers partagés
> Avec des **volumes nommés** (`glpi_data`, `db_data`), Docker crée et gère lui-même le stockage avec les bonnes permissions. Le processus dans le conteneur (qui tourne en tant que `www-data`) peut écrire sans problème.
>
> C'est la méthode recommandée par la [documentation officielle GLPI](https://help.glpi-project.org/tutorials/fr/procedures/running_glpi_on_docker).

---

## Démarrer GLPI

```bash
docker compose up -d
```

| Option | Rôle |
|--------|------|
| `up` | Crée et démarre les conteneurs définis dans `docker-compose.yml` |
| `-d` | Mode détaché : les conteneurs tournent en arrière-plan |

Vérifier que les deux conteneurs tournent :

```bash
docker compose ps
```

Le service `db` doit afficher **healthy** et `glpi` **running**.

Accéder à GLPI depuis le navigateur de la machine hôte :

```
http://[IP_DE_LA_VM]
```

> [!TIP] Retrouver l'IP de la VM
> ```bash
> ip a show enp0s8
> ```
> Utiliser l'IP de l'interface `enp0s8` (Host-Only) — c'est celle configurée au chapitre 02.

---

## Commandes Docker utiles

```bash
# Arrêter GLPI (données conservées)
docker compose stop

# Redémarrer GLPI
docker compose start

# Voir les logs en temps réel
docker compose logs -f glpi

# Réinitialiser complètement (⚠️ toutes les données sont perdues)
docker compose down -v
```

| Commande | Données conservées ? |
|----------|---------------------|
| `docker compose stop` | ✅ Oui |
| `docker compose start` | ✅ Oui |
| `docker compose down` | ✅ Oui |
| `docker compose down -v` | ❌ Non (volumes supprimés) |

---

## Suite — Assistant d'installation

L'accès à `http://[IP_DE_LA_VM]` dans le navigateur ouvre l'**assistant d'installation** de GLPI.

> Voir la section suivante → 04-wizard-installation

---

## Liens utiles

- [Image officielle glpi/glpi — Docker Hub](https://hub.docker.com/r/glpi/glpi)
- [Image officielle MariaDB — Docker Hub](https://hub.docker.com/_/mariadb)
- [Installer Docker sur Debian — Documentation officielle](https://docs.docker.com/engine/install/debian/)
- [Déployer GLPI avec Docker — Documentation officielle GLPI](https://help.glpi-project.org/tutorials/fr/procedures/running_glpi_on_docker)

---
