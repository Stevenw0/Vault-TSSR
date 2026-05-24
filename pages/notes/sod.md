# 🔐 SoD — Segregation of Duties (Séparation des tâches)

---

# 📌 Définition

La **Segregation of Duties (SoD)** est un principe de sécurité consistant à :

- **répartir les responsabilités**
- entre plusieurs personnes
- pour éviter abus et fraudes

---

# 🧠 Principe

```
Une personne ≠ contrôle complet d’un processus
```

👉 séparation des rôles critiques

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| réduire fraude | interne |
| limiter erreurs | humaines |
| améliorer contrôle | sécurité |
| conformité | audit |

---

# 📊 Principe clé

👉 Aucune personne ne doit :

- créer
- valider
- exécuter

👉 une même action critique

---

# 📦 Exemple simple

## ❌ Mauvaise pratique

| Action | Personne |
|---|---|
| créer facture | Alice |
| valider facture | Alice |
| payer facture | Alice |

👉 risque élevé

---

## ✅ Bonne pratique

| Action | Personne |
|---|---|
| créer facture | Alice |
| valider facture | Bob |
| payer facture | Charlie |

👉 séparation respectée

---

# 🧩 Types de séparation

| Type | Description |
|---|---|
| fonctionnelle | rôles différents |
| organisationnelle | équipes |
| technique | systèmes |
| temporelle | validation différée |

---

# 🔐 SoD en IT

| Domaine | Exemple |
|---|---|
| admin système | accès séparé |
| AD | IAM / PAM |
| DevOps | dev ≠ prod |
| base de données | lecture ≠ écriture |

---

# ⚙️ Exemple en entreprise

## Accès système

| Rôle | Accès |
|---|---|
| admin | config |
| user | usage |
| audit | lecture logs |

---

# 🛡️ Moyens de mise en place

| Solution | Description |
|---|---|
| IAM | gestion identités |
| RBAC | rôles |
| PAM | comptes privilégiés |
| workflow | validation |

---

# ⚠️ Risques sans SoD

| Risque | Description |
|---|---|
| fraude | interne |
| erreur | critique |
| abus | privilèges |
| non conformité | audit |

---

# 📊 SoD vs principe du moindre privilège

| Élément | SoD | Moindre privilège |
|---|---|---|
| objectif | séparation |
| focus | tâches |

---

| Élément | Moindre privilège |
|---|---|
| objectif | limiter accès |
| focus | permissions |

---

👉 complémentaires

---

# 🧠 Bonnes pratiques

> [!warning]

- définir rôles clairs
- séparer tâches critiques
- utiliser RBAC
- auditer régulièrement
- surveiller accès

---

# 📊 Résumé

| Élément | Description |
|---|---|
| SoD | séparation tâches |
| objectif | sécurité |
| usage | entreprise |
| risque | fraude |
| solution | IAM |

---

# 🎯 Conclusion

La séparation des tâches permet :

- de limiter les abus
- d’augmenter la sécurité
- de garantir la conformité

👉 indispensable en :

🔥 cybersécurité  
🔥 finance  
🔥 IT / entreprise