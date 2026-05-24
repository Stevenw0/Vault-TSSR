# 🕵️‍♂️ Man-in-the-Middle (MITM) — Attaque réseau

---

# 📌 Définition

Une attaque **Man-in-the-Middle (MITM)** consiste à :

- intercepter une communication
- entre deux parties
- sans qu’elles s’en rendent compte

---

# 🧠 Principe

```
Client → Attaquant → Serveur
```

👉 l’attaquant :

- écoute
- modifie
- intercepte les données

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| espionnage | lire données |
| vol | identifiants |
| modification | contenu |
| usurpation | identité |

---

# 📊 Fonctionnement

## Étapes

1. interception trafic
2. établissement relais
3. analyse ou modification
4. transmission au destinataire

---

# 📦 Exemple

```
Utilisateur → WiFi public → Attaquant → Internet
```

👉 l’attaquant peut voir :

- mots de passe
- données sensibles

---

# 🔎 Types d’attaques MITM

| Type | Description |
|---|---|
| ARP spoofing | réseau local |
| DNS spoofing | faux DNS |
| HTTPS stripping | downgrade |
| WiFi rogue | faux hotspot |
| session hijacking | vol session |

---

# 🌐 Cas typiques

| Situation | Risque |
|---|---|
| WiFi public | élevé |
| réseau non sécurisé | interception |
| HTTPS absent | données en clair |

---

# ⚠️ Impact

| Impact | Description |
|---|---|
| fuite données | critique |
| vol identifiants | accès |
| modification | fraude |
| perte confiance | sécurité |

---

# 🔎 Signes d’attaque

| Indice | Exemple |
|---|---|
| certificat invalide | HTTPS |
| connexion lente | trafic |
| redirection étrange | URL |
| alerte navigateur | sécurité |

---

# 🛡️ Protection

## Techniques

| Solution | Description |
|---|---|
| HTTPS | chiffrement |
| TLS | sécurité |
| VPN | tunnel |
| HSTS | HTTPS forcé |
| certificats | vérification |

---

## Bonnes pratiques

| Action | Description |
|---|---|
| éviter WiFi public | sécurité |
| vérifier URL | HTTPS |
| utiliser VPN | protection |
| MFA | sécurité |

---

# 🔐 Exemple HTTPS

```
Client ⇄ TLS ⇄ Serveur
```

👉 impossible à lire sans clé

---

# 📊 MITM vs autres attaques

| Attaque | Différence |
|---|---|
| MITM | interception |
| phishing | manipulation |
| brute force | accès |
| DDoS | saturation |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| MITM | interception |
| cible | communication |
| risque | élevé |
| protection | TLS |
| usage | réseau |

---

# 🎯 Conclusion

L’attaque MITM permet :

- d’espionner les communications
- de voler des données sensibles

👉 pour s’en protéger :

🔥 HTTPS + VPN + vigilance utilisateur