# 💽 Partitionnement des disques

## 📌 Introduction

Le **partitionnement** consiste à diviser un disque dur ou un SSD en plusieurs **partitions logiques**.

Chaque partition peut être utilisée pour :

- installer un système d’exploitation
- stocker des données
- isoler certains fichiers
- améliorer la gestion du disque

Chaque partition peut être formatée avec un **système de fichiers** spécifique.

---

# 🧠 Pourquoi partitionner un disque

Le partitionnement permet :

| Avantage | Description |
|---|---|
| Organisation | séparer système et données |
| Sécurité | limiter la perte de données |
| Multi-boot | installer plusieurs OS |
| Performance | meilleure gestion des fichiers |
| Maintenance | réinstaller le système sans toucher aux données |

---

# 📊 Structure d’un disque

Un disque peut contenir :

```
Disque
 ├── Partition 1
 ├── Partition 2
 ├── Partition 3
 └── Partition 4
```

Chaque partition peut ensuite être **formatée**.

---

# 🧩 Types de partitions

| Type | Description |
|---|---|
| Partition primaire | partition principale bootable |
| Partition étendue | conteneur pour partitions logiques |
| Partition logique | partition à l’intérieur d’une étendue |

---

# 📊 Tables de partition

Il existe deux principaux types de tables de partition.

| Type | Description |
|---|---|
| MBR | ancien système de partition |
| GPT | système moderne utilisé avec UEFI |

---

# 🧾 MBR (Master Boot Record)

Caractéristiques :

| Propriété | Valeur |
|---|---|
| Nombre max partitions | 4 partitions primaires |
| Taille max disque | 2 To |
| BIOS | compatible |

Limitation :

- seulement **4 partitions primaires**

Solution :

```
1 partition étendue
↓
plusieurs partitions logiques
```

---

# 🧾 GPT (GUID Partition Table)

GPT est la norme moderne.

| Propriété | Valeur |
|---|---|
| Nombre partitions | jusqu'à 128 |
| Taille disque | très grande |
| UEFI | requis |

Avantages :

- plus sécurisé
- support des grands disques
- meilleure fiabilité

---

# 🗂️ Systèmes de fichiers

Après partitionnement, une partition doit être **formatée**.

| Système de fichiers | Utilisation |
|---|---|
| ext4 | Linux |
| NTFS | Windows |
| FAT32 | compatibilité |
| exFAT | supports amovibles |
| XFS | serveurs Linux |
| Btrfs | système avancé Linux |

---

# ⚙️ Outils de partitionnement Linux

## fdisk

```bash
sudo fdisk -l
```

Afficher les disques et partitions.

---

## lsblk

```bash
lsblk
```

Afficher l’arborescence des disques.

---

## parted

```bash
sudo parted -l
```

Gestion avancée des partitions.

---

## cfdisk

```bash
sudo cfdisk
```

Interface interactive pour partitionner.

---

# ⚙️ Création d’une partition (exemple)

### 1️⃣ Lancer fdisk

```bash
sudo fdisk /dev/sda
```

---

### 2️⃣ Créer une partition

```
n
```

---

### 3️⃣ Enregistrer

```
w
```

---

# 🗂️ Formater une partition

Exemple ext4 :

```bash
sudo mkfs.ext4 /dev/sda1
```

---

# 🔗 Monter une partition

Créer un point de montage :

```bash
sudo mkdir /mnt/data
```

Monter la partition :

```bash
sudo mount /dev/sda1 /mnt/data
```

---

# 🔁 Montage automatique

Modifier :

```
/etc/fstab
```

Exemple :

```
/dev/sda1 /mnt/data ext4 defaults 0 2
```

---

# ⚠️ Points d’attention

> [!warning]

- le partitionnement peut **supprimer les données**
- toujours vérifier le disque cible
- faire une sauvegarde avant modification

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| Partition | division logique d’un disque |
| Tables de partition | MBR ou GPT |
| Formatage | création système de fichiers |
| Montage | accès à la partition |
| Outils Linux | fdisk, lsblk, parted |

Le partitionnement permet de **structurer et gérer efficacement l’espace de stockage d’un système**.