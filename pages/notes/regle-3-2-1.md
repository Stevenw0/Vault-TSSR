# 💾 Règle 3-2-1 — Stratégie de sauvegarde

---

# 📌 Définition

La **règle 3-2-1** est une bonne pratique de sauvegarde permettant de :

- protéger les données
- éviter leur perte
- assurer la récupération en cas d’incident

---

# 🧠 Principe

```
3 copies → 2 supports → 1 hors site
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| sécurité | données |
| résilience | système |
| récupération | rapide |
| protection | incidents |

---

# 📊 Détail de la règle

| Élément | Description |
|---|---|
| 3 copies | données + 2 backups |
| 2 supports | différents types |
| 1 hors site | externe |

---

# 📦 Explication

## 1️⃣ 3 copies

- 1 donnée originale
- 2 sauvegardes

👉 limite la perte totale

---

## 2️⃣ 2 supports différents

| Support | Exemple |
|---|---|
| disque | HDD/SSD |
| NAS | stockage réseau |
| cloud | stockage distant |

👉 évite panne matérielle unique

---

## 3️⃣ 1 hors site

| Type | Exemple |
|---|---|
| cloud | AWS, Azure |
| site distant | autre bâtiment |
| offline | disque déconnecté |

👉 protège contre :

- incendie
- vol
- ransomware

---

# ⚙️ Exemple concret

| Copie | Emplacement |
|---|---|
| original | serveur |
| backup 1 | NAS |
| backup 2 | cloud |

---

# 🔐 Protection contre ransomware

👉 si les données locales sont chiffrées :

- backup hors site reste intact

---

# ⚠️ Risques si non respect

| Problème | Impact |
|---|---|
| 1 seule copie | perte totale |
| même support | panne |
| pas hors site | sinistre |

---

# 🛡️ Bonnes pratiques

> [!warning]

- tester les sauvegardes
- automatiser backups
- versionner les données
- isoler les backups
- chiffrer les sauvegardes

---

# 🔄 Types de sauvegarde

| Type | Description |
|---|---|
| complète | tout |
| incrémentale | changements |
| différentielle | depuis dernière complète |

---

# 📊 3-2-1 vs Backup simple

| Critère | Backup simple | 3-2-1 |
|---|---|---|
| sécurité | faible |
| résilience | limitée |
| récupération | incertaine |

---

| Critère | 3-2-1 |
|---|---|
| sécurité | élevée |
| résilience | forte |
| récupération | fiable |

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| entreprise | serveurs |
| cloud | données |
| homelab | NAS |
| cyber | protection |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| 3 | copies |
| 2 | supports |
| 1 | hors site |
| objectif | sécurité |
| usage | backup |

---

# 🎯 Conclusion

La règle 3-2-1 permet :

- de sécuriser les données
- de prévenir les pertes
- d’assurer une reprise fiable

👉 indispensable en :

🔥 entreprise  
🔥 cybersécurité  
🔥 administration système