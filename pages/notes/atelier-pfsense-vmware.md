# Atelier pfSense - Installation et configuration VMware



## 1. Objectif

L'objectif de cet atelier est d'installer et configurer pfSense dans VMware afin de créer un routeur / pare-feu virtuel entre un réseau WAN et un réseau LAN isolé.

Le lab permet de valider :
Atelier Pfsense

| Fonction | État |
|---|---|
| Installation pfSense | OK |
| Configuration WAN | OK |
| Configuration LAN | OK |
| Accès interface web | OK |
| Sortie Internet depuis pfSense | OK |
| Sortie Internet depuis un client LAN | OK |

## 2. Architecture cible

```text
Internet
   |
VMnet8 NAT - 192.168.198.0/24
   |
WAN pfSense - 192.168.198.129/24
   |
pfSense
   |
LAN pfSense - 192.168.2.1/24
   |
VMnet2 Host-only - 192.168.2.0/24
   |
Client Debian - 192.168.2.10/24
```

## 3. Réseaux VMware

Deux réseaux VMware ont été utilisés.

| Réseau | Type | Rôle | Sous-réseau | DHCP VMware |
|---|---|---|---|---|
| VMnet8 | NAT | WAN pfSense / accès Internet | 192.168.198.0/24 | Activé |
| LAN Segment LAN | LAN Segment VMware | LAN interne pfSense | 192.168.2.0/24 | Aucun DHCP VMware |

VMnet2 sert de réseau LAN isolé pour le lab. Le DHCP VMware a été désactivé sur VMnet2 afin de garder la maîtrise de l'adressage LAN.

## 4. VM pfSense

| Paramètre | Valeur |
|---|---|
| Nom | pfSense-LAB |
| OS | FreeBSD 64-bit |
| Version pfSense | 2.7.2-RELEASE amd64 |
| CPU | 2 vCPU |
| RAM | 1024 MB ou plus |
| Disque | 16 GB minimum |
| Carte réseau 1 | NAT / VMnet8 |
| Carte réseau 2 | Custom / VMnet2 |

## 5. Installation pfSense

pfSense a été installé depuis l'ISO officielle.

Choix réalisés pendant l'installation :

| Étape | Choix |
|---|---|
| Mode | Install |
| Clavier | Français ou défaut |
| Partitionnement | Auto ZFS |
| Type ZFS | stripe |
| Disque | disque unique de la VM |
| Shell final | No |
| Redémarrage | Reboot |

Après installation, l'ISO a été retiré afin d'éviter de relancer l'installateur au redémarrage.

## 6. Interfaces pfSense

Après démarrage, pfSense a détecté deux interfaces.

| Interface pfSense | Nom système | Rôle | Adresse |
|---|---|---|---|
| WAN | em0 | Réseau NAT VMware | 192.168.198.129/24 |
| LAN | em1 | Réseau interne VMnet2 | 192.168.2.1/24 |

L'interface WAN a reçu une adresse automatiquement via DHCP VMware NAT.

L'interface LAN a été configurée manuellement depuis la console pfSense avec l'option `2 - Set interface(s) IP address`.

Paramètres LAN :

| Paramètre | Valeur |
|---|---|
| Adresse LAN | 192.168.2.1 |
| Masque | 24 |
| Passerelle LAN | vide |
| IPv6 | désactivé / vide |
| DHCP LAN | non activé pendant l'atelier |
| Interface web | HTTPS |

## 7. Problème rencontré : conflit IP avec VMnet2

Lors du premier accès à l'interface web pfSense, l'adresse `192.168.2.1` ne répondait pas correctement depuis le PC hôte.

Cause : la carte virtuelle Windows `VMware Network Adapter VMnet2` utilisait déjà l'adresse `192.168.2.1`, qui était aussi l'adresse LAN de pfSense.

| Élément | Ancienne IP | Correction |
|---|---|---|
| pfSense LAN | 192.168.2.1 | conservée |
| VMware Network Adapter VMnet2 côté Windows | 192.168.2.1 | changée en 192.168.2.2 |

Configuration finale de la carte VMnet2 côté Windows :

