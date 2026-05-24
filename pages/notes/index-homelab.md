
Cet index regroupe les notes du homelab : base Docker, Kubernetes, exposition Traefik, dashboards, services applicatifs, securite et supervision. Il sert de point d'entree separe du parcours general.


## Criteres d'entree Homelab

Une note doit rejoindre cet index si elle concerne au moins un de ces points :

- un service auto-heberge ou une stack Docker ;
- Docker, Docker Compose, Portainer, Traefik, reverse proxy, TLS ou Cloudflare ;
- un domaine `monstrotech.org` ou une URL de service du homelab ;
- des chemins de stockage comme `/mnt/hdd/storage`, `/mnt/hardrive`, `/srv`, `/data` ou `/app/config` ;
- la supervision, les logs, les sauvegardes, la securite ou l'exposition de services ;
- des services comme Grafana, Prometheus, Loki, Alloy, Uptime Kuma, Vaultwarden, Homepage, Glance, Filebrowser, IT-Tools, Transmute, AdGuard, Caddy, Traefik, Tailscale, Proxmox, Nagios ou Portainer.

Quand l'agent ingere une note Homelab, il doit mettre a jour cet index en plus du workflow standard.

## Vue d'ensemble

- [Parcours Homelab](/pages/parcours/parcours-homelab.md) et [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md) - Parcours complet de lecture.
- Homelab MonstroTech - Synthese du projet TSSR et de son architecture.
- [Homelab MonstroTech - Documentation TSSR](/pages/notes/homelab-monstrotech-documentation-tssr.md) - Source compilee de la documentation projet.
- [Homelab Kubernetes - Documentation TSSR](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Source compilee du second lab Kubernetes.
- Homelab Kubernetes - Concept du lab orchestre sur Proxmox, Traefik ingress, AdGuard et Longhorn.
- Docker - Base de la conteneurisation applicative.
- Portainer - Administration graphique des stacks Docker.
- Traefik Homelab - Reverse proxy, labels Docker, reseau `proxy` et TLS.
- Adguard Homelab - DNS local et filtrage.
- Migration AdGuard vers LXC Proxmox - Bascule d'AdGuard Home vers un LXC Proxmox dedie.
- [Proxmox VE - Protegez votre serveur et les VM avec le pare-feu natif](/pages/notes/proxmox-ve-protegez-votre-serveur-et-les-vm-avec-le-pare-feu-natif.md) - Configuration du firewall Proxmox VE.
- [Atelier pfSense VMware](/pages/notes/atelier-pfsense-vmware.md) - Lab routeur/pare-feu pfSense avec WAN NAT VMware, LAN, DMZ et filtrage.
- [Atelier Suricata pfSense](/pages/notes/atelier-suricata-pfsense.md) - Ajout IDS/IPS Suricata au lab pfSense.
- [Atelier Wazuh Docker](/pages/notes/atelier-wazuh-docker.md) - Deploiement Wazuh Docker comme XDR/SIEM interne au lab pfSense.

## Docker - Base et exposition

1. [Docker](/pages/notes/docker.md) - Comprendre les conteneurs.
2. [Portainer](/pages/notes/portainer.md) - Gerer les stacks.
3. [Traefik Homelab](/pages/notes/traefik-homelab.md) - Exposer les services avec labels Docker.
4. [Adguard Homelab](/pages/notes/adguard-homelab.md) - Resoudre les domaines locaux.
5. [Migration AdGuard vers LXC Proxmox](/pages/notes/migration-adguard-vers-lxc-proxmox.md) - Isoler le DNS principal dans un LXC dedie.
6. [Homepage Docker](/pages/notes/homepage-docker.md) - Centraliser les services.

## Docker - Services ingeres

| Service | Note brute | Page compilee | Role |
|---|---|---|---|
| Homepage | [Homepage Docker](/pages/notes/homepage-docker.md) | Homepage Docker | Dashboard principal du homelab. |
| Glance | [Glance Docker](/pages/notes/glance-docker.md) | Glance Docker | Dashboard personnel et veille. |
| IT-Tools | [It-Tools Docker](/pages/notes/it-tools-docker.md) | It-Tools Docker | Boite a outils web admin/dev/reseau. |
| Filebrowser | [Filebrowser Docker](/pages/notes/filebrowser-docker.md) | Filebrowser Docker | Gestion de fichiers web. |
| Transmute | [Transmute Docker](/pages/notes/transmute-docker.md) | Transmute Docker | Conversion de fichiers. |
| Vaultwarden | [Vaultwarden Docker](/pages/notes/vaultwarden-docker.md) | Vaultwarden Docker | Coffre de mots de passe. |
| NodeCast TV | [Nodecast Docker](/pages/notes/nodecast-docker.md) | Nodecast Docker | Service media/IPTV. |
| Grafana Stack | [Grafana Stack Docker](/pages/notes/grafana-stack-docker.md) | Grafana Stack Docker | Monitoring metriques et logs. |
| Uptime Kuma | [Uptime-Kuma Docker](/pages/notes/uptime-kuma-docker.md) | Uptime-Kuma Docker | Supervision de disponibilite. |
| PatchMon | [Patchmon Docker](/pages/notes/patchmon-docker.md) | PatchMon Docker | Suivi des mises a jour systeme et security updates. |

## Kubernetes

- [Kubernetes](/pages/notes/kubernetes.md) - Base de l'orchestration de conteneurs.
- [Commandes Kubernetes](/pages/notes/commandes-kubernetes.md) - Commandes `kubectl` utiles au diagnostic.
- [PV - PVC](/pages/notes/pv-pvc.md) - Stockage persistant Kubernetes.
- [Longhorn](/pages/notes/longhorn.md) - Stockage distribue pour Kubernetes.
- Homelab Kubernetes - Documentation TSSR - Documentation brute du lab Kubernetes TSSR.
- [Homelab Kubernetes - Documentation TSSR](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Source compilee du lab Kubernetes TSSR.

## Dashboards

- [Homepage Docker](/pages/notes/homepage-docker.md) - Page d'accueil des services.
- [Glance Docker](/pages/notes/glance-docker.md) - Dashboard personnel et veille.

## Outils et fichiers

- [It-Tools Docker](/pages/notes/it-tools-docker.md) - Outils web pour l'administration et le developpement.
- [Filebrowser Docker](/pages/notes/filebrowser-docker.md) - Navigation et gestion de fichiers.
- [Transmute Docker](/pages/notes/transmute-docker.md) - Conversion de fichiers.

## Securite

- [Vaultwarden Docker](/pages/notes/vaultwarden-docker.md) - Gestionnaire de mots de passe.
- [Fail2ban](/pages/notes/fail2ban.md) - Protection de services exposes.
- Proxmox VE - pare-feu natif - Filtrage Datacenter, noeud, VM et LXC.
- [Atelier pfSense VMware](/pages/notes/atelier-pfsense-vmware.md) - Filtrage pfSense entre WAN, LAN et DMZ dans VMware.
- [Atelier Suricata pfSense](/pages/notes/atelier-suricata-pfsense.md) - IDS Suricata sur pfSense avec regles ET Open.
- [Atelier Wazuh Docker](/pages/notes/atelier-wazuh-docker.md) - XDR/SIEM Wazuh en Docker cote LAN.
- [Let's Encrypt](/pages/notes/let-s-encrypt.md) - Certificats publics.
- [mkcert](/pages/notes/mkcert.md) - Certificats locaux.

## Supervision

- [Grafana Stack Docker](/pages/notes/grafana-stack-docker.md) - Stack Prometheus, Loki, Alloy et Grafana.
- [Uptime-Kuma Docker](/pages/notes/uptime-kuma-docker.md) - Checks de disponibilite.
- [Patchmon Docker](/pages/notes/patchmon-docker.md) - Suivi des mises a jour de la VM Debian et des hosts.
- [Nagios & NCPA](/pages/notes/nagios-ncpa-supervision-it.md) - Supervision IT plus traditionnelle.

## Projet TSSR

- Homelab MonstroTech - Synthese du projet, architecture et competences TSSR demontrees.
- Homelab MonstroTech - Documentation TSSR - Documentation brute du projet.
- Homelab Kubernetes - Documentation TSSR - Documentation brute du second lab Kubernetes.
- [Migration AdGuard vers LXC Proxmox](/pages/notes/migration-adguard-vers-lxc-proxmox.md) - Documentation brute de la migration DNS AdGuard vers LXC.

## Architecture commune observee

La plupart des services suivent le meme modele :

1. Un container Docker avec `restart: unless-stopped`.
2. Des volumes persistants sous `/mnt/hdd/storage` ou `/mnt/hardrive`.
3. Le reseau Docker externe `proxy`.
4. Des labels Traefik avec `websecure`, TLS et resolver Cloudflare.
5. Une URL publique ou locale sous `monstrotech.org`.

## Points a clarifier

- TODO: deployer et documenter les agents Wazuh Windows 11 et Linux Apache.
- TODO: completer les tests Apache DMZ du lab pfSense.
- REVIEW: definir la politique de passage Suricata IDS vers IPS.
- REVIEW: choisir une convention unique entre `/mnt/hdd/storage` et `/mnt/hardrive`.
- REVIEW: harmoniser aussi les chemins Kubernetes `/mnt/HDD/...` avec la convention Homelab cible.
- REVIEW: clarifier si le lab Kubernetes doit utiliser des domaines `.local` separes ou rejoindre `monstrotech.org`.
- REVIEW: documenter la strategie de sauvegarde pour Vaultwarden, Homepage, Glance, Grafana, Loki, Uptime Kuma et PatchMon PostgreSQL.
- REVIEW: verifier que les secrets Traefik, Cloudflare et tokens d'administration restent hors des notes versionnees.
- REVIEW: maintenir la parite de configuration entre AdGuard LXC et AdGuard Docker de secours.
- TODO: definir les regles minimales du firewall Proxmox pour l'hote, les VM et les LXC du homelab.


