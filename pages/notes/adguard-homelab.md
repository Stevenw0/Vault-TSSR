# 🛡️ AdGuard Home — DNS filtrant (Homelab)

---

# 📌 Définition

**AdGuard Home** est un serveur DNS local permettant de :

- filtrer les publicités et trackers
- sécuriser le réseau
- gérer les noms de domaine internes

👉 utilisé comme DNS principal du réseau

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| filtrage | pubs / trackers |
| sécurité | domaines malveillants |
| DNS local | homelab |
| centralisation | réseau |

---

# 🧠 Fonctionnement global

```
Appareil (PC / mobile)
        ↓
DNS (AdGuard)
        ↓
AdGuard Home
        ↓
DNS externe (Cloudflare / Google)
```

---

# 🌐 Rôle dans un homelab

👉 AdGuard agit comme :

```
DNS central du réseau
```

---

👉 Tous les appareils utilisent :

```
IP_DU_SERVEUR_ADGUARD
```

---

# 🔎 Fonctionnalités principales

---

## 🔹 1. Filtrage DNS

- blocage publicités
- blocage trackers
- blocage malware

---

## 🔹 2. DNS personnalisé

👉 domaines internes :

```
app.local
grafana.local
service.home
```

---

👉 ou domaine réel :

```
app.exemple.com → IP_SERVEUR
```

---

## 🔹 3. Résolution DNS

AdGuard utilise des DNS publics :

| DNS | IP |
|---|---|
| Cloudflare | 1.1.1.1 |
| Google | 8.8.8.8 |
| Quad9 | 9.9.9.9 |

---

# ⚙️ Configuration de base

---

## 🔹 DNS des clients

👉 config réseau :

```
DNS = IP_ADGUARD
```

---

## 🔹 DNS upstream

Dans AdGuard :

```
1.1.1.1
1.0.0.1
```

---

# 🏷️ DNS local (important homelab)

👉 wildcard DNS :

```
*.exemple.com → IP_SERVEUR
```

---

👉 permet :

- accès local
- compatibilité Traefik
- reverse proxy fonctionnel

---

# 🧪 Exemple concret

## Accès service

```
https://grafana.exemple.com
```

---

## Résolution DNS

```
grafana.exemple.com → 192.168.X.X
```

---

## Traefik

```
redirige vers container Grafana
```

---

# 🔐 Avantages

| Avantage | Description |
|---|---|
| blocage global | réseau |
| performance | moins requêtes |
| sécurité | DNS filtré |
| centralisation | simple |
| homelab | pratique |

---

# 📊 Interface Web

Accessible via :

```
http://IP_SERVEUR:3000
```

---

## Permet de :

- voir requêtes DNS
- voir domaines bloqués
- configurer règles

---

# 🧪 Debug rapide

---

## Tester DNS

```bash
nslookup google.com IP_ADGUARD
```

---

## Tester domaine local

```bash
nslookup service.exemple.com IP_ADGUARD
```

---

## Dashboard

- Top domains
- Blocked requests

---

# ❌ Problèmes fréquents

---

## Internet HS

👉 causes :

- DNS upstream incorrect
- AdGuard arrêté

---

## Domaine local ne marche pas

👉 vérifier :

- règle DNS
- cache client

---

## Traefik inaccessible

👉 vérifier :

- DNS pointe vers serveur
- container actif

---

# 🧠 Bonnes pratiques

> [!warning]

- utiliser AdGuard comme DNS principal
- configurer plusieurs DNS upstream
- utiliser wildcard DNS
- vérifier logs régulièrement
- éviter blocage trop agressif

---

# 🔄 AdGuard vs Pi-hole

| Critère | AdGuard | Pi-hole |
|---|---|---|
| interface | moderne |
| config | simple |
| performance | élevée |
| fonctionnalités | avancées |

---

# 🏗️ Architecture homelab

```
Appareils
   ↓
AdGuard Home
   ↓
Traefik
   ↓
Containers Docker
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| AdGuard | DNS filtrant |
| rôle | central |
| filtrage | pub/malware |
| DNS local | homelab |
| usage | réseau |

---

# 🎯 Conclusion

AdGuard Home permet :

- de sécuriser le réseau
- de bloquer pubs et trackers
- de gérer les DNS du homelab

👉 remplace :

🔥 DNS routeur  
🔥 bloqueur pub local  
🔥 gestion DNS manuelle  

👉 indispensable en homelab moderne 🚀