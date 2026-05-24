# PatchMon

## Objectif

PatchMon sert à surveiller les mises à jour du homelab.

Dans cette installation, il est utilisé principalement pour :

```text
surveiller les updates système de la VM Debian
voir l’état des hosts
voir les paquets obsolètes
voir les security updates
surveiller Docker si l’intégration est activée
```

Les mises à jour restent faites manuellement.

```text
PatchMon = surveillance
Portainer / SSH = mise à jour manuelle
```

## URL

```text
https://patchmon.monstrotech.org
```

## Stack Docker

```yaml
version: "3.8"

services:
  patchmon:
    image: ghcr.io/patchmon/patchmon-server:latest
    container_name: patchmon
    restart: unless-stopped
    environment:
      CORS_ORIGIN: "https://patchmon.monstrotech.org"
      JWT_SECRET: "A_GENERER"
      SESSION_SECRET: "A_GENERER"
      AI_ENCRYPTION_KEY: "A_GENERER"

      POSTGRES_HOST: database
      POSTGRES_USER: patchmon_user
      POSTGRES_PASSWORD: "A_GENERER"
      POSTGRES_DB: patchmon_db
      DATABASE_URL: "postgresql://patchmon_user:A_GENERER@database:5432/patchmon_db"

      REDIS_HOST: redis
      REDIS_PORT: 6379
      REDIS_PASSWORD: "A_GENERER"
      REDIS_DB: 0

      GUACD_ADDRESS: guacd:4822
      TZ: Europe/Paris
      TRUST_PROXY: "true"
      PORT: 3000
      APP_ENV: production
    networks:
      - patchmon-internal
      - proxy
    depends_on:
      database:
        condition: service_healthy
      redis:
        condition: service_healthy
      guacd:
        condition: service_healthy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.patchmon.rule=Host(`patchmon.monstrotech.org`)"
      - "traefik.http.routers.patchmon.entrypoints=websecure"
      - "traefik.http.routers.patchmon.tls=true"
      - "traefik.http.routers.patchmon.tls.certresolver=cloudflare"
      - "traefik.http.services.patchmon.loadbalancer.server.port=3000"
      - "traefik.docker.network=proxy"

  database:
    image: postgres:17-alpine
    container_name: patchmon-database
    restart: unless-stopped
    environment:
      POSTGRES_USER: patchmon_user
      POSTGRES_PASSWORD: "A_GENERER"
      POSTGRES_DB: patchmon_db
    volumes:
      - /mnt/hdd/storage/patchmon/postgres:/var/lib/postgresql/data
    networks:
      - patchmon-internal
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U patchmon_user -d patchmon_db"]
      interval: 3s
      timeout: 5s
      retries: 7

  redis:
    image: redis:7-alpine
    container_name: patchmon-redis
    restart: unless-stopped
    command: redis-server --requirepass A_GENERER
    volumes:
      - /mnt/hdd/storage/patchmon/redis:/data
    networks:
      - patchmon-internal
    healthcheck:
      test: ["CMD", "redis-cli", "--no-auth-warning", "-a", "A_GENERER", "ping"]
      interval: 3s
      timeout: 5s
      retries: 7

  guacd:
    image: guacamole/guacd:latest
    container_name: patchmon-guacd
    restart: unless-stopped
    read_only: true
    tmpfs:
      - /tmp:size=64m
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    networks:
      - patchmon-internal
    healthcheck:
      test: ["CMD-SHELL", "nc -z localhost 4822 || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 10s

networks:
  patchmon-internal:
    driver: bridge
  proxy:
    external: true
```

## Volumes

```text
/mnt/hdd/storage/patchmon/postgres:/var/lib/postgresql/data
/mnt/hdd/storage/patchmon/redis:/data
```

PostgreSQL contient les données principales de PatchMon.

Redis sert au fonctionnement interne de l’application.

## Réseau

PatchMon utilise deux réseaux :

```text
patchmon-internal
proxy
```

`patchmon-internal` sert à la communication entre :

```text
patchmon
patchmon-database
patchmon-redis
patchmon-guacd
```

`proxy` sert à exposer PatchMon via Traefik.

## Traefik

PatchMon est exposé via Traefik.

Routage :

