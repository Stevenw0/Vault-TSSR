# Présentation des serveurs de mail

Les serveurs de messagerie, appelés MTA (Mail Transfer Agent), assurent l’envoi et la réception des courriers électroniques à travers les réseaux IP. Ils gèrent les courriers électroniques pour un ou plusieurs domaines de messagerie. Les MTA communiquent entre eux par le protocole SMTP.

Pour la LPIC-2, c’est Postfix qu’il faut savoir utiliser.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Le-protocole-SMTP "Le-protocole-SMTP")Le protocole SMTP

Le protocole SMTP (_Simple Mail Transfer Protocol_ et ses _extensions_, ESMTP, _Extended SMTP_), défini dans la RFC 5321, est utilisé pour transférer des courriers électroniques vers des serveurs de messagerie.

Il est utilisé par les clients de messagerie (MUA, _Mail User Agent_) pour confier un message à leur serveur de messagerie, et par les serveurs de messagerie (MTA, _Mail Transfer Agent_) entre eux, pour acheminer le message jusqu’au serveur de messagerie du destinataire du message.

L’acheminement du message vers le serveur de messagerie destinataire s’appuie sur le DNS et ses enregistrements de ressources de type MX (_Mail eXchanger_).

Une fois parvenu au serveur de messagerie du destinataire, le message peut être consulté directement sur le serveur, ou via un agent de distribution (MDA, _Mail Delivery Agent_) et un protocole de gestion de boîte e-mail (POP3, IMAP4).

**Syntaxe du protocole**

SMTP est un protocole client-serveur, qui s’appuie sur **TCP** pour échanger des messages au format texte. Le serveur écoute sur le port TCP bien connu **25**.

De plus en plus souvent, la communication entre le client de messagerie et le serveur de messagerie passe par un agent de soumission de courrier (MSA, _Mail Submission Agent_), via le port 587 ou 465, et une authentification SMTP.

Les différents types de messages sont identifiés par des mots-clés et des identifiants numériques.

On peut tester la communication avec un serveur SMTP en se connectant en TCP sur le port 25, avec un outil client comme Telnet ou netcat.

**Résumé du vocabulaire spécifique** :

- MUA, Mail User Agent : un client email comme Thunderbird, Outlook, RoundCube, …
- MSA, Mail Submission Agent : logiciel serveur qui envoie des mails via SMTP
- MTA, Mail Transfer Agent : logiciel serveur qui reçoit des mails via SMTP (ex : Postfix, Exim, Sendmail, …)
    - Souvent un même logiciel fait à la fois MTA et MSA
- MX, Mail eXchanger : enregistrement DNS indiquant quels serveurs/MTA gèrent les emails pour un nom de domaine
- MDA, Mail Delivery Agent : logiciel serveur qui permet la consultation des mail via POP3/IMAP par un client/MUA

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Installation-de-postfix "Installation-de-postfix")Installation de postfix

```
sudo apt install -y postfix mailutils
```

Réponses aux questions de l’assistant d’installation de Postfix :

- Type de configuration : “Local only”/“Local uniquement”
- “Mail name” : deby.stage.local

`postfix` lance tout d’abord un service maître, `master`, qui sera chargé des processus secondaires `smtpd`, `pickup` et `nqmgr`.

Sur certaines distributions il faut modifier la configuration par défaut qui utilise la suite sendmail. Par exemple sur Red Hat vous devez indiquer d’utiliser postfix à la place de sendmail avec la commande alternatives.

```
# alternatives --set mta /usr/sbin/sendmail.postfix
```

La commande `postfix` permet d’interagir avec le serveur Postfix (nécessite les droits root).

Syntaxe :

```
sudo postfix <action>
```

Principales actions :

|Action|Effet|
|---|---|
|`status`|État du service.|
|`stop`|Arrête le serveur.|
|`start`|Démarre le serveur.|
|`check`|Vérifie la configuration du service.|
|`reload`|Recharge la configuration.|
|`abort`|Force l’arrêt brutal du service.|
|`flush`|Tente de livrer tous les e-mails en instance.|

