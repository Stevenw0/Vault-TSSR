# Parcours Administration Linux

## Objectif

Construire une base solide d'administration Linux : comprendre le système, naviguer, diagnostiquer, gérer services, stockage, droits, réseau et services courants.

## Ordre conseillé

## 1. Se repérer dans Linux

1. [Administration système](/pages/notes/administration-systeme.md) - Vue d'ensemble du rôle d'administrateur.
2. [Commandes essentielles](/pages/notes/commandes-essentielles.md) - Acquerir les commandes de base.
3. [Userland](/pages/notes/userland.md) - Situer l'espace utilisateur face au noyau.
4. [POSIX](/pages/notes/posix.md) - Comprendre le standard Unix/Linux de portabilite.
5. [Outils de base](/pages/notes/outils-de-base-core-utilities.md) - Identifier les commandes essentielles du userland.
6. [Util-linux](/pages/notes/util-linux.md) - Identifier les outils système bas niveau pour disques, montages, sessions et noyau.
7. [Utilisation de man](/pages/notes/manuel.md) - Apprendre à trouver l'aide localement.
8. [FHS](/pages/notes/fhs.md) - Comprendre l'arborescence Linux.
9. [Nano](/pages/notes/nano.md) - Editer rapidement des fichiers en terminal.
10. [Neovim](/pages/notes/neovim.md) - Avoir un editeur utilisable en terminal avancé.

## 2. Comprendre le démarrage et le noyau

11. [Boot Linux](/pages/notes/boot-linux.md) - Suivre la chaine firmware, GRUB, kernel, initramfs, systemd.
12. [Kernel Linux](/pages/notes/kernel.md) - Comprendre le rôle du noyau.
13. [Bibliothèques système](/pages/notes/bibliotheques-systeme-system-libraries.md) - Relier programmes, libc et appels système.
14. [Gestion des pilotes de périphériques](/pages/notes/gestion-des-pilotes-de-peripheriques.md) - Relier noyau, modules et matériel.
15. [sysctl](/pages/notes/systcl.md) - Modifier certains parametres noyau.
16. [WSL](/pages/notes/wsl.md) - Situer Linux dans un environnement Windows.

## 3. Comprendre l'affichage graphique

17. [Protocoles graphiques Linux](/pages/notes/protocoles-graphiques-linux.md) - Situer X11, Wayland, Mir et XWayland.
18. [Pile graphique utilisateur](/pages/notes/pile-graphique-utilisateur-graphics-stack.md) - Comprendre la chaine apps, toolkits, compositor, kernel, GPU.
19. [Toolkits graphiques](/pages/notes/toolkits-graphiques.md) - Comparer GTK, Qt et autres frameworks GUI.
20. [Wayland & Compositor](/pages/notes/wayland-compositor.md) - Comprendre le rôle de Wayland et du compositor.
21. [Compositors Linux](/pages/notes/compositors-linux.md) - Comparer Mutter, KWin, Weston, Sway, Hyprland, Niri, River et Wayfire.
22. [Interfaces graphiques Linux](/pages/notes/interfaces-graphiques-linux.md) - Choisir entre DE, WM, tiling WM et compositor.
23. [Desktop Shell](/pages/notes/desktop-shell.md) - Comprendre la couche UI visible des environnements de bureau.
24. [Quickshell](/pages/notes/quickshell.md) - Ajouter une couche UI Qt/QML au-dessus de Wayland.
25. [Zorin OS](/pages/notes/zorin-os.md) - Situer une distribution Ubuntu LTS orientee UX desktop.
26. [Bazzite OS](/pages/notes/bazzite-os.md) - Situer une distribution Fedora Atomic orientee gaming et système immuable.

## 4. Gérer processus, services et tâches

