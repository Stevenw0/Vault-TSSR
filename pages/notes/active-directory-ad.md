# 🏢 Active Directory (AD)

> [!info]
> **Active Directory (AD)** est un service d’annuaire Microsoft permettant de **centraliser l’authentification, l’autorisation et l’administration** des ressources d’un système d’information.

---

# 🎯 À quoi sert Active Directory ?

| Fonction | Description |
|---|---|
| Authentification | validation des utilisateurs |
| Autorisation | gestion des droits |
| Gestion centralisée | utilisateurs, machines |
| Sécurité | GPO, politiques |
| Organisation | structuration du SI |

---

# 🧠 Principe de fonctionnement

```
Utilisateur
 ↓
Contrôleur de domaine (DC)
 ↓
Validation identité (Kerberos)
 ↓
Application des droits
```

---

# 🧱 Composants principaux

## 🧩 Contrôleur de domaine (DC)

- héberge AD
- gère l’authentification
- applique les GPO

---

## 🗂️ Base AD (NTDS)

```
C:\Windows\NTDS\ntds.dit
```

Contient :

- utilisateurs
- groupes
- mots de passe (hachés)
- objets AD

---

## 🌐 DNS

> [!warning]
> AD dépend totalement du DNS

---

# 🏗️ Structure logique

| Élément | Description |
|---|---|
| Domaine | unité principale |
| Forêt | ensemble de domaines |
| OU | organisation logique |

---

# 🧑‍💻 Objets Active Directory

| Objet | Description |
|---|---|
| Utilisateur | compte d’authentification |
| Ordinateur | machine du domaine |
| Groupe | gestion des droits |
| OU | organisation |

---

# 🛠️ Outils d’administration AD

| Outil | Fonction |
|---|---|
| dsa.msc | utilisateurs et ordinateurs |
| ADAC | centre d’administration moderne |
| Sites et Services | réplication |
| Domaines et Approbations | relations |
| gpmc.msc | GPO |
| adsiedit.msc | édition avancée |
| schmmgmt.dll | schéma AD |

---

# 🌐 Ports utilisés

| Service | Port |
|---|---|
| ADWS | TCP 9389 |
| RPC | TCP 135 + dynamiques |

---

# 📂 Conteneurs AD par défaut

| Conteneur | Description |
|---|---|
| Builtin | groupes système |
| Computers | ordinateurs par défaut |
| Users | utilisateurs par défaut ⚠️ |
| Domain Controllers | DC |
| Deleted Objects | corbeille |
| System | config AD |
| Foreign Security Principals | relations |
| Managed Service Accounts | comptes service |
| NTDS Quotas | quotas objets |

---

# ⚠️ Bonnes pratiques conteneurs

> [!warning]

- ne rien créer dans **Users**
- ne rien créer dans **Computers**
- ne pas modifier **Domain Controllers**

---

# 🧠 Organisation de l’annuaire

## IAM vs PAM

| Type | Description |
|---|---|
| IAM | utilisateurs standards |
| PAM | comptes privilégiés |

---

## Exemple structure OU

```
Pays
 └── Région
     └── Site
         └── Service
             └── Type (users / pc / groupes)
```

---

# 👥 Groupes Active Directory

## Types

| Type | Usage |
|---|---|
| Sécurité | permissions |
| Distribution | email |

---

## Portée

| Portée | Description |
|---|---|
| Domaine local | ressources locales |
| Global | domaine |
| Universel | forêt |

---

# 🧠 AGDLP / AGUDLP

| Étape | Description |
|---|---|
| Account | utilisateur |
| Global | groupe métier |
| Domain Local | groupe ressource |
| Permission | accès |

---

# 🏷️ Nommage des objets

## Groupes

Exemple :

```
DL_Acces_Partage_Compta_FS1_RW
```

---

## Utilisateurs

| Format | Exemple |
|---|---|
| trigramme | jdo |
| prenom.nom | jean.dupont |
| matricule | 12345 |

---

## Ordinateurs

- max 15 caractères
- inclure type + ID

---

# 🧑‍💻 Délégation et sécurité

## Protection OU

```powershell
Get-ADOrganizationalUnit -Filter * | Set-ADOrganizationalUnit -ProtectedFromAccidentalDeletion $true
```

---

## Comptes sensibles

- groupe **Protected Users**
- désactiver délégation

---

# 🔁 Workflow des objets

## Utilisateurs

| Étape | Action |
|---|---|
| entrée | création compte |
| vie | gestion droits |
| sortie | désactivation |

---

## Ordinateurs

| Étape | Action |
|---|---|
| entrée | ajout domaine |
| vie | gestion |
| sortie | suppression |

---

# 🧩 GPO

Application :

```
Local → Site → Domaine → OU
```

---

# 🔁 Réplication

- multimaître
- basée sur DNS
- gérée via Sites AD

---

# 🛡️ Bonnes pratiques

> [!tip]

- séparer utilisateurs / machines
- utiliser AGDLP
- appliquer GPO correctement
- sécuriser comptes admin
- déléguer intelligemment

---

# ⚠️ Erreurs fréquentes

| Erreur | Impact |
|---|---|
| tout dans Users | désorganisation |
| DNS incorrect | AD cassé |
| pas de délégation | surcharge admin |
| comptes admin partout | fail sécurité |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| AD | annuaire central |
| DC | serveur AD |
| OU | organisation |
| GPO | configuration |
| DNS | indispensable |

---

# 🎯 Conclusion

Active Directory est :

- le cœur du SI Windows
- un système puissant mais sensible
- nécessitant une **bonne organisation et sécurisation**

👉 Une mauvaise configuration = **risque critique pour toute l’infrastructure**