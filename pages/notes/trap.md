# ⚠️ Trap PowerShell — Gestion des erreurs

## 📌 Définition

Le mot-clé **`trap`** en PowerShell permet de **capturer et gérer les erreurs** dans un script.

Il agit comme un **gestionnaire global d’exception**.

👉 Utilisé principalement pour :

- intercepter les erreurs
- éviter l’arrêt du script
- afficher ou traiter les erreurs

---

# 🧠 Principe

Lorsqu’une erreur survient :

```
Erreur
 ↓
Trap intercepte
 ↓
Traitement personnalisé
```

---

# ⚙️ Syntaxe de base

```powershell
trap {
    Write-Output "Une erreur est survenue"
}
```

---

# 📦 Exemple simple

```powershell
trap {
    Write-Output "Erreur détectée"
}

Get-Item "C:\fichier_inexistant.txt"
```

---

# 📊 Comportement

| Action | Description |
|---|---|
| erreur levée | trap exécuté |
| script continue | par défaut |
| traitement global | oui |

---

# ⚙️ Accéder à l’erreur

Variable automatique :

```powershell
$_
```

---

## Exemple

```powershell
trap {
    Write-Output "Erreur : $_"
}
```

---

# 📊 Actions possibles

| Action | Effet |
|---|---|
| continue | continuer script |
| break | sortir du script |
| return | sortir fonction |

---

## Exemple

```powershell
trap {
    Write-Output "Erreur critique"
    break
}
```

---

# ⚙️ Trap avec type d’erreur

```powershell
trap [System.IO.IOException] {
    Write-Output "Erreur IO"
}
```

---

# 📦 Exemple avancé

```powershell
trap {
    Write-Output "Erreur : $_"
    continue
}

Get-Item "C:\test.txt"
Get-Item "C:\inexistant.txt"
```

---

# ⚙️ Trap vs Try/Catch

| Critère | trap | try/catch |
|---|---|---|
| Portée | globale | locale |
| contrôle | faible | précis |
| modernité | ancien | recommandé |
| usage | scripts simples | scripts avancés |

---

# 📊 Exemple try/catch

```powershell
try {
    Get-Item "C:\fichier.txt"
} catch {
    Write-Output "Erreur"
}
```

---

# ⚠️ Limitations

| Limite | Description |
|---|---|
| global | difficile à contrôler |
| lisibilité | moins clair |
| ancien | remplacé par try/catch |

---

# 🧠 Bonnes pratiques

| Conseil | Description |
|---|---|
| préférer try/catch | plus moderne |
| utiliser trap pour global | fallback |
| log erreurs | suivi |
| éviter abus | complexité |

---

# ⚠️ Attention

> [!warning]

- trap capture toutes les erreurs
- peut masquer les problèmes
- difficile à maintenir dans gros scripts

---

# 📦 Exemple complet

```powershell
trap {
    Write-Output "Erreur détectée : $_"
    continue
}

Get-Item "C:\ok.txt"
Get-Item "C:\erreur.txt"
Write-Output "Script continue"
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| trap | gestion globale erreurs |
| $_ | erreur courante |
| continue | continuer |
| break | arrêter |
| alternative | try/catch |

Le **trap PowerShell permet de capturer les erreurs globalement**, mais il est aujourd’hui **souvent remplacé par try/catch pour un contrôle plus précis**.