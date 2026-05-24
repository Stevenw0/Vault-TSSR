# 🔐 Windows LAPS + Active Directory — Guide complet (sans images)

> [!info] Objectif
> Mettre en place **Windows LAPS** dans un domaine **Active Directory** pour sécuriser les comptes administrateur locaux grâce à :
> - un **mot de passe robuste et unique par machine**
> - une **rotation automatique**
> - un stockage **chiffré** dans l’AD
> - une **délégation contrôlée** (lecture / déchiffrement / reset)

---

## I. Présentation

**Dans ce tutoriel, nous allons apprendre à configurer Windows LAPS avec l'Active Directory pour sécuriser le compte administrateur local des machines grâce à la rotation automatique du mot de passe.**

Windows LAPS, pour *Windows Local Administrator Password Solution*, est un composant Microsoft intégré à Windows (après installation des mises à jour nécessaires) qui se connecte à un domaine **Active Directory** ou **Azure AD** pour renforcer la sécurité des comptes administrateur locaux des postes et serveurs.

Windows LAPS :
- génère automatiquement un **mot de passe fort** pour le compte administrateur géré
- effectue une **rotation automatique** selon la politique définie
- stocke le secret dans **Active Directory** (ou Azure AD), avec **chiffrement** côté AD

> [!important]
> L’objectif principal est d’éliminer les mots de passe locaux identiques sur tout le parc, qui sont une faille majeure (mouvement latéral).

Ressource officielle :
- Microsoft Learn — Windows LAPS : https://learn.microsoft.com/fr-fr/windows-server/identity/laps/laps-overview

---

## II. Nouveautés de Windows LAPS (vs LAPS legacy)

Même objectif, mais avec des évolutions importantes :

- ✅ **Intégré à Windows** (plus besoin d’un agent séparé comme LAPS legacy)
- ✅ Mots de passe stockés dans l’AD **chiffrés**
- ✅ Stockage possible dans **Active Directory** ou **Azure AD**
- ✅ Historique des mots de passe configurable
- ✅ Rotation personnalisable (notamment rotation après utilisation / post-auth)
- ✅ Gestion possible du mot de passe **DSRM**
- ✅ Nouvel onglet **LAPS** dans les consoles AD (propriétés objets ordinateur)
- ✅ Nouveau module PowerShell **LAPS** (plus complet)
- ✅ Nouveau fichier **ADMX** dédié avec davantage de paramètres
- ✅ Journal d’événements Windows dédié : **Microsoft-Windows-LAPS**

> [!note]
> Windows LAPS est **indépendant** de LAPS legacy. Les deux peuvent cohabiter pendant une transition, mais Windows LAPS prend le dessus lorsqu’il est activé.

---

## III. Versions Windows compatibles

Compatibilité OS (exemples courants) :
- Windows 11 (Pro/Edu/Enterprise) : 21H2, 22H2, 24H2
- Windows 10 (Pro/Edu/Enterprise)
- Windows Server 2019 / 2022 / 2025 (y compris Core)

> [!important] Mise à jour requise
> Pour la majorité des OS, il faut **la cumulative update d’avril 2023** (ou version native selon édition), car elle ajoute le composant Windows LAPS à Windows.

Les KB exactes varient selon version (Windows 10/11, Server 2019/2022).  
Mises à jour disponibles via Windows Update / WSUS / Update Catalog.

---

## IV. Prérequis

Avant de configurer Windows LAPS :

- OS compatibles
- Machines clientes à jour (incluant la MAJ Windows LAPS)
- Contrôleurs de domaine à jour
- Sauvegarde Active Directory vérifiée

> [!warning]
> La mise à jour du schéma AD est une opération sensible : prévoir sauvegarde et droits adaptés.

---

## V. Configuration Windows LAPS (avec Active Directory)

> [!info] Plan des étapes
> 1) Mise à jour du schéma AD  
> 2) Vérification des attributs  
> 3) Permissions “self” pour écrire dans l’objet ordinateur  
> 4) Import ADMX + création GPO  
> 5) Test client + forcing si besoin

---

### A. Mettre à jour le schéma Active Directory

Sur un serveur (souvent un DC), ouvrir PowerShell **en admin**.

Vérifier les commandes disponibles :
```powershell
Get-Command -Module LAPS
```

Mettre à jour le schéma :
```powershell
Import-Module LAPS
Update-LapsADSchema -Verbose
```

> [!important]
> Utiliser un compte membre de **Administrateurs du schéma**.

---

### B. Vérifier les attributs Windows LAPS dans AD

Dans “Utilisateurs et ordinateurs Active Directory” (affichage avancé), sur un objet ordinateur, vérifier la présence d’attributs comme :

- `msLAPS-PasswordExpirationTime`
- `msLAPS-Password`
- `msLAPS-EncryptedPassword`
- `msLAPS-EncryptedPasswordHistory`
- `msLAPS-EncryptedDSRMPassword`
- `msLAPS-EncryptedDSRMPasswordHistory`

> [!note] Différence avec LAPS legacy
> LAPS legacy utilisait notamment :
> - `ms-MCS-AdmPwd` (mot de passe en clair)
> - `ms-MCS-AdmPwdExpirationTime`

---

### C. Donner aux machines le droit d’écrire leur mot de passe dans l’AD

Pour qu’une machine puisse enregistrer son mot de passe (rotation), elle doit pouvoir modifier certains attributs de son objet ordinateur dans l’AD.

Sur l’OU cible (ex: OU=PC), exécuter :
```powershell
Set-LapsADComputerSelfPermission -Identity "OU=PC,DC=it-connect,DC=local"
```

> [!tip]
> Toujours cibler l’OU via son **DistinguishedName** pour éviter les erreurs.

---

