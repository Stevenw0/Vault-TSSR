# 📦 LXC — Linux Containers

---

# 📌 Définition

**LXC (Linux Containers)** est une technologie permettant de créer des **conteneurs système légers**.

👉 Contrairement à Docker :

- LXC exécute un **système Linux complet**
- Docker exécute une **application**

---

# 🧠 Principe

LXC utilise le noyau Linux pour isoler des environnements :

```
Host Linux → LXC → Container (OS léger)
```

---

# 📊 LXC vs Docker

| Critère | LXC | Docker |
|---|---|---|
| type | système | application |
| OS complet | oui | non |
| usage | VM léger | microservices |
| isolation | namespaces | namespaces |

---

# 🏗️ Architecture

```
Host OS
 ↓
Kernel Linux
 ↓
LXC Containers
```

---

# 🧩 Fonctionnement

LXC repose sur :

| Technologie | Description |
|---|---|
| namespaces | isolation |
| cgroups | gestion ressources |
| chroot | système fichier |

---

# 📦 Conteneur LXC

Un conteneur contient :

- OS minimal (Ubuntu, Debian…)
- services
- utilisateurs

---

# ⚙️ Commandes de base

## Lister

```bash
lxc-ls
```

---

## Créer

```bash
lxc-create -n monconteneur -t download
```

---

## Démarrer

```bash
lxc-start -n monconteneur
```

---

## Stop

```bash
lxc-stop -n monconteneur
```

---

## Accéder

```bash
lxc-attach -n monconteneur
```

---

# 🌐 Réseau

Les conteneurs utilisent :

- bridge réseau
- IP locale

---

# 💾 Stockage

| Type | Description |
|---|---|
| rootfs | système |
| bind mount | partage |
| ZFS | avancé |

---

# ⚙️ LXC dans Proxmox

Proxmox utilise LXC pour :

- conteneurs légers
- déploiement rapide

---

## Commandes Proxmox

```bash
pct list
pct start 100
pct stop 100
```

---

# 📊 Avantages

| Avantage | Description |
|---|---|
| léger | faible consommation |
| rapide | démarrage instant |
| efficace | peu de ressources |
| simple | gestion |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| isolation | moins forte que VM |
| kernel partagé | dépend host |
| compatibilité | Linux uniquement |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| lab | test |
| serveur léger | web |
| dev | environnement |
| infra | micro-services simples |

---

# ⚠️ Bonnes pratiques

> [!warning]

- ne pas exécuter services critiques sensibles
- limiter ressources
- sécuriser accès
- surveiller conteneurs

---

# 📊 LXC vs VM

| Critère | LXC | VM |
|---|---|---|
| performance | élevée | moyenne |
| isolation | moyenne | forte |
| démarrage | instantané | lent |
| OS | partagé | indépendant |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| LXC | conteneur système |
| usage | Linux |
| avantage | léger |
| limite | isolation |
| outil | Proxmox |

---

# 🎯 Conclusion

LXC permet :

- de créer des environnements rapides et légers
- de remplacer certaines VM
- d’optimiser les ressources

👉 idéal pour :

- homelab
- serveurs simples
- environnement de test