# 📂 FHS — Filesystem Hierarchy Standard

## 📌 Qu’est-ce que le FHS ?

Le **FHS (Filesystem Hierarchy Standard)** est une **norme Linux** qui définit **l’organisation des répertoires** du système de fichiers.  
Son objectif est d’assurer :

- une structure **cohérente et prévisible**
- une compatibilité entre distributions
- une meilleure administration et maintenance

Le FHS est respecté par la majorité des distributions Linux (Debian, Ubuntu, RHEL, Rocky, Alma, etc.).

---

## 🗂️ Vue globale de l’arborescence Linux (FHS)



La racine du système est `/` (root).  
Tous les répertoires du système en dépendent.

---

## 🌳 Description des répertoires principaux

### `/`
Racine du système de fichiers.  
Tous les autres répertoires sont montés sous `/`.

---

### `/bin`
Commandes **essentielles** accessibles à tous les utilisateurs  
(ex : `ls`, `cp`, `mv`, `cat`).

---

### `/sbin`
Commandes système essentielles, principalement destinées à **root**  
(ex : `ip`, `fsck`, `mount`).

---

### `/boot`
Fichiers nécessaires au **démarrage** du système :
- kernel Linux
- initramfs
- chargeur de démarrage (GRUB)

---

### `/dev`
Fichiers représentant les **périphériques** :
- disques (`/dev/sda`)
- partitions
- terminaux

---

### `/etc`
Fichiers de **configuration système** :
- services
- réseau
- utilisateurs

Exemples :
- `/etc/passwd`
- `/etc/fstab`
- `/etc/ssh/sshd_config`

---

### `/home`
Répertoires personnels des utilisateurs.

Exemple :
```
/home/alice
/home/bob
```

---

### `/root`
Répertoire personnel de l’utilisateur **root**  
(différent de `/home`).

---

### `/lib` et `/lib64`
Bibliothèques essentielles nécessaires aux commandes de `/bin` et `/sbin`.

---

### `/usr`
Contient la majorité des programmes utilisateurs et bibliothèques.

Sous-répertoires importants :
- `/usr/bin` → commandes utilisateurs
- `/usr/sbin` → commandes admin
- `/usr/lib` → bibliothèques
- `/usr/local` → logiciels installés manuellement

---

### `/var`
Données **variables** qui évoluent pendant le fonctionnement du système.

Exemples :
- `/var/log` → journaux (logs)
- `/var/spool` → files d’attente
- `/var/mail` → mails
- `/var/tmp` → fichiers temporaires persistants

---

### `/tmp`
Fichiers temporaires.
- souvent vidés au redémarrage
- accessibles à tous les utilisateurs

---

### `/proc`
Système de fichiers virtuel exposant des **informations sur le noyau et les processus**.

Exemples :
- `/proc/cpuinfo`
- `/proc/meminfo`

---

### `/sys`
Informations sur le **matériel** et le noyau (sysfs).  
Utilisé par le système et les outils d’administration.

---

### `/mnt`
Point de montage **temporaire** (montages manuels).

---

### `/media`
Points de montage pour les **supports amovibles** :
- clés USB
- disques externes
- CD/DVD

---

### `/opt`
Logiciels **optionnels** ou tiers, souvent installés hors du gestionnaire de paquets.

---

### `/srv`
Données servies par des services :
- web
- FTP
- applications serveur

---

## 🎯 Pourquoi le FHS est important ?

Le FHS permet :

- de savoir **où chercher un fichier**
- de diagnostiquer plus rapidement un problème
- d’administrer plusieurs distributions sans être perdu
- de réussir les **entretiens Linux**

---

## 🧠 À retenir

- Le FHS définit l’organisation du système Linux
- `/` est la racine
- `/etc` = configuration
- `/var` = données variables
- `/usr` = programmes
- `/home` = utilisateurs
- Standard respecté par la majorité des distributions

---

## 📚 À savoir pour les entretiens

Questions fréquentes :
- Différence entre `/bin` et `/usr/bin`
- Rôle de `/var/log`
- Pourquoi `/tmp` est dangereux
- Où sont stockées les configurations

Le FHS est un **incontournable** en administration système Linux.