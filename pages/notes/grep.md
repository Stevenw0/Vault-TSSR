# 🔍 La commande `grep`  
  
## 📌 Qu’est-ce que `grep` ?  
  
La commande **`grep`** permet de **rechercher une chaîne de caractères** ou un **motif (expression régulière)** dans un ou plusieurs fichiers.  
  
`grep` signifie *Global Regular Expression Print*.  
  
---  
  
## ⚙️ Format de la commande  
  
```bash  
grep texteAchercher fichierAchercher  
```  
  
### 📄 Exemple simple  
  
```bash  
grep alias .bashrc  
```  
  
➡️ Recherche le mot `alias` dans le fichier `.bashrc`.  
  
---  
  
## 🧰 Options principales de `grep`  
  
| Option | Effet |  
|------|------|  
| `-V` | Affiche la version |  
| `-v` | Affiche les lignes **ne contenant pas** la chaîne |  
| `-c` | Compte le nombre de lignes contenant la chaîne |  
| `-n` | Numérote les lignes correspondantes |  
| `-x` | Ligne correspondant **exactement** à la chaîne |  
| `-l` | Affiche les **noms des fichiers** contenant la chaîne |  
| `-i` | Ignore la casse (majuscule/minuscule) |  
| `-E` | Active les **expressions régulières étendues** |  
| `egrep` | Équivalent à `grep -E` |  
| `-r` / `rgrep` | Recherche récursive dans un dossier |  
  
---  
  
## 🧠 Expressions régulières avec `grep`  
  
### 📌 Symboles courants  
  
| Expression | Signification |  
|-----------|--------------|  
| `.` | N’importe quel caractère |  
| `^` | Début de ligne |  
| `$` | Fin de ligne |  
| `[]` | Un caractère parmi ceux listés |  
| `?` | 0 ou 1 occurrence |  
| `*` | 0, 1 ou plusieurs occurrences |  
| `+` | 1 ou plusieurs occurrences |  
| `|` | OU logique |  
| `()` | Groupe d’expressions |  
  
Les regex avancées nécessitent souvent l’option `-E`.  
  
---  
  
## 🧪 Démonstration complète de `grep`  
  
### 📁 Création de l’environnement de test  
  
```bash  
mkdir grepTest && cd grepTest  
```  
  
### 📄 Création du premier fichier  
  
```bash  
cat > fic_1  
Un site qui affiche Zéro  
Un chien qui fume  
3 canaris bleu  
Aucun autre fumeur  
Le chien d'aucun autre  
Le site des 3 canaris qui fument bleu  
```  
  
### 📄 Duplication et modification  
  
```bash  
cp fic_1 fic_2  
```  
  
Modification avec Neovim :  
  
```bash  
nvim fic_2  
```  
  
Commande utilisée dans Neovim :  
  
```vim  
:%s/Zéro/zéro/g  
```  
  
Contenu final :  
  
```bash  
cat fic_2  
```  
  
Résultat :  
  
```  
Un site qui affiche zéro  
Un chien qui fume  
4 ours bleu  
Aucun autre fumeur  
Le chien d'aucun autre  
Le site des 4 ours qui fument bleu  
```  
  
---  
  
## 🔎 Tests et compréhension des commandes `grep`  
  
### 🔹 Recherche exacte  
  
```bash  
grep "chien qui fume" fic*  
```  
  
---  
  
### 🔹 Ignorer la casse  
  
```bash  
grep -i "zéro" fic*  
```  
  
---  
  
### 🔹 Exclure un mot  
  
```bash  
grep -v "qui" fic*  
```  
  
---  
  
### 🔹 Exclusion multiple avec regex  
  
```bash  
grep -E -v "qui|fumeur" fic*  
```  
  
---  
  
### 🔹 Compter les occurrences  
  
```bash  
grep -c "qui" fic*  
```  
  
---  
  
### 🔹 Recherche récursive  
  
```bash  
grep -r -i "zéro" ../grepTest/  
```  
  
---  
  
### 🔹 Lignes commençant par un mot  
  
```bash  
grep -E ^Le fic*  
```  
  
---  
  
### 🔹 Lignes commençant par un chiffre  
  
```bash  
grep -E ^[0-9] fic*  
```  
  
---  
  
### 🔹 Afficher les lignes après une correspondance  
  
```bash  
grep -A 2 affiche fic*  
```  
  
- `-A` → lignes après (*After*)  
- `-B` → lignes avant (*Before*)  
- `-C` → contexte (avant + après)  
  
---  

### 🔎 Options avancées de `grep` : `egrep`, `-E`, `-A`, `-B`

`egrep` est une variante de `grep` qui active par défaut les **expressions régulières étendues**.  
Aujourd’hui, son usage est équivalent à utiliser l’option `-E` avec `grep`.

```bash
egrep "mot1|mot2" fichier
grep -E "mot1|mot2" fichier
```

Les options suivantes permettent d’afficher du **contexte autour des correspondances** :

- `-A` (*After*) : affiche les lignes **après** la correspondance  
- `-B` (*Before*) : affiche les lignes **avant** la correspondance  
- `-C` (*Context*) : affiche les lignes avant **et** après  

Exemple :

```bash
grep -A 2 erreur fichier.log
grep -B 3 erreur fichier.log
grep -C 1 erreur fichier.log
```

Ces options sont très utilisées pour l’analyse de **logs**, le **debug** et le **support système**.


## 🧠 À retenir  
  
- `grep` est un outil fondamental sous Linux  
- Il permet de filtrer du texte efficacement  
- Les expressions régulières le rendent très puissant  
- Indispensable pour les logs et les scripts  
- Très utilisé avec les **pipes**