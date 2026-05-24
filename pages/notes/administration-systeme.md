### Démarrage du système : du boot à la connexion

- BIOS/UEFI
- Gestionnaire d’amorce : GRUB2
    - Propose éventuellement plusieurs solutions de boot
    - Lancement du noyau avec les bonnes options
- Lancement du noyau
    - Réinitialisation du matériel
- Lancement du premier processus -> init/systemd
    - Initialise l’heure
    - Initialise les unités de stockage
    - Montages des FS
    - Activation du swap
    - Activation des consoles virtuelles
    - Connexions possibles
    - Activation des différents services
    - Activation, le cas échéant, de l’interface graphique

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Information-sur-le-mat%C3%A9riel "Information-sur-le-matériel")Information sur le matériel

**Diverses commandes**

Incluses par défaut :

```
lscpu            # infos sur le processeur, notamment les vulnérabilités
lspci            # liste des périphériques PCI (audio, réseau, stockage, ...)
lsusb            # liste de périphériques USB
lsmem            # liste les plages de RAM disponibles
lsb_release -a   # infos standardisées sur la distribution Linux
cat /etc/os-release # infos standardisées sur la distribution Linux
```

`lsb_release` est issue du projet [Linux Standard Base](https://en.wikipedia.org/wiki/Linux_Standard_Base) de standardisation de distribution Linux. Mais le projet LSB n’est plus développé depuis 2015.  
Le fichier `/etc/os-release` fait partie de systemd et est donc maintenu.

À installer :

```
sudo apt install -y lshw hwloc
sudo lshw
lstopo --of ascii
```