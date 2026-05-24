# 20.1 — Notifications par mail avec google

> [!NOTE] Objectif de cette section
> Configurer GLPI pour envoyer automatiquement des emails aux bons destinataires selon les événements du helpdesk. Comprendre l'architecture en 3 niveaux : configuration SMTP → modèles → notifications.

---

## Principe — comment fonctionne une notification

Une notification dans GLPI, c'est la réponse à 3 questions :

| Question | Réponse |
|----------|---------|
| **Quand ?** | L'événement déclencheur (nouveau ticket, ticket résolu...) |
| **Quoi ?** | Le modèle de mail (sujet + corps avec les balises) |
| **À qui ?** | Les destinataires (demandeur, technicien, admin...) |

```
Événement (ex: ticket créé)
        ↓
GLPI cherche les notifications actives pour cet événement
        ↓
Charge le modèle associé → remplace les balises par les vraies valeurs
        ↓
Envoie le mail aux destinataires via le serveur SMTP configuré
```

L'architecture est donc en **3 niveaux** :

```
Configuration SMTP        Modèles de notifications      Notifications
(comment envoyer)    →   (quoi envoyer)            →   (à qui / quand)
imap.gmail.com           Sujet: ##ticket.title##        New Ticket → Demandeur
port 587, SSL            Corps: votre ticket n°...      Resolve → Technicien
```

---

## Étape 1 — Activer les notifications

`Configuration` → **Notifications**

| Toggle | État recommandé |
|--------|----------------|
| Activer les notifications | ✅ Oui |
| Activer les notifications par mail | ✅ Oui |
| Activer les notifications du navigateur | ✅ Oui (optionnel) |

Cliquer sur **Enregistrer** — un nouveau lien apparaît dans le panneau droit : **Configuration des notifications par email**.

---

## Étape 2 — Configurer le serveur SMTP (Gmail)

`Configuration` → `Notifications` → **Configuration des notifications par email**

### Informations générales

| Champ | Valeur | Explication |
|-------|--------|-------------|
| E-mail de l'administrateur | `support.fournil.dore.sam@gmail.com` | Reçoit les alertes système GLPI |
| Nom de l'administrateur | `Support Le Fournil Doré` | Nom affiché |
| E-mail de l'expéditeur | `support.fournil.dore.sam@gmail.com` | Adresse du champ "De :" |
| Nom de l'expéditeur | `GLPI Fournil Doré` | Nom affiché dans la boîte des destinataires |
| Adresse de non réponse | `noreply@fournil-dore.fr` | Optionnel — pour les mails sans réponse attendue |
| Signature des e-mails | `Support informatique — Le Fournil Doré` | Ajoutée en bas de chaque mail |

### Mode d'envoi

Sélectionner **SMTP** dans le dropdown "Mode d'envoi des e-mails".

La section **SERVEUR MAILS** apparaît :

