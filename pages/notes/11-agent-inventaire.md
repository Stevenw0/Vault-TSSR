# 11 — L'agent d'inventaire

> [!NOTE] Objectif de cette section
> Comprendre le fonctionnement de l'inventaire natif GLPI 11, installer l'agent sur le serveur Windows du Fournil Doré et vérifier la remontée automatique.

---

## GLPI Inventory — natif depuis GLPI 11

Depuis GLPI 10, l'inventaire automatique est **intégré nativement** dans le cœur de l'application. Il n'y a **aucun plugin à installer**.

Il repose sur deux composants :

| Composant | Rôle |
|-----------|------|
| **Moteur natif GLPI** | Reçoit et traite les données d'inventaire — `Administration` → `Inventaire` |
| **Agent `glpi-agent`** | Installé sur chaque machine, collecte et envoie les données à GLPI |

```
┌──────────────────────────┐
│   Windows Server 2022    │  ──► HTTP(S) ──►  GLPI (moteur natif)
│   glpi-agent (service)   │                      │
└──────────────────────────┘                       ▼
                                          Parc → Ordinateurs
                                          (fiche créée/mise à jour)
```

> [!NOTE] FusionInventory vs GLPI Inventory
> FusionInventory a été archivé en avril 2024. Ne plus l'installer. L'agent à utiliser est **`glpi-agent`**, disponible sur [GitHub](https://github.com/glpi-project/glpi-agent/releases).

---

## Vérifier que l'inventaire est activé

`Administration` → `Inventaire` → onglet **Configuration**

Vérifier que **Activer l'inventaire** est coché — c'est le cas par défaut dans GLPI 11.

---

## Installer l'agent sur Windows Server

### Méthode 1 — Winget (recommandée)

Winget est le gestionnaire de paquets intégré à Windows 10/11 et Windows Server 2019+. Une seule commande suffit, depuis un **terminal en administrateur** :

```powershell
winget install GLPI-Project.GLPI-Agent --override "/quiet SERVER=https://glpi.kaya.ovh/ ADDLOCAL=ALL ADD_FIREWALL_EXCEPTION=1 RUNNOW=1"
```

| Paramètre | Rôle |
|-----------|------|
| `GLPI-Project.GLPI-Agent` | Identifiant officiel du paquet dans le registre Winget |
| `--override` | Remplace tous les arguments par défaut de l'installeur MSI |
| `/quiet` | Installation silencieuse — aucune fenêtre, aucun assistant |
| `SERVER=` | URL du serveur GLPI que l'agent doit contacter |
| `ADDLOCAL=ALL` | Installe tous les composants (agent + inventaire réseau + déploiement) |
| `ADD_FIREWALL_EXCEPTION=1` | Ouvre automatiquement le port 62354 dans le pare-feu Windows |
| `RUNNOW=1` | Force un inventaire immédiatement après l'installation |

> [!TIP] Vérifier que Winget est disponible
> ```powershell
> winget --version
> ```
> Si la commande n'est pas reconnue, passer à la méthode MSI ci-dessous.

> [!WARNING] URL de GLPI
> Adapter l'URL selon l'environnement. En lab avec la VM Docker : `http://192.168.56.101/`

---

### Méthode 2 — Installeur MSI

Depuis le navigateur du Windows Server :

```
https://github.com/glpi-project/glpi-agent/releases
```

Télécharger le fichier **`.msi`** 64 bits : `glpi-agent-X.X-x64.msi`

Double-cliquer sur le `.msi` et suivre l'assistant. À l'étape de configuration renseigner :

| Champ | Valeur |
|-------|--------|
| **Server** | `http://[IP_DE_GLPI]/` |
| **Tag** | *(laisser vide)* |

---

### Forcer un inventaire immédiat

**Option 1 — Interface web de l'agent**

Depuis le navigateur du serveur Windows :
```
http://localhost:62354
```
Cliquer sur **Force an inventory**.

**Option 2 — Ligne de commande** (invite de commandes en administrateur)

```cmd
"C:\Program Files\GLPI-Agent\glpi-agent.exe" --server http://[IP_DE_GLPI]/ --force
```

---

## Suivre les remontées dans GLPI

### Voir les agents connectés

`Administration` → `Inventaire` → lien **Agents** (en haut de la page de Configuration)

| Colonne | Signification |
|---------|--------------|
| Nom | Nom de la machine (= nom de l'agent) |
| Dernier contact | Date et heure du dernier inventaire |
| Statut | OK / En erreur |
| Entité | Entité d'affectation |

### Voir la fiche créée automatiquement

`Parc` → `Ordinateurs` → chercher le nom du serveur

La fiche est créée ou mise à jour avec :
- CPU, RAM, disques durs
- Carte réseau et adresse MAC/IP
- Logiciels installés (onglet **Logiciels**)
- Système d'exploitation (version exacte, numéro de build)

---

## Les règles d'import

Les règles définissent comment GLPI traite un inventaire entrant : créer un nouvel objet, mettre à jour un existant, et dans quelle entité le placer.

`Administration` → `Inventaire` → lien **Règles**

> [!TIP] Règles par défaut
> Les règles par défaut suffisent pour un lab. En production, on crée des règles d'affectation automatique par entité (ex: toute machine dont le nom commence par "PC-BOUTIQUE" va dans l'entité "Boutique"). Ce sujet est traité dans le chapitre sur le moteur de règles.

---

## Atelier — Remonter l'inventaire de SRV-FOURNIL-01

### Sur le serveur Windows

1. Ouvrir un terminal **en administrateur**
2. Installer l'agent via Winget (remplacer l'URL si besoin) :
   ```powershell
   winget install GLPI-Project.GLPI-Agent --override "/quiet SERVER=http://192.168.56.100/ ADDLOCAL=ALL ADD_FIREWALL_EXCEPTION=1 RUNNOW=1"
   ```
   *(Si Winget n'est pas disponible : télécharger le `.msi` depuis `https://github.com/glpi-project/glpi-agent/releases` et suivre l'assistant en renseignant l'URL du serveur)*
3. `RUNNOW=1` déclenche l'inventaire automatiquement — vérifier directement dans GLPI sans passer par `http://localhost:62354`

### Dans GLPI

4. `Administration` → `Inventaire` → **Agents** : vérifier que `SRV-FOURNIL-01` apparaît
5. `Parc` → `Ordinateurs` : retrouver la fiche de `SRV-FOURNIL-01`
6. Explorer les onglets :
   - **Composants** : CPU, RAM
   - **Volumes** : disques et partitions
   - **Logiciels** : liste des logiciels installés
   - **Connexions réseau** : adresse MAC et IP
7. Comparer avec la fiche saisie manuellement au chapitre 09 : quelles informations ont été enrichies automatiquement ?

---

## Liens utiles

- [Documentation glpi-agent](https://glpi-agent.readthedocs.io/en/latest/)
- [Releases glpi-agent — GitHub](https://github.com/glpi-project/glpi-agent/releases)
- [Agent GLPI | FAQ | Help Center GLPI](https://help.glpi-project.org/faq/fr/glpi/glpi-agent)

---