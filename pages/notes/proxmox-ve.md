# Proxmox VE

### 2.1 Origine et positionnement


Proxmox VE est né en 2007 à Vienne, en Autriche. Proxmox Server Solutions GmbH, la société fondatrice, avait un objectif clair : proposer une alternative open source aux solutions de virtualisation d'entreprise propriétaires dominées par VMware. La première version sortait la même année que l'intégration de KVM dans le noyau Linux — ce n'est pas un hasard.

Le logiciel est publié sous licence **GNU AGPL v3**, ce qui signifie que le code source est entièrement disponible et que toute modification doit elle-même être publiée sous les mêmes termes. Le modèle économique repose sur les abonnements de support — pas sur le logiciel lui-même. Proxmox VE se télécharge, s'installe et s'utilise gratuitement ; l'abonnement apporte l'accès aux dépôts testés pour la production et au support professionnel.

Quelques jalons importants dans son histoire :

- **2007** : première version, KVM uniquement, interface AJAX
- **2014** : remplacement d'OpenVZ par LXC pour les conteneurs
- **2016** : intégration native de ZFS
- **2020** : sortie de Proxmox Backup Server (PBS), outil de sauvegarde dédié
- **2024** : sortie de Proxmox Data Management (PDM)
- **2025** : Proxmox VE 9, basé Debian 13 Trixie, noyau 6.8+

Pour une première approche visuelle et un tour d'horizon complet de la plateforme avant d'entrer dans les détails techniques, cette vidéo de Florian Burnel (IT-Connect) est une excellente introduction :

