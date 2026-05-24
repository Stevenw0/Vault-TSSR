# 🌐 Caddy Server — Web Server & Reverse Proxy

---

# 📌 Définition

**Caddy** est un serveur web moderne qui agit comme :

- serveur HTTP
- reverse proxy
- gestionnaire HTTPS automatique

👉 Très simple à configurer comparé à Nginx ou Apache

---

# 🧠 Principe

Caddy fonctionne avec un fichier simple :

```
Caddyfile
```

---

## Fonctionnement

```
Client → Caddy → Application (web/API)
```

---

# 🎯 Points forts

| Fonction | Description |
|---|---|
| HTTPS automatique | via Let's Encrypt |
| configuration simple | lisible |
| reverse proxy | intégré |
| performance | élevée |

---

# ⚙️ Installation

## Linux

```bash
sudo apt install caddy
```

---

## Docker

```bash
docker run -d -p 80:80 -p 443:443 caddy
```

---

# 📂 Configuration (Caddyfile)

## Exemple simple

```caddy
localhost {
    respond "Hello world"
}
```

---

## Exemple reverse proxy

```caddy
example.com {
    reverse_proxy localhost:3000
}
```

---

# 🔐 HTTPS automatique

Caddy gère automatiquement :

- certificats TLS
- renouvellement
- configuration

👉 aucune config manuelle nécessaire

---

# 📊 Caddy vs Nginx

| Critère | Caddy | Nginx |
|---|---|---|
| config | simple | complexe |
| HTTPS | automatique | manuel |
| dev | rapide | plus long |
| usage | moderne | standard |

---

# ⚙️ Reverse proxy

Caddy redirige le trafic :

```caddy
site.com {
    reverse_proxy app:8080
}
```

---

# 📦 Middleware

Caddy supporte :

| Fonction | Exemple |
|---|---|
| redirection | HTTP → HTTPS |
| auth | basique |
| headers | sécurité |

---

# 🌐 Exemple multi-sites

```caddy
site1.local {
    reverse_proxy localhost:3000
}

site2.local {
    reverse_proxy localhost:4000
}
```

---

# 📊 Cas d’utilisation

| Usage | Exemple |
|---|---|
| dev local | HTTPS |
| reverse proxy | apps |
| microservices | Docker |
| API | sécurisation |

---

# ⚠️ Bonnes pratiques

> [!warning]

- sécuriser les accès
- utiliser HTTPS
- limiter ports exposés
- monitorer logs

---

# 📦 Logs

```caddy
log {
    output file /var/log/caddy.log
}
```

---

# 🧠 Caddy + Docker

Exemple :

```yaml
services:
  caddy:
    image: caddy
    ports:
      - "80:80"
      - "443:443"
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Caddy | serveur web |
| HTTPS | automatique |
| config | Caddyfile |
| usage | proxy / web |
| avantage | simplicité |

---

# 🎯 Conclusion

Caddy est :

- simple
- automatique
- moderne

👉 idéal pour :

- développement
- petits projets
- déploiement rapide

🔥 alternative très efficace à Nginx / Traefik