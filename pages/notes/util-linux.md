# 🧰 util-linux — Outils système essentiels Linux

---

# 📌 Définition

**util-linux** est une collection d’outils système fondamentaux sous Linux permettant de :

- gérer les disques
- manipuler les partitions
- administrer les utilisateurs et sessions
- interagir avec le noyau

👉 package indispensable sur toutes les distributions

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| administration | système |
| gestion disques | partitions |
| monitoring | sessions |
| interaction kernel | low-level |

---

# 🧠 Principe

```
Utilisateur → util-linux → Kernel → Hardware
```

---

# 📦 Commandes principales

---

## 💽 Gestion des disques

| Commande | Description |
|---|---|
| lsblk | voir les disques |
| mount | monter un système |
| umount | démonter |
| blkid | identifier partitions |
| findmnt | afficher montages |

---

---

## 🧱 Partitionnement

| Commande | Description |
|---|---|
| fdisk | partition MBR |
| cfdisk | interface |
| sfdisk | scriptable |

---

---

## 👤 Sessions & utilisateurs

| Commande | Description |
|---|---|
| login | connexion |
| logout | déconnexion |
| su | changer user |
| last | historique |
| who | utilisateurs connectés |

---

---

## ⚙️ Système

| Commande | Description |
|---|---|
| dmesg | logs kernel |
| hostname | nom machine |
| uname | infos système |
| arch | architecture |

---

---

## 🔐 Permissions & sécurité

| Commande | Description |
|---|---|
| chmod | permissions |
| chown | propriétaire |
| chgrp | groupe |

---

---

## 📊 Monitoring

| Commande | Description |
|---|---|
| uptime | temps activité |
| free | mémoire |
| lslocks | verrous |
| lsipc | IPC |

---

---

## 🧪 Autres outils utiles

| Commande | Description |
|---|---|
| cal | calendrier |
| date | date |
| script | enregistrer session |
| wall | message global |

---

# 🔧 Commandes clés (exemples)

---

## Voir disques

```bash
lsblk
```

---

## Monter un disque

```bash
mount /dev/sdb1 /mnt
```

---

## Voir logs kernel

```bash
dmesg | tail
```

---

## Vérifier utilisateurs

```bash
who
```

---

# 🔄 util-linux vs coreutils

| Critère | util-linux | coreutils |
|---|---|---|
| rôle | système |
| commandes | bas niveau |
| usage | admin |

---

| Critère | coreutils |
|---|---|
| rôle | utilisateur |
| commandes | fichiers |
| usage | quotidien |

---

# ⚙️ Fonctionnement

👉 util-linux interagit directement avec :

- le kernel
- les périphériques
- les ressources système

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| fdisk | perte de données |
| mount | corruption |
| dmesg | info sensible |
| su | élévation privilèges |

---

# 🛡️ Bonnes pratiques

> [!warning]

- vérifier disque avant modification
- utiliser sudo avec précaution
- sauvegarder avant partitionnement
- ne pas monter n’importe quel device

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| admin système | disques |
| dépannage | logs |
| forensic | analyse |
| serveur | gestion |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| util-linux | outils système |
| rôle | bas niveau |
| commandes | disques |
| usage | admin |
| dépend | kernel |

---

# 🎯 Conclusion

util-linux est essentiel pour :

- gérer le système Linux
- manipuler les disques
- analyser l’état du kernel

👉 indispensable pour :

🔥 administration  
🔥 dépannage  
🔥 cybersécurité