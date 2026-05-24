# 🔐 IPsec — Sécurisation des communications IP

---

# 📌 Définition

**IPsec (Internet Protocol Security)** est une suite de protocoles permettant de :

- sécuriser les communications IP
- chiffrer les données réseau
- authentifier les échanges

---

# 🧠 Principe

IPsec fonctionne au niveau réseau (couche 3) :

```
Machine A ⇄ IPsec ⇄ Machine B
```

👉 Les données sont protégées avant d’être envoyées

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| confidentialité | chiffrement |
| intégrité | données intactes |
| authentification | identité |
| anti-rejeu | protection |

---

# 🏗️ Architecture

```
Client → Tunnel IPsec → Serveur
```

---

# 📊 Modes IPsec

| Mode | Description |
|---|---|
| Transport | protège paquet |
| Tunnel | encapsule tout |

---

## 🧠 Différence

| Mode | Usage |
|---|---|
| Transport | host à host |
| Tunnel | VPN |

---

# 🔐 Protocoles IPsec

| Protocole | Description |
|---|---|
| AH (Authentication Header) | authentification |
| ESP (Encapsulating Security Payload) | chiffrement + auth |

---

👉 ESP est le plus utilisé

---

# ⚙️ Fonctionnement

## Étapes

1. négociation clés (IKE)
2. création tunnel
3. chiffrement données
4. transmission sécurisée

---

# 🔑 IKE (Internet Key Exchange)

| Version | Description |
|---|---|
| IKEv1 | ancien |
| IKEv2 | moderne |

---

👉 gère :

- échange de clés
- authentification

---

# 🌐 Ports IPsec

| Protocole | Port |
|---|---|
| IKE | UDP 500 |
| NAT-T | UDP 4500 |
| ESP | protocole 50 |
| AH | protocole 51 |

---

# 📦 Cas d’utilisation

| Usage | Exemple |
|---|---|
| VPN site à site | entreprise |
| VPN client | accès distant |
| cloud | interconnexion |
| sécurité réseau | chiffrement |

---

# 🧠 Exemple VPN

```
Site A ⇄ IPsec ⇄ Site B
```

---

# 🔐 Authentification

| Méthode | Description |
|---|---|
| PSK | clé partagée |
| certificat | PKI |
| login | utilisateur |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| tunnel down | clé incorrecte |
| NAT | problème |
| ports bloqués | firewall |
| mismatch config | paramètres |

---

# 📊 IPsec vs SSL VPN

| Critère | IPsec | SSL |
|---|---|---|
| couche | réseau |
| performance | élevée |
| config | complexe |
| usage | site à site |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser IKEv2
- préférer certificats
- sécuriser clés
- surveiller logs

---

# 📊 Résumé

| Élément | Description |
|---|---|
| IPsec | sécurité IP |
| mode | tunnel / transport |
| protocole | ESP |
| usage | VPN |
| avantage | sécurisé |

---

# 🎯 Conclusion

IPsec permet :

- de sécuriser les communications réseau
- de créer des VPN fiables
- de protéger les données

👉 très utilisé en entreprise pour les connexions sécurisées