# 🧩 AGDLP — Gestion des droits Active Directory

---

# 📌 Définition

**AGDLP** est une méthode Microsoft permettant de :

- organiser les groupes
- gérer les permissions
- simplifier l’administration des accès

---

# 🧠 Principe

```
A → G → DL → P
```

👉 logique :

```
Account → Global → Domain Local → Permission
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| organisation | groupes |
| gestion droits | simplifiée |
| sécurité | contrôle accès |
| scalabilité | entreprise |

---

# 📊 Décomposition AGDLP

| Élément | Description |
|---|---|
| A (Account) | utilisateurs |
| G (Global) | groupe métier |
| DL (Domain Local) | groupe ressource |
| P (Permission) | droits |

---

# 🧱 Fonctionnement

## Étapes

1. utilisateur ajouté dans groupe global
2. groupe global ajouté dans groupe local
3. groupe local reçoit les permissions

---

## Schéma

```
Utilisateur → Groupe Global → Groupe Local → Ressource
```

---

# 📦 Exemple concret

## Cas : accès dossier compta

| Élément | Exemple |
|---|---|
| utilisateur | Jean |
| groupe global | G_Compta |
| groupe local | DL_Partage_Compta |
| permission | Lecture/Écriture |

---

## Résultat

```
Jean → G_Compta → DL_Partage_Compta → Accès dossier
```

---

# 🔐 Types de groupes

## Groupe Global

| Rôle | Description |
|---|---|
| contenu | utilisateurs |
| usage | organisation |
| portée | domaine |

---

## Groupe Domaine Local

| Rôle | Description |
|---|---|
| contenu | groupes |
| usage | permissions |
| portée | domaine |

---

# ⚙️ Pourquoi utiliser AGDLP ?

| Avantage | Description |
|---|---|
| lisibilité | claire |
| maintenance | facile |
| sécurité | centralisée |
| évolution | simple |

---

# ⚠️ Mauvaise pratique

❌ Donner des droits directement aux utilisateurs

---

# 🛡️ Bonnes pratiques

> [!warning]

- toujours passer par des groupes
- séparer utilisateurs et ressources
- nommer correctement les groupes
- documenter les accès

---

# 📊 AGDLP vs gestion directe

| Méthode | Inconvénient |
|---|---|
| direct | difficile |
| AGDLP | structuré |

---

# 🌐 Cas multi-domaines

👉 utiliser variante :

```
AGUDLP
```

---

# 📊 AGUDLP

| Élément | Description |
|---|---|
| U | groupe universel |
| usage | multi-domaines |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| AGDLP | méthode AD |
| A | utilisateur |
| G | groupe global |
| DL | groupe local |
| P | permission |

---

# 🎯 Conclusion

AGDLP permet :

- une gestion propre des droits
- une meilleure sécurité
- une administration simplifiée

👉 indispensable en :

🔥 Active Directory  
🔥 entreprise  
🔥 gestion des accès