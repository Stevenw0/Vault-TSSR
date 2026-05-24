# Documentation projet SafeGuard - version allegee

Cette version conserve les sections principales retenues pour le rendu, sans les sections de diagnostic trop detaillees ou les tests temporaires.

## 1. Creation du reseau WAN VirtualBox

### Objectif

Mettre en place le reseau WAN simule utilise par les routeurs pfSense `R1` et `R2`.

Ce reseau represente l'acces Internet fourni aux deux sites de l'entreprise.

### Choix de configuration

Un reseau NAT VirtualBox dedie a ete cree afin de respecter le plan d'adressage fourni dans l'enonce :

| Element | Valeur |
| --- | --- |
| Nom du reseau | WAN-SafeGuard |
| Reseau | 10.72.56.0/24 |
| Passerelle | 10.72.56.1 |
| DHCP VirtualBox | Desactive |
| IPv6 | Desactive |

Le DHCP VirtualBox est desactive car les interfaces WAN des routeurs seront configurees avec des adresses IP statiques :

| Routeur | Adresse WAN prevue |
| --- | --- |
| R1 Campus | 10.72.56.10/24 |
| R2 Datacenter | 10.72.56.20/24 |

### Commande executee

```powershell
& 'C:\Program Files\Oracle\VirtualBox\VBoxManage.exe' natnetwork add --netname WAN-SafeGuard --network 10.72.56.0/24 --enable --dhcp off
```

### Verification

Commande de verification :

```powershell
& 'C:\Program Files\Oracle\VirtualBox\VBoxManage.exe' list natnetworks
```

Resultat obtenu :

```text
Name:         WAN-SafeGuard
Network:      10.72.56.0/24
Gateway:      10.72.56.1
DHCP Server:  No
IPv6:         No
IPv6 Default: No
```

### Erreurs rencontrees

Lors de la premiere verification, la commande `VBoxManage list natnetworks` a depasse le delai d'attente de 30 secondes.

### Solution appliquee

La verification a ete relancee avec un delai plus long. La seconde execution a reussi et a confirme que le reseau `WAN-SafeGuard` etait bien cree.

### Etat final

Le reseau WAN VirtualBox est pret.

Les reseaux internes `Campus` et `Datacenter` seront crees automatiquement par VirtualBox au moment ou ils seront affectes aux cartes reseau des machines virtuelles.

### Captures associees



## 2. Creation de la machine virtuelle R1

### Objectif

Creer la machine virtuelle du routeur du site Campus.

`R1` assurera les fonctions suivantes :

- routage entre le reseau Campus et le WAN ;
- NAT sortant vers Internet ;
- pare-feu ;
- serveur DHCP pour le reseau Campus ;
- administration via interface web et SSH.

### Choix de configuration

Le routeur est installe avec pfSense.

| Parametre | Valeur |
| --- | --- |
| Nom de la VM | R1 |
| Type | BSD |
| Version | FreeBSD 64-bit |
| RAM | 1024 MB |
| CPU | 2 |
| Disque | 32 GB |
| Type de disque | VDI |
| Allocation | Dynamique |
| Firmware | BIOS |

### Configuration reseau VirtualBox

| Carte | Mode VirtualBox | Nom du reseau | Role |
| --- | --- | --- | --- |
| Carte 1 | Reseau NAT | WAN-SafeGuard | WAN |
| Carte 2 | Reseau interne | Campus | LAN |

### Points d'attention

L'ordre des cartes reseau est important :

- la carte 1 correspondra au WAN dans pfSense ;
- la carte 2 correspondra au LAN dans pfSense.

Cette organisation permettra de configurer ensuite :

- WAN `R1` : `10.72.56.10/24` ;
- passerelle WAN : `10.72.56.1` ;
- LAN `R1` : `192.168.100.254/24`.

### Erreurs rencontrees

Aucune erreur signalee lors de la creation de la VM.

### Etat final

La machine virtuelle `R1` est creee avec ses deux interfaces reseau et l'ISO pfSense attachee.

### Captures associees




## 3. Installation de pfSense sur R1

### Objectif

Installer le systeme pfSense sur le disque virtuel de `R1`.

### Procedure suivie

La VM `R1` a ete demarree depuis l'ISO pfSense.

L'installation se fait depuis l'assistant console pfSense.

```text
Accept
Install
Keymap: French ou Default selon le clavier disponible
Partitioning: Auto (UFS)
Disk: disque virtuel de 32 GB
```

L'assistant d'installation a ensuite ete execute afin d'installer pfSense sur le disque virtuel de 32 GB.

### Identifiants utiles

Apres installation, le compte d'administration principal est :

```text
login: admin
password: pfsense
```

Le mot de passe devra etre change apres la premiere connexion a l'interface web.

### Points d'attention

Apres l'installation, l'ISO pfSense doit etre retiree du lecteur optique virtuel afin que la machine demarre sur le disque dur et non sur le media d'installation.

### Erreurs rencontrees

Le choix initial prevoyait OPNsense pour les routeurs. Le projet a finalement ete bascule sur pfSense.

Cette modification ne change pas l'architecture reseau, mais elle change les ecrans d'installation et d'administration.

### Solution appliquee

La documentation a ete mise a jour pour remplacer OPNsense par pfSense dans la configuration de `R1`.

### Etat final

pfSense est installe sur `R1`.
### Affectation des interfaces

Les interfaces detectees par pfSense sont `le0` et `le1`.

| Interface pfSense | Role | Reseau VirtualBox |
| --- | --- | --- |
| le0 | WAN | WAN-SafeGuard |
| le1 | LAN | Campus |

### Erreurs rencontrees pendant l'affectation

Deux erreurs non bloquantes ont ete rencontrees :

- saisie de `q` au lieu d'un nom d'interface ;
- saisie de `em0`, alors que les interfaces detectees par pfSense etaient `le0` et `le1`.

### Configuration IP temporaire apres installation

```text
WAN: 10.0.2.15/24
LAN: 192.168.1.1/24
```

Ces adresses sont temporaires et doivent etre remplacees par le plan d'adressage du projet.




### Erreur console pfSense apres affectation des interfaces

Une erreur PHP est apparue sur la console apres l'affectation des interfaces :

```text
Fatal error: Uncaught ValueError: Path cannot be empty in /etc/inc/notices.inc:135
```

Le menu console pfSense restait visible apres l'erreur, mais l'erreur reapparaissait lors de l'utilisation de l'option 2 pour configurer les adresses IP. L'erreur est donc consideree comme bloquante pour la configuration console.

Solution retenue : repartir sur une installation propre de pfSense apres correction du type de cartes reseau VirtualBox en Intel PRO/1000 MT Desktop, afin d'obtenir des interfaces plus standards et une configuration console stable.


### Correction appliquee apres reinstall propre

La carte 1 VirtualBox etait initialement en mode `NAT`, ce qui faisait apparaitre le WAN dans le reseau par defaut VirtualBox `10.0.2.0/24`.

La configuration a ete corrigee ainsi :

| Carte | Mode VirtualBox | Nom du reseau | Type de carte |
| --- | --- | --- | --- |
| Carte 1 | NAT Network | WAN-SafeGuard | Intel PRO/1000 MT Desktop |
| Carte 2 | Reseau interne | Campus | Intel PRO/1000 MT Desktop |

Apres reinstallation propre, pfSense detecte correctement les interfaces Intel :

| Interface pfSense | Role | Etat |
| --- | --- | --- |
| em0 | WAN | DHCP temporaire |
| em1 | LAN | 192.168.1.1/24 temporaire |

L'option `2) Set interface(s) IP address` est maintenant accessible sans reproduire l'erreur PHP.

### Captures associees





## 4. Configuration IP de R1

### Objectif

Configurer les adresses IP definitives du routeur pfSense `R1` pour le site Campus.

### Configuration WAN

| Parametre | Valeur |
| --- | --- |
| Interface pfSense | em0 |
| Adresse IPv4 | 10.72.56.10/24 |
| Passerelle | 10.72.56.1 |
| Passerelle par defaut | Oui |
| DHCP serveur sur WAN | Non |
| IPv6 | Non configure |

### Configuration LAN

| Parametre | Valeur |
| --- | --- |
| Interface pfSense | em1 |
| Adresse IPv4 | 192.168.100.254/24 |
| Passerelle | Aucune |
| IPv6 | Non configure |
| DHCP serveur sur LAN | Active |
| Plage DHCP | 192.168.100.10 a 192.168.100.200 |
| Protocole webConfigurator | HTTPS |

### URL d'administration

L'interface web pfSense est accessible depuis le reseau Campus a l'adresse :

```text
https://192.168.100.254/
```

