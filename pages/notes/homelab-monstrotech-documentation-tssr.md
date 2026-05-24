# Homelab MonstroTech - Documentation TSSR

## Full raw note

Homelab MonstroTech - Documentation TSSR

## Summary

Cette source presente le homelab MonstroTech comme projet d'infrastructure pour un dossier professionnel TSSR. L'architecture repose sur Proxmox VE, une VM Debian, Docker administre via Portainer, Traefik pour l'exposition HTTPS, AdGuard Home pour le DNS local et Cloudflare pour le challenge Let's Encrypt.

## Key Points

- Le serveur principal est indique comme `192.168.50.201`.
- Le domaine principal est `monstrotech.org`.
- Les volumes persistants Docker doivent etre places sous `/mnt/hdd/storage/NOM_DU_SERVICE`.
- Les sauvegardes Proxmox sont indiquees sous `/mnt/hdd/backup`.
- Le DNS local doit resoudre `*.monstrotech.org` vers `192.168.50.201`.
- Les services web exposes doivent utiliser le reseau Docker externe `proxy`, des labels Traefik, `restart: unless-stopped` et eviter `ports:` quand Traefik gere l'acces.
- La supervision combine Prometheus, Node Exporter, cAdvisor, Loki, Alloy, Grafana et Uptime Kuma.
- PatchMon est utilise en observation pour surveiller les mises a jour Debian; les mises a jour restent manuelles via SSH ou Portainer.

## Services Mentionnes

| Categorie | Service | Role | URL |
|---|---|---|---|
| Infrastructure | AdGuard Home | DNS local | `https://adguard.monstrotech.org` |
| Infrastructure | Traefik | Reverse proxy HTTPS | `https://traefik.monstrotech.org` |
| Infrastructure | Portainer | Gestion Docker | `https://portainer.monstrotech.org` |
| Dashboards | Homepage | Page d'accueil homelab | `https://homepage.monstrotech.org` |
| Dashboards | Glance | Dashboard personnel | `https://glance.monstrotech.org` |
| Securite | Vaultwarden | Gestionnaire de mots de passe | `https://vault.monstrotech.org` |
| Fichiers | Filebrowser | Gestionnaire de fichiers | `https://filebrowser.monstrotech.org` |
| Outils | IT-Tools | Outils developpeur et reseau | `https://ittools.monstrotech.org` |
| Outils | Transmute | Conversion de fichiers | `https://transmute.monstrotech.org` |
| Media | NodeCast TV | Service IPTV | `https://nodecast.monstrotech.org` |
| Monitoring | Grafana | Visualisation metriques/logs | `https://grafana.monstrotech.org` |
| Monitoring | Uptime Kuma | Supervision disponibilite | `https://uptime.monstrotech.org` |
| Maintenance | PatchMon | Suivi des mises a jour | `https://patchmon.monstrotech.org` |

## Procedures Extracted

### Ajouter un service web Docker

1. Creer un dossier persistant sous `/mnt/hdd/storage/NOM_DU_SERVICE`.
2. Creer une stack Portainer avec `restart: unless-stopped`.
3. Connecter le service au reseau `proxy`.
4. Ajouter les labels Traefik.
5. Ne pas publier de port avec `ports:` si Traefik gere le service.
6. Deployer la stack.
7. Verifier les logs et l'acces HTTPS.
8. Ajouter le service dans Homepage et Uptime Kuma si necessaire.

### Diagnostiquer une erreur Traefik 404

Une erreur `404 page not found` indique souvent que Traefik ne trouve pas de routeur correspondant. La source recommande de verifier les labels Traefik, le reseau Docker `proxy`, l'etat du container, le port interne et les logs Traefik.

## Incidents Mentionnes

| Incident | Cause rapportee | Resolution rapportee |
|---|---|---|
| Widget Traefik Homepage en erreur `ECONNREFUSED` | API Traefik non accessible sur `8080` | Activation de `--api.insecure=true` sans publier le port |
| PatchMon en `404` via Traefik | Container PatchMon en redemarrage | Correction de la base et verification des labels |
| PatchMon PostgreSQL `password authentication failed` | Mot de passe DB incoherent ou base deja initialisee | Alignement du mot de passe et reinitialisation controlee |
| Agent PatchMon bloque | DNS Debian resolvait vers `1.1.1.1` | Correction DNS vers `192.168.50.201` ou entree `/etc/hosts` |
| Conflit apparent port `3000` | AdGuard publie `3000` sur l'hote | Services web conserves sans `ports:`, Traefik utilise les ports internes |

## Contradictions / Tensions

- REVIEW: la source formalise `/mnt/hdd/storage` comme convention cible, alors que des notes Homelab anterieures mentionnent aussi `/mnt/hardrive`. La convention de stockage doit etre harmonisee.
- REVIEW: l'activation de `--api.insecure=true` pour Traefik est notee comme resolution d'un widget Homepage; son exposition doit rester controlee et non publiee directement.

## Related Pages

- Homelab MonstroTech
- PatchMon
- Stack observabilite homelab
- Dashboard homelab
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)

