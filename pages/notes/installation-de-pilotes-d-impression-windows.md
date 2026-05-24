# Installation de pilotes d'impression Windows

## Definition

L'installation de pilotes d'impression Windows est controlee par un modele de confiance strict, car les pilotes peuvent fonctionner avec des privileges eleves et affecter la securite ou la stabilite du systeme Allow Non-Admins to Install Printers via GPO.

## Options controlees

- Pilotes deja preinstalles dans le Driver Store.
- Pilotes Type 4 user-mode, qui reduisent le besoin d'installation locale cote client.
- Serveurs d'impression de confiance via Point and Print et Package Point and Print.
- Parametres GPO, Intune Settings Catalog ou scripts PowerShell pour deployer les restrictions.

## Point de securite

Mettre `RestrictDriverInstallationToAdministrators` a `0` peut redonner de la souplesse aux utilisateurs, mais les deux sources le presentent comme un compromis risqué qui doit etre encadre par des serveurs approuves et, idealement, temporaire Intune Printer Drivers - Printer Nightmare.

## Liens utiles

- Allow Non-Admins to Install Printers via GPO
- Intune Printer Drivers - Printer Nightmare
- Group Policy
- Windows Security Operations