### Erreurs rencontrees

Lors de la saisie de la fin de plage DHCP, l'adresse suivante a ete entree par erreur :

```text
192.168.100,200
```

pfSense a refuse cette valeur car elle ne correspond pas a une adresse IPv4 valide et a redemande la fin de plage DHCP.

### Solution appliquee

La valeur correcte a ete saisie :

```text
192.168.100.200
```

### Etat final

La configuration IP de `R1` est appliquee :

```text
WAN: 10.72.56.10/24
LAN: 192.168.100.254/24
DHCP LAN: 192.168.100.10 - 192.168.100.200
```

### Correction du plan d'adressage Campus

Apres verification du schema d'infrastructure cible, l'adresse LAN du routeur `R1` doit etre `192.168.100.254/24` et non `192.168.100.1/24`.

La passerelle par defaut des machines du reseau Campus sera donc :

```text
192.168.100.254
```

L'interface web pfSense sera accessible depuis le reseau Campus via :

```text
https://192.168.100.254/
```

### Captures associees





## 5. Test DHCP depuis PC1

### Objectif

Verifier que le poste de controle `PC1`, connecte au reseau interne `Campus`, recoit bien une configuration IP depuis le serveur DHCP de `R1`.

### Configuration reseau de PC1

| Parametre | Valeur |
| --- | --- |
| Systeme | Windows 11 |
| Carte VirtualBox | Reseau interne |
| Nom du reseau | Campus |
| Type de carte | Intel PRO/1000 MT Desktop |

### Commande de verification

Depuis `PC1`, la commande suivante a ete executee dans PowerShell :

```powershell
ipconfig /all
```

### Resultat obtenu

| Parametre | Valeur |
| --- | --- |
| Adresse IPv4 | 192.168.100.10 |
| Masque | 255.255.255.0 |
| Passerelle par defaut | 192.168.100.254 |
| Serveur DHCP | 192.168.100.254 |
| Serveur DNS | 192.168.100.254 |
| Bail obtenu | lundi 4 mai 2026 12:09:34 |
| Bail expirant | lundi 4 mai 2026 13:56:42 |

### Erreurs rencontrees

Aucune erreur bloquante rencontree pendant ce test.

### Etat final

Le serveur DHCP de `R1` fonctionne pour le reseau Campus.

`PC1` recoit automatiquement une adresse IP valide et utilise `R1` comme passerelle par defaut.

### Captures associees





## 6. Configuration initiale web de R1

### Objectif

Finaliser la configuration initiale de pfSense depuis l'interface web accessible depuis `PC1`.

### Acces a l'interface web

Depuis `PC1`, l'interface web pfSense a ete ouverte a l'adresse :

```text
https://192.168.100.254/
```

Un avertissement de certificat est apparu car pfSense utilise un certificat auto-signe. L'avertissement a ete accepte pour continuer vers l'interface d'administration.

### Parametres configures

| Parametre | Valeur |
| --- | --- |
| Hostname | R1 |
| Domaine | safeguard.lan |
| Nom complet affiche | R1.safeguard.lan |
| Fuseau horaire | Europe/Paris |
| Interface WAN | 10.72.56.10/24 |
| Passerelle WAN | 10.72.56.1 |
| Interface LAN | 192.168.100.254/24 |
| Protocole webConfigurator | HTTPS |

### Points d'attention

L'interface WAN utilise une adresse privee dans le reseau VirtualBox `10.72.56.0/24`. Pour permettre le fonctionnement du labo, le blocage des reseaux prives sur WAN doit etre desactive dans pfSense.

Parametres a verifier dans `Interfaces > WAN` :

```text
Block private networks and loopback addresses: decoche
Block bogon networks: decoche si necessaire pour le labo
```

### Etat final

L'interface web pfSense est accessible depuis `PC1` et le tableau de bord affiche le nom `R1.safeguard.lan`.

### Captures associees




## 8. Installation et configuration IP de R2

### Objectif

Installer et configurer le routeur pfSense du site Datacenter.

`R2` assurera les fonctions suivantes :

- routage entre le reseau Datacenter et le WAN ;
- NAT sortant vers Internet ;
- pare-feu ;
- administration via interface web ;
- future interconnexion VPN site-a-site avec `R1`.

### Configuration de la VM

| Parametre | Valeur |
| --- | --- |
| Nom de la VM | R2 |
| Type | BSD |
| Version | FreeBSD 64-bit |
| RAM | 1024 MB |
| CPU | 2 |
| Disque | 32 GB |
| Firmware | BIOS |

### Configuration reseau VirtualBox

| Carte | Mode VirtualBox | Nom du reseau | Role | Type de carte |
| --- | --- | --- | --- | --- |
| Carte 1 | NAT Network | WAN-SafeGuard | WAN | Intel PRO/1000 MT Desktop |
| Carte 2 | Reseau interne | Datacenter | LAN | Intel PRO/1000 MT Desktop |

### Installation pfSense

pfSense a ete installe avec les choix suivants :

```text
Accept
Install
Keymap: French ou Default
Partitioning: Auto (UFS)
Partition Scheme: BSD BSD Labels
```

### Affectation des interfaces

| Interface pfSense | Role | Reseau VirtualBox |
| --- | --- | --- |
| em0 | WAN | WAN-SafeGuard |
| em1 | LAN | Datacenter |

### Configuration IP

| Interface | Adresse | Role |
| --- | --- | --- |
| WAN em0 | 10.72.56.20/24 | Acces WAN VirtualBox |
| LAN em1 | 192.168.200.254/24 | Passerelle Datacenter |

Passerelle WAN :

```text
10.72.56.1
```

### DHCP

Le serveur DHCP n'a pas ete active sur le LAN Datacenter.

Les serveurs du Datacenter utiliseront des adresses IP statiques.

### Etat final

La configuration IP de `R2` est appliquee :

```text
WAN: 10.72.56.20/24
LAN: 192.168.200.254/24
```

### Captures associees







## 9. Creation de la machine virtuelle LAMP1

### Objectif

Creer la machine virtuelle du premier serveur applicatif du Datacenter.

`LAMP1` accueillera la stack web Linux :

- Apache2 ;
- MariaDB ;
- PHP-FPM ;
- WordPress.

### Configuration de la VM

| Parametre | Valeur |
| --- | --- |
| Nom de la VM | LAMP1 |
| Type | Linux |
| Version | Debian 64-bit |
| RAM | 1024 MB |
| CPU | 2 |
| Firmware | EFI |
| Disque 1 | 32 GB |
| Disque 2 | 50 GB |
| Disque 3 | 50 GB |

### Configuration reseau VirtualBox

| Carte | Mode VirtualBox | Nom du reseau | Role |
| --- | --- | --- | --- |
| Carte 1 | Reseau interne | Datacenter | LAN Datacenter |

### Plan d'adressage prevu

| Parametre | Valeur |
| --- | --- |
| Adresse IP | 192.168.200.250/24 |
| Passerelle | 192.168.200.254 |
| DNS temporaire | 192.168.200.254 |

### Etat final

La machine virtuelle `LAMP1` est creee avec ses trois disques et sa carte reseau connectee au reseau interne `Datacenter`.

### Captures associees






## 10. Installation de Debian sur LAMP1

### Objectif

Installer Debian sur le serveur `LAMP1` afin de preparer le futur serveur LAMP du Datacenter.

### Choix d'installation

| Parametre | Valeur |
| --- | --- |
| Systeme | Debian GNU/Linux 13 |
| Nom de machine | LAMP1 |
| Domaine | safeguard.lan |
| Interface graphique | Non installee |
| Services selectionnes | SSH server, standard system utilities |
| Partitionnement | Assiste avec LVM |
| Disque utilise pour le systeme | Disque 1 de 32 GB |
| Disques 50 GB | Laisses libres pour le RAID1 logiciel |

### Comptes crees

| Compte | Role |
| --- | --- |
| root | Administration systeme |
| serveur | Utilisateur standard |

Le meme mot de passe a ete utilise pour `root` et `serveur` dans le cadre du laboratoire.

### Point de securite

Dans un contexte professionnel, il serait preferable d'utiliser des mots de passe differents pour le compte `root` et le compte utilisateur standard, ou de desactiver la connexion directe `root` au profit de `sudo`.

### Reseau pendant l'installation

Le DHCP n'etait pas disponible sur le reseau Datacenter, car les serveurs de ce reseau doivent utiliser des adresses IP fixes.

Le reseau sera donc configure manuellement apres l'installation.

### Etat final

Debian est installe sur `LAMP1` et l'utilisateur `serveur` peut ouvrir une session locale.

### Captures associees






