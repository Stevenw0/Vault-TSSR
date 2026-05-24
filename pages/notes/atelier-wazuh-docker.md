# Atelier Wazuh Docker dans le lab pfSense

## 1. Objectif

L'objectif est d'ajouter Wazuh dans le lab pfSense afin de disposer d'une plateforme XDR/SIEM capable de centraliser les événements de sécurité des machines du lab.

Wazuh est déployé avec Docker sur une VM Linux dédiée.

## 2. Positionnement dans le lab

Le serveur Wazuh est placé côté LAN afin de rester dans une zone d'administration interne.

```text
WAN / Internet
      |
   pfSense
   /     \
 LAN     DMZ
 |        |
Wazuh    Linux Apache
Windows 11
```

| Élément | Rôle | Adresse |
|---|---|---|
| pfSense LAN | Passerelle LAN | 192.168.2.1 |
| Wazuh | Serveur XDR/SIEM | 192.168.2.20 |
| SSH Wazuh | Interface bridge dédiée | 192.168.50.225 |
| Windows 11 | Futur agent Wazuh | LAN |
| Linux Apache | Futur agent Wazuh | DMZ |

## 3. Configuration réseau de la VM Wazuh

La VM Wazuh dispose de deux interfaces réseau.

| Interface | Rôle | Adresse | Passerelle |
|---|---|---|---|
| ens33 | LAN du lab pfSense | 192.168.2.20/24 | 192.168.2.1 |
| ens37 | SSH depuis le réseau hôte | 192.168.50.225/24 | aucune |

Configuration `/etc/network/interfaces` :

```text
source /etc/network/interfaces.d/*

auto lo
iface lo inet loopback

allow-hotplug ens33
iface ens33 inet static
    address 192.168.2.20/24
    gateway 192.168.2.1
    dns-nameservers 192.168.2.1

auto ens37
iface ens37 inet static
    address 192.168.50.225/24
```

Point important : seule l'interface `ens33` possède une passerelle par défaut. L'interface `ens37` sert uniquement à l'administration SSH.

## 4. Erreur rencontrée : mauvais nom d'interface

Lors de la configuration réseau, l'interface SSH avait d'abord été supposée comme `ens34`.

| Problème | Cause | Correction |
|---|---|---|
| `networking.service` en erreur | L'interface `ens34` n'existait pas | Remplacement par le vrai nom `ens37` |

Après correction, la connexion SSH depuis le PC hôte fonctionne :

```powershell
ssh utilisateur@192.168.50.225
```

## 5. Préparation Docker

Docker a été installé depuis le dépôt officiel Docker, car le paquet `docker-compose-plugin` n'était pas disponible dans les dépôts Debian de base.

Erreur rencontrée :

```text
E: Impossible de trouver le paquet docker-compose-plugin
```

Correction : ajout du dépôt officiel Docker puis installation de Docker CE et du plugin Compose.

Paquets installés :

| Paquet | Rôle |
|---|---|
| docker-ce | Moteur Docker |
| docker-ce-cli | Client Docker |
| containerd.io | Runtime conteneur |
| docker-buildx-plugin | Build Docker |
| docker-compose-plugin | Docker Compose v2 |

Paramètre système requis pour Wazuh Indexer :

```bash
sysctl -w vm.max_map_count=262144
```

Ajout persistant dans `/etc/sysctl.conf` :

```text
vm.max_map_count=262144
```

## 6. Première tentative avec Wazuh 4.14.5

Une première installation a été tentée avec la branche `v4.14.5` du dépôt `wazuh-docker`.

Commandes utilisées :

```bash
cd /opt
git clone https://github.com/wazuh/wazuh-docker.git -b v4.14.5
cd /opt/wazuh-docker/single-node
docker compose -f generate-indexer-certs.yml up
docker compose up -d
```

Problème rencontré : le conteneur `wazuh-dashboard` redémarrait en boucle.

