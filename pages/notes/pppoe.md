# 🌐 PPPoE — Point-to-Point Protocol over Ethernet

---

# 📌 Définition

**PPPoE (Point-to-Point Protocol over Ethernet)** est un protocole permettant de :

- établir une connexion réseau sur Ethernet
- authentifier un utilisateur auprès d’un fournisseur d’accès (FAI)

---

# 🧠 Principe

PPPoE encapsule PPP dans Ethernet :

```
Client → PPPoE → FAI → Internet
```

---

# 🎯 Objectifs

| Fonction | Description |
|---|---|
| authentification | login / password |
| gestion session | connexion |
| facturation | utilisateur identifié |
| accès internet | via FAI |

---

# 🏗️ Architecture

```
PC / Routeur → Modem → FAI → Internet
```

---

# 📊 Fonctionnement

## Étapes

1. découverte (PPPoE Discovery)
2. établissement session
3. authentification (PAP / CHAP)
4. attribution IP
5. connexion active

---

# 🔎 Phase Discovery

| Étape | Description |
|---|---|
| PADI | client cherche serveur |
| PADO | serveur répond |
| PADR | demande connexion |
| PADS | session créée |

---

# 🔐 Authentification

| Méthode | Description |
|---|---|
| PAP | simple (non sécurisé) |
| CHAP | sécurisé |

---

# 📦 Exemple configuration

## Routeur

| Paramètre | Valeur |
|---|---|
| type | PPPoE |
| login | fourni FAI |
| password | fourni FAI |

---

# 🌐 Cas domestique

```
Box FAI → PPPoE → Internet
```

👉 utilisé en :

- ADSL
- FTTH (certains opérateurs)

---

# 🏢 Cas entreprise

- lien dédié
- authentification centralisée
- contrôle accès

---

# 📊 PPPoE vs DHCP

| Critère | PPPoE | DHCP |
|---|---|---|
| auth | oui |
| config | login |
| usage | FAI |
| simplicité | moins |

---

# ⚠️ Inconvénients

| Limite | Description |
|---|---|
| overhead | encapsulation |
| MTU réduit | ~1492 |
| config | plus complexe |

---

# ⚙️ MTU

## Valeur

```
1500 → Ethernet
1492 → PPPoE
```

👉 important pour éviter fragmentation

---

# 🔎 Test

```bash
ip addr
```

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| accès internet | FAI |
| réseau opérateur | DSL |
| entreprise | authentification |

---

# ⚠️ Bonnes pratiques

> [!warning]

- vérifier MTU
- sécuriser credentials
- surveiller connexion
- tester stabilité

---

# 📊 Résumé

| Élément | Description |
|---|---|
| PPPoE | protocole |
| usage | accès internet |
| auth | login/password |
| MTU | 1492 |
| avantage | contrôle |

---

# 🎯 Conclusion

PPPoE permet :

- d’authentifier les utilisateurs
- de gérer les connexions internet
- de contrôler l’accès réseau

👉 encore utilisé aujourd’hui par certains FAI