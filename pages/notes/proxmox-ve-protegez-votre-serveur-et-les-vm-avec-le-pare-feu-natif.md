# Proxmox VE - Protegez votre serveur et les VM avec le pare-feu natif

## Bibliographic Info

- Author: Florian BURNEL
- Date:
- Source type: article web capture
- Original URL: https://www.it-connect.fr/tuto-proxmox-ve-configurer-firewall/#Activer_le_pare-feu_sur_Proxmox_VE
- Original file: `01 - Sources/Proxmox VE - Protégez votre serveur et les VM avec le pare-feu natif.md`
- Full raw note: Proxmox VE - Protégez votre serveur et les VM avec le pare-feu natif

## Summary

Cette source explique le pare-feu natif de Proxmox VE, son activation par niveaux et les objets de configuration qui facilitent la gestion des regles : security groups, alias, IPSets et journalisation.

## Key Claims

- Le pare-feu Proxmox VE s'execute sur chaque noeud et repose sur les fonctionnalites de filtrage du noyau Linux.
- La configuration est hierarchique : Datacenter, noeud, puis VM ou LXC.
- Pour filtrer une VM ou un conteneur, le pare-feu doit etre active au niveau Datacenter, au niveau noeud, au niveau de la ressource et sur l'interface reseau virtuelle.
- La politique entrante par defaut peut bloquer les acces si les regles d'administration ne sont pas preparees avant activation.
- Les security groups permettent de definir des modeles de regles reutilisables.
- Les alias representent une adresse ou un sous-reseau unique; les IPSets regroupent plusieurs adresses, reseaux ou alias.
- Les logs du firewall peuvent aider au debug et a l'audit, mais doivent etre calibres pour eviter de saturer l'espace disque.
- En cas de blocage, le pare-feu peut etre desactive via `/etc/pve/firewall/cluster.fw` ou temporairement avec `pve-firewall stop`.

## Homelab Relevance

Dans le homelab, cette source sert de base pour proteger l'hyperviseur Proxmox, les VM Docker/Kubernetes, les LXC d'infrastructure comme AdGuard et les interfaces sensibles d'administration.

## Related Pages

- Pare-feu Proxmox VE
- Virtualization
- Homelab MonstroTech
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)

## Contradictions / Tensions

- REVIEW: la source recommande de preparer les regles avant activation; il faut documenter les IP d'administration reelles du homelab avant d'activer une politique DROP stricte.

## Open Questions

- TODO: definir un jeu de regles minimal pour Proxmox MonstroTech : WebUI, SSH, cluster eventuel, migration, DNS AdGuard et flux Traefik.


