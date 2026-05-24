## Tâches planifiées (Cron)

Service cron -> chronos -> maître du temps

Deux types de tâches planifiées :

- tâches planifiées utilisateurs
- tâches planifiées système

### [](https://hedgedoc.dawan.fr/Cl5qg8VqRECa33C1NAv7Vg#T%C3%A2ches-planifi%C3%A9es-utilisateurs "Tâches-planifiées-utilisateurs")Tâches planifiées utilisateurs

Se gèrent par la commande `crontab`.

L’ensemble des tâches planifiées d’un utilisateur sont au sein d’un même fichier (stocké dans `/var/spool/cron/crontabs/`).

**Liste des tâches éventuelles**

```
crontab -l
```

**Création d’une tâche planifiée**

```
crontab -e
```

Structure d’une tâche planifiée -> 5 champs de planification + commande et arguments

Champs de planification

- **minutes** : 0 à 59
- **heures** : 0 à 23
- **jour du mois** : 1 à 31
- **mois** : 1 à 12
- **jour de la semaine** : 0 à 7 (dimanche = 0 = 7)

Notations possibles

```
0 0 1 1-12 * commande... # à 0h0, le 1er du mois, de janvier à décembre

0,15,30,45 0 1 1-12 * commande... # à 0h0, 0h15, 0h30 et 0h45, le 1er du mois, de janvier à décembre

*/5 * * * * commande... # toutes les 5 minutes

30 4 26 * * commande... # à 4h30, le 26e jour de chaque mois
```

Prise en compte simultanée des jours du mois et de la semaine

```
* * * * * # toutes les minutes tous les jours

* * 1 * * # toutes les minutes le premier de chaque mois

* * * * 4 # toutes les minutes tous les jeudis

* * 1 * 4 # toutes les minutes tous les jeudis et le premier du mois
```

**Limites de cron**

- Non prise en compte des années
- Granularité à la minute
- Non prise en compte simultanée des jours du mois et de la semaine (ex : pas possible d’exprimer le 1er jeudi du mois)
- Pas de notion du dernier jour du mois

Les unités _timer_ de _**systemd**_ sont une alternative plus aboutie à cron.

**Remarques**

- Si la commande produit une sortie ou une erreur, non redirigée, cette sortie ou cette erreur sera envoyée par mail à l’utilisateur – si tant est qu’il y ait un service de messagerie interne !
    - On peut changer à quelle adresse mail sont envoyés les sorties standard ou d’erreur, en assignant une valeur à la variable d’environnement `MAILTO`, dans votre crontab.
- Les variables d’environnement de votre shell interactif ne sont pas forcément les mêmes lors de l’exécution par cron de vos tâches plannifiées. C’est parce que votre fichier `~/.bashrc` n’est pas sourcé/chargé quand cron exécute les tâches de la crontab de votre utilisateur.

**Suppression d’une crontab**

```
crontab -r
```

Il est souvent préférable de simplement commenter les tâches au lieu de supprimer la crontab