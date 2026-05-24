# Initiation aux réseaux virtuels privés (VPN)

**Présentation OpenVPN**  
Caractéristiques de la solution de tunnel OpenVPN :

- Utilisation de TLS
- Utilisation de UDP ou TCP
- Tunnel applicatif et non noyau
- Tunnel point-à-point, client-à-site, site-à-site ou bridgé (2 derniers types de tunnels non abordé dans cette formation)
- Authentification par clé partagée ou par certificat (PKI, _Public-Key Infrastructure_)

**Installation**  
Sur `deby` et `srvlog` :

```
sudo apt install -y openvpn
```

**Fichiers de configuration et services**  
Les fichiers de configuration et les services sont :

- Serveur (`deby`)
    - Configuration: `/etc/openvpn/server.conf`
    - Service : `openvpn@server`
- Client (`srvlog`)
    - Configuration : `/etc/openvpn/client.conf`
    - Service : `openvpn@client`

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Tunnel-point-%C3%A0-point-%C3%A0-cl%C3%A9-partag%C3%A9e "Tunnel-point-à-point-à-clé-partagée")Tunnel point-à-point à clé partagée

Le chiffrement statique, c’est-à-dire avec un clé partagée (Pre-Shared Key), est déprécié depuis OpenVPN 2.6 (version d’OpenVPN fournie dans Debian 12 et 13) et sera supprimé dans OpenVPN 2.8, car jugé pas suffisamment sécurisé, notamment à cause de l’absence de la propriété de confidentialité persistante (_prefect forward secrecy_) : [https://community.openvpn.net/Pages/Deprecated options#option-secret-status-deprecated-pending-removal](https://community.openvpn.net/Pages/Deprecated%20options#option-secret-status-deprecated-pending-removal)

OpenVPN recommande d’utiliser à la place le mode de chiffrement PKI, optionnellement avec l’option `peer-fingerprint` pour éviter la complexité de la mise en place d’une vraie PKI.

On va créer un tunnel point-à-point, en UDP (port 1194), entre `deby` (IP `10.9.0.1` à l’intérieur du tunnel) et `srvlog` (IP `10.9.0.2` à l’intérieur du tunnel).  
`deby` sera le serveur OpenVPN et `srvlog` sera la client OpenVPN.

Création de la clé partagée (sur `deby`) :

```
sudo openvpn --genkey secret /etc/openvpn/secret.key
# vérifier que les accès à /etc/openvpn/secret.key sont restreints au minimum (propriétaire root, droits lecture/écriture seulement pour le propriétaire)
```

Une fois créé, copier la clé dans le répertoire `/etc/openvpn/` du ou des clients.  
Sur `deby` :

```
sudo scp /etc/openvpn/secret.key stagiaire@172.16.0.100:~/
```

Sur `srvlog` :

```
sudo mv secret.key /etc/openvpn/
sudo chown root:root /etc/openvpn/secret.key
```

Configuration du serveur (`deby`, IP `10.9.0.1` à l’intérieur du tunnel) :

```
sudo tee /etc/openvpn/server.conf << EOF
proto udp4
port 1194
dev tun
ifconfig 10.9.0.1 10.9.0.2

secret /etc/openvpn/secret.key
cipher AES-256-CBC
EOF
```

Configuration du client (`srvlog`, IP `10.9.0.2` à l’intérieur du tunnel) :

```
sudo tee /etc/openvpn/client.conf << EOF
remote 172.16.0.254
proto udp4
port 1194
dev tun
ifconfig 10.9.0.2 10.9.0.1

secret /etc/openvpn/secret.key
cipher AES-256-CBC
EOF
```

Redémarrage des services server et client

```
sudo systemctl restart openvpn@server
sudo systemctl restart openvpn@client
```

Remarques :

- les services `openvpn@{server,client}` n’ont pas de commande `reload`
- pour le fichier de configuration `/etc/openvpn/exemple.conf`, le service systemd correspondant est `openvpn@exemple`

Vérification que le VPN fonctionne bien :  
Depuis `deby`, pinger `srvlog` avec son adresse IP dans le tunnel :

```
stagiaire@deby:~$ ping -c 5 10.9.0.2
```

Depuis `srvlog`, pinger `deby` avec son adresse IP dans le tunnel :

```
stagiaire@srvlog:~$ ping -c 5 10.9.0.1
```

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Tunnel-point-%C3%A0-point-%C3%A0-certificats "Tunnel-point-à-point-à-certificats")Tunnel point-à-point à certificats

