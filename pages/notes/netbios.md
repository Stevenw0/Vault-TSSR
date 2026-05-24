# 🖧 NetBIOS — Network Basic Input/Output System

## 📌 Définition

**NetBIOS (Network Basic Input/Output System)** est une API et un protocole permettant la **communication entre machines sur un réseau local**.

Il permet :

- la **résolution de noms**
- le **partage de fichiers**
- la **communication entre applications**

NetBIOS est principalement utilisé avec :

```
SMB (partage Windows)
```

---

# 🧠 Principe de fonctionnement

NetBIOS fonctionne avec des **noms d’ordinateurs** au lieu des adresses IP.

Exemple :

```
PC1 → 192.168.1.10
```

Processus :

```
Nom NetBIOS
 ↓
Résolution (broadcast ou serveur)
 ↓
Connexion au service
```

---

# 📊 Services NetBIOS

NetBIOS propose 3 services principaux.

| Service | Description |
|---|---|
| Name Service | résolution de noms |
| Session Service | communication entre machines |
| Datagram Service | communication rapide sans connexion |

---

# 🌐 Ports NetBIOS

| Service | Port | Protocole |
|---|---|---|
| Name Service | 137 | UDP |
| Datagram | 138 | UDP |
| Session | 139 | TCP |

---

# 📂 NetBIOS over TCP/IP (NBT)

NetBIOS peut fonctionner sur IP via :

```
NBT (NetBIOS over TCP/IP)
```

Cela permet d’utiliser NetBIOS sur les réseaux modernes.

---

# 📊 Résolution de noms NetBIOS

Plusieurs méthodes :

| Méthode | Description |
|---|---|
| Broadcast | diffusion sur le réseau |
| WINS | serveur central |
| Fichier LMHOSTS | résolution locale |
| DNS | utilisé en remplacement |

---

# ⚙️ Commandes utiles (Windows)

## Voir les noms NetBIOS

```cmd
nbtstat -n
```

---

## Voir le cache NetBIOS

```cmd
nbtstat -c
```

---

## Scanner un hôte

```cmd
nbtstat -A 192.168.1.10
```

---

## Vider le cache

```cmd
nbtstat -R
```

---

# 🧾 Fichier LMHOSTS

Fichier local pour résoudre les noms NetBIOS.

Emplacement :

```
C:\Windows\System32\drivers\etc\lmhosts
```

Exemple :

```
192.168.1.10 PC1
```

---

# ⚠️ Limites de NetBIOS

| Limite | Description |
|---|---|
| broadcast | peu scalable |
| sécurité | vulnérable |
| ancien protocole | remplacé progressivement |

---

# 🔐 Sécurité

NetBIOS peut exposer :

- noms machines
- partages réseau
- informations système

---

## Bonnes pratiques

| Action | Description |
|---|---|
| désactiver NetBIOS | si non nécessaire |
| utiliser DNS | résolution moderne |
| filtrer ports | 137-139 |

---

# ⚙️ Désactiver NetBIOS (Windows)

Dans les propriétés réseau :

```
IPv4 → Avancé → WINS → Désactiver NetBIOS
```

---

# 📊 NetBIOS vs DNS

| Critère | NetBIOS | DNS |
|---|---|---|
| Port | 137-139 | 53 |
| Portée | LAN | Internet |
| Méthode | broadcast | serveur |
| modernité | ancien | actuel |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| NetBIOS | communication réseau ancienne |
| rôle | résolution noms + partage |
| protocole | NBT |
| ports | 137, 138, 139 |
| remplaçant | DNS |

NetBIOS est un protocole **historique des réseaux Windows**, aujourd’hui largement remplacé par **DNS et SMB modernes**, mais encore présent dans certains environnements.