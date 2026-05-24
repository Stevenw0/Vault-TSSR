# 💾 PV & PVC — Stockage Kubernetes

---

# 📌 Définition

Dans Kubernetes :

- **PV (Persistent Volume)** → volume de stockage réel
- **PVC (Persistent Volume Claim)** → demande de stockage

👉 Permet de **stocker des données persistantes** (non perdues si le pod redémarre)

---

# 🧠 Principe

```
Pod → PVC → PV → Storage (disque, NFS, Longhorn…)
```

---

# 📊 Rôle des composants

| Élément | Description |
|---|---|
| PV | ressource de stockage |
| PVC | demande utilisateur |
| StorageClass | configuration |

---

# 🧩 Persistent Volume (PV)

## Définition

Un **PV** est un volume disponible dans le cluster.

---

## Exemple

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mon-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
```

---

# 📦 Persistent Volume Claim (PVC)

## Définition

Un **PVC** est une demande de stockage par un pod.

---

## Exemple

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mon-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

---

# 🔗 Relation PV / PVC

| Action | Résultat |
|---|---|
| PVC demande | Kubernetes cherche PV |
| match trouvé | binding |
| sinon | création dynamique |

---

# ⚙️ Binding

```
PVC ↔ PV
```

👉 association automatique si :

- taille suffisante
- mode compatible

---

# 📊 Modes d’accès

| Mode | Description |
|---|---|
| ReadWriteOnce (RWO) | 1 node |
| ReadOnlyMany (ROX) | lecture multiple |
| ReadWriteMany (RWX) | multi accès |

---

# ⚙️ StorageClass

Permet la création automatique :

```yaml
storageClassName: longhorn
```

---

👉 utilisé avec :

- Longhorn
- NFS
- Cloud (AWS, GCP)

---

# 📦 Utilisation dans un Pod

```yaml
volumes:
  - name: data
    persistentVolumeClaim:
      claimName: mon-pvc
```

---

# 📊 Cycle de vie

```
Créer PVC → Binding → Utilisation → Suppression
```

---

# 🔄 Reclaim Policy

| Type | Description |
|---|---|
| Retain | conserve données |
| Delete | supprime |
| Recycle | nettoie |

---

# 🧠 Cas d’utilisation

| Usage | Exemple |
|---|---|
| base de données | MySQL |
| stockage fichiers | uploads |
| logs | applications |
| apps stateful | Kubernetes |

---

# ⚠️ Bonnes pratiques

> [!warning]

- utiliser StorageClass
- définir taille correcte
- sauvegarder données
- choisir bon access mode

---

# 📊 PV vs PVC

| Critère | PV | PVC |
|---|---|---|
| rôle | stockage réel |
| usage | infra |
| créé par | admin |
| utilisé par | pods |

---

# 📦 Exemple complet

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

# 📊 Résumé

| Élément | Description |
|---|---|
| PV | volume |
| PVC | demande |
| StorageClass | config |
| usage | stockage persistant |
| avantage | données conservées |

---

# 🎯 Conclusion

PV et PVC permettent :

- de **séparer stockage et application**
- de **rendre les pods persistants**
- de **gérer facilement les données**

👉 indispensables pour toute application stateful dans Kubernetes