## 11. Configuration reseau statique de LAMP1

### Objectif

Configurer l'adresse IP fixe du serveur `LAMP1` sur le reseau Datacenter.

### Informations detectees

Les commandes suivantes ont ete utilisees :

```bash
ip a
lsblk
```

Resultats importants :

| Element | Valeur |
| --- | --- |
| Interface reseau | enp0s3 |
| Disque systeme | sda - 32G |
| Disque additionnel 1 | sdb - 50G |
| Disque additionnel 2 | sdc - 50G |

### Configuration appliquee

Le fichier `/etc/network/interfaces` a ete modifie avec la configuration suivante :

```text
auto enp0s3
iface enp0s3 inet static
    address 192.168.200.250
    netmask 255.255.255.0
    gateway 192.168.200.254
    dns-nameservers 1.1.1.1 8.8.8.8
    dns-search safeguard.lan
```

Le fichier `/etc/resolv.conf` a ete cree manuellement car il n'existait pas apres l'installation :

```text
search safeguard.lan
nameserver 1.1.1.1
nameserver 8.8.8.8
```

### Erreurs rencontrees

La directive DNS a d'abord ete saisie au singulier :

```text
dns-nameserver 1.1.1.1 8.8.8.8
```

La directive correcte est :

```text
dns-nameservers 1.1.1.1 8.8.8.8
```

Le fichier `/etc/resolv.conf` etait absent, ce qui empechait la verification directe de la configuration DNS.

### Solution appliquee

La directive DNS a ete corrigee dans `/etc/network/interfaces`, puis `/etc/resolv.conf` a ete cree manuellement.

Le service reseau a ensuite ete redemarre :

```bash
systemctl restart networking
```

### Tests de validation

Les tests de connectivite suivants ont ete effectues avec succes :

```bash
ping 192.168.200.254
ping 10.72.56.1
ping 8.8.8.8
ping google.com
```

### Etat final

`LAMP1` dispose d'une configuration IP statique fonctionnelle :

```text
IP: 192.168.200.250/24
Passerelle: 192.168.200.254
DNS: 1.1.1.1, 8.8.8.8
```

La connectivite vers Internet et la resolution DNS sont validees.

### Captures associees






## 12. Preparation du RAID1 logiciel sur LAMP1

### Objectif

Installer l'outil `mdadm` afin de creer un RAID1 logiciel avec les deux disques additionnels de 50 GB.

### Verification initiale

La commande suivante a confirme la presence des disques :

```bash
lsblk
```

| Disque | Taille | Utilisation |
| --- | --- | --- |
| sda | 32G | Systeme Debian |
| sdb | 50G | Futur RAID1 |
| sdc | 50G | Futur RAID1 |

### Erreur rencontree pendant apt update

La commande suivante a d'abord echoue :

```bash
apt update
```

Debian essayait d'utiliser le CD-ROM d'installation comme depot APT :

```text
deb cdrom:[Debian GNU/Linux 13.4.0 _Trixie_ ...]
```

L'erreur indiquait que le depot `cdrom` ne possedait pas de fichier `Release` exploitable.

### Solution appliquee

Le fichier suivant a ete modifie :

```text
/etc/apt/sources.list
```

La ligne `deb cdrom` a ete commentee :

```text
# deb cdrom:[Debian GNU/Linux 13.4.0 _Trixie_ ...]
```

Les depots Internet Debian ont ete ajoutes :

```text
deb http://deb.debian.org/debian trixie main contrib non-free-firmware
deb http://deb.debian.org/debian trixie-updates main contrib non-free-firmware
deb http://security.debian.org/debian-security trixie-security main contrib non-free-firmware
```

### Installation de mdadm

Commandes executees :

```bash
apt update
apt install mdadm -y
```

### Etat final

`mdadm` est installe sur `LAMP1`. Le serveur est pret pour la creation du RAID1 logiciel.

### Captures associees





## 13. Creation du RAID1 logiciel sur LAMP1

### Objectif

Creer une matrice RAID1 logicielle avec les deux disques additionnels de 50 GB afin d'heberger les donnees web de `LAMP1`.

### Disques utilises

| Disque | Taille | Role |
| --- | --- | --- |
| sdb | 50G | RAID1 |
| sdc | 50G | RAID1 |

Le disque `sda` n'a pas ete modifie car il contient le systeme Debian.

### Creation de la matrice RAID1

Commande executee :

```bash
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc
```

### Formatage

La matrice RAID a ete formatee en ext4 :

```bash
mkfs.ext4 /dev/md0
```

### UUID du volume

La commande suivante a ete utilisee :

```bash
blkid /dev/md0
```

UUID obtenu :

```text
f43f1faf-843f-4ede-b2f0-a77bed19c7cf
```

### Montage automatique

Le point de montage a ete cree :

```bash
mkdir -p /mnt/local1
```

La ligne suivante a ete ajoutee dans `/etc/fstab` :

```text
UUID=f43f1faf-843f-4ede-b2f0-a77bed19c7cf /mnt/local1 ext4 defaults,nofail 0 2
```

Apres modification de `/etc/fstab`, la commande suivante a ete executee car systemd utilisait encore l'ancienne version du fichier :

```bash
systemctl daemon-reload
```

Puis le montage a ete applique :

```bash
mount -a
```

### Erreurs rencontrees

Deux erreurs de saisie ont ete corrigees dans `/etc/fstab` :

| Erreur | Correction |
| --- | --- |
| `/mnt/locall` avec deux lettres `l` | `/mnt/local1` avec le chiffre `1` |
| `UUID= f43f...` avec un espace apres `=` | `UUID=f43f...` sans espace |

### Verification

La commande suivante a ete utilisee :

```bash
df -h
```

Resultat attendu obtenu :

```text
/dev/md0 49G 2,1M 47G 1% /mnt/local1
```

### Etat final

Le RAID1 logiciel est cree, formate en ext4 et monte automatiquement sur :

```text
/mnt/local1
```

### Captures associees








## 15. Installation de la stack LAMP sur LAMP1

### Objectif

Installer les composants necessaires pour heberger une application WordPress sur `LAMP1`.

La stack demandee dans l'enonce est composee de :

- Apache2 ;
- MariaDB ;
- plusieurs versions de PHP-FPM via le depot Sury.

### Mise a jour du systeme

Commandes executees :

```bash
apt update
apt upgrade -y
```

### Installation Apache et MariaDB

Commandes executees :

```bash
apt install apache2 mariadb-server mariadb-client curl ca-certificates lsb-release apt-transport-https -y
systemctl enable apache2 mariadb
systemctl start apache2 mariadb
```

Verifications :

```bash
systemctl status apache2
systemctl status mariadb
curl http://localhost
```

### Ajout du depot Sury pour PHP

Le depot Sury a ete ajoute afin de pouvoir installer plusieurs versions de PHP-FPM.

Commandes executees :

```bash
curl -sSLo /tmp/debsuryorg-archive-keyring.deb https://packages.sury.org/debsuryorg-archive-keyring.deb
dpkg -i /tmp/debsuryorg-archive-keyring.deb
```

Fichier cree :

```text
/etc/apt/sources.list.d/sury-php.sources
```

Contenu :

```text
Types: deb
URIs: https://packages.sury.org/php
Suites: trixie
Components: main
Signed-By: /usr/share/keyrings/debsuryorg-archive-keyring.gpg
```

Mise a jour des depots :

```bash
apt update
```

### Installation de PHP-FPM

PHP 8.4 a ete installe comme version principale :

```bash
apt install php8.4-fpm php8.4-cli php8.4-mysql php8.4-xml php8.4-curl php8.4-mbstring php8.4-zip php8.4-gd php8.4-intl -y
```

PHP 8.3 a aussi ete installe afin de respecter la demande de plusieurs versions de PHP-FPM :

```bash
apt install php8.3-fpm php8.3-cli php8.3-mysql php8.3-xml php8.3-curl php8.3-mbstring php8.3-zip php8.3-gd php8.3-intl -y
```

### Integration Apache avec PHP-FPM

Modules Apache actives :

```bash
a2enmod proxy_fcgi setenvif rewrite
```

Configuration PHP-FPM activee pour Apache :

```bash
a2enconf php8.4-fpm
systemctl restart apache2
```

### Verifications finales

Commandes de verification :

```bash
apache2 -v
mariadb --version
php8.4 -v
php8.3 -v
systemctl status php8.4-fpm
systemctl status php8.3-fpm
```

### Erreurs rencontrees

Aucune erreur bloquante signalee pendant l'installation de la stack LAMP.

### Etat final

La stack LAMP est installee sur `LAMP1` :

