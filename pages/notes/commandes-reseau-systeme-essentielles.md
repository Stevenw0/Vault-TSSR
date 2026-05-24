# 🪟 Windows — Commandes réseau & système essentielles

> [!info]
> Windows fournit de nombreuses commandes intégrées permettant de **diagnostiquer le réseau**,  
> **analyser le système** et **configurer l’environnement utilisateur** rapidement.

Ces commandes peuvent être lancées depuis :
- **Invite de commandes (cmd)**
- **PowerShell**
- **Win + R**
- Scripts `.bat` / `.ps1`

---

## 🌐 `ipconfig` — Configuration réseau

```cmd
ipconfig
```

Affiche :
- adresse IP
- masque de sous-réseau
- passerelle par défaut

---

### Options courantes
```cmd
ipconfig /all
```
➡ Infos complètes (DNS, DHCP, MAC…)

```cmd
ipconfig /release
ipconfig /renew
```
➡ Renouvellement DHCP

```cmd
ipconfig /flushdns
```
➡ Vide le cache DNS local

> [!tip]
> Indispensable pour tout **dépannage réseau**.

---

## 🧭 `tracert` — Traçage de route réseau

```cmd
tracert google.com
```

Montre :
- le chemin emprunté par les paquets
- chaque routeur intermédiaire (*hop*)

> [!note]
> Utile pour identifier :
> - latence
> - coupures réseau
> - blocages ISP / pare-feu

---

### Options utiles
```cmd
tracert -d google.com
```
➡ Désactive la résolution DNS (plus rapide)

---

## 🌍 `nslookup` — Diagnostic DNS

```cmd
nslookup google.com
```

Permet de :
- vérifier la résolution DNS
- interroger un serveur DNS précis
- analyser les enregistrements

---

### Exemples
```cmd
nslookup google.com 8.8.8.8
```

```cmd
nslookup
> set type=MX
> gmail.com
```

> [!important]
> `nslookup` fonctionne même si la résolution Windows est cassée.

---

## ⚙️ `sysdm.cpl` — Propriétés système

```text
sysdm.cpl
```

Ouvre :
- informations système
- paramètres avancés
- profils utilisateurs
- nom de l’ordinateur
- variables d’environnement
- paramètres RDP

> [!tip]
> Très utilisé pour :
> - renommer un PC
> - joindre un domaine
> - configurer les performances
> - accéder aux variables système

---

## 🔋 `powercfg` — Gestion de l’alimentation

```cmd
powercfg
```

Outil avancé pour :
- analyser la consommation énergétique
- gérer les plans d’alimentation
- diagnostiquer la mise en veille

---

### Commandes courantes
```cmd
powercfg /list
```
➡ Liste des plans d’alimentation

```cmd
powercfg /setactive GUID
```
➡ Active un plan précis

```cmd
powercfg /energy
```
➡ Génère un rapport HTML d’analyse énergétique

```cmd
powercfg /batteryreport
```
➡ Rapport batterie (PC portable)

```cmd
powercfg /devicequery wake_armed
```
➡ Périphériques autorisés à réveiller le PC

> [!important]
> Les rapports sont générés dans le dossier courant (HTML).

---

## 🧠 Bonnes pratiques

> [!tip]
> - `ipconfig` + `nslookup` = diagnostic DNS complet
> - `tracert` pour localiser les lenteurs réseau
> - `sysdm.cpl` pour accéder vite aux réglages critiques
> - `powercfg` pour diagnostiquer autonomie et veille

> [!warning]
> Certaines commandes nécessitent des **droits administrateur**.

---

## 🧾 Tableau récapitulatif

| Commande | Domaine | Fonction principale |
|-------|-------|-------------------|
| `ipconfig` | Réseau | Configuration IP |
| `tracert` | Réseau | Chemin réseau |
| `nslookup` | DNS | Résolution de noms |
| `sysdm.cpl` | Système | Propriétés avancées |
| `powercfg` | Énergie | Alimentation & veille |

---

## 🧾 Summary

> [!summary]
> - `ipconfig` est la base du diagnostic réseau
> - `tracert` analyse les chemins réseau
> - `nslookup` vérifie la résolution DNS
> - `sysdm.cpl` centralise les paramètres système avancés
> - `powercfg` est un outil puissant pour l’énergie
> - Ces commandes sont incontournables pour le support Windows
