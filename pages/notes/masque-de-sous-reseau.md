# 🌐 Masque de sous-réseau

Masque de sous réseau

> [!info]  
> Le **masque de sous-réseau** permet de séparer une adresse IP en :  
> 🔹 **Partie réseau**  
> 🔹 **Partie hôte**

---

## 🧠 Principe

- Même format qu’une IPV4 → **32 bits (4 octets)**
    
- Bits à **1** → réseau / sous-réseau
    
- Bits à **0** → hôtes
    

Il est **toujours associé** à une adresse IP.

---

## ⚙️ Opérations importantes

|Élément|Formule|
|---|---|
|Numéro de réseau|IP **AND** Masque|
|Numéro de machine|IP **AND** (NOT Masque)|
|Adresse de diffusion|IP **OR** (NOT Masque)|

  
  


---

## 🔢 Notation CIDR

On écrit souvent le masque sous forme **/x** :

|CIDR|Masque décimal|Nb hôtes|
|---|---|---|
|/24|255.255.255.0|254|
|/25|255.255.255.128|126|
|/26|255.255.255.192|62|
|/27|255.255.255.224|30|
|/28|255.255.255.240|14|

**Formule hôtes :**



---

## 🧩 Création des sous-réseaux


Le sous-adressage consiste à :

1. **Emprunter des bits** de la partie hôte
    
2. Les ajouter à la partie réseau
    
3. Modifier le masque


### 📐 Structure

`ID réseau | ID sous-réseau | ID machine`


---

## 🎯 Pourquoi faire des sous-réseaux ?

- Réduire le domaine de broadcast
    
- Améliorer la sécurité
    
- Mieux organiser le réseau
    
- Optimiser l’utilisation des adresses IP
    

---

### 🧮 Exemple

  


---

## 🧠 Résumé rapide

|Élément|Rôle|
|---|---|
|Masque|Sépare réseau / hôte|
|CIDR|Écriture simplifiée du masque|
|Sous-réseau|Division logique du réseau|
|AND|Trouver l’adresse réseau|
|Broadcast|Dernière adresse du sous-réseau|
