# 🕸️ VLAN Hopping — Attaque réseau

---

# 📌 Définition

Le **VLAN Hopping** est une attaque permettant :

- de passer d’un VLAN à un autre
- sans autorisation

👉 objectif : contourner la segmentation réseau

---

# 🧠 Principe

```
Attaquant (VLAN A) → attaque → accès VLAN B
```

👉 brise l’isolation réseau

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| contourner | segmentation |
| accéder | réseau isolé |
| espionner | trafic |
| compromettre | systèmes |

---

# 📊 Types d’attaques

| Type | Description |
|---|---|
| Switch Spoofing | se fait passer pour un switch |
| Double Tagging | double VLAN tag |

---

# ⚙️ 1️⃣ Switch Spoofing

## Principe

- attaquant simule un switch
- négocie un trunk (DTP)

```
Attaquant ⇄ Switch → trunk activé
```

---

## Résultat

👉 accès à plusieurs VLANs

---

# ⚙️ 2️⃣ Double Tagging

## Principe

- paquet avec 2 tags VLAN
- le premier est supprimé par le switch
- le second permet d’atteindre un autre VLAN

---

## Schéma

```
[ VLAN 1 ][ VLAN cible ] → Switch → VLAN cible
```

---

# ⚠️ Conditions

| Condition | Description |
|---|---|
| trunk actif | nécessaire |
| VLAN natif | vulnérable |
| switch mal configuré | risque |

---

# 🔎 Impact

| Impact | Description |
|---|---|
| accès non autorisé | VLAN |
| fuite données | réseau |
| MITM | possible |
| attaque interne | propagation |

---

# 🛡️ Protection

## Configuration switch

| Mesure | Description |
|---|---|
| désactiver DTP | no auto trunk |
| définir ports access | mode access |
| changer VLAN natif | éviter VLAN 1 |
| limiter VLAN trunk | restrict |

---

## Bonnes pratiques

| Action | Description |
|---|---|
| utiliser VLAN dédiés | sécurité |
| segmenter réseau | isolation |
| surveiller trafic | logs |
| sécuriser switch | config |

---

# ⚙️ Exemple Cisco

```bash
switchport mode access
switchport nonegotiate
```

---

# 📊 VLAN Hopping vs autres attaques

| Attaque | Différence |
|---|---|
| VLAN hopping | segmentation |
| ARP spoofing | MITM |
| MITM | interception |
| DDoS | saturation |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| VLAN hopping | attaque VLAN |
| objectif | accès |
| méthode | tagging |
| risque | élevé |
| protection | config switch |

---

# 🎯 Conclusion

Le VLAN Hopping :

- exploite une mauvaise configuration réseau
- permet de contourner la sécurité

👉 pour s’en protéger :

🔥 bonne configuration des switches  
🔥 désactiver les trunks inutiles  
🔥 surveiller le réseau