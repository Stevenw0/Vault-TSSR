# 🌐 Double NAT — Network Address Translation

---

# 📌 Définition

Le **Double NAT** se produit lorsqu’un réseau est **traduits deux fois** par deux routeurs différents.

👉 Typiquement :

```
Internet → Routeur FAI → Routeur perso → Appareils
```

---

# 🧠 Principe de fonctionnement

Chaque routeur effectue une traduction d’adresse (NAT) :

```
IP privée → IP publique (Routeur 1)
IP privée → IP privée (Routeur 2)
```

---

## Schéma

```
PC (192.168.1.10)
 ↓
Routeur perso (192.168.1.1)
 ↓
Routeur FAI (192.168.0.1)
 ↓
Internet
```

---

# 📊 Exemple concret

| Niveau | Adresse |
|---|---|
| PC | 192.168.1.10 |
| Routeur perso | 192.168.1.1 |
| Routeur FAI | 192.168.0.1 |
| IP publique | 80.x.x.x |

---

# 🎯 Pourquoi ça arrive ?

| Situation | Cause |
|---|---|
| Box + routeur perso | double équipement |
| Fibre ONT + routeur | mauvaise config |
| CGNAT | opérateur |

---

# ⚠️ Problèmes du Double NAT

| Problème | Description |
|---|---|
| Port forwarding | difficile |
| Jeux en ligne | NAT strict |
| VPN | problèmes connexion |
| VoIP | instabilité |
| Debug | complexe |

---

# 🔎 Comment détecter un Double NAT

## Méthode 1

Comparer :

```bash
ipconfig
```

et IP publique (site web)

---

👉 Si IP WAN du routeur ≠ IP publique → Double NAT

---

## Méthode 2

Sur le routeur :

- vérifier IP WAN
- si IP privée → Double NAT

---

# 📊 Types d’IP privées

| Plage | Usage |
|---|---|
| 192.168.x.x | LAN |
| 10.x.x.x | LAN |
| 172.16–31.x.x | LAN |

---

# 🛠️ Solutions

## 1️⃣ Mode bridge (recommandé)

Mettre la box en bridge :

```
Box → modem simple
Routeur perso → NAT unique
```

---

## 2️⃣ DMZ

Configurer DMZ sur la box vers le routeur :

👉 réduit le double NAT

---

## 3️⃣ Désactiver NAT sur un routeur

Utiliser :

- mode AP (Access Point)

---

## 4️⃣ Utiliser un seul routeur

👉 solution la plus simple

---

# 🧠 Double NAT vs CGNAT

| Type | Description |
|---|---|
| Double NAT | interne (chez toi) |
| CGNAT | opérateur |

---

# ⚙️ Cas typique maison

```
Fibre → ONT → Box → Routeur WiFi → PC
```

👉 Double NAT si routeur perso activé

---

# ⚠️ Bonnes pratiques

> [!warning]

- éviter Double NAT en production
- privilégier mode bridge
- simplifier architecture
- documenter réseau

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Double NAT | double traduction |
| cause | 2 routeurs |
| problème | réseau instable |
| solution | bridge / AP |
| impact | jeux, VPN, ports |

---

# 🎯 Conclusion

Le Double NAT :

- fonctionne, mais
- complique le réseau

👉 À éviter dès que possible pour :

- performance
- simplicité
- compatibilité