# 📦 

## 📌 Définition

Un **module PowerShell** est un ensemble de ressources regroupées :

- fonctions
- cmdlets
- variables
- classes
- scripts

👉 Il permet de **réutiliser et organiser du code**.

---

# 🧠 Principe

Un module agit comme une **bibliothèque**.

Exemple :

```
Module → fonctions → utilisation dans script
```

---

# 📊 Types de modules

| Type | Description |
|---|---|
| Script module (.psm1) | code PowerShell |
| Binary module (.dll) | code compilé |
| Manifest (.psd1) | métadonnées |
| Dynamic module | créé à l’exécution |

---

# 📂 Emplacement des modules

## Voir les chemins

```powershell
$env:PSModulePath
```

---

## Emplacements courants

| Chemin | Description |
|---|---|
| C:\Program Files\WindowsPowerShell\Modules | global |
| C:\Users\user\Documents\WindowsPowerShell\Modules | utilisateur |

---

# 🔎 Voir les modules

## Modules disponibles

```powershell
Get-Module -ListAvailable
```

---

## Modules chargés

```powershell
Get-Module
```

---

# ⚙️ Importer un module

```powershell
Import-Module NomModule
```

---

# ❌ Supprimer un module chargé

```powershell
Remove-Module NomModule
```

---

# 📦 Installer un module

Depuis PowerShell Gallery :

```powershell
Install-Module NomModule
```

---

# 🔄 Mettre à jour

```powershell
Update-Module NomModule
```

---

# ❌ Désinstaller

```powershell
Uninstall-Module NomModule
```

---

# 📊 Module manifest (.psd1)

Contient :

| Élément | Description |
|---|---|
| version | version module |
| auteur | info |
| dépendances | modules requis |

---

# ⚙️ Créer un module simple

## 1️⃣ Créer fichier

```
MonModule.psm1
```

---

## 2️⃣ Ajouter fonction

```powershell
function Get-Bonjour {
    "Bonjour"
}
```

---

## 3️⃣ Importer

```powershell
Import-Module ./MonModule.psm1
```

---

## 4️⃣ Utiliser

```powershell
Get-Bonjour
```

---

# 📦 Exporter fonctions

```powershell
Export-ModuleMember -Function Get-Bonjour
```

---

# 📊 Bonnes pratiques

| Conseil | Description |
|---|---|
| structurer | fonctions claires |
| nommage | Verbe-Nom |
| versionner | modules |
| documenter | commentaires |

---

# ⚠️ Sécurité

> [!warning]

- vérifier la source des modules
- éviter modules non fiables
- utiliser signature si possible

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
| Module | bibliothèque PowerShell |
| Import | `Import-Module` |
| Install | `Install-Module` |
| Path | `$env:PSModulePath` |
| Usage | réutilisation code |

Les modules PowerShell permettent de **structurer, partager et réutiliser efficacement du code dans les scripts et environnements d’administration**.