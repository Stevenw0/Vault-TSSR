# Chapitre 5 — Comment les données circulent sur le réseau local

Le paquet IP sait où il va. Mais pour avancer d'un équipement au suivant — de ton PC à ton switch, de ton switch à ta box — il doit être emballé dans une **trame** adaptée au réseau local.

C'est le rôle de la **couche Liaison** (couche 2) et du protocole **Ethernet**.

---

## 5.1 La trame Ethernet — l'enveloppe du réseau local

<iframe width="560" height="315" src="https://www.youtube.com/embed/NNtotn5AG2U?si=ZOU-1rWNPDrrmUiEq" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Sur un réseau local (LAN), les données ne circulent pas sous forme de paquets IP bruts. Elles sont encapsulées dans des **trames Ethernet**.

```
┌───────────┬──────────────┬──────────────┬───────────┬──────────┬─────────┐
│ Préambule │ MAC          │ MAC          │ EtherType │ Données  │   FCS   │
│ (8 oct.)  │ destination  │ source       │ (2 oct.)  │ (46-1500)│ (4 oct.)│
│           │ (6 oct.)     │ (6 oct.)     │           │          │         │
└───────────┴──────────────┴──────────────┴───────────┴──────────┴─────────┘
```

|Champ|Rôle|
|---|---|
|**MAC destination**|Adresse physique du destinataire|
|**MAC source**|Adresse physique de l'émetteur|
|**EtherType**|Protocole encapsulé : IPv4 (0x0800), ARP (0x0806), IPv6 (0x86DD)|
|**Données**|Le paquet IP (et son contenu TCP/UDP)|
|**FCS / CRC**|Contrôle d'intégrité — détecte les erreurs de transmission|

Taille minimale : **64 octets** — maximale : **1518 octets**.

---

## 5.2 L'adresse MAC — l'identité physique de la carte réseau

<iframe width="560" height="315" src="https://www.youtube.com/embed/7ln7oYIS-n0?si=aaYBsivQlPeIUiti" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Chaque carte réseau possède une **adresse MAC** unique gravée par le constructeur : 6 octets en hexadécimal.

Format : `C8:5A:CF:06:8C:67`

Structure :
- 3 premiers octets = **OUI** (identifiant du constructeur)
- 3 derniers octets = **NIC** (identifiant unique de la carte)

|Type|Cible|Exemple|
|---|---|---|
|**Unicast**|Un seul appareil|`C8:5A:CF:06:8C:67`|
|**Broadcast**|Tous les appareils du LAN|`FF:FF:FF:FF:FF:FF`|
|**Multicast**|Un groupe d'appareils|`01:00:5E:xx:xx:xx`|

```bash
ip a show          # Afficher les adresses MAC (Linux)
Get-NetAdapter     # PowerShell (Windows)
```

---

## 5.3 Le switch — distribuer les trames intelligemment

Un **switch** connecte les appareils d'un LAN. Son rôle : envoyer chaque trame **uniquement au bon destinataire**, pas à tout le monde.


### Comment le switch apprend

1. À la réception d'une trame, il lit l'**adresse MAC source** et associe le port.
2. Il consulte sa **table MAC** pour trouver le port associé à l'adresse destination.
3. Si connu → il envoie la trame uniquement sur ce port.
4. Si inconnu → il la diffuse sur tous les ports (**flooding**) et attend la réponse.

```
PC1 (port 1) ─┐
PC2 (port 2) ─┤─ [Switch] ─── Serveur (port 8)
PC3 (port 3) ─┘
```

Chaque appareil communique en **full-duplex** sans perturber les autres.

|Type de switch|Description|
|---|---|
|**Non managé**|Plug & play, aucune configuration|
|**Managé**|Paramétrable : VLAN, QoS, supervision, LACP|

---

## 5.4 Spanning Tree (STP) — éviter les boucles

Dans un réseau avec plusieurs switches interconnectés, des **boucles** peuvent se créer : une trame tourne indéfiniment et sature le réseau.

**STP** (Spanning Tree Protocol) résout ce problème en **désactivant automatiquement les liens redondants**, tout en les gardant en réserve pour la panne.

