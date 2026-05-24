# 🔐 AES — Advanced Encryption Standard

---

# 📌 Définition

**AES (Advanced Encryption Standard)** est un algorithme de :

- chiffrement symétrique
- utilisé pour protéger les données

👉 standard mondial de chiffrement

---

# 🧠 Principe

```
Donnée → AES + clé → Donnée chiffrée
```

👉 même clé pour :

- chiffrer
- déchiffrer

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| confidentialité | protéger données |
| sécurité | forte |
| performance | rapide |
| standard | universel |

---

# 📊 Caractéristiques

| Élément | Description |
|---|---|
| type | symétrique |
| bloc | 128 bits |
| clé | 128 / 192 / 256 bits |
| standard | NIST |

---

# 🔢 Tailles de clé

| Clé | Sécurité |
|---|---|
| AES-128 | forte |
| AES-192 | très forte |
| AES-256 | maximale |

---

# ⚙️ Fonctionnement

AES fonctionne par :

- substitutions
- permutations
- tours (rounds)

---

## Nombre de rounds

| Clé | Rounds |
|---|---|
| 128 | 10 |
| 192 | 12 |
| 256 | 14 |

---

# 🔄 Étapes simplifiées

1. SubBytes (substitution)
2. ShiftRows (rotation)
3. MixColumns (mélange)
4. AddRoundKey (clé)

---

# 🔐 Modes de chiffrement

| Mode | Description |
|---|---|
| ECB | simple (⚠️ non sécurisé) |
| CBC | classique |
| CTR | compteur |
| GCM | sécurisé + authentifié |

---

👉 recommandé :

```
AES-GCM
```

---

# 📦 Exemple

## Chiffrement

```
Message + clé → AES → Donnée chiffrée
```

---

# 🌐 Utilisation

| Usage | Exemple |
|---|---|
| HTTPS | TLS |
| VPN | IPsec |
| WiFi | WPA2/WPA3 |
| disque | BitLocker |

---

# 📊 AES vs RSA

| Critère | AES | RSA |
|---|---|---|
| type | symétrique | asymétrique |
| vitesse | rapide | lent |
| usage | données | échange clé |

---

👉 souvent combinés :

```
RSA → échange clé
AES → chiffrement données
```

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| gestion clé | critique |
| attaque brute force | possible (théorique) |
| mauvais mode | vulnérable |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser AES-256
- éviter ECB
- utiliser GCM
- sécuriser les clés
- renouveler les clés

---

# 🔎 Exemple OpenSSL

```bash
openssl enc -aes-256-cbc -in fichier.txt -out fichier.enc
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| AES | chiffrement |
| type | symétrique |
| clé | 128/192/256 |
| usage | global |
| sécurité | élevée |

---

# 🎯 Conclusion

AES est :

- l’algorithme de chiffrement le plus utilisé
- rapide et sécurisé

👉 indispensable pour :

🔥 web  
🔥 VPN  
🔥 stockage  
🔥 cybersécurité