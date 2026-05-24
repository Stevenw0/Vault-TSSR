# Initiation au firewall de Linux

Le sous-système noyau chargé de la gestion du firewall se nomme _**[Netfilter](https://www.netfilter.org/)**_.

On le configure historiquement à l’aide d’une commande _**iptables**_ – celle-ci tend à être aujourd’hui remplacée par _**nftables**_.  
Pour installer `iptables` :

```
sudo apt install -y iptables
```

Remarque : `iptables` gère uniquement les règles IPv4. `ip6tables` gère les règles IPv6.

Netfilter organise les actions à appliquer aux paquets en 3 tables*

- Table _**filter**_  
    Permet d’appliquer des filtres sur les paquets en fonction de critères
- Table _**nat**_  
    Permet d’effectuer des opérations de NAT source et destination, c’est-à-dire modifier la source/destination de paquets
- Table _**mangle**_  
    Permet de faire des modifications avancées sur un paquet (modifier la valeur d’un TTL IP), typiquement dans ses en-têtes (_headers_)

* : en plus des tables filter, nat et mangle, il existe aussi les tables raw et security, mais elles sont plus rarement utilisées.  
La table raw sert essentiellement à exclure des paquets du suivi de l’état des connexions (_connection tracking_) par iptables.  
La table security sert à appliquer des politiques d’accès MAC (_Mandatory Access Control_) définies par SELinux, par exemple.

Au sein de chaque table, on trouve des règles orgnisées en chaînes.

- La table _**filter**_ dispose des chaînes suivantes:
    - INPUT : pour bloquer/autoriser les paquets reçus destinés à des processus de la machine locale
    - FORWARD : pour bloquer/autoriser les paquets en transit via la machine locale. C’est-à-dire les paquets reçus par la machine locale, mais qui sont destinés à une autre machine.
    - OUTPUT : pour bloquer/autoriser les paquets émis par les processus de la machine locale
- Lister les règles actives dans toutes les chaînes de la table filter (celle par défaut) : `iptables -L`
- Lister les règles actives dans la chaîne FORWARD de la table filter : `iptables -L FORWARD`
- Lister les règles actives dans toutes les chaînes de la table nat : `iptables -t nat -L`
- Lister les règles actives, au même format qu’une commande iptables : `iptables -t nat -S`
- Exemple : interdire le transit des paquets de type ping sur un routeur Linux

```
iptables -A FORWARD -p icmp --icmp-type echo-request -j DROP
iptables -A FORWARD -p icmp --icmp-type echo-reply -j DROP
```

Pour avoir plus d’informations sur les options iptables spécifiques au protocole ICMP : `iptables -p icmp -h` et `man iptables-extensions`/[manpage en ligne](https://manpages.debian.org/bookworm/iptables/iptables-extensions.8.en.html#icmp_\(IPv4-specific\)).

- Supprimer une règle donnée, par exemple la 2e règle de la chaîne `FORWARD` de la table `filter` :
    
    ```
    $ iptables -L FORWARD --line-numbers
    Chain FORWARD (policy ACCEPT)
    num  target     prot opt source               destination         
    1    DROP       icmp --  anywhere             anywhere             icmp echo-request
    2    DROP       icmp --  anywhere             anywhere             icmp echo-reply
       
    $ iptables -D FORWARD 2
    ```
    
- Supprimer toutes les règles d’une chaîne : `iptables -t filter -F FORWARD`
    
- Supprimer toutes les règles d’une table (= toutes ses chaînes) : `iptables -t filter -F`
    
- La table _**nat**_ dispose des chaînes suivantes :
    
    - PREROUTING :
        - pour modifier un paquet avant que la décision de routage soit prise (= est-ce que ce paquet est pour la machine locale ou non ?)
        - typiquement pour faire du DNAT/PAT, c’est-à-dire modifier l’adresse IP et/ou le port de destination du paquet, en remplaçant la paire `<IP_DU_ROUTEUR>:<PORT_EXPOSÉ_PUBLIQUEMENT>` par `<IP_DE_MACHINE_DANS_RÉSEAU_PRIVÉ>:<PORT_RÉEL_DU_PROCESSUS>`
    - POSTROUTING :
        - pour modifier un paquet après que la décision de routage soit prise (= est-ce que ce paquet est pour la machine locale ou non ?)
        - typiquement pour faire du SNAT, c’est-à-dire modifier l’adresse IP source du paquet, en remplaçant l’IP de la machine sur le réseau privé qui a émis le paquet, par l’IP publique du routeur
    - INPUT : modifier un paquet reçu destiné à un processus de la machine locale
    - OUTPUT : modifier un paquet émis par un processus de la machine locale
- Mise en œuvre de SNAT : On change l’IP source d’origine (celle de `srvlog`) par l’IP du routeur (celle de `deby`) :
    

```
# Activer le routage (forwarding) IP au niveau du noyau
echo 1 > /proc/sys/net/ipv4/ip_forward
# ou
sysctl net.ipv4.ip_forward=1

# Méthode 1 : mascarade (à privilégier en cas d'adresse IP dynamique)
iptables -t nat -A POSTROUTING -o enp0s3 -j MASQUERADE
# Méthode 2 : SNAT (à privilégier en cas d'adresse IP statique)
iptables -t nat -A POSTROUTING -o enp0s3 -j SNAT --to-source 10.0.2.15
```

- Mise en œuvre de DNAT/PAT : Pouvoir atteindre, en ssh, la machine `srvlog` directement depuis la machine physique, sans faire de rebond par `deby` :

```
iptables -t nat -A PREROUTING -p tcp --dport 1234 -j DNAT --to 172.16.0.100:22
# ou
iptables -t nat -A PREROUTING -p tcp --dport 1234 -j DNAT --to-destination 172.16.0.100:22
```

- Vérification avec : `ssh stagiaire@192.168.56.200 -p 1234`
    
- La table _**mangle**_ a les chaînes suivantes
    
    - PREROUTING : modification avancée d’un paquet, avant que son routage soit décidé
    - POSTROUTING : modification avancée d’un paquet, après que son routage a été décidé
    - INPUT : modification avancée d’un paquet reçu destiné à un processus de la machine locale
    - FORWARD : modification avancée d’un paquet en transit via la machine locale
    - OUTPUT : modification avancée d’un paquet émis par un processus de la machine locale

**Ordre d’application des règles en fonction de la table et chaîne**

![](https://www.frozentux.net/iptables-tutorial/images/tables_traverse.jpg)

_**Remarque**_

La syntaxe de définition des chaînes de filtrage est complexe et délicate à mettre au point, d’autant plus que l’ordre des règles dans une chaîne est important.

Or, les règles `iptables` sont volatiles par défaut.

Les commandes `iptables-save` et `iptables-restore` permettent de sauvegarder dans un fichier l’ensemble de la configuration courante, et de la recharger ensuite à partir de ce fichier.

Exemple :

```
# Voir et sauvegarder les règles actuelles de nat
sudo iptables -t nat -L
sudo iptables-save -f /etc/iptables/rules.v4

# Supprimer les règles actuelles de nat et constater leur suppresion effective
sudo iptables -t nat -F
sudo iptables -t nat -L

# Restaurer les règles de nat et constater leur restauration effective
sudo iptables-restore /etc/iptables/rules.v4
sudo iptables -t nat -L
```

Sur la plupart des distributions, on peut spécifier ce fichier pour qu’il soit réappliqué à chaque démarrage du système, pérennisant ainsi les règles de filtrage du pare-feu.

Pour les distributions de type Debian, il faut installer le paquet logiciel `iptables-persistent` et sauvegarder les règles dans le fichier `/etc/iptables/rules.v4` :

```
sudo apt install -y iptables-persistent
```

Lors de la première installation il sera proposé d’enregistrer les règles actuelles ; accepter, sinon pour le faire manuellement plus tard dans le fichier prévu :

```
sudo netfilter-persistent save
```

On peut aussi vérifier le statut du service avec `systemctl status netfilter-persistent.service`.