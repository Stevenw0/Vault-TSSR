

# ☁️ IaaS / PaaS / SaaS — Modèles de services Cloud

---

# 📌 Définition

Les modèles cloud définissent :

- qui gère l’infrastructure
- qui gère les applications
- le niveau d’abstraction fourni

---

# 🧠 Principe

```
Plus on va vers SaaS :
↓ moins d’administration
↓ plus de simplicité
↓ moins de contrôle
```

---

# 📊 Les 3 modèles principaux

| Modèle | Signification |
|---|---|
| IaaS | Infrastructure as a Service |
| PaaS | Platform as a Service |
| SaaS | Software as a Service |

---

# 🧱 1️⃣ IaaS — Infrastructure as a Service

---

# 📌 Définition

Le fournisseur cloud fournit :

- serveurs
- stockage
- réseau
- virtualisation

👉 le client gère le reste

---

# 🧠 Fonctionnement

```
Cloud Provider
    ↓
VM / Réseau / Stockage
    ↓
Client administre OS + apps
```

---

# 📊 Ce que gère le fournisseur

| Élément | Géré |
|---|---|
| matériel | ✅ |
| réseau | ✅ |
| hyperviseur | ✅ |

---

# 📊 Ce que gère le client

| Élément | Géré |
|---|---|
| OS | ✅ |
| applications | ✅ |
| sécurité OS | ✅ |

---

# 🌐 Exemples

| Service | Fournisseur |
|---|---|
| EC2 | AWS |
| Azure VM | Microsoft |
| Compute Engine | Google |

---

# ✔️ Avantages

| Avantage | Description |
|---|---|
| contrôle | élevé |
| flexibilité | forte |
| personnalisation | totale |

---

# ⚠️ Inconvénients

| Limite | Description |
|---|---|
| administration | importante |
| maintenance | client |
| sécurité | responsabilité client |

---

# 🧱 2️⃣ PaaS — Platform as a Service

---

# 📌 Définition

Le fournisseur gère :

- infrastructure
- OS
- runtime

👉 le client déploie seulement ses applications

---

# 🧠 Fonctionnement

```
Cloud Provider
    ↓
OS + Runtime + Infra
    ↓
Client déploie application
```

---

# 📊 Ce que gère le fournisseur

| Élément | Géré |
|---|---|
| matériel | ✅ |
| OS | ✅ |
| middleware | ✅ |
| runtime | ✅ |

---

# 📊 Ce que gère le client

| Élément | Géré |
|---|---|
| application | ✅ |
| données | ✅ |

---

# 🌐 Exemples

| Service | Fournisseur |
|---|---|
| Heroku | Heroku |
| App Engine | Google |
| Azure App Service | Microsoft |

---

# ✔️ Avantages

| Avantage | Description |
|---|---|
| simplicité | élevée |
| déploiement | rapide |
| maintenance | réduite |

---

# ⚠️ Inconvénients

| Limite | Description |
|---|---|
| contrôle | limité |
| dépendance fournisseur | élevée |
| personnalisation | réduite |

---

# 🧱 3️⃣ SaaS — Software as a Service

---

# 📌 Définition

Le fournisseur gère tout :

- infrastructure
- application
- maintenance

👉 le client utilise simplement le logiciel

---

# 🧠 Fonctionnement

```
Utilisateur
    ↓
Application web
    ↓
Cloud Provider gère tout
```

---

# 📊 Ce que gère le fournisseur

| Élément | Géré |
|---|---|
| infrastructure | ✅ |
| OS | ✅ |
| application | ✅ |
| sécurité | ✅ |

---

# 📊 Ce que gère le client

| Élément | Géré |
|---|---|
| utilisation | ✅ |
| données utilisateur | ✅ |

---

# 🌐 Exemples

| Service | Fournisseur |
|---|---|
| Google Workspace | Google |
| Microsoft 365 | Microsoft |
| Dropbox | Dropbox |

---

# ✔️ Avantages

| Avantage | Description |
|---|---|
| simplicité | maximale |
| maintenance | aucune |
| accessibilité | web |

---

# ⚠️ Inconvénients

| Limite | Description |
|---|---|
| contrôle | faible |
| dépendance cloud | forte |
| personnalisation | limitée |

---

# 🔄 Comparaison globale

| Élément | IaaS | PaaS | SaaS |
|---|---|---|---|
| contrôle | élevé | moyen | faible |
| administration | élevée | moyenne | faible |
| simplicité | faible | bonne | excellente |
| flexibilité | élevée | moyenne | faible |

---

# 🧠 Qui gère quoi ?

| Élément | IaaS | PaaS | SaaS |
|---|---|---|---|
| réseau | fournisseur | fournisseur | fournisseur |
| OS | client | fournisseur | fournisseur |
| app | client | client | fournisseur |

---

# 🌐 Cas d’utilisation

| Besoin | Modèle |
|---|---|
| VM custom | IaaS |
| développement rapide | PaaS |
| application prête | SaaS |

---

# 🔐 Sécurité

| Modèle | Responsabilité client |
|---|---|
| IaaS | élevée |
| PaaS | moyenne |
| SaaS | faible |

---

👉 modèle :

```
Shared Responsibility Model
```

---

# 🛡️ Bonnes pratiques

> [!warning]

- sécuriser accès cloud
- utiliser MFA
- surveiller permissions
- sauvegarder données
- comprendre responsabilités

---

# 📊 Résumé

| Modèle | Description |
|---|---|
| IaaS | infrastructure |
| PaaS | plateforme |
| SaaS | logiciel |

---

# 🎯 Conclusion

Les modèles cloud permettent différents niveaux :

- de contrôle
- de gestion
- de simplicité

👉 choix selon besoin :

🔥 IaaS → contrôle maximal  
🔥 PaaS → développement rapide  
🔥 SaaS → simplicité totale