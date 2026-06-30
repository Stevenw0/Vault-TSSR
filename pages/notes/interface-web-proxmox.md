# Interface web Proxmox

### 4.1 Connexion et structure générale


L'interface web de Proxmox VE est accessible à l'adresse `https://IP:8006`. Le port 8006 est le port par défaut de `pveproxy`, le serveur web intégré à Proxmox. Le certificat SSL est auto-signé par défaut — votre navigateur affichera un avertissement que vous pouvez accepter (nous verrons comment remplacer ce certificat dans une session avancée).

À la connexion, le formulaire demande trois éléments : le nom d'utilisateur (par défaut `root`), le mot de passe et le **realm** (domaine d'authentification). Deux realms existent par défaut :

- **pam** : authentification Linux PAM — `root@pam` correspond au compte root du système Debian sous-jacent
- **pve** : authentification Proxmox interne — les comptes créés directement dans Proxmox

Une fois connecté, l'interface se divise en trois zones : l'arborescence à gauche, le panneau de contenu central, et les logs d'activité en bas. L'arborescence est hiérarchique : `Datacenter` → nom du nœud (par exemple `pve`) → VMs et conteneurs.

     alt="Interface web Proxmox VE — écran de connexion et vue principale"
     style="display:block; margin:auto; width:90%">

### 4.2 Exploration du nœud


En cliquant sur le nom de votre nœud dans l'arborescence, le panneau central affiche les sections de gestion du nœud. Prenons le temps de les parcourir une par une — cette exploration est la première chose à faire sur un nouveau nœud Proxmox.

**Summary** affiche l'état général : utilisation CPU, mémoire, stockage, et le résumé des VMs et conteneurs. C'est votre tableau de bord opérationnel.

**Shell** ouvre un terminal web directement dans l'interface. Vous êtes connecté en tant que root sur le système Debian. C'est l'équivalent d'un SSH, sans avoir à configurer quoi que ce soit. Pratique pour les opérations ponctuelles, mais pour un travail régulier en CLI, SSH reste plus confortable.

**Network** liste les interfaces réseau configurées sur le nœud : bridges (`vmbr0`, `vmbr1`...), interfaces physiques, bonds. C'est ici que vous configurez le réseau de management et les bridges utilisés par vos VMs.

**DNS** permet de configurer les serveurs DNS et le domaine de recherche du nœud lui-même.

**Time** gère la synchronisation NTP. Un nœud Proxmox bien synchronisé est essentiel pour le clustering et les certificats.

**Certificates** permet de remplacer le certificat SSL auto-signé, notamment par un certificat Let's Encrypt si le nœud est accessible depuis Internet.

**Repositories** liste et permet de modifier les dépôts APT configurés — c'est ici que nous allons agir dans quelques minutes pour basculer vers le dépôt no-subscription.

**Updates** déclenche `apt update` et liste les paquets disponibles depuis l'interface graphique.

**Storage** affiche l'état des stockages configurés sur ce nœud.

> [!WARNING]
> **Erreur fréquente :** modifier la configuration réseau depuis l'interface web sans avoir accès physique ou hors-bande au serveur. Si une erreur de configuration réseau est appliquée, vous perdez l'accès à l'interface. Proxmox propose un mode "Apply Configuration" qui vous laisse un délai pour confirmer — utilisez-le.


📖 Documentation : [pve.proxmox.com/wiki/Web_Interface](https://pve.proxmox.com/wiki/Web_Interface)
> Ressource : [Découvrir l'interface web Proxmox VE — IT-Connect](https://www.it-connect.fr/decouvrir-linterface-de-proxmox-ve/)

---

