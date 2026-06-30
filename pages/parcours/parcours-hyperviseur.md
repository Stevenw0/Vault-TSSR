# Parcours Hyperviseur

## Objectif

Construire la couche infrastructure du lab : machine, stockage, boot, hyperviseur, VM, réseaux virtuels, pare-feu virtualise et projets de lab integres.

## Hub dédié


## Ordre conseillé

### 1. Préparer la machine et le stockage

1. [Configuration et maintenance PC](/pages/notes/configuration-et-maintenance-pc.md) - Connaître la base matérielle.
2. [Partitionnement](/pages/notes/partitionnement.md) - Comprendre les disques et partitions.
3. [UEFI](/pages/notes/uefi.md) - Situer le firmware et le démarrage.
4. [Secure Boot](/pages/notes/secure-boot.md) - Comprendre les contraintes de démarrage sécurisé.
5. [Méthode NETINSTALL](/pages/notes/methode-netinstall.md) - Installer proprement depuis le réseau.
6. [Migrer vers SSD](/pages/notes/migrer-vers-ssd.md) - Préparer une migration de stockage.

### 2. Comprendre et choisir l'hyperviseur

7. [Proxmox VE](/pages/notes/proxmox-ve.md) - Découvrir l'hyperviseur principal du lab.
8. [Virtualisation](/pages/notes/virtualisation.md) - Comprendre pourquoi et comment virtualiser.
9. [KVM](/pages/notes/kvm.md) - Situer KVM, QEMU et l'accélération matérielle.
10. [Pile logicielle Proxmox](/pages/notes/proxmox-pile-logicielle.md) - Identifier les briques utilisées par Proxmox VE.
11. [Fonctionnalités Proxmox](/pages/notes/proxmox-fonctionnalites.md) - Résumer les capacités attendues d'une plateforme de virtualisation.
12. [Installation Proxmox VE](/pages/notes/installation-proxmox-ve.md) - Installer Proxmox sur un serveur.
13. [Installation automatisée Proxmox](/pages/notes/installation-automatisee-proxmox.md) - Automatiser l'installation avec answer.toml.
14. [Stockage Proxmox](/pages/notes/stockage-proxmox.md) - Comprendre le stockage local et réseau.
15. [Interface web Proxmox](/pages/notes/interface-web-proxmox.md) - Naviguer dans l'interface d'administration.
16. [Post-installation Proxmox](/pages/notes/post-installation-proxmox.md) - Configurer dépôts, mises à jour et notification.
17. [Utilisateurs et permissions Proxmox](/pages/notes/utilisateurs-permissions-proxmox.md) - Gérer utilisateurs, groupes, rôles et ACL.
18. [Vérification d'installation Proxmox](/pages/notes/verification-installation-proxmox.md) - Contrôler qu'un nœud est sain.
19. [LXC avec Proxmox](/pages/notes/lxc-proxmox.md) - Situer les conteneurs système dans Proxmox.
20. [Namespaces et cgroups LXC](/pages/notes/lxc-namespaces-cgroups.md) - Comprendre l'isolation et la gouvernance des ressources.
21. [LXC vs Docker](/pages/notes/lxc-vs-docker.md) - Comparer conteneurs système et conteneurs applicatifs.
22. [Conteneurs LXC privilégiés et non-privilégiés](/pages/notes/conteneurs-lxc-privilegies-non-privilegies.md) - Choisir le bon mode de sécurité.
23. [Gestion LXC avec Proxmox](/pages/notes/gestion-lxc-proxmox.md) - Gérer templates, création, cycle de vie et configuration.
24. [Réseau LXC Proxmox](/pages/notes/reseau-lxc-proxmox.md) - Comprendre bridge, veth, IP statique et DHCP.
25. [Snapshots et sauvegardes LXC](/pages/notes/snapshots-sauvegardes-lxc.md) - Sauvegarder et restaurer des conteneurs.
26. [VMware ESXi](/pages/notes/vmware-esxi-hyperviseur.md) - Comparer avec un autre hyperviseur.
27. [Réseaux VMware Workstation](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md) - Comprendre NAT, bridge et host-only.
28. [Proxmox VE - pare-feu natif](/pages/notes/proxmox-ve-protegez-votre-serveur-et-les-vm-avec-le-pare-feu-natif.md) - Protéger l'hote et les VM.

### 3. Construire les réseaux de lab

29. [Double NAT](/pages/notes/double-nat.md) - Identifier les contraintes de réseau imbrique.
30. [NetBIOS](/pages/notes/netbios.md) - Revoir un service réseau historique utile en lab.
31. [PPPoE](/pages/notes/pppoe.md) - Comprendre un mode d'accès réseau.
32. [Fibre noire](/pages/notes/fibre-noir.md) - Situer les liaisons physiques dédiées.

### 4. Sécuriser le lab virtualise

33. [Fail2ban](/pages/notes/fail2ban.md) - Ajouter une protection applicative simple.

### 5. Projet integre infrastructure

34. [Documentation Lab](/pages/notes/documentation-lab.md) - Centraliser l'architecture du lab.
35. [Résumé Lab](/pages/notes/resume-lab.md) - Lire la synthèse opérationnelle.
36. [Projet SafeGuard](/pages/notes/projet-safeguard.md) - Relier virtualisation, sécurité et documentation.

## Validation

Tu sais que ce parcours est acquis si tu peux préparer une machine, choisir un hyperviseur, créer un réseau de VM cohérent, sécuriser les flux de base et documenter l'architecture du lab.