| Composant | Etat |
| --- | --- |
| Apache2 | Installe |
| MariaDB | Installe |
| PHP 8.4-FPM | Installe et integre a Apache |
| PHP 8.3-FPM | Installe |
| Depot Sury | Configure |

### Sources

- Debian Wiki - Additional PHP Versions : https://wiki.debian.org/AdditionalPHPVersions
- Depot Sury PHP : https://packages.sury.org/php/

### Captures associees








## 16. Creation de la base MariaDB pour WordPress

### Objectif

Creer la base de donnees et l'utilisateur MariaDB necessaires au site WordPress `www.safeguard.lan`.

### Parametres demandes par l'enonce

| Parametre | Valeur |
| --- | --- |
| Base de donnees | wwwsafeguardlan |
| Encodage | utf8mb4_unicode_ci |
| Utilisateur | wwwadmin |
| Hote | localhost |

### Commandes SQL executees

Connexion a MariaDB :

```bash
mariadb
```

Commandes executees :

```sql
CREATE DATABASE wwwsafeguardlan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wwwadmin'@'localhost' IDENTIFIED BY 'P@ssw0rd2026!';
GRANT ALL PRIVILEGES ON wwwsafeguardlan.* TO 'wwwadmin'@'localhost';
FLUSH PRIVILEGES;
SHOW DATABASES;
SELECT user, host FROM mysql.user;
EXIT;
```

### Test de connexion

La connexion a la base avec l'utilisateur applicatif a ete testee :

```bash
mariadb -u wwwadmin -p wwwsafeguardlan
```

### Erreurs rencontrees

Aucune erreur bloquante signalee pendant cette etape.

### Etat final

La base MariaDB `wwwsafeguardlan` et l'utilisateur `wwwadmin` sont operationnels pour WordPress.

### Captures associees



## 18. Configuration du VirtualHost Apache WordPress

### Objectif

Configurer Apache pour servir le site WordPress `www.safeguard.lan` depuis la racine demandee par l'enonce.

### Fichier cree

```text
/etc/apache2/sites-available/www.safeguard.lan.conf
```

### Configuration appliquee

```apache
<VirtualHost *:80>
    ServerName www.safeguard.lan
    DocumentRoot /mnt/local1/www/www.safeguard.lan

    <Directory /mnt/local1/www/www.safeguard.lan>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    <FilesMatch \.php$>
        SetHandler "proxy:unix:/run/php/php8.4-fpm.sock|fcgi://localhost/"
    </FilesMatch>

    ErrorLog ${APACHE_LOG_DIR}/www.safeguard.lan-error.log
    CustomLog ${APACHE_LOG_DIR}/www.safeguard.lan-access.log combined
</VirtualHost>
```

### Activation du site

Commandes executees :

```bash
a2ensite www.safeguard.lan.conf
a2dissite 000-default.conf
systemctl reload apache2
```

### Avertissement Apache rencontre

La commande suivante a ete lancee :

```bash
apache2ctl configtest
```

Apache a affiche un avertissement :

```text
AH00558: apache2: Could not reliably determine the server's fully qualified domain name
```

La configuration restait valide car le resultat indiquait :

```text
Syntax OK
```

### Correction de l'avertissement

Un nom global Apache a ete ajoute :

```bash
echo "ServerName LAMP1.safeguard.lan" > /etc/apache2/conf-available/servername.conf
a2enconf servername
systemctl reload apache2
```

Apres correction :

```bash
apache2ctl configtest
```

Resultat :

```text
Syntax OK
```

### Test local du site

Commande executee :

```bash
curl -I -H "Host: www.safeguard.lan" http://127.0.0.1
```

Resultat obtenu :

```text
HTTP/1.1 302 Found
X-Redirect-By: WordPress
Location: http://www.safeguard.lan/wp-admin/install.php
```

### Etat final

Apache sert correctement le VirtualHost `www.safeguard.lan`. WordPress repond et redirige vers son assistant d'installation.

### Captures associees






## 20. Finalisation de l'installation WordPress

### Objectif

Terminer l'assistant d'installation WordPress et verifier l'acces au tableau de bord d'administration.

### Parametres d'installation

| Parametre | Valeur |
| --- | --- |
| Langue | Francais |
| Nom du site | SafeGuard |
| Utilisateur administrateur | adminwp |
| URL | http://www.safeguard.lan |

### Resultat obtenu

L'installation WordPress s'est terminee correctement.

Le tableau de bord d'administration WordPress est accessible et affiche :

```text
Bienvenue sur WordPress
Version 6.9.4
```

### Validations

Cette etape valide :

- la base MariaDB ;
- l'utilisateur MariaDB `wwwadmin` ;
- le fichier `wp-config.php` ;
- le VirtualHost Apache ;
- PHP-FPM ;
- l'ecriture initiale en base de donnees par WordPress ;
- l'acces au tableau de bord via le nom `www.safeguard.lan`.

### Etat final

Le site WordPress `SafeGuard` est installe et administrable.

### Captures associees




## 23. Mise en place du VPN IPsec site-a-site

### Objectif

Interconnecter le reseau Campus et le reseau Datacenter avec un tunnel VPN IPsec site-a-site entre `R1` et `R2`.

### Plan VPN

| Element | R1 Campus | R2 Datacenter |
| --- | --- | --- |
| Adresse WAN | 10.72.56.10 | 10.72.56.20 |
| Reseau local | 192.168.100.0/24 | 192.168.200.0/24 |
| Reseau distant | 192.168.200.0/24 | 192.168.100.0/24 |
| Type VPN | IPsec IKEv2 | IPsec IKEv2 |
| Authentification | Mutual PSK | Mutual PSK |

### Parametres Phase 1

| Parametre | Valeur |
| --- | --- |
| Key Exchange | IKEv2 |
| Interface | WAN |
| Authentication Method | Mutual PSK |
| Encryption | AES 256 |
| Hash | SHA256 |
| DH Group | 14 / MODP 2048 |
| Lifetime | 28800 |
| NAT Traversal | Auto |

### Parametres Phase 2

| Parametre | Valeur |
| --- | --- |
| Mode | Tunnel IPv4 |
| Protocol | ESP |
| Encryption | AES 256 |
| Hash | SHA256 |
| PFS Group | 14 |
| Lifetime | 3600 |

### Configuration R1

| Parametre | Valeur |
| --- | --- |
| Description Phase 1 | VPN_R1_to_R2 |
| Remote Gateway | 10.72.56.20 |
| Local Network Phase 2 | 192.168.100.0/24 |
| Remote Network Phase 2 | 192.168.200.0/24 |
| Description Phase 2 | Campus_to_Datacenter |

### Configuration R2

| Parametre | Valeur |
| --- | --- |
| Description Phase 1 | VPN_R2_to_R1 |
| Remote Gateway | 10.72.56.10 |
| Local Network Phase 2 | 192.168.200.0/24 |
| Remote Network Phase 2 | 192.168.100.0/24 |
| Description Phase 2 | Datacenter_to_Campus |

### Probleme rencontre

Apres creation du tunnel sur `R2`, la page `Status > IPsec` indiquait :

```text
IPsec is disabled
```

Dans `VPN > IPsec > Tunnels`, les boutons verts `Enable` etaient visibles sur la Phase 1 et la Phase 2, ce qui indiquait que les entrees etaient desactivees.

### Solution appliquee

Les entrees Phase 1 et Phase 2 ont ete activees avec les boutons `Enable`, puis les changements ont ete appliques.

Le tunnel a ensuite ete lance depuis :

```text
Status > IPsec > Overview > Connect P1 and P2s
```

### Validation de l'etablissement

Le tunnel affiche l'etat suivant sur `R2` :

```text
Status: Established
Child SA entries: 1 Connected
```

Les algorithmes affiches sont :

```text
AES_CBC (256)
HMAC_SHA2_256_128
PRF_HMAC_SHA2_256
MODP_2048
```

### Etat actuel

Le tunnel IPsec site-a-site est etabli. Les tests de trafic entre `PC1` et le Datacenter doivent maintenant etre realises.

### Captures associees








## 24. Regles firewall et validation du trafic VPN

### Objectif

Autoriser le trafic entre les reseaux Campus et Datacenter a travers le tunnel IPsec.

### Probleme rencontre

Le tunnel IPsec etait etabli, mais les pings depuis `PC1` vers le reseau Datacenter ne repondaient pas.

Exemples de tests initialement en echec :

```powershell
ping 192.168.200.254
ping 192.168.200.250
```

### Cause

Le tunnel IPsec etait monte, mais le trafic etait bloque par les regles firewall IPsec.

### Regle ajoutee sur R1

Emplacement :

