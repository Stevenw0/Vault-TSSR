# 🌐 Reverse Proxy — Proxy inverse

---

# 📌 Définition

Un **reverse proxy** est un serveur qui :

- reçoit les requêtes des clients
- les redirige vers un ou plusieurs serveurs internes

👉 Le client ne voit jamais le serveur réel

---

# 🧠 Principe

```
Client → Reverse Proxy → Serveur interne
```

---

## Exemple

```
Internet → Nginx / Traefik / Caddy → App (web/API)
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| sécurité | cacher backend |
| performance | cache |
| load balancing | répartir trafic |
| centralisation | point d’entrée |

---

# 🏗️ Architecture

```
Client
 ↓
Reverse Proxy
 ↓
Serveur 1 / Serveur 2 / API
```

---

# 📊 Reverse Proxy vs Proxy

| Critère | Proxy | Reverse Proxy |
|---|---|---|
| position | côté client | côté serveur |
| usage | accès internet | exposer services |
| visibilité | client caché | serveur caché |

---

# ⚙️ Fonctionnement

## Étapes

1. client envoie requête
2. proxy reçoit
3. proxy redirige
4. serveur répond
5. proxy renvoie réponse

---

# 📦 Exemples de reverse proxy

| Outil | Description |
|---|---|
| Nginx | classique |
| Traefik | moderne |
| Caddy | simple |
| HAProxy | performance |

---

# 🔀 Load balancing

Distribuer le trafic :

```
Client → Proxy → Serveur A
                → Serveur B
```

---

# 🔐 HTTPS

Le reverse proxy peut :

- gérer SSL/TLS
- centraliser certificats

---

# ⚙️ Exemple Nginx

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

---

# ⚙️ Exemple Caddy

```caddy
example.com {
    reverse_proxy localhost:3000
}
```

---

# ⚙️ Exemple Traefik

```yaml
- "traefik.http.routers.app.rule=Host(`app.local`)"
```

---

# 📊 Avantages

| Avantage | Description |
|---|---|
| sécurité | masque backend |
| scalabilité | multi serveurs |
| centralisation | accès unique |
| performance | cache |

---

# ⚠️ Inconvénients

| Inconvénient | Description |
|---|---|
| complexité | config |
| point unique | SPOF |
| maintenance | nécessaire |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| web | sites |
| API | microservices |
| cloud | Kubernetes |
| dev | local |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser HTTPS
- sécuriser accès
- monitorer trafic
- limiter exposition backend

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Reverse Proxy | intermédiaire |
| rôle | redirection |
| usage | web / API |
| avantage | sécurité |
| outils | Nginx, Traefik |

---

# 🎯 Conclusion

Le reverse proxy est :

- un élément central des architectures modernes
- indispensable pour :

👉 sécurité  
👉 performance  
👉 scalabilité