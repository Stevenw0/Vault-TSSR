# Réseau LXC Proxmox

### 6.10.1 Le bridge vmbr0 et les paires veth


Proxmox configure automatiquement un bridge Linux — `vmbr0` — lors de l'installation. Ce bridge fonctionne comme un commutateur virtuel : il connecte les interfaces réseau des conteneurs (et des VM) au réseau physique de l'hôte.

Chaque interface réseau d'un conteneur LXC est en réalité une **paire veth** (virtual Ethernet) : deux interfaces virtuelles reliées comme les deux extrémités d'un câble. L'une est dans le namespace réseau du conteneur, vue comme `eth0` ; l'autre est sur l'hôte, nommée `vethXXXi0`, et connectée au bridge `vmbr0`.

```bash
# Voir les paires veth créées par les conteneurs actifs
ip link show type veth
# → 12: veth100i0@if11: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 ...

# Vérifier quel bridge est associé à cette interface veth
bridge link show | grep veth100
# → veth100i0 state forwarding ... master vmbr0

# Voir tous les conteneurs connectés à vmbr0
brctl show vmbr0
```

> [!TIP]
> **Résultat attendu de `brctl show vmbr0` :**
> ```
> bridge name  bridge id           STP enabled  interfaces
> vmbr0        8000.aabbccddeeff   no           eno1
>                                               veth100i0
>                                               veth101i0
> ```
> Chaque `vethXXXi0` est l'extrémité hôte de la paire veth d'un conteneur actif. La présence de `eno1` confirme que `vmbr0` est connecté à l'interface physique.


### 6.10.2 IP statique et DHCP

La configuration réseau se précise à la création du conteneur dans l'option `--net0`. Deux modes sont disponibles.

En IP statique, on spécifie l'adresse et le masque en notation CIDR, plus la passerelle :

```bash
# Configuration réseau en IP statique
--net0 name=eth0,bridge=vmbr0,ip=192.168.44.100/24,gw=192.168.44.1
```

En DHCP, le conteneur obtiendra une adresse automatiquement depuis le serveur DHCP du réseau :

```bash
# Configuration réseau en DHCP
--net0 name=eth0,bridge=vmbr0,ip=dhcp
```

### 6.10.3 Vérifier la connectivité depuis le conteneur

Une fois le conteneur démarré, on entre dedans pour vérifier que la configuration réseau est correcte :

```bash
# Depuis l'hôte Proxmox, entrer dans le conteneur
pct shell 200

# Vérifier les interfaces et l'IP attribuée
ip addr show eth0

# Tester la connectivité vers la passerelle
ping -c 3 192.168.44.1

# Tester la résolution DNS et l'accès internet
ping -c 3 8.8.8.8
```

> [!TIP]
> **Résultat de ip addr show eth0 :**
> ```
> 2: eth0@if7: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP
>     link/ether bc:24:11:xx:xx:xx brd ff:ff:ff:ff:ff:ff
>     inet 192.168.44.100/24 brd 192.168.44.255 scope global eth0
>        valid_lft forever preferred_lft forever
> ```


L'interface `eth0@if7` indique que cette interface est un veth pair — une paire d'interfaces virtuelles reliées, dont une extrémité (`if7`) se trouve côté hôte, connectée au bridge `vmbr0`.

> [!INFO]
> **À retenir :** si votre conteneur n'a pas de connectivité réseau, vérifiez d'abord que le bridge `vmbr0` est correctement configuré sur l'hôte (`ip link show vmbr0`), puis que l'IP du conteneur est dans le bon sous-réseau.


---

