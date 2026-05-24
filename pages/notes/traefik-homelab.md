# 🌐 Traefik — Reverse Proxy moderne (Docker / Homelab)

---

# 📌 Définition

**Traefik** est un reverse proxy moderne conçu pour :

- Docker
- Kubernetes
- homelab

👉 il permet d’exposer facilement des services web

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| exposition | services web |
| HTTPS | automatique |
| routing | intelligent |
| simplification | réseau |

---

# 🧠 Fonctionnement global

```
Navigateur
    ↓
DNS
    ↓
Traefik
    ↓
Container Docker
```

---

# 🌍 Accès aux services

👉 Chaque service a un domaine :

```
https://app.exemple.com
https://grafana.exemple.com
https://monitoring.exemple.com
```

👉 tous pointent vers :

```
IP du serveur Docker
```

---

# 🔎 Comment Traefik fonctionne ?

👉 Traefik détecte automatiquement les services via :

```
Docker labels
```

---

# 🏷️ Exemple docker-compose

```yaml
version: "3.8"

services:
  app:
    image: nginx
    container_name: app
    restart: unless-stopped
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.app.rule=Host(`app.exemple.com`)"
      - "traefik.http.routers.app.entrypoints=websecure"
      - "traefik.http.routers.app.tls=true"
      - "traefik.http.routers.app.tls.certresolver=letsencrypt"
      - "traefik.http.services.app.loadbalancer.server.port=80"
      - "traefik.docker.network=proxy"

networks:
  proxy:
    external: true
```

---

# 🔍 Explication des labels

| Label | Rôle |
|---|---|
| traefik.enable=true | active Traefik |
| rule=Host() | domaine |
| entrypoints=websecure | HTTPS |
| tls=true | active SSL |
| certresolver | Let's Encrypt |
| server.port | port interne |
| docker.network | réseau |

---

# 🌐 Réseau Docker

```yaml
networks:
  proxy:
    external: true
```

👉 tous les containers doivent être dans ce réseau

---

# 🔐 HTTPS automatique

👉 Traefik utilise :

```
Let's Encrypt
```

---

## Résultat

| Fonction | Statut |
|---|---|
| HTTPS | automatique |
| renouvellement | auto |
| config SSL | inutile |

---

# 📡 Entrypoints

| Entrypoint | Port |
|---|---|
| web | 80 |
| websecure | 443 |

---

👉 en pratique :

```
web → redirige vers websecure
```

---

# 🚫 Ports Docker

## ❌ Mauvaise pratique

```yaml
ports:
  - "8080:80"
```

---

## ✅ Bonne pratique

```yaml
# aucun port exposé
```

👉 Traefik gère l’accès externe

---

# 🧪 Debug rapide

## Voir les containers

```bash
docker ps
```

---

## Voir les labels

```bash
docker inspect NOM_CONTAINER --format '{{json .Config.Labels}}'
```

---

## Logs Traefik

```bash
docker logs traefik --tail=100
```

---

## Vérifier réseau

```bash
docker network inspect proxy
```

---

# ❌ Problèmes fréquents

---

## 404 page not found

👉 causes :

- mauvais domaine
- mauvais réseau
- mauvais port
- container arrêté

---

## HTTPS ne fonctionne pas

👉 vérifier :

- certresolver
- DNS
- logs

---

## Service inaccessible

```bash
docker logs NOM_CONTAINER
```

---

# 🧠 Bonnes pratiques

> [!warning]

- utiliser un réseau proxy
- utiliser labels Traefik
- ne pas exposer de ports
- vérifier logs régulièrement
- utiliser restart: unless-stopped

---

# 🔄 Traefik vs Nginx

| Critère | Traefik | Nginx |
|---|---|---|
| config | auto |
| Docker | natif |
| SSL | auto |
| complexité | faible |

---

| Critère | Nginx |
|---|---|
| config | manuelle |
| Docker | externe |
| SSL | manuel |
| complexité | élevée |

---

# 🏗️ Architecture type

```
Docker Host
   ├── Traefik
   ├── App
   ├── Grafana
   ├── Dashboard
```

---

👉 tous accessibles via HTTPS

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Traefik | reverse proxy |
| labels | routing |
| network | proxy |
| HTTPS | auto |
| usage | homelab |

---

# 🎯 Conclusion

Traefik permet :

- d’exposer facilement des services Docker
- de gérer automatiquement HTTPS
- de simplifier toute l’infra réseau

👉 remplace :

🔥 ouverture de ports  
🔥 config nginx/apache  
🔥 gestion SSL manuelle  

👉 indispensable en homelab moderne 🚀