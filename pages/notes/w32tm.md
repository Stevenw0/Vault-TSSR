# 🕒 w32tm — Synchronisation de l’heure Windows (NTP)

## 📌 Définition

**`w32tm`** est un outil Windows permettant de **configurer, synchroniser et diagnostiquer le service de temps Windows (W32Time)**.

Il est essentiel dans les environnements :

- Active Directory
- serveurs Windows
- réseaux sécurisés

---

# 🧠 Pourquoi la synchronisation est importante

Dans un environnement Active Directory :

> [!warning]
> Kerberos nécessite une synchronisation précise de l’heure

Si l’heure est incorrecte :

- ❌ authentification impossible
- ❌ GPO non appliquées
- ❌ erreurs de sécurité

---

# ⚙️ Fonctionnement dans un domaine AD

Hiérarchie NTP :

```
Client
 ↓
DC secondaire
 ↓
DC principal (PDC Emulator)
 ↓
Serveur NTP externe
```

👉 Le **PDC Emulator** est la source de temps principale.

---

# 📊 Commandes principales

## Vérifier la source NTP

```cmd
w32tm /query /source
```

---

## Voir les serveurs NTP

```cmd
w32tm /query /peers
```

---

## Voir l’état du service

```cmd
w32tm /query /status
```

---

## Voir la configuration

```cmd
w32tm /query /configuration
```

---

# ⚙️ Configuration NTP manuelle

## Définir un serveur NTP

```cmd
w32tm /config /syncfromflags:manual /manualpeerlist:"0.fr.pool.ntp.org"
```

---

## Appliquer la configuration

```cmd
w32tm /config /update
```

---

## Forcer la synchronisation

```cmd
w32tm /resync
```

---

# ⚙️ Configurer un DC comme source fiable

Sur le PDC :

```cmd
w32tm /config /syncfromflags:manual /manualpeerlist:"0.fr.pool.ntp.org" /reliable:yes
w32tm /config /update
w32tm /resync
```

---

# 🔎 Vérifications

## Vérifier l’heure

```powershell
Get-Date -Format "yyyy/MM/dd HH:mm:ss"
```

---

## Vérifier le service

```cmd
net start w32time
```

---

## Redémarrer le service

```cmd
net stop w32time
net start w32time
```

---

# 📊 Ports utilisés

| Service | Port | Protocole |
|---|---|---|
| NTP | 123 | UDP |

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| resync échoue | serveur NTP inaccessible |
| mauvaise heure | mauvaise hiérarchie |
| erreurs Kerberos | décalage > 5 min |
| source locale | pas de NTP configuré |

---

# 🛡️ Bonnes pratiques

> [!warning]

- configurer le **PDC Emulator uniquement**
- utiliser des serveurs NTP fiables
- vérifier régulièrement la synchronisation
- éviter plusieurs sources NTP non cohérentes

---

# 📊 Résumé

| Élément | Description |
|---|---|
| w32tm | outil NTP Windows |
| rôle | synchronisation heure |
| critique | Active Directory |
| port | UDP 123 |
| commande clé | `w32tm /resync` |

La synchronisation via **w32tm est essentielle pour garantir la sécurité et le bon fonctionnement d’un environnement Windows et Active Directory**.