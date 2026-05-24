# WAN Miniport

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/WAN Miniport.md`
- Full raw note: WAN Miniport

## Summary

Cette source explique les WAN Miniport comme interfaces reseau virtuelles Windows utilisees pour les connexions WAN, VPN, PPPoE, PPTP, L2TP, SSTP, IKEv2, IP et IPv6.

## Key Claims

- Les WAN Miniport ne sont pas des cartes physiques, mais des interfaces virtuelles exposees par Windows pour abstraire certains protocoles WAN et VPN.
- Les variantes PPTP, L2TP, SSTP et IKEv2 correspondent a differents modes de tunnel VPN.
- PPPoE sert aux connexions d'acces operateur utilisant PPP, notamment dans certains contextes DSL/FAI.
- Les miniports reposent sur la pile reseau Windows et les pilotes Microsoft, avec NDIS comme couche d'interface de pilotes.
- En cas de corruption, les commandes `netsh int ip reset` ou `netcfg -d` peuvent etre utilisees comme pistes de reinitialisation reseau.

## Useful Commands

```powershell
Get-NetAdapter
Get-VpnConnection
```

```cmd
netsh int ip reset
netcfg -d
```

## Related Pages

- WAN Miniport
- Windows Security Operations
- [Parcours Securite et Reseaux Windows](/pages/parcours/parcours-securite-et-reseaux-windows.md)

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: completer avec une source Microsoft si cette fiche doit servir de reference d'exploitation.
