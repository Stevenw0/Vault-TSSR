# Installation automatisée Proxmox

📖 Documentation : [pve.proxmox.com/wiki/Automated_Installation](https://pve.proxmox.com/wiki/Automated_Installation)
> Ressource : [Installation automatisée Proxmox VE — blog Stéphane Robert](https://blog.stephane-robert.info/docs/virtualiser/type1/proxmox/)

Depuis Proxmox VE 8.1, l'ISO officielle embarque un mécanisme d'**installation non-interactive** appelé *autoinstall*. L'idée est simple : au lieu de répondre manuellement aux écrans de l'installateur graphique, vous fournissez à l'avance un fichier TOML — `answer.toml` — qui contient toutes les réponses. L'installateur lit ce fichier au démarrage et effectue l'installation sans aucune intervention humaine.

C'est la brique de base de tout déploiement à grande échelle de nœuds Proxmox : reproductibilité garantie, zéro clic, résultats identiques sur cent machines. C'est aussi une bonne manière de comprendre en détail ce que fait l'installateur graphique — chaque paramètre de l'interface correspond à une clé dans le fichier.

#### Structure d'un answer.toml

Le fichier est découpé en sections qui correspondent aux écrans successifs de l'installateur :

```toml
# answer.toml — fichier de réponses pour l'autoinstall Proxmox VE 8.1+

[global]
keyboard = "fr"        # disposition clavier (fr, de, en-us…)
country = "fr"         # code pays ISO 3166-1
timezone = "Europe/Paris"

[network]
source = "from-dhcp"   # récupérer IP/GW/DNS depuis DHCP au premier boot
# Alternative : configuration statique
# source = "from-answer-file"
# cidr = "192.168.44.10/24"
# gateway = "192.168.44.1"
# dns = "192.168.44.1"
# hostname = "pve01.example.local"   # FQDN obligatoire

[disk-setup]
filesystem = "ext4"    # ext4 | xfs | zfs | btrfs
disk_list = ["sda"]    # liste des disques cibles (un seul pour ext4/xfs)
# Pour ZFS RAID-1 sur deux disques :
# filesystem = "zfs"
# zfs.raid = "mirror"
# disk_list = ["sda", "sdb"]

[passwords]
root = "CHANGE_ME"         # mot de passe root en clair — à changer en prod
```

> [!WARNING]
> **Sécurité :** le mot de passe root est stocké en clair dans `answer.toml`. En production, utilisez le champ `root_password_hashed` avec un hash SHA-512 généré par `openssl passwd -6 MonMotDePasse`. Le fichier en clair ne doit jamais être accessible publiquement.


Le fichier `[first-boot]` est une section optionnelle qui permet d'exécuter des commandes shell au premier démarrage du système fraîchement installé — utile pour configurer les dépôts no-subscription, pusher une clé SSH ou rejoindre un cluster automatiquement :

```toml
[first-boot]
commands = [
  # Remplacer le dépôt enterprise par no-subscription
  "sed -i 's|^deb|# deb|' /etc/apt/sources.list.d/pve-enterprise.list",
  "echo 'deb http://download.proxmox.com/debian/pve trixie pve-no-subscription' > /etc/apt/sources.list.d/pve-no-subscription.list",
  # Première mise à jour sans interaction
  "apt-get update -qq && apt-get upgrade -y",
  # Pousser une clé SSH autorisée
  "mkdir -p /root/.ssh && echo 'ssh-ed25519 AAAA... admin@example.local' >> /root/.ssh/authorized_keys",
]
```

#### Intégrer le fichier dans l'ISO — proxmox-auto-install-assistant

Le fichier `answer.toml` seul ne fait rien : il faut l'injecter dans l'ISO ou le rendre accessible au démarrage. L'outil officiel `proxmox-auto-install-assistant` gère cela.

```bash
# Installer l'outil (disponible dans les dépôts Proxmox)
apt install proxmox-auto-install-assistant

# Vérifier la syntaxe du fichier answer.toml avant injection
proxmox-auto-install-assistant validate-answer answer.toml

# Injecter le fichier dans une ISO existante → nouvelle ISO prête à flasher
proxmox-auto-install-assistant prepare-iso proxmox-ve_8.4.iso \
  --answer-file answer.toml \
  --output proxmox-ve_8.4-autoinstall.iso
```

> [!TIP]
> **Résultat attendu de `validate-answer` :**
> ```
> Parsed answer file successfully
> ```
> Si le fichier contient des erreurs de syntaxe TOML ou des valeurs invalides, l'outil les liste avant toute injection — vous évitez de booter sur une ISO cassée.


L'ISO résultante (`proxmox-ve_8.4-autoinstall.iso`) s'utilise exactement comme l'ISO normale : Ventoy, Rufus, ou `dd`. Au démarrage, l'installateur détecte le fichier embarqué, affiche un écran de confirmation de 5 secondes ("Auto-install found, proceeding in 5s..."), puis procède sans interaction.

#### Alternative : servir l'answer.toml via HTTP

Si vous ne souhaitez pas recréer l'ISO à chaque modification, vous pouvez héberger le fichier sur un serveur HTTP et le passer en paramètre de boot GRUB :

```
proxmox-ve-auto-install url=http://192.168.44.1/answer.toml
```

C'est la méthode recommandée quand vous déployez des dizaines de nœuds depuis la même ISO : une seule ISO, autant de `answer.toml` que de profils de déploiement.

> [!INFO]
> **À retenir :** `answer.toml` + `proxmox-auto-install-assistant` est la solution officielle Proxmox pour l'Infrastructure as Code au niveau de l'hyperviseur. C'est ce qui permet de reconstruire un nœud en moins de 10 minutes, de manière identique, sans documentation procédurale à suivre.

