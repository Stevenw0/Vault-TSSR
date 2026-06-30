# LXC vs Docker

C'est une question qui revient très souvent : *"Puisque Docker est de la conteneurisation et LXC aussi, pourquoi ne pas utiliser Docker directement dans Proxmox ?"* ou *"Quelle est la différence concrète entre un conteneur LXC et un conteneur Docker ?"*

Pour bien comprendre, il faut distinguer deux philosophies de la conteneurisation : la **conteneurisation système** (LXC) et la **conteneurisation d'application** (Docker). Bien qu'ils s'appuient tous deux sur les mêmes briques du noyau Linux (namespaces et cgroups), ils les exploitent de manière radicalement différente pour répondre à des besoins distincts.

Voici un tableau comparatif complet pour vous aider à y voir clair :

| Critère de comparaison | Conteneurs Système (LXC / Proxmox) | Conteneurs d'Application (Docker) |
| :--- | :--- | :--- |
| **Philosophie** | **Simuler une machine physique complète** (Virtualisation légère). Le conteneur se comporte comme une VM. | **Isoler un seul processus applicatif** (Micro-services). Le conteneur ne vit que pour exécuter sa commande. |
| **Processus d'initialisation** | Exécute un gestionnaire d'initialisation complet (comme `systemd` ou `init`) en tant que PID 1. | Exécute directement l'application cible (ex: `nginx`, `python myscript.py`) en tant que PID 1. |
| **Gestion des services** | Permet de faire tourner de multiples services en parallèle (cron, syslog, sshd, bases de données) gérés par systemd. | Conçu pour ne faire tourner qu'un seul processus. Pas de démon système par défaut, pas de sshd ni de cron. |
| **Gestion du réseau** | Intégration réseau de niveau OS avec IP dédiée, configuration dans `/etc/network/interfaces` ou par DHCP, pontage direct (`vmbr`). | Réseau géré par le moteur Docker (souvent via un réseau NAT interne `docker0` avec translation de ports). |
| **Persistance des données** | Persistance par défaut sur le système de fichiers du conteneur (comme sur un disque dur classique). | Éphémère par défaut. Les données doivent être montées via des volumes ou des bind-mounts pour persister. |
| **Cycle de vie** | Longue durée. On met à jour le conteneur en se connectant dessus (via `apt upgrade`), on l'arrête, on le redémarre. | Éphémère et jetable. Pour mettre à jour, on détruit le conteneur et on en recrée un nouveau à partir d'une image mise à jour. |
| **Outil de gestion** | `pct` sous Proxmox VE, CLI `lxc` sous Linux. | CLI `docker`, `docker compose`, Kubernetes. |
| **Cas d'usage idéaux** | Hébergement de serveurs web traditionnels, bases de données classiques, serveurs de fichiers, environnements de test multi-services. | Déploiements micro-services cloud-native, pipelines CI/CD, applications découplées à scalabilité horizontale. |

> [!INFO]
> **À retenir :**
> Voyez **LXC** comme une **alternative ultra-légère aux machines virtuelles**. Vous y gérez vos utilisateurs, vos services avec `systemctl`, vos mises à jour avec `apt` comme vous le feriez sur un serveur Debian physique ou virtuel.
> Voyez **Docker** comme un **emballage pour une application**. Vous ne vous y connectez pas pour le configurer ; vous lui passez des variables d'environnement, et s'il plante, vous le jetez et en recréez un autre.


> [!WARNING]
> **Docker dans LXC (Nested Virtualization) :**
> Il est tout à fait possible de faire tourner Docker à l'intérieur d'un conteneur LXC Proxmox. C'est ce qu'on appelle l'imbrication (*nesting*). Pour cela, le conteneur LXC doit être créé en mode **privilégié** (ou disposer de permissions spécifiques) et l'option `nesting=1` doit être activée. C'est une excellente solution pour créer des environnements de dev isolés pour vos admins !


---