1. Les switches élisent un **switch racine** (root bridge).
2. Chaque switch calcule le chemin le plus court vers la racine.
3. Les ports créant des boucles passent en état **Blocking** (inactif mais surveillé).

:::info
**RSTP** (Rapid STP) est la version moderne — convergence en quelques secondes au lieu de 30–50 s avec STP classique. Activé par défaut sur les switches managés récents.
:::

---

## 5.5 VLAN — segmenter le réseau logiquement

<iframe width="560" height="315" src="https://www.youtube.com/embed/Eh9INNkMM4I?si=36Y_npl6rMxiXSWw" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Un **VLAN** (Virtual LAN) divise un réseau physique en plusieurs réseaux virtuels indépendants — sur un seul et même switch.

```
Switch physique → VLAN 10 : Administration
               → VLAN 20 : Comptabilité
               → VLAN 30 : Invités
```

Les machines d'un VLAN ne peuvent pas communiquer avec celles d'un autre VLAN sans passer par un **routeur**.

### Avantages

- **Sécurité** : un VLAN compromis ne touche pas les autres.
- **Organisation** : découper par service, usage ou étage sans recâbler.
- **Performance** : réduit le domaine de broadcast.

### Port access vs port trunk

Un port **access** transporte un seul VLAN — c'est le port connecté aux PC, imprimantes, téléphones.

Un port **trunk** transporte **tous les VLANs simultanément** sur un seul câble — utilisé entre deux switches ou entre un switch et un routeur.

La norme **IEEE 802.1Q** ajoute un **tag** (2 octets) dans la trame pour indiquer à quel VLAN elle appartient.



---

## 5.6 LACP — agréger des liens pour plus de débit

L'**agrégation de liens** (LACP — IEEE 802.3ad) combine plusieurs câbles physiques en un seul lien logique.

Avantages :
- **Plus de débit** : 2 × 1 Gbit/s = 2 Gbit/s logique
- **Redondance** : si un câble tombe, le trafic continue sur l'autre

Usage typique : lien entre deux switches, ou switch → serveur critique.

---

## 5.7 LLDP et CDP — découvrir les voisins

Ces protocoles permettent aux équipements de **s'annoncer automatiquement** à leurs voisins directs — utile pour cartographier un réseau ou déboguer.

|Protocole|Standard|Compatibilité|
|---|---|---|
|**LLDP**|IEEE 802.1AB (ouvert)|Tous constructeurs|
|**CDP**|Cisco propriétaire|Équipements Cisco uniquement|

Informations échangées : nom de l'équipement, port, VLAN, modèle, version logicielle.

---

## 5.8 Wi-Fi côté liaison

> Les aspects physiques du Wi-Fi (fréquences, portée, interférences) sont couverts au chapitre 6. Ici : comment les trames circulent sans fil.

Un **WLAN** utilise les mêmes adresses MAC qu'Ethernet, mais sur des ondes radio.

|Mode|Description|
|---|---|
|**Infrastructure**|Les clients se connectent à un **point d'accès (AP)** — mode standard|
|**Ad hoc**|Communication directe entre appareils sans AP|

Le **point d'accès** joue un rôle similaire au switch : il centralise les connexions sans fil.

:::info
Wi-Fi est plus sensible aux interférences et aux obstacles que l'Ethernet câblé. Le débit réel dépend de la norme 802.11, de l'environnement et du nombre de clients connectés.
:::

---

:::success
**Ce que tu retiens de ce chapitre**
- La **trame Ethernet** encapsule le paquet IP et l'adresse grâce aux **adresses MAC**.
- Le **switch** apprend quels équipements sont sur quels ports et envoie les trames au bon destinataire.
- **STP/RSTP** élimine les boucles réseau tout en maintenant une redondance utilisable.
- Les **VLANs** segmentent logiquement le réseau ; le **trunk 802.1Q** transporte plusieurs VLANs sur un seul lien.
- **LACP** agrège des liens physiques pour plus de débit et de résilience.

**La question suivante** : la trame est prête — comment les bits voyagent-ils physiquement sur un câble ou dans les airs ? → Chapitre 6 : la couche Physique.
:::
