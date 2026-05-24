# Windows Server 2025

## Summary

Windows Server 2025 est une version majeure de Windows Server qui apporte des evolutions sur Active Directory, Hyper-V, SMB, securite, mises a jour, outils integres et migrations. Les sources ingerees proviennent d'IT-Connect et doivent etre verifiees dans Microsoft Learn avant une decision de production.

## Nouveautes structurantes

- Active Directory gagne un nouveau niveau fonctionnel, des ameliorations de performance et plusieurs renforcements LDAP/Kerberos/dMSA Découvrez les nouveautés de Windows Server 2025.
- Hyper-V progresse sur GPU-P, clusters en groupe de travail, capacites VM accrues et Live Migration entre processeurs differents Découvrez les nouveautés de Windows Server 2025.
- SMB renforce la signature, le chiffrement, l'audit et etend SMB over QUIC hors Azure Edition selon la source Découvrez les nouveautés de Windows Server 2025.
- Le hotpatching reduit les redemarrages mais depend d'Azure Arc d'apres la source Découvrez les nouveautés de Windows Server 2025.

## Roles courants

Les roles classiques restent centraux : AD DS/DNS, AD CS, WSUS, DHCP, RDS, ADFS, DFS, Hyper-V, IIS, impression et NPS Les principaux rôles de Windows Server 2025.

## Suppressions et depreciations

Les composants retires incluent la console IIS 6, WordPad, le serveur SMTP et PowerShell 2.0. Plusieurs technologies sont depreciees ou sans nouveau developpement, dont NTLM, TLS 1.0/1.1, WMIC, VBScript, WSUS, NLB, PPTP/L2TP et Windows Internal Database Les fonctionnalités supprimées et dépréciées - Windows Server 2025.

## Open Questions

- REVIEW: Verifier dans Microsoft Learn les contraintes exactes de licence, d'edition et de prerequis pour Hotpatch, Azure Arc, SMB over QUIC et OSConfig.
- REVIEW: Identifier les roles du lab ou de l'infrastructure qui dependent encore de PowerShell 2.0, SMTP Server, WMIC, VBScript, NTLM, WSUS ou WID.

