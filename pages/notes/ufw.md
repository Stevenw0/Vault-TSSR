# 🔥 UFW — Uncomplicated Firewall

---

# 📌 Définition

UFW (Uncomplicated Firewall) est un outil permettant de :

- gérer facilement un pare-feu Linux
- simplifier l’utilisation d’iptables / nftables

👉 utilisé principalement sur :

- Ubuntu
- Debian

---

# 🧠 Principe

```
Règles UFW → Filtrage → Autoriser / Bloquer trafic
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| sécuriser | système |
| contrôler | trafic |
| simplifier | Firewall |
| protéger | services |

---

# ⚙️ Fonctionnement

- fonctionne sur iptables/nftables
- applique des règles simples
- filtre entrées/sorties

---

# 📊 États du firewall

| État | Description |
|---|---|
| active | Firewall ON |
| inactive | Firewall OFF |

---

# 🔥 Commandes essentielles

## Activer / désactiver

```bash
sudo ufw enable
sudo ufw disable
```

---

## Statut

```bash
sudo ufw status
sudo ufw status verbose
```

---

## Autoriser / refuser

```bash
sudo ufw allow 22
sudo ufw deny 80
```

---

## Supprimer règle

```bash
sudo ufw delete allow 22
```

---

# 🌐 Ports & services

| Exemple | Description |
|---|---|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |

---

# 📦 Exemples pratiques

## Autoriser SSH

```bash
sudo ufw allow ssh
```

---

## Autoriser HTTP/HTTPS

```bash
sudo ufw allow 80
sudo ufw allow 443
```

---

## Refuser une IP

```bash
sudo ufw deny from 192.168.1.10
```

---

## Autoriser réseau

```bash
sudo ufw allow from 192.168.1.0/24
```

---

# 🔐 Règles avancées

## Port + protocole

```bash
sudo ufw allow 22/tcp
sudo ufw allow 53/udp
```

---

## Sortant

```bash
sudo ufw allow out 53
```

---

# 📊 Politique par défaut

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- autoriser SSH avant d’activer UFW
- bloquer tout sauf nécessaire
- vérifier règles régulièrement
- utiliser logging

---

# 🔎 Logs

```bash
sudo ufw logging on
```

---

# ⚠️ Erreurs courantes

| Erreur | Risque |
|---|---|
| bloquer SSH | perte accès |
| règles larges | sécurité faible |
| oublier IPV6 | faille |
| Firewall OFF | vulnérable |

---

# 📊 UFW vs iptables

| Critère | UFW | iptables |
|---|---|---|
| facilité | simple |
| contrôle | limité |
| usage | admin |
| puissance | élevée |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| serveur web | HTTP |
| SSH | accès distant |
| VM | sécurité |
| homelab | filtrage |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| UFW | Firewall |
| usage | Linux |
| avantage | simple |
| base | iptables |
| rôle | sécurité |

---

# 🎯 Conclusion

UFW permet :

- de sécuriser rapidement un serveur
- de contrôler les accès réseau
- de simplifier la gestion Firewall

👉 indispensable pour :

🔥 serveur Linux  
🔥 homelab  
🔥 cybersécurité de base
