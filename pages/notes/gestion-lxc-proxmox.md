# Gestion LXC avec Proxmox

Avant de créer une VM ou un conteneur, Proxmox a besoin d'une image de référence stockée localement sur le nœud. Il en existe deux types, et ils répondent à des besoins différents.

Une **ISO** est l'image d'un CD d'installation — elle sert à démarrer une VM pour la première fois et lancer l'installateur du système d'exploitation. C'est exactement ce qu'on fait quand on installe Linux ou Windows sur un PC depuis une clé USB. Les ISOs se stockent dans `local → ISO Images` et pointent vers `/var/lib/vz/template/iso/`.

Un **template LXC** est différent : c'est un système de fichiers complet, déjà installé et compressé, prêt à être extrait et démarré en quelques secondes. Il n'y a pas d'installateur — le conteneur est opérationnel dès sa création. Les templates se stockent dans `local → CT Templates` et pointent vers `/var/lib/vz/template/cache/`.

```
local
├── ISO Images      (/var/lib/vz/template/iso/)
│   └── debian-13.5.0-amd64-netinst.iso   ← pour créer des VMs KVM
└── CT Templates    (/var/lib/vz/template/cache/)
    └── debian-13-standard_13.5-1_amd64.tar.zst  ← pour créer des LXC
```

> [!INFO]
> **À retenir :** une ISO installe. Un template LXC est déjà installé. Ce sont deux approches radicalement différentes pour obtenir le même résultat final — un système Linux opérationnel — mais les VMs KVM utilisent des ISOs, et les conteneurs LXC utilisent des templates.


### 6.5.0 Télécharger une ISO pour les VMs

**Via l'interface web :** dans l'arborescence, cliquez sur votre nœud → **local** → onglet **ISO Images** → bouton **Download from URL**.

```
URL : https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.5.0-amd64-netinst.iso
```

Proxmox télécharge l'ISO directement depuis internet sur le serveur, sans passer par votre poste. La progression est visible dans la fenêtre de log.

**Via le shell :**

```bash
# Se placer dans le dossier ISOs de Proxmox
cd /var/lib/vz/template/iso/

# Télécharger l'ISO Debian 13 netinst (~650 Mo)
wget https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.5.0-amd64-netinst.iso

# Vérifier la présence du fichier
ls -lh /var/lib/vz/template/iso/
```

> [!TIP]
> **Résultat attendu de `ls -lh` :**
> ```
> -rw-r--r-- 1 root root 651M Jun 12 09:30 debian-13.5.0-amd64-netinst.iso
> ```
> Le fichier est immédiatement visible dans l'interface : **local → ISO Images**.


> [!WARNING]
> **Choisissez souvent la version netinst :** une ISO netinst Debian fait ~650 Mo contre 4-5 Go pour une ISO complète. Pour une Ubuntu Desktop, comptez 5 Go supplémentaires. Vérifiez l'espace disponible sur `local` avant de télécharger (`pvesm status | grep " local "`).


**Upload depuis votre poste :** si le serveur Proxmox n'a pas d'accès internet direct, vous pouvez uploader une ISO depuis votre machine via **local → ISO Images → Upload**. Le fichier transite par votre navigateur — comptez environ 1 minute par 100 Mo sur un réseau local standard.

---

## 6.6 Les templates LXC


Pour créer un conteneur LXC, Proxmox a besoin d'un point de départ — un système de fichiers minimal correspondant à une distribution Linux. Ces archives, qu'on appelle **templates**, sont l'équivalent des images Docker ou des ISOs pour les VM, en beaucoup plus léger : un template Debian 13 pèse environ 130 Mo une fois compressé.

Proxmox maintient un dépôt de templates officiels pour les distributions les plus courantes : Debian, Ubuntu, Alpine, CentOS, Fedora, et d'autres. Ces templates sont téléchargeables directement depuis l'interface graphique ou depuis la ligne de commande.

### 6.6.1 Gérer les templates avec pveam

