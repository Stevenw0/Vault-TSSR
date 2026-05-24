# 💽 LVM – Logical Volume Manager

## 📌 Qu’est-ce que le LVM ?

Le **LVM (Logical Volume Manager)** est un système de **gestion avancée des volumes de stockage sous Linux**.  
Il permet de manipuler l’espace disque de manière **logique, flexible et dynamique**, sans dépendre directement des partitions physiques.

> [!info]  
> Avec LVM, il est possible d’agrandir ou de réduire des volumes **sans redémarrer le système**.

---

## 🧠 Pourquoi utiliser LVM ?

LVM est utilisé pour :

- ajuster dynamiquement la taille des volumes
    
- regrouper plusieurs disques en un seul espace logique
    
- simplifier l’administration du stockage
    
- créer des **snapshots** pour la sauvegarde
    

> [!summary]  
> LVM est particulièrement adapté aux **serveurs** et aux environnements professionnels.

---

## 🧩 Les composants du LVM

### 💿 Volume Physique (PV)

- Disque ou partition préparé pour LVM
    
- Support physique du stockage
    

### 📦 Groupe de Volumes (VG)

- Ensemble de volumes physiques
    
- Réservoir global d’espace disque
    

### 📁 Volume Logique (LV)

- Volume utilisable par le système
    
- Équivalent logique d’une partition classique
    

> [!note]  
> Le système de fichiers est créé sur le **volume logique**, pas directement sur le disque.

---

## 🔄 Fonctionnement général

1. Initialisation des disques en volumes physiques
    
2. Regroupement dans un volume group
    
3. Création de volumes logiques selon les besoins
    

> [!tip]  
> L’utilisateur ne manipule jamais directement les disques physiques.

---

## 📸 Snapshots LVM

Les **snapshots** permettent :

- de capturer l’état d’un volume à un instant donné
    
- de réaliser des sauvegardes cohérentes
    
- de restaurer rapidement après une erreur
    

> [!warning]  
> Les snapshots consomment de l’espace disque et doivent être surveillés.

---

## 🐧 Distributions Linux supportant LVM

> [!info]  
> **La quasi-totalité des distributions Linux modernes supportent LVM nativement.**

### ✅ Support natif et courant

- **Red Hat Enterprise Linux (RHEL)**  
    Support officiel, très utilisé en entreprise, LVM souvent activé par défaut.
    
- **Rocky Linux** et **AlmaLinux**  
    Alternatives communautaires à RHEL, LVM utilisé par défaut sur serveurs.
    
- **Ubuntu**  
    Support LVM natif, très courant sur Ubuntu Server, option disponible à l’installation.
    
- **Debian**  
    Support complet et stable, LVM configurable dès l’installateur.
    
- **SUSE Linux Enterprise** et **openSUSE**  
    Support avancé de LVM, souvent combiné à des outils graphiques.
    
- **Arch Linux**  
    Support natif, configuration manuelle, très flexible.
    
- **Linux Mint**  
    Basé sur Ubuntu, support LVM possible mais moins courant en desktop.
    

---

## 🖥️ Cas d’usage typiques

> [!note]
> 
> - **Serveurs Linux** : LVM est quasi systématique
>     
> - **Postes de travail** : LVM est optionnel
>     
> - **Virtualisation** : LVM très apprécié pour la flexibilité
>     

---

## ⚖️ LVM vs partitions classiques

|Partitions classiques|LVM|
|---|---|
|Taille fixe|Taille dynamique|
|Peu flexible|Très flexible|
|Pas de snapshots|Snapshots possibles|
|Modification risquée|Modification simplifiée|

---

## ⚠️ Points d’attention

> [!warning]
> 
> - LVM ajoute une couche de complexité
>     
> - Une erreur peut impacter plusieurs volumes
>     
> - Les sauvegardes restent indispensables
>     

---

## 🧠 À retenir

> [!summary]
> 
> - LVM sépare le stockage physique du logique
>     
> - Il permet l’extension à chaud
>     
> - Il est supporté par presque toutes les distributions Linux
>     
> - Standard en environnement serveur et professionnel
>