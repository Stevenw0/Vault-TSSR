# 🔐 AAA Cisco — Authentication Authorization Accounting

## 📌 Introduction

AAA signifie :

```
Authentication
Authorization
Accounting
```

C’est un **modèle de sécurité utilisé sur les équipements Cisco** pour contrôler l’accès des utilisateurs et suivre leurs actions.

AAA permet de :

- vérifier l'identité d'un utilisateur
- définir ce qu'il a le droit de faire
- enregistrer ses actions

Ce mécanisme est utilisé pour **sécuriser l’administration des équipements réseau**.

---

# 🧠 Principe de AAA

Le fonctionnement AAA se fait en trois étapes.

| Étape | Description |
|---|---|
Authentication | vérification de l'identité |
Authorization | détermination des droits |
Accounting | journalisation des actions |

---

# 1️⃣ Authentication

L’authentification permet de **vérifier l’identité de l’utilisateur**.

Méthodes possibles :

- base locale du routeur
- serveur **RADIUS**
- serveur **TACACS+**

Exemple :

```bash
username admin secret Cisco123
```

---

# 2️⃣ Authorization

L'autorisation définit **ce que l'utilisateur peut faire après connexion**.

Exemples :

- accès en lecture seule
- accès administrateur
- accès à certaines commandes uniquement.

---

# 3️⃣ Accounting

L’accounting permet **d’enregistrer les actions effectuées par l’utilisateur**.

Cela permet :

- audit
- traçabilité
- détection d’incidents.

---

# 🖥️ Activation de AAA

Pour activer AAA sur un équipement Cisco :

```bash
aaa new-model
```

Cette commande active le système AAA sur le routeur.

---

# 👤 Authentification locale

Configuration d’un utilisateur local :

```bash
username admin secret Cisco123
```

Configuration des lignes VTY :

```bash
line vty 0 4
login local
transport input ssh
```

---

# 🌐 AAA avec serveur externe

AAA peut fonctionner avec des serveurs d’authentification.

Les deux principaux protocoles :

| Protocole | Utilisation |
|---|---|
RADIUS | authentification réseau |
TACACS+ | administration équipements Cisco |

---

# 📡 RADIUS

Caractéristiques :

- authentification centralisée
- protocole UDP
- ports 1812 / 1813

Utilisation fréquente pour :

- Wi-Fi
- VPN
- accès réseau.

---

# 🔐 TACACS+

Caractéristiques :

- protocole TCP
- port 49
- séparation Authentication / Authorization / Accounting

Utilisé pour :

- administration des équipements réseau.

---

# ⚙️ Exemple configuration AAA locale

```bash
enable
configure terminal

aaa new-model

username admin secret Cisco123

line vty 0 4
login local
transport input ssh
```

---

# 🔎 Commandes de vérification

Afficher les utilisateurs connectés :

```bash
show users
```

Afficher la configuration AAA :

```bash
show running-config
```

Afficher les sessions SSH :

```bash
show ssh
```

---

# 📊 Comparaison RADIUS vs TACACS+

| Critère | RADIUS | TACACS+ |
|---|---|---|
Transport | UDP | TCP |
Port | 1812 / 1813 | 49 |
Séparation AAA | combiné | séparé |
Utilisation | accès réseau | administration |

---

# 🛡️ Bonnes pratiques

| Bonne pratique | Description |
|---|---|
Utiliser SSH | éviter Telnet |
Utiliser AAA | contrôle des accès |
Centraliser l'authentification | serveur RADIUS/TACACS+ |
Journaliser les actions | accounting |
Utiliser des mots de passe forts | sécurité |

---

# ⚠️ Points d’attention

> [!warning]

- toujours garder un **compte local de secours**
- tester AAA avant de fermer la session
- éviter de se verrouiller hors du routeur
- sécuriser les accès SSH.

---

# 🧾 Résumé

| Élément | Fonction |
|---|---|
Authentication | vérification utilisateur |
Authorization | droits utilisateur |
Accounting | journalisation |

AAA permet de **sécuriser l’administration des équipements Cisco et de contrôler les accès réseau**.