```text
patchmon.monstrotech.org -> patchmon:3000
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.patchmon.rule=Host(`patchmon.monstrotech.org`)
- traefik.http.routers.patchmon.entrypoints=websecure
- traefik.http.routers.patchmon.tls=true
- traefik.http.routers.patchmon.tls.certresolver=cloudflare
- traefik.http.services.patchmon.loadbalancer.server.port=3000
- traefik.docker.network=proxy
```

## Ports

Port interne PatchMon :

```text
3000
```

Aucun port n’est publié directement avec `ports:`.

Traefik accède directement au service via le réseau Docker :

```text
patchmon:3000
```

## Installation de l’agent

L’agent PatchMon est installé sur la VM Debian.

Il sert à remonter les informations de la machine vers PatchMon :

```text
paquets installés
updates disponibles
security updates
état du host
éventuelles informations Docker
```

L’installation de l’agent s’est terminée avec succès :

```text
SUCCESS: Your system is now being monitored by PatchMon!
```

Vérifier le service agent :

```bash
systemctl status patchmon-agent
```

Voir les logs :

```bash
journalctl -u patchmon-agent --no-pager -n 100
```

## Problème rencontré

Pendant l’installation de l’agent, la VM Debian ne résolvait pas correctement le domaine :

```text
patchmon.monstrotech.org
```

Résolution incorrecte observée :

```text
patchmon.monstrotech.org -> 1.1.1.1
```

Résolution attendue :

```text
patchmon.monstrotech.org -> 192.168.50.201
```

Test avec résolution forcée :

```bash
curl -Iv --max-time 10 --resolve patchmon.monstrotech.org:443:192.168.50.201 https://patchmon.monstrotech.org
```

Résultat attendu obtenu :

```text
HTTP/2 200
SSL certificate verify ok
```

## Correction DNS temporaire

Une entrée peut être ajoutée dans `/etc/hosts` :

```text
192.168.50.201 patchmon.monstrotech.org
```

Puis tester :

```bash
curl -I https://patchmon.monstrotech.org
```

## Correction DNS propre

La VM Debian doit utiliser AdGuard comme DNS :

```text
192.168.50.201
```

Le wildcard DNS local doit pointer vers le serveur :

```text
*.monstrotech.org -> 192.168.50.201
```

Cela permet aux services internes de résoudre correctement :

```text
patchmon.monstrotech.org
grafana.monstrotech.org
homepage.monstrotech.org
vault.monstrotech.org
```

## Problèmes rencontrés côté PostgreSQL

Erreur rencontrée :

```text
pq: password authentication failed for user "patchmon_user"
```

Cause probable :

```text
mot de passe PostgreSQL différent entre DATABASE_URL et la base initialisée
```

Points à vérifier :

```yaml
POSTGRES_PASSWORD: "..."
DATABASE_URL: "postgresql://patchmon_user:...@database:5432/patchmon_db"
```

Les deux mots de passe doivent être identiques.

Autre erreur rencontrée :

```text
Dirty database version 4. Fix and force version.
```

Cause :

```text
migration PostgreSQL interrompue pendant une tentative précédente
```

Comme l’installation était neuve, la solution propre a été de repartir sur une base PostgreSQL propre.

## Vérification

Voir les containers :

```bash
docker ps | grep patchmon
```

Voir les logs PatchMon :

```bash
docker logs patchmon --tail=150
```

Voir les logs PostgreSQL :

```bash
docker logs patchmon-database --tail=50
```

Voir les logs Redis :

```bash
docker logs patchmon-redis --tail=50
```

Tester l’accès HTTPS :

```bash
curl -I https://patchmon.monstrotech.org
```

Tester avec résolution forcée :

```bash
curl -Iv --max-time 10 --resolve patchmon.monstrotech.org:443:192.168.50.201 https://patchmon.monstrotech.org
```

## Notes de sécurité

PatchMon est un outil d’administration sensible.

Bonnes pratiques :

```text
ne pas exposer publiquement si ce n’est pas nécessaire
utiliser un mot de passe admin fort
garder les updates en validation manuelle
ne pas activer l’automatisation de patching sans test
sauvegarder PostgreSQL avant modification majeure
```

## Résultat

PatchMon est disponible en HTTPS via Traefik :

```text
https://patchmon.monstrotech.org
```

La VM Debian est surveillée par l’agent PatchMon.

PatchMon sert à visualiser les updates disponibles, tandis que les mises à jour restent faites manuellement via SSH ou Portainer.
