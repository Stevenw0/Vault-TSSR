# 🌐 DMZ — Demilitarized Zone

---

# 📌 Définition

Une **DMZ (zone démilitarisée)** est une zone réseau intermédiaire :

- entre le réseau interne (LAN)
- et Internet

👉 utilisée pour exposer des services **sans exposer le réseau interne**

---

# 🧠 Principe

```
Internet → DMZ → LAN
```

👉 séparation des zones de sécurité

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| isoler | réseau interne |
| sécuriser | services exposés |
| contrôler | accès |
| limiter | propagation attaque |

---

# 🏗️ Architecture

## Schéma simple

```
Internet
   ↓
Firewall
   ↓
DMZ (serveurs exposés)
   ↓
Firewall
   ↓
LAN (interne)
```

---

# 📦 Services en DMZ

| Service | Exemple |
|---|---|
| web | HTTP / HTTPS |
| mail | SMTP |
| DNS | public |
| reverse proxy | Nginx / Traefik |

---

# 🔐 Règles de sécurité

| Flux | Autorisation |
|---|---|
| Internet → DMZ | autorisé (contrôlé) |
| DMZ → LAN | très limité |
| LAN → DMZ | autorisé |
| Internet → LAN | interdit ❌ |

---

# ⚠️ Pourquoi une DMZ ?

| Problème | Solution |
|---|---|
| exposition directe | DMZ |
| attaque serveur web | isolation |
| compromission | confinement |

---

# 🔎 Exemple concret

## Site web

```
Internet → Reverse Proxy (DMZ) → Serveur interne
```

---

# 🛡️ Sécurité

| Protection | Description |
|---|---|
| firewall | filtrage |
| IDS/IPS | détection |
| WAF | web |
| segmentation | réseau |

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| mauvaise config | accès LAN |
| service vulnérable | attaque |
| ouverture excessive | surface |

---

# 🧠 Bonnes pratiques

> [!warning]

- limiter accès DMZ → LAN
- isoler services critiques
- utiliser reverse proxy
- mettre à jour serveurs
- surveiller logs

---

# 📊 DMZ vs LAN

| Zone | Description |
|---|---|
| DMZ | exposée |
| LAN | protégée |

---

# 📊 DMZ vs Reverse Proxy

| Élément | Différence |
|---|---|
| DMZ | zone réseau |
| reverse proxy | service |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| entreprise | site web |
| cloud | services |
| homelab | self-host |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| DMZ | zone intermédiaire |
| rôle | sécurité |
| usage | services exposés |
| avantage | isolation |
| risque | config |

---

# 🎯 Conclusion

La DMZ permet :

- de sécuriser les services exposés
- de protéger le réseau interne
- de limiter les impacts d’attaque

👉 élément clé en architecture réseau sécurisée

🔥 indispensable en entreprise et infra exposée