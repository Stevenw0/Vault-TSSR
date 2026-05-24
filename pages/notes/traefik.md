# 🌐 Traefik — Reverse Proxy moderne

---

# 📌 Définition

**Traefik** est un **reverse proxy et load balancer** moderne conçu pour :

- microservices
- conteneurs (Docker, Kubernetes)
- infrastructures dynamiques

---

# 🧠 Principe

Traefik agit comme un **point d’entrée unique** :

```
Client → Traefik → Service (web, API, etc.)
```

---

# 📊 Fonctionnement

| Élément | Description |
|---|---|
| Entrypoint | ports d’entrée (80, 443) |
| Router | règles de routage |
| Service | application cible |
| Middleware | filtres (auth, redirect…) |

---

# ⚙️ Architecture

```
Internet
   ↓
Traefik (reverse proxy)
   ↓
Services (Docker, apps)
```

---

# 🎯 Rôle principal

| Fonction | Description |
|---|---|
| Reverse proxy | redirection trafic |
| Load balancing | répartition charge |
| HTTPS | gestion certificats |
| Auto-discovery | détection services |

---

# 📦 Exemple simple

## docker-compose

```yaml
version: "3"

services:
  traefik:
    image: traefik:v2.0
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
    ports:
      - "80:80"
      - "8080:8080"
```

---

# 🌐 Accès dashboard

```
http://localhost:8080
```

---

# 🔀 Routage

## Exemple règle

```yaml
labels:
  - "traefik.http.routers.app.rule=Host(`app.local`)"
```

---

# 🔐 HTTPS automatique

Traefik peut générer des certificats via :

- Let's Encrypt

---

## Exemple

```yaml
- "--certificatesresolvers.myresolver.acme.tlschallenge=true"
```

---

# 📊 Traefik vs Nginx

| Critère | Traefik | Nginx |
|---|---|---|
| config | dynamique | statique |
| Docker | natif | manuel |
| HTTPS auto | oui | config |
| simplicité | élevée | moyenne |

---

# 🧠 Providers

Traefik détecte les services via :

| Provider | Usage |
|---|---|
| Docker | conteneurs |
| Kubernetes | cluster |
| File | config statique |

---

# ⚙️ Middleware

Permet d’ajouter des règles :

| Middleware | Usage |
|---|---|
| redirect | HTTP → HTTPS |
| auth | sécurité |
| rate limit | limiter trafic |
| headers | sécurité |

---

# 📦 Exemple middleware

```yaml
- "traefik.http.middlewares.redirect.redirectscheme.scheme=https"
```

---

# 🧠 Labels Docker

Traefik utilise des labels :

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.app.rule=Host(`app.local`)"
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- sécuriser le dashboard
- utiliser HTTPS
- limiter accès
- monitorer trafic

---

# 📊 Cas d’utilisation

| Usage | Exemple |
|---|---|
| microservices | Docker |
| reverse proxy | web |
| dev local | mkcert + Traefik |
| cloud | Kubernetes |

---

# 🔥 Exemple complet

```
Client → Traefik → API → DB
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Traefik | reverse proxy |
| usage | conteneurs |
| HTTPS | automatique |
| config | dynamique |
| avantage | simplicité |

---

# 🎯 Conclusion

Traefik est :

- moderne
- automatisé
- idéal pour Docker / microservices

👉 Il simplifie énormément la gestion du trafic et du HTTPS