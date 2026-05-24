
Voici un kit de base des commandes PowerShell qu’un **TSSR** utilise très souvent, avec des exemples concrets.

## 1. Aide et découverte

- `Get-Help <commande> -Online` : afficher l’aide détaillée d’une commande (ex. `Get-Help Get-Service -Online`).[](https://www.it-connect.fr/15-commandes-indispensables-pour-debuter-avec-powershell/)​
    
- `Get-Command` : lister les cmdlets disponibles, trouver une commande (ex. `Get-Command *service*`).[](https://www.it-connect.fr/15-commandes-indispensables-pour-debuter-avec-powershell/)​
    
- `Get-Member` : voir les propriétés d’un objet (très utile après un pipe, ex. `Get-Service | Get-Member`). [](https://www.reddit.com/r/sysadmin/comments/1eo9971/what_are_some_powershell_commands_everyone_should/)​
    

## 2. Fichiers, dossiers et système

- `Get-ChildItem` (alias `ls` / `dir`) : lister fichiers et dossiers, ex. `Get-ChildItem C:\Logs`.
    
- `Set-Location` (alias `cd`) : changer de dossier, ex. `Set-Location C:\Windows`.
    
- `New-Item` : créer fichier ou dossier, ex. `New-Item -ItemType Directory -Path C:\Outils`.[](https://www.it-connect.fr/15-commandes-indispensables-pour-debuter-avec-powershell/)​
    
- `Copy-Item`, `Move-Item`, `Remove-Item` : copier, déplacer, supprimer des fichiers/dossiers.​
    
- `Get-Item` : voir les propriétés d’un fichier/dossier (dates, taille, etc.).[](https://www.it-connect.fr/15-commandes-indispensables-pour-debuter-avec-powershell/)​
    

## 3. Processus et services

- `Get-Process` : lister les processus, diagnostiquer les lenteurs.
    
- `Stop-Process -Name nom` : tuer un processus bloqué.[](https://www.bemsp.fr/article/commande-powershell)​
    
- `Get-Service` : voir l’état des services (Running/Stopped).
    
- `Start-Service`, `Stop-Service`, `Restart-Service` : gérer les services (ex. `Restart-Service -Name spooler`).
    

## 4. Journaux et supervision

- `Get-EventLog -LogName System -Newest 50` : lire les derniers événements (pannes, erreurs).[](https://www.bemsp.fr/article/commande-powershell)​
    
- `Get-EventLog -LogName Application -EntryType Error` : filtrer les erreurs applicatives.[](https://www.bemsp.fr/article/commande-powershell)​
    

## 5. Réseau et poste

- `Test-Connection <hôte>` : équivalent ping.
    
- `Get-NetIPAddress`, `Get-NetIPConfiguration` : afficher la config IP.
    
- `Get-ComputerInfo` ou `systeminfo` (via `cmd /c`) : infos complètes sur le poste (version Windows, RAM, etc.).​
    

## 6. Active Directory (très courant en TSSR)

Sur un poste/serveur avec les RSAT ou rôles AD installés :

- `Get-ADUser`, `Get-ADComputer`, `Get-ADGroup` : rechercher comptes utilisateurs, machines, groupes.[](https://tssr.eklablog.fr/commandes-powershell-de-base-pour-windows-server-core-a212261205)​​
    
- `New-ADUser` : créer un utilisateur AD (souvent avec chemin OU, mot de passe, etc.).[](https://tssr.eklablog.fr/commandes-powershell-de-base-pour-windows-server-core-a212261205)​
    
- `New-ADOrganizationalUnit` : créer une OU.[](https://tssr.eklablog.fr/commandes-powershell-de-base-pour-windows-server-core-a212261205)​
    
- `Add-ADGroupMember` : ajouter un utilisateur à un groupe.
    

## 7. Administration distante et scripts

- `Set-ExecutionPolicy RemoteSigned` (souvent en _Scope Process_ pour la session) : autoriser les scripts.​[](https://learn.microsoft.com/ja-jp/troubleshoot/windows-client/windows-tss/introduction-to-troubleshootingscript-toolset-tss)​
    
- `Get-ExecutionPolicy -List` : vérifier les politiques d’exécution.[](https://learn.microsoft.com/ja-jp/troubleshoot/windows-client/windows-tss/introduction-to-troubleshootingscript-toolset-tss)​
    
- `Invoke-Command -ComputerName PC01 -ScriptBlock { ... }` : exécuter une commande à distance.[](https://www.bemsp.fr/article/commande-powershell)​
    
- `Enter-PSSession -ComputerName PC01` : prise en main distante interactive.[](https://www.bemsp.fr/article/commande-powershell)​
    

## 8. Pour t’entraîner (petits scénarios)

- Diagnostiquer un poste lent : `Get-Process | Sort-Object CPU -Descending | Select-Object -First 10`.
    
- Vérifier que tous les services critiques tournent : `Get-Service dns,dhcp,lanmanserver`.[](https://www.bemsp.fr/article/commande-powershell)​
    
- Rechercher un utilisateur AD : `Get-ADUser -Filter "Name -like '*Dupont*'" -Properties *`.[](https://tssr.eklablog.fr/commandes-powershell-de-base-pour-windows-server-core-a212261205)
- 