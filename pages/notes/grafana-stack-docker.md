# Stack Monitoring

## Objectif

Cette stack fournit le monitoring technique du homelab.

Elle regroupe :

```text
Prometheus   -> collecte et stockage des métriques
Node Exporter -> métriques système de la VM Debian
cAdvisor     -> métriques des containers Docker
Loki         -> stockage des logs
Alloy        -> collecte des logs Docker vers Loki
Grafana      -> visualisation des métriques et logs
```

Flux global :

```text
Metrics -> Prometheus -> Grafana
Logs Docker -> Alloy -> Loki -> Grafana
```

## URL

Seul Grafana est exposé via Traefik :

```text
https://grafana.monstrotech.org
```

Les autres services restent accessibles uniquement sur le réseau Docker interne `proxy`.

## Stack Docker

```yaml
version: "3.8"

services:

  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    restart: unless-stopped
    volumes:
      - /mnt/hdd/storage/monitoring/prometheus:/prometheus
      - /mnt/hdd/storage/monitoring/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
      - "--storage.tsdb.retention.time=7d"
      - "--storage.tsdb.retention.size=5GB"
    networks:
      - proxy

  node-exporter:
    image: prom/node-exporter:latest
    container_name: node-exporter
    restart: unless-stopped
    pid: host
    volumes:
      - /:/host:ro,rslave
    command:
      - '--path.rootfs=/host'
    networks:
      - proxy

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    container_name: cadvisor
    restart: unless-stopped
    privileged: true
    devices:
      - /dev/kmsg:/dev/kmsg
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker:/var/lib/docker:ro
      - /dev/disk:/dev/disk:ro
    command:
      - --docker_only=true
      - --housekeeping_interval=30s
      - --disable_metrics=percpu,sched,tcp,udp,diskIO,disk,process
    networks:
      - proxy

  loki:
    image: grafana/loki:latest
    container_name: loki
    restart: unless-stopped
    volumes:
      - /mnt/hdd/storage/monitoring/loki:/loki
      - /mnt/hdd/storage/monitoring/loki/config.yaml:/etc/loki/config.yaml
    command: -config.file=/etc/loki/config.yaml
    networks:
      - proxy

  alloy:
    image: grafana/alloy:latest
    container_name: alloy
    restart: unless-stopped
    volumes:
      - /mnt/hdd/storage/monitoring/alloy:/etc/alloy
      - /var/run/docker.sock:/var/run/docker.sock
    command: run /etc/alloy/config.alloy
    networks:
      - proxy

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    restart: unless-stopped
    volumes:
      - /mnt/hdd/storage/monitoring/grafana:/var/lib/grafana
    networks:
      - proxy

    labels:
      - traefik.enable=true
      - traefik.http.routers.grafana.rule=Host(`grafana.monstrotech.org`)
      - traefik.http.routers.grafana.entrypoints=websecure
      - traefik.http.routers.grafana.tls=true
      - traefik.http.routers.grafana.tls.certresolver=cloudflare
      - traefik.http.services.grafana.loadbalancer.server.port=3000
      - traefik.docker.network=proxy

networks:
  proxy:
    external: true
```

## Services

### Prometheus

Prometheus collecte et stocke les métriques.

Port interne :

```text
9090
```

Volumes :

```text
/mnt/hdd/storage/monitoring/prometheus:/prometheus
/mnt/hdd/storage/monitoring/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
```

Configuration :

```text
/mnt/hdd/storage/monitoring/prometheus/prometheus.yml
```

Rétention configurée :

```text
7 jours
5 GB maximum
```

Datasource Grafana :

```text
http://prometheus:9090
```

Permissions possibles :

```bash
sudo chown -R 65534:65534 /mnt/hdd/storage/monitoring/prometheus
sudo chmod -R 755 /mnt/hdd/storage/monitoring/prometheus
```

### Node Exporter

Node Exporter expose les métriques système de la VM Debian.

Port interne :

```text
9100
```

Il utilise :

```yaml
pid: host
```

et monte le système hôte en lecture seule :

```text
/:/host:ro,rslave
```

Prometheus peut ensuite récupérer les métriques système via :

```text
node-exporter:9100
```

### cAdvisor

cAdvisor expose les métriques des containers Docker.

