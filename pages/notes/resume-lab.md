# Resume du laboratoire SafeGuard

## 1. Objectif du projet

Ce laboratoire a pour objectif de mettre en place une infrastructure complete pour l'entreprise fictive SafeGuard, dans le cadre d'une migration vers deux nouveaux sites : un Campus et un Datacenter.

Le Campus heberge les postes clients, les controleurs de domaine, les services de fichiers, les strategies de groupe et l'impression. Le Datacenter heberge les services applicatifs, notamment un serveur LAMP et un site WordPress. Les deux sites sont interconnectes par un VPN site-a-site.

Le projet couvre donc plusieurs domaines d'administration systeme et reseau : routage, NAT, DHCP, VPN, Active Directory, DNS, SMB, GPO, impression, Linux, RAID logiciel, Apache, MariaDB, PHP-FPM et WordPress.

L'objectif principal n'est pas seulement d'obtenir une infrastructure fonctionnelle, mais aussi de produire une documentation exploitable permettant de reconstruire le laboratoire, comprendre les choix faits, identifier les erreurs rencontrees et verifier les resultats.

## 2. Architecture generale

L'infrastructure est divisee en deux reseaux principaux.

Le reseau Campus utilise le plan d'adressage suivant :

| Element | Adresse |
| --- | --- |
| Reseau Campus | 192.168.100.0/24 |
| Routeur R1 LAN | 192.168.100.254 |
| DC1 | 192.168.100.250 |
| DC2 | 192.168.100.251 |
| PC1 | DHCP, exemple 192.168.100.10 |

Le reseau Datacenter utilise le plan suivant :

| Element | Adresse |
| --- | --- |
| Reseau Datacenter | 192.168.200.0/24 |
| Routeur R2 LAN | 192.168.200.254 |
| LAMP1 | 192.168.200.250 |

Le WAN est simule dans VirtualBox par un reseau NAT nomme `WAN-SafeGuard` :

| Element | Adresse |
| --- | --- |
| Reseau WAN | 10.72.56.0/24 |
| Passerelle VirtualBox | 10.72.56.1 |
| R1 WAN | 10.72.56.10 |
| R2 WAN | 10.72.56.20 |

Les routeurs sont installes avec pfSense. Ils assurent le NAT, le pare-feu, l'acces Internet et l'interconnexion des sites via IPsec.

Les machines virtuelles principales sont :

| Machine | Role |
| --- | --- |
| R1 | Routeur pfSense du Campus |
| R2 | Routeur pfSense du Datacenter |
| PC1 | Poste client Windows 11 de controle |
| DC1 | Premier controleur de domaine Active Directory |
| DC2 | Controleur de domaine supplementaire, serveur de fichiers et impression |
| LAMP1 | Serveur Debian pour Apache, MariaDB, PHP-FPM et WordPress |

## 3. Reseau, routage et VPN

Le reseau WAN `WAN-SafeGuard` a ete cree dans VirtualBox en `10.72.56.0/24`, sans DHCP, afin de respecter le plan d'adressage du sujet. Les interfaces WAN de R1 et R2 sont configurees en statique.

R1 est configure comme passerelle du Campus. Son interface LAN utilise `192.168.100.254/24`. Le DHCP Campus est active sur R1 avec une plage de `192.168.100.10` a `192.168.100.200`. Les clients recoivent comme passerelle `192.168.100.254`.

R2 est configure comme passerelle du Datacenter. Son interface LAN utilise `192.168.200.254/24`. Aucun DHCP n'a ete active sur le Datacenter, car les serveurs doivent utiliser des adresses IP fixes.

Les tests realises depuis PC1 ont valide le DHCP, la passerelle et l'acces Internet. Un probleme DNS initial a ete corrige sur pfSense en configurant des DNS publics comme `1.1.1.1` et `8.8.8.8`, puis en desactivant l'override DNS cote WAN.

L'interconnexion des sites est assuree par un VPN IPsec site-a-site entre R1 et R2. Les parametres principaux sont :

| Parametre | Valeur |
| --- | --- |
| Type | IPsec IKEv2 |
| Authentification | Mutual PSK |
| Chiffrement | AES 256 |
| Hash | SHA256 |
| DH/PFS | Groupe 14 |
| Reseau local R1 | 192.168.100.0/24 |
| Reseau local R2 | 192.168.200.0/24 |

