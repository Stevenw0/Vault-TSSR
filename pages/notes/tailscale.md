# 🔐 Tailscale — VPN moderne (WireGuard)

---

# 📌 Définition

**Tailscale** est un VPN moderne basé sur :

```
WireGuard
```

👉 Il permet de connecter des machines entre elles de façon **sécurisée et simple**.

---

# 🧠 Principe

Tailscale crée un **réseau privé virtuel (mesh)** :

```
Machine A ⇄ Machine B ⇄ Machine C
```

👉 Chaque machine peut communiquer directement avec les autres

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| VPN | sécurisé |
| accès distant | simple |
| réseau privé | global |
| configuration | automatique |

---

# 🏗️ Architecture

```
Appareil → Tailscale → Réseau privé → Appareil
```

---

# 📊 Fonctionnement

| Élément | Description |
|---|---|
| WireGuard | protocole |
| IP privée | 100.x.x.x |
| Authentification | Google / GitHub |
| Mesh | connexion directe |

---

# 🔑 Installation

## Linux

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

---

## Démarrer

```bash
tailscale up
```

---

# 🔎 Vérifier

```bash
tailscale status
```

---

# 🌐 Connexion

Chaque machine reçoit :

- une IP privée Tailscale
- accès direct aux autres machines

---

# 📦 Exemple

```
PC maison → VPS → serveur
```

👉 accessible sans port forwarding

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| chiffrement | WireGuard |
| clé | par appareil |
| ACL | contrôle accès |

---

# ⚙️ Fonctionnalités

| Fonction | Description |
|---|---|
| NAT traversal | traverse NAT |
| subnet routing | accès LAN |
| exit node | accès internet |
| DNS | intégré |

---

# 🌐 Subnet routing

Permet d’accéder à un réseau local :

```bash
tailscale up --advertise-routes=192.168.1.0/24
```

---

# 🌍 Exit node

Utiliser une machine comme sortie internet :

```bash
tailscale up --advertise-exit-node
```

---

# 📊 Tailscale vs VPN classique

| Critère | Tailscale | VPN classique |
|---|---|---|
| config | simple | complexe |
| NAT | automatique | manuel |
| mesh | oui | non |
| performance | élevée | variable |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| accès serveur | SSH |
| homelab | réseau perso |
| entreprise | remote |
| dev | environnement |

---

# ⚠️ Bonnes pratiques

> [!warning]

- sécuriser comptes
- utiliser ACL
- limiter accès
- surveiller connexions

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Tailscale | VPN |
| protocole | WireGuard |
| IP | 100.x.x.x |
| usage | accès distant |
| avantage | simplicité |

---

# 🎯 Conclusion

Tailscale permet :

- de créer un réseau privé sécurisé
- sans configuration complexe
- sans ouvrir de ports

👉 idéal pour :

- homelab
- admin sys
- accès distant rapide