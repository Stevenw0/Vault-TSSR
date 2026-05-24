# 🔗 SLIP — Serial Line Internet Protocol

## 📌 Introduction

**SLIP (Serial Line Internet Protocol)** est un protocole réseau permettant de **transporter des paquets IP sur une connexion série**.

Il a été utilisé historiquement pour connecter un ordinateur à Internet via :

- ligne téléphonique
- modem
- liaison série

SLIP est aujourd'hui **largement remplacé par PPP (Point-to-Point Protocol)**.

---

# 🧠 Principe de fonctionnement

SLIP permet d'encapsuler des paquets IP dans une **liaison série simple**.

Fonctionnement :

```
Application
 ↓
IP
 ↓
SLIP
 ↓
Liaison série
 ↓
Modem / câble série
```

SLIP ne gère que **le transport des paquets IP**.

---

# 📊 Caractéristiques de SLIP

| Caractéristique | Description |
|---|---|
| Type | protocole de liaison |
| Transport | paquets IP |
| Support | connexion série |
| Configuration | manuelle |
| Authentification | non supportée |

---

# ⚙️ Fonctionnement technique

SLIP fonctionne en envoyant des paquets IP encapsulés entre deux marqueurs.

| Marqueur | Valeur |
|---|---|
| END | fin de paquet |
| ESC | caractère d'échappement |

Cela permet de délimiter les paquets transmis sur la liaison série.

---

# 📦 Structure d'une trame SLIP

Une trame SLIP est très simple.

| Élément | Description |
|---|---|
| END | début de trame |
| paquet IP | données |
| END | fin de trame |

Contrairement à d'autres protocoles, SLIP **n'ajoute presque aucun en-tête**.

---

# ⚠️ Limites de SLIP

SLIP possède plusieurs limitations importantes.

| Limite | Description |
|---|---|
| pas d'authentification | aucune sécurité |
| pas de négociation | configuration manuelle |
| pas de compression | faible optimisation |
| pas de gestion d'erreur | dépend de la couche inférieure |

---

# 📊 SLIP vs PPP

| Caractéristique | SLIP | PPP |
|---|---|---|
| Authentification | Non | Oui |
| Configuration IP | Manuelle | Automatique |
| Compression | Non | Oui |
| Gestion erreurs | Non | Oui |
| Utilisation actuelle | Rare | Standard |

PPP a remplacé SLIP car il est **plus complet et sécurisé**.

---

# ⚙️ Utilisation historique

SLIP était utilisé pour :

| Utilisation | Exemple |
|---|---|
| accès Internet | modem RTC |
| connexion distante | ligne série |
| routeurs anciens | réseaux universitaires |

---

# 🔎 Exemple de configuration SLIP (historique)

Sous Linux :

```bash
slattach -p slip -s 9600 /dev/ttyS0
```

Puis configuration IP :

```bash
ifconfig sl0 192.168.1.1 pointopoint 192.168.1.2 up
```

---

# 🧾 Résumé

| Élément | Description |
|---|---|
| SLIP | protocole IP sur liaison série |
| usage | connexions modem anciennes |
| fonctionnement | encapsulation simple |
| limitation | aucune sécurité |
| remplaçant | PPP |

SLIP est un protocole **simple mais obsolète**, remplacé aujourd'hui par **PPP et d'autres technologies modernes**.