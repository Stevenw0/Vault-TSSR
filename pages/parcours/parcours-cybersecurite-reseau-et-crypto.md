# Parcours Cybersecurite Reseau et Crypto

## Objectif

Comprendre les bases de la cybersécurité, les attaques reseau courantes, les defenses d'architecture, les outils d'analyse et les mecanismes cryptographiques.

## Ordre conseille

## 1. Poser le cadre securite

1. [Systeme d'Information](/pages/notes/systeme-d-information-si.md) - Situer ce qu'on protege.
2. [Piliers](/pages/notes/piliers.md) - Comprendre les grands objectifs.
3. [Triade CIA](/pages/notes/triade-cia.md) - Maitriser confidentialite, integrite, disponibilite.
4. [D.I.C.T](/pages/notes/d-i-c-t.md) - Ajouter disponibilité, intégrité, confidentialité et traçabilité.
5. [Services cybersecurite](/pages/notes/services-cybersecurite.md) - Relier confidentialite, integrite, disponibilite, tracabilite, authentification et non-repudiation.
6. [Niveaux de securite](/pages/notes/niveaux-de-securite.md) - Comprendre la securite par couches.
7. [Defense en profondeur](/pages/notes/defense-en-profondeur.md) - Formaliser l'approche organisation/systemes/reseau/applications.
8. [SoD](/pages/notes/sod.md) - Comprendre la séparation des tâches.
9. [Normes de cybersecurite](/pages/notes/normes-de-cybersecurite.md) - Voir les cadres de reference.
10. [ISO 2700X](/pages/notes/iso-2700x.md) - Approfondir la famille ISO.

## 1 bis. Préparer la résilience

11. [PRA - PCA](/pages/notes/pra-pca.md) - Distinguer continuité et reprise d'activité.
12. [Règle 3-2-1](/pages/notes/regle-3-2-1.md) - Structurer une stratégie de sauvegarde robuste.

## 2. Comprendre l'exposition et les defenses reseau

13. [Exposition Internet](/pages/notes/exposition-internet.md) - Comprendre le risque des services exposes.
14. [Firewall](/pages/notes/firewall.md) - Filtrer et controler les flux.
15. [DMZ](/pages/notes/dmz.md) - Isoler les services exposes.
16. [Atelier pfSense VMware](/pages/notes/atelier-pfsense-vmware.md) - Pratiquer WAN/LAN/DMZ, NAT et regles firewall sur pfSense.
17. [VPN](/pages/notes/vpn.md) - Comprendre l'acces distant chiffre.
18. [IPsec](/pages/notes/ipsec.md) - Securiser les communications IP.

## 3. Etudier les attaques reseau

19. [ARP Spoofing](/pages/notes/arp-spoofing.md) - Comprendre une attaque locale de niveau 2.
20. [Man-in-the-Middle](/pages/notes/man-in-the-middle.md) - Comprendre l'interception.
21. [VLAN Hopping](/pages/notes/vlan-hopping.md) - Connaitre une attaque de segmentation.
22. [DoS & DDoS](/pages/notes/dos-ddos.md) - Comprendre le deni de service.
23. [Sensibilisation attaques DoS](/pages/notes/sensibilisation-attaques-dos.md) - Cadrer les exercices DoS en lab autorise et comprendre les observables.
24. [Attaque Brute Force](/pages/notes/attaque-brute-force-cyberattaque.md) - Comprendre l'essai massif d'identifiants.
25. [Attaque Evil Twin](/pages/notes/attaque-evil-twin-exploitation-d-un-faux-point-d-acces-wi-fi.md) - Comprendre le faux point d'acces Wi-Fi et le MITM.
26. [Hydra](/pages/notes/hydra.md) - Voir un outil lie au brute force.

## 4. Connaitre les menaces utilisateur et systeme

27. [Phishing et ingenierie sociale](/pages/notes/phishing-ingenierie-sociale.md) - Comprendre l'attaque humaine.
28. [Malware](/pages/notes/malware.md) - Revoir les familles de logiciels malveillants.
29. [Ransomware](/pages/notes/ransomware.md) - Comprendre le rançongiciel.
30. [Facteurs d'authentification](/pages/notes/facteurs-d-authentification.md) - Comprendre connaissance, possession, biometrie et MFA.
31. [MDM](/pages/notes/mdm-mobile-device-management.md) - Administrer et securiser une flotte mobile.

## 5. Analyser les risques et auditer

32. [Recapitulatif cybersecurite](/pages/notes/recapitulatif-cybersecurite.md) - Reviser MITM, analyse des risques, sauvegardes, securite OS et audit SI.
33. [Analyse des risques cyber](/pages/notes/analyse-des-risques-cyber.md) - Structurer actifs, vulnerabilites, menaces, impacts et contre-mesures.

## 6. Utiliser les outils d'analyse

34. [Nmap](/pages/notes/nmap.md) - Scanner et enumerer.
35. [Wireshark](/pages/notes/wireshark.md) - Lire les paquets.
36. [Atelier Suricata pfSense](/pages/notes/atelier-suricata-pfsense.md) - Observer des alertes IDS/IPS sur le LAN pfSense.
37. [Atelier Wazuh Docker](/pages/notes/atelier-wazuh-docker.md) - Centraliser les evenements de securite dans Wazuh.

## 7. Comprendre la crypto utile au reseau

38. [Algorithmes chiffrement et hachage](/pages/notes/algorithmes-chiffrement-et-hachage.md) - Relier AES, RSA, ECC, SHA, TLS et VPN aux objectifs de securite.
39. [AES](/pages/notes/aes.md) - Comprendre le chiffrement symetrique.
40. [MD5 et SHA](/pages/notes/md5-sha.md) - Comprendre les fonctions de hachage.
41. [Derivation de cle](/pages/notes/derivation-de-cle.md) - Comprendre la transformation de secrets.
42. [SSL - TLS](/pages/notes/ssl-tls.md) - Comprendre la securisation web.
43. [SMTPS](/pages/notes/smtps.md) - Appliquer TLS a la messagerie.
44. [OpenSSL](/pages/notes/openssl.md) - Manipuler certificats et crypto.
45. [PGP](/pages/notes/pgp-pretty-good-privacy.md) - Chiffrer et signer emails ou fichiers.

## Validation

Tu sais que ce parcours est acquis si tu peux partir d'un service expose et expliquer ses risques, les attaques probables, les protections reseau, les traces a observer et les briques cryptographiques impliquees.





