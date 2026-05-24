# Universally Unique Identifier (Linux)

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/Universally Unique Identifier (Linux).md`
- Full raw note: Universally Unique Identifier (Linux)

## Summary

Cette source explique l'usage des UUID sous Linux pour identifier de maniere stable les disques, partitions et systemes de fichiers, en particulier dans `/etc/fstab`.

## Key Claims

- Un UUID permet d'identifier une partition ou un systeme de fichiers independamment du nom de peripherique.
- Les noms `/dev/sda`, `/dev/sdb` ou similaires peuvent changer selon l'ordre de detection, l'ajout de disques ou le contexte VM/USB.
- L'usage d'UUID dans `/etc/fstab` limite les risques de mauvais montage et de boot casse.
- `blkid`, `lsblk -f`, `findmnt` et `mount -a` sont les commandes principales pour verifier UUID, montages et configuration `fstab`.
- `LABEL` est plus lisible mais moins robuste contre les collisions; `PARTUUID` identifie une partition, souvent dans des contextes GPT/UEFI.

## Useful Commands

```bash
blkid
lsblk -f
findmnt
sudo mount -a
```

## Related Pages

- UUID Linux
- Windows Storage
- [Parcours Administration Linux](/pages/parcours/parcours-administration-linux.md)

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- TODO: relier cette fiche a une page plus large sur `fstab` et le boot Linux si elle existe deja en couche wiki.
