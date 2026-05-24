**Le BCD ou Boot Configuration Data** est un magasin contenant les données de démarrage de Windows.  
En clair il stocke **la configuration du démarrage de Windows**.  
Ce magasin est donc extrêmement important puisqu’il permet au système d’exploitation de démarrer.  
Si ce dernier est endommagé, Windows va se bloquer au démarrage avec une [erreur BCD](https://www.malekal.com/resoudre-erreur-bcd-winload-demarrage-windows-10-11/).

Cet article décrit le fonctionnement du BCD de Windows.

![Le BCD (Boot Configuration Data) de Windows](https://www.malekal.com/wp-content/uploads/bcd-windows.jpg)

Le BCD (Boot Configuration Data) de Windows

## Description du BCD et démarrage de Windows

Le BCD a été introduit depuis Windows Vista et permet le démarrage de Windows en mode MBR ou EFI.  
Il remplace le démarrage avec le boot.ini qui était utilisé depuis Windows 95 et encore sur Windows XP, basé sur une architecture NTLDR (NT Loader).

Le BCD consiste en une série de déclaration des entrées de démarrage, ainsi, si vous êtes en [Dual-Boot](https://www.malekal.com/dual-boot-windows-10-windows-7/) avec plusieurs Windows, vous aurez une entrée pour chaque Windows.  
On trouve aussi une entrée pour [la partition de récupération de Windows](https://www.malekal.com/partition-de-recuperation-windows).

Le BCD est composé de deux éléments:

- [**le Gestionnaire de démarrage de Windows** (Windows Boot Manager](https://www.malekal.com/windows-boot-manager/) en anglais).
- Le ou **[les chargeurs de démarrage de Window](https://www.malekal.com/chargeur-de-demarrage-boot-loader/) s** qui continent les informations et paramètres du démarrage du système d’exploitation.

Le gestionnaire de démarrage lit la configuration du BCD afin de charger ensuite le système d’exploitation.

Sur les ordinateurs EFI, l’entrée Windows Boot Manager est visible dans les entrées de démarrage de l’ordinateur.  
On peut alors sélectionner Windows Boot Manager pour lancer ce dernier.  
Dans le cas [d’un dual-boot Linux/Windows](https://www.malekal.com/utiliser-dnf-yum-linux-fedora-redhat-rehl/), le Windows Boot Manager sera encore visible et une entrée correspondant à l’installation Linux aussi, par exemple Ubuntu Boot Manager.

![Le BCD (Boot Configuration Data) de Windows : modifier, sauvegarder, etc](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-3.jpg)

Le BCD (Boot Configuration Data) de Windows: modifier, sauvegarder, etc

Enfin si vous êtes curieux et souhaitez connaître le processus de démarrage de Windows.  
Alors suivez ces liens:

- [Processus de démarrage de Windows en EFI](https://www.malekal.com/processus-demarrage-uefi-windows/)
- [Le démarrage de Windows en MBR](https://www.malekal.com/processus-demarrage-windows-mbr/)

### Le gestionnaire de démarrage de Windows

Le gestionnaire de démarrage de Windows (Windows Boot Manager en anglais) est le composant qui permet de lire le BCD pour initialiser le démarrage de Windows.

Sur les ordinateurs MBR, le BCD est composé d’un fichier `C:\bootmgr`.  
Lorsque l’ordinateur démarre, c’est ce qui fichier qui est lu afin de pouvoir démarrer ensuite sur Windows.  
Dans le cas où le fichier est manquant, on obtient alors une erreur [Erreur Bootmgr est absent/missing](https://www.malekal.com/resoudre-erreur-bootmgr-absent_missing/)

Sur les ordinateurs EFI, le gestionnaire de démarrage de Windows se trouve dans la partition EFI, dans un fichier bootmgfw.efi: `\EFI\Microsoft\Boot\bootmgfw.efi`

### Le BCD (Boot Configuration Data)

Le BCD (Boot configuration Data) comme son nom l’indique contient les informations de démarrage du système d’exploitation.  
Ce dernier se charge d’initialiser Windows en chargeant le processus winload.exe (ou winload.efi) qui va ensuite lancer ntoskrnl.exe et les pilotes matériels.

Le BCD se compose d’un ou plusieurs chargeurs de démarrage, si l’ordinateur est en Dual-boot ou non.

Un chargeur de démarrage contient l’emplacement du système d’exploitation, c’est à dire sur quelle partition Windows est installé et le chemin du chargeur de démarrage.  
Dans les ordinateurs, le patch du BCD pointe vers winload.exe, dans les ordinateurs EFI, il s’agit du processus winload.efi  
L’emplacement du BCD est `\EFI\Microsoft\Boot\BCD` pour les ordinateurs EFI et `\boot\BCD` pour les ordinateurs MBR.

L’utilitaire BCDedit permet de lister les entrées et les modifier du BCD (et du gestionnaire de démarrage de Windows).  
Ainsi la commande suivante accessible depuis [l’invite de commandes de Windows](https://www.malekal.com/linvite-de-commandes-de-windows/) permet de lister le contenu du BCD:

```
bcdedit /v
```

On trouve alors la configuration du Gestionnaire de démarrage de Windows et le chargeur de démarrage de Windows  
Chacun ayant un identificateur propre qui permet ensuite de modifier les paramètres de l’entrée.

![Afficher le BCD (Boot Configuration Data) de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows.jpg)

Afficher le BCD (Boot Configuration Data) de Windows

bcedit permet à la fois de modifier les entrées du magasin mais aussi les options du gestionnaire de démarrage de Windows.

Notez qu’une partie de la configuration démarrage, comme l’OS par défaut en cas de Dual-Boot ou le délai pour choisir l’OS peut-être configuré graphiquement.  
Cela se fait depuis le [Panneau de configuration](https://www.malekal.com/panneau-de-configuration-windows/) > Système > Paramètre système Avancés.  
Cliquez sur le bouton Paramètres dans la partie Démarrage et récupération.

![Le BCD (Boot Configuration Data) de Windows : modifier, sauvegarder, etc](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-2-768x540.jpg)

Le BCD (Boot Configuration Data) de Windows: modifier, sauvegarder, etc

## BCDedit: modification du BCD

L’utilitaire BCDedit permet de modifier le contenu du BCD.  
Cet outil fonctionne avec les identifiants pour modifier ensuite une entrée à travers la commande

```
bcdedit /set [{ID}] typeDeDonnées Valeur
```

La commande set permet donc de modifier une valeur, mais il existe aussi d’autres commandes comme:

- */copy* pour copier une entrée
- */deletevalue* pour supprimer une valeur
- */delete* pour supprimer une entrée du chargeur de démarrage

Les identifiants standards sont:

- *{bootmgr}* = Le gestionnaire de démarrage de Windows (Windows Boot Manager)
- *{current}* = L’OS sélectionné au démarrage de Windows
- *{default}* = L’OS sélectionné par défaut au démarrage de Windows
- *{ntldr}* = Un système d’exploitation en ntldr (Windows Legacy OS Loader) par exemple windows xp

![Bcdedit pour modifier le bcd de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-4.jpg)

Bcdedit pour modifier le bcd de Windows

Il est aussi possible de travailler directement avec les identificateur et leur UUID {XXXX-XXXX-XXXX-XXXX}

### Exemple utilisation BCDEdit

Voici maintenant quelques exemples d’utilisation de la commande bcdedit:

[bcdedit: Modifier le démarrage de Windows](https://www.malekal.com/bcdedit-modifier-demarrage-windows/)  

Autre exemple pour recréer une entrée de démarrage de Windows, pratique en cas de [Dual-Boot](https://www.malekal.com/dual-boot-windows-10-windows-7/).  
Les explications sont données sur la page [Dual-boot Windows 10 et Windows 7](https://www.malekal.com/dual-boot-windows-10-windows-7/) mais voici une vidéo qui récapitule le principe et les commandes bcdedit à utiliser:

### Sauvegarder le BCD de Windows

Il est possible de sauvegarder le BCD de Windows afin de pouvoir l’importer ensuite.  
Cela se fait toujours à partir de la commande bcdedit et l’option export.

```
bcdedit /export C:\SAUVEGARDEBCD
```

Cela va créer un fichier C:\\SauvegardeBCD, si vous désirez réimporter le BCD, la commande à utiliser sera alors:

```
bcdedit /import c:\savedbcd
```

## BcdBoot: reconstruire le BCD de Windows 10

La commande bcdboot permet de réparer le fichier de configuration de démarrage de Windows.  
Vous trouverez des explications sur l’utilisation de cette commande, sur la page:

[bcdboot: reconstruire le BCD de Windows 10](https://www.malekal.com/bcdboot-reconstruire-bcd-windows-10)  

## Outils d’édition du BCD

### EasyBCD

EasyBCD est un outil qui permet de modifier le démarrage de Windows graphiquement.  
En clair donc, EasyBCD change la configuration du BCD avec une présentation assez simple pour les débutants.

Plus d’informations sur EasyBCD, rendez-vous sur le tutoriel:

[EasyBCD: Editeur du BCD et configurer de démarrage de Windows](https://www.malekal.com/easybcd-editeur-bcd-configurer-demarrage-windows/)  

![EasyBCD pour modifier la configuration du démarrage de Windows](https://www.malekal.com/wp-content/uploads/EasyBCD_edition_menu_demarrage.jpg)

EasyBCD pour modifier la configuration du démarrage de Windows

### Visual BCD Editor

[Visual BCD Editor](https://www.boyans.net/) est un utilitaire pratique pour modifier des entrées du BCD.  
Les entrées du BCD sont accessibles facilement.

![Visual BCD Editor Editer le bcd de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-Visual-BCD-768x511.jpg)

Visual BCD Editor Editer le bcd de Windows

En double-cliquant sur une valeur, il est possible de modifier le contenu.

![Visual BCD Editor Editer le bcd de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-Visual-BCD-2-768x495.jpg)

Visual BCD Editor Editer le bcd de Windows

Visual BCD Editor donne aussi la possibilité de sauvegarder et importer un BCD et possède des fonctions de réparation du démarrage de Windows.

![Visual BCD Editor Editer le bcd de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-Visual-BCD-4.jpg)

Visual BCD Editor Editer le bcd de Windows

![Visual BCD Editor Editer le bcd de Windows](https://www.malekal.com/wp-content/uploads/bcd-boot-configuration-data-windows-Visual-BCD-3.jpg)

Visual BCD Editor Editer le bcd de Windows

### Bootice

Bootice est un autre utilitaire complet pour modifier la configuration du démarrage de Windows.  
Vous pouvez aussi sauvegarder ce dernier.  
Un article est présent sur le site:

[Bootice: configurer le démarrage UEFI, MBR et le BCD de Windows](https://www.malekal.com/bootice-configurer-demarrage-uefi-mbr-bcd-windows/)  

![Bootice modifier la configuration du démarrage de Windows](https://www.malekal.com/wp-content/uploads/tutoriel-bootice-configuration-uefi-mbr-bcd.jpg)

Bootice modifier la configuration du démarrage de Windows



