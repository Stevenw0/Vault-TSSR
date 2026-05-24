# 🪟 WSUS — Windows Server Update Services

> [!info]
> **WSUS (Windows Server Update Services)** est un rôle Windows Server permettant  
> de **centraliser, contrôler et distribuer les mises à jour Microsoft**  
> sur un parc informatique.

---

## 🧠 À quoi sert WSUS ?

WSUS permet à un administrateur de :
- Télécharger les mises à jour **une seule fois**
- Choisir **quelles mises à jour sont déployées**
- Contrôler **quand** et **sur quelles machines**
- Réduire la bande passante Internet
- Assurer une **homogénéité du parc**

> [!important]
> WSUS donne le **contrôle total** sur Windows Update en entreprise.

---

## 🏗️ Architecture WSUS

### 🔹 Serveur WSUS
- Rôle installé sur **Windows Server**
- Télécharge les mises à jour depuis :
  - Microsoft Update
  - ou un WSUS parent (hiérarchie)

### 🔹 Clients WSUS
- Postes Windows / serveurs
- Contactent le serveur WSUS interne
- Téléchargent et installent les mises à jour approuvées

---

## 🔄 Fonctionnement général

1. Le serveur WSUS se synchronise avec Microsoft
2. Les mises à jour sont **cataloguées**
3. L’administrateur **approuve** ou **refuse**
4. Les clients interrogent WSUS
5. Les mises à jour approuvées sont installées

---

## 🧩 Composants clés

### 🗄️ Base de données
- WID (Windows Internal Database)
- ou SQL Server

### 💾 Stockage
- Les fichiers de mises à jour sont stockés localement
- Peut consommer **beaucoup d’espace disque**

### 🌐 IIS
- WSUS repose sur **IIS** pour distribuer les mises à jour

---

## 🧪 Types de mises à jour gérées

- Correctifs de sécurité
- Mises à jour cumulatives
- Mises à jour de fonctionnalités
- Pilotes
- Définitions Microsoft Defender
- Service Packs (anciens systèmes)

---

## 🧱 Groupes WSUS

> [!info]
> Les machines peuvent être organisées en **groupes**.

Exemples :
- Test
- Production
- Serveurs
- Postes utilisateurs

### Modes de regroupement
- Manuel
- Côté client (via GPO)

> [!tip]
> Toujours tester les mises à jour sur un groupe pilote avant production.

---

## 🛠️ Administration de WSUS

### Console WSUS
- Interface graphique MMC
- Gestion des mises à jour
- Suivi des états clients

### Commandes utiles
```cmd
wsusutil checkhealth
```

```cmd
wsusutil reset
```

```cmd
wsusutil cleanup
```

> [!note]
> Le nettoyage est **indispensable** pour garder un WSUS performant.

---

## 🧠 WSUS et GPO

> [!important]
> Les clients sont configurés via **Stratégies de groupe (GPO)**.

Paramètres clés :
- URL du serveur WSUS
- Fréquence de détection
- Mode d’installation
- Redémarrage automatique

---

## ⚠️ Limitations de WSUS

> [!warning]
> - Interface parfois lente
> - Maintenance régulière obligatoire
> - Ne gère que les produits Microsoft
> - Pas de déploiement applicatif tiers

---

## 🧠 Bonnes pratiques

> [!tip]
> - Limiter les produits et classifications
> - Mettre en place des groupes de test
> - Nettoyer WSUS régulièrement
> - Surveiller l’espace disque
> - Documenter les approbations

---

## 🔄 WSUS vs Windows Update classique

| WSUS | Windows Update |
|---|---|
| Contrôle admin | Automatique |
| Centralisé | Poste par poste |
| Bande passante optimisée | Internet direct |
| Approvals manuels | Pas de validation |

---

## 🧾 Cas d’usage typiques

- Entreprises
- Établissements scolaires
- Administrations
- Environnements sécurisés
- Réseaux sans accès Internet direct

---

## 🧾 Summary

> [!summary]
> - WSUS centralise les mises à jour Microsoft
> - L’administrateur décide quoi et quand déployer
> - Fonctionne avec IIS, base de données et GPO
> - Réduit la bande passante et les risques
> - Nécessite maintenance et bonnes pratiques
> - Outil clé pour l’administration Windows en entreprise

---