```text
Firewall > Rules > IPsec
```

| Parametre | Valeur |
| --- | --- |
| Action | Pass |
| Interface | IPsec |
| Protocol | Any |
| Source | 192.168.200.0/24 |
| Destination | 192.168.100.0/24 |
| Description | Allow Datacenter to Campus via IPsec |

### Regle ajoutee sur R2

Emplacement :

```text
Firewall > Rules > IPsec
```

| Parametre | Valeur |
| --- | --- |
| Action | Pass |
| Interface | IPsec |
| Protocol | Any |
| Source | 192.168.100.0/24 |
| Destination | 192.168.200.0/24 |
| Description | Allow Campus to Datacenter via IPsec |

### Validation

Depuis `PC1`, les tests suivants sont maintenant fonctionnels :

```powershell
ping 192.168.200.254
ping 192.168.200.250
```

### Etat final

Le VPN IPsec site-a-site est operationnel :

- tunnel etabli ;
- Phase 1 active ;
- Phase 2 active ;
- trafic Campus vers Datacenter autorise ;
- trafic Datacenter vers Campus autorise ;
- ping de `PC1` vers le Datacenter valide.

### Captures associees






## 25. Installation et configuration initiale de DC1

### Objectif

Installer le premier serveur Windows du reseau Campus afin de le promouvoir ensuite en controleur de domaine Active Directory.

### Configuration de la VM

| Parametre | Valeur |
| --- | --- |
| Nom de la VM | DC1 |
| Systeme | Windows Server 2022 |
| Mode | Desktop Experience |
| RAM | 2048 MB |
| CPU | 2 |
| Disque | 120 GB |
| Firmware | EFI |

### Configuration reseau VirtualBox

| Carte | Mode VirtualBox | Nom du reseau | Role |
| --- | --- | --- | --- |
| Carte 1 | Reseau interne | Campus | LAN Campus |

### Configuration IP

| Parametre | Valeur |
| --- | --- |
| Adresse IP | 192.168.100.250 |
| Masque | 255.255.255.0 |
| Passerelle | 192.168.100.254 |
| DNS prevu final | 192.168.100.250 |

### Tests de connectivite

Les tests suivants ont ete realises depuis `DC1` :

```powershell
ipconfig /all
ping 192.168.100.254
ping 8.8.8.8
ping google.com
```

### Etat final

`DC1` est installe, renomme et connecte au reseau Campus. La connectivite reseau est validee.

### Captures associees








## 26. Creation du domaine Active Directory safeguard.lan

### Objectif

Promouvoir `DC1` en premier controleur de domaine Active Directory et creer la foret `safeguard.lan`.

### Methode utilisee

La configuration a ete realisee avec l'interface graphique Windows Server, depuis le Gestionnaire de serveur.

### Installation des roles

Chemin utilise :

```text
Gestionnaire de serveur > Gerer > Ajouter des roles et fonctionnalites
```

Roles installes :

| Role | Etat |
| --- | --- |
| Services AD DS | Installe |
| Serveur DNS | Installe |

Les fonctionnalites d'administration necessaires ont ete ajoutees automatiquement par l'assistant.

### Promotion en controleur de domaine

Depuis la notification du Gestionnaire de serveur, l'action suivante a ete lancee :

```text
Promouvoir ce serveur en controleur de domaine
```

Choix effectue :

```text
Ajouter une nouvelle foret
```

Nom du domaine racine :

```text
safeguard.lan
```

Nom NetBIOS conserve :

```text
SAFEGUARD
```

Options conservees :

| Option | Etat |
| --- | --- |
| Serveur DNS | Active |
| Catalogue global | Active |

Mot de passe DSRM defini pour le laboratoire.

### Avertissement rencontre

L'assistant peut afficher un avertissement indiquant qu'une delegation DNS ne peut pas etre creee.

Cet avertissement est normal dans ce laboratoire, car il n'existe pas de zone DNS parente geree au-dessus de `safeguard.lan`.

### Redemarrage

A la fin de la promotion, `DC1` a redemarre automatiquement.

La connexion se fait ensuite avec un compte du domaine :

```text
SAFEGUARD\Administrateur
```

### Etat final

Le domaine Active Directory `safeguard.lan` est cree et `DC1` est le premier controleur de domaine de la foret.

## 27. Correction reseau et DNS de DC1

### Objectif

Corriger la configuration reseau de `DC1` apres la promotion Active Directory afin de garantir l'acces au reseau, a Internet et au DNS.

### Probleme rencontre

`DC1` pouvait joindre sa passerelle `R1` :

```powershell
ping 192.168.100.254
```

Mais ne pouvait pas joindre le WAN VirtualBox ni Internet :

```powershell
ping 10.72.56.1
ping 8.8.8.8
```

La commande `ipconfig /all` affichait une passerelle incorrecte supplementaire :

```text
Passerelle par defaut : 0.0.0.0
                         192.168.100.254
```

Elle affichait aussi initialement :

```text
Routage IP active : Oui
```

### Corrections appliquees

Le routage IP Windows a ete desactive :

```powershell
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name IPEnableRouter -Value 0
Restart-Computer
```

La route par defaut incorrecte a ete supprimee :

```powershell
Remove-NetRoute -DestinationPrefix "0.0.0.0/0" -NextHop "0.0.0.0" -Confirm:$false
```

### Configuration finale de DC1

| Parametre | Valeur |
| --- | --- |
| Adresse IPv4 | 192.168.100.250 |
| Masque | 255.255.255.0 |
| Passerelle | 192.168.100.254 |
| DNS | 192.168.100.250 |
| Suffixe DNS principal | safeguard.lan |
| Routage IP | Non |

### Validations

Les tests suivants sont maintenant fonctionnels :

```powershell
ping 192.168.100.254
ping 10.72.56.1
ping 8.8.8.8
nslookup safeguard.lan
nslookup google.com
```

Resultats DNS importants :

```text
safeguard.lan -> 192.168.100.250
google.com -> resolution externe OK
```

### Etat final

`DC1` dispose d'une configuration reseau propre pour un controleur de domaine :

- passerelle correcte ;
- DNS Active Directory fonctionnel ;
- resolution externe fonctionnelle ;
- acces Internet valide ;
- routage IP desactive.

## 28. Creation de l'arborescence Active Directory

### Objectif

Creer la structure d'unites d'organisation demandee par l'enonce pour organiser les objets du domaine.

### Methode utilisee

La configuration a ete realisee avec la console graphique :

```text
Utilisateurs et ordinateurs Active Directory
```

### Structure creee

Dans le domaine `safeguard.lan`, l'OU racine suivante a ete creee :

```text
SAFEGUARD
```

Puis les sous-OU suivantes ont ete ajoutees :

```text
SAFEGUARD
├── Computers
│   ├── Clients
│   └── Servers
└── Users
```

### Role des OU

| OU | Role |
| --- | --- |
| SAFEGUARD | Racine d'organisation de l'entreprise |
| Computers | Conteneur cible pour les nouveaux ordinateurs joints au domaine |
| Clients | Postes clients |
| Servers | Serveurs |
| Users | Comptes utilisateurs |
| Groupes | Groupes de securite globaux et locaux de domaine |

### Etat final

L'arborescence Active Directory demandee est creee dans le domaine `safeguard.lan`.

### Captures associees



## 29. Redirection du conteneur ordinateur par defaut

### Objectif

Configurer Active Directory pour que les nouveaux ordinateurs joints au domaine soient places automatiquement dans l'OU :

```text
OU=Computers,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Commande executee

Depuis PowerShell en administrateur sur `DC1` :

```powershell
redircmp "OU=Computers,OU=SAFEGUARD,DC=safeguard,DC=lan"
```

### Resultat obtenu

```text
La redirection a reussi.
```

### Erreur de verification rencontree

Une premiere verification a ete lancee avec une propriete incorrecte :

```powershell
Get-ADDomain | Select-Object ComputerContainer
```

Cette propriete ne correspond pas au nom attendu, ce qui a donne un affichage vide.

### Verification correcte

La commande correcte est :

```powershell
Get-ADDomain | Select-Object ComputersContainer
```

### Etat final

Les nouveaux ordinateurs ajoutes au domaine seront places par defaut dans :

```text
OU=Computers,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Captures associees



## 30. Creation des groupes globaux Active Directory

### Objectif

Creer les groupes globaux de securite correspondant aux services de l'entreprise.

### Emplacement

Les groupes ont ete crees dans l'OU :

