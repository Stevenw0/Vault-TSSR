
## Windows Server 2022

## Nouveautés

[https://learn.microsoft.com/fr-fr/windows-server/get-started/whats-new-in-windows-server-2019](https://learn.microsoft.com/fr-fr/windows-server/get-started/whats-new-in-windows-server-2019)

[https://learn.microsoft.com/fr-fr/windows-server/get-started/whats-new-in-windows-server-2022](https://learn.microsoft.com/fr-fr/windows-server/get-started/whats-new-in-windows-server-2022)

## Installation

Pré-réquis:

- 50 Go de stockage sur le volume système recommandé
- 2 vCPU ou 1 CPU avec 2 coeurs mini
- 4 Go de RAM mini

Licences: Standard et Datacenter (pas de différence de fonctionnalités, uniquement sur le matériel pris en charge)

Mode: avec interface graphique, et sans interface graphique(moins consommateur de ressource, mais pas compatible avec toutes les applications, 500 Mo de RAM en moins, 9 Go de stockage en moins, moins de màj et de faille de sécurité)

## Configuration initiale

- Installation des drivers de périphériques (drivers classiques pour machines physiques, VMwareTools pour les VM, VirtIO pour KVM,XEN,Proxmox, etc.)
- Installation des mises à jour et configuration des mises à jour(soit via GPO, ou via MDM)
- Configuration réseau (ip statique)
- Renommer le serveur (15 caractères max)
- Intégration au domaine AD ou AzureAD
- Configuration de la mise de l’heure (w32tm /query /source)
- Antivirus/HIDS
- Configuration du pare-feu (connaître les ports utilisés par les applications)

### Mise à l’heure

A faire sur les Contrôleurs de domaine ou serveurs ADDS:

```
# Configuration d'un serveur NTP
w32tm /config /syncfromflags:manual /reliable:yes /manualpeerlist:'0.fr.pool.ntp.org'

# Mise à jour de la configuration
w32tm /config /update

# Synchronisation d'horloge
w32tm /resync

# Vérification de la configuration
w32tm /query /source
```

### Organisation de l’annuaire

- Créer des comptes nomminatifs
- Méthodes de structuration des groupes:  
	AGDLP: Account -> Global -> Domain Local -> Permissions  
	Global: groupe d’organisation des comptes (services, sites, agences, bâtiment, …)  
	Domain Local: lien vers une autorisation  
	Permission: ACE(Access Control Entry) ajoutée dans une ACL(Access Control List)

## Installation de rôles et fonctionnalités

- Rôles: ensemble de services, constituant une unité logicielle au sens de MS.
- Fonctionnalités: logiciels ou services fournissant une fonctionnalité (SMTP, SNMP, Framework.Net, etc.)

## Services de fichiers

Les éléments constitutifs:

- Systèmes de partition: MBR ou GPT(à privilégier)
- systèmes de fichiers NTFS(à privilégier) et REFS
- autorisations ACL (Access Control List)
- partages de fichiers (SMB, NFS)  
	![](https://hedgedoc.dawan.fr/uploads/upload_d2373118377d661763b1f2c487389c63.png)
- Gestionnaire de ressources de serveur de fichiers (quotas, filtrages, rapports, …)
- système de fichiers distribués DFS: compléter les fonctionnalités du SMB -> agrégation(point d’accès communs aux partages de l’entreprise), réplication, tolérance aux pannes, localisation des clients  
	![](https://hedgedoc.dawan.fr/uploads/upload_c37f9c009d2d9a9196e43af66a405603.png)
- Clichés instantanés: versioning et corbeille sur partage réseau
- iSCSI: Export de volumes de serveurs à serveurs (Virtualisation, cluster de sotckage)
- WorkFolders: Partage de fichiers pour les utilsiateurs via HTTPs
- Déduplication:  
	![](https://hedgedoc.dawan.fr/uploads/upload_74d9398cb7e6c61fb41dcfbb2aca6fec.png)

## Surveillance du serveur

- Gestionnaire de serveur
- Windows Admin Center (gestionnaire de serveur basé sur HTTPs)
- Gestionnaire de tâches
- Moniteur de ressources
- Analyseur de performance
- Observateur d’évènements
- Protocoles de supervision: WMI, SNMP

## Sécurité

- Délégation des comptes administrateur:
	- comptes administateur nomminatifs -> logs, tracabilité
	- 2 comptes par admins minimum (1 compte non privilégié, et 1 compte admin)
	- utiliser le JEA pour les cmdlets Powershell
	- utiliser les Silos d’authentification, segmentation de l’authentification des utilisateurs sur des ordinateurs spécifiques du domaine
	- Adopter une approche JIT: Just In Time, donner des doits le temps d’une opération de maintenance.
- Administration des postes clients avec LAPS (compte admin local avec mot de passe changeant automatiquement)
- Utiliser les PSO (Password Settings Object, Stratégie de mot de passe granulaire) pour renforcer les mots de passe sur les comptes sensibles
- Comptes Applicatifs: Managed Service Accounts -> éviter les comptes sans expiration de mot de passe, les mots de passe sont modifiés automatiquement toutes les 30 mins
- Windows Defender:
	- désactivable si besoin, cas de faux positifs
	- ne remplace pas un anti-virus complet avec une gestion centralisée
- Mise à jour: incompatibilité avec les logiciels métiers
	- mise en place de tests (snapshots, cloner les infras, tester les impacts des màj)
	- acceptabilité du risque (désinstallation possible des màj)
- ACL: Access Control List
	- sur les FS, AD, DNS, DHCP, Imprimante, …
	- Audit sur les accès (à activer par GPO)
	- DAC: Distributed Access Control (tagguer des ressources du domaine avec des propriétés et positionner des règles d’accès via des requêtes sur ces propriétés)
	- Filtrage des accès via des périphériques spécifiques
- Chiffrement des données:
	- Au repos “at rest”:
		- EFS: Encrypted File System
		- BitLocker
	- Transit: Protocoles utilisant des certificats (TLS et SSL)
		- SMBv3
		- RDPv2
		- LDAPs
		- …
- Renforcement de l’OS:
	- Security Baseline (MSCT)
	- CIS Hardening
- Outils d’audit:
	- PingCastle
	- Purple Knight
	- …

## RDS

Remote Desktop Services:

- utilisation du protocole RDP (TCP3389)
- permet à des utilisateurs d’utiliser des sessions sur des serveurs ou des VM dédiées (VDI: virtual desktop infrastructure)
- services:
	- Broker de connexions: répartiteur de charge
	- Hôte de session: accueil des utilisateurs
	- Hôte de virtualisation: pour la VDI, serveurs Hyper-V
	- Gestionnaire de licences
	- Accès Web: portail web pour l’accès aux serveurs hôtes de session et aux applications(RemoteApp ou Work Resources)
	- Passerelle: routage et SSO depuis les réseaux externes

## Powershell: Guide de survie

- Alias des commandes cmd et Linux:

| Powershell | CMD | Linux |
| --- | --- | --- |
| Get-ChildItem | dir | ls |
| Set-Location | cd | cd |
| Copy-Item | copy | cp |
| Remove-Item | del | rm |

… Get-Alias

- Shell non sensible à la casse
- Complétion: Tab ou Shift+Tab, ou ctrl+espace
	- commandes
	- options (préfixe ‘-’)
	- fichiers/dossiers
	- variables (préfixe $)  
		etc.
- Trouver les cmdlets(commandes natives powershell):  
	Verbe-Nom ou Action-Objet  
	Verbe-PréfixeNom
```
Get-Command *-Service
Get-Command *-Process
Get-Command *user
Get-Command *user -Module Acti*  # en utilisant un module
Get-Command *aduser  # en utilisant un préfixe

Get-Command -Module ActiveDirectory
Get-Command -Module PSWindowsUpdate

Get-Command *quota*
Get-Command *dfs*
Get-Command *volume*
Get-Command *disk*
...
```
- Installer de nouvelles commandes [https://www.powershellgallery.com/](https://www.powershellgallery.com/)
```
Install-Module ImportExcel -Scope CurrentUser

Import-Module ImportExcel # facultatif
get-process | export-Excel -Path ".\proc.xlsx"

Get-Module -ListAvailable  # tous les modules
Get-Module                 # ceux chargés en RAM

Remove-Module ImportExcel      # supprime un module chargé de la RAM
Uninstall-Module ImportExcel -Force -Confirm:$false
```
- Trouver de l’aide (Update-Help à faire en tant qu’admin)
```
Get-Help  # ou help ou man

Get-Help Stop-Process  #-Full ou -Detailed ou -Examples
Get-Help Stop-Process -ShowWindow
Get-Help Stop-Process -Online
```
- Documentation PowerShell: sections about\_\*
```
Get-Help about_*  # liste des sections
Get-Help about_If -ShowWindow
man about_Comparison_Operators -ShowWindow
```
- Equivalents des commandes réseaux
```
# ipconfig
Get-NetAdapter
Get-NetIpAddress
Get-DnsClientServerAddress
Get-NetRoute

# ping
Test-Connection www.dawan.fr   

# traceroute
Test-NetConnection www.dawan.fr -Traceroute

# nslookup
Resolve-DnsName dawan.fr

# route  (Get-Command *-NetRoute)
Get-NetRoute

# netstat
Get-NetTcpConnection
Get-NetUdpEndPoint

# telnet
Test-NetConnection www.dawan.fr -Port 443

# ...

# Profil de connexion
Get-NetConnectionProfile

# Les règles de pare-feu entrantes
Get-NetFirewallRule -Enabled True -Direction Inbound | select DisplayName,Action | ft
```