Apres creation des phases 1 et 2 sur les deux routeurs, le tunnel etait etabli mais le trafic ne passait pas encore. Le probleme venait des regles firewall IPsec manquantes. Des regles ont ete ajoutees sur R1 et R2 pour autoriser le trafic entre `192.168.100.0/24` et `192.168.200.0/24`.

La validation finale a ete effectuee depuis PC1 avec des pings vers R2 et LAMP1 :

```powershell
ping 192.168.200.254
ping 192.168.200.250
```

## 4. Active Directory et services Windows

Le domaine Active Directory mis en place est :

```text
safeguard.lan
```

DC1 est le premier controleur de domaine. Il heberge egalement le service DNS Active Directory. Apres promotion, une correction reseau a ete necessaire : DC1 avait une mauvaise route par defaut `0.0.0.0` et le routage IP Windows etait active. Le routage IP a ete desactive et la passerelle correcte `192.168.100.254` a ete conservee.

DC2 a ete installe en Windows Server Core. Il a ete joint au domaine, puis promu controleur de domaine supplementaire. La validation a confirme la presence de deux controleurs de domaine :

```text
DC1.safeguard.lan
DC2.safeguard.lan
```

L'arborescence Active Directory a ete organisee comme suit :

```text
SAFEGUARD
├── Computers
│   ├── Clients
│   └── Servers
├── Users
└── Groupes
```

La commande `redircmp` a ete utilisee pour rediriger les nouveaux ordinateurs joints au domaine vers :

```text
OU=Computers,OU=SAFEGUARD,DC=safeguard,DC=lan
```

Les utilisateurs de l'entreprise ont ete crees dans l'OU `Users`. Les groupes globaux metiers ont ete crees dans l'OU `Groupes` :

| Groupe | Service |
| --- | --- |
| GG_Direction | Direction |
| GG_Compta | Comptabilite |
| GG_IT | Informatique |

Un compte administrateur nominatif a egalement ete cree afin d'eviter l'usage quotidien du compte `Administrateur` integre.

## 5. Partages SMB, AGDLP et impression

DC2 heberge les partages de fichiers demandes par le sujet. Les dossiers sont crees sous :

```text
C:\DATA
```

Les partages publies sont :

| Dossier local | Partage UNC |
| --- | --- |
| C:\DATA\Direction | \\dc2.safeguard.lan\Direction |
| C:\DATA\Compta | \\dc2.safeguard.lan\Compta |
| C:\DATA\Public | \\dc2.safeguard.lan\Public |
| C:\DATA\Logiciels | \\dc2.safeguard.lan\Logiciels |
| C:\DATA\Users | \\dc2.safeguard.lan\Users |

La methode AGDLP est appliquee : les utilisateurs sont membres de groupes globaux, les groupes globaux sont imbriques dans des groupes locaux de domaine, et les groupes locaux recoivent les permissions sur les ressources.

Les groupes locaux de domaine crees sont notamment :

| Groupe local | Usage |
| --- | --- |
| GL_Direction_RW | Modifier sur Direction |
| GL_Compta_RW | Modifier sur Compta |
| GL_Compta_RO | Lecture sur Compta |
| GL_Logiciels_RO | Lecture sur Logiciels |

Une verification a montre que les permissions de partage et les permissions NTFS doivent etre distinguees. Les droits de partage ont ete corriges afin de ne plus laisser `Tout le monde : Full`. Les droits finaux sont conformes au modele attendu.

L'imprimante fictive `IMP_SafeGuard` a ete creee sur DC2 avec un port TCP/IP standard vers `192.168.100.5`. Le pilote utilise est `Generic / Text Only`. L'imprimante est partagee et publiee dans Active Directory.

## 6. Strategies de groupe

Plusieurs GPO ont ete creees pour automatiser la configuration des postes et utilisateurs.

| GPO | Objectif |
| --- | --- |
| GPO_Account_Lockout | Verrouillage apres 10 erreurs, 15 minutes |
| GPO_Map_Public_Drive | Monter P: vers Public |
| GPO_Deploy_Printer | Deployer IMP_SafeGuard |
| GPO_Enable_RDP_Admins | Activer RDP sur les clients |
| GPO_Folder_Redirection_Documents | Rediriger Documents |
| GPO_Wallpaper | Appliquer un fond d'ecran commun |
| GPO_Publish_Firefox | Publier Firefox via MSI |

