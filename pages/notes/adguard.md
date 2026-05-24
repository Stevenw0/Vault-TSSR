# 🛡️ AdGuard — DNS & Blocage de publicités

---

# 📌 Définition

**AdGuard** est une solution permettant de :

- bloquer les publicités
- filtrer le trafic DNS
- protéger la vie privée

👉 Fonctionne principalement comme un **serveur DNS filtrant**

---

# 🧠 Principe

AdGuard intercepte les requêtes DNS :

```
Appareil → AdGuard → DNS → Internet
```

---

## Fonctionnement

```
Requête DNS → AdGuard → filtre → réponse
```

👉 bloque les domaines indésirables

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| blocage pub | DNS |
| sécurité | anti-tracking |
| contrôle | parental |
| performance | moins requêtes |

---

# 📦 Versions

| Version | Description |
|---|---|
| AdGuard Home | serveur local |
| AdGuard DNS | service public |
| AdGuard App | client |

---

# 🏗️ Architecture

```
Appareils → AdGuard → DNS externe (Google, Cloudflare)
```

---

# ⚙️ Installation (AdGuard Home)

## Docker

```bash
docker run -d \
  -p 53:53/tcp -p 53:53/udp \
  -p 3000:3000 \
  adguard/adguardhome
```

---

## Accès interface

```
http://IP:3000
```

---

# 🌐 Configuration

## Définir DNS

- config routeur → DNS = IP AdGuard
- ou config appareil

---

# 📊 Fonctionnalités

| Fonction | Description |
|---|---|
| blocklists | listes pubs |
| logs DNS | suivi |
| statistiques | trafic |
| contrôle parental | filtrage |

---

# 🔐 Sécurité

| Fonction | Description |
|---|---|
| DNS over HTTPS | sécurisé |
| DNS over TLS | chiffré |
| blocage malware | protection |

---

# 📊 AdGuard vs Pi-hole

| Critère | AdGuard | Pi-hole |
|---|---|---|
| interface | moderne | simple |
| config | facile | manuel |
| DNS sécurisé | intégré | option |
| performance | élevée | élevée |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| maison | bloc pub |
| entreprise | filtrage DNS |
| homelab | monitoring |
| sécurité | anti-tracking |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| DNS uniquement | pas blocage complet |
| contournement | possible |
| faux positifs | blocage légitime |

---

# ⚠️ Bonnes pratiques

> [!warning]

- mettre DNS au niveau routeur
- maintenir blocklists
- surveiller logs
- tester exclusions

---

# 📦 Exemple flux

```
PC → AdGuard → DNS Cloudflare → Internet
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| AdGuard | DNS filtrant |
| usage | bloc pub |
| sécurité | DNS chiffré |
| avantage | simple |
| limite | DNS only |

---

# 🎯 Conclusion

AdGuard permet :

- de bloquer les pubs efficacement
- de sécuriser le DNS
- de contrôler le trafic réseau

👉 idéal pour :

- maison
- homelab
- protection réseau simple