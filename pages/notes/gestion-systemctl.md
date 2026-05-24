### Gestion des services avec systemctl

**Présentation de systemd**

Infrastructure de gestion des services, mais pas que !  
systemd gère un ensemble d’unités, de plusieurs types :

```
$ sudo systemctl list-units --type=help
Available unit types:
service    : service
mount      : Montages décrits dans /etc/fstab
swap       : Swap décrits dans /etc/fstab
socket     : Ouverture de port avant que le service associé soit réellement démarré
target     : Regroupement d'unités
device     : Activation des périphériques
automount  : Gestion des montages en automontage
timer      : Alternative moderne à cron
path       : Surveillance de répertoire (infrastructure inotify)
slice      : gestion des allocations de ressources CPU, RAM, etc (via CGroup)
scope      : grouper des processus, lancés/gérés en dehors de systemd
```

**Fonctionnalités**

- Gestion des services
- Alternative à cron
- Alternative à rsyslog/syslog
- Alternative à xinetd
- …

Rompt le principe KISS (Keep It Simple and Stupid)

**État d’un service**

- Enabled : démarrage à chaque boot
- Disabled : pas de démarrage à chaque boot
- Active : en cours d’exécution
- Inactive : exécution terminée normalement
- Failed : exécution terminée anormalement
- Deactivating : transition entre active et inactive en cours
- Activating : transition entre inactive et active en cours

**Commandes de gestion d’un service**

```
systemctl status nom_du_service
sudo systemctl status nom_du_service

sudo systemctl stop nom_du_service

sudo systemctl start nom_du_service

sudo systemctl restart nom_du_service

sudo systemctl reload nom_du_service

sudo systemctl reload-or-restart nom_du_service

sudo systemctl enable [ --now ] nom_du_service

sudo systemctl disable [ --now ] nom_du_service
```

Pour aller plus loin, voir [https://www.malekal.com/systemctl-linux-utilisation-et-exemples/](https://www.malekal.com/systemctl-linux-utilisation-et-exemples/)

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Fonctionnement-et-gestion-des-logs "Fonctionnement-et-gestion-des-logs")Fonctionnement et gestion des logs

**Commande `journalctl`**  
Afficher tous les logs

```
journalctl
sudo journalctl
```

Afficher la liste des démarrages, et le découpages des logs en conséquence (= de telle date à telle date)

```
journalctl --list-boots
```

Afficher les logs uniquement sur la période

```
journalctl -b index 
```

L’index d’un démarrage est donné par la commande précédente.  
Si pas d’index précisé, `journalctl -b` affiche les logs du démarrage en cours.

Différentes options :

- `--until`
- `--since`
- `-u nom_unité`
- `-k` : messages du noyau
- `-p XXX` : messages avec la priorité XXX ou une priorité plus importante (= numéro plus petit !)
    - XXX peut être le nom ou le numéro de chaque priorité (priorités standard de syslog) : emerg (0), alert (1), crit (2), err (3), warning (4), notice (5), info (6), debug (7)
    - err particulièrement utile pour résoudre les problèmes
- `-e` : aller directement à la fin du pager (les logs les plus récents, si on a pas utilisé `-r`)
- `-x` : ajouter des explications à certains messages de logs, si possible
- `-f` (comme _follow_) : voir en direct les nouvelles entrées de log, au fur et à mesure qu’elles sont ajoutées

```
sudo journalctl --since 2026-03-17
sudo journalctl --since '2026-03-17 11:02:30'
sudo journalctl --since 'mars 17 12:03:28'

# Le timestamp de --until est l'heure et la date exclue
sudo journalctl --since 'mars 17 12:03:28' --until '2026-03-18 10:00'

sudo journalctl -u ssh
# ou
sudo journalctl -u ssh.service

# Fonctionne pour toutes les unités systemd
sudo journalctl -u anacron.timer


sudo journalctl -k
# preque équivalent à
sudo dmesg -T

# 2 commandes équivalentes 
sudo journalctl -p 3
sudo journalctl -p err
# Attention : celle-ci ne fonctionne pas
sudo journalctl -p error

# Selon ce qui est plus facile à lire pour vous
sudo journalctl -e
# ou
sudo journalctl -r

# Voir les logs de tous les services qui s'exécute en espace utilisateur
sudo journalctl -u user-1000.slice
# Alternative, mais contient un peu moins de logs que la précédente
sudo journalctl _UID=1000
sudo journalctl _UID=$(id -u <NOM_UTILISATEUR>)

sudo journalctl -f
```

**Gestion de l’espace disque**

```
sudo journalctl --disk-usage

# Supprimer tous les fichiers de journal, jusqu'à ce que le total descende en dessous de 10 Mio (sauf s'il ne reste plus que les fichiers de journal en cours d'utilisation)
sudo journalctl --vacuum-size 10M

# Garder 4 fichiers de journal en tout
sudo journalctl --vacuum-files 4

# Supprimer les fichiers de journal qui ne contiennent que des entrées plus vielles que 7 jours
sudo journalctl --vacuum-time '7 days'
```

**Paramétrage**

Fichier _/etc/systemd/journald.conf_.

Pour aller plus loin, voir `man journald.conf`

### Gestion de la rétention des logs

Cette gestion est le fait de la tâche planifiée quotidienne `logrotate`.

Les fichiers de configuration sont :  
`/etc/logrotate.conf` pour les valeurs par défaut  
`/etc/logrotate.d/` pour les différents fichiers à gérer