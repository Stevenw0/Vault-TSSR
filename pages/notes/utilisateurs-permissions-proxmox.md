# Utilisateurs et permissions Proxmox

📖 Documentation : [pve.proxmox.com/wiki/User_Management](https://pve.proxmox.com/wiki/User_Management)
> Ressource : [Gestion des utilisateurs et RBAC — Documentation Groupe Proxmox Resinfo](https://resinfo-gt.pages.in2p3.fr/proxmox/doc/)

Proxmox VE dispose d'un système de contrôle d'accès basé sur les rôles (RBAC) qui s'inspire du modèle ACL standard. Trois concepts clés s'articulent ensemble : les **utilisateurs** (ou groupes), les **rôles** (ensembles de privilèges), et les **chemins** (objets sur lesquels les droits s'appliquent).

Un **utilisateur** dans Proxmox est toujours associé à un realm :
- `root@pam` est le root Linux,
- `admin-local@pve` est un utilisateur interne Proxmox.

Les utilisateurs peuvent se connecter à l'interface web ou à l'API.

Un **rôle** est un ensemble de permissions prédéfinies. Proxmox propose plusieurs rôles par défaut, parmi lesquels :

- `Administrator` : droits complets sur tout
- `PVEAdmin` : droits d'administration sur les VMs et conteneurs, sans accès aux configurations système du nœud
- `PVEVMAdmin` : gestion complète des VMs et CT
- `PVEVMUser` : droits limités d'un utilisateur de VM (démarrage, arrêt, console)
- `PVEAuditor` : lecture seule
- `PVEDatastoreAdmin` : gestion des stockages

Un **chemin** est un identifiant de ressource dans l'arborescence Proxmox : `/` désigne l'ensemble du datacenter, `/nodes/pve` désigne le nœud `pve`, `/vms/100` désigne la VM avec l'ID 100, `/storage/local` désigne le stockage `local`.

Une permission s'exprime donc comme : "l'utilisateur X a le rôle Y sur le chemin Z".

Depuis l'interface web,
- `Datacenter → Permissions → Users` permet de créer des utilisateurs,
- `Datacenter → Permissions → Groups` permet de créer des groupes,
- `Datacenter → Permissions → Roles` liste les rôles disponibles, et
- `Datacenter → Permissions → Add` crée une association utilisateur/rôle/chemin.

Depuis la ligne de commande, les outils `pveum` et `pvesh` donnent accès aux mêmes opérations :

```bash
# Créer un utilisateur Proxmox interne (realm pve)
pveum user add admin-local@pve --password 'CHANGE_ME' --comment "Compte admin local"

# Créer un groupe
pveum group add admins --comment "Groupe des admins"

# Ajouter l'utilisateur au groupe
pveum user modify admin-local@pve --groups admins

# Assigner le rôle PVEVMAdmin sur tout le datacenter (chemin /)
pveum aclmod / --user admin-local@pve --role PVEVMAdmin

# Vérifier les utilisateurs configurés
pveum user list

# Vérifier les ACL configurées
pveum acl list
```

> [!TIP]
> **Résultat attendu de pveum user list :**
> ```
> ┌──────────────────┬───────┬──────────────────┬────────────┐
> │ userid           │ email │ comment          │ groups     │
> ╞══════════════════╪═══════╪══════════════════╪════════════╡
> │ admin-local@pve    │       │ Compte admin local │ admins │
> ├──────────────────┼───────┼──────────────────┼────────────┤
> │ root@pam         │       │                  │            │
> └──────────────────┴───────┴──────────────────┴────────────┘
> ```


La distinction entre `@pam` et `@pve` mérite d'être soulignée. Un utilisateur `@pam` existe dans le système Linux — sa création dans Proxmox ne fait que l'autoriser à se connecter à l'interface. Un utilisateur `@pve` n'existe que dans Proxmox — il n'a pas de compte Linux sur le serveur. Pour la plupart des opérations de délégation, les utilisateurs `@pve` sont préférables car ils sont totalement sous le contrôle de Proxmox.

> [!INFO]
> **À retenir :** Le RBAC de Proxmox applique les permissions par chemin. Un administrateur délégué peut recevoir `PVEVMAdmin` sur `/vms/100` uniquement, ce qui lui donne la main sur sa propre VM sans toucher aux autres.


> [!WARNING]
> **Erreur fréquente — connexion impossible avec un utilisateur PAM :** Si vous créez un utilisateur `monuser@pam` dans Proxmox mais que le compte Linux correspondant n'existe pas sur le serveur Debian (ou que le mot de passe ne correspond pas), la tentative de connexion retourne une erreur d'authentification PAM. Proxmox ne crée pas le compte Linux — il vérifie uniquement l'authentification PAM pour un compte qui doit *déjà exister*.

>      alt="Erreur d'authentification PAM dans l'interface Proxmox VE"
>      style="display:block; margin:auto; width:80%">

