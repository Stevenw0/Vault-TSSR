# Projet SafeGuard

## Synthese

Le projet SafeGuard est un laboratoire d'infrastructure multi-site. Il combine un site Campus, un site Datacenter et un WAN simule dans VirtualBox. Les deux sites sont relies par un VPN IPsec entre deux routeurs pfSense, puis exploites par un domaine Active Directory et un serveur applicatif Linux.

La documentation principale est Documentation projet SafeGuard. Le resume court est Resume du laboratoire SafeGuard.

## Architecture

| Zone | Reseau | Composants |
| --- | --- | --- |
| WAN | `10.72.56.0/24` | Reseau NAT VirtualBox `WAN-SafeGuard` |
| Campus | `192.168.100.0/24` | `R1`, `PC1`, `DC1`, `DC2` |
| Datacenter | `192.168.200.0/24` | `R2`, `LAMP1` |

## Services mis en place

- Routage, NAT, DHCP Campus et firewall avec pfSense.
- VPN IPsec site-a-site entre Campus et Datacenter.
- Domaine Active Directory `safeguard.lan` avec deux controleurs de domaine.
- DNS interne, OU, utilisateurs, groupes globaux et compte administrateur nominatif.
- Partages SMB sur `DC2` avec modele AGDLP.
- Imprimante fictive publiee dans Active Directory.
- GPO pour verrouillage, lecteur reseau, imprimante, RDP, redirection Documents, fond d'ecran et publication Firefox.
- Serveur Debian `LAMP1` avec RAID1 logiciel, Apache, MariaDB, PHP-FPM et WordPress.
- Enregistrement DNS `www.safeguard.lan` vers `LAMP1`.
- Administration SSH par cle publique sur les routeurs pfSense.

## Validations

- `PC1` recoit une configuration DHCP du Campus.
- L'acces Internet fonctionne apres correction DNS cote pfSense.
- Le tunnel IPsec est etabli et le trafic passe apres ajout des regles firewall IPsec.
- `DC1` et `DC2` sont visibles comme controleurs de domaine.
- Les GPO utilisateur et ordinateur s'appliquent apres correction de la synchronisation temps.
- WordPress est accessible depuis `PC1` via `http://www.safeguard.lan`.

## Points de vigilance

- REVIEW: les interfaces host-only utilisees pour l'administration temporaire doivent etre separees de l'architecture cible.
- REVIEW: les sources valident le lab pedagogique, mais pas un niveau production complet.
- TODO: documenter les sauvegardes, la supervision, HTTPS, le durcissement pfSense/Windows/Linux et un plan de reprise.

## Liens utiles

- SafeGuard
- VirtualBox
- pfSense
- WordPress
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)
- [Parcours Windows Server et Active Directory](/pages/parcours/parcours-windows-server-et-active-directory.md)
- AGDLP
- Group Policy

