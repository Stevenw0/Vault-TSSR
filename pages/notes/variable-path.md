# 🧭 La variable d’environnement PATH

## 📌 Qu’est-ce que la variable PATH ?

La variable d’environnement **`PATH`** indique au système **où chercher les commandes exécutables** lorsque tu tapes une commande dans le terminal.

Quand tu tapes une commande comme `ls`, Linux parcourt les dossiers listés dans `PATH` **dans l’ordre**, jusqu’à trouver un exécutable correspondant.

---

## 🔍 Afficher le PATH actuel

```bash
echo $PATH
```

Le résultat est une **liste de chemins séparés par des `:`**.

Exemple logique :

- `/usr/local/bin`
- `/usr/bin`
- `/bin`

---

## ⚙️ Fonctionnement du PATH

- Le shell lit `PATH` **de gauche à droite**
- Le **premier exécutable trouvé** est celui utilisé
- Si la commande n’est trouvée dans aucun chemin → **commande introuvable**

---

## ⚠️ Surcharge du PATH (PATH overload)

### 📌 Qu’est-ce que la surcharge du PATH ?

La **surcharge du PATH** consiste à :

- ajouter un chemin **avant** les chemins existants
- ou fournir un exécutable du **même nom** qu’une commande système

Cela modifie **quelle commande est exécutée**, sans changer son nom.

---

## 🔁 Exemple de surcharge volontaire

Ajouter un dossier personnel **en priorité** :

```bash
export PATH="$HOME/bin:$PATH"
```

Résultat :

- si `ls` existe dans `$HOME/bin`
- il sera exécuté **avant** `/usr/bin/ls`

Ce mécanisme est très utilisé pour tester des versions personnalisées de commandes.

---

## ❌ Exemple de problème courant

⚠️ Une mauvaise surcharge peut être dangereuse.

Exemple risqué :

```bash
export PATH="/tmp:$PATH"
```

Un script malveillant nommé `ls` placé dans `/tmp` pourrait être exécuté à la place du vrai.

---

## 🔐 Bonnes pratiques avec PATH

Bonnes pratiques :

- Ajouter ses chemins **à la fin** du PATH
- Utiliser des dossiers sûrs comme `$HOME/bin`
- Toujours conserver le contenu existant de `$PATH`

À éviter absolument :

- Mettre `.` ou `/tmp` en tête
- Écraser complètement `PATH`

---

## ❌ Erreur classique à éviter

```bash
export PATH="/mon/chemin"
```

➡️ Tous les chemins système sont perdus.

✅ Bonne pratique :

```bash
export PATH="$PATH:/mon/chemin"
```

---

## 📁 Où modifier le PATH ?

### 👤 Pour un utilisateur

- `~/.bashrc`
- `~/.profile`
- `~/.zshrc`

### 🌍 Pour tout le système

- `/etc/environment`
- `/etc/profile`
- `/etc/profile.d/`

Les modifications globales nécessitent les droits **root**.

---

## 🧠 À retenir

- `PATH` détermine quelles commandes sont exécutées
- L’ordre des chemins est crucial
- Une surcharge peut être utile ou dangereuse
- Toujours conserver `$PATH` existant
- Sujet fréquent en **sécurité** et en **entretien Linux**