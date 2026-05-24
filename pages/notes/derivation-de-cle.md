# 🔑 Dérivation de clé — Key Derivation

---

# 📌 Définition

La **dérivation de clé** consiste à :

- générer une clé cryptographique
- à partir d’un mot de passe ou d’un secret

---

# 🧠 Principe

```
Mot de passe → KDF → Clé sécurisée
```

👉 KDF = Key Derivation Function

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| sécuriser | mot de passe |
| renforcer | entropie |
| standardiser | clé |
| protéger | données |

---

# 🔐 Pourquoi dériver une clé ?

| Problème | Solution |
|---|---|
| mot de passe faible | KDF |
| brute force | ralentir |
| rainbow table | salt |
| uniformité | clé fixe |

---

# ⚙️ Fonctionnement

## Étapes

1. entrée (mot de passe)
2. ajout salt
3. itérations
4. sortie clé dérivée

---

# 🧂 Salt

## Définition

Valeur aléatoire ajoutée :

```
password + salt → KDF → clé
```

---

## Objectif

| Avantage | Description |
|---|---|
| unique | chaque hash |
| sécurité | anti rainbow |
| protection | collisions |

---

# 🔄 Itérations

| Fonction | Description |
|---|---|
| répétition | calcul multiple |
| ralentissement | attaque |
| sécurité | accrue |

---

# 📊 KDF courantes

| Algorithme | Description |
|---|---|
| PBKDF2 | standard |
| bcrypt | sécurisé |
| scrypt | mémoire intensive |
| Argon2 | moderne |

---

# 🏆 Recommandation

```
Argon2 (meilleur)
bcrypt (très utilisé)
PBKDF2 (compatible)
```

---

# 📦 Exemple

## PBKDF2

```bash
openssl enc -aes-256-cbc -pbkdf2 -in fichier.txt -out fichier.enc
```

---

## Python

```python
import hashlib
hashlib.pbkdf2_hmac('sha256', b'password', b'salt', 100000)
```

---

# 📊 KDF vs Hash simple

| Critère | Hash | KDF |
|---|---|---|
| vitesse | rapide |
| sécurité | faible |
| brute force | facile |

---

| Critère | KDF |
|---|---|
| vitesse | lente |
| sécurité | élevée |
| brute force | difficile |

---

# 🌐 Utilisation

| Usage | Exemple |
|---|---|
| mots de passe | login |
| chiffrement | AES |
| stockage | sécurité |
| VPN | clés |

---

# ⚠️ Bonnes pratiques

> [!warning]

- toujours utiliser un salt
- utiliser beaucoup d’itérations
- préférer Argon2 ou bcrypt
- ne jamais stocker mot de passe brut

---

# ⚠️ Erreurs à éviter

| Erreur | Risque |
|---|---|
| MD5 simple | cassé |
| SHA seul | trop rapide |
| pas de salt | vulnérable |
| peu d’itérations | faible |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| KDF | dérivation |
| entrée | password |
| sortie | clé |
| sécurité | élevée |
| usage | auth |

---

# 🎯 Conclusion

La dérivation de clé permet :

- de sécuriser les mots de passe
- de générer des clés robustes

👉 indispensable en :

🔥 authentification  
🔥 chiffrement  
🔥 cybersécurité moderne