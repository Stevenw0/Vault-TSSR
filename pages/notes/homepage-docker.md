# Homepage

## Objectif

Homepage sert de page d’accueil du homelab avec les services, widgets, liens rapides et monitoring visuel.

## URL

```text
https://homepage.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    restart: unless-stopped

    volumes:
      - /mnt/hdd/storage/homepage:/app/config
      - /var/run/docker.sock:/var/run/docker.sock:ro

    environment:
      HOMEPAGE_ALLOWED_HOSTS: "homepage.monstrotech.org"
      PUID: "1000"
      PGID: "1000"

    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.homepage.rule=Host(`homepage.monstrotech.org`)"
      - "traefik.http.routers.homepage.entrypoints=websecure"
      - "traefik.http.routers.homepage.tls=true"
      - "traefik.http.routers.homepage.tls.certresolver=cloudflare"
      - "traefik.http.services.homepage.loadbalancer.server.port=3000"
      - "traefik.docker.network=proxy"

    networks:
      - proxy

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hdd/storage/homepage:/app/config
/var/run/docker.sock:/var/run/docker.sock:ro
```

## Fichiers importants

```text
/mnt/hdd/storage/homepage/services.yaml
/mnt/hdd/storage/homepage/widgets.yaml
/mnt/hdd/storage/homepage/settings.yaml
/mnt/hdd/storage/homepage/custom.css
```

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Homepage est exposé via Traefik.

```text
homepage.monstrotech.org -> homepage:3000
```

## Ports

Port interne :

```text
3000
```

Aucun port n’est publié directement avec `ports:`.

## Vérification

```bash
docker ps
docker logs homepage --tail=50
```

Après modification de la configuration :

```bash
docker restart homepage
```

## Notes

Homepage utilise le socket Docker en lecture seule :

```text
/var/run/docker.sock:/var/run/docker.sock:ro
```

Cela permet d’afficher certains widgets Docker et informations de containers.
