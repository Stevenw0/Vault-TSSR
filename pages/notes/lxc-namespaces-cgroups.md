# Namespaces et cgroups LXC

L'isolation dans LXC repose sur deux mécanismes complémentaires du noyau Linux. Il est important de les comprendre, car ce sont eux qui définissent à la fois les capacités et les limites des conteneurs.

Les **namespaces** sont la brique d'isolation. Le noyau Linux dispose de six types de namespaces, et LXC les utilise tous :

- **pid** — le conteneur voit ses propres processus. Le premier processus du conteneur a le PID 1 depuis son point de vue, même si du côté de l'hôte il porte un PID bien plus élevé.
- **net** — le conteneur a sa propre pile réseau : interfaces, tables de routage, règles de pare-feu. C'est grâce à cela qu'on peut attribuer une IP indépendante à chaque conteneur.
- **mnt** — le conteneur voit son propre système de fichiers, ancré dans un répertoire dédié sur l'hôte.
- **uts** — le conteneur peut avoir son propre hostname, indépendant de celui de l'hôte.
- **ipc** — isolation des ressources IPC (sémaphores, files de messages).
- **user** — remappage des UIDs/GIDs, clé des conteneurs non-privilégiés (nous y reviendrons).

Les **cgroups v2** (control groups) sont la brique de limitation de ressources. Là où les namespaces définissent ce que le conteneur voit, les cgroups définissent combien il peut consommer : CPU, RAM, I/O disque, réseau. C'est grâce aux cgroups que Proxmox peut garantir qu'un conteneur gourmand ne privera pas les autres des ressources qui leur sont allouées.

> [!INFO]
> **À retenir :**
> - namespaces = isolation (ce que le conteneur voit)
> - cgroups = limitation (ce que le conteneur peut consommer).

> Ces deux mécanismes fonctionnent ensemble pour créer un environnement à la fois isolé et contrôlé.


Pour vérifier concrètement l'isolation namespace d'un conteneur en cours d'exécution (CTID 200) :

```bash
# Voir les namespaces actifs du processus LXC côté hôte
ls -la /proc/$(pgrep -f "lxc-start.*200")/ns/
# → lrwxrwxrwx ... ipc -> 'ipc:[4026532512]'
# → lrwxrwxrwx ... mnt -> 'mnt:[4026532511]'
# → lrwxrwxrwx ... net -> 'net:[4026532514]'
# → lrwxrwxrwx ... pid -> 'pid:[4026532513]'

# Comparer avec les namespaces du PID 1 (systemd hôte)
ls -la /proc/1/ns/
# → Les numéros sont différents → isolation confirmée

# Pour un conteneur non-privilégié : vérifier le mapping UID
cat /proc/$(pgrep -f "lxc-start.*200" | head -1)/uid_map
# → 0  100000  65536
# → UID 0 dans le conteneur = UID 100000 sur l'hôte
```

> [!TIP]
> **Résultat attendu :**
> ```
> lrwxrwxrwx 1 100000 100000 0 ... ipc -> ipc:[4026532512]
> lrwxrwxrwx 1 100000 100000 0 ... mnt -> mnt:[4026532511]
> lrwxrwxrwx 1 100000 100000 0 ... net -> net:[4026532514]
> lrwxrwxrwx 1 100000 100000 0 ... pid -> pid:[4026532513]
> ```
> Chaque numéro de namespace diffère de ceux du PID 1 (systemd) : l'isolation est confirmée. Le propriétaire `100000` reflète le remappage UID du conteneur non-privilégié.


> [!WARNING]
> **Limite importante :** tous les conteneurs LXC partagent le noyau de l'hôte. Si le noyau de l'hôte comporte une faille de sécurité, un conteneur compromis peut potentiellement l'exploiter pour sortir de l'isolation. C'est pourquoi les mises à jour du noyau de l'hôte Proxmox restent critiques, même quand on n'utilise que des conteneurs.


### 6.2.3 cgroups v2 : gouvernance des ressources


Les namespaces isolent les ressources, mais ils ne les limitent pas. Sans limitation, un conteneur pourrait consommer tout le CPU ou toute la mémoire de l'hôte et affamer les autres. C'est le rôle des **cgroups** (Control Groups) — une fonctionnalité du noyau Linux active depuis la version 2.6.24 (2008).

La version 2 (cgroups v2), activée par défaut sur Debian 11+ et donc sur Proxmox VE 7+, unifie la hiérarchie de contrôle et améliore la gestion de la mémoire. Chaque conteneur LXC est représenté par un groupe de contrôle dans l'arborescence `/sys/fs/cgroup/`.

```bash
# Trouver le cgroup d'un conteneur LXC (CTID 200)
find /sys/fs/cgroup -name "*lxc*200*" -type d 2>/dev/null
# → /sys/fs/cgroup/machine.slice/machine-lxc-200.scope

# Voir les limites CPU actuelles (200000 µs sur 100000 µs = 2 vCPUs)
cat /sys/fs/cgroup/machine.slice/machine-lxc-200.scope/cpu.max
# → 200000 100000

# Voir la limite mémoire en octets (512 Mo = 536870912)
cat /sys/fs/cgroup/machine.slice/machine-lxc-200.scope/memory.max
# → 536870912

# Voir la consommation mémoire actuelle
cat /sys/fs/cgroup/machine.slice/machine-lxc-200.scope/memory.current
# → 62914560   ← ~60 Mo utilisés

# Modifier la limite CPU à chaud sans redémarrer
pct set 200 --cores 4
```

> [!TIP]
> **Résultat attendu après `pct set 200 --cores 4` :**
> ```
> cat /sys/fs/cgroup/machine.slice/machine-lxc-200.scope/cpu.max
> → 400000 100000   ← 4 vCPUs alloués
> ```
> Les modifications via `pct set` sont appliquées immédiatement via le cgroup — sans aucun redémarrage ni interruption de service.


---

