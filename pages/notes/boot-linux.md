# 🐧 Processus de démarrage Linux (Boot Linux)

## 📌 Introduction

Le **boot Linux** correspond à la séquence d’étapes permettant de **démarrer un système Linux depuis l’allumage de la machine jusqu’à l’ouverture de session utilisateur**.

Ce processus implique plusieurs composants :

- le **firmware (BIOS ou UEFI)**
- le **bootloader**
- le **noyau Linux**
- le **système d'initialisation (init / systemd)**
- les **services système**

---

# 🧠 Schéma du processus de boot

	```mermaid
	flowchart TD
	    subgraph Boot[Firmware et amorçage]
	        A[BIOS / UEFI]
	        B[GRUB2]
	        C[Choix éventuel entre plusieurs solutions de boot]
	        D[Lancement du noyau avec les bonnes options]
	    end
	
	    subgraph Kernel[Noyau]
	        E[Lancement du noyau]
	        F[Réinitialisation du matériel]
	    end
	
	    subgraph Init[Initialisation du système]
	        G[Premier processus : init / systemd]
	        H[Initialisation de l’heure]
	        I[Initialisation des unités de stockage]
	        J[Montage des systèmes de fichiers]
	        K[Activation du swap]
	        L[Activation des consoles virtuelles]
	        M[Connexions possibles]
	        N[Activation des différents services]
	        O[Activation éventuelle de l’interface graphique]
	    end
	
	    A --> B --> C --> D --> E --> F --> G --> H --> I --> J --> K --> L --> M --> N --> O
	```

:contentReference[oaicite:0]{index=0}

---

# ⚙️ Étape 1 — Firmware (BIOS / UEFI)

Lorsque l’ordinateur démarre :

1. le **BIOS ou UEFI** initialise le matériel
2. il effectue un **POST (Power-On Self Test)**
3. il recherche un **périphérique de boot**

Exemples :

- disque dur
- SSD
- clé USB
- réseau (PXE)

---

# 🧾 Étape 2 — Bootloader (GRUB)

Le firmware charge ensuite le **bootloader**.

Sous Linux, le plus courant est :

```
GRUB2
```

Fonctions :

| Fonction | Description |
|---|---|
| Chargement du noyau | lance Linux |
| Multi-boot | choix entre plusieurs OS |
| Paramètres du noyau | options de démarrage |

Exemple de menu :

```
Ubuntu
Advanced options
Memory test
```

---

# 🧠 Étape 3 — Chargement du noyau

Le bootloader charge :

- le **kernel Linux**
- l’**initramfs**

```
/boot/vmlinuz
/boot/initrd.img
```

Le noyau va ensuite :

- initialiser la mémoire
- détecter les périphériques
- monter le système de fichiers racine

---

# 📦 Étape 4 — Initramfs

L'**initramfs** est un mini système Linux temporaire.

Il sert à :

- charger les pilotes nécessaires
- préparer le système
- monter la vraie partition racine

Exemple :

```
LVM
RAID
chiffrement LUKS
```

---

# ⚙️ Étape 5 — Processus init

Une fois le noyau prêt, Linux lance le **premier processus utilisateur**.

PID 1 :

```
systemd
```

Anciennement :

```
init
```

Rôle :

| Fonction | Description |
|---|---|
| démarrage services | réseau, ssh, etc |
| gestion du système | journaux, tâches |
| contrôle du système | arrêt / redémarrage |

---

# 📦 Étape 6 — Démarrage des services

Systemd lance différents services :

| Service | Fonction |
|---|---|
| networking | configuration réseau |
| sshd | accès distant |
| cron | tâches planifiées |
| udev | gestion du matériel |
| dbus | communication système |

---

# 🖥️ Étape 7 — Interface utilisateur

Selon la configuration :

| Mode | Description |
|---|---|
| CLI | terminal texte |
| GUI | interface graphique |

Exemples d’interfaces :

- **Gnome**
- **KDE**
- **XFCE**

---

# 🔎 Vérifier le processus de boot

Voir les messages du noyau :

```bash
dmesg
```

---

Voir les logs du boot :

```bash
journalctl -b
```

---

Voir la durée de boot :

```bash
systemd-analyze
```

---

# 📊 Composants du boot Linux

| Composant | Rôle |
|---|---|
| BIOS / UEFI | initialisation matériel |
| GRUB | charge le noyau |
| Kernel | cœur du système |
| initramfs | environnement temporaire |
| systemd | gestion du système |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| GRUB cassé | bootloader supprimé |
| kernel panic | noyau incorrect |
| root introuvable | mauvaise partition |
| service bloqué | erreur systemd |

---

# 🧾 Résumé

| Étape | Description |
|---|---|
| Firmware | BIOS / UEFI |
| Bootloader | GRUB |
| Kernel | noyau Linux |
| Init | systemd |
| Services | lancement du système |

Le **boot Linux est une chaîne d’étapes permettant de passer du firmware au système utilisateur opérationnel**.****