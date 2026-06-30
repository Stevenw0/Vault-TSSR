# Post-installation Proxmox

### 5.1 Configuration des dépôts

📖 Documentation : [pve.proxmox.com/wiki/Package_Repositories](https://pve.proxmox.com/wiki/Package_Repositories)
> Ressource : [Configurer les dépôts Proxmox VE — linuxtricks.fr](https://www.linuxtricks.fr/wiki/proxmox-configurer-les-depots-sur-proxmox-ve)

Proxmox VE configure deux dépôts APT lors de l'installation : le dépôt **enterprise** et le dépôt de mise à jour de sécurité. Le dépôt enterprise (`pve-enterprise.list`) nécessite un abonnement actif — sans abonnement, `apt update` génère une erreur 401 Unauthorized qui, sans être bloquante, est gênante et signale que votre système ne peut pas accéder aux mises à jour de ce canal.

Pour nos labs — et pour beaucoup d'environnements de test ou de petites infrastructures — Proxmox met à disposition un dépôt **no-subscription**. Ce dépôt contient les mêmes paquets que le dépôt enterprise, mais sans les tests supplémentaires réalisés par l'équipe Proxmox avant la mise en production des mises à jour. Il est parfaitement fonctionnel et stable pour nos usages.

La configuration se fait en deux étapes : désactiver le dépôt enterprise en commentant la ligne qu'il contient, puis créer le fichier de dépôt no-subscription.

Depuis l'interface web, `Nœud → Repositories` permet de faire ces opérations graphiquement — vous voyez les dépôts actifs, et des boutons `Disable` et `Add` permettent de les gérer. Depuis le shell, la procédure est la suivante :

```bash
# 1. Désactiver le dépôt enterprise en commentant la ligne active
sed -i 's/^deb/# deb/' /etc/apt/sources.list.d/pve-enterprise.list

# 2. Créer le dépôt no-subscription pour PVE 9 (base Debian Trixie)
cat > /etc/apt/sources.list.d/pve-no-subscription.list << 'EOF'
deb http://download.proxmox.com/debian/pve trixie pve-no-subscription
EOF

# 3. Vérifier le contenu du fichier créé
cat /etc/apt/sources.list.d/pve-no-subscription.list

# 4. Mettre à jour et mettre à niveau
apt update && apt full-upgrade -y
```

> [!TIP]
> **Résultat attendu après apt update :**
> ```
> Hit:1 http://security.debian.org/debian-security trixie-security InRelease
> Hit:2 http://ftp.debian.org/debian trixie InRelease
> Get:3 http://download.proxmox.com/debian/pve trixie InRelease [4 285 B]
> Get:4 http://download.proxmox.com/debian/pve trixie/pve-no-subscription amd64 Packages [389 kB]
> Fetched 393 kB in 2s (196 kB/s)
> Reading package lists... Done
> ```


La commande `sed -i 's/^deb/# deb/'` utilise l'éditeur de flux `sed` pour remplacer, dans le fichier `pve-enterprise.list`, toute ligne commençant par `deb` en la préfixant d'un `#` — ce qui la transforme en commentaire. L'option `-i` applique la modification directement dans le fichier sans créer de fichier temporaire.

Si vous souhaitez également utiliser Ceph, voici le dépôt correspondant à ajouter séparément — Ceph Tentacle est la version intégrée dans Proxmox VE 9 :

```bash
cat > /etc/apt/sources.list.d/ceph.list << 'EOF'
deb http://download.proxmox.com/debian/ceph-tentacle trixie no-subscription
EOF
```

> [!INFO]
> **À retenir :** En production avec un abonnement, laissez le dépôt enterprise actif — il reçoit les mises à jour après une période de validation supplémentaire. En lab ou sans abonnement, le dépôt no-subscription est la bonne alternative.


**Aller plus loin — la configuration des dépôts en vidéo :**

Sylvain Gayer (Linuxtricks) détaille pas à pas la configuration des dépôts et les réglages post-installation indispensables :


> 📺 Vidéo complémentaire : [Don't run Proxmox without these settings — Titus Lempa](https://www.youtube.com/watch?v=VAJWUZ3sTSI)

### 5.2 Désactivation de la notification d'abonnement


Au démarrage de l'interface web, Proxmox affiche une popup signalant l'absence d'abonnement actif. Elle ne bloque rien, mais elle est répétitive. Il est important de comprendre ce qu'elle signifie avant de chercher à s'en débarrasser.

Cette popup est un rappel commercial : Proxmox Server Solutions finance son développement par les abonnements de support. Sans abonnement, vous utilisez un logiciel libre et gratuit, mais vous n'avez pas accès au support officiel ni aux dépôts enterprise testés en production. La popup est là pour vous le rappeler.

Des scripts populaires circulent sur internet pour la désactiver en modifiant directement les fichiers JavaScript de l'interface (`proxmoxlib.js`). Cette approche est à éviter en production : elle constitue une modification non supportée du logiciel, et elle est écrasée à chaque mise à jour du paquet `pve-manager`.

La solution propre et durable est l'abonnement. Sans abonnement, cette popup peut être fermée : elle n'empêche rien de fonctionner.

> [!WARNING]
> **Attention :** Les scripts qui patchent `proxmoxlib.js` peuvent casser l'interface après une mise à jour. Évitez-les en production et dans les environnements de certification.

