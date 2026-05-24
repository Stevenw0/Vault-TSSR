# 🧠 Subnetting — Méthode rapide (IP & CIDR)

---


# Flashcard Simple 

| Masque            | bits restants / 128   64   32   16   8   4   2   1 |
| ----------------- | -------------------------------------------------- |
| Bloc              | 256 - dernière valeur du masque                    |
| Réseau            | valeur IP importante ÷ bloc × bloc                 |
| Broadcast         | réseau + bloc - 1                                  |
| 1er hôte          | réseau + 1                                         |
| Dernier hôte      | broadcast - 1                                      |
| Total adresses    | 2^n n = 32 - CIDR                                  |
| Hôtes utilisables | Résultat Total adresses - 2                        | 


# 🔢 1️⃣ Tableau des bits (à connaître)

Chaque octet = 8 bits :

```
128   64   32   16   8   4   2   1
```

👉 Sert à construire les masques

---

# 🔎 2️⃣ Trouver le masque (CIDR → décimal)

## Exemple : /26

- 24 bits → `255.255.255`
- reste 2 bits :

```
128 + 64 = 192
```

👉 masque :

```
255.255.255.192
```

---

## ⚡ Tableau à mémoriser

| CIDR | Valeur |
|---|---|
| /25 | 128 |
| /26 | 192 |
| /27 | 224 |
| /28 | 240 |
| /29 | 248 |
| /30 | 252 |

---

# 🧠 3️⃣ Trouver l’octet important

| CIDR | Octet |
|---|---|
| /1–8 | 1er |
| /9–16 | 2e |
| /17–24 | 3e |
| /25–32 | 4e |

---

# 🔥 4️⃣ Calculer le bloc

## Formule

```
Bloc = 256 - valeur du masque
```

---

## Exemple (/27)

```
256 - 224 = 32
```

👉 bloc = **32**

---

# 🚀 5️⃣ Méthode rapide (division)

## Formule

```
réseau = (valeur ÷ bloc) × bloc
```

---

## 🔹 Exemple

IP : `192.168.1.173 /27`

- 4e octet = 173
- bloc = 32

```
173 ÷ 32 = 5
5 × 32 = 160
```

👉 réseau = **192.168.1.160**

---

# 📡 6️⃣ Broadcast

## Formule

```
broadcast = réseau + bloc - 1
```

---

## Exemple

```
160 + 32 - 1 = 191
```

👉 broadcast = **192.168.1.191**

---

# 💻 7️⃣ Hôtes

## Règles

| Élément | Calcul |
|---|---|
| 1er hôte | réseau + 1 |
| dernier hôte | broadcast - 1 |

---

## Exemple

| Type | Adresse |
|---|---|
| 1er hôte | 192.168.1.161 |
| dernier hôte | 192.168.1.190 |

---

# 🔢 8️⃣ Nombre d’adresses

## Formule

```
2^n
```

---

## Avec

```
n = 32 - CIDR
```

---

## Exemple (/27)

```
32 - 27 = 5
2^5 = 32 adresses
```

👉 utilisables :

```
32 - 2 = 30
```

---

# 🧠 9️⃣ Méthode complète

Toujours suivre :

| Étape | Action |
|---|---|
| 1 | Trouver le masque |
| 2 | Trouver l’octet important |
| 3 | Calculer le bloc |
| 4 | Faire la division |
| 5 | Trouver réseau |
| 6 | Trouver broadcast |
| 7 | Trouver hôtes |
| 8 | Calculer 2^n |

---

# ⚡ Astuce ultime

> [!tip]

- ❌ Ne jamais lister les sous-réseaux
- ✔️ Toujours utiliser la division

---

# 🎯 Exemple final

IP : `10.10.10.10 /30`

---

## Calcul

| Élément | Valeur |
|---|---|
| Masque | 255.255.255.252 |
| Bloc | 4 |

---

```
10 ÷ 4 = 2
2 × 4 = 8
```

---

## Résultat

| Type | Adresse |
|---|---|
| Réseau | 10.10.10.8 |
| Broadcast | 10.10.10.11 |
| Hôtes | 10.10.10.9 – 10.10.10.10 |

---

# 🧾 Résumé

| Élément | Méthode |
|---|---|
| Réseau | division |
| Broadcast | + bloc - 1 |
| Hôtes | +1 / -1 |
| Nombre IP | 2^(32-CIDR) |

👉 Cette méthode permet de **résoudre n’importe quel subnetting en quelques secondes**.