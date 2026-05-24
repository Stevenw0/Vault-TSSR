# 🔁 Bash — Boucle `while`

> [!info]
> La boucle `while` permet d’exécuter un bloc d’instructions  
> **tant qu’une commande ou une condition réussit**  
> (code de retour `0`).

---

## 🧠 Principe de fonctionnement

> [!important]
> Une boucle `while` :
> - teste une condition **avant chaque itération**
> - continue tant que la condition est **vraie**
> - s’arrête dès que la condition devient **fausse**

En Bash :
- code retour `0` → **vrai**
- code retour ≠ `0` → **faux**

---

## 🧱 Syntaxe générale

```bash
while commande
do
    instructions
done
```

> [!note]
> La `commande` peut être :
> - un test (`[ ]`, `[[]]`)
> - une commande système
> - une expression arithmétique
> - `true` ou `false`

---

## 🔢 Exemple 1 — Compteur décroissant

```bash
#!/bin/bash

clear

# déclaration de la variable compteur
cpt=11

# boucle while tant que cpt ≠ 0
while [ "$cpt" -ne 0 ]
do
    # décrémentation
    cpt=$(( cpt - 1 ))

    # affichage
    echo "$cpt"
done

exit 0
```

---

## 🔍 Analyse de l’exemple

- La condition est testée **avant chaque tour**
- La variable `cpt` est **modifiée dans la boucle**
- Sans décrémentation, la boucle serait **infinie**

> [!warning]
> Oublier de modifier la variable de contrôle est une **erreur classique**.

---

## 🔄 Boucle infinie avec `while true`

> [!info]
> `true` est une commande qui retourne toujours **0**  
> → la boucle ne s’arrête jamais seule.

---

## 🧪 Exemple — Boucle infinie

```bash
#!/bin/bash

clear

cpt=0

while true
do
    echo "$cpt"
    ((cpt++))
    sleep 1
done

exit 0
```

> [!warning]
> Cette boucle est **volontairement infinie**  
> → elle doit être **interrompue manuellement** (`Ctrl+C`)
> ou par une instruction `break`.

---

## 🛑 Ajouter une condition d’arrêt (sécurité)

> [!tip]
> Toute boucle infinie devrait avoir une **condition de sortie explicite**.

### Exemple : arrêt automatique à 25

```bash
#!/bin/bash

clear

cpt=0

while true
do
    echo "$cpt"

    if (( cpt == 25 )); then
        echo "Limite atteinte, arrêt de la boucle"
        break
    fi

    ((cpt++))
    sleep 1
done

exit 0
```

---

## 🧠 Autres formes courantes de `while`

### Avec arithmétique
```bash
while (( cpt > 0 ))
do
    ((cpt--))
done
```

### Avec une commande système
```bash
while ping -c1 google.com >/dev/null 2>&1
do
    echo "Connexion active"
    sleep 5
done
```

> [!note]
> La boucle continue tant que la commande réussit.

---

## ⚠️ Bonnes pratiques avec `while`

> [!important]
> - Toujours prévoir une **condition de sortie**
> - Vérifier que la variable de contrôle évolue
> - Utiliser `(( ))` pour les tests numériques
> - Éviter les boucles infinies non contrôlées
> - Ajouter des délais (`sleep`) si nécessaire

---

## 🔁 `while` vs `for`

| `while` | `for` |
|------|------|
| Basé sur une condition | Basé sur une liste / compteur |
| Flexible | Plus structuré |
| Risque de boucle infinie | Plus sûr |
| Idéal pour attentes / surveillance | Idéal pour parcours |

---

## 🧾 Summary

> [!summary]
> - `while` exécute un bloc **tant qu’une condition est vraie**
> - La condition est testée **avant chaque itération**
> - `while true` crée une boucle infinie
> - `break` permet de sortir proprement d’une boucle
> - Toujours prévoir une **sécurité d’arrêt**
> - `while` est idéal pour les compteurs dynamiques et la surveillance