### D. Configurer la GPO Windows LAPS

#### 1) Importer ADMX/ADML (si Central Store)

Si vous utilisez un magasin central ADMX (Central Store), copiez :
- `C:\Windows\PolicyDefinitions\LAPS.admx`
- `C:\Windows\PolicyDefinitions\fr-FR\LAPS.adml`

Vers :
- `\\domaine\SYSVOL\domaine\Policies\PolicyDefinitions\`
- `\\domaine\SYSVOL\domaine\Policies\PolicyDefinitions\fr-FR\`

> [!important]
> Les paramètres Windows LAPS se trouvent ici :
> `Configuration ordinateur > Stratégies > Modèles d'administration > Système > LAPS`
> (Ne pas confondre avec le conteneur LAPS legacy.)

---

#### 2) Créer une GPO et la lier à l’OU des postes

Exemple :
- GPO : **Sécurité - Windows LAPS - Config**
- Lien : **OU=PC**

> [!warning]
> Ne pas lier cette GPO à **Domain Controllers**.

---

#### 3) Paramètres recommandés dans la GPO

**a) Configurer le répertoire de sauvegarde de mot de passe**
- Activer
- Choisir : **Active Directory**

**b) Paramètres du mot de passe**
Recommandé :
- Complexité : majuscules + minuscules + chiffres + spéciaux
- Longueur : 16
- Âge : 30 jours

**c) Historique des mots de passe chiffrés** (optionnel)
- Activer
- Taille : 1 (garder le précédent mot de passe)

**d) Activer le chiffrement du mot de passe**
- Activer (même si c’est souvent le comportement par défaut)

**e) Nom du compte administrateur à gérer**
- Par défaut : compte Administrateur intégré
- Si compte custom : activer et préciser le nom

---

### E. Appliquer et tester côté client

Forcer l’application GPO :
```cmd
gpupdate /force
```

Forcer le traitement LAPS (si nécessaire) :
```powershell
Invoke-LapsPolicyProcessing
```

---

## VI. Récupérer le mot de passe Windows LAPS

Avec Windows LAPS, on récupère via PowerShell ou via l’onglet LAPS de l’objet ordinateur (console AD).

PowerShell (mot de passe en clair) :
```powershell
Get-LapsADPassword "PC-01" -AsPlainText
```

> [!tip]
> La sortie inclut généralement : `Account`, `Password`, `PasswordUpdateTime`, `ExpirationTimestamp`.

---

## VII. Forcer une rotation (réinitialisation)

Depuis la machine cible (localement) :
```powershell
Reset-LapsPassword
```

Lire aussi l’historique (si activé dans la GPO) :
```powershell
Get-LapsADPassword "PC-01" -AsPlainText -IncludeHistory
```

---

## VIII. Qui peut lire et déchiffrer les mots de passe ?

> [!important] Deux niveaux de permissions
> 1) Autorisation de **lecture** des attributs LAPS dans l’AD  
> 2) Autorisation de **déchiffrement** (AuthorizedDecryptor)

Donner le droit de lecture sur une OU :
```powershell
Set-LapsADReadPasswordPermission -Identity "OU=PC,DC=it-connect,DC=local" -AllowedPrincipals "IT-Connect\GDL-LAPS-Pwd-Read"
```

> [!warning]
> Ne pas confondre les commandes :
> - `Set-AdmPwdReadPasswordPermission` = LAPS legacy
> - `Set-LapsADReadPasswordPermission` = Windows LAPS

### Autoriser le déchiffrement
Se fait via la GPO :
- **Configurer les déchiffreurs de mot de passe autorisés**
- Renseigner un groupe (souvent `Domaine\Groupe` ou SID)

> [!note]
> Si besoin de plusieurs groupes : créer un groupe “container” autorisé et y mettre les sous-groupes.

### Autoriser le reset (optionnel)
Si un groupe doit pouvoir forcer la rotation :
- utiliser `Set-LapsADResetPasswordPermission` sur le même principe

---

## IX. Suivre le déploiement Windows LAPS

Audit possible via script PowerShell (rapport HTML/CSV) :
- https://github.com/LoicVeirman/Laps/blob/main/Audit/get-lapsDeploymentStatus.ps1

> [!tip]
> Idéal en tâche planifiée pour suivre : machines avec legacy / Windows LAPS / les deux / aucun.

---

## X. Journaux d’événements Windows LAPS (côté client)

Emplacement :
```text
Journaux des applications et des services > Microsoft > Windows > LAPS > Operational
```

On y trouve des infos sur :
- stratégie appliquée
- rotation (succès/échec)
- DC contacté
- erreurs et diagnostics

---

## ✅ Checklist rapide (déploiement AD)

- [ ] OS compatibles + mise à jour Windows LAPS installée
- [ ] DC à jour + sauvegarde AD
- [ ] `Update-LapsADSchema` effectué
- [ ] Attributs `msLAPS-*` visibles
- [ ] `Set-LapsADComputerSelfPermission` sur OU cible
- [ ] ADMX/ADML Windows LAPS dans Central Store (si utilisé)
- [ ] GPO configurée (répertoire AD + policy password + chiffrement + compte)
- [ ] Test client : `gpupdate /force` + `Invoke-LapsPolicyProcessing`
- [ ] Lecture mdp : `Get-LapsADPassword -AsPlainText`
- [ ] Délégation lecture/déchiffrement ajustée
- [ ] Logs LAPS consultables + audit déploiement en place

> [!summary]
> Windows LAPS sécurise les admins locaux en fournissant **un mot de passe unique par machine**, **roté automatiquement**, **stocké chiffré dans l’AD**.  
> La mise en œuvre suit : **schéma AD → permissions → GPO (ADMX) → tests → délégation (read/decrypt/reset) → monitoring**.