Principe

- Certificat pour authentifier le serveur
- Certificat pour authentifier le client

Nécessité d’une PKI (_Public-Key Infrastructure_) → utilisation du paquet `easy-rsa` (installé comme dépendance d’`openvpn`)

On va faire ceci :

1. Créer un authorité de certification (_CA, ou Certification Authority_) qui signera les certificats du serveur et du client, pour attester que tel certificat identifie telle machine.
2. Créer un certificat pour `deby` (le serveur OpenVPN) et le faire signer par la CA.
3. Créer des paramètres cryptographiques pour la partie TLS des connexions gérées par le serveur OpenVPN.
4. Créer un certificat pour `srvlog` (le client OpenVPN) et le faire signer par la CA.
5. Adapter les configurations OpenVPN du serveur et du client, pour utiliser les certificats.

**Différences environnements de formation/production**  
En production, pour des raisons de sécurité, il ne faut pas :

- créer et stocker les fichier de l’Autorité de Certification (_CA, Certification Authority_) sur le serveur OpenVPN, car la CA est censée être une entité tierce, distincte du serveur et des clients VPN
- générer les différentes clés de chiffrement dans une VM, car elle n’ont pas accès à une bonne source d’entropie et elles peuvent être manipulées par l’hyperviseur

Création de la PKI sur `deby`

```
make-cadir ~/easy-rsa
cd ~/easy-rsa/
./easyrsa init-pki
./easyrsa build-ca
```

Réponses aux questions de `build-ca` :

- passphrase pour la clé de la CA : azerty
- passphrase pour PEM (bug, la passphrase ne devrait pas nous être re-demandée) : azerty
- Common Name (CN) : Deby CA

Certificat (public) de l’Autorité de Certification “Deby CA” : `~/easy-rsa/pki/ca.crt`  
Clé privée correspondante de “Deby CA” : `~/easy-rsa/pki/private/ca.key`

---

Générer une paire de clés et une demande de signature de certificat (CSR, _Certificate Signature Request_) pour `deby` :

```
./easyrsa gen-req deby
```

Réponses aux questions de `gen-req` :

- passphrase pour la clé de `deby` : azerty
- Common Name (CN) : (laisser la valeur par défaut, qui doit être “deby”)

Clé privée : `~/easy-rsa/pki/private/deby.key`  
Fichier de demande de signature de certificat : `~/easy-rsa/pki/reqs/deby.req`

Générer le certificat pour `deby`, grâce à sa CSR `deby.req` :

```
./easyrsa sign-req server deby
```

Certificat pour `deby` : `~/easy-rsa/pki/issued/deby.crt`

Afficher les informations contenues dans le certificat `~/easy-rsa/pki/issued/deby.crt` :

```
stagiaire@deby:~/easy-rsa$ ./easyrsa show-cert deby
...
* Notice:

  Showing cert details for 'deby'.
  This file is stored at:
  * /home/stagiaire/easy-rsa/pki/issued/deby.crt

Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            f1:32:8d:1e:ab:7d:5b:69:59:d2:94:57:35:b7:22:b1
        Signature Algorithm: sha256WithRSAEncryption
        Issuer:
            commonName                = Deby CA
        Validity
            Not Before: Oct 26 19:04:32 2025 GMT
            Not After : Jan 29 19:04:32 2028 GMT
        Subject:
            commonName                = deby
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Subject Key Identifier: 
                25:90:71:C9:60:BA:8E:68:46:C5:5C:77:EC:C4:B9:0C:F9:7D:6C:9E
            X509v3 Authority Key Identifier: 
                keyid:C7:AD:C3:96:BD:E1:ED:C6:37:A6:71:8A:AF:C9:9B:6C:57:05:29:45
                DirName:/CN=Deby CA
                serial:08:1E:F4:50:66:04:9D:6D:64:96:77:6E:D6:2A:D3:37:D3:57:79:85
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication
            X509v3 Key Usage: 
                Digital Signature, Key Encipherment
            X509v3 Subject Alternative Name: 
                DNS:deby
```

