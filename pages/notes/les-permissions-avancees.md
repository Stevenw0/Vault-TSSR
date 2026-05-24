## Les permissions avancées sur les fichiers (associées aux systèmes de fichiers)

![](https://hedgedoc.dawan.fr/uploads/upload_9f1306afe285dfb689298677a70aacfc.png)

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#A-Types-de-permissions "A-Types-de-permissions")A/ Types de permissions

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#1-Lire---r "1-Lire---r")1) Lire - r

- Fichiers : permet l’affichage du contenu d’un fichier
- Répertoires : permet de lister le contenu d’un répertoire

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#2-Ecrire---w "2-Ecrire---w")2) Ecrire - w

- Fichiers : permet de modifier le contenu d’un fichier
- Répertoires : permet d’ajouter, de supprimer et de renommer les fichiers contenus dans le répertoire

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#3-Ex%C3%A9cuter---x "3-Exécuter---x")3) Exécuter - x

- Fichiers : permet d’exécuter un fichier en tant que programme ou script
- Répertoires : permet d’accéder au répertoire et d’effectuer des opérations telles que la recherche de fichiers

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#B-Propri%C3%A9taires-et-Groupes "B-Propriétaires-et-Groupes")B/ Propriétaires et Groupes

- **U**ser : l’utilisateur qui possède les fichiers/dossiers
- **G**roupe : ensemble d’utilisateurs qui peuvent avoir des permissions communes sur les fichiers/dossiers
- **O**thers : tous les autres utilisateurs du système

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#C-Affichage-des-permissions "C-Affichage-des-permissions")C/ Affichage des permissions

La commande `ls -l` affiche les permissions sous la forme “-rwxrwxrwx”, qui représente respectivement les permissions du propriétaire (user), du groupe et des autres (others).  
Le premier caractère indique le type de fichier par exemple ‘-’ pour un fichier ordinaire, ‘d’ pour un répertoire.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#D-Modification-des-permissions "D-Modification-des-permissions")D/ Modification des permissions

- **chmod** : change les permissions d’un fichier ou d’un répertoire
- **chown** : change le propriétaire d’un fichier ou d’un répertoire
- **chgrp** : change le groupe associé à une fichier ou à un répertoire

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Utilisation-de-chmod "Utilisation-de-chmod")Utilisation de `chmod`

Deux manières d’utiliser `chmod` :

##### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Mode-symbolique "Mode-symbolique")Mode symbolique

Utilise des lettres pour définir les permissions.

|Utilisateur|Commentaire|
|---|---|
|`u`|Propriétaire du fichier (user).|
|`g`|Groupe du propriétaire (group).|
|`o`|Tous les autres (other).|
|`a`|Tout le monde (all).|
|`+`|Ajoute des permissions.|
|`-`|Retire des permissions.|
|`=`|Redéfinition des permissions (avec suppression de celles qui ne sont pas précisées).|
|`,`|La virgule sépare les groupes (sans espaces)|

Exemple :  
lors de sa création un fichier a déjà des droits que l’on peut voir avec la commande :

```
ls -l monFichier
-rw-r--r-- 1 nguw nguw 0 Feb 18 17:54 monFichier
```

Ici : `u=rw,g=r,o=r`  peut lire et écrire, le groupe peut lire et le reste du monde peut lire.

- Si je veux que le groupe ne puisse plus lire et que le reste du monde non plus je tape :

```
chmod g-r,o-r monFichier
g-r #se lit g moins r, car il enlève une permission
o-r #se lit o moins r
```

- Si je veux que tout le monde puisse lire, écrire et exécuter le ficher je tape :
    - `chmod u+rwx,g+rwx,o+rwx monFichier`
    - ou encore, avec l’option a qui veut dire all :
    - `chmod a+rwx monFichier`

##### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Mode-num%C3%A9rique-octal "Mode-numérique-octal")Mode numérique (octal)

Utilise des chiffres pour définir les permissions.

Exemple : **`chmod 750 fichier`** pour **`rwxr-x---`**

Les chiffres représentent les permissions suivantes :

- **4** : lire - r
- **2** : écrire - w
- **1** : exécuter - x
- **0** : aucune permission

![](https://hedgedoc.dawan.fr/uploads/upload_8b0fb7bb1dcbce8410a739946cfd9b46.jpg)

La somme de ces chiffres détermine les permissions. Par exemple, 6(4+2) permet de lire et d’écrire mais pas d’exécuter.

Exemples avec chmod :

- `chmod u=rw,g=r,o= fichier` définit les permissions pour le propriétaire (rw-), le groupe (r--) et les autres (---)
- `chmod 640 fichier` : définit les permissions pour le propriétaire (rw-), le groupe (r--) et rien pour les autres (---)

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Les-Permissions-sp%C3%A9ciales "Les-Permissions-spéciales")Les Permissions spéciales

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#1-Setuid---Set-User-ID-s-sur-le-bit-x-du-propri%C3%A9taire "1-Setuid---Set-User-ID-s-sur-le-bit-x-du-propriétaire")1) Setuid - Set User ID (s sur le bit x du propriétaire)

- L’exécutable est lancé avec les droits du propriétaire du fichier
- En octal : 4
- `chmod u+s <fichier>` ou `chmod 4XXX`

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#2-Setgid---Set-Group-ID-s-sur-le-bit-x-du-groupe "2-Setgid---Set-Group-ID-s-sur-le-bit-x-du-groupe")2) Setgid - Set Group ID (s sur le bit x du groupe)

