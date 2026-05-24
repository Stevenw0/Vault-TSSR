# 🔐 Let's Encrypt — Certificats SSL gratuits

---

# 📌 Définition

**Let's Encrypt** est une autorité de certification (CA) gratuite permettant de :

- générer des certificats SSL/TLS
- sécuriser un site en HTTPS

👉 Automatisé et gratuit

---

# 🧠 Principe

Let's Encrypt délivre des certificats via :

```
ACME (Automated Certificate Management Environment)
```

---

## Fonctionnement

```
Serveur → ACME → Let's Encrypt → Certificat → HTTPS
```

---

# 🎯 Objectif

| Fonction | Description |
|---|---|
| HTTPS | sécuriser trafic |
| chiffrement | données |
| authentification | serveur |
| gratuit | sans coût |

---

# ⚙️ Processus

## Étapes

1. demande certificat
2. validation domaine
3. émission certificat
4. installation serveur
5. renouvellement automatique

---

# 🔎 Validation (challenge)

| Type | Description |
|---|---|
| HTTP-01 | fichier via HTTP |
| DNS-01 | enregistrement DNS |
| TLS-ALPN-01 | via TLS |

---

# 📦 Certbot (outil principal)

## Installer

```bash
sudo apt install certbot
```

---

## Générer certificat

```bash
certbot --nginx -d example.com
```

---

## Renouveler

```bash
certbot renew
```

---

# 🔐 Ports nécessaires

| Port | Usage |
|---|---|
| 80 | HTTP validation |
| 443 | HTTPS |

---

# 📊 Certificat

| Élément | Description |
|---|---|
| clé privée | secret |
| certificat | public |
| validité | 90 jours |

---

# 🔄 Renouvellement

👉 automatique recommandé

```bash
cron / systemd
```

---

# 📊 Let's Encrypt vs mkcert

| Critère | Let's Encrypt | mkcert |
|---|---|---|
| usage | production |
| validité | publique |
| internet | nécessaire |
| sécurité | réelle |

---

# ⚙️ Avec reverse proxy

## Traefik

```yaml
--certificatesresolvers.myresolver.acme.tlschallenge=true
```

---

## Caddy

👉 automatique sans config

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| site web | HTTPS |
| API | sécurisation |
| reverse proxy | Traefik / Caddy |
| cloud | infra |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| validité courte | 90 jours |
| dépend internet | oui |
| rate limits | restrictions |

---

# 🛡️ Bonnes pratiques

> [!warning]

- automatiser renouvellement
- protéger clé privée
- utiliser HTTPS uniquement
- rediriger HTTP → HTTPS

---

# 📦 Exemple Nginx

```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Let's Encrypt | CA gratuite |
| protocole | ACME |
| validité | 90 jours |
| outil | certbot |
| usage | production |

---

# 🎯 Conclusion

Let's Encrypt permet :

- de sécuriser facilement un site
- d’automatiser la gestion TLS
- de démocratiser HTTPS

👉 aujourd’hui indispensable pour toute application web