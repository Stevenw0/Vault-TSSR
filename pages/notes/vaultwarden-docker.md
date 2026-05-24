# Vaultwarden

## Objectif

Vaultwarden est un gestionnaire de mots de passe compatible avec Bitwarden.

Il permet d’héberger un coffre-fort de mots de passe sur le homelab.

## URL

```text
https://vault.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped

    volumes:
      - /mnt/hdd/storage/vaultwarden:/data

    environment:
      WEBSOCKET_ENABLED: "true"
      SIGNUPS_ALLOWED: "false"
      ADMIN_TOKEN: "TOKEN ADMIN"

    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.vault.rule=Host(`vault.monstrotech.org`)"
      - "traefik.http.routers.vault.entrypoints=websecure"
      - "traefik.http.routers.vault.tls=true"
      - "traefik.http.routers.vault.tls.certresolver=cloudflare"
      - "traefik.http.services.vault.loadbalancer.server.port=80"
      - "traefik.docker.network=proxy"

    networks:
      - proxy

networks:
  proxy:
    external: true
```

## Volumes

```text
/mnt/hdd/storage/vaultwarden:/data
```

Le dossier `/data` contient les données persistantes de Vaultwarden :

```text
base de données
comptes
coffres
pièces jointes
configuration interne
```

## Variables d’environnement

```yaml
WEBSOCKET_ENABLED: "true"
```

Active les WebSockets pour les notifications en temps réel.

```yaml
SIGNUPS_ALLOWED: "false"
```

Désactive les inscriptions publiques.

```yaml
ADMIN_TOKEN: "TOKEN ADMIN"
```

Active l’accès à l’interface admin.

Important : ne jamais publier le vrai `ADMIN_TOKEN` dans GitHub ou dans une note publique.

## Réseau

```text
proxy
```

Le réseau `proxy` est externe et utilisé par Traefik.

## Traefik

Vaultwarden est exposé via Traefik.

Routage :

```text
vault.monstrotech.org -> vaultwarden:80
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.vault.rule=Host(`vault.monstrotech.org`)
- traefik.http.routers.vault.entrypoints=websecure
- traefik.http.routers.vault.tls=true
- traefik.http.routers.vault.tls.certresolver=cloudflare
- traefik.http.services.vault.loadbalancer.server.port=80
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
vaultwarden:80
```

## Accès admin

L’interface admin est accessible via :

```text
https://vault.monstrotech.org/admin
```

Elle nécessite le `ADMIN_TOKEN`.

## Vérification

Voir le container :

```bash
docker ps
```

Voir les logs :

```bash
docker logs vaultwarden --tail=50
```

Redémarrer le service :

```bash
docker restart vaultwarden
```

## Notes de sécurité

Vaultwarden est un service critique car il stocke les mots de passe.

Bonnes pratiques :

```text
désactiver les inscriptions publiques
utiliser un ADMIN_TOKEN fort
ne pas exposer de port directement
faire des backups réguliers du dossier /mnt/hdd/storage/vaultwarden
ne jamais publier le token admin
```

Le dossier à sauvegarder en priorité est :

```text
/mnt/hdd/storage/vaultwarden
```

## Résultat

Vaultwarden est disponible en HTTPS via Traefik :

```text
https://vault.monstrotech.org
```

Il est exposé proprement derrière Traefik, sans port publié directement sur l’hôte, avec les inscriptions désactivées.
