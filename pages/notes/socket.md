# 🔌 Sockets & WebSockets

## 📌 Introduction

Les **sockets** sont des mécanismes permettant à des programmes de **communiquer entre eux via le réseau**.

Ils sont utilisés dans :

- applications réseau
- serveurs web
- scripts réseau
- systèmes distribués

Les **WebSockets** sont une évolution permettant une **communication temps réel bidirectionnelle via le web**.

---

# 🧠 Qu’est-ce qu’un socket

Un **socket** est un point de communication réseau identifié par :

```
IP + Port
```

Exemple :

```
192.168.1.10:80
```

---

# ⚙️ Fonctionnement d’un socket

Communication classique :

```
Client
 ↓ (connexion)
Serveur (socket ouvert)
 ↓
Échange de données
```

---

# 📊 Types de sockets

| Type | Description |
|---|---|
| TCP | fiable, orienté connexion |
| UDP | rapide, sans connexion |
| UNIX socket | communication locale |

---

# 🔗 Socket TCP

Caractéristiques :

| Élément | Description |
|---|---|
| Connexion | obligatoire |
| Fiabilité | élevée |
| Ordre | garanti |
| Usage | web, ssh, ftp |

---

# 📡 Socket UDP

Caractéristiques :

| Élément | Description |
|---|---|
| Connexion | non |
| Fiabilité | faible |
| Rapidité | élevée |
| Usage | streaming, DNS |

---

# 🧾 Exemple socket (client TCP)

```bash
nc 127.0.0.1 80
```

---

# 🧾 Voir les sockets actifs

```bash
ss -tulnp
```

ou

```bash
netstat -tulnp
```

---

# 🌐 WebSockets

## 📌 Définition

Les **WebSockets** permettent une **communication persistante et bidirectionnelle entre client et serveur via HTTP**.

Contrairement à HTTP classique :

- pas besoin de reconnecter à chaque requête
- communication en temps réel

---

# 🧠 Fonctionnement WebSocket

Processus :

```
HTTP (Handshake)
 ↓
Upgrade vers WebSocket
 ↓
Connexion persistante
 ↓
Échanges bidirectionnels
```

---

# 📊 HTTP vs WebSocket

| Critère | HTTP | WebSocket |
|---|---|---|
| Connexion | courte | persistante |
| Communication | client → serveur | bidirectionnelle |
| Temps réel | non | oui |
| Performance | moyenne | élevée |

---

# 📦 Ports WebSocket

| Protocole | Port |
|---|---|
| ws:// | 80 |
| wss:// | 443 |

---

# ⚙️ Exemple WebSocket (JavaScript)

```javascript
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
  socket.send("Hello serveur");
};

socket.onmessage = (event) => {
  console.log("Message reçu :", event.data);
};
```

---

# 📊 Cas d’utilisation WebSocket

| Domaine | Exemple |
|---|---|
| Chat | messagerie instantanée |
| Jeux | multijoueur |
| Trading | données temps réel |
| Monitoring | dashboards live |
| IoT | communication devices |

---

# ⚠️ Points d’attention

> [!warning]

- les WebSockets restent ouverts → consommation ressources
- nécessite gestion des connexions
- sécurité avec TLS (wss://)

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Socket | point de communication réseau |
| TCP | fiable |
| UDP | rapide |
| WebSocket | communication temps réel |
| Usage | applications réseau modernes |

Les **sockets permettent la communication réseau**, tandis que les **WebSockets permettent des échanges temps réel persistants entre client et serveur**.