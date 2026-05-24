# 🖥️ WDS — Installation et configuration d’un serveur WDS en mode autonome

> [!info]
> Le rôle **WDS (Windows Deployment Services)** est inclus avec **Windows Server** et permet le **déploiement automatisé de systèmes Windows via le réseau (PXE)**, sans support physique.

Ce service permet :
- Le déploiement de **postes physiques ou virtuels**
- L’installation de **Windows 10 / Windows 11**
- L’utilisation de **fichiers de réponses XML (Unattend)** pour automatiser totalement l’installation
- Le chargement automatique des **drivers matériels**

---

## 📌 Environnement du tutoriel

- **Windows Server 2022**
- Mode **WDS autonome** (sans Active Directory)
- Serveur DHCP présent sur un autre serveur

---

## 📥 Ressources utiles

- 📀 Télécharger une image ISO Windows  
  https://www.pc2s.fr/telecharger-image-systeme-windows-iso/

- 📦 Fichiers de configuration XML (Unattend)  
  https://www.pc2s.fr/wp-content/uploads/2024/03/XML_OEM.zip

---

## 🧩 Installation du rôle WDS

Depuis le **Gestionnaire de serveur** :
- Ajouter des rôles et fonctionnalités
- Sélectionner **Windows Deployment Services**

![Installation WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-01.png)

> [!tip]
> Laissez cochés **les deux services de rôles** associés à WDS.

![Rôles WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-02.png)

---

## 🛠️ Configuration initiale du serveur WDS

Accès à la console :
- Gestionnaire de serveur → **Outils** → Services de déploiement Windows

![Console WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-03.png)

Clic droit sur le serveur → **Configurer le serveur**

![Configurer WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-04.png)

### Mode de fonctionnement
- ✔️ **Serveur autonome**

![Mode autonome](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-05.png)

### Répertoire de travail
- Exemple : `D:\WDS`
- Contiendra :
  - Images de boot
  - Images d’installation
  - Drivers
  - Fichiers Unattend

![Répertoire WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-06.png)

---

## 🌐 Intégration avec DHCP

> [!note]
> Le serveur DHCP est géré par un autre serveur.

Tutoriel DHCP :  
https://www.pc2s.fr/installation-du-role-serveur-dhcp-sur-windows-serveur-2019-2016-ou-2012-r2/

Laisser cochées les deux options DHCP :

![Options DHCP](https://www.pc2s.fr/wp-content/uploads/2024/03/Config-DHCP-WDS-00.png)

Vérification dans les propriétés WDS :

![Options WDS](https://www.pc2s.fr/wp-content/uploads/2024/03/Config-DHCP-WDS-01.png)

Option **060 PXEClient** ajoutée automatiquement :

![Option PXE](https://www.pc2s.fr/wp-content/uploads/2024/03/Config-DHCP-WDS-02.png)

---

## 🖥️ Paramètres PXE

- ✔️ Répondre à **tous les ordinateurs (connus et inconnus)**

![Réponse PXE](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-07.png)

Finaliser la configuration :

![Fin configuration](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-08.png)

---

## 🚀 Ajout d’une image de démarrage (boot.wim)

> [!warning]
> ⚠️ Le **boot.wim de Windows 11 ne fonctionne pas avec WDS**  
> 👉 Utiliser **boot.wim de Windows 10** (compatible Windows 10 & 11)

Ajouter une image de démarrage :

![Ajout boot image](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-09.png)

Sélection du fichier `boot.wim` :

![boot.wim](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-10.png)

Nom convivial :

![Nom boot](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-12.png)

Image disponible :

![Boot image OK](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-13.png)

---

## 📦 Ajout d’une image d’installation (install.wim)

Créer un **groupe d’images** :

![Groupe images](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-15.png)

Sélection du fichier `install.wim` :

![install.wim](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-16.png)

Choisir les éditions à importer :

![Sélection versions](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-18.png)

Image disponible :

![Image OS](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-21.png)

---

## ⚙️ Automatisation avec Unattend.xml

### Emplacement
```
D:\WDS\WdsClientUnattend
```

- Copier :
  - `Unattend_Boot.xml`
  - `Unattend_Image.xml`

![Unattend](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-23.png)

### Activer l’installation sans assistance
- Propriétés du serveur → Onglet **Client**

![Sans assistance](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-24.png)

---

## 🧠 Drivers matériels (LAN / stockage)

> [!danger]
> Erreur PXE = **driver réseau manquant**

![Erreur PXE](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-Drivers-Lan-01.jpg)

Créer un groupe de pilotes :

![Groupe drivers](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-Drivers-Lan-02.png)

Injection dans l’image de boot :

![Injection drivers](https://www.pc2s.fr/wp-content/uploads/2024/03/WDS-Drivers-Lan-11.png)

---

## 🧪 Déploiement PXE côté client

- Attribution IP
- Sélection image de boot
- Installation automatique

![PXE OK](https://www.pc2s.fr/wp-content/uploads/2024/03/PXE-WDS-06.png)

🎉 **Installation terminée !**

![Installation réussie](https://www.pc2s.fr/wp-content/uploads/2024/03/PXE-WDS-07.png)

---

## 🧾 Ressources complémentaires

- Installation silencieuse de logiciels avec WPI  
  https://www.pc2s.fr/wpi-installation-silencieuse-et-automatisee-de-logiciels/

---

## ✅ Résumé

> [!summary]
> - WDS permet un **déploiement PXE complet**
> - Mode autonome = idéal pour lab ou petite infra
> - Utilisation de fichiers **Unattend XML**
> - Support des drivers réseau & stockage
> - Compatible Windows 10 / 11

---
