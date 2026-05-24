# 🔐 MD5 & SHA — Fonctions de hachage

---

# 📌 Définition

**MD5** et **SHA** sont des fonctions de **hachage** permettant de :

- transformer une donnée
- en une empreinte (hash) unique

---

# 🧠 Principe

```
Donnée → Fonction de hash → Empreinte (hash)
```

👉 irréversible (en théorie)

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| intégrité | vérifier données |
| sécurité | protection |
| signature | validation |
| stockage | mots de passe |

---

# 📊 MD5

## Caractéristiques

| Élément | Description |
|---|---|
| taille | 128 bits |
| vitesse | rapide |
| sécurité | faible ❌ |
| usage | ancien |

---

## Exemple

```
hello → 5d41402abc4b2a76b9719d911017c592
```

---

# ⚠️ Problème MD5

| Problème | Description |
|---|---|
| collisions | oui |
| cassé | cryptographiquement |
| attaque | facile |

---

👉 MD5 est **obsolète**

---

# 🔐 SHA (Secure Hash Algorithm)

## Versions principales

| Version | Taille |
|---|---|
| SHA-1 | 160 bits |
| SHA-256 | 256 bits |
| SHA-512 | 512 bits |

---

## Sécurité

| Version | Statut |
|---|---|
| SHA-1 | cassé ❌ |
| SHA-2 | sécurisé ✅ |
| SHA-3 | moderne ✅ |

---

# 📊 MD5 vs SHA

| Critère | MD5 | SHA-256 |
|---|---|---|
| sécurité | faible |
| collisions | oui |
| usage | non recommandé |

---

| Critère | SHA-256 |
|---|---|
| sécurité | élevée |
| collisions | très rare |
| usage | recommandé |

---

# ⚙️ Fonctionnement

- prend une entrée
- applique un algorithme
- produit un hash fixe

---

# 📦 Utilisation

| Usage | Exemple |
|---|---|
| mots de passe | stockage |
| intégrité | fichiers |
| blockchain | crypto |
| signatures | sécurité |

---

# 🔐 Bonnes pratiques

| Action | Description |
|---|---|
| utiliser SHA-256+ | sécurité |
| ajouter salt | mots de passe |
| éviter MD5 | obsolète |
| utiliser bcrypt | login |

---

# 🧠 Salt

## Définition

Ajout d’une valeur aléatoire :

```
password + salt → hash
```

---

👉 empêche :

- rainbow tables

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| brute force | possible |
| rainbow tables | attaque |
| pas chiffrement | hash ≠ encryption |

---

# 🔎 Exemple Linux

```bash
echo -n "password" | sha256sum
```

---

# 📊 Hash vs chiffrement

| Élément | Hash | Chiffrement |
|---|---|---|
| réversible | non |
| clé | non |
| usage | intégrité |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| MD5 | obsolète |
| SHA | sécurisé |
| usage | intégrité |
| risque | collisions |
| solution | SHA-256 |

---

# 🎯 Conclusion

MD5 et SHA permettent :

- de vérifier l’intégrité
- de sécuriser des données

👉 aujourd’hui :

🔥 utiliser SHA-256 ou plus  
🔥 éviter MD5 et SHA-1  
🔥 ajouter du salt pour les mots de passe