```text
OU=Users,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Groupes crees

| Groupe | Etendue | Type | Role |
| --- | --- | --- | --- |
| GG_Direction | Globale | Securite | Utilisateurs du service Direction |
| GG_Compta | Globale | Securite | Utilisateurs du service Comptabilite |
| GG_IT | Globale | Securite | Utilisateurs du service IT |

### Methode utilisee

La creation a ete realisee depuis la console graphique :

```text
Utilisateurs et ordinateurs Active Directory
```

### Etat final

Les groupes globaux de l'entreprise sont crees et prets a recevoir les utilisateurs.

## 31. Creation des utilisateurs Active Directory

### Objectif

Creer les comptes utilisateurs demandes par l'enonce et les rattacher aux groupes globaux correspondant a leur service.

### Emplacement

Les utilisateurs ont ete crees dans l'OU :

```text
OU=Users,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Utilisateurs crees

| Prenom | Nom | Identifiant | UPN | Groupe |
| --- | --- | --- | --- | --- |
| Isabelle | Gauthier | igauthier | igauthier@safeguard.lan | GG_Direction |
| Laurent | Mercier | lmercier | lmercier@safeguard.lan | GG_Direction |
| Claire | Martin | cmartin | cmartin@safeguard.lan | GG_Direction |
| Nicolas | Bernard | nbernard | nbernard@safeguard.lan | GG_Compta |
| Sophie | Lefebvre | slefebvre | slefebvre@safeguard.lan | GG_Compta |
| Pierre | Moreau | pmoreau | pmoreau@safeguard.lan | GG_Compta |
| Philippe | Dubois | pdubois | pdubois@safeguard.lan | GG_IT |
| Julie | Simon | jsimon | jsimon@safeguard.lan | GG_IT |

### Parametres de mot de passe

Pour le laboratoire, un mot de passe commun a ete utilise et les options suivantes ont ete appliquees :

```text
L'utilisateur doit changer le mot de passe a la prochaine ouverture de session : Non
Le mot de passe n'expire jamais : Oui
```

### Methode utilisee

Les comptes ont ete crees depuis la console graphique :

```text
Utilisateurs et ordinateurs Active Directory
```

Les appartenances aux groupes ont ete configurees depuis l'onglet :

```text
Proprietes utilisateur > Membre de
```

### Etat final

Les comptes utilisateurs de l'entreprise sont crees et rattaches a leurs groupes globaux respectifs.

### Captures associees



## 32. Creation du compte administrateur nominatif

### Objectif

Creer un compte administrateur nominatif afin d'eviter l'utilisation quotidienne du compte integre `Administrateur`.

### Emplacement

Le compte a ete cree dans l'OU :

```text
OU=Users,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Droits attribues

Le compte a ete ajoute au minimum au groupe d'administration du domaine :

```text
Domain Admins
```

Selon les besoins du laboratoire, il peut aussi etre ajoute aux groupes d'administration locaux ou integres necessaires.

### Verification visuelle

La console `Utilisateurs et ordinateurs Active Directory` affiche dans l'OU `SAFEGUARD > Users` :

- les groupes globaux `GG_Direction`, `GG_Compta`, `GG_IT` ;
- les utilisateurs des services ;
- le compte administrateur nominatif.

### Etat final

Le compte administrateur nominatif est cree et permet d'administrer l'infrastructure sans utiliser directement le compte `Administrateur` integre.

### Captures associees



## 33. Installation et jonction au domaine de DC2

### Objectif

Installer `DC2` en Windows Server Core, le configurer sur le reseau Campus et le joindre au domaine `safeguard.lan` avant sa promotion en controleur de domaine supplementaire.

### Configuration de la VM

| Parametre | Valeur |
| --- | --- |
| Nom de la VM | DC2 |
| Systeme | Windows Server 2022 Core |
| RAM | 1024 MB |
| CPU | 2 |
| Disque | 120 GB |
| Firmware | EFI |
| Reseau VirtualBox | Campus |

### Configuration IP

| Parametre | Valeur |
| --- | --- |
| Adresse IP | 192.168.100.251 |
| Masque | 255.255.255.0 |
| Passerelle | 192.168.100.254 |
| DNS | 192.168.100.250 |

### Tests realises

Les tests suivants ont ete effectues depuis `DC2` :

```powershell
ping 192.168.100.254
ping 192.168.100.250
nslookup safeguard.lan
```

La resolution DNS du domaine retourne :

```text
safeguard.lan -> 192.168.100.250
```

### Point d'attention DNS

`nslookup` a affiche le serveur DNS comme `Unknown`. Ce n'est pas bloquant : cela signifie seulement que le reverse DNS/PTR du serveur DNS n'est pas renseigne. La resolution directe de `safeguard.lan` fonctionne bien.

### Verification apres redemarrage

Commandes executees :

```powershell
whoami
hostname
```

Resultat observe :

```text
dc2\administrateur
DC2
```

Cela confirme le nom de machine, mais indique que la session utilisee est encore le compte administrateur local. Pour les operations de domaine, un compte du domaine devra etre utilise ou fourni en credential.

### Captures associees








## 34. Promotion de DC2 en controleur de domaine supplementaire

### Objectif

Promouvoir `DC2` en controleur de domaine supplementaire pour le domaine `safeguard.lan`.

### Installation des roles

Sur Windows Server Core, la commande suivante avec `-IncludeManagementTools` a echoue car le parametre n'etait pas accepte dans ce contexte :

```powershell
Install-WindowsFeature AD-Domain-Services,DNS -IncludeManagementTools
```

La commande correcte utilisee sur Server Core est :

```powershell
Install-WindowsFeature AD-Domain-Services,DNS
```

### Erreurs de saisie rencontrees

Pendant la preparation de la commande de promotion, plusieurs erreurs de saisie ont ete corrigees :

| Erreur | Correction |
| --- | --- |
| `Conerto-SecureString` | `ConvertTo-SecureString` |
| `èForce` | `-Force` |
| `SafemodeAdministratorPassword` sans tiret | `-SafeModeAdministratorPassword` |

### Commande de promotion

Les identifiants du domaine ont ete stockes dans une variable :

```powershell
$cred = Get-Credential SAFEGUARD\Administrateur
```

Le mot de passe DSRM a ete fourni pendant la commande de promotion.

La promotion a ete lancee avec `Install-ADDSDomainController` pour ajouter `DC2` comme controleur de domaine supplementaire du domaine existant.

### Validation observee

L'assistant PowerShell a affiche :

```text
Determination du controleur de domaine source de replication
Validation d'environnement et d'entree utilisateur
Tous les tests ont reussi
Installation d'un nouveau controleur de domaine
```

### Avertissements rencontres

Un avertissement indique qu'il est impossible de creer une delegation DNS pour `safeguard.lan`.

Cet avertissement est normal dans le laboratoire, car il n'existe pas de zone DNS parente geree au-dessus de `safeguard.lan`.

Un autre avertissement concerne les algorithmes de chiffrement compatibles Windows NT 4.0. Ce parametre de securite par defaut n'est pas bloquant pour le projet.

### Etat actuel

La promotion de `DC2` en controleur de domaine supplementaire est en cours. La validation finale sera realisee apres redemarrage avec la commande :

```powershell
Get-ADDomainController -Filter *
```

### Captures associees




## 35. Validation de DC2 comme controleur de domaine

### Objectif

Verifier que `DC2` est bien devenu controleur de domaine supplementaire du domaine `safeguard.lan`.

### Connexion

Apres redemarrage, la session a ete ouverte avec un compte du domaine :

```powershell
whoami
```

Resultat :

```text
safeguard\administrateur
```

### Verification des controleurs de domaine

Commande executee :

```powershell
Get-ADDomainController -Filter *
```

Resultat observe :

- `DC1.safeguard.lan` ;
- `DC2.safeguard.lan`.

### Informations importantes observees

`DC1` porte les roles FSMO principaux, ce qui est normal pour le premier controleur de domaine :

```text
SchemaMaster
DomainNamingMaster
PDCEmulator
RIDMaster
InfrastructureMaster
```

`DC2` apparait comme controleur de domaine dans le domaine :

```text
HostName: DC2.safeguard.lan
Domain: safeguard.lan
Enabled: True
```

### Etat final

`DC2` est valide comme controleur de domaine supplementaire du domaine `safeguard.lan`.

### Captures associees



## 36. Reorganisation des groupes Active Directory

### Objectif

Clarifier la structure Active Directory en separant les comptes utilisateurs et les groupes de securite.

### Nouvelle structure

L'OU suivante a ete ajoutee sous `SAFEGUARD` :

```text
Groupes
```

La structure devient :

```text
SAFEGUARD
├── Computers
│   ├── Clients
│   └── Servers
├── Users
└── Groupes
```

### Deplacement effectue

Les groupes globaux existants ont ete deplaces depuis `SAFEGUARD > Users` vers `SAFEGUARD > Groupes` :

| Groupe | Nouvel emplacement |
| --- | --- |
| GG_Direction | OU=Groupes,OU=SAFEGUARD,DC=safeguard,DC=lan |
| GG_Compta | OU=Groupes,OU=SAFEGUARD,DC=safeguard,DC=lan |
| GG_IT | OU=Groupes,OU=SAFEGUARD,DC=safeguard,DC=lan |

### Justification

Cette organisation facilite l'administration :

- les comptes utilisateurs restent dans `Users` ;
- les groupes globaux et futurs groupes locaux de domaine AGDLP seront centralises dans `Groupes`.

### Etat final

Les groupes metiers sont ranges dans l'OU `SAFEGUARD > Groupes`.

## 37. Creation des groupes locaux de domaine pour les partages

### Objectif

Creer les groupes locaux de domaine necessaires a l'application de la methode AGDLP sur les partages SMB de `DC2`.

### Emplacement

Les groupes ont ete crees dans l'OU :

```text
OU=Groupes,OU=SAFEGUARD,DC=safeguard,DC=lan
```

### Groupes crees

| Groupe | Etendue | Type | Usage |
| --- | --- | --- | --- |
| GL_Direction_RW | Domaine local | Securite | Droits Modifier sur le partage Direction |
| GL_Compta_RW | Domaine local | Securite | Droits Modifier sur le partage Compta |
| GL_Compta_RO | Domaine local | Securite | Droits Lecture sur le partage Compta |
| GL_Logiciels_RO | Domaine local | Securite | Droits Lecture sur le partage Logiciels |

### Imbrication AGDLP prevue

| Groupe global | Groupe local de domaine |
| --- | --- |
| GG_Direction | GL_Direction_RW |
| GG_Compta | GL_Compta_RW |
| GG_IT | GL_Logiciels_RO |

`GL_Compta_RO` est conserve pour les besoins de lecture seule, mais peut rester vide tant qu'aucun groupe global de lecture seule n'est defini.

### Etat final

Les groupes locaux de domaine necessaires aux partages SMB sont crees dans `SAFEGUARD > Groupes`.

### Captures associees



## 38. Creation des dossiers et partages SMB sur DC2

### Objectif

Creer les dossiers de donnees sur `DC2` et les publier sous forme de partages SMB.

### Emplacement des dossiers

Les dossiers ont ete crees sur `DC2` sous :

```text
C:\DATA
```

Arborescence creee :

```text
C:\DATA\Direction
C:\DATA\Compta
C:\DATA\Public
C:\DATA\Logiciels
```

### Partages crees

| Dossier local | Partage UNC |
| --- | --- |
| C:\DATA\Direction | \\dc2.safeguard.lan\Direction |
| C:\DATA\Compta | \\dc2.safeguard.lan\Compta |
| C:\DATA\Public | \\dc2.safeguard.lan\Public |
| C:\DATA\Logiciels | \\dc2.safeguard.lan\Logiciels |

### Methode utilisee

La creation a ete realisee avec l'interface graphique depuis `DC1`, via les outils d'administration Windows et/ou l'explorateur sur le chemin administratif :

```text
\\DC2\C$
```

### Droits attendus

| Partage | Droits attendus |
| --- | --- |
| Direction | Admins du domaine Controle total, GL_Direction_RW Modifier |
| Compta | Admins du domaine Controle total, GL_Compta_RW Modifier, GL_Compta_RO Lecture |
| Public | Utilisateurs authentifies Modifier |
| Logiciels | Admins du domaine Controle total, Utilisateurs du domaine Lecture |

### Etat actuel

Les partages SMB sont crees. Les permissions doivent etre verifiees pour confirmer qu'elles correspondent au modele AGDLP attendu.

### Captures associees




## 39. Verification et correction des permissions de partage SMB

### Objectif

Verifier que les autorisations de partage SMB correspondent au modele attendu et a la methode AGDLP.

### Difference entre permissions de partage et permissions NTFS

Pendant la verification, une confusion a ete identifiee entre :

| Type de droit | Emplacement | Commande / verification |
| --- | --- | --- |
| Permissions de partage | Onglet Partage | Get-SmbShareAccess |
| Permissions NTFS | Onglet Securite | icacls ou Parametres de securite avances |

Les permissions NTFS etaient configurees, mais les permissions de partage affichaient initialement :

```text
Tout le monde : Full
```

Cela a ete corrige dans l'onglet `Partage` afin d'avoir des autorisations de partage explicites et conformes a l'enonce.

### Verification des permissions de partage

Commandes utilisees :

```powershell
Get-SmbShareAccess Direction
Get-SmbShareAccess Compta
Get-SmbShareAccess Public
Get-SmbShareAccess Logiciels
```

### Resultats finaux

#### Direction

| Principal | Droit |
| --- | --- |
| SAFEGUARD\Admins du domaine | Full |
| SAFEGUARD\GL_Direction_RW | Change |

#### Compta

| Principal | Droit |
| --- | --- |
| SAFEGUARD\Admins du domaine | Full |
| SAFEGUARD\GL_Compta_RW | Change |
| SAFEGUARD\GL_Compta_RO | Read |

#### Public

| Principal | Droit |
| --- | --- |
| AUTORITE NT\Utilisateurs authentifies | Change |
| SAFEGUARD\Admins du domaine | Full |

#### Logiciels

| Principal | Droit |
| --- | --- |
| SAFEGUARD\Admins du domaine | Full |
| SAFEGUARD\GL_Logiciels_RO | Read |

### Etat final

Les permissions de partage SMB sont conformes au modele attendu. Les partages ne disposent plus de l'autorisation trop large `Tout le monde : Full`.

### Captures associees




## 40. Installation de l'imprimante fictive sur DC2

### Objectif

Installer, partager et publier une imprimante fictive TCP/IP sur `DC2`.

### Role installe

Le role suivant a ete installe sur `DC2` depuis le Gestionnaire de serveur de `DC1` :

```text
Services de documents et d'impression > Serveur d'impression
```

### Outil d'administration

La console `Gestion de l'impression` n'etait pas disponible initialement sur `DC1`.

