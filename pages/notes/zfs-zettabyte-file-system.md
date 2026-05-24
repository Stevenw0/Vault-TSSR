# ZFS - Zettabyte File System

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/ZFS — Zettabyte File System.md`
- Full raw note: ZFS — Zettabyte File System

## Summary

Cette source presente ZFS comme un systeme de fichiers avance combinant gestion de volumes, stockage, snapshots, checksums et RAID logiciel.

## Key Claims

- ZFS combine systeme de fichiers, gestionnaire de volumes et RAID logiciel.
- L'architecture ZFS repose sur des pools, des vdevs, des datasets et des zvols.
- Les checksums sur les blocs visent a detecter la corruption silencieuse et le bit rot.
- Les snapshots reposent sur le copy-on-write et facilitent rollback et sauvegarde.
- Les commandes courantes incluent `zpool status`, `zfs list`, `zpool list`, `zfs snapshot` et `zpool scrub`.
- ZFS est utile pour NAS, virtualisation, Proxmox, sauvegardes et stockage critique.
- Les limites citees sont la consommation RAM, la complexite, certaines contraintes d'extension RAIDZ et la licence CDDL.

## Extracted Concepts

- ZFS
- Virtualization

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: completer avec les recommandations Proxmox officielles pour ZFS, RAM, disques et scrub.

