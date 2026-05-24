# Chapitre 2 — Ce que fait ton navigateur avant même de charger la page

Tu tapes `google.com`. La première question que se pose ton ordinateur n'est pas *"comment envoyer des données ?"* — c'est *"mais c'est quoi, l'adresse de Google ?"*

Avant qu'une seule donnée parte vers Google, deux choses doivent se passer :
1. **Ton PC doit savoir quelle IP contacter** → c'est le rôle du **DNS**
2. **Ton PC doit avoir lui-même une adresse IP** → c'est le rôle du **DHCP**

Ce chapitre couvre les services qui rendent Internet utilisable par des humains.

---

## 2.1 DHCP — Comment ton PC obtient son adresse IP

<iframe width="560" height="315" src="https://www.youtube.com/embed/yH9UvkeAz-I?si=RToBx2HcZQl-35zg" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Quand tu connectes ton PC à un réseau, il n'a pas d'adresse IP. Il en demande une automatiquement au **serveur DHCP** — généralement ta box ou un serveur d'entreprise.

### Ce que DHCP attribue

- Une **adresse IP** (ex. `192.168.1.42`)
- Le **masque de sous-réseau** (ex. `255.255.255.0`)
- La **passerelle par défaut** — l'adresse du routeur qui donne accès à Internet
- Les **serveurs DNS** à utiliser
- Une durée de **bail** — passé ce délai, l'adresse doit être renouvelée

### Le processus DORA

Le dialogue entre le client et le serveur DHCP se déroule en 4 étapes :


> [!succes]
> **APIPA** : si aucun serveur DHCP ne répond, Windows s'attribue automatiquement une adresse `169.254.x.x`. Le réseau local fonctionne mais pas Internet. C'est souvent le signe d'un problème de connexion au serveur DHCP.


---

## 2.2 DNS — Comment ton PC traduit "google.com" en adresse IP

<iframe width="560" height="315" src="https://www.youtube.com/embed/qzWdzAvfBoo?si=DHf9vBPBi0BpvlW0" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Les machines communiquent via des **adresses IP** (ex. `142.250.74.46`). Les humains préfèrent des noms (ex. `google.com`). Le **DNS** (Domain Name System) fait la traduction.


### Comment ça marche

1. Tu tapes `www.google.com` dans le navigateur.
2. Ton PC interroge le **serveur DNS** que lui a donné DHCP.
3. Le serveur DNS retourne l'adresse IP correspondante.
4. Ton navigateur peut maintenant contacter le serveur Google.

### La hiérarchie DNS

Le DNS est un système distribué en arbre. Si ton serveur DNS ne connaît pas la réponse, il remonte la hiérarchie :

```
Serveurs racine (.)
    └── TLD : .fr, .com, .org, .net
          └── Serveur autoritaire du domaine (google.com)
                └── Serveur récursif (chez toi ou ton FAI)
```

### Les types d'enregistrements

|Type|Rôle|Exemple|
|---|---|---|
|**A**|Nom → IPv4|`google.com → 142.250.74.46`|
|**AAAA**|Nom → IPv6|`google.com → 2607:f8b0::...`|
|**MX**|Serveur de messagerie|`smtp.google.com`|
|**CNAME**|Alias (redirection de nom)|`www → google.com`|
|**PTR**|IP → Nom (résolution inverse)|`142.250.74.46 → google.com`|

### Tester le DNS

```bash
nslookup google.com      # Windows / Linux — requête simple
dig google.com           # Linux — résultat détaillé
dig -x 8.8.8.8           # Résolution inverse : IP → nom
```

:::info
`8.8.8.8` et `1.1.1.1` sont des serveurs DNS publics (Google et Cloudflare). Si tu veux bypasser le DNS de ton FAI, tu peux les configurer manuellement.
:::

---

## 2.3 HTTP et HTTPS — Le langage du web

Une fois que le navigateur connaît l'adresse IP de Google, il parle avec le serveur en **HTTP** (HyperText Transfer Protocol).

