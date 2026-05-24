# 🌐 NETINSTALL

## 📌 Qu’est-ce que le NETINSTALL ?

Le **NETINSTALL** est une **méthode d’installation d’un système d’exploitation via le réseau**, sans utiliser de clé USB ou de DVD.  
L’ordinateur démarre grâce au réseau et télécharge ensuite les fichiers nécessaires à l’installation.

> [!info]  
> NETINSTALL est très utilisé en **administration système**, **entreprise** et **laboratoires informatiques**.

---

## 🧠 Principe de fonctionnement

Le NETINSTALL repose sur le **démarrage réseau (PXE)** :

1. Le PC démarre sur le réseau
    
2. Il contacte un **serveur PXE**
    
3. Le serveur fournit un **bootloader**
    
4. Le système est installé via Internet ou un serveur local
    

> [!summary]  
> Le système n’est pas stocké localement au départ : tout passe par le réseau.

---

## 🔧 Composants nécessaires

Pour une installation NETINSTALL, on utilise généralement :

- 🖥️ Un **serveur PXE**
    
- 🌐 Un **serveur DHCP** (attribue une IP)
    
- 📁 Un **serveur TFTP / HTTP / FTP**
    
- 💽 Une image d’installation minimale (netinstall)
    

> [!note]  
> Ces services peuvent être sur **une seule machine** ou répartis sur plusieurs serveurs.

---

## 💽 NETINSTALL vs installation classique

|Installation classique|NETINSTALL|
|---|---|
|Clé USB / DVD|Réseau|
|Image complète|Image minimale|
|Installation locale|Téléchargement à la demande|
|Peu flexible|Très flexible|

---

## 🐧 NETINSTALL sous Linux

Sous Linux, le NETINSTALL permet :

- une installation **légère**
    
- un choix précis des paquets
    
- une installation automatisée
    
- un déploiement en masse
    

> [!tip]  
> Très courant avec Debian, Ubuntu Server, CentOS, Rocky Linux, etc.

---

## 🏢 Utilisation en entreprise

Le NETINSTALL est idéal pour :

- déployer plusieurs machines rapidement
    
- installer des systèmes identiques
    
- automatiser les installations (préconfiguration)
    
- réduire les erreurs humaines
    

> [!success]  
> Une seule configuration peut servir à installer **des dizaines de postes**.

---

## ⚠️ Points d’attention

> [!warning]
> 
> - Nécessite une **infrastructure réseau fonctionnelle**
>     
> - Dépend fortement de la **connexion réseau**
>     
> - Configuration initiale plus complexe
>     

---

## 🧠 À retenir

> [!summary]
> 
> - NETINSTALL = installation via le réseau
>     
> - Basé sur PXE
>     
> - Très utilisé en entreprise
>     
> - Léger, flexible et automatisable
>