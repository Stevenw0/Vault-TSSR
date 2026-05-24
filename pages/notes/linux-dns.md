# Initiation aux serveurs de noms (DNS)

DNS : Domain Name System

À la base, DNS permet de résoudre un nom de domaine (ex : [linux.org](http://linux.org/)) en une adresse IP (ex : 104.26.15.72).

Mais aussi :

- Résoudre une adresse IP en nom de domaine
- Trouver les serveurs mail d’un domaine (ex : les serveurs qui gèrent les courriels pour les adresses en `@linux.org`)
- …

Le logiciel serveur le plus répandu est BIND : Berkeley Internet Name Domain

Voir la BD grand public : [Comment les DNS marchent ?](https://howdns.works/fr/)

![](https://www.formatux.fr/formatux-services/module-040-bind/_images/0401-linux-bind.png)

Les serveurs DNS reflètent la structure arborescente du système DNS, par les notions **d’autorité** et de **délégation d’autorité**. Ils s’appuient également sur les serveurs à la **racine de l’arborescence**, qui jouent un rôle spécifique dans la résolution de noms.

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Installation-et-configuration-de-BIND "Installation-et-configuration-de-BIND")Installation et configuration de BIND

**Installation**

```
sudo apt install -y bind9

sudo systemctl status named
sudo rndc querylog on

sudo rndc reload
# ou
sudo systemctl reload-or-restart named
```

`rndc` = Remote Name Daemon Control

**Configuration**

Dans `/etc/bind/`.  
Les fichiers principaux sont `named.conf`, `named.conf.default-zones`, `named.conf.options` et `named.conf.local`.

**Déclaration de la zone “stage.local”**

Faite dans le fichier `/etc/bind/named.conf.local` :

```
zone "stage.local" {
    type primary;
    file "/var/lib/bind/stage.local";
};
```

**Définition de la zone “stage.local”**

Faite dans le fichier `/var/lib/bind/stage.local`:

Fichier de départ

```
$TTL 1D
@    IN   SOA   deby.stage.local.   root.stage.local (
          20251009  ; Serial
          1D        ; Refresh
          1H        ; Retry
          1W        ; Expire
          3D        ; TTL Négatif
)

     IN   NS    deby.stage.local.

deby IN   A     192.168.56.200
```

**Explications de la syntaxe**

Un fichier de zone est composé d’enregistrement DNS (DNS Record).  
Structure d’un enregistrement

```
clé [TTL] CLASS TYPE valeur(s)
```

Exemple

```
srvlog   IN   A   172.16.0.100
```

Types d’enregistrements DNS courants :

- A : association nom de domaine et IPv4
- AAAA : association nom de domaine et IPv6
- MX : association nom de domaine et noms de domaines des serveurs mail
- NS : nom de domaine <-> nom de domaine du serveur DNS d’autorité pour cette zone
- SOA (Start Of Authority) : paramètres du fichier de zone
- CNAME : sous-domaine <-> domaine d’une serveur
- TXT : contenir des informations arbitraires, officiellement “human readable”, concrètement, utilisé par d’autres protocoles pour des fonctionnaltiés spécifiques comme DKIM pour les serveurs mail
- …

Éléments de l’enregistrement SOA (_Start Of Authority_) :

|Élément|Explication|
|---|---|
|`@`|représente le serveur BIND lui-même|
|`deby.stage.local.`|FQDN du serveur DNS primaire de cette zone|
|`root.stage.local`|adresse email des personne qui administrent le serveur DNS, où le `@` a été remplacé par un `.`. Correspond en réalité à `root@stage.local`|
|`serial`|numéro de version du fichier de zone|
|`refresh`|fréquence à laquelle un serveur DNS secondaire doit vérifier si le fichier de zone du serveur primaire a changé|
|`retry`|si un serveur secondaire n’obtient pas de réponse du serveur primaire, fréquence à laquelle lui redemander si le fichier de zone a changé|
|`expire`|si un serveur secondaire n’arrive toujours pas à obtenir une réponse du serveur primaire après cette durée, le serveur secondaire va considéré que son fichier de zone n’est plus valide (et donc ne pourra plus répondre aux requêtes concernant les noms de domaine de cette zone)|
|`TTL négatif`|durée de validité, dans le cache d’un serveur DNS, d’une réponse négative à une demande de résolution (ex : si la résolution de `srvlog.stage.local` a été demandée alors qu’aucun enregistrement n’existe pour `srvlog` dans le zone `stage.local`)|

FQDN : _Fully-Qualified Domain Name_, soit Nom de domaine complètement qualifié. Ça veut dire qu’il n’y a absolument aucune ambigüité concernant ce nom de domaine et qu’il est unique sur tout Internet.

Pour comprendre un peu plus l’enregistrement SOA, voir [https://www.cloudflare.com/fr-fr/learning/dns/dns-records/dns-soa-record/](https://www.cloudflare.com/fr-fr/learning/dns/dns-records/dns-soa-record/)

Une fois le service redémarré et les _**logs vérifiés**_, on peut faire une interrogation de vérification :

```
dig deby.stage.local @localhost +short
```

Pour l’instant aucune machine n’est cliente du DNS tout chaud configuré.

---

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Configuration-d%E2%80%99un-client-DNS "Configuration-d’un-client-DNS")Configuration d’un client DNS

Cette configuration se fait dans le fichier `/etc/resolv.conf` :

```
search stage.local
nameserver 127.0.0.1
```

**N.B.** : ne supprimer pas l’IP du serveur DNS fournie par le serveur DHCP de Virtualbox. Commenter cette ligne, car on s’en servira plus tard.

Pour éviter que le contenu de `/etc/resolv.conf` soit écrasé lors du prochain renouvellement de bail DHCP (pour `enp0s3`), ajouter ces directives dans `/etc/dhcp/dhclient.conf` :

```
supersede domain-search "stage.local";
supersede domain-name-servers 127.0.0.1;
```

NB: Il faut aussi supprimer/commenter l’entrée _**deby**_ du fichier `/etc/hosts` !

On vérifie que tout va bien

```
ping deby
```

## Requêtes “inverses”

Pour obtenir le nom de domaine correspondant à une adresse IP.  
Déclaration dans des zones sur le pseudo-domaine _**in-addr.arpa**_ :

Dans le fichier `/etc/bind/named.conf.local` :

```
zone "56.168.192.in-addr.arpa" {
    type primary;
    file "/var/lib/bind/192.168.56.rev";
};

zone "16.172.in-addr.arpa" {
    type primary;
    file "/var/lib/bind/172.16.rev";
};
```

Fichier `/var/lib/bind/192.168.56.rev` :

```
$TTL 1D
@    IN   SOA   deby.stage.local.   root.stage.local (
          20251009  ; Serial
          1D        ; Refresh
          1H        ; Retry
          1W        ; Expire
          3D        ; TTL Négatif
)

     IN   NS    deby.stage.local.

200  IN   PTR   deby.stage.local.
```

Fichier `/var/lib/bind/172.16.rev` :

```
$TTL 1D
@    IN   SOA   deby.stage.local.   root.stage.local (
          20230928  ; Serial
          1D        ; Refresh
          1H        ; Retry
          1W        ; Expire
          3D        ; TTL Négatif
)

     IN   NS    deby.stage.local.

100.0 IN  PTR   srvlog.stage.local.
254.0 IN  PTR   deby.stage.local.
```

Une fois le service bind9 rechargé, on peut faire les vérifications suivantes :

```
dig -x 192.168.56.200
dig -x 172.16.0.254 +short
```

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Activer-le-transfert-des-requ%C3%AAtes-DNS-dans-BIND "Activer-le-transfert-des-requêtes-DNS-dans-BIND")Activer le transfert des requêtes DNS dans BIND

Actuellement, notre serveur DNS ne sait résoudre que les requêtes DNS pour les noms de domaines/zones qu’il gère.  
Pour qu’il puisse résoudre tous les autres noms de domaines, on active le transfert de ces requêtes à un autre serveur DNS qui connaîtra les réponses.

Dans `/etc/bind/named.conf.options`, décommenter les 3 lignes de la directive `forwarders` et remplacer l’IP `0.0.0.0`

- soit par celle fournie par le serveur DHCP de l’hyperviseur VirtualBox (= la précédente valeur de `nameserver` dans `/etc/resolv.conf`)
- soit par celle d’un serveur DNS public, par exemple celui de Quad9 : `9.9.9.9`

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#micro-TP--r%C3%A9vision-DNS "micro-TP--révision-DNS")micro-TP : révision DNS

1. Créer une 3e VM à partir de la même OVA que les précédentes
    - Avec 1 seule carte réseau, en mode “Réseau interne”, connecté à intnet (le même réseau interne que pour deby et srvlog)
2. Démarrer la VM et lui assigner l’IP `172.16.0.150`
3. Changer le hostname en `revision`
4. Vérifier que l’heure et la date du système sont bien synchronisés par NTP
5. Configurer l’authentification par clé SSH pour vous connecter à `revision`
6. Configurer `revision` pour qu’elle utilise comme serveur DNS par défaut notre serveur BIND sur `deby`
7. Ajouter une résolution de `revision.stage.local` vers la VM `revision`
8. Ajouter une résolution inverse de `172.16.0.150` vers `revision.stage.local`

**Solution**  
En commentaires, dans le code source (markdown) de cette page hedgedoc