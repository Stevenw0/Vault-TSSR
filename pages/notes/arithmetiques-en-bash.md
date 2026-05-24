# 🔢 Gestion des variables arithmétiques en Bash

Bash permet de réaliser des **opérations arithmétiques** directement dans le shell et dans les scripts.  
Cependant, il est important de comprendre ses **limites** (entiers uniquement) et les **outils complémentaires** comme `bc`.

---

## 📌 Principe général

> [!info]  
> En Bash, **toutes les variables sont des chaînes de caractères**,  
> mais certaines syntaxes permettent leur **interprétation arithmétique**.

---

## 🧮 Méthodes de calcul en Bash

### 1️⃣ L’opérateur arithmétique `$(( expression ))` (recommandé)

C’est la méthode **la plus moderne et la plus utilisée**.

```bash
a=5
b=3

result=$((a + b))
echo $result   # 8

echo $((a * b)) # 15
```

#### Opérations supportées

- `+` addition  
- `-` soustraction  
- `*` multiplication  
- `/` division entière  
- `%` modulo  

---

### 2️⃣ La commande `let`

Commande intégrée de Bash pour des calculs simples.

```bash
let result=a+b
echo $result   # 8

let result=a*b
echo $result   # 15
```

> [!note]  
> `let` est fonctionnelle mais **moins lisible** que `$(( ))`.

---

### 3️⃣ La commande `expr` (ancienne méthode)

Commande externe, plus lente et moins pratique.

```bash
result=$(expr $a + $b)
echo $result   # 8

result=$(expr $a \* $b)
echo $result   # 15
```

> [!warning]  
> `*` doit être **échappé** avec `\`  
> 👉 `expr` est aujourd’hui **déconseillée**.

---

## ➗ Division et modulo en Bash

### Division entière

```bash
a=10
b=3

result=$((a / b))
echo $result   # 3
```

👉 Bash **tronque** le résultat (pas de virgule).

---

### Modulo (reste de la division)

```bash
result=$((a % b))
echo $result   # 1
```

---

### Nombres négatifs

```bash
c=-10
d=3

echo $((c / d))  # -4
echo $((c % d))  # -1
```

---

## 🧠 Limite de Bash : pas de virgule flottante

> [!warning]  
> Bash **ne gère pas les nombres décimaux** en arithmétique interne.

👉 Pour cela, on utilise **`bc`**.

---

## 🧮 Calculs en virgule flottante avec `bc`

`bc` est une **calculatrice arbitraire de précision**.

### Division avec décimales

```bash
result=$(echo "scale=2; 5 / 3" | bc)
echo $result   # 1.67
```

- `scale` → nombre de décimales

---

### Exemple plus complexe

```bash
result=$(echo "scale=4; (20.5 + 5.5) / (2.5 * 3.1)" | bc)
echo $result   # 2.8226
```

---

## 🧪 Exemple pratique avec `bc` (script)

```bash
verifier_espace() {
   espace_dispo=$(df -h / | awk 'NR==2 {print $4}' | sed 's/G//')

   if [ "$(echo "$espace_dispo < 1" | bc)" -eq 1 ]; then
       echo "Attention : Moins de 1Go d'espace disponible !"
       read -p "Voulez-vous continuer ? (o/n) " reponse
       [ "$reponse" != "o" ] && exit 1
   fi
}
```

---

## 📐 Fonctions mathématiques avancées avec `bc -l`

L’option `-l` charge la **bibliothèque mathématique**.

```bash
result=$(echo "scale=4; s(3.14159 / 2)" | bc -l)
echo $result   # 1.0000
```

### Fonctions disponibles

| Fonction | Rôle |
|--------|------|
| `s(x)` | sinus |
| `c(x)` | cosinus |
| `a(x)` | arctangente |
| `l(x)` | logarithme naturel |
| `e(x)` | exponentielle |
| `x^y` | puissance |

---

### Exemple : calcul de π et sinus

```bash
pi=$(echo "scale=10; 4*a(1)" | bc -l)
sin_half_pi=$(echo "scale=4; s($pi/2)" | bc -l)

echo $sin_half_pi   # 1.0000
```

---

### Exemple : exponentielle

```bash
exp_three=$(echo "scale=4; e(3)" | bc -l)
echo $exp_three   # ≈ 20.0855
```

---

## 📜 Utilisation de `bc` avec heredoc (script lisible)

```bash
#!/bin/bash

result=$(bc -l << EOF
scale=3
a = (4.5 * 3.2) + 5
b = 2.5 ^ 2
a / b
EOF
)

echo $result
```

---

## ✅ Bonnes pratiques

> [!success]
> 
> - Utiliser `$(( ))` pour les **entiers**
> - Utiliser `bc` pour les **décimales**
> - Toujours définir `scale`
> - Éviter `expr`
> - Préférer les heredocs pour les calculs complexes

---

## 🧠 À retenir

> [!summary]
> 
> - Bash gère uniquement les **entiers**
> - `$(( ))` est la méthode standard
> - `%` permet le modulo
> - `bc` est indispensable pour les décimales
> - `bc -l` ouvre l’accès aux fonctions mathématiques avancées