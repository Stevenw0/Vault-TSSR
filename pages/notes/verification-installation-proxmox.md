# Vérification d'installation Proxmox

Avant de considérer un nœud Proxmox comme opérationnel, quelques vérifications s'imposent. Elles se font depuis le Shell de l'interface web ou via SSH.

```bash
# Vérifier la version de Proxmox VE installée
pveversion

# Vérifier les services critiques
systemctl status pveproxy    # Interface web
systemctl status pvedaemon   # Démon principal PVE
systemctl status corosync    # Clustering (même en standalone)
systemctl status pve-cluster # Gestion du cluster

# Vérifier les stockages disponibles
pvesm status

# Consulter l'état du nœud via l'API locale
pvesh get /nodes/pve/status
```

> [!TIP]
> **Résultat attendu de pveversion :**
> ```
> pve-manager/9.x.x/xxxxxxxx (running kernel: 6.8.x-x-pve)
> ```


> [!TIP]
> **Résultat attendu de pvesm status :**
> ```
> Name             Type     Status           Total            Used       Available        %
> local            dir      active       xxx GiB          xx GiB          xx GiB   xx%
> local-lvm        lvmthin  active       xxx GiB          xx GiB          xx GiB   xx%
> ```


La commande `pveversion` est votre première vérification : elle indique la version de `pve-manager` et surtout le noyau en cours d'exécution. La mention `running kernel: 6.8.x-x-pve` confirme que le noyau Proxmox est bien chargé — et non le noyau Debian standard.

`pvesm status` (Proxmox VE Storage Manager) liste tous les stockages configurés avec leur état (`active` ou `error`) et leur taux d'utilisation. Si un stockage apparaît en erreur dès le démarrage, c'est un signal d'alarme à traiter avant de créer quoi que ce soit.

> [!WARNING]
> **Erreur fréquente :** ignorer l'état des services après une mise à jour. Toujours relancer `systemctl status pveproxy pvedaemon` après un `apt full-upgrade` pour s'assurer que les services ont redémarré proprement.


---

