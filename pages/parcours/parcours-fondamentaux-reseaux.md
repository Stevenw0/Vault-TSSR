# Parcours Fondamentaux Reseaux

## Objectif

Construire les bases reseau dans le bon ordre : modeles, couches, supports, equipements, adressage, protocoles et services essentiels.

## Ordre conseille

## 0. Parcours narratif - google.com

Ces notes forment un mini-cours complet a suivre dans l'ordre. Elles partent d'une action concrete, taper `google.com`, puis descendent couche par couche.

1. [Vue d'ensemble google.com](/pages/notes/01-vue-ensemble.md) - Comprendre le voyage complet et le role des couches.
2. [Services applicatifs](/pages/notes/02-services-application.md) - DNS, DHCP, HTTP/HTTPS, email, VPN.
3. [Couche Transport](/pages/notes/03-couche-transport.md) - Ports, sockets, TCP, UDP, NAT/PAT.
4. [Couche Reseau](/pages/notes/04-couche-reseau.md) - IP, CIDR, ARP, ICMP, routage, IPv6.
5. [Couche Liaison](/pages/notes/05-couche-liaison.md) - Ethernet, MAC, switch, STP, VLAN, LACP.
6. [Couche Physique](/pages/notes/06-couche-physique.md) - Cables, fibre, Wi-Fi, hub, diagnostics physiques.
7. [Synthese google.com et securite](/pages/notes/07-synthese.md) - Encapsulation complete et securite par couche.

## 1. Avoir la vue d'ensemble

1. [Fondamentaux Reseaux](/pages/notes/fondamentaux-reseaux-01-05-11-2025.md) - Lire le cours global pour situer le terrain.
2. [Classification des reseaux](/pages/notes/classification-des-reseaux.md) - Comprendre les types de reseaux et topologies.
3. [Classification des reseaux 1](/pages/notes/classification-des-reseaux-1.md) - Completer avec une seconde classification.
4. [Modes de Transmission](/pages/notes/modes-de-transmission.md) - Distinguer simplex, half duplex et full duplex.
5. [Simplex](/pages/notes/simplex.md) - Fixer le premier mode.
6. [Half Duplex](/pages/notes/half-duplex.md) - Comprendre les communications alternees.
7. [Full Duplex](/pages/notes/full-duplex.md) - Comprendre les communications simultanees.

## 2. Comprendre les modeles et l'encapsulation

8. [Modele OSI](/pages/notes/modele-osi.md) - Installer le cadre en sept couches.
9. [Couche 1](/pages/notes/couche-1.md) - Commencer par le physique.
10. [Couche 2](/pages/notes/couche-2.md) - Comprendre liaison, MAC et commutation.
11. [Couche 3](/pages/notes/couche-3.md) - Comprendre adressage et routage.
12. [Couche 4](/pages/notes/couche-4.md) - Comprendre transport.
13. [Couche 5](/pages/notes/couche-5.md) - Situer la session.
14. [Couche 6](/pages/notes/couche-6.md) - Situer la presentation.
15. [Couche 7](/pages/notes/couche-7.md) - Situer l'application.
16. [Encapsulation](/pages/notes/encapsulation.md) - Comprendre comment les couches s'empilent.
17. [PDU](/pages/notes/pdu.md) - Nommer les unites de donnees.

## 3. Comprendre les supports et equipements

18. [Supports de transmission](/pages/notes/les-support-de-transmissions.md) - Voir cuivre, fibre et sans-fil.
19. [RJ45](/pages/notes/rj45.md) - Comprendre le cablage cuivre.
20. [Fibres optiques](/pages/notes/fibres-optiques.md) - Comprendre la fibre.
21. [SFP et Fibre](/pages/notes/sfp-fibre.md) - Relier fibre et modules reseau.
22. [Wi-Fi IEEE 802.11](/pages/notes/wi-fi-ieee-802-11.md) - Situer le sans-fil.
23. [Equipements reseaux](/pages/notes/les-equipements-reseaux.md) - Voir les roles materiels.
24. [Hub](/pages/notes/hub.md) - Connaitre l'ancien concentrateur.
25. [Repeater](/pages/notes/repeater.md) - Comprendre la repetition.
26. [Switch](/pages/notes/switch.md) - Comprendre la commutation.
27. [Routeur](/pages/notes/routeur.md) - Comprendre l'interconnexion de reseaux.
28. [Passerelle](/pages/notes/passerelle.md) - Comprendre la gateway.

## 4. Maitriser le niveau 2

29. [Adresse MAC](/pages/notes/adresse-mac.md) - Comprendre l'identifiant de couche 2.
30. [MAC Unicast](/pages/notes/mac-unicast.md) - Identifier un destinataire unique.
31. [MAC Broadcast](/pages/notes/mac-broadcast.md) - Comprendre la diffusion.
32. [MAC Multicast](/pages/notes/mac-multicast.md) - Comprendre le multicast.
33. [CSMA](/pages/notes/csma.md) - Comprendre acces au media et collisions.
34. [Normes 802 et EtherType](/pages/notes/les-norme-802-et-ethertype.md) - Lire les bases Ethernet.
35. [VLAN](/pages/notes/vlan.md) - Segmenter le niveau 2.
36. [STP](/pages/notes/stp.md) - Eviter les boucles.

## 5. Maitriser l'adressage et les services IP

37. [Couche reseau et adressage](/pages/notes/couche-reseau-adressage.md) - Lier couche 3 et IP.
38. [IPV4](/pages/notes/ipv4.md) - Comprendre IPv4.
39. [Adressage IPV4](/pages/notes/adressage-ipv4.md) - Revoir classes et structure.
40. [Masque de sous reseau](/pages/notes/masque-de-sous-reseau.md) - Lire les masques.
41. [Subnetting](/pages/notes/subnetting-methode-rapide.md) - Savoir decouper un reseau.
42. [IPV6](/pages/notes/ipv6.md) - Passer a IPv6.
43. [Adressage IPV6](/pages/notes/adressage-ipv6.md) - Configurer et simplifier IPv6.
44. [DHCP](/pages/notes/dhcp.md) - Comprendre l'attribution automatique.
45. [DNS](/pages/notes/dns.md) - Comprendre la resolution de noms.
46. [PXE](/pages/notes/pxe.md) - Comprendre le demarrage reseau avec DHCP, TFTP et bootloader.
47. [NAT](/pages/notes/nat.md) - Comprendre traduction d'adresses.
48. [ICMP et ARP](/pages/notes/icmp-et-arp.md) - Connaitre diagnostic et resolution locale.
49. [Reseaux VMware Workstation](/pages/notes/le-reseau-avec-vmware-workstation-pro-nat-bridged-etc.md) - Appliquer NAT, bridge, host-only et LAN Segment dans un lab virtuel.

## 6. Comprendre le transport et les protocoles applicatifs

48. [TCP et UDP](/pages/notes/tcp-et-udp.md) - Poser les bases du transport.
49. [TCP vs UDP](/pages/notes/tcp-vs-udp-fiabilite-ou-vitesse.md) - Comparer fiabilite et performance.
50. [Protocoles reseaux](/pages/notes/protocole.md) - Revoir les protocoles par couches.
51. [HTTP - HTTPS](/pages/notes/http-https.md) - Comprendre le web.
52. [SMTPS](/pages/notes/smtps.md) - Comprendre la messagerie securisee.

## Validation

Tu sais que ce parcours est acquis si tu peux partir d'un cable ou d'une carte Wi-Fi et remonter jusqu'a HTTP/DNS en expliquant MAC, IP, port, protocole, routeur, switch, VLAN et NAT.



