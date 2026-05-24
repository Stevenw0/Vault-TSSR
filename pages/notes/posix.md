# 📜 POSIX — Standard Unix/Linux

---

# 📌 Définition

**POSIX (Portable Operating System Interface)** est un ensemble de normes définissant :

- le fonctionnement des systèmes Unix/Linux
- les commandes
- les API
- le comportement des programmes

👉 objectif : compatibilité entre systèmes

---

# 🧠 Principe

```
Programme conforme POSIX → fonctionne sur plusieurs OS
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| portabilité | multi-systèmes |
| standardisation | comportement |
| compatibilité | logiciels |
| stabilité | API |

---

# 📊 Origine

| Élément | Description |
|---|---|
| organisme | IEEE |
| base | UNIX |
| norme | POSIX.1 |

---

# 🧱 Composants POSIX

| Élément | Description |
|---|---|
| API | appels système |
| shell | commandes |
| utilitaires | core tools |
| fichiers | structure |

---

# ⚙️ API POSIX

👉 fonctions standard en C :

```c
open()
read()
write()
close()
fork()
exec()
```

---

# 📦 Commandes POSIX

| Commande | Description |
|---|---|
| ls | fichiers |
| cp | copie |
| mv | déplacement |
| rm | suppression |
| grep | recherche |

---

# 📂 Structure fichiers POSIX

| Élément | Description |
|---|---|
| / | racine |
| /home | utilisateurs |
| /etc | config |
| /bin | commandes |
| /usr | programmes |

---

# 🧩 Shell POSIX

👉 standard minimal :

```bash
sh
```

---

## Exemple script POSIX

```sh
#!/bin/sh
echo "Hello POSIX"
```

---

# 🔄 POSIX vs Linux

| Critère | POSIX | Linux |
|---|---|---|
| type | standard |
| rôle | règles |
| implémentation | non |

---

| Critère | Linux |
|---|---|
| type | OS |
| rôle | implémentation |
| compatibilité | POSIX |

---

# 🔄 POSIX vs GNU

| Critère | POSIX | GNU |
|---|---|---|
| standard | minimal |
| commandes | simples |
| options | limitées |

---

| Critère | GNU |
|---|---|
| extensions | nombreuses |
| fonctionnalités | avancées |
| compatibilité | partielle |

---

# ⚠️ Exemple différence

```bash
ls
```

👉 POSIX : options limitées  
👉 GNU : options avancées (`--color`)

---

# 📊 Implémentations

| Système | POSIX |
|---|---|
| Linux | partiel |
| macOS | oui |
| BSD | oui |
| Unix | oui |

---

# 🔐 Importance

| Domaine | Description |
|---|---|
| dev | portable |
| sysadmin | standard |
| scripts | compatibles |
| outils | uniformes |

---

# 🛡️ Bonnes pratiques

> [!warning]

- écrire scripts POSIX si portable
- éviter options GNU spécifiques
- tester sur plusieurs systèmes
- utiliser `/bin/sh`

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| scripting | bash/sh |
| développement | C |
| admin | CLI |
| cross-platform | apps |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| POSIX | standard |
| rôle | compatibilité |
| API | système |
| shell | sh |
| usage | universel |

---

# 🎯 Conclusion

POSIX permet :

- d’uniformiser les systèmes Unix/Linux
- de garantir la portabilité des programmes
- de simplifier le développement

👉 fondamental en :

🔥 Linux  
🔥 développement  
🔥 administration système