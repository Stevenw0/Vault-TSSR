# PXE

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/PXE.md`
- Full raw note: PXE

## Summary

Cette source presente PXE comme un mecanisme de demarrage reseau permettant le deploiement d'OS, le clonage, l'installation automatique et la maintenance sans disque local ni cle USB.

## Key Claims

- La chaine PXE combine generalement client PXE, DHCP, serveur TFTP, bootloader puis noyau ou installateur.
- DHCP fournit l'adresse IP et les indications de boot, typiquement le serveur suivant et le fichier de demarrage.
- TFTP sert les premiers fichiers de boot comme `pxelinux.0`, `grubx64.efi`, `vmlinuz` ou `initrd.img`.
- PXELINUX, GRUB et iPXE sont des bootloaders courants, avec iPXE comme option plus avancee pour HTTP boot et scripts.
- Les risques principaux sont le boot non autorise, le rogue DHCP et le caractere non securise de TFTP.

## Related Pages

- PXE
- Windows Deployment
- [Parcours Fondamentaux Reseaux](/pages/notes/parcours-fondamentaux-reseaux.md)
- [Parcours Windows Server et Active Directory](/pages/parcours/parcours-windows-server-et-active-directory.md)

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: preciser les differences BIOS/UEFI et DHCP options selon l'environnement utilise.
