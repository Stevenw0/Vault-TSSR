
Formation Scripting 3j - note 1 - s8
===
<!--
### Jour 1: Introduction et Bases de Bash

### Jour 2: Variables, Arguments, Tests et Contrôles

### Jour 3: Fonctions, Notions Avancées, et Utilisation de SED & AWK
-->

### tl;dl
* **[Mémo général bash](https://hedgedoc.dawan.fr/QSaDrt-eQQK2s3I4C3sqqw#)**
* **[Mémo raccourcis clavier bash](https://hedgedoc.dawan.fr/qgoSp4zlSPKQbdnMRW7oFA#)**
* **[Mémo structures bash](https://hedgedoc.dawan.fr/1qoTLx39Q1KEX8Xas3KCjg?view)**
* **[bash vs zsh](https://hedgedoc.dawan.fr/F_qHstSGT0Kp1Gu-mQqftQ#)**
* **[gestion de paquets](https://hedgedoc.dawan.fr/F5u8dO_CRXGgPZ2CB8jDOw#)**

* **[Lien Sharedocs scripting](https://dawaneducation-my.sharepoint.com/:f:/g/personal/hbigo_dawan_education/IgB_BI-MZ3FURLuiQrcdB851AS8DqaNp7m-wACu-dtRKHAo?e=uwNmyM)**

### Administratif
+ https://moncompte.dawan.fr
+ Besoin/Attentes
+ Niveau d'entrée
+ Émargement bi-quotidien
+ Évaluation
+ Niveau de sortie

## Table des matières

[TOC]

# 1. Introduction : Le Shell

* Un programme informatique
* Le Shell est un interpréteur de commande
* **interface entre l'utilisateur et le noyau du système d'exploitation**



## Historique des Shell Unix

* Le premier Shell pour Unix par Thompson Shell (1971 de D.Thompson)
* **Bourne Shell (sh)** (1980): Développé par Stephen Bourne chez AT&T Bell Laboratories, c'est le Shell original d'Unix. Il est simple et robuste, mais manque de fonctionnalités avancées comme l'historique des commandes et les alias.
* **C Shell (csh)** : Développé par Bill Joy pour BSD Unix, le C Shell introduit des fonctionnalités telles que l'historique des commandes, les alias et la syntaxe similaire au langage C. Il est populaire dans les environnements Unix et Linux.
* **Korn Shell (ksh)** : Développé par David Korn chez AT&T Bell Laboratories, le Korn Shell est une amélioration du Bourne Shell, offrant des fonctionnalités avancées telles que les tableaux, les expressions régulières et un meilleur langage de script.
* **Bourne-Again Shell (bash)** (1989): Développé par Brian Fox pour le projet GNU, le bash est compatible avec le Bourne Shell tout en ajoutant de nombreuses fonctionnalités avancées telles que la complétion automatique, l'historique des commandes étendu et le traitement des signaux.
    + Shell par défaut de la plupart des distributions
    + Très du Korn Shell
    + Emprunts au C-Shell
* **Z Shell (zsh)** : Une extension avancée du Bourne Shell avec de nombreuses fonctionnalités supplémentaires telles que la complétion automatique avancée, les thèmes et les plugins. Il est populaire parmi les utilisateurs avancés et les développeurs.
* **Ash**, **Dash**, **Fish**...

<span style=color:rgb(255,0,20)>*Le shell*</span>

# 1. Introduction : Le Shell

* Un programme informatique
* Le Shell est un interpréteur de commande
* **interface entre l'utilisateur et le noyau du système d'exploitation**

## Historique des Shell Unix

* Le premier Shell pour Unix par Thompson Shell (1971 de D.Thompson)
* **Bourne Shell (sh)** (1980): Développé par Stephen Bourne chez AT&T Bell Laboratories, c'est le Shell original d'Unix. Il est simple et robuste, mais manque de fonctionnalités avancées comme l'historique des commandes et les alias.
* **C Shell (csh)** : Développé par Bill Joy pour BSD Unix, le C Shell introduit des fonctionnalités telles que l'historique des commandes, les alias et la syntaxe similaire au langage C. Il est populaire dans les environnements Unix et Linux.
* **Korn Shell (ksh)** : Développé par David Korn chez AT&T Bell Laboratories, le Korn Shell est une amélioration du Bourne Shell, offrant des fonctionnalités avancées telles que les tableaux, les expressions régulières et un meilleur langage de script.
* **Bourne-Again Shell (bash)** (1989): Développé par Brian Fox pour le projet GNU, le bash est compatible avec le Bourne Shell tout en ajoutant de nombreuses fonctionnalités avancées telles que la complétion automatique, l'historique des commandes étendu et le traitement des signaux.
    + Shell par défaut de la plupart des distributions
    + Très proche du Korn Shell
    + Emprunts au C-Shell
* **Z Shell (zsh)** : Une extension avancée du Bourne Shell avec de nombreuses fonctionnalités supplémentaires telles que la complétion automatique avancée, les thèmes et les plugins. Il est populaire parmi les utilisateurs avancés et les développeurs.
* **Ash**, **Dash**, **Fish**...

***Atelier*** : [Installation de zsh](https://hedgedoc.dawan.fr/Hncizk9vR6OawHYsR6FlxA#)

#### Zsh vs Bash
> https://hedgedoc.dawan.fr/F_qHstSGT0Kp1Gu-mQqftQ

## L'environement du bash

* [Doc LPI101 : Ouvrir un terminal](https://learning.lpi.org/fr/learning-materials/102-500/105/105.1/105.1_01/#_ouvrir_un_terminal)

# Mémo Bash - L'environnement

## Séquence de chargement des fichiers de configuration

### Selon le type de shell

#### Shell de connexion interactif

| Ordre | Fichier | Rôle | Distribution |
|-------|---------|------|--------------|
| 1 | `/etc/profile` | Environnement système global | Toutes |
| 2 | `/etc/bash.bashrc` | Configuration bash système | Toutes |
| 3 | `~/.bash_profile` | Configuration utilisateur principale | RedHat/CentOS |
| 4 | `~/.bash_login` | Alternative à bash_profile | Toutes |
| 5 | `~/.profile` | Configuration shell générique | Debian/Ubuntu |
| 6 | `~/.bashrc` | Configuration bash interactive | Toutes |
| 7 | `~/.bash_logout` | Actions lors de la déconnexion | Toutes |

**Note** : Pour les fichiers 3, 4 et 5, seul le premier trouvé est exécuté.

#### Shell interactif simple

| Ordre | Fichier | Rôle | Distribution |
|-------|---------|------|--------------|
| 1 | `/etc/bash.bashrc` | Configuration bash système | Toutes |
| 2 | `~/.bashrc` | Configuration bash interactive | Toutes |

#### Shell non-interactif (scripts)

| Ordre | Fichier | Rôle | Distribution |
|-------|---------|------|--------------|
| 1 | Variable `BASH_ENV` | Configuration optionnelle pour scripts | Toutes |

**Particularité** : Les scripts ne lisent aucun fichier de configuration par défaut, sauf si `BASH_ENV` est définie.

### Contenu des fichiers principaux

#### `/etc/profile`
* Variables système : `PATH`, `LANG`, `TERM`
* Définition de `umask`
* Alias globaux
* Actions automatiques lors de la connexion
* Appel des scripts dans `/etc/profile.d/`

#### `/etc/bash.bashrc`
* Configuration bash pour tous les utilisateurs
* Vérification du mode interactif
* Ajustement taille fenêtre (`LINES`, `COLUMNS`)
* Historique des commandes système

#### `~/.bashrc`
* Alias personnels
* Fonctions utilisateur
* Variables d'environnement personnelles
* Personnalisation du prompt `PS1`
* Appel de `~/.bash_aliases` si existant

#### `~/.profile`
* Configuration portable (compatible autres shells)
* Appel de `~/.bashrc` si shell bash détecté
* Ajout de `~/bin` au `PATH`
* Variables d'environnement utilisateur

### Variable BASH_ENV pour les scripts

#### État par défaut

**BASH_ENV n'est PAS définie** dans Ubuntu ou Debian par défaut.

```bash
# Vérification
echo $BASH_ENV
# Résultat : (vide)
```

#### Fonctionnement

Lorsque définie, `BASH_ENV` contient le chemin d'un fichier à sourcer avant l'exécution de tout script non-interactif.

```bash
# Définir BASH_ENV
export BASH_ENV="/etc/bash_env_scripts"

# Le fichier sera sourcé automatiquement
./mon_script.sh
```

#### Cas d'usage

**Utiliser BASH_ENV pour** :
* Environnements contrôlés (conteneurs, CI/CD)
* Appliquer des standards de codage uniformes
* Configuration commune pour scripts d'un projet

**Ne PAS utiliser pour** :
* Scripts devant être portables
* Distribution publique de scripts
* Environnements multi-utilisateurs

#### Configuration système

```bash
# Configuration globale pour tous les utilisateurs
sudo nvim /etc/bash_env_scripts

# Contenu exemple
set -euo pipefail
export LOG_DIR="/var/log/scripts"

# Activation pour tous
echo 'export BASH_ENV="/etc/bash_env_scripts"' | sudo tee /etc/profile.d/bash_env.sh
```

#### Configuration utilisateur

```bash
# Dans ~/.profile ou ~/.bashrc
export BASH_ENV="$HOME/.bash_env_scripts"

# Créer le fichier de configuration
cat > ~/.bash_env_scripts << 'EOF'
set -euo pipefail
export PATH="$HOME/bin:$PATH"
EOF
```

#### Alternative recommandée

Plutôt que `BASH_ENV`, inclure explicitement la configuration dans chaque script :

```bash
#!/bin/bash
set -euo pipefail
source /chemin/vers/configuration_commune.sh

# Code du script
```

**Avantages** :
* Comportement prévisible
* Portabilité garantie
* Dépendances explicites et visibles

### Règles de priorité

* Fichiers **locaux** (`~/`) prioritaires sur fichiers **globaux** (`/etc/`)
* Fichiers **spécifiques bash** prioritaires sur fichiers **génériques**
* Premier fichier trouvé dans la séquence 3-4-5 annule les suivants

### Sourcing manuel

Appliquer les modifications sans redémarrage :

```bash
# Recharger la configuration
source ~/.bashrc
# ou
. ~/.bashrc
```

**Sources** :
* Bash Reference Manual - Section 6.2 Bash Startup Files (GNU Project)
* Learning Materials LPI 102-500, Section 105.1
* Configuration par défaut Ubuntu 22.04/24.04 et Debian 11/12

## Variables d'environnement principales

| Variable | Exemple | Description |
|----------|---------|-------------|
| `PATH` | `/usr/local/bin:/usr/bin:/bin` | Répertoires de recherche des commandes |
| `HOME` | `/home/utilisateur` | Répertoire personnel |
| `USER` | `nom_utilisateur` | Nom de l'utilisateur courant |
| `SHELL` | `/bin/bash` | Shell par défaut |
| `PWD` | `/repertoire/courant` | Répertoire de travail |
| `PS1` | `'\u@\h:\w\$ '` | Invite de commande |
| `HISTSIZE` | `1000` | Taille historique mémoire |
| `HISTFILESIZE` | `2000` | Taille fichier historique |

## Gestion des alias

| Action | Commande | Exemple |
|--------|----------|---------|
| Créer | `alias nom='commande'` | `alias ll='ls -la'` |
| Lister tous | `alias` | `alias` |
| Afficher un | `alias nom` | `alias ll` |
| Supprimer un | `unalias nom` | `unalias ll` |
| Supprimer tous | `unalias -a` | `unalias -a` |

* Alias courants :
  * `alias ll='ls -la'` - Liste détaillée avec fichiers cachés
  * `alias la='ls -A'` - Liste avec fichiers cachés
  * `alias ..='cd ..'` - Remontée d'un niveau
  * `alias grep='grep --color=auto'` - Coloration des résultats

## Commande umask - Gestion des permissions

| umask | Répertoires (777-umask) | Fichiers (666-umask) | Usage |
|-------|-------------------------|----------------------|-------|
| `022` | `755 (rwxr-xr-x)` | `644 (rw-r--r--)` | Standard utilisateur |
| `002` | `775 (rwxrwxr-x)` | `664 (rw-rw-r--)` | Travail en groupe |
| `077` | `700 (rwx------` | `600 (rw-------)` | Accès personnel seul |

* Commandes utiles :
  * `umask` - Affiche la valeur actuelle
  * `umask -S` - Affichage symbolique
  * `umask 022` - Définit une nouvelle valeur

## Types de shell: interactif / non-interactif

| Type | Caractéristiques | Fichiers lus | Usage |
|------|------------------|--------------|-------|
| **Interactif** | • Prompt disponible<br>• Historique géré<br>• Lit `~/.bashrc` | Tous les fichiers de config | Sessions utilisateur |
| **Non-interactif** | • Pas de prompt<br>• Pas d'historique<br>• Ne lit PAS `~/.bashrc` | Uniquement `/etc/profile` | Scripts, cron<br> `shell -c` ... |

## `$-` : shell interactif vs non interactif

Le piège de ton exemple : avec des guillemets doubles, `$-` est expansé par le shell parent **avant** d'être passé à `bash -c`. Le sous-shell ne voit jamais `$-`, il reçoit directement la valeur.

```bash
bash -c "echo $-"   # FAUX : expansion par le parent → affiche la valeur du shell courant
bash -c 'echo $-'   # CORRECT : le sous-shell évalue lui-même $-
```

Résultats comparés :

```bash
echo $-              # himBHs  → interactif (présence du 'i')
bash -c 'echo $-'   # hBc     → non interactif (pas de 'i')
```

La lettre `i` est le marqueur d'un shell interactif. Son absence suffit à identifier un contexte non interactif (script, cron, `bash -c`).

* Pour forcer la lecture de `~/.bashrc` dans un script :
  * **shell non interactif**: `bash -c "source ~/.bashrc; ma_commande"`
  * **shell interactif**:`bash -ic "ma_commande"`

* **shell avec ssh**

| Mode de connexion | Type | `.bashrc` | `PS1` | Usage |
|-------------------|------|-----------|-------|-------|
| `ssh user@host` | Interactif | ✓ | ✓ | Administration manuelle |
| `ssh user@host 'cmd'` | Non-interactif | ✗ | ✗ | Automatisation/scripts |
| `ssh -t user@host 'cmd'` | Interactif forcé | ✓ | ✓ | Commandes nécessitant TTY |


## Actions de maintenance

| Action | Commande | Effet |
|--------|----------|-------|
| Recharger configuration | `source ~/.bashrc` | Applique les changements |
| | `. ~/.bashrc` | Syntaxe alternative |
| Redémarrer shell | `exec bash` | Nouveau shell avec config complète |
| Exporter variable | `export VAR="valeur"` | Variable disponible sous-processus |
| | `declare -x VAR="valeur"` | Syntaxe alternative export |
| Variable lecture seule | `declare -r VAR="valeur"` | Variable non modifiable |
| | `readonly VAR="valeur"` | Syntaxe alternative readonly |
| Export + lecture seule | `declare -rx VAR="valeur"` | Variable exportée et protégée |

* Hiérarchie de priorité (du plus prioritaire au moins prioritaire) :
  1. Variables définies en ligne de commande
  2. Fichiers de configuration utilisateur
  3. Fichiers de configuration système

## Les shells login et non-login

### Définition

* **Login shell** : shell lancé lors d'une connexion authentifiée (SSH, TTY, `su -`, `sudo -i`)
* **Non-login shell** : shell lancé dans une session existante (terminal graphique, `su`, `sudo -s`)

### Identification rapide

```bash
echo $0
# Login shell : -bash (avec tiret)
# Non-login shell : bash (sans tiret)

# Méthode portable (tous shells)
case $0 in -*) echo "login" ;; *) echo "non-login" ;; esac
```

### Fichiers chargés

| Type | Fichiers lus | Quand |
|------|-------------|-------|
| Login | `/etc/profile` puis `~/.bash_profile` (ou `~/.bash_login` ou `~/.profile`) | Connexion SSH, TTY, `su -`, `sudo -i` |
| Non-login | `/etc/bash.bashrc`* puis `~/.bashrc` | Terminal graphique, `su`, `sudo -s` |

*Debian/Ubuntu/Arch uniquement

### Recharger vs Remplacer

#### Recharger avec `source` (conserve le shell)

```bash
source ~/.bashrc
# - Même processus, même PID
# - Variables locales conservées
# - Alias et fonctions conservés
```

#### Remplacer avec `exec` (remplace le processus)

```bash
exec bash
# - Remplace le processus, MÊME PID
# - Variables exportées conservées
# - Variables locales perdues
# - Relit ~/.bashrc

exec bash --login
# - Remplace le processus, MÊME PID
# - Variables exportées conservées
# - Relit /etc/profile et ~/.bash_profile
```

### Cas particulier : exec avec su/sudo

**ATTENTION : Avec `su` et `sudo`, le PID CHANGE même avec `exec` !**

```bash
echo $$              # PID 1234
exec su - user
echo $$              # PID 5678 (DIFFÉRENT !)
```

**Raison :** `su` doit créer un nouveau processus pour changer d'identité utilisateur (UID/GID).

### Tableau récapitulatif complet

| Commande | Type | PID conservé | Variables exportées | Fichiers chargés | Usage |
|----------|------|--------------|---------------------|------------------|-------|
| `bash` | Non-login | Non | Héritées | `~/.bashrc` | Sous-shell |
| `exec bash` | Non-login | **OUI** | Héritées | `~/.bashrc` | Remplacer shell |
| `exec bash -l` | Login | **OUI** | Héritées | `/etc/profile`, `~/.bash_profile` | Réinit environnement |
| `su user` | Non-login | Non | **Héritées** | `~/.bashrc` | Changer user |
| `su - user` | Login | Non | **Perdues** | `/etc/profile`, `~/.bash_profile` | Connexion complète |
| `exec su user` | Non-login | **NON** | **Héritées** | `~/.bashrc` | Économie 1 processus |
| `exec su - user` | Login | **NON** | **Perdues** | `/etc/profile`, `~/.bash_profile` | Économie + connexion |
| `sudo -s` | Non-login | Non | **Héritées** | `~/.bashrc` | Shell root rapide |
| `sudo -i` | Login | Non | **Perdues** | `/etc/profile`, `~/.bash_profile` | Connexion root |

### Équivalences

| Commande sudo | Équivalent su |
|---------------|---------------|
| `sudo -s` | `su root` |
| `sudo -i` | `su - root` |

### Règles simples

**Variables :**
* **Avec tiret** (`su -`, `sudo -i`) → Variables perdues
* **Sans tiret** (`su`, `sudo -s`) → Variables conservées

**PID :**
* `exec bash` → **PID conservé**
* `exec su` ou `exec sudo` → **PID change** (nouveau processus obligatoire)

---

## Démonstration pratique complète

### Préparation de l'environnement de test

```bash
# Ajouter des marqueurs dans les fichiers de config
echo 'echo "[PROFILE] Chargé à $(date +%H:%M:%S)"' >> ~/.bash_profile
echo 'echo "[BASHRC] Chargé à $(date +%H:%M:%S)"' >> ~/.bashrc
```

### Test 1 : source vs exec bash

```bash
# État initial
echo "=== Test 1 : source vs exec bash ==="
echo "PID initial : $$"
VAR_LOCALE="locale"
export VAR_EXPORTEE="exportée"

# Test source
echo -e "\n--- Avec source ---"
source ~/.bashrc
echo "Après source - PID : $$"
echo "VAR_LOCALE : $VAR_LOCALE"
echo "VAR_EXPORTEE : $VAR_EXPORTEE"
# Résultat : PID identique, toutes les variables présentes

# Test exec bash (dans un nouveau terminal)
echo -e "\n--- Avec exec bash ---"
echo "PID avant : $$"
VAR_LOCALE="locale"
export VAR_EXPORTEE="exportée"
exec bash
# Dans le nouveau shell :
echo "PID après : $$"              # Même PID
echo "VAR_LOCALE : $VAR_LOCALE"    # Vide
echo "VAR_EXPORTEE : $VAR_EXPORTEE" # Présente
# Affiche aussi [BASHRC] Chargé...
```

### Test 2 : exec bash vs exec bash --login

```bash
# Terminal 1 : exec bash (non-login)
echo "=== Test 2a : exec bash (non-login) ==="
echo "PID avant : $$"
exec bash
echo "PID après : $$"  # Même PID
# Affiche : [BASHRC] Chargé...
# N'affiche PAS : [PROFILE] Chargé...

# Terminal 2 : exec bash --login (login)
echo "=== Test 2b : exec bash --login (login) ==="
echo "PID avant : $$"
exec bash --login
echo "PID après : $$"  # Même PID
# Affiche : [PROFILE] Chargé...
# Peut aussi afficher [BASHRC] si appelé depuis .bash_profile
```

### Test 3 : Conservation des variables exportées

```bash
echo "=== Test 3 : Variables exportées ==="

# Variables de test
VAR1="locale_non_exportée"
export VAR2="exportée"
export PATH="/tmp/test:$PATH"

echo "Avant exec bash :"
echo "VAR1=$VAR1"
echo "VAR2=$VAR2"
echo "PATH contient /tmp/test : $(echo $PATH | grep -q /tmp/test && echo OUI || echo NON)"

exec bash

# Après exec bash
echo "Après exec bash :"
echo "VAR1=$VAR1"           # Vide
echo "VAR2=$VAR2"           # Présente
echo "PATH contient /tmp/test : $(echo $PATH | grep -q /tmp/test && echo OUI || echo NON)"  # OUI
```

### Test 4 : exec su - et changement de PID

```bash
echo "=== Test 4 : exec su - et PID ==="

# Créer un marqueur avec le PID
export MARQUEUR_PID="PID_original_$$"
echo "PID initial : $$"
echo "MARQUEUR_PID : $MARQUEUR_PID"

# Exécuter exec su - même utilisateur
exec su - $(whoami)

# Dans le nouveau shell
echo "PID après exec su - : $$"  # DIFFÉRENT !
echo "MARQUEUR_PID : $MARQUEUR_PID"  # Vide (variable perdue)
# Affiche : [PROFILE] Chargé...
```

### Test 5 : Comparaison su vs su -

```bash
echo "=== Test 5 : su vs su - ==="

# Préparation
export TEST_VAR="présente"
export ORIGINAL_PID="$$"

echo "Variables avant :"
echo "TEST_VAR=$TEST_VAR"
echo "PID=$$"
echo "HOME=$HOME"

# Test A : su (sans tiret)
su $(whoami)
echo -e "\n--- Après su (sans tiret) ---"
echo "TEST_VAR=$TEST_VAR"      # Présente
echo "PID=$$"                   # Nouveau PID
echo "HOME=$HOME"               # Inchangé
# Affiche : [BASHRC] Chargé...
exit

# Test B : su - (avec tiret)
su - $(whoami)
echo -e "\n--- Après su - (avec tiret) ---"
echo "TEST_VAR=$TEST_VAR"      # Vide
echo "PID=$$"                   # Nouveau PID
echo "HOME=$HOME"               # HOME de l'utilisateur
# Affiche : [PROFILE] Chargé...
exit
```

### Test 6 : sudo -s vs sudo -i

```bash
echo "=== Test 6 : sudo -s vs sudo -i ==="

# Préparation (en utilisateur normal)
export MA_VAR="test_sudo"
echo "Variable initiale : MA_VAR=$MA_VAR"

# Test A : sudo -s
echo -e "\n--- Test sudo -s ---"
sudo -s
echo "MA_VAR=$MA_VAR"    # Présente
whoami                    # root
echo $HOME                # /home/utilisateur_original (peut varier)
# Affiche : [BASHRC] Chargé...
exit

# Test B : sudo -i
echo -e "\n--- Test sudo -i ---"
sudo -i
echo "MA_VAR=$MA_VAR"    # Vide
whoami                    # root
echo $HOME                # /root
# Affiche : [PROFILE] Chargé...
exit
```

### Test 7 : Hiérarchie des processus

```bash
echo "=== Test 7 : Hiérarchie des processus ==="

# Sans exec
echo "--- Sans exec ---"
echo "PID shell initial : $$"
bash -c 'echo "PID bash enfant : $$"; sleep 2' &
ps -p $$ -p $! --forest
# Affiche la hiérarchie : shell parent -> bash enfant

# Avec exec (dans un sous-shell pour ne pas perdre le shell)
echo -e "\n--- Avec exec ---"
(
    echo "PID avant exec : $$"
    exec bash -c 'echo "PID après exec : $$"; sleep 2'
)
# Le PID reste le même
```

### Test 8 : Fermeture du terminal avec exec

```bash
echo "=== Test 8 : Fermeture du terminal ==="

# Ouvrir un nouveau terminal et taper :
echo "PID actuel : $$"
echo "PPID (parent) : $PPID"

# Vérifier la hiérarchie
ps -p $PPID

exec bash

# Nouveau shell avec même PID
echo "Toujours PID : $$"

exit
# Le terminal se ferme car il n'y a plus de shell parent
```

### Résumé des résultats attendus

| Test | Commande | PID conservé ? | Variables exportées | Fichier chargé |
|------|----------|----------------|---------------------|----------------|
| 1 | `source ~/.bashrc` | OUI | Toutes | Aucun (exécute) |
| 1 | `exec bash` | OUI | Exportées uniquement | `~/.bashrc` |
| 2 | `exec bash --login` | OUI | Exportées uniquement | `~/.bash_profile` |
| 3 | `exec bash` | OUI | Exportées uniquement | `~/.bashrc` |
| 4 | `exec su - user` | **NON** | **Perdues** | `~/.bash_profile` |
| 5 | `su user` | NON | Conservées | `~/.bashrc` |
| 5 | `su - user` | NON | **Perdues** | `~/.bash_profile` |
| 6 | `sudo -s` | NON | Conservées | `~/.bashrc` |
| 6 | `sudo -i` | NON | **Perdues** | `~/.bash_profile` |

### Points clés de la démonstration

* `source` conserve tout (processus, variables, fonctions)
* `exec bash` conserve le PID mais perd les variables locales
* `exec su -` change TOUJOURS le PID malgré `exec`
* Avec tiret (`-`) → réinitialisation complète de l'environnement
* Sans tiret → conservation de l'environnement parent

---

### Commandes essentielles

```bash
# Identifier le type de shell
echo $0                     # -bash = login, bash = non-login

# Recharger la configuration
source ~/.bashrc            # Conserve tout

# Remplacer le shell
exec bash                   # Non-login, même PID
exec bash --login           # Login, même PID

# Changer d'utilisateur
su user                     # Conserve environnement, nouveau PID
su - user                   # Réinitialise environnement, nouveau PID
sudo -s                     # Conserve environnement (root)
sudo -i                     # Réinitialise environnement (root)

# Économiser un processus
exec su user                # Nouveau PID quand même !
exec su - user              # Nouveau PID quand même !
```


## Doc de bash
* Manuel bash : `man bash`
* Information pour bash : `info bash`

Dans le système d'information `info bash`, voici les raccourcis clavier pour naviguer :

## Navigation dans info bash

### Commandes de déplacement principales

| Raccourci | Action |
|-----------|--------|
| **`b`** | **Revenir au début du document** |
| **`Début`** | **Aller au début de la page courante** |
| **`Fin`** | **Aller à la fin de la page courante** |
| **`g`** | **Aller directement au début (Go to beginning)** |

### Autres commandes de navigation utiles

| Raccourci | Action |
|-----------|--------|
| `Space` ou `Page Down` | Page suivante |
| `Page Up` ou `Delete` | Page précédente |
| `n` | Nœud suivant |
| `p` | Nœud précédent |
| `u` | Remonter d'un niveau (Up) |
| `t` | Aller au nœud racine (Top) |
| `l` | Revenir à la localisation précédente |
| `s` | Rechercher du texte |
| `q` | Quitter info |

### Navigation par sections

* **`m`** - Menu : permet de taper le nom d'une section pour y accéder directement
* **`f`** - Follow : suivre une référence croisée
* **`Tab`** - Aller à la prochaine référence dans la page
* **`Shift+Tab`** - Aller à la référence précédente

### Aide intégrée

* **`?`** - Afficher l'aide complète des raccourcis info
* **`Ctrl+h`** - Aide alternative

## Utilisation pratique

Pour revenir rapidement au début de la documentation bash dans info :
```bash
info bash
# Puis presser 'b' ou 'g' pour aller au début
```

Ces raccourcis fonctionnent dans tous les documents info du système GNU.

</span>
</div>

#### Test shell interactif et non interactif

* Mettre une variable `var=deBashrc` dans `/etc/bash.bashrc` ou `.bashrc`
* faire un script `shell-nonInter`

```bash
#!/bin/bash    
# Script pour démontrer un shell non interactif
    
echo "Début du script non interactif"
    
# Affiche la date et l'heure actuelles
echo "Date et heure actuelles : $(date)"
echo "${var:-pasDéfinie}"
echo "la variable \$- est égale à : $-"
echo "Fin du script non interactif"
```

* Lancer les commandes : 
  + `echo "la variable \$- est égale à : $-"` il doit y avoir un `i` comme interactif
  + `echo "${var:-pasDéfinie}"`
* Lancer le script.


## Rappel des commandes

* [cheetsheat de bash sur headgedoc](https://hedgedoc.dawan.fr/QSaDrt-eQQK2s3I4C3sqqw#Bash-cheatsheet-scripting)

### L'historique

* Commande `history` avec le nombres de lignes `history 5`
* Utiliser les touches fléchées (haut et bas) pour naviguer dans l'historique des commandes précédemment utilisées.
* Utiliser `Ctrl + r` pour rechercher dans l'historique une commande spécifique en commençant à taper les premiers caractères de la commande.
* Exécuter une commande spécifique de l'historique en saisissant `!n`, où `n` est le numéro de la commande dans l'historique.
* Répéter la dernière commande avec `!!`.

### Édition en mode Emacs

> voir le fichier bash_racourcis_claviers.md ou le [hedgedoc Raccourcis clavier bash](https://hedgedoc.dawan.fr/qgoSp4zlSPKQbdnMRW7oFA?view#Raccourcis-clavier-bash)

* Par défaut, le shell Bash utilise le mode d'édition Emacs.
* Naviguer dans la ligne de commande avec `Ctrl + a` pour aller au début et `Ctrl + e` pour aller à la fin.
* Couper (kill) le texte avec `Ctrl + k` pour couper jusqu'à la fin de la ligne, et `Ctrl + u` pour couper jusqu'au début de la ligne.
* Coller (yank) le texte avec `Ctrl + y`.
* Supprimer le mot à droite du curseur `Alt + d`

### Édition en mode vi

* Activer le mode vi dans le shell avec la commande `set -o vi` (revenir avec `set -o emacs`).
* Passer en mode insertion avec `i` et revenir en mode commande avec `Esc`.
* Dans le mode commande, utiliser les touches de déplacement de vi (`h`, `j`, `k`, `l`) et d'autres commandes vi pour éditer la ligne de commande.

## Racourcis clavier bash (emacs)

> https://hedgedoc.dawan.fr/qgoSp4zlSPKQbdnMRW7oFA

### La commande `fc`

* `fc` (fix command) est utilisée pour éditer et re-exécuter les commandes de l'historique.
* Ouvrir la dernière commande dans un éditeur avec `fc` ou spécifier une plage de commandes avec `fc start end` (`start` et `end` sont les numéros des commandes).
* Par défaut, `fc` ouvre l'éditeur défini dans la variable d'environnement `$EDITOR`. Pour des utilisateurs sous Linux, cela peut être configuré pour utiliser `nvim` en définissant `EDITOR=nvim`.

#### démontrer l'utilisation la commande `fc` (fix command) 

####  Configuration de l'environnement

Avant de commencer, assurez-vous que l'éditeur de texte par défaut est configuré selon votre préférence. Ici, on va utiliser Neovim:

```bash
export FCEDIT='nvim'
```

####  Affichage de l'historique des commandes

Utilisez `fc -l` pour lister les commandes récentes avec leurs indices. Par exemple:

```bash
fc -l
```

Cela pourrait afficher quelque chose comme :

```bash
  100  ls
  101  cd Documents
  102  grep "example" file.txt
```

#### Sélection et édition d'une commande

Pour éditer une commande spécifique de l'historique, utilisez `fc` suivi de l'indice de la commande. Par exemple, pour éditer la commande à l'indice 102:

```bash
fc 101 102
```

Cela ouvrira Neovim avec la commande spécifiée. Vous pouvez alors modifier la commande. Par exemple, changeons `"example"` en `"test"` dans la commande grep:

```bash
cd Documents
grep "test" file.txt
```

Enregistrez et quittez l'éditeur (`:wq` dans Neovim).

#### Exécution automatique

Une fois l'éditeur fermé, la commande modifiée est automatiquement exécutée par le shell. Vous verrez immédiatement le résultat de la commande `grep "test" file.txt` dans votre terminal.

####  Réutilisation rapide des commandes sans édition

Si vous souhaitez simplement re-exécuter une commande sans modification, vous pouvez utiliser `fc` avec l'option `-s`. Par exemple, pour re-exécuter la commande à l'indice 100:

```bash
fc -s 100
```

Cela exécutera à nouveau `ls` sans avoir besoin d'ouvrir l'éditeur.
</span>
</div>

## Les entrées et sorties

Les données circulent via des flux qui transfèrent des octets d'une zone à une autre. 
* trois flux d'entrée/sortie (E/S) par défaut : l'***entrée standard (stdin)***, la ***sortie standard (stdout)*** et l'***erreur standard (stderr)***. 
* Par défaut, ces flux ont chacun un descripteur de fichier spécifique. 
    * Un descripteur de fichier est un nombre entier associé à un fichier ouvert  et les processus utilisent les descripteurs de fichier pour traiter les données. 
* Les trois flux par défaut ont les numéros de descripteurs de fichiers suivants : ***stdin = 0***, ***stdout = 1*** et ***stderr = 2***.

### Un processus et ses 3 descripteurs de fichiers STDIN (0), STDOUT (1) et STERR (2)

```
STDIN < ------ PROCESSUS ---- >
                   |     ---- >> STDOUT
                   |     ---- |
                   |
                   2>
                 STDERR
```

Dans la plupart des cas, le descripteur stdin (entrée standard) est le clavier, et les deux descripteurs de sortie, stdout (sortie standard) et stderr (l’erreur standard), sont l’écran.



#### 1. Les descripteurs standards

* **0** → `stdin` (entrée)
* **1** → `stdout` (sortie)
* **2** → `stderr` (erreurs)

#### 2. Créer des descripteurs supplémentaires

Exemple :

```bash
exec 3> demo.txt      # ouvre demo.txt sur FD 3
echo "Salut via FD3" >&3
exec 3>&-             # ferme FD 3
```

Vérifier avec :

```bash
ls -l /proc/$$/fd
```


#### 3. Tableau des redirections principales

| Syntaxe        | Signification                | Exemple               |
| -------------- | ---------------------------- | --------------------- |
| `> f`          | stdout vers fichier (écrase) | `ls > out.txt`        |
| `>> f`         | stdout vers fichier (ajoute) | `echo ok >> log.txt`  |
| `< f`          | stdin depuis fichier         | `wc -l < file`        |
| `2> f`         | stderr vers fichier (écrase) | `ls /nope 2> err.txt` |
| `&> f`         | stdout+stderr vers fichier   | `cmd &> all.txt`      |
| `exec 3> f`    | ouvre fichier sur FD 3       |                       |
| `echo "x" >&3` | écrit via FD 3               |                       |
| `exec 3>&-`    | ferme FD 3                   |                       |


####  Vider un fichier

* `> demo.txt`  (forme courte)
* `: > demo.txt` (forme explicite, POSIX)
* `truncate -s 0 demo.txt`


#### Utilité des FDs supplémentaires

* Séparer flux (logs, debug, erreurs).
* Garder plusieurs fichiers ouverts en parallèle.
* Communication entre processus (via pipes nommés).
* Scripts avancés (ex: `dialog`, `whiptail --title "Example" --msgbox "Hello, World!" 8 30`).


# 3. La notion de script shell

   * Rôles d'un script
   * Composition d'un script
   * Exécutions d'un script
   * Atelier : premier script
* Un script contient tout un ensemble d'éléments -- commandes, fonctions, variables -- possiblement structurées.
* Un script s'écrit UNE fois et s'exécute PLUSIEURS fois.

* À la base, un script est un fichier texte -> N'importe quel éditeur convient.

## Encodage des caractères

* <span style=color:red>**NB: si éditeur Windows -> penser à sauvegarder au format Unix/Linux**</span>
### Notation et représentation

Les différents systèmes d'exploitation utilisent différentes conventions pour marquer la fin de ligne dans les fichiers texte :

#### Formats principaux

* **Windows** : CRLF (`\r\n`) - Carriage Return + Line Feed
* **Unix/Linux** : LF (`\n`) - Line Feed uniquement  
* **Mac classique** : CR (`\r`) - Carriage Return uniquement

```bash
# Affichage des caractères de fin de ligne avec cat -v
cat -v fichier_windows.txt
# Affiche : Ligne 1^M
# Le ^M représente le caractère CR (\r)

# Conversion avec dos2unix et unix2dos
dos2unix fichier_windows.txt    # CRLF → LF
unix2dos fichier_unix.txt       # LF → CRLF
```
### Historique et origines

Ces conventions proviennent des machines à écrire mécaniques :
* **Carriage Return (CR)** : retour du chariot à la position de départ
* **Line Feed (LF)** : avancement du papier d'une ligne

#### Evolution par système

* **Machines à écrire** : nécessitaient les deux mouvements (CR + LF)
* **Unix** : simplifié avec LF uniquement pour l'efficacité
* **Windows** : conservé la tradition CR + LF pour la compatibilité
* **Mac moderne** : adopté la convention Unix (LF)

<div style="border:2px solid black; padding:10px; background-color:rgb(180,180,180);border-radius: 15px;">
<style>table th,table td{background:whitesmoke!important;color:darkblue!important}</style>
<span style="color:darkblue">

## Caractères de fin de ligne dans les tables ASCII

### Nature des caractères

**CR**, **LF** et **CRLF** sont des **caractères de contrôle** de la table **ASCII** (American Standard Code for Information Interchange).

### Table ASCII - Caractères de contrôle

#### Positionnement dans la table

| Caractère | Nom complet | Code décimal | Code hexadécimal | Code octal | Notation C |
|-----------|-------------|--------------|------------------|------------|------------|
| **CR** | Carriage Return | 13 | 0x0D | 015 | `\r` |
| **LF** | Line Feed | 10 | 0x0A | 012 | `\n` |

### Catégorie dans ASCII

Ces caractères appartiennent aux **32 premiers caractères** de la table ASCII (codes 0-31), appelés :
* **Caractères de contrôle** (control characters)
* **Caractères non imprimables** (non-printing characters)
* **Codes de contrôle C0**

#### Table des caractères de contrôle principaux

```
Dec | Hex | Oct | Char | Nom            | Description
----|-----|-----|------|----------------|------------------
 8  | 08  | 010 | BS   | Backspace      | Retour arrière
 9  | 09  | 011 | HT   | Tab horizontal | Tabulation
10  | 0A  | 012 | LF   | Line Feed      | Saut de ligne
11  | 0B  | 013 | VT   | Tab vertical   | Tabulation verticale
12  | 0C  | 014 | FF   | Form Feed      | Saut de page
13  | 0D  | 015 | CR   | Carriage Return| Retour chariot
```

### Vérification pratique

#### Affichage des codes

```bash
# Voir les codes ASCII avec printf
printf "Code CR : %d (0x%X)\n" "'$'\r'" "'$'\r'"
printf "Code LF : %d (0x%X)\n" "'$'\n'" "'$'\n'"

# Résultat :
# Code CR : 13 (0xD)
# Code LF : 10 (0xA)
```

#### Création et analyse

```bash
# Créer un fichier avec différents formats
echo -e "Ligne1\rLigne2" > test_cr.txt       # CR seul
echo -e "Ligne1\nLigne2" > test_lf.txt       # LF seul  
echo -e "Ligne1\r\nLigne2" > test_crlf.txt   # CR+LF

# Visualiser les codes avec hexdump
hexdump -C test_crlf.txt
# Sortie : ... 65 31 0d 0a 4c 69 67 6e 65 32 0a
#              L  i  g  n  e  1  CR LF L  i  g  n  e  2  LF
```

#### Avec od (octal dump)

```bash
# Affichage en octal
od -c test_crlf.txt
# Sortie : Ligne1\r\nLigne2\n

# Affichage en hexadécimal
od -x test_crlf.txt
# Sortie : 694c 656e 0d31 4c0a 6769 656e 0a32
```

### Évolution historique des tables

#### ASCII (1963)

* Standard américain de 7 bits (0-127)
* Caractères de contrôle inspirés des télétypes
* CR (13) et LF (10) définis pour les machines à écrire

#### Extensions

* **ISO 8859-1** (Latin-1) : extension 8 bits d'ASCII
* **Unicode/UTF-8** : conserve la compatibilité ASCII pour les 128 premiers caractères
* **EBCDIC** : table IBM différente (CR=13, LF=37)

### Usage dans les langages

#### En C/C++

```c
// Caractères d'échappement
char cr = '\r';    // 0x0D
char lf = '\n';    // 0x0A
char crlf[] = "\r\n";
```

#### En Python

```python
import ord
print(f"CR: {ord('\r')} (0x{ord('\r'):X})")  # 13 (0xD)
print(f"LF: {ord('\n')} (0x{ord('\n'):X})")  # 10 (0xA)
```

#### En shell/bash

```bash
# Variables avec caractères de contrôle
cr=$'\r'        # Carriage Return
lf=$'\n'        # Line Feed
crlf=$'\r\n'    # Windows style
```


</span>
</div>

### Cas d'usage des notations

#### Dans les scripts et programmes

```bash
# Création d'un fichier avec différents formats
echo -e "Ligne 1\nLigne 2" > unix_format.txt        # Format Unix/Linux
echo -e "Ligne 1\r\nLigne 2" > windows_format.txt   # Format Windows
echo -e "Ligne 1\rLigne 2" > mac_format.txt         # Format Mac classique
```

#### Dans les éditeurs de texte

Les éditeurs affichent souvent le format :
* **LF** : Unix/Linux
* **CRLF** : Windows  
* **CR** : Mac classique

#### Problèmes de compatibilité

```bash
# Affichage des caractères de fin de ligne avec cat -v
cat -v fichier_windows.txt
# Affiche : Ligne 1^M
# Le ^M représente le caractère CR (\r)

# Conversion avec dos2unix et unix2dos
dos2unix fichier_windows.txt    # CRLF → LF
unix2dos fichier_unix.txt       # LF → CRLF
```

### Détection et conversion

#### Commandes de détection

```bash
# Avec file
file fichier.txt
# Sortie possible : "ASCII text, with CRLF line terminators"

# Avec hexdump
hexdump -C fichier.txt | grep -E '0d 0a|0a|0d'
# 0d = CR, 0a = LF

# Avec sed pour voir les CR
sed -n l fichier.txt
```

#### Scripts de conversion

```bash
# Conversion manuelle avec sed
sed 's/\r$//' fichier_windows.txt > fichier_unix.txt     # CRLF → LF
sed 's/$/\r/' fichier_unix.txt > fichier_windows.txt     # LF → CRLF

# Avec tr
tr -d '\r' < fichier_windows.txt > fichier_unix.txt      # Supprimer CR
```

#### Problèmes courants

```bash
#!/bin/bash
# Script créé sous Windows avec CRLF
echo "Test"    # Peut causer : bash: $'\r': command not found
```
#### Solutions

```bash
# Nettoyage automatique dans un script
fichier_nettoye=$(tr -d '\r' < "$fichier_original")

# Vérification du format
if file "$fichier" | grep -q "CRLF"; then
    echo "Fichier au format Windows détecté"
    dos2unix "$fichier"
fi
```

#### Pour le développement

* Configurer l'éditeur pour utiliser LF (Unix) par défaut
* Utiliser `.gitattributes` pour normaliser automatiquement :

```gitattributes
# .gitattributes
* text=auto eol=lf
*.sh text eol=lf
```

## Encodage des caractères 

* Linux : tout est en UTF-8
* Windows : pas encore -> si besoin utiliser la commande `iconv` (Linux)

* Toutes les informations sont données par la commande `file`.
    + Les \r peuvent supprimés par la commande
```bash
tr -d "\r" < f1 > f2
dos2unix f1
```
* La conversion vers UTF-8 peut se faire par
```bash
iconv -t UTF-8 f2 > f3
```


## Contenu d'un script

* Première ligne -> Indique le chemin vers l'interpréteur du script (shell ou autre -> perl, python, sed, awk...)
    + Elle est nommée le ***shebang*** ou le ***shabang***
    + `#!/bin/bash` 
    + `#!/usr/bin/env bash`
    + Toute autre ligne débutant par le caractère # est considérée comme un commentaire.

#### 1) Commentaires en Bash

Écrire des commentaires dans les scripts Bash est essentiel pour maintenir la clarté du code et faciliter la compréhension et la maintenance par d'autres développeurs ou par vous-même à l'avenir. Voici les méthodes principales pour ajouter des commentaires dans les scripts Bash :

##### Commentaires avec `#`

La méthode la plus courante pour commenter dans Bash est d'utiliser le caractère `#`. Tout texte suivant `#` sur la même ligne est traité comme un commentaire et est ignoré par l'interpréteur de commandes.

```bash
# Ceci est un commentaire simple
echo "Hello World" # Ce commentaire suit une commande
```

##### Commentaires de bloc avec `:` et `<<`

Bien que Bash ne supporte pas directement les commentaires de bloc comme d'autres langages de programmation, il est possible d'utiliser des techniques pour simuler cette fonctionnalité.

1. **Utilisation de `:` avec des guillemets simples**:
   `:` est un opérateur no-op (no operation) en Bash. Il ne fait rien mais accepte ses arguments, qui peuvent être utilisés pour écrire des commentaires sur plusieurs lignes.

   ```bash
   : '
   Ceci est un commentaire
   sur plusieurs lignes
   '
   ```

   Ici, `:` reçoit une chaîne comme argument, et puisque `:` ne fait rien avec ses arguments, la chaîne est effectivement ignorée, servant de commentaire.

2. **Redirection vers un bloc de commentaire avec `<<`**:
   Cette méthode utilise un here-document pour créer un bloc de commentaire. Le texte entre `<<COM` et `COM` est traité comme un commentaire.

   ```bash
   <<COM
   Ceci est un autre exemple
   de commentaire sur plusieurs lignes
   COM
   ```

   Ce bloc n'est pas exécuté et sert à insérer des commentaires étendus.

##### Bonne pratique : le cartouche

```bash
#!/bin/bash

# Maintainer : hbigo@dawan.fr
# Date : 06/05/2024
# Met à jour mon système ( = le but du script )

commandes...
```
#### 2) Lignes vides
* Sans incidences
* Clarté
#### 3) Commandes

#### 4) Gestion de variables

#### 5) Structures de contrôle

#### 6) Défintion de fonctions

#### 7) ...

#### 8) Code retour
* Valeur, de 0 à 127, indiquant si la commande/script s'est bien terminé :
    + **0** -> réussite
    + **!= 0** -> une situation d'erreur ou autre (doit être documentée)
    + La variable `?` contient le code de retour de la dernière commande, on l'affiche par `echo $?`
* Bien penser à expliciter le code retour des scripts créés à l'aide de la commande exit suivie du code retour choisi.

# Micro TP Premier script

* Consigne : Écrire un premier script affichant la date, le calendrier et retournant explicitement la valeur 0.
    + `sudo apt install ncal`
<!-- 
***Solution***
```bash
#!/bin/bash

date
ncal
exit 0
```
-->

## Comment exécuter un script
* Plusieurs solutions
```bash
bash mtp-1.sh
# ou en le rendant exécutable
chmod +x mtp-1.sh
./mtp-1.sh
# ou encore
source mtp-1.sh
```
NB: dans le cas de `source`, la commande exit met fin au shell -> fin de session !

* penser à rajouter les script en arrière plan
```bash
./script.sh & # lance le script en arrière plan
jobs # script en train de tourner
kill %% # kill le dernier job
```
------------------------------------------------------------------
# 4. Gérer les variables
   * Les différents types de variables
   * Création, suppression de variable
   * Affectations d'une variable
   * Commande set
   * Manipulation des chaînes de caractères 
     - Longueur d'une chaîne
     - Gestion de la casse
     - Gestion des sous-chaînes
   * Opérations arithmétiques
   * Atelier : exercices sur les variables
--------------------------------------------------------------------

## Création d'une variable
* La nature de la valeur d'une valeur est toujours chaîne de caractères. Par exemple 321 est une chaîne composée des caractères 3, 2 et 1.
* Première forme : non interactive
    + nom=valeur
    + La valeur peut être
        - statique
        - dynamique
            + variable
            + `stage=$HOME`
            + commande
            + `stage=$(date)`
        - combinaison des deux
```bash
$ fic=resu  
$ newfic=${fic}_$(date +%Y%m%d) 
$ echo $newfic 
resu_20240621 
```
* Deuxième forme : interactive
    + `read variable`
    + `read -p "Votre réponse : " variable`
#### Effacement d'une variable
```bash
unset nom_de_variable
```

## Affectation d'une variable

* En règle générale, on fait appel au contenu d'une variable par
    + `$variable`
* Il est conseillé de mettre des guillemets pour échapper les espaces et les `/`
    + `cat "$dossier/$fichier"`
    + `var="Hello, world!"` -> `echo "$var"`
* Attention aux effets de bord : la syntaxe orthodoxe est :
    + `${variable}` et donc mieux `"${variable}"`
* Comparer les deux écritures :

```bash
fic=resu  
newfic=${fic}_$(date +%Y%m%d) 
newfic_sans=$fic_$(date +%Y%m%d) 
echo $newfic
#Sortie
resu_20240621
echo $newfic_sans
#Sortie
20240621
# c'est $fic_ qui est appelée, elle n'est pas définie 
```
* Un ensemble d'opérations découle de cette syntaxe


## Différents types de variables
### 1) Variables utilisateurs
* Créées, gérées et supprimées par l'utilisateur
* Accès en lecture/écriture
* Nom de la variable : 
    + tout caractère alphanumérique (différence est faite entre les minuscules/majuscules)
    + attention aux majuscules -> le shell se réserve les majuscules
    + caractère  `_` ok, plutot SnakeCase que CamelCase
    + ne peut débuter par un chiffre


### 2) Variables d'environnement (liées à la session)
* Créées, gérées et détruites par le shell
* Accès en lecture/écriture -> attention aux effets de bord.
* Nom de la variable :
    + Mêmes règles que précédemment

<div style="border:2px solid black; padding:10px; background-color:rgb(180,180,180);border-radius: 15px;">
<style>table th,table td{background:lightgreen!important;color:darkblue!important}</style>
<span style="color:darkblue">

# Variables d'environnement

## Concepts fondamentaux

### Définition et rôle

Les variables d'environnement constituent un mécanisme essentiel du système Unix/Linux permettant :

* **Communication inter-processus** : transmission d'informations entre processus parent et enfant
* **Configuration système** : paramétrage global accessible à toutes les applications
* **Personnalisation environnement** : adaptation comportementale des commandes et programmes

Un certain nombre de variables sont définies dans l'environnement du shell. Elles contiennent des informations nécessaires au fonctionnement de l'interpréteur et/ou des commandes lancées à partir de celui-ci.

### Caractéristiques techniques

* **Portée** : héritées par tous les processus descendants
* **Type** : chaînes de caractères uniquement
* **Persistance** : durée de vie limitée à la session (sauf configuration)
* **Visibilité** : accessibles via `$VARIABLE` ou `${VARIABLE}`

## Gestion des variables d'environnement

### Liste et affichage des variables

#### Commandes d'inspection

```bash
# Lister toutes les variables du shell courant
set

# Afficher uniquement les variables exportées  
env
export -p

# Afficher une variable spécifique
echo $HOME
echo $PATH
```

#### Variables principales du système

```bash
# Variables essentielles
HOME=/home/utilisateur           # Répertoire d'accueil
PATH=/usr/bin:/bin:/usr/sbin     # Chemins de recherche commandes
SHELL=/bin/bash                  # Shell par défaut
TERM=xterm                       # Type de terminal
LOGNAME=utilisateur              # Nom de connexion
PWD=/repertoire/courant          # Répertoire de travail
```

### Création et modification

#### Syntaxe de base

```bash
# Définir une variable locale
ma_variable="valeur"

# Définir et exporter directement
export MA_VARIABLE="valeur"

# Exporter une variable existante
ma_variable="valeur"
export ma_variable
```

#### Exemples pratiques

```bash
# Configuration d'un éditeur personnalisé
export EDITOR="nvim"

# Ajout d'un répertoire au PATH
export PATH="$PATH:/opt/bin"

# Variable pour configuration application
export APP_CONFIG="/etc/monapp/config.ini"
```

### Protection et guillemets

#### Gestion des caractères spéciaux

```bash
# Valeur avec espaces - utiliser des apostrophes
export MESSAGE='Bonjour tout le monde'

# Valeur avec variables - utiliser des guillemets
export CHEMIN_COMPLET="$HOME/projets/scripts"

# Éviter l'espacement autour du signe =
# INCORRECT : export VAR = "valeur"
# CORRECT :
export VAR="valeur"
```

## Variables système importantes

### HOME - Répertoire d'accueil

```bash
# Affichage
echo $HOME
# Résultat : /home/christie

# Utilisation typique
cd $HOME
nvim "$HOME/.bashrc"
```

**Important** : Cette variable ne doit jamais être modifiée manuellement.

### PATH - Chemins de recherche

#### Fonctionnement

La variable PATH contient une liste de répertoires explorés par le shell pour rechercher les commandes externes.

```bash
# Affichage du PATH
echo $PATH
# Résultat : /usr/bin:/bin:/usr/sbin:/sbin

# Vérification d'une commande
which date
# Résultat : /usr/bin/date
```

#### Modification du PATH

```bash
# Ajout temporaire d'un répertoire
export PATH="$PATH:/usr/local/bin"

# Ajout en début (priorité haute)
export PATH="/opt/bin:$PATH"

# Inclusion du répertoire courant (attention sécurité)
export PATH="$PATH:."
```

#### Points de sécurité

* Le répertoire courant (`.`) ne figure jamais par défaut dans PATH
* Ordre d'importance : les premiers répertoires sont prioritaires
* Vérifier régulièrement l'intégrité du PATH

### PS1 et PS2 - Invites de commande

#### PS1 - Invite principal

```bash
# Configuration basique
export PS1="$ "

# Avec nom d'utilisateur et machine
export PS1="\u@\h$ "

# Avec répertoire courant complet
export PS1="\u@\h:\w$ "
```

#### Séquences d'échappement Bash

| Séquence | Signification |
|----------|---------------|
| `\u` | Nom de l'utilisateur |
| `\h` | Nom de la machine |
| `\w` | Répertoire courant complet |
| `\W` | Nom du répertoire courant seulement |
| `\d` | Date courante |
| `\t` | Heure courante |

#### PS2 - Invite secondaire

```bash
# Définition de l'invite de continuation
export PS2="> "

# Exemple d'utilisation
echo "ligne 1
> ligne 2
> ligne 3"
```

### TERM - Type de terminal

```bash
# Affichage du type de terminal
echo $TERM
# Résultats possibles : xterm, vt100, screen, tmux

# Recherche du fichier de configuration
find /usr/share/terminfo -name "$TERM" 2>/dev/null
```

### Variables applicatives spécialisées

#### TMOUT - Délai d'expiration
`TMOUT` est une variable d'environnement spécifique au shell qui définit un délai d'inactivité en secondes. Si aucune interaction clavier n'a lieu pendant cette durée, le shell se termine automatiquement.
```bash
# Définir un timeout de 10 minutes (600 secondes)
export TMOUT=600

# Désactiver le timeout
export TMOUT=0
```

#### Variables d'éditeur

```bash
# Configuration pour vi/vim
export EXINIT="set number"

# Éditeur par défaut
export EDITOR="nvim"
export VISUAL="nvim"
```

## Exportation et héritage

### Mécanisme d'exportation

#### Différence variables locales vs exportées

```bash
# Variable locale (non transmise aux sous-processus)
ma_variable_locale="valeur"

# Variable exportée (transmise aux processus enfants)
export ma_variable_exportee="valeur"
```

#### Test d'héritage

```bash
#!/bin/bash
# test_heritage.sh

# Définition de variables
variable_locale="locale"
export variable_exportee="exportee" 

echo "=== Variables dans le processus parent ==="
echo "Locale: $variable_locale"
echo "Exportée: $variable_exportee"

echo "=== Variables dans le sous-processus ==="
bash -c 'echo "Locale: $variable_locale"'
bash -c 'echo "Exportée: $variable_exportee"'
```

**Résultat attendu :**
```
=== Variables dans le processus parent ===
Locale: locale
Exportée: exportee
=== Variables dans le sous-processus ===
Locale: 
Exportée: exportee
```

### Règles d'exportation obligatoire

| Variable | Usage shell uniquement | Doit être dans l'env |
|----------|------------------------|-------------------|
| PATH | Non | **Oui** |
| HOME | Non | **Oui** |
| TERM | Non | **Oui** |
| PS1 | Oui | Non |
| PS2 | Oui | Non |
| PWD | Variable spéciale | **Oui** |

### Suppression de variables

```bash
# Supprimer une variable
unset ma_variable

# Vérifier la suppression
echo "Variable: '$ma_variable'"  # Affiche : Variable: ''
```

## Cas d'usage avancés

### Configuration d'applications

```bash
# Configuration base de données
export DB_HOST="localhost"
export DB_PORT="5432"
export DB_NAME="ma_base"

# Configuration proxy
export HTTP_PROXY="http://proxy.entreprise.com:8080"
export HTTPS_PROXY="$HTTP_PROXY"
export NO_PROXY="localhost,127.0.0.1,.local"
```

### Scripts de déploiement

```bash
#!/bin/bash
# deploiement.sh

# Variables d'environnement du déploiement
export ENV_TYPE="production"
export APP_VERSION="2.1.3"
export LOG_LEVEL="INFO"

# Démarrage avec environnement configuré
./mon_application
```

### Variables conditionnelles

```bash
# Configuration selon l'environnement
if "$HOSTNAME" =~ ^prod; then
    export LOG_LEVEL="ERROR"
    export DEBUG_MODE="false"
else
    export LOG_LEVEL="DEBUG" 
    export DEBUG_MODE="true"
fi
```

## Persistance et fichiers de configuration

### Fichiers de profil

* **`/etc/profile`** : configuration globale pour tous les utilisateurs
* **`~/.bash_profile`** : configuration utilisateur pour shells de connexion
* **`~/.bashrc`** : configuration pour shells interactifs
* **`~/.profile`** : configuration portable (tous shells POSIX)

### Exemple de configuration personnelle

```bash
# Dans ~/.bashrc
export EDITOR="nvim"
export PAGER="less"
export LANG="fr_FR.UTF-8"

# PATH personnalisé
export PATH="$HOME/bin:$PATH"

# Alias avec variables d'environnement
alias ll="ls -la --color=auto"
alias grep="grep --color=auto"
```

## Micro-TP : Gestion des variables d'environnement

### Objectif
Créer un script démontrant la gestion complète des variables d'environnement.

### Consigne

Écrire un script `gestion_env.sh` qui :

1. Affiche les variables système principales
2. Crée des variables locales et exportées  
3. Teste l'héritage via un sous-processus
4. Modifie temporairement le PATH
5. Restaure l'environnement initial

### Solution

```bash
#!/bin/bash
# gestion_env.sh

echo "=== GESTION DES VARIABLES D'ENVIRONNEMENT ==="

# 1. Affichage variables système
echo -e "\n1. Variables système principales :"
echo "HOME: $HOME"
echo "USER: $USER"
echo "SHELL: $SHELL"
echo "PATH: ${PATH:0:50}..."

# 2. Sauvegarde PATH original
path_original="$PATH"

# 3. Création variables test
variable_locale="je_reste_locale"
export variable_exportee="je_suis_exportee"

echo -e "\n2. Test d'héritage des variables :"
echo "Variables dans le processus parent :"
echo "  Locale: '$variable_locale'"
echo "  Exportée: '$variable_exportee'"

echo "Variables dans le sous-processus :"
bash -c 'echo "  Locale: \"$variable_locale\""'
bash -c 'echo "  Exportée: \"$variable_exportee\""'

# 4. Modification temporaire PATH
echo -e "\n3. Modification du PATH :"
echo "PATH avant: ${PATH:0:50}..."

export PATH="/tmp:$PATH"
echo "PATH après ajout /tmp: ${PATH:0:50}..."

# 5. Test recherche commande
echo -e "\n4. Test recherche commande :"
which ls
echo "Commande 'ls' trouvée dans: $(which ls)"

# 6. Restauration
export PATH="$path_original"
echo -e "\n5. PATH restauré: ${PATH:0:50}..."

echo -e "\n=== DÉMONSTRATION TERMINÉE ==="
```

## Points essentiels à retenir

* **Exportation obligatoire** pour transmission aux processus enfants
* **Variables système** ne jamais modifier HOME, attention au PATH
* **Guillemets** protéger les valeurs contenant espaces ou caractères spéciaux
* **Sécurité** éviter le répertoire courant dans PATH
* **Persistance** utiliser les fichiers de profil pour configuration permanente

Les variables d'environnement constituent un mécanisme fondamental pour la configuration et la communication dans l'écosystème Unix/Linux. Leur maîtrise est essentielle pour l'administration système et le développement de scripts robustes.

</span>
</div>

### 3) Variables positionnelles -> arguments d'un script
* Créées, gérées et détruites par le shell
* Accès en lecture/écriture (!!!)
* Nom de la variable :
    + Chiffre lié au rang de l'argument sur la ligne de commande
    + `0` : nom du script
    + `1` : argument n°1
    + `2` : argument n°2
    + ...
    + `#` : nombre d'arguments d'un script

### 4) Variables automatiques (ou spéciales)
* Créées, gérées et détruites par le shell
* Accès en lecture seule
* Nom de la variable :
    + Un caractère simple non-alphanumérique
    + `#` : nombre d'argument d'un script
    + `$` : PID du shell courant
    + `?` : code retour de la dernière commande
    + `@` : ensemble des arguments d'un script
    + `*` : ensemble des arguments d'un script
    + `!` : PID de la dernière commande lancée en arrière plan

### Exportation d'une variable
Par défaut, une fois définie une variable n'est pas accessible aux processus-fils du shell courant. Pour la rendre accessible, il faut exécuter la commande

**`export variable[=valeur]`**

De fait elle devient **une variable d’environement**

---
## Systaxe et opération sur les variables


| Syntaxe                | Explications                                                                                               |
|------------------------|------------------------------------------------------------------------------------------------------------|
| `${#variable}`         | Longueur du contenu de la variable.                                                                        |
| `${variable^}`         | Initiale en majuscule.                                                                                     |
| `${variable^^}`        | Tout en majuscule.                                                                                         |
| `${variable,}`         | Initiale en minuscule.                                                                                     |
| `${variable,,}`        | Tout en minuscule.                                                                                         |
| `${variable/str1/str2}`| Remplace la première occurrence de `str1` par `str2`.                                                      |
| `${variable//str1/str2}`| Remplace toutes les occurrences de `str1` par `str2`.                                                      |
| `${variable:début:long}`| Sous-chaîne de longueur `long` à partir de la position `début` (on compte à partir de 0).                 |
| `${variable#modèle}`  | Retourne la variable dont on aura supprimé, en partant du début, la plus petite chaîne correspondant au modèle. |
| `${variable##modèle}` | Retourne la variable dont on aura supprimé, en partant du début, la plus grande chaîne correspondant au modèle. |
| `${variable%modèle}`  | Retourne la variable dont on aura supprimé, en partant de la fin, la plus petite chaîne correspondant au modèle. |
| `${variable%%modèle}` | Retourne la variable dont on aura supprimé, en partant de la fin, la plus grande chaîne correspondant au modèle. |
| `${variable:-default}`| Retourne la valeur _défaut_ si la variable est vide ou non définie.                                        |
| `${variable:=default}`| Assigne et retourne la valeur _défaut_ si la variable est vide ou non définie.                            |
| `${variable:+alt}`    | Retourne une valeur alternative `alt` si la variable est définie et non vide, sinon rien.                   |
| `${variable:?message}`| Affiche `message` et quitte le script si la variable est vide ou non définie.                               |
| `${!prefix*}`         | Expande à une liste de noms de variables commençant par `prefix`.                                           |
| `${!prefix@}`         | Comportement similaire à `${!prefix*}`, mais utilisé dans des citations doubles.                            |


<div style="border:2px solid black; padding:10px; background-color:lightgrey;border-radius: 15px;">
 <span style=color:blue>

### Quelques exemples

#### 1. Remplacement de la première occurrence

```bash
# Définir la variable
variable="chocolat chaud chocolat noir"
# Remplacer la première occurrence de 'chocolat' par 'vanille'
echo ${variable/chocolat/vanille}
```

**Sortie :**
```
vanille chaud chocolat noir
```

#### 2. Remplacement de toutes les occurrences

```bash
# Définir la variable
variable="chocolat chaud chocolat noir"
# Remplacer toutes les occurrences de 'chocolat' par 'vanille'
echo ${variable//chocolat/vanille}
```

**Sortie :**
```
vanille chaud vanille noir
```

#### 3. Extraction de sous-chaîne

```bash
# Définir la variable
variable="ordinateur portable"
# Extraire une sous-chaîne de 10 caractères à partir de l'index 4
echo ${variable:4:10}
```

**Sortie :**
```
ateur port
```

#### 4. Suppression de la plus petite chaîne correspondant au modèle du début

```bash
# Définir la variable
variable="src/main/java/Example.java"
# Supprimer le plus petit modèle depuis le début qui correspond à '*/'
echo ${variable#*/}
```

**Sortie :**
```
main/java/Example.java
```

#### 5. Suppression de la plus grande chaîne correspondant au modèle du début

```bash
# Définir la variable
variable="src/main/java/Example.java"
# Supprimer le plus grand modèle depuis le début qui correspond à '*/'
echo ${variable##*/}
```

**Sortie :**
```
Example.java
```

#### 6. Suppression de la plus petite chaîne correspondant au modèle de la fin

```bash
# Définir la variable
variable="report.final.copy.txt"

# Supprimer la plus petite chaîne depuis la fin qui correspond à '.'
echo "${variable%.*}"
```

**Sortie attendue :**
```
report.final.copy
```

Cette commande supprime seulement la partie après le dernier point, c'est-à-dire `.txt`, qui est la plus petite correspondance pour le modèle `.*` (tout ce qui suit le dernier point).

#### 7. Suppression de la plus grande chaîne correspondant au modèle de la fin

```bash
# Définir la variable
variable="report.final.copy.txt"

# Supprimer la plus grande chaîne depuis la fin qui correspond à '.'
echo "${variable%%.*}"
```

**Sortie attendue :**
```
report
```

#### 8. `${variable:-default}`
Retourne la valeur par défaut si la variable est vide ou non définie.

```bash
# Variable non définie
echo "${nondefinie:-'Valeur par défaut'}"
```

**Sortie :**
```
Valeur par défaut
```

#### 9. `${variable:=default}`
Assigne et retourne la valeur par défaut si la variable est vide ou non définie.

```bash
# Variable non définie, initialisée et affichée
echo "${nondefinie:='Valeur par défaut'}"
echo "Après initialisation : $nondefinie"
```

**Sortie :**
```
Valeur par défaut
Après initialisation : Valeur par défaut
```

#### 10. `${variable:+alt}`
Retourne une valeur alternative `alt` si la variable est définie et non vide, sinon rien.

```bash
# Variable définie
variable="quelque chose"
echo "${variable:+'Valeur alternative'}"
```

**Sortie :**
```
Valeur alternative
```

#### 11. `${variable:?message}`
Affiche `message` et quitte le script si la variable est vide ou non définie.

```bash
# Exemple avec variable non définie
echo "${nondefinie:?'Erreur : variable non définie'}"
```

**Sortie :**
```
bash: nondefinie: Erreur : variable non définie
```

#### 12. `${!prefix*}` et `${!prefix@}`
```bash
#!/bin/bash

# Définir des variables
prefix_un=123
prefix_deux=456
prefix_trois=789

# Utilisation de ${!prefix*} dans une commande echo avec guillemets
echo "Concatenated Variables: ${!prefix*}"

# Utilisation de ${!prefix@} dans une boucle for avec des guillemets
echo "Listed Variables with '@':"
for var in "${!prefix@}"; do
  echo "$var"
done

# Utilisation de ${!prefix*} dans une boucle for avec des guillemets
echo "Listed Variables with '*':"
for var in "${!prefix*}"; do
  echo "$var"
done
exit 0
```
#### Sortie attendue

```bash
Concatenated Variables: prefix_deux prefix_trois prefix_un
Listed Variables with '@':
prefix_deux
prefix_trois
prefix_un
Listed Variables with '*':
prefix_deux prefix_trois prefix_un
```

</span>
</div>

## Expension de variable indirecte

 L'opérateur `${!variable}` en Bash est utilisé pour réaliser une expansion de variable indirecte. Cela signifie qu'il permet d'accéder à la valeur d'une variable dont le nom est stocké dans une autre variable.

 ```bash
#!/bin/bash

var1="Première variable"
var2="Deuxième variable"
var3="Troisième variable"

# Stocker le nom de la variable à accéder dans une autre variable
index=2
var_name="var$index"

# Utiliser ! pour accéder à la variable indirectement
echo "La valeur de la variable nommée $var_name est: ${!var_name}"
 ```

 L'opérateur `${!variable}` en Bash est utilisé pour réaliser une expansion de variable indirecte. Cela signifie qu'il permet d'accéder à la valeur d'une variable dont le nom est stocké dans une autre variable. Pour clarifier son utilisation, je vais vous donner quelques exemples plus détaillés qui illustrent différents cas d'utilisation.
Dans cet exemple, `${!var_name}` est remplacé  `$var2` parce que `var_name` contient la chaîne "var2". Et `$var2` vaut "Deuxième variable" 


Voici les deux scripts et la sortie.

---

## Micro TP - Expansions de variables : script à trou

### Consigne

Compléter le script `expansions_a_trous.sh` en remplaçant chaque `___` par la valeur adéquate pour obtenir exactement la sortie attendue.

### Instructions

* Ne modifier que les zones marquées `___`
* Chaque section est indépendante
* La sortie attendue est indiquée en commentaire sur chaque ligne `echo`

#### Test du TP avec

```bash
chmod +x expansions_a_trous.sh
./expansions_a_trous.sh
```

Sortie attendue :

```
=== 1. Valeur par défaut ===
N/A
La valeur de var est vide :
linux

=== 2. Assignation par défaut ===
vide avant
formation
formation

=== 3. Valeur alternative ===

bash

=== 4. Erreur si vide ===
vv

=== 5. Longueur ===
10

=== 6. Majuscules / minuscules ===
Bonjour monde
BONJOUR MONDE
bONJOUR MONDE
bonjour monde

=== 7. Remplacement ===
chien chaud chat noir
chien chaud chien noir

=== 8. Sous-chaîne ===
linux

=== 9. Suppression depuis le début ===
scripts/formation.sh
formation.sh

=== 10. Suppression depuis la fin ===
scripts/formation
scripts

=== 11. Expansion indirecte ===
Bonjour depuis var2
:~$
```

---

### Script à trou

```bash
#!/bin/bash
# expansions_a_trous.sh
# Remplacer les ___ par la valeur adéquate

echo "=== 1. Valeur par défaut ==="
unset var
echo "${var:___}"        # sortie : "N/A"
echo "la valeur de var (vide): $var"    # sortie vide
var="linux"
echo "${var:___}"        # sortie : "linux"

echo

echo "=== 2. Assignation par défaut ==="
unset var
echo "${var:___}"        # sortie : "vide avant"
unset var
echo "${var:___}"        # sortie : "formation"
echo "$var"              # sortie : "formation"
echo

echo "=== 3. Valeur alternative ==="
unset var
echo "${var:___}"        # sortie : ""
var="quelconque"
echo "${var:___}"        # sortie : "bash"
echo

echo "=== 4. Erreur si vide ==="
# le scripte doit échoer après cette ligne 
var=""
echo "${var:___}"        # sortie : "la variable ne doit pas être vide"
echo
# après ce test concluant, attribuer une valeur à "var" pour continuer.

echo "=== 5. Longueur ==="
chaine="0123456789"
echo "${___}"            # sortie : "10"
echo

echo "=== 6. Majuscules / minuscules ==="
phrase="bonjour monde"
echo "${___}"            # sortie : "Bonjour monde"
echo "${___}"            # sortie : "BONJOUR MONDE"
phrase="BONJOUR MONDE"
echo "${___}"            # sortie : "bONJOUR MONDE"
echo "${___}"            # sortie : "bonjour monde"
echo

echo "=== 7. Remplacement ==="
texte="chat chaud chat noir"
echo "${___}"            # sortie : "chien chaud chat noir"
echo "${___}"            # sortie : "chien chaud chien noir"
echo

echo "=== 8. Sous-chaîne ==="
mot="bonjour linux bash"
echo "${___}"            # sortie : "linux"
echo

echo "=== 9. Suppression depuis le début ==="
chemin="repertoire/scripts/formation.sh"
echo "${___}"            # sortie : "scripts/formation.sh"
echo "${___}"            # sortie : "formation.sh"
echo

echo "=== 10. Suppression depuis la fin ==="
chemin="scripts/formation.sh"
echo "${___}"            # sortie : "scripts/formation"
echo "${___}"            # sortie : "scripts"
echo

echo "=== 11. Expansion indirecte ==="
var1="Bonjour depuis var1"
var2="Bonjour depuis var2"
var3="Bonjour depuis var3"
index=2
nom_var="var$index"
echo "${___}"            # sortie : "Bonjour depuis var2"

exit 0
```

---

***Solution***
(à décommanter)

```bash
#!/bin/bash
# expansions_a_trous.sh - CORRIGÉ

echo "=== 1. Valeur par défaut ==="
unset var
echo "${var:-N/A}"
echo "La valeur de var est vide : $var"
var="linux"
echo "${var:-N/A}"
echo

echo "=== 2. Assignation par défaut ==="
unset var
echo "${var:-vide avant}"
unset var
echo "${var:=formation}"
echo "$var"
echo

echo "=== 3. Valeur alternative ==="
unset var
echo "${var:+bash}"
var="quelconque"
echo "${var:+bash}"
echo

echo "=== 4. Erreur si vide ==="
var="vv"
echo "${var:?la variable ne doit pas être vide}"
echo

echo "=== 5. Longueur ==="
chaine="0123456789"
echo "${#chaine}"
echo

echo "=== 6. Majuscules / minuscules ==="
phrase="bonjour monde"
echo "${phrase^}"
echo "${phrase^^}"
phrase="BONJOUR MONDE"
echo "${phrase,}"
echo "${phrase,,}"
echo

echo "=== 7. Remplacement ==="
texte="chat chaud chat noir"
echo "${texte/chat/chien}"
echo "${texte//chat/chien}"
echo

echo "=== 8. Sous-chaîne ==="
mot="bonjour linux bash"
echo "${mot:8:5}"
echo

echo "=== 9. Suppression depuis le début ==="
chemin="repertoire/scripts/formation.sh"
echo "${chemin#*/}"
echo "${chemin##*/}"
echo

echo "=== 10. Suppression depuis la fin ==="
chemin="scripts/formation.sh"
echo "${chemin%.*}"
echo "${chemin%%/*}"
echo

echo "=== 11. Expansion indirecte ==="
var1="Bonjour depuis var1"
var2="Bonjour depuis var2"
var3="Bonjour depuis var3"
index=2
nom_var="var$index"
echo "${!nom_var}"

exit 0
```

## Micro TP #2 - Extraction du nom de fichier sans extension

### Consigne
À partir de la commande `man -w date`, afficher le nom terminal du fichier sans son extension et sans utiliser d'autres commandes que man.
Résultat = `date.1`

### Instructions
* Récupérer le chemin complet avec `man -w date`
* Utiliser `${variable##*/}` pour extraire le nom du fichier (supprime tout jusqu'au dernier `/`)
* Utiliser `${variable%.*}` pour supprimer l'extension (supprime tout depuis le dernier `.`)
* Afficher uniquement le nom final

***Solution***
(à décommenter)
<!--
```bash
#!/bin/bash

line=$(man -w date)
line1=${line##*/}
echo ${line1%.*}
```
-->

## Micro TP#3 - Substitutions conditionnelles de variables

### Consigne
Créer un script qui teste et démontre les 4 substitutions conditionnelles de variables Bash. Le script doit illustrer clairement le comportement de chaque type de substitution avec des variables définies et non définies.

### Instructions
* Tester les 4 substitutions dans l'ordre : `:-`, `:=`, `:+`, `:?`
* Pour chaque substitution, tester avec une variable non définie puis définie
* Ajouter des commentaires explicatifs pour chaque test
* Gérer proprement l'arrêt du script sur l'erreur `${variable:?message}`

#### Référence des substitutions
| Substitution | Effet |
|:-------------|:------|
| `${variable:-default}` | Retourne la valeur par défaut si la variable est vide ou non définie |
| `${variable:=default}` | Assigne et retourne la valeur par défaut si la variable est vide ou non définie |
| `${variable:+alt}` | Retourne une valeur alternative si la variable est définie et non vide, sinon rien |
| `${variable:?message}` | Affiche message et quitte le script si la variable est vide ou non définie |

#### Test du TP avec
```bash
chmod +x substitutions.sh
./substitutions.sh
```

#### Pseudo-code
```c
ALGORITHME test_substitutions_variables

DEBUT
    // Test 1 : ${variable:-default}
    AFFICHER "=== Test ${variable:-default} ==="
    DESASSIGNER test_var
    AFFICHER "Variable non définie: " + (test_var OU "valeur_par_defaut")
    ASSIGNER test_var = "valeur_existante"
    AFFICHER "Variable définie: " + (test_var OU "valeur_par_defaut")
    
    // Test 2 : ${variable:=default}
    AFFICHER "=== Test ${variable:=default} ==="
    DESASSIGNER test_var
    AFFICHER "Avant assignation: " + test_var
    ASSIGNER_ET_RETOURNER test_var = (test_var OU_ASSIGNER "nouvelle_valeur")
    AFFICHER "Après assignation: " + test_var
    
    // Test 3 : ${variable:+alt}
    AFFICHER "=== Test ${variable:+alt} ==="
    DESASSIGNER test_var
    AFFICHER "Variable non définie: " + (test_var EXISTE_ALORS "alternative" SINON "")
    ASSIGNER test_var = "valeur"
    AFFICHER "Variable définie: " + (test_var EXISTE_ALORS "alternative" SINON "")
    
    // Test 4 : ${variable:?message} avec gestion d'erreur
    AFFICHER "=== Test ${variable:?message} ==="
    DESASSIGNER test_var
    ESSAYER
        VERIFIER_EXISTENCE test_var SINON_ERREUR "Variable requise manquante"
    CAPTURER_ERREUR DANS UN SOUS SHELL (pour ne pas arreter le script)
        AFFICHER "Script arrêté par substitution :?"
    AFFICHER "message de fin"
FIN
```

***Solution***
(à décommenter)

```bash
#!/bin/bash
# test_substitutions.sh - Démonstration des substitutions conditionnelles

echo "=== TESTS DES SUBSTITUTIONS CONDITIONNELLES ==="
echo

# Test 1: ${variable:-default}
echo "1. Test de \${variable:-default}"
echo "   → Retourne défaut si variable vide/non définie"
unset test_var
echo "   Variable non définie: '${test_var:-valeur_par_defaut}'"
test_var="ma_valeur"
echo "   Variable définie: '${test_var:-valeur_par_defaut}'"
echo

# Test 2: ${variable:=default}
echo "2. Test de \${variable:=default}"
echo "   → Assigne ET retourne défaut si variable vide/non définie"
unset test_var
echo "   Variable avant: '$test_var'"
resultat="${test_var:=valeur_assignee}"
echo "   Résultat substitution: '$resultat'"
echo "   Variable après: '$test_var'"
echo

# Test 3: ${variable:+alt}
echo "3. Test de \${variable:+alt}"
echo "   → Retourne alternative si variable définie et non vide"
unset test_var
echo "   Variable non définie: '${test_var:+alternative}'"
test_var="existe"
echo "   Variable définie: '${test_var:+alternative}'"
echo

# Test 4: ${variable:?message} - avec gestion
echo "4. Test de \${variable:?message}"
echo "   → Affiche message et quitte si variable vide/non définie"
test_var="definie"
echo "   Variable définie: '${test_var:?Erreur: variable manquante}'"

# Test du cas d'erreur en sous-shell pour éviter l'arrêt
echo "   Test variable non définie (en sous-shell):"

    unset test_var
bash -c 'echo "   Tentative accès: ${test_var:?ERREUR: Variable requise non définie}"'

echo
echo "=== TESTS TERMINÉS ==="

```



## Gestion des variables arithmétiques en Bash

Bash permet de réaliser des opérations arithmétiques de base directement dans le shell. Voici comment manipuler et calculer avec des variables arithmétiques :

* **Utilisation de l'opérateur `$((expression))`**:
  Cette syntaxe permet de réaliser des calculs arithmétiques. L'expression à l'intérieur des parenthèses doubles est évaluée comme une opération arithmétique.

* **Commande `let`**:
  `let` est une commande intégrée de Bash qui permet d'effectuer des calculs arithmétiques simples. Chaque argument de `let` est une opération arithmétique.

* **Commande `expr`**:
  `expr` est une commande externe qui permet d'évaluer des expressions, y compris arithmétiques. Elle est moins utilisée de nos jours car plus lente et moins pratique que `$(( ))`.

* **Commande `bc` (Calculator) pour des opérations complexes**:
  Pour des calculs plus avancés ou des opérations en virgule flottante, l'outil `bc` peut être utilisé. C'est un langage de calculateur arbitraire de précision qui peut gérer des mathématiques complexes et des nombres en virgule flottante.

### Exemples d'utilisation

* **Opérations de base avec `$((expression))`**:

  ```bash
  # Addition
  a=5
  b=3
  result=$((a + b))
  echo $result  # Affiche 8
  # ou directement
  echo $(( a * b ))

  # Multiplication
  result=$((a * b))
  echo $result  # Affiche 15

  # Soustraction
  result=$((a - b))
  echo $result  # Affiche 2

  # Division
  result=$((a / b))
  echo $result  # Affiche 1 (division entière)
  ```

* **Utilisation de `let`**:

  ```bash
  let result=a+b
  echo $result  # Affiche 8

  let result=a*b
  echo $result  # Affiche 15
  ```

* **Calculs avec `expr`**:

  ```bash
  result=$(expr $a + $b)
  echo $result  # Affiche 8

  result=$(expr $a \* $b)  # Notez le backslash avant le *, nécessaire car * est un caractère spécial.
  echo $result  # Affiche 15
  ```

* **Utilisation de `bc` pour des opérations en virgule flottante**:

  ```bash
  # Calcul avec des nombres en virgule flottante
  result=$(echo "scale=2; 5 / 3" | bc)
  echo $result  # Affiche 1.67
  ```

## Divisions et utilisation du modulo en Bash

En Bash, les opérations de division et de modulo sont assez simples à gérer grâce à l'arithmétique intégrée au shell. Voici comment vous pouvez effectuer ces opérations :

#### Division

* **Division entière**:
  En Bash, l'opérateur de division `/` réalise une division entière entre les opérandes. Si vous travaillez avec des entiers, le résultat sera également un entier.

  ```bash
  # Division entière
  a=10
  b=3
  result=$((a / b))
  echo $result  # Affiche 3
  ```

* **Division en virgule flottante**:
  Bash ne supporte pas directement la division en virgule flottante dans son arithmétique intégrée. Pour réaliser des divisions qui incluent des résultats en virgule flottante, il est nécessaire d'utiliser un outil externe comme `bc`.

  ```bash
  # Division avec virgule flottante
  result=$(echo "scale=2; $a / $b" | bc)
  echo $result  # Affiche 3.33
  ```

#### Modulo

* **Opérateur modulo**:
  L'opérateur modulo `%` est utilisé pour obtenir le reste d'une division entière entre deux nombres.

  ```bash
  # Modulo
  result=$((a % b))
  echo $result  # Affiche 1
  ```

#### Exemples complémentaires

Voici des exemples qui illustrent à la fois la division et l'utilisation du modulo dans divers contextes.

* **Division et modulo avec des nombres négatifs**:

  Bash gère les opérations avec des nombres négatifs conformément aux règles arithmétiques standards.

  ```bash
  # Exemple avec nombres négatifs
  c=-10
  d=3
  div_result=$((c / d))
  mod_result=$((c % d))

  echo "Division: $div_result"  # Affiche -4
  echo "Modulo: $mod_result"    # Affiche -1
  ```

* **Utilisation de `let` pour la division et le modulo**:

  ```bash
  # Utilisation avec let
  let "div_result = a / b"
  let "mod_result = a % b"

  echo "Division: $div_result"  # Affiche 3
  echo "Modulo: $mod_result"    # Affiche 1
  ```


### Utilisation de la commande `bc` pour les opérations en virgule flottante

La commande `bc` (Basic Calculator) est un langage de calculatrice arbitraire de précision qui est notamment utile pour gérer les calculs en virgule flottante dans les scripts Bash, où la capacité de manipulation de nombres flottants est limitée. Voici comment vous pouvez utiliser `bc` pour effectuer des calculs en virgule flottante :

#### Configuration de base

Pour utiliser `bc` dans des opérations en virgule flottante, il est souvent nécessaire de définir l'échelle (`scale`) de la précision des nombres décimaux. L'échelle détermine le nombre de chiffres après la virgule.

* **Exécution de `bc`**:
  `bc` peut être invoqué directement depuis la ligne de commande ou utilisé dans un script en redirigeant ou en pipant une expression à calculer.

#### Exemples d'utilisation

* **Division en virgule flottante**:

  ```bash
  # Division simple avec virgule flottante
  result=$(echo "scale=2; 10 / 3" | bc)
  echo $result  # Affiche 3.33
  ```

* **Calculs complexes**:

  ```bash
  # Calcul plus complexe
  result=$(echo "scale=4; (20.5 + 5.5) / (2.5 * 3.1)" | bc)
  echo $result  # Affiche 2.8226
  ```

### Test avec `bc`

```bash
verifier_espace() {
   espace_dispo=$(df -h / | awk 'NR==2 {print $4}' | sed 's/G//')
   if [ $(echo "$espace_dispo < 1" | bc) -eq 1 ]; then
       echo "Attention : Moins de 1Go d'espace disponible !"
       read -p "Voulez-vous continuer ? (o/n) " reponse
       if [ "$reponse" != "o" ]; then
           exit 1
       fi
   fi
}
```

### Opérations mathématiques avancées : charger le module mathématique dans `bc`

Pour utiliser les fonctions mathématiques avancées dans `bc` comme les fonctions trigonométriques, exponentielles, et logarithmiques, il est nécessaire de charger le module mathématique. Ce module est généralement fourni avec `bc` et est accessible via l'option `-l` (lowercase 'L'), qui charge la bibliothèque mathématique standard.

#### Utilisation de l'option `-l`

* **Commande avec `-l`**:
  Lancer `bc` avec l'option `-l` permet de charger le module mathématique par défaut, ce qui rend immédiatement disponibles les fonctions mathématiques.

  ```bash
  # Exemple d'utilisation de l'option -l
  result=$(echo "scale=4; s(3.14159 / 2)" | bc -l)
  echo $result  # Affiche 1.0000 (sin(pi/2))
  result=$(echo "scale=4; l(2)" | bc -l)
  echo $result  # Affiche le logarithme naturel de 2
  ```

#### Fonctions disponibles avec le module mathématique

Voici quelques-unes des fonctions disponibles une fois que le module mathématique est chargé :

* **Fonctions trigonométriques**: `s(x)` pour le sinus, `c(x)` pour le cosinus, et `a(x)` pour l'arc tangente.
* **Exponentielle et logarithmes**: `e(x)` pour l'exponentielle, et `l(x)` pour le logarithme naturel.
* **Puissance**: `x^y` ou `e(l(x) * y)` pour \(x\) élevé à la puissance \(y\).

#### Exemples détaillés

Voici des exemples montrant comment utiliser ces fonctions dans des calculs :

* **Calcul trigonométrique**:

  ```bash
  # Calcul du sinus de Pi/2
  pi=$(echo "scale=10; 4*a(1)" | bc -l)  # Calcul de Pi
  sin_half_pi=$(echo "scale=4; s($pi/2)" | bc -l)
  echo $sin_half_pi  # Affiche 1.0000
  ```

* **Calcul de l'exponentielle**:

  ```bash
  # Calcul de e^3
  exp_three=$(echo "scale=4; e(3)" | bc -l)
  echo $exp_three  # Affiche environ 20.0855
  ```

#### Bonnes pratiques

* **Définir `scale`**:
  Il est important de définir `scale` dans chaque script ou session `bc` pour contrôler la précision des nombres décimaux. Sans cela, les résultats pourraient ne pas être aussi précis que souhaité.
  
* **Vérification de la version de `bc`**:
  Assurez-vous que la version de `bc` utilisée supporte ces fonctionnalités. Cela peut être vérifié via la documentation du système ou des manuels en ligne.

* **Usage dans les scripts Bash**:
  Intégrer `bc` avec des heredocs ou des chaînes échappées pour des calculs complexes rendra les scripts plus lisibles et maintenables.

En utilisant l'option `-l` lors du démarrage de `bc`, vous assurez l'accès à un ensemble de fonctions mathématiques utiles pour des calculs précis et avancés en bash.

#### Conseils d'utilisation

* **Persistant la précision**: Pour maintenir une précision constante dans un script, définir `scale` au début de chaque calcul peut être répétitif. Il est possible de configurer `scale` au début d'une session `bc` et de continuer à utiliser cette échelle pour tous les calculs suivants.
* **Scripting avec `bc`**: Pour des scripts complexes, des expressions plus longues peuvent être passées à `bc` via un fichier ou des heredocs pour une meilleure lisibilité.

#### Exemple de script

Voici un exemple simple d'un script Bash utilisant `bc` avec un heredoc pour un calcul :

```bash
#!/bin/bash

# Calcul en utilisant heredoc
result=$(bc -l << EOF
scale=3
a = (4.5 * 3.2) + 5
b = 2.5 ^ 2
a / b
EOF
)

echo $result
```


-----------------------------------------------------------------------

# 5. Gestion des arguments d'un script

Les arguments sont également paramètres positionnels. Ce sont des valeurs passées sur la ligne de commande

* `./arg.sh arg1 arg2 arg3 arg4 arg5 arg6 arg7 arg8 arg9 arg10`
* Les arguments positionnels (`$1`, `$2`, `$3`...) sont **automatiquement définis** lors de l'appel du script :
```bash
#!/bin/bash
# la commande est : ./arg.sh arg1 arg2 arg3 arg4 arg5 arg6 arg7 arg8 arg9 arg10

echo "$# argument(s) reçu(s) par le script ${0##*/}"

echo "Argument 1: ${1}"
echo "Argument 2: ${2}"
echo "Argument 3: ${3}"
echo "Argument 4: ${4}"
echo "Argument 5: ${5}"
echo "Argument 6: ${6}"
echo "Argument 7: ${7}"
echo "Argument 8: ${8}"
echo "Argument 9: ${9}"
echo "Argument 10: ${10}"
```

NB : c'est mieux de mettre tout le temps les {}

### Avec la commande set, on vient changer la valeur de nos variables : 

Modification des arguments d'un script
* si on tente une redéfinition:  `1=truc`
    + La commande se termine en erreur

La solution est `set`
cmd | arg1 |  arg2  | arg3
:--:|:----:|:------:|:---:
set | truc | bidule | plouf
 0  |   1  |    2   |   3
    
```bash
#!/bin/bash
# Commande salut.sh bonjour toi
# Prend en argument 2 entrées choisi par l'utilisateur :
echo "Argument1" $1
echo "Argument2" $2
echo "Argument3" $3
echo "Nombre d’arguments: $#"
echo "$1 $2 $3"

set aurevoir vous autres

echo "Argument1" $1
echo "Argument2" $2
echo "Argument3" $3
echo "Nombre d’arguments: $#"
echo "$1 $2 $3"
```
#### <span style=color:red>Risque sans `set --`</span>

```bash
arg1="-debug"
arg2="--verbose"
set $arg1
# Erreur: set interprète "-debug" et "--verbose" comme des options et non des aguments
set -- $arg1 $arg2
echo $1 $2
```

La commande `set` a ses propres options (`-e`, `-x`, `-u`, etc.). Sans `--`, elle essaie d'interpréter tout ce qui commence par `-` comme une option :

| Commande | Interprétation par `set` | Résultat |
|----------|-------------------------|----------|
| `set -e fichier` | Active `errexit`, `fichier` → `$1` | Options activées |
| `set -debug fichier` | Option `-d` invalide | **ERREUR** |
| `set -- -e fichier` | `-e` → `$1`, `fichier` → `$2` | **Arguments purs** |
| `set -- -debug fichier` | `-debug` → `$1`, `fichier` → `$2` | **Arguments purs** |



### Tableau des arguments spéciaux des scripts Bash

Voici un tableau des arguments spéciaux utilisés dans les scripts Bash, incluant ceux que vous avez déjà listés :

| Argument | Description |
|----------|-------------|
| `$#`     | Nombre de paramètres passés au script |
| `$?`     | Statut de sortie de la dernière commande exécutée |
| `$*`     | Tous les paramètres passés au script, vus comme un seul argument |
| `$@`     | Tous les paramètres passés au script, chaque paramètre étant un argument distinct ($@ n’est pas un vrai tableau, passer par d’expension indirecte)|
| `$0`     | Nom du script ou de la commande exécutée |
| `$$`     | PID du shell exécutant le script |
| `$!`     | PID du dernier processus exécuté en arrière-plan |
| `$1, $2, $3, ...` | Paramètres positionnels, `$1` est le premier paramètre, `$2` le deuxième, etc. |
| `$_`     | Dernier argument de la dernière commande exécutée |
| `$-`     | Options courantes du shell actif |
| `$?`     | Code de retour de la dernière commande exécutée |
| `$IFS`   | Séparateur de champs interne, utilisé pour déterminer comment Bash reconnaît les champs, ou 'mots', pour la séparation. `IFS` détermine comment bash divise une ligne en mots. Par défaut, `IFS `contient espace, tabulation et retour à la ligne. |


Ces variables spéciales sont utilisées pour gérer divers aspects du comportement des scripts et des fonctions, y compris la gestion des paramètres et la surveillance de l'état d'exécution des processus.

### Variables @ et *
Ces deux variables représentent la liste des arguments mais avec une petite subtilité lorsqu'elles sont entre guillemets
* `"$@"` : liste des valeurs individuelles
* `"$*"` : une seule chaîne contenant l'ensemble des valeurs



<div style="border:2px solid black; padding:10px; background-color:lightgreen;border-radius: 15px;">
 <span style=color:blue>

## Mémo - Variables $@ et $* en Bash


### Nature et comportement
* **`$@`** et **`$*`** = variables spéciales représentant les arguments positionnels
* **Contexte** : Valeurs uniquement dans un script ou une fonction
* **Vide en session interactive** : Normal, aucun argument passé au shell


| Variable | Comportement sans guillemets | Comportement avec guillemets |
|----------|------------------------------|------------------------------|
| `$@` | Identique à `$*` | `"$1" "$2" "$3"` (éléments séparés) |
| `$*` | Identique à `$@` | `"$1 $2 $3"` (une seule chaîne) |

* `$@` (At sign)
    + La variable `$@` représente tous les paramètres positionnels passés à un script ou une fonction, comme une liste séparée d'éléments. Chaque paramètre est traité comme une chaîne de caractères distincte et entre guillemets lors de l'expansion.
    +  Utiliser `$@` est particulièrement utile dans les scripts où il est nécessaire de préserver les arguments tels qu'ils ont été passés, y compris le maintien de l'intégrité des espaces dans les arguments.
* `$*` (Asterisk)
    + La variable `$*` représente également tous les paramètres positionnels, mais les combine en une seule chaîne où chaque paramètre est séparé par le premier caractère de la variable `IFS` (Internal Field Separator), qui est par défaut un espace. (`IFS ` détermine comment bash divise une ligne en mots. Par défaut, IFS contient espace, tabulation et retour à la ligne.)
    +`$*` est utile quand on souhaite traiter les arguments comme une seule chaîne consolidée.


### Exemple pratique

```bash
#!/bin/bash
# Script appelé avec: ./script.sh "premier arg" "deuxième arg"

# Avec guillemets - différence visible
for arg in "$@"; do
    echo "[$arg]"  # → [premier arg], [deuxième arg]
done

for arg in "$*"; do
    echo "[$arg]"  # → [premier arg deuxième arg]
done
```

## Énumération des arguments

### ❌ Erreur courante
```bash
# INCORRECT - n'utilise pas l'index
for ((i=0; i<$#; i++)); do
    echo "[$@]"  # Affiche toujours TOUS les arguments
done
```

### ✅ Solutions correctes

#### 1. Expansion indirecte (accès par index)
```bash
for ((i=1; i<=$#; i++)); do
    echo "[${!i}]"  # ${!i} = accès à $1, $2, $3...
done
```

#### 2. Conversion en vrai tableau (recommandé)
```bash
arguments=("$@")
for ((i=0; i<${#arguments[@]}; i++)); do
    echo "[${arguments[i]}]"
done
```

#### 3. Boucle directe (plus simple)
```bash
compteur=1
for argument in "$@"; do
    echo "Argument $compteur: [$argument]"
    ((compteur++))
done
```

## Nature de $@ vs tableaux

### `$@` n'est PAS un vrai tableau
* **Impossible** : `${@[0]}` (génère une erreur)
* **Représentation** : Variables positionnelles `$1`, `$2`, `$3`...
* **Accès** : `${!i}` (expansion indirecte) ou conversion en tableau

### Conversion nécessaire pour accès direct
```bash
# Conversion
mes_args=("$@")

# Maintenant accès direct possible
echo "${mes_args[0]}"  # Premier argument
echo "${mes_args[1]}"  # Deuxième argument
```

## Variables associées

| Variable | Description | Exemple |
|----------|-------------|---------|
| `$#` | Nombre d'arguments | `3` |
| `$0` | Nom du script | `./mon_script.sh` |
| `$1, $2...` | Arguments individuels | `premier`, `deuxième` |

## Recommandations

### Utiliser `"$@"` (avec guillemets) pour :
* Préserver les espaces dans les arguments
* Passer tous les arguments à une autre commande
* Boucles simples sans besoin d'indices

### Convertir en tableau pour :
* Accès direct par index spécifique
* Modifications des arguments
* Algorithmes complexes

### À retenir
* **`echo "$@"`** en session interactive = vide (normal)
* **`"$@"`** recommandé sur `"$*"` dans la plupart des cas
* **Conversion en tableau** pour un contrôle total des indices

</span>
</div>

### Commande `shift`

`shift` supprime le premier argument (`$1`) et décale tous les autres arguments d'une position vers la gauche.

* `$2` devient `$1`  
* `$3` devient `$2`
* `$4` devient `$3`
* etc.
* `$#` diminue de 1

#### Syntaxe
```bash
shift          # Décalage d'une position (par défaut)
shift n        # Décalage de n positions
```

### Exemple `shift`

```bash
#!/bin/bash
# Script appelé avec : ./traiter_fichiers.sh rapport.txt config.conf données.csv

echo "=== AVANT SHIFT ==="
echo "Nombre d'arguments : $#"
echo "Premier fichier à traiter : $1"
echo "Fichiers restants : $2 $3"

echo ""
echo "Traitement de $1 en cours..."
# [traitement du fichier $1]

shift

echo ""
echo "=== APRÈS SHIFT ==="  
echo "Nombre d'arguments : $#"
echo "Premier fichier à traiter : $1"
echo "Fichiers restants : $2"
```

### Résultat avec `./traiter_fichiers.sh rapport.txt config.conf données.csv`

```
=== AVANT SHIFT ===
Nombre d'arguments : 3
Premier fichier à traiter : rapport.txt
Fichiers restants : config.conf données.csv

Traitement de rapport.txt en cours...

=== APRÈS SHIFT ===
Nombre d'arguments : 2
Premier fichier à traiter : config.conf
Fichiers restants : données.csv
```
#### Utilisation typique dans une boucle

```bash
#!/bin/bash
while [ $# -gt 0 ]; do
    echo "Traitement de : $1"
    shift
done
```

## Micro TP - Carte de visite en arguments

### Consigne
Créer un script `carte_visite.sh` qui reçoit un prénom, un nom et un poste en arguments, affiche une carte de visite formatée, utilise `shift` pour décaler les paramètres positionnels, puis `set` pour les redéfinir complètement.

### Instructions
* Le script attend exactement 3 arguments : prénom, nom, poste
* Afficher une carte de visite avec les paramètres positionnels `$1`, `$2`, `$3`
* Afficher la valeur de `$#` avant et après un `shift`
* Utiliser `set` pour remplacer les positionnels par de nouvelles valeurs et constater le résultat

#### Test du TP avec
```bash
chmod +x carte_visite.sh
./carte_visite.sh Marie Dupont "Administratrice système"
```

Résultat attendu :
```
=== CARTE DE VISITE ===
Prénom  : Marie
Nom     : Dupont
Poste   : Administratrice système
Nombre d'arguments : 3

--- Après shift ---
Nombre d'arguments : 2
$1 est maintenant : Dupont
$2 est maintenant : Administratrice système

--- Après set ---
Nombre d'arguments : 3
$1 est maintenant : Jean
$2 est maintenant : Martin
$3 est maintenant : Ingénieur réseau
```

#### Pseudo-code
```c
ALGORITHME carte_visite

DEBUT
    // Affichage de la carte avec les paramètres positionnels
    AFFICHER "=== CARTE DE VISITE ==="
    AFFICHER "Prénom  : " + argument_1
    AFFICHER "Nom     : " + argument_2
    AFFICHER "Poste   : " + argument_3
    AFFICHER "Nombre d'arguments : " + nombre_arguments

    // Décalage d'une position
    SHIFT

    // Affichage de l'état après shift
    AFFICHER "--- Après shift ---"
    AFFICHER "Nombre d'arguments : " + nombre_arguments
    AFFICHER "$1 est maintenant : " + argument_1
    AFFICHER "$2 est maintenant : " + argument_2

    // Redéfinition complète des positionnels
    SET "Jean" "Martin" "Ingénieur réseau"

    // Affichage de l'état après set
    AFFICHER "--- Après set ---"
    AFFICHER "Nombre d'arguments : " + nombre_arguments
    AFFICHER "$1 est maintenant : " + argument_1
    AFFICHER "$2 est maintenant : " + argument_2
    AFFICHER "$3 est maintenant : " + argument_3
FIN
```

***Solution***
<!--
```bash
#!/bin/bash
# carte_visite.sh - Démo des paramètres positionnels, shift et set

echo "=== CARTE DE VISITE ==="
echo "Prénom  : $1"
echo "Nom     : $2"
echo "Poste   : $3"
echo "Nombre d'arguments : $#"

shift

echo ""
echo "--- Après shift ---"
echo "Nombre d'arguments : $#"
echo "\$1 est maintenant : $1"
echo "\$2 est maintenant : $2"

set Jean Martin "Ingénieur réseau"

echo ""
echo "--- Après set ---"
echo "Nombre d'arguments : $#"
echo "\$1 est maintenant : $1"
echo "\$2 est maintenant : $2"
echo "\$3 est maintenant : $3"
```
-->

# Commandes internes/externes
* Commande externe : s'exécute au sein d'un processus dédié (ex. commande basename...)
* Commande interne : s'exécute au sein du processus shell. ex. `cd` `echo` `history` `export` `pwd` `set` `alias` etc.

* `type test`  test est une primitive du shell
* `which test`   retour */usr/bin/test*

Par défaut, les commandes internes sont prioritaires sur les commandes externes.
* Pour forcer l'appel à une commande externe, en court-circuitant une éventuelle commande interne :
    * `command nom ...`
### exemples de commandes internes
```bash
# Navigation et fichiers
cd /home/utilisateur          # Changer de répertoire
pwd                          # Afficher le répertoire courant

# Variables et environnement  
export VARIABLE=valeur       # Définir une variable d'environnement
set -x                       # Activer le mode debug
declare -i nombre=42         # Déclarer une variable typée

# Historique et sessions
history                      # Afficher l'historique des commandes
logout                       # Terminer la session
exit 0                       # Quitter le shell

# Contrôle des tâches
jobs                         # Lister les tâches en arrière-plan
bg %1                        # Reprendre une tâche en arrière-plan
fg %1                        # Ramener une tâche au premier plan

# Alias et fonctions
alias ll='ls -la'            # Créer un alias
unalias ll                   # Supprimer un alias
```

# 6. Utiliser l'instruction test

## Commande `test`
Permet d'effectuer tout un ensemble de tests, pouvant être utiliser dans une structure if.
Tests possibles :

* tests sur des entiers
* tests sur les chaînes de caractères
* tests sur les fichiers

<span style=color:rgb(0,150,0)>Si le test réussi, le code retour sera **0**</span>

Tests sur les entiers -> opérateurs numériques
* syntaxe :  `test nb1 opérateur nb2`

### Opérateurs sur les entiers
op   | signification
:---:|:-----------
-eq  | equal
-ne  | not equal
-lt  | less than
-le  | less or equal
-gt  | greater than
-ge  | greater or equal

### Opérateurs sur les chaînes
**Opérateurs unaires** : attendent une seule opérande (vs binaires = 2 opérandes)

op   | signification
:---:|:-----------
test -z chaîne  | Teste si la chaîne est vide
test -n chaîne  | Teste si la chaîne est non vide
test -f fichier | test sur existance est aussi unaire

Opérateurs binaires : comparent deux opérandes (tests lexicographiques)
### Explication des commandes Bash pour la comparaison de chaînes

Les commandes que vous avez listées sont des exemples de comparaisons de chaînes dans le scripting Bash, en utilisant la commande `test`. Voici les détails de chaque commande:

Commande              | Description                             
-----------------------|-----------------------------------------
`[ str1 = str2 ]`    |  les chaînes `str1` et `str2` sont identiques
`[ str1 == str2 ]`   |  comme `=` mais plus courant en Bash moderne
`[ str1 != str2 ]`   |  les chaînes `str1` et `str2` ne sont pas identiques
`[ str1 \< str2 ]`    |  la chaîne `str1` est lexicographiquement inférieure à `str2`
`[ str1 \> str2 ]`    |  la chaîne `str1` est lexicographiquement supérieure à `str2`

#### Points à noter :

* Les opérateurs `<` et `>` doivent souvent être échappés avec un backslash (`\`) pour éviter une interprétation erronée par le shell comme une redirection d'entrée ou de sortie.
* `test` est une commande intégrée dans la plupart des shells Unix et Linux, qui évalue des conditions. Elle peut être utilisée directement ou avec les crochets `[ ]`, qui sont syntaxiquement équivalents à `test`.
* Il est important de toujours mettre les variables entre guillemets pour éviter des erreurs en cas de chaînes vides ou contenant des espaces. 

<div style="border:2px solid black; padding:10px; background-color:lightgreen;border-radius: 15px;">
 <span style=color:blue>

###  <span style=color:red>Note 1</span> : Signification de "lexicographiquement supérieure"

L'expression "lexicographiquement supérieure" fait référence à l'ordre de tri basé sur le dictionnaire utilisé dans les comparaisons de chaînes de caractères. Quand on compare deux chaînes `str1` et `str2` lexicographiquement, on les examine caractère par caractère selon l'ordre des caractères défini par le tableau de caractères ASCII ou Unicode.

#### Détails de la comparaison lexicographique :

* **Ordre des caractères** : Les caractères sont ordonnés selon leur valeur numérique dans la table ASCII ou Unicode. Par exemple, dans ASCII, le caractère 'A' (65) vient avant 'B' (66), et 'a' (97) vient après 'Z' (90) mais avant 'b' (98).
* **Comparaison caractère par caractère** : La comparaison commence avec le premier caractère de chaque chaîne. Si ces caractères sont identiques, on passe au caractère suivant, et ainsi de suite, jusqu'à ce qu'un caractère différent soit trouvé.
* **Résultat de la comparaison** : Si le caractère de `str1` a une valeur ASCII ou Unicode supérieure à celle du caractère correspondant de `str2`, alors `str1` est considérée comme lexicographiquement supérieure à `str2`. Si tous les caractères sont identiques mais que les chaînes sont de longueurs différentes, la chaîne la plus courte est considérée comme inférieure.

#### Exemple :

Considérons les chaînes `apple` et `banana` :
* Comparaison des premiers caractères : 'a' de `apple` et 'b' de `banana`.
* 'a' a une valeur ASCII inférieure à 'b', donc `apple` est lexicographiquement inférieure à `banana`.

Dans le cas d'une comparaison où `str1` serait "banana" et `str2` "apple", `banana` serait lexicographiquement supérieure à `apple` car 'b' vient après 'a' dans l'ordre ASCII.

### <span style=color:red>Note 2</span> : Pas de `>=` et `<=`
* Pas pour les strings mais il y en a pour les nombres

#### Simuler `>=` et `<=` pour les chaînes

```bash
if "$str1" > "$str2" || "$str1" == "$str2"; then
    echo "$str1 est supérieur ou égal à $str2"
fi
```

```bash
if "$str1" < "$str2" || "$str1" == "$str2"; then
    echo "$str1 est inférieur ou égal à $str2"
fi
```

Ces commandes utilisent le double crochet `[[]]` pour la comparaison, ce qui est recommandé pour les tests impliquant des chaînes dans Bash, car il gère mieux les chaînes vides et les chaînes avec des espaces que le simple crochet `[ ]`.


</span>
</div>

# Micro TP #3 - Instructions conditionnelles

## Consigne
Écrire un script attendant exactement un argument et vérifiant qu'il en a bien reçu un. Afficher un message d'erreur dans le cas contraire et sortir en affachiant "OK" ou "KO" selon.

## Instructions
* Utiliser la variable `$#` pour compter le nombre d'arguments reçus
* Employer l'opérateur `-eq` pour tester l'égalité numérique
* Appliquer la syntaxe condensée `test condition && action_vrai || action_faux`
* Tester également la syntaxe alternative avec les crochets `[ ]`

### Test du TP avec
```bash
chmod +x conditions.sh

# Cas de succès - 1 argument
./conditions.sh argument1
# → Affiche : le nombre d'argument : 1
# → Affiche : OK

# Cas d'échec - aucun argument  
./conditions.sh
# → Affiche : le nombre d'argument : 0
# → Affiche : KO

# Cas d'échec - plusieurs arguments
./conditions.sh arg1 arg2
# → Affiche : le nombre d'argument : 2  
# → Affiche : KO
```

### Pseudo-code
```c
ALGORITHME validation_argument_simple

DEBUT DU SCRIPT
    // Affichage du nombre d'arguments reçus
    AFFICHER "Le nombre d'arguments : " + nombre_arguments
    
    // Test conditionnel avec syntaxe condensée
        // Test conditionnel avec syntaxe condensée
    TESTER condition ET AFFICHE "OK" OU AFFICHE "KO"
FIN DU SCRIPT
```

***Solutions***
_(à décommenter)_

<!--
### Version avec la commande `test`
```bash
#!/bin/bash
# Script : conditions.sh

echo "le nombre d'argument : $#"
test $# -eq 1 && echo OK || echo KO
```

### Version avec la syntaxe alternative `[ ]`
```bash
#!/bin/bash
# Script : conditions.sh

echo "le nombre d'argument : $#"
[ $# -eq 1 ] && echo OK || echo KO
```

#### Extension possible

```bash
#!/bin/bash
if [ $# -eq 1 ]
then
    echo "OK - Un argument reçu"
else
    echo "KO - Nombre d'arguments incorrect : $#"
    echo "Usage : $0 <argument>"
    exit 1
fi
```
-->


