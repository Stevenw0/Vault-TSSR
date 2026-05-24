# 🔥 Les pare-feux (Firewall)

---

## 🛡️ Définition d’un système pare-feu

Un **système pare-feu (firewall)** est un dispositif conçu pour **examiner et éventuellement bloquer les échanges de données entre réseaux**.  
C’est un **élément de sécurité réseau** composé de matériels et de logiciels, pouvant être :

- Un **ordinateur**
    
- Un **routeur**
    
- Un **matériel propriétaire**
    

Un système pare-feu comporte **au minimum deux interfaces réseau** :

1. Une interface pour le **réseau interne** (réseau à protéger)
    
2. Une interface pour le **réseau externe**
    



---

## 🔁 Filtrage du trafic

Le pare-feu filtre :

- le **trafic entrant**
    
- le **trafic sortant**
    

Il **autorise certains paquets** et **rejette d’autres** selon une **politique de sécurité**.



---

## 🎯 Objectifs d’un pare-feu

Un pare-feu permet de :

- **Contrôler**  
    → Gérer les connexions sortantes depuis le réseau local
    
- **Sécuriser**  
    → Protéger le réseau interne contre les intrusions externes
    
- **Surveiller**  
    → Tracer le trafic entre le réseau local et Internet
    
- **Journaliser**  
    → Conserver un historique des événements
    

---

## 🧱 Types de pare-feux

---

### 🔹 Pare-feu matériel

- Matériel de type **boîte noire**
    
- Vendu comme **« prêt à l’emploi »**
    
- Logiciels et applications **préinstallés**
    
- Souvent intégrés à des routeurs de constructeurs comme **Cisco** ou **Nortel**
    



---

### 🔹 Pare-feu logiciel

- Fonctionne généralement sous **Linux**
    
- Offre :
    
    - une **meilleure sécurité réseau**
        
    - un **contrôle plus fin**
        



---

## ⚙️ Principe de fonctionnement d’un firewall

Un pare-feu repose sur un **ensemble de règles prédéfinies** permettant de :

- **Autoriser** une connexion (_allow_)
    
- **Bloquer** une connexion (_deny_)
    
- **Rejeter** une connexion sans avertir l’émetteur (_drop_)
    

Le pare-feu :

- applique des règles selon :
    
    - les **applications**
        
    - les **adresses IP**
        
    - les **ports**
        
- vérifie chaque connexion
    
- applique la règle correspondante
    



---

## 📦 Principe de filtrage de paquets

Le filtrage repose sur l’analyse des **en-têtes de protocoles**, principalement :

- IP
    
- TCP
    
- UDP
    

### 🔍 Critères d’une règle de filtrage

1. Adresse IP source
    
2. Adresse IP destination
    
3. Port source
    
4. Port destination
    
5. Protocole encapsulé (ICMP, UDP, TCP…)
    
6. Flag ACK (TCP)
    
7. Type de message ICMP
    

### 🔐 Actions possibles

- Laisser passer le paquet
    
- Détruire / Rejeter le paquet
    



---

## 🔎 Pare-feu — Filtrage de paquets (Couche 3 / 4)

- Fonctionne à la **couche réseau (OSI couche 3)**
    
- Analyse :
    
    - adresses IP source/destination
        
    - type de protocole (TCP, UDP, ICMP)
        
    - numéro de port (service / application)
        
- Chaque paquet est analysé **indépendamment**
    
- Comparaison avec une **liste de règles**
    

### ❌ Limites

- Pas d’authentification des utilisateurs
    
- Pas de filtrage applicatif
    
- Vulnérable à certaines attaques :
    
    - IP Spoofing
        
    - DoS
        



---

## 🌐 Pare-feu — Filtrage applicatif (Proxy / Serveur mandataire)

- Fonctionne à la **couche application (OSI couche 7)**
    
- Le pare-feu :
    
    - gère les connexions **au nom des machines internes**
        
    - établit lui-même la connexion vers Internet
        
- Les machines clientes doivent être configurées pour passer par le proxy
    
- Vu de l’extérieur, **seul le pare-feu est visible**
    
- Les attaques ciblent le **proxy**, pas les postes internes
    
- Journalisation très détaillée
    

### ❌ Limites

- Analyse fine de chaque paquet
    
- **Ralentissement des communications**
    



---

## 🧩 Architectures de pare-feu

---

### 🔹 Architecture simple

_(Couche réseau & transport)_

- Pare-feu placé entre **LAN et WAN**
    
- Filtrage basé sur :
    
    - adresses IP (couche 3)
        
    - ports TCP / UDP (couche 4)
        
- Utilisée lorsqu’il **n’y a pas de serveur interne exposé**
    

#### ❌ Inconvénient

- Pas de filtrage applicatif (HTTP, FTP…)
    



---

### 🔹 Architecture proxy

_(Couche application)_

- Ajout d’un **filtrage applicatif**
    
- Filtrage basé sur :
    
    - protocoles (HTTP, FTP…)
        
    - et non uniquement sur les ports (80, 443)
        

#### ✅ Avantages

- Contrôle par utilisateur
    
- Historique détaillé
    
- Protection des postes internes
    
- Trafic HTTP / FTP redirigé vers le proxy
    

#### ❌ Inconvénient

- Coût élevé
    
- Besoin de ressources importantes lorsque :
    
    - le nombre d’utilisateurs augmente
        
    - la bande passante augmente
        



---

## 🧱 Zone **DMZ** (DeMilitarized Zone)

La **DMZ** est une architecture permettant de **sécuriser le réseau interne tout en exposant certains services à Internet**.

### 🔐 Définition

- **DMZ (Zone Dé-Militarisée)** :
    
    - Sous-réseau séparé du réseau interne
        
    - Isolé à la fois du réseau local et d’Internet par un pare-feu
        
    - Contient les machines accessibles depuis Internet
        



---

### 🖥️ Contenu typique d’une DMZ

- Serveurs **Web**
    
- Serveurs **Mail**
    
- Serveurs **FTP publics**
    

---

### ⚠️ Propriétés de la DMZ

- Contient des machines du réseau interne **accessibles depuis l’extérieur**
    
- Niveau de sécurité **intermédiaire**
    
- ❌ Ne doit **PAS contenir de données critiques**
    
- Les connexions **depuis la DMZ vers le réseau interne sont interdites**
    
- Les connexions **depuis la DMZ vers Internet sont autorisées**
    

---

### 🔒 Politique de sécurité classique d’une DMZ

- ❌ Trafic **Internet → DMZ** interdit
    
- ❌ Trafic **Internet → Réseau interne** interdit
    
- ✅ Trafic **Réseau interne → DMZ** autorisé
    
- ✅ Trafic **Réseau interne → Internet** autorisé
    
- ❌ Trafic **DMZ → Réseau interne** interdit
    
- ✅ Trafic **DMZ → Internet** autorisé
    

---

## 🧠 À retenir

- Firewall = **barrière de sécurité**
    
- Filtrage :
    
    - par paquets (couches 3–4)
        
    - applicatif (couche 7)
        
- Proxy = contrôle + journalisation
    
- DMZ = exposition contrôlée des serveurs
    
- Plus le niveau de sécurité est élevé, plus le coût est important