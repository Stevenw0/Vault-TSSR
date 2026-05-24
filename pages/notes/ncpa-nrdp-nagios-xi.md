# 🧱 NCPA + NRDP + Nagios XI — Mise en place & Troubleshooting

---

# 🐧 1. INSTALLATION NCPA (LINUX)

## ✔ Commandes

```bash
wget https://assets.nagios.com/downloads/ncpa/ncpa-latest.deb
dpkg -i ncpa-latest.deb
```

---

## ❌ ERREUR 1 : téléchargement échoue

```
ERROR 404: Not Found
dpkg: cannot access archive
```

### 🔍 Cause

➡️ URL cassée / redirection Nagios

### ✅ Solution

- Télécharger via une autre source
- Ou utiliser un repo officiel
- Relancer l’installation

---

## ✔ Vérification

```bash
systemctl status ncpa_listener
```

👉 NCPA fonctionne ✅

---

# ⚙️ 2. CONFIGURATION NCPA (LINUX)

## 📄 Fichier

```
/usr/local/ncpa/etc/ncpa.cfg
```

---

## ✔ Configuration NRDP

```ini
[nrdp]
parent = http://192.168.50.32/nrdp/
token = mytoken123
hostname = debian
```

---

## ✔ Checks passifs

```ini
[passive checks]
debian|CPU Passive = cpu/percent --warning 90 --critical 95 --aggregate avg
debian|RAM Passive = memory/virtual/percent --warning 90 --critical 95
debian|DISK Passive = disk/logical//used_percent --warning 80 --critical 90
```

---

## ❌ ERREUR 2 : IndexError

```
IndexError: list index out of range
```

### 🔍 Cause

➡️ Mauvaise syntaxe dans `[passive checks]`

### ✅ Solution

✔ Format correct :

```
hostname|Service Name = commande
```

---

## ❌ ERREUR 3 : NO TOKENS

```
Message from NRDP server: NO TOKENS
```

### 🔍 Cause

➡️ Token non configuré côté Nagios

### ✅ Solution

📄 Fichier :

```
/usr/local/nrdp/server/config.inc.php
```

```php
$cfg['authorized_tokens'] = array(
    "mytoken123"
);
```

---

## ✔ Vérification

```
Message: OK
3 checks processed
```

👉 Debian envoie correctement les données ✅

---

# 🪟 3. INSTALLATION NCPA (WINDOWS)

## ✔ Installation

👉 via `.exe`

---

## ✔ Configuration

| Paramètre | Valeur |
|---|---|
| Token | mytoken123 |
| Port | 5693 |
| Mode passif | activé |

---

## ✔ Passive checks

```ini
[passive checks]
windows|CPU Passive = cpu/percent --warning 90 --critical 95 --aggregate avg
windows|RAM Passive = memory/virtual/percent --warning 90 --critical 95
windows|DISK Passive = disk/logical/C|/used_percent --warning 90 --critical 90
```

---

## ✔ Redémarrage

```powershell
Restart-Service ncpa_passive
```

---

# 🌐 4. TEST NRDP (MANUEL)

## ❌ ERREUR 4 : curl absent

```
curl: command not found
```

### ✅ Solution

```bash
apt install curl
```

---

## ✔ Test

```bash
curl -X POST http://192.168.50.32/nrdp/
```

### Résultat

```
status: 0
message: OK
```

---

# 🧱 5. CONFIGURATION NAGIOS XI

## ✔ Création HOST

| Host | IP |
|---|---|
| debian | 192.168.50.51 |
| windows | 192.168.50.64 |

---

## ❌ ERREUR 5 : host pending

```
Host check is pending
```

### 🔍 Cause

➡️ Check host non configuré

### ✅ Solution

| Paramètre | Valeur |
|---|---|
| Check command | check_ping |
| Max attempts | 5 |
| Interval | 5 |

---

## ❌ ERREUR 6 : check_ping erreur

```
Warning threshold must be integer or percentage
```

### 🔍 Cause

➡️ Mauvais arguments

### ✅ Solution

```bash
-w 100.0,20% -c 500.0,60%
```

---

## ✔ Résultat

👉 PING OK ✅

---

# ⚙️ 6. CONFIGURATION SERVICES PASSIFS

## ✔ CPU Passive

| Paramètre | Valeur |
|---|---|
| Check command | check_dummy |
| $ARG1$ | 0 |

---

## ✔ Paramètres importants

| Option | Valeur |
|---|---|
| Active checks | OFF ❌ |
| Passive checks | ON ✅ |

---

## ❌ ERREUR 7 : rien n’apparaît

### 🔍 Causes possibles

- service non assigné au host
- nom différent (hostname mismatch)
- NCPA non redémarré

---

### ✅ Solutions

✔ Vérifier :

```ini
hostname = windows
```

👉 doit être EXACTEMENT identique à Nagios

---

✔ Redémarrer :

```powershell
Restart-Service ncpa_passive
```

---

✔ Appliquer config Nagios

---

# 👀 7. RÉSULTAT FINAL

| Service | Statut |
|---|---|
| CPU Passive | OK |
| RAM Passive | OK |
| DISK Passive | OK |

---

# 🧩 ARCHITECTURE

```
[ Debian / Windows ]
        │
        ▼
      NCPA
        │
        ▼
      NRDP
        │
        ▼
   Nagios XI
```

---

# 🚀 CONCLUSION

✔ Supervision Linux → OK  
✔ Supervision Windows → OK  
✔ Checks passifs NRDP → OK  
✔ Communication → OK  

👉 Architecture fonctionnelle et stable