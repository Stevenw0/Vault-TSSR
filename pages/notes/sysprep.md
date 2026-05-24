# 🧩 Sysprep et personnalisation d’une image Windows

> [!info]
> **Sysprep (System Preparation Tool)** est un outil natif de Windows permettant de **généraliser une installation** afin de la transformer en **image réutilisable** pour un déploiement sur plusieurs machines.

Il est au cœur des solutions de déploiement comme **WDS**, **MDT**, **SCCM**, ou les images personnalisées en environnement entreprise.

---

## 🎯 Objectifs de Sysprep

Sysprep permet de :

- Supprimer les informations spécifiques à une machine
- Rendre une installation Windows clonable
- Préparer une image de référence
- Automatiser l’OOBE (premier démarrage)
- Standardiser les postes utilisateurs

> [!important]
> Une image Windows **ne doit jamais être clonée sans Sysprep**.

---

## 🧠 Principe de fonctionnement

Sysprep agit sur :
- le **SID** (Security Identifier)
- les informations matérielles
- le cache matériel
- les comptes locaux temporaires
- les paramètres régionaux et OOBE

Après Sysprep, Windows se comporte comme :
- une **nouvelle installation**
- prête à être personnalisée au premier démarrage

---

## 🗂️ Types d’images Windows

### 🧪 Image de référence
- Installation propre
- Mises à jour appliquées
- Logiciels de base installés
- Paramètres personnalisés
- Pas encore généralisée

### 📦 Image généralisée
- Passée par Sysprep
- Prête à être capturée
- Déployable sur plusieurs machines

---

## 🛠️ Lancer Sysprep

Emplacement :
```text
C:\Windows\System32\Sysprep\
```

Commande classique :
```bash
sysprep /generalize /oobe /shutdown
```

### Options principales
- `/generalize` : supprime les identifiants uniques
- `/oobe` : lance l’assistant au prochain boot
- `/shutdown` : éteint la machine après Sysprep
- `/reboot` : redémarre après Sysprep

---

## ⚙️ Personnalisation avant Sysprep

> [!note]
> Tout ce qui est fait **avant Sysprep** sera présent sur toutes les machines.

### Exemples de personnalisation
- Installation des logiciels standards
- Paramètres Windows (explorateur, barre des tâches)
- Fonds d’écran
- Services
- Mises à jour Windows
- Pilotes génériques

---

## 👤 Comptes utilisateurs

> [!warning]
> Ne jamais conserver de comptes utilisateurs nominatifs.

Bonnes pratiques :
- Utiliser un **compte administrateur local temporaire**
- Supprimer les comptes inutiles avant Sysprep
- Laisser la création du compte utilisateur à l’OOBE ou à l’Unattend

---

## 🤖 Automatisation avec Unattend.xml

Un fichier **Unattend.xml** permet :
- de supprimer l’OOBE
- de créer un compte local
- de définir la langue et le clavier
- de joindre un domaine
- d’appliquer des scripts post-install

Emplacement courant :
```text
C:\Windows\System32\Sysprep\unattend.xml
```

> [!tip]
> Unattend permet un déploiement **100 % silencieux**.

---

## 🧩 Personnalisation après Sysprep

> [!info]
> Certaines personnalisations doivent être faites **après** Sysprep.

Exemples :
- Nom de machine
- Intégration au domaine
- Activation Windows
- Applications dépendantes du matériel
- Paramètres utilisateurs finaux

---

## 🖥️ Capture de l’image

Une fois Sysprep exécuté et la machine éteinte :
- Démarrer sur WinPE
- Capturer l’image (WIM)
- Stocker l’image sur le serveur de déploiement

> [!important]
> Ne jamais redémarrer Windows après Sysprep avant la capture.

---

## ⚠️ Limitations et contraintes Sysprep

> [!warning]
> - Sysprep est limité à **3 exécutions** par installation
> - Certaines applications Microsoft Store bloquent Sysprep
> - Une image trop personnalisée peut devenir instable

---

## 🧠 Bonnes pratiques

> [!tip]
> - Toujours partir d’une installation propre
> - Tester l’image sur plusieurs machines
> - Utiliser des pilotes génériques
> - Documenter les personnalisations
> - Versionner les images
> - Séparer personnalisation système et utilisateur

---

## ❌ Erreurs fréquentes

- Lancer Sysprep après une mise à niveau
- Installer des apps Store non supportées
- Oublier `/generalize`
- Redémarrer la machine avant capture
- Utiliser un compte utilisateur réel

---

## 🔄 Sysprep et solutions de déploiement

Sysprep est utilisé par :
- WDS
- MDT
- SCCM
- Images personnalisées manuelles

> [!note]
> Ces outils automatisent la capture et le déploiement,  
> mais **Sysprep reste indispensable**.

---

## 🧾 Summary

> [!summary]
> - Sysprep prépare une image Windows clonable
> - Il supprime les identifiants uniques
> - La personnalisation se fait avant et après Sysprep
> - Unattend.xml permet l’automatisation complète
> - Une image bien préparée facilite le déploiement à grande échelle

---
