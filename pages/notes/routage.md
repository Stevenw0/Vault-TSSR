# 🌐 Le routage

14 Routage

## 📌 Définition

La fonction de routage est de **trouver la meilleure route** pour aller d’une source vers une destination.

**La meilleure route dépend d’un coût :**

- Distance
    
- Nombre de routeurs traversés
    
- Temps de réponse / débit
    
- Fiabilité / charge
    
- Coût financier
    

---

## ⚙️ Fonction de routage



---

## 🛠️ Le routage statique

Le routage statique est une méthode où les routes sont **configurées manuellement** par l’administrateur.

- Routes **prédéfinies et fixes**
    
- Pas d’échange automatique d’informations
    
- L’administrateur ajoute des entrées dans la table de routage
    

### 📌 Principe

Ajouter manuellement des routes vers les réseaux distants.

### 💻 Commande

`ip route @réseau-destination Masque-sous-réseau Interface-sortie`

|Élément|Signification|
|---|---|
|Réseau destination|Adresse du réseau à atteindre|
|Masque|Masque du réseau|
|Interface sortie|Prochain saut|

### Exemple



---

## 🔄 Le routage dynamique

Le routage dynamique permet la **mise à jour automatique** de la table de routage via un protocole.

- Échange de messages entre routeurs
    
- Routes mises à jour automatiquement
    
- Interfaces toujours configurées manuellement (IP + masque)
    

### Un bon protocole doit être :

- Efficace et optimal
    
- Simple et flexible
    
- Convergence rapide
    

**Exemples :** RIP, OSPF, EIGRP, BGP, IS-IS

---

## 📡 Protocoles de routage dynamique

|Protocole|Caractéristiques|
|---|---|
|**RIP**|Limite à 15 sauts|
|**EIGRP**|Pour architectures complexes, propriétaire Cisco|
|**OSPF**|Standard, réseaux hétérogènes|
|**BGP**|Routage d’Internet (FAI)|

---

## 🧮 Configuration du protocole RIP

RIP est un protocole **à vecteur de distance**.

**Caractéristiques :**

- Métrique = nombre de sauts
    
- Maximum = 15
    
- Mises à jour toutes les 30 secondes
    

### Commandes

`router rip network {préfixe}`

|Commande|Rôle|
|---|---|
|router rip|Active RIP|
|network|Réseau inclus dans le routage|



### Exemple



---

# 🔀 Routage inter-VLAN

Les **VLANs isolent le trafic** de différents groupes de périphériques sur un même réseau physique.  
Cependant, pour permettre aux périphériques de différents VLANs de communiquer entre eux, un **mécanisme de routage** est nécessaire : le **routage inter-VLAN**.

  
  


---

## 🧩 Notion de sous-interface

- Une **sous-interface** est une interface logique à l’intérieur d’une interface physique (ex : FastEthernet d’un routeur).
    
- Plusieurs sous-interfaces peuvent exister sur une seule interface physique.
    
- Chaque sous-interface correspond à **un VLAN**.
    
- Chaque sous-interface possède **sa propre adresse IP** (passerelle du VLAN).
    
- Pour le routage inter-VLAN, on crée **une sous-interface par VLAN**.
    

  


---

## ⚙️ Configuration du routage inter-VLAN

  


---

## 🧠 Résumé rapide

|Concept|Rôle|
|---|---|
|VLAN|Sépare les réseaux logiquement|
|Routage inter-VLAN|Permet la communication entre VLANs|
|Sous-interface|Une interface logique par VLAN|
|Routeur|Assure le routage entre VLANs|