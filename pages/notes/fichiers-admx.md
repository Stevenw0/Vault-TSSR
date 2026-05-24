# 🧩 Fichiers ADMX — Modèles d’administration Windows

> [!info]
> Les fichiers **ADMX** (Administrative Templates XML) permettent de **définir les paramètres configurables via les stratégies de groupe (GPO)** dans les environnements Windows.

Ils remplacent les anciens fichiers **ADM** et sont utilisés dans :
- Active Directory
- GPO locales
- Environnements d’entreprise

---

## 🧠 À quoi servent les fichiers ADMX ?

Les fichiers ADMX :
- définissent **les paramètres visibles dans l’éditeur de stratégies**
- font le lien entre **interface GPO** et **clés de registre**
- standardisent la gestion des paramètres Windows et applicatifs

> [!important]
> Les fichiers ADMX **ne contiennent pas de paramètres actifs**  
> mais uniquement la **description des règles**.

---

## 🗂️ ADMX vs ADML

> [!note]
> Les fichiers ADMX fonctionnent toujours avec des fichiers **ADML**.

### Rôle de chacun
- **ADMX** → structure, règles, clés de registre
- **ADML** → langue, textes affichés (UI)

### Exemple
```text
chrome.admx      → règles
fr-FR\chrome.adml → textes français
```

---

## 📍 Emplacement des fichiers ADMX

### 📁 Central Store (recommandé)
```text
\\domaine\SYSVOL\domaine\Policies\PolicyDefinitions
```

> [!important]
> Le **Central Store** permet à tous les administrateurs  
> d’utiliser les **mêmes modèles ADMX**.

---

### 📁 Poste local
```text
C:\Windows\PolicyDefinitions
```

Utilisé pour :
- GPO locales
- tests
- machines hors domaine

---

## 🔄 Comment utiliser des fichiers ADMX

### 1️⃣ Télécharger les ADMX
Sources courantes :
- Microsoft (Windows, Edge)
- Éditeurs tiers (Chrome, Firefox, Zoom…)

---

### 2️⃣ Copier les fichiers

- Copier les `.admx` dans :
```text
PolicyDefinitions\
```

- Copier les `.adml` dans le dossier langue :
```text
PolicyDefinitions\fr-FR\
```

> [!warning]
> Ne jamais oublier les fichiers **ADML**, sinon les règles ne s’affichent pas.

---

### 3️⃣ Ouvrir l’éditeur de stratégie
```text
gpedit.msc
```
ou  
```text
gpmc.msc
```

Les nouveaux paramètres apparaissent automatiquement.

---

## 🧪 Exemple concret

### Objectif
Empêcher l’accès au panneau de configuration.

### GPO
```text
Configuration utilisateur
└─ Modèles d’administration
   └─ Panneau de configuration
      └─ Interdire l’accès au Panneau de configuration
```

### Effet réel (registre)
```text
HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
NoControlPanel = 1
```

> [!tip]
> Les ADMX ne font que **mapper une option graphique vers une clé registre**.

---

## 🧬 Structure interne d’un fichier ADMX

Un fichier ADMX est un **XML** contenant :
- catégories
- paramètres
- types (booléen, numérique, liste)
- clés et valeurs registre

> [!note]
> Il est possible de **créer ses propres ADMX**.

---

## 🛠️ Cas d’usage typiques

- Gérer les paramètres Windows
- Configurer Edge / Chrome / Firefox
- Appliquer des règles de sécurité
- Uniformiser les postes utilisateurs
- Déployer des configurations applicatives

---

## ⚠️ Erreurs fréquentes

> [!warning]
> - Copier uniquement les `.admx` sans les `.adml`
> - Mélanger des versions incompatibles
> - Modifier directement un ADMX Microsoft
> - Ne pas utiliser de Central Store

---

## 🧠 Bonnes pratiques

> [!tip]
> - Toujours utiliser le **Central Store**
> - Mettre à jour régulièrement les ADMX
> - Tester les nouvelles règles sur une GPO pilote
> - Documenter les versions de modèles
> - Sauvegarder avant mise à jour

---

## 🧾 ADMX et versions Windows

> [!info]
> Les ADMX sont souvent **liés à une version de Windows**.

Exemples :
- Windows 10 / 11
- Windows Server 2019 / 2022

> Toujours utiliser des modèles **compatibles ou plus récents**.

---

## 🧾 Summary

> [!summary]
> - Les fichiers ADMX définissent les paramètres des GPO
> - Ils fonctionnent avec des fichiers ADML (langue)
> - Le Central Store est la meilleure pratique
> - Les ADMX ne font que lier GPO ↔ registre
> - Indispensables pour l’administration Windows moderne

---
