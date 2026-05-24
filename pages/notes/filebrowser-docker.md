# Filebrowser

## Objectif

Filebrowser permet de gérer les fichiers du serveur depuis une interface web.

## URL

```text
https://filebrowser.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    container_name: filebrowser
    user: "1000:1000"
    restart: unless-stopped

    volumes:
      - /mnt/hardrive:/srv
      - /mnt/hardrive/filebrowser/database:/database
      - /mnt/hardrive/filebrowser/config:/config

    environment:
      - PUID=1000
      - PGID=1000

    networks:
      - proxy

    labels:
      - traefik.enable=true
      - traefik.http.routers.filebrowser.rule=Host(`filebrowser.monstrotech.org`)
      - traefik.http.routers.filebrowser.entrypoints=websecure
      - traefik.http.routers.filebrowser.tls=true
      - traefik.http.routers.filebrowser.tls.certresolver=cloudflare
      - traefik.http.services.filebrowser.loadbalancer.server.port=80
      - traefik.docker.network=proxy

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hardrive:/srv
/mnt/hardrive/filebrowser/database:/database
/mnt/hardrive/filebrowser/config:/config
```

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Filebrowser est exposé via Traefik.

```text
filebrowser.monstrotech.org -> filebrowser:80
```

## Ports

Port interne :

```text
80
```

Aucun port n’est publié directement avec `ports:`.

## Vérification

```bash
docker ps
docker logs filebrowser --tail=50
```

## Notes

Cette stack utilise encore :

```text
/mnt/hardrive
```

La convention actuelle du homelab est plutôt :

```text
/mnt/hdd/storage/NOM_DU_SERVICE
```

À terme, il serait préférable de migrer Filebrowser vers `/mnt/hdd/storage`.
