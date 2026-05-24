# 🔐 Zero Trust — Modèle de sécurité

## 📌 Introduction

Le **Zero Trust** est une stratégie de sécurité réseau selon laquelle **aucune entité ne doit être considérée comme fiable par défaut**, qu’elle soit **à l’intérieur ou à l’extérieur du réseau de l’entreprise**.

Principe fondamental :

> **Ne jamais faire confiance, toujours vérifier**

Dans ce modèle, chaque utilisateur, appareil ou service doit **prouver son identité et son autorisation** avant d’accéder à une ressource.

---

# 🧠 Origine du modèle Zero Trust

Le concept **Zero Trust** a été introduit en **2010** par **John Kindervag**, analyste chez **Forrester Research**.

Il s’agit d’un changement majeur dans la manière de concevoir la sécurité informatique.

Ancien modèle :

```
Faire confiance, puis vérifier
```

Nouveau modèle :

```
Ne jamais faire confiance, toujours vérifier
```

Dans ce modèle :

- chaque utilisateur est considéré comme une menace potentielle
- chaque appareil doit être authentifié
- chaque accès doit être validé.

---

# 🏰 Limites du modèle de sécurité traditionnel

Les architectures classiques reposaient sur une idée simple :

```
Tout ce qui est dans le réseau est fiable
Tout ce qui est extérieur est dangereux
```

Ce modèle est souvent appelé **modèle du château fort**.

Problème :

- une fois qu’un attaquant pénètre dans le réseau
- il peut se déplacer librement (**mouvement latéral**).

Cela peut permettre d’accéder à des ressources sensibles comme :

- bases de données
- données clients
- serveurs critiques.

Les cyberattaques modernes exploitent souvent ce principe.

Exemple :

➡️ attaque de ransomware  
https://www.akamai.com/fr/glossary/what-is-ransomware

---

# 🌍 Pourquoi Zero Trust est devenu nécessaire

Plusieurs évolutions ont rendu les architectures traditionnelles obsolètes :

- télétravail
- cloud computing
- appareils mobiles
- applications SaaS
- infrastructures hybrides.

Les utilisateurs peuvent aujourd’hui accéder aux ressources :

- depuis leur domicile
- depuis un appareil mobile
- depuis un réseau externe.

Le périmètre du réseau **n’existe plus réellement**.

---

# ⚙️ Fonctionnement du modèle Zero Trust

Le modèle Zero Trust fonctionne comme **un système de contrôle permanent**.

Chaque accès est vérifié :

1️⃣ authentification de l’utilisateur  
2️⃣ vérification de l’appareil  
3️⃣ validation des autorisations  
4️⃣ analyse du comportement.

Même un utilisateur déjà authentifié doit **continuer à prouver sa légitimité**.

---

## Exemple de détection d’anomalie

Un utilisateur se connecte habituellement depuis :

```
Columbus (USA)
```

Mais une connexion est détectée depuis :

```
Berlin (Allemagne)
```

Même avec un mot de passe correct, le système peut :

- demander une authentification supplémentaire
- bloquer la connexion
- déclencher une alerte.

---

# 🧱 Composants d’une architecture Zero Trust

Le modèle Zero Trust repose sur plusieurs technologies complémentaires.

Il ne s’agit **pas d’une seule solution**, mais d’une **architecture complète**.

Les principaux composants sont :

- Architecture Zero Trust
- ZTNA (Zero Trust Network Access)
- SWG (Secure Web Gateway)
- microsegmentation.

➡️ https://www.akamai.com/our-thinking/microsegmentation

Cette approche est parfois appelée :

```
Sécurité sans périmètre
```

---

# ⚙️ Fonctionnalités clés du Zero Trust

Une architecture Zero Trust comprend généralement :

### 🔍 Visibilité

- surveillance des environnements
- visibilité des terminaux
- supervision du cloud et des infrastructures.

---

### 🔐 Vérification de l’identité

- authentification forte
- MFA (authentification multifacteur)
- validation des appareils.

---

### 🌐 Contrôle des accès

- règles d’accès granulaires
- contrôle des flux réseau
- segmentation réseau.

---

### 🧩 Segmentation des ressources

- segmentation réseau
- microsegmentation applicative
- limitation des mouvements latéraux.

---

### 🛡️ Analyse et surveillance

- analyse comportementale
- journalisation
- détection des anomalies.

---

# 📊 Principes fondamentaux du Zero Trust

Le modèle repose sur **trois piliers principaux**.

### 1️⃣ Aucun accès implicite

Aucune entité n’est considérée comme fiable par défaut.

---

### 2️⃣ Principe du moindre privilège

Chaque utilisateur possède uniquement les accès nécessaires.

---

### 3️⃣ Surveillance continue

Toutes les activités sont analysées en permanence.

---

# 🚀 Avantages du modèle Zero Trust

L’adoption du Zero Trust permet :

✔️ réduction de la surface d’attaque  
✔️ meilleure protection contre les cyberattaques  
✔️ contrôle précis des accès  
✔️ amélioration de la sécurité du cloud  
✔️ réduction des mouvements latéraux.

---

# 🏢 Accès sécurisé aux applications

Les technologies d’accès traditionnelles comme les **VPN** présentent plusieurs limites :

- gestion complexe
- accès trop large au réseau
- vulnérabilité aux vols d’identifiants.

Zero Trust permet d’accéder :

```
directement à une application
et non au réseau entier
```

---

# 🧠 Réduction de la complexité

Les infrastructures traditionnelles nécessitent souvent :

- de nombreux équipements
- plusieurs couches de sécurité
- une gestion complexe.

Une architecture Zero Trust permet :

- de simplifier la sécurité
- d’automatiser les contrôles
- d’améliorer la gestion des accès.

---

# 🌐 Zero Trust et le cloud

Les environnements cloud modernes nécessitent des architectures de sécurité adaptées.

Les solutions Zero Trust permettent :

- protéger les applications cloud
- sécuriser les accès distants
- contrôler les identités.

Exemple de solution :

➡️ MFA Akamai  
https://www.akamai.com/fr/products/akamai-mfa

➡️ Akamai Connected Cloud  
https://www.akamai.com/fr/solutions/cloud-computing

---

# 🧾 Résumé

Le **Zero Trust** est un modèle de sécurité moderne adapté aux infrastructures actuelles.

Ses principes sont simples :

✔️ ne jamais faire confiance par défaut  
✔️ vérifier chaque accès  
✔️ appliquer le moindre privilège  
✔️ surveiller en permanence.

Avec la généralisation du **cloud, du télétravail et des appareils mobiles**, ce modèle devient aujourd’hui **l’un des standards de la cybersécurité moderne**.