# Glance

## Objectif

Glance sert de dashboard personnel / page de veille.

## URL

```text
https://glance.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  glance:
    image: glanceapp/glance:latest
    container_name: glance
    restart: unless-stopped
    volumes:
      - /mnt/hdd/storage/glance/config:/app/config
      - /mnt/hdd/storage/glance/assets:/app/assets
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.glance.rule=Host(`glance.monstrotech.org`)"
      - "traefik.http.routers.glance.entrypoints=websecure"
      - "traefik.http.routers.glance.tls=true"
      - "traefik.http.routers.glance.tls.certresolver=cloudflare"
      - "traefik.http.services.glance.loadbalancer.server.port=8080"
      - "traefik.docker.network=proxy"

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hdd/storage/glance/config:/app/config
/mnt/hdd/storage/glance/assets:/app/assets
```

## Fichiers importants

```text
/mnt/hdd/storage/glance/config/glance.yml
/mnt/hdd/storage/glance/config/pages/home.yml
/mnt/hdd/storage/glance/config/pages/gaming.yml
/mnt/hdd/storage/glance/assets
```

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Glance est exposé via Traefik.

```text
glance.monstrotech.org -> glance:8080
```

## Ports

Port interne :

```text
8080
```

Aucun port n’est publié directement avec `ports:`.

## Vérification

```bash
docker ps
docker logs glance --tail=50
```

Après modification de la configuration :

```bash
docker restart glance
```
