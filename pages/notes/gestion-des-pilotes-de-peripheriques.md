### Configuration et gestion des pilotes de périphériques

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Le-noyau-Linux-et-ses-modules "Le-noyau-Linux-et-ses-modules")Le noyau Linux et ses modules

Le noyau n’a pas toujours eu de modules : c’était 1 seul fichier binaire, donc modification = recompilation + redémarrage

Aujourd’hui le noyau est modulaire :

- On ne peut pas mettre tous les pilotes possibles dans un même fichier. Ce serait inutilement trop gros, donc non bootable.
- Permet un changement de module sans avoir à redémarrer

**Qu’est-ce qu’un module ?**

Un fichier binaire, avec l’extension `.ko` (kernel object), contenant le code d’une fonctionnalité ou d’un pilote.

**Où se trouve le noyau ?**

```
/boot/vmlinuz-X.Y.Z-P...
```

**Comment connaître la version du noyau ?**

```
uname -r
```

**Où se trouvent les modules ?**  
Dans le répertoire `/lib/modules/$(uname -r)`

**Comment avoir la liste des modules actuellement chargés en mémoire ?**

```
lsmod
```

**Informations sur un module**

```
sudo modinfo nom_du_module
```

Exemple :

```
$ sudo modinfo e1000
filename:       /lib/modules/6.1.0-40-amd64/kernel/drivers/net/ethernet/intel/e1000/e1000.ko
license:        GPL v2
description:    Intel(R) PRO/1000 Network Driver
...
depends:
...
parm:           TxDescriptors:Number of transmit descriptors (array of int)
parm:           RxDescriptors:Number of receive descriptors (array of int)
parm:           Speed:Speed setting (array of int)
parm:           Duplex:Duplex setting (array of int)
...
```

**Déchargement d’un module**

```
sudo rmmod nom_du_module
```

`rmmod` ne fait pas de résolution des dépendances  
Décharger le module, ainsi que tous ceux dont il dépend :

```
sudo modprobe -r nom_du_module
```

Exemple : `sr_mod` (pilote lecteur CD-ROM SCSI) dépend de les modules `scsi_mod,cdrom,scsi_common`

**Chargement d’un module**

```
sudo modprobe nom_du_module
```

**Paramètres d’un module**

La commande _**modinfo**_ permet d’obtenir la liste des éventuels paramètres d’un module.

Manuellement, un paramètre s’initialise par :

```
sudo modprobe bonding miimon=100
```

_Dans cet exemple, dans le pilote qui permet de faire de l’agrégation de liens réseau (aka channel bonding/link aggregation), on configure la vérification que les liens sont actifs (via le monitoring MII, pour Media-Independant Interface) toutes les 100 ms._

L’initialisation d’un paramètre lors du chargement automatique par le noyau, se fait par un fichier du répertoire `/etc/modprobe.d`, par exemple :  
`/etc/modprobe.d/bonding.conf`

```
options bonding miimon=100
```

_**Remarque**_ : peu importe le nom du fichier dès lors qu’il possède l’extension _**.conf**_.

Pour appliquer les directives présentes dans les fichiers de configuration dans `/etc/modprobe.d/` :

1. Si le module bonding est déjà chargé, le décharger d’abord : `sudo modprobe -r bonding`
2. Recharcher le module bonding avec l’option `-v/--verbose` pour vérifier que les paramètres du fichier de conf sont bien appliqués :

```
$ sudo modprobe -v bonding
insmod /lib/modules/6.1.0-41-amd64/kernel/net/tls/tls.ko 
insmod /lib/modules/6.1.0-41-amd64/kernel/drivers/net/bonding/bonding.ko miimon=100 max_bonds=0
```