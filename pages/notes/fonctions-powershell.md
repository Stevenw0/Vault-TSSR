# 🧩 Fonctions PowerShell

## 📌 Définition

Une **fonction PowerShell** permet de **regrouper des instructions** dans un bloc réutilisable.

Elle permet :

- d’automatiser des tâches
- d’éviter la répétition de code
- de structurer les scripts

---

# 🧠 Principe de base

Une fonction se déclare avec :

```powershell
function Nom-Fonction {
    # instructions
}
```

---

## Exemple simple

```powershell
function Dire-Bonjour {
    Write-Output "Bonjour"
}
```

---

## Appel

```powershell
Dire-Bonjour
```

---

# 📊 Fonctions avec paramètres

## Déclaration

```powershell
function Dire-Bonjour {
    param (
        [string]$Nom
    )

    Write-Output "Bonjour $Nom"
}
```

---

## Utilisation

```powershell
Dire-Bonjour -Nom "Alice"
```

---

# 📊 Paramètres

| Élément | Description |
|---|---|
| param | déclaration des paramètres |
| type | typage (string, int, etc.) |
| nom | variable entrée |

---

# ⚙️ Valeurs par défaut

```powershell
function Test {
    param (
        [string]$Nom = "Utilisateur"
    )

    Write-Output "Bonjour $Nom"
}
```

---

# 📦 Retour de valeur

Une fonction retourne automatiquement la dernière valeur.

```powershell
function Addition {
    param (
        [int]$a,
        [int]$b
    )

    $a + $b
}
```

---

## Utilisation

```powershell
$result = Addition 2 3
```

---

# 📊 return (optionnel)

```powershell
return $a + $b
```

---

# ⚙️ Fonctions avancées

## Bloc begin / process / end

```powershell
function Test-Avance {
    begin { Write-Output "Début" }
    process { Write-Output "Traitement" }
    end { Write-Output "Fin" }
}
```

---

# 📦 Pipeline

```powershell
Get-Process | ForEach-Object {
    $_.Name
}
```

---

# ⚙️ Fonction avancée (cmdlet-like)

```powershell
function Get-Nom {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [string]$Nom
    )

    Write-Output "Nom : $Nom"
}
```

---

# 📊 Paramètres avancés

| Attribut | Description |
|---|---|
| Mandatory | obligatoire |
| Position | positionnel |
| ValueFromPipeline | pipeline |
| HelpMessage | aide |

---

# ⚙️ Exemple pipeline

```powershell
function Show-Nom {
    param (
        [Parameter(ValueFromPipeline)]
        [string]$Nom
    )

    process {
        Write-Output "Nom : $Nom"
    }
}
```

---

## Utilisation

```powershell
"Jean","Paul" | Show-Nom
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser des noms explicites (Verbe-Nom)
- éviter fonctions trop longues
- typer les paramètres
- gérer les erreurs

---

# 🧠 Convention de nommage

| Type | Exemple |
|---|---|
| standard | Test-Fonction |
| système | Get-Process |
| perso | Get-Utilisateur |

---

# 📦 Exemple complet

```powershell
function Get-UtilisateurInfo {
    param (
        [string]$Nom,
        [int]$Age
    )

    if ($Age -ge 18) {
        Write-Output "$Nom est majeur"
    } else {
        Write-Output "$Nom est mineur"
    }
}
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| function | bloc réutilisable |
| param | entrée |
| return | sortie |
| pipeline | traitement |
| CmdletBinding | avancé |

Les fonctions PowerShell permettent de **structurer, automatiser et rendre réutilisable le code dans les scripts**.