# 🔗 Middleware — Intergiciel

---

# 📌 Définition

Un **middleware (intergiciel)** est un logiciel intermédiaire permettant :

- de faire communiquer plusieurs applications
- de gérer les échanges de données
- de simplifier les architectures complexes

---

# 🧠 Principe

```
Application A → Middleware → Application B
```

👉 agit comme une couche intermédiaire

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| communication | entre systèmes |
| abstraction | simplifier |
| intégration | applications |
| interopérabilité | compatibilité |

---

# 🏗️ Architecture

```
Frontend → Middleware → Backend / DB
```

---

# 📊 Rôles principaux

| Rôle | Description |
|---|---|
| routage | redirection |
| transformation | données |
| sécurité | auth |
| gestion erreurs | fallback |

---

# ⚙️ Types de middleware

| Type | Description |
|---|---|
| API Gateway | gestion API |
| Message Broker | files (RabbitMQ) |
| RPC | appels distants |
| Middleware web | Express, Django |
| ESB | bus de services |

---

# 📦 Exemples

| Middleware | Usage |
|---|---|
| Nginx | reverse proxy |
| Traefik | routing |
| RabbitMQ | messages |
| Kafka | streaming |
| Express.js | web |

---

# 🔄 Fonctionnement

## Étapes

1. réception requête
2. traitement middleware
3. appel backend
4. réponse

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| API | microservices |
| web | backend |
| cloud | orchestration |
| entreprise | intégration |

---

# 🔐 Middleware & sécurité

| Fonction | Description |
|---|---|
| authentification | JWT |
| autorisation | RBAC |
| chiffrement | TLS |
| filtrage | firewall |

---

# ⚠️ Avantages

| Avantage | Description |
|---|---|
| modularité | flexible |
| scalabilité | évolutif |
| centralisation | logique |
| intégration | facile |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| complexité | architecture |
| latence | traitement |
| dépendance | central |
| debug | difficile |

---

# 📊 Middleware vs API

| Élément | Middleware | API |
|---|---|---|
| rôle | intermédiaire |
| fonction | traitement |
| usage | backend |

---

| Élément | API |
|---|---|
| rôle | interface |
| fonction | exposer |
| usage | client |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| middleware | couche intermédiaire |
| rôle | communication |
| usage | apps |
| avantage | flexible |
| limite | complexité |

---

# 🎯 Conclusion

Le middleware permet :

- de connecter des systèmes
- de centraliser la logique
- de simplifier les échanges

👉 essentiel dans :

🔥 architectures modernes  
🔥 microservices  
🔥 cloud