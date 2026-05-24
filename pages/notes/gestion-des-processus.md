###   
Gestion des processus

**Qu’est-ce qu’un binaire/exécutable ?**

Fichier permettant de lancer un processus (il en contient le code) -> objet statique.  
On parle aussi de fichier exécutable ou d’exécutable.

**Qu’est-ce qu’un processus ?**

Une instance d’un programme, d’un exécutable, d’un binaire -> objet dynamique -> consommation de ressources

- CPU
- RAM
- Disque
- Réseau
- Affichage
- …

**Comment avoir la liste des processus ?**

`ps` affiche un instantané des processus en cours d’exécution  
mnémotechnique : process status

Un processus est toujours le fils d’un autre (appels systèmes `fork()` et `exec*()`).  
Le processus init (fait partie de systemd), avec PID (_Process ID_) 1, est le processus père de tous les autres.

**Utilisations de `ps`**

Sans arguments, `ps` affiche les processus en cours d’exécution dans le shell courant :

```
$ ps
    PID TTY          TIME CMD
   1991 pts/0    00:00:00 bash
  52797 pts/0    00:00:00 ps
```

Options communes :

- `-e`/`-A` : afficher tous les processus
- `-f` : afficher plus d’informations à propos des processus (dont User ID, Parent PID, Start Time, arguments des commandes)
- `-o INDICATEUR1,INDICATEUR2,...` : afficher pour chaque processus uniquement les informations/colonnes spécifiées par les liste d’indicateurs de format
- `-u USERNAME/UID` : afficher les processus de l’utilisateur spécifié
- `-C EXECUTABLE_NAME` : afficher les différentes instances de l’exécutable spécifié (sshd, par exemple)
- `-p PID1,PID2,...` : afficher uniquement les processus spécifiés par la liste de PIDs
- `-L` : afficher aussi les threads, en plus des processus

Pour avoir plus d’informations sur les options de `ps`, voir sa [man page](https://man.archlinux.org/man/ps.1#STANDARD_FORMAT_SPECIFIERS)

Attention : les options avec (UNIX-style) ou sans (BSD-style) le tiret n’ont pas la même signification. Par exemple, `ps u` et `ps -u` ne font pas le même chose.

**Processus mono ou multithreadé**

Tout processus fonctionne en environnement mémoire protégé. Un processus ne peut accéder qu’à la mémoire qui lui est affectée.  
Un processus mono-threadé ne contient qu’une entité d’exécution, à l’inverse un processus multi-threadé contient plusieurs entités d’exécution.

S’il ne faut retenir qu’une chose sur les processus/threads : en très simplifié, un thread est un processus léger (en terme de consommation de RAM, etc)


**Gestion des processus : commande kill**

La commande `kill` permet l’envoi de signaux à un ou plusieurs processus.

La commande `kill -l` donne la liste des signaux possibles :

```
kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 2) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
3) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
4) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
5) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
6) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
7) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
8) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
9) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
10) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
11) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
12) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
13) SIGRTMAX-1  64) SIGRTMAX
```

Signification des signaux :

```
man 7 signal
```

Ou en ligne, par ex : [https://man.archlinux.org/man/signal.7#Standard_signals](https://man.archlinux.org/man/signal.7#Standard_signals)

3 façons de désigner un signal avec `kill` :

```
kill -18 pid1 pid2 ...
kill -SIGCONT pid1 pid2 ...
kill -CONT pid1 pid2 ...
```

Les signaux les plus utiles :

- TERM : par défaut
- QUIT : Quit from keyboard
- INT : Interupt from keyboard
- ABRT : signal Abort, tel qu’envoyé par la fonction `abort()` de la bibliothèque standard C (aka `libc`)
- KILL : demande au système d’arrêt d’un processus (à faire en dernier recours)
- STOP : mise en pause d’un processus (signal envoyé avec `CTRL+Z` dans un terminal, pendant l’exécution d’un processus)
- CONT : reprise d’un processus mis en pause (signal envoyé par `fg` à un processus précédemment mis en pause)

**Zombie : un processus mort-vivant !**

Tout processus se termine par un code de retour.

Un code retour de 0 indique un fonctionnement sans erreur.  
Le code retour est à destination du processus-père qui interroge le système pour obtenir le code retour de son fils.

_**Processus-fils -> fin -> code retour stocké dans la table des processus <- processus-père interroge la table**_

La seule consommation d’un zombie est une entrée dans la table des processus.  
Un zombie étant un processus ayant terminé son exécution, il ne peut répondre à aucun signal