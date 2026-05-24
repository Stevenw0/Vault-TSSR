# Installation NodeCast TV

## Objectif

Ajouter NodeCast TV au homelab comme service web derrière Traefik.

URL prévue :

```text
https://nodecast.monstrotech.org
```

## Stack Docker

Stack Portainer : `nodecast-tv`

```yaml
version: "3.8"

services:
  nodecast-tv:
    image: ghcr.io/technomancer702/nodecast-tv:latest
    container_name: nodecast-tv
    restart: unless-stopped
    environment:
      NODE_ENV: production
      PORT: 3000
    volumes:
      - /mnt/hdd/storage/nodecast-tv/data:/app/data
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.nodecast-tv.rule=Host(`nodecast.monstrotech.org`)"
      - "traefik.http.routers.nodecast-tv.entrypoints=websecure"
      - "traefik.http.routers.nodecast-tv.tls=true"
      - "traefik.http.routers.nodecast-tv.tls.certresolver=cloudflare"
      - "traefik.http.services.nodecast-tv.loadbalancer.server.port=3000"
      - "traefik.docker.network=proxy"

networks:
  proxy:
    external: true
```

## Note sur le port 3000

Le port `3000` est déjà utilisé sur l’hôte par AdGuard :

```text
0.0.0.0:3000->3000/tcp
```

Ce n’est pas un problème car NodeCast TV n’expose aucun port avec `ports:`.

Traefik accède au port interne du container :

```text
nodecast-tv:3000
```

## Ajout dans Homepage

Fichier :

```text
/mnt/hdd/storage/homepage/config/services.yaml
```

Entrée à ajouter :

```yaml
- NodeCast TV:
    href: https://nodecast.monstrotech.org
    description: IPTV player
    icon: https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tvheadend.svg
```

Puis :

```bash
docker restart homepage
```

## Résultat

NodeCast TV est ajouté comme service web HTTPS via Traefik, sans conflit avec le port `3000` déjà utilisé par AdGuard, et apparaît dans Homepage avec un style violet cohérent avec les autres cartes.
