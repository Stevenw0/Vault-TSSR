# 🕸️ ARP Spoofing — Attaque réseau locale

---

# 📌 Définition

L’**ARP Spoofing** (ou ARP Poisoning) est une attaque consistant à :

- falsifier les tables ARP
- pour intercepter le trafic réseau

---

# 🧠 Principe

```
Victime → Attaquant → Routeur
```

👉 l’attaquant se fait passer pour :

- le routeur
- ou une autre machine

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| interception | trafic |
| espionnage | données |
| MITM | attaque |
| modification | paquets |

---

# 📊 Rappel ARP

## Fonction

ARP permet de :

- associer une IP à une adresse MAC

---

## Exemple

```
192.168.1.1 → AA:BB:CC:DD:EE
```

---

# ⚙️ Fonctionnement de l’attaque

## Étapes

1. envoi faux messages ARP
2. modification table ARP victime
3. redirection trafic vers attaquant
4. interception / modification

---

# 📦 Exemple

```
Victime pense :
Routeur = Attaquant
```

---

## Schéma

```
PC → Attaquant → Routeur
```

---

# 🌐 Zone d’attaque

| Réseau | Risque |
|---|---|
| LAN | élevé |
| WiFi public | très élevé |
| entreprise | possible |

---

# ⚠️ Impact

| Impact | Description |
|---|---|
| interception données | mots de passe |
| MITM | attaque |
| vol session | cookies |
| modification trafic | injection |

---

# 🔎 Signes d’attaque

| Indice | Exemple |
|---|---|
| ARP change souvent | anomalies |
| connexion lente | trafic |
| IP ↔ MAC incohérent | logs |
| alerte IDS | détection |

---

# 🛡️ Protection

## Techniques

| Solution | Description |
|---|---|
| ARP statique | fix |
| DHCP snooping | contrôle |
| Dynamic ARP Inspection | switch |
| segmentation | VLAN |
| IDS/IPS | détection |

---

## Bonnes pratiques

| Action | Description |
|---|---|
| utiliser HTTPS | chiffrement |
| utiliser VPN | protection |
| sécuriser switch | réseau |
| surveiller ARP | logs |

---

# 🔐 Exemple commande

```bash
arp -a
```

👉 voir la table ARP

---

# 📊 ARP Spoofing vs MITM

| Attaque | Différence |
|---|---|
| ARP spoofing | technique |
| MITM | résultat |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| ARP spoofing | attaque LAN |
| principe | falsification ARP |
| objectif | interception |
| risque | élevé |
| protection | DAI / VLAN |

---

# 🎯 Conclusion

L’ARP Spoofing :

- permet de réaliser des attaques MITM
- est efficace en réseau local

👉 pour s’en protéger :

🔥 sécuriser le réseau + chiffrer les communications