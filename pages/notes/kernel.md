# 🐧 Le Kernel Linux

## 📌 Qu’est-ce que le kernel Linux ?

Le **kernel Linux** (ou noyau Linux) est le **cœur du système d’exploitation**.  
Il sert d’interface entre le **matériel** (hardware) et les **applications utilisateur**.

> [!info]  
> Sans le kernel, un système Linux ne peut ni démarrer ni exécuter de programmes.

---

## 🧠 Rôle du kernel Linux

Le kernel a pour mission principale de **gérer les ressources du système** :

- 🧮 Le processeur (CPU)
    
- 🧠 La mémoire (physique et virtuelle)
    
- 💾 Le stockage (disques)
    
- 🔌 Les périphériques (clavier, écran, réseau…)
    
- 🔄 L’exécution des processus
    

> [!summary]  
> Le kernel garantit le **bon fonctionnement**, la **sécurité** et la **stabilité** du système.

---

## 🧱 Architecture interne du kernel Linux

 

Cette image montre la **structure interne du noyau Linux** et ses composants principaux :

### 🔧 Gestion de la mémoire

- Mémoire physique
    
- Mémoire virtuelle
    
- Pagination
    

### ⚙️ Gestion des processus

- Ordonnanceur (scheduler)
    
- Gestion des threads
    
- IPC (communication entre processus)
    

### 📁 Systèmes de fichiers

- Accès aux fichiers
    
- Gestion des disques
    
- Systèmes de fichiers virtuels
    

### 🔌 Pilotes matériels

- Carte réseau
    
- Affichage
    
- Entrées / sorties
    
- Horloge système
    

> [!note]  
> Les applications **n’accèdent jamais directement au matériel** : le kernel agit comme un intermédiaire obligatoire.

---

## 🔄 Appels système (System Calls)

Les programmes communiquent avec le kernel via des **appels système**.

> [!tip]  
> Exemples d’actions nécessitant un appel système :
> 
> - Lire ou écrire un fichier
>     
> - Créer un processus
>     
> - Accéder au réseau
>     

---

## 🐚 Le kernel dans un système UNIX / Linux

 

Cette image illustre la **structure globale d’un système Linux**.

### 🧩 Les trois grandes couches

- **Applications / processus utilisateurs**
    
- **Shell** (ex : Bash)
    
- **Kernel**
    
- **Matériel**
    

### 🔹 Le shell

Le **shell** est l’interface entre l’utilisateur et le kernel :

- interprète les commandes
    
- lance les programmes
    
- transmet les requêtes au kernel
    

> [!info]  
> Quand tu tapes une commande dans le terminal :  
> 👉 le shell l’interprète  
> 👉 le kernel l’exécute

---

## ⚙️ Pourquoi le kernel Linux est essentiel ?

- Il est **open-source**
    
- Il est **modulaire**
    
- Il est utilisé dans :
    
    - les serveurs
        
    - Android
        
    - les systèmes embarqués
        
    - les supercalculateurs
        

> [!success]  
> Linux n’est pas qu’un OS :  
> c’est un **kernel + des outils + des applications**

---

## 🧠 À retenir

> [!summary]
> 
> - Le kernel est le **cœur du système Linux**
>     
> - Il gère le matériel et les ressources
>     
> - Les applications passent toujours par lui
>     
> - Le shell est l’interface utilisateur
>