# 📚 Bibliothèques système Linux — System Libraries

---

# 📌 Définition

Les **bibliothèques système** sont des ensembles de fonctions utilisées par les programmes pour :

- interagir avec le système
- gérer mémoire, fichiers, réseau
- éviter de réécrire du code

---

# 🧠 Principe

```
Programme → Bibliothèque → Kernel → Résultat
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| réutilisation | code |
| performance | optimisé |
| maintenance | simplifiée |
| compatibilité | standard |

---

# 📊 Types de bibliothèques

| Type | Description |
|---|---|
| statique (.a) | intégrée au binaire |
| dynamique (.so) | chargée à l’exécution |
| partagée | utilisée par plusieurs programmes |

---

# 📂 Emplacements

| Dossier | Description |
|---|---|
| /lib | libs critiques |
| /usr/lib | libs système |
| /usr/local/lib | libs custom |
| /lib64 | libs 64 bits |

---

# 🧱 Bibliothèque C (libc)

👉 **la plus importante sous Linux**

---

# 📊 Implémentations principales

## 🧩 glibc (GNU C Library)

| Élément | Description |
|---|---|
| usage | standard Linux |
| fonctionnalités | très complètes |
| compatibilité | maximale |
| performance | bonne |

👉 utilisée sur :

- Debian
- Ubuntu
- Red Hat

---

## ⚡ musl

| Élément | Description |
|---|---|
| usage | systèmes légers |
| taille | très petite |
| sécurité | élevée |
| simplicité | forte |

👉 utilisée sur :

- Alpine Linux
- containers Docker

---

## 🔧 uClibc

| Élément | Description |
|---|---|
| usage | embarqué |
| taille | réduite |
| performance | adaptée |
| compatibilité | limitée |

👉 utilisée sur :

- systèmes embarqués
- routeurs

---

## 🧪 autres implémentations

| Lib | Description |
|---|---|
| dietlibc | ultra légère |
| eglibc | fork glibc (abandonné) |
| bionic | Android |

---

# 🔄 Comparaison libc

| Critère | glibc | musl | uClibc |
|---|---|---|---|
| taille | grande | petite | moyenne |
| compatibilité | élevée | moyenne | faible |
| sécurité | bonne | élevée | correcte |
| usage | desktop | container | embedded |

---

# ⚙️ Fonctionnement

## Dynamique

```
App → libc.so → système
```

---

## Statique

```
App + libc → binaire unique
```

---

# 🔧 Commandes utiles

## Voir dépendances

```bash
ldd /bin/ls
```

---

## Voir libc utilisée

```bash
ldd --version
```

---

## Lister libs

```bash
ldconfig -p
```

---

# ⚙️ Variables importantes

| Variable | Description |
|---|---|
| LD_LIBRARY_PATH | chemin libs |
| LD_PRELOAD | surcharge libs |
| LD_DEBUG | debug |

---

# 🔐 Sécurité

| Risque | Description |
|---|---|
| library hijacking | injection |
| preload abuse | attaque |
| mauvaise version | crash |

---

# 🛡️ Bonnes pratiques

> [!warning]

- privilégier libs officielles
- éviter LD_PRELOAD en prod
- sécuriser chemins libs
- mettre à jour régulièrement

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| serveur | glibc |
| container | musl |
| embarqué | uClibc |
| sécurité | analyse |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| libc | cœur système |
| glibc | standard |
| musl | léger |
| uClibc | embarqué |
| rôle | API système |

---

# 🎯 Conclusion

Les bibliothèques système sont essentielles :

- elles permettent aux programmes de fonctionner
- elles définissent la compatibilité Linux

👉 choix important :

🔥 glibc → standard  
🔥 musl → léger / sécurisé  
🔥 uClibc → embarqué