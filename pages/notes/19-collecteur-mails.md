# 19 — Collecteur de mails (smtp4dev)

> [!NOTE] Objectif de cette section Configurer GLPI pour créer automatiquement des tickets à partir des emails reçus, en utilisant **smtp4dev** — un faux serveur mail de développement installé sur la machine Windows hôte. Pas de compte Gmail, pas de SSL, pas de mot de passe applicatif.

> [!TIP] Version Gmail disponible La version de ce chapitre avec un compte Gmail réel est disponible dans `19-collecteur-mails-google.md`. smtp4dev est recommandé en formation car il fonctionne hors ligne et se configure en 5 minutes.

---

## Principe du collecteur de mails

Sans collecteur, les utilisateurs doivent se connecter à GLPI pour créer un ticket. Avec le collecteur, ils envoient simplement un email à une adresse support — GLPI le récupère automatiquement et crée le ticket.

```
Marie envoie un mail           smtp4dev (faux serveur)        GLPI
marie@fournil-dore.fr    →    support@fournil-dore.fr   →    Ticket créé
Objet : Imprimante HS         (IMAP local, port 143)          automatiquement
```

**Ce que GLPI extrait du mail :**

|Champ du mail|Champ du ticket|
|---|---|
|Objet|Titre du ticket|
|Corps|Description|
|Expéditeur|Demandeur (si l'adresse existe dans GLPI)|
|Pièces jointes|Documents associés|

---

## Qu'est-ce que smtp4dev ?

**smtp4dev** est un faux serveur email conçu pour le développement et la formation. Il capture tous les emails envoyés à lui, sans les transmettre à personne, et les rend accessibles via une interface web et un protocole IMAP standard.

||Gmail|smtp4dev|
|---|---|---|
|Compte réel nécessaire|Oui|Non|
|SSL / TLS|Requis|Non|
|Mot de passe applicatif|Requis|Non|
|Fonctionne hors ligne|Non|Oui|
|Configuration|Simple||

> C'est l'outil idéal pour la formation : on simule un vrai serveur mail sans aucune dépendance externe.

---

## Étape 1 — Installer smtp4dev sur Windows

Sur la **machine Windows hôte** (pas dans le container Docker), ouvrir un terminal PowerShell et exécuter :

```powershell
winget install Rnwood.Smtp4dev.Desktop
```

Lancer ensuite l'application **smtp4dev** depuis le menu Démarrer.

Par défaut, smtp4dev écoute sur :

- **SMTP** : port 25 (pour recevoir des emails entrants)
- **IMAP** : port 143 (pour que GLPI lise la boîte)
- **Interface web** : http://localhost:5000

Vérifier que l'interface web est accessible depuis le réseau : `http://[IP-windows]:5000`

> [!TIP] L'IP de la machine Windows GLPI tourne dans Docker — il ne peut pas utiliser `localhost` pour joindre smtp4dev. Il faut utiliser l'**adresse IP locale** de la machine Windows. Pour la trouver : `ipconfig` dans un terminal Windows → chercher l'adresse IPv4 de la carte réseau active (ex. `192.168.1.4`).

---

## Étape 2 — Créer les mailboxes dans smtp4dev

Dans l'interface web de smtp4dev (`http://localhost:5000`) :

Aller dans l'onglet **Mailboxes** → **New mailbox**

Créer les deux mailboxes suivantes :

|Nom de la mailbox|Adresse|Rôle|
|---|---|---|
|`support`|`support@fournil-dore.fr`|Collecte des tickets GLPI|
|`marie.dupont`|`marie.dupont@fournil-dore.fr`|Test des notifications (chapitre 20)|

> smtp4dev filtre les emails entrants selon le destinataire et les range dans la mailbox correspondante. Tout email envoyé à `support@fournil-dore.fr` atterrit dans la mailbox `support`.

---

## Étape 3 — Configurer le collecteur dans GLPI

`Configuration` → **Collecteurs** → **+ Ajouter**

### Configuration du serveur

|Champ|Valeur|
|---|---|
|Nom|`smtp4dev – Support Fournil Doré`|
|Activé|Oui|
|Serveur|`192.168.1.4` _(remplacer par l'IP réelle de la machine Windows)_|
|Port|`143`|
|Options de connexion|**IMAP** uniquement (sans SSL, sans TLS)|

La chaîne de connexion générée doit être : `{192.168.1.4:143/imap}`

### Authentification

|Champ|Valeur|
|---|---|
|Identifiant|`support@fournil-dore.fr`|
|Mot de passe|_(laisser vide — smtp4dev n'en exige pas)_|

### Configuration des dossiers

Laisser tous les champs de dossiers **vides**. smtp4dev n'utilise pas de dossiers d'archivage — tous les emails restent visibles dans son interface web.

### Options de collecte

|Champ|Valeur|
|---|---|
|Créer automatiquement un utilisateur à partir du mail|**Non**|
|Autres options|Laisser par défaut|

Cliquer sur **Ajouter**.

---

## Étape 4 — Passer mailgate en mode CLI

`Configuration` → `Actions automatiques` → **mailgate**

|Champ|Valeur|
|---|---|
|Mode d'exécution|**CLI**|
|Fréquence|10 minutes|

Sauvegarder.

> [!WARNING] Mode GLPI vs Mode CLI En **mode GLPI**, la collecte ne se déclenche que quand un utilisateur navigue — inutilisable en production. En **mode CLI**, le cron système déclenche la tâche de façon autonome.

### Configurer le cron Docker

Sur le serveur Linux qui héberge Docker :

```bash
sudo bash -c 'cat > /etc/cron.d/glpi << CRONEOF
# GLPI - Taches automatiques via CLI
* * * * * root docker exec -u www-data glpi-glpi-1 php /var/www/glpi/front/cron.php
CRONEOF'
```

Vérifier que le cron tourne :

```bash
tail -f /var/log/syslog | grep CRON
```

---

## Étape 5 — Tester le collecteur

### Test de connexion

Dans la fiche du collecteur, cliquer sur **Récupérer les mails maintenant**.

- ✅ Aucun message d'erreur = connexion IMAP à smtp4dev établie
- ❌ Erreur de connexion = vérifier l'IP Windows et que smtp4dev est bien lancé
- ❌ Timeout = vérifier que le pare-feu Windows autorise le port 143

> [!TIP] Autoriser le port 143 sous Windows Pare-feu Windows Defender → Règles de trafic entrant → Nouvelle règle → Port → TCP 143 → Autoriser la connexion

### Test bout en bout

**1. Envoyer un mail de test**

Depuis n'importe quel client mail (Thunderbird, Outlook) configuré avec smtp4dev comme serveur SMTP (port 25, sans authentification), envoyer un email :

- **De** : `marie.dupont@fournil-dore.fr`
- **À** : `support@fournil-dore.fr`
- **Objet** : `Imprimante hors service en open space`
- **Corps** : `Bonjour, l'imprimante IMP-NAN-OPENSPACE-01 ne répond plus depuis ce matin. Merci.`

**2. Vérifier dans smtp4dev**

Interface web → mailbox `support` : le mail doit y apparaître.

**3. Forcer la collecte**

Cliquer sur **Récupérer les mails maintenant** dans la fiche du collecteur, ou via terminal :

```bash
docker exec -u www-data glpi-glpi-1 php /var/www/glpi/front/cron.php --force mailgate
```

**4. Vérifier dans GLPI**

`Assistance` → `Tickets` — le ticket doit apparaître avec :

- Titre = `Imprimante hors service en open space` ✅
- Description = corps du mail ✅
- Demandeur = `marie.dupont` ✅

---

## Ce qui se passe selon l'expéditeur

|Situation|Résultat|
|---|---|
|Expéditeur reconnu dans GLPI (ex. marie.dupont)|Ticket créé, demandeur = l'utilisateur|
|Expéditeur inconnu + "Créer utilisateur" = Non|Ticket refusé|
|Expéditeur inconnu + "Créer utilisateur" = Oui|Ticket créé + compte utilisateur créé automatiquement|

---

## Atelier — Collecteur smtp4dev pour le Fournil Doré

> **Contexte** : Thomas configure le collecteur de mails pour que les employés puissent créer des tickets par email, sans se connecter à GLPI.

### Partie 1 — Préparer smtp4dev

1. Vérifier que smtp4dev est lancé sur la machine Windows
2. Ouvrir `http://[IP-windows]:5000`
3. Créer la mailbox **support** → adresse `support@fournil-dore.fr`
4. Créer la mailbox **marie.dupont** → adresse `marie.dupont@fournil-dore.fr`

### Partie 2 — Créer le collecteur dans GLPI

`Configuration` → `Collecteurs` → **+ Ajouter**

|Champ|Valeur|
|---|---|
|Nom|`smtp4dev – Support Fournil Doré`|
|Serveur|`[IP de la machine Windows]`|
|Port|`143`|
|Connexion|IMAP (sans SSL)|
|Identifiant|`support@fournil-dore.fr`|
|Mot de passe|_(vide)_|
|Créer utilisateur auto|**Non**|

Cliquer **Ajouter** → puis **Récupérer les mails maintenant** → vérifier qu'aucune erreur n'apparaît.

### Partie 3 — Passer mailgate en CLI

`Configuration` → `Actions automatiques` → `mailgate` → Mode : **CLI** → Sauvegarder

### Partie 4 — Test

1. Depuis un client mail (SMTP = IP Windows, port 25), envoyer un mail à `support@fournil-dore.fr` depuis `marie.dupont@fournil-dore.fr`, objet : `Clavier cassé en open space Nantes`
2. Vérifier dans smtp4dev que le message apparaît dans la mailbox `support`
3. Cliquer **Récupérer les mails maintenant** dans la fiche collecteur
4. Vérifier le ticket dans `Assistance` → `Tickets`
5. Confirmer que **marie.dupont** est le demandeur

### Questions de bilan

|Question|Réponse|
|---|---|
|Pourquoi smtp4dev est plus simple que Gmail en formation ?||
|Que se passe-t-il si l'adresse expéditrice n'existe pas dans GLPI ?||
|Pourquoi mailgate doit être en mode CLI et non mode GLPI ?||
|Quelle IP utiliser dans le collecteur — localhost ou l'IP Windows ? Pourquoi ?||

---

## Liens utiles
- [Collecteurs | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/configuration/collectors)
- [smtp4dev sur GitHub](https://github.com/rnwood/smtp4dev)
- [Documentation GLPI — Collecteurs](https://glpi-user-documentation.readthedocs.io/fr/latest/modules/configuration/collectors.html)

---