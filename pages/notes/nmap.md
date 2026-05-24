# 🔎 Nmap — Network Scanner

---


# 📌 Définition

**Nmap (Network Mapper)** est un outil permettant de :

- scanner des réseaux
- détecter des hôtes
- analyser les ports et services

👉 très utilisé en :

- administration système
- audit sécurité
- pentest

---

# 🧠 Principe

```
Machine → Nmap → Cible → Réponse → Analyse
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| découverte | hôtes actifs |
| scan ports | ouverts/fermés |
| détection services | versions |
| OS detection | système |
| audit sécurité | analyse |

---

# ⚙️ Fonctionnement

## Étapes

1. envoi de paquets
2. réception des réponses
3. analyse
4. affichage résultats

---

# 📊 États des ports

| État | Description |
|---|---|
| open | port ouvert |
| closed | port fermé |
| filtered | filtré firewall |
| unfiltered | accessible |
| open|filtered | indéterminé |
| closed|filtered | indéterminé |

---

# 💻 Syntaxe de base

```bash
nmap [options] cible
```

---

# 🔥 Commandes essentielles

| Commande | Description |
|---|---|
| nmap 192.168.1.1 | scan simple |
| nmap -sS 192.168.1.1 | SYN scan |
| nmap -sT 192.168.1.1 | TCP scan |
| nmap -sU 192.168.1.1 | UDP scan |
| nmap -p 80,443 192.168.1.1 | ports spécifiques |
| nmap -p- 192.168.1.1 | tous les ports |
| nmap -sn 192.168.1.0/24 | découverte réseau |
| nmap -A 192.168.1.1 | scan complet |
| nmap -O 192.168.1.1 | détection OS |
| nmap -sV 192.168.1.1 | version services |

---

# 🔎 Types de scans

| Scan | Description |
|---|---|
| SYN (-sS) | rapide discret |
| TCP (-sT) | connexion complète |
| UDP (-sU) | ports UDP |
| FIN/XMAS/NULL | bypass firewall |
| ACK (-sA) | mapping firewall |

---

# ⚙️ Options importantes

| Option | Description |
|---|---|
| -p | ports |
| -A | scan agressif |
| -O | OS |
| -sV | services |
| -T0 → T5 | vitesse |
| -v | verbose |
| -oN | output normal |
| -oX | XML |
| -oG | grepable |

---

# 📦 Exemples pratiques

## Découverte réseau

```bash
nmap -sn 192.168.1.0/24
```

---

## Scan ports classiques

```bash
nmap 192.168.1.1
```

---

## Scan complet

```bash
nmap -A -T4 192.168.1.1
```

---

## Scan avec export

```bash
nmap -A 192.168.1.1 -oN rapport.txt
```

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| admin réseau | troubleshooting |
| pentest | audit |
| cyber | reconnaissance |
| infra | monitoring |

---

# ⚠️ Bonnes pratiques

> [!warning]

- toujours avoir une autorisation
- éviter scans agressifs en prod
- analyser les résultats
- utiliser scans ciblés

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| détection | IDS/IPS |
| blocage | firewall |
| surcharge | réseau |
| légal | interdit sans autorisation |

---

# 📊 Nmap vs autres outils

| Outil | Usage |
|---|---|
| Nmap | scan réseau |
| Wireshark | analyse trafic |
| Nessus | vulnérabilités |
| Netcat | test port |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Nmap | scanner |
| usage | réseau |
| fonction | ports/services |
| avantage | puissant |
| domaine | cyber |

---

# 🎯 Conclusion

Nmap permet :

- de cartographier un réseau
- d’identifier les services
- de détecter des vulnérabilités potentielles

👉 outil indispensable en :

🔥 admin système  
🔥 cybersécurité  
🔥 pentest