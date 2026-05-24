# Homepage Homelab

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours / procedure homelab
- Original file: `01 - Sources/Homepage — Personnalisation Homelab.md`
- Full raw note: Homepage - Personnalisation Homelab

## Summary

Cette source decrit la personnalisation d'un dashboard Homepage pour homelab : CSS `custom.css`, widgets dans `services.yaml`, integration avec Traefik, AdGuard Home et Filebrowser, et commandes de debug Docker.

## Key Claims

- La personnalisation visuelle repose sur `custom.css` dans `/mnt/hdd/storage/homepage/config/custom.css`.
- Les cartes de service peuvent etre ciblees en CSS avec des selecteurs bases sur `:has(a[aria-label="URL"])`, `.service-name`, `.service-icon img`, `.service-card` et `.service-card:hover`.
- Les icones de service peuvent venir du CDN Homarr dashboard-icons, par exemple une icone Grafana en SVG.
- Les widgets Homepage sont declares dans `/mnt/hdd/storage/homepage/config/services.yaml`.
- Le widget Traefik utilise `type: traefik` et `url: http://traefik:8080`.
- L'erreur `API Error: connect ECONNREFUSED traefik:8080` est attribuee dans la note a une API Traefik inactive avec `--api.insecure=false`.
- La solution proposee pour le lab est `--api.insecure=true`, sans exposer publiquement le port `8080:8080`.
- Les widgets Filebrowser et AdGuard utilisent les noms de containers et ports internes Docker quand la resolution interne fonctionne.
- Les commandes utiles incluent `docker restart`, `docker logs --tail=50` et `docker inspect` pour verifier ports et commande de container.

## Topics Covered

- Dashboard homelab
- Personnalisation CSS Homepage
- Widgets Homepage
- API Traefik interne
- Widgets Filebrowser et AdGuard
- Debug Docker des ports, logs et commandes de conteneurs

## Related Hubs

- Homelab Infrastructure
- Homepage
- Traefik
- AdGuard Home
- Dashboard homelab
- Reverse Proxy
- Monitoring
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)

## Contradictions / Tensions

- REVIEW: `--api.insecure=true` est presente comme solution pour faire fonctionner le widget Traefik en reseau Docker interne. La note insiste aussi sur le fait de ne pas exposer le port `8080:8080`; cette distinction doit etre conservee avant tout deploiement hors lab.

## Open Questions

- REVIEW: verifier les implications securite de l'API Traefik insecure selon la topologie exacte du reseau Docker.
- REVIEW: confirmer les noms de conteneurs, ports internes et identifiants avant reutilisation.


