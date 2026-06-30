# Pile logicielle Proxmox

Proxmox VE n'est pas un système d'exploitation écrit de zéro. C'est une surcouche spécialisée construite sur Debian, ce qui présente un avantage décisif : l'immense écosystème Debian est disponible, les administrateurs Linux s'y retrouvent immédiatement, et la stabilité de Debian sert de fondation éprouvée.

---

Les composants s'empilent ainsi :

Le **noyau Linux patché par Proxmox** (`pve-kernel`) inclut des correctifs spécifiques pour améliorer les performances de virtualisation et intégrer certaines fonctionnalités en avance par rapport au noyau Debian standard. Il coexiste avec le noyau Debian, mais Proxmox démarre sur le sien.

**QEMU/KVM** gère les machines virtuelles. Chaque VM tourne comme un processus QEMU normal, avec accélération KVM. Proxmox enveloppe QEMU derrière son propre système de configuration (`/etc/pve/qemu-server/<vmid>.conf`).

**LXC** (Linux Containers) gère les conteneurs. Les conteneurs Proxmox sont des conteneurs système — pas des conteneurs applicatifs comme Docker. Ils ont leur propre init, leurs propres services, leur propre réseau — mais partagent le noyau de l'hôte.

**pmxcfs** est le système de fichiers en cluster de Proxmox, basé sur SQLite et répliqué via Corosync. Il stocke toute la configuration de la plateforme dans `/etc/pve/`. Même sur un nœud standalone, pmxcfs est présent et actif.

**Corosync** assure la communication entre nœuds dans un cluster. Même sans cluster, il est chargé — il reste en attente de pairs.

**L'API REST** et l'interface web (`pveproxy`) donnent accès à toutes les fonctions via HTTPS. L'interface graphique est entièrement construite au-dessus de cette API — ce que vous faites dans l'interface, vous pouvez le faire avec `curl` ou `pvesh`.

> [!INFO]
> **À retenir :** Tout ce que vous configurez dans Proxmox VE est stocké dans `/etc/pve/`. Ce répertoire est le cerveau de votre plateforme.