📖 Documentation : [pve.proxmox.com/wiki/Linux_Container#pct_templates](https://pve.proxmox.com/wiki/Linux_Container)
> Ressource : [Templates LXC disponibles — download.proxmox.com](https://download.proxmox.com/images/system/)

`pveam` — Proxmox VE Appliance Manager — est l'outil en ligne de commande dédié à la gestion des templates. Pour voir ce qui est disponible dans le dépôt officiel, on consulte la section `system` :

```bash
# Lister les templates disponibles dans le dépôt (section système)
pveam available --section system
```

> [!TIP]
> **Résultat attendu :**
> ```
> system          alpine-3.19-default_20240207_amd64.tar.xz
> system          debian-13-standard_13.5-1_amd64.tar.zst
> system          debian-13-standard_13.0-1_amd64.tar.zst
> system          ubuntu-22.04-standard_22.04-1_amd64.tar.zst
> system          ubuntu-24.04-standard_24.04-2_amd64.tar.zst
> ```


La colonne de gauche indique la section (ici `system`), la colonne de droite le nom du fichier template. Le format `.tar.zst` indique une compression Zstandard, plus rapide que gzip pour des tailles similaires.

Pour télécharger un template sur le stockage local de votre nœud Proxmox :

```bash
# Télécharger le template Debian 13 sur le stockage "local"
pveam download local debian-13-standard_13.5-1_amd64.tar.zst
```

> [!TIP]
> **Résultat attendu :**
> ```
> downloading https://download.proxmox.com/images/system/debian-13-standard_13.5-1_amd64.tar.zst to /var/lib/vz/template/cache/debian-13-standard_13.5-1_amd64.tar.zst
> ...
> download finished
> ```


Une fois téléchargé, le template est stocké dans `/var/lib/vz/template/cache/`. Pour lister les templates disponibles localement :

```bash
# Lister les templates présents sur le stockage local
pveam list local
```

> [!TIP]
> **Résultat attendu :**
> ```
> NAME                                                         SIZE
> local:vztmpl/debian-13-standard_13.5-1_amd64.tar.zst       134.47MB
> ```


La référence `local:vztmpl/...` est exactement ce qu'on utilisera dans la commande `pct create` pour désigner ce template.

> [!INFO]
> **À retenir :** les templates se téléchargent une seule fois et restent disponibles pour créer autant de conteneurs qu'on souhaite. Si vous déployez dix conteneurs Debian 13, vous n'aurez téléchargé le template qu'une seule fois.


---

## 6.6 Créer un conteneur LXC


### 6.6.1 Via l'interface graphique

L'interface graphique de Proxmox propose un assistant de création en plusieurs étapes. Pour le lancer, cliquez sur **Create CT** en haut à droite de l'interface. L'assistant vous guidera à travers :

1. **General** — VMID (identifiant numérique unique du conteneur), hostname, mot de passe root, clé SSH optionnelle
2. **Template** — sélection du template téléchargé (stockage local, sous CT Templates)
3. **Disks** — taille du disque racine et stockage cible (local-lvm recommandé)
4. **CPU** — nombre de cœurs alloués
5. **Memory** — RAM et swap en mégaoctets
6. **Network** — interface réseau, bridge, IP statique ou DHCP, passerelle
7. **DNS** — serveur DNS (hérite des paramètres de l'hôte par défaut)
8. **Confirm** — récapitulatif avant création

> [!INFO]
> **À noter :** la case "Unprivileged container" en bas de l'onglet General est cochée par défaut depuis Proxmox VE 7. Ne la décochez pas sans raison valable.


### 6.6.2 Via la ligne de commande avec pct create


La commande `pct create` offre exactement les mêmes options que l'assistant graphique, mais dans un format reproductible et scriptable. C'est ce que les administrateurs utilisent pour automatiser le déploiement de dizaines de conteneurs identiques.

Voici la commande complète pour créer un conteneur webserver avec une IP statique :

```bash
# Créer le conteneur ID 100 à partir du template Debian 13
# RAM 512 Mo, swap 512 Mo, disque 8 Go sur local-lvm
# IP statique 192.168.44.100/24, passerelle 192.168.44.1
# Mode non-privilégié, démarrage automatique après création
pct create 200 local:vztmpl/debian-13-standard_13.5-1_amd64.tar.zst \
  --hostname webserver \
  --memory 512 \
  --swap 512 \
  --rootfs local-lvm:8 \
  --net0 name=eth0,bridge=vmbr0,ip=192.168.44.100/24,gw=192.168.44.1 \
  --password 'CHANGE_ME' \
  --unprivileged 1 \
  --start 1
```

> [!TIP]
> **Résultat attendu :**
> ```
> extracting archive '/var/lib/vz/template/cache/debian-13-standard_13.5-1_amd64.tar.zst'
> Total bytes written: 312475648 (298MiB, 156MiB/s)
> Detected container architecture: amd64
> Creating SSH host key 'ssh_host_ed25519_key' - this may take some time ...
> done: SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
> ```


Chaque option a un rôle précis. `--memory 512` alloue 512 Mo de RAM. `--rootfs local-lvm:8` crée un volume logique de 8 Go sur le groupe de volumes LVM. L'option `--net0` configure la première interface réseau avec les paramètres IP statiques. L'option `--start 1` démarre le conteneur immédiatement après la création, sans avoir à lancer `pct start` manuellement.

> [!WARNING]
> **Attention aux adresses IP :** l'IP que vous attribuez à votre conteneur doit être dans le même sous-réseau que votre réseau physique, et ne doit pas être déjà utilisée par une autre machine. Adaptez `192.168.44.100` à votre environnement réel.


---

## 6.7 Le cycle de vie d'un conteneur


Une fois votre conteneur créé, vous interagissez avec lui via un ensemble de commandes `pct` qui forment un vocabulaire cohérent. Comprendre ce cycle de vie est essentiel avant de passer aux opérations plus avancées.

```bash
pct list                    # lister tous les conteneurs et leur état
pct start 200               # démarrer le conteneur 200
pct stop 200                # arrêt immédiat (équivalent à couper l'alimentation)
pct shutdown 200            # arrêt propre via signal ACPI (recommandé)
pct reboot 200              # redémarrer le conteneur
pct status 200              # afficher l'état actuel du conteneur
pct destroy 200             # supprimer le conteneur (doit être arrêté au préalable)
```

> [!TIP]
> **Résultat de pct list :**
> ```
> VMID       Status     Lock         Name
> 100        running                 webserver
> ```


La distinction entre `pct stop` et `pct shutdown` est importante. `pct stop` coupe brutalement le conteneur sans lui laisser le temps de terminer ses processus proprement — c'est l'équivalent de débrancher une machine physique. `pct shutdown` envoie un signal ACPI qui permet aux services de s'arrêter proprement, exactement comme si on cliquait sur "Éteindre" dans un OS. Préférez toujours `pct shutdown` pour éviter la corruption des données.

> [!INFO]
> **À retenir :** un conteneur doit être **arrêté** avant de pouvoir être supprimé avec `pct destroy`. Proxmox refusera de supprimer un conteneur en cours d'exécution — une protection bienvenue contre les suppressions accidentelles.


---

## 6.8 Accéder à un conteneur et l'administrer


### 6.8.1 La console interactive

Pour accéder à un shell dans votre conteneur, Proxmox propose deux méthodes. La première, `pct shell`, ouvre une session interactive directement dans le contexte du conteneur — c'est la commande recommandée en PVE 9 (`pct enter` est déprécié dans cette version) :

```bash
# Ouvrir une session shell interactive dans le conteneur 200 (PVE 9)
pct shell 200
```

> [!TIP]
> **Résultat attendu :**
> ```
> root@webserver:/#
> ```


Vous êtes maintenant à l'intérieur du conteneur. Le prompt change pour refléter le hostname du conteneur. Depuis cette session, vous pouvez travailler comme sur n'importe quel système Debian : installer des paquets, éditer des fichiers de configuration, gérer des services. Pour quitter, tapez `exit` ou `Ctrl+D`.

### 6.8.2 Exécuter des commandes sans entrer dans le conteneur

La seconde méthode, `pct exec`, permet d'exécuter une commande dans le conteneur sans ouvrir de session interactive — très utile pour les scripts ou les opérations ponctuelles :

```bash
# Exécuter bash dans le conteneur (session interactive via exec)
pct exec 200 -- bash

# Mettre à jour les paquets sans entrer dans le conteneur
pct exec 200 -- apt update

# Vérifier qu'un service fonctionne
pct exec 200 -- systemctl status ssh
```

> [!TIP]
> **Résultat de apt update :**
> ```
> Hit:1 http://deb.debian.org/debian trixie InRelease
> Hit:2 http://deb.debian.org/debian-security trixie-security InRelease
> Reading package lists... Done
> ```


Le double tiret `--` est une convention Unix qui sépare les options de `pct exec` de la commande à exécuter à l'intérieur du conteneur. Sans ce séparateur, certaines options pourraient être interprétées par `pct` lui-même plutôt que transmises à la commande cible.

> [!INFO]
> **Analogie :** `pct shell` est l'équivalent de `docker exec -it` avec un shell interactif. `pct exec` correspond à `docker exec` pour une commande ponctuelle. Si vous avez déjà travaillé avec Docker, ces deux commandes vous seront immédiatement familières.


---

## 6.9 Configuration et modification à chaud


### 6.9.1 Lire la configuration d'un conteneur

Chaque conteneur Proxmox est décrit par un fichier de configuration au format texte, stocké dans `/etc/pve/lxc/<VMID>.conf`. Ce fichier est la source de vérité pour toutes les options du conteneur. Pour le consulter :

```bash
# Afficher la configuration du conteneur 200
pct config 200
```

> [!TIP]
> **Résultat attendu :**
> ```
> arch: amd64
> cores: 1
> hostname: webserver
> memory: 512
> net0: name=eth0,bridge=vmbr0,firewall=1,gw=192.168.44.1,ip=192.168.44.100/24
> ostype: debian
> rootfs: local-lvm:vm-100-disk-0,size=8G
> swap: 512
> unprivileged: 1
> ```


Vous pouvez aussi lire le fichier directement :

```bash
# Lire le fichier de configuration brut
cat /etc/pve/lxc/100.conf
```

> [!TIP]
> **Résultat attendu :**
> ```
> arch: amd64
> cores: 1
> hostname: webserver
> memory: 512
> net0: name=eth0,bridge=vmbr0,hwaddr=BC:24:11:xx:xx:xx,ip=dhcp,type=veth
> ostype: debian
> rootfs: local-lvm:vm-100-disk-0,size=8G
> swap: 512
> unprivileged: 1
> ```


### 6.9.2 Modifier les ressources à chaud

L'un des avantages des conteneurs LXC par rapport aux VM est la possibilité de modifier certaines ressources sans redémarrer. Proxmox exploite les cgroups v2 pour modifier à chaud la mémoire allouée et le nombre de cœurs CPU :

```bash
# Augmenter la RAM à 1024 Mo sans redémarrer le conteneur
pct set 200 --memory 1024

# Passer le conteneur à 2 cœurs CPU
pct set 200 --cores 2

# Vérifier que les changements sont pris en compte
pct config 200
```

> [!TIP]
> **Résultat de pct config après modification :**
> ```
> arch: amd64
> cores: 2
> hostname: webserver
> memory: 1024
> ...
> ```


La commande `pct set` modifie simultanément le fichier de configuration et les paramètres actifs du conteneur via les cgroups. Les changements sont persistants : si le conteneur redémarre, il utilisera les nouvelles valeurs.

> [!WARNING]
> **Attention :** on peut augmenter la RAM à chaud, mais réduire la RAM en dessous de la mémoire actuellement utilisée par le conteneur peut provoquer des erreurs ou forcer l'OOM killer à tuer des processus. Vérifiez la consommation mémoire actuelle avant de réduire.


### 6.9.3 Bind mounts et volumes additionnels


Le stockage d'un conteneur LXC ne se limite pas à son `rootfs`. Proxmox permet d'ajouter des **bind mounts** (répertoires de l'hôte montés dans le conteneur) et des **volumes additionnels** (volumes LVM ou ZFS dédiés à un chemin particulier).

Les bind mounts sont utiles pour partager des données entre l'hôte et un conteneur, ou entre plusieurs conteneurs — répertoire commun de logs, données partagées, source de configuration.

```bash
# Ajouter un bind mount : /srv/data-shared de l'hôte monté dans /data du CT 200
pct set 200 --mp0 /srv/data-shared,mp=/data

# Vérifier la configuration
pct config 200 | grep "^mp"
# → mp0: /srv/data-shared,mp=/data

# Ajouter un volume LVM dédié (5 Go sur local-lvm, monté sur /var/lib/mysql)
pct set 200 --mp1 local-lvm:5,mp=/var/lib/mysql

# Voir tous les points de montage
pct config 200 | grep -E "^(rootfs|mp)"
# → rootfs: local-lvm:vm-100-disk-0,size=8G
# → mp0: /srv/data-shared,mp=/data
# → mp1: local-lvm:vm-100-disk-1,size=5G,mp=/var/lib/mysql
```

> [!TIP]
> **Résultat attendu :**
> ```
> rootfs: local-lvm:vm-100-disk-0,size=8G
> mp0: /srv/data-shared,mp=/data
> mp1: local-lvm:vm-100-disk-1,size=5G,mp=/var/lib/mysql
> ```


> [!WARNING]
> **Bind mounts et conteneurs non-privilégiés :** les fichiers du répertoire partagé appartiennent à root (UID 0) sur l'hôte, mais le "root" du conteneur non-privilégié est mappé sur UID 100000. Le bind mount sera inaccessible en écriture depuis le conteneur. Solution : `chown 100000:100000 /srv/data-shared` sur l'hôte avant de démarrer le conteneur.


---

