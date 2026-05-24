# 🔁 La commande `fc` — Fix Command

## 📌 Qu’est-ce que la commande `fc` ?

La commande **`fc`** (*fix command*) permet **d’éditer et de ré-exécuter des commandes issues de l’historique Bash**.

Elle est particulièrement utile pour :
- corriger une commande complexe
- modifier une commande déjà exécutée
- éviter de tout retaper à la main

> [!info]  
> `fc` travaille directement avec **l’historique des commandes**.

---

## 🧠 Principe de fonctionnement

- `fc` récupère une ou plusieurs commandes depuis l’historique
- ouvre un éditeur de texte
- permet la modification
- **ré-exécute automatiquement** la commande à la fermeture de l’éditeur

---

## ⚙️ Éditeur utilisé par `fc`

Par défaut, `fc` utilise l’éditeur défini dans la variable d’environnement :

- `$FCEDIT`
- ou `$EDITOR`

### 📌 Configuration recommandée (Neovim)

```bash
export FCEDIT='nvim'
```

> [!tip]  
> Cette variable peut être ajoutée dans `~/.bashrc` pour être persistante.

---

## 📜 Afficher l’historique des commandes

### 📌 Lister les commandes récentes

```bash
fc -l
```

Exemple de sortie :

```
100  ls
101  cd Documents
102  grep "example" file.txt
```

Les nombres correspondent aux **indices dans l’historique**.

---

## ✏️ Éditer une commande de l’historique

### 📌 Éditer une plage de commandes

```bash
fc 101 102
```

➡️ Cela ouvre l’éditeur (ici Neovim) avec les commandes sélectionnées.

---

### ✍️ Exemple de modification

Commandes ouvertes dans l’éditeur :

```
cd Documents
grep "example" file.txt
```

Modification effectuée :

```
cd Documents
grep "test" file.txt
```

Enregistrer et quitter l’éditeur :

```
:wq
```

---

## 🚀 Exécution automatique

> [!success]  
> Une fois l’éditeur fermé, **la commande modifiée est automatiquement exécutée** par le shell.

Résultat visible immédiatement dans le terminal.

---

## ⚡ Ré-exécuter une commande sans édition

### 📌 Option `-s` (silent)

```bash
fc -s 100
```

➡️ Ré-exécute directement la commande numéro **100** (`ls`)  
➡️ **Sans ouvrir l’éditeur**

---

## 🧩 Cas d’usage typiques

- Corriger une commande `grep`, `find`, `rsync`
- Modifier une commande système mal tapée
- Réutiliser une commande longue ou complexe
- Gagner du temps en administration système

---

## ⚠️ Points importants à retenir

> [!warning]
> 
> - `fc` dépend de l’historique Bash
> - L’éditeur doit être correctement configuré
> - Les commandes sont exécutées **après édition**

---

## 🧠 À retenir

> [!summary]
> 
> - `fc` = éditer + ré-exécuter une commande
> - Utilise l’historique Bash
> - Très puissant avec un éditeur comme Neovim
> - `fc -l` pour lister
> - `fc -s` pour rejouer sans modifier
> - Outil discret mais redoutablement efficace