Elle a ete ajoutee avec la fonctionnalite d'administration :

```powershell
Install-WindowsFeature RSAT-Print-Services
```

### Serveur d'impression administre

`DC2` a ete ajoute dans la console :

```text
Gestion de l'impression > Serveurs d'impression
```

### Port TCP/IP cree

| Parametre | Valeur |
| --- | --- |
| Type de port | Standard TCP/IP Port |
| Adresse IP | 192.168.100.5 |
| Nom du port | IP_192.168.100.5 |
| Type de peripherique | Generic Network Card / personnalise |

### Imprimante creee

| Parametre | Valeur |
| --- | --- |
| Nom | IMP_SafeGuard |
| Nom du partage | IMP_SafeGuard |
| Pilote | Generic / Text Only |
| Type de port | Port TCP/IP standard |
| Publication annuaire | Oui |

### Point d'attention

Lors du recapitulatif de l'assistant, le champ `Publier` indiquait d'abord :

```text
Non
```

L'assistant a ete repris avec `Precedent` afin d'activer l'option de publication dans l'annuaire Active Directory.

### Etat final

L'imprimante fictive `IMP_SafeGuard` est installee sur `DC2`, partagee et publiee dans Active Directory.

### Captures associees




## 42. Mise en place des GPO utilisateur et ordinateur

### Objectif

Configurer les strategies de groupe demandees par l'enonce afin d'automatiser plusieurs parametres utilisateurs et postes clients.

### GPO creees

| Nom de la GPO | Liaison | Objectif |
| --- | --- | --- |
| GPO_Account_Lockout | Domaine safeguard.lan | Verrouillage des comptes |
| GPO_Map_Public_Drive | OU=Users,OU=SAFEGUARD | Monter le lecteur P: |
| GPO_Deploy_Printer | OU=Users,OU=SAFEGUARD | Deployer l'imprimante partagee |
| GPO_Enable_RDP_Admins | OU=Clients,OU=Computers,OU=SAFEGUARD | Activer le Bureau a distance sur les clients |
| GPO_Folder_Redirection_Documents | OU=Users,OU=SAFEGUARD | Rediriger Documents |
| GPO_Wallpaper | OU=Users,OU=SAFEGUARD | Appliquer un fond d'ecran commun |
| GPO_Publish_Firefox | OU=Users,OU=SAFEGUARD | Publier Firefox |

### GPO de verrouillage des comptes

Chemin :