| Paramètre | Valeur |
|---|---|
| Adresse IP | 192.168.2.2 |
| Masque | 255.255.255.0 |
| Passerelle | vide |
| DNS | vide |

Après correction, l'accès web à pfSense a fonctionné.

## 8. Accès à l'interface web

URL d'administration :

```text
https://192.168.2.1
```

Identifiants par défaut :

| Champ | Valeur |
|---|---|
| Utilisateur | admin |
| Mot de passe | pfsense |

L'assistant de configuration web pfSense a ensuite été exécuté.

Paramètres principaux :

| Élément | Valeur |
|---|---|
| Hostname | pfsense-lab |
| Domaine | localdomain |
| Fuseau horaire | Europe/Paris |
| WAN | DHCP |
| LAN | 192.168.2.1/24 |

Le mot de passe administrateur doit être changé pendant ou après l'assistant.

## 9. Configuration WAN

Le WAN est resté en DHCP sur le réseau NAT VMware.

| Paramètre | Valeur |
|---|---|
| Type WAN | DHCP |
| Adresse WAN obtenue | 192.168.198.129 |
| Passerelle WAN | fournie par VMnet8 NAT |
| DNS | 127.0.0.1, 192.168.198.2, 1.1.1.1, 8.8.8.8 |

Comme le WAN utilise une adresse privée VMware, l'option `Block private networks` doit être décochée si elle est présente sur la page WAN.

## 10. Tests depuis pfSense

Depuis `Diagnostics > Ping`, les tests suivants ont été réalisés avec succès.

| Test | Source | Résultat |
|---|---|---|
| Ping 8.8.8.8 | WAN 192.168.198.129 | OK |
| Ping google.com | WAN 192.168.198.129 | OK |

Résultat observé :

```text
3 packets transmitted, 3 packets received, 0.0% packet loss
```

La résolution DNS fonctionne également depuis pfSense.

## 11. VM cliente LAN

Une VM Debian a été utilisée comme client LAN sur VMnet2.

| Paramètre | Valeur |
|---|---|
| OS | Debian |
| Réseau VMware | VMnet2 |
| Interface | ens33 |
| Adresse IP | 192.168.2.10/24 |
| Passerelle | 192.168.2.1 |
| DNS | 192.168.2.1 ou DNS public |
| Domaine / suffixe | localdomain |

Configuration réseau attendue :

```text
IP : 192.168.2.10
Masque : 255.255.255.0
Passerelle : 192.168.2.1
DNS : 192.168.2.1
```

## 12. Tests depuis le client LAN

Les tests depuis la VM Debian cliente ont été validés.

| Test | Résultat |
|---|---|
| Ping pfSense LAN 192.168.2.1 | OK |
| Ping Internet 8.8.8.8 | OK |
| Ping google.com | OK |

Cela valide le routage et le NAT entre le LAN VMnet2 et le WAN NAT VMware.

## 13. Validation finale

L'atelier demandé dans le PDF est validé.

| Étape | État |
|---|---|
| Création des réseaux VMware | OK |
| Installation de pfSense | OK |
| Configuration WAN/LAN | OK |
| Accès interface web pfSense | OK |
| Configuration assistant pfSense | OK |
| Test Internet depuis pfSense | OK |
| Configuration client LAN | OK |
| Test Internet depuis le client LAN | OK |

Chaîne validée :

```text
Client Debian 192.168.2.10 -> pfSense LAN 192.168.2.1 -> pfSense WAN 192.168.198.129 -> VMnet8 NAT -> Internet
```
## 14. Ajout d'une DMZ

Une troisième interface réseau a été ajoutée à la VM pfSense afin de créer une zone DMZ.

### Réseau VMware DMZ

| Réseau | Type | Rôle | Sous-réseau | DHCP VMware |
|---|---|---|---|---|
| LAN Segment DMZ | LAN Segment VMware | DMZ | 192.168.3.0/24 | Aucun DHCP VMware |

### Interface pfSense DMZ

Après ajout de la carte réseau dans VMware, l'interface a été assignée dans pfSense via `Assign Interfaces`.

