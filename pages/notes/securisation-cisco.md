# 🔐 Sécurisation des accès administratifs Cisco

## 📌 Introduction

La sécurisation des accès administratifs est essentielle pour protéger les équipements réseau Cisco.

Objectifs :

- empêcher les accès non autorisés
- protéger la configuration
- sécuriser l’administration distante

Les principales mesures de sécurité sont :

- sécuriser les **lignes d’accès (console / VTY)**
- utiliser **SSH au lieu de Telnet**
- chiffrer les mots de passe
- contrôler les accès avec des **ACL**
- utiliser **AAA (Authentication Authorization Accounting)**.

---

# 🧠 Principes de sécurité

| Objectif | Description |
|---|---|
Intégrité | protéger les données contre les modifications |
Confidentialité | empêcher l’accès non autorisé |
Authentification | vérifier l’identité de l’utilisateur |
Traçabilité | journaliser les connexions |

---

# 1️⃣ Configuration du mot de passe console

Le mot de passe console protège l’accès **physique** à l’équipement.

```bash
enable
configure terminal

line console 0
password P@ssw0rd
login
end
```

Fonctionnement :

- `line console 0` → configuration de la console
- `password` → définition du mot de passe
- `login` → activation de la demande de mot de passe.

---

# 2️⃣ Mot de passe du mode privilégié

Le **mode privilégié (enable)** permet d'accéder aux commandes d'administration avancées.

Configuration :

```bash
configure terminal
enable secret SecretP@ssw0rd
end
```

⚠️ `enable secret` est **chiffré**, contrairement à `enable password`.

---

# 🔐 Chiffrement des mots de passe

Par défaut, certains mots de passe apparaissent en clair dans la configuration.

Commande :

```bash
service password-encryption
```

Vérification :

```bash
show running-config
```

Cette commande chiffre :

- mot de passe console
- mot de passe VTY
- autres mots de passe locaux.

---

# 3️⃣ Accès distant via Telnet

Telnet permet d’administrer le routeur à distance.

⚠️ Problème :

```
Telnet n’est pas chiffré
```

---

## Configuration Telnet

```bash
enable
configure terminal

banner login #Acces Restreint#

line vty 0 15
password P@ssw0rdTelnet
login
exec-timeout 5 0

end
```

Fonction des commandes :

| Commande | Fonction |
|---|---|
banner login | message d’avertissement |
line vty | accès distant |
exec-timeout | déconnexion automatique |

---

## Activation du monitoring terminal

```bash
terminal monitor
```

Permet d’afficher :

- messages système
- logs
- debug.

---

# 4️⃣ Accès distant sécurisé avec SSH

SSH est recommandé car il **chiffre les communications**.

---

## Étapes de configuration

### Création d’un utilisateur

```bash
username sebastien secret cisco
```

---

### Définition du domaine

```bash
ip domain-name eni.local
```

---

### Génération des clés RSA

```bash
crypto key generate rsa general-keys modulus 2048
```

---

### Configuration SSH

```bash
ip ssh version 2
ip ssh time-out 60
ip ssh authentication-retries 2
```

---

### Configuration des lignes VTY

```bash
line vty 0 15
no password
transport input ssh
login local
end
```

---

# 🔎 Vérification SSH

Commandes utiles :

```bash
show users
```

Afficher les utilisateurs connectés.

---

```bash
show ssh
```

Afficher les connexions SSH actives.

---

```bash
show ip ssh
```

Afficher les paramètres SSH.

---

# 🖥️ Connexion au routeur

## Connexion Telnet

```bash
telnet 192.168.0.254
```

---

## Connexion SSH

```bash
ssh -l sebastien 192.168.0.254
```

---

# 🛡️ Bonnes pratiques de sécurité

| Bonne pratique | Description |
|---|---|
Utiliser SSH | éviter Telnet |
Activer chiffrement | `service password-encryption` |
Limiter les accès | ACL |
Utiliser AAA | authentification centralisée |
Utiliser des mots de passe forts | sécurité renforcée |

---

# ⚠️ Points d’attention

> [!warning]

- ne pas laisser Telnet activé
- sécuriser les lignes VTY
- utiliser `enable secret`
- limiter les connexions administrateur.

---

# 🧾 Résumé

| Élément | Description |
|---|---|
Console | accès local |
VTY | accès distant |
Telnet | non sécurisé |
SSH | accès distant sécurisé |
Enable secret | mot de passe administrateur |

Les bonnes pratiques incluent :

- **SSH**
- **chiffrement des mots de passe**
- **contrôle des accès**.

Ces mesures permettent de **protéger efficacement les équipements Cisco contre les accès non autorisés**.