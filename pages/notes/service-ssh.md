## Quelques services associés : (x)inetd, le serveur SSHd

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Xinetd--Super-serveur "Xinetd--Super-serveur")Xinetd : Super serveur

Normalement, sur un système, un port est ouvert par un service. Donc si on a 100 services, il y aura 100 ports ouverts. 100 services peuvent consommer beaucoup de ressources, même lorsqu’ils sont en attente.

Le rôle de xinetd était d’ouvrir chacun des 100 ports et d’attendre les éventuelles connexions. Ce n’est que lorsqu’une se présente que xinetd lancera réellement le service.

On n’a donc plus que 1 service et 100 ports.

Aujourd’hui xinetd est tombé en désuétude car avantageusement remplacé par systemd et les unités de type _socket_.

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Service-SSH "Service-SSH")Service SSH

SSH : **S**ecure **SH**ell

Permet des connexions distantes sécurisées car chiffrées -> remplace telnet (non chiffré).

**Comment se fait l’authentification ?**

Par défaut, SSH tente d’authentifier le client par une paire de clés cryptographiques.

**Pourquoi nous demande-t-on le mot de passe ?**

Tout simplement parce qu’on n’a pas de clé !

`ssh stagiaire@IP -v` pour voir les étapes de connexion et d’authentification

**Problématiques du mot de passe**

- On peut se connecter depuis n’importe où (possible tout de même de configurer des restrictions dans `/etc/ssh/sshd_config`)
- On ne peut pas faire de rebond de machine en machine si les mots de passe sont différents
- Que faire si l’utilisateur distant modifie son mot de passe sans nous le dire ?

**Mise en place d’une connexion par clés privée/publique**

- Génération d’un paire de clés privée/publique
    - Remarque : on génère ces clés sur la machine depuis laquelle seront initiées les connexions
        
        ```
        ssh-keygen -t type
        
        # Exemple concret : 
        ssh-keygen -t ed25519 -C "clé formation s12 2026"
        ```
        
    - Principaux types :
        
        - _**rsa**_ : ancien type par défaut, mais les clés doivent longues (au moins 4096 bits) pour être considérées comme sécurisées -> leur usage consomme de la puissance de calcul
        - _**ed25519**_ (algorithme à courbe elliptique) : type par défaut, aujourd’hui préconisé -> clé plus courte, donc moins consommatrice, tout en gardant un niveau de sécurité au moins indentique.

**Remarque**

Il est plus que fortement recommandé d’affecter une passphrase à la clé privée pour en garantir la protection.

La commande suivante permet de modifier la passphrase d’une clé précédemment créé

```
ssh-keygen -p -f chemin_de_la_clé_privée
```

Sous Windows, le chemin et le nom de la clé à utliser : `$env:USERPROFILE\.ssh\id_ed25519-s12-2026`

- Envoi de la clé publique sur le compte distant
    
    ```
    ssh-copy-id compte@IP
    
    # Exemple concret : 
    ssh-copy-id -i ~/.ssh/id_ed25519-s12-2026 stagiaire@192.168.56.200
    ```
    
    - Cette commande a pour effet de stocker la clé publique sur le compte distant dans le fichier `~/.ssh/authorized_keys`.

Méthode manuelle si pas `ssh-copy-id` disponible, faire les commandes suivantes sur `deby` :

```
$ pwd
/home/stagiaire

$ ls -la
...
# pas de dossier .ssh/
...

$ mkdir .ssh

$ touch .ssh/authorized_keys

$ nano .ssh/authorized_keys
# coller dans nano le contenu de votre clé publique
# puis enregistrer et quitter

$ chmod 700 .ssh/

$ chmod 600 .ssh/authorized_keys
```

Puis, depuis votre machine physique/hôte, faire :

```
# sous Linux :
ssh -i ~/.ssh/id_ed25519-s12-2026 stagiaire@192.168.56.200
# ou, sous Windows :
ssh -i $env:USERPROFILE\.ssh\id_ed25519-s12-2026 stagiaire@192.168.56.200
```

**Autre remarque**

Dès lors, la passphrase sera demandée en prélude à chaque connexion !  
Pour éviter, cela on peut utiliser un agent SSH.

Procédure

- Démarrer l’agent au début de chaque session
    
    ```
    eval $(ssh-agent)
    ```
    
- Charger dans l’agent une clé privée
    
    ```
    ssh-add chemin_de_la_clé_privée
    ```
    

Dès lors, il ne sera plus demandé de fournir la passphrase avant chaque connexion, pendant la durée de vie de `ssh-agent` !

**Remarque concernant la sécurité** : tant qu’une clé privée est chargée dans l’agent SSH, elle est stockée en clair quelque part dans la RAM et donc théoriquement accessible par des acteurs malveillants.

Pour limiter ce risque, on peut définir la durée pendant laquelle une clé privée reste chargée dans l’agent : `ssh-add -t DURÉE_DE_VIE chemin_de_la_clé_privée`  
`DURÉE_DE_VIE` étant un nombre de secondes, ou une durée au [format sshd_config](https://man.archlinux.org/man/sshd_config.5#TIME_FORMATS)

**Liste des clés privées chargées dans l’agent**

```
ssh-add -l
```

**Liste des clés publiques correspondant aux clés privées chargées dans l’agent**

```
ssh-add -L
```

**Déchargement de clés**

```
ssh-add -d chemin_de_la_clé_publique

ssh-add -D # décharge toutes les clés de l'agent
```