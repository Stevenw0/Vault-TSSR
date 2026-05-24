# 🏷️ Les étiquettes en Bash (Here Document / Heredoc)  
  
## 📌 Qu’est-ce qu’une étiquette en Bash ?  
  
Une **étiquette** en Bash est utilisée avec un **Here Document (heredoc)**.  
Elle permet de **rediriger un bloc de texte multi-lignes** vers une commande ou un fichier.  
  
Le texte est lu **jusqu’au mot-clé de fin**, appelé *étiquette* (par exemple `EOF`, `FIN`, etc.).  
  
---  
  
## 🧠 À quoi servent les étiquettes ?  
  
Les étiquettes permettent notamment :  
  
- d’écrire des **arguments sur plusieurs lignes**  
- de créer ou remplir des fichiers depuis un script  
- d’envoyer du texte à une commande  
- d’améliorer la lisibilité des scripts  
  
Elles évitent d’écrire de longues lignes ou de multiplier les `echo`.  
  
---  
  
## ✉️ Exemple simple : envoi d’un email  
  
```bash  
mail mon@adresse <<FIN  
ceci  
est  
un  
test  
FIN  
```  
  
### 🔍 Explication  
  
- `<<FIN` indique le début du heredoc  
- tout le texte est envoyé à la commande `mail`  
- `FIN` marque la fin du bloc  
  
> [!note]  
> Le mot `FIN` est arbitraire : on pourrait utiliser `EOF`, `END`, `STOP`, etc.  
  
---  
  
## 🧪 Exercice : créer un fichier avec un script Bash  
  
### 📄 Script de création de fichier personnalisé  
  
```bash  
#!/bin/bash  
  
n=1  
touch fichier-$n.txt  
  
cat << EOF > fichier-$n.txt  
Ceci est le fichier n°$n  
Ligne 2  
Ligne 3  
Ligne 4  
EOF  
  
echo "fichier-$n créé"  
```  
  
### 🔍 Explication du script  
  
- `n=1` : variable utilisée dans le script  
- `cat << EOF` : début du heredoc  
- `> fichier-$n.txt` : redirection vers un fichier  
- les variables (`$n`) sont **interprétées**  
- `EOF` : fin du heredoc  
  
---  
  
## 🔁 Utilisation avec un pipe  
  
```bash  
cat << FIN | grep 1  
fichier éti  
ligne 1  
ligne 2  
FIN  
```  
  
### 🔍 Fonctionnement  
  
- `cat` reçoit le texte du heredoc  
- le pipe (`|`) envoie la sortie vers `grep`  
- `grep 1` affiche uniquement les lignes contenant `1`  
  
Résultat attendu :  
  
```  
ligne 1  
```  
  
---  
  
## ⚠️ Règles importantes à respecter  
  
- L’étiquette de fin doit être **seule sur sa ligne**  
- Aucun espace avant ou après le mot-clé  
- Elle doit correspondre exactement au mot utilisé après `<<`  
  
---  
  
## 🔐 Heredoc avec ou sans interprétation  
  
### Avec interprétation (par défaut)  
  
```bash  
cat << EOF  
Bonjour $USER  
EOF  
```  
  
### Sans interprétation (protection)  
  
```bash  
cat << 'EOF'  
Bonjour $USER  
EOF  
```  
  
Les quotes empêchent l’expansion des variables.  
  
---  
  
## 🧠 Cas d’usage fréquents  
  
- Création de fichiers de configuration  
- Scripts d’installation  
- Envoi d’emails automatisés  
- Tests de commandes  
- Génération de contenu dynamique  
  
---  
  
## 🧠 À retenir  
  
- Les étiquettes utilisent `<<`  
- Elles redirigent du texte multi-lignes  
- Le mot-clé est libre mais strict  
- Les variables sont interprétées sauf protection  
- Indispensable pour écrire des scripts Bash propres