**Remarque** : on peut aussi effectuer une partie de ces actions avec `systemctl status|start|stop|restart|reload postfix.service` mais le service systemd `postfix` et ses instances `postfix@X` ne restent pas toujours dans des états cohérents quand on mélange des commandes `sudo postfix <action>` et `sudo systemctl <action> postfix.service`  
Mieux vaut donc privilégier les commandes `sudo postfix <action>`.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Session-de-communication-SMTP-manuelle "Session-de-communication-SMTP-manuelle")Session de communication SMTP manuelle

Adapté de [https://learning.lpi.org/en/learning-materials/102-500/108/108.3/108.3_01/#sec.108.3_01-LMTA](https://learning.lpi.org/en/learning-materials/102-500/108/108.3/108.3_01/#sec.108.3_01-LMTA)

On envoie des commandes SMTP manuellement avec netcat (les commandes tapées sont précédées de `-->`) :

```
$ nc localhost 25
220 deby.stage.local ESMTP Postfix (Debian/GNU)
--> HELO localhost
250 deby.stage.local
--> MAIL FROM: debian@localhost
250 2.1.0 Ok
--> RCPT TO: root@localhost
250 2.1.5 Ok
--> DATA
354 End data with <CR><LF>.<CR><LF>
Subject: Test envoi mail local

Salut root, c'est un utilisateur sympa qui t'envoie un mail. Cool non ?
.
250 2.0.0 Ok: queued as 6BBEF100650
--> QUIT
221 2.0.0 Bye
```

Une fois la connexion établie, le MTA distant s’identifie et est alors prêt à recevoir des commandes SMTP.

La première commande SMTP dans l’exemple, `HELO localhost`, indique `localhost` comme initiateur de l’échange.

La commande `ehlo` peut être utilisée pour demander au serveur d’afficher ses extensions SMTP supportées.

Les deux commandes suivantes, `MAIL FROM: ubuntu@localhost` et `RCPT TO: root@localhost`, indiquent l’expéditeur et le destinataire.

> Le `@localhost` peut être omis.

Le message électronique lui-même commence après la commande `DATA` et se termine par un point sur une ligne seul.

Pour ajouter un champ de sujet à l’e-mail, `Subject:` doit être sur la première ligne après la commande `DATA`, comme montré dans l’exemple. Lorsque le champ sujet est utilisé, il doit y avoir une ligne vide le séparant du contenu de l’e-mail. La commande `QUIT` termine la connexion avec le MTA.

On peut ensuite aller récupérer le message dans la boîte appropriée (en tant que root) :

```
# cat /var/mail/root
From debian@localhost  Fri Oct 24 16:24:32 2025
Return-Path: <debian@localhost>
X-Original-To: root@localhost
Delivered-To: root@localhost
Received: from localhost (localhost [127.0.0.1])
        by deby.stage.local (Postfix) with ESMTP id 6BBEF100650
        for <root@localhost>; Fri, 24 Oct 2025 16:20:10 +0200 (CEST)
Subject: Test envoi mail local
Message-Id: <20251024142026.6BBEF100650@deby.stage.local>
Date: Fri, 24 Oct 2025 16:20:10 +0200 (CEST)
From: debian@localhost

Salut root, c'est un utilisateur sympa qui t'envoie un mail. Cool non ?
```

Le message contient l’email brut envoyé par `ubuntu` ainsi que les en-têtes ajoutés par le MTA.

L’en-tête `Received:` indique les serveurs d’envoi et de réception ; par défaut les MTA acceptent uniquement les messages pour les destinataires locaux (utilisateurs sur le système sur lequel ils sont installés) ; une erreur se produit autrement.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Configuration-de-base-de-Postfix "Configuration-de-base-de-Postfix")Configuration de base de Postfix

La configuration de Postfix accepte de très nombreux paramètres et options, couvrant un large ensemble de fonctionnalités. Cependant, pour une mise en œuvre élémentaire, elle est relativement simple, ne nécessitant de spécifier que quelques paramètres, les autres ayant le plus souvent des valeurs par défaut adéquates.

