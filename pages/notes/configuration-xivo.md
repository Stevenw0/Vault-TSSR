# 📡 Configuration XiVO via JSON (Wizard API)

---

# 📌 Définition

Cet exercice permet de :

- configurer automatiquement XiVO
- via un fichier JSON
- envoyé à l’API Wizard

👉 méthode rapide et automatisée

---

# 🧠 Principe

```
Fichier JSON → API Wizard → Configuration XiVO → Interface Web
```

---

# 🎯 Objectifs

| Objectif | Description |
|---|---|
| automatisation | déploiement |
| gain de temps | config rapide |
| standardisation | homogène |
| simplicité | centralisée |

---

# 🧱 1️⃣ Création du fichier

## Commande

```bash
nano /root/wizard.json
```

---

## 📄 Contenu

👉 **Les collègues doivent modifier uniquement les valeurs entre guillemets**

```json
{
  "license": true,
  "admin_password": "MDP_ICI",
  "timezone": "Europe/Paris",
  "language": "fr_FR",

  "entity_name": "NOM_ORGANISATION",

  "network": {
    "hostname": "NOM_MACHINE",
    "domain": "DOMAINE_LOCAL",
    "interface": "eth0",
    "ip_address": "IP_VM_ICI",
    "netmask": "255.255.255.0",
    "gateway": "PASSERELLE_ICI",
    "nameservers": ["DNS1_ICI", "DNS2_ICI"]
  },

  "context_internal": {
    "display_name": "Appels internes",
    "number_start": "1000",
    "number_end": "2000"
  },

  "context_incall": {
    "display_name": "Appels entrants",
    "did_length": 4
  },

  "context_outcall": {
    "display_name": "Appels sortants"
  },

  "default_french_configuration": true
}
```

---

# 🚀 2️⃣ Envoi du JSON

## Commande

```bash
curl -k -X POST https://127.0.0.1:9486/1.1/wizard \
-H "Content-Type: application/json" \
--data-binary @/root/wizard.json
```

---

# ⏳ 3️⃣ Attente

👉 attendre **1 à 3 minutes**

---

# 🌐 4️⃣ Accès interface

```
https://IP_VM_ICI
```

---

# 🔐 5️⃣ Connexion

| Champ | Valeur |
|---|---|
| utilisateur | root |
| mot de passe | MDP_ICI |

---

# 🎯 Champs à remplacer

| Placeholder | Exemple |
|---|---|
| MDP_ICI | admin123 |
| NOM_ORGANISATION | Dawan |
| NOM_MACHINE | xivo |
| DOMAINE_LOCAL | localdomain |
| IP_VM_ICI | votre Ip|
| PASSERELLE_ICI | Votre Passerelle|
| DNS1_ICI | 8.8.8.8 |
| DNS2_ICI | 1.1.1.1 |

---

# ⚠️ Points importants

> [!warning]

- utiliser **HTTPS obligatoire**
- utiliser **127.0.0.1:9486**
- ne pas utiliser HTTP ❌
- ne pas utiliser `/wizard` seul ❌

---

# 🔎 Vérification

| Étape | Résultat attendu |
|---|---|
| envoi JSON | OK |
| attente | config appliquée |
| accès web | interface accessible |
| login | réussi |

---

# 🧠 Bonnes pratiques

> [!tip]

- vérifier le JSON avant envoi
- éviter les erreurs de syntaxe
- adapter les IP correctement
- tester avec curl avant prod

---

# 📊 Résumé

| Élément | Description |
|---|---|
| wizard.json | config |
| curl | envoi |
| API | traitement |
| XiVO | configuré |
| accès | web |

---

# 🎯 Conclusion

Cette méthode permet :

- une configuration rapide de XiVO
- une automatisation complète
- une standardisation des déploiements

👉 idéale pour :

🔥 lab  
🔥 déploiement rapide  
🔥 administration système