# 🔐 SSH Agent — Gestion des clés sous Windows

## 📌 Objectif

Éviter de retaper :

- le mot de passe SSH
- la passphrase de la clé

👉 grâce à **ssh-agent**

---

# ⚙️ Configuration après redémarrage

## 💻 Sous Windows (PowerShell)

### 1️⃣ Démarrer l’agent (si nécessaire)

```powershell
Start-Service ssh-agent
```

👉 À faire **une seule fois** si configuré en automatique

---

### 2️⃣ Recharger la clé SSH

```powershell
ssh-add $HOME\.ssh\id_ed25519_dawan
```

👉 Tu entres la **passphrase une seule fois**

---

# 🚀 Utilisation

Une fois la clé chargée :

```bash
ssh deby
ssh srvlog
```

✅ Pas de mot de passe  
✅ Pas de passphrase répétée  

---

# 🔥 Automatisation (Windows)

## Activer l’agent au démarrage (une seule fois)

```powershell
Set-Service ssh-agent -StartupType Automatic
```

---

## Ensuite à chaque session

```powershell
ssh-add $HOME\.ssh\id_ed25519_dawan
```

---

# 🧠 Résumé

| Action | Fréquence |
|---|---|
| Créer la clé SSH | 1 seule fois |
| Copier la clé sur les serveurs | 1 seule fois |
| Configurer SSH | 1 seule fois |
| Charger la clé (`ssh-add`) | à chaque redémarrage |

---

# ⚠️ Bonnes pratiques

> [!warning]

- protéger la clé privée (`.ssh`)
- ne jamais partager la clé privée
- utiliser une passphrase forte
- limiter les accès SSH

---

# 📊 Conclusion

L’utilisation de **ssh-agent** permet :

- un **gain de temps**
- une **meilleure sécurité**
- une **connexion simplifiée**

👉 indispensable en environnement admin / infra*


Auto start agent SSH 

This solution from Joseph M. Reagle by way of Daniel Starin:

Add this following to your **`.bash_profile`**

`SSH_ENV="$HOME/.ssh/agent-environment"  function start_agent {     echo "Initialising new SSH agent..."     /usr/bin/ssh-agent | sed 's/^echo/#echo/' >"$SSH_ENV"     echo succeeded     chmod 600 "$SSH_ENV"     . "$SSH_ENV" >/dev/null     /usr/bin/ssh-add; }  # Source SSH settings, if applicable  if [ -f "$SSH_ENV" ]; then     . "$SSH_ENV" >/dev/null     #ps $SSH_AGENT_PID doesn't work under Cygwin     ps -ef | grep $SSH_AGENT_PID | grep ssh-agent$ >/dev/null || {         start_agent     } else     start_agent fi`

This version is especially nice since it will see if you've already started ssh-agent and, if it can't find it, will start it up and store the settings so that they'll be usable the next time you start up a shell.