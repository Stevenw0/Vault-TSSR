# 🖥️ Proxmox VE — Virtualisation

---

# 📌 Définition

**Proxmox VE (Virtual Environment)** est une plateforme de **virtualisation open-source** permettant de gérer :

- machines virtuelles (VM)
- conteneurs (LXC)
- stockage
- réseau

---

# 🧠 Principe

Proxmox permet d’exécuter plusieurs systèmes sur un même serveur :

```
Serveur physique → Proxmox → VM / Containers
```

---

# 🎯 Objectif

| Fonction | Description |
|---|---|
| Virtualisation | VM |
| Conteneurisation | LXC |
| Gestion centralisée | Web UI |
| Haute dispo | cluster |

---

# 🏗️ Architecture

## Schéma

```
Hardware
 ↓
Proxmox (Hyperviseur)
 ↓
VM / Containers
 ↓
Applications
```

---

# 📊 Types de virtualisation

| Type | Description |
|---|---|
| KVM | machines virtuelles |
| LXC | conteneurs légers |

---

# 🧩 Composants

| Élément | Description |
|---|---|
| Node | serveur Proxmox |
| VM | machine virtuelle |
| CT | conteneur |
| Storage | stockage |
| Network | réseau |

---

# 🌐 Interface Web

Accès :

```
https://IP:8006
```

---

## Permet :

- créer VM
- gérer stockage
- config réseau
- monitorer

---

# ⚙️ Création VM

## Étapes

1. upload ISO
2. créer VM
3. config CPU / RAM
4. installer OS

---

# 📦 Conteneurs (LXC)

Plus légers que VM :

| Avantage | Description |
|---|---|
| rapide | démarrage |
| léger | moins ressources |
| simple | déploiement |

---

# 💾 Stockage

| Type | Description |
|---|---|
| local | disque serveur |
| NFS | réseau |
| ZFS | avancé |
| Ceph | distribué |

---

# 🌐 Réseau

Proxmox utilise des bridges :

```
vmbr0 → réseau principal
```

---

# 🔄 Cluster

Permet :

- plusieurs nodes
- haute disponibilité
- migration VM

---

# 📊 Fonctionnalités

| Fonction | Description |
|---|---|
| snapshot | sauvegarde |
| backup | VM |
| migration | live |
| HA | haute dispo |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser stockage fiable
- sauvegarder VM
- isoler réseau
- surveiller ressources

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| lab | test |
| entreprise | infra |
| cloud privé | virtualisation |
| homelab | perso |

---

# 📊 Proxmox vs VMware

| Critère | Proxmox | VMware |
|---|---|---|
| coût | gratuit | payant |
| open-source | oui | non |
| simplicité | élevée | pro |
| usage | lab / prod | entreprise |

---

# 📦 Commandes utiles

```bash
pvesh get /nodes
qm list
pct list
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Proxmox | hyperviseur |
| VM | KVM |
| CT | LXC |
| UI | web |
| usage | virtualisation |

---

# 🎯 Conclusion

Proxmox est :

- puissant
- gratuit
- complet

👉 idéal pour :

- homelab
- entreprise
- cloud privé