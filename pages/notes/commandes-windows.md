# 🪟 Windows — Commandes système utiles (.exe / .msc / .cpl)

> [!info]
> Windows intègre de nombreuses commandes internes permettant d’ouvrir rapidement  
> des **outils système**, des **panneaux de configuration** et des **consoles d’administration**.

Ces commandes peuvent être lancées depuis :
- **Win + R**
- l’invite de commandes (`cmd`)
- PowerShell
- un script `.bat` / `.ps1`

---

## 🧭 Commandes de base (informations système)

### 🔹 `winver`
```text
winver
```

> [!note]
> Affiche la **version exacte de Windows** :
> - édition
> - numéro de build
> - version (ex : 22H2)

📌 Utile pour :
- diagnostic
- support
- compatibilité logicielle

---

## ⚙️ Panneaux de configuration (.cpl)

> [!info]
> Les fichiers `.cpl` sont des **modules du Panneau de configuration**.

---

### 🔹 `ncpa.cpl`
```text
ncpa.cpl
```

> [!important]
> Ouvre les **connexions réseau** :
> - cartes Ethernet / Wi-Fi
> - activation / désactivation
> - configuration IP
> - propriétés IPv4 / IPv6

📌 Très utilisé pour :
- dépannage réseau
- configuration manuelle IP
- gestion VPN

---

### Autres `.cpl` courants
```text
appwiz.cpl      → Programmes et fonctionnalités
sysdm.cpl       → Propriétés système
control         → Panneau de configuration
firewall.cpl    → Pare-feu Windows
```

---

## 🧰 Consoles d’administration (.msc)

> [!info]
> Les fichiers `.msc` ouvrent des **consoles MMC**  
> utilisées pour l’administration avancée.

---

### 🔹 `compmgmt.msc`
```text
compmgmt.msc
```

> [!important]
> Ouvre la **Gestion de l’ordinateur**, qui regroupe :
> - Observateur d’événements
> - Utilisateurs et groupes locaux
> - Gestion des disques
> - Services
> - Partages

📌 C’est l’un des **outils les plus complets** pour un administrateur Windows.

---

### Autres `.msc` indispensables
```text
services.msc        → Services Windows
eventvwr.msc        → Observateur d’événements
diskmgmt.msc        → Gestion des disques
devmgmt.msc         → Gestionnaire de périphériques
taskschd.msc        → Planificateur de tâches
secpol.msc          → Stratégie de sécurité locale
gpedit.msc          → Éditeur de stratégie de groupe (Pro+)
```

---

## 🚀 Lancer ces commandes efficacement

### Via Exécuter
```text
Win + R → taper la commande → Entrée
```

### Via PowerShell
```powershell
winver
ncpa.cpl
compmgmt.msc
```

### Via script batch
```bat
@echo off
winver
ncpa.cpl
```

---

## 🧠 Bonnes pratiques

> [!tip]
> - Apprendre les commandes **par catégorie**
> - Utiliser `Win + R` pour aller vite
> - Préférer `.msc` pour l’administration
> - Documenter celles utilisées en support

> [!warning]
> Certaines consoles nécessitent des **droits administrateur**.

---

## 🧾 Tableau récapitulatif

| Commande | Type | Fonction |
|-------|----|---------|
| `winver` | .exe | Version de Windows |
| `ncpa.cpl` | .cpl | Cartes réseau |
| `compmgmt.msc` | .msc | Gestion complète machine |
| `services.msc` | .msc | Services |
| `diskmgmt.msc` | .msc | Disques |
| `eventvwr.msc` | .msc | Logs système |

---

## 🧾 Summary

> [!summary]
> - `winver` affiche la version exacte de Windows
> - `.cpl` = panneaux de configuration
> - `.msc` = consoles d’administration MMC
> - `ncpa.cpl` et `compmgmt.msc` sont des incontournables
> - Ces commandes accélèrent fortement le dépannage et l’administration
