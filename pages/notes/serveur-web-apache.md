# Présentation du serveur web Apache

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Fonctionnement-d%E2%80%99un-serveur-web "Fonctionnement-d’un-serveur-web")Fonctionnement d’un serveur web

```
Requête -------> Serveur HTTP

                     |

        <------- Fichier html
```

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Configuration-de-base-pour-Apache "Configuration-de-base-pour-Apache")Configuration de base pour Apache

Paquet `apache2`, à installer sur `deby`

`apache2.service` démarré et activé (_enabled_) par défaut, servant une page HTML d’accueil/documentation sur le port 80.

Vérifier avec :

```
sudo systemctl status apache2

sudo apt install -y curl
curl localhost
```

Et en ouvrant, dans le navigateur de votre machine hôte : [http://192.168.56.200](http://192.168.56.200/)

La configuration se trouve dans le répertoire _/etc/apache2_.

**Contextes de configuration**

**Server**

- Paramètres agissant au niveau du serveur

**VirtualHost**

- Paramètres agissant au niveau d’un hôte virtuel (= un site, en général)

**Directory**

- Paramètres agissant à partir d’un répertoire

**.htpasswd**

- Paramètres pouvant être modifiés dynamiquement dans un fichier .htpasswd.

Les fichiers html se trouvent dans un répertoire appelé Racine Web ou DocumentRoot (/var/www/html).

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Cr%C3%A9ation-d%E2%80%99un-nouveau-site-web "Création-d’un-nouveau-site-web")Création d’un nouveau site web

`/etc/apache2/sites-available/webdemo.conf`

```
<VirtualHost *:80>
        ServerName webdemo

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/webdemo

        LogLevel debug

        ErrorLog ${APACHE_LOG_DIR}/error-webdemo.log
        CustomLog ${APACHE_LOG_DIR}/access-webdemo.log combined
</VirtualHost>
```

```
sudo mkdir /var/www/webdemo
```

`/var/www/webdemo/index.html`

```
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>webdemo</title>
  </head>
  <body>
    Salut depuis deby 👋
  </body>
</html>
```

```
sudo a2ensite webdemo.conf
sudo systemctl reload apache2
```

Sur votre machine hôte, créer le nom de domaine ad hoc `webdemo` -> `192.168.56.200` :

- Sous Linux, ajouter dans `/etc/hosts` :
    
    ```
    192.168.56.200  webdemo
    ```
    
- Sous Windows, il faut éditer le fichier `C:\Windows\System32\drivers\etc\hosts` avec les droits administrateurs.
    

