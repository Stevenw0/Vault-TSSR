# Parcours Homelab

## Objectif

Deployer, exposer, securiser et superviser des services self-hosted avec conteneurs, Kubernetes, reverse proxy, DNS, monitoring et dashboards.

## Hub dedie


## Ordre conseille

### 1. Comprendre les briques applicatives

1. [API](/pages/notes/api.md) - Comprendre les interfaces entre services.
2. [IaaS, PaaS et SaaS](/pages/notes/iaas-paas-saas.md) - Situer les modeles de services.
3. [Socket](/pages/notes/socket.md) - Comprendre la communication applicative.
4. [Middleware](/pages/notes/middleware-intergiciel.md) - Situer les composants intermediaires.
5. [Git](/pages/notes/git.md) - Versionner la documentation et les configurations.

### 2. Conteneuriser les services

6. [Docker](/pages/notes/docker.md) - Maitriser la base des conteneurs.
7. [Portainer](/pages/notes/portainer.md) - Administrer les conteneurs avec une interface web.

### 3. Orchestrer et stocker

8. [Kubernetes](/pages/notes/kubernetes.md) - Comprendre l'orchestration.
9. [Commandes Kubernetes](/pages/notes/commandes-kubernetes.md) - Utiliser les commandes essentielles.
10. [PV et PVC](/pages/notes/pv-pvc.md) - Comprendre le stockage persistant.
11. [Longhorn](/pages/notes/longhorn.md) - Ajouter du stockage distribue.
12. [Homelab Kubernetes](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Relier Kubernetes au lab.

### 4. Exposer proprement les services

13. [Reverse Proxy](/pages/notes/reverse-proxy.md) - Comprendre l'exposition centralisee.
14. [Traefik](/pages/notes/traefik.md) - Mettre en place un reverse proxy dynamique.
15. [Traefik Homelab](/pages/notes/traefik-homelab.md) - Appliquer Traefik au lab.
16. [Caddy](/pages/notes/caddy.md) - Comparer avec une alternative simple.
17. [Let's Encrypt](/pages/notes/let-s-encrypt.md) - Gerer les certificats publics.
18. [mkcert](/pages/notes/mkcert.md) - Gerer des certificats locaux.

### 5. Ajouter reseau, acces et services

19. [Tailscale](/pages/notes/tailscale.md) - Acceder au lab via reseau prive.
20. [AdGuard](/pages/notes/adguard.md) - Filtrer DNS et publicites.
21. [AdGuard Homelab](/pages/notes/adguard-homelab.md) - Integrer AdGuard au lab.
22. [Migration AdGuard vers LXC Proxmox](/pages/notes/migration-adguard-vers-lxc-proxmox.md) - Migrer proprement un service.
23. [MTA](/pages/notes/mta.md) - Comprendre les bases mail.
24. [Comparatif messagerie](/pages/notes/comparatif-messagerie.md) - Choisir une approche mail.
25. [Configuration XiVO](/pages/notes/configuration-xivo.md) - Ajouter un service telephonie.
26. [Bot Présence](/pages/notes/bot-presence.md) - Ajouter de l'automatisation.

### 6. Superviser et documenter

27. [NCPA, NRDP et Nagios XI](/pages/notes/ncpa-nrdp-nagios-xi.md) - Remonter des controles.
28. [Nagios et NCPA](/pages/notes/nagios-ncpa-supervision-it.md) - Consolider la supervision.
29. [Grafana Homelab](/pages/notes/grafana-homelab.md) - Visualiser les metriques.
30. [Diagramme](/pages/notes/diagramme.md) - Documenter l'architecture.
31. [Diagramme](/pages/notes/diagramme.md) - Creer des schemas visuels.

### 7. Dashboards et services Docker

32. [Homepage Homelab](/pages/notes/homepage-homelab.md) - Organiser les acces du lab.
33. [Homepage Docker](/pages/notes/homepage-docker.md) - Deployer la homepage avec Docker.
34. [Glance Docker](/pages/notes/glance-docker.md) - Ajouter un dashboard leger.
35. [Filebrowser Docker](/pages/notes/filebrowser-docker.md) - Exposer des fichiers.
36. [It-Tools Docker](/pages/notes/it-tools-docker.md) - Ajouter des outils pratiques.
37. [Transmute Docker](/pages/notes/transmute-docker.md) - Ajouter un service de transformation.
38. [Vaultwarden Docker](/pages/notes/vaultwarden-docker.md) - Heberger un coffre de mots de passe.
39. [Nodecast Docker](/pages/notes/nodecast-docker.md) - Deployer un service media.
40. [Grafana Stack Docker](/pages/notes/grafana-stack-docker.md) - Deployer une stack de supervision.
41. [Uptime-Kuma Docker](/pages/notes/uptime-kuma-docker.md) - Surveiller la disponibilite.
42. [Patchmon Docker](/pages/notes/patchmon-docker.md) - Suivre les mises a jour.
43. [Atelier Wazuh Docker](/pages/notes/atelier-wazuh-docker.md) - Ajouter une brique securite applicative.

### 8. Projet integre homelab

44. [Homelab MonstroTech - Documentation TSSR](/pages/notes/homelab-monstrotech-documentation-tssr.md) - Documenter le homelab global.
45. [Homelab Kubernetes - Documentation TSSR](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Documenter la partie Kubernetes.
46. [Homelab MonstroTech](/pages/notes/homelab-monstrotech-documentation-tssr.md) - Lire la synthese du projet.

## Validation

Tu sais que ce parcours est acquis si tu peux deployer un service conteneurise, l'exposer en HTTPS, gerer son DNS/acces, le superviser et documenter son role dans le homelab.


