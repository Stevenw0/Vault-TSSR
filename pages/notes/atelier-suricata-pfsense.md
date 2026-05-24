# Atelier Suricata sur pfSense

## 1. Objectif

L'objectif de cet atelier est d'installer et configurer Suricata sur pfSense afin d'ajouter une fonction IDS/IPS au lab réseau.

Suricata permet d'analyser le trafic réseau à l'aide de règles de détection. Il peut fonctionner en deux modes :

| Mode | Rôle |
|---|---|
| IDS | Détecte et remonte des alertes sans bloquer le trafic |
| IPS | Détecte et bloque les flux considérés comme malveillants |

Dans un premier temps, Suricata est utilisé en mode IDS afin d'observer les alertes et éviter les faux positifs.

## 2. Contexte du lab

Suricata a été ajouté sur le lab pfSense VMware déjà en place.

| Zone | Rôle |
|---|---|
| WAN | Accès Internet via NAT VMware |
| LAN | Client Windows 11 |
| DMZ | Serveur Linux Apache |
| pfSense | Routeur, pare-feu et IDS/IPS Suricata |

Interfaces principales :

| Interface | Adresse | Rôle |
|---|---|---|
| WAN | 192.168.198.129/24 | Accès Internet |
| LAN | 192.168.2.1/24 | Réseau client |
| DMZ | 192.168.3.1/24 | Réseau serveur Apache |

## 3. Installation du paquet Suricata

Suricata a été installé depuis le gestionnaire de paquets pfSense.

Chemin utilisé :

```text
System > Package Manager > Available Packages
```

Action réalisée :

```text
Recherche du paquet Suricata puis installation
```

Résultat : le menu Suricata est disponible dans pfSense.

## 4. Configuration des règles Emerging Threats

Les règles utilisées pour cet atelier sont les règles communautaires Emerging Threats Open.

Chemin utilisé :

```text
Services > Suricata > Global Settings
```

Paramètres configurés :

| Paramètre | Valeur |
|---|---|
| Ruleset | ET Open |
| Custom rules URL | https://rules.emergingthreats.net/open/suricata/emerging.rules.tar.gz |
| Mise à jour automatique | Activée selon intervalle choisi |
| Mode de départ | IDS, sans blocage automatique |

URL des règles :

```text
https://rules.emergingthreats.net/open/suricata/emerging.rules.tar.gz
```

## 5. Mise à jour des règles

Les règles ont été téléchargées depuis l'onglet de mise à jour Suricata.

Chemin utilisé :

```text
Services > Suricata > Updates
```

Action :

```text
Update Rules
```

Résultat : téléchargement et mise à jour des règles réussis.

## 6. Interface surveillée

L'interface LAN a été choisie pour commencer la surveillance.

Justification : surveiller le LAN permet d'identifier plus facilement le client interne à l'origine du trafic détecté.

Chemin utilisé :

```text
Services > Suricata > Interfaces
```

Configuration :

| Paramètre | Valeur |
|---|---|
| Interface | LAN |
| Description | Suricata LAN |
| Suricata | Activé |
| Alertes système | Activées si option disponible |
| Blocage automatique | Désactivé au départ |

## 7. Catégories de règles

Les catégories de règles ont été activées depuis l'onglet de catégories de l'interface LAN.

Chemin utilisé :

```text
Services > Suricata > LAN Categories
```

Objectif : activer les catégories nécessaires pour générer des alertes de test et analyser le trafic LAN.

Remarque : dans un environnement réel, il est préférable d'activer progressivement les catégories afin de limiter les faux positifs.

## 8. Démarrage de Suricata

Suricata a été démarré sur l'interface LAN.

Chemin utilisé :

```text
Services > Suricata > Interfaces
```

Action :

```text
Start sur l'interface LAN
```

Résultat : Suricata est opérationnel sur le LAN.

## 9. Test et validation

Un test de détection a été réalisé depuis le client LAN.

Résultat attendu : apparition d'une alerte dans Suricata.

Chemin de consultation :

```text
Services > Suricata > Alerts
```

Résultat final : Suricata fonctionne et remonte correctement les alertes.

## 10. IDS ou IPS

Pour cet atelier, Suricata est d'abord utilisé comme IDS.

| Fonction | État |
|---|---|
| Détection | OK |
| Alertes | OK |
| Blocage automatique | Non activé au départ |

Le mode IPS peut être activé ensuite en cochant l'option de blocage des contrevenants, mais seulement après vérification des alertes afin d'éviter les faux positifs.

## 11. Validation finale

| Étape | État |
|---|---|
| Installation du paquet Suricata | OK |
| Configuration ET Open | OK |
| Mise à jour des règles | OK |
| Ajout de l'interface LAN | OK |
| Activation des catégories | OK |
| Démarrage Suricata | OK |
| Test d'alerte | OK |

Conclusion : Suricata est installé, configuré et fonctionnel sur pfSense en mode IDS.
