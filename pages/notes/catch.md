# 🧩 Catch PowerShell — Gestion des erreurs

## 📌 Définition

Le bloc **`catch`** est utilisé avec `try` pour **intercepter et gérer les erreurs** en PowerShell.

👉 Structure :

```powershell
try {
    # code
} catch {
    # gestion erreur
}
```

---

# 🧠 Principe

Lorsque le code dans `try` provoque une erreur :

```
Erreur
 ↓
Catch intercepte
 ↓
Traitement personnalisé
```

---

# ⚙️ Syntaxe de base

```powershell
try {
    Get-Item "C:\fichier.txt"
} catch {
    Write-Output "Erreur détectée"
}
```

---

# 📦 Accéder à l’erreur

Dans `catch`, la variable automatique est :

```powershell
$_
```

---

## Exemple

```powershell
try {
    Get-Item "C:\inexistant.txt"
} catch {
    Write-Output "Erreur : $_"
}
```

---

# 📊 Types d’erreurs

PowerShell distingue :

| Type | Description |
|---|---|
| Terminating | déclenche catch |
| Non-terminating | ne déclenche pas catch |

---

# ⚙️ Forcer une erreur

Certaines commandes ne déclenchent pas `catch` par défaut.

Solution :

```powershell
-ErrorAction Stop
```

---

## Exemple

```powershell
try {
    Get-Item "C:\inexistant.txt" -ErrorAction Stop
} catch {
    Write-Output "Erreur capturée"
}
```

---

# 📦 Catch avec type d’erreur

```powershell
try {
    Get-Item "C:\test.txt"
} catch [System.IO.IOException] {
    Write-Output "Erreur IO"
}
```

---

# ⚙️ Multiple catch

```powershell
try {
    # code
}
catch [System.IO.IOException] {
    Write-Output "Erreur IO"
}
catch {
    Write-Output "Erreur générale"
}
```

---

# 📦 Finally (optionnel)

```powershell
try {
    # code
}
catch {
    # erreur
}
finally {
    Write-Output "Toujours exécuté"
}
```

---

# 📊 Rôle des blocs

| Bloc | Rôle |
|---|---|
| try | code à tester |
| catch | gestion erreur |
| finally | exécution garantie |

---

# ⚙️ Exemple complet

```powershell
try {
    Get-Item "C:\fichier.txt" -ErrorAction Stop
}
catch {
    Write-Output "Erreur : $_"
}
finally {
    Write-Output "Fin du script"
}
```

---

# 📊 Bonnes pratiques

| Conseil | Description |
|---|---|
| utiliser try/catch | standard |
| utiliser -ErrorAction Stop | fiabilité |
| gérer types erreurs | précision |
| log erreurs | suivi |

---

# ⚠️ Attention

> [!warning]

- certaines erreurs ne déclenchent pas catch
- toujours tester avec `-ErrorAction Stop`
- éviter catch vide

---

# 📊 Catch vs Trap

| Critère | Catch | Trap |
|---|---|---|
| Portée | locale | globale |
| précision | élevée | faible |
| modernité | recommandée | ancien |

---

# 📦 Exemple avancé

```powershell
try {
    $file = Get-Item "C:\test.txt" -ErrorAction Stop
}
catch {
    Write-Output "Impossible de trouver le fichier"
    Write-Output "Détail : $_"
}
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| catch | gestion erreur |
| $_ | erreur |
| try | bloc test |
| finally | toujours exécuté |
| option clé | -ErrorAction Stop |

Le bloc **catch permet de gérer proprement les erreurs dans PowerShell**, offrant un **contrôle précis et sécurisé des scripts**.