# 🧩 Bash — Structure `case`

> [!info]
> La structure `case` permet de remplacer des enchaînements complexes de `if / elif / else`  
> lorsqu’on compare **une même valeur à plusieurs possibilités**.

---

## 🎨 Exemple avec `if` (traducteur de couleurs)

### Problème à résoudre
Créer un traducteur simple :
- `Vert` → `Green`
- `Marron` → `Brown`

### Implémentation avec `if`

```bash
#!/bin/bash
# traducteur de couleur pour vert et marron

if [ $# -ne 1 ]
then
    echo "$0: pb argument"
    exit 1
fi

if [ "$1" = "Vert" ]
then
    echo "Green"
elif [ "$1" = "Marron" ]
then
    echo "Brown"
else
    echo "Couleur inconnue"
fi
```

> [!warning]
> Cette solution fonctionne, mais :
> - elle devient **lourde à lire**
> - elle est **difficile à maintenir**
> - elle se dégrade vite si le nombre de cas augmente

---

## ✅ Pourquoi utiliser `case`

> [!tip]
> `case` est parfaitement adapté lorsque :
> - on teste **une seule variable**
> - contre **plusieurs valeurs possibles**
> - avec des variantes ou motifs

Avantages :
- meilleure **lisibilité**
- code plus **compact**
- maintenance plus simple
- support des **motifs (glob)**

---

## 🧱 Structure générale de `case`

```bash
case VARIABLE in
    motif1) commandes ;;
    motif2) commandes ;;
    *)      commandes ;;
esac
```

### Règles importantes
- Chaque bloc se termine par `;;`
- `*` est le **cas par défaut**
- `esac` ferme obligatoirement la structure

> [!important]
> `case` ne teste **pas des expressions**, mais des **correspondances de motifs**.

---

## 🎨 Exemple avec `case` (version recommandée)

```bash
#!/bin/bash

if [ $# -ne 1 ]
then
    echo "$0: pb argument"
    exit 1
fi

case "$1" in
    [Vv]ert)
        echo "Green"
        ;;
    [Mm]arron|[Bb]run)
        echo "Brown"
        ;;
    *)
        echo "Couleur inconnue"
        exit 2
        ;;
esac
```

---

## 🔍 Détails importants

### 🔹 Sensibilité à la casse
```bash
[Vv]ert
```
→ accepte `Vert` et `vert`

### 🔹 Alternatives multiples
```bash
[Mm]arron|[Bb]run
```
→ accepte plusieurs mots pour un même résultat

> [!note]
> Les motifs utilisés dans `case` sont des **globs**, pas des regex.

---

## 🧪 Motifs courants dans `case`

| Motif | Signification |
|------|---------------|
| `*` | n’importe quelle valeur |
| `?` | un caractère |
| `[abc]` | un caractère parmi a, b ou c |
| `[a-z]` | intervalle |
| `mot1|mot2` | alternative |

---

## ⚠️ Bonnes pratiques

> [!tip]
> - Toujours **mettre la variable entre guillemets**
> - Toujours prévoir un **cas par défaut `*`**
> - Utiliser des **codes de retour différents** pour signaler les erreurs

> [!warning]
> Oublier `;;` entraîne une **chute involontaire** dans le cas suivant.

---

## 🧾 Summary

> [!summary]
> - `case` remplace avantageusement de longs `if / elif`
> - Il compare **une valeur** à **plusieurs motifs**
> - Le code est plus **lisible**, **maintenable** et **robuste**
> - Les motifs sont des **globs**, pas des regex
> - Toujours fermer avec `esac` et chaque cas avec `;;`