| Champ | Valeur Gmail |
|-------|-------------|
| Hôte SMTP | `smtp.gmail.com` |
| Port | `587` |
| Vérifier le certificat | Non (pour éviter les erreurs TLS en formation) |
| Identifiant SMTP | `support.fournil.dore.sam@gmail.com` |
| Mot de passe SMTP | *(mot de passe d'application 16 caractères, sans espaces)* |

> [!TIP] Les 3 modes d'envoi
> - **PHP** : utilise la fonction `mail()` du serveur — simple mais souvent bloqué par les FAI. Pas fiable en production.
> - **SMTP** : connexion directe à un serveur mail avec authentification. Recommandé.
> - **SMTP+OAUTH** : pour Microsoft 365 / Gmail avec authentification moderne OAuth2. Plus sécurisé mais plus complexe à configurer.

> [!WARNING] Port Gmail
> Gmail accepte le port **587** (STARTTLS) ou **465** (SSL). Avec le port 587, laisser "Vérifier le certificat" à Non pour éviter les problèmes de certificat en environnement de formation.

Cliquer sur **Sauvegarder**, puis **Envoyer un mail de test à l'administrateur** pour valider la connexion.

---

## Étape 3 — Les modèles de notifications

`Configuration` → `Notifications` → **Modèles de notifications**

GLPI fournit **32 modèles** par défaut couvrant tous les objets : tickets, problèmes, changements, contrats, licences, utilisateurs...

Les modèles ticket les plus importants :

| Modèle | Type | Usage |
|--------|------|-------|
| **Tickets** | Ticket | Modèle principal pour tous les événements ticket |
| **Tickets (Simple)** | Ticket | Version simplifiée |
| **Alert Tickets not closed** | Ticket | Relance pour tickets non résolus |
| **Tickets Approval** | Ticket | Demandes de validation |
| **Password Forget** | Utilisateur | Réinitialisation de mot de passe |

### Structure d'un modèle

Cliquer sur **Tickets** → onglet **Traductions de modèle** → **Traduction par défaut** :

| Champ | Exemple |
|-------|---------|
| **Sujet** | `##ticket.action## ##ticket.title##` |
| **Corps texte** | Version texte brut avec balises |
| **Corps HTML** | Version HTML mise en forme |

### Le système de balises `##balise##`

Les balises sont des variables remplacées automatiquement par les vraies valeurs au moment de l'envoi :

| Balise | Valeur insérée |
|--------|----------------|
| `##ticket.title##` | Titre du ticket |
| `##ticket.action##` | Action effectuée (Nouveau ticket, Suivi ajouté...) |
| `##ticket.url##` | Lien direct vers le ticket |
| `##ticket.authors##` | Nom du demandeur |
| `##ticket.assigntousers##` | Nom du technicien assigné |
| `##ticket.status##` | Statut actuel |
| `##ticket.description##` | Description du ticket |
| `##ticket.creationdate##` | Date de création |

> [!TIP] Voir toutes les balises
> Dans la traduction d'un modèle, cliquer sur **"Voir la liste des balises disponibles"** en haut à droite — la liste complète s'affiche avec leur signification.

---

## Étape 4 — Les notifications

`Configuration` → `Notifications` → **Notifications**

GLPI fournit **82 notifications** par défaut. Chaque notification lie un événement à un modèle et des destinataires.

### Notifications ticket essentielles

| Notification | Événement | Active par défaut |
|-------------|-----------|-------------------|
| New Ticket | Nouveau ticket | ✅ Oui |
| Update Ticket | Mise à jour d'un ticket | ❌ Non |
| Close Ticket | Clôture du ticket | ✅ Oui |
| Resolve Ticket | Ticket résolu | ✅ Oui |
| Add Followup | Nouveau suivi | ✅ Oui |
| Add Task | Nouvelle tâche | ✅ Oui |
| Ticket Approval | Demande de validation | ✅ Oui |
| Alert Tickets not closed | Tickets non résolus | ✅ Oui |

### Structure d'une notification

Cliquer sur **New Ticket** :

**Onglet Notification :**

| Champ | Valeur |
|-------|--------|
| Nom | New Ticket |
| Actif | Oui |
| Type | Ticket |
| Événements | Nouveau ticket |
| Permettre de répondre | Oui |

**Onglet Gabarits :** → Gabarit **Tickets**, mode **E-mail**

**Onglet Destinataires :**

| Destinataire | Explication |
|-------------|-------------|
| Administrateur | L'admin GLPI défini dans la configuration |
| Demandeur | L'utilisateur qui a créé le ticket |
| Observateur | Les observateurs ajoutés sur le ticket |
| Profil : Admin | Tous les utilisateurs avec le profil Admin |

> [!TIP] Activer "Update Ticket"
> La notification "Update Ticket" est désactivée par défaut car elle génère beaucoup de mails. Pour l'activer, ouvrir la notification → changer **Actif** à **Oui** → Sauvegarder.

---

## Condition pour qu'un mail soit envoyé

Pour qu'un utilisateur reçoive un mail de notification, **3 conditions** doivent être réunies :

1. **Les notifications sont activées** dans `Configuration → Notifications`
2. **L'utilisateur a une adresse mail** dans sa fiche utilisateur (`Administration → Utilisateurs`)
3. **L'utilisateur est destinataire** de la notification concernée (demandeur, technicien, profil...)

> [!WARNING] Adresse mail obligatoire
> Si un utilisateur n'a pas d'adresse mail dans sa fiche GLPI, il ne recevra aucune notification, même s'il est désigné comme destinataire.

---

## Atelier — Activer les notifications Gmail pour le Fournil Doré

> **Contexte** : Thomas veut que Marie Durand reçoive un mail automatiquement dès que son ticket est créé, et un autre quand il est résolu.

### Partie 1 — Configurer le SMTP Gmail

`Configuration` → `Notifications` → activer les 3 toggles → **Enregistrer**

→ **Configuration des notifications par email**

| Champ | Valeur |
|-------|--------|
| E-mail administrateur | `support.fournil.dore.sam@gmail.com` |
| Nom administrateur | `Support Le Fournil Doré` |
| E-mail expéditeur | `support.fournil.dore.sam@gmail.com` |
| Nom expéditeur | `GLPI Fournil Doré` |
| Mode d'envoi | `SMTP` |
| Hôte SMTP | `smtp.gmail.com` |
| Port | `587` |
| Identifiant | `support.fournil.dore.sam@gmail.com` |
| Mot de passe | *(mot de passe d'application)* |

→ **Sauvegarder** → **Envoyer un mail de test à l'administrateur**

→ Vérifier la réception dans Gmail ✅

### Partie 2 — Vérifier l'adresse mail de Marie Durand

`Administration` → `Utilisateurs` → **Marie Durand**

→ Vérifier que le champ **E-mail** contient `marie.durand@fournil-dore.fr`

### Partie 3 — Vérifier les notifications ticket

`Configuration` → `Notifications` → **Notifications**

Vérifier que ces notifications sont **Actives = Oui** :
- New Ticket ✅
- Resolve Ticket ✅
- Add Followup ✅

### Partie 4 — Test bout en bout

1. Créer un ticket depuis le compte **Marie Durand**
2. Vérifier que Marie reçoit un mail "Nouveau ticket" dans sa boîte ✅
3. Thomas ajoute un suivi au ticket
4. Vérifier que Marie reçoit un mail "Nouveau suivi" ✅
5. Thomas passe le ticket en **Résolu**
6. Vérifier que Marie reçoit un mail "Ticket résolu" ✅

### Questions de bilan

| Question | Réponse |
|----------|---------|
| Quelles sont les 3 conditions pour qu'un mail soit envoyé ? | |
| Quelle est la différence entre un modèle et une notification ? | |
| Pourquoi "Update Ticket" est-il désactivé par défaut ? | |
| À quoi sert la balise `##ticket.url##` ? | |

---