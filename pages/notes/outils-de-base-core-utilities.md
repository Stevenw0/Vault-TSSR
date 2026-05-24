# 🧰 Outils de base Linux — Core Utilities

---

# 📌 Définition

Les **Core Utilities** sont un ensemble de commandes essentielles fournies par GNU :

- manipulation de fichiers
- gestion du système
- traitement de texte
- automatisation

👉 base de tout système Linux

---

# 🧠 Principe

```
Utilisateur → commande → système → résultat
```

👉 interaction via le terminal

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| administration | système |
| automatisation | scripts |
| manipulation | fichiers |
| productivité | CLI |

---

# 📦 GNU Core Utilities

👉 package principal :

```
coreutils
```

---

# 📊 Commandes principales

## 📂 Fichiers / dossiers

| Commande | Description |
|---|---|
| ls | lister |
| cp | copier |
| mv | déplacer |
| rm | supprimer |
| mkdir | créer dossier |
| rmdir | supprimer dossier |

---

## 📄 Lecture / affichage

| Commande | Description |
|---|---|
| cat | afficher |
| less | lecture |
| head | début fichier |
| tail | fin fichier |
| nl | numéros lignes |

---

## 🔎 Recherche

| Commande | Description |
|---|---|
| find | rechercher fichiers |
| grep | rechercher texte |
| which | chemin commande |

---

## ⚙️ Système

| Commande | Description |
|---|---|
| pwd | chemin actuel |
| whoami | utilisateur |
| id | infos user |
| uname | système |
| date | date |

---

## 📊 Gestion fichiers

| Commande | Description |
|---|---|
| chmod | permissions |
| chown | propriétaire |
| du | taille |
| df | disque |

---

# 🧩 Implémentations possibles

---

## 🧱 GNU Coreutils

| Élément | Description |
|---|---|
| standard | Linux |
| fonctionnalités | complètes |
| compatibilité | maximale |
| usage | desktop / serveur |

👉 utilisé sur :

- Debian
- Ubuntu
- Red Hat

---

## ⚡ BusyBox

| Élément | Description |
|---|---|
| usage | systèmes légers |
| taille | très petite |
| commandes | regroupées |
| performance | rapide |

👉 utilisé sur :

- systèmes embarqués
- containers
- rescue systems

---

## 🔧 Toybox

| Élément | Description |
|---|---|
| usage | Android |
| licence | permissive |
| simplicité | élevée |
| remplacement | BusyBox |

---

## 🧪 autres variantes

| Outil | Description |
|---|---|
| BSD utils | BSD |
| util-linux | outils système |
| sbase/ubase | minimalistes |

---

# 🔄 Comparaison

| Critère | GNU | BusyBox | Toybox |
|---|---|---|---|
| taille | grande | petite | petite |
| fonctionnalités | complètes | limitées | simples |
| usage | général | embedded | Android |
| compatibilité | élevée | moyenne | moyenne |

---

# ⚙️ Fonctionnement

## Exemple

```bash
ls -l
```

👉 liste détaillée des fichiers

---

## Exemple pipe

```bash
cat fichier.txt | grep "test"
```

👉 filtrer contenu

---

# 🔧 Options courantes

## ls

```bash
ls -l -a -h
```

---

## cp

```bash
cp -r dossier1 dossier2
```

---

## rm

```bash
rm -rf dossier
```

---

## grep

```bash
grep -i "mot" fichier.txt
```

---

# 🔐 Sécurité

| Risque | Description |
|---|---|
| rm -rf | suppression totale |
| chmod 777 | trop permissif |
| sudo | abus |
| pipes | injection |

---

# 🛡️ Bonnes pratiques

> [!warning]

- éviter `rm -rf /`
- vérifier commandes avant exécution
- utiliser sudo avec prudence
- tester en environnement lab

---

# 🌐 Cas d’utilisation

| Usage | Exemple |
|---|---|
| admin système | gestion fichiers |
| dev | scripts |
| cyber | analyse |
| dépannage | debug |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| coreutils | commandes |
| GNU | standard |
| BusyBox | léger |
| Toybox | moderne |
| rôle | base CLI |

---

# 🎯 Conclusion

Les Core Utilities sont indispensables :

- base du système Linux
- essentielles pour administration et scripts

👉 choix selon usage :

🔥 GNU → complet  
🔥 BusyBox → léger  
🔥 Toybox → moderne minimal