| Interface pfSense | Nom système | Rôle | Adresse |
|---|---|---|---|
| WAN | em0 | Internet / NAT VMware | 192.168.198.129/24 |
| LAN | em1 | Réseau LAN | 192.168.2.1/24 |
| DMZ | em2 | Réseau DMZ | 192.168.3.1/24 |

L'interface `OPT1` a été renommée en `DMZ` depuis l'interface web pfSense.

Configuration DMZ :

| Paramètre | Valeur |
|---|---|
| Enable interface | Oui |
| Description | DMZ |
| IPv4 Configuration Type | Static IPv4 |
| Adresse IPv4 | 192.168.3.1/24 |
| IPv6 Configuration Type | None |

## 15. Objectif des règles firewall

L'objectif est de contrôler explicitement les flux entre les zones, sans conserver de règle globale du type `LAN net -> any -> any`.

Schéma logique :

```text
Internet / WAN
      |
   pfSense
   /     \
 LAN     DMZ
 |        |
Client   Linux Apache
```

Flux à contrôler :

| Flux | Politique retenue |
|---|---|
| LAN -> WAN | Autorisé par services uniquement |
| LAN -> DMZ | Autorisé uniquement vers Apache/SSH |
| DMZ -> WAN | Autorisé par services uniquement |
| DMZ -> LAN | Bloqué par défaut |
| WAN -> LAN | Bloqué par défaut |
| WAN -> DMZ | Bloqué tant qu'aucun NAT/Port Forward n'est créé |

## 16. Règles firewall LAN

La règle par défaut `Default allow LAN to any rule` a été désactivée afin de remplacer l'autorisation globale par des règles précises.

Règles LAN configurées :

| Action | Protocole | Source | Destination | Port | Description |
|---|---|---|---|---|---|
| Pass | TCP/UDP | LAN subnets | LAN address | 53 DNS | LAN to pfSense DNS |
| Pass | TCP | LAN subnets | any | 80 HTTP | LAN to WAN HTTP |
| Pass | TCP | LAN subnets | any | 443 HTTPS | LAN to Internet HTTPS |
| Pass | ICMP echo request | LAN subnets | any | - | LAN to Internet ICMP |
| Pass | TCP | LAN subnets | 192.168.3.10 | 80 HTTP | LAN to DMZ Apache HTTP |
| Pass | TCP | LAN subnets | 192.168.3.10 | 22 SSH | LAN to DMZ Apache SSH |

Règles conservées/désactivées :

| Règle | État | Raison |
|---|---|---|
| Anti-Lockout Rule | Conservée | Évite de perdre l'accès WebGUI pfSense |
| Default allow LAN to any rule | Désactivée | Remplacée par des règles contrôlées |
| Default allow LAN IPv6 to any rule | Désactivée | IPv6 non utilisé dans le lab |

## 17. Règles firewall DMZ

La DMZ ne dispose pas d'une règle globale. Seuls les flux nécessaires vers pfSense et Internet ont été autorisés.

Règles DMZ configurées :

| Action | Protocole | Source | Destination | Port | Description |
|---|---|---|---|---|---|
| Pass | TCP/UDP | DMZ subnets | DMZ address | 53 DNS | DMZ to pfSense DNS |
| Pass | TCP | DMZ subnets | any | 80 HTTP | DMZ to Internet HTTP |
| Pass | TCP | DMZ subnets | any | 443 HTTPS | DMZ to Internet HTTPS |
| Pass | ICMP echo request | DMZ subnets | any | - | DMZ to Internet ICMP |

Aucune règle DMZ vers LAN n'a été créée. Le trafic DMZ vers LAN est donc bloqué par défaut par pfSense.

## 18. État actuel du filtrage

| Flux | État actuel |
|---|---|
| LAN vers pfSense DNS | Autorisé |
| LAN vers Internet HTTP/HTTPS/ICMP | Autorisé |
| LAN vers Apache DMZ HTTP/SSH | Autorisé |
| LAN vers autres destinations/ports | Bloqué par absence de règle |
| DMZ vers pfSense DNS | Autorisé |
| DMZ vers Internet HTTP/HTTPS/ICMP | Autorisé |
| DMZ vers LAN | Bloqué par défaut |
| WAN vers LAN | Bloqué par défaut |
| WAN vers DMZ | Bloqué par défaut, en attente d'un éventuel NAT Port Forward |

