# ⚙️ Paramètres PowerShell (param)

## 📌 Définition

Les **paramètres PowerShell** permettent de **passer des valeurs à un script ou une fonction**.

Ils rendent les scripts :

- dynamiques
- réutilisables
- modulables

---

# 🧠 Principe

Les paramètres sont déclarés avec :

```powershell
param()
```

Ils sont placés :

- en début de script
- ou dans une fonction

---

# ⚙️ Syntaxe de base

```powershell
param (
    [string]$Nom
)
```

---

## Exemple

```powershell
param (
    [string]$Nom
)

Write-Output "Bonjour $Nom"
```

---

## Utilisation

```powershell
.\script.ps1 -Nom "Alice"
```

---

# 📊 Types de paramètres

| Type | Exemple |
|---|---|
| string | [string]$Nom |
| int | [int]$Age |
| bool | [bool]$Actif |
| array | [array]$Liste |

---

# ⚙️ Paramètres multiples

```powershell
param (
    [string]$Nom,
    [int]$Age
)
```

---

# 📦 Valeurs par défaut

```powershell
param (
    [string]$Nom = "Utilisateur"
)
```

---

# 📊 Paramètres obligatoires

```powershell
param (
    [Parameter(Mandatory)]
    [string]$Nom
)
```

---

# ⚙️ Paramètres positionnels

```powershell
param (
    [Parameter(Position=0)]
    [string]$Nom
)
```

---

## Utilisation

```powershell
.\script.ps1 "Alice"
```

---

# 📦 Paramètres depuis pipeline

```powershell
param (
    [Parameter(ValueFromPipeline)]
    [string]$Nom
)
```

---

# ⚙️ Paramètres avec validation

## Validation Set

```powershell
param (
    [ValidateSet("Dev","Prod")]
    [string]$Env
)
```

---

## Validation Range

```powershell
param (
    [ValidateRange(1,100)]
    [int]$Age
)
```

---

# 📊 Paramètres avancés

| Attribut | Description |
|---|---|
| Mandatory | obligatoire |
| Position | ordre |
| HelpMessage | message aide |
| ValueFromPipeline | pipeline |

---

# ⚙️ Exemple complet

```powershell
function Get-Utilisateur {
    param (
        [Parameter(Mandatory)]
        [string]$Nom,

        [int]$Age = 18
    )

    Write-Output "Nom : $Nom, Age : $Age"
}
```

---

# 📦 Bonnes pratiques

| Conseil | Description |
|---|---|
| typer | éviter erreurs |
| nom clair | lisibilité |
| limiter paramètres | simplicité |
| validation | sécurité |

---

# ⚠️ Attention

> [!warning]

- les paramètres doivent être en début de script
- attention aux types incorrects
- vérifier les valeurs obligatoires

---

# 📊 Résumé

| Élément | Description |
|---|---|
| param | déclaration paramètres |
| type | string, int… |
| Mandatory | obligatoire |
| Position | ordre |
| validation | sécurisation |

Les paramètres PowerShell permettent de **rendre les scripts flexibles, robustes et réutilisables**.