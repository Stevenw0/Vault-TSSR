# 🌊 Flux de sortie PowerShell (Output Streams)

## 📌 Définition

PowerShell utilise plusieurs **flux de sortie (streams)** pour gérer les différents types de messages.

Chaque flux permet de séparer :

- les résultats
- les erreurs
- les informations
- les messages de debug

---

# 🧠 Principe

Contrairement à d'autres langages, PowerShell ne possède pas qu’un seul flux.

👉 Il en possède plusieurs, chacun avec un rôle précis.

---

# 📊 Les flux PowerShell

| ID | Flux | Description |
|---|---|---|
| 1 | Success | sortie normale |
| 2 | Error | erreurs |
| 3 | Warning | avertissements |
| 4 | Verbose | détails |
| 5 | Debug | debug |
| 6 | Information | messages info |
| N/A | Progress | progression |

---

# 📦 Flux 1 — Success

Sortie standard.

```powershell
Write-Output "Hello"
```

---

# ❌ Flux 2 — Error

Messages d’erreur.

```powershell
Write-Error "Erreur"
```

---

# ⚠️ Flux 3 — Warning

Avertissements.

```powershell
Write-Warning "Attention"
```

---

# 🔍 Flux 4 — Verbose

Messages détaillés.

```powershell
Write-Verbose "Détail" -Verbose
```

---

# 🐞 Flux 5 — Debug

Messages de debug.

```powershell
Write-Debug "Debug" -Debug
```

---

# ℹ️ Flux 6 — Information

Messages informatifs.

```powershell
Write-Information "Info"
```

---

# 📊 Flux Progress

Barre de progression.

```powershell
Write-Progress -Activity "Chargement" -Status "En cours"
```

---

# ⚙️ Redirection des flux

PowerShell permet de rediriger les flux.

## Exemple

```powershell
Get-Process 2> erreurs.txt
```

---

## Rediriger tout

```powershell
Get-Process *> sortie.txt
```

---

# 📊 Syntaxe redirection

| Syntaxe | Description |
|---|---|
| > | sortie standard |
| 2> | erreurs |
| 3> | warning |
| 4> | verbose |
| 5> | debug |
| 6> | information |
| *> | tous les flux |

---

# 🔁 Fusion des flux

Fusionner erreur + sortie :

```powershell
Get-Process 2>&1
```

---

# ⚙️ Variables de contrôle

## Verbose

```powershell
$VerbosePreference = "Continue"
```

---

## Debug

```powershell
$DebugPreference = "Continue"
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser les bons flux
- ne pas tout mettre dans Write-Output
- séparer erreurs et logs
- utiliser verbose/debug pour scripts

---

# 🧠 Utilisation typique

| Cas | Flux |
|---|---|
| résultat | Output |
| erreur | Error |
| info | Information |
| debug | Debug |

---

# 📦 Exemple complet

```powershell
Write-Output "OK"
Write-Warning "Attention"
Write-Error "Erreur"
Write-Verbose "Détail" -Verbose
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Streams | flux de sortie |
| ID | 1 à 6 |
| usage | logs et debug |
| redirection | >, 2>, *> |
| fusion | 2>&1 |

Les flux PowerShell permettent de **mieux gérer les sorties, le debug et les erreurs dans les scripts**.