# 🐧 Commandes Linux essentielles

Cette page regroupe les **commandes Linux les plus courantes**, utiles pour la navigation, l’administration système, le réseau et les entretiens techniques.

---

## 📁 Navigation & chemins

### Se déplacer dans l’arborescence

```bash
cd <chemin>
```

Se déplacer vers un dossier précis.

```bash
cd
```

Retourne directement dans le **répertoire personnel (home)**.

```bash
cd ..
```

Revenir au dossier parent.

```bash
pwd
```

Affiche le **chemin absolu** du dossier courant.

---

### 📍 Chemin absolu

Un chemin absolu commence toujours par `/` et indique l’emplacement exact d’un fichier.

Exemple :

```bash
/etc/os-release
```

Ce fichier permet d’identifier la **distribution Linux**.

---

## 📂 Affichage du contenu

```bash
ls
```

Affiche le contenu d’un dossier.

```bash
ls -l
```

Affiche le contenu sous forme de **liste détaillée**  
(droits, propriétaire, taille, date).

---

## 📝 Fichiers & édition

```bash
cat fichier
```

Affiche le contenu d’un fichier sans l’ouvrir dans un éditeur.  
Peut aussi concaténer plusieurs fichiers.

```bash
nano fichier
```

Éditeur de texte en ligne de commande, simple et très utilisé.

```bash
tail fichier
```

Affiche les dernières lignes d’un fichier.

```bash
tail -f /var/log/syslog
```

Affiche les logs **en temps réel**, très utile pour le diagnostic.

---

## 🗂️ Gestion des dossiers

```bash
mkdir dossier
```

Créer un dossier.

```bash
rmdir dossier
```

Supprimer un dossier **vide uniquement**.

---

## 📄 Gestion des fichiers

```bash
touch fichier
```

Créer un fichier vide ou mettre à jour sa date.

```bash
rm fichier
```

Supprimer un fichier.

```bash
cp source destination
```

Copier un fichier ou un dossier.

```bash
mv source destination
```

Déplacer ou renommer un fichier ou un dossier.

⚠️ Les suppressions sont **définitives** (pas de corbeille).

---

## 👤 Utilisateurs, droits & privilèges

```bash
sudo -i
```

Passer en **super-utilisateur (root)** de façon interactive.

```bash
su --login user
```

Changer d’utilisateur en chargeant complètement son environnement.

```bash
groups
```

Affiche les groupes de l’utilisateur courant.

```bash
id user
```

Affiche l’UID, le GID et les groupes associés à un utilisateur.

### Invite de commande

- `$` → utilisateur standard  
- `#` → super-utilisateur (root)

Le symbole indique le **niveau de privilèges**.

---

## ⚙️ Système & services

```bash
uname -r
```

Affiche la **version du kernel Linux**.

```bash
uname -a
```

Affiche toutes les informations système.

```bash
systemctl restart nom_du_service
```

Redémarre un service.

```bash
systemctl status nom_du_service
```

Affiche l’état d’un service (actif, arrêté, erreur).

---

## 🌐 Réseau

```bash
ping adresse
```

Teste la connectivité réseau.

```bash
nslookup domaine
```

```bash
dig domaine
```

Test de résolution DNS (`dig` est préféré sous Linux).

```bash
netstat -lapunte
```

Affiche les ports ouverts, connexions et services associés.

---

## 🔌 Alimentation & session

```bash
poweroff
```

Éteindre le système.

```bash
reboot
```

Redémarrer le système.

```bash
exit
```

Quitter le shell ou fermer la session courante.

---

## ⌨️ Shell & historique

```bash
history
```

Affiche l’historique des commandes exécutées.

```bash
!numéro
```

Réexécute une commande depuis l’historique  
(exemple : `!25`).

Très utile pour gagner du temps en administration.

---

## 🧠 À retenir

- Linux repose fortement sur le **terminal**
- Comprendre `$` et `#` est essentiel
- Ces commandes couvrent la majorité des cas réels
- Indispensables pour le **support**, l’**administration système** et les **entretiens**