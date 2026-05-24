Powershell
==

## Introduction

- Projet démarré en 2004 avec le Framework .Net
- Développé conjointement avec le WinRM
- Shell avec une sortie objet !


### Versions : $PSVersionTable

- Desktop 5.1, disponible sur les OS Windows
- Core 7, multi-os (Win, Linux, Mac), liée au FrameWork .Net Core

### Trouver les commandes: 
Cmdlets: Commandes natives Powershell

Utilisation de la nomenclature ou formalisme -> Verbe-Nom ou Action-Objet
Utilisation des préfixes de Module : Verbe-PrefixeNom
Utilisation des jokers : * ou ?

- F8 : exécution de la commande courante/sélection
- Utilisation de la complétion : ctrl+espace
```Get-Command *-AD*user* ```
- ou
```Get-Command *user* -Module ActiveDirectory```
- Aide : Get-Help, help ou man (installation d'une copie locale : update-help)
- Aide sur les cmdlets
```
Get-Help Get-ADUser
Get-Help New-ADUser              # aide synthétique
Get-Help New-ADUser -Examples    # exemples
Get-Help New-ADUser -ShowWindow  # affichage graphique
Get-Help New-ADUser -Online      # sur internet
```
- Sections d'aide : about_* aide sur PowerShell

```Get-Help about_*
Get-Help about_*   # Liste des sections d'aide

Get-Help about_If
Get-Help about_If -ShowWindow
Get-Help about_Comparison_Operators
```

- Raccourcis du shell:
  - ctrl+c : abandon de la ligne courante ou interruption de l'exécution de la commande en cours
  - ctrl+espace : complétion
  - tab ou shift+tab : complétion
  - ctrl+r ou ctrl+s : recherche dans l'historique
  - flêche haut et bas : parcours de l'historique
  - ctrl+L : nettoie le terminal
  - shift + flêches : sélection
  - ctrl + flêches : déplacement mot par mot
  - ctrl+c/x/v : gestion du presse-papier
  - Module PSReadLine gestion des raccourcis du PS





### Fichiers Powershell

.ps1 : Powershell Script (ne sont pas des exécutables, utilisation de l'interpréteur powershell.exe)
.psm1 : module, ensemble de cmdlets/fonctions
.psd1 : données de modules ou de scripts 
.ps1xml : format ou type Powershell
.pssc et .psrc : JEA (Just Enough Access) délégation à la sudo




## Bases du scripting

- Instruction ? définit par la fin de ligne, langage interprété
```Get-ADUser -Filter *```

- Scinder une instruction en plusieurs lignes. Retour chariot autorisé après:
    - pipe : chainage de commandes
    - backquote (altgr+7) : échappement
    - virgule : entre les élements d'un tableau
    - à l'intérieur d'une chaine de caractère

```
Get-ADUser `
    -Filter * |
    Where GivenName -ne '' |
    Select Name, GivenName, SurName, 
        UserPrincipalName, SamAccountName
```

### Commentaires
```
# commentaire

<# commentaire
    plusieurs
    lignes
#>
```
Visual Studio Code: ctrl + :

### Variables : stockage d'information

Liste des variables: Get-Variable ou dir variable:

Variables "système": https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.4

Variables d'environnement: dir env:

```
$x = 1
$b = $true
$c1 = "chaine dynamique $x" # avec interpolation
$c2 = 'chaine statique $x'  # sans interpolation
```
### Ecrire en Powershell
```
Write-Host $x $b $c1 $c2     # Affichage de présentation
Write-Output $x $b $c1 $c2   # Ecrire un résultat dans la sortie standard
````
Equivalent à Write-Output:
```
$x # par défaut les objets sont envoyés dans la sortie standard
$b 
$c1 
$c2
echo $x $b $c1 $c2
```
### Lire des données en Powershell
```
$saisie = Read-Host 'Invite de saisie'
Write-Output "Vous avez saisi : $saisie"

$password = Read-Host 'Invite de saisie' -AsSecureString
$password
```



## Conditions

### Opérateurs

Affectation:
```$x = 5```

#### Comparaison: 
```
$x -eq 4   # égal
$x -ne 4   # not equal
$x -lt 4   # less than
$x -gt 4   # greater then
$x -le 4   # less or equal
$x -ge 4   # greater or equal
```
**Non sensible à la casse par défaut**

#### Jokers
```
$c = 'tomates'
$c -like 'tom*'       # commence par tom
$c -notlike '*pat*'   # ne contient pas 'pat'
```

#### Expressions régulières (regex ou regexp)
```
$c -match '^t.{5}s$'  # commence par 't' (^t), est suivi de 5 caractères ('.{5}') et se termine par un s ('s$')
$c -notmatch '^t[a-z]{5}s$'  # [a-z] les caractères de a à z
```
#### opérateurs ensemblistes
```
$t = 1,2,3,4,5,6,7
$t -contains 5
$t -notcontains 3
3 -in $t
8 -notin $t
```

#### opérateurs logiques (chaîner plusieurs conditions ensembles)
```
$true -and -not $false  # -not peut s'écrire !
$true -or $false
$true -xor $true
```

#### Typage et casse
```
'a' -eq 'A'
'1' -eq 1

'a' -ceq 'A'   # le préfixe 'c' les rend sensibles à la casse
('1'.GetType() -eq (1).GetType()) -and ('1' -eq 1)  # égalité en type et en valeur
```

### If
```
$x = 6
if ($x -eq 5) { # si la condition est vraie, les instructions sont exécutées
    Write-Host 'c''est vrai'
}

$x = 6
if ($x -eq 5) {
    Write-Host 'c''est vrai'
} else {
    Write-Host 'c''est faux'
}

$x = 6
if ($x -eq 5) {
    Write-Host 'x vaut 5'
} elseif ($x -eq 6) {
    Write-Host 'x vaut 6'
} else {
    Write-Host 'pas traité'
}
```

### Switch
```
$x=4
switch ($x) { # pour des cas de la variable faire...
    1 { Write-Host 'x vaut 1' } # si $x égal à 1
    2 { Write-Host 'x vaut 2' }
    3 { Write-Host 'x vaut 3' }
    default { Write-Host 'x vaut autre chose' }
}
# La section "Default" est facultative.
```


## Boucles

### Parcours borné

for(\<init du compteur>; \<test d'arrêt>; \<incrément>)
```
for ($i = 0; $i -lt 10; $i++) { # de 0 à 9
    $i
}
for ($i = 1; $i -le 10; $i++) { # de 1 à 10
    $i
}
for ($i = 1; $i -le 10; $i+=2) { # par 2
    $i
}
for ($i = 10; $i -gt 0; $i--) { # compte à rebours
    $i
}
```
    
### Parcours sans limites connues
```
$c= ''
while ($c -ne 'x') {
    $c = Read-Host 'x pour sortir'
}

do {
    $c = Read-Host 'x pour sortir'
} while ($c -ne 'x')

do {
    $c = Read-Host 'x pour sortir'
} until ($c -eq 'x')
```

### Parcours de tableaux/listes/collections
#### Pour les scripts
```
$tab = 56,78,34,4,56,1
foreach($item in $tab) { # le nom de la variable de parcours est libre
    $item
}

foreach($user in (Get-ADUser -filter *)) { 
    $user.Name
}
```
#### Pour le shell
```
Get-ADUser -filter * | ForEach-Object { # variable de parcours : $_ ou $PSItem
    $_.Name
}
# ou
Get-ADUser -filter * | foreach { 
    $PSItem.Name
}
# ou
Get-ADUser -filter * | % { $_.Name }
```


## Fonctions

**Regroupement d'instructions sous un nom**

### Déclaration
```
function foobar {
    Write-Host 'Hello world !'
}

# Appel
foobar

dir function:  # voir les fonctions du shell courant
```


- Pour le nom préférez utiliser le formalisme Powershell : Verbe-Nom
- Utilisez des verbes autorisés : Get-Verb
- f(x) =y  -> un résultat est renvoyé
```
function Write-Hello {
    Write-Output 'Hello world !' # renvoie le résultat et continue le code de la fonction
    Write-Host 'Fini' -BackgroundColor Red
}
# ou
function Write-Hello2 {
    return 'Hello world !' # renvoie le résultat et met fin au code de la fonction
    Write-Host 'Jamais atteint' -BackgroundColor Red
}

Write-Hello
Write-Hello2
```

### Passage de paramètres

#### Technique rétro-compatible
```
function Write-Hello3($Nom, $Prenom) {
    return "Hello $Prenom $Nom !"
}
```
**Les paramètres de la fonction deviennent des paramètres de commande Powershell**
```
Write-Hello3 -Nom Clément -Prenom Jules
Write-Hello3 -N Clément -P Jules # si pas d'ambiguïté
Write-Hello3 Clément Maloù  # utilisation de la position des paramètres
Write-Hello3 -Prenom Adèle -Nom Clément

# avec typage et valeur par défaut
function Write-Hello3bis([string]$Nom, [string]$Prenom='Jules') {
    return "Hello $Prenom $Nom !"
}
```


#### Technique Powershell (valable aussi pour les scripts)
Plus values:
- paramètres obligatoires
- valider les entrées: ValidateScript, ValidatePattern, ValidateCount, ValidateLength, ValidateRange, ValidateSet, ValidateNotNullOrEmpty...
- ajouter les paramètres communs powershell: gestion des flux des commandes
- gérer les entrées par le pipe
- et les jeux de paramètre multiples
```
function Write-Hello4 {
    param($Nom, $Prenom)
    
    return "Hello $Prenom $Nom !"
}


function Write-Hello4 {
    [CmdletBinding()]   # ajout des paramètres communs
    param(
        [ValidateLength(2, 35)] # longueur de la chaine entre 2 et 35 caract
        [ValidatePattern('^[a-z0-9]+$')] # les caractères autorisés sont [a-z0-9]
        [parameter(Mandatory)]  # obligatoire
        [string]$Nom,           # typage

        [ValidateSet('Jules','Adèle','Maloù')] # valeurs autorisées
        [string]$Prenom = 'Jules',              # typage et valeur

        [ValidateSet('Mme', 'M', 'Dr', 'Pr')]
        [string]$Titre
    )
    return "Hello $Titre $Prenom $Nom !"
}

Write-hello4 -Nom Clement -Prenom Maloù
```

```
function Write-Hello5 {
    [CmdletBinding()]   # ajout des paramètres communs
    param(
        [ValidateLength(2, 35)] # longueur de la chaine entre 2 et 35 caract
        [ValidatePattern('^[a-z0-9]+$')] # les caractères autorisés sont [a-z0-9]
        [parameter(Mandatory)]  # obligatoire
        [string]$Nom,           # typage

        [ValidateSet('Jules','Adèle','Maloù')] # valeurs autorisées
        [string]$Prenom = 'Jules',              # typage et valeur

        [ValidateSet('Mme', 'M', 'Dr', 'Pr')]
        [string]$Titre,

        [ValidateRange(1,500)]
        [uint16]$Iteration=1
    )
    for($i=1; $i -le $Iteration; $i++) {
        Write-Output "$i : Hello $Titre $Prenom $Nom !"
    }
}
Write-Hello5 -Titre Dr -Nom Johns -Prenom Maloù -Iteration 100
```

## Librairie
- Ensemble de fonctions
- Fichier ps1
- Pas de gestion des dépendances 
- Chargement avec le dotSourcing:
```
# Exécution dans le shell courant
. .\librairie.ps1
# ou
Import-Module .\librairie.ps1
```

Attention, ne pas oublier le point !
```
# Ne fonctionne pas : le fichier ps1 est exécuté dans un sous-shell
.\librairie.ps1
```

## Modules
- Ensemble de fonctions
- Fichiers psm1 (code du module) et psd1 (manifeste du module, facultatif)
- Types et emplacements $env:PSModulePath ou emplacement libre (obligation d'utiliser Import-Module)
- Emplacements Windows:
    - Utilisateur : ~\Documents\WindowsPowerShell\Modules
    - Externes : C:\Program Files\WindowsPowerShell\Modules (récupérés depuis internet)
    - Système : C:\Windows\system32\WindowsPowerShell\v1.0\Modules
    - Application : ~\.vscode\extensions\ms-vscode.powershell-2022.10.0\modules

- Avantages: chargement automatique des modules, gestion des pré-requis/dépendances
- Structure:
    - Dossier racine au nom du module
    - fichier manifeste de même nom avec l'extension .psd1 (New-ModuleManifest)
    - Code de base du module(module racine) .psm1


### Création du manifeste
```
# Création du dossier
New-Item ~\Documents\WindowsPowerShell\Modules\CustomAD -Force -ItemType Directory

New-ModuleManifest -Path ~\Documents\WindowsPowerShell\Modules\CustomAD\CustomAD.psd1 `
    -RootModule CustomAD.psm1 -RequiredModules ActiveDirectory
```

### Gestion des modules
```
Get-Module                # les modules chargés en mémoire
Get-Module -ListAvailable # tous les modules présents sur le système

Get-Module -ListAvailable | more   # avec pagination
Get-Module -ListAvailable cust*    # recherche avec joker

# Voir les commandes d'un module:
Get-Module -ListAvailable cust* | fl *
Get-Module -ListAvailable cust* | select -expandproperty ExportedCommands
(Get-Module -ListAvailable cust*).ExportedCommands

Get-Command -Module CustomAD

# Chargement statique, inutile si le module est enregistré dans un emplacement prévu
Import-Module .\module-test.psm1    
```

### Powershell Gallery et dépôts externes
https://www.powershellgallery.com/

Utilisation du fournisseur NuGet.

```
Find-Module *Excel*

# Installation
Install-Module -Name ImportExcel  # nécessite les droits admin
Install-Module -Name ImportExcel -Scope CurrentUser

# Mise à jour
Update-Module -Name ImportExcel

# Mise à jour des modules provenants de dépôts externes 
Get-Module -ListAvailable | 
    Where RepositorySourceLocation -ne $null | 
    Foreach {
        Update-Module -Name $_.Name -Force -Confirm:$false
    }

# Désinstallation
Uninstall-Module -Name ImportExcel
```


## Script

### Création
Utilisation des mêmes techniques que pour les fonctions:

```
<#
.SYNOPSIS
    Documentation du script
.DESCRIPTION
    ...
.EXAMPLE
    ...
#>

# pré-requis
#Requires -RunAsAdministrator
#Requires -Module CustomAD
#Requires -Module @{ ModuleName='CustomAD'; ModuleVersion='1.1'}
# Voir la doc :get-help about_requires

# paramètres d'entrée
[CmdletBinding()]
param (
    [parameter(Mandatory)]
    [int]$param1,

    [ValidateSet('a','b','c')]
    [string]$param2='a'
)

# traitement...
Write-Output $param1, $param2

# permet de générer un exitcode (variable $LASTEXITCODE)
exit 1
```

### Exécution des scripts
- Les fichiers ps1 ne sont pas exécutables
- Attention au stratégie d'exécution : Get-ExecutionPolicy ou Get-ExecutionPolicy -List pour avoir le détail
- Modifier les stratégies : Set-ExecutionPolicy
    - Unrestricted : tous les scripts sont autorisés
    - Bypass : idem, mais de façon temporaire
    - RemoteSigned : les locaux sont autorisés, les scripts distants doivent être signés 
    - AllSigned : tous les scripts doivent être signés
    - Restricted : tous les scripts sont interdits
```
rem Utilisation de l'interpréteur de code Powershell

Powershell.exe -File 11-script.ps1
# ou pour powershell 7
pwsh -File 11-script.ps1


rem Passage de paramètres en dernière position de powershell.exe
Powershell.exe -File 11-script.ps1 -param1 123 -param2 c

rem -NoProfile : évite le chargement des profils Powershell
rem -NonInteractive : pas d'interaction avec les sessions utilisateurs
rem -ExecutionPolicy : modifie la stratégie d'exéc des scripts PS temporairement
rem -NoLogo : supprimer les lignes d'intro de MS
rem -WindowStyle : Type de fenêtre Normal, Minimized, Maximized, Hidden
Powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File 11-script.ps1 -param1 123 -param2 c
Powershell.exe -NoProfile -WindowStyle Hidden -NonInteractive -ExecutionPolicy Bypass -File 11-script.ps1 -param1 123 -param2 c
rem Rétrocompatiblité des scripts:
Powershell.exe -Version 2 -NoProfile -WindowStyle Hidden -NonInteractive -ExecutionPolicy Bypass -File 11-script.ps1 -param1 123 -param2 c

rem -NoExit : Permet de ne pas sortir en fin d'exécution pour faire du débug
Powershell.exe -NoExit -NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File 11-script.ps1 -param1 123 -param2 c
```

### Signature des scripts

Gère l'éditeur et l'intégrité du code.
Attention à publier, l'autorité de certification et le certificat de l'éditeur auprès des postes qui doivent exécuter les scripts.

```
# Exemple avec un certificat auto-signé
$cert = New-SelfSignedCertificate `
    -Subject "CN=CodeSigningCert" `
    -Type CodeSigningCert `
    -FriendlyName "CodeSigningCert" `
    -KeySpec Signature `
    -KeyUsage DigitalSignature `
    -NotAfter (Get-Date).AddYears(20) `
    -CertStoreLocation Cert:\CurrentUser\My


$cert = Get-Item Cert:\CurrentUser\My\1B82E2F7552D82CDD6B47A1206FA9FC20916218
Set-AuthenticodeSignature script.ps1 -Certificate $cert

# Vérifier la signature
Get-AuthentcodeSignature script.ps1
```

Attention à chaque modification du script, il faut resigner le script !

## Profils Powershell

Personnalisation du shell/terminal

Les différents types de profil sont cumulatifs dans cet ordre :
   - Système :
        5.1 : c:\windows\system32\windowsPowershell\v1.0\profile.ps1
        7   : c:\program files\Powershell\7\profile.ps1
   - Utilisateur:
        5.1 : ~\documents\WindowsPowershell\profile.ps1
        7   : ~\documents\Powershell\profile.ps1
   - Applicatif : $profile
      - vscode: C:\Users\david\Documents\WindowsPowerShell\Microsoft.VSCode_profile.ps1
      - powershell: C:\Users\david\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
      - ISE: C:\Users\david\Documents\WindowsPowerShell\Microsoft.PowerShellISE_profile.ps1


## Exportation

Powershell une sortie objets.

```
# Les propriétés imposées par le format de base
Get-ADUser -Filter *
# Toutes les propriétés
Get-ADUser -Filter * -Properties *

# Get-Member : voir la structure de l'objet
Get-Item .\10-ModulePerso.ps1 | gm
```

### Chercher des propriétés: Format-List (ou fl) et Select-Object (ou Select)

```
Get-ADUser -Filter * -Properties * | Format-List -Property *Name
Get-ADUser -Filter * -Properties * | fl *Name
Get-ADUser -Filter * -Properties * | Format-table -Property *Name

Get-ADUser -Filter * -Properties * | select -Property SamAccountName, *date*
Get-ADUser -Filter * -Properties * | select -ExpandProperty MemberOf

# Avec un affichage Out-GridView                 
Get-ADUser -Filter * -Properties * | Out-GridView

# Structure d'un objet : Get-Member ou gm
Get-ADUser -Filter * -Properties * | Get-Member
Get-ADUser -Filter * -Properties * | Get-Member -MemberType Properties
```

### Formats: Texte, CSV, HTML, XML, JSON

Export plat : pas d'exportation des sous-objets
```
Get-ADUser -Filter * -Properties * |
    Out-File users.txt -Encoding utf8

Get-ADUser -Filter * -Properties * |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'

Get-ADUser -Filter * -Properties * |
    ConvertTo-Html | # options de mise en forme
    Out-File users.html -Encoding utf8
```

Export arborescent : exportation des sous-objets 
```
Get-ADUser -Filter * -Properties * |
    Export-CliXML users.xml -Encoding utf8

Get-ADUser -Filter * -Properties * |
    ConvertTo-Json | # options de mise en forme
    Out-File users.json -Encoding utf8
   
Get-ADUser -Filter * -Properties * |
    ConvertTo-Json -Compress -Depth 2 | # options de mise en forme
    Out-File users.json -Encoding utf8
```

Autres formats disponibles sur powershellgallery.com : ImportExcel, Powershell-YAML, PSIni, ...


### Sélection de propriétés, création de propriété ou du nombre d'objets : Select-Object ou select
```
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'

Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone, MemberOf |
    Select-Object -First 10 |  # ou -Last NN ou -Unique
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'
```

#### Ajout de propriété : @{Name='alias'; Expression={\<code>}}
```
#Measure-Command {
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone, 
        @{Name='MemberOf'; Expression={  # $_ ou $PSItem : objet courant
            $tabGroup = $_.MemberOf
            $tabResult = @()  # tableau vide
            foreach ($group in $tabGroup) { $tabResult += ($group -split ',|=',3)[1] }
            Return ($tabResult -join ', ')
        }} |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'
#}

#Measure-Command {
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone, @{Name='MemberOf'; Expression={
        (Get-ADPrincipalGroupMembership -Identity $_ | select -ExpandProperty Name) -join ',' 
    }} |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'
#}

# -split : utilise une regexp pour découper, le | est le "ou logique"
#          ,3  -> ici représente le nombre d'élément du tableau résultant
("CN=Group Policy Creator Owners,CN=Users,DC=formation,DC=lan" -split ',|=',3)[1]

```

### Sélection des objets : Where-Object, where ou ?

#### Conditions simples 
```
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone |
    Where-Object EmailAddress -eq $null | # 1 seule condition autorisée sans méthode
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'
```
#### Conditions avancées
```
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone |
    Where-Object {$_.EmailAddress -eq $null -or $_.EmailAddress.Trim() -eq ''} |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'

# Méthode .Trim() sur les chaines : élagage, supprime les carac vides en début et fin de chaine
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone |
    Where-Object {([string]($_.EmailAddress)).Trim() -eq ''} |
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'
```

### Tri des objets : Sort-Object ou sort
```
Get-ADUser -Filter * -Properties * |
    Select-Object GivenName, Surname, SamAccountName, UserPrincipalName, EmailAddress, OfficePhone |
    Where-Object {([string]($_.EmailAddress)).Trim() -eq ''} |
    Sort-Object GivenName, Surname | # Tri ascendant par défaut
    Export-Csv users.csv -Encoding utf8 -NoTypeInformation -Delimiter ';'

# -Descending : tri inverse
```

### Regroupement : Group-Object ou group
```
Get-ADUser -Filter * -Properties * |
    Group-Object Department

Get-ADUser -Filter * -Properties * |
    Group-Object Department -AsHashTable

Get-ADUser -Filter * -Properties * |
    Group-Object Department -AsHashTable -AsString
```

### Agrégation : Measure-Object ou measure
```
Get-ADUser -Filter * -Properties * | Measure-Object 

(Get-ADUser -Filter * -Properties * | Measure-Object).Count

# Calcul sur une propriété numérique
Get-ChildItem | Measure-Object Length -Sum -Average -Maximum -Minimum

# Sur des fichiers texte
Get-Content .\1-types.ps1 | Measure-Object -Line -Character -Word
```

## Mise à jour d'annuaire

Désérialisation de fichier en structure objets Powershell : Import-Csv, Import-CLIXML, ConvertFrom-Json, ConvertFrom-CSV, ...

```
Get-ADUser -Filter * -SearchBase 'ou=David,dc=formation,dc=lan' `
    -Properties OfficePhone, EmailAddress | 
    Select-Object SamAccountName, GivenName, Surname, OfficePhone, EmailAddress |
    Export-Csv màj.csv -NoTypeInformation -Encoding utf8 -Delimiter ';'

Import-CSV .\màj.csv -Delimiter ';'

$tabUsers = Import-CSV .\màj.csv -Delimiter ';'
foreach ($user in $tabUsers) {    
    Set-ADUser `
        -Identity $user.SamAccountName `
        -GivenName $user.GivenName `
        -Surname $user.Surname `
        -EmailAddress $user.EmailAddress `
        -OfficePhone $user.OfficePhone `
        -WhatIf # permet de faire un dry run des commandes
    Write-Host "Set-ADUser -Identity $($user.SamAccountName)
    -GivenName $($user.GivenName) -Surname $($user.Surname)
    -EmailAddress $($user.EmailAddress) -OfficePhone $($user.OfficePhone)"
}
```

Autre technique avec le **splatting**

```
$tabUsers = Import-CSV .\màj.csv -Delimiter ';'
foreach ($user in $tabUsers) {
    # Transformation du PSCustomObject en HashTable(dictionnaire)
    $params = @{}
    $user.psObject.properties | foreach { $params[$_.Name] = $_.Value} 
    # @ : Parameters splatting, alimenter les paramètres d'une commande 
    # avec un dictionnaire dont les clé sont les noms exacts des paramètres
    # de la commande
    Set-ADUser -Identity $user.SamAccountName @params
}
```

## Traitement en masse d'objets

### Désactiver la protection des OU
```
Get-ADOrganizationalUnit -Filter * -SearchBase 'ou=David,dc=formation,dc=lan' |
    Set-ADOrganizationalUnit -ProtectedFromAccidentalDeletion $false #-Whatif
```

### Réactiver la protection des OU
```
Get-ADOrganizationalUnit -Filter * -SearchBase 'ou=David,dc=formation,dc=lan' |
    Set-ADOrganizationalUnit -ProtectedFromAccidentalDeletion $true #-Whatif
```

### Déplacer des comptes périmés dans une OU "ou=Corbeille,dc=formation,dc=lan"
```
Search-ADAccount -AccountDisabled -SearchBase 'ou=David,dc=formation,dc=lan' |
    Move-ADObject -TargetPath 'ou=Corbeille,dc=formation,dc=lan'
Search-ADAccount -AccountExpired -SearchBase 'ou=David,dc=formation,dc=lan' |
    Move-ADObject -TargetPath 'ou=Corbeille,dc=formation,dc=lan'
```

Autre technique:
```
Invoke-Command { # Union de résultat de requête
    Search-ADAccount -AccountDisabled -SearchBase 'ou=David,dc=formation,dc=lan'
    Search-ADAccount -AccountExpired -SearchBase 'ou=David,dc=formation,dc=lan'
} | Move-ADObject -TargetPath 'ou=Corbeille,dc=formation,dc=lan'
```

## Màj automatique des adresses mail pour les comptes sans adresse

En mode on-liner, les commandes sont chainées par des pipes: 
```
Get-ADUser -Filter * -SearchBase 'ou=david,dc=formation,dc=lan' -Properties EmailAddress |
    Where-Object {([string]($_.EmailAddress)).Trim() -eq ''} |
    Set-ADUser -EmailAddress 'contact@formation.fr' #-WhatIf

Get-ADUser -Filter * -SearchBase 'ou=david,dc=formation,dc=lan' -Properties EmailAddress |
    Where-Object {([string]($_.EmailAddress)).Trim() -eq ''} |
    ForEach-Object {
        Set-ADUser -Identity $_.SamAccountName -EmailAddress ($_.SamAccountName+'@formation.fr') #-WhatIf
        Add-ADGroupMember grpDav-Tous -Members $_.SamAccountName
    }
```

Ou en mode plus "scripté": débug amélioré, possibilité de faire plusieurs traitements en même temps, ...:
```
$tabUsers = Get-ADUser -Filter * -SearchBase 'ou=david,dc=formation,dc=lan' -Properties EmailAddress |
    Where-Object {([string]($_.EmailAddress)).Trim() -eq ''}
foreach ($user in $tabUsers) {
    Set-ADUser -Identity $user.SamAccountName -EmailAddress ($user.SamAccountName+'@formation.fr') #-WhatIf
    Write-Host "$($user.SamAccountName) : $($user.SamAccountName)@formation.fr"
}
```



## Importation

Exemple plus complet d'importation d'utilisateurs dans l'AD:

Suppression des accents:
```
function Remove-Diacritics {
<#
.SYNOPSIS
    Function Designed for remove special characters and provides a string usable for login.
.LINK
    https://dawan.fr
#>
    [CmdletBinding()]param(
        [parameter(Mandatory)]
        [string]$String
    )
    return [Text.Encoding]::ASCII.GetString([Text.Encoding]::GetEncoding("Cyrillic").GetBytes($String))
}
```

Nettoyage des chaines de caractères pour en faire des logins:
```
function Clear-String {
<#
.SYNOPSIS
    Function designed for remove special characters and provides a string usable for login.
.LINK
    https://dawan.fr
#>
    param(
        [parameter(Mandatory)]
        [string]$String,
        [string[]]$DeletedChars = @('-',' ',"'"),
        [string[]]$ReplacedChars = @('œ','æ'),
        [string[]]$ReplacedByChars = @('oe','ae'),
        [switch]$LowerCase,
        [ValidateRange(1,100)]
        [byte]$MaxLength = 20
    )
    $String = Remove-Diacritics $String
    foreach ($char in $DeletedChars) {
        $String = $String -replace $char,''  # opérateur de remplacement
    }

    $i = 0
    foreach ($char in $ReplacedChars) {
        $String = $String -replace $char,$ReplacedByChars[$i]
        $i++
    }
    if ($String.length -gt $MaxLength) { $String = $String.SubString(0, $MaxLength) }
    if ($LowerCase) { $String = $String.ToLower() }
    return $String
}
```

Fonction permettant de créer un compte avec un nombre limité de paramètres:
```
function New-ADCustomUser {
    [cmdletBinding()]
    param(
        [parameter(Mandatory)]
        [String]$Nom,

        [parameter(Mandatory)]
        [String]$Prenom,

        [parameter(Mandatory)]
        [String]$Service
    )
    $DisplayName = $Prenom + ' ' + $Nom
    $Name = Remove-Diacritics $DisplayName
    $SamAccountName = Clear-String ($Prenom.SubString(0,1)+$Nom) -LowerCase
    $UPN = $SamAccountName+'@formation.lan'
    $Initials = (Clear-String ($Prenom.SubString(0,1)+$Nom.SubString(0,2))).ToUpper()
    $Path = 'ou='+$Service+','+$OURoot
    $Password = Get-Password2
    New-ADUser `
        -Name $Name `
        -GivenName $Prenom `
        -Surname $Nom `
        -DisplayName $DisplayName `
        -SamAccountName $SamAccountName `
        -UserPrincipalName $UPN `
        -Initials $Initials `
        -Path $Path `
        -Department $Service `
        -AccountPassword (ConvertTo-SecureString $Password -AsPlainText -Force) `
        -Enabled $true
    Write-Output ([PSCustomObject]@{
        GivenName = $Prenom
        SurName = $Nom
        Service = $Service
        SamAccountName = $SamAccountName
        UserPrincipalName = $UPN
        Password = $password
    })
}
```

L'importation du fichier CSV:
```
$OURoot = 'ou=David,dc=formation,dc=lan'
$tabUsers = Import-Csv .\import.csv  -Delimiter ';' -Encoding utf8
$i = 1
foreach ($user in $tabUsers) {
    Write-Progress `
        -Activity 'Création de compte utilisateur' `
        -Status "$($user.Nom) $($user.Prenom) $i/$($tabUsers.Count)" `
        -PercentComplete ([int]($i*100/$tabUsers.Count))
    Start-Sleep -seconds 1
    $i++

    # Si l'OU du service n'existe pas :
    #  Demander à l'utilisateur s'il faut la créer


    # si l'utilisateur n'existe pas alors le créer
    New-ADCustomUser -Nom $user.nom -Prenom $user.prenom -Service $user.Service
    # sinon afficher un warning (Write-Warning)
    # ...

    # Ajouter l'utilisateur dans son groupe de base(Global, Sécu) : grp<prénom>-<Service>
    #   par exemple : grpDav-Compta
    # si le groupe n'existe pas le crée
}
```



## Gestion des erreurs ou exceptions


**Les erreurs sont des exceptions de Framework .Net**

### Flux Powershell


        stdin -> cmdlet -> stdout 1 (sortie standard)  Write-Output (Continue), return (Stop)
                    |    -> stderr 2 Write-Error (Continue), throw (Stop)
                    |    -> 3 Write-Warning (Continue)
                    |    -> 4 Write-Verbose (SilentlyContinue), si -Verbose -> Continue
                    |    -> 5 Write-Debug (SilentlyContinue), si -Debug -> Inquire
                    |    -> 6 Write-Information (Ignore)
                    |
                    --> Exit Code ou Return Code ($? ou $LASTEXITCODE)

Traitement des flux :

- Ignore : pas affiché ni consigné dans le shell et poursuite du script
- SilentlyContinue : pas affiché dans le shell mais stocké par le shell et poursuite du script
- Continue : affichage et poursuite du script
- Inquire : demande quoi faire
- Suspend : mise en pause du script (exit pour reprendre l'exécution du script)
- Stop : fin du script

```
Get-ChildItem truc 
Get-ChildItem truc -ErrorAction SilentlyContinue
Get-ChildItem truc -ea SilentlyContinue
Get-ChildItem truc 2> $null      # redirection de la sortie d'erreur
Get-ChildItem truc 2>&1 >$null   # redirection de la sortie 2 dans la sortie 1
Get-ChildItem truc *> $null      # redirection de toutes les sorties
```


### Erreurs pour les commandes externes


**Utilisation des redirections**
```
nslookup toto.dawan.fr

nslookup toto.dawan.fr > $null            # sortie standard renvoyer dans $null
nslookup toto.dawan.fr > $null 2> log.txt # Sortie d'erreur redirigée dans un fichier
nslookup www.dawan.fr *> $null           # Toutes les sorties sont redirigées
nslookup www.dawan.fr 2>&1 >$null         # Sortie 2 redirigée dans la sortie 1 (sortie standard)
$out = nslookup www.dawan.fr 2>$null         # Sortie standard envoyée dans la variable
```

**Analyser le code de retour, pour savoir si la commande externe a bien été exécutée**
```
ping toto *> $null
if (-not $?) {  # $? : Exit Code booléen, $True si ok, $False si problème
    Throw 'Problème'
}

ping server *> $null
if ($LASTEXITCODE -ne 0) { # Exit Code Entier (attention pas toujours instancié)
    Throw 'Problème'
}

Robocopy.exe /mir C:\users\david\Documents\Powershell C:\test
Write-Output $?
```

### Erreurs des cmdlets

**Cmdlets: Utilisations des common parameters**
```
Get-ChildItem bidule 

Get-ChildItem bidule -ErrorAction SilentlyContinue
Get-ChildItem bidule -ErrorAction Stop              # met fin au script
```
**Directives globales:  (cf doc Variables Automatiques about_Automatic_Variables)**
```
$ErrorActionPreference = 'SilentlyContinue'
# $WarningPreference, $VerbosePreference, $DebugPreference, $InformationPreference
Get-ChildItem bidule
Get-Process truc
Get-Service machin
```
```
$Error  # Tableau contenant les erreurs du shell courant
$Error[0] # Dernière erreur du shell
```
```
$ErrorActionPreference = 'Stop'  # le script s'arrête à la première erreur
$WarningPreference = 'Stop'
Get-ChildItem bidule
Get-Process truc
Get-Service machin
```

### Erreurs issues du framework .Net
Utilisation d'un gestionnaire d'exceptions : try...catch

```
try { # essayer d'exécuter les instructions du bloc try
    Get-ADUser -Identity truc
} catch { # le bloc est exécuté si erreur est rencontré dans le bloc try
    Write-Host 'un pb a été recontré'
}
```
**ou pour étouffer l'erreur**
```
try {
    Get-ADUser -Identity truc
} catch {}
```

### Filtrage en fonction du type d'exception
```
try {
    [System.IO.File]::OpenRead('c:\test.txt')
    [Math]::Round(1/0)
    New-ADOrganizationalUnit test -path 'cn=users,dc=formation,dc=lan'
    Get-ADUser -Identity truc
} catch [Microsoft.ActiveDirectory.Management.ADException] {
    Write-Warning ('Erreur générale : ' + $Error[0].Exception.Message)
} catch [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException] {
    Write-Warning ('Objet non trouvé : ' + $Error[0].Exception.Message)
} catch {
    Write-Warning ('Autre erreur : ' + $Error[0].Exception.Message)
}
```

$Error, tableau contenant les 256 dernières erreurs du shell courant.
Pour trouver le type des exceptions :

    $Error[0].Exception.GetType().Name
    ou $Error[0].InnerException[0].GetType().Name

### Conseil pour la gestion des erreurs
```
$ErrorActionPreference = 'Stop'

# Interdit les variables non-initialisées, et les propriétés inexistantes
Set-StrictMode -Version Latest 

$expl = Get-Process explorer
Write-Output $expl.non

Remove-ADUser -Identity $truc
New-ADOrganizationalUnit test -path 'cn=users,dc=formation,dc=lan'
Get-ADUser -Identity truc
```

### Gestionnaire global d'exception : Trap

Conseil : A placer en début de script après le bloc param.

```
trap {
    Write-Host 'Gestionnaire global'
    Add-Content -Value "$(Get-Date); $($Error[0].Exception.Message)" -Path log.txt
    exit 1  # Modifie la valeur de la variable $LASTEXITCODE 
}
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest 

New-ADOrganizationalUnit test -path 'cn=users,dc=formation,dc=lan'
Get-ADUser -Identity truc
```

Ou avec filtrage en fonction du type d'exception:
```
#Requires -Module ActiveDirectory

trap {
    Write-Host 'Gestionnaire global'
    Add-Content -Value "$(Get-Date); $($Error[0].Exception.Message)" -Path log.txt
    exit 1
}
trap [Microsoft.ActiveDirectory.Management.ADIdentityNotFoundException] {
    Write-Host 'Gestionnaire particulier'
    Add-Content -Value "$(Get-Date); $($Error[0].Exception.Message)" -Path log.txt
    exit 2
}
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest 


Get-ADUser -Identity truc
New-ADOrganizationalUnit test -path 'cn=users,dc=formation,dc=lan'
```

## Debugage

Le débugage ne fonctionne que sur des fichiers enregistrés.

Raccourcis (identiques entre VSCode et Powershell ISE) :
- F5 : exécuter en mode débug, ou continuer jusqu'au prochain point d'arrêt
- Maj+F5 : arrêt du débug
- Ctrl+F5 : exécution sans débug
- F10 : pas à pas principal (ne rentre pas dans les codes de fonctions/librairies)
- F11 : pas à pas approfondi/détaillé (rentre dans les codes de fonctions/librairies)
- maj+F11 : pas à pas sortant (retourne au code parent/appelant)
- F9 : bascule un point d'arrêt sur une ligne de code

```
[cmdletbinding()]param()

function foobar {
    param($param)

    $param*$param
}

for ($i = 0; $i -lt 1000; $i++) {
    foobar $i
    Write-Verbose $i
    if ($i -eq 998) {
        throw 'argh'
    }
}
```
Plus values de VSCode :
- Points d'arrêt conditionnels
- Panneaux variables, espion, pile des appels
- Configuration via fichier launch.json:
``` 
    "args": ["${command:SpecifyScriptArgs}", "-Verbose", "-Debug"]
```


## Credential
Couple login/mot de passe (chiffré, system.security.SecureString)
Exécution de commande sous une autre identité.

### Interactif pour 1 commande
```
Get-ADUser -Filter * -Credential dclement@formation.lan
Get-ADUser -Filter * -Credential (whoami /upn)
Get-ADUser -Filter * -Credential $env:UserDomain\$env:UserName
```

### Stocker le crédentiel

Avec le Data Protection API du Framework .Net, lié à la session utilisateur:
```
$cred = Get-Credential -Message 'Authentification AD' -UserName dclement@formation.lan
Get-ADUser -Filter * -Credential $cred
Get-ADGroup -Filter * -Credential $cred
Get-ADDomainController -Filter * -Credential $cred

# Avec Invoke-Command : Attention activer le WinRM (Enable-PSRemoting)
Invoke-Command -Credential $cred -ComputerName . -ScriptBlock {mkdir c:\admin}
```

Key : chiffrement réversible AES avec clés 128, 192 ou 256 bits (non lié à la session)
```
$Key = (3,4,2,3,56,34,254,222,1,1,2,23,42,54,33,233,1,34,2,7,6,5,35,43)
ConvertTo-SecureString 'a1234567890!' -Force -AsPlainText | 
    ConvertFrom-SecureString -Key $Key | 
    Out-File password2.txt

$password = Get-Content .\password2.txt | ConvertTo-SecureString -Key $Key
$cred = New-Object pscredential @('formation\david', $password)
```

SecureKey : chiffrement réversible AES avec clés 128, 192 ou 256 bits, sécurisé en RAM avec une SecureString
```
$SecureKey = ConvertTo-SecureString 'AZERTYUIOPQSDFGH' -Force -AsPlainText
ConvertTo-SecureString 'a1234567890!' -Force -AsPlainText | 
    ConvertFrom-SecureString -SecureKey $SecureKey | 
    Out-File password3.txt

$password = Get-Content .\password3.txt | ConvertTo-SecureString -SecureKey $SecureKey
$cred = New-Object pscredential @('formation\david', $password)
```

### Valider le crédentiel sur une source d'identité
```
$cred = Get-Credential -Message 'Authentification AD' -UserName dclement@formation.lan
try {
    Get-ADDomain -Credential $cred
} catch {
    Throw 'Login/mot de passe incorrect'
}

Get-ADUser -Filter * -Credential $cred
```

Avec une fonction:
```
function Get-ADValidityCredential {
    param (
        [parameter(Mandatory)]
        [pscredential]$Credential
    )
    try {
        Get-ADDomain -Credential $Credential | Out-Null
    } catch {
        return $false
    }
    return $true
}
$cred = Get-Credential -Message 'Authentification AD' -UserName dclement@formation.lan
if (Get-ADValidityCredential $cred) {
    Get-ADUser -Filter * -Credential $cred
} else {
    Write-Error 'Login/mot de passe incorrect'
}
```

### Méthode non interactive

Stockage du mot de passe sécurisé:
```
 ConvertTo-SecureString 'a1234567890!' -Force -AsPlainText | 
     ConvertFrom-SecureString | 
     Out-File password.txt
```

Lecture du mot de passe et création du credential :
```
$password = Get-Content .\password.txt | ConvertTo-SecureString
$password
$cred = New-Object pscredential @('formation\david', $password)

$cred.UserName
$cred.GetNetworkCredential().Password
```


## Factorisation des param communs de cmdlets

On peut être amené à utiliser les mêmes paramètres de façon systèmatique:
```
$cred = Get-Credential -Message 'Authentification AD' -UserName dclement@formation.lan
Get-ADUser -Filter * -SearchBase 'ou=david,dc=formation,dc=lan' -Credential $cred -Server AD
Get-ADGroup -Filter * -SearchBase 'ou=david,dc=formation,dc=lan' -Credential $cred -Server AD
Get-ADDomainController -Filter * -Credential $cred -Server AD
```

La variable système $PSDefaultParameterValues permet de fixer des valeurs par défaut aux paramètres des cmdlets Powershell. C'est un dictionnaire dont les clés sont de la forme 'cmdlet:parameter' les jokers sont autorisés pour les nom des cmldets.
```
$PSDefaultParameterValues = @{
    # pour toutes les cmldets commencant par 'Get-AD', le paramètre Filter vaut '*'
    'Get-AD*:Filter' = '*'
    'Get-AD*:SearchBase' = 'ou=david,dc=formation,dc=lan'
    
    # pour toutes les cmldets contenantt '-AD', le paramètre Credential vaut $cred
    '*-AD*:Credential' = $Cred
    
    # Pour les cmdlets contenant (*-AD*), pour le param Server, la valeur est 'ad.formation.lan'
    '*-AD*:Server' = 'ad.formation.lan' 
    
    # pour toutes les cmldets (*), pour le param Confirm, la valeur est $false
    '*:Confirm' = $false   
}

$cred = Get-Credential -Message 'Authentification AD' `
    -UserName dclement@formation.lan
Get-ADUser
New-ADUser jdoe1234
# possibilité de surcharger les paramètres:
Get-ADGroup -SearchBase 'dc=formation,dc=lan'
Get-ADDomainController
```

## GUI : Graphical User Interface

- Powershell est basé sur le framework .Net
- Possibilité d'utiliser les classes des widgets Windows (System.Windows.Forms)
- 2 solutions:
    - WinForm : utilisation directe des classes
    - WPF : création de fichiers XAML chargé via une classe .Net Powershell


## WMI : Windows Management Instrumentation
- Bloqué par le pare-feu par défaut : Infrastructure de gestion Windows (WMI-In)
- Réseau : RPC TCP135 et ports dynamiques RPC
- Base d'informations objet sur le système, interaction avec le système distant via les méthodes des classes

### Trouver les classes
```
Get-WmiObject -List *system
```
Interroger les classes en mode graphique : WMIExplorer, ...

### Classe mono-instance
```
Get-WmiObject -Class Win32_OperatingSystem
Get-WmiObject -Class Win32_OperatingSystem | fl *
Get-WmiObject -Class Win32_OperatingSystem | fl *date*

# A distance :
Get-WmiObject -Class Win32_OperatingSystem -ComputerName AD
# avec un compte différent :
Get-WmiObject -Class Win32_OperatingSystem -ComputerName AD -Credential $cred

Get-WmiObject -Class Win32_ComputerSystem
Get-WmiObject -Class Win32_ComputerSystem | fl *
```

### Multi-instances
```
Get-WmiObject -Class Win32_Process
Get-WmiObject -Class Win32_Service
```

Requêtage avec des requêtes WQL : WMI Query Language
```
# Filtrage en aval, moins efficace
Get-WmiObject -Class Win32_Process | Where Name -like 'explo*'
# Filtrage en amont
Get-WmiObject -Query "select * from Win32_Process Where Name like 'explo%'" 


Get-WmiObject -Query "select * from win32_Process where Name='explorer.exe'"
Get-WmiObject -Query "select * from win32_Process where Name='explorer.exe'" | 
    Select ProcessId, SessionID

Get-WmiObject -Query "select Size, FreeSpace from win32_LogicalDisk where DeviceID='C:'" | 
    Select Size, FreeSpace

# Récupérer les valeurs:
$result = Get-WmiObject -Query "select Size, FreeSpace from win32_LogicalDisk where DeviceID='C:'" | 
    Select Size, FreeSpace
$result.Size
$result.FreeSpace    
```

### Méthodes pour interagir
```
Get-WmiObject -Class Win32_Process | Get-Member
Get-WmiObject -Class Win32_Process | Get-Member -MemberType Methods

# Sur 1 processus
$process = Get-WmiObject -Query "select * from win32_Process where Name='win32calc.exe'"
$process.Terminate(0)

# Sur plusieurs processus
$tabProcess = Get-WmiObject -Query "select * from win32_Process where Name='notepad.exe'"
$tabProcess.Count
$tabprocess | foreach { $_.Terminate(0) }
# ou
foreach ($proc in $tabprocess) { $proc.Terminate(0) }
```

### WMI via WinRM (encapsulation dans le protocole WinRM, TCP5985 ou 5986)

#### Chercher les classes
```
Get-CimClass -ClassName *system
```
#### Voir les infos
```
Get-CimInstance -ClassName Win32_OperatingSystem
Get-CimInstance -ClassName Win32_process

# Ou via le PSRP:
Get-CimInstance -CimSession $session -Class Win32_ComputerSystem

# Utilisation des méthodes :


$obj = Get-CimInstance -Query "select * from win32_process where name = 'notepad.exe'"
foreach ($proc in $obj) {
    Invoke-CimMethod -InputObject $proc -MethodName SetPriority -Arguments @{Priority=128}
}
  
```


### Exemple pour le reporting

```
Get-ADComputer -Filter * -Properties * |
    Select-Object Name, OperatingSystem, IPv4Address, LastLogonDate, `
        @{Name='DiskCPercentUsed'; Expression={
            if (Test-NetConnection -ComputerName $_.Name -Port 135 -InformationLevel Quiet) {
                $result = Get-WmiObject -ComputerName $_.Name -Query "select size,freespace from win32_LogicalDisk where DeviceID='C:'"
                return ([Math]::Round(($result.size-$result.freespace)/$result.size*100, 2))
            } else {return 'N/A'}
        }} |
    Where-Object DiskCPercentUsed -gt 10 | 
    Sort-Object DiskCPercentUsed -Descending |
    Export-CSV ordis.csv -Delimiter ';' -NoTypeInformation -Encoding utf8

``` 


### Compteurs de performance
Réseau: idem WMI
```
Get-Counter -ListSet *disk*

Get-Counter -ListSet LogicalDisk
(Get-Counter -ListSet LogicalDisk).Paths              # moyenne de toutes les instances
(Get-Counter -ListSet LogicalDisk).PathsWithInstances # données par instance

Get-Counter -Counter '\LogicalDisk(C:)\% Free Space'

$res = Get-Counter -Counter '\LogicalDisk(C:)\% Free Space'
[Math]::Round(100 - $res.CounterSamples[0].CookedValue, 2)  # valeur du compteur
```

A distance:
```
Get-Counter -Counter '\\ad\LogicalDisk(C:)\% Free Space'
Get-Counter -ComputerName AD -Counter '\LogicalDisk(C:)\% Free Space'
```


## Annexe les symboles utilisés en Powershell

|Symbole|Signification|Exemple|
|-|-|-|
| ; | Chainage de commandes séquentiel | Get-Process ; Get-Service
| \| | Chainage de commandes, la sortie de la 1ère commande est envoyée dans l'entrée de la 2ème commande | Get-Process \| Measure
|$var| Une variable |
| += | Ajout dans la même variable | \$i += 1 \n \$tab1+=\$tab2  
|"\$(\$var.name)"| une variable remplacée dans une chaine |
|@()| Un tableau vide |
| @(1,2,3)| Un tableau avec des éléments|
|@{}| Un dictionnaire |
|{} | Un scriptblock (ie un ensemble de commandes) |
|[int] | un type |
|[int[]]| un tableau de type |
|\$tab[0]| accès à un élémemt d'un tableau |
| [math]:: | appel de méthode ou propriété dans le framework .Net |[Math]::Round(3.14) [Math]::Pi |




