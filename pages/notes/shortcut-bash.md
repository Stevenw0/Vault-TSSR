# ⌨️ Raccourcis clavier Bash — Mémo essentiel

## 📌 Pourquoi connaître les raccourcis Bash ?

Les raccourcis clavier Bash permettent de :
- gagner énormément de temps
- éviter la souris
- travailler efficacement sur serveur
- corriger et réutiliser des commandes rapidement

> [!info]  
> Ces raccourcis fonctionnent dans la majorité des shells compatibles Bash.

---

## 🧭 Navigation dans la ligne de commande

| Raccourci | Action |
|---------|--------|
| Ctrl + A | Aller au début de la ligne |
| Ctrl + E | Aller à la fin de la ligne |
| Ctrl + F | Avancer d’un caractère |
| Ctrl + B | Reculer d’un caractère |
| Ctrl + XX | Alterner curseur début / position actuelle |
| Ctrl + ] + x | Aller à la prochaine occurrence de `x` |
| Alt + F / Esc + F | Avancer d’un mot |
| Alt + B / Esc + B | Reculer d’un mot |
| Alt + Ctrl + ] + x | Aller à l’occurrence précédente de `x` |

---

## ⚙️ Contrôle et gestion des commandes

| Raccourci | Action |
|---------|--------|
| Ctrl + L | Nettoyer l’écran |
| Ctrl + S | Suspend l’affichage |
| Ctrl + Q | Reprendre l’affichage |
| Ctrl + C | Interrompre la commande (SIGINT) |
| Ctrl + Z | Suspendre la commande (background) |
| Ctrl + D | Fermer le terminal / fin d’entrée |

> [!warning]  
> `Ctrl + D` peut fermer une session SSH si aucun processus n’est actif.

---

## 🕘 Historique Bash

### 🔍 Recherche et navigation

| Raccourci | Action |
|---------|--------|
| Ctrl + R | Recherche inverse incrémentielle |
| Alt + P | Recherche inverse non incrémentielle |
| Ctrl + J | Valider la recherche |
| Ctrl + G | Quitter la recherche |
| Ctrl + P / ↑ | Commande précédente |
| Ctrl + N / ↓ | Commande suivante |
| Ctrl + O | Exécuter puis conserver la commande |

---

### 🔁 Expansion de l’historique

| Syntaxe | Action |
|------|-------|
| `!!` | Réexécuter la dernière commande |
| `!*` | Tous les arguments de la commande précédente |
| `!*:p` | Afficher sans exécuter |
| `!x` | Dernière commande commençant par `x` |
| `!x:p` | Afficher la commande |
| `!$` | Dernier argument |
| `!^` | Premier argument |
| `!n` | Exécuter la commande n° n |
| `!n:p` | Afficher la commande |
| `!n:$` | Arguments de n à la fin |
| `^old^new` | Remplacer dans la dernière commande |

---

### 🕒 Datage de l’historique

```bash
export HISTTIMEFORMAT="%F %T "
```

Ajoute la date et l’heure à l’historique Bash.

---

## ✏️ Édition de ligne

| Raccourci | Action |
|---------|--------|
| Ctrl + U | Supprimer avant le curseur |
| Ctrl + K | Supprimer après le curseur |
| Ctrl + W | Supprimer le mot précédent |
| Ctrl + Y | Coller le dernier texte supprimé |
| Ctrl + D | Supprimer le caractère courant |
| Ctrl + H | Supprimer le caractère précédent |
| Alt + D | Supprimer jusqu’à la fin du mot |
| Alt + Backspace | Supprimer jusqu’au début du mot |
| Alt + . / Esc + . | Dernier argument précédent |
| Esc + T | Inverser les deux derniers mots |
| Alt + T | Échanger mot courant / précédent |

---

## ℹ️ Aide et complétion

| Raccourci | Action |
|---------|--------|
| TAB | Complétion automatique |
| Ctrl + I | Identique à TAB |
| Alt + ? | Lister fichiers/dossiers |
| Alt + * | Insérer fichiers comme paramètres |
| ~TAB TAB | Lister les utilisateurs |

> [!tip]  
> La complétion est encore plus puissante avec **zsh**.

---

## 🎓 Cas d’usage typiques

- Administration système
- Support technique
- Travail en SSH
- Scripts Bash
- Entretiens Linux

---

## 🧠 À retenir

> [!summary]
> 
> - Bash est optimisé pour le clavier
> - L’historique est un outil très puissant
> - Les raccourcis évitent les erreurs
> - Indispensable sur serveur
> - Gain de productivité immédiat