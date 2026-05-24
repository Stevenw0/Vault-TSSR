# 🐄 Longhorn — Stockage distribué pour Kubernetes

---

# 📌 Définition

**Longhorn** est une solution de **stockage distribué** pour Kubernetes développée par **SUSE**.

👉 Elle permet de fournir :

- du stockage persistant
- de la réplication
- de la haute disponibilité

---

# 🧠 Principe

Longhorn transforme les disques des nodes en un stockage distribué :

```
Pods → Volumes → Longhorn → Disques des nodes
```

---

# 🎯 Objectif

| Fonction | Description |
|---|---|
| stockage | persistant |
| réplication | données |
| tolérance panne | automatique |
| gestion | via UI |

---

# 🏗️ Architecture

## Schéma

```
Pod
 ↓
Volume Longhorn
 ↓
Replica (plusieurs nodes)
 ↓
Disques physiques
```

---

# 📊 Composants

| Composant | Rôle |
|---|---|
| Volume | disque virtuel |
| Replica | copie données |
| Engine | gestion volume |
| Node | machine Kubernetes |

---

# 🔁 Réplication

Longhorn réplique les données :

```
Volume → Replica 1 → Replica 2 → Replica 3
```

👉 si un node tombe → données disponibles

---

# 📦 Volumes persistants

Longhorn s’intègre avec Kubernetes :

| Élément | Description |
|---|---|
| PV | volume |
| PVC | demande stockage |
| StorageClass | config |

---

# ⚙️ Exemple PVC

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

---

# 🌐 Interface web

Longhorn fournit une UI :

👉 gestion :

- volumes
- replicas
- nodes
- backups

---

# 📊 Fonctionnalités

| Fonction | Description |
|---|---|
| snapshot | sauvegarde |
| backup | externe |
| restore | récupération |
| scaling | dynamique |

---

# 🔄 Snapshots

Permet de :

- sauvegarder état
- rollback

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| bases de données | MySQL |
| stockage apps | fichiers |
| Kubernetes | persistent storage |
| lab | stockage local |

---

# ⚠️ Bonnes pratiques

> [!warning]

- minimum 3 replicas
- surveiller stockage
- utiliser nodes fiables
- prévoir sauvegardes

---

# 📊 Longhorn vs stockage classique

| Critère | Longhorn | Disque local |
|---|---|---|
| HA | oui | non |
| réplication | oui | non |
| Kubernetes | natif | limité |
| complexité | moyenne | faible |

---

# 📦 Installation (simplifiée)

```bash
kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml
```

---

# 🔎 Vérification

```bash
kubectl get pods -n longhorn-system
```

---

# 📊 Résumé

| Élément | Description |
|---|---|
| Longhorn | stockage distribué |
| usage | Kubernetes |
| avantage | HA |
| réplication | automatique |
| UI | oui |

---

# 🎯 Conclusion

Longhorn permet :

- d’ajouter du stockage persistant à Kubernetes
- de sécuriser les données
- de simplifier la gestion du stockage

👉 idéal pour les environnements Kubernetes modernes