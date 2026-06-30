# Snapshots et sauvegardes LXC

📖 Documentation : [pve.proxmox.com/wiki/Backup_and_Restore](https://pve.proxmox.com/wiki/Backup_and_Restore)
> Ressource : [vzdump — sauvegarde complète des VMs et CT — pve-admin-guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#chapter_vzdump)

### 6.11.1 Les snapshots

Un snapshot capture l'état complet d'un conteneur à un instant donné — son système de fichiers, sa configuration, et optionnellement sa mémoire vive. C'est un filet de sécurité précieux avant toute opération risquée : mise à jour majeure, modification de configuration critique, installation d'un nouveau service.

Depuis l'interface graphique, on navigue vers le conteneur, puis **Snapshots → Take Snapshot**. On donne un nom explicite au snapshot (par exemple `avant-mise-a-jour`) et une description optionnelle.

Pour revenir à un état précédent, on sélectionne le snapshot dans la liste et on clique **Rollback**.

### 6.11.2 Les sauvegardes avec vzdump

`vzdump` est l'outil de sauvegarde de Proxmox. Il crée une archive complète du conteneur, transportable et restaurable sur n'importe quel nœud Proxmox.

```bash
# Sauvegarder le conteneur 200 en mode snapshot sur le stockage local
vzdump 200 --storage local --mode snapshot
```

> [!TIP]
> **Résultat attendu :**
> ```
> INFO: starting new backup job: vzdump 200 --storage local --mode snapshot
> INFO: Starting Backup of VM 100 (lxc)
> INFO: status = running
> INFO: backup mode: snapshot
> INFO: ionice priority: 7
> INFO: CT Name: webserver
> INFO: including mount point: / (type: lvmthin)
> INFO: creating vzdump archive '/var/lib/vz/dump/vzdump-lxc-200-2026_05_29-10_00_00.tar.zst'
> INFO: Finished Backup of VM 100 (00:00:23)
> ```


L'archive créée dans `/var/lib/vz/dump/` peut être restaurée avec `pct restore`, en lui assignant un nouvel ID de conteneur :

```bash
# Restaurer le conteneur avec un nouvel ID (101)
pct restore 201 /var/lib/vz/dump/vzdump-lxc-200-2026_05_29-10_00_00.tar.zst \
  --storage local-lvm
```

> [!TIP]
> **Résultat attendu :**
> ```
> restore CT 101 from file /var/lib/vz/dump/vzdump-lxc-200-2026_05_29-10_00_00.tar.zst
> create restore in progress...
> restore CT 101 end
> ```


> [!INFO]
> **À retenir :** snapshots et sauvegardes sont complémentaires. Le snapshot est rapide et local — idéal avant une modification. La sauvegarde `vzdump` est plus lente mais produit un fichier portable, idéal pour l'archivage ou la migration entre nœuds.


> [!WARNING]
> **Mode snapshot vs suspend :** le mode `snapshot` de vzdump sauvegarde le conteneur sans l'arrêter, en s'appuyant sur les snapshots LVM. Le mode `suspend` met le conteneur en pause le temps de la sauvegarde. Sur un conteneur qui héberge une base de données, préférez le mode `suspend` pour garantir la cohérence des données.


---

