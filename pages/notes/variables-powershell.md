# 🧩 Variables PowerShell

## 📌 Définition

Une **variable PowerShell** permet de **stocker une valeur en mémoire** pour l’utiliser dans un script ou une commande.

Elle peut contenir :

- texte
- nombres
- objets
- tableaux
- résultats de commandes

---

# 🧠 Principe de base

En PowerShell :

- une variable commence par :

```
$
```

---

## Exemple

```powershell
$nom = "John"
$age = 25
```

---

# 📊 Types de variables

PowerShell est typé dynamiquement.

| Type | Exemple |
|---|---|
| String | "Hello" |
| Int | 10 |
| Bool | $true / $false |
| Array | @(1,2,3) |
| Object | Get-Process |

---

# 📦 Utilisation des variables

## Afficher une variable

```powershell
$nom
```

---

## Utiliser dans une chaîne

```powershell
"Bonjour $nom"
```

---

# 🧾 Variables et objets

PowerShell manipule des objets.

```powershell
$process = Get-Process
$process.Name
```

---

# 📊 Tableaux (arrays)

## Déclaration

```powershell
$tab = @(1,2,3)
```

---

## Accès

```powershell
$tab[0]
```

---

# ⚙️ Variables spéciales

| Variable | Description |
|---|---|
| $null | valeur vide |
| $true / $false | booléens |
| $_ | objet courant |
| $? | succès de la dernière commande |
| $LASTEXITCODE | code retour |
| $env:PATH | variables d’environnement |

---

# 🌐 Variables d’environnement

Accès :

```powershell
$env:USERNAME
```

---

## Modifier

```powershell
$env:TEST = "valeur"
```

---

# ⚙️ Typage explicite

On peut définir un type :

```powershell
[int]$age = 30
[string]$nom = "Alice"
```

---

# 📦 Portée des variables

| Portée | Description |
|---|---|
| Local | script courant |
| Global | session |
| Script | script entier |
| Private | isolée |

---

## Exemple

```powershell
$global:test = "valeur"
```

---

# ⚙️ Supprimer une variable

```powershell
Remove-Variable nom
```

---

# 📊 Opérations sur variables

## Concaténation

```powershell
$prenom = "Jean"
$nom = "Dupont"
$full = "$prenom $nom"
```

---

## Calcul

```powershell
$a = 5
$b = 10
$c = $a + $b
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser des noms clairs
- éviter les variables globales
- typer si nécessaire
- attention aux valeurs nulles

---

# 🧠 Bonnes pratiques nommage

| Convention | Exemple |
|---|---|
| camelCase | $userName |
| descriptif | $listeUtilisateurs |
| éviter abréviations | ❌ $u |

---

# 📦 Exemple complet

```powershell
$nom = "Alice"
$age = 30

if ($age -gt 18) {
    Write-Output "Bonjour $nom, vous êtes majeur."
}
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| $ | préfixe variable |
| type | dynamique |
| usage | stocker données |
| portée | local/global |
| environnement | $env: |

Les variables PowerShell permettent de **manipuler facilement des données et des objets dans des scripts et automatisations**.