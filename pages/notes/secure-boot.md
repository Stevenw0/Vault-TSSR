# 🔐 Secure Boot

## 📌 Introduction

**Secure Boot** est une fonctionnalité de sécurité intégrée dans le firmware **UEFI**.

Elle permet de **vérifier l’intégrité et la signature des composants du boot** afin d’empêcher le lancement de logiciels malveillants.

Objectif :

- empêcher les **bootkits / rootkits**
- garantir que seul du code **signé et approuvé** est exécuté

---

# 🧠 Principe de fonctionnement

Secure Boot fonctionne avec un système de **clés cryptographiques**.

Processus :

```
UEFI
 ↓
Vérification du bootloader (signature)
 ↓
Vérification du kernel
 ↓
Chargement autorisé uniquement si valide
```

Si un composant n’est pas signé ou est modifié :

```
❌ Blocage du démarrage
```

---

# 🔑 Les clés utilisées

| Clé | Rôle |
|---|---|
| PK (Platform Key) | clé principale |
| KEK (Key Exchange Key) | gestion des clés |
| DB | base des signatures autorisées |
| DBX | base des signatures interdites |

---

# 📊 Fonctionnement détaillé

| Étape | Action |
|---|---|
| 1 | UEFI démarre |
| 2 | vérifie le bootloader |
| 3 | vérifie le noyau |
| 4 | charge le système si valide |

---

# ⚙️ Composants concernés

Secure Boot vérifie :

| Composant | Exemple |
|---|---|
| Bootloader | GRUB |
| Kernel | Linux kernel |
| Drivers UEFI | modules firmware |
| OS loader | Windows Boot Manager |

---

# 🧾 Vérifier l’état de Secure Boot (Linux)

```bash
mokutil --sb-state
```

Exemple :

```
SecureBoot enabled
```

---

# ⚙️ Vérifier via BIOS/UEFI

Au démarrage :

```
F2 / DEL / ESC
```

Puis :

```
Secure Boot → Enabled / Disabled
```

---

# ⚙️ Secure Boot et Linux

Linux peut fonctionner avec Secure Boot grâce à :

- bootloader signé (GRUB signé)
- shim (loader intermédiaire signé)
- noyau signé

---

# 📦 Shim (important)

Le **shim** est un composant utilisé sous Linux.

Rôle :

```
UEFI → shim → GRUB → kernel
```

Il permet :

- compatibilité avec Secure Boot
- chargement de clés personnalisées

---

# ⚠️ Problèmes courants

| Problème | Cause |
|---|---|
| OS ne démarre pas | signature invalide |
| GRUB bloqué | Secure Boot actif |
| module kernel refusé | non signé |

---

# ⚙️ Désactiver Secure Boot

Dans le BIOS/UEFI :

```
Secure Boot → Disabled
```

---

⚠️ Attention :

> [!warning]

- désactiver Secure Boot réduit la sécurité
- peut être nécessaire pour certains OS ou drivers

---

# 📊 Avantages / Inconvénients

| Avantages | Inconvénients |
|---|---|
| protection contre malware | compatibilité limitée |
| intégrité du système | complexité |
| sécurité au boot | nécessite signatures |

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| Secure Boot | sécurité au démarrage |
| technologie | UEFI |
| principe | vérification de signature |
| objectif | empêcher code malveillant |
| Linux | support via shim |

Secure Boot permet de **sécuriser la chaîne de démarrage en empêchant l’exécution de code non autorisé dès le boot**.