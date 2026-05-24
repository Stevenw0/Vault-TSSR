# 🔐 OpenSSL — Outil de chiffrement & SSL/TLS

---

# 📌 Définition

**OpenSSL** est une suite d’outils permettant de :

- chiffrer des données
- générer des certificats
- gérer TLS/SSL
- tester des connexions sécurisées

---

# 🧠 Principe

```
Données → OpenSSL → Chiffrement / Certificat / Test
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| chiffrement | protéger données |
| certificats | créer / gérer |
| TLS | sécuriser connexions |
| debug | tester SSL |

---

# 📊 Composants

| Élément | Description |
|---|---|
| libcrypto | fonctions crypto |
| libssl | TLS/SSL |
| CLI | commandes |

---

# ⚙️ Commandes essentielles

| Commande | Description |
|---|---|
| openssl version | version |
| openssl help | aide |
| openssl list -digest-algorithms | hash |
| openssl list -cipher-algorithms | chiffrement |

---

# 🔐 Hash

```bash
openssl dgst -sha256 fichier.txt
```

---

# 🔐 Chiffrement fichier

## Chiffrer

```bash
openssl enc -aes-256-cbc -in fichier.txt -out fichier.enc
```

---

## Déchiffrer

```bash
openssl enc -aes-256-cbc -d -in fichier.enc -out fichier.txt
```

---

# 🔑 Génération de clé

```bash
openssl genrsa -out private.key 2048
```

---

# 📜 Génération CSR

```bash
openssl req -new -key private.key -out request.csr
```

---

# 📄 Certificat auto-signé

```bash
openssl req -x509 -new -key private.key -out cert.pem -days 365
```

---

# 🌐 Test TLS

```bash
openssl s_client -connect example.com:443
```

---

# 📊 Formats de fichiers

| Format | Description |
|---|---|
| .pem | texte |
| .crt | certificat |
| .key | clé privée |
| .csr | demande |
| .pfx | bundle |

---

# 🔐 OpenSSL & TLS

| Usage | Exemple |
|---|---|
| HTTPS | web |
| SMTP | mail |
| VPN | sécurité |
| API | sécurisation |

---

# ⚠️ Bonnes pratiques

> [!warning]

- protéger les clés privées
- utiliser AES-256
- utiliser SHA-256+
- vérifier certificats
- éviter algos faibles

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| cert invalide | mauvais CN |
| erreur TLS | version |
| clé incorrecte | mismatch |
| connexion refusée | port |

---

# 📊 OpenSSL vs autres outils

| Outil | Usage |
|---|---|
| OpenSSL | crypto |
| GPG | chiffrement mail |
| Hashcat | cracking |
| Nmap | scan |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| OpenSSL | outil crypto |
| usage | chiffrement |
| fonctions | TLS, cert |
| avantage | complet |
| domaine | cyber |

---

# 🎯 Conclusion

OpenSSL permet :

- de gérer la sécurité des communications
- de créer et manipuler des certificats
- de tester TLS/SSL

👉 outil indispensable en :

🔥 admin système  
🔥 cybersécurité  
🔥 réseau sécurisé