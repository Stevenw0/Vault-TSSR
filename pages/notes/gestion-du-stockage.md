# Gestion du stockage

## Nomenclature des unités de stockage

Unité de stockage = disque dur, SSD, …

Sur Linux, tout est fichier, y compris le matériel, dont les unités de stockage.

Les périphériques matériel (devices) sont dans `/dev/`.  
Le nom des unités de stockages dépend de la connectique :

- IDE/PATA (historique) : `/dev/hd[a-z]+[1-9]+`
- SATA/SCSI/SAS : `/dev/sd[a-z]+[1-9]+`
- NVMe : `/dev/nvme[0-9]+n[1-9]p[1-9]`

Liste des unités de stockage :

```
lsblk 
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda      8:0    0   30G  0 disk 
├─sda1   8:1    0   29G  0 part /
├─sda2   8:2    0    1K  0 part 
└─sda5   8:5    0  975M  0 part [SWAP]
sr0     11:0    1 1024M  0 rom

lsblk -fs
```

Moyen mnémotechnique : lsblk = list block devices  
block devices = unités de stockage

Pour aller plus loin : [What is a block device?](https://unix.stackexchange.com/questions/259193/what-is-a-block-device/259200#259200)

## Les techniques de partitionnement (natif et LVM)

### Partitionnement d’une unité de stockage

**Avantages des partitions**

- Meilleur contrôle de la saturation de l’espace de stockage
- Limitation des risques d’incohérence d’un système de fichiers
- Possibilité de varier les systèmes de fichiers
- Contrôle des droits d’accès
- …

**Outils de partitionnement**

- fdisk
- cfdisk
- parted
- gparted
- …

**Types de partitionnement**

- MBR : Master Boot Record (512 premiers octets de l’unité)
    - Trois types de partitions
        - Partitions primaires -> MBR -> Limitées à 4 (utilisent les numéros de 1 à 4)
        - Partitions secondaires/logiques -> Définies au sein d’une partition primaire transformée en partition _étendue_ (la numérotation débute à 5)
        - Taille max d’une partition : 2To
- GPT : GUID Partition Table
    - Un seul type de partition
    - Pas de réelle limitation -> max (temporaire) de 128 partitions
    - Taille max d’une partition 9 Zo (Go, To, Po, Eo, Zo, Yo)
    - Adapté pour les système UEFI

**Inconvénients des partitions**

- Taille limitée et statique
- Taille max

**Alternative : LVM**  
LVM : Logical Volume Manager

### Présentation LVM

LVM permet une gestion plus flexible et évolutive du stockage et des partitions.

- **Physical Volume (PV)** : une unité de stockage entière (voire une partition) utilisable par LVM
- **Volume Group (VG)** : pool d’espace disponible, fourni par un ensemble de PVs (qui peuvent être changés à chaud)
- **Logical Volume (LV)** : équivalent d’une partition

Partitionnement natif : Unité -> Partition -> FS  
LVM : Unité -> Groupe de volumes -> Volume Logique -> FS

![](https://hedgedoc.dawan.fr/uploads/upload_eb9f67f428910d9036d4d147d36d5cb5.png)

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Utilitaires-LVM--paquet-Debian-lvm2 "Utilitaires-LVM--paquet-Debian-lvm2")Utilitaires LVM : paquet Debian _lvm2_

Si besion, on installe l’environnement LVM par :

```
sudo apt update
sudo apt install lvm2
```

**Ajouter une unité de stockage à la VM**

1. Dans VBox, Configuration > section Stockage > liste des périphériques > contrôleur SATA > sur la même ligne, bouton “icône de disque dur avec un plus”
    
2. Dans la boîte de dialogue Hard Disk Selector, bouton Créer :
    

- (Optionnel) Changer le chemin du fichier `deby-s47-2025_1.vdi` sera créé
- Taille : 10Go
- Type : VDI
- Décocher Pre-allocate Full Size

3. Attacher `deby-s47-2025_1.vdi` à la VM : sélectionner le disque dur (dans la partie Not Attached) > bouton Choose
4. Dans la boîte de dialogue Configuration, bouton OK
5. Démarrer la VM et constater que l’OS voit bien le nouveau disque dur

```
lsblk 
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda      8:0    0   30G  0 disk 
├─sda1   8:1    0   29G  0 part /
├─sda2   8:2    0    1K  0 part 
└─sda5   8:5    0  975M  0 part [SWAP]
sdb      8:16   0   10G  0 disk 
sr0     11:0    1 1024M  0 rom
```

**Commandes de base**

Remarque : toutes les commandes LVM nécessitent les droits, alors on va passer de l’utilisateur `stagiaire` à `root`, avec :

```
sudo -i
# ou
sudo --login
```

Création d’un PV à partir de /dev/sdb

```
pvcreate /dev/sdb
```

Liste des PVs

```
pvs
pvdisplay
```

Création d’un VG à partir de /dev/sdb

```
vgcreate rootvg /dev/sdb
```

Liste des VG

```
vgs
vgdisplay
```

Création d’un LV

```
lvcreate -n testlv -L 2G rootvg
```

Liste des LV

```
lvs
lvdisplay [-m]
```

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Micro-TP-LVM "Micro-TP-LVM")Micro-TP LVM

_**Consigne**_ : Comprendre le résultat désiré de la commande ci-dessous, puis résoudre le problème d’espace qui empêche la commande de réussir.

```
lvextend -L 12G /dev/rootvg/testlv
```

Clique ici pour avoir un indice pour comprendre le résultat désiré de la commandeÉtant donné les commandes lvcreate, lvdisplay, et leurs effets, le nom de la commande lvextend devrait vous donner une idée de ses effets. Sinon, lire man lvextend.  
Clique ici pour avoir des indices sur la résolution du problème d'espaceDans VirtualBox, ajouter un disque dur de 10Gio (par exemple) à votre VM et l'intégrer au volume group rootvg (avec notamment les commandes `pvcreate`, et `vgextend`).  

