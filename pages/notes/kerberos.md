
![Authentification Kerberos : principes et fonctionnement](https://www.vaadata.com/blog/wp-content/uploads/2024/10/authentification-kerberos-1024x535.png)

Authentification Kerberos: principes et fonctionnement

Kerberos est un protocole d’authentification notamment utilisé dans un contexte « Microsoft Active Directory ». La méconnaissance de son fonctionnement peut permettre l’introduction de vulnérabilités exploitables par un attaquant.

Dans cet article, nous expliciterons le principe et le fonctionnement du protocole d’authentification Kerberos.

## Guide complet sur le fonctionnement de Kerberos

## Qu’est-ce que Kerberos?

**Kerberos est un protocole d’authentification réseau, principalement utilisé pour permettre aux utilisateurs et aux services d’un réseau de vérifier leur identité.**

Il repose sur le concept de « tiers de confiance », c’est-à-dire qu’il utilise un serveur d’authentification centralisé pour valider les identités et distribuer des tickets qui permettent d’accéder à des services.

Ci-dessous les éléments clés de Kerberos, que nous détaillerons dans les prochaines sections:

- **Authentification centralisée**: le serveur d’authentification, appelé **Key Distribution Center (KDC)**, est responsable de l’authentification des utilisateurs et des services. Cette authentification consiste en deux phases: la phase d’authentification et la phase d’obtention de ticket de service.
- **Tickets**: au lieu de demander aux utilisateurs de soumettre leur mot de passe à chaque service, Kerberos utilise des tickets temporaires qui prouvent qu’un utilisateur a été authentifié. Ces tickets sont chiffrés et sont émis par le KDC.
- **Chiffrement**: Kerberos utilise des techniques de chiffrement pour garantir que les communications entre les clients et les serveurs sont sécurisées. Chaque ticket est chiffré à l’aide d’une clé secrète connue uniquement du KDC et des services concernés.
- **Authentification mutuelle**: dans Kerberos, non seulement le client prouve son identité au serveur, mais le serveur prouve également son identité au client, garantissant ainsi que les deux parties sont authentiques.
- **Fonctionnement dans des environnements distribués**: Kerberos est souvent utilisé dans des environnements où plusieurs systèmes interagissent, comme les réseaux d’entreprise. Il est également utilisé dans certains systèmes d’exploitation comme Windows (via Active Directory) et dans des systèmes Unix/Linux.

## Comment fonctionne l’authentification Kerberos?

### Les différents acteurs d’une authentification Kerberos

Le protocole Kerberos fonctionne selon trois acteurs.

- Le premier acteur est l’autorité centrale qui distribue des tickets. Cette autorité centrale est le « **Key Distribution Center**  » (**KDC**) et a connaissance de tous les secrets du domaine. Dans un contexte « Active Directory » il s’agit de la machine Contrôleur de Domaine (DC).
- Le second acteur est le **client**. Il s’agit de l’entité cherchant à accéder à un service. Le protocole Kerberos exigera du client qu’il s’authentifie avec son secret auprès du KDC avant d’accéder au service voulu.
- Enfin le dernier acteur est le **service**. Il s’agit du service que cherche à interroger le client. Il doit être enregistré auprès du KDC. Le protocole Kerberos lui permet d’obtenir une preuve de l’identité du client validé par le KDC.
![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/kerberos-actors-secrets-1024x506.png)

Illustration des acteurs et de leurs secrets

Déjà au niveau des acteurs et de leur fonctionnement dans un « Active Directory », il y a des notions subtiles qui méritent éclaircissement.

#### Client

Concernant le client, il peut être n’importe quelle entité du domaine disposant d’un secret connu du KDC. Cela inclut tous les utilisateurs et les machines du domaine.

Par ailleurs, n’importe quel client peut faire une demande d’accès Kerberos à n’importe quel service. En outre, le protocole Kerberos n’a pas pour rôle de vérifier si le client est autorisé à accéder au service demandé. Cette responsabilité est laissée au service.

#### Service

Concernant le service, il est une entité du domaine (utilisateur ou machine) qui dispose d’un secret connu du KDC**.**

Il doit disposer également d’un ou plusieurs « **Service Principal Name**  » (**SPN**) enregistré auprès du contrôleur de domaine. Cet enregistrement consiste à inscrire les services proposés sur la propriété « ServicePrincipalName » de l’objet « Active Directory » de l’entité.

- Dans le cas d’une entité machine, le propriétaire de la machine et le compte de la machine sont capable d’inscrire de nouveaux SPN.
- Dans le cas d’une entité utilisateur, seuls les administrateurs ou entités explicitement autorisés à éditer les attributs de l’objet pourront ajouter de nouveaux SPN. Cela exclut l’utilisateur lui-même lorsqu’il possède des privilèges standard.

Le secret associé à ce service est utilisé par le KDC pour fournir un ticket au client. Ce comportement peut avoir à une conséquence sur la confidentialité du secret du service dans certains cas.

#### Key Distribution Center (KDC)

Concernant le KDC, son secret est celui du compte utilisateur par défaut « krbtgt ».

De fait, la sécurité du protocole kerberos repose sur la confidentialité du secret de krbtgt. La fuite de ce secret compromet toute la logique de sécurité du protocole.

### Gestion des tickets Kerberos

Le protocole Kerberos utilise la notion de tickets. Il en existe deux types qui interviennent à des étapes différentes du protocole. Ces tickets sont générés par le KDCà destination du clienten utilisant les secrets à disposition du KDC.

Dans la suite de l’article, la manipulation des tickets va s’illustrer avec les outils « [impacket](https://github.com/fortra/impacket) » et «  [Rubeus](https://github.com/GhostPack/Rubeus) ». Ces deux outils sont très utiles pour effectuer manuellement les étapes individuelles du protocole Kerberos.

En revanche, il faut garder à l’esprit que pour un utilisateur sur une machine rattachée au domaine Active directory, ces étapes sont totalement transparentes.

Concernant les outils en eux-mêmes, Rubeus s’utilisera sur une machine Windows et impacket sur les autres systèmes d’exploitation.

#### Ticket-Granting Ticket (TGT)

Le premier type de ticket est le **« Ticket-Granting Ticket »** (appelé **TGT** par la suite). Ce ticket est obtenu lors de la phase « authentication service » qui consiste à démontrer auprès du **KDC** la connaissance du secret du **client.**

Voici les commandes permettant d’effectuer la phase « authentication service ».

**En utilisant la librairie « impacket » et son script « getTGT.py »:**

```
getTGT.py -dc-ip <IP KDC/DC> <domain>/<user>:<password>
```

Un fichier “.ccache” sera créé par le script.

**En utilisant l’outil « Rubeus »:**

```
Rubeus.exe asktgt /user:<user> /password:<password> /domain:<domain> /dc:<IP KDC/DC> /outfile:<user>_tgt.kirbi
```

Un fichier «.kirbi » sera créé par le programme.

La figure animée ci-dessous montre le fonctionnement de cette phase.

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/AS_2.gif)

Illustration animée de la phase « authentication service » entre le client et le KDC

Ainsi, à la fin de la phase « authentication service », le client dispose d’une clé de session et d’un ticket « **TGT** ». Ces deux éléments serviront à justifier l’identité du **client** lors de la phase suivante.

Il est possible de consulter ces éléments à l’intérieur des fichiers créés par les commandes ci-dessus. Notons que le contenu du **TGT** est en partie chiffré avec le secret du **KDC.** Le **client** est donc dans l’incapacité de modifier ou consulter cette partie.

Pour être plus précis, la répartition des informations reçues lors de l’étape « authentification service » est la suivante:

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/ccache-file-content-1024x436.png)

