# 🧩 GPO — Stratégies de groupe (Group Policy Objects)

> [!info]
> Les **GPO (Group Policy Objects)** sont un mécanisme central de **gestion, de configuration et de sécurisation** des postes et serveurs Windows dans un environnement **Active Directory**.

Elles permettent d’appliquer automatiquement des paramètres :
- système
- sécurité
- utilisateur
- applicatifs

sans intervention manuelle sur chaque machine.

---

## 🎯 À quoi servent les GPO ?

Les GPO servent à :

- Centraliser l’administration Windows
- Appliquer des règles de sécurité
- Standardiser les configurations
- Automatiser les déploiements
- Réduire les erreurs humaines
- Gérer des centaines / milliers de postes

> [!important]
> Une GPO **ne fait qu’appliquer une configuration** :  
> elle **n’exécute pas de logique métier**, mais impose des règles.

---

## 🧠 Principe de fonctionnement

Une GPO est :
- **stockée dans l’Active Directory**
- **liée** à un conteneur (Site, Domaine, OU)
- **appliquée automatiquement** aux objets ciblés

### Le flux est le suivant :
1. La machine démarre ou l’utilisateur se connecte
2. Windows contacte un contrôleur de domaine
3. Les GPO applicables sont évaluées
4. Les paramètres sont appliqués
5. Le résultat est stocké localement

---

## 🏗️ Structure d’une GPO

Une GPO est composée de **deux parties** :

### 1️⃣ GPC — Group Policy Container (AD)
- Stockée dans l’Active Directory
- Contient les métadonnées
- Gère les permissions

### 2️⃣ GPT — Group Policy Template (SYSVOL)
- Stockée dans :
```text
\\domaine\SYSVOL\domaine\Policies\
```
- Contient :
  - scripts
  - fichiers ADMX
  - paramètres réels

> [!note]
> Si le **SYSVOL** n’est pas accessible, la GPO ne s’applique pas.

---

## 🧭 Où peut-on lier une GPO ?

Une GPO peut être liée à :

- 🌍 **Site**
- 🏢 **Domaine**
- 📂 **Unité d’Organisation (OU)**

> [!tip]
> **Bonne pratique** : lier les GPO **aux OU**, jamais directement au domaine (sauf exceptions).

---

## 🔁 Ordre d’application des GPO (LSDOU)

Les GPO sont appliquées dans cet ordre :

1. **Local**
2. **Site**
3. **Domaine**
4. **OU**
5. **Sous-OU**

> [!important]
> **La dernière GPO appliquée gagne** en cas de conflit.

---

## 🔐 Configuration ordinateur vs utilisateur

### 🖥️ Configuration ordinateur
- Appliquée **au démarrage**
- Dépend de l’ordinateur
- Exemples :
  - pare-feu
  - Windows Update
  - LAPS
  - BitLocker

### 👤 Configuration utilisateur
- Appliquée **à la connexion**
- Dépend de l’utilisateur
- Exemples :
  - fond d’écran
  - restrictions UI
  - paramètres Office

> [!note]
> Une GPO peut contenir **les deux types de configuration**.

---

## 🧩 Modèles d’administration (ADMX)

Les paramètres visibles dans les GPO sont définis par des fichiers :
- **ADMX** → règles
- **ADML** → langue

Emplacement recommandé :
```text
\\domaine\SYSVOL\domaine\Policies\PolicyDefinitions
```

> [!important]
> Le **Central Store** garantit la cohérence des GPO entre admins.

---

## 🧪 Exemples concrets d’usage

- Forcer le verrouillage de session après inactivité
- Bloquer l’accès au panneau de configuration
- Déployer des scripts PowerShell
- Gérer Windows Update / WSUS
- Configurer Edge, Chrome, Firefox
- Déployer LAPS
- Bloquer les périphériques USB
- Appliquer des clés registre

---

## 🧰 Types de paramètres GPO

- Paramètres système
- Paramètres sécurité
- Scripts (startup / logon)
- Préférences (GPP)
- Registre
- Tâches planifiées
- Services
- Fichiers / dossiers

> [!tip]
> Les **Préférences GPO (GPP)** permettent des actions **non bloquantes** (créer, modifier, supprimer).

---

## 🛑 Filtrage et ciblage

### 🎯 Filtrage de sécurité
- Appliquer une GPO à certains groupes AD

### 🧠 WMI Filter
- Appliquer une GPO selon :
  - version Windows
  - type matériel
  - RAM, CPU, etc.

> [!warning]
> Les filtres WMI ralentissent l’application des GPO → à utiliser avec parcimonie.

---

## 🔎 Diagnostic et dépannage

### Commandes utiles
```bash
gpupdate /force
gpresult /r
gpresult /h rapport.html
rsop.msc
```

### Journaux
```text
Observateur d’événements
Microsoft > Windows > GroupPolicy
```

---

## ⚠️ Erreurs fréquentes

> [!warning]
> - Lier une GPO au domaine sans nécessité
> - Mettre trop de paramètres dans une seule GPO
> - Modifier les GPO par défaut
> - Oublier les droits NTFS sur SYSVOL
> - Mélanger utilisateur et ordinateur sans logique

---

## ✅ Bonnes pratiques GPO

> [!tip]
> - Une GPO = un objectif
> - Nommage clair et cohérent
> - Tester dans une OU pilote
> - Documenter chaque GPO
> - Désactiver les parties inutiles
> - Éviter les scripts lourds
> - Versionner les ADMX

---

## 🧾 Avantages des GPO

- Administration centralisée
- Sécurité renforcée
- Automatisation
- Gain de temps
- Scalabilité
- Traçabilité

---

## 🧠 Limites des GPO

- Dépendance à Active Directory
- Peu adaptées au cloud pur
- Débogage parfois complexe
- Moins dynamiques qu’Intune

---

## 🔄 GPO vs Intune (rappel rapide)

| GPO | Intune |
|---|---|
| On-prem | Cloud |
| AD requis | Azure AD |
| Très complet | Moderne |
| Mature | Évolutif |

---

## 🧾 Summary

> [!summary]
> - Les GPO permettent de gérer Windows à grande échelle
> - Elles reposent sur Active Directory et SYSVOL
> - Elles s’appliquent selon l’ordre LSDOU
> - Elles utilisent des ADMX pour définir les règles
> - Bien conçues, elles sont un pilier de la sécurité Windows

---
