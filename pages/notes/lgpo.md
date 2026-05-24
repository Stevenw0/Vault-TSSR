# 🖥️ LGPO — Automatiser la configuration des stratégies locales sur Windows

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-00.png)

Dans ce tutoriel, nous allons voir comment utiliser **LGPO (Local Group Policy Object Tool)** de Microsoft pour gérer les **stratégies locales Windows** sans domaine **Active Directory**.

LGPO permet notamment :

- d’exporter des stratégies locales
- d’importer une configuration sur d’autres machines
- d’automatiser des paramètres système et sécurité

Cette méthode est particulièrement utile lorsque les machines **ne sont pas membres d’un domaine Active Directory**.

---

# 🧠 Présentation de LGPO

**LGPO.exe** est un outil en ligne de commande développé par Microsoft permettant de gérer les **GPO locales**.

Contrairement aux stratégies de groupe classiques :

- il fonctionne **sans domaine**
- il peut être utilisé sur des **machines autonomes**
- il permet l’automatisation des configurations Windows.

LGPO permet de manipuler différents types de fichiers :

- `.pol` → paramètres de stratégie
- `.inf` → modèles de configuration
- `.csv` → paramètres de sécurité

Cet outil est très utile pour :

- standardiser des postes Windows
- appliquer des configurations de sécurité
- automatiser les déploiements système.

LGPO est souvent utilisé dans :

- environnements industriels
- infrastructures isolées
- déploiements automatisés

Il peut également être intégré dans des outils de déploiement comme :

- [MDT](https://rdr-it.com/mdt-installation-configuration-microsoft-deployment-toolkit/)
- SCCM
- scripts automatisés.

LGPO fait partie du **Microsoft Security Compliance Toolkit**.

---

# ⚙️ Configuration de l’ordinateur modèle

Avant d’exporter une configuration, il faut préparer un **ordinateur modèle**.

Cet ordinateur doit :

- être récemment installé
- être en **groupe de travail**
- ne pas être membre d’un domaine

Cela évite tout conflit avec des **GPO Active Directory**.

---

## Ouvrir l’éditeur de stratégie locale

1️⃣ Ouvrir **Exécuter**

2️⃣ Entrer la commande :

```bash
gpedit.msc
```

3️⃣ Cliquer sur **OK**

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-01-600x291.png)

La console **Éditeur de stratégie de groupe locale** s’ouvre.

---

## Configurer les stratégies

Configurer ensuite les paramètres souhaités dans la console.

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-02-600x278.png)

Pour une configuration recommandée de Windows :

➡️ [GPO: configuration et optimisation de Windows 10 et Windows 11](https://rdr-it.com/gpo-configuration-et-optimisation-de-windows-10-et-windows-11/)

---

# 📥 Télécharger LGPO

Télécharger LGPO depuis le site de Microsoft :

➡️ https://www.microsoft.com/en-us/download/details.aspx?id=55319

Cliquer sur **Download**.

![LGPO download](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-04-600x275.png)

Sélectionner **LGPO.zip** puis télécharger.

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-05-600x274.png)

---

## Extraction

Une fois téléchargé :

1️⃣ Décompresser l’archive  
2️⃣ Copier **LGPO.exe**

Exemple :

```
C:\tmp
```

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-06-600x317.png)

---

# 📤 Exporter les stratégies locales

LGPO fonctionne en **ligne de commande**.

Créer un dossier pour l’export.

Exemple :

```
C:\tmp\Export
```

Ouvrir **CMD ou PowerShell en administrateur** puis se placer dans le dossier :

```
C:\tmp
```

---

## Commande d’export

```bash
LGPO.exe /b C:\Path\Of\Export
```

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-07-470x400.png)

Une fois l’export terminé :

- un dossier avec un **GUID** est créé
- il contient les stratégies locales exportées.

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-08-600x276.png)

La structure est similaire à celle des **GPO Active Directory**.

---

# 📥 Importer les stratégies locales

Pour appliquer la configuration sur un autre poste :

1️⃣ Copier :

- `LGPO.exe`
- le dossier d’export

2️⃣ Ouvrir **CMD en administrateur**

3️⃣ Exécuter :

```bash
LGPO.exe /g C:\Path\Of\Import
```

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-10-473x400.png)

Après l’import :

➡️ **Redémarrer la machine** pour appliquer toutes les stratégies.

---

# 🚀 Utiliser LGPO avec MDT

LGPO peut être intégré dans **MDT** afin d’automatiser la configuration lors du déploiement de Windows.

Créer une **application MDT** contenant :

- `LGPO.exe`
- le dossier d’export.

---

## Création de l’application

Dans MDT :

1️⃣ Créer une nouvelle application  
2️⃣ Sélectionner **Application with source files**

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-11-483x400.png)

Indiquer le dossier contenant les fichiers.

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-12-483x400.png)

---

## Commande à utiliser

Dans la ligne de commande :

```
.\LGPO.exe /g .\FolderNameExport\
```

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-13-482x400.png)

---

## Ajouter à la Task Sequence

Ajouter l’application dans la **séquence de tâches MDT**.

![](https://rdr-it.com/wp-content/uploads/2025/07/lgpo-14-443x400.png)

Il est recommandé d’ajouter un **redémarrage automatique** après l’application.

---

## Alternative via CustomSettings.ini

Si MDT est configuré avec une personnalisation avancée :

➡️ https://rdr-it.com/mdt-2013-activer-personnalisation-le-deploiement-en-fonction-de-limage-via-tasksequenceid/

Il est possible de lancer LGPO automatiquement via :

```
CustomSettings.ini
```

---

# 🧾 Résumé

LGPO permet de :

✔️ gérer les stratégies locales Windows  
✔️ exporter une configuration de sécurité  
✔️ importer une configuration sur plusieurs machines  
✔️ automatiser la configuration système  

Il est particulièrement utile pour :

- postes **hors domaine**
- déploiements automatisés
- environnements **industriels**
- standardisation des postes Windows.

---

💡 LGPO est une excellente solution pour **standardiser la configuration Windows sans Active Directory**.