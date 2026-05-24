# Parcours Hyperviseur

## Objectif

Construire la couche infrastructure du lab : machine, stockage, boot, hyperviseur, VM, reseaux virtuels, pare-feu virtualise et projets de lab integres.

## Hub dedie


## Ordre conseille

### 1. Preparer la machine et le stockage

1. [Configuration et maintenance PC](/pages/notes/configuration-et-maintenance-pc.md) - Connaitre la base materielle.
2. [Partitionnement](/pages/notes/partitionnement.md) - Comprendre les disques et partitions.
3. [UEFI](/pages/notes/uefi.md) - Situer le firmware et le demarrage.
4. [Secure Boot](/pages/notes/secure-boot.md) - Comprendre les contraintes de demarrage securise.
5. [Methode NETINSTALL](/pages/notes/methode-netinstall.md) - Installer proprement depuis le reseau.
6. [Migrer vers SSD](/pages/notes/migrer-vers-ssd.md) - Preparer une migration de stockage.

### 2. Comprendre et choisir l'hyperviseur

7. [Proxmox](/pages/notes/proxmox.md) - Decouvrir l'hyperviseur principal du lab.
8. [VMware ESXi](/pages/notes/vmware-esxi-hyperviseur.md) - Comparer avec un autre hyperviseur.
9. [Reseaux VMware Workstation](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md) - Comprendre NAT, bridge et host-only.
10. [LXC](/pages/notes/lxc.md) - Situer les conteneurs systeme cote hyperviseur.
11. [Proxmox VE - pare-feu natif](/pages/notes/proxmox-ve-protegez-votre-serveur-et-les-vm-avec-le-pare-feu-natif.md) - Proteger l'hote et les VM.

### 3. Construire les reseaux de lab

12. [Double NAT](/pages/notes/double-nat.md) - Identifier les contraintes de reseau imbrique.
13. [NetBIOS](/pages/notes/netbios.md) - Revoir un service reseau historique utile en lab.
14. [PPPoE](/pages/notes/pppoe.md) - Comprendre un mode d'acces reseau.
15. [Fibre noire](/pages/notes/fibre-noir.md) - Situer les liaisons physiques dediees.
16. [Atelier pfSense VMware](/pages/notes/atelier-pfsense-vmware.md) - Construire un pare-feu virtualise.

### 4. Securiser le lab virtualise

17. [Fail2ban](/pages/notes/fail2ban.md) - Ajouter une protection applicative simple.
18. [Atelier Suricata pfSense](/pages/notes/atelier-suricata-pfsense.md) - Ajouter de la detection reseau.

### 5. Projet integre infrastructure

19. [Documentation Lab](/pages/notes/documentation-lab.md) - Centraliser l'architecture du lab.
20. [Resume Lab](/pages/notes/resume-lab.md) - Lire la synthese operationnelle.
21. [Projet SafeGuard](/pages/notes/projet-safeguard.md) - Relier virtualisation, securite et documentation.

## Validation

Tu sais que ce parcours est acquis si tu peux preparer une machine, choisir un hyperviseur, creer un reseau de VM coherent, securiser les flux de base et documenter l'architecture du lab.