Port interne :

```text
8080
```

Il est lancé en mode privilégié :

```yaml
privileged: true
```

Options importantes :

```text
--docker_only=true
--housekeeping_interval=30s
--disable_metrics=percpu,sched,tcp,udp,diskIO,disk,process
```

Ces options réduisent les métriques inutiles et limitent le bruit.

### Loki

Loki stocke les logs envoyés par Alloy.

Port interne :

```text
3100
```

Volumes :

```text
/mnt/hdd/storage/monitoring/loki:/loki
/mnt/hdd/storage/monitoring/loki/config.yaml:/etc/loki/config.yaml
```

Configuration :

```text
/mnt/hdd/storage/monitoring/loki/config.yaml
```

Datasource Grafana :

```text
http://loki:3100
```

Permissions possibles :

```bash
sudo chown -R 10001:10001 /mnt/hdd/storage/monitoring/loki
sudo chmod -R 755 /mnt/hdd/storage/monitoring/loki
```

Requêtes utiles dans Grafana Loki :

```logql
{container=~".+"}
```

```logql
{container="discord-wheel"}
```

```logql
{container=~".+"} |= "error"
```

### Alloy

Alloy collecte les logs Docker et les envoie vers Loki.

Volume :

```text
/mnt/hdd/storage/monitoring/alloy:/etc/alloy
/var/run/docker.sock:/var/run/docker.sock
```

Configuration :

```text
/mnt/hdd/storage/monitoring/alloy/config.alloy
```

Commande :

```text
run /etc/alloy/config.alloy
```

Après modification :

```bash
docker restart alloy
docker logs alloy --tail=50
```

### Grafana

Grafana sert à visualiser les métriques Prometheus et les logs Loki.

URL :

```text
https://grafana.monstrotech.org
```

Port interne :

```text
3000
```

Volume :

```text
/mnt/hdd/storage/monitoring/grafana:/var/lib/grafana
```

Datasource Prometheus :

```text
http://prometheus:9090
```

Datasource Loki :

```text
http://loki:3100
```

Permissions possibles :

```bash
sudo chown -R 472:472 /mnt/hdd/storage/monitoring/grafana
sudo chmod -R 755 /mnt/hdd/storage/monitoring/grafana
```

## Réseau

Tous les services utilisent le réseau Docker externe :

```text
proxy
```

Grafana est le seul service exposé via Traefik.

Les autres services restent internes :

```text
prometheus:9090
node-exporter:9100
cadvisor:8080
loki:3100
alloy
```

## Traefik

Seul Grafana possède des labels Traefik.

Routage :

```text
grafana.monstrotech.org -> grafana:3000
```

Labels principaux :

```yaml
- traefik.enable=true
- traefik.http.routers.grafana.rule=Host(`grafana.monstrotech.org`)
- traefik.http.routers.grafana.entrypoints=websecure
- traefik.http.routers.grafana.tls=true
- traefik.http.routers.grafana.tls.certresolver=cloudflare
- traefik.http.services.grafana.loadbalancer.server.port=3000
- traefik.docker.network=proxy
```

Aucun port n’est publié directement avec `ports:`.

## Vérification

Voir les containers :

```bash
docker ps
```

Logs Grafana :

```bash
docker logs grafana --tail=50
```

Logs Prometheus :

```bash
docker logs prometheus --tail=50
```

Logs Loki :

```bash
docker logs loki --tail=50
```

Logs Alloy :

```bash
docker logs alloy --tail=50
```

Tester Prometheus dans Grafana :

```promql
up
```

Tester Loki dans Grafana :

```logql
{container=~".+"}
```

## Notes

Cette stack respecte la convention de stockage :

```text
/mnt/hdd/storage/monitoring
```

Les services critiques de monitoring ne doivent pas être mis à jour automatiquement sans contrôle.

À éviter avec Watchtower :

```text
grafana
prometheus
loki
alloy
```

## Résultat

La stack monitoring centralise les métriques et les logs du homelab.

```text
Prometheus collecte les métriques.
Node Exporter expose les métriques système.
cAdvisor expose les métriques Docker.
Alloy collecte les logs Docker.
Loki stocke les logs.
Grafana affiche les dashboards et les logs.
```
