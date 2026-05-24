# 💻 UEFI et partitions système

## 📌 Qu’est-ce que l’UEFI ?

**UEFI (Unified Extensible Firmware Interface)** est le firmware moderne qui remplace le **BIOS traditionnel**.  
Il est responsable du **démarrage de l’ordinateur** et de l’initialisation du matériel avant le chargement du système d’exploitation.

> [!info]  
> L’UEFI est aujourd’hui le standard sur la majorité des machines modernes.

---

## 🔄 UEFI vs BIOS (rappel rapide)

|BIOS|UEFI|
|---|---|
|Ancien standard|Standard moderne|
|Interface simple|Interface graphique|
|Disques limités à 2 To|Supporte les grands disques|
|MBR|GPT|
|Peu sécurisé|Secure Boot|

---

## 🧠 Rôle de l’UEFI

L’UEFI permet :

- l’initialisation du matériel
    
- la détection des périphériques de démarrage
    
- le chargement du **bootloader**
    
- la gestion du **Secure Boot**
    
- la compatibilité avec les disques GPT
    

> [!summary]  
> Sans UEFI, le système d’exploitation ne peut pas démarrer.

---

## 💽 UEFI et table de partition GPT

Les systèmes UEFI utilisent la **table de partition GPT (GUID Partition Table)**.

### Avantages de GPT

- Support des disques > 2 To
    
- Jusqu’à 128 partitions
    
- Meilleure fiabilité (copie de secours de la table)
    
- Identifiants uniques (GUID)
    

---

## 🧩 Les partitions UEFI principales

### 📁 Partition EFI (ESP – EFI System Partition)

- Contient les **fichiers de démarrage**
    
- Formatée en **FAT32**
    
- Obligatoire pour le démarrage UEFI
    
- Taille courante : 100 à 500 Mo
    

> [!warning]  
> La suppression de cette partition empêche le système de démarrer.

---

### 🧠 Partition MSR (Microsoft Reserved Partition)

- Spécifique à **Windows**
    
- Utilisée en interne par le système
    
- Invisible pour l’utilisateur
    
- Taille courante : 16 à 128 Mo
    

---

### 💾 Partition système (OS)

- Contient le **système d’exploitation**
    
- Exemple :
    
    - Windows (NTFS)
        
    - Linux (ext4, xfs…)
        

---

### 🔄 Partition de récupération

- Contient les outils de **réparation système**
    
- Permet de restaurer ou réparer l’OS en cas de problème
    

---

## 🔐 Secure Boot

Le **Secure Boot** est une fonctionnalité UEFI qui :

- empêche le chargement de bootloaders non signés
    
- protège contre les **malwares au démarrage**
    

> [!info]  
> Secure Boot peut être désactivé pour installer certains systèmes Linux.

---

## 🐧 UEFI et Linux

Linux est **totalement compatible UEFI** :

- GRUB est installé dans la partition EFI
    
- Possibilité de **dual boot** avec Windows
    
- Peut coexister avec Secure Boot (selon la distribution)
    

---

## 🧠 Exemple de schéma de partitions UEFI

> [!note]  
> Disque GPT typique :
> 
> - EFI System Partition (FAT32)
>     
> - MSR (Windows uniquement)
>     
> - Partition système (Windows ou Linux)
>     
> - Partition de récupération
>     

---

## 🧠 À retenir

> [!summary]
> 
> - UEFI remplace le BIOS
>     
> - Il fonctionne avec GPT
>     
> - La partition EFI est indispensable
>     
> - Secure Boot renforce la sécurité
>     
> - UEFI est compatible Windows et Linux
>