# 🌐 NAT – Network Address Translation

## 📌 Qu’est-ce que le NAT ?

Le **NAT (Network Address Translation)** est un mécanisme réseau qui permet de **traduire des adresses IP privées en adresses IP publiques**, et inversement.  
Il est principalement utilisé pour permettre à plusieurs machines d’un réseau local d’accéder à Internet **avec une seule adresse IP publique**.

> [!info]  
> Le NAT est généralement mis en œuvre sur un **routeur** ou un **pare-feu**.

---

## 🧠 Pourquoi utilise-t-on le NAT ?

Le NAT permet :

- d’économiser les **adresses IPv4 publiques**
    
- de connecter un réseau privé à Internet
    
- d’améliorer la **sécurité** en masquant les adresses internes
    
- de simplifier la gestion réseau
    

> [!summary]  
> Les machines internes ne sont pas directement visibles depuis Internet.

---

## 🏠 Adresses privées et publiques

### 🔐 Adresses privées

Utilisées dans les réseaux internes, elles ne sont pas routables sur Internet :

- 10.0.0.0 – 10.255.255.255
    
- 172.16.0.0 – 172.31.255.255
    
- 192.168.0.0 – 192.168.255.255
    

### 🌍 Adresse publique

- Unique sur Internet
    
- Fournie par le fournisseur d’accès (FAI)
    
- Utilisée par le routeur pour communiquer avec l’extérieur
    

---

## 🔄 Fonctionnement du NAT

Lorsqu’un poste du réseau local envoie une requête vers Internet :

1. Il utilise une **adresse IP privée**
    
2. Le routeur remplace cette adresse par son **adresse IP publique**
    
3. Il garde une table de correspondance
    
4. Les réponses sont renvoyées à la bonne machine interne
    

> [!tip]  
> Cette table NAT permet de savoir **quelle machine interne a initié la connexion**.

---

## 🧩 Les principaux types de NAT

### 🔁 NAT statique

- Association fixe entre une IP privée et une IP publique
    
- Utilisé pour exposer un serveur interne
    

### 🔄 NAT dynamique

- Traduction d’adresses via un pool d’IP publiques
    
- Moins courant aujourd’hui
    

### 📤 PAT (Port Address Translation)

- Aussi appelé **NAT overload**
    
- Plusieurs machines partagent **une seule IP publique**
    
- Différenciation grâce aux **numéros de ports**
    

> [!success]  
> Le PAT est le type de NAT le plus utilisé dans les réseaux domestiques.

---

## 🌍 NAT et redirection de ports

La **redirection de ports (port forwarding)** permet :

- d’autoriser l’accès externe à un service interne
    
- de rediriger un port public vers une machine privée
    

> [!warning]  
> Une redirection de port mal configurée peut exposer un service à Internet.

---

## 🔐 NAT et sécurité

Le NAT apporte une **protection indirecte** :

- les machines internes ne sont pas directement accessibles
    
- seules les connexions initiées depuis l’intérieur sont autorisées
    

> [!note]  
> Le NAT ne remplace pas un pare-feu, mais il contribue à la sécurité globale.

---

## 🌐 NAT et IPv6

Avec **IPv6**, le NAT n’est plus nécessaire :

- chaque machine peut avoir une IP publique unique
    
- la sécurité repose sur des pare-feux
    

> [!info]  
> Le NAT reste néanmoins très utilisé à cause de la domination d’IPv4.

---

## 🧠 À retenir

> [!summary]
> 
> - Le NAT traduit IP privée ↔ IP publique
>     
> - Il permet à plusieurs machines d’accéder à Internet
>     
> - Le PAT est le plus courant
>     
> - Le NAT masque le réseau interne
>     
> - Il reste central en IPv4
>