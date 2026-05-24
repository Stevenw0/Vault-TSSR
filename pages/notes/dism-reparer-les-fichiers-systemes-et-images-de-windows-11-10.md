, , ,

malekalmorte

Création:

30 août 2016

Modification:

**DISM** (*Deployment Imaging Service and Management Tool*) est l’un des outils les plus **puissants et avancés** intégrés à **Windows 11/10** pour **réparer l’image système** et restaurer les composants essentiels du système d’exploitation. Lorsqu’un PC rencontre des **erreurs persistantes**, des **mises à jour qui échouent**, des **fichiers système corrompus** ou un [**magasin de composants endommagé** (*WinSxS*)](https://www.malekal.com/quest-ce-que-le-dossier-winsxs-et-le-magasin-des-composants-de-windows-10/), DISM devient souvent indispensable pour retrouver un environnement **stable et fonctionnel**.

Contrairement à **[SFC](https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/)**, qui analyse et répare les **fichiers système actifs**, DISM agit en profondeur sur **l’image de récupération** utilisée par Windows pour restaurer ses propres fichiers. Si cette image est endommagée, les réparations classiques échouent presque toujours et SFC renvoie des messages tels que *« certains fichiers n’ont pas pu être réparés »*. Dans ces situations, DISM permet de **reconstruire l’image système**, soit à partir des fichiers locaux, soit à l’aide d’une **source externe** comme une ISO Windows.

Ce guide vous explique **comment utiliser DISM sous Windows 11/10**, comment vérifier l’état de l’image, effectuer une réparation complète, utiliser une source ISO lorsque les fichiers locaux sont manquants, et résoudre les **erreurs les plus fréquentes**, dont les problèmes de sources introuvables.

Pour une vue d’ensemble des outils de réparation Windows (SFC, DISM, CHKDSK, réparation via ISO), consultez le guide complet:**[Réparer les fichiers systèmes de Windows 11/10: SFC, DISM et réparations avancées](https://www.malekal.com/reparer-les-fichiers-systemes-de-windows/)**

## Qu’est-ce que DISM et quand l’utiliser?

**DISM**, pour ***Deployment Imaging Service and Management Tool***, est un outil intégré à Windows 11/10 permettant de réparer l’image système utilisée par Windows pour restaurer ses composants internes. Cette image, appelée [***magasin de composants* (dossier *WinSxS*)**](https://www.malekal.com/quest-ce-que-le-dossier-winsxs-et-le-magasin-des-composants-de-windows-10/), contient toutes les versions propres des fichiers essentiels du système. Lorsque cette image est endommagée, les outils de réparation classiques comme [SFC](https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/) ne peuvent plus restaurer correctement les fichiers corrompus.

DISM analyse l’image système, détecte les anomalies et restaure les composants défectueux à partir de fichiers locaux ou d’une source externe comme une image ISO. Il est particulièrement utile lorsque Windows rencontre des problèmes persistants, notamment après une mise à jour défaillante, une corruption du magasin de composants, ou lorsque SFC renvoie le message indiquant qu’il n’a pas pu réparer certains fichiers.

Vous pouvez utiliser DISM dans les situations suivantes:

- Windows présente des erreurs système récurrentes ou des plantages inexpliqués
- [SFC](https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/) détecte des fichiers corrompus mais ne parvient pas à les remplacer
- certaines mises à jour Windows refusent de s’installer ou génèrent des erreurs
- [Windows Update](https://www.malekal.com/mises-a-jour-windows-update/) ou des composants internes cessent de fonctionner correctement
- des fichiers essentiels du système sont endommagés et empêchent la réparation classique

DISM est généralement exécuté avant ou après SFC selon le type de corruption rencontré. Lorsqu’il fonctionne correctement, il restaure une image système saine, permettant ensuite à SFC de réparer les fichiers opérationnels de Windows.

![DISM - outil intégré pour réparer les images de Windows](https://www.malekal.com/wp-content/uploads/2016/08/Dism-reparer-fichiers-systemes-images-windows-11-ezf4ef-350x350.jpg)

DISM - outil intégré pour réparer les images de Windows

## Vérifier l’état de l’image Windows

DISM propose plusieurs commandes permettant d’évaluer rapidement la santé de l’image système de Windows avant de tenter une réparation. Ces vérifications sont utiles pour déterminer si l’image est intacte, partiellement corrompue ou complètement endommagée. Windows 11/10 utilise cette image comme source pour réparer les fichiers essentiels du système; il est donc important de s’assurer qu’elle n’est pas défectueuse.

### CheckHealth

Cette commande permet de vérifier en quelques secondes si l’image Windows présente une corruption connue. Elle n’effectue aucune analyse approfondie, mais elle est utile pour obtenir un diagnostic rapide.

```
DISM /Online /Cleanup-Image /CheckHealth
```

Si une corruption est détectée, DISM indiquera si elle est réparable ou non.

### ScanHealth

Cette commande réalise une analyse plus complète et plus longue de l’image. Elle recherche les problèmes potentiels dans les composants du magasin WinSxS et fournit un rapport détaillé sur l’état de l’image.

```
DISM /Online /Cleanup-Image /ScanHealth
```

Cette étape peut prendre plusieurs minutes, en fonction de la vitesse du disque et de la quantité de données à analyser.

### RestoreHealth

Cette commande tente de réparer automatiquement l’image système. Si les fichiers nécessaires sont disponibles localement, ils sont utilisés pour restaurer les composants. Si l’image est trop endommagée, une source externe (comme une ISO Windows) peut être requise.

```
DISM /Online /Cleanup-Image /RestoreHealth
```

Après l’exécution de cette commande, il est recommandé de relancer SFC afin de restaurer les fichiers systèmes à partir de l’image corrigée.

![DISM : réparer les fichiers systèmes](https://www.malekal.com/wp-content/uploads/DISM_Reparation_Windows.jpg)

DISM: réparer les fichiers systèmes

L’outil enregistre un rapport s’enregistre qui permet parfois d’obtenir des informations sur des erreurs rencontrées.  
Le journal se trouve dans l’emplacement suivant: **C:\\Windows\\Logs\\DISM\\Dism.log**

## Comment utiliser DISM sous Windows 11/10

DISM peut être exécuté aussi bien depuis une session Windows fonctionnelle que depuis l’environnement de récupération WinRE lorsque le système ne démarre plus correctement. Dans tous les cas, il doit être lancé avec les droits administrateur afin de pouvoir analyser et réparer l’image système.

### Exécuter DISM depuis Windows (Terminal Admin)

Si votre bureau fonctionne encore, vous pouvez exécuter les commandes DISM directement depuis une console administrateur.  
Étapes:

- Ouvrez le menu Démarrer
- Recherchez *Terminal Windows* ou *Invite de commandes*
- Faites un clic droit et sélectionnez *Exécuter en tant qu’administrateur*
- Lancez l’une des commandes suivantes selon l’analyse souhaitée:
- CheckHealth:
```
DISM /Online /Cleanup-Image /CheckHealth
```
- ScanHealth:
```
DISM /Online /Cleanup-Image /ScanHealth
```
- RestoreHealth (réparation):
```
DISM /Online /Cleanup-Image /RestoreHealth
```
- Si DISM parvient à réparer l’image, il est recommandé de relancer ensuite:
```
sfc /scannow
```

![SFC : vérifier et corriger les fichiers systèmes sur Windows](https://www.malekal.com/wp-content/uploads/SFC_verifier_corriger_fichiers_systemes_2.jpg)

SFC: vérifier et corriger les fichiers systèmes sur Windows

### Exécuter DISM depuis WinRE (hors ligne)

Si Windows ne démarre plus ou si les commandes échouent en session normale, vous pouvez lancer DISM depuis l’environnement de récupération (WinRE). Cette méthode permet d’analyser et réparer l’image système directement sur la partition Windows.

- Démarrez sur WinRE via *MAJ + Redémarrer*, via les démarrages échoués ou via une clé USB Windows
- Ouvrez **Invite de commandes**
- Vérifiez la lettre du disque Windows avec `diskpart` puis `list volume`
- Utilisez une commande adaptée:

Analyse de l’image hors ligne:

```
DISM /Image:D:\ /Cleanup-Image /ScanHealth
```

Réparation:

```
DISM /Image:D:\ /Cleanup-Image /RestoreHealth
```

(remplacez **D:** par la lettre correspondant à votre partition Windows)

Le mode hors ligne est particulièrement utile lorsque le magasin de composants est corrompu ou que Windows ne se charge plus correctement.

![Exécuter DISM depuis WinRE (hors ligne)](https://www.malekal.com/wp-content/uploads/reparer-Windows-10-invite-commandes-dism-2.jpg)

Exécuter DISM depuis WinRE (hors ligne)

## Utiliser DISM avec une source (ISO Windows)

Lorsque l’image système de Windows est trop endommagée pour être réparée à l’aide des fichiers locaux, DISM peut utiliser une source externe afin de restaurer correctement les composants manquants ou corrompus. L’option la plus fiable consiste à utiliser une image ISO officielle de Windows 11/10, qui contient les fichiers sains nécessaires à la réparation.

### Monter l’ISO Windows

Commencez par télécharger l’ISO la plus récente de Windows, disponible depuis:

Une fois l’ISO obtenue:

- faites un clic droit sur le fichier ISO
- choisissez **Monter**
- notez la lettre attribuée au lecteur virtuel (par exemple: E:)

Le contenu de l’ISO sera accessible comme un simple disque.

### Utiliser la commande DISM avec une source externe

Après avoir monté l’ISO, vous pouvez spécifier manuellement la source des fichiers utilisés pour la réparation avec l’option ***/Source***. Sur la majorité des ISO Windows 11/10, les fichiers requis se trouvent dans *install.wim* ou *install.esd*, situés dans: `E:\sources\install.wim`

La commande générale est la suivante:

```
DISM /Online /Cleanup-Image /RestoreHealth /Source:E:\sources\install.wim /LimitAccess
```

L’option */LimitAccess* empêche DISM d’utiliser Windows Update, ce qui garantit une réparation basée exclusivement sur les fichiers de l’ISO.

![Réparer Windows 11/10 avec DISM avec le fichier ISO](https://www.malekal.com/wp-content/uploads/Reparer-Windows-10-DISM-ISO-3.jpg)

Réparer Windows 10 avec DISM avec le fichier ISO

### Exemple de commandes complètes

Si l’image contient un fichier *install.esd* (cas fréquent sur certaines ISO), utilisez:

```
DISM /Online /Cleanup-Image /RestoreHealth /Source:E:\sources\install.esd /LimitAccess
```

Si vous êtes dans WinRE et devez préciser l’image hors ligne, adaptez la commande:

```
DISM /Image:D:\ /Cleanup-Image /RestoreHealth /Source:E:\sources\install.wim /LimitAccess
```

Assurez-vous d’ajuster:

- **D:** → partition où Windows est installé
- **E:** → lettre de l’ISO montée

### Pourquoi utiliser une source manuelle?

Cette méthode est indispensable lorsque:

- Windows Update ne répond plus ou renvoie des erreurs
- l’image est trop corrompée pour être réparée localement
- DISM renvoie l’erreur “0x800f081f: les fichiers sources sont introuvables”
- le magasin des composants WinSxS contient des paquets endommagés

L’utilisation d’une ISO propre garantit une réparation plus fiable, basée sur des fichiers officiels et intacts.

## Erreurs courantes DISM et solutions

L’utilisation de DISM (Deployment Imaging Service and Management Tool) permet de réparer l’image système de Windows 11/10, mais il peut arriver que des erreurs surviennent lors de son exécution. Ces erreurs sont généralement liées à des sources introuvables, un magasin de composants endommagé, des fichiers locaux corrompus ou un accès réseau bloqué. Voici les erreurs les plus fréquentes et leurs solutions.

### Erreur 0x800f081f « Les fichiers sources sont introuvables »

Cette erreur indique que DISM n’a pas pu localiser les fichiers nécessaires à la réparation.  
Cela peut être dû à:

- un magasin de composants WinSxS endommagé
- une source ISO absente ou incorrectement montée
- un fichier *install.wim* ou *install.esd* introuvable
- l’option *LimitAccess* utilisée sans source valide

👉Pour plus de détails, consultez: **[DISM: fichiers sources introuvables – 0x800f081 / 0x800f081f](https://www.malekal.com/dism-fichiers-sources-introuvables-0x800f081-0x800f081f/)**

### Erreur 0x80070002 ou 0x80070003

Ces erreurs apparaissent lorsqu’un fichier requis par DISM est manquant ou lorsque les chemins spécifiés sont incorrects. Il s’agit souvent d’un problème de lettre de partition ou de montage ISO.  
Vérifiez que la lettre de lecteur correspond bien à la partition Windows et que l’ISO est montée au bon endroit.

### Erreur 87 ou 0x800f0906

L’erreur 87 apparaît généralement lorsque la syntaxe de la commande est incorrecte ou que les paramètres non valides sont utilisés.  
Dans le cas de 0x800f0906, Windows Update ne parvient pas à télécharger le fichier requis depuis le serveur Microsoft.  
👉Pour plus d’informations:**[DISM erreur 87](https://www.malekal.com/dism-erreur-87/)**

![DISM et erreur 87 sur Windows 7 et 10](https://www.malekal.com/dism-reparer-fichiers-systemes-images-windows-10/www.w3.org/2000/svg'%20viewBox='0%200%201200%20636'%3E%3C/svg%3E)

DISM et erreur 87 sur Windows 7 et 10

### Erreur 0x800f0a12 ou 0x800f0a13

Ces erreurs sont liées à des composants Windows Update manquants ou à un magasin d’état corrompu (registry, WinSxS). Une mise à jour manquante ou un redémarrage interrompu peut en être la cause. Pour résoudre: exécutez:

```
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /ScanHealth
```

Puis utilisez une source ISO si nécessaire.

### Erreur 2 ou 0x80070020 « Le processus ne peut pas accéder au fichier car il est utilisé par un autre processus »

Cette erreur indique que l’image est verrouillée ou qu’un autre processus interfère avec DISM (logiciel antimalware, antivirus).  
👉Pour en savoir plus: **[DISM Erreur 2: les solutions](https://www.malekal.com/dism-erreur-2-les-solutions/)**

### Blocage, exécution très lente ou redémarrage automatique

Il arrive que DISM reste bloqué à un pourcentage élevé ou refuse de progresser:

- Vérifiez l’état du disque avec:
```
chkdsk C: /f /r
```
- Désactivez temporairement l’antivirus ou les services de synchronisation cloud
- Lancez la commande en mode hors ligne depuis [WinRE](https://www.malekal.com/quest-ce-que-winre-windows-recovery-environment/)

## Quand utiliser SFC après DISM?

DISM et [SFC](https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/) sont deux outils complémentaires pour réparer Windows 11/10. DISM répare l’image système – c’est-à-dire la source utilisée par Windows pour restaurer ses composants internes – tandis que SFC agit directement sur les fichiers système opérationnels présents sur le disque.

Lorsque l’image système est endommagée, SFC n’est pas en mesure de restaurer correctement certains fichiers, ce qui explique le message *« La protection des ressources Windows n’a pas réussi à réparer certains fichiers »*. C’est dans ces situations que DISM doit être exécuté en premier.

Vous devez relancer SFC après DISM dans les cas suivants:

- SFC a détecté des fichiers corrompus mais n’a pas pu les réparer
- DISM a corrigé l’image système avec la commande *RestoreHealth*
- vous avez utilisé DISM avec une source ISO pour remplacer des composants endommagés
- l’analyse DISM indique que l’image a été réparée
- vous suspectez que certains fichiers DLL, EXE ou pilotes Windows restent corrompus

Après avoir exécuté DISM, relancez SFC avec:

```
sfc /scannow
```

Cette seconde analyse permet de remplacer les fichiers Windows auparavant impossibles à restaurer, en s’appuyant cette fois sur une image système saine. C’est la combinaison la plus efficace pour corriger des erreurs profondes ou persistantes liées à l’intégrité de Windows.

👉 [**SFC /scannow: vérifier et corriger les fichiers système Windows 11/10**](https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/)

## Interface graphique pour DISM

DISM GUI est un outil gratuit qui se présente sous la forme d’une interface graphique avec toutes les commandes DISM.  
Cela évite de passer des commandes depuis l’invite de commandes.

👉L’article suivant le présente: **[DISM GUI: Toutes les commandes DISM dans une interface graphique](https://www.malekal.com/dism-gui-toutes-les-commandes-dism-dans-une-interface-graphique/)**

![Interface graphique pour DISM](https://www.malekal.com/dism-reparer-fichiers-systemes-images-windows-10/www.w3.org/2000/svg'%20viewBox='0%200%20456%20257'%3E%3C/svg%3E)

Interface graphique pour DISM

## Ressources utiles et articles liés

- [Réparer Windows 11 sans perte de données](https://www.malekal.com/comment-reparer-windows-11-sans-perte-de-donnees/)
- [Réparer Windows 10 sans perte de données](https://www.malekal.com/reparer-windows10-sans-perte-donnees/)
- [Comment réinitialiser Windows 10](https://www.malekal.com/reinitialiser-windows-10/)
- [Windows 10: réinitialiser le PC dans le cloud](https://www.malekal.com/windows-10-reinitialiser-le-pc-dans-le-cloud/)
- [Réparer Windows 10 sans CD, sans clé USB](https://www.malekal.com/reparer-windows-10-sans-cd-sans-cle-usb/)
- [Comment réparer les fichiers système manquants ou endommagés sous Windows](https://www.malekal.com/reparer-les-fichiers-systemes-de-windows/)
- [Les options de récupération de Windows 11, 10](https://www.malekal.com/windows10-11-options-recuperation-systeme/)
- [Réparer Windows 11, 10 en CMD et invite de commandes](https://www.malekal.com/reparer-windows-10-11-cmd-invite-de-commandes/)
- [Réparer Windows 11, 10 en mode sans échec](https://www.malekal.com/reparer-windows-en-mode-sans-echec/)
- [7 commandes CMD pour réparer Windows](https://www.malekal.com/commandes-cmd-pour-reparer-windows/)
- [Démarrer sur les options de récupération de Windows 11, 10](https://www.malekal.com/demarrer-options-depannage-recuperation-windows-10-11/)
- [Comment réparer le démarrage de Windows 11](https://www.malekal.com/comment-reparer-demarrage-windows-11/)
- [Comment réparer le démarrage de Windows 10](https://www.malekal.com/reparer-demarrage-de-windows-10/)
- [Créer un lecteur de récupération de Windows 11/10](https://www.malekal.com/creer-lecteur-recuperation-windows/)
- [Comment restaurer Windows 10: les étapes pas à pas](https://www.malekal.com/restaurer-windows-11-a-une-date-anterieure-toutes-les-etapes/)
- [Windows Repair: comment réparer Windows](https://www.malekal.com/windows-repair-tutoriel/)
- [9 outils pour vérifier et réparer Windows 10, 11, 7](https://www.malekal.com/outils-verifier-reparer-windows-10-11-7/)
- [Les meilleurs outils pour réparer Windows 10, 11](https://www.malekal.com/les-meilleurs-outils-pour-reparer-windows-10-11/)
- [Restaurer/réinitialiser d’usine (Acer, ASUS, Dell, Lenovo, HP, Sony)](https://www.malekal.com/restaurer-reinitialiser-usine-acer-asus-dell-lenovo-hp-sony/)

## A propros de malekalmorte

![malekal-site-logo-150](https://www.malekal.com/wp-content/uploads/2025/04/cropped-malekal-site-logo-150.png)

malekal-site-logo-150

**Passionné d’informatique depuis mon plus jeune âge**, j’aide les internautes depuis 2005 à résoudre leurs problèmes informatiques sur les forums et à travers ce site.  
Sur Malekal.com, je partage des **tutoriels complets sur Windows, Linux et la sécurité** pour vous aider à dépanner, optimiser et protéger votre PC en toute autonomie.