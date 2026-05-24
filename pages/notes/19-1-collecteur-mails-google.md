# 19.1 — Collecteur de mails avec google

> [!NOTE] Objectif de cette section
> Configurer GLPI pour créer automatiquement des tickets à partir des emails reçus sur une boîte Gmail dédiée. Comprendre le rôle du cron et des dossiers d'archivage.

---

## Principe du collecteur de mails

Sans collecteur, les utilisateurs doivent obligatoirement passer par l'interface GLPI pour créer un ticket. Avec le collecteur, ils peuvent simplement **envoyer un email** à une adresse support — GLPI le récupère automatiquement et crée le ticket.

```
Marie envoie un mail          Boîte Gmail dédiée         GLPI
marie@fournil-dore.fr    →    support@gmail.com     →    Ticket créé
Objet : Imprimante HS         (IMAP)                     automatiquement
```

**Ce que GLPI extrait du mail :**

| Champ du mail | Champ du ticket |
|---------------|-----------------|
| Objet | Titre du ticket |
| Corps | Description |
| Expéditeur | Demandeur (si l'adresse existe dans GLPI) |
| Pièces jointes | Documents associés |

---

## Architecture — comment GLPI collecte les mails

GLPI ne "surveille" pas la boîte en temps réel. Il utilise une **action automatique** appelée `mailgate` qui s'exécute à intervalles réguliers (toutes les 10 minutes par défaut).

```
Cron système (toutes les minutes)
        ↓
GLPI vérifie si mailgate doit tourner
        ↓
Si oui → connexion IMAP à Gmail
        ↓
Récupère les nouveaux mails → crée les tickets
        ↓
Archive les mails dans GLPI_OK ou GLPI_NOK
```

Par défaut, GLPI exécute ses tâches automatiques **en mode GLPI** (déclenché par la navigation des utilisateurs). En production, il faut passer en **mode CLI** via le cron système pour que la collecte fonctionne même si personne n'est connecté.

---

## Étape 1 — Configurer le cron système

### 1.1 — Ajouter la tâche cron

**Installation classique (GLPI sur le host)**

Sur le serveur en tant que root :

```bash
crontab -u www-data -e
```

Ajouter la ligne :

```
* * * * * php /var/www/glpi/front/cron.php
```

Vérifier :

```bash
crontab -u www-data -l
```

**Installation Docker (recommandé)**

Ne pas configurer le cron à l'intérieur du container — la configuration serait perdue au prochain `docker compose down`. Créer à la place un fichier cron sur le **host**, qui utilise `docker exec` pour exécuter la commande dans le container :

```bash
sudo cat > /etc/cron.d/glpi << 'EOF'
# GLPI - Taches automatiques via CLI
# Remplace le cron interne de GLPI (non present dans l image Docker)
* * * * * root docker exec -u www-data glpi-glpi-1 php /var/www/glpi/front/cron.php
EOF
```

Vérifier que le cron tourne :

```bash
tail -f /var/log/syslog | grep CRON
```

On doit voir toutes les minutes une ligne :
```
CMD (docker exec -u www-data glpi-glpi-1 php /var/www/glpi/front/cron.php)
```

> [!TIP] Pourquoi `/etc/cron.d/` et pas `crontab -e` ?
> Le fichier `/etc/cron.d/glpi` est sur le **host** — il persiste après un `docker compose down/up`. Le container redémarre, le cron host continue à le piloter sans aucune reconfiguration. C'est la méthode propre pour gérer les tâches planifiées d'un container Docker.

### 1.2 — Passer mailgate en mode CLI

`Configuration` → `Actions automatiques` → **mailgate**

| Champ | Valeur |
|-------|--------|
| Mode d'exécution | **CLI** |
| Fréquence | 10 minutes |

Sauvegarder.

> [!WARNING] Mode GLPI vs Mode CLI
> En **mode GLPI**, la tâche ne se déclenche que quand un utilisateur navigue sur l'interface — inutilisable en production. En **mode CLI**, le cron système déclenche la tâche de façon autonome, même la nuit.

---

## Étape 2 — Préparer le compte Gmail

> [!TIP] Toujours une boîte dédiée
> Ne jamais pointer le collecteur sur une boîte personnelle. Créer une adresse spécifique, par exemple `support.fournil.dore@gmail.com`. Tous les mails qui arrivent sur cette boîte seront transformés en tickets — y compris les spams.

### 2.1 — Activer la validation en deux étapes

Indispensable pour générer un mot de passe d'application.

`myaccount.google.com` → `Sécurité` → **Validation en deux étapes** → Activer

### 2.2 — Générer un mot de passe d'application

Google bloque les connexions depuis des applications tierces (comme GLPI) sauf si on génère un mot de passe dédié.

`myaccount.google.com` → `Sécurité` → **Mots de passe des applications**
https://myaccount.google.com/apppasswords
- Donner un nom : `GLPI`
- Google génère un mot de passe de **16 caractères**
- **Le copier immédiatement** — il ne sera plus affiché après fermeture de la page

> [!WARNING] Mot de passe à 16 caractères
> Google affiche le mot de passe avec des espaces (ex. : `abcd efgh ijkl mnop`) pour la lisibilité — ne pas copier les espaces. Saisir les 16 caractères d'une seule traite dans GLPI.

### 2.3 — Créer les libellés d'archivage

Dans Gmail : `Paramètres (⚙)` → `Voir tous les paramètres` → `Libellés` → **Créer un libellé**

Créer deux libellés :

| Libellé | Rôle |
|---------|------|
| `GLPI_OK` | Mails acceptés — ticket créé avec succès |
| `GLPI_NOK` | Mails refusés — expéditeur inconnu, format invalide... |

> [!WARNING] Nommage des libellés
> Utiliser des noms **sans slash et sans espaces**. La hiérarchie avec `/` (ex. : `GLPI/OK`) n'est pas compatible avec le protocole IMAP de Gmail et empêche GLPI de les trouver.

### 2.4 — Vérifier les paramètres IMAP

`Paramètres` → `Voir tous les paramètres` → `Transfert et POP/IMAP`

| Paramètre | Valeur recommandée |
|-----------|-------------------|
| Accès IMAP | **Activé** |
| Action sur mail supprimé | **Archiver le message** |

L'option "Archiver" évite toute suppression définitive en cas de mauvaise manipulation de GLPI.

---

## Étape 3 — Créer le collecteur dans GLPI

`Configuration` → **Collecteurs** → **+ Ajouter**

### Configuration du serveur

| Champ | Valeur |
|-------|--------|
| Nom | `Support Fournil Doré` |
| Activé | Oui |
| Serveur | `imap.gmail.com` |
| Port | `993` |
| Options de connexion | **IMAP** + **SSL** |

La chaîne générée doit être : `{imap.gmail.com:993/imap/ssl}`

### Authentification

| Champ | Valeur |
|-------|--------|
| Identifiant | adresse Gmail complète (ex. `support.fournil.dore@gmail.com`) |
| Mot de passe | mot de passe d'application sans espaces |

### Configuration des dossiers

| Champ | Valeur |
|-------|--------|
| Dossier des messages entrants | `INBOX` |
| Dossier d'archivage des mails acceptés | `GLPI_OK` |
| Dossier d'archivage des mails refusés | `GLPI_NOK` |

> [!TIP] Pourquoi archiver ?
> Sans dossier d'archivage, GLPI laisse les mails dans la boîte de réception après traitement. Au prochain passage du cron, il les retraiterait — créant des tickets en double. Les dossiers d'archivage évitent ce problème.

### Options de collecte

| Champ | Valeur | Explication |
|-------|--------|-------------|
| Créer automatiquement un utilisateur à partir du mail | **Non** | Si Oui, tout expéditeur inconnu génère un compte utilisateur — risque de pollution |
| Utiliser "Répondre à" en tant que demandeur | Non | |
| Ajouter les utilisateurs destinataires (À) comme observateurs | Non | |

Cliquer sur **Ajouter**.

---

## Étape 4 — Tester le collecteur

### 4.1 — Test de connexion

Dans la fiche du collecteur, cliquer sur **Récupérer les mails maintenant**.

- ✅ Aucun message d'erreur = connexion établie
- ❌ Erreur d'authentification = vérifier le mot de passe d'application (sans espaces)
- ❌ Connexion refusée = vérifier que l'IMAP est activé dans Gmail

### 4.2 — Test bout en bout

1. Depuis n'importe quelle messagerie, **envoyer un mail** à la boîte Gmail configurée :
   - Objet : `Mon PC ne démarre plus`
   - Corps : `Bonjour, depuis ce matin mon PC en salle de vente ne s'allume plus. Merci. Marie.`

2. Forcer la collecte depuis le serveur :

```bash
# Installation classique
sudo -u www-data php /var/www/glpi/front/cron.php --force mailgate

# Installation Docker
docker exec -u www-data glpi-glpi-1 php /var/www/glpi/front/cron.php --force mailgate
```

3. Vérifier dans `Assistance` → `Tickets` qu'un ticket a été créé avec :
   - Titre = objet du mail ✅
   - Description = corps du mail ✅
   - Demandeur = expéditeur (si son adresse est dans GLPI) ✅

4. Vérifier dans Gmail que le mail a été déplacé dans le libellé **GLPI_OK** ✅

---

## Ce qui se passe selon l'expéditeur

| Situation | Résultat | Dossier Gmail |
|-----------|----------|---------------|
| Expéditeur reconnu dans GLPI | Ticket créé, demandeur = l'utilisateur | GLPI_OK |
| Expéditeur inconnu + "Créer utilisateur" = Non | Ticket refusé | GLPI_NOK |
| Expéditeur inconnu + "Créer utilisateur" = Oui | Ticket créé + compte utilisateur créé | GLPI_OK |
| Mail malformé / spam | Ticket refusé | GLPI_NOK |

---

## Points importants en production

- **Boîte dédiée obligatoire** — ne jamais pointer sur une boîte personnelle
- **Archivage configuré avant la mise en service** — évite les doublons et suppressions
- **Délai de traitement** = fréquence de mailgate (10 min par défaut)
- **Surveiller GLPI_NOK** régulièrement — des mails légitimes peuvent y atterrir si l'adresse expéditrice n'est pas enregistrée dans GLPI
- **Même procédure pour Microsoft 365** : serveur `outlook.office365.com`, port `993`, SSL

---

## Atelier — Collecteur Gmail pour le Fournil Doré

> **Contexte** : Thomas configure une adresse `support.fournil.dore@gmail.com` pour que les employés puissent créer des tickets par email, sans avoir à se connecter à GLPI.

### Partie 1 — Préparer Gmail

1. Se connecter sur le compte Gmail `support.fournil.dore@gmail.com`
2. Activer la **validation en deux étapes**
3. Générer un **mot de passe d'application** nommé `GLPI` → noter les 16 caractères
4. Créer les libellés `GLPI_OK` et `GLPI_NOK`
5. Vérifier que l'**IMAP est activé**

### Partie 2 — Configurer le collecteur

`Configuration` → `Collecteurs` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Support Fournil Doré` |
| Serveur | `imap.gmail.com` |
| Port | `993` |
| Connexion | IMAP + SSL |
| Identifiant | `support.fournil.dore@gmail.com` |
| Mot de passe | *(mot de passe d'application)* |
| Dossier entrants | `INBOX` |
| Mails acceptés | `GLPI_OK` |
| Mails refusés | `GLPI_NOK` |
| Créer utilisateur auto | **Non** |

### Partie 3 — Passer mailgate en CLI

`Configuration` → `Actions automatiques` → `mailgate`

→ Mode d'exécution : **CLI** → Sauvegarder

### Partie 4 — Test

1. Envoyer un mail depuis l'adresse de **Marie Durand** (`marie.durand@fournil-dore.fr`) avec l'objet `Imprimante hors service en salle de pause`
2. Cliquer sur **Récupérer les mails maintenant** dans la fiche du collecteur
3. Vérifier que le ticket apparaît dans `Assistance` → `Tickets`
4. Vérifier que Marie Durand est bien indiquée comme demandeur
5. Vérifier dans Gmail que le mail est dans `GLPI_OK`

### Questions de bilan

| Question | Réponse |
|----------|---------|
| Pourquoi faut-il un mot de passe d'application et pas le mot de passe Gmail normal ? | |
| Que se passe-t-il si on met "Créer utilisateur automatiquement = Oui" ? | |
| Pourquoi configurer des dossiers d'archivage ? | |
| Quelle est la différence entre mode GLPI et mode CLI pour mailgate ? | |

---

## Liens utiles
- [Collecter les emails depuis Gmail | Tutorials | Help Center GLPI](https://help.glpi-project.org/tutorials/fr/receivers/collect_mails_from_gmail)


---