# 🦈 Wireshark — Analyseur de paquets réseau

---

# 📌 Définition

**Wireshark** est un outil permettant de :

- capturer le trafic réseau
- analyser les paquets
- diagnostiquer des problèmes réseau ou sécurité

---

# 🧠 Principe

```
Réseau → Wireshark → Capture → Analyse
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| capture | trafic réseau |
| analyse | paquets |
| debug | réseau |
| sécurité | détection |

---

# 🏗️ Fonctionnement

## Étapes

1. capture du trafic
2. décodage des paquets
3. affichage détaillé
4. analyse

---

# 📦 Interface

| Zone | Description |
|---|---|
| liste paquets | résumé |
| détails | protocole |
| hexadécimal | brut |

---

# 📊 Protocoles analysés

| Protocole | Exemple |
|---|---|
| HTTP | web |
| HTTPS | sécurisé |
| DNS | résolution |
| TCP/UDP | transport |
| ARP | réseau local |

---

# 🔎 Filtres (très important)

## Filtre capture

```bash
port 80
```

---

## Filtre affichage

```bash
http
ip.addr == 192.168.1.1
tcp.port == 443
dns
```

---

# 🔥 Commandes / actions utiles

| Action | Description |
|---|---|
| start capture | démarrer |
| stop capture | arrêter |
| follow TCP stream | voir session |
| export | sauvegarde |

---

# 📊 Exemple analyse

## HTTP

- voir requête GET
- voir réponse serveur

---

## DNS

- requêtes
- réponses

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| debug réseau | problème |
| sécurité | analyse attaque |
| forensic | investigation |
| admin | monitoring |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| trafic chiffré | HTTPS |
| volume | important |
| complexité | analyse |

---

# 🔐 Sécurité

| Risque | Description |
|---|---|
| sniffing | interception |
| données sensibles | visibles |
| réseau non sécurisé | vulnérable |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser sur réseau autorisé
- filtrer trafic
- analyser prudemment
- sécuriser captures

---

# 📊 Wireshark vs autres outils

| Outil | Usage |
|---|---|
| Wireshark | analyse |
| tcpdump | CLI |
| Nmap | scan |
| Netstat | connexions |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Wireshark | analyseur |
| usage | réseau |
| fonction | capture |
| avantage | puissant |
| domaine | cyber |

---

# 🎯 Conclusion

Wireshark permet :

- de voir ce qui se passe réellement sur le réseau
- d’analyser les paquets en détail
- de diagnostiquer des problèmes

👉 outil indispensable en :

🔥 réseau  
🔥 cybersécurité  
🔥 forensic