# 🔓 Hydra — Outil de brute force

---


# 📌 Définition

**Hydra (THC Hydra)** est un outil permettant de :

- tester des identifiants
- effectuer des attaques brute force
- cibler des services réseau

---

# 🧠 Principe

```
Hydra → essais login/password → service → accès
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| brute force | mots de passe |
| audit | sécurité |
| pentest | test accès |
| validation | credentials |

---

# 📊 Services supportés

| Service | Exemple |
|---|---|
| SSH | serveur |
| FTP | transfert |
| HTTP | web login |
| RDP | Windows |
| SMB | partage |
| Telnet | ancien |

---

# ⚙️ Syntaxe de base

```bash
hydra -l user -P wordlist.txt service://target
```

---

# 🔥 Commandes essentielles

| Commande | Description |
|---|---|
| hydra -l admin -P pass.txt ssh://192.168.1.1 | brute force SSH |
| hydra -L users.txt -P pass.txt ftp://192.168.1.1 | multi users |
| hydra -l admin -P pass.txt http-post-form | web login |
| hydra -t 4 -V ssh://target | threads + verbose |

---

# 🔎 Options importantes

| Option | Description |
|---|---|
| -l | user |
| -L | liste users |
| -p | password |
| -P | wordlist |
| -t | threads |
| -V | verbose |
| -f | stop succès |
| -o | output |

---

# 📦 Exemple pratique

## SSH

```bash
hydra -l root -P rockyou.txt ssh://192.168.1.10
```

---

## HTTP Login

```bash
hydra -l admin -P pass.txt 192.168.1.10 http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"
```

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| blocage IP | sécurité |
| détection | IDS |
| compte lock | protection |
| légal | interdit sans autorisation |

---

# 🛡️ Protection contre Hydra

| Solution | Description |
|---|---|
| MFA | double auth |
| fail2ban | blocage |
| rate limiting | limitation |
| mot de passe fort | sécurité |
| logs | monitoring |

---

# 📊 Hydra vs autres outils

| Outil | Usage |
|---|---|
| Hydra | brute force |
| John | cracking offline |
| Hashcat | GPU cracking |
| Nmap | scan |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser uniquement en pentest autorisé
- limiter les threads
- tester sur lab
- analyser les résultats

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Hydra | brute force |
| usage | pentest |
| cible | services |
| risque | élevé |
| protection | MFA |

---

# 🎯 Conclusion

Hydra permet :

- de tester la robustesse des mots de passe
- de simuler des attaques réelles

👉 outil clé en :

🔥 pentest  
🔥 audit sécurité  
🔥 cybersécurité offensive