# Parcours Homelab

## Objectif

Déployer, exposer, sécuriser et superviser des services self-hosted avec conteneurs, Kubernetes, reverse proxy, DNS, monitoring et dashboards.

## Hub dédié


## Ordre conseillé

### 1. Comprendre les briques applicatives

1. [API](/pages/notes/api.md) - Comprendre les interfaces entre services.
2. [IaaS, PaaS et SaaS](/pages/notes/iaas-paas-saas.md) - Situer les modèles de services.
3. [Socket](/pages/notes/socket.md) - Comprendre la communication applicative.
4. [Middleware](/pages/notes/middleware-intergiciel.md) - Situer les composants intermediaires.
5. [Git](/pages/notes/git.md) - Versionner la documentation et les configurations.

### 2. Conteneuriser les services

6. [Docker](/pages/notes/docker.md) - Maîtriser la base des conteneurs.
7. [Portainer](/pages/notes/portainer.md) - Administrer les conteneurs avec une interface web.

### 3. Orchestrer et stocker

8. [Kubernetes](/pages/notes/kubernetes.md) - Comprendre l'orchestration.
9. [Commandes Kubernetes](/pages/notes/commandes-kubernetes.md) - Utiliser les commandes essentielles.
10. [PV et PVC](/pages/notes/pv-pvc.md) - Comprendre le stockage persistant.
11. [Longhorn](/pages/notes/longhorn.md) - Ajouter du stockage distribue.
12. [Homelab Kubernetes](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Relier Kubernetes au lab.

### 4. Exposer proprement les services

13. [Reverse Proxy](/pages/notes/reverse-proxy.md) - Comprendre l'exposition centralisée.
14. [Traefik](/pages/notes/traefik.md) - Mettre en place un reverse proxy dynamique.
15. [Traefik Homelab](/pages/notes/traefik-homelab.md) - Appliquer Traefik au lab.
16. [Caddy](/pages/notes/caddy.md) - Comparer avec une alternative simple.
17. [Let's Encrypt](/pages/notes/let-s-encrypt.md) - Gérer les certificats publics.
18. [mkcert](/pages/notes/mkcert.md) - Gérer des certificats locaux.

### 5. Ajouter réseau, accès et services

19. [Tailscale](/pages/notes/tailscale.md) - Acceder au lab via réseau prive.
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
31. [Diagramme](/pages/notes/diagramme.md) - Créer des schemas visuels.

### 7. Dashboards et services Docker

32. [Homepage Homelab](/pages/notes/homepage-homelab.md) - Organiser les accès du lab.
33. [Homepage Docker](/pages/notes/homepage-docker.md) - Déployer la homepage avec Docker.
34. [Glance Docker](/pages/notes/glance-docker.md) - Ajouter un dashboard leger.
35. [Filebrowser Docker](/pages/notes/filebrowser-docker.md) - Exposer des fichiers.
36. [It-Tools Docker](/pages/notes/it-tools-docker.md) - Ajouter des outils pratiques.
37. [Transmute Docker](/pages/notes/transmute-docker.md) - Ajouter un service de transformation.
38. [Vaultwarden Docker](/pages/notes/vaultwarden-docker.md) - Heberger un coffre de mots de passe.
39. [Nodecast Docker](/pages/notes/nodecast-docker.md) - Déployer un service media.
40. [Grafana Stack Docker](/pages/notes/grafana-stack-docker.md) - Déployer une stack de supervision.
41. [Uptime-Kuma Docker](/pages/notes/uptime-kuma-docker.md) - Surveiller la disponibilité.
42. [Patchmon Docker](/pages/notes/patchmon-docker.md) - Suivre les mises à jour.

### 8. Projet integre homelab

43. [Homelab MonstroTech - Documentation TSSR](/pages/notes/homelab-monstrotech-documentation-tssr.md) - Documenter le homelab global.
44. [Homelab Kubernetes - Documentation TSSR](/pages/notes/homelab-kubernetes-documentation-tssr.md) - Documenter la partie Kubernetes.
45. [Homelab MonstroTech](/pages/notes/homelab-monstrotech-documentation-tssr.md) - Lire la synthèse du projet.

## Validation

Tu sais que ce parcours est acquis si tu peux déployer un service conteneurisé, l'exposer en HTTPS, gérer son DNS/accès, le superviser et documenter son rôle dans le homelab.
