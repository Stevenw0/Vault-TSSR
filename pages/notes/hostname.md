# 🖥️ Hostname et fichier /etc/hosts (Linux)

## 📌 Introduction

Sous Linux, chaque machine possède un **nom d’hôte (hostname)** qui permet de l’identifier sur un réseau.

Deux éléments sont utilisés pour gérer les noms :

| Élément | Rôle |
|---|---|
| hostname | nom de la machine |
| /etc/hosts | table locale de résolution des noms |

Ces éléments permettent à un système de **résoudre des noms en adresses IP sans passer par un DNS**.

---

# 🧠 Le hostname

Le **hostname** est le **nom unique d’une machine sur un réseau**.

Exemples :

```
srvlog
deby
server01
router-linux
```

Il est utilisé pour :

- identifier une machine
- communiquer sur un réseau
- apparaître dans les logs système

---

# 📊 Types de hostname sous Linux

| Type | Description |
|---|---|
| Static hostname | nom principal de la machine |
| Pretty hostname | nom lisible (interface graphique) |
| Transient hostname | nom temporaire donné par DHCP |

---

# 🔎 Voir le hostname

Afficher le nom de la machine :

```bash
hostname
```

ou

```bash
hostnamectl
```

Exemple :

```
Static hostname: srvlog
```

---

# ⚙️ Modifier le hostname

Avec systemd :

```bash
sudo hostnamectl set-hostname srvlog
```

Vérifier :

```bash
hostname
```

---

# 📂 Fichier /etc/hostname

Le hostname est stocké dans :

```
/etc/hostname
```

Afficher :

```bash
cat /etc/hostname
```

Exemple :

```
srvlog
```

---

# 🗂️ Le fichier /etc/hosts

Le fichier **`/etc/hosts`** permet de faire une **résolution locale des noms de domaine**.

Il associe :

```
adresse IP → nom d'hôte
```

Il est consulté **avant le DNS**.

---

# 📂 Emplacement

```
/etc/hosts
```

Modifier :

```bash
sudo nano /etc/hosts
```

---

# 📊 Structure du fichier

Chaque ligne contient :

| Champ | Description |
|---|---|
| Adresse IP | IP de la machine |
| Hostname | nom d'hôte |
| Alias | noms alternatifs |

---

# 🧾 Exemple de /etc/hosts

```
127.0.0.1 localhost
127.0.1.1 srvlog

192.168.56.210 srvlog
192.168.56.211 deby
```

---

# 🧠 Fonctionnement

Lorsqu'une application cherche à résoudre un nom :

```
Application
 ↓
/etc/hosts
 ↓
DNS
 ↓
Réponse
```

Si le nom existe dans **/etc/hosts**, Linux **n'interroge pas le DNS**.

---

# ⚙️ Exemple d’utilisation

Ajouter une machine locale :

```
192.168.1.20 serveurweb
```

Ensuite :

```bash
ping serveurweb
```

fonctionnera sans DNS.

---

# 📊 Utilisations du fichier hosts

| Utilisation | Exemple |
|---|---|
| résolution locale | machines d'un réseau |
| tests | simuler un DNS |
| développement | rediriger un domaine |
| blocage de sites | rediriger vers localhost |

---

# ⚠️ Bonnes pratiques

> [!warning]

- garder `127.0.0.1 localhost`
- ne pas supprimer les entrées système
- vérifier la cohérence hostname / hosts
- éviter les doublons

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| hostname | nom de la machine |
| commande | `hostnamectl` |
| fichier hostname | `/etc/hostname` |
| résolution locale | `/etc/hosts` |
| fonction | associer nom ↔ IP |

Le **hostname identifie la machine**, tandis que **/etc/hosts permet la résolution locale des noms sans DNS**.