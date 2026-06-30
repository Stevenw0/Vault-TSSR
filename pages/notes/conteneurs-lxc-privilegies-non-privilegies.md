# Conteneurs LXC privilégiés et non-privilégiés

Proxmox vous propose, à la création de chaque conteneur, de choisir entre un mode **privilégié** et un mode **non-privilégié**. Ce choix conditionne directement la posture de sécurité du conteneur et certaines de ses capacités — il mérite qu'on comprenne ce qui se passe réellement sous le capot avant de cocher ou décocher cette case.

### 6.4.1 Ce que signifie "non-privilégié" — le remapping d'UIDs

La distinction repose sur une fonctionnalité du noyau Linux appelée **user namespace**. Pour comprendre pourquoi elle change tout, il faut saisir ce que fait root dans un conteneur sans elle.

Sans user namespace (conteneur **privilégié**), l'UID 0 à l'intérieur du conteneur correspond exactement à l'UID 0 sur l'hôte. Du point de vue du noyau Linux, c'est le même utilisateur. Si un attaquant exploite une faille dans le conteneur et parvient à en sortir, il est immédiatement root sur la machine physique — avec accès à tous les autres conteneurs, aux disques, à la configuration réseau. L'isolation LXC protège contre les accès normaux, mais une faille noyau suffit à tout compromettre.

Avec user namespace (conteneur **non-privilégié**), Proxmox configure un **remapping d'UIDs** : l'UID 0 à l'intérieur du conteneur est traduit en UID 100000 sur l'hôte. L'UID 1 devient 100001, l'UID 1000 devient 101000, et ainsi de suite sur une plage de 65 536 UIDs. Ce remapping est défini dans deux fichiers sur l'hôte :

```bash
# Plages UID/GID allouées à Proxmox pour les conteneurs non-privilégiés
cat /etc/subuid
# → root:100000:65536

cat /etc/subgid
# → root:100000:65536
```

> [!TIP]
> **Résultat attendu :**
> ```
> root:100000:65536
> ```
> Cela signifie que l'utilisateur `root` sur l'hôte peut utiliser la plage d'UIDs 100000–165535 pour les conteneurs non-privilégiés. Proxmox gère automatiquement cette allocation — vous n'avez jamais à modifier ces fichiers manuellement.


Concrètement : même si un attaquant obtient les droits root à l'intérieur du conteneur (UID 0 dans le conteneur = UID 100000 sur l'hôte), il n'est qu'un utilisateur ordinaire sans privilèges sur la machine physique. La faille noyau ne suffit plus.

### 6.4.2 Tableau de décision — quand choisir quel mode

La règle de départ est simple : **toujours commencer en non-privilégié**. La majorité des services courants fonctionnent parfaitement dans ce mode. Le mode privilégié n'est justifié que dans des cas précis, et encore — souvent évitables grâce aux `features` (voir section suivante).

| Cas d'usage                           | Mode recommandé              | Raison                             |
| ------------------------------------- | ---------------------------- | ---------------------------------- |
| Serveur web (nginx, Apache)           | Non-privilégié               | Aucune interaction noyau spéciale  |
| Base de données (MariaDB, PostgreSQL) | Non-privilégié               | Fonctionne parfaitement            |
| Serveur DNS, DHCP, mail               | Non-privilégié               | Aucun besoin de privilege          |
| **Docker à l'intérieur du LXC**       | Non-privilégié + `nesting=1` | Feature suffisante depuis PVE 7    |
| **Serveur NFS (exports)**             | Privilégié                   | NFS kernel server exige l'UID réel |
| **Accès à un périphérique `/dev/`**   | Privilégié                   | Remapping incompatible avec `/dev` |
| **Modules noyau personnalisés**       | Privilégié                   | Nécessite des capabilities kernel  |
| Tout le reste                         | Non-privilégié               | Par défaut                         |

> [!INFO]
> **À retenir :** Docker dans un LXC ne nécessite plus un conteneur privilégié depuis Proxmox VE 7. La feature `nesting=1` suffit dans la grande majorité des cas, ce qui change considérablement l'équation sécurité.


