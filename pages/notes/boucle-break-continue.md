# ⛔️➡️ Bash — Mots-clés `break` et `continue`

> [!info]
> `break` et `continue` sont des mots-clés qui modifient le **flux d’exécution** dans une boucle (`for`, `while`, `until`, `select`).
> Ils permettent de contrôler finement **quand sortir** d’une boucle ou **quand sauter** une itération.

---

## 🧩 Définition rapide

### `break`
- **Stoppe la boucle en cours** immédiatement.
- L’exécution reprend **après** la boucle.

### `continue`
- **Annule l’itération courante**.
- Passe directement à **l’itération suivante**.

> [!important]
> - `break` = je quitte la boucle
> - `continue` = je saute ce tour, mais je continue la boucle

---

## ✅ Quand utiliser `continue`

- Ignorer des éléments qui ne correspondent pas aux critères
- Passer des fichiers temporaires ou de sauvegarde
- Éviter de traiter des valeurs nulles ou vides
- Filtrer des données sans arrêter le traitement complet

> [!tip]
> `continue` est parfait pour appliquer un **filtre** dans une boucle.

---

## ✅ Quand utiliser `break`

- Arrêter une recherche dès qu’on trouve le résultat
- Sortir en cas d’erreur critique
- Respecter une limite de sécurité (temps, tentatives, etc.)
- Gérer les menus interactifs (commande “quitter”)

> [!tip]
> `break` est idéal pour stopper une boucle dès que l’objectif est atteint.

---

## 🧠 Bonnes pratiques

> [!warning]
> - Toujours documenter **pourquoi** on utilise `break` ou `continue`
> - Éviter les boucles infinies non contrôlées
> - Prévoir des conditions de sortie de sécurité
> - Tester le comportement avec différents types de données

> [!note]
> Dans des boucles imbriquées, `break` et `continue` affectent **uniquement la boucle la plus interne**  
> (sauf usage de `break 2`, `continue 2`, etc.).

---

## 🧪 Exemple : `continue` pour ignorer des fichiers `.tmp`

```bash
#!/bin/bash
# Script : traiter_fichiers.sh

echo "=== Traitement des fichiers ==="

# Créer quelques fichiers de test d'abord
for nom in script.sh config.conf readme.txt backup.tmp log.txt
do
    > "$nom"
done

# Traiter tous les fichiers mais ignorer les .tmp
for fichier in *.txt *.sh *.conf *.tmp
do
    # Ignorer les fichiers temporaires
    if "$fichier" == *.tmp; then
        echo "Fichier temporaire ignoré : $fichier"
        continue  # Passer au fichier suivant
    fi

    echo "Traitement de : $fichier"
    # Simulation du traitement
    wc -l "$fichier" 2>/dev/null || echo "  -> Fichier vide"
done

echo "Traitement terminé"
```

> [!tip]
> Ici `continue` évite de dupliquer le code :  
> dès qu’un fichier est `.tmp`, on saute directement au prochain.

---

## 🧪 Exemple : `continue` en style C (traiter uniquement les nombres pairs)

```bash
#!/bin/bash
# Script : nombres_pairs.sh

echo "=== Traitement des nombres pairs de 1 à 10 ==="

for ((nombre=1; nombre<=10; nombre++))
do
    # Ignorer les nombres impairs
    if $((nombre % 2)) -ne 0; then
        echo "Nombre impair ignoré : $nombre"
        continue  # Passer au nombre suivant
    fi

    echo "Nombre pair traité : $nombre"
    echo "  -> Son carré est : $((nombre * nombre))"
done

echo "Traitement terminé"
```

> [!important]
> Le filtrage “pair/impair” est un cas typique de `continue`.

---

## 🧪 Exemple : `break` pour arrêter une recherche

```bash
#!/bin/bash
# Script : chercher_utilisateur.sh

echo "=== Recherche d'utilisateur dans /etc/passwd ==="

read -p "Entrer le nom d'utilisateur à chercher : " utilisateur_recherche

# Parcourir les utilisateurs système
for ligne in $(cat /etc/passwd)
do
    # Extraire le nom d’utilisateur (avant le premier :)
    nom_utilisateur=$(echo "$ligne" | cut -d: -f1)

    echo "Vérification de : $nom_utilisateur"

    if "$nom_utilisateur" == "$utilisateur_recherche"; then
        echo "*** TROUVÉ ! ***"
        echo "Détails : $ligne"
        break  # Arrêter la recherche
    fi
done

echo "Recherche terminée"
```

> [!warning]
> Ici, l’usage de `for ligne in $(cat /etc/passwd)` peut casser sur certains contenus.
> Une version plus robuste utiliserait `while IFS=: read -r ...` (voir enrichissement ci-dessous).

---

## ✅ Enrichissement : version plus robuste de la recherche

> [!tip]
> Préférer `while read` pour lire un fichier ligne par ligne sans casser sur les espaces.

```bash
#!/bin/bash

read -p "Entrer le nom d'utilisateur à chercher : " utilisateur_recherche

while IFS=: read -r nom_utilisateur reste
do
    echo "Vérification de : $nom_utilisateur"

    if "$nom_utilisateur" == "$utilisateur_recherche"; then
        echo "*** TROUVÉ ! ***"
        break
    fi
done < /etc/passwd
```

---

## 🧾 Summary

> [!summary]
> - `continue` saute l’itération courante et passe à la suivante
> - `break` sort immédiatement de la boucle
> - `continue` est parfait pour filtrer sans arrêter le traitement
> - `break` est idéal pour stopper une recherche ou quitter un menu
> - Toujours documenter l’intention et prévoir des sorties de sécurité
> - Dans les lectures de fichiers, préférer `while read` à `for x in $(cat file)`

