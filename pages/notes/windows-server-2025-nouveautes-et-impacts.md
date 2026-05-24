# Windows Server 2025 - nouveautés et impacts

## Definition

Windows Server 2025 combine des ameliorations fonctionnelles avec un durcissement progressif de l'ecosysteme Windows Server. L'impact principal n'est pas seulement l'ajout de nouveautes, mais la preparation d'une migration hors des composants anciens.

## Ce que ca change

- Pour Active Directory : le nouveau niveau fonctionnel et les evolutions LDAP/Kerberos/dMSA rendent la migration utile pour la securite et la scalabilite, mais demandent une verification de compatibilite applicative Découvrez les nouveautés de Windows Server 2025.
- Pour la virtualisation : Hyper-V devient plus adapte aux grands workloads et aux migrations a chaud entre hotes heterogenes Découvrez les nouveautés de Windows Server 2025.
- Pour les fichiers : SMB est pousse vers signature, chiffrement, audit et QUIC, ce qui peut exposer des clients anciens ou mal configures Découvrez les nouveautés de Windows Server 2025.
- Pour l'exploitation : hotpatching, Windows Terminal, OpenSSH, WinGet, Windows LAPS, Credential Guard et OSConfig rapprochent Windows Server de pratiques d'administration plus automatisees et durcies Découvrez les nouveautés de Windows Server 2025.
- Pour la migration : PowerShell 2.0, SMTP Server, WordPad et la console IIS 6 sont retires ; NTLM, WSUS, WID, WMIC, VBScript, PPTP/L2TP et TLS 1.0/1.1 doivent etre surveilles ou remplaces Les fonctionnalités supprimées et dépréciées - Windows Server 2025.

## Checklist de revue avant migration

- Identifier les serveurs qui utilisent encore SMTP Server, PowerShell 2.0, WMIC, VBScript, WID ou la console IIS 6.
- Auditer les dependances NTLM, TLS 1.0/1.1, PPTP/L2TP et clients SMB incompatibles avec signature/chiffrement.
- Verifier les prerequis Azure Arc si le hotpatching est souhaite.
- Tester les roles critiques : AD DS, DNS, DHCP, WSUS, RDS, ADFS, DFS, Hyper-V, IIS, impression et NPS Les principaux rôles de Windows Server 2025.

## Contradictions / Tensions

- WSUS reste utilisable mais n'evolue plus, ce qui cree une transition progressive plutot qu'une rupture immediate Les fonctionnalités supprimées et dépréciées - Windows Server 2025.
- SMB et LDAP deviennent plus securises par defaut, mais ces choix peuvent casser des clients ou applications anciennes si l'inventaire n'est pas fait.

