# 🌍 Adressage IPv4

## 📌 Définition

**IPv4 (Internet Protocol version 4)** est la version 4 du protocole IP.

- Une **adresse IP** est une **adresse logique**
    
- Elle permet d’identifier **de manière unique une interface réseau** (carte réseau) au sein d’un réseau
    

> [!info]  
> Une machine peut posséder **plusieurs adresses IP** si elle dispose de plusieurs interfaces réseau.

---

## 🧱 Format d’une adresse IPv4

- Taille : **4 octets = 32 bits**
    
- Représentation :
    
    - **4 nombres décimaux**
        
    - Chaque nombre est compris entre **0 et 255**
        
    - Séparés par des **points**
        

**Exemple :**  
192.168.1.1



---

## 🧩 Structure d’une adresse IPv4

Une adresse IPv4 est découpée en **deux parties** :

|Partie|Description|
|---|---|
|**Net-ID**|Identifie le réseau|
|**Host-ID**|Identifie la machine dans le réseau|



> [!tip]  
> Le Masque de sous réseau permet de déterminer la limite entre le Net-ID et le Host-ID.

---

## 🗂️ Adressage IPv4 : Classes d’adresses

Les adresses IPv4 sont classées selon la valeur du **premier octet**.



### 🔎 Vue d’ensemble

|Classe|Intervalle|
|---|---|
|Classe A|1.0.0.0 – 127.255.255.255|
|Classe B|128.0.0.0 – 191.255.255.255|
|Classe C|192.0.0.0 – 223.255.255.255|

> [!note]  
> Le modèle par classes est **historique**. Aujourd’hui, on utilise surtout le **CIDR** et le **VLSM**.

---

## ⭐ Adresses IPv4 spéciales

Certaines adresses IPv4 ont un **rôle particulier** et ne peuvent pas être attribuées à une machine classique.



### 📍 Exemples importants

- **Adresse réseau** : tous les bits du Host-ID à 0
    
- **Adresse de diffusion (broadcast)** : tous les bits du Host-ID à 1
    
- **127.0.0.1** : boucle locale (_localhost_)
    

> [!warning]  
> Les adresses réseau et broadcast **ne peuvent jamais être attribuées à un hôte**.

---

## 🌐 Adresses IPv4 publiques & privées



### 🔐 Adresses privées (locales)

Utilisées dans les réseaux internes, **non routables sur Internet** :

|Classe|Plage privée|
|---|---|
|Classe A|10.0.0.0 – 10.255.255.255|
|Classe B|172.16.0.0 – 172.31.255.255|
|Classe C|192.168.0.0 – 192.168.255.255|

> [!info]  
> Les adresses privées accèdent à Internet grâce au **NAT (Network Address Translation)**.

### 🌍 Adresses publiques

- Uniques à l’échelle mondiale
    
- Routables sur Internet
    
- Attribuées par des organismes officiels
    

---

## 🧠 À retenir

> [!summary]
> 
> - IPv4 = **32 bits**
>     
> - Une adresse IP identifie une **interface réseau**
>     
> - Il existe des **adresses spéciales** non attribuables
>     
> - Les adresses privées ne sont **pas visibles sur Internet**
>
