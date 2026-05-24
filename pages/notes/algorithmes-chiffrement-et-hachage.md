# Algorithmes chiffrement et hachage

## Bibliographic Info

- Author:
- Date:
- Source type: fiche de cours
- Original file: `01 - Sources/Algorithmes chiffrement et hachage.md`
- Full raw note: Algorithmes chiffrement et hachage

## Summary

Cette source presente les mecanismes de protection des donnees par chiffrement, hachage et protocoles securises. Elle distingue les usages de confidentialite, d'integrite et de securisation des echanges reseau.

## Key Claims

- Le chiffrement protege la confidentialite, mais ne suffit pas a garantir qu'une donnee n'a pas ete modifiee.
- Le chiffrement symetrique utilise une cle unique pour chiffrer et dechiffrer; AES est presente comme le standard moderne pour VPN, HTTPS et chiffrement disque.
- Le chiffrement asymetrique utilise une paire cle publique / cle privee; RSA et ECC sont cites pour certificats, signatures numeriques et usages modernes.
- Le hachage transforme une donnee en empreinte fixe pour verifier l'integrite.
- MD5 est note comme obsolete, SHA1 comme vulnerable, tandis que SHA2 et SHA3 sont presentes comme recommandations modernes.
- TLS, VPN et les variantes securisees de protocoles applicatifs, comme HTTPS, FTPS, SMTPS, POP3S et IMAPS, securisent les communications.

## Extracted Concepts

- Cryptographie
- Triade CIA
- Services de securite
- Network Security

## Related Sources

- AES
- MD5 & SHA
- SSL - TLS
- VPN
- IPsec
- OpenSSL

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: completer avec une source normative sur l'etat actuel de MD5, SHA1, SHA2, SHA3, RSA, ECC et TLS.
