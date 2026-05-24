# Chapitre 6 — Comment les bits voyagent physiquement

La trame Ethernet est construite. Le switch sait vers quel port l'envoyer. Mais concrètement : comment des **bits** (0 et 1) se transforment-ils en signal qui traverse un câble ou l'air ?

C'est le rôle de la **couche Physique** (couche 1) — la plus basse, la plus concrète.

---

## 6.1 Du bit au signal

Un bit = 0 ou 1. Sur un câble électrique, on le représente par une **variation de tension** (haut / bas). Sur une fibre optique, par une **impulsion lumineuse** (allumé / éteint). Dans les airs, par une **modulation d'onde radio**.

La couche physique définit :
- le **support** (câble cuivre, fibre, ondes radio)
- le **connecteur** (RJ45, LC, SFP…)
- le **codage** (comment représenter un 0 ou un 1 sur ce support)
- le **débit** (combien de bits par seconde)

---

## 6.2 Les câbles — transporter les bits par fil

### Câble cuivre — paires torsadées (RJ45)

C'est le câble Ethernet classique — catégories **Cat5e**, **Cat6**, **Cat6A**.

Le torsadage des paires réduit les interférences électromagnétiques (EMI). Plus la catégorie est élevée, plus le débit et la portée supportés sont importants.

|Catégorie|Débit max|Portée|
|---|---|---|
|Cat5e|1 Gbit/s|100 m|
|Cat6|10 Gbit/s|55 m|
|Cat6A|10 Gbit/s|100 m|

**Connecteur** : RJ45 (8 broches).

:::info
**STP vs UTP** : les câbles blindés (STP) résistent mieux aux interférences électromagnétiques — utile près de moteurs, transformateurs ou dans les datacenters.
:::

### Fibre optique — transporter la lumière

La fibre utilise des **impulsions lumineuses** plutôt que de l'électricité. Avantages : débit très élevé, longue portée, insensible aux interférences.

|Type|Usage|Portée|
|---|---|---|
|**Monomode (SMF)**|Longue distance (opérateurs, inter-sites)|Jusqu'à 100 km|
|**Multimode (MMF)**|Courte distance (datacenter, LAN)|Jusqu'à 500 m|

**Connecteurs courants** : LC, SC, ST.

**Transceivers SFP** : petits modules enfichables dans les switches qui convertissent un signal électrique en signal optique (et vice versa).

---

## 6.3 Wi-Fi — transporter les bits dans les airs

<iframe width="560" height="315" src="https://www.youtube.com/embed/c0Xj09s5hYA?si=9SB7DfBIeXyB4iml" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Le Wi-Fi utilise des **ondes radio** pour transmettre les bits. Les normes sont définies par l'IEEE sous le standard **802.11**.

### Évolution des normes Wi-Fi

|Norme|Nom commercial|Fréquence|Débit théorique|
|---|---|---|---|
|802.11n|Wi-Fi 4|2,4 / 5 GHz|300 Mbit/s|
|802.11ac|Wi-Fi 5|5 GHz|3,5 Gbit/s|
|802.11ax|Wi-Fi 6|2,4 / 5 / 6 GHz|9,6 Gbit/s|

### 2,4 GHz vs 5 GHz

|Fréquence|Portée|Débit|Interférences|
|---|---|---|---|
|**2,4 GHz**|Plus longue|Plus faible|Plus nombreuses (micro-ondes, Bluetooth…)|
|**5 GHz**|Plus courte|Plus élevé|Moins nombreuses|

### Canaux Wi-Fi

Le spectre radio est divisé en **canaux**. Sur 2,4 GHz, seuls les canaux 1, 6 et 11 ne se chevauchent pas — important pour éviter les interférences dans un immeuble avec de nombreux réseaux.

### Sécurité Wi-Fi

|Standard|Niveau de sécurité|
|---|---|
|WEP|Obsolète — ne pas utiliser|
|WPA|Déprécié|
|WPA2-Personal|Standard actuel (clé partagée PSK)|
|WPA2-Enterprise|Entreprise — authentification individuelle via RADIUS|
|WPA3|Standard récent — plus robuste|

---

## 6.4 Les équipements de couche 1

### Répéteur

Reçoit un signal affaibli et le **régénère** pour l'envoyer plus loin. Ne comprend rien au contenu — il amplifie juste le signal électrique ou lumineux.

Usage : étendre la portée d'un câble au-delà de 100 m.

### Hub (concentrateur)

Ancêtre du switch — reçoit un signal et le **diffuse sur tous ses ports** sans discrimination.

Conséquences :
- **Collisions** : si deux machines émettent en même temps, les signaux se brouillent.
- **CSMA/CD** : mécanisme de gestion des collisions (écoute avant d'émettre, détecte la collision, attend un délai aléatoire avant de réémettre).

:::info
Les hubs sont **obsolètes**. Le switch (couche 2) les remplace partout — il envoie les trames uniquement au bon port, sans collision, en full-duplex.
:::

---

## 6.5 Les problèmes physiques courants

| Problème | Cause | Symptôme |
|---|---|---|
|**Atténuation**|Signal qui s'affaiblit avec la distance|Débit faible, coupures|
|**Interférences (EMI)**|Appareils électriques proches|Perte de paquets|
|**Mauvais câble**|Catégorie trop faible ou endommagé|Vitesse bridée|
|**Canal saturé (Wi-Fi)**|Trop de réseaux sur le même canal|Wi-Fi lent malgré bonne puissance|
|**Boucle de courant**|Câble de terre défectueux|Bruit sur la ligne|

### Outils de diagnostic physique

- **Câbloscope / testeur de câble** : vérifie que toutes les paires sont bien connectées et dans le bon ordre.
- **Analyseur de spectre Wi-Fi** (ex. `inSSIDer`, `WiFi Analyzer`) : visualise les canaux utilisés et les interférences.
- **OTDR** (Optical Time Domain Reflectometer) : localise les coupures et défauts sur une fibre optique.

---

:::success
**Ce que tu retiens de ce chapitre**
- La couche physique transporte les bits sous forme de **signaux électriques** (cuivre), **lumineux** (fibre) ou **radio** (Wi-Fi).
- Le **câble cuivre RJ45** est limité à 100 m ; la **fibre optique** va jusqu'à plusieurs dizaines de kilomètres.
- Les normes **802.11** (Wi-Fi) évoluent en débit et en fréquence ; le choix du canal évite les interférences.
- Le **hub** est obsolète — le **switch** l'a remplacé grâce à son intelligence de couche 2.
- Les problèmes physiques (atténuation, interférences, mauvais câble) sont souvent la cause de pannes réseau difficiles à diagnostiquer depuis le logiciel.

**La suite** : maintenant que tu connais toutes les couches, il est temps de faire le voyage complet → Chapitre 7 : Synthèse.
:::
