# ⚙️ Les processus sous Linux

Cette page s’appuie sur les notions vues dans **outilsProcessus** et **ProcessusConducteur** en Bash.

---

## 📌 Qu’est-ce qu’un processus ?

Un **processus** est une **instance d’un programme en cours d’exécution**.  
Chaque processus est géré par le noyau Linux et possède :

- un identifiant unique  
- un propriétaire  
- un état  
- une consommation de ressources (CPU, mémoire)

---

## 🔍 Visualiser les processus

### 📄 Affichage avec `ps`

```bash
ps aux
```

Affiche **tous les processus** en cours d’exécution sur le système.

---

### 📊 Surveillance en temps réel

```bash
top
```

Affiche les processus en temps réel avec :
- CPU
- mémoire
- temps d’exécution

```bash
htop
```

Version améliorée de `top` :
- interface plus lisible
- navigation au clavier
- couleurs et arborescence

`htop` est souvent préféré pour le diagnostic rapide.

---

## 🧾 Champs des processus (ps / top)

| Champ | Description |
|-----|------------|
| PID | Identifiant unique du processus |
| USER | Utilisateur propriétaire |
| TTY | Terminal associé (`?` = aucun terminal) |
| TIME | Temps CPU consommé |
| CMD | Commande associée au processus |
| START | Heure de démarrage |
| %CPU | Utilisation CPU |
| %MEM | Utilisation mémoire |
| RSS | Mémoire physique utilisée (Ko, hors swap) |
| VSZ | Mémoire virtuelle totale |
| STAT | État du processus |

---

## 🔎 Détail du champ STAT

### États principaux

| Lettre | Signification |
|------|--------------|
| R | En cours d’exécution (Run) |
| S | Endormi (Sleep) |
| D | Sommeil ininterruptible |
| T | Arrêté ou tracé |
| Z | Processus zombie |
| X | Mort (rarement visible) |
| W | Paging (obsolète) |

### Indicateurs complémentaires

| Lettre | Signification |
|------|--------------|
| < | Haute priorité |
| N | Faible priorité |
| L | Pages verrouillées en mémoire |
| s | Leader de session |
| l | Multi-thread |
| + | Processus au premier plan |

---

## 🌳 Vue en arborescence (forêt)

```bash
ps axjf
```

Affiche les processus sous forme **hiérarchique** (parent / enfant).

---

## 🔎 Rechercher un processus

### Exemple : rechercher `bash`

```bash
ps aux | grep bash
```

Exemple de résultat :

```
xavier 3410 0.0 0.1 19660 5148 pts/0 Ss 07:54 0:00 bash
xavier 3417 0.0 0.0 17752 2364 pts/0 R+ 07:54 0:00 grep --color=auto bash
```

Le vrai processus est **bash**, PID = **3410**.  
`grep` apparaît aussi, ce qui est normal.

---

## ❌ Arrêter un processus

### 🔪 Tuer un processus par PID

```bash
kill -9 3410
```

⚠️ `-9` force l’arrêt immédiat. À utiliser avec précaution.

Tuer le processus `bash` fermera le terminal concerné.

---

### 🔪 Par nom de processus

```bash
killall nom_du_processus
```

```bash
pkill nom_du_processus
```

---

## 🔥 Trouver les processus gourmands

### 📈 Ceux qui consomment le plus de RAM

```bash
ps -eo pmem,pcpu,pid,args | tail -n +2 | sort -rnk 1 | head
```

### ⚡ Ceux qui consomment le plus de CPU

```bash
ps -eo pmem,pcpu,pid,args | tail -n +2 | sort -rnk 2 | head
```

---

### 🧠 Explication de la commande

- `ps` : liste des processus  
- `-e` : tous les processus  
- `-o` : format personnalisé  
- `pmem,pcpu,pid,args` : mémoire, CPU, PID, commande  
- `tail -n +2` : ignore l’en-tête  
- `sort -rnk` : tri numérique décroissant  
- `head` : affiche les 10 premiers  

---

## 📊 Outil graphique de monitoring (optionnel)

### 📦 Installation

```bash
sudo apt install gkrellm lm-sensors
```

### 🔍 Détection des capteurs

```bash
sensors-detect
```

Répondre **yes** à toutes les questions (respecter la casse).

### 🚀 Lancement

```bash
gkrellm
```

Puis :
- clic droit → configuration  
- ou touche **F1**  
- activer les capteurs  

Outil utile sur poste graphique, rarement utilisé sur serveur.

---

## 🧠 À retenir

- Un processus = programme en cours d’exécution  
- PID = identifiant unique  
- `ps`, `top`, `htop` sont essentiels  
- `kill -9` est radical  
- Attention aux processus critiques  
- Diagnostic CPU / RAM indispensable en support