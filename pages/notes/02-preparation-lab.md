# 02 — Préparation du lab (VirtualBox + Debian 13)

> [!NOTE] Objectif de cette section
> Préparer l'environnement de lab : créer une VM VirtualBox avec Debian 13, configurer les deux interfaces réseau, et se connecter en SSH depuis la machine hôte.

---

## Pourquoi deux cartes réseau ?

| Interface | Type VirtualBox | Rôle |
|-----------|----------------|------|
| `enp0s3` | **NAT** | Accès internet — télécharger paquets et mises à jour |
| `enp0s8` | **Host-Only** | Connexion SSH depuis le poste formateur + accès à l'interface web GLPI |

```
┌─────────────────────────────────────┐
│         Machine hôte (toi)          │
│  Navigateur ──┐   Terminal SSH ──┐  │
└───────────────┼──────────────────┼──┘
                │                  │
         ┌──────▼──────────────────▼──────┐
         │   Réseau Host-Only (vboxnet0)  │
         │          │
         └──────────────┬─────────────────┘
                        │ enp0s8
                ┌───────▼────────┐
                │  VM Debian 13  │
                │  Serveur GLPI  │
                └───────┬────────┘
                        │ enp0s3 (NAT)
                ┌───────▼────────┐
                │    Internet    │
                └────────────────┘
```

> [!TIP] Pourquoi pas un seul réseau en bridge ?
> Le mode **bridge** dépend du réseau physique — IP qui change, réseau d'entreprise qui bloque.
> **NAT + Host-Only** est portable et fonctionne partout, sans toucher à l'infrastructure existante.

---

## Création de la VM VirtualBox

### Paramètres recommandés

| Paramètre | Valeur |
|-----------|--------|
| Nom | `glpi-server` |
| Type | Linux — Debian (64-bit) |
| RAM | 2048 Mo minimum |
| Disque | 20 Go (VDI, dynamique) |
| Carte réseau 1 | **NAT** |
| Carte réseau 2 | **Host-Only** (vboxnet0) |

### Vérifier le DHCP Host-Only dans VirtualBox

`Fichier → Gestionnaire de réseau hôte → vboxnet0 → onglet Serveur DHCP`

- désactivé le serveur DHCP : **décoché**


---

## Installation de Debian 13

### Points importants pendant l'installation

> [!WARNING]
> L'installateur Debian ne configure que la **première carte réseau** (enp0s3/NAT) par défaut.
> `enp0s8` sera DOWN à la fin — c'est normal, on la configure juste après.

- **Hostname** : `glpi`
- **Domaine** : `lab.local`
- **Partitionnement** : guidé — disque entier
- **Environnement** : décocher tout sauf **"Utilitaires usuels du système"** — pas besoin d'interface graphique

---

## Activation de l'interface Host-Only (enp0s8)

### Pourquoi enp0s8 est DOWN ?

L'installateur Debian ne configure que l'interface qui a répondu au DHCP pendant l'installation (`enp0s3`).
`enp0s8` existe mais n'est pas déclarée dans la configuration réseau.

### Vérifier l'état actuel

```bash
ip a
```

- `enp0s3` → UP avec `10.0.2.15` (NAT)
- `enp0s8` → DOWN — aucune IP

### Éditer `/etc/network/interfaces`

```bash
nano /etc/network/interfaces
```

Ajouter à la fin :

```
# hostonly
auto enp0s8
iface enp0s8 inet static
	address 192.168.56.100/24
```

Le fichier complet doit ressembler à :

```
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet6 auto

# hostonly
auto enp0s8
iface enp0s8 inet static
	address 192.168.56.100/24
```

### Appliquer et vérifier

```bash
systemctl restart networking
ip a show enp0s8
```

`enp0s8` doit être UP avec une IP dans l'adresse statique' `192.168.56.100`

> [!TIP] Noter l'IP de enp0s8
> Cette IP sera utilisée pour se connecter en SSH et accéder à GLPI depuis le navigateur.
> Elle peut changer au redémarrage si le bail DHCP expire — pour un lab c'est acceptable.

---

## Installation et connexion SSH

```bash
apt install -y openssh-server
systemctl enable --now ssh
```

Depuis la machine hôte :

```bash
ssh utilisateur@192.168.56.10x   # remplacer par l'IP réelle de enp0s8
```

> [!TIP] Travailler en SSH plutôt que dans la console VirtualBox
> Le copier-coller fonctionne en SSH — indispensable pour les commandes longues.

---

## Activer sudo pour l'utilisateur

Sur Debian, l'installateur n'ajoute **pas** l'utilisateur au groupe `sudo` si un mot de passe root a été défini. Il faut le faire manuellement.

```bash
su -                              # passer root (mot de passe root demandé)
apt install -y sudo
usermod -aG sudo stagiaire            # remplacer "dawan" par le nom d'utilisateur réel
```

> [!NOTE] Pourquoi `su -` et pas juste `su` ?
> `su -` charge l'environnement complet de root (PATH, variables…). `su` seul garde l'environnement de l'utilisateur courant — certaines commandes peuvent ne pas être trouvées.

Se déconnecter puis reconnecter SSH pour que le groupe soit pris en compte :

```bash
exit   # ou Ctrl+D
```

Vérifier :

```bash
sudo whoami   # doit répondre : root
```

---

## Récapitulatif — état attendu

```bash
ip a
```

| Interface | État | IP | Rôle |
|-----------|------|----|------|
| `enp0s3` | UP | 10.0.2.15 | NAT → internet |
| `enp0s8` | UP | 192.168.56.10x | Host-Only → SSH + GLPI |

```bash
ping -c 3 8.8.8.8          # ✓ internet accessible via enp0s3
ssh user@192.168.56.10x    # ✓ SSH depuis la machine hôte
```

---

## Liens utiles

- [Télécharger Debian 13](https://www.debian.org/distrib/)
- [Documentation VirtualBox — Réseau](https://www.virtualbox.org/manual/ch06.html)

---