**Solution**

- Ajout d’une unité de stockage (ex. /dev/sdc, 10Go)
- Intégration dans LVM

```
pvcreate /dev/sdc
```

- Extension du VG

```
vgextend rootvg /dev/sdc
```

- Extension du LV

```
lvextend -L 12G /dev/rootvg/testlv
# ou
lvextend -L 12G rootvg/testlv
```

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Les-diff%C3%A9rents-syst%C3%A8mes-de-fichiers "Les-différents-systèmes-de-fichiers")Les différents systèmes de fichiers

Rôle d’un système de fichiers (File System ou FS) : gestion des données sur l’espace de stockage (journalisation, fragmentation, méta-données, contrôle d’accès, …)

Différents FS :

- Natifs
    - ext4 (majorité des usages)
        - Taille FS max : 1Eo
        - Taille fichier max : 16To
    - xfs (usage : serveur de stockage, FS par défaut sur RHEL)
        - Taille FS max : 18Eo
        - Taille fichier max : 9Eo
    - btrfs (usage : fonctionnalités avancées comme snapshots)
    - zfs (usage : fonctionnalités avancées comme RAID-Z, non-inclus dans le noyau Linux, souvent utilisé dans Proxmox)
- Non-natifs
    - ntfs (Windows: r/w si arrêt normal)
    - vfat, fat32, fat16 (Windows)
        - Taille FS max : 16To
        - Taille fichier max : 4Go
    - exfat (Windows, successeur des fat32 & co)
        - Taille FS max : 64Zo
        - Taille fichier max : 16Eo
    - hfs+ (Mac : r/w si arrêt normal)

Rappel des multiples d’octets : ko, Mo, Go, To, Po (pétaoctet), Eo (exaoctet), Zo (zettaoctet)

**Création d’un FS ext4 sur un LV**

```
mkfs -t ext4 /dev/rootvg/testlv
```

**Création d’un FS xfs sur un autre LV**  
**Remarque** : les utilitaires xfs (paquet `xfsprogs`) ne sont pas forcément installés par défaut

```
apt install -y xfsprogs
lvcreate -n test2lv -L 5G rootvg
mkfs -t xfs /dev/rootvg/test2lv
```

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Montage-d%E2%80%99un-FS "Montage-d’un-FS")Montage d’un FS

Le montage est l’opération permettant l’utilisation de l’espace d’un FS. Il est réalisé manuellement par la commande :

```
mkdir /mnt/flexible_storage
mount [options] /dev/rootvg/testlv /mnt/flexible_storage/
```

La commande `mount` sans arguments, indique les montages courants.

La commande mount n’est pas persistante.  
Pour rendre un montage persistant, il faut adapter le fichier `/etc/fstab`.

**Remarque**

Les noms `/dev/sd[a-z]+` sont attribués selon l’ordre des ports SATA/temps d’initialisation. Il se peut qu’ils varient d’un boot à l’autre (notamment en cas de branchements modifiés). Il est donc fortemment conseillé d’utiliser les UUID des systèmes de fichiers au lieu du nom du périphérique. Ces UUID sont obtenus par la commande `blkid`.

Exemple d’un fichier `/etc/fstab` :

```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# systemd generates mount units based on this file, see systemd.mount(5).
# Please run 'systemctl daemon-reload' after making changes here.
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/sda1 during installation
UUID=f0b37be0-5edd-462c-85fc-c8bdb438fbe4 /               ext4    errors=remount-ro 0       1
# swap was on /dev/sda5 during installation
UUID=30323cde-3f49-447a-8497-90b7f287cb43 none            swap    sw              0       0
/dev/sr0        /media/cdrom0   udf,iso9660 user,noauto     0       0
/dev/rootvg/testlv /mnt/flexible_storage auto defaults
```

Remarques

- L’UUID est attaché au système de fichiers, il changera donc si on recrée un autre FS sur le même périphérique. Il faudra donc adapter _/etc/fstab_ en conséquence.
- Il n’y a pas lieu d’utiliser les UUID en cas de LVM (le nom/chemin du LV ne dépend pas d’un ordre d’initialisation ou du FS qu’il y a dessus).

Après avoir fait persister le montage de `/dev/rootvg/testlv` dans `/etc/fstab` :

```
umount /mnt/flexible_storage

mount -a

systemctl daemon-reload
```

**Redimensionnement d’un FS**

La commande dépend du FS :

- ext4 : `resize2fs`
- xfs : `xfs_growfs` (Attention : ne peut pas être réduis)
- btrfs : `btrfs filesystem resize`

**Bonus** : pour gérer le pourcentage de blocs réservés à root dans une partition formatée en ext4, par exemple :

```
# Passer le pourcentage de 5% (valeur par défaut) à 2%
sudo tune2fs -m 2 /dev/rootvg/testlv
```

Pour aller plus loin, voir : [https://unix.stackexchange.com/questions/7950/reserved-space-for-root-on-a-filesystem-why](https://unix.stackexchange.com/questions/7950/reserved-space-for-root-on-a-filesystem-why)

**Interaction avec LVM**

L’option -r de la commande `lvextend` permet de déclencher automatiquement le redimensionnement d’un FS (non pris en charge dans le cas de btrfs).

```
lvextend -r -L 14G /dev/rootvg/testlv
```

Fonctionne aussi pour réduire la taille d’un LV et de son FS en même temps (dans la limite de la taille minimale possible, en fonction de la quanité de données stockées dans le FS) :

```
lvreduce -r -L -1G /dev/rootvg/testlv
```