# Uptime Kuma

## Objectif

Uptime Kuma sert à surveiller la disponibilité des services du homelab.

Il permet de créer des checks HTTP, TCP, DNS, Docker ou autres, et d’afficher si les services sont `UP` ou `DOWN`.

## URL

```text
https://uptime.monstrotech.org
```

## Stack Docker

```yaml
services:
  uptime-kuma:
    image: louislam/uptime-kuma:latest
    container_name: uptime-kuma
    restart: unless-stopped

    volumes:
      - /mnt/hdd/storage/uptime-kuma:/app/data
      - /var/run/docker.sock:/var/run/docker.sock

    dns:
      - 192.168.50.201

    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.kuma.rule=Host(`uptime.monstrotech.org`)"
      - "traefik.http.routers.kuma.entrypoints=websecure"
      - "traefik.http.routers.kuma.tls=true"
      - "traefik.http.routers.kuma.tls.certresolver=cloudflare"
      - "traefik.http.services.kuma.loadbalancer.server.port=3001"
      - "traefik.docker.network=proxy"

    networks:
      - proxy

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hdd/storage/uptime-kuma:/app/data
/var/run/docker.sock:/var/run/docker.sock
```

Le dossier `/app/data` contient la configuration et les données persistantes d’Uptime Kuma.

Le socket Docker permet à Uptime Kuma de surveiller des containers Docker.

## DNS

Uptime Kuma utilise le DNS local du homelab :

```text
192.168.50.201
```

Cela permet au container de résoudre les domaines locaux comme :

```text
grafana.monstrotech.org
homepage.monstrotech.org
vaultwarden.monstrotech.org
```

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Uptime Kuma est exposé via Traefik.

Routage :

```text
uptime.monstrotech.org -> uptime-kuma:3001
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.kuma.rule=Host(`uptime.monstrotech.org`)
- traefik.http.routers.kuma.entrypoints=websecure
- traefik.http.routers.kuma.tls=true
- traefik.http.routers.kuma.tls.certresolver=cloudflare
- traefik.http.services.kuma.loadbalancer.server.port=3001
- traefik.docker.network=proxy
```

## Ports

Port interne :

```text
3001
```

Aucun port n’est publié directement avec `ports:`.

Traefik accède directement au service via le réseau Docker :

```text
uptime-kuma:3001
```

## Checks recommandés

Pour vérifier toute la chaîne DNS + Traefik + HTTPS, surveiller les URLs publiques/locales :

```text
https://grafana.monstrotech.org
https://homepage.monstrotech.org
https://vaultwarden.monstrotech.org
https://filebrowser.monstrotech.org
https://ittools.monstrotech.org
https://transmute.monstrotech.org
```

Exemple pour Grafana :

```text
Type: HTTP(s)
Friendly Name: Grafana
URL: https://grafana.monstrotech.org
Heartbeat Interval: 60
Retries: 3
Accepted Status Codes: 200-299
```

## Vérification

Voir le container :

```bash
docker ps
```

Voir les logs :

```bash
docker logs uptime-kuma --tail=50
```

Redémarrer le service :

```bash
docker restart uptime-kuma
```

Tester la résolution DNS depuis le container :

```bash
docker exec -it uptime-kuma sh
nslookup grafana.monstrotech.org
```

## Notes

Uptime Kuma ne publie pas de port directement sur l’hôte.

Il est exposé uniquement via Traefik en HTTPS.

Le DNS forcé vers `192.168.50.201` est utile pour que les domaines locaux `*.monstrotech.org` soient bien résolus depuis le container.

## Résultat

Uptime Kuma est disponible en HTTPS via Traefik :

```text
https://uptime.monstrotech.org
```

Il surveille les services du homelab et permet de vérifier leur disponibilité depuis une interface centralisée.
