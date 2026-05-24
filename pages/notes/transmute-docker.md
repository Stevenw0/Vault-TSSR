# Transmute

## Objectif

Transmute est un service web de conversion de fichiers.

Il permet de convertir différents types de fichiers depuis une interface web.

## URL

```text
https://transmute.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  transmute:
    image: ghcr.io/transmute-app/transmute:latest
    container_name: transmute
    restart: unless-stopped

    volumes:
      - /mnt/hardrive/transmute/data:/app/data

    networks:
      - proxy

    healthcheck:
      test: ["CMD", "wget", "-q", "-O", "/dev/null", "--tries=1", "http://localhost:3313/api/health/ready"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

    labels:
      - traefik.enable=true
      - traefik.http.routers.transmute.rule=Host(`transmute.monstrotech.org`)
      - traefik.http.routers.transmute.entrypoints=websecure
      - traefik.http.routers.transmute.tls=true
      - traefik.http.routers.transmute.tls.certresolver=cloudflare
      - traefik.http.services.transmute.loadbalancer.server.port=3313
      - traefik.docker.network=proxy

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hardrive/transmute/data:/app/data
```

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Transmute est exposé via Traefik.

Routage :

```text
transmute.monstrotech.org -> transmute:3313
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.transmute.rule=Host(`transmute.monstrotech.org`)
- traefik.http.routers.transmute.entrypoints=websecure
- traefik.http.routers.transmute.tls=true
- traefik.http.routers.transmute.tls.certresolver=cloudflare
- traefik.http.services.transmute.loadbalancer.server.port=3313
- traefik.docker.network=proxy
```

## Ports

Port interne :

```text
3313
```

Aucun port n’est publié directement avec `ports:`.

Traefik accède directement au service via le réseau Docker :

```text
transmute:3313
```

## Healthcheck

Un healthcheck est configuré pour vérifier que l’API est prête.

Endpoint testé :

```text
http://localhost:3313/api/health/ready
```

Configuration :

```yaml
healthcheck:
  test: ["CMD", "wget", "-q", "-O", "/dev/null", "--tries=1", "http://localhost:3313/api/health/ready"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
```

## Vérification

Voir le container :

```bash
docker ps
```

Voir les logs :

```bash
docker logs transmute --tail=50
```

Vérifier l’état du healthcheck :

```bash
docker inspect transmute --format '{{json .State.Health}}'
```

Redémarrer le service :

```bash
docker restart transmute
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

À terme, il serait préférable de migrer Transmute vers :

```text
/mnt/hdd/storage/transmute/data
```

Exemple de volume cible :

```yaml
volumes:
  - /mnt/hdd/storage/transmute/data:/app/data
```

## Résultat

Transmute est disponible en HTTPS via Traefik :

```text
https://transmute.monstrotech.org
```

Il fonctionne sur le port interne `3313`, sans port publié directement sur l’hôte.
