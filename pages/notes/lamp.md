# 🧱 LAMP — Stack Web classique

---

# 📌 Définition

**LAMP** est une pile logicielle utilisée pour héberger des applications web :

```
L = Linux
A = Apache
M = MySQL / MariaDB
P = PHP
```

👉 Très utilisée pour :

- sites web
- applications web
- CMS (WordPress…)

---

# 🧠 Principe

Chaque composant a un rôle :

```
Client → Apache → PHP → MySQL → Réponse
```

---

# 🏗️ Architecture

```
Navigateur
   ↓
Apache (serveur web)
   ↓
PHP (traitement)
   ↓
MySQL (base de données)
```

---

# 📊 Composants

| Élément | Rôle |
|---|---|
| Linux | système |
| Apache | serveur web |
| MySQL | base de données |
| PHP | logique applicative |

---

# ⚙️ Fonctionnement

## Étapes

1. client envoie requête HTTP
2. Apache reçoit
3. PHP exécute script
4. MySQL fournit données
5. réponse renvoyée

---

# 📦 Exemple

## URL

```
http://site.local/index.php
```

---

## Process

```
Apache → PHP → MySQL → HTML → Client
```

---

# ⚙️ Installation (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install apache2 mysql-server php libapache2-mod-php
```

---

# 🔎 Vérification

## Apache

```bash
systemctl status apache2
```

---

## PHP

```bash
php -v
```

---

## MySQL

```bash
mysql -u root -p
```

---

# 📂 Structure fichiers

| Dossier | Description |
|---|---|
| /var/www/html | site web |
| index.php | page principale |

---

# 🌐 Exemple PHP

```php
<?php
echo "Hello LAMP";
?>
```

---

# 🔐 Sécurité

| Élément | Action |
|---|---|
| Apache | config HTTPS |
| MySQL | sécuriser accès |
| PHP | éviter failles |

---

# 📊 LAMP vs autres stacks

| Stack | Description |
|---|---|
| LAMP | Linux + Apache |
| LEMP | Linux + Nginx |
| MEAN | Node.js |
| MERN | React |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| CMS | WordPress |
| sites web | blogs |
| apps web | PHP |
| intranet | entreprise |

---

# ⚠️ Bonnes pratiques

> [!warning]

- sécuriser MySQL (mot de passe root)
- utiliser HTTPS
- limiter permissions fichiers
- mettre à jour PHP

---

# 📊 Avantages

| Avantage | Description |
|---|---|
| simple | facile à déployer |
| stable | mature |
| compatible | large support |
| gratuit | open-source |

---

# ⚠️ Limites

| Limite | Description |
|---|---|
| performance | moins moderne |
| PHP | parfois limité |
| scaling | manuel |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| LAMP | stack web |
| Apache | serveur |
| PHP | backend |
| MySQL | DB |
| usage | web |

---

# 🎯 Conclusion

LAMP est :

- une stack classique
- fiable et simple
- idéale pour débuter

👉 encore très utilisée aujourd’hui malgré l’arrivée de stacks modernes