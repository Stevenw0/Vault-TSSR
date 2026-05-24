# 🖥️ Cisco IOS — Internetwork Operating System

## 📌 Définition

**IOS (Internetwork Operating System)** est le **système d’exploitation propriétaire de Cisco** utilisé sur la majorité des équipements réseau Cisco comme :

- routeurs
- commutateurs (switch)
- certains équipements de sécurité.

Ce système d’exploitation permet de **configurer, superviser et gérer les équipements réseau**. :contentReference[oaicite:1]{index=1}

---

## 💻 Interface CLI

Cisco IOS utilise principalement une **CLI (Command Line Interface)** pour interagir avec l’équipement.

La CLI permet :

- d’exécuter des commandes
- de configurer l’équipement
- de diagnostiquer le réseau.

Le composant chargé d’exécuter les commandes est appelé :

```
EXEC
```

Le programme **EXEC** reçoit et exécute les commandes saisies dans la CLI. :contentReference[oaicite:2]{index=2}

---

# ⚙️ Fonctions principales de Cisco IOS

Les équipements Cisco exécutant IOS assurent plusieurs fonctions essentielles dans un réseau.

| Fonction | Description |
|---|---|
| Sécurité réseau | contrôle d’accès, ACL, protection du réseau |
| Adressage IP | configuration des interfaces réseau |
| Routage | acheminement des paquets entre réseaux |
| Configuration des interfaces | optimisation des connexions réseau |
| QoS | gestion de la qualité de service |
| Gestion réseau | supervision et administration des équipements |

Ces fonctionnalités permettent de garantir **le bon fonctionnement et la stabilité du réseau**. :contentReference[oaicite:3]{index=3}

---

# 🧭 Modes de commande IOS

Cisco IOS fonctionne avec **plusieurs modes de commande**, chacun ayant des droits différents.

---

## Mode utilisateur

Mode par défaut lors de la connexion à un équipement.

Caractéristiques :

- accès en **lecture seule**
- permet uniquement de consulter l’état de l’équipement
- aucune modification possible.

Invite :

```
Router>
```

---

## Mode privilégié

Mode avec **droits avancés** permettant de consulter davantage d’informations système.

Fonctions possibles :

- diagnostic réseau
- gestion des fichiers
- sauvegarde des configurations.

Invite :

```
Router#
```

Commande pour y accéder :

```bash
enable
```

---

## Mode de configuration globale

Permet de modifier **la configuration complète de l’équipement**.

Invite :

```
Router(config)#
```

Commande :

```bash
configure terminal
```

---

## Identification des modes



---

# ⌨️ Navigation entre les modes

Les combinaisons de commandes permettent de naviguer entre les différents niveaux de configuration.



---

# ⚙️ Modes de configuration spécifiques

À partir du mode de configuration globale, il est possible d’accéder à différents sous-modes.

| Commande | Mode atteint | Description |
|---|---|---|
| line {type} {numéro} | configuration ligne | configuration console ou VTY |
| interface {type} {numéro} | configuration interface | configuration d’une interface réseau |
| router {protocole} | configuration routage | configuration d’un protocole de routage |

Remarque :

La numérotation des interfaces et des lignes **commence généralement à 0**.

---

# 📁 Fichiers de configuration Cisco

Un équipement Cisco possède **deux fichiers de configuration principaux**.

| Fichier | Stockage | Rôle |
|---|---|---|
| running-config | RAM | configuration active |
| startup-config | NVRAM | configuration utilisée au démarrage |

La configuration active est utilisée pendant le fonctionnement de l’équipement.

La configuration de sauvegarde est chargée **au démarrage du routeur ou du switch**. :contentReference[oaicite:4]{index=4}

---

# 💾 Commandes de gestion de configuration



| Commande | Description |
|---|---|
| show running-config | affiche la configuration active |
| show startup-config | affiche la configuration sauvegardée |
| copy running-config startup-config | sauvegarde la configuration |
| copy running-config tftp | export vers un serveur TFTP |
| copy tftp running-config | import depuis un serveur TFTP |
| erase startup-config | supprime la configuration sauvegardée |

Ces commandes permettent :

- de sauvegarder la configuration
- de restaurer une configuration
- d’exporter des configurations vers un serveur externe.

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| Cisco IOS | système d’exploitation des équipements Cisco |
| CLI | interface principale de gestion |
| EXEC | composant qui exécute les commandes |
| running-config | configuration active |
| startup-config | configuration de démarrage |
| Modes IOS | utilisateur, privilégié, configuration |

Cisco IOS est l’élément central permettant **l’administration et le fonctionnement des équipements réseau Cisco**.