```text
Configuration ordinateur
> Strategies
> Parametres Windows
> Parametres de securite
> Strategies de comptes
> Strategie de verrouillage du compte
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Seuil de verrouillage | 10 tentatives |
| Duree de verrouillage | 15 minutes |
| Reinitialisation du compteur | 5 minutes |

### GPO lecteur reseau P:

Chemin :

```text
Configuration utilisateur
> Preferences
> Parametres Windows
> Mappages de lecteurs
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Action | Mettre a jour |
| Emplacement | \\dc2.safeguard.lan\Public |
| Lettre | P: |
| Reconnecter | Oui |
| Nom | Public |

### GPO imprimante

Chemin :

```text
Configuration utilisateur
> Preferences
> Parametres du Panneau de configuration
> Imprimantes
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Type | Imprimante partagee |
| Action | Mettre a jour |
| Chemin | \\dc2.safeguard.lan\IMP_SafeGuard |

### GPO Bureau a distance

Liaison :

```text
OU=Clients,OU=Computers,OU=SAFEGUARD,DC=safeguard,DC=lan
```

Parametre active :

```text
Configuration ordinateur
> Strategies
> Modeles d'administration
> Composants Windows
> Services Bureau a distance
> Hote de session Bureau a distance
> Connexions
> Autoriser les utilisateurs a se connecter a distance a l'aide des services Bureau a distance
```

Le pare-feu Windows Defender a egalement ete configure pour autoriser les regles entrantes liees au Bureau a distance.

### Preparation du partage Users pour la redirection Documents

Un dossier racine a ete cree sur `DC2` :

```text
C:\DATA\Users
```

Partage :

```text
\\dc2.safeguard.lan\Users
```

Permissions de partage :

| Principal | Droit |
| --- | --- |
| Admins du domaine | Controle total |
| Utilisateurs authentifies | Modifier |

Permissions NTFS importantes sur le dossier racine :

| Principal | Droit | Application |
| --- | --- | --- |
| SYSTEM | Controle total | Ce dossier, sous-dossiers et fichiers |
| Admins du domaine | Controle total | Ce dossier, sous-dossiers et fichiers |
| Utilisateurs authentifies | Creation de dossier, lecture minimale | Ce dossier seulement |

### GPO redirection Documents

Chemin :

```text
Configuration utilisateur
> Strategies
> Parametres Windows
> Redirection de dossiers
> Documents
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Mode | De base |
| Emplacement cible | Creer un dossier pour chaque utilisateur sous le chemin racine |
| Chemin racine | \\dc2.safeguard.lan\Users |
| Droits exclusifs utilisateur | Active |
| Deplacer le contenu existant | Active |

### GPO fond d'ecran

Le fond d'ecran a ete place dans un emplacement accessible aux utilisateurs :

```text
\\dc2.safeguard.lan\Public\wallpaper.jpg
```

Chemin GPO :

```text
Configuration utilisateur
> Strategies
> Modeles d'administration
> Bureau
> Bureau
> Papier peint du Bureau
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Etat | Active |
| Chemin | \\dc2.safeguard.lan\Public\wallpaper.jpg |
| Style | Remplir |

### GPO publication Firefox

Un package MSI Firefox a ete place dans :

```text
\\dc2.safeguard.lan\Logiciels\Firefox.msi
```

Chemin GPO :

```text
Configuration utilisateur
> Strategies
> Parametres du logiciel
> Installation de logiciel
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Package | \\dc2.safeguard.lan\Logiciels\Firefox.msi |
| Type de deploiement | Publie |

### Points d'attention

Pour la publication de logiciel par GPO, un fichier MSI est necessaire. Un installateur EXE classique ne convient pas pour cette methode.

Pour les chemins de GPO, les chemins UNC doivent etre utilises. Les chemins locaux comme `C:\DATA\...` ne doivent pas etre utilises dans les GPO clientes.

### Etat final

Les GPO demandees par l'enonce sont creees. Leur validation finale devra etre effectuee depuis un poste client joint au domaine avec la commande :

```powershell
gpupdate /force
gpresult /r
```

### Captures associees




## 44. Validation fonctionnelle des GPO sur PC1

### Objectif

Verifier que les GPO utilisateur et ordinateur s'appliquent correctement sur `PC1` apres jonction au domaine.

### Contexte

Session utilisateur testee :

```text
nbernard@safeguard.lan
```

Cet utilisateur est membre des groupes :

```text
GG_Compta
GL_Compta_RW
```

### Validation des GPO utilisateur

Commande executee :

```powershell
gpresult /r
```

GPO utilisateur appliquees :

```text
GPO_Map_Public_Drive
GPO_Deploy_Printer
GPO_Folder_Redirection_Documents
GPO_Wallpaper
GPO_Publish_Firefox
```

### Validation des GPO ordinateur

Commande executee en administrateur :

```powershell
gpresult /r /scope computer
```

GPO ordinateur appliquees :

```text
GPO_Enable_RDP_Admins
Default Domain Policy
GPO_Account_Lockout
```

### Tests fonctionnels effectues

Les elements suivants ont ete verifies sur `PC1` :

| Element | Resultat |
| --- | --- |
| Lecteur reseau P: | Present et pointe vers le partage Public |
| Imprimante IMP_SafeGuard | Deployee |
| Redirection Documents | Fonctionnelle |
| Fond d'ecran | Applique |
| Firefox publie | GPO appliquee |
| Acces Compta avec nbernard | OK |
| Ecriture dans Compta | OK |
| Acces Direction avec nbernard | Refuse ou non autorise, conforme aux droits |

### Etat final

Les GPO utilisateur et ordinateur sont appliquees et validees fonctionnellement sur `PC1`.

### Captures associees







## 45. Enregistrement DNS AD pour WordPress

### Objectif

Creer l'enregistrement DNS interne permettant d'acceder au site WordPress avec le nom demande :

```text
www.safeguard.lan
```

### Zone DNS

L'enregistrement a ete cree dans la zone de recherche directe :

```text
safeguard.lan
```

### Enregistrement cree

| Nom | Type | Adresse IP |
| --- | --- | --- |
| www | A | 192.168.200.250 |

### Point d'attention

Lors de la creation, l'option suivante etait cochee :

```text
Creer un pointeur PTR associe
```

Un avertissement est apparu car aucune zone de recherche inversee n'existait pour le reseau `192.168.200.0/24`.

L'option PTR a ete decochee, puis l'enregistrement A a ete cree correctement.

### Etat final

Le DNS Active Directory resout :

```text
www.safeguard.lan -> 192.168.200.250
```

### Captures associees



## 46. Acces SSH par cle publique sur R2

### Objectif

Activer l'administration SSH de `R2` avec authentification par cle publique depuis le PC hote.

### Generation de la cle SSH

La cle SSH a ete generee sur le PC hote Windows avec :

```powershell
ssh-keygen -t ed25519 -C "admin@safeguard-lab"
```

La cle publique a ete affichee avec :

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

### Ajout de la cle dans pfSense

La cle publique a ete ajoutee sur `R2` dans :

```text
System > User Manager > Users > admin > Authorized SSH Keys
```

Point important : la cle publique doit etre collee sur une seule ligne complete, en commencant par :

```text
ssh-ed25519
```

### Activation SSH

SSH a ete active dans :

```text
System > Advanced > Admin Access > Secure Shell
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Enable Secure Shell | Oui |
| Port | 22 |
| Authentification | Cle publique |

### Probleme rencontre

Lors du test SSH, le client Windows a affiche un avertissement :

```text
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
```

Cause : une ancienne empreinte SSH existait deja dans le fichier `known_hosts` pour `192.168.56.254`.

### Solution appliquee

L'ancienne empreinte a ete supprimee avec :

```powershell
ssh-keygen -R 192.168.56.254
```

Puis la connexion a ete relancee :

```powershell
ssh admin@192.168.56.254
```

### Etat final

La connexion SSH vers `R2` fonctionne depuis le PC hote et affiche le menu pfSense.

## 47. Acces SSH par cle publique sur R1

### Objectif

Activer l'administration SSH de `R1` avec authentification par cle publique.

### Configuration pfSense

La cle publique SSH a ete ajoutee sur l'utilisateur `admin` dans :

```text
System > User Manager > Users > admin > Authorized SSH Keys
```

SSH a ete active dans :

```text
System > Advanced > Admin Access > Secure Shell
```

Parametres :

| Parametre | Valeur |
| --- | --- |
| Enable Secure Shell | Oui |
| Port | 22 |
| Authentification | Cle publique |

### Test de connexion

La connexion SSH vers `R1` a ete testee avec succes :

```powershell
ssh admin@192.168.100.254
```

### Etat final

`R1` est administrable en SSH par cle publique.

### Captures associees