Contenu d’un fichier.ccache obtenu à l’étape AS

La partie chiffrée du **TGT** contient des informations sur le ticket (flags, durée de vie, etc.) mais aussi les informations d’identité du **client** (nom, groupe, UAC, etc.) et une copie de la clé de sessions.

Ainsi, le **client** ne peut falsifier son identité, car la modification du **TGT** requiert le secret du **KDC**.

#### Ticket de service

Le ticket de service (**ST**) est le second ticket obtenu par le **client**. Il s’obtient lors de la phase « Ticket-Granting Service » (**TGS**).

Lors de cette phase, le client va demander l’accès à un **service** en utilisant le **TGT** et **la clé de session** précédemment obtenus et en ciblant un « Service Principal Name » (**SPN**) existant.

Voici les commandes permettant d’effectuer la phase « Ticket-Granting Service » en donnant explicitement le ticket obtenu lors de la phase précédente.

**En utilisant la librairie « impacket » et le script d’exemple « getST.py »:**

```
KRB5CCNAME=<TGT_ccache_file> getST.py -dc-ip <IP KDC/DC> -spn <Target_SPN> <domain>/<user> -no-pass -k
```

**En utilisant l’outil « Rubeus »:**

```
Rubeus.exe asktgs /ticket:<TGT_kirbi_file> /service:<Target_SPN> /dc:<IP KDC/DC> /outfile:<user>_st_<SPN>.kirbi
```

