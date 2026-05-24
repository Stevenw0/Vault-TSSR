# 🧠 SWAP Linux — Mémoire d’échange

## 📌 Introduction

Le **SWAP** est une zone du disque utilisée par Linux comme **extension de la mémoire RAM**.

Lorsque la RAM est presque pleine, le système peut déplacer certaines données vers le **SWAP** afin de libérer de la mémoire.

On parle aussi de **mémoire virtuelle**.

---

# 🧠 Principe de fonctionnement

Lorsque la RAM est saturée :

1. Linux déplace certaines pages mémoire vers le **SWAP**
2. cela libère de la RAM pour les applications actives
3. si les données sont à nouveau nécessaires, elles sont rechargées en RAM

Processus :

```
RAM pleine
↓
Pages mémoire déplacées
↓
SWAP (disque)
↓
Libération RAM
```

⚠️ Le SWAP est **beaucoup plus lent que la RAM**, car il utilise le disque.

---

# 📊 Types de SWAP

| Type | Description |
|---|---|
| Partition SWAP | partition dédiée au SWAP |
| Fichier SWAP | fichier utilisé comme SWAP |

---

# 🧾 Vérifier le SWAP

Afficher l’utilisation mémoire :

```bash
free -h
```

Exemple :

```
              total        used        free
Mem:           2.0G        1.2G        800M
Swap:          1.0G        200M        800M
```

---

## Voir les zones SWAP actives

```bash
swapon --show
```

ou

```bash
cat /proc/swaps
```

---

# ⚙️ Créer un fichier SWAP

## 1️⃣ Créer le fichier

```bash
sudo fallocate -l 2G /swapfile
```

---

## 2️⃣ Sécuriser le fichier

```bash
sudo chmod 600 /swapfile
```

---

## 3️⃣ Initialiser le SWAP

```bash
sudo mkswap /swapfile
```

---

## 4️⃣ Activer le SWAP

```bash
sudo swapon /swapfile
```

---

## 5️⃣ Vérifier

```bash
swapon --show
```

---

# 🔁 Rendre le SWAP permanent

Ajouter la ligne suivante dans :

```
/etc/fstab
```

```
/swapfile none swap sw 0 0
```

---

# ⚙️ Désactiver le SWAP

Désactiver :

```bash
sudo swapoff /swapfile
```

ou

```bash
sudo swapoff -a
```

---

# 📊 Paramètre Swappiness

Le paramètre **swappiness** contrôle l’utilisation du SWAP.

Valeur possible :

```
0 → utiliser très peu le SWAP
100 → utiliser fortement le SWAP
```

---

## Vérifier la valeur

```bash
cat /proc/sys/vm/swappiness
```

---

## Modifier temporairement

```bash
sudo sysctl vm.swappiness=10
```

---

## Modifier définitivement

Éditer :

```
/etc/sysctl.conf
```

Ajouter :

```
vm.swappiness=10
```

---

# ⚠️ Points d’attention

> [!warning]

- le SWAP est **plus lent que la RAM**
- trop de SWAP peut ralentir le système
- sur SSD il faut surveiller l’usure

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| SWAP | mémoire virtuelle sur disque |
| Utilité | libérer la RAM |
| Types | partition ou fichier |
| Commande vérification | `free -h` |
| Activation | `swapon` |
| Désactivation | `swapoff` |

Le SWAP permet d’**éviter les plantages lorsque la RAM est saturée**, mais il ne remplace pas une mémoire physique suffisante.