- Comme setuid mais pour le groupe
- Les fichiers créés dans un répertoire auront le même groupe que le répertoire
- En octal : 2
- `chmod g+s` ou `chmod 2XXX`

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#3-Sticky-Bit-t-sur-le-bit-x-des-autres "3-Sticky-Bit-t-sur-le-bit-x-des-autres")3) Sticky Bit (t sur le bit x des autres)

- Traditionnellement utilisé sur les exécutables pour indiquer que leur image binaire devrait rester dans la mémoire cache, mais, dans les systèmes modernes, son usage est différent
- Lorsqu’un répertoire a le sticky bit activé, ses fichiers peuvent être supprimés (ou renommés) uniquement par le propriétaire du fichier, le propriétaire du répertoire et l’utilisateur root. (typiquement /tmp)
- En octal : 1
- `chmod +t` ou `chmod 1XXX`

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#4-Exemples "4-Exemples")4) Exemples

- setuid seul : chmod 4755 fichier
- setgid seul : chmod 2755 fichier
- sticky bit seul : chmod 1755 fichier
- setuid et setgid : chmod 6755 fichier
- setuid et sticky bit : chmod 5755 fichier
- setgid et sticky bit : chmod 3755 fichier
- tous les trois : chmod 7755 fichier

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Bonus--Permissions-encore-plus-avanc%C3%A9es---ACL "Bonus--Permissions-encore-plus-avancées---ACL")Bonus : Permissions encore plus avancées - ACL

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Introduction "Introduction")Introduction

Les **ACL** (_Access Control Lists_) permettent d’aller **au-delà des permissions classiques** (`rwx` pour propriétaire, groupe et autres).  
Elles offrent une **gestion plus fine des droits** d’accès, en autorisant des permissions spécifiques pour **plusieurs utilisateurs ou groupes** sur un même fichier ou répertoire.

Cette section explique :

- comment **installer** et **afficher** les ACL ;
    
- comment **attribuer** des droits avancés à des utilisateurs et groupes ;
    
- comment **comprendre le fonctionnement du masque** (_mask_).
    

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Installation-du-support-ACL "Installation-du-support-ACL")Installation du support ACL

Les systèmes modernes supportent les ACL nativement.  
Si les commandes `getfacl` et `setfacl` ne sont pas disponibles, installez le paquet suivant :

```
sudo apt install acl
```

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Commandes-principales "Commandes-principales")Commandes principales

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#getfacl-%E2%80%94-afficher-les-ACL "getfacl-—-afficher-les-ACL")`getfacl` — afficher les ACL

Cette commande affiche les permissions étendues d’un fichier ou répertoire.

```
getfacl fichier.txt
```

Exemple de sortie :

```
# file: fichier.txt
# owner: sam
# group: compta
user::rw-
group::r--
group:rh:r-x
mask::rwx
other::r--
```

Explications :

- `user::` → droits du propriétaire
    
- `group::` → droits du groupe principal
    
- `group:rh:` → droits spécifiques au groupe `rh`
    
- `mask::` → limite maximale des permissions effectives
    
- `other::` → droits des autres utilisateurs
    

---

#### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#setfacl-%E2%80%94-d%C3%A9finir-une-ACL "setfacl-—-définir-une-ACL")`setfacl` — définir une ACL

Attribuer un droit spécifique à un utilisateur :

```
setfacl -m u:alice:rw fichier.txt
```

Attribuer un droit spécifique à un groupe :

```
setfacl -m g:rh:r-x fichier.txt
```

Supprimer une ACL :

```
setfacl -x u:alice fichier.txt
```

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#H%C3%A9ritage-et-ACL-par-d%C3%A9faut "Héritage-et-ACL-par-défaut")Héritage et ACL par défaut

Les répertoires peuvent définir des **ACL par défaut** : elles seront automatiquement appliquées aux nouveaux fichiers ou dossiers créés à l’intérieur.

Définir une ACL par défaut :

```
setfacl -m d:u:alice:rwx /srv/partage
```

Afficher les ACL par défaut :

```
getfacl /srv/partage
```

Les lignes commençant par `default:` indiquent ces ACL héritées.

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Le-r%C3%B4le-du-masque-mask "Le-rôle-du-masque-mask")Le rôle du masque (`mask`)

Le **mask** limite les droits effectifs des entrées ACL pour les utilisateurs et groupes **autres que le propriétaire**.  
Même si une ACL accorde `rwx`, le **mask** peut restreindre l’accès réel.

Vérifier l’effet du masque :

```
getfacl fichier.txt
```

Modifier le masque :

```
setfacl -m m:r-x fichier.txt
```

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Supprimer-toutes-les-ACL "Supprimer-toutes-les-ACL")Supprimer toutes les ACL

Pour réinitialiser un fichier à ses permissions classiques :

```
setfacl -b fichier.txt
```

(`-b` supprime toutes les ACL associées)

---

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#%C3%80-retenir "À-retenir")À retenir

- Les **ACL** permettent une **gestion plus granulaire** que les permissions classiques `rwx`.
    
- `getfacl` affiche les ACL, `setfacl` les modifie.
    
- Le **mask** limite les droits effectifs des ACL.
    
- Les **ACL par défaut** permettent l’héritage dans un répertoire.
    
- `setfacl -b` réinitialise un fichier en supprimant toutes les ACL.