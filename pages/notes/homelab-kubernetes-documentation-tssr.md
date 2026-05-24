# Homelab Kubernetes - Documentation TSSR

## Full raw note

Homelab Kubernetes - Documentation TSSR

## Summary

Cette source documente un second homelab oriente Kubernetes. Il complete le homelab Docker Compose en simulant une architecture de cluster sur Proxmox avec un noeud control plane, deux workers, exposition applicative via Traefik, DNS local via AdGuard, stockage persistant Longhorn et observabilite avec Alloy, Loki et Grafana.

## Key Points

- Le lab est heberge sur Proxmox VE avec trois VMs: `k8s-master`, `k8s-worker1` et `k8s-worker2`.
- Le reseau local indique est `192.168.50.0/24`.
- AdGuard est prevu sur `192.168.50.230` pour les requetes DNS locales.
- Traefik sert de point d'entree ingress/load balancer sur `192.168.50.231`.
- Les services sont exposes par noms DNS locaux comme `vault.local`, `homepage.local`, `uptime.local`, `grafana.local` et `longhorn.local`.
- Le SSD est reserve a l'OS des VMs, au runtime Kubernetes, aux images containers et aux logs temporaires.
- Le HDD est reserve aux donnees persistantes et sauvegardes, notamment `/mnt/HDD/longhorn` et `/mnt/HDD/backup`.
- Longhorn fournit les volumes persistants Kubernetes via PVC, avec snapshots et backups comme sujets a approfondir.
- Alloy collecte les logs des pods, noeuds, logs systeme et containers vers Loki, puis Grafana sert a la consultation.

## Architecture

```text
Proxmox VE
-> VM 201 k8s-master
-> VM 202 k8s-worker1
-> VM 203 k8s-worker2
-> Kubernetes cluster
-> Traefik ingress + AdGuard DNS + Longhorn + Alloy/Loki/Grafana
```

Le flux applicatif cible est:

```text
Client LAN
-> DNS AdGuard
-> Traefik Ingress
-> Service Kubernetes
-> Pod applicatif
```

## Services Mentionnes

| Service | Nom DNS | Role |
|---|---|---|
| Vaultwarden | `vault.local` | Gestionnaire de mots de passe |
| Homepage | `homepage.local` | Page d'accueil du lab |
| Uptime Kuma | `uptime.local` | Supervision de disponibilite |
| AdGuard UI | `adguard.local` | Interface DNS local |
| Paperless | `paperless.local` | Gestion documentaire |
| Kubernetes Dashboard | `k8s.local` | Interface Kubernetes |
| Filebrowser | `files.local` | Gestion de fichiers |
| Grafana | `grafana.local` | Dashboards et logs |
| Longhorn UI | `longhorn.local` | Gestion du stockage Longhorn |

## Procedures Extracted

### Verifier le cluster

```bash
kubectl get nodes
kubectl get pods -A
kubectl get svc -A
kubectl get ingress -A
kubectl get pvc -A
```

### Diagnostiquer une application

```bash
kubectl logs -n NAMESPACE POD
kubectl describe pod -n NAMESPACE POD
kubectl describe pvc -n NAMESPACE PVC
```

## Security Notes

- Les applications doivent etre exposees via Traefik plutot que par NodePort direct.
- Les namespaces doivent etre separes.
- Les interfaces sensibles a proteger incluent Kubernetes Dashboard, Longhorn UI, Grafana, AdGuard UI et Vaultwarden.
- Les sauvegardes doivent couvrir a la fois les VMs Proxmox et les volumes Longhorn.

## Contradictions / Tensions

- REVIEW: la source utilise des domaines `.local`, alors que le homelab Docker MonstroTech utilise surtout `monstrotech.org`; il faut clarifier si ce lab Kubernetes reste strictement local ou doit rejoindre le domaine public/interne existant.
- REVIEW: la source indique des chemins `/mnt/HDD/...` avec majuscules, tandis que le homelab Docker formalise plutot `/mnt/hdd/storage`; une convention de stockage transversale reste a harmoniser.
- TODO: preciser le mode exact de load balancing pour l'IP Traefik `192.168.50.231` si MetalLB, kube-vip ou une autre solution est utilisee.
- TODO: documenter la strategie de sauvegarde/restauration Longhorn avant de considerer le lab comme exploitable.

## Related Pages

- Homelab Kubernetes
- Homelab MonstroTech
- Kubernetes Storage
- Stack observabilite homelab
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)

