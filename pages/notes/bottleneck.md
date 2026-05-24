# ⚠️ Goulot d’étranglement (Bottleneck) sous Windows

## 📌 Définition

Un **goulot d’étranglement (bottleneck)** est une situation où **une ressource du système limite les performances globales**.

Cela signifie qu’un composant du système fonctionne **plus lentement que les autres** et devient le point de blocage.

Exemple :

```
CPU rapide
RAM suffisante
Disque lent
```

➡️ Le **disque devient le goulot d’étranglement**.

---

# 🧠 Principe du goulot d’étranglement

Dans un système informatique, les ressources fonctionnent en chaîne :

```
CPU → RAM → Stockage → Réseau → Application
```

Si **une seule ressource est saturée**, l’ensemble du système ralentit.

Exemple :

| Ressource | Utilisation |
|---|---|
CPU | 20% |
RAM | 40% |
Disque | 100% |

➡️ Le **disque bloque le système**.

---

# 🧱 Types de goulots d’étranglement sous Windows

## 💻 CPU bottleneck

Le **processeur est saturé** et ne peut plus traiter les tâches.

### Symptômes

- CPU à **90–100 %**
- ralentissements
- applications lentes
- latence élevée.

### Causes

- processus trop gourmands
- logiciels mal optimisés
- trop de services en arrière-plan
- virtualisation mal dimensionnée.

---

## 🧠 RAM bottleneck

La **mémoire vive est insuffisante**.

Windows utilise alors le **fichier d’échange (swap)** sur disque.

### Symptômes

- disque utilisé en continu
- système très lent
- applications qui se figent.

### Causes

- manque de RAM
- trop d’applications ouvertes
- machines virtuelles trop nombreuses.

---

## 💾 Disk bottleneck

Le **disque dur devient la ressource limitante**.

Très fréquent avec les **HDD classiques**.

### Symptômes

- disque à **100 %**
- ouverture lente des applications
- démarrage Windows lent.

### Causes

- disque mécanique lent
- antivirus actif
- indexation Windows
- base de données.

---

## 🌐 Network bottleneck

Le **réseau limite les performances**.

### Symptômes

- transferts lents
- latence élevée
- applications réseau lentes.

### Causes

- réseau saturé
- mauvaise configuration
- carte réseau limitée.

---

# 🔎 Identifier un goulot d’étranglement sous Windows

Plusieurs outils Windows permettent d’identifier les bottlenecks.

---

# 🧰 Gestionnaire des tâches

Ouvrir :

```
Ctrl + Shift + Esc
```

Onglet :

```
Performance
```

Permet d’observer :

- CPU
- RAM
- Disque
- Réseau.

Si une ressource reste **constamment proche de 100 %**, elle est probablement le goulot.

---

# 📊 Resource Monitor

Commande :

```
resmon
```

Permet d’analyser :

- utilisation disque
- utilisation CPU
- mémoire
- processus.

Très utile pour **identifier l’application responsable**.

---

# 📈 Performance Monitor

Commande :

```
perfmon
```

Permet d’ajouter des **compteurs de performance**.

Exemples :

| Compteur | Signification |
|---|---|
Processor % | utilisation CPU |
Disk Queue Length | file d’attente disque |
Available Memory | mémoire disponible |
Network Throughput | débit réseau |

---

# 📊 Exemple de diagnostic

Exemple de serveur lent.

Observation :

| Ressource | Utilisation |
|---|---|
CPU | 30 % |
RAM | 70 % |
Disque | 100 % |

Conclusion :

```
Le disque est le goulot d’étranglement
```

Solution :

- passer en **SSD**
- optimiser les accès disque
- déplacer la base de données.

---

# 🚀 Solutions pour corriger un bottleneck

## Optimiser les processus

- désactiver les services inutiles
- réduire les programmes au démarrage
- optimiser les applications.

---

## Ajouter des ressources

Solutions possibles :

- ajouter de la **RAM**
- utiliser un **SSD**
- améliorer le **CPU**
- augmenter la **bande passante réseau**.

---

## Optimiser l’architecture

Exemples :

- séparer les rôles serveur
- utiliser un stockage SAN
- répartir les charges.

---

# 🧠 Bonnes pratiques

✔️ surveiller les performances  
✔️ utiliser **perfmon** régulièrement  
✔️ analyser les logs système  
✔️ tester les charges serveur  
✔️ dimensionner correctement les ressources.

---

# 📊 Exemple réel

Infrastructure :

```
Serveur SQL
16 Go RAM
HDD
CPU 8 cores
```

Résultat :

```
CPU : 30%
RAM : 60%
DISK : 100%
```

➡️ **Bottleneck disque**

Solution :

```
Migration vers SSD
```

Gain :

```
+300 % performances
```

---

# 🧾 Résumé

Un **goulot d’étranglement** apparaît lorsqu’une ressource limite les performances du système.

Les bottlenecks les plus courants :

- CPU
- RAM
- disque
- réseau

Windows propose plusieurs outils pour les identifier :

```
Task Manager
resmon
perfmon
```

L’objectif est d’identifier la ressource saturée afin :

- d’optimiser le système
- d’ajouter des ressources
- d’améliorer l’architecture.