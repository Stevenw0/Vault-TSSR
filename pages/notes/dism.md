# 🛠️ DISM — Réparer les fichiers systèmes et l’image de Windows (11 / 10)

> [!info]
> **DISM** (*Deployment Imaging Service and Management Tool*) est l’un des outils **les plus puissants intégrés à Windows** pour **réparer l’image système** utilisée par Windows 10 et Windows 11 afin de restaurer ses composants internes.

Lorsque Windows rencontre :
- des **erreurs persistantes**
- des **mises à jour impossibles**
- des **fichiers système corrompus**
- un **magasin de composants WinSxS endommagé**

👉 DISM devient souvent **indispensable**.

---

## 🔎 Différence entre DISM et SFC

- **SFC** (*System File Checker*)  
  👉 vérifie et répare les **fichiers système actifs**

- **DISM**  
  👉 répare **l’image système** utilisée par Windows pour restaurer ses fichiers

> [!important]
> Si l’image système est corrompue, **SFC échoue**.  
> 👉 Il faut **réparer l’image avec DISM avant de relancer SFC**.

🔗 SFC :  
https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/

🔗 WinSxS (magasin de composants) :  
https://www.malekal.com/quest-ce-que-le-dossier-winsxs-et-le-magasin-des-composants-de-windows-10/

---

## ❓ Quand utiliser DISM ?

Utilise DISM lorsque :

- Windows affiche des erreurs système récurrentes
- SFC indique qu’il **n’a pas pu réparer certains fichiers**
- Windows Update échoue en boucle  
  https://www.malekal.com/mises-a-jour-windows-update/
- le magasin de composants est endommagé
- Windows devient instable ou lent sans raison apparente

---

## 🩺 Vérifier l’état de l’image Windows

Avant toute réparation, il est conseillé de **diagnostiquer l’image système**.

### ✔️ CheckHealth (diagnostic rapide)
```bash
DISM /Online /Cleanup-Image /CheckHealth
```

- Rapide
- Vérifie si une corruption connue existe
- Aucune réparation

---

### 🔍 ScanHealth (analyse complète)
```bash
DISM /Online /Cleanup-Image /ScanHealth
```

- Analyse approfondie
- Peut prendre plusieurs minutes
- Identifie les corruptions du magasin WinSxS

---

### 🔧 RestoreHealth (réparation)
```bash
DISM /Online /Cleanup-Image /RestoreHealth
```

- Répare automatiquement l’image système
- Utilise les fichiers locaux ou Windows Update

📄 Journal DISM :
```text
C:\Windows\Logs\DISM\Dism.log
```

---

## ▶️ Exécuter DISM depuis Windows (session fonctionnelle)

> [!tip]
> À privilégier si Windows démarre normalement.

Étapes :
1. Ouvrir **Terminal Windows** ou **Invite de commandes**
2. Clic droit → *Exécuter en tant qu’administrateur*
3. Exécuter les commandes DISM
4. Puis relancer :
```bash
sfc /scannow
```

---

## 🆘 Exécuter DISM hors ligne (WinRE)

> [!warning]
> À utiliser si Windows ne démarre plus ou si DISM échoue en mode normal.

- Accéder à **WinRE** (MAJ + Redémarrer)
- Ouvrir **Invite de commandes**
- Identifier la partition Windows (`diskpart` → `list volume`)

### Analyse hors ligne
```bash
DISM /Image:D:\ /Cleanup-Image /ScanHealth
```

### Réparation hors ligne
```bash
DISM /Image:D:\ /Cleanup-Image /RestoreHealth
```

🔗 WinRE :  
https://www.malekal.com/quest-ce-que-winre-windows-recovery-environment/

---

## 💿 Réparer Windows avec une source ISO

> [!important]
> Indispensable lorsque DISM affiche :  
> **0x800f081f – fichiers sources introuvables**

### Étapes :
1. Télécharger une ISO Windows officielle
2. Monter l’ISO (clic droit → Monter)
3. Repérer `install.wim` ou `install.esd`

### Commande avec source ISO
```bash
DISM /Online /Cleanup-Image /RestoreHealth /Source:E:\sources\install.wim /LimitAccess
```

Ou avec `install.esd` :
```bash
DISM /Online /Cleanup-Image /RestoreHealth /Source:E:\sources\install.esd /LimitAccess
```

---

## ❌ Erreurs DISM courantes

### 0x800f081f — fichiers sources introuvables
🔗 https://www.malekal.com/dism-fichiers-sources-introuvables-0x800f081-0x800f081f/

### Erreur 87 (syntaxe incorrecte)
🔗 https://www.malekal.com/dism-erreur-87/

### Erreur 2 — fichier utilisé par un autre processus
🔗 https://www.malekal.com/dism-erreur-2-les-solutions/

---

## 🔁 Quand relancer SFC après DISM ?

> [!summary]
> Relance **toujours SFC** après un **RestoreHealth réussi**.

```bash
sfc /scannow
```

🔗 Guide SFC :  
https://www.malekal.com/sfc-verifier-et-corriger-les-fichiers-systemes/

---

## 🖥️ Interface graphique DISM

DISM GUI permet d’utiliser DISM sans ligne de commande.

🔗 DISM GUI :  
https://www.malekal.com/dism-gui-toutes-les-commandes-dism-dans-une-interface-graphique/

---

## 📚 Ressources complémentaires

- Réparer Windows 11 sans perte de données  
  https://www.malekal.com/comment-reparer-windows-11-sans-perte-de-donnees/
- Réparer Windows 10 sans perte de données  
  https://www.malekal.com/reparer-windows10-sans-perte-donnees/
- Réparer Windows en ligne de commande  
  https://www.malekal.com/reparer-windows-10-11-cmd-invite-de-commandes/
- Commandes CMD de réparation Windows  
  https://www.malekal.com/commandes-cmd-pour-reparer-windows/

---

## 🧾 Summary

> [!summary]
> - DISM répare **l’image système de Windows**
> - Il est complémentaire à SFC
> - Indispensable si SFC échoue
> - Peut fonctionner en ligne ou hors ligne
> - Une ISO Windows garantit une réparation fiable
> - Outil clé du dépannage avancé Windows

---