La configuration est située dans `/etc/postfix/main.cf` ou tout autre répertoire dans `/etc/postfix/*.d`. On modifie les valeurs soit directement, soit à l’aide de la commande `postconf`.

Les paramètres de base à spécifier sont les suivants :

```
myorigin = domaine_origine  
mydestination = domaine_destination  
relayhost = relais_MTA
mynetworks = IdReseauCIDR [...]  
```

Avec :

|Option|Signification|
|---|---|
|`myorigin`|Domaine qui sera spécifié dans l’adresse émetteur d’un message (défaut : le domaine DNS du serveur).|
|`mydestination`|Domaines de destination des messages gérés par le serveur, séparés par une virgule (défaut : le domaine DNS du serveur).|
|`relayhost`|Nom ou adresse du serveur de relais SMTP à utiliser pour les messages à transmettre à l’extérieur.|
|`mynetworks`|Identifiants réseau au format CIDR. Seules les demandes de relais venant de ces réseaux sont acceptées (défaut : les réseaux des interfaces réseau du serveur).|

De nombreux fournisseurs d’accès bloquent le trafic SMTP sortant de leurs réseaux s’il n’a pas été émis par leurs MTA. Le paramètre `relayhost` permet donc de transférer à leur MTA les messages à destination de l’extérieur.

Par défaut, les fichiers de travail et files d’attente des e-mails reçus sont stockés dans le fichier `/var/spool/postfix/`. On peut spécifier un autre emplacement, via la `directive queue_directory`.

Les fichiers d’e-mail sont stockés par défaut dans le répertoire `/var/mail`. On peut spécifier un autre emplacement, via la directive `mail_spool_directory`.

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#postconf "postconf")postconf

La commande `postconf` permet d’interagir avec le fichier de configuration.

Seule, elle affiche l’ensemble des paramètres actifs du serveur Postfix en cours d’exécution.

Avec l’option `-n`, elle affiche uniquement les paramètres définis dans le fichier de configuration du serveur Postfix en cours d’exécution.

Suivie d’une directive de configuration, elle en affiche la valeur :

```
$ sudo postconf myorigin
myorigin = /etc/mailname
```

On peut modifier la configuration en utilisant la syntaxe `directive=valeur` ou `"directive = valeur"`. Exemples :

Domaine d’origine des mails qu’on envoie :

```
sudo postconf myorigin=mondomaine.org
```

De quels domaines recevoir le courrier :

```
sudo postconf mydestination=mondomaine.org
```

De quels clients relayer le courrier :

```
sudo postconf "mynetworks = 192.168.56.0/24, 127.0.0.1"
```

Sur quelles interfaces écouter :

```
sudo postconf "inet_interface = all"
```

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Modifications "Modifications")Modifications

Adaptations de la conf :

Correction de `mydestination` :

```
sudo postconf mydestination='$myhostname, deby.stage.local, localhost'
```

Changement du format de stockage (mbox -> maildir) :

```
sudo postconf home_mailbox=mails/
```

Modification de la bannière d’accueil :

```
sudo postconf smtpd_banner='$myhostname ESMTP Service de messagerie'
```

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#V%C3%A9rification "Vérification")Vérification

Vérification de la configuration :

```
sudo postfix check && echo "OK" || echo "Problème détecté !"
```

On peut alors recharger la configuration :

```
sudo postfix reload
```

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Gestion-des-comptes-de-messagerie "Gestion-des-comptes-de-messagerie")Gestion des comptes de messagerie

Un MTA doit gérer les comptes de messagerie de son domaine de messagerie, et donc disposer de la liste des utilisateurs et de leurs adresses e-mail appartenant à ce domaine de messagerie. Pour ce faire, les serveurs MTA peuvent s’appuyer sur les informations gérées par différentes sources : base de comptes utilisateurs locale (`/etc/passwd`, `/etc/shadow`, `/etc/group`), annuaire LDAP, serveur NIS, base de données SQL, etc.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Alias-et-redirections "Alias-et-redirections")Alias et redirections

