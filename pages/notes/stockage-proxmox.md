# Stockage Proxmox

Après une installation standard, Proxmox configure automatiquement deux espaces de stockage locaux, visibles dans `Datacenter → Storage`.

**`local`** est un stockage de type "Directory" qui pointe vers `/var/lib/vz/`. Il stocke les ISOs téléchargées, les templates de conteneurs (CT templates), et les sauvegardes. Ce type de stockage est basé sur le système de fichiers de la machine — ext4 ou XFS selon la partition racine. Il est simple, compatible avec tout, mais n'offre pas les performances d'un stockage bloc.

**`local-lvm`** est un stockage de type "LVM-Thin". Il s'appuie sur un pool LVM-thin créé dans le groupe de volumes `pve` lors de l'installation. Ce stockage est destiné aux disques des VMs et des conteneurs. LVM-thin permet la création rapide de volumes (thin provisioning), les snapshots instantanés, et des performances proches du natif grâce à l'accès bloc direct.

La distinction entre stockage fichier et stockage bloc est fondamentale en virtualisation :

Un **stockage fichier** (Directory, NFS) stocke les disques de VMs comme des fichiers image (`.qcow2`, `.raw`, `.vmdk`). L'avantage est la portabilité et la simplicité — un fichier `.qcow2` peut se copier, se déplacer, s'inspecter. L'inconvénient est une surcharge liée à la couche système de fichiers hôte.

Un **stockage bloc** (LVM-Thin, iSCSI, RBD Ceph) attribue à chaque disque VM un volume bloc dédié. Il n'y a pas de système de fichiers intermédiaire — le disque VM lit et écrit directement sur le volume. Les performances sont meilleures, et les snapshots sont instantanés, mais les disques ne sont pas des fichiers transportables.

> [!INFO]
> **À retenir :**
> - `local` = ISOs et templates.
> - `local-lvm` = disques de VMs et conteneurs. Cette séparation reflète la distinction entre stockage fichier (portabilité) et stockage bloc (performance).


### 3.6 Présentation des stockages réseau


Proxmox VE supporte plusieurs protocoles de stockage réseau que nous présentons ici conceptuellement — les configurations pratiques peuvent être détaillées dans des notes dédiées.

**NFS (Network File System)** permet de monter un partage réseau comme un répertoire local. Dans Proxmox, un stockage NFS peut héberger des ISOs, des sauvegardes et des images disque au **format fichier**. Simple à mettre en place, il convient bien aux environnements de taille modeste.

**iSCSI** transporte des commandes SCSI sur IP. Un target iSCSI expose des LUNs (Logical Unit Numbers) que Proxmox peut voir comme des **disques bloc**. On peut ensuite utiliser LVM sur ces disques pour créer des volumes VM. Les performances dépendent largement de la qualité du réseau et du stockage cible.

**Ceph** est une solution de **stockage distribué** open source qui se distingue fondamentalement des autres : il n'y a pas de serveur central, pas de NFS, pas de SAN. Les données sont réparties sur l'ensemble des nœuds du cluster. Proxmox intègre Ceph nativement — vous pouvez déployer et gérer un cluster Ceph directement depuis l'interface web de Proxmox. Ceph mérite une note dédiée.

> [!INFO]
> **À retenir :**
> - NFS = simple, pour ISOs et backups.
> - iSCSI = stockage bloc réseau, performances dépendantes du réseau.
> - Ceph = stockage distribué haute disponibilité, entièrement intégré à Proxmox.


---

