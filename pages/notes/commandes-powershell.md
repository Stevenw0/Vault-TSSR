
# ⚡ PowerShell — Commandes essentielles (cheatsheet)

> [!info]
> PowerShell est un shell orienté **objets** (pas juste du texte).  
> Les commandes renvoient des **objets** manipulables avec `|` (pipeline).

---

## 🧭 Aide & découverte

### Trouver des commandes
```powershell
Get-Command
```

```powershell
Get-Command *service*
```

### Aide intégrée
```powershell
Get-Help Get-Process
```

```powershell
Get-Help Get-Process -Examples
```

```powershell
Update-Help
```

> [!tip]
> Utilise `Get-Command *mot*` + `Get-Help` pour apprendre très vite.

---

## 📁 Fichiers & navigation

### Répertoires
```powershell
Get-Location
```

```powershell
Set-Location C:\Windows
```

```powershell
Get-ChildItem
```

```powershell
Get-ChildItem -Recurse
```

### Créer / copier / supprimer
```powershell
New-Item -ItemType Directory -Path .\Logs
```

```powershell
New-Item -ItemType File -Path .\test.txt
```

```powershell
Copy-Item .\test.txt .\Logs\
```

```powershell
Move-Item .\test.txt .\Logs\
```

```powershell
Remove-Item .\Logs\test.txt
```

> [!warning]
> `Remove-Item -Recurse -Force` peut supprimer beaucoup de choses très vite.

---

## 🔎 Recherche

### Rechercher du texte (équivalent grep)
```powershell
Select-String -Path .\logs.txt -Pattern "error"
```

### Rechercher des fichiers
```powershell
Get-ChildItem -Path C:\ -Recurse -ErrorAction SilentlyContinue -Filter *.log
```

---

## 🧩 Pipeline & filtrage

### Filtrer avec `Where-Object`
```powershell
Get-Process | Where-Object { $_.CPU -gt 100 }
```

### Sélectionner des propriétés
```powershell
Get-Process | Select-Object Name, Id, CPU
```

### Trier
```powershell
Get-Process | Sort-Object CPU -Descending
```

### Afficher sous forme de table
```powershell
Get-Service | Sort-Object Status | Format-Table -AutoSize
```

> [!important]
> PowerShell manipule des **objets** : `Select`, `Where`, `Sort` sont tes meilleurs amis.

---

## 🧾 Services

```powershell
Get-Service
```

```powershell
Get-Service -Name spooler
```

```powershell
Start-Service spooler
```

```powershell
Stop-Service spooler
```

```powershell
Restart-Service spooler
```

---

## 🧠 Processus

```powershell
Get-Process
```

```powershell
Get-Process -Name notepad
```

```powershell
Stop-Process -Name notepad
```

```powershell
Start-Process notepad.exe
```

---

## 👤 Utilisateurs & sessions

### Qui suis-je ?
```powershell
whoami
```

### Variables d’environnement
```powershell
$env:USERNAME
```

```powershell
Get-ChildItem Env:
```

### Sessions PowerShell
```powershell
Get-History
```

```powershell
Clear-History
```

---

## 🌐 Réseau

### IP / interfaces
```powershell
Get-NetIPConfiguration
```

```powershell
Get-NetIPAddress
```

### Ping / DNS
```powershell
Test-Connection 8.8.8.8
```

```powershell
Resolve-DnsName google.com
```

### Ports ouverts (écoute)
```powershell
Get-NetTCPConnection -State Listen
```

### Télécharger un fichier
```powershell
Invoke-WebRequest -Uri "https://example.com/file.txt" -OutFile ".\file.txt"
```

> [!note]
> `curl` existe aussi sous Windows, mais `Invoke-WebRequest` est natif PowerShell.

---

## 💾 Disques & système

### Infos système
```powershell
Get-ComputerInfo
```

### Espace disque
```powershell
Get-PSDrive
```

```powershell
Get-Volume
```

### Processus + perf rapide
```powershell
Get-Counter '\Processor(_Total)\% Processor Time'
```

---

## 🧬 WMI / CIM (inventaire machine)

```powershell
Get-CimInstance Win32_OperatingSystem
```

```powershell
Get-CimInstance Win32_ComputerSystem
```

```powershell
Get-CimInstance Win32_BIOS
```

> [!tip]
> `Get-CimInstance` remplace avantageusement les vieux `Get-WmiObject`.

---

## 📦 Modules & exécution

### Voir les modules
```powershell
Get-Module -ListAvailable
```

### Importer un module
```powershell
Import-Module ActiveDirectory
```

### Politique d’exécution
```powershell
Get-ExecutionPolicy
```

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

> [!warning]
> Ne change pas la politique d’exécution “au hasard” sur une machine de prod.

---

## 🧾 Logging / Export

### Export CSV
```powershell
Get-Process | Select-Object Name, Id, CPU | Export-Csv .\process.csv -NoTypeInformation
```

### Export JSON
```powershell
Get-Service | ConvertTo-Json | Out-File .\services.json
```

---

## 🧾 Summary

> [!summary]
> - `Get-Command` + `Get-Help` = apprendre vite
> - `|` pipeline + `Where/Select/Sort` = puissance PowerShell
> - Gestion admin : services, processus, réseau, disques
> - Inventaire : `Get-CimInstance`
> - Export : `Export-Csv`, `ConvertTo-Json`
