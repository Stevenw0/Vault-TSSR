# 🌐 HTTP / HTTPS — Protocoles Web

---

# 📌 Définition

## HTTP

**HTTP (HyperText Transfer Protocol)** est un protocole permettant :

- d’échanger des pages web
- entre client (navigateur) et serveur

---

## HTTPS

**HTTPS (HTTP Secure)** est la version sécurisée de HTTP :

- HTTP + TLS (chiffrement)

---

# 🧠 Principe

```
Client → HTTP/HTTPS → Serveur Web
```

---

# 🎯 Objectifs

| Protocole | Objectif |
|---|---|
| HTTP | communication web |
| HTTPS | communication sécurisée |

---

# 📊 Différences HTTP vs HTTPS

| Critère | HTTP | HTTPS |
|---|---|---|
| sécurité | non |
| chiffrement | aucun |
| port | 80 |
| usage | ancien |

---

| Critère | HTTPS |
|---|---|
| sécurité | oui |
| chiffrement | TLS |
| port | 443 |
| usage | standard actuel |

---

# 🔐 Fonctionnement HTTPS

## Étapes

1. client contacte serveur
2. serveur envoie certificat
3. vérification certificat
4. handshake TLS
5. communication chiffrée

---

# 📦 Certificat

| Élément | Description |
|---|---|
| clé publique | chiffrement |
| domaine | identité |
| CA | autorité |
| validité | durée |

---

# 🌐 Exemple

## HTTP

```
http://example.com
```

---

## HTTPS

```
https://example.com
```

---

# 📊 Ports

| Protocole | Port |
|---|---|
| HTTP | 80 |
| HTTPS | 443 |

---

# ⚙️ Méthodes HTTP

| Méthode | Description |
|---|---|
| GET | récupérer |
| POST | envoyer |
| PUT | modifier |
| DELETE | supprimer |

---

# 🔎 Exemple requête

```
GET /index.html HTTP/1.1
Host: example.com
```

---

# ⚠️ Risques HTTP

| Risque | Description |
|---|---|
| interception | sniffing |
| modification | MITM |
| vol données | credentials |

---

# 🔐 Avantages HTTPS

| Avantage | Description |
|---|---|
| chiffrement | sécurité |
| authentification | serveur |
| intégrité | données |
| SEO | meilleur ranking |

---

# ⚙️ Redirection HTTP → HTTPS

## Exemple Nginx

```nginx
server {
    listen 80;
    return 301 https://$host$request_uri;
}
```

---

# 📊 HTTP/1.1 vs HTTP/2 vs HTTP/3

| Version | Description |
|---|---|
| HTTP/1.1 | classique |
| HTTP/2 | multiplexing |
| HTTP/3 | QUIC (UDP) |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| web | sites |
| API | REST |
| cloud | services |
| apps | backend |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser HTTPS uniquement
- renouveler certificats
- rediriger HTTP → HTTPS
- utiliser TLS 1.2+

---

# 📊 Résumé

| Élément | Description |
|---|---|
| HTTP | non sécurisé |
| HTTPS | sécurisé |
| TLS | chiffrement |
| port | 80 / 443 |
| usage | web |

---

# 🎯 Conclusion

HTTP permet :

- la communication web

HTTPS permet :

- la sécurisation des échanges

👉 aujourd’hui :

- HTTPS est obligatoire
- HTTP est obsolète pour la production