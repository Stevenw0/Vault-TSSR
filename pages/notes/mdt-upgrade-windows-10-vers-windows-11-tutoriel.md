
## I. Présentation

**Comment mettre à niveau des ordinateurs de Windows 10 à Windows 11 grâce à MDT? Voici la question à laquelle nous allons répondre! Si vous utilisez déjà MDT pour déployer massivement des images sur vos ordinateurs, sachez que la mise à niveau est aussi une opération réalisable via cette solution.**

- [Cliquez ici pour regarder la vidéo sur YouTube](https://www.youtube.com/watch?v=ACwLKCgEOnA)
![](https://i.ytimg.com/vi_webp/ACwLKCgEOnA/hqdefault.webp)

Pour passer de Windows 10 à Windows 11 sur des machines compatibles, Microsoft met à disposition plusieurs solutions gratuites:

- Le processus traditionnel et manuel via **Windows Update**
- La distribution de la mise à niveau vers Windows 11 via la solution **WSUS**
- La migration de Windows 10 vers Windows 11 avec la solution **MDT**

En complément, nous pouvons citer d'autres solutions payantes: **SCCM** et **Microsoft Intune**. Bref, vous l'aurez compris, pour passer de Windows 10 à Windows 11, il y a **un outillage complet à notre disposition**. L'utilisation de **MDT** peut s'avérer pertinente si vous utilisez déjà cette solution et que vous en avez la maitrise. Cette mise à niveau s'appuie sur **une séquence de tâches MDT**, ce qui permet une personnalisation intéressante, avec **des tâches avant l'upgrade** et **des tâches après l'upgrade**: idéal pour faire du sur-mesure.

**Ce tutoriel explique comment passer de Windows 10 22H2 à Windows 11 24H2 via MDT.**

- Tutoriel - [Comment installer MDT sur Windows Server pour déployer Windows 11?](https://www.it-connect.fr/installer-mdt-sur-windows-server-2022-pour-deployer-windows-11-22h2/)

## II. Importer l'image de Windows 11

Si ce n'est pas déjà fait, vous devez importer l'image d'installation de Windows 11 dans MDT. Pour cela, vous avez besoin d'une image ISO de cet OS pour que l'image d'installation, au format WIM, soit extraite. Si vous utilisez déjà MDT pour déployer Windows 11 24H2, vous disposez déjà de cette image.



## III. Créer la séquence de mise à niveau dans MDT

Vous devez ouvrir la console MDT pour créer une nouvelle séquence de tâche. La première étape consiste à attribuer un ID et un nom à cette séquence de tâches. Ici, nous utilisons respectivement les valeurs suivantes: " **UPGRADE10TO11** " et " **Mise à niveau Windows 10 vers Windows 11** ".

La seconde étape consiste à choisir **un modèle**. Ici, il est important de choisir le modèle intitulé " **Standard Client Upgrade Task Sequence** ".



Puis, à l'étape suivante, vous devez **sélectionner l'image WIM correspondante au système d'exploitation vers lequel effectuer la mise à niveau**. Ici, nous choisissons bien entendu l'image de **Windows 11 24H2**.



Ensuite, renseignez le nom d'utilisateur et le nom de l'organisation. Cela n'a pas d'importance, mais c'est tout de même demandé par l'assistant.



Il n'est pas nécessaire de spécifier un mot de passe Administrateur: celui de Windows 10 sera conservé. Choisissez donc l'option nommée " **Do not specify an Administrator password at this time** ".



Poursuivez jusqu'à la fin et validez la création de la séquence de tâches.



Si vous lancez une mise à niveau vers Windows 11 avec la séquence de tâches que nous venons de configurer, vous allez obtenir une erreur! Cette erreur, visible sur l'image ci-dessous, contient plusieurs codes d'erreurs, notamment:

- **Litetouch deployment failed, Return Code = -2147467259 0x8004005**
- **Unknown error (Error: 80004004; Source: Unknown)**



Quelques recherches m'ont permis de comprendre que cette erreur est liée à la non-acceptation des conditions d'utilisation de Windows 11. Le programme d'installation de Windows 11 doit avoir l'option **`/eula accept`** définie pour que l'opération fonctionne (voir [cette page](https://www.deploymentresearch.com/upgrading-to-windows-11-using-mdt-lite-touch/)).

Vous devez donc éditer la séquence de tâche que vous venez de créer. Suivez ces étapes:

**1** - Cliquez sur l'onglet " **Task Sequence** ".

**2** - Avec le bouton " **Add** ", créez une nouvelle variable en ajoutant une nouvelle action nommée " **Set Task Sequence Variable** ". Créez cette variable dans la partie " **Preparation** " de la séquence de tâche. L'essentiel étant de le faire avant la mise à niveau en elle-même.

**3** - Nommez la variable " **WindowsUpgradeAdditionalOptions** " (deux champs) et indiquez la valeur **`/eula accept`**.



Validez. Voilà, votre séquence de tâche est prête à l'emploi. Si besoin, vous pourriez ajouter d'autres actions personnalisées pour lancer des scripts, etc.

## IV. Mise à niveau Windows 10 vers Windows 11

Pour initier le processus de mise à niveau, ne démarrez pas votre machine en PXE. À cause de plusieurs contraintes, comme le Secure Boot, cela risque de ne pas fonctionner. À la place, et comme pour une capture, lancez l'assistant de déploiement depuis le bureau de Windows 10. Accédez au partage correspondant au DeploymentShare, à savoir, pour ma part:

```
\\srv-wds\DeploymentShare$
```


Puis, accédez au répertoire " **Scripts** " afin de lancer le fichier nommé " **LiteTouch.vbs** ".


Ensuite, un assistant s'exécute. Sélectionnez la tâche de mise à niveau créée précédemment et poursuivez. Vous n'avez rien à effectuer comme paramétrage. Nous pourrions même aller plus loin dans la personnalisation de MDT pour masquer ces étapes additionnelles.



Lancez l'opération. La séquence de tâche va rapidement afficher le statut " **Upgrade Windows** " accompagné par le message " **Upgrade OS** ". Vous n'aurez plus qu'à patienter pendant la mise à niveau.



Comme tout processus de mise à niveau, celui-ci effectué via MDT implique un redémarrage de l'ordinateur. C'est aussi à ce moment-là qu'un message de confirmation sera visible à l'écran. Il s'affiche lorsque l'exécution de la tâche est terminée. Cliquez sur le bouton " **Finish** ".



Vous devriez arriver sur l'écran de connexion de Windows 11! L'utilisateur peut se reconnecter à sa session et retrouver l'ensemble de ses données et applications.

## V. Conclusion

Comme nous venons de le voir, il est tout à fait possible de migrer un parc de Windows 10 à Windows 11 à l'aide de la solution MDT. L'avantage de cette méthode réside principalement dans la personnalisation du processus, avant l'ajout d'étapes à souhait. Une autre solution plus radicale consiste à redéployer complètement les ordinateurs via une nouvelle image Windows 11, et ainsi repartir sur une base saine. Ceci implique des actions supplémentaires pour prendre en considération la sauvegarde des données des utilisateurs.