27. [Processus](/pages/notes/processus.md) - Comprendre ce qu'est un processus.
28. [Gestion des processus](/pages/notes/gestion-des-processus.md) - Observer et manipuler les processus.
29. [Daemon Linux](/pages/notes/daemon.md) - Comprendre les services de fond.
30. [Gestion des processus & services](/pages/notes/gestion-des-processus-services-init-system.md) - Comparer systemd, SysVinit, OpenRC, runit et s6.
31. [Gestion systemctl](/pages/notes/gestion-systemctl.md) - Piloter les services avec systemd.
32. [Tâches Cron](/pages/notes/taches-cron.md) - Planifier des tâches.
33. [Gestion des performances](/pages/notes/gestion-des-performances.md) - Diagnostiquer charge et ressources.

## 5. Maîtriser fichiers, stockage et démarrage des volumes

34. [Gestion du stockage](/pages/notes/gestion-du-stockage.md) - Poser les bases disque/partition.
35. [LVM](/pages/notes/lvm.md) - Comprendre volumes physiques, groupes et volumes logiques.
36. [fstab](/pages/notes/fstab.md) - Monter automatiquement les systèmes de fichiers.
37. [UUID Linux](/pages/notes/universally-unique-identifier-linux.md) - Stabiliser les montages avec des identifiants persistants.
38. [UFS](/pages/notes/ufs-unix-file-system.md) - Situer un système de fichiers Unix historique.
39. [ZFS](/pages/notes/zfs-zettabyte-file-system.md) - Comprendre pools, datasets, snapshots et RAIDZ.
40. [SWAP](/pages/notes/swap.md) - Comprendre la mémoire d'echange.
41. [Manipulation des archives](/pages/notes/manipulation-des-archives.md) - Savoir archiver et compresser.

## 6. Sécuriser les accès locaux

42. [Gestion des permissions](/pages/notes/gestion-des-permissions.md) - Comprendre chmod, chown et droits de base.
43. [Permissions avancées](/pages/notes/les-permissions-avancees.md) - Aller plus loin sur les droits.
44. [umask](/pages/notes/umask.md) - Comprendre les permissions par défaut.
45. [grep](/pages/notes/grep.md) - Rechercher efficacement dans fichiers et sorties.

## 7. Administrer le réseau et les services

46. [Commande ip](/pages/notes/ip.md) - Lire la configuration réseau.
47. [Gestion réseau avancée](/pages/notes/gestion-reseau-avancee.md) - Approfondir interfaces et outils.
48. [Hostname](/pages/notes/hostname.md) - Gérer nom de machine et résolution locale.
49. [DNS](/pages/notes/linux-dns.md) - Comprendre la résolution DNS côté Linux.
50. [Service SSH](/pages/notes/service-ssh.md) - Administrer à distance.
51. [SSH Agent](/pages/notes/ssh-agent.md) - Gérer les clés.

## 8. Publier et protéger des services

52. [Gestion des paquets](/pages/notes/gestion-des-paquets-package-manager.md) - Installer, mettre a jour et retirer proprement des logiciels.
53. [Firewall de Linux](/pages/notes/firewall-de-linux.md) - Comprendre filtrage et routage.
54. [UFW](/pages/notes/ufw.md) - Utiliser une interface simple de firewall.
55. [VPN](/pages/notes/linux-vpn.md) - Mettre en place des tunnels.
56. [Partage de fichiers](/pages/notes/partage-de-fichiers.md) - Partager des données via le réseau.
57. [Serveur web Apache](/pages/notes/serveur-web-apache.md) - Publier un service web.
58. [LAMP](/pages/notes/lamp.md) - Relier Apache, PHP et base de données.
59. [Serveurs de mail](/pages/notes/serveurs-de-mail.md) - Decouvrir la messagerie serveur.
60. [SLIP](/pages/notes/slip-serial-line-internet-protocol.md) - Culture réseau historique/specialisee.
61. [Remove App](/pages/notes/remove-app.md) - Savoir retirer proprement des applications.

## Validation

Tu sais que ce parcours est acquis si tu peux installer, diagnostiquer, sécuriser et exposer un service Linux simple en expliquant chaque couche : fichiers, droits, service systemd, réseau, logs et firewall.