Le fichier `/etc/aliases`, utilisé par défaut par Postfix (confirmation via `grep aliases /etc/postfix/main.cf`) permet de définir des alias de redirection pour les comptes locaux, qu’ils soient réels ou virtuels.

Sa syntaxe est la suivante :

```
compte_local: compte_redirection, adresse_email, ...
```

Contenu par défaut :

```
# See man 5 aliases for format
postmaster:    root
```

On peut ainsi définir des “comptes virtuels” dont les messages reçus seront automatiquement transférés vers les cibles précisées dans la partie de droite :

```
dsi: damien, aurelie
compta: mickael
```

On peut aussi rediriger les emails d’un véritable compte local vers un autre compte ou une adresse externe :

```
root: damien, dsi@dawan.fr
```

Pour que l’envoi vers une adresse externe fonctionne il faut que le serveur mail soit correctement configuré pour cela.

Après modification du fichier `/etc/aliases`, il faut mettre à jour le fichier base de données correspondant par la commande `postalias` ou son raccourci `newaliases`.

`postalias` lit le fichier source passé en argument et génère un fichier base de données pour Postfix, par défaut `/etc/aliases.db` :

```
sudo postalias /etc/aliases
```

`newaliases` cible directement `/etc/aliases` et ainsi plus simple à utiliser.

Ce n’est que suite à cette opération que les mails envoyés aux comptes spécifiés dans le fichier d’alias seront redirigés vers les comptes cibles.

Les utilisateurs non-privilégiés peuvent aussi configurer la redirection des emails qui leur sont adressés en plaçant un fichier `~/.forward` dans leur répertoire personnel référençant une liste d’utilisateurs ou d’adresses.

Lorsque l’utilisateur reçoit un email, il est transmis (_forward_) à tous les destinataires indiqués dans ce fichier.

```
$ cat /home/mdp/.forward
debian
```

Cela indique que les mails envoyés à l’utilisateur `mdp` seront automatiquement transférés à l’utilisateur `debian`.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Mise-en-place-de-Dovecot "Mise-en-place-de-Dovecot")Mise en place de Dovecot

Installation :

```
sudo apt install -y dovecot-imapd
```

Configuration :

- Fichier principal : `/etc/dovecot/dovecot.conf`
- Fichiers connexes : `/etc/dovecot/conf.d/[0-9]{2}-.*\.conf`

Configuration pour le format mailDir :

Dans le fichier `/etc/dovecot/conf.d/10-mail.conf` changer la valeur de la directive `mail_location`

```
mail_location = maildir:~/mails
```

Déconfiguration pour autoriser l’authentification PLAIN sur connexions non chiffrées (!) :

Dans le fichier `/etc/dovecot/conf.d/10-auth.conf` mettre à `no` le paramètre `disable_plaintext_auth`.

Pour vérifier la syntaxe on peut utiliser

```
sudo dovecot -n
```

Rechargement de la conf Dovecot :

```
sudo dovecot reload
```

Exemple d’une session telnet IMAP (les commandes tapées sont précédées de `-->`) :

```
$ telnet localhost 143
Trying ::1...
Connected to localhost.
Escape character is '^]'.
* OK [CAPABILITY IMAP4rev1 SASL-IR LOGIN-REFERRALS ID ENABLE IDLE LITERAL+ STARTTLS AUTH=PLAIN] Dovecot (Debian) ready.
--> aaa login stagiaire azerty
aaa OK [CAPABILITY IMAP4rev1 SASL-IR LOGIN-REFERRALS ID ENABLE IDLE SORT SORT=DISPLAY THREAD=REFERENCES THREAD=REFS THREAD=ORDEREDSUBJECT MULTIAPPEND URL-PARTIAL CATENATE UNSELECT CHILDREN NAMESPACE UIDPLUS LIST-EXTENDED I18NLEVEL=1 CONDSTORE QRESYNC ESEARCH ESORT SEARCHRES WITHIN CONTEXT=SEARCH LIST-STATUS BINARY MOVE SNIPPET=FUZZY PREVIEW=FUZZY PREVIEW STATUS=SIZE SAVEDATE LITERAL+ NOTIFY SPECIAL-USE] Logged in
--> aaa select inbox
* FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
* OK [PERMANENTFLAGS (\Answered \Flagged \Deleted \Seen \Draft \*)] Flags permitted.
* 0 EXISTS
* 0 RECENT
* OK [UIDVALIDITY 1761319827] UIDs valid
* OK [UIDNEXT 1] Predicted next UID
aaa OK [READ-WRITE] Select completed (0.014 + 0.000 + 0.013 secs).
--> aaa check
aaa OK Check completed (0.015 + 0.000 + 0.014 secs).
--> aaa fetch 1 full
...
--> aaa logout
* BYE Logging out
aaa OK Logout completed (0.001 + 0.000 secs).
Connection closed by foreign host.
```

