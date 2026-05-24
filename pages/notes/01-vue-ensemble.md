# Chapitre 1 — Que se passe-t-il quand tu tapes google.com ?

C'est la question de départ de ce cours. Pas "qu'est-ce qu'un réseau ?" — ça, tu le sais déjà. On va plutôt partir de quelque chose que tu fais des dizaines de fois par jour et comprendre **exactement** ce qui se passe sous le capot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5ee6W1ODvFU?si=5raNg_0tJszQocIz" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## La scène

Tu ouvres Chrome. Tu tapes `google.com`. Tu appuies sur Entrée.

En moins d'une seconde, la page s'affiche. Mais entre ta frappe et l'affichage, il s'est passé **au moins 8 étapes** impliquant des dizaines d'équipements, des protocoles différents et plusieurs couches de technologie. Ce cours va les décortiquer une à une.

Voici un avant-goût du voyage :

```
[Ton navigateur]
      │  "Je veux google.com"
      ↓
[DNS] → traduit "google.com" en adresse IP (142.250.74.46)
      │
      ↓
[TCP] → établit une connexion fiable avec le serveur Google
      │
      ↓
[IP]  → guide le paquet à travers Internet jusqu'à Google
      │
      ↓
[Ethernet / Wi-Fi] → transporte les données sur ton réseau local
      │
      ↓
[Câble / ondes] → transmet les signaux physiques
      │
      ↓
[Serveur Google] → renvoie la page HTML
```

Ce schéma, c'est le cours entier. Chaque ligne est un chapitre.

---

## Pourquoi découper en couches ?

Parce que le problème est **trop complexe** pour être résolu d'un seul coup.

Imagine que tu construises une maison. Tu ne fais pas tout en même temps : d'abord les fondations, puis la structure, puis l'électricité, puis la plomberie, puis les finitions. Chaque corps de métier fait son travail de façon indépendante, en s'appuyant sur ce que le précédent a posé.

Les réseaux fonctionnent pareil. On découpe le problème en **couches**, chacune avec une responsabilité précise. Une couche ne sait pas comment fonctionne celle du dessous — elle lui fait confiance et utilise ses services.

Ce découpage s'appelle le **modèle OSI** (7 couches) ou **TCP/IP** (4 couches en pratique).



:::info
Dans ce cours, on va parcourir les couches **de haut en bas** — en commençant par ce que tu connais (navigateur, mail, DNS) pour aller vers ce que tu ne vois pas (câbles, signaux électriques). C'est l'ordre le plus naturel pour apprendre.
:::

---

## Les étendues : de ta poche à la planète

Avant de plonger, situe-toi géographiquement. Un réseau peut couvrir quelques centimètres ou la planète entière.



|Sigle|Portée|Exemple concret|
|---|---|---|
|**PAN**|Ta poche, ton bureau|Casque Bluetooth, montre connectée|
|**LAN**|Ton bâtiment|Réseau Wi-Fi de l'entreprise|
|**MAN**|Ta ville|Réseau fibre d'un opérateur local|
|**WAN**|La planète|Internet|

<iframe width="560" height="315" src="https://www.youtube.com/embed/c0Xj09s5hYA?si=9SB7DfBIeXyB4iml" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

Quand tu tapes `google.com`, ta requête commence sur ton **LAN** (ta box + ton PC), traverse un **WAN** (Internet) et arrive sur un serveur situé dans un datacenter quelque part dans le monde.

---

## Les deux architectures fondamentales

**Client/serveur** — le modèle dominant : un serveur central fournit des services (web, mail, fichiers) à des clients qui les consomment. Google, YouTube, ton serveur de fichiers en entreprise : tout ça c'est du client/serveur.

**Pair-à-pair (P2P)** — chaque machine est à la fois client et serveur. BitTorrent, certains jeux multijoueurs. Moins courant en entreprise.

---

## Ce qui t'attend dans la suite

| Chapitre | Question à laquelle on répond |
|---|---|
| **2 — Services applicatifs** | Comment ton PC sait-il quelle IP correspond à google.com ? |
| **3 — Transport** | Comment garantir que les données arrivent sans erreur ? |
| **4 — Réseau IP** | Comment un paquet trouve-t-il son chemin jusqu'à Google ? |
| **5 — Liaison** | Comment les données circulent sur ton réseau local ? |
| **6 — Physique** | Comment les bits voyagent-ils sur un câble ou dans les airs ? |
| **7 — Synthèse** | Récap complet du voyage + sécurité |

> [!success]
> **L'idée centrale de ce cours** : un réseau, c'est un problème découpé en couches. Chaque couche résout un sous-problème précis et s'appuie sur la couche du dessous sans avoir besoin de savoir comment elle fonctionne.

