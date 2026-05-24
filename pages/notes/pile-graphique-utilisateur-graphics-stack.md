# 🖥️ Pile graphique Linux — Graphics Stack

---

# 📌 Définition

La **pile graphique (Graphics Stack)** est l’ensemble des composants permettant :

- d’afficher une interface graphique
- de gérer les interactions utilisateur
- de communiquer avec le matériel (GPU)

👉 elle relie les applications à l’écran

---

# 🧠 Principe

```
Application → Toolkit → Compositor → Display Server → Kernel → GPU → Écran
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| affichage | GUI |
| performance | GPU |
| interaction | utilisateur |
| abstraction | matériel |

---

# 🏗️ Architecture globale

```
Apps
 ↓
Toolkits (GTK / Qt)
 ↓
Compositor (Wayland)
 ↓
Display Protocol (Wayland / X11)
 ↓
Libs graphiques (Mesa, OpenGL, Vulkan)
 ↓
Kernel (DRM / KMS)
 ↓
GPU
 ↓
Écran
```

---

# 🧱 Composants de la pile

---

# 🧩 1️⃣ Applications

- logiciels utilisateur
- utilisent des toolkits

👉 ex : navigateur, terminal

---

# 🧩 2️⃣ Toolkits graphiques

| Toolkit | Usage |
|---|---|
| GTK | GNOME |
| Qt | KDE |
| SDL | jeux |

---

👉 créent l’interface graphique

---

# 🧩 3️⃣ Display Server / Protocol

## X11

- ancien système
- architecture complexe

## Wayland

- moderne
- plus sécurisé
- plus simple

---

# 🧩 4️⃣ Compositor

👉 gère :

- fenêtres
- affichage
- input

---

| Compositor | Usage |
|---|---|
| Mutter | GNOME |
| KWin | KDE |
| Sway | tiling |
| Hyprland | moderne |

---

# 🧩 5️⃣ Bibliothèques graphiques

## OpenGL

- API graphique 3D

## Vulkan

- moderne, performant

## Mesa

- implémentation open source

---

# 🧩 6️⃣ Kernel (DRM / KMS)

| Élément | Description |
|---|---|
| DRM | gestion GPU |
| KMS | affichage |

---

👉 communication avec le matériel

---

# 🧩 7️⃣ GPU (Carte graphique)

| Type | Exemple |
|---|---|
| intégré | Intel |
| dédié | NVIDIA / AMD |

---

---

# 📊 Flux de données

```
App → dessin → toolkit → compositor → GPU → écran
```

---

# 🔄 X11 vs Wayland

| Critère | X11 | Wayland |
|---|---|---|
| architecture | complexe |
| sécurité | faible |
| performance | moyenne |

---

| Critère | Wayland |
|---|---|
| architecture | simple |
| sécurité | élevée |
| performance | meilleure |

---

# ⚙️ Drivers graphiques

| Type | Description |
|---|---|
| open source | Mesa |
| propriétaire | NVIDIA |
| hybride | AMD |

---

# ⚠️ Problèmes possibles

| Problème | Cause |
|---|---|
| écran noir | driver |
| lag | GPU |
| crash GUI | compositor |
| incompatibilité | Wayland |

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| Wayland | isolation apps |
| X11 | vulnérable |
| sandbox | Flatpak |

---

# 🛡️ Bonnes pratiques

> [!warning]

- privilégier Wayland
- mettre à jour drivers GPU
- éviter mix GTK/Qt excessif
- tester compatibilité apps

---

# 🌐 Cas d’utilisation

| Usage | Stack |
|---|---|
| desktop GNOME | GTK + Mutter |
| KDE | Qt + KWin |
| gaming | Vulkan |
| dev | Wayland |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| stack | chaîne graphique |
| Wayland | moderne |
| compositor | affichage |
| Mesa | GPU |
| kernel | matériel |

---

# 🎯 Conclusion

La pile graphique Linux est essentielle pour :

- afficher les interfaces
- exploiter le GPU
- assurer performance et sécurité

👉 architecture moderne :

🔥 Wayland + compositor  
🔥 Vulkan / Mesa  
🔥 GPU optimisé  

👉 cœur du système graphique Linux