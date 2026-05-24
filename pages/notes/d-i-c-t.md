# 🔐 D.I.C.T — Piliers de la sécurité de l’information

---

# 📌 Définition

Le modèle **D.I.C.T** représente les 4 objectifs fondamentaux en cybersécurité :

```
D = Disponibilité
I = Intégrité
C = Confidentialité
T = Traçabilité
```

👉 extension de la triade CIA avec la traçabilité

---

# 🧠 Principe

```
Système sécurisé = D + I + C + T respectés
```

---

# 🎯 Objectifs

| Pilier | Description |
|---|---|
| Disponibilité | accès aux services |
| Intégrité | données fiables |
| Confidentialité | accès restreint |
| Traçabilité | suivi actions |

---

# ⚡ 1️⃣ Disponibilité (D)

## 📌 Définition

Garantir que les systèmes et données sont accessibles

---

## 📊 Exemples

| Cas | Description |
|---|---|
| serveur online | service accessible |
| backup | restauration |
| HA | redondance |

---

## 🛡️ Moyens

| Solution | Description |
|---|---|
| redondance | cluster |
| sauvegardes | backup |
| PRA/PCA | reprise |
| monitoring | supervision |

---

# 🧩 2️⃣ Intégrité (I)

## 📌 Définition

Garantir que les données ne sont pas modifiées

---

## 📊 Exemples

| Cas | Description |
|---|---|
| hash | vérification |
| signature | validation |
| logs | contrôle |

---

## 🛡️ Moyens

| Solution | Description |
|---|---|
| hash | SHA |
| signature | numérique |
| contrôle accès | modification |

---

# 🔐 3️⃣ Confidentialité (C)

## 📌 Définition

Empêcher l’accès non autorisé aux données

---

## 📊 Exemples

| Cas | Description |
|---|---|
| chiffrement | TLS |
| mot de passe | auth |
| VPN | sécurité |

---

## 🛡️ Moyens

| Solution | Description |
|---|---|
| chiffrement | AES |
| IAM | accès |
| MFA | double auth |

---

# 👀 4️⃣ Traçabilité (T)

## 📌 Définition

Permet de :

- suivre les actions
- identifier les responsables
- analyser les incidents

---

## 📊 Exemples

| Cas | Description |
|---|---|
| logs | activité |
| audit | sécurité |
| SIEM | analyse |

---

## 🛡️ Moyens

| Solution | Description |
|---|---|
| logs | journaux |
| audit | contrôle |
| SIEM | corrélation |

---

# 📊 D.I.C.T vs CIA

| Modèle | Éléments |
|---|---|
| CIA | Confidentialité, Intégrité, Disponibilité |
| DICT | + Traçabilité |

---

# ⚠️ Risques si non respect

| Pilier | Risque |
|---|---|
| Disponibilité | panne / DDoS |
| Intégrité | modification |
| Confidentialité | fuite |
| Traçabilité | impossible d’analyser |

---

# ⚠️ Bonnes pratiques

> [!warning]

- appliquer les 4 piliers
- surveiller les logs
- sécuriser les accès
- tester la résilience

---

# 📊 Exemple concret

## Entreprise

| Pilier | Mise en place |
|---|---|
| D | backup + HA |
| I | hash |
| C | TLS + MFA |
| T | logs + SIEM |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| D | disponibilité |
| I | intégrité |
| C | confidentialité |
| T | traçabilité |
| usage | cybersécurité |

---

# 🎯 Conclusion

Le modèle D.I.C.T permet :

- une sécurité complète
- une meilleure gestion des incidents
- une traçabilité des actions

👉 indispensable en :

🔥 entreprise  
🔥 cybersécurité  
🔥 audit IT