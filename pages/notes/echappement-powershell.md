# 🧩 Caractères d’échappement PowerShell

## 📌 Définition

Les **caractères d’échappement** permettent de :

- insérer des caractères spéciaux
- contrôler l’affichage du texte
- éviter l’interprétation de certains caractères

Dans PowerShell, le caractère d’échappement principal est :

```
` (backtick)
```

---

# 🧠 Principe de fonctionnement

Le backtick (`) indique à PowerShell :

```
👉 "le caractère suivant est spécial"
```

Exemple :

```powershell
"Hello`nWorld"
```

Résultat :

```
Hello
World
```

---

# 📊 Liste des caractères d’échappement

| Séquence | Description |
|---|---|
| `n | nouvelle ligne |
| `t | tabulation |
| `r | retour chariot |
| `"` | guillemet double |
| `' | guillemet simple |
| `` ` `` | backtick |
| `0 | caractère nul |
| `a | alerte (beep) |
| `b | retour arrière |
| `f | saut de page |
| `v | tabulation verticale |

---

# 📦 Exemples pratiques

## Nouvelle ligne

```powershell
Write-Output "Ligne1`nLigne2"
```

---

## Tabulation

```powershell
Write-Output "Nom`tAge"
```

---

## Afficher un guillemet

```powershell
Write-Output "Il a dit : `"Bonjour`""
```

---

## Afficher un backtick

```powershell
Write-Output "Voici un backtick : ``"
```

---

# 🧾 Chaînes de caractères

## Guillemets doubles

```powershell
$name = "John"
"Bonjour $name"
```

👉 Interprétation des variables + échappement

---

## Guillemets simples

```powershell
'Bonjour $name'
```

👉 Pas d’interprétation

---

# ⚙️ Cas particulier : continuation de ligne

Le backtick permet aussi de couper une ligne :

```powershell
Get-Process `
| Where-Object { $_.CPU -gt 100 }
```

---

# ⚠️ Attention

> [!warning]

- le backtick est **invisible → erreurs fréquentes**
- ne pas mettre d’espace après `
- sensible à la copie/collage

---

# 🧠 Bonnes pratiques

| Conseil | Description |
|---|---|
| préférer "" | pour variables |
| utiliser '' | pour texte brut |
| limiter le backtick | lisibilité |
| utiliser Here-String | pour gros blocs |

---

# 📦 Here-String (alternative)

```powershell
@"
Ligne 1
Ligne 2
"@
```

👉 Pas besoin d’échappement

---

# 📊 Résumé

| Élément | Description |
|---|---|
| caractère principal | ` |
| rôle | échappement |
| usage | texte, formatage |
| alternative | Here-String |

Les caractères d’échappement permettent de **contrôler finement le comportement des chaînes de caractères en PowerShell**.