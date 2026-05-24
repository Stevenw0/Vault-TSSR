# ⚙️ sysctl — Configuration du noyau Linux

## 📌 Introduction

La commande **`sysctl`** permet de **lire et modifier les paramètres du noyau Linux (kernel)** en temps réel.

Ces paramètres contrôlent :

- le réseau
- la mémoire
- la sécurité
- les performances système

---

# 🧠 Principe de fonctionnement

Les paramètres du noyau sont exposés via :

```
/proc/sys/
```

Chaque fichier correspond à un paramètre.

Exemple :

```
/proc/sys/net/ipv4/ip_forward
```

---

# 📂 Structure des paramètres

| Catégorie | Description |
|---|---|
| net | réseau |
| vm | mémoire |
| kernel | paramètres globaux |
| fs | système de fichiers |

---

# 🔎 Voir les paramètres

Afficher tous les paramètres :

```bash
sysctl -a
```

---

Afficher un paramètre précis :

```bash
sysctl net.ipv4.ip_forward
```

---

# ⚙️ Modifier un paramètre (temporaire)

```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

⚠️ Modification **non persistante** (perdue au reboot)

---

# 🧾 Modifier un paramètre (permanent)

Éditer le fichier :

```
/etc/sysctl.conf
```

Exemple :

```
net.ipv4.ip_forward = 1
```

---

Appliquer les changements :

```bash
sudo sysctl -p
```

---

# 📦 Fichiers de configuration sysctl

| Fichier | Rôle |
|---|---|
| /etc/sysctl.conf | configuration principale |
| /etc/sysctl.d/ | configs supplémentaires |
| /proc/sys/ | valeurs en temps réel |

---

# 📊 Paramètres courants

## Réseau

| Paramètre | Description |
|---|---|
| net.ipv4.ip_forward | routage IP |
| net.ipv4.tcp_syncookies | protection SYN flood |
| net.ipv4.conf.all.rp_filter | anti-spoofing |

---

## Mémoire

| Paramètre | Description |
|---|---|
| vm.swappiness | usage du swap |
| vm.dirty_ratio | écriture disque |
| vm.overcommit_memory | allocation mémoire |

---

## Système

| Paramètre | Description |
|---|---|
| kernel.hostname | nom machine |
| kernel.pid_max | nombre max processus |
| kernel.randomize_va_space | ASLR sécurité |

---

# ⚙️ Exemples pratiques

## Activer le routage IP

```bash
sudo sysctl -w net.ipv4.ip_forward=1
```

---

## Désactiver le swap agressif

```bash
sudo sysctl -w vm.swappiness=10
```

---

## Activer protection SYN flood

```bash
sudo sysctl -w net.ipv4.tcp_syncookies=1
```

---

# 🔁 Charger toutes les configs

```bash
sudo sysctl --system
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- ne pas modifier sans comprendre
- tester avant de rendre permanent
- sauvegarder la configuration
- attention aux paramètres réseau critiques

---

# 📊 Résumé

| Élément | Description |
|---|---|
| sysctl | gestion des paramètres kernel |
| fichier principal | /etc/sysctl.conf |
| temporaire | `sysctl -w` |
| permanent | fichier config |
| domaine | réseau, mémoire, sécurité |

La commande **sysctl permet d’optimiser, sécuriser et adapter le comportement du noyau Linux en temps réel**.