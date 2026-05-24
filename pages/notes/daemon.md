# 👻 Daemon Linux

## 📌 Définition

Un **daemon** est un **processus qui fonctionne en arrière-plan** sur un système Linux.

Contrairement aux programmes classiques :

- il **ne possède pas d’interface utilisateur**
- il **démarre souvent au boot**
- il **attend des événements ou des requêtes**

Les daemons assurent **des services système permanents**.

---

# 🧠 Origine du terme

Le mot **daemon** vient du monde Unix.

Il désigne un **programme qui travaille silencieusement en arrière-plan** pour fournir un service.

Dans Linux, les daemons se terminent souvent par la lettre :

```
d
```

Exemples :

```
sshd
httpd
crond
systemd
```

---

# ⚙️ Fonctionnement

Un daemon fonctionne généralement selon ce principe :

```
Démarrage système
        ↓
Lancement du daemon
        ↓
Attente d'événements
        ↓
Traitement des requêtes
```

Il reste actif tant que le système fonctionne.

---

# 📊 Exemples de daemons Linux

| Daemon | Service |
|---|---|
| sshd | serveur SSH |
| httpd | serveur web Apache |
| crond | planification de tâches |
| systemd | gestion des services |
| named | serveur DNS |
| mysqld | base de données MySQL |

---

# 🧾 Voir les daemons actifs

Lister les services :

```bash
systemctl list-units --type=service
```

Voir les processus :

```bash
ps aux
```

ou

```bash
top
```

---

# ⚙️ Gestion des daemons avec systemd

Sur la plupart des distributions modernes, les daemons sont gérés par **systemd**.

---

## Démarrer un service

```bash
sudo systemctl start nom_service
```

---

## Arrêter un service

```bash
sudo systemctl stop nom_service
```

---

## Redémarrer un service

```bash
sudo systemctl restart nom_service
```

---

## Vérifier le statut

```bash
systemctl status nom_service
```

---

# ⚙️ Activer un daemon au démarrage

Activer au boot :

```bash
sudo systemctl enable nom_service
```

Désactiver :

```bash
sudo systemctl disable nom_service
```

---

# 📊 États d’un service systemd

| État | Description |
|---|---|
| active | service en cours d’exécution |
| inactive | service arrêté |
| failed | erreur |
| enabled | démarrage automatique |
| disabled | non démarré au boot |

---

# 📂 Fichiers de configuration

Les services systemd utilisent des fichiers **unit**.

Emplacement :

```
/etc/systemd/system
```

ou

```
/lib/systemd/system
```

Exemple :

```
sshd.service
```

---

# 🧾 Exemple de service systemd

```
[Unit]
Description=Serveur SSH

[Service]
ExecStart=/usr/sbin/sshd

[Install]
WantedBy=multi-user.target
```

---

# 🔎 Voir les logs d’un daemon

Afficher les journaux :

```bash
journalctl -u nom_service
```

Exemple :

```bash
journalctl -u sshd
```

---

# ⚠️ Bonnes pratiques

> [!warning]

- ne pas arrêter un daemon critique
- vérifier les logs en cas d’erreur
- surveiller les services exposés sur le réseau

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| daemon | service en arrière-plan |
| rôle | fournir un service système |
| gestion | systemd |
| commande principale | `systemctl` |
| logs | `journalctl` |

Les **daemons sont essentiels au fonctionnement de Linux**, car ils assurent la majorité des services système et réseau.