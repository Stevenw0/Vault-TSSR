# Installation Proxmox VE

### 3.1 Installation bare-metal : l'installateur graphique

📖 Documentation : [pve.proxmox.com/wiki/Installation](https://pve.proxmox.com/wiki/Installation)
> Ressource : [Installer Proxmox VE pas à pas — IT-Connect](https://www.it-connect.fr/installation-proxmox-ve/)

L'installation bare-metal de Proxmox VE est la méthode recommandée pour la production. L'ISO officielle, téléchargeable sur `enterprise.proxmox.com/iso/`, embarque un installateur graphique qui prend en charge l'intégralité du processus : partitionnement, installation du système de base Debian, configuration du noyau PVE, mise en place de pmxcfs et de l'interface web.

L'installateur demande quatre informations essentielles :

**Le disque cible** : sur quel disque installer Proxmox. L'installateur propose un choix de système de fichiers pour la partition racine : ext4, xfs, ZFS (RAID-0, RAID-1, RAID-10, RAID-Z) ou btrfs. Par défaut en installation graphique, le disque est partitionné avec ext4 pour `/`, et l'espace restant est alloué à un groupe LVM nommé `pve`, dans lequel est créé un volume LVM-thin nommé `data` — c'est votre stockage `local-lvm`.

**La configuration réseau** : adresse IP, masque, passerelle, DNS. Cette configuration est appliquée à l'interface de management, qui deviendra le bridge `vmbr0` dans Proxmox.

**Le mot de passe root** et l'adresse email de l'administrateur (utilisée pour les alertes système).

**Le nom d'hôte** (FQDN) : par exemple `pve.example.local`.

> [!WARNING]
> **Erreur fréquente :** ne pas configurer un nom d'hôte pleinement qualifié (FQDN) lors de l'installation. Proxmox attend un FQDN (`pve.example.local` et non simplement `pve`). Un hostname mal configuré peut causer des problèmes dans un cluster.


### 3.2 Installation sur Debian existante


Proxmox VE peut également s'installer sur une Debian 13 Trixie existante, en ajoutant les dépôts Proxmox et en installant le métapaquet `proxmox-ve`. Cette méthode est moins courante en production car elle nécessite une Debian parfaitement configurée au préalable, mais elle est utile dans certains scénarios (serveur déjà en production que l'on souhaite convertir, environnements cloud ou VM).

La procédure officielle est documentée dans le wiki Proxmox. Elle implique notamment de configurer le hostname, d'ajouter la clé GPG de Proxmox, d'ajouter les dépôts, et d'installer `proxmox-ve`, `postfix` et `open-iscsi`. Le noyau Debian est remplacé par le noyau Proxmox au cours de ce processus.

