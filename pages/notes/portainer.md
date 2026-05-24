# 🧠 Contenu principal



,

**Portainer CE est une application gratuite et open source destinée à simplifier l'administration des conteneurs Docker et des environnements basés sur des micro-services. Cette solution d'administration accessible à partir d'un navigateur Web se veut à la fois pratique et conviviale. Au-delà de la présentation de cette solution, cet article explique comment installer Portainer et comment l'utiliser pour administrer ses conteneurs Docker.**

Bien que cet article se concentre sur la version **[Portainer CE](https://github.com/portainer/portainer)** (Community Edition), vous devez savoir qu'il existe une version destinée aux entreprises: [**Portainer BE** (Business Edition)](https://www.portainer.io/solutions/portainer-for-enterprise). Elle offre un accès prioritaire au support et des fonctionnalités supplémentaires, comme l'intégration avec des annuaires d'entreprises (AD, OpenLDAP) et la gestion des accès avec des rôles (RBAC). La version CE est populaire auprès de la communauté IT: près de 500 000 personnes l'utilisent régulièrement.

La bonne nouvelle, c'est que **Portainer Business Edition est gratuit jusqu'à trois nœuds**. Donc, si cela vous intéresse, obtenez une licence gratuitement en complétant le formulaire disponible sur [cette page](https://www.portainer.io/take-3).



> **Remarque** : Portainer s'adresse aussi aux utilisateurs de **Kubernetes** et **Podman**, il n'est pas limité à **Docker**.


## Les fonctionnalités de Portainer

Commençons par lister les fonctionnalités clés de Portainer CE, cela vous permettra de mieux comprendre l'intérêt de la solution:

- Administration via interface Web
- Gestion de plusieurs environnements (Docker Standalone, Docker Swarm, Kubernetes, etc.)
- Déploiement d’applications via des **stacks** Docker Compose et des modèles
- Gestion complète des conteneurs Docker: containers, images, volumes, networks, etc.
- Visualisation précise de l’état des ressources: CPU, RAM, stockage, statuts des conteneurs
- Actions quotidiennes sur les conteneurs: démarrer, arrêter, redémarrer, logs, etc.
- Éditeur de fichiers Docker Compose intégré
- Gestion des utilisateurs, des groupes et des équipes
- Gestion des registres d'images, avec l'intégration native du Docker Hub

## Portainer vs Docker Desktop

Sur le papier, Portainer et Docker Desktop peuvent sembler proches, car ces deux solutions ont un point commun: elles permettent de gérer les conteneurs Docker depuis une interface graphique. Pourtant, il y a des différences notables, que ce soit dans le mode d'installation ou la finalité de l'application en elle-même.

Ce tableau récapitulatif devrait vous permettre de mieux comprendre **les différences entre Docker Desktop et Portainer**.

| Caractéristiques | Docker Desktop | Portainer |
| --- | --- | --- |
| Principe | Application lourde pour gérer les conteneurs Docker en local (Windows/Mac) | Console Web pour piloter des environnements Docker/K8s (local et distant) |
| Ce qu’il embarque | Le moteur Docker + Docker Compose + UI | Uniquement une UI, donc il ne fournit pas Docker lui-même. |
| Cible principale | Développeur local | Admins qui pilotent des nœuds Docker (nodes), que ce soit en production ou pour un Home Lab. |
| Mode d'installation | Application à installer en local sur une machine | L'outil est exécuté dans un container et s'utilise à partir d'une interface web accessible via un navigateur |
| Scalabilité | Pas fait pour gérer de multiple nodes distants | Oui, car vous pouvez ajouter des instances Docker (SSH/agent/K8s) |

## Installation de Portainer sur Debian

### Les prérequis

Dans cet exemple, Portainer est installé par l'intermédiaire d'un conteneur Docker exécuté sur un hôte Linux. Vous pouvez envisager une installation via Windows Container ou Docker Desktop / WSL.

Vous devez donc disposer d'une instance Docker prête à l'emploi. Si besoin, voici un tutoriel sur l'installation de Docker:

- [Installation de Docker sur Debian](https://www.it-connect.fr/installation-pas-a-pas-de-docker-sur-debian-11/ "Installation pas à pas de Docker sur Debian 13")

### Préparer les répertoires

Connectez-vous sur votre machine et créez un répertoire pour accueillir les données du projet Portainer. Comme à mon habitude, j'ai créé un sous-dossier avec le nom de l'application sous **`/opt/docker-compose`**. Voici le dossier créé:

```
sudo mkdir /opt/docker-compose/portainer
```

Puis, créez un sous-dossier à l'intérieur afin de stocker les données de Portainer (persistance):

```
sudo mkdir /opt/docker-compose/portainer/portainer_data
```

L'arborescence de dossiers étant prête, vous pouvez passer à la suite.

### Le Docker Compose de Portainer

Positionnez-vous à l'intérieur du répertoire **`/opt/docker-compose/portainer`** et téléchargez le fichier Docker Compose proposé par Portainer. Ceci nous évite de le construire nous-même. Ici, le fichier téléchargé est nommé **`portainer-compose.yaml`**, mais vous pouvez tout à fait le nommer **`docker-compose.yaml`**.

```
cd /opt/docker-compose/portainer
sudo curl -L https://downloads.portainer.io/ce-lts/portainer-compose.yaml -o portainer-compose.yaml
```


Éditez le fichier téléchargé, car nous devons y apporter certaines modifications.

```
sudo nano portainer-compose.yaml
```

La lecture de ce fichier met en évidence plusieurs informations importantes:

- L'image **Portainer CE LTS** sera utilisée au sein d'un conteneur nommé **`portainer`**. [Cette page](https://docs.portainer.io/start/requirements-and-prerequisites#portainer-community-edition-ce) mérite d'être consultée, car elle indique la compatibilité entre les versions de Portainer et les versions de Docker. Il existe aussi des versions STS de Portainer (Short-Term Support).
- Le conteneur stockera ses données dans le dossier local **`portainer_data`** et il aura accès au socket Docker. Mais, **attention** : pensez à indiquer **`./portainer_data`** à la place de **`portainer_data`** pour bien utiliser le dossier créé précédemment. Dans ce cas, la section **`volumes:`** en fin de fichier est facultative.
- L'interface web de Portainer sera accessible sur le port **`9443`**. Vous pouvez **supprimer la ligne** avec le port **`8000:8000`** si vous n'envisagez pas d'utiliser la fonction d'agent Edge. Cela évite d'exposer ce port inutilement.

> **Note** : l'Edge Agent de Portainer permet à un serveur Portainer central de gérer à distance des hôtes Docker/Kubernetes situés derrière des NAT/firewalls, via un canal de communication sortant et sécurisé depuis l’hôte.



Une fois le fichier édité, vous pouvez enregistrer et fermer.

### Déployer Portainer

Toujours à partir de la ligne de commande, lancez la construction du conteneur Portainer. L'image sera téléchargée, puis le conteneur créé et exécuté.

```
sudo docker compose -f portainer-compose.yaml up -d
```


Vous pouvez vérifier l'état du conteneur avant de continuer:

```
sudo docker ps
```

### Première connexion à Portainer

Pour accéder à l'interface de Portainer, vous n'avez qu'à ouvrir un navigateur et ouvrir l'adresse suivante: **`https://<ip de l'hôte Docker>:9443`**. Vous devriez arriver sur une page similaire à celle ci-dessous, vous pouvez contourner l'avertissement lié au certificat auto-signé.



L'assistant " **New Portainer installation** " s'affiche alors à l'écran. Vous devez remplir le formulaire pour **créer le compte administrateur principal** de votre instance Portainer. Je vous encourage à utiliser un nom plus original que **`admin`**. Ce compte disposera de tous les privilèges sur l'application Portainer.



Une fois sur l'interface de Portainer et connecté à votre compte, vous n'aurez qu'à cliquer sur " **Get Started** " pour valider la connexion entre Portainer et l'instance Docker locale.



La page d'accueil affiche les environnements auxquels Portainer est lié. Ici, on peut voir qu'il y a uniquement l'instance Docker locale. Ce qui est déjà très bien pour débuter. La fiche associée à chaque environnement donne des informations sur sa configuration, le nombre de containers, le nombre d'images, etc. Pour gérer les conteneurs de cet hôte, il convient de cliquer sur le bouton " **Live connect** ".



Le menu latéral sert à naviguer dans les différentes briques de l'instance Docker connectée: stacks, containers, images, réseau, volumes, etc....



## Utilisation de Portainer CE

### Découverte de l'interface

La gestion des conteneurs via Portainer s'effectue à plusieurs niveaux: **Stacks** et **Containers**. L'intérêt des stacks, c'est qu'elles mettent en évidence les conteneurs Docker connectés ensemble et rattachés à une même application, ce qui est **le reflet de vos configurations Docker Compose**.

Vous pouvez **créer une nouvelle stack (via Docker Compose)** directement à partir de l'interface Web. Le fait de créer la stack depuis Portainer offre des capacités de gestion supplémentaires, en comparaison d'une stack créée depuis la ligne de commande.



Si vous basculez sur l'entrée " **Containers** " dans le menu latéral, vous aurez une vue d'ensemble de l'état de tous les conteneurs. Bon, c'est un peu le chaos sur l'hôte Docker utilisé dans cet exemple, car il me sert uniquement à des fins de tests. Vous pouvez facilement visualiser l'état de santé des conteneurs, et notamment identifier ceux qui ont un problème.

Différents boutons d'action sont disponibles pour arrêter, démarrer, tuer ou redémarrer un ou plusieurs conteneurs Docker. Vous pouvez aussi supprimer un conteneur ou en ajouter un nouveau, le tout depuis l'interface Web. Si vous cliquez sur un conteneur, vous obtenez **des détails sur sa configuration** (Image, EntryPoint, etc.), les **variables d'environnement** et les **labels**.



Portainer CE permet aussi une gestion complète des images, des volumes et des réseaux. Cette vue d'ensemble est précieuse pour faire le tri sur son instance Docker, sans recourir aux commandes Docker. Dans le cas des images, celles qui ne sont pas utilisées sont associées à l'étiquette " **Unused** ". Vous pouvez aussi importer une image existante ou construire une image directement à partir de Portainer.



Par ailleurs, la section " **Events** " recense les derniers événements liés à vos conteneurs. Concrètement, à chaque fois que Docker crée, démarre, arrête, supprime, un conteneur, ça génère un nouvel évènement, tout comme les commandes **`exec`** exécutées au sein des conteneurs. On peut considérer cette section comme la télémétrie brute de Docker.



### Templates Portainer: le catalogue d'applications

La fonctionnalité de modèles (Templates) de Portainer a une véritable valeur ajoutée: déployer des conteneurs applicatifs à partir de modèles prêts à l'emploi. C'est encore plus pratique pour ceux qui ont l'option " **Copy as custom** ", car vous avez la main sur plus de paramètres, y compris pour personnaliser le code Docker Compose. Avant d'entamer le déploiement d'un modèle, il est tout de même préférable de créer un réseau auquel rattacher le conteneur.



> **Note** : vous pouvez créer vos propres templates à partir de vos stacks.

### Les paramètres de Portainer

Il y a aussi des paramètres pour l'administration de la plateforme Portainer en elle-même. Vous pouvez accomplir les tâches suivantes:

- Créer de nouveaux utilisateurs et groupes
- Ajouter un nouvel environnement (Docker, Docker Swarm, Podman, Kubernetes, ACI)
- Créer des groupes d'environnements
- Créer des tags
- Ajouter de nouveaux registres pour les images, par défaut, il n'y a que le Docker Hub
- Consulter les notifications
- Configurer l'authentification, y compris le SSO avec OAuth


### Créer une Stack Portainer

Pour terminer, nous allons voir **comment créer une nouvelle stack dans Portainer** pour déployer une application via Docker Compose. À titre d'exemple, nous prendrons l'application **PrivateBin**, déjà présentée dans cet article: [PrivateBin: comment déployer votre propre PasteBin sur un serveur?](https://www.it-connect.fr/privatebin-comment-deployer-votre-propre-pastebin-sur-un-serveur/)

Cliquez sur " **Stacks** " dans le menu latéral, puis sur le bouton " **Add stack** ".



Vous devez nommer cette stack, comme ici **`app-privatebin`**. Le nom doit être en minuscules et tous les caractères ne sont pas autorisés. Vous devez ensuite choisir une méthode de build:

- **Web editor**: vous rédigez ou copiez-collez votre code Docker Compose directement en ligne.
- **Upload** : vous chargez un fichier Docker Compose (YAML) depuis votre ordinateur local.
- **Repository** : vous allez chercher les informations sur un dépôt Git.
- **Custom template**: vous sélectionnez l'un de vos templates personnalisés.


Ici, nous optons pour l'éditeur en ligne avec le code présenté ci-dessous. Adaptez à votre contexte et à votre application, notamment car ici je m'appuie sur un réseau existant. **J'attire votre attention sur la gestion des volumes.**

Quand je gère mes conteneurs en ligne de commande, j'ai l'habitude de créer un dossier par stack sous **`/opt/docker-compose/`**, d'y placer mon fichier Docker Compose et de créer à l'intérieur les dossiers pour la persistance des données. Ainsi, dans le cas de PrivateBin, je précise ceci: **.`/data:/srv/data`**. Sauf que dans le contexte de Portainer, vous devez **préciser un chemin absolu** depuis la racine pour bien cibler ce dossier, ce qui donne: **`/opt/docker-compose/app-privatebin/data:/srv/data`**. Sinon, Portainer va créer les volumes sous **`/var/lib/docker/volumes/`**.

De plus, vous devez **créer manuellement cette structure (car elle est externe à Docker Compose)** donc il est nécessaire de manipuler le Terminal. C'est le prix à payer pour utiliser Portainer tout en conservant une bonne organisation des volumes.

Voici l'exemple utilisé:

```
services:
  privatebin:
    image: privatebin/nginx-fpm-alpine
    restart: always
    read_only: true
    ports:
      - "8585:8080"
    volumes:
      - /opt/docker-compose/app-privatebin/data:/srv/data
      - /opt/docker-compose/app-privatebin/conf.php:/srv/cfg/conf.php:ro

networks:
  nginx-net:
    external: true
    name: nginx-net
```

Ce qui donne:



D'autres options sont disponibles, notamment pour définir les variables d'environnement. Ce n'est pas toujours nécessaire, cela dépend de l'application. **Créez la stack et patientez un instant.** La nouvelle stack nommée **`app-privatebin `** est bien visible:



Dans les détails de la stack, vous pouvez éditer le fichier Docker Compose et obtenir des détails sur les conteneurs associés à cette stack.



L'application, quant à elle, est bien accessible, comme vous pouvez le constater.



Si vous modifiez la stack directement en ligne, vous pouvez facilement redéployer le conteneur avec vos modifications. C'est pratique de pouvoir le faire directement via Portainer en quelques clics.

## Conclusion

Portainer apporte une vraie couche de confort pour administrer Docker (ou Docker Swarm ou Kubernetes). Sans être allergique à la ligne de commande, il permet de s'éloigner des commandes CLI pour des opérations quotidiennes. Il ne remplace pas Docker lui-même, car il vient se greffer dessus pour le piloter. L'avantage étant de pouvoir rapidement visualiser les conteneurs, déployer des stacks, explorer les logs ou encore surveiller l’activité de ses services. Que ce soit en production ou pour un Home Lab, Portainer est une solution intéressante si vous travaillez souvent avec Docker.

Vous pouvez approfondir le sujet en consultant la documentation:

- [Documentation de Portainer](https://docs.portainer.io/)

## FAQ

#### Portainer est-il gratuit?

**Oui**, Portainer **Community Edition** (CE) est **gratuit** et **open source**. Une version **Business Edition** existe avec des fonctionnalités avancées. Elle est également gratuite dans la limite de **3 nœuds** à administrer.

#### Portainer remplace-t-il Docker Desktop?

**Non. Portainer n’est pas un moteur Docker et il n'en intègre pas.** Il se connecte à un moteur déjà présent, notamment Docker ou Docker Desktop, pour en faciliter l’administration. D'autres environnements comme Kubernetes, Docker Swarm et même Podman sont pris en charge.

#### Quelles sont les alternatives à Portainer?

Portainer n'est pas la seule solution capable de vous faciliter la vie pour administrer vos conteneurs Docker. On peut citer **[Dockge](https://github.com/louislam/dockge)**, qui est plus léger et pleinement orienté vers la gestion de stack Docker Compose. Dans un style différent, il existe aussi **[LazyDocker](https://github.com/jesseduffield/lazydocker)**, une interface minimaliste directement accessible depuis le Terminal que vous pouvez utiliser pour gérer vos conteneurs Docker.

#### Peut-on installer Portainer sur un NAS Synology?

**Oui**. Même si le système d'exploitation **DSM** intègre une console de gestion des conteneurs nommée **Container Manager**, vous pouvez tout à fait déployer Portainer CE. Ainsi, vous pourrez **gérer les conteneurs exécutés sur votre NAS par l'intermédiaire de Portainer**.

#### Comment accéder à Portainer après son installation?

Une fois Portainer déployé, l’accès se fait depuis votre navigateur via l’adresse IP de votre serveur suivie du port publié (port exposé côté hôte). Par défaut, l’interface HTTPS écoute sur le port 9443. L'URL suit donc la structure suivante: `**https://<IP_du_serveur>:9443**`. Lors de la première connexion, vous devrez créer le compte administrateur, puis connecter votre environnement Docker local (ou un environnement distant) pour commencer à gérer vos conteneurs.

#### Est-ce que Portainer peut déployer une stack Docker Compose?

**Oui**, Portainer permet de créer une stack à partir d’ **un fichier Compose** (copier/coller dans l'éditeur en ligne ou import du fichier YAML), et de gérer ensuite les mises à jour de cette stack via l’interface web. Vous pouvez gérer une stack applicative et tous les conteneurs qui lui sont associés de façon centralisée. Mais, attention, le contrôle n'est pas identique entre les stacks existantes (créées hors Portainer) et celles créées par Portainer.

