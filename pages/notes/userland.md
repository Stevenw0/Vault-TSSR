

# 🧑‍💻 Userland — Espace utilisateur Linux

---

# 📌 Définition

Le **Userland (espace utilisateur)** correspond à :

- tout ce qui s’exécute **en dehors du noyau (kernel)**
- les programmes utilisateurs
- les outils système

👉 opposé au **Kernel Space**

---

# 🧠 Principe

```
Userland → Syscalls → Kernel → Hardware
```

👉 les programmes ne parlent jamais directement au matériel

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| isolation | sécurité |
| stabilité | système |
| abstraction | matériel |
| modularité | composants |

---

# 🏗️ Architecture

```
Applications
 ↓
Shell / GUI
 ↓
Bibliothèques (libc)
 ↓
Syscalls
 ↓
Kernel
 ↓
Hardware
```

---

# 🧱 Composants du Userland

---

## 🧩 Applications

| Type | Exemple |
|---|---|
| desktop | navigateur |
| CLI | nano |
| serveur | nginx |

---

---

## 🧩 Shell

| Shell | Description |
|---|---|
| bash | standard |
| zsh | avancé |
| sh | POSIX |

---

---

## 🧩 Outils système

| Type | Exemple |
|---|---|
| coreutils | ls, cp |
| réseau | ip, ping |
| gestion | ps, top |

---

---

## 🧩 Bibliothèques

| Lib | Description |
|---|---|
| libc | standard C |
| libm | math |
| libssl | crypto |

---

---

## 🧩 Services (daemons)

| Service | Exemple |
|---|---|
| réseau | sshd |
| web | apache |
| logs | rsyslog |

---

---

# 🔄 Userland vs Kernel

| Critère | Userland | Kernel |
|---|---|---|
| accès matériel | non |
| privilèges | limités |
| stabilité | isolé |

---

| Critère | Kernel |
|---|---|
| accès matériel | direct |
| privilèges | élevés |
| stabilité | critique |

---

# ⚙️ Communication

## Syscalls (appels système)

👉 fonctions permettant de communiquer avec le kernel

---

## Exemples

```c
open()
read()
write()
fork()
exec()
```

---

# 📊 Rôles du Userland

| Rôle | Description |
|---|---|
| interaction | utilisateur |
| exécution | programmes |
| gestion | services |
| abstraction | kernel |

---

# ⚠️ Sécurité

| Élément | Description |
|---|---|
| isolation | processus |
| permissions | utilisateur |
| sandbox | apps |

---

👉 protège le système

---

# 🛡️ Bonnes pratiques

> [!warning]

- limiter droits root
- utiliser sudo avec prudence
- mettre à jour logiciels
- surveiller processus

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| admin | CLI |
| dev | apps |
| serveur | services |
| desktop | GUI |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| userland | espace utilisateur |
| rôle | exécution |
| interaction | indirecte |
| sécurité | isolée |
| dépend | kernel |

---

# 🎯 Conclusion

Le Userland est :

- la partie visible et utilisable de Linux
- responsable des applications et outils
- isolé du noyau pour la sécurité

👉 essentiel pour :

🔥 utilisation quotidienne  
🔥 administration  
🔥 développement