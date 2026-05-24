# 🔓 Attaque Brute Force — Cyberattaque

---

# 📌 Définition

Une **attaque brute force** consiste à :

- tester un grand nombre de combinaisons
- pour trouver un mot de passe ou une clé

---

# 🧠 Principe

```
Attaquant → essais multiples → accès trouvé
```

---

# 🎯 Objectif

| Objectif | Description |
|---|---|
| accès compte | utilisateur |
| intrusion | système |
| déchiffrement | données |
| élévation privilège | admin |

---

# 📊 Types d’attaques

| Type | Description |
|---|---|
| brute force simple | toutes combinaisons |
| dictionnaire | mots connus |
| credential stuffing | identifiants volés |
| hybrid | mix |

---

# ⚙️ Fonctionnement

## Étapes

1. cible identifiée
2. génération combinaisons
3. envoi tentatives
4. validation succès

---

# 📦 Exemple

## Login web

```
user: admin
password: test123 → refus
password: admin123 → refus
password: password → succès
```

---

# 🔐 Cibles fréquentes

| Cible | Exemple |
|---|---|
| SSH | serveur |
| RDP | Windows |
| sites web | login |
| bases de données | accès |

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| accès non autorisé | intrusion |
| vol données | fuite |
| compromission | système |
| propagation | attaque |

---

# 🔎 Signes d’attaque

| Indice | Exemple |
|---|---|
| tentatives répétées | logs |
| IP suspectes | multiples |
| comptes verrouillés | fréquents |
| trafic anormal | élevé |

---

# 🛡️ Moyens de protection

## Techniques

| Solution | Description |
|---|---|
| MFA | double authentification |
| limitation tentatives | lock |
| captcha | humain |
| fail2ban | blocage IP |
| logs | monitoring |

---

## Bonnes pratiques

| Action | Description |
|---|---|
| mots de passe forts | complexité |
| rotation | changement |
| désactiver comptes inutiles | sécurité |
| ports personnalisés | réduction exposition |

---

# 🔐 Exemple Fail2ban

```bash
sudo apt install fail2ban
```

---

# 📊 Brute force vs autres attaques

| Attaque | Différence |
|---|---|
| brute force | essais multiples |
| phishing | manipulation |
| exploit | vulnérabilité |
| DDoS | saturation |

---

# 🧠 Cas d’utilisation (attaquant)

| Usage | Exemple |
|---|---|
| cracking | mots de passe |
| pentest | test sécurité |
| intrusion | accès |

---

# ⚠️ Bonnes pratiques

> [!warning]

- activer MFA partout
- limiter tentatives login
- surveiller logs
- utiliser mots de passe forts
- bloquer IP suspectes

---

# 📊 Résumé

| Élément | Description |
|---|---|
| brute force | attaque |
| principe | essais |
| cible | login |
| protection | MFA |
| risque | intrusion |

---

# 🎯 Conclusion

L’attaque brute force est :

- simple mais efficace
- basée sur la répétition

👉 pour s’en protéger :

🔥 MFA + limitation + monitoring