La GPO de verrouillage est liee au domaine. Les GPO utilisateur sont liees a l'OU `Users`. La GPO RDP est liee a l'OU `Computers\Clients`.

Le partage `Users` a ete prepare pour la redirection des dossiers Documents. Les utilisateurs authentifies peuvent creer leur propre dossier, mais ne doivent pas disposer de droits etendus sur les dossiers des autres.

La validation des GPO a ete effectuee depuis PC1 avec l'utilisateur `nbernard`. La commande `gpresult /r` a confirme l'application des GPO utilisateur, et `gpresult /r /scope computer` a confirme l'application des GPO ordinateur.

Un probleme a ete rencontre avec `gpupdate /force`, qui echouait lors de la lecture d'un fichier `gpt.ini` dans SYSVOL. Le diagnostic a montre que le service Windows Time du client n'etait pas synchronise. Apres correction et redemarrage, les GPO se sont appliquees correctement.

## 7. Serveur LAMP1, RAID et WordPress

LAMP1 est un serveur Debian installe sans interface graphique. Il utilise une adresse IP statique :

```text
192.168.200.250/24
Passerelle : 192.168.200.254
```

Deux disques additionnels de 50 Go ont ete utilises pour creer un RAID1 logiciel avec `mdadm`. La matrice `/dev/md0` est formatee en ext4 et montee automatiquement sur :

```text
/mnt/local1
```

Le dossier web principal est :

```text
/mnt/local1/www
```

La stack LAMP installee comprend :

| Composant | Role |
| --- | --- |
| Apache2 | Serveur web |
| MariaDB | Base de donnees |
| PHP-FPM 8.4 | Version principale PHP |
| PHP-FPM 8.3 | Version PHP supplementaire |
| Depot Sury | Plusieurs versions de PHP |

WordPress est installe dans :

```text
/mnt/local1/www/www.safeguard.lan
```

La base MariaDB utilise les parametres suivants :

| Parametre | Valeur |
| --- | --- |
| Base | wwwsafeguardlan |
| Encodage | utf8mb4_unicode_ci |
| Utilisateur | wwwadmin |

Un VirtualHost Apache `www.safeguard.lan` a ete cree. Le test local avec `curl` a montre une redirection vers l'assistant d'installation WordPress, puis l'installation a ete finalisee. Le site `SafeGuard` est accessible et administrable.

Un enregistrement DNS a ete ajoute dans le DNS Active Directory :

```text
www.safeguard.lan -> 192.168.200.250
```

L'acces au site depuis PC1 via `http://www.safeguard.lan` est valide.

## 8. Administration SSH et securite

SSH a ete active sur les routeurs pfSense R1 et R2 avec une authentification par cle publique.

Une cle `ed25519` a ete generee depuis le poste d'administration. La cle publique a ete ajoutee dans le compte `admin` pfSense. La connexion a ete validee avec :

```powershell
ssh admin@192.168.56.254
ssh admin@192.168.100.254
```

Un probleme d'empreinte SSH a ete rencontre sur R2 avec le message `REMOTE HOST IDENTIFICATION HAS CHANGED`. Il a ete corrige avec :

```powershell
ssh-keygen -R 192.168.56.254
```

Les interfaces Host-only utilisees pour l'administration temporaire de R2 et LAMP1 sont considerees comme des aides de laboratoire. Elles ne font pas partie de l'architecture cible de production.

## 9. Conclusion

Le laboratoire SafeGuard est fonctionnel. Les deux sites disposent d'un routage, d'un acces Internet et d'une interconnexion VPN. Le domaine Active Directory `safeguard.lan` est operationnel avec deux controleurs de domaine. Les utilisateurs, groupes, partages, GPO et imprimante sont en place et valides depuis PC1.

Le serveur LAMP1 heberge un site WordPress accessible via le DNS interne de l'entreprise. Les services principaux demandes par le sujet sont donc deployes et testes.

Les principaux points de vigilance restants concernent la securisation et l'industrialisation : sauvegardes, supervision, certificats HTTPS, durcissement des acces d'administration, nettoyage des interfaces temporaires et documentation d'un plan de reprise.