La figure animée ci-dessous montre le fonctionnement de cette phase:

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/TGS.gif)

Illustration de l’étape Ticket-Granting Service du protocole Kerberos

NB: Impacket peut être utilisé pour enchainer l’étape **AS** et **TGS** de sorte à récupérer un ticket de service en fournissant directement le secret du **client.**

```
getST.py -dc-ip <IP KDC/DC> -spn <Target_SPN> <domain>/<user>:<password>
```

À la fin de cette phase, le **client** reçoit un ticket de service **(ST)** et une clé de session de service. Une partie du ticket de service est chiffrée avec le secret du service ciblé. Cette partie contient notamment les informations d’identité du **client**, le **SPN** ciblé, ainsi qu’une copie de la clé de session de service.

En somme, le contenu d’un **ST** est similaire à un **TGT** excepté que le champ associé au « Service principal Name » (**SPN**) contiendra la référence à un service déclaré. Dans le cas d’un **TGT** ce champ fait référence au service « krbtgt » du **KDC**.

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/ccache-file-content-tgs-1024x343.png)

Contenu d’un fichier.ccache obtenu à l’étape TGS

Après l’obtention du ticket de service (**ST**), le **client** est maintenant en mesure de s’authentifier auprès du **service**.

Cette étape est connue sous le nom de « application request » (**AP**) et peut être illustrée par la figure suivante:

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/AP.gif)

Selon que vous utilisiez impacket ou Rubeus, la démarche d’accès aux services sera différente.

La plupart des outils basés sur la librairie impacket intègrent l’utilisation de Kerberos dans leurs options. Ici, on suppose qu’un fichier «.ccache » a été généré lors d’une des étapes précédentes. Ce fichier «.ccache » peut tout aussi bien contenir un **TGT** qu’un **ST**, la démarche reste la même. Dans le cas d’un **TGT**, l’outil effectuera de lui-même l’étape **TGS.**

L’intégration de ce fichier «.ccache » se fera en renseignant le chemin vers ce fichier dans la variable d’environnement « KRB5CCNAME », puis en spécifiant les options dédiées à Kerberos pour le script utilisé.

Notons que dans l’écosystème de impacket, il existe autant de scripts que de services avec lesquelles interagir (smbclient-ng.py, dnstool.py, wmiexec.py, etc.).

Voici un exemple d’interaction sur le service SMB avec le script smbclient-ng.py.

```
$ export KRB5CCNAME=/path/to/user.ccache
$ smbclient-ng.py --kdcHost=<kdc FQDN> -d <domain> -u <user> --host <FQDN of server> -k --nopass
```

La démarche pour interagir avec les tickets générés par Rubeus est différente. Elle consiste à appliquer le ticket généré directement dans une « logon session ».

Cette action peut être réalisée de différente façon en fonction du niveau de privilège.

Si l’utilisateur de Rubeus n’est pas administrateur de la machine, il peut se servir de l’option « */ptt* » pour appliquer le ticket généré à la session courante. Mais cela aura pour défaut d’écraser la session et donc de modifier les accès de l’utilisateur actuel de la machine.

```
Rubeus.exe asktgt /user:<user> /password:<password> /domain:<domain> /dc:<IP KDC/DC> /ptt
# or
Rubeus.exe ptt /ticket:<path/to/ticket.kirbi>
```

Pour éviter cet inconvénient, il est possible, dès lors que l’on est administrateur sur la machine Windows, de créer un « sacrificial process » sur lequel on appliquera nos tickets générés. Les options « /ptt » et « /createnetonly » peuvent être utilisées dans cette optique.

```
Rubeus.exe asktgt /user:<user> /password:<password> /domain:<domain> /dc:<IP KDC/DC> /ptt /createnetonly:C:\Path\to\Program\to\launch
```

Il est possible de lister les tickets Kerberos de la session active avec la commande « klist *»*.

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/klist-command-result-1024x345.png)

Résultat de la commande klist sur une machine Windows

Dès lors que la « Logon Session » est configurée, il sera possible d’interagir de façon transparente avec le service cible.

