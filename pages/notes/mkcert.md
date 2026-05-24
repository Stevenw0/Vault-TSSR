# 🔐 mkcert — Certificats SSL locaux

---

# 📌 Définition

**mkcert** est un outil permettant de **générer des certificats SSL/TLS valides en local**.

👉 Utilisé pour :

- développement web sécurisé (HTTPS)
- tests locaux
- éviter les erreurs de certificat

---

# 🧠 Principe

mkcert crée :

- une **autorité de certification locale (CA)**
- des **certificats signés par cette CA**

---

## Fonctionnement

```
mkcert → CA locale → certificat → navigateur OK
```

👉 Le navigateur fait confiance au certificat

---

# ⚙️ Installation

## Windows (via Chocolatey)

```powershell
choco install mkcert
```

---

## macOS

```bash
brew install mkcert
```

---

## Linux

```bash
sudo apt install mkcert
```

---

# 🔑 Initialisation

```bash
mkcert -install
```

👉 Installe la CA locale dans :

- navigateur
- système

---

# 📦 Générer un certificat

## Exemple

```bash
mkcert localhost
```

---

## Résultat

| Fichier | Description |
|---|---|
| localhost.pem | certificat |
| localhost-key.pem | clé privée |

---

# 🌐 Exemple avec plusieurs domaines

```bash
mkcert localhost 127.0.0.1 monsite.local
```

---

# ⚙️ Utilisation

## Avec serveur web

Configurer :

- Apache
- Nginx
- Node.js

---

## Exemple Node.js

```javascript
https.createServer({
  key: fs.readFileSync("localhost-key.pem"),
  cert: fs.readFileSync("localhost.pem")
})
```

---

# 📊 Avantages

| Avantage | Description |
|---|---|
| simple | installation rapide |
| sécurisé | HTTPS réel |
| compatible | tous navigateurs |
| local | pas besoin internet |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| local uniquement | pas production |
| CA locale | spécifique machine |
| partage | non portable |

---

# 🛡️ Sécurité

> [!warning]

- ne jamais utiliser en production
- protéger la clé privée
- supprimer si non utilisé

---

# 📦 Où sont stockés les certificats ?

```bash
mkcert -CAROOT
```

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| développement web | HTTPS local |
| API locale | test |
| Docker | services sécurisés |
| microservices | communication |

---

# 📊 mkcert vs Let's Encrypt

| Critère | mkcert | Let's Encrypt |
|---|---|---|
| usage | local | production |
| internet | non | oui |
| validité | locale | globale |
| simplicité | très simple | automatisé |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| mkcert | certificats locaux |
| CA locale | oui |
| usage | dev |
| sécurité | HTTPS réel |
| limite | local uniquement |

---

# 🎯 Conclusion

mkcert permet de :

- simuler un environnement HTTPS réel
- éviter les erreurs navigateur
- travailler comme en production

👉 outil indispensable pour le **développement web moderne sécurisé**