Symptômes :

```text
single-node-wazuh.dashboard-1 Restarting (0)
Wazuh APP already configured
exited with code 0
```

L'indexer répondait correctement :

```bash
curl -k -u admin:SecretPassword https://localhost:9200
```

Mais le dashboard ne restait pas actif.

## 7. Analyse du problème dashboard

La RAM de la VM a d'abord été augmentée de 4 Go à 8 Go, car Wazuh single-node demande beaucoup de ressources.

| Ressource | Valeur finale |
|---|---|
| RAM | 8 Go |
| CPU | 4 vCPU |

Malgré cela, le dashboard 4.14.5 continuait à redémarrer.

Vérification dans le conteneur :

```bash
ls -lh /usr/share/wazuh-dashboard/src/cli/dist/
```

Résultat :

```text
No such file or directory
```

Conclusion : la version/image dashboard 4.14.5 utilisée dans ce contexte ne lançait pas correctement le service dashboard.

## 8. Réinstallation propre avec Wazuh 4.13.1

La solution retenue a été de supprimer l'installation et de repartir sur la version stable `v4.13.1`.

Nettoyage effectué :

```bash
docker compose down -v --remove-orphans
docker rm -f $(docker ps -aq)
docker rmi -f $(docker images 'wazuh/*' -q)
docker volume prune -f
rm -rf /opt/wazuh-docker
```

Réinstallation :

```bash
cd /opt
git clone https://github.com/wazuh/wazuh-docker.git -b v4.13.1
cd /opt/wazuh-docker/single-node
docker compose -f generate-indexer-certs.yml up
docker compose up -d
```

## 9. Conteneurs Wazuh

Après installation en version 4.13.1, les trois conteneurs principaux sont opérationnels.

| Conteneur | Image | Rôle | État |
|---|---|---|---|
| single-node-wazuh.manager-1 | wazuh/wazuh-manager:4.13.1 | Manager Wazuh | Up |
| single-node-wazuh.indexer-1 | wazuh/wazuh-indexer:4.13.1 | Indexer/OpenSearch | Up |
| single-node-wazuh.dashboard-1 | wazuh/wazuh-dashboard:4.13.1 | Interface Web | Up |

Ports exposés :

| Port | Rôle |
|---|---|
| 443/TCP | Dashboard Wazuh |
| 1514/TCP | Communication agents |
| 1515/TCP | Enrôlement agents |
| 514/UDP | Syslog |
| 55000/TCP | API Wazuh |
| 9200/TCP | Wazuh Indexer |

## 10. Accès au dashboard

Accès depuis le PC hôte :

```text
https://192.168.50.225
```

Accès depuis le LAN du lab :

```text
https://192.168.2.20
```

Identifiants par défaut :

| Champ | Valeur |
|---|---|
| Utilisateur | admin |
| Mot de passe | SecretPassword |

Résultat : connexion réussie au dashboard Wazuh.

## 11. État actuel

Le dashboard indique qu'aucun agent n'est encore enregistré.

Prochaine étape : déployer des agents Wazuh sur les machines du lab.

| Machine | Zone | Action prévue |
|---|---|---|
| Windows 11 | LAN | Installer agent Wazuh Windows |
| Linux Apache | DMZ | Installer agent Wazuh Linux |

## 12. Validation finale

| Étape | État |
|---|---|
| VM Wazuh créée | OK |
| Réseau lab configuré | OK |
| SSH depuis le PC hôte | OK |
| Docker installé | OK |
| Wazuh 4.14.5 testé | Échec dashboard |
| Réinstallation Wazuh 4.13.1 | OK |
| Manager Wazuh | OK |
| Indexer Wazuh | OK |
| Dashboard Wazuh | OK |
| Accès interface web | OK |

Conclusion : Wazuh est installé via Docker et intégré au lab pfSense. La version fonctionnelle retenue est `4.13.1`.
