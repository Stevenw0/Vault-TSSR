# 📂 SYSVOL — Active Directory

## 📌 Définition

**SYSVOL** est un dossier partagé sur chaque **contrôleur de domaine (Domain Controller)**.

Il contient des éléments essentiels d’Active Directory :

- les **stratégies de groupe (GPO)**
- les **scripts de connexion**
- des fichiers nécessaires au domaine

👉 Il est **répliqué automatiquement entre tous les DC**.

---

# 🧠 Principe de fonctionnement

SYSVOL est accessible via le réseau :

```
\\nom_domaine\SYSVOL
```

Exemple :

```
\\dawan.local\SYSVOL
```

---

Fonctionnement :

```
Modification GPO
        ↓
Stockage dans SYSVOL
        ↓
Réplication entre DC
        ↓
Application sur clients
```

---

# 📂 Emplacement sur le serveur

Chemin local :

```
C:\Windows\SYSVOL
```

Structure :

```
SYSVOL
 ├── domain
 │   ├── Policies
 │   └── Scripts
 └── staging
```

---

# 📊 Contenu principal

| Dossier | Description |
|---|---|
| Policies | GPO (stratégies de groupe) |
| Scripts | scripts de logon/logoff |
| staging | réplication temporaire |

---

# 🧾 SYSVOL et GPO

Chaque GPO possède un dossier dans :

```
SYSVOL\domain\Policies
```

Exemple :

```
{GUID_GPO}
```

Une GPO contient :

- fichiers de configuration
- paramètres utilisateur et ordinateur

---

# 🔁 Réplication SYSVOL

La réplication entre contrôleurs de domaine est essentielle.

Deux technologies :

| Technologie | Description |
|---|---|
| FRS | ancien système |
| DFS-R | moderne (recommandé) |

---

# 📊 DFS-R vs FRS

| Critère | FRS | DFS-R |
|---|---|---|
| Performance | faible | élevée |
| Fiabilité | moyenne | élevée |
| Compression | non | oui |
| Statut | obsolète | standard actuel |

---

# 🔎 Vérifier SYSVOL

## Accès réseau

```powershell
\\dawan.local\SYSVOL
```

---

## Vérifier partage

```powershell
net share
```

---

## Vérifier réplication

```powershell
repadmin /replsummary
```

---

## Vérifier DFS-R

```powershell
dfsrdiag replicationstate
```

---

# ⚙️ Commandes utiles

## Vérifier SYSVOL prêt

```powershell
dcdiag /test:sysvolcheck
```

---

## Vérifier NETLOGON

```powershell
dcdiag /test:advertising
```

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| SYSVOL vide | réplication cassée |
| GPO non appliquées | SYSVOL incohérent |
| erreur DFSR | service arrêté |
| accès refusé | permissions incorrectes |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser **DFS-R uniquement**
- surveiller la réplication
- vérifier régulièrement les GPO
- éviter les modifications manuelles directes

---

# 📊 Rôle clé de SYSVOL

| Fonction | Description |
|---|---|
| Stockage GPO | configuration AD |
| Scripts | logon/logoff |
| Réplication | synchronisation DC |
| Accès clients | via partage réseau |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| SYSVOL | dossier partagé AD |
| rôle | stockage GPO + scripts |
| réplication | DFS-R |
| chemin | C:\Windows\SYSVOL |
| accès | \\domaine\SYSVOL |

SYSVOL est un **élément critique d’Active Directory**, indispensable pour le **fonctionnement des GPO et la cohérence du domaine**.