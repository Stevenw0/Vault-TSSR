# 📧 MTA — Mail Transfer Agent

---

# 📌 Définition

Un **MTA (Mail Transfer Agent)** est un serveur chargé de :

- envoyer des emails
- recevoir des emails
- transférer les emails entre serveurs

---

# 🧠 Principe

```
Client → MTA → MTA distant → Boîte mail
```

---

# 🎯 Rôle

| Fonction | Description |
|---|---|
| envoi | expédier mail |
| réception | recevoir mail |
| routage | transférer |
| file d’attente | gérer mails |

---

# 🏗️ Architecture email

```
Client → MUA → MTA → MTA → MDA → Boîte mail
```

---

# 📊 Composants mail

| Élément | Description |
|---|---|
| MUA | client mail |
| MTA | transport |
| MDA | livraison |
| SMTP | protocole |

---

# 📦 Fonctionnement

## Étapes

1. utilisateur envoie mail
2. MTA reçoit
3. MTA trouve destination
4. MTA distant reçoit
5. mail livré

---

# 🔎 Protocoles utilisés

| Protocole | Usage |
|---|---|
| SMTP | envoi |
| DNS (MX) | routage |
| IMAP | lecture |
| POP | récupération |

---

# 🌐 DNS MX

Permet de trouver le serveur mail :

```bash
dig mx example.com
```

---

# 📊 Exemples de MTA

| MTA | Description |
|---|---|
| Postfix | moderne |
| Sendmail | ancien |
| Exim | flexible |
| Qmail | performant |

---

# ⚙️ Exemple Postfix

```bash
sudo apt install postfix
```

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| TLS | chiffrement |
| auth SMTP | login |
| anti-spam | filtres |
| DKIM/SPF | validation |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| mail rejeté | SPF/DKIM |
| blacklist | IP |
| relay refusé | config |
| queue bloquée | erreur |

---

# 📊 MTA vs MUA vs MDA

| Élément | Rôle |
|---|---|
| MUA | utilisateur |
| MTA | transport |
| MDA | livraison |

---

# 📦 File d’attente

Le MTA stocke les emails :

```
Queue → envoi retry
```

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| serveur mail | entreprise |
| app | notifications |
| monitoring | alertes |
| scripts | automatisation |

---

# ⚠️ Bonnes pratiques

> [!warning]

- config DNS (MX, SPF, DKIM)
- sécuriser SMTP
- surveiller logs
- éviter open relay

---

# 📊 Résumé

| Élément | Description |
|---|---|
| MTA | transport mail |
| protocole | SMTP |
| rôle | envoyer / recevoir |
| exemple | Postfix |
| sécurité | TLS |

---

# 🎯 Conclusion

Le MTA est :

- le cœur du système mail
- responsable du transport des emails

👉 indispensable pour :

- serveurs mail
- applications
- infrastructure IT