---

Générer les paramètres Diffie-Hellman (aka DH, un algorithme d’échange de clés cryptographiques), utilisés pendant la phase de _handshake_ de TLS, entre le serveur et un client OpenVPN :

```
./easyrsa gen-dh
```

Fichier de paramètres DH : `~/easy-rsa/pki/dh.pem`

Génération de la clé statique de signature pour le HMAC de TLS :

```
sudo openvpn --genkey secret pki/private/tls-hmac.key
sudo chown stagiaire:stagiaire pki/private/tls-hmac.key
```

---

Générer le certificat pour `srvlog` :  
Sur `srvlog` :

```
make-cadir ~/easy-rsa
cd ~/easy-rsa/
./easyrsa init-pki
./easyrsa gen-req srvlog
# entrer comme passphrase : azerty
scp pki/reqs/srvlog.req 172.16.0.254:~/easy-rsa/pki/reqs/
mkdir pki/issued
```

Sur `deby` :

```
./easyrsa sign-req client srvlog
scp pki/issued/srvlog.crt 172.16.0.100:~/easy-rsa/pki/issued/
```

---

Sur `deby`

```
sudo cp ~/easy-rsa/pki/ca.crt /etc/openvpn/server/
sudo cp ~/easy-rsa/pki/issued/deby.crt /etc/openvpn/server/
sudo cp ~/easy-rsa/pki/private/deby.key /etc/openvpn/server/
sudo cp ~/easy-rsa/pki/dh.pem /etc/openvpn/server/
sudo cp ~/easy-rsa/pki/private/tls-hmac.key /etc/openvpn/server/

sudo systemctl stop openvpn@server
sudo mv /etc/openvpn/server.conf /etc/openvpn/server-ptp-psk.conf
sudo tee /etc/openvpn/server.conf << EOF
proto udp4
port 1194
dev tun
ifconfig 10.9.0.1 10.9.0.2

# Chiffrement PKI + chiffrement/authentification TLS
tls-server
ca server/ca.crt
cert server/deby.crt
key server/deby.key
dh server/dh.pem
#tls-auth server/tls-hmac.key 0 # authentification TLS seulement
tls-crypt server/tls-hmac.key # authentification + chiffrement TLS
remote-cert-tls client # Sécurisation contre attaque MitM : vérifie la valeur de keyUsage du certificat des clients
EOF

sudo systemctl start openvpn@server
sudo systemd-tty-ask-password-agent
# entrer la passphrase de /etc/openvpn/server/deby.key

cd ~/easy-rsa/pki/
scp ~/easy-rsa/pki/{ca.crt,private/tls-hmac.key} 172.16.0.100:~/easy-rsa/pki/
```

Sur `srvlog`

```
sudo cp ~/easy-rsa/pki/{ca.crt,private/srvlog.key,issued/srvlog.crt,tls-hmac.key} /etc/openvpn/client/

sudo systemctl stop openvpn@client
sudo mv /etc/openvpn/client.conf /etc/openvpn/client-ptp-psk.conf
sudo tee /etc/openvpn/client.conf << EOF
remote 172.16.0.254
proto udp4
port 1194
dev tun
ifconfig 10.9.0.2 10.9.0.1

# Chiffrement PKI + chiffrement/authentification TLS
tls-client
ca client/ca.crt
cert client/srvlog.crt
key client/srvlog.key
#tls-auth client/tls-hmac.key 1 # authentification TLS seulement
tls-crypt client/tls-hmac.key # authentification + chiffrement TLS
remote-cert-tls server # Sécurisation contre attaque MitM : vérifie la valeur de keyUsage du certificat du serveur
EOF
sudo systemctl start openvpn@client
sudo systemd-tty-ask-password-agent
# entrer la passphrase de /etc/openvpn/server/deby.key
```

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Configuration-client-%C3%A0-site "Configuration-client-à-site")Configuration client-à-site

