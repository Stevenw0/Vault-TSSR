# 💾 LUN — Logical Unit Number

## 📌 Définition

Un **LUN (Logical Unit Number)** signifie *numéro d’unité logique*.

À l’origine, il s’agit d’un identifiant utilisé dans le protocole **SCSI** pour désigner une unité logique au sein d’un équipement de stockage.

Aujourd’hui, dans le langage courant de l’administration système, le terme **LUN** désigne :

- Soit le numéro d’identification logique
- Soit l’espace de stockage lui-même (par extension)

---

# 🖥️ LUN et SCSI

Dans le protocole **SCSI** :

- Chaque équipement est appelé une **cible (Target)**
- Chaque cible peut contenir plusieurs **unités logiques**
- Chaque unité logique possède un **LUN**

Les commandes SCSI (CDB — Command Descriptor Block) incluent un champ permettant de préciser le LUN ciblé.

### ⚠️ Particularité importante

Le protocole SCSI exige que :

- Le **LUN 0 existe obligatoirement** sur chaque cible
- Même s’il ne correspond pas forcément à un espace de stockage réel

La commande :

```
REPORT LUNS
```

Permet de lister les LUN disponibles sur une cible.

---

# 🌐 LUN dans un environnement SAN

Dans un **SAN (Storage Area Network)**, le LUN prend une importance majeure.

Un LUN correspond à :

> 🎯 Un espace de stockage présenté à un ou plusieurs serveurs.

Chaque serveur connecté au SAN possède :

- Une carte **HBA (Host Bus Adapter)**
- Un identifiant unique appelé **WWN (World Wide Name)**

L’administrateur SAN peut alors :

- Présenter un LUN à certains serveurs
- Le masquer à d’autres

---

# 🔐 LUN Masking

Le **LUN Masking** (ou présentation de LUN) consiste à :

- Contrôler quels serveurs peuvent voir quels LUN
- Restreindre l’accès aux volumes de stockage

Cela permet :

- D’isoler les environnements
- D’éviter les conflits d’accès
- De renforcer la sécurité

Sans LUN Masking, un serveur pourrait voir des volumes qui ne lui sont pas destinés.

---

# 🧠 Évolution du concept

Historiquement :

- Plusieurs unités physiques pouvaient partager la même électronique
- Les LUN permettaient de différencier ces unités

Aujourd’hui :

- La plupart des équipements SCSI n’utilisent que le **LUN 0**
- Mais le terme **LUN** est resté et s’est étendu

Dans les environnements modernes :

- Un LUN est souvent assimilé à un **volume de stockage**
- Il peut être présenté via Fibre Channel, iSCSI ou FCoE

---

# 🏗️ Exemple concret

Dans une entreprise :

- Un serveur SQL reçoit un LUN de 500 Go
- Un serveur de fichiers reçoit un LUN de 2 To
- Un serveur de sauvegarde reçoit un LUN dédié

Chaque LUN est :

- Logiquement isolé
- Présenté via le SAN
- Visible uniquement pour le serveur autorisé

---

# 📊 Résumé

| Élément | Description |
|----------|-------------|
| LUN | Identifiant d’unité logique |
| Origine | Protocole SCSI |
| Usage moderne | Volume présenté dans un SAN |
| LUN 0 | Obligatoire sur chaque cible SCSI |
| LUN Masking | Contrôle d’accès aux volumes |

---

# 🧾 En résumé

Un **LUN** est un identifiant logique permettant de présenter un espace de stockage à un serveur.

Dans les environnements SAN modernes, il représente un **volume logique sécurisé et contrôlé**, essentiel à la gestion du stockage en entreprise.