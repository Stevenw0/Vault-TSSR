# Partage de fichiers via le réseau

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Service-NFS "Service-NFS")Service NFS

NFS : Network FileSystem (Origine SUN - 1984)

Permet le partage de répertoire au sein d’un réseau IP.

Jusqu’à la norme NFSv4, l’utilisation de NFS était à limiter au réseau local.

Aujourd’hui la norme NFSv4 a introduit le chiffrement et l’authentification Kerberos. De plus NFv4 n’utilise qu’un seul port – fixe – 2049/TCP.

**Installation du paquet nfs-kernel-server**

```
sudo apt install -y nfs-kernel-server
```

**Configuration des répertoires “exportables”**

Cette configuration se fait dans le fichier _/etc/exports_.

On va par exemple exporter le répertoire /usr/local/data pour le réseau 172.16.0.0/16 et en r/w.

On créer le dossier avec un fichier d’exemple :

```
sudo mkdir /usr/local/data
echo "Fichier d'exemple" | sudo tee /usr/local/data/exemple.txt
```

On ajoute donc la ligne suivante dans `/etc/exports` :

```
/usr/local/data   172.16.0.0/16(rw,no_subtree_check,no_root_squash)
```

- `rw` : dossier accessible en lecture et écriture
- `no_subtree_check` : pas de vérification des droits d’accès des sous-dossier du dossier partagé
    - “subtree_check and no_subtree_check enables or disables a security verification that subdirectories a client attempts to mount for an exported filesystem are ones they’re permitted to do so.” Source : [https://documentation.ubuntu.com/server/how-to/networking/install-nfs/](https://documentation.ubuntu.com/server/how-to/networking/install-nfs/)
- `no_root_squash` : l’utilisateur root sur les machines clientes pourra faire des opérations comme s’il était root sur la machine serveur (Attention !).

Autre options :

- `sync`/`async` : attendre ou non que les données écrites le soit complètement, avant d’envoyer la réponse à la requête réseau. `sync` favorise donc l’intégrité des données et `async` favorise la rapidité
- `fsid=0` : pour que les clients n’aient pas à connaître le chemin du dossier sur le serveur

Une fois le fichier modifié, on réactualise le service par

```
sudo exportfs -a
# ou
sudo systemctl reload nfs-kernel-server
```

Vérification que le dossier est bien “exporté” par le serveur NFS

```
sudo showmount -e
```

**Configuration du client NFS srvlog**

Sur srvlog, installation du paquet _**nfs-common**_ :

```
sudo apt install -y nfs-common
```

Montage manuel du partage NFS

```
sudo mount [-t nfs] deby:/usr/local/data /mnt
```

Pour un montage automatique, on ajoute la ligne suivante dans _/etc/fstab_ :

```
deby:/usr/local/data   /mnt    nfs    defaults
```

---

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Service-Samba "Service-Samba")Service Samba

Permet le partage de répertoire selon le protocole SMB/CIFS, à destination de client Windows.

Le serveur samba s’installe par :

```
sudo apt install -y samba
```

Il a y deux services avec samba :

- _**smbd**_ : gestion des partages de répertoires et d’imprimantes
- _**nmbd**_ : gestion de résolution NetBios

La configuration est dans le fichier /etc/samba/smb.conf.

```
sudo mv /etc/samba/smb.conf /etc/samba/smb.conf.default
```

Configuration initiale de découverte pour /etc/samba/smb.conf :

```
[global]
        Netbios Name = Deby
        WorkGroup = STAGE

[documents]
        Path = /usr/local/data
        Guest ok = yes
        Comment = Documents Partagés
```

**Accéder à un partage Samba**

Sur `srvlog` :

```
sudo apt install -y smbclient cifs-utils
```

Lister les partages Samba accessibles sans authentification sur `deby` :

```
smbclient -N -L 172.16.0.254
```

Parcourir interactivement le contenu du partage `documents` sur `deby` :

```
smbclient -N //172.16.0.254/documents
```

Dans une situation plus réaliste, l’accès sans authentification aux partage ne serait pas permis.  
Il est alors nécessaire de créer des comptes Samba pour accéder aux partages. Ces comptes doivent être adossés à des comptes système :

Sur `deby` :

```
sudo useradd -m -s /sbin/nologin john

sudo smbpasswd -a john
```

Sur `srvlog`, monter le partage `documents` dans `/mnt/` :

```
sudo mount -t cifs //172.16.0.254/documents /mnt/ -o username=john
```