# 🌐 Attaques DoS & DDoS — Déni de service

---

# 📌 Définition

## DoS (Denial of Service)

Une attaque visant à :

- rendre un service indisponible
- en surchargeant un système

---

## DDoS (Distributed Denial of Service)

Même principe mais :

- attaque lancée depuis plusieurs machines (botnet)

---

# 🧠 Principe

```
Attaquant → trafic massif → serveur saturé → indisponible
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| indisponibilité | service |
| perturbation | activité |
| sabotage | entreprise |
| diversion | autre attaque |

---

# 📊 DoS vs DDoS

| Critère | DoS | DDoS |
|---|---|---|
| source | 1 machine |
| puissance | faible |
| détection | facile |

---

| Critère | DDoS |
|---|---|
| source | multiple |
| puissance | élevée |
| détection | difficile |

---

# ⚙️ Types d’attaques

| Type | Description |
|---|---|
| volumétrique | trafic massif |
| protocole | exploitation TCP |
| applicatif | HTTP flood |

---

# 📦 Exemples

| Attaque | Description |
|---|---|
| SYN flood | TCP |
| UDP flood | trafic |
| HTTP flood | web |
| ICMP flood | ping |

---

# 🌐 Botnet (DDoS)

```
Machines infectées → contrôle attaquant → attaque simultanée
```

---

# ⚠️ Impact

| Impact | Description |
|---|---|
| site inaccessible | web |
| service down | API |
| perte financière | business |
| image | réputation |

---

# 🔎 Signes d’attaque

| Indice | Exemple |
|---|---|
| trafic élevé | anormal |
| latence | lente |
| timeouts | erreurs |
| CPU élevé | serveur |

---

# 🛡️ Protection

## Techniques

| Solution | Description |
|---|---|
| firewall | filtrage |
| rate limiting | limitation |
| WAF | web |
| CDN | protection |
| anti-DDoS | service dédié |

---

## Infrastructure

| Solution | Description |
|---|---|
| load balancing | répartir |
| scaling | absorber |
| redondance | HA |

---

# 🧠 Bonnes pratiques

> [!warning]

- monitorer trafic
- limiter requêtes
- utiliser CDN
- sécuriser infra
- prévoir plan réponse

---

# ⚙️ Exemple protection

```
Client → CDN → Reverse Proxy → Serveur
```

---

# 📊 DoS vs autres attaques

| Attaque | Différence |
|---|---|
| DoS/DDoS | indisponibilité |
| phishing | manipulation |
| ransomware | chiffrement |
| brute force | accès |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| DoS | 1 source |
| DDoS | multi sources |
| objectif | saturation |
| impact | indisponible |
| protection | filtre |

---

# 🎯 Conclusion

Les attaques DoS/DDoS :

- visent la disponibilité (CIA)
- sont très courantes

👉 pour s’en protéger :

🔥 monitoring + filtrage + architecture robuste