<iframe width="560" height="315" src="https://www.youtube.com/embed/WGdOWtKL5nA?si=nTf1mIx7M3n4Fs2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### HTTP : le protocole requête/réponse

```
Navigateur  →  GET /search?q=réseaux HTTP/1.1  →  Serveur Google
Navigateur  ←  200 OK + page HTML               ←  Serveur Google
```

Le navigateur envoie une **requête** (ce qu'il veut), le serveur répond avec un **code de statut** et les données.

### Codes de statut courants

|Code|Signification|
|---|---|
|`200 OK`|Succès|
|`301 Moved Permanently`|Redirection permanente|
|`404 Not Found`|Page introuvable|
|`500 Internal Server Error`|Erreur côté serveur|

### HTTPS : HTTP + chiffrement

**HTTPS** = HTTP + **TLS** (Transport Layer Security).

Sans HTTPS, les données circulent en clair sur le réseau — n'importe qui sur le même Wi-Fi peut les lire. Avec HTTPS, elles sont chiffrées entre le navigateur et le serveur.

```
Navigateur  →  [TLS chiffre tout]  →  Serveur
```

Le **cadenas** dans la barre d'adresse signifie que TLS est actif.

:::warning
Sur un Wi-Fi public (café, gare) sans HTTPS, tout ton trafic — mots de passe inclus — est lisible par n'importe qui sur le réseau. Toujours vérifier le cadenas.
:::

---

## 2.4 Les autres protocoles applicatifs

Les mêmes mécanismes (requête/réponse, identification par nom, chiffrement optionnel) s'appliquent à tous les services réseau.

### Email

|Protocole|Rôle|Port|
|---|---|---|
|**SMTP**|Envoyer un mail|25 / 587 (avec TLS)|
|**IMAP**|Lire les mails (synchronisé)|143 / 993|
|**POP3**|Télécharger les mails|110 / 995|

```
Ton client mail  →  SMTP  →  Serveur mail de l'expéditeur
                           →  Serveur mail du destinataire
Ton client mail  ←  IMAP  ←  Serveur mail (lecture)
```

### Transfert de fichiers et accès distant

|Protocole|Rôle|Sécurisé|
|---|---|---|
|**FTP**|Transfert de fichiers|Non (→ FTPS/SFTP)|
|**SSH**|Accès distant sécurisé au terminal|Oui|
|**RDP**|Bureau à distance Windows|Chiffré|

---

## 2.5 VPN — Accéder à un réseau privé depuis Internet

<iframe width="560" height="315" src="https://www.youtube.com/embed/MpP02aZPSNQ?si=maEgH3UBc8gr3nLq" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Un **VPN** (Virtual Private Network) crée un **tunnel chiffré** entre ton PC et un réseau distant, comme si tu étais physiquement branché sur place.

### Cas d'usage

|Type|Description|Exemple|
|---|---|---|
|**Accès distant**|Employé → réseau d'entreprise|Télétravail|
|**Site-à-site**|Agence A → Agence B|Deux bureaux d'une même entreprise|

### Protocoles VPN courants

|Protocole|Caractéristiques|
|---|---|
|**WireGuard**|Moderne, rapide, léger — recommandé|
|**OpenVPN**|Flexible, open source, très répandu|
|**IPSec**|Standard entreprise, très sécurisé|
|**L2TP/IPSec**|Combinaison fréquente sur Windows|

:::success
**Ce que tu retiens de ce chapitre**
- **DHCP** attribue automatiquement IP, masque, passerelle et DNS (processus DORA).
- **DNS** traduit les noms de domaine en adresses IP — sans lui, il faudrait retenir des adresses numériques.
- **HTTP** est le langage du web ; **HTTPS** l'ajoute le chiffrement via TLS.
- **VPN** crée un tunnel sécurisé pour relier des machines distantes.

**La question suivante** : ces services échangent des données — mais comment s'assure-t-on qu'elles arrivent sans erreur et dans le bon ordre ? → Chapitre 3 : la couche Transport.
:::
