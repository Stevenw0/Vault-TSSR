# 📦 Gestion des paquets — Package Manager Linux

---

# 📌 Définition

Un **package manager** permet de :

- installer des logiciels
- gérer les dépendances
- mettre à jour le système
- supprimer proprement des programmes

👉 essentiel sur Linux

---

# 🧠 Principe

```
Commande → Package Manager → Dépôts → Installation
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| installation | logiciels |
| mise à jour | système |
| dépendances | auto |
| sécurité | sources fiables |

---

# 📊 Types de paquets

| Type | Description |
|---|---|
| binaire | prêt à l’emploi |
| source | à compiler |
| meta-package | dépendances |

---

# 📦 Package managers principaux

---

## 🧩 APT (Debian / Ubuntu)

| Élément | Description |
|---|---|
| format | .deb |
| commande | apt |
| dépendances | auto |
| usage | standard Debian |

---

### Commandes

```bash
sudo apt update
sudo apt upgrade
sudo apt install nginx
sudo apt remove nginx
```

---

## 🔴 DNF / YUM (Red Hat)

| Élément | Description |
|---|---|
| format | .rpm |
| commande | dnf |
| remplace | yum |
| usage | RHEL, Fedora |

---

### Commandes

```bash
sudo dnf install httpd
sudo dnf update
sudo dnf remove httpd
```

---

## ⚡ Pacman (Arch Linux)

| Élément | Description |
|---|---|
| format | .pkg.tar |
| rapidité | élevée |
| simplicité | forte |

---

### Commandes

```bash
sudo pacman -S nginx
sudo pacman -Syu
sudo pacman -R nginx
```

---

## 🧪 Zypper (SUSE)

| Élément | Description |
|---|---|
| format | .rpm |
| gestion | avancée |
| usage | openSUSE |

---

---

# 📊 Gestionnaires universels

---

## 📦 Snap

| Élément | Description |
|---|---|
| isolation | sandbox |
| format | snap |
| auto-update | oui |

---

### Commandes

```bash
sudo snap install code
```

---

## 📦 Flatpak

| Élément | Description |
|---|---|
| isolation | sandbox |
| dépôt | Flathub |
| portable | oui |

---

### Commandes

```bash
flatpak install flathub org.videolan.VLC
```

---

## 📦 AppImage

| Élément | Description |
|---|---|
| portable | oui |
| installation | aucune |
| exécution | directe |

---

```bash
chmod +x app.AppImage
./app.AppImage
```

---

# 🔄 Comparaison

| Critère | APT | DNF | Pacman |
|---|---|---|---|
| simplicité | élevée | élevée | élevée |
| rapidité | moyenne | bonne | très rapide |
| dépendances | auto | auto | auto |

---

# ⚙️ Fonctionnement

## Étapes

1. mise à jour dépôts
2. téléchargement package
3. installation dépendances
4. installation logiciel

---

# 📂 Dépôts

| Type | Description |
|---|---|
| officiel | sécurisé |
| tiers | externe |
| local | interne |

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| signature | GPG |
| dépôts | vérifiés |
| sandbox | Snap/Flatpak |

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| dépendances cassées | conflits |
| repo non fiable | malware |
| sudo | danger |
| versions | incompatibilité |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser dépôts officiels
- éviter scripts inconnus
- mettre à jour régulièrement
- vérifier signatures

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| serveur | apt/dnf |
| desktop | snap/flatpak |
| dev | pacman |
| portable | AppImage |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| package manager | gestion logiciel |
| apt | Debian |
| dnf | Red Hat |
| pacman | Arch |
| snap/flatpak | universel |

---

# 🎯 Conclusion

Les package managers permettent :

- une gestion simple des logiciels
- une installation rapide et sécurisée
- une maintenance du système

👉 indispensables en :

🔥 administration Linux  
🔥 dev  
🔥 cybersécurité