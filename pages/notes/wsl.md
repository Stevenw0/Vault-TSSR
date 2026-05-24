# 🐧 WSL — Windows Subsystem for Linux

---

# 📌 Définition

WSL (Windows Subsystem for Linux) est une fonctionnalité de Windows qui permet d’exécuter un environnement Linux directement sur une machine Windows.

👉 Il permet d’utiliser des commandes Linux, des distributions comme Ubuntu ou Debian, et de nombreux outils de développement sans installer une machine virtuelle classique.

---

# 🧠 Principe

Schéma simple :

```text
Windows → Couche WSL → Distribution Linux → Commandes / Outils Linux
```

👉 Avec WSL 2, Linux s’exécute via un noyau Linux réel géré par Windows.

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| Utiliser Linux sous Windows | Exécuter des commandes et outils Linux sans dual boot |
| Développer plus facilement | Travailler avec Git, Python, Docker, Node.js, etc. |
| Tester des commandes Linux | Pratiquer l’administration système et le scripting |
| Gagner du temps | Éviter une machine virtuelle lourde dans certains usages |

---

# 📊 Fonctionnement / Concepts clés

| Élément | Description |
|---|---|
| WSL 1 | Version basée sur une couche de compatibilité entre Windows et Linux |
| WSL 2 | Version basée sur un vrai noyau Linux, plus compatible et plus performante |
| Distribution | Système Linux installé dans WSL, par exemple Ubuntu |
| Intégration Windows | Accès possible aux fichiers Windows depuis Linux et inversement |
| Réseau | WSL possède son propre environnement réseau selon la configuration |

---

# ⚙️ Commandes / Exemples

```bash
wsl --install
wsl --list --verbose
wsl --set-default-version 2
wsl --status
wsl
```

Exemple pour lancer une distribution spécifique :

```bash
wsl -d Ubuntu
```

---

# ⚠️ Points d’attention

> [!warning]

- WSL n’est pas exactement un Linux installé nativement sur une machine physique.
- Certaines différences existent sur le réseau, le système de fichiers et les performances selon l’emplacement des fichiers.
- Il vaut mieux travailler dans le système de fichiers Linux pour de meilleures performances sur certains projets.
- Certains outils très bas niveau ou certaines fonctions noyau peuvent dépendre de la version et de la configuration.

---

# ✅ Bonnes pratiques

> [!tip]

- Utiliser **WSL 2** dans la majorité des cas.
- Stocker les projets Linux dans le système de fichiers Linux.
- Mettre à jour régulièrement la distribution Linux.
- Vérifier la version utilisée avec `wsl --list --verbose`.
- Garder une séparation claire entre les usages Windows et Linux quand c’est utile.

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Nom | Windows Subsystem for Linux |
| Rôle | Exécuter Linux dans Windows |
| Version recommandée | WSL 2 |
| Intérêt principal | Développement, administration, apprentissage Linux |
| Limite | Pas totalement identique à une installation Linux native |

---

# 🎯 Conclusion

WSL est une solution très pratique pour utiliser Linux sous Windows de façon simple, rapide et efficace.
