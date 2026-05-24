# 🎨 Toolkits graphiques — GUI Frameworks Linux

---

# 📌 Définition

Un **toolkit graphique** est une bibliothèque permettant de :

- créer des interfaces graphiques (GUI)
- gérer boutons, fenêtres, menus
- faciliter le développement d’applications

👉 utilisé par les applications et environnements de bureau

---

# 🧠 Principe

```
Application → Toolkit (GTK/Qt…) → Compositor → Écran
```

👉 le toolkit fournit les éléments visuels

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| développement | GUI |
| standardisation | composants |
| compatibilité | systèmes |
| rapidité | création UI |

---

# 🧱 Rôle du toolkit

| Fonction | Description |
|---|---|
| widgets | boutons, menus |
| layout | organisation |
| rendu | affichage |
| événements | clic, clavier |

---

# 📊 Toolkits principaux

---

## 🟦 GTK (GIMP Toolkit)

| Élément | Description |
|---|---|
| langage | C |
| usage | GNOME |
| style | moderne |
| support | Wayland |

---

👉 utilisé par :

- GNOME
- GIMP
- Firefox (partiellement)

---

## 🟥 Qt

| Élément | Description |
|---|---|
| langage | C++ |
| usage | KDE |
| performance | élevée |
| multiplateforme | oui |

---

👉 utilisé par :

- KDE Plasma
- VLC
- Qt apps

---

## 🟩 EFL (Enlightenment Foundation Libraries)

| Élément | Description |
|---|---|
| usage | Enlightenment |
| performance | élevée |
| design | fluide |

---

## 🟨 FLTK

| Élément | Description |
|---|---|
| léger | oui |
| simple | oui |
| usage | apps simples |

---

## 🟪 wxWidgets

| Élément | Description |
|---|---|
| multiplateforme | oui |
| natif | UI système |
| langage | C++ |

---

## 🧪 autres toolkits

| Toolkit | Description |
|---|---|
| Tk | ancien |
| SDL | jeux |
| Dear ImGui | debug UI |
| Electron | web-based |

---

# 🔄 Comparaison

| Critère | GTK | Qt |
|---|---|---|
| langage | C |
| performance | bonne |
| personnalisation | moyenne |

---

| Critère | Qt |
|---|---|
| langage | C++ |
| performance | élevée |
| personnalisation | élevée |

---

# ⚙️ Fonctionnement

## Étapes

1. app utilise toolkit
2. toolkit crée UI
3. envoie au compositor
4. affichage écran

---

# 📦 Widgets

| Élément | Exemple |
|---|---|
| bouton | click |
| menu | navigation |
| textbox | saisie |
| fenêtre | container |

---

# 🌐 Compatibilité

| Système | Support |
|---|---|
| Linux | oui |
| Windows | Qt/wx |
| macOS | Qt/wx |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| dépendances | lourdes |
| cohérence UI | mix GTK/Qt |
| performance | variable |

---

# 🔐 Sécurité

| Élément | Description |
|---|---|
| sandbox | Flatpak |
| isolation | Wayland |
| input | contrôlé |

---

# 🛡️ Bonnes pratiques

> [!warning]

- choisir toolkit selon projet
- éviter mélange GTK/Qt
- optimiser UI
- tester multi-plateforme

---

# 🌐 Cas d’utilisation

| Usage | Toolkit |
|---|---|
| GNOME | GTK |
| KDE | Qt |
| léger | FLTK |
| multiplateforme | Qt |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| toolkit | GUI |
| GTK | GNOME |
| Qt | KDE |
| rôle | UI |
| usage | apps |

---

# 🎯 Conclusion

Les toolkits graphiques permettent :

- de créer des interfaces modernes
- de standardiser les applications
- de simplifier le développement

👉 choix important selon besoin :

🔥 GTK → GNOME  
🔥 Qt → KDE  
🔥 autres → cas spécifiques