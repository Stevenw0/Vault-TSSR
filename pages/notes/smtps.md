# 📧 SMTPS — Secure SMTP

---

# 📌 Définition

**SMTPS (SMTP Secure)** est une version sécurisée du protocole SMTP permettant :

- d’envoyer des emails
- avec chiffrement TLS/SSL

---

# 🧠 Principe

```
Client → SMTPS → Serveur mail
```

👉 Les données sont **chiffrées** pendant le transport

---

# 📊 Ports SMTP

| Port | Usage |
|---|---|
| 25 | SMTP (non sécurisé) |
| 587 | SMTP + STARTTLS |
| 465 | SMTPS (SSL direct) |

---

# 🔐 Différence SMTPS vs STARTTLS

| Critère | SMTPS | STARTTLS |
|---|---|---|
| chiffrement | immédiat |
| port | 465 |
| connexion | TLS direct |

---

## STARTTLS

| Critère | Description |
|---|---|
| port | 587 |
| chiffrement | après connexion |
| usage | standard actuel |

---

👉 Aujourd’hui :

- SMTPS (465) = historique mais encore utilisé
- STARTTLS (587) = recommandé

---

# ⚙️ Fonctionnement

## SMTPS

```
Connexion TLS → Authentification → Envoi mail
```

---

## STARTTLS

```
Connexion SMTP → STARTTLS → TLS → Envoi
```

---

# 📦 Exemple configuration

## Client mail

| Paramètre | Valeur |
|---|---|
| serveur SMTP | smtp.example.com |
| port | 465 |
| sécurité | SSL/TLS |
| auth | login/password |

---

# 🌐 Exemple en ligne de commande

```bash
openssl s_client -connect smtp.example.com:465
```

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| TLS | chiffrement |
| Authentification | obligatoire |
| Certificat | serveur |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| connexion refusée | port fermé |
| certificat invalide | TLS |
| auth échouée | mauvais credentials |
| mail rejeté | blacklist |

---

# 📊 SMTPS vs SMTP

| Critère | SMTP | SMTPS |
|---|---|---|
| sécurité | non |
| chiffrement | aucun |
| usage | legacy |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| envoi mail | serveur SMTP |
| applications | alertes |
| scripts | automation |
| services | monitoring |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser TLS (465 ou 587)
- éviter port 25
- vérifier certificats
- sécuriser authentification

---

# 📊 Résumé

| Élément | Description |
|---|---|
| SMTPS | SMTP sécurisé |
| port | 465 |
| sécurité | TLS direct |
| alternative | STARTTLS |
| usage | envoi mails |

---

# 🎯 Conclusion

SMTPS permet :

- de sécuriser l’envoi des emails
- de protéger les données
- d’éviter les interceptions

👉 aujourd’hui :

- STARTTLS est souvent préféré
- mais SMTPS reste utilisé