# 📋 Bash — Boucle menu `select`

> [!info]
> La commande `select` permet de créer un **menu interactif** en ligne de commande.  
> Elle est particulièrement utile lorsque l’on souhaite **faire choisir une option à l’utilisateur** parmi plusieurs possibilités.

---

## 🎯 Objectif de `select`

- Afficher automatiquement un menu numéroté
- Lire le choix de l’utilisateur
- Répéter le menu tant qu’il n’est pas interrompu
- Simplifier l’écriture de scripts interactifs

> [!tip]
> `select` évite de gérer manuellement les saisies utilisateur avec `read` et des tests complexes.

---

## 🧱 Syntaxe de base

```bash
select var in list
do
    commandes utilisant $var
done
```

### Éléments de la syntaxe
- `var` : variable contenant **la valeur textuelle choisie**
- `list` : liste des options proposées
- `$REPLY` : numéro saisi par l’utilisateur
- `do … done` : bloc exécuté **après chaque sélection**

> [!note]
> Le menu est réaffiché automatiquement après chaque itération,  
> sauf si l’on utilise `break`.

---

## 🧪 Exemple complet avec `select`

### Script : `select_simple.sh`

```bash
#!/usr/bin/env bash

echo "Gestionnaire de services"

PS3='Choisissez une option: '
options=("Status Cups" "Démarrer Cups" "Arrêter Cups" "Quitter")

select opt in "${options[@]}"
do
    case $opt in
        "Status Cups")
            systemctl status cups
            ;;
        "Démarrer Cups")
            systemctl start cups
            echo "Cups démarré."
            ;;
        "Arrêter Cups")
            systemctl stop cups
            echo "Cups arrêté."
            ;;
        "Quitter")
            break
            ;;
        *)
            echo "Option invalide $REPLY."
            ;;
    esac
done
```

---

## 🔍 Fonctionnement détaillé du script

---

### 🔹 La variable `PS3`

```bash
PS3='Choisissez une option: '
```

> [!important]
> `PS3` est une **variable réservée** utilisée exclusivement par la commande `select`.

- Elle définit le **prompt affiché à l’utilisateur**
- Elle s’affiche **à chaque attente de saisie**

---

### 🔹 Le tableau `options`

```bash
options=("Status Cups" "Démarrer Cups" "Arrêter Cups" "Quitter")
```

- Chaque élément devient une **entrée du menu**
- Le menu est numéroté automatiquement à partir de **1**

---

### 🔹 Le bloc `select`

```bash
select opt in "${options[@]}"
```

- `opt` contient le **texte de l’option choisie**
- `$REPLY` contient le **numéro saisi**

> [!note]
> Si l’utilisateur entre un numéro invalide, `opt` est vide.

---

### 🔹 Le bloc `case`

```bash
case $opt in
```

- Permet d’associer chaque option à une action
- Rend le code **lisible** et **facile à maintenir**
- Le motif `*` capture les erreurs de saisie

> [!tip]
> L’association `select + case` est une **excellente pratique** en Bash.

---

### 🔹 Quitter le menu

```bash
break
```

> [!important]
> `break` est indispensable pour **sortir de la boucle `select`**  
> sinon le menu est affiché indéfiniment.

---

## 🧾 Variables d’invite Bash

> [!info]
> Bash dispose de plusieurs variables prédéfinies pour les invites.

| Variable | Rôle |
|--------|------|
| `PS1` | Invite principale du shell |
| `PS2` | Invite de continuation (`>` par défaut) |
| `PS3` | Invite de la commande `select` |
| `PS4` | Invite du mode debug (`set -x`) |

---

## ⚠️ Bonnes pratiques avec `select`

> [!tip]
> - Toujours prévoir une option **Quitter**
> - Toujours gérer les entrées invalides (`*`)
> - Utiliser un tableau pour les options
> - Coupler `select` avec `case`

> [!warning]
> `select` est **interactif** : il n’est pas adapté aux scripts non supervisés.

---

## 🧾 Summary

> [!summary]
> - `select` permet de créer facilement des **menus interactifs**
> - Le menu est automatiquement numéroté
> - `PS3` définit le prompt utilisateur
> - `$REPLY` contient le numéro choisi
> - `select` fonctionne parfaitement avec `case`
> - `break` est nécessaire pour quitter le menu
> - Idéal pour scripts d’administration et d’apprentissage
