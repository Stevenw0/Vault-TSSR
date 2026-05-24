# 🖥️ VMware ESXi — Hyperviseur

---

# 📌 Définition

**VMware ESXi** est un **hyperviseur de type 1** (bare metal) permettant de :

- virtualiser des serveurs
- exécuter plusieurs machines virtuelles (VM)
- optimiser l’utilisation du matériel

---

# 🧠 Principe

```
Matériel → ESXi → Machines virtuelles (VM)
```

👉 ESXi s’installe directement sur le serveur (sans OS)

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| virtualisation | plusieurs OS |
| optimisation | ressources |
| centralisation | infra |
| isolation | VM |

---

# 🏗️ Architecture

```
Hardware
   ↓
ESXi (Hyperviseur)
   ↓
VM (Windows / Linux)
```

---

# 📊 Types d’hyperviseurs

| Type | Description |
|---|---|
| Type 1 | bare metal (ESXi) |
| Type 2 | sur OS (VirtualBox) |

---

# 📊 ESXi vs VMware Workstation

| Critère | ESXi | Workstation |
|---|---|---|
| type | bare metal |
| usage | serveur |
| performance | élevée |

---

| Critère | Workstation |
|---|---|
| type | logiciel |
| usage | desktop |
| performance | moyenne |

---

# ⚙️ Fonctionnalités principales

| Fonction | Description |
|---|---|
| VM | machines virtuelles |
| snapshots | sauvegarde état |
| vMotion | migration |
| HA | haute dispo |
| DRS | équilibrage |

---

# 📦 Composants VMware

| Élément | Description |
|---|---|
| ESXi | hyperviseur |
| vCenter | gestion centralisée |
| datastore | stockage |
| VMFS | système fichiers |

---

# 🌐 Réseau ESXi

| Élément | Description |
|---|---|
| vSwitch | switch virtuel |
| VM Network | réseau VM |
| Management Network | admin |
| VLAN | segmentation |

---

# 💾 Stockage

| Type | Description |
|---|---|
| local | disque |
| NAS | NFS |
| SAN | iSCSI / FC |
| datastore | stockage VM |

---

# ⚙️ Commandes utiles (CLI)

```bash
esxcli network ip interface list
esxcli storage filesystem list
esxcli vm process list
```

---

# 🌐 Accès

| Méthode | Description |
|---|---|
| Web UI | navigateur |
| SSH | console |
| vCenter | centralisé |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| datacenter | infra |
| entreprise | serveurs |
| lab | test |
| cloud | virtualisation |

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| accès root | sécurisé |
| firewall | ESXi |
| réseau | isolé |
| mises à jour | patch |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| licence | payante |
| matériel | compatible |
| complexité | avancée |

---

# 🛡️ Bonnes pratiques

> [!warning]

- isoler réseau management
- sauvegarder les VM
- limiter accès root
- mettre à jour ESXi
- utiliser vCenter

---

# 📊 Résumé

| Élément | Description |
|---|---|
| ESXi | hyperviseur |
| type | bare metal |
| usage | serveur |
| avantage | performance |
| limite | licence |

---

# 🎯 Conclusion

VMware ESXi permet :

- de virtualiser efficacement des serveurs
- de centraliser une infrastructure
- d’optimiser les ressources

👉 indispensable en :

🔥 datacenter  
🔥 entreprise  
🔥 virtualisation professionnelle