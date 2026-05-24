
## I. Présentation

**Vous souhaitez apprendre à utiliser Fail2ban? Cet article est là pour vous guider dans l'installation et la configuration de Fail2ban pour protéger vos services contre certaines attaques et comportements malveillants.**

Fail2ban est un outil open source conçu pour protéger vos serveurs de certaines attaques en se basant sur les journaux d’évènements. Très simple à installer et configurer, il est aussi hautement personnalisable, ce qui permet de l’intégrer à de nombreux projets, contextes et infrastructures.

Son principe est simple: **il surveille en temps réel les logs locaux de vos services** ([SSH](https://www.it-connect.fr/cours/comprendre-et-maitriser-ssh/ "SSH"), Apache, FTP, etc.)**, détecte les tentatives d’intrusion répétées, et bloque automatiquement les adresses IP suspectes.**

Il permet donc d’exposer plus sereinement des services sur le réseau ou Internet.

*Version originale de cet article: 26 août 2013.*

## II. Surface d’attaque: pourquoi utiliser Fail2ban?

### A. La surface d’attaque des services exposés

Chaque **service accessible depuis un réseau**, et encore plus sur Internet (SSH, web, FTP, etc.), représente une **porte d’entrée potentielle** pour un attaquant. Par exemple:

- Un serveur SSH exposé peut être ciblé par des bots tentant des milliers de combinaisons de mots de passe.
- Un formulaire de connexion web mal sécurisé peut être la cible de tentatives de brute-force.
- Un service FTP ouvert peut attirer des scans automatisés à la recherche de vulnérabilités connues.

**Sans protection, ces attaques augmentent considérablement le risque de compromission de votre système.**

> Imaginez une porte d’entrée avec une serrure basique. Si quelqu’un essaie 100 clés différentes, il finira par entrer. Fail2ban agit comme un système d’alarme qui verrouille la porte après 3 tentatives infructueuses.

Si vous souhaitez aller plus loin dans cette notion de surface d’attaque et de tentatives répétées (brute force), je vous invite à consulter nos différents articles:

- [IT-Connect.fr - Analyse et réduction de la surface d’attaque](https://www.it-connect.fr/analyse-et-reduction-de-la-surface-dattaque/)
- [IT-Connect.fr - L’essentiel sur les attaques brute force: principes, types d’attaques et mesures de protection](https://www.it-connect.fr/attaques-brute-force-principes-et-mesures-de-protection/)

### B. Comment Fail2ban réduit-il ce risque?

Fail2ban fonctionne de la manière suivante:

![Fonctionnement de Fail2ban.](https://www.it-connect.fr/wp-content-itc/uploads/2025/11/fail2Ban-fonctionnement-protection-service-reseau.png.webp)

Fonctionnement de Fail2ban.

Ainsi**,** même si un attaquant dispose d’un dictionnaire de mots de passe, il ne pourra pas les tester indéfiniment, car **son adresse IP sera bannie rapidement**. Nous allons aussi voir que les actions réalisables par Fail2ban vont au-delà d’un simple bannissement.  

## III. Fail2ban en pratique: comprendre les principaux concepts

Pour comprendre rapidement et facilement Fail2ban, nous allons maintenant aborder quelques-uns des **principaux concepts liés à son fonctionnement et sa configuration**.

### A. Les "prisons" (jails)

Une **prison** (ou *jail* en anglais) est une règle de surveillance appliquée à un service spécifique (SSH, Apache, etc.). Chaque prison définit:

- **Le service à protéger** (ex: SSH, port TCP/22).
- **Le fichier de log à surveiller** (ex: `/var/log/auth.log` pour SSH).
- **Le nombre maximal de tentatives autorisées** avant blocage (ex: 5 échecs).
- **La durée du blocage** (ex: 10 minutes).

Nous allons détailler l’ **installation et la configuration de fail2ban** un peu plus tard dans ce tutoriel, mais pour vous donner une idée, voici un exemple de configuration d’une prison:

```
# Exemple de prison (jail) Fail2ban pour le service SSH
[sshd]
enabled  = true
port     = ssh
filter   = sshd
logpath  = /var/log/auth.log
maxretry = 5
bantime  = 600
```

### B. Les filtres (filters)

Les filtres sont des **règles de détection** écrites en expressions régulières. Elles permettent à Fail2ban d’identifier les lignes suspectes dans les logs.

- Exemple: une ligne comme *Failed password for root from 192.168.1.100* dans `/var/log/auth.log` déclenchera le filtre `sshd`.

Heureusement, Fail2ban est **installé par défaut avec une grande quantité de filtres prêts à l’emploi**, notamment pour les services les plus courants.

### C. Les actions

Lorsqu’une IP est bloquée, Fail2ban peut:

- **Ajouter une règle de pare-feu** (iptables/nftables) pour interdire tout trafic depuis cette IP.
- **Envoyer une alerte par e-mail** à l’administrateur.
- **Exécuter un script personnalisé** (ex: notifier un système de monitoring).

Vous êtes libres de créer toutes les actions que vous souhaitez, il faudra alors passer par du scripting [bash](https://www.it-connect.fr/cours-tutoriels/administration-systemes/scripting/bash/ "bash"). Cela rend l'outil hautement personnalisable.

Maintenant que nous connaissons ces différents éléments, nous pouvons passer à la pratique.

## IV. Installation et configuration de Fail2ban

### A. Installation du paquet Fail2ban

Le paquet Fail2ban est présent dans tous les dépôts des principales distributions UNIX. Nous pouvons donc l’installer via les gestionnaires de paquets habituels:

```
# Sous Debian et dérivés 
sudo apt update
sudo apt install fail2ban

# Pour Fedora/RHEL 8+
sudo dnf update
sudo dnf install fail2ban

# ou pour les anciennes versions (CentOS 7, RHEL 7)
sudo yum update
sudo yum install fail2ban
```

Cette commande vous permettra de confirmer que le service est bien installé et lancé:

```
# Vérifié l'état du service fail2ban
$ systemctl status fail2ban
● fail2ban.service - Fail2Ban Service
     Loaded: loaded (/usr/lib/systemd/system/fail2ban.service; enabled; preset:>
     Active: active (running) since Fri 2025-11-21 20:18:59 CET; 29s ago
       Docs: man:fail2ban(1)
   Main PID: 1162 (fail2ban-server)
      Tasks: 5 (limit: 4603)
     Memory: 33.5M (peak: 34.0M)
        CPU: 261ms
     CGroup: /system.slice/fail2ban.service
             └─1162 /usr/bin/python3 /usr/bin/fail2ban-server -xf start
```

Passons à présent à la prise en main de la configuration de Fail2Ban.

### B. Configuration initiale

Les fichiers de configuration de Fail2Ban se trouvent dans le dossier `/etc/fail2ban/`:

```
# Arborescence de la configuration fail2ban
$ tree
.
├── action.d
│         ├── abuseipdb.conf
│         ├── apf.conf
│         ├── apprise.conf
│         ├── blocklist_de.conf
│         ├── [...]
├── fail2ban.conf
├── fail2ban.d
├── filter.d
│         ├── 3proxy.conf
│         ├── apache-auth.conf
│         ├── apache-badbots.conf
│         ├── apache-botsearch.conf
│         ├── apache-common.conf
│         ├── [...]
├── jail.conf
├── jail.d
│         └── defaults-debian.conf
├── paths-arch.conf
├── paths-common.conf
├── paths-debian.conf
└── paths-opensuse.conf
```

Son organisation est assez claire et gérée de façon **modulaire**. Chaque fichier `.conf` situé dans les dossiers `jail.d`, `filter.d` et `action.d` sera lu et interprété au lancement de Fail2ban. Vous pourrez donc y rajouter vos propres configurations.

Le fichier de configuration principal de Fail2ban est le suivant: `/etc/fail2ban/jail.conf`. Il s’agit d’un fichier d’une taille assez conséquente qui est déjà bien rempli. Je vous encourage à **prendre le temps de parcourir ses différentes directives** pour vous familiariser avec l’outil.

Comme son nom l’indique, son rôle est de **faire le lien entre les filtres et actions pour créer des prisons (*jail*)**:

![Extrait du fichier /etc/fail2ban/jail.conf](https://www.it-connect.fr/wp-content-itc/uploads/2025/11/fail2Ban-exemple-configuration-jails-800x853.png.webp)

Extrait du fichier /etc/fail2ban/jail.conf

Par défaut, nous voyons par exemple une pré-configuration pour différents services SSH/HTTP qui pointent vers leurs fichiers de logs respectifs. **Prenez notamment le temps de consulter les paramètres par défaut** définis dans ce fichier, comme le temps de ban par défaut, qui peut être surchargé pour chaque prison que nous allons créer:

![Paramètres par défaut importants du fichier /etc/fail2ban/jail.conf](https://www.it-connect.fr/wp-content-itc/uploads/2025/11/fail2Ban-exemple-configuration-jails-par-defaut.png.webp)

Paramètres par défaut importants du fichier /etc/fail2ban/jail.conf

Non voyons, par exemple le **`bantime`**, **`findtime `** et **`maxretry`**. Quel que soit le service lié à une prison, Fail2ban **cherchera 5 occurrences d'une même expression régulière pour une même IP dans un créneau de 10 minutes**. Il déclenchera ensuite un bannissement de cette adresse IP pour 10 minutes.

**Bonnes pratiques**: ne modifiez pas ce fichier directement. Créez plutôt un fichier `/etc/fail2ban/jail.d/myconf.conf` pour surcharger les paramètres ou les prisons souhaitées.

Nous allons, dans ce fichier de configuration personnalisé**, créer une prison pour le service SSH avec les caractéristiques suivantes**:

- Service SSH (fichier `/var/log/auth.log`)
- Nombre d’essais pour déclencher l’action: **3 authentification infructueuses**
- Action: bannissement de l’IP pendant **1 heure**

Exemple de configuration personnalisée (`/etc/fail2ban/jail.d/myconf.conf`):

```
# Jail SSH
[ssh]
enabled  = true
bantime  = 1h
maxretry = 3
port     = ssh
filter   = sshd
logpath  = /var/log/auth.log
```

Notre prison sera identifiée par son nom ` [ssh]`. Nous spécifions ensuite le temps de bannissement, le nombre d’essais maximal toléré, le port (abrégé ici par le nom du service), le filtre associé (ici, un filtre par défaut que vous retrouverez dans `/etc/fail2ban/filter.d/sshd.conf`) et le chemin vers le fichier de log.

> Si le port d'écoute de votre service n'est pas celui par défaut, il peut être précisé directement en étant précédé d'une virgule (ex: "port =ssh, 2569,..."). Cela sera utile pour la mise en place des règles de bannissement via nftables/iptables.

**Pourquoi nous ne spécifions pas d’action?**

Dans Fail2ban, l’action par défaut est déjà définie globalement dans le fichier `/etc/fail2ban/jail.conf`. Cette action est généralement `iptables-multiport` qui bloque l’IP via le pare-feu:

![Action par défaut paramétrée dans le fichier /etc/fail2ban/jail.conf](https://www.it-connect.fr/wp-content-itc/uploads/2025/11/fail2Ban-exemple-configuration_default_action-800x280.png.webp)

Action par défaut paramétrée dans le fichier /etc/fail2ban/jail.conf

Lorsque vous maitriserez pleinement la configuration de Fail2ban, vous pourrez modifier cette action, voir en créer de nouvelles.

**Si vous êtes curieux et souhaitez savoir exactement comment sont configurées les actions et filtres par défaut auxquels nous faisons ici appel, je vous encourage à consulter le contenu des fichiers suivants:**

- `/etc/fail2ban/filter.d/sshd.conf`
- `/etc/fail2ban/action.d/iptables-multiport.conf`
- `/etc/fail2ban/action.d/iptables.conf`

Redémarrons à présent Fail2Ban pour appliquer notre nouvelle prison:

```
# Redémarrage du service fail2ban
sudo systemctl restart fail2ban
```

### C. Vérifier l’état des prisons

Pour savoir quelles sont les prisons actives et opérationnelles, il nous faut utiliser la commande suivante:

```
# Récupérer la liste des prisons actives
$ sudo fail2ban-client status
Status
|- Number of jail:    2
\`- Jail list:    ssh, sshd
```

Ici, nous en avons 2: la prison `sshd ` par défaut, et la nôtre `ssh`. Pour que cela soit plus propre, nous pourrons ensuite désactiver la prison par défaut `[sshd]` dans le fichier `/etc/fail2ban/jail.d/defaults-debian.conf`:

```
$ cat jail.d/defaults-debian.conf 
[DEFAULT]
banaction = nftables
banaction_allports = nftables[type=allports]
backend = systemd

[sshd]
enabled = false
```

Nous pourrons ensuite à nouveau redémarrer notre service Fail2ban.

## V. Tester et valider la protection

### A. Simuler une attaque

À présent, nous allons **simuler un comportement malveillant** en lançant 5 tentatives de connexion SSH sur notre serveur avec un mot de passe incorrect. Cela peut être fait manuellement depuis une autre machine du réseau local (ou VM):

```
# "bruteforce" manuel de notre machine d'attaque vers notre machine protégée
ssh root@votre_serveur  # <saisie d’un mauvais mot de passe>
ssh root@votre_serveur  # <saisie d’un mauvais mot de passe>
ssh root@votre_serveur  # <saisie d’un mauvais mot de passe>
ssh root@votre_serveur  # <saisie d’un mauvais mot de passe>
ssh root@votre_serveur  # <saisie d’un mauvais mot de passe>
```

Mais sachez que **lors d’une cyberattaque réelle**, un attaquant va utiliser des **outils automatisés pour effectuer des milliers de tentatives par minute**! Par exemple via l’outil **`[nmap](https://www.it-connect.fr/cours/nmap-cartographie-reseau-scan-de-vulnerabilites/ "nmap") `** :

```
# Utilisation de nmap pour réaliser un attaque par bruteforce automatisée sur le service SSH
$ nmap -p 22 --script ssh-brute --script-args userdb=$USERDB,passdb=$PASSDB 192.168.1.17
Starting Nmap 7.93 ( https://nmap.org ) at 2025-11-21 21:23 CET
NSE: [ssh-brute] Trying username/password pair: root:root
NSE: [ssh-brute] Trying username/password pair: admin:admin
NSE: [ssh-brute] Trying username/password pair: test:test
NSE: [ssh-brute] Trying username/password pair: guest:guest
NSE: [ssh-brute] Trying username/password pair: info:info
```

---


### B. Constater le blocage

De retour sur notre serveur protégé par Fail2ban, nous pouvons à présen **t vérifier que l’adresse IP de notre système d’attaque est bloquée**. D’abord par ce que vos 4ᵉ et 5ᵉ tentatives n’ont certainement pas abouties:

```
$ ssh root@192.168.1.17
ssh: connect to host 192.168.1.17 port 22: Connection refused
$ ssh root@192.168.1.17
ssh: connect to host 192.168.1.17 port 22: Connection refused
```

Puis, via la commande Fail2ban nous permettant d'obtenir le **statut de notre prison**:

```
# Récupérer le status d'une prison Fail2ban précise
$ sudo fail2ban-client status ssh
Status for the jail: ssh
|- Filter
|  |- Currently failed:    0
|  |- Total failed:    3
|  \`- Journal matches:    _SYSTEMD_UNIT=sshd.service + _COMM=sshd
\`- Actions
   |- Currently banned:    1
   |- Total banned:    1
   \`- Banned IP list:    192.168.1.16
```

Nous savons ici que le service SSH a reçu **trois tentatives infructueuses d’authentification**, et que l’adresse IP `192.168.1.16` a été bannie.

Enfin, nous pouvons aussi consulter **les journaux d’évènements de Fail2ban** afin d’avoir un suivi plus détaillé, et même en temps réel, des évènements: `/var/log/fail2ban.log`

```
# Contenu récent des journaux d'évènements de fail2ban
$ sudo tail -f /var/log/fail2ban.log 
2025-11-21 20:38:46,590 fail2ban.jail           [18682]: INFO    Jail 'ssh' started
2025-11-21 20:38:46,590 fail2ban.filtersystemd  [18682]: INFO    [ssh] Jail is in operation now (process new journal entries)
2025-11-21 21:08:16,452 fail2ban.filter         [18682]: INFO    [ssh] Found 192.168.1.16 - 2025-11-21 21:08:16
2025-11-21 21:08:21,129 fail2ban.filter         [18682]: INFO    [ssh] Found 192.168.1.16 - 2025-11-21 21:08:20
2025-11-21 21:08:24,433 fail2ban.filter         [18682]: INFO    [ssh] Found 192.168.1.16 - 2025-11-21 21:08:24
2025-11-21 21:08:25,225 fail2ban.actions        [18682]: NOTICE  [ssh] Ban 192.168.1.16
```

Le comportement de Fail2ban est ici bien visible: il a trouvé trois matchs pour son filtre pour les logs SSH (expression régulière), tous liés à une même adresse IP, qu'il a ensuite décidé de bannir. Nous avons ici les détails de l’attaque, **heure, adresse IP, service**, puis la **décision de Fail2ban concernant le bannissement de l’adresse IP.** Lorsqu’une adresse IP est retirée du pool des adresses bloquées, cette décision est également journalisée:

```
2025-11-21 21:24:28,409 fail2ban.actions        [19341]: NOTICE  [ssh] Unban 192.168.1.16
```

Nous venons ici de voir la configuration simple d’une prison SSH avec travers les principaux paramètres utiles. Mais Fail2ban est très complet et **peut couvrir de nombreux services**, même avec ses règles et ses filtres par défaut. Je vous encourage à **consulter toute sa configuration et notamment les différentes actions possibles** (`/etc/fail2ban/action.d/`).

> Vous pourrez aussi constater la présence de la règle de blocage sur votre gestion de règles de pare-feu (**iptables -L** ou **nft list ruleset**). Attention! Même si votre configuration Fail2Ban mentionne **iptables**, il est probable que ce soit **nft** (nftables) qui soit en fait utilisé en arrière-plan, notamment sur les systèmes récents.

## VI. Conclusion

**Fail2ban est un outil simple mais puissant pour automatiser la protection de vos services exposés.** En quelques minutes, vous réduisez significativement le risque d’intrusion par force brute, sans effort manuel.

Il faut cependant aussi être conscient **des limites de cet outil**, il ne s’agit pas d’un système qui va bloquer 100% des attaques possibles. On parle notamment des failles 0-Day ou de tout autre type d’attaque qui, soit ne génère pas les logs nécessaires à leur blocage, soit ne se base pas sur des *patterns* connus. Égarement, la **génération d’actions et de filtres qui n’existent pas déjà** dans l’outil nécessite de **bonnes compétences système et réseau**, mais aussi des **compétences en scripting**.

**Et vous, utilisez-vous déjà Fail2ban? Quelles prisons avez-vous configurées? Partagez vos retours en commentaires!**

## FAQ

#### Peut-on utiliser Fail2ban sur Windows?

Non, **Fail2ban est conçu pour les systèmes UNIX/Linux** (Debian, Ubuntu, CentOS, etc.) et dépend d’outils comme iptables/nftables, absents sur Windows.

#### Fail2ban est-il efficace contre les attaques DDoS?

Non, Fail2ban **n’est pas conçu pour les DDoS** (*Distributed Denial of Service*). Il bloque des IP individuellement, pas des flux massifs.

**Solutions complémentaires**:

- Utilise un **CDN** (Cloudflare, Akamai) pour absorber le trafic.
- Configure des règles de rate-limiting côté pare-feu ou load balancer.

#### Quelles sont les alternatives à Fail2ban?

Fail2ban est l’outil le plus connu pour bloquer les attaques par force brute, mais il existe d’autres solutions:

- **DenyHosts**: similaire à Fail2ban, mais spécifique à SSH.
- **CrowdSec**: outil moderne, collaboratif et open source, qui partage des listes d’IP malveillantes entre utilisateurs (consultez **[nos articles sur CrowdSec](https://www.it-connect.fr/?s=CrowdSec "nos articles sur CrowdSec")**)