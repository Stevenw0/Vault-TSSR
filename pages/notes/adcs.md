# 🔐 ADCS — Active Directory Certificate Services

---

# 📌 Définition

**ADCS (Active Directory Certificate Services)** est un rôle Windows Server permettant de :

- créer une autorité de certification (CA)
- gérer des certificats numériques
- sécuriser les communications internes

---

# 🧠 Principe

ADCS agit comme une **CA interne** :

```
Client → ADCS → Certificat → Sécurisation
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| authentification | utilisateurs / machines |
| chiffrement | TLS |
| signature | documents |
| sécurité | infra |

---

# 🏗️ Architecture

```
Active Directory
   ↓
ADCS (CA)
   ↓
Certificats
   ↓
Machines / Users / Services
```

---

# 📊 Composants ADCS

| Composant | Rôle |
|---|---|
| CA | autorité de certification |
| Templates | modèles certificats |
| CRL | liste révocation |
| Enrollment | demande cert |

---

# 🔐 Types de CA

| Type | Description |
|---|---|
| Root CA | racine |
| Subordinate CA | intermédiaire |
| Enterprise CA | intégré AD |
| Standalone CA | indépendant |

---

# ⚙️ Fonctionnement

## Étapes

1. demande certificat
2. validation AD
3. émission cert
4. installation
5. utilisation

---

# 📦 Templates

Permettent de définir :

| Élément | Description |
|---|---|
| usage | SSL, VPN |
| durée | validité |
| permissions | accès |
| clé | taille |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| HTTPS interne | serveurs |
| VPN | auth |
| WiFi (802.1X) | sécurité |
| Smartcard | login |
| RDP | chiffrement |

---

# 🔄 CRL (Certificate Revocation List)

Liste des certificats invalides :

```
Certificat révoqué → CRL → refusé
```

---

# 📊 ADCS vs Let's Encrypt

| Critère | ADCS | Let's Encrypt |
|---|---|---|
| usage | interne |
| CA | privée |
| internet | non |
| gestion | AD |
| sécurité | interne |

---

# ⚙️ Installation

```powershell
Install-WindowsFeature ADCS-Cert-Authority
```

---

# 🔎 Console

```
certsrv.msc
```

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| PKI | infrastructure |
| clé privée | critique |
| accès | contrôlé |
| audit | logs |

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| mauvaise config | compromission |
| clé compromise | critique |
| CA exposée | attaque |
| templates faibles | vulnérable |

---

# ⚠️ Bonnes pratiques

> [!warning]

- isoler Root CA (offline)
- utiliser Sub CA
- sécuriser clés privées
- limiter accès templates
- surveiller logs

---

# 📊 ADCS dans une infra

```
AD → ADCS → Certificats → Services (RDP, VPN, HTTPS)
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| ADCS | CA interne |
| usage | certificats |
| intégration | AD |
| sécurité | PKI |
| avantage | contrôle total |

---

# 🎯 Conclusion

ADCS permet :

- de gérer une PKI interne
- de sécuriser les communications
- d’authentifier utilisateurs et machines

👉 indispensable en environnement entreprise Windows