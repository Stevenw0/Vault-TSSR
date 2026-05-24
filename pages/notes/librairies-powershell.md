# 📚 

## 📌 Définition

Dans PowerShell, une **librairie** correspond généralement à :

- un **module PowerShell**
- une **bibliothèque .NET**
- ou un ensemble de fonctions/scripts réutilisables

👉 Elle permet de **réutiliser du code sans le réécrire**.

---

# 🧠 Types de librairies

| Type | Description |
|---|---|
| Module PowerShell | fonctions et cmdlets |
| Bibliothèque .NET | classes compilées |
| Script partagé | fonctions custom |
| API externe | accès via REST |

---

# 📦 Modules PowerShell (librairie principale)

Les modules sont la forme la plus courante.

Exemple :

```powershell
Import-Module ActiveDirectory
```

---

## Voir modules disponibles

```powershell
Get-Module -ListAvailable
```

---

## Installer une librairie

```powershell
Install-Module Az
```

---

# ⚙️ Librairies .NET

PowerShell repose sur **.NET**, donc on peut utiliser directement ses librairies.

---

## Exemple

```powershell
[System.DateTime]::Now
```

---

## Créer un objet .NET

```powershell
$client = New-Object System.Net.WebClient
```

---

# 📊 Exemples de librairies .NET utiles

| Classe | Usage |
|---|---|
| System.IO | fichiers |
| System.Net | réseau |
| System.DateTime | date/heure |
| System.Diagnostics | processus |

---

# 🌐 Utiliser des API (librairie externe)

PowerShell peut appeler des API.

```powershell
Invoke-RestMethod https://api.github.com
```

---

# 📦 Créer sa propre librairie

## Exemple simple

```powershell
function Get-Salut {
    "Salut"
}
```

---

## Regrouper dans module

```
MonModule.psm1
```

---

## Importer

```powershell
Import-Module ./MonModule.psm1
```

---

# 📊 Avantages des librairies

| Avantage | Description |
|---|---|
| Réutilisation | éviter duplication |
| Organisation | code structuré |
| Maintenance | plus simple |
| Productivité | gain de temps |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser modules officiels
- versionner les librairies
- documenter le code
- limiter dépendances inutiles

---

# 🧠 PowerShell Gallery

Repository officiel :

```powershell
Find-Module
Install-Module
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Librairie | code réutilisable |
| Module | principal en PowerShell |
| .NET | base du système |
| API | extension externe |
| objectif | automatisation |

Les librairies PowerShell permettent de **gagner en efficacité, structurer les scripts et réutiliser du code facilement**.