[https://www.mybluelinux.com/test-imap-with-telnet/#imap-commands-format](https://www.mybluelinux.com/test-imap-with-telnet/#imap-commands-format)

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Installation-du-webmail-Rainloop "Installation-du-webmail-Rainloop")Installation du webmail Rainloop

**Objectif :** Arriver directement sur la page de connexion de Rainloop lorsque l’on se connecte sur `http://webdemo/rainloop/`.

Sur `deby`, installer les modules PHP nécessaires à Rainloop :

```
sudo apt install -y php-curl php-xml
```

Redémarrer PHP-FPM :

```
sudo systemctl restart php8.2-fpm
```

Télécharger l’archive de Rainloop :

```
wget https://www.rainloop.net/repository/webmail/rainloop-latest.zip -P /tmp/
```

> Voir [cette page](https://www.rainloop.net/docs/installation/) pour les méthodes alternatives d’installation.

Extraire l’archive zip dans le sous-répertoire adéquat de `/var/www/webdemo/` (soit la racine de l’hôte virtuel `webdemo` d’Apache) :

```
sudo apt install unzip
sudo unzip /tmp/rainloop-latest.zip -d /var/www/webdemo/rainloop
```

> unzip s’occupe de créer le répertoire `/var/www/webdemo/rainloop`, qui contiendra ensuite deux dossiers `data` et `rainloop` ainsi qu’un fichier `index.php`.

Il est nécessaire de changer le propriétaire du répertoire et de son contenu pour qu’Apache (qui fonctionne en tant qu’utilisateur `www-data`) puisse y écrire :

```
sudo chown -R www-data: /var/www/webdemo/rainloop
```

À ce stade, vous devriez pouvoir accéder à la page de connexion administrateur de rainloop en allant sur [http://webdemo/rainloop/?admin](http://webdemo/rainloop/?admin) :

![](https://hedgedoc.dawan.fr/uploads/upload_c71700063cdc999ac1568df14a34e9d3.png)

Se connecter avec les identifiants `admin / 12345`.

Une fois connecté à l’interface d’administration :

- configurer l’interface en français (deux paramètres)
- cliquer dans le menu à gauche sur “Domaines”, puis sur “Ajouter un domaine”
- entrer `deby.stage.local` comme nom, `deby.stage.local` dans les champs “Serveur” avec les paramètres par défaut
- **cocher “Utiliser l’identifiant court”**

![](https://hedgedoc.dawan.fr/uploads/323efd2c-2733-4546-a500-d2507d624060.jpeg)  
![](https://hedgedoc.dawan.fr/uploads/ce974ee2-6d8f-4537-97e2-a17ec9056e45.jpeg)

Ouvrir un nouvel onglet et aller à [http://webdemo/rainloop/](http://webdemo/rainloop/) (page de connexion _utilisateur_) :

![](https://hedgedoc.dawan.fr/uploads/a864f994-d492-408e-8962-108d80c169bc.jpeg)

Entrer `stagiaire@deby.stage.local` et le mot de passe du compte (`azerty`)

Les emails reçus par ce compte apparaissent !  
Si besoin d’en envoyer un nouveau, depuis le compte `root` sur `deby` :

```
mail -s "Test rainloop" stagiaire <<< "Contenu de mail de test."
```

**Remarque** : L’envoi depuis rainloop est impossible pour des problèmes d’authentification… À creuser :-)