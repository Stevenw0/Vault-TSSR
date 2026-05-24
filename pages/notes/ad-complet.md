Active Directory
==

Versions
--

Version du produit 2016: Windows Server 2016, 2019 et 2022

https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/active-directory-functional-levels

Nouveautés de Windows Server 2025:
- page de base de données 32K, utilisation d'ID 64bits
- support de AES SHA-256 et SHA-384 pour l'authentification Kerberos
- Sécurité de LDAP amélioré
- Amélioration de la réplication
- Technologies de réparation d'objet AD
- Mot de passe de compte ordinateur durci par défaut

Installation
--

Pré-requis :
- 4 Go de RAM
- 4 lcpu à 2.7GHz
- Adresse IP fixe (DNS)
- 2 volumes de stockage (OS 50Go et BDD/Logs AD 20Go)
- Pour les VMs, désactiver les snapshots
	
Mode core :
- moins de RAM consommée (500Mo de moins)
- moins de stockage (10Go de moins)
- moins de màj
- moins de services démarrés
- Réduction de la surface d'attaque

Installation de l'annuaire : AD DS
--

AD DS: Active Directory-Directory Services
AD FS: SSO Microsoft (Federation Services)
AD CS: autorité de certif MS (Certificate Services)
AD RMS: Right Management Services (gestion des droits sur les publications numériques)
AD LDS: Lightweight Directory Services (LDAP) 

![](https://hedgedoc.dawan.fr/uploads/upload_97dbe67553f56e45c5ff2a555d06d771.png)

**Forêt:**
- ensemble de domaines
- nom de la forêt = nom du domaine racine (1er domaine de la forêt)
- niveau fonctionnel: version de la BDD, pivot pour la communication inter-domaines
	
**Domaines:**
- Définition: un annuaire(LDAP, TCP389, 636, GC : TCP3268, 3269), une authentification(kerberos TCP/UDP 88, kpasswd : UDP 464),  ...
- ensemble de sites AD gérés par un ensemble de DC (au moins 2)
- Types: racine, enfants( ou sous-domaines), adjacents (ou domaines frères)
- Niveau Fonctionnel: idem NF forêt, augmentation des fonctionnalités disponibles (corbeille, protection des objets, DC clonables, AD WS, ... ), utilisé pour les migrations
- Catalogue Global: publication via LDAP de l'ensemble des objets de la forêt (objets ne contenant pas l'intégralité des attributs)  -> sert de cache (notamment pour la résolution SID -> Nom), au moins un par domaine

**Site AD:**
- ensemble de sous-réseaux IP contenant ou non un DC
- gestion de la topologie (réplication inter-DC, accès à l'annuaire)
- permet aux machines membres du domaine de se localiser dans la topologie réseau

**Contrôleur de domaine:**
- serveur hébergeant le rôle AD DS => ldap(TCP 389 ou 636, et Catalogue Global TCP 3268/3269), kerberos(TCP/UDP 88 et 464), smb(TCP 445), ad ws(TCP 9389), DNS (UDP/TCP 53), RPC (TCP 135, et ports dynamiques), DFSR (réplication du sysvol, TCP 5722, 135 et ports dyn.), NTP (UDP123)

	
Jonction à un domaine AD
--

Pré-requis: 
- configuration DNS
- nom d'ordinateur unique (déclaré ou non dans l'AD, moins de 15 caractères)
- configuration de l'horloge (pas plus de 300 secondes de décalage)
- méthodes: Win+Pause, netdom join, Add-Computer, WMI Win32_OperatingSystem, MDT(unattend.xml), ...
	
Consoles de gestion
--
- Utilisateurs et Ordinateurs AD: gestion des objets courants (util., ordi., OU, groupes, ...)
- ADAC Centre d'administration AD: idem, plus "nouveautés" : corbeille, DAC, PSO, Silo d'authen., ...
- Sites et Services AD: gestion des subnets IP et réplication
- Domaines et Approbations AD: gestion des relations entre domaines de la forêt
- Gestion des stratégies de groupes: paramètres sur objets(ordi et util)
- Schéma AD: gestion de la structure de la BDD (console à enregistrer avec: regsvr32 schmmgmt.dll)
- Modification ADSI: manipulation sans contrôle des objets

