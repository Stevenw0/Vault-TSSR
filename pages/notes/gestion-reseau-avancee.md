# Gestion réseau avancée

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Identification-des-diff%C3%A9rentes-interfaces "Identification-des-différentes-interfaces")Identification des différentes interfaces

Historiquement les interfaces étaient nommées eth0, eth1, …

Aujourd’hui les interfaces sont nommées de manière stable, en fonction de :

- d’informations exposées par le firmware
- de leur type (bus)
- de leur emplacement sur leur bus
- …

Les noms commencent toujours par un préfixe de 2 lettres :

- en
- wl
- ww
- …

Quelques exemples de nomenclatures courantes :

- enpXsY[fZ]
- enoX
- enxAABBCCDDEEFF
- wlpXsY

Voir les détails des schémas de nommenclature pour les interfaces réseau : [https://www.freedesktop.org/software/systemd/man/latest/systemd.net-naming-scheme.html](https://www.freedesktop.org/software/systemd/man/latest/systemd.net-naming-scheme.html)

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Caract%C3%A9ristiques-d%E2%80%99une-interface--ethtool "Caractéristiques-d’une-interface--ethtool")Caractéristiques d’une interface : ethtool

Si besoin, à installer par :

```
sudo apt install ethtool
```

**Information sur le pilote**

```
sudo ethtool -i enp0s3
```

**Fonctionnalités prises en charge**

```
sudo ethtool -k
```

**Paramètres actuels de l’interface**

```
sudo ethtool enp0s3
```

**Changer un paramètre**

Ici, passer le débit maximum de l’interface à 100 Mb/s

```
sudo ethtool -s enp0s3 speed 100
```

**Faire clignoter les LED de la carte réseau**  
Pour faire le lien entre le nom d’une interface (enp0s3) et la carte réseau matérielle, on fait clignoter les LED de la carte matérielle pendant 10 secondes :

```
sudo ethtool -p enp0s3 10
```

---

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Diff%C3%A9rents-outils-de-configurationinformation "Différents-outils-de-configurationinformation")Différents outils de configuration/information

Originellement, Linux disposait des outils suivants :

- ifconfig
- route
- arp
- netstat
- nslookup

Ne sont plus installés par défaut car n’ont pas suivies l’évolution de la pile TCP/IP de Linux.

Elles restent installables par :

```
sudo apt install net-tools
```

Aujourd’hui elles sont remplacées par les commandes du paquet `iproute2` :

- ifconfig -> ip a[ddr] : gestion des adresse IP
- route -> ip r[oute] : gestion des tables de routage
- arp -> ip n[eigh] : gestion des tables ARP
- netstat -> ss (socket status) : intéragir avec les sockets (TCP/UDP/Unix)
- nslookup -> host, dig : requêtes DNS
- ip l[ink] -> gestion des interfaces/cartes réseau


## Désactivation de IPv6

- Désactivation non-pérenne (= jusqu’au prochain reboot), pour toutes les interfaces :
    - avec `sysctl` (à ne pas confondre avec `systemctl`)
        
        ```
        sudo sysctl net.ipv6.conf.all.disable_ipv6=1
        ```
        
    - “manuellement” en tant que `root` :
        
        ```
        echo 1 > /proc/sys/net/ipv6/conf/all/disable_ipv6
        ```
        
    - “manuellement” avec `sudo` (2 syntaxes équivalentes) :
        
        ```
        echo 1 | sudo tee /proc/sys/net/ipv6/conf/all/disable_ipv6
        
        sudo bash -c "echo 1 > /proc/sys/net/ipv6/conf/all/disable_ipv6"
        ```
        
- Désactivation pérenne, dans le fichier `/etc/sysctl.conf` :

```
net.ipv6.conf.all.disable_ipv6 = 1
```

- puis (2 manières équivalentes) :
    
    ```
    sudo reboot
    
    sudo sysctl -p
    ```