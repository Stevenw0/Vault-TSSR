# 🛡️ PRA / PCA — Continuité & Reprise d’activité

---

# 📌 Définition

## PRA (Plan de Reprise d’Activité)

Permet de :

- **restaurer le SI après un incident majeur**
- redémarrer les services

---

## PCA (Plan de Continuité d’Activité)

Permet de :

- **maintenir l’activité pendant un incident**
- éviter l’interruption

---

# 🧠 Principe

```
Incident → PCA (continuer) → PRA (restaurer)
```

---

# 🎯 Objectifs

| Plan | Objectif |
|---|---|
| PCA | éviter arrêt |
| PRA | redémarrer |

---

# 📊 Différence PRA vs PCA

| Critère | PCA | PRA |
|---|---|---|
| moment | pendant incident |
| objectif | continuité |
| action | maintenir |

---

| Critère | PRA |
|---|---|
| moment | après incident |
| objectif | reprise |
| action | restaurer |

---

# ⚙️ Fonctionnement

## PCA

- bascule sur système secondaire
- maintien du service

---

## PRA

- restauration des données
- redémarrage des systèmes

---

# 📦 Exemples

| Situation | PCA | PRA |
|---|---|---|
| panne serveur | bascule HA | restauration |
| cyberattaque | isolement | récupération |
| incendie | site secondaire | reconstruction |

---

# 🔢 Indicateurs clés

| Indicateur | Description |
|---|---|
| RTO | temps de reprise |
| RPO | perte de données max |

---

## Exemple

| Indicateur | Valeur |
|---|---|
| RTO | 2h |
| RPO | 15 min |

---

# 🏗️ Architecture

```
Production → Backup → Site secondaire
```

---

# 🔐 Moyens techniques

| Solution | Description |
|---|---|
| backup | sauvegarde |
| réplication | temps réel |
| HA | haute dispo |
| cluster | redondance |
| cloud | externalisation |

---

# ⚠️ Risques

| Risque | Description |
|---|---|
| perte données | critique |
| arrêt activité | business |
| coût | élevé |
| image | impact |

---

# 🛡️ Bonnes pratiques

> [!warning]

- tester PRA régulièrement
- documenter procédures
- définir RTO/RPO
- sauvegarder hors site
- former équipes

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| entreprise | SI critique |
| banque | haute dispo |
| cloud | résilience |
| santé | continuité |

---

# 📊 PCA / PRA vs Backup

| Élément | Backup | PRA/PCA |
|---|---|---|
| rôle | données |
| objectif | stockage |
| usage | simple |

---

| Élément | PRA/PCA |
|---|---|
| rôle | continuité |
| objectif | activité |
| usage | stratégique |

---

# 📊 Résumé

| Élément | Description |
|---|---|
| PCA | continuité |
| PRA | reprise |
| RTO | temps |
| RPO | données |
| objectif | résilience |

---

# 🎯 Conclusion

Le PCA et le PRA permettent :

- de garantir la continuité des services
- de limiter les impacts des incidents
- de sécuriser l’activité de l’entreprise

👉 indispensables pour :

🔥 systèmes critiques  
🔥 entreprises  
🔥 **cybersécurité**