# FOG Project - Lab VMware

## Bibliographic Info

- Author:
- Date: 2026-05-07
- Source type: documentation de lab
- Original file: `01 - Sources/FOG Project - Lab VMware.md`
- Full raw note: FOG Project - Lab VMware

## Summary

Cette source documente un laboratoire FOG Project sous VMware, avec Debian 12, un reseau PXE isole, une interface NAT Internet et une interface host-only pour l'administration SSH/web.

## Key Claims

- Le lab remplace une tentative precedente sur Proxmox et repart sur VMware.
- L'architecture utilise VMnet8 pour Internet, VMnet2 pour PXE et VMnet1 pour l'administration depuis l'hote.
- Le DHCP VMware doit etre desactive sur VMnet2 pour laisser FOG fournir DHCP/PXE.
- Le serveur Debian utilise `ens33` en DHCP NAT, `ens34` en statique `192.168.60.10/24` pour PXE et `ens35` en statique `192.168.81.10/24` pour SSH.
- FOG 1.5.10.1826 a ete installe avec l'interface FOG sur `ens34` et DHCP FOG actif.
- Le test PXE, l'enregistrement client, la creation d'image, la capture Debian 12 et le deploiement vers une VM vierge sont valides.
- La plage DHCP FOG a ete corrigee pour eviter d'inclure l'adresse du serveur: `192.168.60.50` a `192.168.60.200`.

## Validated Chain

```text
VM modele Debian -> Capture FOG -> Stockage /images -> Deploiement PXE -> VM restauree fonctionnelle
```

## Related Pages

- FOG Project
- PXE
- Lab FOG VMware
- Windows Deployment
- [Parcours Windows Server et Active Directory](/pages/parcours/parcours-windows-server-et-active-directory.md)

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- TODO: documenter les sauvegardes/restaurations du repertoire `/images`.
- REVIEW: verifier que l'adresse routeur distribuee par DHCP FOG doit bien rester `192.168.60.10` dans ce reseau PXE isole.