### 6.4.3 Les `features` — la voie du milieu

Entre "non-privilégié strict" et "privilégié total", Proxmox offre une troisième option : activer des **capabilities spécifiques** sur un conteneur non-privilégié via le paramètre `--features`. C'est la bonne pratique moderne — elle évite de sacrifier toute la sécurité du remapping d'UIDs pour un besoin ponctuel.

Les features disponibles les plus utiles :

| Feature     | Usage                          | Exemple typique                        |
| ----------- | ------------------------------ | -------------------------------------- |
| `nesting=1` | Docker-in-LXC, LXC-in-LXC      | Environnements de dev isolés           |
| `keyctl=1`  | Accès au keyring noyau         | Ceph, certains services de chiffrement |
| `fuse=1`    | Montages FUSE (sshfs, rclone…) | Stockage cloud monté dans le conteneur |
| `mknod=1`   | Création de nœuds device       | Cas rares, accès à `/dev` limité       |

```bash
# Ajouter la feature nesting à un conteneur existant (Docker-in-LXC)
pct set 200 --features nesting=1
# Le conteneur n'a pas besoin d'être arrêté pour cette opération

# Vérifier les features activées
pct config 200 | grep features
# → features: nesting=1

# Combiner plusieurs features
pct set 200 --features nesting=1,fuse=1,keyctl=1

# À la création — directement avec --features
pct create 200 local:vztmpl/debian-13-standard_13.1-2_amd64.tar.zst \
  --hostname ct-docker \
  --unprivileged 1 \
  --features nesting=1 \
  --memory 1024 \
  --rootfs local-lvm:20 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \
  --password 'CHANGE_ME'
# --unprivileged 1 \          # reste non-privilégié
# --features nesting=1 \      # Docker fonctionnera malgré tout
```

> [!TIP]
> **Résultat attendu de `pct config 200 | grep features` :**
> ```
> features: nesting=1
> ```


Avec `nesting=1`, le conteneur peut créer ses propres namespaces et faire tourner Docker normalement — tout en restant non-privilégié du point de vue de l'hôte. C'est un gain de sécurité significatif par rapport à passer tout le conteneur en mode privilégié.

### 6.4.4 Créer un conteneur dans chaque mode

```bash
# Mode non-privilégié — à utiliser par défaut
pct create 200 local:vztmpl/debian-13-standard_13.5-1_amd64.tar.zst \
  --hostname ct-secure \
  --unprivileged 1 \
  --memory 512 \
  --rootfs local-lvm:8 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \
  --password 'CHANGE_ME'
# --unprivileged 1 \          # root du CT = UID 100000 sur l'hôte

# Mode privilégié — uniquement si NFS server ou accès /dev indispensable
pct create 300 local:vztmpl/debian-13-standard_13.5-1_amd64.tar.zst \
  --hostname ct-nfs-server \
  --unprivileged 0 \
  --memory 512 \
  --rootfs local-lvm:8 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \
  --password 'CHANGE_ME'
# --unprivileged 0 \          # root du CT = root sur l'hôte — risque réel

# Vérifier le mode d'un conteneur existant
pct config 200 | grep unprivileged
```

> [!TIP]
> **Résultat attendu :**
> ```
> unprivileged: 1
> ```
> La valeur `1` confirme le mode non-privilégié. Un conteneur privilégié afficherait `unprivileged: 0` — ou n'afficherait pas la ligne du tout, car `0` est la valeur historique implicite.


> [!WARNING]
> **Limitation importante du mode non-privilégié :** les montages NFS *côté serveur* (export via `/etc/exports`) ne fonctionnent pas — le kernel NFS server a besoin d'UIDs réels. En revanche, monter un partage NFS *en tant que client* (`mount -t nfs`) fonctionne parfaitement en non-privilégié.


> [!DANGER]
> **Règle de sécurité :** en production, tous les conteneurs doivent être non-privilégiés sauf justification documentée. Si un service semble nécessiter le mode privilégié, vérifiez d'abord si une `feature` spécifique ne suffit pas — c'est presque toujours le cas.


---