**NB**: Avec l’option « createnetonly », il est important de comprendre que seules les interactions réseau de ce programme seront effectuées avec l’identité injectée. Dans le cadre des interactions locales avec le système, le programme utilisera l’identité de l’utilisateur d’origine.

### Gestion des secrets dans une authentification Kerberos

La plupart des opérations de chiffrement ou de déchiffrement dans le protocole kerberos utilisent une clé symétrique considérée comme un secret associé à un acteur. Ce secret, aussi appelé clé kerberos, est calculé en appliquant une fonction de hachage au mot de passe du compte de l’acteur (utilisateur ou machine).

À titre d’illustration, voici comment calculer les clés kerberos dérivées du mot de passe d’un compte avec le programme « Rubeus ».

```
Rubeus.exe hash /password:<password> /user:<username> /domain:<domain>
```
![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/output-example-1024x221.png)

Exemple de sortie de la commande hash de Rubeus

#### Les fonctions de hachage proposées par le protocole Kerberos

Plusieurs fonctions de hachages sont applicables et chacune d’elles permettra de générer une clé différente pour un même mot de passe. Afin d’identifier quelle clé est utilisée dans le cadre d’un chiffrement, la propriété « encryption-type » ou « etype » est toujours précisé lorsqu’un élément chiffré est transmis.

Dans un environnement Active Directory, deux des algorithmes de hachage proposés se distinguent:

- **RC4\_HMAC (etype 23)** : Le hash qui résulte de cet algorithme est similaire au hash NT. Il s’agit d’un format de hash utilisé par d’autres programmes ou protocoles de Windows ([NTLM](https://www.vaadata.com/blog/fr/authentification-ntlm-principes-fonctionnement-et-attaques-ntlm-relay/) par exemple). Cet algorithme est aujourd’hui considéré comme insuffisamment robuste. Ce manque de robustesse facilite le calcul du mot de passe original lors d’une opération de cracking. C’est ce type d’opération que l’on retrouve dans l’attaque « kerberoast » par exemple.
- **AES256\_CTS\_HMAC\_SHA1 (etype 18):** Il s’agit de l’algorithme le plus robuste proposé par l’implémentation Kerberos de Windows. Son usage est à privilégier sur les autres algorithmes. Pour un attaquant qui chercherait à rester discret sur le réseau, la clé issue de cet algorithme apparaitra comme plus légitime.

#### Fonctionnement des clés

Ce mode de fonctionnement a une conséquence. Bien que les clés Kerberos utilisées soient toutes des dérivés du mot de passe d’un compte, il n’est techniquement pas nécessaire de connaître la valeur réelle du mot de passe. Seule la connaissance des clés est nécessaire pour user du protocole kerberos.

C’est la raison pour laquelle les outils comme impacket ou Rubeus proposent une option pour l’utilisation directe de ces clés plutôt que l’utilisation du mot de passe.

**Avec impacket**:

```
getTGT.py -hashes :<NTHASH> <domain>/<username> -no-pass
# or
getTGT.py -aes <aeskey> <domain>/<username> -no-pass
```

**Avec Rubeus**:

```
Rubeus.exe asktgt /rc4:<NTHASH> /user:<username> /domain:<domain>
# or
Rubeus.exe asktgt /aes256:<aeskey> /user:<username> /domain:<domain>
```

Ces clés Kerberos peuvent être récupérées en cas de compromission d’une machine sur laquelle ces secrets sont stockés. Dans ce sens, la plupart des outils d’extraction de secrets proposent l’affichage de telles clés.

![](https://www.vaadata.com/blog/wp-content/uploads/2024/10/extracting-kerberos-keys-1024x211.png)

Exemple d’extraction de clés kerberos et d’un hash NT via l’outil secretsdump

## Conclusion

Avec l’ensemble des éléments présentés dans cette première partie, nous espérons que vous serez en mesure d’appréhender le fonctionnement global du protocole Kerberos.

Nous reviendrons dans un autre article sur les principes de la délégation Kerberos. Nous explorerons également sur les vulnérabilités et attaques courantes sur ce protocole; en présentant des exemples d’exploitations critiques rencontrés lors de nos [pentests de réseaux intégrant un Active Directory](https://www.vaadata.com/fr/pentest-infrastructure-reseau/).

**Auteur: Benoit PHILIPPE – Pentester @Vaadata**