# Le reseau avec VMware Workstation Pro - NAT Bridged etc

## Bibliographic Info

- Author: Florian BURNEL
- Site: IT-Connect
- Source type: article web capture
- Captured: 2026-05-12
- Original URL: `https://www.it-connect.fr/comprendre-les-differents-types-de-reseaux-de-vmware-workstation-pro/`
- Original file: `01 - Sources/Le réseau avec VMware Workstation Pro  NAT, Bridged, etc.md`
- Full raw note: Le réseau avec VMware Workstation Pro  NAT, Bridged, etc

## Summary

Cette source explique les modes reseau de VMware Workstation Pro : NAT, Bridged, Host-only, LAN Segment et Custom. Elle sert de reference pour choisir le bon type de connexion selon le besoin d'acces Internet, d'isolation, de visibilite sur le LAN physique ou de construction de labs reseau.

## Key Claims

- Le mode NAT donne a la VM un acces reseau via l'adresse de l'hote et un sous-reseau virtuel gere par VMware, avec DHCP VMware possible [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).
- En NAT, une VM n'est pas directement joignable depuis le LAN physique, sauf si une redirection de port est configuree dans VMware [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).
- Le mode Bridged connecte la VM au reseau physique comme une machine du LAN ; elle obtient son adresse via le DHCP du reseau local si DHCP est active [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).
- Le mode Host-only isole la VM du LAN physique et d'Internet, mais permet la communication avec l'hote et les autres VM du meme reseau host-only [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).
- Le mode LAN Segment cree un reseau interne totalement isole entre VM, sans acces a l'hote, au LAN physique ou a Internet tant qu'une VM routeur/pare-feu n'est pas ajoutee [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).
- Le mode Custom permet de selectionner explicitement un adaptateur virtuel VMware, utile quand plusieurs reseaux virtuels sont crees [Le reseau avec VMware Workstation Pro - NAT Bridged etc](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md).

## Practical Interpretation

Pour un lab pfSense, un montage frequent consiste a placer le WAN du firewall en NAT VMware pour sortir vers Internet, puis a placer les reseaux internes en LAN Segment afin d'eviter toute pollution du reseau physique. Une VM pfSense ou OPNsense peut alors router le trafic entre LAN Segment et NAT.

## Related Pages

- Reseaux VMware Workstation
- Virtualization
- NAT
- pfSense
- [Parcours Fondamentaux Reseaux](/pages/notes/parcours-fondamentaux-reseaux.md)
- [Parcours Homelab](/pages/parcours/parcours-homelab.md)
- [Parcours Hyperviseur](/pages/parcours/parcours-hyperviseur.md)

## Contradictions / Tensions

- Aucune contradiction identifiee pendant cette ingestion.

## Open Questions

- REVIEW: verifier si les captures d'ecran originales doivent etre rapatriees dans `05 - Attachments/`.