Objectif : faire en sorte que `srvlog` puisse communiquer avec n’importe quelle machine dans le sous-réseau 192.168.56.0/24, comme si elle était connectée dans ce sous-réseau, alors qu’en réalité elle s’y connecte à distance, via `deby` qui se comporte en tant que server et routeur VPN.

TODO :

- ajouter keepalive [https://manpages.debian.org/bookworm/openvpn/openvpn.8.en.html#keepalive](https://manpages.debian.org/bookworm/openvpn/openvpn.8.en.html#keepalive)

Sur `deby` :

```
sudo systemctl stop openvpn@server
sudo mv /etc/openvpn/server.conf /etc/openvpn/server-ptp-pki.conf

sudo tee /etc/openvpn/server.conf << EOF
proto udp4
port 1194
dev tun
#mode p2p # default
mode server
server 10.9.0.0 255.255.255.0
# Routage clients → serveur
push "route 192.168.56.0 255.255.255.0"

# Chiffrement PKI + chiffrement/authentification TLS
tls-server
ca server/ca.crt
cert server/deby.crt
key server/deby.key
dh server/dh.pem
#tls-auth server/tls-hmac.key 0 # authentification TLS seulement
tls-crypt server/tls-hmac.key # authentification + chiffrement TLS
remote-cert-tls client # Sécurisation contre attaque MitM : vérifie la valeur de keyUsage du certificat des clients
#data-ciphers AES-256-GCM:AES-128-GCM:?CHACHA20-POLY1305 # defaults
EOF

#sudo mkdir /etc/openvpn/ccd/
#sudo tee /etc/openvpn/ccd/srvlog << EOF
#ifconfig-push 10.9.0.1 10.9.0.2
#EOF

sudo systemctl start openvpn@server
sudo systemd-tty-ask-password-agent
```

Sur `srvlog` :

```
sudo systemctl stop openvpn@client
sudo mv /etc/openvpn/client.conf /etc/openvpn/client-ptp-pki.conf

sudo tee /etc/openvpn/client.conf << EOF
remote 172.16.0.254
proto udp4
port 1194
dev tun
pull

# Chiffrement PKI + chiffrement/authentification TLS
tls-client
ca client/ca.crt
cert client/srvlog.crt
key client/srvlog.key
#tls-auth client/tls-hmac.key 1 # authentification TLS seulement
tls-crypt client/tls-hmac.key # authentification + chiffrement TLS
remote-cert-tls server # Sécurisation contre attaque MitM : vérifie la valeur de keyUsage du certificat du serveur
#data-ciphers AES-256-GCM:AES-128-GCM:?CHACHA20-POLY1305 # defaults
EOF

sudo systemctl start openvpn@client
sudo systemd-tty-ask-password-agent
```

**Accès au réseau 192.168.56.0/24 depuis `srvlog` via le tunnel VPN**  
Sur `deby`, dans `/etc/openvpn/server.conf`, ajouter la ligne suivante :

```
push "route 192.168.56.0 255.255.255.0"
```

**Bonus : router tout le trafic réseau de `srvlog` via le serveur VPN**  
Si on le désire, on peut obtenir un fonctionnement similaire aux services VPN commerciaux (= le serveur VPN sert juste aux clients à accéder à Internet via une adresse IP différente de celle de leur FAI).  
Pour ce faire, sur `deby`, dans `/etc/openvpn/server.conf`, commenter les lignes `push "route ..."` et ajouter la ligne suivante :

```
push "redirect-gateway def1"
```