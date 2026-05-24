# 🗂️ /etc/fstab — File System Table

## 📌 Définition

Le fichier **`/etc/fstab`** (File System Table) est un fichier de configuration Linux qui définit **les systèmes de fichiers à monter automatiquement au démarrage**.

Il permet au système de savoir :

- quelles partitions monter
- où les monter
- avec quelles options

Ce fichier est **lu au démarrage du système**.

---

# 🧠 Principe de fonctionnement

Lors du boot :

```
Kernel
 ↓
init / systemd
 ↓
lecture du fichier /etc/fstab
 ↓
montage des systèmes de fichiers
```

Les partitions sont montées automatiquement selon les paramètres définis.

---

# 📂 Emplacement du fichier

Le fichier se trouve ici :

```
/etc/fstab
```

Afficher son contenu :

```bash
cat /etc/fstab
```

Modifier :

```bash
sudo nano /etc/fstab
```

---

# 🧾 Structure d’une ligne fstab

Chaque ligne possède **6 champs**.

| Champ | Description |
|---|---|
| 1 | périphérique ou UUID |
| 2 | point de montage |
| 3 | système de fichiers |
| 4 | options |
| 5 | dump |
| 6 | fsck |

---

# 📊 Exemple de ligne

```
UUID=3e6be9de-8139-11d1-9106-a43f08d823a6 /home ext4 defaults 0 2
```

---

# 📊 Explication des champs

| Champ | Exemple | Description |
|---|---|---|
| Device | UUID=xxxxx | partition ou disque |
| Mount point | /home | dossier de montage |
| Filesystem | ext4 | type de système de fichiers |
| Options | defaults | options de montage |
| Dump | 0 | sauvegarde dump |
| fsck | 2 | ordre de vérification |

---

# 📦 Identifier les partitions

Pour récupérer les **UUID** :

```bash
lsblk -f
```

ou

```bash
blkid
```

Exemple :

```
/dev/sda1: UUID="abcd-1234"
```

---

# 📊 Options de montage courantes

| Option | Description |
|---|---|
| defaults | options standard |
| ro | lecture seule |
| rw | lecture / écriture |
| noexec | interdit l’exécution |
| nosuid | ignore SUID |
| nodev | ignore périphériques |
| noauto | ne pas monter au démarrage |
| user | autorise utilisateur |

---

# ⚙️ Exemple de configurations

## Monter une partition

```
UUID=abcd-1234 /data ext4 defaults 0 2
```

---

## Monter un disque USB

```
UUID=efgh-5678 /mnt/usb vfat defaults 0 0
```

---

## Monter un partage réseau (NFS)

```
192.168.1.10:/data /mnt/nfs nfs defaults 0 0
```

---

# ⚙️ Tester la configuration

Après modification du fichier :

```bash
sudo mount -a
```

Cette commande :

- monte tout ce qui est dans `fstab`
- permet de vérifier les erreurs

---

# ⚠️ Attention

> [!warning]

Une erreur dans **`/etc/fstab`** peut empêcher le système de démarrer.

Toujours :

- tester avec `mount -a`
- vérifier les UUID
- sauvegarder le fichier

---

# 🧾 Exemple complet fstab

```
# Root
UUID=1234-5678 / ext4 defaults 0 1

# Home
UUID=abcd-1234 /home ext4 defaults 0 2

# Swap
UUID=swap-uuid none swap sw 0 0

# Data
UUID=data-uuid /data ext4 defaults 0 2
```

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| fstab | table des systèmes de fichiers |
| rôle | montage automatique |
| emplacement | /etc/fstab |
| test | `mount -a` |
| identification | `lsblk` / `blkid` |

Le fichier **`/etc/fstab` permet d’automatiser le montage des partitions et systèmes de fichiers dans Linux**.