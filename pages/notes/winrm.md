# 🌐 WinRM — Windows Remote Management

## 📌 Définition

**WinRM (Windows Remote Management)** est un protocole permettant de **gérer des machines Windows à distance**.

Il repose sur :

```
WS-Management (Web Services)
```

👉 Utilisé notamment par :

- PowerShell Remoting
- outils d’administration
- automatisation

---

# 🧠 Principe de fonctionnement

WinRM permet d’exécuter des commandes à distance.

```
Admin
 ↓
WinRM (HTTP/HTTPS)
 ↓
Machine distante
 ↓
Exécution commandes
```

---

# 📊 Caractéristiques

| Élément | Description |
|---|---|
| Protocole | WS-Man |
| Port HTTP | 5985 |
| Port HTTPS | 5986 |
| Authentification | Kerberos / NTLM |
| Usage | administration distante |

---

# ⚙️ Activation de WinRM

## Activer WinRM

```powershell
Enable-PSRemoting -Force
```

---

## Vérifier état

```powershell
winrm quickconfig
```

---

# 🔎 Vérifier la connectivité

```powershell
Test-WsMan nom_machine
```

---

# ⚙️ Commandes principales

## Session distante

```powershell
Enter-PSSession -ComputerName serveur
```

---

## Exécuter commande à distance

```powershell
Invoke-Command -ComputerName serveur -ScriptBlock { Get-Process }
```

---

## Session persistante

```powershell
$s = New-PSSession -ComputerName serveur
Invoke-Command -Session $s -ScriptBlock { hostname }
```

---

# 🔐 Authentification

| Méthode | Description |
|---|---|
| Kerberos | domaine (sécurisé) |
| NTLM | fallback |
| Basic | non sécurisé |
| CredSSP | délégation |

---

# ⚙️ HTTPS (sécurisé)

Configurer WinRM en HTTPS :

- certificat requis
- port 5986

---

# 📊 Configuration WinRM

## Voir config

```powershell
winrm get winrm/config
```

---

## Lister listeners

```powershell
winrm enumerate winrm/config/listener
```

---

# 🌐 Firewall

Autoriser WinRM :

```powershell
Enable-PSRemoting -Force
```

👉 configure automatiquement le firewall

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| accès refusé | credentials |
| timeout | firewall |
| machine introuvable | DNS |
| kerberos fail | heure incorrecte |

---

# 🛡️ Bonnes pratiques

> [!warning]

- utiliser HTTPS en production
- limiter accès aux admins
- éviter Basic Auth
- surveiller logs

---

# 📦 Cas d’utilisation

| Usage | Exemple |
|---|---|
| admin serveur | gestion distante |
| automatisation | scripts |
| déploiement | configurations |
| monitoring | collecte infos |

---

# 📊 WinRM vs SSH

| Critère | WinRM | SSH |
|---|---|---|
| OS | Windows | Linux |
| Port | 5985/5986 | 22 |
| protocole | WS-Man | SSH |
| intégration | PowerShell | Shell |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| WinRM | gestion distante Windows |
| ports | 5985 / 5986 |
| protocole | WS-Man |
| usage | PowerShell Remoting |
| sécurité | Kerberos / HTTPS |

WinRM est un **outil clé pour l’administration distante des systèmes Windows**, particulièrement dans les environnements Active Directory.