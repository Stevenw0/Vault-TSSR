# 🪟 Windows — Console MMC (`mmc.exe`)

> [!info]
> **MMC (Microsoft Management Console)** est une infrastructure Windows permettant  
> d’héberger et d’exécuter des **outils d’administration appelés “snap-ins”**  
> via une interface unifiée.

---

## 🧠 Qu’est-ce que `mmc.exe` ?

`mmc.exe` est le programme qui lance la **Microsoft Management Console**.  
Il ne fait rien seul : il sert de **conteneur** pour des outils d’administration.

> [!important]
> Les fichiers `.msc` sont des **configurations MMC** prêtes à l’emploi.

---

## 🧩 À quoi sert MMC ?

MMC permet de :
- Centraliser les outils d’administration
- Créer des consoles personnalisées
- Gérer localement ou à distance des systèmes Windows
- Standardiser les interfaces d’administration

---

## 🚀 Lancer MMC

### Méthodes possibles
```text
Win + R → mmc
```

```cmd
mmc.exe
```

```powershell
mmc
```

> [!note]
> Lancer `mmc` seul ouvre une **console vide**.

---

## 🧰 Snap-ins (composants MMC)

Les **snap-ins** sont des modules ajoutables dans MMC, par exemple :
- Gestion des disques
- Stratégies de groupe
- Pare-feu
- Certificats
- Services

---

## 🔐 Exemples de consoles MMC courantes (.msc)

---

### 🔹 `wf.msc` — Pare-feu Windows avancé
```text
wf.msc
```

> [!important]
> Ouvre le **Pare-feu Windows avec fonctions avancées** :
> - règles entrantes / sortantes
> - profils réseau (Domaine, Privé, Public)
> - journalisation
> - sécurité renforcée

📌 Très utilisé pour :
- filtrage réseau
- sécurité
- dépannage applicatif

---

### 🔹 `gpedit.msc` — Éditeur de stratégie de groupe locale
```text
gpedit.msc
```

> [!warning]
> Disponible uniquement sur **Windows Pro, Enterprise et Education**.

Permet de :
- configurer le comportement du système
- gérer la sécurité locale
- contrôler les fonctionnalités Windows
- appliquer des règles utilisateur / machine

📌 Indispensable en administration système.

---

### 🔹 `mstsc.exe` — Connexion Bureau à distance
```text
mstsc.exe
```

> [!note]
> `mstsc.exe` **n’est pas un snap-in MMC**,  
> mais une **application système** souvent utilisée avec des outils MMC.

Fonction :
- se connecter à une machine distante via RDP
- administrer un serveur ou poste à distance

---

## 🧱 Créer une console MMC personnalisée

### Étapes
1. Lancer `mmc`
2. **Fichier → Ajouter/Supprimer un composant logiciel enfichable**
3. Sélectionner les snap-ins désirés
4. Enregistrer la console (`.msc`)

> [!tip]
> Idéal pour créer des consoles :
> - support utilisateur
> - administration restreinte
> - formation

---

## 🧠 MMC locale vs distante

| Type | Description |
|---|---|
| Locale | Administration de la machine courante |
| Distante | Gestion d’un autre ordinateur |
| Fichier `.msc` | Console réutilisable |

---

## ⚠️ Bonnes pratiques

> [!tip]
> - Lancer MMC en **administrateur** si nécessaire
> - Créer des consoles personnalisées par rôle
> - Sauvegarder les fichiers `.msc`
> - Restreindre l’accès aux outils sensibles

> [!warning]
> Certaines consoles peuvent modifier profondément le système.

---

## 🧾 Tableau récapitulatif

| Commande | Type | Fonction |
|------|----|---------|
| `mmc.exe` | Console | Conteneur MMC |
| `wf.msc` | MMC | Pare-feu avancé |
| `gpedit.msc` | MMC | Stratégies locales |
| `mstsc.exe` | EXE | Bureau à distance |
| `services.msc` | MMC | Services Windows |
| `diskmgmt.msc` | MMC | Gestion des disques |

---

## 🧾 Summary

> [!summary]
> - `mmc.exe` est le moteur de la Microsoft Management Console
> - Les fichiers `.msc` sont des consoles prêtes à l’emploi
> - `wf.msc` gère le pare-feu avancé
> - `gpedit.msc` contrôle les stratégies locales
> - `mstsc.exe` complète l’administration à distance
> - MMC est un outil central pour tout administrateur Windows
****