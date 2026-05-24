## Manipulation des archives (tar, gzip…)

**Compression/Décompression de fichiers**

Les utilitaires présentés ne gèrent qu’un fichier à la fois :

- gzip
- bzip2
- xz, lzma
- gunzip
- bunzip2
- unxz, unlzma
- zgrep, zless, zcat, zcut, …
- xzgrep, xzless, xzcat, …

**Utilitaires archivages**

Permettent d’assembler plusieurs fichiers en un seul -> compression

- tar : tape archiver
- cpio : copy input output (très peu utilisé)

**Gestion de tar**

_**Création d’une archive**_

```
tar -cf nom_archive liste des objets à archiver
```

_Remarque_

Si le nom de l’archive est - alors le résultat sera envoyé sur la sortie standard.  
Exemple : évaluation de la taille d’une archive prévue

```
tar -cf - /etc | wc -c
```

_**Visualisation du contenu d’une archive**_

```
tar -tf nom_archive
```

_**Extraction d’une archive**_

```
tar -xf nom_archive
```

_Remarque_

Si le nom de l’archive est - alors l’extraction se fera sur le flux provenant de l’entrée standard