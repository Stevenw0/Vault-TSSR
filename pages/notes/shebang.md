# 🧩 Le Shebang en shell

---

## 🎯 Définition du shebang

Le **shebang** (ou *shabang*) est la **première ligne d’un script**.  
Il indique au système **quel interpréteur utiliser** pour exécuter le fichier.

Il commence toujours par :

```bash
#! 
```

suivi du **chemin vers l’interpréteur**.

---

## 🧠 Rôle du shebang

Le shebang permet :

- d’exécuter un script **comme un programme**
- de choisir explicitement l’interpréteur (bash, sh, python, perl, etc.)
- d’éviter toute ambiguïté sur l’environnement d’exécution

Sans shebang, le script :
- doit être exécuté explicitement avec un interpréteur
- dépend du shell appelant

---

## 📌 Exemples courants de shebang

### Bash (chemin absolu)

```bash
#!/bin/bash
```

➡️ Utilise **bash situé à `/bin/bash`**  
✔️ Stable sur la plupart des systèmes Linux  
❌ Peut échouer si bash est ailleurs

---

### Bash (portable – recommandé)

```bash
#!/usr/bin/env bash
```

➡️ Recherche `bash` dans le `PATH`  
✔️ Plus **portable**  
⚠️ Dépend de la variable `PATH`

---

### Autres interpréteurs

```bash
#!/bin/sh
#!/usr/bin/python3
#!/usr/bin/perl
#!/usr/bin/awk -f
```

---

## ▶️ Impact sur l’exécution

Avec shebang et droits d’exécution :

```bash
chmod +x script.sh
./script.sh
```

Sans shebang :

```bash
bash script.sh
```

---

## ⚠️ Règles strictes du shebang

- Doit être **la toute première ligne**
- Aucun espace avant `#!`
- Un seul interpréteur possible
- Le fichier doit être **exécutable**
- Le shebang n’est lu **que par le noyau**, pas par le shell

---

## 🧪 Exemple complet

```bash
#!/usr/bin/env bash

echo "Bonjour, je suis exécuté avec bash"
```

---

## 🧩 Shebang et compatibilité

| Shebang | Avantages | Inconvénients |
|-------|-----------|---------------|
| `#!/bin/bash` | Prévisible | Peu portable |
| `#!/usr/bin/env bash` | Portable | Dépend du PATH |
| `#!/bin/sh` | Standard POSIX | Bash non garanti |

---

## ❌ Erreurs courantes

- Fichier avec CRLF (Windows)
- Interpréteur inexistant
- Script non exécutable
- Mauvais ordre (ligne vide avant le shebang)

Exemple d’erreur typique :

```
bash: ./script.sh: /bin/bash^M: bad interpreter
```

➡️ Problème de **CRLF** → utiliser `dos2unix`.

---

## 🪪 Bonne pratique : cartouche avec shebang

```bash
#!/usr/bin/env bash
# Auteur      : hbigo@dawan.fr
# Date        : 06/05/2024
# Description : Script de sauvegarde
```

---

## 🧠 À retenir

> [!summary]
> 
> - Le shebang indique **quel interpréteur utiliser**
> - Il doit être **la première ligne du fichier**
> - `#!/usr/bin/env bash` est le plus portable
> - Nécessaire pour exécuter un script comme un programme
> - Indispensable pour des scripts fiables et maintenables