## 19. Prochaines étapes

| Étape | Statut |
|---|---|
| Créer/configurer le serveur Linux Apache en DMZ | À faire |
| Configurer IP Apache : 192.168.3.10/24 | À faire |
| Installer Apache | À faire |
| Tester LAN -> Apache DMZ HTTP | À faire |
| Tester LAN -> Apache DMZ SSH | À faire |
| Tester DMZ -> Internet | À faire |
| Tester DMZ -> LAN bloqué | À faire |
| Mettre en place NAT WAN -> DMZ HTTP si demandé | À faire |
## 20. Modification VMware : passage en LAN Segments

Le lab a été ajusté pour utiliser des `LAN Segments` VMware au lieu des réseaux VMnet host-only pour le LAN et la DMZ.

| Zone | Réglage VMware final |
|---|---|
| WAN pfSense | NAT |
| LAN pfSense | LAN Segment `LAN` |
| DMZ pfSense | LAN Segment `DMZ` |
| Windows 11 | LAN Segment `LAN` |
| Debian Apache | LAN Segment `DMZ` |

Ce choix isole mieux les réseaux internes du PC hôte. L'administration pfSense continue de se faire depuis une machine placée sur le segment LAN.

## 21. Règles firewall finales constatées

### WAN

Une règle a été créée automatiquement ou manuellement pour accompagner la redirection NAT HTTP vers le serveur Apache en DMZ.

| Action | Protocole | Source | Destination | Port | Description |
|---|---|---|---|---|---|
| Pass | IPv4 TCP/UDP | any | 192.168.3.10 | 80 HTTP | NAT Redirection Wan to DMZ HTTP |

Cette règle permet le flux entrant publié vers le serveur Apache DMZ. Aucun accès WAN vers le LAN n'est autorisé.

### LAN

Les règles LAN finales sont contrôlées par service. La règle globale autorisant tout le trafic LAN a été remplacée par une règle de blocage finale.

| Action | Protocole | Source | Destination | Port | Description |
|---|---|---|---|---|---|
| Pass | TCP/UDP | LAN subnets | This Firewall (self) | 53 DNS | LAN to pfSense DNS |
| Pass | TCP | LAN subnets | any | 80 HTTP | LAN to WAN HTTP |
| Pass | TCP | LAN subnets | any | 443 HTTPS | LAN to WAN HTTPS |
| Pass | ICMP echo request | LAN subnets | any | - | LAN to Internet ICMP |
| Block/Reject | IPv4 any | LAN subnets | any | any | Blocage final LAN |

La règle `Anti-Lockout Rule` reste présente afin de conserver l'accès à l'interface web pfSense.

### DMZ

Les règles DMZ autorisent uniquement les flux nécessaires vers pfSense et Internet.

| Action | Protocole | Source | Destination | Port | Description |
|---|---|---|---|---|---|
| Pass | ICMP echo request | DMZ subnets | any | - | DMZ to Internet ICMP |
| Pass | TCP/UDP | DMZ subnets | This Firewall (self) | 53 DNS | DMZ to pfSense DNS |
| Pass | TCP | DMZ subnets | any | 443 HTTPS | DMZ to Internet HTTPS |
| Pass | TCP | DMZ subnets | any | 80 HTTP | DMZ to Internet HTTP |

Aucune règle DMZ vers LAN n'a été ajoutée. Le trafic DMZ vers LAN reste donc bloqué par défaut.

## 22. État de sécurité après modification

| Flux | État |
|---|---|
| LAN vers DNS pfSense | Autorisé |
| LAN vers HTTP/HTTPS Internet | Autorisé |
| LAN vers ICMP Internet | Autorisé |
| LAN vers autres flux | Bloqué par la règle finale |
| DMZ vers DNS pfSense | Autorisé |
| DMZ vers HTTP/HTTPS Internet | Autorisé |
| DMZ vers ICMP Internet | Autorisé |
| DMZ vers LAN | Bloqué par défaut |
| WAN vers Apache DMZ HTTP | Autorisé via NAT/Firewall |
| WAN vers LAN | Bloqué par défaut |
