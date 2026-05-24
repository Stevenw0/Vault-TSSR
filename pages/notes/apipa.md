# 🌐 APIPA — Automatic Private Internet Protocol Addressing

## 🧩 Présentation générale

**APIPA (Automatic Private Internet Protocol Addressing)** est un mécanisme intégré aux systèmes Windows permettant à une machine de **s’auto-attribuer automatiquement une adresse IPv4** lorsqu’aucun serveur DHCP n’est disponible.

Ce mécanisme correspond au protocole **IPv4 Link-Local (IPv4LL)** et permet une **communication locale minimale**, sans configuration manuelle.

> [!info]
> APIPA est un **mécanisme de secours**, pas une solution réseau complète.

---

## 🎯 Objectif d’APIPA

APIPA permet à un ordinateur de :

- Obtenir automatiquement une adresse IP
- Communiquer avec d’autres machines du même lien local
- Fonctionner sans serveur DHCP
- Éviter un échec total de la connectivité réseau

Il est principalement utile dans :
- les réseaux temporaires
- les environnements de test
- les situations de panne DHCP

---

## 📦 Plage d’adresses APIPA

Les adresses APIPA utilisent la plage IPv4 suivante :

```text
169.254.0.0/16
```

Soit :
- de `169.254.0.0`
- à `169.254.255.255`

Ces adresses sont **réservées exclusivement** à l’auto-configuration locale.

> [!important]
> Une adresse `169.254.x.x` indique **presque toujours un problème DHCP**.

---

## ⚙️ Fonctionnement d’APIPA

Lorsqu’un ordinateur démarre :

1. Il tente d’obtenir une adresse via DHCP
2. Aucune réponse DHCP n’est reçue
3. Le système génère une adresse pseudo-aléatoire dans la plage APIPA
4. Il vérifie via **ARP** que l’adresse n’est pas déjà utilisée
5. Si l’adresse est libre, elle est attribuée à l’interface réseau

Ce processus garantit l’unicité de l’adresse sur le lien local.

---

## 🔌 Portée réseau

### 📍 Portée APIPA

- Communication **uniquement sur le lien local**
- Aucune sortie possible vers :
  - Internet
  - un autre sous-réseau
  - un routeur

> [!warning]
> APIPA **ne permet pas de routage**.

---

## 🖥️ APIPA sous Windows

Sous Windows :
- APIPA est **activé par défaut**
- Il se déclenche automatiquement en absence de DHCP
- Aucune action utilisateur n’est requise

Une machine configurée en APIPA :
- peut communiquer avec d’autres machines APIPA
- ne peut pas accéder à Internet

---

## 🧾 Configuration dans le Registre Windows

APIPA peut être activé ou désactivé via le Registre :

```text
HKEY_LOCAL_MACHINE
\SYSTEM
 \CurrentControlSet
  \Services
   \Tcpip
    \Parameters
     \Interfaces
      \{ID_INTERFACE}
```

Valeur :
```text
IPAutoconfigurationEnabled = 1
```

Type :
```text
REG_DWORD
```

> [!danger]
> Modifier le Registre peut rendre le système instable.  
> Toujours effectuer une sauvegarde avant modification.

---

## 🌍 APIPA et IPv6

En IPv6, le concept équivalent existe :

- Adresses de type :
```text
fe80::/10
```

Particularités :
- Les adresses IPv6 link-local existent toujours
- Elles sont valides uniquement sur le lien local
- Elles peuvent coexister sur plusieurs interfaces grâce à un identifiant de portée

---

## 🚨 Identifier un problème APIPA

### Symptômes courants
- Adresse IP `169.254.x.x`
- Impossible d’accéder à Internet
- Impossible de joindre le routeur
- Ping local uniquement

### Causes possibles
- Serveur DHCP indisponible
- Câble réseau débranché
- VLAN incorrect
- Problème de carte réseau
- Pare-feu bloquant DHCP

---

## 🧠 Bonnes pratiques

> [!tip]
> - Une adresse APIPA doit toujours déclencher un diagnostic
> - Vérifier DHCP avant toute autre action
> - Ne jamais utiliser APIPA en production
> - Utiliser APIPA uniquement pour du dépannage local

---

## ❌ Limitations d’APIPA

- Pas de passerelle par défaut
- Pas de DNS fonctionnel
- Pas d’accès Internet
- Pas de routage inter-réseaux
- Usage strictement local

---

## 🧾 Summary

> [!summary]
> - APIPA attribue automatiquement une IP locale en absence de DHCP
> - Il utilise la plage 169.254.0.0/16
> - Il permet uniquement une communication locale
> - Il indique souvent un problème réseau
> - C’est un mécanisme de secours, pas une solution réseau complète

---
