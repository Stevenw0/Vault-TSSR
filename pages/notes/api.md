# 🔌 API — Application Programming Interface

## 📌 Définition

Une **API (Application Programming Interface)** est une **interface qui permet à deux applications ou systèmes de communiquer entre eux**.

Elle définit :

- les **règles de communication**
- les **formats de données**
- les **actions possibles**

Une API agit comme un **intermédiaire** entre un client et un service.

---

# 🧠 Principe de fonctionnement

Une API fonctionne généralement sur un modèle **requête / réponse**.

Processus :

```
Application (client)
        ↓
      API
        ↓
Service / Base de données
        ↓
Réponse envoyée au client
```

Exemple :

Une application météo demande la température :

```
Application → API météo → serveur météo → réponse JSON
```

---

# 📊 Exemple concret

| Action | Exemple |
|---|---|
| Demande d'utilisateur | afficher la météo |
| Requête API | GET /weather |
| Traitement | serveur météo récupère les données |
| Réponse | température envoyée |

---

# 🌐 API Web

Les **API Web** utilisent généralement le protocole **HTTP / HTTPS**.

Elles sont utilisées pour :

- services cloud
- applications web
- applications mobiles
- automatisation
- microservices

---

# 📦 Méthodes HTTP principales

| Méthode | Fonction |
|---|---|
| GET | récupérer des données |
| POST | créer une ressource |
| PUT | modifier une ressource |
| PATCH | modifier partiellement |
| DELETE | supprimer |

---

# 🧾 Exemple de requête API

Requête :

```bash
curl https://api.exemple.com/users
```

Réponse JSON :

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

# 📊 Formats de données

Les API utilisent souvent des formats standard.

| Format | Utilisation |
|---|---|
| JSON | format le plus courant |
| XML | utilisé dans certaines API |
| YAML | configuration |
| CSV | données simples |

Exemple JSON :

```json
{
  "utilisateur": "admin",
  "role": "system"
}
```

---

# ⚙️ Types d’API

| Type | Description |
|---|---|
| API REST | API basée sur HTTP |
| API SOAP | protocole XML plus strict |
| API GraphQL | requêtes personnalisées |
| API RPC | appel direct de fonctions |

---

# 🌍 API REST

Les **API REST** sont les plus utilisées.

Principes :

- communication HTTP
- ressources identifiées par des **URL**
- utilisation des **méthodes HTTP**
- données souvent en **JSON**

Exemple :

```
GET /users
GET /users/1
POST /users
DELETE /users/1
```

---

# 🔐 Sécurité des API

Les API utilisent plusieurs mécanismes de sécurité.

| Méthode | Description |
|---|---|
| API Key | clé d'accès |
| OAuth | authentification externe |
| JWT | token sécurisé |
| HTTPS | chiffrement des communications |

---

# ⚙️ Exemple d’utilisation d’API

Les API sont utilisées partout :

| Domaine | Exemple |
|---|---|
| Cloud | AWS API |
| Cartographie | Google Maps API |
| Paiement | Stripe API |
| Réseaux sociaux | Twitter / X API |
| Monitoring | Prometheus API |

---

# 📊 Avantages des API

| Avantage | Description |
|---|---|
| Automatisation | interaction entre services |
| Intégration | connecter plusieurs systèmes |
| Réutilisation | éviter de recréer des fonctions |
| Scalabilité | architecture microservices |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| sécurité | exposition réseau |
| dépendance | dépendance au fournisseur |
| latence | communication réseau |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| API | interface entre applications |
| Fonction | échanger des données |
| Protocoles | HTTP, REST, SOAP |
| Formats | JSON, XML |
| Utilisation | cloud, web, microservices |

Une **API permet à différents logiciels de communiquer entre eux de manière standardisée et automatisée**.