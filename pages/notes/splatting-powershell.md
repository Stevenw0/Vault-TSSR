# 🎯 Splatting PowerShell

## 📌 Définition

Le **splatting** en PowerShell permet de **passer un ensemble de paramètres à une commande ou une fonction** de manière plus lisible.

Au lieu d’écrire une commande très longue avec beaucoup d’options, on regroupe les paramètres dans :

- un **hashtable**
- ou un **tableau**

Puis on les transmet avec :

```powershell
@
```

---

# 🧠 Pourquoi utiliser le splatting

Le splatting est utile pour :

- améliorer la lisibilité
- éviter les longues lignes de commande
- réutiliser facilement les mêmes paramètres
- simplifier les scripts complexes

---

# ⚙️ Principe

Au lieu d’écrire :

```powershell
Get-ChildItem -Path C:\Temp -Filter *.log -Recurse -Force
```

on peut écrire :

```powershell
$params = @{
    Path    = 'C:\Temp'
    Filter  = '*.log'
    Recurse = $true
    Force   = $true
}

Get-ChildItem @params
```

---

# 📊 Deux formes de splatting

| Type | Utilisation |
|---|---|
| Hashtable | paramètres nommés |
| Tableau | paramètres positionnels |

---

# 1️⃣ Splatting avec hashtable

C’est la forme la plus utilisée.

## Exemple

```powershell
$params = @{
    Name = 'Alice'
    Age  = 30
}

Ma-Fonction @params
```

PowerShell associe automatiquement :

- `Name` → `-Name`
- `Age` → `-Age`

---

# 2️⃣ Splatting avec tableau

Utilisé pour les **paramètres positionnels**.

## Exemple

```powershell
$argsList = @('Alice', 30)

Ma-Fonction @argsList
```

Dans ce cas, PowerShell envoie les valeurs **dans l’ordre**.

---

# 📦 Exemple avec une fonction

## Fonction

```powershell
function Get-Utilisateur {
    param (
        [string]$Nom,
        [int]$Age
    )

    Write-Output "Nom : $Nom | Âge : $Age"
}
```

---

## Appel classique

```powershell
Get-Utilisateur -Nom "Alice" -Age 30
```

---

## Appel avec splatting

```powershell
$params = @{
    Nom = 'Alice'
    Age = 30
}

Get-Utilisateur @params
```

---

# 🧾 Exemple avec cmdlet native

```powershell
$params = @{
    Path    = 'C:\Logs'
    Filter  = '*.txt'
    Recurse = $true
}

Get-ChildItem @params
```

---

# 📊 Avantages du splatting

| Avantage | Description |
|---|---|
| Lisibilité | commandes plus claires |
| Réutilisation | paramètres réemployables |
| Maintenance | plus facile à modifier |
| Structuration | scripts mieux organisés |

---

# ⚙️ Modifier un splat dynamiquement

On peut ajouter ou modifier une valeur dans le hashtable :

```powershell
$params = @{
    Path = 'C:\Temp'
}

$params['Filter'] = '*.log'
$params['Recurse'] = $true

Get-ChildItem @params
```

---

# 🔄 Fusionner paramètres et arguments directs

PowerShell permet d’utiliser du splatting **et** des paramètres classiques :

```powershell
$params = @{
    Path = 'C:\Temp'
}

Get-ChildItem @params -Filter *.txt
```

⚠️ Si un même paramètre est défini deux fois, PowerShell peut générer une erreur.

---

# 📦 Exemple avec Invoke-RestMethod

```powershell
$apiParams = @{
    Uri     = 'https://api.exemple.com/users'
    Method  = 'Get'
    Headers = @{
        Authorization = 'Bearer TOKEN'
    }
}

Invoke-RestMethod @apiParams
```

---

# 🧠 Quand utiliser le splatting

Utiliser le splatting quand :

- une commande a beaucoup de paramètres
- les paramètres sont construits dynamiquement
- on veut réutiliser la même structure
- on veut rendre le script plus lisible

---

# ⚠️ Attention

> [!warning]

- les clés du hashtable doivent correspondre aux noms des paramètres
- attention aux doublons entre splatting et arguments directs
- le splatting avec tableau dépend de l’ordre des paramètres

---

# ✅ Bonnes pratiques

> [!tip]

- préférer le **hashtable splatting**
- utiliser des noms de clés clairs
- éviter les tableaux si possible
- employer le splatting pour les cmdlets longues

---

# 📊 Splatting hashtable vs tableau

| Critère | Hashtable | Tableau |
|---|---|---|
| Lisibilité | élevée | moyenne |
| Paramètres nommés | oui | non |
| Paramètres positionnels | non | oui |
| Maintenance | facile | plus fragile |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| Splatting | passage groupé de paramètres |
| Symbole | `@` |
| Forme recommandée | hashtable |
| Usage | lisibilité et réutilisation |

Le **splatting PowerShell** permet de **rendre les commandes plus propres, plus lisibles et plus faciles à maintenir**, surtout dans les scripts complexes.