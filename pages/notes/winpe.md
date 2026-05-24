
# 🧩 WinPE — Windows Preinstallation Environment

> [!info]
> **WinPE (Windows Preinstallation Environment)** est un **environnement Windows minimal**  
> utilisé pour **installer, réparer, déployer et dépanner** des systèmes Windows.

---

## 🧠 À quoi sert WinPE ?

WinPE est utilisé principalement pour :

- 🧱 Installer Windows
- 🔄 Déployer des images système
- 🛠️ Réparer un Windows qui ne démarre plus
- 🧪 Diagnostiquer du matériel
- 💽 Gérer disques et partitions
- 📦 Lancer des scripts d’automatisation

> [!important]
> WinPE est **temporaire** : il s’exécute en mémoire (RAM)  
> et disparaît après redémarrage.

---

## 🧬 Caractéristiques principales

- Basé sur le **noyau Windows**
- Interface **ligne de commande** (cmd / PowerShell)
- Très **léger**
- Compatible réseau (Ethernet, parfois Wi-Fi)
- Support NTFS, FAT32
- Exécutable depuis :
  - clé USB
  - ISO
  - PXE (réseau)

---

## 🧱 Ce que WinPE n’est PAS

> [!warning]
> WinPE n’est **pas** :
> - un Windows complet
> - un environnement bureautique
> - un OS permanent
> - un remplaçant de Windows Server

---

## 🗂️ Cas d’usage typiques

### 🚀 Déploiement de Windows
- Installation automatisée
- Scripts de post-installation
- Intégration MDT / WDS / SCCM

---

### 🛠️ Dépannage
- Accès disque hors ligne
- Réparation du boot
- Sauvegarde de données

---

### 🧪 Laboratoire et formation
- Tests d’installation
- Machines virtuelles
- Scénarios de récupération

---

## 🔁 Cycle de démarrage WinPE

1. Démarrage sur WinPE (USB / PXE / ISO)
2. Chargement en mémoire
3. Lancement automatique de `startnet.cmd`
4. Exécution de scripts (facultatif)
5. Installation / réparation / déploiement
6. Redémarrage → WinPE disparaît

---

## 📄 Fichier clé : `startnet.cmd`

> [!info]
> `startnet.cmd` est le **script de démarrage automatique** de WinPE.

### Exemple simple
```cmd
wpeinit
echo WinPE est prêt
```

### Exemple avec lancement automatique
```cmd
wpeinit
net use Z: \\serveur\deploy /user:admin password
Z:\deploy.cmd
```

---

## 🧰 Outils disponibles dans WinPE

### Commandes courantes
- `diskpart`
- `bcdboot`
- `bootrec`
- `net use`
- `xcopy`
- `robocopy`
- `regedit`
- `wpeinit`

---

### Exemple : gestion des disques
```cmd
diskpart
list disk
select disk 0
clean
create partition primary
format fs=ntfs quick
assign
exit
```

---

## 🔐 Accès au registre hors ligne

WinPE permet de modifier le registre d’un Windows **non démarré**.

> [!tip]
> Très utilisé pour les **bypass Windows 11**, réparations boot, comptes bloqués.

```cmd
reg load HKLM\Offline SYSTEM
regedit
reg unload HKLM\Offline
```

---

## 🧩 WinPE et déploiement (MDT / WDS)

> [!important]
> WinPE est la **brique de base** des outils de déploiement Microsoft.

### Intégration typique
- MDT : séquences de tâches
- WDS : boot PXE
- SCCM : déploiement entreprise

---

## ⚠️ Limitations de WinPE

> [!warning]
> - Session limitée dans le temps
> - Support matériel restreint (drivers à ajouter)
> - Pas d’interface graphique avancée
> - Pas de persistance des données

---

## 🧠 Bonnes pratiques

> [!tip]
> - Toujours intégrer les **drivers réseau et stockage**
> - Tester WinPE sur le matériel cible
> - Automatiser via `startnet.cmd`
> - Documenter les scripts utilisés
> - Versionner les images WinPE

---

## 🧾 Différence WinPE / Windows Recovery

| WinPE | Windows Recovery |
|----|------------------|
| Environnement générique | Spécifique à une installation |
| Personnalisable | Limité |
| Déploiement | Réparation utilisateur |
| Utilisé par MDT / WDS | Utilisé par Windows |

---

## 🧾 Summary

> [!summary]
> - WinPE est un environnement Windows minimal et temporaire
> - Il sert à installer, réparer et déployer Windows
> - Il s’exécute en RAM et disparaît au redémarrage
> - `startnet.cmd` est le point d’entrée principal
> - Essentiel pour MDT, WDS et les labs
> - Un outil clé pour tout admin Windows

---
