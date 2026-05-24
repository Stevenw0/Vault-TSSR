# 🌐 Fibre noire (Dark Fiber)

## 📌 Définition

La **fibre noire** (ou *dark fiber*) est une **fibre optique installée mais non utilisée**, louée ou exploitée directement par une entreprise ou un opérateur.

👉 "Noire" = **non éclairée** (aucun signal actif)

L’utilisateur final est responsable de :

- l’équipement réseau
- l’émission du signal
- la gestion du lien

---

# 🧠 Principe de fonctionnement

Dans une fibre noire :

```
Entreprise / opérateur
        ↓
Fibre optique passive
        ↓
Équipement actif (client)
        ↓
Transmission des données
```

Contrairement à une fibre classique :

- aucun service préconfiguré
- aucune gestion opérateur du trafic

---

# 📊 Fibre noire vs fibre opérateur

| Critère | Fibre noire | Fibre opérateur |
|---|---|---|
| Gestion | client | opérateur |
| Équipement | client | opérateur |
| Flexibilité | élevée | limitée |
| Coût initial | élevé | plus faible |
| Performance | maximale | dépend du service |

---

# ⚙️ Fonctionnement technique

La fibre noire est :

- une **infrastructure physique uniquement**
- composée de fibres optiques passives
- connectée via des **points de présence (POP)**

Le client doit installer :

- transceivers (SFP / QSFP)
- équipements réseau (switch / routeur)
- systèmes de transmission (DWDM)

---

# 📦 Équipements utilisés

| Équipement | Rôle |
|---|---|
| SFP / QSFP | conversion signal optique |
| Switch | gestion réseau |
| Routeur | routage |
| DWDM | multiplexage longue distance |

---

# 🌍 Cas d’utilisation

| Usage | Exemple |
|---|---|
| interconnexion datacenters | liaison DC |
| entreprises multi-sites | backbone privé |
| opérateurs | extension réseau |
| cloud providers | haute capacité |

---

# 🚀 Avantages

| Avantage | Description |
|---|---|
| contrôle total | gestion complète du réseau |
| haute performance | débit maximal |
| faible latence | liaison directe |
| évolutivité | adaptation facile |

---

# ⚠️ Inconvénients

| Inconvénient | Description |
|---|---|
| coût initial élevé | matériel + installation |
| complexité | nécessite expertise |
| maintenance | à la charge du client |

---

# 🔎 Exemple d’architecture

```
Datacenter A
     |
     | Fibre noire
     |
Datacenter B
```

Le client gère :

- la bande passante
- les protocoles
- la sécurité

---

# 📊 Différence clé

| Élément | Fibre noire |
|---|---|
| Service | aucun |
| Infrastructure | fibre seule |
| Responsabilité | client |
| Configuration | libre |

---

# ⚠️ Points d’attention

> [!warning]

- nécessite compétences réseau avancées
- dépendance à l’infrastructure physique
- prévoir redondance

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| Fibre noire | fibre optique non utilisée |
| gestion | client |
| avantage | performance maximale |
| inconvénient | complexité |
| usage | backbone, datacenter |

La fibre noire permet de **construire un réseau privé très performant avec un contrôle total**, mais demande **des compétences techniques élevées**.