# 🌍Adressage IPv6

## 1️⃣ Définition

**IPv6 (Internet Protocol version 6)** est la nouvelle version du protocole IP conçue pour remplacer IPv4.

- Les adresses IPv6 identifient **de manière unique une interface réseau**
    
- Taille : **128 bits**
    
- Écriture : **hexadécimale**
    
- Format : **8 blocs de 16 bits** (4 caractères hexadécimaux) séparés par `:`
    

### Exemple d’adresse IPv6 Global Unicast



---

## 2️⃣ Préfixe et masque IPv6

Le masque permet d’identifier la partie **réseau** de l’adresse.

- Le préfixe correspond généralement aux **64 premiers bits**
    
- Il est commun à toutes les adresses d’un même réseau
    

  


---

## 3️⃣ Structure d’une adresse Unicast

Organisation hiérarchique :

- Topologie publique
    
- Topologie de site (privée)
    
- Identifiant d’interface
    



---

## 4️⃣ Différences entre IPv4 et IPv6 (paquets)



- En-tête IPv6 de taille **fixe**
    
- Champ IHL supprimé
    
- Pas de somme de contrôle d’en-tête
    
- **TTL** renommé **Hop Limit**
    
- Traitement simplifié pour les routeurs
    

---

## 5️⃣ Types d’adresses IPv6

Comme IPv4, on distingue partie réseau (préfixe) et partie hôte.

### 🔹 Link Local



### 🔹 Global Unicast



### 🔹 Unique Local



### 🔹 Multicast



### 🔹 Adresse de bouclage

Adresse : `::1/128`  
Équivalent IPv4 : **127.0.0.1**

---

## 6️⃣ Règles de compression IPv6

Deux règles principales :

1. Supprimer les **zéros initiaux** de chaque bloc
    
2. Les blocs consécutifs de `0000` peuvent être remplacés par `::` (une seule fois)
    



---

## 7️⃣ Exemples de simplification

4AD6:2AC0:0000:0000:0000:0000:78FF:0000

→ 4AD6:2AC0::78FF:0

4AD6:002A:0003:0000:0000:0000:78FF:0000

→ 4AD6:2A:3::78FF:0

---

## 🧠 À retenir

- IPv6 = 128 bits
    
- Écriture hexadécimale
    
- Préfixe généralement /64
    
- Pas de broadcast, utilisation du multicast
    
- Compression possible avec `::`