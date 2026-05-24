# 📡 Nagios & NCPA — Supervision IT

---

# 📌 Définition

## Nagios

**Nagios** est un outil de supervision permettant de :

- surveiller serveurs et services
- détecter les pannes
- alerter en cas de problème

---

## NCPA

**NCPA (Nagios Cross Platform Agent)** est un agent permettant :

- de remonter des métriques
- depuis Linux ou Windows
- vers Nagios

---

# 🧠 Principe

```
Machine → NCPA → NRDP/API → Nagios → Alertes
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| supervision | systèmes |
| monitoring | services |
| alertes | incidents |
| visibilité | infra |

---

# 🏗️ Architecture

```
[ Serveur ]
     ↓
   NCPA
     ↓
   NRDP
     ↓
  Nagios XI
```

---

# 📊 Composants

| Élément | Description |
|---|---|
| Nagios Core/XI | supervision |
| NCPA | agent |
| NRDP | transport passif |
| plugins | checks |

---

# 🔄 Types de checks

| Type | Description |
|---|---|
| actif | Nagios interroge |
| passif | agent envoie |

---

# ⚙️ Fonctionnement NCPA

## Étapes

1. collecte métriques
2. exécution check
3. envoi données
4. affichage Nagios

---

# 📦 Exemple métriques

| Métrique | Exemple |
|---|---|
| CPU | utilisation |
| RAM | mémoire |
| DISK | espace |
| Network | trafic |

---

# ⚙️ Configuration NCPA

## Fichier

```
/usr/local/ncpa/etc/ncpa.cfg
```

---

## Exemple NRDP

```ini
[nrdp]
parent = http://nagios-server/nrdp/
token = mytoken
hostname = serveur1
```

---

## Checks passifs

```ini
[passive checks]
serveur1|CPU = cpu/percent --warning 90 --critical 95
```

---

# 🪟 NCPA Windows

| Élément | Description |
|---|---|
| installation | .exe |
| service | ncpa_listener |
| config | GUI ou fichier |

---

# 🌐 NRDP

## Rôle

- recevoir données passives
- transmettre à Nagios

---

# 📊 Ports utilisés

| Service | Port |
|---|---|
| NCPA API | 5693 |
| NRDP | HTTP/HTTPS |
| Nagios | 80 / 443 |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| NO TOKENS | config |
| host pending | check manquant |
| rien remonte | hostname |
| erreur check | syntaxe |

---

# 🛡️ Bonnes pratiques

> [!warning]

- sécuriser token
- utiliser HTTPS
- vérifier hostname identique
- redémarrer NCPA
- monitorer logs

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| token | authentification |
| firewall | filtrage |
| TLS | chiffrement |
| accès | limité |

---

# 📊 Nagios vs autres outils

| Outil | Usage |
|---|---|
| Nagios | supervision |
| Zabbix | monitoring |
| Prometheus | metrics |
| Grafana | visualisation |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| entreprise | serveurs |
| cloud | infra |
| homelab | monitoring |
| devops | alertes |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Nagios | supervision |
| NCPA | agent |
| NRDP | transport |
| checks | monitoring |
| usage | infra |

---

# 🎯 Conclusion

Nagios + NCPA permettent :

- de surveiller une infrastructure complète
- de recevoir des alertes en temps réel
- d’assurer la disponibilité des services

👉 solution classique et efficace en :

🔥 entreprise  
🔥 sysadmin  
🔥 monitoring IT