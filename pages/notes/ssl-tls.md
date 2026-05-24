# 🔐 SSL / TLS — Sécurité des communications

---

# 📌 Définition

**SSL (Secure Sockets Layer)** et **TLS (Transport Layer Security)** sont des protocoles permettant de :

- chiffrer les communications
- sécuriser les échanges réseau

👉 TLS est le successeur de SSL

---

# 🧠 Principe

```
Client → TLS → Serveur
```

👉 les données sont :

- chiffrées
- authentifiées
- intégrées (non modifiées)

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| confidentialité | données chiffrées |
| intégrité | données intactes |
| authentification | serveur vérifié |

---

# 📊 SSL vs TLS

| Critère | SSL | TLS |
|---|---|---|
| statut | obsolète | utilisé |
| sécurité | faible | forte |
| version | SSL 3.0 | TLS 1.2 / 1.3 |

---

👉 SSL est **abandonné**, on utilise TLS aujourd’hui

---

# ⚙️ Fonctionnement

## Handshake TLS

1. client demande connexion
2. serveur envoie certificat
3. vérification certificat
4. échange de clés
5. communication chiffrée

---

## Schéma

```
Client → Hello
Serveur → Certificat
Client → Vérification
→ Clé partagée
→ Session sécurisée
```

---

# 📦 Certificat SSL/TLS

## Contenu

| Élément | Description |
|---|---|
| clé publique | chiffrement |
| domaine | identité |
| autorité | CA |
| validité | durée |

---

# 🔐 Autorité de certification (CA)

Exemples :

- Let's Encrypt
- DigiCert
- GlobalSign

---

# 🌐 Utilisation

| Protocole | Exemple |
|---|---|
| HTTPS | web |
| SMTPS | mail |
| FTPS | transfert |
| VPN | sécurité |

---

# 📊 Ports sécurisés

| Service | Port |
|---|---|
| HTTPS | 443 |
| SMTPS | 465 |
| IMAPS | 993 |

---

# ⚙️ Exemple HTTPS

```
http:// → https://
```

---

# 🔎 Vérification certificat

```bash
openssl s_client -connect example.com:443
```

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| certificat expiré | renouvellement |
| erreur navigateur | CA non reconnue |
| mismatch domaine | mauvais cert |
| TLS version | incompatible |

---

# 📊 TLS 1.2 vs 1.3

| Critère | TLS 1.2 | TLS 1.3 |
|---|---|---|
| sécurité | élevée | très élevée |
| handshake | plus long | plus rapide |
| performance | moyenne | meilleure |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser TLS 1.2 ou 1.3
- désactiver SSL
- renouveler certificats
- utiliser CA fiable

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| web | HTTPS |
| API | sécurisation |
| mail | SMTP TLS |
| cloud | infra |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| TLS | sécurité réseau |
| SSL | obsolète |
| certificat | identité |
| CA | autorité |
| usage | HTTPS |

---

# 🎯 Conclusion

TLS permet :

- de sécuriser les communications
- de protéger les données
- d’assurer la confiance

👉 indispensable dans toute infrastructure moderne