Avec le navigateur de votre machine hôte, ouvrir [http://webdemo](http://webdemo/)

Maintenant que le site/hôte virtuel est activé et la configuration d’Apache rechargée, on peut faire des modifications au contenu HTML de notre site, sans avoir besoin de toucher aux configuration et commandes d’Apache.

Par exemple, modifier ainsi `/var/www/webdemo/index.html` :

```
  <body>
    Bonjour depuis deby 👋
  </body>
```

Et simplement recharger [http://webdemo](http://webdemo/) dans le navigateur de votre machine hôte.

**Structure des processus apache2**

Par défaut, Apache fonctionne en mode multiprocessus (2) mutlithreadés (25) (voir le [Multi-Process Module (MPM) event](https://httpd.apache.org/docs/2.4/mod/event.html)).  
Les différentes requêtes HTTP seront traitées par les différents threads (+ léger en ressources), plutôt que par des processus Apache supplémentaires.  
On peut vérifier le MPM utilisé avec : `sudo apachectl -M | grep 'mpm'`

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Int%C3%A9gration-de-PHP "Intégration-de-PHP")Intégration de PHP

**NB**: Le mode de fonctionnement multithreadé d’Apache n’est pas compatible avec son module PHP interne (`libapache2-mod-php`). Si on l’utilise, Apache passera au [MPM prefork](https://httpd.apache.org/docs/2.4/mod/prefork.html), qui n’utilise pas de threads.  
Il est donc conseillé d’utiliser PHP en mode FPM (`php-fpm`).

```
sudo apt install -y php-fpm

# Activer la prise en charge de php-fpm dans Apache
sudo a2enmod proxy_fcgi
sudo a2enconf php8.2-fpm
sudo systemctl reload apache2
```

Si le paquet `php-fpm` ne fournissait pas déjà le fichier `/etc/apache2/conf-availble/php8.2-fpm.conf`, il faudrait ajouter les directives de configuration suivantes dans `/etc/apache2/sites-available/webdemo.conf` :

```
<FilesMatch \.php$>
    SetHandler "proxy:unix:/run/php/php8.2-fpm.sock|fcgi://localhost/"
</FilesMatch>
```

Créer un fichier PHP dans le site webdemo :

```
sudo tee /var/www/webdemo/index.php << 'EOF'
<?php
phpinfo();
?>
EOF
```

Ouvrir [http://webdemo/index.php](http://webdemo/index.php)

Pour aller plus loin, on peut optimiser php-fpm via le fichier de configuration `/etc/php/8.2/fpm/php.ini`.  
Penser à faire `sudo systemctl reload-or-restart php8.2-fpm` pour que les modifications soient appliquées.

---

## [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#Int%C3%A9gration-de-MariaDB "Intégration-de-MariaDB")Intégration de MariaDB

MariaDB, fork libre de MySQL depuis son rachat par Oracle

```
sudo apt install -y mariadb-server

sudo mariadb-secure-installation
# ou l'ancienne commande (qui est un lien symbolique vers mariadb-secure-installation)
sudo mysql_secure_installation
```

Répondre :

- “Enter current password for root (enter for none)” : (touche Entrée)
- “Switch to unix_socket authentication [Y/n]” : n
- “Change the root password? [Y/n]” : y, puis entrer 2 fois le mdp “azerty”
- “Remove anonymous users? [Y/n]” : y
- “Disallow root login remotely? [Y/n]” : y
- “Remove test database and access to it? [Y/n]” : y
- “Reload privilege tables now? [Y/n]” : y

Créer une base de données `stage` et un compte `db_user` pour intéragir avec :

```
mariadb -u root -p
Enter password: # entrer le mdp du compte root de mariadb
...

MariaDB [(none)]> create database stage;
Query OK, 1 row affected (0,000 sec)

MariaDB [(none)]> create user 'db_user'@'%' identified by 'azerty';
Query OK, 0 rows affected (0,011 sec)

MariaDB [(none)]> grant show databases on *.* to db_user;
Query OK, 0 rows affected (0,010 sec)

MariaDB [(none)]> grant all on stage.* to db_user;
Query OK, 0 rows affected (0,011 sec)

MariaDB [(none)]> exit
Bye
```

Vérifier que la connexion avec le compte `db_user` fonctionne et qu’il a bien les privilèges voulu :

```
mariadb -u db_user -p
Enter password: # entrer le mdp du compte db_user de mariadb
...

MariaDB [stage]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| stage              |
| sys                |
+--------------------+
5 rows in set (0,000 sec)

MariaDB [(none)]> use stage;
Database changed

MariaDB [stage]> show tables;
Empty set (0,000 sec)

MariaDB [stage]> create table test (
    -> id int primary key auto_increment,
    -> contenu varchar(255)
    -> );
Query OK, 0 rows affected (0,037 sec)

MariaDB [stage]> show tables;
+-----------------+
| Tables_in_stage |
+-----------------+
| test            |
+-----------------+
1 row in set (0,000 sec)

MariaDB [stage]> exit
Bye
```

Créer un fichier `db.php` qui va se connecter à la base de données `stage` avec le compte `db_user`, et afficher un message :

```
sudo apt install -y php-mysql
# Pas besoin de recharger apache2.service

sudo tee /var/www/webdemo/db.php << 'EOF'
<?php
  try {
    $connect = new PDO("mysql:dbname=stage;host=localhost", "db_user", "azerty");
    echo "Connexion OK";
  } catch (PDOException $e) {
    print "Erreur de connexion MariaDB : " . $e->getMessage() . "<br/>";
    die();
  }
?>
EOF
```

Ouvrir [http://webdemo/db.php](http://webdemo/db.php)

Résultat attendu : Connexion OK