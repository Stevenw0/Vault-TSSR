# Sensibilisation attaques DoS

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/Sensibilisation attaques DoS.md`
- Full raw note: Sensibilisation attaques DoS

## Summary

Cette source explique le deni de service dans un cadre de sensibilisation. Elle presente la difference DoS/DDoS, les impacts observables, les defenses et les limites legales des exercices de saturation.

## Key Claims

- Une attaque DoS vise a saturer un service et a le rendre indisponible pour les utilisateurs legitimes.
- Un DoS provient d'une seule source, tandis qu'un DDoS provient de plusieurs machines.
- LOIC est presente comme un ancien outil de test ou de demonstration de saturation, a utiliser uniquement en laboratoire autorise.
- Les effets observables pendant un exercice peuvent inclure hausse CPU, surcharge RAM, saturation reseau et ralentissement du service web.
- Les outils de surveillance cites incluent `htop`, Grafana, `journalctl` et Wireshark.
- Les protections citees incluent pare-feu, reverse proxy, rate limiting, IDS/IPS et supervision.

## Extracted Concepts

- DoS et sensibilisation
- Network Security
- Monitoring
- Reverse Proxy

## Related Sources

- DoS & DDoS
- Firewall
- Wireshark
- [Atelier Suricata pfSense](/pages/notes/atelier-suricata-pfsense.md)
- Grafana Stack Docker
- Reverse Proxy

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: cadrer tout futur exercice DoS avec un perimetre de lab explicite et des limites de trafic documentees.
