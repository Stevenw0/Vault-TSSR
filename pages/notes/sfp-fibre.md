# 📘 SFP & Fibre — Réseaux

---

# 🔌 1️⃣ Qu’est-ce qu’un SFP ?

Un **SFP (Small Form-factor Pluggable)** est un **module amovible** qui se branche dans un port dédié sur :

- switch
- routeur

---

## 📊 Fonction

| Élément | Description |
|---|---|
| SFP | module interchangeable |
| Port SFP | port universel |
| Type connexion | dépend du module |

---

👉 Le port est universel, le module définit :

- fibre optique
- Ethernet (RJ45)

---

# ⚙️ 2️⃣ Fonctionnement dans un switch

## Étapes

1. insérer module SFP
2. connecter câble (fibre ou cuivre)
3. liaison établie automatiquement

---

## Exemple

```
Switch → SFP → Fibre → Autre switch
```

---

# 🎯 3️⃣ À quoi servent les SFP ?

| Usage | Description |
|---|---|
| Flexibilité | plusieurs types de liens |
| Débit | 1G, 10G, 25G+ |
| Distance | plusieurs km |
| Interconnexion | équipements réseau |

---

# 🚀 4️⃣ Différence SFP / SFP+ / QSFP

## 📊 Comparatif

| Type | Débit | Usage |
|---|---|---|
| SFP | 1 Gbps | réseau standard |
| SFP+ | 10 Gbps | backbone / datacenter |
| QSFP | 40 Gbps | très haut débit |
| QSFP+ | 40 Gbps | évolution QSFP |
| QSFP28 | 100 Gbps | datacenter moderne |

---

## 🧠 Explication

| Technologie | Description |
|---|---|
| SFP | version de base |
| SFP+ | même format, plus rapide |
| QSFP | 4 canaux parallèles |
| QSFP28 | version 100G |

---

👉 Important :

- SFP+ ≠ SFP (pas toujours compatibles)
- QSFP utilise plusieurs canaux en parallèle

---

# 🏠 5️⃣ Réseau domestique (FAI)

## Architecture

```
Fibre → ONT → Box → Switch → Appareils
```

---

## ⚠️ Important

| Élément | Rôle |
|---|---|
| ONT | conversion fibre → Ethernet |
| Box | gestion réseau |

---

👉 ❌ On ne branche pas directement la fibre sur un switch

---

# 🏢 6️⃣ Réseau entreprise

## Architecture

```
Fibre FAI → Routeur → Switch → Utilisateurs
```

---

## Particularités

| Élément | Description |
|---|---|
| Fibre directe | via SFP |
| Pas de box | infra pro |
| Config avancée | VLAN, routing |

---

# 🔌 7️⃣ Fibre entre switches (cas principal)

## Schéma

```
Switch A ⇄ Switch B
```

---

## Matériel

| Équipement | Quantité |
|---|---|
| Ports SFP | 2 |
| Modules SFP | 2 |
| Câble fibre | 1 |

---

# 🎯 8️⃣ Avantages de la fibre

| Avantage | Description |
|---|---|
| Débit | très élevé (100 Gbps+) |
| Distance | longue |
| Interférences | aucune |
| Backbone | idéal |

---

# ⚠️ 9️⃣ Points d’attention

## Compatibilité

| Élément | Risque |
|---|---|
| SFP | dépend constructeur |
| vitesse | 1G ≠ 10G |
| port | incompatibilité |

---

## Types de fibre

| Type | Usage |
|---|---|
| Multimode | courte distance |
| Monomode | longue distance |

---

# 🧠 Cas typiques

| Cas | Solution |
|---|---|
| Maison | fibre → box |
| Entreprise | SFP direct |
| Backbone | fibre inter-switch |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| SFP | module réseau |
| SFP+ | version 10G |
| QSFP | très haut débit |
| fibre | rapide et longue distance |
| usage | interconnexion équipements |

---

# 🎯 Conclusion

- le **SFP apporte flexibilité**
- le **SFP+ est la norme actuelle en entreprise**
- le **QSFP est utilisé en datacenter**
- la fibre sert principalement au **backbone réseau**

👉 Plus le débit augmente, plus on passe vers **SFP+ puis QSFP**