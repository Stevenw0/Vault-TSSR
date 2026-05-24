# IT-Tools

## Objectif

IT-Tools est une boîte à outils web pour développeur, réseau et administration système.

Elle propose plusieurs outils pratiques comme encodeurs, générateurs, convertisseurs, outils réseau et helpers de développement.

## URL

```text
https://ittools.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  ittools:
    image: corentinth/it-tools:latest
    container_name: ittools
    restart: unless-stopped
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.ittools.rule=Host(`ittools.monstrotech.org`)"
      - "traefik.http.routers.ittools.entrypoints=websecure"
      - "traefik.http.routers.ittools.tls=true"
      - "traefik.http.routers.ittools.tls.certresolver=cloudflare"
      - "traefik.http.services.ittools.loadbalancer.server.port=80"
      - "traefik.docker.network=proxy"

networks:
  proxy:
    external: true
```

## Volumes

Aucun volume persistant n’est configuré.

IT-Tools est principalement une application statique / web app, donc aucune donnée locale importante n’est stockée par défaut dans cette stack.

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

IT-Tools est exposé via Traefik.

Routage :

```text
ittools.monstrotech.org -> ittools:80
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.ittools.rule=Host(`ittools.monstrotech.org`)
- traefik.http.routers.ittools.entrypoints=websecure
- traefik.http.routers.ittools.tls=true
- traefik.http.routers.ittools.tls.certresolver=cloudflare
- traefik.http.services.ittools.loadbalancer.server.port=80
- traefik.docker.network=proxy
```

## Ports

Port interne :

```text
80
```

Aucun port n’est publié directement avec `ports:`.

Traefik accède directement au service via le réseau Docker :

```text
ittools:80
```

## Vérification

Voir le container :

```bash
docker ps
```

Voir les logs :

```bash
docker logs ittools --tail=50
```

Redémarrer le service :

```bash
docker restart ittools
```

## Notes

IT-Tools ne nécessite pas de base de données ni de volume persistant dans cette configuration.

Il peut être mis à jour plus simplement que les services critiques comme Traefik, Grafana, Prometheus, Loki ou Vaultwarden.

## Résultat

IT-Tools est disponible en HTTPS via Traefik :

```text
https://ittools.monstrotech.org
```

Il est exposé proprement derrière Traefik, sans port publié directement sur l’hôte.
