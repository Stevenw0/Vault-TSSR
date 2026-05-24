# 🌐 Ports, Protocoles et Exposition Internet

---

# 📌 Principe

- Chaque service réseau écoute sur un ou plusieurs ports
- Les ports permettent d’identifier les services

---

# 🧠 Importance

| Élément | Description |
|---|---|
| ports | points d’entrée |
| protocoles | communication |
| exposition | surface d’attaque |

---

# ⚠️ Règle essentielle

> 🔥 **Principe de moindre exposition**

👉 N’exposer sur Internet que ce qui est strictement nécessaire

👉 Tout port ouvert = surface d’attaque

---

# 📊 Tableau des ports et risques

| Port(s) | Protocole | Service | Exposition | Risque principal |
|---|---|---|---|---|
| 21 | TCP | FTP | ⚠️ Internet possible | Credentials en clair, brute force |
| 22 | TCP | SSH | ⚠️ Contrôlée | Brute force, clés volées |
| 25 / 587 | TCP | SMTP | ⚠️ Internet (MX) | Spam relay, usurpation |
| 53 | UDP/TCP | DNS | ⚠️ Internet (résolution) | Empoisonnement, DDoS |
| 80 / 443 | TCP | HTTP/HTTPS | ✅ Internet publique | Injection, DDoS, vol de session |
| 389 / 636 | TCP | LDAP / LDAPS | 🔒 LAN uniquement | Énumération, dump credentials |
| 445 | TCP | SMB | 🔒 LAN uniquement | Ransomware |
| 3306 | TCP | MySQL | 🔒 LAN uniquement | Injection SQL |
| 3389 | TCP | RDP | ⛔ Jamais direct | Brute force |

---

# 🔎 Analyse des risques

## Ports exposés Internet

| Risque | Exemple |
|---|---|
| brute force | SSH, RDP |
| injection | web |
| DDoS | DNS, HTTP |
| vol session | HTTP |

---

## Ports internes

| Risque | Exemple |
|---|---|
| ransomware | SMB |
| fuite données | LDAP |
| SQL injection | MySQL |

---

# 🛡️ Bonnes pratiques

> [!warning]

- fermer tous les ports inutiles
- utiliser un firewall (UFW, iptables)
- ne jamais exposer RDP directement
- utiliser VPN pour accès distant
- surveiller les logs
- limiter les IP autorisées

---

# 🔐 Exemple sécurisé

```
Internet → Firewall → Reverse Proxy → Serveur
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| port | point d’accès |
| exposition | risque |
| internet | dangereux |
| LAN | plus sûr |
| règle | minimiser |

---

# 🎯 Conclusion

La gestion des ports est :

- critique pour la sécurité
- essentielle pour réduire les risques

👉 bonne pratique :

🔥 ouvrir le minimum  
🔥 contrôler l’accès  
🔥 surveiller en continu