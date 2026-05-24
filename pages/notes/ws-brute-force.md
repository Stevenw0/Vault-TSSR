
---
# Windows Server : détecter et bloquer les attaques brute force avec PowerShell

## 📌 Introduction

Ce tutoriel explique comment détecter et bloquer les adresses IP à l'origine d'attaques brute force sur Windows Server, grâce à des scripts PowerShell.

---

# 🧠 Contenu principal



,

**Dans cet article, nous allons voir comment détecter, à l’aide de scripts PowerShell, les attaques par brute force sur des serveurs Windows exposés sur Internet. En analysant les journaux, il sera envisageable d'identifier les adresses IP malveillantes peu importe le service ciblé (RDP, IIS, RDS ou d’autres services). Nous aborderons également les possibilités de blocage en cas de détection d’activité suspecte.**

Ceci a été réalisé suite à plusieurs sollicitations, audits et analyses terrain, et dans une volonté de renforcer la gouvernance, la visibilité ainsi que l’indépendance vis-à-vis des solutions tierces. Nous avons alors développé une approche basée sur des scripts s’appuyant uniquement sur les mécanismes natifs de Windows.

Sommaire \[[\-](#)\]

## Risque de sécurité des serveurs hébergés

Aujourd’hui, de nombreuses entreprises françaises, notamment des TPE, PME mais également certaines structures publiques, sont exposées en continu à des attaques par brute force, souvent sans en avoir conscience. C’est un constat que nous avons fait à travers plusieurs interventions. Pourtant, ce n'est pas faute de communiquer régulièrement à propos de cette mauvaise pratique.

Par manque de visibilité, de moyens ou simplement parce que le sujet est sous-estimé, ces environnements ne disposent généralement d’aucun mécanisme de détection. Les journaux existent, mais ne sont pas exploités, laissant ces attaques se produire en silence.

Le brute force reste pourtant l’une des menaces les plus répandues et les plus simples à exploiter pour un attaquant, notamment sur des services exposés comme les accès Bureau à distance (protocole RDP).



C’est pour répondre à cette problématique que nous vous proposons une solution simple et ouverte, basée sur un script permettant de détecter rapidement ces attaques, sans dépendre d’outils tiers ni ajouter de complexité à l’infrastructure.

Notre approche s’intéresse davantage aux serveurs isolés, pas nécessairement intégrés à un domaine Active Directory, et exposés directement sur Internet, que ce soit en DMZ ou chez un hébergeur / info gérant.

Vous pouvez consulter l'article suivant pour en savoir plus sur les attaques par brute force et les bonnes pratiques associées dans un environnement AD.

- [L'essentiel à savoir sur les attaques Brute Force](https://www.it-connect.fr/attaques-brute-force-principes-et-mesures-de-protection/)

## Détecter les attaques brute force sur Windows Server

Les attaques par brute force se traduisent principalement par des événements d’échec d’authentification dans les journaux Windows. Les plus intéressants à analyser sont ceux liés aux connexions réseau (Logon Type 3), souvent les plus révélateurs d’une activité distante suspecte.

Par exemple, on peut observer ici des tentatives répétées sur un compte nommé " **Administrator** ".



Cependant, la lecture de ces événements devient rapidement complexe lorsque leur volume est important. L’analyse via des scripts ou des lignes de commande peut vite devenir fastidieuse et difficile à exploiter efficacement. C’est dans ce contexte que nous utilisons notre outil open source, permettant de simplifier l’analyse, de gagner du temps et de faciliter la prise de décision.

## Détection des attaques avec le script BruteForce-Detector

Avant d’aller plus loin, il est essentiel de vérifier si le serveur subit effectivement des attaques par brute force. Pour cela, il peut être nécessaire de remonter les journaux sur une période plus large afin d’avoir une vision réaliste de l’activité.

L’outil open source que nous avons développé s’appuie sur une bibliothèque performante permettant une analyse rapide et une restitution claire des résultats. L’objectif est simple: déterminer rapidement si le serveur est exposé à un risque en vérifiant les bonnes pratiques et recommandations.

Pour commencer, il suffit de télécharger le script depuis le dépôt GitHub ou de le copier tout simplement dans l'éditeur PowerShell ISE. Tout dépend de vos habitudes pour l'exploitation de scripts PowerShell.

- [GitHub / BruteForce-Detector](https://github.com/dakhama-mehdi/BruteForce-Detector)


Par défaut, le script nécessite des droits administrateur pour accéder au journal des événements. Afin d’éviter cela, il est possible d’ajouter l’utilisateur courant au groupe " **Lecteurs des journaux d’événements** ". Si vous partez sur cette option, une déconnexion puis reconnexion sera nécessaire pour prendre en compte cette modification.



Lancez ensuite le script avec PowerShell. Une version portable au format exécutable est également disponible sur GitHub.

Une fois lancé, l’outil affiche une interface simple, légère et intuitive, permettant une prise en main rapide.



Voici une présentation des principales fonctionnalités de l’outil:

- Le bouton " **Scan** " permet de lancer l’analyse des journaux.
- Le champ " **Time range** " permet de définir la période d’analyse. Il est recommandé de commencer entre 4 et 10 heures, puis d’augmenter progressivement si nécessaire.
- Le menu " **Max Events** " permet de limiter le nombre d’événements analysés et affichés, afin de préserver les performances. Cette valeur peut être ajustée en fonction du volume de logs.
- La section " **Statistic** " fournit une vue synthétique de l’activité, notamment les adresses IP les plus actives avec le nombre de tentatives associées.
- Le bouton " **Rapport HTML** " permet de générer un rapport détaillé exploitable.
- Le menu " **Mode** " permet de basculer entre les échecs d’ouverture de session et les ouvertures réussies.
- Le bouton " **Forensic** " permet de lancer une analyse avancée, en corrélant les événements entre eux et en vérifiant la configuration du système afin d’évaluer les risques.
- Le bouton " **Export CSV** ", accessible via le menu " **File** ", permet d’exporter les résultats au format CSV.

### Mode Scan

Cliquez sur **Scan** pour lancer une analyse. L’un des avantages de l’outil est la résolution de la géolocalisation des adresses IP via deux API gratuites. En cas de volume important d’IP, certaines résolutions peuvent toutefois échouer. La version gratuite autorise 100 requêtes par minute par IP, ce qui est largement suffisant pour la plupart des cas.

Les informations affichées permettent de disposer des éléments nécessaires pour analyser la situation et prendre une décision.

Dans cet exemple, le serveur est clairement ciblé par une attaque par brute force, avec un volume élevé de tentatives. Les premiers indices mettent en évidence des comptes à risque liés à une mauvaise configuration, notamment les comptes par défaut tels que Guest ou Administrateur. Ces éléments sont pris en compte dans l’audit de configuration, que nous aborderons plus loin.



Dans l’onglet " **Statistic** ", il est possible de voir le nombre de tentatives, ainsi que leur répartition par pays. Dans cet exemple, on constate qu’un grand nombre de tentatives proviennent de la Chine.

Il est ensuite possible d’exporter les résultats via les boutons Export CSV ou Rapport HTML, afin de conserver une trace ou de partager l’analyse.



La page HTML est limitée à 4 000 éléments afin de ne pas l’alourdir, cette valeur peut être modifiée au début du script dans la variable `$maxeventhtmltable`.



Le rapport propose une vue simple et claire, avec une carte affichant en rouge les localisations des attaques, ainsi qu'un tableau du nombre de tentatives par jour.

Voici un exemple de rapport:

- [Voir un exemple de rapport sur GitHub](https://dakhama-mehdi.github.io/BruteForce-Detector/Examples/attack_map.html)


Le mode " **Successful** ": permet d’analyser les ouvertures de session réussies sur la machine, notamment celles effectuées à distance. Ce mode affiche des informations pertinentes telles que le processus d’ouverture de session, le domaine, le protocole d’authentification, ainsi que le type de logon.

Cette vue permet de détecter rapidement une activité anormale ou suspecte, ou tout simplement d’obtenir une synthèse claire des ouvertures de session.

Dans la capture ci-dessous, l’analyse a été réalisée uniquement sur un serveur local afin de ne pas exposer d’informations sensibles liées aux connexions réelles.



### Mode Forensic

Ce mode déclenche une analyse avancée des événements. Il est recommandé de sélectionner une période plus large, par exemple 4, 7 ou 15 jours, afin d’obtenir un volume de données exploitable.



Si la limite d’événements est atteinte, comme dans la capture ci-dessus, il est nécessaire d’augmenter la valeur `Max Events`. Par exemple, dans notre cas, les événements affichent 3 999, ce qui signifie que des événements supplémentaires existent mais ne sont pas affichés. Il faudra augmenter la valeur à partir du menu `Max Events`.

Voici un exemple de la sortie Forensic.

- [Voir un exemple de rapport Forensic sur GitHub](https://dakhama-mehdi.github.io/BruteForce-Detector/Examples/Forensic_Mode.html)


Le rapport forensic offre une visibilité claire et structurée, avec plusieurs vérifications liées aux bonnes pratiques de sécurité. Il permet d’identifier les protocoles d’authentification les plus faibles, comme NTLMv1, mais aussi de détecter les comptes locaux sensibles ou issus de dictionnaires, tels que guest, invité, sql ou srv.

Il met également en évidence les ports ouverts à l’écoute en dehors des services Microsoft, tout en donnant un aperçu global de la configuration de la machine à travers un score de sécurité, calculé à partir de plusieurs éléments, notamment le nombre d’échecs et de connexions réussies sur la période analysée, ce qui permet d’évaluer rapidement le niveau de risque.

L’analyse permet ensuite d’identifier les adresses IP ayant réussi à se connecter après plusieurs tentatives infructueuses, avec les raisons des échecs ainsi que les plages horaires correspondantes, afin de reconstituer précisément le déroulement de l’attaque.

Enfin, la section " **User Logon Analysis** " regroupe les utilisateurs ayant ouvert une session à distance, en associant chaque connexion aux adresses IP utilisées et à leur localisation. Cette vue est particulièrement utile en cas de compromission, car elle permet de détecter rapidement une ouverture de session suspecte.

## Bloquer les attaques avec le script BruteForce-Blocker

Avant de mettre en place des mécanismes de blocage, il est essentiel de réaliser un état des lieux avec l’outil de détection vu ci-dessus afin d’évaluer le niveau d’exposition. Pour le blocage, nous utiliserons le script `BrutForce_Blocker`, exécuté via une tâche planifiée. Il permet de bloquer automatiquement les adresses IP selon plusieurs critères. Un mode audit est également disponible, avec un suivi de l’historique.

Malgré l’existence de certains outils, souvent non maintenus, nous avons souhaité proposer une solution open source, simple et adaptable. Pour un nombre limité de serveurs exposés, ce script est suffisant et fonctionne en local, sans dépendance externe.

Commençons par télécharger le script à partir du github.

- [GitHub / BruteForce-Blocker](https://github.com/dakhama-mehdi/BruteForce-Blocker)


Placez le script dans le dossier `BruteForceBlocker` (par exemple sous: `C:\Temp`). Ce chemin pourra être modifié par la suite. Ouvrez ensuite le script dans un éditeur comme PowerShell ISE.

Voici la section des paramètres, située en début de script, à comprendre avant utilisation.



- **Mode**: permet d’activer ou non la règle pare-feu. En `false`, la règle est créée mais non activée (mode audit).
- **HistoryAttempt**: conserve les tentatives échouées sur une durée (24h par défaut) afin de cumuler les attaques, même lentes.
- **Path**: chemin des fichiers de logs.
- **Minutes & Threshold**: permettent de définir le nombre de tentatives échouées dans un intervalle donné, ici 10 tentatives en 1 minute. Cette valeur peut paraître élevée, mais sera détaillée ci-dessous.
- **FilterReason**: permet d’adapter le seuil selon la raison de l’échec (ex: user does not exist), toujours sur la même période. Certaines raisons sont plus révélatrices d’une attaque que d’autres, ce qui permet de réduire les faux positifs liés à un mot de passe oublié ou expiré.
- **TrustedCountries**: permet d’augmenter le seuil pour certains pays (par exemple: France -> 15 tentatives au lieu de 10).

Note: récupérer le nom exact du pays à exclure à partir de l'outil BruteForce Detector afin de le copier comme tel.

- **ThresholdRange**: seuil appliqué aux autres pays en dehors de France, par exemple, en mettant une valeur plus basse les attaques en provenance des pays non autorisés seront vite bloquées.
- **TrustedIPs**: liste des adresses IP publiques à ignorer (celles en qui vous avez confiance),
- **IsPrivateIP**: expression régulière pour exclure les IP privées.
- **Détails sur Threshold**

La période d'une minute permet d’analyser les événements sur cette durée. Certaines attaques sont très agressives, avec plusieurs tentatives en quelques secondes, tandis que d’autres sont plus lentes, les attaquants adaptant leur rythme.

Les tentatives sont cumulées sur une période pouvant aller jusqu’à 24 heures, ce qui permet de détecter également les attaques lentes

Ce script permet de bloquer les tentatives d’authentification échouées provenant de pays non autorisés, par exemple en rejetant automatiquement toute tentative en dehors de la France dès qu’un comportement suspect est détecté. Il limite ainsi efficacement les attaques brute force. En revanche, si un attaquant dispose d’identifiants valides, il pourra toujours se connecter.

Nous développons à ce propos un mécanisme inverse basé sur les connexions réussies (4624), afin de pouvoir restreindre les ouvertures de session selon des critères comme le pays, la ville, l’adresse IP ou l’utilisateur.

Une fois vos paramètres ajustés, placez le script dans un dossier (par exemple: `C:\Temp\BruteForce`).

### Créer la tâche planifiée pour exécuter le script

Nous allons ensuite créer une tâche planifiée liée à un événement. Ouvrez le " **Planificateur de tâches** " sur votre serveur.

Commencez par créer une tâche de base.



Donnez un nom à la tâche, puis cliquez sur " **Utilisateur** " et sélectionnez le compte `SYSTEM`.





Dans " **Déclencheurs** ", cliquez sur " **Nouveau** " puis choisissez " **Lancer la tâche sur évènements** ".



Remplissez les évènements comme suit, puis validez par OK.



Dans l'onglet " **Action** ", cliquez sur " **Nouveau** " puis " **Démarrer un programme** ". Mettez " **PowerShell** " puis dans la section des arguments, spécifiez ceci (adaptez selon le chemin et le nom du script):

```
-File "C:\temp\BruteForce\BF_Blocker.ps1" –ExecutionPolicy Bypass
```


### Activer le blocage dans le firewall Windows

Une fois terminée, vous pouvez exécuter la tâche manuellement pour un test, ou attendre qu’un événement déclenche son exécution.



Si vous exécutez la tâche, une règle sera créée dans le pare-feu, mais elle ne sera pas activée pour le moment. Vous pouvez cliquer dessus pour la vérifier



Comme vous pouvez le voir, la règle est en mode audit, les IPs seront ajoutées dans l'onglet " **Étendue** " mais pas bloquées. Cochez " **Activé** " pour bloquer les IPs des attaquants.

Vous pouvez constater que la liste des adresses IP bloquées se remplit progressivement si votre serveur est ciblé par des attaques.



Dans le dossier, deux fichiers sont générés:

- `BF_blocked.log `: contient les adresses IP bloquées,
- `BF_single_attempts.log`: contient les IP en cours de détection n’ayant pas encore atteint le seuil.




### Des résultats concrets en production

Voici un exemple après mise en place. En quelques jours seulement, le nombre d’attaques a été nettement réduit. Les quelques tentatives restantes correspondent à mes propres tests.

Dans plusieurs cas, cette approche a permis de diminuer significativement les menaces sur des serveurs exposés. **Sur une dizaine de serveurs sur lesquels j'ai mis en production ce script, les attaques par brute force ont été réduites de 97%.**



## Conclusion

Nous avons vu qu’à partir de solutions natives, en particulier PowerShell, il est possible d’obtenir rapidement une visibilité sur les risques d’un serveur et d’identifier les principales faiblesses. L’outil BruteForce Detector s’inscrit dans cette logique en apportant une lecture claire et exploitable des événements.

En cas de besoin, le script BruteForce Blocker permet d’atténuer les attaques en bloquant les adresses IP sources malveillantes. Cette approche reste simple et efficace, mais doit être complétée par des mesures de sécurité complémentaires pour renforcer durablement la protection.