Au niveau réseau:
	- ADAC, modules PowerShell AD et GPO : ADWS TCP 9389
	- autres consoles: RPC TCP 135 + ports dynamiques TCP


Annuaire, les conteneurs standard
--
- **Builtin**: base SAM du 1er DC reversée (délégation d'administration de serveur)
- **Computers**: conteneur par défaut pour les ordinateurs joints au domaine
	-> redirection possible avec : redircmp.exe "\<dn\>"
- **Deleted Objects**: Corbeille de l'AD. 180 jours de rétention par défaut
- **Domain Controllers**: OU des DC (GPO par défaut Default Domain Controller Policy)
- **Foreign Security Principals**: Comptes pour approbations inter-forêts
- **Keys**: Clé des KDS (centre de distribution de clé, utilisé entre autre par les MSA)
- **LostAndFound**: "corbeille" pour les objets présentants des pbs de réplication entre DC inter-sites
- **Managed Service Account**: Compte avec rotation de "mdp" automatique (uniquement pour les comptes de service et tâches planifiées)
- **Program Data**: configuration d'applications tierces
- **System**: Configuration partielle de l'AD, Exchange, ...
- **Users**: Conteneur par défaut pour les groupes/utilisateurs -> à ne pas utiliser! (redirusr.exe "\<dn\>")
- **NTDS Quotas**: Quotas de création d'objet par utilisateur
- **TPM Devices**: Périphériques approuvés (Exchange, Skype)

Objets
--

- **OU**: conteneur assimilable à un dossier, permet l'organisation des objets notamment utilisateurs et ordinateurs pour permettre l'application des GPO
- **Groupe**:
    - Types:
        - **sécurité**: utilisé pour les permissions
        - **distribution**: utilisé pour la distribution de mail avec Exchange
    - Etendues:
        - **Domaine Local**: est utilisé uniquement dans le domaine dans lequel il est créé. Les membres d’un groupe local peuvent être des utilisateurs, des groupes à étendues locales, globales ou universelles. Utile pour contrôler l'accès aux ressources  au niveau du domaine local
        - **Globale**: est utilisable dans le domaine local et tous les domaines approuvés par le domaine de base, utilisé pour contrôler l’accès aux ressources sur le domaine local et tous les domaines approuvés
        - **Universelle**: portée maximale puisqu'accessible dans l’ensemble de la forêt, ce qui implique qu’il soit disponible sur tous les domaines de la forêt. Contient des groupes et objets provenant de n’importe quel domaine de la forêt.
- **Ordinateur et utilisateur**: Compte d'authentification et information d'annuaire


![](https://hedgedoc.dawan.fr/uploads/upload_33884a0768fb1223b66a20bc247c1677.png)



Mise en route
===
- Désactiver le service Spooler sur les DC
- Vérifier les redirecteurs des serivces DNS (on doit configurer uniquement des DNS externes : FAI, hébergeurs, opérateurs cloud,...)
- Croiser les serveurs DNS dans les configurations des interfaces réseaux des serveurs et des clients. Pour les ADDS, le serveur principal ne doit pas être lui-même mais un autre DC et éventuellement lui-même en dernière position.
- Mise à l'heure des DC. Le PDC fait office de serveur NTP (le Kerberos ne supporte pas plus de 10 minutes de décalage)
     -> w32tm, registre ou GPO
- Activation de la corbeille
     -> Console ADAC ou Enable-ADOptionalFeature
- Réinitialiser le mot de passe du compte krbtgt (éviter les attaques de type Golden Ticket, à faire une fois par an)
     -> à faire 2 fois d'affilées
- Désactiver le "User AD Join" (les utilisateurs non privilégiés peuvent intégrer jusqu'à 10 machines dans le domaine)
     -> GPO "Default Domain Controller Policy"
- Redirection des objets ordinateurs(redircmp.exe) et utilisateur(redirusr.exe) dans une OU dédiée aux nouveaux objets (pour GPO, classification, script...)
- Définir les groupes d'utilisateurs membres du groupe "Protected Users"
- Activer l'option "Le compte est sensible et ne peut pas être délégué" sur les comptes privilégiés et des responsables de l'entreprise

Organisation de l'annuaire
===

- Séparer l'IAM du PAM
  - IAM: Identity and Access Management, gestion des utilisateurs sans privilège et de leurs droits
  - PAM: Privileged Access Management, gestion des accès privilégiés
- Créer une strusture d'OU en fonction de la taille de la structure, par exemple:
      - pays -> région -> sites -> service -> type d'objet(ordi, util, groupes)
      - type d'objet -> service
  Penser aux éventuelles délégations de contrôle sur l'annuaire.
  Penser à l'application des GPO.
  
- Ne rien créer dans les conteneurs de bases
- Le conteneur Computers doit rester vide
- Ne pas toucher au contenu de l'OU Domain Controllers 


Stratégies de nommage des objets
===
- OU, éviter les caractères spéciaux
- Groupes de sécurité:
  - Préfixes : type de groupe, service, pays, régions, centre, ...
  - Suffixes : Serveurs, cluster, applications, types d'accès, ...

  Exemple: 
    DL_Acces_Partage_Compta_FS1_RW
    G_Compatbilite
  
- Utilisateur:
  - Nom d'objet dans l'annuaire (forme le DN Distinguished Name) des utilisateurs
  - Login dépend de la taille de la structure
    - trigramme : 1ère du prénom suivi des 2ères lettres du nom
    - première lettre du prénom suivi du nom
    - prenom point nom
    - matricule, numéro de badge, etc
    Contrainte de 20 caractères sur le SAM Accout Name

- Ordinateur: Limité à 15 caractères
  - préfixe/suffixe avec type de matériel
  - date d'entrée dans le stock
  - Numéro de série
  - numéro d'immobilisation
  etc.

- GPO : préfixe et suffixe (service, types, etc.)

Organisation des groupes
--

**But : Savoir qui a le droit de faire quoi**

- AGDLP: **A**ccount -> **G**lobal group -> **D**omain **L**ocal group -> **P**ermission
- AGUDLP : ajout d'un groupe de portée Universelle -> valable pour les forêts multi-domaines

3 typologies de groupe:
- groupe hiérarchique : groupes créés à partir de la structure de l'entreprise(services, sites) -> groupe d'étendue Globale
- groupe transversal : groupes créés à partir d'objet ne reposant pas sur l'arborescence de l'annuaire : CE, CHSCT, CSE, Projet ... -> groupe d'étendue Globale
 
- groupe d'accès aux ressources (dossier partagé, applications, imprimantes, ...) -> groupe d'étendue Domaine Local


**Protection des OU:**
```
Get-ADOrganizationalUnit -Filter * -SearchBase 'ou=davidc,dc=formation,dc=lan' | Set-ADOrganizationalUnit -ProtectedFromAccidentalDeletion $true
```


Workflow des objets de l'AD
===

Réfléchir au cycle de vie des objets de l'annuaire:
- Utilisateurs:
  - entrée dans l'entreprise : validation de la création du compte(contrat de travail, charte, ...)
  - sortie de l'entreprise : désactivation, déplacement, et suppression. Gestion des données professionnelles et personnelles
- Ordinateurs:
  - entrée dans l'inventaire, affectation à un utilisateur et aux groupes de sécurité afférent, etc.
  - sortie nettoyage de l'objet AD et du DNS
- Groupes, ...

GPO : Group Policy Object
===

- ensemble de paramètres (de type registre ou préférences (panneau de config))
- répartis entre ordinateur (appliqués au démarrage) et utilisateur (appliqués à l'ouverture de session, et réappliqués toutes les 90 minutes +- rand(10mins))
- héritage par défaut des paramètres de GPO du haut vers le bas de l'arborescence
- Ordre d'application des GPO :
	- GPO Locale (gpedit.msc)
	- GPO liées au domaine
	- GPO du site AD
	- GPO non "appliquées" des OU du haut vers le bas
	- GPO "appliquées" des OU du bas vers le haut
		
GPO Appliquées = Enforced (renforcées)		
- traverse les ruptures d'héritage
- permet aux admins de plus haut niveau d'imposer des paramètres
		
2 GPO par défaut : 
- Default Domain Policy : stratégie de mot de passe du domaine
- Default Domain Controller Policy : renforcement des ouvertures de session sur le DC


Emplacement des caches des GPO :
- Utilisateur : C:\ProgramData\Microsoft\GroupPolicy\Users\<User SID>\DataStore\0\SysVol\<Domain Name>\Policies
- Système : %windir%\system32\GroupPolicy\DataStore


## Utilisation de gpupdate et gpresult

Mise à jour des GPO:
```
gpupdate
gpupdate /target:user

# ou sans tenir compte des caches de GPO:
gpupdate /force
```

Pour les utilisateurs:
```
# rapport synthétique
gpresult /r

# rapport plus verbeux
gpresult /r /z
gpresult /r /v

# rapport complet HTML
gpresult /h r.html
gpresult /h r.html /f
```

Pour les administrateurs:
```
gpresult /r /user dclement@formation.lan
gpresult /h r.html /f /user dclement@formation.lan
gpresult /h r.html /scope computer
```

WMI : Windows Management Instrumentation
---
- Classes permettant la collecte de données et l'interaction à distance
- Utilise le port RPC TCP 135 et les ports dynamiques RPC
- Requête en WQL : WMI Query Language
- Filtre WMI : ensemble de requêtes WQL
	- vrai si l'ensemble des requêtes renvoie au moins 1 enreg.
	- faux sinon
    
Clients:
- wmic
- Get-WmiObject -ComputerName . -Query '...'


- Encapsulation de WMI dans WinRM : Get-CimInstance -ComputerName SRV-TOTO -Class WIn32_OperatingSytem
    
- WMI Explorer, ...

Extensibilité des GPO:
---
- Registre 
- Modèles d'administration (ADM, ADMX) Ajout ou mise à jour des paramètres des GPO 
    - ADMX : présents pour l'ensemble des gpo 
		- par défaut stockage local : C:\Windows\PolicyDefinitions
		- créer le magasin central : 
		\\\\formation.lan\sysvol\formation.lan\policies\PolicyDefinitions
	- ADM : ajout sur la gpo concernée (clic droit sur "Modèles d'admin", ajout/supression de modèles)  (Windows 2008 et inf.)
		
- Scripts : 
	- Déclencheurs : ouverture/ferm session, arrêt/démarrage ordi
	- Types : 
		- Exécutable
		- Powershell : powershell.exe -NonInteractive -NoProfile -ExecutionPolicy RemoteSigned -File script.ps1
	- A noter : faire attention à utiliser le mode silencieux(pas de confirmation), contexte ordi/utilisateur utilisé pour l'exé des scripts
		Pas d'obligation de modifier la "ExecutionPolicy" de PowerShell 
	- Scripts d'ouverture de session : les scripts sont lancés après l'ouverture de session



Boucle de rappel ou loopback processing :
---		
- Permettre d'appliquer des params utilisateur sur un ordi spécifique
- utilisé pour les bornes/ordi dédiés ou serveur RDS/citrix	
		
- Config ordi/Stratégies/Modèle d'admin/Système/Stratégies de groupe 
	-> Configurer le mode de traitement de la stratégie de groupe utilisateur par boucle de rappel



FSMO : Flexible Single Master Operation
===
- 5 opérations sensibles d'une forêt/domaine:

Domaine : (sur 1 DC)
- PDC : Synchronisation des horloges(NTP, à configurer), réplication urgente (changement de groupe et de mdp), membre principal du groupe de réplication DFS du SYSVOL
- Infrastructure : gestion de la topologie de l'AD, référence d'objet de type shadow(accès inter-forêt)
- Rid : Relative Identifier, distribution de bloc de numérotation des objets
	Sid = S-1-5-21 + id de domaine + Rid

Forêt : (sur 1 DC)
- Attribution des noms de domaine : gère l'unicité des noms de domaine dans la forêt
- Schéma : modification de la structure de la BDD et sa réplication


Localiser les FSMO :

    netdom query fsmo
	
	Get-ADDomain | select *master,pdc*
	Get-ADForest | select *master
	
Modifier les fsmo :

    ntdsutil roles
	
	Move-ADDirectoryServerOperationMasterRole

Consoles : 
- Utilisateurs et Ordinateurs AD : FSMO PDC, Infrastructure et Rid,
- Domaines et Approbations AD : FSMO Domaines,
- Schéma AD: FSMO Schéma
  - regsvr32 schmmgmt.dll en tant qu'admin,
  - lancer une mmc vierge
  - ajouter le composant logiciel enfichable Schéma AD
	


Migration
---
- Vérification de l'état de santé du domaine avec : dcdiag 
- Promotion de nouveaux DC en mode réplicat
- Vérifier les réplications : repadmin(objets de l'annuaire), dfrsdiag(sysvol)
- Transférer les FSMO sur les nouveaux DC
- Changer les configurations DNS (statique, dhcp, redirecteurs)
- Transférer le catalogue global si nécessaire
- Effectuer la rétrogradation des anciens DC (Uninstall-ADDSDomainController)
- Valider la suppression des références aux anciens DC dans la console Sites et Services et DNS
- Relever les Niveaux Fonctionnels(domaine et forêt) : Set-ADDomainMode et Set-ADForestMode


Réplications
===

Utilitaire repadmin : réplication des objets de l'annuaire

Informations à propos de la réplication:
    
    repadmin /showrepl               # état de la réplication
    repadmin /replsummary            # état en fonction des partenaires de réplication (cf Sites et Serives AD) 
    repadmin /queue                  # file d'attente des réplications sortantes
    repadmin /queue SRVCORE-DAVID


Répliquer des objets:
    
    repadmin /replicate srvcore-david srvcore-co "dc=formation,dc=lan" /readonly
    repadmin /replicate srvcore-manu srvcore-co "dc=formation,dc=lan" 
    
    repadmin /replsingleobj srv-bourdelle srvcore-co 'CN=toto,OU=Compta,OU=David,DC=formation,DC=lan'

    repadmin.exe /syncall srvcore-co

Console MMC de gestion du DFS : permet de générer des rapports d'intégrité sur l'état du SYSVOL

```
# Longueur de la file d'attente
dfsrdiag.exe replicationstate /mem:ad2

# Configuration courante sur un DC
dfsrdiag.exe dumpadcfg /Mem:AD2

# Demande de synchro DFS
dfsrdiag.exe syncnow /rgname:"Domain System Volume" /Partner:AD2 /Mem:AD3 /Time:15

# Reconfiguration autoritaire à partir de l'AD 
dfsrdiag.exe PollAD /Mem:AD2


# Resynchronisation du Sysvol (/!\ Danger):
Robocopy.exe /MIR E:\SYSVOL\ \\ad2\e$\sysvol

```

DNS et AD
=========
- Permet la localisation des services des DC, des sites AD, des domaines de la forêt par les postes clients/serveurs. 

- Zone _msdcs : Microsoft Domain Controller Services 
énumération des services

- Pré-requis :
	- activer le vieillissement/nettoyage automatique des zones DNS stockées dans l'AD
	- créer les zones de recherches inversées 
	

Relations d'approbation    
===

Relations inter-forêt
---
![](https://hedgedoc.dawan.fr/uploads/upload_e485b8102d4b337dc6b4cd93b33e23b7.png)

Relations inter-forêt
---
![](https://hedgedoc.dawan.fr/uploads/upload_a8981a503e694b09c0cc07cb78e9f0a3.png)

Renforcement de sécurité ESAE
---
Enhanced Security Admin Environment
![](https://hedgedoc.dawan.fr/uploads/upload_bf22f91f8979fbb680075fd90d295ee3.png)


Outils de maintenance
===

DCDIAG : diagnostics basés sur les logs
---
    dcdiag /?                    # documentation
    dcdiag                       # tests de base
    dcdiag /test:DFRSevent       # un test particulier
    dcdiag /test:SysvolCheck /test:KCCEvent /a  # 2 tests sur l'ensemble des serveurs
    dcdiag /test:SysvolCheck /test:KCCEvent /s:AD3  # sur un serveur AD3

ESENTUTL : maintenance des fichiers de la base de données
---

    esentutl /mh ntds.dit        # en-tête de la BDD
    esentutl /d ntds.dit         # défragmentation de la BDD
    esentutl /r edb /d ntds.dit  # récupération "Clean Shutdown"
    esentutl /r edb /d ntds.dit /i /a # autoriser la perte de données
    esentutl /p ntds.dit         # réparation (dernier recours)
    
NTDSUTIL : outils d'administration de la base de données
---
Commandes imbriquées:
- roles : gestion des FSMO
- files : remplace le esentutl 
- metadata cleanup : supprimer des objets désaffectés
- semantic database analysis : analyse de la cohérence des données
- Authoritative restore : restauration complète ou partielle de l'annuaire 
- IFM : création d'un support de réplication pour la création de nouveaux DC (évite la réplication par le réseau)
Install From Media, création de support pour la réplication (ntdsutil) 
- Set DSRM Password : changer le mot de passe du mode de restauration de l'AD (mode mono-utilisateur)
 

Nltest
---

```
# Localiser le site courant:
nltest /dsgetsite

# DC utilisé à l'instant:
nltest /dsgetdc:formation.local

# Liste les DC du domaine:
nltest /dnsgetdc:formation.local
```

W32TM
---
Mise à l'heure des contrôleurs de domaine (dont celui portant le FSMO PDC).

    # Fixer la configuration
    w32tm /config /syncfromflags:manual /manualpeerlist:'0.fr.pool.ntp.org' /reliable:yes
    
    # Mettre à jour la config  du service
    w32tm /config /update
    
    # Resynchroniser l'horloge
    w32tm /resync
    
    # Voir les configurations actives
    w32tm /query /source
    w32tm /query /peers
    w32tm /query /status
    w32tm /query /configuration
    
    # retrouver l'heure
    Get-Date -UFormat '%Y%m%d %H:%M:%S'
    Get-Date -Format 'yyyy/MM/dd HH:MM:ss'
    Get-Date | fl *
    
Quotas
---
```
# Créer le quota
dsadd.exe quota -part dc=dawan,dc=local -qlimit 10 -acct "cn=David Clément (Admin OU Entreprise),ou=OU,ou=admins-PAM,dc=dawan,dc=local" 

# modifier un quota 
dsmod quota "CN=dawan_admou_dcl,CN=NTDS Quotas,DC=dawan,DC=local" -qlimit 20 

# Voir les quotas utilisés
dsget user "cn=David Clément (Admin OU Entreprise),ou=OU,ou=Admins-PAM,dc=dawan,dc=local" -part "dc=dawan,dc=local" -qlimit -qused
```
    
Ports AD
===
https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/dd772723(v=ws.10)

https://support.microsoft.com/fr-fr/help/832017/service-overview-and-network-port-requirements-for-windows

Clients -> DC
---
- TCP 389 (LDAP) ou 636 (LDAPs)
- TCP 3268 (LDAP Global Catalog) ou 3269 (LDAPs)
- UDP + TCP 53 (DNS)
- TCP 445 (CIFS/SMB + DFS + Microsoft-DS + pipes) -> GPO (accès au SYSVOL)
- TCP 139 (NMB) : facultatif
- UDP 137,138 (WINS, NetBIOS...) : facultatif
- TCP + UDP 88 : Kerberos v5 + Kerberos large PAC
- TCP + UDP 464 : kpasswd (changement de mot de passe)
- UDP 123 : ntp


DC -> DC (en plus des ports clients)
---
- TCP 135 (MS-RPC End-point mapper) et plage de ports dynamiques (-> restriction de ports RPC : https://support.microsoft.com/en-us/help/224196/restricting-active-directory-rpc-traffic-to-a-specific-port)
- TCP 5722 : Réplication DFS (réplication du sysvol, RPC)

- TCP Plage de ports dynamiques (49152-65535 port aléatoire) -> Réplication DFS et réplication d'attribut


Consoles d'admin -> DC :
---
- TCP 135 + plage de ports dyn : MMC
- TCP 9389 : ADWS  -> ADAC, PowerShell pour AD

Possibilité d'utiliser le Windows Admin Center (HTTPs TCP 443) 
   

Positionnement des DC
===

- Au minimum 2 DC inscriptibles par domaine
- 1 DC physique
- 1 GC catalogue global par domaine au minimum (gestion avec cache inter-domaines dans une forêt)
- FSMO sur le coeur de réseau :
	- PDC, Rid et Infrastructure sur le même DC
	- Schéma et Domaines sur le même DC
- En fonction de la bande passante et du nombre d'objets d'un site, on va déployer ou non un DC, et créer un site AD
- Sur les sites AD annexes : utiliser les RODC (Read-Only DC)  
	-> possibilité d'utiliser Install From Media(IFM) pour amorcer la réplication initiale (ntdsutil)


## Outils complémentaires:
Liste donnée à titre d'exemple:

Outil web de gestion: https://www.manageengine.com/fr/ad-manager/
Outil d'analyse de log:
- https://www.netwrix.com/auditor.html
- https://www.varonis.com/fr/integrations/active-directory
- https://www.manageengine.com/products/active-directory-audit/
- https://www.vyapinsoftware.com/products/active-directory-reporting-tool
- https://www.quest.com/products/change-auditor-for-active-directory/

Outil de test de vulnérabilité: 
- https://www.pingcastle.com/
- https://www.purple-knight.com/
- https://www.tenable.com/products/tenable-ad


Divers outils:
https://albusbit.com/products.php

## Liens utiles

Best practices for securing Active Directory:
https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory

Les eventid de l'observateur d'évènements:
https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/appendix-l--events-to-monitor

ANSSI, Guide sécurisation AD:
https://cyber.gouv.fr/publications/recommandations-pour-ladministration-securisee-des-si-reposant-sur-ad

ANSSI, Journalisation des DC:
https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_journalisation_systemes_microsoft_windows_environnement_active_directory.pdf

LDAPs:
https://learn.microsoft.com/en-us/troubleshoot/windows-server/identity/enable-ldap-over-ssl-3rd-certification-authority

ESAE:
https://learn.microsoft.com/en-us/security/compass/esae-retirement

Local Administrator Password Solution (LAPS):
https://www.microsoft.com/en-us/download/details.aspx?id=46899

Microsoft Security Compliance Toolkit 1.0:
https://www.microsoft.com/en-us/download/details.aspx?id=55319

ANSSI, renforcement de la sécurité sur AD:
https://github.com/ANSSI-FR/ORADAD
https://www.cert.ssi.gouv.fr/uploads/guide-ad.html
https://github.com/ANSSI-FR/AD-control-paths


AD et ACL:
https://devblogs.microsoft.com/powershell-community/understanding-get-acl-and-ad-drive-output/

