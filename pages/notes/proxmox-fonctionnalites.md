# Fonctionnalités Proxmox

Avant d'entrer dans le détail de Proxmox, posons les fonctionnalités qu'un hyperviseur professionnel doit couvrir. Proxmox VE coche toutes ces cases, et nous les aborderons progressivement au fil des 5 jours.

La **haute disponibilité** : si un nœud tombe, les VMs qui s'y trouvent redémarrent automatiquement sur un autre nœud du cluster. Proxmox l'implémente via son gestionnaire HA intégré, basé sur Corosync et les ressources Pacemaker.

La **gestion du stockage** : au-delà du stockage local, une plateforme de virtualisation doit s'interfacer avec NFS, iSCSI, Ceph, et d'autres systèmes de stockage partagé. Proxmox supporte nativement l'ensemble de ces protocoles.

La **sauvegarde et restauration** : protéger les VMs et conteneurs est non négociable en production. Proxmox VE intègre un gestionnaire de sauvegardes, et Proxmox Backup Server pousse cette capacité beaucoup plus loin avec la déduplication et la compression.

Les **templates et cloud-init** : créer des VMs répétitives manuellement n'est pas envisageable à l'échelle. Les templates et le support cloud-init permettent de déployer des VMs préconfigurées en quelques secondes.

La **gestion du réseau** : SDN (Software-Defined Networking), VLAN, bridges, bonds — Proxmox offre une gestion réseau complète, avec une couche SDN dédiée depuis la version 7.

---

